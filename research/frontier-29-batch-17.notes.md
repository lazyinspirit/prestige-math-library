# frontier-29 · Beta · batch-17 notes — `morse-critical-points-hessians-and-indices`

Run `frontier-29`, batch `17`, one A/B pair, category `differential-topology`.
Author: Beta. Session date: Wednesday, September 2, 2026 AEST.

Artifacts owned by this dispatch:

- `research/frontier-29-batch-17.pages.json`
- `research/frontier-29-batch-17.coverage.json`
- this file

Per the dispatch, I did not edit workflow state, another batch artifact,
published content, or plan structure outside batch `17`.

## 1. Outcome

The pair is now scaffolded with:

- A page `morse-critical-points-hessians-and-indices`: **18 items**
- B page `morse-critical-points-hessians-and-indices-examples`: **6 items**

No split is needed. The A page stays well below the hard 60-item ceiling.

The route follows the design literally where it matters:

1. critical-point terminology first, then the intrinsic Hessian
2. coordinate congruence before inertia-based intrinsicity
3. the missing covariant-Hessian / Levi-Civita interface localized immediately
   before the metric comparison lemma, without turning DT-1 into a full
   connection page
4. the Morse lemma decomposed through a one-variable splitting lemma and a
   residual-Hessian induction lemma
5. the index endpoint cases `0` and `n`, and the zero-dimensional case, kept
   explicit rather than hidden in prose
6. no attempt to define a Hessian away from a critical point without extra
   metric/connection data

No forward references or external fallbacks are planned. The B-page items
depend only on A-page items and do not cite published B-page leaves.

## 2. Control Files And Live Run Context

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated batch
task `research/frontier-29-beta-17.task.md`, the dispatch prompt
`research/frontier-29-dispatch/beta-batch-17.prompt.md`, the seed manifest
`research/frontier-29-batch-17.pages.json`, the live plan entry in
`research/plan-spec.json`, the run note `research/frontier-29-step0-notes.md`,
and the controlling design block in
`research/plan-differential-topology-track.md`.

Per `AGENTS.md`, I also checked the live controller from disk rather than
trusting older resume prose:

- `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`
  reports an unrelated live run `frontier-23` at stage `5-author`.

That is context to record, not something this batch is allowed to repair.

## 3. Design Control And Drift

### Design-vs-spec prerequisite drift

There is a real prerequisite conflict:

- the design block says DT-1 requires the differential-geometry smooth-map,
  tangent/cotangent, and Hessian/Levi-Civita predecessor pages
- the live spec and the batch manifest say only
  `moment-maps-and-symplectic-reduction-examples`

Per the dispatch, I did not adjudicate that conflict locally. The scaffold
keeps the current spec prerequisite and records the disagreement here for the
run-wide drift machinery.

### One controlled local interface repair

Alpha group `d` correctly identified that the original scaffold advertised
`lem-critical-hessian-agrees-with-the-levi-civita-hessian` without supplying the
Levi-Civita / covariant-Hessian interface on current bytes. I repaired that
inside this batch by inserting two source-backed A-page items immediately before
the comparison lemma:

- `def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian`
- `thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle`

This keeps the design's bridge item and its intended role, but no longer leaves
the page pretending a predecessor interface already exists elsewhere on disk.
The repair is deliberately minimal: enough local interface to make item `6`
authorable, without turning DT-1 into a general connection/curvature page.

### One deliberate specialization choice

The repo already has the published general-map item
`def-regular-and-critical-points-and-values`. I still scaffolded
`def-critical-point-and-critical-value-of-a-smooth-function`, because the design
wants the scalar-function specialization with the explicit `df_p = 0`
criterion on this page. The new item is therefore a controlled specialization,
not a silent duplicate of the general-map definition.

## 4. Proposed Page Summaries

### `morse-critical-points-hessians-and-indices`

This page fixes the local Morse-theory vocabulary for smooth real-valued
functions: critical points and values, the intrinsic Hessian at a critical
point, a minimal local covariant-Hessian / Levi-Civita interface, nondegeneracy,
nullity, index and coindex, Morse and excellent Morse functions, and the Morse
lemma. It keeps the local proof structure honest by separating the one-variable
signed-square lemma from the induction step that preserves the residual Hessian.

The page does not drift into genericity, Sard-based abundance, or stable
perturbation theory. Those harvest rows are recorded and routed to
`morse-functions-critical-values-and-genericity`, which is the next A page.

### `morse-critical-points-hessians-and-indices-examples`

