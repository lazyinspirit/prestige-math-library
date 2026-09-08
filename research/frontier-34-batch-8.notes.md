# frontier-34 beta batch-8 — BLOCKED scaffold

Only this batch's `.pages.json`, `.coverage.json`, and `.notes.md` were written in the repository. No plan, design, published item, library page, or other batch was modified. Temporary diagnostics and a plan overlay are under `/tmp`. No publication or sufficient verdict is authorized by this artifact.

## Scope and current authority

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, the generic beta task, complete AV-14 design (research/plan-algebraic-geometry-track.md lines 831–889), current plan entries, available step-0/drift evidence, and actual prerequisite items. After context handoff, reread the scaffold, source ranges, dependency findings and open obligations. The live identity was checked with `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run frontier-34 --state-dir .autopilot/frontier-34` and git history: frontier-34 was at step 1 scaffold; HEAD was 4501527a0. Historical RESUME files were not treated as live authority.

Plan controls A order 366.067, B 366.068, scheme-theory, A requires `fibre-products-base-change-and-scheme-theoretic-fibres-examples`; B requires its A. Both canonical inventories remain empty pending the driver splice. The design explicitly names AV-12, AV-13 and valuation rings; all are in the plan's transitive requires closure. Therefore the different spelling of the immediate prerequisite list does not require changing the plan. No identity/order/category scope conflict was found. No substitute edge was invented.

Design/implementation differences recorded explicitly:

- All 23 designed A IDs and all eight designed B IDs remain. Added 16 A prerequisites/closely related source results and two B warnings; final inventory is 39 A + 10 B, below the 60-item A limit. The additions establish immersion locality, composite diagonals, schematic density, relative projective charts, valuation domination, specialization and the quasi-compact-image argument, together with separation permanence/cancellation. They are mathematical dependencies, not padding.
- B examples/counterexamples have verification strategies and proof provenance `ai-altered`, correcting the design's `not-applicable`, which SCHEMA permits only for definitions/remarks.
- The precise all-valuation criterion requires quasi-separatedness but not finite type; it includes the design's finite-type case. This is a stronger proved target, not a weakened scope. Stacks 26.22.1 has no finiteness requirement in the easy direction; 26.22.2 assumes quasi-separatedness in the converse.
- The design's Vakil pagination belongs to a different version. The live March 31 2011 draft has §11.1 on printed pp.225–235, dense-open agreement on pp.235–236, and the valuative discussion in §13.4, pp.274–275. Exact harvested ranges are in coverage. Tong and Milne were not adopted as backing in place of unread passages; the independent read treatments used are Vakil, Conrad and Stacks.
- The design requires a precise literature DVR-warning example. The retained candidate has not met that requirement: B8-S2 below. It is explicitly marked AI-generated, as a dependency leaf, not falsely labelled a literature theorem.

## Conventions and proof route

Schemes and commutative unital rings are arbitrary; no reducedness, Noetherian, flatness or finite-type assumption is implicit. Absolute separatedness means over Spec Z. The local closed-immersion convention is topological closed embedding plus a surjective structure-sheaf map. An immersion is closed followed by open. Its factorization cannot silently be reversed. The diagonal's canonical residue-field points must not be confused with all product points having equal two projections.

The diagonal is first closed into the union of the compatible U times U charts; these charts do not cover the entire product in general. Base change and composition then give separation permanence. Monicity uses arbitrary test schemes. Equalizers represent equality of scheme morphisms, including residue maps. Dense-open agreement uses schematic density; reducedness makes a topologically dense open schematically dense. The extra nonreduced and complex-conjugation leaves demonstrate these distinctions.

Relative projective space is constructed from n+1 polynomial charts with reciprocal transition maps before its diagonal is cut out by x_i y_j-x_j y_i. Classical projective varieties or a later Proj/Segre construction are not used as if they already supplied relative projective schemes.

For the converse valuative criterion, the proof order is domination definition -> Zorn maximal local subring -> inverse-element valuation criterion with prescribed fraction field -> valuation realization of specialization with prescribed residue-field extension -> specialization-stable quasi-compact image closed -> quasi-compact immersion with valuative existence closed -> apply to the diagonal. The generic point of a valuation spectrum is not assumed open. The forward direction instead uses a closed equalizer in Spec R containing Spec Frac R and the injectivity R -> Frac R. No later properness page supplies this proof.

