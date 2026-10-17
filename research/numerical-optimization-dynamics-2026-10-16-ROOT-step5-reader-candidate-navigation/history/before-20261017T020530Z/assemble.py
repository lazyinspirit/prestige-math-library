import json,pathlib,re,difflib,collections
R='numerical-optimization-dynamics-2026-10-16';root=pathlib.Path('research');base=root/(R+'-ROOT-step5-reader-candidate-navigation')
def read(p):return json.loads(pathlib.Path(p).read_text())
def ref(p):
 p=pathlib.Path(p)
 try:return str(p.relative_to(pathlib.Path.cwd()))
 except ValueError:return str(p)
def ptr(s):return str(s).replace('~','~0').replace('/','~1')
# Original ownership comes from actual frozen post-3a inventories, not a packet's batch label.
owner=collections.defaultdict(list)
for p in root.glob(R+'-step3-hash-*-post-3a.json'):
 x=read(p)
 for id in x.get('manifest',[]):owner[id].append(str(x['batch']))
judges=collections.defaultdict(list)
for n,line in enumerate((root/(R+'-judge.jsonl')).read_text().splitlines(),1):
 if not line.strip():continue
 x=json.loads(line)
 if x.get('model')=='gpt-6-luna':judges[x['id']].append({'path':str(root/(R+'-judge.jsonl')),'line':n,'row':x})
findings=collections.defaultdict(list);unidentified=[]
for p in sorted(root.glob(R+'-batch-*-step5-context.json')):
 m=re.search(r'-batch-(\d+)-step5-context.json$',p.name)
 if not m:continue
 b=m[1];d=read(p)
 for field in ['concerns','alerts']:
  for i,f in enumerate(d.get(field,[])):
   id=f.get('id') or f.get('item')
   rec={'source_kind':'concern' if field=='concerns' else 'alert','reader_batch':b,'digest_path':str(p),'pointer':f'/{field}/{i}','original_object':f,'reader_digest_group':d.get('group'),'reader_items_read_contains_id':id in d.get('items_read',[])}
   if isinstance(id,str):findings[id].append(rec)
   else:unidentified.append(rec)
indexpath=root/(R+'-ROOT-step4-focused-proposal-index.json');index=read(indexpath)
packets=collections.defaultdict(list);directories=collections.defaultdict(set);packet_files=set();intakes=collections.defaultdict(list)
def attach(id,p,pointer,record,kind='completed-proposal-packet'):
 if not isinstance(id,str):return
 packets[id].append({'packet_path':str(p),'pointer':pointer,'kind':kind,'record':record});packet_files.add(str(p))
for e in index['first_cycle_reader_would_be_fatal_items']:
 id=e['id'];p=pathlib.Path(e['proposal_entrypoint']);directories[id].add(p.parent);attach(id,p,'',None,'focused23-indexed-entrypoint')
# Completed primary kept packet records. Histories remain referenced rather than overwritten.
primary=[('-ROOT-step4-kept-reader-batch1-resolution/cases.json','cases'),('-ROOT-step4-kept-low-math/successor-v2/proposal.json','cases'),('-owner-step4-kept-low-editorial-cycle1/review.json','entries'),('-ROOT-step4-kept-reader-stochastic-proposals/proposal.json','entries'),('-owner-step4-kept-reader-other-high-cycle1/digest.json','confirmed_cases'),('-ROOT-step4-kept-reader-late-proposals/proposal.json','entries'),('-ROOT-step4-kept-reader-late-r2-proposals/proposal.json','entries')]
for suffix,k in primary:
 p=root/(R+suffix)
 if not p.exists():continue
 x=read(p)
 for i,e in enumerate(x.get(k,[])):
  id=e.get('id');attach(id,p,f'/{k}/{i}',e);directories[id].add(p.parent)
  if isinstance(e.get('evidence'),str) and pathlib.Path(e['evidence']).is_file():directories[id].add(pathlib.Path(e['evidence']).parent)
