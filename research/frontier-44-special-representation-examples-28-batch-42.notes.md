# Batch 42 — `geometric-fixed-parts-and-gauss-manin-semisimplicity` (order 1819) / `...-examples` (order 1823)

Run `frontier-44-special-representation-examples-28`, role beta, one A/B pair, category
`algebraic-geometry`. Owner direction
(`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`) was read
before constructing any item; its "Owner same-frontier prerequisite extension — 2026-10-09" section
authorizes exactly this pair as one of the 21 appended prerequisite pairs of the same native run
and requires the new engine workers to own official scaffolding while preserving every existing
manifest. Canonical plan: `research/plan-spec.json` orders 1819/1823, category `algebraic-geometry`,
with the 20-entry `requires` list reproduced verbatim in the manifest. Design: the "Geometric Fixed
Parts And Gauss Manin Semisimplicity" section of `research/plan-klr-foundation-prerequisites.md`,
its eight carrier drafts under
`research/frontier-44-special-representation-examples-28-klr-foundation-monodromy-drafts/items/`,
the two page carriers under `.../pages/`, and the monodromy author packet
(`-klr-foundation-monodromy-report.md`, `-klr-foundation-monodromy-source-evidence.json`,
`-klr-foundation-monodromy-inventory.json`, `-klr-foundation-monodromy-local-checks.json`,
`-klr-foundation-monodromy-proper-consumer-repair-v2.json`).

Scaffold written: **7 A items + 1 B item = 8 items**, all recorded `ready`. In-run dependency
levels **0, 0, 1, 8, 16, 17, 18, 19** (`lem-regular-trace-kernel…` 0, `lem-characteristic-zero-…` 0,
`def-geometric-polarizable-hodge-variation` 1, `lem-algebraic-open-inclusion-…` 8,
`lem-smooth-projective-morphisms-…` 16, `thm-fixed-part-…` 17,
`thm-smooth-projective-gauss-manin-…` 18, `ex-cyclic-etale-covers-…` 19), computed by
`tools/item-dependency-levels.mjs` after all dependency corrections below. No new local item was
needed beyond the plan inventory; every prerequisite is scaffolded in this run or published; no page
split was needed (both pages are far below the 100-item cap). Only this batch's manifest, coverage,
notes, cross-batch dependency input and Step-1 readiness records were written; no published content,
shared plan, engine state or verdict was edited.

## Design / plan comparison (every conflict recorded)

1. **Task locator drift, not a scope conflict.** The batch task cites the design at
   `research/plan-klr-foundation-prerequisites.md` **L868**. That line falls inside the preceding
   "Analytic Derived Six Operations And Duality" section; the "Geometric Fixed Parts And Gauss Manin
   Semisimplicity" section of the current file begins at line **1029** and ends before "Affine
   Perverse Vanishing And Universal Hyperplanes" (line 1103). The section was located by title and
   read in full together with every linked carrier draft.
2. **The plan controls and matches the design item for item.** The plan-spec inventory (7 A items,
   1 B example, orders 1819/1823, same IDs) agrees with the design's suppliers and the draft
   carriers; the plan's declared `deps` for each item equal the drafts' `deps` arrays; no claim,
   source or proof route was dropped, narrowed or weakened. The within-page order equals the plan
   order and was scaffolded as such (definition, algebraic-open fundamental group, family
   construction, trace-kernel descent, characteristic-zero extension, fixed part, semisimplicity;
   the B example last).
3. **No design/plan conflicts of substance.** The design and plan both keep the ORDINARY geometric
   statements and the explicit boundaries: no claim for arbitrary polarized analytic variations on a
   punctured disk; the Schmid unpublished-footnote route is excluded; the integral lattice and
   algebraic realization are essential hypotheses. The plan's 20-entry `requires` list is preserved
   verbatim in the manifest even though several entries
   (`modular-representations-and-projective-covers`,
   `principal-series-representations-of-gl-n-over-a-finite-field`,
   `reeb-stability-and-global-foliation-constructions`) are not consumed by any item dependency of
   this pair; `validate-plan --run` reports only pre-existing `redundant-prereq` advisories on these
   edges and **zero** `undeclared-prereq` errors for both batch-42 pages, so no plan change is
   warranted or authorized here.
