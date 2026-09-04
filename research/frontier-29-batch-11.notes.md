# frontier-29 batch 11 notes - beta scaffold

Owned pair:

- `derived-functors`
- `derived-functors-examples`

Artifacts written in this dispatch:

- `research/frontier-29-batch-11.pages.json`
- `research/frontier-29-batch-11.coverage.json`
- this file

Session date: Wednesday, September 2, 2026 (AEST).

## Design against spec

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`,
`research/frontier-29-beta-11.task.md`, `research/plan-spec.json`, and the
matched design locations in:

- `research/plan-combinatorics-and-categories.md` line `3350`
- `research/plan-homological-algebra-track.md` line `280`
- `research/plan-homological-algebra-track.md` line `1328`

I also verified from disk that this repository has a live `.autopilot/` state
directory for `frontier-29`, and I did not use any `research/*RESUME.md` file
as a source of run truth.

### Controlling design text

The three matches are not three equivalent page blocks:

- line `280` in `plan-homological-algebra-track.md` is the binding conventions
  section, especially the supplied-resolution-data rule and the page-metadata
  boundary;
- line `1328` starts the full `HA-6` page block and is the controlling
  mathematical design for this pair;
- line `3350` in `plan-combinatorics-and-categories.md` is an earlier cross-
  track summary entry, not the later amendment.

Where the cross-track summary and the later `HA-6` block differ, I treated the
later `HA-6` block as the controlling design text for mathematics because it is
the explicit completion/amendment block for this page, while still following
the current spec for any design-vs-spec drift.

### Design/spec drift recorded, not resolved locally

The design material and `research/plan-spec.json` disagree on page metadata:

- the older design summary records order `317`, while the spec records
  `365.047/365.048`;
- the design material speaks in the old `category-theory` plan category
  language, while the spec places the pair in `homological-algebra`;
- the later `HA-6` design prose still names
  `projective-and-injective-resolutions` and
  `preadditive-and-additive-categories-and-biproducts` as prerequisites,
  while the spec's page-level `requires` field is only
  `projective-and-injective-resolutions-examples`.

Per the dispatch, I did not adjudicate that drift locally. The manifest follows
the spec's page-level metadata and `requires` fields exactly. The item-level
dependency lists still cite already-established additive-category, homology, and
resolution items where the proof route genuinely needs them.

## Item census and split check

- A page `derived-functors`: `44` items
- B page `derived-functors-examples`: `7` items

The A page is below the `60`-item split threshold, so no split is required.

## Route choices

The scaffold keeps the later `HA-6` amendment's route:

1. begin with supplied projective and injective resolution data rather than a
   global choice claim;
2. separate object-definition, map-definition, functoriality, and
   change-of-data results instead of conflating them under one vague
   well-definedness theorem;
3. keep the long exact sequence and universal δ-functor structure off this page
   and defer them to `delta-functors-and-universality`;
4. keep the acyclic-resolution theorem on a finite staircase argument, not a
   spectral-sequence shortcut;
5. keep variance bookkeeping explicit by routing contravariant derivation
   through the opposite category;
6. stop the two-variable discussion at the two candidate constructions plus the
   balance definition, and defer actual balance theorems to
   `ext-and-balanced-resolutions`.

Important local decisions:

- I preserved the supplied-data foundation from section `3.4` of the design.
  The scaffold never states or implies a theorem of the form "choose once and
  for all a projective resolution for every object."
- I left the five `fs-` items on the A page exactly in the conceptual places
  the amendment wants: global-choice suppression, comparison-lift independence,
  the `L_0` hypothesis trap, automatic balance, and conflating acyclic with
  injective resolutions.
- I kept the page's closing two-variable bridge minimal. The page defines the
  notion of a balanced derived bifunctor, but does not quietly import the Tor
  or Ext balance theorems from the next page.

## Dependency notes

- The scaffold is dependency-closed against already-authored items in
  `projective-and-injective-resolutions`, `chain-complexes-and-homology`,
  `long-exact-sequences-in-homology`, and
  `preadditive-and-additive-categories-and-biproducts`.
- I did not add a split or any emergency support items. The corpus already has
  the comparison, horseshoe, homotopy-invariance, additive-functor, and
  opposite-category machinery this page needs.
- The design note for item `8` says the future authored definition should use
  `justified_by` for the lift-existence and lift-independence obligations. In
  this scaffold I kept those obligations explicit in the item ordering and
  dependencies, because the schema's `justified_by` direction expects the
  discharge item to depend on the definition item, whereas the designer's item
  order places the two lemmas first.
- B-page examples deliberately avoid depending on B-only items from other pages.
  Where the designer wanted a concrete comparison-homotopy example, the
  scaffold points back to A-page comparison theorems rather than making this
  B page depend on `projective-and-injective-resolutions-examples`.

## Source set actually read

I read and verified these live sources in the web reader on Wednesday,
September 2, 2026 (AEST):

1. Charles A. Weibel, *An Introduction to Homological Algebra*, chapter PDF:
   `https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf`
2. Joseph J. Rotman, *An Introduction to Homological Algebra*, 2nd ed., live
   HTML text:
   `https://dokumen.pub/an-introduction-to-homological-algebra-2nbsped-9780387245270-9780387683249.html`
3. Romyar Sharifi, *Homological Algebra*:
   `https://math.ucla.edu/~sharifi/homalg.pdf`
4. The Stacks Project, *Derived Categories*:
   `https://stacks.math.columbia.edu/download/derived.pdf`

This satisfies the source rule:

- two independent textbook treatments: Weibel and Rotman
- an open full lecture-note set with a harvestable table of contents: Sharifi
- an independent official reference treatment: the Stacks Project

What each source is doing in the scaffold:

- Weibel is the primary textbook control for the data-supplied left/right
  derived construction, acyclic objects, and the balance-definition seam.
- Rotman independently controls the comparison-first route, the
  right-exact/left-exact degree-zero recovery theorems, the horseshoe bridge,
  and the opposite-category treatment of contravariant derivation.
- Sharifi independently controls the same left/right derived construction in a
  compact open-note format, including the acyclic-resolution computation.
- The Stacks Project controls the projective/injective resolution comparison
  lemmas and the official right-derived-via-injective-resolutions package.

Every source in `research/frontier-29-batch-11.coverage.json` now carries an
honest manual `fetch_verified` receipt marked `verified_via: web-open`. I did
not fabricate local byte hashes or curl receipts that the network-restricted
shell could not obtain.

## Known limits and step-5 risks

- The authoring pass for items `32` and `33` must keep the acyclic-resolution
  proof as a finite staircase of short exact sequences. Pulling in spectral
  sequences here would violate the design route and blur the later page split.
- The hypothesis lines for items `25`, `26`, and `35` must stay explicit:
  right exactness for `L_0`, left exactness for `R^0`, and exactness for
  vanishing of higher derived functors.
- Item `37` must keep the opposite-category translation explicit. Writing
  "derive the contravariant functor in the same variable by projectives" with no
  variance bridge would recreate the design's named student trap.
- Item `39` is only a bridge definition. The actual theorem that two candidate
  derivations agree belongs to `ext-and-balanced-resolutions`.
- The page-level design/spec prerequisite drift remains open for stage `drift`.
  Step 5 should not normalize or rewrite the page metadata on its own.

## Validation checklist

Commands to run after writing the scaffold:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-29-batch-11.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-11.coverage.json --stamp
node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-11.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-29-batch-11.coverage.json --out /tmp/frontier-29-batch-11-url-liveness.json --recover --fail-on-dead
git diff --check
```

Results are appended below after execution.

## Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-29-batch-11.coverage.json`
  passed on Wednesday, September 2, 2026 (AEST):
  `coverage-checklist: 1 page(s), 52 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`
  passed:
  `content-policy: 513 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Wednesday, September 2, 2026 (AEST). The final verdict line
  was:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 650 page(s) with item lists.`
  It also printed the standard note that `643` planned pages still carry no
  item list yet, plus existing repository-wide redundant-prerequisite warnings
  unrelated to this batch.

- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-11.coverage.json --stamp`
  passed:
  `source-fetch-check: 4/4 source(s) fetch-verified (0 newly stamped)`.
  As expected, this accepted the honest manual `verified_via: web-open`
  receipts and did not fabricate local byte-level stamps.

- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-11.coverage.json`
  passed:
  `source-fetch-check: 4/4 source(s) fetch-verified`.

- `node tools/url-sweep.mjs --coverage research/frontier-29-batch-11.coverage.json --out /tmp/frontier-29-batch-11-url-liveness.json --recover --fail-on-dead`
  failed uniformly in this runner:
  `url-sweep: 0/4 live; 4 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-29-batch-11-url-liveness.json`.
  Each source row failed with the same transport error `curl: (6) Could not
  resolve host` on `dokumen.pub`, `math.mit.edu`, `math.ucla.edu`, and
  `stacks.math.columbia.edu`. Because I independently opened these exact URLs
  in the web reader on Wednesday, September 2, 2026 (AEST), this is evidence
  of the shell's DNS restriction, not evidence that any individual recorded URL
  is dead or mismatched. I therefore did not replace reader-verified sources
  merely to satisfy a transport-blocked shell sweep.

- `git diff --check`
  passed cleanly after the scaffold edits.

## Step-3 fix pass

Fix pass run on Wednesday, September 2, 2026 (Australia/Sydney local time)
against the current batch-11 scaffold bytes and the stable review in
`research/frontier-29-alpha-d-step3-scaffold-review.md`.

- Finding id: none issued for batch `11`.
  Disposition: accepted as a no-op fix pass; I did not alter the batch-11
  manifest or coverage harvest.
  Evidence: the stable group-`d` review records the only numbered finding as
  `D17-1`, and that finding belongs to
  `morse-critical-points-hessians-and-indices` in batch `17`, not to this
  batch. For batch `11`, the same review's page table and page-review prose
  mark `derived-functors` as `sufficient`, stating that the current scaffold
  already follows the HA-6 supplied-data route, keeps the delta-functor and
  balance material deferred to their exact later pages, and has a strong,
  current four-source harvest.
  Changed scaffold record: `research/frontier-29-batch-11.notes.md` only.
  `research/frontier-29-batch-11.pages.json` and
  `research/frontier-29-batch-11.coverage.json` were re-read unchanged during
  this pass. I re-opened the Weibel, Sharifi, and Stacks URLs in the web
  reader on Wednesday, September 2, 2026 and confirmed that the recorded
  source URLs are still live; the Rotman `dokumen.pub` URL also remains live in
  current search results and still passes the local fetch-verification stamp,
  so no URL recovery, harvest rewrite, dependency repair, or disposition
  change was required.

Validator recheck on Wednesday, September 2, 2026:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-29-batch-11.coverage.json`
  -> `coverage-checklist: 1 page(s), 52 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-11.coverage.json`
  -> `source-fetch-check: 4/4 source(s) fetch-verified`
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`
  -> `content-policy: 753 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> exited `0` and ended `OK`; it also printed the repository's standing
  out-of-batch `redundant-prereq` notices and the standard note that `643`
  planned pages still have no item list yet.

## Step-5 authoring

Authoring completed on Wednesday, September 2, 2026 (AEST).

- Authored page ids:
  `derived-functors`, `derived-functors-examples`.
- Authored item ids on `derived-functors`:
  `def-supplied-projective-resolution-datum`,
  `def-supplied-injective-resolution-datum`,
  `def-left-derived-object-relative-to-projective-resolution-data`,
  `def-right-derived-object-relative-to-injective-resolution-data`,
  `prop-negative-derived-degrees-vanish-for-one-sided-resolutions`,
  `lem-a-morphism-has-a-comparison-lift-between-the-supplied-projective-resolutions`,
  `lem-the-induced-homology-map-is-independent-of-the-comparison-lift`,
  `def-left-derived-map-relative-to-resolution-data`,
  `prop-left-derived-maps-preserve-identities`,
  `prop-left-derived-maps-preserve-composition`,
  `thm-left-derived-functors-relative-to-supplied-data-are-additive-functors`,
  `lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions`,
  `lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension`,
  `def-right-derived-map-relative-to-resolution-data`,
  `thm-right-derived-functors-relative-to-supplied-data-are-additive-functors`,
  `prop-a-natural-transformation-induces-natural-transformations-of-left-derived-functors`,
  `prop-a-natural-transformation-induces-natural-transformations-of-right-derived-functors`,
  `lem-objectwise-comparison-of-two-projective-resolution-data-induces-an-isomorphism-on-derived-objects`,
  `lem-the-change-of-projective-resolution-isomorphisms-are-natural`,
  `thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic`,
  `prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws`,
  `thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic`,
  `prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws`,
  `rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data`,
  `thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor`,
  `thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor`,
  `prop-positive-left-derived-functors-vanish-on-projective-objects`,
  `prop-positive-right-derived-functors-vanish-on-injective-objects`,
  `def-acyclic-object-for-a-left-exact-functor`,
  `def-acyclic-object-for-a-right-exact-functor`,
  `def-f-acyclic-resolution`,
  `thm-acyclic-resolution-theorem-for-right-derived-functors`,
  `thm-acyclic-resolution-theorem-for-left-derived-functors`,
  `cor-adapted-classes-compute-derived-functors`,
  `prop-an-exact-functor-has-vanishing-positive-derived-functors`,
  `prop-derived-functors-commute-with-finite-biproducts`,
  `prop-contravariant-derived-functors-are-derived-on-the-opposite-category`,
  `prop-a-bifunctor-can-be-derived-in-either-variable-when-the-relevant-resolution-data-are-supplied`,
  `def-balanced-derived-bifunctor`,
  `fs-enough-projectives-implies-a-canonical-resolution-for-every-object`,
  `fs-the-definition-of-a-derived-map-may-depend-on-the-chosen-comparison-lift`,
  `fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself`,
  `fs-derived-functors-in-two-variables-are-automatically-balanced`,
  `fs-an-acyclic-resolution-is-the-same-thing-as-an-injective-resolution`.
- Authored item ids on `derived-functors-examples`:
  `ex-the-left-derived-functors-of-an-exact-functor`,
  `ex-the-right-derived-functors-of-hom-from-a-fixed-object`,
  `ex-two-resolution-data-and-their-change-isomorphism`,
  `ex-independence-of-two-comparison-lifts-on-homology`,
  `ex-an-acyclic-resolution-that-is-not-an-injective-resolution`,
  `cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor`,
  `ex-a-contravariant-functor-derived-via-the-opposite-category`.

Provenance rationale actually used on disk:

- The structural A-page statements, definitions, and false-statement prompts are
  source-backed from the batch's Weibel/Rotman/Sharifi/Stacks reading and are
  tagged `provenance.statement: literature-derived`.
- Their local proofs and refutations are tagged `ai-altered` where I
  reorganized or compressed the source route into the on-disk phase proof, and
  `not-applicable` on definitions and the closing remark.
- The seven B-page examples/counterexample are non-load-bearing authored
  instantiations, so they are tagged `provenance.statement: ai-generated` with
  the required `generation.role` (`example` or `counterexample`) and are not
  used as dependency targets.

Local proof-route refinements made during authoring:

- Added explicit authored dependencies where the written proof needed them on
  disk rather than only transitively in the scaffold, especially
  `def-chain-homotopy`, `prop-an-additive-functor-preserves-zero-morphisms`,
  `thm-horseshoe-lemma-for-projective-resolutions`,
  `thm-horseshoe-lemma-for-injective-resolutions`,
  `thm-long-exact-sequence-in-homology`, and
  `thm-long-exact-sequence-in-cohomology`.
- Kept the scaffold's mathematical boundaries intact: no long-exact-sequence of
  derived functors item was imported from `delta-functors-and-universality`,
  and no balance theorem was smuggled in ahead of
  `ext-and-balanced-resolutions`.

Narrowed or dropped claims:

- None. Every scaffolded id in batch `11` was authored and kept at `status:
  draft`.

Blockers:

- No blocker remains for Step 5. Two non-fatal `shotgun-bracket` warnings stay
  on the two acyclic-resolution staircase theorems because step `2.1` in each
  item cites most of the structural setup at once; `proof-contract --strict`
  still passes with `0` errors.

Checks actually run on the authored state:

- `node tools/tsx-run.mjs tools/precheck.mts <40 proof-bearing batch-11 items>`
  -> `40 checked, 0 failing — all clean`.
- `node tools/proof-contract.mjs research/frontier-29-batch-11.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 2 warning(s), 40/40 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-29-batch-11.proof-contracts.json --items-dir items --fail-on-missing-quote`
  -> `QUOTE NOT FOUND — none` and `WIDENING CANDIDATES — none found`.
- `node tools/boundary-audit.mjs research/frontier-29-batch-11.proof-contracts.json --items-dir items --fail-on-contradicted`
  -> `CONTRADICTED DISPOSITIONS — none found`.
- `node tools/content-policy.mjs research/frontier-29-batch-11.pages.json`
  -> `content-policy: 51 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> exited `0`; final verdict
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 698 page(s) with item lists.`
  The printed `redundant-prereq` notices were out-of-batch and pre-existing.
- `git diff --check -- items library/homological-algebra research/frontier-29-batch-11.proof-contracts.json research/frontier-29-batch-11.notes.md`
  -> clean.
