---
id: def-expander-prereq-periodic-analytic-potentials
kind: definition
title: Analytic potentials on a finite phase torus
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-prereq-phase-torus
  - def-expander-prereq-phasor-calculus
  - math:def-real-analytic-germ-in-several-variables
  - math:def-hessian-of-a-function-at-a-critical-point
  - math:def-complex-exponential
  - math:thm-complex-exponential-addition-and-real-extension
  - math:thm-binomial-theorem
dependency_roles:
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
  math:def-real-analytic-germ-in-several-variables: mathematical-premise
  math:def-hessian-of-a-function-at-a-critical-point: mathematical-premise
  math:def-complex-exponential: mathematical-premise
  math:thm-complex-exponential-addition-and-real-extension: mathematical-premise
  math:thm-binomial-theorem: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Definition

Let $V$ be a nonempty finite set and $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$ with its angular charts and flat metric. A real-valued function $f$ on $T_V$ is real analytic if, in an angular chart around each point, it equals a real power series in the angular coordinates that converges absolutely on some open polydisc about that point. A potential here means a real-valued function on $T_V$.

For a smooth potential, a critical point is a point at which all first angular partial derivatives vanish. At a critical point its Hessian is the bilinear form represented in angular coordinates by the matrix of second partial derivatives. The angular transition maps are locally translations, so this matrix is unchanged between angular charts.

Every finite real linear combination of the functions $\theta\mapsto\cos(\theta_x-\theta_y)$, $x,y\in V$, is a real analytic potential. The expression uses any real representatives of the phases.

## Definition references

[[def-expander-prereq-phase-torus|Finite phase tori, local lifts and the flat metric]]

[[def-expander-prereq-phasor-calculus|Phasors, trigonometric identities and periodic derivatives]]

[[math:def-real-analytic-germ-in-several-variables|Real analytic germs in several variables]]

[[math:def-hessian-of-a-function-at-a-critical-point|The intrinsic Hessian at a critical point]]

## Facts & Assumptions

[F1] Angular charts cover $T_V$ and their transition maps are locally translations by elements of $(2\pi\mathbb Z)^V$; the flat metric is Euclidean in these charts ([[def-expander-prereq-phase-torus]]).

[F2] For real $t$, $\cos t=\operatorname{Re}\exp(it)$, $|\exp(it)|=1$, and cosine is $2\pi$-periodic ([[def-expander-prereq-phasor-calculus]]).

[F3] The complex exponential has the absolutely convergent series $\exp z=\sum_{n=0}^{\infty}z^n/n!$ for every complex $z$, and $\exp(a+b)=\exp(a)\exp(b)$ ([[math:def-complex-exponential]], [[math:thm-complex-exponential-addition-and-real-extension]]).

[F4] A real analytic germ is represented locally by an absolutely convergent real multivariable power series; the intrinsic critical Hessian is the bilinear form represented by the second partial derivatives in a smooth chart ([[math:def-real-analytic-germ-in-several-variables]], [[math:def-hessian-of-a-function-at-a-critical-point]]).

[F5] For $u,v\in\mathbb R$ and $n\in\mathbb N$, $(u+v)^n=\sum_{k=0}^n c_{n,k}u^kv^{n-k}$, where $c_{n,k}=\iota_{\mathbb R}(\binom nk)\ge0$ is the binomial coefficient viewed in $\mathbb R$ ([[math:thm-binomial-theorem]]).

## Justification

**Given:** A finite nonempty $V$, a smooth real potential when discussing its critical points, and finitely many real coefficients and ordered pairs of vertices for the cosine combination.

**Goal:** Verify that the definitions are independent of angular choices and that the stated cosine combination is real analytic.

1.1 By [F1], on a sufficiently small connected neighborhood of an overlap the two angular coordinate systems differ by a constant lattice vector. Substituting this translation into a convergent power series only changes its center, so the local analytic condition is independent of the angular chart. The first and second partial derivatives are unchanged under such a translation. Thus the condition that all first derivatives vanish is independent of the angular chart, and at a critical point the displayed matrix represents the intrinsic Hessian from [F4]. Periodicity in [F2] makes each cosine of a phase difference independent of the chosen representatives. [F1, F2, F4, algebra]

2.1 Fix a chart point with coordinates $a$ and write nearby coordinates as $a+h$. For distinct $x,y$, [F2] and [F3] give $\cos((a_x-a_y)+(h_x-h_y))=\operatorname{Re}(\exp(i(a_x-a_y))\sum_{n\geq0}i^n(h_x-h_y)^n/n!)$. Expanding each finite power by [F5] gives a real power series in $h_x,h_y$ after taking real parts. In degree $n$, the sum of absolute monomial factors is $\sum_{k=0}^n c_{n,k}|h_x|^k|h_y|^{n-k}=(|h_x|+|h_y|)^n$ by [F5]; taking real parts after multiplication by the unit-modulus factor $\exp(i(a_x-a_y))i^n$ cannot increase this bound by [F2]. The sum of the absolute values of all its terms is bounded by $\sum_{n\geq0}(|h_x|+|h_y|)^n/n!$, which converges by [F3]. Thus it is an absolutely convergent multivariable power series on every bounded polydisc; its coefficients in the other coordinates are zero. If $x=y$, the term is the constant $1$. A finite real linear combination remains such a series on a common polydisc, proving the assertion by [F4]. [F2, F3, F4, F5, algebra] ∎
