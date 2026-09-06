# Step 8 adjudication — group f

## Scope and reading checkpoint

- Run: `frontier-32`; group: `f`; batches: `9`, `11`, `12`.
- Read all eight owned page files and all 183 owned item files in their declared order.
- Read the exact statements of all 82 external direct dependencies used by the group, plus every further dependency needed to assess a rejection.
- Read the Step-7 digest, all three reader warnings, the materialized alerts, the Step-8 scope, and all 56 exact judge rejection records.
- Final disposition: 50 `confirmed_fatal`, 4 `confirmed_nonfatal`, and 2 `false_positive`. The 50 fatal items were repaired; no item closed as nonfatal or false positive was changed.

## Decisions

All 56 exact rejection tuples are appended to
`research/frontier-32-judge-adjudications.jsonl`. Each fatal decision has one
matching `source: alpha-step8-f` row in `research/defect-ledger.jsonl`. The six
closed decisions licensed no content, contract, impact, or judge change.

### Closed without content change

- `cor-cohen-macaulayness-localises` — `confirmed_nonfatal`. The direct dependency is the localization lemma, and step 1.1 expressly invokes “the localization lemma”; its generic `[given]` tag is thin attribution, but the exact cited interface supplies the claimed equality.
- `lem-ext-depth-shift-across-a-regular-element` — `confirmed_nonfatal`. The omitted boundary observation is immediate: if $d=0$, a nonzero element annihilated by $I$ would also be annihilated by the $M$-regular element $x\in I$, a contradiction. Hence $d\geq1$ and the displayed Ext segment is correctly indexed.
- `lem-maximal-regular-sequences-have-common-length-ext` — `confirmed_nonfatal`. Iterating the displayed short exact Ext fragments backwards is a standard finite induction: first nonvanishing in degree zero for the final quotient yields first nonvanishing one degree higher before each regular quotient. The statement is correct and the gap is locally closable.
- `thm-affine-schemes-quasi-separated` — `confirmed_nonfatal`. Its declared affine-quasi-compactness dependency supplies the one fact tagged merely `[given]`; the finite distinguished-open argument is otherwise complete.
- `def-grassmannian-subspaces` — `false_positive`. In the established notation, $0$ denotes the zero subspace, so $\{0\}$ is precisely the singleton parameter set whose sole element is that subspace. Writing $\{\{0_V\}\}$ would confuse the ambient set-theoretic representation with the mathematical notation.
- `lem-affine-product-topology-not-product-topology` — `false_positive`. The sibling counterexample does not assert equality: under its heading “Statement refuted,” it refutes equality and proves the same diagonal argument. Both items agree that the topologies differ over an infinite field.

### Step-7 reader warnings

- `s8a-d1aa912ac24bd97a0460a351` on `lem-depth-radical-invariance-via-ext` — `nonfatal`. Radical invariance is correct; the finite-filtration Ext devissage comparing powers of two ideals with the same radical is a standard finite induction and the omitted detail does not make the statement or proof materially defective.
- `s8a-9420e482f9d7c30727202ca9` on `cor-one-regular-system-of-parameters-implies-cohen-macaulay` — `covered_by_rejection`. It identifies the same missing module system-of-parameters interface as exact rejection `(cor-one-regular-system-of-parameters-implies-cohen-macaulay, gpt-5.6-terra, f4825602cff5869bbba1218e84e5f5cfdefdba02d6bd571b2fb524f7cfbd89fe)`; the licensed repair cites the module parameter theorem and its length convention.
- `s8a-27abc7a018265ebf06ec2b1a` on page `presheaves-sheaves-stalks-and-sheafification` — `not_defect`. Batch 12's absent prerequisite `plane-curves-local-intersection-multiplicity-and-bezout-examples` is a cross-category reading-order edge from the owned scheme-theory page to a planned algebraic-geometry examples page. The frontier policy permits such unbuilt cross-category prerequisites. A trace of all 29 items on the page and their actual dependencies and citations found no reference to that page or to any item from it, so no mathematical claim is unsupported.

