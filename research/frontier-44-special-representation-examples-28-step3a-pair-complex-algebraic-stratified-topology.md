# Step 3a scope review — A/B pair `complex-algebraic-stratified-topology`

Run: `frontier-44-special-representation-examples-28` · role: alpha · batch 37
· orders 1809 (A) / 1814 (B) · design `research/plan-klr-foundation-prerequisites.md` L586–L749
A page: `complex-algebraic-stratified-topology` · B page: `complex-algebraic-stratified-topology-examples`

**Decision: `sufficient`** — scope only. No item approval, no owner record, no scaffold edit.

## Inputs read

- Manifests/evidence: `research/frontier-44-special-representation-examples-28-batch-37.pages.json`
  (both pages, all 18 items: statements, strategies, deps, `axiom_use`, sources),
  `...-batch-37.coverage.json` (31 harvested rows over 6 source instances),
  `...-batch-37.notes.md`, `...-batch-37.cross-batch-dependencies.json` (18 rows: 3 page +
  15 item), `...-batch-37-url-liveness.json`, and the 18 `...-step1-<item>.json` readiness
  records (all `ready`, re-recorded 2026-10-09 after the same-frontier metadata refresh).
- Design/plan: plan §`Complex Algebraic Stratified Topology` L586–L749; `research/plan-spec.json`
  orders 1809/1814 (identities, titles, categories, companions, `requires`, item ids/kinds);
  `research/frontier-44-special-representation-examples-28-klr-foundation-topology-packet.json`
  (proposed minimal pair, `necessary_geometric_scope`, `missing_cross_owner_supplier`,
  `additional_required_pair_proposal`, `downstream_scope_resolution`); the frozen
  same-frontier proposal `...-klr-foundation-native-plan-proposal.json` (pair/prospective-page
  entries); the draft carriers under `...-klr-foundation-topology-drafts/` (17 of the 18 items,
  the exception being item 17; the folder's two further files belong to batch-30/batch-36 items)
  and `...-klr-foundation-constructible-drafts/` (item 17).
- Plan/owner: `...-owner-authoring-direction.md` (§"Owner same-frontier prerequisite extension",
  which brings this pair into the original frontier with the plan above as its prose design);
  `...-alpha-step1-drift.md` §`complex-algebraic-stratified-topology` (**no-drift**, order 1809,
  declared closure complete); `...-scope-ledger.json` (A/B rows, batch 37);
  `...-step1-blockers.json` (three stage-1 findings, all owned by other batches/URLs —
  nothing on this pair).
- Library role: the pair's library pages are not spliced yet (page rendering is a later stage);
  the prose design is the plan section, and the intended consumers were taken from the current
  manifests (below).
- Checks I ran: `coverage-checklist … --require-destination` → 2 pages / 31 harvested / **0
  errors, 0 warnings**; `source-fetch-check --coverage …` → **6/6 fetch-verified, 6/6 resolved**;
  `manifest-deps.mjs` → 18 items, **0 errors**; `item-dependency-levels.mjs check --run` →
  858 items / 100 pages, **no error**; `step3-decisions.mjs check --phase scope` → this pair
  open pending this review; mechanical resolution of every declared dep, every `[[…]]` target,
  and every `requires` entry; a scan for item-level consumers of this pair; a defect-ledger scan
  for the current items and their published suppliers.
- Independent source spot-check: I re-fetched Mark Goresky, *Lecture Notes on Sheaves and
  Perverse Sheaves* (`https://www.math.ias.edu/~goresky/pdf/all2.pdf`, 1 954 729 bytes,
  sha256_16 `dfd4e0721c8c2e31`, identical to the batch fetch stamp) and read §5.4 (finite type
  as `K − L`), §8.2 (Whitney condition B), §8.7 (Thom–Mather control-data triples), §8.10
  (existence of algebraic/analytic Whitney stratifications, map-compatible stratification,
  triangulation smooth on each stratum with stratum closures as subcomplexes, and the explicit
  caveat that an algebraic map is not generally made simplicial), §8.11 (canonical retraction),
  and §9.2–9.4 (constructibility, finite hypercohomology, link computation). Mather, Milne and
  Hatcher were not independently re-read; their stamps were verified by the fetch check.

## Scope reconciliation (design ↔ plan-spec ↔ manifest ↔ role)

- **Identity.** A/B ids, kind, category `algebraic-geometry`, titles, companion pointers and
  all 21 `requires` entries in `plan-spec.json` equal the design and batch 37. The design
  inventory is **17 A suppliers + 1 B example = 18 items**, and the manifest matches it
  **item-for-item in order** (ids and kinds identical): definition of finite complex algebraic
  Whitney stratification and control data; curve arcs at boundary points; generic Whitney
  regularity; smooth map-compatible partitions; the compatible Whitney stratification theorem;
  normal-tube lifts; relative tubular neighborhoods; existence of compatible control data;
  controlled-submersion trivializations; controlled local conical neighborhoods; commuting
  radial collars; simplicial mapping cylinders; compact triangulations; open-star cone charts;
  finite cell local-system cohomology; finite constructible models; the conical/cochain wrapper
  lemma; and the B example. No planned claim is missing and no item is added outside the design.
- **Subject coverage.** The pair plans exactly the subject its title promises and the KLR route
  needs: (definitions/conventions) Whitney (a),(b) strata, tube control data, `f`-compatible
  tubes, controlled/radial lifts, conical product neighbourhoods, deleted-boundary finite
  triangulation convention; (existence) generic Whitney regularity, boundary curve arcs,
  compatible smooth and Whitney stratifications of one morphism with prescribed closed/locally
  closed subsets, Thom–Mather control data, local cone/link structure with link constancy;
  (triangulation) radial collars, explicit simplicial cylinders, compact triangulations with
  prescribed unions, star cone charts; (finite models) finite cell local-system cohomology with
  field extension, finite stratified triangulations and local cohomology for constructible
  complexes, internal $\mathcal H om$ constructibility, and a global wrapper with per-operation
  scope plus finite affine-open descent. The design's explicit limits are preserved in the
  statements: no simplicial model of an arbitrary algebraic map (Goresky §8.10 caveat), no
  simultaneous stratification of an arbitrary cyclic diagram, no compact realization of a
  noncompact variety, no global flow/isotopy claim on the definition item.
- **B page.** The single example is exactly the one the design promises, and it exhibits the
  deleted-boundary convention that items 1 and 13–16 rely on (`ℂ` is not compact; octahedral
  boundary plus stereographic projection give `ℂ ≅ S²∖{pt}`). For calibration I counted the
  B inventories of the sibling prerequisite pairs (batches 29–49): fourteen have one example,
  six have two. One example is the design norm here and is adequate for this companion role.
- **Role in the library.** The A page is a supplier of the KLR geometric route. Its items are
  consumed by items of six later pairs in this run: `analytic-derived-six-operations-and-duality`
  (batch 40), `equivariant-constructible-perverse-foundations` (41), `affine-perverse-vanishing-
  and-universal-hyperplanes` (43), `equivariant-borel-moore-correspondence-convolution-and-
  constructible-ext` (44), `proper-hyperresolutions-and-mixed-hodge-restriction-images` (46) and
  `quiver-full-flag-projective-semisimplicity` (49); five of those pages name this A page in
  their `requires`. Every such consumer need that is homed here (the conical/cochain models, the
  compatible-stratification theorem, the Whitney definition, controlled submersions, compact
  triangulations, the constructible-models theorem, the open-star charts) is planned on this
  page; I found no consumer requirement that points to this pair but is absent from its
  inventory. The B page is a dependency leaf — no item outside the pair depends on it.

## Source coverage

- Four independent full-text treatments back the A page (Goresky lecture notes; Mather,
  *Notes on Topological Stability*; Milne, *Algebraic Geometry*; Hatcher, *Algebraic Topology*)
  and two the B page (Goresky; Hatcher); 6/6 source instances fetch-verified with durable stamps,
  4/4 URLs live. The two decisive anchors I checked myself are on the stamped Goresky text:
  §8.10 states existence of algebraic Whitney stratifications, map-compatibility, and the
  triangulation conclusion, with the non-simpliciality caveat the designs quote; §5.4 defines
  finite type as `K − L` with `L` a closed subcomplex, which is the convention of item 1(e) and
  the B example.
- Dispositions: 31 harvested rows — 16 included, 4 inline, 3 deferred, 5 out-of-scope (each with
  a written reason), 3 already-published. The three deferrals name existing run pages
  (`analytic-derived-six-operations-and-duality` ×2 for the weak deformation retraction §8.11
  and Verdier duality; the companion A page for §8.10's triangulation, which items 13/16 cover).
  The out-of-scope declines are intrinsic fat-square/pre-stratified formalism and general CW
  machinery already published elsewhere; none leaves a promised claim uncovered. No source drop,
  alternative proof or owner-escalation was needed.
- Honest caveat carried forward from the batch notes (not a scope defect): the four triangulation
  carriers cite R. M. Goresky, *Triangulation of stratified objects*, Proc. AMS 72 (1978)
  193–200, whose available copy is an image scan without a usable text layer; the batch verified
  its bibliographic identity but not its body. Step-3 authors must re-check those exact locators
  (or replace the reference per the source rules) before authoring those proofs; the coverage
  harvest is anchored in the text-verified lecture notes instead.

## Prerequisites and dependency audit

- **Declared deps: 111 occurrences; 32 unique published, 23 unique in-run scaffold items,
  0 missing/unresolved.** All 32 published ids have `status: published`; the 23 in-run suppliers
  are homed in batches 29 (`relative-smooth-triangulation-and-bundle-fitting`, 3 items), 30
  (`analytic-constructible-sheaf-foundations`, 2 items), 36 (`constructible-incidence-and-
  cochain-models`, 2 items) and this page (16 items); all carry non-empty statements and current
  `ready` Step-1 records. Every `[[…]]` reference in the 18 statements/strategies (156
  occurrences) resolves the same way; 0 unresolved.
- **Requires closure.** All 21 `requires` entries exist: 18 as library pages and 3 as in-run
  pairs (batches 29/30/36). Every in-run supplier page of an item dep lies inside this closure;
  the only consumed item homed outside it is the published AC-chain item
  `thm-choice-implies-dependent-implies-countable-choice` (home: the published real-analysis
  page `countability-and-uncountability`), which is published prerequisite context, not an unmet
  edge. I spot-checked the clauses the cross-batch file records as consumed — batch-30's
  `def-analytic-topology-and-finite-smooth-algebraic-stratifications` (a–c) and
  `lem-finite-poset-diagrams-have-bounded-finite-bar-models`; batch-36's incidence model and
  Čech-descent lemma; batch-29's corner, bundle and fitting triangulation theorems — and their
  current statements carry exactly those clauses with matching hypotheses.
- **Item 17's design text is stale, not a gap.** The design says "not-yet-authored … frozen
  same-frontier proposal"; the carrier now exists at
  `...-klr-foundation-constructible-drafts/lem-complex-algebraic-stratifications-have-finite-
  conical-cochain-models.md` (sha256 `309db3d7…`, which I recomputed and confirmed) and its
  statement equals the manifest's, keeping the two packet-mandated repairs (per-operation
  quasi-projective scope; no simultaneous cyclic-diagram stratification). The packet's recorded
  carrier hash `a7854008…` is the superseded pre-repair carrier; the packet was left untouched.
- **Historical defects on two published suppliers, both closed.** The defect ledger has two
  `narrowed` rows touching deps: `thm-smooth-dependence-of-ode-solutions-on-parameters` (missing
  time-regularity; repaired to a jointly $C^\infty$ field with a full owner-approved proof and
  post-repair hash; its seven direct consumers were checked to satisfy joint smoothness) and
  `thm-cellular-cochains-compute-cohomology-with-local-coefficients` (now assumes AC). At scope
  level both narrowed hypotheses are met by this pair's uses — the ODE flows are of smooth
  (autonomous) stratified fields, and item 15 already assumes AC and declares
  `def-axiom-of-choice` — but Steps 3/5 must re-check this at proof level. No open published
  defect was found for any dep.
- **AC bookkeeping** is consistent: items 6–11 and 13 consume the published AC⇒DC⇒AC_ω chain for
  the AC_ω geometry suppliers, items 2–5 and 15–17 assume AC through their algebraic/derived
  suppliers and declare it, and items 1, 12, 14 and the example are choice-free. No path reaches
  the deferred beyond-choice theory.
- **No unmet prerequisite found** (confirmed at availability and declared-clause level, not
  proof content). No scaffold addition, enrichment or pair merger is required.

## Advisories (recorded; no scope change, no action requested at Step 3a)

1. The generated batch task names design L461; the pair's section is L586–L749 (L461 lies in the
   preceding Mixed Hodge section). Recorded by the batch notes and the Step-1 drift review
   (no-drift); the inventory is unaffected.
2. The item-17 carrier supersession above and the Goresky-1978 locator caveat above are for the
   Step-3 authors, not scope decisions.
3. `validate-plan` records only the plan-wide inherited `redundant-prereq` advisory on this
   pair's `requires` (hygiene, plan-controlled, unchanged).

## Decision and next action

- Record `sufficient` via `node tools/step3-decisions.mjs record-scope --run
  frontier-44-special-representation-examples-28 --page complex-algebraic-stratified-topology
  --decision sufficient --reason "<scope evidence + this report path>"`.
- Next action: Step 3b authors the 17 A items and the B example in dependency order (after their
  batch-29/30/36 suppliers). No enrichment, no merger and no scaffold edit is needed. If any
  item's statement, title or inventory changes, the scope hash changes and this decision must be
  re-recorded; `requires`-only or coverage-record edits do not change the scope hash.
- I did not verify any proof (none is authored yet); this is a scope assessment only.
