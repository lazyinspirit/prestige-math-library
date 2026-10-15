# Statistical Models and Experimental Methods — batch 1 notes

Run: statistical-models-experiments-62
Pair: scientific-statistical-model-contracts / scientific-statistical-model-contracts-examples
Batch dependency level from the supplied run input: 0

## Plan comparison and conflict record

The assigned design section at L137–138 of
research/plan-statistical-models-experiments-track.md and the corresponding
research/plan-spec.json entry agree on the current A/B page IDs, title,
category, order 1918/1919, and three page prerequisites. The current plan’s
SME-01 direct item interface further names
def-statistical-experiment, def-parametric-statistical-model,
def-estimand-on-a-statistical-model, def-identifiability-of-an-estimand,
and def-statistic-and-estimator; these were included alongside the design’s
random-element and law suppliers.

The navigation dossier
research/statistics-scaffolds-2026-10-11/models/models-01/dossier.md
still gives the earlier proposed page IDs statistical-models-and-estimands
and statistical-models-and-estimands-examples. The task, current design, and
plan-spec use scientific-statistical-model-contracts and its -examples
companion, so the current plan controls. No conflict remains between the
assigned design and plan-spec.

## Inventory, dependencies, and levels

| Item | Home | In-run dependencies | Level |
|---|---|---|---:|
| def-scientific-statistical-model-contract | A | none | 0 |
| ex-technical-biological-units-and-repeated-visits | B | def-scientific-statistical-model-contract | 1 |
| ex-unvalidated-calibration-offset-is-not-identifiable | B | def-scientific-statistical-model-contract | 1 |

The A definition also depends on the current published MSF-01/02 items
def-statistical-experiment, def-parametric-statistical-model,
def-estimand-on-a-statistical-model, def-identifiability-of-an-estimand,
and def-statistic-and-estimator, plus
def-random-element-and-real-random-variable and
def-law-or-distribution-of-a-random-element. The examples add only
published probability or Dirac-measure suppliers. The exact dependencies are
listed in the carriers and manifest. All were present and their actual
statements were inspected; no supplier body or acceptance was inferred from a
title or the dossier.

The scoped item-level calculation returned levels 0, 1, and 1 with no cycles.
The batch-1 cross-batch input is an empty array: none of these items has a
logical supplier in another batch of this run. The supplied run-level batch
input records batch 1 at level 0.

## Mathematics and source disposition

The A item is a definition, so it has no theorem proof. It defines observation
and unit roles, variable status, estimand, observation rule, support, law,
conditioning convention, and adequacy-assumption labels. It explicitly
does not imply independence, identifiability, valid calibration, or physical
applicability. No axiom of choice is used.

The first example gives a finite randomization experiment with
choose(8,4) = 70 assignments. Its proof verifies the uniform law, measurable
record map, pushforward experiment, finite-schedule estimand, and support.
The 48 response readings remain distinct from the eight biological and
assignment units; no independence or population-generalization claim is
made. The second example uses P_(q,b) = delta_(q+b) and the explicit shift
(q,b) -> (q+1,b-1) to prove that the true-quantity target is not identifiable
from the one-reading law. The nonidentifiability result says nothing about
whether a real instrument is physically calibrated.

Two independent full lecture-note treatments were read at the assigned
locators and each passed source-fetch-check --stamp:

- Wickham, Statistics: Lecture Three — Linear Models, PDF pp. 2–3:
  279,999 bytes, 19 pages, stamped hash prefix f5926abf067ede36.
- Duke STA610, The Problem of Correlated Data, PDF pp. 1–4:
  279,022 bytes, 11 pages, stamped hash prefix 12ed6867be6ed976.

The exact harvested headings and per-result dispositions are in
research/statistical-models-experiments-62-batch-1.coverage.json. The
coverage check reports 13 harvested results, zero errors, and one low-yield
warning: zero results are marked included, four are inline in the definition
or example, and nine regression or random-intercept results are deferred to
their named planned A pages. This is intentional for SME-01’s bookkeeping-only
scope; none of those later mathematical results is claimed or omitted without
a destination. No retrieval failed, so no source_resolution recovery or
source drop was recorded.

## Check results

- manifest-deps.mjs on batch 1: 3 items, 0 missing dependency arrays,
  0 errors.
- Scoped item dependency-level calculation: levels 0/1/1, 0 errors.
- source-fetch-check.mjs --stamp and the subsequent check: 2/2
  full-text sources verified, 0 drops.
- coverage-checklist.mjs --require-destination: 1 A page, 13 harvested
  results, 0 errors, 1 low-yield advisory described above.
- content-policy.mjs on the batch manifest: 3 scoped items, 0 errors,
  0 warnings.
- proof-contract.mjs --strict: all 3 items covered, 0 errors,
  0 warnings.
- Scoped precheck: 2 proof-bearing examples passed; the definition is
  not applicable.
- proof-layout.mjs on the 3 changed items: 7 numbered steps, 0 defects.
- rendercheck.mjs on the 3 items and 2 pages: 5 files, 0 errors,
  0 warnings.
- Scoped trailing-whitespace scan on assigned carriers and evidence:
  no trailing whitespace.

The step1-decisions record command marked all three items ready with
owner=false and the examined dependency IDs. These are hash-bound author
readiness records, not independent proof approval.

The required item-level dependency check is scoped to this batch. A read-only
attempt to recompute the entire run-level batch graph could not finish because
an unrelated batch-60 draft has malformed YAML:
items/def-gaussian-mixture-confidence-sequence-boundary.md has an unquoted
title containing “1: Concentration Inequalities” (raw file line 19; the YAML
parser reports frontmatter line 18). The item is listed in batch 60, page
subgaussian-mixture-confidence-sequences. This is outside batch 1 and outside
its dependency closure; hash-bound readiness inputs for all three batch-1
items computed successfully. The smallest repair is to quote that title. It
is left for the owner/assigned batch-60 author. The shared run-level
dependency artifact was not rewritten; the native engine must refresh it
after that input is repaired.

## Tool-scope note

This repo’s depcheck.mjs does not implement --help; that probe started a
whole-repository scan and returned existing unrelated published-unaudited
findings. A content-policy.mjs --help probe was likewise interpreted as an
input filename, and direct node tools/precheck.mts is unsupported without
the repo’s tsx-run wrapper. These probes made no content changes and are not
used as batch results; the explicit scoped commands listed above are the
authoring checks.
