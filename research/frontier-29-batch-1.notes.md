# frontier-29 · Beta · batch-1 notes — `group-extensions-complements-and-schur-zassenhaus` and `crossed-homomorphisms-complements-and-first-cohomology`

Run `frontier-29`, batch `1`, two A/B pairs, category `group-theory`.
Author: Beta. Session date: Tuesday, September 1, 2026.

Artifacts owned by this dispatch:

- `research/frontier-29-batch-1.pages.json`
- `research/frontier-29-batch-1.coverage.json`
- this file

Per the dispatch, I did not edit workflow state, published content, another
batch artifact, or plan structure outside batch `1`.

## 1. Control files and live run context

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated batch
prompt `research/frontier-29-beta-1.task.md`, the seed manifest
`research/frontier-29-batch-1.pages.json`, the scaffold task template
`research/frontier-29-beta-batch.task.md`, the run step-0 note
`research/frontier-29-step0-notes.md`, the cited design blocks in
`research/plan-group-theory-track.md`, the live entries in
`research/plan-spec.json`, and the drift-evidence entries in
`research/frontier-29-drift-evidence.json`.

I also checked the live controller state from disk rather than trusting any
historical resume prose.

- `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`
  reported the shared root `.autopilot/` controller as **run `frontier-23` at
  stage `5-author`** on Tuesday, September 1, 2026.
- `.autopilot-frontier-29/status.md` on disk independently records **run
  `frontier-29` at stage `1-scaffold`**, updated `2026-09-01T14:51:27.345Z`,
  with batch `1` listed in flight.
- `git log --oneline --decorate -5 -- .autopilot .autopilot-frontier-29 research/frontier-29-batch-1.pages.json research/frontier-29-beta-1.task.md`
  showed no batch-local workflow override in the owned artifacts.

I treated that as context to record, not something to repair. The explicit
dispatch and the no-workflow-edits rule keep the correct scope on the three
owned batch-1 artifacts above.

## 2. Design control and drift

### Controlling design material

The dispatch points to two design locations for each A/B pair, but in each case
the later line is a subsection inside the same full block, not a competing
amendment.

- `group-extensions-complements-and-schur-zassenhaus`:
  `research/plan-group-theory-track.md:1333` begins the full `GT-9` block, and
  `:1405` is the companion B-page subsection inside that block.
- `crossed-homomorphisms-complements-and-first-cohomology`:
  `research/plan-group-theory-track.md:2662` begins the full `GT-21` block, and
  `:2723` is the companion B-page subsection inside that block.

I therefore treated the full `GT-9` and `GT-21` sections as controlling, with
the later locations read as part of the same control text rather than as rival
instructions.

### Design-vs-spec drift

There are real prerequisite drifts on both pairs, so I recorded them and
followed the live spec exactly as instructed.

- `GT-9` design `requires`:
  `semidirect-products-and-automorphism-groups`,
  `sylow-theorems-and-nilpotent-groups`.
- Live `research/plan-spec.json` and the seed manifest instead require:
  `small-cancellation-and-dehn-algorithms-examples`.

- `GT-21` design `requires`:
  `group-extensions-complements-and-schur-zassenhaus`,
  `group-cohomology-as-a-derived-functor`.
- Live `research/plan-spec.json` and the seed manifest instead require:
  `grothendieck-spectral-sequences-and-computations-examples`,
  `group-extensions-complements-and-schur-zassenhaus`.

I did **not** adjudicate either conflict locally. The manifest remains aligned
to the live spec, and these notes preserve the disagreements for the run-wide
drift machinery.

No order drift was present on the current bytes: the seed manifest and
`research/plan-spec.json` agree on `71.017 / 71.018` and `365.071 / 365.072`.

## 3. Live-corpus seams and duplication avoidance

The older `GT-9` design predates several already-published split-extension items
and two already-published nonsplitting witnesses. Under the current manifest
policy those may not be re-minted in this batch, so I treated them as reuse
seams rather than silently duplicating them.

