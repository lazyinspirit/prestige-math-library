import json,subprocess,hashlib,pathlib,datetime,concurrent.futures,threading,sys,fcntl
base=pathlib.Path(__file__).parent
history=pathlib.Path('.physics-autopilot/physics-cm-qm-gr-79-2026-10-11/owner-gate-history/66b332de-c0c9-4cf2-9b38-1976dfe50e41.json')
d=json.loads(history.read_text()); request=d['request'];s=request['snapshot']
assert request['attempt']=='66b332de-c0c9-4cf2-9b38-1976dfe50e41' and len(s['items'])==1547 and len(s['pages'])==158 and len(s['battery'])==108
if not (base/'request.json').exists(): (base/'request.json').write_text(json.dumps(request,indent=2)+'\n')
lock=threading.Lock();resultpath=base/'results.json'
results=json.loads(resultpath.read_text()) if resultpath.exists() else []
def run(index):
 g=s['battery'][index-1];start=datetime.datetime.now(datetime.timezone.utc).isoformat();out=base/f'{index:03d}-{g["id"]}.stdout.log';err=base/f'{index:03d}-{g["id"]}.stderr.log'
 with out.open('wb') as o,err.open('wb') as e: p=subprocess.run(g['argv'],stdout=o,stderr=e)
 r=dict(index=index,id=g['id'],argv=g['argv'],exitCode=p.returncode,startedAt=start,completedAt=datetime.datetime.now(datetime.timezone.utc).isoformat(),stdout=str(out),stderr=str(err),stdoutSha256=hashlib.sha256(out.read_bytes()).hexdigest(),stderrSha256=hashlib.sha256(err.read_bytes()).hexdigest())
 with lock:
  with (base/'results.lock').open('a') as lease:
   fcntl.flock(lease,fcntl.LOCK_EX)
   current=json.loads(resultpath.read_text()) if resultpath.exists() else []
   assert index not in [x['index'] for x in current]
   current.append(r);resultpath.write_text(json.dumps(sorted(current,key=lambda x:x['index']),indent=2)+'\n')
  print(f'{index:03d} {g["id"]}: exit {p.returncode}',flush=True)
 return r
indices=[int(x) for x in sys.argv[2:]]
assert not set(indices)&{r['index'] for r in results},'Refusing overwrite of completed diagnostics'
if sys.argv[1]=='parallel':
 with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool: list(pool.map(run,indices))
else:
 for i in indices:run(i)
