---
id: def-martins-axiom
kind: definition
title: Martin's Axiom at a cardinal and Martin's Axiom
status: published
origin: pipeline
deps: [def-poset-ccc-and-knaster-property, def-dense-open-sets-and-model-generic-filters, def-cardinal-arithmetic]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Definition 7.1", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Definition

Work in ZFC. For an infinite cardinal $\kappa$, $\mathrm{MA}(\kappa)$ says that whenever $P$ is a nonempty ccc forcing **partial order** and $\mathcal D$ is a family of at most $\kappa$ dense subsets of $P$, there is a filter $G\subseteq P$ meeting every member of $\mathcal D$. Here filters use the stronger-is-smaller convention. Replacing each $D$ by its downward closure shows that dense and dense-open formulations agree.

**Martin's Axiom**, MA, is the scheme $\mathrm{MA}(\kappa)$ for every infinite $\kappa<2^{\aleph_0}$. The inequality is strict; $\mathrm{MA}(2^{\aleph_0})$ is not included.