Axiom ledger: work within Choice for prime/maximal-ideal existence, nilradical intersection, valuation domination and the converse. Choice is explicit in the new domination and specialization statements and theorem. Earlier prime-spectrum results may already carry Choice; no assertion of a choice-free global separation development is made. The finite affine-coordinate calculations themselves do not invoke a DVR reduction or an unproved beyond-choice result.

## Fatal findings and exact repair obligations

**B8-D1 — inadequate published supplier.** `items/thm-affine-closed-immersions-quotient-rings.md` states the correct quotient-spectrum classification for arbitrary closed immersions into an affine scheme. Its declared deps are only `def-closed-immersion-schemes`, `def-affine-scheme`, `thm-affine-scheme-ring-anti-equivalence`. Its complete proof was read: row 1.1 imports from Stacks Tag 01IN the ideal sheaf, distinguished-open quotient description and affine conclusion, then takes f=1. This is the main direction, not a local deduction from those deps. A published audit/judge stamp does not fill this proof gap under the dispatch contract.

The full Stacks §26.10 text was read. Its proof invokes the affine closed-subspace/quasi-coherent-ideal interface; Stacks and the repository's Hartshorne-style closed-immersion definitions also need the convention bridge. Do not infer surjectivity of global sections from a sheaf epimorphism. Required repair: locally prove ideal reconstruction/affineness from the existing closed-immersion convention, or provide an earlier proved interface with its exact hypotheses and dependencies. Published repair is outside this batch's writable scope. This is an inadequacy of supplied proof, not a claim that the classical theorem is false. No new supplier pair is needed merely to rename this existing theorem; an authorized upstream repair must establish its missing direction. The exact consumer paths are embedded below (29 affected items at the audit snapshot).

**B8-D2 — full transitive semantic closure is not certified.** The graph traversal covers plan requires, all batch manifests available on disk, published metadata, item deps, justified_by and non-remark forward_refs. This is not a completed proof-by-proof review of thousands of statements. Missing page bodies and unresolved suppliers remain. Do not upgrade a resolving ID or a graph-pass into mathematical approval. The attached raw graph diagnostics are leads requiring exact statement/hypothesis review, including inherited forward/B-leaf edges; the standard validators have narrower inventories and reported their own results below.

**B8-D3 — earlier Kunneth supplier pair absent.** The requires closure contains `singular-cohomology-and-coefficient-theorems`, whose current batch-6 manifest intentionally depends on `thm-pid-kunneth-exactness-from-cycle-boundary-presentations` and `thm-pid-kunneth-splitting-from-cycle-boundary-presentations`. Neither exists in the plan, manifests as a supplied item, or published items. Batch-6 notes record its complete prerequisite A/B proposal; it is reproduced below for this inherited fatal closure finding. It is not an authorized addition or an approved proof. The consumer remains blocked until the prose scaffold and plan contain a proved, properly placed supplier. This batch does not write those files.

**B8-D4 — confirmed inherited ordering and B-leaf violations.** Published metadata and current plan inventories were compared directly. Four published items depend on `def-dependent-choice`, homed at `compactness-in-metric-spaces` order 120, from earlier pages: `lem-noetherian-ring-maximal-element-annihilator-exists`, `thm-lasker-noether-primary-decomposition`, and `cor-radical-ideals-as-intersections-of-minimal-primes-noetherian` at 111.009; `thm-complete-nakayama-lemma` at 111.025. These are forward item prerequisites in this inherited closure. Separately, `fs-any-sequence-of-functors-with-long-exact-sequences-is-a-delta-functor` (A 365.049) and `cex-a-nonnatural-choice-of-connecting-maps-does-not-form-a-delta-functor` (B 365.050) depend on the foreign B leaf `ex-a-degreewise-split-sequence-with-nonzero-connecting-map` (365.044). These six paths are fatal under the full-closure contract even though canonical-plan validation does not reject the published metadata drift. Authorized upstream writers must reconcile the actual deps and proof order; this batch does not change them.

The published `thm-quasi-coherent-ideal-closed-subscheme-correspondence` was also read in full as a possible alternative to B8-D1. It explicitly depends on `thm-affine-closed-immersions-quotient-rings` and invokes that classification in both directions, so it cannot supply an independent replacement. The associated definition alone does not prove reconstruction.

**B8-S1 — standard full-text fetch verification fails.** All nine sources are readable as full text via the web reader, including the relevant complete proofs. The shell fetch path fails DNS (`curl` code 6 and Node EAI_AGAIN), so no byte/hash fetch stamps exist. URL liveness reports zero live from that environment; this is not evidence that the texts are globally dead. No fetch stamp was fabricated from a snippet, abstract or browser extraction. The source URLs and mathematics remain intact. Stacks definition-only 01IO citations were corrected to the actually read full section 01IM. The design's other treatments were not falsely retained as read sources.

