# Step 3b report — pair `spherical-simplex-metrics-angular-links-and-cones`

Run `frontier-42-coxeter-32` · role alpha-high · design label CG-05 · this dispatch
`step3b-pair-spherical-simplex-metrics-angular-links-and-cones-82b9fbc2c3b60e09`
(the report file was created at entry by the earlier dispatch `…-3e9fb6d971f42b48`).

- A page: `spherical-simplex-metrics-angular-links-and-cones` (order 1732, batch 8, kind A).
- B page: `spherical-simplex-metrics-angular-links-and-cones-examples` (order 1733, batch 8, kind B).
- Owned item count: 7 (4 A + 3 B). All seven are immutable pre-author scaffold ids of
  `research/frontier-42-coxeter-32-batch-8.pages.json`, so each takes an ordinary current item decision.
- Entry state on disk: the seven item files and the A-page body existed as uncommitted drafts written by the
  two interrupted dispatches above (no Step-3b receipt, no page item list, no proofs for four examples);
  this dispatch audited every carrier as authored content, repaired the defects below, authored both library
  pages, and recorded the seven decisions.
- Inputs read: `CLAUDE.md`, `SCHEMA.md`, `briefs/group-author.md`, `briefs/tasks/frontier-dependency-ledger.md`,
  `research/frontier-42-coxeter-32-batch-8.{pages.json,coverage.json,notes.md,cross-batch-dependencies.json}`,
  the seven `step1-<id>.json` records, the Step-3a report and its review receipt
  (`…-step3a-pair-spherical-simplex-metrics-angular-links-and-cones.md`, decision `sufficient` at the current
  scope hash), `…-owner-authoring-direction.md`, `research/plan-coxeter-groups-track.md` §CG-05,
  `research/coxeter-scaffold/{inventory.json,definition-justifications.json}`, both library page scaffolds, the
  current scaffold statements of every in-run supplier (batches 4 and 6) and of the consumer rows in batches
  11/19/22/30. Sources read as full text: Bridson–Haefliger I.5.6–I.5.16 (printed pp. 59–64) and I.7.14–I.7.16
  (printed pp. 102–104) from the cached author-hosted PDF, and Davis Appendix I.2, I.3 (Definition I.3.1,
  Theorem I.3.5 with its proof sketch, printed pp. 505–510) and §7.1 (Definition 7.1.1, Examples 7.1.2–7.1.7).

## Owned items (authoring order: level, then page order, then id)

| # | item | kind | level | decision | receipt |
|---|------|------|-------|----------|---------|
| 1 | `def-cg-spherical-gram-simplex-and-angular-link` | definition | 1 | repaired | `…-step3b-review-def-cg-spherical-gram-simplex-and-angular-link.json` |
| 2 | `ex-cg-link-edge-lengths-versus-dihedral-angles` | example | 3 | repaired | `…-step3b-review-ex-cg-link-edge-lengths-versus-dihedral-angles.json` |
| 3 | `lem-cg-spherical-simplex-existence-and-link-gram-formula` | lemma | 5 | repaired | `…-step3b-review-lem-cg-spherical-simplex-existence-and-link-gram-formula.json` |
| 4 | `def-cg-euclidean-cone-and-spherical-join-metrics` | definition | 6 | accept | `…-step3b-review-def-cg-euclidean-cone-and-spherical-join-metrics.json` |
| 5 | `ex-cg-spherical-simplex-and-vertex-link-schur-complement` | example | 6 | accept | `…-step3b-review-ex-cg-spherical-simplex-and-vertex-link-schur-complement.json` |
| 6 | `thm-cg-cone-join-metric-and-local-product-chart` | theorem | 7 | repaired | `…-step3b-review-thm-cg-cone-join-metric-and-local-product-chart.json` |
| 7 | `ex-cg-disconnected-universal-coxeter-nerve-and-angular-truncation` | example | 8 | repaired | `…-step3b-review-ex-cg-disconnected-universal-coxeter-nerve-and-angular-truncation.json` |