No rejection exposed a defect owned by another group, so no group-f cross-group alert was appended.

## Fatal repairs

Every row below is `confirmed_fatal`; the type is the adjudication
`defect_type`, and the digest is the full pre-edit `itemHashGuard` recorded in
the adjudication and defect ledgers.

| Item | Type | Pre-edit guard | Repair |
|---|---|---|---|
| `cex-constant-presheaf-not-sheaf-disconnected-open` | logic | `e9c10b64d0108e556e14f1e944a5cd2c38fb56833b9438304a819c7a21c5280a` | Assigned the terminal singleton to the empty open, so the two local constants are compatible there and still cannot glue over the disconnected union. |
| `cex-finite-type-not-finite-presentation-nonnoetherian-base` | logic | `a9c9f37fbc8973de3a270bbe5f4bdfadb44797d5811eaef9b6f3b0bbe86432d3` | Proved every relevant localized kernel is non-finitely generated using $I/I^2$, closing the local finite-presentation issue rather than relying only on the global presentation. |
| `cor-depth-lemma-unequal-depth-equalities` | logic | `87e3f139ad811da9a454245875dda0bdcb8f497b4d03227a3d398500e378027b` | Replaced the false adjacent-depth implication $a>c$ by the correct strict gap $a>c+1$. |
| `cor-flat-local-depth-additivity` | logic | `e641344689a9a0348c1592641de6c65ea3926504b9817c835477360f6b28b748` | Replaced the asserted spectral-sequence equality by the source-grounded induction on base and fibre depth, including the depth-zero case. |
| `cor-grassmannian-smooth-irreducible-dimension` | dependency_citation | `2b2a7d113f86fbd9c0e4064bc352cc990b9c10c75ce94be2b577856b8b6afcc6` | Added and used the Plücker closed-image theorem needed to call the chart model a projective subvariety. |
| `cor-homogeneous-polynomial-becomes-hyperplane-section` | other | `e3cd60dc960d540c962bdf2e6a44ba7bfa2ca7215d54c886bfd4aca65d6044fd` | Added $n\geq1$ and $F\ne0$, excluding the target-$\mathbf P^0$ and zero-linear-form boundary failures. |
| `cor-one-regular-system-of-parameters-implies-cohen-macaulay` | dependency_citation | `926d1a557be734800e6438f5a67370110f84c8793a05b19b0158e8cc9463b7de` | Added the module dimension-and-parameters dependency and used its module SOP length convention. |
| `cor-polynomial-extension-preserves-cohen-macaulayness` | dependency_citation | `2fd5e489b8f0e83ddf0310218f4620bda1ea84c2fb841d44c117b30cf42ff7e2` | Reproved the result at each prime using a base regular sequence and, when the one-dimensional fibre requires it, one polynomial fibre parameter, following Stacks tag `0AAI`. |
| `cor-projective-variety-product-exists` | dependency_citation | `717ed92fef95075784b2391e6d0ad7a790e4340e3dc8724d5d9a55286f23aa37` | Constructed the product on the Segre rank-one locus, proved the projections and chartwise inverse are regular, and verified the universal property. |
| `cor-segre-veronese-embedding` | dependency_citation | `12190afb81551facf68db15241cd3b55e8e96741af38d0415230983d1f2955da` | Cited the newly established projective product/Segre embedding rather than inferring an embedding from closed image alone. |
| `def-base-change-classical-varieties` | dependency_citation | `7bea1cdbef6f851f525a6a1cf86d97a779c32bed3711902bae27b950508c225a` | Made the equalizer a candidate construction until its pullback universal property is checked in the actual classical category. |
| `def-classical-algebraic-prevariety-regular-maps-and-varieties` | other | `fa1ccc77cfa0c23b965b898ecf199bb10cf8fa85625aebe3df97119d3e3e7558` | Required regular maps to respect the fixed $k$-structure, eliminating non-$k$ automorphisms of the one-point affine variety. |
| `def-incidence-correspondence-varieties` | other | `572dd5e4f3c628c46d7f6b76938c1cfac0ab142e54d31dc5bc26ae1f7ec8cade` | Retitled the objects as incidence loci and defined them inside constructed products without prematurely asserting variety structure. |
| `def-product-varieties-universal-property` | logic | `0ecd01e24e67e4486dfb80581eaa418784d29bd9bba2c939bb6d46633094ddd1` | Removed the temporal “already-defined” restriction and quantified the universal property over every test object in the category. |
| `def-scheme-over-base` | other | `53601bb002f8affe437942f5e41ebbba9a1cc304d6095d15d6e7967deab62659` | Defined relative affine space over a non-affine base by gluing compatible polynomial spectra over affine charts. |
| `def-segre-map` | other | `34ae5b879f74600eec4b76ae1abb330a82547b521fa948a0114ca021689863fd` | Defined the early Segre construction as a map on the Cartesian product of projective point sets, avoiding circular use of an unconstructed categorical product. |
| `ex-cohen-macaulay-ring-with-zero-divisors` | dependency_citation | `88366b5ebebfbf865b02e91e1c9c013f2a6cc0df87573a70fc733198c1e674b4` | Established the ambient quotient as Cohen--Macaulay from an explicit regular system of parameters before applying the regular-quotient theorem. |
| `ex-depth-infinity-zero-module-convention` | other | `6f4d765edb809a7bcd015676b5386e2cfb718e53ce0ac39ffe831bc812206dd0` | Restricted the universal assertion to the commutative-ring, finite-module domain where the cited depth definition applies. |
| `ex-doubled-origin-nonseparated-scheme` | other | `d2ead4eca7d65a4ef704d9816233c407532a9ce5a7232f541c5a22c9ab9b15df` | Assumed $k$ is a field, making $(t)$ the claimed closed origin point. |
| `ex-germs-of-continuous-functions` | dependency_citation | `6d76534b3c7c055d574d2ab2eca19c418abc0176ac78cfe55c9496249d9c2d44` | Added the germ-equivalence lemma that supplies the smaller-neighbourhood iff used in both directions. |
| `ex-non-cohen-macaulay-local-ring` | other | `fd965d7218ff27da3be785c61b2501e70236d6794a8997a736732f9912686222` | Assumed $k$ is a field so the radical and one-dimensional power-series calculation are valid. |
| `ex-parameter-sequence-regular-in-a-hypersurface` | other | `2e753ce7f70986e10d1107fd7eeb03c174420ac67efdfd63aac0a390c5b3f8e8` | Corrected “regular system of parameters” to “regular sequence that is a system of parameters.” |
| `ex-polynomial-rings-cohen-macaulay` | other | `9232e52f9feb76dda59fd638ded10b48af6e38079a127cc5e360495cb76ac27f` | Quantified the field and integer $n\geq0$, including the zero-variable boundary case. |
| `ex-projective-line-by-gluing-affines` | dependency_citation | `90284f0c2990f7b31e62b22f60ec98d9ab1e281049251bd288597be6773dcdb7` | Made the usual two-chart gluing the explicit definition of the notation $\mathbf P^1_k$ used in the example. |
| `ex-reduction-dual-numbers` | other | `1f6251283a470c95430fac876778f9c37abb155fc527755fef87a9ced5b3d1bc` | Assumed $k$ is a field, so the spectrum has one point and the nilradical is exactly $(\varepsilon)$. |
| `ex-segre-veronese-bidegree-two-three` | other | `b3ad3b69229d9e62c41849e4411fc2105769a9f42c487273b234d2a1cdb1c6db` | Qualified the displayed composite as equal up to the target coordinate permutation induced by the independent monomial orderings. |
| `lem-cohen-macaulay-parameter-first-element-regular` | dependency_citation | `f9fcb0c3f00f994576417921da6c60e526eaef5f7145632db219e083a5209d23` | Used the remaining $d-1$ parameters to bound the quotient dimension and derive the contradiction, rather than citing an unavailable exact dimension-drop theorem. |
| `lem-depth-at-a-prime-bounded-by-local-dimension` | dependency_citation | `2b95f973100a9783dd759b3ffac98d23dd039b1638681508176dd5c4fe2619fb` | Added the common-length theorem that identifies an inclusion-maximal regular sequence with depth. |
| `lem-depth-infinity-when-ideal-acts-surjectively` | dependency_citation | `6a87546afb9034bc28895acb9b332c33afb6bf2e36b8efe136be47a120c86af9` | Separated the definition-level infinite-depth assertion from the local Nakayama consequence and put AC explicitly on the latter. |
| `lem-depth-lemma-lower-bound-left` | logic | `7b59c0a1fd6703f6a0381a1d980d51ed4e48a73e4a945841271db254010460c1` | Replaced the ill-indexed negative-Ext segment by the $i=0$ Hom injection and finite partial-resolution arguments for $i>0$. |
| `lem-depth-lemma-lower-bound-middle` | dependency_citation | `87335fda35503b513b84d467d604f02e41788f87f9109dca20ee160877ec8536` | Derived each needed exact fragment from a finite partial free resolution, avoiding the stronger choice scope of the general long-exact-Ext dependency. |
| `lem-depth-lemma-lower-bound-right` | dependency_citation | `ab1d94a88710daf31f1fa82c88de24d180b94345d29cb86d89552dda7a201972` | Likewise used a finite partial free resolution for the required exact fragment, with no undeclared choice hypothesis. |
| `lem-fibre-as-base-change-to-point-classical` | logic | `ef2d22fb8371d30066b30d6eb8d947dc51e6c9857092644a8373b60a769cc627` | Replaced the nonreduced tensor quotient by its reduction/radical quotient, which is the coordinate ring of the classical fibre. |
| `lem-finite-type-local-on-source-and-target` | dependency_citation | `1dbdc8add175e8c065bc01e12508ac05789dbac7a0ac22ecb92bfbb1f7fdb28a` | Supplied the finite distinguished-cover and denominator-clearing argument, matching Stacks tag `01T2`. |
| `lem-germ-equivalence-relation` | other | `5af39b7573ba2c892a97786ec2deb0f071b3b1b23857ee62b807423f5e723a7e` | Typed $U,V$ as open neighbourhoods and $s,t$ as sections before defining the relation. |
| `lem-incidence-locus-is-closed` | logic | `d3aef249955f1b4319ae567a7204f00351ba70dba2850f745da7eb726bc41a22` | Replaced nonexistent global basis coordinates by standard-chart frames and finite stacked-matrix minor equations. |
| `lem-koszul-depth-first-nonzero-cohomology` | dependency_citation | `40ca80a98761149e0ef3aa9d15c751516209a5890710df0ea776b433b4d19b2c` | Added the regular-quotient depth lemma used by the induction. |
| `lem-polynomial-extension-depth-increases-by-one` | logic | `490b1854631ce56dc64f6dea8b9163d687f7398e554d3fcbb3c3c5c663f22685` | Replaced the false classification of support chains by the correct local dimension calculation for $A[X]$ at $(\mathfrak m,X)$. |
| `lem-regular-quotient-preserves-depth-dimension-gap` | dependency_citation | `ff5f255957f9aa1368c41759e71c5f2fcf92e46c34757681909584cce67f007f` | Proved the module support-dimension drop through $R/\operatorname{Ann}M$ instead of applying a ring-only parameter result directly to $M$. |
| `lem-section-zero-if-all-germs-zero` | dependency_citation | `86c5255b27fb72f95f6030d80fcb1a7718a27f8ad992d9116a7effc78c8e0c14` | Added and used the germ-equivalence lemma for the local equality criterion. |
| `lem-segre-map-well-defined-injective` | dependency_citation | `a684cd0592d1ca1e9bb056b08ace578d76791fef59e3454f6491fd3dfc8e6e8b` | Proved well-definedness and injectivity directly for the point-set map, without misapplying a single-source homogeneous-coordinate theorem. |
| `thm-affine-closed-immersions-quotient-rings` | logic | `723bf9639f18934d37bb49bb5eb3d2a0baf30f734d2634ff5b1e4f3009090330` | Replaced the false global-section-surjectivity inference by the affine closed-immersion classification and local quotient description of Stacks tag `01IN`. |
| `thm-affine-variety-product-coordinate-ring` | dependency_citation | `980c4f69d888c69cb628ea90fc8ac441f72228f6915bf73b9d6befc663da5750` | Added the affine coordinate dictionary’s essential-surjectivity input before constructing the tensor-product affine algebraic set and its projections. |
| `thm-classical-varieties-equivalent-integral-separated-finite-type-schemes` | dependency_citation | `05bf9e3abb9613db5a5d013aea322086d3a25805b86f88a741c48cd0609d7fa6` | Supplied the generic-point extension, open-lattice, sheaf, and morphism arguments from Milne §10.158. |
| `thm-depth-equals-maximal-regular-sequence-length` | dependency_citation | `2e6af64f1fb9ab11d55da99f1eddeb0a22dc8e43e52c8f0c4339e1e62c0d268b` | Added the maximal-regular-sequence common-length lemma that the proof actually invokes. |
| `thm-gluing-affine-schemes` | dependency_citation | `768f3082be7235e88c1e4b7c3a6220d279cb86b4132505c9eca7ff6b4faa3c21` | Proved uniqueness chartwise from the quotient-space and sheaf gluing data rather than citing an absent uniqueness clause. |
| `thm-graph-closed-for-classical-variety-morphism` | logic | `096a744a4c49947007143e0f99a9ceff40c893d0c48e5d7a1a0a11683807c3cd` | Defined the graph categorically as the image of $\langle\mathrm{id},f\rangle$ and used product projections, avoiding unlicensed ordered-pair coordinates. |
| `thm-multihomogeneous-map-to-projective-space` | dependency_citation | `7d3e1fd4458c7ba2ea7d87a03bf76c8de002d1f5e3ea3c765b77285aef3f4f45` | Used the constructed projective product and its affine charts to prove regularity of the fixed-multidegree coordinate ratios. |
| `thm-plucker-image-closed` | logic | `d71a7c70dcec3c6816e13fea9e8c29ddfe7d9a74a82ffd5b61d5ad424ed9df32` | Corrected the Plücker relation signs for the fixed increasing-index coordinate convention. |
| `thm-segre-image-rank-one-minors` | logic | `310f4adc977111b5623bdda40693eb1052b5dab0e091e2d3d73e6744f3c29eee` | Proved the rank-one locus is closed and constructed regular chartwise coordinate recovery, establishing the embedding rather than inferring it from injectivity. |

