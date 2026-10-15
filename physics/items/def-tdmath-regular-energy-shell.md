---
id: def-tdmath-regular-energy-shell
kind: definition
title: "Regular energy shell and weighted area measure"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: ["def-lebesgue-measure-and-the-lebesgue-sigma-algebra","thm-euclidean-implicit-function-theorem"]
justified_by: []
dependency_roles: {"def-lebesgue-measure-and-the-lebesgue-sigma-algebra":"mathematical-premise","thm-euclidean-implicit-function-theorem":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture text"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S2
      locator: "Complete author-hosted HTML chapter read; ideal-gas phase-space integrals and canonical Gaussian momentum distribution."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics"
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
      locator: "Complete 635-page lecture notes retrieved and read; §§4.2–4.6, pp.192–217, ensembles, microcanonical phase space, quantum density matrices, and traces."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Definition

Let $O\subset\mathbb R^m$, $m\ge2$, be open, let $H\in C^2(O,\mathbb R)$, and let $J\subset\mathbb R$ be open. An energy $E\in J$ is **regular** if $\nabla H(x)\ne0$ for every $x\in\Sigma_E:=H^{-1}(\{E\})$. By the implicit-function theorem, a neighborhood of each point of a nonempty regular level is a graph $x_i=h(z)$.

In a graph chart, use the local area density $\sqrt{1+|\nabla h(z)|^2}\,dz$, where $dz$ is $(m-1)$-dimensional Lebesgue measure. A **graph partition** on $\Sigma_E$ is a locally finite graph-chart cover with nonnegative smooth functions $\chi_a$ supported in their respective charts and summing to one on the level. Whenever such a partition is supplied, define the candidate weighted shell integral by
$$\mu_E(g):=\sum_a\int g(z,h_a(z))\chi_a(z,h_a(z))|\partial_iH(z,h_a(z))|^{-1}\,dz$$
for nonnegative Borel $g$. Its independence from the chosen chart partition, and its equality with $\int_{\Sigma_E}g|\nabla H|^{-1}dA_E$, are proved in the theorem on this page. If $0<\mu_E(1)<\infty$, the **microcanonical shell probability** is $\widehat\mu_E:=\mu_E/\mu_E(1)$.

This is an explicit chart-based definition, not a formal delta distribution $\delta(H-E)$. Critical levels are excluded.
