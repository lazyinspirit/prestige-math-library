# frontier-30 · Beta · batch-1 notes — `brauer-characters-and-decomposition-matrices` and `second-cohomology-and-abelian-kernel-extensions`

Run `frontier-30`, batch `1`, two A/B pairs, category `group-theory`.
Author: Beta. Session date: Friday, September 4, 2026.

Artifacts owned by this dispatch:

- `research/frontier-30-batch-1.pages.json`
- `research/frontier-30-batch-1.coverage.json`
- this file

Per the dispatch, I did not edit workflow state, published content, another
batch artifact, or plan structure outside batch `1`.

## 1. Control files and live run context

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated batch
prompt `research/frontier-30-beta-1.task.md`, the seed manifest
`research/frontier-30-batch-1.pages.json`, the scaffold task template
`research/frontier-30-beta-batch.task.md`, the source-scout and scaffold-fix
templates for shape control, the run step-0 note `research/frontier-30-step0-notes.md`,
the run drift note `research/frontier-30-alpha-step0-drift.md`, the drift-evidence
record `research/frontier-30-drift-evidence.json`, the cited design blocks in
`research/plan-group-theory-track.md`, the representation-theory inherited-interface
table in `research/plan-representation-theory-groups-track.md`, and the live
entries in `research/plan-spec.json`.

I also verified the live controller state from disk rather than from any
historical resume prose.

- `.autopilot-frontier-30/status.md` records run `frontier-30` at stage
  `1-scaffold`, updated `2026-09-04T14:39:44.460Z`, with batch `1` listed in
  flight.
- `git log --oneline --decorate -5 -- .autopilot .autopilot-frontier-30 research/frontier-30-batch-1.pages.json research/frontier-30-beta-1.task.md`
  shows only the standing autopilot-state housekeeping commits and no batch-local
  workflow override in the owned artifacts.

I treated that as context to record, not something to repair. The explicit
dispatch and the no-workflow-edits rule keep the correct scope on the three
owned batch-1 artifacts above.

## 2. Design control and drift

### Controlling design material

For both pairs, the second cited line is the B-page subsection inside the same
full GT block rather than a competing amendment.

- `brauer-characters-and-decomposition-matrices`:
  `research/plan-group-theory-track.md:2438` begins the full `GT-19` block, and
  `:2507` is the companion B-page subsection inside that block.
- `second-cohomology-and-abelian-kernel-extensions`:
  `research/plan-group-theory-track.md:2758` lands inside the full `GT-22`
  block, and `:2824` is the companion B-page subsection inside that block.

I also searched `research/plan-*.md` for later mentions of both page ids. For
`GT-19`, I read the inherited-interface and reserved-boundary discussion in
`research/plan-representation-theory-groups-track.md`; it confirms that this
group-theory page owns Brauer characters, decomposition matrices, and primitive
central block idempotents, and that later representation-theory pages merely
cite that interface. It does not replace the `GT-19` route. For `GT-22`, no
separate expansion document presented a rival page-level scaffold; only the
downstream `GT-23` prerequisite mention appears elsewhere. Accordingly, the
controlling page routes remain the full `GT-19` and `GT-22` blocks in
`plan-group-theory-track.md`.

### Design-vs-spec drift

Both pairs have prerequisite drift between design and the live seed/spec. I
recorded the conflicts and kept the manifest aligned to the live spec exactly as
the dispatch instructs.

- `GT-19` design `requires`:
  `modular-representations-and-projective-covers`,
  `characters-and-the-orthogonality-relations`.
- Live `research/plan-spec.json` and the seed manifest instead require:
  `modular-representations-and-projective-covers-examples`.

- `GT-22` design `requires`:
  `crossed-homomorphisms-complements-and-first-cohomology`,
  `group-cohomology-as-a-derived-functor`,
  `grothendieck-spectral-sequences-and-computations`.
- Live `research/plan-spec.json` and the seed manifest instead require:
  `crossed-homomorphisms-complements-and-first-cohomology-examples`.

I did not adjudicate either disagreement locally. The manifest remains aligned
to the current spec, and these notes preserve the conflict for run-wide drift
handling.

