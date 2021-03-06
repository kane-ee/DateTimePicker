unpack({
	Z : 'a|F|object|img|H|I|J|K',
	Y : 'object|img|H|em|strong|dfn|code|q|samp|kbd|var|cite|abbr|acronym|sub|sup',
	X : 'p|O|div|P|Q|table|G|H|I|L',
	W : 'a|H|I|F|K|J',
	V : 'R|L',
	U : 'G|H|I|J|K',
	ZC : '[E][Z]',
	T : 'R|form|N|L',
	ZB : 'align|char|charoff|valign',
	S : 'R|form|L',
	ZA : 'R|form|a|F|object|img|H|I|J|L',
	R : 'p|O|div|P|Q|fieldset|table',
	Q : 'pre|hr|blockquote|address',
	P : 'ul|ol|dl',
	O : 'h1|h2|h3|h4|h5|h6',
	N : 'M|K',
	M : 'a|G|H|I|J',
	L : 'noscript|K',
	K : 'ins|del|script',
	J : 'input|select|textarea|label|button',
	I : 'em|strong|dfn|code|q|samp|kbd|var|cite|abbr|acronym|sub|sup',
	H : 'tt|i|b|big|small',
	G : 'F;|object|img',
	F : 'br|span|bdo|map',
	E : 'A|B|C',
	D : 'accesskey|tabindex|onfocus|onblur',
	C : 'onclick|ondblclick|onmousedown|onmouseup|onmouseover|onmousemove|onmouseout|onkeypress|onkeydown|onkeyup',
	B : 'lang|xml:lang|dir',
	A : 'id|class|style|title'
}, 'script[id|charset|type|src|defer|xml:space][]' + 
	'style[B|id|type|media|title|xml:space][]' + 
	'object[E|declare|classid|codebase|data|type|codetype|archive|standby|height|width|usemap|name|tabindex][#|param|ZA]' + 
	'param[id|name|value|valuetype|type][]' + 
	'p[E][#|Z]' + 
	'a[E|D|charset|type|name|href|hreflang|rel|rev|shape|coords][#|F|object|img|H|I|J|K]' + 
	'br[A][]' + 
	'span[E][#|Z]' + 
	'bdo[A|C|B][#|Z]' + 
	'map[B|C|A|name][S|area]' + 
	'h1[E][#|Z]' + 
	'img[E|src|alt|longdesc|height|width|usemap|ismap][]' + 
	'tt[E][#|Z]' + 
	'i[E][#|Z]' + 
	'b[E][#|Z]' + 
	'big[E][#|Z]' + 
	'small[E][#|Z]' + 
	'em[E][#|Z]' + 
	'strong[E][#|Z]' + 
	'dfn[E][#|Z]' + 
	'code[E][#|Z]' + 
	'q[E|cite][#|Z]' + 
	'samp[E][#|Z]' + 
	'kbd[E][#|Z]' + 
	'var[E][#|Z]' + 
	'cite[E][#|Z]' + 
	'abbr[E][#|Z]' + 
	'acronym[E][#|Z]' + 
	'sub[E][#|Z]' + 
	'sup[E][#|Z]' + 
	'input[E|D|type|name|value|checked|disabled|readonly|size|maxlength|src|alt|usemap|onselect|onchange|accept][]' + 
	'select[E|name|size|multiple|disabled|tabindex|onfocus|onblur|onchange][optgroup|option]' + 
	'optgroup[E|disabled|label][option]' + 
	'option[E|selected|disabled|label|value][]' + 
	'textarea[E|D|name|rows|cols|disabled|readonly|onselect|onchange][]' + 
	'label[E|for|accesskey|onfocus|onblur][#|Z]' + 
	'button[E|D|name|value|type|disabled][#|p|O|div|P|Q|table|F|object|img|H|I|L]' + 
	'h2[E][#|Z]' + 
	'ins[E|cite|datetime][#|ZA]' + 
	'h3[E][#|Z]' + 
	'del[E|cite|datetime][#|ZA]' + 
	'h4[E][#|Z]' + 
	'h5[E][#|Z]' + 
	'h6[E][#|Z]' + 
	'div[E][#|ZA]' + 
	'ul[E][li]' + 
	'li[E][#|ZA]' + 
	'ol[E][li]' + 
	'dl[E][dt|dd]' + 
	'dt[E][#|Z]' + 
	'dd[E][#|ZA]' + 
	'pre[E|xml:space][#|W]' + 
	'hr[E][]' + 
	'blockquote[E|cite][S]' + 
	'address[E][#|Z]' + 
	'fieldset[E][#|legend|ZA]' + 
	'legend[E|accesskey][#|Z]' + 
	'table[E|summary|width|border|frame|rules|cellspacing|cellpadding][caption|col|colgroup|thead|tfoot|tbody|tr]' + 
	'caption[E][#|Z]' + 
	'col[E|span|width|ZB][]' + 
	'colgroup[E|span|width|ZB][col]' + 
	'thead[E|ZB][tr]' + 
	'tr[E|ZB][th|td]' + 
	'th[E|abbr|axis|headers|scope|rowspan|colspan|ZB][#|ZA]' + 
	'form[E|action|method|enctype|onsubmit|onreset|accept|accept-charset][V]' + 
	'noscript[E][S]' + 
	'td[E|abbr|axis|headers|scope|rowspan|colspan|ZB][#|ZA]' + 
	'tfoot[E|ZB][tr]' + 
	'tbody[E|ZB][tr]' + 
	'area[E|D|shape|coords|href|nohref|alt][]' + 
	'base[href|id][]' + 
	'body[E|onload|onunload][S]'
);