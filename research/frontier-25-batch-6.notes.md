# frontier-25 batch 6 notes - scaffold

Run `frontier-25`, batch `6`, one A/B pair, category `category-theory`.
Author: Beta-6. Session date: Sunday, August 30, 2026.

Artifacts owned by this batch:

- `research/frontier-25-batch-6.pages.json`
- `research/frontier-25-batch-6.coverage.json`
- this file

No plan structure, workflow state, published content, or another batch artifact
was edited.

---

## 1. Control files and active-run check

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated task
file `research/frontier-25-beta-6.task.md`, the dispatch prompt
`research/frontier-25-dispatch/beta-batch-6.prompt.md`, and the cited design
anchors in `research/plan-category-theory-track.md`.

I also checked the live autopilot state with:

- `node tools/autopilot/bin/autopilot.mts status`

That reported `frontier-25` running, with `drift-review` in flight and the
scaffold stage not yet started.

---

## 2. Controlling design and design/spec drift

### Controlling design material

The dispatch cites:

- `research/plan-category-theory-track.md:2338`
- `research/plan-category-theory-track.md:2418`

These are not competing design blocks. Line `2338` begins the `MA-12` A-page
block, and line `2418` is the B-page subsection inside the same `MA-12` unit.
I treated the whole `MA-12` block, together with its later trap lines at
`2433-2440`, as the controlling design text.

The important control decisions taken from that block are:

- keep the bracketing discipline explicit: no unbracketed tensor strings before
  `MA-13`
- separate reverse and opposite monoidal categories immediately
- keep the lax / strong / strict distinction in one item, and never use the
  bare phrase `monoidal functor` as an unqualified definition
- treat Kelly historically only through EGNO's attribution, not as a read
  primary source
- make the `Ab` / module branch contingent on the already-published tensor page
- drop the pointed-set smash-product theorem unless a published pointed-set home
  really exists on disk

### Design/spec drift

There is real page-level drift and I did not adjudicate it locally.

The design block states page prerequisites:

- `limits-and-colimits`
- `categories-functors-and-natural-transformations`
- `adjunctions-units-and-counits`
- `tensor-products-of-modules` as a contingent external prerequisite

The live `research/plan-spec.json` entry and the seed batch stub instead say:

- `the-diagram-lemmas-in-an-abelian-category-examples`

The design also says the old exact-sequences edge was dropped; the spec still
routes through the already-spliced abelian-category chain.

Per the dispatch, I kept the spec value in the manifest's page-level `requires`
field and recorded the disagreement here instead of choosing a side inside the
batch. Order agrees: both design and spec place the A page at `365.023` and the
B page at `365.024`.

---

## 3. Scaffold shape and page decisions

The scaffold now has:

- `monoidal-categories-and-monoidal-functors` (A): **38 items**
- `monoidal-categories-and-monoidal-functors-examples` (B): **8 items**

The A page is well below the 60-item split threshold, so no split is proposed.

Key design decisions preserved:

- `def-monoidal-category` states only the pentagon and triangle axioms
- `rem-the-associator-runs-the-other-way-in-mac-lane` is kept as a dedicated
  orientation warning
- the unit-redundancy theorems are explicit before any later coherence page can
  cite them
- the endofunctor / monad comparison keeps the smallness hypothesis in the
  theorem statement, not hidden in prose
- `def-lax-strong-and-strict-monoidal-functor` carries all three notions in one
  place
- `def-parenthesised-tensor-word` and
  `rem-unbracketed-tensor-strings-are-not-yet-defined` keep the page from
  silently spending coherence early

Deliberate scope decision:

- I did **not** scaffold `thm-pointed-sets-are-monoidal-under-the-smash-product`
  because the design explicitly made it contingent on a published pointed-set
  home, and there is still no such home on disk. I recorded that omission in
  the coverage ledger's canonical section rather than pretending the item can be
  authored honestly today.

I kept the `Ab` / module branch because `library/abstract-algebra/tensor-products-of-modules.md`
is already published in this checkout.

---

## 4. Source set actually recorded

Only the A page needs a coverage ledger. I recorded four sources:

1. `https://math.mit.edu/~hrm/palestine/maclane-categories.pdf`
2. `https://www.mscs.dal.ca/~selinger/papers/papers/graphical-bib/public/MacLane-natural-associativity-and-commutativity-1963.pdf`
3. `https://math.mit.edu/~etingof/egnobookfinal.pdf`
4. `https://emilyriehl.github.io/files/context.pdf`

