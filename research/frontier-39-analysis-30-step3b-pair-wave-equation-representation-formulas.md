# Step 3b authoring — Wave equation representation formulas

- Run: `frontier-39-analysis-30` (role: alpha-high, pair author)
- A page: `wave-equation-representation-formulas` (batch 2, order 458.015, `pde`, 28 items)
- B page: `wave-equation-representation-formulas-examples` (batch 2, order 458.016, 9 items)
- Status: **complete for this pair** — 37/37 items authored, pages written, manifest and contracts updated,
  per-item decisions recorded and the pair scope decision refreshed for the current bytes.

## Owned IDs and disposition (37/37)

A page (28): def-wave-equation-cauchy-data-and-wave-speed, def-spherical-mean-of-space-dependent-data,
lem-iterated-radial-derivative-identity, lem-radial-derivative-expansion-of-the-epd-transform,
lem-first-moment-of-the-unit-sphere-vanishes, lem-derivative-of-an-integral-with-moving-endpoints,
lem-one-dimensional-wave-operator-factorisation, lem-odd-dimensional-wave-kernels-obey-the-radial-recursion,
lem-ball-and-sphere-mean-radial-identity, lem-spherical-surface-integrals-project-onto-weighted-ball-integrals,
lem-spherical-means-of-smooth-data-are-smooth, cor-time-reversal-invariance-of-the-homogeneous-wave-equation,
lem-euler-poisson-darboux-equation-for-spherical-means, lem-general-solution-of-the-one-dimensional-wave-equation,
thm-dalembert-formula, thm-kirchhoff-formula-for-the-three-dimensional-wave-equation,
lem-dalembert-formula-attains-both-initial-data, thm-odd-dimensional-wave-formula-by-spherical-means,
thm-one-dimensional-forced-wave-duhamel-formula, thm-poisson-formula-for-the-two-dimensional-wave-equation,
cor-one-dimensional-wave-domain-of-dependence, rem-wave-poisson-formula-is-not-the-harmonic-poisson-kernel,
thm-even-dimensional-wave-formula-by-descent, lem-wave-formulas-attain-the-cauchy-data,
thm-support-dichotomy-for-free-wave-fundamental-solutions, thm-wave-duhamel-principle,
thm-forced-three-dimensional-kirchhoff-duhamel-formula,
cor-classical-wave-solutions-are-locally-determined-by-cauchy-data.

B page (9): ex-right-and-left-travelling-waves, ex-three-dimensional-radial-wave-reduces-to-one-dimension,
cex-characteristic-line-data-do-not-determine-a-one-dimensional-wave,
ex-one-dimensional-wave-from-a-compactly-supported-velocity, ex-kirchhoff-formula-for-constant-initial-velocity,
ex-two-dimensional-wave-has-an-interior-tail, ex-point-source-wave-front-in-three-dimensions,
ex-wave-support-from-pure-displacement-versus-pure-velocity-data,
cex-wave-formula-with-sphere-area-and-ball-volume-confused.

Every item file is `items/<id>.md` (draft, origin pipeline, `pipeline_run` recorded, `dependency_level`
matching the manifest and recomputed levels). Pages are `library/pde/wave-equation-representation-formulas.md`
and `library/pde/wave-equation-representation-formulas-examples.md` (draft, item/example lists in manifest order).

## Checkpoints (authored one item at a time in dependency order)

- **Level 0 (6 items).** Definitions of wave operator/Cauchy data and of spherical means; iterated radial
  identity (proof by the operator identities D_r=r^{-1}partial_r, partial_r=rD_r, partial_r^2=D_r+r^2D_r^2,
  and [D_r,M_{r^2}]=2M); EPD-transform expansion (induction, leading coefficient read at f=1);
  first-moment vanishing (definition of the polar measure + lambda_n(-E)=lambda_n(E) + the substitution
  formula for a measure-preserving bijection); moving-endpoint differentiation (global primitive variable
  below the interval, primitives theorem, differentiation under the integral on a compact rectangle,
  chain rule).
- **Level 1 (6 items).** Factorisation; radial recursion L_{n+2}[r^{-1}w_r]=r^{-1}partial_r[L_nw] (direct
  radial expansion + Clairaut for time derivatives); ball/sphere radial identity (polar coordinates,
  continuity by uniform continuity on a compact ball, primitives theorem); projection of sphere integrals
  of cylindrical functions (one regular chart x+rho z with rho=r sin(phi/r), Gram determinant s^{n-1},
  substitution s=r sin(phi/r), polar formula; constant 2 n!! V_n/omega_n=(n-1)!! from the Gamma forms);
  smoothness/parity/limits of means (chart sums, iteration of differentiation under the integral,
  uniform continuity on compact balls, first-moment vanishing for the radial-derivative limit);
  time-reversal invariance.