No order drift is present on the current bytes: the seed manifest and
`research/plan-spec.json` agree on `150.003 / 150.004` and `365.073 / 365.074`.

## 3. Live-corpus seams and route choices

### GT-19 seam

The designed upstream ordinary-character and modular-foundation material already
exists as published library items on disk:

- `def-splitting-p-modular-system-for-a-finite-group`
- `def-og-lattice-and-reduction-modulo-the-maximal-ideal`
- `lem-reduction-of-an-og-lattice-is-a-finite-dimensional-kg-module`
- `thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras`
- `thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules`
- `def-class-function-and-the-space-of-complex-class-functions`
- the worked prerequisite examples
  `ex-reducing-an-integral-lattice-for-s-three` and
  `cex-an-ordinary-irreducible-with-reducible-mod-p-reduction`

So the batch-1 `GT-19` scaffold starts exactly where the design says it should:
`p`-regular elements, Teichmuller lifts, Brauer characters, decomposition data,
Brauer reciprocity, Cartan, and primitive central block idempotents. It does
not silently re-mint the earlier `GT-18` or ordinary-character-theory interfaces.

### GT-22 seam

`GT-22` has a sharper live-corpus seam. The published corpus already contains
the relevant `GT-9` and `GT-21` items:

- `def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient`
- `thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products`
- `def-first-group-cohomology-via-inhomogeneous-one-cocycles`
- `def-restriction-inflation-and-the-quotient-conjugation-action-on-first-cohomology`
- `rem-nonabelian-extension-obstruction-and-h-two-torsor`

But the designed deeper upstream pages
`group-cohomology-as-a-derived-functor` and
`grothendieck-spectral-sequences-and-computations` are not authored in
`library/` and are not assigned to any `frontier-30` batch manifest or beta
task on the current bytes.

To keep authoring honest, I therefore localized the two bridge obligations that
the designer already singled out:

- `thm-factor-set-model-agrees-with-derived-second-group-cohomology`
  is kept as a local degree-two comparison theorem whose proof route is the
  explicit inhomogeneous bar differential written on this page, not a hidden
  dependency on an unauthored upstream item.
- `thm-five-term-exact-sequence-as-extension-and-transgression-data`
  is likewise kept on the page with a low-degree extension-data interpretation
  route through the already-published degree-one maps, instead of pretending
  that a spectral-sequence page is available on disk today.

I did not downgrade either designed theorem to a boundary remark, and I did not
add a new external prerequisite page. The scaffold remains inside batch scope
while still naming the actual authoring burden.

## 4. Scaffold shape

The scaffold now has:

- `brauer-characters-and-decomposition-matrices` (A): **27 items**
- `brauer-characters-and-decomposition-matrices-examples` (B): **6 items**
- `second-cohomology-and-abelian-kernel-extensions` (A): **25 items**
- `second-cohomology-and-abelian-kernel-extensions-examples` (B): **7 items**

No split is needed. Both A pages remain well below the 60-item ceiling.

### GT-19 route

- I kept the designer's exact order: `p`-regularity and Teichmuller lifts first,
  then the Brauer-character package, then the decomposition map and numbers,
  then projective characters, Brauer reciprocity, the Cartan identity, and
  finally blocks through primitive central idempotents.
- The five `fs-` items stay on the A page, which makes the A-page count `27`
  and matches the track table's page-size summary for `GT-19`.
- The closing remark preserves the designed block-theory boundary: defect
  groups, Brauer pairs, and the main block theorems are explicitly left to the
  later representation-theory pages.

### GT-22 route

- I followed the factor-set-first route exactly: cocycles and coboundaries,
  section factor sets, twisted products, classification, splitting, Baer sum,
  then the low-degree exact-sequence orientation.
- The five `fs-` items again stay on the A page, making the A-page count `25`,
  which matches the track table's summary for `GT-22`.
- The `B` page examples stay concrete and local: one prime-square extension,
  one split cocycle, central cyclic cases, quaternion/dihedral classes, a
  section-change computation, a Baer-sum computation, and one inequivalent-map
  counterexample.

