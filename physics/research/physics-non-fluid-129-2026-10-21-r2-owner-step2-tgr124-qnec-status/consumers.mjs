import {consumers} from '../../../tools/physics-support/batch-scope-review.mjs';
import {writeFileSync} from 'node:fs';
const result={at:new Date().toISOString(),root:'rem-tgrx-qnec-qfc-status',method:'Actual normative consumers() over current item logical deps and all wikilink references',consumers:consumers(process.cwd(),['rem-tgrx-qnec-qfc-status'])};
writeFileSync(new URL('./consumer-closure.json',import.meta.url),JSON.stringify(result,null,2)+'\n');console.log(result);
