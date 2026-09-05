# frontier-30 · Beta · batch-17 notes — `artin-induction-and-rational-characters`

Run `frontier-30`, batch `17`, one A/B pair, category `representation-theory`.
Author: Beta. Session date: Friday, September 4, 2026 AEST.

Artifacts owned by this dispatch:

- `research/frontier-30-batch-17.pages.json`
- `research/frontier-30-batch-17.coverage.json`
- this file

No plan structure, workflow state, published content, or another batch artifact
was edited.

## 1. Outcome

The pair is now scaffolded with:

- A page `artin-induction-and-rational-characters`: **9 items**
- B page `artin-induction-and-rational-characters-examples`: **4 items**

No split is needed. The A page is far below the hard `60`-item ceiling.

The scaffold follows the RG-1 design literally where that design made real
choices:

1. the page opens by separating characters realizable over `Q` from merely
   `Q`-valued class functions
2. the cyclic induction subgroup and its ideal property are isolated before
   Artin induction itself
3. the Möbius arithmetic is localized in one lemma on generator-indicator class
   functions, then consumed in the permutation relation
4. fixed-space detection, rank, and local integrality remain on the A page as
   Artin consequences, exactly matching RG-1/H3
5. the Q8 example stays on the B page as the convention-protection leaf, not as
   an A-page diversion into Schur-index theory

No forward references or external fallbacks are planned.

## 2. Files Opened And Live Run Context

I read:

- `AGENTS.md`
- `CLAUDE.md`
- `README.md`
- `SCHEMA.md`
- `research/frontier-30-beta-batch.task.md`
- `research/frontier-30-beta-17.task.md`
- `research/frontier-30-dispatch/beta-batch-17.prompt.md`
- `research/frontier-30-batch-17.pages.json`
- `research/frontier-30-step0-notes.md`
- `research/plan-spec.json`
- `research/plan-representation-theory-groups-track.md`
- the published dependency items actually reused from the character and
  induction pages

Per `AGENTS.md`, I also checked live controller state from disk:

- `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`
  reports an unrelated live run `frontier-23` at stage `5-author`

That is context to record, not something this batch is allowed to repair.

## 3. Design Control And Recorded Drift

### Design-vs-spec prerequisite drift

There is a real prerequisite mismatch:

- the RG-1 design block says the page requires the four abstract-algebra
  representation pages
- the live spec, the generated task, and the batch manifest add
  `the-weyl-kac-character-formula-examples`

Per the dispatch, I did not settle that conflict locally. I kept the spec edge
and recorded the disagreement here for the run-level drift stage.

### Source-title and source-contents drift on the Kramár note

The live URL that matches the design's author/source pointer is:

- `https://www.math.toronto.edu/murnaghan/courses/mat445/artinbrauer.pdf`

Its actual title is `Artin's and Brauer's Theorems on Induced Characters`, not
the shorter design paraphrase `Artin and Brauer Induction Theorems`. That is a
benign title mismatch.

The non-benign part is content scope:

- the live Kramár note really does back the Artin-induction proof route in §§1-2
- it does **not** contain the S3 or Q8 worked examples that the RG crosswalk at
  `research/plan-representation-theory-groups-track.md:1928` attributes to
  `RG-1/H5`

I handled that mismatch explicitly instead of pretending the examples were on
that URL:

- Kramár remains the proof-backing source for the theorem spine
- Kay Yang's `Rational Valued Characters` note supplies the rationality
  convention split and the cyclic-group boundary case
- the Q8 leaf is backed by a separate live Schur-index reference row
- the S3 reconstruction is recorded as a `canonical` local example, because it
  is a straightforward worked consequence of the A-page theorem plus already
  published S3 data, not a named heading in the sources I read

### Page convention choice

On this page, after item `def-rational-character-ring`, the unqualified phrase
`rational character` means a character in `R_Q(G)`, the rational
representation ring. The same item separately names `Q`-valued class functions
and records that the two notions need not agree.

That convention is what keeps RG-1 consistent with the design's explicit warning
not to conflate `rational-valued` with `realizable over Q`.

## 4. Proposed Page Summaries

