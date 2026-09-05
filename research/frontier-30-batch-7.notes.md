# frontier-30 · Beta · batch-7 notes — `partial-differential-equations-and-characteristics`

Run `frontier-30`, batch `7`, one A/B pair, category `pde`.
Author: Beta. Session date: Friday, September 4, 2026.

Artifacts owned by this dispatch:

- `research/frontier-30-batch-7.pages.json`
- `research/frontier-30-batch-7.coverage.json`
- this file

Per the dispatch, I did not edit workflow state, published content, another
batch artifact, or plan structure outside batch `7`.

## 1. Control material and live run context

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated batch
prompt `research/frontier-30-dispatch/beta-batch-7.prompt.md`, the seed
manifest `research/frontier-30-batch-7.pages.json`, the run step-0 note
`research/frontier-30-step0-notes.md`, the run drift report
`research/frontier-30-alpha-step0-drift.md`, the drift evidence entry for this
page in `research/frontier-30-drift-evidence.json`, the controlling PDE-track
block in `research/plan-pde-track.md`, and the live plan entry in
`research/plan-spec.json`.

Per `AGENTS.md`, I also checked the live controller from disk rather than
trusting historical resume prose:

- `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`
  reported the live controller as **run `frontier-23` at stage `5-author`**
  with `author-batch-7` in flight.
- The direct `node --import tsx ...` entrypoint failed in this checkout with
  `ERR_MODULE_NOT_FOUND` for package `tsx`, so I used the repository wrapper
  and recorded the direct-command failure rather than treating it as run state.

That context was recorded only for continuity. The authorized scope remained
the frontier-30 batch-7 artifacts named above.

## 2. Design control and drift

### Controlling design

The controlling mathematical design is `research/plan-pde-track.md`, section
`PDE-1`, beginning at line `496`. I treated that section as normative on:

- the page remit: PDE vocabulary, principal symbols, second-order
  classification, and linear transport
- the ordered item route
- the explicit proof traps, especially the warning that canonical forms are
  only constant-coefficient linear-algebra statements here

### Design-vs-spec drift

There is a real prerequisite disagreement, and I recorded it instead of
adjudicating it locally:

- the design says this page requires `the-total-derivative`,
  `mixed-partials-taylor-and-extrema`,
  `inverse-and-implicit-function-theorems`, the published smooth-flow ODE
  items, and finite-dimensional symmetric spectral theory
- the live `research/plan-spec.json` entry and the seed manifest instead give
  only `itos-formula-and-brownian-martingales-examples`,
  `picard-lindelof-and-first-order-odes`, and
  `the-spectral-theorem-and-singular-value-decomposition`

The page order does **not** drift: both design and spec place the A page at
`288.141`.

Per the dispatch, I followed the spec and did not rewrite the page-level
`requires`.

## 3. Local seam repair and scaffold shape

The design expects published smooth-flow machinery that is not named in the
spec closure. I did not import undeclared differential-geometry pages into this
batch. Instead I repaired the exact missing seam locally and minimally:

- added
  `lem-transport-characteristics-depend-c-one-on-initial-position`

Why this one extra lemma is necessary:

- item `thm-local-linear-transport-cauchy-problem` needs the characteristic
  parameter map to be `C^1` before the inverse function theorem can be applied
- that regularity is normally supplied by the design's cited smooth-flow layer
- the spec does not declare that layer in the page closure, so a direct
  dependency on those differential-geometry items would make the batch fail
  `validate-plan` with `undeclared-prereq`

The final scaffold now has:

- A page `partial-differential-equations-and-characteristics`: `21` items
- B page `partial-differential-equations-and-characteristics-examples`:
  `8` items

No split is needed; the A page stays far below the 60-item ceiling.

## 4. Route and dependency rationale

I kept the design's four-layer route:

1. PDE vocabulary, principal part, principal symbol, and characteristic
   covectors
2. second-order scalar classification, invariance, and constant-coefficient
   canonical forms
3. linear transport along characteristics
4. noncharacteristic local Cauchy data and leaf examples

Important route decisions:

- I kept the design's distinction between the invariant principal-symbol
  language and the more concrete two-variable discriminant language.
- `thm-two-variable-constant-coefficient-canonical-principal-forms` stays a
  linear-algebra theorem only. It does **not** claim a variable-coefficient
  local canonical coordinate theorem.
- The one added seam item appears only where it is genuinely needed: between
  the chain-rule transport lemma and the local Cauchy theorem.
- I did not pull any semilinear, quasilinear, Burgers, or Charpit machinery
  onto PDE-1. Those results remain deferred to PDE-2 exactly as the design
  intends.

## 5. Conventions and traps recorded for authoring

