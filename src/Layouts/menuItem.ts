import { MenuItemType } from '@paljs/ui/types';

const items: MenuItemType[] = [
  {
    title: 'Dashboard',
    icon: { name: 'home' },
    link: { href: '/dashboard' },
  },
  {
    title: 'OUTROS MENUS AQUI',
    group: true,
  },
];

export default items;
