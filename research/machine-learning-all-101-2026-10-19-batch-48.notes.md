# Batch 48 authoring notes — Minimum-norm interpolation and double descent

Run: `machine-learning-all-101-2026-10-19`
Pair: `minimum-norm-interpolation-and-double-descent`
Assigned batch dependency level: 2; prerequisite batches: 15 and 47.

## Scope, plan comparison, and controlling direction

- Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the batch task, the dependency-order dispatch, the full ML-45 design section, `plan-spec.json`, and the current owner direction.
- The plan and `plan-spec` agree on the four proposed items, pair titles, page requirements, and proof route. No conflict between those two planning artifacts was found.
- The owner direction overrides their finite-moment phrasing: the current local real RMT risk supplier uses one infinite iid array and its upper-left blocks under a finite fourth moment. The new risk statements preserve that interface. They do not attribute the finite-fourth extension to Hastie et al.
- The Hastie paper's underparameterized theorem assumes a `4+eta` moment, while its overparameterized route uses a stronger `8+delta` condition. Those source proofs are not used as proof of the local finite-fourth claim.
- The design's unqualified “diverges at `gamma=1`” is corrected: the one-sided risk formulas diverge there only when `sigma^2>0`. The theorem makes no limit claim for sequences with aspect ratio tending to one.
- The design's “global minimum remains underparameterized” wording is recorded accurately as an infimum: with positive noise the infimum is zero as `gamma` decreases to zero and is not attained; in the noise-free case zero is attained throughout the underparameterized branch. The overparameterized total curve is not claimed to decrease for every signal-to-noise ratio.
- The Gaussian RKHS interpolation claim is preserved at its planned strength. The iid fill-distance argument is proved locally, but the Gaussian power-function estimate remains an explicit unproved supplier and both it and the dependent theorem are escalated.

## Authored inventory and logical dependency levels

The batch manifest and A/B page frontmatter contain these ten items. Levels are recomputed from actual in-run `deps` edges, including cross-batch suppliers; external published dependencies do not raise an item level.

| Item | Level | Role and current disposition |
|---|---:|---|
| `def-ridgeless-minimum-norm-regression` | 0 | Defines `X^+y`; verifies its least-squares characterization against the published theorem. |
| `lem-iid-uniform-fill-distance-rate` | 0 | Complete cube partition, empty-cell bound, union bound, and Euclidean fill-distance estimate; states Countable Choice because the local Lebesgue-volume supplier does. |
| `lem-ridgeless-risk-decomposition` | 1 | SVD proof of the exact kernel-projection bias and pseudoinverse trace variance decomposition. |
| `lem-gaussian-rbf-power-function-fill-distance-bound` | 2 | Exact proposed local interface; proof unresolved and escalated. |
| `thm-noiseless-rkhs-interpolation-fill-distance-bound` | 3 | Complete reduction to the power function and local random fill-distance rate; escalated because the Gaussian power estimate is unresolved. |
| `lem-zero-signal-isotropic-risk-limit` | 8 | Complete signal-rescaling cancellation proof from the positive-signal risk formula; escalated because its current RMT supplier readiness is stale. |
| `thm-isotropic-ridgeless-risk-across-interpolation-threshold` | 9 | Covers every fixed signal norm `r>=0`; escalated on the zero-signal/transitive RMT readiness path. |
| `lem-isotropic-minimum-norm-risk-components` | 10 | Separates limiting bias and variance by subtracting the zero-signal variance; escalated because its risk theorem prerequisites remain open. |
| `ex-double-descent-in-neural-and-tree-models` | 0 | Reports the source's finite RFF, two-layer-network, and random-forest experiments without turning them into a universal theorem. |
| `ex-isotropic-risk-components-and-signal-to-noise-regimes` | 11 | Derives monotonicity, the `r/(r-sigma)` interior minimum when `r>sigma>0`, and threshold qualifications from the component limits; escalated with its supplier. |

The Gaussian power-function item has no fabricated proof section. Its exact statement, references, missing proof chain, and the dependent theorem's conditional derivation are preserved in the item bodies, source-resolution record, and proof contract notes.

## Supplier bodies, conventions, and unresolved readiness

- Batch 15: inspected the real PSD-kernel/RKHS definition, canonical RKHS construction under Countable Choice, Gaussian radial kernel sum-of-squares proof, and finite-dimensional projection lemma. Their current Step 1 records are hash-closed `ready`.
- The published Moore–Penrose page and the complete minimum-norm least-squares theorem were inspected. The least-squares definition uses `X^+y`; no alternate formula such as `(X^TX)^+X^Ty` is asserted.
- Batch 47: inspected the complete current real isotropic risk-corollary proof and the directional resolvent theorem. Their statements retain the single infinite real/complex iid-array, upper-left-block convention and finite-fourth-moment law class. The direct corollary, `cor-isotropic-minimum-norm-risk-closure-under-edge-gap`, has a `ready` record whose current hash check is open; its direct directional supplier, `thm-directional-sample-covariance-resolvent-limit`, likewise has a `ready` record whose current hash check is open. The tool reports “Item or dependency changed; record current readiness” for both. No other pair's files or records were changed.
- The transitive batch-46 Marchenko–Pastur law, positive lower-edge theorem, and MP transform lemma were inspected; their current Step 1 records are hash-closed `ready`. The batch-47 deformed fixed-point uniqueness lemma is also hash-closed `ready`. These records do not close the stale batch-47 supplier hashes above.
- The RMT risk corollary assumes `r>0`. The local zero-signal lemma proves the `r=0` branch by applying the corollary to deterministic signals `e_1` and `2e_1`, then using `(4R_1-R_2)/3` to cancel bias. Its algebra is complete, but its RMT dependency is not currently hash-closed.

