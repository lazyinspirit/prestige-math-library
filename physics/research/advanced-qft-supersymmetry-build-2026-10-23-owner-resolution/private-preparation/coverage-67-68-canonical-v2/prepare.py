import pathlib,json,hashlib,copy,re,datetime
D=pathlib.Path(__file__).parent;V=D.with_name('coverage-67-68-canonical-v1');P=D/'proposed';P.mkdir(exist_ok=True);sha=lambda p:hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest();deltas=[];history=[]
for f in (V/'proposed').iterdir():
 if f.is_file():(P/f.name).write_bytes(f.read_bytes())
coverage=P/'advanced-qft-supersymmetry-build-2026-10-23-batch-68.coverage.json';x=json.loads(coverage.read_text());old=copy.deepcopy(x)
for page in x['pages']:
 for source in page['sources']:
  for row in source['contents']:
   if 'name_basis' not in row:continue
   review=row['source_review'];anchor=review['read_extent'].replace('\\u00a7','§').replace('\\u2013','–')
   anchor=re.sub(r'^Complete (article|chapter);\s*','',anchor).rstrip('.')
   before=row['name'];row['name']=anchor+' — '+review['supports'].rstrip('.')
   row['name_basis']='Descriptive mathematical-content label formed from the pre-existing source-numbered reading anchor and source_review.supports. It is not a quotation of a formal source heading or theorem title; no new reading or support claim.'
   deltas.append({'page':page['page'],'source_url':source['url'],'item':row['item'],'v1_name':before,'v2_name':row['name'],'unchanged_source_review':copy.deepcopy(review)})
for a,b in zip(old['pages'],x['pages']):
 for sa,sb in zip(a['sources'],b['sources']):
  for ra,rb in zip(sa['contents'],sb['contents']):assert ra.get('source_review')==rb.get('source_review')
x['canonical_normalization']['name_refinement_v2']={'prepared_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'reason':'Root requested source-anchored mathematical-content descriptions rather than reading extents alone.16 names now join their exact pre-existing numbered anchors and supports descriptions; source_review, locators, fetch/retry/read history unchanged.','v1_coverage_path':str(V/'proposed'/coverage.name),'v1_coverage_sha256':sha(V/'proposed'/coverage.name)}
coverage.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
application=json.loads((V/'application-proposal.json').read_text())
for row in application['records']:
 row['proposed_path']=str(P/pathlib.Path(row['proposed_path']).name);row['sha256']=sha(row['proposed_path'])
application['supersedes_private_proposal_only']={'path':str(V/'application-proposal.json'),'sha256':sha(V/'application-proposal.json'),'scope':'Only16 descriptive68 names/name_basis and dated normalization metadata changed;67 coverage and both notes byte-identical toV1.'};application['guards_file']=str(V/'guards.json')
(D/'application-proposal.json').write_text(json.dumps(application,indent=2)+'\n');(D/'name-deltas.json').write_text(json.dumps(deltas,ensure_ascii=False,indent=2)+'\n')
(D/'v1-before-guards.json').write_text(json.dumps([{'path':str(p),'sha256':sha(p)} for p in sorted(V.rglob('*')) if p.is_file()],indent=2)+'\n')
print('V2 prepared;',len(deltas),'source-anchored content-name refinements; V1 untouched')
