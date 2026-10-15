import json,re,pathlib,copy,datetime
R='physics-td-qft-rpm-62-2026-10-14';B=pathlib.Path('research/'+R+'-owner-stage3-native-qft-repairs-round1');diag='research/'+R+'-owner-stage3-native-battery-1f350534-failures';targets={};evidence=[];guards={};ledger=[]
def archive(p):
 p=pathlib.Path(p);q=B/'before'/p;q.parent.mkdir(parents=True,exist_ok=True)
 if not q.exists():q.write_bytes(p.read_bytes())
 return str(q)
def load(n):
 p=f'research/{R}-alpha-batch-{n}-3a-decisions.json';d=json.loads(pathlib.Path(p).read_text());return p,d
cache={}
def patch(n,ob,fields,why):
 if n not in cache:cache[n]=load(n)
 p,d=cache[n];x=next(x for x in d['decisions'] if x['obligation']==ob)
 if p not in targets:targets[p]={'before_file':archive(p),'batch':str(n),'patches':[]}
 pp=next((v for v in targets[p]['patches'] if v['obligation']==ob),None)
 if pp is None:pp={'obligation':ob,'id':x['id'],'route':x['route'],'before':copy.deepcopy(x),'fields':{}};targets[p]['patches'].append(pp)
 pp['fields'].update(fields);pp.setdefault('reasons',[]).append(why)
 if pathlib.Path('items/'+x['id']+'.md').exists():p0='items/'+x['id']+'.md';guards[p0]={'before_file':archive(p0)}
 return x
text=pathlib.Path(diag+'/step3-routing-adjudicate.txt').read_text()
drift=re.findall(r'ERROR decision-not-applied: \[([^]]+)\] accepted_repair no longer matches',text)
for n in range(1,65):
 p=pathlib.Path(f'research/{R}-alpha-batch-{n}-3a-decisions.json')
 if not p.exists():continue
 d=json.loads(p.read_text())
 for x in d['decisions']:
  if x['id'] in drift and ('qft' in x['id']) and x['verdict']=='accepted_repair':
   why='The failed native carrier-comparison gate detects a composite metadata delta after the completed native review. The native scientific review and its actual defect IDs remain authoritative; final carrier equality to immutable reader-post is not claimed after root-approved current contract/manifest/source-format integration. This is a current route correction, not another scientific defect or a new review.'
   patch(n,x['obligation'],{'verdict':'amended_repair','owner_resolution':why,'evidence':'Historical native scientific review retained verbatim: '+x['evidence']+' Current metadata carrier disposition: '+why},why)
empty_ids={38:6,42:4,54:1,64:8}
for n,count in empty_ids.items():
 p,d=load(n);xs=[x for x in d['decisions'] if x['verdict'] in ['accepted_repair','amended_repair'] and not x.get('defect_ids')];assert len(xs)==count,(n,len(xs))
 for x in xs:
  why='The existing native decision records a completed current claim/proof (or formulation) and exact-prerequisite review, with explanatory/typing/layout/metadata enrichment and no registered confirmed defect for this obligation. An accepted/amended repair cannot truthfully name an empty defect inventory. Retain all original native review evidence and immutable pre/post history, classify this actual enrichment as reviewed_no_defect/audit_enrichment, and do not invent a fault ID or an absent preimage. This disposition does not close any separate reader/refuter finding or publication-maintenance issue.'
  patch(n,x['obligation'],{'verdict':'reviewed_no_defect','change_kind':'audit_enrichment','defect_ids':[],'owner_resolution':why},why)