# Barrier packet has per-physical source edits and a prose focused review.
bdir=root/(R+'-kept-barrier59-analysis');bp=bdir/'guarded-edits.json'
for i,e in enumerate(read(bp)['edits']):
 id=pathlib.Path(e['path']).stem;attach(id,bp,f'/edits/{i}',e);directories[id].add(bdir)
# Intakes are navigation/provenance only; their existence never means a completed proposal.
for p in sorted(root.glob(R+'-ROOT-step4-kept-reader*-intake.json')):
 x=read(p)
 for i,e in enumerate(x.get('entries',[])):intakes[e['id']].append({'path':str(p),'pointer':f'/entries/{i}','finding_path':e.get('path'),'finding_pointer':e.get('pointer')})
# r3/r4 packets remain pending while active, even when partial files exist.
for p in sorted(root.glob(R+'-ROOT-step4-kept-reader-late-r*-proposals/proposal.json')):
 if not re.search(r'late-r[34]-',str(p)):continue
 for i,e in enumerate(read(p).get('entries',[])):
  attach(e['id'],p,f'/entries/{i}',e,'pending-active-proposal');directories[e['id']].add(p.parent)
allids=set(findings)|set(packets)|set(intakes)
sourcecache={};jsoncache={}
def text(p):
 p=pathlib.Path(p)
 if p not in sourcecache:sourcecache[p]=p.read_text()
 return sourcecache[p]
def parsed(p):
 if p not in jsoncache:
  try:jsoncache[p]=read(p)
  except Exception:jsoncache[p]=None
 return jsoncache[p]
def physical(value):
 if not isinstance(value,str):return None
 if value in owner:return value
 m=re.search(r'(?:^|/)items/([^/]+)\.md$',value)
 return m[1] if m else None
