import pathlib,json,hashlib,copy,datetime
R='advanced-qft-supersymmetry-build-2026-10-23';D=pathlib.Path(__file__).parent;P=D/'proposed';B=D/'before';P.mkdir(exist_ok=True);B.mkdir(exist_ok=True);sha=lambda p:hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest();guards=[];deltas=[];apply=[]
for b in (45,53):
 src=pathlib.Path(f'research/{R}-batch-{b}.coverage.json');data=json.loads(src.read_text());old=copy.deepcopy(data)
 for p in (src,pathlib.Path(f'research/{R}-batch-{b}.pages.json')):
  q=B/p.name;q.write_bytes(p.read_bytes());guards.append({'path':str(p),'sha256':sha(p),'archive':str(q)})
 (P/f'{R}-batch-{b}.pages.json').write_bytes(pathlib.Path(f'research/{R}-batch-{b}.pages.json').read_bytes())
 for page in data['pages']:
  for i,s in enumerate(page['sources']):
   before=copy.deepcopy(s)
   if b==45 and s.get('kind')=='review':
    s['native_source_kind']='review';s['kind']='survey';s['kind_basis']='The original author explicitly identifies this as Burgess’s55-page Introduction to Effective Field Theory review, treating Wilsonian mode separation and threshold examples. Survey is the canonical review-treatment kind; no new reading or new result claim.'
   if b==53:
    s['kind']=['lecture-notes','paper','survey'][i]
    s['kind_basis']=['Tong’s112-page Supersymmetric Quantum Mechanics lecture notes, expressly identified as lecture notes in the original locator/history; only recorded Witten-index sections are attributed as read.','Kinney–Maldacena–Minwalla–Raju is the original60-page superconformal-index research paper. It remains paper, not a manufactured primary survey.','Rastelli–Razamat is the43-page supersymmetric-index review expressly identified as such in the original locator/history; survey is the canonical treatment kind.'][i]
   for row in s['contents']:
    if row['disposition']=='context-only':
     row['native_disposition']='context-only';row['disposition']='out-of-scope';row['reason']='This ordinary-QFT EFT result is retained only as context for the mapped SUSY item, not built or imported as its supersymmetric proof: '+row['support']
   if s!=before:deltas.append({'batch':b,'page':page['page'],'source_index':i,'before':before,'after':copy.deepcopy(s)})
 data['canonical_normalization']={'prepared_by':'/root/superalgebra_recovery','proposal_only':True,'prepared_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'original_coverage_sha256':sha(src),'source_purpose':'Existing native locators/searches/history identify the actual treatment kinds. Original research remains paper. Out-of-scope45 rows preserve their original context-only status and exact support text, without claiming those nonsupersymmetric examples prove a SUSY formula.','reading_limit':'No new source fetch, paper/chapter reading, stamp or independent proof acceptance is claimed. Every original locator/search/retrieval/source scope and genuine fetch stamp is preserved exactly. Prior same-owner45/53 mathematical convention/trace repairs remain in canonical-normalization-repair.md; no item changes here.'}
 for ap,bp in zip(old['pages'],data['pages']):
  for a,s in zip(ap['sources'],bp['sources']):
   for k in ('fetch_verified','recovery_attempts','locator','searches','url'):
    assert a.get(k)==s.get(k),(b,k)
   for ar,r in zip(a['contents'],s['contents']):
    for k in ('name','item','support','scope','locator'):
     assert ar.get(k)==r.get(k),(b,k)
 for k in ('source_searches','retrieval_history'):assert old.get(k)==data.get(k),(b,k)
 out=P/src.name;out.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n');apply.append({'target_path':str(src),'before_sha256':sha(src),'proposed_path':str(out),'proposed_sha256':sha(out)})
(D/'guards.json').write_text(json.dumps(guards,indent=2)+'\n');(D/'source-deltas.json').write_text(json.dumps(deltas,ensure_ascii=False,indent=2)+'\n');(D/'application-proposal.json').write_text(json.dumps({'root_application_only':True,'records':apply,'source_or_manifest_or_readiness_writes':0,'itemHash_boundary':'Coverage is not an itemHash input; current source/manifests remain unchanged.'},indent=2)+'\n');print('prepared2 guarded coverage files; immutable native read/fetch evidence preserved')
