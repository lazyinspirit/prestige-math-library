# Step 3a scope review — `analytic-derived-six-operations-and-duality` / `…-examples`

- Run: `frontier-44-special-representation-examples-28` · role alpha · batch 40 · 2026-10-10
- A page: `analytic-derived-six-operations-and-duality` (order 1813, 9 items)
- B page: `analytic-derived-six-operations-and-duality-examples` (order 1817, 1 item)
- Scope decision: **sufficient** — recorded with `tools/step3-decisions.mjs record-scope`
  (review receipt `research/frontier-44-special-representation-examples-28-step3a-review-analytic-derived-six-operations-and-duality.json`;
  reviewed scope hash `bebe150a789f6f137a574daf2bef31755e8f950a195d083f769bcb53cd93123e`;
  manifest bytes reviewed: `research/frontier-44-special-representation-examples-28-batch-40.pages.json`
  sha256 `e9f2dd3d3978de0415001815f770eb9ddd927888994ad9b5e2fef3a1f9fb8787`;
  coverage sha256 `8964ccda352267bf8f7ebe539c15d101f0b1670a9f37880de9e02aebc0c28fd4`).

## 1. Prose design vs scaffold, and intended role

- Prose design: `research/plan-klr-foundation-prerequisites.md` §“Analytic Derived Six Operations
  And Duality”, **L857–945** (the section runs to the line before “Equivariant Constructible
  Perverse Foundations” at L947). The batch task's locator L715 falls inside the preceding
  “Complex Algebraic Stratified Topology” section (L586–749); the stale pointer is already recorded
  in `…-batch-40.notes.md` and changes no item. The design is bound by the owner direction
  `…-owner-authoring-direction.md` §“Owner same-frontier prerequisite extension” (2026-10-09),
  which puts this pair inside the original frontier.
- Design ↔ manifest, contract by contract (all ten plan contracts present with the same ids and
  kinds; no claim dropped or narrowed). The draft carriers were also read
  (`…-klr-foundation-sixfunctor-drafts/items/` for items 1–6 and the B example,
  `…-klr-foundation-constructible-drafts/` for items 7–9):
  1. `lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions`
     — AC; $f^*=f^{-1}$ exact, $f^*\dashv Rf_*$ on bounded-below injective replacements; bounded
     signed total tensor computes $\otimes_k^L$; $R\mathcal Hom$ via a bounded-below injective model;
     flasque field sheaves acyclic on every open; tensor–Hom adjunction and dg identities; explicit
     “no bounded-constructibility of internal Hom here”.
  2. `def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces` — the carrier supplies
     the definition/contract (design delegates to it); the manifest fixes $\operatorname{Sh}_k(X)$,
     $f^*$, $f_!$ by proper support of sections, $Rf_*$, $Rf_!$, $\otimes_k^L$, $R\mathcal Hom$,
     the finite fibrewise-soft resolution $k_X\to K$, $K_U=j_{U!}j_U^*K$, the exceptional candidate
     $\operatorname{Hom}^\bullet_Y(f_!K_U,I)$, $\omega_X=a_X^!k$, $D_X$, with
     `justified_by: [thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint]`
     (well-definedness only) and “no generic six-functor axiom / constructible restriction separate”.
  3. `thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint` — AC plus the
     uniform all-fibre-open bound $d$; $f_!$ left exact, fibre formula
     $(Rf_!A)_y\simeq R\Gamma_c(X_y,A|_{X_y})$, bounded-to-bounded, $Rf_!\dashv f^!$ as a Hom
     transposition for bounded source / bounded-below target, lower bound $\inf(B)-d$, triangle and
     cocycle laws on the constructible specialization, constructed independently of Verdier
     biduality, no unrestricted $D^+$-source adjunction.
  4. `lem-analytic-six-operation-support-and-trace-calculus` — Cartesian base change
     $u^*Rf_!\simeq Rf'_!v^*$, $Rf_!=Rf_*$ for proper $f$ (ordinary proper base change), projection
     formula for bounded tensor factors, composition of proper-support images, trace compatibility
     under pasting on the constructible specialization, closed-inclusion localization triangles and
     $R\mathcal Hom(i_*k_Z,A)\simeq R\Gamma_ZA$, with the explicit “does not assume or claim
     extraordinary dual base change before constructible biduality”.
  5. `thm-verdier-duality-on-oriented-stratified-complex-varieties` — AC plus the finite
     conical/triangulation and derived-incidence suppliers; $D_X=R\mathcal Hom(-,\omega_X)$ preserves
     bounded constructible objects, biduality, $\omega_X\simeq k_X[2d]$ on smooth complex $d$-folds,
     the exchange $Rf_*D_X\simeq D_YRf_!$, $D_YRf_*\simeq Rf_!D_X$, $f^!\simeq D_Xf^*D_Y$, coherent
     extraordinary proper base change $u^!Rf_*\simeq Rf'_*v^!$, “fixed-space triangulation is not an
     assumed globally simplicial model of $f$”.
  6. `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace` — AC plus the
     geometric/incidence suppliers; three adjunctions, composition/identity, ordinary and
     extraordinary proper base change, projection formula, support localization, dualizing
     transitivity, trace, pasting coherence, the product-projection model
     $R\mathrm{pr}_*\mathrm{pr}^*B\simeq B\otimes_kC^*(F;k)$, supplied-factorization smooth base
     change, coefficient-extension commutation, “geometric output preservation is the exact
     geometric supplier, not an additional axiom”.
  7. `lem-analytic-constructible-sheaves-admit-coherent-six-operations` — AC, arbitrary field;
     restriction of the ordinary operations to $D_c^b(-;k)$ with all adjunctions, localization, base
     change, projection formula, trace, involutive duality exchanging adjoints, $\omega_X=k_X[2d]$
     on smooth $d$-folds, $f^!=f^*[2d]$ for smooth $f$, coefficient extensions.
  8. `thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes` — AC,
     any field; the two middle-perversity inequalities define a bounded t-structure on
     $D_c^b(X;k)$, independent of compatible refinement/gluing, duality exchanges the aisles, heart
     abelian of finite length, simples $j_{!*}L[\dim_\mathbb C Z]$, open restriction perverse exact,
     negative Hom vanishing, division-algebra endomorphisms, and the explicit ORDINARY-category
     restriction (no equivariant/normalization/semisimplicity/noncharacteristic claim).
  9. `lem-smooth-complex-pullback-is-exact-for-the-middle-perverse-t-structure` — AC; $a^*[d]$
     perverse exact and truncation-compatible for smooth $a$ of pure relative dimension $d$,
     $a^!=a^*[2d]$, conservativity/reflection for surjective $a$, compatible finite
     stratifications named.
  - B `ex-dualizing-and-closed-support-shifts-on-the-complex-line` — $\omega_{\mathbb C}=k_{\mathbb C}[2]$,
    $i^!k_{\mathbb C}=k[-2]$, $i^!\omega_{\mathbb C}=k$ for $i:\{0\}\hookrightarrow\mathbb C$, with the
    AC-consumption note (choice-free computation).
