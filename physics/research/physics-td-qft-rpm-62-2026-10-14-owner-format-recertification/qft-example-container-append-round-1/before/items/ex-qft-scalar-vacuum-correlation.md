---
id: ex-qft-scalar-vacuum-correlation
kind: example
title: Spacelike vacuum correlation without field commutator
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: physics
library: physics
dependency_level: 9
deps:
  - pthm-qft-scalar-free-properties
  - def-qft-scalar-mass-shell
  - def-countable-choice
  - lem-smooth-bump-between-concentric-euclidean-balls
  - cor-cauchy-schwarz-inequality-for-l-two
  - thm-dominated-convergence
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-linear-change-of-variables-for-lebesgue-measure
  - def-polar-surface-measure-on-the-unit-sphere
  - lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates
dependency_roles:
  pthm-qft-scalar-free-properties: physical-result
  def-qft-scalar-mass-shell: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-linear-change-of-variables-for-lebesgue-measure: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates: mathematical-premise
physical_scope: "A conditional calculation in the massless branch of the selected real scalar free model using compactly supported spacetime tests in strictly spacelike-separated regions. It reports no experiment or signaling result."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Quantum Field Theory, author-hosted full-text Chapter 2"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html"
      locator: "Complete Chapter 2 HTML; §§2.2–2.4 on free scalar modes, vacuum and Fock states; §2.6.1 on spacelike commutativity; §2.7 on the free scalar vacuum two-point function, including printed pp. 23–32, 35–40, and 56–58."
    - title: "Mark Srednicki, Quantum Field Theory, author-hosted 2006 prepublication book draft, §3 Canonical Quantization of Scalar Fields"
      url: "https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf"
      locator: "Complete 616-page book draft; printed pp. 36–42 and 67–69, scalar-field normalization and the time-ordered free two-point function."
---

## Example

In the massless branch $\mu=0$, there are nonnegative real spacetime tests
$f,g$ of unit $\mathrm m^{-3}$ with strictly spacelike-separated supports
for which the vacuum
two-point function $\langle\Omega,\Phi_0(f)\Phi_0(g)\Omega\rangle$ is
strictly positive, while the smeared field commutator and the commutator of
the corresponding bounded local Weyl operators vanish. This is a state
correlation in the selected model; it is not a measurement report or a
signaling claim.

## Facts & Assumptions

**Given:** Countable Choice, the massless branch and exact field conventions
of [[pthm-qft-scalar-free-properties]], and the stated measure and
smooth-bump suppliers.

[A1] [[def-countable-choice]]: Countable Choice is the choice hypothesis
carried by the selected free-field construction and polar-coordinate
supplier.

[F1] [[pthm-qft-scalar-free-properties]]: for real spacetime tests,
$\langle\Omega,\Phi_\mu(f)\Phi_\mu(g)\Omega\rangle
=\langle K_\mu f,K_\mu g\rangle_2$; strictly spacelike-separated tests have
vanishing field commutator and commuting bounded local Weyl algebras.

[F2] [[def-qft-scalar-mass-shell]]: for $\mu=0$ the shell density is
$d^3\mathbf k/((2\pi)^3\,2|\mathbf k|)$ away from the null apex, with phase
$p\circ z=|\mathbf k|z^0-\mathbf k\cdot\mathbf z$.

[F3] [[lem-smooth-bump-between-concentric-euclidean-balls]]: for radii
$0<r<R$ in $\mathbb R^4$, there is a smooth function valued in $[0,1]$,
equal to $1$ on the closed radius-$r$ ball and supported in the open
radius-$R$ ball.

[F4] [[cor-cauchy-schwarz-inequality-for-l-two]]: if $u,v\in L^2(\nu_0)$,
then $\int|uv|\,d\nu_0\le\|u\|_2\|v\|_2$.

[F5] [[thm-dominated-convergence]]: almost-everywhere convergence under one
integrable majorant gives convergence of the integrals.

[F6] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]:
absolutely integrable functions on a sigma-finite product may be integrated
in either order.

[F7] [[thm-polar-coordinates-formula-for-lebesgue-measure]]: Lebesgue measure
on $\mathbb R^3$ decomposes as $k^2\,dk\,d\sigma$ on radial coordinates.

[F8] [[thm-linear-change-of-variables-for-lebesgue-measure]]: an invertible
linear map scales Lebesgue measure by the absolute determinant.

[F9] [[def-polar-surface-measure-on-the-unit-sphere]]: the sphere surface
measure is the radial projection measure used by the polar-coordinate supplier.

[F10] [[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]]:
for the stated spherical chart, $d\sigma=\sin\theta\,d\theta\,d\varphi$ and
$\sigma(S^2)=4\pi$.

## Proof

**Given:** [A1] and [F1]–[F10].

