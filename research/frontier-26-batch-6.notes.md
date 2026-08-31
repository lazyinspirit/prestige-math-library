# frontier-26 batch 6 notes - scaffold

Run `frontier-26`, batch `6`, one A/B pair, category `category-theory`.
Author: Beta. Session date: Sunday, August 30, 2026.

Artifacts owned by this batch:

- `research/frontier-26-batch-6.pages.json`
- `research/frontier-26-batch-6.coverage.json`
- this file

No plan structure, workflow state, published content, or another batch artifact
was edited.

## 1. Control files and active-run check

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated task
file `research/frontier-26-beta-6.task.md`, the dispatch prompt
`research/frontier-26-dispatch/beta-batch-6.prompt.md`, the controlling design
block at `research/plan-category-theory-track.md:2448-2541`, the live seed stub
`research/frontier-26-batch-6.pages.json`, and the run-level drift artifact
`research/frontier-26-drift-evidence.json`.

I also checked the active build driver with:

- `node tools/autopilot/bin/autopilot.mts status`

That reported `frontier-26` running on Sunday, August 30, 2026 with
`drift-review` in flight and the scaffold stage not yet closed.

## 2. Design against spec

Recorded here, not adjudicated here.

- The generated task, `research/frontier-26-step0-notes.md`, and the live
  `research/plan-spec.json` agree that the A page is
  `strictification-and-mac-lanes-coherence-theorem` at order `365.025` and the
  B page is its companion at `365.026`.

- There is real page-level `requires` drift. The design block at
  `research/plan-category-theory-track.md:2448-2450` states
  `monoidal-categories-and-monoidal-functors`,
  `universal-properties-and-the-yoneda-lemma`, and `limits-and-colimits`,
  while the live `research/plan-spec.json`, the seed stub, and the generated
  task all declare only `monoidal-categories-and-monoidal-functors-examples`.

- This drift is already visible in `research/frontier-26-drift-evidence.json`,
  whose first record is for this page and whose closure list includes the
  broader design prerequisites. Per the batch brief, I kept the manifest's
  page-level `requires` field equal to the live spec and recorded the conflict
  here instead of resolving it locally.

## 3. Ordering tension and scaffold shape

The final scaffold now has:

- `strictification-and-mac-lanes-coherence-theorem` (A): **22 items**
- `strictification-and-mac-lanes-coherence-theorem-examples` (B): **6 items**

The A page is well below the 60-item split threshold, so no split is owed.

There is one real design-order tension inside the A page. The design prose
lists the canonical-map form of coherence before the strictification block, but
the same design also explicitly chooses the Joyal-Street strictification route
as the authored proof. To keep same-page dependencies backward and to make the
strictification-first route honest, I ordered the manifest as:

1. canonical-map setup and slogan warning
2. binary-word category setup
3. right-module endofunctors and strictification
4. the generic converse theorem
5. the canonical-map coherence theorem and its scope
6. consequences, then the free-category reformulation, then history

The content inventory is unchanged from the design's `22`-item target; only the
page order was repaired to match the page's chosen proof route.

## 4. Source set actually recorded

The coverage ledger records three verified sources:

1. `https://math.mit.edu/~hrm/palestine/maclane-categories.pdf`
2. `https://math.mit.edu/~etingof/egnobookfinal.pdf`
3. `https://www.mscs.dal.ca/~selinger/papers/papers/graphical-bib/public/MacLane-natural-associativity-and-commutativity-1963.pdf`
   with preserved provenance
   `original_url: https://repository.rice.edu/items/055560bd-a742-4571-b34e-c4829c92da16`

This satisfies the standing source rule:

- two independent textbook treatments: Mac Lane *CWM* and EGNO
- one eligible primary treatment: Mac Lane `1963`
- exact headings and per-result dispositions for every harvested row

I also re-opened `https://math.mit.edu/~etingof/tenscat.pdf` in the web reader
as a third independent lecture-note treatment, but I did not add it to the
coverage file. The three recorded sources already back the full scaffold, and
this runtime cannot honestly mint a fresh mechanical `fetch_verified` block for
an exact URL whose stamp is not already present somewhere on disk.

### URL handling notes

- The MIT `maclane-categories.pdf` URL already has a durable exact-URL
  `fetch_verified` block on disk, but the PDF itself is too large for reliable
  direct web-reader opening. I therefore rechecked the chapter titles and page
  numbers against the accessible Google Books table of contents and the
  PDFCoffee HTML mirror while preserving the exact MIT PDF URL and its existing
  fetch receipt.

