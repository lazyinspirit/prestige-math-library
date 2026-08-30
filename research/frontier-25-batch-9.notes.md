# frontier-25 · Beta · batch-9 notes — `rank-theorems-and-embedded-submanifolds`

Run `frontier-25`, batch `9`, one A/B pair, category `differential-geometry`.
Author: Beta. Session date: Sunday, August 30, 2026.

Artifacts owned by this batch:
`research/frontier-25-batch-9.pages.json`,
`research/frontier-25-batch-9.coverage.json`,
and this file.

No plan structure, workflow state, published content, or another batch artifact
was edited.

---

## 1. Controlling design and resulting shape

Design locations opened:

- `research/plan-differential-geometry-track.md` lines `1118-1335`
- `research/plan-differential-geometry-track.md` lines `1273-1335`

Controlling design call:

- The controlling design is the single DG-4 block at
  `research/plan-differential-geometry-track.md` lines `1118-1335`, with the
  owner seam amendment at lines `1127-1140` controlling wherever the older
  item list still speaks as if the Euclidean inverse-function and
  constant-rank theory lived on DG-4 itself.
- The second matched location, line `1273`, is not a competing redesign; it is
  the B-page subsection inside the same DG-4 block. I treated it as subordinate
  to the full section rather than as an independent plan.

Shape after scaffolding:

- `rank-theorems-and-embedded-submanifolds` (A): **37 items**
- `rank-theorems-and-embedded-submanifolds-examples` (B): **8 items**

The A page stays below the 60-item split ceiling, so no split is proposed.

---

## 2. Design-vs-spec drift I did not settle

The dispatch says to record drift and follow `research/plan-spec.json` rather
than adjudicating locally.

### Finding 1 — no order drift

- The design, generated task, batch manifest, and `research/plan-spec.json`
  all place the A/B pair at orders `449/450`.

### Finding 2 — the generated task and batch manifest are missing the live spec prerequisite

The generated task and the pre-edit batch manifest declared only:

- `smooth-partitions-of-unity-and-exhaustions`
- `tangent-cotangent-and-the-differential`

But `research/plan-spec.json` now declares:

- `smooth-partitions-of-unity-and-exhaustions`
- `tangent-cotangent-and-the-differential`
- `constant-rank-submersions-and-regular-level-sets`

I followed the spec and added the missing RC-2 prerequisite to this batch
manifest.

### Finding 3 — the design still lists pre-seam prerequisites

The DG-4 design section itself still declares:

- `tangent-cotangent-and-the-differential`
- `smooth-partitions-of-unity-and-exhaustions`
- `inverse-and-implicit-function-theorems`
- `compactness`
- `subspaces-products-and-quotients`

The live spec replaces that page-level story by the seam-routed closure:

- `smooth-partitions-of-unity-and-exhaustions`
- `tangent-cotangent-and-the-differential`
- `constant-rank-submersions-and-regular-level-sets`

I followed the live spec, not the older prerequisite list. The page still uses
compactness, subspace, and product facts at item level, but only through
already earlier published or transitively reached material rather than by
adding new page-level `requires` edges inside this batch.

---

## 3. Seam-amendment rewrite and local dependency repairs

### 3.1 Euclidean DG-4 items removed, not re-minted

The owner amendment at DG-4 lines `1127-1140` says RC-1 and RC-2 now carry the
Euclidean inverse-function, higher-regularity inverse, constant-rank,
submersion, immersion, regular-value, and tangent-kernel base case, and that
DG-4 should cite them rather than re-mint them.

Accordingly I removed the old standalone Euclidean layer from this scaffold:

- no separate DG-4 item for the Euclidean smooth-inverse upgrade,
- no separate DG-4 item for the Euclidean constant-rank normal form,
- no separate DG-4 item for the Euclidean minor-persistence lemma.

What remains on DG-4 is the manifold transport:

- rank on manifolds,
- manifold inverse and constant-rank normal forms,
- local immersion/submersion consequences,
- embedded and immersed submanifolds,
- local defining submersions,
- regular level sets and preimages,
- diagonal and graph embeddedness.

### 3.2 Two internal order repairs were necessary

The raw design item list had two same-page dependency problems.

1. `def-smooth-embedding` appeared after
   `prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding`.
   I moved the definition earlier so the proposition can cite it honestly.
2. The proof-trap note at DG-4 line `1327` says the graph theorem must use the
   diagonal formulation globally. That forces the diagonal proposition to
   precede the graph proposition, so I ordered them that way.

