---
id: thm-qft-example-soft-current-angular-coherent
kind: theorem
domain: mathematics
library: mathematics
title: Soft-current angular norm and exact cutoff coherent model
status: published
origin: pipeline
physical_scope: null
dependency_level: 4
deps:
  - def-countable-choice
  - def-qft-example-data
  - def-qft-fock-and-test-spaces
  - def-euclidean-inner-product
  - lem-countable-iff-surjection-from-n
  - def-qft-photon-transverse-space
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - lem-euclidean-chart-measure-agrees-with-polar-surface-measure
  - cor-c-one-change-of-variables-for-l-one-functions
  - lem-qft-segal-weyl-domain
  - lem-qft-second-quantized-spectrum
  - lem-qft-qed-coherent-ir-obstruction
  - prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn
  - thm-product-of-countable
  - thm-logarithm-derivative-and-integral
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - def-complex-exponential
  - lem-complex-exponential-series-converges-everywhere
  - thm-complex-exponential-addition-and-real-extension
  - def-factorial-and-falling-factorial
  - def-integer-power
  - thm-exponential-is-strictly-increasing
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-example-data: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-countable-iff-surjection-from-n: mathematical-premise
  def-qft-photon-transverse-space: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  lem-qft-segal-weyl-domain: mathematical-premise
  lem-qft-second-quantized-spectrum: mathematical-premise
  lem-qft-qed-coherent-ir-obstruction: mathematical-premise
  prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn: mathematical-premise
  thm-product-of-countable: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-nonnegative-integral-zero-iff-zero-almost-everywhere: mathematical-premise
  def-complex-exponential: mathematical-premise
  lem-complex-exponential-series-converges-everywhere: mathematical-premise
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  def-integer-power: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 2, §2.3
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html
    - title: David Tong, Quantum Field Theory, Chapter 6, §6.2.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
    - title: M. Srednicki, Quantum Field Theory, author-hosted prepublication draft, §§55 and 59
      url: https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

This is a conditional mathematical theorem about the prescribed current and
free coherent-state construction defined below, under the exact supplier
interfaces [F2] and [L1]. Here “soft current” is only a name for the displayed
rational function: no scattering-amplitude factorization or approximation
claim is made. The weak-zero and no-strong-limit conclusions are conditional
on [L1]; the projective-ray conclusion is proved separately in step 7.1.

