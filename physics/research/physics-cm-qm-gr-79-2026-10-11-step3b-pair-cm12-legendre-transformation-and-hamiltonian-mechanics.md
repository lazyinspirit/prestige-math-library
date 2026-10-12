# Step 3b authoring report — pair `cm12-legendre-transformation-and-hamiltonian-mechanics` / `cm12-legendre-transformation-and-hamiltonian-mechanics-examples`

- Run: `physics-cm-qm-gr-79-2026-10-11`; role: beta (batch 28), Step 1 complete initial authoring; 2026-10-11.
- Owned pair: A page `cm12-legendre-transformation-and-hamiltonian-mechanics` (order 135, category `non-relativistic-classical-mechanics`, library `physics`); B page `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` (order 136).
- Owned items in authoring order (dependency level; suppliers before consumers):
  1. `def-cm12-cotangent-momentum` (14, A)
  2. `def-cm12-regularity` (14, A)
  3. `def-cm12-hyperregularity` (15, A)
  4. `def-cm12-hamiltonian` (16, A)
  5. `pthm-cm12-local-legendre` (15, A)
  6. `pthm-cm12-mechanical-hyperregularity` (17, A)
  7. `pthm-cm12-hamilton-equivalence` (18, A)
  8. `pthm-cm12-energy-time` (19, A)
  9. `rem-cm12-singular-models` (19, A)
  10. `ex-cm12-mechanical-legendre-positive-metric` (19, B)
  11. `ex-cm12-pendulum-legendre` (20, B)
  12. `ex-cm12-shifted-momentum` (19, B)
  13. `ex-cm12-regular-not-surjective` (4, B, `domain: mathematics`)
  14. `ex-cm12-moving-coordinates` (20, B)
- Artifacts owed at handoff: the fourteen item carriers under `items/`; the two page carriers under `library/non-relativistic-classical-mechanics/`; `research/physics-cm-qm-gr-79-2026-10-11-batch-28.pages.json`; `.coverage.json`; `.proof-contracts.json`; `.cross-batch-dependencies.json`; `.notes.md`; this report; Step-1 readiness records.

## Scope and inputs

- Read before construction: `AGENTS.md`; `../CLAUDE.md`; `CLAUDE.md`; `SCHEMA.md`; `WORKFLOW.md`; `../PHYSICS-CONTENT-MODEL.md`; the binding owner direction `research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`; the batch dependency levels `research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json` (batch 28 = level 7, requires batch 23; batch 23 complete); the design section `research/plan-non-relativistic-classical-mechanics-track.md` L765 (CM12 reservation and B-side source inventory); `research/plan-spec.json` entries 135/136; the scaffold proof sections `M4` and `E20` and the closure ledger; and the current carriers of every consumed supplier. The dispatcher's output path and pair identity match this report; the plan's `requires` for the A page is preserved verbatim.
- All thirteen physical items carry a nonempty `physical_scope`; the one mathematical example is `domain: mathematics` and depends on mathematics only. No published content, shared plan file, engine state, verdict or mathematical original was edited.

## Design versus plan

