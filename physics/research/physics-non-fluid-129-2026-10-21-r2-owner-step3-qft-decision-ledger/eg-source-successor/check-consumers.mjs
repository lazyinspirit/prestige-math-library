import {consumers} from '../../../tools/physics-support/batch-scope-review.mjs';
import {writeFileSync,readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
const c=consumers(process.cwd(),['thm-qftx-scalar-eg-induction']);
writeFileSync(new URL('./consumer-cone.json',import.meta.url),JSON.stringify(c,null,2)+'\n');console.log(JSON.stringify(c));
