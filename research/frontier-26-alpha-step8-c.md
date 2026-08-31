# frontier-26 — Step 8 group c adjudication

Group c owns batches 2, 3, and 4. This pass adjudicated every exact rejection routed to the group and changed only items whose exact rejection was confirmed fatal.

## Outcome counts

| outcome | rows | content edits |
|---|---:|---:|
| `confirmed_fatal` | 22 | 22 |
| `confirmed_nonfatal` | 71 | 0 |
| `false_positive` | 1 | 0 |
| **total** | **94** | **22** |

All 94 exact tuples are appended to `research/frontier-26-judge-adjudications.jsonl` with their pre-edit guard hashes. The 22 fatal rows have matching defect-ledger rows `frontier-26-A8-c-001` through `frontier-26-A8-c-022`, appended through `tools/defect-ledger.mjs`.

## Exact rejection inventory

| item | context_sha256 | outcome |
|---|---|---|
| `cex-a-cauchy-sequence-in-calligraphic-l-p-can-converge-to-two-distinct-functions` | `61b7ddd23f6978cd50ede23fb140f16d7505f993a0cabae1741d1971a47d467c` | `confirmed_nonfatal` |
| `cex-a-defective-jordan-block-produces-square-root-eigenvalue-splitting` | `8cf5e9c80f67a90f3734a7934e1a9fa363a7ff543e44ac8e9f2fed46782cee0b` | `confirmed_nonfatal` |
| `cex-a-nonzero-function-on-a-null-set-has-zero-l-p-seminorm` | `d03363d9c6d205b0796599105de62349410ef1dcfdfe554ef8d07fe49d710186` | `confirmed_nonfatal` |
| `cex-an-ordered-eigenvector-branch-need-not-be-differentiable-through-a-crossing` | `7186c4b7f7b30afcac61067581a57691c31d5df3dc832f218f8edce609cf1004` | `confirmed_nonfatal` |
| `cex-gmres-can-stagnate-on-a-nonnormal-matrix-with-moderate-conditioning` | `0895a60996529085904ee2e332b68e9ec14e90b043e2a85fe0f9c38451ac3b87` | `confirmed_nonfatal` |
| `cex-l-one-not-subset-l-two-on-the-line` | `41c965898c3aca1f5cbc8c22839d887c59ec523fec821768ed0782ff2b316b02` | `confirmed_nonfatal` |
| `cex-l-two-not-subset-l-one-on-the-line` | `ad2c6ddef18810662d1da1d5e88121a467823dc49b57ff0aa2ccf8420360f862` | `confirmed_nonfatal` |
| `cex-sum-z-to-n-over-n-squared-is-continuous-on-the-closed-disc-but-singular-at-one` | `0e73995354bf04c4568b9de63d10a46f8775782bf1a23cc8a6ecd4a94498eaad` | `confirmed_nonfatal` |
| `cor-for-invertible-a-the-exact-solution-enters-the-krylov-space-at-the-grade` | `91667b619722b4f640adc7034cad89b6d8ae90c93040947f531222ebd722923a` | `confirmed_nonfatal` |
| `cor-hermitian-simple-eigenpair-derivative-simplifications` | `aa6cd0e1c6020e6b955345dcfd822e09d23d76ca6c3095d706bb2b6c5b21e88d` | `confirmed_nonfatal` |
| `cor-l-p-convergence-implies-convergence-in-measure` | `a36a1ee2bff4ef6a3b26602d0655ab9f152fd352a51d5914d9c15652c86911e7` | `confirmed_nonfatal` |
| `cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences` | `36d8c33dd15acd764189242609b885f4ce4b93e9eb63c123b764b35e2f6d223f` | `false_positive` |
| `cor-single-valued-continuation-on-simply-connected-domains` | `9c24ef609f8ebb2b00ea0b88b33633887d22769f588c039d0afe300436665aad` | `confirmed_nonfatal` |
| `cor-unrestarted-gmres-residual-norms-are-nonincreasing` | `d8f4f6cf498566412b6bc8529bad4fb409ce7877501514c56ed6ba58a5efd44a` | `confirmed_nonfatal` |
| `def-calligraphic-l-p-on-a-measure-space` | `8ce3160203f31421273cfcc7721feabdf3cc74de3851307c22cf93c4b62a3351` | `confirmed_fatal` |
| `def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue` | `1c80c2719d5f39b914ea997f3cb8733987bad74db42fbc65f7c2fc0db7ca6e98` | `confirmed_fatal` |
| `def-condition-number-of-a-simple-eigenvalue` | `08908a52c39263319722bce91c1080c56673c573172f693ee78d8355a2be706d` | `confirmed_fatal` |
| `def-gmres-iterate` | `b92b620c17fd69924d3870b5a2620740863e533adf47b75e4632b9828856d00d` | `confirmed_nonfatal` |
| `def-grade-and-relative-minimal-polynomial-of-a-start-vector` | `8490a77d5f760773ace8f7e111b77a7a07e299fd6f2a9633c9c17751f0e10c2a` | `confirmed_fatal` |
| `def-l-p-space-as-a-quotient-by-null-functions` | `7373c7e152307fd71a666a4f43ee9413ce8f428684e28ed7cb4cc082620eacdd` | `confirmed_nonfatal` |
| `def-null-subspace-of-almost-everywhere-zero-functions` | `198246cf7afbdad9d133348c66cd6914debb7db382ec501fe71c8ac02f4c5fe6` | `confirmed_nonfatal` |
| `def-real-frechet-derivative-on-real-and-complex-matrix-spaces` | `adf938e626c03fbb62c11d6db6e127aaa50ebdfe410ca906aac2923d119aee7e` | `confirmed_fatal` |
| `ex-a-hermitian-simple-eigenvalue-derivative-is-a-rayleigh-quotient-direction` | `ff82370c5796c33caec992105310455db7e18c049015078c86aec94067a5e7bd` | `confirmed_nonfatal` |
| `ex-a-jordan-block-splits-by-a-square-root-perturbation` | `412beea1ab97dc3e8065455462117d37c962ba2b25218fe491f029980f9cfcdf` | `confirmed_nonfatal` |
| `ex-a-krylov-chain-with-early-stabilisation-and-its-relative-minimal-polynomial` | `cda0e76d62969c0e0b359d93de81309e1ad20240ce3d54cde074c9eaa370b908` | `confirmed_nonfatal` |
| `ex-a-two-step-function-shows-the-l-p-norm-converging-to-the-essential-supremum` | `860d1bdd3d4e1c9349c847fbcc35557840e9a2b1fa9bc048cafc85c91588734a` | `confirmed_fatal` |
| `ex-finite-counting-measure-on-n-points-recovers-rn-p-norms` | `440848cfd25d80eee89dd90079a02170421d841d5e80915d8d23c1f008f932cf` | `confirmed_fatal` |
| `ex-indicator-of-the-rationals-has-zero-essential-supremum-but-pointwise-supremum-one` | `e2de8b662332c8cefdd2af18f940fda51fea0003228415750bd575675c97c66e` | `confirmed_fatal` |
| `ex-k-to-the-minus-a-membership-in-ell-p` | `12ba653ab7a7c4b3e4f560f768c572d09f2d094671b6ff6d764a4116eda1d5e2` | `confirmed_fatal` |
| `ex-logarithm-continuation-around-the-unit-circle-shifts-by-two-pi-i` | `01b5e8ee8b4ce4c2bfe52c8f41fb25ea5feb8fa9c6293a26ea2dfb83bf3e0feb` | `confirmed_fatal` |
| `ex-lucky-arnoldi-breakdown-on-an-invariant-krylov-space` | `5e62ee59909127f1321b354ae76a1b887123664cb921a24c8782a415ec7cc10a` | `confirmed_nonfatal` |
| `ex-matrix-free-gmres-for-a-sparse-operator` | `9640b9c7e9b5b62dfee87952090d621344c79ed66117569573f88b5de376447f` | `confirmed_fatal` |
| `ex-proportional-functions-realise-the-equality-case-of-holder` | `d65416fceb93afa6ad22e786db62a3cbdf5b9952ea5443f93e99c8a5c22431f3` | `confirmed_nonfatal` |
| `ex-restarted-gmres-versus-full-gmres-on-the-same-system` | `030890f86c586af08df064901eeae739e3a689d088382435b5cd17767828ed7d` | `confirmed_nonfatal` |
| `ex-simple-nonnormal-eigenvalue-derivative-uses-left-and-right-eigenvectors` | `48bc2a22ffd6f9278db0282a85de8fb7a12f500896a9643f1f4f3872ed1e9c72` | `confirmed_nonfatal` |
| `ex-square-root-continuation-around-the-origin-changes-sign` | `41650dced0f19c7cba994dcfdd5c79d8e41964bc1430b852d49671771d6d33c0` | `confirmed_fatal` |
| `ex-the-geometric-series-has-only-one-singular-boundary-point` | `ab3cc545b210b444db733c590b00e6e6774a5555bcd8cbe7613901b16b336ae2` | `confirmed_nonfatal` |
| `ex-two-gauge-choices-give-different-eigenvector-derivatives` | `6569778694d8a58416ca2d507d4e32747f14f21e345b5570a69d6dcf46b1100a` | `confirmed_nonfatal` |
| `ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership` | `95bf6a66788733102bbfcc6034be3599b75379e435f9841ac420911d9404050f` | `confirmed_nonfatal` |
| `fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere` | `6ab5ce8d2ec0ae4f466f7ed3d55f2e716ef49950e2c82ee1648c70dfe59c6bdc` | `confirmed_fatal` |
| `fs-l-one-half-with-its-p-functional-is-a-normed-space` | `15112e8a83d27dbcd073983b608802bb2b536cacef50165ccd87e41b2819ac04` | `confirmed_nonfatal` |
| `fs-the-p-seminorm-on-calligraphic-l-p-is-a-norm` | `c68427e8607cb3c4866e96ba92774fc4e637de006f5397aa59b7afc7ae1c6a11` | `confirmed_nonfatal` |
| `lem-germ-neighborhoods-form-a-riemann-surface-basis` | `5979a87046ff34216ad5b179396da34745abc3fbdc686e592ec3c0806dddd4f8` | `confirmed_nonfatal` |
| `lem-refinement-of-analytic-continuation-chains` | `0d3be1f2aed4d3ce6beea5d44c5d2a5e7f5028251b63622d953c26c7e4a9d53e` | `confirmed_nonfatal` |
| `prop-diagonalizable-gmres-residual-bound-keeps-the-eigenvector-conditioning-factor` | `c67eafa444ae18079905dbdcf0a9219089a21781d9fe296c50dd64727e653dc7` | `confirmed_nonfatal` |
| `prop-essential-supremum-is-attained-as-the-least-essential-bound` | `2cf556d337827d124b82352acc4a6a1eb0dd3a01f4682c536e710c59df412c5d` | `confirmed_nonfatal` |
| `prop-gmres-residuals-are-polynomials-in-a-applied-to-the-initial-residual` | `99f87d4d82b15d2acee7b128104a315496272315c68a8b5b03e86372f8d42b89` | `confirmed_nonfatal` |
| `prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector` | `7f04949b345335f8231715e447d6cd69f33746b070db18d4f26d8005e8d18f42` | `confirmed_fatal` |
| `prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance` | `8c4cfb15cd8b503e0439b4b9007c8defca0c37cf285c5931a18a87ef51d5b6b0` | `confirmed_fatal` |
| `prop-matrix-differentials-obey-sum-product-and-adjoint-rules` | `8b7e27427169a0a93f2be72ed274e1c219dafa7dca58312b229301df4708d820` | `confirmed_nonfatal` |
| `prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class` | `90a51c2d87bd5d351617031e06d152cf3a9e2ff60816e70fae658b7d60b1320f` | `confirmed_nonfatal` |
| `prop-reduced-resolvent-identities-for-a-simple-eigenvalue` | `3e259807b50b2951225caf14495dc41564edb56f803003e64b5c97b5194937b6` | `confirmed_nonfatal` |
| `prop-restarted-gmres-preserves-cyclewise-minimization-but-not-full-termination` | `e635d59387eb833e08e5ce61a7d4bae59f2cc7af300a31a5863dadbb73b75b8b` | `confirmed_nonfatal` |
| `prop-ritz-residual-formula-for-an-arnoldi-ritz-pair` | `3d0f97c5d914f07534d8cf9ac1d03a14877cb0e76e2d328f20a72f4ab9114fbc` | `confirmed_nonfatal` |
| `prop-simple-eigenvalue-condition-number-is-norm-x-norm-y-over-y-star-x` | `a43e047f632b0197298e084a7c60da4939ddcbbd846230d2b8907b66943e3eb2` | `confirmed_nonfatal` |
| `prop-simple-eigenvalues-admit-left-right-normalization` | `065179a31429bf045e758520a82249f6fe617a7ea1dfc1dcfc6880c2f8636140` | `confirmed_nonfatal` |
| `prop-the-p-functional-is-not-a-norm-for-zero-less-p-less-one` | `96a9402014f5b47925ba8ae2acf41db79f9ed5a1658afeadbbe08d1224769c1b` | `confirmed_nonfatal` |
| `rem-covering-maps-among-complete-analytic-functions` | `3c5a097ded7fbd14bf04aa849fb966890740da90839a244063f5094acb14152e` | `confirmed_fatal` |
| `rem-finite-counting-measure-holder-and-cauchy-schwarz-agree-with-published-finite-inequalities` | `3755321ae60b07406251fc88a1e4d8620abc89ec5996d41d2e694bce0b42ac43` | `confirmed_fatal` |
| `rem-finite-counting-measure-minkowski-agrees-with-the-published-finite-theorem` | `8d9be8b17ff6d4b5c00d169a1ad19a81e1b0b481a0a0f563852f211eabcbf343` | `confirmed_fatal` |
| `rem-lyapunov-inequality-is-equivalent-to-log-convexity-of-p-to-log-norm` | `31929d7d3883731ecd60e0e767e8ade647d66088d6104259964e2fb22e073dc0` | `confirmed_nonfatal` |
| `rem-monodromy-corollary-agrees-with-the-earlier-simply-connected-logarithm-theorems` | `73c47f9c87ca76bf9d703d318b78c400251af30d3ca0c330e261358fc8f14e54` | `confirmed_nonfatal` |
| `rem-schwarz-reflection-as-analytic-continuation` | `61146330bbca551e39d31586c0a3377ff709b8d433b78e1c5c13e699d02d7e40` | `confirmed_fatal` |
| `thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization` | `8f6d49c0cec2862863c42f6cf88d90ad9e04838d06dd6ccaabcb1e49c0fab220` | `confirmed_fatal` |
| `thm-arnoldi-reduces-gmres-to-a-small-hessenberg-least-squares-problem` | `0b6758ad5971c48d281970d2e020d70c224f8b5ddba2c97ff6d35248ef696463` | `confirmed_nonfatal` |
| `thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one` | `caa05b11d135d9b887ac03d97e6d3985784dee08bf6c3c2788a26a3ba5cad3c0` | `confirmed_nonfatal` |
| `thm-derivative-of-matrix-inversion` | `b95933d01b86f13edf0c465a7ff48a8c6a862203dafcc4fdd7b158c0de73772a` | `confirmed_nonfatal` |
| `thm-determinant-differential-and-jacobis-formula` | `1ec8103d3c4a77e0a60c5e018b51fcc1ac59bab6f2ca33b359a49a8e6fb175eb` | `confirmed_nonfatal` |
| `thm-directional-derivative-of-a-simple-positive-singular-value` | `ca03658a299fd701b1eff0f0a64a1e62780961b78bfc457d46b6bfe10299cb7c` | `confirmed_nonfatal` |
| `thm-ell-p-includes-into-ell-r-for-p-less-r` | `1773c473ef3f84c5dec96fbfcd5152312b7190cbb182ab515c824cb8447d0114` | `confirmed_nonfatal` |
| `thm-end-germ-of-path-continuation-is-independent-of-the-chain` | `55d9180e78690469285c6b3370c87ed488a9fd7736f15e49011862a4bc3d5974` | `confirmed_nonfatal` |
| `thm-equality-case-in-holder-inequality` | `c9b86870bb169dec0bac690a53b3810f2c4bdb391fd993127efac41e5be83c51` | `confirmed_nonfatal` |
| `thm-equality-case-in-minkowski-inequality` | `e7e1531c2ab21c2482cc2057df579631833e992bc7fe792bd07ef9d138dbf93f` | `confirmed_nonfatal` |
| `thm-factorial-gap-series-has-the-unit-circle-as-natural-boundary` | `37fe133eda3360b537867367f781a595da38cb9f7fe4fc017dfa51791f717e4a` | `confirmed_nonfatal` |
| `thm-finite-measure-l-r-includes-into-l-p-for-p-less-r` | `98ebcda4b122d90e44cc1059a928bfe6bf82ffa260bfd7c37fa71946a984d172` | `confirmed_nonfatal` |
| `thm-gauge-fixed-simple-eigenvector-derivative-formula` | `0dae88cdd4cdbd49f7fc82f2eb2b25bea4c5238fb441843f620c764bec92f132` | `confirmed_nonfatal` |
| `thm-generalized-holder-inequality-for-products` | `1bc9aca8bc85e52404ded1fcf80d854d5459f18c9cbd21282616c85a09b00e59` | `confirmed_nonfatal` |
| `thm-germ-projection-is-a-local-biholomorphism` | `5e1616d9cf7d81ea3b3d143bf52a0dae1b0f4fd538332c081fb813b58d320160` | `confirmed_nonfatal` |
| `thm-gradient-and-hessian-of-the-frobenius-least-squares-functional` | `b69a151c0ffb396ccb06565338de755ac6428a420d09f41a95b2566084be549e` | `confirmed_nonfatal` |
| `thm-holder-inequality-for-integrals` | `d477c9eb145b6eac16cd24eea706f5026246c7b019642784cb37128aece02f76` | `confirmed_nonfatal` |
| `thm-holomorphic-germs-at-a-point-form-a-local-ring` | `c29c46c6565a0232dd60d90bb6478d04882eac20f04b1256821110fa8e8ed199` | `confirmed_nonfatal` |
| `thm-krylov-dimensions-grow-by-one-until-the-grade-and-then-stabilise` | `360f093c0b8868d94184efe86ca7baf2251ece99bc630800dd2a238223ac23e8` | `confirmed_nonfatal` |
| `thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions` | `9c76126f0691a50faacc4bf9cbae1100e06d925df9d64232a96b4e8341a57da4` | `confirmed_nonfatal` |
| `thm-lyapunov-interpolation-inequality-for-l-p-norms` | `d079d967b354c30d9dfa4d1d3bc5165b900b144c5f44b2a57963f9cc9a98f05c` | `confirmed_nonfatal` |
| `thm-minkowski-inequality-for-integrals` | `822c935d9641fb11177221a5e83b326994c5b20a96bc98b013998ae3fa1577a9` | `confirmed_nonfatal` |
| `thm-monodromy-theorem` | `f4a3c6a71424f797dc503e64e471f1f8c79ed76a5b04e27ee662796388181bdb` | `confirmed_fatal` |
| `thm-parallelogram-law-in-l-two` | `2b981b25e94b8d24435060f267db625e4dfb5cf1fb60adc46b6d5ccc9cb31a3a` | `confirmed_nonfatal` |
| `thm-reverse-p-triangle-inequality-for-nonnegative-functions-when-zero-less-p-less-one` | `595537fcb436e89cce9faaa8cf4cf1f84802805e10c89f982577a12d2a4eac9a` | `confirmed_nonfatal` |
| `thm-riemann-surface-of-an-nth-root` | `089da14618a3aa70efac1429e8a79ef4a9e95c974e178eaf3c43d23c0bf57638` | `confirmed_nonfatal` |
| `thm-riemann-surface-of-the-logarithm` | `bf61318c33f3ea710ea6e6d907e10f3ac63f70f47ff14640ef1b5440314bfc36` | `confirmed_fatal` |
| `thm-riesz-fischer-completeness-of-l-p` | `19172aa60e28f1eed46632de333a1b1ccbde1a4488624af64cfa61a9ba57b7ae` | `confirmed_nonfatal` |
| `thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing` | `cd8828033ff03b01b99612eec939b8487278be8734f76280ce0f990962557b37` | `confirmed_nonfatal` |
| `thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric` | `e6ac0f791cc2ce02e4443a302f1487588c06db645c4c76f0defd2a7eb7af7e04` | `confirmed_nonfatal` |
| `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space` | `09b8a1a8c7066d24340122cffe38e75d639dd0585b67020df17a1aaa76916891` | `confirmed_nonfatal` |

