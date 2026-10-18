---
id: lem-interior-one-handle-trade-and-framed-circle-surgery-pair
kind: lemma
title: "Interior one-handle trades and the fully framed circle-surgery pair"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: ["def-axiom-of-choice", "lem-isotopy-extension-for-a-compact-source-with-boundary", "lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism", "lem-framed-circles-in-four-dimensional-two-handle-traces-move-to-the-base", "lem-circumcision-meridian-pair-preserves-relative-three-manifold", "lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type"]
justified_by: []
sources:
  references:
    - title: "Justin Roberts, Kirby calculus in manifolds with boundary"
      url: https://arxiv.org/pdf/math/9812086
      locator: "Stage 1 and relative handle setup; the full local constructions are supplied in this proof, rather than assuming surgery or Kirby completeness."
---

## Statement

Assume AC. In dimension $d\ge4$, a one-handle whose feet lie in the same connected lower stage can be replaced, by an interior framed circle surgery, with one $(d-2)$-handle. The resulting manifold may change, but its entire boundary, specified collar and every later attaching map are identified with the old ones. The framing for this existence trade is the displayed product framing. Separately, surgery on a prescribed rank-three-framed circle lying in a product three-dimensional level of an oriented four-manifold, with its framing homotopic to a level rank-two framing plus the level-normal line, is represented relative to the unaffected boundary by adjoining two four-dimensional two-handles on that framed knot $K$ and a small disk-framed zero meridian $U$. The statement retains the integral framing of $K$. In a two-handle trace every interior framed circle can be put in this form by the preceding circle lemma. The pair's boundary identification is the boundary-relative local O3 identification.

## Facts & Assumptions

**Given:** The manifolds, collars, framed embeddings and boundary identifications in the Statement; AC ([[def-axiom-of-choice]]).

[F1] [[lem-isotopy-extension-for-a-compact-source-with-boundary]] compares isotopies of the full compact tubular attaching embeddings; [[lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism]] compares compatible seam roundings by collar-supported diffeomorphisms.

[F2] [[lem-framed-circles-in-four-dimensional-two-handle-traces-move-to-the-base]] moves an interior framed circle of a four-dimensional two-handle trace to a pushed-in fixed base, disjoint from the old link, retaining the prescribed rank-three framing through an integral level framing.

[F3] [[lem-circumcision-meridian-pair-preserves-relative-three-manifold]] gives the actual boundary-relative solid-torus diffeomorphism for a framed core and its disk-framed zero meridian. It fixes the old link and external collars when their supports avoid that torus.

[F4] [[lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type]] absorbs a ball attached along a boundary disk by a diffeomorphism supported in its collar.

## Proof

**Proof technique:** Direct constructions in product collars, retaining the actual boundary maps.

1.1 Join the feet of the one-handle by an embedded arc in the connected lower stage, with interior away from the feet, and thicken it. Along with the handle core this gives a standard ball-plus-tube neighborhood $S^1\times D^{d-1}$, with a designated $(d-1)$-ball on its boundary in the lower stage. Concretely thicken the joining arc to a disk tube, use the foot disks as its ends, and join the second tube supplied by the handle. Match their endpoint normal coordinates to obtain exactly this product, and push the core circle into its interior. [given, construct]

1.2 For the four-dimensional bridge choose coordinates $S^1\times D^3$ about the level circle, with $D^2_{\mathrm{eq}}$ the level equator and lower/upper half-balls $D^3_-,D^3_+$. Remove this tube and insert $D^2_a\times S^2$, using its given full rank-three framing. Split $S^2=S^2_-\cup_{S^1_{\mathrm{eq}}}S^2_+$. The lower product with $S^1\times D^3_-$ removed is a product collar with an indented outgoing face: in the normal coordinates the half-ball removal moves the old upper face to an inward rounded graph. A smooth increasing interval map on each normal line, fixed at the lower end, carries that face to the graph; these maps are identity outside the tube and the seam rounding is in a smaller collar. The upper half has the same product description. Thus the surgery is a product, the two inserted pieces, and an absorbable outgoing product. [F1, construct]

2.1 Interior surgery replaces a smaller $S^1\times D^{d-1}$ by $D^2\times S^{d-2}$. The remaining shell of the original product is $S^1\times S^{d-2}\times I$, so it is a retained boundary collar. Split the sphere into its two hemispheres. The first $D^2\times D^{d-2}_+$ is a ball. The second, read with core factor $D^{d-2}_-$, is a $(d-2)$-handle with attaching region $D^2\times S^{d-3}$ and outgoing region $S^1\times D^{d-2}_-$. Place the designated lower-stage boundary ball in $S^1\times\operatorname{int}D^{d-2}_+$, which is on the first ball's boundary. Absorb that ball into the lower collar by [F4]. The remaining handle has index $d-2$. The outer collar is unchanged point by point; every later attachment is carried by that boundary identification. This is an interior modification, not a cancellation of the original ambient manifold. For $d=4$ it trades index one for two, and for $d=5$ one for three; reversing dimension five gives index four to two. [F1, F4, step 1.1, construct]

2.2 The first piece $D^2_a\times S^2_-$ is a two-handle with core $D^2_a$, normal disk $S^2_-$ and attaching region $S^1_a\times S^2_-$. On the old level this is the knot $K$ with its prescribed level framing. Its outgoing region is $D^2_a\times S^1_{\mathrm{eq}}$. The second piece $D^2_a\times S^2_+$ is also a two-handle, but its disk factors are interchanged: core $S^2_+$, normal disk $D^2_a$, attaching region $D^2_a\times S^1_{\mathrm{eq}}$. This is exactly the outgoing region of the first handle; using the same core factor for both would give a different attaching region. [step 1.2, construct]

3.1 The second attaching circle is $\{p\}\times S^1_{\mathrm{eq}}$ for an interior point $p\in D^2_a$. Move $p$ along a radial arc toward $S^1_a$, first shrinking its normal thickening uniformly. This is a compact isotopy of the actual attaching product embedding in the boundary after the first handle. At the seam its product corner rotation carries it to the old level, where it is a small meridian of $K$. Its tangential $S^1_a$ direction is a constant push direction around this meridian and its other normal direction is the complementary radial direction in $D^2_{\mathrm{eq}}$. Thus its framing has no turn relative to the meridian disk, so is zero. Its other boundary piece $S^1_a\times S^2_+$ is where the indented upper product attaches. Absorbing that product retains the original upper boundary map. By [F1] these product isotopies compare the full handle attachments, not just their cores. [F1, step 2.2, construct]

4.1 For an arbitrary prescribed rank-three frame on a circle in a two-handle trace, [F2] first moves the circle to the base and realizes its framing by an integral level frame. Its framing homotopy is realized by an isotopy of small tubular embeddings, so step 1.2, step 2.2, step 3.1 apply to the prescribed surgery relative to the whole ambient boundary. By [F3] the resulting pair has the O3 boundary-relative identification on its small solid torus; old attaching links outside that torus and external base collars are fixed. This proves the bridge for every framing, without identifying the two rank-three parity classes, as well as the existence trade in step 1.1, step 2.1. [F1, F2, F3, step 2.1, step 3.1, construct] ∎

## Scope and source attribution

This retains the full two-hemisphere construction and essential second-factor swap in `five-dimensional-common-middle-trace-construction.md`, Sections 1–3. The compact embedding, corner-rounding, disk-absorption and local O3 suppliers were read in full. The local trade chooses its product framing; only the separate four-dimensional bridge handles an arbitrary prescribed framing. No uniqueness of four-dimensional trace presentations or completeness of O2/O3 is assumed.
