import json,re,difflib
from pathlib import Path
R='numerical-optimization-dynamics-2026-10-16';O=Path('research/'+R+'-owner-boundary85-98');P={}
for f in ['template-profiles-96.json','template-profiles-97-98.json','template-profiles-98.json']:P.update(json.loads((O/f).read_text()))
P['lem-gapped-projector-map-well-defined']['endpoints']='The strict occupied/unoccupied gap is required at each inputX. No projector is asserted when that gap closes; repeated eigenvalues within either cluster are expressly handled by proof step 2.1.'
P['lem-projector-is-admissible-density']['endpoints']='checked|Proof step 1.1 gives every projector eigenvalue exactly0 or1; proof step 2.1 therefore includes both spectral endpoints in the semidefinite density inequalities.'
P['cor-finite-basis-energy-model-has-c1-response']['endpoints']='The local C1 assertion is on an open neighborhood whose image stays strictly within the gap-preserving ball in proof step 2.1; it asserts no continuation to zero gap.'
P['lem-admissible-density-domain-is-closed-convex-complete']['degenerate']='checked|Density eigenvalues0 and1 are admitted: proof step 1.1 constructs a projector in the domain and proof step 2.1 preserves the nonstrict semidefinite inequalities at limits. Strict positivity is not required.'
P['thm-certified-diis-error-inheritance']['one']='checked|At k=1, the convolution bound in proof step 3.1 has just eta_0 and readsE_1<=qE_0+eta_0, matching the baseline branch in proof step 2.1 and the sharper accepted-candidate bound in proof step 1.1.'
intake=json.loads((O/'template-intake.json').read_text());baseops=json.loads((O/'contradictions/operations.json').read_text());skip={(x['id'],x['case']) for x in baseops};ops=[];fullsources={};proofread=[]
def tidy(t):
 t=re.sub(r'(?i)\bproof\s*(\d+\.\d+)',r'Proof step \1',t)
 t=re.sub(r'(?i)\bstep(\d+\.\d+)',r'step \1',t)
 return t
for x in intake:
 b,id,case=x['batch'],x['id'],x['case']
 if b<96 or (id,case) in skip:continue
 file=f'research/{R}-batch-{b}.proof-contracts.json';data=json.loads(Path(file).read_text());before=next(z for z in data['contracts'][id]['boundaries'] if z['case']==case)
 profile=P[id];text=profile.get(case)
 if text is None:
  assert case.startswith('iff'),(id,case)
  text=profile['conclusion']
 # Only concrete positive dispositions switch to checked. No bulk checked conversion.
 status='checked' if text.startswith('checked|') else 'not_applicable';text=tidy(text.removeprefix('checked|'))
 after={k:v for k,v in before.items() if k not in ['reason','evidence','reviewed','template_review']};after['status']=status;after['evidence' if status=='checked' else 'reason']=text
 source=Path('items/'+id+'.md').read_text();fullsources[id]=source
 ops.append({'batch':b,'id':id,'case':case,'before':before,'after':after,'source_read':'Current claim and actual proof/verification read; this is a boundary disposition, not a replacement mathematical review.'})
# A literal source anchor check only; no repository validator, source hash or gate is run.
anchor_issues=[]
for op in ops:
 if op['after']['status']!='checked':continue
 text=op['after']['evidence'];source=fullsources[op['id']];steps=set(re.findall(r'^\s*(\d+\.\d+)\s',source,re.M));refs=[m.group(1) for m in re.finditer(r'\b(?:steps?\s+)?(\d+\.\d+)\b',text,re.I) if re.match(r'steps?\s',m.group(0),re.I) or m.group(1) in steps]
 if not refs and not re.search('statement|definition|example|counterexample',text,re.I):anchor_issues.append({'id':op['id'],'case':op['case'],'problem':'missing source anchor'})
 for r in refs:
  if r not in steps:anchor_issues.append({'id':op['id'],'case':op['case'],'problem':'step not found: '+r})
T=O/'templates96-98';T.mkdir(exist_ok=True);(T/'operations.json').write_text(json.dumps(ops,indent=2,ensure_ascii=False)+'\n');(T/'source-fullbefore.json').write_text(json.dumps(fullsources,indent=2,ensure_ascii=False)+'\n');(T/'literal-anchor-inspection.json').write_text(json.dumps({'scope':'Only proposed checked row reference existence; not a proof-contract or boundary-audit run.','issues':anchor_issues},indent=2)+'\n')
for b in range(96,99):
 p=Path(f'research/{R}-batch-{b}.proof-contracts.json');raw=p.read_text();d=json.loads(raw)
 for op in ops:
  if op['batch']==b:
   rows=d['contracts'][op['id']]['boundaries'];i=next(i for i,z in enumerate(rows) if z['case']==op['case']);assert rows[i]==op['before'];rows[i]=op['after']
 new=json.dumps(d,indent=2,ensure_ascii=False)+'\n'
 for folder,txt in [('before',raw),('proposed',new)]:
  out=T/folder/p;out.parent.mkdir(parents=True,exist_ok=True);out.write_text(txt)
 (T/f'batch-{b}.diff').write_text(''.join(difflib.unified_diff(raw.splitlines(True),new.splitlines(True),fromfile=str(p),tofile=str(p))))
print({'ops':len(ops),'items':len(fullsources),'literal_anchor_issues':anchor_issues})
