---
id: lem-holm-rejection-events-are-measurable
kind: lemma
title: Holm rejection events are measurable
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - alg-holm-step-down-procedure
  - def-p-value
  - def-statistic-and-estimator
  - def-measurable-function-between-measurable-spaces
  - def-sigma-algebra
  - thm-arithmetic-and-lattice-operations-preserve-measurability
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Definitions 3.1–3.3"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $m\ge1$, let $p_1,\ldots,p_m:\mathcal X\to[0,1]$ be p-value statistics on a measurable data space $(\mathcal X,\mathcal A)$, and fix $\alpha\in[0,1]$. Define $R_\alpha(x)$ by the lexicographic ordering and passing-prefix formulas of [[alg-holm-step-down-procedure]], applied here to these statistics whether or not they are null-valid. These formulas are well-defined for every input in $[0,1]^m$: the ordering is unique, the tested denominators are positive, and the admissible prefix lengths include $0$. Then each rejection event $D_i(\alpha):=\{x\in\mathcal X:i\in R_\alpha(x)\}$ belongs to $\mathcal A$.

## Facts & Assumptions

**Given:** A measurable data space, finitely many p-value statistics $p_i$, and $\alpha\in[0,1]$.

[F1] [[def-p-value]]: a p-value statistic is a statistic $p:\mathcal X\to[0,1]$, where $[0,1]$ carries the trace of the Borel sigma-algebra.

[F2] [[def-statistic-and-estimator]]: a statistic is a measurable map from the data space to its target measurable space.

[F3] The ordering and prefix formulas of [[alg-holm-step-down-procedure]] order the pairs $(p_i(x),i)$ lexicographically and return the prefix whose rank cutoffs all pass. Here these formulas define $R_\alpha$ on all the given measurable inputs; on null-valid inputs they agree with the cited procedure. Null validity is not needed for measurability.

[F4] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: sums and scalar multiples of measurable real-valued functions are measurable whenever defined; hence differences of measurable real-valued functions are measurable.

[F5] [[def-measurable-function-between-measurable-spaces]]: a map is measurable when the preimage of each measurable target set belongs to the source sigma-algebra.

[F6] [[def-sigma-algebra]]: a sigma-algebra is closed under finite intersections and finite unions.

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F2], each $p_i$ is measurable into $[0,1]$ with its Borel trace. For indices $a,b$, the difference $p_a-p_b$ is measurable by [F4], so $\{p_a\le p_b\}$ and $\{p_a<p_b\}$ are measurable preimages by [F5] of the Borel half-lines $(-\infty,0]$ and $(-\infty,0)$. For each permutation $\pi$, its ordering cell $C_\pi$ is the finite intersection over positions $a<b$ of $\{p_{\pi(a)}\le p_{\pi(b)}\}$ if $\pi(a)<\pi(b)$ and $\{p_{\pi(a)}<p_{\pi(b)}\}$ otherwise. These cells are measurable by [F6], and every $x$ belongs to exactly one because lexicographic ordering with index tie-breaking gives a unique permutation by [F3]. For rank $j$, let $Q_{\pi,j}=\{p_{\pi(j)}\le\alpha/(m-j+1)\}$; this pass event and its failure event $Q_{\pi,j}^{c}$ are measurable preimages of Borel half-lines by [F1], [F2], and [F5]. For $k\in\{0,\ldots,m\}$, intersect $C_\pi$ with the pass events for $j\le k$ and, when $k<m$, the failure event at $k+1$. Empty intersections are omitted when $k=0$ or $k=m$. The resulting measurable cell is exactly the event that the order is $\pi$ and the returned prefix length is $k$, by [F3]; these finitely many cells partition $\mathcal X$. [F1, F2, F3, F4, F5, F6, construct]

2.1 The event $D_i(\alpha)$ is the union of the cells from step 1.1 over all permutations and prefix lengths $k$ with $i\in\{\pi(1),\ldots,\pi(k)\}$. This is a finite union because there are $m!$ permutations and $m+1$ prefix lengths. By [F6], $D_i(\alpha)\in\mathcal A$ for every $i$. [F3, F6, step 1.1, construct] ∎
