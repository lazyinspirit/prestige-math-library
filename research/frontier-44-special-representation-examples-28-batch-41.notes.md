# Batch 41 Step-1 scaffold — `equivariant-constructible-perverse-foundations`

Run `frontier-44-special-representation-examples-28`; batch 41; A page
`equivariant-constructible-perverse-foundations` (order 1818) and B page
`equivariant-constructible-perverse-foundations-examples` (order 1822), both in
`representation-theory`. Eight A items and one B example were scaffolded in
prerequisite order; all nine carry current `ready` Step-1 records. No authored
item file, independent mathematical audit, gate pass or stage close is claimed.

## Design, plan and owner direction

- `research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`
  was read first. It authorizes this pair as one of the 21 appended in-run
  prerequisite pairs, requires suppliers before consumers, and preserves every
  approved claim; this batch follows that direction. No owner decision specific
  to this pair overrides the design.
- The dispatch's design locator `research/plan-klr-foundation-prerequisites.md`
  **L795 is stale**: line 795 falls in the preceding Hodge section; the
  `## Equivariant Constructible Perverse Foundations` section begins at line
  **945**. Recorded, not corrected here (shared plan is not an owned carrier).
- The design section and the current plan inventory agree item for item: the same
  eight A IDs, one B example, the same titles, kinds, declared inputs and orders
  1818/1822. Nothing was dropped or weakened. The drift review already recorded
  "no-drift (order 1818; declared closure complete)".
- The design's own warnings are preserved in the scaffolded contracts: the
  corrected `r = a-b` retract-versus-extension boundary of the acyclic-pullback
  lemma; the no-global-tensor-splitting warning (characteristic-class
  transgressions allowed); the normalized equivariant dualizing object
  `omega_{X_N} tensor a^*omega_{B_N}^{-1}` with no unnormalized stack shift; the
  middle-perverse statement in the equivariant category with division-algebra
  (not field) endomorphism ring and heart full faithfulness only; degreewise
  finite Ext with no finite total Ext and no preserved simplicity under scalar
  extension.

## Items, dependency corrections and levels

Recorded in prerequisite order (in-run level in parentheses; levels recompute
mechanically and equal these labels):

1. `def-equivariant-constructible-derived-category-for-complex-algebraic-varieties`
   (10, definition, proof not-applicable). Declared inputs kept; added the
   constructibility/action/variety language's in-closure definitions, the batch-36
   simplicial sheaf descent lemma (ambient category and coinduced injectives) and
   `def-module-on-ringed-space`. `justified_by` names the same-batch
   `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom`
   (well-definedness: triangulated, locally small, conservative restriction,
   idempotent completeness); no dependency edge is claimed.
2. `lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences`
   (14). Declared inputs kept; added AC and the basic theory definitions, and
   **`lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions`**
   (batch 40) because the proof's Step 2 genuinely consumes the derived adjunction
   `f^* -| Rf_*` on bounded sheaf complexes, which the design's declared list
   omitted (the published sheaf-level adjunction alone does not discharge it).
3. `lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom`
   (15). Declared inputs kept; added the free-action/principal-bundle/quotient
   language definitions that resolve inside the page closure, and the topology
   inputs the proof actually invokes: `def-locally-trivial-fiber-bundle`,
   `def-smooth-partition-of-unity-subordinate-to-an-open-cover`,
   `thm-numerable-fiber-bundles-are-hurewicz-fibrations` (spheres bundles are
   fibrations for the Serre spectral sequence),
   `thm-cellular-cochains-compute-cohomology-with-local-coefficients` and
   `def-cw-complex-with-closure-finiteness-and-weak-topology` (sphere cell
   computation). The exact CW bookkeeping of the finite Stiefel/Grassmannian
   manifolds (finite Schubert-cell models and their transport into the Serre
   spectral sequence) remains an authoring obligation to be reconciled at Step 3;
   the scaffold does not hide it.
4. `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom`
   (16). Declared inputs kept; added AC and basic derived-category/sheaf
   definitions. The telescope idempotent-splitting argument is part of the
   statement contract and is kept exactly.