The examples page checks the endpoint cases and failure modes concretely: the
perfect sphere height function, the standard quadratic form of every Morse
index, a torus with four critical points, an isolated degenerate critical point,
a nonisolated degenerate critical set, and the empty / zero-dimensional
boundary cases.

I intentionally recomputed the sphere example locally instead of depending on
the already-published B-page example
`ex-critical-points-and-values-of-a-height-function-on-a-sphere`, because the
B-page leaf rule forbids depending on published items homed only on examples
pages.

## 5. Exact Item Inventory

### A page — 18 items

1. `def-critical-point-and-critical-value-of-a-smooth-function`
2. `def-hessian-of-a-function-at-a-critical-point`
3. `lem-coordinate-change-congruence-for-the-critical-hessian`
4. `def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian`
5. `thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle`
6. `lem-critical-hessian-agrees-with-the-levi-civita-hessian`
7. `def-nondegenerate-critical-point-nullity-index-and-coindex`
8. `lem-sylvester-inertia-makes-morse-index-intrinsic`
9. `def-morse-function-and-excellent-morse-function`
10. `lem-nondegenerate-critical-points-are-isolated`
11. `cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points`
12. `lem-one-variable-completion-of-the-square-with-a-smooth-parameter`
13. `lem-morse-splitting-induction-preserves-the-residual-hessian`
14. `thm-morse-lemma`
15. `cor-local-extrema-and-saddles-from-the-morse-index`
16. `cor-index-and-coindex-swap-under-negation`
17. `cor-local-level-set-cone-at-a-morse-critical-point`
18. `rem-zero-dimensional-morse-convention`

### B page — 6 items

1. `ex-height-on-the-sphere-is-a-perfect-morse-function`
2. `ex-standard-quadratic-form-of-each-morse-index`
3. `ex-height-on-a-torus-with-four-critical-points`
4. `cex-a-degenerate-isolated-critical-point`
5. `cex-a-degenerate-nonisolated-critical-set`
6. `ex-the-empty-and-zero-dimensional-morse-cases`

## 6. Sources Actually Read

I harvested two textbook treatments and one independent long-form lecture-note
style manuscript:

1. Liviu I. Nicolaescu, *An Invitation to Morse Theory*, 2nd ed.:
   `https://www3.nd.edu/~lnicolae/Morse2nd.pdf`
2. Michele Audin and Mihai Damian, *Morse Theory and Floer Homology*:
   `https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf`
3. Ralph L. Cohen, *Bundles, Manifolds, and Homotopy*, current Stanford draft:
   `https://math.stanford.edu/~ralph/bookR4.pdf`

The design's Cohen URL was `https://math.stanford.edu/~ralph/bookR3.pdf`. That
URL was not live in this session, so the coverage preserves it as
`original_url` and records the current Stanford homepage-linked `bookR4.pdf` as
the recovered live source.

### Source roles

- Nicolaescu is a qualifying primary treatment for the intrinsic local Morse
  picture and for the nonresonant/excellent convention.
- Audin-Damian is the second qualifying primary treatment and is the main
  source for the intrinsic Hessian definition, the proof-splitting of the Morse
  lemma, and the sphere/torus examples.
- Cohen is the independent support source for the coordinate-invariance
  proposition, the warning that Hessians away from critical points need extra
  data, the transversality-to-the-zero-section characterization, and the
  local covariant-Hessian / Levi-Civita interface added in this fix pass.

### URL handling

The coverage file carries honest manual `fetch_verified` receipts for all three
recorded source URLs:

- Nicolaescu, Audin-Damian, and the recovered Cohen PDF were all reopened in
  the web reader on Wednesday, September 2, 2026
- I did **not** fabricate shell-side byte counts or hashes, because this runner
  is network-restricted
- there were no reusable exact-URL receipts for these PDFs already on disk in
  `research/`

This is why `source-fetch-check` in check mode can pass from the recorded
manual receipts even if shell-side liveness probes later fail.

## 7. Key Route Choices And Dependency Rationale

- **The page keeps the design's order, not the easier post-Morse-lemma order.**
  The isolation lemma stays before the Morse lemma and uses the local
  differential/Hessian map route, exactly because the design wanted local
  finiteness before the normal-form theorem.
- **Index and coindex are defined intrinsically before the Sylvester lemma.**
  The definition uses negative- and positive-definite subspaces rather than a
  basis count, and item 8 then reconnects that intrinsic definition to the
  chartwise counts via the published linear-algebra law of inertia.
