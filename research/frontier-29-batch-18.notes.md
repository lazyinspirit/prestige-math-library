# frontier-29 · Beta · batch-18 notes — `computable-reductions-and-rices-theorem` · `the-cook-levin-theorem`

Run `frontier-29`, batch `18`, two A/B pairs, category `computability-theory`.
Author: Beta. Session date: Wednesday, September 2, 2026.

Artifacts owned by this dispatch:

- `research/frontier-29-batch-18.pages.json`
- `research/frontier-29-batch-18.coverage.json`
- this file

Per the dispatch, I did not edit workflow state, published content, another
batch artifact, or plan structure outside batch `18`.

## 1. Control material read

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated batch
task `research/frontier-29-beta-18.task.md`, the generated batch prompt
`research/frontier-29-dispatch/beta-batch-18.prompt.md`, the seed manifest
`research/frontier-29-batch-18.pages.json`, the run step-0 note
`research/frontier-29-step0-notes.md`, the drift report
`research/frontier-29-alpha-step0-drift.md`, the live scope ledger
`research/frontier-29-scope-ledger.json`, the controlling computability-track
design block in `research/plan-computability-theory-track.md`, the live plan
entry in `research/plan-spec.json`, the published prerequisite page stubs on
disk, and the comparable finished batch artifacts used only for contract shape
checks.

I also re-opened the exact source URLs recorded below in the web reader rather
than treating the design bibliography as proof that the texts had been read:

### For `computable-reductions-and-rices-theorem`

1. H. G. Rice, *Classes of Recursively Enumerable Sets and Their Decision
   Problems*:
   `https://www.scribd.com/document/692967974/S0002-9947-1953-0053041-6`
2. EECS 376 course notes, Part 6 `Computability`:
   `https://eecs376.github.io/notes/computability.html`
3. MIT 6.045J / 18.400J, Lecture 9 `Mapping Reducibility and Rice's Theorem`:
   `https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/7aead2c728dd3d5a737d832811ef97e6_MIT6_045JS11_lec09.pdf`
4. Kevin Kelly, `Many-one Reduction`:
   `https://www.andrew.cmu.edu/user/kk3n/recursionclass/8reduction.html`

### For `the-cook-levin-theorem`

1. MIT 18.404J / 6.840J lecture-notes index:
   `https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/pages/lecture-notes/`
2. MIT 18.404J / 6.840J, Lecture 16 `Cook-Levin Theorem`:
   `https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/8212b19fc5a34f500ca6acf03a3a7d74_MIT18_404f20_lec16.pdf`
3. Stephen A. Cook, *The Complexity of Theorem-Proving Procedures*:
   `https://doi.org/10.1145/800157.805047`

## 2. Controlling design and drift

### `computable-reductions-and-rices-theorem`

The controlling mathematical design is `research/plan-computability-theory-track.md`,
section `TC-13`.

There is no design-vs-spec conflict here:

- the design requires `diagonalization-and-the-halting-problem`
- the seed manifest and live `research/plan-spec.json` require the same page
- `research/frontier-29-alpha-step0-drift.md` already records `VERDICT: no-drift`

I therefore followed the spec without any local prerequisite adjudication.

### `the-cook-levin-theorem`

The controlling mathematical design is the single contiguous `TC-21` block in
`research/plan-computability-theory-track.md`.

Why I treated the two matched locations as one controlling block rather than as
competing amendments:

- line `908` is the A-page heading and item inventory
- line `932` is the B-page heading inside the same `TC-21` block
- there is no separate later completion-track or expansion-track amendment for
  this page on disk, only the A-page section followed immediately by its B-page
  subsection

There is no design-vs-spec conflict here either:

- the design requires `p-np-conp-and-polynomial-reductions`
- the seed manifest and live `research/plan-spec.json` require the same page
- `research/frontier-29-alpha-step0-drift.md` records `VERDICT: no-drift`