4. **Superseded draft history preserved.** The `-monodromy-proper-consumer-repair-v2.json` record
   shows a same-author local repair of three drafts (AC-link repair and the proper-MHS consumer
   correction). The current `-drafts/items/` carriers are the post-repair versions and are what was
   scaffolded; the "before" files were not adopted. The repair record is not independent audit or
   acceptance and was treated only as authoring history.

## Dependency corrections against the design's declared inputs

Every added target resolves inside the declared `requires` closure (`validate-plan --run` reports no
undeclared-prereq error for either batch-42 page); each change repairs a missing or implicit
declaration and none changes a claim.

- **AC => AC-omega discharge (item `lem-algebraic-open-inclusion-surjects-on-fundamental-groups`).**
  Added the published batch-2 item `thm-choice-implies-dependent-implies-countable-choice`: both
  perturbation suppliers (`thm-parametric-transversality`,
  `lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family`) assume the
  Axiom of Countable Choice, which the item's stated AC must discharge. This is the same pattern
  batch-40 used for its DC discharge; it raises only the labels 0 -> 8 for this item (recomputed).
- **Null-parameter choice (same item).** Added
  `prop-countable-unions-and-subsets-of-manifold-null-sets-are-null`,
  `prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold` and
  `def-null-subset-of-a-smooth-manifold`: the draft's "choose a parameter outside the finite union
  of null bad sets" needs exactly the countable-union property of manifold null sets and the
  density of the complement in the positive-dimensional parameter ball. Both are published on the
  `sard-theorem-and-transversality` page already in `requires`.
- **Family construction closes the definition contract
  (`def-geometric-polarizable-hodge-variation`).** Added
  `def-geometric-polarizable-hodge-variation` to the deps of
  `lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations` and recorded the
  definition's well-definedness discharge as `justified_by: [lem-smooth-projective-morphisms-…]`.
  The definition records closure/lattice clauses it does not prove; the family lemma proves them and
  uses the definition's notions ("Hodge direct summand", "Tate twist", "geometric realization"), so
  the edge is genuine and acyclic, mirroring the batch-40 definition/adjoint pattern.
