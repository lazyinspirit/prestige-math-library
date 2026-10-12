from pathlib import Path
import json,re,hashlib,collections,difflib
r='physics-cm-qm-gr-79-2026-10-11';base=Path('physics/research');dest=base/f'{r}-resumed-orchestration/gate-qm-dynamics-contract-repair/old41-proposal';dest.mkdir(exist_ok=True);(dest/'before').mkdir(exist_ok=True);(dest/'proposed').mkdir(exist_ok=True)
ids=['thm-nrqm-fock-and-equilibrium-fixed-mode-number-law','ex-nrqm-fock-and-equilibrium-entropy-divergence-example'];hash=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();sources=[]
for id in ids:
 p=Path('physics/items')/(id+'.md');before=p.read_text();after=before
 if id.startswith('thm-'):
  assert after.count(r'\overline z w')==1 and after.count(r'\overline zw')==2
  after=after.replace(r'\overline z w',r'z\overline w').replace(r'\overline zw',r'z\overline w')
  assert after.count(r'\sum_n\overline{(z^n)}w^n/n!')==1
  after=after.replace(r'\sum_n\overline{(z^n)}w^n/n!',r'\sum_n z^n\overline{w^n}/n!')
  assert after.count(r'A_-(1)e_m=\sqrt{m+1}e_{m-1}')==1
  after=after.replace(r'A_-(1)e_m=\sqrt{m+1}e_{m-1}',r'A_-(1)e_m=\sqrt m\,e_{m-1}')
 else:
  anchor='$w_n\\log(1/w_n)$;';assert after.count(anchor)==1
  after=after.replace(anchor,anchor+' for a zero weight, both expressions $-w_n\\log w_n$ and $w_n\\log(1/w_n)$ are defined to have value $0$. Thus the two zero weights at $n=0,1$ contribute $0$ rather than requiring a logarithm or reciprocal at zero;')
 (dest/'before'/(id+'.md')).write_text(before);(dest/'proposed'/(id+'.md')).write_text(after);(dest/(id+'.patch')).write_text(''.join(difflib.unified_diff(before.splitlines(True),after.splitlines(True),fromfile='items/'+id+'.md',tofile='items/'+id+'.md')))
 sources.append({'id':id,'current_file':'items/'+id+'.md','current_raw_sha256':hash(p),'proposed_file':str((dest/'proposed'/(id+'.md')).relative_to(Path('physics'))),'proposed_raw_sha256':hash(dest/'proposed'/(id+'.md')),'interface_change':True,'live_source_written':False})
# Inherited old graph plus all current carrier and manifest declarations and current body links.
graph_file=base/f'{r}-resumed-orchestration/spectral-lead/graph-current-old-alias.json';old=json.loads(graph_file.read_text());nodes=old['nodes'];aliases=old['aliases'];owners={}
def values(front,key):
 m=re.search(r'^'+re.escape(key)+r':\s*\[([^\n]*)\]',front,re.M)
 return [x.strip().strip('"\'') for x in m.group(1).split(',') if x.strip()] if m else []
for p in Path('physics/items').glob('*.md'):
 text=p.read_text();parts=text.split('---',2)
 if len(parts)!=3:continue
 front,body=parts[1:];id=p.stem
 for a in values(front,'aliases'):aliases[a]=id
 current=set(values(front,'deps')+values(front,'justified_by')+re.findall(r'\[\[([^]|]+)',body))
 prior=set(nodes.get(id,{}).get('edges',[]));nodes[id]={'path':'items/'+p.name,'raw_sha256':hash(p),'current_edges':sorted(current),'edges':sorted(current|prior)}
for p in base.glob(f'{r}-batch-*.pages.json'):
 b=int(re.search(r'batch-(\d+)',p.name)[1]);pages=json.loads(p.read_text())
 for page in pages:
  for item in page['items']:
   id=item['id'];owners[id]=b
   if id in nodes:nodes[id]['edges']=sorted(set(nodes[id]['edges'])|set(item.get('deps',[]))|set(item.get('justified_by',[])))
rev=collections.defaultdict(set)
for id,x in nodes.items():
 for edge in x['edges']:rev[aliases.get(edge,edge)].add(id)
