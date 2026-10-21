---
id: lem-permissible-surface-niceification-preserves-admissibility
kind: lemma
title: "Permissible surface niceification and its periodic-domain coefficients"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-sutured-floer-chain-complex
  - def-balanced-taut-sutured-manifold-and-product-region
  - lem-marked-fiber-admits-a-sutured-surface-diagram
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Juhasz, Floer homology and surface decompositions"
      url: "https://arxiv.org/pdf/math/0609779v3"
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
    - title: "Sarkar and Wang, An algorithm for computing some Heegaard Floer homologies"
      url: "https://arxiv.org/pdf/math/0607777v4"
    - title: "Ni, Knot Floer homology detects fibred knots"
      url: "https://arxiv.org/pdf/math/0607156v4"
---

## Statement

A good admissible surface-adapted balanced diagram can be made nice by a finite sequence of permissible fingers and own-family disk slides preserving its surface marking. Weak admissibility is preserved. Every complementary region of the underlying diagram disjoint from its true boundary is a bigon or square.

## Facts & Assumptions

[F1] [[def-sutured-floer-chain-complex]] supplies its stated definitions or proved operator/construction interface at its stated scope.

[F2] [[def-balanced-taut-sutured-manifold-and-product-region]] supplies its stated definitions or proved operator/construction interface at its stated scope.

[F3] [[lem-marked-fiber-admits-a-sutured-surface-diagram]] supplies its stated definitions or proved operator/construction interface at its stated scope.

## Proof

**Given:** The actual diagrams, markings, orientation classes, and admissibility hypotheses in the statement.

1.1 Let (Σ,α,β,P) be the actual good adapted diagram, with ∂P=A∪B, whose A and B components are arcs ending on ∂Σ. Put 𝒜=α∪B and ℬ=β∪A. Permissible α fingers and slides avoid B; permissible β fingers and slides avoid A. Thus they carry the actual surface and its specified boundary marking. Corners of P are kept fixed. [construct]

1.2 **The finite geometric operation.** First remove nondisk complementary regions. The quantity [construct]

1.3 a = Σ_R (1−χ(R)) [construct]

1.4 is taken over regions of Σ\(𝒜∪ℬ). A nondisk region admits a proper nonseparating arc δ with one endpoint on an α edge and the other on ℬ, or with the two colors interchanged. Here is the obstruction to the contrary: a component whose frontier has no such α edge has frontier in B and ℬ; alternating endpoints at the vertices of P then force a whole boundary component in A or B, or a linear relation among the complete α or β attaching circles modulo ∂Σ. The first is excluded by goodness; the second by the compressionbody disk-system condition. Cut a nonseparating arc initially with any endpoints and slide its ends along the frontier until one of these permissible pairs is reached. A finger of the selected attaching circle along δ replaces R by a region of Euler characteristic χ(R)+1 and an extra bigon. Consequently a decreases by one. All other components have unchanged Euler characteristic. There are finitely many regions, and a is a nonnegative integer, so this stage ends. [construct]

1.5 For a disk region with 2n corners let b(R)=max(n−2,0). Regions meeting ∂Σ need not be improved. The distance of a region is the least number of α/β crossings of a path from ∂Σ avoiding A∪B. A path can be moved off vertices; passage through a vertex counts two crossings. Every region has finite distance: otherwise a component cut off from ∂Σ by A∪B would have a closed A or B frontier. Let d be the largest distance of a bad region. At distance d sort the positive badnesses b₁≥…≥b_m and order the complexity [construct]

1.6 (Σ b_i, −b₁,…,−b_m) [construct]

1.7 lexicographically, padding with zeros if necessary. This is well founded: the first coordinate is a nonnegative integer and, at fixed first coordinate, the sorted lists are finite in number. [construct]

1.8 Choose the last, smallest bad region D_m, and a β side b* adjacent to a region D* of distance d−1; interchange α and β if required. Label its 𝒜 sides a₁,…,a_n beginning after b*. Starting through any a_i, continue straight through opposite sides of squares of distance at least d. A corridor stops at a bigon, a smaller-distance region, a bad region, or a return to D_m. At least one corridor escapes D_m. If all returned, the union of the return strips has frontier a nonempty integral sum of β circles and arcs in A. Since A has no circle components and its vertices lie on ∂Σ, this gives a forbidden relation among the β disks modulo the boundary. No completeness assumption about a closed surface is involved. [construct]

1.9 The following are the actual replacements; they stay in the listed corridors and avoid A. [construct]

