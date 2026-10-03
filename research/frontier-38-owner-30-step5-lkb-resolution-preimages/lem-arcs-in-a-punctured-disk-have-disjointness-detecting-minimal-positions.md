---
id: lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions
kind: lemma
title: Minimal-position representatives and the arc bigon criterion
status: draft
origin: pipeline
deps: [lem-jordan-schoenflies-extension-for-plane-curves, def-axiom-of-choice, lem-homotopic-simple-proper-arcs-in-the-punctured-disk-are-isotopic-relative-to-their-endpoints, thm-brouwer-fixed-point-theorem, thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group]
justified_by: []
aliases: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Farb and Margalit, A Primer on Mapping Class Groups, version 5.0 author draft"
      url: "https://www.math.utah.edu/~margalit/primer/"
      locator: "Chapter 1, Proposition 1.7 (bigon criterion) with its two proofs and Lemma 1.8, printed pp. 30-34"
    - title: "Bigelow, Braid groups are linear, J. Amer. Math. Soc. 14 (2001) 471-486"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Lemma 3.1 and its proof, printed p. 480: digon criterion invoked for noodle-tine pairs, with the extension of edges to simple closed curves"
verification:
  precheck: n/a
---
## Statement

Assume AC. Let $D$ be the closed unit disk, $P\subset\operatorname{int}D$
finite, and $\mathcal N$ a finite family of pairwise disjoint simple arcs in
$D\setminus P$ with endpoints on $\partial D$ and interiors in
$\operatorname{int}D\setminus P$. Let $T$ be a simple arc in $D\setminus P$
with endpoints in $P\cup\partial D$ and interior in
$\operatorname{int}D\setminus P$. Then:

(i) $T$ is isotopic relative to its endpoints, through such arcs, to an arc
meeting every member of $\mathcal N$ transversally with minimal total number of
intersections;

(ii) $T$ is isotopic relative to its endpoints to an arc disjoint from every
member of $\mathcal N$ if and only if some (equivalently every) minimal-position
representative is disjoint from $\mathcal N$;

(iii) if this holds and $C\subset D$ is a finite union of pairwise disjoint
simple proper arcs (with the endpoint convention below) disjoint from $T$ and from every member of $\mathcal N$, then the
disjoining isotopy can be chosen with its moving part disjoint from $C$.

## Facts & Assumptions

**Given:** $D$, the finite puncture set $P$, the finite family $\mathcal N$ of
disjoint arcs with endpoints on $\partial D$, and the arc $T$ with endpoints in
$P\cup\partial D$. An "arc" of this page is proper: its endpoints lie in
$P\cup\partial D$, so no component of a family of arcs is a closed loop.

[F1] [[lem-jordan-schoenflies-extension-for-plane-curves]] supplies prescribed Jordan-disk boundary extensions under AC.

[F2] [[lem-homotopic-simple-proper-arcs-in-the-punctured-disk-are-isotopic-relative-to-their-endpoints]] supplies the relative graph/face smoothing construction (proof 1.1–3.1), the compact terminal-strip normalization and actual universal-cover bigon projection (proof 4.1–5.1), and supported ambient disk and endpoint-sector pushes (proof 6.1). These constructions use AC and are independent of this item. Their cover projection uses [[thm-brouwer-fixed-point-theorem]], and the supported moves use [[thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group]].

## Proof

1.1 Interpret transverse intersections and their number in the interiors; common fixed boundary endpoints are retained and not counted. The graph/face construction of [F2] puts the disjoint family $\mathcal N$ in polygonal coordinates: its union with the outer circle divides the disk into finitely many Jordan faces, prescribe the boundary and crosscut maps, and extend over the faces by [F1], correcting the finitely many marked points in their own faces. This is a fixed change of coordinates, not a moving family. In those coordinates apply [F2]'s relative smooth-representative construction to $T$, keeping $P$ and the outer boundary fixed. Its finite normal strips permit polygonal interpolation; finitely many small vertex perturbations give finitely many transverse interior intersections with the fixed polygonal crosscuts. At a common boundary endpoint separate the two germs by the supported half-disk shear and straighten them as in [F2]; their endpoint remains fixed. These are ambient isotopies of $T$, not simultaneous motions of the reference crosscuts. Thus the set of finite attainable total intersection counts is a nonempty subset of $\mathbb N$, and its least member is attained. This proves (i). If a disjoint representative exists the least count is zero, and every least-count representative has that count; conversely a zero-count representative supplies the required disjointness unless there is a common endpoint, in which case literal disjointness is impossible for every representative. This proves (ii), with common endpoints treated consistently. [F1, F2, given, construct]

