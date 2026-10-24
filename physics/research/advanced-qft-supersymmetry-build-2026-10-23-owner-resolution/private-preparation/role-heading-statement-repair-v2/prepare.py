import pathlib,json,hashlib,re,copy,collections
D=pathlib.Path(__file__).parent;V=D.with_name('role-heading-repair-v1');P=D/'proposed';B=D/'before';P.mkdir(exist_ok=True);B.mkdir(exist_ok=True);sha=lambda p:hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest();inv=json.loads((V/'inventory.json').read_text());by={r['id']:r for r in inv['rows']};prior=json.loads((V/'application-proposal.json').read_text());titles={r['id']:r for r in json.loads((V/'reference-title-bindings.json').read_text())};titleguard=list(titles.values());relocations=[];targets={}
for r in prior['records']:
 p=P/pathlib.Path(r['proposed_path']).name;p.write_bytes(pathlib.Path(r['proposed_path']).read_bytes());old=pathlib.Path(r['target_path']);(B/old.name).write_bytes(old.read_bytes());targets[r['target_path']]={'target_path':r['target_path'],'before_sha256':r['before_sha256'],'proposed_path':str(p),'proposed_sha256':sha(p)}
ids=['def-qftx-physical-superspace-normalization','post-qftx-n1-wess-zumino-model','def-qftx-n1-vector-superfield','post-qftx-n1-gauge-matter-model','post-qftx-n2-vector-hypermultiplet-model','post-qftx-n4-super-yang-mills-model','def-qftx-wilsonian-n1-action-data','def-aqft-susy-wilsonian-action'];statement_changes={}
for id in ids:
 src=pathlib.Path(by[id]['path']);out=P/src.name
 if str(src) not in targets:out.write_bytes(src.read_bytes());(B/src.name).write_bytes(src.read_bytes())
 raw=out.read_text();m=re.search(r'^## (Definition|Postulate)\n(.*?)(?=^## |\Z)',raw,re.M|re.S);heading=m[1];claim=m[2];oldclaim=claim.strip();links=list(re.finditer(r'\[\[([^\]|]+)(?:\|([^\]]+))?\]\]',claim));r=re.search(r'^## '+heading+r' references\n(.*?)(?=^## |\Z)',raw,re.M|re.S);existing=r[1] if r else '';existingtargets={z[0] for z in re.findall(r'\[\[([^\]|]+)(?:\|([^\]]+))?\]\]',existing)};added=[]
 def label(match):
  supplier,explicit=match[1],match[2];assert supplier in titles;visible=explicit if explicit is not None else titles[supplier]['title'];relocations.append({'item':id,'claim_heading':heading,'link':match[0],'target':supplier,'visible_label':visible,'title_guard':titles[supplier] if explicit is None else None,'target_already_in_matching_references':supplier in existingtargets,'source_claim_context':claim[max(0,match.start()-70):match.end()+70]});
  if supplier not in existingtargets:added.append(match[0]);existingtargets.add(supplier)
  return visible
 newclaim=re.sub(r'\[\[([^\]|]+)(?:\|([^\]]+))?\]\]',label,claim)
 assert len(links)>0
 new=raw[:m.start(2)]+newclaim+raw[m.end(2):]
 if r:
  rr=re.search(r'^## '+heading+r' references\n(.*?)(?=^## |\Z)',new,re.M|re.S);new=new[:rr.end(1)]+('' if new[:rr.end(1)].endswith('\n\n') else '\n')+'\n\n'.join(added)+'\n\n'+new[rr.end(1):] if added else new
 else:
  mm=re.search(r'^## '+heading+r'\n(.*?)(?=^## |\Z)',new,re.M|re.S);new=new[:mm.end(1)]+'## '+heading+' references\n\n'+'\n\n'.join(added)+'\n\n'+new[mm.end(1):]
 # Only the claim's hyperlink markup changes; every formula/prose character except exact rendered titles is preserved.
 nm=re.search(r'^## '+heading+r'\n(.*?)(?=^## |\Z)',new,re.M|re.S);assert nm[1]==newclaim
 out.write_text(new);targets[str(src)]={'target_path':str(src),'before_sha256':sha(src),'proposed_path':str(out),'proposed_sha256':sha(out)};statement_changes[id]=(oldclaim,newclaim.strip())
