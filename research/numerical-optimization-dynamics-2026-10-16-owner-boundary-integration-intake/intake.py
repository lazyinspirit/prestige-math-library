#!/usr/bin/env python3
"""Research-only boundary intake; canonical writes exist only in explicit root apply mode.
Default: build a plan/report in this directory. Does not compute hashes or adjudications.
"""
import argparse, copy, json, re, os, tempfile
from datetime import datetime,timezone
from pathlib import Path
BASE=Path(__file__).resolve().parent
ROOT=BASE.parents[1]
RUN='numerical-optimization-dynamics-2026-10-16'
REVIEW_FIELDS={'reviewed','template_review'}
ABSENT={'__integration_absent__':True}
def read(p):return json.loads(Path(p).read_text())
def save(p,x):
 p=Path(p);p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(x,indent=2,ensure_ascii=False)+'\n')
def relative(p):return str(Path(p).relative_to(ROOT))
def key(id,case):return id+'::'+case
def operations(doc):
 if isinstance(doc,list):return doc
 for name in ['operations','rows','intents','proposals','field_operations']:
  if isinstance(doc.get(name),list):return doc[name]
 raise ValueError('Packet lacks an explicit operation/row array')
def ownership():
 homes={};docs={}
 for p in sorted((ROOT/'research').glob(RUN+'-batch-*.proof-contracts.json')):
  if not re.fullmatch(re.escape(RUN)+r'-batch-\d+\.proof-contracts\.json',p.name):continue
  d=read(p);docs[relative(p)]=d
  for id,c in d.get('contracts',{}).items():homes.setdefault(id,[]).append((relative(p),c))
 return homes,docs

def locate(op,homes):
 path=op.get('path')
 if isinstance(path,str):path=path.strip('/').split('/')
 if not isinstance(path,list):
  ptr=op.get('json_pointer',op.get('pointer',''))
  if ptr:path=ptr if isinstance(ptr,list) else ptr.strip('/').split('/')
 id=op.get('id',op.get('item'))
 if not id and path and len(path)>1:id=path[1]
 before=op.get('before')
 after=op.get('after',op.get('proposed',op.get('proposed_row')))
 if after is None:raise ValueError('Missing after/proposed/proposed_row')
 case=op.get('case')
 if not case and isinstance(before,dict):case=before.get('case')
 if not case and isinstance(after,dict):case=after.get('case')
 if not case and path and len(path)>3 and not str(path[3]).isdigit():case=path[3]
 h=homes.get(id,[])
 if len(h)!=1:raise ValueError('Expected unique current owner for '+str(id)+': '+str([x[0]for x in h]))
 file,c=h[0];rows=c.get('boundaries',[])
 if not case and path and len(path)>3 and str(path[3]).isdigit():case=rows[int(path[3])]['case']
 matches=[i for i,row in enumerate(rows)if row.get('case')==case]
 if len(matches)!=1:raise ValueError('Expected unique current boundary '+str((id,case)))
 idx=matches[0];leaf=path[4:]if path and len(path)>4 else []
 if leaf and len(leaf)!=1:raise ValueError('Only a full boundary row or one immediate field is supported')
 if leaf:
  fld=leaf[0];old=copy.deepcopy(rows[idx]);new=copy.deepcopy(old)
  old[fld]=before;new[fld]=after;before,after=old,new
 if not isinstance(before,dict)or not isinstance(after,dict):raise ValueError('Expected complete before/after boundary dictionaries')
 if before.get('case')!=case or after.get('case')!=case:raise ValueError('Case mismatch; renaming cases is forbidden')
 original=op.get('file',op.get('target',op.get('contract_path',op.get('contract'))))
 if original and str(original)!=file and id!='ex-finite-basis-projector-optimization-on-grassmann':raise ValueError('Unexpected current ownership migration; root-specific routing decision needed: '+str(original)+' -> '+file)
 return id,case,file,idx,before,after,original

