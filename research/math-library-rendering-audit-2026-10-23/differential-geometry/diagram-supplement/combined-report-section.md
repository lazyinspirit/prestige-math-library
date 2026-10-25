# Differential Geometry diagram-candidate supplement

Integrated with the primary all-item review. Candidate diagrams are source-supported possibilities and remain uncertain/editorial pending independent adjudication.

## Candidate 1: `cex-a-conjugate-point-at-which-there-are-many-geodesics`

- Review lanes: 06.
- Diagram kind: optional geometric schematic.
- Why considered: The entire counterexample is the geometric contrast between a conjugate antipode and many minimizing meridians; a compact schematic can orient the reader before the explicit countable construction. The existing formulas and proof are complete without it.
- Concrete content/check: A schematic round sphere with p and -p antipodal, several distinct great-circle meridians joining them, and a tangent direction v at p. Label each segment length πR and identify the terminal point as conjugate with multiplicity n−1. Keep the picture schematic and do not depict it as a proof of the infinite-family claim.
- Frozen source lines: 61, 63, 64, 66.
- Source SHA-256: `d5a49368ddeeddb3eec314d2df5c56995ea5174ccee43c61c25fac593d6d8774`.
- Local screenshot evidence: `cex-a-conjugate-point-at-which-there-are-many-geodesics--01.png` (`ab633465feeb19064a332bd91a53b9d7c6eafe153c4fd10bde05a5aad69db6de`), `cex-a-conjugate-point-at-which-there-are-many-geodesics--02.png` (`0aa8e1e228db95ba4b430858b2cedfd402bcea6f27fbe2c082eb9e765b846445`), `cex-a-conjugate-point-at-which-there-are-many-geodesics--03.png` (`152a85cfe9ea22cffd9b400c7326694f159fa81de50ebe462b342df3f11552e2`), `cex-a-conjugate-point-at-which-there-are-many-geodesics--04.png` (`4b59c7b2d13bbbb33dffdaf24f222247340eda26d3479b1d55ba986b3918beef`).

## Candidate 2: `cex-a-map-with-two-preimages-but-degree-zero`

- Review lanes: 10.
- Diagram kind: TikZ circle map / signed regular fibre.
- Why considered: The counterexample’s central claim is that a regular value has two preimages with opposite local signs. The source gives the map, circle orientations, exact fibre and derivative signs; a small schematic would make the unsigned-versus-signed count immediate.
- Concrete content/check: Draw source and target circles with counterclockwise orientation, the target regular value 1, its two source preimages θ=0 and θ=π, and local orientation labels +1 and −1. Mark their signed sum 0 and unsigned count 2. Keep it schematic; do not suggest the map covers the whole target (its phase range is [-1,1]).
- Frozen source lines: 27, 29, 35, 47, 48, 49.
- Source SHA-256: `6d87e288ec9e19a74905d8306954fa6fc22dbc72d31639b04ecfaca8940d4be7`.
- Local screenshot evidence: `cex-a-map-with-two-preimages-but-degree-zero--01.png` (`b9caea97b18a93baf28bd0a29182981b054b263fddb3bfb2cf009abf79e19191`), `cex-a-map-with-two-preimages-but-degree-zero--02.png` (`020b88cc464b264c9df90e6caf235803b302608d59b542fb125a6659c0a1b9d5`).

## Candidate 3: `def-curvilinear-triangulation-of-a-compact-surface`

- Review lanes: 08.
- Diagram kind: TikZ cellulation/link schematic.
- Why considered: The definition is organized around face incidence and vertex links, whose local-manifold distinction is unusually easy to misread in prose. A two-panel schematic could make the exact local combinatorics immediate; the text already states the mathematics and has no identified error.
- Concrete content/check: Draw one interior edge shared by two triangular faces and one boundary edge with one incident face; pair this with an interior vertex link cycle and a boundary vertex link interval. Label the boundary germs and avoid implying that all of a face interior lies in the surface boundary.
- Frozen source lines: 62, 63, 64, 65, 66, 67.
- Source SHA-256: `c2f5551b9fc3e7020a198af56814f0df902a2ae349c4951ffed499d7f8f115cd`.
- Local screenshot evidence: `def-curvilinear-triangulation-of-a-compact-surface--01.png` (`77b5e37befd8dbe2448cb58c02a6938ee982d8775743148d8970398091f3f6b5`).

