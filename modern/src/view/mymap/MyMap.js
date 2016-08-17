Ext.define('Admin.view.mymap.MyMap', {
    extend: 'Ext.container.Container',

    requires: [
        'Admin.view.mymap.MyMapController',
        'Admin.view.mymap.MyMapModel'
    ],


    alias: 'widget.mymap',

    controller: 'mymap',
    viewModel: 'mymap',

    html: 'map here mobile'
});
