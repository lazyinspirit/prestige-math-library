# Phase 2 Wave 1 Step 8 adjudication — group c

## Scope and result

I read all six assigned pages and all 62 owned items in batches 10 and 11. I also opened the 83 distinct direct published interfaces cited by the group, and read the complete consumer and supplier arguments needed for each rejection. The generated Step-8 scope and Step-7 context contain no reader warnings, incoming alerts, or cross-group dependency seams for group c.

All eight assigned rejection tuples have exactly one adjudication row. The outcomes are five `confirmed_fatal`, one `confirmed_nonfatal`, and two `false_positive`. The five fatal defects were repaired narrowly and recorded in the defect ledger. No content was changed for either false positive or for the nonfatal finding.

No web source was needed: every disputed point was settled by the exact current local item interfaces, their complete relevant proofs, or an elementary boundary-case derivation.

## Exact adjudications

| item | context SHA-256 | pre-edit `itemHashGuard` | outcome | defect type |
|---|---|---|---|---|
| `cex-a-corner-is-not-covered-by-the-single-c-one-chart-theorem` | `c6a5abcc8c29d46beb36537aae9eaf610a2e32e584bdae17c252e9d17ae8f695` | `063a3ddf8ad51fd1e5a00417609724ed9d6905e03aee65f87c42f7f03e6c2810` | `false_positive` | — |
| `cex-analytic-elliptic-cauchy-solutions-lack-smooth-continuous-dependence` | `6733494a5e3080867acb470395682c7f347ce6fadd27518d4651c01b96ed216e` | `947fd5efba1df6f17b6d4dd5c189abc61232b556399df5bbc3374a1c698c08ef` | `confirmed_fatal` | `dependency_citation` |
| `def-coefficientwise-majorisation-of-multivariable-power-series` | `0e26224e18c36549ecadbbd750b7637cf468b47fee5c377851901dfa4d11f89a` | `9142436540baa59e4d3b912cdc80e8a9df13773e6d102981d3c7ee45c7cda0c1` | `confirmed_fatal` | `other` |
| `ex-positive-weighted-volume-on-an-open-interval` | `986ea8778252fef3da852102b69ae9891381d5e5b432ab8ffaa29fe21da1b100` | `b70ff1fc2030a4fff42807a454abb7f7a36279f74c3ab7df5937c817881512ba` | `confirmed_fatal` | `dependency_citation` |
| `ex-surface-density-and-outward-normal-on-a-graph` | `f770441171b0361d82ce008eba4f004859cdae2a75af33678abfe137daee7c76` | `a34667ae12f505cb414cf351b175bdf9f8c43e6dc4bf74b0d545716b768cccc7` | `confirmed_fatal` | `logic` |
| `lem-an-analytic-germ-has-a-rational-geometric-majorant` | `599b893d9ee2569fb6f6178e6da0552269b530ad74e03d8003c98411b73b3075` | `f9ad437223ab9445a841678337bdee17a923db0b373a8d7447a7fe3fa6f0464b` | `false_positive` | — |
| `lem-finite-ambient-partitions-for-euclidean-boundary-integration` | `bc08a3e33c318f6d5008fa4167c411576d03d42d752f2c1d9c3209bdcf6b66c9` | `6ecc2c5b41c5139f691cd8f1edb96c07bb1d1aab92dcf66441668572f9355de1` | `confirmed_nonfatal` | — |
| `thm-cauchy-kovalevskaya-for-a-noncharacteristic-analytic-cauchy-problem` | `c1a35797197bf50d4dce12936b96f7d8f67645b32964a7e93a0478f140cd4dec` | `172abc8489b7d378ebe25adf7d929b57e77fdcbc594f3f7faf7e7601053cc27a` | `confirmed_fatal` | `dependency_citation` |

The exact model field for all eight tuples is preserved in `research/phase-2-wave-1-judge-adjudications.jsonl` as required by the ledger schema.

### False positives and nonfatal finding

- `cex-a-corner-is-not-covered-by-the-single-c-one-chart-theorem`: the cited `ex-internal-face-cancellation-for-two-glued-regions` defines `Q_+=(0,1)^n`, exactly the unit box at issue. Verification 1.1 explicitly supplies its `2n` compact affine faces, its edge set, parameter-boundary nullity, and local one-sidedness. The citation therefore supports the finite piecewise-C1 presentation.
- `lem-an-analytic-germ-has-a-rational-geometric-majorant`: in the library's explicit zero-based convention, `k<m` ranges over all coordinates `0,...,m-1`. For `m=1` the product contains the single radius factor; it is not an empty product. The cited coefficient bound yields the claimed scalar-radius estimate.
- `lem-finite-ambient-partitions-for-euclidean-boundary-integration`: the suppliers are stated for positive dimension, but the omitted zero-dimensional case is immediate. A compact subset of `R^0={0}` is empty or a singleton. Take every function zero in the empty case; in the singleton case choose one covering member with value one and all other functions zero. This is a locally closable proof-step omission, not a false claim.

## Fatal repairs and rejudge targets

