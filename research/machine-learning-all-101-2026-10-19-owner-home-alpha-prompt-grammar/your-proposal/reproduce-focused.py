from pathlib import Path
import tempfile,subprocess,shutil,json,os,hashlib
repo=Path.cwd();b=repo/'research/machine-learning-all-101-2026-10-19-owner-home-alpha-prompt-grammar/your-proposal';tmp=Path(tempfile.mkdtemp(prefix='home-grammar-regression-'))
targets=['tools/step3-owner-home-alpha-continuations.mjs','tools/autopilot/stages/home-alpha-continuations.mts','tools/autopilot/test/home-alpha-continuations.test.mts','tools/step3-owner-home-alpha-continuations.md']
try:
 for f in subprocess.check_output(['git','ls-files','-z','tools'],text=True).split('\0'):
  if f.endswith(('.mjs','.mts','.json')):
   q=tmp/f;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(repo/f,q)
 for f in targets:
  q=tmp/f;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(b/f,q)
 subprocess.run(['git','init','-q'],cwd=tmp,check=True);subprocess.run(['git','add','tools'],cwd=tmp,check=True)
 env=dict(os.environ,PRESTIGE_MATH_REPO=str(repo))
 commands=[['node','--test','tools/step3-owner-required-page-routes.test.mjs','tools/step3-owner-unchanged-required-page-routes.test.mjs','tools/step3-owner-foreign-refuter-routes.test.mjs','tools/step3-owner-source-identical-continuity.test.mjs']]
 for f in ['home-alpha-continuations','refuter-continuations','step3-pipeline']:
  commands.append(['node','tools/tsx-run.mjs','--test','tools/autopilot/test/'+f+'.test.mts'])
 results=[]
 for i,cmd in enumerate(commands):
  r=subprocess.run(cmd,cwd=tmp,env=env,stdout=subprocess.PIPE,stderr=subprocess.STDOUT,text=True);p=b/f'regression-{i+1}.tap';p.write_text(r.stdout);results.append({'command':cmd,'exit_code':r.returncode,'log':str(p.relative_to(repo)),'tail':r.stdout[-220:]});print(json.dumps(results[-1]),flush=True)
 (b/'regression-results.json').write_text(json.dumps(results,indent=2)+'\n')
 code="""import {pathToFileURL} from 'node:url';import {readFileSync} from 'node:fs';import {createHash} from 'node:crypto';const root=process.argv[1],candidate=await import(pathToFileURL(process.argv[2]));const run='machine-learning-all-101-2026-10-19';const identity=candidate.homeAlphaReviewIdentity(root,run,'30');const evidence=candidate.homeAlphaClosureEvidence(root,run);console.log(JSON.stringify({identity,closure_fresh_refs:Object.fromEntries(Object.entries(evidence).filter(([p])=>p.includes('alpha-3a-batch-30-foreign-refuter-continuation-1.')))},null,2));"""
 r=subprocess.run(['node','--input-type=module','-e',code,str(repo),str(tmp/'tools/step3-owner-home-alpha-continuations.mjs')],cwd=tmp,stdout=subprocess.PIPE,stderr=subprocess.STDOUT,text=True);(b/'actual30-readonly-candidate-result.json').write_text(r.stdout);print('actual30-readonly exit',r.returncode);assert r.returncode==0
 assert all(r['exit_code']==0 for r in results)
finally:shutil.rmtree(tmp)
