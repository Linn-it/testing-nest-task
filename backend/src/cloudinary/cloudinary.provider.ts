import { v2 } from 'cloudinary';

export const CloudinaryProvider = {
  provide: 'Cloudinary',
  useFactory: (): any => {
    return v2.config({
      cloud_name: 'dxvib5pzl',
      api_key: '241194791188596',
      api_secret: 'fem9KFh_d8pXE7rcVvVTcvAEBrw',
    });
  },
};