## Confirmed-fatal repairs

### frontier-26-A8-c-001 — `def-calligraphic-l-p-on-a-measure-space`

- Outcome: `confirmed_fatal`; adjudication defect type: `other`.
- Exact rejection: The p-functional is ill-defined when \(\int|f|^p\,d\mu=\infty\): the cited real-power definition only covers finite positive bases (and zero), not \(\infty^{1/p}\). No extended-real convention is supplied.
- Repair: The p-functional applied a real power to the extended value positive infinity. It is now piecewise defined, using real powers only when the integral is finite.
- Pre-edit guard hash: `579ea50975caf4d3ee6215e1cb306126935c7819af80b631c0c30ab257908fed`.
- Rejudge target: yes.

### frontier-26-A8-c-002 — `def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue`

- Outcome: `confirmed_fatal`; adjudication defect type: `other`.
- Exact rejection: The definition never specifies that $A$ is real or complex (nor fixes an inner product), yet it uses $A^*$ and $\overline\lambda$. A square matrix over the general field allowed by the cited eigenvalue definition need not have either operation, so the definition is not well-formed.
- Repair: The definition used conjugation and adjoints over an unspecified matrix field. It now fixes a complex matrix with the standard Hermitian structure.
- Pre-edit guard hash: `a5bb2c3b5e1e924bcad04f86138761e2809269fcf3209ef94f9f54a787d86870`.
- Rejudge target: yes.

