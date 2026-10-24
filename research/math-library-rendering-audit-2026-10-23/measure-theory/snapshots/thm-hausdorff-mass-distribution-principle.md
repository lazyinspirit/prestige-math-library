---
id: "thm-hausdorff-mass-distribution-principle"
kind: "theorem"
title: "The mass distribution principle"
deps: ["def-hausdorff-measure", "thm-hausdorff-dimension-critical-exponent", "def-outer-measure", "def-measure"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Bishop–Peres Lemma 1.2.8
      url: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
landmark: true
proof_strategy: "direct"
status: published
origin: "pipeline"
---

## Statement

Assume the Axiom of Countable Choice. Let $\mu$ be a finite Borel measure on a metric space $X$ and define

$$\mu^*(E)=\inf\{\mu(B):E\subseteq B,\ B\text{ Borel}\}.$$

Let $A\subseteq X$ have $\mu^*(A)>0$, and let $s\ge0$ be finite. If $C>0$ and $r_0>0$ satisfy $\mu^*(U)\le C(\operatorname{diam}U)^s$ for every nonempty $U$ of diameter less than $r_0$, then

$$\mathcal H^s(A)\ge\mu^*(A)/C>0,\qquad\dim_H A\ge s.$$

For Borel $A$, $\mu^*(A)=\mu(A)$. A bound $\mu(B(x,r))\le Cr^s$ for every open ball with $0<r<r_0$ implies the same diameter bound (with the same $C$) for sets of diameter less than $r_0$. At exponent zero the nonempty-set cost is one.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Hausdorff scale values infimise arbitrary-set covering costs. [[def-hausdorff-measure]]

[F2] Positive $\mathcal H^s(A)$ implies $\dim_H A\ge s$. [[thm-hausdorff-dimension-critical-exponent]]

[F3] Outer measures are monotone and countably subadditive on arbitrary subsets. [[def-outer-measure]]

[F4] A Borel measure is countably additive on disjoint Borel sets and vanishes at the empty set. [[def-measure]]

## Proof

1.1 The function $\mu^*$ vanishes on the empty set, is monotone, and agrees with $\mu$ on Borel sets: inclusion gives the lower inequality, while the set itself is a candidate hull. It is countably subadditive: for finite $\sum_j\mu^*(E_j)$ choose Borel supersets $B_j$ of costs at most $\mu^*(E_j)+\varepsilon2^{-j-1}$ and use $\mu(\bigcup_jB_j)\le\sum_j\mu(B_j)$. The latter follows by disjointifying the Borel sets and applying countable additivity. Infinite right sides are automatic. Let $\varepsilon$ decrease to zero. Thus it is an outer measure. [F3, F4]

2.1 Fix $0<\delta<r_0$ and any admissible cover $(U_j)$ of $A$. Subadditivity and the assumed bound give $\mu^*(A)\le\sum_j\mu^*(U_j)\le C\sum_j(\operatorname{diam}U_j)^s$. Infimising gives $\mathcal H^s_\delta(A)\ge\mu^*(A)/C$, even if no cover exists. Taking the supremum and using the critical-exponent criterion proves both conclusions; at $s=0$ the dimension bound is the automatic nonnegativity. [F1, F2, step 1.1]

3.1 For the ball hypothesis, fix a nonempty $U$ of diameter $d<r_0$ and one $x\in U$. For every $d<r<r_0$, $U\subseteq B(x,r)$, so $\mu^*(U)\le Cr^s$. Let $r$ decrease to $d$. If $d=0$ and $s>0$ the bound is zero; if $s=0$ it is $C$, as required by the covering-cost convention. This proves the sufficient ball condition without evaluating $\mu$ on a non-Borel set. [step 1.1, given] ∎
