---
id: thm-balanced-multipointed-knot-heegaard-moves-generate-diagram-equivalence
kind: theorem
title: "Balanced multipointed knot Heegaard moves generate diagram equivalence"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - def-admissible-pointed-heegaard-floer-data
  - lem-mos-basepoint-pair-insertion-preserves-balanced-knot-data
  - lem-cyclically-ordered-knot-marks-can-be-aligned-by-ambient-isotopy
  - lem-smooth-bridge-witnesses-admit-neat-corner-parametrizations-after-normalization
  - lem-proper-compression-disks-admit-neat-witnesses-with-standard-cut-balls
  - lem-simultaneous-bridge-witnesses-can-avoid-a-compression-disk-system
  - lem-bridge-half-disks-can-be-neatened-while-preserving-their-arcs
  - lem-neatly-bridged-compression-data-admit-adapted-morse-endpoints
  - lem-neat-marked-morse-endpoints-glue-across-a-heegaard-surface
  - lem-adapted-knot-morse-endpoints-admit-a-common-protected-germ
  - lem-relative-function-event-paths-preserve-fixed-extrema
  - lem-cc-relative-descending-paths-have-finite-same-index-events
  - lem-finite-weak-knot-morse-movies-admit-relative-middle-level-grouping
  - lem-regular-grouped-knot-morse-data-give-balanced-diagram-isotopies
  - lem-an-isolated-same-index-knot-morse-trajectory-gives-a-marked-disk-slide
  - lem-grouped-simple-knot-morse-births-give-the-allowed-diagram-moves
  - lem-empty-cut-ball-births-erase-to-balanced-disk-slides
  - lem-balanced-multipointed-knot-diagrams-in-s-three-are-admissible
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and knot invariants"
      url: "https://arxiv.org/pdf/math/0209056"
      locator: "Section3.2, Proposition3.5, marked-knot move generation; the full relative function, field and disk-movie suppliers are supplied locally here"
    - title: "Manolescu, Ozsvath and Sarkar, A combinatorial description of knot Floer homology"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Section2, multipointed diagrams and actual basepoint-pair stabilization; the ordered single-knot local insertion is supplied by its proved supplier"
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Proposition2.2 and complete Lemma2.3–2.4 proofs, printed6–7, actually read; the marked empty-ball forest and actual field-event translations replace imported handle-calculus assertions"
---

## Statement

Assume Countable Choice. Let two balanced multipointed Heegaard diagrams be compatible with the same oriented knot $K\subset S^3$. Each has its actual embedded splitting, simultaneous trivial-arc systems and compression data, a genus-$h$ surface, $k\ge1$ ordered pairs $w_i,z_i$, and $m=h+k-1$ curves in each attaching system. The lower arcs run from $w_i$ to $z_i$ and the upper arcs from $z_i$ to $w_{i-1}$, with cyclic indices. The two diagrams may have different genera and different numbers of pairs. Include the full smooth input convention allowing tangential marked knot crossings and auxiliary proper compression-disk witnesses; no additional neatness hypothesis is imposed.

There is a finite comparison between them using curve isotopies and same-system handleslides avoiding all marks, genus-one stabilizations or destabilizations in knot-disjoint disks, and actual basepoint-pair stabilizations or destabilizations along the represented knot. The latter keep the genus fixed and change $k$ by one; their inverse configuration consists of surface disks bounded by $\alpha_0,\beta_0$ meeting twice and no other opposite-system curve, with their common bigon containing just the new $w_0$, the first disk outside the second containing just the new $z_0$, and the second outside the first containing the next old $z$-point in the cyclic pairing. Removing that configuration concatenates the adjacent actual trivial arcs. Thus no isolated marked knot component is added in an empty disk.

The comparison permits the explicit orientation-preserving diagram isomorphisms carrying the ordered marks, attaching systems and actual arc systems, and the fixed-splitting arc normalizations of the pointed-data definition, before or after its geometric moves. Every intermediate geometric diagram remains balanced with $m=h+k-1$, the same oriented knot, and the stated simultaneous bridge data. It is admissible in that definition's integral periodic-domain sense. The case $k=1$, including $h=0,m=0$, is included. This theorem establishes geometric move generation; it makes no assertion about analytic continuation maps or disk counts.