- The principal symbol item keeps the design's `c-one` id, but the intended
  statement is the standard one: for an order-`m` operator the transformed
  principal symbol depends only on the first derivative of the smooth
  coordinate change, while higher derivatives of the coordinate map appear only
  in lower-order terms.
- Characteristic geometry is introduced first via covectors and hypersurfaces,
  not first via curves.
- The elliptic/parabolic/hyperbolic trichotomy is pointwise and scalar
  second-order. Mixed type, higher order, systems, and fully nonlinear
  equations are explicitly fenced off.
- No B-page item is a dependency target.

## 6. Sources actually read and URL handling

This batch uses three independent sources on current bytes:

1. `https://www.mat.univie.ac.at/~gerald/ftp/book-pde/`
   Gerald Teschl, *Partial Differential Equations: From Classical to Modern*,
   author landing page and live table of contents.
2. `https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf`
   Victor Ivrii, *Partial Differential Equations*.
3. `https://www.kth.se/social/files/560a55b6f276543ece51692f/Lectures_Method_of_Characteristics.pdf`
   John Andersson, *First Order PDE: The Method of Characteristics*.

### Teschl recovery

The design names Teschl's direct author PDF. I fetch-checked that exact URL in
the web reader on Friday, September 4, 2026:

- `https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf`
- result: `404 Not Found`

Per the dispatch's URL discipline, I tried same-document recovery first and
kept:

- the live author landing page
  `https://www.mat.univie.ac.at/~gerald/ftp/book-pde/`

That page still carries the abstract and full table of contents, but not the
withdrawn chapter text. I therefore used it only as same-document route
provenance and did **not** pretend to have read unavailable manuscript pages.
The substantive backing for the batch's mathematical claims is Ivrii plus KTH.

### Why Evans is not a harvested source row here

The PDE-track design uses Evans as a standard cross-check, but the batch brief
requires fetch-verified sources that were actually opened. In this sandboxed
dispatch I could honestly re-open Ivrii and KTH in full, and I could re-open
Teschl's live author page after the PDF failed. I therefore backed the page
with those sources instead of citing Evans as if a publisher-only listing were
the same as reading the text.

## 7. Known limits and step-5 risks

- The one local seam-repair lemma is mathematically standard but is still a
  real divergence from the design's assumption that the smooth-flow layer is
  already imported. Step 5 should keep that explanation visible.
- The coordinate-change lemma for principal symbols is a proof-writing trap:
  the statement only depends on the first derivative of the coordinate map, but
  the proof still has to expand enough repeated derivatives to show where the
  lower-order terms come from.
- `thm-local-linear-transport-cauchy-problem` is the main authoring bottleneck.
  The determinant check at the base point and the local inverse map should stay
  explicit; that argument should not be compressed into a black-box slogan.
- `cex-threefold-classification-is-not-global` intentionally combines a
  source-backed mixed-type operator with a generated fourth-order witness. The
  authoring pass should state that fourth-order witness concretely.

## 8. Validation checklist

Commands run or prepared for this scaffold:

```bash
node tools/coverage-checklist.mjs research/frontier-30-batch-7.coverage.json --require-destination
node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json
node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-7.coverage.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/validate-plan.mjs /tmp/frontier-30-batch-7-spliced-plan.json
git diff --check -- research/frontier-30-batch-7.pages.json research/frontier-30-batch-7.coverage.json research/frontier-30-batch-7.notes.md
```

The temporary spliced-plan check is needed because the live `plan-spec.json`
still carries this frontier-30 batch as page stubs with empty `items` arrays.

## 9. Validation results