All seven receipts are current at handoff (`itemDecision` = closed for each; the pair contributes no work item
to `step3-decisions check --phase final`). The batch-8 manifest rows and coverage are preserved; the two library
pages are authored (`items`/`examples` lists populated, prose describes every item, companion links, prerequisite
list). No new item was created, so there are no added suppliers and no auditor-created certifications to claim.

## Repairs applied in this dispatch (with the defect each one fixes)

1. **Face link versus point link (all four A items).** `def-cg-spherical-gram-simplex-and-angular-link` had defined
   the angular link of a *face* as the full tangent-cone section `Lk_C(F)=T_FC∩S(V)`. That is the link of a *point*
   of the face (its unit sphere has dimension `dim C − 1`), not the face link: the scaffold contract requires "unit
   normal directions", the batch-8 coverage row cites Davis I.3's `Lk(F,P)=Cone(F,P)∩S(E(F,P))`, the item's own
   combinatorial-link sentence fails for faces of positive dimension under the old reading, and the pair's theorem
   clause (4) (`Lk_X(p) ≅ S^{k−1}*Lk_X(F)`) and the product chart `R^k×C(Lk_X(F))` are false for it. The item now
   defines the direction space `U(F)`, the normal cone `N_FC=T_FC∩U(F)^⊥`, the face link `Lk_C(F)=N_FC∩S(V)` of
   dimension `codim_CF−1`, and the point link `Lk_C(p)=T_FC∩S(V)`, with the join relation between them; the gluing
   paragraph and a new remark separate the two notions. `lem` clause (v) and step 2.3, and `ex-cg-link` [F1], were
   brought to the same convention (the example only uses a vertex, where `U(F)={0}` and the two notions agree, so
   its computations are unchanged). *Consumers to refresh: the batch-30 item `lem-cg-davis-angular-vertex-link-is-metric-flag-nerve`,
   whose `[F6]` still quotes `Lk_C(F)=T_FC∩S(V)`; its substantive uses are vertex links, where the two agree.*
2. **Join triangle inequality (thm clause (3)).** Completed the previously unproved last passage: the join
   function's cone is the pushforward of the square-sum product metric along the bijection `C(L_1)×C(L_2)→C(L_1*L_2)`
   (steps 2.3, 3.1), hence a metric; its triangle inequality at the cone points of radii `1,s,1` with
   `s_*=sin(A+B)/(sin A+sin B)` gives `√(2−2cos C) ≤ 2sin((A+B)/2)`, so `C ≤ A+B`; the `sin A+sin B=0` cases are
   discharged separately. (BH I.5.15 says the join metric is "implicit" in the product-cone isometry; Davis Lemma
   I.2.18 leaves it as an exercise.)
3. **Local product chart (thm clause (4), step 7.1).** Rewritten so no claim rests on an unstated argument: the
   localisation "every cell meeting `B(p,ε_0)` contains `p`" is proved from the closedness of the union of the cells
   not containing `F` (its trace on each cell is a finite union of closed faces; `p` is in no such cell); the tangent
   cone splits as `T_pC_r=U⊕N_r` with `N_r=T_FC_r∩U^⊥=N_FC_r`; the radial chart is defined, shown well defined by
   the cocycle condition, with a two-sided inverse; and the two metric inequalities are proved by straight development
   of a link chain (`d_X≤d_C`) and by radial projection with the chord bound, including the total-angle `≥π` case
   (`d_C≤d_X`). Clause (4)'s statement now defines `Lk_X(p)` (unit directions of `T_pX`) explicitly, and step 4.2's
   inverse notation `Φ^{-1}` was corrected.
4. **Truncation-forcing argument (ex-cg-disconnected, step 6.1).** `θ=0` is now excluded by separation, and for
   `θ∈(0,π)` the openness of the rays in the hypothetical distance is proved (a point of another branch is at
   distance `≥t_0 sin θ` from `(t_0,x)`), so step 4.1's connectedness argument applies verbatim.
