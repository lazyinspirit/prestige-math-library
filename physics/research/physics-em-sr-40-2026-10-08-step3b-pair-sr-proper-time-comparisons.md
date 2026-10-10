# Step 3b report — pair `sr-proper-time-comparisons`

- Run: `physics-em-sr-40-2026-10-08` · role: alpha-high (Step 3b scaffold auditor and item author)
- Pair: A `sr-proper-time-comparisons` (order 219, batch 6) / B `sr-proper-time-comparisons-examples` (order 220, batch 6)
- Scope: 15 assigned items (9 A + 6 B); own only this pair; shared inputs preserved.
- Dispatch labels: first authoring session `step3b-pair-sr-proper-time-comparisons-2e4e54aa4fd52512`
  (2026-10-09 07:22-07:40Z, ended `ok False` in the WSL-crash retry wave), current session
  `step3b-pair-sr-proper-time-comparisons-9e650fc76ca830e5` (attempt 2 of 2, started 07:46:31Z).

## Current state (this dispatch)

All 15 carriers and both pages exist and are complete. The current session re-read every owned
carrier in dependency order, re-derived and checked every proof step by hand, re-checked the
load-bearing supplier statements on disk (including the one supplier flagged by the previous
session), confirmed the batch-6 manifest/coverage/contracts, ran the full check battery, re-recorded
all 15 item decisions with `step3-decisions record-item` (all `accept`, confidence 1, current
dependency lists) because sibling edits had invalidated the earlier receipts, completed the batch-6
cross-batch input (23 previously missing declared-edge rows added; 128/128 edges now have review
rows), and refreshed the unified ledger. No carrier was edited in this session: the audit found no
defect requiring repair. Prior-session repairs are preserved and re-verified below.

## Inputs read

`CLAUDE.md`, `SCHEMA.md`, `../PHYSICS-CONTENT-MODEL.md`, `WORKFLOW.md`, owner authoring direction
`research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`, plan-spec entries for orders
219/220 and `research/plan-special-relativity-track.md` SR06/SR06B, Step 3a report
`research/physics-em-sr-40-2026-10-08-step3a-pair-sr-proper-time-comparisons.md` (scope `sufficient`,
receipt current), batch-6 manifest/coverage/notes/proof-contracts/cross-batch input, the batch-1 to
batch-5 supplier carriers actually used (read on disk this session), the imported published
mathematical suppliers on disk, and `research/math-imports.json`. This continuation additionally
re-read, among the suppliers, `def-lorentz-form-and-inertia`,
`def-causal-classification-of-lorentz-vectors`, `def-time-orientation-and-future-causal-sets`,
`lem-timelike-cone-has-two-convex-components`, `def-inertial-frame-and-inertial-chart`,
`lem-future-oriented-inertial-frames-exist`, `def-spatial-euclidean-structure-of-an-inertial-frame`,
`thm-cauchy-schwarz-finite`, `thm-induction-principle`, `def-sr-regular-causal-curve-and-worldline`,
`def-sr-piecewise-proper-time`, `def-sr-proper-time`, `lem-sr-weak-piecewise-causal-integrability`,
`def-lorentz-boost`, `lem-boost-is-proper-orthochronous-with-inverse`,
`lem-collinear-boost-composition-and-velocity-addition`,
`lem-sr-boost-time-length-and-velocity-formulas`, `def-sr-simultaneity-slice-and-rest-distance`,
`def-lorentz-map-and-lorentz-group`, `def-oriented-minkowski-volume-form`,
`lem-volume-form-is-independent-of-the-oriented-frame`, `post-sr-ideal-clocks-and-light`, and
`post-sr-free-trajectories-and-clock-hypothesis`.

## Owned IDs (authoring order: dependency level, then page order, then item ID)

