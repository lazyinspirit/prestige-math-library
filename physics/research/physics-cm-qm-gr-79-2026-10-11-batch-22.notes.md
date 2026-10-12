# Batch 22 notes — `cm06-regular-constraints-and-moving-frames` (and examples)

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, batch 22; one A/B pair
(orders 123/124), category `non-relativistic-classical-mechanics`, library
`physics`. Step 1 (complete initial authoring) is finished: 12 items and both
page carriers are authored, checked and recorded ready. The full authoring
handoff is `research/physics-cm-qm-gr-79-2026-10-11-step3b-pair-cm06-regular-constraints-and-moving-frames.md`.

## Delivered inventory

- A page `cm06-regular-constraints-and-moving-frames` (8 items, levels 7–12):
  `def-cm06-holonomic-constraint-model` (9), `post-cm06-ideal-reaction-law` (10),
  `pthm-cm06-multiplier-balance` (11), `pthm-cm06-rheonomic-power` (12),
  `def-cm06-moving-frame` (7), `pthm-cm06-inertial-forces` (10),
  `def-cm06-nonholonomic-model` (9), `rem-cm06-dalembert-vakonomic-distinction` (11).
- B page `cm06-regular-constraints-and-moving-frames-examples` (4 examples, levels 10–13):
  `ex-cm06-bead-on-a-rotating-wire` (13), `ex-cm06-pendulum-tension-and-reaction-power` (13),
  `ex-cm06-rotating-chart-inertial-terms` (11), `ex-cm06-rolling-disk-model-comparison` (10).

## Design versus plan

- The design reservation (track plan L587) lists eight provisional A items
  `cm06-holonomic`, `cm06-ideal-reaction`, `cm06-multiplier-balance`,
  `cm06-rheonomic-power`, `cm06-moving-frame`, `cm06-inertial-forces`,
  `cm06-nonholonomic`, `cm06-dalembert-vakonomic-distinction`; the delivered
  A inventory matches them one-to-one (def, postulate, physics-theorem,
  physics-theorem, def, physics-theorem, def, remark), with the B page carrying
  four constructed examples. No reserved claim was dropped or weakened.
- Local mathematical proof sections of the reservation: `M1` is homed on
  `CM-Math-geometry` and `M6`, `E5`, `E20`, `E22` on `CM-Math-variations`
  (scaffold `closure-ledger.json`); their realized in-run math items
  (`def-cm-holonomic-constraint-and-ideal-reactions`,
  `lem-cm-constraint-multipliers-and-accelerations`,
  `prop-cm-ideal-holonomic-system-in-a-time-dependent-chart`,
  `cex-cm-dalembert-and-vakonomic-evolutions-differ`,
  `prop-cm-nonholonomic-distribution-is-not-tangent-to-level-sets`, and the batch-1/9
  moving-frame and skew-matrix items) are consumed at item level with exact
  statements. `E22`'s verification examples (ideal pendulum, rotating hoop
  reduced energy, rolling acceleration) are realized there as mathematics
  examples; the B page adds physics-side model checks, not a replacement.
- Prose-scaffold `P6` phrases the classification as "depends explicitly on
  time". Clause (d) refines this to the locus-based definition with the
  membership characterization; the operative consequences used by the
  theorems is preserved (scleronomic implies $G_t|_\Sigma=0$; reaction power
  $-\lambda\cdot G_t$; conservation in the static scleronomic case). Recorded
  as a precision refinement, not a changed claim.
- Plan conflict, resolved: the draft A-page carrier listed `cm-math-balances`
  in addition to the plan-required `cm-math-variations` and
  `cm03-momentum-work-and-energy-balances`; `validate-plan` reports the extra
  direct require as `redundant-prereq` (it is reached through both). The
  carrier and manifest now declare exactly the plan requires; the
  `cm-math-balances` items remain in the transitive closure and are used at
  item level (`thm-cm-work-energy-balance` etc.).
- No other design-versus-plan conflict was found.

## Authoring review repairs (Step 1, final session)