This satisfies the standing source requirement:

- at least two independent treatments
- three are textbooks / monographs and one is the primary 1963 paper
- the primary historical/category-theory treatment is now recorded directly

### Why these four sources

They are enough to back the actual scaffold without copying unstamped source
rows from the broader track research:

- Mac Lane `1963` directly backs
  `rem-mac-lanes-original-conditions-and-what-became-of-them` with the exact
  five-condition Theorem `5.2` the design requires
- Mac Lane *CWM* covers the original monoidal-category, monad, strictness, and
  monoidal-functor chapters the design names
- EGNO gives the conventions this library follows and directly names the unit
  redundancies, strictness theorem, coherence theorem, and monoidal-functor
  structure
- Riehl gives the clean modern source for the monad-as-endofunctor-category
  monoid remark under a legitimate functor-category convention

### Design sources still not copied into this batch coverage

The design discussion also names:

- Etingof et al., MIT `18.769` lecture notes
- Joyal-Street, `Braided monoidal categories`
- Kelly's 1964 coherence note

I did not copy those into this batch coverage ledger because the repaired batch
already has dependency-closed backing for every scaffolded item, and this shell
still cannot mint fresh mechanical `source-fetch-check --stamp` receipts for
new URLs. The scaffold does not lose core page mathematics from that choice:

- the Kelly attribution is carried only through EGNO, exactly as the design
  requires
- the strictness and coherence theorems are deferred to `MA-13`
- the lax / strong naming split is recorded as a page-level canonical result,
  while the actual monoidal-functor structure still rests on CWM and EGNO
- the exact original-1963 reduction is now harvested directly from the Mac Lane
  paper rather than left as an unsupported canonical remark

---

## 5. URL verification and source-side handling

### What was rechecked in the web reader

I rechecked the four recorded URLs in the web reader during this dispatch:

- `https://www.mscs.dal.ca/~selinger/papers/papers/graphical-bib/public/MacLane-natural-associativity-and-commutativity-1963.pdf`
  opened directly as a 19-page PDF. I re-read the section heading `5. Higher
  Identity Laws` on PDF page `14` / paper p. `41`, the displayed conditions
  `(5.2)` and `(5.3)` plus Theorem `5.1` on PDF page `15` / paper p. `42`, and
  condition `(5.6)`, the two conditions `(5.7)`, and Theorem `5.2` on PDF page
  `16` / paper p. `43`. I separately rechecked the pentagon condition `(3.5)`
  on PDF page `6` / paper p. `33`.

- `https://math.mit.edu/~etingof/egnobookfinal.pdf` opened directly as a
  362-page PDF and exposed the Chapter 2 contents plus the exact Definition
  `2.4.1`, Definition `2.4.8`, Theorem `2.8.5`, and Exercise `2.9.1` range
  used here.
- `https://emilyriehl.github.io/files/context.pdf` opened directly as a
  298-page PDF and exposed the Chapter 5 contents plus `5.1 Monads from
  adjunctions`, which is the relevant range for the monad-as-monoid remark.
- The direct MIT Mac Lane scan is too large for reliable web-reader opening,
  but the MIT directory index still exposes `maclane-categories.pdf` as a live
  file and the chapter headings were rechecked against the accessible PDFCoffee
  HTML mirror while the recorded URL and fetch receipt remain the exact MIT PDF
  string.

### Receipt handling

This shell cannot resolve public hosts:

- `node fetch(...)` fails with `ENOTFOUND`
- `curl` fails with `Could not resolve host`

So I could not run `source-fetch-check --stamp` honestly for fresh network
receipts. Instead:

- for the new Mac Lane `1963` row I recorded a minimal manual
  `fetch_verified` block that says only what was actually verified in this turn:
  the web-reader-openable PDF kind and page count, plus the dispatch's supplied
  local full-body fetch fact of HTTP `200`, `application/pdf`, and `7,206,775`
  bytes on Sunday, August 30, 2026
- for the existing exact URLs already present on this batch I reused
  `fetch_verified` blocks from the repository:

- Riehl from `research/frontier-19-batch-9.coverage.json`
- EGNO from `research/frontier-22-batch-8.coverage.json`
- Mac Lane from `research/frontier-23-batch-8.coverage.json`

No byte counts or hashes were fabricated.

---

## 6. Dependency rationale

The A page is layered in six bands:

1. basic monoidal-category definitions, orientation, and the independence guard
2. where monoidal categories come from: finite products, tensor-unit
   endomorphisms, endofunctor categories, monoid objects, modules, abelian
   groups, modules over a ring, and the poset example
