# frontier-27 - Beta - batch notes for `closed-monoidal-categories-and-the-internal-hom` (step 1 scaffold)

Run `frontier-27`, batch `5`, one A/B pair, category `category-theory`.
Author: Beta. Session date: Monday, August 31, 2026.

Artifacts owned by this batch:
`research/frontier-27-batch-5.pages.json`,
`research/frontier-27-batch-5.coverage.json`,
and this file.

No plan structure, workflow state, published content, or another batch artifact
was edited.

---

## 1. Controlling design and resulting shape

Design locations opened:

- `research/plan-category-theory-track.md` line `52`
- `research/plan-category-theory-track.md` line `705`
- `research/plan-category-theory-track.md` lines `2540-2625`
- `research/plan-category-theory-track.md` line `2607`

The controlling design is the single MA-14 block at
`research/plan-category-theory-track.md:2540-2625`.

Why that block controls:

- lines `52` and `705` are table rows only;
- line `2607` is not a competing amendment but the B-page subheading inside the
  same MA-14 block; and
- only the `2540-2625` block contains the actual item inventory, traps, source
  directions, and contingent decisions for this pair.

Shape after scaffolding:

- `closed-monoidal-categories-and-the-internal-hom` (A): **33 items**
- `closed-monoidal-categories-and-the-internal-hom-examples` (B): **6 items**

The A page stays well below the 60-item split ceiling, so no split is
proposed.

The scaffold keeps the design's route:

- side-sensitive left/right/biclosed definitions first;
- the internal-hom calculus before cartesian-closed specializations;
- cartesian closed, locally cartesian closed, and subobject-classifier material
  all on the same A page; and
- concrete Set, Cat, Ab, slice, and presheaf examples on the B page.

---

## 2. Drift and control issues

### Finding 1 - direct `requires` prose and the live spec disagree

- The MA-14 design prose names four prerequisite pages:
  `strictification-and-mac-lanes-coherence-theorem`,
  `adjunctions-units-and-counits`, `limits-and-colimits`, and
  `universal-properties-and-the-yoneda-lemma`.
- The live `research/plan-spec.json` entry for this batch's A page names only
  `strictification-and-mac-lanes-coherence-theorem-examples`.
- I did **not** adjudicate that locally. Per the dispatch and the run's own
  `research/frontier-27-alpha-step0-drift.md`, I left the manifest on the spec
  edge and relied on its computed closure, which already contains the other
  three pages.

### Finding 2 - Riehl's accessible second-edition PDF numbers the LCC section as `4.6`, not `4.5`

- The design source note says Riehl 2nd ed. Section 4.5, Definition 4.5.2, and Lemmas
  4.5.3-4.5.4.
- The accessible PDF at `https://emilyriehl.github.io/files/context.pdf` has
  the same material as **Section 4.6**, with **Definition 4.6.2**,
  **Lemmas 4.6.3-4.6.4**, and **Proposition 4.6.6**.
- I recorded the actual locators read in coverage instead of repeating the
  design's stale numbering.

### Finding 3 - the Heyting vocabulary contingency triggered

The design explicitly marked item 17 contingent on already-published lattice
vocabulary. There is published lattice vocabulary, but there is **no published
Heyting or relative-pseudocomplement terminology** below this page. I therefore
scaffolded item 17 as
`thm-cartesian-closed-preorders-have-relative-implications`, stating the
adjunction law directly instead of introducing ungrounded terminology.

### Finding 4 - the subobject-functor representation needs the library's supplied-well-powering form

The design's item 26 follows Leinster's textbook formulation
`Sub(-) ~= C(-,Omega)`, but the on-disk item
`def-subobject-and-quotient-object` explicitly treats subobjects as class-coded
equivalence classes, not a pre-existing set. To make a genuine Set-valued
functor under the library's contract, the theorem has to use
**supplied representative sets**. I therefore scaffolded item 26 as
`thm-a-subobject-classifier-represents-the-subobject-functor` in the
supplied-well-powering form and recorded that adaptation in coverage.

