# frontier-30 batch 10 notes - beta scaffold

Owned pair:

- `delta-functors-and-universality`
- `delta-functors-and-universality-examples`

Artifacts written in this dispatch:

- `research/frontier-30-batch-10.pages.json`
- `research/frontier-30-batch-10.coverage.json`
- this file

Session date: Saturday, September 5, 2026 (AEST).

## Control files and live run context

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`,
`research/frontier-30-dispatch/beta-batch-10.prompt.md`,
`research/frontier-30-batch-10.pages.json`, `research/plan-spec.json`,
`research/plan-homological-algebra-track.md`, `research/frontier-30-step0-notes.md`,
and `research/frontier-30-alpha-step0-drift.md`.

Per `AGENTS.md`, I checked the live controller from disk rather than trusting
historical prompt prose:

- `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`
  reported the live controller as run `frontier-23` at stage `5-author`, with
  `author-batch-10` listed in flight and all author artifacts for that run's
  batch `10` still missing.
- `git log --oneline --decorate -5 -- .autopilot research/frontier-30-batch-10.pages.json research/frontier-30-dispatch/beta-batch-10.prompt.md`
  showed only older autopilot-history commits and no batch-local workflow
  override on current bytes.

I treated that as context to record, not as something to repair. The explicit
dispatch and the no-workflow-edits rule still make the correct scope the three
batch-10 artifacts above.

## Design against spec

The controlling mathematical design is `research/plan-homological-algebra-track.md`
section `HA-7`, beginning at line `1499` and continuing through the B-page,
sources, and traps block beginning at line `1625`.

There is a real page-metadata drift between that design and the current spec:

- the design requires
  `derived-functors`,
  `projective-and-injective-resolutions`,
  and `long-exact-sequences-in-homology`
- `research/plan-spec.json` and the seed manifest instead require only
  `derived-functors-examples`

Per the dispatch, I did not adjudicate that locally. I kept the manifest's
page-level `requires` field at the spec value and used item-level `deps` to
carry the actual mathematical closure through already-published items.

`research/frontier-30-alpha-step0-drift.md` still records
`delta-functors-and-universality` as `VERDICT: no-drift`, because the current
closure already reaches the full design stack. I preserved both facts: the
closure is adequate, but the design text and the spec still disagree on the
explicit prerequisite line.

There is no order drift. The design, `research/frontier-30-step0-notes.md`,
the seed manifest, and `research/plan-spec.json` all keep the A/B pair at
`365.049` and `365.05`.

## Item census and split check

- A page `delta-functors-and-universality`: `34` items
- B page `delta-functors-and-universality-examples`: `7` items

The A page is well below the `60`-item split threshold, so no split is needed.

## Source set actually read

I harvested four reader-verified sources for the A page:

1. Alexandre Grothendieck, *Some aspects of homological algebra*
   (Marcia L. Barr and Michael Barr translation),
   `https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf`
2. Charles A. Weibel, *An Introduction to Homological Algebra*, chapter PDF
   `https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf`
3. The Stacks Project, section `12.12 Cohomological delta-functors`,
   `https://stacks.math.columbia.edu/tag/010P`
4. Romyar Sharifi, *Homological Algebra*,
   `https://math.ucla.edu/~sharifi/homalg.pdf`

This source set satisfies the standing rule on current bytes:

- Barr/Grothendieck is the eligible primary treatment
- Weibel is the textbook backbone
- Sharifi is the open full lecture-note control with a visible table of contents
- Stacks is the independent modern reference treatment for morphisms,
  universality, and the cohomological effacement criterion

I also opened Rotman's live HTML treatment while cross-checking the design's
route, but I did not add a fifth harvested row because the four recorded
sources already satisfy the pair rule and I only wanted coverage rows whose
exact read ranges I fully dispositioned in this batch.

### What each recorded source is doing

- Barr/Grothendieck supplies the original abstract route:
  delta-functors, morphisms, universality, effaceable and coeffaceable
  functors, the proof pattern for extending degree-zero maps, and the
  first-satellite construction.
