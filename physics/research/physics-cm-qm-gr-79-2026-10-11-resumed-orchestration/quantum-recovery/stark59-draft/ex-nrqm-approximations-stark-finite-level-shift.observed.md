---
id: ex-nrqm-approximations-stark-finite-level-shift
aliases: [nrqm-approximations-stark-finite-level-shift]
kind: example
domain: physics
title: "A finite-level static Stark model: vanishing first-order shift, exact quadratic splitting and a finite check of the remainder bound"
status: draft
origin: session
dependency_level: 15
deps: [post-nrqm-approximations-static-finite-level-dipole-coupling, def-nrqm-central-framework-coulomb-and-hydrogen-model, pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy, thm-nrqm-coulomb-atomic-dipole-matrix-element-domain, thm-nrqm-orbital-and-spin-dipole-angular-selection-rules, def-nrqm-approximations-framework-perturbed-family-model, pthm-nrqm-approximations-nondegenerate-perturbation-expansion, def-nrqm-framework-quantities-and-units, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, def-nrqm-observables-framework-observable-and-outcome-law, def-countable-choice, def-axiom-of-choice]
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
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional finite-level computation in the declared two-body Coulomb model with the adopted static finite-level dipole coupling: the compressed two-state Stark family built from the model's 1s-like and 2p-like relative states, the vanishing diagonal dipole matrix elements by the angular selection rule, the exact closed-form eigenvalues of the two-state family, the vanishing first-order and the exact second-order coefficient of the page's non-degenerate theorem, and a finite numeric check of the cubic remainder bound. The example identifies no laboratory atom, asserts no measured Stark shift or polarizability value, and states no transition or lifetime; the uncompressed linear-potential model is explicitly outside its scope."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.1.1 printed pages 205-206 (PDF pages 213-214): the quadratic Stark effect of the hydrogen ground state, Eb = eE<100|z|100> = 0 by parity and the second-order formula (9.16)-(9.17); and Section 9.1.2 printed pages 206-208 (PDF pages 214-216): the linear Stark effect from the diagonalisation of eEz within the degenerate n=2 subspace"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two State Systems', Section 5 'Ammonia molecule in an electric field' printed and PDF pages 11-16: the two-state ammonia Stark family H = E0 I - Delta sigma1 + muE sigma3 and its exact eigenvalues E0 +/- sqrt(mu^2E^2 + Delta^2), the exact template for the closed form used here"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b27e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
verification:
  precheck: pass
---

## Example