5. **Retained earlier repairs (previous dispatch, verified here).** `lem` clause (ii): the false `3·chord` bound is
   the true `π/2·chord` bound with a mean-value/monotonicity proof of `sin u ≥ 2u/π` on `[0,π/2]`, and the
   "bounded derivatives" claim is an explicit-Lipschitz statement; `lem` step 7.1 uses a weak-topology quotient
   argument; constants `6/m₀` are `π/m₀`.

## Per-item checkpoint log

**1. `def-cg-spherical-gram-simplex-and-angular-link` (level 1, repaired).**
Claim/conventions: Cholesky realisation of a positive-definite Gram matrix with diagonal 1; `K(C)`, `Σ(C)`;
tangent cone `T_FC` from inward facet normals, equivalently `closure{λ(x−p)}`; normal cone and face link; point
link; angular distance `arccos⟨·,·⟩`; gluing identification of cell links, componentwise intrinsic metric
(pointer to `def-cg-euclidean-cone…`(1)); combinatorial link imported. Sources: BH I.5.6–5.10 (cone), I.7.14–7.16
(links at points); Davis I.3 (`Lk(F,P)=Cone(F,P)∩S(E(F,P))`) — read in full. Dependencies (11): the two Cholesky
items, inner-product/norm/sphere items, inverse-cosine, metric-space, finite-convex-cell, gluing, combinatorial-link
items; all resolve. Gap repaired: the link definition (see Repairs 1). Checks: precheck n/a, rendercheck OK,
proof-layout 0 defects, manifest-deps 0 errors, depsource 0 unresolved, proof-contract `--strict` 0 errors,
boundary-audit 0 contradicted/0 templates (the two `iff` rows are upheld with reasons naming the id-token false
positive), citation-fidelity all quotes found. Open obligation: none mathematical; the manifest statement still
carries the old full-link formula (Plan amendment A below).

**2. `ex-cg-link-edge-lengths-versus-dihedral-angles` (level 3, repaired).**
Claim: interior angle `π−π/m` of the regular `2m`-gon equals the vertex-link edge length; the inward edge normals
are at distance `π/m`; the canonical rank-two form of type `I_2(m)` has `B(e_s,e_t)=−cos(π/m)`, mirror angle `π/m`,
and `r_sr_t` a rotation of order `m` through `2π/m`; link Gram matrix with off-diagonal `−cos(π/m)`; the two angles
are complementary and distinct for `m≥3`. Every computation was redone independently (centre triangles, double-angle
identity, ratio `|B(v_s,v_t)|/(|v_s||v_t|)=c`, determinant/trace/order of `r_sr_t`, positive definiteness of the
`2×2` block). Sources: BH I.5 (angular distance), Davis §6.12 (Gram matrices of spherical simplices). Dependencies
(14) include the batch-4 items `def-cg-real-coxeter-form-and-reflection`, `lem-cg-reflection-form-invariance-and-rank-two-orders`
(both read in current form; uses match; see the ledger note for their receipt currency). Gap repaired: `[F1]` now
quotes the corrected normal-link definition. Checks: precheck pass, rendercheck OK, proof-layout 0 defects,
depcheck/pathcheck clean, proof-contract `--strict` 0 errors, boundary-audit 0/0, citation-fidelity all quotes found,
depsource 0 unresolved.

