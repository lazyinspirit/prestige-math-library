import json,pathlib,hashlib,copy,datetime
R='advanced-qft-supersymmetry-build-2026-10-23';O=pathlib.Path('research/'+R+'-owner-resolution');D=pathlib.Path(__file__).parent; P=D/'proposed';B=D/'before';P.mkdir(exist_ok=True);B.mkdir(exist_ok=True)
sha=lambda p:hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest(); guards=[]; changes=[]
def archive(p):
 p=pathlib.Path(p); t=B/str(p).replace('/','__');t.write_bytes(p.read_bytes());guards.append({'path':str(p),'sha256':sha(p),'archive':str(t)});return p
read=lambda p:json.loads(pathlib.Path(p).read_text())
for b in (67,68):
 inp=archive(f'research/{R}-batch-{b}-source-coverage.json');x=read(inp); original=copy.deepcopy(x)
 manifest=archive(f'research/{R}-batch-{b}.pages.json');(P/manifest.name).write_bytes(manifest.read_bytes())
 for p in read(manifest):
  for item in p['items']:archive('items/'+item['id']+'.md')
 if b==68:
  prior=archive(O/'batch68-penrose-review/proposals/batch-68-source-coverage.json');x['owner_review']=read(prior)['owner_review']
  for p in ('batch68-penrose-review/report.md','batch68-penrose-review/source-cache-relocation.json','batch68-penrose-review/sources/wells-fetch-observation.json','root-coupled-penrose-review/review.json','root-projective-dolbeault-review/review.json'):archive(O/p)
 x['native_author_status_history']=x.get('status','No native top-level status field was present; original artifact preserved byte-for-byte.')
 x['status']='Canonical schema normalization proposal only. Native fetch/reading evidence and historical qualifications are preserved; exact current67/68 proof interfaces were subsequently reviewed in the cited owner/Root dossiers. Root reports the442 current Step1 records ready; this conversion neither records readiness nor independently accepts sources or proofs.'
 for pi,page in enumerate(x['pages']):
  for si,s in enumerate(page['sources']):
   if b==67:
    s['kind']=['textbook','lecture-notes','lecture-notes','paper'][si]
    s['kind_basis']=['Tasty Bits is the cited several-complex-variables textbook; only the expressly recorded sections were read.','MIT course lecture notes; only the expressly recorded lectures were read.','Cambridge PartIII course lecture notes; only the expressly recorded sections were read.','Serre research article retained as historical attribution, not the proof input.'][si]
   elif s.get('kind')=='book-chapter':
    s['native_source_kind']='book-chapter';s['kind']='monograph';s['kind_basis']='Container classification: Seminar on Differential Geometry, Annals of Mathematics Studies102, is the edited research monograph containing the Wells chapter. The historical author reports reading only the16-page chapter pp483–498, not the entire volume. The later repair did not independently reread Wells; it is context-only in that repair.'
   for ri,row in enumerate(s['contents']):
    before=copy.deepcopy(row)
    if 'name' not in row:
     if b==67:
      if si==0:
       anchors={'lem-qftx-gaga-projective-cover-laurent-cohomology':'§1.1 Theorem1.1.4; §1.2 including Exercise1.2.4; §2.5','thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology':'§4.4, Lemma4.4.7 and Theorem4.4.5','ex-qftx-gaga-analytic-projective-structure':'§1.2; §4.4, Theorem4.4.5','ex-qftx-gaga-analytic-untwisted-obstruction':'§1.2 (one-variable Laurent methods; several-variable exercise is not a proved input)'}
       row['name']=anchors[row['item']]
      elif si==1:row['name']='Lecture7 (line-bundle cocycles)' if row['item'].startswith('def-') else 'Lectures4,7–9,11 (projective atlas and sheaf/Čech/Dolbeault framework; comparison sketch only)'
      elif si==2:row['name']='§5 (holomorphic line-bundle transition functions)' if row['item'].startswith('def-') else '§§3.1–3.2,4.4–4.5 (Dolbeault and acyclic-cover comparison)'
      else:row['name']='§13, Lemma4 and footnote4, pp20–21 (historical attribution only)'
     else:
      # Preserve the author's exact source-numbered reading anchor; explanatory support stays in source_review.
      row['name']=row['source_review']['read_extent']
     row['name_basis']='Existing native source-numbered range/result anchor; descriptive item mapping remains in result/source_review. Not a newly claimed theorem title or new reading.'
    if row['disposition'] not in ('included','inline','already-published','deferred','out-of-scope'):
     row['native_disposition']=row['disposition'];row['disposition']='out-of-scope'
     row['reason']=row.get('result') or row.get('source_review',{}).get('limitations')
     if row['native_disposition']=='not-used-as-proof':row['reason']+=' Historical source attribution is retained, but this source argument is explicitly excluded as a proof premise for the mapped local item.'
    if before!=row:changes.append({'batch':b,'page':page['page'],'source_url':s['url'],'row_index':ri,'before':before,'after':copy.deepcopy(row)})
 x['canonical_normalization']={'proposal_only':True,'prepared_by':'/root/superalgebra_recovery','prepared_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'native_artifact':str(inp),'native_artifact_sha256':sha(inp),'reading_attribution':'All pre-existing read_extent/locator/source_review/fetch_verified/recovery_attempts fields remain native author history, not fresh reading by this conversion. Source-numbered names are normalized from those existing anchors.','current_proof_boundary':'Exact67 analytic groups and bundle Dolbeault comparison, independently reconstructed68 relative/Green/operator proofs; no GAGA/monad/inverse-normal-form premise. See Root and owner review dossier guards.','no_new_fetch':True,'no_new_stamp':True,'native_row_history_preserved':True,'schema_changes':'Source kind/name/disposition normalization only. All genuine original fields are retained, with native_disposition/native_source_kind where a canonical field changes.'}
 out=P/f'{R}-batch-{b}.coverage.json';out.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
 # Check genuine fetch/recovery/reading fields against the immutable native artifact, including repeated B source records.
 for ap,bp in zip(original['pages'],x['pages']):
  for a,s in zip(ap['sources'],bp['sources']):
   for key in ('fetch_verified','recovery_attempts','locator','url'):
    assert a.get(key)==s.get(key),(b,key)
   for arow,row in zip(a['contents'],s['contents']):
    for key in ('result','source_review','item'):
     assert arow.get(key)==row.get(key),(b,key)
 notes=archive(f'research/{R}-batch-{b}'+('-notes.md' if b==67 else '.notes.md'))
 if b==67:(P/f'{R}-batch-67.notes.md').write_bytes(notes.read_bytes())
 else:
  addendum='\n\n## Dated canonical-coverage normalization addendum (2026-10-24)\n\nThe preceding native author notes and their historical readiness/source qualifications remain verbatim. Canonical `.coverage.json` is proposed from the immutable `-source-coverage.json` with kind/name/disposition schema normalization; every fetch stamp, retry history and attributed reading range is retained. Wells is a chapter of the edited research monograph; the native author reports complete chapter reading. The later supplier repair did not independently reread Wells: its initially copied cache was0bytes, one later HTTP200 response is durably cached with its actual hash, and Wells is context-only in that repair. No new reading or fetch stamp is created here. The later exact67 and68 proof-interface repairs and Root reviews supersede the old missing67 scientific qualification; Root reports current442 Step1 records ready. This addendum does not independently accept proofs/sources or change native/readiness state. See the guarded private canonical-coverage preparation report and original batch68-penrose-review/report.md for full limits.\n'
  (P/f'{R}-batch-68.notes.md').write_text(notes.read_text()+addendum)
for p in ('../tools/physics-support/coverage-checklist.mjs','../tools/physics-support/source-fetch-check.mjs','../tools/physics-support/source-resolution.mjs','../tools/physics-support/frontier-snapshot.mjs'):archive(p)
for b in range(1,70):
 p=pathlib.Path(f'research/{R}-batch-{b}.pages.json');guards.append({'path':str(p),'sha256':sha(p),'purpose':'actual full69-manifest frontier guard; only67/68 copied as private checker siblings'})
(D/'guards.json').write_text(json.dumps(guards,indent=2)+'\n');(D/'row-deltas.json').write_text(json.dumps(changes,ensure_ascii=False,indent=2)+'\n')
proposal=[]
for p in sorted(P.iterdir()):
 if p.suffix=='.json' and '.pages.' in p.name:continue
 target=pathlib.Path('research')/p.name;proposal.append({'proposed_path':str(p),'sha256':sha(p),'target_path':str(target),'target_before_sha256':sha(target) if target.exists() else None,'must_be_absent':not target.exists(),'operation':'authentic-bytecopy' if p.name.endswith('-67.notes.md') else 'minimal-canonical-structure-with-preserved-history'})
(D/'application-proposal.json').write_text(json.dumps({'root_application_only':True,'records':proposal,'readiness_hash_boundary':'itemHash does not consume coverage/contracts/notes: exact API closure contains item carriers and manifest declarations. Creating canonical coverage/notes alone does not change442 readiness composite hashes. These artifacts do affect actual native coverage/artifact checks and require Root current checks.','guards_file':str(D/'guards.json')},indent=2)+'\n');print('prepared',len(proposal),'guarded private files;',len(changes),'row normalizations; no production writes')
