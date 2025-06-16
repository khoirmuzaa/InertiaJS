import { NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import {
  // BadgeDollarSign,
  BookOpen,
  BookUser,
  Box,
  // ChartBarStacked,
  CircleUser,
  Contact,
  Folder,
  LayoutGrid,
  PackageCheck,
  Truck,
  Users,
} from 'lucide-react';

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import NavFooter from '../navigation/nav-footer';
import NavMain from '../navigation/nav-main';
import NavUser from '../navigation/nav-user';
import AppLogo from './app-logo';

export default function AppSidebar({ role = 'admin' }: { role?: 'admin' | 'courier' }) {
  const mainNavItems: NavItem[] =
    role === 'courier'
      ? [
          {
            title: 'Dashboard',
            href: '/courier',
            icon: LayoutGrid,
          },
          {
            title: 'Orderan Diambil',
            href: '/courier#diambil',
            icon: Truck,
          },
          {
            title: 'Pengiriman Selesai',
            href: '/courier#selesai',
            icon: PackageCheck,
          },
        ]
      : [
          {
            title: 'Dashboard',
            href: '/admin',
            icon: LayoutGrid,
          },
          {
            title: 'Brainware',
            icon: CircleUser,
            items: [
              {
                title: 'Users',
                href: route('users.index'),
                icon: Users,
              },
              {
                title: 'Contacts',
                href: route('contacts.index'),
                icon: Contact,
              },
              {
                title: 'Address',
                href: route('address.index'),
                icon: BookUser,
              },
            ],
          },
          {
            title: 'Products',
            href: route('categories.index'),
            icon: Box,
          },
        ];

  const footerNavItems: NavItem[] = [
    {
      title: 'Repository',
      href: 'https://github.com/rhindottire/InertiaJS/tree/development',
      icon: Folder,
    },
    {
      title: 'Documentation',
      href: 'https://laravel.com/docs/starter-kits',
      icon: BookOpen,
    },
  ];

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard" prefetch>
                <AppLogo />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={mainNavItems} />
      </SidebarContent>

      <SidebarFooter>
        <NavFooter items={footerNavItems} className="mt-auto" />
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
