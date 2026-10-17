---
id: lem-backward-euler-cq-principal-branch-generating-function
kind: lemma
title: Principal-branch generating function for backward-Euler convolution quadrature
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-backward-euler-convolution-quadrature
  - thm-geometric-series
  - thm-direct-comparison-test
  - def-complex-series-power-series-and-absolute-convergence
  - thm-termwise-differentiation-of-complex-power-series
  - def-real-power-series-and-radius-of-convergence
  - thm-termwise-differentiation-of-a-real-power-series
  - thm-real-power-continuity-and-derivatives
  - thm-real-power-laws
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - cor-mean-value-theorem
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - prop-star-shaped-plane-domains-are-homologically-simply-connected
  - def-complex-power-from-holomorphic-logarithm-branch
  - cor-principal-logarithm-is-holomorphic-on-the-slit-plane
  - thm-chain-rule-for-complex-derivatives
  - thm-algebra-of-complex-derivatives
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-principal-branch-power-agrees-with-positive-real-power
  - thm-identity-theorem-holomorphic-functions
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - thm-of-square-roots
  - thm-reals-ordered-field
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: None. The coefficient and identity-theorem arguments use no choice principle.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: C. Lubich, Convolution Quadrature and Discretized Operational Calculus I, Numerische Mathematik 52 (1988), §1.1
      url: https://people.math.ethz.ch/~hiptmair/Seminars/CONVQUAD/Articles/LUB88.pdf
    - title: Ralf Hiptmair, Advanced Numerical Methods for Computational Science and Engineering, ETH Zürich lecture notes (2023), §§3.3.2.24–3.3.2.27
      url: https://people.math.ethz.ch/~grsam/ADVNCSE/ADVNCSE.pdf
---

## Statement

Let $0<\alpha<1$ and let $(\omega_j)_{j\ge0}$ be the weights defined by
[[alg-backward-euler-convolution-quadrature]]. Then the complex power series

$$W(z):=\sum_{j=0}^{\infty}\omega_jz^j$$

converges absolutely for every $z$ in the open unit disc
$\mathbb D=\{z\in\mathbb C:|z|<1\}$, and
$$W(z)=(1-z)^\alpha_{\operatorname{Log}}\qquad(z\in\mathbb D),$$
where the right side is the principal-branch power from
[[def-complex-power-from-holomorphic-logarithm-branch]]. It is well-defined
there because $1-z$ lies in the principal-logarithm slit plane.

## Facts & Assumptions

**Given:** $0<\alpha<1$ and the backward-Euler CQ coefficient recurrence.

[F1] [[alg-backward-euler-convolution-quadrature]]:
$\omega_0=1$ and $\omega_j=((j-1-\alpha)/j)\omega_{j-1}$ for $j\ge1$.

[F2] [[thm-geometric-series]] and [[thm-direct-comparison-test]]:
for $0\le r<1$, $\sum_{j\ge0}r^j$ converges, and a nonnegative series
dominated termwise by a convergent nonnegative series converges.

[F3] [[def-complex-series-power-series-and-absolute-convergence]]:
the radius of a complex power series is the radius of its real modulus
series. [[thm-termwise-differentiation-of-complex-power-series]]:
inside its disc of convergence, the sum is holomorphic.

[F4] [[def-real-power-series-and-radius-of-convergence]] and
[[thm-termwise-differentiation-of-a-real-power-series]]:
a real power series can be differentiated termwise inside its radius.

[F5] [[thm-real-power-continuity-and-derivatives]],
[[thm-real-power-laws]], [[thm-chain-rule]], and
[[thm-algebra-of-derivatives]]:
for $x>0$, $(x^q)'=qx^{q-1}$ and ordinary real chain and product rules hold.

[F6] [[cor-mean-value-theorem]]:
a differentiable real function with zero derivative on an interval is constant.

[F7] [[def-unit-disc-upper-half-plane-and-blaschke-factor]] and
[[prop-star-shaped-plane-domains-are-homologically-simply-connected]]:
the nonempty open unit disc is a complex domain.

[F8] [[def-complex-power-from-holomorphic-logarithm-branch]]:
$z^\alpha_{\operatorname{Log}}=\exp(\alpha\operatorname{Log}z)$ on the
principal-logarithm slit plane. [[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]]:
the principal logarithm is holomorphic there.

[F9] [[thm-chain-rule-for-complex-derivatives]],
[[thm-complex-exponential-is-entire-with-derivative-itself]], and
[[thm-algebra-of-complex-derivatives]]:
compositions of complex differentiable maps are complex differentiable,
the exponential is entire, and affine maps are holomorphic.

[F10] [[thm-principal-branch-power-agrees-with-positive-real-power]]:
on positive real bases, principal-branch powers agree with real powers.

[F11] [[thm-identity-theorem-holomorphic-functions]]:
two holomorphic functions on a complex domain that agree on a set with an
interior accumulation point agree throughout the domain.

[F12] [[def-complex-conjugate-real-imaginary-part-and-modulus]],
[[thm-of-square-roots]], and [[thm-reals-ordered-field]]:
if $x\ge1$ is real, then $|x|=x$.

## Proof

1.1 The recurrence [F1] gives $|\omega_0|=1$, $\omega_1=-\alpha$ with $|\omega_1|=\alpha<1$, and for $j\ge2$ gives $\omega_j=((j-1-\alpha)/j)\omega_{j-1}$ with $0<(j-1-\alpha)/j<1$, so induction yields $|\omega_j|\le1$ for all $j$. For each $0\le r<1$, [F2] bounds $\sum_{j\ge0}|\omega_j|r^j$ by a convergent geometric series; the radius definition [F3] therefore gives radius at least $1$, and the complex series sum $W$ is holomorphic on $\mathbb D$ by [F3]. [given, F1, F2, F3, algebra]

1.2 For real $x\in(-1,1)$ the same coefficients define a real power series of radius at least $1$; termwise differentiation [F4] gives $W'(x)=\sum_{j\ge0}(j+1)\omega_{j+1}x^j$. By [F1], $(j+1)\omega_{j+1}=(j-\alpha)\omega_j$, hence $W'(x)=\sum_{j\ge0}(j-\alpha)\omega_jx^j=xW'(x)-\alpha W(x)$ and $(1-x)W'(x)=-\alpha W(x)$. Since $1-x>0$, [F5] gives $H'(x)=0$ for $H(x):=W(x)(1-x)^{-\alpha}$; [F6] makes $H$ constant, and $H(0)=\omega_0=1$, so $W(x)=(1-x)^\alpha$ throughout $(-1,1)$. [given, F1, F4, F5, F6, algebra]

1.3 Fix $z\in\mathbb D$. If $1-z$ were real $r\le0$, then $z=1-r\ge1$ would be positive real, so [F12] would give $|z|=z\ge1$, a contradiction. Thus $1-z$ is in the slit plane and $P(z):=(1-z)^\alpha_{\operatorname{Log}}$ is defined; [F8] makes the principal logarithm holomorphic there, and [F9] with the branch definition makes $P$ holomorphic on $\mathbb D$. [given, F8, F9, F12, construct]

2.1 By [F7] the unit disc is a complex domain. For every real $x\in(-1,1)$, [F10] identifies $P(x)$ with $(1-x)^\alpha$, so step 1.2 gives $P(x)=W(x)$. The agreement set contains an interval accumulating at $0\in\mathbb D$; since $W$ and $P$ are holomorphic by steps 1.1 and 1.3, the identity theorem [F11] gives $W=P$ throughout $\mathbb D$, including $z=0$. [step 1.1, step 1.2, step 1.3, F7, F10, F11] ∎