These are local closure repairs, not plan drift adjudications.

---

## 4. Source choices and coverage boundaries

Only the A page owes a harvest ledger.

### 4.1 Sources actually read and recorded

I read these three design-listed treatments:

1. John M. Lee, *Introduction to Smooth Manifolds*:
   `https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?hl=de&id=eqfgZtjQceYC`
2. Will J. Merry, *Differential Geometry*:
   `https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf`
3. Nigel Hitchin, *Differentiable Manifolds*:
   `https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf`

Why these three:

- Lee is the qualifying textbook treatment with a harvestable contents map that
  names the DG-4 chapter/section route directly.
- Merry is the most detailed independent lecture-note treatment for the
  embedded-submanifold, regular-value, tangent-kernel, and local-embedding
  statements.
- Hitchin is an independent second lecture-note treatment that cross-checks the
  regular-level-set route and the embedding-topology condition.

### 4.2 Coverage boundaries kept explicit

The ledger keeps several results as `canonical` rows because the proofs need
them but the source headings do not isolate them as named theorems:

- manifold transport of the Euclidean inverse and constant-rank normal forms,
- locally maximal rank implies locally constant rank,
- uniqueness of the induced embedded smooth structure,
- image-of-embedding and compact-injective-immersion consequences,
- corestriction smoothness into an embedded submanifold,
- local defining submersions,
- diagonal and graph embeddedness,
- coordinate-slice intersection and discrete-submanifold cleanup.

### 4.3 Source rows deliberately deferred or kept out of scope

- Merry `Corollary 6.14` is marked `out-of-scope`: the quotient-map conclusion
  for surjective submersions is real mathematics, but it is not needed for this
  page's normal-form and embedded-submanifold route.
- Merry `Example 6.16` and Hitchin's examples are deferred to
  `constant-rank-submersions-and-regular-level-sets-examples`, because the seam
  amendment moved those Euclidean regular-level-set examples earlier.
- Hitchin `Definition 11` is deferred back to
  `tangent-cotangent-and-the-differential`, because the derivative itself
  belongs to DG-3 and is only inherited here.

---

## 5. B-page duplication avoidance

The pre-seam DG-4 examples list included several claims that are now already
owned elsewhere.

### 5.1 Examples not scaffolded here

- The orthogonal-group example was removed because
  `items/ex-orthogonal-group-is-a-regular-level-set.md` already exists on disk
  with `status: published`.
- The sphere and cusp examples were not scaffolded here because the seam-routed
  RC-2 pair already owns the Euclidean regular-level-set examples and their
  rank-drop counterexamples.

### 5.2 Examples kept or replaced

I kept the non-duplicative core examples:

- coordinate inclusions and projections,
- special linear group as a regular level set,
- graph of sine,
- regular value with empty fibre,
- figure-eight immersion,
- countably many concentric circles as the injective-immersion counterexample,
- isolated rank-drop witness.

I added one replacement example to keep the manifold preimage theorem visible
without reusing the sphere or orthogonal-group stock:

- `ex-a-cylinder-as-the-preimage-of-a-circle-under-projection`.

That keeps the B page aligned with DG-4's surviving scope instead of cloning
RC-2.

---

## 6. Dependency rationale and proof route

### 6.1 Rank and normal forms

- `thm-smooth-inverse-function-theorem-on-manifolds` and
  `thm-constant-rank-theorem-for-manifolds` now explicitly depend on RC-1 and
  RC-2 Euclidean results and only perform the chart transport on this page.
- `cor-the-immersion-and-submersion-loci-are-open` and
  `prop-a-smooth-map-of-locally-maximal-rank-has-locally-constant-rank` use
  the Euclidean lower-semicontinuity theorem through local coordinates rather
  than re-proving the minor argument on manifolds.

### 6.2 Embedded submanifolds

- The page defines embedded submanifolds by slice charts, exactly as the design
  requires, and then proves the induced atlas, the uniqueness of the smooth
  structure, and the equivalence with smooth embedding images.
- `prop-smoothness-into-an-embedded-submanifold-is-an-initial-property` and
  `prop-smoothness-of-a-map-on-an-embedded-submanifold-is-local-in-the-ambient-space`
  are kept because later bundle and transversality pages need them explicitly.

### 6.3 Level sets, preimages, diagonals, and graphs

- Local defining maps are kept as their own definition/theorem pair because
  they are the clean route into the preimage theorem.