### frontier-26-A8-c-003 — `def-condition-number-of-a-simple-eigenvalue`

- Outcome: `confirmed_fatal`; adjudication defect type: `other`.
- Exact rejection: The definition is not well-defined: it invokes $D\lambda(A)[H]$ along “any local simple eigenvalue branch” without establishing or citing existence of such a branch or independence of the choice. Its only dependency concerns eigenvector normalization and supplies neither fact.
- Repair: The definition invoked an unproved branch derivative. It now defines the first-order functional by the scale-invariant left/right formula and records why it is choice-independent.
- Pre-edit guard hash: `82e26b767688e6b65259d456d2081c09c4db84cbb3d5c9d917281c5f9e6a2984`.
- Rejudge target: yes.

### frontier-26-A8-c-004 — `def-grade-and-relative-minimal-polynomial-of-a-start-vector`

- Outcome: `confirmed_fatal`; adjudication defect type: `other`.
- Exact rejection: The definition asserts a unique least-degree monic annihilator without establishing existence or uniqueness. Its only dependency defines Krylov spaces and supplies neither Cayley–Hamilton nor a minimal-polynomial result, so q_{A,b} and ν(A,b) are not justified as well-defined.
- Repair: The definition asserted a unique least-degree monic annihilator without establishing existence or uniqueness. It now derives existence from finite-dimensional dependence and uniqueness from subtraction of two monic minimizers.
- Pre-edit guard hash: `ca0a4573dcb2c59729266f3f00544a905e900857858ad8779297f06ede54dbef`.
- Rejudge target: yes.

