---
page: hopf-hecke-and-quantum-symmetry-interfaces
title: "Hopf, Hecke, Quantum-Group, and Braid Interfaces"
status: draft
items: [def-hh-rational-spectral-r-matrix, lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter]
examples: []
---

This page coordinates the existing Hopf, Hecke, quantum-group, KLR, and braid routes. The finite algebraic R-matrix, generic quantum Schur–Weyl theorem, and invertible Yang–Baxter-to-braid theorem remain at their canonical homes. The local addition is the explicitly bounded rational spectral R-matrix on $\mathbb C^2$, with its complete parameterized Yang–Baxter proof.

Companion: [[hopf-hecke-and-quantum-symmetry-interfaces-examples]].

## Reading prerequisites

The current plan orders this page after [[algebraic-representation-and-tensor-symmetry-map]], [[hecke-symmetries-and-generic-quantum-schur-weyl-duality]], [[yang-baxter-operators-and-quantum-braid-representations]], and [[klr-algebras-induction-and-quantum-serre-categorification]]. Page order is reading context; each item's logical dependencies are listed separately in its own carrier.

## Existing library route

- [quasitriangular-hopf-algebras-and-braided-module-categories](quasitriangular-hopf-algebras-and-braided-module-categories.md): finite algebraic R-matrix and module braiding. The universal R is in the algebraic tensor square $H\otimes H$; a completed $U_q$ series requires a distinct action proof.

- [generic-coxeter-hecke-algebras-and-the-standard-basis](generic-coxeter-hecke-algebras-and-the-standard-basis.md): generic Hecke basis. Specialization conditions remain explicit.

- [hecke-symmetries-and-generic-quantum-schur-weyl-duality](hecke-symmetries-and-generic-quantum-schur-weyl-duality.md): matrix-image centralizers over $\mathbb Q(q)$. No positive-characteristic or root-of-unity conclusion.

- [yang-baxter-operators-and-quantum-braid-representations](../braid-groups/yang-baxter-operators-and-quantum-braid-representations.md): Yang–Baxter operator to braid representation. Operator invertibility is required.

- [klr-algebras-induction-and-quantum-serre-categorification](../hecke-algebras-and-categorification/klr-algebras-induction-and-quantum-serre-categorification.md): KLR decategorification with its exact quantum parameter and grading.

## Scope and local proof obligations

### Existing interfaces

* [[thm-hh-r-matrix-constructs-a-module-braiding]] is the algebraic finite-tensor $R\in H\otimes H$ convention for all left $H$-modules. It does not supply a completed universal $R$.
* [[thm-hh-hecke-symmetry-tensor-power-action]] and [[thm-hh-generic-quantum-schur-weyl-mutual-centralizers]] retain the ordered-basis type-A Hecke action and its generic $\mathbb Q(q)$ image centralizers. The latter does not assert a root-of-unity or positive-characteristic centralizer theorem; its abstract Hecke action is faithful only when $N\ge n$.
* [[thm-a-yang-baxter-operator-gives-braid-group-representations]] requires an invertible Yang–Baxter operator. The new spectral family is parameterized, and its singular parameter values are worked out on the B page.
* The KLR/categorification route remains at [[klr-algebras-induction-and-quantum-serre-categorification]], with its own coefficient and grading conventions.

### Parameter map

The generic Coxeter convention uses $(T_s-v_s)(T_s+v_s^{-1})=0$. The local quantum tensor operator uses $(T_i-q)(T_i+q^{-1})=0$. A multiplicative generator $S_i=qT_i$ instead satisfies $(S_i-q^2)(S_i+1)=0$, so the common type-A parameter is $\xi=q^2$. These are rescalings of generators and parameters, not permission to transfer a semisimplicity or centralizer theorem through specialization.

### New local spectral interface

[[def-hh-rational-spectral-r-matrix]] fixes the two-dimensional rational family $R(u)=uI+iP$ and its checked operator. [[lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter]] proves both the un-checked parameterized Yang–Baxter equation and its checked braid-form identity by a direct $S_3$ operator calculation. The item concerns finite-dimensional vector spaces; it is not a universal Hopf $R$-matrix or a braiding on a category of affine modules. Full RTT, arbitrary spectral transfer matrices, and all-type evaluation-module claims remain outside this local result.

## Canonical suppliers and reuse boundaries

- [thm-hh-r-matrix-constructs-a-module-braiding](../../items/thm-hh-r-matrix-constructs-a-module-braiding.md): finite algebraic $R$ and all left modules. Not a completed universal $R$.

- [thm-hh-generic-quantum-schur-weyl-mutual-centralizers](../../items/thm-hh-generic-quantum-schur-weyl-mutual-centralizers.md): generic $\mathbb Q(q)$ mutual centralizers. The matrix-image equalities hold for all $N\ge1,n\ge0$ over $\mathbb Q(q)$; abstract Hecke faithfulness is only claimed for $N\ge n$. No root-of-unity or positive-characteristic extension.

- [thm-a-yang-baxter-operator-gives-braid-group-representations](../../items/thm-a-yang-baxter-operator-gives-braid-group-representations.md): an invertible Yang–Baxter operator yields a braid action. Yang–Baxter without invertibility is insufficient.
- [def-hh-rational-spectral-r-matrix](../../items/def-hh-rational-spectral-r-matrix.md) and [lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter](../../items/lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter.md): finite-dimensional rational spectral family and its fully proved difference equations.

- [thm-ordered-monomial-pbw-basis-for-the-shifted-yangian](../../items/thm-ordered-monomial-pbw-basis-for-the-shifted-yangian.md): shifted Yangian PBW. Auditor reports partial proof only; do not treat as a completed logical supplier until local proof completion is verified.

## Conventions, diagrams, and sources

Apply the [definition and diagram contracts](../../research/physics-algebras-planning-2026-10-17/definition-and-diagram-contracts.md) and [prerequisite and repair holds](../../research/physics-algebras-planning-2026-10-17/prerequisites.md) before treating any proposed result as a supplier. All diagrammatic operations require defined domains, codomains, orientations, coefficients, and algebraic verification. Existing carriers keep their canonical identities and placements. Physics-only mathematical carriers require the supported same-ID resolver route specified in those contracts; links here do not establish that route.

- [06-other-physics-algebras](../../research/physics-algebras-planning-2026-10-17/dossiers/06-other-physics-algebras.md)

Full page contract: [placement inventory](../../research/physics-algebras-planning-2026-10-17/splice/placed-pages.json) (entry `hopf-hecke-and-quantum-symmetry-interfaces`). The original [audited research inventory](../../research/physics-algebras-planning-2026-10-17/proposed-pages.json) and its historical audit receipt remain unchanged.