def sections(t):return {m.group(1):m.group(2).strip() for m in re.finditer(r'^## ([^\n]+)\n([\s\S]*?)(?=^## |\Z)',t,re.M)}
def inspect(id):
 candidates=[];operations=[];consumer_refs=[];evidence_refs=[];interfaces=[]
 # Structured row fields are most specific; focused packet directories supplement them.
 docs=[]
 for pack in packets[id]:
  if pack['record'] is not None:
   docs.append((pathlib.Path(pack['packet_path']),pack['pointer'],pack['record'],id))
   for key in ['focused_evidence_file','evidence']:
    ep=pack['record'].get(key)
    if isinstance(ep,str) and pathlib.Path(ep).suffix=='.json' and pathlib.Path(ep).exists():docs.append((pathlib.Path(ep),'',read(ep),id))
 for directory in directories[id]:
  if not directory.exists():continue
  # Avoid sibling source-id subfolders; their evidence is attributable separately.
  for p in directory.glob('*.json'):
   if p.name in ['proposal.json','cases.json','review.json','digest.json'] and any(str(p)==e['packet_path'] and e['record'] is not None for e in packets[id]):continue
   x=parsed(p)
   if x is not None:docs.append((p,'',x,id))
  for p in directory.glob('*.md'):
   if p.name.lower() in ['readme.md','review.md','root-review.md','root-handoff.md','resumed-review.md','focused-verification.md']:evidence_refs.append({'path':str(p),'pointer':''})
 paths=collections.defaultdict(set)
 def walk(p,pointer,v,assoc):
  if isinstance(v,dict):
   # Explicit carrier path overrides an inherited focus; metadata operations are excluded.
   for k in ['canonical_path','canonical_target','source_file','id','case','subject','item','target','source','path','file']:
    if isinstance(v.get(k),str):
     q=physical(v[k])
     if q:assoc=q;break
     if k in ['path','file'] and (v[k].startswith('research/') or '.proof-contracts.json' in v[k]):assoc='metadata';break
   if assoc==id:
    for k,z in v.items():
     if isinstance(z,str) and k in ['before_file','full_preimage_path','source_preimage','preimage','before_path','full_proposal_path','proposed_file','proposal_file','source_proposal','after_file','proposal','before','after','proposed']:
      q=pathlib.Path(z)
      if '\n' not in z and len(z)<600:
       if q.is_absolute() and q.exists():paths['before' if k in ['before_file','full_preimage_path','source_preimage','preimage','before_path','before'] else 'successor'].add(ref(q))
       elif q.exists():paths['before' if k in ['before_file','full_preimage_path','source_preimage','preimage','before_path','before'] else 'successor'].add(str(q))
       elif (p.parent/q).exists():paths['before' if k in ['before_file','full_preimage_path','source_preimage','preimage','before_path','before'] else 'successor'].add(str(p.parent/q))
     if 'consumer' in k.lower() and k not in ['consumer_count','consumer_counts','consumer_discovery']:
      consumer_refs.append({'path':str(p),'pointer':pointer+'/'+ptr(k),'packet_reported_value':z})
     if k in ['statement_or_definition_changed','definition_or_statement_changed','statement_or_definition_change','changed_interface','interface_change','contract_unchanged','supplier_definition_changed']:
      interfaces.append({'path':str(p),'pointer':pointer+'/'+ptr(k),'packet_reported_value':z})
    for a,b in [('before','after'),('before','proposed'),('old','new'),('source_excerpt','proposed_replacement')]:
     if isinstance(v.get(a),str) and isinstance(v.get(b),str) and v[a]!=v[b]:
      operations.append({'path':str(p),'pointer':pointer,'before':v[a],'after':v[b]});break
   for k,z in v.items():walk(p,pointer+'/'+ptr(k),z,assoc)
  elif isinstance(v,list):
   for i,z in enumerate(v):walk(p,pointer+'/'+str(i),z,assoc)
 for p,pp,v,a in docs:walk(p,pp,v,a)
 # Locate complete source preimages/successors by the declared item id, never prose filename alone.
 for directory in directories[id]:
  if not directory.exists():continue
  for p in directory.rglob('*.md'):
   if any(part in ['sources','consumer-context'] for part in p.relative_to(directory).parts):continue
   if len(p.relative_to(directory).parts)>5:continue
   t=text(p)
   if not re.search(r'^id:\s*[\"\']?'+re.escape(id)+r'[\"\']?\s*$',t[:3000],re.M):continue
   lower=str(p.relative_to(directory)).lower()
   if any(s in lower for s in ['before','original','preimage','observed','guards/','current/','current-source']):paths['before'].add(str(p))
   elif any(s in lower for s in ['proposed','proposal','successor','candidate','after']):paths['successor'].add(str(p))
 # Preferred low-math successor avoids competing old QR candidate overwrite.
 if id=='alg-implicit-shifted-bidiagonal-qr-with-deflation':
  preferred=base.parent/(R+'-ROOT-step4-kept-low-math/successor-v2/'+id+'.md')
  if preferred.exists():paths['successor']={str(preferred)}
 for role,ps in list(paths.items()):
  paths[role]={p for p in ps if pathlib.Path(p).suffix=='.md' and re.search(r'^id:\s*[\"\']?'+re.escape(id)+r'[\"\']?\s*$',text(p)[:3000],re.M)}
 for bef in sorted(paths['before']):
  for aft in sorted(paths['successor']):
   bs,ass=sections(text(bef)),sections(text(aft));d={k:bs.get(k,'')!=ass.get(k,'') for k in ['Statement','Definition']}
   candidates.append({'preimage_path':bef,'successor_path':aft,'statement_definition_delta':d,'comparison_kind':'navigation-only archived text comparison; no current guard/currency validation','changed_interface_hunks':{k:''.join(difflib.unified_diff(bs.get(k,'').splitlines(True),ass.get(k,'').splitlines(True),fromfile='archived-before/'+k,tofile='archived-successor/'+k)) for k,v in d.items() if v}})
 # Where exact operations alone exist, attribute their interface locus from the literal archived/current carrier text.
 canonical=pathlib.Path('items/'+id+'.md');ct=text(canonical) if canonical.exists() else ''
 for o in operations:
  at=ct.find(o['before']);heads=list(re.finditer(r'^## ([^\n]+)$',ct[:at],re.M)) if at>=0 else []
  o['navigation_locus']=heads[-1].group(1) if heads else 'unresolved: literal may be subfragment or stored escaped representation'
 # De-duplicate references/edits without overwriting any packet.
 dedup=lambda rows:list({json.dumps(v,sort_keys=True):v for v in rows}.values())
 return {'full_carrier_candidates':dedup(candidates),'exact_edit_candidates':dedup(operations),'packet_interface_delta_declarations':dedup(interfaces),'consumer_dispositions':dedup(consumer_refs),'focused_evidence':dedup(evidence_refs),'candidate_path_sets':{k:sorted(v) for k,v in paths.items()}}
