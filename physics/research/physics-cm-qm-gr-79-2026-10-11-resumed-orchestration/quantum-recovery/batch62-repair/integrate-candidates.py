from pathlib import Path
import re,json,hashlib
base=Path('research/physics-cm-qm-gr-79-2026-10-11-resumed-orchestration/quantum-recovery')
r=base/'batch62-research'; items=Path('items')
def adddep(s,x):
 m=re.search(r'^deps: \[(.*)\]$',s,re.M); ds=m.group(1).split(', ')
 if x not in ds:ds.append(x)
 s=s[:m.start()]+ 'deps: ['+', '.join(ds)+']'+s[m.end():]
 if '  '+x+':' not in s:s=s.replace('dependency_roles:\n','dependency_roles:\n  '+x+': mathematical-premise\n')
 return s
def copy(src,target):
 s=(r/src).read_text();
 if 'dependency_level:' not in s:s=s.replace('origin: pipeline\n','origin: pipeline\ndependency_level: 0\n')
 (items/(target+'.md')).write_text(s);return s
m=(r/'spin-draft/def-nrqm-many-body-framework-declared-fixed-n-model.candidate.md').read_text()
x=(r/'exchange-draft/model-coulomb-paragraphs.md').read_text()
c=x.split('**(c)(ii) Coulomb interaction.** ')[1].split('**(d)(ii) Spatial Coulomb case.**')[0].strip()
d=x.split('**(d)(ii) Spatial Coulomb case.** ')[1].strip()
m=re.sub(r'\(ii\) \*Coulomb interaction\.\*.*?(?=\n\*\*\(d\))',lambda _: '(ii) *Coulomb interaction.* '+c+'\n',m,flags=re.S)
m=re.sub(r'\(ii\) \*Spatial Coulomb case\.\*.*?(?=\n\(iii\))',lambda _: '(ii) *Spatial Coulomb case.* '+d+'\n',m,flags=re.S)
m=m.replace('S_N','\\mathcal S_N')
m=m.replace('Let $H_{\\mathrm{sc}}:=K+M_V$ be the scalar operator of [[thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator]] (a), (b) for the potential $V(X)=\\sum_iV_{\\mathrm{ext}}(x_i)+\\sum_{i<j}W(x_i-x_j)$, and define the labelled operator $H_{\\mathrm{lab}}:=H_{\\mathrm{sc}}\\otimes I_{\\mathcal S_N}$ in the finite component reading. Clause (c) of that supplier, with component count $M$, gives self-adjointness on', 'For $V(X)=\\sum_iV_{\\mathrm{ext}}(x_i)+\\sum_{i<j}W(x_i-x_j)$ define $H_{\\mathrm{lab}}=-\\hbar^2\\Delta_X/(2m)+M_V$ componentwise. The CC-only [[lem-nrqm-many-body-cc-bounded-spatial-realization]], with $a_i=\\hbar^2/(2m)$ and component count $M$, supplies self-adjointness on')
m=m.replace('case $V=V_{\\mathrm{ext}}$ summed over slots of the bounded-fixed-$N$ theorem.','case of the external potential summed over slots of the stated bounded or Coulomb realization.')
m=m.replace('operator is $h:=K_1+V_{\\mathrm{ext}}(Q)$ with domain','operator is $h:=K_1+V_{\\mathrm{ext}}(Q)$, self-adjoint by [[lem-nrqm-many-body-cc-bounded-spatial-realization]] with $N=1$, $M=2s+1$ and $a_1=\\hbar^2/(2m)$, with domain')
m=adddep(adddep(m,'lem-nrqm-many-body-cc-bounded-spatial-realization'),'thm-kato-rellich')
m=m.replace(', thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator','').replace('  thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator: mathematical-premise\n','')
(items/'def-nrqm-many-body-framework-declared-fixed-n-model.md').write_text(m)
for src,target in [('exchange-draft/candidate.md','pthm-nrqm-many-body-exchange-energy-splitting'),('gibbs-equality-draft/candidate.md','pthm-nrqm-many-body-thermal-equilibrium-characterization'),('fixed-n-criterion-draft/def-nrqm-many-body-framework-entropy-and-free-energy.candidate.md','def-nrqm-many-body-framework-entropy-and-free-energy'),('fixed-n-criterion-draft/post-nrqm-many-body-canonical-equilibrium-ensemble.candidate.md','post-nrqm-many-body-canonical-equilibrium-ensemble'),('fixed-n-criterion-draft/lem-nrqm-many-body-spectral-mean-and-defined-trace-product.candidate.md','lem-nrqm-many-body-spectral-mean-and-defined-trace-product')]:copy(src,target)
id='lem-nrqm-many-body-fixed-n-countable-mode-partition-criterion'; s=copy('fixed-n-criterion-draft/'+id+'.candidate.md',id)
for dep in ['def-unbounded-integral-against-a-pvm','lem-unbounded-pvm-integral-is-well-defined-and-closed']:s=adddep(s,dep)
s=s.replace('With the extended positive trace (allowed to be $+\\infty$),','Define the extended positive trace of a bounded positive operator as its nonnegative diagonal sum in the supplied occupation basis; its independence of any other supplied orthonormal basis is proved below. With this trace (allowed to be $+\\infty$),')
s=s.replace('([[def-projection-valued-measure]], [[thm-bounded-borel-pvm-integral]]).','([[def-projection-valued-measure]], [[thm-bounded-borel-pvm-integral]]). The unbounded identity integral has the scalar squared-moment domain and is obtained by bounded coordinate truncations ([[def-unbounded-integral-against-a-pvm]], [[lem-unbounded-pvm-integral-is-well-defined-and-closed]]).')
s=s.replace('Its unbounded coordinate integral of the identity function has exactly the squared-energy domain of step 2.1.','The scalar measure of a vector $\\psi=\\sum_ca_cb_c^\\sigma$ is $\\sum_c|a_c|^2\\delta_{E_c}$, so [F4] gives the identity-integral domain exactly $\\sum_cE_c^2|a_c|^2<\\infty$; bounded spectral truncations converge to the displayed coordinate action there. This PVM is also uniquely determined by that operator: if another PVM represents it, the zero norm of $(H_N^\\sigma-E_c)b_c^\\sigma$ forces its scalar measure at $b_c^\\sigma$ to be supported at $E_c$. Its projections therefore act as $\\mathbf1_B(E_c)$ on every $b_c^\\sigma$, and density gives equality on the whole sector.')
(items/(id+'.md')).write_text(s)
# Add the two new mathematical suppliers immediately before the physical model.
p=Path('research/physics-cm-qm-gr-79-2026-10-11-batch-62.pages.json')
if not p.exists():p=next(Path('research').glob('*batch-62.pages.json'))
data=json.loads(p.read_text());print(str(p),type(data).__name__)
(base/'batch62-repair/integrated-carrier-hashes.json').write_text(json.dumps({q.stem:hashlib.sha256(q.read_bytes()).hexdigest() for q in items.glob('*many-body*.md')},indent=2)+'\n')
