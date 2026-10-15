from pathlib import Path
import re,json
root=Path('.')
ids=['lem-random-permutation-variance-by-transpositions','lem-permutation-mixture-coupling-for-two-sample-u-statistics','lem-finite-population-permutation-clt','thm-two-sample-u-statistic-permutation-clt-under-weak-null','thm-two-sample-u-statistic-permutation-clt-under-mixed-centering','thm-studentized-two-sample-u-statistic-permutation-validity','thm-studentized-permutation-validity-under-mixed-assignment-centering','def-studentized-two-sample-u-statistic','ex-studentized-rank-u-statistic-under-weak-null','ex-same-mean-unequal-variance-studentized-permutation-test','ex-exact-versus-weak-two-sample-null']

def section(s,name):
 m=re.search(r'^## '+re.escape(name)+r'\s*\n(.*?)(?=^## |\Z)',s,re.M|re.S)
 return m.group(1).strip() if m else None

def fm_value(s,k):
 m=re.search(r'^'+k+r':\s*([^\n]+)',s.split('---',2)[1],re.M)
 return m.group(1).strip('"') if m else None

def deps(s):
 m=re.search(r'^deps:\n((?:  - .*\n)*)',s,re.M)
 return re.findall(r'  - (.*)',m.group(1)) if m else []

def contract(i):
 s=Path('items',i+'.md').read_text()
 facts=section(s,'Facts & Assumptions') or ''
 proof=section(s,'Proof') or section(s,'Verification') or ''
 steps=[]
 for m in re.finditer(r'^(\d+\.\d+) (.*?)(?=^\d+\.\d+ |\Z)',proof,re.M|re.S):
  t=m.group(2).strip();tag=re.search(r'\[([^\[\]]+)\]\s*(?:∎)?\s*$',t)
  claim=t[:tag.start()].strip() if tag else t
  inputs=[v.strip() for v in tag.group(1).split(',')] if tag else ['given']
  steps.append({'id':'step-'+m.group(1).replace('.','-'),'claim':claim,'step':m.group(1),'inputs':inputs,'_text':t})
 known=[x['step'] for x in steps]
 for st in steps:
  for tok in re.findall(r'\b[FAL]\d+\b',st['_text']):
   if tok not in st['inputs']:st['inputs'].append(tok)
  for k in known:
   if re.search(r'(?<![\d.])'+re.escape(k)+r'(?![\d.])',st['_text']):
    tok='step '+k
    if tok not in st['inputs']:st['inputs'].append(tok)
 citations=[]
 for m in re.finditer(r'^\[([FAL]\d+)\] (.*?)(?=\n\n|\Z)',facts,re.M|re.S):
  fact=m.group(1)
  for source in re.findall(r'\[\[([^\]|]+)',m.group(2)):
   ss=Path('items',source+'.md').read_text(); sec='Statement' if section(ss,'Statement') is not None else 'Definition'
   citations.append({'fact':fact,'source':source,'source_section':sec,'quote':section(ss,sec),'uses':[st['step'] for st in steps if re.search(r'\b'+fact+r'\b',st['_text'])]})
 for st in steps:del st['_text']
 reasons={
 'empty':'The Statement assumes positive sample sizes and fixed positive kernel order; it asserts no empty-sample result.',
 'zero':'The Statement does not divide by a zero population variance; all limiting projection variances used as scales are explicitly positive.',
 'one':'Fixed order r=1 is included by the same subset counts and first-projection formulas; no separate asymptotic sample-size-one case is asserted.',
 'degenerate':'Degenerate limiting projections are excluded by the positive-variance hypotheses in the Statement.',
 'endpoints':'The Statement requires p strictly between zero and one; no endpoint allocation limit is asserted.',
 'nonempty-choice':'AC is explicitly assumed in the Statement and inherited through the named CLT or consistency suppliers; finite counting introduces no further choice use.',
 'iff-forward':'The Statement has no biconditional.',
 'iff-reverse':'The Statement has no biconditional.'}
 boundaries=[{'case':k,'status':'not_applicable','reason':v} for k,v in reasons.items()]
 def checked(k,e):
  boundaries[list(reasons).index(k)]={'case':k,'status':'checked','evidence':e}
 if i=='lem-random-permutation-variance-by-transpositions':
  reasons.update({})
  checked('zero','A constant function has zero variance and zero transposition differences by the Statement and step 1.1.')
  checked('one','For N=1 both sides vanish, as explicitly checked in step 3.1.')
  checked('degenerate','Constant functions satisfy the inequality by the squared-difference identity in step 1.1.')
  for k in ['empty','endpoints','nonempty-choice']:
   boundaries[list(reasons).index(k)]={'case':k,'status':'not_applicable','reason':{'empty':'The Statement requires N>=1, so the permutation set is nonempty.','endpoints':'The finite inequality has no allocation parameter or limiting endpoint.','nonempty-choice':'The proof uses only finite sums over explicitly specified finite sets; no choice axiom is invoked.'}[k]}
 elif i=='lem-permutation-mixture-coupling-for-two-sample-u-statistics':
  checked('zero','If D=0 the arrays agree and all differences vanish; steps 3.1–4.1 give zero on both sides. No mixed kernel mean-zero assumption is used.')
  checked('degenerate','Even B=0 is permitted: the moment and triangle bounds in steps 3.1–4.1 still give zero error; no inverse variance appears.')
  boundaries[list(reasons).index('nonempty-choice')]={'case':'nonempty-choice','status':'not_applicable','reason':'The Statement uses finite product laws and explicitly constructed finite labels/alignment. No arbitrary choice family is selected.'}
 elif i=='lem-finite-population-permutation-clt':
  checked('zero','The Statement sets T_N=0 when S_N²=0; step 1.1 shows the probability of that event tends to zero.')
 elif i=='def-studentized-two-sample-u-statistic':
  checked('zero','The Definition explicitly sets S=0 if V_SE=0, making the statistic real-valued on all inputs.')
  for k in ['degenerate','nonempty-choice']:
   boundaries[list(reasons).index(k)]={'case':k,'status':'not_applicable','reason':{'degenerate':'The Definition states no limiting distribution and permits zero denominators via its explicit convention.','nonempty-choice':'The Definition uses explicit finite averages and a finite uniform permutation; no arbitrary choice is used.'}[k]}
 elif i=='thm-studentized-two-sample-u-statistic-permutation-validity':
  checked('zero','The zero-denominator convention has conditional failure probability tending to zero in step 1.2 and true-sampling probability tending to zero in step 3.1.')
 elif i=='thm-studentized-permutation-validity-under-mixed-assignment-centering':
  checked('zero','The Statement uses the studentizer definition, and step 2.1 invokes the general theorem including its zero-denominator convention and vanishing exceptional probability.')
 elif i.startswith('ex-'):
  checked('zero','Step 1.1 checks the weak parameter null explicitly; remaining positive scales and variance limits are computed in the verification.')
  if i=='ex-exact-versus-weak-two-sample-null':
   checked('degenerate','Step 2.1 checks positive pooled variances separately: one in the equal-law case and 3/2 in the distinct-law case.')
 return {'citations':citations,'derivations':steps,'routine_steps':[],'boundaries':boundaries}