### frontier-26-A8-c-005 — `def-real-frechet-derivative-on-real-and-complex-matrix-spaces`

- Outcome: `confirmed_fatal`; adjudication defect type: `other`.
- Exact rejection: The definition never equips the finite-dimensional real vector space W with a norm (or topology). Thus the vector-valued remainder o(\|H\|_F) is undefined; it must specify a norm on W, or say the condition holds with respect to any/equivalently a chosen norm.
- Repair: The codomain remainder was unnormed. The definition now equips the finite-dimensional codomain with a norm and states the normed quotient limit explicitly.
- Pre-edit guard hash: `28b0253e77087df8048bc07ef3e2c3c8388600b822c8ce73c3e641185c128901`.
- Rejudge target: yes.

### frontier-26-A8-c-006 — `ex-a-two-step-function-shows-the-l-p-norm-converging-to-the-essential-supremum`

- Outcome: `confirmed_fatal`; adjudication defect type: `logic`.
- Exact rejection: Step 2.1 falsely says \(\frac12+2^{-p-1}\to1\); its limit is \(\frac12\). Thus the stated reason for \(\|f\|_p\to2\) is invalid (one would need to show the bracket raised to \(1/p\) tends to \(1\)).
- Repair: The proof said a bracket tends to one although it tends to one half. It now bounds the bracket's pth root between 2^{-1/p} and one.
- Pre-edit guard hash: `eb13f1570e58830a4cf0606cd6ec3d79bd5c91a1f8f634048bb05099588d74d1`.
- Rejudge target: yes.

