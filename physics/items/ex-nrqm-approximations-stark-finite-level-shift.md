---
id: ex-nrqm-approximations-stark-finite-level-shift
aliases: [ nrqm-approximations-stark-finite-level-shift ]
kind: example
domain: physics
title: "A finite-level static Stark model: vanishing first-order shift, exact
  quadratic splitting and a finite check of the remainder bound"
status: draft
origin: session
dependency_level: 15
deps:
  [
    post-nrqm-approximations-static-finite-level-dipole-coupling,
    def-nrqm-central-framework-coulomb-and-hydrogen-model,
    pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy,
    thm-nrqm-coulomb-atomic-dipole-matrix-element-domain,
    thm-nrqm-orbital-and-spin-dipole-angular-selection-rules,
    def-nrqm-approximations-framework-perturbed-family-model,
    pthm-nrqm-approximations-nondegenerate-perturbation-expansion,
    def-nrqm-framework-quantities-and-units,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-countable-choice,
    def-axiom-of-choice,
    thm-nrqm-coulomb-kummer-recurrence-and-termination,
    lem-nrqm-central-exponential-moments,
    thm-nrqm-orbital-and-spin-associated-polynomial-normalization,
    thm-nrqm-orbital-and-spin-sphere-onb,
    lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates
  ]
dependency_roles:
  post-nrqm-approximations-static-finite-level-dipole-coupling: physical-assumption
  def-nrqm-central-framework-coulomb-and-hydrogen-model: formulation-prerequisite
  pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy: physical-result
  thm-nrqm-coulomb-atomic-dipole-matrix-element-domain: mathematical-premise
  thm-nrqm-orbital-and-spin-dipole-angular-selection-rules: mathematical-premise
  def-nrqm-approximations-framework-perturbed-family-model: formulation-prerequisite
  pthm-nrqm-approximations-nondegenerate-perturbation-expansion: physical-result
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-nrqm-coulomb-kummer-recurrence-and-termination: mathematical-premise
  lem-nrqm-central-exponential-moments: mathematical-premise
  thm-nrqm-orbital-and-spin-associated-polynomial-normalization: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional finite-level computation in the declared two-body
  Coulomb model with the adopted static finite-level dipole coupling: the
  compressed two-state Stark family built from the model's 1s-like and 2p-like
  relative states, the vanishing diagonal dipole matrix elements by the angular
  selection rule, the exact closed-form eigenvalues of the two-state family, the
  vanishing first-order and the exact second-order coefficient of the page's
  non-degenerate theorem, and a finite numeric check of the cubic remainder
  bound. The example identifies no laboratory atom, asserts no measured Stark
  shift or polarizability value, and states no transition or lifetime; the
  uncompressed linear-potential model is explicitly outside its scope."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        9.1.1 printed pages 205-206 (PDF pages 213-214): the quadratic Stark
        effect of the hydrogen ground state, Eb = eE<100|z|100> = 0 by parity
        and the second-order formula (9.16)-(9.17); and Section 9.1.2 printed
        pages 206-208 (PDF pages 214-216): the linear Stark effect from the
        diagonalisation of eEz within the degenerate n=2 subspace"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two
        State Systems', Section 5 'Ammonia molecule in an electric field'
        printed and PDF pages 11-16: the two-state ammonia Stark family H = E0 I
        - Delta sigma1 + muE sigma3 and its exact eigenvalues E0 +/-
        sqrt(mu^2E^2 + Delta^2), the exact template for the closed form used
        here"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b2\
        7e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
verification:
  precheck: pass
---

## Example

