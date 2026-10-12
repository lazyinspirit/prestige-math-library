from pathlib import Path
import json,hashlib,subprocess,re,collections,datetime
p=Path('research/frontier-44-special-representation-examples-28-owner-one-time-exhausted-exception-20261011/exception_ground_corner_constructor');f=p/'final-provenance-eligibility.json';j=json.loads(f.read_text());run=j['run'];hashbytes=lambda b:hashlib.sha256(b).hexdigest()
files=subprocess.run(['rg','--files','research'],capture_output=True,text=True,check=True).stdout.splitlines();index=collections.defaultdict(list)
for s in files:
 if run in s and s.endswith('.md'):index[Path(s).stem].append(s)
cache={}
def data(path):
 if path not in cache:cache[path]=Path(path).read_bytes()
 return cache[path]
def body(b):return re.sub(br'^---\r?\n[\s\S]*?\r?\n---\r?\n?',b'',b,count=1)
def seal(path):return {'path':path,'raw_sha256':hashbytes(data(path))}
counts=collections.Counter();late=[]
for r in j['rows']:
 if r['origin_class']!='immutable-baseline-original':continue
 ordinary=next((d for d in r['present_bookkeeping'] if not d['owner'] and d['decision'] in ['accept','repaired']),None)
 if not ordinary:r['refresh_basis']={'status':'pending-no-stale-ordinary-acceptance'};counts['pending_no_ordinary']+=1;continue
 receipt=json.loads(data(ordinary['evidence']['path']));ownpath=r['item_file']['path'];own=data(ownpath);mtime=r['item_mtime'];reviewat=ordinary['at'];predates=mtime<=reviewat
 basis={'ordinary_acceptance':{'evidence':ordinary['evidence'],'version':receipt['version'],'decision':receipt['decision'],'at':receipt['at'],'reason':receipt['reason'],'defects':receipt.get('defects',[]),'confidence':receipt.get('confidence'),'stale_input_hash':receipt['sha256'],'current_input_hash_differs':receipt['sha256']!=r['current_input_sha256']},'own_file_mtime_predates_ordinary_receipt':predates,'current_body_sha256':hashbytes(body(own)),'mtime_is_not_historical_byte_proof':True}
 author=r['latest_covering_native_author'];basis['own_file_predates_latest_native_author_end']=bool(author and mtime<=author['ended_at']);basis['ordinary_receipt_in_latest_native_author_window']=bool(author and author['started_at']<=receipt['at']<=author['ended_at'])
 reportpath='research/'+run+'-step3b-pair-'+r['pair']+'.md'
 if Path(reportpath).exists():
  text=data(reportpath).decode();paragraphs=[x.strip() for x in text.split('\n\n') if r['id'] in x]
  subject=[x for x in paragraphs if x.startswith('- `'+r['id']+'`') or x.startswith('| `'+r['id']+'`')]
  if not subject:subject=[x for x in paragraphs if any(k in x.lower() for k in ['accept','repaired','authored','checked'])]
  basis['native_pair_report']={**seal(reportpath),'subject_mentions':len(paragraphs),'subject_excerpt':subject[0][:1200] if subject else None,'excerpt_is_report_evidence_not_new_review':True}
 if predates:
  basis['status']='stale-ordinary-acceptance-with-own-file-preceding-review';basis['root_action']='Refresh current bookkeeping from actual prior ordinary acceptance and completed supplier/interface disposition; preserve the original receipt in native history'
  counts['own_precedes_actual_ordinary_review']+=1
 else:
  late.append(r['id']);matches=[];different=[]
  for path in index[r['id']]:
   if '/exception_ground_corner_constructor/' in path:continue
   try:b=data(path)
   except OSError:continue
   e={**seal(path),'current_body_equal':body(b)==body(own),'current_whitespace_normalized_body_equal':re.sub(br'\s+',b' ',body(b)).strip()==re.sub(br'\s+',b' ',body(own)).strip()}
   (matches if e['current_body_equal'] else different).append(e)
  basis['research_same_body_carriers']=matches;basis['research_different_body_carriers']=different;basis['research_carriers_do_not_by_themselves_establish_acceptance']=True
  if matches:
   basis['status']='late-own-mtime-with-identical-body-research-carrier';counts['late_own_mtime_same_body_archive']+=1
  else:
   basis['status']='late-own-mtime-needs-existing-actual-repair-evidence-binding';counts['late_own_mtime_no_same_body_archive']+=1
  basis['root_action']='Bind the existing real owner/native repair evidence or authenticated unchanged mathematical before carrier before refreshing bookkeeping; this packet does not invent acceptance of the late own source'
 r['refresh_basis']=basis
j['original_refresh_summary']={'originals':226,**dict(counts),'late_own_mtime_ids':late,'important':'All 226 have actual stale ordinary accept/repaired receipts; original identity requires no new creation certificate. 207 own files predate that ordinary review; 19 own files were touched after it. Research same-body matches are byte evidence only and need the real owner/native repair review binding.'};j['augmentation_at']=datetime.datetime.now(datetime.timezone.utc).isoformat();j['limitations'].append('Original refresh basis maps existing ordinary verdicts and archived byte equality; it supplies no new mathematical audit or verdict and requires root to bind actual repair evidence where own bytes are later');f.write_text(json.dumps(j,indent=2)+'\n')
summary='# Read-only final provenance packet\n\n'+json.dumps({'counts':j['counts'],'original_refresh_summary':j['original_refresh_summary']},indent=2)+'\n\nThe seven postbaseline additions have genuine native own-file windows; their only late input is the shared plan-spec.json, not their own source or any supplier source. Their pending step is a current owner repaired or ordinary review receipt and the actual native certifier. Canonical Step3 auditor certifications are absent.\n\nNo native receipts, baseline, canonical content, or gates were written. Root must perform final stable-context recertification.\n';(p/'FINAL-PROVENANCE-REPORT.md').write_text(summary);print(json.dumps(j['original_refresh_summary'],indent=2))
