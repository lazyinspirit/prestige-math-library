from pathlib import Path
import json,shutil,subprocess,hashlib
P=Path(__file__).parent.resolve();repo=Path.cwd();mirror=P/'pure-check-mirror';(mirror/'tools').mkdir(parents=True,exist_ok=True);(mirror/'items').mkdir(exist_ok=True);(mirror/'contracts').mkdir(exist_ok=True)
for name in ['proof-contract.mjs','facts-block.mjs','frontmatter-list.mjs','regen-contract-entries.mjs']:
 shutil.copyfile(repo/'tools'/name,mirror/'tools'/name)
# Read-only source symlinks; proposed mathematical carriers are local copies instead.
for file in (repo/'items').glob('*.md'):
 out=mirror/'items'/file.name
 if out.exists() or out.is_symlink():out.unlink()
 proposal=P/'proposed-items'/file.name
 if proposal.exists():shutil.copyfile(proposal,out)
 else:out.symlink_to(file)
seal=json.loads((P/'sealed-boundary-operations.json').read_text());copies={}
for op in seal['operations']:
 f=op['contract_file']
 if f not in copies:copies[f]=json.loads((repo/f).read_text())
 id=op['id'];ix=int(op['json_pointer'].split('/')[-1]);copies[f]['contracts'][id]['boundaries'][ix]=op['after']
results=[]
for f,doc in copies.items():
 out=mirror/'contracts'/Path(f).name;out.write_text(json.dumps(doc,indent=2)+'\n');ids=list(dict.fromkeys(op['id'] for op in seal['operations'] if op['contract_file']==f));changed=[id for id in ids if (P/'proposed-items'/(id+'.md')).exists()]
 if changed:
  cmd=['node','tools/regen-contract-entries.mjs',str(out),*changed];r=subprocess.run(cmd,cwd=mirror,capture_output=True,text=True);results.append({'command':cmd,'exit_code':r.returncode,'stdout':r.stdout,'stderr':r.stderr})
 cmd=['node','tools/proof-contract.mjs',str(out),'--items',','.join(ids),'--strict','--json'];r=subprocess.run(cmd,cwd=mirror,capture_output=True,text=True);results.append({'command':cmd,'exit_code':r.returncode,'stdout':r.stdout,'stderr':r.stderr})
(P/'pure-adapter-checks.json').write_text(json.dumps(results,indent=2)+'\n');print([(Path(r['command'][2]).name,r['exit_code'],r['stdout'][-110:]) for r in results])