Already published on disk and therefore **not** re-scaffolded here:

- `def-split-extension-of-groups`
- `thm-splitting-lemma-for-group-extensions`
- `def-outer-automorphism-group`
- `cex-cyclic-prime-square-extension-does-not-split`
- `cex-the-quaternion-extension-of-c-two-by-c-four-does-not-split`
- `ex-symmetric-group-splits-over-the-alternating-group`

The GT-9 coverage file records the relevant Milne headings for those items as
`already-published`, and the new GT-9 manifest builds only the extension
equivalence, abstract-kernel, Schur-Zassenhaus, and complete-kernel material
that is genuinely missing from the live corpus.

The `GT-21` drift is structural rather than duplicate-related. The design wanted
agreement with the separate page `group-cohomology-as-a-derived-functor`, but
that page is not a live manifest dependency here and its item ids are not
available to manifest-only gating. I therefore localized the degree-one
inhomogeneous-cochain definition and comparison theorem on `GT-21` itself,
rather than leaving a hidden dependency on a page that is not in the current
batch or published corpus.

## 4. Scaffold shape and route choices

The scaffold now has:

- `group-extensions-complements-and-schur-zassenhaus` (A): **23 items**
- `group-extensions-complements-and-schur-zassenhaus-examples` (B): **6 items**
- `crossed-homomorphisms-complements-and-first-cohomology` (A): **22 items**
- `crossed-homomorphisms-complements-and-first-cohomology-examples` (B):
  **6 items**

No split is needed. Both A pages stay well below the 60-item ceiling.

### GT-9 route decisions

- I began with extension equivalence, extension morphisms, kernel recovery, and
  the retraction criterion because the basic split-extension dictionary is
  already published earlier in the library.
- I kept the abstract-kernel and obstruction seam explicit, but only as a
  citation-only `remark` for authoring. The page will state the `H^3` obstruction
  and `H^2` torsor shape honestly rather than pretending to prove Eilenberg-Mac
  Lane's full theorem locally.
- I kept the Hall-subgroup definition and the full Schur-Zassenhaus block on the
  page, including the classical solvable-boundary conjugacy theorem and a
  separate boundary remark for the clean theorem using deeper input.
- I added `def-complete-group` locally because the complete-kernel proposition
  is one of the design's endpoints and the term was not yet a published item.

### GT-21 route decisions

- I followed the design's concrete degree-one route, but with a local
  inhomogeneous-one-cocycle definition because of the live spec drift explained
  above.
- I kept the complements-in-a-semidirect-product interpretation central: graph
  subgroups, kernel conjugation, and classification up to kernel conjugacy are
  all explicit scaffold items.
- I retained the nonabelian `H^1` segment, but recorded its pointed-set
  classification as a canonical coverage row rather than misattributing it to an
  open source heading that does not package the result under that exact label.
- I kept the inflation-restriction exact sequence in degree one as a local
  theorem, backed by the Columbia notes' explicit cocycle proof rather than by a
  hidden appeal to a later spectral-sequence page.

## 5. Sources actually read

### GT-9

I harvested three independent treatments for
`group-extensions-complements-and-schur-zassenhaus`.

1. `https://www.jmilne.org/math/CourseNotes/GT.pdf`
   J. S. Milne, *Group Theory*, Version 4.01.
2. `https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf`
   David A. Craven, *Finite Group Theory*.
3. `https://dokumen.pub/eilenberg-mac-lane-collected-works-0122340205-9780122340208.html`
   recovered full-text HTML mirror of Eilenberg-Mac Lane, *Cohomology Theory in
   Abstract Groups. II. Group Extensions with a non-Abelian Kernel*, with the
   original publication preserved as `original_url:
   https://doi.org/10.2307/1969174`.

### GT-21

I harvested two independent treatments for
`crossed-homomorphisms-complements-and-first-cohomology`.

1. `https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf`
   David A. Craven, *Finite Group Theory*.
