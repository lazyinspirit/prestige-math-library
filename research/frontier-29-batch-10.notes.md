# frontier-29 · Beta · batch-10 notes — `duality-and-rigidity-in-monoidal-categories`

Run `frontier-29`, batch `10`, one A/B pair, category `category-theory`.
Author: Beta. Session date: Wednesday, September 2, 2026.

Artifacts owned by this dispatch:

- `research/frontier-29-batch-10.pages.json`
- `research/frontier-29-batch-10.coverage.json`
- this file

Per the dispatch, I did not edit workflow state, published content, another
batch artifact, or plan structure outside batch `10`.

## 1. Control files and live run context

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated batch
prompt `research/frontier-29-dispatch/beta-batch-10.prompt.md`, the seed
manifest `research/frontier-29-batch-10.pages.json`, the run step-0 note
`research/frontier-29-step0-notes.md`, the cited design block in
`research/plan-category-theory-track.md`, the live plan entry in
`research/plan-spec.json`, the drift-evidence entry for this page in
`research/frontier-29-drift-evidence.json`, and the Alpha drift note
`research/frontier-29-alpha-step0-drift.md`.

Per `AGENTS.md`, I checked the live controller from disk rather than trusting
historical resume prose:

- `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`
  reported the live controller as **run `frontier-23` at stage `5-author`**
  on Wednesday, September 2, 2026, with `author-batch-10` listed in flight and
  batch-10 author artifacts still missing.
- `git log --oneline --decorate -5 -- .autopilot research/frontier-29-batch-10.pages.json research/frontier-29-dispatch/beta-batch-10.prompt.md`
  showed only older autopilot history and no batch-local workflow override on
  disk.

I treated that as context to record, not something to repair. The explicit
dispatch and the no-workflow-edits rule still make the correct scope the three
batch-10 artifacts named above.

## 2. Design control and drift

### Controlling design material

The dispatch points to two design locations in the same document:

- `research/plan-category-theory-track.md:2754`
- `research/plan-category-theory-track.md:2831`

These are not rival amendments. Line `2754` begins the full `MA-16` page block,
and line `2831` is the B-page subsection nested inside that same block. I
therefore treated the whole `MA-16` section beginning at line `2754` as
controlling, with the later line read as the companion-page subsection rather
than as a competing redesign.

### Design-vs-spec drift

There is a real prerequisite mismatch between the design text and the seed
manifest / `plan-spec` entry:

- the design block requires
  `braided-and-symmetric-monoidal-categories`,
  `strictification-and-mac-lanes-coherence-theorem`,
  `adjunctions-units-and-counits`,
  `abelian-categories`, and
  `dual-spaces-bilinear-forms-and-inertia`
- `research/plan-spec.json` and the seed manifest instead give the single
  declared prerequisite `braided-and-symmetric-monoidal-categories-examples`

Per the batch prompt, I did **not** adjudicate that locally. I followed the
spec and recorded the disagreement here for the run-wide drift machinery.

`research/frontier-29-alpha-step0-drift.md` nevertheless records
`duality-and-rigidity-in-monoidal-categories` as `VERDICT: no-drift`, because
the live closure already reaches the whole design stack. I preserved both facts:
the closure may already contain the pages, but the batch-level spec and the
design still disagree on the explicit `requires` line.

No order drift was present on current bytes: the seed manifest and
`plan-spec.json` agree on orders `365.031` and `365.032`.

## 3. Scaffold shape and route choices

The scaffold now has:

- `duality-and-rigidity-in-monoidal-categories` (A): **37 items**
- `duality-and-rigidity-in-monoidal-categories-examples` (B): **7 items**

No split is needed; the A page stays well below the 60-item cap.

### Main route decisions

I kept the design's overall route intact:

1. left and right dual data, with the side-convention warning made explicit
2. uniqueness and adjunction consequences of duality
3. rigidity, finite-dimensional vector spaces, and the nonrigid infinite-dimensional witness
4. duals of morphisms, the anti-monoidal duality functor, and the double dual
5. rigidity plus braiding via the Drinfeld morphism
6. the trace / pivotal / spherical ladder, with the design's correction that
   bare braidings do not define traces
7. twist and ribbon structure, followed by the boundary remark that rigidity is
   still weaker than EGNO's tensor-category hypotheses

Two load-bearing design refinements became separate scaffold items rather than
being hidden inside adjacent prose:

- `thm-left-duality-is-a-contravariant-antimonoidal-functor`
  The design's item on duals of morphisms also wanted functoriality and the
  reverse-order tensor law. Splitting that proof obligation out keeps
  `thm-the-double-dual-is-a-monoidal-functor` dependency-closed.