- **The Levi-Civita bridge is now local rather than assumed.** Item 4 packages
  the cotangent-connection and covariant-Hessian vocabulary, item 5 supplies the
  metric-compatible symmetric connection, and item 6 then proves the advertised
  agreement with the intrinsic critical Hessian. This resolves Alpha's
  current-bytes objection without importing an external DG page into the run.
- **The compactness corollary avoids a fake closedness dependency.** Item 11 uses
  a compact open-cover argument on the whole manifold: isolated critical-point
  neighborhoods plus critical-point-free neighborhoods of noncritical points.
  That proves finiteness without pretending this page already built a separate
  theorem that the critical set is closed.
- **No false source attribution.** `lem-sylvester-inertia-makes-morse-index-intrinsic`
  and `cor-local-level-set-cone-at-a-morse-critical-point` are honest local
  consequences of source-backed material plus already-published linear algebra;
  I did not mislabel them as named theorems of the harvested texts.

## 8. Coverage And Scope Notes

The harvest rows deliberately preserve the design boundaries:

- Nicolaescu's `Proposition 1.2.12` and Cohen's `Theorem 12.14` are both
  deferred to `morse-functions-critical-values-and-genericity`; DT-1 does not
  steal DT-2's perturbation/genericity work.
- Audin-Damian's `x ↦ x^3` example is declined because the B page needs the
  sharper `x^4` witness with zero Hessian, not just any isolated degenerate
  critical point.
- Nicolaescu's dented-sphere example and Audin-Damian's third sphere-height
  bullet are both recorded as out-of-scope because this pair keeps the sphere
  example perfect and uses the torus for the four-critical-point height model.
- Cohen's broader connection/curvature development remains out of scope. The
  fix pass harvest now uses only the minimal Definition `3.26`, Definition
  `3.27`, Lemma `3.33`, and Theorem `3.34` interface needed for items `4`-`6`.

## 9. Published Dependencies Opened On Disk

I opened and checked the published items actually carrying the reused
interfaces:

- `items/def-regular-and-critical-points-and-values.md`
- `items/def-differential-of-a-smooth-real-valued-function.md`
- `items/thm-coordinate-formula-for-the-differential-of-a-function.md`
- `items/def-smooth-bundle-metric.md`
- `items/def-definiteness-inertia-and-signature-data-over-the-reals.md`
- `items/thm-sylvesters-law-of-inertia.md`
- `items/def-compact-space.md`

I also checked the current published homes that matter for leaf safety:

- `library/differential-geometry/rank-theorems-and-embedded-submanifolds.md`
- `library/differential-geometry/tangent-cotangent-and-the-differential.md`
- `library/differential-geometry/smooth-vector-bundles-and-sections.md`
- `library/linear-algebra/dual-spaces-bilinear-forms-and-inertia.md`
- `library/differential-geometry/sard-theorem-and-transversality-examples.md`

That last page home is why the published sphere-height example was not reused as
a dependency: it is homed on a B page.

## 10. Validation

Commands run after writing the scaffold:

```bash
node -e 'JSON.parse(require("node:fs").readFileSync("research/frontier-29-batch-17.pages.json","utf8")); JSON.parse(require("node:fs").readFileSync("research/frontier-29-batch-17.coverage.json","utf8")); console.log("json-parse: ok")'
node tools/coverage-checklist.mjs research/frontier-29-batch-17.coverage.json --require-destination
node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json
node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-17.coverage.json
node -e 'const fs=require("node:fs"); const plan=JSON.parse(fs.readFileSync("research/plan-spec.json","utf8")); const batch=JSON.parse(fs.readFileSync("research/frontier-29-batch-17.pages.json","utf8")); const byId=new Map(batch.map((p)=>[p.id,p])); plan.pages=plan.pages.map((p)=>byId.get(p.id) ?? p); fs.writeFileSync("/tmp/frontier-29-batch-17-spliced-plan.json", JSON.stringify(plan, null, 2) + "\n");'
node tools/validate-plan.mjs /tmp/frontier-29-batch-17-spliced-plan.json
git diff --check -- research/frontier-29-batch-17.pages.json research/frontier-29-batch-17.coverage.json research/frontier-29-batch-17.notes.md
node tools/url-sweep.mjs --coverage research/frontier-29-batch-17.coverage.json --out /tmp/frontier-29-batch-17-url-liveness.json --recover --fail-on-dead
```

Validation results are recorded below after the commands are run.

Validation results on Tuesday, September 1, 2026:

- JSON parse:
  `json-parse: ok`.
