import json,pathlib,hashlib,subprocess,os,sys,datetime,yaml
category,findings_path,prefix=sys.argv[1:4];base=pathlib.Path(__file__).resolve().parent.relative_to(pathlib.Path.cwd());p=base/'queue.json';q=json.loads(p.read_text());by={e['id']:e for e in q['entries']};fs=json.load(open(findings_path));n=sum(e['group'].startswith(prefix+'_')for e in q['entries']);tag=datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%f')
def save():
 p.with_suffix('.tmp').write_text(json.dumps(q,indent=2)+'\n');os.replace(p.with_suffix('.tmp'),p)
for original in fs:
 f=dict(original);id=f['id'];f.setdefault('evidence_dir',str(pathlib.Path(findings_path).parent));f['intake_file']=findings_path
 if id in by:
  e=by[id]
  if any(x.get('intake_file')==findings_path and x.get('section')==f.get('section')for x in e['findings']):continue
  e.update(status='adjudicating-followup-intake',followup_pending=True);e.setdefault('pending_followup_indices',[]).append(len(e['findings']));e['findings'].append(f);save()
  # An active writer's successor must be archived only after it drains.
  if e.get('adjudicator') and pathlib.Path(base/'adjudications'/(id+'.json')).exists():
   raw=pathlib.Path(e['source']).read_bytes();receipt=base/'receipts'/(id+'.json')
   has_current=False
   if receipt.exists():
    code="import fs from 'node:fs';import {recordedPublishedRepair} from './tools/published-repair-policy.mjs';const [id,file,receipt]=process.argv.slice(1);console.log(JSON.stringify(recordedPublishedRepair(process.cwd(),id,fs.readFileSync(file,'utf8'),receipt)));"
    r=subprocess.run(['node','--input-type=module','-e',code,id,e['source'],str(receipt)],capture_output=True,text=True,check=True);has_current=json.loads(r.stdout).get('ok',False)
   folder=base/('continuation-before'if has_current else'followup-before');folder.mkdir(exist_ok=True);archive=folder/(id+'-'+tag+'.md');archive.write_bytes(raw);key='continuation_before'if has_current else'followup_before';e[key+'_file']=str(archive);e[key+'_raw_sha256']=hashlib.sha256(raw).hexdigest();e['continuation_pending']=has_current;e['continuation_status']='pending-same-owner-diagram-followup'if has_current else'no-recorded-receipt-yet';save()
  print('MERGED',e['group'],id,e.get('adjudicator'));continue
 src=pathlib.Path('items')/(id+'.md');raw=src.read_bytes();before=base/'before'/(id+'.md')
 if before.exists():assert before.read_bytes()==raw
 else:before.write_bytes(raw)
 status=yaml.safe_load(raw.decode().split('---',2)[1]).get('status');n+=1;group=f'{prefix}_{n:03}'
 if status=='published':
  r=subprocess.run(['node','tools/published-repairs.mjs','claim','--run',q['run'],'--id',id,'--group',group],capture_output=True,text=True)
  if r.returncode:raise RuntimeError(r.stdout+r.stderr)
 e={'id':id,'category':category,'group':group,'status':'pending-adjudication','published':status=='published','source':str(src),'before_file':str(before),'before_raw_sha256':hashlib.sha256(raw).hexdigest(),'inspection_dir':str(pathlib.Path(findings_path).parent),'findings':[f],'adjudicator':None,'diagram_intake':True}
 if status!='published':e.update(status='pending-native-ownership-review',followup_pending=True,native_ownership_review_required=True)
 q['entries'].append(e);by[id]=e;save();print('CLAIMED' if status=='published' else 'ARCHIVED-OWNER-REVIEW',group,id)
print('total',len(q['entries']))
