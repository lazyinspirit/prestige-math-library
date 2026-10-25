---
id: "thm-hausdorff-measure-is-an-outer-measure"
kind: "theorem"
title: "Hausdorff measure is an outer measure"
deps: ["def-hausdorff-measure", "def-outer-measure", "def-countable-choice", "def-nonnegative-extended-series"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Fremlin 264B and 264Xa
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: published
origin: "pipeline"
---

## Statement

Assume the Axiom of Countable Choice. For any metric space and finite $s\ge0$, each $\mathcal H^s_\delta$, $0<\delta\le\infty$, is an outer measure. So is $\mathcal H^s$: it vanishes at $\varnothing$, is monotone, and satisfies

$$\mathcal H^s\left(\bigcup_{j\ge0}A_j\right)\le\sum_{j\ge0}\mathcal H^s(A_j).$$

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] $\mathcal H^s$ is the supremum of the finite-scale covering infima. [[def-hausdorff-measure]]

[F2] An outer measure vanishes at the empty set, is monotone, and is countably subadditive on all subsets. [[def-outer-measure]]

[F3] Countable Choice selects one member from each nonempty set in a countable family. [[def-countable-choice]]

[F4] Nonnegative extended sums are suprema of finite partial sums. [[def-nonnegative-extended-series]]

## Proof

1.1 The empty cover has cost zero at every scale; a cover of a larger set covers each subset. Hence both functions vanish at the empty set and are monotone. This uses no positive-exponent assumption. [F1]

1.2 Fix $\delta$ and $(A_j)$. If $\sum_j\mathcal H^s_\delta(A_j)=\infty$, subadditivity is automatic. Otherwise, for $\varepsilon>0$ select for each $j$ a cover with cost at most $\mathcal H^s_\delta(A_j)+\varepsilon2^{-j-1}$; select an enumerated cover, so the resulting double family is countable. Empty $A_j$ may use the empty family. [F3, F1]

2.1 Flatten these covers along an enumeration of the pairs of indices. Every finite subfamily cost is bounded by the corresponding iterated sum, and every finite rectangle is eventually included; thus the nonnegative sums agree. The union has scale cost at most $\sum_j\mathcal H^s_\delta(A_j)+\varepsilon$. Letting $\varepsilon$ decrease to zero proves the fixed-scale assertion. [F4, step 1.2]

3.1 For finite $\delta$, the same inequality is at most $\sum_j\mathcal H^s(A_j)$. This bound is independent of $\delta$; taking the supremum proves the claimed inequality, including infinite right sides. Together with the first step these are all the outer-measure axioms. [F1, F2, step 1.1, step 2.1] ∎