## Statement references

[[def-admissible-pointed-heegaard-floer-data]]

[[lem-mos-basepoint-pair-insertion-preserves-balanced-knot-data]]

## Facts & Assumptions

**Given:** The two actual balanced diagrams compatible with the same oriented knot, with the full smooth geometric input convention and Countable Choice.

[F1] The finite actual MOS insertion preserves the full balanced single-knot data with the displayed bigon configuration. Oriented knots with the same cyclic labelled mark order can be aligned by an ambient isotopy. ([[lem-mos-basepoint-pair-insertion-preserves-balanced-knot-data]], [[lem-cyclically-ordered-knot-marks-can-be-aligned-by-ambient-isotopy]])

[F2] Smooth bridge witnesses with ordinary or transverse-corner source boundary admit fixed-splitting knot normalization and genuine neat corner parametrizations. Simultaneous bridge witnesses can first be made disjoint from the compression disks by finite interior circle surgeries, keeping their whole boundaries fixed. Broad auxiliary proper compression disks can be replaced with the same boundary curves by neat witnesses having actual standard smooth cut balls and product face collars. Bridge half-disks can then be neatened without changing their actual arcs. ([[lem-smooth-bridge-witnesses-admit-neat-corner-parametrizations-after-normalization]], [[lem-proper-compression-disks-admit-neat-witnesses-with-standard-cut-balls]], [[lem-simultaneous-bridge-witnesses-can-avoid-a-compression-disk-system]], [[lem-bridge-half-disks-can-be-neatened-while-preserving-their-arcs]])

[F3] These finite neat compression/ball/bridge data give adapted lower and upper Morse endpoints, with exactly their prescribed stable and unstable compression disks up to explicit transport. They glue across the actual surface, and two resulting endpoints admit a common protected knot function and field germ. ([[lem-neatly-bridged-compression-data-admit-adapted-morse-endpoints]], [[lem-neat-marked-morse-endpoints-glue-across-a-heegaard-surface]], [[lem-adapted-knot-morse-endpoints-admit-a-common-protected-germ]])

[F4] Relative function paths protecting the extrema exist with finitely many simple folds and separated ordinary critical-value events. For these supplied functions the actual Countable Choice weak-field construction gives no index increase, finitely many isolated parameter-transverse same-index trajectories, and full no-same-index birth neighborhoods with their split product fold fields. The relative grouping keeps this field and protected knot germ and places the middle level between the index-one and index-two groups. ([[lem-relative-function-event-paths-preserve-fixed-extrema]], [[lem-cc-relative-descending-paths-have-finite-same-index-events]], [[lem-finite-weak-knot-morse-movies-admit-relative-middle-level-grouping]])

[F5] Regular grouped intervals give actual extended compression-disk systems, ball and bridge data and marked isotopies. An isolated same-index event gives an actual framed marked disk band sum. The three product fold types give respectively empty cut-ball refinements or, after explicit old-curve cleaning, a knot-disjoint genus stabilization. ([[lem-regular-grouped-knot-morse-data-give-balanced-diagram-isotopies]], [[lem-an-isolated-same-index-knot-morse-trajectory-gives-a-marked-disk-slide]], [[lem-grouped-simple-knot-morse-births-give-the-allowed-diagram-moves]])

[F6] Actual extended moves descend to finite balanced slides through rooted-forest reduction, independently of the chosen forests. Every balanced single-knot diagram in $S^3$ is automatically admissible. ([[lem-empty-cut-ball-births-erase-to-balanced-disk-slides]], [[lem-balanced-multipointed-knot-diagrams-in-s-three-are-admissible]])

[F7] The allowed geometric objects, diagram isomorphisms and fixed-splitting arc normalizations are precisely those of [[def-admissible-pointed-heegaard-floer-data]].

## Proof

**Given:** The two diagrams and assumptions in the Statement.

