---
id: lem-boundary-marked-five-bordisms-give-common-middle-two-handle-traces
kind: lemma
title: "A boundary-marked five-bordism gives a common middle two-handle trace"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: ["def-axiom-of-choice", "lem-fixed-vertical-height-relative-morse-handle-normalization", "lem-interior-one-handle-trade-and-framed-circle-surgery-pair", "lem-framed-circles-in-four-dimensional-two-handle-traces-move-to-the-base", "lem-circumcision-meridian-pair-preserves-relative-three-manifold", "lem-projective-plane-stabilization-gives-relative-five-bordisms"]
justified_by: []
sources:
  references:
    - title: "Justin Roberts, Kirby calculus in manifolds with boundary"
      url: https://arxiv.org/pdf/math/9812086
      locator: "Stage 1 and relative handle setup; the full local constructions are supplied in this proof, rather than assuming surgery or Kirby completeness."
---

## Statement

Assume AC. Let $N$ be a connected nonempty compact oriented three-manifold and let $W_0,W_1$ be connected four-dimensional finite two-handle traces from that same fixed base. Their full common boundary $Y$ and all horizontal, external and corner collar identifications are marked. Suppose a connected compact oriented five-bordism $V$ between them is supplied with its full vertical product collar $Y\times I$ fixed. Then finitely many O3 insertions on each original framed link give two descriptions of the same actual four-dimensional two-handle trace $W_*$ from $N$, with the full marked boundary retained. Here each O3 insertion is a framed knot and its small disk-framed zero meridian, with its actual boundary-relative identification. No condition on any fundamental group is required. In conjunction with the projective-plane stabilization supplier, split signed unit-framed unknot insertions first supply such a $V$ whenever needed. This is a common-middle existence assertion; it does not assert that the two descriptions of $W_*$ are related by a complete O2/O3 movie.

## Facts & Assumptions

**Given:** The manifolds, collars, framed embeddings and boundary identifications in the Statement; AC ([[def-axiom-of-choice]]).

[F1] [[lem-fixed-vertical-height-relative-morse-handle-normalization]] supplies the fixed-height cornered relative handle presentation, top/zero deletion and index ordering for connected nonempty ends.

[F2] [[lem-interior-one-handle-trade-and-framed-circle-surgery-pair]] gives the boundary-preserving one-to-three trade in dimension five and the actual four-dimensional framed-circle-surgery two-handle pair.

[F3] [[lem-framed-circles-in-four-dimensional-two-handle-traces-move-to-the-base]] moves every attaching framed circle in a four-dimensional two-handle trace into its fixed base avoiding the old attaching link, for arbitrary fundamental-group class and prescribed full framing.

[F4] [[lem-circumcision-meridian-pair-preserves-relative-three-manifold]] gives the boundary-relative O3 identification, fixing every old attaching link outside its small solid torus. [[lem-projective-plane-stabilization-gives-relative-five-bordisms]] supplies the actual connected fixed-collar five-bordism after split signed unit-framed-unknot insertions.

## Proof

**Proof technique:** Direct constructions in product collars, retaining the actual boundary maps.

1.1 Apply [F1] to the supplied $V$ in dimension five, keeping the full marked vertical collar. Remove its zero and five handles. Trade each one-handle to a three-handle by [F2], using a joining arc in the connected lower stage. Reorder, reverse, and trade each reversed one-handle to a three-handle there; in the original direction these are trades of index four to index two. No zero, one, four or five handle is reintroduced. Sort the remaining two- and three-handles by the fixed-height construction [F1]. Choose the regular middle four-manifold $W_*$ after the two-handles and before the three-handles. [given, F1, F2, construct]

2.1 From $W_0$ to $W_*$ only five-dimensional two-handles occur. From $W_1$ the reversed three-handles have complementary index $5-3=2$, so the same is true. Every such handle changes its four-dimensional level by interior framed circle surgery. Interior surgery preserves connectedness: the tube boundary $S^1\times S^2$ is connected, so gluing the old tube back could not join different components of its complement; since the old level is connected, that complement is connected, and the replacement attaches along the same connected interface. Thus every level in this construction stays connected, as required to iterate the base-circle argument. [F1, F2, step 1.1, construct]

3.1 Start with either original link presentation of $W_i$. By [F3] move the first five-dimensional handle's attaching circle to the fixed base, retaining its rank-three framing through an integral level frame. Its base representative avoids the old link, so choose its small tube disjoint from every old attaching thickening. By [F2] the actual four-dimensional surgery is two added two-handles on the corresponding $K$ and disk-framed zero meridian $U$. By [F4] its induced O3 boundary map is identity on the old link and the external base collar. Hence every previous handle and both end parametrizations are carried correctly. The new level again has a finite two-handle presentation from the same base. [F2, F3, F4, step 2.1, construct]

4.1 Repeat step 3.1 for the finitely many five-dimensional two-handles from each end. At every stage the preceding conclusion gives exactly the hypothesis needed for [F3], so there is no circular assumption that an arbitrary four-manifold already has such a presentation. Both finite sequences terminate at the same actual level $W_*$ chosen in step 1.1, with its original full marked boundary, and give the stated two link descriptions. If no handles occur, the empty sequence is allowed. [F3, step 1.1, step 3.1, construct]

5.1 If an actual five-bordism was not initially supplied, [F4] first corrects the signature seam by interior connected sums with signed projective planes, represented by split $+1$ or $-1$ framed unknot insertions. It produces the required connected fixed-collar $V$, without a fundamental-group hypothesis. Apply step 1.1, step 2.1, step 3.1, step 4.1 to these corrected traces. This adds precisely the asserted O1 preparation to the O3 common-middle construction. The conclusion leaves two descriptions of $W_*$; comparing them by an unrestricted trace-changing movie is a further theorem and is not inferred from their common diffeomorphism type. [F4, step 4.1, construct] ∎



This retains `five-dimensional-common-middle-trace-construction.md`, Section 7, with its circle input supplied by the separately packaged finite-dimensional construction. The actual projective-plane relative-five-bordism proof was read in full. Roberts' common-middle stage is the source context; no same-trace two-equivalence or decorated Kirby-completeness theorem is imported. The native full relative-presentation theorem remains a separate consumer of the global movie construction.

## Scope and source attribution

This retains `five-dimensional-common-middle-trace-construction.md`, Section 7, with its circle input supplied by the separately packaged finite-dimensional construction. The actual projective-plane relative-five-bordism proof was read in full. Roberts' common-middle stage is the source context; no same-trace two-equivalence or decorated Kirby-completeness theorem is imported. The native full relative-presentation theorem remains a separate consumer of the global movie construction.
