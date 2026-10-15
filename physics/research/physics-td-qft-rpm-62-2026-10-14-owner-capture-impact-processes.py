import subprocess,re,json,os,time,datetime,hashlib
run='physics-td-qft-rpm-62-2026-10-14'
out='research/'+run+'-owner-impact-runtime-observations.json'
seen={};tasks={};deadline=time.time()+240
while time.time()<deadline:
 now=datetime.datetime.now(datetime.timezone.utc).isoformat();rows={}
 for line in subprocess.check_output(['ps','-axo','pid=,ppid=,comm=,args='],text=True).splitlines():
  m=re.match(r'\s*(\d+)\s+(\d+)\s+(\S+)\s+(.*)',line)
  if m:rows[int(m[1])]={'pid':int(m[1]),'ppid':int(m[2]),'comm':m[3],'args':m[4]}
 for pid,row in rows.items():
  match=re.search(r'--label\s+(step5-v2-impact-initial-r1-u[123])(?:\s|$)',row['args'])
  if run not in row['args'] or not match:continue
  label=match[1];queue=[pid];found=set()
  while queue:
   q=queue.pop()
   if q in found or q not in rows:continue
   found.add(q);x=rows[q];key=label+':'+str(q)
   if key not in seen:seen[key]={'label':label,'pid':q,'ppid':x['ppid'],'comm':x['comm'],'first_observed_at':now,'last_observed_at':now,'observed_ancestor_pid':pid}
   seen[key]['last_observed_at']=now
   queue.extend(y['pid'] for y in rows.values() if y['ppid']==q)
 for unit in ['1','2','3']:
  p='research/'+run+'-step5-v2/step5-v2-impact-initial-r1-u'+unit+'.task.md'
  if os.path.exists(p):tasks[p]={'path':p,'sha256':hashlib.sha256(open(p,'rb').read()).hexdigest(),'observed_at':now}
 if seen:
  tmp=out+'.tmp';json.dump({'run':run,'kind':'actual OS process ancestry and task-byte observations only; no authority or writer-absence claim','observed_at':now,'processes':list(seen.values()),'task_files':list(tasks.values())},open(tmp,'w'),indent=2);os.replace(tmp,out)
  labels={x['label'] for x in seen.values() if os.path.basename(x['comm'])=='codex'}
  if len(labels)==3:print(json.dumps({'captured_codex_writer_labels':sorted(labels),'evidence':out}),flush=True);break
 time.sleep(2)
else:print(json.dumps({'capture_deadline_reached':True,'observed_processes':len(seen),'evidence_exists':os.path.exists(out)}),flush=True)
