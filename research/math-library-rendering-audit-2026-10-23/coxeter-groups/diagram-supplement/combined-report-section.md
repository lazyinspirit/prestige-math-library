# Coxeter Groups diagram-candidate supplement

Integrated into the primary all-item visual review. Candidate diagrams are source-supported possibilities and remain uncertain/editorial pending independent adjudication.

## Candidate 1: `ex-cg-a-tilde-1-infinity-edge-versus-finite-dihedral`

- Reviewer lanes: 04.
- Diagram kind: Coxeter diagram comparison.
- Why considered: The item explicitly contrasts the two-node affine diagram with an infinity edge, the finite I_2(4) label-4 edge, and the three-node affine extension with labels (4,4). These are central to distinguishing the infinite-label relation from the finite rank-two case.
- Concrete content/check: Draw the two-node s --∞-- t diagram beside s --4-- t, and a separate three-node path with edge labels 4,4 for the affine B2/C2 extension. Label the first as A-tilde-1, the second as I2(4)=B2=C2, and the third as B-tilde-2=C-tilde-2.
- Frozen source lines: 51, 57, 59.
- Frozen source SHA-256: `eb073b36bc92513c06dc12359c970e85b5db79105734700366fd26af1bb723cd`.
- Local image evidence: `ex-cg-a-tilde-1-infinity-edge-versus-finite-dihedral--01.png` (`c1cbfeeabab810899856a40417cb6e65b32829f6db8741f1cd841169a5f4f476`), `ex-cg-a-tilde-1-infinity-edge-versus-finite-dihedral--02.png` (`c9cdf15e9d434e895e4ece8cd9a509504eb1670734ed77cdb18402791852b2eb`), `ex-cg-a-tilde-1-infinity-edge-versus-finite-dihedral--03.png` (`24d37a24b935496f0c8a842b612ecaa590552b866132071e2227c4a93b6e8685`), `ex-cg-a-tilde-1-infinity-edge-versus-finite-dihedral--04.png` (`f400956c802ec32b98ed675d053ce681434b48a2248622c85da3083ebd1b99c3`).

## Candidate 2: `ex-cg-a-tilde-2-nerve-perimeter-two-pi-and-vanishing-gram-determinant`

- Reviewer lanes: 05.
- Diagram kind: Coxeter nerve / metric cycle.
- Why considered: A small diagram can make the distinction between the pairwise edge data and the absent filled face immediate, and annotate the exact perimeter.
- Concrete content/check: Three vertices s1,s2,s3, all three edges labeled m=3 (or length 2π/3), with the triangle explicitly unfilled; optional exterior perimeter annotation 2π.
- Frozen source lines: 49, 50, 51, 52, 53.
- Frozen source SHA-256: `ba704db8c7e6d3416175c4093f55d5cd890d16dda767601ed80e886fa886caae`.
- Local image evidence: `ex-cg-a-tilde-2-nerve-perimeter-two-pi-and-vanishing-gram-determinant--01.png` (`4a9104c06621a4eb9bda1b5423a7aa7b81413535d7cae58d270a73b62865940f`), `ex-cg-a-tilde-2-nerve-perimeter-two-pi-and-vanishing-gram-determinant--02.png` (`3edd0a865b9d67465e7d08561b0a50149f9db4a8a2567b4faca81661f60eb892`), `ex-cg-a-tilde-2-nerve-perimeter-two-pi-and-vanishing-gram-determinant--03.png` (`e0454c8916ea331fd2ce5e862e6718813dbef0012e53666a2ec89fb9c709a5e4`).

## Candidate 3: `ex-cg-a1-affine-line-alcoves-and-translations`

- Reviewer lanes: 07.
- Diagram kind: one-dimensional affine alcove/action diagram.
- Why considered: Several explicit coordinate maps and two lattice conventions govern a geometric action on a line. A compact picture can show the indexed alcoves and verify which reflection fixes/crosses each integer wall while making the translation subgroup scale visible.
- Concrete content/check: Draw the real line with integer walls, label each open interval A_n, and mark A_0=(0,1). Show s_0:x↦−x across 0 and s_1:x↦2−x across 1; their product s_1s_0:x↦x+2 shifts A_n to A_{n+2}. Label translation subgroup 2Z for the stated root/coroot convention, and place the alternate convention Q=Z in a clearly separated note.
- Frozen source lines: 36, 38, 40, 41, 42.
- Frozen source SHA-256: `04778362e0548ba5df2216f32b1020be7d4941804ddcf56674e64b42d9d98735`.
- Local image evidence: `ex-cg-a1-affine-line-alcoves-and-translations--01.png` (`5959a5e086491e0c30cd1cdaf308513728e15cfc1fcc1a4ac986b3e2cd0b0584`), `ex-cg-a1-affine-line-alcoves-and-translations--02.png` (`f0cd1cd13ffc006723b4e7ecf5cda4ad61318d42d048b12f9987e0cfb4a5ab03`), `ex-cg-a1-affine-line-alcoves-and-translations--03.png` (`71e740a8d08af2684347cdb990183f3e066ab8bd673994fe78d3636aa0bfb14d`).

## Candidate 4: `ex-cg-a2-and-b2-alcove-shapes-and-corner-data`

- Reviewer lanes: 08.
- Diagram kind: Two side-by-side TikZ coordinate triangles for the affine A2 and B2 fundamental alcoves, with typed walls; show the local A2 wall cycle at v1 in an inset..
- Why considered: The example provides exact coordinates, wall equations, corner incidence and panel types for two geometries; a compact coordinate drawing would let a reader check which facet and vertex has each type.
- Concrete content/check: Plot A2 vertices 0,(1,1/√3),(0,2/√3); mark Hα1,0 type 1, Hα2,0 type 2, Hθ,1 type 0, and at v1 add the three incident lines Hα2,0,Hθ,1,Hα1,1 with six local sectors labeled 2,0,2,0,2,0. Plot B2 vertices 0,e1,(1/2,1/2), label the same three facet types and annotate the matrix labels 2,4,4. Keep A2 and B2 root/scaling conventions separate.
- Frozen source lines: 41, 43, 44, 45, 47.
- Frozen source SHA-256: `bc2f23ad0debcb0bbe936d5e5bfaae4dce7a8aea723b06dc67121f7ce23629f4`.
- Local image evidence: `ex-cg-a2-and-b2-alcove-shapes-and-corner-data--01.png` (`13dbc59ed267d19a840c311c66149807a817575424c4bf42688d24993040a9f2`), `ex-cg-a2-and-b2-alcove-shapes-and-corner-data--02.png` (`68733660db0656851a8dd585fe4737de32df822e1e841aac0e0a35633f51a1b2`).

