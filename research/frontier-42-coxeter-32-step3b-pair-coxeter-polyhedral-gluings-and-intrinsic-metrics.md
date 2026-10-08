# Step 3b — pair coxeter-polyhedral-gluings-and-intrinsic-metrics

- Run: `frontier-42-coxeter-32` (batch 6), role `alpha-high`, label
  `step3b-pair-coxeter-polyhedral-gluings-and-intrinsic-metrics-6acf8e683329b687`.
  An earlier dispatch of the same pair ran under label `…-76c5458bd2edeac7` and
  stopped without checkpoints; this report supersedes its `(pending)` section and
  records the final state.
- A page: `coxeter-polyhedral-gluings-and-intrinsic-metrics` (5 items, order 1728,
  category `coxeter-groups`). B page: `coxeter-polyhedral-gluings-and-intrinsic-metrics-examples`
  (3 items, order 1729). Companion pointers agree A↔B.
- Owned ids, in the dispatch dependency order (lower first; ties by page order and
  id). The levels are the ones this pass verified against
  `tools/item-dependency-levels.mjs`; the dispatch's own level column read 5 for
  the last two B items, which the tool computes as 3 (see “Scope and plan
  refreshes”):
  0. `def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric` (A)
  1. `lem-cg-polyhedral-face-coherence-and-uniform-star-radius` (A)
  2. `thm-cg-polyhedral-chain-metric-topology-and-properness` (A)
  3. `lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity` (A)
  3. `cex-cg-shrinking-edge-ray-is-locally-finite-but-not-complete` (B)
  3. `ex-cg-interval-realized-tree-versus-vertex-graph-metric` (B)
  3. `ex-cg-hexagonal-a2-cell-and-graph-distance` (B)
  4. `thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics` (A)

## Entry audit (state at dispatch, open obligations at entry)

- This is the third dispatch for this pair (`c3bb413c1bae9caf` ran ~21 min on
  2026-10-07 and stopped without a checkpoint; `d04520645fb57dc2` is a step-1-era
  label). Entry state on disk: the three lowest-level item files
  (`def-…-gluing-and-chain-metric`, `lem-…-face-coherence…`, `thm-…-topology-and-properness`)
  exist as untracked, uncommitted drafts written by the interrupted attempt, with
  `verification.precheck` recorded as `n/a`/`pass`/`pass`. The five remaining item
  files and both library page bodies are untouched, and **no** Step 3b item decision,
  proof contract, page item list or ledger refresh exists yet for this pair.
- All eight ids are immutable pre-author scaffold ids of `research/frontier-42-coxeter-32-batch-6.pages.json`
  (5 A + 3 B), so each needs an ordinary current item decision after authoring.
- Step 3a (`frontier-42-coxeter-32-step3a-pair-coxeter-polyhedral-gluings-and-intrinsic-metrics.md`)
  recorded **sufficient** at the current scope hash, with two authoring notes:
  (a) cite the metric-valued uniform-convergence/equicontinuity suppliers in the
  length lemma rather than the real-valued item; (b) state the definition's
  face-identification well-definedness obligation explicitly.
- Step 1 drift: no drift, no prerequisite gap for this page; all published suppliers
  of the eight contracts resolve on disk. Source caveat kept: Davis Prop. I.3.4(a)
  as printed ("locally finite ⇒ complete") is refuted by the pair's own B
  counterexample; the scaffold and this authoring rely only on clause (b)/BH
  I.7.13, I.7.19 (finitely many shapes), never on clause (a).
- `research/frontier-42-coxeter-32-batch-6.cross-batch-dependencies.json` is `[]`:
  every non-pair supplier of the eight contracts is a published out-of-run item.
  Consumers of this pair live in other batches of this run (their manifests name
  these item ids); keeping the five A interfaces as scaffolded is this pair's
  obligation.
