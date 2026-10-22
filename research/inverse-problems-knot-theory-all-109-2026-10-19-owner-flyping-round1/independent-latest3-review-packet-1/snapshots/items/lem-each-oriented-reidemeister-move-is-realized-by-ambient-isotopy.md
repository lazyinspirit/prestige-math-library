---
id: lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy
kind: lemma
title: "Each oriented Reidemeister move is realized by an ambient isotopy"
status: published
origin: pipeline
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-17.md"
      - "research/frontier-38-owner-30-alpha-batch-17-5a.md"
      - "research/frontier-38-owner-30-step5-hash-17-post.json"
    reviewed_raw_sha256: "bde646175bf7cc5ea44cea50d191dfd20a1dac766057604f9c94698b2e666981"
    content_sha256: "5acd2cf9c95ccd0efaf14d120387a9538b856f598c1a47f52b283ededd7ed22b"
pipeline_run: frontier-38-owner-30
deps: [def-oriented-reidemeister-moves, def-oriented-link-in-s-three-and-ambient-isotopy,
       def-planar-isotopy-of-link-diagrams,
       thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; section 2.3 and Figures 3-12, printed pp. 12-26"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links, AMS Surveys and Monographs 208 (2015); section 2.1, printed pp. 13-19; Appendix B.1, printed pp. 367-372"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
---

## Statement

Let $D,D'$ be regular oriented diagrams of links $L,L'$. If the diagrams
differ by one oriented Reidemeister move or a planar isotopy, the links are
equivalent. The local Reidemeister replacement has a realization supported
in a ball over its move disk, after choosing lifts that agree outside that
ball. Comparing arbitrary realizing links may additionally require changing
their heights away from the move disk.

## Facts & Assumptions

**Given:** The regular oriented diagrams and their realizing links, as in [[def-oriented-link-in-s-three-and-ambient-isotopy]].

[F1] The three standard local moves have both signs and all consistent orientation and height-order variants ([[def-oriented-reidemeister-moves]]).

[F2] A planar isotopy is a smooth ambient isotopy transporting the decorated diagram ([[def-planar-isotopy-of-link-diagrams]]).

[F3] A compactly supported smooth time-dependent vector field has global smooth evolution, with inverses given by reverse evolution ([[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]]).

## Proof

**Proof technique:** direct.

1.1 **Heights over a fixed regular diagram.** Use the source identification determined by the oriented branches. Two lifts of the same diagram have the same planar map and smooth height functions $h_0,h_1$. Their linear interpolation preserves the strict height difference at every double point, so remains injective; it remains immersive because its projected derivative is nonzero. Compactness then makes every slice an embedding. This gives a smooth isotopy between any two realizing lifts, after a stationary time reparametrization. It generally moves portions outside a specified local disk. [given, construct]

2.1 **The local embedding families.** Choose standard lifts of the move pictures, with the same boundary germs. For R1 the local spatial family $(v^2,v^3+\delta v,v)$ remains embedded for all small $\delta$, since the third coordinate is strictly monotone; its projections on the two sides have respectively one curl crossing and none. Fixed endpoint collars and a cutoff inside a slightly larger disk join this model to the unchanged arc. Changing the sign of the third coordinate gives the opposite crossing. For R2 use two graph arcs $(v,0,-\eta)$ and $(v,v^2+\delta,+\eta)$ on the moving central portions, with fixed collars: one sign of $\delta$ gives two crossings, the other none, and their heights keep them disjoint. For R3 use three transverse planar arcs with fixed distinct height levels, and slide one projected arc across the intersection of the other two, with the motion cut off before its boundary collars. Distinct height levels prevent any spatial collision. Permuting those levels covers all six consistent height orders, including a moving strand between the others. Reversing the parameter gives the inverse moves, and orienting each arc as prescribed covers the oriented variants. These are families of embedded arcs, not straight-line interpolations of arbitrary kinks. Standard representatives can be arranged to agree with the unchanged diagram and its chosen heights outside the ball. [F1, step 1.1, construct]

3.1 **Ambient extension with the stated support.** For any of these compact smooth embedding families, extend time constantly past its stationary end collars. The graph $(t,x)\mapsto(t,F_t(x))$ is an embedded submanifold of the time-space product. In a slice chart its vertical velocity $(0,\partial_tF)$ extends by keeping its coordinate coefficients constant in the normal directions; retain only the spatial component of this extension. Finitely many such charts cover the compact moving trace. Euclidean bump functions, positive on smaller charts and normalized by their finite sum near the trace, combine these extensions into a smooth time-dependent spatial vector field agreeing with the velocity. Multiply by a further cutoff supported in the prescribed open ball, or in a relatively compact neighbourhood of the full trace for step 1.1. Integrate by [F3]. Uniqueness makes the flow follow $F_t$ on the link and fix points outside its support. The construction is finite and uses no choice axiom. [F3, step 1.1, step 2.1, construct]

4.1 **Planar isotopy and conclusion.** A planar isotopy lifts by $(x,y,z)\mapsto(\Phi_t(x,y),z)$. Its action on the compact link trace can be cut off in a large spatial ball, by the velocity construction in step 3.1, to extend smoothly over $\infty$. Step 1.1 adjusts its final heights to the chosen lift of $D'$. For a Reidemeister move, first adjust to the standard lift, apply the ball-supported family of step 2.1 extended by step 3.1, then adjust to $L'$. All the families preserve the component orientations. Thus arbitrary realizing links are equivalent, while support in the move ball is asserted precisely for the local replacement with fixed outside lift. [F1, F2, F3, step 1.1, step 2.1, step 3.1] ∎
