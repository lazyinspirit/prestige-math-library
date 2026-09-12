---
id: "def-filtration-and-filtered-probability-space"
kind: "definition"
title: "Filtration and filtered probability space"
deps: ["def-probability-measure", "def-sigma-algebra"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "van der Vaart, Martingales, Diffusions and Financial Mathematics"
      url: https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf
status: published
origin: "pipeline"
---

## Definition

A **discrete filtered probability space** is $(\Omega,\mathcal F,(\mathcal F_n)_{n\in\mathbb N_0},P)$, where $(\Omega,\mathcal F,P)$ is a probability space [[def-probability-measure]], each $\mathcal F_n$ is a sigma-algebra on $\Omega$ [[def-sigma-algebra]], and $\mathcal F_n\subseteq\mathcal F_{n+1}\subseteq\mathcal F$. The sequence $(\mathcal F_n)$ is a **filtration**. Time starts at zero. Neither completeness nor triviality of $\mathcal F_0$ is required.

Restriction of $P$ to $\mathcal F_n$ has total mass one and is countably additive: a disjoint sequence in $\mathcal F_n$ is also such a sequence in $\mathcal F$, with the same union and the same values of $P$. Thus each restriction is a probability measure. This specifies a structure and uses no choice principle. Real-valued processes will be the default.
