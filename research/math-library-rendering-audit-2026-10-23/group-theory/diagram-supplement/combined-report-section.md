# Group Theory diagram-candidate supplement

Integrated with the primary all-item review. These source-supported candidates remain optional/uncertain until independent adjudication; positive existing-diagram checks are listed separately.

## Candidate 1: `cex-the-quotient-of-a-tree-can-have-cycles`

- Review lanes: 10.
- Diagram kind: potential TikZ quotient graph illustration.
- Why considered: The counterexample’s key distinction is that a tree quotient by the translation subgroup has a cycle; its explicit residue-class calculation maps directly to a compact source-supported picture.
- Concrete content/check: Show the bi-infinite simplicial line with translation g(n)=n+3, then the quotient’s three vertex classes 0,1,2 mod 3 and the three edge-orbits joining them cyclically. Label edge direction only if the oriented-graph convention is retained; avoid depicting the quotient as a tree.
- Source lines: 46, 48.
- Frozen source SHA-256: `ef5aebc86515a7e8b72b3aa44067b0565e130f162b3bad2e810c04be131e66c8`.
- Local screenshots: `cex-the-quotient-of-a-tree-can-have-cycles--01.png` (`6cfeb54b5eca25f05cdbd14d53b9600f6973c3cad6c25a0aa4060fc8f8b9b935`).

## Candidate 2: `def-labeled-schreier-coset-graph`

- Review lanes: 05.
- Diagram kind: optional-labeled-coset-graph.
- Why considered: This definition names the graph's vertex, basepoint, oriented generator edges and inverse traversal rule. A small correctly labeled example can make the right-coset convention and path endpoint formula concrete.
- Concrete content/check: For the rank-one free group F(a) and subgroup H=<a²>, draw the two right cosets H and Ha, with basepoint H and directed a-labeled edges H→Ha and Ha→H. Mark backward traversal as a^{-1} and verify the path endpoint rule against right multiplication. The subgroup has index two, so these are exactly the two vertices.
- Source lines: 32, 44.
- Frozen source SHA-256: `947d82f89e14dc3b6024e458d0f6e97bf558d12eb2b20d51a8f2d23ec7f93052`.
- Local screenshots: `def-labeled-schreier-coset-graph--01.png` (`7199066f891ab2ec27cb3c44818a93f7b4f24d340af8c9be82a4b4f5d626240b`).

## Candidate 3: `ex-a-schreier-coset-graph-and-its-tree-basis`

- Review lanes: 09.
- Diagram kind: potentially useful missing Schreier graph diagram.
- Why considered: The item gives an explicit finite four-coset Schreier graph and singles out a rooted spanning tree whose five remaining positive edges produce a free basis. A compact labeled graph could make the coset transitions and tree/non-tree distinction easier to verify, but the current prose and equations already specify them, so this is not a confirmed omission.
- Concrete content/check: Vertices H, Ha, Hb, Hab. Draw all eight positive-letter transitions: a sends H→Ha, Ha→H, Hb→Hab, Hab→Hb; b sends H→Hb, Hb→H, Ha→Hab, Hab→Ha. Highlight the rooted spanning tree H→Ha (a), H→Hb (b), Ha→Hab (b). Distinguish the five non-tree positive edges and annotate their Schreier generators a², b², ab²a⁻¹, abab⁻¹, bab⁻¹a⁻¹. Keep the right-coset convention explicit; parallel oppositely directed positive-letter edges are distinct edges.
- Source lines: 27, 36, 40, 56, 58.
- Frozen source SHA-256: `eae01a7ec2ab77672a5a9149408723a193e4d5e5dde56ed1e79c9f01b89aacf9`.
- Local screenshots: `ex-a-schreier-coset-graph-and-its-tree-basis--01.png` (`ee5e1ec5455bd47ac023c2921caf77f7e33257b2c61b16a620fc106ca26efec1`).

## Candidate 4: `ex-bass-serre-tree-of-an-amalgamated-free-product`

