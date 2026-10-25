# Category Theory visual audit — lane 01

## Scope and coverage

Reviewed all 110 assigned ItemBodies and viewed every assigned PNG tile through `view_image` at original resolution. The report is local-only and read-only; no item content or publication status was changed. The frozen snapshot and current-source digests match the assignment for every item. Screenshot paths, exact SHA256 values, dimensions, and per-tile view declarations are recorded in [lane-01.json](lane-01.json). Assignment SHA256: `2b742dbdb254b8184b2b1bd88079fe4defb18615ba0a3c3eb16baeede93f318a`.

Every captured tile was opened, including all continuation tiles. The visual pass checked formulas, diagrams, full proof text and tails. Reported parser receipts are supporting metadata only; they did not substitute for visual review. Technique banners are intentional uppercase CSS, and internal wikilinks are block-line by design. No clipping was reported without local pixel confirmation.

## Confirmed rendering defect

### `thm-the-connecting-morphism-exists-and-is-unique` — lines 76 and 82

- **Kind:** literal TikZ markup rendered as text.
- **Bound source/snapshot:** `items/thm-the-connecting-morphism-exists-and-is-unique.md`, SHA256 `8346be796df1cc2c677be0ffd8bc4f44806bd0c003dda860b7dd9220caf447d3`; the frozen snapshot has the same digest.
- **Visual evidence:** [`thm-the-connecting-morphism-exists-and-is-unique--02.png`](screenshots/thm-the-connecting-morphism-exists-and-is-unique--02.png), SHA256 `351c2eb69a667d603f115dac37eee621a627989334219729b6846fa874b82b6e`, 1200×822, viewed at original resolution. The prose proof steps show raw `tikzcd P \arrow...` / `tikzcd A′ \arrow...` source strings.
- **Comparison:** the correct statement diagram at lines 38–41 renders in [`--01.png`](screenshots/thm-the-connecting-morphism-exists-and-is-unique--01.png), SHA256 `f3538e30c3569c823893a524c4e6bb9f1e52bc5aaca6750fd1b5bb8461f24e8b`, 1200×1400. Those source lines use standalone multiline fenced TikZ.
- **Repair direction:** put each proof diagram in a standalone multiline `tikzcd` fence, using the working statement block pattern.
- **Diagram check:** the statement’s two short-exact rows and vertical maps `f,g,h` agree with the squares and subsequent pullback/pushout constructions. This finding is a render defect; no mismatch in the displayed statement diagram was found.

## Optional diagram candidate

### `ex-the-nine-lemma-verified-on-a-diagram-of-cyclic-groups` — lines 34–42

The source defines a concrete 3×3 commutative diagram in prose but does not draw it. An optional figure could show top row `0→0→0→0→0`, middle and bottom rows `0→Z/2 --i→ Z/4 --q→ Z/2→0`, with `i([x]₂)=[2x]₄`, `q([x]₄)=[x]₂`, zero vertical maps from the top row, and identity maps from middle to bottom. Each square commutes; each column is `0→G→G→0` with middle map `1_G`; middle and bottom rows are the standard short exact sequence. This is a clarity aid only: the prose supplies the data and no diagram defect is present. Screenshot: [`ex-the-nine-lemma-verified-on-a-diagram-of-cyclic-groups--01.png`](screenshots/ex-the-nine-lemma-verified-on-a-diagram-of-cyclic-groups--01.png), SHA256 `50fd107a1eeefbe57ead307924b999c78dc6844a96605ec008340193e308c26e`, 1200×1400, viewed at original resolution.

## Displayed diagram checks

The rendered short five lemma diagram has two rightward short-exact rows and vertical maps `f,g,h`; the stated monic, epic, and isomorphism conclusions concern the middle map `g` as expected. The cartesian-square criterion shows the square with projections `α,β` and compares it to the sequence using `(f,-g)`; arrow directions agree. The nine-lemma example’s prose diagram data are internally consistent as described above. No confirmed mathematical mismatch in a displayed diagram was found.

## Item coverage IDs and source SHA256

All entries below are published, with current source and frozen snapshot matching the listed digest. Per-screenshot hashes and dimensions are in the JSON report.

