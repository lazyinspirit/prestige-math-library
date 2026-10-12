# Batch 27 notes — `cm11-rigid-body-dynamics-and-stability` / `…-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-27, covers 27.
Step 1 complete initial authoring only; a readiness record is not independent
mathematical approval (Step 2/3 review follows). Inputs read before and
during construction: `CLAUDE.md`, `SCHEMA.md`, `../PHYSICS-CONTENT-MODEL.md`,
`WORKFLOW.md`, the binding owner direction
`research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`, the
design record `research/plan-non-relativistic-classical-mechanics-track.md`
L735 ("Rigid-body dynamics and stability"), `research/plan-spec.json` (orders
133/134), the first-principles inventory
`research/first-principles-2026-10-03/non-relativistic-classical-mechanics/scaffold/proposed-inventory.json`
(CM11 reservation, `A_budget` 55 / `B_budget` 26), the expansion proof E9
(rigid nonlinear spin stability and heavy-top reduction) and the
`mathematical-prerequisites.md` object list (O8 distinct-moment spins), the
reader ledgers (Tong, Likharev, SICM, Stewart), the batch-dependency-levels
file `research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json`
(batch 27 recorded at level 6, requires 22 and 26, both complete before
construction), and the batch-26 notes for the consumed cm10 pair.

## Scope built

- A page `cm11-rigid-body-dynamics-and-stability` (order 133, category
  `non-relativistic-classical-mechanics`, `library: physics`), 8 items: two
  postulates (`post-cm11-torque-balance`, `post-cm11-heavy-top`) and six
  physics theorems (`pthm-cm11-euler-equations`,
  `pthm-cm11-torque-free-invariants`, `pthm-cm11-principal-rotations`,
  `pthm-cm11-linearized-spin`, `pthm-cm11-nonlinear-spin-stability`,
  `pthm-cm11-top-reduction`).
- B page `cm11-rigid-body-dynamics-and-stability-examples` (order 134), 4
  leaf items: three examples (`ex-cm11-free-top-checks`,
  `ex-cm11-intermediate-axis-escape`,
  `ex-cm11-heavy-top-steady-precession`) and one counterexample
  (`cex-cm11-invariants-do-not-force-uniform-rotation`). Nothing outside the
  pair depends on these four.
- Page carriers
  `library/non-relativistic-classical-mechanics/cm11-rigid-body-dynamics-and-stability.md`
  and `…-examples.md` are nonempty and carry the item lists, `requires`
  lists, order, kind, category, library and companion metadata. The A page
  requires `cm06-regular-constraints-and-moving-frames` (batch 22) and
  `cm10-rigid-body-configuration-and-inertia` (batch 26); the B page requires
  the A page. No `_pathway.md` is created here (closeout artifact).
- Design contract delivered (design `contract_text` to delivered items):
  `cm11-torque-balance(post)` → `post-cm11-torque-balance`;
  `cm11-euler-equations(pthm)` → `pthm-cm11-euler-equations`;
  `cm11-torque-free-invariants(pthm)` → `pthm-cm11-torque-free-invariants`;
  `cm11-principal-rotations(pthm)` → `pthm-cm11-principal-rotations`;
  `cm11-linearized-spin(pthm)` → `pthm-cm11-linearized-spin`;
  `cm11-nonlinear-spin-stability(pthm E9)` →
  `pthm-cm11-nonlinear-spin-stability`; `cm11-heavy-top(post)` →
  `post-cm11-heavy-top`; `cm11-top-reduction(pthm contract)` →
  `pthm-cm11-top-reduction`. The design's B prose names the free top, the
  heavy symmetric top and the intermediate-axis instability (O8); the
  delivered B items realise those topics, and the
  invariants-do-not-force-uniform-rotation counterexample is recorded as an
  addition that makes the design's distinction between the conserved
  invariants and uniform rotation explicit. The design's provisional ids
  (`cm11-*`) are placeholders; the delivered ids use the run's kind-prefix
  conventions, as in batches 17-26.

## Dependency graph, levels and construction order

Authored in prerequisite order; each item built once. Levels were computed
mechanically by `tools/physics-support/item-dependency-levels.mjs` over the
run manifests (`dependency_level` in the batch manifest and in every item's
frontmatter). A focused replay over the current run reports declared =
computed for all 12 items and 0 findings for them; the run-wide invocation
still lists other batches' empty scaffold inventories (open run-level state,
below). After the pre-recording dependency corrections recorded further down,
the levels are:

