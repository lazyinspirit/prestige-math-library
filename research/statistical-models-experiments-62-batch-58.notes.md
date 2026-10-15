# Batch 58 — Discrete test supermartingales and Ville

## Inventory and dependency levels

The controlling design is SME-58 in `research/plan-statistical-models-experiments-track.md`; the matching `plan-spec.json` page row has the same A/B IDs, order, title, category and five required pages. Batch 58 is level zero with no prerequisite batches in the supplied `batch-dependency-levels.json`.

| Item | Page | Kind | In-batch suppliers | Level |
|---|---|---|---|---:|
| `lem-finite-horizon-test-supermartingale-crossing-bound` | A | lemma | none | 0 |
| `thm-discrete-ville-inequality` | A | theorem | finite-horizon lemma | 1 |
| `ex-independent-uniform-repeated-peeking-inflates-global-null-error` | B | example | Ville theorem | 2 |
| `cex-test-supermartingale-supremum-threshold-need-not-be-attained` | B | counterexample | Ville theorem | 2 |

The scoped `item-dependency-levels.mjs` calculation was run against the two batch-58 pages before carrier authoring; it returned levels 0, 1, 2, 2 and no cycles or label errors. The logical item dependencies and levels are recorded in the scaffold manifest. External dependencies are published items and do not raise the in-run item levels.

## Actual prerequisite bodies and assumptions

Inspected the actual bodies of `def-nonnegative-test-supermartingale`, `thm-villes-inequality`, `thm-anytime-validity`, `def-filtration-and-filtered-probability-space`, `def-adapted-and-integrable-stochastic-process`, `def-martingale-submartingale-and-supermartingale`, `thm-optional-sampling-for-bounded-stopping-times`, `lem-first-hitting-time-of-an-adapted-process-is-a-stopping-time`, `def-discrete-stopping-time`, `cor-expectation-of-an-indicator-is-probability`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `thm-continuity-from-below-for-measures`, `def-axiom-of-choice`, `def-probability-measure`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `def-conditional-expectation-as-an-ae-class`, `def-conditional-expectation-given-a-sigma-algebra`, `def-independent-random-elements`, and `thm-independent-random-elements-have-product-joint-law`.

The test-supermartingale definition and bounded optional-sampling theorem both assume AC. The A-page theorem states AC and its proofs use those suppliers; the counterexample is classified under the same library convention. The repeated-uniform probability calculation is choice-free; its comparison to the Ville theorem carries AC explicitly. No continuous-time extension is used.

The A-page proof does not use the existing `thm-villes-inequality` or `thm-anytime-validity` as premises: it gives the assigned local bounded-optional-sampling proof from the finite-horizon lemma. Their actual bodies were inspected. The current plan's `Direct MSF item edges by pair` lists those established theorems as SME-58 edges; this authoring follows the explicit local proof obligation and avoids using a result to prove its own reproof. The A page still declares `sequential-testing-and-anytime-valid-inference` as required context. Owner reconciliation may decide whether the plan's item-edge list is intended as page context or as direct item `deps`.

## Plan conflict: supremum event versus first crossing

SME-58 currently states
`P(sup_{t>=0} M_t >= 1/alpha) = P(tau < infinity) <= alpha`.
The equality is false: a countable-time supremum can equal a threshold without any finite-time value attaining it. The B-page item `cex-test-supermartingale-supremum-threshold-need-not-be-attained` gives a complete nonnegative martingale counterexample with alpha `1/2`, initial expectation `1/2`, supremum-event probability `1/4`, and first-crossing probability `0`. Thus the intended Ville upper bound remains true, but the two events must not be identified.

The A theorem preserves both valid probability bounds. It obtains the first-crossing bound by continuity from below and obtains the supremum-event bound by approximating the threshold from below. This is consistent with the actual published `thm-villes-inequality` proof, whose final contradiction step uses a strictly lower intermediate threshold rather than assuming the supremum is attained. The shared plan was not edited; the smallest owner correction is to replace the event equality by the two bounds and retain the lower-threshold argument for the supremum event.

## Sources and retrieval

Read Howard et al., *Time-uniform Chernoff bounds via nonnegative supermartingales*, §2.3 Lemma 1 and the complete §6.1 proof (printed pp. 14 and 44–45), from the full arXiv PDF. Also read Wolpert's complete 16-page Duke martingale lecture note, including its discrete optional-stopping calculation and Theorem 4 maximal-inequality proof. Wolpert states Theorem 4 for martingales; the batch uses it as an independent maximal-inequality treatment while the local proof obtains the supermartingale direction from the exact published optional-sampling supplier. Source locators, harvested-result dispositions and full-text fetch stamps are in `statistical-models-experiments-62-batch-58.coverage.json`.

