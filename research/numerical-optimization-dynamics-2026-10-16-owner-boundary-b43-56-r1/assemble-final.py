import json,pathlib,re,difflib,collections
D=pathlib.Path(__file__).parent;run='numerical-optimization-dynamics-2026-10-16';out=D/'final47-53';out.mkdir(exist_ok=False)
full=json.load(open(f'research/{run}-owner-boundary-diagnostic-recovery-20261016T111149897777Z/full-report.json'))
phase=json.load(open(f'research/{run}-owner-format-direct-remap-v2-20261016T111752339572Z/phase-preservation-review.json'));phase={r['path']:r['old_to_final_step_labels']for r in phase}
# Initial six full-carrier reviews retain their manually written exact row dispositions.
initial=json.load(open(D/'operations-initial.json'));manual={}
for op in initial['operations']:manual[(op['path'][1],op['before']['case'])]=op['after']
for name in ['b47-mappings.json','b50-52-mappings.json','additional-contradictions.json']:
 for id,rows in json.load(open(D/name)).items():
  for case,row in rows.items():manual[(id,case)]={'case':case,**row}
for id,rows in json.load(open(D/'b53-mappings.json')).items():
 for case,text in rows.items():
  status='not_applicable'if case in ['iff-forward','iff-reverse','nonempty-choice']or id=='rem-fixed-mesh-global-error-does-not-certify-adaptivity'else'checked'
  if case=='nonempty-choice'and id=='thm-ode-residual-a-posteriori-error-bound':status='checked'
  manual[(id,case)]={'case':case,'status':status,'evidence'if status=='checked'else'reason':text}
for name in ['b48-casegroups.json','b49-casegroups.json']:
 for id,groups in json.load(open(D/name)).items():
  for case,text in groups.items():
   if case in ['logic','logic_status']:continue
   status='not_applicable'if case in ['nonempty-choice','endpoints']else'checked'
   manual[(id,case)]={'case':case,'status':status,'evidence'if status=='checked'else'reason':text}
  for case in ['iff-forward','iff-reverse']:
   status=groups.get('logic_status','not_applicable');manual[(id,case)]={'case':case,'status':status,'evidence'if status=='checked'else'reason':groups['logic']}
flag=set();signals=collections.defaultdict(list)
for t in full['templates']:
 for r in t['rows']:flag.add((r['id'],r['case']));signals[(r['id'],r['case'])].append('template')
for r in full['contradicted']:flag.add((r['id'],r['case']));signals[(r['id'],r['case'])].append('contradicted')
errors=json.load(open(f'research/{run}-owner-proof-contract-diagnostic-20261016T111251985032Z/boundary-errors-by-owning-batch.json'))
for b in range(47,54):
 for r in errors['batches'].get(str(b),{}).get('records',[]):
  case=r['message'].split()[0];flag.add((r['id'],case));signals[(r['id'],case)].append(r['code'])
ops=[];missing=[];files=[];readitems=set()
for b in range(47,54):
 p=pathlib.Path('research')/f'{run}-batch-{b}.proof-contracts.json';raw=p.read_text();doc=json.loads(raw);item_before={}
 for id,entry in doc['contracts'].items():
  needed=[(i,r)for i,r in enumerate(entry.get('boundaries',[]))if(id,r['case'])in flag]
  for i,row in needed:
   key=(id,row['case'])
   if key not in manual:missing.append({'batch':b,'item':id,'case':row['case'],'signals':signals[key]});continue
   new=dict(row);new.update(manual[key]);new.pop('reason'if new['status']=='checked'else'evidence',None)
   field='evidence'if new['status']=='checked'else'reason';text=re.sub(r'\b(steps?)(?=\d)',r'\1 ',new[field])
   # Mappings 50/51 were written from pre-format paragraphs; source-preserving V2 changed only this item's labels.
   # Other mappings were read after the actual application or have unchanged phase IDs.
   if id=='lem-composite-simpson-asymptotic-error-expansion':
    pm=phase.get('items/'+id+'.md',{});text=re.sub(r'\b\d+\.\d+\b',lambda m:pm.get(m.group(),m.group()),text)
   src=pathlib.Path('items',id+'.md').read_text();readitems.add(id);item_before[id]=src
   heading='Definition'if '\n## Definition\n'in src else'Example'if '\n## Example\n'in src else'Counterexample'if '\n## Counterexample\n'in src else'Statement'
   if new['status']=='checked'and not re.search(r'\bstep\s+\d+\.\d+|statement|definition|example|counterexample',text,re.I):text=heading+': '+text
   new[field]=text
   if new!=row:ops.append(dict(target=str(p),path=['contracts',id,'boundaries',i],before=row,after=new,source_inspected='items/'+id+'.md',signals=signals[key],reason='Item-specific actual claim/proof case mapping; no blanket uphold, quote/smoke/history changes or fabricated check execution.'));entry['boundaries'][i]=new
 for sub in ['before','proposed','source-inputs']:(out/sub).mkdir(exist_ok=True)
 (out/'before'/p.name).write_text(raw);proposed=json.dumps(doc,indent=2)+'\n';(out/'proposed'/p.name).write_text(proposed)
 (out/(p.name+'.patch')).write_text(''.join(difflib.unified_diff(raw.splitlines(True),proposed.splitlines(True),fromfile=str(p),tofile=str(out/'proposed'/p.name))))
 for id,src in item_before.items():(out/'source-inputs'/(id+'.md')).write_text(src)
 files.append({'target':str(p),'before':str(out/'before'/p.name),'proposed':str(out/'proposed'/p.name)})
report={'run':run,'status':'research-only source-grounded boundary proposal; root review/binding required','batches':list(range(47,54)),'operations':ops,'files':files,'counts':{'operations':len(ops),'items_with_proposed_rows':len(readitems),'unresolved_target_rows':len(missing)},'unresolved':missing,'phase_context':'Root actual V2 source-preserving217file application acknowledged; composite Simpson references remapped via old_to_final labels. Root must compare retained final source-inputs/current bytes and bind final citations/rows after all later repairs.','preservation':'Only boundary rows proposed. Other contract fields, quotes, smoke fixtures and all existing review/history fields preserved; actual before/full proposed archived. No canonical application, hashes, levels, recertification or gates.','coverage':'All original template, contradicted and strict-anchor keys for47..53 are enumerated; unresolved explicitly listed. Additional43..46/54..56 contradiction coverage waits for same source-reading template owner;54sup-empty source issue remains open.'}
(out/'operations.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report['counts']));print('missing',missing)
