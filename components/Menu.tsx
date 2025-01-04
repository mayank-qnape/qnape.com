import { Avatar, Dropdown, MenuProps } from 'antd'
import { Comp } from './Components';

const UserMenu = () => {
  const items: MenuProps['items'] = [
    {
      label: '1st menu item',
      key: '0',
    },
    {
      label: '1st menu item',
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];
  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <Avatar icon={<Comp.Icons.User />} className='text-black dark:text-white border-black dark:border-white bg-white dark:bg-black cursor-pointer' />
    </Dropdown>
  )
}

const Menu = { UserMenu }
export default Menu