- `rem-pivotal-and-spherical-structures-vary-by-monoidal-automorphisms-of-the-identity`
  The design explicitly used EGNO Exercise `4.7.16` to justify that the
  dimension depends on the chosen pivotal structure. Making that dependence a
  named scaffold item keeps the final false-statement guard source-backed.

I also broadened the design's contingent nontriviality witness into
`cex-left-and-right-duals-and-double-duals-need-not-collapse`, because EGNO
Remark `2.10.9` couples both warnings. The authoring step must either supply
one checked witness that genuinely covers the stated failure or downgrade the
item to a recorded remark instead of inventing a counterexample.

## 4. Sources actually read

I harvested three independent treatments for the A page:

1. `https://math.mit.edu/~etingof/egnobookfinal.pdf`
   Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik,
   *Tensor Categories*.
2. `https://arxiv.org/pdf/0804.3587`
   Michael Muger, *Tensor Categories: A Selective Guided Tour*.
3. `https://www.researchgate.net/publication/231966472_Traced_monoidal_categories`
   Andre Joyal, Ross Street, and Dominic Verity,
   *Traced monoidal categories*.

This satisfies the standing source requirement on current bytes:

- EGNO is the textbook / TOC-bearing treatment
- Muger is the independent lecture-note treatment
- Joyal-Street-Verity is the eligible primary paper used for the canonical
  trace and tortile/ribbon route after the design-named 1986 preprint could not
  be recovered live

### What each source is doing

#### EGNO

- Section `2.10` supplies the left/right dual definitions, the zig-zag data,
  dual uniqueness, the endofunctor-adjunction comparison, the tensoring
  adjunctions, rigidity, the nonrigid infinite-dimensional example, and the
  monoidal-functor isomorphism theorem under rigidity.
- Definitions `4.1.1` and `4.2.3` fix the exact boundary between bare rigidity
  and the stronger tensor / multitensor hypotheses.
- Section `4.7` supplies the categorical trace, pivotal and spherical
  structures, the basic trace identities, the exact-sequence additivity theorem
  with its missing hypotheses, the tensor-category / Grothendieck-ring material
  that is deferred, and the dependence of pivotal data on automorphisms of the
  identity.
- Sections `8.9` and `8.10` supply the Drinfeld morphism, twists, ribbon
  structure, and the equivalence between twists and Drinfeld-type pivotal
  structures.

#### Muger

- Section `1.5` supplies an independent treatment of duals, rigid / autonomous
  terminology, uniqueness, the reverse-order tensor law on duals, and the
  warning that left/right duals and double duals need not collapse in general.
- Section `2` supplies a second treatment of trace, dimension, and twists in
  the symmetric case, including the finite-dimensional vector-space examples
  that make the B page concrete.

#### Joyal-Street-Verity

- The introduction and Section `3` supply the primary-source statement that
  tortile / ribbon monoidal structure yields a canonical trace, which supports
  the design's insistence that bare braiding is still not enough.
- Section `2` was read as well, but recorded as `out-of-scope` because this
  page is not building the full traced-monoidal-category axiomatics.

## 5. URL handling and source recovery

The exact EGNO URL already had a byte/hash `fetch_verified` block on disk, and I
re-opened that same live URL in the web reader while preparing this batch.

For the two sources without exact local byte receipts on the current runner, I
used honest `web-open` verification records instead of claiming shell-side fetch
stamps I did not produce:

- Muger's arXiv PDF was opened directly in the web reader on Wednesday,
  September 2, 2026 and recorded as a 57-page PDF.
- Joyal-Street-Verity was opened directly in the web reader on Wednesday,
  September 2, 2026 as a full-text HTML preview with section headings and body
  text.

The design-named Joyal-Street 1986 preprint URL
`http://science.mq.edu.au/~street/JS1.pdf` was **not** reader-openable on the
current date, and a live same-text copy was not recoverable in this
environment. I therefore replaced that source role with the later live
Joyal-Street-Verity paper and preserved the failed original URL as provenance in
the coverage record instead of attributing unread mathematics to the dead link.

I did **not** record the design-named MIT `18.769` notes as a harvested source,
because I did not recover a stable direct file URL for them in this
environment. The independent-source requirement was still met by EGNO, Muger,
and Joyal-Street-Verity.

## 6. Known limits and authoring risks

- `cex-left-and-right-duals-and-double-duals-need-not-collapse` remains
  contingent exactly as the design instructed. If the authoring step cannot
  verify a concrete witness, it must become a recorded remark rather than a
  fabricated counterexample.
- `thm-a-braided-rigid-category-has-a-drinfeld-morphism` and
  `thm-a-twist-on-a-braided-rigid-category-is-the-same-thing-as-a-pivotal-structure-of-drinfeld-type`
  are source-backed, but the authoring step still needs the actual derivations
  to close. If the Drinfeld block does not close, the design requires the drop
  to be recorded as a block rather than silently patched over.