- The eight provisional A items of the reservation are delivered one-to-one with kinds preserved: `cm12-cotangent-momentum`→`def-cm12-cotangent-momentum` (def), `cm12-regularity`→`def-cm12-regularity` (def), `cm12-hyperregularity`→`def-cm12-hyperregularity` (def), `cm12-local-legendre`→`pthm-cm12-local-legendre` (pthm), `cm12-hamiltonian`→`def-cm12-hamiltonian` (def), `cm12-hamilton-equivalence`→`pthm-cm12-hamilton-equivalence` (pthm), `cm12-energy-time`→`pthm-cm12-energy-time` (pthm), `cm12-singular-models`→`rem-cm12-singular-models` (rem). Added on the same A page: `pthm-cm12-mechanical-hyperregularity`, the physics identification of the model's charts with hyperregular mechanical chart Lagrangians and their explicit branch Hamiltonians, required by the def/hamiltonian consumers. The B page carries five constructed examples covering the declared themes: positive kinetic metric (one- and two-label data), shifted momentum under a total-derivative modification, the regular-but-not-surjective $\mathcal L(v)=e^{v}$ with branch $H=p\ln p-p$, moving coordinates (spring on a uniformly moving support), plus the planar pendulum as the constraint-elimination instance.
- Local mathematical proof sections: the reservation's `M4` and `E20` are realized in this run's mathematics items on `cm-math-variations` (`def-cm-legendre-map-in-a-time-dependent-chart`, `lem-cm-legendre-map-local-invertibility`, `prop-cm-mechanical-chart-lagrangian-is-hyperregular`, `prop-cm-hamiltonian-branch-identities`, `thm-cm-hamilton-phase-action-stationarity`, `rem-cm-scope-of-the-legendre-map`), consumed as in-run mathematical premises with their exact statements. The published canonical supplier named by the reservation, `thm-euclidean-inverse-function-theorem`, is consumed directly in `pthm-cm12-local-legendre`; `thm-cm-stationarity-iff-euler-lagrange` and `prop-cm-hamiltonian-branch-identities` are the other load-bearing mathematics.
- Page `requires` match the plan exactly: A page `["cm07-stationary-action-and-lagrangian-dynamics"]`, B page `["cm12-legendre-transformation-and-hamiltonian-mechanics"]`. No `undeclared-prereq` or `redundant-prereq` finding names a cm12 page in `validate-plan.mjs --run`.
- Design interactions recorded: the design's "no Dirac constraints claimed" scope is preserved in `rem-cm12-singular-models` and in clause 4 of `pthm-cm12-hamilton-equivalence` (constraints only by elimination); the "moving coordinates" theme is realized as a time-dependent chart computation using the rheonomic covariance theorem, because the model's generalized-coordinate map `X:Ω→Q` of `def-cm07-generalized-coordinates-and-forces` is time-independent by definition. `research/plan-spec.json` entries 135/136 agree with the carriers; its item arrays are empty (prose-track splice), so item scope comes from the linked inventory and this batch's manifest. No other design-versus-plan conflict was found.

## Dependency graph and levels

- Item levels follow the dispatch rule (one plus the maximum level of an in-run `deps` target; published and out-of-run suppliers do not raise levels), were computed mechanically over all run manifests, and carry no cm12 finding in `item-dependency-levels.mjs check --run`. Proven order of the in-run chain: `def-cm12-cotangent-momentum` and `def-cm12-regularity` (both consuming batches 4, 17-19, 23 and root mathematics) → `def-cm12-hyperregularity` → `def-cm12-hamiltonian`; `pthm-cm12-local-legendre` consumes the first two definitions and the mathematical local-inverse items; `pthm-cm12-mechanical-hyperregularity` adds the explicit global branches and Hamiltonian formulas; `pthm-cm12-hamilton-equivalence` consumes those two together with the cm07 equivalence and elimination theorems; `pthm-cm12-energy-time` reads the energy balance through the branch Hamiltonian; the remark and the five examples consume the A-page results (the `e^v` example consumes only mathematics).
- Every outgoing edge to another batch is recorded with consumer-side evidence in `physics-cm-qm-gr-79-2026-10-11-batch-28.cross-batch-dependencies.json` (116 rows: 115 item edges + the A-page → cm07 page edge; B→A edges are same-batch and are not ledger rows). `frontier-dependency-ledger.mjs refresh` accepted it: 116 batch-28 edges, 0 unreviewed, 0 orphaned.

## Source handling

- Coverage: 9 source entries (5 A, 4 B) — D. Tong *Classical Dynamics* §§4.1-4.1.5 (A) and §§4.1.1-4.1.3 (B); K. K. Likharev *Essential Graduate Physics* CM §10.1 on both pages; I. Stewart MIT 8.09/8.309 §1.2 (A: pp8-18; B: pp8-15); Sussman-Wisdom SICM §§3.1-3.1.3 (A) and §3.1.1 (B); D. Cline *Variational Principles* §§8.1-8.3 (A). All 9 entries were fetched and stamped by `source-fetch-check --stamp` with byte counts, SHA-256 prefixes and page counts; 53 harvested results carry dispositions (31 included with item ids, 5 inline, 17 deferred or out-of-scope with per-result reasons, the deferrals naming planned pages such as `cm13-symplectic-geometry-and-canonical-methods` and `cm09-coupled-oscillations-and-approximation`). No source drop or escalation was needed.
- Source caveats carried: Tong §4.1.1's convexity framing of inverse Legendre is not adopted (the pair uses nonsingularity of the velocity Hessian, per the in-run `lem-cm-legendre-map-local-invertibility`), and the source-audit sign slip in the §4.1.1 inverse display is not used; Likharev §10.1 omits regularity hypotheses, which the pair supplies mathematically; SICM §3.1.1's restriction to velocity-quadratic Lagrangians is exactly the model's class; the electromagnetic and quantum-comparison material of Tong, Stewart and Likharev is out of scope for lack of an electromagnetic or quantisation interface.

