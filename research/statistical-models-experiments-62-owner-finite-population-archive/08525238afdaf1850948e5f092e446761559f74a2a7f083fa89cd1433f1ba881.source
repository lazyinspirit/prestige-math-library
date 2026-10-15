# Batch 8 authoring notes — finite populations and design probability

Run: `statistical-models-experiments-62`  
Pair: `finite-populations-and-sampling-designs` / `finite-populations-and-sampling-designs-examples`  
Run-level dependency level: 2; prerequisite batches: 1 and 2.

## Plan comparison

The assigned SME-08 section at L158–159 of
`research/plan-statistical-models-experiments-track.md` agrees with the
`research/plan-spec.json` entries and scaffold on page IDs, title, category,
order 1932/1933, and all six A-page prerequisites. There is no current
design/plan-spec conflict. The controlling plan combines finite-population
targets, inclusion probabilities, the Horvitz–Thompson total, and the zero
inclusion boundary in this pair. The older models-02 dossier splits those
topics among proposed S01–S03 pairs; that proposal is navigation context and
does not control this inventory.

The SME-08 audit row still labels SME-01/02 interfaces `proposed_pair_not_published`.
Current bodies are present and were inspected: batch 1's
`def-scientific-statistical-model-contract` and batch 2's
`def-fixed-design-linear-regression-model`. Their current bodies control this
drafting; no acceptance was inferred from the older audit row.

## Inventory, dependencies, and levels

| Item | Home | In-run dependencies | Level |
|---|---|---|---:|
| `def-finite-population-and-sampling-design` | A | batch-1 `def-scientific-statistical-model-contract` (0); batch-2 `def-fixed-design-linear-regression-model` (1) | 2 |
| `lem-finite-population-design-law-is-a-probability-measure` | A | `def-finite-population-and-sampling-design` | 3 |
| `thm-horvitz-thompson-total-is-design-unbiased` | A | local definition and probability-law lemma | 4 |
| `thm-zero-inclusion-probability-precludes-identification-and-universal-unbiasedness` | A | local definition and probability-law lemma | 4 |
| `ex-srswor-inclusion-probabilities-and-negative-covariance` | B | HT theorem and local definition | 5 |
| `ex-census-and-certainty-units-under-ht` | B | HT theorem and local definition | 5 |
| `ex-zero-inclusion-probability-and-unobserved-unit` | B | zero-inclusion theorem and local definition | 5 |

The current batch-2 manifest places `def-fixed-design-linear-regression-model`
at level 1 because it now depends on the batch-1 model-contract item at level
0. The scoped item graph used the actual batch-1 and batch-2 supplier entries
plus all seven batch-8 items: 9 items, no cycles, levels 0–5. New carriers were
authored in that order. The batch-8 page-level input hash is
`a405f7fe8adabe73858aeb407bd96a699d8d9b90b9d67b1856bceef420eb8065`.

The A definition fixes the finite set of units and real values, defines the
subset-valued design law, target total/mean, design expectation, first- and
second-order inclusion probabilities, and a common observed-record experiment.
The local lemma proves the induced record laws are probability measures. The
HT theorem uses finite indicator expectations and linearity; it assumes
`pi_i>0` for every unit and uses no independence or choice principle. The zero
inclusion theorem changes one never-observed value to obtain equal observed
laws and unequal totals, then proves the estimator obstruction from the
definition of unbiasedness. No variance-estimation or normal-inference claim
is made. The three B examples cover SRSWOR, certainty/census designs, and an
unobserved unit. The A page has four items and the B page has three examples;
both are below the 100-item page cap.

## Supplier status and readiness escalation

The actual batch-2 regression definition now states that `X` is fixed and
carries no probability law or assignment mechanism. Its actual body is
available and was checked for this exact contrast. Its Step-1 decision file,
`research/statistical-models-experiments-62-step1-def-fixed-design-linear-regression-model.json`,
still says `escalated` because it previously could not inspect the
model-contract page while that page had `items: []`. The current batch-2
cross-batch file now says `verified` and claims that supplier Step-1 record is
ready, which contradicts the actual decision file. Batch 8 does not edit or
resolve the batch-2 record.