## 5. Sources actually read

### GT-19

I harvested two independent primary treatments for
`brauer-characters-and-decomposition-matrices`.

1. `https://www.uv.es/jomimar8/pdfs/course%20notes.pdf`
   J. Miquel Martinez, *Modular Representation Theory of Finite Groups*.
2. `https://www.scribd.com/document/951548499/ModRep`
   Tudor Ciurca, *Representation Theory*, used as a live mirrored full-text copy
   of the plan-cited notes at `original_url:
   https://www.ma.imperial.ac.uk/~tc4117/assets/ModRep.pdf`.

The first source covers the Brauer-character, decomposition-number, block, and
primitive-idempotent route directly. The second supplies an independent
Brauer-character / projective-indecomposable / Cartan identity route and backs
the recovery of Brauer reciprocity and `C = D^T D`.

### GT-22

I harvested two independent primary treatments for
`second-cohomology-and-abelian-kernel-extensions`.

1. `https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf`
   Clara Loh, *Group Cohomology, SS 2019*.
2. `https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf`
   Caroline Lassueur, *Cohomology of Groups, SS 2021*.

These give an open-note route for extension actions, sections, cocycles,
twisted products, equivalence, and the `H^2` classification. Baer-sum and
five-term packaging are recorded as canonical page rows because they belong to
the page's standard development but are not isolated under the same named
headings in the exact open-source ranges I read.

## 6. URL handling and fetch receipts

Runner-local shell networking is unavailable in this checkout.

- `node -e "fetch(...)"` fails with `EAI_AGAIN`.
- `curl -I -L https://www.uv.es/jomimar8/pdfs/course%20notes.pdf` fails with
  `Could not resolve host`.

So I could not honestly create fresh byte-count `source-fetch-check --stamp`
receipts from the shell. I handled receipts in the same durable way already used
elsewhere in this repository:

- each source in `research/frontier-30-batch-1.coverage.json` carries a
  manual `fetch_verified` block recording that I opened it directly in the web
  reader on Friday, September 4, 2026;
- for the Ciurca notes, the inaccessible plan-cited Imperial URL is preserved as
  `original_url`, and the live mirrored full-text URL is used as the reader-facing
  `url` with an explicit `recovery_note`.

I did not keep any harvested source row for a URL I did not re-open.

## 7. Known limits and authoring risks

- `GT-19` deliberately stops before defect groups and Brauer's main block
  theorems. The closing remark marks that boundary; no later item in this batch
  depends on the missing local block theory.
- `GT-22`'s two bridge theorems are real authoring obligations on the current
  bytes because the deeper cohomology and spectral-sequence pages are not yet
  authored. Their proofs must stay low-degree and explicit; they must not cite
  missing upstream item ids at step 5.
- The batch keeps the spec-level `requires` exactly as seeded even though both
  designs ask for more page-level prerequisites. That is intentional and matches
  the drift instructions; the notes, not the manifest, carry the discrepancy.

## 8. Validator checklist

Commands to run after writing the scaffold:

```bash
node tools/coverage-checklist.mjs research/frontier-30-batch-1.coverage.json --require-destination
node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json
node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-1.coverage.json
node tools/validate-plan.mjs research/plan-spec.json

## Step-5 authoring

Date: Friday, September 4, 2026.

Authored pages:

- `brauer-characters-and-decomposition-matrices`
- `brauer-characters-and-decomposition-matrices-examples`
- `second-cohomology-and-abelian-kernel-extensions`
- `second-cohomology-and-abelian-kernel-extensions-examples`

Authored item ids:

- GT-19 A page:
  `def-p-regular-and-p-singular-elements`,
  `lem-p-regular-elements-are-preserved-by-conjugacy-and-coprime-powers`,
  `def-teichmuller-lift-in-a-splitting-p-modular-system`,
  `lem-teichmuller-lift-is-multiplicative-and-unique`,
  `def-brauer-character-of-a-finite-dimensional-kg-module`,
  `lem-brauer-character-is-independent-of-basis-and-splitting-field-realisation`,
  `prop-brauer-characters-are-class-functions-on-p-regular-elements`,
  `thm-brauer-character-is-additive-on-short-exact-sequences`,
  `thm-brauer-nesbitt-module-determination`,
  `thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions`,
  `cor-number-of-simple-kg-modules-equals-number-of-p-regular-conjugacy-classes`,
  `def-decomposition-map-from-ordinary-to-modular-grothendieck-groups`,
  `thm-decomposition-map-is-independent-of-the-stable-lattice`,
  `def-decomposition-numbers-and-decomposition-matrix`,
  `lem-decomposition-numbers-are-nonnegative-integers`,
  `def-projective-indecomposable-characters-and-cartan-invariants`,
  `thm-brauer-reciprocity`,
  `thm-cartan-matrix-is-d-transpose-d`,
  `def-p-blocks-by-primitive-central-idempotents`,
  `thm-blocks-partition-ordinary-and-brauer-irreducible-characters`,
  `prop-decomposition-matrix-is-block-diagonal-after-block-ordering`,
  `rem-defect-groups-and-brauer-main-theorems`,
  `fs-a-brauer-character-is-defined-on-all-elements-by-the-usual-trace`,
  `fs-modular-representations-are-determined-by-ordinary-characters`,
  `fs-reduction-mod-p-of-an-ordinary-character-is-always-irreducible`,
  `fs-the-cartan-matrix-equals-the-decomposition-matrix`,
  `fs-every-block-has-one-ordinary-and-one-brauer-irreducible-character`.
- GT-19 B page:
  `ex-brauer-characters-of-a-p-group`,
  `ex-p-regular-classes-of-s-three`,
  `ex-decomposition-matrix-of-s-three-in-characteristic-two`,
  `ex-cartan-matrix-from-d-transpose-d`,
  `ex-a-block-with-one-ordinary-and-one-brauer-character`,
  `cex-ordinary-trace-on-a-p-singular-unipotent-element`.
- GT-22 A page:
  `def-normalized-two-cocycle-and-two-coboundary`,
  `lem-normalized-two-cocycles-and-coboundaries-form-groups`,
  `def-second-cohomology-by-factor-sets`,
  `thm-factor-set-model-agrees-with-derived-second-group-cohomology`,
  `def-extension-inducing-a-prescribed-abelian-kernel-action`,
  `def-normalized-set-theoretic-section-and-factor-set`,
  `lem-factor-set-of-a-section-is-a-normalized-two-cocycle`,
  `lem-changing-the-section-changes-the-factor-set-by-a-coboundary`,
  `cor-an-extension-determines-a-well-defined-h-two-class`,
  `def-twisted-product-extension-from-a-two-cocycle`,
  `lem-twisted-product-is-a-group-iff-the-factor-set-is-a-two-cocycle`,
  `lem-cohomologous-two-cocycles-give-equivalent-extensions`,
  `thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action`,
  `cor-zero-h-two-class-is-equivalent-to-splitting`,
  `def-baer-sum-of-abelian-kernel-extensions`,
  `lem-baer-sum-is-independent-of-extension-representatives`,
  `thm-baer-sum-agrees-with-addition-in-h-two`,
  `cor-central-extensions-are-classified-by-h-two-with-trivial-action`,
  `thm-five-term-exact-sequence-as-extension-and-transgression-data`,
  `rem-nonabelian-extension-obstruction-in-h-three`,
  `fs-every-function-g-times-g-to-m-is-a-factor-set`,
  `fs-the-factor-set-is-independent-of-the-section-as-a-function`,
  `fs-h-two-classifies-extensions-with-arbitrary-nonabelian-kernel`,
  `fs-equivalent-extensions-mean-only-that-the-middle-groups-are-isomorphic`,
  `fs-the-zero-h-two-class-corresponds-to-the-direct-product-only`.
- GT-22 B page:
  `ex-the-cp-squared-extension-as-a-nonzero-two-cocycle`,
  `ex-the-split-extension-as-the-zero-cocycle`,
  `ex-central-extensions-of-a-cyclic-group`,
  `ex-the-quaternion-and-dihedral-central-extension-classes`,
  `ex-changing-a-section-by-a-one-cochain`,
  `ex-baer-sum-of-two-factor-sets`,
  `cex-same-middle-group-with-inequivalent-extension-maps`.

Provenance rationale:

- Standard definitions and textbook theorems were tagged `literature-derived`
  at the statement level with the batch coverage's two-source stacks copied into
  each item.
- Bridge formulations created to match the live seam on current disk, notably
  `thm-factor-set-model-agrees-with-derived-second-group-cohomology`,
  `thm-five-term-exact-sequence-as-extension-and-transgression-data`, and the
  local boundary remarks, were tagged `ai-altered` at statement level because
  the page route is source-backed but adapted to the library's current
  prerequisite surface.
- Proofs written locally here are tagged `ai-altered` or `ai-generated`
  according to whether they mainly reorganize the sourced route or provide the
  direct local witness/refutation. Both `proved_here: false` remarks use
  `proof: not-supplied` with explicit `external_dependency` records.

Narrowed or dropped claims:

- None dropped.
- No page split was needed.
- I strengthened a few item-file dependency lists beyond the bare scaffold
  where the written proof needed an on-disk local theorem, most notably
  `thm-brauer-nesbitt-module-determination` depending on the local Brauer-basis
  theorem and `thm-five-term-exact-sequence-as-extension-and-transgression-data`
  depending on the published degree-one inflation-restriction theorem. The
  authored claims themselves were not narrowed.

Proof-contract artifact:

- Wrote `research/frontier-30-batch-1.proof-contracts.json` for the 50
  proof-bearing items and regenerated its citation and derivation rows from the
  current item text.

Checks run:

- `node tools/tsx-run.mjs tools/precheck.mts <50 batch item files>` ->
  `50 checked, 0 failing — all clean`.
- `node tools/content-policy.mjs research/frontier-30-batch-1.pages.json` ->
  `content-policy: 65 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json` -> pass, ending in
  `OK`, with only the standing repository-wide `redundant-prereq` advisories.
- `node tools/proof-contract.mjs research/frontier-30-batch-1.proof-contracts.json --strict` ->
  `proof-contract: 0 error(s), 0 warning(s), 50/50 item(s) checked`.
- `node tools/rendercheck.mjs <65 batch item files + 4 batch page files>` ->
  `OK — 69 file(s)`.

Blockers:

- `node tools/depcheck.mjs --quiet` remains red on unrelated pre-existing
  repository defects outside batch `1`, including missing differential-topology
  and measure-theory items and legacy cited-not-in-deps findings elsewhere in
  the corpus. I did not alter those non-batch files.
git diff --check -- research/frontier-30-batch-1.pages.json research/frontier-30-batch-1.coverage.json research/frontier-30-batch-1.notes.md
```