1.1 Fix $\varepsilon>0$ metres, let $L>4\varepsilon$ metres, and take centers $X=(0,\mathbf0)$ and $Y=(0,L\mathbf e_1)$ in the stated length coordinates. Apply [F3] with radii $\varepsilon/2$ and $\varepsilon$ in $\mathbb R^4$, then translate the resulting bump to the two centers. This gives real dimensionless bumps $\rho_X,\rho_Y$ valued in $[0,1]$, each equal to $1$ on a nonempty inner ball and supported in $B_\varepsilon(X)$ and $B_\varepsilon(Y)$ respectively. Define $f=(1\,\mathrm m^{-3})\rho_X$ and $g=(1\,\mathrm m^{-3})\rho_Y$, so both tests have unit $\mathrm m^{-3}$. For any $x,y$ in these supports, $|x^0-y^0|\le2\varepsilon$ and $|\mathbf x-\mathbf y|\ge L-2\varepsilon>2\varepsilon$; hence every support difference is spacelike. [A1, F3, given, construct]

2.1 Put $r=|\mathbf z|$ and for $\delta>0$ metres damp the massless shell kernel by $e^{-\delta|\mathbf k|}$, so $w_\delta(z^0,\mathbf z)=\int_{\mathbb R^3} e^{-\delta|\mathbf k|}e^{-i(|\mathbf k|z^0-\mathbf k\cdot\mathbf z)}\,d^3\mathbf k/((2\pi)^3 2|\mathbf k|)$. By [F10] the spherical chart has surface element $d\sigma=\sin\theta\,d\theta\,d\varphi$ and $\sigma(S^2)=4\pi$; combining this with [F7] gives $d^3\mathbf k=k^2\sin\theta\,dk\,d\theta\,d\varphi$ and $\nu_0(\{|\mathbf k|<\kappa\})=\kappa^2/(8\pi^2)$ for $\kappa>0$ with units $\mathrm m^{-1}$; each ball has finite shell measure, so the shell measure is sigma-finite. For a support difference $z=x-y$, step 1.1 gives $r>0$. Rotate coordinates so the third axis is $\mathbf z/r$; the determinant-one rotation preserves Lebesgue measure and $|\mathbf k|$ by [F8]. The angular integral is $2\pi\int_{-1}^1e^{ikr u}\,du=4\pi\sin(kr)/(kr)$ by [F10]. Thus $w_\delta=(4\pi^2r)^{-1}\int_0^\infty e^{-(\delta+iz^0)k}\sin(kr)\,dk$. With $a=\delta+iz^0$ and $\operatorname{Re}a=\delta>0$, writing the sine as exponentials and using $\int_0^\infty e^{-bk}\,dk=1/b$ for $\operatorname{Re}b>0$ gives $\int_0^\infty e^{-ak}\sin(kr)\,dk=(2i)^{-1}((a-ir)^{-1}-(a+ir)^{-1})=r/(a^2+r^2)$. Therefore $w_\delta=1/[4\pi^2(r^2+(\delta+iz^0)^2)]$. [A1, F2, F7, F8, F9, F10, given, algebra]

3.1 For every $\delta>0$, the shell/spacetime integrand paired with $f(x)g(y)$ is absolutely integrable: compact support gives finite $\|f\|_1\|g\|_1$, and the radial measure calculation in step 2.1, [F2] and [F7] gives $\int e^{-\delta|\mathbf k|}\,d\nu_0=1/(4\pi^2\delta^2)<\infty$. Fubini [F6] therefore identifies the damped pairing with $\int_{\mathbb R^4}\int_{\mathbb R^4}f(x)g(y)w_\delta(x-y)\,d^4x\,d^4y$. [A1, F2, F6, F7, step 2.1, algebra]

4.1 The shell vectors in [F1] lie in $L^2(\nu_0)$, so Cauchy–Schwarz [F4] gives $\int|K_0f\,K_0g|\,d\nu_0<\infty$. As $\delta\downarrow0$, $e^{-\delta|\mathbf k|}\to1$ almost everywhere on the shell and is bounded by $1$; dominated convergence [F5] therefore makes the damped shell pairing converge to $\langle K_0f,K_0g\rangle_2$. [F1, F4, F5, step 3.1, algebra]

5.1 The set of support differences from step 1.1 is compact, and $|\mathbf x-\mathbf y|^2-|x^0-y^0|^2$ has a strictly positive lower bound there. The explicit formula in step 2.1 consequently converges uniformly on that set to $1/[4\pi^2(|\mathbf x-\mathbf y|^2-|x^0-y^0|^2)]$. Taking the limit in the absolutely integrable pairing of step 3.1 and using step 4.1 and the vacuum covariance [F1] yields $\langle\Omega,\Phi_0(f)\Phi_0(g)\Omega\rangle=\int_{\mathbb R^4}\int_{\mathbb R^4} f(x)g(y)/[4\pi^2(|\mathbf x-\mathbf y|^2-|x^0-y^0|^2)]\,d^4x\,d^4y$. The integral is finite because its denominator is bounded away from zero on the compact support product. By [F2] the kernel has units $\mathrm m^{-2}$; with tests of unit $\mathrm m^{-3}$, the double integral and vacuum correlation are dimensionless. [F1, F2, step 1.1, step 3.1, step 4.1, algebra]

6.1 The kernel in step 5.1 is strictly positive throughout the support product, and each test equals $1$ on a nonempty ball, so the integral is strictly positive. By [F1] the same tests have zero field commutator and their bounded local Weyl operators commute. A nonzero vacuum two-point function is thus compatible with spacelike commutativity in this model. [F1, step 1.1, step 5.1, given, algebra] ∎
