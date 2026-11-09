---
id: lem-author-9ab3274efad8-smooth-affine-components
kind: lemma
title: Connected components of a smooth affine curve
status: draft
domain: mathematics
deps:
  - math:thm-regular-equals-smooth-over-perfect-field
  - math:lem-noetherian-space-has-finitely-many-irreducible-components
  - math:thm-regular-local-rings-are-domains-and-cohen-macaulay
  - math:def-axiom-of-choice
dependency_roles:
  math:thm-regular-equals-smooth-over-perfect-field: mathematical-premise
  math:lem-noetherian-space-has-finitely-many-irreducible-components: mathematical-premise
  math:thm-regular-local-rings-are-domains-and-cohen-macaulay: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
Assume the Axiom of Choice. A smooth affine curve C over an algebraically closed field is a finite disjoint union of open and closed connected smooth affine curves. The assertion includes the empty scheme if that convention for curve is allowed.

Here a curve is a finite-type scheme of pure dimension one over the field; smooth means smooth over that field, and affine means isomorphic to the spectrum of a commutative ring.

## Facts & Assumptions

[F1] Over a perfect field, a smooth finite-type scheme is regular; in particular its local rings are regular. A regular local ring is a domain ([[math:thm-regular-equals-smooth-over-perfect-field]], [[math:thm-regular-local-rings-are-domains-and-cohen-macaulay]]).

[F2] A Noetherian topological space has finitely many irreducible closed components and is their union ([[math:lem-noetherian-space-has-finitely-many-irreducible-components]]).

[A1] Assume the Axiom of Choice, as required by these suppliers ([[math:def-axiom-of-choice]]).

**Given:** C as stated and the Axiom of Choice.

**Goal:** Prove the finite connected affine decomposition.

## Proof

1.1 An algebraically closed field is perfect. A finite-type scheme over a field is Noetherian, by the Hilbert basis theorem on a finite affine cover. By [F1] its local rings are domains. If two distinct irreducible components met at x, their distinct generic points would give distinct minimal primes in the local ring at x, contradicting its being a domain. By [F2] there are finitely many components, each closed; their pairwise disjointness makes each also open, as its complement is a finite union of closed components. [F1, F2, A1, given]

2.1 Each component is irreducible, hence connected, and the open-and-closed decomposition shows it is a connected component. An open and closed subset of Spec A is Spec of a direct factor of A: its characteristic function is a global idempotent obtained by gluing 1 on the subset and 0 on its complement. Thus each component is affine. Smoothness and pure dimension one restrict to these open subsets. The empty case is the empty union. [step 1.1, construct] ∎