### Finding 5 - the pullback functor is taken in the library's chosen-data sense

The design writes `f^* : C/Y -> C/X` as if pullbacks assemble automatically.
Under this repository's usual discipline, turning pullbacks into a functor
needs chosen pullbacks along the fixed map. I kept the design's mathematical
route but recorded the data-supplied reading in the item title and notes rather
than silently hiding the choice.

---

## 3. Source stack and harvest boundaries

Recorded harvest sources:

1. Emily Riehl, *Category Theory in Context*:
   `https://emilyriehl.github.io/files/context.pdf`
2. G. M. Kelly, *Basic Concepts of Enriched Category Theory*:
   `https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf`
3. Saunders Mac Lane, *Categories for the Working Mathematician*:
   `https://math.mit.edu/~hrm/palestine/maclane-categories.pdf`
4. Tom Leinster, *Basic Category Theory*:
   `https://arxiv.org/pdf/1612.09375.pdf`
5. Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik,
   *Tensor Categories*:
   `https://math.mit.edu/~etingof/egnobookfinal.pdf`

Why these five:

- Riehl is the primary source for the two-variable-adjunction packaging, the
  cartesian-closed definition, the presheaf exponentials route, and the locally
  cartesian closed block.
- Kelly is the primary source for the biclosed terminology and the exact
  internal-hom equations `(1.23)` through `(1.27)`.
- Mac Lane supplies the Chapter IV cartesian-closed and subobject-classifier
  material together with the Chapter VII convention split the design warns
  about.
- Leinster controls the exact subobject-classifier and presheaf-classifier
  statements the design singled out.
- EGNO is included as a trap source: it confirms the finite-meet monoidal
  example already published on disk, and it also confirms that its Chapter 7.9
  \"internal Homs\" are about module categories rather than this page's closed
  monoidal notion.

### Mac Lane URL handling

The canonical Mac Lane URL is the MIT PDF and it already has a durable
`fetch_verified` stamp elsewhere in the repo. In this runtime the direct web
reader would not open the full 25 MB PDF cleanly, so I rechecked the exact
Chapter IV and VII wording through the PDFCoffee HTML mirror and the Google
Books table of contents. That is a same-text verification route, not a
re-source, so the canonical URL was preserved.

### Leinster URL handling

The arXiv PDF was opened and read through the browser tool in this session, but
there is no matching on-disk `fetch_verified` stamp to copy for the exact
`https://arxiv.org/pdf/1612.09375.pdf` URL. Because the shell has no DNS or
network access, this batch cannot add that stamp locally.

### Explicit harvest boundaries

- I did **not** use EGNO Chapter 7.9 as support for closed monoidal categories;
  it is deliberately harvested as out-of-scope so later readers do not mine the
  wrong notion of \"internal Hom\".
- I did **not** keep the design's B-page
  `cex-topological-spaces-are-not-cartesian-closed`. Riehl states the boundary,
  but an honest local proof route here would need additional function-space or
  quotient-space machinery that this pair otherwise never spends.
- I did **not** keep the design's B-page
  `ex-the-heyting-structure-on-the-open-sets-of-a-space`. Once item 17 stayed
  in the explicit-adjunction form rather than Heyting terminology, that
  topology-specific example became avoidable extra vocabulary rather than a
  load-bearing page requirement.
- I kept the presheaf-classifier material, but only as a **concrete** B-page
  example and a boundary note against full topos development, not as a general
  topos theorem on the A page.

---

## 4. Local scaffold decisions

### Decision 1 - use the diamond lattice for the A-page non-closure witness

This keeps item 5 inside already-published order and monoidal vocabulary and
avoids needing unpublished topological function-space or quotient-map facts.

### Decision 2 - keep the B-page internal-Hom example in `Ab`

The design marked this contingent on `tensor-products-of-modules`. That page is
already in the current closure, so the example is legal and useful.

