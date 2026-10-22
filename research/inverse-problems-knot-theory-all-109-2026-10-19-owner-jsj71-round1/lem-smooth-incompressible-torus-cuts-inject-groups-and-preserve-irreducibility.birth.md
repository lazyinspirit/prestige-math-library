---
id: lem-smooth-incompressible-torus-cuts-inject-groups-and-preserve-irreducibility
kind: lemma
title: "Smooth incompressible torus cuts inject groups and preserve irreducibility"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds
  - lem-compact-smooth-three-manifold-pairs-admit-compatible-whole-star-triangulations
  - thm-finite-simplicial-approximation-for-maps-of-pairs
  - thm-seifert-van-kampen
  - thm-normal-form-for-free-products-with-amalgamation
  - thm-covering-maps-inject-fundamental-groups
  - def-incompressibility-seifert-fibration-and-jsj-system
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. The smooth Loop and finite pair triangulation suppliers are choice-free; finite edge generators define canonical shortlex coset transversals for every amalgam. The cyclic-cover argument uses a single explicitly indexed family of identical copies, not an infinite family of choices."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed pp.10–13 and Corollary3.3, p.48; the smooth cut-piece, group and irreducibility transfers are supplied explicitly here, without consuming a PL-only ball claim as a smooth claim."
---

## Statement

Let $M$ be a compact connected orientable smooth three-manifold, and let $\mathcal T$ be a finite disjoint family of two-sided incompressible smooth tori in its interior, with smooth product neighborhoods. Then every torus group injects into $M$, every boundary copy of a cutting torus injects into its incident cut component, and every component of the manifold cut open along $\mathcal T$ injects into $M$. If $M$ is irreducible, every such cut component is irreducible in the smooth category. Empty families are allowed. No choice axiom is assumed.

## Facts & Assumptions

**Given:** The compact orientable smooth manifold and finite torus family of the Statement.

[F1] For a compact orientable smooth three-manifold, absence of a smooth compressing disk for a two-sided smooth surface is equivalent to fundamental-group injectivity, without choice. This applies in a supplied smooth ball as well as in the original manifold. [[thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds]]

[F2] The smooth pair has a finite compatible triangulation, as do its compact cut pieces. Based loops in a finite complex are homotopic to edge loops after finite subdivision. [[lem-compact-smooth-three-manifold-pairs-admit-compatible-whole-star-triangulations]] [[thm-finite-simplicial-approximation-for-maps-of-pairs]]

[F3] Connected-overlap van Kampen gives the group pushout. For injective overlap maps, amalgam normal form relative to supplied coset transversals makes the factor maps injective. Covering maps inject fundamental groups. [[thm-seifert-van-kampen]] [[thm-normal-form-for-free-products-with-amalgamation]] [[thm-covering-maps-inject-fundamental-groups]]

[F4] Irreducibility and the disk obstructions are those of [[def-incompressibility-seifert-fibration-and-jsj-system]]. In the smooth category a ball bounded by a smooth interior sphere is a smoothly embedded parametrized ball.

## Proof

1.1 Each cutting torus injects into $M$ by [F1]. Cut along the supplied smooth product neighborhoods. These tori are closed and interior, so their boundary copies are ordinary smooth boundary components, without new corners. The inclusion of a boundary copy into $M$ is the original torus inclusion up to the product homotopy. If a loop on such a copy were nullhomotopic in its incident cut component, it would be nullhomotopic in $M$, and hence trivial on the torus. Therefore every initial boundary-face map into its cut piece injects. [F1, given, construct, algebra]

2.1 Every cut piece and every finite partial regluing has finitely generated fundamental group. Indeed [F2] gives a finite triangulation and edge-loop representatives; a finite spanning tree of its connected one-skeleton leaves a finite ordered alphabet of non-tree edges generating the group. Order all words by length and then lexicographically. For any overlap subgroup, choose in each coset the element represented by its least word. This defines all required transversals, without choosing from an arbitrary family of nonempty sets; no subgroup-membership algorithm is asserted. If a face pair joins distinct connected pieces, thicken their attaching collars to obtain a connected-overlap cover. By [F3] its pushout is the amalgam over that injected face group and both old component groups inject into the regluing. [F2, F3, step 1.1, construct, algebra]

3.1 For a face pair on one connected piece $C$, form the space of copies $C_j$, $j\in\mathbb Z$, with the positive face of $C_j$ attached to the negative face of $C_{j+1}$ by the specified gluing. Its projection to the one-pair regluing is a covering: ordinary interior charts and the paired product half-collars are evenly covered. Every finite consecutive chain has injective vertex groups by step 2.1, and still-free face groups retain their injections. A nullhomotopy of a loop in $C_0$ upstairs has compact image and therefore lies in a finite chain. To justify this finiteness even on seams, each point has a neighborhood meeting at most two adjacent copies; a finite subcover of the compact image supplies a bound on the indices. The loop is null already in $C_0$ by the finite-chain injection. Finally the covering injection in [F3] makes $\pi_1(C)$ inject into the one-pair regluing. [F3, step 1.1, step 2.1, construct, algebra]

4.1 Reglue the finitely many face pairs in a fixed order. Initially all face maps inject by step 1.1. At every gluing, step 2.1 or 3.1 makes every old component inject into its new component, so the remaining face maps retain their injections by composition. Finite induction gives an injection of every original cut-piece group into $\pi_1(M)$. This proves all group assertions, including a nonseparating torus or a cut component incident to both copies of a torus. [step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 Now assume $M$ irreducible and take a smooth sphere in the interior of a cut component. Its image in $M$ is a smooth sphere missing every cutting torus. It bounds a smooth ball $B$ by [F4]. A connected cutting torus is entirely inside or outside this sphere. None can lie inside $B$: a torus has group $\mathbb Z^2$, whereas $B$ is contractible, so [F1] gives a smooth compression in $B$, contradicting that torus's incompressibility in $M$. Thus $B$ misses all cutting tori. Its interior is connected and lies in the same component of their complement as the sphere's incident inner collar; hence $B$ lifts into the specified cut piece. That piece is irreducible. For an empty family all claims reduce to the original manifold. No PL ball or arbitrary topological marking was identified with a smooth ball in this argument. [F1, F4, step 4.1, given, construct] ∎
