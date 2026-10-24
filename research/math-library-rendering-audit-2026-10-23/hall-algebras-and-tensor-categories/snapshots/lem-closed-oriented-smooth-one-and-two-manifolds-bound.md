---
id: lem-closed-oriented-smooth-one-and-two-manifolds-bound
kind: lemma
title: "Closed oriented smooth one- and two-manifolds bound"
status: published
dependency_level: 0
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-axiom-of-choice, lem-a-compact-connected-one-dimensional-manifold-without-boundary-is-a-circle, thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms, thm-morse-rearrangement-by-index, thm-morse-functions-and-handle-decompositions-correspond, lem-polygonal-schema-reduction-moves, lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations, def-unoriented-and-oriented-bordism-groups]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Appendix, printed pp.55–57; actual native circle proof used."
    - title: "Gallier and Xu, A Guide to the Classification Theorem for Compact Surfaces"
      url: "https://www.cis.upenn.edu/~jean/surfclassif-root.pdf"
      locator: "Actual native finite polygonal reduction proof used; its smooth collar realization is supplied locally."
---

## Statement

Assume AC. Every compact closed oriented smooth one-manifold is the oriented boundary of a compact smooth oriented two-manifold. Every compact closed oriented smooth two-manifold is the oriented boundary of a compact smooth oriented three-manifold. Empty and disconnected inputs are included. Consequently $\Omega^{SO}_1=\Omega^{SO}_2=0$ integrally.

## Facts & Assumptions

**Given:** AC and the closed compact oriented smooth manifold of dimension one or two.

[A1] [[def-axiom-of-choice]] covers the inherited countable-choice hypotheses of smooth classification and Morse theory.

[F1] [[lem-a-compact-connected-one-dimensional-manifold-without-boundary-is-a-circle]] proves the smooth diffeomorphism classification of each nonempty connected compact one-manifold without boundary.

[F2] [[thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms]], [[thm-morse-rearrangement-by-index]] and [[thm-morse-functions-and-handle-decompositions-correspond]] supply a finite index-ordered smooth disk/band/capping-disk presentation of any closed smooth surface; their hypotheses allow empty incoming and outgoing faces in dimension two.

[F3] [[lem-polygonal-schema-reduction-moves]] proves, by explicit finite diagonal splits and merges, cancellation of adjacent inverse sides and extraction of an interlaced opposite-direction pair into a commutator block. [[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]] supplies smooth disk, annulus, disk-and-band tree contraction, and boundary-circle extension constructions; in its proof the explicit positive-derivative collar maps are used below, rather than a general smooth-structure uniqueness theorem.

[F4] [[def-unoriented-and-oriented-bordism-groups]] identifies a zero oriented bordism class with an actual compact smooth oriented filling of the single manifold, and uses disjoint union as addition.

## Proof

1.1 Components of a manifold are open, since coordinate balls are connected. Compactness therefore makes their open cover finite. In dimension one apply [F1] to each component, obtaining a smooth circle parametrization. If it reverses the supplied orientation, precompose with a circle reflection. The resulting orientation-preserving parametrization identifies that component with the induced boundary of an oriented disk. The disjoint union of these disks proves the one-dimensional assertion; the empty manifold uses the empty filling. [A1, F1, F4, given]

1.2 Let $S$ be a connected oriented smooth closed surface. Use [F2] to give it a finite smooth handle presentation with all disks before bands before capping disks. Each band's product collar transports any later attaching windows on earlier bands back onto zero-disk boundaries: the longitudinal interval maps interpolate by $(s,t)\mapsto((1-\alpha(t))s+\alpha(t)f(s),t)$ for increasing $f$, so the first derivative is positive. Finite induction gives a disk-and-bands ribbon graph. It is connected, because a capping disk attaches on a connected circle and cannot join components. A spanning tree of this finite graph contracts to one zero-disk. Each contraction is an actual disk-plus-rectangle-plus-disk replacement by a rounded planar disk, carrying every other attaching window along its boundary; this is the disk/band collar construction of [F3]. Apply the same construction upside down along a dual spanning tree to leave one capping disk. Thus $S$ is given by one smooth disk, finitely many untwisted oriented bands, and one capping disk. [F2, F3, construct]

2.1 Cut the ribbon presentation along its band cores to read the finite side-pairing word of the complementary disk. Every letter appears once in each direction: the other possibility reverses the surface orientation across that band. We may perform the inverse-pair cancellation and interlaced-pair extraction of [F3] within this smooth ribbon presentation. Here is the smooth realization, which is needed because [F3]'s schema statement alone is topological. Every split arc can be chosen smooth inside the actual disk, joining the same two specified boundary intervals, and straightened in a thin rectangular collar. Cutting and immediately identifying its two product sides is the original disk chart, with transition maps equal to product maps on smaller collars. Every inverse merge joins two disks along a collared interval; rounding identifies their union with a disk by the same planar disk/band map used in step 1.2. Subdivision, cyclic reading and relabelling change no underlying chart. The finitely many endpoint windows are straightened by increasing interval maps extended by the displayed positive-derivative interpolation. Thus every split/merge is an identification of the same smooth collared surface and carries all remaining attachments; it does not assert that an arbitrary boundary homeomorphism is smooth. [F3, step 1.2, construct]

3.1 Repeatedly cancel adjacent inverse pairs in the residual word. If a nonempty residual word has no interlaced pair, choose a paired interval with the fewest intervening letters. Any letter strictly inside that interval must have its mate inside it, for otherwise it would interlace the chosen pair. An innermost such pair is adjacent, contrary to cancellation. Thus a nonempty reduced residual word has an interlaced pattern $aUbVa^{-1}Xb^{-1}Y$. The exact split/merge identity of [F3] extracts one commutator block and leaves the shorter residual word $YXVU$. Set that block aside and repeat on the complementary residual disk. Every iteration either deletes a pair or extracts two pairs, so termination is finite. There are no crosscap blocks because all pairs have opposite directions. The terminal empty residual is a capped disk; geometrically retain the sphere bigon rather than an empty polygon. Therefore these actual smooth operations identify $S$ with a sphere carrying $g$ standard one-holed-torus blocks, with all seam collars transported. [F3, step 2.1, construct]

4.1 Take a smooth three-ball and attach $g$ oriented three-dimensional one-handles $D^1\times D^2$ along disjoint pairs of boundary disks. Its boundary replaces, for each such handle, two disks in the sphere by the cylinder $D^1\times S^1$. This is precisely the oriented torus-handle block from step 3.1: cutting the boundary of the cylinder together with a disk joining its two attaching circles gives the commutator square, and its product charts give the same disk-and-two-band model. The disk, annulus and interval collar maps in [F3] match the seam parametrizations; the final boundary-circle map extends over the capping disk. Thus the boundary is smoothly diffeomorphic to $S$. Choose the three-manifold's orientation so that this diffeomorphism preserves the supplied orientation of $S$; reversing it reverses its entire boundary orientation. This constructs a compact smooth oriented filling of each connected $S$. [F3, step 1.2, step 2.1, step 3.1, construct]

5.1 Apply step 4.1 to the finitely many components from step 1.1 and take the disjoint union. For the empty surface take the empty three-manifold. Each constructed filling has the actual single input as its oriented boundary, so [F4] gives $\Omega^{SO}_1=\Omega^{SO}_2=0$ without rationalization or multiplication of a bordism class. All auxiliary finite disk, band and tree choices add no choice beyond [A1]. [A1, F4, step 1.1, step 4.1] ∎
