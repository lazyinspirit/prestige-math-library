import json,re,yaml
from pathlib import Path
root=Path('.')
ids=['lem-pure-state-excision-and-essential-orbit-density','lem-faithful-essential-pure-state-orbits-obstruct-countable-separation','lem-primitive-ideals-have-standard-borel-quotient-norm-codings','lem-local-analytic-separation-and-saturated-borel-quotients','lem-gcr-kernel-and-mackey-borel-characterizations','lem-separable-group-c-star-type-i-and-smooth-dual-criteria','lem-bounded-density-and-finite-vector-transitivity-for-c-star-representations','thm-central-decomposition-into-factor-representations','def-type-i-factor-representation-and-type-i-group']
def read(id):
 t=Path('items',id+'.md').read_text(); m=re.match(r'^---\n(.*?)\n---\n(.*)$',t,re.S);assert m,id
 return yaml.safe_load(m[1]),m[2]
def section(t,h):
 m=re.search(r'^## '+re.escape(h)+r'\s*\n(.*?)(?=^## |\Z)',t,re.M|re.S);return m[1].strip() if m else ''
def quote(id):
 f,t=read(id)
 for h in ['Statement','Definition','Example','Remark']:
  s=section(t,h)
  if s:return h,s
 raise Exception('missing section '+id)
