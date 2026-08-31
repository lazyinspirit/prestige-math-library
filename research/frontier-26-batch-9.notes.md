# frontier-26 · Beta · batch-9 notes — `smooth-vector-bundles-and-sections`

Run `frontier-26`, batch `9`, one A/B pair, category `differential-geometry`.
Author: Beta. Session date: Monday, August 31, 2026.

Artifacts owned by this batch:
`research/frontier-26-batch-9.pages.json`,
`research/frontier-26-batch-9.coverage.json`,
and this file.

No plan structure, workflow state, published content, or another batch artifact
was edited.

---

## 1. Controlling design and resulting shape

Design locations opened:

- `research/plan-differential-geometry-track.md` lines `1344-1593`
- `research/plan-differential-geometry-track.md` lines `9498-9504`
- `research/plan-differential-geometry-track.md` lines `9621-9647`

Controlling design call:

- The controlling redesign is the single DG-5 block at
  `research/plan-differential-geometry-track.md` lines `1344-1593`.
- The later locations at lines `9498-9504` and `9621-9647` were used only as
  source-control confirmations for Lee and Merry. They are not competing page
  plans, and I did not treat them as authority for changing the DG-5 item list.

Shape after scaffolding:

- `smooth-vector-bundles-and-sections` (A): **51 items**
- `smooth-vector-bundles-and-sections-examples` (B): **10 items**

The A page stays below the 60-item split ceiling, so no split is proposed.

---

## 2. Design-vs-spec drift I did not settle

The dispatch says to record drift and follow `research/plan-spec.json` rather
than adjudicating locally.

### Finding 1 — no order drift

- The design, generated task, batch manifest, and `research/plan-spec.json`
  all place the pair at orders `451/452`.

### Finding 2 — the design still lists older direct prerequisites

The DG-5 design block declares the page-level `requires` list:

- `rank-theorems-and-embedded-submanifolds`
- `smooth-partitions-of-unity-and-exhaustions`
- `tangent-cotangent-and-the-differential`
- `vector-spaces-and-subspaces`
- `linear-maps-rank-nullity-and-quotient-spaces`
- `dual-spaces-bilinear-forms-and-inertia`

But the live spec and generated batch manifest declare only:

- `smooth-partitions-of-unity-and-exhaustions`
- `tangent-cotangent-and-the-differential`
- `rank-theorems-and-embedded-submanifolds`

I followed the live spec and left the batch page-level `requires` list at those
three DG pages. I did **not** add the linear-algebra pages directly inside this
batch.

### Finding 3 — the scaffold still uses earlier linear algebra, but only through the spec's transitive closure

- The DG-5 item graph does use earlier linear-algebra items for duals,
  transpose, Gram-Schmidt, complements, and basis changes.
- I kept those as item-level dependencies only where the live spec's DG-3/DG-4
  chain already reaches them transitively. That preserves the spec while
  avoiding a fake local adjudication of the page-level drift.
- The quotient-bundle construction is closed inside DG-5 itself, because the
  library's standalone quotient-vector-space items are currently homed much
  later than this page and cannot be made a hidden prerequisite here.

---

## 3. Local scaffold decisions

### Decision 1 — the cocycle-construction theorem keeps the full quotient burden

I kept the design's intended landmark route:

- local triviality and transition functions first,
- cocycle identities next,
- then the countable-cover quotient construction with explicit Hausdorffness,
  second-countability, chart bijectivity, and smooth overlap checks.

I did not collapse item 6 into a mere "glue by cocycles" slogan.

### Decision 2 — the page stops at dual/Hom bundles and does not smuggle in tensor algebra

- The DG-5 design explicitly postpones tensor and exterior powers to DG-11.
- I therefore kept dual and Hom bundles, sections of Hom, and pulled-back Hom
  bundles here, but did not add tensor, wedge, or determinant-bundle items to
  enrich the page.

### Decision 3 — the image statement is based over `M`, not silently over `N`

The design warns that for a bundle map over `f:M->N`, the image belongs in
`f^*F -> M`, not generally in `F -> N`.