- **SNC compactification input for the fixed part (item `thm-fixed-part-…`).** Added
  `lem-smooth-quasiprojective-varieties-admit-snc-projective-compactifications` (batch 38, level 0):
  the draft proof applies the logarithmic weight theorem to an SNC compactification, and the
  existence of one for the smooth quasiprojective total space is a genuine prerequisite not listed
  in the plan's declared inputs. The item's final clause is therefore stated for an **SNC** smooth
  projective compactification of the total space (the design says "smooth projective
  compactification"); this is a precision refinement of the design wording, recorded here as the
  only statement-level deviation, and not a weakening of any usable claim, because the SNC class is
  exactly what the cited weight theorem covers and its existence is now proved by a dependency.
- **Proper base change identifications (items `lem-smooth-projective-morphisms-…` and
  `thm-fixed-part-…`).** Added
  `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace` (batch 40): the
  family lemma identifies the sheaves `R^mf_*Q` with fibre cohomology and the fixed-part proof
  evaluates global flat sections at one fibre; both use proper base change and the product
  projection, which that theorem supplies.
- **Grassmannian compactness for the openness-of-irreducibility step (item
  `thm-smooth-projective-gauss-manin-local-systems-are-semisimple`).** Added
  `def-stiefel-space-grassmannian-and-tautological-bundle` (published; quotient topology on the
  Grassmannian of subspaces of a finite-dimensional complex vector space),
  `cor-heine-borel-in-the-product-topology` and
  `thm-continuous-image-of-a-compact-space-is-compact`: the draft's step "a limit of reducible
  invariant d-planes would produce an invariant proper nonzero subplane of the limit" uses
  compactness of `Gr(d,H_C)` as the continuous image of the closed bounded orthonormal-frame space.
  None of these was declared in the plan's input list; without them the step has no compactness
  supplier. The remaining elementary details (identifying `C^{dN}` with `R^{2dN}`, closedness of the
  incidence locus and of the invariance condition) are recorded in the strategy as inline
  obligations for the Step-3 author and are pure general topology.
- **Background definitions and vocabulary.** Added `def-socle-of-a-module` and
  `def-semisimple-module` to the trace-kernel lemma, and `def-local-system-of-r-modules-and-its-pullback`,
  `def-rational-mixed-hodge-structure`, `def-semisimple-module`, `def-socle-of-a-module` to the
  semisimplicity theorem, plus `def-local-system-of-r-modules-and-its-pullback`,
  `def-semisimple-module`, `def-roots-of-unity-in-a-field` and `thm-jacobian-criterion-smooth-morphism`
  to the B example: these are the notions the statements and verifications of those items actually
  use, following the batch-34 practice of declaring background definitions rather than leaving them
  implicit. No claim was strengthened or weakened.

No dependency cycle, forward edge within a page, or missing supplier remains: every `deps` target
resolves to a published `items/*.md` item or to a scaffolded item of this run.

## Interface verification of in-run suppliers (read, not assumed)

Read the actual current manifest items of the in-run suppliers and checked direction, hypotheses and
conventions item by item:

- batch 30 `lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology`
  (level 0, AC-based; contractible open stars have cohomology k in degree 0 and zero otherwise);
- batch 33 `lem-hard-lefschetz-splits-a-bounded-t-structure-complex` (level 3; centered
  hard-Lefschetz isomorphisms split a bounded t-complex into shifted t-cohomology, explicitly NOT
  primitive-compatible; the fixed-part proof needs only the abstract splitting, which it supplies);
- batch 34 `def-rational-mixed-hodge-structure` (level 0; Tate structure, polarizability) and
  `lem-morphisms-of-mixed-hodge-structures-are-strict` (level 2; strictness for W and F, pure image
  of extremal-weight morphisms — exactly the clause used to identify the image of the minimal weight
  part);
- batch 35 `thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms` (level 10; rational
  pure decomposition, metric independence, functoriality; AC statement inherited);
- batch 38 `lem-smooth-quasiprojective-varieties-admit-snc-projective-compactifications` (level 0)
  and `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures` (level 11; the exact
  `W_nH^n(U)=im(H^n(X)->H^n(U))` clause, weights at least n, independence of compactification);
- batch 39 `thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties` (level 12; the
  sign-adjusted primitive polarization and its positivity) and
  `thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz` (level 11; absolute hard
  Lefschetz and the rational primitive decomposition);
- batch 40 `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace`
  (level 15; proper base change and the product projection clause used to identify sheaves with
  fibre cohomology).

Published suppliers were read at statement level for hypothesis and direction: the two transversality
suppliers and the two null-set propositions (AC-omega), `def-fundamental-groupoid-of-a-space`,
`cor-generic-smoothness-on-source-characteristic-zero`, `thm-smooth-locus-open`,
`thm-classical-varieties-equivalent-integral-separated-finite-type-schemes`,
`def-local-system-of-r-modules-and-its-pullback`, `def-semisimple-module`, `def-socle-of-a-module`,
the Jacobson/Wedderburn/column-module/trace-form/finite-length/nilpotent-endomorphism algebra items,
`thm-jacobian-criterion-smooth-morphism`, `thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses`,
`lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex`,
`def-stiefel-space-grassmannian-and-tautological-bundle`,
`thm-continuous-image-of-a-compact-space-is-compact`, `cor-heine-borel-in-the-product-topology`,
`def-roots-of-unity-in-a-field`. The trace-form lemma is over C exactly as the drafts use it; the
nilpotent-trace step is available from `thm-nilpotent-endomorphism-characterisations` (some basis puts
a nilpotent endomorphism in strictly upper-triangular form, whose trace vanishes). No hypothesis
mismatch was found.

## Sources

Deligne II and III were fetched in full (PDF SHA-256
`748edefb44fded8af67869abfed87062d66977d25b5d12f7d014f1810a063c3f` and
`d78d4f46742916cd669279e7db365e4db6a43f38d2dcdec6862c6d27d07216b3`, matching the author packet's
hashes) and inspected: Deligne II §4.1 (Théorème 4.1.1 and its codimension-two `pi_1` step on
printed p. 41), §4.2.1-4.2.5 (continuous and algebraic families, conditions (4.2.2.1)-(4.2.2.4),
closure), §4.2.6-4.2.8 (semisimplicity, the `tW` determinant-line argument, commutant corollaries,
including the unpublished-Schmid footnote, which is excluded and recorded `out-of-scope`); Deligne
III §8.2.1-8.2.6 (printed pp. 39-40) for the proper restriction-image clauses, which this pair
defers to the proper-hyperresolution page. Two independent treatments were added and read for the A
page: Voisin's author-hosted lecture notes §3.1-3.2 (Theorems 3.1-3.3, Corollaries 3.4-3.5 — the
exact global-invariant-cycle formulation of the fixed-part theorem and its constant-Hodge-substructure
corollary) and Gualtieri's smooth-manifolds notes Chapter 3 (Baby Sard 3.18, Sard 3.20, measure-zero
calculus, perturbation stability) for the transversality inputs. Every harvested heading carries a
disposition in the coverage file; no source was dropped, so no source-resolution alternative is
recorded.

