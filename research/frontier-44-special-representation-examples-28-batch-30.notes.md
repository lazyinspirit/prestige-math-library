# Batch 30 current scaffold — Analytic Constructible Sheaf Foundations

Run `frontier-44-special-representation-examples-28`; label beta-batch-30, covers 30.
Owned pair: `analytic-constructible-sheaf-foundations` (A, order 1796) and
`analytic-constructible-sheaf-foundations-examples` (B, order 1801), category
`algebraic-geometry`. This file augments the scaffold manifest
`research/frontier-44-special-representation-examples-28-batch-30.pages.json`,
its coverage `…-batch-30.coverage.json`, its consumer input
`…-batch-30.cross-batch-dependencies.json` and the seven Step-1 readiness
records. No published content, shared plan, engine state or verdict was touched.

## Design/plan comparison and recorded conflicts

- The generated task names design `research/plan-klr-foundation-prerequisites.md`
  L111. L111 is the `## Relative Smooth Triangulation And Bundle Fitting` header
  belonging to batch 29's pair; the section that actually describes this pair is
  `## Analytic Constructible Sheaf Foundations`, L205–L255. The pair inventory
  there (four A suppliers plus one B example) and every declared `deps` array
  agree byte-for-byte with `research/plan-spec.json` for orders 1796/1801, so the
  stale line pointer changes no item. This is the only design/plan conflict.
- Plan-controlled metadata (page orders, `requires` arrays, titles, categories,
  companions) is copied unchanged from the current manifest/plan.
- Scaffold additions. The dispatch authorizes necessary local definitions and
  lemmas. Two definitions were added on the A page before their consumers:
  `def-analytic-topology-and-finite-smooth-algebraic-stratifications`
  (the design item uses "analytic topology" and "finite smooth algebraic
  stratification with the frontier condition"; neither is defined anywhere in
  the published corpus or in an earlier page of this run, and the sibling
  definition `def-finite-complex-algebraic-whitney-stratification-and-control-data`
  lives on batch 37 / order 1809, strictly later, so `validate-plan` would reject
  a backwards-reading dependency on it) and
  `def-locally-constant-sheaf-of-finite-rank` (used by the definition item, the
  injective-model lemma and the B example; the published
  `def-local-system-of-r-modules-and-its-pullback` presents groupoid local
  systems, which the design explicitly declines to identify with locally
  constant sheaves). Both have published dependencies only and introduce no
  in-run edges. This is a scaffold-closure addition, not a change of any design
  claim or of any selected pair.
- Dependency refinements for closure. All added deps are already published and
  lie in the transitive `requires` closure of the owning page (checked against
  `plan-spec.json`): the definition item now also names
  `thm-abelian-sheaves-form-abelian-category` and `def-module-on-ringed-space`;
  the injective-model lemma names `thm-choice-implies-dependent-implies-countable-choice`
  (AC ⇒ DC), `def-module-on-ringed-space`, `def-locally-ringed-space` and
  `def-kernel-cokernel-image-sheaves`; the finite-poset lemma names
  `def-cochain-complex-in-an-abelian-category` and
  `def-derived-hom-in-the-bounded-setting`; the locally-contractible lemma names
  `def-metric-space`, `def-sheaf-cohomology-derived-global-sections`,
  `def-flasque-sheaf`, `def-extension-by-zero-abelian-sheaf` and
  `thm-extension-by-zero-adjunction-exactness`; the B example names
  `thm-the-derived-category-inherits-a-triangulated-structure` and
  `def-mapping-cone-of-a-chain-map`.
- Forward references. The design declares only five deps for the B example, but
  its six-operation clauses (the four pullback/pushforward operations, tensor,
  internal Hom and the dualizing object on a point) are exactly the content of
  the later sibling pair `analytic-derived-six-operations-and-duality`
  (order 1813). The example therefore declares two load-bearing forward
  references to that pair's planned items
  `def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces` and
  `lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions`;
  examples may rest on declared later material (`fwdcheck` owner decisions
  (a)–(d)). The remaining clauses of the example are closed locally. This is an
  interface decision at scaffold level, not a weakening of the claimed content.

## Mathematical review, item by item

Every declared prerequisite was read in its current published item file; page
homes were resolved through `plan-spec.json`, and the page-edge closure of both
pages was computed before adding deps.

