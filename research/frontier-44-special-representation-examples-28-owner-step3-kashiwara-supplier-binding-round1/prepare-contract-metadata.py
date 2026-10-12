import pathlib,json,hashlib,datetime,collections,subprocess
R='frontier-44-special-representation-examples-28';D=pathlib.Path('research/'+R+'-owner-step3-kashiwara-supplier-binding-round1/contract-metadata-refresh');(D/'before').mkdir(parents=True,exist_ok=True);(D/'proposed').mkdir(exist_ok=True);Q=D.parent;ids=[x['id'] for x in json.loads((Q/'guarded-successor-packet.json').read_text())['candidates']]+['prop-integrable-quantum-highest-weight-modules-are-semisimple'];groups=collections.defaultdict(list);homes={}
for m in pathlib.Path('research').glob(R+'-batch-*.pages.json'):
 for pg in json.loads(m.read_text()):
  for x in pg['items']:
   if x['id'] in ids:
    assert x['id'] not in homes;x0=pathlib.Path('research')/m.name.replace('.pages.json','.proof-contracts.json');groups[str(x0)].append(x['id']);homes[x['id']]={'manifest_path':str(m),'manifest_sha256':hashlib.sha256(m.read_bytes()).hexdigest(),'page':pg['id'],'contract_path':str(x0)}
assert set(homes)==set(ids);reports=[]
for path,scope in groups.items():
 p=pathlib.Path(path);old=json.loads(p.read_text());b=D/'before'/p.name;b.write_bytes(p.read_bytes());q=D/'proposed'/p.name;q.write_bytes(p.read_bytes());cmd=['node','tools/regen-contract-entries.mjs',str(q),*scope];v=subprocess.run(cmd,text=True,capture_output=True);j=json.loads(q.read_text())
 # Preserve the prior routine classification, regenerate its actual claims/inputs.
 for i in scope:
  routines={x['step']:x for x in old['contracts'][i].get('routine_steps',[])}
  fresh=j['contracts'][i]['derivations'];j['contracts'][i]['routine_steps']=[{**x,'id':routines[x['step']].get('id',x['id'])} for x in fresh if x['step'] in routines];j['contracts'][i]['derivations']=[x for x in fresh if x['step'] not in routines]
 q.write_text(json.dumps(j,indent=2)+'\n');c=['node','tools/proof-contract.mjs',str(q),'--strict','--items',','.join(scope),'--json'];v2=subprocess.run(c,text=True,capture_output=True);result=json.loads(v2.stdout);out=D/(p.stem+'-initial-strict.json');out.write_text(json.dumps({'command':c,'exit_code':v2.returncode,'stdout':result,'stderr':v2.stderr},indent=2)+'\n');reports.append({'canonical_contract_path':path,'before_raw_sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'before_file':str(b),'proposed_file':str(q),'selection':scope,'regen_command':cmd,'regen_exit_code':v.returncode,'regen_stdout':v.stdout,'initial_strict_result_path':str(out)});print(p.name,len(scope),'errors',len(result['errors']))
 for e in result['errors']:print(e['id'],e['code'],e['message'])
meta={'version':1,'run':R,'recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'scope':ids,'native_homes':homes,'canonical_item_guards':[{'id':i,'path':'items/'+i+'.md','raw_sha256':hashlib.sha256(pathlib.Path('items/'+i+'.md').read_bytes()).hexdigest()} for i in ids],'contract_candidates':reports,'policy':'Metadata-only research copies; no canonical or native writes, no dependency-level changes, no new mathematical repair cycle'};(D/'contract-refresh-work.json').write_text(json.dumps(meta,indent=2)+'\n')