**3. `lem-cg-spherical-simplex-existence-and-link-gram-formula` (level 5, repaired).**
Claims (i)–(vi): Cholesky existence/uniqueness; hemisphere functional, unique radial coordinates, explicit
two-sided Lipschitz estimates and the `chord ≤ round ≤ (π/2)chord` comparison; finite spherical complexes with
bi-Lipschitz descent to the Euclidean gluing, compactness/properness/completeness/length topology and minimizing
geodesics per component under AC; Schur-complement vertex/face links with positivity and order independence;
angular links of Euclidean faces with the intrinsic-metric and tangent-cone statements (now for the normal link);
the `+∞` convention. Sources: BH I.5.6–5.10, I.7.14–7.16; Davis I.2, I.3 — read in full. Dependencies (37) include
the five batch-6 suppliers, all now authored with current accept receipts. Gaps repaired: clause (v) and step 2.3
to the normal link; retained earlier repairs listed above. Checks: precheck pass, rendercheck OK, proof-layout
0 defects, proof-contract `--strict` 0 errors, boundary-audit 0/0, citation-fidelity all quotes found, depsource
0 unresolved; one deliberate depcheck warning (same-page citation that cannot be declared without a two-cycle).
AC is declared and consumed exactly in step 8.1's proper-target Ascoli application.

**4. `def-cg-euclidean-cone-and-spherical-join-metrics` (level 6, accept).**
Claims (1)–(5): the auxiliary extended path metric with `+∞` across components; the truncated metric
`d_π=min{π,d_path}`; the Euclidean cone `C(L)={o}⊔(0,∞)×L` with the apex and the cosine formula, `C(∅)={o}`,
through-apex value `r+s` at angle `π`; the `D_π`-geodesic convention; the join as a quotient with the cosine formula
and the empty conventions. Assertions are constructions/conventions only; all metric, geodesic and associativity
claims are deferred to the justifier. Sources: BH I.5.6–5.7, I.5.13–5.14, Davis I.2 (truncated angle) — read.
Dependencies (10) resolve. Checks: precheck n/a, rendercheck OK, proof-layout 0 defects, content-policy 0 errors,
proof-contract `--strict` 0 errors, boundary-audit 0/0, citation-fidelity all quotes found.

**5. `ex-cg-spherical-simplex-and-vertex-link-schur-complement` (level 6, accept).**
Claims (i)–(iv): positivity of the `4×4` matrix with off-diagonal `½` by `(1−c)|x|²+c(Σx_i)²`; the Cholesky
realisation; `φ` as the pairing with `w=⅖(u_0+u_1+u_2+u_3)`; the vertex-link Schur complement with off-diagonal
`⅓` and positive quadratic form; the iterated two-step Schur value `¼` matching the orthogonal-projection
computation. All values recomputed. Dependencies (9) resolve; the Schur clauses of item 3 checked against its
current statement. Checks: precheck pass, rendercheck OK, proof-layout 0 defects, proof-contract `--strict`
0 errors, boundary-audit 0/0, citation-fidelity all quotes found, depsource 0 unresolved.

**6. `thm-cg-cone-join-metric-and-local-product-chart` (level 7, repaired).**
Claims (1)–(4): truncation agreement and perimeter-`<2π` triples; the cone metric with geodesics (apex path,
sector development, ball containment, `D_π`-geodesic ⇒ geodesic space); the join metric with the product-cone
isometry `C(L_1)×C(L_2)≅C(L_1*L_2)`, associativity, face metrics and `S^{m-1}*S^{n-1}≅S^{m+n-1}`; the local product
chart `Lk_X(p)≅S^{k-1}*Lk_X(F)`, `B(p,ε)≅R^k×C(Lk_X(F))` preserving intrinsic lengths. Sources: BH I.5.6–5.16,
I.7.14–7.16; Davis I.2 (I.2.17–I.2.19) and I.3.5 — read in full. Dependencies (18) include the batch-6 suppliers
(currently accepted) and the two same-page definitions. Gaps repaired: join triangle inequality, clause (4)/step
7.1, step 4.2 notation (see Repairs 1–3). Checks: precheck pass (cases), rendercheck OK, proof-layout 0 defects,
proof-contract `--strict` 0 errors, boundary-audit 0/0, citation-fidelity all quotes found.