- Review lanes: 10.
- Diagram kind: potential TikZ coset-incidence schematic.
- Why considered: The item gives an explicit edge-to-endpoint map for the Bass–Serre tree and says the picture records the amalgamating subgroup’s placement in both factors.
- Concrete content/check: One edge labelled by a left coset γC joining vertices labelled γA and γB; indicate the two vertex orbits (A*C B)/A and (A*C B)/B and the edge orbit (A*C B)/C. Any miniature should preserve left-coset notation and the orientation-free incidence convention.
- Source lines: 34, 35, 49, 51.
- Frozen source SHA-256: `b1ed35c759e28cab45eb3f22414bb04113b31eb12301882e8a545fb3f8c586e4`.
- Local screenshots: `ex-bass-serre-tree-of-an-amalgamated-free-product--01.png` (`3e620818b2dd703a31ead1ecf2b1cac90552c225e550867d7160f65010564ee6`).

## Candidate 5: `ex-the-infinite-dihedral-group-is-quasi-isometric-to-the-integers`

- Review lanes: 03.
- Diagram kind: optional-cayley-graph-comparison.
- Why considered: The source explicitly identifies two graph shapes and uses their isomorphism and the generating-set comparison to conclude quasi-isometry. A small paired line/ladder drawing can show the rung direction and the projection (n,epsilon) ↦ n that has uniformly bounded fibres.
- Concrete content/check: Draw a two-sided path with vertices n in Z and a two-sided ladder with vertices (n,epsilon), epsilon in {0,1}, horizontal generator edges and the rung generator; indicate the projection to n and its bounded fibres. Keep edge labels aligned with the two presentations in source lines 58–60.
- Source lines: 58, 62.
- Frozen source SHA-256: `c2883387148e417a09219aeccbb0bff01660a903f51e2083edba575b4ef02898`.
- Local screenshots: `ex-the-infinite-dihedral-group-is-quasi-isometric-to-the-integers--01.png` (`488d3c09a007bc2871ab2c4a0dddf87cb9b2d128d6c60d449b0c61c58d92b790`), `ex-the-infinite-dihedral-group-is-quasi-isometric-to-the-integers--02.png` (`f106d7f26a4c9beca20671f78d1af13993e2b878ecd7d2317656a8320baa800c`).

## Candidate 6: `ex-two-generating-sets-of-a-dihedral-group`

- Review lanes: 10.
- Diagram kind: potential paired Cayley graph illustration.
- Why considered: The example compares two concrete Cayley graphs of the same order-eight group, with complete vertex cycles and right-multiplication edge rules stated explicitly.
- Concrete content/check: Panel one: for right generators {r,s}, two cycles on {1,r,r²,r³} and {s,rs,r²s,r³s}, with s-edges r^i—r^is (cube). Panel two: for {s,rs}, cycle 1—s—r³—r³s—r²—r²s—r—rs—1. Preserve right multiplication and the relations r⁴=s²=1, srs⁻¹=r⁻¹; check every edge label against those conventions.
- Source lines: 54, 56.
- Frozen source SHA-256: `6569ab5bb6c8275ed2c950ae9d35c27b43768d096ee2dafc80ff182cd3f9b354`.
- Local screenshots: `ex-two-generating-sets-of-a-dihedral-group--01.png` (`c1a07b0b69634a8804099331912dcbcb0bcf326ebdf540f9bbf102f8ba223cef`).

## Candidate 7: `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings`

- Review lanes: 07.
- Diagram kind: potentially-useful-construction-schematic.
- Why considered: This is an explicit multi-part planar construction with incidence and boundary-label bookkeeping; a local schematic may make those correspondences easier to check.
- Concrete content/check: A local, explicitly schematic vertex disk with cyclically ordered attachment intervals, one edge band with two long shores and its 8-gon triangulation, and a k-occurrence cap with its 4k-gon boundary and center fan. Show that boundary traversal follows the original edge occurrence order with inserted repetitions. Include a loop as two distinct attachments if the figure claims to illustrate the loop case; do not depict the generic face as convex or claim geometric-center visibility.
- Source lines: 44, 46, 48, 50, 52.
- Frozen source SHA-256: `4b6eebd68d90ab07bbbf5d6269d71b5f6844bcc188ad764049159277626c4448`.
- Local screenshots: `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings--01.png` (`3c01226582a14eea6eda202dc239364ead0ed4dd131da437ff865b4228293142`), `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings--02.png` (`dd6ef3a4f9df10cf3ab82ac76916737dd4119645662bc99393b1533352d62c90`).

