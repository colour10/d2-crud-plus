import mockUtil from '../../../../../mock/base'

let options = {
  name: 'area',
  idGenerator: 0
}
const list = [
  { 'id': ++options.idGenerator, 'pca': ['11', '1101', '110101'], 'pca2': ['北京市', '市辖区', '东城区'], 'pca3': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pca4': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pcaTree': ['11'], 'pcaTree2': ['110101', '110102', '110105', '110106', '110107', '110108', '110109', '110111'] },
  { 'id': ++options.idGenerator, 'pca': ['11', '1101', '110101'], 'pca2': ['北京市', '市辖区', '东城区'], 'pca3': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pca4': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pcaTree': ['11'], 'pcaTree2': [ '110101', '110102' ] },
  { 'id': ++options.idGenerator, 'pca': ['11', '1101', '110101'], 'pca2': ['北京市', '市辖区', '东城区'], 'pca3': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pca4': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pcaTree': ['11'], 'pcaTree2': [ '110101', '110102' ] },
  { 'id': ++options.idGenerator, 'pca': ['11', '1101', '110101'], 'pca2': ['北京市', '市辖区', '东城区'], 'pca3': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pca4': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pcaTree': ['11'], 'pcaTree2': [ '110101', '110102' ] },
  { 'id': ++options.idGenerator, 'pca': ['11', '1101', '110101'], 'pca2': ['北京市', '市辖区', '东城区'], 'pca3': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pca4': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pcaTree': ['11'], 'pcaTree2': [ '110101', '110102' ] },
  { 'id': ++options.idGenerator, 'pca': ['11', '1101', '110101'], 'pca2': ['北京市', '市辖区', '东城区'], 'pca3': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pca4': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pcaTree': ['11'], 'pcaTree2': [ '110101', '110102' ] },
  { 'id': ++options.idGenerator, 'pca': ['11', '1101', '110101'], 'pca2': ['北京市', '市辖区', '东城区'], 'pca3': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pca4': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pcaTree': ['11'], 'pcaTree2': [ '110101', '110102' ] },
  { 'id': ++options.idGenerator, 'pca': ['11', '1101', '110101'], 'pca2': ['北京市', '市辖区', '东城区'], 'pca3': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pca4': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pcaTree': ['11'], 'pcaTree2': [ '110101', '110102' ] },
  { 'id': ++options.idGenerator, 'pca': ['11', '1101', '110101'], 'pca2': ['北京市', '市辖区', '东城区'], 'pca3': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pca4': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pcaTree': ['11'], 'pcaTree2': [ '110101', '110102' ] },
  { 'id': ++options.idGenerator, 'pca': ['11', '1101', '110101'], 'pca2': ['北京市', '市辖区', '东城区'], 'pca3': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pca4': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pcaTree': ['11'], 'pcaTree2': [ '110101', '110102' ] },
  { 'id': ++options.idGenerator, 'pca': ['11', '1101', '110101'], 'pca2': ['北京市', '市辖区', '东城区'], 'pca3': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pca4': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pcaTree': ['11'], 'pcaTree2': [ '110101', '110102' ] },
  { 'id': ++options.idGenerator, 'pca': ['11', '1101', '110101'], 'pca2': ['北京市', '市辖区', '东城区'], 'pca3': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pca4': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pcaTree': ['11'], 'pcaTree2': [ '110101', '110102' ] },
  { 'id': ++options.idGenerator, 'pca': ['11', '1101', '110101'], 'pca2': ['北京市', '市辖区', '东城区'], 'pca3': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pca4': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pcaTree': ['11'], 'pcaTree2': [ '110101', '110102' ] },
  { 'id': ++options.idGenerator, 'pca': ['11', '1101', '110101'], 'pca2': ['北京市', '市辖区', '东城区'], 'pca3': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pca4': [['北京市', '市辖区', '东城区'], ['北京市', '市辖区', '西城区']], 'pcaTree': ['11'], 'pcaTree2': [ '110101', '110102' ] }
]
options.list = list
let mock = mockUtil.buildMock(options)
export default mock