pairs={35:[(1,1)],37:[(1,1),(2,2)],41:[(j,j) for j in range(1,7)],44:[(1,1),(2,2)],54:[(1,1),(3,2)]}
for n,ps in pairs.items():
 sp=f'research/{R}-step3-scope-{n}.json';s=json.loads(pathlib.Path(sp).read_text());archive(sp)
 for ri,fi in ps:
  r=next(x for x in s['reader_findings'] if x['obligation']==f'reader:{n}:{ri}');f=next(x for x in s['refuter_findings'] if x['obligation']==f'refuter:{n}:{fi}')
  assert all(r.get(k)==f.get(k) for k in ['id','defect','severity','observed_sha256']),(n,ri,fi)
  _,d=load(n);rd=next(x for x in d['decisions'] if x['obligation']==r['obligation']);fd=next(x for x in d['decisions'] if x['obligation']==f['obligation']);assert rd['defect_ids']==fd['defect_ids'] and rd['verdict']==fd['verdict']
  why=f"Original-owner same-issue comparison: both frozen findings identify {r['id']} with defect {r['defect']}, severity {r['severity']}, and the identical observed carrier {r['observed_sha256']}. Reader location: {r['location']}; refuter location: {f['location']}. Their literal reports identify the same specific omission recorded by the one existing canonical defect ID, and the completed native same-subject resolution/evidence is retained. This pointer shares only those exact observations; no frozen label, observed source or report is changed."
  patch(n,f['obligation'],{'same_defect_as':r['obligation'],'same_defect_evidence':why},why);evidence.append({'scope':sp,'primary':r,'alias':f,'decision_primary':rd,'decision_alias':fd,'classification':'same-exact-observed-carrier and same specific literal reported omission'})
for n,id,suffix in [(54,'pthm-qft-example-dirac-magnetic-benchmark','54-dirac-conditional-syntax'),(55,'pthm-qft-example-soft-coherent-counts','55-coupling-sign')]:
 _,d=load(n);x=next(x for x in d['decisions'] if x['route']=='touched' and x['id']==id);remove=R+'-3a-batch-'+suffix;assert remove in x['defect_ids'];kept=[z for z in x['defect_ids'] if z!=remove];assert kept
 why='Retain all genuine native touched-repair IDs except the one already owned by the distinct actual refuter obligation on this same subject. That confirmed finding remains its sole owner; the removed duplicated touched association and full native evidence are preserved in the immutable private beforeimage. No defect is erased, reclassified or superseded.'
 patch(n,x['obligation'],{'defect_ids':kept,'owner_resolution':why},why)
# Exact wrong-subject references are real metadata registration defects, not new science claims.
for n,ob in [(49,'touched:49:ex-qft-x01'),(49,'page:49:qft-x01'),(63,'page:63:qft-ir05')]:
 _,d=load(n);x=next(x for x in d['decisions'] if x['obligation']==ob);new=R+f'-owner-stage3-gate-metadata-b{n}-'+x['id']+'-ownership';oldids=copy.deepcopy(x['defect_ids'])
 why='The native failed gate identifies a wrong-subject canonical defect reference in this exact decision. The original scientific defect belongs to its source theorem and remains active there, with its original history unchanged. This separate closed metadata-registration row records only this subject decision ownership mismatch; correcting its reference preserves the complete existing scientific review and does not assert a new mathematical or physical failure.'
 patch(n,ob,{'verdict':'amended_repair','defect_ids':[new],'owner_resolution':why,'evidence':'Historical native current-content evidence retained: '+x['evidence']+' Ownership correction: '+why},why)
 ledger.append({'defect_id':new,'run':R,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'class':'accuracy','subclass':'contract-mismatch','severity':'nonfatal','location':'contract-row','subject':x['id'],'batch':str(n),'group':'batch-'+str(n),'caught_at_stage':'3a-adjudicate','caught_by_role':'owner','disposition':'fixed','repair_confidence':1,'adjudication_ref':[{'path':f'research/{R}-alpha-batch-{n}-3a-decisions.json','obligation':ob}], 'evidence':[{'path':diag+'/step3-routing-adjudicate.txt','note':'Actual ledger-ref-mismatch/double-owned failure for this exact subject.'},{'path':str(B/'routing.partial.proposal.json'),'note':why+' Old wrong-subject IDs retained historically: '+', '.join(oldids)}]})
(B/'routing.partial.proposal.json').write_text(json.dumps({'version':1,'run':R,'targets':targets,'source_byte_guards':guards,'excluded_root_alias_obligations':['reader:19:1','refuter:19:1','reader:52:1','refuter:52:1'],'pending_strict_alias63':'refuter:63:1 requires root approved canonical alias receipt before final field patch; no carrier identity fabricated'},indent=2)+'\n')
(B/'same-finding-evidence.json').write_text(json.dumps(evidence,indent=2)+'\n')
(B/'ledger-append.proposal.json').write_text(json.dumps(ledger,indent=2)+'\n')
print('routing',len(targets),'docs',sum(len(v['patches']) for v in targets.values()),'rows; official append proposals',len(ledger))
