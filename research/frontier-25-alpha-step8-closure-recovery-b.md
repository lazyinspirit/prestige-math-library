# frontier-25 — Step 8 closure recovery, group b, rejudge round 1

## Summary

Handled all 49 exact current rejection tuples owned by group b: 35
`confirmed_fatal`, 12 `confirmed_nonfatal`, and 2
`false_positive`. Only the 35 fatal items were edited. All 14 nonfatal or
false-positive items remain byte-identical to their judged versions. No
published item or other group's content was changed, and no cross-group alert
was needed.

## Exact outcomes

| item | context_sha256 | outcome | disposition |
|---|---|---|---|
| `cex-an-absolutely-continuous-finite-measure-can-have-an-unbounded-radon-nikodym-derivative` | `fac5fe6d82406700ea40a913cd8aa6ca2f895b7e967d08c37b8af117bf6b27ce` | `confirmed_fatal` | Restated the density fact with the required absolute-continuity hypothesis. |
| `def-truncated-singular-value-pseudoinverse-at-a-declared-threshold` | `be8a57e2d2ace088c06bd65aa57bd28aaeeaaab1486a93ffec5d8a4bda7581b2` | `confirmed_fatal` | Introduced the base field and the matrix dimensions before defining the transposed-shape truncated pseudoinverse. |
| `cex-two-radon-nikodym-derivatives-can-differ-on-a-null-set` | `c4a3b063c74d966ee437f53166367659a34567d2be2abf83e8bcc715c69676c8` | `confirmed_nonfatal` | The indicator integral over the intersection with the singleton is immediate; no edit. |
| `prop-full-column-rank-pseudoinverse-formula` | `75bc4ddca1da79ba420b2ba4dcf1200052dd7fa848dbd0ee6972f47adf6dbfe2` | `confirmed_fatal` | Restricted the statement and Given block to real or complex matrices. |
| `cex-x-inverse-dlambda-on-zero-one-shows-finiteness-is-needed-in-the-epsilon-delta-criterion` | `d1a8e48badb3ee44c1b3a11417a1975138a811f48c4e3adc35f73a32b244483e` | `confirmed_nonfatal` | The sigma-finite exhaustion is immediate from intervals bounded away from zero; no edit. |
| `cex-the-figure-eight-is-an-immersed-image-not-an-embedded-submanifold` | `d71738ff56ec40ea56b591b8778f5f83f29901a60a5a0d6fd686cabae0707932` | `confirmed_nonfatal` | An embedded one-manifold is locally an interval, so the crossing obstruction is immediate; no edit. |
| `def-power-iteration` | `01aa568c20401afce978a3e07759c7e7db4ed1597247624e0dc0be3d237a0b23` | `false_positive` | The rejection text does not identify a mathematical or documentary defect; false positive, no edit. |
| `prop-pseudoinversion-is-involutive-adjoint-compatible-and-unitarily-equivariant` | `69e1c1868c162624559b685037d7389adbf09a71ba1e4ef6673edbd1202f032c` | `confirmed_nonfatal` | The omitted direct Penrose-equation tag is a routine one-line verification; no edit. |
| `cor-finite-complex-measures-admit-integrable-radon-nikodym-densities` | `aeefdd0e77f384c1209b106639cb03e5c0a8cf5cf132001d03d9c9fe7ac369fb` | `confirmed_fatal` | Added the complex-total-variation input and constructed a common finite exhaustion explicitly. |
| `ex-a-cylinder-as-the-preimage-of-a-circle-under-projection` | `ed58fb1bf394380036638f813435030fa0c8d3cf3e5c1c2375d962eac7c0efae` | `confirmed_nonfatal` | The displayed Jacobian immediately gives the required submersion; no edit. |
| `prop-tikhonov-regularisation-has-singular-filter-factors` | `443904ca245b3ea869d72c5edb130a003145bff4f507aa2821e2fa9638d62bb9` | `confirmed_fatal` | Quantified the real parameter and imposed lambda > 0. |
| `ex-a-regular-value-with-empty-fibre` | `b2b82334f705e6099648b063e639c75c60d524ec96eb9ab2a2bed7a5f52653c1` | `confirmed_nonfatal` | The missing fact tag is documentary and the vacuous regular-value argument is correct; no edit. |
| `prop-truncated-svd-and-tikhonov-are-hard-and-smooth-spectral-filters` | `4ec916e9dffb92e5cb2365eec11d8683dbc1a818ddafa274b29045a456aaade9` | `confirmed_fatal` | Introduced the right-hand side b in the statement and Given block. |
| `def-subspace-iteration-and-the-dominant-invariant-subspace` | `6be70fc25b7e30e65cc3ef57606e555303228a1f0c7162559462ca6aa8cd6070` | `false_positive` | The rejection text does not identify a mathematical or documentary defect; false positive, no edit. |
| `ex-a-piecewise-quadratic-distribution-function-recovers-its-density` | `f8b57e3cd4ec235cb6b41f010dc9adf326fb610b6d8bc72eb607a4cca8e53e0b` | `confirmed_fatal` | Added null-set integration and established absolute continuity and the common exhaustion before naming the derivative. |
| `ex-coordinate-inclusions-and-projections-as-immersion-and-submersion` | `eac80cbbb5490fdf9c96bf312540296ea84be801818f9b25714b2be666cf7d6d` | `confirmed_fatal` | Made the differential characterization biconditional so both conclusions are licensed. |
| `ex-the-chain-rule-for-radon-nikodym-derivatives-on-zero-one` | `57d0a65664349d6e2fcf1a1086ebfea713e9f9bb34a319ee0e1e17698f70c924` | `confirmed_fatal` | Established all derivative hypotheses before invoking the chain rule. |
| `def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift` | `bb2601e7bdaf1261dd4a88d34524c48c8a95f91c2b2a69756eb9d168b4300c18` | `confirmed_fatal` | Restricted the definition to real or complex matrices. |
| `thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution` | `33f228959f64abf0fa876b41cd497201d74298b6a69306012295a9d6076b9e7c` | `confirmed_fatal` | Separated the pseudoinverse image identity from the adjoint range-kernel identity and cited both. |
| `ex-the-density-two-x-on-zero-one-is-the-radon-nikodym-derivative-of-two-x-indicator-dlambda` | `a67c3554fd1247d0caf81dfdb400b476a2f3e247b0c349bdf42e5836c96ddd49` | `confirmed_nonfatal` | Absolute continuity follows immediately by integrating over null sets; no edit. |
| `ex-the-graph-of-the-sine-function-as-an-embedded-submanifold` | `8a4e3d056ba67f6d138844cc84c6fd3943233f64b6fc78b648ca913022076ba6` | `confirmed_fatal` | Restated the graph theorem with its dimension conclusion. |
| `thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces` | `3db2a9f55d62a7d0d42b8760f274fef37b9bc9a70f619b67f246eed145190e75` | `confirmed_fatal` | Distinguished the m-by-m and n-by-n rectangular singular-value projection products. |
| `ex-the-special-linear-group-as-a-regular-level-set` | `ad8085a091fa0bf295eec4992168f071c693f97e7fd0f70440e10ac5c763f314` | `confirmed_fatal` | Restated the regular-level-set theorem with its codimension conclusion. |
| `thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b` | `02417c07560a1d302027a2ab03a9e63e889cb6b54beff88393f80621325a6171` | `confirmed_nonfatal` | The converse kernel-perturbation calculation is elementary from the displayed affine formula; no edit. |
| `ex-power-iteration-on-a-diagonal-matrix-displays-the-eigenvalue-ratio-rate` | `54dccb12c5d48ce938eb0da3e4992d486c6e4c82de4291202432143930d55f48` | `confirmed_fatal` | Preserved the cited theorem’s n >= 2 hypothesis. |
| `fs-a-regular-value-must-belong-to-the-image` | `694547a07ffd7415aa56f44087e10a5d7102b03b0dbaf8418aac143c6df9fa7f` | `confirmed_nonfatal` | The missing fact tag is documentary and the empty-fibre refutation is correct; no edit. |
| `thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss` | `e46ca767c54775af907cb6353e33b1bf1caaf2a7bf5cf1e83643eeb068848d06` | `confirmed_fatal` | Defined each singular-value pseudoinverse, verified the Penrose equations, and invoked uniqueness. |
| `fs-the-image-of-every-immersion-is-an-embedded-submanifold` | `45792e31418ddd14847ebaa3844eaaffb2d4bd0487f20b700c1cf19fd866047e` | `confirmed_nonfatal` | The Euclidean derivative-to-immersion bridge is immediate from the definition; no edit. |
| `fs-absolutely-continuous-measures-always-have-bounded-radon-nikodym-derivatives` | `20133d02dc9a46affaa9afe9bb7d27d861086b1fa64667da80d247579645a51f` | `confirmed_fatal` | Restated the density fact with the required absolute-continuity hypothesis. |
| `fs-every-measure-is-absolutely-continuous-or-singular-with-respect-to-lebesgue-measure` | `ba422abce07acf0c2369ac632ffbd07d49a780c439ee616641ea63836e73cd51` | `confirmed_fatal` | Added the Lebesgue-decomposition existence theorem and an exact interval-increment fact. |
| `thm-tikhonov-regularised-least-squares-has-a-unique-minimiser` | `71cd9aba1bf273b85c3a10b2e23d33a10722e0aaff6ccee35a5eaf5989492c12` | `confirmed_fatal` | Restricted the field to R or C and made lambda real and positive. |
| `fs-the-epsilon-delta-condition-characterises-absolute-continuity-for-every-measure` | `914583609afbf27dd6ed3278cc98dce35193ca4b42298ef2eec5939fb576bfa7` | `confirmed_fatal` | Added the absolute-continuity definition and the null-integral implication. |
| `fs-the-radon-nikodym-derivative-is-a-uniquely-determined-function` | `798ba97883bdfb17c7f8a28d3544b8d46b930b0d4685cbfb5fb512702ef76bb1` | `confirmed_nonfatal` | The indicator-integral identity used in the refutation is immediate; no edit. |
| `fs-the-radon-nikodym-theorem-holds-without-sigma-finiteness` | `60e9c40e878f76509cef358cbd55db63fbc3c33d1c0d769fecd4c52e91f3c900` | `confirmed_fatal` | Proved counting measure is not sigma-finite using interval uncountability. |
| `prop-the-smooth-structure-of-an-embedded-submanifold-is-unique` | `4cb791ff16cd50451ee87cbd16c7df33f9ea6a23674730cc01798048e204c0cf` | `confirmed_fatal` | Added the inclusion-embedding result and proved existence as well as uniqueness. |
| `prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration` | `50f0a1f368ea08fdb23b6969a1915190b2edcaf4fad0ceab6729cb02e2039c7b` | `confirmed_fatal` | Added the real and complex spectral-theorem facts establishing diagonalizability. |
| `prop-the-radon-nikodym-derivative-is-integrable-exactly-when-the-absolutely-continuous-part-is-finite` | `bc8c51876b3b5897c054f37c58ecd65d0e074752bdafa3bd777abf92823b6d8e` | `confirmed_fatal` | Added the total-variation definition and the required partition estimate. |
| `thm-constant-rank-theorem-for-manifolds` | `afd5d7d960ed2255c5a790180563ccee353a840add4e15e5c52967863970be98` | `confirmed_fatal` | Replaced the hidden finite-regularity bridge by explicit smooth source-coordinate and tail-component lemmas. |
| `thm-eigenpair-residual-realises-the-minimum-norm-backward-error` | `a572128a5f4397b992866877991695ba24a9b8b9d0269f2f9bf266105f259a7f` | `confirmed_fatal` | Introduced and restricted the scalar field. |
| `thm-additivity-of-radon-nikodym-derivatives` | `c83e2afeb81c54ae07ea7c29ebe1d755e16db4da8f0b893e2453957ae63c49ad` | `confirmed_fatal` | Added the finite-complex density result so uniqueness covers the complex case. |
| `thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition` | `e4c505e7417e382983256c0b2eef5e51bc197bab8600c500c0f0083743c0d87c` | `confirmed_nonfatal` | The finite-measure exhaustion required by the cited theorem is immediate; no edit. |
| `thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence` | `d25d3f06d6deaf6d5b2ddd19acecad87134b8516f607f88bbcaca871d2db0cb0` | `confirmed_fatal` | Introduced the scalar field and matrix in the statement. |
| `thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form` | `425bb2620878b72368f304da3fc5af2cc1f3008b875bda8c49d47ad0f79de4d8` | `confirmed_fatal` | Handled n <= 2 explicitly before the reflector construction. |
| `thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue` | `9476d9a8ba1999dd8fa222cdbed09060c116103ef0c776ed6a14c302dd1d9648` | `confirmed_fatal` | Introduced and restricted the scalar field. |
| `thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures` | `d7af6dabea49f3566b8ab3150e583318343a86a536ebbba52d536816a3cde27e` | `confirmed_fatal` | Restricted the recursive replacement to indices n >= 1. |
| `thm-subspace-iteration-converges-to-the-dominant-invariant-subspace-under-a-spectral-gap` | `a63202d8db70569c10ec766cf4b6bf24e0cc885ac22cb1be8b7e22ab36b72331` | `confirmed_fatal` | Introduced the field, dimensions, block size p, and starting matrix Q_0. |
| `thm-polar-decomposition-for-signed-and-complex-measures` | `01401f11ba345d13f80b7da96726537986d4eeda5a1db9ccccd896563aca7828` | `confirmed_fatal` | Corrected the signed-measure decomposition from a spurious minus sign to additivity. |
| `thm-unshifted-qr-converges-under-separated-moduli-and-leading-minor-hypotheses` | `92226365f1ba1d78aee12e5f6e6697ffbc4d4caef8f193ab4de644a20a5668a1` | `confirmed_fatal` | Required a nonsingular spectrum and the positive-real-diagonal QR phase convention. |
| `thm-wilkinson-shifted-symmetric-tridiagonal-qr-has-local-deflation-away-from-ties` | `cf4b125d4131466b74840071228cd03f2545d5edfebb9c8da4f50e00cdfb5188` | `confirmed_fatal` | Required the standard adjacent-row Givens QR construction in the statement and cited fact. |

