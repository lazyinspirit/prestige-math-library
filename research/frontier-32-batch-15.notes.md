# Frontier-32 beta batch 15 — scaffold notes

## Scope, plan, and design reconciliation

- The batch manifest follows the plan specification: A is order 467 and B is
  `manifolds-with-boundary-collars-and-orientations-examples` at order 468.
  The design section uses the different B identifier
  `boundary-and-orientation-examples`.  This is a design/spec conflict, not
  adjudicated here; the current plan-spec identifier is used as instructed.
- The design's prerequisite shorthand (`DG-1`–`DG-6`, `DG-8`–`DG-12` plus the
  inverse/implicit material) is not a literal match for plan-spec's named
  prerequisite list.  It is recorded for the run drift unit; the manifest
  retains plan-spec's eleven named `requires` unchanged.
- The published item
  `def-orientation-of-a-finite-dimensional-real-vector-space` uses an empty
  basis convention that gives one zero-dimensional orientation.  The design
  requires determinant-line rays and hence two signed orientations in dimension
  zero.  This batch does not alter published content.  It introduces the new
  `def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space`,
  explicitly depending on the published definition and
  `prop-the-top-exterior-power-is-one-dimensional`; the next proposition proves
  agreement in positive dimension.  The run's completed Step-0 review records
  no prerequisite drift for this page; authoring must preserve the explicit
  distinction between these two zero-dimensional conventions.
- The A page has 55 items (49 core items and 6 false-statement checks), below
  the 60-item split threshold.  The B page has 12 worked examples or
  counterexamples.  Corners, a uniform collar width on a noncompact boundary,
  and any claim of a two-sided in-manifold flow for an inward field are outside
  the planned statements.

## Sources read and source support

The complete harvest is in
`research/frontier-32-batch-15.coverage.json`; every source heading/result in
the recorded ranges has an item disposition.

- **Mărcuț, _Manifolds_ (2017 lecture notes)** —
  <https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf>.
  Read contents PDF p. 2, §14.5 (PDF pp. 131–132), and all of §15.1 (PDF
  pp. 136–140).  It supplies the extension model, half-space calculus,
  boundary/inward/outward definitions, basic interior/boundary results, and a
  collar theorem.  Its printed collar proof uses compactness of the boundary to
  obtain a uniform time.  The planned noncompact theorem instead follows the
  design's locally finite positive-time-function route.
- **Merry, _Differential Geometry_ (2021 lecture notes)** —
  <https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf>.
  Read the harvestable contents entry and the complete Lecture 24, PDF
  pp. 194–206.  It independently supports vector-bundle orientation,
  half-space extension calculus, tangent boundary hyperplanes, partitions,
  vector fields, submanifold charts, and outward-normal-first boundary signs.
  Its topological boundary-invariance proposition uses invariance of domain;
  that result is harvested out of scope because the design fixes a smooth
  extension/invertible-differential proof instead.
- **_Vector Bundles_ course notes (Fall 2012), §8** —
  <https://usherugamath.wordpress.com/wp-content/uploads/2018/09/vbnotes.pdf>.
  Read PDF pp. 86–87, Theorem 8.16 through Definition 8.17 and the immediately
  following orientation discussion.  It independently corroborates the collar,
  collar-chart double, and outward-normal-first convention.  Its relative
  fundamental-class construction is expressly out of scope because singular
  homology and excision are not page premises.

The first two are independent full lecture-note treatments with readable tables
of contents; they are the pair's primary backing.  The coverage file ties each
included or inline result to the exact scaffolded item.  B examples use the
same conventions: the closed ball/interval/Möbius examples occur in the first
two treatments; the projective-space quotient-sign calculation, torus product,
non-neat half-plane example, and half-line flow counterexample are elementary
applications of the included definitions and are spelled out as strategies
rather than imported as unsupported theorems.

## Scaffold and dependency rationale

