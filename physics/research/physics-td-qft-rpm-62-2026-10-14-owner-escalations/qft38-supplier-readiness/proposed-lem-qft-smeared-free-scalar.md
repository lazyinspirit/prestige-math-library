---
id: lem-qft-smeared-free-scalar
kind: lemma
title: Smeared free scalar field and its Poincare representation
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-qft-scalar-mass-shell
  - def-qft-fock-and-test-spaces
  - def-countable-choice
  - lem-qft-fock-ccr-car
  - lem-qft-segal-weyl-domain
  - lem-qft-second-quantized-spectrum
  - lem-qft-mass-shell-measure-invariant
  - lem-qft-mass-shell-test-range-dense
  - lem-qft-fock-unitary-lift
  - cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space
  - thm-fourier-transform-maps-schwartz-space-continuously-to-itself
  - def-schwartz-space-and-its-seminorms
  - thm-chain-rule-for-total-derivatives
  - thm-dominated-convergence
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-sr-affine-minkowski-model
  - def-lorentz-form-and-inertia
  - def-time-orientation-and-future-causal-sets
dependency_roles:
  def-qft-scalar-mass-shell: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-qft-fock-ccr-car: mathematical-premise
  lem-qft-segal-weyl-domain: mathematical-premise
  lem-qft-second-quantized-spectrum: mathematical-premise
  lem-qft-mass-shell-measure-invariant: mathematical-premise
  lem-qft-mass-shell-test-range-dense: mathematical-premise
  lem-qft-fock-unitary-lift: mathematical-premise
  cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space: mathematical-premise
  thm-fourier-transform-maps-schwartz-space-continuously-to-itself: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, sections 2.4.1, 2.6.1 and 2.7
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qft.pdf
      locator: Complete 155-page author-hosted lecture notes; printed pages 23–25 and equations 2.133–2.167, 2.7 two-point function.
    - title: Mark Srednicki, Quantum Field Theory, author draft, chapters 3–4
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page author-hosted draft; equations 3.15–3.19 and 4.11–4.15.
---

## Statement

Assume Countable Choice [[def-countable-choice]], let $\mu\ge0$, let
$H_\mu$ and $K_\mu$ be as in [[def-qft-scalar-mass-shell]], and form
$\mathcal F_s(H_\mu)$ with vacuum $\Omega$ and finite-particle domain
$\mathcal D_{\rm fin}$. For $f\in\mathscr S(\mathbb R^4)$ define on
$\mathcal D_{\rm fin}$
$$\Phi_\mu(f)=a(K_\mu\overline f)+a^\dagger(K_\mu f).$$
This is a complex-linear map of test functions into operators
$\mathcal D_{\rm fin}\to\mathcal D_{\rm fin}$. For real $f$ it is symmetric
and equals the restriction of $\sqrt2\,\Phi_{\rm Segal}(K_\mu f)$ to $\mathcal D_{\rm fin}$, where the Segal field of
[[lem-qft-segal-weyl-domain]] is
$\Phi_{\rm Segal}(h)=\overline{(a^\dagger(h)+a(h))/\sqrt2}$.
Thus its Weyl unitary is
$W_\mu(f):=W_{\rm Segal}(\sqrt2 K_\mu f)$ and, for real $f,g$,
$$W_\mu(f)W_\mu(g)=
e^{-i\,\operatorname{Im}\langle K_\mu f,K_\mu g\rangle_2}W_\mu(f+g).$$
Here the inner product is second-variable-linear as fixed in
[[def-qft-fock-and-test-spaces]]. The vacuum has zero one-point function and
two-point function
$$\langle\Omega,\Phi_\mu(f)\Phi_\mu(g)\Omega\rangle_2
=\langle K_\mu\overline f,K_\mu g\rangle_2,$$
which satisfies $\langle\Omega,\Phi_\mu(\overline f)\Phi_\mu(f)\Omega\rangle_2=\|K_\mu f\|^2\ge0$ for every complex test $f$; in particular its diagonal is nonnegative for real tests. Higher vacuum moments obey the CCR pairing
recursion (and hence the free-field Wick pairing rule). The field is a weak operator-valued tempered distribution on $\mathcal D_{\rm fin}$, satisfies $\Phi_\mu(f)^*|_{\mathcal D_{\rm fin}}=\Phi_\mu(\overline f)$, and its normalized vacuum gives a positive state on the finite polynomial $*$-algebra of these fields.