- `def-analytic-topology-and-finite-smooth-algebraic-stratifications` (new,
  definition, level 0). The analytic topology is defined chartwise; the gluing
  is well defined because regular isomorphisms of affine models are locally
  polynomial quotient functions and Euclidean-continuous. Smooth points are
  defined by the local analytic model. A finite smooth algebraic frontier
  stratification is a finite partition into connected locally closed smooth
  subvarieties whose closures are unions of strata; locally closed subvarieties
  are classical varieties because open subsets of affine models are unions of
  principal opens, which are affine models. No existence theorem for
  stratifications and no common-refinement theorem is asserted. A scaffold
  wording repair during this dispatch fixed the topology comparison: the
  analytic topology refines the Zariski topology (polynomial zero sets are
  Euclidean closed), not conversely; the readiness record was re-recorded after
  the repair, together with the records of its transitive in-run consumers.
  Choice-free.
- `def-locally-constant-sheaf-of-finite-rank` (new, definition, level 0).
  Locally constant of finite rank means locally isomorphic to a finite free
  constant sheaf; no global rank and no identification with groupoid local
  systems is asserted. Choice-free.
- `def-algebraically-constructible-complex-of-analytic-field-sheaves` (design
  definition, level 1). D_c^b is the full subcategory of the bounded derived
  category with bounded, algebraically constructible cohomology; the shift
  convention is the published one and preserves the class. The definition
  quantifies existentially over stratifications and asserts no common
  refinement; the published size/smallness hypothesis of
  `def-derived-category-of-an-abelian-category` is carried in the item.
  Choice-free.
- `lem-field-module-sheaves-have-injective-derived-models` (design lemma,
  level 8). Route repaired in two places relative to the research carrier:
  (i) the carrier's closure step "refine the finite strata of both objects
  together" presupposed a common-refinement theorem that is not available
  before the stratified-topology pair; the scaffold instead fixes the common
  stratification supplied in the hypothesis and verifies the cone step by
  locally trivializing the finite-rank local systems on each stratum, where
  kernels, images and cokernels of morphisms of finite-rank constant sheaves
  are again finite free constant sheaves (a matrix of locally constant
  functions is constant on a small connected neighbourhood);
  (ii) the bounded-below injective model equivalence and its DC hypothesis are
  tied to their published suppliers, with AC ⇒ DC declared explicitly. AC use
  is exactly: the functorial injective embedding for the Grothendieck category
  of k-sheaves and AC ⇒ DC; the closure argument is choice-free.
- `lem-finite-poset-diagrams-have-bounded-finite-bar-models` (design lemma,
  level 0). The carrier's proof is complete and was kept: representables Q_p
  are projective, the two-sided bar complex has an explicit objectwise
  contracting homotopy, the projective model computes R lim = R Hom(k, −) and
  derived Hom, the stated degree ranges follow, and base change commutes with
  the finite sums, products and Hom spaces. "Derived inverse limit" and
  "derived Hom" are now tied to `def-derived-hom-in-the-bounded-setting`; the
  empty-poset zero convention is explicit. Choice-free.
- `lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology`
  (design lemma, level 0). Route repaired relative to the carrier: the
  carrier's construction of a global cochain representative from cochains on a
  cover chose one cover index per simplex without proving the choice
  well defined; the scaffold strategy now chooses, around each point, a
  neighbourhood meeting only finitely many cover members and contained in one
  common agreement neighbourhood for each pair (using local finiteness and
  agreement of germs through sheafification), which makes the value independent
  of the chosen index. The rest is kept: flasque k-sheaves are acyclic for
  derived sections by the extension-by-zero adjunction and the flasque
  section-lifting lemma; the augmented sheaf of singular cochains is a flasque
  resolution by local contractibility; the kernel of the cochain-to-sections
  map is a directed union of acyclic small-cochain complexes by cover-small
  chain comparison and degreewise splitting over a field. AC use is itemized
  in the item: paracompact refinement, functorial injective resolutions,
  flasque section lifting, degreewise splitting of acyclic complexes.