3. Kelly's unit redundancies
4. lax / strong / strict monoidal functors, monoidal natural transformations,
   and the monoid-object transport theorem
5. bracketing discipline
6. the false-statement guardrail set

This keeps:

- the monad comparison downstream of the endofunctor-category theorem
- the ring and module consequences downstream of the `Ab` tensor theorem
- the false statements downstream of the precise item that refutes each one
- the later coherence page genuinely necessary for unbracketed tensor strings

---

## 7. Validation results

The scaffold-stage checks for this batch were:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-25-batch-6.coverage.json`
- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-6.coverage.json`
- `node tools/validate-plan.mjs research/plan-spec.json`

Outputs on Sunday, August 30, 2026:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-25-batch-6.coverage.json`
  -> `coverage-checklist: 1 page(s), 43 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-6.coverage.json`
  -> `source-fetch-check: 3/3 source(s) fetch-verified`

- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  -> `content-policy: 415 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the repository's standing `redundant-prereq` warnings and
  no batch-6 unresolved id, forward-reference, B-leaf, or undeclared-prereq
  failure

- `git diff --check -- research/frontier-25-batch-6.pages.json research/frontier-25-batch-6.coverage.json research/frontier-25-batch-6.notes.md`
  -> clean

No batch-local validator repair was needed after the first write.

---

## 8. Outcome

Batch 6 is now scaffolded, source-harvested, spec-recorded, and clean on the
required step-1 validator battery. The only deliberate omission is the pointed
set smash-product theorem, which remains recorded as a contingent gap because
this checkout still lacks a published pointed-set home.

## Step-3 fix pass

### C6-1

- Disposition: **explicit pushback; insufficiency preserved.** I did not alter
  `research/frontier-25-batch-6.coverage.json` to add an unstamped Mac Lane
  1963 row, and I did not narrow
  `rem-mac-lanes-original-conditions-and-what-became-of-them` away from the
  design's exact Theorem `5.2` brief.
- Evidence:
  - `research/plan-category-theory-track.md:2365` still makes
    `rem-mac-lanes-original-conditions-and-what-became-of-them` specifically a
    remark about Mac Lane 1963 Theorem `5.2` and its five-condition list, and
    `research/plan-category-theory-track.md:2425` still names the exact source
    as *Natural Associativity and Commutativity*, Rice Univ. Studies `49` (4)
    (1963), pp. `28-46`.
  - The live source list in `research/frontier-25-batch-6.coverage.json` still
    contains only three rows: `maclane-categories.pdf`, `egnobookfinal.pdf`,
    and `context.pdf`. No batch-local coverage row exists for the exact 1963
    paper.
  - Repository-wide search on the current bytes still finds the 1963 paper only
    in the design and notes material, with no reusable stamped coverage row for
    `http://hdl.handle.net/1911/62865`,
    `https://scholarship.rice.edu/handle/1911/62865`, or
    `https://repository.rice.edu/items/055560bd-a742-4571-b34e-c4829c92da16`.
  - Shell-side fetch checks on Sunday, August 30, 2026 still fail with
    `ENOTFOUND` for all three exact/source-equivalent Rice URLs above. Web
    verification in this pass recovered only secondary metadata references to
    those URLs, not a reader-openable copy of the paper text that could justify
    a new harvested source row.
  - Adding a new coverage row without a genuine full-text fetch receipt would
    violate this batch's URL-discipline requirement. The Alpha Step-3 finding
    therefore still stands on the current bytes.
- Changed scaffold record:
  - `research/frontier-25-batch-6.pages.json`: no delta in this pass; the
    manifest remains structurally closed and unchanged.
  - `research/frontier-25-batch-6.coverage.json`: no delta in this pass; the
    missing exact Mac Lane 1963 source remains unresolved rather than being
    patched with unverified provenance.
  - `research/frontier-25-batch-6.notes.md`: appended this Step-3 fix-pass
    record.

Validation rerun on Sunday, August 30, 2026:

- `node tools/coverage-checklist.mjs research/frontier-25-batch-6.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 43 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  -> `content-policy: 415 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 540 page(s) with item lists.` The printed `redundant-prereq` lines remain the repository-wide standing advisories.
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-6.coverage.json`
  -> `source-fetch-check: 3/3 source(s) fetch-verified`

## Scaffold-fix round

### C6-1