- The Mac Lane `1963` Rice repository landing page was preserved as
  `original_url`, while the live Selinger-hosted PDF was the full-text source
  actually read in this dispatch. That same live PDF already appears in
  `research/frontier-25-batch-6.coverage.json` with an honest manual
  `fetch_verified` block, which I reused verbatim for the same exact URL.

- The EGNO PDF row reuses the exact `fetch_verified` block already present on
  disk for the same URL.

## 5. Source-backed scope decisions

### Core route

- The page follows the design's chosen Joyal-Street route. The strictification
  block is not decorative: `thm-mac-lane-strictification` and the generic
  converse `thm-a-monoidal-category-equivalent-to-a-strict-one-satisfies-coherence`
  are the load-bearing theorems that carry the authored proof of
  `thm-mac-lane-coherence-in-the-canonical-map-form`.

- I kept the free-word category material, but I made it downstream of the
  strictification proof route rather than upstream of it. On this scaffold the
  free-word theorem is a reformulation and historical cross-check, not the
  authored proof engine.

### Scope boundaries the design insisted on

- The sharp slogan warning is explicit. `rem-every-diagram-commutes-is-false-as-stated`
  and `fs-every-diagram-in-a-monoidal-category-commutes` remain on the A page,
  and the B-page counterexample uses a strict monoidal category with a
  noncanonical endomorphism rather than softening the point.

- Equivalence is kept separate from isomorphism and from skeletal
  representative-choosing. The remark
  `rem-strictification-gives-equivalence-and-never-isomorphism`, the false
  statement about skeletal strictification, and
  `rem-the-choice-cost-of-strictification` together preserve that boundary.

- The page is where unbracketed tensor strings first become legal.
  `thm-unbracketed-tensor-strings-are-well-defined-expressions` therefore
  stays load-bearing and downstream of the coherence theorem, matching the
  prerequisite page's own warning that unbracketed strings were not yet
  defined.

### 1963 material not authored here

- Mac Lane `1963` section `4. Higher Commutativity Laws`, Theorem `4.2`, and
  Theorem `5.1` are real mathematics, but they belong to the later braided and
  symmetric page because they depend on commutativity data and permutations.
  I marked them `deferred` to `braided-and-symmetric-monoidal-categories`
  rather than pretending that this nonsymmetric coherence page owns them.

- Theorem `3.1` and Theorem `5.2` from Mac Lane `1963` are used here only
  historically, through `rem-the-history-of-the-coherence-theorem`. The page
  does not author the original rank-induction route as a second full proof.

## 6. Dependency rationale

The A page is layered as:

1. formal canonical morphisms and the warning about the overstrong slogan
2. the binary-word category and its monoidal structure
3. the right-module endofunctor construction and the strictification theorem
4. the generic converse from equivalence-to-strictness back to coherence
5. the canonical-map coherence theorem, its scope, and the licensing of
   unbracketed tensor strings
6. translation of monoid-object axioms into the strictified notation
7. the free-category reformulation and the history remark
8. the five false-statement guardrails

This preserves the design's real fan-in:

- `thm-mac-lane-coherence-in-the-canonical-map-form` depends on the specific
  strictification theorem and the generic converse
- `thm-unbracketed-tensor-strings-are-well-defined-expressions` depends only
  on coherence, not on handwaving about notation
- `thm-the-monoid-object-axioms-may-be-written-without-associators` depends on
  both the monoid-object definition from the prerequisite page and the new
  coherence license

## 7. Validation results

