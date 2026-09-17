# Step-3 gate cleanup report — `scope-decisions`, run `phase-2-remaining-27`

Role: `alpha-high`, label `step3b-cleanup-scope-decisions`. Written 2026-09-17.

Scope of this pass: fill every `decision: "pending"` row in
`research/phase-2-remaining-27-alpha-{a,b,c,d,e}-scope-decisions.json`.
52 of the 57 current declines were pending when this pass started
(the gate reported twice that many errors, one for the pending decision and
one for the empty evidence on each row); the remaining 5 rows carried exact
decisions from earlier work.

Note on counts: the dispatch text quotes 70 errors (35 pending rows) from
when it was written, while the on-disk check immediately before this pass
reported 104 errors (52 pending rows). The difference is consistent with a
coverage/context refresh between those two moments, in which rows whose
closure context hash changed were reset to pending by the tool; no rows were
added or removed overall (57 declines in both readings), and the final check
reports zero errors.

## What was checked for every row

For each pending row I read, and did not merely trust:

1. the named source row in the batch coverage file
   (`research/phase-2-remaining-27-batch-<batch>.coverage.json`, located by
   `source_url` and `name`), and its recorded `disposition`, `destination`
   and `reason`;
2. the pair's scope decision
   (`research/phase-2-remaining-27-step3a-review-<page>.json`, the
   `-owner-` file where one exists, plus the batch/pair Step-3a report and,
   for the Lie and set-theory rows, the binding
   `research/phase-2-remaining-27-owner-authoring-direction.md`);
3. the page's manifested item inventory (`batch-<n>.pages.json`) and, for
   cross-run rows, the relevant `items/<id>.md` file, to confirm the
   deferred/out-of-scope material is absent from the page and unused by any
   owned proof, example or false statement;
4. for every `deferred` row, whether the destination resolves to a page in
   `research/plan-spec.json` (the same lookup the tool performs), and whether
   that destination's own manifest carries the material, with the design
   locator from `research/plan-algebraic-topology-track.md`,
   `plan-functional-analysis-track.md`, `plan-probability-track.md`,
   `plan-set-theory-completion-track.md` or
   `plan-differential-geometry-track.md`.

No coverage file, item file, manifest, proof contract, plan file or other
report was touched. Only the five scope-decision files and this report were
written. `prepare`/`refresh` were not run; the recorded
`row_sha256`/`context_sha256` pairs were left exactly as they were, and the
check confirms they are still current.

## Counts by group

| Group | batches | declines | stands | owner-decision | pending before this pass |
|---|---:|---:|---:|---:|---:|
| a | 11, 12, 13 | 7 | 7 | 0 | 6 |
| b | 9, 10, 4 | 16 | 15 | 1 | 16 |
| c | 1, 2, 5 | 9 | 9 | 0 | 9 |
| d | 6, 8 | 9 | 9 | 0 | 9 |
| e | 3, 14, 15 | 16 | 15 | 1 | 12 |
| **total** | | **57** | **55** | **2** | **52** |

Two rows are `owner-decision`. One (`0b49a2e785a6`, Sard–Smale) carried an
owner-held decision from Step 1 before this pass and was left untouched; it
is reproduced below because it is an owner-decision row in the current file,
not because this pass re-decided it.

## Owner-decision rows, in full

### 1. `Example 3.10: group L1 convolution and Fourier transform` (new, group b)

- decline_id: `42240b1dab44…` (batch 4, page
  `gelfand-theory-and-commutative-c-star-algebras`)
- source: `https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf`,
  row `Example 3.10: group L1 convolution and Fourier transform`
- recorded disposition: `deferred`, destination `owner-decision`
- recorded reason: "General locally compact group convolution requires Haar
  measure and is owned by the group/Fourier tracks; only ell1(Z) is worked in
  this pair."
- decision recorded: `owner-decision`
- evidence recorded: the decline itself is correct for this page — the FA-18
  inventory (`research/plan-functional-analysis-track.md`, FA-18 items 1–28)
  works only the ell-1(Z) character computation (B item 3) and the Wiener
  remark pointing at the Fourier-analysis track (B item 14), and general
  L1(G) convolution needs Haar measure this pair does not own. But the
  destination is the sentinel `owner-decision`, not a page: the long-range
  `research/plan-spec.json` does contain the unscaffolded LCA Fourier pages
  `character-groups-and-elementary-lca-duals` (510.06501),
  `bochner-inversion-and-plancherel-on-lca-groups` (510.06503) and
  `pontryagin-duality-for-locally-compact-abelian-groups` (510.06505), all
  with no items yet, and no page in this run is assigned the general locally
  compact group L1 convolution/Fourier material, so the row cannot be
  closed as a verified page deferral.
- requested owner action: route the row to the future Fourier-analysis LCA
  block (FR-15–FR-17) or keep it as recorded deferred debt. No coverage or
  manifest change was made here.

### 2. `Theorem 2.19, Sard–Smale` (pre-existing, group e — not re-decided in this pass)

- decline_id: `0b49a2e785a6…` (batch 3, page
  `banach-space-differential-calculus-and-banach-manifolds`)
- source: `https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf`
  (Sard–Smale lecture material), destination `owner-decision`, disposition
  `deferred`
- decision on file: `owner-decision`; evidence: the theorem is already
  published behind the differential-topology interface, this pair supplies
  only its Banach/Fredholm prerequisites, and the dispatch does not
  authorize repairing or re-homing that published page.

## Observations recorded while verifying (no coverage change made)

- The reason text of the `Example 4.2` row (batch 4, gelfand page) says the
  example is "assigned to the second A/B pair in this batch". In this run's
  batch numbering the material is on FA-19,
  `continuous-functional-calculus-for-self-adjoint-and-normal-operators`,
  which is run-batch 5; the pair's own Step-3a report likewise says "normal
  operator are FA-19". The decline is correct and the material is built
  there (`def-c-star-algebra-generated-by-a-normal-operator`,
  `lem-character-space-of-generated-normal-algebra-is-operator-spectrum`,
  `thm-bounded-normal-operator-abstract-spectral-theorem`); only the reason's
  batch wording is imprecise. Recorded for the owner/Step 4 prose pass.
- The two rows deferred to
  `fredholm-determinants-and-the-lidskii-trace-formula` (group e) point at a
  page that exists in `research/plan-spec.json` (order 288.0801) but is not
  built in this run; the binding owner direction and the FA-16 seam note
  explicitly leave Lidskii and the Fredholm determinants to that later pair,
  and the pair report already describes it as "the planned (not this run)
  pair". The deferrals stand on that basis.
- The Tachtsis row (batch 14) is disposed out-of-scope as a non-load-bearing
  historical drop; the separation it names is proved locally by
  `thm-relative-consistency-countable-choice-without-urysohn` and
  `cor-zf-does-not-prove-urysohn-lemma` via Brunner/Pincus. I did not
  independently re-verify the accessibility status of the corrected Proc.
  AMS paper; the pair's Step-3a report already records it as the page's only
  non-fetch-verified row. This is a source-status note, not a scope problem.

## Final check output

Per-group checks (run before the overall check):

```
scope-decisions: 7 current decline(s), 0 error(s)    (group a)
scope-decisions: 16 current decline(s), 0 error(s)   (group b)
scope-decisions: 9 current decline(s), 0 error(s)    (group c)
scope-decisions: 9 current decline(s), 0 error(s)    (group d)
scope-decisions: 16 current decline(s), 0 error(s)   (group e)
```

Overall:

```
$ node tools/scope-decisions.mjs check --run phase-2-remaining-27
scope-decisions: 57 current decline(s), 0 error(s)
exit=0
```
