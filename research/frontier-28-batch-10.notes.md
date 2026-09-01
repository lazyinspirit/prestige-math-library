# frontier-28 · Beta · batch-10 notes — differential-geometry

Run `frontier-28`, batch `10`, one A/B pair, category `differential-geometry`.
Author: Beta. Session date: Monday, August 31, 2026.

Artifacts owned by this batch:
`research/frontier-28-batch-10.pages.json`,
`research/frontier-28-batch-10.coverage.json`,
and this file.

No plan structure, workflow state, published content, or another batch artifact
was edited.

---

## 1. Controlling design and the one drift item I did not settle

Files opened before scaffolding:

- `README.md`
- `CLAUDE.md`
- `SCHEMA.md`
- `research/frontier-28-dispatch/beta-batch-10.prompt.md`
- `research/frontier-28-beta-batch.task.md`
- `research/frontier-28-beta-10.task.md`
- `research/plan-spec.json`
- `research/frontier-28-alpha-step0-drift.md`
- `research/frontier-28-step0-notes.md`
- `research/plan-differential-geometry-track.md`
- `research/plan-differential-topology-track.md`

Controlling design call:

- The generated task points at `research/plan-differential-geometry-track.md`
  line `2014`, but line `2014` is only the B-page subheading inside the single
  DG-7 block.
- I therefore treated the full DG-7 block at lines `1846-2062` as the
  controlling design text for this pair, not the isolated B-page line.

Design/spec agreement:

- page id
- companion page id
- page title
- order `455/456`
- category `differential-geometry`

Recorded drift, not settled inside the batch:

- The controlling DG-7 design block still lists direct `requires`
  `sard-theorem-and-transversality`,
  `smooth-vector-bundles-and-sections`,
  `smooth-partitions-of-unity-and-exhaustions`,
  `compactness`,
  and `homotopy-and-homotopy-equivalence`.
- The live `research/plan-spec.json` entry for order `455`, the generated beta
  task, and the existing batch manifest all list only
  `smooth-partitions-of-unity-and-exhaustions`,
  `smooth-vector-bundles-and-sections`,
  `sard-theorem-and-transversality`,
  and `homotopy-and-homotopy-equivalence`.
- I recorded that mismatch here and followed the spec, per the batch
  instructions. I did not re-add `compactness` as a direct prerequisite.

Relevant drift-stage context:

- `research/frontier-28-alpha-step0-drift.md` already records that stage 1
  added `homotopy-and-homotopy-equivalence` to the live spec for this page.
- I therefore treated the current spec as authoritative and only logged the
  remaining design-vs-spec mismatch about direct `compactness`.

## 2. Shape after scaffolding

- `whitney-embedding-tubular-neighbourhoods-and-approximation` (A):
  **44 items**
- `whitney-embedding-tubular-neighbourhoods-and-approximation-examples` (B):
  **10 items**

The A page stays below the hard `60`-item split ceiling, so no split is needed.

## 3. Scaffold decisions

### Decision 1 — the page keeps the weak Euclidean route explicit

I kept the design's weak-theorem route rather than silently replacing it by the
strong Whitney theorem.

The embedding spine is:

1. compact coordinate-bump embedding,
2. countable coordinate bookkeeping,
3. exhaustion-band regrouping,
4. finite-dimensional embedding,
5. proper injective immersion implies embedding,
6. explicit secant/tangent bad-direction package,
7. generic projection preserving injectivity and immersion,
8. separate properness-preserving projection lemma, then
9. the weak proper embedding and weak immersion theorems.

That keeps the design's main trap intact: properness is a separate issue on
noncompact manifolds and cannot be smuggled inside the generic projection step.

### Decision 2 — the strong theorems remain exact sourced remarks

I scaffolded:

- `rem-strong-whitney-embedding-theorem`
- `rem-strong-whitney-immersion-theorem`

as non-load-bearing remark items only. I did not let any later proof depend on
them. That matches the DG-7 design text and the later track-wide harvest note
at `research/plan-differential-geometry-track.md:9468-9474`.

### Decision 3 — Euclidean tubular neighborhoods come before ambient ones

I kept the design's stated route:

1. define the tube on the Euclidean orthogonal normal bundle,
2. prove local diffeomorphism along the zero section,
3. prove variable-radius injectivity,
4. get the Euclidean tubular neighborhood theorem and retraction, then
5. pass to an arbitrary ambient manifold by embedding the ambient manifold into
   Euclidean space and using a bundle metric to compare the intrinsic normal
   quotient with the orthogonal normal bundle.