**7. `ex-cg-disconnected-universal-coxeter-nerve-and-angular-truncation` (level 8, repaired).**
Claims (i)–(iv): the universal-Coxeter nerve as `n` isolated points; `d_path=+∞` off the diagonal and `d_π=π`;
the cone as the metric star with branch distance `r+s`; vacuous `D_π`-geodesic hypothesis and through-apex
geodesics; the truncation value forced. Sources: BH I.5.7 (through-apex identity), I.5.10 (geodesic
characterisation), I.7.15 (`+∞` between components); Davis I.2 (truncation) and §7.1 (Definition 7.1.1,
Examples 7.1.2–7.1.7) — read. Dependencies (11) resolve. Gap repaired: step 6.1 (see Repair 4). Checks: precheck
pass, rendercheck OK, proof-layout 0 defects, proof-contract `--strict` 0 errors, boundary-audit 0/0,
citation-fidelity all quotes found, depsource 0 unresolved.

## Plan/prose amendments for Step 4 (pre-splice manifest mismatches, not hidden)

The batch-8 manifest statements are frozen under the Step-3a scope receipt (the scope hash covers them); the
authored item texts are more precise in six places. Editing the manifest would invalidate the recorded `sufficient`
scope decision, so the differences are reported here for Step 4 to splice (`splice-plan --update`) and are not
edited by this dispatch:

1. `def-cg-spherical-gram-simplex-and-angular-link`: manifest shows `Lk_C(F)=T_FC∩S(V)`; the item now defines
   `U(F)`, `N_FC=T_FC∩U(F)^⊥` and `Lk_C(F)=N_FC∩S(V)` (plus the point link). **This one is a required correction,
   not an editorial sync** — the old formula contradicts the pair's theorem clause (4) and the scaffold contract.
2. `ex-cg-link-edge-lengths-versus-dihedral-angles`: manifest "a regular `2m`-gon … regarded as a compact convex
   polyhedral cell"; item fixes centre, circumradius 1 and the labelled vertices.
3. `lem-cg-spherical-simplex-existence-and-link-gram-formula`: manifest still says "(bounded derivatives away from
   0 and from the hemisphere boundary)" and omits the `π/2·chord` bound; the item states the explicit Lipschitz
   estimates and the round/chord comparison.
4. `ex-cg-spherical-simplex-and-vertex-link-schur-complement`: manifest "`φ(x)=⅖(x_1+⋯+x_4)`"; item identifies the
   functional as the pairing with `w=⅖(u_0+⋯+u_3)` (the ambient-coordinate reading of the manifest is wrong for
   Cholesky rows).
5. `thm-cg-cone-join-metric-and-local-product-chart`: manifest prints `D_π` outside math and omits the inline
   definition of `Lk_X(p)`; the item defines `Lk_X(p)` as the unit directions of `T_pX` and uses `$D_\pi$`.
6. `ex-cg-disconnected-universal-coxeter-nerve-and-angular-truncation`: manifest "`L` a set of `n` points"; item
   states `L={x_1,…,x_n}` as the finite spherical complex of `n` one-point cells, which is what the computations use.

## Sibling and run-state alerts (not edited here — routed to their owners)

- **`items/thm-cg-compact-local-cat-one-short-circle-criterion.md` (batch 11, pair
  `cat-comparison-link-criteria-and-local-globalization`) — invalid YAML frontmatter, now repaired by its owner.**
  During this dispatch two `locator:` scalars carried bare LaTeX escapes inside double-quoted YAML (`\l`, `\k` in
  `$\le\kappa$`; file lines 20 and 23 of the bytes seen at 21:44); the engine's strict YAML reader rejects `\l`,
  which put the recorded blocker "3b-author: plan() threw — Invalid escape sequence \l at line 19, column 84" into
  the run status and would break any strict-parse tool touching that file. A scan of the frontmatter of all 303
  items referenced by the run's manifests found this one file only (the `\u` escapes elsewhere are valid Unicode
  escapes). The owning pair rewrote the file at 21:50:55 local: the escapes are now doubled (`\\le\\kappa`),
  `rendercheck` passes on it, an independent strict `yaml` parse of its frontmatter passes, the ledger tool's
  `collect` phase parses all 32 batch inputs, and a run-wide `extcheck` passes (26 210 items, 0 findings).
  Remaining ledger gap at handoff: 47 of the 1 334 declared edges still have no batch review input (pairs in
  flight), which is the serial reconciler's call.
