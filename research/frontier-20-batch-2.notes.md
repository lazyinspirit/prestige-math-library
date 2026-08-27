# frontier-20 batch 2 notes — step 1 scaffold

Owned pair: `the-lebesgue-integral-and-the-convergence-theorems` (A, order
288.015) with `the-lebesgue-integral-and-the-convergence-theorems-examples` (B,
288.016).

Artifacts written in this dispatch: `research/frontier-20-batch-2.pages.json`,
`research/frontier-20-batch-2.coverage.json`, and this file. Nothing else was
edited.

## Design against spec

Recorded, not adjudicated here.

- The design section `research/plan-measure-theory-track.md` §MT-8 states
  `requires`: MT-7, MT-2, `series-and-nonnegative-tests`, `convexity`, and
  `limsup-and-subsequential-limits`.
- `research/plan-spec.json` and the generated batch task instead give the page
  prerequisite `measurable-functions-and-simple-approximation-examples`.

I followed the spec, exactly as the dispatch requires, and recorded the
disagreement instead of choosing between them.

## Self-contained scope choice

`content-policy.mjs --manifest-only` makes unresolved item-level dependencies a
hard step-1 error. At the time this step-1 scaffold was written, batch 1 still
had empty `items` arrays in this checkout, so batch 2 could not legally depend
on hypothetical MT-7 item ids that were not yet on disk.

To keep the scaffold dependency-closed without editing another batch, the A page
internalizes the minimum measurable-function/simple-approximation material it
actually needs under **narrow, integral-specific ids**:

- `def-extended-real-valued-measurable-function`
- `def-nonnegative-simple-measurable-function`
- `prop-closure-properties-of-measurable-functions-used-by-the-integral`
- `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`

That is a deliberate containment move, not a silent re-plan of MT-7. The notes
flag it so Alpha can decide later whether batch 1 should keep the broader page
and cite these narrower items, or whether Step 4/5 wants a reconciliation pass.

## Source set actually read

Independent treatments harvested for this pair:

1. Richard F. Bass, *Real Analysis for Graduate Students*, Version 5.0 (2024).
   Read ch. 6 §6.1, ch. 7 §§7.1–7.4, and ch. 8 §8.1.
2. John K. Hunter, *Measure Theory Notes*, ch. 4 “Integration”.
   Read the whole chapter.
3. Gerald B. Folland, *Real Analysis*, 2nd ed., ch. 2 §§2.2–2.3.
4. Wheeden–Zygmund, *Measure and Integral*, ch. 7 around Theorem (7.44).

This satisfies the standing requirement of two independent treatments with at
least one harvestable textbook. The coverage file records the exact URLs,
locators, harvested headings, and per-heading dispositions.

## Item census

- A page `the-lebesgue-integral-and-the-convergence-theorems`: 45 items.
- B page `the-lebesgue-integral-and-the-convergence-theorems-examples`: 14 items.

The A page is below the 60-item split ceiling, so no split is proposed.

## Route and conventions held

- The page follows the design's three-stage order: nonnegative simple integral,
  nonnegative measurable integral and convergence theorems, then signed/complex
  integration with DCT and its corollaries.
- The `0 * infinity = 0` convention is fixed in the simple-integral definition,
  exactly where the design says a judge will look for it.
- MCT is proved with the explicit `c in (0,1)` device in the exhaustion sets
  `A_n = {f_n >= c s}`. The notes record this because omitting the factor is the
  design's named proof trap.
- The density theorem is stated in the full measure-theoretic form the design
  wants: `g` ranges over nonnegative measurable functions, not only integrable
  ones.
- Jensen is stated for a **probability** measure, not an arbitrary finite or
  infinite measure space.
- Continuity and differentiation under the integral sign are sourced from
  Folland's Theorem 2.27 and kept as separate A-page theorems because later
  pages use them separately.

## Generated material

No generated A-page statement was introduced.

Three B-page witnesses are presently scaffolded as standard, low-risk generated
counterexamples if no stronger direct source is added at authoring time:

- `cex-pointwise-limit-of-integrable-functions-can-be-nonintegrable`
- `cex-linearity-can-fail-without-integrability`
- `cex-jensen-can-fail-without-probability-normalization`

