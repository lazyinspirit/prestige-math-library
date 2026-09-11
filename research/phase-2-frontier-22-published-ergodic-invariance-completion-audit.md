# Frontier-22 published ergodic invariance and completion audit

Date: 2026-09-11

## Scope and deduplication

This bounded audit follows the exact published interfaces used by the active
weak-mixing and Chacon arguments: invariant sets, strict representatives,
ergodicity, strong/weak mixing, correlation extension, measure preservation on
a generating pi-system, and the measure-completion machinery used by iterates.
All 21 target files and their used clauses were read. This is not a full audit
of every ergodic or completed-measure consumer.

Before classification, the whole canonical ledger and index were searched by
each exact ID, title wording, aliases (including the two floor aliases), the
invariance/pi-system/completion/mixing mechanisms and all supplier IDs. Four
targets had unique U-P rows, while the other 17 were unclassified. The old
U-P evidence is retained in the new clear receipts. No duplicate row or
finding was added, and no published item or workflow state was edited.

## Measure and completion clears

| Item | SHA-256 | Exact disposition |
|---|---|---|
| `prop-measure-monotonicity` | `53faac8d0c54a831d187dc376b3413449358c44f0230eb9e79d385f03c1f2f0f` | Disjointly splitting `B` as `A` and `B\setminus A` proves monotonicity without extended subtraction. U-P to bounded clear; prior reference-pool evidence retained. |
| `prop-two-set-measure-identity` | `1e1f375f875cdd070ad29014ba7a34cedcd0154ef96af62e5eeefed9534e76ae` | A three-piece disjoint decomposition proves the identity using only nonnegative extended sums, including infinite values. New bounded clear. |
| `prop-null-symmetric-difference-preserves-measure` | `e04847004885424a6d72ddf3a164be91928a603e294d5f47d58f7dd7480dc7d3` | The two set differences are measurable null sets; two disjoint-union identities give equal measures without subtracting infinities. New bounded clear. |
| `def-complete-measure-space` | `86ff691fb0f308869207a3424f981a5c23d318d463703f0fa7ac9094f850ecbd` | The arbitrary-subset-of-a-measurable-null-set convention is precise. U-P to bounded clear; prior nonmeasurable-set interface mention retained. |
| `prop-null-sets-form-a-sigma-ideal-in-a-complete-space` | `94739e4f5bb35173f0cf0438b9de75adda7e66b7f94d945d7fa5b4cfb72e3d9c` | Countable subadditivity handles measurable null unions, monotonicity handles measurable subsets, and completeness supplies measurability for arbitrary subsets. New bounded clear. |
| `def-completion-of-a-measure-space` | `cb2814edbd0ad099ead52cbf14c53dcae688cbd8beaad76ee8a8a5a4eb23dfe3` | The measurable-core-plus-subnull representation and proposed value are precise; well-definedness and sigma-algebra status are explicitly deferred under Countable Choice. U-P to bounded clear; prior incomplete supplier mention retained. |
| `lem-completion-domain-is-a-sigma-algebra` | `6e921251d546100d260e3401d5b28a7f5dfca3251a46b7907a42cb8c107c65c0` | The complement formula is exact, and Countable Choice is directly assumed, declared and used to select countably many completed representations before taking their null-envelope union. New bounded clear. |
| `lem-completed-measure-is-well-defined` | `009e323f3e801d6cf23f79d37f6af3c425e5fe2a81b58a781c403b5449f66283` | Any two measurable cores differ inside the union of their measurable null envelopes, so null symmetric difference proves equal values even at infinity. New bounded clear. |
| `thm-completion-of-a-measure-space` | `4859f68b502e15dc71c37d6a7d59a3db66d106bafb51a8c6e1884d771498e24b` | Countable additivity, completeness and uniqueness follow from selected disjoint measurable cores and null envelopes. Countable Choice appears in the statement/Given/deps and at the exact countable selection. U-P to bounded clear; prior incomplete supplier mention retained. |
| `prop-restriction-is-a-measure` | `e75537b74de1c913c32ba34a4d5d8544f7d81df4a05323134fbd8ed30e53d0e9` | Intersecting a disjoint sequence with the fixed measurable set preserves disjointness and unions, so countable additivity restricts directly. New bounded clear. |
| `thm-measure-uniqueness-on-a-sigma-finite-pi-system` | `c38a781070bb86a46086234e001967a122edb516fe54408de936392a8fb6479e` | Restriction to each increasing finite-mass pi-system member reduces to finite uniqueness; continuity from below then exhausts every measurable set. New bounded clear. |
| `thm-measure-preservation-on-a-generating-pi-system` | `2dbc227111c8176286a168a722fde801b6f992473060b57fef71dd4864f8c7e8` | The pullback set function is a measure and shares the supplied finite-mass pi-system exhaustion, so uniqueness proves preservation. Adjoining `X` correctly handles finite measures. New bounded clear. |