## Checks actually run (with observed results)

- `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28`
  — no label, shape or cycle error for any batch-42 item (labels 0/0/1/8/16/17/18/19 equal the
  computed levels); remaining findings are `empty scaffold inventory` for pending sibling batches
  only (11, 24, 25, 41, 43-49).
- `node tools/coverage-checklist.mjs research/…-batch-42.coverage.json --require-destination` —
  `2 page(s), 31 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/…-batch-42.coverage.json --stamp` —
  `6/6 source(s) fetch-verified (6 newly stamped)`; check mode `6/6 resolved (0 documented drops)`.
- `node tools/url-sweep.mjs --coverage research/…-batch-42.coverage.json --out /tmp/b42/url-liveness.json --recover --fail-on-dead`
  — `4/4 live; 0 failed; 0 blocking`, exit 0 (scoped; the run-level artifact is left to the engine).
- `node tools/source-backing.mjs --coverage research/…-batch-42.coverage.json --liveness /tmp/b42/url-liveness.json`
  — `6 authored result(s) across 1 file(s), every one still backed by an openable source`.
- `node tools/content-policy.mjs --manifest-only research/…-batch-*.pages.json` (whole-run join) —
  `703 scoped item(s), 0 error(s), 0 warning(s)`. A single-manifest invocation legitimately reports
  the cross-batch targets as `batch-dependency-missing`; the engine's scaffold gate runs the
  whole-level join, which passes.
- `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-special-representation-examples-28`
  — exit 0; both batch-42 pages appear with their item lists (7 and 1 items) and **no error for
  either page**; the page carries only pre-existing `redundant-prereq` advisories on its `requires`
  edges (unchanged, left to the Step-4 reconciler). The final report reads "OK — declared page
  order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies,
  or unresolved ids among the 80 page(s) with item lists", with 18 planned pages still carrying no
  item list (scaffold-pending siblings). An earlier invocation of the same command, taken before a
  sibling worker's batch-41 manifest gained its items, reported four `undeclared-prereq` errors on
  the equivariant pages; a re-run on the current shared state does not reproduce them (see
  unresolved findings).
