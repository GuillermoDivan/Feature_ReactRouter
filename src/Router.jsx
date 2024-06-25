import { useState, useEffect, Children } from 'react';
import { EVENTS } from './consts';
import { match } from 'path-to-regexp';
import { getCurrentPath } from './utils';

export function Router ({children, routes = [], 
    defaultComponent: DefaultComponent = () => <h1>404</h1> }){
      const [currentPath, setCurrentPath] = useState(getCurrentPath());
    
      useEffect(() => {
        const onLocationChange = () => {
          setCurrentPath(getCurrentPath())
        }
        window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
        window.addEventListener(EVENTS.POPSTATE, onLocationChange);
    
        return() => {
          window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
          window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
        }
      }, []);

      let routeParams = {}


      const routesFromChildren = Children.map(children, ({props, type}) => {
        const { name } = type;
        const isRoute = name === 'Route';
        return isRoute ? props : null; 
      })
  
      const routesToUse = routes.concat(routesFromChildren).filter(Boolean);

      const Page = routesToUse.find(({path}) => {
        if (path === currentPath) return true;
        
        const matcherUrl = match(path, {decode: decodeURIComponent});
        const matched = matcherUrl(currentPath);
        if (!matched) return false;

        routeParams = matched.params; //Here it goes the word-s on the url.
        return true; // .find needs this to render the proper component.

        })?. Component

      return Page 
            ? <Page routeParams={routeParams} /> 
            : <DefaultComponent routeParams={routeParams}/>
    }
  