- I kept the same-base kernel/image theorem as item 23.
- I then routed the general-base statement through item 32, where bundle maps
  over `f` become sections of `Hom(E,f^*F)`.

This avoids the common wrong claim that the image of a varying-base bundle map
is automatically a subbundle of the target over `N`.

### Decision 4 — complements and splittings stay explicitly noncanonical

- Item 37 uses a partition-of-unity average of local Euclidean metrics.
- Item 38 then uses smooth Gram-Schmidt for orthogonal complements.
- Item 40 states only existence of a splitting, never a canonical one.

That matches the design trap that a metric supplies a choice, not naturality.

### Decision 5 — the zero-set criterion stays on DG-5 as the bundle-side precursor to DG-6

I kept item 45 on this page rather than deferring it to transversality:

- its proof uses local frames and the regular-level-set theorem already
  available by DG-4,
- while the identification with transversality to the zero section is the later
  DG-6 refinement the design itself points to.

---

## 4. Example-page duplication control

The B page has two near-duplicate traps relative to already published earlier
differential-geometry pages.

### Finding 1 — the circle tangent-bundle example was retained, but with a different job

- `items/ex-the-tangent-bundle-of-the-circle-is-a-cylinder.md` already exists
  on the DG-3 examples page.
- I still kept `ex-the-tangent-bundle-of-the-circle-is-trivial`, because here
  it is not the tangent-bundle-construction example; it is the witness for the
  DG-5 global-frame triviality criterion.

### Finding 2 — the tangent/cotangent example is retained as a reconciliation example, not as a fresh construction

- `ex-the-tangent-and-cotangent-bundles-as-vector-bundles` reuses DG-3 objects.
- Its role here is to reconcile the earlier intrinsic bundle constructions with
  the general DG-5 definition of smooth vector bundle, not to duplicate the
  tangent/cotangent manifold-structure proofs.

No other design-listed B-page item conflicted directly with an already homed
published example id.

---

## 5. Source choices and harvest boundaries

Only the A page owes a coverage ledger.

### 5.1 Sources actually harvested

I harvested the two independent treatments named directly in the DG-5 design
block:

1. John M. Lee, *Introduction to Smooth Manifolds*:
   `https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC`
2. Will J. Merry, *Differential Geometry*:
   `https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf`

Why only these two:

- they are the explicit DG-5 source route in the controlling design block,
- they are independent treatments,
- Lee is the qualifying textbook source, and
- Merry provides the detailed bundle-construction and section machinery the Lee
  contents page does not isolate theorem-by-theorem.

I consulted the later Nicolaescu control rows in the design matrix, but I did
not add a third harvested source because the DG-5 block itself already meets the
task's two-treatment minimum with Lee and Merry.

### 5.2 Coverage boundaries I kept explicit

The ledger uses `canonical` rows for results the scaffold genuinely needs but
the harvested source headings do not name individually, notably:

- the surjective-submersion and dimension consequences of local triviality,
- the local-frame / local-trivialization equivalence as an exact dependency,
- the same-base constant-rank kernel and image construction,
- the pullback functorial identifications,
- quotient-bundle chart independence from the adapted frame,
- partition-of-unity metric averaging and the noncanonical splitting
  consequences,
- the intrinsic normal/conormal bundle route, and
- the vertical-differential zero-set criterion.

This keeps the source ledger faithful to what the sources actually headline while
still recording the intermediate mathematics DG-5 must author.

### 5.3 Deferred and already-published rows were chosen narrowly

- Lee `Pullbacks` is deferred back to
  `tangent-cotangent-and-the-differential`, because that source heading is the
  cotangent pullback already published on DG-3.
- Merry `Example 17.10` is deferred for the same reason: it is the differential
  as a tangent-bundle morphism, not a new DG-5 result.
- Merry `Lecture 28 Connections` is deferred to
  `connections-levi-civita-and-parallel-transport`, because the connection
  machinery itself belongs there even though DG-5 consumes the bundle-metric
  consequences later in the notes.
- The Lee cotangent and embedded-submanifold headings are marked
  `already-published` where the exact earlier DG pages already own them.