### frontier-26-A8-c-007 — `ex-finite-counting-measure-on-n-points-recovers-rn-p-norms`

- Outcome: `confirmed_fatal`; adjudication defect type: `logic`.
- Exact rejection: [L2] misstates its source: \([[def-p-norms-on-rn]]\) defines finite \(p\)-norms only for rational \(p\ge1\), and its \(\infty\)-norm requires \(n\ge1\). This example instead claims agreement for every real \(0<p<\infty\) and imposes no \(n\ge1\) condition.
- Repair: The example omitted n at least one for the maximum and claimed the earlier page defined norms for every real positive p. It now states the exact rational p at least one agreement and keeps the general functional formula separate.
- Pre-edit guard hash: `9cbc00cff46b631e3098ee8706f7ffdff80103a5837ef9200d38760e9cb7cf0d`.
- Rejudge target: yes.

### frontier-26-A8-c-008 — `ex-indicator-of-the-rationals-has-zero-essential-supremum-but-pointwise-supremum-one`

- Outcome: `confirmed_fatal`; adjudication defect type: `logic`.
- Exact rejection: Step 1.2 falsely claims \(\{f>\varepsilon\}=\mathbb Q\cap[0,1]\) for every \(\varepsilon>0\). For example, at \(\varepsilon=1\) this set is empty, since \(f\) takes only values \(0\) and \(1\).
- Repair: The proof said the epsilon-superlevel set was the rationals for every positive epsilon, false at epsilon at least one. It now splits the two threshold ranges.
- Pre-edit guard hash: `a8f35ef71548fd3b602d60e48bf5da5ea2fa43a383ab6de8bb49c91938b414f5`.
- Rejudge target: yes.

### frontier-26-A8-c-009 — `ex-k-to-the-minus-a-membership-in-ell-p`

- Outcome: `confirmed_fatal`; adjudication defect type: `other`.
- Exact rejection: The displayed “sequence” \((k^{-a})_{k\ge1}\) has no value at index \(0\), but library sequences (hence \(\ell^p\) elements) are functions on \(\mathbb N\) with \(0\in\mathbb N\). The statement and step 1.1 therefore use an undefined sequence.
- Repair: The proposed sequence began at index one although library sequences are functions on the naturals beginning at zero. It now defines the zero-index term explicitly.
- Pre-edit guard hash: `8d7fef1553dd76018129a60c10b2a86d62a047be52116571c66b4aa2f55e8c8f`.
- Rejudge target: yes.

### frontier-26-A8-c-010 — `ex-logarithm-continuation-around-the-unit-circle-shifts-by-two-pi-i`

- Outcome: `confirmed_fatal`; adjudication defect type: `logic`.
- Exact rejection: Step 2.1 does not meet the admissible-chain condition: \(|\gamma(t_{k+1})-\gamma(t_k)|=2\sin(\pi/8)>1/2\), so \(\gamma(t_{k+1})\), hence the subpath, is not in \(V_{t_k}\).
- Repair: The eight-piece arc left its radius-one-half branch domain. A sixteen-piece subdivision now keeps each full subpath in its assigned domain.
- Pre-edit guard hash: `6b1d4ba7c20caadb68b44f33f32d300ab3d9d5a5121ba8aa0095a1655191ed9b`.
- Rejudge target: yes.

### frontier-26-A8-c-011 — `ex-matrix-free-gmres-for-a-sparse-operator`

- Outcome: `confirmed_fatal`; adjudication defect type: `logic`.
- Exact rejection: The title falsely says matrix-free GMRES “only needs” operator applications. Its cited definition [F1] also requires vector additions and scalar multiples, plus inner products and norms where needed; the title asserts less machinery than the stated model.
- Repair: The title said GMRES only needs operator applications, omitting vector arithmetic, inner products, and norms. It now says only that matrix access is through operator applications.
- Pre-edit guard hash: `05070296cc5bb08dea1faba6b3ab798514d631afa8f523d5db267edcc88ff2b9`.
- Rejudge target: yes.

### frontier-26-A8-c-012 — `ex-square-root-continuation-around-the-origin-changes-sign`

