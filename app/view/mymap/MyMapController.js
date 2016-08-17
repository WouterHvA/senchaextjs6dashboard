Ext.define('Admin.view.mymap.MyMapController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mymap',

    initViewModel: function(vm) {
        var me = this;

        vm.bind('{city}', me.geocodeCity, me);
       // vm.bind('{location}', me.load, me);
    },

    geocodeCity: function (city) {
        var me = this;
        Shared.Geocode.geocodeAddress(city, function (coordinates) {
            if (coordinates) {
                me.getViewModel().set('location', coordinates);
                console.log(me.getViewModel());
                
            }
        });
    },

    load: function() {
        //for example set a store on the map, to load markers
    }

});
