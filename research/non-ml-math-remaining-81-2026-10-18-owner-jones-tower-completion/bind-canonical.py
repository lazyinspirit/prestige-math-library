from pathlib import Path
import json,re,yaml
r='non-ml-math-remaining-81-2026-10-18';owner=Path('research')/(r+'-owner-jones-tower-completion')
new=['lem-tracial-standard-form-and-normal-functional-vectors','lem-finite-factor-projection-comparison-and-normalized-trace','lem-tracial-hilbert-module-dimension-and-finite-corners','lem-finite-index-bounded-vector-pull-down']
changed=new+['def-extremal-finite-index-ii1-subfactor-data','lem-finite-right-n-module-frame-from-projection-model','thm-finite-index-ii1-basic-construction-jones-tower','ex-matrix-amplification-basic-construction','thm-temperley-lieb-root-quotient-tower-interface','lem-temperley-lieb-right-closure-preserves-trace-radical']
def read(i):
 s=(Path('items')/(i+'.md')).read_text();_,h,b=s.split('---',2);return yaml.safe_load(h),b

def section(b,head):
 m=re.search(r'^## '+re.escape(head)+r'\n(.*?)(?=\n## |\Z)',b,re.S|re.M)
 if not m:raise RuntimeError('missing section '+head)
 return m.group(1).strip()
p=Path('research')/(r+'-batch-63.pages.json');pages=json.loads(p.read_text())
for page in pages:
 if page['kind']=='A':
  for i in new:
   if i not in {x['id'] for x in page['items']}:page['items'].append({'id':i,'source_path':'items/'+i+'.md'})
  page['items']=list({x['id']:x for x in page['items']}.values())
 local={x['id'] for x in page['items']};pending=page['items'][:];ordered=[];emitted=set()
 while pending:
  pos=next((k for k,x in enumerate(pending) if not ((set(read(x['id'])[0].get('deps',[]))&local)-emitted)),None)
  if pos is None:raise RuntimeError('inventorycycle')
  row=pending.pop(pos);ordered.append(row);emitted.add(row['id'])
 page['items']=ordered
 for x in ordered:
  j,b=read(x['id'])
  for k in ['id','kind','title','deps','justified_by','provenance','sources','proof_strategy','axiom_use']:
   if k in j:x[k]=j[k]
  head='Definition' if j['kind']=='definition' else 'Statement refuted' if j['kind']=='counterexample' else 'Remarks' if j['kind']=='remark' else 'Statement'
  # Native example carriers use Statement, intentionally preserved.
  x['statement']=section(b,head if ('## '+head+'\n') in b else 'Statement')
p.write_text(json.dumps(pages,ensure_ascii=False,indent=2)+'\n')
for page in pages:
 p=Path('library')/page['category']/(page['id']+'.md');s=p.read_text();_,h,b=s.split('---',2);j=yaml.safe_load(h);j['items']=[x['id'] for x in page['items']];p.write_text('---\n'+yaml.safe_dump(j,sort_keys=False,allow_unicode=True)+'---'+b)
