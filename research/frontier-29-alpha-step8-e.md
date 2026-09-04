# Frontier 29 Step 8 — group e adjudication

## Result

All 18 assigned rejection tuples for batches 5 and 16 were adjudicated against
the current item text and the cited dependencies. Outcomes are 2
`confirmed_fatal`, 14 `confirmed_nonfatal`, and 2 `false_positive`. Only the two
confirmed-fatal items were edited. Both are rejudge targets and both have
matching rows in `research/defect-ledger.jsonl`.

There were no incoming alerts, no outgoing cross-group findings, no published
repairs, and no blockers.

## Exact adjudications

The complete exact rows, including the configured-judge identity, are in
`research/frontier-29-judge-adjudications.jsonl`. The hashes below are the full
rejection context hash and the pre-edit guard-form item hash.

| item | context SHA-256 | pre-edit guard SHA-256 | outcome | adjudication and disposition |
|---|---|---|---|---|
| `cor-a-nonvanishing-vector-field-has-locally-parallel-integral-curves` | `4caa11b7458b105fcb35765468587aa872c10dd8d140b8378a05b0e5d5396297` | `5064667a75f9959ee9640d2b4d1e9c3b824a65f5b2138847bf5b66df4fd31813` | `confirmed_nonfatal` | The local statement is correct. Step 2.1 should read the displayed affine lines only on connected parameter intervals for which they remain in the flow-box coordinate domain. That restriction is immediate from the word “locally” and the definition of an integral curve on an interval. Fatal-only rule: no edit. |
| `cor-diffeomorphism-pushforward-preserves-lie-brackets` | `64e1411e517c82abedd02dfb0a2ebad90c06d95ccfc0a9b30d452f652a250586` | `d97770330fdbb732c3036c3e73725fa836b74ab776bb05027ff6bbe3a769c336` | `false_positive` | The page’s smooth-vector-field convention already assumes the countable-choice condition needed for the canonical tangent-bundle smooth structures, and the cited pushforward definition repeats it. The corollary uses that already-defined construction; it does not assert a choice-free construction. No edit. |
| `cor-finite-dimensional-normed-spaces-are-banach` | `2a003e9c36a142438f19948a6784f1699e2a28b79e0ad220f3ea24132bc846d9` | `28db26b8ece96ec07cecf7b0db7762f657cf6abc8f77559666e715998bdd6243` | `confirmed_nonfatal` | The complex coordinate norm is Lipschitz-equivalent to the pulled-back real norm, and equivalent norms have the same Cauchy and convergent sequences. The opened `def-equivalent-norms` proves this completeness transport explicitly. The local citation in step 1.3 is incomplete, but the claim and construction are correct. No edit. |
| `cor-infinite-dimensional-closed-unit-ball-is-not-compact` | `3284a0d02cb5fb29c99ec32541c6ca984969cb62241f376f7867da8790c70b7b` | `e2d39464f68026c01fd74bfafef61d201b3f1e7332bf6dcdd23f88f8c73e3716` | `false_positive` | In the library’s published `def-norm-and-normed-space`, unqualified “normed space” means a real normed space. Hence this corollary is already in the real case of the cited real-or-complex theorem. No hypothesis is missing. No edit. |
| `def-action-of-a-vector-field-on-smooth-functions` | `f974413f84beea8c2821d4d89a86731bf351d22e6c1f3a313919dc84a0a50036` | `b8fae15e3319c056c33d1a2c4265ed18f60b07b8eb03c6c801e31ec8d01304f0` | `confirmed_nonfatal` | Smoothness of `p -> X_p(f)` follows immediately in coordinates from `Xf = sum_i X^i partial_i f`; the next proposition supplies exactly that calculation. The definition’s codomain is correct, although its local well-definedness explanation is deferred. No edit. |
| `ex-a-time-dependent-translation-field-and-its-evolution-operator` | `8803290750f948eb20af595db9b13af41ae3573dce7a9f16a741dc8797470410` | `be5aa30ddb7c71b538c31fbf33c304463e24eb1f543b30cb9f8415565bb5306f` | `confirmed_fatal` (`logic`) | As quantified, `I` had no interval hypothesis, so the integration segment between `s` and `t` could leave the domain of `a`. Repaired by taking `I` to be an open interval and explicitly invoking interval convexity before the global formula. Rejudge target. |
| `ex-a-vector-field-with-finite-time-escape` | `5d5c4c99798274cbad6a655206dd9f0affb871e78db21a5da1ca6b65fab62349` | `066e4d789e2f1c269caed524cea5f2cd0c845ac66c544d91812ce3d70b1f793f` | `confirmed_nonfatal` | The omitted maximal-domain sentence is immediate: uniqueness forces any extension to equal `x_0/(1-x_0 t)` below `1/x_0`, whose divergence rules out a continuous value at the finite endpoint. The claimed incompleteness is correct. No edit. |
| `ex-choice-free-discontinuous-functional-on-c00` | `e6463eb57f95d8fae792766f4a1458d609c669b3f68f923663e9d302c60f8647` | `7b96c9fa7d0d143b9511264bbda52c4e0c5c36943696d01cc4ca925c5b6c4de6` | `confirmed_nonfatal` | The written implication needs the standard converse: continuity at zero of a linear functional gives a global norm bound by scaling a small ball. That one-line argument closes the gap; the functional is genuinely discontinuous. No edit. |
| `ex-explicit-equivalence-constants-for-standard-norms-on-kn` | `00d7abc276d2696ef055d83b87816f737ffe1e0aae14e7abd58225e069632625` | `683d03051dd1af2a2beabdb2820dc20ae24fe9e88cec34ece6c0505d0eb50560` | `confirmed_nonfatal` | The displayed chain is true. The omitted link follows directly from `sum_j abs(x_j)^2 <= n ||x||_infinity^2`, hence `sqrt(n)||x||_2 <= n||x||_infinity`. This is an immediately closable calculation. No edit. |
| `prop-the-flow-of-a-vector-field-tangent-to-a-closed-embedded-submanifold-preserves-it` | `c36d50af5d59ab22c4f1944d7d3699251c1c555d4b34f2439abc919bf398ccd8` | `6c294f1c24647f8d8ad0531d2a5ff58a3ec7d000192851409ac56765dde2fa3f` | `confirmed_nonfatal` | Equality of ambient and restricted trajectories is initially only on their common domain. The continuation closes locally: along an ambient maximal curve, the times lying in the closed submanifold form a nonempty closed set, and restricted local existence plus uniqueness makes that set open; connectedness of the time interval gives all times. No edit. |
| `prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains` | `b7407507d307eae01a698e7f8aa3f980b7da35dcde35c04d41e480063a7dc6ff` | `a2bbc4b395cc2e51d229140e8c5a82da64eedfdd01732c63240d9d644734af2a` | `confirmed_nonfatal` | The local group law alone does not prove domain transport, but the opened direct dependency establishes `I_{Phi(t,p)} = I_p - t` in its translation-of-maximal-curves step and then proves the inverse-time claim. The proposition omitted that part from [L1]. No edit. |
| `thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent` | `160f409f33015b61dbaa279f911a27cdfdd67cd4ce92eff5964a3dd07a882a70` | `08edd3cfd28dd391c214a4358c817412209e26b4b0d2e145b1169971a8e48ea5` | `confirmed_nonfatal` | The proof establishes the exact two-sided inequality used by the cited definition. A complex norm restricts canonically to a norm on the underlying real vector space, as permitted by the opened real/complex convention. The missing explicit underlying-real phrase in [L2] is a local typing/citation clarification, not a false claim. No edit. |
| `thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval` | `c6965d79eeb035d8a9b04f06d396580afef2c49027ce5cdf0caf9b3dd6feee23` | `cb44bf05101e0a7671a2ecbc5801fff233015a817937391654e7a620503e08f9` | `confirmed_nonfatal` | The compactness-to-convergent-subsequence step is uncited, but a compact subset of a smooth manifold is metrizable and therefore sequentially compact; equivalently, the extension can be proved by a finite local-flow cover of the compact support. The theorem is correct and the omission is local. No edit. |
| `thm-coordinate-map-for-a-finite-dimensional-normed-space` | `a0477bad22388734f44e3cd70d9cd3a855023b177070b432ac91de2b2bc38bcc` | `8ef6e6b9093017f5cec8884debe1b28408f982c8b94f7571e9254c89fead44fa` | `confirmed_nonfatal` | Definiteness of the pulled-back real norm uses injectivity from step 1.1 in addition to [L4]-[L5]. The missing step citation is immediate and the constructed function is a norm. No edit. |
| `thm-derivations-of-smooth-functions-are-smooth-vector-fields` | `a6a27f3775fb9133fd1b258c1d8905b7af1635d57d6fae35561047ab7c3ca971` | `586c85242e05647c3358f61d0af90502e1d7792006a0598b824331a12594fb56` | `confirmed_nonfatal` | For an arbitrary local germ at `p`, multiply a representative by the [L5] bump equal to one near `p` and extend by zero. This gives the missing global representative and makes `D_p` well defined on all germs. The dependency is already present; one sentence is omitted. No edit. |
| `thm-fundamental-theorem-on-flows` | `646224239e7f024a5603c90a278b76f74501a42f6413b5d1a1081db70df0b28a` | `eb52a08c51e93b553c8f4bd94445206369148d7aaadb814f0b7a7445adbfccf5` | `confirmed_nonfatal` | Step 2.1’s infimum over all real times is indeed `-infinity` whenever sufficiently negative times are outside the maximal interval. The rejection independently matches the Step-7 concern. Restricting to the forward segment from `0` to the chosen positive bad time, or using the supremum of good forward times, repairs the first-exit argument immediately without changing the theorem. Fatal-only rule: no edit. |
| `thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves` | `9ec7abbb7f4c3b944cb9f8598f1fb4b2dc17fb4cec8d2d55b4c5ae1e1a43cb3f` | `5225e96ccbfc4a0c293f20a9ff66df8bfa146c0df1eba5805ae7adbc4ce2f09f` | `confirmed_nonfatal` | The direct Euclidean interface states smooth dependence in the initial state and `C^1` dependence in time, so [L3] overstates it. Joint smoothness nevertheless follows locally from the smooth ODE and repeated differentiation of `partial_t Phi = X(Phi)`. The missing bootstrap is local and the manifold claim is correct. No edit. |
| `thm-time-dependent-vector-fields-have-local-smooth-evolution-operators` | `e481b8254425eae13870cfe3dad5f427a1827163cb0b32cca76e0291f2e6ee3b` | `546cf39786fc38c3566fd2220a7b66c0b877f3844709f5ecc4a0a84abaece460` | `confirmed_fatal` (`logic`) | The theorem quantified over all points of an interval without requiring an open time domain, while its Euclidean dependency applies on an open time-state domain. Repaired by binding an open interval `I`, taking `J` open with `J subseteq I`, and stating the open-domain application in step 2.1. Rejudge target. |