## Candidate 5: `ex-cg-a2-davis-complex-hexagon-and-boundary-circle`

- Reviewer lanes: 09.
- Diagram kind: optional Coxeter cell diagram.
- Why considered: The example explicitly distinguishes the full Davis 2-cell as a regular hexagon, the six typed boundary edges, and the square chamber with a diagonal. A simple schematic would make the relationship between the 6-cycle boundary and the two-triangle chamber visible.
- Concrete content/check: Draw a hexagon with alternating s/t edge labels, mark six vertices and the 2-cell; separately indicate the chamber square with its diagonal and its two triangles, using labels consistent with K=|S|.
- Frozen source lines: 33, 35, 37, 39.
- Frozen source SHA-256: `d725619f570c102cf70dc0aa1787f2667052e6778d2b7fb6b880ff1721e24ba8`.
- Local image evidence: `ex-cg-a2-davis-complex-hexagon-and-boundary-circle--01.png` (`1be72a42178a02321eb01e9aa9c85f324021a88c74e6d1084edf6fec3473c43c`), `ex-cg-a2-davis-complex-hexagon-and-boundary-circle--03.png` (`0461f30ed709e7e7a58e6962718a16705a27bf0c8ff5380cef0c4c1245a530ae`).

## Candidate 6: `ex-cg-a3-sortable-subset-and-a-three-element-fiber`

- Reviewer lanes: 03.
- Diagram kind: TikZ right-weak-order fiber chain with endpoint/projection maps.
- Why considered: The item foregrounds a concrete three-element fiber and states that fibers are weak-order intervals with constant lower and upper projection endpoints.
- Concrete content/check: Draw the chain s3 <_R s3s2 <_R s3s2s1; show pi_c mapping all three vertices to s3 and u_c mapping them to s3s2s1. Keep the convention c=s1s2s3 and right-to-left composition visible.
- Frozen source lines: 55, 59, 60, 62, 64, 114, 116.
- Frozen source SHA-256: `0e9669b7322955847b77ec5641ce64254474f22643f2bf6e8cfa59d37da70e35`.
- Local image evidence: `ex-cg-a3-sortable-subset-and-a-three-element-fiber--01.png` (`91a96d3c3bcf8599e0545b2e714e16cd008c9c1e9540967c31d8bc48ec53708d`), `ex-cg-a3-sortable-subset-and-a-three-element-fiber--02.png` (`fccb29f918cd9866729003d09493c438f7baa686edb3692f05777ee16ca4e2d3`), `ex-cg-a3-sortable-subset-and-a-three-element-fiber--03.png` (`00fa9528732ef51540ca4468dcf35f4ab823bb49ffcbd1d25dacb88d4f3684bf`), `ex-cg-a3-sortable-subset-and-a-three-element-fiber--04.png` (`4c2b4e0ca8406ee1ab516c2397f95764503077de7c02f06ad2e87c7d1ea3a47a`), `ex-cg-a3-sortable-subset-and-a-three-element-fiber--05.png` (`45e2750fd8d4cc8ee66a8feebf405e8080eef7c7701ed436bb135d83454b29d7`).

## Candidate 7: `ex-cg-all-right-triangle-versus-disconnected-universal-coxeter-nerve`

- Reviewer lanes: 04.
- Diagram kind: spherical nerve simplicial-complex comparison.
- Why considered: The example’s main contrast is a filled all-right spherical 2-simplex with π/2 edges versus three isolated vertices whose pairwise truncated distances are π. The text explicitly warns that the short boundary 3-cycle is filled.
- Concrete content/check: Show L-prime as a filled triangle with vertices s,t,u, all edges length π/2, and a shaded 2-cell; beside it show L-double-prime as three isolated vertices s1,s2,s3 with ambient truncated pairwise distance π indicated separately from edges. Do not depict the π-distance pairs as nerve edges.
- Frozen source lines: 48, 50, 52.
- Frozen source SHA-256: `69eeb7a6ed09c4e956798461dd6344bada260cba3bd62bf986dd95f8b3b57dcb`.
- Local image evidence: `ex-cg-all-right-triangle-versus-disconnected-universal-coxeter-nerve--01.png` (`532e9750fe636f87f65ecd645cc6e95d7a1509a8b25146cb64beee935c28857b`), `ex-cg-all-right-triangle-versus-disconnected-universal-coxeter-nerve--02.png` (`b2c120e4e87ddd014e89c552694ba8df7b2855d86e16bfb9f4c1c8cffde40073`), `ex-cg-all-right-triangle-versus-disconnected-universal-coxeter-nerve--03.png` (`13572e2e9e6e1f9afb4bed2ac7e5e32fe0a383be8bd9eb742fa6079c51c88c94`), `ex-cg-all-right-triangle-versus-disconnected-universal-coxeter-nerve--04.png` (`e30237c943e001703e9c490ea7214f91b1b62e5bc9a3ac70d747a123becd8be6`).

## Candidate 8: `ex-cg-b-tilde-versus-c-tilde-diagrams`

- Reviewer lanes: 05.
- Diagram kind: Paired affine Coxeter diagram comparison.
- Why considered: The central claim is graph shape and labels and currently provides only prose; a pair of parameterized graph sketches would let readers check degree and edge-label data directly.
- Concrete content/check: Panel n=2: one common path with (4,4). Panel n≥3: B-tilde branch at v2 and terminal 4-edge {v(n−1),vn}; C-tilde path with both terminal edges labeled 4. Keep vertex indices and conventions legible.
- Frozen source lines: 22, 23, 24, 25, 26, 27, 28, 29, 30, 36, 37, 38, 39, 40, 64, 65, 66.
- Frozen source SHA-256: `23834f9dc33888e6ae3393197ead033b819463429678321b823f34b72f9f3e03`.
- Local image evidence: `ex-cg-b-tilde-versus-c-tilde-diagrams--01.png` (`0c52bdb687a09e318b4443f8a0f904a150988e40d6bcf6eb640742fc558ab6f5`), `ex-cg-b-tilde-versus-c-tilde-diagrams--02.png` (`e8583c151ef4d843cff3a83a80c34821996c3093465cc834c8de462df2ff494c`), `ex-cg-b-tilde-versus-c-tilde-diagrams--03.png` (`2546fd7d805733f4b38b791060724ee159f1aa6f4a6437fea03493237a7eba8f`), `ex-cg-b-tilde-versus-c-tilde-diagrams--04.png` (`471d595e16c48fc828479aecb792578042414071ece4b4b584316e51ddd96b6f`).

