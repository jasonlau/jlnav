<!-- 
/* 
    JLNav - A jQuery plugin
    ==================================================================
    Copyright (c)2012 JasonLau.biz - Version 1.0
    ==================================================================
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
    
    Example HTML structure for menu:
    
    <div class="nav-menu">
    <ul><li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a>
    <ul>
    	<li><a href="#">Item 2a</a></li>
    	<li><a href="#">Item 2b</a>
    	<ul>
    		<li><a href="#">Item 2b1</a></li>
    		<li><a href="#">Item 2b2</a></li>
    		<li><a href="#">Item 2b3</a></li>
    	</ul>
    </li>
    	<li><a href="#">Item 2c</a></li>
    	<li><a href="#">Item 2d</a></li>
    </ul>
    </li>
    <li><a href="#">Item 3</a></li>
    <li><a href="#">Item 4</a></li>
    <li><a href="#">Item 5</a></li>
    </ul>
    </div>
    
    Example JS:
    
    jQuery(function($){
        $(".nav-menu").jlnav({
			 nav_font: '15px arial,sans-serif',
			 nav_width: '100%',
			 nav_padding: '0 20px',
             nav_margin: '0px auto 20px auto',
             nav_shadow_rgba: '0, 0, 0, 0.4',
             nav_shadow_width: '0px 1px 2px 0px',
			 nav_text_color: 'eee',
			 nav_bgcolor: '222',
             nav_gradient_from: '252525',
             nav_gradient_to: '0a0a0a',
             subnav_font: '13px arial,sans-serif',
             subnav_bgcolor: 'f9f9f9',
             subnav_text_color: '444',
             subnav_hover_bgcolor: 'f9f9f9',
             subnav_hover_gradient_from: 'f9f9f9',
             subnav_hover_gradient_to: 'e5e5e5',
             subnav_hover_text_color: '373737',
             subnav_focus_bgcolor: 'efefef',
             subnav_border_color: 'ddd'
        });
    });
*/

(function($){
 	$.fn.extend({ 
 		jlnav: function(options) {
			var defaults = {
			 nav_font: '15px arial,sans-serif',
			 nav_width: '100%',
			 nav_padding: '0 20px',
             nav_margin: '0px auto 20px auto',
             nav_shadow_rgba: '0, 0, 0, 0.4',
             nav_shadow_width: '0px 1px 2px 0px',
			 nav_text_color: 'eee',
			 nav_bgcolor: '222',
             nav_gradient_from: '252525',
             nav_gradient_to: '0a0a0a',
             subnav_font: '13px arial,sans-serif',
             subnav_bgcolor: 'f9f9f9',
             subnav_text_color: '444',
             subnav_hover_bgcolor: 'f9f9f9',
             subnav_hover_gradient_from: 'f9f9f9',
             subnav_hover_gradient_to: 'e5e5e5',
             subnav_hover_text_color: '373737',
             subnav_focus_bgcolor: 'efefef',
             subnav_border_color: 'ddd'
			}
            var option =  $.extend(defaults, options);
            return this.each(function() {
    		  var obj = $(this), id = obj.attr('id');
              if(!id){
                id = 'menu_' + Math.round(Math.random()*1000);
                obj.attr({'id':id});
              }
              var menu_style = '<style type="text/css"><!--'
              +'#' + id + ' { background: #' + option.nav_bgcolor + '; background: -moz-linear-gradient(#' + option.nav_gradient_from + ', #' + option.nav_gradient_to + '); background: -o-linear-gradient(#' + option.nav_gradient_from + ', #' + option.nav_gradient_to + '); background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#' + option.nav_gradient_from + '), to(#' + option.nav_gradient_to + ')); background: -webkit-linear-gradient(#' + option.nav_gradient_from + ', #' + option.nav_gradient_to + '); -webkit-box-shadow: rgba(' + option.nav_shadow_rgba + ') ' + option.nav_shadow_width + '; -moz-box-shadow: rgba(' + option.nav_shadow_rgba + ') ' + option.nav_shadow_width + '; box-shadow: rgba(' + option.nav_shadow_rgba + ') ' + option.nav_shadow_width + '; clear: both; display: block; float: left; margin: ' + option.nav_margin + '; width: ' + option.nav_width + '; padding: ' + option.nav_padding + '; }'
              +'#' + id + ' ul { font: ' + option.nav_font + '; list-style: none; margin: 0 0 0 -0.8125em; padding-left: 0;}'
              +'#' + id + ' li { float: left; position: relative; }'
              +'#' + id + ' a { color: #' + option.nav_text_color + '; display: block; line-height: 3.333em; padding: 0 1.2125em; text-decoration: none; }'
              +'#' + id + ' ul ul { -moz-box-shadow: 0 3px 3px rgba(0,0,0,0.2); -webkit-box-shadow: 0 3px 3px rgba(0,0,0,0.2); box-shadow: 0 3px 3px rgba(0,0,0,0.2); display: none; float: left; margin: 0; position: absolute; top: 3.333em; left: 0; width: 188px; z-index: 99999; }'
              +'#' + id + ' ul ul ul { left: 100%; top: 0; }'
              +'#' + id + ' ul ul a { background: #' + option.subnav_bgcolor + '; border-bottom: 1px dotted #' + option.subnav_border_color + '; color: #' + option.subnav_text_color + '; font: ' + option.subnav_font + '; height: auto; line-height: 1.4em; padding: 10px 10px; width: 168px; }'
              +'#' + id + ' li:hover > a, #' + id + ' ul ul :hover > a, #' + id + ' a:focus { background: #' + option.subnav_focus_bgcolor + '; }'
              +'#' + id + ' li:hover > a, #' + id + ' a:focus { background: #' + option.subnav_hover_bgcolor + '; background: -moz-linear-gradient(#' + option.subnav_gradient_from + ', #' + option.subnav_gradient_to + '); background: -o-linear-gradient(#' + option.subnav_gradient_from + ', #' + option.subnav_gradient_to + '); background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#' + option.subnav_gradient_from + '), to(#' + option.subnav_gradient_to + ')); background: -webkit-linear-gradient(#' + option.subnav_gradient_from + ', #' + option.subnav_gradient_to + '); color: #' + option.subnav_hover_text_color + '; }'
              +'#' + id + ' ul li:hover > ul { display: block; }'
              +'--></style>';
              $("head").append(menu_style);                           
    		});
    	}
	});	
})(jQuery);
 -->