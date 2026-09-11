# phase-2-next-20 · Alpha · Step 4 splice-refusal adjudication

Date: 2026-09-11  
Dispatch: `step4-adjudicate-1`  
Owned batches: `5`, `6`, `10`, `14`

## Inputs and method

- `research/phase-2-next-20-alpha-step4.task.md`
- `research/phase-2-next-20-splice-refusals.json`
- the owned `research/phase-2-next-20-batch-{5,6,10,14}.pages.json`
  scaffolds
- the batch-13 scaffold for the existing in-run forcing supplier
- the current cited item files and target page files or in-run A-page scaffolds
- `research/plan-spec.json`, including its pre-edit transitive page closure
- the required whole-plan validation before and after the edits

The refusal file contained four consumer records and seven individual missing
page edges. Before editing, none of the seven target pages was reachable from
its consumer through the canonical plan's `requires` closure. Every target is
an A page with a strictly smaller plan order than its consumer. None is an
`-examples` page, and no new page or reading-order change is needed.

The live validator on the unspliced canonical plan exited successfully because
the four consumer page records still had empty item lists. The refusal ledger
records the undeclared prerequisites exposed when the authored batch item lists
were tested for splicing. The item-level uses below were therefore checked
against both the batch scaffolds and the current authored item files.

## Edge dispositions

