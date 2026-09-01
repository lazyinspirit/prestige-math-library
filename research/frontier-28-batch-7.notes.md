# frontier-28 · Beta · batch-7 notes — `braided-and-symmetric-monoidal-categories`

Run `frontier-28`, batch `7`, one A/B pair, category `category-theory`.
Author: Beta. Session date: Monday, August 31, 2026.

Artifacts owned by this dispatch:

- `research/frontier-28-batch-7.pages.json`
- `research/frontier-28-batch-7.coverage.json`
- this file

Per the dispatch, I did not edit workflow state, published content, another
batch artifact, or plan structure outside batch `7`.

## 1. Control files and live run context

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated batch
prompt `research/frontier-28-dispatch/beta-batch-7.prompt.md`, the seed
manifest `research/frontier-28-batch-7.pages.json`, the run step-0 note
`research/frontier-28-step0-notes.md`, the cited design block in
`research/plan-category-theory-track.md`, the live plan entry in
`research/plan-spec.json`, and the drift-evidence entry for this page in
`research/frontier-28-drift-evidence.json`.

Per `AGENTS.md`, I checked the live controller from disk rather than trusting
any historical resume prose:

- `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`
  reported the live controller as **run `frontier-23` at stage `5-author`**
  on Monday, August 31, 2026.
- The direct `node --import tsx ...` form failed in this checkout with
  `ERR_MODULE_NOT_FOUND` for package `tsx`, so I used the repository wrapper
  instead and recorded that command failure here rather than treating it as
  workflow state.
- `git log --oneline --decorate -5 -- .autopilot research/frontier-28-batch-7.pages.json research/frontier-28-dispatch/beta-batch-7.prompt.md`
  showed only older autopilot history and no batch-local workflow override on
  disk.

I treated that as context to record, not something to repair. The explicit
dispatch and the no-workflow-edits rule mean the correct scope remains the
frontier-28 batch artifacts named above.

## 2. Design control and drift

### Controlling design material

The dispatch points to two design locations in the same document:

- `research/plan-category-theory-track.md:2642`
- `research/plan-category-theory-track.md:2723`

These are not competing amendments. Line `2642` begins the full `MA-15`
development block, and line `2723` is the B-page subsection inside that same
block. I therefore treated the whole `MA-15` section beginning at line `2642`
as controlling, with the later line `2723` read as part of the same control
text rather than as a rival source of instructions.

### Design-vs-spec drift

There is a real prerequisite drift, so I recorded it and followed the spec as
instructed:

- the design block states
  `strictification-and-mac-lanes-coherence-theorem`,
  `monoidal-categories-and-monoidal-functors`,
  `free-groups-and-presentations`,
  `symmetric-groups-and-the-sign-homomorphism`, and
  `conjugacy-and-simplicity-in-the-symmetric-groups`
- `research/plan-spec.json` and the seed manifest instead give the single
  declared prerequisite
  `closed-monoidal-categories-and-the-internal-hom-examples`

I did **not** adjudicate that conflict locally. I followed the spec, and the
notes preserve the disagreement for the run-wide drift machinery.

No order drift was present on the current bytes: the batch manifest and
`plan-spec.json` agree on order `365.029 / 365.03`.

### Live-corpus seam against the older design

The design wanted a local theorem identifying left and right internal homs in
the symmetric case so that `MA-14` would not point forward. On the current
bytes that theorem is already published earlier as
`thm-in-a-symmetric-monoidal-category-the-two-closures-agree` on
`closed-monoidal-categories-and-the-internal-hom`. I therefore did **not**
duplicate it in this batch manifest.

I also renamed two design candidates for schema or clarity reasons:

- the design's item-11 id used the `def-` prefix even though it is a theorem; I
  scaffolded `thm-the-cartesian-swap-braiding-is-a-symmetry`
- the design's `thm-the-centre-of-a-braided-monoidal-category` is ambiguous on
  current bytes because EGNO Section `8.5` uses “center” for the Drinfeld
  center. I scaffolded the narrower
  `thm-the-double-braiding-center-is-symmetric` for the `Z_2` / transparent
  subcategory result actually described in the design

## 3. Scaffold shape and route choices

The scaffold now has:

- `braided-and-symmetric-monoidal-categories` (A): **29 items**
- `braided-and-symmetric-monoidal-categories-examples` (B): **7 items**

No split is needed; the A page is well below the 60-item cap.

### Main route decisions

I kept the page in six layers:

1. braidings, symmetry, unit compatibility, Yang-Baxter, and braided functors
2. cartesian and central examples that make the axioms readable
3. strict braided equivalence, placed **before** the coherence theorems because
   both the symmetric and braided coherence proofs genuinely use strict models