## Invariance and ergodicity clears

| Item | SHA-256 | Exact disposition |
|---|---|---|
| `def-strict-and-mod-null-invariant-sigma-algebras` | `074e1f5353f2b7b213f67e2a3b73be5bfa9b979be10c6f455fc3874049d4a326` | Exact and symmetric-difference invariance are well-typed measurable families; their sigma-algebra obligation is correctly deferred. New bounded clear. |
| `prop-invariant-families-are-sigma-algebras` | `4f41020dc8fc59d9b215060dfba142adcbe26b298a8706ffdf1c531d205732a2` | Preimages commute with complements and countable unions; the union of the component symmetric differences contains the only possible discrepancy and is null. New bounded clear. |
| `prop-measure-preserving-compositions-iterates-and-completions` | `3d58ce1e5653535557b609b96b35823a0a8919358c3de918fb137a56c9776372` | Composition and finite iteration preserve pullback measures. The completion clause uses the cleared construction and explicitly assumes/declares Countable Choice; no further selection is hidden. New bounded clear. |
| `lem-mod-null-invariant-sets-have-strictly-invariant-representatives` | `022e6f336da0d1f1e94b55a2e6b0bf4690435a567067d2225ce81911e7d4fc34` | Every iterate differs from `E` only on a finite union of null pullbacks; outside their countable union the limsup equals `E`, and shifting a limsup proves strict invariance even for noninvertible `T`. New bounded clear. |
| `def-ergodic-measure-preserving-system` | `39855a2996c2dae2c10d5ad309c199a6c0dd5a6de0d99e9fc0736f4aebf55e83` | Null/conull invariance is the correct general measure convention, with the zero-or-one form restricted to probability systems. New bounded clear. |
| `lem-integer-part` | `6c1c6a538a2c756999ba93a2827b9e5c7e08b2a775d24a211e977876259cd6ef` | Archimedean bounds and least-natural selection construct the unique floor; the least witness is canonical and uses no choice. New bounded clear; both aliases were checked. |
| `thm-ergodicity-and-invariant-functions` | `0666a1e0f526339d883ba764191a98f89d466b8a29d6e8206519743acc0af54e` | Strict representatives prove the invariant-set equivalence. For each mesh there is a unique conull floor cell, so their countable conull intersection makes a finite-valued invariant real function constant; real and imaginary parts give the complex clause. New bounded clear. |
| `def-strong-and-weak-mixing` | `b6c8b086d4bb67e0d201a8ebecd4f24c6090ddcd315e6dca61b29e57c6e31689` | Ordinary correlation convergence and absolute Cesaro convergence are stated with the correct pullback direction, `T^0` and positive-`N` conventions. New bounded clear. |

## Audited impact pending the common integral repair

| Item | SHA-256 | Exact path and repair |
|---|---|---|
| `prop-mixing-correlations-extend-to-l-two` | `85babe4ccff5afef552aa4f6b169542dce67484deb3247eaf578271f9bc484f4` | Indicator correlations give the set definition, finite simple expansion handles simple pairs, and the uniform `2||h||_2||k||_2` bound plus density handles all `L^2` pairs. The proof directly invokes A-P `thm-koopman-operator-is-a-linear-isometry-on-l-p` and `cor-cauchy-schwarz-inequality-for-l-two`. Apply the common integral/`L^p` repair and revalidate these edges. New A-P impact. |

## Frontier impact and limits

The active weak-mixing and Chacon arguments use the cleared invariant-set,
ergodicity and set-mixing clauses. Their `L^2` correlation route is sound after
the already identified common integral repair. Root was notified that no
distinct active-frontier blocker, new supplier or theorem pair was found.

No external source retrieval was needed because the exact arguments are
elementary set, measure, floor-partition and `L^2` approximation calculations
fully visible in the local items. This audit does not certify every ergodic
consumer or the full transitive closures beyond the clauses named above.
