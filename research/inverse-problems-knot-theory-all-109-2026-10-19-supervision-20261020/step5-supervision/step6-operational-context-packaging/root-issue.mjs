// Research-only root issuance helper. Default verifies; --issue additionally needs
// a root-authored --authorization-file. Never invokes preflight/gates or runtime.
import {readFileSync,writeFileSync,readdirSync,lstatSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {dirname,resolve} from 'node:path';
const root=process.cwd(),base=dirname(fileURLToPath(import.meta.url));
const sha=b=>createHash('sha256').update(b).digest('hex');
const inventory=JSON.parse(readFileSync(base+'/inventory.json'));
const candidateBytes=readFileSync(base+'/proposed-operational-contexts.json');
const candidate=JSON.parse(candidateBytes);
const freeze=JSON.parse(readFileSync(base+'/freeze.json'));
const requireThat=(ok,message)=>{if(!ok)throw Error(message)};
for(const row of freeze.files)requireThat(sha(readFileSync(resolve(root,row.path)))===row.sha256,'frozen packet changed: '+row.path);
const git=args=>{const p=spawnSync('git',args,{encoding:'utf8',env:{...process.env,GIT_OPTIONAL_LOCKS:'0'}});requireThat(p.status===0,p.stderr);return p.stdout.trim()};
const binding=inventory.binding;
requireThat(git(['rev-parse','HEAD'])===binding.head,'HEAD changed; root must review/rebind');
requireThat(sha(readFileSync(git(['rev-parse','--git-path','index'])))===binding.index_sha256,'index changed; root must review/rebind');
for(const row of [binding.policy,binding.sdk])requireThat(sha(readFileSync(row.path))===row.sha256,'bound input changed: '+row.path);
const {operationalContextState}=await import(resolve(root,binding.sdk.path));
for(const row of candidate.directories){requireThat(row.selection==='symlinks-only','only typed link selection allowed');requireThat(JSON.stringify(operationalContextState(root,row.path))===JSON.stringify({entries:row.entries,sha256:row.sha256}),'context tree changed');for(const e of row.evidence)requireThat(sha(readFileSync(e.path))===e.sha256,'external evidence changed');}
const links=[];const walk=p=>{const s=lstatSync(p);if(s.isSymbolicLink())links.push(p);else if(s.isDirectory())for(const n of readdirSync(p).sort())walk(p+'/'+n)};
for(const n of readdirSync('research').sort())if(n.startsWith(candidate.run+'-'))walk('research/'+n);
requireThat(JSON.stringify(links.sort())===JSON.stringify(inventory.all_run_research_symlinks.map(r=>r.path).sort()),'run-local symlink inventory changed');
if(process.argv.includes('--issue')){
 const i=process.argv.indexOf('--authorization-file');requireThat(i>=0&&process.argv[i+1],'root-authored --authorization-file required');
 const authorization=readFileSync(process.argv[i+1],'utf8').trim();requireThat(authorization.length>=20&&!authorization.includes('PROPOSED'),'actual owner authorization required');
 const issued={...candidate,authorization};const path=`research/${candidate.run}-closeout-operational-contexts.json`;
 writeFileSync(path,JSON.stringify(issued,null,2)+'\n',{flag:'wx'});
 console.log(JSON.stringify({issued:path,sha256:sha(readFileSync(path)),native_preflight_executed:false}));
}else console.log(JSON.stringify({verified:true,issued:false,native_preflight_executed:false,links:links.length}));
