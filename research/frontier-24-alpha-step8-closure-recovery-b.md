# frontier-24 group b — Step-8 round-1 closure recovery

## Outcome

Handled all 12 exact current group-b rejection tuples: 10 `confirmed_fatal`
and 2 `confirmed_nonfatal`. Every outcome was appended to
`research/frontier-24-judge-adjudications.jsonl` with the exact tuple and the
full pre-edit guard hash. The ten fatal items were repaired and are the group-b
rejudge targets. Neither nonfatal item was edited.

## Exact dispositions

| item | context_sha256 | pre-edit item_sha256 | outcome | disposition |
|---|---|---|---|---|
| `def-permutation-matrix-partial-pivoting-and-pivot-growth` | `bc999189133c1cc42a1a25d7496c5f93deebb414a160bba360ed84805fdd334e` | `bb21dd7bbfc32009fe42fdc186c7aedab5619845dd4df1168e54ad96721af50e` | `confirmed_fatal` | The definition used an unbound dimension. It now fixes `n >= 1`. Defect `frontier-24-S8R1-b-001`; rejudge target. |
| `def-real-and-complex-givens-transformations` | `6eb134ebc34c8cfae8170f43af357e7a4f1a0869ccb6af4772cd56209bf5b63b` | `63ad88340e1805bed46e1fddd4157858008d8a12275bfa305017a959b7fefacc` | `confirmed_fatal` | The definition used an unbound dimension. It now fixes `n >= 2` before choosing two coordinates. Defect `frontier-24-S8R1-b-002`; rejudge target. |
| `def-velocity-derivation-of-a-smooth-curve` | `0054c2aee57573dd6e8e5b70fcd30be8d1b6ff01645438e70fa43c690e7742df` | `89eca45de6ffe78b43a9b5772a09f783aff07b1d7fba02026fb7be82c0a6ad05` | `confirmed_fatal` | The definition used a free manifold symbol. It now fixes a smooth manifold, base point, and curve in that manifold. Defect `frontier-24-S8R1-b-003`; rejudge target. |
| `ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces` | `89875f32ab26019740588f9aca80113e71fb51e6d1ef7737edeffe332bf2d99f` | `1dcedb2200628b1266df9ff72d47777df4e2767e037fc8eb39a25b817f4ad3b4` | `confirmed_nonfatal` | The range `0 <= sigma <= 1` is stated in the cited smooth-step definition's remarks; the fact line omits it, but the construction and conclusion are correct. No edit. |
| `ex-the-tangent-bundle-of-the-circle-is-a-cylinder` | `3d9bba2997cc3cee445f58e0272cbf4057f1e4255c8c4a277c5b59a96ba12187` | `b044933af3ef6f6787da9a84df20c3fa4303805ae0f82db4b260f4881e98a966` | `confirmed_fatal` | Smoothness of the cylinder map was asserted without coordinates. The proof now computes it as `(theta,a) -> (theta,a)` in induced bundle coordinates. Defect `frontier-24-S8R1-b-004`; rejudge target. |
| `ex-the-tangent-space-of-the-sphere-from-curve-velocities` | `1a1dffeecba77b5764df791de06e9912a469c87cbd07f0b56e056e21e2c10758` | `f33a0960e362e79174a63e05f22f28143c45984a09033b5b838814dd5878a188` | `confirmed_fatal` | Injectivity of ambient velocity on contact classes was missing. A standard hemisphere chart now proves equal ambient derivatives imply contact equivalence. Defect `frontier-24-S8R1-b-005`; rejudge target. |
| `lem-chart-bump-at-a-point-with-prescribed-support` | `7214c17470733fd47910bb8b492c36c387a78820def1e3d38d8be66b84a07988` | `a9c95d4d8de165f25364540254cd223e85bc18edc2b529df167dbeb152f74fc5` | `confirmed_fatal` | The locality citation omitted continuity. The proof now cites the exact smooth open-cover pasting lemma for the two agreeing pieces. Defect `frontier-24-S8R1-b-006`; rejudge target. |
| `prop-finite-biproducts-of-complexes-are-computed-degreewise` | `2d8ba31f39d14f45c2d31a0ee44a4621017a650281467b1133ad28cd4090049b` | `96b71da6b25a2659f13d5294a6bd91e736d6a754796753bedcf9eda85d364241` | `confirmed_nonfatal` | An abelian category is additive by definition. The proof leaves that immediate unpacking implicit; the proposition remains correct. No edit. |
| `thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors` | `ac65cb9cd2070e169f6af198a7ee1f6bd463b0270dc60d212e148032c16d9c38` | `4edf2161eb04817f9a1e2ffa8f7acd221c945e641f04a12b71634376090d0754` | `confirmed_fatal` | The theorem left `n` unbound and did not exclude `n = 0`. It now assumes `n >= 1`, retaining the explicit `n = 1` empty-product case. Defect `frontier-24-S8R1-b-007`; rejudge target. |
| `thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model` | `0802d80ce29b1dcf950dd40a32450b910364cc2e1fdb2adf2ae2b38aac3b304e` | `d9704636aec57745e953a5b358210a072b59569ec29cdc7009fe710242e18f2e` | `confirmed_fatal` | Scalar-operation bounds did not prove the claimed local block perturbation. The narrowed theorem assumes the local Householder identity and `3 gamma_m` bound explicitly and proves only their global accumulation. Defect `frontier-24-S8R1-b-008`; rejudge target. |
| `thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure` | `9b2b95a4496bc0e9daef9cbde60cc28d6b081fc7fb8f6571184ffdfcc6603ed2` | `e9990505f41ca51fd10c53a3088f4294d257a2c22623518f9145f27861890548` | `confirmed_fatal` | The countable-subcover step spent unstated countable choice. The title, statement, facts, and proof now assume `AC_omega`. Defect `frontier-24-S8R1-b-009`; rejudge target. |
| `thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure` | `a20dcffd74bc6991a12b712dc1d9a6ab5e089ae096b99e048d61dd79a0112573` | `ba6f728f7aaf958da9854fb155bb93002a071c10eb3c2b9668311a8dd2e39f14` | `confirmed_fatal` | The countable-subcover step spent unstated countable choice. The title, statement, facts, and proof now assume `AC_omega`. Defect `frontier-24-S8R1-b-010`; rejudge target. |

