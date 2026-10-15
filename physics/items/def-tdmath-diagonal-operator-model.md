---
id: def-tdmath-diagonal-operator-model
kind: definition
title: "Diagonal self-adjoint operator model"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: ["def-hilbert-space","def-square-summable-family-on-an-arbitrary-index-set","def-unbounded-linear-operator-domain-and-graph","def-countable-choice"]
justified_by: [lem-tdmath-diagonal-model-hilbert-and-domain, lem-tdmath-diagonal-self-adjointness]
dependency_roles: {"def-hilbert-space":"mathematical-premise","def-square-summable-family-on-an-arbitrary-index-set":"mathematical-premise","def-unbounded-linear-operator-domain-and-graph":"mathematical-premise","def-countable-choice":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics (work in progress, dated 12 October 2026)"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "Complete 635-page PDF retrieved; §§4.2–4.6, printed pp.192–217, for microcanonical, canonical, quantum trace and grand-canonical constructions."
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

Let $I$ be a finite or countably infinite set with a specified enumeration, let $E_i\in\mathbb R$, and let $\ell^2(I):=\{x:I\to\mathbb C:\sum_i|x_i|^2<\infty\}$ with inner product $\langle x,y\rangle=\sum_i x_i\overline{y_i}$, linear in the first variable. Write $u_i$ for the coordinate unit vector at $i$. The diagonal multiplication operator $H_E$ is the linear operator with domain $D(H_E):=\{x\in\ell^2(I):\sum_i|E_ix_i|^2<\infty\}$ and action $(H_Ex)_i:=E_ix_i$. [[lem-tdmath-diagonal-model-hilbert-and-domain]] proves completeness of the coefficient space, linearity and density of this domain, and linearity of the coordinate action before the Hilbert-space operator interpretation is used. Its domain is part of the operator data in the sense of [[def-unbounded-linear-operator-domain-and-graph]].

## Scope

The coefficient-space and domain construction above requires no choice assumption. Under Countable Choice ([[def-countable-choice]]), [[lem-tdmath-diagonal-self-adjointness]] proves that $H_E$ equals its Hilbert-space adjoint, including equality of domains; this is the self-adjointness referred to in the title. The choice assumption belongs to the imported adjoint convention used by that lemma.

The definition introduces no claim about a physical Hamiltonian or about a trace of $e^{-\beta H_E}$.