| # | item | page | level | prior session | this session |
|---|---|---|---|---|---|
| 1 | `lem-sr-reverse-cauchy-schwarz-for-future-timelike-vectors` | A | 6 | accept | accept (re-recorded) |
| 2 | `cor-sr-reverse-triangle-and-future-cone-convexity` | A | 7 | accept | accept (re-recorded) |
| 3 | `cex-sr-reverse-cauchy-schwarz-fails-outside-the-cone-pair` | B | 7 | accept | accept (re-recorded) |
| 4 | `def-sr-inertial-and-piecewise-inertial-worldline` | A | 8 | accept | accept (re-recorded) |
| 5 | `lem-sr-rest-frame-of-a-future-timelike-displacement` | A | 8 | repaired (manifest dep row) | accept (re-recorded) |
| 6 | `ex-sr-reverse-cauchy-schwarz-and-equality` | B | 8 | accept | accept (re-recorded) |
| 7 | `lem-sr-endpoint-displacement-of-a-future-timelike-worldline` | A | 9 | repaired (level 10→9) | accept (re-recorded) |
| 8 | `ex-sr-rest-frame-of-a-timelike-displacement-worked` | B | 9 | repaired (step 4.1) | accept (re-recorded) |
| 9 | `thm-sr-endpoint-proper-time-bound-and-flat-maximum` | A | 10 | repaired (level 11→10) | accept (re-recorded) |
| 10 | `cex-sr-past-directed-itinerary-attains-the-endpoint-bound` | B | 11 | repaired (level 12→11) | accept (re-recorded) |
| 11 | `ex-sr-two-leg-itinerary-versus-straight-clock` | B | 11 | repaired (false chain; duplicate step; level) | accept (re-recorded) |
| 12 | `pthm-sr-same-endpoint-clock-comparison` | A | 12 | repaired (undefined symbol removed) | accept (re-recorded) |
| 13 | `texp-sr-piecewise-inertial-twin-reunion` | A | 13 | accept | accept (re-recorded) |
| 14 | `ex-sr-twin-simultaneity-gap-at-the-turn` | B | 13 | accept | accept (re-recorded) |
| 15 | `rem-sr-twin-acceleration-and-synchronization-caveats` | A | 14 | accept | accept (re-recorded) |

Pages: `library/special-relativity/sr-proper-time-comparisons.md` (9 A items) and
`library/special-relativity/sr-proper-time-comparisons-examples.md` (6 leaf items in `examples`,
`items: []`); no consumer outside the pair depends on a B item. Current receipts:
`research/physics-em-sr-40-2026-10-08-step3b-review-<item>.json`, recorded 2026-10-09T07:53Z, all
`accept`, `confidence: 1`, `owner: false`, with the examined dependency lists and current hashes.
The pair scope receipt `...-step3a-review-sr-proper-time-comparisons.json` is still current
(`step3-decisions check --phase final` reports no open row for this pair or any owned item).

## Audit in this continuation (dependency order)

Each item's numbered steps were re-derived independently against the on-disk supplier statements;
the exact computations are recorded in the decision receipts. Summary of the load-bearing checks
and of where the suppliers are used:

1. Reversed Cauchy–Schwarz (A, level 6). Coordinate proof re-checked: cone description from
   `lem-timelike-cone-has-two-convex-components`; `x=v^0w^0-|v_s||w_s|`, the expansion
   `x^2-a^2b^2=(v^0|w_s|-w^0|v_s|)^2`, `x>0`, monotone squaring; equality cases `v_s=0`, `w_s=0`,
   both nonzero (the last using the equality clause of `thm-cauchy-schwarz-finite`, read); converse
   and past-timelike clause. No choice principle; the frame is supplied by
   `lem-future-oriented-inertial-frames-exist`.
2. Reversed triangle and future-cone convexity (A, level 7). Membership, the chain `C^2 >= (a+b)^2`,
   the open-segment case via `tv`, `(1-t)w`, and the induction (base `k=1`, steps for inequality
   and for the equality characterization) with `thm-induction-principle` (read; natural-number
   form).
3. Boundary counterexample (B, level 7). Exact witnesses recomputed: `-eta(v,w)=-34<16` for the
   future/past pair; `1<sqrt(2)` for the spacelike pair, with `s^2+t^2` nonvanishing on the span.
