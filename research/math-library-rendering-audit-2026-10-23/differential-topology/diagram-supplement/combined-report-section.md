# Differential Topology diagram-candidate supplement

Integrated with the primary all-item visual review. Candidates are source-supported possibilities; they remain uncertain/editorial pending independent adjudication.

## Candidate 1: `cex-a-naive-signed-count-without-the-quotient-orientation-can-fail-d-squared-zero`

- Review lanes: 10.
- Diagram kind: TikZ schematic of four interval components and their broken-trajectory endpoint labels..
- Why considered: The pairing of eight endpoints into four intervals and the coherent sign cancellation are central to the counterexample.
- Concrete content/check: Show four separate closed intervals; label endpoints by the trajectory pair through b or c and show coherent endpoint products opposite within each interval. Separately annotate the all-plus algebra. Do not imply a specific torus trajectory picture.
- Frozen source lines: 45, 47, 51, 59, 61, 63, 65.
- Frozen source SHA-256: `50ff4213c7fa27c655fe1b39b9e167d730fcd35203e032ca0ebb96465b19736f`.
- Local screenshot evidence: `cex-a-naive-signed-count-without-the-quotient-orientation-can-fail-d-squared-zero--01.png` (`1b1e08022e72fd3160731371905b105e577fabbec165adbbb7c8c44e19b1ebb6`), `cex-a-naive-signed-count-without-the-quotient-orientation-can-fail-d-squared-zero--02.png` (`30ac6692a7517624a5b463a8d4d4849eac4fd53218a48fd3854b50f6118c1c6a`).

## Candidate 2: `cex-adjacent-index-handles-with-zero-intersection-do-not-cancel`

- Review lanes: 05.
- Diagram kind: TikZ schematic of a 1/2-handle attachment on a solid torus boundary.
- Why considered: The counterexample hinges on a spatial placement condition (a contractible attaching circle whose bounding disk avoids the belt circle) and on the distinction between algebraic zero and geometric cancellation.
- Concrete content/check: Show W0 and its 1-handle as a solid torus; mark its boundary torus, the belt meridian {p}×S1, a small contractible γ bounding a disk disjoint from that meridian, then the 2-handle attachment. Label the handle-matrix entry 0 and separately annotate π1 after attachment as Z. Avoid suggesting that γ is the meridian.
- Frozen source lines: 30, 50, 52, 56.
- Frozen source SHA-256: `27c2b5f888d755baf2a80377c0c175ed14bd6a4b8f032f4a58a954487cc9d542`.
- Local screenshot evidence: `cex-adjacent-index-handles-with-zero-intersection-do-not-cancel--01.png` (`06b9ae3d26726e24fdbdedd94f8a8c6d3ca1eb1302701e6b73de9f76d26fb97b`), `cex-adjacent-index-handles-with-zero-intersection-do-not-cancel--02.png` (`1d42e57ba91e32d48164138603b1a7862fe4e9447258cbd590f006c0f9830c6d`).

## Candidate 3: `cex-geometric-cardinality-is-not-homotopy-invariant`

- Review lanes: 09.
- Diagram kind: optional-family-intersection-diagram.
- Why considered: The source supplies exact circle, axis, parameter range, intersection counts, and determinant sign. A three-panel picture would make the tangency where raw cardinality changes visible.
- Concrete content/check: Draw the unit circle centered at (0,s) against the x-axis for representative s=0, s=1, s=2. Mark the two transverse crossings at s=0 with opposite signs, the single tangency at s=1, and no crossings at s=2.
- Frozen source lines: 47, 55, 57, 59.
- Frozen source SHA-256: `555710192b9295db5b4ad0420e810c331d2fb36a2032e0ba5354b63901210d1b`.
- Local screenshot evidence: `cex-geometric-cardinality-is-not-homotopy-invariant--01.png` (`b7774d76a4cd6bc92c817d4836494a4214c2c60e3c96483b5f99eeef2ad33c35`), `cex-geometric-cardinality-is-not-homotopy-invariant--02.png` (`0780617c5f0aa0003a98dd8fd8bbe6e225e66198b58f50ec56cec9145fadf8fd`).

