# Step 3b — pair `roots-and-rational-powers` / `roots-and-rational-powers-examples`

- Run: `frontier-44-special-representation-examples-28`
- Role/label: alpha-high / `step3b-pair-roots-and-rational-powers-545747d957cf4e57`
- Batch: 1 (A page `roots-and-rational-powers`, order 15, published and
  preserved; B page `roots-and-rational-powers-examples`, order 16, authored
  here)
- Date: 2026-10-10

## Owned IDs

A page (22 published items, preserved; audited read-only, no edits):
`def-finite-sum`, `lem-finite-sum-laws`, `def-integer-power`,
`lem-power-laws`, `lem-power-monotone`, `lem-bernoulli-inequality`,
`lem-power-difference-factorisation`, `thm-nth-roots-exist`,
`def-rational-power`, `lem-rational-power-well-defined`,
`lem-rational-power-laws`, `lem-rational-power-monotone`,
`lem-triangle-inequality-finite`, `thm-am-gm`, `thm-weighted-am-gm-rational`,
`thm-young-inequality`, `thm-cauchy-schwarz-finite`, `thm-holder-finite`,
`thm-minkowski-finite`, `fs-negative-has-square-root`,
`fs-rational-power-of-negative-base`, `rem-real-exponents-deferred`.

B page (16 items, all authored in this dispatch):
`cex-bernoulli-needs-x-at-least-minus-one`,
`ex-cauchy-schwarz-lagrange-identity-two-terms`,
`cex-am-gm-needs-nonnegative-terms`,
`ex-five-finite-proofs-of-am-gm-and-equality`,
`ex-odd-roots-of-negative-reals`,
`ex-rational-power-computations-of-rational-bases`,
`ex-two-term-am-gm-and-equality`,
`cex-rational-power-laws-need-positive-base`,
`ex-comparing-rational-powers`, `ex-weighted-am-gm-with-rational-weights`,
`ex-five-algebraic-proofs-of-bernoulli-and-rational-forms`,
`cex-weighted-am-gm-needs-normalized-nonnegative-weights`,
`ex-young-inequality-instances`,
`ex-holder-at-three-halves-conjugate-exponents`,
`ex-minkowski-two-entry-vectors-equality-and-strict`,
`cex-minkowski-fails-for-p-below-one`.

## Inputs read

`CLAUDE.md`; `SCHEMA.md`; the batch-1 manifest, notes, coverage and
cross-batch input; the Step 3a pair review (`sufficient`); the owner authoring
direction (`...-owner-authoring-direction.md`); the owner proof-coverage
repair and the batches-1–3 readiness corrections; all 22 published A item
files in full (statements, facts, proofs) together with the published
suppliers they cite; the tooling conventions in `tools/facts-block.mjs`,
`tools/precheck.mts`, `tools/proof-contract.mjs`, `tools/boundary-audit.mjs`
and `tools/regen-contract-entries.mjs`; sibling work only to confirm shared
conventions (no sibling file edited).

Pre-splice findings rechecked: the owner corrections to the two five-route
examples (declared suppliers, representative wording, Minkowski determinant
grounding, zero-difference cases) are present in the current manifest
strategies and are realised in the authored items; the Step-1 drift verdict
for the A page is `no-drift` and its dependency lists resolve on disk.

## A-page audit (published, preserved)

The 22 A rows are the published, run-preserved items; their files, statements,
proofs and page were not edited. Each was rechecked against its current
manifest row and the suppliers it names (all resolve on an earlier published
page). Their `dependency_level` labels match the repository computation, and
`item-dependency-levels check --run …` reports 0 errors over the run. Item
decisions recorded: `accept`, `--defects '[]'`, one sentence each.

## B-page authoring

Every item was authored from its manifest statement/strategy, one at a time in
ascending dependency level (ties by page order, then item ID). All 16 are
complete with numbered steps, trailing blue tags, QED, facts, and item-specific
boundary contracts. Authoring order and dependency levels:

1. `cex-bernoulli-needs-x-at-least-minus-one` (2): witness x = −4, n = 3, and
   the n = 0, 1 and x = −1, −3 boundary evaluations.
2. `ex-cauchy-schwarz-lagrange-identity-two-terms` (3): local expansion
   identity, equality criterion a0b1 = a1b0, correspondence with the
   proportionality clause of `thm-cauchy-schwarz-finite`, instance
   (1,2), (3,4).