## Candidate 8: `lem-tree-schreier-generators-are-freely-independent`

- Review lanes: 07.
- Diagram kind: potentially-useful-schematic.
- Why considered: The result and proof depend on the path/edge correspondence, which is naturally spatial and is not represented visually in the preview.
- Concrete content/check: A clearly schematic Schreier graph with root H, a highlighted tree path H→Ht labelled t, a positive x-edge Ht→Htx outside the tree, and the return tree path labelled by the chosen representative inverse. Mark that nontrivial generators correspond to positive edges outside T; avoid implying the whole Schreier graph is finite or that arbitrary edge orientations are identified.
- Source lines: 30, 37, 39, 47, 49.
- Frozen source SHA-256: `c1cc5198e267b7b53ac91ca9e8a4cdaf502475741e2d8a246ea3b623d93f3158`.
- Local screenshots: `lem-tree-schreier-generators-are-freely-independent--01.png` (`47180663e104a80233f05c10ffebf026b2ddf0369e9e079a5558c7c91616dbfe`).

## Candidate 9: `lem-vertex-and-edge-stabilizers-and-their-incidence-inclusions`

- Review lanes: 05.
- Diagram kind: optional-stabilizer-incidence-diagram.
- Why considered: The result is precisely two inclusions attached to the two ends of an oriented edge, together with simultaneous conjugacy under representative change. A diagram can display the orientation and the two maps at once.
- Concrete content/check: Draw one oriented edge e:v→w; place G_e below the edge and arrows G_e↪G_v and G_e↪G_w to the origin and terminus stabilizers. Add a second representative e'=h·e with v'=h·v,w'=h·w and conjugation labels h(−)h⁻¹ on each stabilizer, preserving the same inclusion directions.
- Source lines: 29, 40.
- Frozen source SHA-256: `1354408deaa9a524f4069a79c67026e0979ed36d44ffecde1a61124585729950`.
- Local screenshots: `lem-vertex-and-edge-stabilizers-and-their-incidence-inclusions--01.png` (`08d95acc8e870d89dbbdebb29fd04ca882ad4f533cdcc114d46b9cf151e95118`).

## Candidate 10: `thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms`

- Review lanes: 06.
- Diagram kind: TikZ tree-axis schematic.
- Why considered: A single labeled tree schematic can clarify the invariant axis, translation direction, projection of x, and the off-axis displacement decomposition underlying uniqueness. The source fixes the exact maps, direction, and length relation.
- Concrete content/check: Draw a bi-infinite simplicial path A_g with oriented arrow g moving one fundamental segment of length m=ell(g) to the next; attach a branch vertex x at projection y on A_g, mark gx and gy, and show [x,gx]=[x,y] concatenated with [y,gy] and [gy,gx], giving 2d(x,A_g)+m. Keep the elliptic fixed-subtree case out of this panel or show it as a clearly separate alternative.
- Source lines: 37, 39, 61, 62, 63, 64, 65.
- Frozen source SHA-256: `f05c976fe7563a68e127b825075a9bee00fbe447f6753c486941aeb6174f9810`.
- Local screenshots: `thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms--01.png` (`a00a0183b90d8b771a042e95eae269d2fc236c4519eb13dc56f6c62263e83d1a`), `thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms--02.png` (`fbb9390b436efad05b7952420f8333c6d5b99023d0a930863886bf8b00dc4557`).

## Candidate 11: `thm-normal-form-for-fundamental-groups-of-graphs-of-groups`

