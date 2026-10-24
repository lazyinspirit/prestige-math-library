---
id: thm-the-exterior-derivative-is-a-graded-derivation
kind: theorem
title: "The exterior derivative is a graded derivation"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-local-coordinate-formula-for-the-exterior-derivative, def-graded-derivation-of-the-algebra-of-differential-forms, prop-the-exterior-derivative-commutes-with-restriction, prop-differential-forms-form-a-graded-commutative-algebra]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
---

## Statement

Let $M$ be a smooth manifold. The exterior derivative is an
$\mathbb R$-linear map $d:\Omega^*(M)\to\Omega^*(M)$ of degree one.
For homogeneous smooth forms $\alpha\in\Omega^p(M)$ and
$\beta\in\Omega^q(M)$, $$d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^{\deg\alpha}\alpha\wedge d\beta.$$

## Facts & Assumptions

**Given:** The smooth manifold and homogeneous forms in the statement, with $p,q\ge0$.

[F1] In a chart, $d(\sum_I\omega_I dx^I)=\sum_I d\omega_I\wedge dx^I$ ([[thm-local-coordinate-formula-for-the-exterior-derivative]]).

[F2] Exterior differentiation commutes with restriction to open subsets ([[prop-the-exterior-derivative-commutes-with-restriction]]).

[F3] Wedge products form an associative graded-commutative algebra ([[prop-differential-forms-form-a-graded-commutative-algebra]]).

[F4] A degree-one graded derivation is an $\mathbb R$-linear degree-one map satisfying the displayed signed product rule ([[def-graded-derivation-of-the-algebra-of-differential-forms]]).

## Proof

**Proof technique:** direct.

1.1 In a chart, $df=\sum_j(\partial_j f)dx^j$, and [F1] expresses $d\omega$ by differentiating each coefficient and adding one coordinate differential. Real linearity of partial differentiation therefore makes $d$ real linear on each degree, and every resulting term has degree one higher. Extending by the finite homogeneous decomposition gives a linear map on $\Omega^*$. [F1, given, algebra]

2.1 Write $\alpha=\sum_I a_I dx^I$ and $\beta=\sum_J b_J dx^J$. The ordinary coefficient product rule gives $d(a_Ib_J)=b_J da_I+a_I db_J$. Thus [F1] applied termwise to their wedge product gives $d\alpha\wedge\beta$ from the first summands. In the second summands, [F3] gives $db_J\wedge dx^I=(-1)^p dx^I\wedge db_J$, yielding $(-1)^p\alpha\wedge d\beta$. Repeated coordinate indices give zero wedges on both sides. [F1, F3, step 1.1, algebra]

3.1 By [F2], these chart identities are the restrictions of the corresponding global forms; equality on a chart cover implies equality on $M$. This globalizes linearity, the degree shift and the product rule, which together are exactly [F4]. The calculation includes degree zero via the empty wedge, and degrees above the dimension give zero. [F2, F4, step 1.1, step 2.1] ∎