### `artin-induction-and-rational-characters`

This page defines the rational representation ring and the cyclic induction
subgroup, proves the cyclic permutation relation via Möbius inversion on
generator-indicator class functions, and derives Artin induction in the
`R_Q(G)` convention. It then records the three structural consequences the
design asked to keep on the page itself: cyclic fixed-point detection, the rank
count by cyclic conjugacy classes, and the cyclic local integrality criterion.

The page does not drift sideways into Brauer induction, monomial characters, or
general Schur-index theory. Those are explicitly handed to RG-2 and RG-3.

### `artin-induction-and-rational-characters-examples`

The examples page keeps the scope concrete at the exact places the design wants:
the tautological cyclic boundary, the explicit `A_5` denominator relation, the
finite `S_3` fixed-space reconstruction, and the Q8 warning that a
`Q`-valued irreducible character need not come from a `Q`-representation.

I intentionally did not make the B page depend on published B-page leaves such
as the existing `S_3` character-table example. The B-leaf rule is respected by
treating the `S_3` example as a local calculation from current A-page material
and already-published A-page prerequisites only.

## 5. Exact Item Inventory

### A page — 9 items

1. `def-rational-character-ring`
2. `def-cyclic-induction-subgroup`
3. `lem-induction-image-is-an-ideal-in-the-representation-ring`
4. `lem-cyclic-generator-class-functions-by-moebius-inversion`
5. `lem-artin-cyclic-permutation-relation`
6. `thm-artin-induction-for-rational-characters`
7. `cor-cyclic-fixed-points-detect-rational-representations`
8. `cor-rank-of-the-rational-representation-ring`
9. `cor-cyclic-local-integrality-criterion`

### B page — 4 items

1. `ex-artin-induction-for-a-cyclic-group`
2. `ex-artin-permutation-relation-for-a5`
3. `ex-cyclic-fixed-point-detection-for-s3`
4. `cex-rational-valued-character-need-not-be-defined-over-the-rationals`

## 6. Sources Actually Read

I harvested three qualifying primary treatments and one auxiliary reference row:

1. Tammo tom Dieck, *Representation Theory*  
   `https://www.uni-math.gwdg.de/tammo/d01.pdf`
2. János Kramár, *Artin's and Brauer's Theorems on Induced Characters*  
   `https://www.math.toronto.edu/murnaghan/courses/mat445/artinbrauer.pdf`
3. Kay Yang, *Rational Valued Characters*  
   `https://www.math.toronto.edu/murnaghan/courses/mat445/kayyang.pdf`
4. The Magma Handbook, `The Schur Index`  
   `https://docs.magma-maths.org/RepresentationTheory/CharactersOfFiniteGroups/schur-index.html`

### Eligible primary treatments

The pair's primary backing is already sufficient before the Magma row:

- tom Dieck is an independent lecture-note treatment with a harvestable table of
  contents and the exact RG-1 consequence package
- Kramár is an independent course-note treatment for the induction-proof route
- Kay Yang is an independent course-note treatment that makes the
  rational-valued versus `Q`-realizable convention explicit and includes the
  cyclic-group boundary

The Magma page is auxiliary reference support for the Q8 Schur-index example,
not a primary treatment and not counted as one.

### URL handling

All four recorded URLs were reopened in the web reader on Friday, September 4,
2026. No source URL needed recovery or replacement in this dispatch.

Because the shell runner is network-restricted, the coverage file carries honest
manual `fetch_verified` receipts from those web opens rather than local byte/hash
stamps.

## 7. Coverage Choices And Dependency Rationale

- **The Möbius step is isolated, not smeared across Artin induction.** The
  design explicitly wanted the arithmetic calculation visible. That is why
  `lem-cyclic-generator-class-functions-by-moebius-inversion` exists as a real
  bridge item rather than being buried in item 5.

- **The theorem is stated in the `R_Q(G)` convention, not the broader
  rational-valued convention.** Kay Yang and the Magma Q8 example were read
  precisely so the page can say this honestly and then protect the distinction.

- **The fixed-space corollary uses current library machinery instead of reminting
  character orthogonality.** The proof route goes through Frobenius reciprocity
  and averaging, both already published, matching the seam instruction that the
  earlier character pages own the basic character-theoretic infrastructure.

