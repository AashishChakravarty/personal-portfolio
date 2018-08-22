import { SnotifyPosition } from 'ng-snotify';

export const environment = {
  production: true,
  baseUrl : `http://${window.location.hostname}/portfolio/`,

  snotifyConfig : {
    showProgressBar: false,
    position: SnotifyPosition.rightTop,
  },
};