- Weibel supplies the textbook route from horseshoe resolutions to the
  long exact derived sequence, the exact-functor trivial delta-functor,
  and the explicit warning that universality under effaceability is a theorem,
  not part of the bare definition.
- Stacks supplies the clean modern cohomological definitions and the explicit
  injective-effacement proof of universality, including the cokernel formula
  used for dimension shift.
- Sharifi supplies an independent open-note treatment of the abstract
  definitions, the left-derived long exact sequence, the projective
  effaceability universality theorem, and a compact printed dimension-shift
  staircase inside the acyclic-resolution proof.

## Route and conventions held

The scaffold follows the design's route rather than collapsing everything into
two slogans:

1. define homological and cohomological delta-functors, their morphisms, and
   universality before talking about derived-functor examples
2. build the left-derived connecting map from horseshoe resolutions and keep
   its independence proof as a named intermediate item
3. separate the abstract dimension-shift lemmas from the separate lemmas that
   define, de-choice, and connect the extension of a degree-zero transformation
4. prove universality from effaceability only after those three obligations are
   explicit
5. treat satellites narrowly and only in first degree, exactly as the design
   instructed
6. keep the five `fs-` guard items on the A page, because each protects a
   nearby theorem hypothesis that the design explicitly flagged

Other important scope decisions:

- I introduced no forward references.
- The B page keeps the design's seven examples and does not add the p-torsion
  example from Weibel or Sharifi.
- Item `29` is a genuine boundary remark: later balance pages must first build
  a degree-zero comparison and only then invoke universality.

## Known limits and step-5 risks

- Items `22` and `23` remain the hard proofs. The authoring step must show:
  construction of the next-degree map, independence of the chosen effacement,
  naturality in the object, compatibility with the connecting morphisms, and
  uniqueness. "Dimension shifting proves it" is not enough.
- Item `10` is mandatory. If the authoring pass cannot prove horseshoe-choice
  independence, the left-derived delta-functor theorem is not finished.
- Item `28` is intentionally narrow. It compares first satellites with
  `L_1/R^1`; it does not import Grothendieck's broader half-exactness criterion
  as a new theorem.
- The page-level `requires` drift remains open for run-wide drift adjudication.
  This batch records it but does not normalize it.

## Validation checklist

Commands run after writing the scaffold:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-10.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-30-batch-10.pages.json
node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-10.coverage.json --stamp
node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-10.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-30-batch-10.coverage.json --out /tmp/frontier-30-batch-10-url-liveness.json --recover --fail-on-dead
git diff --check -- research/frontier-30-batch-10.pages.json research/frontier-30-batch-10.coverage.json research/frontier-30-batch-10.notes.md
```

## Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-10.coverage.json`
  passed on Saturday, September 5, 2026 (AEST):
  `coverage-checklist: 1 page(s), 64 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-10.pages.json`
  passed:
  `content-policy: 41 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
  failed, but not because of batch `10`. The tool reported `34`
  `batch-dependency-missing` errors in frontier-30 batch `16`
  (`harish-chandra-isomorphism-casimir-and-central-characters`) for unresolved
  Lie-theory dependencies already present elsewhere in the run. I recorded the
  batch-local pass above so this note distinguishes current-batch validity from
  existing run-wide debt.

- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Saturday, September 5, 2026 (AEST). The final verdict line was:

  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 698 page(s) with item lists.`

  It also printed the standing note that `595` planned pages still have no item
  list and the usual repository-wide `redundant-prereq` warnings unrelated to
  this batch.

- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-10.coverage.json --stamp`
  passed:
  `source-fetch-check: 4/4 source(s) fetch-verified (0 newly stamped)`.

- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-10.coverage.json`
  passed:
  `source-fetch-check: 4/4 source(s) fetch-verified`.

