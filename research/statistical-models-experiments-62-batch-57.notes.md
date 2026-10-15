# Batch 57 — authoring and evidence notes

## Inventory and dependency order

| Page | Item | Logical dependencies | Item level |
|---|---|---|---:|
| `reproducibility-replication-and-transparent-reporting` (A) | `def-computational-reproducibility-replicability-and-transparent-reporting` | none | 0 |
| `reproducibility-replication-and-transparent-reporting-examples` (B) | `ex-transparent-analysis-plan-and-reproduction` | `def-computational-reproducibility-replicability-and-transparent-reporting` | 1 |

The B page requires the A page. There are no cross-batch page or item dependencies;
batch 57 remains at batch dependency level 0 with `requires: []` in
`research/statistical-models-experiments-62-batch-dependency-levels.json`.
The recorded scheduling input is
`be0b7aca66787065a1de6e365a80730a6752b56b03a5c15b6c6abcb95603d30d`.
The batch-scoped item graph was recomputed from the finished manifest: 2 items,
levels 0 and 1, no errors or cycles. The shared run-level dependency artifact
was left to the owner.

## Plan and audit reconciliation

The assigned contract in the current track plan (SME-57, L313 onward), its pair
record in `research/statistics-ml-scaffold-audit-2026-10-12/models/pair-audit.json`,
and the owner direction agree on the page pair, claims, caveats, and absence of
earlier A-page suppliers. The audit explicitly leaves proofs to initial
authoring; this pair contains definitions and an exact-arithmetic example, not a
theorem about correctness or replication success.

The `plan-spec.json` entries at orders 2030 and 2031 agree with the batch
assignment on IDs, title, category, companion, and page requirements. Their
empty `items` arrays were scaffold placeholders, not a scope conflict; this
batch manifest now records the authored items and dependencies. No shared plan
was edited. The dossier names NASEM Chapter 3 as the primary source and treats
Ioannidis only as context; no Ioannidis result or PPV claim is used. A second
independent full-text treatment was added to support transparent computational
practice, without expanding the mathematical scope.

## Supplier and mathematical review

The A definition has `deps: []` and states the adopted NASEM convention,
including that usage varies across fields, that new data alone do not establish
replication success, and that exact reproduction can repeat an error. It
identifies reportable data/code access, result-relevant computational
conditions, curation, methods, analysis decisions and timing,
exploratory/confirmatory status, and uncertainty. It does not require public
release of protected data.

The B example was authored after the actual A Definition was available. Its only
dependency is that definition, quoted as separate exact excerpts F1 and F2 in
the strict contract. The synthetic table arithmetic is exact: Study 1's primary
contrast is 3, the alternate grouping gives 8/3, and Study 2's new-data estimate
is 7/2. Empty groups are explicitly excluded because their means are undefined;
singleton and cut-point cases are checked. The example does not treat the new
study's estimate as proof of consistent replication. No external mathematical
supplier, choice axiom, or registered finite-smoke case is needed.

## Source reading and retrieval

