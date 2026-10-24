# Quantum Computing rendering audit — lane 03

Reviewed all 57 assigned published items and all 81 receipt-listed PNG tiles. Every tile was opened individually with `tools.view_image` at original resolution. Assignment source hashes, frozen snapshot hashes, local HTML hashes, receipt-listed PNG hashes, and coverage are recorded per item in [lane-03.json](lane-03.json).

## Results

- 57/57 item titles and complete ItemBodies reviewed against frozen snapshots and local HTML.
- 81/81 tiles opened at original resolution; no hash mismatch or gap in tile coverage.
- Receipt totals: 0 KaTeX errors, 0 TikZ diagrams, 0 diagram failures.
- No confirmed rendering defect or standalone clipping.
- No publication status or item/application files changed.

Wikilink block styling sometimes moves neighboring punctuation to its own line. That matches the supplied HTML/CSS and is recorded as expected renderer behavior, not a defect.

## Optional diagram candidates

These are editorial suggestions only, not reported rendering defects. Their exact frozen source line numbers, rationale, and proposed wire/maps are in `diagram_candidates` in the JSON record.

1. `alg-qc-controlled-t-clean-ancilla-circuit`: a three-wire (a,b,t) circuit drawing of the stated chronological word, including the repeated block and clean ancilla return.
2. `thm-qc-square-planar-surface-code-distance-and-path-count`: a small relative square patch with rough boundaries, primal Z row, dual X path, and cut crossings. The proof is complete without a figure.

## Exact coverage and image attestations

Each item below lists every receipt-listed tile basename followed by its SHA256. In `lane-03.json`, each matching tile record additionally has `individually_opened_original_resolution: true`, capture y/height, and both expected and observed hashes.