## Candidate 4: `ex-cut-locus-of-a-point-on-a-round-sphere`

- Review lanes: 08.
- Diagram kind: TikZ geometry/exponential-map schematic.
- Why considered: The common endpoint for infinitely many minimizing great-circle arcs is the key geometric distinction, and an antipodal sphere sketch can communicate the cut locus directly. The derivation is explicit and internally consistent, so this is not a correction request.
- Concrete content/check: Draw p, several distinct great-circle minimizing arcs, their shared endpoint −p, and mark length/cut time πR; avoid depicting a unique minimizing geodesic at the antipode. Optionally pair with the tangent-space radius-πR injectivity ball, clearly distinguishing the sphere from its tangent plane.
- Frozen source lines: 63, 64, 65, 104, 105, 106, 107, 108, 109, 110.
- Source SHA-256: `f09a0a6b426457eabc1db7fdea93e85738a76a2423507b6d0f709b839326dc17`.
- Local screenshot evidence: `ex-cut-locus-of-a-point-on-a-round-sphere--01.png` (`fe082ac75761055473101d2bc3c2e57bfe521ac2e1a28546e08c867b5af8353f`).

## Candidate 5: `ex-normal-coordinates-on-the-round-sphere`

- Review lanes: 01.
- Diagram kind: Optional exponential-map domain and boundary-identification schematic.
- Why considered: The source explicitly contrasts injectivity on the open tangent ball of radius pi with the collision of two distinct boundary vectors at the antipode. A paired domain/image picture would make the exact boundary of the normal-coordinate claim easy to verify.
- Concrete content/check: Draw p on the unit sphere and the antipode -p. Show the open disk B_pi(0_p) in T_pS^n mapped injectively by exp_p onto the sphere with the antipode omitted; show the two boundary points +pi e_1 and -pi e_1 both mapping to -p, with those boundary points excluded from the open disk. Label x_e^i(exp_p(v))=v^i for v in a normal domain D inside the disk. Use an explicitly schematic sphere/disk projection for general n.
- Frozen source lines: 27, 29, 30, 31.
- Source SHA-256: `70a91cf1156d5c81e19610a71e2dbf1e2f0ab750de5214901268b31f6e3f1630`.
- Local screenshot evidence: `ex-normal-coordinates-on-the-round-sphere--01.png` (`805618e68e8c39ca58ad26d730cda2505d6bdb9f39186aee1ba291f9b8d8a502`).

## Candidate 6: `ex-spherical-geodesic-triangle-area-excess`

- Review lanes: 01.
- Diagram kind: Optional spherical geodesic triangle / octant diagram.
- Why considered: The source gives an explicit spherical octant, its three vertices, great-circle boundary arcs, right angles, and area; a labeled spherical patch would concretely show the example realizing the angle excess.
- Concrete content/check: Draw the first-octant patch on S^2_R bounded by the three great-circle arcs between Re_1, Re_2, Re_3. Mark a right-angle interior corner at each vertex, label A=pi R^2/2, and optionally state that its angle sum is 3pi/2=pi+A/R^2. Preserve the outward orientation if arrows are included.
- Frozen source lines: 45, 46, 47, 87.
- Source SHA-256: `3df15f2d06b816bea98e1625051b51f360b55683751d475b20e2259a6194ac94`.
- Local screenshot evidence: `ex-spherical-geodesic-triangle-area-excess--01.png` (`baeb5d4f912d58a211791853cde2ddbf3caf1238ff98f6ec1c2b4c972f536b7e`).

## Candidate 7: `ex-the-sphere-and-its-two-sided-normal-tube`

- Review lanes: 05.
- Diagram kind: optional radial tubular-neighbourhood schematic.
- Why considered: The item gives an explicit normal-addition map and exact shell image; a schematic makes this geometric map easier to read. Existing prose and inverse already prove the claim.
- Concrete content/check: 2D cross-section schematic of general S^n: draw the unit sphere and concentric radii 1/2 and 3/2, mark normal coordinate t in (-1/2,1/2), show E(p,t)=(1+t)p to the shell, and label x↦(x/||x||,||x||−1) as inverse. State that the cross-section is schematic for all n.
- Frozen source lines: 34, 35, 47.
- Source SHA-256: `9da06dc682e0fa25ef2d34c1bcc894886837b9a0fe5876407038693aa193cb82`.
- Local screenshot evidence: `ex-the-sphere-and-its-two-sided-normal-tube--01.png` (`e530c9a76dddae5752863d508863f5e74ea47993e643474e034b66126837d081`).