## Fatal licensing and repairs

| item | adjudication guard hash | exact defect row | repair |
|---|---|---|---|
| `cex-an-absolutely-continuous-finite-measure-can-have-an-unbounded-radon-nikodym-derivative` | `b53577e78fc058689c4f4d126d0e71546277076b9eb0efd5ea75311f7e3c0369` | `frontier-25-b-step8-r1x-001` | Restated the density fact with the required absolute-continuity hypothesis. |
| `def-truncated-singular-value-pseudoinverse-at-a-declared-threshold` | `896b67e3494a7fea9d9d42af1189032e434b93769ba31d2976a37b1607c748ad` | `frontier-25-b-step8-r1x-002` | Introduced the base field and the matrix dimensions before defining the transposed-shape truncated pseudoinverse. |
| `prop-full-column-rank-pseudoinverse-formula` | `ba07e9aec3d0f2e0913f6af9558fe3f2fde915f22f71b98b92116bef48b7302e` | `frontier-25-b-step8-r1x-003` | Restricted the statement and Given block to real or complex matrices. |
| `cor-finite-complex-measures-admit-integrable-radon-nikodym-densities` | `4a71e8213b992f0ebe5bf1e32a6ebf46c961b07b267b63dad600483c8ef3b674` | `frontier-25-b-step8-r1x-004` | Added the complex-total-variation input and constructed a common finite exhaustion explicitly. |
| `prop-tikhonov-regularisation-has-singular-filter-factors` | `e50bb2d87b4582d2c218de09ae3baf5b8fbbbe4b46e75d236dc0af54e2325460` | `frontier-25-b-step8-r1x-005` | Quantified the real parameter and imposed lambda > 0. |
| `prop-truncated-svd-and-tikhonov-are-hard-and-smooth-spectral-filters` | `abdf5859ca7f4ba99286eabc0da227e13d8d9b22d4e8ff88b1b37d39e2590ffe` | `frontier-25-b-step8-r1x-006` | Introduced the right-hand side b in the statement and Given block. |
| `ex-a-piecewise-quadratic-distribution-function-recovers-its-density` | `dfd1106658891b910c02ecf7bdcc76665c0bfcf98aae1b4e9baa1abb6a215502` | `frontier-25-b-step8-r1x-007` | Added null-set integration and established absolute continuity and the common exhaustion before naming the derivative. |
| `ex-coordinate-inclusions-and-projections-as-immersion-and-submersion` | `28f6fea5e00239abd968a1b2898d615aadcb76e4ea8b0e356b9bccdd99bdac97` | `frontier-25-b-step8-r1x-008` | Made the differential characterization biconditional so both conclusions are licensed. |
| `ex-the-chain-rule-for-radon-nikodym-derivatives-on-zero-one` | `bdbb02d85188ec871704c8cd1c43cc4422b8c394052c27944fd843648560026e` | `frontier-25-b-step8-r1x-009` | Established all derivative hypotheses before invoking the chain rule. |
| `def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift` | `fd168d885141df781dba992d85fb401428dcb5d19e376987f0e4b50275266aa0` | `frontier-25-b-step8-r1x-010` | Restricted the definition to real or complex matrices. |
| `thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution` | `48307d52414a65263097147dadc19d4308abefeb384c96fc107ff4538e42b8e3` | `frontier-25-b-step8-r1x-011` | Separated the pseudoinverse image identity from the adjoint range-kernel identity and cited both. |
| `ex-the-graph-of-the-sine-function-as-an-embedded-submanifold` | `71b273d04110bead1726bb8d0259c77ac789aa484c9a8a05a91491bc4104b119` | `frontier-25-b-step8-r1x-012` | Restated the graph theorem with its dimension conclusion. |
| `thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces` | `ddf0121708a80d6d2b8788436aeeadb61f22ca558ac7b90dbc7913510130beb4` | `frontier-25-b-step8-r1x-013` | Distinguished the m-by-m and n-by-n rectangular singular-value projection products. |
| `ex-the-special-linear-group-as-a-regular-level-set` | `fc5f313ccc58ede9f5450add87dc4d9a0995ce6c216ea3346be9a1ade01cc7ce` | `frontier-25-b-step8-r1x-014` | Restated the regular-level-set theorem with its codimension conclusion. |
| `ex-power-iteration-on-a-diagonal-matrix-displays-the-eigenvalue-ratio-rate` | `aa6cbaa2b72f6e452f7139501aebf54074d171911ded441b4114e733304c31ab` | `frontier-25-b-step8-r1x-015` | Preserved the cited theorem’s n >= 2 hypothesis. |
| `thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss` | `615e0d5e9b7a273f484571a3a3b2bd8aad44075d9f81b9d7cc6dad4ff7bb6b93` | `frontier-25-b-step8-r1x-016` | Defined each singular-value pseudoinverse, verified the Penrose equations, and invoked uniqueness. |
| `fs-absolutely-continuous-measures-always-have-bounded-radon-nikodym-derivatives` | `d83bd235b8c11d42a62b80514b9ce0715305232678babd9f161032647bcc7a29` | `frontier-25-b-step8-r1x-017` | Restated the density fact with the required absolute-continuity hypothesis. |
| `fs-every-measure-is-absolutely-continuous-or-singular-with-respect-to-lebesgue-measure` | `84c9c68d46aecb3871c3cff7521fc0bb644b6c6a89491e6703e6bc7bbaf0939b` | `frontier-25-b-step8-r1x-018` | Added the Lebesgue-decomposition existence theorem and an exact interval-increment fact. |
| `thm-tikhonov-regularised-least-squares-has-a-unique-minimiser` | `a1f09076b8f3b56735ae140360fae38545de93d1f8e27112ad0427e5faf3e5e4` | `frontier-25-b-step8-r1x-019` | Restricted the field to R or C and made lambda real and positive. |
| `fs-the-epsilon-delta-condition-characterises-absolute-continuity-for-every-measure` | `407030d2ce04243878385c47a0d2e4b78f93413ee1914dd17da7ca6cdffbf4c6` | `frontier-25-b-step8-r1x-020` | Added the absolute-continuity definition and the null-integral implication. |
| `fs-the-radon-nikodym-theorem-holds-without-sigma-finiteness` | `f94ec54373b35e96f53ee9b839341af2682813af882d95065294403828b7d961` | `frontier-25-b-step8-r1x-021` | Proved counting measure is not sigma-finite using interval uncountability. |
| `prop-the-smooth-structure-of-an-embedded-submanifold-is-unique` | `58145841db9cd12ac9b00890fd67a6bd4bc6e3329fd15b679bdeb9affe51583b` | `frontier-25-b-step8-r1x-022` | Added the inclusion-embedding result and proved existence as well as uniqueness. |
| `prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration` | `c7908275293decc50f35cdeb0188567acc4f4cdd38f64e1b2523326169d236c3` | `frontier-25-b-step8-r1x-023` | Added the real and complex spectral-theorem facts establishing diagonalizability. |
| `prop-the-radon-nikodym-derivative-is-integrable-exactly-when-the-absolutely-continuous-part-is-finite` | `5534b18062000e1a3db359506027fb7656b3c921d9004e8a1a9a623e1b136ec5` | `frontier-25-b-step8-r1x-024` | Added the total-variation definition and the required partition estimate. |
| `thm-constant-rank-theorem-for-manifolds` | `516cde52aada8bb7a6e39089b86e03608190983b34a6fbdc5aad43895308b8dc` | `frontier-25-b-step8-r1x-025` | Replaced the hidden finite-regularity bridge by explicit smooth source-coordinate and tail-component lemmas. |
| `thm-eigenpair-residual-realises-the-minimum-norm-backward-error` | `ac91d4433075b9b3f876f4e47e03cec5f03ea0869615933a531843429346ead2` | `frontier-25-b-step8-r1x-026` | Introduced and restricted the scalar field. |
| `thm-additivity-of-radon-nikodym-derivatives` | `fd61c91093391a1176d3421338974f3134939ad5cd841e28761ab445c6912a35` | `frontier-25-b-step8-r1x-027` | Added the finite-complex density result so uniqueness covers the complex case. |
| `thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence` | `d9c4d5cdbb8a470b200604b1e79eb6c3eae464be57cb9201c791df3e8e14b79c` | `frontier-25-b-step8-r1x-028` | Introduced the scalar field and matrix in the statement. |
| `thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form` | `b9a733be312f39de3a23d8770aeebef4051486eff2502282ff1f1a16ff786ff1` | `frontier-25-b-step8-r1x-029` | Handled n <= 2 explicitly before the reflector construction. |
| `thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue` | `951d17f075ffd05bed4c6a9fe53d5e14a9cb5733024ae190264b13709b461ea6` | `frontier-25-b-step8-r1x-030` | Introduced and restricted the scalar field. |
| `thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures` | `2a30a43d9d8c0c3553e19f0704b1fbcfbd7da3089b3e68516b7f3a36fbaed52a` | `frontier-25-b-step8-r1x-031` | Restricted the recursive replacement to indices n >= 1. |
| `thm-subspace-iteration-converges-to-the-dominant-invariant-subspace-under-a-spectral-gap` | `9d4c964ebcca8ddd4506e9d63811844c50cba4c25052c8f0bd0f6d4880d211b2` | `frontier-25-b-step8-r1x-032` | Introduced the field, dimensions, block size p, and starting matrix Q_0. |
| `thm-polar-decomposition-for-signed-and-complex-measures` | `e121790b74fef15135e4efca61768984ebefea5589fbe918cc414e0b57664ce5` | `frontier-25-b-step8-r1x-033` | Corrected the signed-measure decomposition from a spurious minus sign to additivity. |
| `thm-unshifted-qr-converges-under-separated-moduli-and-leading-minor-hypotheses` | `e5f0e5f109254841e39ec3b515315488b8c8cb2bf9872230c755f463481ebdd0` | `frontier-25-b-step8-r1x-034` | Required a nonsingular spectrum and the positive-real-diagonal QR phase convention. |
| `thm-wilkinson-shifted-symmetric-tridiagonal-qr-has-local-deflation-away-from-ties` | `3ecb766d4237a222174a611dccefba716ce2ee136f4a153d232765483e697b37` | `frontier-25-b-step8-r1x-035` | Required the standard adjacent-row Givens QR construction in the statement and cited fact. |