### Decision 3 - rename the contingent preorder item rather than invent Heyting vocabulary

The explicit-adjunction statement is mathematically the same consequence the
design wanted, but it respects the current library vocabulary boundary.

### Decision 4 - strengthen the subobject-functor theorem to the library's representative-set interface

This is the only honest way to keep item 26 Set-valued under the repository's
subobject convention.

### Decision 5 - keep the presheaf classifier as a small computed example

I retained the presheaf-classifier design thread, but in the walking-arrow
setting where the data can be computed concretely without turning the page into
an elementary-topos survey.

### Decision 6 - no split

At 33 A-page items the page is comfortably below the split threshold, and the
proof spine is already thematically coherent.

---

## 5. Known limits

- `source-fetch-check --stamp` will still owe network access for the newly
  introduced Leinster arXiv URL, because no reusable on-disk stamp exists for
  that exact URL and the shell in this environment cannot resolve external
  hosts.
- The Mac Lane wording was verified through same-text mirrors because the MIT
  PDF is too large for the direct web-reader path here.
- The page intentionally stops before a full elementary-topos or
  Grothendieck-topos development; that boundary is material, not stylistic.
- The omitted B-page topological and open-set examples are recorded here so
  they do not disappear silently into the design margin.

### Alpha step-3 repair on current bytes

- On Monday, August 31, 2026, Alpha removed two A-page dependencies that were
  spending foreign `-examples` homes:
  `thm-cartesian-closed-preorders-have-relative-implications` now depends on
  `def-products-and-coproducts` instead of
  `ex-products-in-a-poset-are-infima`, and
  `fs-a-subobject-classifier-is-any-object-representing-monomorphisms` now
  closes from the published subobject-definition/equivalence items instead of
  `cex-two-monomorphisms-representing-the-same-subobject`.
- On the same current bytes,
  `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-5.coverage.json`
  passes with `5/5` sources fetch-verified. The earlier `EAI_AGAIN` note above
  is therefore historical validator noise, not a current scaffold blocker.

---

## 6. Validator results

Commands run on Monday, August 31, 2026:

- `node tools/coverage-checklist.mjs research/frontier-27-batch-5.coverage.json --require-destination`
- `node tools/content-policy.mjs --manifest-only research/frontier-27-batch-5.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-5.coverage.json --stamp`
- `git diff --check -- research/frontier-27-batch-5.pages.json research/frontier-27-batch-5.coverage.json research/frontier-27-batch-5.notes.md`

Results:

- `coverage-checklist`:
  `coverage-checklist: 1 page(s), 47 harvested result(s), 0 error(s), 0 warning(s)`
- `content-policy --manifest-only`:
  `content-policy: 39 scoped item(s), 0 error(s), 0 warning(s)`
- `validate-plan`:
  exited `0`

  The command printed the usual repo-wide reading-order table and many unrelated
  `redundant-prereq` notes, but it ended with the success line saying the
  declared page order is acyclic and consistent.
- `source-fetch-check --stamp`:
  **failed**

  Exact failure:
  `ERROR fetch-check-dead: closed-monoidal-categories-and-the-internal-hom: https://arxiv.org/pdf/1612.09375.pdf - EAI_AGAIN`

  Summary line:
  `source-fetch-check: 4/5 source(s) fetch-verified (0 newly stamped), 1 FAILED`
- `git diff --check`:
  exited `0` with no whitespace or patch-format errors.

Net state:

- The scaffold, coverage harvest, and notes are structurally valid.
- The only remaining gate failure is the missing live fetch stamp for the new
  Leinster URL, which cannot be repaired from this shell because external host
  resolution is disabled here.

## Step-3 fix pass

Run on Monday, August 31, 2026, against Alpha group `b`'s stable findings in
`research/frontier-27-alpha-b-step3-scaffold-review.md`.

