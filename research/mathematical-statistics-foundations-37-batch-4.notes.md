# Batch 4 authoring notes — MSF-04

## Design control and conflicts

The binding owner direction selects research/plan-mathematical-statistics-track.md
as the controlling design. Its MSF-04 row supplies the full A inventory,
including thm-equivalent-dominators-give-equivalent-likelihood-ratios, and
the B targets: a Bernoulli likelihood-ratio calculation and a singular pair.
The MSF-04 row in research/plan-statistical-models-experiments-track.md is
the downstream Category-2 interface list. It exports the four core experiment,
likelihood, and change-of-measure items but does not repeat the equivalent-
dominator theorem; this is a narrower interface, not a conflicting A-page
design.

The older F04 dossier uses the earlier definition name
def-dominated-statistical-model-and-likelihood and requests a normal-sample
example on B. The current controlling row instead names
def-dominated-statistical-experiment and explicitly sets the B targets to
Bernoulli and a singular pair. The current plan governs; the normal example
was not added. The theorem about equivalent dominating measures remains on A
as the current plan requires.

research/plan-spec.json agrees on the A/B identities, titles, category,
orders 1850–1851, and all three A-page prerequisites. Its empty item arrays
are pre-authoring placeholders, not an item-inventory conflict.

## Inventory, dependencies, and levels

The scaffold manifest contains seven A items (the five planned results and
definitions plus two necessary local lemmas) and two B items. Direct deps are
recorded in the manifest and mirrored by each item carrier. Item levels use
only logical suppliers in this run; published prerequisites remain external
context.

| Item | In-run suppliers | Level |
|---|---|---:|
| lem-positive-lebesgue-components-of-a-positive-measure | none | 0 |
| lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative | none | 0 |
| def-dominated-statistical-experiment | def-statistical-experiment (batch 1) | 1 |
| def-likelihood-ratio-as-rn-derivative | the positive-component and nonnegative-density lemmas | 1 |
| def-likelihood-density | def-dominated-statistical-experiment | 2 |
| thm-likelihood-ratio-change-of-measure | def-likelihood-ratio-as-rn-derivative | 2 |
| thm-equivalent-dominators-give-equivalent-likelihood-ratios | def-likelihood-density | 3 |
| cex-singular-pair-has-no-full-likelihood-ratio | thm-likelihood-ratio-change-of-measure and the local ratio definition | 3 |
| ex-bernoulli-likelihood-ratio-and-change-of-measure | def-likelihood-density, thm-likelihood-ratio-change-of-measure, and batch-1 experiment context | 3 |

The pair is batch level 1 with batch 1 as its prerequisite. The dispatch
provided scheduling input hash
4ac773619bf67b0bf9f2906a3e1587567c1ec3367e8bd46a1c3215d9e984e95e.
The run-wide scheduling artifact was not rewritten; the controller owns that
shared transition evidence. The scoped item graph was checked against the
batch-1 supplier manifest and the batch-4 manifest.

The cross-batch input records the three current edges: the A page to the
batch-1 A page, and item edges from def-dominated-statistical-experiment
and the Bernoulli example to def-statistical-experiment. All three were
checked against the current supplier body and are present in the input file.

## Mathematical scope and assumptions

The two A-page lemmas supply prerequisites that the general Radon–Nikodym
and Lebesgue-decomposition statements do not explicitly expose for this use:
positive components for a positive measure's decomposition, and a
nonnegative density version for sigma-finite positive measures. The
positive-component proof uses one singular carrier and is choice-free. The
density proof builds a common finite exhaustion, checks positivity on each
negative level set, and changes the representative only on a null set.

The likelihood-ratio definition retains the absolutely continuous component
and the singular component separately. A full density is used only under
P₁≪P₀. The change-of-measure proof uses uniqueness of Lebesgue decomposition,
the local RN representation, and density integration; its real-integrable
case is reduced to positive and negative parts. The equivalent-dominator
theorem proves the chain-rule factor explicitly and states the equality
pairwise almost everywhere, with no uniform exceptional set claimed for an
uncountable parameter set. A zero denominator receives no ratio value.

AC is stated where the RN supplier, Lebesgue decomposition, or simultaneous
family selection requires it: the nonnegative-density lemma, likelihood
density and ratio definitions, both A-page theorems, and B items that invoke
those results. The positive-component lemma itself uses no choice axiom.
The finite Bernoulli calculation is explicit; it retains AC only because its
contract also cites the general theorem branch.

## Sources and retrieval

The full relevant passages were read in five independent full-text sources:
Martin, §§2.2 and 3.2; Tebbs, §9.3; Geyer, §3; Bass, RN Theorem 13.4 and
Lebesgue-decomposition Theorem 13.5; and Hunter, Theorem 6.27 and its proof.
The exact URLs, locators, supported item IDs, and disposition for each
harvested result are in
research/mathematical-statistics-foundations-37-batch-4.coverage.json.
The B companion records the Martin and Tebbs likelihood passages used as
context for its locally verified finite example. All seven coverage entries
are fetch-stamped; the source-fetch check passed 7/7 with no retries, drops,
or unresolved sources. No source-resolution recovery record was needed.

## Scoped checks and readiness

- Scoped item dependency check: 18 items across batch 1 supplier context and
  batch 4; acyclic, maximum level 5. All nine batch-4 carrier levels and
  deps match the manifest; page placement matches the inventory.
- Focused depcheck: passed for the nine assigned items and their prerequisite
  cycle checks.
- author-check for batch 4: passed. Precheck passed all six proof-bearing
  items; rendercheck passed all 11 item/page files; content policy passed
  9/9 items; strict proof-contract check passed 9/9.
- proof-layout: 9 items, 19 numbered steps, 0 defects.
- proof-contract strict: 0 errors and 0 warnings.
- coverage-checklist: 2 pages, 18 harvested results, 0 errors and 0 warnings.
- source-fetch-check: 7/7 coverage entries verified.
- Cross-batch dependency input: 3/3 declared edges represented.
- Step-1 readiness: all nine assigned items are ready with current
  hash-valid records and their direct dependency IDs.

The A page has seven items and the B page has two, below the 100-item cap.
These records document completed construction checks, not independent
mathematical approval. All new carriers remain drafts.
