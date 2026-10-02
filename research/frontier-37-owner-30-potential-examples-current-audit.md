# B24 potential examples: current closure audit

Audit date: 2026-10-01. Scope is only the B-page `logarithmic-potential-capacity-and-riesz-decomposition-examples` and its eight example items. This is a read-only closure refresh; I reused current item receipts rather than re-reading unchanged proof bodies or repeating their source and mechanical checks.

## Pair scope and item decisions

The current A/B pair is `logarithmic-potential-capacity-and-riesz-decomposition` / `logarithmic-potential-capacity-and-riesz-decomposition-examples`. The A-page scope decision is current and closed as owner `proceed`, with scope hash `c031690887fab847b00cd337673b9c30c325ea2ec6963de8d9bd4b092ddbac5e` (recorded 2026-09-30 13:55:17 UTC). The owner reason specifies the current authoring scope and expressly says it accepts no existing proof and passes no mathematical gate.

All eight B-page item receipts remain current at their current `itemHash`, are nonowner decisions at confidence 1, and have no owner hold or pending item review. Seven are `accept`; the Cantor-capacity example is `repaired`. Their recorded authoring reviews report the statement and quantifiers checked against the contract, actual dependencies matched, precheck and rendercheck passing, and strict proof-contract review with zero errors or warnings. Because no item was pending, I issued no new receipts and ran no checks.

| Item | Current raw body SHA-256 | Current Step 3 itemHash | Current receipt |
|---|---|---|---|
| `ex-logarithmic-capacity-of-disc-and-equilibrium-circle` | `ed0bdfb8fd15136482b4d54ef1dae3e970f414a51c44d538e6fd791ec173cbcf` | `7d40bca2204651f3355d7dbed8dfbe235a1d48528ea126790abd3bb075584ef3` | accept, 2026-09-30 18:18:14 UTC |
| `ex-logarithmic-capacity-of-a-real-interval` | `818020d2d08ddedf94c2017633146fe4acc84d158cbd1526840e6e8097909651` | `26cb6abcec5f6f00702261da23a9913c6f713656f177f451ada91e805b38b3bb` | accept, 2026-09-30 18:18:16 UTC |
| `ex-chebyshev-extremal-polynomials-and-capacity` | `7e89792a2286507750b0c43e4923f5bb49ca00da0d39db4d77d43b2cc57d45c5` | `d4a06b3515b5e8a526daf43da4c8ff689f2da8c55b9f399e9111dd23b0caa740` | accept, 2026-09-30 18:18:24 UTC |
| `ex-chebyshev-extremal-nodes-and-arcsine-measure` | `c32e8931f256a88df7be471543f7ed00d7abb38b3be2bf70dc3cdcde4e68d842` | `7f786c210dc24ac394e26a0cc2bad99467f5f32474fe9146da70f635fee729f2` | accept, 2026-09-30 18:18:19 UTC |
| `ex-finite-and-countable-sets-are-logarithmically-polar` | `b6458710be46e7bea65ae38337d0f8d24838c17b0dadcb1a41beba60509def44` | `3e77b1bd793b1253703d932f13c2886d01c06c701d1afbee68f0c69084d6080f` | accept, 2026-09-30 18:18:13 UTC |
| `ex-cantor-sets-with-positive-and-zero-logarithmic-capacity` | `d62836245e253b7c5f876f592117966f43c9e74f6ade785df3a79bf7052aa0c2` | `29004eeabae0db4606ec8f9b11b1df3351b2292f561d12f615dec7eb0c7f36d8` | repaired, 2026-09-30 18:18:08 UTC |
| `ex-riesz-measure-of-log-modulus-is-zero-divisor` | `415fa239c8dcaf280cfdd62c5e6579b4e138efa1bc0693136ee02220a7d70d44` | `5cc030fc6d79902a129e061713a5278135cec6105c2d913e32273b69a02f24f8` | accept, 2026-09-30 18:18:09 UTC |
| `ex-green-function-of-a-circular-conductor` | `41ecc1fe0d7d79a70aac46dc78fd7ce64b6d7a26b3e080f71e75e9163e688dcb` | `2f7b1f6440a5fd3cc499e50f891bb1e02432b9cbdec155275988f65c4c913260` | accept, 2026-09-30 18:18:22 UTC |

## Reused proof routes

The current receipt reasons record the following target-level routes; these were reused without reopening or recertifying them:

- The disc and its boundary circle have normalized arclength as equilibrium measure, constant potential `log(1/r)` on the conductor, the stated exterior potential, and capacity `r`.
- The interval has the arcsine equilibrium measure, its stated potential and exterior formula, and capacity `(b-a)/4` under the pair's energy normalization.
- The disc/interval Chebyshev constants follow from the extremal norms, and the disk Fekete bound uses the roots-of-unity tuple and determinant estimate; Chebyshev nodes give the weak empirical limit to the arcsine measure.
- Countable planar sets are polar by an explicit subharmonic `-∞` witness with the stated countable-choice accounting.
- The positive-capacity Cantor example has the recorded finite energy bound and capacity lower bound; the thin Cantor example has infinite energy for every probability by the layer-cake route. Its current receipt is `repaired` and records correction of a stale step reference.
- The Riesz measure of `log|f|` is the sum of zero orders at isolated zeros, using local factorization and uniqueness of the distributional Riesz measure.
- The circular conductor Green function is `log(|z-a|/r)`, verified radially, with zero boundary limit and the correct infinity normalization.

This report records current decision state only. No B24 item, page carrier, scope decision, receipt, engine state, or gate was changed.