rows=[]
for i in ids:
 s=Path('items',i+'.md').read_text()
 rows.append({'id':i,'kind':fm_value(s,'kind'),'title':fm_value(s,'title'),'deps':deps(s),'justified_by':[]})
out={'version':1,'kind':'owner-u-permutation-carrier-proposals','run':'bayesian-computational-statistics-62','batch':55,'status':'proposal-only; root owns integration, levels, hashes, readiness and certification','changed_ids':ids,'new_ids':[ids[0],ids[3]],'manifest_rows':rows,'contracts':{i:contract(i) for i in ids},'provenance_recommendations':{i:{'statement':'ai-altered','proof':'ai-altered'} for i in [ids[0],ids[1],ids[3],ids[5],ids[6]]},'consumer_dispositions':{
'cor-two-sample-permutation-exact-under-equal-distributions':'Checked unchanged. Measurability/zero-denominator convention retained; distribution invariance under P=Q suffices for arbitrary joint estimators, so definition clarification does not change its proof.',
'cex-extra-sqrt-m-after-standard-error-studentization-diverges':'Checked unchanged. Its sample-variance estimators depend on their own groups and satisfy the separate-group IID criterion; at P=Q the uniformly permuted groups have IID marginal laws, so its direct consistency assertion remains valid. Both divergence conclusions follow from the retained standard-normal S limit.',
'ex-same-mean-unequal-variance-studentized-permutation-test':'Checked/repaired. Separate-group sample variances satisfy sufficient triangular-IID criterion; row pooled variance corrected to 2-p_N→7/4. Raw and studentized scales remain 5/3 and7/3, and standard normal respectively.',
'ex-exact-versus-weak-two-sample-null':'Checked/repaired. Separate-group sample variances satisfy the criterion; distinct-law pooled limit3/2 separated from equal-law limit1. Finite exactness unchanged.',
'ex-studentized-rank-u-statistic-under-weak-null':'Checked/repaired. Two-group variance functions have direct conditional permutation consistency by finite-support empirical-frequency transfer, rather than invalid arbitrary joint-IID transfer.',
'thm-two-sample-u-statistic-permutation-clt-under-mixed-centering':'Checked/repaired as retained same-statement specialization of broad weak-null CLT.',
'thm-studentized-permutation-validity-under-mixed-assignment-centering':'Checked/repaired as retained all-assignment centered specialization with sound joint-estimator condition and separate-group sufficient criterion.',
'thm-studentized-two-sample-u-statistic-permutation-validity':'Previously escalated broad claim now proved, with necessary correction of actual joint-estimator premise; broad weak-null kernel scope preserved.'},'check_only_ids':['cor-two-sample-permutation-exact-under-equal-distributions','cex-extra-sqrt-m-after-standard-error-studentization-diverges'],'additional_changed_paths':['library/bayesian-computational-statistics/asymptotically-robust-permutation-tests.md','research/plan-bayesian-computational-statistics-track.md'],'outside_batch_consumers':[],'source_status':'2011 exact relevant full-text units read; 2013 supplement not retrieved, read or used; local complete variance/coupling proof replaces unsupported route.'}
Path('research/bayesian-computational-statistics-62-owner-u-permutation-proposals.json').write_text(json.dumps(out,indent=2)+'\n')