2. `https://www.math.columbia.edu/~chaoli/docs/ClassFieldTheory2.html`
   Chaoli Li, *Class field theory: proofs*.

This pair's degree-one bar-cochain comparison and nonabelian pointed-set
packaging are recorded as canonical rows because the open source stack I actually
read does not present those exact bridge statements under standalone headings.
I preferred that honest canonical route to a false claim that a source heading
said more than it does.

## 6. URL handling and fetch receipts

Runner-local shell networking is unavailable in this checkout.

- `curl` fails with `Could not resolve host`.
- direct Node fetches fail with DNS errors.

So I could not honestly create fresh `source-fetch-check --stamp` receipts from
the shell. I handled receipts in the two honest ways already used elsewhere in
this repository.

- I reused exact-URL `fetch_verified` blocks already present on disk for:
  `https://www.jmilne.org/math/CourseNotes/GT.pdf`
  and
  `https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf`.
- I opened the Columbia notes and the recovered DOKUMEN full-text HTML directly
  in the web reader on Tuesday, September 1, 2026 and recorded manual
  `fetch_verified` blocks with `verified_via: web-open`.
- For the Eilenberg-Mac Lane paper I kept the DOI as `original_url` and used the
  recovered DOKUMEN full-text mirror as the live readable URL, which is exactly
  the URL discipline the dispatch requires when the original landing page is not
  itself readable full text.

I did **not** keep any harvested source row for a URL I did not re-open.

## 7. Known limits and authoring risks

- `rem-nonabelian-extension-obstruction-and-h-two-torsor` on GT-9 is a deliberate
  citation-only boundary item. At authoring it should be `proved_here: false`
  with the structured external-dependency record required by `SCHEMA.md`.
- `rem-schur-zassenhaus-conjugacy-in-full-generality` is also a deliberate
  citation-only boundary item unless step 5 intentionally expands the proof past
  the classical solvable-kernel / solvable-quotient route.
- Because the split-extension dictionary is already published earlier, GT-9 must
  not drift back into restating those same statements under new ids at authoring.
  The manifest and coverage here are already aligned to the live-corpus reuse
  seam.
- GT-21's local inhomogeneous-cochain item and its nonabelian pointed-set theorem
  are canonical rows, not source-heading rows. That is intentional. Step 5
  should prove them directly from the explicit formulas and semidirect-product
  calculations rather than citing a source heading that the harvest did not read.
- `thm-inflation-restriction-exact-sequence-in-degree-one` is the most delicate
  GT-21 proof obligation. The middle exactness requires the standard adjustment
  of a cocycle by a principal one so that it vanishes on the normal subgroup
  before descending to the quotient.

## 8. Validator checklist

Commands to run after writing the scaffold:

```bash
node tools/coverage-checklist.mjs research/frontier-29-batch-1.coverage.json --require-destination
node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json
node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-1.coverage.json
node tools/validate-plan.mjs research/plan-spec.json
git diff --check -- research/frontier-29-batch-1.pages.json research/frontier-29-batch-1.coverage.json research/frontier-29-batch-1.notes.md
```

Validation results are recorded below after execution.

## 9. Validation results

- `node tools/coverage-checklist.mjs research/frontier-29-batch-1.coverage.json --require-destination`
  completed on Tuesday, September 1, 2026 with no warnings:
  `coverage-checklist: 2 page(s), 45 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`
  passed:
  `content-policy: 513 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-1.coverage.json`
  passed:
  `source-fetch-check: 5/5 source(s) fetch-verified`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  passed on the current bytes, ending with the standard `OK` line and only the
  repository's standing `redundant-prereq` advisories.
  Important scope note: because this batch is not yet spliced into
  `research/plan-spec.json`, the validator still reports `0 items` for
  `group-extensions-complements-and-schur-zassenhaus`,
  `group-extensions-complements-and-schur-zassenhaus-examples`,
  `crossed-homomorphisms-complements-and-first-cohomology`, and
  `crossed-homomorphisms-complements-and-first-cohomology-examples` inside the
  live plan. This is a clean live-plan pass, not a claim that step 4 has
  already incorporated the new batch-1 item ids.