## 3. Live-corpus seam and scaffold shape

Unlike some earlier `frontier-29` batches, this batch does **not** need a
local seam-repair item to compensate for an unmaterialized prerequisite page:

- `diagonalization-and-the-halting-problem` is already scaffolded, authored,
  and published on disk
- `p-np-conp-and-polynomial-reductions` is also already scaffolded, authored,
  and published on disk

So the batch can reuse the existing prerequisite item ids directly, rather than
rebuilding missing foundations locally.

Current item census:

- A page `computable-reductions-and-rices-theorem`: `16` items
- B page `computable-reductions-and-rices-theorem-examples`: `3` items
- A page `the-cook-levin-theorem`: `16` items
- B page `the-cook-levin-theorem-examples`: `3` items

No split is needed. Each A page stays far below the 60-item ceiling.

## 4. Route and dependency rationale

### `computable-reductions-and-rices-theorem`

I kept the TC-13 route exactly in the order the design chose:

1. define computable many-one reduction first
2. prove its preorder and transfer properties
3. introduce c.e. hardness/completeness and place `A_TM` as the canonical
   complete recognizable problem
4. introduce Turing reduction only after the many-one route is fixed
5. prove strictness by comparing `A_TM` with its complement
6. shift to extensional/index-set language and prove Rice's theorem
7. stop at the **positive-information direction** of Rice-Shapiro rather than
   silently upgrading the page into a full characterization theorem
8. close with the semantic-versus-syntactic boundary and the design's exact B
   leaves

Important local decisions:

- `prop-the-converse-fails` uses
  `overline(A_TM) <=_T A_TM` but not `overline(A_TM) <=_m A_TM`. This gives a
  clean strictness witness without pulling in later recursion-theorem material.
- `thm-machine-acceptance-is-ce-complete` is phrased in the machine-language
  form the page needs, but its proof route is localized from the generic r.e.
  completeness idea `x -> <R,x>` rather than from a separate future
  recursion-theory page.
- `thm-rice-shapiro-positive-information-direction` is intentionally one-way.
  I did **not** scaffold the converse, the effective finite-function coding, or
  the full Myhill-Shapiro-McNaughton equivalence because the design does not
  ask for them here.

### `the-cook-levin-theorem`

I also kept the TC-21 route intact:

1. local SAT/CNF vocabulary
2. SAT in NP
3. bounded computation tableaux
4. local-window legality and polynomial-size clause families
5. satisfiable iff accepting tableau, then polynomial-time constructibility
6. SAT NP-complete
7. Tseitin/3-SAT as the epilogue that prepares the next classical-reduction
   page

Important local decisions:

- `def-bounded-computation-tableau` stays separate from local windows. The page
  first fixes the global encoding, then localizes it.
- `lem-legal-tableaux-iff-all-local-windows-and-boundaries-are-legal` is its
  own lemma, because the design explicitly wants the computation-history method
  visible rather than hidden inside the final completeness theorem.
- `lem-cook-levin-map-is-polynomial-time` stays distinct from satisfiability.
  The reduction's correctness and its resource bound are separate obligations.
- `def-tseitin-extension-variable`,
  `lem-tseitin-transformation-is-linear-size-and-equisatisfiable`, and
  `thm-three-sat-is-np-complete` are retained exactly as the design requests,
  but they are recorded as canonical scaffold items rather than as directly
  harvested lecture-source theorems because the directly verified accessible
  lecture material I read stops at SAT completeness.

## 5. Conventions and traps recorded for authoring

### TC-13

- Keep machine code, machine behavior, recognized language, and extensional
  property distinct at every step.
- Every many-one reduction is total and membership-preserving in both
  directions.
- `def-turing-reduction` uses an oracle **decider**, not a semidecider.
- `prop-the-converse-fails` must use the recognizability contradiction
  explicitly; do not leave it as a slogan.
