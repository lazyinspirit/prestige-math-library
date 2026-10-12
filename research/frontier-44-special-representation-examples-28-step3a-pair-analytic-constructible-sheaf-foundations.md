# Step 3a scope review — `analytic-constructible-sheaf-foundations` / `…-examples`

- Run: `frontier-44-special-representation-examples-28` · role alpha · batch 30 · 2026-10-10
- A page: `analytic-constructible-sheaf-foundations` (order 1796, 6 items)
- B page: `analytic-constructible-sheaf-foundations-examples` (order 1801, 1 item)
- Scope decision: **sufficient** — recorded with `tools/step3-decisions.mjs record-scope`
  (review receipt `research/frontier-44-special-representation-examples-28-step3a-review-analytic-constructible-sheaf-foundations.json`,
  reviewed scope hash `068ee9feb9afae95e4139ac6e84f98ea207cf4b0c5782bd72f88035469d17f1a`;
  manifest bytes reviewed: `research/frontier-44-special-representation-examples-28-batch-30.pages.json`
  sha256 `f95db2c131ebd1cfa33f1cb9f04e5913409516092bf5432ef8ea98038737aaf5`).

## 1. Prose design vs scaffold, and intended role

- Prose design: `research/plan-klr-foundation-prerequisites.md` §“Analytic Constructible
  Sheaf Foundations” (L205–255; the generated task names L111, which is batch 29's section
  header — the stale pointer is already recorded in `…-batch-30.notes.md` and changes no
  item). The design assigns four A suppliers and one B example, and the owner direction
  `…-owner-authoring-direction.md` §“Owner same-frontier prerequisite extension” binds this
  pair into the original frontier.
- Design ↔ manifest, claim by claim (all five design contracts present, none narrowed):
  - `def-algebraically-constructible-complex-of-analytic-field-sheaves`: definition of
    $D_c^b(X;k)$ via cohomological boundedness plus algebraic constructibility for some
    finite smooth algebraic frontier stratification, with the published shift convention
    and smallness hypothesis. Design clauses on the derived category and local constancy
    are retained.
  - `lem-field-module-sheaves-have-injective-derived-models`: AC; $\operatorname{Sh}_k(X)$
    locally small Grothendieck with functorial injective embeddings and bounded-below
    injective replacements computing derived morphisms; and triangulatedness of the
    constructible subcategory **whenever a common compatible finite stratification is
    supplied** (stated as the fixed-stratification $D^b_{\mathfrak S}$ result plus the
    common-stratification cone closure). The design's conditional phrasing is preserved.
  - `lem-finite-poset-diagrams-have-bounded-finite-bar-models`: finite bar models for
    $\mathbf R\lim$ and derived Hom with the exact finite degree ranges and field-extension
    commutation; empty-poset convention explicit.
  - `lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology`: AC;
    $H^q(X,k_X)\cong H^q_{\operatorname{sing}}(X;k)$ for locally contractible metric
    spaces, on every open subset, with the finite-polyhedral star/closed-simplex
    application.
  - `ex-constructible-six-operations-on-a-point-and-an-open-closed-line`: the design's B
    example, point operations plus the open/closed localization sequence on the line.
- Two documented scaffold-closure additions (definitions only, no new claimed results),
  authorized by the dispatch and the owner direction (“include the necessary intermediate
  lemmas with their actual homes and dependencies”): `def-analytic-topology-and-finite-smooth-algebraic-stratifications`
  (the design uses “analytic topology” and “finite smooth algebraic stratification with the
  frontier condition”, neither previously defined in the library or in an earlier run item)
  and `def-locally-constant-sheaf-of-finite-rank` (needed because the published local-system
  definition is groupoid-based and the design deliberately declines that identification).
  Both are load-bearing beyond the pair: the first is consumed by 5 items on batches
  37/45/45-examples/46, the second by 5 items on batches 36/40/41.
- Design restrictions retained: constructibility is existential over stratifications with no
  existence or common-refinement theorem asserted; no identification of locally constant
  sheaves with groupoid local systems; AC declared only on the two lemmas and the example;
  the example's six-operation point clauses rest on two declared forward references.
- Intended role: the run's constructible-sheaf foundations. The A page is consumed by 26
  items on 10 later pages of this frontier (batches 36, 37, 38, 40, 41, 42, 43, 45,
  45-examples, 46) and required at page level by 7 of them; the whole pair is inside the
  `requires` closure of the KLR six-functor/perverse chain ending at orders 1813–1828. The
  B page is a leaf: nothing in the run consumes it or its item (full 100-page manifest scan).
  The later machinery the design defers (Whitney/conical structure, Borel–Moore, Verdier
  duality, tensor/Hom, equivariant theory) is homed on those later pairs, not here.