Assume $\mathrm{AC}_\omega$, the constants and conventions of
[[def-qft-example-data]], and that the two supplier interfaces [F2]
and [L1] hold exactly as stated below. Let $I$ be a finite, possibly empty,
set of leg labels. A leg $i\in I$ carries an energy $E_i>0$ in joules,
a dimensionless velocity $v_i=\mathbf v_{i,\rm phys}/c\in\mathbb R^3$ with
$\mathbf v_{i,\rm phys}$ in m s$^{-1}$ and
$|v_i|<1$, a dimensionless charge number $Q_i\in\mathbb R$ (physical charge
$eQ_i$ coulombs), and an orientation sign $\eta_i\in\{-1,1\}$, with
$\eta_i=-1$ for an incoming leg and $+1$ for an outgoing leg. Require charge
balance $\sum_{i\in I}\eta_iQ_i=0$. Use
$h=\operatorname{diag}(1,-1,-1,-1)$ and
$h(a,b)=a^0b^0-\mathbf a\cdot\mathbf b$ for algebraic four-vector
contractions. For $n\in S^2:=\{x\in\mathbb R^3:|x|=1\}$ and energy
$\omega>0$ in joules, put
$$ p_i=E_i(1,v_i),\qquad q=\omega(1,n),\qquad K:S^2\to\mathbb R^4,\quad K(n)=\sum_{i\in I}\eta_iQ_i\frac{(1,v_i)}{1-v_i\cdot n}. $$
Each $p_i$ has positive energy and
$h(p_i,p_i)=E_i^2(1-|v_i|^2)>0$; this timelike condition is the precise
meaning of “massive” here, with rest mass
$m_i=E_i\sqrt{1-|v_i|^2}/c^2>0$. The prescribed current is the function
$J(q)=\sum_{i\in I}\eta_iQ_i\,p_i/h(p_i,q)$ on
$\{\omega(1,n):\omega>0,\ n\in S^2\}$. Since
$h(p_i,q)=E_i\omega(1-v_i\cdot n)>0$, this equals $K(n)/\omega$.
Thus $K$ is dimensionless and $J(q)$ has units $\mathrm J^{-1}$.
Write $K(n)=(K^0(n),\mathbf K(n))$, let $P_T(n)=I-n\otimes n$, and
$K_\perp(n)=P_T(n)\mathbf K(n)$. Define $d\Omega$ as Euclidean chart
surface measure on $S^2$ and
$$ C=\frac{g^2}{2(2\pi)^3}\int_{S^2}|K_\perp(n)|^2\,d\Omega(n)\ge0. $$
Here $g>0$ is the dimensionless coupling of [[def-qft-example-data]] and
$\lambda,\Lambda$ are energy cutoffs in joules. Write $\mathbf q=\omega n$
for the spatial energy coordinate, distinct from the four-vector
$q=(\omega,\mathbf q)$ above. For $\mathbf q\ne0$, put $\omega=|\mathbf q|$
and $n=\mathbf q/|\mathbf q|$ and define
$$ h_\lambda(\mathbf q)=g\frac{K_\perp(n)}{\omega}\mathbf1_{\{\lambda<\omega<\Lambda\}},\qquad 0<\lambda<\Lambda; $$
Set $h_\lambda(0)=0$ and regard $h_\lambda$ as a function of $\mathbf q$.
Define
$\mathcal H_{E,T}:=\{h\in L^2(\mathbb R^3,d^3\mathbf q/[(2\pi)^3 2|\mathbf q|];\mathbb C^3):\mathbf q\cdot h(\mathbf q)=0\ {\rm a.e.}\}$,
with the componentwise Hermitian integral pairing linear in its second
variable. On this energy-coordinate transverse Hilbert space the exact norm is
$$ N_\lambda=\|h_\lambda\|^2=C\log(\Lambda/\lambda). $$
The energy-coordinate wavefunction has units $\mathrm J^{-1}$ and its
one-particle measure has units $\mathrm J^2$, so $N_\lambda$ and $C$ are
dimensionless; its value at $q=0$ is immaterial to this $L^2$ vector.
Under the canonical unitary $U:\mathcal H_{E,T}\to\mathcal H_T$ specified and proved in step 3.1,
the same vector is represented by the length-coordinate vector $f_\lambda$
defined as follows. Set $f_\lambda(0)=0$ and, for $k\ne0$, define
$$ f_\lambda(k)=\mathbf1_{\{\lambda/(\hbar c)<|k|<\Lambda/(\hbar c)\}} |k|^{-3/2}b(k/|k|),\qquad b(n)=\frac{gK_\perp(n)}{\sqrt{2(2\pi)^3}},\qquad \int_{S^2}|b|^2\,d\Omega=C. $$
Here $b$ is dimensionless and the $L^2(d^3k)$ wavefunction $f_\lambda$ has
units $\mathrm m^{3/2}$.
The normalized coherent vector
$\Psi_\lambda=W(-i\sqrt2 f_\lambda)\Omega
=\exp(-N_\lambda/2)\epsilon(f_\lambda)$ has squared norm in sector $m$
$$ s_m=\exp(-N_\lambda)\frac{N_\lambda^m}{m!},\qquad \sum_{m\ge0}s_m=1,\qquad \sum_{m\ge0}m s_m=N_\lambda, $$
with $N_\lambda^0=1$ also when $N_\lambda=0$.
These are Hilbert-space sector norms and their index sum; no measured
probability is asserted. For the free photon energy operator
$H_\gamma=\hbar c\,d\Gamma(|k|)$, $\Psi_\lambda$ is in its operator domain
and its quadratic expectation is $C(\Lambda-\lambda)$ joules.

If $C=0$, $f_\lambda=0$ almost everywhere and $\Psi_\lambda=\Omega$ for each
cutoff. If $C>0$, the exact hypotheses of the current [L1] hold with
$\epsilon=\lambda/(\hbar c)$, $\kappa=\Lambda/(\hbar c)$ and the displayed
nonzero transverse angular function $b$. Conditional on [L1], the family has
no strong Fock-vector limit and converges weakly to zero, while its free
energy expectation stays bounded. For a unit Fock vector $u$, define its
projective ray $[u]:=\{zu:z\in\mathbb C,\ |z|=1\}$. For unit vectors $u,v$
define their projective-ray distance by
$d([u],[v]):=\inf_{|z|=1}\|u-zv\|$. This is a metric on phase classes: symmetry follows by replacing $z$ with
$\overline z$, the triangle inequality follows from the norm triangle
inequality and phase invariance, and compactness of the unit circle makes zero
distance equivalent to equality of the classes. Projective convergence means convergence in this
distance, equivalently norm convergence to a fixed unit vector after allowing
a unit-modulus phase at each cutoff. Step 7.1 proves separately that
these rays have no projective limit, including after arbitrary phase choices. This is
not a result about full interacting QED, universal charged sectors,
detector-inclusive observables, or measured photon statistics.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$; fix the finite leg data, positive energy cutoffs, and the two current supplier interfaces [F2] and [L1].