- `thm-rices-theorem` applies only to extensional language properties.
- `thm-rice-shapiro-positive-information-direction` should be written as a
  finite positive witness theorem, not as the full converse characterization.

### TC-21

- State every machine, alphabet, tableau dimension, and polynomial time bound
  quantitatively.
- The extended tableau alphabet is constant-size only because the machine is
  fixed before the reduction handles inputs.
- The locality lemma uses 2×3 windows together with boundary clauses; neither
  piece may be dropped.
- The Cook-Levin formula witnesses the existence of **one** accepting branch.
  It does not enumerate all branches.
- The 3-SAT epilogue must use Tseitin-style extension variables, not naive full
  CNF distribution.
- Any clause-count proof must count variables and clauses, not only wave at
  "polynomially many constraints."

## 6. Source support actually harvested

### For `computable-reductions-and-rices-theorem`

This page satisfies the standing source rule:

- independent primary treatment: Rice `1953`
- full modern lecture/course-note treatment with a harvestable section
  structure: EECS 376 and the MIT/CMU note sets
- independent many-one/Rice and Rice-Shapiro modern expositions, both reopened
  and harvested directly

What each source is doing:

- Rice `1953` supplies the primary theorem and the finite-positive-information
  direction in the original class-theoretic language.
- EECS 376 supplies the machine-language semantic-property formulation and a
  clean witness-machine proof template.
- MIT 6.045 lecture 9 supplies the many-one reduction definition, the standard
  transfer theorems, and the semantic-versus-syntactic examples.
- Kelly's notes supply the preorder, preservation, Rice, and the
  Rice-Shapiro-style finite evidence route in a second independent exposition.

### For `the-cook-levin-theorem`

This page also satisfies the standing source rule, but more tightly:

- independent primary treatment: Cook `1971`
- full lecture-note set with a harvestable table of contents: MIT 18.404J
  lecture notes
- directly verified detailed proof route for the tableau construction: MIT
  Lecture 16

What each source is doing:

- the MIT lecture-note index provides the note-set table of contents and fixes
  exactly where SAT and Cook-Levin sit in the course structure
- MIT Lecture 16 supplies the tableau decomposition into cell/start/move/accept
  constraints and the SAT-completeness conclusion
- Cook `1971` supplies the primary historical completeness statement and the
  original polynomial-reducibility framing

What is **not** directly source-harvested here:

- the Tseitin/3-SAT epilogue is standard and explicitly required by the design,
  but the directly reopened accessible lecture material I verified does not
  spell it out over the exact pages I read, so those items are recorded as
  canonical scaffold items and flagged below as a step-5 care point

## 7. Known limits and step-5 risks

- `thm-machine-acceptance-is-ce-complete` is straightforward, but the authoring
  pass must actually write the universal reduction `x -> <R,x>` and not treat
  "c.e.-complete" as a black box slogan.
- `thm-rice-shapiro-positive-information-direction` is intentionally weaker
  than the full Rice-Shapiro theorem. Step 5 must preserve that exact scope.
- `prop-the-converse-fails` needs the complement-recognizability contradiction
  spelled out cleanly, because it is the only place where the page proves a
  genuine separation between reduction notions.
- `lem-cook-levin-map-is-polynomial-time` is the delicate quantitative step on
  the Cook-Levin page. The authoring pass needs real counts for variables,
  windows, and clause families.
- `def-tseitin-extension-variable`,
  `lem-tseitin-transformation-is-linear-size-and-equisatisfiable`, and
  `thm-three-sat-is-np-complete` should not be written as if the primary source
  already proved them in the exact page form used here. They are standard local
  continuations added because TC-21 explicitly owns the 3-SAT handoff to TC-22.
- `fs-naive-distribution-to-cnf-is-always-polynomial` needs an explicit
  exponential family in step 5, not only a warning sentence.

## 8. Validation checklist

