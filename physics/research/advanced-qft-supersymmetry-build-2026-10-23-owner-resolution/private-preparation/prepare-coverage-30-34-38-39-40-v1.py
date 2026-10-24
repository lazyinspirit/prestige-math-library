import pathlib,json,copy,hashlib,difflib
RUN='advanced-qft-supersymmetry-build-2026-10-23';BASE=pathlib.Path('research')/(RUN+'-owner-resolution');OUT=BASE/'private-preparation/coverage-30-34-38-39-40-v1'
if OUT.exists():raise RuntimeError('Unique evidence output required')
OUT.mkdir();(OUT/'preimages').mkdir();(OUT/'candidates').mkdir();(OUT/'diffs').mkdir();changes=[];guards={}
def sha(b):return hashlib.sha256(b).hexdigest()
kind={'full lecture notes':'lecture-notes','full collaboration paper':'paper','official result page':'reference-work','full preliminary analysis summary PDF':'paper','book':'textbook','mathematical treatment':'paper','research paper':'paper'}
for n in [30,34,38,39,40]:
 stem=f'{RUN}-batch-{n}';p=pathlib.Path('research')/(stem+'.coverage.json');mp=p.with_suffix('').with_suffix('.pages.json');raw=p.read_bytes();mraw=mp.read_bytes();d=json.loads(raw);before=copy.deepcopy(d);guards[str(p)]=sha(raw);guards[str(mp)]=sha(mraw)
 (OUT/'preimages'/p.name).write_bytes(raw);(OUT/'preimages'/mp.name).write_bytes(mraw);(OUT/'candidates'/mp.name).write_bytes(mraw)
 for page in d['pages']:
  for si,s in enumerate(page['sources']):
   origin={'page':page['page'],'source_index':si,'coverage_path':str(p)}
   if n==34:s['coverage_origin']=origin
   if s.get('kind') in kind:
    old=s['kind'];s['kind']='course-notes' if n==34 and 'MAT330' in s['title'] else kind[old];changes.append({'batch':n,'origin':origin,'field':'kind','before':old,'after':s['kind'],'reason':'Canonical schema spelling of the actual lecture/course/book/research/reference nature; no source retrieval or reading claim changed.'})
   for ri,r in enumerate(s.get('contents',[])):
    if not r.get('name'):
     text=r.get('source_review',{}).get('supports');assert text
     r['name']=text;r['name_provenance']={'basis':'verbatim pre-existing source_review.supports result description','source_field':f'pages[{d["pages"].index(page)}].sources[{si}].contents[{ri}].source_review.supports','new_source_reading':False}
     changes.append({'batch':n,'origin':origin,'row':ri,'field':'name','before':None,'after':text,'reason':'Use the actual previously recorded source-result description, not a carrier item title or invented named theorem.'})
    if r.get('disposition')=='context-only':
     name=r['name'];old='context-only';target=r.get('item');r['previous_disposition']=old
     if n==30:
      r['disposition']='included';r['coverage_role']='source-context-for-definition-and-example-conventions';r['reason']='Included only for the source’s recorded representation-valued gauge derivative and matter D-term conventions. The fundamental SU(2) matrix expansion and transition-covariance calculation remain the local example’s own calculation, not a result attributed to Martin.'
     elif n==38:
      r['disposition']='out-of-scope';r['reason']='The physical QFT defect-bordism F-move realization and broader applications on the cited source page are not constructed by this selected finite-regulator background-response theorem. The item ID is a context pointer only; its conditional finite-sum response claim and local model scope are unchanged.'
     elif n==40:
      if name=='Automorphism-weighted finite gauge measure':
       r['disposition']='included';r['coverage_role']='ordinary-finite-group-normalization-context';r['reason']='The ordinary finite-group automorphism weighting is included as normalization context for the adopted A={0} finite model. The local definition states its physical spin measure separately; its higher-background construction comes from the declared local mathematical suppliers, not a claimed higher-group formula in Freed–Quinn.'
      elif name=='Skeletal two-group conventions':
       r['disposition']='included';r['coverage_role']='adopted-background-data-conventions';r['reason']='The skeletal data G,A,rho,beta and normalized associator convention are included as definition-level background context; the selected physical model specializes to A={0}. This does not attribute its physical action, measure or gauging theorem to Baez–Lauda.'
      else:
       r['disposition']='out-of-scope'
       reasons={
        'Finite state-sum examples':'The cited source’s general finite higher-group point examples are comparison context, not examples reconstructed on this page. The displayed C2 point calculation uses the adopted local model and its local finite-gauging theorem; this item pointer does not claim that Moore–Saxena contains that exact C2 spin example.',
        'Finite state-sum sewing example':'The source’s general homotopy-cardinality sewing examples are not separately built here. The ordered two-edge C2 interval and its background-only boundary convention are verified locally from the exact finite-gauging supplier, rather than attributed to the source.',
        'Boundary examples':'The ordinary finite-group Chern–Simons boundary examples of Freed–Quinn are outside this selected unit-response spin model. The C2 interval example retains its local background-only boundary convention and explicit counts; no Chern–Simons boundary realization is asserted.',
        'Associator and pentagon convention':'The general skeletal two-group associator/pentagon calculation is not a physical sewing result built in this theorem. The needed local background coherence is supplied by the existing mathematical prerequisite; the physical theorem specializes to trivial A and proves its model-dependent claim separately.',
        'Background gauge transformations':'The general coupled two-group background transformation discussion is contextual here, not the physical spin action or its sewing proof. The current physical theorem uses the explicit vertex-spin translation in the selected A={0} model and its local finite-gauging mathematical supplier.'}
       r['reason']=reasons[name]
     else:raise AssertionError((n,name))
     changes.append({'batch':n,'origin':origin,'row':ri,'field':'disposition','before':old,'after':r['disposition'],'name':name,'reason':r['reason']})
 if n==34:
  a,b=d['pages'];assert a['page']=='qftx-susy-breaking-and-phenomenology' and b['page'].endswith('-examples');a['pair_pages']=[a['page'],b['page']];a['coverage_container_scope']='A/B pair-level harvest; theoretical lecture/course sources ground A-page concepts; original B-page collaboration reports alone back their reported experimental results.';a['sources'].extend(b['sources']);d['pages']=[a]
  changes.append({'batch':34,'field':'pages-container','before':[a['page'],b['page']],'after':[a['page']],'reason':'Native checklist explicitly permits source results to land in either member of the pair. Consolidation preserves every original source/harvest/empirical item destination and records each original A/B origin; no theory lecture is claimed to establish collider data.'})
 d['owner_coverage_schema_addendum']={'scope':'Private proposed canonical source-kind, harvest-name and disposition metadata correction only.','original_coverage_sha256':sha(raw),'new_source_reading_claimed':False,'fetch_stamps_refreshed':False,'native_history_preserved':True,'readiness_refreshed':False,'reading_limits':'All existing source_review/read_extent/limitations, fetch/recovery stamps, URLs, item destinations and native status/readiness prose are preserved. Those status/readiness observations are historical; this metadata correction does not reinstate older escalations or certify current native acceptance. Existing physical and mathematical source repairs are unchanged.','pair_container_note':'Included results may refer to items on either A or B. Context uses identify exact adopted conventions; out-of-scope rows explicitly exclude broader source results.'}
 candidate=json.dumps(d,indent=2,ensure_ascii=False)+'\n';(OUT/'candidates'/p.name).write_text(candidate);(OUT/'diffs'/f'batch-{n}.patch').write_text(''.join(difflib.unified_diff(raw.decode().splitlines(True),candidate.splitlines(True),fromfile=str(p),tofile=str(OUT/'candidates'/p.name))))
 # Native source records remain exactly recoverable after stripping only reviewed metadata additions.
 original_sources=[s for pg in before['pages'] for s in pg['sources']];new_sources=[s for pg in d['pages'] for s in pg['sources']];assert len(original_sources)==len(new_sources)
 for old,new in zip(original_sources,new_sources):
  x=copy.deepcopy(new);x.pop('coverage_origin',None);x['kind']=old.get('kind')
  for row,original in zip(x['contents'],old['contents']):
   if 'name' not in original:row.pop('name');row.pop('name_provenance',None)
   if original.get('disposition')=='context-only':
    row['disposition']='context-only'
    for field in ['previous_disposition','coverage_role','reason']:row.pop(field,None)
  assert x==old,(n,new['url'])
(OUT/'changes.json').write_text(json.dumps(changes,indent=2,ensure_ascii=False)+'\n');(OUT/'input-guards.json').write_text(json.dumps(guards,indent=2)+'\n');print(OUT);print('reviewed field/container changes',len(changes))