Let $G= \mathbb R^4\rtimes SO^+(1,3)$ act on coordinates by
$x\mapsto a+\Lambda x$, and put
$f_{a,\Lambda}(x)=f(\Lambda^{-1}(x-a))$. The one-particle unitaries
$$[U_\mu(a,\Lambda)h](p)=e^{ip\circ a}h(\Lambda^{-1}p)$$
are strongly continuous, form a representation of $G$, and satisfy
$U_\mu(a,\Lambda)K_\mu f=K_\mu f_{a,\Lambda}$. Their Fock lifts implement
the same covariance for $\Phi_\mu$ on $\mathcal D_{\rm fin}$ and for the
bounded Weyl operators.

For translations, the joint spectral measure on Fock space is the
second-quantized multiplier measure with one-particle vector
$(\omega_\mu(\mathbf k),-\mathbf k)$. Its support is contained in the closed
future cone $\{(E,\mathbf P):E\ge|\mathbf P|\}$; the vacuum is an eigenvector
at $(0,\mathbf0)$. These are conditional mathematical model deductions.
No point field, empirical observation or measurement claim is made.

## Facts & Assumptions

**Given:** Countable Choice, the scalar shell conventions, second-variable-linear
Fock conventions, the QFT-MF01 draft suppliers at their inspected statements,
and the mathematical Minkowski structure.

[A1] Countable Choice is the choice strength assumed by the Fock construction
and the second-quantized spectrum result. [[def-countable-choice]]

[F1] The one-particle pairing is
$\langle u,v\rangle_2=\int\overline u\,v\,d\nu_\mu$; Fock creation is linear
and annihilation is conjugate-linear in their one-particle argument, with the
usual vacuum and finite-particle sectors.
[[def-qft-fock-and-test-spaces]]

[F2] On $\mathcal D_{\rm fin}$, creation and annihilation satisfy the bosonic
CCR, are mutual adjoints between adjacent sectors, and creation/annihilation
maps preserve finite-particle vectors.
[[lem-qft-fock-ccr-car]]

[F3] The inspected Segal convention is
$\Phi_{\rm Segal}(h)=\overline{(a^\dagger(h)+a(h))/\sqrt2}$ and
$W(h)W(k)=e^{-i\operatorname{Im}\langle h,k\rangle_2/2}W(h+k)$; its vacuum
expectation is $e^{-\|h\|^2/4}$ and its one-parameter groups generate these
closed fields.
[[lem-qft-segal-weyl-domain]]

[F4] The shell map is $K_\mu f(p)=\int f(x)e^{ip\circ x}d^4x$ on the future
shell with density $d^3\mathbf k/[(2\pi)^3 2\omega_\mu]$.
[[def-qft-scalar-mass-shell]]

[F5] The shell measure is sigma-finite and invariant under every proper
orthochronous Lorentz transformation.
[[lem-qft-mass-shell-measure-invariant]]

[F6] $H_\mu$ is separable and the range of $K_\mu$ on Schwartz tests is dense.
[[lem-qft-mass-shell-test-range-dense]]

[F7] A one-particle unitary has a unitary Fock lift; the lift intertwines
creation and annihilation, and strong continuity lifts to Fock space.
[[lem-qft-fock-unitary-lift]]

[F8] For a sigma-finite one-particle measure and a finite measurable real
vector multiplier, the second-quantized operators have the sector-sum PVM,
exact multiplier domains and the vacuum eigenvector at zero.
[[lem-qft-second-quantized-spectrum]]