**B8-S2 — precise DVR-only witness lacks required primary source.** The candidate doubles Spec V at the closed point for the nondiscrete rank-one valuation domain formed by the factorial-root polynomial DVR tower. Its verification strategy spells out why maps into a DVR factor through its residue field or fraction field, so DVR tests miss the two V-valued lifts. Conrad Remark 2.2 backs only the restriction warning, not that exact example. A MathOverflow discussion was scouted but is not accepted as primary technical backing. The Temkin/Tyomkin Pruefer-spaces paper was scouted via arXiv after an inaccessible original link; its consulted example was not this witness and was not rebranded as backing. Until a precise full primary treatment is read and harvested, the design's source-backed counterexample requirement is unmet. Keep the item and block the pair.

## Source evidence

Coverage records nine exact URLs, source headings/result numbers, locators, local-item mappings and dispositions. Vakil supplies the book treatment; Conrad supplies an independent proof of the valuative machinery; Stacks supplies independent precise conventions and proofs. Full selected mathematical text was read, not only abstracts or search snippets. PDF screenshot attempts failed with cache misses; extracted full text was available and no successful screenshot or downloaded PDF is claimed. The coverage contains 102 harvest rows. Declined topics have specific reasons, and properness/universal-closedness applications have the valid destination `finite-proper-and-projective-morphisms`. None is a proof supplier here.

## Checks actually run

| Check | Observed result |
|---|---|
| `coverage-checklist.mjs research/frontier-34-batch-8.coverage.json --require-destination` | Exit 0: 1 page, 102 harvested rows, 0 errors/warnings. Structural only; does not detect B8-S2. |
| `manifest-deps.mjs research/frontier-34-batch-*.pages.json` | Exit 0: 770 items, 0 normalized, 0 errors at the run snapshot. Does not certify semantic closure. |
| `content-policy.mjs --manifest-only research/frontier-34-batch-8.pages.json` | Exit 0: 49 items, 0 errors/warnings. Earlier run found an unresolved shorthand complex-conjugation ID; corrected to the read published lemma before this pass. |
| `validate-plan.mjs research/plan-spec.json` | Exit 0: 1476 pages; 892/1471 planned pages have inventories, 579 do not. Current owned canonical inventories are empty. |
| `validate-plan.mjs /tmp/frontier34-b8-plan-overlay.json` | Exit 0: owned 49-item inventory substituted into a temporary copy; no canonical plan write. Existing plan warnings remain. |
| `extcheck.mjs --quiet` | Exit 0, 63 existing warnings. No reported fatal Foundations bootstrap violation. |
| `url-sweep.mjs --coverage research/frontier-34-batch-8.coverage.json --out /tmp/frontier34-b8-url-liveness.json --fail-on-dead` | Exit 1: 0/9 live, nine DNS-resolution failures. |
| `source-backing.mjs --coverage research/frontier-34-batch-8.coverage.json --liveness /tmp/frontier34-b8-url-liveness.json --require-verified` | Exit 1: 47 harvested authored-result targets have no verified openable source under this gate. |
| `source-fetch-check.mjs --coverage research/frontier-34-batch-8.coverage.json --stamp --timeout-sec 10` | Exit 1: 0/9 verified, 0 newly stamped, nine EAI_AGAIN failures. |
| `source-fetch-check.mjs --coverage research/frontier-34-batch-8.coverage.json` | Exit 1: nine unstamped sources. |
| Supplemental Python graph traversal | Snapshot below; aliases resolved only when no canonical ID exists. Explicit deps, justified_by and load-bearing forward_refs traversed; deps cycles checked separately to avoid mistaking valid well-definedness back-links for cycles. |

The initial diagnostic shorthand `def-cyclic-group` is a published alias of `def-generated-subgroup`, not a missing supplier. An initial alias-first traversal incorrectly confused the canonical combinatorial `thm-product-rule` with the calculus alias; that diagnostic was discarded in favor of canonical-ID precedence. These are tooling corrections, not repairs to published mathematics.

## Complete upstream pair proposal from batch-6 evidence