- `node tools/url-sweep.mjs --coverage research/frontier-30-batch-10.coverage.json --out /tmp/frontier-30-batch-10-url-liveness.json --recover --fail-on-dead`
  failed uniformly in this shell environment:
  `url-sweep: 0/4 live; 4 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-30-batch-10-url-liveness.json`.

  The four failures were all the same transport error:

  - `curl: (6) Could not resolve host: math.mit.edu`
  - `curl: (6) Could not resolve host: math.ucla.edu`
  - `curl: (6) Could not resolve host: ncatlab.org`
  - `curl: (6) Could not resolve host: stacks.math.columbia.edu`

  Each of those exact URLs was nevertheless re-opened successfully in the web
  reader on Saturday, September 5, 2026 (AEST), which is why the coverage file
  carries honest `verified_via: web-open` receipts. I therefore did not
  re-source reader-verified URLs merely because the shell is DNS-restricted.

- `git diff --check -- research/frontier-30-batch-10.pages.json research/frontier-30-batch-10.coverage.json research/frontier-30-batch-10.notes.md`
  was run after the notes write and passed cleanly.

## Step-3 fix pass

Run date for this pass: Saturday, September 5, 2026 (AEST). The governing
alpha review is `research/frontier-30-alpha-e-step3-scaffold-review.md`.

- Finding `E11-1` disposition: pushed back as non-applicable to batch `10`.
  Evidence: the alpha group-`e` review assigns `E11-1` only to
  `singular-chains-and-singular-homology` in batch `11`, while its explicit
  verdict row for `delta-functors-and-universality` in batch `10` is
  `sufficient` with the note `route, source form, and Ext deferrals are
  current and exact`.
  Changed scaffold record: none in batch `10`; no edit was warranted in
  `research/frontier-30-batch-10.pages.json` or
  `research/frontier-30-batch-10.coverage.json`. I re-opened the four recorded
  source URLs in the web reader on Saturday, September 5, 2026 (AEST), and
  they still resolve to the recorded documents.

Current validator evidence on the batch-10 scaffold bytes:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-10.coverage.json`
  passed on Saturday, September 5, 2026 (AEST):
  `coverage-checklist: 1 page(s), 64 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-*.pages.json`
  passed on Saturday, September 5, 2026 (AEST):
  `content-policy: 694 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-10.coverage.json`
  passed on Saturday, September 5, 2026 (AEST):
  `source-fetch-check: 4/4 source(s) fetch-verified`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Saturday, September 5, 2026 (AEST). The final verdict line was:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 698 page(s) with item lists.`

## Step-5 authoring

Authored pages:

- `library/homological-algebra/delta-functors-and-universality.md`
- `library/homological-algebra/delta-functors-and-universality-examples.md`

Authored ids on `delta-functors-and-universality`:

- `def-homological-delta-functor`
- `def-cohomological-delta-functor`
- `def-morphism-of-homological-delta-functors`
- `def-morphism-of-cohomological-delta-functors`
- `def-universal-delta-functor`
- `def-effaceable-homological-delta-functor-in-positive-degrees`
- `def-effaceable-cohomological-delta-functor-in-positive-degrees`
- `lem-horseshoe-gives-a-short-exact-sequence-after-applying-a-right-exact-functor`
- `def-connecting-map-for-left-derived-functors`
- `lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts`
- `thm-left-derived-functors-form-a-homological-delta-functor`
- `thm-right-derived-functors-form-a-cohomological-delta-functor`
- `prop-natural-transformations-of-base-functors-give-morphisms-of-derived-delta-functors`
- `cor-derived-long-exact-sequence`
- `prop-positive-left-derived-functors-are-effaceable-by-projectives`
- `prop-positive-right-derived-functors-are-effaceable-by-injectives`
- `lem-dimension-shift-for-a-homological-delta-functor-effaced-in-the-middle`
- `lem-dimension-shift-for-a-cohomological-delta-functor-effaced-in-the-middle`
- `lem-extend-a-degree-zero-transformation-through-one-dimension-shift`
- `lem-the-effacement-extension-is-independent-of-the-effacing-morphism`
- `lem-the-effacement-extension-commutes-with-connecting-morphisms`
- `thm-effaceable-homological-delta-functors-are-universal`
- `thm-effaceable-cohomological-delta-functors-are-universal`
- `thm-derived-functors-are-universal-delta-functors`
- `cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic`
- `cor-a-morphism-between-universal-delta-functors-is-determined-in-degree-zero`
- `prop-an-exact-base-functor-has-the-trivial-universal-delta-functor`
- `prop-satellites-give-the-first-derived-functor`
- `rem-universality-is-the-construction-independence-principle`
- `fs-any-sequence-of-functors-with-long-exact-sequences-is-a-delta-functor`
- `fs-effaceability-means-every-positive-value-is-zero`
- `fs-a-degree-zero-natural-transformation-between-delta-functors-always-extends`
- `fs-the-horseshoe-connecting-map-is-independent-without-a-comparison-proof`
- `fs-universality-removes-the-need-for-supplied-resolution-data`

