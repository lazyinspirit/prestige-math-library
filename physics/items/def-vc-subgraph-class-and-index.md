---
id: def-vc-subgraph-class-and-index
kind: definition
title: "VC-subgraph classes, envelopes, and the first-unshattered index"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-measurable-function-between-measurable-spaces
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-vc-class-of-sets-and-index
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-threshold-characterisations-of-real-and-extended-real-measurability
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Jon A. Wellner, Empirical Processes: Theory and Applications, Chapter 1, Definition 8.1"
      url: "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
    - title: "David Pollard, Probability Tools, Tricks, and Miracles, 2026 manuscript, Chapter 14, Section 14.2"
      url: "http://www.stat.yale.edu/~pollard/Books/Pttm/Pttm26-06-22.pdf"
---

## Definition

Let $(\mathcal X,\mathcal A)$ be a measurable space and let $\mathcal F$ be a class of measurable real-valued functions on it. The **subgraph** of $f\in\mathcal F$ is

$$C_f:=\{(x,t)\in\mathcal X\times\mathbb R:t<f(x)\}.$$

It is measurable in $\mathcal A\otimes\mathcal B(\mathbb R)$: the coordinate lifts are measurable by [[def-product-sigma-algebra-and-finite-product-sigma-algebras]], their difference is measurable by [[thm-arithmetic-and-lattice-operations-preserve-measurability]], and its strict negative set is measurable by [[thm-threshold-characterisations-of-real-and-extended-real-measurability]]. The class $\mathcal F$ is a **VC-subgraph class** when the set family $\mathcal C_{\mathcal F}:=\{C_f:f\in\mathcal F\}$ has finite VC index as defined in [[def-vc-class-of-sets-and-index]]. For nonempty $\mathcal F$, write $d(\mathcal F)$ for the greatest size of a finite shattered set (zero if none is shattered) and

$$V(\mathcal F):=d(\mathcal F)+1,$$

equivalently the least positive integer $V$ for which no $V$-point set is shattered. If no finite such integer exists, set $V=+\infty$. The empty class is treated separately and assigned index $V=0$ by convention. Thus for every nonempty finite-index class, the VC dimension is exactly $V-1$.

A **measurable envelope** of $\mathcal F$ is a nonnegative measurable function $F$ on $\mathcal X$ such that $|f(x)|\le F(x)$ for every $f\in\mathcal F$ and $x\in\mathcal X$. In an $L^r(Q)$ assertion, changing $F$ on a $Q$-null set does not change its norm or the distances in that assertion.