All 49 exact outcomes were appended to
`research/frontier-25-judge-adjudications.jsonl`. Every fatal outcome sets
`defect_type` to one of `logic` or `dependency_citation`.

The first generated evidence file,
`research/frontier-25-alpha-b-step8-rejudge-round-1-ledger-rows.json`,
used judge-context item digests rather than adjudication guard digests. Those
35 rows remain in the append-only ledger as historical evidence. Exact
ownership corrections `frontier-25-b-step8-r1x-001` through
`frontier-25-b-step8-r1x-035` were appended from
`research/frontier-25-alpha-b-step8-rejudge-round-1-ledger-corrections.json`.
The defect-ledger ownership check passes with the correction rows.

## Rejudge targets

- `cex-an-absolutely-continuous-finite-measure-can-have-an-unbounded-radon-nikodym-derivative`
- `def-truncated-singular-value-pseudoinverse-at-a-declared-threshold`
- `prop-full-column-rank-pseudoinverse-formula`
- `cor-finite-complex-measures-admit-integrable-radon-nikodym-densities`
- `prop-tikhonov-regularisation-has-singular-filter-factors`
- `prop-truncated-svd-and-tikhonov-are-hard-and-smooth-spectral-filters`
- `ex-a-piecewise-quadratic-distribution-function-recovers-its-density`
- `ex-coordinate-inclusions-and-projections-as-immersion-and-submersion`
- `ex-the-chain-rule-for-radon-nikodym-derivatives-on-zero-one`
- `def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift`
- `thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution`
- `ex-the-graph-of-the-sine-function-as-an-embedded-submanifold`
- `thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces`
- `ex-the-special-linear-group-as-a-regular-level-set`
- `ex-power-iteration-on-a-diagonal-matrix-displays-the-eigenvalue-ratio-rate`
- `thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss`
- `fs-absolutely-continuous-measures-always-have-bounded-radon-nikodym-derivatives`
- `fs-every-measure-is-absolutely-continuous-or-singular-with-respect-to-lebesgue-measure`
- `thm-tikhonov-regularised-least-squares-has-a-unique-minimiser`
- `fs-the-epsilon-delta-condition-characterises-absolute-continuity-for-every-measure`
- `fs-the-radon-nikodym-theorem-holds-without-sigma-finiteness`
- `prop-the-smooth-structure-of-an-embedded-submanifold-is-unique`
- `prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration`
- `prop-the-radon-nikodym-derivative-is-integrable-exactly-when-the-absolutely-continuous-part-is-finite`
- `thm-constant-rank-theorem-for-manifolds`
- `thm-eigenpair-residual-realises-the-minimum-norm-backward-error`
- `thm-additivity-of-radon-nikodym-derivatives`
- `thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence`
- `thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form`
- `thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue`
- `thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures`
- `thm-subspace-iteration-converges-to-the-dominant-invariant-subspace-under-a-spectral-gap`
- `thm-polar-decomposition-for-signed-and-complex-measures`
- `thm-unshifted-qr-converges-under-separated-moduli-and-leading-minor-hypotheses`
- `thm-wilkinson-shifted-symmetric-tridiagonal-qr-has-local-deflation-away-from-ties`

