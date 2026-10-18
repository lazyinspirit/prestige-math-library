import pathlib,json,hashlib,subprocess,datetime
R='non-ml-math-remaining-81-2026-10-18';targets=json.load(open('/tmp/b77-history-targets.json'));ids={x['id']:x for x in targets};expected={x['expected']:x['id'] for x in targets};out=pathlib.Path('research/'+R+'-owner-step3-batch77-history');out.mkdir(exist_ok=True);results={i:[] for i in ids};candidates=[];bounds={};root=pathlib.Path('.')
# No LLM session journals, dispatch transcripts, helper creation logs or rollout payloads are inspected.
exclude_suffix={'.log','.jsonl','.pdf','.png','.svg','.jpg','.jpeg','.webp','.mp4','.zip','.gz'}
for area in ['research','.autopilot/'+R]:
 n=0;size=0
 for p in pathlib.Path(area).rglob('*'):
  if not p.is_file() or out in p.parents:continue
  if p.suffix in exclude_suffix or any(w in p.name for w in ['rollout','transcript','journal']):continue
  if area=='research':
   relative=p.relative_to('research');owned=relative.parts[0].startswith(R)
   named=p.stem in ids
   if not owned and not named:continue
  if p.stat().st_size>10_000_000:continue
  b=p.read_bytes();h=hashlib.sha256(b).hexdigest();n+=1;size+=len(b)
  if p.stem in ids:candidates.append({'path':str(p),'sha256':h,'bytes':len(b),'matching_target':expected.get(h)})
  if h in expected:
   i=expected[h];dest=out/'recovered'/i/(str(len(results[i]))+'-'+p.name);dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(b);results[i].append({'origin':str(p),'sha256':h,'bytes':len(b),'archived_path':str(dest)})
 bounds[area]={'files_raw_hashed':n,'bytes_raw_hashed':size}
# Git reachable object enumeration gives exact blob bytes, not reconstructed content.
cmd=['git','rev-list','--all','--objects'];proc=subprocess.run(cmd,capture_output=True,text=True,check=True);objects=[]
for l in proc.stdout.splitlines():
 parts=l.split(' ',1)
 if len(parts)==2 and pathlib.Path(parts[1]).stem in ids:objects.append(parts)
gitobs=[]
for oid,p in objects:
 b=subprocess.run(['git','cat-file','blob',oid],capture_output=True,check=True).stdout;h=hashlib.sha256(b).hexdigest();gitobs.append({'object':oid,'path':p,'sha256':h,'bytes':len(b),'matching_target':expected.get(h)})
 if h in expected:
  i=expected[h];dest=out/'recovered'/i/('git-'+oid+'.md');dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(b);results[i].append({'git_object':oid,'origin':p,'sha256':h,'bytes':len(b),'archived_path':str(dest)})
for x in targets:
 p=pathlib.Path('items/'+x['id']+'.md');x['current_actual_sha256']=hashlib.sha256(p.read_bytes()).hexdigest();x['matches_native_post']=x['current_actual_sha256']==x['current'];x['recovered_full_preimages']=results[x['id']];x['status']='recovered-exact-complete-preimage' if results[x['id']] else 'not-found-in-bounded-genuine-source-search';x['historical_delta_unknown']=not bool(results[x['id']])
record={'run':R,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'targets':targets,'search_bounds':bounds,'excluded':'LLM journals, session/rollout payloads, dispatch/helper creation logs and transcripts were not read; compressed/binary artifacts and files >10MB excluded. No source reconstruction or hash inversion performed.','named_file_candidates':candidates,'git_search':{'command':cmd,'reachable_named_objects':len(objects),'objects':gitobs},'limitations':'Absence in these bounded genuine source archives is not proof that no preimage exists elsewhere. Current native review and historical delta availability remain separate.'};(out/'source-preimage-search.json').write_text(json.dumps(record,indent=2)+'\n');print(json.dumps({'bounds':bounds,'named_candidates':len(candidates),'gitobjects':len(objects),'targets':targets},indent=2))