## Sources consulted

- [Stacks Project, §10.163, “Ascending properties”](https://stacks.math.columbia.edu/tag/0336), Lemmas 10.163.1–2 (`0336`, `0337`): supports the induction proving the flat-local depth formula and its Cohen--Macaulay fibre consequence.
- [Stacks Project, Lemma 10.103.13](https://stacks.math.columbia.edu/tag/0AAI): supports Cohen--Macaulayness of the polynomial extension by a base regular sequence plus the possible one-dimensional fibre parameter.
- [Stacks Project, §10.99, “Criteria for flatness”](https://stacks.math.columbia.edu/tag/00MD), especially the local criterion at tag `00MK`: supports regularity of a lifted fibre element and flatness after quotient in the flat-local depth induction.
- [Stacks Project, Lemma 29.15.2](https://stacks.math.columbia.edu/tag/01T2): supports affine locality of locally finite type and the finite distinguished-cover/denominator-clearing criterion.
- [Stacks Project, Lemma 26.10.1](https://stacks.math.columbia.edu/tag/01IN): supports the classification of a closed immersion into an affine scheme by an ideal and the localized quotient description.
- [Milne, *Algebraic Geometry*](https://www.jmilne.org/math/CourseNotes/AG.pdf), Proposition 5.20 (pp. 107–108) and §6.26 (pp. 144–145): support the affine-product coordinate-ring construction and the Segre rank-one construction with chartwise inverse coordinates.
- [Milne, *Algebraic Geometry*, Chapter 10](https://www.jmilne.org/math/CourseNotes/AG10.pdf), §10.158 (pp. 35–36): supports adjoining generic points to a classical variety, preservation of opens and regular functions, and the resulting equivalence with the corresponding schemes.

## Rejudge targets

The engine should rejudge exactly these repaired `itemHashGuard` states:

| Item | Post-edit guard |
|---|---|
| `cex-constant-presheaf-not-sheaf-disconnected-open` | `70d70c7ff60accc38193edb9b36bdab2874b9049e960d327c68f0a8083116cf7` |
| `cex-finite-type-not-finite-presentation-nonnoetherian-base` | `e51eac5440db29f96c56d83fad657aa98b6a3575c291a30d3b043822a79e1cb0` |
| `cor-depth-lemma-unequal-depth-equalities` | `eb5210d38a1019a0c9ee8b7569e4a01007edc1106434357e5a23fa3273f5fd43` |
| `cor-flat-local-depth-additivity` | `32a4cc4f266437b42e7d72554fe0ec9823d1556a70bcacfa9da875ceb67f6847` |
| `cor-grassmannian-smooth-irreducible-dimension` | `de2db3cf8d0336aa23e5197a3dde235804c32c24ede7cb3445174ee4ae7f91b0` |
| `cor-homogeneous-polynomial-becomes-hyperplane-section` | `f98e444c5eda16daa1cfe19bf6319cc936460440767328ab67316dc2c54fc840` |
| `cor-one-regular-system-of-parameters-implies-cohen-macaulay` | `3374575ba91470e14620ad974c3a42aa8493bc32ae40e8be6f3018b5a15ca0a5` |
| `cor-polynomial-extension-preserves-cohen-macaulayness` | `db349f4c044a303f913fb28511587c0b704eb41a9897a1e4a2d25403ce59e3dd` |
| `cor-projective-variety-product-exists` | `97662b4d1f9264be61fcc36356581ad547261650b40a4bdd1052de630885204f` |
| `cor-segre-veronese-embedding` | `f180b2b9b77336abb97c433159a334d7ae49fb020fb9ecd641d50e88855f2dbc` |
| `def-base-change-classical-varieties` | `28b027d81d56231b10f6dc1852fb8f6aeac22be18cf6fb82cf4fc68abff9d40e` |
| `def-classical-algebraic-prevariety-regular-maps-and-varieties` | `bc7ff2d5527c443db782d35ecef586893ecfbdd3f2c3afe0461392e2f292962b` |
| `def-incidence-correspondence-varieties` | `96ef856eb8e74e0d79ad7f1b294304d9233eda56744c9a4c09370de4a1ec57e6` |
| `def-product-varieties-universal-property` | `de00866c146725d5661576fc1167ef708b3f0559a4a40d85485b9878647347cf` |
| `def-scheme-over-base` | `b1850077efd390441aa31b9e137ce0c456d18385cb67441cc053e32bac223d07` |
| `def-segre-map` | `7e7935b0fb7b000c13d2ddcb013e23817b42f1270945860184c95b2d0bb2b1a4` |
| `ex-cohen-macaulay-ring-with-zero-divisors` | `adb883cc71b6bf7554bad3cf209878b67a236a32cfea48a547e17fa33f69912c` |
| `ex-depth-infinity-zero-module-convention` | `95b964e885b4e065283c3163597dd0a02698d4194a9fb9b2fd2f111f37859e9f` |
| `ex-doubled-origin-nonseparated-scheme` | `71781675225f375989e7d50fc505be54d20e73b3c6131f2e2827e7ed24438823` |
| `ex-germs-of-continuous-functions` | `f7d8852de65947e86eea409aeb332d9b573c24b49e4a2101d7a91ba30eecdc95` |
| `ex-non-cohen-macaulay-local-ring` | `1f0ce53abc51d544e72792631a1d930b2dd41999789ec7fd435c26063b88b0ba` |
| `ex-parameter-sequence-regular-in-a-hypersurface` | `606d099d25b6f8cfd496d3d4f315aedfec38fd2cfdbd0229f81b8e0c42656b1c` |
| `ex-polynomial-rings-cohen-macaulay` | `f5d09b40e2627ee396db9511a7397ebc28c8f9294250744a4d2cc5ab374fdfa2` |
| `ex-projective-line-by-gluing-affines` | `0d27073c0a4f0ede6fd6a89251afe6307caa058ff5019dc82a22ad01a5974726` |
| `ex-reduction-dual-numbers` | `c58d6453601f5c36625cd512bf21c0ab530f6148561e4cdd2ba2d61eb3f0d38f` |
| `ex-segre-veronese-bidegree-two-three` | `99cf5ffc0aedcbd6af7680221de04129f22348fec4b186f423ff7cc71d9e0ee5` |
| `lem-cohen-macaulay-parameter-first-element-regular` | `720b7d65cce40c16eda9de3150cc154388193412d76020363656e1589cc475a2` |
| `lem-depth-at-a-prime-bounded-by-local-dimension` | `460eabe3d157e47806976a61c2b96aa6a2824dea97bcdf3abf788a9eb0290183` |
| `lem-depth-infinity-when-ideal-acts-surjectively` | `a5183171cdb688eabfee7c9673b37a077aa2f1007c4ce6debb90d6125c1d6a32` |
| `lem-depth-lemma-lower-bound-left` | `a9e032d42c469a439f578d59e53987ab52e7db36807e20a78320bb88bb6b54aa` |
| `lem-depth-lemma-lower-bound-middle` | `cb367d864e0c2a098a7d9d5b3b3d2acc4cf2410ccc10390fdf342aa8b260adf0` |
| `lem-depth-lemma-lower-bound-right` | `781fd813eef8dc6460ce17ea1608ea96406231b67404983ab63417467b1fa1ae` |
| `lem-fibre-as-base-change-to-point-classical` | `a553e90630edff3e0e179dcfce3d44266c161dc54f46f074a1b4278bc034c35b` |
| `lem-finite-type-local-on-source-and-target` | `0e42b5e49b1c32179c8a118ec8608abc55854471ee40d7ae0fcd4bd480e31b9b` |
| `lem-germ-equivalence-relation` | `7c2c82921dfb9988c4e1979a7ba024f087523e296a1f19fd6e751ac3a9b4aea0` |
| `lem-incidence-locus-is-closed` | `8a780d921f5176b2a08060bb77795183510469651d5e06bd84aff148fdcd5ddf` |
| `lem-koszul-depth-first-nonzero-cohomology` | `ec1221f2db943a8796792b7072d3dc4231c20dee853263d76a5ed23e0e00fd5c` |
| `lem-polynomial-extension-depth-increases-by-one` | `6f0b0776d254e16908632bf4546f6b7e5d1d45bb94aae99168e6482ce87cbb87` |
| `lem-regular-quotient-preserves-depth-dimension-gap` | `4b722e594f1094f2d48cd88a168b42c49d88a41530a2aeb22e4157f951aa5be8` |
| `lem-section-zero-if-all-germs-zero` | `d619ab0c6846511d8cfe2dedceb113a797c9f4b87a25b27bd13d8f7322b898b4` |
| `lem-segre-map-well-defined-injective` | `30c34d71da5e9e3da91c491a3a8e6586d31fab0ef20b3764c6378cdc6a2dac35` |
| `thm-affine-closed-immersions-quotient-rings` | `789ef0678a1cbea41f83bb93c54267e6b14f2c6027857414151dc56ff7a1dda9` |
| `thm-affine-variety-product-coordinate-ring` | `e5ba06aa35ed5c6fc64fba6e4d6a653ac745c59d12291f5e48bd73576a415148` |
| `thm-classical-varieties-equivalent-integral-separated-finite-type-schemes` | `278cdc1c6c80565fdbac43b23162bbe5362f86b3c68e7522f274ce1e7f990640` |
| `thm-depth-equals-maximal-regular-sequence-length` | `b4bcae230a8c990002f5bd44ea6f6d83ec55a47a860a914292e35f9de115f17f` |
| `thm-gluing-affine-schemes` | `d9f7c317b087d6d2de1e652ed5d58a7fd6890b1b7cea90e59779a3c9529bc820` |
| `thm-graph-closed-for-classical-variety-morphism` | `aa09dbc6309152fc3202df5fa14a2a8fb6c12089dcb2040607065b30157745fc` |
| `thm-multihomogeneous-map-to-projective-space` | `7762362d26e0c24d0cc19fccf517bb4bef155c867d459b3286e485a62f9be65b` |
| `thm-plucker-image-closed` | `91de6fd16eb83557dd7128e77c26366810273a278e40593e87e06f19427ab51d` |
| `thm-segre-image-rank-one-minors` | `accadd40191b702c71b15a50289d4d64d35705dcffe1615a9e6761178ed1e7fe` |

## Validation

- Reflowed all 50 repaired items.
- `node tools/tsx-run.mjs tools/precheck.mts <50 repaired items>`: 40 proof-bearing items checked, 0 failing. The remaining ten definitions/examples have no selected phase proof body.
- `node tools/rendercheck.mjs <50 repaired items> --quiet`: all 50 passed strict frontmatter parsing, delimiter checks, and real KaTeX rendering.
- `node tools/citecheck.mjs <50 repaired items>`: 50 scanned. Its sole heuristic warning mistakes the words “reflexivity” and “transitivity” in `lem-germ-equivalence-relation` for an appeal to order axioms; the argument uses equality, so no order dependency is appropriate.
- `node tools/depcheck.mjs --quiet`: no cycles, all references resolve, and no draft item occurs on a published page. Its 475 warnings are repository-wide existing multi-home/orphan/citation notices; the command exits successfully.
- `node tools/tsx-run.mjs tools/articlecheck.mts`: all five narrative articles clean.
- Exact-hash review found 56 unique group-f adjudication tuples, 50 fatal and six closed; all 50 fatal items differ from their pre-edit guards, all six closed items retain them, every fatal has exactly one frontier-32 group-f defect row, and all three reader warnings have a current owning-group disposition. The later `not_defect` row for `s8a-27abc7a018265ebf06ec2b1a` supersedes its earlier page-level classification under the ledger's append-only latest-row semantics.
- `node tools/defect-ledger.mjs validate --run frontier-32`: 598 run rows checked, 0 errors.
- `node tools/defect-ledger.mjs check --run frontier-32 --adjudications research/frontier-32-judge-adjudications.jsonl --reader-decisions research/frontier-32-step8-alert-decisions.jsonl`: 598 run rows checked, 0 errors.
- `node tools/step8-guard.mjs ... --baseline pre-step8`: PASS; all 192 run-wide changed items are licensed by exact fatal evidence or another accepted repair authority.
- `node tools/step8-scope.mjs check --run frontier-32`: PASS after the later `not_defect` disposition for reader alert `s8a-27abc7a018265ebf06ec2b1a`; the materialized scope has no unresolved group-f alert.
