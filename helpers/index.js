export * from './timehelper';
export * from './packages';
export * from './stateslist';
export * from './upsells';
export * from './api';
export * from './formValidators';
export * from './products';
export * from './queryPraser';
export * from './leadParser';
export * from './discounts';
export * from '../pages/_app';

function trackPageView(url) {
    try {
        window.gtag('config', 'UA-143508656-1', {
            page_location: url
        });
    } catch (error) {
        // silences the error in dev mode
        // and/or if gtag fails to load
    }
}