---

## 6. Validation status and known limits

### 6.1 Local validation target

This dispatch owns only the scaffold-time artifacts:

- `research/frontier-26-batch-9.pages.json`
- `research/frontier-26-batch-9.coverage.json`
- this notes file

So the useful local checks are the manifest/coverage scaffold checks, not the
later authoring-time proof-contract gates.

### 6.2 Network-gated limitation in this sandbox

The shell sandbox in this session cannot resolve external hosts, so I could not
rerun the live network validators:

- `url-sweep.mjs`
- `source-fetch-check.mjs --stamp`

To keep the scaffold durable anyway, the coverage ledger reuses exact
`fetch_verified` stamps already present elsewhere in the repo for these same Lee
and Merry URLs, and the URLs were rechecked against the web reader on Monday,
August 31, 2026 where possible.

This means the content scaffold is written and internally cross-checked here,
but the shell-side URL gates themselves still need a networked run environment.

### 6.3 Source-shape limitation worth remembering at author time

- Lee's Google Books page is a contents-map witness, not the detailed proof
  witness for the cocycle and bundle-metric arguments.
- Merry therefore carries most of the proof-shape burden for items 6, 13,
  17-18, 20-21, 23, 25-26, 31-32, 34, 37-40, and the frame-side parts of the
  examples page.

That is intentional and recorded now so later authoring does not over-claim what
Lee individually supplies.

## Step-3 fix pass

Date: Monday, August 31, 2026.

- Stable review file checked:
  `research/frontier-26-alpha-b-step3-scaffold-review.md`.

- Finding ids for batch 9: **none issued** in the stable review file.
  The batch-9 paragraph under `### Batch 9 — smooth-vector-bundles-and-sections`
  records a single concrete repair class: the already-applied coverage-alignment
  fix for `research/frontier-26-batch-9.coverage.json`. The three batch-local
  source-boundary decisions in
  `research/frontier-26-alpha-b-scope-decisions.json` also still stand on
  current bytes:
  `f465b6450f0bdce66994b9ff934c62b47ca3180185795afe159f1df10e5474bb`
  for Lee `Pullbacks`,
  `f934933d812b8bafccea41ee2f9bdb09868ca2e79a5460c84440bf5d0b540a8c`
  for Merry `Example 17.10`, and
  `43c0df2abdcbe81729d51b113d9c65f0f183b8366a0dd6ea67701d05c89b8919`
  for Merry `Lecture 28 Connections`.

- Disposition:
  accepted as already applied on current bytes; no further manifest-route or
  coverage-harvest change was needed in this pass, and I pushed back on
  nothing.

- Evidence reread and rerun in this pass:
  `research/plan-differential-geometry-track.md` lines `1344-1593` for the
  controlling DG-5 block; the current
  `research/frontier-26-batch-9.pages.json`,
  `research/frontier-26-batch-9.coverage.json`, and
  `research/frontier-26-alpha-b-step3-scaffold-review.md`; the manifest-to-
  coverage alignment audit on current bytes reports `manifest=61`,
  `coverage=64`, `missing=0`; and
  `research/frontier-26-url-liveness.json` generated on Sunday, August 30,
  2026 records both active source URLs live with `200` status, namely Lee at
  `https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC`
  redirecting to the live Google Books AU page and Merry at
  `https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf`
  staying on the direct ETH PDF route. I also reopened the Lee contents page in
  the web reader on Monday, August 31, 2026 and rechecked the Merry source via
  Will Merry's ETH teaching page, which still exposes the 2020-2021
  differential-geometry notes link at the recorded PDF URL.

- Validator results on current bytes:
  `node tools/coverage-checklist.mjs research/frontier-26-batch-9.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 75 harvested result(s), 0 error(s), 0 warning(s)`.
  `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-*.pages.json`
  -> `content-policy: 440 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-9.coverage.json`
  -> `source-fetch-check: 2/2 source(s) fetch-verified`.
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit `0`, ending with `OK`, with only the standing repo-wide
  `redundant-prereq` advisories.
  `node tools/splice-plan.mjs --run frontier-26 --batch 9 --dry-run`
  -> `splice-plan: batch 9 — 2 page(s) spliced, 0 already correct, 61 item(s)`.
  `git diff --check -- research/frontier-26-batch-9.pages.json research/frontier-26-batch-9.coverage.json research/frontier-26-batch-9.notes.md`
  -> clean after this notes receipt was appended.

