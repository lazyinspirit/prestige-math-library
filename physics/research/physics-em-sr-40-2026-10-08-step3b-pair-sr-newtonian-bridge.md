# Step 3b pair report — `sr-newtonian-bridge` / `sr-newtonian-bridge-examples`

- Run: `physics-em-sr-40-2026-10-08`; batch 11; role alpha-high; label
  `step3b-pair-sr-newtonian-bridge-7a7b9a6a44a582ee` (completing re-dispatch of
  `…-5103ae0c3c6aec03`); 2026-10-09.
- A page `sr-newtonian-bridge` (order 229, category `special-relativity`,
  `library: physics`, 7 items); B page `sr-newtonian-bridge-examples`
  (order 230, 3 leaf items).
- Status: **complete**. All ten items are authored, both pages are written, the
  batch-11 proof-contract file is strict-clean, the one hard gate defect found
  in this dispatch's re-audit (an undeclared forward reference) is repaired, the
  affected decisions are re-recorded, and all ten item decisions are current.

## Owned IDs and decisions (order: dependency level, then page order, then ID)

| # | Level | Item | Kind / domain | Decision |
|---|---|---|---|---|
| 1 | 0 | `lem-sr-uniform-low-speed-taylor-remainder` | lemma / mathematics | repaired (carried repair: display close; re-verified current) |
| 2 | 6 | `def-sr-newtonian-comparison-quantities` | definition / physics | accept |
| 3 | 7 | `def-sr-galilean-limiting-charts` | definition / mathematics | accept |
| 4 | 8 | `lem-sr-uniform-galilean-limit-of-boost-charts` | lemma / mathematics | **repaired (this dispatch: `forward_refs` declaration)** |
| 5 | 9 | `ex-sr-uniform-galilean-chart-bound-worked` | example / mathematics | accept (re-recorded after closure change) |
| 6 | 14 | `lem-sr-uniform-low-speed-expansion-of-observer-quantities` | lemma / mathematics | accept |
| 7 | 14 | `cex-sr-uniform-low-speed-remainder-fails-near-light-speed` | counterexample / mathematics | accept |
| 8 | 16 | `pthm-sr-newtonian-p-e-correspondence` | physics-theorem / physics | repaired (carried repair: worldline `Given` + dep; re-verified current) |
| 9 | 17 | `rem-sr-newtonian-bridge-limits-and-failures` | remark / physics | accept (re-recorded after closure change) |
| 10 | 17 | `ex-sr-low-speed-expansion-at-beta-one-fifth` | example / physics | accept |

Decision receipts (confidence 1, examined-dependency arrays recorded, no owner
receipt and no judge/audit stamp): `research/physics-em-sr-40-2026-10-08-step3b-review-<id>.json`
for each of the ten IDs above. The receipts for items 4, 5 and 9 were written by
this dispatch at 07:54Z against the post-repair bytes; the other seven were
verified current (hashes match the live closure) at the same time. All ten read
`closed` under `step3-decisions.mjs check --run physics-em-sr-40-2026-10-08 --phase final`.

Artifacts: `items/<id>.md` for the ten IDs; `library/special-relativity/sr-newtonian-bridge.md`
and `…-examples.md`; `research/physics-em-sr-40-2026-10-08-batch-11.proof-contracts.json`;
this report.

## Entry state and this dispatch's actions (re-dispatch)

The earlier dispatch of the same pair was ended unsuccessfully by the controller
at 07:40Z after its products were written (carriers 17:50–18:35 local, report
18:37 local). This dispatch did not inherit its conclusions:

- read all ten carriers in full from the current bytes and re-derived every
  displayed computation: the Taylor remainder chain and its `η`-threshold
  (`f(0)=1`, `|R|≤K(z0)z²`, `K(z0)=(3/8)(1−z0)^{−5/2}`, the `z0=0` boundary); the
  four clauses of the Galilean limit lemma including the step-3.2 threshold
  arithmetic and the two unboundedness witnesses; every ten-place decimal and
  both exact ratios in `ex-sr-uniform-galilean-chart-bound-worked` (recomputed
  independently at 60-digit precision, all agree); the counterexample family
  `w_N=c√(1−N^{−2})e`, its exact difference and relative deviation; the observer
  expansion with its common remainder `R_E` and momentum remainder `R_q`; the
  correspondence theorem clauses (a)–(e); and the remark's three scope clauses;
