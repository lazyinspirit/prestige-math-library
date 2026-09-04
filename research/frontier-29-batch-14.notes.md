# frontier-29 · Beta · batch-14 notes — `presheaves-sheaves-stalks-and-sheafification`

Run `frontier-29`, batch `14`, one A/B pair, category `scheme-theory`.
Author: Beta. Session date: Tuesday, September 1, 2026.

Artifacts owned by this dispatch:

- `research/frontier-29-batch-14.pages.json`
- `research/frontier-29-batch-14.coverage.json`
- this file

Per the dispatch, I did not edit workflow state, another batch artifact,
published content, or plan structure outside batch `14`.

## 1. Outcome

The pair is now scaffolded with:

- A page `presheaves-sheaves-stalks-and-sheafification`: **29 items**
- B page `presheaves-sheaves-stalks-and-sheafification-examples`: **9 items**

No split is needed. The A page stays well below the hard 60-item ceiling.

The route follows the design where it matters:

1. open subsets as a category, then presheaves, then sheaves
2. separated presheaves kept explicit before sheafification
3. stalks and germs built concretely before stalkwise detection results
4. sheafification handled by the plus/double-plus route, not by an abstract reflector alone
5. basis checking kept on the A page
6. exactness, ringed spaces, direct/inverse image, and module pullback deferred to `AV-10`

No forward references or recorded-not-proved fallbacks are planned. B-page
items depend only on A-page items or published prerequisites, or are standalone
leaves.

## 2. Control Files And Live Run Context

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated batch
task `research/frontier-29-beta-14.task.md`, the dispatch prompt
`research/frontier-29-dispatch/beta-batch-14.prompt.md`, the seed manifest
`research/frontier-29-batch-14.pages.json`, the live plan entry in
`research/plan-spec.json`, the drift note
`research/frontier-29-alpha-step0-drift.md`, and the cited design block in
`research/plan-algebraic-geometry-track.md`.

Per `AGENTS.md`, I checked the live controller and recent history from disk
rather than trusting older resume prose:

- `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`
  reports live run `frontier-23` at stage `5-author`.
- `git log --oneline --decorate -5 -- .autopilot research/frontier-29-batch-14.pages.json research/frontier-29-dispatch/beta-batch-14.prompt.md research/frontier-29-beta-14.task.md`
  shows only the standing `frontier-14`/autopilot history nearby on disk and no
  batch-local workflow override.

That is context to record, not something this batch is allowed to repair.

## 3. Design Control And Drift

### Controlling design material

The dispatch points to `research/plan-algebraic-geometry-track.md:545`, and the
full controlling block is `AV-9. Presheaves, sheaves, stalks, and
sheafification`.

### Design-vs-spec prerequisite framing

The page order matches the live spec: `366.057`.

The prerequisite language does not match text-for-text:

- the design says the page requires the category/functor and directed-colimit
  interfaces
- the live spec and batch manifest require
  `plane-curves-local-intersection-multiplicity-and-bezout-examples`

Per the dispatch, I did not adjudicate this locally. I followed the spec and
record the mismatch here. The earlier drift review in
`research/frontier-29-alpha-step0-drift.md` already marked this page
`VERDICT: no-drift`, interpreting the design sentence as a closure description
rather than as a rival page-level `requires` list.

### Batch-local dependency repair

My first draft imported the published item `def-local-homeomorphism`, whose home
page `classification-of-covering-spaces` is outside this page's declared
closure. `validate-plan` correctly rejected that as an undeclared prerequisite.

I repaired the scaffold by dropping that external dependency and keeping
`thm-sheaves-as-local-homeomorphisms` self-contained on the local-topology
notion it proves anyway. This preserves the design's theorem without changing
the manifest's declared page prerequisites.

## 4. Proposed Page Summaries

### `presheaves-sheaves-stalks-and-sheafification`

This page fixes the basic sheaf language over a topological space: opens as a
category, presheaves, morphisms, separated presheaves, sheaves, stalks, germs,
and the stalkwise tests that make sheaf arguments local. It then builds the
plus construction, sheafification, its universal property, preservation of
stalks, idempotence, the basis criterion for checking sheafhood, and the image
sheaf as a sheafification of an objectwise image presheaf.

