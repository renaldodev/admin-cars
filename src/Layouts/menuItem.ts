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
  {
    title: 'Usuarios',
    icon: { name: 'person-add' },
    children: [
      {
        title: 'Listar usuarios',
        link: { href: '/users/list-user' },
      },
      {
        title: 'Adicionar usuarios',
        link: { href: '/users/add-user' },
      },
    ],
  },
];

export default items;