- Outcome: `confirmed_fatal`; adjudication defect type: `logic`.
- Exact rejection: Step 2.1 falsely says adjacent quarter-turn domains overlap: their centres are distance \(2\sin(\pi/4)=\sqrt2\) apart, greater than the sum of their radii \(1\). Thus no joining point or germ comparison exists.
- Repair: The quarter-turn branch domains were disjoint. A sixteen-piece subdivision now gives valid subpath containment and joining germs.
- Pre-edit guard hash: `da917ab67b6c0eb255a9b9866506b5f9849f3121bd9aeb2422ce230bf0f024e8`.
- Rejudge target: yes.

### frontier-26-A8-c-013 — `fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere`

- Outcome: `confirmed_fatal`; adjudication defect type: `other`.
- Exact rejection: The Statement is ill-formed: elements of \(L^p(\mu)\) are equivalence classes, so a sequence in \(L^p\) cannot “converge pointwise” without specified representatives. The companion page explicitly requires representatives for pointwise assertions.
- Repair: The false statement applied pointwise convergence directly to equivalence classes. It now quantifies measurable representatives of the Lp classes.
- Pre-edit guard hash: `4650db5a8620638020a69e8d7152642782dbf72aca14a82d3322f0a213fb89d9`.
- Rejudge target: yes.

### frontier-26-A8-c-014 — `prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector`

- Outcome: `confirmed_fatal`; adjudication defect type: `other`.
- Exact rejection: The equality and step 1.1 mishandle the zero polynomial. For v=0 the constructed p can be 0, whose degree is not defined under the stated conventions; then the claim deg p<m does not follow, and the right-hand set need not contain 0.
- Repair: The statement and proof applied degree to the zero polynomial. They now split the zero polynomial from the degree-less-than-m case.
- Pre-edit guard hash: `7988184d620861b32bd9185d97c388346f423851c9a890513a1f3ff7c0b3bb64`.
- Rejudge target: yes.

### frontier-26-A8-c-015 — `prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance`

- Outcome: `confirmed_fatal`; adjudication defect type: `other`.
- Exact rejection: The statement never assumes m≥1. With m=0 (allowed by the library convention), h_{m+1,m}=h_{1,0} and the “next Arnoldi residual” are undefined: Arnoldi defines only steps j≥1. Thus the claimed equivalence is not well-formed.
- Repair: The statement admitted m=0 although the residual h_{1,0} is undefined. It now assumes m at least one in both Statement and Given.
- Pre-edit guard hash: `bdf7ff8dff5bd57f6d02a6ac1e0305f0051a6cd10ad57c21df2d5b8207c13e94`.
- Rejudge target: yes.

### frontier-26-A8-c-016 — `rem-covering-maps-among-complete-analytic-functions`

- Outcome: `confirmed_fatal`; adjudication defect type: `logic`.
- Exact rejection: EMBEDDED_JSON: The final claim is false for a complete analytic function. For a small disc \(D\subseteq\Omega\), every germ over its centre continues uniquely across \(D\); the resulting \(N(f,D)\) are disjoint sheets covering \(p^{-1}(D)\). Thus the germ projection is a covering map.
- Repair: The remark falsely denied the covering property. It now constructs the disjoint sheets over a small disc by continuation and monodromy.
- Pre-edit guard hash: `834ba9da735fc6101a81125fc897032ef165e237f4e7d1bf70b0521439373cf9`.
- Rejudge target: yes.

### frontier-26-A8-c-017 — `rem-finite-counting-measure-holder-and-cauchy-schwarz-agree-with-published-finite-inequalities`

- Outcome: `confirmed_fatal`; adjudication defect type: `dependency_citation`.
- Exact rejection: The integral Cauchy-Schwarz estimate becomes \(\sum_k|x_ky_k|\le\|x\|_2\|y\|_2\), not the signed finite Cauchy-Schwarz estimate \(|\sum_kx_ky_k|\le\|x\|_2\|y\|_2\). For \(x=(1,1),y=(1,-1)\), they differ.
- Repair: The remark identified an absolute-product sum with the signed finite Cauchy-Schwarz left side. It now distinguishes them and derives the signed form by the triangle inequality.
- Pre-edit guard hash: `0dbcefb3dac55649534c19b166cce4c79f8fb0ce00f14f34e1114f0cde4c689a`.
- Rejudge target: yes.

### frontier-26-A8-c-018 — `rem-finite-counting-measure-minkowski-agrees-with-the-published-finite-theorem`

- Outcome: `confirmed_fatal`; adjudication defect type: `dependency_citation`.
- Exact rejection: The remark overstates the agreement: the integral theorem also includes \(p=1\) and \(p=\infty\), whereas \([[thm-minkowski-finite-real-exponents]]\) is stated only for \(p>1\). Those endpoint specializations do not become the cited finite-sum theorem.
- Repair: The remark attributed the p=1 and p=infinity endpoints to a cited theorem stated only for p greater than one. It now restricts the exact citation match and treats endpoints separately.
- Pre-edit guard hash: `56677bd3906987509134c5731961cfb0ad77fbd7b854d83a0156846bebb2bb56`.
- Rejudge target: yes.

### frontier-26-A8-c-019 — `rem-schwarz-reflection-as-analytic-continuation`

- Outcome: `confirmed_fatal`; adjudication defect type: `logic`.
- Exact rejection: EMBEDDED_JSON: The remark drops the reflection theorem’s essential continuity and real-boundary-value hypotheses, implying a holomorphic element on one side extends across a real-analytic arc. For example, \(f(z)=1/z\) on ℝ^+ is holomorphic but has no holomorphic extension across \(0\).
- Repair: The remark omitted continuity and real boundary values from Schwarz reflection. It now states the exact upper-half-disc hypotheses supplied by the cited theorem.
- Pre-edit guard hash: `b2e2ffb4df20697183182011a25d6f8fee76b32c744e59c010154c80dc8ce783`.
- Rejudge target: yes.