- **Level 2 (2 items).** EPD equation (radial average formula of PDE-3 + the ball/sphere identity);
  general one-dimensional solution on a rectangle (image parallelogram convex, sections are intervals,
  zero-derivative theorem, primitives, uniqueness of the pair up to one constant).
- **Level 3 (3 items).** d'Alembert with existence (moving endpoints), data evaluation and uniqueness
  (general solution + limits at t=0); Kirchhoff in R^3 (candidate partial_t[tM_{u_0}(x,ct)]+tM_{u_1}(x,ct),
  time derivatives by chain rule, spatial derivatives by EPD, cancellation at r=ct; equivalent unnormalised
  form using omega_2=4pi); radial three-dimensional reduction (forward by the radial Laplacian, converse
  by Taylor expansions under the repaired C^3-up-to-0 hypothesis).
- **Level 4 (5 items).** Data attainment for d'Alembert; odd-dimensional formula (Lemma 7.6 from the page
  applied at r=t with phi(t)=H_f(x,ct), EPD converting t^{-1}partial_t(t^{n-1}H_t) into t^{n-2}Delta_xH,
  commutation of Delta_x with D_t and t^{n-2}); forced one-dimensional formula (moving-endpoint rule twice,
  uniqueness by d'Alembert); Poisson in R^2 by descent (Kirchhoff on the cylindrical extension, projection
  identity with W(.,ct), integrated equivalent form by the substitution y=x+ctz); travelling-wave example;
  characteristic-line counterexample (witnesses sin(eta) and xi^3+sin(eta)).
- **Level 5 (3 items).** One-dimensional domain of dependence; even-dimensional formula by descent
  (odd formula in n+1 dimensions + projection identity, prefactor c^{1-n}); naming remark (wave Poisson
  formula vs harmonic Poisson kernel).
- **Level 6 (3 items).** Data attainment for all four formulas (odd: expansion of the mean and parity;
  even: substitution y=x+ctz, G_f smooth even with G_f(0)=f(x) n!!V_n/(n-1)!!; uniform on compacta);
  support dichotomy (shell neighbourhood dependence in odd dimensions; kernel K and K(0,t)=a t^{-(n-1)}
  for data supported inside the open ball, hence interior contribution); compactly supported velocity
  example (overlap formula, support |x|<a+ct, plateau a/c on |x|<=ct-a).
- **Level 7 (5 items).** Wave Duhamel principle (moving-endpoint rule + zero displacement at launch +
  velocity attainment); constant-velocity Kirchhoff check; two-dimensional interior tail; point-source
  uniform expanding sphere; displacement-vs-velocity support contrast.
- **Level 8 (2 items).** Forced three-dimensional retarded potential (Duhamel + Kirchhoff launched solutions
  + polar substitution, coefficient 1/(4pi c^2)); sphere-area/ball-volume counterexample (constant data
  return c/3 and ct/3 instead of 1 and t).
- **Level 9 (1 item).** Local determination by the Cauchy data (difference of two configurations vanishes
  on the closed ball with all derivatives of the formula's class, so every evaluated ingredient vanishes;
  forced case is the backward-cone integral).

## Repairs made during authoring (recorded in the manifest and item bodies)