4. Piecewise-inertial vocabulary (A, level 8). Constant tangent, `C^k` regularity, same-image
   increasing affine reparametrizations, the corner/one-sided-quotient description and the
   `C^1 <=> d_1=...=d_m` criterion; scope clause; no clock reading attached.
5. Rest frame of a future timelike displacement (A, level 8). `eta(n,n)=-1`; `n^0>0` places `n` in
   `C^+`; `beta=n_s/n^0`, `|beta|<1`; `B(beta)n=f_0` by clause (iv) of
   `lem-boost-is-proper-orthochronous-with-inverse` (clause read); image basis is future,
   orthonormal and positively oriented with `epsilon`-value 1
   (`lem-volume-form-is-independent-of-the-oriented-frame`, `def-oriented-minkowski-volume-form`,
   read); chart value `(lambda T,0,0,0)`. The manifest dep/role row for `lem-of-square-monotone`
   (used through [F2]/[L5]) is present.
6. Worked reverse-Cauchy–Schwarz example (B, level 8). `34>=16` strict, `32=4*8` equality,
   `sqrt(100)>=8`, `sqrt(91)>=9`; all four vectors future timelike.
7. Endpoint displacement (A, level 9). Per piece `g_i=y^0'-|z'|>0`; the improper integral
   dominates truncated integrals, giving `int|z'|<int y^0'=y^0(beta)-y^0(alpha)`; the
   vector-integral norm inequality passed to the one-sided limit gives `|Delta z|<=int|z'|`;
   summing finitely many strict inequalities gives `|z(b)-z(a)|<y^0(b)-y^0(a)`. The supplier
   `lem-sr-weak-piecewise-causal-integrability` was read in full: clause (b) supplies the finite
   improper integrals of `y^0'`, `|z'|` and the signed endpoint increments, clause (c)
   subdivision additivity, clause (d) the nonzero future causal endpoint displacement — exactly as
   used.
8. Worked rest frame (B, level 9). The repaired step 4.1 was recomputed at full precision:
   `B(-beta)e_1=(3/4,5/4,0,0)` from `x'^0=(5/4)(3/5)=3/4` and
   `x'_vec=(1,0,0)+(25/36)(-3/5)(-3/5,0,0)=(5/4,0,0)`; `B(-beta)e_0=(5/4,3/4,0,0)=n`;
   orthonormality values and the chart value `(4,0,0,0)` re-checked.
9. Endpoint bound and flat maximum (A, level 10). Full re-derivation of the rest-frame proof:
   `c*Delta tau=Sum int f_i<=Sum int y^0'=T`; equality forces `Sum int h_i=0`, `h_i>=0`, hence
   `h_i` identically 0 on each open piece, `z` constant, `x(s)=p+sigma(s)d` with `sigma` a strictly
   increasing continuous surjection with `sigma'>0` and finite positive one-sided quotients; the
   converse representation and the positive-multiple tangent equivalence; the strictness clause
   and the piecewise-inertial iff; the straight case. Supplier `def-sr-piecewise-proper-time`
   (clauses (i)-(vi), read) supplies `Delta tau`, strict monotonicity of the based proper-time
   function and the (H) special case.
10. Past-directed counterexample (B, level 11). `x(s)=p-sd`, `d=(5,3,0,0)`: length integral 4
    equals the endpoint bound 4 with past-directed tangents; refutes the universal claim, does not
    contradict the theorem's future-timelike hypotheses.
11. Two-leg itinerary (B, level 11). Straight `2T`; legs `T/gamma` each; `2T/gamma<2T`; gap `2T/5`
    at `v=3c/5`; non-affine `mu(s)=(s^2+s)/2` attains `2T` (step 3.2).
12. Same-endpoint clock comparison (A, level 12, physics theorem). Conditional deduction
    re-checked: `[A2]` gives `c^{-1}T`; `[A3]` gives `Delta tau(x)`; endpoint theorem gives
    bound/equality/strictness; chart independence and no simultaneity convention. The postulate
    statements of `post-sr-ideal-clocks-and-light` (i) and
    `post-sr-free-trajectories-and-clock-hypothesis` (ii) were read and match `[A2]`/`[A3]`;
    `physical_scope` and the qualification state the idealizations and that no measurement or
    statistical claim is made.
