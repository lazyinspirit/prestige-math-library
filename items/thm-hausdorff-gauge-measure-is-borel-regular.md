---
id: thm-hausdorff-gauge-measure-is-borel-regular
kind: theorem
title: "Hausdorff gauge measure is a metric outer measure and measures Borel sets"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-hausdorff-dimension-function-and-gauge-measure
  - def-countable-choice
  - def-metric-outer-measure
  - thm-borel-sets-are-caratheodory-measurable-for-metric-outer-measures
  - thm-caratheodory-outer-measure-theorem
proof_strategy: direct
verification:
  precheck: n/a
sources:
  references:
    - title: "Beresnevich and Velani, A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures, §2.1"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf"
    - title: "Beresnevich and Velani, A note on zero-one laws in metrical Diophantine approximation, §2"
      url: "https://arxiv.org/pdf/0803.2355v1"
---

## Statement

Assume the Axiom of Countable Choice. Let $f$ be a dimension function and let $\mathcal H^f$ be the ball-cover gauge measure defined by costs $f(r)$. On every metric space, $\mathcal H^f$ is a metric outer measure: if nonempty $A,B$ have positive distance, then

$$\mathcal H^f(A\cup B)=\mathcal H^f(A)+\mathcal H^f(B).$$

Every Borel set is Carathéodory measurable, so the restriction of $\mathcal H^f$ to the Borel sigma-algebra is a measure.

## Statement references

[Beresnevich and Velani, *A Mass Transference Principle and the Duffin–Schaeffer Conjecture for Hausdorff Measures*, §2.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf)

[Beresnevich and Velani, *A note on zero-one laws in metrical Diophantine approximation*, §2](https://arxiv.org/pdf/0803.2355v1)

## Facts & Assumptions

**Given:** Countable Choice and the ball-cover definition of $\mathcal H^f$.

[A1] Countable Choice supplies the countable sequence of near-minimizing covers in step 1.2. ([[def-countable-choice]])

[F1] A metric outer measure makes every Borel set Carathéodory measurable. ([[thm-borel-sets-are-caratheodory-measurable-for-metric-outer-measures]])

[F2] The Carathéodory measurable sets form a sigma-algebra, and restriction of the outer measure to them is a complete measure. ([[thm-caratheodory-outer-measure-theorem]])

## Proof

1.1 The empty set has the empty cover and measure zero. If $A\subseteq B$, every ball cover of $B$ covers $A$, so $\mathcal H^f_\delta(A)\le\mathcal H^f_\delta(B)$ and the limiting measures are monotone. [given, algebra]

1.2 Fix $\delta>0$. If $\sum_j\mathcal H^f_\delta(E_j)=\infty$, countable subadditivity at scale $\delta$ is automatic. Otherwise, for each $\varepsilon>0$, Countable Choice selects for every $j$ a $\delta$-ball cover of $E_j$ with cost at most $\mathcal H^f_\delta(E_j)+\varepsilon2^{-j}$. The union of these covers covers $\bigcup_jE_j$, so
$$\mathcal H^f_\delta\!\left(\bigcup_jE_j\right)\le\sum_j\mathcal H^f_\delta(E_j)+\varepsilon.$$
Letting $\varepsilon\downarrow0$, then taking the supremum as $\delta\downarrow0$, proves countable subadditivity of $\mathcal H^f$. [A1, given, step 1.1, algebra]

2.1 Suppose $d(A,B)=h>0$. For $0<\delta<h/2$, a ball of radius at most $\delta$ has diameter at most $2\delta<h$, so it cannot meet both $A$ and $B$. Splitting any such cover of $A\cup B$ according to which set it meets gives $\mathcal H^f_\delta(A\cup B)\ge\mathcal H^f_\delta(A)+\mathcal H^f_\delta(B)$. Taking $\delta\downarrow0$ gives the same lower bound for $\mathcal H^f$; step 1.2 gives the reverse inequality. This is the metric outer-measure property. [step 1.2, algebra]

3.1 By [F1], every Borel set is Carathéodory measurable for this metric outer measure. By [F2], the restriction is a measure. [F1, F2, step 2.1] ∎

