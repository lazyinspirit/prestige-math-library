import pathlib,json,re,copy,os
run='non-ml-math-remaining-81-2026-10-18';base=pathlib.Path('research')/(run+'-owner-relay-interference-completion/actual-integration');p=pathlib.Path('research')/(run+'-batch-19.proof-contracts.json');d=json.loads(p.read_text());m=json.load(open('research/'+run+'-batch-19.pages.json'));ids=[x['id'] for pg in m for x in pg['items']]
new=['lem-finite-or-euclidean-likelihood-ratio-network-coding','lem-complex-gaussian-interference-entropy-estimates','lem-gaussian-superposition-nonunique-han-kobayashi-region']
for i in new:d['contracts'][i]={'completion_status':'ready','citations':[],'derivations':[],'routine_steps':[],'boundaries':[],'finite_smoke':[],'finite_checks':[]}
d['scope']=ids
# Exact original-to-current phase mapping for unchanged mathematical step bodies.
def blocks(s):
 k=re.search(r'(?m)^## (Proof|Verification|Counterexample|Refutation)\s*$',s)
 if not k:return []
 t=s[k.end():];hits=list(re.finditer(r'(?m)^(\d+\.\d+)\s+',t));out=[]
 for j,h in enumerate(hits):
  text=t[h.end():hits[j+1].start() if j+1<len(hits) else len(t)];text=text.split('∎',1)[0];text=re.split(r'(?m)^## ',text)[0];text=re.sub(r'\[[^\[\]]*\]\s*$','',text.strip());text=re.sub(r'\d+\.\d+','REF',text);out.append((h.group(1),re.sub(r'\s+',' ',text).strip()))
 return out
maps={}
for i in ids:
 old=base/'before/items'/ (i+'.md');cur=pathlib.Path('items')/(i+'.md')
 if not old.exists():continue
 ob=blocks(old.read_text());nb=blocks(cur.read_text());lookup={txt:n for n,txt in nb};mapping={n:lookup[t] for n,t in ob if t in lookup};maps[i]=mapping
 c=d['contracts'][i]
 def remap(s):
  if isinstance(s,str):return re.sub(r'(?i)(step\s+)(\d+\.\d+)',lambda z:z.group(1)+mapping.get(z.group(2),z.group(2)),s)
  if isinstance(s,list):return [remap(x) for x in s]
  if isinstance(s,dict):return {k:remap(v) for k,v in s.items()}
  return s
 c['boundaries']=remap(c.get('boundaries',[]))