13. Twin reunion thought experiment (A, level 13). Explicit histories, corner `r`, non-collinearity
    of `p,r,q`, readings `2T` and `2T/gamma`, gap `2T(1-1/gamma)>0`, chart independence,
    instantaneous-turn idealization and no-measurement scope.
14. Simultaneity-gap example (B, level 13). All rational values recomputed: `4cT/5`, `16T/25`;
    `17cT/10`, `34T/25`; gap `18T/25=2Tv^2/c^2`; reconciliation `16/25+18/25+16/25=2`; relative
    parameter `15/17`. **Flagged supplier reconciled:** the composition supplier
    `lem-collinear-boost-composition-and-velocity-addition` (batch 2) is authored on disk and its
    Statement contains exactly the law used in step 2.3,
    `B(beta_1 e)B(beta_2 e)=B(((beta_1+beta_2)/(1+beta_1 beta_2))e)` with `|beta|<1`; the actual
    proof use is verified, so this consumer's open supplier obligation is closed (cross-batch row
    `verified`).
15. Caveats remark (A, level 14). Re-checked: no acceleration term; outbound slice `t=T/gamma^2`,
    inbound `t=T(1+v^2/c^2)`, gap `2Tv^2/c^2` and the identity
    `2T=T/gamma^2+2Tv^2/c^2+T/gamma^2`; non-symmetry via affine chart transitions and the
    non-collinear triple; empirical qualification present. The remark asserts nothing new.

### Audit observations recorded (judged sound; no repair)

- `lem-sr-endpoint-displacement-of-a-future-timelike-worldline` step 3.1 and
  `thm-sr-endpoint-proper-time-bound-and-flat-maximum` step 4.1 use the integrand-linearity
  decomposition `int(y^0'-f)=int y^0'-int f` for finite improper integrals. The cited supplier's
  statement supplies the absolute improper integrability of `y^0'` and `f` (hence of `|z'|`) and
  the endpoint increments; the decomposition itself is ordinary linearity of the truncated
  Riemann integrals plus finiteness of all one-sided limits, and the linearity theorem is in the
  supplier's own dependency closure. The inference is valid as written; the presentation is
  flagged for the Steps 5-8 reviewers only as a possible future clarification, not as a defect.
- One nonfatal `shotgun-bracket` advisory remains on
  `lem-sr-reverse-cauchy-schwarz-for-future-timelike-vectors` step 2.1 (cites four facts; all four
  are genuinely used there). Nonfatal; recorded for Steps 5-8.

## Prior-session repairs (preserved, re-verified)

1. `ex-sr-rest-frame-of-a-timelike-displacement-worked` step 4.1: corrected `B(-beta)e_1` column.
   Re-verified exactly in this session.
2. `ex-sr-two-leg-itinerary-versus-straight-clock`: `c>0>c-|v|` corrected to `c-|v|>0`; duplicate
   step removed. Re-verified.
3. `pthm-sr-same-endpoint-clock-comparison` step 2.1: undefined `sigma(b)-sigma(a)` removed.
   Re-verified.
4. Metadata: computed `dependency_level`s (9/10/11/11 ordering) recorded in carriers and manifests;
   `verification: precheck: pass` on all carriers; batch-6 manifest gained the
   `lem-of-square-monotone` dep/role row for item 5.

## Checks run in this continuation (exact scopes)

- `node tools/physics-support/proof-layout.mjs` on the 15 explicit item paths after the final
  edit: **15 items, 103 steps, 0 defects**.
- `node ../tools/tsx-run.mjs tools/physics-support/precheck.mts` on the same 15 paths:
  **13 checked, 0 failing** (the definition and the remark are correctly nonchecked).
- `node tools/physics-support/rendercheck.mjs` on the same 15 paths: **OK**.
- `node tools/physics-support/manifest-deps.mjs research/...-batch-6.pages.json`:
  **15 items, 0 errors**; frontmatter `deps` of all 15 carriers match the manifest as sets.