- Design additions recorded in the batch notes were checked against the manifests and all resolve:
  the AC⇒DC discharge (`thm-choice-implies-dependent-implies-countable-choice`, batch 2) on item 1,
  the product-projection acyclicity supplier
  (`lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology`, batch 30) on
  item 6, the compatible-stratifications theorem
  (`thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications`, batch 37) on
  item 9, the closed-support supplier on the B example (item 4), and definition-level closure on
  items 2–9 and the example. No design clause was removed; the one metadata-order divergence
  (support/trace lemma before the coherent six-operation theorem) follows the plan and removes a
  potential cycle, as the notes record.
- Intended role: the ordinary analytic six-operations/duality supplier and the ordinary middle
  perverse t-structure for the geometric KLR chain. Six later pages declare the pair in `requires`
  (batches 41, 42, 43, 44, 45, 48), 20 item rows depend on its items (batches 41, 42, 43, 44, 45,
  48, 49), and batch 30's B example carries the two declared forward references to items 1–2. The
  B page is a dependency leaf (no consumer). By the run's dependency levels the ten items sit at
  8, 9, 10, 11, 14, 15, 16, 17, 18 and 15(B); all ten are Step-1 `ready`.

## 2. Source coverage

- `research/frontier-44-special-representation-examples-28-batch-40.coverage.json`: 6 source
  instances over 4 complete documents (4 A, 2 B), 36 dispositioned rows — A page 4 sources/33 rows
  (21 `included`, 4 `inline`, 6 `deferred`, 2 `out-of-scope`), B page 2 sources/3 rows (1 `included`,
  2 `inline`). `coverage-checklist --require-destination`: 2 pages, 36 results, 0 errors, 0 warnings.
  Every deferral names an existing destination page of this run — `compact-support-sheaf-calculus`
  (Verdier §1.4 and §4, Stacks §16), `equivariant-constructible-perverse-foundations` (Bernstein–Lunts
  Part I §2.1–2.5.2 + Appendix B and §3.1–3.6), `projective-perverse-hard-lefschetz-and-decomposition`
  (Bernstein–Lunts §5.1–5.3) — and both `out-of-scope` rows carry reasons (Verdier §1.3 filtered
  colimits; Bernstein–Lunts §1.9 + Appendix A n-acyclic machinery).