3. `cex-am-gm-needs-nonnegative-terms` (5): witness (−1,−4), systematic
   negative-pair argument, non-existence witness (−1,1), surviving squared
   form for all reals.
4. `ex-five-finite-proofs-of-am-gm-and-equality` (5): five complete routes
   (published Cauchy proof quoted; sum-preserving replacement;
   product-preserving replacement; integer Bernoulli induction; doubling plus
   geometric-mean padding), each with its equality clause.
5. `ex-odd-roots-of-negative-reals` (5): odd sign identity, existence,
   three-case injectivity, explicit solutions for x³ = −8 and x⁵ = −32, and
   the no-symbol-extension caveat.
6. `ex-rational-power-computations-of-rational-bases` (7): four computations
   plus the non-coprime representative 8^{2/6} = 8^{1/3}.
7. `ex-two-term-am-gm-and-equality` (7): two-term inequality, equality case,
   x + x^{-1} ≥ 2.
8. `cex-rational-power-laws-need-positive-base` (7): witness
   ((−3)²)^{1/2} = 3 ≠ −3 = (−3)¹, corrected statement (a²)^{1/2} = |a|.
9. `ex-comparing-rational-powers` (8): 2^{1/3} < 2^{1/2} < 3^{1/3}, with the
   sixth-power device for the third clause.
10. `ex-weighted-am-gm-with-rational-weights` (8): the 8^{2/3}·1^{1/3}
    computation (strict) and the constant-list attainment.
11. `ex-five-algebraic-proofs-of-bernoulli-and-rational-forms` (8): five
    integer routes, the rational-exponent lower/reversed forms with equality
    analysis, the endpoint x = −1, and the quadratic refinement
    (1+x)^r ≥ 1+rx+(r/2)x² for r ≥ 2 with its 2m ≤ r weakening.
12. `cex-weighted-am-gm-needs-normalized-nonnegative-weights` (8): witnesses
    (4,4; 1,1) and (4,1/4; 2,−1).
13. `ex-young-inequality-instances` (9): p = q = 2 with equality clause,
    p = 3, q = 3/2 with its equality instance.
14. `ex-holder-at-three-halves-conjugate-exponents` (10): the all-ones
    equality instance and the strict disjoint-support instance.
15. `cex-minkowski-fails-for-p-below-one` (11): the p = 1/2 witness
    (1,0), (0,1) with 4 > 2 and every expression defined.
16. `ex-minkowski-two-entry-vectors-equality-and-strict` (11): the inequality
    at p = 2, the criterion x0y1 = x1y0 with C ≥ 0, and the equality and
    strict instances.

B page created: `library/real-analysis/roots-and-rational-powers-examples.md`
(draft, 16 example/counterexample entries, dependency-level order, with a
summary paragraph).

## Repairs made while authoring (all local, escalated only where noted)

- Declared published suppliers actually cited but absent from four scaffold
  dependency lists, synced into both item frontmatter and the batch manifest:
  `ex-cauchy-schwarz-lagrange-identity-two-terms` + `lem-of-zero-mult`;
  `cex-am-gm-needs-nonnegative-terms` + `lem-of-add-order`, `lem-of-zero-mult`,
  `def-ordered-field`; `ex-rational-power-computations-of-rational-bases` +
  `def-rationals`, `lem-of-inverse-unique`;
  `ex-weighted-am-gm-with-rational-weights` + `lem-of-q-embeds`. All additions
  are published out-of-run items, so in-run dependency levels are unchanged
  (verified by `item-dependency-levels check --run …`: 0 errors, 861 items).
- Rewrote applied canonical-embedding notation (`\iota(w_k)`, `\iota(m)`) in
  four of my own newly authored items to the direct real-number notation the
  content policy requires; the claims and proofs are unchanged.
- No items were added beyond the scaffold inventory, so no auditor-created
  certification applies; no sibling batch file was edited; the shared
  `plan-spec.json` was not edited (no Step-4 amendment is requested).

## Checks actually run

- `node tools/tsx-run.mjs tools/precheck.mts <16 B item paths>` → 16 checked,
  0 failing (each item also passed individually at authoring time).
- `node tools/proof-layout.mjs <16 B item paths>` → 16 items, 95 steps,
  0 defects (single batched run after the final edits).