[F9] Fourier transform and inverse are continuous on Schwartz space, and
integration by parts transfers derivatives to multiplication by coordinates.
[[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]
[[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]]

[F11] The chain rule applies to compositions of differentiable maps; repeated
application to an affine pullback gives the corresponding derivative formulas.
[[thm-chain-rule-for-total-derivatives]]

[F12] Dominated convergence applies to the integrable bounds used below.
[[thm-dominated-convergence]]

[F13] Under Countable Choice, a $C^1$ diffeomorphism between open Euclidean
sets satisfies the nonnegative change-of-variables formula.
[[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

[F14] A Schwartz function is smooth and every coordinate-weighted derivative
is bounded; these seminorms define the topology used in the decay estimates.
[[def-schwartz-space-and-its-seminorms]]

[F10] In the chosen inertial coordinates, $\eta=\mathrm{diag}(-1,1,1,1)$,
proper orthochronous Lorentz maps preserve the metric and future cone.
[[def-sr-affine-minkowski-model]]
[[def-lorentz-form-and-inertia]]
[[def-time-orientation-and-future-causal-sets]]

## Proof

1.1 For every Schwartz seminorm order $N$, rapid decay gives
$|K_\mu f(p_\mu(\mathbf k))|\le C_N(f)(1+|\mathbf k|)^{-N}$ because
$\omega_\mu(\mathbf k)\ge|\mathbf k|$. Hence
$$\|K_\mu f\|^2\le C_N(f)^2
\int_{\mathbb R^3}\frac{(1+|\mathbf k|)^{-2N}}
{2(2\pi)^3\omega_\mu(\mathbf k)}\,d^3\mathbf k<\infty$$
for $N>1$: at infinity the radial integrand is $O(r^{1-2N})$, and at the
massless apex it is $O(r)\,dr$. The same estimate with Schwartz seminorms
shows continuity into $H_\mu$. Differentiating under the integral is
justified by an integrable Schwartz bound and [F12]; integration by parts,
permitted by Schwartz decay [F9], gives
$K_\mu((\partial_0^2-\Delta+\mu^2)f)=0$ since
$-\omega_\mu^2+|\mathbf k|^2+\mu^2=0$. [F4, F9, F12, F14, given, algebra]

1.2 The first term $a(K_\mu\overline f)$ is complex-linear in $f$ because
complex conjugation of $f$ is followed by the conjugate-linear dependence of
$a$; the second is complex-linear because $a^\dagger$ and $K_\mu$ are
linear. Both terms preserve $\mathcal D_{\rm fin}$ by [F1,F2]. If $f$ is
real, the two shell vectors coincide, so
$\Phi_\mu(f)=a(K_\mu f)+a^\dagger(K_\mu f)
=\sqrt2\,\Phi_{\rm Segal}(K_\mu f)|_{\mathcal D_{\rm fin}}$. It is symmetric on the common
finite-particle domain by the adjoint relation in [F2]. Substitution of
$h=\sqrt2 K_\mu f$ and $k=\sqrt2 K_\mu g$ into [F3]'s Weyl relation gives the stated phase and
vacuum Gaussian. [F1, F2, F3, F4, step 1.1, given, algebra]

2.1 Since $a(K_\mu\overline f)\Omega=0$ and
$\langle\Omega,a^\dagger(h)\Psi\rangle_2=0$, the vacuum one-point function
vanishes. Expanding the two fields, only
$a(K_\mu\overline f)a^\dagger(K_\mu g)\Omega$ contributes to the vacuum
pairing; CCR [F2] makes that value
$\langle K_\mu\overline f,K_\mu g\rangle_2$. Replacing the first test by $\overline f$ and taking the second to be $f$ makes it $\|K_\mu f\|^2\ge0$; for real $f$ this is the diagonal pairing. For an ordered product of $n$ real smeared fields,
write the first field as creation plus annihilation. The creation part
vanishes against the left vacuum; commute the annihilation part successively
past each later field using [F2]. Each commutator is the corresponding
two-point pairing, and the remaining annihilator kills the right vacuum.
This yields the recursive sum over its possible partner and proves the
Wick pairing rule by induction on $n$. [F1, F2, F4, step 1.2, given, algebra]

2.2 For fixed finite-particle vectors $\Psi,\Theta$, the sector bounds $\|a_n(h)\|\le\sqrt n\|h\|$ and $\|a_n^\dagger(h)\|\le\sqrt{n+1}\|h\|$ from [F2] imply $|\langle\Psi,\Phi_\mu(f)\Theta\rangle_2|\le C_{\Psi,\Theta}(\|K_\mu f\|+\|K_\mu\overline f\|)$. Step 1.1 and continuity of conjugation on Schwartz space make this a continuous complex-linear functional of $f$, proving weak temperedness. Mutual adjoints [F2] give $\langle\Phi_\mu(f)\Psi,\Theta\rangle_2=\langle\Psi,\Phi_\mu(\overline f)\Theta\rangle_2$ for all finite-particle vectors, so they lie in the adjoint domain and the stated restricted adjoint identity holds. For a finite polynomial $B$ in fields, finite-particle invariance makes $B\Omega$ defined and lets this identity reverse the finite product. Thus $\omega(B^*B)=\langle\Omega,B^*B\Omega\rangle_2=\|B\Omega\|^2\ge0$ and $\omega(I)=\|\Omega\|^2=1$. [F1, F2, F4, step 1.1, step 1.2, step 2.1, algebra]

3.1 The affine pullback $f_{a,\Lambda}(x)=f(\Lambda^{-1}(x-a))$ preserves
Schwartz space: each derivative is a finite linear combination of derivatives
of $f$ at $\Lambda^{-1}(x-a)$ by [F11], and
$1+|x|\le C(1+|\Lambda^{-1}(x-a)|)$ for a finite constant $C$ depending on
$a,\Lambda$. Thus every defining Schwartz seminorm remains finite by [F14].
For $\Lambda$ in the stated group, the map $h(p)\mapsto h(\Lambda^{-1}p)$
is unitary by [F5]. Multiplication by $e^{ip\circ a}$ is unitary, so
$U_\mu(a,\Lambda)$ is unitary. Direct substitution and Lorentz invariance of
$p\circ x$ show $U(g)U(g')=U(gg')$. Changing variables $x=a+\Lambda y$ in
the Fourier integral by [F13]; since $|\det\Lambda|=1$, this gives
$K_\mu f_{a,\Lambda}(p)=e^{ip\circ a}K_\mu f(\Lambda^{-1}p)$.
[F4, F5, F10, F11, F13, F14, given, algebra]

3.2 For $f$ whose shell restriction is smooth and compactly supported away
from the apex, $(a,\Lambda)\mapsto U_\mu(a,\Lambda)f$ is pointwise
continuous and, for group parameters in a compact neighborhood, supported
in one compact shell subset of finite measure by [F5]. Dominated convergence
therefore gives norm continuity. Such vectors are dense by [F6], and all
$U_\mu(g)$ have norm one, so approximation extends strong continuity to
every $h\in H_\mu$. The Fock lift is strongly continuous by [F7].
Intertwining in [F7] and the transformed test restriction in 3.1 give field
covariance on $\mathcal D_{\rm fin}$; exponentiating the real-field
generators, or using [F3]'s explicit Weyl formula, gives Weyl covariance.
[F3, F6, F7, F12, step 3.1, given, algebra]

4.1 The one-particle translation phase is
$e^{i(\omega_\mu(\mathbf k)a^0-\mathbf k\cdot\mathbf a)}$, so its real
generator vector is $\varpi(\mathbf k)=(\omega_\mu(\mathbf k),-\mathbf k)$.
It is finite and measurable. The measure is sigma-finite by [F5], so [F8]
applies and gives the joint PVM and vacuum at zero. On an $n$-particle
sector the joint multiplier is $\sum_{r=1}^n
(\omega_\mu(\mathbf k_r),-\mathbf k_r)$. Since
$|\sum_r\mathbf k_r|\le\sum_r|\mathbf k_r|\le\sum_r\omega_\mu(\mathbf k_r)$,
every such value lies in the closed future cone; the vacuum value does too.
Thus the joint spectral measure is supported there, as claimed.
[F4, F5, F8, given, algebra] ∎