- read the named supplier carriers for the used clauses: `def-sr-affine-minkowski-model`,
  `def-inertial-frame-and-inertial-chart`,
  `def-spatial-euclidean-structure-of-an-inertial-frame`,
  `def-sr-si-units-and-coordinate-conventions`, `def-lorentz-boost`,
  `thm-sr-proper-time-and-observer-decomposition` (c),(d),(e),
  `lem-sr-energy-momentum-observer-identities` (a),(b),
  `def-sr-observed-energy-momentum-and-kinetic-energy`,
  `lem-sr-four-momentum-in-inertial-frame` (b),
  `post-sr-massive-particle-dynamics` (i),(ii),
  `post-sr-ideal-massless-particle-momentum` (i),(ii),
  `def-sr-regular-causal-curve-and-worldline`, `def-lorentz-form-and-inertia`,
  `def-causal-classification-of-lorentz-vectors`, and the published imports
  `cor-taylor-remainder-bound`, `thm-real-power-continuity-and-derivatives`,
  `thm-real-power-agrees-with-rational-exponent`, `def-rational-power`,
  `thm-chain-rule`, `thm-algebra-of-derivatives`, `lem-derivative-of-a-power`,
  `lem-rational-power-monotone`, `lem-rational-power-laws`,
  `lem-of-inverse-positive`, `def-abs-value`, `lem-of-abs-value`,
  `thm-cauchy-schwarz-finite`, `lem-of-triangle-inequality`,
  `cor-triangle-inequality-for-inner-product-norm`, `thm-of-square-roots`,
  `def-vector-valued-derivative-and-integral`, `def-interval`,
  `def-integer-power`, `def-linear-map`, `thm-of-archimedean`;
- re-ran the full mechanical battery (below) on the current bytes; every named
  in-run supplier of the prerequisite pair `sr-energy-momentum` and of batches
  1, 2 and 3 is an authored carrier, so no supplier obligation remains open and
  no decision is escalated.

## Repairs made

1. **This dispatch — undeclared forward reference (hard gate defect).**
   `lem-sr-uniform-galilean-limit-of-boost-charts` linked from its Remarks to
   `ex-sr-uniform-galilean-chart-bound-worked` (a strictly later page, 230)
   without a `forward_refs` declaration; `fwdcheck` reported the hard error
   `[forward-undeclared]`. The link occurs only in `## Remarks` and carries no
   logical weight (the item would stand unchanged without it), so the correct
   repair is the declaration, not removal: `forward_refs: [ex-sr-uniform-galilean-chart-bound-worked]`
   was added to the frontmatter. It is not in `deps` or `justified_by`; the
   page-level edge it induces (230 → 229) points the same way as the existing
   B-requires-A edge and creates no cycle; `fwdcheck` scoped to the ten items
   now reports OK, and the renderer will mark the pointer as a forward
   reference. Decision: **repaired**.
   Because this changed the item's content hash and the transitive closure of
   its consumers, the decision receipts for the lemma, for
   `ex-sr-uniform-galilean-chart-bound-worked` and for
   `rem-sr-newtonian-bridge-limits-and-failures` were re-recorded with fresh
   evidence; the other seven receipts were verified still current.
2. **Carried repairs (earlier dispatch, re-verified in this audit).**
   (i) `lem-sr-uniform-low-speed-taylor-remainder` step 6.1 had a malformed
   display close (`.$` for `.$$`); corrected, and its statement's final clause
   restored to the manifest wording naming the consumer
   `lem-sr-uniform-galilean-limit-of-boost-charts`. (ii) The batch-11 contract
   boundary rows for the `zero` and `one` cases of
   `ex-sr-uniform-galilean-chart-bound-worked` had been copied from the
   `|w|=c/5` example; replaced with this item's actual data (denominators
   `C²−1`, `√99`, `√899`, `√9999`, `z1=1/900`, `1200`, `300`; endpoint
   `C=|v|=1` excluded). (iii) `pthm-sr-newtonian-p-e-correspondence`'s `Given`
   line now identifies the worldline as C¹ with future timelike tangent and
   declares `def-sr-regular-causal-curve-and-worldline`
   (mathematical-premise), with the matching cross-batch row and a ledger
   refresh. All three are present in the current bytes and were re-checked.

