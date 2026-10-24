---
id: ex-qftx-adhm-one-dimensional-fi-chambers
kind: example
title: "The positive-FI and zero-FI rank-one chambers"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-linear-data-and-framed-monads-examples
dependency_level: 4
deps:
  - def-qftx-adhm-linear-data-stability-and-regularity
  - thm-qftx-adhm-real-complex-quotient-correspondence
  - thm-qftx-framed-p2-monad-adhm-correspondence
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - thm-smooth-dependence-of-ode-solutions-on-parameters
  - thm-higher-dimensional-spheres-are-simply-connected
  - cor-connected-cover-of-a-simply-connected-space-is-trivial
  - thm-general-stokes-theorem
dependency_roles:
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
  thm-qftx-adhm-real-complex-quotient-correspondence: mathematical-premise
  thm-qftx-framed-p2-monad-adhm-correspondence: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  thm-higher-dimensional-spheres-are-simply-connected: mathematical-premise
  cor-connected-cover-of-a-simply-connected-space-is-trivial: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
axiom_base: "ZF + full Axiom of Choice through the quotient and topological suppliers."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Take $N=k=1$. For every $\zeta>0$, the positive real-FI ADHM quotient is $\mathbb C^2$, with arbitrary scalar coordinates $B_1,B_2$, $J=0$, and $|I|=\sqrt{\zeta}$. The stable zero-real-FI locus is empty. The positive-FI monad is therefore a rank-one framed torsion-free sheaf that is not locally free. On the round oriented $S^4$, let $f$ be the real curvature two-form of a smooth $U(1)$ connection, define anti-self-dual (ASD) by $f=-*f$, and define charge by $q=-(8\pi^2)^{-1}\int_{S^4}f\wedge f$. The ordinary smooth charge-one $U(1)$ ASD space is empty, so the positive-FI space cannot equal it.

## Example references

[[def-qftx-adhm-linear-data-stability-and-regularity]]

[[thm-qftx-adhm-real-complex-quotient-correspondence]]

[[thm-qftx-framed-p2-monad-adhm-correspondence]]

## Facts & Assumptions

**Given:** The raw ADHM convention and $ζ>0$.

[F1] In dimension one, stability is $I\ne0$, the complex equation is $IJ=0$, and the real equation is $|I|^2-|J|^2=\zeta$. [[def-qftx-adhm-linear-data-stability-and-regularity]]

[F2] Positive real-FI orbits correspond to stable complex data; zero real-FI stable data are exactly the regular locus. [[thm-qftx-adhm-real-complex-quotient-correspondence]]

[F3] Stable data yield the stated framed monad, and its sheaf is locally free exactly for costable data. [[thm-qftx-framed-p2-monad-adhm-correspondence]]

[F4] $S^3$ is simply connected and every connected cover of it is trivial. [[thm-higher-dimensional-spheres-are-simply-connected]], [[cor-connected-cover-of-a-simply-connected-space-is-trivial]]

[F5] Smooth partitions of unity exist under countable choice, and solutions to smooth ODEs depend smoothly on initial data and parameters. Full AC supplies countable choice. [[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[thm-smooth-dependence-of-ode-solutions-on-parameters]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F6] Stokes applies on the compact oriented four-sphere under countable choice. [[thm-general-stokes-theorem]], [[def-countable-choice]]

## Proof

**Given:** $V=W=\mathbb C$, with the standard Hermitian structures.

1.1 Since stability says $I\ne0$, $IJ=0$ forces $J=0$. The real equation is then $|I|^2=\zeta$, so $I$ lies on the circle of radius $\sqrt\zeta$. The $U(1)$ gauge action multiplies $I$ by its phase and leaves scalar $B_1,B_2$ unchanged. It is transitive on that circle with trivial stabilizer; hence the quotient is exactly the unconstrained pair $(B_1,B_2)\in\mathbb C^2$. By [F2], this is the positive-FI stable quotient. [F1, F2, algebra]

2.1 At zero real level, $J=0$ still follows from $I\ne0$ and $IJ=0$, while the real equation becomes $|I|^2=0$. This contradicts $I\ne0$, so the stable zero-level locus is empty. In the positive chamber, $J=0$ makes all of $V$ a nonzero invariant subspace in $\ker J$; the data are not costable. By [F3], their framed sheaves are not locally free. [F1, F2, F3, step 1.1, algebra]

3.1 Let $P\to S^4$ be any smooth principal $U(1)$ bundle. Smooth local connection forms glue by a smooth partition of unity [F5]. Parallel transport from the center of each closed hemisphere along radial segments gives a smooth trivialization: each transported frame solves a linear smooth ODE, and [F5] supplies its smooth dependence on the endpoint. Their transition is a map $g:S^3\to U(1)$. Pulling back the universal cover $\mathbb R\to U(1)$ gives a covering of $S^3$; its connected component through a chosen point is a connected cover, hence is one-sheeted by [F4]. Thus $g$ lifts to $\theta:S^3\to\mathbb R$. Since the covering is a local diffeomorphism and $g$ is smooth, the lift is smooth. The homotopy $\theta_s=(1-s)\theta+s\theta(x_0)$ makes $g$ null-homotopic. Reparameterize this homotopy to be constant near its final parameter and use it on a collar of one hemisphere; this changes that trivialization so the transition is constant and the local frames glue to a global frame. Hence $P$ is trivial. In that frame write the real connection form as $a$ and its curvature as $f=da$, so $df=0$. Then $f\wedge f=d(a\wedge f)$, and Stokes [F6] gives $\int_{S^4}f\wedge f=0$. If it is ASD, $f=-*f$, so $f\wedge f=-f\wedge *f=-|f|^2d\mathrm{vol}$. The zero integral forces $f=0$, and the charge in the Statement is zero. Thus no smooth charge-one $U(1)$ ASD connection exists, and that empty ordinary sector cannot equal the positive-FI quotient $\mathbb C^2$. [F4, F5, F6, step 1.1, algebra] ∎