cones={}
for source in ids:
 q=collections.deque([source]);seen={source};routes={source:[source]}
 while q:
  a=q.popleft()
  for b in sorted(rev[a]):
   if b not in seen:seen.add(b);q.append(b);routes[b]=routes[a]+[b]
 cones[source]=[{'id':id,'batch':owners.get(id),'route':routes[id],'direct':len(routes[id])==2,'raw_sha256':nodes[id].get('raw_sha256'),'current_direct_source_use':source in {aliases.get(x,x) for x in nodes[id].get('current_edges',[])}} for id in sorted(seen-{source})]
# Find prior exact subject history records, not inventory mentions.
history=[]
for p in base.rglob('*.json'):
 if not (p.name.startswith(r) or r in str(p)):continue
 if not re.search(r'(repair|review|receipt|history|escalation|frozen|closure)',p.name):continue
 if 'gate-qm-dynamics-contract-repair' in str(p):continue
 try:d=json.loads(p.read_text())
 except Exception:continue
 matches=[]
 def walk(x,path='$'):
  if isinstance(x,dict):
   subject=str(x.get('subject',x.get('id',x.get('item',''))))
   if any(subject==id or subject.startswith(id+'#') for id in ids) and any(k in x for k in ['cycle','repair_cycle','repairCycle','cycles','maximum_cycles','max_repair_cycles','maxRepairCycles']):matches.append({'json_path':path,'record':x})
   for k,v in x.items():walk(v,path+'.'+k)
  elif isinstance(x,list):
   for i,v in enumerate(x):walk(v,path+'['+str(i)+']')
 walk(d)
 if matches:history.append({'file':str(p.relative_to(Path('physics'))),'raw_sha256':hash(p),'matches':matches})
proof_contracts=[]
for p in base.glob(f'{r}-batch-*.proof-contracts.json'):
 d=json.loads(p.read_text())
 for id,c in d['contracts'].items():
  for citation in c.get('citations',[]):
   if citation['source'] in ids:proof_contracts.append({'file':str(p.relative_to(Path('physics'))),'consumer':id,'supplier':citation['source'],'fact':citation['fact'],'uses':citation['uses'],'quote_refresh_required':citation['source']==ids[0]})
receipts=[base/f'{r}-crash-recovery/batch41-focused-interface-review/repair.json',base/f'{r}-resumed-orchestration/quantum-recovery/source41-dyson-repair/repair.json',base/f'{r}-resumed-orchestration/quantum-recovery/batch64-repair/source41-dyson-history-only.json']
proposal={'version':1,'run':r,'reviewer':'/root/gate_contract_qm_dynamics','status':'guarded-unapplied-owner-decision-required','requested_authority':'One explicit owner disposition preserving actual old41 subject caps; do not silently spend/reset/refund a mathematics cycle.','sources':sources,'consumer_cones':cones,'union_consumer_count':len({x['id'] for rows in cones.values() for x in rows}),'old_graph':{'file':str(graph_file.relative_to(Path('physics'))),'raw_sha256':hash(graph_file)},'history_receipts':[{'file':str(p.relative_to(Path('physics'))),'raw_sha256':hash(p)} for p in receipts],'exact_subject_cycle_records':history,'history_interpretation':'No exhaustion inferred from batch41 inventory membership. Exact native frozen/cap receipts await root location; this proposal does not authorize a new cycle.','consumer_contract_citations':proof_contracts,'metadata_followup':'If owner authorizes: mirror changed source derivations and entropy zero boundary in contract41; refresh all exact supplier Statement citation quotes and source contract consumers. Manifest41 statement strings for these two carriers are blank. Native readiness/controller inputs are root-owned; no writes here.','scope_preservation':'Preserve normalized coherent vectors, full ladder identities, Poisson number probabilities, all positive weight entropy divergence and entire countable normalized distribution. Change only overlap conjugation, lowering proof typo and explicit zero entropy-term definition.','local_checks':'Draft artifacts only; no native acceptance/readiness/gate or completed consumer audit claimed.'}
(dest/'proposal.json').write_text(json.dumps(proposal,indent=2)+'\n');print(json.dumps({'source_proposals':len(sources),'consumer_counts':{id:len(v) for id,v in cones.items()},'union':proposal['union_consumer_count'],'exact_cycle_record_files':len(history),'contract_citations':len(proof_contracts)},indent=2))