### frontier-26-A8-c-020 — `thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization`

- Outcome: `confirmed_fatal`; adjudication defect type: `other`.
- Exact rejection: The stated \bar H_m includes h_{ij} for i>j+1 (for example h_{3,1}), but Arnoldi defines h_{ij} only for i≤j and h_{j+1,j}. Step 2.1 declares these undefined entries zero without defining them, so \bar H_m and the factorization are ill-formed.
- Repair: The displayed Hessenberg matrix used entries below the first subdiagonal that Arnoldi had never defined. Those entries are now explicitly defined to be zero.
- Pre-edit guard hash: `eecec733ca90eb7548ac8be7431b96647c39c9e3df297fad605866b1003d76c8`.
- Rejudge target: yes.

### frontier-26-A8-c-021 — `thm-monodromy-theorem`

- Outcome: `confirmed_fatal`; adjudication defect type: `logic`.
- Exact rejection: EMBEDDED_JSON: The statement never assumes \(\alpha(0)=eta(0)=a_0\), so continuation of \(\xi_0\) along them need not be defined. Accordingly [L2] is stronger than its citation: endpoint-fixed homotopy fixes the common initial point, not necessarily \(a_0\).
- Repair: The theorem did not require the compared paths to start at the base point of the germ. The Statement and Given now impose that endpoint condition.
- Pre-edit guard hash: `533a29bf9191c5c00446acfda9d3821bfd995b055ad4e3a140f5c67e2b3cefb6`.
- Rejudge target: yes.

### frontier-26-A8-c-022 — `thm-riemann-surface-of-the-logarithm`

- Outcome: `confirmed_fatal`; adjudication defect type: `logic`.
- Exact rejection: EMBEDDED_JSON: Step 1.2’s stated mesh conditions do not put γ(t_{j+1}) in \(V_{t_jw}\). For a real increment \(h=0.49\), \(|h|<1/2\) and \(|\Im h|<\pi\), but \(|e^h-1|>1/2\); hence the preceding branch need not be defined at the joining point.
- Repair: The stated mesh bound did not keep a subpath inside its branch domain. It now chooses the subdivision using the needed exponential-distance bound and verifies the joining germ.
- Pre-edit guard hash: `3ade7e7a08f26cb8cc2dee508db2dfb02bd36580b6ebf87069eb9d47634c395f`.
- Rejudge target: yes.

## Confirmed-nonfatal closures

Each row below identifies a real observation about citation precision, an omitted elementary sentence, or a locally incomplete proof tag. In every case the mathematical statement remains true and a competent reader closes the step immediately from the current item, a declared dependency, or an elementary derivation. Under the fatal-only rule, no content, contract, impact, or judge data was changed.

