---
id: def-cofinality-strata-and-stationary-trace
kind: definition
title: "Cofinality strata, trace, and reflection"
status: draft
origin: pipeline
deps: ["def-club-filter-and-nonstationary-ideal", "def-cofinality"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lietz, Definitions 5.12 and 5.15, pp.42–43"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
    - title: "Vasey, Definition 15.6, p.85"
      url: https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf
---

## Definition

For an ordinal $\theta$ and an infinite regular cardinal $\lambda$, write $E^\theta_\lambda=\{\alpha<\theta:\operatorname{cf}(\alpha)=\lambda\}$. For an ordinal $\kappa$ and $S\subseteq\kappa$, define

$$\operatorname{Tr}(S)=\{\alpha<\kappa:\operatorname{cf}(\alpha)>\omega\text{ and }S\cap\alpha\text{ is stationary in }\alpha\}.$$

We say $S$ **reflects at** $\alpha$ when $\alpha\in\operatorname{Tr}(S)$, and is **nonreflecting** when its trace is empty. Stationarity in $\alpha$ uses clubs in that ordinal; it does not require $\alpha$ to be a cardinal, but the trace definition restricts its cofinality to be uncountable.