4. the braid-group and braid-category algebra needed for the coherence route
5. the symmetric and braided coherence pair, plus the sharp false-statement
   guardrail that not every braided diagram commutes
6. the monoid-object consequence block

Important local choices:

- I added `thm-the-two-strand-braid-group-is-infinite-cyclic`, because both the
  counterexample page logic and the “braided coherence fails in the symmetric
  form” theorem need an explicit witness that `c^2` can stay nontrivial.
- I kept the design's Artin and Coxeter presentation material on this page, in
  line with the subjects reconciliation note that neither algebra track took
  ownership of those items.
- I made
  `thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one`
  and `thm-braided-coherence-via-underlying-braids` explicit scaffold items even
  though they are locally derived from earlier results rather than carried by a
  single source heading. They are load-bearing for the proof route and are
  recorded as `canonical` coverage rows rather than misattributed to a source
  heading I did not read.
- I did **not** scaffold the design's contingent final theorem about finite
  coproducts of monoid objects. The current source stack already gives a clean,
  dependency-closed endpoint without that extra branch.

## 4. Sources actually read

I harvested three independent treatments for the A page:

1. `https://math.mit.edu/~etingof/egnobookfinal.pdf`
   Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik,
   *Tensor Categories*.
2. `https://www.mscs.dal.ca/~selinger/papers/papers/graphical-bib/public/MacLane-natural-associativity-and-commutativity-1963.pdf`
   Saunders Mac Lane, *Natural Associativity and Commutativity*.
3. `https://arxiv.org/pdf/0804.3587`
   Michael Muger, *Tensor Categories: A Selective Guided Tour*.

This set satisfies the standing requirements on current bytes:

- EGNO is the textbook / TOC-bearing treatment
- Mac Lane `1963` is the eligible primary treatment
- Muger is the independent lecture-note treatment that actually exposes the
  free symmetric category, free braid category, `B_2 ≅ Z`, and `Z_2(C)`
  statements in one open source

### What each source is doing

#### EGNO

- Section `8.1` supplies the modern definition of braiding, the inverse
  braiding exercise, the derived unit compatibility exercise, the braided
  functor definition, the structure-vs-property remark, the Yang-Baxter
  proposition, and the symmetric definition.
- Section `8.2` supplies the cartesian and supervector-space examples, the
  braid category example, and the remark/exercise pair that canonical braided
  composites are indexed by braids.
- Section `8.8` supplies the algebra-in-a-braided-category tensor-product
  construction used for monoid objects.

#### Mac Lane 1963

- Section `4` supplies the symmetric hexagon and the original symmetric
  coherence theorem route.
- Section `5` was re-read because the design explicitly distinguishes the older
  unit-bearing axiom package from the present page's derived-unit route.
  Theorem `5.2` is already published on the previous coherence page, so this
  batch records it as `already-published` rather than duplicating it.

#### Muger

- Section `2` supplies Version I and Version II of symmetric coherence, the
  free symmetric category, the permutation homomorphism to `Aut(X^{⊗ n})`, and
  the statement that product- and coproduct-based tensor categories are
  symmetric.
- Section `4` supplies the Coxeter and Artin presentations, the fact that
  `B_2 ≅ Z`, the “second hexagon from the first by inverse braiding” insight,
  the braid category, the free strict braided category theorem, and the
  `Z_2(C)` center result.

## 5. URL handling and fetch receipts

Runner-local shell networking is unavailable in this checkout:

- `curl` fails with `Could not resolve host`
- direct Node fetches fail with DNS errors

So I could not honestly mint fresh `source-fetch-check --stamp` receipts from
the shell. I therefore handled receipts in the two honest ways already used
elsewhere in this repository:

- I reused exact-URL `fetch_verified` blocks already present on disk for EGNO
  and the recovered Mac Lane `1963` PDF.
- For Muger's arXiv PDF, which had no exact-URL receipt elsewhere in the repo,
  I opened the exact URL directly in the web reader on Monday, August 31, 2026
  and recorded a minimal manual receipt: PDF kind, 57 pages, and the fact that
  the runner's DNS failure prevented a local byte-count fetch.

I did **not** keep any harvested source row for a URL I did not re-open.

## 6. Known limits and authoring risks

- I was not able to re-open the design-named Joyal-Street preprint or the full
  MIT Mac Lane scan directly through the runner-local shell. They therefore do
  **not** appear as harvested source rows in this batch coverage. The page is
  instead backed by sources I actually re-opened and read: EGNO, Mac Lane
  `1963`, and Muger.