The page does not move into exact sequences of sheaves, direct and inverse
images, ringed spaces, or module pullback. Those are harvested and explicitly
routed to `sheaf-operations-exactness-ringed-spaces-and-module-pullback`.

### `presheaves-sheaves-stalks-and-sheafification-examples`

The examples page keeps the first contact with sheaf theory concrete:
continuous and locally constant functions, bounded functions that fail gluing,
the constant-presheaf failure on disconnected opens, skyscraper-style set
sheaves, extension by empty sections outside an open subset, objectwise image
failure, germs of continuous functions, and the empty-space boundary case.

## 5. Exact Item Inventory

### A page — 29 items

1. `def-open-set-category-topological-space`
2. `def-presheaf-on-topological-space`
3. `def-section-restriction-and-global-section`
4. `def-morphism-of-presheaves`
5. `def-separated-presheaf`
6. `def-sheaf-on-topological-space`
7. `lem-sheaf-section-over-empty-set-terminal`
8. `thm-sheaf-equalizer-condition`
9. `lem-sheaf-condition-check-on-basis`
10. `def-presheaf-of-groups-rings-modules`
11. `lem-forgetful-sheaf-compatibility`
12. `def-stalk-of-presheaf`
13. `lem-germ-equivalence-relation`
14. `def-germ-of-section`
15. `lem-section-zero-if-all-germs-zero`
16. `lem-morphisms-of-sheaves-determined-by-stalks`
17. `thm-sheaf-morphism-isomorphism-stalkwise`
18. `def-etale-space-of-sheaf-of-sets`
19. `thm-sheaves-as-local-homeomorphisms`
20. `def-presheaf-plus-construction`
21. `lem-first-plus-construction-is-separated`
22. `lem-second-plus-construction-is-sheaf`
23. `def-sheafification`
24. `thm-sheafification-universal-property`
25. `thm-sheafification-preserves-stalks`
26. `cor-sheafification-idempotent`
27. `def-subsheaf`
28. `lem-image-sheaf-is-sheafification-presheaf-image`
29. `rem-sections-not-determined-by-single-stalk`

### B page — 9 items

1. `ex-sheaf-continuous-real-functions`
2. `ex-sheaf-locally-constant-functions`
3. `cex-presheaf-bounded-continuous-functions-not-sheaf`
4. `cex-constant-presheaf-not-sheaf-disconnected-open`
5. `ex-skyscraper-set-sheaf-stalks`
6. `ex-extension-by-empty-outside-open`
7. `cex-objectwise-image-not-sheaf`
8. `ex-germs-of-continuous-functions`
9. `ex-empty-space-unique-sheaf-sections`

## 6. Sources Actually Read

I harvested three verified source texts for the single A page:

1. Ravi Vakil, *Foundations of Algebraic Geometry*, Classes 3-4 compilation:
   `https://math.stanford.edu/~vakil/0506-216/216Ajun2807.pdf`
2. The Stacks Project, Chapter 6 *Sheaves on Spaces*:
   `https://stacks.math.columbia.edu/download/sheaves.pdf`
3. J.S. Milne, *Algebraic Schemes: Geometry over an Arbitrary Field*, Chapter 10:
   `https://www.jmilne.org/math/CourseNotes/AG10.pdf`

### Source roles

- Vakil is the main lecture-note treatment for the page's route:
  presheaves, morphisms, stalks, sheafification, and sheaves on a base.
- Stacks is the broad reference-work treatment covering the full
  `6.2`-`6.20` range named in the design, including the plus construction and
  stalkwise criteria.
- Milne is the second independent lecture-note treatment and a compact check on
  the page's basic conventions.

### URL handling

The coverage file carries honest fetch receipts for all three recorded URLs:

- each source URL was reopened through the web reader while preparing this
  scaffold
- the coverage therefore records manual PDF page-count receipts rather than
  fabricated shell-side byte or hash stamps