entries=[];rejected=[];nonfrontier=[]
for id in sorted(allids):
 current=judges.get(id,[])[-1] if judges.get(id) else None
 if not findings[id] and not packets[id]:continue
 row={'physical_id':id,'canonical_path':'items/'+id+'.md','original_owning_batch':owner.get(id,[None])[0] if len(owner.get(id,[]))==1 else None,'original_owning_batches':owner.get(id,[]),'current_original_luna':current,'all_original_luna_row_references':[{'path':v['path'],'line':v['line'],'keep':v['row'].get('keep')} for v in judges.get(id,[])],'original_reader_findings':findings[id],'intake_navigation':intakes[id],'proposal_packets':[{'path':p['packet_path'],'pointer':p['pointer'],'status':p['kind']} for p in packets[id]],'authority':'navigation only; root confirmation, admission and current bindings remain absent'}
 if len(owner.get(id,[]))!=1:row['ownership_issue']='missing or multiple original frozen physical owners; root must resolve'
 if current and current['row'].get('keep') is False:
  row['route']='native original rejection adjudication; excluded from keep:true candidates';rejected.append(row);continue
 if not current:row['route']='pending original Luna status; not eligible as keep:true'
 elif current['row'].get('keep') is True:row['route']='keep:true candidate navigation only'
 else:row['route']='pending nonboolean Luna status'
 if id not in owner:
  row['route']='outside frozen frontier; separate published/foreign route, no kept-frontier admission';nonfrontier.append(row);continue
 completed=[p for p in packets[id] if p['kind']!='pending-active-proposal']
 active=any(p['kind']=='pending-active-proposal' for p in packets[id]) or any(re.search(r'late-r[34]-',p['path']) for p in intakes[id])
 row['proposal_status']='pending-active-r3-r4' if active else ('completed-packet-navigation' if completed else 'missing-proposal-packet')
 row.update(inspect(id))
 row['packet_reported_assessments']=[]
 for pack in packets[id]:
  rec=pack['record']
  if isinstance(rec,dict):
   values={k:rec[k] for k in ['disposition','classification','assessment','verdict','confirmed','reason','consumer_policy','interface_change','changed_interface','statement_or_definition_changed','statement_or_definition_change','definition_or_statement_changed'] if k in rec}
   row['packet_reported_assessments'].append({'path':pack['packet_path'],'pointer':pack['pointer'],'attribution':'Original packet author assessment only; this navigation supplies no root confirmation','values':values})
   for k in ['focused_evidence_file','evidence']:
    if isinstance(rec.get(k),str) and pathlib.Path(rec[k]).is_file():row['focused_evidence'].append({'path':rec[k],'pointer':''})
  row['focused_evidence'].append({'path':pack['packet_path'],'pointer':pack['pointer']})
 if not row['full_carrier_candidates'] and not row['exact_edit_candidates'] and any('not-confirmed' in str(a['values'].get('disposition','')) for a in row['packet_reported_assessments']):
  row['proposal_status']='completed-packet-no-edit-assessment'

 row['issues']=[]
 if not packets[id]:row['issues'].append('Actual native reader finding has no proposal packet located; intake alone does not close it.')
 if active:row['issues'].append('Late r3/r4 work is active per root instruction; partial files are navigation only, completion not inferred.')
 if row['proposal_status']!='completed-packet-no-edit-assessment' and not row['full_carrier_candidates'] and not row['exact_edit_candidates']:row['issues'].append('No normalized full preimage/successor pair or exact edits located; read packet entrypoint and fill missing navigation.')
 successors=row['candidate_path_sets'].get('successor',[])
 unique=[]
 for p in successors:
  if not any(text(p)==text(q) for q in unique):unique.append(p)
 if len(unique)>1:row['issues'].append('Multiple distinct successor carriers found: composition/conflict review required; navigation selects none.')
 if row['full_carrier_candidates']:
  row['statement_definition_delta_summary']={'statement_changed':any(x['statement_definition_delta']['Statement'] for x in row['full_carrier_candidates']),'definition_changed':any(x['statement_definition_delta']['Definition'] for x in row['full_carrier_candidates']),'basis':'archived full-carrier candidate comparisons, not a current acceptance check'}
 elif row['exact_edit_candidates']:
  loci={v['navigation_locus'] for v in row['exact_edit_candidates']};row['statement_definition_delta_summary']={'statement_changed':True if 'Statement' in loci else None,'definition_changed':True if 'Definition' in loci else None,'basis':'exact operation locations only; null means not resolved here, not false'}
 else:row['statement_definition_delta_summary']={'statement_changed':None,'definition_changed':None,'basis':'missing candidate navigation'}
 if not row['consumer_dispositions'] and row['proposal_status']!='completed-packet-no-edit-assessment':row['issues'].append('Consumer disposition values not normalized; consult packet evidence or record focused no-interface-change policy.')
 entries.append(row)