- Open obligations carried at entry:
  1. Audit the three inherited drafts against the scaffold contracts (every claim,
     hypothesis, supplier use, dep declaration), repair local gaps, and author the
     five remaining items in dependency order with complete proofs.
  2. Length lemma: cite `def-topology-of-uniform-convergence` and
     `def-equicontinuity` (metric-valued), and `def-extended-reals`/`lem-extended-reals-complete`
     for the `[0,∞]`-valued supremum; do not cite the R^n-target length theorems.
  3. Definition: make the face-labelling well-definedness obligation explicit
     (`def-…` condition (b) and the poset-isomorphism clause), with the proof of
     chain-length independence and finiteness carried by item 2.
  4. Register the pair in the batch-6 manifest rows (deps/levels as authored),
     the two library pages, the batch-6 proof contracts, and coverage where the
     claims changed; keep sibling rows untouched.
  5. Run the explicit-path checks (precheck, rendercheck, proof-layout,
     content-policy, strict proof contracts, dependency-levels, validate-plan,
     manifest-deps, depsource) and record the eight item decisions.
- Direct in-run prerequisite pairs to inspect: none (dispatch).

## Scaffold audit, local repairs and authoring (this pass)

Audit against the step-3a contracts, the design §CG-03 and the batch manifest.
The earlier, interrupted dispatch of this label wrote all eight item files and
both library page bodies (the three lowest-level drafts first: `def-…`,
`lem-…-face-coherence…`, `thm-…-topology-and-properness`; then the length lemma,
the proper-geodesics theorem and the three B items). This pass re-read all eight
items claim by claim against their declared suppliers, hypotheses and choice
status, checked that every proof carries the complete argument, the exact F-step
uses, both directions of every iff, and the empty/zero/one/degenerate endpoint
cases in the text, and found the three A drafts and the two A consumers
authoring-ready; they were left unchanged apart from the shared metadata
refreshes below, and the repairs actually needed are listed next. Entry obligations 2 and 3 are discharged: the length lemma cites the
metric-valued `def-topology-of-uniform-convergence` and `def-equicontinuity` and
takes its supremum through `def-extended-reals`/`lem-extended-reals-complete`
(never the R^n-target length theorems), and the definition states the
face-identification well-definedness obligation explicitly, with chain-length
independence and finiteness carried by item 2.

Local repairs made in this pass, all re-checked afterwards:

- Notation: the three B items applied the quotient map as bare `\iota(C_…)`,
  which `content-policy.mjs` rejects (`notation-iota-applied`). Each item now
  uses the definition's subscripted cell map (`\iota_e(C_e)`, `\iota_u(C_u)`,
  `\iota_{e_n}(C_{e_n})`, `\iota_H(H)`), and the tree example's `Given` line now
  names the quotient maps `\iota_p\colon C_p\to X_\Gamma`.
- Format: the tree example declares an induction strategy, so its proof now
  carries `[base, IH]` on step 1.2 (where the base case and the induction
  hypothesis are stated) and `[discharge-induction: step 1.2]` on the final step
  6.1; step 2.1 already cites `step 1.2`, so the format checker's IH-citation
  requirement is met and `precheck` passes the item under the `induction`
  strategy.
- Dependency levels: the two B examples were labelled 5, but the repository check
  computes levels from in-run dependencies only
  (`tools/item-dependency-levels.mjs`), and their in-run suppliers are A1–A3
  (levels 0–2), so both are 3. Item files and manifest rows now both read 3, and
  the run-wide check no longer names this batch.
- Page `requires`: two A items need
  `def-limsup-and-liminf-of-nonnegative-extended-sequences`, homed on
  `measures-and-their-basic-properties`, and the hexagon example needs
  `def-convex-subset-of-euclidean-space`, `def-inner-product-space`,
  `def-inner-product-norm`,
  `prop-pythagorean-parallelogram-and-polarisation-identities`,
  `thm-triangle-content-and-base-height-formula`,
  `def-base-and-height-for-plane-figures` and
  `lem-determinant-base-height-identity-in-r2`, homed on `the-total-derivative`,
  `inner-product-spaces-and-orthogonality` and `areas-of-elementary-plane-figures`;
  `validate-plan` raised `undeclared-prereq` for all four pages. The A page now
  declares `measures-and-their-basic-properties`; the B page declares
  `areas-of-elementary-plane-figures`, whose closure already contains
  `inner-product-spaces-and-orthogonality` and `the-total-derivative`, so the
  addition is a transitive reduction with no `redundant-prereq` warning and no
  cycle. The three carriers (batch-6 manifest, `research/plan-spec.json`, library
  page frontmatter) were updated together; no sibling page row was touched.