Exact cross-batch records and the open/verified statuses are in `machine-learning-all-101-2026-10-19-batch-48.cross-batch-dependencies.json` and `machine-learning-all-101-2026-10-19-batch-48.dependency-inputs.json`.

## Source reading and dispositions

All successful source passages, exact locators, supported items, and per-result dispositions are in `machine-learning-all-101-2026-10-19-batch-48.coverage.json`. The primary book treatment is Rasmussen–Williams, *Gaussian Processes for Machine Learning*, Chapter 6, §§6.1–6.2 (`https://gaussianprocess.org/gpml/chapters/RW6.pdf`). The independent ridgeless model is Hastie–Montanari–Rosset–Tibshirani (`https://arxiv.org/pdf/1903.08560`), and the empirical and noiseless-RKHS source is Belkin–Hsu–Ma–Mandal (`https://arxiv.org/pdf/1812.11118`). The Gaussian estimate route was checked in the full Rieger–Zwicknagl article (`https://link.springer.com/content/pdf/10.1007/s10444-008-9089-0.pdf`) and Rieger's dissertation (`https://d-nb.info/994624026/34`).

The Belkin Appendix A proof is explicitly a sketch that invokes Wendland (2004), Theorem 11.22. The official Springer PDF of Rieger–Zwicknagl was fetched and read in full at `https://link.springer.com/content/pdf/10.1007/s10444-008-9089-0.pdf`. Its compact-cube route uses local polynomial reproduction based on Madych and Nelson (1992), Lemma 1, but the article cites that lemma without proving it; its separate general-domain route invokes Wendland (2001). The author dissertation gives the same cube result and also cites Madych and Nelson rather than supplying the missing proof. The Cambridge chapter route redirected to login, SciSpace returned only two front-matter pages, CiteSeerX and the Göttingen thesis host returned 403, and the Madych–Nelson ScienceDirect page returned 403. One initial retrieval plus five recovery attempts and their known URLs/outcomes are recorded in `machine-learning-all-101-2026-10-19-batch-48.source-resolution.json`; only date-level times were available. The full alternate Rieger article did not resolve the cited prerequisite, so the theorem and local interface remain owner-escalated rather than dropped.

## Validation and active run state

- Item levels were recomputed against all current run manifests. All ten batch-48 labels match their computed levels (maximum level 11); the run-wide CLI reports 58 unrelated empty-inventory errors. The scoped statement-first check found 0 defects across these ten items, and both A/B page bodies are empty as required.
- `manifest-deps` on the batch-48 pages file: 10 items, 0 missing dependencies, 0 errors.
- Strict proof-contract check: 9 proof-bearing items checked, 0 errors, 0 warnings. The unproved Gaussian power-function interface is listed as unresolved rather than given a fake proof contract.
- `proof-layout` on all ten changed items: 10 items, 26 numbered steps, 0 defects.
- The batch-level graph could not be recomputed from current run data: `batch-dependency-levels.mjs check` fails while parsing the unrelated `items/thm-policy-gradient-theorem.md:39` locator, whose double-quoted YAML contains the invalid escape `\gamma`. The dispatch still assigns this batch level 2 with prerequisite batches 15 and 47; the scoped item graph has no cycles or label mismatches. This external carrier was left untouched, and the shared `batch-dependency-levels.json` was not rewritten because it is engine-owned.
- The required `source-fetch-check --stamp` verified Hastie, Belkin, GPML, and the Rieger dissertation: 4/5 sources are stamped. The official Rieger–Zwicknagl PDF was fully read through the browser, but the repository fetcher returned a 540-character HTML block on all six attempts; `batch-48.source-coverage.json` records that unstamped source. The coverage checklist reports 0 errors and one low-yield warning (4/19 harvested results scaffolded); the separate source-resolution record keeps the Wendland and Madych–Nelson proof-chain gaps open.
- The latest live Autopilot status read at `2026-10-18T22:45:55.705Z` showed the run at `1-scaffold`, 58/101 covered, no work in flight, and the existing owner repair/recertification blocker. The active missing IDs were `6, 10, 11, 40, 41, 42, 44, 45 +35`. The current `git log -1` was `50139bdcb6 Defer compact construction artifact scans until author drain`. No Autopilot state, shared plan, published item, or other pair's carrier was edited.

## Step 1 decisions and next reconciliation

The final non-owner Step 1 records were written after synchronizing the item graph, proof contracts, and source coverage. The definition, fill-distance lemma, exact risk decomposition, and empirical experiment report are `ready` with closed current hashes. The Gaussian power estimate, its dependent RKHS theorem, and all RMT risk/component consumers are `escalated` with exact unresolved supplier IDs and evidence. The scoped decision audit confirms 4 ready and 6 escalated records. These records are authoring dispositions, not independent approval or publication.