- Fetch evidence re-verified independently, not merely re-read: the four distinct bodies cached under
  `/tmp` are byte-identical to the recorded stamps — Verdier exposé 300, 820080 bytes, sha256_16
  `48571f9856f26ba3`; Stacks, Cohomology of Sheaves, 1054846 bytes, `23fbd6af99fe8f0b`; BBD,
  Faisceaux pervers, 15581222 bytes, `b1e10440e13cb6bf`; Bernstein–Lunts, Part I, 2666651 bytes,
  `d5c84bf06367288d`. `source-fetch-check` check mode: 6/6 fetch-verified, 6/6 resolved (0 documented
  drops).
- Decisive loci read for scope (statement level, not proof audit): Verdier §1.1 (left exactness; point
  = compactly supported sections; proper/open/closed cases), §1.2 (base change and fibre formula),
  §1.4 (finite cohomological dimension; $Y$-mou resolutions), §2.1–2.3 (construction of $f^!$ from a
  finite $Y$-mou resolution, flasqueness, the functorial trace), §3 (the duality Hom isomorphism for
  $D^-$ source/$D^+$ target), §5 (submersive/cohomologically constructible maps and the product
  projection); Stacks §12 Def. 12.1 + Lemmas 12.2/12.3/12.5 (tags 09SW/09SX/09SY/09T0), §18 Lemma 18.1
  (09V5), §21 (0A39 and the localization triangle), §54 Lemma 54.2 (01E8); BBD Théorème 1.4.10
  (recollement t-structure) with Proposition 2.1.3 and Corollaire 2.1.4 (perversity t-structure on
  $D^b$), and the intermediate-extension/simple-object range 1.4.22–1.4.26; Bernstein–Lunts 1.4.3
  ($f^*\dashv f_*$, $f_!\dashv f^!$), 1.4.4 ($f_!=f_*$ proper), 1.4.5 (localization triangles;
  $i^!=i_*$, $j_!$ extension by zero), 1.6.1–1.6.3 (dualizing object, $D(A)=\mathcal Hom(A,D_X)$,
  biduality, $Df_!=f_*D$, $f^!D=Df^*$), 1.7 (smooth relative dualizing twist). Each of items 1–9 and
  the example maps onto these loci through the coverage rows; no row overstates its source.