- Finite smoke: no registered model matched this pair, so the batch's
  `finite-smoke` ran zero checks and `gate-liveness` failed the batch scope as
  vacuous. A new registered model, `hexagon-a2-cell-triangulation-arithmetic`,
  was added to `tools/finite-smoke.mjs`; it recomputes the example's finite
  arithmetic in exact `Q(sqrt 3)` with BigInt fractions (no floating point): the
  twelve `v-m-o` incident triangles with legs 1/2 and sqrt(3)/2, hypotenuse 1 and
  a right angle at each midpoint; the slopes 2, 4/sqrt(3), 2/sqrt(3);
  L = 4/sqrt(3); delta = sqrt(3)/24; the vertex distances 1, sqrt(3), 2; and the
  C_6 graph distances 1, 2, 3. The obligation is declared in the batch-6 proof
  contract for `ex-cg-hexagonal-a2-cell-and-graph-distance` and quotes that
  item's displayed clause (iii) verbatim (the contract checks the quote against
  the item, so a changed constant would fail the gate). `finite-smoke` now
  reports `1 check(s) over 1/8 item(s) carrying obligations`, and `gate-liveness`
  passes with all four probes live.

No in-run unfinished supplier is consumed by this pair: every non-pair supplier
of the eight contracts is a published item that resolves on disk, and the pair's
own five A items are now authored, so no consumer obligation needed to stay
escalated. Consumers of the five A interfaces live in other batches (their
manifests name these ids); none of the five A statements changed in this pass, so
no direct-consumer re-review is opened by this batch.

## Checkpoints (appended per item)

### 0. `def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric` (A, level 0)

- Claim/conventions: a shape poset whose principal down-sets are face posets of
  nonempty compact convex polyhedral cells; affine face isometries with the
  cocycle and intersection conditions; the quotient with the weak topology;
  chains that step inside single cells, with length the sum of the within-cell
  Euclidean distances; the chain metric candidate as the infimum. The standing
  hypotheses (H1) connectedness, (H2) local finiteness, (H3) finitely many
  isometry classes are declared before any metric claim. The face-labelling
  well-definedness obligation is explicit (condition (b), the poset isomorphism,
  and independence of the cell choice), and its discharge is carried by item 2.
  The definition asserts only symmetry and the triangle inequality and records
  that the chain metric need not restrict to a single cell's Euclidean metric.
- Source locators: Bridson–Haefliger I.1.18–I.1.20, printed pp. 11–13; I.7.2–I.7.6,
  printed pp. 97–100; Davis Appendix I.3, printed pp. 507–508 (Definition I.3.3
  and Proposition I.3.4(b)).
- Dependencies examined (6): `def-metric-space`, `def-metric-topology`,
  `def-finite-convex-cell-complex-and-linear-subdivision`,
  `def-face-poset-and-order-complex`, `def-partial-order`,
  `def-isometry-and-metric-embedding`.
- Decision: `accept`, confidence 1
  (`research/frontier-42-coxeter-32-step3b-review-def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric.json`,
  sha `6aebd8ed8c6c…`).
- Checks: precheck n/a (definition, no phase body); rendercheck OK; proof-layout
  0 defects; content-policy 0 errors; strict contract clean; dependency level 0
  agrees. No Choice.
- Open gaps: none in scope. Next action: Step 5 independent audit.

