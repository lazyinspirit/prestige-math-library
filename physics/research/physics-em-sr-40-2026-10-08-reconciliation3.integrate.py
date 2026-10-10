import json,copy,hashlib,datetime
from pathlib import Path
run='physics-em-sr-40-2026-10-08';r=Path(__file__).parent;archive=json.loads((r/f'{run}-reconciliation3.before.json').read_text()); hash=lambda s:hashlib.sha256(s.encode()).hexdigest()
files={p:json.loads(p.read_text()) for p in r.glob(f'{run}-batch-*.pages.json')};loc={x['id']:(p,page,x) for p,ps in files.items() for page in ps for x in page['items']};subjects=[]
for row in json.loads((r/f'{run}-reconciliation3-core-proposal.json').read_text())['subjects']:subjects.append(row['after'])
for name in ['point-retarded-consumer','causal-dispersion']:
 d=json.loads((r/f'{run}-{name}-proposal.json').read_text());subjects+=d['proposed_subjects']
subjects.append(json.loads((r/f'{run}-closed-form-provenance-proposal.json').read_text())['proposed_item'])
for x in subjects:
 p,page,before=loc[x['id']];page['items'][page['items'].index(before)]=copy.deepcopy(x);loc[x['id']]=(p,page,page['items'][page['items'].index(x)])
# Stable batch22 exact supplier interface reconciliation, keeping every branch and signed field formula.
p,page,before=loc['thm-em-retarded-root-and-fields'];x=copy.deepcopy(before)
x['statement']=x['statement'].replace(r'\le C\,',r'\le |C|\,')
x['statement']=x['statement'].replace('Both $E$ and $B$ are continuous','Both $E$ and $B$ are $C^1$')
start=x['statement'].index(r'and $\langle\Phi,\psi\rangle:=');end=x['statement'].index('Then these pairings are finite',start)
x['statement']=x['statement'][:start]+r'''and define the retarded-history pairings by the explicit integrals $\langle\Phi,\psi\rangle:=(q/\varepsilon_0)\int_{\mathbb R}(K\circledast\psi)(z(s),s)\,ds$, $\langle\Upsilon,\psi\rangle:=\mu_0q\int_{\mathbb R}z'(s)(K\circledast\psi)(z(s),s)\,ds$, componentwise in the second case. These are the history-integral interpretation supplied by clause(b) of [[lem-em-point-retarded-potential-and-fields]], not ordinary distribution action on a noncompact test. '''+x['statement'][end:]
x['statement']=x['statement'].replace('equivalently, $\\Phi$ and $\\Upsilon$ are the regular distributions of the $C^2$ functions', 'equivalently, $\\Phi$ and $\\Upsilon$ are the regular distributions of the locally integrable zero extensions to $\\Gamma$ of the $C^2$ functions')
x['strategy']=x['strategy'].replace(r'|E_{\mathrm{vel}}|\le C',r'|E_{\mathrm{vel}}|\le |C|')
x['strategy']=x['strategy'].replace('the identification of $\\Phi,\\Upsilon$ as the regular distributions of the $C^2$ potentials', 'the identification of $\\Phi,\\Upsilon$ as the regular distributions of the locally integrable zero extensions of the $C^2$ potentials')
x['strategy']=x['strategy'].replace('its proof is the delta substitution $\\int\\delta(t-f(s))g(s)\\,ds=g(s^*)/|f\'(s^*)|$ with $f\'(s^*)=-\\kappa$, together with the global $C^1$ change of variables; ', 'its proof bounds the explicit history integrals on a fixed-support observation cylinder, uses integrability of $1/|y|$ near zero, and applies the actual nonnegative-Borel and L1 $C^1$ change-of-variables suppliers; ')
x['strategy']=x['strategy'].replace('The argument of [[lem-em-global-retarded-root]]', 'The $C^3$ branch of [[lem-em-global-retarded-root]]')
x['strategy']+=' For the all-time history the point-current proper-graph hypothesis is automatic: compact ambient support bounds its time projection. The signed constant C remains in every field formula; absolute-value estimates use |C|. The witness q=−4pi epsilon0,z=0 gives |E_vel|=r^−2 while a signed-C upper bound would be negative.'
page['items'][page['items'].index(before)]=x
# Clarify conventional name without changing the correct dissipative matrix formula.
for id in ['thm-em-causal-dispersive-response','ex-em-causal-response-and-radiation-prerequisites-hypothesis-boundaries']:
 p,page,x=loc[id]
 for field in ['statement','strategy']:x[field]=x[field].replace('Hermitian part','Hermitian dissipative part')
# All-time current use and matching root branch in actual point supplier.
p,page,x=loc['lem-em-point-retarded-potential-and-fields'];x['strategy']=x['strategy'].replace('$C^3$ is a special case.', '$C^3$ is a special case, and its all-time graph is proper because a compact ambient set bounds the time coordinate.')
# Persist this first reviewed portion; levels, new weak suppliers and full evidence follow in a later explicit pass.
changed=[]
for p,ps in files.items():
 out=json.dumps(ps,ensure_ascii=False,indent=2)+'\n'
 if p.read_text()!=out:p.write_text(out);changed.append(str(p))
original={x['id']:x for f in archive['files'] if '-batch-' in f['path'] and f['path'].endswith('.pages.json') for page in json.loads(f['raw']) for x in page['items']}
current={x['id']:(page['id'],x) for ps in files.values() for page in ps for x in page['items']}
changes=[]
for id,(home,x) in current.items():
 if id in original and original[id]!=x:changes.append({'id':id,'home':home,'before':original[id],'after':x,'before_statement_sha256':hash(original[id]['statement']),'after_statement_sha256':hash(x['statement']),'changed_fields':[k for k in set(original[id])|set(x) if original[id].get(k)!=x.get(k)]})
(r/f'{run}-reconciliation3.integration-stage1.json').write_text(json.dumps({'run':run,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'focused reviewed portion integrated; no readiness refresh; further weak-piecewise supplier integration and currency checks owed','items':len(current),'changes':changes,'changed_manifest_files':changed},ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'items':len(current),'changes':len(changes),'changed_manifest_files':changed},indent=2))