[A1] [[def-countable-choice]]: the Fock and measure-theoretic suppliers assume the stated countable-choice axiom.

[F1] [[def-qft-example-data]]: use $h=-\eta=\operatorname{diag}(1,-1,-1,-1)$ for algebraic contractions, $g=e\sqrt{\mu_0c/\hbar}=\sqrt{4\pi\alpha}>0$ is dimensionless, and no amplitude is assigned a probability by convention.

[F2] [[def-qft-photon-transverse-space]]: the current QFT-MG01 definition sets $P_T(\mathbf k)=I_3-\mathbf n\mathbf n^T$ for $\mathbf k\ne0$ and $\mathcal H_T=\operatorname{Ran}M_{P_T} =\{u\in L^2(\mathbb R^3,d^3\mathbf k;\mathbb C^3): \mathbf k\cdot u(\mathbf k)=0\ {\rm a.e.}\}$, a closed positive Hilbert space. The exact draft definition is registered in the completed batch-44 manifest. Its native readiness remains separate from this conditional mathematical use.

[F3] [[def-qft-fock-and-test-spaces]]: bosonic Fock space is the square-summable direct sum of symmetric tensor sectors, with vacuum $\Omega=(1,0,\ldots)$ and finite-particle subspace dense; use its second-variable-linear pairing.

[F4] [[lem-qft-segal-weyl-domain]]: for a separable complex Hilbert space, $\epsilon(z)=\bigoplus_{m\ge0}z^{\otimes m}/\sqrt{m!}$, $\langle\epsilon(z),\epsilon(w)\rangle_2=\exp(\langle z,w\rangle_2)$, and $W(h)\epsilon(z)= \exp(-\|h\|^2/4+i\langle h,z\rangle_2/\sqrt2) \epsilon(z+ih/\sqrt2)$.

[F5] [[lem-qft-second-quantized-spectrum]]: on scalar $L^2$ the real nonnegative one-particle multiplier $|k|$ gives the sector multiplier $\sum_{j=1}^m|k_j|$ with its maximal square-integrability domain. For the vector-valued transverse space, identify $L^2(\mathbb R^3;\mathbb C^3)$ with scalar $L^2(\mathbb R^3\times\{1,2,3\})$; [L1]'s proof step 2.1 verifies that the multiplier commutes with $P_T$ and restricts to the transverse Fock space.

[F6] [[def-surface-integral-on-a-compact-c-one-hypersurface]]: Euclidean surface integration on $S^2$ is defined chartwise from the induced metric Jacobian, with chart-independent integrals.

[F7] [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]: the Euclidean chart surface measure on $S^2$ equals the polar surface measure $\sigma$; it is finite and orthogonally invariant.

[F8] [[thm-polar-coordinates-formula-for-lebesgue-measure]]: for a nonnegative Borel function on $\mathbb R^3$, polar integration is $d^3q=\omega^2\,d\omega\,d\sigma(n)$.

[F9] [[cor-c-one-change-of-variables-for-l-one-functions]]: under $\mathrm{AC}_\omega$, a $C^1$ diffeomorphism changes Lebesgue integrals of $L^1$ functions by its absolute Jacobian. Its proof also shows that the dilation $\mathbf q=(\hbar c)\mathbf k$ pulls Lebesgue-null sets back to null sets; this is needed for composition on $L^2$ equivalence classes.

[F10] [[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]]: under $\mathrm{AC}_\omega$, rational-box step functions give a countable dense subset of the real-valued $L^2(\mathbb R^3)$.

[F11] [[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]]: in one dimension every singleton is a coordinate hyperplane and has Lebesgue measure zero, so changing strict radial cutoff endpoints does not change an integral.

[F12] [[thm-product-of-countable]]: the Cartesian product of two at most countable sets is at most countable; applying this twice proves countability of a threefold product.

[F13] [[def-euclidean-inner-product]]: on $\mathbb R^3$, $x\cdot y=\sum_{j=1}^3x_jy_j$ and $|x|^2=x\cdot x$. In particular, $n\in S^2$ means $\sum_jn_j^2=1$.