- `ex-constructible-six-operations-on-a-point-and-an-open-closed-line` (design
  example, level 9). Point: a sheaf on a point is a vector space, a bounded
  complex is equivalent to a bounded complex of finite-dimensional spaces when
  its cohomology is finite-dimensional, so D_c^b(pt) ≃ D^b(Vect^fd); the
  identity map is proper with identity pullback/pushforward and identity f^!
  by adjunction; tensor/Hom/dualizing are the finite cochain constructions with
  ω = k[0] (these clauses cite the two declared forward references). Line: the
  published open/closed short exact sequence specialized to k_C gives
  0 → j_! k_{C*} → k_C → i_* k → 0, and the cone of k_C → i_* k is
  quasi-isomorphic to j_! k_{C*}, giving the localization triangle through
  `thm-the-derived-category-inherits-a-triangulated-structure` and the
  published mapping-cone definition.

Published-interface check: the examined published suppliers
(`lem-ringed-space-module-sheaves-enough-injectives`,
`thm-injective-complexes-model-the-bounded-below-derived-category`,
`thm-stone-metric-spaces-are-paracompact`,
`thm-cover-small-singular-chains-compute-singular-homology`,
`thm-singular-chain-homotopy-formula`, `thm-sheafification-preserves-stalks`,
`lem-flasque-kernel-lifts-quotient-sections`,
`thm-extension-by-zero-adjunction-exactness`,
`lem-extension-by-zero-short-exact-sequence`,
`lem-sheaf-supported-on-a-closed-subset-is-a-pushforward`,
`thm-choice-implies-dependent-implies-countable-choice`,
`def-derived-category-of-an-abelian-category`, `def-topological-space`,
`def-classical-algebraic-prevariety-regular-maps-and-varieties`,
`lem-metrics-on-rn` and the rest) state exactly the interfaces used; no
hypothesis mismatch, wrong direction, convention clash or missing axiom
strength was found, and no published defect in the examined range is recorded.

## Dependency levels

Computed with `tools/item-dependency-levels.mjs` against all current run
manifests: A page 0, 0, 1, 8, 0, 0; B page 9. Levels 8 and 9 come from
`thm-choice-implies-dependent-implies-countable-choice`, which is scaffolded
in-run on batch 2 (level 7) even though it is also published; every other dep
is an out-of-run published supplier and raises nothing. Page order keeps every
same-page dependency before its consumer.

## Axiom of choice

`lem-field-module-sheaves-have-injective-derived-models` assumes AC with the
two declared uses above. `lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology`
assumes AC with the four itemized uses. The two new definitions and the
finite-poset lemma are choice-free, as is the B example beyond its suppliers.
No Recorded/unproved supplier is consumed anywhere and no path leaves the
choice branches of the run.

## Sources, coverage and full-text evidence

Two independent primary treatments: Mark Goresky, *Lecture Notes on Sheaves and
Perverse Sheaves* (version of June 26, 2026; full 168-page PDF, sha256 prefix
`dfd4e0721c8c2e31`) and Bernstein–Lunts, *Equivariant Sheaves and Functors*,
Part I (retrieved excerpt, 66 pages, sha256 prefix `d5c84bf06367288d`). Full
text was fetched and stamped; the inspected ranges and every harvested heading
with its disposition are recorded in the coverage file (26 rows: 18 on the A
page, 8 on the B page). The A page tripped only the advisory `low-yield`
warning (7/18 scaffolded), expected for a deliberately small foundations pair;
every decline carries a specific reason and, where applicable, a destination in
the later pairs of this same frontier. No fetch failed, so no `source_drop`,
`owner-escalation` or alternative-argument record was needed.

## Checks actually run (recorded output)

- `node tools/manifest-deps.mjs <batch-30.pages.json>` — `7 item(s), 0 missing, 0 error(s)`.
- `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28`
  — no error touches batch 30; the command reports only the empty scaffold
  inventories of the sibling pairs still unscaffolded at the time of the run
  (including this pair's future consumers, e.g.
  `analytic-derived-six-operations-and-duality`). Sibling workers were scaffolding
  concurrently, so this output is transient; batch 30's seven labels match the
  tool's computed levels exactly. Re-run at stage close.