`research/frontier-32-batch-15.pages.json` is the item-by-item formal contract:
every entry has its exact title/claim, proof strategy, and an explicit direct
`deps` array (including `[]` where appropriate).  The following inventory
records the deliberate mathematical blocks, source locators, and dependency
logic needed to resume authoring without substituting a summary for evidence.

| Items | Claim block, source support, and direct-dependency rationale |
|---|---|
| `def-euclidean-upper-half-space-and-its-boundary`; `def-smooth-function-on-a-relatively-open-subset-of-a-half-space`; `lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space`; `prop-chain-rule-for-smooth-half-space-maps` | Build the (H^n), local-extension, derivative-independence, and chain-rule calculus.  Mărcuț §15.1 PDF p. 136 and Merry Def. 24.26/Prop. 24.27(i) PDF p. 200 support it.  The direct chain is empty → half-space definition → smoothness → extension lemma, with the chain rule also using published `thm-chain-rule-for-total-derivatives`. |
| `def-topological-manifold-with-boundary`; `def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary`; `def-smooth-map-between-manifolds-with-boundary`; `lem-smoothness-at-the-boundary-is-independent-of-charts-and-extensions` | Establish topological and smooth structure, map smoothness, and chart/extension independence.  Mărcuț Defs. 15.1.3–15.1.4 and Merry Defs. 24.21, 24.26, 24.28 support it.  Their direct dependencies are the preceding half-space calculus plus published Hausdorff/second-countable and chart-transition material; the lemma consumes exactly the two definitions and extension/chain-rule items. |
| `def-interior-point-boundary-point-interior-and-boundary-of-a-manifold`; `thm-smooth-invariance-of-manifold-boundary`; `cor-diffeomorphisms-preserve-interior-and-boundary`; `thm-the-interior-is-an-open-smooth-n-manifold`; `thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold`; `prop-a-manifold-has-empty-boundary-if-and-only-if-it-is-a-manifold-without-boundary` | Define provisional chart-face classification, then prove its smooth invariance by the design's extension/invertible-differential contradiction (not invariance of domain); derive intrinsic interior, embedded boundary in positive dimension, and empty-boundary equivalence.  The `n=0` case has empty boundary and makes no negative-dimensional claim. Mărcuț Lemma 15.1.1/Prop. 15.1.6 and Merry Prop. 24.27(iii)/Cor. 24.25 support the block.  Direct dependencies are the definitions and boundary-invariance theorem, with published `thm-euclidean-inverse-function-theorem` only at the landmark theorem. |
| `thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary`; `thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary`; `def-inward-outward-and-boundary-tangent-vectors`; `prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane`; `def-boundary-defining-function`; `prop-boundary-defining-functions-exist-locally-and-detect-inward-vectors` | Transfer partitions and tangent/cotangent constructions to boundary charts, then identify the tangent hyperplane and normal sign using a defining function.  Mărcuț §15.1 PDF p. 138 and Merry Lecture 24 PDF pp. 200–204 support it.  Direct deps are the atlas/extension lemma, published partition/tangent machinery, and the established embedded-boundary theorem; defining-function detection then depends on the sign definition and half-space chain rule. |
| `thm-every-manifold-with-boundary-has-a-global-inward-pointing-vector-field-along-the-boundary`; `thm-boundary-tangent-vector-fields-have-local-two-sided-flows-preserving-the-boundary`; `thm-inward-pointing-vector-fields-have-local-forward-semiflows-at-the-boundary`; `def-smooth-collar-of-a-manifold-boundary`; `thm-collar-neighborhood-theorem` | Glue local inward fields using the boundary partition; distinguish tangent two-sided flows from inward forward semiflows; flow the field to make a collar.  Mărcuț Lemma 15.1.13/Theorem 15.1.12 and Merry Example 24.36/Lemma 24.37 support the local ingredients.  Direct deps are the partition, vector-sign, tangent-bundle, flow, and inverse-function items; the collar theorem has the planned locally finite positive-time shrinking step for noncompact boundary. |
| `def-double-of-a-smooth-manifold-with-boundary`; `thm-the-double-has-a-well-defined-smooth-structure`; `cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary` | Glue labelled copies along the boundary, use collar seam charts and collar interpolation, then extend locally through the double with no canonical-extension claim.  Vector Bundles notes §8 PDF pp. 86–87 support the first two.  Direct deps are boundary/collar, then collar theorem plus published inverse function theorem, then the smooth tensor/form definitions. |
| `def-smooth-immersion-and-embedding-for-manifolds-with-boundary`; `def-embedded-smooth-submanifold-with-boundary`; `thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts`; `def-neat-submanifold-of-a-manifold-with-boundary`; `thm-neat-submanifolds-have-boundary-adapted-slice-charts`; `thm-morse-sard-for-maps-from-manifolds-with-boundary` | State embedding without silently requiring neatness; give half-slices, define neatness, straighten neat submanifolds, then apply Sard to interior and boundary separately.  Merry Lemma 24.33 supports the slice component.  Direct deps are the boundary tangent/embedded material and published constant-rank, transversality, Sard, and null-union results; no corners are introduced. |
| `def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space`; `prop-orientations-and-positive-basis-classes-agree-in-positive-dimension`; `def-oriented-smooth-manifold-and-oriented-chart`; `thm-oriented-atlases-and-continuous-tangent-space-orientations-are-equivalent-in-positive-dimension`; `def-orientable-manifold`; `thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form`; `prop-nonempty-connected-orientable-manifolds-have-exactly-two-orientations`; `prop-pointwise-orientation-sign-of-a-local-diffeomorphism` | Use determinant-line rays throughout, explicitly preserving the two (0)-dimensional signed possibilities; connect to chart bases only in positive dimension, then to top forms and local-diffeomorphism signs.  Mărcuț §14.5 and Merry Lecture 24 PDF pp. 194–197 support the route.  Direct deps are published top-exterior-power/exterior-bundle/diffeomorphism facts together with the fresh determinant definition, boundary tangent bundle, and partition theorem. |
| `def-product-orientation`; `def-induced-orientation-on-a-hypersurface-from-a-coorientation`; `def-induced-boundary-orientation`; `prop-boundary-orientation-is-independent-of-the-outward-vector-field`; `prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary`; `prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold`; `def-orientation-preserving-parametrization` | Fix determinant ordering, coorientation normal-first, and the required boundary convention outward-normal-first.  The product formula stops before corners.  Mărcuț Def. 15.1.10 and the Vector Bundles notes PDF p. 87 support the convention.  Direct deps are the determinant definition, boundary tangent hyperplane, product exterior-power functoriality, and published normal-bundle facts. |
| `fs-a-boundary-point-can-become-an-interior-point-under-another-smooth-chart`; `fs-the-tangent-space-at-a-boundary-point-has-dimension-n-minus-one`; `fs-every-vector-field-on-a-manifold-with-boundary-has-a-local-two-sided-flow-inside-the-manifold`; `fs-an-orientable-manifold-comes-with-a-canonical-orientation`; `fs-every-manifold-is-orientable`; `fs-the-boundary-orientation-is-given-by-inward-normal-first` | Six focused false-statement checks consume exactly the relevant preceding theorems: boundary invariance, full tangent vs. hyperplane, flow direction, two orientations, Möbius determinant-line reversal, and the outward-normal convention.  The Möbius check does not claim an induced boundary orientation for a nonoriented ambient manifold. |
| `ex-the-closed-half-space-as-a-manifold-with-boundary`; `ex-the-closed-ball-and-its-sphere-boundary`; `ex-the-cylinder-with-two-oppositely-oriented-boundary-components`; `ex-the-boundary-of-an-oriented-interval`; `ex-the-standard-collar-of-a-closed-ball`; `ex-the-double-of-a-disk-is-a-sphere` | Examples calculate the definitions in identity, ball, product, interval, radial-collar, and seam-chart models.  For `n>=1`, the ball first obtains boundary charts from the Euclidean implicit function theorem before applying its defining function, avoiding circular use of the boundary theorem; the collar and double examples retain that dimension hypothesis. Mărcuț §15.1 supplies the interval and ball models. |
| `ex-the-mobius-band-is-nonorientable-with-oriented-circle-boundary`; `ex-real-projective-space-is-orientable-exactly-in-odd-dimension`; `ex-the-product-orientation-on-a-torus`; `cex-a-submanifold-meeting-the-ambient-boundary-nonneatly`; `cex-an-inward-pointing-field-with-no-negative-time-flow-in-the-half-line`; `ex-boundary-orientation-of-the-unit-sphere-by-the-outward-normal` | These exercise the global orientation, product, neatness, flow-direction, and boundary-sign decisions.  The Möbius boundary circle is oriented independently by a parametrization, not by the ambient induced-boundary construction. Every B item depends only on its listed A items, so B remains a leaf.  The projective example explicitly states the RP^0 exception, and the flow counterexample rules out the forbidden negative-time claim. |