[F14] [[lem-countable-iff-surjection-from-n]]: for a nonempty set, being at most countable is equivalent to being the surjective image of $\mathbb N$.

[L1] [[lem-qft-qed-coherent-ir-obstruction]]: the current QFT-MG03 Q8 statement assumes $\kappa>0$ and nonzero transverse $b\in L^2(S^2,d\Omega;\mathbb C^3)$ with $C_b=\int_{S^2}|b|^2d\Omega>0$, and defines $f_\epsilon(k)=\mathbf1_{\{\epsilon<|k|<\kappa\}} |k|^{-3/2}b(k/|k|)$ for $0<\epsilon<\kappa$. Its Statement asserts $\|f_\epsilon\|^2=C_b\log(\kappa/\epsilon)$, $\langle C(f_\epsilon),H_{\rm ph}C(f_\epsilon)\rangle =\hbar cC_b(\kappa-\epsilon)$, unit-vector membership in $D(H_{\rm ph})$, weak convergence to zero, and absence of a strong Fock limit. Its exact Statement and proof are supplied locally, including the declared polar-coordinate and surface-measure inputs in its proof step 1.2. Weak-zero and no-strong-limit are used under that Statement's hypotheses; local repair does not replace native readiness or independent review. It states no projective-ray result, which this item derives locally from [F4].

[F15] For $x>0$, $\log x=\int_1^xdu/u$ and $\log'(x)=1/x$. [[thm-logarithm-derivative-and-integral]]

[F16] A nonnegative measurable function has integral zero exactly when it vanishes almost everywhere. [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]

[F17] The complex exponential is its everywhere-convergent power series and satisfies $\exp(z+w)=\exp(z)\exp(w)$; on real arguments it is the real exponential. [[def-complex-exponential]], [[lem-complex-exponential-series-converges-everywhere]], [[thm-complex-exponential-addition-and-real-extension]]

[F18] $m!$ is the natural factorial and $N^0=1$, including when $N=0$. [[def-factorial-and-falling-factorial]], [[def-integer-power]]

[F19] The real exponential is strictly increasing, and $\exp(0)=1$ by its power-series definition; on real inputs the complex exponential equals the real exponential. [[thm-exponential-is-strictly-increasing]], [[def-complex-exponential]], [[thm-complex-exponential-addition-and-real-extension]]

## Proof

1.1 For every leg and $n\in S^2$,
$1-v_i\cdot n\ge1-|v_i|>0$. Since the leg set is finite, each summand of
$K(n)$ is continuous and bounded on $S^2$. Moreover
$$ h(K(n),(1,n))= \sum_i\eta_iQ_i\frac{1-v_i\cdot n}{1-v_i\cdot n} =\sum_i\eta_iQ_i=0. $$
Thus $K^0(n)=n\cdot\mathbf K(n)$ and
$h(K,K)=(K^0)^2-|\mathbf K|^2=-|P_T(n)\mathbf K(n)|^2$.
Consequently the angular integrand is nonnegative, bounded and measurable;
the coefficient $C$ is finite and nonnegative. [given, A1, F1, algebra]

1.2 By [F10] at $p=2$, the real-valued scalar space $L^2(\mathbb R^3;\mathbb R)$ has a countable dense set $D$. It is nonempty because this scalar $L^2$ space is nonempty and $D$ is dense. By [F12], $D\times D$ is at most countable; [F14] supplies a surjection from $\mathbb N$ onto this nonempty product. Composing with $(d,e)\mapsto d+ie$ and applying [F14] again shows that $D_{\mathbb C}:=\{d+ie:d,e\in D\}$ is at most countable. For every complex scalar $u\in L^2$, its real and imaginary parts $u_R,u_I$ belong to real $L^2$, and $\|u-(d+ie)\|_2^2=\|u_R-d\|_2^2+\|u_I-e\|_2^2$; density of $D$ therefore makes $D_{\mathbb C}$ dense in complex scalar $L^2$. By two applications of [F12], $D_{\mathbb C}^3$ is countable and dense in $L^2(\mathbb R^3;\mathbb C^3)$, since each of three components can be approximated with squared error below $\varepsilon^2/3$. For $n\in S^2$ and $z\in\mathbb C^3$, put $a=\sum_j n_jz_j$. Using [F13] and the reality of $n_j$, direct expansion gives $\|P_T(n)z\|^2=\sum_j|z_j-n_ja|^2=\sum_j|z_j|^2-|a|^2\le\|z\|^2$, and $(I-nn^T)^2=I-nn^T$. Thus $M_{P_T}$ is a bounded idempotent on the ambient vector-valued $L^2$ space. Its image of $D_{\mathbb C}^3$ is countable and dense in its range: for $z=M_{P_T}z$ choose $w\in D_{\mathbb C}^3$ close to $z$, and $\|M_{P_T}w-z\|_2\le\|w-z\|_2$. [A1, F2, F10, F12, F13, F14]