## Repairs and rejudge targets

- `ex-a-time-dependent-translation-field-and-its-evolution-operator`: guard hash
  `be5aa30ddb7c71b538c31fbf33c304463e24eb1f543b30cb9f8415565bb5306f`
  before repair and
  `29eddca8c945c4a6f51c5197a13e8f32ce5cf9a4bd18bcbf9aff0da9bc576a49`
  after repair. Defect row `frontier-29-A8-e-001`.
- `thm-time-dependent-vector-fields-have-local-smooth-evolution-operators`:
  guard hash
  `546cf39786fc38c3566fd2220a7b66c0b877f3844709f5ecc4a0a84abaece460`
  before repair and
  `6dcfc61cfb9176819ce787d1b9307a3dc95f538c02d5d5f5586214cf98c8dbe9`
  after repair. Defect row `frontier-29-A8-e-002`.

These are the only group-e rejudge targets.

## Sources consulted

- John M. Lee, *Introduction to Smooth Manifolds*, 2nd ed., Chapter 9,
  Theorem 9.48, full text consulted at
  `https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf`. The theorem
  assumes an open time interval and produces an open time-dependent-flow domain;
  this supports both confirmed-fatal open-domain repairs.
- The same Chapter 9 states that the fundamental flow has maximal integral
  curves and time slices that are diffeomorphisms between their open domains,
  supporting the nonfatal disposition of the inverse-time domain-transport
  omission. Its flow-box discussion describes the local trajectories as
  parallel coordinate lines, supporting the interval-restriction reading of the
  corresponding corollary.
- Opened published library dependencies included `def-equivalent-norms`,
  `rem-real-and-complex-normed-space-convention`,
  `def-norm-and-normed-space`,
  `def-smooth-vector-field-as-a-tangent-bundle-section`,
  `def-pushforward-and-pullback-of-a-vector-field-by-a-diffeomorphism`,
  `def-derivation-at-a-point-and-tangent-space`,
  `lem-manifold-bump-for-a-compact-set-inside-an-open-set`, both Euclidean ODE
  theorems, and `thm-fundamental-theorem-on-flows`. The adjudication table states
  the exact claim each one settles.

## Checks

- Focused precheck on the two changed items: 2 checked, 0 failing.
- `node tools/defect-ledger.mjs check --run frontier-29 --adjudications research/frontier-29-judge-adjudications.jsonl`: 352 run rows checked, 0 errors.
- Step-8 guard against `pre-step8`: 2 changed items, both licensed, 0 unlicensed changes.
- `node tools/step8-scope.mjs check --run frontier-29`: 7 groups, 755 items, 282 open rejections routed, and 0 cross-group alert dispositions; passed.