| item | level | key in-run suppliers |
|---|---|---|
| `post-cm11-torque-balance` | 12 | 26: rigid material and the cm10 definitions/theorems; 17: frames, units; 19: `pthm-cm03-angular-momentum-balance` (examined for contrast, not a proof premise) |
| `pthm-cm11-euler-equations` | 13 | 27: the postulate; 26: model data; 9: inertia-matrix clause 1, matrix-curve rules, skew/cross correspondence; 2: pairing derivatives; 1: SO(3) |
| `pthm-cm11-torque-free-invariants` | 14 | 27: postulate, Euler equations; 26: model data and principal axes; 9: `thm-cm-euler-equations-and-torque-free-invariants`, moments finiteness; 2: finite-time-breakdown corollary |
| `pthm-cm11-principal-rotations` | 15 | 27: postulate, Euler equations, invariants; 26: model data; 16: quaternion lift and double cover; 9: matrix/skew rules |
| `pthm-cm11-linearized-spin` | 16 | 27: Euler equations, principal rotations; 9: `thm-cm-linearized-torque-free-euler-equations`; 1: orbital/linear stability definition |
| `pthm-cm11-nonlinear-spin-stability` | 16 | 27: Euler equations, invariants, principal rotations; 9: `thm-cm-stability-of-extreme-principal-axes`, `thm-cm-instability-of-the-intermediate-axis`; 1: Lyapunov definition; 16: quaternion lift |
| `post-cm11-heavy-top` | 13 | 26: rigid material and cm10 data; 27: torque-balance postulate; 22: `post-cm06-ideal-reaction-law`, `def-cm06-holonomic-constraint-model`; 17: frames, units |
| `pthm-cm11-top-reduction` | 14 | 27: heavy-top postulate; 26: cm10 data and kinetic splitting; 9: rigid kinetic-energy theorem, Euler-angle parametrisation, Euler-angle angular velocity, coordinate rotations, `thm-cm-heavy-top-reduction`, moments finiteness |
| `ex-cm11-free-top-checks` | 17 | 27: the six A-page theorems/postulates; 26: inertia tensor, principal axes; 16: quaternion lift |
| `cex-cm11-invariants-do-not-force-uniform-rotation` | 18 | 27: postulate, invariants, `ex-cm11-free-top-checks`; 26: inertia tensor |
| `ex-cm11-intermediate-axis-escape` | 18 | 27: postulate, invariants, nonlinear stability, `ex-cm11-free-top-checks`; 26: inertia tensor, principal axes |
| `ex-cm11-heavy-top-steady-precession` | 15 | 27: heavy-top postulate, top reduction; 26: cm10 data; 9: Euler-angle suppliers and heavy-top reduction |

