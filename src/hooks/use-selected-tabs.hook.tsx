import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderTabsKeys } from '../models/enums/header-tabs-keys.enum';
import { Routes } from '../models/enums/routes.enum';

export default function useSelectedTabs() {
  const location = useLocation();
  const [selectedKeys, setselectedKeys] = useState<Array<string>>([]);

  useEffect(() => {
    switch (location.pathname) {
      case Routes.Home:
        setselectedKeys([]);
        break;
      case Routes.Kit:
        setselectedKeys([HeaderTabsKeys.Kit]);
        break;
      case Routes.About:
        setselectedKeys([HeaderTabsKeys.About]);
        break;
      case Routes.Resources:
        setselectedKeys([HeaderTabsKeys.Resources]);
        break;

      default:
        break;
    }
  }, [location]);

  return selectedKeys;
}