| batch | edge | evidence | disposition | edit | validation result | blocker |
|---:|---|---|---|---|---|---|
| `5` | `carleson-hunt-time-frequency-theorem-examples -> kolmogorov-block-construction-and-almost-everywhere-divergence` | The citing B-page scaffold and current `rem-carleson-hunt-does-not-include-the-lone-endpoint` both depend on `thm-kolmogorov-lone-fourier-series-diverges-almost-everywhere`. Its F1 and proof use the supplied $L^1$ witness with a.e. unbounded symmetric partial sums to refute strong and weak endpoint bounds; removing that dependency would remove the endpoint counterexample. The theorem is authored on the target A-page scaffold. The target has order `288.140165`, before the consumer at `288.1401775`; its pre-edit closure was absent. | Genuine backward prerequisite. | Added the target to the consumer's canonical `requires` array. The batch-5 scaffold already carried the edge; no scaffold dependency was removed. | Post-edit closure contains the target directly; the final whole-plan validator exits `0`. | none |
| `6` | `quantitative-hyperbolic-geometry-toolkit -> the-logarithm-and-general-powers` | Current items `lem-hg-toolkit-exponential-projection-contraction` and `thm-morse-stability-with-explicit-parameter-dependence` both declare `def-natural-logarithm`. The contraction proof uses `exp(log 2)=2`, positivity of `log 2`, and the identity $2^{-j}=\exp(-j\log 2)$ in step 5.1. The Morse proof uses the same inverse identity in F6 and its exponential estimates in steps 1.4, 2.2, 10.1, 11.1 and 14.1. `def-natural-logarithm` on the published target A page states exactly the inverse identities required. The target has order `177`, before the consumer at `302.0042`; its pre-edit closure was absent. | Genuine backward prerequisite. | Added the target to the consumer's canonical `requires` array. The batch-6 scaffold already carried the edge; no scaffold dependency was removed. | Post-edit closure contains the target directly; the final whole-plan validator exits `0`. | none |
| `10` | `finite-weyl-invariants-bruhat-and-kostant-harmonics -> depth-and-cohen-macaulay-modules` | Current `lem-reflection-basic-invariants-form-a-regular-sequence` declares four suppliers from the target page: `def-depth-with-respect-to-an-ideal`, `def-cohen-macaulay-local-module-and-ring`, `thm-depth-bounded-by-support-dimension`, and `cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module`. Its F4--F7 and proof step 3.1 use them to show the localized polynomial ring is Cohen--Macaulay and hence that the basic invariants form a regular sequence. The published target A page contains those exact items. The target has order `365.903`, before the consumer at `510.0002`; its pre-edit closure was absent. | Genuine backward prerequisite. | Added the target to the consumer's canonical `requires` array. The batch-10 scaffold already carried the edge; no scaffold dependency was removed. | Post-edit closure contains the target directly; the final whole-plan validator exits `0`. | none |
| `14` | `large-cardinals-measures-and-elementary-embeddings -> forcing-orders-names-and-generic-extensions` | The current large-cardinal page uses multiple exact items from the target scaffold. In particular, `lem-lc-generic-boolean-ground-joins` uses `def-dense-open-sets-and-model-generic-filters` in F1 and steps 1.2, 2.1 and 2.2 to meet ground-model dense sets; `lem-lc-boolean-generic-truth` uses the target's Boolean name semantics, name rank, valuation and well-definedness interfaces; later generic-extension, preparation and relative-consistency items use check-name reconstruction, rank bounds and Rasiowa--Sikorski. The target in-run A scaffold contains these exact suppliers. It has order `679`, before the consumer at `699`; its pre-edit closure was absent. | Genuine backward prerequisite. | Added the target to the consumer's canonical `requires` array. The batch-14 scaffold already carried the edge; no scaffold dependency was removed. | Post-edit closure contains the target directly; the final whole-plan validator exits `0`. | none |
| `14` | `large-cardinals-measures-and-elementary-embeddings -> measures-and-their-basic-properties` | Current `lem-lc-probability-algebra-completeness` uses `def-measure`, countable subadditivity and continuity from below in F1--F3 and throughout steps 1.1--4.1 to construct arbitrary joins modulo null sets. Current `lem-lc-random-coordinate-product-measure-pullback` also uses `lem-finite-measure-uniqueness-on-a-pi-system` in steps 3.1 and 6.1. These exact items are on the published target A page. The target has order `288.003`, before the consumer at `699`; its pre-edit closure was absent. | Genuine backward prerequisite. | Added the target to the consumer's canonical `requires` array. The batch-14 scaffold already carried the edge; no scaffold dependency was removed. | Post-edit closure contains the target directly; the final whole-plan validator exits `0`. | none |
| `14` | `large-cardinals-measures-and-elementary-embeddings -> the-radon-nikodym-theorem-and-lebesgue-decomposition` | Current `lem-lc-solovay-density-locality-and-null-joins` declares `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`. Its F3 and steps 2.1--4.3 turn the ultrafilter-selected finite measure into an a.e.-unique density and repeatedly use uniqueness to prove locality, complements and countable sums. The published target A page contains that exact theorem with the finite positive-measure hypotheses used here. The target has order `288.025`, before the consumer at `699`; its pre-edit closure was absent. | Genuine backward prerequisite. | Added the target to the consumer's canonical `requires` array. The batch-14 scaffold already carried the edge; no scaffold dependency was removed. | Post-edit closure contains the target directly; the final whole-plan validator exits `0`. | none |
| `14` | `large-cardinals-measures-and-elementary-embeddings -> infinite-product-measures-and-kolmogorov-extension` | Current `lem-lc-random-algebra-preserves-cardinals-and-sets-continuum` uses `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces` in F8 and step 1.1 to construct the fair-coin probability on the arbitrary-index cylinder sigma-algebra. Current `lem-lc-random-coordinate-product-measure-pullback` uses the same theorem in F7 and step 1.1 before extending that product probability to the full power set in the supplied generic extension. The published target A page contains the exact arbitrary-index standard-Borel extension theorem. The target has order `288.101`, before the consumer at `699`; its pre-edit closure was absent. | Genuine backward prerequisite. | Added the target to the consumer's canonical `requires` array. The batch-14 scaffold already carried the edge; no scaffold dependency was removed. | Post-edit closure contains the target directly; the final whole-plan validator exits `0`. | none |

## Required validation

Command run on the final bytes:

```bash
node tools/validate-plan.mjs research/plan-spec.json
```

Result: exit code `0`. The validator reports that declared page order is
acyclic and consistent, with no item-level cycles, forward references, B-page
dependencies, or unresolved IDs among the `1010` pages currently carrying item
lists. It notes that `609` planned pages still have no item list. Existing
`redundant-prereq` diagnostics remain nonfatal advisories.

The required dependency-ledger refresh also ran successfully:

```bash
node tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-20
```

Result: exit code `0`; the tool reported that the unified ledger was refreshed
and deduplicated.

## Summary

- Refusal edges adjudicated: `7`.
- Genuine backward prerequisites added to `research/plan-spec.json`: `7`.
- Item dependencies removed from owned scaffolds: `0`.
- Forward edges, example-page targets, new pages, or reading-order changes: `0`.
- Owner blockers: `0`.
- The actual splice remains engine-owned.