- Finding `1` — disposition: already applied on current bytes; no further
  manifest edit needed.
  Evidence: the Alpha review requires
  `thm-cartesian-closed-preorders-have-relative-implications` to stop spending
  the foreign B-page item `ex-products-in-a-poset-are-infima`. The live record
  in `research/frontier-27-batch-5.pages.json` now depends on
  `def-products-and-coproducts`, and a current batch-local dependency audit
  finds no `-examples` dependencies anywhere in batch `5`.
  Changed scaffold record:
  `research/frontier-27-batch-5.pages.json` item
  `thm-cartesian-closed-preorders-have-relative-implications`.

- Finding `2` — disposition: already applied on current bytes; no further
  manifest edit needed.
  Evidence: the Alpha review requires
  `fs-a-subobject-classifier-is-any-object-representing-monomorphisms` to stop
  depending on the foreign B-page counterexample
  `cex-two-monomorphisms-representing-the-same-subobject`. The live record in
  `research/frontier-27-batch-5.pages.json` now closes from
  `def-subobject-and-quotient-object` together with
  `thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence`,
  and the same dependency audit finds no foreign `-examples` dependencies in
  the batch.
  Changed scaffold record:
  `research/frontier-27-batch-5.pages.json` item
  `fs-a-subobject-classifier-is-any-object-representing-monomorphisms`.

- Current gate and validator evidence — disposition: recorded; no coverage or
  manifest repair needed in this pass.
  Evidence:
  `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-5.coverage.json --stamp`
  now passes with `source-fetch-check: 5/5 source(s) fetch-verified (0 newly stamped)`,
  and plain `source-fetch-check` also passes `5/5`. The Leinster source row in
  `research/frontier-27-batch-5.coverage.json` now carries
  `fetch_verified.at: 2026-08-31T07:39:22.383Z`, so the older `EAI_AGAIN`
  failure recorded above is historical rather than current. The required
  validators also pass on the current bytes:
  `coverage-checklist: 1 page(s), 47 harvested result(s), 0 error(s), 0 warning(s)`;
  `content-policy: 449 scoped item(s), 0 error(s), 0 warning(s)` for
  `research/frontier-27-batch-*.pages.json`; and `validate-plan` ends `OK`.
  Changed scaffold record: this notes section only.

## Step-5 authoring

Run on Monday, August 31, 2026.

Authored draft page files:

- `closed-monoidal-categories-and-the-internal-hom`
- `closed-monoidal-categories-and-the-internal-hom-examples`

Authored draft item ids on the A page:

- `def-left-closed-and-right-closed-monoidal-category`
- `thm-the-internal-hom-is-unique-up-to-unique-natural-isomorphism`
- `def-the-internal-hom-and-its-evaluation-morphism`
- `thm-in-a-symmetric-monoidal-category-the-two-closures-agree`
- `cex-a-monoidal-category-need-not-be-closed`
- `thm-a-closed-monoidal-category-has-its-tensor-cocontinuous-in-each-variable`
- `thm-the-internal-hom-is-continuous-in-each-variable`
- `thm-the-internal-hom-composition-morphism`
- `thm-the-unit-is-an-internal-hom-unit`
- `def-exponential-object`
- `def-cartesian-closed-category`
- `thm-set-is-cartesian-closed`
- `thm-the-category-of-small-categories-is-cartesian-closed`
- `thm-a-presheaf-category-on-a-small-category-is-cartesian-closed`
- `thm-currying-and-uncurrying-are-mutually-inverse`
- `cor-a-cartesian-closed-category-with-an-initial-object-has-strict-initial-objects`
- `thm-cartesian-closed-preorders-have-relative-implications`
- `def-slice-category-and-the-pullback-functor`
- `def-locally-cartesian-closed-category`
- `thm-slices-of-a-locally-cartesian-closed-category-are-locally-cartesian-closed`
- `thm-a-locally-cartesian-closed-category-with-a-terminal-object-is-cartesian-closed`
- `thm-a-locally-cartesian-closed-category-has-pullbacks-and-with-a-terminal-object-all-finite-limits`
- `thm-local-cartesian-closure-is-equivalent-to-every-pullback-functor-having-a-right-adjoint`
- `thm-set-is-locally-cartesian-closed`
- `def-subobject-classifier`
- `thm-a-subobject-classifier-represents-the-subobject-functor`
- `thm-the-two-element-set-is-a-subobject-classifier-for-sets`
- `rem-what-is-not-developed-here`
- `fs-every-monoidal-category-is-closed`
- `fs-the-left-and-right-internal-homs-agree-in-every-monoidal-category`
- `fs-a-cartesian-closed-category-has-all-finite-limits`
- `fs-every-cartesian-closed-category-is-locally-cartesian-closed`
- `fs-a-subobject-classifier-is-any-object-representing-monomorphisms`

