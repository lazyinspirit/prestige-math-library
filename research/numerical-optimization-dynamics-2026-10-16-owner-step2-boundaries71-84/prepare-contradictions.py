from pathlib import Path
import json,runpy,copy,difflib,re
B=Path(__file__).resolve().parent;ROOT=B.parents[1];R='numerical-optimization-dynamics-2026-10-16';A=ROOT/f'research/{R}-owner-boundary-diagnostic-recovery-20261016T111149897777Z/partitions';D=runpy.run_path(str(B/'contradiction-decisions.py'))['D'];initial=json.loads((B/'initial-operations.json').read_text())['operations'];intent={(x['id'],x['case']):x['after']for x in initial};history=[]
for n in range(71,85):
 p=A/f'batch-{n}.json'
 if not p.exists():continue
 for c in json.loads(p.read_text())['candidates']:
  key=c['item'],c['case']
  if key not in intent:
   status,text=D[key];row={'case':c['case'],'status':status,('reason'if status=='not_applicable'else'evidence'):text}
   if status=='not_applicable':row['reviewed']={'upheld':True,'by':'num_remaining_triage','reason':text}
   intent[key]=row
  history.append({'candidate':c['candidate'],'item':c['item'],'case':c['case'],'batch':n,'source_reason':c['text'],'detector_reason':c['detector_reason'],'resolution':intent[key]})
ops=[];P=B/'packet-v2'
for n in range(71,85):
 rel=Path('research')/f'{R}-batch-{n}.proof-contracts.json';raw=(ROOT/rel).read_bytes();d=json.loads(raw);out=copy.deepcopy(d);changed=False
 for id,c in out['contracts'].items():
  for idx,row in enumerate(c['boundaries']):
   key=id,row['case']
   if key not in intent:continue
   old=copy.deepcopy(row);after=copy.deepcopy(row);after.pop('reason',None);after.pop('evidence',None);after.update(intent[key])
   phasefile=ROOT/f'research/{R}-owner-render-precheck-diagnostics-20261016T111118455346Z/phase-preservation-review.json'
   phases={x['path']:x['old_to_final_step_labels']for x in json.loads(phasefile.read_text())}
   stepmap=phases.get('items/'+id+'.md',{})
   def anchors(t):return re.sub(r'(?<![0-9.])(\d+\.\d+)(?![0-9.])',lambda m:stepmap.get(m[1],m[1]),t)
   for field in ['reason','evidence']:
    if field in after:after[field]=anchors(after[field])
   if 'reviewed'in after:after['reviewed']['reason']=anchors(after['reviewed']['reason'])
   c['boundaries'][idx]=after;ops.append({'batch':n,'id':id,'case':row['case'],'before':old,'after':after});changed=True
   source=Path('items')/(id+'.md');dest=P/'source-before'/source;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes((ROOT/source).read_bytes())
 if changed:
  for kind,content in [('before',raw),('proposed',(json.dumps(out,indent=2,ensure_ascii=False)+'\n').encode())]:
   dest=P/kind/rel;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_bytes(content)
  (P/f'batch-{n}.diff').write_text(''.join(difflib.unified_diff(raw.decode().splitlines(True),(json.dumps(out,indent=2,ensure_ascii=False)+'\n').splitlines(True),fromfile=str(rel),tofile=str(rel)+' (proposed)')))
(P/'operations.json').write_text(json.dumps({'canonical_writes':False,'operations':ops,'preservation':'Only named boundary rows differ. All original reports, quotes, smoke entries, derivations and source carriers preserved.'},indent=2)+'\n');(P/'native-candidate-dispositions.json').write_text(json.dumps(history,indent=2)+'\n');print(len(history),'nativeoccurrences',len(ops),'boundaryoperations')