The batch-8 cross-batch input leaves the fixed-design page and item edges open
with the precise evidence. All seven batch-8 Step-1 records are `escalated`
because their prerequisite closure includes this unresolved evidence conflict.
The local arguments, placements, contracts, and scoped checks are complete;
these records make no supplier acceptance or independent approval claim. The
batch-1 model-contract item body and its current Step-1 record were checked;
that record is `ready`, which is author readiness rather than acceptance.

## Sources read and harvested

The complete source texts were inspected directly. Two independent treatments
were used: Shalabh's IIT Kanpur sampling notes and Borkowski's Montana State
STAT 446 lecture. The exact URL, locator, harvested result, item destination,
and disposition for each result are in
`research/statistical-models-experiments-62-batch-8.coverage.json`.

- Shalabh, Chapter 1, full 10-page PDF; relevant PDF pp. 1–2 cover sampling
  units, finite populations, samples/censuses, and probability sampling.
- Shalabh, Chapter 2, full 23-page PDF; relevant PDF pp. 1–2, 6–7, and 14
  cover SRSWOR, its sample law, sample-mean unbiasedness, and inclusion
  indicators/probabilities.
- Borkowski, full nine-page lecture; §6.2, PDF pp. 4–6 (printed pp. 141–143)
  covers first/second inclusion probabilities and HT total/mean estimation.

`source-fetch-check --stamp` verified all 3 full-text URLs; the subsequent
check also passed. There were no retrieval failures, so no source-resolution
record or source drop was needed. The coverage checklist harvested 13 results
with no errors or warnings. Pair-inclusion variance and Sen–Yates–Grundy
material is deferred to the planned `horvitz-thompson-variance-and-srswor`
page. With-replacement sampling is out of scope because this pair's design is
on subsets of units.

Source corrections preserved: Shalabh Chapter 2 PDF p. 14 prints a positive
covariance for distinct SRSWOR inclusion indicators, but substituting the
displayed inclusion probabilities gives the negative value derived in the
local example. Borkowski's later printed p. 145 PPS example has a separate
arithmetic typo (`.965` where `.96` is required); that numerical example is
not used by this pair.

## Scoped checks

- `manifest-deps` on batch 8: 7 items, 0 missing dependency arrays, 0 errors.
- Scoped item dependency graph (batch 8 plus exact in-run suppliers): 9 items,
  levels 0–5, 0 errors/cycles.
- Strict proof contracts: 7/7 covered, 0 errors, 0 warnings.
- Coverage checklist with required destinations: 13 harvested results, 0
  errors, 0 warnings.
- `source-fetch-check`: 3/3 fetch-verified, 0 drops.
- Authored-carrier `content-policy`: 7 items, 0 errors, 0 warnings.
- Scoped precheck: 6 proof-bearing items passed; the definition is
  not-applicable.
- Explicit changed-item `proof-layout`: 7 items, 19 numbered steps, 0 defects.
- Scoped `rendercheck`: 9 files, 0 errors, 0 warnings.
- Focused `depcheck`: 7 items, prerequisite closure 325 items / 263 pages,
  0 errors, 0 warnings.
- Focused `fwdcheck`: 7 items, 0 errors, 0 warnings.
- Focused `extcheck`: 7 items, 0 errors, 0 warnings.
- Scoped `pathcheck`: 0 draft pages audited, 0 errors, 1 advisory that the
  existing `statistical-models-and-experiments` category has no `_category.md`.
  Category files are outside this pair's assignment.

During the first final scan, `content-policy`, `extcheck`, and `pathcheck`
encountered a transient `ENOENT` while batch 29's untracked
`items/thm-exponential-and-weibull-survival-laws.md` was being added. The file
then appeared in the shared workspace; all three read-only checks passed on
rerun. Batch 29 was not edited.

The run status was recomputed from `.autopilot/statistical-models-experiments-62`:
the run remains live at Step 1, has no worker in flight, and is held for the
owner's existing Step-1 repair/recertification blocker. Batch 8 did not change
engine state or verdicts.