### 1. `lem-cg-polyhedral-face-coherence-and-uniform-star-radius` (A, level 1)

- Claim/conventions: compatible barycentric triangulations of the finitely many
  model cells; each vertex hat coordinate is piecewise affine with a uniform
  Lipschitz constant `L` over the finitely many model simplices, giving
  `|λ_v(x) − λ_v(y)| ≤ L·d(x,y)`; some `λ_v(x) ≥ 1/(D+1)`, so `B(x,δ)` with
  `δ = 1/(2L(D+1))` lies in the open star of `v`; each closed star is a finite
  compact cell union by local finiteness. The radius is derived from hat
  coordinates, never from a point-to-face lower bound, and zero-dimensional
  components are handled separately.
- Source locators: Bridson–Haefliger I.7.2–I.7.6, I.7.12–I.7.13, I.7.19,
  printed pp. 97–105; Davis Chapter 2 (cells and cell complexes), pp. 13–16.
- Dependencies examined (11): the definition, the cell-complex, face-poset,
  simplicial-complex, realization, star/link and compatible-triangulation
  suppliers, plus `def-metric-space`.
- Decision: `accept`, confidence 1 (review record sha `6aebd8ed8c6c…`).
- Checks: precheck pass; rendercheck OK; proof-layout 0 defects; content-policy
  0 errors; strict contract clean; level 1 agrees. No Choice.
- Open gaps: none. Next action: Step 5; item 3's finite-star cover consumes
  exactly this `L` and `δ`.

### 2. `thm-cg-polyhedral-chain-metric-topology-and-properness` (A, level 2)

- Claim/conventions: under (H1)–(H3) the chain metric candidate is a metric whose
  topology is the weak topology, and every closed `d`-bounded subset is compact
  (finite-star cover: a chain of length ≤ R+1 splits into pieces of length < δ
  inside selected vertex stars; consecutive stars meet; locally finite incidence
  gives finite branching; the ball is closed in a finite compact union). No
  valence bound is assumed, and (H2) alone is not claimed to give completeness.
- Source locators: Bridson–Haefliger I.7.2–I.7.6 and I.7.10–I.7.13, printed
  pp. 97–102; Davis Appendix I.3, printed pp. 507–508 (Proposition I.3.4), and
  §12.1, printed pp. 231–233.
- Dependencies examined (17): the definition, the star lemma, the metric
  definitions (space, topology, ball, compactness, completeness, Cauchy,
  convergence), reverse-triangle and nonnegativity, the compactness and
  weak-topology suppliers, and `def-upper-bound`.
- Decision: `accept`, confidence 1 (review record sha `6aebd8ed8c6c…`).
- Checks: precheck pass; rendercheck OK; proof-layout 0 defects; content-policy
  0 errors; strict contract clean; level 2 agrees. No Choice.
- Open gaps: none. Next action: Step 5; this item is the pair's interface for
  the out-of-batch consumers (other batch manifests name its id).

### 3. `lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity` (A, level 3)

- Claim/conventions: for an arbitrary metric target, length as the `[0,∞]`-valued
  supremum of polygonal sums; the chord bound; additivity at the initial point;
  lower semicontinuity under uniform convergence (fix a partition, pass the
  finitely many chord terms to the limit, use the tail infimum); the arclength
  function of a continuous rectifiable path, its continuity and surjectivity, and
  the unique 1-Lipschitz unit-speed reparametrization `γ = γ̄ ∘ s` with
  `L(γ̄|[r,q]) = q−r`; constant paths are the zero-length case. Choice-free.
- Source locators: Bridson–Haefliger I.1.18–I.1.20, printed pp. 11–13 (supremum
  of polygonal sums, chord bound, monotone reparametrization, arclength function,
  unit-speed reparametrization, lower semicontinuity).
- Dependencies examined (21): the metric-space, extended-real, order/supremum,
  uniform-convergence, equicontinuity, real-limit and order-limit suppliers,
  plus the pair's own items 1 and 3.