def diagnostics():
 d=read(ROOT/'research'/f'{RUN}-owner-boundary-diagnostic-recovery-20261016T111149897777Z/full-report.json')
 templates={key(r['id'],r['case'])for t in d['templates']for r in t['rows']}
 cd=read(ROOT/'research'/f'{RUN}-owner-boundary-diagnostic-recovery-20261016T111149897777Z/contradicted-candidates.json')
 contrad={key(r['item'],r['case'])for r in cd['candidates']}
 strictdoc=read(ROOT/'research'/f'{RUN}-owner-proof-contract-diagnostic-20261016T111251985032Z/boundary-errors-by-owning-batch.json')
 strict=set();bad=[]
 for batch,g in strictdoc['batches'].items():
  for r in g['records']:
   m=re.match(r'([\w-]+) (?:evidence |names missing step )',r['message'])
   if not m:bad.append(r)
   else:strict.add(key(r['id'],m[1]))
 return {'template':templates,'contradiction':contrad,'strict_anchor':strict}, {'template_original_rows':sum(len(t['rows'])for t in d['templates']),'contradiction_original_occurrences':len(cd['candidates']),'strict_anchor_original_occurrences':strictdoc['boundary_errors'],'strict_parse_errors':bad}

def archive_candidates(packet,id):
 """Only literal known archive layouts, not speculative recursive discovery."""
 dirs=[packet.parent]
 for _ in range(2):dirs.append(dirs[-1].parent)
 found=[]
 for b in dirs:
  if b==ROOT/'research' or not b.is_relative_to(ROOT/'research'):continue
  if not b.parts[len((ROOT/'research').parts)].startswith(RUN+'-owner-'):continue
  for rel in ['source-before/items','before/items','source-inputs/items','source-inputs','source-before','source-final/items','final-source-preimages','source-context/items','current-source-evidence/items','current-source-evidence-r2-known44/items','source-current-after-root95/items']:
   p=b/rel/(id+'.md')
   if p.is_file()and p not in found:found.append(p)
 return found