- **The Q8 example is kept dependency-closed without stealing RG-3.** It depends
  only on the page's convention item and the already-published group-theoretic
  Q8 definitions. The formal Schur-index definition itself is deferred to
  `schur-indices-and-fields-of-definition`.

- **The `S_3` example is intentionally local.** The example can be authored from
  RG-1 plus already-published A-page prerequisites, so there is no excuse to
  depend on an existing published examples-page leaf.

## 8. Coverage And Scope Notes

- Kay Yang `Theorem 6` is deliberately `out-of-scope`. It is about decomposing
  the regular character into inductions of nontrivial linear characters, which
  belongs to the monomial/Brauer side of the track, not to the present
  trivial-character cyclic page.

- The Magma page's general Schur-index definition block is deliberately
  `deferred` to `schur-indices-and-fields-of-definition`. RG-1 only needs the
  Q8 obstruction, not the full field-of-definition theory.

- The only `canonical` harvest row is the `S_3` fixed-space reconstruction.
  That is intentional and source-honest: none of the live external sources I
  read names exactly that worked example as a heading, but it is part of the
  standard development forced by item 7 and by the already-published `S_3`
  material.

## 9. Validation

Batch-local checks on the edited bytes:

- `node tools/coverage-checklist.mjs research/frontier-30-batch-17.coverage.json`
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-17.pages.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-17.coverage.json`
- `git diff --check -- research/frontier-30-batch-17.pages.json research/frontier-30-batch-17.coverage.json research/frontier-30-batch-17.notes.md`

Exact outcomes:

- `coverage-checklist`: `1` page, `29` harvested results, `0` errors, `0` warnings
- `content-policy --manifest-only research/frontier-30-batch-17.pages.json`:
  `13` scoped items, `0` errors, `0` warnings
- `source-fetch-check --coverage research/frontier-30-batch-17.coverage.json`:
  `4/4` sources fetch-verified
- `git diff --check`: clean

Run-level checks I was instructed to run:

## Step-5 authoring

Authored on Friday, September 4, 2026:

- A-page items: `def-rational-character-ring`, `def-cyclic-induction-subgroup`,
  `lem-induction-image-is-an-ideal-in-the-representation-ring`,
  `lem-cyclic-generator-class-functions-by-moebius-inversion`,
  `lem-artin-cyclic-permutation-relation`,
  `thm-artin-induction-for-rational-characters`,
  `cor-cyclic-fixed-points-detect-rational-representations`,
  `cor-rank-of-the-rational-representation-ring`,
  `cor-cyclic-local-integrality-criterion`
- B-page items: `ex-artin-induction-for-a-cyclic-group`,
  `ex-artin-permutation-relation-for-a5`,
  `ex-cyclic-fixed-point-detection-for-s3`,
  `cex-rational-valued-character-need-not-be-defined-over-the-rationals`
- Pages: `library/representation-theory/artin-induction-and-rational-characters.md`,
  `library/representation-theory/artin-induction-and-rational-characters-examples.md`
- Contract report: `research/frontier-30-batch-17.proof-contracts.json`

Provenance rationale:

- Every authored statement stayed `literature-derived`. The theorem spine,
  fixed-space consequence, and rank count follow tom Dieck §4.5 and Kramár's
  Artin note.
- The cyclic-group boundary and the rational-valued-versus-`Q`-realizable
  convention split use Kay Yang exactly where the scaffold notes said they
  should.
- The `Q_8` warning remains literature-derived because the non-realizability
  step is the cited Schur-index computation from the Magma handbook, not a local
  proof.
- The `S_3` recovery example is still sourced through the RG-1 theorem spine and
  already-published `S_3` character data, but the authored proof is a direct
  local table computation, so its proof provenance remains literature-derived
  rather than generated.

Narrowed claims:

- `cor-cyclic-local-integrality-criterion` was narrowed from the scaffold's
  stronger "cyclic restrictions detect integrality" wording to the source-backed
  denominator statement: if every cyclic restriction is integral, then
  `|G|x ∈ R(G)`. The cited tom Dieck Proposition `(4.5.5)` supports that bounded
  denominator conclusion directly; I did not claim the stronger unstated
  integrality criterion.
- `cor-cyclic-fixed-points-detect-rational-representations` was written as an
  injectivity statement on `R_Q(G)` together with the honest-representation
  interpretation `m_C(χ_V)=dim V^C`. That is the exact proof carried by the page.

Dropped claims: none.

Blockers: none.

Checks run after authoring:

- `node tools/tsx-run.mjs tools/precheck.mts items/def-rational-character-ring.md items/def-cyclic-induction-subgroup.md items/lem-induction-image-is-an-ideal-in-the-representation-ring.md items/lem-cyclic-generator-class-functions-by-moebius-inversion.md items/lem-artin-cyclic-permutation-relation.md items/thm-artin-induction-for-rational-characters.md items/cor-cyclic-fixed-points-detect-rational-representations.md items/cor-rank-of-the-rational-representation-ring.md items/cor-cyclic-local-integrality-criterion.md items/ex-artin-induction-for-a-cyclic-group.md items/ex-artin-permutation-relation-for-a5.md items/ex-cyclic-fixed-point-detection-for-s3.md items/cex-rational-valued-character-need-not-be-defined-over-the-rationals.md`
  Result: `11 checked, 0 failing — all clean`.
- `node tools/proof-contract.mjs research/frontier-30-batch-17.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 11/11 item(s) checked`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: pass; ends with `OK`. The output still includes the standing
  repository-wide `redundant-prereq` advisories, including the expected advisory
  chain on `artin-induction-and-rational-characters`.
- `node tools/content-policy.mjs research/frontier-30-batch-17.pages.json`
  Result: `13 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/validate-plan.mjs research/plan-spec.json`: exit `0`, ending in
  `OK`; only the standing repo-wide `redundant-prereq` notes remain, including
  the expected advisory on this page's deliberately unreduced `requires` list
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`:
  **fails outside this batch** with `34` `batch-dependency-missing` errors in
  batch `16`'s lie-theory scaffold, beginning at
  `def-central-character-of-a-lie-algebra-module` and continuing through
  `thm-enveloping-algebra-is-free-over-its-center`