5. `thm-constructible-six-functors-proper-base-change-and-verdier-duality` (17).
   Declared inputs kept; added AC and the operation definitions (tensor, internal
   Hom, extension by zero, compactly supported global sections). No claim of
   unnormalized stack duality.
6. `lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative`
   (19). Declared inputs kept; added AC and the ordinary t-structure/derived
   definitions. The dimension shift `s_N = u_N - g` (not `u_N`, not `g`) is
   binding.
7. `thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`
   (20). Declared inputs kept; added AC, `def-canonical-t-structure-on-a-derived-category`,
   extension-by-zero and finite-rank local-system definitions.
8. `thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars`
   (21). Declared inputs kept; added AC and basic tensor/Hom/derived definitions.
9. B: `ex-equivariant-constructible-ext-on-a-point-is-degreewise-finite-not-total-finite`
   (22). Declared inputs kept; added AC, the CW/cellular items and the two
   in-closure group/flag definitions. The `def-complex-projective-space-and-holomorphic-charts`
   dependency attempted first was dropped (out of closure, see below) and the
   projective model is instead scaffolded through
   `def-stiefel-space-grassmannian-and-tautological-bundle` (identifying
   `Gr_1(C^N) = P^{N-1}` via its standard charts) plus the cellular cochain theorem.

No item depends on a later item of the same page; no cycle exists. All dependency
levels were recomputed after the dependency edits and match the checker.

## Out-of-closure notion pages — owner reconciliation required

`validate-plan --run` initially rejected five added dependencies whose definition
pages are outside the closure of this page's declared `requires`:

- `def-algebraic-group-action-and-scheme-theoretic-stabilizer`
  (page `algebraic-group-actions-orbits-stabilizers-and-controlled-quotients`),
  used by items 1, 3 and 9 as the algebraic-action language;
- `def-simplicial-object-and-simplicial-commutative-ring`
  (page `algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations`),
  used by item 1 for the simplicial nerve language;
- `def-complex-projective-space-and-holomorphic-charts`
  (page `divisors-riemann-roch-and-duality`), used by item 9 for `P^{N-1}`.

They were **dropped** so the plan's declared closure is preserved; the notions
remain prose context in the statements/strategies, and the load-bearing
constructions are supplied inside the closure (batch-36 constructs the simplicial
sheaf category from a strict augmented simplicial space; `def-free-group-action`
and `def-invertible-matrix-and-general-linear-group` carry the frame-space
action; the projective model is identified from the Grassmannian definition).
Owner recommendation: either add those three pages (or narrower items) to the
`requires` of this pair, or confirm that prose-context use of these standard
notions is acceptable; this is a bookkeeping/scope question, not a proof gap in
the declared closure. No shared plan was edited.

## AC bookkeeping

Every item states AC (the design drafts assume it), declares
`def-axiom-of-choice`, and records its exact use in `axiom_use`: injective
replacements and enough-injectives for module sheaves (through the batch-30 and
batch-36 suppliers), injective/cochain models, products of injectives, and the
AC-assumed ordinary six-operation, duality, perverse and topological suppliers.
The finite Stiefel/frame, Gram-Schmidt, telescope and perverse arguments are
otherwise choice-free. No incompatible-axiom branch is created;
`deferred-set-theory-beyond-choice` is on no proof or prerequisite path of this
pair.

## Sources (full text fetched, stamped and inspected)

`source-fetch-check --coverage … --stamp`: **5/5 source instances fetch-verified
(5 newly stamped)**; check mode **5/5 resolved (0 documented drops)**. Every
stamped hash equals the cached bytes inspected locally:

- **Bernstein–Lunts, Equivariant Sheaves and Functors, Part I** (66 pp.,
  sha256_16 `d5c84bf06367288d`): §1.9.1–1.9.4 and Appendix A2–A4 (n-acyclic maps,
  interval/image criteria, Vietoris–Begle); §2.1.1–2.8 (resolutions, the limit
  definition, triangulated structure, classifying-space picture, constructible
  objects); §3.1–3.6 (Stiefel resolutions, functors, equivariant Verdier duality,
  constructible sheaves); §5.1–5.3 (equivariant perverse sheaves, IC, decomposition
  theorem — the last deferred to batch 48); Appendix B1–B6 (simplicial
  description). Harvest dispositions in the coverage file.
