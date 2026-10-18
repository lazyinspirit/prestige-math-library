import subprocess,json,sys,pathlib
run='non-ml-math-remaining-81-2026-10-18';b=pathlib.Path('research/'+run+'-owner-linfinity-deformation-completion');out=b/'checks';out.mkdir(exist_ok=True)
items=[];pages=[]
for n in [43,44]:
 for p in json.load(open(f'research/{run}-batch-{n}.pages.json')):
  pages.append('library/'+p['category']+'/'+p['id']+'.md');items += ['items/'+i['id']+'.md' for i in p['items']]
key=sys.argv[1]
cmd={'precheck':['node','tools/tsx-run.mjs','tools/precheck.mts',*items,'--json'],'render':['node','tools/rendercheck.mjs',*items,*pages,'--json'],'layout':['node','tools/proof-layout.mjs',*items],'contracts43':['node','tools/proof-contract.mjs',f'research/{run}-batch-43.proof-contracts.json','--strict','--json'],'contracts44':['node','tools/proof-contract.mjs',f'research/{run}-batch-44.proof-contracts.json','--strict','--json']}[key]
r=subprocess.run(cmd,capture_output=True,text=True);(out/(key+'.stdout')).write_text(r.stdout);(out/(key+'.stderr')).write_text(r.stderr);(out/(key+'.json')).write_text(json.dumps({'command':cmd,'exit_code':r.returncode,'stdout_path':str(out/(key+'.stdout')),'stderr_path':str(out/(key+'.stderr'))},indent=2)+'\n');print(key,'exit',r.returncode);print(r.stdout[:2000] if r.returncode else (json.loads(r.stdout).get('summary',r.stdout[:250]) if r.stdout.strip().startswith('{') else r.stdout[-250:]));sys.exit(r.returncode)