1.1 Equalize the number of ordered pairs by applying [F1]'s actual insertion finitely many times to the diagram with smaller $k$. Each insertion occurs along its existing knot, has the stated two-curve bigon and next-old-mark configuration, preserves the orientation and cyclic pairing, and raises each curve count by one while leaving the genus fixed. It can be reversed at the end. Now both diagrams have the same $k$. Their cyclic labelled order along the represented oriented knot is $w_i,z_i,w_{i-1},z_{i-1},\ldots$ in each diagram, by [F7]. Their compatibility with $K$ provides the oriented ambient knot isotopies. Apply [F1]'s alignment to carry their represented knots to one actual oriented knot with one common ordered mark set; carry each splitting, disk and arc system by the same map. These are the explicit allowed diagram isomorphisms. No isotopy of a fixed surface-knot pair changing a tangency is inferred. [F1, F7, given, construct]

2.1 On each transported diagram FIRST apply [F2]'s finite innermost-circle cleanup on both sides, keeping the entire supplied witness boundaries and boundary collars fixed. The original definition allows bridge interiors to meet the compression disks, so this cleanup is necessary before invoking the normalization supplier. It yields simultaneous bridge witnesses disjoint from the entire original compression family. Now apply [F2]'s normalization to these cleaned smooth witnesses. It gives a knot normalization in the FIXED splitting, fixing all marked points and keeping every open arc in its original handlebody, with simultaneous smooth witnesses, ending at transverse marked crossings. This is allowed by [F7], including when the original crossing was tangential. The surface, attaching curves and compression witnesses have not changed. The normalization was supported away from the compression disks, so its new simultaneous witnesses retain that already-established face avoidance. Replace the auxiliary compression disks by [F2]'s neat disks with exactly those attaching boundaries; its support may miss the actual arcs and bridge witnesses. Its explicit cut comparison and full smooth Schoenflies step give actual standard smooth ball parameters after finite corner rounding. Thus no unproved smoothing of an initial tangential cut corner is used. Use the bridge-neatening clause of [F2] on these balls, away from the disk faces. The resulting finite inputs meet every hypothesis of the endpoint construction, including the actual arc and face-collar data. [F2, F7, step 1.1, construct]

3.1 Apply [F3] separately to the two halves of each diagram. The lower function has exactly $k$ minima of value zero and $m$ index-one points below $1/2$, with stable disks realizing its actual lower system. The upper construction has exactly $k$ maxima of value one and $m$ index-two points above $1/2$, with the upper disks. Their knot halves are actual trajectories. The gluing supplier gives a global Morse function and field, with the original surface as level $1/2$. Its explicit regular collar holonomies may move the attaching circles, but give marked curve isotopies and permitted ambient transports, not a false pointwise identity. Choose distinct ordinary endpoint critical values using the finite one-at-a-time endpoint handle order. There is no same-index connecting orbit: its existence would make one of these actual compact stable lower disks, or dual upper disks, end at another same-index critical point instead of reaching the middle level. There is no index increase by the endpoint height groups; extreme outgoing or incoming spheres are empty. [F3, F5, step 2.1, construct]

4.1 First align the two final normalized knots and marks again by [F1], carrying all endpoint data. This is needed because the independent fixed-splitting normalizations in step2.1 may have chosen different actual knot representatives. Use [F3]'s common-germ construction for the two global endpoint pairs. Its ambient transports preserve the oriented knot and all marks and are permitted diagram isomorphisms. At its final descending-field blend shrink the common knot neighborhood to miss both finite compact transported lower stable-disk systems and upper unstable-disk systems. They are disjoint from compact $K$, so such a common neighborhood exists. The blend therefore retains these disks as actual stable/unstable disks: they remain invariant with their original local critical models, and uniqueness of trajectories identifies their full stable/unstable truncations. In particular it introduces no endpoint same-index orbit. The endpoint functions now agree with one protected function $F$ on a common knot tube and the fields agree with one protected field $X$ on a smaller tube. Its only tube critical points are the fixed $k$ index-zero and $k$ index-three points, at values zero and one; all other endpoint points are outside its closure. The actual endpoint attaching systems have changed only by the already allowed transports and isotopies. [F1, F3, F5, F7, step 1.1, step 3.1, construct]

