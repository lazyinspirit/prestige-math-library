---
page: regular-weyl-representations-and-stone-von-neumann
title: "Exponentiated Weyl Relations and Regular Representations"
status: draft
requires:
  - heisenberg-and-algebraic-weyl-algebras
  - unitary-representations-positive-type-and-gns
  - symplectic-manifolds-moser-stability-and-darboux-weinstein-theory
  - primitive-dirichlet-l-functions-and-functional-equations
  - mackeys-imprimitivity-theorem
items:
  - def-heisenberg-group-of-a-symplectic-vector-space
  - def-incomplete-tensor-product-with-reference-vector
  - def-universal-weyl-c-star-algebra
  - def-regular-weyl-system-on-a-symplectic-vector-space
  - lem-heisenberg-group-lagrangian-splitting-and-dual-orbit
  - lem-universal-weyl-c-star-algebra-is-well-defined
  - lem-schrodinger-weyl-system-is-regular-and-irreducible
  - lem-one-mode-gaussian-weyl-average-is-rank-one
  - thm-stone-von-neumann-for-finite-dimensional-weyl-systems
examples: []
---

This draft supplies finite-dimensional real Weyl relations and their regular
representations with the convention
$W(v)W(w)=e^{-i\lambda\omega(v,w)/2}W(v+w)$. It constructs the Heisenberg
group and the universal $C^*$-completion, gives the explicit Schrödinger
model, and proves Stone–von Neumann uniqueness for a fixed nonzero central
parameter. The central-extension diagram and its maps are recorded in
[[def-heisenberg-group-of-a-symplectic-vector-space]].

## Reading prerequisites

The page-level reading route is
[[heisenberg-and-algebraic-weyl-algebras]] and
[[unitary-representations-positive-type-and-gns]]. These are plan-level
prerequisites, not logical dependencies of the item proofs. The approved route
also includes [[symplectic-manifolds-moser-stability-and-darboux-weinstein-theory]],
which supplies [[def-symplectic-vector-space]] for the Heisenberg and Weyl
definitions, splitting lemma, and uniqueness theorem, and
[[prop-symplectic-vector-spaces-have-even-dimension]] for the splitting lemma
and finite-dimensional uniqueness theorem;
[[primitive-dirichlet-l-functions-and-functional-equations]], which supplies
[[lem-fourier-transform-of-a-gaussian]] for
[[lem-one-mode-gaussian-weyl-average-is-rank-one]]; and
[[mackeys-imprimitivity-theorem]], which supplies
[[lem-spectral-measure-of-a-representation-of-an-abelian-lch-group]],
[[thm-mackey-imprimitivity-theorem]], and
[[thm-uniqueness-in-mackey-imprimitivity]] for
[[thm-stone-von-neumann-for-finite-dimensional-weyl-systems]]. The current
PA-07 draft bodies inspected for this batch are
[[def-polynomial-weyl-algebra]],
[[lem-common-domain-commutator-integrates-to-weyl-relations]], and
[[rem-algebraic-weyl-modules-do-not-automatically-exponentiate]]; their status
remains draft and they are not used as accepted premises. The published GNS
page supplies context only. Exact status and unresolved reading-route checks
are recorded in the batch cross-dependency evidence.

## Items

### Definitions and local constructions

- [[def-heisenberg-group-of-a-symplectic-vector-space]] defines the central
  extension using the product phase $-\omega/2$.
- [[def-regular-weyl-system-on-a-symplectic-vector-space]] fixes the Weyl
  relation, line regularity, irreducibility, and parameter convention.
- [[def-universal-weyl-c-star-algebra]] defines a twisted finite-support
  $*$-algebra and its universal C*-completion with the phase $\lambda$.
- [[def-incomplete-tensor-product-with-reference-vector]] constructs the
  reference-vector Hilbert completion and its coordinate projections for the
  companion counterexample.

### Proved results

- [[lem-heisenberg-group-lagrangian-splitting-and-dual-orbit]] proves the
  semidirect-product coordinates and the free transitive dual orbit for
  $\lambda\ne0$.
- [[lem-schrodinger-weyl-system-is-regular-and-irreducible]] verifies the
  explicit $L^2(\mathbb R^n)$ model, including joint strong continuity and
  irreducibility.
- [[lem-universal-weyl-c-star-algebra-is-well-defined]] proves the cocycle,
  involution, finite universal norm, and completion property.
- [[thm-stone-von-neumann-for-finite-dimensional-weyl-systems]] proves
  uniqueness for finite-dimensional phase space, irreducibility, strong
  continuity, fixed nonzero central character, and the stated choice axiom.
- [[lem-one-mode-gaussian-weyl-average-is-rank-one]] supplies the local
  projection and cyclicity computations used in the infinite-mode example.

## Scope and distinctions

The universal algebra treats the additive phase space as discrete and does
not impose regularity on all of its representations. The finite-dimensional
Stone–von Neumann theorem concerns only strongly continuous irreducible Weyl
systems at a fixed nonzero central parameter. The infinite-mode example is
confined to the companion B page. These statements do not classify
nonregular representations or assert uniqueness in infinite dimension.

The bounded-symbol C*-algebra is distinct from the polynomial Weyl quotient
of [[def-polynomial-weyl-algebra]]: the former has unitary generators and a
C*-norm, while the latter has polynomial generators and is purely algebraic.
This description states the distinction locally; the linked PA-07 item is
not treated as an accepted dependency. No result here asserts a domain-free
commutator identity for unbounded position and momentum operators.

## Sources and proof route

The full source record and item-level dispositions are in the batch
source-coverage evidence. The main proof uses the spectral-measure theorem and
Mackey imprimitivity locally: symplectic coordinates give a single free orbit
of characters with central parameter $\lambda$, and the stabilizer is the
normal abelian subgroup. Speicher's notes prove the one-mode case and describe
the multi-mode extension as similar; the local proof supplies the complete
finite-dimensional argument. Prasad's real-vector-space proof supplies an
independent treatment, while its Fourier details are not imported as an
unstated premise. Fewster–Rejzner state the Weyl completion and exhibit a
nonregular representation; the local C*-proof and discontinuity calculation
fill the details used here.

The diagram conventions follow the [definition and diagram contracts](../../research/physics-algebras-planning-2026-10-17/definition-and-diagram-contracts.md);
the displayed central-extension diagram is justified by the explicit kernel
calculation in the Heisenberg group lemma.