Both source URLs were retrieved as full-text PDFs and inspected at the locators above. `node tools/source-fetch-check.mjs --coverage research/statistical-models-experiments-62-batch-58.coverage.json --stamp` passed: 2/2 sources verified and newly stamped. A subsequent check without `--stamp` also passed 2/2. No retrieval failed, so there are no recovery attempts or source drops; `source_resolution` is not used for successful retrievals.

## Scoped checks and readiness

Final explicit scoped results:

- `node tools/tsx-run.mjs tools/precheck.mts <four item paths>`: 4 checked, 0 failing.
- `node tools/proof-layout.mjs <four item paths>` after final item edits: 4 items, 20 steps, 0 defects.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-58.proof-contracts.json --strict`: 4/4 items checked, 0 errors, 0 warnings.
- `node tools/rendercheck.mjs <four item paths and two page paths>`: all 6 files passed renderer YAML and KaTeX checks.
- `node tools/depcheck.mjs --items-file /tmp/statistical-models-experiments-62-batch-58-item-ids.json --quiet`: selected item/page checks and prerequisite-cycle checks passed.
- `node tools/fwdcheck.mjs --items-file /tmp/statistical-models-experiments-62-batch-58-item-ids.json --quiet`: selected forward-reference and cycle checks passed.
- `node tools/extcheck.mjs --items-file /tmp/statistical-models-experiments-62-batch-58-item-ids.json --quiet`: no active unproved records or external fallbacks in scope.
- `node tools/citecheck.mjs <four item paths> --quiet`: every recognized elementary move cites a supplier that states it.
- `node tools/content-policy.mjs research/statistical-models-experiments-62-batch-58.pages.json --json`: 4 items, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/statistical-models-experiments-62-batch-58.pages.json`: 4 items, 0 missing dependency arrays, 0 errors.
- Scoped `item-dependency-levels.mjs` calculation: levels 0, 1, 2, 2; no errors or cycles.
- `source-fetch-check` check mode: 2/2 source fetch stamps verified.
- `validate-plan.mjs` selected the two page IDs and passed page identity/order/prerequisite checks. It reported 10 `redundant-prereq` warnings because the exact SME-58 `requires` list is already implied in part by its required MSF/probability pages. The plan-spec row still has no item inventory; its item-level portion is deferred to the owner's canonical-plan reconciliation. The required page list was preserved.

`step1-decisions.mjs record` created `ready` (`owner: false`) records for all four items with their examined dependencies and evidence. These are authoring-readiness records, not independent review or acceptance.

The supplied run-level dependency artifact had input hash `be0b7aca66787065a1de6e365a80730a6752b56b03a5c15b6c6abcb95603d30d` before this manifest was populated. Batch 58 still has no in-run prerequisite batches and remains level zero. The shared run-level dependency artifact was left to the owner/engine for recomputation after batch manifests are consolidated.

During initial CLI discovery, `depcheck.mjs --help` was not a help route and performed a whole-repository scan while these draft carriers were still in progress; it reported then-current frontmatter parsing errors for the four drafts plus repository-wide published-audit findings. An attempted `rendercheck.mjs --help` also invoked an unscoped scan whose output was incomplete. Neither run is used as evidence here; the explicit final batch checks above pass. No unrelated files were changed.

## Separate active-run blocker for owner

The latest read-only autopilot status still reports `1-scaffold` blocked by an invalid unit-prerequisite scan: YAML parsing fails at line 18, column 14 on the plain scalar `- title: Aaditya Ramdas, Martingales 1: Concentration Inequalities — Conjugate Mixtures…`. The run's owner-metadata scan identifies the affected batch-60 carriers: `items/def-gaussian-mixture-confidence-sequence-boundary.md` (line 19), `items/lem-gaussian-exponential-mixture-integral.md` (line 26), `items/lem-gaussian-mixture-boundary-crossing-equivalence.md` (line 24), `items/thm-gaussian-mixture-test-supermartingale.md` (line 27), and `items/thm-subgaussian-mixture-confidence-sequence.md` (line 29). Their `sources.references` title scalars contain an unquoted colon. This is outside batch 58's ownership and was left untouched; batch 58's explicit scoped YAML/render and dependency checks pass. The smallest repair is to quote those title scalars in the batch-60 items and let the owner/engine refresh the blocked scaffold readiness.