## Conventions and authoring route

- (H^0=\mathbb R^0) has empty coordinate boundary; no fictitious (x^0) is
  used.  Smoothness always means local Euclidean extension.  Boundary
  invariance must use the recorded smooth argument, not invariance of domain.
  The embedded `(n-1)`-boundary theorem and sphere/ball examples assume
  `n>=1`; the zero-dimensional boundary is handled separately as empty.
- At a boundary point, (T_pM) remains (n)-dimensional; only
  (T_p\partial M) is the (n-1) hyperplane.  Inward means positive defining
  function derivative.  Tangent fields have local two-sided boundary-preserving
  flows; inward fields are asserted only for forward time in the manifold.
- Collars allow variable widths before a locally finite shrinking.  The double
  is glued from labelled copies and collar charts; local extension across the
  seam is noncanonical.
- Orientations are positive determinant-line rays.  Boundary orientation is
  **outward normal first**; hypersurface coorientation is **normal first**;
  products use the displayed ordered determinant tensor convention.  The
  positive-atlas characterization is explicitly limited to positive dimension.
  An unoriented ambient manifold does not induce an orientation on its boundary;
  the Möbius boundary circle's orientability is an independent statement.
- The non-neat counterexample is fixed as \(\{0\}\times[-1,1]\) inside
  \([0,\infty)\times\mathbb R\): its ambient-boundary intersection is the
  whole interval rather than its two endpoint boundary.  It therefore does not
  leave the author to choose between distinct failures of neatness.

