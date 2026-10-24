import json,hashlib,pathlib,subprocess,os,sys,yaml
category,findings_path,prefix=sys.argv[1:4]
base=pathlib.Path(__file__).resolve().parent.relative_to(pathlib.Path.cwd());p=base/'queue.json';q=json.loads(p.read_text());fs=json.load(open(findings_path));groups={}
for f in fs:groups.setdefault(f['id'],[]).append(f)
for n,(id,findings) in enumerate(groups.items(),1):
 existing=next((e for e in q['entries'] if e['id']==id),None)
 if existing:
  # Existing owner must independently receive added findings; don't silently merge active work.
  raise RuntimeError('Duplicate existing item requires coordinator routing: '+id)
 src=pathlib.Path('items')/(id+'.md');raw=src.read_bytes();before=base/'before'/(id+'.md')
 if before.exists():assert before.read_bytes()==raw
 else:before.write_bytes(raw)
 group=f'{prefix}_{n:03}'
 approval=None
 try:publication_status=yaml.safe_load(raw.decode().split('---',2)[1]).get('status')
 except yaml.YAMLError:
  approval_path=base/'frontmatter-recoveries'/(id+'.json')
  approval=json.loads(approval_path.read_text())
  assert approval.get('approved') is True and approval.get('approved_by')=='/root'
  assert approval['id']==id and approval['run']==q['run'] and approval['before_raw_sha256']==hashlib.sha256(raw).hexdigest()
  if approval['operation']=='drop-only-dangling-judge-block-after-proof-strategy':
   assert raw.decode().count(approval['exact_removed_block'])==1
   recovered=raw.decode().replace(approval['exact_removed_block'],'',1)
  elif approval['operation']=='drop-only-dangling-judge-block-after-axiom-use':
   assert raw.decode().count(approval['exact_scalar_line']+'\n'+approval['exact_removed_block'])==1
   assert hashlib.sha256(approval['exact_removed_block'].encode()).hexdigest()==approval['removed_block_sha256']
   recovered=raw.decode().replace(approval['exact_removed_block'],'',1)
   assert yaml.safe_load(recovered.split('---',2)[1])['axiom_use']==approval['axiom_use_preserved']
  elif approval['operation']=='normalize-concatenated-directverification-empty':
   assert approval['exact_before_fragment']=='verification: {}\nproof_strategy: directverification: {}'
   assert approval['exact_after_fragment']=='verification: {}\nproof_strategy: direct'
   assert raw.decode().count(approval['exact_before_fragment'])==1
   recovered=raw.decode().replace(approval['exact_before_fragment'],approval['exact_after_fragment'],1)
  else:raise AssertionError('Unapproved recovery operation '+approval['operation'])
  assert hashlib.sha256(recovered.encode()).hexdigest()==approval['comparison_raw_sha256']
  assert pathlib.Path(approval['comparison_only_source']).read_text()==recovered
  publication_status=yaml.safe_load(recovered.split('---',2)[1]).get('status')
  assert publication_status=='published' and approval['status_line_preserved']=='status: published'
  group=approval['group']
 if publication_status=='published':
  r=subprocess.run(['node','tools/published-repairs.mjs','claim','--run',q['run'],'--id',id,'--group',group],capture_output=True,text=True)
  if r.returncode:raise RuntimeError(id+r.stdout+r.stderr)
 entry={'id':id,'category':category,'group':group,'status':'pending-adjudication','published':publication_status=='published','source':str(src),'before_file':str(before),'before_raw_sha256':hashlib.sha256(raw).hexdigest(),'inspection_dir':str(pathlib.Path(findings_path).parent),'findings':findings,'adjudicator':None}
 if approval:entry['frontmatter_recovery_approval']=str(approval_path)
 if publication_status!='published':entry.update(status='pending-native-ownership-review',followup_pending=True,native_ownership_review_required=True)
 q['entries'].append(entry)
 p.with_suffix('.tmp').write_text(json.dumps(q,indent=2)+'\n');os.replace(p.with_suffix('.tmp'),p)
 print('CLAIMED',group,id)
print('total',len(q['entries']))