- Reading depth and uncertainty: the Verdier exposé text and the cited Stacks sections were read in
  full at the cited ranges; the BBD and Bernstein–Lunts checks were anchor reads of the decisive
  statements (the full-range readings remain the beta's recorded evidence). No source-versus-statement
  conflict was found at this depth; the deferred BBD/Bernstein–Lunts material is deliberately homed on
  batches 41/48 as the coverage shows.

## 3. Prerequisite audit (unmet prerequisites)

Method: parsed every `deps`/`justified_by` field of the ten items with the repository YAML parser,
classified each target against `items/*.md` and all 100 current run manifests, and expanded the
transitive closure with the Step-3 dependency semantics; separately checked every `[[…]]` reference
in the statements against the declared lists.

- 46 distinct direct dependencies: 25 published-only, 20 in-run-only, 1 both published and homed in
  this run (the AC⇒DC item on batch 2). **0 unresolved.** All statement `[[…]]` references are within
  the declared lists (the manifest normalizer already folded them in). Transitive closure: 3473 nodes
  (3350 published-only, 50 run-only, 73 both), **0 absent** from the published library and the current
  scaffold.
- In-run suppliers read at statement level and matched to their declared uses: batch 30
  (`def-algebraically-constructible-complex-of-analytic-field-sheaves`,
  `def-locally-constant-sheaf-of-finite-rank`,
  `lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology`), batch 32
  (`def-c-soft-sheaf`, `def-compactly-supported-global-sections`, `def-support-of-a-sheaf-section`,
  `lem-c-soft-field-sheaves-are-compact-support-acyclic`,
  `lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions`,
  `lem-sections-near-a-compact-set-are-sections-on-that-set`), batch 36
  (`lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model`), batch 37
  (`lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`,
  `thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications`). Each carries
  the clauses the consuming items cite (bounded fibrewise-soft resolutions; bounded finite models for
  constructible objects; compatible stratifications for smooth maps).
- Load-bearing published interfaces spot-read and consistent: `thm-inverse-direct-image-adjunction`
  (plain-sheaf adjunction for continuous maps),
  `lem-bounded-below-complexes-admit-injective-replacements` (stated for DC or supplied embeddings —
  matching the declared AC⇒DC discharge), `thm-flasque-sheaves-acyclic` (already published and itself
  declaring the AC⇒DC item), plus the flasque/extension-by-zero/stalk items.
- Page-level `requires`: the five published pages all exist as library pages
  (`derived-categories`, `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`,
  `relations-functions-and-quotients`, `sheaf-cohomology-cech-cohomology-and-comparison`,
  `sheaf-operations-exactness-ringed-spaces-and-module-pullback`), and the four in-run pages
  (`analytic-constructible-sheaf-foundations`, `compact-support-sheaf-calculus`,
  `constructible-incidence-and-cochain-models`, `complex-algebraic-stratified-topology`) are
  scaffolded in batches 30/32/36/37 with the consumed clauses. `validate-plan --run` exits 0 with no
  item-level cycles, forward references, B-page dependencies or unresolved ids (only pre-existing
  `redundant-prereq` advisories on the plan-controlled `requires` lists).
- **Finding U1 (topological properness; confirmed definitional absence, not scope-blocking).**
  Consuming planned items: `def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces`
  (defines $f_!$ by “sections whose closed support maps properly to $V$”),
  `thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint` (proper-support
  functor, proper-$f$ cases, ordinary proper base change),
  `lem-analytic-six-operation-support-and-trace-calculus` (“proper maps satisfy $Rf_!=Rf_*$”), and
  the proper-base-change clauses of
  `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace` and
  `lem-analytic-constructible-sheaves-admit-coherent-six-operations`. Required prerequisite claim
  and hypotheses: a definition of a proper continuous map between locally compact Hausdorff spaces
  (“preimages of compact subsets are compact”, equivalently in this setting closed with compact
  fibres), together with the stability facts actually consumed — closed inclusions are proper;
  properness is stable under base change along open inclusions; composites of proper maps are proper —
  which are what yield “$f$ proper $\Rightarrow f_!=f_*$”. Evidence for absence: no item in `items/`
  defines properness for a continuous map of general topological spaces (the only topological
  definition is `def-proper-map-between-euclidean-open-sets`, restricted to Euclidean open subsets;
  `def-proper-morphism` and relatives are scheme-theoretic; action/C*-algebraic properness is
  unrelated), no definition item in the 100 run manifests supplies it, and neither the 46 direct deps
  nor the 3473-node closure reaches one. Confirmed: the definitional absence and that items 2–4 use
  the notion in their statements. Uncertain: only whether the owner prefers an inline stipulation
  inside item 2's Definition (the same pattern as the published Euclidean definition, with the
  stability facts used by items 3–4 stated or proved locally) or an atomic closure item
  (e.g. `def-proper-continuous-map` plus a small stability lemma, scaffolded in this pair as the
  earliest consumer of the topological $f_!$ theory). Recommended owner action: authorize one of the
  two minimal additions; Step 3b should escalate rather than author “properly” as an undefined
  notion. Because either route edits a bound statement or the inventory, it would require a fresh
  scope review afterwards. This finding does not omit any topic or result of the pair's intended
  subject and is reported, not repaired (Step 3a makes no scaffold edits).
- **Finding U2 (declaration housekeeping; not an unmet prerequisite).** Item 1's proof route uses
  “$k$-vector spaces are flat / every bounded complex of them is K-flat” without declaring a
  published supplier (`cor-free-modules-are-projective-and-flat`,
  `def-flat-abelian-sheaf`, `def-k-flat-complex-of-abelian-sheaves` all exist), and item 2's statement
  uses “locally compact Hausdorff” without declaring the published definitions
  (`def-locally-compact-space`, `def-hausdorff-space`). Both are resolvable Step-3b declaration
  adjustments, not absences. Item 1's flasque-acyclicity clause duplicates the published
  `thm-flasque-sheaves-acyclic` (which item 3 already declares); the clause is design-mandated, so no
  scope action.
- Residual uncertainty: proof-level prerequisites that surface only while authoring (Step 3b) cannot
  be excluded here; this audit verifies availability and declared-clause matching, not proof
  sufficiency.

## 4. Consumer-interface spot checks (scope view)

- batch 41 `thm-constructible-six-functors-proper-base-change-and-verdier-duality` needs the pair's
  items 5/6/7 clauses (three adjunctions, pasting, $Rf_!=Rf_*$ proper, $\omega_X$ normalization) and
  lifts them equivariantly; `lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative`
  consumes items 8+9; `thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`
  (equivariant) takes item 8 as its ordinary prototype.