- `coverage-checklist`:
  `coverage-checklist: 1 page(s), 35 harvested result(s), 0 error(s), 0 warning(s)`.
- `content-policy --manifest-only`:
  `content-policy: 713 scoped item(s), 0 error(s), 0 warning(s)`.
- `source-fetch-check`:
  `source-fetch-check: 3/3 source(s) fetch-verified`.
- temp-spliced `validate-plan`:
  exited `0`. Its final lines were:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 652 page(s) with item lists.
  NOTE: 641 planned page(s) carry no item list yet (marked * above). Their reading
  order is guaranteed; their item dependencies are not yet asserted, so re-run this
  after writing each page's items.
  ```

  The long preceding output was the repository's standing run-wide
  `redundant-prereq` advisory stream outside this batch.
- `git diff --check`:
  clean.
- `node tools/url-sweep.mjs --coverage research/frontier-29-batch-17.coverage.json --out /tmp/frontier-29-batch-17-url-liveness.json --recover --fail-on-dead`:
  **FAIL** — `0/3 live; 3 failed; 0 recoverable from the archive`

The `url-sweep` failure is runner-local DNS, not a source-specific dead-link
finding. The exact shell errors were:

- `Could not resolve host: audin.pages.math.unistra.fr`
- `Could not resolve host: math.stanford.edu`
- `Could not resolve host: www3.nd.edu`

Independently of that shell-side liveness failure, the same three PDFs were
re-opened through the web reader while preparing this scaffold, so the harvest
itself remains fetch-verified. The unresolved blocker is that the shell gate
cannot confirm liveness from this environment.

## 11. Open Risks

- The main authoring-scale risk after the fix is *not* missing vocabulary but
  overexpansion: step 5 should keep items `4`-`6` as a tight local bridge and
  should not let them metastasize into a general treatment of curvature,
  parallel transport, or geodesics.
- The compactness corollary's proof route is intentionally direct rather than
  routed through a separately named theorem that the critical set is closed.
  That is not a defect, but step 5 should keep that route explicit so Alpha does
  not read it as a missing dependency.
- Shell-side URL liveness may still fail independently of the web-opened fetch
  receipts. If it does, that is an environment/network blocker to record, not a
  reason to re-source live PDFs that were already read and verified.

## Step-3 fix pass

Fix pass run on Wednesday, September 2, 2026 (Australia/Sydney local time)
against the current batch-17 scaffold bytes and the stable review in
`research/frontier-29-alpha-d-step3-scaffold-review.md`.

### D17-1 — `morse-critical-points-hessians-and-indices` is missing the current Levi-Civita / covariant-Hessian interface — **applied**

- Disposition:
  accepted. I repaired the blocking scaffold defect by making DT-1 carry its
  own minimal local interface for Riemannian metrics, symmetric cotangent
  connections, covariant Hessians, and the Levi-Civita existence/uniqueness
  theorem before the advertised comparison lemma. No plan or cross-batch edit
  was needed.
- Evidence:
  Alpha group `d` correctly observed that the previous manifest named
  `lem-critical-hessian-agrees-with-the-levi-civita-hessian` without any
  current authored or in-run supplier for the Levi-Civita / covariant-Hessian
  vocabulary. I re-opened Ralph L. Cohen, *Bundles, Manifolds, and Homotopy*,
  current Stanford draft `bookR4.pdf`, in the web reader on Wednesday,
  September 2, 2026 and re-read Chapter `3` from Definition `3.26` through
  Theorem `3.34` (PDF pp. `85`-`90` / printed pp. `74`-`79`) together with the
  remark after Proposition `12.1` and the Chapter `12` Morse section already in
  the ledger. Definition `3.26` gives the cotangent-bundle connection notion,
  Definition `3.27` the symmetric/torsion-free condition via Christoffel
  symmetry, Lemma `3.33` identifies `D(df)` as a symmetric tensor for symmetric
  connections, and Theorem `3.34` gives the unique orthogonal symmetric
  connection for a Riemannian metric. Those are exactly the missing carriers
  needed to make the existing Levi-Civita comparison lemma honest on current
  bytes.
- Changed scaffold record:
  `research/frontier-29-batch-17.pages.json` gained
  `def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian`
  and
  `thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle`,
  and rewired
  `lem-critical-hessian-agrees-with-the-levi-civita-hessian` through them.
  `research/frontier-29-batch-17.coverage.json` now harvests Cohen's
  Definition `3.26`, Definition `3.27`, Lemma `3.33`, and Theorem `3.34` as
  explicit included carriers, and refreshes the three fetch-verification
  receipts to Wednesday, September 2, 2026. This notes file records the fix
  pass.

Current validator evidence on the Step-3 fix-pass bytes:

- `node -e 'JSON.parse(require("node:fs").readFileSync("research/frontier-29-batch-17.pages.json","utf8")); JSON.parse(require("node:fs").readFileSync("research/frontier-29-batch-17.coverage.json","utf8")); console.log("json-parse: ok")'`
  passed: `json-parse: ok`.
- `node tools/coverage-checklist.mjs research/frontier-29-batch-17.coverage.json --require-destination`
  passed: `coverage-checklist: 1 page(s), 37 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`
  passed: `content-policy: 755 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-17.coverage.json`
  passed: `source-fetch-check: 3/3 source(s) fetch-verified`.
- `node tools/validate-plan.mjs /tmp/frontier-29-batch-17-spliced-plan.json`
  exited `0` and ended in `OK`; it again emitted only the repository's
  standing out-of-batch `redundant-prereq` advisories. The terminal receipt was:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 652 page(s) with item lists.
  NOTE: 641 planned page(s) carry no item list yet (marked * above). Their reading
  order is guaranteed; their item dependencies are not yet asserted, so re-run this
  after writing each page's items.
  ```