## Per-item checkpoints

1. `lem-sr-uniform-low-speed-taylor-remainder` (level 0). Claim: for
   `z0∈[0,1)`, `f(z)=(1−z)^{−1/2}` is twice differentiable on `(−∞,1)` with
   `f″=¾(1−z)^{−5/2}`, bounded by `¾(1−z0)^{−5/2}` on `[0,z0]`, and
   `f(z)=1+z/2+R(z)` with `|R(z)|≤K(z0)z²`, `K(z0)=⅜(1−z0)^{−5/2}`, plus the
   explicit η-threshold. Uses `cor-taylor-remainder-bound` (n=1 instance) and
   the power/derivative/order suppliers. Checks: precheck PASS; rendercheck OK;
   proof-layout 8 steps, 0 defects; content-policy 0; strict proof-contract 0.
2. `def-sr-newtonian-comparison-quantities` (6). Definition of `N_p(m,w)=mw`,
   `N_K(m,w)=½m|w|²` and the chart coordinate velocity, with no approximation
   or correspondence asserted. Well-definedness re-checked (total on the
   frame's `S`; derivative only where it exists; unique expansion in
   `(e1,e2,e3)`). Checks: precheck n/a PASS; rendercheck OK; proof-layout
   0 steps; content-policy 0; contract 0.
3. `def-sr-galilean-limiting-charts` (7). Definition of `Φ_{v,C}` on `R×S`
   for `C>|v|`, `G_v`, `D_{T,R}`, and the `C=c` substitution identity against
   `def-lorentz-boost` (re-verified symbolically). Checks: precheck n/a PASS;
   rendercheck OK; proof-layout 0 steps; content-policy 0; contract 0.
4. `lem-sr-uniform-galilean-limit-of-boost-charts` (8). Clauses (a) exact
   differences, (b) bounds on `D_{T,R}`, (c) `O(C^{−2})` constants and the
   explicit ε-threshold, (d) failure of both suprema on `R×S`. Re-derived;
   threshold arithmetic of step 3.2 re-checked (all four inequalities and
   `C_ε>|v|`). Repaired this dispatch as in Repairs 1. Checks: precheck PASS;
   rendercheck OK; proof-layout 12 steps, 0 defects; content-policy 0; contract
   0; fwdcheck OK after repair.
5. `ex-sr-uniform-galilean-chart-bound-worked` (9). Worked instance
   `v=e1`, `T=1`, `R=2`, at `(1,2e1)` for `C=10,30,100` with the tolerance
   threshold. All ten-place decimals recomputed at 60-digit precision and
   matching (`γ10=1.0050378153`, `d_t(10)=0.0150629410≤0.0251385716`,
   `d_x(10)=0.0050378153≤0.0151134458`, `γ100=1.0000500038`,
   `d_t(100)=0.0001500063≤0.0002500138`, `d_x(100)=0.0000500038≤0.0001500113`,
   exact ratios 100.4154227043 and 100.7487483984, `z1=1/900` admissible,
   `C_ε=30`, and at `C=30` `d_t=0.0016674389`, `d_x=0.0005560189`,
   `B_t=0.0027794768`, `B_x=0.0016680568`). Contract boundary repair as in
   Repairs 2; decision re-recorded after the closure change. Checks: precheck
   PASS; rendercheck OK; proof-layout 6 steps, 0 defects; content-policy 0;
   contract 0.
6. `lem-sr-uniform-low-speed-expansion-of-observer-quantities` (14). Uniform
   transport of the Taylor remainder: `E_n=mc²+½m|w|²+R_E`,
   `T_n=½m|w|²+R_E`, `q_n=mw+R_q` with the displayed bounds and the `z=0`
   case. Clause uses of theorem (c),(d) and lemma (b) reconciled against the
   authored carriers. Checks: precheck PASS; rendercheck OK; proof-layout
   8 steps, 0 defects; content-policy 0; contract 0.