Construction order (topological, suppliers before consumers at every edge):
torque-balance postulate → Euler equations → torque-free invariants →
principal rotations → linearized spin → nonlinear stability → heavy-top
postulate → top reduction → free-top checks → invariants counterexample →
intermediate-axis escape → steady precession. No cycle exists (checked by
`depcheck` on the 12-item scope and by the run's prerequisite cycle checks).

## Design versus plan-spec conflicts (recorded)

1. **Design L735 vs plan-spec requires.** The design names the local
   mathematical proof sections `E9` and `M8` and the published canonical
   suppliers `cor-real-spectral-theorem-for-self-adjoint-endomorphisms` and
   `thm-linearity-of-the-lebesgue-integral-on-l-one`, with earlier physical
   pages `cm06` and `cm10`. `research/plan-spec.json` for order 133 requires
   only `cm06-regular-constraints-and-moving-frames` and
   `cm10-rigid-body-configuration-and-inertia` (order 134 requires the A
   page). The delivered closure consumes completed in-run mathematics
   directly: E9's content is authored on `cm-math-rigid` (batch 9) as
   `thm-cm-euler-equations-and-torque-free-invariants`,
   `thm-cm-stability-of-extreme-principal-axes`,
   `thm-cm-instability-of-the-intermediate-axis`,
   `thm-cm-linearized-torque-free-euler-equations`,
   `thm-cm-heavy-top-reduction`,
   `def-cm-euler-angle-parametrization-and-heavy-top-system`,
   `lem-cm-euler-angle-angular-velocity`,
   `lem-cm-coordinate-rotation-matrices` and
   `thm-cm-rigid-kinetic-energy-and-angular-momentum`; M8's content is
   delivered on the earlier page `cm10` (batch 26) and consumed there; the
   quaternion material is batch 16; the stability definitions are batch 1;
   the ODE finite-time-breakdown corollary is batch 2;
   `thm-linearity-of-the-lebesgue-integral-on-l-one` is consumed directly by
   `pthm-cm11-top-reduction`. All of these lie inside the transitive closure
   of the plan's declared requires (`cm-math-rigid` is reached through
   `cm-math-verification`, which `cm10` requires; batch 1 and 2 pages are
   reached through `cm-math-rigid`/`picard-lindelof-and-first-order-odes`,
   which appear in the A page's closure). `validate-plan --run` reports no
   undeclared prerequisite for either cm11 page. The design's
   `cor-real-spectral-theorem-for-self-adjoint-endomorphisms` is not
   consumed directly by any cm11 item (the spectral/eigenbasis content
   reaches the pair through batch 26's `pthm-cm10-principal-axes` and batch
   9's suppliers); recorded as a design-versus-delivery note, not a defect.
   No plan file was edited.
2. **Design B prose vs delivered B inventory.** "Free top and heavy
   symmetric top; intermediate-axis instability" are all delivered; the
   counterexample is the only addition, and no promised topic was omitted
   or narrowed.
3. **Batch dependency levels file staleness (engine state).** The recorded
   file lists batch 27 with `requires: ["22","26"]`, level 6; a current
   recomputation gives `requires: ["1","2","9","16","17","19","22","26"]`,
   level 6 (unchanged), because the items consume completed mathematics
   batches directly inside the requires closure. `batch-dependency-levels
   check --run` reports the file stale mid-run (also for batches 23 and 70),
   which is ordinary while other batches are still authoring; the file is
   engine-derived scheduling metadata and was not edited by this batch.

## Supplier defect recorded by batch 26 (owner escalation, not repaired here)

`lem-cm-inertia-matrix-properties` (batch 9, draft) clauses 3 / step 4.1 and
`cor-cm-principal-axes-of-the-inertia-matrix` (batch 9, draft) clause 3 /
steps 4.1 and 5.1 state inverted positivity/vanishing criteria; the full
record, counterexamples and repair strategy are in the batch-26 notes. For
batch 27:

- The only direct use of `lem-cm-inertia-matrix-properties` among the 12
  items is in `pthm-cm11-euler-equations` [L1], and it is **clause 1**
  (constancy and symmetry of the inertia matrix), which batch 26 verified
  correct. The defective clause 3 is not used.
- `cor-cm-principal-axes-of-the-inertia-matrix` is not a declared dependency
  of any cm11 item; its correct existence and positivity clauses reach this
  pair only through batch 26's `pthm-cm10-principal-axes`, which proves the
  correct vanishing and nondegeneracy criteria locally from the
  nonnegative-integral zero criterion. No cm11 claim states or uses the
  inverted criteria.
- CM11 is a potential indirect consumer if the batch-9 repair changes the
  statements of those suppliers; the owning batch 9 and the owner's
  reconciliation own the repair, and this note is the escalation record.
  No batch-9 carrier was edited (outside write scope).

## Sources, harvest and fetch verification

- Coverage `research/physics-cm-qm-gr-79-2026-10-11-batch-27.coverage.json`
  records 10 source entries across the two pages (6 A, 4 B) with 39
  dispositions: 30 `included` with item ids and 9 `out-of-scope` with
  reasons (inertia computations belonging to cm10; topics outside the
  declared branch). Four independent treatments per page: Tong, Classical
  Dynamics, §§3.3-3.6 (printed 53-70 / PDF 59-76); Likharev, Essential
  Graduate Physics CM, Ch. 4 §§4.4-4.6 (chapter 9-22 / PDF 63-76); SICM 2nd
  ed., §§2.6-2.10; Stewart, Advanced Classical Mechanics (MIT 8.09), Ch. 2
  §§2.4-2.5 (printed 41-51 / PDF 44-54). Each page has a monograph or full
  lecture-note set.
- `source-fetch-check.mjs --stamp` (2026-10-11): **10/10 sources
  fetch-verified**: Tong PDF 1093743 bytes, 139 pp., sha256_16
  b65ba2b0399df6b0; Likharev PDF 3256232 bytes, sha256_16
  714ecc2e0f7c0e86; SICM archive 4201563 bytes, sha256_16 68bf53146fef6cd9;
  Stewart PDF 6408918 bytes, sha256_16 1a73f42236201703. Check mode re-run
  on the final coverage: 10/10 fetch-verified, 0 documented drops, 0
  source-resolution entries. The hashes agree with the values recorded by
  the batch-26 harvest for the same documents.
- The math suppliers consumed by the items are completed in-run draft items
  of batches 1, 2, 9, 16, 17, 19, 22 and 26 (read-only consumption); their
  exact statements and used clauses are recorded in the proof contracts and
  in the cross-batch dependency input.

## Local closure, proof routes and recorded decisions

- **No new local prerequisite pair was needed.** The whole mathematical
  content is supplied by completed in-run pages and published imports; the
  local physics layer is exactly the 12 items of the pair. The A page has
  8 items and the B page 4, well under the 100-item cap.
- `post-cm11-torque-balance` adopts the external-torque branch: the setting
  (AC_w declared only for finiteness of the inertial integrals), the
  continuous torque datum of dimension $\mu\ell^{2}\tau^{-2}$, the balance
  $L_c'=\tau$, the torque-free clause, the explicit statement that the
  particle balance is not available verbatim and is not used as a
  derivation, the transformation law $\tilde\tau(t')=Q\tau(t'-b)$ and the
  exclusions (deformable bodies, impacts, variable mass, constitutive friction
  laws, relativistic and quantum descriptions). Its frame consistency is
  proved, not assumed, in clause 5 of `pthm-cm11-euler-equations`.
- `pthm-cm11-euler-equations` (5 steps) derives $l'=R^{\mathsf T}\tau-\omega
  \times I\omega$ and the body-frame equations, the component form in a
  principal basis, the power identity
  $\frac{d}{dt}K_{\mathrm{rot}}=\omega\cdot R^{\mathsf T}\tau$, the
  torque-free reduction $l'=l\times(I^{-1}l)$ (nondegeneracy stated), and
  the covariance clause with the body-frame torque unchanged.
- `pthm-cm11-torque-free-invariants` instantiates the batch-9 supplier for
  $C$ and $E$, their principal components and the component equations;
  proves $L_c$ constant; identifies $E$ with the rotational kinetic energy
  and bounds $\lVert\omega\rVert^{2}\le2E/I_{\min}$; and proves the
  autonomous field $F(l)=l\times(I^{-1}l)$ locally Lipschitz with every
  solution global, by trapping in the compact sphere.
- `pthm-cm11-principal-rotations` constructs uniform rotations by the
  quaternion lift (AC_w used only to select the initial unit quaternion),
  verifies the zero-torque balance, computes $C=\Omega^{2}I_{j}^{2}$,
  $E=\frac12\Omega^{2}I_{j}$ and the fixed material axis, and proves the
  converse classification from constant body angular velocity.
- `pthm-cm11-linearized-spin` quotes the batch-9 linearization supplier,
  re-derives the sign criterion after the $(I_a,I_b,I_j)$ relabelling and
  states the oscillatory/exponential dichotomy and the linear-stability
  verdicts **for the linearized system only**; the nonlinear statements are
  separate.
- `pthm-cm11-nonlinear-spin-stability` quotes the batch-9 stability and
  instability theorems, proves the explicit deviation bounds, realises the
  escaping $l$-path as an actual torque-free motion (quaternion lift plus
  the balance check), and records the orientation caveat with an explicit
  half-turn conjugacy, so no orientation stability is claimed.
- `post-cm11-heavy-top` adopts the heavy-top branch: axisymmetric inertia
  ($A_c,C_c$), the pivot constraint $c=dRe_{3}$, the ideal frictionless
  hinge (no torque about the pivot), the uniform field $-ge_{3}$, the pivot
  balance $J_p'=\tau_p$, and clause (vii) recording that this is a separate
  adopted law, not derived from the centre-of-mass balance.
- `pthm-cm11-top-reduction` proves $J_p=R\tilde I\omega$ with
  $\tilde I=\mathrm{diag}(A,A,C)$, $A=A_c+md^{2}$, $C=C_c$; the body-frame
  pivot equations; the Euler-chart identities; the conserved momenta $a$
  and $b$, the reduced energy and $A\theta''=-U'(\theta)$. The Euler-angle
  description with $\theta\in(0,\pi)$ is an explicit hypothesis; poles
  (sleeping top, hanging configuration) are excluded, and no uniqueness or
  global existence of the chart is claimed.
- The B items are complete verifications, independently recomputed during
  the pre-recording audit: `ex-cm11-free-top-checks` (spins $l=4e_3$,
  $C=16$, $E=4$ and $l=e_1$, $C=1$, $E=\frac12$; the non-uniform motion
  $\omega(t)=(\frac12\cos t,\frac12\sin t,1)$ with $C=\frac{17}4$,
  $E=\frac98$, $\lVert\omega\rVert^{2}=\frac54$; $\lambda_1=-\frac13$,
  $\lambda_2=\frac13$, $\kappa_3=1$); the counterexample
  ($\omega(\frac\pi2)-\omega(0)=(-\frac12,\frac12,0)$ with both invariants
  constant); `ex-cm11-intermediate-axis-escape` ($a=\sqrt3$,
  $c_0=\delta_0=\frac14$, $\varepsilon_0=\frac12$; $l^{q}$ on the same
  invariant level and within $10^{-2}$ of $e_2$; escape within
  $4\log100\approx18.42$); `ex-cm11-heavy-top-steady-precession`
  (both sides of the pivot balance equal; $a=\frac72$, $b=\frac52$,
  $E=\frac{19}4$; heavy-top equations and $A\theta''=0$ checked).
- Every proof item is conditional on the adopted model postulates and its
  stated hypotheses; no force law, conservation law, measurement or
  empirical value is asserted, and empirical qualifications are absent by
  construction (no item consumes an empirical premise).

## Pre-recording verification repairs (2026-10-11)

Three corrections were made during the final audit, before any readiness
record was written; each was re-verified with the full scoped check battery.

1. **Remark-only dependencies removed (dependency hygiene).** In
   `pthm-cm11-linearized-spin`, `ex-cm11-free-top-checks` and
   `cex-cm11-invariants-do-not-force-uniform-rotation` the wikilinks to
   `pthm-cm11-nonlinear-spin-stability` (the first two) and
   `pthm-cm11-principal-rotations` (the third) occur only inside
   `## Remarks` and are pure orientation: Remarks are excluded from
   depcheck's load-bearing citation scan, same-page links are ordinary
   links (SCHEMA), and a library survey shows remark-only links are usually
   not deps (2141 of 2552 sampled). Adding a dep the item does not use
   trades a wrong citation for a wrong dependency, so the three deps and
   their `formulation-prerequisite` roles were removed; the wikilinks stay.
   Recomputed items levels: `pthm-cm11-linearized-spin` 17→16,
   `ex-cm11-free-top-checks` 18→17,
   `cex-cm11-invariants-do-not-force-uniform-rotation` 19→18,
   `ex-cm11-intermediate-axis-escape` 19→18 (it depends on the free-top
   checks); frontmatter and manifest were re-synchronized.
2. **`pthm-cm11-torque-free-invariants` step 2.2 sharpened.** Constancy of
   $\lVert l\rVert^{2}$ along an arbitrary solution of the autonomous field
   (needed for the global-existence trapping argument) is now derived
   directly as $\frac{d}{dt}\lVert l\rVert^{2}=2\langle l\times(I^{-1}l),
   l\rangle=0$ from cross-product orthogonality, instead of borrowing the
   model-path conclusion of step 1.1. No citation set or step numbering
   changed.
3. **Citation precision.** `cex-…` [F2] now cites claim 2 only of
   `ex-cm11-free-top-checks` (claim 3, the Model-A linearization, is not
   used), and `ex-cm11-intermediate-axis-escape` [L2] cites clause 3 only
   of the nonlinear theorem (clause 2's deviation bounds are not used).

## Cross-batch dependencies

- `research/physics-cm-qm-gr-79-2026-10-11-batch-27.cross-batch-dependencies.json`
  carries 113 rows: 111 item edges plus 2 page edges (the A page →
  `cm06-regular-constraints-and-moving-frames` and → `cm10-rigid-body-configuration-and-inertia`),
  every row with supplier statement/kind read and the consumer's
  fact/step use, status `verified`. The removed remark-only edges are
  same-batch edges and never appeared in this file (same-batch edges are
  governed by `depcheck`, not the cross-batch ledger).
- `frontier-dependency-ledger.mjs refresh --run …`: refreshed and
  deduplicated; batch 27 is in `reviewed_batches`, its 113 edges all
  `verified`, 0 orphaned reviews. `--require-reviewed` still reports the
  run-level condition "cross-batch review incomplete" because other batches
  have not yet supplied/reviewed their edges; that is run state, not a
  batch-27 finding.

## Checks actually run (on the final carriers)

- `precheck.mts` on all 12 items: **12 checked, 0 failing** (the two
  postulates pass in nonproof-structure mode).
- `proof-layout.mjs` on the 12 items: **55 steps, 0 defects**.
- `rendercheck.mjs` on the 12 items and 2 page carriers: **14 files clean**
  (KaTeX, YAML, wikilink/math nesting).
- `proof-contract.mjs --strict`: **12/12 items, 0 errors, 0 warnings**
  (161 citation entries, 55 derivation entries, 80 boundary dispositions;
  both postulates carry a complete `physics_review`).
- `proof-contract-coverage.mjs` (overlay root, this batch's manifest only,
  the run-wide invocation being blocked by other batches' empty scaffolds):
  **12 items, 10/10 supplied arguments covered** (the two postulates are
  not proof-bearing).
- `coverage-checklist.mjs`: **2 pages, 39 harvested results, 0 errors,
  0 warnings**.
- `source-fetch-check.mjs` check mode: **10/10 sources fetch-verified,
  0 drops**.
- `content-policy.mjs` (batch manifest): **12 scoped items, 0 errors,
  0 warnings**; `manifest-deps.mjs`: **12 items, 0 normalized, 0 errors**.
- `manifest-integrity.mjs --run …`: **158 pages owed, 158 in the
  manifests, no scope drift**; `pathcheck.mjs`: 18 pathway files checked,
  **0 cm11 or classical-mechanics findings** (the 3 errors and 22 warnings
  belong to unrelated mathematics pathway files).
- `item-dependency-levels.mjs check --run …`: **0 findings for the 12 cm11
  items**; the remaining errors (68 at the time of this check) are other
  batches' empty scaffold inventories.
- `validate-plan.mjs research/plan-spec.json --run …`: no cm11 finding; the
  2 `undeclared-prereq` errors belong to `qm-math-controlled-dynamics` and
  `qm-math-fock-and-equilibrium`, and the 57 `redundant-prereq` warnings to
  other pages.
- `depcheck.mjs --items-file` (12-item scope): **OK**, selected item/page
  and prerequisite cycle checks passed, no cm11-attributable warnings;
  `fwdcheck.mjs` (same scope): **OK** — the 12 items are listed `inherited`
  by published suppliers' load-bearing forward edges, not produced here.
  `extcheck.mjs`: **28056 items, 0 recorded-not-proved, 0 resting on them**;
  `citecheck.mjs` on the 12 items: **OK, every recognised elementary move
  cites a home that states it**.
- `physics-check.mjs --run … --plan research/plan-spec.json`: **85 errors
  run-wide, 0 attributable to batch 27** (codes: `dependency-role-extra`
  63, `role-supplier` 13, `mathematical-role` 5, `nonproof-derivation` 4 —
  all on other items; 889 items checked). Without `--plan` the invocation
  aborts earlier on another batch's empty page inventory
  (`physics-cm-qm-gr-79-2026-10-11-batch-24.pages.json`), and the
  previously reported `def-finite-sum` import drift did not reproduce on
  the `--plan` path.
- `frontier-dependency-ledger.mjs refresh --run …`: refreshed and
  deduplicated; batch-27 edges 113/113 verified, 0 orphans.
- `step1-decisions.mjs check --run …` after recording: items 889, ready
  847, `closed` false at run level (other batches still authoring) and
  **0 remaining cm11 rows**.

## Readiness records

All 12 items are recorded `ready` — never `--owner`, no escalation
overwritten — **after** the final item and page carriers, the repairs above
and the manifest re-synchronization, with the complete carrier, met
prerequisites examined at statement/proof level, adequate page placement
and the current proof contract in place. Each record carries the item's
exact frontmatter `deps` array and the engine's item-hash binding computed
on those final inputs; `step1-decisions check --run` reports 0 remaining
cm11 rows. See the
`research/physics-cm-qm-gr-79-2026-10-11-step1-<item-id>.json` records for
the 12 items (12 files, written 2026-10-11).

## Open findings for the owner (none attributable to batch 27 content)

1. **Defective draft suppliers in batch 9** (full record in the batch-26
   notes; impact statement above): `lem-cm-inertia-matrix-properties`
   clause 3/step 4.1 and `cor-cm-principal-axes-of-the-inertia-matrix`
   clause 3/steps 4.1/5.1 state inverted criteria. Batch 27 consumes only
   the correct clauses (lemma clause 1 directly; the corollary only through
   `pthm-cm10-principal-axes`), but the suppliers must be repaired before
   any later consumer relies on the inverted clauses, and CM11 is a
   potential indirect consumer if the repair changes statements.
2. **Run-level empty scaffold inventories** of other batches make the
   run-wide invocations of `item-dependency-levels`, `proof-contract-
   coverage` and `physics-check` (without `--plan`) abort before scoping;
   the batch-scoped and overlay runs are clean. The 68 level errors, the
   85 `physics-check` errors, the 2 `validate-plan` errors and the 57
   `redundant-prereq` warnings observed run-wide belong to other batches.
   Recorded for the canonical ledger; not repaired here.
3. **Batch dependency levels file is stale mid-run** (engine-derived
   scheduling metadata): recorded batch 27 `requires ["22","26"]`, level 6;
   current recomputation `requires ["1","2","9","16","17","19","22","26"]`,
   level 6 unchanged (batches 23 and 70 also differ). No level-6 scheduling
   consequence; the engine should recompute at reconciliation. Not edited
   by this batch.
4. **Design-versus-delivery notes (no plan edit).** E9/M8 and the design's
   published canonical suppliers are delivered through completed in-run
   pages inside the requires closure; `cor-real-spectral-theorem-for-self-
   adjoint-endomorphisms` is not consumed directly by any cm11 item;
   `thm-linearity-of-the-lebesgue-integral-on-l-one` is consumed directly
   by `pthm-cm11-top-reduction`. Recorded under "Design versus plan-spec
   conflicts".
5. **Design B prose completeness.** All three named B topics are delivered;
   the invariants counterexample is the only addition. No promised claim
   was omitted or narrowed.

This handoff is Step-1 initial authoring evidence only; owner/operator
reconciliation and the full engine gate follow, and Steps 2-3 provide the
independent mathematical review.


## Adopted focused stability-interface followup (first repair cycle1/2)

Same reviewer of the earlier inertia supplier corrections inspected actual newly materialized batch27 uses. Earlier supplier/counter histories remain preserved. Definitions are in batch1, not9: maximal means no proper extension; arbitrary F existence/uniqueness is not asserted. Stability/invariance predicates now quantify maximal solutions while local restrictions remain solutions. Source9 and Euler27 cross-product components require a positively oriented principal basis, obtainable by sign flip with unchanged eigenvalues/motions. Batch27 has genuine initial-norm proximity for the signed instability datum, unique global maximal extensions via correct reflected -F continuation, corrected linearization basis images and SO(3) cyclic relabelling. The numeric escape q=1/400 and all cosine/cosh/frequency results are retained; free-top verification coefficients/sign were corrected after actual changed-interface inspection.

Evidence/preimages: `research/physics-cm-qm-gr-79-2026-10-11-crash-recovery/inertia-supplier-repair/materialized27-followup/`. This is focused source/consumer repair, not native whole-batch acceptance. New definition cone includes finished3/4/20 and active25; exact outside-scope defects reported before edits, no active writes or readiness recertification implied.


### Adopted current stability consumer successor

Successor `/root/physics_stability_consumer_successor` inspected the current changed suppliers and affected old/current/alias consumer cone. Focused repairs and hash-bound current evidence are recorded in `research/physics-cm-qm-gr-79-2026-10-11-stability-consumer-successor/{review,findings,consumer-cone,final-checks,scoped-policy-checks}.json`. Original native author, source-reading evidence and prior repairs remain historical; this entry is current focused authoring readiness, not an independent audit or native approval. Inherited invariants-global-extension-domain is at its second and final repair cycle; distinct successor findings use their first cycle. No source1/9 carrier edits or active native48/75 writes were made.