## Candidate 8: `prop-distance-between-corresponding-side-points-in-toponogov-comparison`

- Review lanes: 03.
- Diagram kind: paired triangle-comparison schematic.
- Why considered: The claim is explicitly about corresponding points on two sides of an actual and a model triangle, with an inequality between their distances. The geometry is spatial and correspondence is central to the statement.
- Concrete content/check: Show actual triangle p-q-r with minimizing legs σ1 and σ2 from p; mark u=σ1(s) and v=σ2(t). Beside it show comparison triangle p̄-q̄-r̄ with side lengths a,b,c and matching points ū,v̄ at distances s,t from p̄. Label d_g(u,v) ≥ d_k(ū,v̄). Preserve ordered endpoints and avoid implying a global pointwise map between manifolds.
- Frozen source lines: 46, 53, 60, 62, 65.
- Source SHA-256: `cb63bbcfc051ab7885609b2987f8bad5d213e923b4e1e0a606b80b6e29e1e9ce`.
- Local screenshot evidence: `prop-distance-between-corresponding-side-points-in-toponogov-comparison--01.png` (`cfd837989cea8ebef2e853438c65dc5ebe08964ab9c237c0dc7ed0b30ea50e1f`), `prop-distance-between-corresponding-side-points-in-toponogov-comparison--02.png` (`f441c7f9c6fe1127139a472ac8a835b95453dccdab14265a2ae5798b5dff243d`), `prop-distance-between-corresponding-side-points-in-toponogov-comparison--03.png` (`2fde69909f72b45f218d22eda2d005d84a781a9e031925949a39ec56ab3b9bea`), `prop-distance-between-corresponding-side-points-in-toponogov-comparison--04.png` (`37e51dafd395d0e22306ac6d68760439c6bf7204a1c730cebf719be22c941113`), `prop-distance-between-corresponding-side-points-in-toponogov-comparison--05.png` (`6f6996ec6c8aabf73fd959dde2d6d4d61264b308ca44120fba5369be5be112b5`).

## Candidate 9: `prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution`

- Review lanes: 03.
- Diagram kind: factorization/commuting triangle.
- Why considered: The proposition’s central conclusion is a unique factorization through a leaf inclusion, which is naturally summarized by a commuting map diagram.
- Concrete content/check: Draw P --F--> M and a unique dotted smooth lift F~:P→L with L --j↪--> M; state j∘F~=F and F(P)⊆L. Mark that existence requires connected P, tangency dF(TP)⊆D and F(P)∩L≠∅.
- Frozen source lines: 31, 33, 35, 37.
- Source SHA-256: `bd3f838c63d592fe7fbd950f5dcb40ef33bc806465bf546c0b798fd77051583c`.
- Local screenshot evidence: `prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution--01.png` (`18fb318421072eabd46091b5bc093a52430784d748e00cda58c1a9fddc45ce69`), `prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution--02.png` (`45018f9d3bbf0a7bc15ce1f0e2a467b9bf8b0973924b9579d24e7e7a613cae31`).

## Candidate 10: `thm-collar-neighborhood-theorem`

- Review lanes: 02.
- Diagram kind: TikZ collar-flow schematic.
- Why considered: The theorem states existence of a smooth collar and the proof constructs it explicitly from an inward-pointing vector field and a positive smooth time-width. A schematic would make the embedding and retraction maps immediately inspectable.
- Concrete content/check: Show a local boundary face ∂M with inward flow trajectories and the collar map c(p,s)=Φ_{sδ(p)}(p), with c(p,0)=p. Depict the variable positive width δ(p), the open image in M, and the inverse collar projection followed by the boundary projection r(c(p,s))=p. The width must vary with p in the schematic; it is not a claim of a constant-width global product metric.
- Frozen source lines: 32, 48, 50, 52, 54, 56, 58.
- Source SHA-256: `a1c001d106117d1a977bbc4890f3528d87ed51f63d535c023f0dcade5fb38c5d`.
- Local screenshot evidence: `thm-collar-neighborhood-theorem--01.png` (`fbcd818721db31cf58aeb5a740c7410af3bf164f4cf4a26a7e9aa125d72193e8`), `thm-collar-neighborhood-theorem--02.png` (`199aa5896a08c72e40fd9df6cd966e0b89cddff51e57f7ebaaf6c0ea28634b39`).

