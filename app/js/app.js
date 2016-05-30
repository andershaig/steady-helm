var app = angular.module('steadyHelm', ['ngMaterial', 'tasks']);

app.config(function ($mdThemingProvider, $mdIconProvider) {
  $mdIconProvider
    .defaultIconSet("./img/svg/avatars.svg", 128)
    .icon("menu"       , "./img/svg/menu.svg"        , 24)
    .icon("share"      , "./img/svg/share.svg"       , 24)
    .icon("google_plus", "./img/svg/google_plus.svg" , 512)
    .icon("hangouts"   , "./img/svg/hangouts.svg"    , 512)
    .icon("twitter"    , "./img/svg/twitter.svg"     , 512)
    .icon("phone"      , "./img/svg/phone.svg"       , 512);

  var customPrimary = {
        '50': '#f0f6f2',
        '100': '#e0ede3',
        '200': '#d0e4d5',
        '300': '#bfdbc7',
        '400': '#afd1b8',
        '500': '#9FC8AA',
        '600': '#8fbf9c',
        '700': '#7fb58d',
        '800': '#6eac7f',
        '900': '#5ea371',
        'A100': '#ffffff',
        'A200': '#ffffff',
        'A400': '#ffffff',
        'A700': '#549365'
    };

    $mdThemingProvider
        .definePalette('customPrimary', 
                        customPrimary);

    var customBackground = {
        '50': '#838395',
        '100': '#757589',
        '200': '#69697b',
        '300': '#5d5d6d',
        '400': '#525260',
        '500': '#464652',
        '600': '#3a3a44',
        '700': '#2f2f36',
        '800': '#232329',
        '900': '#17171b',
        'A100': '#9090a1',
        'A200': '#9e9eac',
        'A400': '#acacb8',
        'A700': '#0b0b0d'
    };
    
    $mdThemingProvider
        .definePalette('customBackground', 
                        customBackground);

   $mdThemingProvider.theme('default')
       .primaryPalette('customPrimary')
       .backgroundPalette('customBackground')
});