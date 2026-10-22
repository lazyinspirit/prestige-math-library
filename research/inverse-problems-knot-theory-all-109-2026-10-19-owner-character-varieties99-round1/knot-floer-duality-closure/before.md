---
id: lem-knot-floer-duality-and-filtration-swap
kind: lemma
title: "Knot Floer duality and exchange of the two filtrations"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-knot-floer-filtration-and-tau
  - def-reverse-mirror-of-oriented-knot
  - def-countable-choice
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The diagram-reflection and conjugation arguments use the ACω analytic branch for Heegaard Floer disk counts. The full-AC plan edge remains separate."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Concordance homomorphisms from knot Floer homology, Propositions 2.5–2.6"
      url: "https://arxiv.org/pdf/1407.1795"
      locator: "§2.1; filtration-swap symmetry and the mirror complex as the filtered dual"
    - title: "Jennifer Hom, The knot Floer complex and the smooth concordance group, §2"
      url: "https://arxiv.org/pdf/1111.6635"
      locator: "§2, PDF pp.4–5; reversal of both filtrations and duality for the reverse mirror"
---

## Statement

Let $K\subset S^3$ be a smooth oriented knot and let $C(K)=\mathrm{CFK}^{\infty}(K)$ be its normalized bifiltered complex over $\mathbb F_2[U,U^{-1}]$. The complex of the reverse mirror $-K$ is filtered-chain-homotopy equivalent to the dual complex $C(K)^*=\operatorname{Hom}_{\mathbb F_2[U,U^{-1}]}(C(K),\mathbb F_2[U,U^{-1}])$, with dual differential $d\phi(x)=\phi(\partial x)$ and dual basis elements at negated bifiltration coordinates. There is also a Maslov-graded filtered-chain-homotopy equivalence from $C(K)$ to the complex obtained by exchanging the algebraic and Alexander filtrations. These are distinct symmetries: duality negates both filtration coordinates, while conjugation exchanges them.

## Statement references

[[def-reverse-mirror-of-oriented-knot|Reverse-mirror convention for the smooth concordance inverse]]

[[def-knot-floer-filtration-and-tau|The current diagram-specific knot Floer filtration convention; model independence remains unresolved]]

[Ozsvath, Stipsicz, and Szabo, *Concordance homomorphisms from knot Floer homology*, Propositions 2.5–2.6](https://arxiv.org/pdf/1407.1795)

[Hom, *The knot Floer complex and the smooth concordance group*, §2](https://arxiv.org/pdf/1111.6635)

## Facts & Assumptions

**Given:** A doubly pointed Heegaard model for an oriented knot, its Maslov grading, the two filtration coordinates, and the normalized disk-count differential.

[F1] [[def-admissible-pointed-heegaard-floer-data]]: the admissible pointed diagram supplies generators, basepoint multiplicities, and the disk-count differential in the stated convention.

[A1] [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] (present, proof not supplied): its statement identifies the grid and Heegaard models, but its current carrier has no supplied proof.

[A2] [[lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing]] (present, proof not supplied): the reflection and conjugation identifications require the analytic disk-count theory, not merely the stated unproved interface.

## Proof

1.1 Reverse the orientation of the Heegaard surface and exchange the two boundary knots by the reflection defining the reverse mirror. A Whitney disk from generator $\mathbf x$ to $\mathbf y$ corresponds to the reflected disk from $\mathbf y$ to $\mathbf x$; the disk count therefore transposes the differential. The coefficient exponent and Maslov grading agree with the dual-module action, while the two filtration coordinates change sign. On the dual basis this is exactly $d\phi(x)=\phi(\partial x)$ and coordinates $(-i,-j)$. This proves the dual-complex identification provided the analytic disk counts are invariant under the reflection. [given, F1, A2, algebra]

1.2 Reverse the Heegaard surface and interchange the two basepoints without taking the mirror. This conjugation identifies the disk classes after exchanging their two basepoint multiplicities; hence it exchanges the algebraic and Alexander filtrations. The induced chain map and inverse are filtered up to the exchanged coordinate system, so they give the claimed filtered-chain-homotopy equivalence. The chain-map and homotopy identities require the same analytic invariance input [A2]. [given, F1, A1, A2, algebra] ∎

## Unresolved proof obligations

The dual and filtration-swap statements are established knot Floer symmetries, but their complete local proof depends on analytic invariance under reflected and conjugated Heegaard data. The current regularity/compactness supplier has `provenance.proof: not-supplied`, and the grid/Heegaard theorem is likewise unproved. This item is therefore escalated; its two symmetry branches remain distinct in downstream proofs.
