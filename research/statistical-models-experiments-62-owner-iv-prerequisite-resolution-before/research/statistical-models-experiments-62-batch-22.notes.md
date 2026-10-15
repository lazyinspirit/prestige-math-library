# Batch 22 authoring notes — IV and LATE

Run: `statistical-models-experiments-62`  
Pair: `instrumental-variables-and-late` / `instrumental-variables-and-late-examples`  
Date: 2026-10-15

## Inventory and dependency order

The assigned scaffold manifest contained the two page records with empty item
inventories. I authored nine A-page items and six B-page items. Their
within-run `dependency_level` labels are in
`research/statistical-models-experiments-62-batch-22.pages.json`: A levels are
0, 1, 1, 1, 2, 3, 3, 2, 4; B levels are 2, 2, 2, 2, 5, 5. The ordered A
suppliers are the specialized binary IV setup, principal-strata/LATE and Wald
definitions, observed-contrast and monotonicity lemmas, first-stage and
reduced-form lemmas, then the homogeneous-effect and LATE theorems. B examples
use their A-page suppliers. The run scheduling record remains batch 22 at
level 1 with prerequisite batch 19; it was not edited.

## Plan comparison and scope decisions

The batch task's requires list, page IDs, category, order and design heading
match the corresponding two `plan-spec.json` records. There is no
task-versus-plan-spec conflict.

The older models-03 dossier proposes `alg-wald-ratio` and one aggregate B
example. The controlling plan asks for the Wald functional and four separate
B failure/contrast cases. I used `def-wald-ratio` because the formula is a
mathematical definition, not a procedure, and authored separate weak-first-
stage, exclusion-failure, defier, and heterogeneous-effect examples. I also
retained the dossier's randomized-encouragement example and supplied its
requested two-law ATE nonidentification counterexample; these strengthen the
plan's warning that LATE is not generally the population ATE.

The plan's Pearl citation labels §3.5 as pp. 37–41. Inspection of the complete
author-hosted PDF shows §3.5 is journal pp. 122–126 (PDF pp. 27–31); journal
pp. 132–136 (PDF pp. 37–41) are later sections. I used the actual §3.5 range
in the item references and source coverage. No shared plan or plan-spec file
was changed.

## Mathematics and assumptions

The LATE derivation uses the full joint independence condition
`Z ⟂ (A(0), A(1), Y(0), Y(1))`, individual-level exclusion, consistency,
positive instrument atoms, finite outcome means, relevance and monotonicity.
The proof separately establishes the reduced-form numerator and first-stage
denominator before division. The homogeneous-effect theorem assumes a
constant individual additive effect and does not assume monotonicity. The
defier and ATE counterexamples state exactly which condition fails or is
removed. No finite-sample, asymptotic, standard-error, or empirical-validity
claim is made.

All proofs are choice-free. Conditional means are defined by event integrals
for the two positive-probability atoms of binary `Z`; no arbitrary
conditional-expectation version or regular conditional distribution is
selected. I inspected the current conditional-expectation definitions: the
general almost-sure class construction inherits AC, while the explicit finite
event formula used here needs only the displayed integral definition and
positive atom probabilities. The independence-factorization supplier's finite
product, Tonelli/Fubini and monotone-convergence proof route was checked for
the integrable scalar functions used here. No axiom is listed as used in the
proof contracts.

There is no IV/Wald/LATE entry in `tools/finite-smoke.mjs`; the exact finite
calculations and two-law counterexample are proved in the B-page verification
steps, so the contracts leave the named `finite_checks` array empty rather
than inventing an unsupported registry check. The homogeneous-effect theorem's
direct dependency on the published L1 linearity result is mirrored in the
batch manifest; because that supplier is outside this run, it does not raise
the item level.

## Sources and retrieval

The complete focused material was read from the author-hosted Hernán–Robins
book, Kang's complete university HTML lecture, and Pearl's complete article.
The relevant locator, supported items and `included`/`inline` disposition for
each harvested result are recorded in the batch coverage file. Pearl is used
for the exclusion/randomization framing and the limitation of IV without
additional restrictions; it is not represented as supplying the monotonicity
LATE proof. `source-fetch-check --stamp` fetched and verified all three full
texts: 3/3 sources, zero drops. No retrieval failure or source-resolution
record was needed.

