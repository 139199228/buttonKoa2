<?php
$dbms='mysql';     //数据库类型
$host='localhost'; //数据库主机名
$dbName='clickButton';    //使用的数据库
$user='root';      //数据库连接用户名
$pass='';          //对应的密码
$dsn="$dbms:host=$host;dbname=$dbName";
class Parint{
    public $dbms;
    public $host;
    public $dbname;
    public $user;
    public $pass;
    public $dsn;
    public $dbh;
    public function __construct($dbms,$host,$dbname,$user,$pass,$dsn){
        $this->dbms=$dbms;
        $this->host=$host;
        $this->dbname=$dbname;
        $this->user=$user;
        $this->pass=$pass;
        $this->dsn=$dsn;
    }
    public function getConn(){
        try {
            $this->dbh = new PDO($this->dsn, $this->user, $this->pass); //初始化一个PDO对象
            echo "连接成功<br/>";
        } catch (PDOException $e) {
            die ("Error!: " . $e->getMessage() . "<br/>");
        }
    }
    public function updata($sql){   
        if($this->dbh == null){
            $this->getConn();
        }
        // 你还可以进行一次搜索操作
        $count = $this->dbh->exec($sql);
        $arr=array("success"=>"$count");
        echo json_encode($arr);
        $this->closeCon();
    }
    public function closeCon(){
        $this->dbh=null;
        $db = new PDO($this->dsn, $this->user, $this->pass, array(PDO::ATTR_PERSISTENT => true));
    }

}
class Child extends Parint{
    public function __construct($dbms,$host,$dbname,$user,$pass,$dsn){
        parent::__construct($dbms,$host,$dbname,$user,$pass,$dsn);
    }
    public function getCon(){
        $sql = "UPDATE `text` SET`num`=num+1 WHERE id=1";
        $this->updata($sql);
    }
}
$button = new Child($dbms,$host,$dbName,$user,$pass,$dsn);
$button->getCon();

?>