Validation results are recorded below after execution.

## 9. Validation results

- `node tools/coverage-checklist.mjs research/frontier-30-batch-1.coverage.json --require-destination`
  passed on Friday, September 4, 2026:
  `coverage-checklist: 2 page(s), 44 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-1.coverage.json`
  passed:
  `source-fetch-check: 4/4 source(s) fetch-verified`.

- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
  does **not** pass on the current run bytes. It fails with
  `content-policy: 637 scoped item(s), 34 error(s), 0 warning(s)`, all `batch-dependency-missing`
  rows on the unrelated Lie-theory batch page
  `harish-chandra-isomorphism-casimir-and-central-characters`. Those failures
  are outside batch `1` scope, and I did not edit another batch's manifest to
  clear them.

- Focused batch-local confirmation:
  `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-1.pages.json`
  passes cleanly:
  `content-policy: 65 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  passes on the live plan and ends with the standard `OK` line. On the current
  pre-splice bytes it still prints:
  `150.003* brauer-characters-and-decomposition-matrices 0 items`,
  `150.004* brauer-characters-and-decomposition-matrices-examples 0 items`,
  `365.073* second-cohomology-and-abelian-kernel-extensions 0 items`, and
  `365.074* second-cohomology-and-abelian-kernel-extensions-examples 0 items`,
  which is the expected step-1 state before stage `4-splice` copies this batch's
  item lists into `research/plan-spec.json`.

- `git diff --check -- research/frontier-30-batch-1.pages.json research/frontier-30-batch-1.coverage.json research/frontier-30-batch-1.notes.md`
  returned no output, so the owned files are diff-clean.

## Step-3 fix pass

Reviewed `research/frontier-30-alpha-a-step3-scaffold-review.md` on Saturday,
September 5, 2026.

- Alpha-review finding ids for batch `1`: none recorded. The group-`a` review
  still marks both batch-1 A pages `sufficient` in
  `research/frontier-30-alpha-a-step3-verdicts.json`, and
  `research/frontier-30-alpha-a-scope-decisions.json` still has `0` current
  decline rows for batch `1`.
- Disposition: partial pushback on the review's no-op outcome. I did not invent
  a repair for any alpha-recorded batch-1 finding because none exists, but I
  did repair two current batch-local `b-leaf` defects that the stronger
  spliced-plan validator exposed on the current Saturday, September 5, 2026
  bytes.
- Finding id: `b-leaf-fs-reduction-mod-p-of-an-ordinary-character-is-always-irreducible`.
  Disposition: accepted and repaired. Evidence:
  `node tools/validate-plan.mjs /tmp/frontier-30-batch-1-spliced-plan.json`
  reported that this A-page false statement depended on the published B-page
  item `cex-an-ordinary-irreducible-with-reducible-mod-p-reduction`, whose
  home is `modular-representations-and-projective-covers-examples`. Changed
  scaffold record: `research/frontier-30-batch-1.pages.json`, item
  `fs-reduction-mod-p-of-an-ordinary-character-is-always-irreducible`,
  `strategy` and `deps`.
- Finding id: `b-leaf-ex-decomposition-matrix-of-s-three-in-characteristic-two`.
  Disposition: accepted and repaired. Evidence:
  `node tools/validate-plan.mjs /tmp/frontier-30-batch-1-spliced-plan.json`
  reported that this B-page example depended on the published B-page item
  `ex-reducing-an-integral-lattice-for-s-three`, also homed on
  `modular-representations-and-projective-covers-examples`. Changed scaffold
  record: `research/frontier-30-batch-1.pages.json`, item
  `ex-decomposition-matrix-of-s-three-in-characteristic-two`, `strategy` and
  `deps`.
- Evidence: `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-1.coverage.json`
  returned `coverage-checklist: 2 page(s), 44 harvested result(s), 0 error(s), 0 warning(s)`.
- Evidence: `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-1.coverage.json`
  returned `source-fetch-check: 4/4 source(s) fetch-verified`.
- Evidence: `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
  returned `content-policy: 694 scoped item(s), 0 error(s), 0 warning(s)`.
