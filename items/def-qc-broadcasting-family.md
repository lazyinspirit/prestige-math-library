---
id: def-qc-broadcasting-family
kind: definition
title: "Broadcasting Family"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 6
deps: ["def-qc-quantum-channel", "def-qc-partial-trace", "def-qc-density-operator"]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Howard Barnum, Carlton M. Caves, Christopher A. Fuchs, Richard Jozsa, and Benjamin Schumacher, Noncommuting Mixed States Cannot Be Broadcast"
      url: "https://arxiv.org/pdf/quant-ph/9511010"
      locator: "Complete paper, PDF pp.2–10; pair statement/construction p.3, fidelity and invertible-state proof Eqs.(4)–(31), pp.4–10"
---

## Definition

Let $H$ be a nonzero finite-dimensional complex inner-product space, let $\mathcal D(H)$ be its density operators (nonnegative operators of trace one; [[def-qc-density-operator]]), and let $S\subseteq\mathcal D(H)$ be any set, finite or infinite. A **broadcaster** for $S$ is one quantum channel $B:\mathcal L(H)\to\mathcal L(H\otimes H)$ (completely positive and trace-preserving; [[def-qc-quantum-channel]]) such that for every $\rho\in S$,
$$\operatorname{Tr}_1(B(\rho))=\rho\quad\text{and}\quad\operatorname{Tr}_2(B(\rho))=\rho.$$
Here $\operatorname{Tr}_1$ and $\operatorname{Tr}_2$ are the partial traces over the indicated output factors ([[def-qc-partial-trace]]). The joint output may be correlated; this definition does not require $B(\rho)=\rho\otimes\rho$.