## Checks and remaining operational blocker

- `node tools/manifest-deps.mjs research/frontier-32-batch-15.pages.json`:
  67 items, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/frontier-32-batch-15.pages.json`:
  67 scoped items, 0 errors and 0 warnings.
- `node tools/coverage-checklist.mjs research/frontier-32-batch-15.coverage.json --require-destination`:
  1 A page, 61 harvested results, 0 errors and 0 warnings.
- Browser full-text retrieval on 2026-09-06 verified the exact three source URLs
  (Mărcuț 149 pages, Merry 406 pages, Vector Bundles notes 99 pages), including
  the ranges above. The no-flag source-fetch check now passes for all three;
  each coverage source carries a current `fetch_verified` receipt.
- Whole-run command `node tools/content-policy.mjs --manifest-only
  research/frontier-32-batch-*.pages.json` correctly includes this batch but
  fails on two other-batch dependencies:
  `def-variety-scheme-theoretic` and
  `thm-classical-varieties-equivalent-integral-separated-finite-type-schemes`
  both name missing `def-separated-morphism-schemes`.  This batch's isolated
  manifest-only policy gate remains 67 items, 0 errors, 0 warnings; the
  unrelated whole-run blocker was not edited.
- `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items
  60` exits successfully: the declared order is acyclic and consistent, with
  no item-level cycles, forward references, B-page dependencies, or unresolved
  ids among the manifests that currently carry item lists.  Its emitted
  redundant-prerequisite diagnostics are repository-wide advisory messages.
- No workflow/autopilot state or published content was changed.

## Step-3 fix pass

This pass applied the stable findings in
`research/frontier-32-alpha-c-step3-scaffold-review.md` (batch 15 is in group
`c`).  The review names findings by their affected stable item ids rather than
by numbered labels; those ids are retained below.  Each reviewed repair was
already present in the current manifest, so this pass verifies and retains the
repair instead of duplicating an item or changing a valid dependency.

| Review finding id | Disposition | Evidence | Changed scaffold record |
|---|---|---|---|
| `thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold` | Applied and retained. | Its title limits the conclusion to a positive-dimensional manifold and its strategy explicitly treats `n=0` as having empty boundary, with no negative-dimensional assertion.  This agrees with DG-13 item 13.  The independently read boundary treatments are Mărcuț, [§15.1, Proposition 15.1.6, PDF p. 138](https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf), and Merry, [Lecture 24, Corollary 24.25, PDF p. 200](https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf); the explicit `H^0=R^0` convention is the batch's necessary zero-dimensional refinement. | `research/frontier-32-batch-15.pages.json` record `thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold`; no new item or edge. |
| `ex-the-closed-ball-and-its-sphere-boundary` (and the related `ex-the-standard-collar-of-a-closed-ball`, `ex-the-double-of-a-disk-is-a-sphere`, and `ex-boundary-orientation-of-the-unit-sphere-by-the-outward-normal`) | Applied and retained. | The ball strategy begins “For `n` at least one,” constructs boundary charts from `thm-euclidean-implicit-function-theorem`, and only then uses `1-|x|^2` as a defining function.  The three dependent examples carry the same `n>=1` guard.  Mărcuț [§15.1, Example 15.1.8, PDF p. 138](https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf) gives the ball/sphere model; the explicit implicit-function-theorem dependency supplies the required noncircular chart construction. | The four named B-page records in `research/frontier-32-batch-15.pages.json`; dependencies remain backward-only and the B page remains a leaf. |
| `fs-every-manifold-is-orientable` and `ex-the-mobius-band-is-nonorientable-with-oriented-circle-boundary` | Applied and retained. | Both strategies use determinant-line reversal around the Möbius core, and both depend on `def-oriented-smooth-manifold-and-oriented-chart`, not on induced boundary orientation.  The example explicitly orients the boundary circle by parametrization and denies an induced orientation from a nonoriented ambient band.  Mărcuț [§14.5, Example 14.5.2, PDF p. 132](https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf) supplies the Möbius orientation-bundle check; Merry [Lecture 24, Definition 24.38, PDF p. 205](https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf) starts with an oriented ambient manifold, confirming why it is inapplicable here. | The two named records in `research/frontier-32-batch-15.pages.json`; no induced-boundary-orientation dependency is present. |

The source harvest remains complete and unchanged: Mărcuț contents PDF p. 2,
§14.5 PDF pp. 131–132, and §15.1 PDF pp. 136–140; Merry contents PDF p. 1
and complete Lecture 24 PDF pp. 194–206; and *Vector Bundles* §8 PDF pp.
86–87.  The current coverage record enumerates every heading/result in those
ranges with an item-bearing included/inline disposition or a result-specific
out-of-scope reason.  Browser retrieval in this pass opened all three recorded
HTTP(S) URLs and confirmed the corresponding 149-, 406-, and 99-page PDFs.
`node tools/source-fetch-check.mjs --coverage
research/frontier-32-batch-15.coverage.json --force --stamp --timeout-sec 90`
could not resolve any hostname in this shell (`EAI_AGAIN`); this is a direct
validator DNS failure rather than a dead URL.  No receipt was rewritten or
invented; the existing dated receipts and harvested evidence remain intact.

Validation on the retained records:

- `node tools/manifest-deps.mjs research/frontier-32-batch-15.pages.json`:
  67 items, 0 normalized, 0 errors; every manifest item has an explicit
  `deps` array.
- `node tools/coverage-checklist.mjs research/frontier-32-batch-15.coverage.json
  --require-destination`: 1 page, 61 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only
  research/frontier-32-batch-*.pages.json`: 672 scoped items, 0 errors, 0
  warnings.