- `git diff --check -- research/frontier-29-batch-1.pages.json research/frontier-29-batch-1.coverage.json research/frontier-29-batch-1.notes.md`
  returned no output, so the owned files are diff-clean.

## Step-3 fix pass

Alpha group `a`'s stable batch-`1` review records do not expose numbered repair
findings. On the current Wednesday, September 2, 2026 bytes,
`research/frontier-29-alpha-a-step3-scaffold-review.md` and
`research/frontier-29-alpha-a-step3-verdicts.json` give only page-level
`sufficient` verdict rows for the two owned A pages, so I treated those page
ids as the stable finding identifiers for this pass and pushed back on any
implicit request to rewrite a sufficient scaffold.

- Finding id: `group-extensions-complements-and-schur-zassenhaus`
  Disposition: push back; no scaffold repair applied.
  Evidence: `research/frontier-29-alpha-a-step3-verdicts.json` records
  `{"page":"group-extensions-complements-and-schur-zassenhaus","verdict":"sufficient"}`.
  The review prose says GT-9 already keeps the intended route through
  extension equivalence, complements/retractions, outer actions,
  Schur-Zassenhaus, and complete kernels, with no closure blocker. I re-opened
  the recorded live sources on Wednesday, September 2, 2026 and verified the
  cited loci against the harvest: Milne `GT.pdf` at `Extensions of groups`,
  Theorem `3.21`, Proposition `3.22`, and the `Out(N)=Aut(N)/Inn(N)` paragraph
  (PDF pp. 49-51 / printed pp. 50-52); Craven `finitegroups2012.pdf` at
  Chapter `2.1`, Theorem `2.1`, and Definition `2.7` (PDF pp. 24-30); and the
  recovered Eilenberg-Mac Lane HTML mirror at lines `2342-2368`, covering
  Opus V, `1. Introduction`, `2. Kernels of homomorphisms`, and formula
  `(2.3)` for the `Q`-kernel. Every URL remained live and matched the recorded
  headings and dispositions.
  Changed scaffold record: none; `research/frontier-29-batch-1.pages.json`
  unchanged, `research/frontier-29-batch-1.coverage.json` unchanged.

- Finding id: `crossed-homomorphisms-complements-and-first-cohomology`
  Disposition: push back; no scaffold repair applied.
  Evidence: `research/frontier-29-alpha-a-step3-verdicts.json` records
  `{"page":"crossed-homomorphisms-complements-and-first-cohomology","verdict":"sufficient"}`.
  The review prose says GT-21 already has the abelian crossed-homomorphism
  route, the complement graph dictionary, the nonabelian pointed-set package,
  and the degree-one inflation-restriction exact sequence, with acceptable
  canonical carriers for the local bridge items. I re-opened the recorded live
  sources on Wednesday, September 2, 2026 and verified the cited loci against
  the harvest: Craven `finitegroups2012.pdf` at Exercise Sheet `4`,
  Exercises `4.1-4.4` (PDF pp. 72-73 / printed pp. 70-72); and Columbia's
  `ClassFieldTheory2.html` at `G-modules`, Definition `20`, Remark `34`, and
  Theorem `3` in `Inflation and coinflation` / `(Co)inflation-(co)restriction
  exact sequence` (HTML lines `39-49` and `195-210`). Every URL remained live
  and matched the recorded headings and dispositions.
  Changed scaffold record: none; `research/frontier-29-batch-1.pages.json`
  unchanged, `research/frontier-29-batch-1.coverage.json` unchanged.

Validation rerun on Wednesday, September 2, 2026:

- `node tools/coverage-checklist.mjs research/frontier-29-batch-1.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 45 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`
  -> `content-policy: 753 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-1.coverage.json`
  -> `source-fetch-check: 5/5 source(s) fetch-verified`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> passes with the standard terminal `OK` line and only the repository's
  standing `redundant-prereq` advisories elsewhere.