1. `def-cm06-holonomic-constraint-model` clause (d) was defective: it carried
   stray literal `+` characters and claimed the equivalence "every nonempty
   instantaneous locus equals the same set $N$", which is false for ambient
   sets whose time fibers have several components (a rank-regular
   counterexample exists) and false in the nonempty-slice form (slab
   counterexample). The clause is now locus-based: $\Sigma=\{(t,x)\in O:x\in N\}$
   for some $N$, equivalently $(t,x)\in\Sigma$ and $(t',x)\in O$ imply
   $(t',x)\in\Sigma$; scleronomic data satisfy $G_t|_\Sigma=0$ for every $C^2$
   presentation, the identity is shown not to be a criterion (two
   counterexamples, one rank-regular), and the rescaling invariance is stated
   correctly ($D_xG'=\rho D_xG$, $G'_t=\rho G_t$ on $\Sigma$, $\lambda'=\rho^{-1}\lambda$,
   reaction and power product unchanged).
   Consumers re-read: `pthm-cm06-rheonomic-power` [L6] uses only the supplied
   direction; the bead and pendulum examples' [F2] and the bead step 1.1 were
   restated in the membership form. No consumer outside batch 22 declares an
   item dependency on a cm06 item (verified via the frontier ledger and the
   step1 staleness scan), so the change has no foreign item-level consumer.
2. `ex-cm06-pendulum-tension-and-reaction-power` was rewritten to live in the
   framework's $3N$ setting: $Q=\mathbb R^3$, datum
   $O=\{(t,x,y,z):(x,y)\ne(0,0)\}$, $k=2$, $G=(x^2+y^2-l^2,z)$ (a bead on a
   smooth circular wire in the plane $z=0$), so hypothesis (h1) of the
   multiplier-balance theorem holds on all of $O$; the multiplier is the pair
   $(-(m/2l)(g\cos\theta+l\theta'^2),0)$ with the second component vanishing
   along motions, and every clause was re-verified in three coordinates.
3. `ex-cm06-rolling-disk-model-comparison` [F5] now reads the
   holonomic-equivalence criterion for the declared reduced two-coordinate
   model (the ideal-constraint mathematics it uses is general-$n$); step 1.1
   verifies the integrating pair $(\Phi,\varrho)$ directly. No claim changed.
4. `ex-cm06-bead-on-a-rotating-wire` step 1.1 now derives the rheonomic verdict
   from the membership characterization ($(0,(1,0,0))\in\Sigma$,
   $(t_1,(1,0,0))\in O\setminus\Sigma$).

## Sources

12 coverage entries (7 on the A page, 5 on the B page; Tong *Classical
Dynamics* and *Dynamics and Relativity*, Likharev *Essential Graduate
Physics* CM, Stewart MIT 8.09/8.309, Sussman–Wisdom SICM, Cline, Cortés et
al.), 49 harvested results with dispositions (41 included/inline, 8 out of
scope with reasons), all 12 fetch-verified with byte counts, hashes and
timestamps; recovery attempts recorded in the coverage file.

## Checks run on the final carriers

- `precheck.mts` on all 12 items: `8 checked, 0 failing — all clean`.
- `proof-layout.mjs` on 12 items + 2 pages: `14 items, 45 steps, 0 defects`.
- `rendercheck.mjs` on 12 items + 2 pages: OK (KaTeX, YAML, math nesting).
- `proof-contract.mjs --strict`: `0 error(s), 0 warning(s), 9/9 item(s) checked`.
- `proof-contract-coverage.mjs` (batch overlay): `12 item(s), 7/7 supplied argument(s) covered`.
- `content-policy.mjs` on the batch manifest: `12 scoped item(s), 0 error(s), 0 warning(s)`.
- `manifest-deps.mjs`: `12 item(s), 0 normalized, 0 error(s)`.
- `manifest-integrity.mjs --run`: `158 page(s) owed, 158 in the manifests; no scope drift`.
- `coverage-checklist.mjs`: `2 page(s), 49 harvested result(s), 0 error(s), 0 warning(s)`.
- `source-fetch-check.mjs --coverage`: `12/12 source(s) fetch-verified`.
- `item-dependency-levels.mjs check --run`: no cm06 finding (remaining run errors are empty inventories of unbuilt pages in other batches).
- `depcheck.mjs --run`: no cm06 finding (only the two page home summary lines).
- `validate-plan.mjs`: pages 123/124 resolve with 8/4 items and exactly the plan requires; no cm06 finding; run-wide FAIL on another batch's `undeclared-prereq` only.
- `frontier-dependency-ledger.mjs refresh`: batch 22 reviewed; all 77 batch-22 cross-batch edges verified; no orphaned review from batch 22.
- `fwdcheck.mjs`: all 12 cm06 items "inherited" from published suppliers' edges; no cm06-caused finding. `extcheck.mjs`: green.

## Run-level findings outside batch 22 (recorded, not repaired here)

1. `physics-check.mjs` aborts run-wide on the mathematics import
   reconciliation, which is an operator/owner action outside this worker's write
   scope. During this session the operator re-imported `items/def-finite-sum.md`
   (now read-only and byte-identical to the root original,
   `4cf40c8200c759cb...`); at handoff `physics-check` names the next pending
   item, `items/def-integer-power.md` (snapshot 05:13 is 5246 bytes, root
   13:52 is 5251 bytes; the root diff is a notational cleanup of `iota(n)` to
   `n` with unchanged mathematical content). The re-import wave invalidated
   transitive step-1 records run-wide (run ready count fell to 41/774); all 12
   cm06 records were re-recorded afterwards, and they will be invalidated
   mechanically again when `def-integer-power` (a shared ancestor in every
   closure) is re-imported. Re-record readiness after the operator finishes the
   import reconciliation; no batch-22 carrier change is implied.
2. `proof-contract-coverage.mjs --run` aborts on empty frontier page inventories
   of other batches (e.g. `cm07-stationary-action-and-lagrangian-dynamics`);
   the batch-scoped overlay is green.
3. `validate-plan.mjs --run` fails only on
   `[undeclared-prereq] page qm-math-controlled-dynamics ...`
   (another batch's scope).
4. Two consumer page edges into the cm06 A page (`cm07`, batch 23; `cm11`,
   batch 27) await their consumer batches' review; run-wide
   `--require-reviewed` still fails for unreviewed edges in other batches.
5. `step1-decisions.mjs check`: 745/774 ready; the 29 stale non-ready item
   rows are other scopes' items (none of them depends on a cm06 item); empty
   inventories of unbuilt pages in other batches account for the page rows.

## Readiness

All 12 items are recorded `ready` with their exact examined dependency lists
after the final carrier and manifest rebuild (`step1-decisions.mjs record`,
then `check`: no cm06 work row). No item of this batch is escalated. Step 1
authoring is complete; independent review is Step 2's task, and readiness here
is an authoring disposition, not a mathematical approval.