def plan():
 manifest=read(BASE/'final-packets.json');homes,docs=ownership();targets,diag=diagnostics();generation=BASE/'generations'/datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%S%fZ');generation.mkdir(parents=True)
 grouped={};errors=[];packet_counts=[];routes=[];source_guards=[]
 for entry in manifest['packets']:
  p=ROOT/entry['path']
  if not entry['path'].startswith('research/'+RUN+'-owner-'):
   errors.append({'packet':entry['path'],'error':'Packet outside explicit current-run owner evidence prefix'});continue
  if not p.is_file():errors.append({'packet':entry['path'],'error':'Missing owner-confirmed packet'});continue
  try:
   packet_doc=read(p);ops=operations(packet_doc)
   if isinstance(packet_doc,dict)and packet_doc.get('run',RUN)!=RUN:raise ValueError('Packet declares an unrelated run')
  except Exception as e:errors.append({'packet':entry['path'],'error':str(e)});continue
  packet_counts.append({'packet':entry['path'],'input_intents':len(ops)})
  archive_ids=set()
  for n,op in enumerate(ops):
   try:
    id,case,file,idx,before,after,original=locate(op,homes)
    k=key(id,case);meta={a:v for a,v in op.items()if a not in ['before','after','proposed','proposed_row']}
    changes={};deletes=[];requested={}
    for f in set(before)|set(after):
     if f in REVIEW_FIELDS:
      if before.get(f,ABSENT)!=after.get(f,ABSENT):requested[f]=after.get(f,ABSENT)
      continue
     if before.get(f,ABSENT)==after.get(f,ABSENT):continue
     if f not in {'status','evidence','reason'}:raise ValueError('Unauthorized non-worksheet boundary field change: '+f)
     if f not in after:deletes.append(f)
     else:changes[f]=after[f]
    grouped.setdefault(k,[]).append({'packet':entry['path'],'packet_index':n,'file':file,'id':id,'case':case,'index':idx,'before':before,'proposed':after,'set':changes,'delete':sorted(deletes),'review_field_requests':requested,'owner_evidence':meta})
    if original and str(original)!=file:routes.append({'key':k,'original':original,'current':file,'packet':entry['path']})
    if id not in archive_ids:
     archive_ids.add(id)
     candidates=archive_candidates(p,id)
     for relroot in entry.get('source_archive_roots',[]):
      if not relroot.startswith('research/'+RUN+'-owner-'):raise ValueError('Explicit source archive root outside current run')
      for a in [ROOT/relroot/(id+'.md'),ROOT/relroot/'items'/(id+'.md')]:
       if a.is_file()and a not in candidates:candidates.append(a)
     if isinstance(op.get('research_origin'),str):candidates+=archive_candidates(p.parent/op['research_origin']/p.name,id)
     if isinstance(packet_doc,dict):
      for g in packet_doc.get('source_guards',[]):
       a=ROOT/g.get('exact_full_text_archive','__missing__')
       if g.get('path')=='items/'+id+'.md' and a.is_file()and a not in candidates:candidates.append(a)
     embedded=[]
     if isinstance(op.get('source_fullbefore'),str):embedded.append(('operation.source_fullbefore',op['source_fullbefore']))
     for name in ['source-guards.json','source-final.json','source-fullbefore.json']:
      a=p.parent/name
      if not a.is_file():continue
      sd=read(a)
      if isinstance(sd,dict):
       for label in [id,'items/'+id+'.md']:
        if isinstance(sd.get(label),str)and sd[label].startswith('---'):embedded.append((relative(a)+'#'+label,sd[label]))
     source=ROOT/'items'/(id+'.md')
     if not source.is_file():raise ValueError('Missing current source')
     # Integration snapshot binds bytes only; it is explicitly not a claim of owner proof reading.
     snap=generation/'current-sources'/(id+'.md');snap.parent.mkdir(exist_ok=True)
     if snap.exists()and snap.read_bytes()!=source.read_bytes():raise ValueError('Source changed during integration generation: '+id)
     if not snap.exists():snap.write_bytes(source.read_bytes())
     source_guards.append({'id':id,'packet':entry['path'],'current_snapshot':relative(snap),'snapshot_provenance':'Current integration-time bytes, not historical owner-read equality or mathematical review.','owner_archives':[{'path':relative(a),'matches_current_bytes':a.read_bytes()==source.read_bytes()}for a in candidates]+[{'embedded_at':label,'matches_current_bytes':value.encode()==source.read_bytes()}for label,value in embedded],'owner_guard_state':'matching_archive_available'if any(a.read_bytes()==source.read_bytes()for a in candidates)or any(value.encode()==source.read_bytes()for label,value in embedded)else 'requires_root_source_confirmation'})
   except Exception as e:errors.append({'packet':entry['path'],'packet_index':n,'error':str(e)})
 normalized=[];conflicts=[];drifts=[];review_intents=[]
 for k,inputs in sorted(grouped.items()):
  first=inputs[0];current=docs[first['file']]['contracts'][first['id']]['boundaries'][first['index']]
  writes={};contributors={};bad=False
  for op in inputs:
   delta={**op['set'],**{f:ABSENT for f in op['delete']}}
   for fld,val in delta.items():
    if fld in writes and writes[fld]!=val:
     conflicts.append({'key':k,'field':fld,'proposals':[{'value':writes[fld],'contributors':contributors[fld]},{'value':val,'contributor':{'packet':op['packet'],'packet_index':op['packet_index']}}]});bad=True;continue
    elif fld not in writes:writes[fld]=val;contributors[fld]=[]
    contributors[fld].append({'packet':op['packet'],'packet_index':op['packet_index']})
   # Exact row preimage guard. Already-final equality is separately and truthfully recorded.
   if current!=op['before'] and current!=op['proposed']:
    drifts.append({'key':k,'packet':op['packet'],'packet_index':op['packet_index'],'current':current,'expected_before':op['before'],'proposed':op['proposed']})
  proposed=copy.deepcopy(current)
  for fld,val in writes.items():
   if val==ABSENT:proposed.pop(fld,None)
   else:proposed[fld]=val
  # New review flags are NEVER applied here. Existing current flags stay byte-for-byte as values.
  signals=[name for name,s in targets.items()if k in s]
  normalized.append({'key':k,'file':first['file'],'path':['contracts',first['id'],'boundaries',first['index']],'id':first['id'],'case':first['case'],'before':current,'after':proposed,'has_semantic_row_change':current!=proposed,'conflicted':bad,'diagnostic_signals':signals,'inputs':inputs})
  if signals or any(x['review_field_requests']for x in inputs):
   review_intents.append({'key':k,'status':'UNAPPLIED_INTENT','diagnostic_signals':signals,'requests':[{'packet':x['packet'],'packet_index':x['packet_index'],'requested_review_fields':x['review_field_requests'],'owner_evidence':x['owner_evidence']}for x in inputs],'limitation':'Root must inspect scientific reasons and bind actual final source/row payloads separately; no upheld/reviewed/template_review flag is asserted by intake.'})
 explicit_request_count=0
 review_by_key={x['key']:x for x in review_intents}
 for rel in manifest.get('review_request_files',[]):
  try:
   rd=read(ROOT/rel)
   groups=[('requests',rd)]if isinstance(rd,list)else[(label,rd[label])for label in ['requests','contradiction_requests']if isinstance(rd.get(label),list)]
   for label,requests in groups:
    for n,request in enumerate(requests):
     id=request.get('id',request.get('item'));path=request.get('path',[])
     if not id and isinstance(path,list)and len(path)>1:id=path[1]
     case=request.get('case');k=key(id,case)
     if k not in grouped:raise ValueError('Explicit review request has no normalized current target: '+k)
     item=review_by_key.setdefault(k,{'key':k,'status':'UNAPPLIED_INTENT','diagnostic_signals':[],'requests':[],'limitation':'Explicit owner request only; root adjudication and current bindings remain unapplied.'})
     item['requests'].append({'kind':'explicit_owner_request','source_file':rel,'source_group':label,'source_index':n,'payload':request});explicit_request_count+=1
  except Exception as e:errors.append({'review_request_file':rel,'error':str(e)})
 review_intents=list(review_by_key.values())
 anchor_issues=[];explicit_proof_issues=[]
 for op in normalized:
  row=op['after'];source_path=ROOT/'items'/(op['id']+'.md')
  if not source_path.is_file():anchor_issues.append({'key':op['key'],'kind':'missing_current_source'});continue
  text=source_path.read_text()
  steps=set(re.findall(r'^\s*(\d+\.\d+)\s+',text,re.M))
  note=' '.join(row[f]for f in ['evidence','reason']if isinstance(row.get(f),str))
  for m in re.finditer(r'\b(?:(?:proof|verification)\s*(?:steps?\s*)?|steps?\s*)(\d+\.\d+)\b',note,re.I):
   if m[1]not in steps:explicit_proof_issues.append({'key':op['key'],'reference':m[0],'packets':[x['packet']for x in op['inputs']],'note':note})
  if row.get('status')=='checked':
   evidence=row.get('evidence','')
   if not isinstance(evidence,str)or not evidence.strip():anchor_issues.append({'key':op['key'],'kind':'missing_checked_evidence'});continue
   refs=[m[1]for m in re.finditer(r'\b(?:steps?\s+)?(\d+\.\d+)\b',evidence,re.I)if re.match(r'^steps?\s',m[0],re.I)or m[1]in steps]
   if not refs and not re.search(r'statement|definition|example|counterexample',evidence,re.I):anchor_issues.append({'key':op['key'],'kind':'unanchored','evidence':evidence})
   for ref in refs:
    if ref not in steps:anchor_issues.append({'key':op['key'],'kind':'missing_named_step','step':ref,'evidence':evidence})
  elif row.get('status')!='not_applicable' or not isinstance(row.get('reason'),str)or not row['reason'].strip():anchor_issues.append({'key':op['key'],'kind':'invalid_status_or_missing_reason'})
 covered=set(grouped);missing={name:sorted(t-covered)for name,t in targets.items()};extras=sorted(covered-set().union(*targets.values()))
 union=set().union(*targets.values())
 report={'mode':'Research-only; unapplied; no hashes, recertification, native transitions, mathematical re-review, or gates.','diagnostic_original_counts':diag,'diagnostic_unique_counts':{name:len(t)for name,t in targets.items()},'diagnostic_union_unique':len(union),'packets':packet_counts,'input_intents':sum(x['input_intents']for x in packet_counts),'explicit_owner_review_requests':explicit_request_count,'normalized_unique_rows':len(normalized),'rows_changing':sum(x['has_semantic_row_change']for x in normalized),'covered_union_keys':len(covered&union),'missing_counts':{k:len(v)for k,v in missing.items()},'missing_targets':missing,'outside_original_target_keys':extras,'conflict_count':len(conflicts),'row_guard_drift_count':len(drifts),'normalization_error_count':len(errors),'literal_anchor_issue_count':len(anchor_issues),'explicit_proof_reference_issue_count':len(explicit_proof_issues),'source_guard_confirmations_needed':sum(x['owner_guard_state']!='matching_archive_available'for x in source_guards),'pending_final_lanes':manifest.get('pending_final_lanes',[]),'ready_for_root_adjudication':not diag['strict_parse_errors'] and not errors and not conflicts and not drifts and not anchor_issues and not explicit_proof_issues and not any(missing.values()),'ready_for_apply':False,'apply_limitation':'All row reasons, source confirmations, and root authorization remain unapplied. Missing lanes/conflicts/guards prohibit apply.'}
 save(BASE/'normalized-index.json',{'status':'UNAPPLIED_RESEARCH_PLAN','operations':normalized});save(BASE/'coverage-report.json',report);save(BASE/'literal-anchor-issues.json',anchor_issues);save(BASE/'explicit-proof-reference-review.json',explicit_proof_issues);save(BASE/'conflicts.json',conflicts);save(BASE/'row-guard-drifts.json',drifts);save(BASE/'normalization-errors.json',errors);save(BASE/'current-ownership-routes.json',routes);save(BASE/'source-guard-report.json',source_guards);save(BASE/'UNAPPLIED-review-intents.json',review_intents)
 save(generation/'final-packets.json',manifest)
 for name in ['normalized-index.json','coverage-report.json','conflicts.json','row-guard-drifts.json','normalization-errors.json','current-ownership-routes.json','source-guard-report.json','UNAPPLIED-review-intents.json','literal-anchor-issues.json','explicit-proof-reference-review.json']:(generation/name).write_bytes((BASE/name).read_bytes())
 print(json.dumps({k:report[k]for k in ['input_intents','normalized_unique_rows','covered_union_keys','missing_counts','conflict_count','row_guard_drift_count','normalization_error_count','literal_anchor_issue_count','explicit_proof_reference_issue_count','source_guard_confirmations_needed','ready_for_root_adjudication']},indent=2))