2.1 By [F6] and [F7], the $d\Omega$ used in the statement is the finite
Euclidean surface measure, and [F8] gives
$d^3q/((2\pi)^3\,2\omega)=
\omega\,d\omega\,d\Omega/(2(2\pi)^3)$. Multiplying by
$|h_\lambda(\mathbf q)|^2=g^2|K_\perp(n)|^2/\omega^2$ and integrating over
$\lambda<\omega<\Lambda$ gives
$$ \|h_\lambda\|^2= \frac{g^2}{2(2\pi)^3}\int_{S^2}|K_\perp|^2d\Omega \int_\lambda^\Lambda\frac{d\omega}{\omega} =C\log(\Lambda/\lambda). $$
The substitution $\omega=\lambda u$ and [F15] give the displayed logarithm.
The cutoffs are strictly positive and finite, so the norm is finite. The
endpoint set $\{\lambda,\Lambda\}$ is null by [F11], so the strict cutoff
convention gives the same integral as including either endpoint.
[given, F1, F6, F7, F8, F11, F15, step 1.1, algebra]

3.1 Put $a=\hbar c>0$ and $T(k)=ak$. For $h\in L^2(\mathbb R^3,d^3q/[(2\pi)^3 2|q|];\mathbb C^3)$, define $G_h(q)=|h(q)|^2/[(2\pi)^3 2|q|]$ for $q\ne0$ and $G_h(0)=0$; the weighted $L^2$ hypothesis gives $G_h\in L^1(\mathbb R^3,d^3q)$. The density of the energy measure is positive and finite off $q=0$, so every energy-measure null set is Lebesgue null there; the singleton $\{0\}$ is also Lebesgue null. By [F9], $T^{-1}$ preserves Lebesgue-null sets, so composition by $T$ is well-defined on these $L^2$ equivalence classes. Define $Uh(0)=0$ and, for $k\ne0$, $$(Uh)(k)=\frac{a}{\sqrt{(2\pi)^3\,2|k|}}h(ak).$$ The change-of-variables formula [F9] for the $L^1$ function $G_h$ gives $$\|Uh\|_{L^2(d^3k)}^2=a^3\int_{\mathbb R^3}G_h(ak)\,d^3k=\int_{\mathbb R^3}G_h(q)\,d^3q=\|h\|^2.$$ Conversely, for $f\in L^2(d^3k;\mathbb C^3)$ define $Vf(0)=0$ and $Vf(q)=\sqrt{(2\pi)^3\,2|q|}\,a^{-3/2}f(q/a)$ for $q\ne0$. Applying [F9] to $|f|^2$ and the inverse dilation shows $\|Vf\|=\|f\|$; direct substitution gives $UVf=f$ and $VUh=h$ almost everywhere. Thus $U$ is a unitary on the ambient spaces. Since $q=ak$ and the scalar multipliers do not change the transverse condition, with null sets preserved under $T$ and $T^{-1}$ the equivalence $q\cdot h(q)=0$ a.e. iff $k\cdot(Uh)(k)=0$ a.e. follows. Therefore $U$ restricts to a unitary $\mathcal H_{E,T}\to\mathcal H_T$; in particular the energy-coordinate transverse subspace is a Hilbert space because [F2] makes $\mathcal H_T$ a closed Hilbert space. Substitution of $h_\lambda$ gives $$ (Uh_\lambda)(k)=\mathbf1_{\{\lambda/(\hbar c)<|k|<\Lambda/(\hbar c)\}} |k|^{-3/2}\frac{gK_\perp(k/|k|)}{\sqrt{2(2\pi)^3}}, $$ whose angular coefficient has squared integral $C$ by the definition of $C$. [A1, F2, F9, step 2.1, algebra]

