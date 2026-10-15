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
  - lem-smooth-bump-between-concentric-euclidean-balls
dependency_roles:
  pthm-qft-scalar-free-properties: physical-result
  def-qft-scalar-mass-shell: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
physical_scope: "A conditional calculation in the massless branch of the selected real scalar free model using compactly supported spacetime tests in strictly spacelike-separated regions. It reports no experiment or signaling result."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Quantum Field Theory, University of Cambridge Part III lecture notes, Chapter 2, §§2.2–2.4, 2.6.1 and 2.7.1"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qft.pdf"
      locator: "Complete 155-page author-hosted lecture notes; printed pp. 23–32 and 35–40, including the nonzero spacelike two-point function and vanishing spacelike commutator."
    - title: "Mark Srednicki, Quantum Field Theory, author-hosted 2006 prepublication book draft, §3 Canonical Quantization of Scalar Fields"
      url: "https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf"
      locator: "Complete 616-page book draft; printed pp. 36–42, real scalar field normalization and canonical free-field representation."
---

## Example

In the massless branch $\mu=0$, there are nonnegative real spacetime tests
$f,g$ with strictly spacelike-separated supports for which the vacuum
two-point function $\langle\Omega,\Phi_0(f)\Phi_0(g)\Omega\rangle$ is
strictly positive, while the smeared field commutator and the commutator of
the corresponding bounded local Weyl operators vanish. This is a state
correlation in the selected model; it is not a measurement report or a
signaling claim.

## Facts & Assumptions

**Given:** The massless branch and exact field and vacuum conventions of
[[pthm-qft-scalar-free-properties]], together with the smooth-bump result.

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

## Verification

**Given:** [F1]–[F3].

1.1 Fix $\varepsilon>0$, let $L>4\varepsilon$, and take centers
$X=(0,\mathbf0)$ and $Y=(0,L\mathbf e_1)$ in the stated length coordinates.
Apply [F3] with radii $\varepsilon/2$ and $\varepsilon$ in $\mathbb R^4$,
then translate the resulting bump to the two centers. This gives real
tests $f,g$ valued in $[0,1]$, each equal to $1$ on a nonempty inner ball
and supported in $B_\varepsilon(X)$ and $B_\varepsilon(Y)$ respectively.
For any $x,y$ in these supports,
$|x^0-y^0|\le2\varepsilon$ and
$|\mathbf x-\mathbf y|\ge L-2\varepsilon>2\varepsilon$; hence every
support difference is spacelike. [F3, given, construct]

2.1 For $\delta>0$, damp the massless shell integral by $e^{-\delta|\mathbf k|}$
and write $r=|\mathbf z|$:

$$
w_\delta(z^0,\mathbf z)=
\int_{\mathbb R^3}\frac{d^3\mathbf k}{(2\pi)^3\,2|\mathbf k|}
e^{-\delta|\mathbf k|}
e^{-i(|\mathbf k|z^0-\mathbf k\cdot\mathbf z)}.
$$

Angular integration gives
$w_\delta(z^0,\mathbf z)=
(4\pi^2r)^{-1}\int_0^\infty e^{-(\delta+iz^0)k}\sin(kr)\,dk$.
Since $\operatorname{Re}(\delta+iz^0)>0$, integrating the two exponentials
in the sine yields
$w_\delta=1/[4\pi^2(r^2+(\delta+iz^0)^2)]$. On the compact set of
differences from step 1.1, $r^2-(z^0)^2$ has a strictly positive lower
bound, so this converges uniformly as $\delta\downarrow0$ to
$1/[4\pi^2(r^2-(z^0)^2)]$. The damped integral is absolutely integrable
against $f(x)g(y)$, so Fubini identifies it with the damped
$\langle K_0f,K_0g\rangle_2$. As $\delta\downarrow0$, dominated
convergence in the shell pairing gives the undamped two-point function;
uniform convergence on the separated supports gives

$$
\langle\Omega,\Phi_0(f)\Phi_0(g)\Omega\rangle
=\int_{\mathbb R^4}\!\int_{\mathbb R^4}
\frac{f(x)g(y)}
{4\pi^2(|\mathbf x-\mathbf y|^2-|x^0-y^0|^2)}
d^4x\,d^4y.
$$

The integral is finite because its denominator is bounded away from zero
on the compact support product. [F1, step 1.1, algebra]

3.1 The kernel in step 2.1 is strictly positive throughout the support
product, and each test equals $1$ on a nonempty ball. Therefore the
integral is strictly positive. By [F1] the same tests have zero field
commutator and their bounded local Weyl operators commute. A nonzero vacuum
two-point function is thus compatible with spacelike commutativity in this
model. [F1, step 1.1, step 2.1, given, algebra] ∎