## Item checkpoints (all authored and re-checked 2026-10-11)

1. `def-cm12-cotangent-momentum` (A, 14). Model momentum $p=\mathsf Mv$, its identification with the fibre derivative $\mathcal L_v$, generalized momenta $G(q)v$ with dimensions, the momentum phase chart and the status/warnings paragraph. Definition.
2. `def-cm12-regularity` (A, 14). Velocity Hessian in both chart types, velocity-regular states and regular presentations, local inverse branch data, scope against hyperregularity. Definition.
3. `def-cm12-hyperregularity` (A, 15). Fibrewise bijectivity with globally defined inverse branch in Cartesian and generalized-coordinate charts, branch vocabulary, regular-versus-hyperregular separation. Definition.
4. `def-cm12-hamiltonian` (A, 16). The Legendre transform $p\cdot v-L$ on the declared inverse branch, Cartesian and coordinate forms, energy dimension, chart/branch/representative dependence. Definition.
5. `pthm-cm12-local-legendre` (A, 15). Computes $L_{vv}=\mathsf M$ and $\widetilde L_{vv}=G(q)$, proves positivity and regularity at every state, and obtains a local $C^1$ inverse branch at every state by the local criterion and the Euclidean inverse function theorem (7 steps).
6. `pthm-cm12-mechanical-hyperregularity` (A, 17). Instantiates the mechanical chart proposition at $(\mathsf M,0,U)$ and $(G,0,\widetilde U)$: global $C^2$ inverse branches $v=\mathsf M^{-1}p$ and $v=G(q)^{-1}p$, and the explicit Hamiltonians $\frac12p\cdot\mathsf M^{-1}p+U$ and $\frac12p\cdot G(q)^{-1}p+\widetilde U$ (4 steps).
7. `pthm-cm12-hamilton-equivalence` (A, 18). Four clauses: potential-branch equivalence of motions, Hamilton system and stationary curves; residual forces as momentum sources; the declared Lagrange equations in a coordinate chart versus the coordinate Hamilton system; and the scleronomic ideal-constraint parametrization case by elimination (8 steps, both directions of every equivalence).
8. `pthm-cm12-energy-time` (A, 19). The branch Hamiltonian equals $K+U$ in the inertial chart, inherits the energy balance $E'=\partial_tU+\sum\langle d_i,x_i'\rangle$ with its conservation case, and equals the mechanical energy in time-independent coordinate charts (4 steps).
9. `rem-cm12-singular-models` (A, 19). Scope: singular velocity Hessians excluded; the mechanical branch never singular; regular does not imply hyperregular (with the explicit $e^v$ witness); constraints only by elimination, Dirac theory not claimed; empirical status.
10. `ex-cm12-mechanical-legendre-positive-metric` (B, 19). One particle in a uniform field with exact maximal solution, and two free labels with unequal masses; explicit fibre map, inverse branch, Hamiltonian and Hamilton equations (6 steps).
11. `ex-cm12-pendulum-legendre` (B, 20). Kinetic metric $ml^2$, substituted Hamiltonian $p^2/(2ml^2)-mgl\cos\theta$, Hamilton system reducing to $\theta''=-(g/l)\sin\theta$, and equivalence with the ideal constrained motion (6 steps).
12. `ex-cm12-shifted-momentum` (B, 19). $F(t,x)=\alpha tx_1$: $p'=p+F_x$, $H'=H-F_t$ read on the shifted momentum, same $x$-curves, and an explicit free computation with $H'=\frac12q^2-qt$ versus $K+U=\frac12q^2$ (6 steps).
13. `ex-cm12-regular-not-surjective` (B, 4, mathematics). $\mathcal L=e^v$: regular at every state, not hyperregular, branch $v(p)=\ln p$ and $H=p\ln p-p$ on $p>0$, Hamilton-equation equivalence with the Euler-Lagrange equation (5 steps).
14. `ex-cm12-moving-coordinates` (B, 20). Spring on a uniformly moving support in co-moving coordinates: substituted Hamiltonian $p'^2/(2m)-v_0p'+\frac12ky^2$ (plus free coordinates), conservation of $H'$, non-conservation of the mechanical energy at rate $-kv_0y$, $H'=E-v_0p'$, and the explicit solution (7 steps).