- `rem-the-exact-sequence-additivity-of-trace-and-its-missing-hypotheses`
  deliberately keeps EGNO Proposition `4.7.5` at the exact multitensor-category
  strength. The scaffold does not broaden that source theorem to arbitrary rigid
  abelian monoidal categories.
- `rem-rigidity-alone-does-not-make-a-tensor-category` is a boundary item, not
  a license to import fusion, multifusion, modular, or Perron-Frobenius results
  into this page.

## 7. Validator checklist

Commands to run after writing the scaffold:

```bash
node tools/coverage-checklist.mjs research/frontier-29-batch-10.coverage.json --require-destination
node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-10.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-29-batch-10.coverage.json --out /tmp/frontier-29-batch-10-url-liveness.json --recover --fail-on-dead
git diff --check -- research/frontier-29-batch-10.pages.json research/frontier-29-batch-10.coverage.json research/frontier-29-batch-10.notes.md
```

Validation results are recorded below after execution.

## 8. Validation results

- `node tools/coverage-checklist.mjs research/frontier-29-batch-10.coverage.json --require-destination`
  completed on Wednesday, September 2, 2026 with no warnings:
  `coverage-checklist: 1 page(s), 82 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`
  passed:
  `content-policy: 513 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  ended with the standard repo-wide success tail:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 650 page(s) with item lists.`
  It also printed the standing note that `643` planned pages still carry no item list and the long-standing repo-wide `redundant-prereq` warnings unrelated to batch `10`.

- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-10.coverage.json`
  passed:
  `source-fetch-check: 3/3 source(s) fetch-verified`.

- `node tools/url-sweep.mjs --coverage research/frontier-29-batch-10.coverage.json --out /tmp/frontier-29-batch-10-url-liveness.json --recover --fail-on-dead`

## Step-5 authoring

Authored ids:

- A-page items: `def-left-dual-and-right-dual-object`, `def-the-zig-zag-identities`, `rem-which-side-the-word-left-refers-to`, `thm-a-left-dual-of-an-object-has-that-object-as-a-right-dual`, `thm-the-unit-is-self-dual`, `thm-reversing-the-tensor-product-exchanges-left-and-right-duals`, `thm-duals-are-unique-up-to-a-unique-compatible-isomorphism`, `thm-duality-yields-adjunctions-of-tensoring-functors`, `thm-a-dual-object-in-the-endofunctor-category-is-an-adjoint-functor`, `cor-a-second-proof-that-adjoints-are-unique`, `def-rigid-object-and-rigid-monoidal-category`, `cex-not-every-monoidal-category-is-rigid`, `thm-finite-dimensional-vector-spaces-are-rigid`, `def-the-dual-of-a-morphism`, `thm-left-duality-is-a-contravariant-antimonoidal-functor`, `thm-the-double-dual-is-a-monoidal-functor`, `cex-left-and-right-duals-and-double-duals-need-not-collapse`, `thm-in-a-rigid-category-every-morphism-of-monoidal-functors-is-an-isomorphism`, `thm-a-braided-rigid-category-has-a-drinfeld-morphism`, `def-the-categorical-trace-of-a-morphism-into-the-double-dual`, `rem-what-is-needed-before-a-trace-can-be-written`, `def-pivotal-structure`, `def-the-dimension-of-an-object-relative-to-a-pivotal-structure`, `def-spherical-structure`, `rem-pivotal-and-spherical-structures-vary-by-monoidal-automorphisms-of-the-identity`, `thm-in-a-spherical-category-the-left-and-right-traces-agree`, `thm-basic-properties-of-the-categorical-trace`, `rem-the-exact-sequence-additivity-of-trace-and-its-missing-hypotheses`, `def-twist-and-ribbon-structure`, `thm-a-twist-on-a-braided-rigid-category-is-the-same-thing-as-a-pivotal-structure-of-drinfeld-type`, `rem-rigidity-alone-does-not-make-a-tensor-category`, `fs-a-trace-can-be-defined-for-an-endomorphism-in-any-monoidal-category`, `fs-a-braiding-suffices-to-define-a-trace`, `fs-left-and-right-duals-of-an-object-are-isomorphic`, `fs-every-monoidal-category-is-rigid`, `fs-the-left-and-right-traces-always-agree`, `fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure`.
- B-page items: `ex-the-dual-of-a-finite-dimensional-vector-space-as-a-categorical-dual`, `ex-the-zig-zag-identities-checked-in-finite-dimensional-vector-spaces`, `ex-the-categorical-trace-of-a-linear-endomorphism-is-its-matrix-trace`, `ex-the-dimension-of-a-vector-space-is-its-linear-dimension`, `cex-an-infinite-dimensional-vector-space-has-no-dual-object`, `ex-an-adjunction-read-as-a-duality-of-endofunctors`, `ex-a-symmetric-monoidal-category-in-which-every-object-is-self-dual`.
- Pages: `library/category-theory/duality-and-rigidity-in-monoidal-categories.md` and `library/category-theory/duality-and-rigidity-in-monoidal-categories-examples.md`.

Provenance rationale:

- The page spine, definitions, and the trace / pivotal / ribbon ladder remain literature-derived from the harvested EGNO and Muger material, with the exact-sequence trace remark recorded as `proved_here: false` because the page does not build the multitensor-category proof environment used by EGNO Proposition `4.7.5`.
- `cor-a-second-proof-that-adjoints-are-unique` is kept truthfully `ai-generated` with `generation.role: direct-corollary`; nothing depends on it.
- The false statements are `ai-altered` or `ai-generated` because they package page-local refutations of common overstatements using the authored theorems and the explicit witnesses on disk.

Narrowed or boundary-sensitive claims:

- `thm-a-braided-rigid-category-has-a-drinfeld-morphism` now states the Drinfeld morphism in general braided rigid categories, but records invertibility only at the braided tensor-category strength actually supplied by EGNO Proposition `8.10.6`.
- `def-spherical-structure`, `thm-in-a-spherical-category-the-left-and-right-traces-agree`, and `thm-a-twist-on-a-braided-rigid-category-is-the-same-thing-as-a-pivotal-structure-of-drinfeld-type` are written at the tensor-category strength of the harvested EGNO statements rather than silently widening them to every rigid monoidal category.
- No planned item was dropped. The noncollapse witness closed using the rigid monoidal subcategory of `End(\mathbb Z)` generated by the adjoint string around the doubling functor.

Blockers:

- None remained after authoring. The only proof-contract / validator repairs needed were canonical precheck repairs to step stratification and missing `Facts & Assumptions` blocks on first draft bytes.

Checks run on the written bytes:

- `node tools/tsx-run.mjs tools/precheck.mts ...` over all 30 proof-bearing batch items: `30 checked, 0 failing`.
- `node tools/validate-plan.mjs research/plan-spec.json`: passed with the standard terminal `OK` line and only the repository's standing `redundant-prereq` advisories outside this batch.
- `node tools/content-policy.mjs research/frontier-29-batch-10.pages.json`: `content-policy: 44 scoped item(s), 0 error(s), 0 warning(s)`.
- `research/frontier-29-batch-10.proof-contracts.json` written to reflect the final precheck-clean proof steps and cited fact labels.
  failed in this runner environment, not because the citations were shown dead in
  the web reader, but because shell-side DNS resolution is unavailable:
  `url-sweep: 0/3 live; 3 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-29-batch-10-url-liveness.json`
  with one row each of
  `curl: (6) Could not resolve host: arxiv.org`,
  `curl: (6) Could not resolve host: math.mit.edu`, and
  `curl: (6) Could not resolve host: www.researchgate.net`.
  The emitted JSON also records the superseded provenance URL
  `http://science.mq.edu.au/~street/JS1.pdf`.

- `git diff --check -- research/frontier-29-batch-10.pages.json research/frontier-29-batch-10.coverage.json research/frontier-29-batch-10.notes.md`
  returned cleanly with no whitespace or patch-format errors.

## Step-3 fix pass

Date: Wednesday, September 2, 2026.

- Stable review file checked:
  `research/frontier-29-alpha-a-step3-scaffold-review.md`.

- Finding id: none for batch `10`.
  Disposition: no scaffold repair applied and no pushback required.
  Evidence: the Alpha group `a` review records
  `duality-and-rigidity-in-monoidal-categories` as **sufficient**, states that
  "No in-scope scaffold repair was required," and gives the batch-10 page note
  "MA-16 ceiling on traced/tensor-category enrichments is enforced." That means
  there is no numbered batch-local defect to apply or reject inside the owned
  scaffold artifacts on current bytes.
  Changed scaffold record: this notes file only. No edits were made to
  `research/frontier-29-batch-10.pages.json` or
  `research/frontier-29-batch-10.coverage.json` in this fix pass.

- Validator reruns on Wednesday, September 2, 2026:
  `node tools/coverage-checklist.mjs research/frontier-29-batch-10.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 82 harvested result(s), 0 error(s), 0 warning(s)`.
  `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`
  -> `content-policy: 753 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass on the current bytes with the standing repository-wide
  `redundant-prereq` advisories only; final line:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 650 page(s) with item lists.
  ```