## Candidate 9: `ex-cg-b2-davis-complex-octagon-and-boundary-circle`

- Reviewer lanes: 07.
- Diagram kind: labeled polygon, subdivision, and quotient incidence diagram.
- Why considered: The item compares the octagonal top cell, its boundary Coxeter complex, a 16-triangle subdivision, and a square quotient. These are concrete cell maps and incidence data where a diagram would reduce ambiguity.
- Concrete content/check: Draw an octagon with alternating s/t edges and eight labeled vertices, mark the boundary cycle separately, and show the barycentric subdivision into 16 triangles as eight translates of two chamber triangles. In a paired panel draw the quotient square K split by the shared diagonal into the chains ∅<{s}<S and ∅<{t}<S. Distinguish the regular case d_s=d_t from the alternating edge-length case.
- Frozen source lines: 26, 28, 30, 32, 34.
- Frozen source SHA-256: `9ee3f32225aa0a1b25a242ea2af97824bb45fdb2358686ec7f6d5ac90e82fa91`.
- Local image evidence: `ex-cg-b2-davis-complex-octagon-and-boundary-circle--01.png` (`7bd8c4f3f66868531340e8ad60f670fe0fdd23663eeb9a3a96819d9637bab7bd`), `ex-cg-b2-davis-complex-octagon-and-boundary-circle--02.png` (`01714408e5a5a5f357d5fed9833c7ff3242f4597968bb1156ca76f382564c534`).

## Candidate 10: `ex-cg-chamber-face-stabilizers-in-a2`

- Reviewer lanes: 10.
- Diagram kind: TikZ rank-two reflection arrangement with a fundamental chamber, six sectors, wall labels, and the orbit of (0,1)..
- Why considered: The example gives explicit dual reflection formulas, all three root lines, chamber count and point stabilizers. A plane drawing directly corroborates the action orientation and boundary/interior distinctions central to the item.
- Concrete content/check: Draw the lines xs=0, xt=0 and xs+xt=0; mark C={xs≥0,xt≥0}, adjacent reflected sectors, s and t reflection axes/face stabilizers, origin stabilizer W, and orbit points (0,1),(1,-1),(-1,0). Check formulas reflect across xs=0 and xt=0 in dual coordinates.
- Frozen source lines: 34, 35, 36, 38, 40, 42, 44.
- Frozen source SHA-256: `8395f03f95e548c03d2ae9cf532c7169553ba346cd8588292830461c9448fbff`.
- Local image evidence: `ex-cg-chamber-face-stabilizers-in-a2--01.png` (`62cb79a6e194a788c3703156b17463d613ea0880309182388999eaddcca0b347`), `ex-cg-chamber-face-stabilizers-in-a2--02.png` (`88f455e5c458b7948251500fd6cc8ac8fa22b3e3f6fd06d93139da28b94213aa`), `ex-cg-chamber-face-stabilizers-in-a2--03.png` (`784ea05b12cffffe800e1a56f348e10cd00e21423176c03af1e80fc00cdad53c`), `ex-cg-chamber-face-stabilizers-in-a2--04.png` (`6a2357115a65d74c6502dde54ce1311969a425c08fb2fde14aa8efe5f19b2cbd`).

## Candidate 11: `ex-cg-circle-coxeter-complex-of-i2-5`

- Reviewer lanes: 01.
- Diagram kind: rank-two spherical chamber and Coxeter-complex illustration.
- Why considered: The item gives a concrete geometric model whose chamber count, adjacency, vertex stabilizers, and angle can be cross-checked visually.
- Concrete content/check: Draw five distinct lines through the origin, their ten intersection points with S^1, and label the ten intervening arcs as chambers. Mark the fundamental arc C∩S^1 with angle π/5; distinguish the two alternating vertex orbits by W_{ {s} } and W_{ {t} }. Show adjacent chambers sharing one endpoint. Avoid assigning an oriented word sequence around the circle unless the group-action convention is explicitly verified.
- Frozen source lines: 52, 67, 105, 113, 115.
- Frozen source SHA-256: `a6de3cee42941b06e5c20abb17bbec19709df267b8cd4171bf9f8b1d441d7904`.
- Local image evidence: `ex-cg-circle-coxeter-complex-of-i2-5--01.png` (`739b4246efa9329fa2633431268163bb063f5d13ca1490a9cf0c4fc27d7b4350`), `ex-cg-circle-coxeter-complex-of-i2-5--02.png` (`b15434a476093cffb4c78abe13fc12652b4b4d55a77c4495c2f565c13a5a4d2b`), `ex-cg-circle-coxeter-complex-of-i2-5--03.png` (`8aa65aa128b16b2a99f32f7e05de84d364bb898f2caf03387b46400db96cddde`), `ex-cg-circle-coxeter-complex-of-i2-5--04.png` (`58eb13f4a6be7c300bd3d9c6cf1769a6cc7aae2ac9c6ce5c077d0667affcd4f0`), `ex-cg-circle-coxeter-complex-of-i2-5--05.png` (`958bce128f6f232655b3be598b822139f90ef0a3efa05c344981c1ac002e8517`).

## Candidate 12: `ex-cg-distributive-weak-intervals-of-fully-commutative-elements`

- Reviewer lanes: 01.
- Diagram kind: two heap posets with order-ideal lattices and weak-order interval maps.
- Why considered: The example’s point is the explicit order isomorphism from weak intervals to order ideals; paired Hasse diagrams would show the two mappings and distributive lattice operations at a glance.
- Concrete content/check: For the antichain, draw s1 and s3 incomparable and the Boolean square J(P_u), labeling 1↔∅, s1↔{1}, s3↔{2}, u↔{1,2}. For the V heap, draw 1<3 and 2<3 and its five-ideal lattice, labeling 1↔∅, s1↔{1}, s3↔{2}, s1s3↔{1,2}, w↔{1,2,3}. Arrows must increase both weak-order length and ideal inclusion.
- Frozen source lines: 39, 41, 43.
- Frozen source SHA-256: `e0df7460bf1be59d666286b24a8bc092b39ffead3c4ce66712bcad0723182d7e`.
- Local image evidence: `ex-cg-distributive-weak-intervals-of-fully-commutative-elements--01.png` (`9001b686d69299f9cccaa34506e4d71ac21acb300b36caa57a6f77b6720fcf17`), `ex-cg-distributive-weak-intervals-of-fully-commutative-elements--02.png` (`60ce9c4c2a1be95db59b625fa5b706b941912df4a38ef5ac9a2708ad02d84f13`), `ex-cg-distributive-weak-intervals-of-fully-commutative-elements--03.png` (`362618933a5bbbe57b34086723155b2a1638c940fea5497e646b90dfe0da9af3`).

