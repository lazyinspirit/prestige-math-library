---
id: lem-irregular-switches-in-original-face-braids-give-strict-essential-disk-improvement
kind: lemma
title: Irregular switches in original face braids strictly improve essential disks
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-normal-surface-coordinate-box
  - lem-triangular-normal-arcs-admit-braid-position-stable-under-partial-regular-switches
  - lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams
  - lem-essential-pl-disks-admit-normal-replacements
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Wolfgang Haken, Theorie der Normalflächen, Acta Mathematica105
        (1961),245–375
      url: https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5921-11511_2007_Article_BF02559591.pdf
      locator: Hauptsatz4 and Satz8, printed pp.356–366, irregular-switch fold and
        strict normalization. The proof below supplies the fold on an original
        triangulation edge by a first-turnback argument in the actual face
        braid, rather than transferring the adapted F-number.
dependency_level: 4
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Start with the normal diagram constructed by the original-triangulation regular-sum construction, retaining its central-triangle and three-strip face braids. Let $W=w(X)+w(Y)$. A preliminary subset of its double curves may already have been switched regularly.

On some of its remaining double curves choose either the regular switch or its opposite, called an **irregular switch**, leaving the others unswitched. Suppose at least one irregular switch is performed. If a parametrizing component $P$ of the resulting diagram has an embedded proper PL disk as its image and its boundary is essential in $\partial M$, then there is an essential normal disk $D'$ in the original triangulation with

$$w(D')<W.$$

Other components may intersect the image of $P$ along unswitched double curves; only $P$ itself is required to be embedded. Parametrizing components separate the branches at unswitched crossings. No irreducibility, orientability, projective-plane or choice hypothesis is imposed.

## Statement references

[[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]]

[[lem-triangular-normal-arcs-admit-braid-position-stable-under-partial-regular-switches]] — the actual three rectangular strips in each original face.

[[lem-essential-pl-disks-admit-normal-replacements]] — essential disk replacement by edge-nonincreasing finite moves.

## Facts & Assumptions

**Given:** The retained face-braid diagram, finite selections of regular and irregular switches, and the embedded essential disk component $P$.

[F1] Every original tetrahedral double arc joins distinct faces, and every global double curve therefore meets some face. The regular switch at any crossed face is the monotone through reconnection in one of its three strips. Its opposite pairs the two outer-side branches and the two gate-side branches. Prior regular switches retain this same monotone strip description. ([[lem-compatible-normal-vectors-admit-original-triangulation-regular-sum-diagrams]], [[lem-triangular-normal-arcs-admit-braid-position-stable-under-partial-regular-switches]])

[F2] The replacement proof in [[lem-essential-pl-disks-admit-normal-replacements]] uses tetrahedral cap replacements and compressions that fix the face boundary curves and edge intersections; sphere discards can only remove such intersections. Once all tetrahedral pieces are disks, an edge-return produces an actual edge bigon and removes two edge intersections, retaining an essential disk in the boundary-edge case. All later moves are nonincreasing in edge weight. These are the explicit local moves of that supplier’s proof, not an isotopy or irreducibility claim.

## Proof

1.1 All switching neighborhoods miss $T^{(1)}$. Hence every original edge-intersection point belongs to exactly one parametrizing component, and the sum of their edge weights is $W$. In particular $w(P)\le W$. If $w(P)<W$, apply [F2] to obtain an essential normal disk of weight at most $w(P)$, which proves the result. It remains to consider $w(P)=W$. In this case every original edge-intersection point belongs to $P$, and every other parametrizing component has weight zero. [given, F2, construct, algebra]

1.2 An irregularly switched global curve crosses some face by [F1]. Choose one of that face's rectangular strips containing an irregular reconnection. Parametrize it so the horizontal coordinate runs from the original edge $e$ to its central gate. Order its finitely many crossing neighborhoods from the outer edge toward the gate. If distinct neighborhoods have the same horizontal coordinate, shrink them and perturb their positions slightly along their monotone wires to order them; this keeps the wires monotone, preserves their crossings and changes none of their endpoint orders. Thus we may speak of the first irregular reconnection in this strip. To its outer side, all selected switches are regular, and any unswitched crossing just follows its original monotone wire. [given, F1, construct]

2.1 Before that first irregular reconnection, every incoming parametrizing strand is horizontally monotone and joins its crossing neighborhood to an original endpoint on $e$. The two incoming branches come from distinct such strands and distinct endpoints: all preceding crossings either keep two monotone strands separate in the normalization or regularly reconnect them from outer side to gate side. The irregular reconnection joins precisely these two incoming branches. It consequently creates a parametrizing arc with its two distinct endpoints on $e$, lying entirely on the outer side of this reconnection except for its small turning cap. Later reconnections farther toward the gate cannot change this arc, since their neighborhoods lie beyond its maximal horizontal coordinate. This gives an edge-return parametrizing arc in the completed face diagram. [F1, step 1.2, construct]

3.1 In the equality case of step 1.1, both endpoints of that return arc belong to $P$. A face parametrizing arc lies in one global parametrizing component, so this entire arc belongs to $P$. Its image is an embedded proper arc in the face, because $P$ is embedded. Its ends are two distinct intersections with the same original edge $e$. Possible intersections with other parametrizing components do not affect this assertion about the arc within $P$. [given, step 1.1, step 2.1, construct]

4.1 Normalize $P$ using [F2]. If a preliminary sphere discard or other move removes any edge intersection before all tetrahedral pieces are disks, its weight has already decreased and the final normal essential disk has weight less than $w(P)$. Otherwise no edge intersection has been removed. The cap preparations and tetrahedral compressions fix the face curves. A sphere discard could not have removed the return arc of step 3.1 without removing its two edge endpoints. Thus that arc remains on the retained essential disk when its tetrahedral pieces become disks. On either incident tetrahedron, its boundary circle then meets $e$ at least twice. The explicit bigon construction in [F2] gives a strictly weight-decreasing edge move; if $e$ is a boundary edge its two disk outputs have total weight smaller by two, and at least one has essential boundary. Keeping that disk again decreases weight strictly. [F2, step 3.1, construct, cases]

5.1 Finish the finite normalization [F2]. No subsequent move increases weight, so its essential normal disk satisfies $w(D')<w(P)=W$. Together with step 1.1 this proves the Statement. The strict decrease comes from a return to an original edge, and has not used an auxiliary normal-coordinate objective or an ambient sphere theorem. [F2, step 1.1, step 4.1, algebra] ∎