## Step-5 authoring

Authored on the current Wednesday, September 2, 2026 bytes:

- Pages: `group-extensions-complements-and-schur-zassenhaus`, `group-extensions-complements-and-schur-zassenhaus-examples`, `crossed-homomorphisms-complements-and-first-cohomology`, `crossed-homomorphisms-complements-and-first-cohomology-examples`.
- GT-9 A ids: `def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient`, `def-morphism-of-group-extensions`, `lem-kernel-subgroup-in-a-group-extension-is-normal-and-the-quotient-is-the-base`, `def-retraction-of-the-kernel-in-a-group-extension`, `thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products`, `lem-a-complement-induces-the-conjugation-action-on-the-kernel`, `prop-a-split-extension-is-direct-product-iff-its-complement-centralizes-the-kernel`, `lem-an-extension-induces-a-well-defined-outer-action-on-the-kernel`, `def-abstract-kernel-and-the-general-extension-problem`, `rem-nonabelian-extension-obstruction-and-h-two-torsor`, `def-hall-pi-subgroup`, `lem-normal-hall-subgroup-gives-a-coprime-extension`, `thm-schur-zassenhaus-existence`, `thm-schur-zassenhaus-conjugacy-when-kernel-or-quotient-is-solvable`, `rem-schur-zassenhaus-conjugacy-in-full-generality`, `cor-extensions-with-coprime-kernel-and-quotient-split`, `def-complete-group`, `prop-extensions-with-complete-kernel-split-over-the-centralizer`, `fs-a-set-theoretic-section-of-an-extension-is-automatically-a-homomorphism`, `fs-isomorphic-middle-groups-force-equivalent-group-extensions`, `fs-every-split-group-extension-is-a-direct-product`, `fs-schur-zassenhaus-says-every-hall-subgroup-is-normal`, `fs-schur-zassenhaus-conjugacy-needs-no-solvability-or-deeper-input`.
- GT-9 B ids: `cex-a-set-theoretic-section-of-c-four-onto-c-two-need-not-be-homomorphic`, `ex-the-dihedral-group-of-order-eight-is-a-split-extension-of-c-four-by-c-two`, `ex-the-klein-four-extension-of-c-two-by-c-two-is-direct`, `ex-a-four-has-four-complements-to-its-normal-klein-four-subgroup`, `ex-s-three-complements-to-a-three-cycle-subgroup-are-conjugate`, `cex-isomorphic-middle-groups-do-not-determine-equivalent-extensions`.
- GT-21 A ids: `def-crossed-homomorphism-for-a-g-group`, `lem-crossed-homomorphisms-with-abelian-coefficients-form-an-abelian-group`, `def-principal-crossed-homomorphism-for-abelian-coefficients`, `lem-principal-crossed-homomorphisms-form-a-subgroup`, `def-first-cohomology-via-crossed-homomorphisms`, `def-first-group-cohomology-via-inhomogeneous-one-cocycles`, `thm-the-inhomogeneous-one-cocycle-model-agrees-with-crossed-homomorphisms-in-degree-one`, `cor-first-cohomology-for-a-trivial-action-is-hom`, `cor-first-cohomology-of-a-finite-group-with-uniquely-divisible-coefficients-vanishes`, `def-graph-subgroup-in-a-semidirect-product`, `lem-a-graph-subgroup-is-a-complement-exactly-for-a-crossed-homomorphism`, `lem-kernel-conjugation-by-an-element-of-the-coefficient-group-corresponds-to-a-principal-crossed-homomorphism`, `thm-first-cohomology-classifies-complements-up-to-kernel-conjugacy`, `def-first-nonabelian-cohomology-as-a-pointed-set`, `thm-nonabelian-first-cohomology-classifies-complements-as-a-pointed-set`, `def-restriction-inflation-and-the-quotient-conjugation-action-on-first-cohomology`, `thm-inflation-restriction-exact-sequence-in-degree-one`, `fs-every-crossed-homomorphism-is-an-ordinary-homomorphism`, `fs-first-cohomology-with-nonabelian-coefficients-is-a-group`, `fs-first-cohomology-classifies-all-subgroups-of-a-semidirect-product`, `fs-whole-semidirect-product-conjugacy-is-the-equivalence-relation-behind-first-cohomology`, `fs-the-cochain-and-crossed-homomorphism-definitions-of-first-cohomology-agree-automatically`.
- GT-21 B ids: `ex-first-cohomology-of-c-two-with-trivial-action-on-c-three-is-zero`, `ex-crossed-homomorphisms-from-a-cyclic-group-are-determined-by-a-generator`, `ex-the-affine-group-agl-one-p-has-one-kernel-conjugacy-class-of-complements`, `ex-kernel-conjugate-complements-differ-by-a-principal-crossed-homomorphism`, `ex-nonabelian-first-cohomology-of-a-trivial-c-two-action-on-s-three`, `cex-the-inversion-crossed-homomorphism-of-c-two-to-z-is-not-a-homomorphism`.

