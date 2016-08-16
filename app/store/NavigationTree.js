Ext.define('Admin.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [
            {
                text: 'Dashboard',
                iconCls: 'x-fa fa-desktop',
                rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'admindashboard',
                routeId: 'dashboard', // routeId defaults to viewType
                leaf: true
            },
            {
                text: 'Users',
                iconCls: 'x-fa fa-leanpub',
                expanded: false,
                selectable: false,
                //routeId: 'pages-parent',
                //id: 'pages-parent',

                children: [
                    {
                        text: 'Lock Screen',
                        iconCls: 'x-fa fa-lock',
                        viewType: 'lockscreen',
                        leaf: true
                    },
                    {
                        text: 'Login',
                        iconCls: 'x-fa fa-check',
                        viewType: 'login',
                        leaf: true
                    },
                    {
                        text: 'Register',
                        iconCls: 'x-fa fa-pencil-square-o',
                        viewType: 'register',
                        leaf: true
                    },
                    {
                        text: 'Password Reset',
                        iconCls: 'x-fa fa-lightbulb-o',
                        viewType: 'passwordreset',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Widgets',
                iconCls: 'x-fa fa-flask',
                viewType: 'widgets',
                leaf: true
            }
        ]
    }
});