7. `cex-sr-uniform-low-speed-remainder-fails-near-light-speed` (14).
   Refutation of any speed-independent `B` by the family with `γ=N`; exact
   difference `mc²(N−3/2+1/(2N²))` and relative deviation
   `(N−1)(2N+1)/(N+1)≥N−1`; the Archimedean choice of `N` closes both claims.
   Re-derived; supplier uses read. Checks: precheck PASS; rendercheck OK;
   proof-layout 7 steps, 0 defects; content-policy 0; contract 0.
8. `pthm-sr-newtonian-p-e-correspondence` (16). The conditional correspondence
   (a)–(e) with `z0`-dependent constants and the scope clause; conditional on
   the adopted postulate's clauses (i) and (ii) (read against the carrier).
   Carried worldline repair as in Repairs 2(iii). Checks: precheck PASS;
   rendercheck OK; proof-layout 10 steps, 0 defects; content-policy 0;
   contract 0; depcheck no hard errors.
9. `rem-sr-newtonian-bridge-limits-and-failures` (17). Three scope clauses:
   (i) no speed-independent error constant (family with `γ→∞`, Archimedean
   enforcement), (ii) the ideal massless case excluded rather than a limit
   (postulate (i)/(ii): `E_n=c|q_n|>0`, no four-velocity, proper time, rest
   mass or kinetic energy), (iii) bounded chart regions, not a framework
   limit. Nonproof item; decision re-recorded after the closure change.
   Checks: precheck n/a PASS; rendercheck OK; proof-layout 0 steps;
   content-policy 0; contract 0.
10. `ex-sr-low-speed-expansion-at-beta-one-fifth` (17). Worked instance at
    `|w|=c/5`: `γ_w=5√6/12≈1.0206207262`, `K(z0)≈0.4152916366`, and every
    displayed deviation and bound recomputed at 60-digit precision and
    matching (rate `0.0006207262≤0.0006644666`; energy/kinetic deviation and
    bound; momentum `0.0041241452≤0.0041328933`; inversion
    `0.0206207262≤0.0206644666`). Checks: precheck PASS; rendercheck OK;
    proof-layout 6 steps, 0 defects; content-policy 0; contract 0.

## Checks actually run (this dispatch; commands and results)

- `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08`
  → 473 items / 80 pages, no errors, maximum level 24; all ten declared levels
  verified against the actual dependency graph (unchanged by the repair).
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts <10 explicit item paths>`
  → 7 proof-bearing items PASS, 0 failing (the three nonproof items are
  excluded by kind); re-run on the repaired lemma → PASS.
- `node tools/physics-support/rendercheck.mjs <10 items + 2 pages>` → OK for
  all 12 files; re-run on the repaired lemma and the A page → OK.
- `node tools/physics-support/proof-layout.mjs <10 explicit item paths>`
  (one batched command after the final edits) → 10 items, 57 steps, 0 defects;
  re-run on the repaired lemma → 1 item, 12 steps, 0 defects.
- `node tools/physics-support/content-policy.mjs research/physics-em-sr-40-2026-10-08-batch-11.pages.json`
  → 10 scoped items, 0 errors, 0 warnings (before and after the repair).
- `node tools/physics-support/proof-contract.mjs research/physics-em-sr-40-2026-10-08-batch-11.proof-contracts.json --strict`
  → 10/10 items, 0 errors, 0 warnings.
- `node tools/physics-support/depcheck.mjs --items-file <batch-11 ids>` → no
  hard errors; 3 advisory `cited-not-in-deps` warnings, reviewed below.
- `node tools/physics-support/fwdcheck.mjs --items-file <batch-11 ids>` →
  **before the repair**: 1 hard error, `[forward-undeclared]` on
  `lem-sr-uniform-galilean-limit-of-boost-charts`; **after the repair**: OK,
  no cycle, with the forward-dependent marker propagating from the item's
  supplier closure (not from this pair's own edges).
- `node tools/physics-support/extcheck.mjs --items-file <batch-11 ids>` → OK
  (no recorded-not-proved items, no consequence resting on one).
- `node tools/physics-support/validate-plan.mjs research/plan-spec.json --pages-file research/physics-em-sr-40-2026-10-08-frontier-gate-pages.json --run physics-em-sr-40-2026-10-08`
  → **no finding for `sr-newtonian-bridge` or `…-examples`** (rows 229/230
  read correctly; the added dependency edge lies inside the declared
  `requires` closure via `sr-energy-momentum → sr-observer-measurements →
  sr-worldlines-and-clocks`). The run-level command exits 1 on 38
  `[undeclared-prereq]` errors owned by other batches (pages:
  `em-elementary-mathematical-prerequisites` 12,
  `em-expanded-analysis-prerequisites` 7, `sr-spacetime-primitives` 5,
  `em-boundary-and-spectral-prerequisites` 2, `em-material-response` 2,
  `em-experiment-analysis-prerequisites` 2, and one each on
  `sr-spacetime-primitives-examples`, `sr-lorentz-transformations`,
  `em-material-response-examples`,
  `em-elementary-mathematical-prerequisites-examples`,
  `em-variational-mathematical-prerequisites`,
  `em-variational-mathematical-prerequisites-examples`,
  `em-maxwell-integral-and-constraints`, `em-experiment-analysis-prerequisites-examples`,
  `sr-forces-and-continuum`) plus the run's `redundant-prereq` warnings. These
  are pre-splice Step-4 plan mismatches for their owning groups, not batch-11
  dependencies; none is caused by this pair and nothing here is blocked by
  them.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08`
  → refreshed and deduplicated; batch 11 in `reviewed_batches`, no orphaned
  reviews; the `pthm → def-sr-regular-causal-curve-and-worldline` edge remains
  recorded under consumer batch 11.
