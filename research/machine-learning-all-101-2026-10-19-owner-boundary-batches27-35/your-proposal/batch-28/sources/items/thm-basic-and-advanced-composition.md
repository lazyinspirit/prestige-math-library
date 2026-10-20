---
id: thm-basic-and-advanced-composition
kind: theorem
title: Basic and advanced adaptive composition
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-differential-privacy-and-adjacency
  - thm-basic-adaptive-composition
  - thm-advanced-adaptive-composition-arbitrary-measurable-outputs
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: The basic clause is choice-free. Assume AC for the advanced clause, through the ordinary finite-measure Radon–Nikodym theorem and Azuma supplier; no regular conditional law is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy"
      url: https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf
    - title: "Salil Vadhan, The Complexity of Differential Privacy, 2017 manuscript"
      url: https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf
---

## Statement

Let databases be finite-support record-count functions, with neighbors differing by one added or removed record occurrence. For $k\ge1$, let round $i$ be a probability kernel $K_i(D,h,\cdot)$ from the $i$th arbitrary measurable output space, conditional on every prior transcript $h$. Suppose that for every ordered neighboring pair $D\sim D'$, every $h$, and every measurable round-$i$ event $A$,
$$
K_i(D,h,A)\le e^{\varepsilon_i}K_i(D',h,A)+\delta_i,
$$
where $\varepsilon_i\ge0$ and $\delta_i\ge0$. If $\sum_i\delta_i\le1$, the full transcript on the finite product sigma-algebra is $(\sum_i\varepsilon_i,\sum_i\delta_i)$-differentially private. Also, assuming AC, if every conditional round has the same parameters $(\varepsilon,\delta)$ with $\varepsilon\ge0$ and $0\le\delta\le1$, then for any $0<\delta'<1$ with $k\delta+\delta'\le1$, advanced composition on arbitrary measurable output spaces gives parameters $(\varepsilon',k\delta+\delta')$, where
$$
\varepsilon'=\sqrt{2k\ln(1/\delta')}\,\varepsilon+k\varepsilon(e^\varepsilon-1).
$$

## Statement references

[[thm-basic-adaptive-composition|Basic adaptive composition on arbitrary measurable output spaces]]

[[thm-advanced-adaptive-composition-arbitrary-measurable-outputs|Advanced composition on arbitrary measurable output spaces]]

[Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, §3.5.1, printed pp. 45–50.](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

[Vadhan, *The Complexity of Differential Privacy*, §2.2, PDF pp. 14–16.](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf)

## Facts & Assumptions

**Given:** The finite adaptive kernels and conditional event inequalities on arbitrary measurable output spaces in the Statement; AC for the advanced clause.

[A1] [[def-axiom-of-choice|AC]] is assumed for the ordinary Radon–Nikodym and concentration suppliers used only by the advanced clause.

[F1] [[def-differential-privacy-and-adjacency|Differential privacy]] is the event inequality for every ordered neighboring pair.

[F2] [[thm-basic-adaptive-composition|Basic adaptive composition]] applies to arbitrary measurable output spaces and heterogeneous parameters, with additive sums of epsilon and delta.

[F3] [[thm-advanced-adaptive-composition-arbitrary-measurable-outputs|Advanced adaptive composition]] proves the exact displayed epsilon and additive error on arbitrary measurable output spaces under AC, using joint-measure purification and ordinary prefix-law densities.

## Proof

1.1 Apply [F2] to the stated round kernels and their parameters. Its every-history hypotheses and arbitrary measurable output scope agree with the Statement, and the condition on the sum of the additive errors places the resulting parameter in the declared range. This gives the basic clause without choice. [F1, F2, given]

2.1 For the common-parameter clause assume [A1] and apply [F3] to the same kernels with common parameters $(\varepsilon,\delta)$ and the stated $\delta'$. Its hypotheses are exactly the every-history event inequalities and parameter conditions here. Its full-transcript event inequality has epsilon $\sqrt{2k\ln(1/\delta')}\,\varepsilon+k\varepsilon(e^\varepsilon-1)$ and additive error $k\delta+\delta'$, which gives the advanced clause by [F1]. [A1, F1, F3, given] ∎
