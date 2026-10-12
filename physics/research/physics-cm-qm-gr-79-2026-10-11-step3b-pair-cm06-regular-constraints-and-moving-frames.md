# Step 3b authoring report — pair `cm06-regular-constraints-and-moving-frames` / `cm06-regular-constraints-and-moving-frames-examples`

- Run: `physics-cm-qm-gr-79-2026-10-11`; role: beta (batch 22), Step 1 authoring; 2026-10-11.
- Owned pair: A page `cm06-regular-constraints-and-moving-frames` (order 123, category `non-relativistic-classical-mechanics`, library `physics`); B page `cm06-regular-constraints-and-moving-frames-examples` (order 124).
- Owned items in authoring order (dependency level; suppliers before consumers):
  1. `def-cm06-holonomic-constraint-model` (9, A)
  2. `post-cm06-ideal-reaction-law` (10, A)
  3. `pthm-cm06-multiplier-balance` (11, A)
  4. `pthm-cm06-rheonomic-power` (12, A)
  5. `def-cm06-moving-frame` (7, A)
  6. `pthm-cm06-inertial-forces` (10, A)
  7. `def-cm06-nonholonomic-model` (9, A)
  8. `rem-cm06-dalembert-vakonomic-distinction` (11, A)
  9. `ex-cm06-bead-on-a-rotating-wire` (13, B)
  10. `ex-cm06-pendulum-tension-and-reaction-power` (13, B)
  11. `ex-cm06-rotating-chart-inertial-terms` (11, B)
  12. `ex-cm06-rolling-disk-model-comparison` (10, B)
- Artifacts owed at handoff: the twelve item carriers under `items/`; the two page carriers under `library/non-relativistic-classical-mechanics/`; `research/physics-cm-qm-gr-79-2026-10-11-batch-22.pages.json`; `.coverage.json`; `.proof-contracts.json`; `.cross-batch-dependencies.json`; `.notes.md`; this report; Step-1 readiness records.

## Scope and inputs

- Read before construction: `AGENTS.md`; `../CLAUDE.md`; `CLAUDE.md`; `SCHEMA.md`; `WORKFLOW.md`; `../PHYSICS-CONTENT-MODEL.md`; the binding owner direction `research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`; the batch dependency levels `research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json` (batch 22 = level 5, requires batches 4 and 19, both complete); the design section `research/plan-non-relativistic-classical-mechanics-track.md` L587 (CM06 reservation and B-side source inventory); `research/plan-spec.json` entries 123/124; the scaffold sections `E5`, `E20`, `E22`, `M1`, `M6` and prose-scaffold `P6`; `closure-ledger.json`; and the current carriers of every consumed supplier.
- This is a physics pair: every item carries `domain: physics` and a nonempty `physical_scope`; mathematical suppliers are imported or in-run local items, and no mathematical item depends on a physics item. Published content, the root mathematics workspace and the plan files were not edited.

## Design versus plan

