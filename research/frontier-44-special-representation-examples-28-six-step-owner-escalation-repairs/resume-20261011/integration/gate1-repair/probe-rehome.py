import json,glob,os,tempfile,subprocess,pathlib,shutil
run='frontier-44-special-representation-examples-28-six-step';out='research/'+run+'-owner-escalation-repairs/resume-20261011/integration/gate1-repair';root=os.getcwd();tmp=tempfile.mkdtemp(prefix='gate1-rehome-probe-');d=json.load(open(out+'/page-cycle-forward-rehome-packet.json'));items={}
for p in glob.glob('research/'+run+'-batch-*.pages.json'):
 for pg in json.load(open(p)):
  for it in pg['items']:items[it['id']]=True
for base in ['items','library']:
 for p in glob.glob(base+'/**/*',recursive=True):
  if os.path.isfile(p):dest=tmp+'/'+p;os.makedirs(os.path.dirname(dest),exist_ok=True);os.symlink(root+'/'+p,dest)
os.makedirs(tmp+'/research');os.makedirs(tmp+'/tools')
for p in glob.glob('research/*'):os.symlink(root+'/'+p,tmp+'/'+p)
for p in glob.glob('tools/*'):
 if os.path.isfile(p):os.symlink(root+'/'+p,tmp+'/'+p)
for name in ['fwdcheck.mjs','depcheck.mjs']:
 p=tmp+'/tools/'+name;os.unlink(p);shutil.copyfile('tools/'+name,p)
for delta in d['page_deltas']+d['source_metadata_deltas']+[d['plan_delta']]+[json.load(open(out+'/soergel-duplicate-placement-delta.json'))]:
 p=tmp+'/'+delta['path'];os.unlink(p);open(p,'w').write(delta['new_file_content'])
sel=tmp+'/scope.json';json.dump(sorted(items),open(sel,'w'))
for validator in ['fwdcheck','depcheck']:
 r=subprocess.run(['node',tmp+'/tools/'+validator+'.mjs','--items-file',sel,'--json'],cwd=root,capture_output=True,text=True);open(out+'/'+validator+'-proposal-scoped-full.json','w').write(r.stdout or r.stderr)
 try:j=json.loads(r.stdout);print(validator,r.returncode,j.get('errors'))
 except:print(validator,r.returncode,r.stderr[-300:])
json.dump({'temporary_probe':tmp,'scope_count':len(items),'native_validators':'Actual unchanged fwdcheck and depcheck copied only to let their repository-root lookup read a symlinked resolver tree with guarded proposed carriers; explicit current frontier selector always supplied.','no_live_item_page_contract_or_manifest_writes':True},open(out+'/rehome-probe-receipt.json','w'),indent=2)