Authored ids on `delta-functors-and-universality-examples`:

- `ex-homology-as-a-homological-delta-functor`
- `ex-the-trivial-delta-functor-of-an-exact-functor`
- `ex-one-dimension-shift-along-a-projective-presentation`
- `ex-one-dimension-shift-along-an-injective-copresentation`
- `ex-extending-a-degree-zero-natural-transformation`
- `cex-a-nonnatural-choice-of-connecting-maps-does-not-form-a-delta-functor`
- `ex-two-universal-delta-functors-and-their-unique-isomorphism`

Provenance rationale:

- Definitions and the source-backed abstract theorems were tagged `literature-derived` at the statement level and `ai-generated` or `ai-altered` at the proof level, because the written proofs are new corpus text while the claims and route follow Grothendieck, Weibel, Stacks, and Sharifi.
- The examples and counterexample were tagged `ai-generated` with `generation.role` set to `example` or `counterexample` where the concrete presentation is new batch text rather than a verbatim source item.
- The remark and false-statement guard items were tagged `ai-altered` at the statement level because they are local explanatory and boundary formulations built from the source-backed page route rather than harvested named propositions.

Canonical precheck repair actually applied:

- Adopted the checker's repaired numbering on the two dimension-shift lemmas by changing the second local step from `2.1` to `1.2`, with the closing step renumbered to `2.1`.
- Rewrote the two universality theorems to use the repository's required induction tags `base`, `ih`, and `discharge-induction`.
- Normalized the authored proof-bearing items so each numbered step is stored as a single tagged paragraph, which is the on-disk form accepted by `tools/precheck.mts`.

Narrowed or dropped claims:

- None. The authored items keep the planned claims, including the narrow first-satellite comparison and the five `fs-` guard items.

Blockers:

- None on current bytes.

Final checks run on the authored bytes:

- `node tools/tsx-run.mjs tools/precheck.mts ...batch-10 item files...`
  Result: `32 checked, 0 failing — all clean`.
- `node tools/content-policy.mjs research/frontier-30-batch-10.pages.json`
  Result: `content-policy: 41 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 746 page(s) with item lists.`
- `node tools/proof-contract.mjs research/frontier-30-batch-10.proof-contracts.json --strict`
  Result: `proof-contract: 0 error(s), 0 warning(s), 32/32 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-30-batch-10.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: `citation-fidelity: 123 citation(s) over 32 authored item(s)` with no missing quotes and no widening candidates found by the tool.
- `node tools/boundary-audit.mjs research/frontier-30-batch-10.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: `TEMPLATE REUSE — none at or above 3 members.` and `CONTRADICTED DISPOSITIONS — none found by the three detectors.`
- `git diff --check -- items library/homological-algebra research/frontier-30-batch-10.proof-contracts.json research/frontier-30-batch-10.notes.md`
  Result: passed cleanly.