- Evidence: `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-1.pages.json`
  returned `content-policy: 65 scoped item(s), 0 error(s), 0 warning(s)`.
- Evidence: `node tools/validate-plan.mjs research/plan-spec.json` exited `0`
  and ended with `OK`; only the repository's standing out-of-batch
  `[redundant-prereq]` advisories remain.
- Evidence: after splicing `research/frontier-30-batch-1.pages.json` into
  `research/plan-spec.json`, `node tools/validate-plan.mjs /tmp/frontier-30-batch-1-spliced-plan.json`
  now exits `0` and ends with `OK`; no item-level cycles, forward references,
  B-page dependencies, or unresolved ids remain among the `702` page(s) with
  item lists.
- Evidence: I reopened all four recorded source URLs in the web reader on
  Saturday, September 5, 2026:
  `https://www.uv.es/jomimar8/pdfs/course%20notes.pdf`,
  `https://www.scribd.com/document/951548499/ModRep`,
  `https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf`,
  and `https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf`.
  No URL recovery rewrite or coverage disposition change was required in this
  fix pass.
- Changed scaffold record: no change to
  `research/frontier-30-batch-1.coverage.json`.
- Changed scaffold record: appended this Step-3 fix-pass receipt in
  `research/frontier-30-batch-1.notes.md`.
