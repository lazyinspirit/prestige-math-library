#!/usr/bin/env python3
"""ROOT-ONLY, deliberately not executed by its author.
Usage: python3 research/...-routing-integrate.py --inspect
       python3 research/...-routing-integrate.py --apply
No validators, gates, source/manifest/contract edits or acceptance continuity.
All adapters/guards are evaluated before archiving or mutating live evidence.
"""
import argparse, copy, hashlib, json, pathlib, re, shutil, datetime
ROOT=pathlib.Path(__file__).resolve().parents[1]
RUN='bayesian-computational-statistics-62'
PREFIX='research/'+RUN+'-owner-step3-gate1-'
REGIONS=[f'{n}-{n+3}' for n in range(1,54,4)]+['57-62']
canonical=lambda x: json.dumps(x,ensure_ascii=False,sort_keys=True,separators=(',',':'),allow_nan=False)
hashobj=lambda x: hashlib.sha256(canonical(x).encode()).hexdigest()
sha=lambda b: hashlib.sha256(b).hexdigest()
def path(p):
 q=(ROOT/p).resolve(); assert q.is_relative_to(ROOT),p; return q
def load(p):return json.loads(path(p).read_text())
def serialized(x):return (json.dumps(x,ensure_ascii=False,indent=2)+'\n').encode()
def require(v,msg):
 if not v:raise RuntimeError(msg)

