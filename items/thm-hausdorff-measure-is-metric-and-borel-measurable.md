---
id: "thm-hausdorff-measure-is-metric-and-borel-measurable"
kind: "theorem"
title: "Hausdorff measure is metric and measures every Borel set"
deps: ["thm-hausdorff-measure-is-an-outer-measure", "def-metric-outer-measure", "thm-borel-sets-are-caratheodory-measurable-for-metric-outer-measures", "thm-caratheodory-outer-measure-theorem"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Fremlin, Measure Theory, 264C,E
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
    - title: Bishop–Peres, Theorem 1.2.4
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

Assume the Axiom of Countable Choice. On every metric space, $\mathcal H^s$ is a metric outer measure for each finite $s\ge0$. In particular, if nonempty $A,B$ have $d(A,B)>0$,

$$\mathcal H^s(A\cup B)=\mathcal H^s(A)+\mathcal H^s(B).$$

The equality also holds if either set is empty. Every Borel set is Carathéodory measurable, and the restriction to the full Carathéodory sigma-algebra is a complete measure.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] $\mathcal H^s$ is an outer measure under Countable Choice. [[thm-hausdorff-measure-is-an-outer-measure]]

[F2] A metric outer measure is additive on nonempty positively separated sets. [[def-metric-outer-measure]]

[F3] Every Borel subset of a metric space is Carathéodory measurable for every metric outer measure. [[thm-borel-sets-are-caratheodory-measurable-for-metric-outer-measures]]

[F4] The Carathéodory domain of an outer measure is a sigma-algebra and its restriction is complete. [[thm-caratheodory-outer-measure-theorem]]

## Proof

1.1 Let $h=d(A,B)>0$. A covering set of diameter at most $\delta<h$ cannot meet both $A$ and $B$. Partition any cover of their union by which set it meets, discarding sets meeting neither. Its cost is at least $\mathcal H^s_\delta(A)+\mathcal H^s_\delta(B)$; if no cover exists the inequality still holds. [given]

2.1 Take small-scale suprema in that inequality. The supremum of the sums of the two nondecreasing scale values is the sum of their suprema: approximate both finite lower bounds at one common scale; this also proves the assertion when one supremum is infinite. Subadditivity gives the opposite inequality. Empty sets use the outer-measure zero axiom. Thus the metric condition holds, also at $s=0$. [F1, F2, step 1.1]

3.1 The metric criterion gives Borel measurability, and the Carathéodory theorem gives completeness on the full measurable domain. [F3, F4, step 2.1] ∎