## Candidate 11: `thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p`

- Review lanes: 10.
- Diagram kind: TikZ radial-domain / exponential-map schematic.
- Why considered: The statement identifies a nontrivial open star-shaped subset of one tangent space by direction-dependent cut times and maps it diffeomorphically to the complement of the base point and cut locus. The proof separately establishes openness, injectivity, surjectivity, local diffeomorphism, and image exclusions; a paired schematic can orient readers through the set correspondence.
- Concrete content/check: Show a tangent-space disk-like radial domain D_p with origin removed and radial endpoints at c_p(v), plus a manifold-side schematic with p and Cut(p) removed. Indicate exp_p as a bijective local diffeomorphism from D_p onto that open complement. Label boundary at cut time excluded and avoid implying the cut locus is smooth or that exp_p extends injectively to it.
- Frozen source lines: 59, 69, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129.
- Source SHA-256: `9190792e202fa73296535e079546e0c5057580cc66313f52e8e3b16db5bd543a`.
- Local screenshot evidence: `thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p--01.png` (`180b609f4814698990aa36a8608eafe88281b6b1d4dafe3312a1b9a427eb3085`), `thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p--04.png` (`84cde864f974fecc01dc83d933af79c6f7ee3360f0e3886be12805478d36863d`), `thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p--05.png` (`3dacc3ef68cbbd8901b572f39f54ecb799bc44b2cad0b64f1ec8bb54a4ae3029`).

## Candidate 12: `thm-gauss-bonnet-for-a-geodesic-triangle`

- Review lanes: 04.
- Diagram kind: optional-clarifying-diagram.
- Why considered: The theorem relates boundary orientation, three corners, and the curvature integral; a small labelled triangle can make the angle convention and orientation visible. The formula is already clear algebraically, so a diagram is optional.
- Concrete content/check: A disk bounded by three directed geodesic sides in positive boundary orientation; label vertices and interior sectors alpha, beta, gamma, indicate the outward-normal-first boundary convention, and place integral_T K dA = alpha+beta+gamma-pi adjacent.
- Frozen source lines: 57, 71, 75, 77.
- Source SHA-256: `bf48c06f1a23dbe83455852952088e92491cdd07e3c4125838b03c828b8d9e43`.
- Local screenshot evidence: `thm-gauss-bonnet-for-a-geodesic-triangle--01.png` (`15de079d68fb90b511d1258d1775219af84e3ffa303a8e85a8898cf4f7170f54`), `thm-gauss-bonnet-for-a-geodesic-triangle--02.png` (`eb45b302d738b8960b5bede5d54d193e0f57e9cb1bb3404a66301983d8eeae9d`).

## Candidate 13: `thm-the-de-rham-map-is-an-isomorphism-on-a-two-open-union-when-it-is-on-the-pieces-and-intersection`

- Review lanes: 03.
- Diagram kind: commutative Mayer–Vietoris five-term diagram.
- Why considered: The proof explicitly relies on commutation of restriction, difference and connector squares, then applies the five lemma to the two exact rows; maps and connector signs are a mathematical part of the argument.
- Concrete content/check: Show the five consecutive exact terms H^{q−1}(U)⊕H^{q−1}(V)→H^{q−1}(U∩V)→H^q(M)→H^q(U)⊕H^q(V)→H^q(U∩V) in both de Rham and smooth-singular rows, with vertical integration maps. Label the first and fourth horizontal difference maps V−U, connector maps with the established sign convention, and restrict/connector squares as commuting. Do not invent a sign; verify against [F1]/[F2].
- Frozen source lines: 31, 33, 35, 47, 49, 51.
- Source SHA-256: `411f2800e69b051167aacab109fd6ed6a014ab1402d034865720fb60347347a6`.
- Local screenshot evidence: `thm-the-de-rham-map-is-an-isomorphism-on-a-two-open-union-when-it-is-on-the-pieces-and-intersection--01.png` (`0606ea9d27cb16f7464316ec116eb91e35bc358f531f3c6d4f1eb8835d61e78b`), `thm-the-de-rham-map-is-an-isomorphism-on-a-two-open-union-when-it-is-on-the-pieces-and-intersection--02.png` (`33ebc59c94989d7aaad1fb235a686ea96c2677218bb50913ddb0ed622aba51ba`).
