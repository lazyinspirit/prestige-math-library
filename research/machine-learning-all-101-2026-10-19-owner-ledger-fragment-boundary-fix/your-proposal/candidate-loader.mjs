import {pathToFileURL} from 'node:url';
const live=pathToFileURL(process.cwd()+'/tools/step6-ledger-fragment.mjs').href;
const candidate=new URL('./tools/step6-ledger-fragment.mjs',import.meta.url).href;
const testLive=pathToFileURL(process.cwd()+'/tools/step6-ledger-fragment.test.mjs').href;
const testCandidate=new URL('./tools/step6-ledger-fragment.test.mjs',import.meta.url).href;
export async function load(url,context,next){return next(url===live?candidate:url===testLive?testCandidate:url,context);}