## Candidate 13: `ex-cg-euler-and-skew-form-in-a3`

- Reviewer lanes: 04.
- Diagram kind: oriented A3 Dynkin chain with rank-two root-order panels.
- Why considered: The example’s sign/orientation claims depend on the ordered Coxeter word s1s2s3: the chain s1—s2—s3, positive skew values on adjacent ordered pairs, zero on the commuting pair, and three positive roots in each adjacent rank-two plane in angular order.
- Concrete content/check: Show the A3 chain s1—s2—s3 with arrows s1→s2→s3 representing positive ωc values, no arrow on s1,s3, and two rank-two panels labeling rays in order e1, e1+e2, e2 and e2, e2+e3, e3. Check arrow orientation against ωc(e1,e2)=ωc(e2,e3)=1 and ωc(e1,e3)=0.
- Frozen source lines: 44, 50, 55, 56, 66, 69, 70.
- Frozen source SHA-256: `f586e658fe01e4bed6fb24faff6f9b3e6775151ed89b8afcaa1fc2d6d09b0421`.
- Local image evidence: `ex-cg-euler-and-skew-form-in-a3--01.png` (`766e25bce80a5e5ccaa7e7d9142f266a0e2fe03cb9e70702e4b55b2ac075b951`), `ex-cg-euler-and-skew-form-in-a3--02.png` (`d991c85857f1e1ffe9cf336c82df396ed8b1f5c56012adc2efe116aab09c9334`), `ex-cg-euler-and-skew-form-in-a3--03.png` (`53791fcea13ca1fb6043616bb16c10b8479eb186658dffb73e8e258cda87a33a`).

## Candidate 14: `ex-cg-g2-from-i2-six`

- Reviewer lanes: 08.
- Diagram kind: Optional G2 root-system diagram showing the six positive and six negative scaled roots with short/long lengths and both simple-root orientations..
- Why considered: The item explicitly identifies twelve roots, their two squared norms, Cartan matrix and dual scaling orientation. A root diagram can make the long/short pattern and transpose orientation checkable.
- Concrete content/check: Embed the root plane with inner product prescribed by B, plot ±as, ±at, ±(as+at), ±(2as+at), ±(3as+at), ±(3as+2at); use a_s-length √1 and long-root norm √3 according to line 39, distinguish the two squared-norm classes, and indicate the other scaling as (√3/2)Φ_c^vee with transposed Cartan matrix. Do not plot coefficient pairs as orthonormal Cartesian coordinates.
- Frozen source lines: 37, 38, 39.
- Frozen source SHA-256: `11ef1bba579d88c67a801b8692b905d845e1f9ef0d5f6ccd087b79cbf286ac22`.
- Local image evidence: `ex-cg-g2-from-i2-six--01.png` (`ec758fdb51b664a4de29a49f51b8938ce2ce4a7e2f59ad79a4365b5d528d840e`), `ex-cg-g2-from-i2-six--03.png` (`75692477ad50f0eab7fd8e5d950a2874de51a137ebf46de04b3f2cdc35541e8f`).

## Candidate 15: `ex-cg-h3-and-h4-gram-determinants-and-principal-minors`

- Reviewer lanes: 09.
- Diagram kind: optional Coxeter graph comparison.
- Why considered: The example's claims depend on exact edge labels and path/star shapes: H3 and H4 positive-definite cases are contrasted with two overlong paths and a degree-three star witness.
- Concrete content/check: Draw labeled path H3 (3,5), path H4 (3,3,5), excluded paths (3,5,3) and (3,3,5,3), and the 3,3,5 star; distinguish included H3/H4 types from excluded diagrams.
- Frozen source lines: 37, 38, 42, 46, 47, 48, 49.
- Frozen source SHA-256: `4c6b95a444ca267c4aaa93f79db975e2fb6de5224c7f7c8caaba7e8114b6c658`.
- Local image evidence: `ex-cg-h3-and-h4-gram-determinants-and-principal-minors--01.png` (`3ae0453f62475a5b47cd8f444859ba2e0f8a817b4f12f9d057712babf9a62843`), `ex-cg-h3-and-h4-gram-determinants-and-principal-minors--02.png` (`2e1fbbb19847532eca0f6b54c430d7d0ad3817555769c5d1cd4b3271e7f7ee94`).

## Candidate 16: `ex-cg-heap-of-one-three-two-in-a3`

- Reviewer lanes: 10.
- Diagram kind: TikZ Hasse diagram of the three-element labeled heap, optionally paired with its five-element order-ideal lattice..
- Why considered: The worked example is explicitly about a V-shaped heap, its two linear extensions and order ideals; a small labeled Hasse diagram would make orientation and covering relations immediately checkable.
- Concrete content/check: Place 1:s1 and 2:s3 as incomparable lower nodes, 3:s2 above them; arrows/cover edges 1→3 and 2→3 only. If drawing J(P), show ∅, {1}, {2}, {1,2}, {1,2,3} ordered by inclusion.
- Frozen source lines: 37, 39, 43, 45.
- Frozen source SHA-256: `bdc379255d1f43e43871f5d85e1bc586148740ff6c5299d2a8649901cfffaad1`.
- Local image evidence: `ex-cg-heap-of-one-three-two-in-a3--01.png` (`6b8334ab930e427ce4e10a4fd39d754290569ecd568188cad3b23ddc9edf038a`), `ex-cg-heap-of-one-three-two-in-a3--02.png` (`eab90aaea08f7ebd4cff397bc34d9f0d8c04ca177086fa595534a0d027724948`).

## Candidate 17: `ex-cg-heap-of-one-two-one-in-a2-and-long-braid`

- Reviewer lanes: 01.
- Diagram kind: labeled heap and braid-class comparison.
- Why considered: A three-node labeled chain beside the two braid-related words can make the exact forbidden convex alternating chain visible.
- Concrete content/check: Draw the chain 1<2<3 with labels s1,s2,s1; separately list the two reduced words s1s2s1 and s2s1s2 as distinct commutation classes, joined only by the length-three braid relation. Do not depict them as heap-equivalent.
- Frozen source lines: 39, 41, 43, 45.
- Frozen source SHA-256: `006eaaf60cb177d82e51841111189acf5681b97ba6b74c98e8148dd132c7c241`.
- Local image evidence: `ex-cg-heap-of-one-two-one-in-a2-and-long-braid--01.png` (`f22255983437f3c79e1636fa16a4464b8cfa54cf28bfa4b85d8dbdb18d2c85b0`), `ex-cg-heap-of-one-two-one-in-a2-and-long-braid--02.png` (`f0d4ea89d069777880306d8fce2a63335fff544e548f5527c5d72a741239a161`).

