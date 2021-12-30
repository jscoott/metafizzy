/*!
 * Flickity v2.3.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        require('./core'),
        require('./drag'),
        require('./prev-next-button'),
        require('./page-dots'),
        require('./player'),
        require('./add-remove-cell'),
        require('./lazyload'),
    );
  }

} )( window, function factory( Flickity ) {
  return Flickity;
} );