Proof-contract artifact authored: `research/frontier-29-batch-1.proof-contracts.json`, version `1`, scope `42` proof-bearing ids, with regenerated `citations` and `derivations` from the final on-disk item text and explicit boundary rows for each scoped item.

Provenance and proof-boundary rationale:

- The two designed boundary remarks remain honest `proved_here: false` items: `rem-nonabelian-extension-obstruction-and-h-two-torsor` and `rem-schur-zassenhaus-conjugacy-in-full-generality`. Each carries the required `external_dependency` record, and neither carries a stale `verification.judge`.
- Statements are overwhelmingly `literature-derived`; proofs are mostly `ai-altered` because the proofs are rewritten into the repository's phase-format contract while staying within the harvested source route. The small number of page-local reformulations beyond an exact harvested label are marked `ai-altered` or `ai-generated` only where their kind permits that.
- The Schur-Zassenhaus existence proof is written directly by induction with the explicit elementary-abelian averaging step, rather than falsely treating Milne's pointer as a proof. The solvable-boundary conjugacy theorem remains distinct from the stronger recorded remark, preserving the intended proof boundary.
- The GT-21 degree-one bridge items are proved directly from the explicit cocycle formulas and semidirect-product calculations rather than by overstating what the harvested source headings already package.

Canonical repair applied before the clean rerun:

- Adopted the repository's precheck-normalized step numbering on the proofs that initially passed only after auto-repair.
- Collapsed display-style proof rows back into single tagged step paragraphs where the checker had detached the tags from the step.
- Removed two stale fact rows from the final authored proofs: `[L2]` in `thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products` and `[L4]` in `thm-schur-zassenhaus-existence`. The strict proof-contract gate exposed them as unused after the proof edits, so I removed them instead of fabricating uses.

Narrowed or dropped claims:

- None.

Blockers:

- None in batch scope on the current bytes.

Checks actually run after authoring on Wednesday, September 2, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts <42 proof-bearing batch item files>` -> `42 checked, 0 failing — all clean`.
- `node tools/content-policy.mjs research/frontier-29-batch-1.pages.json` -> `content-policy: 57 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json` -> passes with terminal `OK` and only the repository's standing `redundant-prereq` advisories outside batch scope.
- `node tools/regen-contract-entries.mjs research/frontier-29-batch-1.proof-contracts.json <42 ids>` -> regenerated all `42` contract entries from the final item text; a second focused rerun regenerated the two entries whose facts block changed during repair.
- `node tools/proof-contract.mjs research/frontier-29-batch-1.proof-contracts.json --strict` -> `proof-contract: 0 error(s), 0 warning(s), 42/42 item(s) checked`.
- `git diff --check -- ...` over the touched batch pages, items, proof-contract file, and notes -> no output.
