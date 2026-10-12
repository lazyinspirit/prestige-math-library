import json,pathlib,hashlib,datetime
B=pathlib.Path('research/frontier-44-special-representation-examples-28-owner-greeting-recovery-20261011');O=B/'restored-partitions-11-15'
def read(p): return json.loads(pathlib.Path(p).read_text())
def sha(p):return hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
def at(v,p):
 for x in p.split('/')[1:]:v=v[int(x)] if isinstance(v,list) else v[x.replace('~1','/').replace('~0','~')]
 return v
packet={'version':1,'run':'frontier-44-special-representation-examples-28','owner':'/root/restore_boundary_11_15','recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'source_operations':[],'json_operations':[],'seals':[],'coverage':[],'holds':[],'actual_afterbinding_performed':False}
audit={'seal_checks':[],'operation_checks':[],'item_guards':[],'consumer_guards':[]}
for n in range(11,16):
 inv=read(B/f'boundary-template-inventory/partition-{n}.json');d=B/f'boundary-template-partition-{n}'
 files=[d/'proposal.json'];ops=read(files[0])['operations'];seal=d/'SEALED-PROPOSAL.json'
 if n==11:
  files+=[d/'iff-two-row-successor.json'];rep={(x['path'],x['pointer']):x for x in read(files[-1])['operations']};ops=[rep.get((x['path'],x['pointer']),x) for x in ops];seal=d/'SEALED-IFF-TWO-ROW-SUCCESSOR.json'
 if n==13:
  files=[d/'repaired-source/final-partition13-row-operations.json'];ops=read(files[0])['operations'];seal=d/'repaired-source/FINAL-SEALED.json'
 packet['seals'].append({'partition':str(n),'path':str(seal),'raw_sha256':sha(seal),'authoritative_operations':[{'path':str(f),'raw_sha256':sha(f)} for f in files]})
 # Verify direct sealed file hashes without implying nested history acceptance.
 for k,v in read(seal).items():
  if isinstance(v,dict) and 'path' in v and 'raw_sha256' in v:
   audit['seal_checks'].append({'seal':str(seal),'path':v['path'],'expected':v['raw_sha256'],'current':sha(v['path']),'pass':sha(v['path'])==v['raw_sha256']})
 expected={(r['id'],r['case']) for i in inv['items'] for r in i['rows']};actual={(r['id'],r['case']) for r in ops}
 packet['coverage'].append({'partition':str(n),'assigned_items':inv['counts']['items'],'assigned_rows':len(expected),'operations':len(ops),'exact_case_coverage':expected==actual,'missing':sorted(expected-actual),'extra':sorted(actual-expected)})
 for item in inv['items']:
  audit['item_guards'].append({'partition':str(n),'id':item['id'],'path':item['current_item_path'],'expected_raw_sha256':item['current_item_raw_sha256'],'current_raw_sha256':sha(item['current_item_path']),'pass':sha(item['current_item_path'])==item['current_item_raw_sha256']})
 for op in ops:
  before=op.get('before_row',op.get('before'));after=op.get('after_row',op.get('after'));origin=str(files[-1] if n==11 and (op['path'],op['pointer']) in rep else files[0]);packet['json_operations'].append({'path':op['path'],'pointer':op['pointer'],'before':before,'after':after,'before_file_raw_sha256':op['contract_raw_sha256'],'proposal_origin':origin,'id':op['id'],'case':op['case'],'partition':str(n)})
# Source repair's non-row interfaces and extra authorized rows.
srcpath=B/'boundary-template-partition-13/repaired-source/guarded-source-and-contract-repair.json';src=read(srcpath)
for x in src['source_operations']:
 packet['source_operations'].append({k:x[k] for k in ['path','before_raw_sha256','after_path','after_raw_sha256']})
for k in ['contract_operations','manifest_operations']:
 for x in src[k]:packet['json_operations'].append({'path':x['path'],'pointer':x['pointer'],'before':x['before_value'],'after':x['after_value'],'before_file_raw_sha256':x.get('contract_raw_sha256',x.get('manifest_raw_sha256')),'proposal_origin':str(srcpath),'partition':'13','kind':k})
extra=B/'boundary-template-partition-13/repaired-source/additional-source-boundary-operations.json'
for x in read(extra)['operations']:packet['json_operations'].append({'path':x['path'],'pointer':x['pointer'],'before':x['before_row'],'after':x['after_row'],'before_file_raw_sha256':x['contract_raw_sha256'],'proposal_origin':str(extra),'id':x['id'],'case':x['case'],'partition':'13','kind':'additional_authorized_source_case'})
for x in packet['json_operations']:
 raw=sha(x['path']);value=at(read(x['path']),x['pointer']);audit['operation_checks'].append({'path':x['path'],'pointer':x['pointer'],'file_guard_pass':raw==x['before_file_raw_sha256'],'current_raw_sha256':raw,'row_guard_pass':value==x['before'],'already_after':value==x['after']})
for x in src['consumer_checks']:
 audit['consumer_guards'].append({'id':x['id'],'distance':x['distance'],'expected_raw_sha256':x['current_raw_sha256'],'current_raw_sha256':sha('items/'+x['id']+'.md'),'pass':sha('items/'+x['id']+'.md')==x['current_raw_sha256']})
for x in packet['source_operations']:
 x['before_guard_pass']=sha(x['path'])==x['before_raw_sha256'];x['after_guard_pass']=sha(x['after_path'])==x['after_raw_sha256']
for name,obj in [('integration-packet.json',packet),('current-raw-guards.json',audit)]: (O/name).write_text(json.dumps(obj,indent=2)+'\n')
print('JSON operations',len(packet['json_operations']),'source operations',len(packet['source_operations']),'coverage',packet['coverage'])
for kind,rows in audit.items():print(kind,len(rows),'failures',sum(not (r.get('pass',True) and r.get('file_guard_pass',True) and r.get('row_guard_pass',True)) for r in rows))