| item | repair | post-edit `itemHashGuard` |
|---|---|---|
| `cex-analytic-elliptic-cauchy-solutions-lack-smooth-continuous-dependence` | Narrowed F7 to products and substitutions by zero-constant inner series. The proof's substitutions `kt` and `kx` meet that hypothesis. | `62ba82d24c4bdf7d65962a8fb26d72b7879c7efe2e703f5866dc3c4feaab4136` |
| `def-coefficientwise-majorisation-of-multivariable-power-series` | Introduced `w=z-c`, wrote expansions about `c`, indexed majorisation by the centre, and corrected the analytic coefficient formula to `D^alpha f(c)/alpha!`. | `50864887a89c7271a980d7e42fc9252ceaa33e99b1c3db4d7b4bd6098942f9bf` |
| `ex-positive-weighted-volume-on-an-open-interval` | Narrowed F6 to the supplier's exact nonnegative measurable-integrand null-set theorem. The used density `1/x` is nonnegative. | `12d4a668c1e793cc440d0aa2cfe26e0b19b72ddea2a5f8773c8d8ccfe92469b5` |
| `ex-surface-density-and-outward-normal-on-a-graph` | Corrected Verification 2.1: rotated graph charts cover the equator in the full-sphere atlas, but no graph chart contained in the closed upper hemisphere contains an equator point. | `0d7619bba591d74bea89d587cc370bdadc4a5d5cd5983053d9f59f9aa1ed5221` |
| `thm-cauchy-kovalevskaya-for-a-noncharacteristic-analytic-cauchy-problem` | Kept F3 for jet-system equivalence and cited uniqueness directly: the first-order analytic-system theorem for at least one spatial variable and the analytic ODE theorem when there are none. Updated the item dependency, batch manifest, and proof contracts. | `4d2fb6569ec31af926d50321d86e12db2e60536f6973359171cbc539101a1a83` |

These five items are the group-c rejudge targets. I did not initiate rejudgment or alter judge records.

The coefficientwise-majorisation definition is quoted by two same-batch consumers, so their citation contracts were regenerated as well. The changed consumer contracts were synchronized in the batch-10, batch-11, and merged proof-contract files. The added ODE edge is within batch 10; it creates no cross-batch review row. The unified frontier ledger was nevertheless refreshed after the dependency edit, as required.

## Evidence consulted

- `items/ex-internal-face-cancellation-for-two-glued-regions.md`, Example and Verification 1.1: exact unit-box presentation used by the corner counterexample.
- `items/def-multivariable-power-series.md` and `items/thm-cauchy-estimates-on-a-polydisc.md`, exact Definition and Statement: displaced-centre monomials, zero-based finite products, and coefficient bounds.
- `items/lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation.md`, exact Statement: the zero-constant restriction on composition.
- `items/cor-integral-over-a-null-set-vanishes.md`, exact Statement: nonnegative measurable integrands only.
- `items/lem-surface-integral-is-independent-of-c-one-boundary-charts.md`, exact Statement, together with the current graph example: graph density and one-sided outward normal; the equator correction is an elementary chart-domain point.
- `items/lem-higher-order-analytic-normal-form-reduces-to-a-first-order-system.md`, `items/thm-cauchy-kovalevskaya-for-first-order-analytic-systems-in-normal-form.md`, and `items/lem-analytic-ordinary-differential-systems-by-coefficient-majorants.md`, exact Statements and complete relevant proofs: jet equivalence and the two uniqueness regimes.
- `items/lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound.md` and `items/thm-heine-borel-rn.md`, exact Statements, plus the explicit `R^0` construction above: the finite-partition boundary case.

No source qualification remained uncertain, so no external browsing was used.

## Alerts and scope changes

- Step-7 reader-warning decisions: none required.
- Incoming or outgoing cross-group alerts: none.
- Published-item repairs: none.
- New lemmas: none.
- Page ordering and published content: unchanged.

## Validation and blockers

- Focused precheck: 4 proof-bearing changed items checked, 0 failures.
- Focused rendercheck: all 5 changed items checked; no delimiter, KaTeX, wikilink-in-math, or YAML errors.
- Strict focused proof contract: 7 affected changed items/consumers checked, 0 errors and 0 warnings.
- Whole-level strict proof contract: currently reports 60 errors in other groups' in-flight repairs and downstream quotation synchronizations; none targets the 7 group-c entries above, whose focused strict check still passes.
- Dependency check: exit 0; all references resolve and no cycles were found. Its existing repository-wide warnings remain warnings.
- Frontier dependency ledger refresh: passed.
- Defect ledger append: 5 rows appended through `tools/defect-ledger.mjs`; run validation checked 57 rows with 0 schema errors and regenerated `research/DEFECT-LEDGER.md`.
- Step-8 guard: passed against `pre-step8`; all 26 current repository-wide item changes were licensed by exact fatal adjudications or another permitted Step-8 route.
- Step-8 scope check: passed with 7 groups, 402 partitioned items, no open routed rejection, and both reader warnings/alerts dispositioned.
- The full defect-ledger closure check is waiting on 8 fatal adjudications belonging to other groups; all five group-c fatal tuples have exactly one matching defect row.

Group c has no unresolved rejection, warning, alert, repair, or local validation obligation. The prescribed Step-8 guard and scope checks pass; the separate full defect-ledger closure and whole-level contract checks remain blocked by other-group in-flight rows.