I ran the scaffold-stage checks required by the batch template:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-26-batch-6.coverage.json`
- `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-*.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-6.coverage.json`

Final results on Sunday, August 30, 2026:

- `coverage-checklist` passed:
  `1` page, `29` harvested results, `0` errors, `0` warnings.

- `content-policy --manifest-only` passed over the live batch manifests:
  `259` scoped items, `0` errors, `0` warnings.

- `source-fetch-check` passed:
  `3/3` source rows carry `fetch_verified`.

- `validate-plan` exited `0` with trailing `OK`. The output includes the
  repository's standing `redundant-prereq` advisories on other pages, but no
  batch-6 page-order, id-resolution, B-page dependency, or cycle failure.

- `git diff --check -- research/frontier-26-batch-6.pages.json research/frontier-26-batch-6.coverage.json research/frontier-26-batch-6.notes.md`
  is clean.

## 8. Outcome

Batch 6 is now source-harvested, spec-aligned at the manifest level, and ready
for the scaffold-stage validator battery. The only material tension left on the
record is the design/spec prerequisite drift already owned by Stage 1's drift
process, plus the local item-order repair needed to keep the design's chosen
strictification route dependency-closed.

## Step-3 fix pass

Reviewing Alpha group `b` report
`research/frontier-26-alpha-b-step3-scaffold-review.md` on Monday, August 31,
2026.

The review's batch-6 direct repair is unlabeled in the markdown, so I preserve
it below as `none (coverage-carrier repair)` rather than inventing a new
finding id. The batch-6 scope-boundary findings do carry stable ids in
`research/frontier-26-alpha-b-scope-decisions.json`, and I preserve those exact
ids here.

- Finding `none (coverage-carrier repair)` disposition: **accepted as already
  satisfied on current bytes**. Evidence: Alpha's batch-6 section says the only
  scaffold defect was an under-harvested coverage ledger; a current-byte audit
  of `research/frontier-26-batch-6.pages.json` against
  `research/frontier-26-batch-6.coverage.json` finds `0` uncovered manifest
  items; and the live coverage ledger's canonical carriers still include the
  A-page items `def-canonical-morphism-between-parenthesised-words`,
  `thm-the-category-of-binary-words-is-monoidal`,
  `rem-the-exact-scope-of-the-coherence-statement`,
  `thm-the-monoid-object-axioms-may-be-written-without-associators`,
  `cor-coherence-follows-from-freeness`,
  `fs-every-diagram-in-a-monoidal-category-commutes`,
  `fs-every-monoidal-category-is-isomorphic-to-a-strict-one`,
  `fs-every-monoidal-category-is-monoidally-equivalent-to-a-skeletal-strict-one`,
  `fs-coherence-says-that-any-two-parallel-morphisms-in-a-monoidal-category-are-equal`,
  and `fs-strictification-requires-the-axiom-of-choice`, together with the
  B-page items
  `ex-the-canonical-map-between-two-bracketings-of-a-five-fold-product`,
  `ex-the-word-category-on-words-of-length-three`,
  `ex-strictification-of-a-cartesian-monoidal-category-computed`,
  `cex-two-formally-distinct-words-that-become-the-same-object`, and
  `ex-a-monoid-object-written-with-and-without-associators`, exactly the batch-6
  carrier set Alpha named. Changed scaffold record:
  `research/frontier-26-batch-6.pages.json` unchanged;
  `research/frontier-26-batch-6.coverage.json` unchanged;
  `research/frontier-26-batch-6.notes.md` appended with this receipt.

## Step-5 authoring

Authoring completed on Sunday, August 30, 2026 for the two owned page files
`library/category-theory/strictification-and-mac-lanes-coherence-theorem.md`
and
`library/category-theory/strictification-and-mac-lanes-coherence-theorem-examples.md`,
the `22` A-page items

- `def-canonical-morphism-between-parenthesised-words`
- `rem-every-diagram-commutes-is-false-as-stated`
- `def-the-category-of-binary-words`
- `thm-the-category-of-binary-words-is-monoidal`
- `def-the-category-of-right-module-endofunctors`
- `thm-the-module-endofunctor-category-is-strict-monoidal`
- `thm-mac-lane-strictification`
- `rem-strictification-gives-equivalence-and-never-isomorphism`
- `thm-a-monoidal-category-equivalent-to-a-strict-one-satisfies-coherence`
- `rem-the-choice-cost-of-strictification`
- `thm-mac-lane-coherence-in-the-canonical-map-form`
- `rem-the-exact-scope-of-the-coherence-statement`
- `thm-unbracketed-tensor-strings-are-well-defined-expressions`
- `thm-the-monoid-object-axioms-may-be-written-without-associators`
- `thm-the-word-category-is-the-free-monoidal-category-on-one-generator`
- `cor-coherence-follows-from-freeness`
- `rem-the-history-of-the-coherence-theorem`
- `fs-every-diagram-in-a-monoidal-category-commutes`
- `fs-every-monoidal-category-is-isomorphic-to-a-strict-one`
- `fs-every-monoidal-category-is-monoidally-equivalent-to-a-skeletal-strict-one`
- `fs-coherence-says-that-any-two-parallel-morphisms-in-a-monoidal-category-are-equal`
- `fs-strictification-requires-the-axiom-of-choice`

and the `6` B-page items

- `ex-the-two-routes-around-the-pentagon-are-equal`
- `ex-the-canonical-map-between-two-bracketings-of-a-five-fold-product`
- `ex-the-word-category-on-words-of-length-three`
- `ex-strictification-of-a-cartesian-monoidal-category-computed`
- `cex-two-formally-distinct-words-that-become-the-same-object`
- `ex-a-monoid-object-written-with-and-without-associators`

All authored items and both page files remain `status: draft`.

Provenance rationale:

- The strictification spine (`def-the-category-of-right-module-endofunctors`,
  `thm-the-module-endofunctor-category-is-strict-monoidal`,
  `thm-mac-lane-strictification`,
  `thm-a-monoidal-category-equivalent-to-a-strict-one-satisfies-coherence`)
  is written against the EGNO/CWM route already recorded in the batch coverage
  ledger.
- The scope warnings and history remarks stay literature-derived because they
  are page-level boundary statements taken directly from Mac Lane, EGNO, and
  the 1963 paper.
- Generated examples, the counterexample, and the free-word corollary carry
  truthful generated or altered provenance and no judge stamp.

Narrowed claims:

- `thm-the-word-category-is-the-free-monoidal-category-on-one-generator` is
  authored in the honest universal-property form "unique up to unique monoidal
  natural isomorphism fixing the generator" rather than as a literal equality
  of strong monoidal functors.
- `cor-coherence-follows-from-freeness` is correspondingly stated in the
  one-generator tensor-power setting that the authored free-word theorem
  actually proves.

Dropped claims: none.

Blockers: none.

Checks run on authored bytes:

- `node tools/tsx-run.mjs tools/precheck.mts items/def-canonical-morphism-between-parenthesised-words.md items/rem-every-diagram-commutes-is-false-as-stated.md items/def-the-category-of-binary-words.md items/thm-the-category-of-binary-words-is-monoidal.md items/def-the-category-of-right-module-endofunctors.md items/thm-the-module-endofunctor-category-is-strict-monoidal.md items/thm-mac-lane-strictification.md items/rem-strictification-gives-equivalence-and-never-isomorphism.md items/thm-a-monoidal-category-equivalent-to-a-strict-one-satisfies-coherence.md items/rem-the-choice-cost-of-strictification.md items/thm-mac-lane-coherence-in-the-canonical-map-form.md items/rem-the-exact-scope-of-the-coherence-statement.md items/thm-unbracketed-tensor-strings-are-well-defined-expressions.md items/thm-the-monoid-object-axioms-may-be-written-without-associators.md items/thm-the-word-category-is-the-free-monoidal-category-on-one-generator.md items/cor-coherence-follows-from-freeness.md items/rem-the-history-of-the-coherence-theorem.md items/fs-every-diagram-in-a-monoidal-category-commutes.md items/fs-every-monoidal-category-is-isomorphic-to-a-strict-one.md items/fs-every-monoidal-category-is-monoidally-equivalent-to-a-skeletal-strict-one.md items/fs-coherence-says-that-any-two-parallel-morphisms-in-a-monoidal-category-are-equal.md items/fs-strictification-requires-the-axiom-of-choice.md items/ex-the-two-routes-around-the-pentagon-are-equal.md items/ex-the-canonical-map-between-two-bracketings-of-a-five-fold-product.md items/ex-the-word-category-on-words-of-length-three.md items/ex-strictification-of-a-cartesian-monoidal-category-computed.md items/cex-two-formally-distinct-words-that-become-the-same-object.md items/ex-a-monoid-object-written-with-and-without-associators.md`
  Result: `20 checked, 0 failing — all clean`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: exit `0`, trailing `OK`, only the standing repo-wide
  `redundant-prereq` advisories remain.
- `node tools/content-policy.mjs research/frontier-26-batch-6.pages.json`
  Result: `28 scoped item(s), 0 error(s), 0 warning(s)`.
- `git diff --check -- library/category-theory/strictification-and-mac-lanes-coherence-theorem.md library/category-theory/strictification-and-mac-lanes-coherence-theorem-examples.md items/def-canonical-morphism-between-parenthesised-words.md items/rem-every-diagram-commutes-is-false-as-stated.md items/def-the-category-of-binary-words.md items/thm-the-category-of-binary-words-is-monoidal.md items/def-the-category-of-right-module-endofunctors.md items/thm-the-module-endofunctor-category-is-strict-monoidal.md items/thm-mac-lane-strictification.md items/rem-strictification-gives-equivalence-and-never-isomorphism.md items/thm-a-monoidal-category-equivalent-to-a-strict-one-satisfies-coherence.md items/rem-the-choice-cost-of-strictification.md items/thm-mac-lane-coherence-in-the-canonical-map-form.md items/rem-the-exact-scope-of-the-coherence-statement.md items/thm-unbracketed-tensor-strings-are-well-defined-expressions.md items/thm-the-monoid-object-axioms-may-be-written-without-associators.md items/thm-the-word-category-is-the-free-monoidal-category-on-one-generator.md items/cor-coherence-follows-from-freeness.md items/rem-the-history-of-the-coherence-theorem.md items/fs-every-diagram-in-a-monoidal-category-commutes.md items/fs-every-monoidal-category-is-isomorphic-to-a-strict-one.md items/fs-every-monoidal-category-is-monoidally-equivalent-to-a-skeletal-strict-one.md items/fs-coherence-says-that-any-two-parallel-morphisms-in-a-monoidal-category-are-equal.md items/fs-strictification-requires-the-axiom-of-choice.md items/ex-the-two-routes-around-the-pentagon-are-equal.md items/ex-the-canonical-map-between-two-bracketings-of-a-five-fold-product.md items/ex-the-word-category-on-words-of-length-three.md items/ex-strictification-of-a-cartesian-monoidal-category-computed.md items/cex-two-formally-distinct-words-that-become-the-same-object.md items/ex-a-monoid-object-written-with-and-without-associators.md research/frontier-26-batch-6.proof-contracts.json research/frontier-26-batch-6.notes.md`
  Result: clean after authoring.

- Finding `3ecd1f20c9be242313c6ea2493aae424c44f10663d4909cd825b837bf28fb9df`
  disposition: **accepted; deferred scope stands unchanged**. Evidence: the
  exact source URL
  `https://www.mscs.dal.ca/~selinger/papers/papers/graphical-bib/public/MacLane-natural-associativity-and-commutativity-1963.pdf`
  still opens in the web reader on Monday, August 31, 2026; the current
  coverage row still records `4. Higher Commutativity Laws` as `deferred` to
  `braided-and-symmetric-monoidal-categories`; and the live manifest still
  follows the MA-13 nonsymmetric-coherence boundary rather than importing
  commutativity constraints or permutation data. Changed scaffold record:
  `research/frontier-26-batch-6.coverage.json` unchanged;
  `research/frontier-26-batch-6.notes.md` appended with this receipt.

