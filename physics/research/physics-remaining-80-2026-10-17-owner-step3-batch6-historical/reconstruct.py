# Reproduction guard: authentic input archives must already exist and remain byte-equal; this script never overwrites original before evidence.
from pathlib import Path
import json,re,hashlib,shutil,datetime
R=Path('/home/lazyinspirit/Projects/prestige-math-library');P=R/'physics';run='physics-remaining-80-2026-10-17';O=P/'research'/(run+'-owner-step3-batch6-historical');O.mkdir(exist_ok=True);arc=O/'authentic-inputs';arc.mkdir(exist_ok=True);bind=lambda p:{'path':str(p.relative_to(R)),'sha256':hashlib.sha256(p.read_bytes()).hexdigest()};ids=['def-emg-causal-solution-and-horizon-vocabulary','lem-emg-local-potential-gauge'];pre=P/'research'/(run+'-step3-hash-6-pre.json');post=P/'research'/(run+'-step3-hash-6-post.json');a=P/'research'/(run+'-proof-contracts.json');d=json.loads(a.read_text());snap=json.loads(pre.read_text());postdata=json.loads(post.read_text());records=[]
for p in [pre,post,a,P/'research'/(run+'-reader-6.md'),P/'research'/(run+'-alpha-batch-6-3a.md'),P/'research'/(run+'-alpha-batch-6-3a-decisions.json')]:assert (arc/p.name).read_bytes()==p.read_bytes()
for id in ids:
 current=P/'items'/(id+'.md');old=P/'research'/(run+'-owner-step2-source-preimages-60/items')/(id+'.md');assert (arc/('post-'+current.name)).read_bytes()==current.read_bytes();assert (arc/('step1-'+old.name)).read_bytes()==old.read_bytes();t=current.read_text();ot=old.read_text();ops=[];assert bind(current)['sha256']==postdata['hashes'][id]['item_sha256']
 if id.startswith('def-'):
  def public(x):return re.search(r'^## Definition\n\n(.*?)(?=^## |\Z)',x,re.M|re.S)
  archived=next(row['quote'] for c in d['contracts'].values() for row in c.get('citations',[]) if row.get('source')==id and len(row['quote'])>7000)
  assert archived==public(ot)[1].strip();m=public(t);t=t[:m.start(1)]+archived+'\n\n'+t[m.end(1):];ops.append({'operation':'Restore whole Definition from genuineStep1 archive, exactly equal to frozen aggregate full citation; Step2 report confirms Definition unchanged at exact pre-reader hash.','source':bind(old),'aggregate_source':bind(a)})
  steps=['1.1','1.2','1.4']
 else:steps=['3.1']
 for st in steps:
  deriv=next(x for x in d['contracts'][id]['derivations'] if x['step']==st);pattern=r'^'+re.escape(st)+r'\s+.*?(?=\n\n\d+\.\d+\s|\n\n## |\Z)';m=re.search(pattern,t,re.M|re.S);assert m;oldtext=st+' '+deriv['claim']+' ['+', '.join(deriv['inputs'])+']';t=t[:m.start()]+oldtext+t[m.end():];ops.append({'operation':'Restore exact tagged proof paragraph from frozen Step2 aggregate derivation, matching source bracket input order.','step':st,'source':bind(a),'json_path':'contracts.'+id+'.derivations[step='+st+']'})
 # Reader report explicitly corrected source locator(s); exact old lines available in genuine archive.
 for field in ['title','locator']:
  oldlines=re.findall(r'^\s{4,6}(?:- )?'+field+r':.*$',ot,re.M);newlines=re.findall(r'^\s{4,6}(?:- )?'+field+r':.*$',t,re.M)
  assert len(oldlines)==len(newlines)
  for oldline,newline in zip(oldlines,newlines):
   if oldline!=newline:assert t.count(newline)==1;t=t.replace(newline,oldline);ops.append({'operation':'Reverse reader-reported source title/locator normalization using exact archived line.','field':field,'old_line':oldline,'current_line':newline,'source':bind(old)})
 h=hashlib.sha256(t.encode()).hexdigest();target=snap['hashes'][id]['item_sha256'];match=h==target;path=O/('reconstructed-pre' if match else 'unmatched-candidate');path.mkdir(exist_ok=True);dest=path/(id+'.md');dest.write_text(t);records.append({'id':id,'expected_pre_sha256':target,'candidate_sha256':h,'exact_match':match,'candidate':bind(dest),'operations':ops})
(O/'reconstruction-attempt.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'qualification':'Reconstruction from authentic archive/aggregate, never an assertion of original archived full bytes. Only an exact immutable-pre hash match authenticates reconstructed result. Unmatched candidates are not preimages.','items':records},indent=2)+'\n');print([(x['id'],x['exact_match'],x['candidate_sha256']) for x in records])
