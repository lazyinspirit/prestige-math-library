import json,pathlib,hashlib,subprocess,os
base=pathlib.Path(__file__).resolve().parent.relative_to(pathlib.Path.cwd());p=base/'queue.json';q=json.loads(p.read_text());existing={e['id']:e for e in q['entries']};n=sum(e['group'].startswith('post_') for e in q['entries'])
for obp in sorted(base.glob('post-observations-after-*.json')):
 obs=json.loads(obp.read_text());preview=str(pathlib.Path(obs['preview_manifest']).parent)
 for o in obs['observations']:
  id=o['supplier']
  if id in existing:continue
  src=pathlib.Path('items')/(id+'.md');raw=src.read_bytes();before=base/'before'/(id+'.md')
  if before.exists():assert before.read_bytes()==raw
  else:before.write_bytes(raw)
  n+=1;group=f'post_{n:03}'
  r=subprocess.run(['node','tools/published-repairs.mjs','claim','--run',q['run'],'--id',id,'--group',group],capture_output=True,text=True)
  if r.returncode:raise RuntimeError(r.stdout+r.stderr)
  lines=raw.decode().splitlines();ln=next(i+1 for i,l in enumerate(lines)if l.startswith('title:'));title=lines[ln-1]
  finding={'id':id,'source':str(src),'pages':[],'section':'Inherited supplier title observed in '+o['consumer'],'lines':[ln],'excerpt':title,'symptom':'Consumer '+o['consumer']+' visibly exposes supplier title notation: '+o['visible_text'],'classification':'incidental-post-repair-observation','screenshots':[o['tile']],'suggested_repair':'Independently adjudicate provider title and repair confirmed mathematical rendering notation only. Do not edit consumer.','source_lines':{str(ln):title},'post_observation_file':str(obp),'consumer':o['consumer']}
  e={'id':id,'category':'incidental-supplier-title','group':group,'status':'pending-adjudication','published':True,'source':str(src),'before_file':str(before),'before_raw_sha256':hashlib.sha256(raw).hexdigest(),'inspection_dir':preview,'findings':[finding],'adjudicator':None};q['entries'].append(e);existing[id]=e;p.with_suffix('.tmp').write_text(json.dumps(q,indent=2)+'\n');os.replace(p.with_suffix('.tmp'),p);print('CLAIMED',group,id)
print('total',len(q['entries']))