## 2. Source coverage

- `research/frontier-44-special-representation-examples-28-batch-30.coverage.json`: 26
  harvested rows. A page 18 rows (7 `included`, 4 `inline`, 7 `out-of-scope`); B page 8 rows
  (4 `included`, 2 `inline`, 2 `out-of-scope`). Both primary treatments are independent:
  Goresky, *Lecture Notes on Sheaves and Perverse Sheaves* (full 168-page PDF) and
  Bernstein–Lunts, *Equivariant Sheaves and Functors* Part I (66-page excerpt).
- Every decline carries a reason and names a destination that exists: Godement/Čech →
  published `sheaf-cohomology-cech-cohomology-and-comparison`; Borel–Moore/compact support →
  batch-32 `compact-support-sheaf-calculus` and batch-40 `analytic-derived-six-operations-and-duality`;
  normal slice/link/Whitney → batch-37 `complex-algebraic-stratified-topology`;
  finiteness and pushforward constructibility → the later stratified-topology and
  incidence-model pairs (batches 37/36); Verdier duality and tensor/internal Hom → batch 40;
  equivariant sheaves → batch-41 `equivariant-constructible-perverse-foundations`;
  the horned-sphere pathology → outside the constant-coefficient line computation.
- The single advisory `coverage-low-yield` (7/18 scaffolded on A) is confirmed appropriate:
  this is a deliberately small foundations pair that consumes its published sheaf,
  derived-category, Čech and singular-homology prerequisites rather than rebuilding them,
  and the two large local lemmas are the pair's own replacement for the deferred
  stratified-geometric finiteness machinery.
- Fetch evidence, independently re-verified here (not merely re-read): both URLs re-fetched
  today byte-identically to the recorded stamps — Goresky 1,954,729 bytes, sha256_16
  `dfd4e0721c8c2e31`, 168 pages; Bernstein–Lunts 2,666,651 bytes, sha256_16
  `d5c84bf06367288d`, 66 pages. I read the decisive loci in the fetched PDFs myself:
  Goresky §1(d) pp. 5–7 (locally constant sheaves/local systems), §8 pp. 24–25
  (stratification with the frontier axiom), §9 pp. 30–32 (constructible sheaves and the
  bounded constructible derived category); Bernstein–Lunts PDF pp. 5–6 (1.4.1–1.4.3 six
  functors and adjunctions, 1.4.4 proper $f_!=f_*$, 1.4.5 exact triangle of an open subset).
  These match the coverage rows and the items' cited ranges. Reading depth: the full-range
  readings remain the beta's recorded evidence; my pass was a bounded anchor check.

## 3. Prerequisite audit (unmet prerequisites)

Method: parsed all `deps`, `forward_refs` and $[[\ldots]]$ targets of the 7 pair items from
the current manifests; classified each id against `items/*.md` and all 100 current run
manifest pages; expanded the in-run closure; computed the A/B page `requires` closures from
`research/plan-spec.json`.

- 42 distinct direct dependencies across the 7 items: 38 resolve to published `items/`
  files, 4 are the pair's own scaffold items, and 1
  (`thm-choice-implies-dependent-implies-countable-choice`) is both published and homed on
  current batch 2. **0 unresolved.** All 56 item `[[…]]` references resolve the same way.
- Published interfaces checked at the declared-clause level (statement read, not proof):
  `lem-ringed-space-module-sheaves-enough-injectives` (AC, enough injectives, one specific
  iterated resolution), `thm-injective-complexes-model-the-bounded-below-derived-category`
  (“with supplied bounded-below injective replacements … and DC or supplied homotopy
  extensions” — matching the declared AC ⇒ DC route),
  `thm-choice-implies-dependent-implies-countable-choice` (ZF chain AC ⇒ DC ⇒ …),
  `thm-stone-metric-spaces-are-paracompact` (AC; paracompactness),
  `lem-flasque-kernel-lifts-quotient-sections` (flasque kernel ⇒ section surjectivity and
  flasque quotient), `def-derived-hom-in-the-bounded-setting` (two-sided R Hom model),
  `def-derived-category-of-an-abelian-category` (smallness hypothesis and shift convention
  carried), `def-classical-algebraic-prevariety-regular-maps-and-varieties` (quasi-compact
  locally ringed space, affine models, regular maps, separatedness). Every load-bearing
  published dependency in the item lists has front-matter `status: published`.