1.10 * If an escaping corridor starts at a_i with 2≤i≤n−1, push b* through that corridor. The intermediate squares are each subdivided into three squares. D_m splits into two regions with total badness b(D_m)−1. If the terminal region is a bigon or has smaller distance, the first complexity coordinate decreases. If it is a different distance-d bad region, that region absorbs one unit of badness. The total is unchanged, but an earlier entry in the descending list increases, so the negative sorted list decreases. * Suppose only an end corridor escapes, relabeling so a₁ escapes. If n=3, the corridor from a₂ returns through a₃ and contains a complete β circle: its other possible boundary, a closed A component, is excluded. Slide b* over that β circle along the corridor. D_m becomes a bigon and a square. Extra badness is deposited in D*, whose distance is smaller. * If n>3 and the corridor from a₂ returns at a_l with l<n, use its reverse from a_l to a₂, then continue out a₁ to the escaping corridor. The finger cuts off two squares and two remaining bad pieces whose total badness is b(D_m)−1. * If that corridor returns at a_n, use the return corridor from a_{n−1}; its other end a_p satisfies 2<p<n−1. Follow its reverse from a_p to a_{n−1}, then the first return corridor backwards from a_n to a₂, then escape through a₁. This cuts off four squares and leaves two pieces with total badness b(D_m)−1. The interiors of these square corridors are disjoint: a shared opposite-side continuation would identify their starting and returning sides, contrary to the specified distinct indices. Thus the indicated finger is embedded after taking parallel tracks. [construct]

1.11 No replacement increases the maximum distance of a bad region. The distance-d complexity decreases. Eventually distance d has no bad regions; then d decreases. This gives a finite word of permissible fingers and disk slides, with the actual surface P carried at every step. [construct]

1.12 **Admissibility is preserved, rather than reasserted.** The elementary coefficient calculation is local and does not use genus, a closed cap, or coefficient field. Subdivide a long finger into elementary passages past a crossing. In the passage label the three old regions D₁,D₂,D₃ and the five new pieces D′₁,…,D′₅ by following the old region germs. For a periodic domain with coefficients c_i on the new pieces, constancy of its boundary jump along the same attaching circle gives [construct]

1.13 c₂−c₁ = c₄−c₃ = c₂−c₅, c₁−c₃ = c₂−c₄ = c₅−c₃. [construct]

1.14 Thus c₅=c₁ and c₄=c₂+c₃−c₁. Erasing the finger gives the old periodic domain with coefficients c₁,c₂,c₃. Each of these old coefficients still occurs on an actual new region; coefficients outside the small passage are unchanged. A new nonzero domain cannot erase to zero, since these equations would then make every new coefficient zero. Hence both signs of every old nonzero periodic domain survive, and there is no new positive periodic domain. [construct]

1.15 For the corridor slide, write c* for the coefficient of D*, c₁,c₂ for the two D_m pieces, and c_{i,1},c_{i,2} for the two sides of the i-th corridor square. The jump equations along the sliding β circle and the circle slid over are [construct]

1.16 c₁−c* = c_{i,1}−c_{i,2} = c₂−c*  for every i. [construct]

1.17 In particular c₁=c₂. Erasing the slide gives the old periodic coefficients c*, c₁, c_{i,1}, with all untouched coefficients unchanged. Again every selected coefficient is retained on an actual new region; if the erased domain is zero the displayed equations force all coefficients zero. Both signs survive. These equations also apply to the band slides in the nondisk reduction, after separating the band into local passages. Along A or B no jump is allowed except the existing surface edge; the operation avoids the forbidden color, so the same calculation applies there. [construct]

1.18 Consequently the finite permissible word preserves weak admissibility without moving the boundary marking or replacing the actual periodic-domain lattice by closed-surface homology. [construct]

1.19 **The underlying diagram is nice.** The surface algorithm makes every region disjoint from ∂Σ in Σ\(α∪β∪A∪B) a bigon or square. Erasing A and B glues these pieces across surface edges. A resulting region disjoint from ∂Σ has nonnegative Euler measure. Its alternating α/β boundary therefore makes it a bigon, a square, or a corner-free disk or annulus. A corner-free disk or annulus has frontier a sum of whole attaching circles; its coefficient-one domain is a nonzero nonnegative periodic domain. Admissibility excludes it. Thus every region of the underlying actual sutured diagram which can occur in a counted domain is a bigon or square. [construct] ∎
