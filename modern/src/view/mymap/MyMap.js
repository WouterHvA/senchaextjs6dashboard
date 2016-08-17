Ext.define('Admin.view.mymap.MyMap', {
    extend: 'Shared.view.Map',

    requires: [
        'Admin.view.mymap.MyMapController',
        'Admin.view.mymap.MyMapModel'
    ],

    alias: 'widget.mymap',

    controller: 'mymap',
    viewModel: 'mymap',

    config: {
        location: null,
        store: null,
        selection: null
    },

    bind: {
        location: '{location}'
        //store: '{}', //marker store
        //selection: '{}' //marker selection
    }
});