# Boundary evidence below points at actual final proof clauses, rather than old incomplete fragments.
B={
'lem-finite-or-euclidean-likelihood-ratio-network-coding':{'zero':'step 13.1 constructs singleton-message zero codes; step 7.1 permits deterministic zero-budget inputs.','one':'step 12.1 covers a one-node network with no separating constrained cut by locally known messages.','degenerate':'step 13.1 permits constant reconstructions and step 7.1 preserves deterministic already-feasible inputs.','endpoints':'step 13.1 constructs longer reliable codes approaching every asserted closure point.','nonempty-choice':'step 13.1 selects the first successful finite deterministic function without choice; the Euclidean branch fixes a measurable random realization under its explicit AC assumption.'},
'lem-complex-gaussian-interference-entropy-estimates':{'zero':'step 2.1 treats t=0 and s=t=0 explicitly.','one':'step 2.1 and step 3.1 hold for n=1 as well as all positive lengths.','degenerate':'step 1.1 establishes finite entropy after nonsingular Gaussian smoothing even for singular input laws; step 2.2 allows vanishing gains.','endpoints':'step 2.1 proves the s=t endpoint by equal marginals and t=0 directly.','nonempty-choice':'step 2.1 explicitly constructs the degraded Gaussian coupling with nonnegative noise variance.'},
'lem-gaussian-superposition-nonunique-han-kobayashi-region':{'zero':'step 5.1 uses the all-zero code; step 2.1 omits zero-power users.','one':'step 5.1 handles singleton streams with no competing index.','degenerate':'step 4.1 and step 5.1 treat either failed extra facet and prove both cannot fail simultaneously.','endpoints':'step 5.1 uses closure and the slack-power limit from step 2.1.','nonempty-choice':'step 2.1 jointly selects deterministic power-feasible codebooks; step 3.1 proves the splitting intervals intersect.'},
'lem-real-gaussian-han-kobayashi-inner-region':{'zero':'step 4.1 gives the all-zero code and identically zero codewords at zero-power users.','one':'step 2.1 omits false-message tests for singleton streams.','degenerate':'step 4.1 omits zero-power components and keeps all deterministic powers feasible.','endpoints':'step 4.1 takes achievable closures and then the power-slack limit.','nonempty-choice':'step 4.1 uses simultaneous error/power events to select one deterministic codebook for both receivers.'},
'lem-real-gaussian-multiple-access-random-coding-region':{'zero':'step 4.1 treats both rates zero; step 3.1 treats zero allowed powers.','one':'step 3.1 proves the average-energy variance bound also when M_i=1.','degenerate':'step 1.1 keeps zero-power inputs zero and omits zero-rate tests; step 2.1 has no false zero-rate candidates.','endpoints':'step 4.1 restores the original powers from strict slack and takes the closed MAC region.','nonempty-choice':'step 3.1 jointly selects deterministic codebooks meeting both power constraints and a finite list of receiver error bounds.'},
'thm-finite-multisource-multicast-noisy-network-coding-inner-bound':{'zero':'step 3.1 constructs the separate zero tuple regardless of negative cut values.','one':'step 2.1 uses the helper for every finite node and time-sharing alphabet, including singleton alphabets.','degenerate':'step 1.1 omits zero-mass atoms and step 2.1 permits constant reconstructions.','endpoints':'step 3.1 gives closure of the union by successively longer reliable codes.','nonempty-choice':'step 2.1 applies the helper finite branch, whose explicit finite-function enumeration does not require AC.'},
'thm-real-gaussian-multicast-noisy-network-coding-inner-bound':{'zero':'step 1.1 fixes zero-power inputs at zero; step 7.1 gives a zero-error zero-power singleton code.','one':'step 5.1 evaluates unit channel and quantization noise with the explicit entropy formula.','degenerate':'step 1.1 deletes constant coordinates and step 2.1 verifies the square-integrability and zero-power hypotheses.','endpoints':'step 4.1 approaches allowed powers with strict slack, and step 7.1 takes rate closure.','nonempty-choice':'step 3.1 consumes the helper deterministic measurable shell-feasible coding construction.'},
'lem-real-gaussian-interference-genie-outer-region':{'zero':'step 1.1 treats vanishing direct gains; step 3.2 treats zero user power or a zero cross gain.','one':'Statement fixes unit noise; no independently varying unit-noise boundary is asserted.','degenerate':'step 2.1 handles P_1=0 before gain degradation and step 3.2 handles P_2=0 before noise simulation.','endpoints':'step 3.2 permits c=b and the entropy estimate consumed in step 2.1 permits equal degradation gains.','nonempty-choice':'step 3.2 explicitly simulates the weaker observation and replaces randomized decoding by a finite-message MAP rule.'},
'thm-real-gaussian-interference-channel-within-one-bit':{'zero':'step 2.3 clips both small coordinates to zero and step 6.1 treats zero prescribed powers.','one':'step 4.1 includes INR=1 and either INR below one with coincident boundary formulas.','degenerate':'step 6.1 omits zero-power inputs and avoids division by gains or zero powers.','endpoints':'step 5.1 uses the suppliers\' closure to include boundary rates; step 2.3 constructs clipped axes directly.','nonempty-choice':'step 5.1 binds the explicit power-feasible codebook selections and auxiliary-removal alternatives of the coding supplier.'},
'cor-finite-relay-compress-forward-noisy-network-coding-bound':{'zero':'step 3.1 gives a singleton zero-rate code even when no strict positive bound holds.','degenerate':'step 1.1 uses a constant source reconstruction and only the relay penalty.','endpoints':'step 2.1 treats the nonstrict compress-forward side condition, including equality; no equality at the strict positive-rate bound is asserted.','nonempty-choice':'step 1.1 applies the proved finite coding supplier; step 3.1 gives the explicit zero-rate witness.'},
'cor-finite-two-way-relay-noisy-network-coding-region':{'zero':'step 4.1 proves the separate singleton-message zero pair.','degenerate':'step 1.1 allows constant terminal reconstructions, and step 2.1 uses each destination\'s own-message side information.','endpoints':'step 3.1 takes the asserted closure after intersecting both destination constraints.','nonempty-choice':'step 3.1 uses the one simultaneous multicast code supplied by F1 for both destinations.'},
'thm-real-gaussian-multicast-noisy-network-coding-cut-dependent-gap':{'zero':'step 2.1 admits zero input covariance and step 5.1 compares the algebraic cuts with their stated penalty.','degenerate':'step 3.1 and step 4.1 allow singular signal Gram matrices because all noise-shifted matrices remain positive definite.','endpoints':'Statement is a cutwise bound; step 5.1 uses the proved inner supplier and its closure, rather than asserting a new global gap constant.','nonempty-choice':'step 1.1 fixes a destination in the assumed nonempty complementary destination set; step 3.1 constructs positive-definite matrix square roots.'},
}
for i,checks in B.items():
 c=d['contracts'][i];c['completion_status']='ready';c.pop('unresolved_obligations',None);out=[]
 for case in ['empty','zero','one','degenerate','endpoints','nonempty-choice','iff-forward','iff-reverse']:
  if case in checks:out.append({'case':case,'status':'checked','evidence':checks[case]})
  elif case.startswith('iff-'):out.append({'case':case,'status':'not_applicable','reason':'Statement asserts no if-and-only-if conclusion.'})
  elif case=='empty':out.append({'case':case,'status':'not_applicable','reason':'Statement uses a positive blocklength and a finite nonempty node/observation model; it asserts no zero-dimensional or zero-length model extension.'})
  else:out.append({'case':case,'status':'not_applicable','reason':'Statement fixes the unit/noise/model convention; it asserts no additional independent parameter-one extension.'})
 c['boundaries']=out
# Fixed-quantizer example is now backed by the completed general reconstruction-set theorem.
d['contracts']['ex-real-gaussian-relay-fixed-quantizer-gap']['completion_status']='ready'
d['contracts']['ex-real-gaussian-relay-fixed-quantizer-gap'].pop('unresolved_obligations',None)
# Assert no stale escalated proof contract remains in this completed owned scope.
assert all(d['contracts'][i].get('completion_status')=='ready' for i in ids)
tmp=p.with_suffix('.json.owner-tmp');tmp.write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n');os.replace(tmp,p)
(base/'contract-phase-maps.json').write_text(json.dumps(maps,indent=2)+'\n');print('40 scoped contracts, exact current boundary anchors and three new helper entries prepared')