- `node tools/coverage-checklist.mjs research/frontier-30-batch-7.coverage.json --require-destination`
  passed on Friday, September 4, 2026:
  `coverage-checklist: 1 page(s), 51 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
  passed on Friday, September 4, 2026:
  `content-policy: 243 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-7.coverage.json`
  passed on Friday, September 4, 2026:
  `source-fetch-check: 3/3 source(s) fetch-verified`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Friday, September 4, 2026, with only the repository's standing
  out-of-batch `redundant-prereq` advisories.
- `node tools/validate-plan.mjs /tmp/frontier-30-batch-7-spliced-plan.json`
  exited `0` on Friday, September 4, 2026. With the batch scaffold spliced in,
  the plan validated with no unresolved ids, no undeclared prerequisites, no
  forward references, no B-page dependency violations, and no size failure.
- `git diff --check -- research/frontier-30-batch-7.pages.json research/frontier-30-batch-7.coverage.json research/frontier-30-batch-7.notes.md`
  passed.

## Step-3 fix pass

The stable batch-7 finding ids summarized in
`research/frontier-30-alpha-d-step3-scaffold-review.md` are the seven batch-7
`decline_id` rows in `research/frontier-30-alpha-d-scope-decisions.json`,
which the review marks current. I re-checked those rows against the current
batch-7 manifest, coverage ledger, PDE-1 design block, and validator state on
Saturday, September 5, 2026 before deciding whether any local scaffold repair
was still required.

No batch-7 manifest or coverage edit was required on Saturday, September 5,
2026. Every stable finding still stands on current bytes, and the review's
unnumbered Teschl-provenance repair is already present in
`research/frontier-30-batch-7.coverage.json`, so the only changed scaffold
record in this fix pass is this notes receipt.

- `4389123312af7336a076fb99d9ac3f6afd1cd95ecd0d96ac135daf5d9a118ab0` — disposition: `stands`. Evidence: Teschl heading `2. Semilinear equations` is still deferred in `research/frontier-30-batch-7.coverage.json` to `quasilinear-characteristics-and-cauchy-kovalevskaya`, and PDE-2 at order `288.143` still owns semilinear first-order characteristic theory. Changed scaffold record: none.
- `5d55c3da363a2b4b40a00213080b9532cac17454c075cc61c2c092140b6c6e53` — disposition: `stands`. Evidence: Teschl heading `3. Quasilinear equations` is still deferred to `quasilinear-characteristics-and-cauchy-kovalevskaya`, matching the PDE-2 design route for quasilinear characteristics, crossing, and Burgers-type breakdown. Changed scaffold record: none.
- `88f589cd05bf9fab5ed4823ae3699fb79679df1d9f924dbbfd481d46705c2760` — disposition: `stands`. Evidence: Teschl heading `1. First order systems` remains deferred to `quasilinear-characteristics-and-cauchy-kovalevskaya`, and the PDE-1 scaffold still stops before the analytic first-order Cauchy theory recorded on PDE-2. Changed scaffold record: none.
- `a4aab30957c9513cff847229e37f8347b18df2b4bc167023abe6bd1d911f4057` — disposition: `stands`. Evidence: Teschl heading `4. Fully nonlinear equations` is still deferred to `quasilinear-characteristics-and-cauchy-kovalevskaya`, which remains the immediate later owner of the fully nonlinear/Charpit branch. Changed scaffold record: none.
- `b0227e1c107a75e87299bca872da124a0a940981819deecc089dbf636f922d33` — disposition: `stands`. Evidence: Teschl heading `2. Second order equations` remains deferred to `quasilinear-characteristics-and-cauchy-kovalevskaya`, where PDE-2 still owns the Cauchy-Kovalevskaya boundary for the analytic second-order theorem. Changed scaffold record: none.
- `ce4d7b5601c2bc0e40c20c80ae253af7057d2cdf699d300391f97c65d67b7b52` — disposition: `stands`. Evidence: Teschl heading `2. The Cauchy-Kovalevskaya theorem` is still deferred to `quasilinear-characteristics-and-cauchy-kovalevskaya`, and PDE-2 items `16-17` remain the exact recorded-not-proved owner of that statement and proof boundary. Changed scaffold record: none.
- `e83e2a93d4144c7bee33b2002ee6a4e72963db63965d4df2048ac7a39a353562` — disposition: `stands`. Evidence: Ivrii heading `2.2.2 Multidimensional non-linear equations (optional)` is still deferred in `research/frontier-30-batch-7.coverage.json` to `quasilinear-characteristics-and-cauchy-kovalevskaya`, which remains the next-page owner of the Lagrange-Charpit continuation. Changed scaffold record: none.
- Review local repair without finding id — disposition: already applied before this fix pass. Evidence: the Teschl landing-page rows `Part 1: Classical Partial Differential Equations`, `1. First order PDE`, `1. The method of characteristics`, and `5. Classification and canonical forms` are all `inline` route provenance in `research/frontier-30-batch-7.coverage.json`; none remains mislabeled as `included` theorem backing. Changed scaffold record: none.

Validator rerun on Saturday, September 5, 2026:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-7.coverage.json` -> `coverage-checklist: 1 page(s), 51 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json` -> `content-policy: 694 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-7.coverage.json` -> `source-fetch-check: 3/3 source(s) fetch-verified`.
- `node tools/validate-plan.mjs research/plan-spec.json` -> pass with the standing repository-wide `redundant-prereq` advisories, ending `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 698 page(s) with item lists.`
- After splicing `research/frontier-30-batch-7.pages.json` into `research/plan-spec.json`, `node tools/validate-plan.mjs /tmp/frontier-30-batch-7-spliced-plan.json` -> pass, ending `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 700 page(s) with item lists.`

## Step-5 authoring

Authoring completed on Friday, September 4, 2026 for the owned draft outputs:

- pages: `partial-differential-equations-and-characteristics`, `partial-differential-equations-and-characteristics-examples`
- proof-contract artifact: `research/frontier-30-batch-7.proof-contracts.json`

Authored item ids:

- A page: `def-partial-differential-operator-order-and-solution`, `def-linear-semilinear-quasilinear-and-fully-nonlinear-pde`, `def-principal-part-and-principal-symbol-of-a-scalar-pde`, `lem-principal-symbol-under-a-c-one-coordinate-change`, `def-characteristic-covector-hypersurface-and-noncharacteristic-data`, `lem-characteristic-hypersurface-is-independent-of-defining-function`, `def-elliptic-hyperbolic-and-parabolic-principal-symbols`, `thm-symmetric-principal-part-has-a-signature-normal-form`, `def-two-variable-second-order-discriminant`, `thm-two-variable-type-and-characteristic-directions-are-coordinate-invariant`, `thm-two-variable-constant-coefficient-canonical-principal-forms`, `rem-limits-of-the-elliptic-parabolic-hyperbolic-trichotomy`, `def-linear-transport-equation-and-its-characteristic-flow`, `lem-transport-equation-along-a-characteristic`, `lem-transport-characteristics-depend-c-one-on-initial-position`, `thm-homogeneous-linear-transport-by-the-flow`, `thm-inhomogeneous-linear-transport-formula`, `def-noncharacteristic-first-order-cauchy-surface`, `thm-local-linear-transport-cauchy-problem`, `cor-support-propagates-along-transport-characteristics`, `rem-characteristics-are-covectors-before-they-are-curves`
- B page: `ex-constant-velocity-transport`, `ex-transport-with-growth-and-source`, `ex-radial-transport-flow`, `cex-characteristic-cauchy-data-may-be-nonunique-or-incompatible`, `ex-classification-of-laplace-heat-and-wave-equations`, `ex-canonical-coordinates-for-a-hyperbolic-equation`, `ex-tricomi-equation-changes-type`, `cex-threefold-classification-is-not-global`

Provenance rationale kept truthful on disk:

- definitions, remarks, and the standard principal-symbol, classification, and transport statements are tagged `literature-derived` at the statement level, with locally written proofs tagged `ai-generated`
- `lem-transport-characteristics-depend-c-one-on-initial-position` is tagged `statement: ai-altered` because this batch had to make the missing smooth-flow seam explicit inside PDE-1 rather than importing the unpublished design assumption
- `cor-support-propagates-along-transport-characteristics` and `cex-threefold-classification-is-not-global` are tagged `statement: ai-altered` because the exact local packaging is a synthesized corollary/counterexample from the page's sourced route
- every authored page and item remains `status: draft`; no `verification.judge` block was written

Narrowed or guarded claims:

- `thm-homogeneous-linear-transport-by-the-flow` and `thm-inhomogeneous-linear-transport-formula` were stated only on regions where the backward characteristic through each point is defined in the needed time range
- `thm-local-linear-transport-cauchy-problem` stays explicitly local and `C^1`; it does not claim a global flow-box or any semilinear/quasilinear continuation
- no planned batch-7 item was dropped

Canonical precheck repair actually applied:

- the initial focused precheck reported `untagged-steps` on all 19 proof-bearing items because the stored proof rows used wrapped prose/display formatting rather than the checker's canonical one-line tagged step form
- I rewrote every numbered proof/verification/counterexample row so each stored step is a single physical line ending with its justification bracket, then reran precheck before generating the final contract derivations
- I also added `## Remark` to `rem-limits-of-the-elliptic-parabolic-hyperbolic-trichotomy` so the proof-contract generator could quote that cited remark section exactly
- after the first regeneration pass, I removed two unused fact rows from `lem-transport-characteristics-depend-c-one-on-initial-position` and `thm-inhomogeneous-linear-transport-formula` so the contract matched the proof steps actually citing facts

Checks run on Friday, September 4, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts <all 19 proof-bearing batch-7 items>` -> `19 checked, 0 failing — all clean`
- `node tools/proof-contract.mjs research/frontier-30-batch-7.proof-contracts.json --strict` -> `proof-contract: 0 error(s), 0 warning(s), 19/19 item(s) checked`
- `node tools/content-policy.mjs research/frontier-30-batch-7.pages.json` -> `content-policy: 29 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json` -> pass with the repository's standing out-of-batch `redundant-prereq` advisories only, ending `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 746 page(s) with item lists.`
- `git diff --check -- items library/pde research/frontier-30-batch-7.proof-contracts.json research/frontier-30-batch-7.notes.md` -> pass

Blockers:

- none inside batch `7`
- I reopened all three recorded source URLs in the web reader on Saturday, September 5, 2026: Teschl's live landing page, Ivrii's 415-page PDF, and Andersson's 23-page PDF.
- Changed scaffold record: no change to `research/frontier-30-batch-7.pages.json`.
- Changed scaffold record: no change to `research/frontier-30-batch-7.coverage.json`.
- Changed scaffold record: appended this Step-3 fix-pass receipt in `research/frontier-30-batch-7.notes.md`.