I did not import a connection, exponential map, or an unbuilt local-addition
machine.

### Decision 4 — approximation embeds only the target

The design is explicit that the manifold-valued approximation theorem embeds
only the **target**. I preserved that.

The approximation spine is:

1. Euclidean-valued Whitney approximation with pointwise positive error
   control,
2. relative Euclidean approximation,
3. the fine-approximation lemma that keeps the image inside a prescribed tube,
4. manifold-valued approximation by target embedding and tubular retraction,
5. relative manifold-valued approximation,
6. continuous maps are homotopic to smooth maps, and
7. continuous homotopies between smooth maps can be smoothed without invoking
   the later boundary page.

### Decision 5 — the relative transversality cutoff is isolated on purpose

I kept `prop-relative-transversality-preserves-a-map-on-a-closed-good-region`
as a real item because the design calls out an easy failure mode: equality of
values alone is not enough. The support cutoff must be squared so its derivative
also vanishes where the parameter is switched off.

### Decision 6 — the section-transversality application stays on the A page

I kept `cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section`
on the A page, because it is a genuine consequence used later in differential
geometry and differential topology. The B page only carries the worked line-
bundle example of that theorem.

## 4. Source set actually read

Every recorded source in the coverage ledger was opened in the web reader on
Monday, August 31, 2026.

### Independent modern treatments

1. John M. Lee, *Introduction to Smooth Manifolds*, 2nd ed.  
   `https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html`
2. Marco Gualtieri, *Topology I: Smooth Manifolds*, Part 10  
   `https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf`
3. Marco Gualtieri, *Topology I: Smooth Manifolds*, Part 11  
   `https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf`

These are the two independent treatments that back the scaffold in full:

- Lee is the textbook source for the weak/strong Whitney statements, the
  function and map approximation theorems, and the tubular-neighborhood route.
- Gualtieri independently backs the regular-cover construction, compact
  embedding into some Euclidean space, the dimension-reduction projection
  argument, the Euclidean tubular neighborhood theorem, and the transversality
  homotopy / relative-cutoff package.

### Eligible primary treatment

4. Hassler Whitney, *Differentiable manifolds in Euclidean space*  
   `https://www.mathnet.ru/php/getFT.phtml?jrnid=sm&option_lang=eng&paperid=5498&what=fullt`

This is the eligible primary treatment included for the page. I used it
honestly and narrowly:

- Theorem I is the primary-source statement for the weak immersion/embedding
  program.
- The analytic approximation and neighborhood-filling discussion is recorded as
  historical context and explicitly kept out of scope for the present smooth
  scaffold.

## 5. Coverage choices and carrier boundaries

### 5.1 Direct harvest carriers

The direct source-to-item carriers are recorded in
`research/frontier-28-batch-10.coverage.json`. The most important ones are:

- Lee `Lemma 6.13` -> `lem-a-generic-linear-projection-preserves-injectivity-and-immersion`
- Lee `Lemma 6.14` -> `lem-a-generic-projection-can-preserve-properness`
- Lee `Theorem 6.15` -> `thm-weak-whitney-proper-embedding-theorem`
- Lee `Theorem 6.18` -> `thm-weak-whitney-immersion-theorem`
- Lee `Theorems 6.19` and `6.20` -> the two sourced remark items
- Lee `Theorem 6.21` -> `thm-whitney-approximation-for-euclidean-valued-maps`
- Lee `Theorem 6.24` -> `thm-euclidean-tubular-neighbourhood-theorem`
- Lee `Smooth Approximation of Maps Between Manifolds` -> the manifold-valued
  approximation and smoothing items
- Gualtieri `Corollary 3.28` -> `thm-transversality-homotopy-theorem`
- Gualtieri `Theorem 3.29` -> `prop-relative-transversality-preserves-a-map-on-a-closed-good-region`
- Gualtieri `Theorem 3.49` -> `lem-a-finite-coordinate-bump-map-embeds-a-compact-manifold-in-some-euclidean-space`
- Gualtieri `Theorem 3.50` -> both the projection lemma and the compact weak
  embedding route
- Gualtieri `Theorem 3.54` -> `thm-euclidean-tubular-neighbourhood-theorem`
- Whitney 1936 `Theorem I` -> the weak embedding / immersion pair

### 5.2 Canonical carriers

Some load-bearing items are genuine local packaging decisions rather than
single named source headings. I recorded them in the coverage file's
`canonical` section instead of pretending the sources had a separate heading
for them:

- `lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands`
- `prop-a-proper-injective-immersion-is-a-smooth-embedding`
- `def-secant-and-tangent-direction-maps-of-an-euclidean-embedding`
- `prop-nearest-point-projection-is-the-tubular-retraction-after-shrinking`
- `def-positive-continuous-error-function-for-strong-approximation`
- `cor-the-smooth-and-continuous-homotopy-categories-of-smooth-manifolds-have-the-same-morphism-sets`
- `cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section`

### 5.3 Explicitly deferred or out-of-scope harvested results

I did not silently drop adjacent source results:

- Lee `Corollary 6.17` is marked `out-of-scope`, with a page-specific reason:
  it is a compact-only leaf consequence and the scaffold already carries the
  broader weak embedding / approximation route.
- Gualtieri `Corollary 3.30` is marked `deferred` to `owner-decision`, because
  it is a cobordism consequence adjacent to the homotopy theorem but this DG-7
  scaffold stops before intersection/cobordism packaging and I did not settle a
  future page target inside this batch.
- Whitney 1936 `Theorem II` and `Theorem V` are marked `out-of-scope`, because
  they belong to the analytic approximation program rather than to this page's
  smooth approximation and tubular-neighborhood route.

## 6. Validation record

### 6.1 First repair during validation

The first `coverage-checklist` run found two batch-local ledger problems:

1. source kind `primary` is not accepted by the checklist schema, and
2. the placeholder defer destination `intersection-theory-and-degree` does not
   resolve to a real page id.

I repaired those by:

- changing Whitney 1936 to source kind `paper`, and
- changing the unresolved defer target on Gualtieri `Corollary 3.30` to
  `owner-decision` with an explicit reason.

The rerun then passed cleanly.

### 6.2 Commands and results

Checks run on Monday, August 31, 2026:

- `node -e "JSON.parse(...frontier-28-batch-10.pages.json...); console.log('pages-json: ok')"`  
  Result: `pages-json: ok`
- `node -e "JSON.parse(...frontier-28-batch-10.coverage.json...); console.log('coverage-json: ok')"`  
  Result: `coverage-json: ok`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-10.coverage.json`  
  Final result: `coverage-checklist: 1 page(s), 48 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-10.coverage.json`  
  Result: `source-fetch-check: 4/4 source(s) fetch-verified`
- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json`  
  Result: `content-policy: 125 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`  
  Exit: `0`  
  Visible result: only the repository's standing `redundant-prereq` advisories,
  ending with  
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 622 page(s) with item lists.`
- `node tools/validate-plan.mjs /tmp/frontier-28-batch-10-overlay-plan.json`  
  Exit: `0`  
  Visible result: the same standing repo-wide redundant-prerequisite advisories,
  ending with  
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 624 page(s) with item lists.`

That overlay check matters: it validates the live spec with batch `10` injected,
so the new DG-7 item dependencies were actually checked now instead of being
left implicit until the later splice step.

## 7. URL verification and liveness

The coverage ledger carries honest manual `fetch_verified` receipts for all four
recorded source URLs, each marked `verified_via: web-open`.

Shell-side liveness check:

- `node tools/url-sweep.mjs --coverage research/frontier-28-batch-10.coverage.json --out /tmp/frontier-28-batch-10-url-liveness.json --recover --fail-on-dead`
  exited `1` with:
  `url-sweep: 0/4 live; 4 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-28-batch-10-url-liveness.json`

Exact failures:

- `https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html`
- `https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf`
- `https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf`
- `https://www.mathnet.ru/php/getFT.phtml?jrnid=sm&option_lang=eng&paperid=5498&what=fullt`

Each failure was shell-side DNS resolution:

- `curl: (6) Could not resolve host`

What that does and does not mean:

- It does **not** show that the recorded sources are mathematically wrong or
  actually dead on the public web; each one was opened in the web reader during
  this batch and has a matching `fetch_verified` receipt.
- It **does** mean that the shell-side `url-sweep` check could not confirm live
  HTTP fetchability from this runner, so the batch notes must preserve that
  environmental limitation explicitly.
- I did not silently replace any URL on the strength of this shell-only DNS
  failure, because the web-reader verification showed that the source text was
  readable.

## 8. Step-5 risks and things not to flatten later

- Keep the design/spec drift about direct `compactness` visible. Step 5 should
  not silently rewrite the page's declared prerequisites to settle that dispute
  locally.
- The strong Whitney theorem items must stay non-load-bearing sourced remarks.
  If step 5 starts spending them in later proofs, the page will contradict the
  DG-7 design.
