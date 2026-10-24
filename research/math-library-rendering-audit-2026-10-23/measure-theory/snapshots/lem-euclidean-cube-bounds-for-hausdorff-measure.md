---
id: "lem-euclidean-cube-bounds-for-hausdorff-measure"
kind: "lemma"
title: "Elementary lower and upper bounds on a unit cube"
deps: ["def-hausdorff-measure", "def-lebesgue-outer-measure", "thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume", "thm-lebesgue-measure-of-a-box-of-every-kind", "thm-real-power-laws"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Falconer §1.2 p.8 cube upper estimate; §1.4 pp.12–13 volume covers; Fremlin 264H(b)
      url: https://www.ma.ic.ac.uk/~jswlamb/M345PA46/F85%20chap%201.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: published
origin: "pipeline"
---

## Statement

Assume the Axiom of Countable Choice. For every integer $n\ge1$ and $A\subseteq\mathbb R^n$ in the Euclidean metric,

$$\lambda_n^*(A)\le\mathcal H^n(A),\qquad 1\le\mathcal H^n((0,1]^n)\le n^{n/2}.$$

Only coordinate boxes, not the isodiametric inequality, are needed.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Hausdorff measure is the supremum of diameter-power covering infima. [[def-hausdorff-measure]]

[F2] Under Countable Choice Lebesgue outer measure is countably subadditive and agrees with elementary volume. [[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]]

[F3] Under the standing Countable Choice hypothesis, a finite coordinate box of any endpoint convention has measure the product of its side lengths, including zero side lengths. [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[F4] Positive real powers obey product and power-of-power laws. [[thm-real-power-laws]]

## Proof

1.1 If a nonempty bounded $U$ has diameter $r$, its $i$th coordinate ranges between an infimum $a_i$ and supremum $b_i$ with $b_i-a_i\le r$. Hence $U\subseteq\prod_i[a_i,b_i]$ and $\lambda_n^*(U)\le\prod_i(b_i-a_i)\le r^n$. If $r=0$ this is a zero-volume singleton box. [F2, F3]

2.1 For every finite-scale cover of $A$, countable subadditivity gives $\lambda_n^*(A)\le\sum_j(\operatorname{diam}U_j)^n$. Infimising and then taking the small-scale supremum gives the lower bound; absent covers give the same inequality with infinity on the right. The empty set has both values zero. [F1, F2, step 1.1]

3.1 Partition $(0,1]^n$ into $m^n$ half-open cubes of side $1/m$. Each has diameter $\sqrt n/m$ (the supremum of corner distances), so the total cost is $m^n(\sqrt n/m)^n=n^{n/2}$. Choose $m$ large for any prescribed positive scale. Thus the upper bound holds, while the lower bound is the unit box volume one. For $n=1$ both bounds equal one. [F1, F3, F4, step 2.1] ∎