## Post-handoff Step-1 proof-text repair pass (2026-10-11)

After the handoff, four carriers received proof-text repairs: a LaTeX typo in
`pthm-cm12-mechanical-hyperregularity` step 2.1 (`$\mathbb C^{1}$` to
`$C^{1}$`); the Cartesian-chart notation $H_{q}\to H_{x}$ in clauses 1(b)/2(b)
and steps 1.1/2.2 of `pthm-cm12-hamilton-equivalence` (the second slot of
$H(t,x,p)$; $\widetilde H_{q}$ and the quoted supplier identities are
unchanged); and the companion-page witness wording in `def-cm12-regularity`
and `def-cm12-hyperregularity`, now naming the example
$\mathcal L(v)=e^{v}$ instead of the stale phrase "bounded-gradient example".
No claim, hypothesis, dependency or page placement changed. The manifest
statements of the two affected items, the batch proof contract, and the 12
stale readiness records were regenerated; the final-state checks are recorded
in the batch notes addendum and all pass for this batch. Readiness remains an
authoring disposition; Step 2/3 review follows.

## Checks run on the final carriers

- `precheck.mts` (14 items): `9 checked, 0 failing — all clean` (canonical step numbering adopted for all nine proof items).
- `proof-layout.mjs` (14 items + 2 pages): `16 items, 52 steps, 0 defects`.
- `rendercheck.mjs` (16 files): OK (YAML, KaTeX, math nesting).
- `proof-contract.mjs --strict`: `0 error(s), 0 warning(s), 14/14 item(s) checked`; all eight boundary cases disposed per item. `citation-fidelity.mjs`: every recorded quote appears in its cited item, no widening candidate. `truncated-citation.mjs`: no candidate over the nine proof-bearing items.
- `coverage-checklist.mjs`: `2 page(s), 53 harvested result(s), 0 error(s), 0 warning(s)`; `source-fetch-check.mjs --coverage` (check mode): `9/9 source(s) fetch-verified`.
- `content-policy.mjs` on the manifest: `14 scoped item(s), 0 error(s), 0 warning(s)`; `manifest-deps.mjs`: `14 item(s), 0 normalized, 0 error(s)`; `manifest-integrity.mjs --run`: `158 page(s) owed, 158 in the manifests — no scope drift`.
- `item-dependency-levels.mjs check --run`: no cm12 finding (other batches' empty inventories remain). `depcheck.mjs --run`, `validate-plan.mjs --run`: no cm12 finding. `fwdcheck.mjs --run`: cm12 items `inherited`, no finding. `extcheck.mjs` on the 14 explicit paths: `0 recorded-not-proved, 0 resting on them — OK`.
- Scoped physics-content validation over this batch's items and pages: no batch-28 error. The only findings are seven batch-23 `role-supplier` metadata rows (their `def-cm03-potential-and-mechanical-energy` edge is annotated `physical-assumption` while the supplier is a definition), recorded in the batch notes as a cross-batch finding for the batch-23 owner; no batch-23 carrier was edited.
- `physics-check.mjs --run` and run-wide `proof-contract-coverage.mjs` abort on other batches' empty page inventories (`batch-29`, `cm08`) and are outside this worker's scope.

## Readiness

All 14 items are recorded `ready` with their exact examined dependency lists; no cm12 item is escalated. Step 1 authoring is complete; independent review is Step 2's task, and readiness here is an authoring disposition, not a mathematical approval.