- **BBD, Faisceaux pervers, Astérisque 100** (172 pp., sha256_16
  `b1e10440e13cb6bf`): §1.4.1–1.4.26 (recollement, Théorème 1.4.10, intermediate
  extension, simple objects) and §2.1.1–2.1.23 (perverse t-structure on
  stratified spaces, comparison, descent).
- **Hatcher, Algebraic Topology** (560 pp., sha256_16 `bebb3032bf9021b9`;
  author-hosted full PDF, retrieved after one initial `pi.math.cornell.edu`
  timeout, recorded as an attempt): §4.2 pp. 375–378 (fibrations, Theorem 4.41,
  bundles over paracompact bases) and Example 0.6/§3.2 Theorem 3.19 (cells and
  cohomology of `CP^n`).

Coverage output: **2 pages, 45 harvested results, 0 errors, 0 warnings**
(`coverage-checklist --require-destination`). Scoped `url-sweep --recover
--fail-on-dead`: **3/3 live, 0 failed, 0 blocking** (output kept in
`/tmp/b41/url-liveness.json` so the engine's run-level artifact is not
pre-empted). Scoped `source-backing` against that liveness file: **9 authored
results, every one still backed by an openable source**.

## Cross-batch dependencies

`research/frontier-44-special-representation-examples-28-batch-41.cross-batch-dependencies.json`
has **31 reviewed rows** — one for every cross-batch edge declared by this batch
(4 page edges and 27 item edges), each `status: verified` with the exact consumed
clause: page edges to `analytic-constructible-sheaf-foundations` (batch 30),
`analytic-derived-six-operations-and-duality` (batch 40),
`complex-algebraic-stratified-topology` (batch 37) and
`constructible-incidence-and-cochain-models` (batch 36); item edges to those
batches' items plus `def-compactly-supported-global-sections` (batch 32), as
listed in the file. Supplier proofs remain owed to Steps 3–5; these rows record
declaration-level checks of hypotheses, direction and conventions, not
acceptance. The unified ledger `refresh --run` lists batch 41 among the reviewed
batches with all 31 edges reviewed; `--require-reviewed` still fails only through
unreviewed sibling batches (11, 24, 25, 44–49 at this writing) and their 38
edges. Sibling expectation for the Step-8 reconciler: batches 44, 45, 48 and 49
already declare this pair in their page `requires`; their writers own those
consumer rows.

## Published defects

None found. Every published `deps` target used by this batch was read on disk
(statements and hypotheses; the specific items are enumerated in the record
reasons): the AC=>DC machinery, the constructible-category definition, the
locally constant sheaf definition, the injective-model lemma (batch 30); the
c_smooth/compactly-supported sections definition (batch 32); the sheaf adjunction,
t-structure and derived-Hom definitions, tensor and Hom sheaves, extension by
zero, Stiefel/Grassmannian, Gram–Schmidt, Serre spectral sequence, cellular
cochains, CW complex definition, locally trivial bundles, numerable-bundle
fibration theorem, smooth partitions of unity, principal/associated bundles,
projective-space definition, `def-axiom-of-choice` (published corpus). All match
the uses. No repair was needed and no defect row is entered.

Recorded outside this batch's scope: the unified ledger currently carries 25
pre-existing orphaned review rows (batches 9 and 23); no batch-41 row is
orphaned. Pre-existing run work remaining in `step1-decisions check` is the
batch-10 owner-held escalation on
`thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis`
plus 19 empty sibling page inventories — untouched here.

## Checks (actual results at this writing)

- `node tools/manifest-deps.mjs research/…-batch-*.pages.json` — `703 item(s),
  0 normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/…-batch-*.pages.json`
  — `703 scoped item(s), 0 error(s), 0 warning(s)`. (A single-manifest
  invocation reports cross-batch targets as `batch-dependency-missing`; the
  scaffold gate runs the whole-level join, which passes.)
