# Batch 52 authoring notes

Run: `statistical-models-experiments-62`  
Pair: `valid-p-values-bonferroni-and-simultaneous-coverage`

## Plan reconciliation

- `research/plan-statistical-models-experiments-track.md` SME-52 (L298) and the corresponding A/B entries in `research/plan-spec.json` agree on the page IDs, titles, order, category, and declared prerequisites. No plan/plan-spec conflict was found.
- The models-06 dossier and pair audit predate publication of Mathematical Statistics and Inference Foundations. Their statements that the test/confidence interfaces were still planned are stale. The pair design's old `MSF-08/10` labels are historical; following the owner direction, they resolve to the actual current published items `thm-p-value-superuniformity` and `def-confidence-set-and-coverage`, respectively. Their statements and the p-value-superuniformity proof were inspected in full.
- The earlier pair audit names `thm-finite-union-bound`, but its current statement is explicitly limited to finite probability spaces. That is too narrow for an arbitrary statistical experiment. The proof instead uses `lem-probability-measure-basic-identities`, which is listed on the declared published probability page and states finite subadditivity on a general probability space; its proof and the underlying measure-subadditivity supplier were inspected. This resolves the interface gap without changing the claim.
- The models-06 dossier proposes a normal known-variance interval example. The controlling SME-52 design specifies family choice, the true-null set, and dependence, without requiring a normal model. The B page therefore uses an explicit ten-point location model with identical (hence dependent) marginal coverage events; no normal-specific claim is made.
- The dossier also mentions the general inequality FDR $\le$ FWER and equality under the global null. SME-52 requires the definitions and later examples distinguish the rates, but it does not ask for this additional A-page theorem; no general comparison theorem is claimed. The B example does compute equality under its global-null case and inequality in its mixed-null case.

## Inventory, dependencies, and levels

The scaffold manifest fixes the item inventory before carrier authoring. Levels count only suppliers in this run; all listed external dependencies are published prerequisites.

| Item | Home | Direct dependencies | Level |
|---|---|---|---:|
| `def-null-valid-p-value-and-fwer-fdr` | A | `def-statistical-experiment`, `def-p-value`, `def-expectation-of-a-nonnegative-or-integrable-random-variable` | 0 |
| `thm-bonferroni-simultaneous-coverage` | A | `def-statistical-experiment`, `def-confidence-set-and-coverage`, `lem-probability-measure-basic-identities` | 0 |
| `thm-bonferroni-familywise-error-control` | A | `def-null-valid-p-value-and-fwer-fdr`, `thm-p-value-superuniformity`, `lem-probability-measure-basic-identities` | 1 |
| `ex-bonferroni-simultaneous-coverage-with-dependent-intervals` | B | `def-statistical-experiment`, `thm-bonferroni-simultaneous-coverage`, `def-confidence-set-and-coverage` | 1 |
| `ex-discrete-superuniform-p-value-and-global-null` | B | `def-statistical-experiment`, `def-null-valid-p-value-and-fwer-fdr`, `thm-bonferroni-familywise-error-control` | 2 |

The batch is dependency level 0 with no in-run prerequisite batches. No cycles or choice principles are used. The B examples remain consumers and are not suppliers.

## Source reading and proof route

The complete source records, locators, read ranges, result dispositions, and later fetch stamps are in `research/statistical-models-experiments-62-batch-52.coverage.json`. The two independent treatments are Goeman–Solari's full paper and Fithian's complete 19-page lecture. Their source statements support the p-value and error-rate conventions, Bonferroni's arbitrary-dependence event bound, and simultaneous inference terminology. The authored Bonferroni and joint-coverage proofs are local finite-union arguments; citations do not replace those proofs.

The exact probability-space assumptions, measurability of coverage sections, p-value threshold bound, and endpoint cases are stated in the carriers. The proofs use finite subadditivity and validity only; no independence or randomization is assumed.

The family definition permits an empty $H_{0i}$ by vacuous validity; such an index is never in $I_0(\theta)$. At every use of `thm-p-value-superuniformity`, $i\in I_0(\theta)$ implies $\theta\in H_{0i}$, so the published supplier's nonempty-null hypothesis is satisfied.