paths={s:Path('research/frontier-43-complex-representation-15-batch-1.'+s+'.json') for s in ['pages','proof-contracts']}
pages=json.loads(paths['pages'].read_text()); contracts=json.loads(paths['proof-contracts'].read_text())
B={
ids[0]:{'empty':'Statement assumes a pure state, excluding the zero algebra; density concerns nonempty neighborhoods.','zero':'Proof1.1 covers η=0, and Proof4.1 permits the excluded finite subspace to be zero.','one':'Proof1.2 treats unital a0=1; Proof3.1 supplies norm-one positive neighborhood cutoffs.','degenerate':'Proof1.1 separates η=0; Proof1.2 constructs bt inside nonunital A.','nonempty-choice':'Proof1.1 and Proof1.2 select only finite prescribed operators and the stated approximate unit.','iff-forward':None,'iff-reverse':None},
ids[1]:{'empty':'Statement assumes a faithful essential irreducible, and Proof1.2 shows F is nonempty.','zero':'Proof1.2 detects all nonzero ideals; the assumed nonzero irreducible carrier excludes B=0.','one':'Proof2.1 treats multiplicity one explicitly; essential carriers cannot be one dimensional.','degenerate':'Proof2.1 gives arbitrary multiplicity and the nonunital ideal extension via its approximate unit.','nonempty-choice':'Proof1.1 and Proof2.1 use stated bases and finite compact cutoffs; Proof5.1 uses a countable open subcover.','iff-forward':'Proof6.1 pulls any Mackey separating family back to an invariant Borel family; Proof7.1 applies the quotient obstruction.','iff-reverse':None},
ids[2]:{'empty':'Proof3.1 treats the empty pure and primitive spaces of A=0 explicitly.','zero':'Proof5.1 identifies faithful primitive kernel zero in a nonzero prime algebra; Proof5.1 excludes the zero quotient in primitive codes.','one':'Proof2.1 uses a norm-one positive cutoff and a unit vector state; the scalar quotient is included.','degenerate':'Proof2.3 includes nonunital and zero seminorms; properness is imposed only for primitive codes.','nonempty-choice':'Proof1.1 chooses countable dense D; Proof4.1 uses the nonempty Baire intersection only in a nonzero prime algebra.','iff-forward':'Proof5.1 proves the quotient-norm tests for primitive codes; Proof6.1 identifies coordinate Borel with hull-kernel Borel.','iff-reverse':'Proof4.1 proves prime implies primitive and Proof5.1 proves the converse coding tests; Proof6.1 proves the reverse Borel inclusion.'},
ids[3]:{'empty':'Proof1.1 and Proof2.1 explicitly handle empty analytic sets; Proof2.2 handles the zero algebra.','zero':'Proof1.2 excludes the zero carrier in nondegenerate irreducible codes; Proof2.2 treats empty quotients.','one':'Proof1.2 includes every finite carrier, including dimension one.','degenerate':'Proof2.2 uses dimension strata and pointwise frames, not a global class selector.','nonempty-choice':'Proof2.1 chooses only branches of inseparable analytic prefixes; Proof1.3 chooses countable compact dense families.','iff-forward':'Proof3.1 shows saturated Borel image is Borel under the exact class-fibre hypothesis; Proof4.1 transports quotient structures.','iff-reverse':'Proof3.1 uses Borel preimages for the converse; Proof2.2 and Proof2.3 give maps in both correspondence directions.'},
ids[4]:{'empty':'Proof3.1 explicitly proves all empty-dual clauses for A=0.','zero':'Proof2.2 uses nonzero ideal support in a nonzero factor; zero supports are excluded by faithfulness.','one':'Proof4.1 permits arbitrary nonzero L, including multiplicity one, and rank-one minimal corners.','degenerate':'Proof1.1 passes to the primitive quotient; Proof2.2 keeps the original factor carrier and Proof4.1 handles arbitrary multiplicity.','nonempty-choice':'Proof2.2 chooses a separate faithful irreducible of the proved primitive quotient; no class selector is used.','iff-forward':'Proof1.1 and Proof2.1 prove GCR gives kernel injectivity and standard/countably separated Mackey dual.','iff-reverse':'Proof3.1 uses the faithful-essential obstruction for both reverse kernel and countable-separation implications.'},
ids[5]:{'empty':'Statement assumes a locally compact group, which is nonempty; there is no empty-group representation assertion.','zero':'Proof2.1 chooses ξ≠0 in the nonzero factor carrier and shows K≠0; zero representations are excluded.','one':'Proof2.1 includes one-dimensional cyclic K; minimal projection equivalence includes multiplicity one.','degenerate':'Proof2.1 and Proof3.1 prove restriction faithfulness and its von Neumann image for arbitrary initial carriers.','nonempty-choice':'Proof2.1 chooses one nonzero vector; Proof3.1 derives product compactness from explicit AC/Zorn, with no irreducible class selector.','iff-forward':'Proof4.1 applies only the authorized factor-type-I ⇒ GCR citation, after the full local arbitrary-carrier reduction.','iff-reverse':'Proof2.2 proves GCR implies the group factor and Borel/Fell clauses; Proof5.1 proves the remaining reverse implications.'},
}
for id in ids:
 f,t=read(id)
 for p in pages:
  for row in p['items']:
   if row['id']!=id:continue
   row['deps']=f.get('deps',[]); row['statement']=section(t,'Statement') or section(t,'Definition');row['provenance']=f.get('provenance',row.get('provenance',{}));row['axiom_use']=f.get('axiom_use','');row['sources']=f.get('sources',row.get('sources',{}));
   if 'justified_by' in f:row['justified_by']=f['justified_by']
   if id in ids[:6]:row['strategy']='Full local argument in the item Proof, with exact step contracts. '+('Only factor-type-I implies GCR is cited under the recorded original Glimm authority; all carrier/Borel/topology directions are local.' if id==ids[5] else 'No additional source-only implication or selector is assumed.')
 if id not in ids[:6] and id!=ids[7]:continue
 facts=[]
 for block in re.split(r'\n\s*\n',section(t,'Facts & Assumptions')):
  m=re.match(r'\[([FAL]\d+)\]\s*(.*)',block,re.S)
  if m:facts.append((m[1],re.findall(r'\[\[([^\]|]+)',m[2])))
 steps=[]
 for m in re.finditer(r'^(\d+\.\d+) (.*?)(?=^\d+\.\d+ |\Z)',section(t,'Proof'),re.M|re.S):steps.append((m[1],m[2].strip()))
 citations=[]
 for fact,links in facts:
  for source in links:
   h,q=quote(source);uses=[n for n,s in steps if re.search(r'\b'+fact+r'\b',s)]
   citations.append(dict(fact=fact,source=source,source_section=h,quote=q,uses=uses))
 deriv=[]
 for n,s in steps:
  inputs=[]
  for a,b in re.findall(r'\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b',s):
   tok='step '+a if a else b
   if tok not in inputs:inputs.append(tok)
  claim=re.sub(r'\s*\[[^\]\n]+\]\s*(?:∎)?\s*$','',s).strip()
  deriv.append(dict(id='derivation-'+n,claim=claim,step=n,inputs=inputs))
 if id==ids[7]:
  old=contracts['contracts'].get(id)
  bounds=old['boundaries'] if old else [dict(case=c,status='checked',evidence='Statement and Proof'+steps[-1][0]+' give central factor decomposition with nonzero fibres on the conull support.') for c in ['empty','zero','one','degenerate','endpoints','nonempty-choice','iff-forward','iff-reverse']]
 else:
  bounds=[]
  for c in ['empty','zero','one','degenerate','endpoints','nonempty-choice','iff-forward','iff-reverse']:
   e=B[id].get(c)
   if e:bounds.append(dict(case=c,status='checked',evidence=e))
   else:bounds.append(dict(case=c,status='not_applicable',reason='No interval endpoint parameter appears in this Statement.' if c=='endpoints' else 'The Statement is a one-direction construction or obstruction, with no converse asserted for this boundary.'))
 contracts['contracts'][id]=dict(citations=citations,derivations=deriv,routine_steps=[],boundaries=bounds)
 print(id,len(citations),len(steps))
# Refresh exact supplier quotations only in existing batch1 entries whose source is one of our changed statements/definition.
changed=set(ids)
for cid,e in contracts['contracts'].items():
 for c in e.get('citations',[]):
  if c['source'] in changed:
   h,q=quote(c['source']);c['source_section']=h;c['quote']=q
for k,v in [('pages',pages),('proof-contracts',contracts)]:paths[k].write_text(json.dumps(v,indent=2,ensure_ascii=False)+'\n')
Path('/tmp/frontier43-gcr-paths.txt').write_text('\n'.join('items/'+id+'.md' for id in ids)+'\n')