5.1 Apply [F4]'s protected-extrema function-path construction. Its proof removes finitely many common quadratic balls first, so the relative region on which the generic-function argument is applied is genuinely critical-free; the fixed extrema themselves are restored unchanged. This gives a smooth stationary-ended function path fixed on one smaller tube, with the exact finite ordinary fold/value-event list and with every unprotected critical value strictly between zero and one. Apply its weak-field construction with the stationary endpoint fields from step4.1 and the common protected field. Its hypotheses of endpoint absence of nonpositive-drop trajectories and fixed extrema are now verified. It gives the actual descending path with finitely many parameter-transverse same-index events, no index increases and product fold fields, retaining a whole no-same-index neighborhood of each fold. Finally use [F4]'s relative grouping. This changes only functions, keeps that entire field path and its events, preserves the stationary endpoint functions and knot tube, and gives a middle level regular except at the finitely many index-$(1,2)$ folds. A birth block's whole function germ is shifted by one scalar, so its actual product field and compact crossing spheres are retained. [F4, step 3.1, step 4.1, construct]

6.1 Select disjoint small closed event intervals around the finitely many folds and same-index events, with regular endpoint slices, and finitely many closed regular intervals covering their complement. On every regular slice [F5] supplies the actual extended systems: cutting gives one protected arc in each occupied ball and possibly empty balls from unprotected zero or three points. The middle level is connected, both sides are handlebodies, and its genus and system counts satisfy the exact extended balance formulas. Choose a rooted forest on each side at each interval endpoint. Such forests exist even for $k=1$, by [F6]'s finite quotient-tree construction. Along a regular interval transport a chosen forest with its disks and use [F5] to obtain finitely many marked curve isotopies; if the prescribed end forest differs, [F6] supplies finite marked slides. No finiteness of the additional critical-value equalities introduced by grouping is required: in the absence of a fold or exceptional trajectory, these equalities do not affect the finite-time disk transport. [F4, F5, F6, step 5.1, construct]

7.1 On a same-index interval apply [F5]'s actual local translation. In dimension three its index is one or two, and its proof gives a proper-disk band sum, with its framing from the product critical block and event tube; the band misses the knot and every marked point. It is not merely a relation in homology. [F6] turns it into finite balanced marked slides and isotopies for the chosen endpoint forests. On a birth interval apply the product-birth translation in [F5]. For indices $(0,1)$ or $(2,3)$ this is one cut-ball refinement with an empty companion, erased by [F6]. For indices $(1,2)$ its actual new stable/unstable circles meet once. The supplier explicitly slides any old opposite-system intersections away, isolates their genuine knot-disjoint stabilization ball, and compares deletion of its framed handles with a critical-free scalar replacement. Thus it supplies precisely one permitted genus stabilization or destabilization, with only finite balanced slides and isotopies in addition. Empty births have inserted no marks. This treats every exceptional interval by an actual based disk move rather than assuming a relative Cerf citation already gives it. [F5, F6, step 5.1, step 6.1, construct]

8.1 Concatenate the finite interval move sequences in their parameter order. At their common regular endpoints adjust forest choices by [F6] when needed. At the original endpoints no unprotected minima or maxima exist, so there are no empty vertices to delete; the extracted systems are exactly those of steps3.1–4.1 up to their marked isotopies. Undo the explicit endpoint diagram transports and fixed-splitting normalizations, then undo the finite pair insertions of step1.1 on the corresponding side. Every listed intermediate diagram has the correct one-$w$, one-$z$ component condition, actual simultaneous boundary-parallel arcs, and $m=h+k-1$, by the local suppliers and forest balance. All represent the same oriented knot. By [F6] each is automatically admissible, with no extra winding. No chosen-ball leaf argument for $k\ge2$ was used when $k=1$; the genus-zero, empty-system endpoints are allowed by the endpoint and forest constructions. All concatenations and extra selections are finite. The only nonfinite background choice is the explicitly stated Countable Choice in the proved suppliers. This proves the full geometric comparison and its boundary cases without an analytic invariance claim. [F1, F2, F3, F4, F5, F6, F7, step 1.1, step 2.1, step 3.1, step 4.1, step 6.1, step 7.1, construct] ∎
