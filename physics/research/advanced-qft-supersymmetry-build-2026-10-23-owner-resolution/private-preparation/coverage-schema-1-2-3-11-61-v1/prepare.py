from pathlib import Path
import json,hashlib,copy
R=Path.cwd(); run='advanced-qft-supersymmetry-build-2026-10-23'; out=Path(__file__).resolve().parent
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
(out/'before').mkdir(exist_ok=True);(out/'candidate').mkdir(exist_ok=True)
changes=[];files=[]
kinds={1:['lecture-notes','monograph'],2:['paper','lecture-notes'],3:['lecture-notes','paper','paper'],11:['paper','survey','textbook','textbook'],61:['paper','lecture-notes']}
vakar=['§1.1.3 Principal Bundles; §1.1.5 Associated Bundles and Generalised Frame Bundles','§1.3.1 Principal Connection 1-forms','§1.3.1 Principal Connection 1-forms','§1.3.1 Principal Connection 1-forms','§1.3.3 Induced Connections; §1.4.1 Covariant Derivatives']
neeb=['§1.4 Principal Bundles; §1.6 Associated bundles and structure groups','§5.4 Connection 1-Forms','§6.1 The Curvature of a Connection 1-Form','§5.4 Connection 1-Forms; §6.1 The Curvature of a Connection 1-Form','§1.6 Associated bundles and structure groups; §5.4 Connection 1-Forms']
def edit(obj,key,val,pointer,reason):
 if obj.get(key)==val:return
 changes.append(dict(path=pointer+'/'+key,before=obj.get(key),after=val,reason=reason));obj[key]=val
for b in kinds:
 p=R/f'research/{run}-batch-{b}.coverage.json';raw=p.read_bytes();original=json.loads(raw);d=copy.deepcopy(original);start=len(changes)
 for pi,page in enumerate(d['pages']):
  for si,s in enumerate(page['sources']):
   ptr=f'/pages/{pi}/sources/{si}'
   edit(s,'kind',kinds[b][si],ptr,'Canonical document-nature label only; no change to reading extent or successful/failed retrieval history. Vákár is explicitly a bachelor’s thesis (paper); Superspace is a monograph; Pestun–Zabzine is a survey chapter; Basic Analysis I is a textbook.')
   for hi,h in enumerate(s['contents']):
    hp=ptr+f'/contents/{hi}'
    if b==2:
     name=(vakar if si==0 else neeb)[hi] if pi==0 else ('§1.3.1 Principal Connection 1-forms; §2.5.1 Potentials and Principal Connections' if si==0 and hi==0 else '§1.3.1 Principal Connection 1-forms' if si==0 else '§5.4 Connection 1-Forms; §6.1 The Curvature of a Connection 1-Form' if hi==0 else '§6.1 The Curvature of a Connection 1-Form')
     edit(h,'name',name,hp,'Verbatim recorded source section headings, verified in cached Vákár HTML or Neeb PDF table of contents; repeated headings identify their distinct local uses, not extra source results.')
    if b==3:
     name=('Chapter 8, §§8.1–8.1.1' if hi<2 else 'Chapter 8, §8.1.1') if si==0 else ('On the Bundle of Connections and the Gauge Orbit Manifold in Yang–Mills Theory, '+h['locator'] if si==1 else 'Some Remarks on the Gribov Ambiguity (historical citation only)')
     edit(h,'name',name,hp,'Uses the already recorded section locator or exact publication title. Does not invent a harvested theorem or claim newly inspected primary text.')
    if h.get('disposition')=='context-only':
     if b==2:
      reason=('The general principal-connection and local-potential conventions are used inline in the example references and verification steps 2.1–3.1. Vákár §2.5.1 is abelian U(1) context only; the SU(2) matrices, nonzero pure gauge potential and vanishing curvature are calculated locally.' if hi==0 else 'The general Cartan curvature convention is used inline in the example references and verification step 2.2. The constant SU(2) Pauli matrices and operator commutator in steps 1.1 and 3.1 are local computations, not results attributed to this section.')
      disposition='inline'
     elif si==0:
      disposition='inline';reason='The finite-model/continuum distinction is used inline in the example references and final Remarks. Its translation action and unit Jacobian are independently calculated in verification steps 1.1–3.1; the source SO(2) example is not represented as a translation example.'
     elif si==1:
      disposition='out-of-scope';reason='The paper’s Sobolev local-section setting is historical context outside this finite-dimensional local Jacobian theorem. No infinite-dimensional existence theorem is imported: the current theorem uses its explicitly listed local mathematical suppliers. The owner-approved dropped-source alternatives and failed fetch history remain unchanged.'
     else:
      disposition='out-of-scope';reason='Retained solely as historical attribution in the current Singer theorem; no primary proof or hypotheses were extracted from the inaccessible text. The actual local obstruction proof and exact suppliers are recorded by the existing owner source-resolution review, which is unchanged; this row adds no primary-source reading or acceptance claim.'
     edit(h,'disposition',disposition,hp,'Replace non-schema context-only with the exact current local use or explicitly excluded source result.');edit(h,'reason',reason,hp,'Source-qualified current use, not mathematical acceptance.')
 # invariance of all recorded source reading/fetch/drop histories
 for a,z in zip(original['pages'],d['pages']):
  for x,y in zip(a['sources'],z['sources']):
   for key in set(x)|set(y):
    if key not in ('kind','contents'):assert x.get(key)==y.get(key),(b,key)
   for xh,yh in zip(x['contents'],y['contents']):
    for key in set(xh)|set(yh):
     if key not in ('name','disposition','reason'):assert xh.get(key)==yh.get(key),(b,key)
 (out/'before'/p.name).write_bytes(raw);candidate=out/'candidate'/p.name;candidate.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
 m=p.with_name(p.name.replace('.coverage.json','.pages.json'));(out/'candidate'/m.name).write_bytes(m.read_bytes())
 files.append(dict(batch=b,path=str(p.relative_to(R)),before_sha256=sha(p),candidate=str(candidate.relative_to(R)),candidate_sha256=sha(candidate),manifest=str(m.relative_to(R)),manifest_sha256=sha(m),changes=changes[start:]))
proposal=dict(kind='PRIVATE guarded coverage schema proposal; NOT applied or accepted',run=run,files=files,limits='No new fetch or full reading. All source_review, fetch_verified, source_resolution, owner_review_evidence, failed attempts, searches and other history preserved exactly. No source, manifest, native state, authority or readiness changes. Root owns application and source judgment.')
(out/'proposal.json').write_text(json.dumps(proposal,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'files':len(files),'field_changes':len(changes),'out':str(out)}))