- `thm-preimage-theorem-for-submanifolds-under-submersions` is built from local
  defining submersions plus the regular-level-set theorem, not by silent
  interchange of equivalent definitions.
- `prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold` is intentionally
  routed through the diagonal proposition and a local defining submersion for
  the diagonal, matching the design's trap that manifold points cannot be
  subtracted globally and avoiding the false claim that
  $(p,q)\mapsto(F(p),q)$ is automatically a submersion.

---

## 7. Known limits and caution points

- The Lee witness is a contents-map witness, not the detailed proof witness.
  Detailed local proof structure in this pass is carried mainly by Merry, with
  Hitchin as an independent check.
- The DG-4 design still narrates the pre-seam Euclidean story, so the current
  authored proof layer should be read through the seam amendment and the
  batch-local dependency repairs recorded above.

---

## Step-5 authoring

Authored ids:

- A page `rank-theorems-and-embedded-submanifolds`
- B page `rank-theorems-and-embedded-submanifolds-examples`
- A-page items `def-rank-of-a-smooth-map-at-a-point`, `def-immersion-submersion-and-constant-rank-map`, `def-regular-and-critical-points-and-values`, `cor-the-immersion-and-submersion-loci-are-open`, `thm-smooth-inverse-function-theorem-on-manifolds`, `thm-constant-rank-theorem-for-manifolds`, `cor-local-normal-form-for-immersions`, `cor-local-normal-form-for-submersions`, `cor-every-immersion-is-locally-an-embedding`, `cor-every-submersion-is-an-open-map`, `prop-a-smooth-map-of-locally-maximal-rank-has-locally-constant-rank`, `def-embedded-submanifold-and-slice-chart`, `lem-slice-chart-restrictions-form-a-smooth-atlas`, `def-smooth-embedding`, `prop-the-smooth-structure-of-an-embedded-submanifold-is-unique`, `prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding`, `prop-the-image-of-a-smooth-embedding-is-an-embedded-submanifold`, `cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding`, `def-immersed-submanifold`, `prop-smoothness-into-an-embedded-submanifold-is-an-initial-property`, `prop-smoothness-of-a-map-on-an-embedded-submanifold-is-local-in-the-ambient-space`, `def-codimension-and-hypersurface`, `def-local-defining-map-for-an-embedded-submanifold`, `thm-embedded-submanifolds-admit-local-defining-submersions`, `thm-a-regular-level-set-is-an-embedded-submanifold`, `prop-tangent-space-of-a-regular-level-set-is-the-kernel`, `thm-preimage-theorem-for-submanifolds-under-submersions`, `prop-the-diagonal-is-an-embedded-submanifold`, `prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold`, `prop-transverse-intersections-of-coordinate-slices-have-the-expected-local-form`, `cor-a-discrete-embedded-submanifold-is-closed-locally-and-countable`, `fs-every-injective-immersion-is-an-embedding`, `fs-the-image-of-every-immersion-is-an-embedded-submanifold`, `fs-a-regular-value-must-belong-to-the-image`, `fs-constant-rank-at-one-point-implies-constant-rank-nearby`, `fs-every-embedded-submanifold-is-an-open-subset-of-the-ambient-manifold`, `fs-the-intrinsic-topology-of-an-immersed-submanifold-is-always-the-subspace-topology`
- B-page items `ex-coordinate-inclusions-and-projections-as-immersion-and-submersion`, `ex-the-special-linear-group-as-a-regular-level-set`, `ex-a-cylinder-as-the-preimage-of-a-circle-under-projection`, `ex-the-graph-of-the-sine-function-as-an-embedded-submanifold`, `ex-a-regular-value-with-empty-fibre`, `cex-the-figure-eight-is-an-immersed-image-not-an-embedded-submanifold`, `cex-countably-many-concentric-circles-give-an-injective-immersion-not-an-embedding`, `cex-a-rank-drop-at-a-point-need-not-persist-locally`
- Batch contract report `research/frontier-25-batch-9.proof-contracts.json`

Provenance rationale:

- Core theorem and definition statements were tagged `literature-derived` from Lee, Merry, and Hitchin because the page follows their standard manifold rank and embedded-submanifold route.
- Most local proofs were tagged `ai-altered` because they are fresh phase-format rewrites of standard arguments rather than transcriptions.
- Two replacement examples, the cylinder preimage and the concentric-circles counterexample, were tagged with altered/generated proof provenance only where the exact witness arrangement is batch-local rather than copied from one source heading.