- **Batch-4 receipts are currently stale:** `def-cg-real-coxeter-form-and-reflection` and
  `lem-cg-reflection-form-invariance-and-rank-two-orders` carried accept receipts (2026-10-07 09:10Z) that were
  invalidated by HH-1/HH-11 edits inside their own closure (`thm-hh-parabolic-minimal-representatives-and-length-additivity`,
  `thm-hh-matsumoto-reduced-word-theorem`, `thm-hh-coxeter-exchange-deletion-and-faithfulness`,
  `lem-hh-dihedral-root-recurrence-and-root-sign`, 2026-10-07 10:23Z). The supplier item files themselves were
  not edited; their statements were read against this pair's uses and match. The batch-4 pair must re-record;
  this pair's receipts hash the current supplier bytes and will re-audit automatically if those bytes change.
- **Batch-30 consumer `lem-cg-davis-angular-vertex-link-is-metric-flag-nerve`, `[F6]`:** quotes the old
  `Lk_C(F)=T_FC∩S(V)`. Its uses are vertex links (`Lk(x_T,C_T)`), where the normal and point links agree, so no
  mathematical use breaks; the fact line should be refreshed to the new normal-link formula during that pair's
  authoring.
- **Run-wide gates at handoff (all outside this pair):** `item-dependency-levels` fails only on
  `ex-cg-reducible-semidefinite-forms-are-factorwise` (15 vs 16, batch 27); `depcheck`/`fwdcheck` fail only on
  sibling items (`lem-cg-bowditch-quantitative-short-loop-control` unplanned links, B-leaf content rows);
  merged `proof-contract --strict` reports 55 errors on 26 sibling items, none on batch 8. No batch-8 item
  appears in any of them.

## Checks actually run (with results)

| Check | Command (all from the repo root) | Result |
|---|---|---|
| precheck | `node tools/tsx-run.mjs tools/precheck.mts <7 item paths>` | 5 proof items PASS, 0 failing |
| proof layout | `node tools/proof-layout.mjs <7 item paths>` | 7 items, 53 steps, 0 defects |
| rendering | `node tools/rendercheck.mjs <7 items + 2 library pages>` | 9 files, OK |
| content policy | `node tools/content-policy.mjs research/frontier-42-coxeter-32-batch-8.pages.json` | 7 scoped items, 0 errors, 0 warnings |
| manifest deps | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-8.pages.json` | 7 items, 0 errors |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | no finding on any batch-8 item |
| proof contracts | `node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-8.proof-contracts.json --strict` | 0 errors, 0 warnings, 7/7 |
| boundary audit | `node tools/boundary-audit.mjs <batch-8 contracts> --fail-on-contradicted --fail-on-template` | exit 0; 0 contradicted, 0 templates, 2 upheld with reasons |
| citation fidelity | `node tools/citation-fidelity.mjs <batch-8 contracts> --fail-on-missing-quote` | 81 quotes, none missing, no widening candidates |
| finite smoke | `node tools/finite-smoke.mjs <batch-8 contracts>` | 0 errors (no finite-smoke obligations in this pair) |
| risk report | `node tools/risk-report.mjs <batch-8 contracts>` | 0 errors; all 7 items routed for later risk review |
| gate liveness | `node tools/gate-liveness.mjs --run … --contracts <merged run contracts> --checklists <all batch coverages> --min-checks 1` | exit 0, all four gates live |
| merged contracts | `node tools/merge-proof-contracts.mjs --level frontier-42-coxeter-32 <merged> <batch contracts>`; `proof-contract … --strict` | merged 162 items; 55 errors, all on sibling items, 0 on batch 8 |
| depcheck (scoped) | `node tools/depcheck.mjs --items-file <7 ids>` | OK; 1 deliberate warning (item 3) |
| fwdcheck (scoped) | `node tools/frontier-item-gate.mjs --run … --tool fwdcheck -- --quiet` | no finding on any batch-8 item |
| extcheck (scoped) | `node tools/extcheck.mjs --items-file <7 ids>` | 7 items, OK |
| depsource (scoped) | `node tools/depsource.mjs --run … --items-file <7 ids>` | 89 deps, 0 unresolved, 0 planned-later |
| prosecheck | `node tools/prosecheck.mjs --items-file <7 ids>` | 0 errors, 0 warnings |
| pathcheck | `node tools/pathcheck.mjs` | 0 errors on the two owned pages |
| coverage | `node tools/coverage-checklist.mjs research/…-batch-8.coverage.json --require-destination` | 0 errors, 1 advisory `coverage-low-yield` (6/21, unchanged from 3a) |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0 |
| manifest integrity | `node tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | 64 pages owed/in manifests, no scope drift |
| source fetching | `node tools/source-fetch-check.mjs --coverage research/…-batch-8.coverage.json` | 2/2 sources fetch-verified |
| item decisions | `node tools/tsx-run.mjs tools/step3-decisions.mjs check --run … --phase final` | the pair contributes 0 work items; all 7 receipts current |

