# Batch 25 authoring and verification notes

Run: `physics-remaining-80-2026-10-17`  
Role: beta  
Pair: `emg-s02` / `emg-s02-examples`  
Date: 2026-10-17

## Scope and plan reconciliation

The current plan inventory is `emg-s02`, order 485, with direct page requirements
`emg-ms03` and `emg-s01`. The older design section at
`research/plan-einstein-maxwell-models-track.md` line 857 and its proposed
inventory also name `emg-g01` and `emg-g04`. This conflicts with the current
`research/plan-spec.json` page record and the run manifest. The plan controls:
the authored A page retains the two current
direct requirements. Their transitive supplier closure was checked; this does
not remove any prerequisite used by the arguments.

The planned A inventory contains five carriers and the B inventory contains
two thought experiments. I added
`pthm-emg-xs-geometric-to-si-model` to A as a proved intermediate theorem:
the assigned exact solutions share the same geometric-to-SI rescaling, and
placing that argument locally makes the normalization, units, field equations,
and adopted-postulate boundary explicit before the solution carriers use it.
The expansion is recorded in the manifest. No claim or prerequisite was
weakened to fit the page; the A/B inventory is far below the 100-item limit.

The assigned carriers are supplier-first within A, followed by B:

| Item | Level | Direct dependencies |
|---|---:|---|
| `pthm-emg-xs-geometric-to-si-model` | 4 | `post-emg-einstein-maxwell-equations`, `def-emg-xs-geometric-electrovac`, `def-emg-xs-si-parameters`, `def-emg-geometry-units`, `lem-emg-maxwell-current-forms`, `def-countable-choice` |
| `pthm-emg-xs-br-model` | 5 | `pthm-emg-xs-geometric-to-si-model`, `post-emg-einstein-maxwell-equations`, `def-emg-xs-br-products`, `thm-emg-xs-br-verification`, `def-emg-xs-si-parameters`, `def-countable-choice` |
| `pthm-emg-xs-null-wave-model` | 5 | `pthm-emg-xs-geometric-to-si-model`, `post-emg-einstein-maxwell-equations`, `def-emg-xs-null-wave`, `thm-emg-xs-null-wave-verification`, `def-emg-xs-si-parameters`, `def-countable-choice` |
| `pthm-emg-xs-mp-model` | 6 | `pthm-emg-xs-geometric-to-si-model`, `post-emg-einstein-maxwell-equations`, `def-emg-xs-harmonic-mp`, `thm-emg-xs-mp-verification`, `prop-emg-xs-mp-multicenter`, `def-emg-xs-si-parameters`, `def-countable-choice` |
| `texp-emg-xs-null-curvature` | 6 | `post-emg-einstein-maxwell-equations`, `def-emg-xs-null-wave`, `pthm-emg-xs-null-wave-model`, `prop-emg-xs-null-invariants`, `def-emg-xs-si-parameters`, `def-countable-choice` |
| `texp-emg-xs-two-center-model` | 7 | `post-emg-einstein-maxwell-equations`, `pthm-emg-xs-mp-model`, `def-emg-xs-harmonic-mp`, `prop-emg-xs-mp-multicenter`, `def-emg-xs-si-parameters`, `def-countable-choice` |
| `pthm-emg-xs-mp-extremal` | 8 | `pthm-emg-xs-mp-model`, `pthm-emg-xs-rn-model`, `post-emg-einstein-maxwell-equations`, `def-emg-xs-harmonic-mp`, `prop-emg-xs-mp-extremal-rn`, `def-emg-xs-rn-data`, `def-emg-xs-si-parameters`, `def-countable-choice` |
| `pthm-emg-xs-br-limit` | 8 | `pthm-emg-xs-rn-model`, `thm-emg-xs-rn-near-horizon`, `pthm-emg-xs-br-model`, `post-emg-einstein-maxwell-equations`, `def-emg-xs-si-parameters`, `def-emg-xs-br-products`, `def-countable-choice` |

These dependency lists and levels match the batch manifest and the scoped
recomputation over the 42-item transitive supplier closure. The two-center
thought experiment now depends on the A-page multicenter proposition and
harmonic definition; an earlier draft reference to the mathematical example
on another pair's B page was removed after scoped dependency checking.

## Supplier inspection and claim status

I inspected the current complete statements and relevant proofs for all direct
and transitive mathematical and physical inputs, including the geometric
electrovac and SI-parameter definitions, the adopted Einstein–Maxwell
postulate, the Maxwell-current-forms lemma, the MP and BR definitions and
verifications, the finite-center flux and MP/extremal-RN propositions, the
RN and near-horizon carriers, the BR product, the null-wave definition,
verification and invariant proposition, and the countable-choice convention.
The in-run batch 23 and batch 24 prerequisite arguments have current Step 1
readiness records. Their `draft` labels are not treated as independent proof
approval: each use is explicitly conditional on the inspected statement and
proof, and the authored items retain that caveat. No missing supplier, stale
readiness record, or unsupported mathematical input remained for this batch.

The only choice strength used is the inherited `AC_omega` context. No full
axiom of choice is added. The source-free Einstein–Maxwell equations with
`Lambda=0`, zero current, and zero material stress are adopted model
postulates. The conclusions are conditional deductions from that model;
none of the pages reports observations, experimental validation, or derived
measurements. Open-domain and excluded-center limitations are stated in the
items.

## Full-text sources and dispositions

The A page is supported by two independent complete lecture-note treatments;
the complete specialized paper supplies additional wave context. Full
documents are archived under
`research/physics-remaining-80-2026-10-17-batch-25-sources/raw/`:

