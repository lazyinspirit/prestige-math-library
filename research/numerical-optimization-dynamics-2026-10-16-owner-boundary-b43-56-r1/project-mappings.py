import json,pathlib,re,difflib
D=pathlib.Path(__file__).parent;run='numerical-optimization-dynamics-2026-10-16';batch=53
mapping=json.load(open(D/'b53-mappings.json'));p=pathlib.Path('research')/f'{run}-batch-{batch}.proof-contracts.json';raw=p.read_text();doc=json.loads(raw)
full=json.load(open(f'research/{run}-owner-boundary-diagnostic-recovery-20261016T111149897777Z/full-report.json'));flag=set()
for c in full['templates']:
 for r in c['rows']:
  if r['id']in mapping:flag.add((r['id'],r['case']))
for r in full['contradicted']:
 if r['id']in mapping:flag.add((r['id'],r['case']))
ops=[]
for id,entry in doc['contracts'].items():
 if id not in mapping:continue
 src=pathlib.Path('items',id+'.md').read_text();heading='Definition' if '\n## Definition\n' in src else 'Example'if '\n## Example\n' in src else 'Statement'
 for i,row in enumerate(entry['boundaries']):
  axis=row['case']
  if (id,axis)not in flag:continue
  text=mapping[id][axis];text=re.sub(r'\b(steps?)(?=\d)',r'\1 ',text)
  status='checked'
  if axis in ['iff-forward','iff-reverse']:status='not_applicable'
  if axis=='nonempty-choice' and id!='thm-ode-residual-a-posteriori-error-bound':status='not_applicable'
  if id=='rem-fixed-mesh-global-error-does-not-certify-adaptivity':status='not_applicable'
  if status=='checked' and not(re.search(r'\bstep\s+\d+\.\d+|statement|definition|example|counterexample',text,re.I)):
   text=heading+': '+text
  new={k:v for k,v in row.items() if k not in ['status','reason','evidence']};new.update(status=status);new['evidence'if status=='checked'else'reason']=text
  if new!=row:ops.append(dict(target=str(p),path=['contracts',id,'boundaries',i],before=row,after=new,source_inspected='items/'+id+'.md',reason='Manual item-and-axis-specific current source reading, including actual zero/finite/endpoint/choice conditions; not a blanket template uphold.'));entry['boundaries'][i]=new
for sub in ['before','proposed']:(D/sub).mkdir(exist_ok=True)
(D/'before'/p.name).write_text(raw);out=json.dumps(doc,indent=2)+'\n';(D/'proposed'/p.name).write_text(out)
(D/(p.name+'.patch')).write_text(''.join(difflib.unified_diff(raw.splitlines(True),out.splitlines(True),fromfile=str(p),tofile=str(D/'proposed'/p.name))))
(D/'operations-b53.json').write_text(json.dumps({'run':run,'status':'research-only proposed boundary rows; no gate result','operations':ops,'count':len(ops),'scope_items':list(mapping),'source_reading':'Current claim and complete proof/procedure/verification paragraphs read for these20items, plus prior same-agent53evidence where available. Full diagnostics drive changedrow selection; no source or othercontractfield edits.','pending':'Any later actual root phase-format application needs step-label correspondence check before binding; no current hashes or reviews fabricated.'},indent=2)+'\n');print('b53',len(ops),'rows')