- `node tools/manifest-integrity.mjs --run frontier-30`: `48` pages owed,
  `48` present, `no scope drift`

There is no batch-local writable run artifact for `url-sweep`, and the shell is
network-restricted, so I did not create or edit any run-level liveness artifact.
Instead, I performed live URL recovery/liveness verification in the web reader
and recorded the resulting manual `fetch_verified` receipts in the coverage
file, which is the batch-local source gate this dispatch is authorized to
maintain.

## Step-3 fix pass

The stable batch-17 finding ids summarized in
`research/frontier-30-alpha-a-step3-scaffold-review.md` are the two current
batch-17 `decline_id` rows in
`research/frontier-30-alpha-a-scope-decisions.json`. I re-checked both rows
against the RG-1 design block, the current batch-17 manifest and coverage
ledger, the live plan entry, and the live source URLs on Saturday, September 5,
2026 (Australia/Sydney local time).

No batch-17 manifest or coverage edit was required on current bytes. Alpha's
Step-3 review still records `artin-induction-and-rational-characters` as
`sufficient`, so the only changed scaffold record in this fix pass is this
notes receipt.

- `5fc11a1a236c1d46c62e1e7106dce4de2b2bb63f2d2f4949d590cb7aed1f93b1` — disposition: `pushed back` on local expansion. Evidence: Kay Yang `Theorem 6` is still the regular-character decomposition into inductions of nontrivial linear characters of cyclic subgroups, while RG-1 still intentionally stops at trivial-character cyclic induction, fixed-space detection, rank, and the cyclic local-integrality criterion. `research/frontier-30-batch-17.coverage.json` still records that row as `out-of-scope` with a source-honest reason, and [plan-representation-theory-groups-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-representation-theory-groups-track.md:223) through [plan-representation-theory-groups-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-representation-theory-groups-track.md:303) still place the stronger cyclic-linear and Brauer-induction material beyond RG-1. Changed scaffold record: none.
- `e101932273a061063a288dddf2a2f1c6064f1be85e1ea0e39cb09526c6fadd78` — disposition: `already correct`. Evidence: the Magma introductory Schur-index definition text is still formal field-of-definition machinery rather than an RG-1 load-bearing prerequisite; `research/frontier-30-batch-17.coverage.json` still defers it to `schur-indices-and-fields-of-definition`, and [plan-representation-theory-groups-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-representation-theory-groups-track.md:307) still gives RG-3 the Schur-index definition package. Changed scaffold record: none.

