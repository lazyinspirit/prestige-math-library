---
id: def-geometric-regularity-for-noetherian-algebras-and-maps
kind: definition
title: Geometric regularity for Noetherian algebras and maps
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-regular-noetherian-ring
- def-flat-morphism-schemes
- def-ag-geometrically-regular-algebra-and-fibre
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: The Stacks Project, Algebra, Definition 10.166.2 and Lemma 10.166.1
    url: https://stacks.math.columbia.edu/tag/0382
    locator: Definition 10.166.2 and linked Lemma 10.166.1, displayed statements and proof read; the lemma compares finite purely inseparable and finitely generated field extensions.
  - title: The Stacks Project, More on Algebra, Definition 15.42.1
    url: https://stacks.math.columbia.edu/tag/07BZ
    locator: Displayed definition read; flatness and Noetherian geometrically regular fibres define regular ring maps.
dependency_level: 0
axiom_use: No choice or existence assertion is made in this definition.
---

## Definition

Let k be a field and A a Noetherian k-algebra, with no finite-type hypothesis. A is **geometrically regular over k in the Noetherian sense** if for every finite field extension k'/k the ring A⊗_k k' is regular Noetherian, meaning that all its prime localizations are regular local rings. This includes the trivial extension k'=k and the zero ring.

A homomorphism R→S of Noetherian rings is **regular in the Noetherian sense** if it is flat and, for every p∈Spec R, the fibre S⊗_R κ(p) is geometrically regular over κ(p) in the preceding sense. Each fibre is Noetherian, being a localization of S/pS; every finite scalar extension of that fibre is Noetherian as a finite module over it.

The finite-presentation fibre convention of [[def-ag-geometrically-regular-algebra-and-fibre]] is retained at its existing scope, including its all-field-extension statement. This general Noetherian convention does not assert that arbitrary infinite scalar extensions of a non-finite-type Noetherian algebra remain Noetherian. The equivalence with the existing finite-type convention is a theorem, not built into this definition.

## Remarks

This is the standard finite-extension test appropriate to non-finite-type formal fibres. No finite-type hypothesis is imposed on A, and no map, completion, or field extension is asserted to satisfy the condition by this definition alone.