1. **W(.,ct) notation (Step 3a flagged).** `thm-even-dimensional-wave-formula-by-descent` and
   `lem-spherical-surface-integrals-project-onto-weighted-ball-integrals` now write W_f(x,ct); the literal
   radius-t reading was false for c != 1 (Step 3a's n=2/4 computations). The projection item also records
   the constant identity 2 n!! V_n/omega_n=(n-1)!! with its Gamma-function proof.
2. **Radial-expansion limit hypothesis.** `lem-radial-derivative-expansion-of-the-epd-transform` now assumes
   the derivatives f^(j), 0<=j<=k-1, bounded near 0 (e.g. f of class C^{k-1} on [0,infinity)). Mere
   continuity at 0 is insufficient: f(r)=r sin(r^{-2}) has rf'(r) unbounded and the k=2 limit fails.
3. **Radial reduction regularity.** `ex-three-dimensional-radial-wave-reduces-to-one-dimension`'s converse
   assumes w of class C^3 up to r=0 with w(0,t)=0, which is what C^2 regularity of v=w/r at the origin
   requires; the limits v_{rr}->w_{rrr}(0,t)/3, (2/r)v_r->2w_{rrr}(0,t)/3 and v_{tt}->c^2 w_{rrr}(0,t)
   combine to Delta u -> w_{rrr}(0,t).
4. **Plateau region.** `ex-one-dimensional-wave-from-a-compactly-supported-velocity` corrects the
   scaffold's |x|<=a-ct to |x|<=ct-a for the constant plateau a/c (and records u=t on |x|<=a-ct while ct<=a).
5. **Support dichotomy.** `thm-support-dichotomy-for-free-wave-fundamental-solutions` states part (ii) for
   data supported in a compact subset of the open ball (the displayed kernel integral converges only there)
   and records a=c^{-n}(-1)^{k-1}(2k-3)!!/(n!! V_n); part (i) is neighbourhood dependence, not pointwise
   trace dependence (the owner's shell-support correction).
6. **Forced one-dimensional source class.** `thm-one-dimensional-forced-wave-duhamel-formula` assumes
   f of class C^1 rather than merely continuous with continuous partial_t f, which is what the second
   differentiation of the source term requires.
7. **Dependency declarations added** (all to published items, so no level changed): compactness/extreme-value
   tools for `def-spherical-mean-...`, `lem-spherical-means-...`, `lem-ball-and-sphere-...`,
   `lem-euler-poisson-darboux-...`; Gamma-function items and `cor-volume-of-the-unit-n-ball` for the
   projection, Kirchhoff, even-formula and counterexample items; chain rule/Clairaut/linear change of
   variables/Fubini/differentiation-under-the-integral where actually used; the projection lemma for the
   data-attainment lemma; `cor-primitives-...` for the forced one-dimensional formula and the travelling-wave
   example. Item frontmatter and manifest `deps` were kept in sync.
8. **Scope receipt refreshed.** The Step 3a review receipt
   (`research/frontier-39-analysis-30-step3a-review-wave-equation-representation-formulas.json`) was
   re-recorded as `sufficient` for the current scope after these repairs (the 3a report itself is preserved
   unchanged at `research/frontier-39-analysis-30-step3a-pair-wave-equation-representation-formulas.md`).
   Scope hash is clean and the pair's item decisions were recorded against the current bytes.

Deviations recorded in the Step 1 notes (classical rendering of the overlay kernel rows, dependency-order
placement of attainment/forced-1d, deferred n>=2 uniqueness) are preserved and are consistent with the
authored items.

## Checks actually run (current outputs)

- `node tools/tsx-run.mjs tools/author-check.mts frontier-39-analysis-30 2` → **ok: true**; its four gates:
  precheck **pass** on all 34 proof-bearing items (3 definition/remark items n/a), rendercheck **ok** on all
  39 files (37 items + 2 pages), content-policy item mode **0 errors / 0 warnings**, proof-contract strict
  **0 errors**.
- `node tools/tsx-run.mjs tools/precheck.mts` over the 37 explicit paths → **34 checked, 0 failing**.
- `node tools/rendercheck.mjs` over the 37 explicit paths and the two pages → **OK** (one `\(...\)` delimiter
  slip in the naming remark was fixed before this run).
- `node tools/proof-layout.mjs` over all 37 changed item paths (one command) → **37 items, 125 steps, 0 defects**.
- `node tools/content-policy.mjs research/frontier-39-analysis-30-batch-2.pages.json` → **37 scoped items,
  0 errors, 0 warnings**.
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-2.pages.json` → **37 items, 0 missing,
  0 errors**.
- `node tools/merge-proof-contracts.mjs --level frontier-39-analysis-30-batch-2 ...` → merged 37 scoped items;
  `node tools/proof-contract.mjs <batch-2 contract> --strict` → **0 errors, 0 warnings, 37/37 checked**;
  `node tools/boundary-audit.mjs ... --fail-on-contradicted --fail-on-template` → **0 template clusters,
  0 contradicted rows** (296 boundary rows); `node tools/citation-fidelity.mjs ... --fail-on-missing-quote`
  → no missing/widened citations; `node tools/finite-smoke.mjs` → 0 obligations; `risk-report` routes two
  critical items (ex-point-source-..., ex-wave-support-...) to Step 5a, no Step-3 error.
- Scoped dependency-level check on the pair (`runPages`+`dependencyLevels` over the two pages) →
  **37 items, 0 label mismatches, no cycle, maximum level 9**; the whole-run
  `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` reports errors only for other
  batches' in-flight items (e.g. `cex-a-coercive-functional-need-not-attain-without-weak-lower-semicontinuity`),
  none for this pair.
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0 (23135/23136 planned items already on disk).
- `node tools/depcheck.mjs` (repo-wide) → exit 1, but **no line mentions any of this pair's 37 items or the
  two pages**. The run-wide findings belong to siblings/legacy: 833 `published-unaudited` (legacy published
  items without audit stamps), 24 `b-leaf-content` in other pairs of this run, 82 `link-unresolved`,
  58 `dep-unresolved`, plus warnings (`cited-not-in-deps`, `multi-home`).
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30` → currently fails on a
  sibling's item frontmatter (YAML invalid-escape) before it can merge inputs; batch 2's input file
  `research/frontier-39-analysis-30-batch-2.cross-batch-dependencies.json` was updated directly (one page row,
  rewritten evidence, still `open`) and is JSON-valid. See findings below.
- `node tools/step3-decisions.mjs check --run frontier-39-analysis-30 --phase scope|final` →
  the pair's A page scope is closed (current `sufficient` receipt) and **all 37 owned items are closed**
  (30 `accept`, 7 `repaired`, confidence 1, dependency lists attached); remaining open rows belong to sibling
  pairs.

## Cross-batch and run-wide findings (outside this pair's authority)

1. **In-run page prerequisite (kept open).** `wave-equation-representation-formulas` requires
   `heat-equation-maximum-principles-duhamel-and-smoothing` (page level only). Step 3b re-check: every
   `[[link]]` in the 37 item files was tested against the run inventories and **zero foreign in-run links**
   exist; no wave proof uses a heat item, so nothing in this pair inherits a base assumption from PDE-8.
   The row stays `open` with refreshed evidence; page ordering is a Step-4 check.
2. **Sibling YAML frontmatter failures blocking the dependency-ledger refresh** (exact IDs):
   `lem-lca-group-has-an-open-compactly-generated-subgroup-with-no-open-subgroup-of-infinite-index`,
   `lem-compactly-generated-lca-group-with-no-open-subgroup-of-infinite-index-splits-as-compact-times-euclidean`,
   `ex-annihilator-of-a-closed-subgroup-of-euclidean-space`,
   `ex-bidual-map-on-the-circle-and-the-integers`,
   `cex-the-algebraic-character-group-without-compact-open-topology-is-not-pontryagin-duality`.
   Each has an unescaped backslash in a double-quoted frontmatter scalar (`\mathbb`); the renderer's YAML
   parser rejects them, so `frontier-dependency-ledger.mjs refresh` exits 1. Repair: single-quote the scalar
   or escape the backslash. Route to the owning pair (LCA/character-groups batch).
3. **Run-wide depcheck state.** The exit-1 findings listed above are sibling or published-legacy items; this
   pair contributes none. No published supplier used by this pair was found defective: the two carried
   caveats from the scaffold (Countable Choice propagation into consumers, and the local repair stamps on
   the PDE-3 mean suppliers) were re-checked against the current bytes and match their stated uses.
4. **Manifest housekeeping for Step 4 (no action taken beyond this pair).** The scaffold dep lists of
   `def-spherical-mean-of-space-dependent-data` (`thm-continuous-implies-integrable`),
   `lem-spherical-surface-integrals-...` (`thm-fubini-...`, `thm-linear-change-of-variables-...`) and
   `thm-kirchhoff-...` (`lem-derivative-of-an-integral-with-moving-endpoints`) contain declarations the
   authored proofs do not use; the correct tools were added where needed. Extra declarations are not gate
   errors; the serial reconciler may trim them if desired.

## Open obligations and handoff statement

- All 37 assigned items and both pages are authored; the report, manifest, coverage file, contracts file,
  pages and decisions exist. `research/frontier-39-analysis-30-batch-2.coverage.json` was left unchanged
  (source-coverage carrier; no source was added or dropped).
- No item decision is escalated: no wave item depends on an unauthored in-run supplier. The one in-run
  page-level edge (heat pair) is recorded open with exact evidence.
- Uniqueness of classical solutions for n>=2 remains deliberately deferred to the consuming wave-energy
  page, as the Step 1 notes and the refreshed scope decision record; the one-dimensional uniqueness is
  proved locally (d'Alembert).
- No new item IDs and no auditor-created items were added; no sibling or published content was edited;
  the shared batch manifest preserves all sibling rows (batch 2 contains this pair only).
- Thorough independent mathematical audit and defect repair remain Steps 5–8 duties; nothing in this
  report claims independent review.