## Candidate 18: `ex-cg-hexagonal-a2-cell-and-graph-distance`

- Reviewer lanes: 02.
- Diagram kind: labelled Euclidean hexagon / 1-skeleton comparison.
- Why considered: The statement gives explicit vertex coordinates and contrasts cell geodesic distance with graph path distance; a figure would make the precise compared paths and index convention directly inspectable. The coordinate and distance claims are already verified algebraically in the source.
- Concrete content/check: Draw the regular hexagon with cyclic vertices v0,…,v5, centre o, six boundary edges, the short diagonal v0v2, and diameter v0v3. Label side length 1 and straight-line distances d(v0,v1)=1, d(v0,v2)=√3, d(v0,v3)=2 beside graph distances 1,2,3. Optionally show one barycentric triangle v-m-o with legs 1/2 and √3/2.
- Frozen source lines: 35, 38, 45, 47, 48, 49.
- Frozen source SHA-256: `0d9ef8cd131e78692769ce7468343f5db62f2e982117f7f0c2a1947bd4b7c862`.
- Local image evidence: `ex-cg-hexagonal-a2-cell-and-graph-distance--01.png` (`45d034e52b37195281e10a896b4f9043108493e422e824e645dc00f9d582866c`), `ex-cg-hexagonal-a2-cell-and-graph-distance--02.png` (`bc414fc6b1250bd88333656acbf8984e43b9e9f18658e0526b79dff1e83ae208`), `ex-cg-hexagonal-a2-cell-and-graph-distance--03.png` (`d70f7bd4228aaf3918a014297e0f1599c147d4c7ed12d56dfa2dc5501c6848be`), `ex-cg-hexagonal-a2-cell-and-graph-distance--04.png` (`f3cdfbda26beef577701118efe89655b5333fec56ea4631ee0794d1d889f7790`), `ex-cg-hexagonal-a2-cell-and-graph-distance--05.png` (`8d2f0134daa92e0e64b81dc904d4aa7c4b5d32f53ba8d495b683ae67e1729665`).

## Candidate 19: `ex-cg-moved-space-intersection-is-not-a-meet-in-a3`

- Reviewer lanes: 07.
- Diagram kind: schematic subspace-incidence diagram.
- Why considered: This is a geometric counterexample to identifying an intersection of moved spaces with the moved space of a meet; a schematic can make the strict containment visible.
- Concrete content/check: Show two planes M(alpha), M(beta) in the three-dimensional sum-zero space H intersecting in the line spanned by (1,−1,1,−1), label that this line contains no A_3 root direction, and separately show the absolute-order meet alpha∧beta=1 with M(1)=0. Mark the picture schematic rather than metric, since the defining equations live in H⊂R^4.
- Frozen source lines: 41, 43, 45, 47.
- Frozen source SHA-256: `050a428860a220a21713611343affc8757f8ee15821e569a215ebcfee7404179`.
- Local image evidence: `ex-cg-moved-space-intersection-is-not-a-meet-in-a3--01.png` (`c76ce228721cadcb1655aa386b2cef7a52e0a25ea5eed4c243428fd9ac94e8c0`), `ex-cg-moved-space-intersection-is-not-a-meet-in-a3--02.png` (`b55295ada4fcf08837bd06f682b9f7a3f239de5a6825e88b3f9d056c274c8e0a`), `ex-cg-moved-space-intersection-is-not-a-meet-in-a3--03.png` (`1c1d97c273705352afa0ed955b43b02f1b792ea38d1631e4450da646bd5fd10d`).

## Candidate 20: `ex-cg-noncrossing-partitions-and-kreweras-complements-in-s4`

- Reviewer lanes: 08.
- Diagram kind: Optional square/circle partition schematic for the crossing obstruction, with an adjacent compact Kreweras-complement example..
- Why considered: The text explicitly interprets the type-A interval through noncrossing partitions of four cyclically ordered labels and singles out one crossing partition. The diagram can make that exclusion and the label order immediately visible.
- Concrete content/check: Place 1,2,3,4 cyclically; draw blocks {1,3} and {2,4} as crossing chords and contrast with a source-listed noncrossing partition such as {1,2}|{3,4}. If showing K, preserve the stated right-to-left convention and verify K((1 2))=(2 3 4) and K² relabels 1→4→3→2→1. Do not imply the crossing partition is in the interval.
- Frozen source lines: 40, 42, 44, 45, 46.
- Frozen source SHA-256: `2ca4da1988dfaed16b2098124a526506109f668aafe8b4ec5f95012418af7b4e`.
- Local image evidence: `ex-cg-noncrossing-partitions-and-kreweras-complements-in-s4--01.png` (`31291f869ca7cc985fc95557791c7fb749c73f0a23ebf4d684e886fe6d658a7c`), `ex-cg-noncrossing-partitions-and-kreweras-complements-in-s4--03.png` (`60472be08aa46ceb1d6719a79f5ea5ce20b3df08a5a6e9902cf67e9deb3783ba`).

## Candidate 21: `ex-cg-reducible-semidefinite-forms-are-factorwise`

- Reviewer lanes: 08.
- Diagram kind: TikZ unit-square fundamental-domain and reflection-grid diagram for the explicit D∞×D∞ action..
- Why considered: The source gives the four walls, two commuting infinite-dihedral factors, exact orbit/fundamental-domain claim and tiling conclusion; a coordinate sketch directly supports those geometric assertions.
- Concrete content/check: Draw Q=[0,1]² with vertical reflections across x=0 and x=1 and horizontal reflections across y=0 and y=1; extend to the integer grid of unit squares and distinguish Q as the unique orbit representative. Check maps from proof step 1.4: r1(x,y)=(-x,y), r2(x,y)=(2-x,y), s1(x,y)=(x,-y), s2(x,y)=(x,2-y). Mark generators from separate coordinate pairs commute and the Coxeter diagram is two disconnected ∞-edges.
- Frozen source lines: 38, 40, 82, 88.
- Frozen source SHA-256: `2ea30aa572ae5e217a9507ef5960b4e4d7f6d4fca38470a2efe6dbac982f2d61`.
- Local image evidence: `ex-cg-reducible-semidefinite-forms-are-factorwise--01.png` (`8c22bd2ce981485c642496928f9f3c955c1c38bb1605926425de465bebb47479`), `ex-cg-reducible-semidefinite-forms-are-factorwise--04.png` (`832f6d3980c6ee568c81d5c934df344d7fa80c937c5b0db36d2bbf437064f577`).

