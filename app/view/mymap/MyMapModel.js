Ext.define('Admin.view.mymap.MyMapModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mymap',

    requires: ['Shared.Geocode'],

    data: {
        location: null, //initViewModel in VC will set this
        city: 'Amsterdam'
    }
});