## Candidate 4: `cex-same-sign-intersection-points-cannot-be-whitney-cancelled-orientedly`

- Review lanes: 09.
- Diagram kind: optional-torus-intersection-diagram.
- Why considered: The claim is about two geometric intersection points, parity, and their orientation signs; a torus fundamental-domain drawing would expose all three at a glance.
- Concrete content/check: Draw a torus fundamental square with opposite edges identified, A as the horizontal coordinate circle and B as the slope-two graph. Mark the two intersections and show the ordered tangent frame has positive determinant at both.
- Frozen source lines: 54, 58, 60.
- Frozen source SHA-256: `eb37a6240fffa7af04ce4e59b480f207644b2f9596f91b39f842e746d3e7b2b6`.
- Local screenshot evidence: `cex-same-sign-intersection-points-cannot-be-whitney-cancelled-orientedly--01.png` (`d5add3634512c4a036ccaa52b80e0c1cbdf620c684432760f145d69ac378c87b`).

## Candidate 5: `cex-symmetric-torus-height-flow-is-not-morse-smale`

- Review lanes: 10.
- Diagram kind: TikZ torus/phase schematic or local annular chart..
- Why considered: The shared stable and unstable tangent line is the geometric failure of transversality.
- Concrete content/check: Mark inner equator, both saddles, flow direction, and coincident stable/unstable arcs. Keep open orbit interval distinct from critical endpoints; do not suggest the full torus is depicted.
- Frozen source lines: 27, 29, 41, 43, 45, 47.
- Frozen source SHA-256: `da2da3dc9a2d0e3bb89d72692823d9a832ae29e13f3ac7b93cd34981babe8863`.
- Local screenshot evidence: `cex-symmetric-torus-height-flow-is-not-morse-smale--01.png` (`54d1630eee24d18c586040e683775ced27b10fc15d59d800e05c835b1d2c113a`).

## Candidate 6: `def-self-transverse-immersion-and-double-point-locus`

- Review lanes: 07.
- Diagram kind: finite-set map / branch-pair versus collision-image schematic.
- Why considered: The definition carefully distinguishes the unordered branch-pair set D(f) from its collision image Σ(f), specifically warning that a triple image produces three branch-pair elements but only one image point. This distinction is the main subtlety of the definition.
- Concrete content/check: Use three local source sheets x1,x2,x3 mapping to a common r; show the three vertices {x1,x2},{x1,x3},{x2,x3} in D(f) each mapping to the single r in Σ(f). A second two-sheet example can indicate the bijective case. Label this a set-level schematic, not a transversality proof; avoid assigning a single sign to the triple image.
- Frozen source lines: 38, 39, 40, 41, 42, 44, 46.
- Frozen source SHA-256: `55073ed3f90ac8c835cc01d2cef45d72eaf8de9306cf4863107223ac79a84b0f`.
- Local screenshot evidence: `def-self-transverse-immersion-and-double-point-locus--01.png` (`10034b176f0795b687cb44809cad140638136e309f8f55357623bfbc736dea0f`).

## Candidate 7: `def-whitney-circle-for-a-pair-of-intersection-points`

- Review lanes: 06.
- Diagram kind: geometric schematic.
- Why considered: The definition is explicitly a loop assembled from two arcs on different sheets and the no-extra-intersection condition is load-bearing for the later Whitney disk use. A compact diagram can distinguish the chosen arcs from the sheets and make the corner condition immediate; the definition and proof remain complete without it.
- Concrete content/check: Draw two transverse complementary sheets A and B meeting at p and q. Show a chosen embedded arc α in A from p to q and a chosen embedded arc β in B from q back to p; their union is the Whitney circle γ. Mark only p and q as intersections of the sheets on the displayed arcs, and show independent branch tangent directions at both corners.
- Frozen source lines: 35.
- Frozen source SHA-256: `7152e07b37670caea0391946cf2795d0345bb054161591fd2ea9802b4b510e86`.
- Local screenshot evidence: `def-whitney-circle-for-a-pair-of-intersection-points--01.png` (`bf905959be51d8fd7cdcd1b336efb6a79cf59a2483ee9036c92fac13e0b6aa4b`).