## Candidate 22: `ex-cg-right-angled-cube-davis-complex`

- Reviewer lanes: 01.
- Diagram kind: paired polyhedral and dual-cellulation illustration.
- Why considered: The item explicitly contrasts the cubical boundary sphere with its dual octahedral Coxeter cellulation, and states cell counts and chamber incidence that a compact picture can make checkable.
- Concrete content/check: Draw a cube with eight sign-vector vertices, twelve edges and six square faces, then its dual octahedron with six vertices and eight triangular chambers. Identify a cube vertex with a Coxeter chamber (one sign choice in each of three opposite coordinate pairs); identify cube faces with parabolic cosets and show duality reverses incidence. Use labels consistently so the two cellulations are visibly different.
- Frozen source lines: 39, 50, 52, 67.
- Frozen source SHA-256: `f3bb24cbcf78a047cd323524f86c9db31caf0b5b3a408db0179d8a1cfcaf0982`.
- Local image evidence: `ex-cg-right-angled-cube-davis-complex--01.png` (`a8770dd3ab0282f1630c9f2c9ba4807b294224b36bb41c249dcd7f38785bbd54`), `ex-cg-right-angled-cube-davis-complex--02.png` (`7b92b66955ad68b31351849573bb125d517d69c369ce9776c8cf7d41f4104a8e`), `ex-cg-right-angled-cube-davis-complex--03.png` (`e848aa0b4b64bc4b23c70b33ec03d5b8b07f64c70972e48c9fb8a05182aa2cf0`), `ex-cg-right-angled-cube-davis-complex--04.png` (`8448bab8d695e59d8d20ed09056d3b5bc2b7b9586fd31fe0b27790f64098d69f`), `ex-cg-right-angled-cube-davis-complex--05.png` (`d190eb204a2b94f761ed57cd0022838db520f1bf81da26952bb929e74a0eb9a9`).

## Candidate 23: `ex-cg-root-inversions-and-chambers-in-i2-5-a2-and-i2-infinity`

- Reviewer lanes: 02.
- Diagram kind: rank-two root-line and chamber diagrams.
- Why considered: The source explicitly identifies roots, inversion sets, cyclic chamber order, and wall-separation sectors; these are naturally geometric data, and figures can expose orientation/index errors without serving as proof.
- Concrete content/check: For A2 and I2(5), draw the 3 and 5 root lines through the origin, label the positive root rays and number the six or ten sectors by the stated alternating words u_k; for I2(∞), show the two affine-line wall traces 0,1 and intervals (j,j+1), alongside the two root strings e_s+ku and e_t+ku. Keep the three cases separate so finite and degenerate/infinite geometry are not conflated.
- Frozen source lines: 38, 40, 42, 43, 47, 49, 50, 53.
- Frozen source SHA-256: `9b0b2696fdcca7dd0a5f724529b589b7597d5e48ec14fefc06bd9228a609ba88`.
- Local image evidence: `ex-cg-root-inversions-and-chambers-in-i2-5-a2-and-i2-infinity--01.png` (`da01c68893a561543a7faa5e8422af41436dda3e7e5f3dd6b02d578e250ae611`), `ex-cg-root-inversions-and-chambers-in-i2-5-a2-and-i2-infinity--02.png` (`5e1e6e2c61b8d9e1fbd4ea4c521474f960e86ad2710e8e4e62333378bd0678c5`), `ex-cg-root-inversions-and-chambers-in-i2-5-a2-and-i2-infinity--03.png` (`8442508142c50bc1ccc289cbeac44251e60c445f9b34dbfb87b63e83de8955a3`), `ex-cg-root-inversions-and-chambers-in-i2-5-a2-and-i2-infinity--04.png` (`618212d395086419ce506d09acfc8696ff3eb0b21dd88043d1187216f5b738b8`), `ex-cg-root-inversions-and-chambers-in-i2-5-a2-and-i2-infinity--05.png` (`1e64009d9c72f4fdc10f227aa66b7211267812ea949558774e30c66d48b8ba62`).

## Candidate 24: `ex-cg-s3-weak-order-meets-and-joins`

- Reviewer lanes: 04.
- Diagram kind: directed Hasse diagram.
- Why considered: The item explicitly states the complete right weak-order cover graph is a hexagon made of the chains 1<s<st<w0 and 1<t<ts<w0 and provides all six cover relations and cross-chain meets/joins.
- Concrete content/check: Draw the hexagon with bottom 1, middle nodes s,t and st,ts on separate branches, top w0; direct cover arrows upward. Keep labels st and ts distinct. If extended to compare left order, indicate inversion under w↦w^-1 rather than reusing the right-order arrow directions.
- Frozen source lines: 56, 58, 59, 60.
- Frozen source SHA-256: `1e40a463d03eb400739216dc4d46b397ea7b1f1296b7323b69d8bed68877fb51`.
- Local image evidence: `ex-cg-s3-weak-order-meets-and-joins--01.png` (`e4f6d24e79269b82b9e673089dd4f28d79552ef94927d7be925676cffdd24b4c`), `ex-cg-s3-weak-order-meets-and-joins--02.png` (`136468344b4787dce4e39e29dca6d68c8bf928df05118e6877cb0b83fefe24ec`), `ex-cg-s3-weak-order-meets-and-joins--03.png` (`68499569c4496230771cced8e6a42d4e8ca53f007ca796226b09c46d3278b1e4`), `ex-cg-s3-weak-order-meets-and-joins--04.png` (`3fb51f95c80e1e8d25988267a9d31b5ce9d9d4b6b813139646ba5d1523f47ca5`).

## Candidate 25: `ex-cg-s4-rank-three-interval-chain-labels-and-lex-first-chain`