Not run by this dispatch (outside the Step-3b gate list): `splice-plan --verify` (Step 4 owns the splice; it
currently reports the expected pre-splice "manifest n vs plan 0 items" for every unspliced pair, batch 8 included).

## Cross-batch dependency input and ledger

`research/frontier-42-coxeter-32-batch-8.cross-batch-dependencies.json` was updated in place (13 rows, atomic
replace): 9 rows `verified` (both page rows into the completed batch-6 pair and all seven batch-6 item uses, whose
supplier receipts are current), 3 rows `open` with exact evidence (the `real-forms-and-reflection-geometry` page
row and the two batch-4 item rows, kept open because of the stale-receipt caveat above; the supplier files were
read and match), and the 1 pre-existing `removed` row preserved. While the batch-11 YAML defect was live, the
run's `plan()` was blocked by it and `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32`
could not be run by this dispatch; both defects are now off the critical path (see the resolution note above).
At handoff the tool's read-only `collect` phase parses all 32 batch inputs and reports 1 334 edges with 47 still
awaiting a batch review input, so the `--require-reviewed` refresh remains for the serial reconciler once the
in-flight pairs land. The batch-8 input file itself was validated to the ledger's row schema.

## Open obligations at handoff

1. Step 4: splice the six manifest statement amendments (Plan amendments 1–6), in particular the required link
   formula of item 1; the item texts are the authoritative statements.
2. ~~Batch 11: fix the YAML escapes in `items/thm-cg-compact-local-cat-one-short-circle-criterion.md`~~ **fixed by
   the owning pair at 21:50:55 local** (strict YAML parse and `rendercheck` both pass at handoff). The serial
   reconciler should still re-run `frontier-dependency-ledger refresh` once the remaining in-flight pair inputs
   land (47 of 1 334 declared edges unreviewed at handoff); this pair's input is already updated.
3. Batch 4: re-record the two `real-forms-and-reflection-geometry` supplier receipts invalidated by the HH edits.
4. Batch 30: refresh `lem-cg-davis-angular-vertex-link-is-metric-flag-nerve` `[F6]` to the normal-link formula.
5. No mathematical obligation of this pair is held or escalated: every supplier used is authored and its use is
   reconciled against the current supplier text, and all seven decisions are `accept`/`repaired` at confidence 1.
