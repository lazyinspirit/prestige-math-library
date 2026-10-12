from pathlib import Path
import json,hashlib,datetime
phys=Path('physics');out=phys/'research/physics-cm-qm-gr-79-2026-10-11-resumed-orchestration/quantum-recovery/batch64-research/complex-coefficient-draft'
d='def-nrqm-light-matter-framework-spectral-transition-and-detection';e='pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients';s='pthm-nrqm-light-matter-stimulated-dipole-drive-transitions';ex='ex-nrqm-light-matter-two-level-dipole-drive-check';ids=[d,e,s];texts={i:(phys/'items'/f'{i}.md').read_text() for i in ids};changes={i:[] for i in ids}
def change(i,old,new,location,allmatches=False):
 n=texts[i].count(old);assert n>=1 and (allmatches or n==1),(i,location,n)
 changes[i].append({'location':location,'before':old,'after':new,'occurrences':n});texts[i]=texts[i].replace(old,new)
def section(i,start,end,new,loc):
 a=texts[i].index(start);b=texts[i].index(end,a);change(i,texts[i][a:b],new,loc)
def step(i,num,new):change(i,next(x for x in texts[i].splitlines() if x.startswith(num+' ')),new,'Proof '+num)
change(d,r'c_{j}:=\bigl\langle v_{b},\,D^{W}_{j}v_{a}\bigr\rangle_{\mathbb C^{d}}',r'c_{j}:=\bigl\langle D^{W}_{j}v_{a},\,v_{b}\bigr\rangle_{\mathbb C^{d}}','Definition (c) coefficients')
section(d,'In the notation of\n','**(d) Single-vertex emission',r'''The pairing is linear in its first argument and conjugate-linear in its
second. Thus $c_j$ is the actual coefficient of $v_b$ in $D_j^Wv_a$,
and Hermiticity gives $\langle D_j^Wv_b,v_a\rangle=\overline{c_j}$.
These are exactly the coefficients of
[[thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity]]
clause (c), with no conjugation or change of the transverse mode vectors;
its mode vector and measure are the present $M$ and $\nu_b$.

''','Definition (c) supplier convention')
change(d,'''whose denominator is finite and strictly positive by
[[lem-nrqm-light-matter-first-order-photon-energy-law]] clause (b). The model
reads it as follows: the **declared single-vertex one-photon preparation** is
the unit vector''',r'''whose denominator is finite and strictly positive by
[[lem-nrqm-light-matter-first-order-photon-energy-law]] clause (b). This
probability law is defined independently of $\eta_0$, including $\eta_0=0$.
Its amplitude-based preparation reading additionally requires $A_b(\cdot,t)\ne0$.
For $t>0$ and $M\ne0$, this is equivalent to $\eta_0\ne0$, since
$\|A_b(\cdot,t)\|^2=\eta_0^2t\int K_t(E-\Delta)\,d\nu_b(E)$ and the integral
is positive. Under this condition the **declared single-vertex
one-photon preparation** is the unit vector''','Definition (e) nonzero amplitude condition')
change(d,'''[[def-nrqm-photons-framework-radiation-sector-and-quantum-assignments]] clause
(e)). A **detected photon energy**''',r'''[[def-nrqm-photons-framework-radiation-sector-and-quantum-assignments]] clause
(e)). When $\eta_0=0$, $A_b(\cdot,t)=0$ and no preparation obtained by
normalizing that emission amplitude is declared; the formal law $P_{b,t}$
remains the probability measure defined above. A **detected photon energy**''','Definition (e) zero coupling branch')
change(e,r'coefficients $c_{j}=\langle v_{b},D^{W}_{j}v_{a}\rangle$',r'coefficients $c_{j}=\langle D^{W}_{j}v_{a},v_{b}\rangle$','Statement coefficients')
section(e,'(c) (absorption mirror)','(d) (scope)',r'''(c) (absorption mirror) let $g\in\mathfrak h$ be a unit vector, let
$\Psi_1^g(t)$ be the first interaction-picture Dyson term with initial
vector $\Phi_0=v_b\otimes g$, defined as a norm integral using the
finite-photon-sector creation/contraction action, and define the physical
transition amplitudes with the output vector in the first slot,
$$\alpha_{\mathrm{em}}(t):=\langle\Psi_1(t),v_b\otimes g\rangle,\qquad \alpha_{\mathrm{abs}}(t):=\langle\Psi_1^g(t),v_a\otimes\Omega\rangle.$$
Then for every $t\ge0$,
$$\alpha_{\mathrm{em}}(t)=-\frac{i\eta_0}{\hbar}\int_0^te^{-i\Delta s/\hbar}\langle M,e^{-is\varepsilon/\hbar}g\rangle_{\mathfrak h}\,ds,\qquad \alpha_{\mathrm{abs}}(t)=-\frac{i\eta_0}{\hbar}\int_0^te^{+i\Delta s/\hbar}\overline{\langle M,e^{-is\varepsilon/\hbar}g\rangle_{\mathfrak h}}\,ds,$$
and hence
$$\alpha_{\mathrm{abs}}(t)=-\overline{\alpha_{\mathrm{em}}(t)},\qquad |\alpha_{\mathrm{abs}}(t)|=|\alpha_{\mathrm{em}}(t)|.$$
This compares the reverse transitions for the same level pair, the same
unit one-photon vector $g$ and the same real coupling $\eta_0$, retaining
arbitrary complex Hermitian dipole matrices and transverse mode vectors;

''','Statement (c) physical reverse amplitudes')
change(e,r'\langle v_{b},e^{isH_{a}/\hbar}D^{W}_{j}v_{a}\rangle',r'\langle e^{isH_{a}/\hbar}D^{W}_{j}v_{a},v_{b}\rangle','F3 both copies: b coefficient',True)
change(e,r'\langle v_{a},e^{isH_{a}/\hbar}D^{W}_{j}v_{b}\rangle',r'\langle e^{isH_{a}/\hbar}D^{W}_{j}v_{b},v_{a}\rangle','F3 both copies: a coefficient',True)
step(e,'1.1',r'''1.1 [The first Dyson term in the one-photon sector at level $b$] By [F1] and [F2], $\Psi_1(t)=-(i/\hbar)\int_0^tV(s)\Psi_0\,ds$ with $V(s)=e^{isH_0/\hbar}Be^{-isH_0/\hbar}$. The free initial phase is $e^{-isH_0/\hbar}\Psi_0=e^{-isE_a/\hbar}\Psi_0$, and $B\Psi_0=\eta_0\sum_jD_j^Wv_a\otimes g_j$. In the linear-first convention, the coefficient of $v_b$ in $e^{isH_a/\hbar}D_j^Wv_a$ is $\langle e^{isH_a/\hbar}D_j^Wv_a,v_b\rangle=e^{isE_b/\hbar}c_j$ by [F3]. Consequently $Q_bV(s)\Psi_0=v_b\otimes\eta_0 e^{-is\Delta/\hbar}e^{is\varepsilon/\hbar}M$. The bounded projection passes through the vector integral, giving $Q_b\Psi_1(t)=v_b\otimes[-(i\eta_0/\hbar)\int_0^te^{-is\Delta/\hbar}e^{is\varepsilon/\hbar}M\,ds]=v_b\otimes A_b(\cdot,t)$ by the definition of $A_b$. Equivalently, for every $f\in\mathfrak h$, $\langle\Psi_1(t),v_b\otimes f\rangle=\langle A_b(\cdot,t),f\rangle$, with all coefficients in the linear first slot. [F1, F2, F3, F4, F7, algebra]''')
step(e,'2.2',r'''2.2 [Absorption mirror] For a unit $g\in\mathfrak h$, the first Dyson term with initial vector $\Phi_0=v_b\otimes g$ is well defined as a norm integral: the free evolution preserves the one-photon sector, and the creation/contraction bounds [F1] bound each vertex uniformly from that sector to the vacuum plus two-photon sectors. The sector maps are bounded and free evolution is strongly continuous, giving a norm-continuous integrand; these sector formulas supply the extension even when $g\notin D(\varepsilon)$. No full Dyson-series assertion for this initial vector is used. Set $h_s=e^{-is\varepsilon/\hbar}g$. The vacuum component of $\phi(g_j)h_s$ is $\langle h_s,g_j\rangle\Omega$ in the linear-first convention. The coefficient of $v_a$ in $e^{isH_a/\hbar}D_j^Wv_b$ is $e^{isE_a/\hbar}\overline{c_j}$ by [F3]; thus $\langle V(s)\Phi_0,v_a\otimes\Omega\rangle=\eta_0e^{is\Delta/\hbar}\sum_j\overline{c_j}\langle h_s,g_j\rangle=\eta_0e^{is\Delta/\hbar}\overline{\langle M,h_s\rangle}$. Integrating with $-i/\hbar$ in the first slot gives the displayed absorption amplitude. Step 1.1 and unitarity give $\alpha_{\mathrm{em}}=-(i\eta_0/\hbar)\int_0^te^{-is\Delta/\hbar}\langle e^{is\varepsilon/\hbar}M,g\rangle ds=-(i\eta_0/\hbar)\int_0^te^{-is\Delta/\hbar}\langle M,h_s\rangle ds$. Since $\eta_0$ is real, conjugating this scalar integral proves $\alpha_{\mathrm{abs}}=-\overline{\alpha_{\mathrm{em}}}$ and equal moduli, including $t=0$ or $\eta_0=0$. This proves (c) for the full complex couplings. [F1, F3, F4, F7, step 1.1, algebra]''')
change(e,'- **The mirror is an algebraic identity, not a detailed-balance theorem.** Clause (c) relates two first-order amplitudes of the same model that differ by the sign of the detuning; it assumes nothing about populations, temperatures or equilibrium. The equal-modulus statement is a statement about $\\alpha_{\\mathrm{abs}}$ and $\\alpha_{\\mathrm{em}}$ on opposite detunings.',r'''- **The mirror is an algebraic identity, not a detailed-balance theorem.** Clause (c) relates the reverse first-order amplitudes of the same level pair and the same one-photon vector by $\alpha_{\mathrm{abs}}=-\overline{\alpha_{\mathrm{em}}}$. It assumes nothing about populations, temperatures or equilibrium; equality of moduli follows from the Hermitian coupling and the linear-first amplitude convention.''','Remarks mirror identity')
change(e,r'$\phi(g)=A_{-}(g)+A_{+}(g)$ with $A_{+}(g)=A_{-}(g)^{*}$, and $\phi(g)\Omega=g$',r'$\phi(g)=A_-(g)+A_+(g)$ with $A_+(g)=A_-(g)^*$, $\phi(g)\Omega=g$, and on the one-photon sector $\|\phi(g)h\|\le2\sqrt2\|g\|\|h\|$ by the finite-sector creation/contraction bounds','F1 both copies: finite sector bound',True)
change(e,'[[thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains]] clauses (a),(d)','[[thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains]] clauses (a),(c),(d)','F1 both copies: exact bound clause',True)
change(s,r'$A_{ki}(t,s)=e^{i\Delta\tau/\hbar}\langle U(t,s)v_{i},v_{k}\rangle$',r'$A_{ki}(t,s)=e^{iE_k\tau/\hbar}\langle U(t,s)v_{i},v_{k}\rangle$','Statement source60 amplitude transfer')
change(s,r'$K:=\sup_{r\in I}\|H_{\mathrm d}(r)\|/\hbar$',r'$K:=\sup_{r\in I}\|V(r)\|/\hbar$ with $V(r):=-\sum_jE_{\mathrm{ext},j}(r)D_j^W$','Statement source60 remainder constant transfer')
section(s,'(c) (equal stimulated coefficients)','(d) (exact two-level identifications)',r'''(c) (equal stimulated coefficients) for the two-level case $d=2$ with
orthonormal eigenvectors $v_{\uparrow},v_{\downarrow}$, $H_av_{\uparrow}
=E_{\uparrow}v_{\uparrow}$, $H_av_{\downarrow}=E_{\downarrow}v_{\downarrow}$
and $\Delta=E_{\uparrow}-E_{\downarrow}>0$, the actual upward and downward
first-order amplitudes under the same real prescribed field obey
$$A^{(1)}_{\downarrow\uparrow}(t,s)=-\overline{A^{(1)}_{\uparrow\downarrow}(t,s)}.$$
In particular their squared moduli, the model's first-order stimulated
emission and absorption coefficients, are equal. For the monochromatic
field of (b), the upward co-rotating component at detuning
$\Delta-\hbar\omega$ and the reverse downward component at the opposite
detuning $\hbar\omega-\Delta$ have equal moduli as well; reversing the
transition conjugates its matrix element and swaps the two exponential
components, with the same overall minus-conjugation relation;

''','Statement (c) stimulated mirror')
change(s,r'The family $H_{\mathrm d}(r)=H_{a}+V(r)$ with $V(r)=-\sum_{j}E_{\mathrm{ext},j}(r)D^{W}_{j}$ is the bounded norm-continuous class of the driven model, $U$ is its unique unitary propagator, and the amplitude of clause (e)',r'The finite-dimensional family $H_{\mathrm d}(r)=H_a+V(r)$ with $V(r)=-\sum_jE_{\mathrm{ext},j}(r)D_j^W$ belongs to the norm-continuous class and also to the bounded-control class of the driven model, with $K=\sup_I\|V(r)\|/\hbar$; their propagators agree by uniqueness. Its amplitude is $A_{ki}=e^{iE_k\tau/\hbar}\langle U(t,s)v_i,v_k\rangle$ as in clause (e)','F1 both actual copies: source60 transfer',True)
step(s,'2.1',r'''2.1 [Equal stimulated coefficients] Let $w(r):=\langle V(r)v_{\downarrow},v_{\uparrow}\rangle$. The real prescribed field and Hermitian $D_j^W$ make $V(r)$ Hermitian, so [F2] gives $\langle V(r)v_{\uparrow},v_{\downarrow}\rangle=\overline{w(r)}$. Step 1.1 gives $A^{(1)}_{\uparrow\downarrow}=-(i/\hbar)\int_s^te^{i\Delta(r-s)/\hbar}w(r)dr$ and $A^{(1)}_{\downarrow\uparrow}=-(i/\hbar)\int_s^te^{-i\Delta(r-s)/\hbar}\overline{w(r)}dr=-\overline{A^{(1)}_{\uparrow\downarrow}}$, proving equal squared moduli for arbitrary complex Hermitian couplings. In the monochromatic decomposition of step 1.2, conjugation exchanges the positive and negative drive exponentials, so the upward $a_+$ and downward $a_-$ have equal moduli at opposite detunings, including their resonant limits. This proves (c). [F2, step 1.1, step 1.2, algebra]''')
for i,t in texts.items():
 raw=(phys/'items'/f'{i}.md').read_bytes();(out/f'{i}.observed.md').write_bytes(raw);(out/f'{i}.candidate.md').write_text(t)
