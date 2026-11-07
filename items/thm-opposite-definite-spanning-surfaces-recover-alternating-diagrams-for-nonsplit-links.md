---
id: thm-opposite-definite-spanning-surfaces-recover-alternating-diagrams-for-nonsplit-links
kind: theorem
title: "Opposite definite spanning surfaces recover alternating diagrams for nonsplit links"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-split-link
  - lem-opposite-definite-surfaces-have-consistent-minimal-boundary-intersections
  - lem-normal-transfer-nullity-plus-component-count-is-independent-of-spanning-surface
  - lem-opposite-definite-spans-of-a-nonsplit-link-admit-circle-free-intersection
  - lem-balanced-standard-spanning-pairs-yield-smooth-diagrams-of-the-original-link
  - thm-parametric-transversality
  - thm-fundamental-theorem-on-flows
  - thm-euclidean-inverse-function-theorem
  - lem-boundary-of-a-compact-one-manifold-has-even-cardinality
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the full normal-transfer, boundary normalization, component-count, circle-removal and smooth reconstruction suppliers. It implies the countable choice used by transversality and compact one-manifold classification. The perturbation and all intersection reductions are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joshua Evan Greene, Alternating links and definite surfaces, Theorem 1.1 and its proof, PDF pp.6–8; disconnected-surface nonsplit version proved using local suppliers"
      url: "https://people.maths.ox.ac.uk/lackenby/Fox.pdf"
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Proposition 2.22 and Procedure 2.20, PDF pp.10–11"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Assume full AC. Let $L\subset S^3$ be a nonempty nonsplit oriented smooth link. Suppose $F_+,F_-$ are compact smooth embedded spanning surfaces for $L$, without closed components, whose full rational normal-transfer pairings are respectively positive and negative definite. The surfaces may initially be disconnected or nonorientable. Then both are connected, and $L$ has a connected alternating regular diagram on a smooth projection sphere whose two standard checkerboard surfaces are smoothly ambient isotopic, individually, to $F_+$ and $F_-$, with their boundary orientations transported. The diagram has exactly $b_1(F_+)+b_1(F_-)$ crossings. There is no primeness assumption, and the theorem includes composite nonsplit links. The diagram is not asserted to be reduced.

## Statement references

[[def-axiom-of-choice]]

[[def-split-link]]

## Facts & Assumptions

**Given:** Full AC, the nonempty nonsplit smooth link with its orientations, and the two compact smooth opposite definite spanning surfaces without closed components.

[F1] The surfaces can be boundary-normalized by an isotopy of $F_+$ fixing $L$ pointwise, retaining the original comparison $F_-$. In adapted normal tubes the comparison collar has angle zero and the changed collar has angle $2\pi d_i s+\delta_i$, where $d_i\ge0$ and $\sum_i d_i=2(b_1(F_+)+b_1(F_-))$. On every sufficiently small tube torus there are exactly $d_i$ transverse crossings, all of the same ordered sign on the tori oriented outward toward the exterior. The two interiors are disjoint there when $d_i=0$. ([[lem-opposite-definite-surfaces-have-consistent-minimal-boundary-intersections]])

[F2] Two nondegenerate full normal-transfer forms on spanning surfaces for the same link force equal component counts. ([[lem-normal-transfer-nullity-plus-component-count-is-independent-of-spanning-surface]])

[F3] For a nonsplit link, a finite transverse opposite definite intersection can have all its interior circles removed by an ambient isotopy of the first surface fixed near $L$, preserving the arcs and prescribed boundary collars. Pairings are transported. ([[lem-opposite-definite-spans-of-a-nonsplit-link-admit-circle-free-intersection]])

[F4] Balanced standard arc pairs with equal component count yield smooth sphere diagrams of the original smooth link and recover the individual smooth checkerboard-surface classes. Opposite definiteness makes those diagrams alternating. Nonsplitting forces exactly one projection sphere and one component from each surface. ([[lem-balanced-standard-spanning-pairs-yield-smooth-diagrams-of-the-original-link]])

