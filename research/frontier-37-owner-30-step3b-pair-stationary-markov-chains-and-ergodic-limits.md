# Step 3b — pair `stationary-markov-chains-and-ergodic-limits` (final report)

- Run: `frontier-37-owner-30`; role `alpha-high`; batch 1; dispatch label
  `step3b-pair-stationary-markov-chains-and-ergodic-limits-f746e865a84e5824`.
- A page: `stationary-markov-chains-and-ergodic-limits` (22 items);
  B page: `stationary-markov-chains-and-ergodic-limits-examples` (10 items).
- Output batch file: `research/frontier-37-owner-30-batch-1.pages.json`.
- Status: **complete**. All 32 items authored and closed; all Step-3b gates
  below were run at handoff. This file was originally opened as the authoring
  checkpoint and is now the dispatch report.

## Scope and inputs read

- `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the batch-1 manifest, coverage,
  notes, proof contracts and `cross-batch-dependencies.json` (`[]`).
- Step 3a scope review (`research/frontier-37-owner-30-step3a-pair-stationary-markov-chains-and-ergodic-limits.md`;
  decision `sufficient`, receipt sha256 `868b146b…`). Its three observations
  were carried into authoring: (1) Durrett §5.7 (Lemma 5.7.1, Theorems
  5.7.2–5.7.3/Orey) is *not* promised by this inventory — nothing in the pair
  claims it, and the design's aperiodicity-boundary remark is the declared
  substitute, so no item was changed; (2) five named Durrett headings inside
  the declared range had no disposition row — resolved, see "Coverage record"
  below; (3) no merger is proposed — nothing to do.
- No `research/frontier-37-owner-30-owner-authoring-direction.md` exists; no
  repair report is named by the scope decision.
- `research/frontier-37-owner-30-pre-splice-plan-findings.json` was rechecked
  for this pair: the single finding (index 36, B page item depending on
  `cayley-graphs-word-metrics-and-quasi-isometry`, outside the B page's
  `requires` closure) is **stale/unfounded** under current inputs. Evidence: no
  item of the batch lists that id in `deps`, and no item file of the 32
  contains the string "cayley". `depcheck` reports zero findings for the batch.
- Sources: Durrett, *Probability: Theory and Examples* 5th ed. (§5.5–5.6 and
  §6.2), Levin–Peres–Wilmer, *Markov Chains and Mixing Times* 2nd ed. (§1.4,
  §21.3, App. C.1), Aldous–Chewi Lectures 13–15; exact locators in
  `research/frontier-37-owner-30-batch-1.coverage.json`. The Durrett PDF was
  re-downloaded in this dispatch (490 pages, fetched complete) to re-read the
  five headings named in observation 2.

## Authoring order and recomputed labels

Items were audited and authored one at a time in the dispatch's
dependency-level order (level, then page order, then item ID), with an
explicit-path precheck after each. One label was recomputed after a dependency
change: `cex-a-stationary-chain-need-not-be-ergodic` had manifest
`dependency_level: 2` from the scaffold; when its AC-carrying in-run supplier
was dropped (the counterexample is verified by the explicit two-path law), its
computed level became 1 and the manifest label was corrected.
`item-dependency-levels check --run frontier-37-owner-30` passes at handoff
(811 items, 60 pages, maximum level 31).

## Completed items (all 32, kind-labelled)

A page `stationary-markov-chains-and-ergodic-limits` (22): 5 definitions
(`def-invariant-and-stationary-distribution-for-a-markov-kernel`,
`def-positive-recurrent-and-null-recurrent-state`,
`def-reversible-measure-and-detailed-balance`,
`def-stationary-process-and-canonical-shift`,
`def-total-variation-distance-for-probability-laws`); 4 lemmas
(`lem-aperiodic-return-times-are-eventually-positive`,
`lem-return-cycle-occupation-measure-and-minimality`,
`lem-detailed-balance-implies-invariance`,
`lem-total-variation-half-l1-formula-on-a-countable-space`); 10 theorems
(`thm-every-finite-transition-matrix-has-a-stationary-distribution`,
`thm-invariant-initial-law-makes-the-chain-stationary`,
`thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains`,
`thm-stationary-process-birkhoff-ergodic-limit`,
`thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains`,
`thm-kac-return-time-formula-for-a-state`,
`thm-time-reversal-of-a-stationary-markov-chain`,
`thm-kac-return-time-formula-for-a-positive-mass-set`,
`thm-markov-chain-ergodic-theorem`,
`thm-cesaro-convergence-for-irreducible-positive-recurrent-chains`);
2 corollaries
(`cor-stationary-irreducible-markov-shift-is-ergodic`,
`cor-uniqueness-of-the-stationary-distribution-for-an-irreducible-positive-recurrent-chain`);
1 remark
(`rem-aperiodicity-is-needed-for-ordinary-time-convergence-not-ergodic-averages`).

B page `stationary-markov-chains-and-ergodic-limits-examples` (10): 6 examples
(`ex-doubly-stochastic-transition-matrix-has-uniform-stationary-law`,
`ex-stationary-law-of-a-two-state-chain`,
`ex-stationary-distribution-of-a-finite-birth-and-death-chain`,
`ex-random-walk-on-a-finite-undirected-graph-is-reversible`,
`ex-empirical-state-frequencies-converge-to-stationary-masses`,
`ex-periodic-chain-has-cesaro-but-not-ordinary-convergence`);
4 counterexamples
(`cex-a-null-recurrent-chain-has-no-stationary-probability`,
`cex-a-stationary-chain-need-not-be-ergodic`,
`cex-invariance-does-not-imply-reversibility`,
`cex-positive-recurrence-without-aperiodicity-does-not-give-total-variation-convergence`).

No item was dropped, no promised claim was reduced, no pair/page was added, and
no published item or Recorded result was consumed or edited.

## Local scaffold repairs and dependency changes

- `lem-detailed-balance-implies-invariance`: added
  `def-invariant-and-stationary-distribution-for-a-markov-kernel` (the lemma's
  conclusion is invariance in the sense of that definition).
- `lem-return-cycle-occupation-measure-and-minimality`: added published
  `thm-tonelli-for-nonnegative-double-series` for the nonnegative interchange
  of the double sums.
- `thm-invariant-initial-law-makes-the-chain-stationary`: added
  `def-iterated-transition-kernels`,
  `def-initial-distribution-of-a-markov-chain` and
  `def-stochastic-process-and-finite-dimensional-distributions`; repaired the
  stale internal cross-reference in step 6.1 (steps 2.1–3.2 → 2.1–3.1, since
  step 3.2 does not exist) and cited `[F2]` at step 2.1, where the initial law
  is genuinely used (the citation contract previously had no use for it).
- `thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains`:
  added `thm-tonelli-for-nonnegative-double-series` for the exchange in the
  matrix induction; uniqueness of the invariant probability is proved inline
  here so that no later item justifies this one.
- `thm-stationary-process-birkhoff-ergodic-limit`: added
  `def-conditional-expectation-given-a-sigma-algebra` and
  `def-ergodic-measure-preserving-system`; repaired the stale step reference
  "steps 4.1–2.3" → "steps 3.2 and 4.1".
- `thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains`:
  corrected the two-cycle total-variation value from `1` to `1/2` under this
  library's no-factor-half TV convention (the definition sums |μ−ν| over the
  positive-difference event); added
  `def-accessibility-communication-and-irreducibility`, which the Statement
  cites but the scaffold deps omitted (`depcheck` cited-not-in-deps finding).
- `thm-kac-return-time-formula-for-a-state`: corrected the scaffold's
  invariant-defect sketch — the invariant defect is `η = π − π(b)μ_b`, not
  `π/π(b) − μ_b`, because the normalised candidate is not invariant at `b`.
- `ex-stationary-law-of-a-two-state-chain`: adopted the canonical precheck
  repair of the solution text; declared AC (see the AC section).
- `ex-stationary-distribution-of-a-finite-birth-and-death-chain`: added
  `def-transition-matrix-and-n-step-transition-probabilities`.
- `cex-a-stationary-chain-need-not-be-ergodic`: dropped the unnecessary
  AC-carrying supplier (the counterexample is verified by the explicit
  two-path law); manifest `dependency_level` recomputed 2 → 1.
- `cex-invariance-does-not-imply-reversibility`: declared AC (see below).
- New items authored in this dispatch (all four are B-page boundary items):
  `rem-aperiodicity-is-needed-for-ordinary-time-convergence-not-ergodic-averages`,
  `ex-empirical-state-frequencies-converge-to-stationary-masses`,
  `ex-periodic-chain-has-cesaro-but-not-ordinary-convergence`,
  `cex-positive-recurrence-without-aperiodicity-does-not-give-total-variation-convergence`.
- Rendering repairs: seven items carried a multiline `$$…$$` display block,
  which `rendercheck` flags as a mis-render; each display was joined to one
  source line with no change to the mathematics
  (`thm-convergence-to-stationarity-…`, `thm-markov-chain-ergodic-theorem`,
  `thm-cesaro-convergence-…`, `thm-stationary-process-birkhoff-ergodic-limit`,
  `ex-empirical-state-frequencies-…`, `ex-periodic-chain-…`,
  `cex-positive-recurrence-without-aperiodicity-…`).
- Manifest `deps` rows were refreshed from the item frontmatter for all 32
  rows; `manifest-deps` reports 0 normalized, 0 errors.

## Coverage record

`research/frontier-37-owner-30-batch-1.coverage.json` now carries 58
dispositions (27 included, 12 inline, 3 already-published, 16 out-of-scope) and
passes `coverage-checklist --require-destination` with 0 errors and 0
warnings; `source-fetch-check` reports 3/3 fetch-verified. Scope-review
observation 2 is resolved: the five named Durrett headings previously lacking
a row (Examples 5.5.1–5.5.3 at PDF p. 308, Example 5.5.14 at PDF p. 315,
Example 5.6.3 at PDF p. 320) were read in the freshly downloaded PDF and given
specific out-of-scope reasons as model instances the approved inventory does
not build. Observation 1 (Durrett §5.7) is left as an owner enrichment
decision; nothing in the pair promises those results.

## Checks run (exact results at handoff)

- Explicit-path precheck, all 32 items: **27 checked, 0 failing — all clean**
  (5 definitions/remark are `n/a` by kind and carry `verification.precheck: n/a`).
- `rendercheck.mjs` on the 32 explicit paths: **OK** — no wikilink inside
  math, no nested/unbalanced delimiters, no multiline display, every math span
  parses under KaTeX, every frontmatter block parses.
- `content-policy.mjs research/frontier-37-owner-30-batch-1.pages.json`:
  **32 scoped items, 0 errors, 0 warnings**.
- `proof-contract.mjs research/frontier-37-owner-30-batch-1.proof-contracts.json --strict`:
  **0 errors, 5 warnings, 32/32 items checked** (see below).
- `manifest-deps.mjs research/frontier-37-owner-30-batch-1.pages.json`:
  **32 items, 0 normalized, 0 errors**.
- `coverage-checklist.mjs … --require-destination`: **1 page, 58 harvested
  results, 0 errors, 0 warnings**.
- `item-dependency-levels.mjs check --run frontier-37-owner-30`: **passes**
  (811 items, 60 pages, maximum level 31; counts move as sibling pairs add
  items).
- `validate-plan.mjs research/plan-spec.json`: **exit 0** — declared page
  order acyclic and consistent; no item-level cycles, forward references,
  B-page dependencies or unresolved ids among the 1,300 pages with item lists.
  Pre-splice mismatches for Step 4: the plan rows for this pair (and 367
  planned pages run-wide) still carry empty item lists — the splice must
  populate them from the batch manifest; the pre-existing redundant-prereq
  notices for this page's nine plan requirements are unchanged.
- `depcheck.mjs` (run-wide): the batch has **0 findings** (the run-wide exit is
  nonzero on other pairs' 553 error lines). One real batch finding was found
  and repaired during this pass (the missing
  `def-accessibility-communication-and-irreducibility` dep above).
- `fwdcheck.mjs` (run-wide): **0 findings involving this batch** (141
  `link-unplanned` errors elsewhere). `citecheck.mjs`: exit 0.
- `step3-decisions.mjs check --run frontier-37-owner-30 --phase final`: the
  pair scope decision is closed (sha `868b146b…`); **all 32 item decisions are
  closed**; the run-wide check is not closed because other pairs are still
  authoring.
- `frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30`:
  **blocked by another pair's file** — see open obligations.

## Proof contracts

`research/frontier-37-owner-30-batch-1.proof-contracts.json` covers all 32
items: 163 `(fact, source)` citation entries, each quoting the exact cited
section with the complete list of steps that name the fact; 189 numbered-step
entries, each mapped exactly once with its actual claim and the inputs its
bracket cites; and 256 boundary dispositions (8 per item) covering empty,
zero, one, degenerate, endpoints, nonempty-choice and both iff directions,
each with step-anchored evidence or an item-specific `not_applicable` reason.
Definitions and the remark carry empty citation/derivation lists and the same
eight-row worksheet.

The strict gate's five warnings are the nonfatal `shotgun-bracket` shape (a
late boundary/summary step that names many declared facts while some purely
algebraic steps name none), in
`lem-return-cycle-occupation-measure-and-minimality`,
`thm-kac-return-time-formula-for-a-positive-mass-set`,
`thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains`,
`thm-markov-chain-ergodic-theorem` and
`cex-a-null-recurrent-chain-has-no-stationary-probability`. In each case the
cited facts are genuinely used at the step named (AC accounting, boundary
cases, or the displayed limit), the intermediate steps are pure algebra or
citations of earlier steps, and rewording would misattribute uses; the tool
itself classifies this shape as nonfatal.

## Axiom of Choice: statement and exact use

The assumption is stated in each consuming item's Statement or Facts
("Every family of nonempty sets has a choice function") and declared as the
dependency `def-axiom-of-choice`. **18 of 32 items declare it**: the 12 A items
`thm-invariant-initial-law-makes-the-chain-stationary`,
`lem-return-cycle-occupation-measure-and-minimality`,
`thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains`,
`thm-stationary-process-birkhoff-ergodic-limit`,
`thm-kac-return-time-formula-for-a-state`,
`thm-time-reversal-of-a-stationary-markov-chain`,
`cor-uniqueness-of-the-stationary-distribution-for-an-irreducible-positive-recurrent-chain`,
`thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains`,
`thm-kac-return-time-formula-for-a-positive-mass-set`,
`thm-markov-chain-ergodic-theorem`,
`thm-cesaro-convergence-for-irreducible-positive-recurrent-chains`,
`cor-stationary-irreducible-markov-shift-is-ergodic`, plus the 6 B items
`ex-stationary-law-of-a-two-state-chain`, `cex-a-null-recurrent-chain-has-no-stationary-probability`,
`cex-invariance-does-not-imply-reversibility`, `ex-empirical-state-frequencies-converge-to-stationary-masses`,
`ex-periodic-chain-has-cesaro-but-not-ordinary-convergence`,
`cex-positive-recurrence-without-aperiodicity-does-not-give-total-variation-convergence`.
Each item's final step names the exact suppliers that spend the axiom (the
finite-dimensional-law/canonical-path-law interface, strong Markov, return-cycle
constructions, optional sampling, Lévy upward convergence, conditional
expectation, or the general recurrence/Kac equivalence), and each `[A1]` fact
carries the same statement of use.

Two declarations were added in this dispatch because the authored proofs spend
AC-qualified suppliers that the scaffold had not declared:
`ex-stationary-law-of-a-two-state-chain` (doubly-stochastic/finite example;
uniqueness step 2.2 spends the AC-assuming equivalence and uniqueness
corollary) and `cex-invariance-does-not-imply-reversibility` (steps 2.2–3.1
spend the AC-assuming reverse-kernel theorem; the direct detailed-balance
refutation in steps 1.1–2.1 stays choice-free). A full-item scan over
Statement, Facts and proof text found no remaining consumer of an AC-assuming
supplier without the declaration.

The other 14 items are choice-free (matrix algebra, finite simplex Cesàro
construction, half-ℓ1 formula, eventual positivity, detailed balance, the
finite graph walk, the birth–death recursion, the doubly-stochastic example,
the two-path non-ergodic counterexample). The four definitions and the remark
that link to AC-qualified theorems in their prose do not spend them in any
proof step and declare nothing; two counterexamples embed their AC cost
explicitly rather than hiding it behind a general supplier.

## Supplier reconciliation and unfinished-supplier flags

- No supplier is an unfinished in-run draft: every `deps` entry of the 32
  items is either a published library item or an earlier item of this same
  batch, authored and closed before its consumers. The dispatch's
  unfinished-supplier flag therefore does not apply to any consumer, and no
  item decision is escalated on that ground.
- Direct in-run prerequisite pairs to inspect: none (per the dispatch).
- Cross-batch check: no item of this batch depends on an item of another batch
  of this run, and no page `requires` another batch's page; the owned input
  `research/frontier-37-owner-30-batch-1.cross-batch-dependencies.json` is
  correctly `[]`.

## Published concerns

- **No confirmed defect** in any published supplier was found while authoring.
  The published suppliers used here (`def-hitting-return-and-visit-times`,
  `def-accessibility-communication-and-irreducibility`,
  `thm-finite-dimensional-laws-of-a-markov-chain`,
  `thm-renewal-decomposition-at-successive-return-times`,
  `thm-recurrence-and-transience-are-class-properties`,
  `thm-birkhoff-ergodic-theorem`, the LPW/Durrett-backed items) were checked at
  their points of use and their stated hypotheses match the uses.
- **In-batch defect corrected** (not a published item): the drafted
  `thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains`
  originally wrote the two-cycle total-variation distance as `1`; under this
  library's Tv convention (supremum over events; no factor 1/2 in the
  singleton-sum form) the value is `1/2`. Statement and final step were fixed;
  the companion B-page examples use the same convention consistently
  (`1/2` for the two-cycle, `2/3` for the three-cycle).
- **Suspicion to route (not a confirmed defect)**: a published item that states
  a total-variation *number* for a two-point or periodic chain under the
  "half-ℓ1 = 1/2 Σ|·|" convention could carry the same factor slip. A bounded
  scan in this dispatch (`items/*.md` containing "total variation" together
  with "two-cycle"/"alternating"/"periodic") found no published item stating
  such a distance; the scan is not exhaustive and did not inspect the results'
  full texts. Confidence in the suspicion being *unrealised* in the library:
  medium; suggested repair route if an instance is found: re-derive the value
  from the cited definition and note it in the published ledger. The serial
  reconciler owns `research/published-consumer-supplier-ledger.md`; this pair
  did not edit it.

## Open obligations / escalations (owner)

1. **Ledger refresh blocked by another pair's file.**
   `node tools/frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30`
   fails parsing `items/def-modular-specht-form-and-radical-quotient.md`
   (batch 23): the frontmatter contains
   `"…Gram-rank identity for S^lambda/(S^lambda\cap(S^lambda)^perp)…"` inside a
   double-quoted YAML string, an invalid escape `\c` at line 26, column 170.
   The tool stops at the first failure, so completion of the unified ledger
   cannot be confirmed from this dispatch. This pair must not edit that file;
   route to the batch-23 owner / root. No other blocker for this batch is
   evidenced; the batch's own rows (`[]`) are current.
2. **Plan-spec splice.** `research/plan-spec.json` still holds empty item
   lists for both pages of this pair (and 367 planned pages run-wide); Step 4
   must splice the 32 manifest items into the plan rows. `validate-plan`
   otherwise passes.
3. **Strict-contract warnings (5, nonfatal).** Listed above; carried to the
   Step-5/6 record rather than silently suppressed.
4. **No item-level escalation.** All 32 items were recorded `accept`/`repaired`
   at confidence 1 with their examined dependency lists
   (`research/frontier-37-owner-30-step3b-review-<id>.json`), and the final
   Step-3 check reports 0 work rows for this pair. The run-wide final check is
   open only because other pairs are still authoring.

## Handoff

- A page: `library/probability/stationary-markov-chains-and-ergodic-limits.md`
  (22 items, 9 `requires`, status `draft`).
- B page: `library/probability/stationary-markov-chains-and-ergodic-limits-examples.md`
  (10 examples/counterexamples, status `draft`).
- Batch records: `research/frontier-37-owner-30-batch-1.pages.json`,
  `.coverage.json`, `.proof-contracts.json`, `.notes.md`,
  `.cross-batch-dependencies.json` (`[]`).
- Decisions: 32 review receipts as above; all closed at confidence 1.
- This dispatch added no pairs, dropped no promised results, consumed no
  Recorded results, edited no other pair's files, and made no commits; Steps
  5–8 own the independent mathematical audit of these items.
