import json,pathlib,hashlib,re,itertools
run='frontier-44-special-representation-examples-28-six-step';B=pathlib.Path('research')/(run+'-owner-escalation-repairs/resume-20261011/gate-routing');rs=json.load(open(B/'native-carrier-inventory.json'))['rows'];out=[];dest=B/'recovered-post-source';dest.mkdir(exist_ok=True)
for r in rs:
 if r['decision']['verdict']!='accepted_repair' or r['target'].get('route')!='touched' or r['target'].get('batch') in ['10'] or not r.get('current') or not r.get('reader_result') or r['current']['item_sha256']==r['reader_result'].get('item_sha256'):continue
 id=r['decision']['id'];p=pathlib.Path('items')/(id+'.md');current=p.read_text();expected=r['reader_result']['item_sha256'];fms=[];bodies=[]
 for q in [p,pathlib.Path('research')/(run+'-continuation-inputs/items')/(id+'.md')]:
  if q.exists():
   s=q.read_text();m=re.match(r'^(---\n)(.*?)(\n---\n)(.*)$',s,re.S)
   if m:fms.append(m[2]);bodies.append(m[4])
 recovered=None
 bodyvariants=list(dict.fromkeys(['\n'*n+bodies[0].lstrip('\n') for n in range(4)] + [bodies[0]]))
 for fm,body in itertools.product(fms,bodyvariants):
  for keepverify in [True,False]:
   f=fm if keepverify else re.sub(r'^verification:.*?(?=^[A-Za-z_][\w-]*:|\Z)','',fm,flags=re.S|re.M)
   for level,provenance in itertools.product([None,*range(70)],['current','ai-altered','literature-derived','ai-generated','not-supplied']):
    g=re.sub(r'^dependency_level:.*\n','',f,flags=re.M) if level is None else re.sub(r'^dependency_level:.*$',f'dependency_level: {level}',f,flags=re.M)
    if provenance!='current':g=re.sub(r'(^provenance:\n(?:[ \t]+.*\n)*?[ \t]+proof:)[^\n]*',r'\1 '+provenance,g,flags=re.M)
    s='---\n'+g+'\n---\n'+body
    if hashlib.sha256(s.encode()).hexdigest()==expected:recovered=s;break
   if recovered:break
  if recovered:break
 if recovered:
  p=dest/(id+'.md');p.write_text(recovered);out.append({'id':id,'obligation':r['decision']['obligation'],'post_source_path':str(p),'post_source_sha256':expected,'body_exactly_identical_to_current':recovered.split('\n---\n',1)[1]==current.split('\n---\n',1)[1]})
 else:out.append({'id':id,'obligation':r['decision']['obligation'],'recovered':False})
 print(id,bool(recovered))
(B/'recovered-post-source.json').write_text(json.dumps({'version':1,'run':run,'rows':out,'preimages_are_sha256_proven_not_inferred':True},indent=2)+'\n')
