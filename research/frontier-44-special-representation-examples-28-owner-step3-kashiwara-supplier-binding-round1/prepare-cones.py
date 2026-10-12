import pathlib,json,yaml,hashlib,collections,re,datetime
R='frontier-44-special-representation-examples-28';D=pathlib.Path('research/'+R+'-owner-step3-kashiwara-supplier-binding-round1');packet=json.loads((D/'guarded-successor-packet.json').read_text());candidate={x['id']:x['candidate_path'] for x in packet['candidates']};rows={};loader=getattr(yaml,'CSafeLoader',yaml.SafeLoader)
for p in pathlib.Path('items').glob('*.md'):
 raw=p.read_bytes();t=raw.decode();parts=t.split('---',2)
 try:f=yaml.load(parts[1],Loader=loader) if len(parts)>2 else None
 except:continue
 if not isinstance(f,dict) or not f.get('id'):continue
 i=f['id'];rows[i]={'id':i,'canonical_path':str(p),'canonical_raw_sha256':hashlib.sha256(raw).hexdigest(),'status':f.get('status'),'deps':f.get('deps',[]) or [],'justified_by':f.get('justified_by',[]) or [],'citations':re.findall(r'\[\[([^\]|]+)',parts[2]),'body':parts[2]}
for p in pathlib.Path('research').glob(R+'-batch-*.pages.json'):
 for page in json.loads(p.read_text()):
  for item in page.get('items',[]):
   row=rows.setdefault(item['id'],{'id':item['id'],'canonical_path':None,'canonical_raw_sha256':None,'status':'unavailable','deps':[],'justified_by':[],'citations':[],'body':None});row['scaffold']={'path':str(p),'raw_sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'page':page['id'],'deps':item.get('deps',[]),'statement':item.get('statement'),'strategy':item.get('strategy')}
rev=collections.defaultdict(set)
for i,row in rows.items():
 for s in set(row['deps']+row['justified_by']+row['citations']+row.get('scaffold',{}).get('deps',[])):rev[s].add(i)
cones=[]
for root in packet['changed_interfaces']:
 seen={root};queue=[root];levels={root:0};parents=collections.defaultdict(set)
 while queue:
  p=queue.pop(0)
  for c in sorted(rev[p]):
   if c==p:continue
   parents[c].add(p)
   if c not in seen:seen.add(c);levels[c]=levels[p]+1;queue.append(c)
 members=[]
 for i in sorted(seen-{root},key=lambda i:(levels[i],i)):
  x=rows[i];direct=i in rev[root];body=x['body'];uses=[p for p in (body or '').split('\n\n') if '[['+root in p]
  rec={k:v for k,v in x.items() if k!='body'};rec['direct']=direct;rec['distance']=levels[i];rec['via']=sorted(parents[i]);rec['literal_direct_uses']=uses;rec['proposed_successor']=candidate.get(i)
  if direct and body:
   rec['focused_changed_clause_disposition']='Current actual use concerns unchanged finite-module shifts, endpoint/naturality or separately sourced negative-half tilde operators; no identification with e_i prime/e_i double-prime used' if root=='def-kashiwara-crystal-operators' else 'Current actual use concerns unchanged specialized Cartan operators/positive toral quotient or fibre comparison; no use treating q_i-q_i inverse difference as R unit'
   rec['consumer_interface_repair_from_this_change_required']=False
  else:rec['focused_changed_clause_disposition']='Indirect potential consumer retained; branch stops only after actual direct predecessor interface remains unchanged on stable final carriers' if body else 'Canonical unavailable; scaffold context only, final actual binding pending'
  rec['final_stable_closure']=False;members.append(rec)
 cones.append({'changed_supplier':root,'reviewer':'/root/repair_step3_kashiwara_supplier_binding','direct_count':len(rev[root]-{root}),'total_candidate_count':len(members),'canonical_present_count':sum(x['canonical_path'] is not None for x in members),'consumers':members})
receipts=[]
for p in pathlib.Path('research/'+R+'-dispatch').glob('*.attempt-1.result.json'):
 if any(s in p.name for s in ['kashiwara-operators-and-crystal-lattices-12814dbe905d8ec8','tensor-product-crystals-and-highest-weight-crystal-uniqueness-b42afe089c06711f','balanced-triples-and-global-crystal-bases-f54d3eb3554af735','quantum-affine-type-a-and-level-one-fock-space']):
  j=json.loads(p.read_text());receipts.append({'path':str(p),'raw_sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'label':j.get('label'),'started_at':j.get('started_at'),'ended_at':j.get('ended_at'),'ok':j.get('ok'),'exit_code':j.get('exit_code')})
obj={'version':1,'run':R,'round':1,'recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'reviewer':'/root/repair_step3_kashiwara_supplier_binding','same_first_unapplied_pass':True,'changed_interface_cones':cones,'actual_terminal_result_drain_evidence':receipts,'native5_writer_state':'Root verified actual native5 author PID still live; no canonical/native5 edit allowed','root_pid_verification_at':'2026-10-10T12:09 per root assignment; not an independent PID check by this reviewer','statement_definition_consumer_ownership':'Same reviewer retains every actual affected direct/indirect use. Current unchanged direct-use dispositions are candidate-level focused checks, not final stable acceptance or whole-item audits.','final_binding_required_after_native5_drain':True}
(D/'successor-interface-cones-and-terminal-drain.json').write_text(json.dumps(obj,indent=2)+'\n');print([(c['changed_supplier'],c['direct_count'],c['total_candidate_count'],c['canonical_present_count']) for c in cones]);print('actual terminal receipts',len(receipts))
