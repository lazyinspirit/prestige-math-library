---
id: def-exact-inferential-target-and-approximation-chain
kind: definition
title: "Exact inferential targets and approximation chains"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-likelihood-density
  - def-measurable-function-between-measurable-spaces
  - def-metric-space
  - def-probability-measure
  - def-statistical-and-computational-error-ledger
  - def-total-variation-distance-for-probability-laws
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "No additional choice principle is used. The fixed-data likelihood version is supplied as measurable data; no parameter-indexed family of versions is selected."
verification:
  precheck: n/a
sources:
  references:
    - title: "Anthony Davison and David Hinkley, Bootstrap Methods and Their Application (1997), Chapter 2 §2.5"
      url: "https://api.pageplace.de/preview/DT0400.9781107266384_A23760363/preview-9781107266384_A23760363.pdf"
      locator: "Chapter 2, §§2.5.1–2.5.2; scalar reference chains and distinctions among adjacent sampling and computation stages."
    - title: "David A. Levin, Yuval Peres, and Elizabeth L. Wilmer, Markov Chains and Mixing Times, 2nd ed."
      url: "https://pages.uoregon.edu/dlevin/MARKOV/markovmixing.pdf"
      locator: "§4.1 and Proposition 4.5; total variation as a metric on probability laws and its bounded-function control."
---

## Definition

Fix a measurable parameter space $(\Theta,\mathcal T)$, a prior probability measure $\Pi_0$ on it, observed data $x$, and an explicitly supplied $\mathcal T$-measurable likelihood version $\ell_x:\Theta\to[0,\infty)$. Define the evidence
$$Z_x:=\int_\Theta \ell_x\,d\Pi_0.$$
When $0<Z_x<\infty$, the **exact inferential target** is the probability measure
$$\Pi_x(A):=\frac{1}{Z_x}\int_A\ell_x\,d\Pi_0\qquad(A\in\mathcal T).$$
The measure is well-defined by the indefinite-integral construction
[[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]. This is a fixed-data definition: [[def-likelihood-density]] selects versions separately for fixed observations and supplies no common parameter-indexed measurable version. The required version and its measurability must therefore be stated; no posterior is assigned here when the evidence is zero or infinite.

For approximation accounting, declare a metric space $(\mathcal M,d)$ and a finite chain of elements $T_0,T_1,\ldots,T_m,\widehat T\in\mathcal M$, where $m\ge1$ and $T_1=\Pi_x$ whenever the exact target is included. The first distance $d(T_0,T_1)$ is the declared reference-to-target discrepancy; later adjacent distances and $d(T_m,\widehat T)$ are approximation and computation discrepancies on the same metric scale. For probability measures on a common measurable space, total variation may be used with the event-supremum convention of [[def-total-variation-distance-for-probability-laws]]. For scalar random quantities on one probability space, the statistical and computational stages are the same-scale signed differences defined in [[def-statistical-and-computational-error-ledger]]. This notation does not assert independence, unbiasedness, convergence, or that any numerical method attains a global optimum.