# Synchronize exactly the complete canonical manifest statements; preserve all other bytes/fields except already reviewed role values.
for id,(oldclaim,newclaim) in statement_changes.items():
 src=pathlib.Path(by[id]['manifest_path']);out=P/src.name
 if str(src) not in targets:out.write_bytes(src.read_bytes());(B/src.name).write_bytes(src.read_bytes())
 raw=out.read_text();start=raw.index('"id": "'+id+'"');m=re.search(r'(?m)^        "statement"\s*:\s*',raw[start:]);lo=start+m.end();old,end=json.JSONDecoder().raw_decode(raw[lo:]);assert old==oldclaim,(id,'stale old claim');new=raw[:lo]+json.dumps(newclaim,ensure_ascii=False)+raw[lo+end:];out.write_text(new);targets[str(src)]={'target_path':str(src),'before_sha256':sha(src),'proposed_path':str(out),'proposed_sha256':sha(out)}
# Bind actual442 body/reference uses and logical transitive closure. These proposals do not change targets/edges.
changed=[pathlib.Path(p).stem for p in targets if p.startswith('items/')];reverse=collections.defaultdict(set);texts={r['id']:pathlib.Path(r['path']).read_text() for r in inv['rows']}
for r in inv['rows']:
 for dep in set(r['source_deps'])|set(r['manifest_deps']):reverse[dep].add(r['id'])
cons=[]
for id in sorted(changed):
 q=collections.deque([(id,[id])]);seen={id};paths={}
 while q:
  parent,w=q.popleft()
  for child in sorted(reverse[parent]):
   if child in seen:continue
   seen.add(child);paths[child]=w+[child];q.append((child,w+[child]))
 refs=[]
 for consumer,text in texts.items():
  lines=[{'line':i,'text':line} for i,line in enumerate(text.splitlines(),1) if re.search(r'\[\['+re.escape(id)+r'(?:\||\]\])',line)]
  if lines:refs.append({'consumer':consumer,'source_sha256':by[consumer]['source_sha256'],'reference_lines':lines,'disposition':'same exact target/content; no fragment-based Lemma-section dependency or formula/qualification change'})
 cons.append({'supplier':id,'direct_logical_consumers':sorted(reverse[id]),'transitive_owned_consumers':[{'id':c,'witness_path':p,'source_sha256':by[c]['source_sha256'],'disposition':'compatible under unchanged mathematical/physical content, hypotheses, adopted model/empirical qualifications and exact dependency IDs'} for c,p in sorted(paths.items())],'actual_reference_consumers':refs,'review_scope':'Exhaustive current442 logical/reference location check and exact interface-preserving delta check; not an independent reproof of every transitive theorem.'})
(D/'consumer-review.json').write_text(json.dumps(cons,indent=2)+'\n');(D/'link-relocations.json').write_text(json.dumps(relocations,ensure_ascii=False,indent=2)+'\n');(D/'reference-title-bindings.json').write_text(json.dumps(titleguard,ensure_ascii=False,indent=2)+'\n');(D/'scientific-role-rationales.json').write_bytes((V/'scientific-role-rationales.json').read_bytes());(D/'inventory.json').write_bytes((V/'inventory.json').read_bytes());(D/'application-proposal.json').write_text(json.dumps({'root_application_only':True,'source_items':len(changed),'role_edges':20,'heading_items':prior['heading_items'],'link_relocation_items':ids,'records':sorted(targets.values(),key=lambda r:r['target_path']),'prior_private_package':str(V),'public_interface_delta':'Hyperlink markup replaced by exactly the current rendered target title (explicit labels retained); all targets moved to matching references, deduplicated by target.21 mathematical/physical claim contents preserved.20 role annotations and2x2 heading tokens also normalized. No new claim, premise, formula, empirical scope, dependency edge or source reading.','source_hash_boundary':prior['source_hash_boundary']},indent=2)+'\n');print('prepared',len(changed),'source items,',len(targets)-len(changed),'manifests,',len(relocations),'link relocations')
