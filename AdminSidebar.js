// This is create by Aditya
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import './admindashByAdy.css'
import { Link,NavLink} from 'react-router-dom'
import view from './view.png'
import attendance from './attendance.jpg'
import department from './department.png'
import Manage from './Manage.png'
import logo1 from './logo1.png'
import logo2 from './logo2.png'
import { Button } from 'antd';
import { Avatar } from 'antd';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  TeamOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import AdminSidebarContent from './AdminSidebarContent';
import axios from 'axios';
import ApprovedAccountantTable from './ApprovedAccountantTable';

const { Header, Sider, Content ,Footer} = Layout;
const { SubMenu } = Menu;

const logout = (e) => {
  e.preventDefault();
  console.log("This is working")
  localStorage.removeItem("adminId");
  window.location.replace("/");
}

const menu = (
  <Menu>
    <Menu.Item key="1">
      <a><Link  style={{textDecoration:'none',color:'black'}} to="/empDisplay">Manage Employee</Link></a>
    </Menu.Item>
    <Menu.Item key="2">
      <a><Link style={{textDecoration:'none',color:'black'}} to="/attendance">Manage Attendance</Link></a>
    </Menu.Item>
    <Menu.Item key="3">
      <a><Link  style={{textDecoration:'none',color:'black'}} to="/dptManage">Manage Department</Link></a>
    </Menu.Item>
    <Menu.Item key="4">
      <a><Link style={{textDecoration:'none',color:'black'}}  to="/viewRe">View Reimursement</Link></a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="0">
      <a onClick={logout}>Logout</a>
    </Menu.Item>
  </Menu>
);
export default class AdminSidebar extends React.Component {
  constructor(props){
    super(props)
    this.state={
      accountReimburse: [],
      supervisorId: "",
      supervisorId1: "",
      supervisorIdOpen1: false,
      supervisorIdOpen2:false,
      accountantIdOpen: false,
      supervisorAprR: [],
      supervisorDisR: [],
      supervisorSingleAppR: {},
      supervisorSingleDisR: {},
      accountantAprR: [],
      accountantDisR: [],
      accountantSingleAppR: {},
      accountantSingleDisR: {},
      supervisor1: false,
      supervisor2: false,
      accountant1: false,
      accountant2: false,
      monthReim: [],
      singleMonthReim: {},
      monthReimOpen: false,
      monthReimOpen1: false,
      monthHandle: "",
      yearHandle:"",
      collapsed: false,
    }
    // this.accApproved=this.accApproved.bind(this)
  }
  // accApproved(){
  //   // document.getElementById("accview").style.display = "block";
  //   // document.getElementById("accdisview").style.display = "none";
  //   // document.getElementById("disview").style.display = "none";
  //   // document.getElementById("view").style.display = "none";
  //   // document.getElementById("months").style.display = "none";
  
  //   axios
  //   .get(
  //     "http://localhost:8081/allAccountantApproved"
  //   )
  //   .then((res) => {
  //     console.log(res.data);
  //     this.setState({ accountantAprR: res.data });
  //   })
  //   .catch((err) => console.log(err));
  // }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render(){
    return (
      <Layout>
        <Sider trigger={null} collapsible  collapsed={this.state.collapsed}>
          <div>
          {!this.state.collapsed &&<img className="logo1" src={logo1}/>}
          {this.state.collapsed&&<img className="logo2" src={logo2}/> }

          </div>
         
          <Menu theme="dark" mode="inline">
          <Menu.ItemGroup>
            <Menu.Item key="2" className="link" icon={<UserOutlined style={{color:"#ffa426"}}/>}>
            <Link className="link" style={{textDecoration:'none'}} to="/empDisplay">Manage Employee</Link>
            {/* <NavLink  to="/portoflio" activeClassName="your-active-class" className="link">Portoflio</NavLink> */}
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined style={{color:"#ffa426"}} />}>
            <Link className="link" style={{textDecoration:'none'}} to="/attendance">Manage Attendance</Link>            
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined style={{color:"#ffa426"}} />}>
            <Link className="link" style={{textDecoration:'none'}} to="/dptManage">Manage Department</Link>           
            </Menu.Item>
            <Menu.Item key="5" icon={<UserOutlined style={{color:"#ffa426"}} />}>
            <Link className="link" style={{textDecoration:'none'}}  to="/viewRe">View Reimursement</Link>            
            </Menu.Item>
            {/* <SubMenu key="sub1"icon={<UserOutlined />}  title="Reimbursement">
                  <SubMenu key="sub2" icon={<UserOutlined />}  title="Accountant">
                    <Menu.Item icon={<TeamOutlined />} onClick={ this.accApproved} key="5">AccountantTable</Menu.Item>
                    <Menu.Item icon={<TeamOutlined />}key="6">Disapproved</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" icon={<UserOutlined />}  title="Supervisor">
                    <Menu.Item icon={<TeamOutlined />}key="7">Approved</Menu.Item>
                    <Menu.Item icon={<TeamOutlined />}key="8">Disapproved</Menu.Item>
                  </SubMenu>
              <Menu.Item icon={<TeamOutlined />}key="12">By Month</Menu.Item>
            </SubMenu> */}
            </Menu.ItemGroup>
            
          </Menu>
          
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{backgroundColor:'#22b1ed',padding: 0}}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
              style:{color:'#fff'}
            })}
          <Dropdown  className="avatar" overlay={menu} trigger={['click']}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      <Avatar icon={<UserOutlined />}/>
                      <DownOutlined />
                  </a>
          </Dropdown>
          </Header>
        <Content>
          <span className="Admin">Admin</span>
          <AdminSidebarContent/>
          {/* <ApprovedAccountantTable/> */}
          <Footer style={{ textAlign: 'center',backgroundColor:"white"}}>© 2021 RealCoderZ - developed by <b><a href="#" style={{color:"black"}}>RealCoderZ</a></b></Footer>
        </Content>
        </Layout>
      </Layout>
      
    );
    
  }
}

