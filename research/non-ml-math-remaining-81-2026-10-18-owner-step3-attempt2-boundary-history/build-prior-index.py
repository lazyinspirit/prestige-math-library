import pathlib,json,hashlib,re,collections,yaml
R='non-ml-math-remaining-81-2026-10-18';P=pathlib.Path('research');O=P/(R+'-owner-step3-attempt2-boundary-history');O.mkdir(exist_ok=True)
C=json.load(open(P/(R+'-proof-contracts.json')))['contracts'];dirs=[p for p in P.glob(R+'-owner-step2-battery-boundaries-*') if p.is_dir()]
guardkeys={'source_raw_sha256','source_guard_sha256','current_raw_sha256_observed','source_raw_sha256_at_read','worklist_source_raw_sha256','raw_sha256','source_raw_sha256_observed','raw_source_sha256'}
assignments={}
for p in (P/(R+'-owner-step2-first-battery-failures')).glob('boundary-assignment-*.json'):
 if p.name=='boundary-assignment-index.json':continue
 a=json.load(open(p))
 for s in (a.get('subjects',[]) if isinstance(a,dict) else a):assignments[s['id']]={'sha256':s.get('source_raw_sha256'),'file':str(p),'record':s}
# Index only targeted genuine Step2 source archives; no broad repository/Git raw scan.
snapshotmap=collections.defaultdict(list);roots=[p for p in P.glob(R+'-owner-step2-*') if p.is_dir()]+[P/(R+'-owner-final-frontier-format'),pathlib.Path('.autopilot')/R/'owner-step2-source-baseline']
for root in roots:
 if not root.exists():continue
 for p in root.rglob('*.md'):
  if p.stem in C:snapshotmap[p.stem].append(str(p))
filecache={};sourcecache={};
def readfile(p):
 if p not in filecache:
  b=pathlib.Path(p).read_bytes();s=b.decode();m=re.match(r'^---\r?\n([\s\S]*?)\r?\n---\r?\n',s);fm=yaml.safe_load(m.group(1)) if m else {};body=s[m.end():] if m else s;filecache[p]=(hashlib.sha256(b).hexdigest(),fm,body)
 return filecache[p]
def records(a):
 if isinstance(a,list):
  for x in a:yield from records(x)
 elif isinstance(a,dict):
  if isinstance(a.get('id'),str):yield a
  for k,v in a.items():
   if k not in ['patches','row_patches','candidate_findings','original','proposed','original_current_row','proposed_full_row'] and isinstance(v,(list,dict)):yield from records(v)
def getguards(x):
 out=[]
 if isinstance(x,dict):
  for k,v in x.items():
   if k in guardkeys and isinstance(v,str) and re.fullmatch('[a-f0-9]{64}',v):out.append({'field':k,'sha256':v})
   elif k in ['evidence','actual_evidence','read_record'] and isinstance(v,dict):out.extend(getguards(v))
 return out
benign={'verification','provenance','status','origin','pipeline_run','dependency_level'}
def sourcebasis(i,guards):
 key=(i,tuple(sorted(x['sha256'] for x in guards)))
 if key in sourcecache:return sourcecache[key]
 p='items/'+i+'.md'
 if not pathlib.Path(p).exists():return {'eligible':False,'reason':'current source missing'}
 ch,cf,cb=readfile(p);basis={'eligible':False,'current_raw_sha256':ch,'review_source_guards':guards,'failure':'no authenticated exact source or metadata-only full-body identity'}
 for g in guards:
  if g['sha256']==ch:basis.update(eligible=True,kind='exact-raw-source-identity',guard=g);break
  for q in snapshotmap[i]:
   try:qh,qf,qb=readfile(q)
   except Exception:continue
   if qh!=g['sha256']:continue
   diffkeys=[k for k in set(qf or {})|set(cf or {}) if (qf or {}).get(k)!=(cf or {}).get(k)]
   bibliography_only=False
   if 'sources' in diffkeys:
    os=(qf or {}).get('sources');ns=(cf or {}).get('sources')
    bibliography_only=isinstance(os,dict) and isinstance(ns,dict) and set(os)==set(ns)=={'references'} and isinstance(os['references'],list) and isinstance(ns['references'],list) and len(os['references'])==len(ns['references']) and all(isinstance(a,dict) and isinstance(b,dict) and set(a)<= {'title','url','locator'} and set(b)<= {'title','url','locator'} and a.get('url')==b.get('url') for a,b in zip(os['references'],ns['references']))
   if qb==cb and all(k in benign or k=='sources' and bibliography_only for k in diffkeys):basis.update(eligible=True,kind='authenticated-full-before-body-identical-metadata-only',guard=g,before_source=q,before_raw_sha256=qh,metadata_changed_fields=sorted(diffkeys),body_identical=True,bibliographic_metadata_only=bibliography_only,bibliographic_delta=({'before':(qf or {}).get('sources'),'current':(cf or {}).get('sources')} if bibliography_only else None));break
  if basis['eligible']:break
 sourcecache[key]=basis;return basis
