# frontier-30 · Beta · batch 4 scaffold notes

Run `frontier-30`, batch `4`, one A/B pair, category `functional-analysis`.
Author: Beta. Session date: Friday, September 4, 2026.

Artifacts owned by this batch:
`research/frontier-30-batch-4.pages.json`,
`research/frontier-30-batch-4.coverage.json`,
and this file.

No plan structure, workflow state, published content, or another batch artifact
was edited. `research/plan-spec.json` was already dirty in the worktree before
this dispatch and was not touched.

---

## 1. Controlling design and resulting shape

Design locations opened:

- `research/plan-functional-analysis-track.md:478-523`
- `research/frontier-30-step0-notes.md`
- `research/frontier-30-beta-4.task.md`

The controlling design is the single FA-4 block at
`research/plan-functional-analysis-track.md:478-523`.

Shape after scaffolding:

- `the-analytic-hahn-banach-theorem` (A): **13 items**
- `the-analytic-hahn-banach-theorem-examples` (B): **6 items**

The A page stays well below the `60`-item split ceiling, so no split is
proposed.

The scaffold keeps the design's route intact:

- real sublinear vocabulary first, then the one-step interval lemma, then the
  chain-union lemma, then the real dominated extension theorem;
- the real norm-preserving theorem before the real-part reconstruction lemma and
  the complex norm-preserving theorem;
- norming functionals, dual separation, and norm recovery after the complex
  extension theorem, not before it;
- the explicit "no closure hypothesis is needed" theorem kept as its own item,
  because the design names that boundary and does not want it buried inside the
  general extension theorem; and
- the B page kept on concrete comparison, explicit admissible intervals, Banach
  limits, nonuniqueness, and the already-recorded open choice questions.

## 2. Design/spec drift

The order, page ids, category, and companion page agree between the design and
`research/plan-spec.json`.

The prerequisite list does **not** agree, and I kept the spec exactly as the
dispatch requires:

- the FA-4 design says "Requires: FA-1-FA-3; the published order/Zorn/
  ultrafilter-choice pages for the logical ledger";
- `research/plan-spec.json` and the generated batch manifest keep the single
  page-level prerequisite
  `finite-dimensional-normed-spaces-and-riesz-lemma-examples`.

I recorded that mismatch here and left the page-level `requires` list on the
spec edge. Stage 1's drift machinery owns the disposition, not this batch.

## 3. Local closure decisions

### Local seam 1: a general normed-space dual definition was genuinely missing

The current library already had:

- the published algebraic-dual definition
  `def-algebraic-dual-and-linear-functional`; and
- the concrete `L^p` functional language from MT-16.

What it did **not** have was the general topological dual of a normed space as
the space of bounded linear functionals with the operator norm. Since the design
puts dual-norming and separation on FA-4 itself, I added:

- `def-dual-space-of-a-normed-space`

instead of letting "dual space" float undeclared until FA-7.

### Local seam 2: the chain-union step is promoted to a named lemma

Daners and Teschl both bury the upper-bound part of the Zorn proof inside the
proof of Hahn-Banach itself. This scaffold splits it out as
`lem-union-of-a-chain-of-dominated-extensions`, because later authoring needs
that step as a visible dependency rather than as an unnamed sentence inside the
maximal-extension proof.

### Local seam 3: item 12 is intentionally close to item 6

`thm-hahn-banach-norm-preserving-extension` is the direct extension theorem.
`thm-norm-preserving-extension-from-any-subspace` is not a second mathematical
breakthrough; it is the explicit hypothesis guard the design demanded. I kept it
as a theorem item anyway so later authoring cannot silently strengthen the
hypothesis to "closed subspace" just because some textbook statements do.

### Local seam 4: the choice-strength remark overlaps an existing draft item

The repository already has the draft recorded-not-proved item
`rem-hahn-banach-choice-strength`. I kept the fresh design id
`rem-choice-strength-of-hahn-banach` and recorded the overlap explicitly
instead of silently duplicating it, because FA-4 is the first place where
Hahn-Banach becomes a load-bearing proved-here theorem in the reading order.

### Local seam 5: the B-page open-questions remark does not mint new metatheory

The repository already has the published open-question records:

- `rem-hahn-banach-hamel-basis-open`
- `rem-hahn-banach-discontinuous-additive-open`

Accordingly, `rem-hahn-banach-open-choice-questions` is scaffolded as a local
signpost depending on those existing items, not as a second full citation bundle.

## 4. Source stack actually read

The A page carries the formal coverage harvest. Included rows may land on the A
page or on its B companion.

Recorded harvest sources:

1. Daniel Daners, *Introduction to Functional Analysis*:
   `https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf`
2. Gerald Teschl, *Topics in Real and Functional Analysis*:
   `https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf`