- `git diff --check -- research/frontier-29-batch-17.pages.json research/frontier-29-batch-17.coverage.json research/frontier-29-batch-17.notes.md`
  passed with no whitespace errors.

## Step-5 authoring

Run on Wednesday, September 2, 2026 (Australia/Sydney local time).

Authored page files:

- `library/differential-topology/morse-critical-points-hessians-and-indices.md`
- `library/differential-topology/morse-critical-points-hessians-and-indices-examples.md`

Authored item ids:

- `def-critical-point-and-critical-value-of-a-smooth-function`
- `def-hessian-of-a-function-at-a-critical-point`
- `lem-coordinate-change-congruence-for-the-critical-hessian`
- `def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian`
- `thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle`
- `lem-critical-hessian-agrees-with-the-levi-civita-hessian`
- `def-nondegenerate-critical-point-nullity-index-and-coindex`
- `lem-sylvester-inertia-makes-morse-index-intrinsic`
- `def-morse-function-and-excellent-morse-function`
- `lem-nondegenerate-critical-points-are-isolated`
- `cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points`
- `lem-one-variable-completion-of-the-square-with-a-smooth-parameter`
- `lem-morse-splitting-induction-preserves-the-residual-hessian`
- `thm-morse-lemma`
- `cor-local-extrema-and-saddles-from-the-morse-index`
- `cor-index-and-coindex-swap-under-negation`
- `cor-local-level-set-cone-at-a-morse-critical-point`
- `rem-zero-dimensional-morse-convention`
- `ex-height-on-the-sphere-is-a-perfect-morse-function`
- `ex-standard-quadratic-form-of-each-morse-index`
- `ex-height-on-a-torus-with-four-critical-points`
- `cex-a-degenerate-isolated-critical-point`
- `cex-a-degenerate-nonisolated-critical-set`
- `ex-the-empty-and-zero-dimensional-morse-cases`

Proof-contract output:

- Authored `research/frontier-29-batch-17.proof-contracts.json`.
- Scope written: `18` proof-bearing items.
- Citation and derivation rows were regenerated from the final on-disk item text with `node tools/regen-contract-entries.mjs research/frontier-29-batch-17.proof-contracts.json ...`, then checked with `node tools/proof-contract.mjs research/frontier-29-batch-17.proof-contracts.json --strict`.

Provenance rationale actually used:

- Core definitional and theorem items that directly package the harvested DT-1 Morse material stayed `literature-derived` for their statements: the critical-point definition, intrinsic Hessian, Levi-Civita comparison lemma, nondegeneracy/index definitions, Morse/excellent definition, isolation lemma, compactness corollary, one-variable splitting lemma, residual-Hessian lemma, Morse lemma, extrema/saddle corollary, negation corollary, sphere example, and torus example.
- Local packaging seams that are mathematically honest but not harvested as named source results were marked `ai-altered`: `def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian`, `thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle`, `lem-sylvester-inertia-makes-morse-index-intrinsic`, and `cor-local-level-set-cone-at-a-morse-critical-point`.
- Only the locally generated B-page witnesses were marked `ai-generated`, with legal generation roles and with no use as dependency targets: `ex-standard-quadratic-form-of-each-morse-index`, `cex-a-degenerate-isolated-critical-point`, `cex-a-degenerate-nonisolated-critical-set`, and `ex-the-empty-and-zero-dimensional-morse-cases`.