## Candidate 8: `ex-a-boy-surface-immersion-of-real-projective-two-space`

- Review lanes: 08.
- Diagram kind: optional-immersion-and-quotient-schematic.
- Why considered: The example gives an explicit disk model of the RP^2 quotient, antipodal identification on the boundary, and three interior poles whose immersion images coincide at 0. A compact schematic can make those domain identifications and the triple image point easier to track alongside the long parametrization.
- Concrete content/check: Show a disk as a fundamental domain with antipodally paired boundary points, mark the three distinct interior pole points, and indicate that each extends to a distinct projective-plane point mapped to the same target point 0. Keep the map label beta: RP^2 -> R^3 and distinguish the domain poles from the single image point; do not suggest a global normal side.
- Frozen source lines: 36, 47, 57, 58, 83.
- Frozen source SHA-256: `a4e9b34bc8835b1d3c3b0d8c300ec210917a10dd5deeee6275e2e914d963d8b9`.
- Local screenshot evidence: `ex-a-boy-surface-immersion-of-real-projective-two-space--01.png` (`fd54e70533bc0ecc7435a0edc8b4eb301f406ce14ec6668f0a64ae653824e753`).

## Candidate 9: `ex-a-local-whitney-move-in-euclidean-space`

- Review lanes: 05.
- Diagram kind: TikZ local curve-and-disk diagram.
- Why considered: The example is explicitly geometric and its central conclusion is the removal of a cancelling pair by sweeping an arc across the disk.
- Concrete content/check: Draw the u-axis, parabola v=u²−1, crossings at u=−1 and u=1 labelled −/+ using the chosen orientation, the bounded disk D, a supported isotopy arrow moving the axis arc across D, and the final disjoint arc. State this is the R2 local model; do not draw the general normal factors as a simultaneous action.
- Frozen source lines: 43, 60, 64.
- Frozen source SHA-256: `45918233a9e97070cf0cff01fb35c402e4756e2e30d9bf2b2da6047d0cd7afde`.
- Local screenshot evidence: `ex-a-local-whitney-move-in-euclidean-space--01.png` (`9ff20f0ec67308e7be8dad25b8c30385deeef9b768dbae97536282b6188f5892`).

## Candidate 10: `ex-broken-trajectories-in-an-index-two-torus-moduli-space`

- Review lanes: 05.
- Diagram kind: TikZ torus Morse–Smale separatrix and compactified-moduli diagram.
- Why considered: The example’s central assertion concerns actual trajectory counts and the boundary structure of a one-dimensional moduli space, which a schematic can make auditable.
- Concrete content/check: Use a square fundamental domain with opposite edges identified; place a=(0,0), b=(π,0), c=(0,π), d=(π,π), label indices 2,1,1,0, and draw the two complementary coordinate arcs for each adjacent pair. Beside it draw four interval components for M(a,d), marking both ends as broken via b or c for a total of eight endpoints. Keep trajectories unoriented modulo time translation and distinguish torus edge identifications.
- Frozen source lines: 33, 55.
- Frozen source SHA-256: `56a8650402860354e8eb9e1ab81d90441e04da7b50ab0b7cdf1f762818a54e32`.
- Local screenshot evidence: `ex-broken-trajectories-in-an-index-two-torus-moduli-space--01.png` (`7149b1b90baaf1d24665712afc51b3af3796153ef1ded516098d3e34492f76e5`), `ex-broken-trajectories-in-an-index-two-torus-moduli-space--02.png` (`d1d5c2e9467007cc413267d48aa4f0aff15e13c879a2ddfe190de5925cb90cd8`).

## Candidate 11: `ex-cancelling-one-two-handle-pair-on-a-surface`