2.1 We record the additional extraction needed for avoidance and for the consumers: if $T$ can individually be isotoped off each of a disjoint family of crosscuts and meets that family, there is a clean puncture-free bigon reducing its total count. For a crosscut $M$ met by $T$, take the supplied relative-endpoint isotopy to a representative disjoint from $M$. Compact-square continuity permits terminal strips missing $M$ when the endpoints differ; if there is a common boundary endpoint use the normalized half-disk sector construction of [F2]. Perturb the compact remainder piecewise transversely. The inverse image of $M$ consists of finitely many arcs and possibly circles. Circles need not be removed and contribute no boundary endpoints. If the initial and final counts are $I,J$, and $A,B,C$ count components with respectively two initial, two final, and one of each boundary endpoint, then $I=2A+C$ and $J=2B+C$. In the disjoining case $J=0<I$, so a returning component gives a nullhomotopic loop consisting of a $T$ subpath and an $M$ subpath. Endpoint-sector versions retain their single fixed boundary endpoint; no half-bigon between two distinct fixed boundary points is used. [F2, step 1.1, construct]

3.1 Lift that loop to the simply connected cover of the punctured disk. This is the cut-disk tree cover used in [F2]; compact pieces lie in a finite subtree enlarged by the corner stars and bounded puncture-collar rectangles, hence in a disk chart where Jordan separation applies. The lifts of the proper arcs are locally finite, and there are finitely many transverse crossings in that compact region. The returning pair of lifted subpaths contains a lifted bigon: erase repeated traversal segments and choose the first return bounding a disk between the two embedded lifted lines; an outermost entering segment gives a smaller such disk. Reduce across ALL lifts of $T$ and ALL crosscuts until none enters its interior. A different crosscut cannot cross the crosscut side, so any entering component has both contacts on the $T$ side and cuts off a smaller bigon; a lifted $T$ component similarly returns to the other side. The same finite reduction handles further lifts of $M$. Boundary projection is injective: an identified point of different sides gives another transverse lifted crossing on a side, one branch entering the disk, contrary to the reduction. Same-side identifications are excluded by embeddedness. Consequently distinct deck translates of the boundary are disjoint. If their disk interiors overlap, Jordan nesting gives a deck map or its inverse carrying the compact disk into itself, contrary to Brouwer and the fixed-point-free deck action. Thus the entire disk projects injectively to an ordinary compact disk missing $P$. At a common boundary endpoint the same argument is in a half-disk chart with that endpoint an actual covering point; no ideal puncture tip is used. This is the projection justification, rather than an inference that a face of a null-homotopy domain embeds in the surface. [F2, step 2.1, construct]

4.1 A clean bigon push is supported in a slightly enlarged disk, not literally only in the original closed bigon. Its moving crosscut is prescribed to pass to a small pushoff of the opposite side, fixing the support boundary; [F1] extends the prescriptions over both Jordan faces, and [F2]'s Alexander move realizes them. At a boundary corner use a half-disk and fix its boundary edge. Choose the enlargement so it misses all other crosscuts and all punctures. Two interior crossings disappear (one for a fixed endpoint sector), and no new crossing appears. Starting with an arc individually disjoinable from each crosscut, these ambient isotopies preserve each such individual isotopy class. Step 2.1 therefore gives another clean bigon whenever any intersections remain. Strict decrease of the finite total count terminates with simultaneous disjointness. This proves the additional individual-to-simultaneous disjoining assertion used by the kernel argument. [F1, F2, step 3.1, construct]

5.1 For (iii), each component of $C$ is proper by the original Given convention. A clean bigon from step 3.1 cannot meet $C$: a component meeting its interior cannot cross either boundary side, since $C$ is disjoint from both $T$ and the crosscuts; it cannot remain wholly inside, since its endpoints are on $P\cup\partial D$, whereas the ordinary bigon interior contains no such point. In an endpoint-sector disk its only boundary endpoint is on $T$, hence is also excluded by $C\cap T=\varnothing$. Compactness then allows the enlarged support of step 4.1 to miss $C$. After each push $T$ remains disjoint from $C$, so the same argument applies at the next stage. The finite composite disjoins $T$ while its moving part avoids $C$, proving (iii). AC is used in the general planar graph/face and smoothing constructions; the proper-end convention is essential here. A floating unmarked interior-ended obstacle could lie wholly inside a bigon and would not satisfy that convention. [given, step 3.1, step 4.1, construct] ∎