- Decision: `accept`, confidence 1 (review record sha `817b6f6916…`).
- Checks: precheck pass; rendercheck OK; proof-layout 0 defects; content-policy
  0 errors; strict contract clean; level 3 agrees. The `citation-fidelity`
  widening candidate on [F6]/`lem-limit-preserves-order` was read and dismissed:
  the recorded quote is the supplier's statement verbatim, and the detector
  matches the supplier's `x_k ≥ 0` special case with a case-sensitive threshold.
- Open gaps: none. Next action: Step 5; item 5 consumes clauses (ii) and (iii).

### 3. `cex-cg-shrinking-edge-ray-is-locally-finite-but-not-complete` (B, level 3)

- Claim/conventions: refutes "connected + locally finite + compact convex cells
  ⇒ complete" with the shrinking-edge ray: `a_0 = 0`, `a_{n+1} = a_n + 2^{−n}`,
  cells `[a_n, a_{n+1}]` and one-point cells at the `a_n`, glued by identity
  inclusions. The space is an isometric polyhedral gluing isometric to `[0,2)`,
  so (H1) and (H2) hold; (H3) fails (pairwise non-isometric cells of lengths
  `2^{−n}`); the far endpoints `p_k` are Cauchy with `d(p,p_k) ≥ 2^{−(N+1)} > 0`
  for `p` in the cell `C_N` and `k > N`, hence no limit exists; and the closed
  ball `B̄(p_0,2) = X` is not compact. Davis Appendix I.3 Proposition I.3.4(a) as
  printed (local finiteness alone gives completeness) is refuted; only the (H3)
  clause of item 3 is used. Repaired in this pass: applied `\iota` notation made
  subscripted.
- Source locators: Bridson–Haefliger I.7.11, printed p. 101 (shrinking intervals
  isometric to a half-open interval), I.7.13 and I.7.19, printed pp. 101, 105–111
  (finitely many shapes, not local finiteness, is the completeness hypothesis);
  Davis Appendix A.1, printed p. 419 (local finiteness), Appendix I.3, printed
  pp. 507–508 (the printed claim refuted here).
- Dependencies examined (18): the definition, item 3, the metric, completeness,
  Cauchy, convergence, ball, compactness and isometry suppliers, the real-line
  and geometric-sequence lemmas, `def-natural-numbers`, and the connectedness
  suppliers.
- Decision: `repaired`, confidence 1 (review record sha `4265febc31…`).
- Checks: precheck pass; rendercheck OK; proof-layout 0 defects; content-policy
  0 errors; strict contract clean; level 3 agrees. No Choice.
- Open gaps: none. Next action: Step 5; keep the Davis clause (a) caveat — do not
  restore it anywhere in the pair.

### 4. `thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics` (A, level 4)

- Claim/conventions: **assumes the Axiom of Choice**; under (H1)–(H3) every pair
  `x,y` is joined by a minimizing geodesic. Near-minimizing chains produce
  `(R+1)`-Lipschitz paths on `[0,1]`; the proper-target Ascoli–Arzelà subsequence
  theorem (its Choice hypothesis is the item's only Choice use, declared via
  `def-axiom-of-choice`) gives uniform convergence; lower semicontinuity plus the
  chord bound give `L(γ) = R`; the arclength reparametrization is isometric. The
  arbitrary near-minimizing-sequence clause is proved in step 7.1, and the
  degenerate case `x = y` (`[0,0]` with the constant geodesic) is included.
- Source locators: Bridson–Haefliger I.1.18–I.1.20, printed pp. 11–13, and
  I.7.13/I.7.19, printed pp. 101, 105–111; Davis §12.1, printed pp. 231–233, and
  Appendix I.3, printed pp. 507–508.
- Dependencies examined (19): the definition, items 3 and 4,
  `cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets`,
  `def-axiom-of-choice`, the geodesic, metric, ball, boundedness, compactness,
  infimum, equicontinuity, regularity, Heine–Borel, real-line, isometry and
  interval suppliers, `def-limsup-…`, `cor-archimedean-reciprocal`.