- Changed scaffold record:
  no additional edit in `research/frontier-26-batch-9.pages.json`;
  no additional edit in `research/frontier-26-batch-9.coverage.json`;
  appended this Step-3 fix-pass receipt in
  `research/frontier-26-batch-9.notes.md`.

## Step-5 authoring

Date: Sunday, August 30, 2026.

- Authored page files:
  `library/differential-geometry/smooth-vector-bundles-and-sections.md` and
  `library/differential-geometry/smooth-vector-bundles-and-sections-examples.md`.

- Authored A-page core ids:
  `def-smooth-fibre-bundle-and-local-trivialization`,
  `def-smooth-vector-bundle-rank-fibre-and-trivial-bundle`,
  `prop-a-vector-bundle-projection-is-a-surjective-submersion`,
  `def-vector-bundle-chart-and-transition-function`,
  `lem-vector-bundle-transition-functions-satisfy-the-cocycle-identities`,
  `thm-vector-bundle-construction-from-a-smooth-cocycle`,
  `prop-isomorphic-cocycles-define-isomorphic-vector-bundles`,
  `def-restriction-of-a-vector-bundle`,
  `prop-the-zero-section-is-a-smooth-embedding`,
  `prop-the-total-space-of-a-rank-r-bundle-has-dimension-dim-m-plus-r`,
  `def-smooth-section-local-section-and-support`,
  `def-local-frame-and-global-frame-of-a-vector-bundle`,
  `prop-local-frames-and-local-trivializations-are-equivalent-data`,
  `cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame`,
  `prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components`,
  `prop-smooth-sections-form-a-module-over-smooth-functions`,
  `lem-every-vector-in-a-fibre-extends-to-a-compactly-supported-smooth-section`,
  `lem-locally-finite-linear-combinations-of-sections-are-smooth`,
  `def-vector-bundle-map-over-a-smooth-base-map`,
  `prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices`,
  `prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism`,
  `def-vector-subbundle`,
  `prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles`,
  `def-pullback-vector-bundle-as-a-fibre-product`,
  `thm-the-pullback-fibre-product-is-a-smooth-vector-bundle`,
  `prop-pullback-is-functorial-up-to-canonical-bundle-isomorphism`,
  `def-whitney-sum-of-vector-bundles`,
  `thm-whitney-sums-are-smooth-vector-bundles`,
  `def-dual-and-hom-vector-bundles`,
  `thm-dual-and-hom-transition-functions-define-smooth-bundles`,
  `prop-sections-of-hom-are-the-same-as-smooth-fibrewise-linear-maps`,
  `prop-bundle-maps-over-f-are-sections-of-the-pulled-back-hom-bundle`,
  `def-quotient-vector-bundle-by-a-subbundle`,
  `thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle`,
  `prop-the-canonical-map-to-a-quotient-bundle-is-a-smooth-bundle-map`,
  `def-smooth-bundle-metric`,
  `thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric`,
  `prop-orthogonal-complements-of-subbundles-are-smooth-subbundles`,
  `cor-every-vector-subbundle-has-a-smooth-complement`,
  `cor-every-short-exact-sequence-of-smooth-vector-bundles-splits`,
  `def-normal-and-conormal-bundles-of-an-embedded-submanifold`,
  `prop-normal-and-conormal-bundles-are-smooth-vector-bundles`,
  `prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle`,
  `cor-every-smooth-manifold-admits-a-riemannian-metric`,
  `prop-a-vector-bundle-section-with-surjective-vertical-differential-at-every-zero-has-a-submanifold-zero-set`.