- Review lanes: 07.
- Diagram kind: surface handle / attaching-belt intersection diagram.
- Why considered: The example is explicitly organized around the band turning a disk into an annulus, the belt S^0 meeting its two boundary circles, and a 2-handle attached to one circle to create exactly one intersection. The source cites handle figures for this setup.
- Concrete content/check: Draw D^2 with the two attaching intervals, the oriented band and resulting annulus, mark the two belt points (one on each boundary circle), then highlight the chosen attaching circle and its unique belt intersection. Use arrows or orientation marks only if the induced disk orientation is unambiguous; label the mod-2 count 1 and the endpoint case n=2,k=1.
- Frozen source lines: 30, 34, 36, 38, 46, 48.
- Frozen source SHA-256: `be0b46c313b1f477b25a9b018af2b7d5f32d262c644f5f294209d3f837077ec6`.
- Local screenshot evidence: `ex-cancelling-one-two-handle-pair-on-a-surface--01.png` (`a864485d636adacf5aac05c84d2e756312c715ca5e963c9956731e5779ee28fc`), `ex-cancelling-one-two-handle-pair-on-a-surface--02.png` (`fd1588b93066fb53b068e06d773db2a923e8becc2a227415c4cbfdc18e32f57c`).

## Candidate 12: `ex-flat-bundle-foliation-from-a-linear-representation`

- Review lanes: 03.
- Diagram kind: Optional TikZ suspension quotient and holonomy-sign schematic.
- Why considered: The item defines the quotient action (t,v)~(t+k,A^k v), the leaf loop t↦[(t,v)], and the forward holonomy germ A^{-1}; its Facts distinguish the representation convention k↦germ(A^k) from forward-path transport k↦germ(A^{-k}). A small map would make the inverse/sign convention directly checkable.
- Concrete content/check: Show R×R^n with the Z-action (t,v)↦(t+1,Av), the quotient projection to S^1, a fixed vector Av=v, and the lifted path (t,v), 0≤t≤1, whose endpoint [1,v]=[0,A^{-1}v]. Label the resulting forward holonomy germ A^{-1}; separately mark the representation convention k↦A^k.
- Frozen source lines: 39, 50, 55, 57, 72, 76.
- Frozen source SHA-256: `fb8bea8d1e90a2d7752510b0406de174b35b7853566144db7c9581afd7ef1a07`.
- Local screenshot evidence: `ex-flat-bundle-foliation-from-a-linear-representation--01.png` (`65449ec1145f9075d62ef49d71e1b2f9b02c3e6194d3f7deddd3fb3122f35ec0`), `ex-flat-bundle-foliation-from-a-linear-representation--02.png` (`3dcda04fa83c7de6352d58c2db372f85c02a0d42c0814b7b7aed7a6a05110111`).

## Candidate 13: `ex-negative-gradient-lines-for-a-quadratic-morse-function`

- Review lanes: 07.
- Diagram kind: Morse saddle phase portrait.
- Why considered: The source gives the linear flow equations and identifies the forward-stable disk {u=0} and backward-unstable disk {v=0}; a phase portrait directly depicts those invariant axes and flow direction.
- Concrete content/check: In the two-dimensional case r=s=1, draw the saddle at the origin, arrows expanding along u and contracting along v, mark {u=0} as forward-stable and {v=0} as backward-unstable. State it is the r=s=1 slice of the general product flow.
- Frozen source lines: 27, 28, 30, 36.
- Frozen source SHA-256: `e2010d8dc0e3459f5b34f2d28e705a0329a7e3988bbe7e6d8686beb31fa87889`.
- Local screenshot evidence: `ex-negative-gradient-lines-for-a-quadratic-morse-function--01.png` (`a68f72c3178701a114d98ec234df901ee7751d50b29deece9eebb48f8d395a0a`).

## Candidate 14: `ex-oppositely-signed-intersections-of-two-three-manifolds-in-a-simply-connected-six-manifold`