Adopt P1, P2 and P4 for the declared two-body Coulomb model of
[[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clause (d), in the
relative-coordinate factor $L^{2}(\mathbb R^{3};\mathbb C)$ with the dipole
operator $D_{j}=-qQ_{j}$ and the compressed finite-level coupling of
[[post-nrqm-approximations-static-finite-level-dipole-coupling]]. Use
the Coulomb mass parameter $m=\mu:=m_{1}m_{2}/(m_{1}+m_{2})$ and
$a_{\mu}:=\hbar^{2}/(\mu\kappa)>0$. Choose as
the finite-level subspace the **declared two-dimensional subspace**
$$W:=\operatorname{span}\{\psi_{1},\psi_{2}\}\subseteq L^{2}(\mathbb R^{3};\mathbb C),$$
where $\psi_{1}$ and $\psi_{2}$ are normalized bound states of the model with
angular labels $(n,l,m)=(1,0,0)$ and $(2,1,0)$ supplied by
[[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]], so that
$H_{\kappa}\psi_{1}=E_{1}\psi_{1}$, $H_{\kappa}\psi_{2}=E_{2}\psi_{2}$ with
$$E_{1}=-\frac{m\kappa^{2}}{2\hbar^{2}},\qquad E_{2}=-\frac{m\kappa^{2}}{8\hbar^{2}},\qquad \Delta:=E_{2}-E_{1}=\frac{3m\kappa^{2}}{8\hbar^{2}}>0 .$$
Choose the external field along the third axis of the declared frame,
$\mathbf E_{\rm ext}=(0,0,\mathcal E)$ with $\mathcal E>0$ in
$\mathrm{V\,m^{-1}}$, and use the dimensionless coupling
$$\lambda:=\frac{\mathcal E}{1\ \mathrm{V\,m^{-1}}},\qquad V:=-(1\ \mathrm{V\,m^{-1}})\,D^{W}_{3},$$
so that the Stark model of the postulate reads
$$H_{S}(\mathcal E)=H_{0}+\lambda V,\qquad H_{0}:=\Pi_{W}H_{\kappa}\big|_{W}=\begin{pmatrix}E_{1}&0\\0&E_{2}\end{pmatrix}$$
in the declared orthonormal basis. Then:

(a) the compression of the dipole matrix has the form
$$D^{W}_{1}=D^{W}_{2}=0,\qquad D^{W}_{3}=D_{\rm rel}\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad D_{\rm rel}:=|\langle\psi_{2},D_{3}\psi_{1}\rangle|>0,$$
with unit $\mathrm{C\,m}$, where the phase of $\psi_{2}$ is chosen to make
the off-diagonal entry positive. The local computation below gives
$D_{\rm rel}=128\sqrt2\,q a_{\mu}/243>0$ from the declared model parameters;
this is an exact model identity, with no measured value of any parameter.
The diagonal entries vanish by angular degree selection, and only $Q_{0}$
can contribute between the chosen $m=0$ states; nonvanishing is proved by
explicit radial and angular integration;

(b) $v=\|V\|=D_{\rm rel}(1\ \mathrm{V\,m^{-1}})$ in joules and the family
$H_{S}$ has the exact eigenvalues
$$F_{\pm}(\mathcal E)=\frac{E_{1}+E_{2}}{2} \pm\sqrt{\Bigl(\frac{\Delta}{2}\Bigr)^{2}+\bigl(D_{\rm rel}\mathcal E\bigr)^{2}},$$
the lower branch $F_{-}$ being the model's followed label for
dimensionless couplings $0\le\lambda<R:=\Delta/(8v)$, equivalently
$0\le\mathcal E<\Delta/(8D_{\rm rel})$, with $\Delta$ playing the role of the gap $g$;

(c) the page's perturbation theorem applies with nondegenerate label
$E_{1}$ (gap $\Delta$), and gives the vanishing first-order shift
$$E'(0)=0$$
and the exact second-order coefficient
$$E''(0)=-\frac{2D_{\rm rel}^{2}(1\ \mathrm{V\,m^{-1}})^{2}}{\Delta},$$
equivalently the quadratic Stark shift
$$F_{-}(\mathcal E)=E_{1}-\frac{D_{\rm rel}^{2}\mathcal E^{2}}{\Delta} +O(\mathcal E^{4});$$

(d) the finite remainder check at half the perturbation radius
$\lambda=R/2$, equivalently $\mathcal E=\Delta/(16D_{\rm rel})$, gives the exact remainder
$$\Bigl|F_{-}+\frac{\Delta}{256}-E_{1}\Bigr|=\Delta\,\frac{129-16\sqrt{65}}{256}=\frac{\Delta}{256(129+16\sqrt{65})}<\frac{\Delta}{32768}<\frac{\Delta}{32},$$
so the page's cubic bound is satisfied at this coupling with a wide margin;

(e) scope: the computation is conditional on the declared truncated
two-state model and the adopted coupling; it identifies no laboratory atom,
reports no measured shift and no polarizability value, asserts no transition
rate, and does not treat the uncompressed linear potential
$-\mathbf E_{\rm ext}\cdot\mathbf D$. The postulate excludes that model and
proves its common-test-domain expectations unbounded below for every nonzero
uniform field; no full energy-form domain is used here.

## Verification

**Given:** the declared two-body Coulomb model with charges $\mp q$, coupling
$\kappa>0$, relative-coordinate states $\psi_{1},\psi_{2}$ of angular labels
$(1,0,0)$, $(2,1,0)$ and energies $E_{1},E_{2}$; the finite-level subspace
$W=\operatorname{span}\{\psi_{1},\psi_{2}\}$; the dipole operators $D_{j}=-qQ_{j}$
of the postulate with $m=\mu$ and $a_{\mu}=\hbar^{2}/(\mu\kappa)$; the field $\mathbf E_{\rm ext}=(0,0,\mathcal E)$; the
coupling $\lambda$, matrix $V$ and family $H_{S}$ of the Example; the Axiom
of Countable Choice and the Axiom of Choice as the choice hypotheses of the
cited suppliers.

[L1] **Spectrum and eigenstates.** For the one-centre Coulomb model
$H_{\kappa}$, the normalized bound states $\psi_{nlm}$ satisfy
$H_{\kappa}\psi_{nlm}=E_{n}\psi_{nlm}$ with
$E_{n}=-m\kappa^{2}/(2\hbar^{2}n^{2})$, so in particular
$E_{1}=-m\kappa^{2}/(2\hbar^{2})$ and
$E_{2}=-m\kappa^{2}/(8\hbar^{2})$ and $\Delta=3m\kappa^{2}/(8\hbar^{2})>0$;
states with different labels are orthogonal
([[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]]).

[L2] **Dipole domain and angular selection rule.** Each $Q_{j}$ is
self-adjoint on its maximal domain
$D(Q_{j})=\{\psi:\xi_{j}\psi\in L^{2}\}$ and all bound states lie in
$D(Q_{j})$; for the spherical components $Q_{0}=x_{3}$,
$Q_{\pm}=(x_{1}\pm ix_{2})/\sqrt2$ the angular matrix element
$\langle Y_{l'm'},Q_{q}|_{S^{2}}Y_{lm}\rangle$ can be nonzero only if
$l'=l+1,m'=m+q$ or $l\ge1,l'=l-1,m'=m+q$
([[thm-nrqm-coulomb-atomic-dipole-matrix-element-domain]] clauses (a), (b),
[[thm-nrqm-orbital-and-spin-dipole-angular-selection-rules]]). In particular
with $l=l'=0$ or $l=l'=1$ the angular factor vanishes, and with $m=m'=0$ only
$q=0$ can contribute; for the pair $(l,m)=(0,0)$ and $(l',m')=(1,0)$ the
rule allows $l'=l+1$, $m'=m+0$.

[L3] **The model's theorem.** Under the model's hypotheses with a simple
label, for every real $|\lambda|<R=g/(8v)$ the followed label is the unique
spectral value in $|z-E|=g/2$, and the coefficients and remainder bound of
[[pthm-nrqm-approximations-nondegenerate-perturbation-expansion]] hold
([[pthm-nrqm-approximations-nondegenerate-perturbation-expansion]],
[[def-nrqm-approximations-framework-perturbed-family-model]]).

[L4] **Elementary algebra.** For real $u$, $\sqrt{u^{2}}=|u|$; and $\sqrt{1+t}=1+\tfrac12t-\tfrac18t^{2}+O(t^{3})$ as the analytic square root near $t=0$. Also $129^{2}-(16\sqrt{65})^{2}=1$, so $129-16\sqrt{65}=1/(129+16\sqrt{65})>0$.

[L5] **Explicit local integral data.** With $a=a_{\mu}$, the Kummer regular solutions for $(n,l)=(1,0),(2,1)$ have $j=n-l-1=0$, $L_{0}^{(1)}=L_{0}^{(3)}=1$, decay rates $1/a,1/(2a)$, and normalized positive radial representatives $u_{10}=2a^{-3/2}r e^{-r/a}$, $u_{21}=(2\sqrt6)^{-1}a^{-5/2}r^{2}e^{-r/(2a)}$ ([[thm-nrqm-coulomb-kummer-recurrence-and-termination]] clauses (c)-(e)). Their normalizations follow locally from $\int_0^{\infty}r^{k}e^{-br}dr=k!/b^{k+1}$ ([[lem-nrqm-central-exponential-moments]]). The sphere family is orthonormal with the positive real representatives $Y_{00}=1/\sqrt{4\pi}$, $Y_{10}=\sqrt{3/(4\pi)}\,\Omega_{3}$, obtained from $P_{0}=1$, $P_{1}=t$ and the normalizing integral ([[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]] clauses (c), (e), [[thm-nrqm-orbital-and-spin-sphere-onb]]); sphere integration is $d\sigma=\sin\theta\,d\theta\,d\varphi$ ([[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]]). No nonzero radial assertion is inferred from the necessary selection rule.

**Proof technique:** direct; evaluate the compressed dipole matrix by the
angular selection rule and the explicit nonzero radial/angular integral,
diagonalize the resulting Hermitian two-by-two
family exactly, read off the page's coefficients, and compare the exact
closed form with the second-order truncation at the test coupling.

**Given:** the data of the Example and [L1]-[L5].

1.1 [The compressed matrices and their nonzero entry] Write $a=a_{\mu}$. From [L5], $\|u_{10}\|_{2}^{2}=4a^{-3}2!/(2/a)^{3}=1$ and $\|u_{21}\|_{2}^{2}=(24a^{5})^{-1}4!/(1/a)^{5}=1$; the explicit Kummer solutions therefore give the normalized bound states with the stated labels. For their positive real representatives, $\int_{S^{2}}Y_{10}\Omega_{3}Y_{00}\,d\sigma=(\sqrt3/(4\pi))2\pi\int_{-1}^{1}t^{2}dt=1/\sqrt3$. Their radial dipole integral is $\int_{0}^{\infty}r u_{21}u_{10}\,dr=(1/\sqrt6)a^{-4}4!/(3/(2a))^{5}=256a/(81\sqrt6)>0$. The absolutely convergent factorization [L2] yields $\langle\psi_{210},Q_{3}\psi_{100}\rangle=128\sqrt2 a/243>0$. Since $D_{3}=-qQ_{3}$, its matrix element is $-128\sqrt2 q a/243$ before rephasing. Set $\psi_{1}=\psi_{100}$ and $\psi_{2}=-\psi_{210}$ to obtain the positive off-diagonal value $D_{\rm rel}=128\sqrt2 q a/243$ without changing energies, labels or normalization. By [L2], bound states lie in all coordinate domains; all diagonal entries vanish by degree selection, and the off-diagonal $Q_{\pm}$ entries vanish by weight selection. Thus $D^{W}_{1}=D^{W}_{2}=0$ and $D^{W}_{3}=D_{\rm rel}\sigma_{1}$ with $D_{\rm rel}>0$, proving (a). [L1, L2, L5, given, algebra]

1.2 [The two-state family] In the orthonormal basis $(\psi_{1},\psi_{2})$ one has $\Pi_{W}H_{\kappa}|_{W}=\operatorname{diag}(E_{1},E_{2})$ by [L1] and orthogonality of distinct eigenstates; with $v:=D_{\rm rel}(1\ \mathrm{V\, m^{-1}})$ in joules one has $V=-v\sigma_{1}$ and $$H_{S}=\begin{pmatrix}E_{1}&-v\lambda\\-v\lambda&E_{2}\end{pmatrix}.$$ Since $\sigma_{1}$ is Hermitian with $\|\sigma_{1}\|=1$, $V$ is bounded self-adjoint with norm $v$; the exact eigenvalues of a matrix $\begin{pmatrix}a&w\\w&b\end{pmatrix}$ with real $w$ are $\frac{a+b}{2}\pm\sqrt{(\frac{a-b}{2})^{2}+w^{2}}$, verified by the same direct eigenvector computation as in the two-level example of this page with $g:=\Delta$, $w:=-v\lambda$; substituting $a=E_{1},b=E_{2}$ gives clause (b). [L1, given, algebra]

2.1 [Coefficients] The label $E=E_{1}$ is simple with gap $\Delta$ (the second level is $E_{2}=E_{1}+\Delta$ and there are no further levels in the two-dimensional model); the perturbation $V$ is bounded self-adjoint with norm $v$; hence [L3] applies for $|\lambda|v<\Delta/8$. Since $V$ has vanishing diagonal, $E'(0)=\langle V\psi_{1},\psi_{1}\rangle=0$. The reduced inverse on $Q_{0}W=\mathbb C\psi_{2}$ is $S=\Delta^{-1}|\psi_{2}\rangle\langle\psi_{2}|$, so $SV\psi_{1}=-(v/\Delta)\psi_{2}$ and $VSV\psi_{1}=(v^{2}/\Delta)\psi_{1}$, giving $E''(0)=-2v^{2}/\Delta$; substituting $v=D_{\rm rel}(1\ \mathrm{V\,m^{-1}})$ and expanding the closed form of clause (b) by [L4] gives the displayed quadratic Stark shift. This is clause (c). [L3, L4, step 1.2, algebra]

3.1 [The finite remainder check at the true half radius] At $\mathcal E=\Delta/(16D_{\rm rel})$, $\lambda v=D_{\rm rel}\mathcal E=\Delta/16$ and hence $\lambda=R/2$ for $R=\Delta/(8v)$. The page's bound is $Rv(1/2)^{3}/(1-1/2)=Rv/4=\Delta/32$. The exact lower branch satisfies $F_{-}=E_{1}+\Delta/2-\sqrt{\Delta^{2}/4+\Delta^{2}/256}=E_{1}+\Delta(8-\sqrt{65})/16$, whereas its quadratic truncation is $E_{1}-(\lambda v)^{2}/\Delta=E_{1}-\Delta/256$. Therefore $|F_{-}-E_{1}+\Delta/256|=\Delta(129-16\sqrt{65})/256=\Delta/[256(129+16\sqrt{65})]$ by [L4]. Since $129+16\sqrt{65}>128$, this remainder is strictly less than $\Delta/32768$, and consequently less than $\Delta/32$. This proves (d) without a decimal approximation. [L3, L4, step 2.1, algebra]

4.1 [Scope] The argument used the declared two-state truncation, the adopted coupling, the model's exact spectrum and the page's theorem; no laboratory atom, measured shift, polarizability, transition rate or uncompressed linear potential entered. The exclusion of the uncompressed static perturbation is the postulate's scope clause; clause (e) holds. [step 1.1, step 2.1, step 3.1, given] ∎

## Remarks

- **Why the first-order shift vanishes.** The two declared states have
  angular degrees $0$ and $1$; the coordinate multiplier changes the degree
  by exactly one, so the diagonal matrix elements of $D_{j}$ vanish and the
  leading shift is quadratic, exactly as in the textbook quadratic Stark
  effect. The nonzero dipole modulus is computed locally as
  $D_{\rm rel}=128\sqrt2 q a_{\mu}/243$ from the model's parameters;
  no measured charge, length or dipole value is supplied.
- **Shared two-by-two identity.** The eigenvalue formula for
  $\begin{pmatrix}a&w\\w&b\end{pmatrix}$ used in step 1.2 was verified
  directly on this page in
  [[ex-nrqm-approximations-two-level-finite-gap-correction]];
  the present example re-derives it by the same substitution, so no
  dependency on the sibling example is claimed.
- **Relation to the linear Stark effect.** A degenerate truncation (for
  instance the four states with $n=2$) would instead be governed by
  [[pthm-nrqm-approximations-degenerate-first-order-splitting]] and could
  produce a first-order shift; the present two-state nondegenerate
  truncation produces the quadratic shift, and no statement about a
  laboratory line is made in either case.