4.1 Put $N=N_\lambda$. By [F3] and [F18], the squared norm in sector $m$ of $\epsilon(f_\lambda)$ is $N^m/m!$, with $N^0=1$, and the exponential series [F17] gives total squared norm $\exp(N)$. Step 1.2 establishes that $\mathcal H_T$ is separable, as required by [F4]. Setting $h=-i\sqrt2 f_\lambda$ and $z=0$ in [F4] yields $W(h)\Omega=\exp(-N/2)\epsilon(f_\lambda)$, so $\Psi_\lambda$ is normalized and its sector squared norms are $s_m=\exp(-N)N^m/m!$. The exponential series [F17] and index shifts give $\sum_ms_m=1$ and $\sum_m m s_m=N$. These are norm identities only; no measurement interpretation is used. [given, F3, F4, F17, F18, step 1.2, step 3.1, algebra]

5.1 On the support, the one-photon energy $\omega_\gamma(k)=\hbar c|k|$
satisfies $0<\omega_\gamma<\Lambda$. By [F5] and [L1], the energy on sector
$m$ is the sum of its $m$ one-photon energies, bounded above by $m\Lambda$.
The exponential series [F17] gives $\sum_m m^2s_m=N^2+N<\infty$, so
$\sum_m\| (H_\gamma\Psi_\lambda)_m\|^2
\le\Lambda^2(N^2+N)$ and the vector lies in the operator domain.
For each $m\ge1$, the sector quadratic form of the unnormalized tensor
$f_\lambda^{\otimes m}/\sqrt{m!}$ is
$m\langle f_\lambda,\omega_\gamma f_\lambda\rangle
N^{m-1}/m!$. Summing with the factor $\exp(-N)$ gives
$\langle\Psi_\lambda,H_\gamma\Psi_\lambda\rangle
=\langle f_\lambda,\omega_\gamma f_\lambda\rangle$. In energy coordinates
the latter integral is
$$ \frac{g^2}{2(2\pi)^3}\int_{S^2}|K_\perp|^2d\Omega \int_\lambda^\Lambda d\omega=C(\Lambda-\lambda). $$
This is a free-model Hilbert-space expectation in joules, not an empirical
measurement. [given, F5, L1, F17, step 2.1, step 4.1, algebra]

6.1 If $C=0$, [F16] applied to the nonnegative integrand defining $C$ gives $K_\perp=0$ almost everywhere, so $h_\lambda=f_\lambda=0$ as Hilbert-space vectors and $\Psi_\lambda=\Omega$. If $C>0$, the function $b=gK_\perp/\sqrt{2(2\pi)^3}$ is a nonzero transverse member of $L^2(S^2;\mathbb C^3)$, with squared norm integral $C$. Its cutoffs $\epsilon=\lambda/(\hbar c)$ and $\kappa=\Lambda/(\hbar c)$ satisfy $0<\epsilon<\kappa$, and step 3.1 identifies its exact wavefunction with [L1]'s current family. Conditional on [L1], its weak-zero and no-strong-limit claims apply, and its energy formula agrees with step 5.1 because $\hbar cC(\kappa-\epsilon)=C(\Lambda-\lambda)$. [given, F2, L1, F16, step 3.1, step 5.1, algebra]

7.1 For each integer $j\ge1$ put $\lambda_j=\Lambda2^{-j}$, $\epsilon_j=\lambda_j/(\hbar c)=\kappa2^{-j}$,
$f_j=f_{\lambda_j}$ and $\Psi_j=\Psi_{\lambda_j}$. The increment
$f_{j+1}-f_j$ is supported on the disjoint shell
$\epsilon_{j+1}<|k|<\epsilon_j$, so its squared norm is
$C\log2>0$, since [F15] gives $\log2=\int_1^2du/u\ge1/2>0$. Also
$\langle f_j,f_{j+1}\rangle=\|f_j\|^2$, because the increment is orthogonal
to $f_j$. By [F4] and the normalization in step 4.1,
$|\langle\Psi_j,\Psi_{j+1}\rangle|=\exp(-C\log2/2)<1$ by [F19]. For every
$z\in\mathbb C$ with $|z|=1$,
$$ \|\Psi_{j+1}-z\Psi_j\|^2 =2-2\operatorname{Re}(z\langle\Psi_{j+1},\Psi_j\rangle) \ge2(1-\exp(-C\log2/2))>0. $$
Taking the infimum over $z$ gives
$d([\Psi_j],[\Psi_{j+1}])\ge\sqrt{2(1-\exp(-C\log2/2))}>0$.
If the ray sequence converged, the triangle inequality for $d$ would force
these adjacent distances to tend to zero, a contradiction. This fills the
interface difference in [L1] without asserting that its current statement
contains a projective-ray result. [given, F4, F15, F17, F19, step 3.1, step 4.1, step 6.1,
algebra] ∎
