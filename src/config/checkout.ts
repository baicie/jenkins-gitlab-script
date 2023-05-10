import type { CheckOutConfig } from '../type'

export const checkoutConf: CheckOutConfig = {
  PortalApp: {
    from: 'refactor_test',
    to: 'refactor_test3',
    jenkins: {
      name: 'app-auth',
      branche: '2.2.0_dev',
      parameters: [{
        name: 'profile',
        value: 'dev>px',
      },
      {
        name: 'pxSetting',
        value: '{"type":"property","i18n":"health"}',
      }],
    },
  },
}