- Review lanes: 10.
- Diagram kind: Local finger-move schematic with oriented intersection signs..
- Why considered: A picture can connect the explicit graph-cap construction to the opposite-sign pair and subsequent Whitney cancellation.
- Concrete content/check: Show A as reference sheet and B as pushed cap crossing twice; label p,q and opposite signs. Mention Whitney circle separately. Do not portray the 3-spheres as literal 2D surfaces or omit simple-connectivity/stable-range hypotheses for cancellation.
- Frozen source lines: 47, 66, 68, 70.
- Frozen source SHA-256: `40823b6cc398dc529a8dea7de159d5276169aa3257104778ad6dc84f60c9e062`.
- Local screenshot evidence: `ex-oppositely-signed-intersections-of-two-three-manifolds-in-a-simply-connected-six-manifold--01.png` (`05a98020b31133c178a781b1a1d635fb2c9d95d03fe5b9cfb2fef0c5fa56ab6e`), `ex-oppositely-signed-intersections-of-two-three-manifolds-in-a-simply-connected-six-manifold--02.png` (`2235802664fd297aef26c36d4a0a8a50b7bf0e8bc4a45753479901887b92b28f`).

## Candidate 15: `ex-surgery-on-s-p-times-s-q-produces-a-sphere-in-the-standard-framing`

- Review lanes: 06.
- Diagram kind: surgery decomposition schematic.
- Why considered: The example contrasts two different p-surgeries and their inverse dual surgeries, with a specific product framing. A two-panel decomposition would prevent the easily confused conclusions from being read as one operation. The algebraic proof stands without a figure.
- Concrete content/check: Show M=S^p×S^q with embedded core S^p×{y0} and its product-framed tube S^p×D^q. Mark removal of S^p×int(D^q) and replacement by D^{p+1}×S^{q−1} along the shared S^p×S^{q−1}; identify the resulting boundary decomposition with ∂(D^{p+1}×D^q)≅S^m. Keep the separate standard framed surgery on S^m, whose result is S^{p+1}×S^{q−1}, in a distinct panel.
- Frozen source lines: 40.
- Frozen source SHA-256: `a7821ffabd9e1bc106b2512470b46aa904f1b4fb4b0ad1d1db312d7512165851`.
- Local screenshot evidence: `ex-surgery-on-s-p-times-s-q-produces-a-sphere-in-the-standard-framing--01.png` (`9c537c82404a3f26d6f1997317bad61dec3e6b0a466b63b8e435a17a0dcea038`), `ex-surgery-on-s-p-times-s-q-produces-a-sphere-in-the-standard-framing--02.png` (`94412683597506ad1261174bcf992ef30641cdaf3839f93b3738f7d1b043c9f4`).

## Candidate 16: `ex-the-pair-of-pants-is-a-cobordism-realizing-addition-of-circles`

- Review lanes: 01.
- Diagram kind: planar cobordism/orientation diagram.
- Why considered: A planar sketch would make the three boundary components and the outward-normal-first sign convention directly checkable: C0 is counterclockwise, while C1 and C2 are clockwise as induced boundary orientations.
- Concrete content/check: A disk with two removed disks; label outer C0 and inner C1,C2; orient outer boundary counterclockwise and both inner boundaries clockwise; mark C1 sqcup C2 incoming and C0 outgoing.
- Frozen source lines: 62, 70, 82, 92, 94.
- Frozen source SHA-256: `afd3e6c9d4f5359a5d4158d07257e94f6dbd95bf980dfc43fc50fe713075b3a9`.
- Local screenshot evidence: `ex-the-pair-of-pants-is-a-cobordism-realizing-addition-of-circles--01.png` (`ec2b8d98b350780c2a702c000e94c469ce61d276fa2917531d6407dd10096f45`), `ex-the-pair-of-pants-is-a-cobordism-realizing-addition-of-circles--02.png` (`82add764cdec4943219f29af7ae5456b1d4acda4a2e053ffbb546e8e8e8ff425`), `ex-the-pair-of-pants-is-a-cobordism-realizing-addition-of-circles--03.png` (`d8ea1675ac350cf28add695ed9710ce94d4ec4770907b3eb9de4a2abb1098e73`).