- Reviewer lanes: 08.
- Diagram kind: TikZ Hasse diagram of the eight-element rank-three Bruhat interval with cover labels and selected chain highlights..
- Why considered: The example is a finite interval expressly defined by its cover graph and enumerates all maximal chains and label words; a Hasse diagram would make the local rank-two replacement and lexicographic comparison easy to inspect.
- Concrete content/check: Use levels {1234}; atoms {2134,1324,1243}; rank-two elements {2314,2143,1342}; top 2341. Draw only the nine source-listed rank-two-to-rank-one/top covers plus the three atom-to-bottom covers (12 total), orient upward toward 2341, label edges by deleted positions consistent with source lines 38–41, highlight the increasing chain 2341>1342>1243>1234 with (1,2,3), and distinguish the falling chain with (3,2,1). Check the local diamond on [1234,1342] has middle vertices 1324 and 1243, labels (3,2) and (2,3).
- Frozen source lines: 36, 38, 39, 40, 41, 44, 46.
- Frozen source SHA-256: `f3b17b610662b8b0de40aa09dd0c0dd3212933ca92dc8fe19a45f46960266c2d`.
- Local image evidence: `ex-cg-s4-rank-three-interval-chain-labels-and-lex-first-chain--01.png` (`d180ac9c3300e23f24aa941a26c06f60ff2e62bcd8262bb6c1cf19e3787e84c3`), `ex-cg-s4-rank-three-interval-chain-labels-and-lex-first-chain--03.png` (`edb5903a364d4c2842431f2dccdbbbf4957f52e6349c66832ee37681b706926a`).

## Candidate 26: `ex-cg-s4-subwords-and-covers`

- Reviewer lanes: 01.
- Diagram kind: small Bruhat cover diagram around the longest element.
- Why considered: A small interval/cover view could clarify which reflection deletions are covers and which are strictly lower despite being single-letter deletions.
- Concrete content/check: Draw only the local star below w0=4321: immediate lower covers 4312, 4231, 3421 at rank 5. If showing noncovers, place 4123 and 2341 at rank 3 and 1324 at rank 1 without connecting them as covers of w0. Do not attempt to depict the full 24-element Bruhat interval in this local diagram.
- Frozen source lines: 40, 42, 68, 70.
- Frozen source SHA-256: `382000ae5dec74952cbd7d06a679b1215a3289623cb53ba5e199a6dc43af7b3b`.
- Local image evidence: `ex-cg-s4-subwords-and-covers--01.png` (`bbb4a601e70106e5bb1f05fa76cbf3b06a7cc8d8a8da08d8a040d25ef439bd89`), `ex-cg-s4-subwords-and-covers--02.png` (`a392b707d5f000ba25c292b7b03c50d7c2251cc0f9c895ca72d9de86b33dfd6e`), `ex-cg-s4-subwords-and-covers--03.png` (`3b77c917e1047c0c35bc412b66f1c0b5558136279145b3945a4644bbd92ffce1`).

## Candidate 27: `ex-cg-sphere-coxeter-complex-of-a3-and-a-parabolic-residue`

- Reviewer lanes: 06.
- Diagram kind: optional-missing-incidence-diagram.
- Why considered: The source supplies a dense global incidence count and two distinct local residue cycles. A single schematic would let readers see how the 24 chambers, 14 vertices, and parabolic links fit together.
- Concrete content/check: Use the combinatorial model as the barycentric subdivision of a tetrahedron boundary: 4 vertices from one-vertex subsets, 6 from two-vertex subsets, and 4 from three-vertex subsets; its flags give 24 triangular faces and its edges total 36. Highlight one vertex in a size-6 or size-4 coset class and its link cycle (hexagon for I={s2,s3} or square for I={s1,s3}). Mark this as a combinatorial schematic, not a metric spherical tetrahedron or metric identification beyond the source claim.
- Frozen source lines: 36, 48.
- Frozen source SHA-256: `64442b5afa4787c7bcccce0f2430c6d3df7be2095e801583e8d392c45b48ce54`.
- Local image evidence: `ex-cg-sphere-coxeter-complex-of-a3-and-a-parabolic-residue--01.png` (`644249c8a36a663ee184840bbe242eec0b577d443bd8854bfa16a2385d1ea575`), `ex-cg-sphere-coxeter-complex-of-a3-and-a-parabolic-residue--04.png` (`0e548d378c34459abd2e5b3be803666131b972af9320b0b404ddda3170b1d16e`), `ex-cg-sphere-coxeter-complex-of-a3-and-a-parabolic-residue--05.png` (`984c586ed2c9bc0e49d3d9330dab540403d42521de5a61cd335a23f4d829bdb2`).

## Candidate 28: `lem-cg-affine-diagram-enumeration`

- Reviewer lanes: 10.
- Diagram kind: TikZ diagram-family plate or compact family table with labeled graph schematics..
- Why considered: The result classifies labeled graphs and explicitly distinguishes cycles, paths, branched trees, exceptional arms and low-rank aliases. Schematics would let readers compare the enumerated families and labels without reconstructing them from prose.
- Concrete content/check: Show the all-3 cycle A-tilde; B-tilde/C-tilde paths with terminal 4 label; D-tilde two-branch trees; E-tilde arm lengths (2,2,2),(1,3,3),(1,2,5); F-tilde path labels (3,3,4,3); G-tilde path labels (3,6); and the A-tilde-1 ∞ edge. Keep stated low-rank aliases explicit.
- Frozen source lines: 59, 61, 71.
- Frozen source SHA-256: `00f0e787578c69f3d31c3dc20aa2e189f6fc5c4ec54b8fcd4e4752449441e712`.
- Local image evidence: `lem-cg-affine-diagram-enumeration--01.png` (`84b63a06d1e5df78231c2b5a31cb4edc11e923ee3eed0be6ed619094dc392ade`), `lem-cg-affine-diagram-enumeration--02.png` (`4077ee6d225da340780123e9ea454f7cbe46b60ee81a51eb19bbb9c76db8bdbe`), `lem-cg-affine-diagram-enumeration--03.png` (`e46858a9e717ee3a24bb2a7d77f0ab21f9bb0f45a05d8e406d8c0c68d7cbce76`), `lem-cg-affine-diagram-enumeration--04.png` (`416874dceaa10e925a9a27831d74ea91f4c1849d5de9080182690e362636c53d`), `lem-cg-affine-diagram-enumeration--05.png` (`2b30cdb05b23acc9c2cc78f13c51e110194991755e40d468aea1f32e402b0d6d`), `lem-cg-affine-diagram-enumeration--06.png` (`fb198daaec6cdf9706dc9b74f6ed0579c6b3f223c7408f40987c424dffb41e3a`).

## Candidate 29: `lem-cg-affine-point-stabilizers-and-vertex-residues`