- Authored A-page false-statement ids:
  `fs-every-vector-bundle-is-globally-trivial`,
  `fs-a-fibrewise-linear-continuous-bundle-map-is-automatically-smooth`,
  `fs-the-fibrewise-quotient-of-a-vector-bundle-by-arbitrary-varying-subspaces-is-a-vector-bundle`,
  `fs-a-short-exact-sequence-of-vector-bundles-has-a-canonical-splitting`,
  `fs-the-orthogonal-normal-bundle-of-a-submanifold-is-defined-without-a-metric`,
  `fs-the-pullback-bundle-is-the-set-theoretic-inverse-image-of-the-total-space`.

- Authored B-page ids:
  `ex-the-trivial-line-bundle-and-its-sections-as-functions`,
  `ex-the-mobius-line-bundle-from-a-transition-function`,
  `ex-the-tautological-line-bundle-over-real-projective-space`,
  `ex-the-tangent-and-cotangent-bundles-as-vector-bundles`,
  `ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial`,
  `ex-the-tangent-bundle-of-the-circle-is-trivial`,
  `rem-the-hairy-ball-theorem-for-even-dimensional-spheres`,
  `ex-pullback-of-the-tautological-line-bundle-along-the-antipodal-cover`,
  `ex-the-graph-of-a-bundle-map-as-a-subbundle-of-a-whitney-sum`,
  `cex-a-rank-jumping-kernel-is-not-a-vector-subbundle`.

- Provenance rationale:
  every authored item and both authored pages remain `status: draft`;
  every authored mathematical statement is marked `ai-altered` with explicit
  source URLs; every proof-bearing item is marked `proof: ai-generated`; all
  authored definitions and the single authored remark are marked
  `proof: not-applicable`. The default source basis is Lee plus Merry. The two
  real-projective-space examples add van der Vorst plus Hitchin for the affine
  chart model, and the hairy-ball remark cites Milnor plus
  Guillemin--Pollack because it records a later obstruction rather than proving
  it here.

- Author-time dependency refinements kept local to item frontmatter, with no
  manifest edit:
  `ex-the-tautological-line-bundle-over-real-projective-space` cites the
  published projective-space atlas item
  `ex-real-projective-space-from-affine-charts`;
  `prop-normal-and-conormal-bundles-are-smooth-vector-bundles` cites the
  published slice-chart definition
  `def-embedded-submanifold-and-slice-chart`;
  `cor-every-short-exact-sequence-of-smooth-vector-bundles-splits` and
  `prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle`
  cite the earlier same-batch bundle-isomorphism proposition that their written
  proofs actually use.

- Canonical precheck repair adopted before the final rerun:
  collapsed every proof row so its trailing justification tags live on the
  numbered line itself, then adopted precheck's renumbering in
  `prop-local-frames-and-local-trivializations-are-equivalent-data`
  (`1.1`, `1.2`, `2.1`) and
  `cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame`
  (`1.1`, `1.2`, `2.1`).

- Narrowed or dropped claims:
  none. The authored statements keep the scaffolded DG-5 route, including the
  supplied-countable-cover hypothesis in the cocycle-construction theorem, the
  same-base image statement for constant-rank bundle maps, and the noncanonical
  status of bundle splittings and orthogonal normals.

- Blockers:
  none at authoring scope.

- Output report:
  created `research/frontier-26-batch-9.proof-contracts.json` with
  `46` proof-bearing entries and regenerated its `citations` and `derivations`
  from the final on-disk facts blocks and numbered proof rows.

- Validator results on final authored bytes:
  `node tools/tsx-run.mjs tools/precheck.mts $(node -e "...batch-9 item list...")`
  -> `46 checked, 0 failing — all clean`.
  `node tools/content-policy.mjs research/frontier-26-batch-9.pages.json`
  -> `content-policy: 61 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit `0`, ending with `OK`, with only the standing repo-wide notes about
  other unitemized planned pages.
  `node tools/proof-contract.mjs research/frontier-26-batch-9.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 46/46 item(s) checked`.
  `git diff --check -- items library/differential-geometry research/frontier-26-batch-9.proof-contracts.json research/frontier-26-batch-9.notes.md`
  -> clean.