3. Matthew Foreman and Friedrich Wehrung,
   *The Hahn-Banach theorem implies the existence of a non-Lebesgue measurable set*:
   `https://www.researchgate.net/publication/249932950_The_Hahn-Banach_theorem_implies_the_existence_of_a_non-Lebesgue_measurable_set`
4. Janusz Pawlikowski,
   *The Hahn-Banach theorem implies the Banach-Tarski paradox*:
   `https://www.impan.pl/en/publishing-house/journals-and-series/fundamenta-mathematicae/all/138/1/107255/the-hahn-banach-theorem-implies-the-banach-tarski-paradox`

These four batch-local source rows satisfy the scaffold's recorded harvest with:

- two independent full treatments of the theorem itself (Daners and Teschl);
- two paper-level sources for the choice-strength consequences
  (Foreman-Wehrung, Pawlikowski); and
- the existing dependency remarks `rem-halpern-levy-bpi-not-ac` and
  `rem-hahn-banach-choice-strength` carrying the BPI/HB/AC ledger that this
  batch-local remark cites rather than re-harvests.

### URL discipline and recoveries

The design named the official University of Vienna PDF for Teschl. The readable
full text available in this session came from the mirrored PDF recorded in the
coverage file, so I preserved the official Vienna URL as `original_url`
provenance and used the mirror as the reader-facing source.

The Foreman-Wehrung row originally fell back to a readable archived
ResearchGate copy. On Friday, September 4, 2026 the live same-document
ResearchGate page was readable again, so the coverage row now points back to
that live URL and preserves the archived fallback as `original_url`
provenance.

### Why Buhler-Salamon is not in this batch coverage file

The design names Buhler-Salamon as a primary FA-4 source. In this environment I
could not get a readable same-document full text from the design-named ETH
locations, so for Step 1 I replaced that role with Daners plus Teschl as the two
independent theorem treatments and recorded the substitution here instead of
pretending the design's source was directly read.

## 5. What the harvested sources support

- Daners is the cleanest source for the FA-4 internal item graph: the dual-space
  definition, the real and complex analytic theorems, the norming-functional
  corollary, and the explicit theorem that the domain subspace need not be
  closed.
- Teschl independently backs the real and complex extension theorems, the
  norm-preserving corollary, point-separating duality, and the Banach-limit
  problem package. It also exposes three deliberate deferments:
  geometric separation, Schauder-basis applications, and direct-sum duality.
- The existing on-disk dependency remarks `rem-halpern-levy-bpi-not-ac` and
  `rem-hahn-banach-choice-strength` carry the page's cited BPI/HB/AC and
  relative-consistency ledger. This batch does not duplicate those source bundles
  in its own coverage file.
- Foreman-Wehrung's abstract and introduction are the source actually read for
  the claim that Hahn-Banach alone already implies a non-Lebesgue-measurable set
  and even works over ZF without countable choice.
- Pawlikowski's official article landing page is the source actually read for the
  paper-level consequence "HB implies Banach-Tarski".

## 6. Dependency and proof-route choices

### Analytic core

- The page uses the real sublinear formulation first and does not replace it by a
  seminorm-first formulation.
- The one-step inequalities are planned with the quantifier order the design
  singled out: lower endpoints come from `f(y) - p(y - x_0)` and upper endpoints
  from `p(z + x_0) - f(z)`.
- The maximal-extension implementation is Zorn-based, but the page's notes keep
  the sharper BPI upper bound separate so the theorem is not mislabeled as a ZF
  result.

### Duality consequences

- The page adds the missing dual-space definition locally rather than deferring it
  to FA-7, because FA-4 already owns norming functionals and point separation.
- `cor-norm-recovered-from-the-dual-unit-ball` is kept separate from
  `thm-dual-norms-every-vector`; the former packages the universal upper bound
  with the existence theorem instead of leaving the norm-recovery formula implicit.

### Companion-page choices

- The codimension-one interval example and the nonuniqueness counterexample are
  both kept. The first computes the admissible interval; the second isolates the
  phenomenon "extensions need not be unique" as a reusable leaf.
- The Banach-limit pair stays on the B page exactly as the design states. It is a
  worked application of the analytic theorem, not a prerequisite for later A-page
  arguments.

## 7. Known limits

- This scaffold does **not** build a standalone seminorm package on FA-4. The
  gauge/seminorm language is deferred to
  `geometric-hahn-banach-and-convex-separation`.
- This scaffold does **not** absorb Teschl's corollary separating a point from a
  subspace into FA-4. That geometric consequence is deliberately deferred to the
  next page.
- The choice-strength remark still overlaps the older draft item on disk. The
  duplication is explicit here and should be reconciled at authoring time, not
  ignored.

## 8. Run-state note

