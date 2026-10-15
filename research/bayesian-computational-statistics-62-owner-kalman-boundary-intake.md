# Focused Kalman supplier-boundary intake

Run: `bayesian-computational-statistics-62`. This is an exact interface/premise/placement check for five batch42 Step-1 escalations, not a whole-item mathematical review or an acceptance stamp. No source, live metadata, readiness, native report or hash was changed; no tests or gates were run.

Read the batch42 notes, exact five Step-1 records, all six actual batch42 items (including the ready independent-noise kernel-extension supplier), batch42 A/B pages and manifest, the controlling BCS-39 scope, actual batch6 Gaussian conditioner, actual batch41 filtering-law Definition and existence theorem with their proofs, their actual A-pages/manifests and Step-1 decisions, and the published SME44 linear-Gaussian model Definition. Exact current Statement/Definition/Example excerpts and placements are recorded in the companion `...-owner-kalman-boundary-intake.json`.

## Disposition

No missing mathematical premise or missing local supplier was identified in this focused check. Every escalation reason concerns final reconciliation of supposedly active suppliers, rather than a missing proof. Native current state and genuine result files show that both supplier writers have successfully drained:

| Batch | Native dispatch | Successful result |
|---|---|---|
| 6 | attempt2, endedAt `2026-10-15T05:33:31.350Z`, lastExitOk true | attempt2 result ok true, ended_at `2026-10-15T05:33:12.181Z`, process exit0 |
| 41 | attempt2, endedAt `2026-10-15T05:06:40.775Z`, lastExitOk true | attempt2 result ok true, ended_at `2026-10-15T05:06:40.739Z`, process exit0 |
| 42 | attempt1, endedAt null, lastExitOk null at intake | Still active; root must authenticate its drain before any boundary resolution |

The recomputed native status read completed with updated time `2026-10-15T05:38:38.586Z` and lists42 in flight, with neither6 nor41 in flight. Historical RESUME files were not consulted. Supplier6's conditioner is recorded author-ready at05:27:06; supplier41's Definition/existence theorem at05:03:45/46. Those readiness records are authoring evidence, not independent proof acceptance.

## Exact five records

| Escalated item | Required current supplier interface | Result |
|---|---|---|
| `alg-kalman-filter` | batch41 `def-state-space-filtering-laws` | Actual data-indexed RCD version convention matches; algorithm inherits AC through the published model and records it in axiom_use |
| `lem-one-step-kalman-gaussian-conditioning` | batch6 `thm-multivariate-normal-conditional-law` | Set A=P^-, C=P^-H^T, B=S; observed B is SPD and full Gaussian block is PSD; singular state and Schur covariance allowed |
| `thm-kalman-filter-is-exact-posterior` | batch6 conditioner plus batch41 Definition/existence theorem | Explicit AC, finite Euclidean/standard-Borel histories, independent Gaussian-noise extension, everywhere selected kernel and null-history version caveat match |
| `ex-scalar-kalman-filter-update` | local exact-filter theorem | Parameters give P^-=2, S=3, K=2/3, posterior mean4/3 and variance2/3; no extra premise |
| `ex-kalman-filter-singular-prior-positive-innovation` | local exact-filter theorem | Rank-one P0, Q=0 and R=1 give S=2>0, gain(1/2,1/2), posterior mean(1,1) and rank-one covariance entries1/2; singularity is expressly allowed |

All three supplied IDs occur in both their actual current A-page frontmatter and their unique owning batch manifests. Both Kalman lemmas and exact theorem occur on the actual42 A-page; the two examples occur on its B-page. No placement repair is proposed.

## Boundary details

Only the observed innovation covariance is inverted/factorized. Neither the Gaussian conditioner nor any checked Kalman consumer requires P0, Q, R, predicted-state or filtered-state covariance to be invertible. The conditioner explicitly excludes a pseudoinverse extension to singular observed B, and the Kalman consumers match that restriction through S_k positive definite. Cholesky solves implement the same innovation-only linear system.

Batch41's existence theorem asserts data-indexed conditional versions on finite standard-Borel spaces under AC, without a density or null-history uniqueness claim. The exact Kalman theorem constructs a particular everywhere Gaussian kernel by local induction and then verifies the RCD identity; it does not interpret every null-history value as a uniquely determined posterior. Singular measurement noise is therefore not excluded merely because a state-conditional observation density may fail to exist. T=0 is explicitly the singleton-history initial-law case.

After root authenticates batch42 drain, the smallest next action is to recheck any final changed bytes and mechanically resolve these five supplier-boundary holds. Preserve all current claims, hypotheses and singular-state examples. No mathematical source change is presently needed.