## Candidate 17: `ex-thom-space-of-the-mobius-line-bundle`

- Review lanes: 05.
- Diagram kind: TikZ quotient-space / bundle schematic.
- Why considered: The topology is a concrete quotient with one twist and one collapsed subspace; a small schematic could make the source’s projective-plane identification easier to follow.
- Concrete content/check: Show a rectangle with vertical sides identified with reversed fiber coordinate, label its Möbius-band interior D(L) and its single boundary S(L), collapse the boundary to the basepoint, and juxtapose RP2 represented as a disk with antipodal boundary identification and the removed complementary disk. Distinguish the disk collapsed from the Möbius-band core.
- Frozen source lines: 37, 49, 51.
- Frozen source SHA-256: `9bd16616079b8178c918e577978b0d55a7a29bc9204b2f5627979b57fc53b291`.
- Local screenshot evidence: `ex-thom-space-of-the-mobius-line-bundle--01.png` (`eb3741fe66ab9f652380af46a8db4eff144e76c8e37b41d1fb79155345df6a9a`).

## Candidate 18: `lem-algebraic-cancellation-does-not-yet-give-geometric-cancellation`

- Review lanes: 07.
- Diagram kind: finger-move / signed-intersection schematic.
- Why considered: The item contrasts a unit algebraic intersection number with three actual intersections, then constructs the extra opposite-sign pair by a finger move. This is a concrete geometric configuration whose central distinction is hard to see from the count alone.
- Concrete content/check: Show N as a schematic local 3D picture or clearly labelled projection of A0 and B={p}×S1 with one + intersection; show the disk finger crossing B and resulting three points labelled +,+,−. Indicate the original point remains + and the two new points have opposite signs. Mark as schematic and do not imply the diagram proves existence or the inverse-isotopy claim.
- Frozen source lines: 34, 38, 54, 56, 58, 60.
- Frozen source SHA-256: `b1516dc0f8748bda3521f8915c4af16184692e2cb15d1121ffe3cc61205e7c66`.
- Local screenshot evidence: `lem-algebraic-cancellation-does-not-yet-give-geometric-cancellation--01.png` (`07f1d1bdf8d4bfd86dcf087b0e2143840cdac61379bb00f8caa88a4c14f2edac`), `lem-algebraic-cancellation-does-not-yet-give-geometric-cancellation--02.png` (`c19bc3c4087b3ef050bb8a8ff39cfcdf6ffcf911f8953ba47fd90d8719f17a4e`).

## Candidate 19: `lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle`

- Review lanes: 05.
- Diagram kind: TikZ torus fundamental-domain diagram with Whitney circle and labels.
- Why considered: The example separates two facts that are easy to conflate: the intersection signs cancel, yet the chosen Whitney circle carries a nontrivial π1 class.
- Concrete content/check: Draw the square model of T2 with opposite-edge identifications, horizontal A0 and sinusoidal B0, label p and q and their +/− signs, then color α along the first half of A0 and β along the second half of B0. Mark γ’s one horizontal winding and the map pr:T2→S1 detecting it; annotate g(q)=g(p)[γ] under the stated path convention.
- Frozen source lines: 53, 79, 81.
- Frozen source SHA-256: `6ed44ed174a68619f70b4e95054dde90e94df4fe00cc08a4e664b1ccd48ac51a`.
- Local screenshot evidence: `lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle--01.png` (`9cd50a626cb2446554ff349f91fa9a5b4dead0d49270037ac6480d17f25d992a`), `lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle--02.png` (`826e0df2c4e3dd6ccc4a9e375b6dbea5057f796e53b7f056d0e7cf28f2a243c5`), `lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle--03.png` (`52ecaae2d57a6cb6b30b9aafc8a8a5830bb767ab4e271a27fac827c56ab551a1`).

## Candidate 20: `lem-one-quadrant-homoclinic-disk-has-one-more-interior-center-than-saddle`