| ID | Source SHA256 |
|---|---|
| `cex-a-bijection-of-hom-sets-that-does-not-exhibit-a-cotensor` | `17c74b37e41644b1895afd414650dd33affb71c1a2e338236e3e69ac308ea4c5` |
| `cex-a-full-subcategory-limit-can-differ-from-ambient-limit` | `6a0aa72ad7310c5c0e70955f7514cf989f7df754e4636a515f73e8b1143a198c` |
| `cex-a-subobject-lattice-need-not-be-distributive` | `ca8c289b42ec64b00c42ce3064f1e40495b4be854ff5c4feb64827ce45824c83` |
| `cex-equivalent-categories-need-not-be-isomorphic` | `0f01ea489aef35d53e387ef0fa571adb3c05ff1bcf9f6413e36ea09054ed0811` |
| `cex-the-braid-category-is-braided-but-not-symmetric` | `683eede013bcf1798d00fda3163d742c948ed92e4fc25c47004084150eeaa7e5` |
| `cex-two-morphisms-agreeing-on-every-member-need-not-be-equal` | `a60bebf78b378538285c5ba0e803fb0799e00b6300b33eb448b69a97771fa4ea` |
| `cor-a-morphism-of-short-exact-sequences-with-invertible-outer-maps-is-invertible` | `f61cf3c88adeafc2b6cb3592f63c37a017ce508a9896d0a796d9768043fd6217` |
| `cor-any-adjoint-between-additive-categories-is-additive` | `4d87533d598863cb4849935cce879e155438fd99a5408bf31793471531935e72` |
| `cor-equalizers-are-monic-and-coequalizers-are-epic` | `8044e0e39066fd6c1fabd7afe251ccc0b9799143f7cedfc94913e124207f7b8b` |
| `cor-in-a-preadditive-category-the-coequalizer-of-a-parallel-pair-is-the-cokernel-of-their-difference` | `d8fee9cb6f89da0db6b52a930bddeff82fe6d70a23186c2e47245e5156bcc011` |
| `cor-set-weighted-limits-and-colimits-exist-over-a-small-index-category-in-a-complete-or-cocomplete-target` | `f0b3ddc2782ccc20543a33a47e522e5b225b75bec2bba8ef7b86b1086d7c835b` |
| `cor-the-underlying-ordinary-category-is-an-instance-of-change-of-base` | `c0b87e3dfc23e41a32cb4860769078aff3f2d86b132d765b0dad9471258fbe66` |
| `def-abelian-subcategory-and-exact-embedding` | `d7c86fba56dd33a933d57b217af08ba6cf7a786231805df680cf8e0f4d9aa9a3` |
| `def-braided-monoidal-category` | `8489c093a0e79f61ae245e9ee3ba41841b69e5c53b4e631378ce273cd7e75d1e` |
| `def-category-with-zero-morphisms` | `338c74843f919ca5f1344dd443c3001548c8dcb14c0459c1b16372fdbdc6fe5c` |
| `def-conservative-functor` | `04efc8c3b465488a7c9ad3e2e24c889bd8a6c6dc047b5646d4920ca2901377ca` |
| `def-end-and-coend` | `0963933da03b0373565377653e0232b5087048e3d86d375a9f2fdf8b2669b7bc` |
| `def-exact-sequence-and-short-exact-sequence-in-an-abelian-category` | `1c3f13501474ba2fad7e221ee8c16f27bc7577009841dcc6f85f79fb9ef530b0` |
| `def-functor-category` | `91485e1f53547a305b2c38af1a4afad53c76c28241c795ab1b836448cb6ddd41` |
| `def-hom-functors-and-hom-bifunctor` | `cfb6dc555ffd13316b3a50be7a2a479d7720a8dedb28370362c8bc8cb8c6699d` |
| `def-k-linear-category-and-k-linear-functor` | `ffefcf9c36f57c18989959847652a41c985efd86939680343afd6cf54d44263c` |
| `def-locally-finite-k-linear-abelian-category` | `186155fccea276e94f0469c1086d0b25a99541f3cdca6ed77ce9b020c4e1523c` |
| `def-monomorphism-and-epimorphism` | `49a2098e46f8785c88849b91a9ec90787a50a23b1a75095d2ac4927243cbd434` |
| `def-pointwise-kan-extension-by-preservation-by-representables` | `1a1e938a9e786ea344a60ccd1fdb7f5bfb5a900038fd0567d21f51543a435d79` |
| `def-pullbacks-and-pushouts` | `01782698d06f84b644248036321b367b2fcf57d6fde6fe995d6dc25ce3a305a7` |
| `def-skeletal-category-and-skeleton` | `512bd1194859df63b63107fb6e57f47c25c3753e376f5bba95936d32c5bd254a` |
| `def-strict-two-category` | `0994de7431e819723fedd71dd2f58e9ae348c6ee48c42b0f60c44dadcc2268a6` |
| `def-the-axioms-ab3-and-ab3-star` | `7af1832aaa3a1f7fd96a893c3f476f6144f29252cde02f44b899fe6d12cd4522` |
| `def-the-freyd-axioms-for-an-abelian-category` | `2b256a6b78dbb05201f0f484bf00dd97ffb248f48362c79a219e90ff6ae9c7e1` |
| `def-topology-induced-by-an-ultrafilter-algebra` | `7e80a271477b6216303516ab15aa49fdb6815b5c2bebf4de7280acd277bdf0a2` |
| `def-well-powered-and-co-well-powered-category` | `4482d1ac43c879e008da37565bb4b81c2ac5dcc0cbb1b107a24b8bdd6c097807` |
| `ex-a-member-chase-verifying-monicity` | `1daeb5358c9236157abb6790d5fcb797eca378b2e6d2e8c0f2cbe7e73fae64f0` |
| `ex-a-split-coequalizer-in-set` | `10e66adab7fd0355c9d85937325a7d431d9d2931ea6bc657d602a8e6d0b37e25` |
| `ex-an-ordinary-element-as-the-member-from-the-integers` | `af2885ff6afd36a50bb192e289ee4f31cc9a5f1e88679d64f2ca75dff5e30578` |
| `ex-density-computed-for-a-presheaf-on-a-two-object-category` | `8772221104239090b252774db42d36f05d7382b721eb3573f21fc6d9b8624e11` |
| `ex-frobenius-reciprocity-for-group-representations` | `869afa3685154e7043e73d2446a59d2322604f160f44091e6e61a671b046f3ea` |
| `ex-left-kan-extension-along-a-full-subcategory-inclusion` | `dae6d7ff1481f1bdf11f1c3f15aaa25cf3a0bf1ee7613268eb0d14d4f794dfea` |
| `ex-products-in-a-poset-are-infima` | `f41f958951fd366df047e261f5ae0d712c8ac953bc901509a9a8bb6cd6c7905b` |
| `ex-subobjects-in-set-are-subsets` | `9b0968d4fcca9127f4b992936f30d77078a7a87fdd746bd4c004b75cd0a6dcc8` |
| `ex-the-closure-operator-monad-on-a-topological-space` | `5ae97beffa217e99ab8f31054218fd55d793ff0ebf5681be28b768933b8a53d6` |
| `ex-the-evaluation-family-is-dinatural` | `48b1bbc7678fb6aea2d84dd2549ec886d8a3b31f0f4e7056206e954e8b10e793` |
| `ex-the-group-action-monad-and-its-algebras` | `db89bd90e877e293c3d305a228d7d0b09e1fc7d5f7a74a77e8914df6ad7d09cc` |
| `ex-the-nine-lemma-verified-on-a-diagram-of-cyclic-groups` | `b10fc864d6e99b334dadb1a4f51bda677feac6dccb88a044a6ce2ecb2efe6d2e` |
| `ex-the-snake-lemma-applied-to-multiplication-by-an-integer` | `c8a1234550cc19cdabfff9b129a369577eb32b76c30d1b0ec1457ac1b3609db2` |
| `ex-the-third-isomorphism-theorem-checked-for-abelian-groups` | `1dd72ae8a89a781317658aaa818f28bd969c2bce932718aedf76aac7d5a04869` |
| `ex-torsion-free-reflection-computed` | `2f77a0bb330871094181d1050e9b3ef6146f394abf8aea65476b85924f3af517` |
| `fs-a-braiding-suffices-to-define-a-trace` | `7abc827eefe0af6f9de33bb19fcc7ba3eadd1e328c563c2ebdf895a56578725a` |
| `fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad` | `296c5d77c7178cad59b33f9eaaa9d9d3a1ed2a5226db0bb813d52124c0a52331` |
| `fs-a-u-split-pair-is-a-split-pair-in-the-domain` | `1e2ce7160fe4bc7f92b6f26954221e4d2490020f332a0a464868c948fe6aa167` |
| `fs-dinatural-transformations-compose` | `6e042e9230a017e0e1dc9fd586e205d77889dd203a14001191b24f2f748c238c` |
| `fs-every-end-exists` | `c7dc690a2b843c345f9e513f6fc331094bda802d8700b075e1009658465b940e` |
| `fs-every-monoidal-category-is-isomorphic-to-a-strict-one` | `f725c8a136bd2386b3f3ba267fb4f34297ace53a2764771a1ec2f29c9835790d` |
| `fs-lan-along-a-fully-faithful-functor-always-restricts-back-to-the-original-functor` | `0e18e99ab25dbc495742e7b6c1b4db895e1dba0875cdfcf8d071c27406f0dbb9` |
| `fs-strictification-requires-the-axiom-of-choice` | `a2e891927b4ec8475bef7c19a55ce7b4b6312e3977c05e08c387af850badddc3` |
| `fs-the-hom-set-form-of-an-adjunction-needs-no-size-hypothesis` | `e4f982ccdb1459a5cefb1c3a58cc443d63e04f877c85af9f3e5aedba597fb180` |
| `fs-the-strong-enriched-yoneda-lemma-for-a-large-category-constructs-the-whole-enriched-functor-category` | `3d1e1ef727a78beb00bbb03bd15bcab084b8748b0f96d2d026137aece2644f1b` |
| `lem-a-continuous-map-of-compact-hausdorff-spaces-is-an-ultrafilter-algebra-homomorphism` | `d87224b7ee894a4f1154df9f31e32af6623083bcb90eed86234e8b837e734f5f` |
| `lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor` | `083c3d0e44a8b7da86930c3d50267900db3067bb8506a931c9cea3327984d5a8` |
| `lem-pullback-direct-image-inverse-image-beck-chevalley-for-sets` | `0c34321053ec3be9f4104b93db779f83dc57764f9ddb3fd3eeadf37191893638` |
| `lem-words-satisfy-the-free-monoid-universal-property` | `6acecde18417e16659718acdb485e0ef3f1f33c0782e96dc090f9330243bddc1` |
| `prop-an-adjoint-equivalence-is-an-adjunction-with-invertible-unit-and-counit` | `2ad4d2fdc69b42b546dde509673c7e14292ddc7998f083016c9ae93f38893794` |
| `prop-created-limits-exist-and-are-preserved` | `eb9d8d886b29950725b868e777b8c24ade738ca1db36de581a30c8eb7da375fb` |
| `prop-groups-and-homomorphisms-form-category-grp` | `e5e3dc6d87d88baab14eafd6e2485e9f70e7f8c5f25cf37d206094146c2e17c1` |
| `prop-preorders-as-categories-and-monotone-maps-as-functors` | `b0ebbf19a7540d0034115f08ccd8bb7dac9cf134299cafb560e7aeb8995878d1` |
| `prop-the-zero-morphism-of-a-preadditive-category-is-the-neutral-element-of-its-hom-group` | `9641034fc0a83e048445d1efa8260aa10e78284ddcd5cd3b979f1e0bb33098d0` |
| `rem-conjugates-preserve-isomorphisms-but-arbitrary-mates-need-not` | `4fd44f94bfa58d517925ea5f1d70ce29b30461917a7cf9b93781447a13d3f8d9` |
| `rem-orientation-and-notation-conventions-for-ends-coends-and-twisted-arrows` | `7d8710e029425f2cad7f01314a6e2e7fc8f9747e30cb8ad04ee95d19d58dadea` |
| `rem-the-boundary-of-the-fusion-category-development` | `a83f9d77b3fbc0e97a98eeeed1eb118545eef7629f9fadc777c6e781e4bbd687` |
| `rem-the-left-right-naming-clash` | `60040579e4baa8134bda10101388e66f5109756943ddf293d6f38e6f51e3b7b1` |
| `rem-the-universal-properties-of-kleisli-and-eilenberg-moore-are-schematic` | `00395592f57eda38509a2d6564a5181bc8a49e1f0b60a5559abf6348e3e125c6` |
| `rem-why-the-diagram-lemmas-are-not-proved-by-the-embedding-theorem` | `66f29058d4a00b835e05bc899de2dbe3b2e390eb485316400ac0066dc4468094` |
| `thm-a-category-enriched-in-categories-is-exactly-a-small-object-strict-two-category-with-small-homs` | `c646e7b6bbe18ae3b6ab3541ecdf038a7a09b544ba3f2b8a9c9a1789e7a5d2b9` |
| `thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object` | `849c289aac1c1e9e31523dcb2907c548124887dba9f109b76134720f40ad76e0` |
| `thm-a-finitary-monad-on-a-complete-cocomplete-locally-small-category-has-complete-and-cocomplete-algebras` | `e965d3c3aa12ce1a4c2d6f26468b22962785f8c9550d2283e61a3057f492a0ac` |
| `thm-a-left-or-right-exact-functor-between-abelian-categories-is-additive` | `bd1eba34877c1555978fa8f921a96b57406ff54f47fa87120e2c4d2b1919c712` |
| `thm-a-morphism-factors-uniquely-through-its-image` | `b545621ed15339a0c60f0be240d091250779ccae38ad16a3e26f052128be18fb` |
| `thm-a-reflective-subcategory-has-every-colimit-the-ambient-category-has` | `07815c63154f82d1f0a78ec06bf0f503cfd210c35232feab86f769136363a938` |
| `thm-a-square-is-cartesian-exactly-when-a-short-sequence-is-exact` | `8ae5fbbac705a14b34b0b8e90ec2af9d61f8ed1ea14adfabbe7e3ba47bbce2a5` |
| `thm-abelianisation-is-left-adjoint-to-the-inclusion-of-abelian-groups` | `faf2f6a5215b8d48f3bdc6953d34122a3a4a233f72ef1c9c734004f25bbfc215` |
| `thm-an-additive-category-with-kernels-is-idempotent-complete` | `55595651880e17652c278cedab9630238cec3089c854393ce5331e226735d6e8` |
| `thm-an-object-is-projective-exactly-when-hom-out-of-it-is-exact` | `3b32f24257cd736df05a9f8fb95b51971dc935c5a17fbdda879efee1e2f6b397` |
| `thm-category-theoretic-duality-principle` | `1545d7748cedd85cfedb277812ea2fa500ecbb69b4d0f845343892a4b0eb4d2e` |
| `thm-coextension-of-scalars-is-right-adjoint-to-restriction-of-scalars` | `5d686142f4e4e744f174e74aa353d11991fc952b89c81542acecb7c9644c2c50` |
| `thm-degenerate-exactness-criteria` | `a1c511bccb8737a8cfc32a647637b3c4686e83fb6594343c2dd37045b52f4e95` |
| `thm-eckmann-hilton-argument` | `456ab8b016852f55fe488d590ea3bcc8b859a8741fe6c3ac12bc2e676065f3cc` |
| `thm-evaluation-is-the-colimit-over-the-slice-category` | `b34d393b10b80ea3cb234e092a0c6fc01886b44387dbe698fd2b11f4d11bfc80` |
| `thm-existence-of-pointwise-kan-extensions` | `d04f9de389bfb6bea8f30de61215e0312c71438448909a19cd1436a2783e7009` |
| `thm-fubini-for-ends` | `b08cf6b19b697f8ff1e93860c5c63b5c7e8b8c20b82c5adf68a465ebc650d716` |
| `thm-images-commute-with-tensor-products-in-a-multitensor-category` | `cd8cb5203dc3d07c4724670228f02f5cf15feca943219821b32be374400e22bb` |
| `thm-in-the-presence-of-the-symmetry-axiom-one-hexagon-implies-the-other` | `d2112c395545f552b327acb7cc6bd4eb3718941713d93ba05f6408ecef927081` |
| `thm-lan-is-left-adjoint-to-restriction-which-is-left-adjoint-to-ran` | `503c0708a973906947d4836a00f20c0dac7a13567f5624246cbc80b603f8e22b` |
| `thm-mac-lane-coherence-in-the-canonical-map-form` | `6b717692577122ebd4be13c96385a871957f722dc478c73c4142e6006300bb08` |
| `thm-monad-morphisms-on-a-fixed-category-form-a-category` | `975d007424d8a7bab7d3636432fa1d12ac4b10615c6508c70a197bce5e6a0cd3` |
| `thm-naturality-of-the-adjunction-bijection-is-transposition-of-squares` | `43e393f34f3d9bf93bb23e4ea268230b297d74c5816904d9318aa1bdfddc75ad` |
| `thm-projective-object-characterisations` | `a4a764d78759b1412f6bf543d4209a12ecf83472b5cf928bd3f367a12cfb5364` |
| `thm-saft-yields-the-stone-cech-adjunction` | `e8c9eb501bf155dbba22603bdc6d55d8ac94772ea43ef311b5d5e3ec75e46a6a` |
| `thm-short-five-lemma-in-an-abelian-category` | `0c5a7c89d3f5a732af03ed219f46ad2f8e04d4044c139a534c749f573b4d7490` |
| `thm-splitting-lemma-in-an-abelian-category` | `e094b2cea17cbe2fa514271b08349033970662abe8d22e48dd80bbb041904e33` |
| `thm-the-braid-category-is-the-free-strict-braided-monoidal-category-on-one-generator` | `f6afa411a40becc4dad5e7510360b1df2a988a83ca791c27afc6b49d04150540` |
| `thm-the-codensity-construction-satisfies-the-monad-laws` | `e3e7e8a7bcdf26fa5b055128ee4d0ccc78367cd527207cb7669b32e2a35d09d0` |
| `thm-the-connecting-morphism-exists-and-is-unique` | `8346be796df1cc2c677be0ffd8bc4f44806bd0c003dda860b7dd9220caf447d3` |
| `thm-the-eilenberg-moore-adjunction-induces-the-given-monad` | `80326db47f6ba92f67e144ce6fca9c63d8dde81276589057ee102746e0f0d56b` |
| `thm-the-free-module-monad-and-its-algebras-are-modules` | `f84b7e6e1733498b649641a2b5cbd7a98bdb12c4451c533b8e91935e428290fe` |
| `thm-the-inclusion-of-a-reflective-subcategory-is-monadic` | `c4416b9cad47ff6f631f88c51f11601489afa3816f1677647a61d42d80b4e25e` |
| `thm-the-left-unitor-of-a-tensor-product-is-determined` | `b00b775722403d00220955ff6cf41602b80b4812a88c1ad7801e8b6d68c8f927` |
| `thm-the-pentagon-and-the-triangle-are-independent` | `8c6115a21915cebd77df6e86585c9b7ff2783aa404ba94de596a4ae9bff2ca97` |
| `thm-the-splitting-lemma-follows-from-the-nine-lemma` | `663b9442aa0ab61099cb8916a360f63522ec98695cb7e00e57512d9d97eaf768` |
| `thm-the-ultrafilter-monad-is-a-monad` | `0b55fd4a8d65bef20a851f406bbb0877859eed704091fe679409b62bb9bc032f` |
| `thm-top-is-complete-and-cocomplete-and-its-underlying-set-functor-preserves-both` | `d538f5c6b782e46520990ec09a7ab14552cd0b4093da750883c98f325cd609e8` |
| `thm-when-a-category-is-tensored-every-limit-in-it-is-a-conical-enriched-limit` | `7019ccf4c602e77bd38410e72ef8657c6e88b68622667181c7f959180092605a` |