- `node tools/physics-support/step3-decisions.mjs check --run physics-em-sr-40-2026-10-08 --phase final`
  → 0 of this pair's items open at handoff (the three reparsed receipts carry
  the post-repair hashes; other batches remain in flight).

## Reviewed warnings and non-material divergences

- The three `cited-not-in-deps` warnings are same-page forward pointers left
  deliberately as exposition: `cex-…` → `pthm-sr-newtonian-p-e-correspondence`
  ("the constants K(z0) of the theorem do"), `lem-sr-uniform-low-speed-taylor-remainder`
  → `lem-sr-uniform-galilean-limit-of-boost-charts` ("the form used by …"),
  and `pthm-…` → `rem-sr-newtonian-bridge-limits-and-failures` ("see …").
  None is load-bearing: every claim in these items is proved from the listed
  deps, and the pointers only refer the reader forward on the same page (which
  the schema treats as ordinary links). No cycle is created. The one link that
  crossed to a later page was an error and is now declared (Repairs 1).
- Manifest-vs-carrier statement text differs non-materially in three places,
  left as authored: (i) the uniform-expansion lemma has a `\,` thin space after
  two wikilinks in the carrier only; (ii) the remark carrier structures its
  clauses with `### (i)/(ii)/(iii)` headings where the manifest inlines them;
  (iii) the counterexample carrier labels its lead-in "**False claim.**" where
  the manifest says "**Statement refuted.**" (the section heading already is
  `## Statement refuted`). No mathematical claim, bound or scope differs.
- Run-wide `fwdcheck` without an item scope still reports many errors on other
  batches' items and on imported mathematics; none of those is batch 11 and the
  scoped run for this pair is clean.

## Published concerns

None. Everything on this pair is new draft content; no published item, page or
imported mathematical snapshot was edited, and no consumer outside this pair
exists. No owner-held decision was overridden and no judge/audit stamp was
written.

## Open obligations and honest uncertainty

- Open obligations for this pair: **none**. All ten carriers and both pages
  exist, the full battery above passes on the current bytes, and all ten
  decisions are current at the recorded hashes.
- Decision receipts bind the whole prerequisite closure, including sibling
  supplier carriers that may still be under concurrent revision by their own
  groups. If any of those bytes change before the gate, the engine will report
  changed inputs and the affected items need a fresh item audit; that is the
  designed re-audit mechanism, not an unresolved defect of this pair.
- Escalations: none outstanding from this pair. The only run-level failures
  observed are the other batches' `[undeclared-prereq]` rows reported above.
- Honest scope of the audit: this dispatch verified the statements, displayed
  computations, supplier-clause uses and all machine checks listed above. A
  subsequent independent reader/refuter pass (Steps 5–8) remains the designed
  place for whole-item independent review; the published suppliers themselves
  retain their own library audit state.