The engine owns the durable cycle limit and any permitted next judgment. This
dispatch did not initiate a judge cycle.

## Changed files

- The 35 repaired item files listed in the fatal-licensing table.
- `research/frontier-25-batch-2.proof-contracts.json`,
  `research/frontier-25-batch-3.proof-contracts.json`, and
  `research/frontier-25-batch-9.proof-contracts.json`; all group-b entries
  were regenerated because repaired source statements made downstream exact
  quotes stale.
- `research/frontier-25-proof-contracts.json`, mechanically re-merged from
  all eleven batch contracts.
- `research/frontier-25-judge-adjudications.jsonl`.
- `research/frontier-25-alpha-b-step8-rejudge-risk-reviews.json` and the
  resulting batch-3 risk review.
- The two defect-row source files named above,
  `research/defect-ledger.jsonl`, and generated
  `research/DEFECT-LEDGER.md`, all updated through the prescribed append
  interface.
- This closure-recovery report.

## Checks

- Exact hash accounting: 35/35 fatal items changed; 14/14 nonfatal or
  false-positive items stayed unchanged.
- Focused precheck: all 45 proof-bearing items among the 49 tuples pass in
  stored phase form.
- Strict proof contracts: batch 2 is 45/45, batch 3 is 30/30, and batch 9 is
  37/37, with zero errors or warnings.