[F5] A finite-dimensional smooth family transverse to a closed boundaryless embedded submanifold has arbitrarily small transverse slices. Smooth compactly supported vector fields have short smooth flows, and an invertible derivative has a smooth local inverse. ([[thm-parametric-transversality]], [[thm-fundamental-theorem-on-flows]], [[thm-euclidean-inverse-function-theorem]])

[F6] A compact smooth one-manifold is a finite disjoint union of embedded circles and closed intervals, under countable choice. Each interval has exactly two distinct endpoints. ([[lem-boundary-of-a-compact-one-manifold-has-even-cardinality]])

## Proof

1.1 Apply [F1] and retain the exact radial collars on smaller tubes. Both original homology groups and pairings are unchanged under that smooth isotopy. By [F2] their component counts agree; call the common positive integer $p$. Remove still smaller open tubes of $L$ to form a compact exterior $X$. The two surface boundaries on its tori are already transverse and their entire intersections in a collar of those tori are the radial segments at the finitely many boundary crossings. These segments are transverse to the tori and to each other as surface intersections. [given, F1, F2, construct]

2.1 Make the surfaces transverse on the rest of $X$ without changing these collars. In $S^3\setminus L$ the comparison $F_-\setminus L$ is closed and boundaryless. Cover the compact possible intersection region away from smaller fixed collars by finitely many ambient coordinate balls, and choose bump-supported coordinate frame fields spanning the ambient tangent spaces on smaller balls. Compose their short time-$a_j$ flows. At parameter zero the evaluation on $F_+\setminus L$ is a submersion at every possible nontransverse intersection in that compact region; the same holds for sufficiently small parameters by compactness and nonzero minors. On the remaining fixed collar the evaluation is already transverse, and away from the possible intersection region compact separation excludes new intersections. Hence the total family is transverse everywhere. By [F5] choose an arbitrarily small transverse parameter and use its flow path as the ambient isotopy. Its support misses the fixed collars. The transverse intersection in $X$ is a compact smooth one-manifold with boundary exactly the prescribed torus crossings: the implicit-function coordinates from [F5] give its local line charts, and the exact radial collar charts give its boundary half-line charts. By [F6] it is a finite disjoint union of circles and proper embedded arcs. [step 1.1, F5, F6, construct]

3.1 Apply [F3] to remove the interior circles, retaining all these arcs and the smaller boundary collars. Extend every proper arc radially through its two collar segments to $L$. It remains a smooth embedded arc, because near the exterior tori it was already radial; the distinct torus intersections have distinct base parameters and hence distinct endpoints on $L$. The finite disjoint family has mutually disjoint isolated neighborhoods by compactness. Both endpoints have the same ordered sign by [F1], even when they lie on different boundary tori, since all those tori have the specified outward orientation and all the ordered crossings have that common sign. Consequently every extended arc is standard in the precise hypothesis of [F4]. No other intersection occurs besides these arcs and $L$. [step 1.1, step 2.1, F1, F3, construct]

4.1 Each arc contributes two torus endpoints and no circle remains. Thus its number is $n=\frac12\sum_i d_i=b_1(F_+)+b_1(F_-)$ by [F1]. The surfaces still have their original component counts and homology ranks because every operation was an ambient isotopy of the changed surface. We have therefore verified all hypotheses of [F4], including the numerical balance, equal component counts, supplied radial collars, distinct endpoints and isolated standard arcs. Apply that reconstruction. It supplies exactly $p$ smooth sphere diagrams of the original smooth link with $n$ crossings in total, transporting the individual checkerboard-surface classes; their pairings are opposite definite, so every diagram is alternating. [step 1.1, step 3.1, F1, F4, algebra]

5.1 Since the original link is nonsplit, [F4] forces $p=1$. Hence both original surfaces are connected and the output is one connected alternating diagram with the asserted crossing count. Compose the finitely many smooth isotopies in the normalization, perturbation, circle removal and reconstruction to recover each original smooth surface class, retaining the boundary orientations. All component and crossing assertions therefore refer to the original supplied pair. This argument used nonsplitting and never primeness, so it retains composite nonsplit links without importing a knot-only prime-decomposition theorem or a flyping assertion. [given, step 1.1, step 4.1, F3, F4, construct] ∎