Each is a two-line verification and none is a dependency target. The rest of the
companion page follows the design's canonical examples and failures.

## Known limits and open risks

- At step 1, batch 1 still had empty `items` arrays in this checkout, so the
  present scaffold could not prove that its narrow measurable-function
  preliminaries were the best global home for those concepts. On the current
  bytes that rationale is historical; the remaining issue is only whether Step
  4 or Step 5 wants to reconcile permanent ownership of those four narrow
  preliminaries. That is a reconciliation question, not a reason to leave batch
  2 dependency-incomplete.
- I did **not** create `research/frontier-20-batch-2.proof-contracts.json`.
  The step-1 task authorizes only the batch manifest, coverage, and notes.
- The deferred catalogue already contains recorded-not-proved remarks for the
  Lebesgue integral, MCT, Fatou, and DCT. This scaffold does not touch published
  content. At step 5 the authored proof-bearing items should carry those `rem-`
  ids as aliases, in line with the measure-track design notes.

## Validation checklist

Commands to run after writing the scaffold:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-20-batch-2.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-20-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-2.coverage.json --stamp
node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-2.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-20-batch-2.coverage.json --out /tmp/frontier-20-batch-2-url-liveness.json --recover --fail-on-dead
```

## Step-3 fix pass

Alpha group `a` marked
`the-lebesgue-integral-and-the-convergence-theorems` as `sufficient` in
`research/frontier-20-alpha-a-step3-scaffold-review.md`. No numbered finding id
was issued for batch `2`; the review's only finding, `B1-1`, is confined to
batch `1`.

- `finding ids for batch 2` — `none issued`; no change was made to
  `research/frontier-20-batch-2.pages.json` or
  `research/frontier-20-batch-2.coverage.json`.
- `notes stale-justification repair` — `applied`; changed scaffold record:
  `research/frontier-20-batch-2.notes.md`.
  Evidence: `research/frontier-20-batch-1.pages.json` now carries nonempty item
  arrays on all four owned pages (`22`, `9`, `28`, `12` items), so the earlier
  present-tense claim that batch `1` "still has empty `items` arrays" was no
  longer true on the current bytes. The four local MT-8 preliminaries remain
  source-backed and dependency-closed, so the containment choice stands; only
  its step-1 justification needed tense repair.
- `coverage-checklist` — pass on Wednesday, August 26, 2026:
  `1` page, `48` harvested results, `0` errors, `0` warnings.
- `content-policy --manifest-only research/frontier-20-batch-*.pages.json` —
  pass on Wednesday, August 26, 2026: `486` scoped items, `0` errors, `0`
  warnings.
- `validate-plan research/plan-spec.json` — pass on Wednesday, August 26, 2026;
  the validator still reports repository-wide `redundant-prereq` advisories
  outside this batch, but no batch-2 order, dependency, or unresolved-id
  failure.
- `source-fetch-check --coverage research/frontier-20-batch-2.coverage.json` —
  pass on Wednesday, August 26, 2026: `4/4` source records fetch-verified.
- `url-sweep --coverage research/frontier-20-batch-2.coverage.json --out /tmp/frontier-20-batch-2-url-liveness.json --recover --fail-on-dead`
  — local DNS failure persists for all four hosts (`curl: (6) Could not resolve
  host`), so the shell-side sweep is still not a live-host test in this
  environment.
- `web verification of the recorded URLs` — all four source URLs opened
  successfully on Wednesday, August 26, 2026, including the Bass PDF, the
  Hunter PDF, and both djvu.online source pages. No alternate URL, archive
  substitution, or re-sourcing is warranted on the current evidence.

The original step-1 command results are recorded below after execution. The
current step-3 reruns are recorded in `## Step-3 fix pass` above.

## Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-20-batch-2.coverage.json`
  passed: `1` page, `48` harvested results, `0` errors, `0` warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-*.pages.json`
  passed: `167` scoped items, `0` errors, `0` warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Wednesday, August 26, 2026. The run still prints the existing
  repository-wide `redundant-prereq` notes outside this batch, but it reports no
  batch-2 item-order, forward-dependency, B-leaf, or unresolved-id failure.
- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-2.coverage.json --stamp`
  failed for all four URLs with the same local resolver error `EAI_AGAIN`.
  Exact failures:
  - `https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf`
  - `https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf`
  - `https://djvu.online/file/NPF4BEtSuqdFA`
  - `https://djvu.online/file/u1gYJemR8hzMe`
- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-2.coverage.json`
  then failed, correctly, because no `fetch_verified` stamps exist after the
  resolver failure.
- `node tools/url-sweep.mjs --coverage research/frontier-20-batch-2.coverage.json --out /tmp/frontier-20-batch-2-url-liveness.json --recover --fail-on-dead`
  failed `0/4` live with the same DNS-level problem: `curl: (6) Could not
  resolve host` for every source host. The receipt was still written to
  `/tmp/frontier-20-batch-2-url-liveness.json`.

What was verified despite the fetch-stamp blocker:

- Every source body was opened through the web-research channel in this
  dispatch, and the coverage locators were written from those actual reads.
- No `fetch_verified` object was fabricated.
- No alternate live URL or archive snapshot was substituted, because the failure
  is resolver-wide across all four hosts in this shell environment, not a
  source-specific dead-link diagnosis.

Exact remaining action for the engine:

```bash
node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-2.coverage.json --stamp
node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-2.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-20-batch-2.coverage.json --out /tmp/frontier-20-batch-2-url-liveness.json --recover --fail-on-dead
```

## Step-5 authoring

- **Authored scope.** Authored every planned item and both planned draft pages for batch `2`: the full A-page `the-lebesgue-integral-and-the-convergence-theorems` item list (`45` ids), the full B-page `the-lebesgue-integral-and-the-convergence-theorems-examples` example/counterexample list (`14` ids), and the new batch contract file `research/frontier-20-batch-2.proof-contracts.json` (`51` proof-bearing contracts).
- **Authored ids.** No scope deletion or re-home was taken at Step 5: all `59` manifest ids now have authored item files on disk, and both page files now exist under `library/measure-theory/`.
- **Provenance rationale.** Standard definitions, theorems, corollaries, and sourced example/counterexample statements were tagged `literature-derived`; their local proofs were written here and tagged `ai-generated`. The three already-noted batch-2 generated witnesses remain honestly tagged with generated statements and `generation.role: counterexample`: `cex-pointwise-limit-of-integrable-functions-can-be-nonintegrable`, `cex-linearity-can-fail-without-integrability`, and `cex-jensen-can-fail-without-probability-normalization`.
- **Claim scope.** No planned item was dropped. No theorem claim was narrowed away from the authored page route. The witness choice for `fs-zero-integral-forces-everywhere-zero` uses the singleton indicator rather than the Dirichlet function, but the false statement and its mathematical force are unchanged.
- **Dependency/proof cleanup.** During authoring, one stale fact/dependency was removed from `prop-order-and-scalar-rules-for-the-nonnegative-integral`: the proof as written does not consume the simple-approximation theorem there, so the item now cites only the results it actually uses. The proof-contract generator was then rerun against the final step numbering.
- **Published-alias blocker left explicit.** I did **not** attach the old published remark ids (`rem-lebesgue-integral`, `rem-monotone-convergence-theorem`, `rem-fatou-lemma`, `rem-dominated-convergence-theorem`) as aliases on the new proved-here items. Those ids and short aliases already exist on published remark files, and reusing them would create alias collisions that `SCHEMA.md` explicitly says are unsafe; editing or retiring the published records is outside this batch-authoring scope.
- **Validation on Wednesday, August 26, 2026.**
  - `node tools/tsx-run.mjs tools/precheck.mts <all 59 batch-2 item files>` — pass: `51 checked, 0 failing`; the `8` definition items were present in the command and correctly skipped by precheck because they have no proof-like section.
  - `node tools/content-policy.mjs research/frontier-20-batch-2.pages.json` — pass: `59 scoped item(s), 0 error(s), 0 warning(s)`.
  - `node tools/validate-plan.mjs research/plan-spec.json` — pass. Tail on the current bytes: `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 432 page(s) with item lists.` The repository-wide note about the other `769` planned pages still having no item lists is unchanged and outside this batch.
  - `node tools/proof-contract.mjs research/frontier-20-batch-2.proof-contracts.json --strict` — pass: `0 error(s), 0 warning(s), 51/51 item(s) checked`.