Narrowed or dropped claims:

- No planned batch-9 item id was dropped.
- The graph proposition's scaffolded proof route was narrowed from the false submersion claim on $(p,q)\mapsto(F(p),q)$ to the truthful local-defining-submersion route through the diagonal; the batch manifest now records that repair.

Blockers:

- None at Step 5.

Checks run:

- `node tools/tsx-run.mjs tools/precheck.mts $(node -e "...batch-9 items...")`
- `node tools/proof-contract.mjs research/frontier-25-batch-9.proof-contracts.json --strict`
- `node tools/content-policy.mjs research/frontier-25-batch-9.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
  manifest is necessarily a seam-aware rewrite rather than a literal copy of
  the original item numbering.
- I did not scaffold a separate quotient-map theorem for surjective
  submersions. That is a deliberate scope cut, recorded in coverage as
  `out-of-scope`, not an omission by accident.
- The design-listed irrational-winding witness was not kept. It would force a
  dense-image theorem for irrational torus orbits that is not presently in the
  page closure, so I replaced it with a dependency-closed concentric-circles
  counterexample that refutes the same false statements.

---

## 8. Validator results and blocking failures

Actual results run on Sunday, August 30, 2026:

- `node -e "JSON.parse(...pages...)"`
  -> `pages-json: ok`
- `node -e "JSON.parse(...coverage...)"`
  -> `coverage-json: ok`
- `node tools/coverage-checklist.mjs research/frontier-25-batch-9.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 40 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  -> `content-policy: 415 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit `0`; the repo-wide plan stays valid and only prints the pre-existing
     `redundant-prereq` warnings unrelated to this batch
- batch-local uniqueness and dep audit against `plan-spec.json` plus `items/`
  -> `batch ids: 45`, `duplicate ids: 0`, `missing deps: 0`

Blocking source/url checks:

- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-9.coverage.json --stamp`
  -> `0/3` stamped, all three failed with `ENOTFOUND`
- `node tools/url-sweep.mjs --coverage research/frontier-25-batch-9.coverage.json --out ... --recover --fail-on-dead`
  -> `0/3 live; 3 failed`, each failing with `curl: (6) Could not resolve host`

Interpretation:

- These failures are runner-network failures, not a content-shape failure in
  the batch artifacts. The same three URLs were opened and read through the web
  reader during this dispatch, but shell-side DNS resolution is unavailable in
  this environment, so neither fetch stamps nor the liveness sweep can complete
  from the terminal.

---

## Step-3 fix pass

Stable review input used on Sunday, August 30, 2026:

- `research/frontier-25-alpha-b-step3-scaffold-review.md` is the authoritative
  Step-3 review for batch `9`; the generic
  `research/frontier-25-scaffold-closure.json` scaffold-fix artifact is absent
  on disk for this run.
- The Alpha review assigns batch `9`
  `rank-theorems-and-embedded-submanifolds` the verdict `sufficient` with
  thirty-seven A-page items and eight B-page items, and it issues **no
  numbered `B9-*` finding** to apply or push back on.

Finding application log:

- `Finding id`: none. The stable Alpha review issues no numbered `B9-*` row
  for this batch.
  - Disposition: no scaffold repair applied.
  - Evidence: the review row for batch `9` marks the page `sufficient`, and
    the page-specific review says the scaffold is already seam-aware: it keeps
    the live RC-2 prerequisite, inherits DG-3 derivative material rather than
    re-homing it, and avoids the missing irrational-orbit closure theorem by
    using the concentric-circles injective-immersion counterexample.
  - Changed scaffold record: none in
    `research/frontier-25-batch-9.pages.json` or
    `research/frontier-25-batch-9.coverage.json`; only this notes file gained
    the fix-pass receipt.

Validator rerun on current bytes:

- `node tools/coverage-checklist.mjs research/frontier-25-batch-9.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 40 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  -> `content-policy: 415 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs /private/tmp/frontier-25-beta-batch-9-spliced-plan.json`
  -> pass; `OK` with no item-level cycles, forward references, B-page
  dependencies, or unresolved ids among `542` item-listed pages; only the
  pre-existing repo-wide `redundant-prereq` advisories print.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass; `OK` with no item-level cycles, forward references, B-page
  dependencies, or unresolved ids among `540` item-listed pages; only the
  pre-existing repo-wide `redundant-prereq` advisories print.
