---
id: ex-qftmath-spacelike-vacuum-correlation
kind: example
title: Positive vacuum correlation for spacelike-separated massless tests
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 6
deps:
  - def-countable-choice
  - def-qft-scalar-mass-shell
  - lem-qft-smeared-free-scalar
  - lem-qft-scalar-causal-commutator
  - lem-qft-scalar-local-weyl-algebra
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-dominated-convergence
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-cauchy-schwarz-in-an-inner-product-space
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-scalar-mass-shell: mathematical-premise
  lem-qft-smeared-free-scalar: mathematical-premise
  lem-qft-scalar-causal-commutator: mathematical-premise
  lem-qft-scalar-local-weyl-algebra: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Mark Srednicki, Quantum Field Theory, author draft, chapter 4
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page author-hosted draft; chapter 4 equations 4.11–4.15, massless two-point function.
    - title: David Tong, Quantum Field Theory, section 2.7
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html
      locator: Author-hosted HTML text of chapter 2, section 2.7, vacuum two-point function and its spacelike value; the complete lecture-note set is also listed as a 155-page PDF.
---

## Example

Assume Countable Choice. In the massless model $\mu=0$, there are nonnegative
real test functions
$f,g\in C_c^\infty(\mathbb R^4)$ with spacelike-separated supports for which
$$\langle\Omega,\Phi_0(f)\Omega\rangle_2
=\langle\Omega,\Phi_0(g)\Omega\rangle_2=0,\qquad
\langle\Omega,\Phi_0(f)\Phi_0(g)\Omega\rangle_2>0.$$
The corresponding local Weyl operators commute by
[[lem-qft-scalar-local-weyl-algebra]]. The nonzero correlation is a
mathematical vacuum expectation in the specified representation; it is not a
measurement or a signaling effect.

## Facts & Assumptions

**Given:** The massless shell measure and Fourier restriction of
[[def-qft-scalar-mass-shell]], the vacuum two-point formula of
[[lem-qft-smeared-free-scalar]], the causal and local-algebra results, and a
smooth compactly supported nonnegative bump.

[A1] Assume Countable Choice. [[def-countable-choice]]

[F1] For real tests the vacuum one-point function vanishes and
$\langle\Omega,\Phi_0(f)\Phi_0(g)\Omega\rangle_2
=\langle K_0f,K_0g\rangle_2$.
[[lem-qft-smeared-free-scalar]]

[F2] Spacelike-separated real tests have commuting fields and generate
commuting local Weyl algebras.
[[lem-qft-scalar-causal-commutator]]
[[lem-qft-scalar-local-weyl-algebra]]

[F3] The massless shell measure is
$d^3\mathbf k/[(2\pi)^3 2|\mathbf k|]$, with phase
$e^{i(|\mathbf k|t-\mathbf k\cdot\mathbf x)}$.
[[def-qft-scalar-mass-shell]]

[F4] Smooth compactly supported bumps exist in Euclidean balls.
[[lem-smooth-bump-between-concentric-euclidean-balls]]

[F5] Dominated convergence applies to the integrable majorant below.
[[thm-dominated-convergence]]

[F6] Absolutely integrable functions on products of sigma-finite measure
spaces may be integrated in either order.
[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F7] The inner-product pairing satisfies Cauchy–Schwarz.
[[thm-cauchy-schwarz-in-an-inner-product-space]]

## Proof

1.1 Choose $\delta>0$. By [F4], choose a nonnegative nonzero
$\chi\in C_c^\infty((-\delta,\delta))$. Choose two nonnegative nonzero
$u,v\in C_c^\infty(\mathbb R^3)$ supported in closed balls of radii
$r_1,r_2$ whose center separation $D$ satisfies
$D-r_1-r_2>2\delta$. Such bumps follow by translating and rescaling [F4].
Set $f(t,\mathbf x)=\chi(t)u(\mathbf x)$ and
$g(t,\mathbf x)=\chi(t)v(\mathbf x)$. For every point in the two supports,
$|t-s|<2\delta$ and $|\mathbf x-\mathbf y|\ge D-r_1-r_2>2\delta$;
therefore all support differences are spacelike.
For example, $\delta=1$, $r_1=r_2=1$ and $D=5$ give a spatial gap of $3>2$,
so these strict inequalities are attainable. [F4, given, construct]

2.1 Insert a radial regulator $e^{-\epsilon|\mathbf k|}$, $\epsilon>0$, in
the massless two-point kernel. Angular integration using [F3] gives for
$r=|\mathbf x-\mathbf y|>0$ and $\tau=t-s$
$$W_\epsilon(\tau,r)=
\frac{1}{4\pi^2r}\int_0^\infty
e^{-(\epsilon+i\tau)q}\sin(qr)\,dq
=\frac{1}{4\pi^2\bigl(r^2+(\epsilon+i\tau)^2\bigr)}.$$
The integral identity follows by integrating the two exponentials in the
sine and using $\operatorname{Re}(\epsilon+i\tau)>0$. On the compact
support product in 1.1, $r\ge d:=D-r_1-r_2>2\delta>|\tau|$. Thus the
denominator is bounded away from zero uniformly as $\epsilon\downarrow0$,
and $W_\epsilon$ converges uniformly there to
$[4\pi^2(r^2-\tau^2)]^{-1}$, which is strictly positive.
[F3, step 1.1, given, algebra]

3.1 The regulated shell integrals converge to
$\langle K_0 f,K_0 g\rangle_2$ by dominated convergence [F5]: the absolute
value of the unregulated product is integrable by Cauchy–Schwarz [F7],
because $K_0f,K_0g\in H_0$. To identify the regulated shell integral with
the spacetime pairing of $W_\epsilon$, Fubini [F6] applies because its
absolute integral is at most
$\|f\|_1\|g\|_1\int_{\mathbb R^3}e^{-\epsilon|\mathbf k|}
d^3\mathbf k/[(2\pi)^3 2|\mathbf k|]<\infty$.
The formula in 2.1 and uniform convergence on the compact support product give
$$\langle K_0 f,K_0 g\rangle_2
=\int f(t,\mathbf x)g(s,\mathbf y)
\frac{d^4x\,d^4y}{4\pi^2(|\mathbf x-\mathbf y|^2-(s-t)^2)}>0,$$
because both test functions are nonnegative and nonzero and the denominator
is positive on the support product. More explicitly,
$\langle K_0f,K_0g\rangle_2\ge
(\int f)(\int g)/[4\pi^2(D+r_1+r_2)^2]>0$, since
$|\mathbf x-\mathbf y|^2-(t-s)^2\le(D+r_1+r_2)^2$ there. The zero one-point
values follow from [F1]; commutation follows from [F2] and separation in
step 1.1. [A1, F1, F2, F3, F5, F6, F7, step 2.1, step 1.1, given, algebra] ∎