- Review lanes: 10.
- Diagram kind: Two-panel local saddle and homoclinic-disk schematic..
- Why considered: One-sector occupancy, the cut arc, boundary orientation and index count are key geometric steps.
- Concrete content/check: Panel one: axes xy=0, field direction, occupied quadrant x,y≥0, cut arc and endpoint order. Panel two: resulting positively oriented loop, interior centers/saddles, q excluded, and degree sum +1.
- Frozen source lines: 32, 35, 37, 46, 48, 58, 60, 62, 64.
- Frozen source SHA-256: `217574465f27fec01b3f2017efccd5b61a2239e3107930ef25761304c04104da`.
- Local screenshot evidence: `lem-one-quadrant-homoclinic-disk-has-one-more-interior-center-than-saddle--01.png` (`969dd4823aadb7bffc8f4277ae1294d5dc4af396e6ec692b11e4663453fed5cd`), `lem-one-quadrant-homoclinic-disk-has-one-more-interior-center-than-saddle--02.png` (`cf7b6db961f39a9367b25a203e0609a0cf5a3ad32b582a24e786c54f7983d110`).

## Candidate 21: `prop-mapping-torus-foliations-realize-global-reeb-stable-examples`

- Review lanes: 06.
- Diagram kind: quotient and monodromy schematic.
- Why considered: The quotient convention fixes an inverse in the seam and first-return map; a schematic helps readers keep the foliation direction and inverse monodromy straight. All claims are explicit in the source, and the diagram is optional.
- Concrete content/check: Depict the fundamental domain L×[0,1] with horizontal slices as leaves, the t-direction transverse, projection to S^1, and seam identification (x,1)∼(f^{−1}(x),0). Mark the first-return map on the fibre as f^{−1} under the stated action n·(x,t)=(f^n(x),t+n).
- Frozen source lines: 56.
- Frozen source SHA-256: `e12f96e6dd2e265a0ba4c857e8150ee463ac28ca4c04683182fc92af66bb318b`.
- Local screenshot evidence: `prop-mapping-torus-foliations-realize-global-reeb-stable-examples--01.png` (`5eb6579690c4502d9ec38e5a9c226f61802f3c7a45839869d78a5428236e9a93`), `prop-mapping-torus-foliations-realize-global-reeb-stable-examples--02.png` (`259378c94912c2cae4e684b995afed4ace2fd386e7a433eac45114f6b2fbcdca`), `prop-mapping-torus-foliations-realize-global-reeb-stable-examples--03.png` (`a565fe4698a946495ba989c4441a39d9f175229f7b3abf05ccb30cebea267709`).

## Candidate 22: `prop-two-map-intersection-as-a-diagonal-preimage`

- Review lanes: 02.
- Diagram kind: optional-intersection-as-diagonal-diagram.
- Why considered: This is a geometric equivalence of two transversality tests and their coincidence locus; a compact diagram makes the product map and diagonal preimage immediately visible.
- Concrete content/check: Show X×Z --f×g--> M×M with Δ_M⊂M×M, label the pulled-back locus X×_M Z=(f×g)⁻¹(Δ_M)={(a,b):f(a)=g(b)}; optionally indicate the diagonal inclusion y↦(y,y). Keep the stated local sign factors in prose.
- Frozen source lines: 33, 39, 41, 43, 45, 53, 55.
- Frozen source SHA-256: `f3c36c6d623a7c4f6bc97ceb475bdb4a7fca006aa0f8fc0bb4c6517f07156fb9`.
- Local screenshot evidence: `prop-two-map-intersection-as-a-diagonal-preimage--01.png` (`6164db454b7a5438846f4e6e38f1d3e68848e3bd02afe900a4cbda6586119afa`), `prop-two-map-intersection-as-a-diagonal-preimage--02.png` (`01f8fd90376e4ec0265e425884de49b816f8002e3cf0c7c65ab58bc720d7984f`).

## Candidate 23: `thm-continuation-trajectories-are-compact-up-to-breaking`