def apply(approval_path):
 """ROOT ONLY: explicit reviewed-plan approval plus all-or-nothing preflight.
 Does not stamp/bind review flags; only applies approved boundary row prose/status changes.
 """
 approval=read(approval_path);report=read(BASE/'coverage-report.json');index=read(BASE/'normalized-index.json')
 if approval.get('root_authorized') is not True or approval.get('scientific_reasons_reviewed') is not True:raise ValueError('Explicit root authorization and scientific reason review required')
 approved=ROOT/approval.get('approved_index_snapshot','__missing__')
 if not approved.is_file()or approved.read_bytes()!=(BASE/'normalized-index.json').read_bytes():raise ValueError('Root-approved exact normalized-index snapshot does not match')
 if not report['ready_for_root_adjudication']:raise ValueError('Unresolved targets/conflicts/row guards/errors; apply forbidden')
 if report.get('pending_final_lanes'):raise ValueError('Final lane confirmations still pending')
 target_sets,_=diagnostics();required=set().union(*target_sets.values());approved_keys=[op['key']for op in index['operations']]
 if not required or required-set(approved_keys):raise ValueError('Fresh original diagnostic union coverage check failed')
 if len(approved_keys)!=len(set(approved_keys))or any(op.get('conflicted')for op in index['operations']):raise ValueError('Duplicate/conflicted approved rows')
 # Recheck manifest against exact snapshots reviewed by root, avoiding silently replaced packets.
 approved_manifest=ROOT/approval.get('approved_manifest_snapshot','__missing__')
 if not approved_manifest.is_file()or approved_manifest.read_bytes()!=(BASE/'final-packets.json').read_bytes():raise ValueError('Root-approved manifest snapshot mismatch')
 approved_sources=ROOT/approval.get('approved_source_report_snapshot','__missing__')
 if not approved_sources.is_file()or approved_sources.read_bytes()!=(BASE/'source-guard-report.json').read_bytes():raise ValueError('Root-approved source guard report mismatch')
 confirmations=approval.get('source_confirmations',{})
 broad_confirmation=approval.get('all_current_source_correspondence_approved')is True and isinstance(approval.get('source_correspondence_reason'),str)and len(approval['source_correspondence_reason'].strip())>=80
 for guard in read(BASE/'source-guard-report.json'):
  src=ROOT/'items'/(guard['id']+'.md');snap=ROOT/guard['current_snapshot']
  if not src.is_file()or src.read_bytes()!=snap.read_bytes():raise ValueError('Current source drift since integration snapshot: '+guard['id'])
  if guard['owner_guard_state']!='matching_archive_available':
   reason=confirmations.get(guard['id'],'')
   if not broad_confirmation and (not isinstance(reason,str)or len(reason.strip())<40):raise ValueError('Root source confirmation missing for '+guard['id'])
 docs={};original_bytes={}
 for op in index['operations']:
  file=op['file'];p=ROOT/file
  if not re.fullmatch('research/'+re.escape(RUN)+r'-batch-\d+\.proof-contracts\.json',file):raise ValueError('Application target outside current run canonical batch contracts')
  if op['path'][:3]!=['contracts',op['id'],'boundaries']:raise ValueError('Invalid application row path')
  if file not in docs:original_bytes[file]=p.read_bytes();docs[file]=json.loads(original_bytes[file])
  row=docs[file]['contracts'][op['id']]['boundaries'][op['path'][-1]]
  if row!=op['before']:raise ValueError('Exact current row guard failed: '+op['key'])
  if any(op['after'].get(f,ABSENT)!=row.get(f,ABSENT)for f in REVIEW_FIELDS):raise ValueError('Unbound review flag change forbidden')
  if any(op['after'].get(f,ABSENT)!=row.get(f,ABSENT)for f in (set(row)|set(op['after']))-{'status','evidence','reason'}):raise ValueError('Non-worksheet boundary metadata change forbidden')
  docs[file]['contracts'][op['id']]['boundaries'][op['path'][-1]]=op['after']
 # No writes before all preflight completes. Check exact fullfile bytes again immediately before writes.
 for file,raw in original_bytes.items():
  if (ROOT/file).read_bytes()!=raw:raise ValueError('Concurrent contract change: '+file)
 staged={};written=[]
 try:
  for file,doc in docs.items():
   raw=(json.dumps(doc,indent=2,ensure_ascii=False)+'\n').encode()
   if raw==original_bytes[file]:continue
   fd,tmp=tempfile.mkstemp(prefix='.root-boundary-intake-',dir=(ROOT/file).parent)
   with os.fdopen(fd,'wb')as f:f.write(raw)
   os.chmod(tmp,(ROOT/file).stat().st_mode & 0o777)
   staged[file]=Path(tmp)
  for file,tmp in staged.items():
   if (ROOT/file).read_bytes()!=original_bytes[file]:raise ValueError('Concurrent contract change before replacement: '+file)
   os.replace(tmp,ROOT/file);written.append(file)
 except Exception:
  # Roll back only bytes written by this invocation; root should still avoid concurrent writers.
  for file in reversed(written):
   ours=(json.dumps(docs[file],indent=2,ensure_ascii=False)+'\n').encode()
   if (ROOT/file).read_bytes()==ours:(ROOT/file).write_bytes(original_bytes[file])
   else:save(BASE/'ROOT-concurrent-write-conflict.json',{'file':file,'action':'Rollback refused to overwrite a concurrent writer; root intervention needed.'})
  raise
 finally:
  for tmp in staged.values():
   if tmp.exists():tmp.unlink()
 save(BASE/'ROOT-application.json',{'root_approval':str(approval_path),'files':written,'rows_with_proposed_changes':sum(op['has_semantic_row_change']for op in index['operations']),'review_flags_applied':False,'hashes_computed':False,'gates_run':False})
 print('Root-only row application completed; review bindings remain separate.')

if __name__=='__main__':
 parser=argparse.ArgumentParser(description=__doc__);sub=parser.add_subparsers(dest='command',required=True);sub.add_parser('plan');a=sub.add_parser('apply-root-only');a.add_argument('--approval',required=True);args=parser.parse_args()
 if args.command=='plan':plan()
 else:apply(args.approval)
