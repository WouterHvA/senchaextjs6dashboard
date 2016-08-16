Ext.define('Admin.view.dashboard.Dashboard', {
    extend: 'Ext.container.Container',
    xtype: 'admindashboard',

    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],

    controller: 'dashboard',
    viewModel: {
        type: 'dashboard'
    },

    layout: 'responsivecolumn',
    
    listeners: {
        hide: 'onHideView'
    },

    items: [
     {
            xtype: 'earnings',
            userCls: 'big-20 small-50'
        }
    ]
});
