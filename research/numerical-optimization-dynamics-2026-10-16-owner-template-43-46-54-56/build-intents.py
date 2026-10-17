from pathlib import Path
import json,re,runpy,collections,datetime
R='numerical-optimization-dynamics-2026-10-16';base=Path(__file__).resolve().parent;repo=Path.cwd();notes=runpy.run_path(str(base/'review-notes.py'))['notes']
fullpath=f'research/{R}-owner-boundary-diagnostic-recovery-20261016T111149897777Z/full-report.json';full=json.loads(Path(fullpath).read_text());contrad={(z['id'],z['case'])for z in full['contradicted']};owners={};docs={};source={};ops=[];missing=[];skipped=[];stale=[];cases_by_item=collections.defaultdict(set)
for b in [43,44,45,46,54,55,56]:
 for p in json.loads(Path(f'research/{R}-batch-{b}.pages.json').read_text()):
  for x in p['items']:owners[x['id']]=b
 docs[b]=json.loads(Path(f'research/{R}-batch-{b}.proof-contracts.json').read_text())
for g in full['templates']:
 for z in g['rows']:
  if z['id']in owners:cases_by_item[z['id']].add(z['case'])
phase=Path(f'research/{R}-owner-format-direct-remap-v2-20261016T111752339572Z/phase-preservation-review.json');maps={z['path']:z['old_to_final_step_labels']for z in json.loads(phase.read_text())};new54={'lem-truncated-modified-flow-matches-map','lem-finite-modified-hamiltonian-close-to-original'}
def finalrefs(i,s):
 # Two newly applied54 lemmas have the exact new labels already written in the notes.
 if i not in new54:
  mp=maps.get(f'items/{i}.md',{});s=re.sub(r'(?<![\d.])(\d+\.\d+)(?![\d.])',lambda m:mp.get(m[1],m[1]),s)
 s=re.sub(r'\b(Proof|Verification)(?=\d)',r'\1 ',s)
 return s
for i,cases in cases_by_item.items():
 if i not in notes:missing.append([i,'all']);continue
 rel=f'items/{i}.md';txt=Path(rel).read_text();source[i]={'path':rel,'full_current_source':txt}
 for case in sorted(cases):
  if (i,case)in contrad:skipped.append({'item':i,'case':case,'reason':'Contradiction/strict-anchor lane retained by num_ledger_55_63; source-grounded case notes supplied separately when present.'});continue
  n=notes[i]
  if case.startswith('iff-'):
   s=n['cases'].get('iff','N:'+n['logical'])
  else:s=n['cases'].get({'nonempty-choice':'choice'}.get(case,case))
  if s is None:missing.append([i,case]);continue
  kind,s=s[:1],finalrefs(i,s[2:]);status={'C':'checked','N':'not_applicable','O':'open'}[kind]
  b=owners[i];c=docs[b]['contracts'][i];rowidx=[j for j,z in enumerate(c['boundaries'])if z['case']==case];assert len(rowidx)==1;rowidx=rowidx[0];before=c['boundaries'][rowidx]
  after=dict(before);after['status']=status
  if status=='not_applicable':after.pop('evidence',None);after['reason']=s
  else:after.pop('reason',None);after['evidence']=s
  # Review binding will be root-owned after actual final source coherence.
  after.pop('reviewed',None);after.pop('template_review',None)
  if status=='open':raise ValueError((i,case,'unresolved open note'))
  ops.append(dict(target=f'research/{R}-batch-{b}.proof-contracts.json',path=['contracts',i,'boundaries',rowidx],before=before,after=after,source_inspected=rel,reason=s,item=i,batch=str(b),case=case,scope='template-only source-grounded worksheet intent; root binding pending'))
# Archive exact actual current inputs; no hash computations or canonical edits.
for i,z in source.items():
 folder='current-source-evidence-r2-known44' if i=='lem-neutral-delay-shift-neumann-inverse' else 'current-source-evidence'
 p=base/folder/z['path'];p.parent.mkdir(parents=True,exist_ok=True)
 if p.exists():assert p.read_text()==z['full_current_source'],'do not overwrite source history'
 else:p.write_text(z['full_current_source'])
for b,doc in docs.items():
 rel=f'research/{R}-batch-{b}.proof-contracts.json';p=base/'before'/rel;p.parent.mkdir(parents=True,exist_ok=True)
 if p.exists():assert p.read_bytes()==Path(rel).read_bytes(),'do not overwrite contract history'
 else:p.write_bytes(Path(rel).read_bytes())
shared=[]
for i,n in notes.items():
 for case,s in n['cases'].items():
  k={'choice':'nonempty-choice'}.get(case,case)
  if (i,k)in contrad:shared.append(dict(item=i,case=k,source=f'items/{i}.md',status={'C':'checked','N':'not_applicable','O':'open'}[s[0]],evidence=finalrefs(i,s[2:]),owner='num_ledger_55_63 integrates only after its actual review; this is source-owner evidence, not delegated acceptance'))
(base/'template-intents.json').write_text(json.dumps(dict(run=R,source_report=fullpath,scope_batches=[43,44,45,46,54,55,56],status='research-only unapplied worksheet proposals; no upheld/hash fields',operations=ops,skipped_contradiction_keys=skipped,missing=missing),ensure_ascii=False,indent=2)+'\n')
(base/'shared-source-grounded-contradiction-notes.json').write_text(json.dumps(dict(run=R,notes=shared),ensure_ascii=False,indent=2)+'\n')
# Per-item mapping exposes all actual reviewed case notes, including open/pending ones; no unsupported acceptance claim.
(base/'item-case-source-evidence.json').write_text(json.dumps({i:{'source_path':f'items/{i}.md','logical_form':n['logical'],'case_notes':{k:finalrefs(i,v)for k,v in n['cases'].items()},'source_evidence_path':str(base/('current-source-evidence-r2-known44' if i=='lem-neutral-delay-shift-neumann-inverse' else 'current-source-evidence')/f'items/{i}.md')}for i,n in notes.items()},ensure_ascii=False,indent=2)+'\n')
summary=dict(run=R,at=datetime.datetime.now(datetime.timezone.utc).isoformat(),original_template_rows=sum(len(x)for x in cases_by_item.values()),proposed_rows=len(ops),distinct_items=len({x['item']for x in ops}),by_batch=dict(collections.Counter(x['batch']for x in ops)),by_status=dict(collections.Counter(x['after']['status']for x in ops)),skipped_contradiction_keys=len(skipped),shared_contradiction_notes=len(shared),missing=missing,source_reads=len(source),canonical_writes=False,hashes_computed=False,review_binding='root-only after final source; no reviewed/template_review/upheld assertions',format_map=str(phase),applied44_source_repair=f'research/{R}-owner-neutral44-empty-array-proposal-20261016T113430964592Z/ROOT-application.json',applied54_source_repair=f'research/{R}-owner-modified54-empty-and-time-taylor-proposal-20261016T112914995567Z/ROOT-application.json')
(base/'completion.json').write_text(json.dumps(summary,indent=2)+'\n');print(json.dumps(summary,indent=2))