- `node tools/rendercheck.mjs <16 B items + B page>` → OK, 17 files;
  also `rendercheck` on all 22 A item files → OK, 22 files.
- `node tools/prosecheck.mjs <16 B items + B page>` → 0 errors, 0 warnings.
- `node tools/pathcheck.mjs real-analysis` → 1 scope checked, 0 errors,
  0 warnings.
- `node tools/depcheck.mjs --items-file <38 ids>` → OK; `fwdcheck --quiet
  --items-file` → OK (only the pre-existing `rem-real-exponents-deferred`
  forward marker); `extcheck --items-file` → 0 recorded-not-proved;
  `depsource --run … --items-file` → 38/38 consumer coverage, 0 unresolved
  (one pre-existing advisory on `rem-real-exponents-deferred`).
- `node tools/manifest-deps.mjs research/…-batch-*.pages.json` (all 50
  manifests) → 861 items, 0 errors.
- `node tools/item-dependency-levels.mjs check --run …` → 861 items,
  0 errors (maximum run level 47).
- `node tools/validate-plan.mjs research/plan-spec.json --run …` → exit 0,
  no item-level cycles, forward references, B-page dependencies or unresolved
  ids; only pre-existing redundant-prereq advisories on unrelated pages.
- `node tools/coverage-checklist.mjs research/…-batch-1.coverage.json
  --require-destination` → 2 pages, 34 harvested results, 0 errors, 1 known
  low-yield advisory on the preserved A page (explained at Step 3a).
- `node tools/source-fetch-check.mjs --coverage …-batch-1.coverage.json` →
  6/6 source(s) resolved and fetch-verified; `source-backing.mjs` with the
  owner liveness file → 11 authored results all still backed.
- `node tools/proof-contract.mjs research/…-batch-1.proof-contracts.json
  --strict` → 38/38 items checked, 0 errors (2 pre-existing
  `shotgun-bracket` warnings on published A items `lem-power-laws` and
  `lem-power-monotone`).
- `node tools/boundary-audit.mjs <batch-1 contract> --fail-on-contradicted
  --fail-on-template` → exit 0; `citation-fidelity.mjs --fail-on-missing-quote`
  → exit 0; `finite-smoke.mjs` → 0 errors; `risk-report.mjs` → routed, no
  errors.
- `node tools/content-policy.mjs research/…-batch-1.pages.json` → 11 errors,
  all on preserved published A items (see Published concerns); all 16 new B
  items and the page pass item mode.
