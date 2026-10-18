---
page: hopf-hecke-and-quantum-symmetry-interfaces-examples
title: "Hopf, Hecke, Quantum-Group, and Braid Interfaces: Examples and Counterexamples"
status: draft
items: []
examples: [ex-hh-rational-spectral-r-matrix-singular-parameters, ex-hh-rank-one-hecke-specializations-at-q-i]
---

This separate B companion checks finite parameter boundaries from the A-page interface. It contains a matrix-level calculation of the rational spectral $R$-family's singular values and a rank-one Hecke specialization showing how the exact normalized quadratic relation behaves at $q=i$ and $q=\pm1$. Neither example asserts a general root-of-unity centralizer or representation theorem.

Companion: [[hopf-hecke-and-quantum-symmetry-interfaces]].

## Reading prerequisites

Proposed reading order: [[hopf-hecke-and-quantum-symmetry-interfaces]]. These links describe planning order; item dependencies must be checked against the eventual complete arguments.

## Existing library route

- [quasitriangular-hopf-algebras-and-braided-module-categories](quasitriangular-hopf-algebras-and-braided-module-categories.md): finite algebraic R-matrix and module braiding Universal R is finite in H⊗H; completed Uq series requires a distinct action proof.

- [generic-coxeter-hecke-algebras-and-the-standard-basis](generic-coxeter-hecke-algebras-and-the-standard-basis.md): generic Hecke basis Specialization conditions remain explicit.

- [hecke-symmetries-and-generic-quantum-schur-weyl-duality](hecke-symmetries-and-generic-quantum-schur-weyl-duality.md): Q(q) matrix-image centralizers No positive characteristic or root-of-unity conclusion.

- [yang-baxter-operators-and-quantum-braid-representations](../braid-groups/yang-baxter-operators-and-quantum-braid-representations.md): YB operator to braid representation Operator invertibility required.

- [klr-algebras-induction-and-quantum-serre-categorification](../hecke-algebras-and-categorification/klr-algebras-induction-and-quantum-serre-categorification.md): KLR decategorification Exact quantum parameter and grading.

## Worked examples

[[ex-hh-rational-spectral-r-matrix-singular-parameters]] computes the eigenvalues and ranks of $R(u)$ and $\check R(u)$, and separates a parameterized Yang–Baxter identity from the invertibility needed for a braid-group representation.

[[ex-hh-rank-one-hecke-specializations-at-q-i]] proves the rank-one algebra is nonsemisimple at $q=i$ and semisimple at $q=\pm1$ under the normalized relation. Its conclusion is confined to $W=S_2$.

## Canonical suppliers and reuse boundaries

- [thm-hh-r-matrix-constructs-a-module-braiding](../../items/thm-hh-r-matrix-constructs-a-module-braiding.md): finite algebraic R and all left modules. Not completed universal R.

- [thm-hh-generic-quantum-schur-weyl-mutual-centralizers](../../items/thm-hh-generic-quantum-schur-weyl-mutual-centralizers.md): generic Q(q) mutual centralizers. The matrix-image mutual-centralizer equalities hold for all N≥1,n≥0 over Q(q); abstract Hecke faithfulness is only claimed for N≥n. No root-of-unity or positive-characteristic extension.

- [thm-a-yang-baxter-operator-gives-braid-group-representations](../../items/thm-a-yang-baxter-operator-gives-braid-group-representations.md): invertible YB operator yields braid action. YB without invertibility is insufficient.

- [thm-ordered-monomial-pbw-basis-for-the-shifted-yangian](../../items/thm-ordered-monomial-pbw-basis-for-the-shifted-yangian.md): shifted Yangian PBW. Auditor reports partial proof only; do not treat as a completed logical supplier until local proof completion is verified.

## Conventions, diagrams, and sources

Apply the [definition and diagram contracts](../../research/physics-algebras-planning-2026-10-17/definition-and-diagram-contracts.md) and [prerequisite and repair holds](../../research/physics-algebras-planning-2026-10-17/prerequisites.md) before treating any proposed result as a supplier. All diagrammatic operations require defined domains, codomains, orientations, coefficients, and algebraic verification. Existing carriers keep their canonical identities and placements. Physics-only mathematical carriers require the supported same-ID resolver route specified in those contracts; links here do not establish that route.

- [06-other-physics-algebras](../../research/physics-algebras-planning-2026-10-17/dossiers/06-other-physics-algebras.md)

Full page contract: [placement inventory](../../research/physics-algebras-planning-2026-10-17/splice/placed-pages.json) (entry `hopf-hecke-and-quantum-symmetry-interfaces-examples`). The original [audited research inventory](../../research/physics-algebras-planning-2026-10-17/proposed-pages.json) and its historical audit receipt remain unchanged.
