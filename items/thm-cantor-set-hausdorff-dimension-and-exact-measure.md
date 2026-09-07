---
id: "thm-cantor-set-hausdorff-dimension-and-exact-measure"
kind: "theorem"
title: "The Cantor set has dimension log 2 / log 3 and critical measure one"
deps: ["lem-sharp-cantor-interval-mass-bound", "thm-hausdorff-mass-distribution-principle", "thm-hausdorff-dimension-critical-exponent", "thm-cantor-set-ternary-description", "thm-real-power-laws", "prop-cantor-measure-is-a-singular-atomless-probability-measure", "def-cantor-measure", "thm-existence-of-the-lebesgue-stieltjes-measure"]
sources:
  references:
    - title: Fremlin, Measure Theory, 264J
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
    - title: Hunter, Measure Theory, Theorem 2.34 and Example 2.37
      url: https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
landmark: true
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Assume the Axiom of Countable Choice. For the middle-thirds Cantor set $C$ and $s=\log2/\log3$,

$$\mathcal H^s(C)=1,\qquad\dim_H C=s.$$

These values use the unnormalised diameter-power convention.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Under the standing Countable Choice hypothesis, for the Cantor probability measure, every nonempty bounded set $U$ has $\mu_c^*(U)\le(\operatorname{diam}U)^s$ at $s=\log2/\log3$. [[lem-sharp-cantor-interval-mass-bound]]

[F2] Under the standing Countable Choice hypothesis, a finite Borel measure with outer mass on $A$ positive and diameter bound $C_0r^s$ gives $\mathcal H^s(A)\ge\mu^*(A)/C_0$. [[thm-hausdorff-mass-distribution-principle]]

[F3] Finite positive Hausdorff measure at $s$ forces dimension $s$. [[thm-hausdorff-dimension-critical-exponent]]

[F4] $C$ consists exactly of the ternary expansions using only zero and two. [[thm-cantor-set-ternary-description]]

[F5] Positive real powers obey the multiplication and power-of-power laws. [[thm-real-power-laws]]

[F6] Under the standing Countable Choice hypothesis, $\mu_c$ is a probability measure concentrated on $C$. [[prop-cantor-measure-is-a-singular-atomless-probability-measure]]

[F7] Under Countable Choice, $\mu_c=\mu_{F_c}$, where the extended Cantor function $F_c$ is nondecreasing and right-continuous on $\mathbb R$. [[def-cantor-measure]]

[F8] Under Countable Choice, the Lebesgue–Stieltjes measure $\mu_F$ of a nondecreasing right-continuous real function $F$ is a Borel measure on $\mathbb R$. [[thm-existence-of-the-lebesgue-stieltjes-measure]]

## Proof

1.1 The $2^m$ length-$3^{-m}$ basic intervals cover $C$ and have total $s$-cost $2^m(3^{-m})^s=1$. At each positive scale take $m$ sufficiently large. Thus $\mathcal H^s(C)\le1$, including the level-zero cover at its own scale. [F4, F5]

2.1 The defining function in F7 satisfies F8, so $\mu_c$ is a Borel measure; F6 makes it finite with total mass one and $\mu_c(\mathbb R\setminus C)=0$. Every Borel superset $B$ of $C$ has $\mu_c(\mathbb R\setminus B)=0$ by monotonicity, hence $\mu_c(B)=1$. Thus the Borel-hull outer measure in F2 satisfies $\mu_c^*(C)=1$. F1 supplies its diameter bound with constant one, in particular for every nonempty set of diameter less than $r_0=1$. F2 gives $\mathcal H^s(C)\ge1$. Together with step 1.1 this gives finite positive measure one, so F3 gives $\dim_H C=s$. [F1, F2, F3, F6, F7, F8, step 1.1] ∎