- `thm-the-symmetric-group-has-the-coxeter-presentation` is the most delicate
  new proof obligation. The source stack states the presentation cleanly, but
  the local proof will still need a finite normal-form argument rather than a
  handwave to folklore.
- `thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one`
  and `thm-braided-coherence-via-underlying-braids` are honest local derived
  items. Their scaffold is deliberate, but step 5 needs to keep the transport
  across monoidal equivalence explicit so the proof does not silently borrow an
  unread theorem statement from outside the harvested sources.
- The page now uses `double-braiding center` language to avoid confusing the
  transparent subcategory `Z_2(C)` with the later Drinfeld center `Z(C)`. If a
  later owner wants the exact phrase “Muger center”, they should add it by
  title or alias then, not by replacing the current id.

## 7. Validator checklist

Commands to run after writing the scaffold:

```bash
node tools/coverage-checklist.mjs research/frontier-28-batch-7.coverage.json --require-destination
node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json
node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-7.coverage.json
node tools/validate-plan.mjs research/plan-spec.json
git diff --check -- research/frontier-28-batch-7.pages.json research/frontier-28-batch-7.coverage.json research/frontier-28-batch-7.notes.md
```

Validation results are recorded below after execution.

## 8. Validation results

- `node tools/coverage-checklist.mjs research/frontier-28-batch-7.coverage.json --require-destination`
  completed on Monday, August 31, 2026 with no warnings:
  `coverage-checklist: 1 page(s), 49 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json`
  passed:
  `content-policy: 351 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-7.coverage.json`
  passed:
  `source-fetch-check: 3/3 source(s) fetch-verified`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  passed on the current bytes. Its output ended:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 622 page(s) with item lists.`
  The printed `redundant-prereq` lines were the repository's standing global
  advisories, not a batch-7 failure.

- `git diff --check -- research/frontier-28-batch-7.pages.json research/frontier-28-batch-7.coverage.json research/frontier-28-batch-7.notes.md`
  returned no output, so the owned files are diff-clean.

## Step-3 fix pass

I re-read `research/frontier-28-alpha-b-step3-scaffold-review.md` for the
stable Step-3 findings that apply to batch `7`. That review records
`braided-and-symmetric-monoidal-categories` as **sufficient** and assigns **no
batch-7 finding id** to repair or push back on inside the owned scaffold
artifacts.

- Finding id: none for batch `7`
- Disposition: no scaffold change
- Evidence: the Alpha group `b` review marks MA-15 sufficient without a local
  repair row, and the current batch-7 scope decisions still stand on Tuesday,
  September 1, 2026 for EGNO `Exercise 8.8.2(v)`, EGNO `Exercise 8.8.2(vi)`,
  Mac Lane `Theorem 5.1`, and Muger's deferred twist/ribbon discussion in
  `research/frontier-28-alpha-b-scope-decisions.json`
- Changed scaffold record: none; `research/frontier-28-batch-7.pages.json`
  and `research/frontier-28-batch-7.coverage.json` remain unchanged on this
  fix pass

Validator reruns on Tuesday, September 1, 2026:

- `node tools/coverage-checklist.mjs research/frontier-28-batch-7.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 49 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json`
  -> `content-policy: 424 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-7.coverage.json`
  -> `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> passed on the current bytes, ending with the standard `OK` line and only
  the standing repository-wide `redundant-prereq` advisories

## Step-5 authoring

Authored on Tuesday, September 1, 2026:

- A-page items:
  `def-braiding`,
  `def-braided-monoidal-category`,
  `thm-the-inverse-braiding-is-a-braiding`,
  `thm-the-braiding-is-compatible-with-the-unit-constraints`,
  `thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation`,
  `def-symmetric-monoidal-category`,
  `thm-in-the-presence-of-the-symmetry-axiom-one-hexagon-implies-the-other`,
  `def-braided-monoidal-functor`,
  `rem-being-braided-is-a-property-of-a-monoidal-functor`,
  `thm-the-cartesian-swap-braiding-is-a-symmetry`,
  `thm-the-double-braiding-center-is-symmetric`,
  `thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one`,
  `def-braid-group-by-the-artin-presentation`,
  `thm-the-two-strand-braid-group-is-infinite-cyclic`,
  `thm-the-symmetric-group-has-the-coxeter-presentation`,
  `thm-the-braid-group-surjects-onto-the-symmetric-group`,
  `def-the-braid-category`,
  `cex-the-braid-category-is-braided-but-not-symmetric`,
  `thm-symmetric-coherence`,
  `cor-unbracketed-and-unordered-tensor-strings-are-well-defined-in-a-symmetric-monoidal-category`,
  `thm-braided-coherence-fails-in-the-symmetric-form`,
  `fs-every-diagram-built-from-the-associator-and-the-braiding-commutes`,
  `thm-the-braid-category-is-the-free-strict-braided-monoidal-category-on-one-generator`,
  `thm-braided-coherence-via-underlying-braids`,
  `cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree`,
  `rem-the-symmetric-and-braided-coherence-theorems-compare-s-n-with-b-n`,
  `fs-every-braided-monoidal-category-is-equivalent-to-a-strict-commutative-one`,
  `thm-monoid-objects-in-a-braided-monoidal-category-form-a-monoidal-category`,
  `cor-monoid-objects-in-a-symmetric-monoidal-category-form-a-symmetric-monoidal-category`