allrows=[];packetSummary=[]
for d in dirs:
 domain=d.name.split('-boundaries-',1)[1];rp=d/'row-patches.json'
 if not rp.exists():continue
 a=json.load(open(rp));patches=a if isinstance(a,list) else a.get('patches',a.get('row_patches',[]));reads=collections.defaultdict(list)
 # Actual owner item review records from focused packet JSON only.
 files=[rp]+[p for p in d.glob('*.json') if any(w in p.name for w in ['reading','read-review','reviews','item-review','item-read'])]
 for p in files:
  aa=json.load(open(p))
  if p==rp and isinstance(aa,list):continue
  for j,x in enumerate(records(aa)):
   if 'case' in x and any(k in x for k in ['original','proposed','proposed_full_row']):continue
   if any(k in x for k in ['read_extent','read_scope','reading','source_basis','read_sections','sections_read','actual_review','review','mathematical_review','specific_mathematical_review','current_assertion_read','complete_relevant_argument_read']):reads[x['id']].append({'file':str(p),'record_index':j,'record':x})
 for j,x in enumerate(patches):
  i=x.get('id',x.get('item'));case=x.get('case')
  if i not in C or not case:continue
  old=x.get('original',x.get('original_current_row',x.get('exact_original_current_row',x.get('before'))));proposed=x.get('proposed',x.get('proposed_full_row',x.get('after')))
  if not isinstance(proposed,dict):continue
  guards=getguards(x)
  for rr in reads[i]:guards+=getguards(rr['record'])
  # Worklist guards bind the assigned current source; record this basis openly rather than implying an unrecorded source hash in the review.
  assignment=assignments.get(i)
  if assignment and assignment.get('sha256'):guards.append({'field':'assignment-source-raw-sha256','sha256':assignment['sha256'],'file':assignment['file']})
  guards=list({(g['field'],g['sha256']):g for g in guards}.values())
  basis=sourcebasis(i,guards) if reads[i] else {'eligible':False,'failure':'no actual item read/review record located in this packet'}
  allrows.append({'id':i,'case':case,'domain':domain,'patch_file':str(rp),'patch_index':j,'old':old,'proposed':proposed,'case_evidence':x.get('evidence',x.get('actual_evidence')),'read_records':reads[i],'source_basis':basis})
 packetSummary.append({'domain':domain,'patch_file':str(rp),'patches':len(patches),'actual_item_read_records_located':len(reads),'source_snapshot_roots_indexed':len(roots)})
# All rows remain evidence references only; no current annotation is inferred here.
(O/'prior-row-review-index.json').write_text(json.dumps({'run':R,'limits':'Mechanical evidence reconciliation only. No new mathematical reading/acceptance, canonical writes, gate, or final seal. Assignment guard origin is explicit. Metadata-only identity requires identical complete body and unchanged mathematical frontmatter; permitted bookkeeping fields are listed.','metadata_only_allowed_fields':sorted(benign),'packets':packetSummary,'rows':allrows},indent=2,ensure_ascii=False)+'\n')
print({'packets':len(packetSummary),'rows_indexed':len(allrows),'source_identity_eligible':sum(x['source_basis']['eligible'] for x in allrows),'review_records_missing_rows':sum('no actual item' in x['source_basis'].get('failure','') for x in allrows),'snapshot_filename_candidates':sum(map(len,snapshotmap.values()))})