Commands run or prepared for this scaffold:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-29-batch-18.coverage.json
node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-18.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-29-batch-18.pages.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/validate-plan.mjs /tmp/frontier-29-batch-18-spliced-plan.json
git diff --check -- research/frontier-29-batch-18.pages.json research/frontier-29-batch-18.coverage.json research/frontier-29-batch-18.notes.md
```

The temporary spliced-plan check is needed because the live `research/plan-spec.json`
still carries this batch's two pages as page-level stubs with empty item lists.

## 9. Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-29-batch-18.coverage.json`
  passed on Wednesday, September 2, 2026:
  `2` pages, `70` harvested results, `0` errors, `0` warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-18.coverage.json`
  passed on Wednesday, September 2, 2026:
  `7/7` sources fetch-verified.
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-18.pages.json`
  passed on Wednesday, September 2, 2026:
  `38` scoped items, `0` errors, `0` warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Wednesday, September 2, 2026, with only the repository's
  standing out-of-batch `redundant-prereq` warnings.
- `node tools/validate-plan.mjs /tmp/frontier-29-batch-18-spliced-plan.json`
  exited `0` on Wednesday, September 2, 2026. The batch manifest validates
  with no unresolved ids, no item-level cycles, no forward references, no
  B-page dependency violations, and no over-cap failure.
- `git diff --check -- research/frontier-29-batch-18.pages.json research/frontier-29-batch-18.coverage.json research/frontier-29-batch-18.notes.md`
  passed.

## Step-3 fix pass

- `G18-1`
  disposition: already correct on current Wednesday, September 2, 2026 bytes.
  evidence: `research/frontier-29-alpha-g-step3-scaffold-review.md` records the
  finding as repaired in coverage; `research/frontier-29-batch-18.coverage.json`
  now contains the Stephen A. Cook `1971` University of Toronto PDF source row
  with the exact locator over printed pp. `151`-`154`, item-bearing contents
  for `thm-cook-levin-sat-is-np-complete`, and a `fetch_verified` stamp. I
  also re-opened the Cook PDF, the MIT 18.404J lecture-note index, and MIT
  Lecture 16 in the web reader on Wednesday, September 2, 2026 and confirmed
  that the recorded source headings and page ranges are live.
  changed scaffold record: none in this pass; no further batch-18 scaffold edit
  was needed because the coverage repair is already present on disk.
- validator receipt: `node tools/coverage-checklist.mjs --require-destination research/frontier-29-batch-18.coverage.json`
  passed on Wednesday, September 2, 2026 with `2` page(s), `72` harvested
  result(s), `0` error(s), and `0` warning(s).
- validator receipt: `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`
  passed on Wednesday, September 2, 2026 with `753` scoped item(s), `0`
  error(s), and `0` warning(s).