- Reviewer lanes: 02.
- Diagram kind: local rank-two alcove link cycle.
- Why considered: The item expressly identifies the local link as a finite dihedral arrangement and states an alternating panel cycle and boundary relation. A small schematic can clarify the orientation and word-reading convention.
- Concrete content/check: For the stated codimension-two face, show 2m incident alcoves cyclically, with p,q panel labels alternating and boundary word (σpσq)^m; include m=2,3 examples only if a generic 2m cycle is clear.
- Frozen source lines: 75, 77.
- Frozen source SHA-256: `dcb7f218fd22cfb0838a707c309f95170c9a8daf207a908781335e13a76db9c3`.
- Local image evidence: `lem-cg-affine-point-stabilizers-and-vertex-residues--01.png` (`2360be6f914f0007930d58b63e269e9a81e8dff28a87aa331eb93a73033b1bcd`), `lem-cg-affine-point-stabilizers-and-vertex-residues--02.png` (`5e5a1bc58261d2b536152abc7f76abfc4cdcef0b700f4479b486f527366e6ca1`), `lem-cg-affine-point-stabilizers-and-vertex-residues--03.png` (`7e9b9c1d01b5691cccd242b1ab066b8d42555f82047e2aa5cad6326c5348fa3d`), `lem-cg-affine-point-stabilizers-and-vertex-residues--04.png` (`d3045e10b799945f298e2020fe693a6e8a9c800046b8b40760f5da50d7cf50dd`), `lem-cg-affine-point-stabilizers-and-vertex-residues--05.png` (`7dec08d189b80c7bcc51b7e79477dbac8ca0c6d0bd5803e881c295898d3179fb`), `lem-cg-affine-point-stabilizers-and-vertex-residues--06.png` (`6f86c8654bd3cb992297916464f88697712355855f4d4daeafcc971040b0381b`), `lem-cg-affine-point-stabilizers-and-vertex-residues--07.png` (`be2f647b6609e1c046fd597a0dcc092ad4f2adce9a7e6f0dc8feb13030b7c4d0`).

## Candidate 30: `lem-cg-coxeter-elements-are-conjugate-via-source-sink-moves`

- Reviewer lanes: 05.
- Diagram kind: Oriented Coxeter graph / source-sink move.
- Why considered: A minimal before-and-after example would connect the orientation terminology with the algebraic conjugation rule. The proof itself remains verbal and valid without the picture.
- Concrete content/check: A3 path s1—s2—s3: orientation s1→s2→s3 becomes s2→s3→s1 after firing source s1; label products c=s1s2s3 and c'=s2s3s1=s1cs1.
- Frozen source lines: 38, 39, 40, 41, 42, 68, 69.
- Frozen source SHA-256: `2cdcf593ce1b7a11037682e174ae1b47851439b51fcb34c0b75625489aef32ff`.
- Local image evidence: `lem-cg-coxeter-elements-are-conjugate-via-source-sink-moves--01.png` (`dc6f5e8da8c914562769c51b8fb31dfb6c6bf755d8fbc7c8a485a3bfc5678727`), `lem-cg-coxeter-elements-are-conjugate-via-source-sink-moves--02.png` (`86f0778d7bdf7c2240fcced59f54de7907b1a8e753e319ebca7d0a59ce60fd6d`), `lem-cg-coxeter-elements-are-conjugate-via-source-sink-moves--03.png` (`7d39d859d9a01c17d63728689543a3c0fd3f89f53d638ee67fea0a3f2d5f3005`).

## Candidate 31: `lem-cg-finite-rank-two-inversion-set-recognition`

- Reviewer lanes: 08.
- Diagram kind: Optional rank-two root-sector diagram with ordered rays and shaded initial/final inversion segments..
- Why considered: The central recognition condition is phrased as angular segments in every rank-two root subsystem. A sector schematic makes the endpoint direction and allowed consecutive blocks visible.
- Concrete content/check: Draw a pointed sector with extreme positive roots and interior roots βu1,…,βum in the stated angular order; show an initial block {βu1,…,βuj} and a final block {βuj,…,βum} as separate allowed subsets, and an interior nonconsecutive subset as excluded. Align reflection order inward from opposite endpoints to the definitions at line 49. Verify the figure is schematic for a finite dihedral subsystem and does not assert all positive roots of W lie in one plane.
- Frozen source lines: 43, 47, 49, 53, 57.
- Frozen source SHA-256: `0b2dc5c93348d4defd3b6e75c7c5fff1002d49532529727ef312bf5d20d4732f`.
- Local image evidence: `lem-cg-finite-rank-two-inversion-set-recognition--01.png` (`8d10db8479a9e8c44e4a202ce3878aa9e95b5dbeeb2f076a3cd436e1dbaa34c8`), `lem-cg-finite-rank-two-inversion-set-recognition--04.png` (`f64b9a243dd9ddafb443481758128665f671aac71dbda9fe48d8fed0de56186f`).

## Candidate 32: `thm-cg-finite-coxeter-classification-including-h-and-dihedral`

- Reviewer lanes: 03.
- Diagram kind: TikZ labelled Coxeter-diagram gallery.
- Why considered: The classification claim is explicitly phrased as isomorphism to a list of standard labelled diagrams, currently given in prose as path/star/edge descriptions.
- Concrete content/check: A compact gallery for exceptional E6/E7/E8, F4, H3/H4 and I2(m), with node counts, branch arms, and edge labels 4, 5, or m shown; keep A_n/B_n/D_n as clearly labelled path/star schematics if including families. Unlabelled edges mean 3 per the repository convention.
- Frozen source lines: 40, 45, 46, 48, 50, 52, 53, 55.
- Frozen source SHA-256: `8fc2b35a5386e51de8ccd7a9489423dbc63b0796580aeda0c78c88ee13c5a6aa`.
- Local image evidence: `thm-cg-finite-coxeter-classification-including-h-and-dihedral--01.png` (`c09b13245fe02d66f7d1548b17fb8ed4ac62a94f68d298636bebdbfe5d66ae9c`), `thm-cg-finite-coxeter-classification-including-h-and-dihedral--02.png` (`49fba811315f53067e8f54c28687417db72ab7e2d0897d49e1fdee97bccc25e7`), `thm-cg-finite-coxeter-classification-including-h-and-dihedral--03.png` (`ab9a07ffd9bd78b5bbab2d8732fa4ba6b4fc50e153e4aa9e4f02ba4b629eee5a`), `thm-cg-finite-coxeter-classification-including-h-and-dihedral--04.png` (`d9c24403c1a9369d818d64837bd965c025762e431f09f51aaec5e7e162fd9805`), `thm-cg-finite-coxeter-classification-including-h-and-dihedral--05.png` (`980030791173862185004caf6619eb9975dbda7f7b489f547ddf5074ceffacd8`).