(out/'replacements.json').write_text(json.dumps(changes,indent=2)+'\n')
suppliers=['thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity','thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains','thm-nrqm-fock-and-equilibrium-vacuum-emission-dyson-convergence','pthm-nrqm-driven-dynamics-first-order-transition-amplitude','def-nrqm-light-matter-framework-finite-level-coupled-model','lem-nrqm-light-matter-first-order-photon-energy-law',ex]
b={'version':1,'type':'research-only-complex-coefficient-draft','recorded_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'scope':'confirmed64 linear-first coefficient/physical mirror/zero-coupling normalization and exact source60 amplitude transfer only','status':'pending lead independent integration and full affected consumer cone','source41':'read-only current contract; no source edits, audit reopening or cap change','subjects':[],'suppliers':[],'two_level_example_disposition':'Current example uses output-first <We_down,e_up>, real Pauli entry and modulus consistently; no coefficient-convention correction needed. No separate example audit verdict.'}
for i in ids:b['subjects'].append({'id':i,'path':str(phys/'items'/f'{i}.md'),'observed_raw_sha256':hashlib.sha256((out/f'{i}.observed.md').read_bytes()).hexdigest(),'candidate_raw_sha256':hashlib.sha256((out/f'{i}.candidate.md').read_bytes()).hexdigest(),'locations':[x['location'] for x in changes[i]],'public_interface_changed':True})
for i in suppliers:
 p=phys/'items'/f'{i}.md';raw=p.read_bytes();(out/f'{i}.supplier-observed.md').write_bytes(raw);b['suppliers'].append({'id':i,'path':str(p),'raw_sha256':hashlib.sha256(raw).hexdigest(),'use':'exact current local prerequisite or scoped transfer context; no renewed audit'})
(out/'bindings.json').write_text(json.dumps(b,indent=2)+'\n')
(out/'integration-notes.md').write_text('''Linear-first physical c_j=<D_jv_a,v_b> is exactly source41 golden-rule(c). Conjugating coefficients without conjugating physical mode vectors changes interference for complex Hermitian/transverse data. Candidates compute the actual Dyson projection directly. Physical amplitudes are output-first; absorption=−conjugate(emission) for the same actual gap/g and real eta0, with arbitrary complex matrices/modes retained. First absorption term is a finite-photon-sector norm integral even for g outside D(epsilon), with no full non-vacuum Dyson-series assertion.\n\nP_b,t remains a formal probability law for M!=0,t>0 independent of eta0. Normalizing A_b requires A_b!=0, equivalent to eta0!=0 under these hypotheses. eta0=0 produces no amplitude-derived unit preparation.\n\nStimulated64 has correct <Dv_i,v_k> coefficients but misses the reverse minus sign. Necessary source60 transfer corrections are e^{i E_k tau} and K=sup||V||/hbar. Both repeated native F1/F3 copies are corrected without restructuring. Real Pauli two-level example needs no coefficient-convention edit; inspected bytes are retained. No separate example audit verdict is claimed.\n\nLead reconciles manifests/contracts/readiness and all consumers (golden-rule physics/detection/model-comparison and scope). Native notes' conjugate-coefficient rationale becomes stale. No live/source41/readiness/control edits or audit rounds.\n''')
print('Wrote 3 candidates and exact replacement/source guard artifacts.')