- `node tools/step3-decisions.mjs check --run … --phase final` → 0 open work
  rows on any of the 38 owned IDs (the other 757 open rows at the resumed
  re-check are other pairs' outstanding decisions).
- `node tools/frontier-dependency-ledger.mjs refresh --run …
  --require-reviewed` → refreshed, deduplicated, no batch-1 cross-batch edge.
- Contract file written and regenerated from current item text:
  `research/frontier-44-special-representation-examples-28-batch-1.proof-contracts.json`
  (scope: all 38 batch-1 items; 304 boundary rows; citations and derivations
  regenerated with `tools/regen-contract-entries.mjs` after the last edit).
- Resumed handoff re-verification (same day, every command re-run against
  current disk after the last edit): precheck 16/16 PASS; `proof-layout` 16
  items / 95 steps / 0 defects; rendercheck 17 B files and 22 A files OK;
  prosecheck (38 items + B page) OK; pathcheck 0/0; depcheck and fwdcheck OK;
  extcheck 0 recorded-not-proved; depsource 38/38, 0 unresolved; proof-contract
  `--strict` 38/38, 0 errors (the same 2 warnings); boundary-audit exit 0;
  citation-fidelity exit 0 (one heuristic candidate, recorded below);
  finite-smoke 0 errors; risk-report 0 errors, 38 items routed;
  manifest-deps 861 items / 0 errors; item-dependency-levels 861 items /
  0 errors; validate-plan exit 0; coverage-checklist 0 errors / the 1 known
  warning; source-fetch-check 6/6; source-backing 11/11; content-policy item
  mode 11 errors, all on the preserved A items below and none on the 16 new
  B items or the page; step3-decisions `--phase final` 0 open rows on owned
  IDs with all 38 receipts current (31 accept, 7 repaired); the 22 A files
  and every shared file outside this pair's four B rows are unchanged at
  handoff.

## Published concerns (exact IDs, evidence, confidence, remedy)

Confirmed, not suspicion: item-mode `content-policy.mjs` rejects applied
canonical-embedding notation (`\iota(n)`, `\iota(w_k)`) in 11 **published,
preserved** A items scoped by this batch manifest:
`def-finite-sum`, `lem-finite-sum-laws`, `def-integer-power`,
`lem-power-laws`, `lem-bernoulli-inequality`,
`lem-power-difference-factorisation`, `thm-nth-roots-exist`, `thm-am-gm`,
`thm-weighted-am-gm-rational`, `thm-young-inequality`,
`fs-rational-power-of-negative-base`. Evidence: the content-policy command in
the Checks section prints one `notation-iota-applied` error per item. These
files are bit-preserved published content that the owner direction forbids
reauthoring or downgrading, and my brief forbids editing published content, so
the batch-1 `content-policy-items` gate cannot pass on my side. Remedy (owner
choice): (a) authorise a notation-only published-local repair replacing the
applied `\iota(N)`/`\iota(w_k)` by direct numerals in those 11 files
(mathematics unchanged beyond notation; receipts under the recorded
published-repair policy), or (b) record an explicit exemption for
preserved-published A scope in this run's item-mode policy. The same check is
clean for all 16 newly authored B items and for every other tool in the batch
battery.

## Unfinished in-run suppliers

None. Every supplier named in a consuming proof step is either a published A
item of this pair or a same-page B item authored earlier in this dispatch
(the single same-page edge is
`ex-minkowski-two-entry-vectors-equality-and-strict` →
`ex-cauchy-schwarz-lagrange-identity-two-terms`, completed at level 3 before
its consumer). No decision is left escalated for a missing supplier.

## Open obligations at handoff

1. The published-content notation condition above: owner disposition needed
   before the run-level `content-policy-items` gate can pass for batch 1.
2. Run-level gates whose scope includes un-authored sibling batches
   (`frontier-item-gate` wrappers, merged proof contracts, full
   content-policy) will clear only when all 50 pairs complete; batch-1
   artifacts are complete and pass in isolation, as recorded above.
3. `research/…-batch-1.proof-contracts.json` merges with the other 49 batch
   files at the step-3b merge gate; it is present, in scope and `--strict`
   clean now.

## Step-4 notes

No shared plan or prose amendment is requested. The batch-1 manifest was
edited only inside this pair's four B rows (the declared supplier additions
listed above); every sibling row and all page `requires`/order fields are
untouched, and `validate-plan` remains exit 0.

## Step-5 carry-forward

- `citation-fidelity` heuristic candidate (not a gate failure;
  `--fail-on-missing-quote` passes and the command exits 0):
  `ex-cauchy-schwarz-lagrange-identity-two-terms`, fact [L6] →
  `thm-of-square-roots`. The detector compares the fact line — a restatement
  of the Cauchy–Schwarz squared form — against the square-root theorem's
  `a ≥ 0`, `s ≥ 0` clauses. The trailing clause only points at the published
  theorem's own root-form clause ([[thm-cauchy-schwarz-finite]] states that
  form through the same supplier), no proof step uses the root form, and step
  3.1 consumes only the squared form and its equality clause; judged a
  detector heuristic on the compressed fact line, flagged here for the human
  read in Step 5 rather than repaired. The mention mirrors the owner-corrected
  scaffold strategy for this item, which records that the root form needs
  `thm-of-square-roots` and is not used in the derivation.

## Checkpoint log (per item)

- Levels 2–7, items 1–8 above: authored, each passing precheck,
  proof-layout, rendercheck, strict contract and boundary checks at authoring
  time; dependency additions applied to manifest and frontmatter; item
  decisions recorded (`accept`, or `repaired` with the exact defect types
  `dependency`/`notation`).
- Levels 8–11, items 9–16 above: authored in the listed order; both five-route
  examples were written out in full (all five routes complete, equality
  clauses included) and pass the same checks; item decisions recorded.
- Final pass: all 38 decisions current (`step3-decisions check --phase final`
  shows 0 open rows on owned IDs); batched `proof-layout` and `precheck`
  re-run after the final edit; contract regenerated from final text; ledger
  refreshed; report finalised.