| item | disposition |
|---|---|
| `cex-a-cauchy-sequence-in-calligraphic-l-p-can-converge-to-two-distinct-functions` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `cex-a-defective-jordan-block-produces-square-root-eigenvalue-splitting` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `cex-a-nonzero-function-on-a-null-set-has-zero-l-p-seminorm` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `cex-an-ordered-eigenvector-branch-need-not-be-differentiable-through-a-crossing` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `cex-gmres-can-stagnate-on-a-nonnormal-matrix-with-moderate-conditioning` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `cex-l-one-not-subset-l-two-on-the-line` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `cex-l-two-not-subset-l-one-on-the-line` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `cex-sum-z-to-n-over-n-squared-is-continuous-on-the-closed-disc-but-singular-at-one` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `cor-for-invertible-a-the-exact-solution-enters-the-krylov-space-at-the-grade` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `cor-hermitian-simple-eigenpair-derivative-simplifications` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `cor-l-p-convergence-implies-convergence-in-measure` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `cor-single-valued-continuation-on-simply-connected-domains` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `cor-unrestarted-gmres-residual-norms-are-nonincreasing` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `def-gmres-iterate` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `def-l-p-space-as-a-quotient-by-null-functions` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `def-null-subspace-of-almost-everywhere-zero-functions` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `ex-a-hermitian-simple-eigenvalue-derivative-is-a-rayleigh-quotient-direction` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `ex-a-jordan-block-splits-by-a-square-root-perturbation` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `ex-a-krylov-chain-with-early-stabilisation-and-its-relative-minimal-polynomial` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `ex-lucky-arnoldi-breakdown-on-an-invariant-krylov-space` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `ex-proportional-functions-realise-the-equality-case-of-holder` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `ex-restarted-gmres-versus-full-gmres-on-the-same-system` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `ex-simple-nonnormal-eigenvalue-derivative-uses-left-and-right-eigenvectors` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `ex-the-geometric-series-has-only-one-singular-boundary-point` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `ex-two-gauge-choices-give-different-eigenvector-derivatives` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `fs-l-one-half-with-its-p-functional-is-a-normed-space` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `fs-the-p-seminorm-on-calligraphic-l-p-is-a-norm` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `lem-germ-neighborhoods-form-a-riemann-surface-basis` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `lem-refinement-of-analytic-continuation-chains` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `prop-diagonalizable-gmres-residual-bound-keeps-the-eigenvector-conditioning-factor` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `prop-essential-supremum-is-attained-as-the-least-essential-bound` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `prop-gmres-residuals-are-polynomials-in-a-applied-to-the-initial-residual` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `prop-matrix-differentials-obey-sum-product-and-adjoint-rules` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `prop-reduced-resolvent-identities-for-a-simple-eigenvalue` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `prop-restarted-gmres-preserves-cyclewise-minimization-but-not-full-termination` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `prop-ritz-residual-formula-for-an-arnoldi-ritz-pair` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `prop-simple-eigenvalue-condition-number-is-norm-x-norm-y-over-y-star-x` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `prop-simple-eigenvalues-admit-left-right-normalization` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `prop-the-p-functional-is-not-a-norm-for-zero-less-p-less-one` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `rem-lyapunov-inequality-is-equivalent-to-log-convexity-of-p-to-log-norm` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `rem-monodromy-corollary-agrees-with-the-earlier-simply-connected-logarithm-theorems` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-arnoldi-reduces-gmres-to-a-small-hessenberg-least-squares-problem` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-derivative-of-matrix-inversion` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-determinant-differential-and-jacobis-formula` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-directional-derivative-of-a-simple-positive-singular-value` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-ell-p-includes-into-ell-r-for-p-less-r` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-end-germ-of-path-continuation-is-independent-of-the-chain` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-equality-case-in-holder-inequality` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-equality-case-in-minkowski-inequality` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-factorial-gap-series-has-the-unit-circle-as-natural-boundary` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-finite-measure-l-r-includes-into-l-p-for-p-less-r` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-gauge-fixed-simple-eigenvector-derivative-formula` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-generalized-holder-inequality-for-products` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-germ-projection-is-a-local-biholomorphism` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-gradient-and-hessian-of-the-frobenius-least-squares-functional` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-holder-inequality-for-integrals` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-holomorphic-germs-at-a-point-form-a-local-ring` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-krylov-dimensions-grow-by-one-until-the-grade-and-then-stabilise` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-lyapunov-interpolation-inequality-for-l-p-norms` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-minkowski-inequality-for-integrals` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-parallelogram-law-in-l-two` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-reverse-p-triangle-inequality-for-nonnegative-functions-when-zero-less-p-less-one` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-riemann-surface-of-an-nth-root` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-riesz-fischer-completeness-of-l-p` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |
| `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space` | Correct claim; local citation/proof gap closed as `confirmed_nonfatal`; no edit. |

## False positive

### `cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences`

- Exact rejection: Step 1.1 treats the almost-everywhere limit supplied by [L1] as the \(L^p\) limit and invokes metric uniqueness. But [L1] only asserts existence of a.e.-convergent representatives; it does not say their a.e. limit represents the norm limit, so uniqueness of metric limits does not supply that link.
- Outcome: `false_positive`.
- Evidence: the cited Riesz–Fischer proof constructs one measurable representative `f`, proves the selected subsequence converges almost everywhere to `f`, and proves the original Cauchy sequence converges in norm to `[f]`. For a sequence already known to converge to `u`, uniqueness of the metric limit gives `[f]=u`. The objection separates two conclusions that the cited construction proves for the same representative.
- Content change: none.

## Rejudge targets

- `def-calligraphic-l-p-on-a-measure-space`
- `def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue`
- `def-condition-number-of-a-simple-eigenvalue`
- `def-grade-and-relative-minimal-polynomial-of-a-start-vector`
- `def-real-frechet-derivative-on-real-and-complex-matrix-spaces`
- `ex-a-two-step-function-shows-the-l-p-norm-converging-to-the-essential-supremum`
- `ex-finite-counting-measure-on-n-points-recovers-rn-p-norms`
- `ex-indicator-of-the-rationals-has-zero-essential-supremum-but-pointwise-supremum-one`
- `ex-k-to-the-minus-a-membership-in-ell-p`
- `ex-logarithm-continuation-around-the-unit-circle-shifts-by-two-pi-i`
- `ex-matrix-free-gmres-for-a-sparse-operator`
- `ex-square-root-continuation-around-the-origin-changes-sign`
- `fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere`
- `prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector`
- `prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance`
- `rem-covering-maps-among-complete-analytic-functions`
- `rem-finite-counting-measure-holder-and-cauchy-schwarz-agree-with-published-finite-inequalities`
- `rem-finite-counting-measure-minkowski-agrees-with-the-published-finite-theorem`
- `rem-schwarz-reflection-as-analytic-continuation`
- `thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization`
- `thm-monodromy-theorem`
- `thm-riemann-surface-of-the-logarithm`

## Dependencies and source support

No web search was needed: none of the adjudications remained mathematically uncertain after opening the current items and their on-disk dependencies. The source checks that controlled repairs were:

- `thm-holder-finite-real-exponents`: finite counting measure gives the same absolute-product Holder inequality for strict conjugate exponents.
- `thm-cauchy-schwarz-finite` and `thm-cauchy-schwarz-and-the-euclidean-norm`: their signed left side is obtained from the stronger absolute-product sum by the real triangle inequality.
- `thm-minkowski-finite-real-exponents`: its exact stated range is real `p>1`; the endpoint specializations are separate elementary inequalities.
- `def-p-norms-on-rn`: finite-dimensional published `p`-norms are defined for rational `p>=1`, and the maximum norm requires `n>=1`.
- `thm-harmonic-and-holomorphic-schwarz-reflection-principles`: reflection requires continuity to the boundary and real values on the diameter.
- `cor-single-valued-continuation-on-simply-connected-domains` plus `def-covering-map-and-evenly-covered-neighbourhoods`: continuation over a small disc supplies one disjoint sheet for every germ in the fibre, so the complete germ projection is a covering.

## Alerts and blockers

- Incoming alerts: none.
- Outgoing cross-group alerts: none; no mathematical defect in another group's item was needed to resolve a group-c rejection.
- Group-c blocker: none.
- Whole-run guard status at the recorded final check: `step8-scope --check` passed. The Step-8 guard reported 20 errors, all on items outside group c; its filtered group-c error set was empty. The defect-ledger check reported 24 other-group errors and no group-c error. Those external failures were not edited or reclassified here.

## Focused checks

- Focused precheck: 13 proof-bearing repaired items checked, 0 failing.
- Focused rendercheck: 22 repaired files checked; all frontmatter and math rendered cleanly.
- Group content policy: batches 2, 3, and 4; 145 items, 0 errors, 0 warnings.
- Dependency check: exited 0; repository warnings remained pre-existing.
- Step-8 scope check: 4 groups, 441 items partitioned, 0 open rejections routed, 0 cross-group alerts.
- Exact adjudication reconciliation: 94 rejections, 94 unique matching adjudications.

No Step-8 baseline, judge stamp, scope record, page ordering, or published item was changed.
