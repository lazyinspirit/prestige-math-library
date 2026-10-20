#!/usr/bin/env python3
"""Root-only guarded integration. Prepared but not executed by the delegate.
Usage: python3 research/machine-learning-all-101-2026-10-19-sde-rtdp-root-integration/apply.py --apply
All canonical inputs/proposed bytes and absent new paths are validated before any archive/write.
The track/spec whole-file digests are observations, not authority to overwrite foreign stanzas.
"""
import pathlib,json,hashlib,sys,os,datetime,copy,re,tempfile
if sys.argv[1:] != ['--apply']:
 raise SystemExit('No mutation performed. Root must explicitly invoke --apply after reviewing the manifest.')
ROOT=pathlib.Path(__file__).resolve().parents[2]
R='machine-learning-all-101-2026-10-19';BASE=pathlib.Path(__file__).resolve().parent
MANIFEST=BASE/'integration-manifest.json'
def digest(x):return hashlib.sha256(x).hexdigest()
m=json.loads(MANIFEST.read_text())
for report_path,expected in m['report_bindings'].items():
 assert digest((ROOT/report_path).read_bytes())==expected,f'Repair report changed: {report_path}'
state=json.loads((ROOT/f'.autopilot/{R}/state.json').read_text())
authors=[row for key,row in state['dispatches'].items() if key.startswith('1-scaffold:batch-')]
assert len(authors)==101 and all(row.get('endedAt') and row.get('lastExitOk') is True for row in authors),'All101nativeauthors must remain terminal-success before integration'
def regular(p):
 assert p.is_file() and not p.is_symlink(),f'Expected regular nonsymlink input: {p}'
def read(p):regular(p);return p.read_bytes()
def parsed(x):return json.loads(x.decode())
def require_same_except(old,new,keys):
 a=copy.deepcopy(old);b=copy.deepcopy(new)
 for key in keys:a.pop(key,None);b.pop(key,None)
 assert a==b,'Unowned JSON fields changed'
def apply_pointer(d,pointer,value):
 keys=pointer.strip('/').split('/');at=d
 for key in keys[:-1]:at=at[int(key)] if isinstance(at,list) else at[key]
 key=keys[-1]
 if isinstance(at,list):at[int(key)]=value
 else:at[key]=value
# Validate every JSON change by owned row identity, in addition to complete raw guards.
def validate_json(path,old,new):
 name=path.name
 if name.endswith('batch-67.proof-contracts.json'):
  e=copy.deepcopy(old)
  report=json.loads((ROOT/f'research/{R}-reverse-sde-choice-repair.json').read_text())
  for op in report['quote_operations']:
   ptr=op['pointer'];keys=ptr.strip('/').split('/');at=e
   for key in keys:at=at[int(key)] if isinstance(at,list) else at[key]
   assert at==op['expected'];apply_pointer(e,ptr,op['replacement'])
  assert e==new
 elif name.endswith('batch-68.cross-batch-dependencies.json'):
  e=copy.deepcopy(old);report=json.loads((ROOT/f'research/{R}-reverse-sde-choice-repair.json').read_text())
  for op in report['cross_batch_row_operations']:
   a=op['expected_row'];matches=[i for i,row in enumerate(e) if all(row.get(k)==a.get(k) for k in ['kind','consumer','supplier'])]
   assert len(matches)==1 and e[matches[0]]==a;e[matches[0]]=op['replacement_row']
  assert e==new
 elif name.endswith('batch-86.proof-contracts.json'):
  assert new['scope']==old['scope']+['thm-rtdp-recurrently-backed-state-convergence']
  require_same_except(old,new,['scope','contracts']);a=copy.deepcopy(old['contracts']);b=copy.deepcopy(new['contracts']);assert 'thm-rtdp-recurrently-backed-state-convergence' not in a;b.pop('thm-rtdp-recurrently-backed-state-convergence')
  target='cex-rtdp-optimal-relevant-state-convergence-fails';require_same_except(a[target],b[target],['citations','derivations']);a.pop(target);b.pop(target);assert a==b
 elif name.endswith('batch-86.pages.json'):
  assert len(old)==len(new)==2;e=copy.deepcopy(old);assert len(new[0]['items'])==len(old[0]['items'])+1
  row=new[0]['items'][-1];assert row['id']=='thm-rtdp-recurrently-backed-state-convergence' and row['dependency_level']==3 and row['kind']=='theorem';e[0]['items'].append(row)
  c=next(x for x in e[0]['items'] if x['id']=='cex-rtdp-optimal-relevant-state-convergence-fails');assert c['deps'].count('thm-finite-stochastic-shortest-path-value-exists')==1;c['deps'].remove('thm-finite-stochastic-shortest-path-value-exists');assert e==new
 elif name.endswith('batch-86.coverage.json'):
  e=copy.deepcopy(new);src=next(s for p in e['pages'] for s in p['sources'] if 'barto-etal' in s['url']);row=src['contents'].pop();assert row['item']=='thm-rtdp-recurrently-backed-state-convergence';assert e==old
 elif name.endswith('batch-86.dependency-inputs.json'):
  e=copy.deepcopy(old);key='thm-rtdp-recurrently-backed-state-convergence';assert key not in e['item_dependency_levels'];e['item_dependency_levels'][key]=3;assert e==new
 elif name.endswith('batch-86.source-evidence.json'):
  e=copy.deepcopy(old);report=json.loads((ROOT/f'research/{R}-rtdp-repair.json').read_text())
  for op in report['metadata_row_operations']:
   if op['file']!=str(path.relative_to(ROOT)):continue
   if 'pointer' in op:
    idx=int(op['pointer'].split('/')[-1]);assert e['item_reading'][idx]==op['expected'];e['item_reading'][idx]=op['replacement']
   else:
    assert not any(x['id']==op['require_absent_id'] for x in e['item_reading']);e['item_reading'].append(op['replacement_row'])
  assert e==new
 else:raise AssertionError(f'Unrecognized owned JSON path {path}')