- Citation fidelity: 354 citations over 112 proof-bearing group-b items; no
  missing quote or widening candidate.
- Finite smoke: the one selected group-b check passed; no finite-smoke errors.
- Boundary audit: 896 rows; no template reuse and no contradicted disposition.
- Risk review: all three owned batches pass `--require-reviewed`; one new
  review was added after its repaired dependency count raised its risk tier.
- Dependency, forward-reference, and external-reference checks exit
  successfully; only existing advisory warnings were reported.
- Content policy: 135 scoped items, zero errors and zero warnings.
- Focused render check: all 35 repaired items and eight owned pages pass YAML,
  delimiter, KaTeX, and display-math validation.
- Step-8 guard: 111/111 run-wide item changes are licensed.
- Step-8 scope: four groups and 381 items partitioned, with zero open rejection
  and zero cross-group alert.
- Defect ledger: 308 frontier-25 rows validate, and the adjudication ownership
  check reports zero errors.
- Pending-rejudge closure check: 340/381 current verdict sets, 41 need rejudge
  run-wide, zero unadjudicated rejection, and zero open fatal.
- Whole-level finite smoke, risk review, boundary audit, and citation fidelity
  pass. Whole-level strict proof-contract validation has one external group-d
  stale quote: `thm-pda-to-cfg-construction` still records its old `[L3]`
  quote after `lem-pda-fragment-variables-compose` changed.

## Cross-group alerts

None.

## Blocker

No group-b adjudication or repair blocker remains. Run-wide closure still needs
41 current verdict sets after licensed repairs, including the 35 group-b
targets above; the engine owns that rejudge or any terminal-resolution route.
The whole-level proof-contract gate is also blocked by the group-d stale quote
named above. Group b did not alter that item or its batch-10 contract.