- `node tools/physics-support/content-policy.mjs research/...-batch-6.pages.json`:
  **15 scoped items, 0 errors, 0 warnings**.
- `node tools/physics-support/proof-contract.mjs research/...-batch-6.proof-contracts.json --strict`:
  **15/15 items, 0 errors, 1 nonfatal warning** (shotgun-bracket, above).
- `node tools/physics-support/item-dependency-levels.mjs check --run ...`:
  **473 items, 80 pages, no error**.
- `node tools/physics-support/coverage-checklist.mjs research/...-batch-6.coverage.json --require-destination`:
  **1 page, 20 results, 0 errors, 0 warnings**.
- Scoped `validatePhysicsContent` via `loadPhysicsRepository` with `selectedItems` = the 15 IDs and
  `selectedPages` = the two pages: **0 errors**. (`physics-check.mjs --run` itself cannot complete
  while other pairs still lack carriers.)
- `node tools/physics-support/step3-decisions.mjs check --run ... --phase final`:
  **no open row for this pair or any of its 15 items**; the run-wide check stays open for other
  pairs.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run ...` after completing
  the batch-6 input: refreshed and deduplicated. The batch-6 input now has **128 rows covering
  128/128 declared cross-batch edges** (56 `verified`, 72 `open`); `--require-reviewed` still
  exits 1 only for other batches' missing rows (batches 2, 4, 5, 30, 31, 32, 33, 35 — not batch 6).
- `node tools/physics-support/frontier-item-gate.mjs --run ... --tool validate-plan`: exits 1 with
  39 `undeclared-prereq` findings, **none on this pair** (all on sibling pages, e.g.
  `sr-spacetime-primitives`, `sr-lorentz-transformations`, `em-*`); pre-splice plan debt for
  Step 4.

## Open obligations and findings

1. **Page edge `sr-proper-time-comparisons -> sr-observer-measurements` stays open.** The batch-4
   supplier pair is still partially unauthored (8 missing carriers on that page). No item of this
   pair depends on a missing carrier; the batch-4 items actually used
   (`lem-sr-boost-time-length-and-velocity-formulas`,
   `def-sr-simultaneity-slice-and-rest-distance`,
   `lem-inertial-chart-transitions-are-affine-lorentz`, `def-sr-four-velocity-and-four-acceleration`)
   are authored. The edge is an ordering prerequisite only; it closes when the supplier pair is
   authored.
2. **Cross-batch input.** 72 rows remain `open` with current-state evidence for the Step-8 lead's
   reconciliation; the 23 rows added this session are `verified` against carriers read now. Users
   should re-read the supplier proofs before relying on the older rows, whose evidence may predate
   sibling edits.
3. **`validate-plan` findings** are sibling pre-splice plan debt (`undeclared-prereq` rows listed
   above); report for Step 4, not a defect of this pair.
4. **Decision currency.** All 15 receipts are current at recording time (07:53Z). Concurrent
   sibling writers can change transitive inputs and invalidate hashes; the engine re-dispatches in
   that case. No mathematical defect of this pair is known.
5. **Independent review still owed.** Steps 5-8 mathematical/source/empirical review and the
   publication gates remain outstanding for the pair; the author decisions here are not
   independent audits.

## Handoff summary

- Completed: 15/15 carriers and both pages complete and re-audited; 15 Step-3b item decisions
  re-recorded as `accept` at confidence 1 against current inputs; batch-6 manifest, coverage,
  proof-contracts and cross-batch input current (128/128 edges reviewed); unified ledger refreshed;
  pair scope receipt current.
- Added suppliers: none (all suppliers named by the pair are authored in this run or published
  imports). The one previously flagged supplier
  (`lem-collinear-boost-composition-and-velocity-addition`) is authored and its actual proof use
  verified.
- Published concerns: none against this pair. Sibling findings reported with page/dep IDs above.
- Open obligations: the page edge to `sr-observer-measurements`; the 72 `open` ledger rows; the
  run-wide `--require-reviewed` ledger gate and `validate-plan` findings owned by other
  batches/pages; Steps 5-8 independent review.
