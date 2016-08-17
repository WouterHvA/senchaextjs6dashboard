Ext.define('Admin.view.mymap.MyMap', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Admin.view.mymap.MyMapController',
        'Admin.view.mymap.MyMapModel'
    ],

    controller: 'mymap',
    viewModel: 'mymap',

    html: 'map here'
});