- Disposition: **pushback; insufficiency preserved.**
- Evidence:
  - `research/plan-category-theory-track.md:2365` still binds `rem-mac-lanes-original-conditions-and-what-became-of-them` to Mac Lane `1963` Theorem `5.2`, and `research/plan-category-theory-track.md:3553-3561` still records a full-paper harvest in which section `5. Higher Identity Laws` and Theorem `5.2` are the exact source-side carrier for `MA-12` item `3`.
  - `research/frontier-25-batch-6.coverage.json` still has only the three current stamped rows for CWM, EGNO, and Riehl; it still has no row for *Natural Associativity and Commutativity* or any same-text recovery with `original_url` provenance.
  - Repository-wide search on the current Sunday, August 30, 2026 bytes still finds no reusable `fetch_verified` receipt for `http://hdl.handle.net/1911/62865`, `https://scholarship.rice.edu/handle/1911/62865`, `https://repository.rice.edu/items/055560bd-a742-4571-b34e-c4829c92da16`, or another exact-source replacement.
  - Web re-verification in this round confirmed current secondary citations to the exact source: the Celebratio Mac Lane bibliography entry still lists the article with handle `1911/62865`, and the Preprints reference list still cites the Rice repository item `https://repository.rice.edu/items/055560bd-a742-4571-b34e-c4829c92da16`. Within the available tools, those checks did not yield a reader-openable full-text body or a fetch-verifiable same-document archive copy from which a new honest `fetch_verified` block could be minted.
- Change:
  - `research/frontier-25-batch-6.pages.json`: no change; narrowing the remark away from Mac Lane `1963` would rewrite the design contract rather than repair a local scaffold defect.
  - `research/frontier-25-batch-6.coverage.json`: no change; adding an unstamped or unverified source row would violate the batch's URL-discipline requirement.
  - `research/frontier-25-batch-6.notes.md`: appended this scaffold-fix round record.

## Scaffold-fix round

### C6-1

- Disposition: **applied; insufficiency closed.**
- Evidence:
  - `research/plan-category-theory-track.md:2365` still makes
    `rem-mac-lanes-original-conditions-and-what-became-of-them` a remark about
    Mac Lane `1963` Theorem `5.2`, and
    `research/plan-category-theory-track.md:3553-3561` still identifies
    `5. Higher Identity Laws` and Theorem `5.2` as the exact source-side
    carrier for `MA-12` item `3`.
  - The dispatch supplied a reader-openable full-paper URL:
    `https://www.mscs.dal.ca/~selinger/papers/papers/graphical-bib/public/MacLane-natural-associativity-and-commutativity-1963.pdf`,
    together with a local full-body fetch result on Sunday, August 30, 2026 of
    HTTP `200`, `application/pdf`, and `7,206,775` bytes.
  - Web re-verification in this round reopened that exact URL as a 19-page PDF
    and rechecked the required locator range: `5. Higher Identity Laws` on PDF
    page `14` / paper p. `41`; conditions `(5.2)` and `(5.3)` plus Theorem
    `5.1` on PDF page `15` / paper p. `42`; condition `(5.6)`, the two
    conditions `(5.7)`, and Theorem `5.2` on PDF page `16` / paper p. `43`;
    and the referenced pentagon `(3.5)` on PDF page `6` / paper p. `33`.
  - The recovered Selinger PDF is a same-document full-text copy of Mac Lane's
    1963 paper, so the coverage row preserves Rice-repository provenance as
    `original_url` without changing the harvested theorem or its locators.
- Change:
  - `research/frontier-25-batch-6.pages.json`: no change; the manifest already
    contained the correct item and dependency shape for
    `rem-mac-lanes-original-conditions-and-what-became-of-them`.
  - `research/frontier-25-batch-6.coverage.json`: added a fourth source row for
    Mac Lane `1963`, with the exact Theorem `5.2` locator, two harvested
    result rows tied to
    `rem-mac-lanes-original-conditions-and-what-became-of-them`, preserved
    Rice-repository `original_url` provenance, and a minimal honest
    `fetch_verified` block based on the web-open plus the dispatch's supplied
    local fetch facts.
  - `research/frontier-25-batch-6.notes.md`: rewrote the stale source/URL
    sections to reflect the repaired source set and appended this repair
    record.

Validation rerun on Sunday, August 30, 2026:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-25-batch-6.coverage.json`
  -> `coverage-checklist: 1 page(s), 45 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  -> `content-policy: 415 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the repository-wide standing `redundant-prereq` advisories.
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-6.coverage.json`
  -> `source-fetch-check: 4/4 source(s) fetch-verified`