# Snapshot and prevalidate every proposed and actual canonical carrier first.
prepared=[]
for prop in m['proposals']:
 path=ROOT/prop['path'];assert prop['path'].startswith(('items/','library/','research/')) and not prop['path'].startswith('research/'+R+'-dispatch/')
 proposed=read(ROOT/prop['proposed']);assert digest(proposed)==prop['proposed_raw_sha256'],prop['path']
 if prop['require_absent']:
  assert not path.exists() and not path.is_symlink(),f'New path exists: {path}';before=None
 else:
  before=read(path);assert digest(before)==prop['before_raw_sha256'],f'Current raw CAS failed: {path}'
  if path.suffix=='.json':validate_json(path,parsed(before),parsed(proposed))
 prepared.append((path,before,proposed))
# Lexical field replacement preserves every byte outside these exact owned description values.
decoder=json.JSONDecoder()
def description_span(text,page):
 matches=list(re.finditer(r'"id"\s*:\s*'+re.escape(json.dumps(page)),text));assert len(matches)==1,f'Unique canonical page id: {page}'
 start=text.rfind('{',0,matches[0].start());obj,end=decoder.raw_decode(text,start);assert obj.get('id')==page
 i=start+1
 while True:
  while text[i].isspace() or text[i]==',':i+=1
  if text[i]=='}':break
  key,kend=decoder.raw_decode(text,i);assert isinstance(key,str);i=kend
  while text[i].isspace():i+=1
  assert text[i]==':';i+=1
  while text[i].isspace():i+=1
  value_start=i;value,value_end=decoder.raw_decode(text,i)
  if key=='description':assert isinstance(value,str);return value_start,value_end,value
  i=value_end
 raise AssertionError(f'Missing description for {page}')
track_path=ROOT/'research/plan-machine-learning-track.md';spec_path=ROOT/'research/plan-spec.json'
track_before=read(track_path);spec_before=read(spec_path);track=track_before.decode();spec=spec_before.decode()
for op in m['plan_operations']:
 assert track.count(op['old'])==1,f'Unique track substring CAS failed: {op["section"]}'
 track=track.replace(op['old'],op['replacement'],1)
 start,end,desc=description_span(spec,op['page']);assert desc.count(op['old'])==1,f'Canonical description substring CAS failed: {op["page"]}'
 changed=desc.replace(op['old'],op['replacement'],1)
 # Replace only the owned field's JSON string, preserving all foreign bytes/stanzas.
 spec=spec[:start]+json.dumps(changed,ensure_ascii=False)+spec[end:]
# Reparse and prove that every non-description field, every foreign page and every digest-prefix control is unchanged.
old_spec=parsed(spec_before);new_spec=json.loads(spec)
def revert_owned_descriptions(value):
 if isinstance(value,dict):
  result={k:revert_owned_descriptions(v) for k,v in value.items()}
  if result.get('id') in {op['page'] for op in m['plan_operations']} and isinstance(result.get('description'),str):
   for op in reversed(m['plan_operations']):
    if op['page']==result['id']:
     assert result['description'].count(op['replacement'])==1;result['description']=result['description'].replace(op['replacement'],op['old'],1)
  return result
 if isinstance(value,list):return [revert_owned_descriptions(x) for x in value]
 return value
assert revert_owned_descriptions(new_spec)==old_spec
prepared.extend([(track_path,track_before,track.encode()),(spec_path,spec_before,spec.encode())])
# ALL validation is complete before the first archive. Archive exact current preimages, then CAS again before writes.
stamp=datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%fZ');archive=BASE/f'root-apply-{stamp}';assert not archive.exists();archive.mkdir()
receipt={'version':1,'run':R,'kind':'root-guarded-sde-rtdp-source-integration','recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'native_coverage_adopted':False,'planning_digest_controls_refreshed':False,'files':[]}
for path,before,after in prepared:
 rel=path.relative_to(ROOT)
 if before is not None:
  out=archive/'before'/rel;out.parent.mkdir(parents=True,exist_ok=True);out.write_bytes(before)
 receipt['files'].append({'path':str(rel),'before_raw_sha256':digest(before) if before is not None else None,'after_raw_sha256':digest(after),'before_file':str((archive/'before'/rel).relative_to(ROOT)) if before is not None else None})
for path,before,after in prepared:
 if before is None:assert not path.exists() and not path.is_symlink(),f'Absent guard moved: {path}'
 else:assert read(path)==before,f'Last-moment CAS failed: {path}'
# Write only after the complete preflight/archive/CAS passes. No engine, ready, digest or gate controls are touched.
for path,before,after in prepared:
 path.parent.mkdir(parents=True,exist_ok=True)
 fd,tmp=tempfile.mkstemp(prefix='.'+path.name+'.owner-',dir=path.parent)
 try:
  with os.fdopen(fd,'wb') as f:f.write(after);f.flush();os.fsync(f.fileno())
  if before is None:assert not path.exists() and not path.is_symlink()
  else:assert read(path)==before
  os.replace(tmp,path)
 finally:
  if os.path.exists(tmp):os.unlink(tmp)
for row in receipt['files']:assert digest(read(ROOT/row['path']))==row['after_raw_sha256']
(archive/'receipt.json').write_text(json.dumps(receipt,indent=2)+'\n')
print(json.dumps({'integrated_files':len(prepared),'receipt':str((archive/'receipt.json').relative_to(ROOT)),'remaining':'Root111digestcontrols/driftbindings/currenthashes/ready/recertification and actual current scoped checks/gates remain.'},indent=2))