- Decision: `accept`, confidence 1 (review record sha `b155ece1a4…`).
- Checks: precheck pass; rendercheck OK; proof-layout 0 defects; content-policy
  0 errors; strict contract clean; level 4 agrees. The only Choice use is the
  Ascoli supplier, declared; all other pair items are choice-free. The
  `citation-fidelity` widening candidate on [F10]/`cor-archimedean-reciprocal`
  was read and dismissed: the restatement keeps `N ≥ 1` (the detector misses it
  through symbol case).
- Open gaps: none. Next action: Step 5; propagate the AC declaration to any
  consumer that quotes this item.

### 3. `ex-cg-interval-realized-tree-versus-vertex-graph-metric` (B, level 3)

- Claim/conventions: the interval realization `X_Γ` of a finite tree with positive
  edge lengths (unit lengths for the headline case), with the chain metric:
  (i) on vertices `d(v,w) = Σ_{e ∈ path(v,w)} ℓ_e`, which is the graph path
  metric when all `ℓ_e = 1`; (ii) exactly one geodesic segment joins any two
  points, and edge midpoints are at distance `ℓ_e/2` (so `1/2` in the unit case)
  although the graph metric is integer-valued on distinct vertices; (iii) the
  discrete vertex metric is not geodesic when `Γ` has an edge; (iv) the weighted
  and unweighted vertex metrics agree iff every `ℓ_e = 1` (single edge of length
  2: 2 against 1). The proof is an induction on the number of edges cutting a
  leaf edge, with the base case, the interval characterization and the uniqueness
  of geodesics argued explicitly. Repaired in this pass: subscripted quotient
  maps; induction tags `[base, IH]`/`[discharge-induction: step 1.2]`; level
  5 → 3.
- Source locators: Loh, Geometric Group Theory §§5.2–5.3 (graph path metric;
  geodesic metric spaces); Bridson–Haefliger I.7.11–I.7.13, printed pp. 101–102.
- Dependencies examined (15): items 1 and 3, the geodesic, metric and continuity
  suppliers, the graph-path, tree and unique-path suppliers, and the connectedness
  suppliers.
- Decision: `repaired`, confidence 1 (review record sha `2052e33460…`).
- Checks: precheck pass (strategy `induction`); rendercheck OK; proof-layout
  0 defects; content-policy 0 errors; strict contract clean; level 3 agrees.
  No Choice.
- Open gaps: none. Next action: Step 5.

### 3. `ex-cg-hexagonal-a2-cell-and-graph-distance` (B, level 3)

- Claim/conventions: the single-cell gluing of the regular hexagon `H` of side 1;
  the chain metric is the Euclidean metric; `(H,d)` is complete and geodesic; the
  barycentric triangulation has 12 triangles `v-m-o` with legs `1/2`, `√3/2` and
  hypotenuse `1`, slopes `2`, `2/√3`, `4/√3`, hence `L = 4/√3` and `δ = √3/24`
  for `D = 2`; the vertex distances are `1, √3, 2` against the `C_6` graph
  distances `1, 2, 3`, so neither the graph metric nor the boundary arc length is
  the cell metric. Repaired in this pass: subscripted maps (`\iota_H(H)`); level
  5 → 3; the B page requires `areas-of-elementary-plane-figures`, which covers the
  example's inner-product, convexity and area/base-height suppliers through its
  closure.
- Source locators: Davis Definition 7.3.1 and Examples 7.3.2(ii), printed
  pp. 128–130, and Proposition 7.3.4, printed pp. 130–131; Bridson–Haefliger
  I.7.12–I.7.13, printed pp. 101–102.
- Dependencies examined (24): items 1–3, the geodesic, metric and Rn metric
  suppliers, the cell-complex and face-poset suppliers, the convexity,
  inner-product, Pythagorean, path-connectivity, continuity, triangle-content and
  base-height, square-root and graph-path suppliers.