- `git diff --check -- research/frontier-25-batch-6.pages.json research/frontier-25-batch-6.coverage.json research/frontier-25-batch-6.notes.md`
  -> clean

## Scaffold-fix round

- `B6-closure-1` — `applied; same-page dependency order repaired`
  - Disposition: closed on the current Sunday, August 30, 2026 bytes. The
    only live batch-6 row in `research/frontier-25-scaffold-closure.json`
    required legal same-page dependency order for
    `rem-mac-lanes-original-conditions-and-what-became-of-them`.
  - Evidence: the MA-12 design still describes its A-page list as being in
    dependency order, but the current manifest had the Mac Lane remark at
    position `3` while its declared same-page supports
    `thm-the-left-unitor-of-a-tensor-product-is-determined`,
    `thm-the-right-unitor-of-a-tensor-product-is-determined`, and
    `cor-the-two-unitors-agree-on-the-unit-object` sat at positions `18`,
    `19`, and `20`. Because the remark's actual content is precisely to say
    which later unit-redundancy results retire Mac Lane's extra conditions,
    deleting those `deps` would have weakened the scaffold rather than repaired
    it. I therefore kept the item and its source backing unchanged and moved it
    into the unit-redundancy block, where it now sits immediately after the
    corollary it depends on and before the attribution remark.
  - Source verification in this round: I re-opened the four recorded batch-6
    source URLs on Sunday, August 30, 2026. The Selinger-hosted Mac Lane 1963
    PDF still opens directly as a 19-page full text at the recorded Theorem
    `5.2` locator; EGNO still opens directly and still exposes Chapter `2`
    `Monoidal categories` in its table of contents; Riehl's *Category Theory
    in Context* still opens directly as a 298-page PDF at the recorded
    `5.1 Monads from adjunctions` range; and the MIT `palestine/` directory
    index still lists `maclane-categories.pdf` as a live 24M file, which is
    the same oversized URL already recorded in the coverage ledger. No URL
    recovery, re-sourcing, or coverage-row rewrite was needed.
  - Change:
    `research/frontier-25-batch-6.pages.json` now moves
    `rem-mac-lanes-original-conditions-and-what-became-of-them` from position
    `3` to position `21`, immediately after
    `cor-the-two-unitors-agree-on-the-unit-object`; its `deps`, title, and id
    are unchanged. `research/frontier-25-batch-6.coverage.json` is unchanged
    because no new scaffold item or source result was introduced. This notes
    entry records the repair and the design-order tension explicitly.