- In-run closure: besides this pair, it reaches exactly the batch-2 page
  `countability-and-uncountability` (10 nodes, because AC ⇒ DC lives there); that page's 19
  external dependencies are all published items, and the page lies inside the A page's
  computed `requires` closure. No in-run supplier lies outside the declared closure.
- Page-level `requires`: the A page's 8 published pages all exist as library pages; the B
  page's 3 entries are its A page plus two published pages. `validate-plan` reports the page
  stack acyclic with `undeclared-prereq`-free status for both pages; `manifest-deps` and
  `item-dependency-levels check` are clean (7 items; 858 items/100 pages run-wide with all
  declared levels matching, ours 0,0,1,8,0,0 / 9).
- Forward references: the B example declares exactly two load-bearing forward references to
  batch-40 items (`def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces`,
  `lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions`).
  Both are scaffolded in the current batch-40 manifest, are declared (not hidden deps), pass
  `fwdcheck`, and are recorded `open` in the batch-30 cross-batch ledger as expected; the
  recorded same-reviewer interface check
  (`…-klr-foundation-constructible-native40-consumer/final-consumer-and-forward-binding.json`)
  found the AC, properness, finiteness and adjunction hypotheses matched with no scoped
  defect, pending ordinary Step 3b/5b review. This is a declared later-material interface,
  not an unmet prerequisite.
- **No unmet prerequisite found.** Nothing consumed by this pair is absent from both the
  published library and the current scaffold. Residual uncertainty: availability and
  declared-clause matching only — I did not re-derive the published suppliers' proofs, and
  proof correctness of this pair is Steps 3b/5a work; none of its items is authored yet.

## 4. Consumer-interface spot checks (scope view)

- `constructible-incidence-and-cochain-models` (b36)
  `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model` uses all four
  design items; each named clause (recovering a sheaf from locally constant finite-rank
  restrictions, identifying derived Hom with the finite diagram model, finite bar
  resolutions, and the star comparison via singular cohomology) is present in the
  corresponding statement/strategy.
- `complex-algebraic-stratified-topology` (b37) uses the finite-poset bar bound for its
  finite cochain models; `logarithmic-hodge…` (b38), `geometric-fixed-parts…` (b42) and
  `proper-hyperresolutions…` (b46) use the locally-contractible comparison for the
  sheaf/singular identification; `analytic-derived-six-operations…` (b40) and
  `equivariant-constructible-perverse-foundations` (b41) consume the constructible
  definition and the injective derived models. All are declared-clause mappings, not proof
  checks.
- No consumer requires a claim the design routes elsewhere (Whitney, compact support,
  duality, tensor/Hom, equivariant theory are separately homed, per §2).

## 5. Advisories (no scope change, no action requested at Step 3a)

1. The generated task's design pointer (L111) is stale; the correct section is L205–255.
   Batch notes already record this; no item changes.
2. `validate-plan` emits 17 `redundant-prereq` warnings on the A page's plan-controlled
   `requires` (derived-categories, partitions-of-unity, presheaves, relations reachable
   indirectly). This is a plan-wide pattern and a requires-list hygiene matter for the
   owner/Step 4; it does not affect availability.
3. The two declared forward references will need their ordinary cross-batch review rows at
   Steps 3b/5b; they are already recorded open.
4. This is a scope assessment only: no scaffold was edited, no item approved, and no proof
   content checked. All seven items are un-authored scaffolds as of this review.

## 6. Decision and next action

- `sufficient` for `analytic-constructible-sheaf-foundations`: the planned definitions,
  results and example adequately cover the intended subject; every design contract is
  realized, the two additions are minimal closure definitions with load-bearing consumers,
  source coverage is complete and routed, and no unmet prerequisite was found. No
  enrichment, merger or scaffold edit is indicated.
- Recorded via `node tools/step3-decisions.mjs record-scope --run
  frontier-44-special-representation-examples-28 --page analytic-constructible-sheaf-foundations
  --decision sufficient`, reason naming this report.
- Next action: Step 3b authors the 6 A items and 1 B example in dependency order once the
  step 3a stage drains. Any change to a statement, title or inventory changes the scope
  hash and requires a fresh scope decision before item bookkeeping can use it.