- Decision: `repaired`, confidence 1 (review record sha `7cac170aca…`).
- Checks: precheck pass; rendercheck OK; proof-layout 0 defects; content-policy
  0 errors; strict contract clean; level 3 agrees; the new finite-smoke model
  independently recomputes the item's whole finite arithmetic in exact `Q(√3)`
  and passes. No Choice.
- Open gaps: none. Next action: Step 5.

## Checks run at handoff (exact results)

Explicit-path, batch-6 scope (all rerun after the last write):

| command | result |
|---|---|
| `node tools/tsx-run.mjs tools/precheck.mts <8 item paths>` | `7 checked, 0 failing` (the definition has no phase body) |
| `node tools/rendercheck.mjs <8 item paths>` | OK, 8 files; also OK on both library pages |
| `node tools/proof-layout.mjs <8 item paths>` | `8 items, 55 steps, 0 defects` |
| `node tools/content-policy.mjs research/frontier-42-coxeter-32-batch-6.pages.json` | `8 scoped item(s), 0 error(s), 0 warning(s)` |
| `node tools/proof-contract.mjs …batch-6.proof-contracts.json --strict` | `0 error(s), 0 warning(s), 8/8 item(s)` |
| `node tools/finite-smoke.mjs …batch-6.proof-contracts.json` | `0 error(s), 1 check(s) over 1/8 item(s)` |
| `node tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template --json` | 64 rows, 0 contradicted, 0 template clusters |
| `node tools/citation-fidelity.mjs … --fail-on-missing-quote` | 124 citations, no missing quotes; 2 widening candidates read and dismissed |
| `node tools/risk-report.mjs …` | `0 error(s), 8 item(s) routed` |
| `node tools/gate-liveness.mjs --run … --contracts …batch-6… --checklists …batch-6…` | exit 0; finite-smoke 1, proof-contract 8, coverage 21, precheck 21,284 — all live |
| `node tools/manifest-deps.mjs research/…-batch-6.pages.json` | `8 item(s), 0 error(s)` |
| `node tools/depcheck.mjs --items-file <batch-6 ids>` | OK; page dependency depths 35/36 |
| `node tools/depsource.mjs --items-file <batch-6 ids> --run …` | OK, `0 unresolved` |
| `fwdcheck.mjs`, `extcheck.mjs`, `prosecheck.mjs`, `pathcheck.mjs` | all OK on the batch-6 items and the two pages |
| `node tools/coverage-checklist.mjs …batch-6.coverage.json --require-destination` | `21 harvested, 0 errors, 1 warning` (pre-existing low-yield warning) |
| `node tools/source-fetch-check.mjs --coverage …batch-6.coverage.json` | `2/2 source(s) fetch-verified`, `2/2 resolved` |
| `node tools/item-dependency-levels.mjs check --run …` | one error run-wide, in another batch; none for batch 6 |
| `node tools/validate-plan.mjs research/plan-spec.json --pages-file <batch-6 pages>` | exit 0; only pre-existing `redundant-prereq` warnings; no item cycles, forward refs, B-page deps or undeclared prereqs |
| `node tools/manifest-integrity.mjs --run …` | `64 page(s) owed, 64 in the manifests; no scope drift` |
| `node tools/splice-plan.mjs --run … --verify` | fails run-wide as expected pre-splice (`manifest N vs plan 0 item(s)` for every batch); no `requires` drift and no undeclared-prerequisite drift for this pair |
| `node tools/frontier-dependency-ledger.mjs refresh --run …` | refreshed and deduplicated |
| `node tools/step3-decisions.mjs check --run … --phase final` | 263 work entries, none naming this pair; all eight item receipts current |

Eight item decisions were recorded with `record-item` (non-owner), each with
confidence 1, the examined direct dependency ids and concrete evidence:
`research/frontier-42-coxeter-32-step3b-review-<id>.json` for all eight owned ids.
No `--owner` flag was used and no judge/audit stamp was written.

## Scope and plan refreshes (for Step 4)

