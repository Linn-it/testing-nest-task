import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');

@Injectable()

export class CloudinaryService {
  async uploadImage(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    
    return new Promise((resolve, reject) => {
        console.log(file);
        v2.config({
            cloud_name: 'dxvib5pzl',
      api_key: '241194791188596',
      api_secret: 'fem9KFh_d8pXE7rcVvVTcvAEBrw',
          });
      const upload = v2.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
    
      toStream(file.buffer).pipe(upload);
    });
  }
}