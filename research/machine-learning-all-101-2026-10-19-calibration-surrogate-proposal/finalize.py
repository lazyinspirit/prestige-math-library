from pathlib import Path
import json,re,copy
b=Path('research/machine-learning-all-101-2026-10-19-calibration-surrogate-proposal'); run='machine-learning-all-101-2026-10-19'
wiki='https://en.wikipedia.org/wiki/Scoring_rule'
for p in (b/'proposed/items').glob('*.md'):
 t=p.read_text()
 t=re.sub(r'    - title: "[^\n]*(?:Gneiting|GNEITING)[^\n]*"\n      url: "[^\n]+"\n','',t)
 if p.stem in ['def-proper-scoring-rule','thm-log-and-brier-strict-propriety']:
  marker='sources:\n  references:\n';assert marker in t
  t=t.replace(marker,marker+'    - title: "Wikipedia contributors, Scoring rule: Definitions; Proper scoring rules; Categorical variables (logarithmic and Brier examples)"\n      url: "'+wiki+'"\n')
 if p.stem=='def-proper-scoring-rule':
  t=re.sub(r'\[Gneiting and Raftery, full article PDF\].*',r'[Wikipedia, Scoring rule](https://en.wikipedia.org/wiki/Scoring_rule): Definitions and Proper scoring rules specify forecasts, expected score, loss orientation, properness, and strictness; Categorical variables gives the finite-label logarithmic and Brier examples. The measurable extended nonnegative-loss conventions are stated explicitly here; the logarithmic reward example is negated.',t)
 if p.stem=='thm-log-and-brier-strict-propriety':
  t=t.replace("Gneiting and Raftery §§2.1, 3.1–3.2 give the entropy/strict-propriety characterization and categorical logarithmic and Brier examples.","The distinct encyclopedia treatment gives the scoring-rule conventions and categorical formulas (with the logarithmic reward negated). Strictness is proved locally from the declared logarithm supplier, rather than imported from a representation theorem.")
 if p.stem=='thm-posterior-forecast-minimizes-scoring-risk':
  t=t.replace('The Gneiting–Raftery treatment proves pointwise strict propriety; the local proof integrates that pointwise property against the posterior law.','The local definition supplies pointwise propriety; this proof integrates that defining inequality against the posterior law and does not import any scoring-rule representation theorem.')
 p.write_text(t)
for suffix in ['coverage.json','pages.json','proof-contracts.json','source-evidence.json','notes.md']:
 p=Path('research')/(run+'-batch-8.'+suffix);(b/'before'/p.name).write_bytes(p.read_bytes())
c=json.loads((b/'before'/(run+'-batch-8.coverage.json')).read_text())
records=json.loads((b/'source-disposition/proposed-owner-disposition.json').read_text())['records']
for page in c['pages']:
 for s in page['sources']:
  if 'Gneiting' not in s.get('title',''):continue
  old=copy.deepcopy(s['source_resolution']);s['historical_source_resolution']=old
  proposed=copy.deepcopy(next(x['proposed_source_resolution'] for x in records if x['page']==page['page']))
  proposed['reason']='Owner disposition proposed for guarded integration: cease mathematical reliance on this source, preserving all harvested claims via the complete local alternatives below and the genuinely distinct natively fetched encyclopedia definition treatment. The complete Gneiting–Raftery archive body WAS successfully recovered and its relevant sections read. It is not unavailable. The native source object retains its exhausted persisted allowance and has no fetch stamp. This record supplies alternative backing, not a fetch, proof-approval, attempt reset, or assertion of six failed body requests.'
  proposed['search_summary']='Original author/publisher/university/mirror routes and autonomous archive searches are preserved verbatim in searches, attempts, recovery_attempts, and historical_source_resolution. The successful archived 530000-byte PDF (SHA256 2d10f1552e922bfcb37b040bc47ed5eb0ab91c5596182887be637e438300c566) is retained in source-disposition reading evidence. Independent Scoring rule encyclopedia work was read and normally fetched/stamped for the finite-label definition. Remaining results have complete local proofs using declared suppliers; no result is dropped.'
  s['source_resolution']=proposed
  s['locator']='Historical reading: §§1, 2.1–2.2, 3.1–3.2, printed pp. 359–365; Theorems 1–3, categorical Examples 1 and 3. Original-source reliance retired via documented alternatives; archive was recovered, not unavailable.'
  # Both before source objects and historical resolution preserve the original exact locators/history.
new=json.loads((b/'source-disposition/independent-scoring-rule.coverage.json').read_text())['pages'][0]['sources'][0]
c['pages'][0]['sources'].append(new)
# Preserve the actual plan claim as a separate demonstrated false statement, not an asserted theorem.
page=c['pages'][0]; key='canonical_results' if 'canonical_results' in page else 'results'
page.setdefault(key,[]).append({'name':'Original unadjusted ML-07 surrogate-regret implication, refuted by independent scale and zero-score witnesses','disposition':'included','item':'fs-unadjusted-surrogate-regret-bound'})
(b/'proposed'/(run+'-batch-8.coverage.json')).write_text(json.dumps(c,indent=2)+'\n')
m=json.loads((b/'before'/(run+'-batch-8.pages.json')).read_text());m[0]['items'].append({'id':'fs-unadjusted-surrogate-regret-bound','kind':'false-statement','title':'The unadjusted surrogate-regret bound has the wrong scale and tie convention','deps':['def-classification-calibration-of-a-surrogate'],'justified_by':[],'dependency_level':3})
(b/'proposed'/(run+'-batch-8.pages.json')).write_text(json.dumps(m,indent=2)+'\n')
print('staged independent citation retirement, 10-source coverage, and 17-item manifest')