The repo-root autopilot status still reports `frontier-23` as the live state in
`.autopilot/`, while the `frontier-30` task, scope, and batch artifacts are
present on disk as generated research files. I treated the generated
`frontier-30` batch task as authoritative for this turn and did not touch
`.autopilot/` or any workflow-state file.

## 9. Validator results

Commands run on Friday, September 4, 2026:

- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-4.pages.json`
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/coverage-checklist.mjs research/frontier-30-batch-4.coverage.json --require-destination`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-4.coverage.json`
- `node tools/url-sweep.mjs --coverage research/frontier-30-batch-4.coverage.json --out /tmp/frontier-30-batch-4-url-liveness.json --recover --fail-on-dead`
- `git diff --check -- research/frontier-30-batch-4.pages.json research/frontier-30-batch-4.coverage.json research/frontier-30-batch-4.notes.md`

Results are recorded below after the final pass.

- `content-policy --manifest-only research/frontier-30-batch-4.pages.json`:
  `content-policy: 19 scoped item(s), 0 error(s), 0 warning(s)`
- `content-policy --manifest-only research/frontier-30-batch-*.pages.json`:
  `content-policy: 694 scoped item(s), 0 error(s), 0 warning(s)`
- `validate-plan` on `research/plan-spec.json`:
  passed on the current plan bytes, with only the standing repo-wide
  `redundant-prereq` advisories.
- `coverage-checklist`:
  `coverage-checklist: 1 page(s), 36 harvested result(s), 0 error(s), 0 warning(s)`
- `source-fetch-check`:
  `source-fetch-check: 4/4 source(s) fetch-verified`
- `url-sweep`:
  **transport blocker in this runner.**

  ```text
  url-sweep: 0/4 live; 4 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-30-batch-4-url-liveness.json
  ```

  Every failure was the same local DNS class, not a page-specific 404 or bot wall:
  `curl: (6) Could not resolve host` for `www.maths.usyd.edu.au`,
  `www.uomustansiriyah.edu.iq`, `www.researchgate.net`, and `www.impan.pl`.
  The same four sources were nevertheless reader-openable in the web tool and were
  stamped manually from that verified read. I therefore left the harvested sources
  on disk and recorded the local liveness failure here rather than re-sourcing to a
  different mathematical treatment for a transport problem.
- `git diff --check` on the three owned artifacts:
  clean

## Step-3 fix pass

Reviewed `research/frontier-30-alpha-d-step3-scaffold-review.md` on Friday,
September 4, 2026 in Australia/Sydney local time.

- Finding ids for batch `4`: none recorded.
- Finding: `research/frontier-30-batch-4.notes.md` overstated the recorded
  source set. Disposition: applied. Evidence: the alpha-`d` Step-3 review names
  that notes defect explicitly, the current coverage ledger has four source rows,
  and I re-opened all four recorded source URLs in the web reader on Friday,
  September 4, 2026. Changed scaffold record:
  `research/frontier-30-batch-4.notes.md` now matches the four-row coverage
  ledger, and `research/frontier-30-batch-4.coverage.json` now uses the live
  same-document ResearchGate URL after the archived intermediate URL stopped
  rendering in the web reader.
- Validator follow-up with no recorded alpha finding id: the first spliced
  `validate-plan` rerun failed with `undeclared-prereq` because
  `ex-norming-functionals-in-lp-from-the-measure-duality-page` depends on
  `cor-l-p-norm-recovery-by-unit-l-q-pairings`, whose home page is
  `the-duality-of-lp-and-lq`, but the B-page `requires` list had not declared
  that earlier dependency. Disposition: applied. Evidence: the repaired B-page
  `requires` list now names `the-duality-of-lp-and-lq`, which is earlier in
  plan order at `288.031`, and the follow-up temp-spliced `validate-plan` pass
  below cleared the defect. Changed scaffold record:
  `research/frontier-30-batch-4.pages.json`.

Validator rerun on Friday, September 4, 2026:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-4.coverage.json` -> `coverage-checklist: 1 page(s), 36 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json` -> `content-policy: 694 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json` -> pass with the standing repository-wide `redundant-prereq` advisories, ending in the standard `OK` line for `698` page(s) with item lists.
- `node tools/validate-plan.mjs /tmp/frontier-30-batch-4-spliced-plan.json` -> pass, ending `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 700 page(s) with item lists.`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-4.coverage.json` -> `source-fetch-check: 4/4 source(s) fetch-verified`.
- Changed scaffold record: repaired `research/frontier-30-batch-4.pages.json`.
- Changed scaffold record: repaired `research/frontier-30-batch-4.coverage.json`.
- Changed scaffold record: appended this Step-3 fix-pass receipt in
  `research/frontier-30-batch-4.notes.md`.

## Step-5 authoring

Authoring completed on the current batch-owned content only:

- page files:
  `library/functional-analysis/the-analytic-hahn-banach-theorem.md`,
  `library/functional-analysis/the-analytic-hahn-banach-theorem-examples.md`
- item files:
  `def-sublinear-functional`,
  `lem-hahn-banach-one-step-extension`,
  `lem-union-of-a-chain-of-dominated-extensions`,
  `thm-hahn-banach-dominated-extension`,
  `def-dual-space-of-a-normed-space`,
  `thm-hahn-banach-norm-preserving-extension`,
  `lem-real-part-determines-a-complex-linear-functional`,
  `thm-complex-hahn-banach-norm-preserving-extension`,
  `thm-dual-norms-every-vector`,
  `cor-dual-separates-points`,
  `cor-norm-recovered-from-the-dual-unit-ball`,
  `thm-norm-preserving-extension-from-any-subspace`,
  `rem-choice-strength-of-hahn-banach`,
  `ex-norming-functionals-in-lp-from-the-measure-duality-page`,
  `ex-many-extensions-from-a-codimension-one-subspace`,
  `ex-banach-limit-from-hahn-banach`,
  `lem-banach-limit-properties`,
  `cex-hahn-banach-extension-need-not-be-unique`,
  `rem-hahn-banach-open-choice-questions`
- proof-contract artifact:
  `research/frontier-30-batch-4.proof-contracts.json`

Provenance rationale kept on the final bytes:

- the analytic Hahn-Banach core items and the dual-space definition are
  `literature-derived` from the Daners/Teschl source pair recorded in the batch
  coverage file;
- the page-local scope guard
  `thm-norm-preserving-extension-from-any-subspace`, the local choice-ledger
  remark `rem-choice-strength-of-hahn-banach`, the local open-questions remark
  `rem-hahn-banach-open-choice-questions`, and the concrete interval witness
  `ex-many-extensions-from-a-codimension-one-subspace` are `ai-altered`
  packagings of source-backed material rather than copied source statements;
- every authored page and item remains `status: draft`;
- no `verification.judge` record was created on new in-flight material.

Narrowed or dropped claims during authoring:

- narrowed `lem-union-of-a-chain-of-dominated-extensions` from an arbitrary
  chain to a **nonempty** chain, because the empty-chain union is empty and the
  actual Zorn proof needs the empty-chain upper bound handled separately;
- no planned item was dropped.

Blockers:

- none.

Checks run on the authored bytes:

- `node tools/tsx-run.mjs tools/precheck.mts items/def-sublinear-functional.md items/lem-hahn-banach-one-step-extension.md items/lem-union-of-a-chain-of-dominated-extensions.md items/thm-hahn-banach-dominated-extension.md items/def-dual-space-of-a-normed-space.md items/thm-hahn-banach-norm-preserving-extension.md items/lem-real-part-determines-a-complex-linear-functional.md items/thm-complex-hahn-banach-norm-preserving-extension.md items/thm-dual-norms-every-vector.md items/cor-dual-separates-points.md items/cor-norm-recovered-from-the-dual-unit-ball.md items/thm-norm-preserving-extension-from-any-subspace.md items/rem-choice-strength-of-hahn-banach.md items/ex-norming-functionals-in-lp-from-the-measure-duality-page.md items/ex-many-extensions-from-a-codimension-one-subspace.md items/ex-banach-limit-from-hahn-banach.md items/lem-banach-limit-properties.md items/cex-hahn-banach-extension-need-not-be-unique.md items/rem-hahn-banach-open-choice-questions.md`
  -> `15 checked, 0 failing — all clean`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass, ending with the standard `OK` line for `746` page(s) with item lists
  and only the standing repository-wide `redundant-prereq` advisories
- `node tools/content-policy.mjs research/frontier-30-batch-4.pages.json`
  -> `content-policy: 19 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/regen-contract-entries.mjs research/frontier-30-batch-4.proof-contracts.json lem-hahn-banach-one-step-extension lem-union-of-a-chain-of-dominated-extensions thm-hahn-banach-dominated-extension thm-hahn-banach-norm-preserving-extension lem-real-part-determines-a-complex-linear-functional thm-complex-hahn-banach-norm-preserving-extension thm-dual-norms-every-vector cor-dual-separates-points cor-norm-recovered-from-the-dual-unit-ball thm-norm-preserving-extension-from-any-subspace ex-norming-functionals-in-lp-from-the-measure-duality-page ex-many-extensions-from-a-codimension-one-subspace ex-banach-limit-from-hahn-banach lem-banach-limit-properties cex-hahn-banach-extension-need-not-be-unique`
  -> `research/frontier-30-batch-4.proof-contracts.json: regenerated 15, skipped 0`
- `node tools/proof-contract.mjs research/frontier-30-batch-4.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 15/15 item(s) checked`