- `node tools/content-policy.mjs --manifest-only <batch-30.pages.json>` — `7 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-special-representation-examples-28`
  — at the earlier run the page stack was acyclic and consistent with no hard
  error. At the final re-run, four `undeclared-prereq` hard errors appear from
  batch 31's concurrently scaffolded items
  (`compact-laplace-type-operators-and-hodge-representatives`, three items, and
  its examples page, one item); no error and no finding concerns batch 30. The
  only batch-30 lines are the inherited `redundant-prereq` warnings on this
  pair's `requires`, which come from the plan's requires reduction and were not
  changed (plan-controlled).
- `node tools/coverage-checklist.mjs <batch-30.coverage.json> --require-destination`
  — `2 page(s), 26 harvested result(s), 0 error(s), 1 warning(s)` (the low-yield warning above).
- `node tools/source-fetch-check.mjs --coverage <batch-30.coverage.json> --stamp`
  — `4/4 source(s) fetch-verified`.
- `node tools/url-sweep.mjs --coverage <batch-30.coverage.json> --recover` — `2/2 live; 0 failed`.
- `node tools/source-backing.mjs --coverage <batch-30.coverage.json> --liveness <batch-30-url-liveness.json>`
  — `6 authored result(s) … every one still backed`.
- `node tools/extcheck.mjs` — `OK` over the corpus; `node tools/fwdcheck.mjs --quiet`
  — `OK` (two unrelated warnings on a Hopf–Hecke page, outside this run).
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-special-representation-examples-28`
  — batch 30 marked reviewed. One declared cross-batch item edge is recorded
  with a current review row: the injective-model lemma's AC ⇒ DC use of the
  batch-2 item `thm-choice-implies-dependent-implies-countable-choice`. When
  batch 40 is scaffolded, the B example's two load-bearing forward references
  will appear as its cross-batch edges and require review rows at Step 3b/5b.
- Re-run after the wording repair: `content-policy` still `7 scoped item(s), 0
  error(s), 0 warning(s)`; `coverage-checklist` still `2 page(s), 26 harvested
  result(s), 0 error(s), 1 warning(s)`; the dependency ledger refreshed. A
  direct replication of the scaffold stage's own completeness criteria
  (`scaffoldArtifacts` in `tools/autopilot/stages/mathlib.mts`: manifest and
  coverage present, every item's Step-1 decision closed, and every
  `dependency_level` equal to the computed level) reports `batch-30 scaffold
  complete: true` with all seven items `closed=true` at levels 0, 0, 1, 8, 0, 0, 9.

## Readiness outcomes

All seven items are recorded `ready` with their examined dependency IDs
(`node tools/step1-decisions.mjs record …`). The B example's readiness rests on
its two declared load-bearing forward references, which `fwdcheck` verifies and
which the Step-3/5 review must close against the authored batch-40 items; no
item is escalated and no owner decision is requested. This scaffold record is
not an authored-proof acceptance, an audit or a gate result; Step 3 provides
the mathematical review of authored item files.

Transient-input note for the operator. A Step-1 record hashes its item's whole
transitive input closure, which for the B example includes the planned
batch-40 forward-reference items and, through them, the live manifest of batch
32 (`compact-support-sheaf-calculus`). While sibling workers are still
scaffolding those batches, their manifest writes can invalidate the B example's
record between status passes; the engine's scaffold check then reports
`scaffold-incomplete`. All seven records were re-recorded against the current
disk state at the end of this dispatch and verified closed in a single pass.
The owner/operator stable guard should refresh the records once the sibling
writers have drained, exactly as for the other batches of this run.

## Owner integration update — 2026-10-09T11:09:10.052281+00:00

Owner Round1 corrected native smoothness to intrinsic algebraic regularity, locally closed subvariety reduced structure, explicit local extension splitting, B cone[1]/rotation and inheritedAC. Exact9edits and all3actualtransitive consumer checks by SAMEreviewer are in frontier-44-special-representation-examples-28-klr-foundation-constructible-native30-review/integration-round1.json and consumer-closure-round1.json. No additional current consumer repair needed;55unscaffoldedfutureplannedconsumers remainpending. Earlier native local-affine-space wording/cone-without-shift are superseded, not current definitions/proof routes. Current scaffold readiness refreshed normally. This records scaffold repair/currency; no authored-proof independent audit, gate pass or original global-basis readiness is asserted. Historical dispatch/source reading evidence above is retained.
