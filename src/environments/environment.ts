// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_ENDPOINT: 'http://54.245.128.14:3000',
  APP_NAME: 'CarsGoat Admin',
  DEFAULT_RECORDS_LIMIT: 6,
  DEFAULT_PAGES_PAGINATION: 5, //Defines the maximum number of page links to display
  DEFAULT_PAGE_LIMIT_OPTIONS: [
    { value: 6 },
    { value: 12 },
    { value: 24 },
    { value: 48 },
    { value: 96 },
  ],
  MESSAGES:{
    LOGOUT_SUCCESS:'Loggedout successfully.'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
