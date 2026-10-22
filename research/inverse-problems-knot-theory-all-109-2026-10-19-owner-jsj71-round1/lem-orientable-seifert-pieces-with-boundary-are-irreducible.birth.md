---
id: lem-orientable-seifert-pieces-with-boundary-are-irreducible
kind: lemma
title: "Orientable Seifert pieces with boundary are irreducible"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-axiom-of-choice, def-countable-choice, thm-choice-implies-dependent-implies-countable-choice, def-incompressibility-seifert-fibration-and-jsj-system, lem-seifert-fiber-quotient-is-finite-orbifold-free-product, lem-regular-fibers-in-seifert-pieces-with-boundary-have-infinite-order, lem-orientable-small-base-seifert-pieces-have-explicit-solid-torus-and-interval-bundle-models, lem-gluing-irreducible-smooth-three-manifolds-across-injective-annuli, thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the finite Seifert suppliers and implies countable choice for smooth Schoenflies and annulus gluing."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed p.11, gluing fact (5), and pp.18–19, Proposition 1.12; the boundary case is proved here by injective vertical-annulus cuts rather than invoking a general cover classification"
---

## Statement

Assume full AC. Every compact connected orientable smooth Seifert-fibered three-manifold with nonempty boundary is irreducible.

## Facts & Assumptions

**Given:** Full AC and the compact connected orientable smooth Seifert piece $M$ with nonempty boundary.

[A1] Full AC implies countable choice ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] Seifert fibrations and irreducibility have the conventions of [[def-incompressibility-seifert-fibration-and-jsj-system]].

[F2] The underlying base with exceptional disks removed has a finite graph-spine construction, by finite triangulation, proper cuts and triangle collapses ([[lem-seifert-fiber-quotient-is-finite-orbifold-free-product]], Proof 1.1–2.1).

[F3] Every proper base arc avoiding exceptional points lifts to a two-sided annulus injective on fundamental groups ([[lem-regular-fibers-in-seifert-pieces-with-boundary-have-infinite-order]], Statement).

[F4] A Seifert piece with disk base and at most one exceptional point is a parametrized solid torus ([[lem-orientable-small-base-seifert-pieces-have-explicit-solid-torus-and-interval-bundle-models]], Statement and Proof 2.1).

[F5] Gluing irreducible smooth three-manifolds across a finite family of proper two-sided annuli injective in the resulting manifold preserves irreducibility ([[lem-gluing-irreducible-smooth-three-manifolds-across-injective-annuli]], Statement).

[F6] A smooth sphere in standard $S^3$ has two complementary parametrized smooth balls ([[thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three]], Statement).

## Proof

1.1 Choose a finite disjoint proper arc system in the base cutting it to disks, avoiding its finitely many exceptional points. Here is a finite construction using [F2]: thicken a finite graph spine by vertex disks and edge bands; a band cocore is an arc with endpoints on the original surface boundary. Cut the bands corresponding to edges outside a spanning tree. The remaining tree of disks and bands is a disk, and the cuts are disjoint. Move the finitely many arc interiors slightly in surface charts to avoid all marked exceptional points. In the resulting disk choose disjoint paths from its exceptional points to one open segment of the original boundary, avoiding the existing cut edges. Construct these successively in the punctured disk; a finite tree joining the points to that segment has a small disk-and-band neighborhood, whose branches may be separated into disjoint paths in the planar cyclic order. The frontier of a narrow neighborhood of each path and its marked point gives a proper arc enclosing just that point. These arcs have endpoints on that original boundary segment and miss the previous cut system. Cutting along them leaves disks with zero or one exceptional point. All arcs remain proper disjoint arcs of the original base and avoid the exceptional points themselves. [F1, F2, given, construct]

2.1 Lift these arcs to a finite disjoint family $\mathcal A$ of annuli in $M$. They are proper and two-sided and inject on fundamental groups by [F3]. The components of $M\mathbin{\|}\mathcal A$ retain their Seifert structures over the disks from step 1.1; rounding their boundary corners changes only collars. By [F4] each is a solid torus. [F1, F3, F4, step 1.1, construct]

2.2 A standard solid torus is irreducible. Embed it as one of the standard Heegaard solid tori in $S^3$. A sphere in its interior bounds the two balls of [F6]. The other Heegaard solid torus is connected and disjoint from that sphere, so lies entirely on one of its sides. The opposite closed ball therefore lies in the interior of the original solid torus and bounds the sphere there. Transporting through any supplied solid-torus parameter proves the same assertion for every cut piece of step 2.1. [A1, F6, construct]

3.1 The hypotheses of [F5] are now satisfied: the cut pieces are irreducible by step 2.2 and the annuli inject in $M$ by step 2.1. Apply it to conclude that $M$ is irreducible. If no cut was needed, step 2.2 already supplies the conclusion. Thus the nonempty-boundary theorem uses neither a closed Seifert-manifold classification nor a general universal-cover uniformization theorem, and no irreducibility hypothesis has been added to its Statement. [A1, F3, F5, step 2.1, step 2.2] ∎