- The eight provisional A items of the reservation are delivered one-to-one; the reservation's `contract_text` maps as `cm06-holonomic`→`def-cm06-holonomic-constraint-model`, `cm06-ideal-reaction`→`post-cm06-ideal-reaction-law`, `cm06-multiplier-balance`→`pthm-cm06-multiplier-balance`, `cm06-rheonomic-power`→`pthm-cm06-rheonomic-power`, `cm06-moving-frame`→`def-cm06-moving-frame`, `cm06-inertial-forces`→`pthm-cm06-inertial-forces`, `cm06-nonholonomic`→`def-cm06-nonholonomic-model`, `cm06-dalembert-vakonomic-distinction`→`rem-cm06-dalembert-vakonomic-distinction`. The B page (no reserved items) carries four constructed examples covering the declared B themes: bead/pendulum/rotating frame and rolling as distinct models.
- Local mathematical proof sections: `M1` is homed on `CM-Math-geometry`; `M6`, `E5`, `E20`, `E22` on `CM-Math-variations` (`closure-ledger.json`). Their realized in-run math items are consumed at item level: `def-cm-holonomic-constraint-and-ideal-reactions` and `lem-cm-constraint-multipliers-and-accelerations` (M6 side), `prop-cm-ideal-holonomic-system-in-a-time-dependent-chart` (E20: multiplier, preservation, uniqueness), `cex-cm-dalembert-and-vakonomic-evolutions-differ` and `prop-cm-nonholonomic-distribution-is-not-tangent-to-level-sets` (E5), `lem-cm-moving-frame-acceleration-identity` and `lem-cm-skew-matrix-cross-product-correspondence` (M1 side). E22's verification examples (ideal pendulum, rotating hoop reduced energy, rolling acceleration) are realized as mathematics examples on `cm-math-variations-examples`; the B page adds physics-side model checks rather than duplicating them.
- Prose-scaffold `P6` says a constraint "is rheonomic when it depends explicitly on time and scleronomic when it does not". Clause (d) refines this to the precise locus-based definition (`\Sigma=\{(t,x)\in O:x\in N\}$; equivalently membership in the locus is a condition on $x$ alone within $O$), with the operative consequence preserved: scleronomic data satisfy $G_t(t,x)=0$ on $\Sigma$ for every $C^2$ presentation, so the reaction power $-\lambda\cdot G_t$ vanishes and the balance theorems' conservation case applies. This is a precision refinement of an informal phrase, not a dropped claim.
- Plan conflict, resolved in favour of the current plan: the draft A-page carrier added `cm-math-balances` to the two plan-required pages; `validate-plan` flags the extra direct require as `redundant-prereq` (the page already reaches it through `cm-math-variations` and through `cm03-momentum-work-and-energy-balances`). The carrier and manifest now declare exactly `["cm-math-variations","cm03-momentum-work-and-energy-balances"]`; all `cm-math-balances` items used by proofs remain reachable through the closure and are cited at item level.
- No other design-versus-plan conflict was found.

## Dependency graph and levels

- In-run item suppliers authored before consumers: `def-cm06-holonomic-constraint-model` → `post-cm06-ideal-reaction-law` → `pthm-cm06-multiplier-balance` → `pthm-cm06-rheonomic-power`; both theorems also consume the postulate; the two examples consume all four. `def-cm06-moving-frame` → `pthm-cm06-inertial-forces` → chart example. `def-cm06-nonholonomic-model` → remark and rolling example. Levels follow the dispatch rule (one plus the maximum in-run dependency level; published and out-of-run suppliers do not raise levels) and are checked by `item-dependency-levels.mjs check --run` with no cm06 finding. Batch 4 (`cm-math-variations`) and batch 19 (`cm03-momentum-work-and-energy-balances`) were complete before construction; all other suppliers are published root items or complete earlier batches.
- Actual transitive uses were verified item by item against the current supplier carriers (hypotheses, direction, conventions); each fact link resolves to a declared dependency and each proof step cites only facts and earlier steps. `depcheck` and `manifest-deps` are clean for the batch; the cross-batch input records all 77 outgoing edges with consumer-side evidence.

## Source handling

- Coverage: 12 source entries (7 A, 5 B) — D. Tong *Classical Dynamics* §§2.3.1–2.3.2, 2.5.1, 3.1.1; D. Tong *Dynamics and Relativity* §§6.1–6.2 and 1.2.1; K. K. Likharev *Essential Graduate Physics* CM §§2.1–2.2, 4.6, 4.3; I. Stewart MIT 8.09/8.309 §§1.2, 1.4–1.5, 2.2, Chapter 3; Sussman–Wisdom SICM §1.10.3; D. Cline *Variational Principles* §§5.7, 5.9, 6.5, 6.8–6.9; Cortés–de León–Martín de Diego–Martínez (SIAM J. Control Optim. 2003). All 12 were fetched and stamped (`source-fetch-check`: 12/12 fetch-verified, with byte counts, SHA-256 prefixes and page counts); 49 harvested results carry dispositions (41 included/inline with item ids, 8 out of scope with reasons); recovery attempts are recorded where a first fetch failed.

## Item checkpoints (all authored and re-checked 2026-10-11)

1. `def-cm06-holonomic-constraint-model` (A, level 9). The regular holonomic-constraint datum $(O,k,G)$ on the force branch, locus $\Sigma$, rank hypothesis, instantaneous loci, virtual displacements, permitted velocities, constrained curve families and consistent data, the reaction field and constrained equation, and the corrected locus-based scleronomic/rheonomic classification with the membership characterization, the $G_t|_\Sigma=0$ consequence for every $C^2$ presentation, two counterexamples showing the identity is not a criterion, and rescaling invariance. Checks: precheck n/a (definition); layout/render clean.
2. `post-cm06-ideal-reaction-law` (A, level 10). Adopted d'Alembert condition on $\ker D_xG$, equivalent multiplier representation (mathematics, not a second assumption), intended model identifications, exclusions (sliding friction, unilateral/contact change, rank loss, active drives, capability), and the separation of virtual work from actual work. `physics_review` contract pass.
3. `pthm-cm06-multiplier-balance` (A, level 11). Under (h1)–(h2): unique continuous multiplier $\lambda=\Lambda(t,x,w)$, explicit acceleration, exact solution set of the first-order system with consistent data, unique maximal solution, preservation of the constraint and its derivative, and $R\cdot w=-\lambda\cdot G_t$. Proof 7 steps, 0 defects; contract with boundaries and equivalence cases.
4. `pthm-cm06-rheonomic-power` (A, level 12). Reaction power/work, mechanical-energy balance $E'=\partial_tU+\sum\langle d_i,w_i\rangle-\lambda\cdot G_t$, static scleronomic conservation, integrated work form; [L6] reads the corrected clause (d) only in the sufficient direction. Contract strict.
5. `def-cm06-moving-frame` (A, level 7). Moving spatial chart $(I,c,R)$ of one inertial frame, coordinate curves and derivatives read in the chart, angular velocity in the body convention $\Omega=R^{\mathsf T}R'$ with the conversion to the opposite convention, the four inertial terms $\tau$, curves at rest, and the status (not an inertial frame, not an observer congruence).
6. `pthm-cm06-inertial-forces` (A, level 10). Moving-chart equation $m_i\ddot y_i=R^{\mathsf T}F_i+m_i\tau$, inertial forces as mass multiples (not force-map contributions), and the exact criterion: $\tau\equiv0$ iff $R$ constant and $c$ affine, in which case the chart is an inertial frame's adapted chart and covariance is recovered. Contract with forward/reverse boundary cases.
7. `def-cm06-nonholonomic-model` (A, level 9). Constant-rank affine velocity law $Ax'+b=0$, admissible velocities, Chetaev virtual displacements, d'Alembert model with $R=A^{\mathsf T}\mu$, the holonomic-equivalence classification via $(\Phi,\varrho)$ with the chain-rule identity and the planar no-slip instance, and the scope exclusions.
8. `rem-cm06-dalembert-vakonomic-distinction` (A, level 11). Scope remark separating the d'Alembert and vakonomic prescriptions, citing the proved discrepancy for $z'=xy'$ and the non-integrability proposition, and recording the open questions without any measured value.
9. `ex-cm06-bead-on-a-rotating-wire` (B, level 13). Uniformly rotating frictionless wire plus plane constraint; explicit solutions $r=Ae^{\Omega t}+Be^{-\Omega t}$, multiplier $(2m\Omega r',mg)$, reaction, reaction power $2m\Omega^2rr'$, energy balance with the rheonomic term, rheonomic verdict via the membership form, and finite model data $E(1/2\,\mathrm s)\approx7.524391\,\mathrm J$, $E'\approx29.014883\,\mathrm W$.
10. `ex-cm06-pendulum-tension-and-reaction-power` (B, level 13). Rewritten in the $3N$ setting: circle $x^2+y^2=l^2$ in the plane $z=0$, $k=2$, $O$ excluding the $z$-axis; multiplier pair with vanishing second component; tension $T=m(g\cos\theta+l\theta'^2)$; pendulum equation by tangential projection and its converse; vanishing reaction power; conserved energy; $T=3mg\cos\theta+2E/l$; finite data with $T\ge5\,\mathrm N$ on the reachable arc.
11. `ex-cm06-rotating-chart-inertial-terms` (B, level 11). All four inertial terms at $t=0$ on explicit data, sum $-3e_1-e_2$ equal to $\ddot y(0)$; non-inertial verdict by the criterion; exact return to an inertial description for constant rotation and affine $c$.
12. `ex-cm06-rolling-disk-model-comparison` (B, level 10). Ideal no-slip against frictionless sliding with the same declared reduced data; accelerations, multiplier, vanishing reaction power, ratio of predictions ($2/3$ uniform disk), contact capability $|f|\le3\mu_s mg$, and finite data inside/outside capability. [F5] reads the equivalence criterion for the declared reduced model; step 1.1 verifies the pair directly.

## Authoring review repairs (mathematical closure, same session)

- **Scleronomic/rheonomic clause.** The draft clause (d) contained stray literal `+` characters and an incorrect equivalence ("every nonempty instantaneous locus equals the same set $N$"), which fails for rank-regular data on ambient sets with disconnected time fibers and for the nonempty-slice phrasing. Repaired to the locus-based definition with the membership characterization, the consequence $G_t|_\Sigma=0$ for every $C^2$ presentation, two counterexamples (a rank-violating $(x_1-t)^2$ presentation of a moving locus; a rank-regular presentation on $((0,1)\cup(2,3))\times\mathbb R^{3N}$ with $G_t=0$ on a non-scleronomic locus), and the corrected rescaling invariance. Consumers re-read and, where they restated the definition, restated in the membership form (`pthm-cm06-rheonomic-power` [L6]; bead [F2] and step 1.1; pendulum [F2]).
- **Pendulum example conformed to the framework's $3N$ setting** (see checkpoint 10), including hypothesis (h1) of the multiplier-balance theorem on all of $O$.
- **Rolling example classification wording** made explicit for the declared reduced two-coordinate model.
- **A-page `requires` corrected** to exactly the plan's two pages (redundant-prereq warnings removed; closure unchanged).

## Checks run at handoff

- `proof-layout.mjs` on all 12 items and both pages: `14 items, 45 steps, 0 defects`.
- `tsx-run.mjs precheck.mts` on all 12 items: `8 checked, 0 failing — all clean`.
- `rendercheck.mjs` on all 12 items and both pages: OK (KaTeX, YAML, math nesting).
- `proof-contract.mjs --strict`: `0 error(s), 0 warning(s), 9/9 item(s) checked`; `proof-contract-coverage.mjs` (batch overlay): `12 item(s), 7/7 supplied argument(s) covered`.
- `content-policy.mjs` item mode: `12 scoped item(s), 0 error(s), 0 warning(s)`; `manifest-deps.mjs`: `12 item(s), 0 normalized, 0 error(s)`; `manifest-integrity.mjs --run`: 158/158 pages, no scope drift.
- `coverage-checklist.mjs`: `2 page(s), 49 harvested result(s), 0 error(s), 0 warning(s)`; `source-fetch-check.mjs --coverage`: `12/12 source(s) fetch-verified`.
- `item-dependency-levels.mjs check --run` and `depcheck.mjs --run`: no cm06 finding; `validate-plan.mjs` shows pages 123/124 with 8/4 items, no cm06 finding; `extcheck.mjs` green.
- `frontier-dependency-ledger.mjs refresh`: batch 22 reviewed, all 77 batch-22 consumer edges recorded verified, no orphaned review from batch 22; two consumer page edges into cm06 (batch 23 `cm07`, batch 27 `cm11`) await their consumer batches.
- `fwdcheck.mjs`: the 12 cm06 items are marked "inherited" from published suppliers' load-bearing forward edges; no cm06-caused finding.

## Readiness

- All 12 items are recorded `ready` with their exact examined dependency lists after the final carrier and manifest rebuild, and re-recorded once more after the operator's re-import of the shared snapshot `items/def-finite-sum.md` (a transitive input); `step1-decisions.mjs check` shows no cm06 work row. The pending re-import of `items/def-integer-power.md` is a shared ancestor in every closure and will mechanically invalidate records again until the operator finishes the import reconciliation; no batch-22 carrier change is implied. No item of this batch is escalated.
- Step-1 readiness is an authoring disposition; independent review, contract audit and the engine gate follow in later steps. Batch-owned dependency evidence and the run-level findings outside this batch are recorded in `.notes.md`.
