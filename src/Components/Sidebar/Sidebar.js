import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <ProSidebar>
      <SidebarHeader>
        <h1>Dashboard</h1>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape='square'>
          <SubMenu title='Components'>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <span>Created By Rajkamal</span>
      </SidebarFooter>
    </ProSidebar>
  )
}
export default Sidebar