Authored draft item ids on the B page:

- `ex-the-function-set-as-an-exponential-computed`
- `ex-currying-for-sets-of-three-variables`
- `ex-the-internal-hom-of-abelian-groups`
- `ex-the-exponential-of-two-small-categories`
- `ex-a-locally-cartesian-closed-slice-computed`
- `ex-the-subobject-classifier-of-a-presheaf-category`

Created batch proof-contract report:

- `research/frontier-27-batch-5.proof-contracts.json`

Provenance rationale used on authored material:

- Core definitions and textbook-anchored theorems stayed `literature-derived` or `ai-altered`, depending on whether the local statement matched the harvested source wording or adapted it to on-disk library conventions.
- The representative-set version of `thm-a-subobject-classifier-represents-the-subobject-functor` stayed `ai-altered` because the proof is faithful to Leinster/Mac Lane but the statement was narrowed to the library's class-coded subobject convention by quotienting the supplied representative set.
- The concrete B-page examples were retagged to `provenance.statement: ai-generated` with `generation.role: example`, because they are new explicit computations rather than harvested textbook statements.
- `cex-a-monoidal-category-need-not-be-closed` remained `ai-altered` and carries no `generation` block, because it is cited by `fs-every-monoidal-category-is-closed` and generated statements may not be dependency targets.
- `cor-a-cartesian-closed-category-with-an-initial-object-has-strict-initial-objects` remained the one `ai-generated` direct corollary and is not used as a dependency target.

Narrowed or repaired claims during authoring:

- I kept the scaffolded preorder item in the explicit relative-implication form rather than reintroducing Heyting terminology.
- I kept the scaffolded supplied-well-powering version of the subobject-functor theorem and made the representative-set quotient explicit in the Statement and proof.
- I made the `Set` locally-cartesian-closed proof write the empty-fiber case explicitly, so the boundary worksheet points to written mathematics rather than an implicit convention.
- I removed one stale fact row from `thm-local-cartesian-closure-is-equivalent-to-every-pullback-functor-having-a-right-adjoint` after the strict contract gate showed that the proof never actually cited it.
- No planned batch-5 item was dropped at Step 5.

Proof-contract and validator results on the current bytes:

- `node tools/tsx-run.mjs tools/precheck.mts` on the 31 proof-bearing batch items:
  pass, `31 checked, 0 failing — all clean`.
- `node tools/proof-contract.mjs research/frontier-27-batch-5.proof-contracts.json --strict`:
  pass, `proof-contract: 0 error(s), 0 warning(s), 31/31 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-27-batch-5.proof-contracts.json --fail-on-missing-quote`:
  pass, `75 citation(s) over 31 authored item(s)` with no missing quotes and no widening candidates.
- `node tools/content-policy.mjs research/frontier-27-batch-5.pages.json`:
  pass, `content-policy: 39 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`:
  pass; it ended `OK` with only the standing unrelated repo-wide `redundant-prereq` advisories.
- `git diff --check -- ...` on the authored batch-5 files:
  exited `0` with no whitespace or patch-format errors.

Blockers:

- None at Step 5 on the current bytes.
