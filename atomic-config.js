// Example https://github.com/acss-io/atomizer/blob/master/examples/example-config.js

module.exports = {
    // 'custom' maps custom suffixes to values and it is specially useful for theming
    // or things that you need to change globally in many different atomic classes.
    // these key/value pairs map to the custom suffixes in 'classNames'.
    // i.e. C(cprimary) will get color: #202328
    // Custom values may also be substituted into one
    // another via the #{ } syntax, which are resolved 
    // recursively
    'custom': {
        cprimary: '#202328',
        csecondary: '#EBEBFA',
        cgrey1: '#979AA1',
        cgrey2: '#7C7C7C',
        ctint1: '#979AA1',
        ctint2: '#7C7C7C',
        cwhite: '#FFFFFF',
        cblack: '#000000'
    },
    // breakpoints define media queries and is used to contain the style of a class
    // only when that media query is active.
    // i.e. given the breakpoint below, `D-b--sm` will be inside of the media query
    // `@media(min-width:500px)`, meaning that it will only apply `display:block`
    // once the viewport has at least 500px.
    breakPoints: {
        'sm': '@media(min-width:640px)', // breakpoint 1 (see classNames below)
        'md': '@media(min-width:768px)', // breakpoint 2
        'lg': '@media(min-width:992px)', // breakpoint 3
        'xl': '@media(min-width:1200px)' // breakpoint 4
    },
    // this is the list of atomic class names your project uses.
    // you don't have to explictly declare them like this since atomizer can parse
    // any file and create this list automatically for you.  However, you always 
    // have the option to explicitly declare classnames if you find it helpful for your
    // project.
    'classNames': [
        'C(cprimary)',      // custom 2 (maps to 'custom' key above)
        'C(csecondary)',
        'C(cgrey1)',
        'C(cgrey2)',
        'C(ctint1)',
        'C(ctint2)',
        'C(cwhite)',
        'C(cblack)',
        'Td(u)',            // normal
        'Td(u):h',          // pseudo classs
        'foo>W(uh)',        // descendent
        'D(n)!',            // important
        'Op(1)!',           // important
        'W(1/12)',          // fraction
        'W(2/12)',          // fraction
        'W(3/12)',          // fraction
        'W(4/12)',          // fraction
        'W(5/12)',          // fraction
        'W(6/12)',          // fraction
        'W(7/12)',          // fraction
        'W(8/12)',          // fraction
        'W(9/12)',          // fraction
        'W(10/12)',         // fraction
        'W(11/12)',         // fraction
        'W(12/12)',         // fraction
        'W(1/12)--sm',      // fraction
        'W(2/12)--sm',      // fraction
        'W(3/12)--sm',      // fraction
        'W(4/12)--sm',      // fraction
        'W(5/12)--sm',      // fraction
        'W(6/12)--sm',      // fraction
        'W(7/12)--sm',      // fraction
        'W(8/12)--sm',      // fraction
        'W(9/12)--sm',      // fraction
        'W(10/12)--sm',     // fraction
        'W(11/12)--sm',     // fraction
        'W(12/12)--sm',     // fraction
        'W(1/12)--md',      // fraction
        'W(2/12)--md',      // fraction
        'W(3/12)--md',      // fraction
        'W(4/12)--md',      // fraction
        'W(5/12)--md',      // fraction
        'W(6/12)--md',      // fraction
        'W(7/12)--md',      // fraction
        'W(8/12)--md',      // fraction
        'W(9/12)--md',      // fraction
        'W(10/12)--md',     // fraction
        'W(11/12)--md',     // fraction
        'W(12/12)--md',     // fraction
        'W(1/12)--lg',      // fraction
        'W(2/12)--lg',      // fraction
        'W(3/12)--lg',      // fraction
        'W(4/12)--lg',      // fraction
        'W(5/12)--lg',      // fraction
        'W(6/12)--lg',      // fraction
        'W(7/12)--lg',      // fraction
        'W(8/12)--lg',      // fraction
        'W(9/12)--lg',      // fraction
        'W(10/12)--lg',     // fraction
        'W(11/12)--lg',     // fraction
        'W(12/12)--lg',     // fraction
    ],
    // this is the opposite of the above. There are cases that you may want to tell
    // atomizer to ignore class names already defined in `classNames`.
    // This is useful when classes are automatically added by the parser or when 
    // you want to create different atomic css files from the same set of classNames.
    'exclude': []
};