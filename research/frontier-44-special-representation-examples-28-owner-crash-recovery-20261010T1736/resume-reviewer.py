import sys,json,subprocess,pathlib,time
base=pathlib.Path(__file__).parent
a=json.loads((base/'assignments.json').read_text())
owner=sys.argv[1];job=next(x for x in a['agents'] if x['owner']==owner)
argv=['codex','exec','resume',job['session'],'-m','gpt-6.1-sol','-c','model_reasoning_effort="medium"','-c','model_auto_compact_token_limit=500000','-c','model_auto_compact_token_limit_scope="total"','--json','--output-last-message',str(base/(owner+'.handoff.md')),'-']
p=subprocess.Popen(argv,stdin=subprocess.PIPE,stdout=subprocess.PIPE,stderr=subprocess.DEVNULL,text=True)
status={'owner':owner,'session':job['session'],'pid':p.pid,'started_at':time.time(),'argv_settings':['gpt-6.1-sol','medium','500000','total'],'event_counts':{},'stderr_stored':False,'transcripts_stored':False}
(base/(owner+'.process.json')).write_text(json.dumps(status,indent=2)+'\n');print(json.dumps({'owner':owner,'pid':p.pid,'status':'starting'}),flush=True)
p.stdin.write(pathlib.Path(job['task']).read_text());p.stdin.close()
for line in p.stdout:
 try:e=json.loads(line)
 except ValueError:continue
 kind=e.get('type','unknown');status['event_counts'][kind]=status['event_counts'].get(kind,0)+1;status['last_event_at']=time.time()
 if kind in ['thread.started','turn.started','turn.completed','turn.failed','error']:
  print(json.dumps({'owner':owner,'type':kind,'message':e.get('message') if kind=='error' else None}),flush=True)
 (base/(owner+'.process.json')).write_text(json.dumps(status,indent=2)+'\n')
code=p.wait();status.update(exit_code=code,ended_at=time.time());(base/(owner+'.process.json')).write_text(json.dumps(status,indent=2)+'\n');print(json.dumps({'owner':owner,'exit_code':code}),flush=True)
sys.exit(code)