Material authoring adjustments inside batch scope:

- `def-hessian-of-a-function-at-a-critical-point` uses `justified_by: [lem-coordinate-change-congruence-for-the-critical-hessian]` so the chart-independence obligation is recorded in the dedicated field rather than hidden in prose.
- Several authored proof items added resolvable published dependencies beyond the batch scaffold where the written proof actually uses them: `thm-coordinate-formula-for-the-differential-of-a-function`, `thm-euclidean-inverse-function-theorem`, and `thm-euclidean-implicit-function-theorem`.
- `cex-a-degenerate-nonisolated-critical-set` adds the nondegeneracy and Hessian definitions to `deps`, because its witness explicitly proves degeneracy from the Hessian kernel rather than only naming criticality.
- `rem-zero-dimensional-morse-convention` was given an explicit `## Remark` heading after contract regeneration exposed that the proof-contract parser needs a citable remark section when later items cite that remark.

Narrowed or specially handled claims:

- No planned item was dropped.
- No theorem or corollary statement was narrowed relative to the batch scaffold.
- `ex-height-on-the-sphere-is-a-perfect-morse-function` proves the batch-local content explicitly available on this pair: exactly two nondegenerate critical points with indices `0` and `n`, hence Morse and excellent. The title's word `perfect` is left as standard Morse-theory terminology rather than used as a new defined dependency-bearing notion on this page.

Canonical precheck repair actually applied:

- The first batch precheck pass failed on all `18` proof-bearing items with `untagged-steps`, because the checker only counts a proof row as tagged when the step text and bracketed justification stay on one logical line.
- I repaired that canonically by flattening proof rows to single logical lines and then adopting the checker-preferred step buckets on the few items that still passed only after auto-repair:
  `thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle`,
  `lem-critical-hessian-agrees-with-the-levi-civita-hessian`,
  `lem-nondegenerate-critical-points-are-isolated`,
  `cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points`,
  `lem-one-variable-completion-of-the-square-with-a-smooth-parameter`,
  `thm-morse-lemma`,
  `cor-local-extrema-and-saddles-from-the-morse-index`,
  `cor-index-and-coindex-swap-under-negation`,
  `ex-height-on-the-sphere-is-a-perfect-morse-function`, and
  `ex-the-empty-and-zero-dimensional-morse-cases`.
- No mathematical claim was weakened during that repair; the changes were proof-row formatting and canonical step renumbering only.

Checks run on the final authored bytes:

- `node tools/tsx-run.mjs tools/precheck.mts items/lem-coordinate-change-congruence-for-the-critical-hessian.md items/thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle.md items/lem-critical-hessian-agrees-with-the-levi-civita-hessian.md items/lem-sylvester-inertia-makes-morse-index-intrinsic.md items/lem-nondegenerate-critical-points-are-isolated.md items/cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points.md items/lem-one-variable-completion-of-the-square-with-a-smooth-parameter.md items/lem-morse-splitting-induction-preserves-the-residual-hessian.md items/thm-morse-lemma.md items/cor-local-extrema-and-saddles-from-the-morse-index.md items/cor-index-and-coindex-swap-under-negation.md items/cor-local-level-set-cone-at-a-morse-critical-point.md items/ex-height-on-the-sphere-is-a-perfect-morse-function.md items/ex-standard-quadratic-form-of-each-morse-index.md items/ex-height-on-a-torus-with-four-critical-points.md items/cex-a-degenerate-isolated-critical-point.md items/cex-a-degenerate-nonisolated-critical-set.md items/ex-the-empty-and-zero-dimensional-morse-cases.md`
  passed: `18 checked, 0 failing — all clean`.
- `node tools/validate-plan.mjs research/plan-spec.json | tail -n 5`
  passed and ended with:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 698 page(s) with item lists.
  NOTE: 595 planned page(s) carry no item list yet (marked * above). Their reading
  order is guaranteed; their item dependencies are not yet asserted, so re-run this
  after writing each page's items.
  ```

- `node tools/content-policy.mjs research/frontier-29-batch-17.pages.json`
  passed: `content-policy: 24 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/proof-contract.mjs research/frontier-29-batch-17.proof-contracts.json --strict`
  passed: `proof-contract: 0 error(s), 0 warning(s), 18/18 item(s) checked`.

Blockers:

- None on the authored batch-17 bytes.