## Contract updates

Regenerated the exact citation and derivation records made stale by the ten
repairs in batch contracts 3 and 9, including downstream group-b citations.
Updated the five affected high-risk reviews and regenerated
`research/frontier-24-proof-contracts.json` from all ten batch contracts.

## Alerts

None. No cross-group defect was discovered and no published item was changed.

## Checks

- Exact outcome join: 12/12 current tuples answered, with 10 fatal and 2 nonfatal outcomes; all ten fatal items changed and both nonfatal items remained unchanged.
- Focused precheck: all seven repaired proof-bearing items passed.
- Focused render check: all ten repaired items passed YAML, delimiter, wikilink-in-math, and KaTeX checks.
- Focused proof-contract: 18/18 regenerated entries passed with zero errors or warnings.
- Citation fidelity: 226 citations across batches 3 and 9, with no missing quote or widening candidate.
- Risk report: all five affected high-risk items have complete current reviews.
- Dependency check exited successfully with existing repository warnings only.
- Defect-ledger validation checked 226 frontier-24 rows with zero shape errors; ten exact round-1 group-b defect rows are present.
- Step-8 guard passed: all 67 current Step-8 item changes are licensed by exact fatal adjudications or terminal resolutions.
- Exact closure recomputation: 475/493 current verdict sets, 18 need rejudge, 0 unadjudicated, and 0 open fatal.

## Rejudge targets and blockers

The engine-owned next rejudge must cover these ten group-b repairs:

- `def-permutation-matrix-partial-pivoting-and-pivot-growth`
- `def-real-and-complex-givens-transformations`
- `def-velocity-derivation-of-a-smooth-curve`
- `ex-the-tangent-bundle-of-the-circle-is-a-cylinder`
- `ex-the-tangent-space-of-the-sphere-from-curve-velocities`
- `lem-chart-bump-at-a-point-with-prescribed-support`
- `thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors`
- `thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model`
- `thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure`
- `thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure`

The closure check also reports eight out-of-group items awaiting rejudge. They
were not changed or adjudicated here:

- `cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language`
- `cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake`
- `def-principal-part-at-an-isolated-point`
- `fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language`
- `lem-two-omitted-values-rule-out-an-essential-singularity`
- `thm-chomsky-normal-form`
- `thm-stirling-formula-gamma`
- `thm-zero-divisor-theorem-on-plane-domains`

No extra judge cycle was initiated in this dispatch.
