---
id: lem-os-unlink-resolution-covers-and-floer-tqft
kind: lemma
title: "Unlink resolution covers and the Heegaard Floer TQFT"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - lem-double-branched-cover-of-an-oriented-link-well-defined
  - def-hat-heegaard-floer-complex-of-a-closed-three-manifold
  - lem-os-disk-and-polygon-analytic-foundations
  - thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant
proof_strategy: direct
axiom_use: "Uses the ACω analytic branch of Heegaard Floer theory; the unlink topology computation itself is choice-free."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, Propositions 6.1 and 6.2"
      url: "https://arxiv.org/pdf/math/0309170v1"
    - title: "Lipshitz, Heegaard Floer Homologies, §5"
      url: "https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf"
---

## Statement

For the $k$-component planar unlink $U_k$, its double branched cover is $\#^{\,k-1}(S^2\times S^1)$, with $\Sigma(U_1)=S^3$. Over $\mathbb F_2$, the hat Floer group of this cover is identified with the exterior algebra on a $(k-1)$-dimensional vector space, hence has rank $2^{k-1}$. Under these identifications, the cobordism maps for the saddle cobordisms between unlink resolutions are the multiplication and comultiplication maps of the two-dimensional Frobenius algebra $\mathbb F_2[X]/(X^2)$ after reduction at a marked component. The identification includes the marked-circle cases and fixes the basis conventions needed to compare the first surgery differential with the reduced Khovanov cube.

## Statement references

[[lem-double-branched-cover-of-an-oriented-link-well-defined|Double-cover existence and local branch convention]]

[[def-hat-heegaard-floer-complex-of-a-closed-three-manifold|Hat Floer definition]]

[[lem-os-disk-and-polygon-analytic-foundations|Analytic map-count obligations]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, Propositions 6.1 and 6.2](https://arxiv.org/pdf/math/0309170v1)

[Lipshitz, *Heegaard Floer Homologies*, §5](https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf)

## Facts & Assumptions

**Given:** A planar unlink resolution and the saddle cobordisms between its neighboring resolutions.

[F1] The double branched cover and its orientation are defined and well-defined up to oriented diffeomorphism ([[lem-double-branched-cover-of-an-oriented-link-well-defined]]).

[F2] The group is defined by the closed-manifold disk-count complex ([[def-hat-heegaard-floer-complex-of-a-closed-three-manifold]]).

[F3] The analytic finiteness and polygon-map identities required to compute the groups and cobordism maps are the unresolved content of [[lem-os-disk-and-polygon-analytic-foundations]].

## Proof

1.1 The local double-cover construction sends a crossingless unlink resolution to the claimed surgery vertex, while the branched cover of a collection of planar circles has the stated connected-sum topology. The exterior-algebra rank calculation is finite once the hat Floer group and its $H_1$ action are available. [F1, F2, given]

1.2 To identify the saddle maps with Frobenius multiplication and comultiplication one must compute the relevant Floer cobordism maps, including the marked-component quotient and all mod-two polygon counts. These claims require [F3]; no complete local calculation of those maps is supplied here. Escalated obligations: prove the exterior-algebra identification, the $H_1$ action formula, and each marked and unmarked merge/split map with the conventions of the reduced cube. [F2, F3, step 1.1]
