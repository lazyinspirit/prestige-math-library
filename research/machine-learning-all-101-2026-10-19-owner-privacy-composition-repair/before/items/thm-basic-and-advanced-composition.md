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
  - thm-advanced-adaptive-composition-standard-borel-outputs
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: The basic clause is choice-free. The available advanced proof supplier assumes full AC and standard-Borel output/history spaces; the arbitrary-measurable-output claim below remains unresolved.
provenance:
  statement: literature-derived
  proof: not-supplied
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
where $\varepsilon_i\ge0$ and $\delta_i\ge0$. If $\sum_i\delta_i\le1$, the full transcript on the finite product sigma-algebra is $(\sum_i\varepsilon_i,\sum_i\delta_i)$-differentially private. Also, if every conditional round has the same parameters $(\varepsilon,\delta)$ with $\varepsilon\ge0$ and $0\le\delta\le1$, then for any $0<\delta'<1$ with $k\delta+\delta'\le1$, advanced composition on arbitrary measurable output spaces gives parameters $(\varepsilon',k\delta+\delta')$, where
$$
\varepsilon'=\sqrt{2k\ln(1/\delta')}\,\varepsilon+k\varepsilon(e^\varepsilon-1).
$$

## Statement references

[[thm-basic-adaptive-composition|Basic adaptive composition on arbitrary measurable output spaces]]

[[thm-advanced-adaptive-composition-standard-borel-outputs|The available advanced-composition proof under standard-Borel hypotheses]]

[Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, §3.5.1, printed pp. 45–50.](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

[Vadhan, *The Complexity of Differential Privacy*, §2.2, PDF pp. 14–16.](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf)

## Escalation

The advanced clause retains the controlling plan's arbitrary-measurable-output scope. The only completed local supplier, [[thm-advanced-adaptive-composition-standard-borel-outputs]], assumes standard-Borel outputs and histories and full AC; its hypotheses do not cover this statement. The basic clause is proved in [[thm-basic-adaptive-composition]] for arbitrary measurable spaces. No proof for the arbitrary-output advanced clause is supplied here. Owner reconciliation needed: either add an A-page supplier proving the arbitrary-output privacy-loss/Radon–Nikodym-kernel interface with complete hypotheses, or explicitly resolve the output-space scope in the shared plan. This is an unresolved prerequisite, so this item is escalated and is not ready.