- Review lanes: 08.
- Diagram kind: optional-one-break-boundary-schematic.
- Why considered: The theorem identifies the compactified continuation space, its unbroken open dense locus, and the two possible once-broken boundary product types when the index drop is one. A small moduli-space boundary schematic can connect these set-theoretic formulas.
- Concrete content/check: Draw an unbroken continuation from p to q approaching either a negative-end break p -> a followed by a continuation a -> q, or a continuation p -> b followed by a positive-end break b -> q; label ind(a)=ind(q), ind(b)=ind(p), the fixed middle window, and the one neck coordinate tending to zero at the boundary. Preserve the two distinct end-break types and avoid implying other boundary strata at index drop one.
- Frozen source lines: 41, 49, 52, 63.
- Frozen source SHA-256: `26ba3be9eee61ba90f017880da1d2173d67876cc394e512eb286fdc971577b1e`.
- Local screenshot evidence: `thm-continuation-trajectories-are-compact-up-to-breaking--01.png` (`4a5b200ce180d14dee8595b444d8e67033378e53fe539b00ed146f89be1a4440`).

## Candidate 24: `thm-handle-cancellation`

- Review lanes: 02.
- Diagram kind: optional-handle-cancellation-schematic.
- Why considered: The theorem is organized around a geometric one-point intersection criterion and local cancellation. A labeled schematic can help readers see which attaching and belt spheres intersect and what is removed.
- Concrete content/check: Use a clearly schematic middle-boundary cross-section: the attaching sphere of the (k+1)-handle intersects the belt sphere {0}×S^{n−k−1} of the k-handle in one transverse point; show the complementary pair filling a ball and the unchanged incoming boundary ∂₀W. Label dimensions and the relative-to-∂₀W conclusion; do not imply a general low-dimensional picture or any extra sign rule.
- Frozen source lines: 30, 34, 36, 38, 42.
- Frozen source SHA-256: `d100426e62bb29b2817882ffb777c9c5e6aa3c552366f38e0913ee93e091ab7c`.
- Local screenshot evidence: `thm-handle-cancellation--01.png` (`88da572f7a48ca469545178e54a36b39ea61edfff5c4b741c4d9eb4fe700a0e1`), `thm-handle-cancellation--02.png` (`f77d53bffd1f042cd701df40fedaf693d6a78e1441cde8178d473600e0fe802b`).

## Candidate 25: `thm-pontryagin-thom-correspondence-in-fixed-codimension`

- Review lanes: 02.
- Diagram kind: optional-pontryagin-thom-correspondence-diagram.
- Why considered: The theorem asserts two inverse geometric constructions. A correspondence diagram can expose their direction and the two composite identities at a glance.
- Concrete content/check: Show framed submanifold (N,φ) ↦ collapse/Thom map f_(N,φ):Sⁿ→Sᵏ and smooth map f:Sⁿ→Sᵏ ↦ framed regular preimage f⁻¹(y); annotate that the collapse of that preimage is homotopic to f and that the centre preimage of the collapse recovers (N,φ). Include n=k as a zero-dimensional/empty-preimage case if shown.
- Frozen source lines: 50, 55, 60, 63, 70, 80, 88, 90, 92, 94, 96.
- Frozen source SHA-256: `7114e50be31b8d8712e5173b402f59eba9ef368b49886d254337d9233ea329f6`.
- Local screenshot evidence: `thm-pontryagin-thom-correspondence-in-fixed-codimension--01.png` (`8b7f6d59a2023f8eb87cbe974ceffa77227fb2f6af0e4e4de2c1457e9d4ba8fb`), `thm-pontryagin-thom-correspondence-in-fixed-codimension--02.png` (`686c208d04cc574aef45af4f0a895b82ebb9b5c67f19d46e74064c59180d1881`), `thm-pontryagin-thom-correspondence-in-fixed-codimension--03.png` (`6a3105bdb0f9c59f6f35cc0a62504b3abe8d02a9596bfb66cfb8280a9987405b`).