## Open cross-batch prerequisite

The A page requires `potential-outcomes-and-causal-identification` from batch
19. At authoring inspection, that page had `items: []` in its run manifest and
no authored page/item body was available to inspect. The models-03 dossier
lists `def-potential-outcome-model-and-causal-estimand` and
`def-causal-identification-and-partial-identification` as proposed interfaces,
but neither is a current manifest item ID and neither has an actual body here.
They are therefore recorded as proposed/unverified names, not as dependencies
or proof premises. The exact unresolved current supplier is page
`potential-outcomes-and-causal-identification`; required checks are its
potential-outcome/treatment-version and consistency conventions, no-interference
scope, and causal-estimand/identifiability definition. This affects the IV
setup, all A-page causal claims, and every B-page example through its A-page
dependencies. The assigned pair was authored against the plan's declared
binary-IV interface. Readiness remains escalated until the actual batch-19
body can be compared; no supplier excerpt or acceptance is asserted.

## Checks

- `node tools/source-fetch-check.mjs --coverage research/statistical-models-experiments-62-batch-22.coverage.json --stamp`: pass, 3/3 full texts fetched and stamped.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-22.proof-contracts.json --strict --json`: pass, 15 items checked, no errors or warnings.
- Batch-22-scoped item dependency calculation: pass, 15 items, maximum level 5, no label errors.
- `node tools/batch-dependency-levels.mjs check --run statistical-models-experiments-62`: blocked before comparison with the stored schedule because YAML parsing fails in five out-of-scope batch-60 item frontmatters. The unquoted colon in source titles causes the same parser error: `lem-gaussian-exponential-mixture-integral` (line 25), `lem-gaussian-mixture-boundary-crossing-equivalence` (line 23), `thm-gaussian-mixture-test-supermartingale` (line 26), `def-gaussian-mixture-confidence-sequence-boundary` (line 18), and `thm-subgaussian-mixture-confidence-sequence` (line 28). They are not edited here; the run-level blocker is referred to the owner. After batch-22 dependencies were mirrored into its manifest, the shared run-level digest also needs recomputation; the malformed batch-60 inputs prevent producing the new digest.
- Scoped `node tools/tsx-run.mjs tools/precheck.mts` on the 15 assigned item paths: pass, 12 proofs checked, 0 failures; the checker-proposed canonical phase numbering was adopted before this pass.
- Scoped `node tools/proof-layout.mjs` on the 15 assigned items: pass, 15 items, 31 steps, 0 defects.
- Scoped `node tools/rendercheck.mjs` on the 15 assigned items and two assigned pages: pass, 17 files, no errors or warnings.
- `node tools/depcheck.mjs --items-file /tmp/statistical-models-experiments-62-batch-22-items.json --json`: pass, 15 selected items and their prerequisite closure, no errors or warnings.
- `node tools/content-policy.mjs research/statistical-models-experiments-62-batch-22.pages.json --json`: pass, 15 items, no errors or warnings.
- `node tools/source-fetch-check.mjs --coverage research/statistical-models-experiments-62-batch-22.coverage.json`: pass, 3/3 sources already stamped.
- `node tools/step1-decisions.mjs record`: all 15 assigned items were recorded `escalated` with their direct item dependencies and the exact batch-19 page gap in the reason. No `--owner` flag was used and no escalation was overwritten.
- `node tools/step1-decisions.mjs check --run statistical-models-experiments-62` at final inspection: not closed; 215 run items total, 34 other items ready, these 15 batch-22 items escalated, and 166 other items still lack readiness records. This is run progress, not a pair-local check failure.
- After decisions were recorded, the manifest was synchronized to include the homogeneous-effect theorem's direct L1-linearity supplier. This does not change its escalation reason or level, but its stored escalated receipt predates that manifest-only synchronization; the receipt was not overwritten. The owner should re-evaluate it with the other escalations after supplier verification.
- The batch-22 manifest change means the shared run-level scheduling digest needs regeneration. The required run-wide checker cannot calculate a new digest until the out-of-scope batch-60 YAML source-title errors above are corrected; no shared schedule artifact was edited.
