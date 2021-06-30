import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const customMap = new CustomMap('map');
for (let i = 0; i < 20; i++) {
  let comp = new Company()
  customMap.addMarker(comp)
}