- Validator rerun on Sunday, August 30, 2026:
  `node tools/coverage-checklist.mjs research/frontier-25-batch-6.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 45 harvested result(s), 0 error(s), 0 warning(s)`
  `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-6.coverage.json`
  -> `source-fetch-check: 4/4 source(s) fetch-verified`
  `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  -> `content-policy: 415 scoped item(s), 0 error(s), 0 warning(s)`
  `node tools/validate-plan.mjs /private/tmp/frontier-25-batch-6-spliced-plan.json`
  -> pass, ending `OK — declared page order is acyclic and consistent; no
  item-level cycles, forward references, B-page dependencies, or unresolved
  ids among the 542 page(s) with item lists.` The preceding diagnostics remain
  the standing repository-wide `redundant-prereq` advisories outside batch
  `6`.
  `git diff --check -- research/frontier-25-batch-6.pages.json research/frontier-25-batch-6.coverage.json research/frontier-25-batch-6.notes.md`
  -> clean.

## Step-5 authoring

Authoring date: Sunday, August 30, 2026.

Files authored in this step:

- `library/category-theory/monoidal-categories-and-monoidal-functors.md`
- `library/category-theory/monoidal-categories-and-monoidal-functors-examples.md`
- `research/frontier-25-batch-6.proof-contracts.json`
- all batch-6 item files under `items/` named below

Authored ids, A page:

- `def-monoidal-category`, `rem-the-associator-runs-the-other-way-in-mac-lane`, `thm-the-pentagon-and-the-triangle-are-independent`, `def-strict-monoidal-category`, `def-the-reverse-and-the-opposite-of-a-monoidal-category`, `thm-a-category-with-finite-products-is-monoidal`, `cor-set-cat-and-every-complete-category-are-cartesian-monoidal`, `thm-the-endomorphisms-of-the-unit-form-a-commutative-monoid`, `thm-the-endofunctor-category-of-a-small-category-is-strict-monoidal-under-composition`, `thm-a-monoid-object-in-the-endofunctor-category-is-exactly-a-monad`, `def-monoid-object-and-comonoid-object-in-a-monoidal-category`, `def-a-module-over-a-monoid-object`, `thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense`, `thm-the-category-of-abelian-groups-is-monoidal-under-the-tensor-product`, `thm-monoid-objects-in-abelian-groups-are-rings`, `thm-modules-over-a-commutative-ring-form-a-monoidal-category`, `thm-a-poset-with-finite-meets-is-a-strict-monoidal-category`, `thm-the-left-unitor-of-a-tensor-product-is-determined`, `thm-the-right-unitor-of-a-tensor-product-is-determined`, `cor-the-two-unitors-agree-on-the-unit-object`, `rem-mac-lanes-original-conditions-and-what-became-of-them`, `rem-the-attribution-of-the-unit-redundancies`, `def-lax-strong-and-strict-monoidal-functor`, `rem-monoidal-functor-means-different-things-in-different-sources`, `def-monoidal-natural-transformation`, `thm-monoidal-functors-compose-and-laxness-is-preserved`, `thm-a-lax-monoidal-functor-carries-monoid-objects-to-monoid-objects`, `def-monoidal-equivalence`, `def-parenthesised-tensor-word`, `thm-parenthesised-words-of-a-given-length-are-counted-by-the-catalan-numbers`, `rem-unbracketed-tensor-strings-are-not-yet-defined`, `rem-isbells-argument-that-isomorphic-objects-cannot-simply-be-identified`, `fs-every-monoidal-category-is-strict`, `fs-the-unit-constraints-must-be-imposed-as-axioms`, `fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms`, `fs-the-pentagon-follows-from-the-triangle`, `fs-an-unbracketed-tensor-product-of-three-objects-is-well-defined-in-any-monoidal-category`, `fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad`

Authored ids, B page:

- `ex-the-cartesian-monoidal-structure-on-sets-computed`, `ex-the-pentagon-checked-for-cartesian-products`, `ex-a-monoid-as-a-one-object-monoidal-category`, `ex-the-five-bracketings-of-a-four-fold-product`, `ex-the-free-monoid-monad-as-a-monoid-object`, `ex-a-lax-monoidal-functor-that-is-not-strong`, `cex-the-skeleton-of-set-cannot-be-made-strict-by-identification`, `ex-endofunctor-composition-as-a-strict-tensor`

Provenance rationale applied on current bytes:

- Source-backed foundational definitions, remarks, and structural theorems were tagged `literature-derived` or `ai-altered` with reader-visible source URLs from the batch coverage set.
- The two Kelly-redundancy theorem items were tagged `proof: literature-derived` rather than pretending to have rebuilt EGNO Proposition `2.2.4` from earlier page items alone; the item text says exactly that the proof carrier is the sourced proposition.
- The B-page examples and the one B-page counterexample were tagged `ai-generated` with the allowed `generation.role` values because they are non-load-bearing concrete instances and no batch item depends on their Statements.
- The six A-page false statements were kept source-backed on the Statement side and locally refuted from the authored page mathematics.

Narrowed or dropped claims in this step:

- none
- the already-recorded Step-2 decision to leave `thm-pointed-sets-are-monoidal-under-the-smash-product` out of scope remained unchanged; no new authoring-time drop was made

Blockers in this step:

- none

Proof-contract scope and boundary handling:

- `research/frontier-25-batch-6.proof-contracts.json` now covers all `32` proof-bearing batch items
- exact citations and step-input maps were regenerated from the final item text with `tools/regen-contract-entries.mjs`
- only genuinely biconditional items received `checked` `iff-forward` / `iff-reverse` rows; the remaining boundary axes were marked `not_applicable` with item-specific reasons

Checks actually run on the final authored bytes:

- `node tools/tsx-run.mjs tools/precheck.mts ...batch-6 item files...`
  - result: `32 checked, 0 failing — all clean`
- `node tools/content-policy.mjs research/frontier-25-batch-6.pages.json`
  - result: `content-policy: 46 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: `OK`, with only the standing repository-wide `redundant-prereq` advisories
- `node tools/proof-contract.mjs research/frontier-25-batch-6.proof-contracts.json --strict`
  - result: `proof-contract: 0 error(s), 0 warning(s), 32/32 item(s) checked`
- `node tools/citation-fidelity.mjs research/frontier-25-batch-6.proof-contracts.json --fail-on-missing-quote`
  - result: `70` citations, no missing quote, no widening candidate