- The two carriers of the page prerequisite sets — the batch-6 manifest and
  `research/plan-spec.json` — were updated together for the two `requires`
  additions above, and the library page frontmatter mirrors them.
  `splice-plan --verify` shows no `requires` disagreement for this pair.
- The track design `research/plan-coxeter-groups-track.md` §CG-03 still prints
  the original seven-page `Requires:` line and a B-companion sentence that does
  not mention the Euclidean-geometry prerequisites the hexagon comparison uses;
  the design is a shared plan artifact, so its prose refresh is **reported for
  Step 4**, not edited here.
- Step 4 still owes the ordinary item-list splice for this batch (plan item
  arrays are empty by design until then).
- `research/frontier-42-coxeter-32-batch-6.cross-batch-dependencies.json` remains
  `[]`, and that is current: no owned item declares an in-run cross-batch
  supplier; every non-pair supplier is a published item.

## Added suppliers

None. No new item was created: all eight owned ids are immutable pre-author
scaffold ids, all prerequisites were already published, and no local supplier gap
was found. The only registry addition is the finite-smoke model
`hexagon-a2-cell-triangulation-arithmetic` in `tools/finite-smoke.mjs`, declared
as an obligation by the hexagon example (a verification model, not an item).

## Published concerns

1. **Davis Appendix I.3, Proposition I.3.4(a) as printed is false** (local
   finiteness alone does not give completeness). Confirmed, not suspected: this
   pair's own counterexample
   `cex-cg-shrinking-edge-ray-is-locally-finite-but-not-complete` is a connected
   locally finite gluing of compact convex cells isometric to `[0,2)`, and the
   correct hypothesis is (H3) finitely many shapes (Bridson–Haefliger I.7.11,
   I.7.13, I.7.19). The library's other user of that appendix,
   `thm-cg-finite-rank-davis-moussong-cat-zero-theorem`, consumes clause (b)
   through (H1)–(H3) and is unaffected. Required suppliers: none new; repair
   strategy: keep clause (a) out of the library and record the source defect; no
   published item was found that relies on it.
2. Two `citation-fidelity` widening candidates were read in full and dismissed
   (see the length-lemma and proper-geodesics checkpoints); both are detector
   artifacts, not unfaithful citations.
3. Pre-existing batch warning: `coverage-low-yield` (8/21 harvested results
   scaffolded on the A page) was raised at Step 1 and is unchanged; it needs an
   Alpha confirmation of the declines, not an item repair. No sibling row was
   touched.

## Open obligations and handoff state

- This pair's Step-3 gates are clear at batch scope: precheck, rendering,
  content policy, strict proof contracts, dependency-levels, manifest-deps,
  depsource/depcheck/fwdcheck/extcheck/prosecheck/pathcheck, coverage,
  source-fetch, finite-smoke, boundary-audit, citation-fidelity, risk-report and
  gate-liveness all pass on the current bytes; all eight item receipts and the
  pair's scope decision are current.
- Run-wide gates still fail **only** on other, unfinished pairs of this run
  (`step3-decisions --phase final`: 263 work entries, none for this pair;
  `item-dependency-levels`: one error for
  `ex-cg-reducible-semidefinite-forms-are-factorwise`; `validate-plan --run`:
  undeclared-prereq and item-list notices on sibling pages; `splice-plan --verify`:
  the expected pre-splice item-list drift). None of these names a batch-6 item or
  page.
- The engine's pre-gate recertification pass must run after all writers stop:
  `itemHash` covers the full transitive closure, so a sibling write to any
  published item in this pair's closure invalidates the receipts even though the
  pair's own bytes did not change; re-record before the Step-3b gate if that
  happens.
- Step 5–8 obligations: independent mathematical audit of the eight items; the
  Step-4 plan/prose amendments above; and the out-of-batch consumers of the five
  A interfaces (their manifests name these ids) must reconcile their own uses —
  no A statement changed here, so no direct-consumer repair is opened by this
  batch.
