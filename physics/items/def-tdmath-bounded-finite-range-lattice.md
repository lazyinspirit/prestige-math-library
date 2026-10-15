---
id: def-tdmath-bounded-finite-range-lattice
kind: definition
title: "Bounded finite-range lattice model"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: ["def-finite-sum","def-real-exponential-function-and-e"]
justified_by: []
dependency_roles: {"def-finite-sum":"mathematical-premise","def-real-exponential-function-and-e":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete HTML chapter text"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
      locator: "Full author-hosted HTML chapter text read; canonical/grand-canonical ensembles §§1.3–1.4 pp.17–30; two-state model §1.2.3 pp.11–14; 1D Ising §5.3.1 pp.156–157."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics (work in progress, dated 12 October 2026)"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "Complete 635-page PDF retrieved; ensembles and traces §§4.2–4.6 pp.192–217; Bose/Fermi models §§5.6–5.7 pp.277–303; 1D Ising §6.2.2 pp.330–333."
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

Fix integers $d\ge1$, $L\ge1$, a finite alphabet $\mathcal A$ of cardinality $q\ge1$, and a finite, possibly empty, list of interaction shapes $S_a\subset\mathbb Z^d$, each nonempty and contained in $[-R,R]^d$ for some integer $R\ge0$. $\|\Phi_a\|_\infty$ is finite because its domain is finite. For each shape let $\Phi_a:\mathcal A^{S_a}\to\mathbb R$ be a bounded interaction function. Set $J_0:=\sum_a\|\Phi_a\|_\infty$. On $\Lambda_L:=\{1,\ldots,L\}^d$, define the free-boundary energy $H_L(s):=\sum_a\sum_{x:x+S_a\subseteq\Lambda_L}\Phi_a((s_{x+u})_{u\in S_a})$, for configurations $s\in\mathcal A^{\Lambda_L}$. For $\beta>0$, define the finite partition sum $Z_L(\beta):=\sum_{s\in\mathcal A^{\Lambda_L}}e^{-\beta H_L(s)}$ and normalized log-partition density $p_L(\beta):=L^{-d}\log Z_L(\beta)$.

## Scope

The alphabet, interaction list, shapes and functions are mathematical data. The formula uses the same interaction function at every translated anchor. This definition includes free boundary conditions only; other boundary energies are introduced by an explicit bound in [[thm-tdmath-finite-range-lattice-pressure-limit]].