- `node tools/manifest-integrity.mjs --run frontier-44-special-representation-examples-28` —
  `98 page(s) owed, 98 in the manifests … no scope drift`.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-special-representation-examples-28`
  — refreshed and deduplicated; every one of batch 42's **20/20 frontier consumer edges** carries a
  `verified` review from this batch's input file. The `--require-reviewed` variant fails only through
  the unreviewed sibling batches (11, 24, 25, 43-49).
- Manifest hygiene: 0 occurrences of `proved_here`, `external_refs`, `external_dependency` or
  `forward_refs`; all `deps` and all wikilinks in the manifest resolve.

## Unresolved findings (recorded, not repaired)

1. **Transient batch-41 plan/requires finding (history, not this batch's scope).** Before the
   batch-41 manifest gained items, `validate-plan --run` reported four `undeclared-prereq` errors
   for `equivariant-constructible-perverse-foundations` and its examples page (item dependencies on
   `algebraic-group-actions-orbits-stabilizers-and-controlled-quotients`,
   `algebraic-spaces-stacks-and-derived-algebraic-geometry-foundations`,
   `divisors-riemann-roch-and-duality` outside the requires closure). The current shared state no
   longer reproduces them and batch 42 was never affected; the observation is retained only as
   history. Editing the shared plan is outside this batch's write scope in any case.
2. **Pending sibling scaffolds.** At the time of writing, batches 11, 24, 25 and 44-49 still have
   empty manifests, so the run-level `item-dependency-levels` check and the
   `frontier-dependency-ledger --require-reviewed` join cannot pass yet; nothing in batch 42 depends
   on an unscaffolded sibling (all in-run suppliers used here are batches 2, 30, 33, 34, 35, 38, 39,
   40, which are scaffolded).
3. **Author-packet interface items are not acceptance.** The monodromy packet's "open interfaces"
   (notably the second-branch proper hyperresolution/hypercover inputs on the sibling page, and the
   topology bridge lemma for singular spaces) remain open construction contracts for their own
   pages; this pair consumes only the smooth/SNC clauses it declares and states no proper-base
   theorem of its own.
4. **Step-3 obligations recorded in the strategies.** The two elementary inline steps flagged above
   (identifying `C^{dN}` with `R^{2dN}`, and closedness of incidence/invariance conditions in the
   Grassmannian) and the smooth-approximation-of-loops detail in the algebraic-open lemma are
   obligations for the authoring stage; the strategies name them explicitly rather than assuming
   them.

## Step-1 decisions

Recorded `ready`, one at a time in prerequisite order, with the examined dependency IDs and the
evidence above:

1. `lem-regular-trace-kernel-descends-the-complex-socle` (level 0, 7 deps, sha `a457b494ff571db6…`)
2. `lem-characteristic-zero-scalar-extension-preserves-geometric-local-system-semisimplicity`
   (level 0, 6 deps, sha `b6435e589980d03c…`)
3. `def-geometric-polarizable-hodge-variation` (level 1, 2 deps, sha `114c492a40fb69b2…`)
4. `lem-algebraic-open-inclusion-surjects-on-fundamental-groups` (level 8, 11 deps, sha
   `8658a8fc40b4f813…`)
5. `lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations` (level 16,
   10 deps, sha `114c492a40fb69b2…`)
6. `thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases` (level 17,
   12 deps, sha `a995cbbd49767ba2…`; refreshed after the SNC wording fix above)
7. `thm-smooth-projective-gauss-manin-local-systems-are-semisimple` (level 18, 13 deps, sha
   `a870989ba02f9a85…`)
8. `ex-cyclic-etale-covers-give-geometric-semisimple-weight-zero-monodromy` (level 19, 6 deps, sha
   `95bb76839b2a7bbd…`)

Zero escalations. Owner/operator reconciliation and the full engine gate follow construction;
neither a worker exit nor a readiness record is independent mathematical approval. Step 3 provides
that review.
