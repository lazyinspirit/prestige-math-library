---
id: def-tdmath-diagonal-operator-model
kind: definition
title: "Diagonal self-adjoint operator model"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: ["def-hilbert-space","def-square-summable-family-on-an-arbitrary-index-set","def-unbounded-linear-operator-domain-and-graph"]
justified_by: []
dependency_roles: {"def-hilbert-space":"mathematical-premise","def-square-summable-family-on-an-arbitrary-index-set":"mathematical-premise","def-unbounded-linear-operator-domain-and-graph":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics (work in progress, dated 12 October 2026)"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "Complete 635-page PDF retrieved; §§4.2–4.6, printed pp.192–217, for microcanonical, canonical, quantum trace and grand-canonical constructions."
---

## Definition

Let $I$ be a finite or countably infinite set with a specified enumeration, let $E_i\in\mathbb R$, and let $\ell^2(I):=\{x:I\to\mathbb C:\sum_i|x_i|^2<\infty\}$ with inner product $\langle x,y\rangle=\sum_i x_i\overline{y_i}$, linear in the first variable. Write $u_i$ for the coordinate unit vector at $i$. The diagonal multiplication operator $H_E$ is the linear operator with domain $D(H_E):=\{x\in\ell^2(I):\sum_i|E_ix_i|^2<\infty\}$ and action $(H_Ex)_i:=E_ix_i$. Its domain is part of the operator data in the sense of [[def-unbounded-linear-operator-domain-and-graph]].

## Scope

The definition introduces no claim about a physical Hamiltonian or about a trace of $e^{-\beta H_E}$.