def main():
 ap=argparse.ArgumentParser(); ap.add_argument('--inspect',action='store_true');ap.add_argument('--apply',action='store_true');args=ap.parse_args()
 require(args.inspect != args.apply,'Specify exactly one of --inspect / --apply')
 docs={};originals={};proposals=[];changes=[];shared=[];skipped=[];ambiguities=[];guards=[]
 ledgerpath='research/defect-ledger.jsonl'; rawledger=path(ledgerpath).read_bytes();lines=rawledger.decode().splitlines(keepends=True)
 rows={}; positions={}
 for n,l in enumerate(lines):
  try:r=json.loads(l)
  except json.JSONDecodeError:continue
  if r.get('run')==RUN:
   did=r.get('defect_id');require(did not in rows,'Duplicate ledger '+str(did));rows[did]=r;positions[did]=n
 ledger_original=copy.deepcopy(rows)
 def document(p):
  if p not in docs:
   raw=path(p).read_bytes();originals[p]=raw;docs[p]=json.loads(raw)
  return docs[p]
 def guarddoc(p,expected):
  if isinstance(expected,dict):require(document(p)==expected,'Full document guard differs: '+p)
 def guardrow(r):
  if isinstance(r,dict) and r.get('defect_id') and 'caught_at_stage' in r:
   require(ledger_original.get(r['defect_id'])==r,'Ledger guard differs: '+r['defect_id'])
 def allrowguards(x):
  if isinstance(x,dict):
   guardrow(x)
   for k,v in x.items():
    if k not in ['after','ledger_after','append_decision','after_decision','after_without_root_subject_stamp']:allrowguards(v)
  elif isinstance(x,list):
   for v in x:allrowguards(v)
 def op(p,before,after,origin):
  require(isinstance(after,dict) and after.get('obligation') and after.get('verdict'),'Incomplete decision in '+origin)
  # Acceptance currency is assigned to another root integration helper.
  if after['verdict']=='accepted_repair' and (not isinstance(before,dict) or before.get('defect_ids')==after.get('defect_ids')):skipped.append({'id':after['id'],'reason':'central acceptance continuity; unchanged here'});return
  doc=document(p);found=[(n,d) for n,d in enumerate(doc['decisions']) if d['obligation']==after['obligation']]
  if isinstance(before,dict):
   require(len(found)==1 and found[0][1]==before,'Exact before-decision guard differs: '+after['obligation'])
   require(before['id']==after['id'] and before['route']==after['route'],'Changed decision identity')
   doc['decisions'][found[0][0]]=copy.deepcopy(after)
  else:
   require(not found,'Supplemental obligation already present: '+after['obligation'])
   require(after['obligation'].startswith('gate:') and after['route']=='gate','Only explicit gate supplements can be appended')
   doc['decisions'].append(copy.deepcopy(after))
  for did in after.get('defect_ids',[]):
   require(did in rows,'No existing genuine ledger row: '+did)
   require(rows[did].get('subject')==after['id'],'Ledger subject mismatch: '+did)
   refs=rows[did].setdefault('adjudication_ref',[])
   ref={'path':p,'obligation':after['obligation']}
   if ref not in refs:refs.append(ref)
  changes.append({'path':p,'obligation':after['obligation'],'before':before,'after':after,'proposal':origin})
 def ledgerupdate(before,after):
  guardrow(before)
  require(isinstance(after,dict),'Missing proposed ledger row')
  a=copy.deepcopy(after);b=copy.deepcopy(before);ar=a.pop('adjudication_ref',[]);br=b.pop('adjudication_ref',[])
  require(a==b,'Ambiguous non-reference ledger mutation: '+before['defect_id'])
  dest=rows[before['defect_id']].get('adjudication_ref',[])
  # Apply the proposed correction, retaining only additional references added
  # by another genuine operation in this same transaction.
  rows[before['defect_id']]['adjudication_ref']=copy.deepcopy(ar)+[ref for ref in dest if ref not in br and ref not in ar]
 def sharedentry(s,origin):
  s=copy.deepcopy(s);s['_proposal']=origin;shared.append(s)
 def defaultdecision(b):return f'research/{RUN}-alpha-batch-{b}-3a-decisions.json'
 for region in REGIONS:
  p=PREFIX+region+'-routing-proposals.json'
  if not path(p).exists():p=PREFIX+region+'/routing-proposals.json'
  require(path(p).exists(),'Missing regional routing proposal: '+region)
  d=load(p);proposals.append({'path':p,'raw_sha256':sha(path(p).read_bytes())})
  if region in ['9-12','57-62']:continue
  if region=='1-4':
   for r in d['proposals']:
    after=r.get('decision_after_without_fresh_bindings')
    if after:op(r['decision_path'],r['guard'].get('decision_exact_before'),after,p)
    else:skipped.append({'id':r.get('subject'),'reason':'ledger continuity follows unchanged accepted repair; handled centrally'})
  elif region=='5-8':
   for r in d['routing_proposals']:
    if r.get('source_guard',{}).get('current_file'):
     g=r['source_guard'];current=path(g['current_file']).read_bytes();after=r['after'];b=after['obligation'].split(':')[1]
     snap=load(f'research/{RUN}-step3-hash-{b}-post.json');expected=(snap.get('page_hashes',{}).get(after['id']) or {}).get('file_sha256') if after['route']=='page' else snap['hashes'][after['id']]['item_sha256']
     require(sha(current)==expected,'Archived current source does not match native post: '+after['id'])
    op(r['path'],r.get('before'),r['after'],p);allrowguards(r.get('existing_ledger_row'))
  elif region=='13-16':
   for r in d['findings']:
    guarddoc(r['target'],r.get('guard',{}).get('expected_document'));allrowguards(r.get('guard'));op(r['target'],None,r['append_decision'],p)
  elif region=='17-20':
   for r in d['decision_operations']:op(r['path'],r.get('before'),r['after_without_root_subject_stamp'],p)
   for r in d['ledger_operations']:ledgerupdate(r['before'],r['after'])
  elif region=='21-24':
   for r in d['routing_proposals']:
    guarddoc(r['decision_path'],r.get('before_document'));guardrow(r.get('ledger_guard'));op(r['decision_path'],None,r['append_decision'],p)
  elif region=='25-28':
   for r in d['shared_defects']:
    op(r['decision_path'],r['decision_before'],r['decision_after'],p);sharedentry(r['owner_shared_defect_proposal'],p);ledgerupdate(r['ledger_before'],r['ledger_after'])
   skipped.extend({'id':r['id'],'reason':'central acceptance continuity'} for r in d.get('acceptance_continuities',[]))
  elif region=='29-32':
   for r in d['proposals']:
    if 'after_decision' in r:
     op(r['decision_path'],r['before_decision'],r['after_decision'],p)
     a=r['after_decision']; sharedentry({'id':a['id'],'defect_id':a['defect_ids'][0],'reason':a['same_defect_evidence'],'obligations':[a['obligation'],a['same_defect_as']]},p)
    else:skipped.append({'id':r['subject'],'reason':'central acceptance continuity'})
  elif region=='33-36':
   for r in d['proposals']:op(r['decision_path'],r['before'],r['after_unbound_proposal'],p)
  elif region=='37-40':
   for r in d['decision_patches']:op(r['path'],r['before'],r['after'],p)
   for r in d['additional_gate_decisions']:op(r['path'],None,r['after'],p)
   for r in d['ledger_ownership_patches']:ledgerupdate(r['before'],r['after'])
   physical=d['same_physical_defect_evidence']
   leap=next(r['after'] for r in d['decision_patches'] if r['after'].get('same_defect_as'))
   sharedentry({'id':leap['id'],'defect_id':physical['defect_id'],'reason':physical['review'],'obligations':[leap['obligation'],leap['same_defect_as']]},p)
  elif region=='41-44':
   for r in d['subjects']:
    if 'after_decision_preferred' not in r:skipped.append({'id':r['id'],'reason':'central acceptance continuity'});continue
    b=r['batch'];pre=load(f'research/{RUN}-step3-hash-{b}-pre.json');post=load(f'research/{RUN}-step3-hash-{b}-post.json');candidate=path(r['candidate_preimage'])
    frozen=path(f'research/{RUN}-owner-step2-gate1-41-44-frozen-sources/'+r['id']+'.md')
    if frozen.exists() and sha(frozen.read_bytes())==pre['hashes'][r['id']]['item_sha256']:candidate=frozen
    authenticated=candidate.exists() and sha(candidate.read_bytes())==pre['hashes'][r['id']]['item_sha256'] and sha(path('items/'+r['id']+'.md').read_bytes())==post['hashes'][r['id']]['item_sha256']
    after=r['after_decision_preferred'] if authenticated else r['after_decision_if_preimage_not_authenticated']
    op(defaultdecision(b),r['before_decision'],after,p)
  elif region=='45-48':
   for r in d['decision_patches']:op(r['path'],r['before'],r['after'],p)
   sharedentry(d['owner_shared_defect_proposal'],p)
   for r in d['supplemental_decisions']:guardrow(r['ledger_row_exact']);op(r['decision_file'],None,r['after'],p)
  elif region=='49-52':
   for r in d['proposals']:guardrow(r['ledger_before']);op(defaultdecision(r['group'].split('-')[-1]),None,r['decision_addition'],p)
  elif region=='53-56':
   guarddoc(d['target'],d['before_document_exact'])
   for after in d['append_decisions']:op(d['target'],None,after,p)
 # Explicit root instruction: quantile40 was native-escalated, subsequently root accepted;
 # use a genuine owner amendment of the composite, never fabricate native acceptance.
 qpath=defaultdecision(40);qdoc=document(qpath); q=[x for x in qdoc['decisions'] if x['id']=='alg-quantile-monte-carlo-standard-error' and x['route']=='touched']
 require(len(q)==1,'Ambiguous quantile40 decision')
 if q[0]['verdict']=='accepted_repair':
  before=copy.deepcopy(q[0]);after=copy.deepcopy(before);after['verdict']='amended_repair'
  after['evidence']+=' Root gate1 routing amendment: original native verdict was escalated, not accepted. The genuine reader real-field repair is retained. The owner completed the producer positivity repair and independent consumer-use review, synchronized actual manifest dependencies/Definition mirrors and the risk-review composite. This is an owner amendment of the current composite, which must differ from both immutable pre/post composites. It claims no new source edit or native acceptance; original native escalation and intervening owner acceptance remain archived.'
  op(qpath,before,after,'Explicit root instruction to integration-script author')
 # Shared-defect targets follow the actual immutable v2 scope, never guessed hashes.
 ownerpath=f'research/{RUN}-step3-owner-repair-evidence.json'
 ownerraw=path(ownerpath).read_bytes() if path(ownerpath).exists() else None
 owner=json.loads(ownerraw) if ownerraw else {'version':1,'run':RUN}
 require(owner.get('version')==1 and owner.get('run')==RUN,'Owner evidence identity')
 owner.setdefault('shared_defects',[])
 def target_for(obligation,ident):
  lane,b,_=obligation.split(':',2);s=load(f'research/{RUN}-step3-scope-{b}.json')
  if lane=='touched':
   require(ident in s['touched'],'Not native touched target '+obligation)
   return {'obligation':obligation,'id':ident,'batch':b,'route':'touched','added':ident in s.get('added',[])}
  if lane in ['reader','refuter']:
   found=[r for r in s['reader_findings' if lane=='reader' else 'refuter_findings'] if r['obligation']==obligation]
   require(len(found)==1,'Missing native finding '+obligation);return {**found[0],'batch':b,'route':'reader' if lane=='reader' else 'flagged'}
  raise RuntimeError('Unsupported shared target '+obligation)
 # Future decision bytes are hashed for references if an evidence list includes that decision file.
 future={p:serialized(doc) for p,doc in docs.items()}
 for s in shared:
  ident=s['id'];row=rows[s['defect_id']];require(row['subject']==ident,'Shared row subject mismatch')
  current=s.get('current_path')
  if not current:
   if path('items/'+ident+'.md').exists():current='items/'+ident+'.md'
   else:
    candidates=list(path('library').rglob(ident+'.md'));require(len(candidates)==1,'Ambiguous shared page');current=str(candidates[0].relative_to(ROOT))
  refs=s.get('evidence') or [{'path':s.get('evidence_file',s['_proposal'])}]
  refs=[{'path':x if isinstance(x,str) else x['path']} for x in refs]
  # Decision seals change later; retain frozen proposals/reports/snapshots, not mutable decision hashes.
  refs=[ref for ref in refs if ref['path'] not in docs]
  if not refs:refs=[{'path':s['_proposal']}]
  for ref in refs:ref['sha256']=sha(future[ref['path']] if ref['path'] in future else path(ref['path']).read_bytes())
  entry={k:v for k,v in s.items() if not k.startswith('_') and k not in ['evidence_file']}
  entry.update(current_path=current,current_raw_sha256=sha(path(current).read_bytes()),ledger_row_sha256=hashobj(row),evidence=refs,obligations=[{'obligation':o if isinstance(o,str) else o['obligation'],'target_sha256':hashobj(target_for(o if isinstance(o,str) else o['obligation'],ident))} for o in s['obligations']])
  existing=[x for x in owner['shared_defects'] if x.get('defect_id')==entry['defect_id']]
  require(not existing,'Existing shared_defects binding requires explicit root reconciliation: '+entry['defect_id'])
  owner['shared_defects'].append(entry)
 require(not ambiguities,'Ambiguous operations: '+json.dumps(ambiguities))
 for did,row in rows.items():
  if row!=ledger_original[did]:lines[positions[did]]=canonical(row)+'\n'
 output={**future,ledgerpath:''.join(lines).encode(),ownerpath:serialized(owner)}
 summary={'run':RUN,'proposals':proposals,'decision_changes':changes,'skipped_continuities':skipped,'shared_defects':[x['defect_id'] for x in shared],'files':list(output),'no_execution_by_author':True,'subject_hashes':'Root final sealing still required; existing subject stamps are not a new binding.'}
 print(json.dumps(summary,ensure_ascii=False,indent=2))
 if args.inspect:return
 # Archive exact pre-application state and native reports/results/snapshots before any live write.
 stamp=datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S.%fZ');archive=path(PREFIX+'routing-integration-before/'+stamp);archive.mkdir(parents=True,exist_ok=False)
 for p in output:
  if path(p).exists():dest=archive/p;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(path(p).read_bytes())
 batches={re.search(r'alpha-batch-(\d+)-',p).group(1) for p in docs}
 for b in batches:
  for p in [f'research/{RUN}-alpha-batch-{b}-3a.md',f'research/{RUN}-dispatch/alpha-3a-batch-{b}.result.json',f'research/{RUN}-step3-hash-{b}-pre.json',f'research/{RUN}-step3-hash-{b}-post.json']:
   if path(p).exists():dest=archive/p;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(path(p).read_bytes())
 (archive/'integration-plan.json').write_bytes(serialized(summary))
 # Compare all guarded bytes immediately before applying; no foreign source/metadata files touched.
 for p,b in originals.items():require(path(p).read_bytes()==b,'Concurrent decision write '+p)
 require(path(ledgerpath).read_bytes()==rawledger,'Concurrent ledger write')
 require((path(ownerpath).read_bytes() if path(ownerpath).exists() else None)==ownerraw,'Concurrent owner evidence write')
 for p,b in output.items():path(p).write_bytes(b)
 print('APPLIED; exact originals archived at '+str(archive.relative_to(ROOT)))
if __name__=='__main__':main()