- `alg-qc-controlled-t-clean-ancilla-circuit` — `alg-qc-controlled-t-clean-ancilla-circuit--01.png` (659392a709b497c2d9ea917038ded3fb6c9ba861b3ded71379acafc972192b45)
- `alg-qc-stabilizer-exact-simulator` — `alg-qc-stabilizer-exact-simulator--01.png` (c8c25c195da12151e1c01d6a6763bd5651c823c44381643de0e6cb0cf2ce3675)
- `cor-qc-cyclotomic-prime-norm-solvability` — `cor-qc-cyclotomic-prime-norm-solvability--01.png` (e82f80532b06e737880471f8f4b19c57a8aa0d3081ca1e1dfdb51fd238c3d16f)
- `def-qc-bloch-coordinate-map` — `def-qc-bloch-coordinate-map--01.png` (113b6aa2585d6443b492bbf731ecddceb84a528145e8ac6522036120f19ef558)
- `def-qc-classical-control-and-measurement-circuit` — `def-qc-classical-control-and-measurement-circuit--01.png` (fd35ddce8344f916ce46a0fbf2dfb3eb635a019d0a5333d5bad4e4fdb1fb1fb7), `def-qc-classical-control-and-measurement-circuit--02.png` (4c7214e2d8ef469482a67456eb7dc5c1d57ce1a7cb7231be01630b0f4aff79a3)
- `def-qc-completely-positive-map` — `def-qc-completely-positive-map--01.png` (4a7e3a5f81f4238a49f9b00a6acd5b99c99de3e548057b8cf520870dc8fcd98f)
- `def-qc-dirac-notation-conversion` — `def-qc-dirac-notation-conversion--01.png` (b6c5390aebeeef86e87bb90df774001a980cb0b5630bf8f5e223020af7cc123b)
- `def-qc-finite-outcome-probability-kernel` — `def-qc-finite-outcome-probability-kernel--01.png` (67f08f4b145eefe534f8c1ec22a59f7ff5a74add6f656c7100ecb3c555d19a37)
- `def-qc-inverse-unitary-access` — `def-qc-inverse-unitary-access--01.png` (ef4287478725b98dff8453b4d009ee56d11f8e78da16143f8d2c3d2514d7cdc3)
- `def-qc-noise-channel-model` — `def-qc-noise-channel-model--01.png` (97f39fab538652f6fef6e9a1483807494a484ea1ae0ce83d0b6f29d6fcbbc667)
- `def-qc-projective-chord-distance` — `def-qc-projective-chord-distance--01.png` (8c91004074edb00e3403c7c946e4cc81fc761871a1e766878260f091d170460a)
- `def-qc-qubit-and-bloch-representation` — `def-qc-qubit-and-bloch-representation--01.png` (20c660642b7c07c26546fa1a40ba0d573af3fba46a6212ee7c73a7452b8cc15b)
- `def-qc-stabilizer-tableau` — `def-qc-stabilizer-tableau--01.png` (933a3d953e0a317de62598a4a3585d3cab2762249f32eacdd2d0ce3275aead8b)
- `def-qc-tqc-fusion-multiplicity-space` — `def-qc-tqc-fusion-multiplicity-space--01.png` (24e6c9cc46199235b28447324ed419e2b63d0cd59ea6ef914480f309f98ddfef)
- `def-qc-tqc-ribbon-modular-data` — `def-qc-tqc-ribbon-modular-data--01.png` (15c6212a5986ad8f27389c7dde753be04d932263c7fb0499dbf44317bb32aa4f)
- `def-qc-trace-distance` — `def-qc-trace-distance--01.png` (c69391f2361bd9c1416372a2ff7608c99fbdb1de5260ca0a383fc9e4879cad2e)
- `ex-qc-bqp-promise-off-domain` — `ex-qc-bqp-promise-off-domain--01.png` (ef9e5ffef55ce9686cdfec2a1b017b2eedf3d060167a0ded0df9459994a66b3e)
- `ex-qc-orthogonal-state-trace-distance` — `ex-qc-orthogonal-state-trace-distance--01.png` (9ee6708ee8ae30974f2f292d9e3a6ebb51b484b43f5b4fab91e2c33caaa99ee6)
- `ex-qc-surface-memory-bound-hypotheses` — `ex-qc-surface-memory-bound-hypotheses--01.png` (75b2c58aa99225e98ae05f7d08b4c967f7f8ac7a1233f337868b6a3df71d3523)
- `ex-qc-two-level-unitary-synthesis` — `ex-qc-two-level-unitary-synthesis--01.png` (c5b4bb944cce0c940ede7ae79ff496ecdce75a94f867422bd8e7550f85c7585b)
- `lem-qc-borrowed-bit-multicontrolled-x-linear` — `lem-qc-borrowed-bit-multicontrolled-x-linear--01.png` (77f9aad5d712c3004bf2c212cd08f9ed0dd34f10421cef4d392cdc1206a4c9c8), `lem-qc-borrowed-bit-multicontrolled-x-linear--02.png` (f9c202a47c45b42e5b4366dafdca155c2f2f18d2780d6300e35243a2dbb92d91)
- `lem-qc-clifford-t-entry-ring` — `lem-qc-clifford-t-entry-ring--01.png` (f91e781e2209bb48bc1069cc161ed667697dc226147437ae167052b6fe0e997d)
- `lem-qc-countable-compact-null-union` — `lem-qc-countable-compact-null-union--01.png` (58b2e2afb3ed1b233c9fe5ee68c35c775abf516d09bf73814f4c5d45b1e51407), `lem-qc-countable-compact-null-union--02.png` (30e116c4babbee2e2238394a538a586de3a3440f5f12fb076eb486e7c8689f18), `lem-qc-countable-compact-null-union--03.png` (08d2cf188f352102f6177557992c5d617c346c8f493cfd5524323655992cbb6a)
- `lem-qc-disjoint-layer-order-independence` — `lem-qc-disjoint-layer-order-independence--01.png` (342e47eceb1084a086fa511986adacad56f182bccfb6e534d29bbd26319e5b3c)
- `lem-qc-finite-isometry-unitary-extension` — `lem-qc-finite-isometry-unitary-extension--01.png` (35eab7deea95221961a85b849b922da643183338009ade8b2ccaca01bf0dfdbc), `lem-qc-finite-isometry-unitary-extension--02.png` (1984d8856e81344558926da618d23ed85fc915a9608bdff7b93e6f85970e5eba)
- `lem-qc-hadamard-pauli-action` — `lem-qc-hadamard-pauli-action--01.png` (e57c591000aaeb86abf1a497889c8beb7a284c827cdbefd4d8248d0e534c619c)
- `lem-qc-linear-isometry-preserves-inner-products` — `lem-qc-linear-isometry-preserves-inner-products--01.png` (382dca4437a125468dea16a231c6aa53c93df2e172fb8a6eed476c036c39cbff)
- `lem-qc-modular-square-root-expected-polynomial` — `lem-qc-modular-square-root-expected-polynomial--01.png` (44982cd7d3a93d6e4f9aafe604adb73d48a7ebe0582ce35f04307bfe9c9348a7)
- `lem-qc-orthogonal-error-syndrome-projectors` — `lem-qc-orthogonal-error-syndrome-projectors--01.png` (a0ff9b573c41eba1c6dde35aa9b528c76e96ee913cdbca48384961ec5f9402b3), `lem-qc-orthogonal-error-syndrome-projectors--02.png` (4aea950fd7c1e374bf9c8e41acb8471f06fde3cfe39450abef5eefa0c4b35a67)
- `lem-qc-prefix-norm-rotation-identities` — `lem-qc-prefix-norm-rotation-identities--01.png` (74836f8bda4b20d796bc921ad9509508cec24857eeeb8f588c5cfa7edeaf878e)
- `lem-qc-rz-prime-model-stopping-bounds` — `lem-qc-rz-prime-model-stopping-bounds--01.png` (03ff039bb164fe55fc49826ed9a342934ffc6f92120cce357856e9ffafe0b6ed)
- `lem-qc-stabilizer-maximal-isotropic-self-dual` — `lem-qc-stabilizer-maximal-isotropic-self-dual--01.png` (f692ef9c18eee320c08da9d62e67882bd74c8748c12f5abc784bf3252a378c9a), `lem-qc-stabilizer-maximal-isotropic-self-dual--02.png` (1c731e79c8252a1a21e98c30118161bd840d9a48c756bd9ad75d430890c5fdbf)
- `lem-qc-tableau-clifford-update` — `lem-qc-tableau-clifford-update--01.png` (9fcf0ea7dae0938692b4601b4e6ac63821bee71e8b312d2580208d56492ebb29), `lem-qc-tableau-clifford-update--02.png` (68e2f0aa88128a171f28d7a6a7a13674c089c1867ffa728b1c5feacc8a62cbfc)
- `lem-qc-tqc-fibonacci-b6-path-projectors-and-artin` — `lem-qc-tqc-fibonacci-b6-path-projectors-and-artin--01.png` (c0f4f72566e251606e5610fa9cf52d49d2cf5a76344a7a4831715745e461abb5), `lem-qc-tqc-fibonacci-b6-path-projectors-and-artin--02.png` (31a34668f01a791e41e3409472e65ca6826d73837444dd7596dd79d6b265ff56)
- `lem-qc-tqc-toric-incidence-ranks` — `lem-qc-tqc-toric-incidence-ranks--01.png` (5065edf568d795c2cb744e73ff40213dfba7c9513b02ab0b4c71360039d495b5)
- `lem-qc-uniform-family-size-bound` — `lem-qc-uniform-family-size-bound--01.png` (12916b6a957e8365dd26b05b9820e1a99e88ca3c0a5c03ed1efb1afbda12766a)
- `prop-qc-controlled-t-clean-ancilla-correct` — `prop-qc-controlled-t-clean-ancilla-correct--01.png` (e8a3aae2f8c38fe681aa863c5f7e16755bbe3083604f5216d4fb2b0960b73c6c), `prop-qc-controlled-t-clean-ancilla-correct--02.png` (21ecb53a333dae765825e01bf2b33f6651829587e5dcab46ca8de2a131599bb2)
- `thm-qc-bloch-coordinate-existence-and-uniqueness` — `thm-qc-bloch-coordinate-existence-and-uniqueness--01.png` (2588613d7f01b3da99a8eabff89b0862b09d55afa84061f45948f638b865cc9d), `thm-qc-bloch-coordinate-existence-and-uniqueness--02.png` (d0e86e43c46f4720abde658f622a426e3c696a53bf596b5993d0ce67cfb20165)
- `thm-qc-choi-trace-preservation-condition` — `thm-qc-choi-trace-preservation-condition--01.png` (a59ba7f6c2d701e3bbddf8a649d00ca60e54878c07405cf60b2b684055bb3fd2)
- `thm-qc-computational-basis-orthonormal` — `thm-qc-computational-basis-orthonormal--01.png` (47e6e8a24d348319578e63d49f3ad1d77e41fb611dfa5376ad71f186289280ae)
- `thm-qc-deferred-measurement` — `thm-qc-deferred-measurement--01.png` (92d02bcacb85a394b481ab822e58b76d532aa29ba1fceebe47d2649c85a96add), `thm-qc-deferred-measurement--02.png` (e78f3f4c994be23c55a7b36f975cea2e6f723d220e908d708fab51201ff13a46), `thm-qc-deferred-measurement--03.png` (386dc003964f2bfc248dfcb1bb223c84ce205feaef8ec3d51772fe76821c2b4b)
- `thm-qc-ensemble-barycenter-is-density` — `thm-qc-ensemble-barycenter-is-density--01.png` (018c3a49a6f75d92a9e834cf8284d93ff395ff7e773e0817d3f3f0cc3f12726b)
- `thm-qc-fidelity-purification-characterization` — `thm-qc-fidelity-purification-characterization--01.png` (c090c38dd00abbde0e09d8dadcf4dfd4e36ea9bc5c9ae009c3bfd1b8fe8a530b), `thm-qc-fidelity-purification-characterization--02.png` (606d47bfc056fcc23a2310af043592a23a88db84c7fae0fc267640e18e6a74ca)
- `thm-qc-full-column-rank-matrix-image-has-dimension` — `thm-qc-full-column-rank-matrix-image-has-dimension--01.png` (549c12b040848bc0772cb0244d0303afafe847d98b231e77ebc7882cbfc83ed7)
- `thm-qc-hermitian-pauli-phase-criterion` — `thm-qc-hermitian-pauli-phase-criterion--01.png` (76b06aa1c5f486c972dd18741f4b5a9545f9a96dab56b3586d8386916315672b)
- `thm-qc-knill-laflamme-necessity` — `thm-qc-knill-laflamme-necessity--01.png` (b280542feff1d7a9ab64d21b5619829bbd35d6054bf8556e67ebc46e9cdf6ba0), `thm-qc-knill-laflamme-necessity--02.png` (3d32c906f90303a46e45ab55c046812b4fe66619276dcdc4f7d22009db229499)
- `thm-qc-one-qubit-euler-decomposition` — `thm-qc-one-qubit-euler-decomposition--01.png` (8e1262b120d753d9c5b297243209b8af29ed5c41e35bf1c3e3b2f22635adbc99), `thm-qc-one-qubit-euler-decomposition--02.png` (471d29f665e8e4040a8f2a728cb1736a48881c7173f0079213f771c82bef8541)
- `thm-qc-pauli-product-and-adjoint` — `thm-qc-pauli-product-and-adjoint--01.png` (ba17d09a4dcfd18d9a37bf41805a15eeda6ba10178bba5255525a9a58fba562b)
- `thm-qc-purification-existence-and-unitary-equivalence` — `thm-qc-purification-existence-and-unitary-equivalence--01.png` (19446fa4964929073f9a979548295bf95c6584dfc03861175017aec2f8253987), `thm-qc-purification-existence-and-unitary-equivalence--02.png` (33f24716d346907fd2e88a70c30ef5e9f1820043b7953c1638e6c3fd4e45f7a6), `thm-qc-purification-existence-and-unitary-equivalence--03.png` (19366fbbb1acee1f2e6f28f5d73b4299a04a49d2365409412eb491c52e200963)
- `thm-qc-reversible-xor-oracle-unitary` — `thm-qc-reversible-xor-oracle-unitary--01.png` (359cc600d3394931491ea9edfe12fd316a1ad5bfe261df7d0be6c0105cb20767)
- `thm-qc-square-planar-surface-code-distance-and-path-count` — `thm-qc-square-planar-surface-code-distance-and-path-count--01.png` (c15ce747ccac5b40764677dac1dc212ca103c5f9cb4b9dfbfb3b3a94a726dfe8), `thm-qc-square-planar-surface-code-distance-and-path-count--02.png` (186cfcdf27692d28e53af158f70a16c16f1178b7baf5b0947606733ea60a23ce), `thm-qc-square-planar-surface-code-distance-and-path-count--03.png` (2e702e28de8808be7d57759c7b0e538367d24bddbcbe09678efde3c8686b7b5c)
- `thm-qc-state-preparation-rotation-level-upper-bound` — `thm-qc-state-preparation-rotation-level-upper-bound--01.png` (1244f5abc2d5a78299a75ebe423410306a54a07e217b4fcefaa8df0a2bcc6c07), `thm-qc-state-preparation-rotation-level-upper-bound--02.png` (a56950ecabc8af0f05cd88a55077c73066f444451d775efa7e7c44a10f4e7913)
- `thm-qc-tensor-map-composition-and-adjoint` — `thm-qc-tensor-map-composition-and-adjoint--01.png` (42ec47232a49c9c4b4bc3d52e32a04abd16389f60ad36777dd5fd63af95d738e), `thm-qc-tensor-map-composition-and-adjoint--02.png` (e67f7c08689604a05ddf456251593877756b7b0313d916f2fa657f63767bd541)
- `thm-qc-tqc-fusion-multiplicity-space-is-hilbert` — `thm-qc-tqc-fusion-multiplicity-space-is-hilbert--01.png` (dc88e2c0bc562e30984ae82515289cd88bf3ddd9a8c8d78d1bd60aa4adc4421d)
- `thm-qc-tqc-toric-distance` — `thm-qc-tqc-toric-distance--01.png` (83cf661bc2ba751510e901aa87421598f2e28e19b052a5f43a5fca24cd92a540), `thm-qc-tqc-toric-distance--02.png` (8b5bfab70961d3124ac63638c2da6127199c7db929bb20ace9e69a9e8078f3bf)
- `thm-qc-trace-norm-spectral-formula` — `thm-qc-trace-norm-spectral-formula--01.png` (74acca1e63728ff12d8c2d4fbefa2d0925fdadca181ef1ee144d4292a763902e)
- `thm-qc-unitary-group-compact` — `thm-qc-unitary-group-compact--01.png` (187012ff5377b1d37e5116cda56aed19d1b0b3635c231b2654c36783103156c8), `thm-qc-unitary-group-compact--02.png` (6e84d5d05d8ecf089267b8de9b670c82f4287fcd1dc7e05c52f7edf8284bd884)