The current published interfaces examined were `def-statistical-experiment`, `def-p-value`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-confidence-set-and-coverage`, `thm-p-value-superuniformity`, and `lem-probability-measure-basic-identities`. I read the complete p-value superuniformity proof and the complete probability identities proof, including its general-measure finite-subadditivity supplier `thm-finite-and-countable-subadditivity-of-measures`. The six supplier roots have a 310-item transitive dependency closure; every node resolves to a published item, with no unproved supplier or Axiom of Choice / Countable Choice node in the closure. The confidence-set definition's nonempty-parameter-set hypothesis is stated in the simultaneous theorem.

## Scoped checks and readiness

All results below were run against the explicitly selected batch-52 items/pages and the batch-52 coverage, except where marked run-wide.

| Check | Result |
|---|---|
| `source-fetch-check --coverage research/statistical-models-experiments-62-batch-52.coverage.json --stamp` | Pass, 2/2 full-text PDFs fetched and stamped, 0 drops. Goeman–Solari: 30 pages, 333,830 bytes, SHA-256 prefix `f6ee062ef5a388c3`; Fithian: 19 pages, 5,482,806 bytes, SHA-256 prefix `112486a949d64342`. |
| `coverage-checklist --require-destination ...batch-52.coverage.json` | Pass, 1 A page, 10 harvested results, 0 errors or warnings. |
| `content-policy ...batch-52.pages.json` | Pass, 5 items, 0 errors or warnings. |
| `manifest-deps ...batch-52.pages.json` | Pass, all 5 items have explicit dependency arrays. |
| `proof-contract --strict ...batch-52.proof-contracts.json` | Pass, 4 proof-bearing items, 0 errors or warnings. |
| `precheck` on the 5 item paths | Pass, 4 proof-bearing items pass; the definition is not applicable. |
| `proof-layout` on the 5 item paths | Pass, 5 items and 9 proof steps, 0 defects. |
| `rendercheck` on 5 item paths and 2 page paths | Pass, 7 carriers, 0 errors or warnings. |
| Focused `depcheck` on the 5 item IDs | Pass, 0 errors or warnings; 320-item dependency closure and 261 prerequisite pages cycle-checked. |
| Focused `fwdcheck` on the 5 item IDs | Pass, no forward references, 0 errors or warnings. |
| Focused `extcheck` on the 5 item IDs | Pass, 0 errors or warnings. |
| Batch-local `dependencyLevels` calculation on this manifest | Pass: levels are 0, 0, 1, 1, 2 as recorded above; no cycle. |
| Run-wide `item-dependency-levels check` | Blocked by empty inventories owned by other batches. A subsequent disk inventory found 70 still-empty pages among the other planned pairs; batch 52's scoped levels remain valid. |
| `step1-decisions record` | All five items recorded `ready` with direct dependencies, placement, source/contract evidence and current carrier hashes. No `--owner` override was used. |

## Cross-batch dependency-input blocker

`node tools/batch-dependency-levels.mjs write --run statistical-models-experiments-62` once completed and reported 61 batch groups, maximum level 4; the stored derivative omitted batch 37 while the current item-manifest inventory contains 124 pages across 62 batch IDs. A subsequent `check` detected stale inputs. The next `write` and `check` both stopped while parsing these four out-of-scope batch-60 carriers: `items/def-gaussian-mixture-confidence-sequence-boundary.md` (line 19), `items/lem-gaussian-exponential-mixture-integral.md` (line 26), `items/lem-gaussian-mixture-boundary-crossing-equivalence.md` (line 24), and `items/thm-gaussian-mixture-test-supermartingale.md` (line 27). Each has an unquoted `sources.references` title containing `Concentration Inequalities — Conjugate Mixtures`; YAML interprets the colon as a nested mapping. The batch-60 author/owner must quote those titles and the owner must rerun the shared dependency-level derivation after authored manifests stabilize. Batch 52 does not depend on batch 60 and its own level remains zero. No batch-60 carrier was edited.

Two attempted `--help` invocations of legacy whole-corpus `depcheck`/`fwdcheck` tools actually ran unscoped audits because those tools do not implement that flag; their output was discarded and is not used as batch evidence. The final dependency and forward-reference results above are the focused `--items-file` runs.
