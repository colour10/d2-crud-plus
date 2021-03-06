import config from './lib/config'
import D2pImagesFormat from './lib/images-format'
import { d2CrudPlus } from 'd2-crud-plus'
import 'cropperjs/dist/cropper.css'
const types = {
  'image-uploader': {
    form: { component: { name: 'd2p-file-uploader', props: { elProps: { listType: 'picture-card', accept: '.png,.jpeg,.jpg,.ico,.bmp,.gif' } } } },
    component: { name: 'd2p-images-format' },
    align: 'center'
  },
  'avatar-uploader': {
    form: { component: { name: 'd2p-file-uploader', props: { elProps: { listType: 'avatar', accept: '.png,.jpeg,.jpg,.ico,.bmp,.gif', showFileList: false } } } },
    component: { name: 'd2p-images-format' },
    align: 'center',
    valueResolve (row, col) {
      let value = row[col.key]
      if (value != null && value instanceof Array) {
        if (value.length >= 0) {
          row[col.key] = value[0].url
        } else {
          row[col.key] = null
        }
      }
    }
  },
  'file-uploader': {
    form: { component: { name: 'd2p-file-uploader', props: { elProps: { listType: 'text' } } } }
  },
  'avatar-cropper': {
    form: { component: { name: 'd2p-cropper-uploader', props: { accept: '.png,.jpeg,.jpg,.ico,.bmp,.gif' } } },
    component: { name: 'd2p-images-format' },
    align: 'center'
  }
}

function install (Vue, options) {
  Vue.component('d2p-file-uploader', () => import('./lib/file-uploader'))
  Vue.component('d2p-images-format', D2pImagesFormat)
  Vue.component('d2p-cropper-uploader', () => import('./lib/cropper-uploader'))
  Vue.component('d2p-cropper', () => import('./lib/cropper'))

  if (options != null) {
    // 覆盖用户配置
    Object.assign(config, options)
  }
  // 配置type
  if (d2CrudPlus != null) {
    // 设置默认uploader
    let defaultType = config.defaultType != null ? config.defaultType : 'cos'
    for (let typesKey in types) {
      types[typesKey].form.component.props.type = defaultType
    }
    d2CrudPlus.util.columnResolve.addTypes(types)
  }
}

export default {
  install
}
