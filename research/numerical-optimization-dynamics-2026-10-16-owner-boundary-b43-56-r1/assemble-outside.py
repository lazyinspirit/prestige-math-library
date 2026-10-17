import pathlib,json,re,difflib
D=pathlib.Path(__file__).parent;run='numerical-optimization-dynamics-2026-10-16';out=D/'outside-contradictions-r1';out.mkdir(exist_ok=False)
manual=json.load(open(D/'outside-contradiction-evidence.json'));diag=pathlib.Path(f'research/{run}-owner-boundary-diagnostic-recovery-20261016T111149897777Z/partitions');ops=[];openrows=[];files=[]
for b in [43,44,45,46,54,55,56]:
 dp=diag/f'batch-{b}.json'
 if not dp.exists():continue
 candidates=json.load(open(dp))['candidates'];p=pathlib.Path('research')/f'{run}-batch-{b}.proof-contracts.json';raw=p.read_text();doc=json.loads(raw);items={}
 for r in candidates:
  id,axis=r['item'],r['case'];key=id+'|'+axis;entries=doc['contracts'][id]['boundaries'];index=next(i for i,x in enumerate(entries)if x['case']==axis);old=entries[index]
  if key not in manual:openrows.append({'batch':b,'item':id,'case':axis,'source':r['source_path'],'reason':'Actual44empty-array norm/inverse supplier repair pending originalowner/root application; no fabricated empty max convention or upheld disposition.'});continue
  evidence=re.sub(r'\b(steps?)(?=\d)',r'\1 ',manual[key]);new={k:v for k,v in old.items()if k not in ['reason','evidence','status']};new.update(status='checked',evidence=evidence)
  source=pathlib.Path(r['source_path']).read_text();items[id]=source
  ops.append({'target':str(p),'path':['contracts',id,'boundaries',index],'before':old,'after':new,'source_inspected':r['source_path'],'signals':['contradicted'],'reason':'Read actual current complete claim/proof/procedure for this flagged axis, cross-checked shared original template-owner notes; explicit admitted/excluded empty and zero cases or actual iff directions, no generic prefix-only repair.','shared_source_owner_notes':f'research/{run}-owner-template-43-46-54-56/shared-source-grounded-contradiction-notes.json'})
  entries[index]=new
 if items:
  for sub in ['before','proposed','source-inputs']:(out/sub).mkdir(exist_ok=True)
  (out/'before'/p.name).write_text(raw);new=json.dumps(doc,indent=2)+'\n';(out/'proposed'/p.name).write_text(new)
  (out/(p.name+'.patch')).write_text(''.join(difflib.unified_diff(raw.splitlines(True),new.splitlines(True),fromfile=str(p),tofile=str(out/'proposed'/p.name))))
  for id,src in items.items():(out/'source-inputs'/(id+'.md')).write_text(src)
  files.append({'target':str(p),'before':str(out/'before'/p.name),'proposed':str(out/'proposed'/p.name)})
report={'run':run,'status':'research-only outside-range contradiction repair intents; one44sourcegap pending','batches':[43,44,45,46,54,55,56],'operations':ops,'files':files,'counts':{'operations':len(ops),'unresolved':len(openrows)},'unresolved':openrows,'source54':'Actual root-applied empty-compact repair read in current coefficient lemma Statement/Proof1.1; no ordinary real supremum of empty set asserted.','preserved':'Only flagged boundary rows; allquotes,smoke,history,otherfields untouched. No canonicalwrites/hashes/levels/recert/gates. Fullbefore/proposed/rawsourcebytes retained. This packet is disjoint from optimization631templateops which exclude26contradictionoverlapkeys.'}
(out/'operations.json').write_text(json.dumps(report,indent=2)+'\n');print(report['counts'])