| Source | Inspected locator and supported items | Retrieval stamp |
|---|---|---|
| [National Academies, *Reproducibility and Replicability in Science*, Ch. 3](https://www.nationalacademies.org/read/25303/chapter/6) | Full-text Chapter 3 passages, printed pp. 39–54: terminology discussion, Conclusion 3-1, precision/method caveats, Box 3-2, Finding 3-1, and transparency discussion. Supports the A definition and B example. | HTML, 549,081 bytes, `dc55191fafbfdea1`; `source-fetch-check --stamp` pass. |
| [Wilson et al., “Good enough practices in scientific computing”](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005510) | Full text inspected: Overview/Introduction; Data management; Software; Project organization; Keeping track of changes; Inadvertent sharing; Manuscripts. Supports reporting of raw/intermediate data and processing, explicit software requirements, and access restrictions. | HTML, 187,365 bytes, `79a5d106bad4500b`; `source-fetch-check --stamp` pass. |

The harvest has 15 named results: 13 included in the two items and 2
out-of-scope with item-specific reasons. All harvested content and dispositions
are in the coverage file; no selected source has a retrieval failure or an
unresolved source-resolution disposition.

Source candidate history for the second treatment: the search
`Munafò manifesto reproducible science full text 2017 transparent reporting`
found the Nature full-text article, but its automated-reader URL resolves with
`error=cookies_not_supported`. Alternative retrievals checked the Oxford author
record (403), the Bristol final-version PDF (403), and the PMC reader (CAPTCHA).
The search `site:journals.plos.org/ploscompbiol "Good enough practices in
scientific computing" Wilson 2017` found the open PLOS full text; it was
inspected and successfully fetch-stamped, so searching stopped. The rejected
candidate URLs are not cited by either item and support no claim in the
coverage map. No reading is claimed for those candidates beyond the inspected
responses. No `source_resolution` drop was recorded because neither failed
candidate is among the selected sources; both selected sources passed the full
text fetch check.

## Scoped checks and readiness

| Check | Result |
|---|---|
| `node tools/source-fetch-check.mjs --coverage research/statistical-models-experiments-62-batch-57.coverage.json --stamp` | Pass, 2/2 full-text sources stamped. |
| `node tools/source-fetch-check.mjs --coverage research/statistical-models-experiments-62-batch-57.coverage.json` | Pass, 2/2 verified. |
| `node tools/coverage-checklist.mjs research/statistical-models-experiments-62-batch-57.coverage.json --require-destination --json` | Pass, 1 A page, 15 harvested results, 0 errors/warnings. |
| `node tools/manifest-deps.mjs research/statistical-models-experiments-62-batch-57.pages.json` | Pass, 2 items, 0 normalizations/errors. |
| Batch-scoped `dependencyLevels` calculation from `tools/item-dependency-levels.mjs` | Pass, 2 items, levels 0 and 1, no errors/cycles. |
| `node tools/content-policy.mjs research/statistical-models-experiments-62-batch-57.pages.json --json` | Pass, 2 items, 0 errors/warnings. |
| `node tools/tsx-run.mjs tools/precheck.mts items/ex-transparent-analysis-plan-and-reproduction.md --json` | Pass, 1 proof-bearing item checked, 0 failures. The initial line-based check prompted explicit phase stratification and one-line proof steps; its proposed numbering was adopted. |
| `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-57.proof-contracts.json --strict --json` | Pass, both contracts checked, 0 errors/warnings. An initial exact-excerpt mismatch was repaired by separating F1 and F2. |
| `node tools/proof-layout.mjs items/def-computational-reproducibility-replicability-and-transparent-reporting.md items/ex-transparent-analysis-plan-and-reproduction.md` | Pass, 2 items, 4 proof steps, 0 defects. |
| `node tools/rendercheck.mjs items/def-computational-reproducibility-replicability-and-transparent-reporting.md items/ex-transparent-analysis-plan-and-reproduction.md library/statistical-models-and-experiments/reproducibility-replication-and-transparent-reporting.md library/statistical-models-and-experiments/reproducibility-replication-and-transparent-reporting-examples.md --json` | Pass, 4 files, 0 errors/warnings. |

`node tools/step1-decisions.mjs record` records both items as `ready` with
`owner: false`: the definition with examined dependencies `[]`, and the example
with its examined dependency on the A definition. These records are scaffold
readiness only, not independent mathematical approval.

An initial direct `node tools/precheck.mts ...` invocation failed because `.mts`
requires the repository TypeScript loader; the documented `tsx-run.mjs` command
then passed. A `rendercheck --help` invocation is not a supported help form and
ran its default full-corpus read-only check (29,911 files, no errors); the
authoritative evidence above is the later explicit four-file scoped check.

## Run handoff state

The read-only native status at 2026-10-14 17:00 UTC reports the run at
`1-scaffold`, `0/62` result receipts, no workers in flight, and the batch-57
pages artifact present (the other 61 batch page artifacts were still missing at
that snapshot). The native result/coverage receipt and all run transitions
remain owner-controlled; this authoring handoff did not change `.autopilot/`
state.

Status also records a run-level blocker raised at 2026-10-14 16:59:42 UTC:
`invalid unit prerequisites — Nested mappings are not allowed in compact
mappings at line 18, column 14`, at an unquoted source-title scalar containing
`Martingales 1: Concentration Inequalities`. The first affected authored carrier
is `items/def-gaussian-mixture-confidence-sequence-boundary.md`, physical line
19; the same scalar occurs in `items/lem-gaussian-exponential-mixture-integral.md`
(line 26) and `items/lem-gaussian-mixture-boundary-crossing-equivalence.md`
(line 24), all in batch 60. The title also occurs validly as a quoted JSON
string in `research/statistical-models-experiments-62-batch-60.coverage.json`;
the parser failure is the unquoted YAML frontmatter values. This is outside
batch 57 and was left untouched for owner routing.