- Finding `536e7397b604fc827a4c580eb65f003a9b22f7fb93b2bc2dcfbdfc84895cc991`
  disposition: **accepted; deferred scope stands unchanged**. Evidence: the
  same exact Mac Lane `1963` PDF still opens on Monday, August 31, 2026; its
  current coverage row still records `Theorem 5.1` as `deferred` to
  `braided-and-symmetric-monoidal-categories`; and the live scaffold still uses
  Mac Lane `1963` here only for the pentagon example and the history remark,
  not for a second symmetric-data coherence route. Changed scaffold record:
  `research/frontier-26-batch-6.coverage.json` unchanged;
  `research/frontier-26-batch-6.notes.md` appended with this receipt.

- Finding `8c2939bc2bbf8e66a0287548adf18e3d171f87bb3e22789d68eb5838047bb6bb`
  disposition: **accepted; deferred scope stands unchanged**. Evidence: the
  same exact Mac Lane `1963` PDF still opens on Monday, August 31, 2026; its
  current coverage row still records `Theorem 4.2` as `deferred` to
  `braided-and-symmetric-monoidal-categories`; and the live scaffold still
  keeps reordering, braidings, and commutativity-bearing coherence on the later
  braided page rather than collapsing that boundary into batch `6`. Changed
  scaffold record: `research/frontier-26-batch-6.coverage.json` unchanged;
  `research/frontier-26-batch-6.notes.md` appended with this receipt.

Validation rerun on Monday, August 31, 2026:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-26-batch-6.coverage.json`
  -> `coverage-checklist: 1 page(s), 44 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-*.pages.json`
  -> `content-policy: 440 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the repository's standing `redundant-prereq` advisories
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-6.coverage.json`
  -> `source-fetch-check: 3/3 source(s) fetch-verified`