This is why `source-fetch-check` in check mode passes on the current evidence
even though the shell environment cannot later re-resolve those hosts for
`url-sweep`.

## 7. Key Route Choices And Dependency Rationale

- **Direct topological foundations only.** The page reuses the published
  category/functor, topology, basis, and filtered-colimit interfaces rather
  than importing scheme or ringed-space language early.
- **Separatedness is not hidden.** The sheafification route depends on the
  distinction between uniqueness of gluing and existence of gluing, so
  `def-separated-presheaf` stays visible.
- **Concrete stalks before local criteria.** The stalk is scaffolded as a
  filtered neighbourhood colimit, then germs, then detection lemmas, then the
  stalkwise isomorphism theorem.
- **No accidental covering-space dependency.** The local-homeomorphism bridge
  remains on AV-9 because the design explicitly wants it, but it is proved from
  the stalk-space construction rather than by importing the later covering-space
  page.
- **Sheafification is explicit.** The page does not merely state the left
  adjoint abstractly. It keeps the plus construction, the first-plus separated
  lemma, the second-plus sheaf lemma, stalk preservation, and idempotence.
- **Exactness and module operations are deferred honestly.** Every exactness,
  ringed-space, or module change-of-rings seam harvested from Vakil, Stacks, or
  Milne is routed to `AV-10` instead of being half-imported here.

## 8. Coverage And Scope Notes

The coverage harvest records `94` harvested headings/results across the three
source entries for the single A page.

The main declines are deliberate and should survive Alpha review:

- Vakil's exact-sequence discussion at the start of Class 4 is deferred to
  `sheaf-operations-exactness-ringed-spaces-and-module-pullback`.
- Milne's ringed-space item `10.4` is deferred to the same next page.
- Stacks' module adjunctions and tensor-product stalk formula
  (`6.6.2`, `6.20.1`, `6.20.2`, `6.20.3`) are deferred to `AV-10`.
- Stacks' abstract or non-designed examples such as `6.4.1`, `6.4.5`,
  `6.7.6`, `6.9.3`, `6.9.4`, and `6.15.5` are out of scope because the design
  already chose a tighter B-page example set for AV-9.

No result was declined merely because it needed a local lemma that this pair
could have built.

## 9. Published Dependencies Opened On Disk

I opened and checked the published pages or items actually carrying the reused
interfaces:

- `library/category-theory/categories-functors-and-natural-transformations.md`
- `library/category-theory/limits-and-colimits.md`
- `library/topology/topological-spaces-and-continuity.md`
- `items/def-category.md`
- `items/def-opposite-category.md`
- `items/def-functor-and-contravariant-functor.md`
- `items/def-natural-transformation.md`
- `items/prop-sets-and-functions-form-category-set.md`
- `items/def-neighbourhood-top.md`
- `items/def-topology-basis-subbasis.md`
- `items/def-filtered-category-and-filtered-colimit.md`
- `items/lem-equality-in-a-filtered-colimit-of-sets-is-eventual.md`
- `items/def-equivalence-relation.md`
- `items/def-equalizers-and-coequalizers.md`

This is enough for the scaffold's declared proof routes. I did not identify any
need for a `proved_here: false` boundary item.

## 10. Validation

- `node -e "JSON.parse(...)"` on `research/frontier-29-batch-14.pages.json`
  and `research/frontier-29-batch-14.coverage.json`: **PASS**
