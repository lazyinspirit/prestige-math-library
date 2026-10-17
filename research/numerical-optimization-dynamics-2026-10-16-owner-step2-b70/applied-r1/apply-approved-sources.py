from pathlib import Path
import json,hashlib,subprocess,shlex,re,datetime
B=Path(__file__).resolve().parent;P=B.parent/'proposal-r1';d=json.loads((P/'combined-exact-selection.json').read_text());receipt=[]
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest() if p.exists() else None
def writers():
 out=[]
 for line in subprocess.check_output(['ps','-eo','pid,args'],text=True).splitlines():
  if 'node tools/dispatch.mjs --role scope-repairer ' not in line:continue
  words=shlex.split(line.strip());args=words[1:]
  try:task=Path(args[args.index('--task')+1])
  except (ValueError,IndexError):continue
  text=task.read_text() if task.exists() else ''
  m=re.search(r'Authorized source files:\s*(\[.*?\])\.',text)
  if m:scope=json.loads(m[1])
  elif 'No canonical application' in text:scope=[]
  else:raise RuntimeError('Unclassified active native source scope: '+str(task))
  out.append({'pid':int(words[0]),'task':str(task),'scope':scope})
 return out
# All approved source bytes must still be current before any source mutation.
for r in d['files']:
 assert sha(Path(r['path']))==r['before_sha256'],'STALE BEFORE: '+r['path']
 assert sha(Path(r['proposal_source']))==r['proposed_sha256'],'STALE APPROVED PROPOSAL: '+r['path']
for r in d['files']:
 p=Path(r['path']);active=writers();block=[x for x in active if str(p) in x['scope']]
 row={'path':str(p),'checked_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'active_native_source_writers':active,'blocking':block}
 if block:row['status']='held_for_native_writer';receipt.append(row);continue
 assert sha(p)==r['before_sha256'],'DRIFT BEFORE WRITE: '+str(p)
 if p.exists():
  assert not re.search(r'^status:\s*published\s*$',p.read_text(),re.M),'Published edit not authorized'
  q=B/'before'/p;q.parent.mkdir(parents=True,exist_ok=True);q.write_bytes(p.read_bytes())
 row['before_sha256']=r['before_sha256'];row['approved_proposed_sha256']=r['proposed_sha256']
 p.write_bytes(Path(r['proposal_source']).read_bytes());row['status']='applied';receipt.append(row)
(B/'source-application.json').write_text(json.dumps({'authority':'Root approved combined exact20 source selection; per-path native writer checks; no metadata or controls edited.','rows':receipt},indent=2)+'\n')
print(json.dumps({'applied':sum(x['status']=='applied' for x in receipt),'held':[x['path'] for x in receipt if x['status']!='applied']}))