- Title: Kunneth Exactness and Splittings over Principal Ideal Domains.
- Category: homological-algebra.
- A slug: kunneth-exactness-and-splittings-over-principal-ideal-domains.
- B slug: kunneth-exactness-and-splittings-over-principal-ideal-domains-examples.
- Placement: A 365.0581, B 365.0582, after universal-coefficients-and-kunneth-theorems-examples (365.058) and before group-cohomology-as-a-derived-functor (365.059). These are proposed unused orders, subject to canonical writer revalidation.
- A requires: universal-coefficients-and-kunneth-theorems (earlier A supplier).
- B requires: the new A.
- Add a backward page requirement from this batch's A to the new A when materialized. Preserve the current prior-topology requirement.

A inventory, in proof order (all under Choice, R a PID, nonnegative complexes of free R-modules):

1. lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces — lemma. deps: [lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free, thm-free-modules-are-projective-with-choice-boundary, lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid]. Choose sections onto B_(n-1), identify each C_n with Z_n plus B_(n-1); record the actual differential as the inclusion B_(n-1) -> Z_(n-1), not an unjustified splitting of boundaries inside cycles.
2. lem-pid-tensor-two-term-pieces-have-the-kunneth-kernel-and-cokernel — lemma. deps: [lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces, def-balanced-tor-bifunctor, def-tensor-product-total-complex-of-chain-complexes, lem-the-kunneth-tor-map]. Compute the kernels, images and cokernels on these length-one free presentations, matching the existing natural Tor quotient and cycle-tensor map including signs.
3. thm-pid-kunneth-exactness-from-cycle-boundary-presentations — theorem. deps: [lem-pid-tensor-two-term-pieces-have-the-kunneth-kernel-and-cokernel, lem-the-kunneth-cross-product-map-is-well-defined-and-natural, lem-the-kunneth-tor-map]. Prove locally the natural tensor/Tor short exact sequence for each degree, identifying the kernel of the existing quotient with the cycle cross-product image. No appeal to the old top-level Kunneth theorem as proof.
4. thm-pid-kunneth-splitting-from-cycle-boundary-presentations — theorem. deps: [thm-pid-kunneth-exactness-from-cycle-boundary-presentations, lem-pid-complex-decomposes-into-two-term-cycle-boundary-pieces]. Construct a section for every PID from the two-term decomposition, prove it is R-linear and right-inverse, and distinguish its noncanonical choices from natural exactness. A nonnatural decomposition is not evidence of nonexistence of all natural splittings without a witness.

B inventory:

1. ex-pid-polynomial-ring-kunneth-tor-class — example. deps: [thm-pid-kunneth-exactness-from-cycle-boundary-presentations, thm-pid-kunneth-splitting-from-cycle-boundary-presentations]. Use R=k[t], C=D=(R --t--> R) in degrees 1,0: H_0(tensor)=R/(t), H_1(tensor)=R/(t), H_2=0; compute the cycle e_1 tensor e_0 - e_0 tensor e_1 and quotient. This tests genuinely non-Z PID coefficients.
2. ex-pid-kunneth-over-a-field-has-no-tor-correction — example. deps: [thm-pid-kunneth-exactness-from-cycle-boundary-presentations, prop-modules-over-a-field-are-projective-flat-and-injective]. Compute complexes supported in degrees 0,1 with zero differential and identify every tensor generator and degree, with the Tor quotient zero.


In the copied proposal, “this batch” refers to upstream batch 6, not batch 8. The upstream proposal has not been independently approved by this batch. Its title, category, placement, prerequisites and inventories must be validated by the authorized plan/prose writer.

## Dependency snapshot and paths