- `node tools/item-dependency-levels.mjs check --run …` — no error for any
  batch-41 item; every label equals the computed level (10/14/15/16/17/19/20/21/22).
  Remaining findings are `empty scaffold inventory` for pending sibling batches.
- `node tools/validate-plan.mjs research/plan-spec.json --run …` — exit 0;
  declared page order acyclic and consistent, no item-level cycles, forward
  references, B-page dependencies or unresolved ids among the 80 pages with item
  lists. (18 planned sibling pages still carry no item list.)
- `node tools/manifest-integrity.mjs --run …` — `98 page(s) owed, 98 in the
  manifests … no scope drift`.
- `node tools/coverage-checklist.mjs research/…-batch-41.coverage.json
  --require-destination` — `2 page(s), 45 harvested result(s), 0 error(s),
  0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/…-batch-41.coverage.json
  --stamp` — `5/5 source(s) fetch-verified (5 newly stamped)`; check mode `5/5
  resolved`.
- `node tools/url-sweep.mjs --coverage … --out /tmp/b41/url-liveness.json
  --recover --fail-on-dead` — `3/3 live; 0 failed; 0 blocking`, exit 0.
- `node tools/source-backing.mjs --coverage … --liveness /tmp/b41/url-liveness.json`
  — `9 authored result(s) … every one still backed`.
- `node tools/frontier-dependency-ledger.mjs refresh --run …` — refreshed;
  batch 41 has 31/31 reviewed consumer edges.
- `node tools/step1-decisions.mjs check --run …` — `703 items, 702 ready`;
  zero work rows for any batch-41 item; the only unresolved item row is the
  pre-existing batch-10 owner escalation.

- External-reference checks (`fwdcheck`/`extcheck`) are item-mode validators and
  cannot run at Step 1: `frontier-item-gate.mjs --run … --tool fwdcheck -- --quiet`
  reports `focus-item-unknown` for every manifest item whose Step-3 carrier does
  not exist yet, as batch 43's ledger section also records for this frontier.
  Coverage and the manifest policy pass above; `depsource`/`pathcheck` likewise
  select authored carriers. These run after Step 3, not now.
- Engine artifact-completeness simulation (`scaffoldArtifacts` predicate): the
  batch-41 manifest is populated, every page has items, all nine
  `research/…-step1-<id>.json` receipts are current and closed, every
  `dependency_level` equals the computed level, no dependency cycle exists, and
  the coverage file is present — unit 41 is artifact-complete for the engine.

## Step-1 decisions

Recorded `ready`, one at a time in prerequisite order, with examined dependency
IDs and the evidence above:

1. `def-equivariant-constructible-derived-category-for-complex-algebraic-varieties`
   (9 deps, level 10, `7882704530b30a49…`)
2. `lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences`
   (13 deps, level 14, `0b1e71a1a82c5c0e…`)
3. `lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom`
   (25 deps, level 15, `7882704530b30a49…`)
4. `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom`
   (12 deps, level 16, `7882704530b30a49…`)
5. `thm-constructible-six-functors-proper-base-change-and-verdier-duality`
   (16 deps, level 17, `d536fa281317430f…`)
6. `lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative`
   (11 deps, level 19, `d61bf0ac20a9f3ac…`)
7. `thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`
   (14 deps, level 20, `a66fc1982a8cbf4e…`)
8. `thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars`
   (15 deps, level 21, `c38182fccaa4a155…`)
9. `ex-equivariant-constructible-ext-on-a-point-is-degreewise-finite-not-total-finite`
   (8 deps, level 22, `a5325e47c3793259…`)

Items 1, 3 and 4 share one hash because item 1's `justified_by` discharge makes
their transitive input closures coincide; each record is nevertheless current and
closed under the checker. Zero escalations. Owner/operator reconciliation and
the full engine gate follow construction; neither a worker exit nor a readiness
record is independent mathematical approval. Step 3 provides that review.