- `node tools/coverage-checklist.mjs research/frontier-29-batch-14.coverage.json --require-destination`:
  **PASS** — `1 page(s), 94 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-14.coverage.json`:
  **PASS** — `3/3 source(s) fetch-verified`
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`:
  **PASS** — `593 scoped item(s), 0 error(s), 0 warning(s)`
- temporary merged-plan validation:
  `node tools/validate-plan.mjs /tmp/frontier-29-batch-14.merged-plan.json`:
  **PASS** — exit `0`; only the repository's standing out-of-batch
  `redundant-prereq` warnings were reported
- `git diff --check -- research/frontier-29-batch-14.pages.json research/frontier-29-batch-14.coverage.json research/frontier-29-batch-14.notes.md`:
  **PASS**
- `node tools/url-sweep.mjs --coverage research/frontier-29-batch-14.coverage.json --out /tmp/frontier-29-batch-14-url-liveness.json --recover --fail-on-dead`:
  **FAIL** — `0/3 live; 3 failed; 0 recoverable from the archive`

The `url-sweep` failure is runner-local DNS, not a source-specific dead-link
finding. The exact shell errors were:

- `Could not resolve host: math.stanford.edu`
- `Could not resolve host: stacks.math.columbia.edu`
- `Could not resolve host: www.jmilne.org`

Independently of that shell-side liveness failure, the same three source URLs
were reopened through the web reader while preparing this scaffold, so the
coverage harvest itself remains fetch-verified. The unresolved blocker is that
the shell gate cannot confirm liveness from this environment.

## 11. Open Risks

- The weakest source-backed seam is the etale-space/local-homeomorphism bridge.
  The design requires it, and it is standard, but none of the three designated
  sources isolates it as a standalone numbered theorem in the exact read range.
  Authoring should therefore keep the proof fully concrete from the stalk-space
  basis and local-section gluing, not appeal to an unlicensed external result.
- `def-presheaf-of-groups-rings-modules` deliberately stays concrete. It uses
  the Stacks abstract algebraic-structure machinery only as support for the
  familiar group/ring/module cases, so later pages should not assume more than
  this scaffold licenses.
- The only live gate blocker is `url-sweep` under runner-local DNS failure. No
  source replacement is justified on the mathematics: the recorded URLs were
  reopened in the reader and the same texts were read. What remains blocked is
  the shell environment's network layer, not the harvest itself.

## Step-3 fix pass

Date: Wednesday, September 2, 2026.

### Batch-14 finding audit

- Finding id: none issued for batch `14`
- Disposition: accepted as a no-op. `research/frontier-29-alpha-b-step3-scaffold-review.md` records no stable `B14-*` finding and marks `presheaves-sheaves-stalks-and-sheafification` as `sufficient`.
- Evidence: the group-`b` review's `Local repair` section changes only batch `3`, while the batch-14 verdict section keeps the AV-9 pair sufficient on current bytes.
- Evidence: on Wednesday, September 2, 2026, I re-opened the three recorded source URLs at the exact locators already recorded in `research/frontier-29-batch-14.coverage.json`: Vakil Class 3 Sections 2-4 together with Class 4 Sections 1-2; Stacks Chapter 6 Sections 6.2-6.20; and Milne AG10 Chapter 10 `a. Preliminaries / Sheaves`, items `10.1`-`10.5`.
- Evidence: `node tools/coverage-checklist.mjs research/frontier-29-batch-14.coverage.json --require-destination` returned `coverage-checklist: 1 page(s), 94 harvested result(s), 0 error(s), 0 warning(s)`.
- Evidence: `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-14.coverage.json` returned `source-fetch-check: 3/3 source(s) fetch-verified`.
- Evidence: `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json` returned `content-policy: 753 scoped item(s), 0 error(s), 0 warning(s)`.
- Evidence: `node tools/validate-plan.mjs /tmp/frontier-29-batch-14-step3-fix-pass-spliced-plan.json` returned `OK`; only the repository's standing out-of-batch `redundant-prereq` warnings were emitted.
- Changed scaffold record: `research/frontier-29-batch-14.coverage.json` refreshed the three `fetch_verified.at` receipts from `2026-09-01T00:00:00.000Z` to `2026-09-02T00:00:00.000Z` after today's live source re-verification.
- Changed scaffold record: `research/frontier-29-batch-14.notes.md` appended this Step-3 fix-pass receipt.

## Step-5 authoring

Date: Tuesday, September 1, 2026.

### Authored pages

- `library/scheme-theory/presheaves-sheaves-stalks-and-sheafification.md`
- `library/scheme-theory/presheaves-sheaves-stalks-and-sheafification-examples.md`

### Authored item ids

- A page spine: `def-open-set-category-topological-space`, `def-presheaf-on-topological-space`, `def-section-restriction-and-global-section`, `def-morphism-of-presheaves`, `def-separated-presheaf`, `def-sheaf-on-topological-space`, `lem-sheaf-section-over-empty-set-terminal`, `thm-sheaf-equalizer-condition`, `lem-sheaf-condition-check-on-basis`, `def-presheaf-of-groups-rings-modules`, `lem-forgetful-sheaf-compatibility`, `def-stalk-of-presheaf`, `lem-germ-equivalence-relation`, `def-germ-of-section`, `lem-section-zero-if-all-germs-zero`, `lem-morphisms-of-sheaves-determined-by-stalks`, `thm-sheaf-morphism-isomorphism-stalkwise`, `def-etale-space-of-sheaf-of-sets`, `thm-sheaves-as-local-homeomorphisms`, `def-presheaf-plus-construction`, `lem-first-plus-construction-is-separated`, `lem-second-plus-construction-is-sheaf`, `def-sheafification`, `thm-sheafification-universal-property`, `thm-sheafification-preserves-stalks`, `cor-sheafification-idempotent`, `def-subsheaf`, `lem-image-sheaf-is-sheafification-presheaf-image`, `rem-sections-not-determined-by-single-stalk`
- B page witnesses: `ex-sheaf-continuous-real-functions`, `ex-sheaf-locally-constant-functions`, `cex-presheaf-bounded-continuous-functions-not-sheaf`, `cex-constant-presheaf-not-sheaf-disconnected-open`, `ex-skyscraper-set-sheaf-stalks`, `ex-extension-by-empty-outside-open`, `cex-objectwise-image-not-sheaf`, `ex-germs-of-continuous-functions`, `ex-empty-space-unique-sheaf-sections`

### Provenance rationale

- Literature-derived statements were kept on the route recorded in AV-9 and sourced to the same primary texts already harvested in coverage, chiefly Stacks Chapter 6 together with Vakil Classes 3-4.
- Proof provenance is `ai-altered` on the literature-backed lemmas, theorems, and corollary because the written arguments are fresh batch-local presentations of standard source mathematics rather than copied source proofs.
- The two designed generated witnesses `ex-germs-of-continuous-functions` and `ex-empty-space-unique-sheaf-sections` were authored with `provenance.statement: ai-generated`, `provenance.proof: ai-generated`, and `generation.role: example`, and neither is used as a dependency target.
- Every authored page and item remains `status: draft`. No `verification.judge` record was created.

### Narrowed or dropped claims

- None. I kept the planned inventory and page split unchanged.
- The only mechanical repair after authoring was the canonical precheck normalization: proof steps were flattened to one physical line and several step numbers were renumbered to the checker's canonical layer order.

### Blockers

- None remain in the authored batch artifacts.

### Checks run

- `node tools/tsx-run.mjs tools/precheck.mts <38 batch item files>`: `24 checked, 0 failing — all clean`
- `node tools/validate-plan.mjs research/plan-spec.json`: `OK`; only the repository's standing out-of-batch `redundant-prereq` warnings
- `node tools/content-policy.mjs research/frontier-29-batch-14.pages.json`: `content-policy: 38 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/regen-contract-entries.mjs research/frontier-29-batch-14.proof-contracts.json <24 proof-bearing ids>`: regenerated all `24`, skipped `0`
- `node tools/proof-contract.mjs research/frontier-29-batch-14.proof-contracts.json --strict`: `proof-contract: 0 error(s), 0 warning(s), 24/24 item(s) checked`
- `node tools/citation-fidelity.mjs research/frontier-29-batch-14.proof-contracts.json --items-dir items --fail-on-missing-quote`: `60 citation(s) over 24 authored item(s)`; no missing quote and no widening candidate
- `node tools/boundary-audit.mjs research/frontier-29-batch-14.proof-contracts.json --items-dir items --fail-on-contradicted --fail-on-template`: no template reuse cluster and no contradicted disposition
- `git diff --check -- items library/scheme-theory research/frontier-29-batch-14.proof-contracts.json research/frontier-29-batch-14.notes.md`: clean