- `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items
  60`: passed; the declared order is acyclic and consistent, with no item-level
  cycles, forward references, B-page dependency violations, or unresolved ids
  among manifested pages.  Its redundant-prerequisite lines are
  repository-wide advisories.

No plan, workflow state, published content, coverage disposition, or other
batch was changed.  The batch has no remaining scaffold repair; a later retry
of the direct source-fetch validator is only needed once this shell's DNS
resolver is available.

Read-only run-state check: the repository's current `.autopilot` state reports
the separate `frontier-23` author phase, not `frontier-32`.  This dispatch's
authorised frontier-32 records were repaired as requested; no control or
workflow-state action was taken.

## Step-5 authoring

Authored the assigned draft A and B pages at
`library/differential-geometry/manifolds-with-boundary-collars-and-orientations.md`
and
`library/differential-geometry/manifolds-with-boundary-collars-and-orientations-examples.md`,
and all 67 manifest item ids.  The A page contains the 55 definitions,
results, and focused false-statement refutations; the B page contains its 12
examples and counterexamples.  The item files preserve the manifest ids,
kinds, dependencies, and draft status.  Their source provenance is
literature-derived statements with AI-generated local proofs (or
not-applicable proof provenance for definitions), backed by Mărcuț §14.5 and
§15.1 (PDF pp. 131--132 and 136--140) and Merry Lecture 24 (PDF pp. 194--206).