```json
{
  "plan_pages_in_requires_closure": 319,
  "planned_items_in_page_closure": 6358,
  "all_manifest_files_scanned": 358,
  "combined_item_closure_size": 6802,
  "missing_item_ids": [
    "thm-pid-kunneth-exactness-from-cycle-boundary-presentations",
    "thm-pid-kunneth-splitting-from-cycle-boundary-presentations"
  ],
  "deps_cycles": [],
  "forward_dependency_edges": [
    [
      "lem-noetherian-ring-maximal-element-annihilator-exists",
      "def-dependent-choice"
    ],
    [
      "thm-complete-nakayama-lemma",
      "def-dependent-choice"
    ],
    [
      "thm-lasker-noether-primary-decomposition",
      "def-dependent-choice"
    ],
    [
      "cor-radical-ideals-as-intersections-of-minimal-primes-noetherian",
      "def-dependent-choice"
    ]
  ],
  "cross_page_B_dependency_edges": [
    [
      "cex-a-nonnatural-choice-of-connecting-maps-does-not-form-a-delta-functor",
      "ex-a-degreewise-split-sequence-with-nonzero-connecting-map"
    ],
    [
      "fs-any-sequence-of-functors-with-long-exact-sequences-is-a-delta-functor",
      "ex-a-degreewise-split-sequence-with-nonzero-connecting-map"
    ]
  ],
  "page_bodies_missing": [
    "bocksteins-steenrod-squares-and-cohomology-operations",
    "bocksteins-steenrod-squares-and-cohomology-operations-examples",
    "chern-and-pontryagin-classes-by-splitting-and-complexification",
    "chern-and-pontryagin-classes-by-splitting-and-complexification-examples",
    "complex-topological-k-theory-and-bott-periodicity",
    "complex-topological-k-theory-and-bott-periodicity-examples",
    "cup-cap-cross-products-and-cohomology-rings",
    "cup-cap-cross-products-and-cohomology-rings-examples",
    "diagonals-separated-morphisms-and-valuative-uniqueness",
    "double-complexes-exact-couples-and-convergence",
    "double-complexes-exact-couples-and-convergence-examples",
    "fibrations-fiber-bundles-and-homotopy-exact-sequences",
    "fibrations-fiber-bundles-and-homotopy-exact-sequences-examples",
    "generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence",
    "generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples",
    "grothendieck-spectral-sequences-and-computations",
    "grothendieck-spectral-sequences-and-computations-examples",
    "higher-homotopy-groups-and-cofiber-sequences",
    "higher-homotopy-groups-and-cofiber-sequences-examples",
    "hurewicz-whitehead-freudenthal-and-cw-approximation",
    "hurewicz-whitehead-freudenthal-and-cw-approximation-examples",
    "leray-hirsch-thom-isomorphism-and-gysin-sequences",
    "leray-hirsch-thom-isomorphism-and-gysin-sequences-examples",
    "obstruction-theory-postnikov-towers-and-classifying-spaces",
    "obstruction-theory-postnikov-towers-and-classifying-spaces-examples",
    "orientations-poincare-lefschetz-and-alexander-duality",
    "orientations-poincare-lefschetz-and-alexander-duality-examples",
    "singular-cohomology-and-coefficient-theorems",
    "singular-cohomology-and-coefficient-theorems-examples",
    "spectral-sequences",
    "spectral-sequences-examples",
    "stiefel-whitney-and-euler-classes-by-universal-constructions",
    "stiefel-whitney-and-euler-classes-by-universal-constructions-examples",
    "the-serre-spectral-sequence-and-applications",
    "the-serre-spectral-sequence-and-applications-examples",
    "topological-vector-bundles-and-grassmannian-classification",
    "topological-vector-bundles-and-grassmannian-classification-examples"
  ],
  "page_requires_forward_edges": [],
  "beyond_choice_page_reached": false,
  "beyond_choice_item_targets_reached": [],
  "supplier_paths": [
    [
      "lem-diagonal-is-immersion",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "lem-separated-local-on-base",
      "lem-base-change-open-closed-immersions",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "lem-affine-morphism-separated",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "cor-affine-schemes-separated",
      "lem-affine-morphism-separated",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "lem-separated-stable-under-base-change",
      "lem-base-change-open-closed-immersions",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "lem-separated-stable-under-composition",
      "lem-base-change-open-closed-immersions",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "thm-immersion-monomorphism-locally-finite-type",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "lem-separatedness-of-open-and-closed-immersions",
      "thm-immersion-monomorphism-locally-finite-type",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "lem-graph-closed-separated-target",
      "lem-base-change-open-closed-immersions",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "thm-morphisms-agree-closed-equalizer-separated-target",
      "lem-diagonal-is-immersion",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "lem-dense-open-of-reduced-scheme-schematically-dense",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "cor-morphisms-equal-on-dense-open-reduced-source",
      "lem-dense-open-of-reduced-scheme-schematically-dense",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "lem-diagonal-quasi-compact-iff-quasi-separated",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "lem-separated-quasi-separated-permanence-and-cancellation",
      "lem-diagonal-is-immersion",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "lem-graphs-sections-and-absolute-separatedness",
      "lem-diagonal-is-immersion",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "thm-separatedness-gluing-overlap-criterion",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "lem-projective-space-diagonal-closed",
      "thm-separatedness-gluing-overlap-criterion",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "cor-doubled-origin-not-separated",
      "thm-separatedness-gluing-overlap-criterion",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "lem-closed-subscheme-of-domain-containing-generic-point",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "lem-separated-implies-valuative-uniqueness",
      "lem-closed-subscheme-of-domain-containing-generic-point",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "thm-valuative-criterion-separatedness",
      "lem-diagonal-quasi-compact-iff-quasi-separated",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "rem-valuative-criterion-quantifies-all-valuation-rings",
      "thm-valuative-criterion-separatedness",
      "lem-diagonal-quasi-compact-iff-quasi-separated",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "ex-projective-line-diagonal-bihomogeneous-equation",
      "lem-projective-space-diagonal-closed",
      "thm-separatedness-gluing-overlap-criterion",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "cex-doubled-origin-diagonal-not-closed",
      "lem-diagonal-is-immersion",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "cex-doubled-origin-valuative-nonuniqueness",
      "cor-doubled-origin-not-separated",
      "thm-separatedness-gluing-overlap-criterion",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "ex-graph-closed-polynomial-map-scheme",
      "lem-affine-morphism-separated",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "cex-zariski-space-nonhausdorff-yet-separated-scheme",
      "cor-affine-schemes-separated",
      "lem-affine-morphism-separated",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "ex-open-immersion-valuative-uniqueness-not-existence",
      "lem-separatedness-of-open-and-closed-immersions",
      "thm-immersion-monomorphism-locally-finite-type",
      "thm-affine-closed-immersions-quotient-rings"
    ],
    [
      "cex-equal-point-maps-not-equal-scheme-morphisms",
      "thm-morphisms-agree-closed-equalizer-separated-target",
      "lem-diagonal-is-immersion",
      "thm-affine-closed-immersions-quotient-rings"
    ]
  ],
  "direct_suppliers": [
    "cor-affine-scheme-quasi-compact",
    "cor-nilradical-as-intersection-of-primes",
    "def-affine-morphism-schemes",
    "def-affine-overlap-separation-condition",
    "def-closed-immersion-schemes",
    "def-diagonal-morphism-scheme",
    "def-fibre-product-schemes-universal-property",
    "def-hausdorff-space",
    "def-local-ring",
    "def-locally-finite-type-and-finite-type-morphism",
    "def-morphism-of-schemes",
    "def-morphism-ringed-spaces",
    "def-open-immersion-schemes",
    "def-quasi-compact-and-quasi-separated-morphism",
    "def-reduction-of-scheme",
    "def-residue-field-scheme-point",
    "def-scheme-over-base",
    "def-valuation-ring",
    "lem-affine-morphism-local-on-target",
    "lem-base-change-open-closed-immersions",
    "lem-base-change-quasi-compact-morphisms",
    "lem-complex-conjugation-and-modulus-laws",
    "lem-diagonal-base-change-identification",
    "lem-fibre-product-open-restriction",
    "lem-fibre-product-unique-canonical-isomorphism",
    "lem-field-valued-points-of-schemes",
    "lem-finite-type-local-on-source-and-target",
    "lem-graph-as-pullback-diagonal",
    "lem-immersions-and-localizations-monomorphisms",
    "lem-minimal-prime-over-an-ideal-exists",
    "lem-morphism-schemes-local-on-source-target",
    "lem-points-of-scheme-fibre-product-residue-tensors",
    "lem-spectrum-localization-open-immersion",
    "lem-tensor-ring-presentations-for-base-change",
    "lem-valuation-ring-is-local",
    "prop-localisation-zero-equality-and-kernel-criteria",
    "thm-affine-closed-immersions-quotient-rings",
    "thm-affine-fibre-product-tensor-ring",
    "thm-dvr-element-normal-form",
    "thm-equivalent-characterisations-of-a-dvr",
    "thm-fibre-products-of-schemes-exist",
    "thm-gluing-affine-schemes",
    "thm-localisation-at-a-prime-is-local",
    "thm-lying-over",
    "thm-morphisms-into-affine-scheme-global-sections",
    "thm-prime-spectrum-of-a-localisation-bijection",
    "thm-proper-ideal-contained-in-maximal-ideal",
    "thm-sections-basic-open-affine-scheme",
    "thm-stalk-structure-sheaf-prime-localization",
    "thm-zorn"
  ]
}
```

Next action: resolve B8-D1 and the recorded upstream supplier proposal within authorized upstream scope, finish transitive semantic review, obtain primary backing for B8-S2, and produce real fetch verification through a working fetch path. Then reread this scaffold, exact suppliers and all open obligations and rerun affected checks. The pair remains BLOCKED. Final reruns of owned manifest-only content policy and coverage checklist after the last statement/proof-route edits also exited 0 (49 items; 102 harvest rows).
