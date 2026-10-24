import json,hashlib,datetime,re
from pathlib import Path
R='advanced-qft-supersymmetry-build-2026-10-23';O=Path(f'research/{R}-owner-resolution');P=O/'private-preparation';out=P/'root-coverage18-application-v1';sha=lambda p:hashlib.sha256(Path(p).read_bytes()).hexdigest();load=lambda p:json.loads(Path(p).read_text())
state=load(Path('.physics-autopilot')/R/'state.json');assert state['paused'] and state['stage']=='1-scaffold' and not state.get('finishedAt');assert not any(x.get('startedAt') and not x.get('endedAt') for x in state.get('dispatches',{}).values())
packages=[(P/'coverage-schema-1-2-3-11-61-v1/proposal.json',None),(P/'coverage-45-53-canonical-v1/application-proposal.json','873277562e5549b13fdd24d3cf0be267094fb7d44784acd33b4cbb6431cbaed4'),(P/'coverage-67-68-canonical-v2/application-proposal.json','9b8f121ac5ee7251560d8b130a0d4f2bb19978a077846eb120120fea51cf1951'),(P/'coverage-30-34-38-39-40-v1/application-proposal.json','19fcedd68bdb1fdca5c43f30ec9ee3132c690053e7c93f36725c6576bcf54042'),(O/'coverage-schema-15-19-27-29-v1/guarded-manifest.json','37c773372ee6799b80818ef2f14e64798e049a5ba234c09861c3ccfe3d085ad8')]
rows=[];guards={};proposal_refs=[]
def add_guards(g):
 if isinstance(g,list):g={r['path']:r['sha256'] for r in g}
 for p,h in g.items():
  assert p not in guards or guards[p]==h,(p,'conflicting guard');guards[p]=h
for path,expected in packages:
 if expected:assert sha(path)==expected,str(path)
 d=load(path);proposal_refs.append({'path':str(path),'sha256':sha(path)})
 for key in ['review_input_sha256','input_guards','guards']:
  if key in d:add_guards(d[key])
 if 'guards_file' in d:add_guards(load(d['guards_file']))
 for x in d.get('records',d.get('files',d.get('writes',[]))):
  target=x.get('target_path',x.get('path'));source=x.get('proposed_path',x.get('candidate'));before=x.get('target_before_sha256',x.get('before_sha256'));after=x.get('proposed_sha256',x.get('candidate_sha256',x.get('after_sha256',x.get('sha256'))))
  assert re.fullmatch(r'research/'+R+r'-batch-[0-9]+\.(coverage\.json|notes\.md)',target),target
  assert sha(source)==after,source
  assert (not Path(target).exists()) if before is None else sha(target)==before,target
  if x.get('manifest'):guards[x['manifest']]=x['manifest_sha256']
  if x.get('manifest_path'):guards[x['manifest_path']]=x['manifest_sha256']
  rows.append({'target':target,'source':source,'before_sha256':before,'after_sha256':after})
assert len(rows)==20 and len({r['target'] for r in rows})==20
for path,h in guards.items():assert sha(path)==h,path
# The original source records remain exact apart from the reviewed metadata fields.
for r in rows:
 if not r['target'].endswith('coverage.json'):continue
 batch=int(re.search(r'-batch-([0-9]+)',r['target'])[1]);oldpath=Path(r['target']) if r['before_sha256'] else Path(f'research/{R}-batch-{batch}-source-coverage.json');old=load(oldpath);new=load(r['source']);old_sources=[s for p in old['pages'] for s in p.get('sources',[])];new_sources=[s for p in new['pages'] for s in p.get('sources',[])];
 assert len(new_sources)==len(old_sources)+(1 if batch==15 else 0),(batch,'source count')
 for oldsource in old_sources:
  choices=[s for s in new_sources if s.get('url')==oldsource.get('url') and s.get('title')==oldsource.get('title')];assert choices,(batch,oldsource.get('title'))
  def retains(s):
   for k,v in oldsource.items():
    if k in ['kind','contents']:continue
    if s.get(k)!=v:return False
   a=oldsource.get('contents',[]);b=s.get('contents',[])
   if len(a)!=len(b):return False
   for x,y in zip(a,b):
    for k,v in x.items():
     if k=='disposition' and v in ['context-only','excluded','not-used-as-proof']:continue
     if y.get(k)!=v:return False
   return True
  assert any(retains(s) for s in choices),(batch,'changed original source/read/fetch/row field',oldsource.get('title'))
# New notes are an authentic byte copy; existing notes only receive the reviewed suffix.
for r in rows:
 if r['target'].endswith('67.notes.md'):assert Path(r['source']).read_bytes()==Path(f'research/{R}-batch-67-notes.md').read_bytes()
 if r['target'].endswith('68.notes.md'):assert Path(r['source']).read_bytes().startswith(Path(r['target']).read_bytes())
out.mkdir();(out/'before').mkdir();applied=[]
for r in rows:
 target=Path(r['target']);assert (not target.exists()) if r['before_sha256'] is None else sha(target)==r['before_sha256']
 if target.exists():(out/'before'/target.name).write_bytes(target.read_bytes())
 data=Path(r['source']).read_bytes();assert hashlib.sha256(data).hexdigest()==r['after_sha256'];target.write_bytes(data);applied.append(r)
report={'reviewer':'/root','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'kind':'root-exact-coverage-schema-and-authentic-artifact-application','proposals':proposal_refs,'rows':applied,'input_guards':guards,'coverage_files':18,'notes_files':2,'reason':'Root read all package reports, exact source-kind/name/context-disposition changes and qualifications, and the new Muger selected-reading/fetch evidence. Existing original source objects, locators, fetch/retry/read histories and row assertions were verified unchanged except the explicitly reviewed kind/disposition fields and added names. Pair34 consolidation retains all original source records and destinations.67/68 originals remain intact at their historical filenames; canonical67 notes are an exact copy and68 notes preserve their entire old prefix. Only the actual new independently authored15 lecture treatment is added, with bounded attributed reading. All guards and actual private checker successes were reviewed before application. No source item, manifest, import pin, proof or readiness row changed.','native_gate':False,'reading_limits':'Root reviewed the attributed bounded source reading and metadata, not every PDF anew. Coverage structure/retrieval checks do not confer mathematical or physical proof acceptance, new measurements, publication or native gate coverage.'};(out/'review.json').write_text(json.dumps(report,indent=2,ensure_ascii=False)+'\n');print(json.dumps({'out':str(out),'coverage_files':18,'notes_files':2,'targets':len(applied),'guards':len(guards)}))
