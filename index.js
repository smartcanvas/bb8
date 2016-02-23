var Cylon = require('cylon');

Cylon.robot({
  connections: {
    bluetooth: { adaptor: 'central', uuid: 'f3383a4409ea', module: 'cylon-ble' }
  },

  devices: {
    bb8: { driver: 'bb8', module: 'cylon-sphero-ble' }
  },

  work: function(my) {
    
    my.bb8.color(0xFFFF00, function(){
      console.log('Cor alterada!!');
    });

    after(500, function() {
      my.bb8.color(0xFF00FF);
    });

    after(10000, function() {
      my.bb8.roll(100, 0);
    });

    after(2000, function() {
      my.bb8.roll(60, 180);
    });

    after(3000, function() {
      my.bb8.stop();
    });

  }
}).start();