ledger={'version':1,'kind':'research-reader-candidate-navigation-not-an-admission','run':R,'research_only':True,'no_confirmation_or_authority':True,'no_hashes_computed':True,'no_source_metadata_runtime_ledger_or_native_evidence_changes':True,'no_tests_checks_gates_or_dispatch':True,'current_luna_source':str(root/(R+'-judge.jsonl')),'meaning_of_current_original_luna':'Last actual gpt-6-luna row in the current original judge ledger, copied with file/line. No guard or source currency is asserted. Missing rows remain pending.','original_ownership_source':'Actual frozen post-3a manifest inventories; source reader batch always remains separate.','focused23_index':str(indexpath),'preferred_low_math_successor':index.get('preferred_successor_for_low_math'),'snapshot_limit':'Navigation captures files read during assembly. r3/r4 active proposals remain pending even if files exist. Root must revisit later arrivals and actual current inputs at paused 5.1.','candidates':entries,'excluded_actual_luna_false_native_routes':rejected,'outside_frontier_findings':nonfrontier,'unidentified_finding_objects':unidentified,'counts':{'candidate_physical_items':len(entries),'actual_keep_true':sum(v['current_original_luna'] is not None and v['current_original_luna']['row'].get('keep') is True for v in entries),'pending_luna':sum(v['current_original_luna'] is None for v in entries),'completed_packet_navigation':sum(v['proposal_status']=='completed-packet-navigation' for v in entries),'completed_no_edit_assessment':sum(v['proposal_status']=='completed-packet-no-edit-assessment' for v in entries),'pending_active_r3_r4':sum(v['proposal_status']=='pending-active-r3-r4' for v in entries),'missing_packet':sum(v['proposal_status']=='missing-proposal-packet' for v in entries),'excluded_actual_luna_false':len(rejected),'outside_frontier':len(nonfrontier)}}
(base/'candidate-navigation.json').write_text(json.dumps(ledger,indent=2,ensure_ascii=False)+'\n')
print(json.dumps(ledger['counts']))
print('missing packet',[(v['physical_id'],v['current_original_luna']['row'].get('keep') if v['current_original_luna'] else None) for v in entries if v['proposal_status']=='missing-proposal-packet'])
print('missing edits',[(v['physical_id'],v['proposal_status']) for v in entries if not v['full_carrier_candidates'] and not v['exact_edit_candidates']])