- `thm-weak-whitney-immersion-theorem` must be proved by the tangent-direction
  projection route, not waved through as a consequence of the weak embedding
  theorem.
- `lem-a-generic-projection-can-preserve-properness` is a real lemma. If step 5
  removes it and folds its content into the generic projection argument, it will
  erase the noncompact properness trap the design explicitly called out.
- `lem-variable-radius-injectivity-for-normal-addition` must keep the
  variable-radius statement honest. A single global radius on noncompact
  submanifolds is exactly one of the page's named false statements.
- `thm-whitney-approximation-for-manifold-valued-maps` must embed only the
  **target** and then retract through a tube. Embedding the source would
  contradict the design route.
- `thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic` must stay
  boundary-free by the collar/extension trick inside `M x R`; it must not
  backward-cite the later manifolds-with-boundary page.
- `prop-relative-transversality-preserves-a-map-on-a-closed-good-region` must
  keep the squared cutoff. Preserving only the value and not the derivative on
  the zero set is not enough.

## Step-3 fix pass

I re-read `research/frontier-28-alpha-b-step3-scaffold-review.md` for the
stable Step-3 findings that apply to batch `10`. That review records
`whitney-embedding-tubular-neighbourhoods-and-approximation` as **sufficient**
and assigns no batch-10 finding id to repair or push back on inside the owned
scaffold artifacts.

- Finding id: none for batch `10`
- Disposition: no scaffold change
- Evidence: the Alpha group `b` review marks DG-7 sufficient without a local
  repair row; the current batch-10 scope decisions still stand on Tuesday,
  September 1, 2026 for Lee `Corollary 6.17`
  (`d5001d4570ec67a645fc4128f8ada34b333627b2434eb71bff87314faf2a9294`),
  Gualtieri `Corollary 3.30`
  (`5e406b2797cd79734b07c06df34a5638dec3a831514fb0d1a710a040817f8062`,
  still `owner-decision`), and Whitney's analytic section `II` /
  `Theorem V`
  (`ce41ae86d7dac69bade7cd34faace735112625ae39de876d470412c1f0662a56`,
  `a6e1858f170eb8cfc3a32d594089789792694bd85582dc51d70450f9be699d81`) in
  `research/frontier-28-alpha-b-scope-decisions.json`; I also re-opened the
  four recorded coverage URLs in the web reader on Tuesday, September 1, 2026
  and found no URL replacement or harvest rewrite was needed
- Changed scaffold record: none; `research/frontier-28-batch-10.pages.json`
  and `research/frontier-28-batch-10.coverage.json` remain unchanged on this
  fix pass

Validator reruns on Tuesday, September 1, 2026:

- `node tools/coverage-checklist.mjs research/frontier-28-batch-10.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 48 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json`
  -> `content-policy: 424 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-10.coverage.json`
  -> `source-fetch-check: 4/4 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> passed on the current bytes, ending with the standard `OK` line and only
  the standing repository-wide `redundant-prereq` advisories

## Step-5 authoring

Authored on Tuesday, September 1, 2026:

- Page files: `library/differential-geometry/whitney-embedding-tubular-neighbourhoods-and-approximation.md`, `library/differential-geometry/whitney-embedding-tubular-neighbourhoods-and-approximation-examples.md`
- Proof-contract output: `research/frontier-28-batch-10.proof-contracts.json`
- A-page ids: `lem-a-finite-coordinate-bump-map-embeds-a-compact-manifold-in-some-euclidean-space`, `lem-a-countable-coordinate-bump-map-embeds-a-manifold-in-countable-euclidean-data`, `lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands`, `thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space`, `prop-a-proper-injective-immersion-is-a-smooth-embedding`, `def-secant-and-tangent-direction-maps-of-an-euclidean-embedding`, `lem-a-generic-linear-projection-preserves-injectivity-and-immersion`, `lem-a-generic-projection-can-preserve-properness`, `thm-weak-whitney-proper-embedding-theorem`, `thm-weak-whitney-immersion-theorem`, `rem-strong-whitney-embedding-theorem`, `rem-strong-whitney-immersion-theorem`, `def-tubular-neighbourhood-of-an-embedded-submanifold`, `def-normal-addition-map-for-a-euclidean-submanifold`, `lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section`, `lem-variable-radius-injectivity-for-normal-addition`, `thm-euclidean-tubular-neighbourhood-theorem`, `cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction`, `prop-nearest-point-projection-is-the-tubular-retraction-after-shrinking`, `thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold`, `cor-every-closed-embedded-submanifold-has-a-smooth-neighbourhood-retraction`, `prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section`, `def-positive-continuous-error-function-for-strong-approximation`, `thm-whitney-approximation-for-euclidean-valued-maps`, `thm-relative-whitney-approximation-for-euclidean-valued-maps`, `lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood`, `thm-whitney-approximation-for-manifold-valued-maps`, `thm-relative-whitney-approximation-for-manifold-valued-maps`, `cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map`, `thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic`, `cor-the-smooth-and-continuous-homotopy-categories-of-smooth-manifolds-have-the-same-morphism-sets`, `cor-a-continuous-map-from-a-closed-subset-extends-smoothly-exactly-when-it-has-a-continuous-extension-and-is-smooth-near-the-subset`, `lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family`, `thm-transversality-homotopy-theorem`, `thm-strong-whitney-approximation-by-transverse-maps`, `cor-transverse-maps-are-dense-in-the-strong-smooth-topology`, `cor-a-smooth-section-can-be-perturbed-transverse-to-the-zero-section`, `prop-relative-transversality-preserves-a-map-on-a-closed-good-region`, `fs-every-injective-immersion-is-a-proper-embedding`, `fs-an-arbitrary-linear-projection-of-an-embedding-is-an-embedding`, `fs-every-proper-embedding-of-an-n-manifold-lands-in-r-n`, `fs-every-noncompact-submanifold-has-a-uniform-radius-tubular-neighbourhood`, `fs-the-tubular-neighbourhood-retraction-is-canonical`, `fs-uniform-approximation-is-the-right-global-notion-on-every-noncompact-manifold`
- B-page ids: `ex-the-standard-circle-and-its-annular-tubular-neighbourhood`, `ex-the-sphere-and-its-two-sided-normal-tube`, `ex-a-noncompact-embedded-curve-with-no-uniform-tubular-radius`, `ex-a-coordinate-bump-embedding-of-the-circle-in-euclidean-space`, `ex-projecting-a-space-curve-can-create-a-double-point`, `ex-smoothing-a-piecewise-linear-real-valued-function-relative-to-a-closed-set`, `ex-smoothing-a-continuous-circle-valued-map-through-an-annular-retraction`, `ex-a-generic-section-of-a-line-bundle-has-a-hypersurface-zero-set`, `cex-a-nearest-point-projection-is-not-unique-outside-the-tubular-radius`, `cex-a-smooth-approximation-without-relative-control-destroys-prescribed-values`

Provenance rationale:

- `literature-derived` statement provenance is used on the direct Lee/Gualtieri/Whitney theorem, lemma, and definition carriers, plus the two recorded strong Whitney remarks.
- `ai-altered` statement provenance is used on the local packaging items whose exact formulation is this library's page-level splice rather than a verbatim harvested source heading, including the exhaustion-compression lemma, the proper-immersion proposition, the secant/tangent packaging definition, the nearest-point proposition, the homotopy-category corollary, and the false-statement formulations.
- `ai-generated` statement provenance is used only on B-page example and counterexample items with the required `generation.role`, and none of those generated statements is a dependency target.
- The two strong Whitney remarks remain `proved_here: false`, `status: draft`, and carry the required `external_dependency` record. No authored in-flight item carries a `verification.judge`.

Narrowed or dropped claims:

- None. The authored scope matches the planned batch-10 A/B scaffold.
- I kept the Step-3 boundary that Gualtieri `Corollary 3.30` remains a coverage-level `owner-decision`; I did not mint a new cobordism/intersection item inside this batch.

Blockers:

- No validator blocker remains on the authored batch.
- The shell-side workspace controller still reports an unrelated live `.autopilot` run for `frontier-23`; I did not alter workflow state and confined authoring to the explicit `frontier-28` batch artifacts and page files.

Checks run on Tuesday, September 1, 2026 after authoring:

- `node tools/tsx-run.mjs tools/precheck.mts <batch-10 item files>` -> `48 checked, 0 failing — all clean`
- `node tools/content-policy.mjs research/frontier-28-batch-10.pages.json` -> `content-policy: 54 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json` -> passed, ending with `OK — declared page order is acyclic and consistent ...`
- `node tools/proof-contract.mjs research/frontier-28-batch-10.proof-contracts.json --strict` -> `proof-contract: 0 error(s), 0 warning(s), 48/48 item(s) checked`
- `git diff --check` -> clean
