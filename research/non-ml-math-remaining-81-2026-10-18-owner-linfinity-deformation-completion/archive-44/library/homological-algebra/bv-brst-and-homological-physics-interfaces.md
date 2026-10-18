---
page: bv-brst-and-homological-physics-interfaces
title: "BV, BRST, and Homological Physics Interfaces"
status: draft
items:
  - def-bv-algebra-and-degree-plus-one-bracket
  - def-classical-lie-action-brst-complex
  - thm-bv-derived-bracket-is-odd-poisson
  - def-classical-and-formal-quantum-master-equations
  - thm-classical-lie-action-brst-differential-squares-zero
  - thm-classical-master-equation-defines-square-zero-differential
examples: []
---

This page gives a degree-$+1$ BV convention, proves the induced odd Poisson identities, distinguishes the classical and formal quantum master equations, and constructs a classical BRST complex from a Lie algebra acting on an algebra by derivations. Every item remains draft pending the native review and gates.

Companion: [[bv-brst-and-homological-physics-interfaces-examples]].

## Reading prerequisites

The plan's reading route is [[a-infinity-l-infinity-and-deformation-complexes]]. That pair's current A/B manifests are empty and its page bodies contain no item IDs or checked A∞/L∞ degree/sign excerpts. Its transitive DG-foundations page supplies a draft cohomological DGA convention but no graded-commutative BV operator or A∞/L∞ identity. The BV items therefore state and prove their degree-$+1$ convention locally. Both page-interface checks are recorded in `research/non-ml-math-remaining-81-2026-10-18-batch-44.cross-batch-dependencies.json`.

## BV algebra and master equations

[[def-bv-algebra-and-degree-plus-one-bracket]] fixes a graded-commutative
algebra, degree-$+1$ square-zero operator, graded-commutator definition of
order at most two, and the derived bracket. Its full proof of odd skew,
biderivation, and odd Jacobi is [[thm-bv-derived-bracket-is-odd-poisson]].

[[def-classical-and-formal-quantum-master-equations]] separates the classical
master equation from one explicit formal QME normalization. The QME is an
$\hbar$-adic identity only; it does not assert a path-integral measure,
convergence, renormalization, or anomaly cancellation. Under the CME, the
Hamiltonian operation $\{S,-\}$ is a square-zero degree-$+1$ differential by
[[thm-classical-master-equation-defines-square-zero-differential]].

## Classical Lie-action BRST model

[[def-classical-lie-action-brst-complex]] specializes the
Chevalley–Eilenberg cochains to a fixed Lie algebra acting on a commutative
algebra by derivations. The action must be a Lie algebra representation; the
local bridge [[thm-classical-lie-action-brst-differential-squares-zero]]
proves nilpotence and defines its cohomology quotient using the current
published Chevalley–Eilenberg square-zero theorem.

This model covers a genuine Lie algebra action with constant structure
coefficients. It makes no claim for field-dependent structure functions,
reducible or open gauge algebras, the full BFV/Koszul–Tate construction, or
quantum BRST cohomology.

## Conventions and source limits

The authoring convention follows the BV degree and master-equation clauses in
the [definition and diagram contracts](../../research/physics-algebras-planning-2026-10-17/definition-and-diagram-contracts.md)
and the [BV/BRST prerequisite notes](../../research/physics-algebras-planning-2026-10-17/prerequisites.md).
Getzler supplies the degree-$+1$ source convention; the cited degree-$-1$ and
$\mathbb Z/2$ treatments are comparison sources only. Their bracket formulas
are not imported without translation.

- [06-other-physics-algebras](../../research/physics-algebras-planning-2026-10-17/dossiers/06-other-physics-algebras.md)

- [manifest](../../research/physics-algebras-planning-2026-10-17/sources/06-other-physics-algebras/manifest.md)

The source inventory is a planning record, not proof acceptance. The current
plan entry and original proposal retain the same PA-13 page IDs, category, and
reading route; their empty item arrays supplied no item-level logical
dependencies. See the batch notes for the plan comparison and source
dispositions.
