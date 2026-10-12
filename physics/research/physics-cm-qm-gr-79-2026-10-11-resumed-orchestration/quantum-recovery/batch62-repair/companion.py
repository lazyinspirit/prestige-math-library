from pathlib import Path
import re,json,yaml
base=Path('research/physics-cm-qm-gr-79-2026-10-11-resumed-orchestration/quantum-recovery');items=Path('items')
def dep(s,x):
 m=re.search(r'^deps: \[(.*)\]$',s,re.M); ds=m.group(1).split(', ')
 if x not in ds:ds.append(x)
 s=s[:m.start()]+'deps: ['+', '.join(ds)+']'+s[m.end():]
 if '  '+x+':' not in s:s=s.replace('dependency_roles:\n','dependency_roles:\n  '+x+': mathematical-premise\n')
 return s
p=items/'def-nrqm-many-body-framework-one-body-reduced-operator.md';s=p.read_text().replace('the same sector projections); it is the partial trace of $\\rho$ over $N-1$\nof the labelled factors.','the same sector projections). Explicitly, for the sector inclusion $j$ put $\\widetilde\\rho=j\\rho j^*$ on $K^{\\otimes N}$, and for the regrouping unitary $J_N:K^{\\otimes N}\\to K\\widehat\\otimes K^{\\otimes(N-1)}$ put $\\gamma_\\rho=\\operatorname{Tr}_{K^{\\otimes(N-1)}}(J_N\\widetilde\\rho J_N^{-1})$. Here $K^{\\otimes0}=\\mathbb C$, so $N=1$ gives $\\gamma_\\rho=\\rho$. A zero sector has no preparation and makes this clause vacuous.');p.write_text(s)
p=items/'pthm-nrqm-many-body-thermal-occupation-predictions.md';s=p.read_text()
s=s.replace('has $\\operatorname{tr}F=1+e^{-\\beta(\\varepsilon_1-\\mu)}$ and occupation mean','has $Z=1+e^{-\\beta(\\varepsilon_1-\\mu)}$, $\\operatorname{tr}F=1$, and occupation mean')
s=s.replace('Apply [F2] at a single mode: on $\\mathbb C^2$ the weights $e^{-\\beta(\\varepsilon_1-\\mu)k}$, $k\\in\\{0,1\\}$, give $\\operatorname{tr}F=1+e^{-\\beta(\\varepsilon_1-\\mu)}$ and occupation mean','For the stated arbitrary real $\\varepsilon_1,\\mu$, direct evaluation in the two occupation vectors gives the unnormalized positive operator $G=\\sum_{k=0}^1q^kT_{u_k,u_k}$ with $q=e^{-\\beta(\\varepsilon_1-\\mu)}>0$ and $\\operatorname{tr}G=Z=1+q$. Thus $F=G/Z$ has trace one and occupation mean')
for d in ['lem-nrqm-many-body-fixed-n-countable-mode-partition-criterion','lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma','thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction']:s=dep(s,d)
s=s.replace('**Given:** the data of the statement and [F1]-[F4].','**Given:** the data of the statement and [F1]-[F5].')
f5='''[F5] The finite-particle bosonic and fermionic occupation bases for a supplied countable mode basis are constructed in [[lem-nrqm-many-body-fixed-n-countable-mode-partition-criterion]] (a); the vacuum is the scalar degree-zero sector of [[thm-nrqm-fock-and-equilibrium-hilbert-direct-sum-construction]]. On a supplied countable orthonormal basis, arbitrary real diagonal weights define a self-adjoint operator on its exact squared-weight domain, with finite coordinate sums as a graph core ([[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]] (a)-(e)).

'''
s=s.replace('## Proof\n',f5+'## Proof\n')
s=s.replace('1.3 [The product criterion] Applying the criterion','1.3 [The product criterion] Declare the occupation-space effective generator $G$ by $G b_n=\\sum_j(\\varepsilon_j-\\mu)n_j b_n$, including the vacuum with eigenvalue zero; its domain is the set of coefficient families whose squared-energy weighted sum is finite. The occupation bases and [F5] make this a supplied self-adjoint realization of $H-\\mu\\mathcal N$ as required by the ensemble postulate. In the finite bosonic-partition case all shifted energies are positive, so $G\\ge0$. In the finite fermionic-partition case summability implies $\\varepsilon_j\\to\\infty$, hence only finitely many shifted energies are negative, and every fermionic configuration contains each at most once; their finite sum is a lower bound for $G$. Coordinate spectral projections and bounded exponential integration then identify $e^{-\\beta G}$ with the diagonal occupation weights. Applying the criterion')
s=s.replace('This proves (c). [F2, F3, algebra]','This proves (c); normalized weights are the additionally adopted Gibbs preparation, not a derivation of physical equilibration. [F2, F3, F5, algebra]')
p.write_text(s)
# Four local math prerequisites, ordered before the physical model.
p=Path('research/physics-cm-qm-gr-79-2026-10-11-batch-62.pages.json');a=json.loads(p.read_text()); page=a[0]; ids={x['id'] for x in page['items']}; new=['lem-nrqm-many-body-fixed-n-countable-mode-partition-criterion','lem-nrqm-many-body-spectral-mean-and-defined-trace-product']
for id in new:
 if id in ids:continue
 s=(items/(id+'.md')).read_text();_,f,b=s.split('---',2);fm=yaml.safe_load(f)
 template=dict(next(x for x in page['items'] if x['id']=='lem-nrqm-many-body-finite-spin-product-identification'))
 for k in ['id','kind','domain','title','deps','dependency_roles','dependency_level']:template[k]=fm[k]
 template['statement']=b.lstrip(); template.pop('physical_scope',None)
 index=next(i for i,x in enumerate(page['items']) if x['id']=='def-nrqm-many-body-framework-declared-fixed-n-model');page['items'].insert(index,template)
p.write_text(json.dumps(a,indent=2)+'\n')
print('inventory',sum(len(x['items']) for x in a))