| Source | Read locator and supported result | SHA-256 |
|---|---|---|
| David Tong, *General Relativity*, complete 290-page notes, <https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf> | §§3.2–3.4 for convention checks; §6.2.5 and the complete following “Multi-Black-Hole Solutions” section for extremal RN throat and harmonic finite-center context. Supports `pthm-emg-xs-geometric-to-si-model`, `pthm-emg-xs-br-limit`, and `pthm-emg-xs-mp-model`. The local items prove their exact hypotheses and limits. | `3ba65dc61f22a69c7d5fdf3e8e1f641efbfa6cf49a44b3dcb0fd5367ba9fcf1c` |
| Sean M. Carroll, *Lecture Notes on General Relativity*, complete 238-page notes, <https://arxiv.org/pdf/gr-qc/9712019v1> | Ch. 4 Maxwell and Einstein–Maxwell conventions; Ch. 7, equations (7.151)–(7.161), charged RN solution and extremal case. Supports convention checks for `pthm-emg-xs-geometric-to-si-model` and RN/MP context for `pthm-emg-xs-mp-extremal`. Gaussian units and global black-hole interpretations are not imported. | `d4cbfeed3a18370cb7e1a256da6fa7de722982ad7f6a146b4fc0fe14a6bebf6c` |
| Y. Nutku, “Electrovac pp-waves,” arXiv:gr-qc/0502049v2, complete 3-page paper, <https://arxiv.org/pdf/gr-qc/0502049v2> | Entire paper read: §1 equations (1)–(3), §2 equation (6), and §4 equations (10)–(12). Supports exact-wave context for `pthm-emg-xs-null-wave-model` and BR context for `pthm-emg-xs-br-model`; differing signature, normalization, and complex-profile assumptions are not imported. | `55f20cb44c707860e5172506204e937a2eb1187923ad4af6c053c9074a6b0ea0` |

Every harvested result and its `included`, `inline`, or `out-of-scope`
disposition is recorded in `batch-25.coverage.json` and detailed in
`batch-25-sources/source-reading.md`. The source-resolution list is empty:
all three first retrieval attempts succeeded, so there were no recovery
searches, retries, drops, or owner escalations. The actual
`source-fetch-check.mjs --stamp` command returned **3/3 fetch-verified** and
**3/3 resolved (0 drops)**; the subsequent check also passed.

## Dependency interfaces and cross-batch edges

The current interfaces of the direct in-run suppliers were matched to each
consumer's stated hypotheses and conventions. This is a scoped interface
check, not independent proof acceptance. The cross-batch dependency file has
39 unique rows (37 item edges and two page edges), one per direct edge, with
all assigned checks marked `verified` after statement/interface inspection.
The actual dependency-level computation keeps batch 25 at level 6 and gives
direct supplier batches `1`, `3`, `5`, `21`, `23`, and `24`.

Two batch-wide artifacts remain owner-level blockers and were not modified:

1. `research/physics-remaining-80-2026-10-17-batch-dependency-levels.json`
   still records batch 25 direct requirements as only batches 23 and 24.
   `batch-dependency-levels.mjs check --run` therefore reports the shared
   schedule stale: recomputation adds batches 1, 3, 5, and 21 while retaining
   level 6. The owner must regenerate/review the shared schedule.
2. Unscoped `proof-contract-coverage` currently stops with
   `Empty or invalid frontier page inventory tgr-phs04`. An exact temporary
   batch-25 root under `/tmp` passes with all 8/8 assigned carriers covered.
   The unrelated page was left untouched.
3. After the eight assigned readiness records were written, full-run
   `step1-decisions.mjs check` reported 704 items, 697 ready, and unrelated
   work remaining: four stale records on `tgr-phs02` (their item/dependency
   hashes no longer match), three missing records on `tgr-phs03` and
   `tgr-phs03-examples`, and empty inventories on `tgr-phs04` and
   `tgr-phs04-examples`. Batch 25's eight records were current and did not
   appear in the work list. During this turn, other authoring populated
   `tgr-phs03` with those three items; an earlier full-run check saw 701 items,
   693 ready, the eight batch-25 records missing, and four empty TGR page
   inventories. No other batch was changed by this task.

## Scoped checks

The following checks were run after the final content edits; all assigned
carriers passed unless noted above for the two unscoped artifacts:

- precheck: 8 checked, 0 failing;
- proof layout: 8 items, 24 proof steps, 0 defects;
- strict proof contracts: 8/8, 0 errors, 0 warnings;
- scoped proof-contract coverage: 8/8 carriers covered;
- manifest dependency check: 8 items, 0 missing dependencies, 0 errors;
- content policy: 8 items, 0 errors, 0 warnings;
- dependency check: 8 selected items; closure 1,633 items and 420 pages;
- forward-reference check: 8 selected items; closure 1,608 items and 427 pages;
- external prerequisite check: 34,063-item corpus, 0 recorded-not-proved
  dependencies and 0 dependencies resting on them;
- render check: 10 changed files, YAML, math, and TikZ parse successfully;
- coverage checklist: 1 A page, 11 harvested results, 0 errors, 0 warnings;
- source fetch check: 3/3 fetch-verified, 3/3 resolved;
- dependency levels: all 8 assigned items match their recomputed levels;
- cross-batch edge integrity: 39 expected and actual rows, no duplicates,
  missing, extra, or malformed edges.

All eight item records were written with `step1-decisions.mjs record`,
`decision: ready`, and `owner: false`. A fresh `loadStep1Record` plus
`step1Decision` check reports all eight hashes current with their exact direct
dependency lists. A `ready` record means Step 1 prerequisites and authoring
are present; it is not independent proof approval.