Validator rerun on Saturday, September 5, 2026:

- `node tools/coverage-checklist.mjs research/frontier-30-batch-17.coverage.json` -> `coverage-checklist: 1 page(s), 29 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json` -> `content-policy: 694 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-17.coverage.json` -> `source-fetch-check: 4/4 source(s) fetch-verified`.
- `node tools/validate-plan.mjs research/plan-spec.json` -> pass with only the standing repository-wide `redundant-prereq` advisories, ending in the standard `OK` line.

## Scaffold-fix round

Reviewed `research/frontier-30-scaffold-closure.json` on Saturday, September 5,
2026 (Australia/Sydney local time). The closure file does not assign a numeric
finding id, so this receipt uses the exact page-local identifier below.

- Finding id: `artin-induction-and-rational-characters:cor-classical-mobius-inversion-closure`
- Disposition: `applied`
- Evidence: `research/frontier-30-scaffold-closure.json` and
  `research/frontier-30-alpha-a-recheck.md` identify the same live
  `undeclared-prereq`: `lem-cyclic-generator-class-functions-by-moebius-inversion`
  depended on `cor-classical-mobius-inversion`, whose home page is
  `incidence-algebras-and-mobius-inversion`, but the RG-1 page does not declare
  that prerequisite in its `requires`.
- Evidence: the controlling RG-1 design at
  [plan-representation-theory-groups-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-representation-theory-groups-track.md:223)
  through
  [plan-representation-theory-groups-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-representation-theory-groups-track.md:249)
  keeps the Möbius arithmetic inside the local bridge lemma and does not add an
  incidence-algebra prerequisite page.
- Evidence: the already-harvested source rows for the lemma remain live on
  Saturday, September 5, 2026: Kramár §2 still defines `\chi_H` immediately
  before the displayed sum and still proves `Lemma 2. \chi_H \in R(H)`; Kay
  Yang's harvested `Lemma 5` still backs the cyclic-group route; tom Dieck
  still provides the surrounding cyclic-induction theorem package in §4.5. No
  URL recovery or re-sourcing was required.
- Change: removed `cor-classical-mobius-inversion` from
  `lem-cyclic-generator-class-functions-by-moebius-inversion` in
  `research/frontier-30-batch-17.pages.json` and tightened that item's
  `strategy` text so the local proof boundary is explicit.
- Change: refreshed all four `fetch_verified` receipts in
  `research/frontier-30-batch-17.coverage.json` after re-opening the recorded
  tom Dieck, Kramár, Kay Yang, and Magma URLs in the web reader on Saturday,
  September 5, 2026.
- Change: appended this scaffold-fix receipt to
  `research/frontier-30-batch-17.notes.md`.

Validator rerun on Saturday, September 5, 2026:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-17.coverage.json` -> `coverage-checklist: 1 page(s), 29 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json` -> `content-policy: 694 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-17.coverage.json` -> `source-fetch-check: 4/4 source(s) fetch-verified`.
- `node tools/validate-plan.mjs research/plan-spec.json` -> pass with only the standing repository-wide `redundant-prereq` advisories, ending in `OK`.
- `node tools/validate-plan.mjs /tmp/frontier-30-batch-17-spliced-plan.json` -> pass, ending in `OK`, with no item-level cycles, forward references, forbidden B-page dependencies, unresolved ids, or undeclared prerequisites among the `700` populated page(s).
- `git diff --check -- research/frontier-30-batch-17.pages.json research/frontier-30-batch-17.coverage.json research/frontier-30-batch-17.notes.md` -> clean.
