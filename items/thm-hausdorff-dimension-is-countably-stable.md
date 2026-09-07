---
id: "thm-hausdorff-dimension-is-countably-stable"
kind: "theorem"
title: "Hausdorff dimension is monotone and countably stable"
deps: ["thm-hausdorff-dimension-critical-exponent", "thm-hausdorff-measure-is-an-outer-measure", "prop-zero-dimensional-hausdorff-measure-counts"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Bishop–Peres §1.1 closing paragraph (p.3), Example 1.2.7, Exercise 1.6
      url: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Assume the Axiom of Countable Choice. For any countable family of subsets of a metric space,

$$\dim_H\left(\bigcup_{k\ge0}A_k\right)=\sup_{k\ge0}\dim_H A_k.$$

Inclusion implies monotonicity of dimension. Every at most countable set, including the empty set, has dimension zero.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Below the critical dimension the Hausdorff measure is infinite, and above it the measure is zero. [[thm-hausdorff-dimension-critical-exponent]]

[F2] Hausdorff outer measures are monotone and countably subadditive under Countable Choice. [[thm-hausdorff-measure-is-an-outer-measure]]

## Proof

1.1 If $A\subseteq B$, every exponent with $\mathcal H^s(B)=0$ also has $\mathcal H^s(A)=0$. Infimising zero exponents gives $\dim_H A\le\dim_H B$, including empty zero-exponent sets. Thus the dimension of the union is at least $D=\sup_k\dim_H A_k$. [F2]

2.1 If $D=\infty$ that lower bound is equality. If $D<\infty$, for every $t>D$ all $\mathcal H^t(A_k)$ vanish, so countable subadditivity makes their union null. Its dimension is at most every $t>D$, hence at most $D$. This includes $D=0$. [F1, F2, step 1.1]

3.1 An at most countable set has a cover by its singletons, whose total cost is zero for each $t>0$. The empty set has the empty cover. Thus their dimensions are zero; one point and every finite set are included. [given] ∎
