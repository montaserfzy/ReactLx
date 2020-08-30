import React from "react";

const Dashboard = React.lazy(() => import("src/pages/dashboard/dashboard"));
const Profile = React.lazy(() => import("src/pages/profile/profile"));

const Routes = [
    {
        key: 1,
        name: 'dashboard',
        path: '/',
        exact: true,
        isAuth: true,
        title: 'Dashboard',
        component: Dashboard
    },
    {
        key: 2,
        name: 'Profile',
        path: '/profile',
        exact: true,
        isAuth: true,
        title: 'Profile',
        component: Profile
    },
    {
        key: 3,
        name: '404',
        path: '/404',
        exact: true,
        isAuth: true,
        title: 'Page Not Found',
        component: ()=>(<div>404</div>)
    },
];

export default Routes;