- B-page items:
  `ex-the-swap-braiding-on-sets`,
  `ex-the-braid-group-on-three-strands`,
  `ex-the-hexagon-checked-for-cartesian-products`,
  `ex-the-sign-braiding-on-supervector-spaces`,
  `ex-the-two-strand-braiding-in-the-braid-category-has-infinite-order`,
  `ex-two-canonical-maps-with-different-underlying-braids`,
  `ex-commutative-monoid-objects-in-sets-are-ordinary-commutative-monoids`
- Page files:
  `library/category-theory/braided-and-symmetric-monoidal-categories.md`
  and
  `library/category-theory/braided-and-symmetric-monoidal-categories-examples.md`
- Proof-contract report:
  `research/frontier-28-batch-7.proof-contracts.json`

All authored pages and item files were kept at `status: draft`, and no
published content, workflow state, plan structure, or another batch artifact
was edited.

### Provenance rationale

- Definitions and standard named results backed directly by EGNO, Mac Lane
  1963, or Muger were tagged `provenance.statement: literature-derived`.
- The two locally shaped coherence consequences
  `thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one`
  and `thm-braided-coherence-via-underlying-braids`, along with the universal
  rephrasings of the two corollaries and the two `fs-` guardrails, were tagged
  `statement: ai-altered` because the exact library phrasing is a faithful
  repackaging of the source route rather than a verbatim source theorem title.
- Authored proofs and verifications were tagged `proof: ai-generated`; the
  definition and remark items use `proof: not-applicable`.

### Narrowed or clarified claims

- `cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree`
  was written in the truthful universal form "agree in every braided monoidal
  category iff the underlying braids agree." The fixed-category reading would
  be too strong.
- `fs-every-braided-monoidal-category-is-equivalent-to-a-strict-commutative-one`
  was written as the claim that every braided monoidal category is braidedly
  equivalent to a strict model with identity braiding. That is the precise
  false slogan blocked by the braid-category witness.
- No manifest item was dropped. No batch-7 scaffold id or page composition was
  changed.

### Validator results

- `node tools/tsx-run.mjs tools/precheck.mts $(cat /tmp/frontier28-batch7-items.txt)`
  initially reported six item-format failures:
  `thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation`,
  `thm-the-double-braiding-center-is-symmetric`,
  `thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one`,
  `cex-the-braid-category-is-braided-but-not-symmetric`,
  `ex-the-sign-braiding-on-supervector-spaces`,
  and
  `ex-commutative-monoid-objects-in-sets-are-ordinary-commutative-monoids`.
  These were canonical precheck-shape issues only: display-math proof rows were
  collapsed to single numbered paragraphs, the strict-braided-equivalence proof
  adopted the checker's suggested numbering, and the invalid `counterexample`
  tag token was removed.
- `node tools/tsx-run.mjs tools/precheck.mts $(cat /tmp/frontier28-batch7-items.txt)`
  rerun after repair:
  `28 checked, 0 failing — all clean`.
- `node tools/proof-contract.mjs research/frontier-28-batch-7.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 28/28 item(s) checked`
- `node tools/content-policy.mjs research/frontier-28-batch-7.pages.json`
  -> `content-policy: 36 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> passed on the current bytes with the standard terminal end-state:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 650 page(s) with item lists.`
  The printed `redundant-prereq` rows were repository-wide advisories, not a
  batch-7 failure.
- `git diff --check -- [authored batch-7 files]`
  returned no output.

### Blockers

None at authoring close. The remaining mathematical risk is qualitative rather
than blocked execution: the Coxeter-presentation proof and the monoid-object
tensor-product proof are concise writeups of standard arguments, so a later
reviewer may still choose to expand them, but the batch-required validators all
passed on Tuesday, September 1, 2026.