p=Path('research')/(r+'-batch-63.proof-contracts.json');j=json.loads(p.read_text());ids=[x['id'] for page in pages for x in page['items']];j['scope']=ids
for i in ids:
 fm,b=read(i);steps=[];m=re.search(r'^## (Proof|Verification|Counterexample)\n(.*?)(?=\n## |\Z)',b,re.S|re.M)
 if m:
  for n in re.finditer(r'^(\d+\.\d+) (.*?)(?=\n\n\d+\.\d+ |\Z)',m.group(2),re.S|re.M):
   t=n.group(2).strip();tag=re.search(r'\[([^\[\]]+)\]\s*∎?$',t)
   if not tag:raise RuntimeError('untagged '+i+' '+n.group(1))
   inputs=[x.strip() for x in tag.group(1).split(',')]
   for f in [z[0] or 'step '+z[1] for z in re.findall(r'\[([FA]\d+)\]|\bstep (\d+\.\d+)',t[:tag.start()])]:
    if f not in inputs:inputs.append(f)
   steps.append({'id':'step-'+n.group(1).replace('.','-'),'step':n.group(1),'claim':t[:tag.start()].strip(),'inputs':inputs})
 citations=[];m=re.search(r'^## Facts & Assumptions\n(.*?)(?=\n## |\Z)',b,re.S|re.M)
 if m:
  for fact in re.finditer(r'^\[([FA]\d+)\] (.*?)(?=\n\n\[[FA]\d+\]|\Z)',m.group(1),re.S|re.M):
   f=fact.group(1);uses=[s['step'] for s in steps if f in s['inputs']]
   if f=='A1' and not uses:uses=[s['step'] for s in steps]
   for supplier in dict.fromkeys(re.findall(r'\[\[([^\]|]+)(?:\|[^\]]+)?\]\]',fact.group(2))):
    sj,sb=read(supplier);head='Definition' if sj['kind']=='definition' else 'Statement';quote=section(sb,head)
    citations.append({'fact':f,'source':supplier,'source_section':head,'quote':quote,'uses':uses})
 base=j['contracts'].get(i,{})
 if i in changed:
  boundaries=[]
  if i in new:
   if i==new[0]:evidence={'empty':'Statement fixes a finite tracial algebra with a normalized faithful state, hence excludes the zero algebra; its zero-vector branch is covered by linearity.','zero':'The zero functional is realized by the zero vector; expectation is zero on zero by its defining pairing.','one':'Scalar finite tracial algebras use the same bounded-convolver and functional pairing formulas.','degenerate':'Nonfaithful positive normal functionals are permitted, with zero support; the representation/trace itself is faithful.','endpoints':'Positive functional domination permits C=0 and contractions at both order endpoints.','nonempty-choice':'AC is explicit in the Statement and Facts; compactness, Hahn–Banach and Hilbert adjoints use their declared canonical hypotheses.','iff-forward':'Bounded convolvers belong to the algebra by the standard commutant argument.','iff-reverse':'Every algebra element is a bounded convolver by the displayed multiplication norm estimate.'}
   elif i==new[1]:evidence={'empty':'Factors have nonzero identity; the zero projection is allowed and compared by the zero partial isometry.','zero':'Trace zero kills a projection by faithfulness, including all zero-remainder cases.','one':'Projection 1 and its finite partitions are used explicitly in trace uniqueness.','degenerate':'Corner claims require a nonzero projection; the zero corner is excluded explicitly.','endpoints':'Equality of the two finite projection traces implies equivalence, without strict inequality.','nonempty-choice':'AC supplies the maximal orthogonal partial-isometry families; their strong sums are constructed in the proof.','iff-forward':'Equivalent/subequivalent finite projections have the required trace inequality.','iff-reverse':'Maximal comparison and faithfulness turn the trace inequality into subequivalence.'}
   elif i==new[2]:evidence={'empty':'The zero Hilbert module has empty cyclic family, zero projection and dimension zero.','zero':'Zero dimension implies zero module by faithfulness of the constructed trace.','one':'The standard module has dimension one by the rectangular trace calculation.','degenerate':'Nonseparable arbitrary-index models use arbitrary orthogonal families and nets; no countable-basis assumption is imposed.','endpoints':'Finite dimension permits equality with an integer bound; a larger finite coordinate corner avoids any endpoint ambiguity.','nonempty-choice':'AC supplies the maximal cyclic decomposition and projection-comparison family.','iff-forward':'No additional biconditional is asserted.','iff-reverse':'No additional biconditional is asserted.'}
   else:evidence={'empty':'II1 factors and their normalized traces exclude an empty/zero carrier.','zero':'T=0 pulls down to x=0 uniquely; a zero vector is bounded and belongs to M.','one':'The identity and the projection e are treated by Tr(1)=lambda and Tr(e)=1.','degenerate':'No separability, irreducibility or extremality is required.','endpoints':'Finite ordinary index includes index one; no division except by positive lambda occurs.','nonempty-choice':'AC supplies the bounded approximating net and a compactness subnet, with a uniform bound explicitly proved.','iff-forward':'Every right-N bounded vector pulls down to an element of M.','iff-reverse':'Every element of M defines a right-N bounded multiplication vector.'}
  elif i=='thm-finite-index-ii1-basic-construction-jones-tower':evidence={'empty':'II1 factors are nonzero and every finite frame sums to identity, so the frame is nonempty.','zero':'The relations and trace formulas are linear and include zero x,y; lambda is positive.','one':'Proof step6.1 treats index one: e=1,N=M and every subsequent inclusion is the identity.','degenerate':'Noninteger finite index uses projection corners; all ordinary finite-index inclusions are retained.','endpoints':'Both adjacent Jones sandwich identities are computed separately in step5.1, and all finite-stage endpoints use their own explicit frame.','nonempty-choice':'A1 carries the actual foundational AC uses; subsequent frame and sandwich calculations use explicit finite sums.','iff-forward':'No biconditional is asserted in the full tower Statement.','iff-reverse':'No biconditional is asserted in the full tower Statement.'}
  elif i=='lem-finite-right-n-module-frame-from-projection-model':evidence={'empty':'The Hilbert module contains L2(N), so positive finite dimension and a nonempty spanning frame are automatic.','zero':'The frame/coordinate/norm identities include the zero vector; lambda is positive.','one':'Index one yields a one-dimensional standard N-module model, without excluding N=M.','degenerate':'Finite noninteger dimension is a projection trace, not a rounded integer vector-space dimension.','endpoints':'The last projection remainder is subequivalent to e, including zero or full e at integer endpoints.','nonempty-choice':'The explicitly declared AC supplier provides finite projection comparisons and compactness; after choosing the finite partial isometries the formulas are explicit.','iff-forward':'The coordinate unitary maps bounded M onto pN^k, and its Hilbert completion is the finite amplification.','iff-reverse':'The inverse finite coordinate sum maps every pN^k element back to M.'}
  else: # definitions and existing consumer boundary clauses stay as originally reviewed unless separately changed.
   evidence=None;boundaries=base.get('boundaries',[])
  if evidence:boundaries=[{'case':k,'status':'checked','evidence':v} for k,v in evidence.items()]
 else:boundaries=base.get('boundaries',[])
 for row in boundaries:
  if row.get('status')=='checked':
   if 'biconditional' in row.get('evidence',''):
    row['status']='not_applicable';row['reason']=row.pop('evidence')
   else:row['evidence']=('' if row['evidence'].startswith('Statement and complete proof. ') else 'Statement and complete proof. ')+row['evidence'].replace('step6.1 treats index one','step 8.1 treats index one').replace('in step5.1','in step 6.1')
 j['contracts'][i]={'citations':citations,'derivations':steps,'routine_steps':[],'boundaries':boundaries,'axiom_uses':[{'axiom':'def-axiom-of-choice','steps':[s['step'] for s in steps if 'A1' in s['inputs']]}] if ('def-axiom-of-choice' in fm.get('deps',[]) or fm.get('axiom_use')) else [],'finite_checks':base.get('finite_checks',base.get('finite_smoke',[]))}
j['contracts']={i:j['contracts'][i] for i in ids};p.write_text(json.dumps(j,indent=2,ensure_ascii=False)+'\n')
(owner/'item-ids.json').write_text(json.dumps(ids,indent=2)+'\n');(owner/'changed-item-ids.json').write_text(json.dumps(changed,indent=2)+'\n');print('bound',len(ids),'items with root-owned dependency labels preserved')