- Review lanes: 05.
- Diagram kind: optional-graph-of-groups-normal-form-diagram.
- Why considered: The proof distinguishes tree edges, which are killed in the relative fundamental group, from non-tree edges, which become HNN stable letters, and uses edge-group embeddings at incident vertices. A diagram can connect the graph-of-groups data to the amalgam/HNN alternatives driving the induction.
- Concrete content/check: Draw a minimal graph with two vertex groups joined by a maximal-tree edge and one additional loop edge; mark T, label the tree edge as amalgamating the incident edge-group images, and label the non-tree loop's stable letter plus its two associated edge-group embeddings. Show reduced edge paths and indicate that an immediate reversal is allowed only when the intervening coefficient lies in the relevant edge-group image. Keep orientations consistent with the source's edge reversal and HNN conventions.
- Source lines: 30, 34, 54, 60.
- Frozen source SHA-256: `e1fc382b32311858eb69e40d11b4b9e63c814cec879be158b29010b73c7bbb83`.
- Local screenshots: `thm-normal-form-for-fundamental-groups-of-graphs-of-groups--01.png` (`b9e20e1e5370fb87bbe41d15fc37efbe3abb980fe5f6f7f9fd78caccd6fa7024`), `thm-normal-form-for-fundamental-groups-of-graphs-of-groups--02.png` (`c0e95439e51a7a35e2bcdab932818eba48dc64c6adc7d2afa48f8beaad803887`).

## Candidate 12: `thm-transitive-imprimitive-groups-embed-in-an-imprimitive-wreath-product`

- Review lanes: 03.
- Diagram kind: optional-action-intertwining-map-diagram.
- Why considered: The proof contains an explicit bijection Ψ and equivariance identity, while the target action combines a block permutation with an H-valued fibre permutation. A commutative action diagram would make the domains, codomains and inverse block-index convention easy to check.
- Concrete content/check: Show G acting on Ω and Φ(G) acting on B×Σ; label Ψ:B×Σ→Ω by Ψ(b,C)=t_C·b and the commuting relation Ψ(Φ(g)·(b,C))=g·Ψ(b,C). Keep the wreath action from line 54, including f(k·C) and k·C, so the index direction is explicit.
- Source lines: 33, 46, 54, 64.
- Frozen source SHA-256: `b016dc1a6ad76c67c15fafaa4fe1ac3b023b60fa123eff6d800e3c82e5183ad2`.
- Local screenshots: `thm-transitive-imprimitive-groups-embed-in-an-imprimitive-wreath-product--01.png` (`279ca6973c6fee6ff99d7b0813bb19083dd78b5074b3ee9e000a9d8b96b73672`).

## Candidate 13: `thm-van-kampen-lemma`

- Review lanes: 10.
- Diagram kind: potential TikZ van Kampen construction schematic.
- Why considered: The proof explicitly constructs a polygonal relator face with a conjugating stem and then handles free cancellation by an exterior spur/fold; these are diagram-specific operations whose topology occupies a long proof paragraph.
- Concrete content/check: A schematic polygon face with boundary r_k^ε and a path u_k from the common basepoint, showing the outer walk u_k r_k^ε u_k⁻¹; optionally a separate local exterior-spur inverse-edge cancellation. Keep labels/orientations on boundary edge occurrences explicit, especially both traversals of a bridge; the drawing must be illustrative and not replace the planar/simply-connected argument.
- Source lines: 54, 56, 58, 60.
- Frozen source SHA-256: `130855c0d9b381ecb0d7d5d86d5a6e81cb9cead01407737e9bd131d9c6e78529`.
- Local screenshots: `thm-van-kampen-lemma--01.png` (`2af6df8bec60f7a4274fd0f32ea81ff73bea7ca3e79fa43e447d50160bf76b4a`), `thm-van-kampen-lemma--02.png` (`dab61f819874352a5c14c9e13719e2b78f4492f46f74e4d7be732fdfebf25e35`).