The authored conventions are: $\mathbb H^0=\mathbb R^0$ with empty boundary;
the embedded-boundary theorem, ball/collar/double/sphere examples require
$n\ge1$; boundary tangent space is only the last-coordinate-zero hyperplane
inside the full $n$-dimensional tangent space; inward means positive defining
function derivative; inward flows are only forward in $M$; collar widths are
locally finite and variable before shrinking; and boundary orientation is
outward-normal-first.  The Möbius boundary circle is oriented independently,
not by an unavailable ambient induced orientation.  No planned claim was
narrowed or dropped, and no blocker remains.

Created `research/frontier-32-batch-15.proof-contracts.json` with strict
contracts for the 47 proof-bearing items.  Each maps both numbered proof
steps and records all standard boundary-axis dispositions; no item uses a
fact-label citation, so there is no unrecorded dependency quotation.

Checks actually run on the authored files:

- `node tools/tsx-run.mjs tools/precheck.mts` with all 67 explicit
  `items/ID.md` paths: 47 proof-bearing files checked, 0 failures.
- `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items 60`:
  passed (repository-wide redundant-prerequisite diagnostics only).
- `node tools/content-policy.mjs research/frontier-32-batch-15.pages.json`:
  67 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-32-batch-15.proof-contracts.json --strict`:
  47/47 checked, 0 errors, 0 warnings.

The whole-repository `depcheck` was also invoked but remains blocked by
unrelated pre-existing and concurrently authored files outside this batch; it
is not claimed as a batch success.

During authoring, the cited source passages were reopened: Mărcuț §15.1
records the half-space atlas, intrinsic boundary, tangent-space dimension,
and outward-normal-first convention; Merry Lecture 24 records the
boundary-manifold, tangent, and embedded-boundary interfaces; and the Vector
Bundles notes §8 records the collar, labelled double, and outer-normal-first
construction.  These checks support the exact conventions used above; the
zero-dimensional determinant-line refinement remains the batch's explicit
design decision.