- batch 42 Gauss–Manin items consume item 6's coherent six-operation/smooth-base-change package.
- batch 43's five items consume items 7+8 for perverse exactness, Artin vanishing, one-sided
  exactness and the universal-hyperplane package; its transverse closed-embedding refinement is homed
  in batch 43 with its own supplier.
- batch 44 `lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports`
  cites item 6's local/tensor-Hom/coherent-exchange/orientation clauses explicitly.
- batch 45's two descent items consume items 6+7 for the injective-resolution six-functor
  construction.
- batch 48's four A items and its B example use items 7+8 for perverse truncation, simple objects and
  perverse splitting; batch 49's corollary uses item 8.
- batch 30's B example carries the two declared forward references to items 1–2 (sibling-owned
  review), both scaffolded here.
- No consumer requires a claim homed elsewhere or absent from the plan; the B page has no consumers.

## 5. Checks run (actual results)

- `node tools/manifest-deps.mjs research/…-batch-40.pages.json` — 10 item(s), 0 normalized, 0 error(s).
- `node tools/item-dependency-levels.mjs check --run …` — 861 item(s) across 100 page(s), exit 0,
  no label/shape/cycle errors; batch-40 levels 8/9/10/11/14/15/16/17/18/15 equal the computed levels.
- `node tools/validate-plan.mjs research/plan-spec.json --run …` — exit 0; no item-level cycles,
  forward references, B-page dependencies or unresolved ids; only pre-existing `redundant-prereq`
  advisories.
- `node tools/content-policy.mjs --manifest-only research/…-batch-*.pages.json` (whole-level join) —
  861 scoped item(s), 0 error(s), 0 warning(s). (A single-manifest invocation legitimately reports
  the cross-batch targets as `batch-dependency-missing`; the joined run-level invocation passes.)
- `node tools/coverage-checklist.mjs research/…-batch-40.coverage.json --require-destination` —
  2 page(s), 36 harvested result(s), 0 error(s), 0 warning(s).
- `node tools/source-fetch-check.mjs --coverage research/…-batch-40.coverage.json` — 6/6 fetch-verified;
  6/6 resolved (0 documented drops).
- `node tools/step1-decisions.mjs check --run …` — 861 items, 858 ready; the three open rows belong
  to other batches; all ten of this pair are ready.
- External-reference boundary: a direct grep finds no `proved_here`, `external_refs`,
  `external_dependency` or `forward_refs` in the batch-40 manifest; the one `justified_by` is the
  sanctioned well-definedness discharge for the definition item.

## 6. Advisories (no scope change requested)

1. Stale design locator in the generated batch task (L715 vs the section's L857–945); already recorded
   in the batch notes. No item change.
2. Single-example B page: the design plans exactly this example, and the 21 appended prerequisite
   pairs consistently carry one or two; it exercises the orientation normalization and the
   closed-support shifts but not base change/projection/perverse clauses. Noted, no action at Step 3a
   (same calibration as batch 32's F3).
3. Finding U1 (properness) is the one prerequisite item to route to the owner; U2 is Step-3b
   declaration housekeeping.
4. `redundant-prereq` advisories on the page `requires` list remain plan-hygiene for Step 4, not a
   scope matter.
5. Consumer-side cross-batch review rows into this pair are owned by batches 41–45/48/49; nothing
   here substitutes for their Step-3b/5b checks.

## 7. Decision and next action

- `sufficient` for `analytic-derived-six-operations-and-duality`: the planned definitions, results
  and example realize every clause of the owner-bound design and adequately cover the intended
  subject; the source coverage is complete with every decline routed to an existing page; the
  declared dependency closure resolves with zero absences; and no consumer requires an unplanned
  claim. The single prerequisite finding U1 (no library/scaffold definition of topological
  properness used by items 2–4) is reported with its exact consuming items, required claim and
  recommended minimal additions; it concerns a definitional stipulation inside the pair's own
  $f_!$ development, not an omitted topic or result, so it is an owner/Step-3b action rather than a
  scope insufficiency. No merger or subject enrichment is indicated, and no scaffold was edited.
- Recorded via `node tools/step3-decisions.mjs record-scope --run
  frontier-44-special-representation-examples-28 --page analytic-derived-six-operations-and-duality
  --decision sufficient`, reason naming this report. Any later change to a statement, title or
  inventory changes the scope hash and requires a fresh scope decision before item bookkeeping can
  use it.
- Next action: Step 3b authors the nine A items and the B example in dependency order once the 3a
  stage drains; items 2–4 should resolve U1 (inline stipulation or the owner-authorized closure item)
  or escalate it precisely.
