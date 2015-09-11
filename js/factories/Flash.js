/**
 * Flash messages
 *
 * Example:
 *    Flash.set('success', 'whoohoo')  => null
 *    Flash.isset('success')           => true
 *    Flash.get('success')             => whoohoo
 *    Flash.isset('success')           => false
 *    Flash.get('success')             => undefined
 */
risk.factory('Flash', function() {
  var flashMessages = {};

  return {
    set : function(key, val) {
      flashMessages[key] = val;
    },

    get : function(key) {
      var msg = flashMessages[key];
      console.log(msg);
      delete flashMessages[key];

      return msg;
    },

    isset : function(key) {
      return (key in flashMessages);
    }
  }
});