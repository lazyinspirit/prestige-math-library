---
id: def-stationary-antichains-modulo-nonstationary
kind: definition
title: "Stationary antichains modulo the nonstationary ideal"
status: published
origin: pipeline
deps: ["def-club-filter-and-nonstationary-ideal"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lietz, Definition 5.19 and following orientation, p.45"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
---

## Definition

In ZFC, for regular uncountable $\kappa$, a **stationary antichain modulo $\mathrm{NS}_\kappa$** is a family $\mathcal A$ of stationary subsets of $\kappa$ such that $S\cap T$ is nonstationary whenever $S,T\in\mathcal A$ are distinct. Write $S=_{\mathrm{NS}}T$ when $S\mathbin{\triangle}T$ is nonstationary, where $\triangle$ here denotes symmetric difference, not diagonal intersection. This is an equivalence relation: transitivity follows from $S\triangle U\subseteq(S\triangle T)\cup(T\triangle U)$ and the ideal axioms.

An actually disjoint family of stationary sets is in particular such an antichain. Questions about bounds beyond the $\kappa$-sized partitions just constructed belong to the later large-cardinal and ideal theory; no saturation or consistency theorem is asserted here.