Adopt P1, P2 and P4 for the declared two-body Coulomb model of
[[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clause (d), in the
relative-coordinate factor $L^{2}(\mathbb R^{3};\mathbb C)$ with the dipole
operator $D_{j}=qQ_{j}$ and the compressed finite-level coupling of
[[post-nrqm-approximations-static-finite-level-dipole-coupling]]. Choose as
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
declared as a **model parameter** with unit $\mathrm{C\,m}$: the diagonal
entries vanish because $\psi_{1}$ (ground state) and $\psi_{2}$ (an $l=1$
state) each have well-defined angular degree $l$, while the coordinate
multipliers change the angular degree by exactly one, and in the chosen
$m=0$ states only the $Q_{0}$ component has a nonvanishing overlap; the
number $D_{\rm rel}$ is not computed on this page;

(b) $v=\|V\|=D_{\rm rel}(1\ \mathrm{V\,m^{-1}})$ in joules and the family
$H_{S}$ has the exact eigenvalues
$$F_{\pm}(\mathcal E)=\frac{E_{1}+E_{2}}{2} \pm\sqrt{\Bigl(\frac{\Delta}{2}\Bigr)^{2}+\bigl(D_{\rm rel}\mathcal E\bigr)^{2}},$$
the lower branch $F_{-}$ being the model's followed label for
$0\le\mathcal E<g/(8v)$-range couplings with $\Delta$ playing the role of the
gap $g$;

(c) the page's perturbation theorem applies with nondegenerate label
$E_{1}$ (gap $\Delta$), and gives the vanishing first-order shift
$$E'(0)=0$$
and the exact second-order coefficient
$$E''(0)=-\frac{2D_{\rm rel}^{2}(1\ \mathrm{V\,m^{-1}})^{2}}{\Delta},$$
equivalently the quadratic Stark shift
$$F_{-}(\mathcal E)=E_{1}-\frac{D_{\rm rel}^{2}\mathcal E^{2}}{\Delta} +O(\mathcal E^{4});$$

(d) the finite remainder check at half the perturbation radius
$\mathcal E=g/(16v)=\Delta/(16D_{\rm rel})$ gives the exact remainder
$$\Bigl|F_{-}+\frac{\Delta}{64}-E_{1}\Bigr| =\Delta\,\frac{33-8\sqrt{17}}{64}\approx2.37\cdot10^{-4}\,\Delta \le\frac{\Delta}{32},$$
so the page's cubic bound is satisfied at this coupling with a wide margin;

(e) scope: the computation is conditional on the declared truncated
two-state model and the adopted coupling; it identifies no laboratory atom,
reports no measured shift and no polarizability value, asserts no transition
rate, and does not treat the uncompressed linear potential
$-\mathbf E_{\rm ext}\cdot\mathbf D$ (whose model energy form has no lower
bound and is explicitly excluded by the postulate).

## Verification

**Given:** the declared two-body Coulomb model with charges $\mp q$, coupling
$\kappa>0$, relative-coordinate states $\psi_{1},\psi_{2}$ of angular labels
$(1,0,0)$, $(2,1,0)$ and energies $E_{1},E_{2}$; the finite-level subspace
$W=\operatorname{span}\{\psi_{1},\psi_{2}\}$; the dipole operators $D_{j}=qQ_{j}$
of the postulate; the field $\mathbf E_{\rm ext}=(0,0,\mathcal E)$; the
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

[L4] **Elementary algebra.** For real $u$: $\sqrt{u^{2}}=|u|$;
$\sqrt{1+t}=1+\tfrac12t-\tfrac18t^{2}+O(t^{3})$ as the analytic square root
near $t=0$; and $8\sqrt{17}=32.9848\ldots$, so $33-8\sqrt{17}
=0.01515\ldots>0$.

**Proof technique:** direct; evaluate the compressed dipole matrix by the
angular selection rule, diagonalize the resulting Hermitian two-by-two
family exactly, read off the page's coefficients, and compare the exact
closed form with the second-order truncation at the test coupling.

**Given:** the data of the Example and [L1]-[L4].

1.1 [The compressed matrices] By [L2], each $D^{W}_{j}$ is a compression of a self-adjoint operator to $W$, hence a Hermitian $2\times2$ matrix with unit $\mathrm{C\,m}$; the diagonal entries $\langle\psi_{1},D_{j}\psi_{1}\rangle$ and $\langle\psi_{2},D_{j}\psi_{2}\rangle$ factor into a radial integral times an angular integral with $l'=l$, which vanishes by the selection rule; and the off-diagonal entries factor with angular labels $(l,m)=(0,0)$, $(l',m')=(1,0)$, for which only the component $q=0$, that is $D_{3}$, can contribute. Choosing the phase of $\psi_{2}$ so that the surviving number is real and positive gives $D^{W}_{1}=D^{W}_{2}=0$ and $D^{W}_{3}=D_{\rm rel}\sigma_{1}$ with $D_{\rm rel}=|\langle\psi_{2},D_{3}\psi_{1}\rangle|>0$, to be read as a model parameter. This is clause (a). [L2, given, algebra]

1.2 [The two-state family] In the orthonormal basis $(\psi_{1},\psi_{2})$ one has $\Pi_{W}H_{\kappa}|_{W}=\operatorname{diag}(E_{1},E_{2})$ by [L1] and orthogonality of distinct eigenstates; with $v:=D_{\rm rel}(1\ \mathrm{V\, m^{-1}})$ in joules one has $V=-v\sigma_{1}$ and $$H_{S}=\begin{pmatrix}E_{1}&-v\lambda\\-v\lambda&E_{2}\end{pmatrix}.$$ Since $\sigma_{1}$ is Hermitian with $\|\sigma_{1}\|=1$, $V$ is bounded self-adjoint with norm $v$; the exact eigenvalues of a matrix $\begin{pmatrix}a&w\\w&b\end{pmatrix}$ with real $w$ are $\frac{a+b}{2}\pm\sqrt{(\frac{a-b}{2})^{2}+w^{2}}$, verified by the same direct eigenvector computation as in the two-level example of this page with $g:=\Delta$, $w:=-v\lambda$; substituting $a=E_{1},b=E_{2}$ gives clause (b). [L1, given, algebra]

2.1 [Coefficients] The label $E=E_{1}$ is simple with gap $\Delta$ (the second level is $E_{2}=E_{1}+\Delta$ and there are no further levels in the two-dimensional model); the perturbation $V$ is bounded self-adjoint with norm $v$; hence [L3] applies for $|\lambda|v<\Delta/8$. Since $V$ has vanishing diagonal, $E'(0)=\langle V\psi_{1},\psi_{1}\rangle=0$. The reduced inverse on $Q_{0}W=\mathbb C\psi_{2}$ is $S=\Delta^{-1}|\psi_{2}\rangle\langle\psi_{2}|$, so $SV\psi_{1}=-(v/\Delta)\psi_{2}$ and $VSV\psi_{1}=(v^{2}/\Delta)\psi_{1}$, giving $E''(0)=-2v^{2}/\Delta$; substituting $v=D_{\rm rel}(1\ \mathrm{V\,m^{-1}})$ and expanding the closed form of clause (b) by [L4] gives the displayed quadratic Stark shift. This is clause (c). [L3, L4, step 1.2, algebra]

3.1 [The finite remainder check] At $\mathcal E=\Delta/(16D_{\rm rel})$ one has $\lambda v=\Delta/8$, so $|\lambda|=R/2$ with $R=\Delta/(8v)$, and the page's bound gives $Rv(1/2)^{3}/(1-1/2)=Rv/4=\Delta/32$. The exact lower branch is $$F_{-}=\frac{E_{1}+E_{2}}{2}-\frac{\Delta}{2}\sqrt{1+\tfrac1{16}} =E_{1}+\frac{\Delta}{2}-\frac{\Delta\sqrt{17}}{8} =E_{1}-\frac{\Delta(\sqrt{17}-4)}{8},$$ while the second-order truncation is $E_{1}+\lambda^{2}E''(0)/2=E_{1}-\Delta/64$; the exact remainder is therefore $$\Bigl|F_{-}-E_{1}+\frac{\Delta}{64}\Bigr| =\Delta\Bigl|\frac{1}{64}-\frac{\sqrt{17}-4}{8}\Bigr| =\Delta\,\frac{33-8\sqrt{17}}{64},$$ which by [L4] is $\approx2.37\cdot10^{-4}\Delta\le\Delta/32$; the comparison is exact algebra. This is clause (d). [L3, L4, step 2.1, algebra]

4.1 [Scope] The argument used the declared two-state truncation, the adopted coupling, the model's exact spectrum and the page's theorem; no laboratory atom, measured shift, polarizability, transition rate or uncompressed linear potential entered. The exclusion of the uncompressed static perturbation is the postulate's scope clause; clause (e) holds. [step 1.1, step 2.1, step 3.1, given] ∎

## Remarks

- **Why the first-order shift vanishes.** The two declared states have
  angular degrees $0$ and $1$; the coordinate multiplier changes the degree
  by exactly one, so the diagonal matrix elements of $D_{j}$ vanish and the
  leading shift is quadratic, exactly as in the textbook quadratic Stark
  effect. The example does not compute the radial number $D_{\rm rel}$: that
  is a model parameter here, and a numerical value would require a separate
  matrix-element computation.
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