- validator receipt: `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Wednesday, September 2, 2026 and ended `OK`; only the
  repository's standing out-of-batch `redundant-prereq` notices were reported.
- validator receipt: `git diff --check -- research/frontier-29-batch-18.notes.md`
  passed.

## Step-5 authoring

Authored ids and page files:

- `computable-reductions-and-rices-theorem`: `def-computable-many-one-reduction`, `lem-many-one-reducibility-is-a-preorder`, `thm-many-one-reductions-transfer-decidability-and-recognizability`, `def-ce-hardness-and-completeness`, `thm-machine-acceptance-is-ce-complete`, `def-turing-reduction`, `lem-many-one-implies-turing-reduction`, `prop-the-converse-fails`, `def-index-set-and-extensional-machine-property`, `lem-rice-witness-machine-construction`, `thm-rices-theorem`, `cor-standard-semantic-machine-properties-are-undecidable`, `thm-rice-shapiro-positive-information-direction`, `prop-syntactic-properties-lie-outside-rices-theorem`, `fs-reductions-may-reverse-yes-and-no`, `fs-rices-theorem-applies-to-state-count`, and [computable-reductions-and-rices-theorem.md](/home/lazyinspirit/Projects/prestige-math-library/library/computability-theory/computable-reductions-and-rices-theorem.md).
- `computable-reductions-and-rices-theorem-examples`: `ex-many-one-reductions-transfer-decidability-and-recognizability`, `ex-syntactic-properties-lie-outside-rices-theorem`, `cex-reductions-may-reverse-yes-and-no`, and [computable-reductions-and-rices-theorem-examples.md](/home/lazyinspirit/Projects/prestige-math-library/library/computability-theory/computable-reductions-and-rices-theorem-examples.md).
- `the-cook-levin-theorem`: `def-boolean-formula-cnf-and-sat`, `prop-sat-is-in-np`, `def-bounded-computation-tableau`, `lem-tableau-cell-alphabet-is-constant`, `def-local-tableau-window`, `lem-legal-tableaux-iff-all-local-windows-and-boundaries-are-legal`, `lem-exactly-one-symbol-constraints-have-polynomial-size`, `lem-start-accept-and-transition-constraints-have-polynomial-size`, `lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs`, `lem-cook-levin-map-is-polynomial-time`, `thm-cook-levin-sat-is-np-complete`, `def-tseitin-extension-variable`, `lem-tseitin-transformation-is-linear-size-and-equisatisfiable`, `thm-three-sat-is-np-complete`, `fs-cook-levin-enumerates-all-branches`, `fs-naive-distribution-to-cnf-is-always-polynomial`, and [the-cook-levin-theorem.md](/home/lazyinspirit/Projects/prestige-math-library/library/computability-theory/the-cook-levin-theorem.md).
- `the-cook-levin-theorem-examples`: `ex-tableau-cell-alphabet-is-constant`, `ex-three-sat-is-np-complete`, `cex-cook-levin-enumerates-all-branches`, and [the-cook-levin-theorem-examples.md](/home/lazyinspirit/Projects/prestige-math-library/library/computability-theory/the-cook-levin-theorem-examples.md).
- Proof-contract artifact: [frontier-29-batch-18.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-29-batch-18.proof-contracts.json).

Provenance rationale kept on disk:

- Standard page-route definitions and named theorems stayed `literature-derived` when the authored claim matched the harvested sources without widening them.
- Local pedagogical restatements needed for this batch only, such as the machine-language Turing reduction definition, the witness-machine phrasing, and the Tseitin/3-SAT handoff packaging, were tagged `ai-altered` rather than overstating them as verbatim source lifts.
- Every authored page and item remains `status: draft`, every definition carries `verification.precheck: n/a`, every proof-bearing item carries `verification.precheck: pass`, and no new item records a stale `verification.judge`.

Narrowed or dropped claims:

- None. The Rice-Shapiro item stayed exactly at the positive-information direction, and the Cook-Levin epilogue kept the designed Tseitin plus 3-SAT handoff without expanding to extra SAT variants.

Blockers:

- None.

Validator receipts for authored material:

- `node tools/tsx-run.mjs tools/precheck.mts ...batch-18 proof-bearing items...` passed after adopting the canonical numbering repairs first suggested by precheck and after removing invalid proof-tag tokens from the two biconditional lemmas.
- `node tools/tsx-run.mjs tools/rendercheck.mjs ...batch-18 authored files...` passed after collapsing the local-window display formula onto one source line.
- `node tools/proof-contract.mjs research/frontier-29-batch-18.proof-contracts.json --strict` passed with `0` errors and `0` warnings after regenerating the single corrected citation-uses row for `fs-naive-distribution-to-cnf-is-always-polynomial`.
- `node tools/content-policy.mjs research/frontier-29-batch-18.pages.json` passed with `38` scoped items, `0` errors, and `0` warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` passed; the output also repeated the repository's standing out-of-batch `redundant-prereq` notices, but no batch-18 failure was reported.
