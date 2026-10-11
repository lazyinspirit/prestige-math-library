import json,hashlib,pathlib,copy,datetime
root=pathlib.Path('.');run='frontier-44-special-representation-examples-28-six-step';base=root/'research'/f'{run}-owner-escalation-repairs/resume-20261011/gate-fi';cp=root/'research'/f'{run}-batch-18.proof-contracts.json'
sha=lambda b:hashlib.sha256(b if isinstance(b,bytes) else b.encode()).hexdigest()
canon=lambda x:json.dumps(x,sort_keys=True,ensure_ascii=False,separators=(',',':'))
d=json.loads(cp.read_text());f=json.loads((base.parent/'gate1/findings-by-batch.json').read_text());ids=sorted(set(x['id'] for x in f['18']));proposed=copy.deepcopy(d);edits=[]
def edit_inputs(id,step,add):
 row=next(x for x in proposed['contracts'][id]['derivations'] if x['step']==step);before=copy.deepcopy(row['inputs']);row['inputs']+=add;edits.append({'id':id,'field':'derivations','entry_id':row['id'],'key':'inputs','before':before,'after':row['inputs']})
edit_inputs('prop-tensor-products-of-finitely-generated-fi-modules-are-finitely-generated','1.1',['given'])
edit_inputs('prop-tensor-products-of-finitely-generated-fi-modules-are-finitely-generated','4.1',['2.2','2.1'])
edit_inputs('prop-fi-module-realizing-one-padded-irreducible-family','5.1',['3.1'])
edit_inputs('prop-specht-constituents-of-an-fi-module-have-bounded-first-row','1.3',['given'])
edit_inputs('prop-specht-constituents-of-an-fi-module-have-bounded-first-row','2.2',['1.3'])
edit_inputs('thm-fi-modules-over-a-noetherian-q-algebra-form-a-noetherian-category','7.1',['F5'])
edit_inputs('thm-finite-generation-is-equivalent-to-uniform-representation-stability','3.1',['1.1'])
id='thm-fi-modules-over-a-noetherian-q-algebra-form-a-noetherian-category'
for c in proposed['contracts'][id]['citations']:
 if c['fact']=='F5':
  before=copy.deepcopy(c['uses']);c['uses'].append('7.1');edits.append({'id':id,'field':'citations','fact':'F5','source':c['source'],'key':'uses','before':before,'after':c['uses']})
rows=[{'id':id,'contract_file':str(cp),'before':d['contracts'][id],'before_sha256':sha(canon(d['contracts'][id])),'after':proposed['contracts'][id],'after_sha256':sha(canon(proposed['contracts'][id])),'source_file':f'items/{id}.md','source_raw_sha256':sha((root/'items'/f'{id}.md').read_bytes())} for id in ids]
p={'version':1,'run':run,'batch':18,'prepared_by':'/root/gate_contracts_fi','prepared_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'scope':ids,'contract_file':str(cp),'contract_file_before_sha256':sha(cp.read_bytes()),'metadata_only':True,'changes_statement_definition_proof':False,'independent_worker_acceptance':False,'preserves_existing_alpha_risk_review_verbatim':True,'edits':edits,'rows':rows}
(base/'contract-row-deltas.json').write_text(json.dumps(p,indent=2,ensure_ascii=False)+'\n')
subset={'version':1,'level':d['level'],'scope':ids,'contracts':{id:proposed['contracts'][id] for id in ids}};(base/'targeted.proposed.proof-contracts.json').write_text(json.dumps(subset,indent=2,ensure_ascii=False)+'\n')
manifest_items={}
for file in (root/'research').glob(f'{run}-batch-*.pages.json'):
 for page in json.loads(file.read_text()):
  for item in page['items']:manifest_items[item['id']]=item
consumers={}
for id in ids:
 direct=sorted(i for i,item in manifest_items.items() if id in item.get('deps',[]));seen=set(direct);stack=direct[:]
 while stack:
  target=stack.pop()
  for i,item in manifest_items.items():
   if target in item.get('deps',[]) and i not in seen:seen.add(i);stack.append(i)
 consumers[id]={'direct':direct,'transitive':sorted(seen),'content_change_required':False,'reason':'Only contract input/use declarations change. No supplier mathematical carrier or interface changes, so consumer claims and native review ownership remain unchanged.'}
(base/'consumer-impact.json').write_text(json.dumps({'version':1,'frontier_inventory_size':len(manifest_items),'subjects':consumers},indent=2)+'\n')
print('prepared',len(rows),'rows;',len(edits),'precise fields; frontier',len(manifest_items))
