import json,pathlib,os,sys,yaml,re,hashlib
p=pathlib.Path(__file__).with_name('queue.json');q=json.loads(p.read_text());done=[];changed=[]
for e in q['entries']:
 if e.get('followup_pending'):
  e['status']='adjudicating' if e.get('adjudicator') else 'pending-adjudication';continue
 r=p.parent/'adjudications'/(e['id']+'.json')
 if r.exists():
  d=json.loads(r.read_text());assert d['id']==e['id'];assert sorted(set(f['original_finding_index'] for f in d['findings'] if f['original_finding_index'] is not None))==list(range(len(e['findings'])))
  before=pathlib.Path(e['before_file']).read_text();current=pathlib.Path(e['source']).read_text()
  comparison=before
  try:bf=yaml.safe_load(comparison.split('---',2)[1])
  except yaml.YAMLError:
   # Root explicitly approves only these exact malformed historical preimages.
   approval_path=p.parent/'frontmatter-recoveries'/(e['id']+'.json')
   approval=json.loads(approval_path.read_text())
   assert approval.get('approved') is True and approval.get('approved_by')=='/root',e['id']+' missing root recovery approval'
   assert (approval['id'],approval['group'],approval['run'])==(e['id'],e['group'],q['run']),e['id']+' wrong recovery ownership'
   digest=lambda value:hashlib.sha256(value.encode()).hexdigest()
   assert digest(before)==e['before_raw_sha256']==approval['before_raw_sha256'],e['id']+' wrong malformed preimage'
   if approval['operation']=='drop-only-dangling-judge-block-after-proof-strategy':
    block=approval['exact_removed_block'];assert before.count(block)==1 and digest(block)==approval['removed_block_sha256']
    comparison=before.replace(block,'',1)
   elif approval['operation']=='drop-only-dangling-judge-block-after-axiom-use':
    block=approval['exact_removed_block']
    assert before.count(approval['exact_scalar_line']+'\n'+block)==1 and digest(block)==approval['removed_block_sha256']
    comparison=before.replace(block,'',1)
    assert yaml.safe_load(comparison.split('---',2)[1])['axiom_use']==approval['axiom_use_preserved']
   elif approval['operation']=='normalize-concatenated-directverification-empty':
    assert approval['exact_before_fragment']=='verification: {}\nproof_strategy: directverification: {}'
    assert approval['exact_after_fragment']=='verification: {}\nproof_strategy: direct'
    assert before.count(approval['exact_before_fragment'])==1
    comparison=before.replace(approval['exact_before_fragment'],approval['exact_after_fragment'],1)
   else:raise AssertionError(e['id']+' unapproved recovery operation')
   assert digest(comparison)==approval['comparison_raw_sha256'] and pathlib.Path(approval['comparison_only_source']).read_text()==comparison,e['id']+' recovery comparison drift'
   assert comparison.split('---',2)[2]==before.split('---',2)[2],e['id']+' recovery changed body'
   assert re.findall(r'^status:.*$',comparison,re.M)==re.findall(r'^status:.*$',before,re.M),e['id']+' recovery changed publication status'
   bf=yaml.safe_load(comparison.split('---',2)[1]);assert bf.get('proof_strategy')=='direct'
  cf=yaml.safe_load(current.split('---',2)[1])
  assert re.findall(r'^status:.*$',before,re.M)==re.findall(r'^status:.*$',current,re.M),e['id']+' status line byte change'
  diagram=lambda t:re.findall(r'^```(?:tikz|tikzcd)[^\n]*\n.*?^```[ \t]*$',t,re.M|re.S)
  if diagram(before)!=diagram(current) or any(f.get('defect_type')=='questionable-tikz-mathematics' and f.get('verdict')=='confirmed' for f in d['findings']):
   assert isinstance(d.get('diagram_math_checks'),list) and d['diagram_math_checks'] and d.get('proof_independent') is True,e['id']+' missing genuine diagram handoff fields'
  for x in ['title','verification']:bf.pop(x,None);cf.pop(x,None)
  if e.get('authorized_dependency_addition'):
   # Root's explicit, carrier-specific mathematical correction authorization.
   added=e['authorized_dependency_addition'];old=bf.get('deps',[]);new=cf.get('deps',[])
   assert new==old+[added] or (added in old and new==old),e['id']+' unexpected dependency change'
   bf.pop('deps',None);cf.pop('deps',None)
  assert bf==cf,e['id']+' unauthorized metadata changed'
  ready_refresh=e.get('continuation_status')=='adjudicated-ready-for-receipt-refresh' and not e.get('continuation_pending')
  e.update(status='ready-for-receipt-refresh' if ready_refresh else 'adjudicated',adjudicator=d['agent'],adjudication_file=str(r),changed=d['changed']);done.append(e['group'])
  if d['changed']:changed.append(e['id'])
 elif e['group'] in sys.argv[1:]:e.update(status='adjudicating',adjudicator='/root/rendering_repair_coordinator/'+e['group'])
p.with_suffix('.tmp').write_text(json.dumps(q,indent=2)+'\n');os.replace(p.with_suffix('.tmp'),p)
print(json.dumps({'adjudicated':len(done),'changed':len(changed),'active':[e['group'] for e in q['entries'] if e['status']=='adjudicating']}))
