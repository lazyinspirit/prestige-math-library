# Step 3b authoring report — pair `cm07-stationary-action-and-lagrangian-dynamics` / `cm07-stationary-action-and-lagrangian-dynamics-examples`

- Run: `physics-cm-qm-gr-79-2026-10-11`; role: beta (batch 23), Step 1 complete initial authoring; 2026-10-11.
- Owned pair: A page `cm07-stationary-action-and-lagrangian-dynamics` (order 125, category `non-relativistic-classical-mechanics`, library `physics`); B page `cm07-stationary-action-and-lagrangian-dynamics-examples` (order 126).
- Owned items in authoring order (dependency level; suppliers before consumers):
  1. `def-cm07-action-and-mechanical-lagrangian` (12, A)
  2. `pthm-cm07-first-variation-and-euler-lagrange-expression` (13, A)
  3. `pthm-cm07-euler-lagrange-equations` (14, A)
  4. `pthm-cm07-newton-equivalence` (15, A)
  5. `pthm-cm07-coordinate-covariance-of-the-equations` (15, A)
  6. `pthm-cm07-boundary-terms-and-gauge` (15, A)
  7. `def-cm07-generalized-coordinates-and-forces` (13, A)
  8. `lem-cm07-immersion-euler-lagrange-transport` (0, A, mathematical lemma)
  9. `pthm-cm07-lagrangian-reduction-of-ideal-constraints` (14, A)
  10. `rem-cm07-scope-and-singular-warnings` (15, A)
  11. `ex-cm07-free-particle-straight-lines` (16, B)
  12. `ex-cm07-oscillator-stationary-saddle-check` (15, B)
  13. `ex-cm07-polar-coordinate-kinetic-metric-check` (16, B)
  14. `ex-cm07-total-derivative-gauge-check` (16, B)
  15. `ex-cm07-nonholonomic-unrestricted-action-fails` (9, B)
  16. `ex-cm07-pendulum-constraint-elimination-check` (15, B)
- Artifacts owed at handoff: the sixteen item carriers under `items/`; the two page carriers under `library/non-relativistic-classical-mechanics/`; `research/physics-cm-qm-gr-79-2026-10-11-batch-23.pages.json`; `.coverage.json`; `.proof-contracts.json`; `.cross-batch-dependencies.json`; `.notes.md`; this report; Step-1 readiness records.

## Scope and inputs

- Read before construction: `AGENTS.md`; `../CLAUDE.md`; `CLAUDE.md`; `SCHEMA.md`; `WORKFLOW.md`; `../PHYSICS-CONTENT-MODEL.md`; the binding owner direction `research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md`; the batch dependency levels `research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json` (batch 23 = level 6, requires batches 12 and 22; batch 12 complete, batch 22 complete); the design section `research/plan-non-relativistic-classical-mechanics-track.md` L617 (CM07 reservation and B-side source inventory); `research/plan-spec.json` entries 125/126; the scaffold proof sections `E4`, `E19`, `E20`, `M3`, `M5` and the closure ledger; and the current carriers of every consumed supplier.
- All 16 items carry explicit `dependency_roles`; the fifteen physical items carry a nonempty `physical_scope`; the one mathematical lemma is `domain: mathematics` and depends on root mathematics only. No published content, shared plan file, engine state or mathematical original was edited.

## Design versus plan

- The eight provisional A items of the reservation are delivered one-to-one with kinds preserved: `cm07-action`→`def-cm07-action-and-mechanical-lagrangian` (def), `cm07-first-variation`→`pthm-cm07-first-variation-and-euler-lagrange-expression` (pthm), `cm07-el`→`pthm-cm07-euler-lagrange-equations` (pthm), `cm07-newton-equivalence`→`pthm-cm07-newton-equivalence` (pthm), `cm07-coordinate-covariance`→`pthm-cm07-coordinate-covariance-of-the-equations` (pthm), `cm07-boundary-gauge`→`pthm-cm07-boundary-terms-and-gauge` (pthm), `cm07-generalized-force`→`def-cm07-generalized-coordinates-and-forces` (def), `cm07-singular-warning`→`rem-cm07-scope-and-singular-warnings` (rem). The B page (no reserved items) carries six constructed examples covering the declared B themes: stationary saddle, total derivatives, coordinate kinetic metric, and the invalid unrestricted nonholonomic action, plus the free particle minimisation and the pendulum elimination.
- Local mathematical proof sections of the reservation: `E4` (time-dependent coordinate covariance and the complete Noether identity), `E20` (rheonomic acceleration, Hamilton phase action and endpoint action) and `M3`/`M5` (finite-interval first variation; point symmetry and boundary terms) are materially realized as the in-run mathematics items `prop-cm-coordinate-covariance-of-the-euler-lagrange-expression`, `lem-cm-first-variation-formula`, `thm-cm-stationarity-iff-euler-lagrange`, `prop-cm-lagrangian-boundary-terms-and-scaling` and `prop-cm-mechanical-chart-lagrangian-is-hyperregular` on `cm-math-variations`; `E19`'s saddle example is realized by the in-run `prop-cm-oscillator-second-variation-signs` (on `cm-math-verification`) and, for the physical oscillator, by the self-contained computation of `ex-cm07-oscillator-stationary-saddle-check`.
- Published canonical mathematical suppliers named by the reservation are consumed: `thm-chain-rule-for-total-derivatives`, `thm-integration-by-parts` and `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle` (the last transitively through `lem-cm-first-variation-formula`), together with the root items listed in each carrier.
- Page `requires` match the plan exactly: A page `["cm-math-verification","cm06-regular-constraints-and-moving-frames"]`, B page `["cm07-stationary-action-and-lagrangian-dynamics"]`. **Recorded design/plan resolution:** an initial draft of the oscillator example depended on `lem-cm-cosine-sine-orthogonality-and-odd-extension`, which is homed on the out-of-closure page `cm-math-continuum`; `validate-plan` reported the resulting `undeclared-prereq`. The example now proves the two integrals $\int_0^T\sin^2(n\pi t/T)dt=T/2$ and $\int_0^T\cos^2(n\pi t/T)dt=T/2$ inline from the product-to-sum identity and the fundamental theorem, so no page-level requirement had to be added and the plan's `requires` are preserved verbatim.
- No other design-versus-plan conflict was found.

## Dependency graph and levels

- Item levels follow the dispatch rule (one plus the maximum level of an in-run `deps` target; published and out-of-run suppliers do not raise levels) and were computed mechanically over all run manifests with the `dependencyLevels` implementation behind `item-dependency-levels.mjs`; the sixteen labels above are the computed values, with no cm07 finding in the check output.
- Proven order of the in-run chain: `def-cm07-action-and-mechanical-lagrangian` → `pthm-cm07-first-variation-and-euler-lagrange-expression` → `pthm-cm07-euler-lagrange-equations` → `pthm-cm07-newton-equivalence`; `pthm-cm07-coordinate-covariance-of-the-equations` and `pthm-cm07-boundary-terms-and-gauge` consume the first three; `def-cm07-generalized-coordinates-and-forces` is independent of the chain up to `def-cm07-action-and-mechanical-lagrangian`, `lem-cm07-immersion-euler-lagrange-transport` is a purely mathematical prerequisite, and `pthm-cm07-lagrangian-reduction-of-ideal-constraints` consumes the two of them together with the cm06 constraint machinery; the remark and the six examples consume the A-page results. No cycles, no forward references and no missing prerequisites; the deepest in-run suppliers (batches 4, 12, 17-19, 22) were all complete before construction.
- Every outgoing edge to another batch is recorded with consumer-side evidence in `physics-cm-qm-gr-79-2026-10-11-batch-23.cross-batch-dependencies.json` (94 rows: 92 item edges + the two A-page page edges; B→A edges are same-batch and are not ledger rows). `frontier-dependency-ledger.mjs refresh` accepted the file.

## Source handling

- Coverage: 10 source entries (6 A, 5 B, with Tong, Cline and Likharev reuse across the pages) — D. Tong *Classical Dynamics* §§2.1-2.3, 2.5.7; D. Cline *Variational Principles* §§5.1-5.3, 5.7-5.9, 6.1-6.5, 6.8-6.9, 8.1-8.2, 9.3; K. K. Likharev *Essential Graduate Physics* CM §§1.1-1.4, 2.1-2.2, Ch. 5 §5.1; I. Stewart MIT 8.09/8.309 §§1.2, 1.4-1.5, Ch. 2, §7.1.1; Sussman-Wisdom SICM §1.10.3; Cortés-de León-Martín de Diego-Martínez (SIAM J. Control Optim. 2003) §§1, 2, 5. All 10 entries were fetched and stamped (`source-fetch-check`: 10/10 fetch-verified with byte counts, SHA-256 prefixes and page counts); 46 harvested results carry dispositions (35 included with item ids, 11 out of scope with specific reasons); no source drop or escalation was needed.

## Item checkpoints (all authored and re-checked 2026-10-11)

1. `def-cm07-action-and-mechanical-lagrangian` (A, level 12). Kinetic energy as the quadratic form of the mass operator, the mechanical Lagrangian $K-U$ of a declared potential presentation, the chart instance of the mathematical action, fixed-endpoint variations and stationarity, dimensions ($[L]=\mu\ell^2\tau^{-2}$, $[S]=\mu\ell^2\tau^{-1}$), the potential-representative ambiguity and the status clause. Definition; layout/render clean.
2. `pthm-cm07-first-variation-and-euler-lagrange-expression` (A, level 13). First variation in model terms and the identity $E_L(x)=-(\mathsf Mx''+\nabla_xU)$; proof instantiates the mathematical chart and first-variation suppliers and evaluates the two gradients (4 steps).
3. `pthm-cm07-euler-lagrange-equations` (A, level 14). Equivalence of stationarity, $E_L=0$ and the model's potential-part equation, i.e. the Euler-Lagrange equation of the mechanical Lagrangian is the equation of motion; explicit exclusion of residual forces with a pointer to the generalized-force treatment (4 steps, forward/reverse boundary cases).
4. `pthm-cm07-newton-equivalence` (A, level 15). Stationary-action principle of the global potential branch: motions restrict to stationary curves, and a stationary curve is the restriction of the maximal motion through its datum; the converse uses uniqueness plus the compact continuation criterion on the compact $C^2$ graph (7 steps).
5. `pthm-cm07-coordinate-covariance-of-the-equations` (A, level 15). Time-dependent coordinate maps with invertible Jacobian: the transport identity $E_{\widetilde L}(q)=X_q^{\mathsf T}E_L(x)$, the equivalence of the substituted and Cartesian equations, and the chart statement of stationarity (5 steps).
6. `pthm-cm07-boundary-terms-and-gauge` (A, level 15). Total-derivative Lagrangians change the action by endpoint values only and leave the equations; the potential normalization $U\mapsto U+c(t)$ is the special case $F=-C$ with $C'=c$; nonzero rescalings preserve the stationary curves (5 steps).
7. `def-cm07-generalized-coordinates-and-forces` (A, level 13). Generalized-coordinate map (immersion), substituted Lagrangian with kinetic metric $G=DX^{\mathsf T}\mathsf M DX$, coordinate dimensions, generalized forces $Q_f=DX^{\mathsf T}f$, constraint parametrizations and the declared Lagrange equations with residual generalized force; the equivalence statements are deliberately deferred to the theorems.
8. `lem-cm07-immersion-euler-lagrange-transport` (A, level 0, mathematics). For an arbitrary $C^3$ immersion $X$ (no invertibility), $E_{\widetilde L}(q)=DX(q)^{\mathsf T}E_L(x)$ via the chain rule and cancellation of the parametrization-correction terms (5 steps).
9. `pthm-cm07-lagrangian-reduction-of-ideal-constraints` (A, level 14). Scleronomic ideal holonomic branch: on a global parametrization $X(\Omega)=N\cap Q$, a coordinate curve solves the Lagrange equations of $\widetilde L$ with residual generalized force exactly when it describes a constrained motion with ideal reaction; virtual displacements are exactly $\operatorname{im}DX$; the reaction and multiplier are unique (6 steps, both directions).
10. `rem-cm07-scope-and-singular-warnings` (A, level 15). Scope audit: stationarity is not minimisation; the mechanical branch is hyperregular and singular velocity Hessians are excluded; the unrestricted action principle fails for velocity constraints (cited counterexample); empirical status of the reformulation and the list of what is not asserted.
11. `ex-cm07-free-particle-straight-lines` (B, level 16). Free particle: stationary curves are the affine uniform motions, unique between fixed endpoints, and the exact identity $S(x_*+\eta)-S(x_*)=\frac m2\int|\eta'|^2dt\ge0$ proves genuine minimisation in the fixed-endpoint class (5 steps).
12. `ex-cm07-oscillator-stationary-saddle-check` (B, level 15). Exact value $S(\varepsilon\eta_n)=\frac{mT}4\varepsilon^2((n\pi/T)^2-\omega^2)$ from the inline product-to-sum integrals; both signs for $T>\pi/\omega$ and only positive signs for $T<\pi/\omega$ in this variation family (7 steps).
13. `ex-cm07-polar-coordinate-kinetic-metric-check` (B, level 16). Cylindrical chart: $\det DX=r>0$, kinetic metric $m\,\mathrm{diag}(1,r^2,1)$, and the identification of the coordinate Euler-Lagrange equations with $mx''=-\nabla U$ in the orthonormal frame (5 steps).
14. `ex-cm07-total-derivative-gauge-check` (B, level 16). $F(t,x)=\alpha tx$: $E_{L'}=E_L=-mx''$ pointwise, endpoint term $2\alpha$ on the explicit curve, $S=1/2$ and $S'=5/2$ at $\alpha=m=1$, same model equation (5 steps).
15. `ex-cm07-nonholonomic-unrestricted-action-fails` (B, level 9). The d'Alembert motion with the stated data has $y'=(1+t^2)^{-1/2}>0$ and $y''(1/2)=-4/(5\sqrt5)\ne0$, so it is not vakonomic; the unrestricted action principle fails on this branch (5 steps).
16. `ex-cm07-pendulum-constraint-elimination-check` (B, level 15). Pendulum as a global parametrization of a scleronomic datum: $G=ml^2$, $\widetilde L=\frac12ml^2\dot\theta^2+mgl\cos\theta$, reduced equation $\theta''=-(g/l)\sin\theta$, reaction $=\lambda\nabla G$ with the explicit multiplier, consistent with the preceding page's multiplier account (4 steps).

## Authoring review repairs (mathematical closure, same session)

- **Step-numbering canonicalisation.** The proof-layout checker's source inventory and the normative precheck both require one physical line per numbered step with trailing tags, and the repair layer numbers steps by citation depth. All proofs were reflowed to that form; stale bare step references left by renumbering were corrected (`pthm-cm07-first-variation-...` steps 2.1/3.1, `pthm-cm07-euler-lagrange-equations` step 2.1).
- **Missing declared dependencies.** `depcheck` found two links not listed in `deps` and they were added with roles: `lem-cm-first-variation-formula` to `pthm-cm07-euler-lagrange-equations` and `def-cm02-newtonian-flow` to `ex-cm07-free-particle-straight-lines`; levels were recomputed and stay unchanged.
- **Uncited fact.** In `ex-cm07-nonholonomic-unrestricted-action-fails` the setting fact [F4] was cited by no step; step 1.1 now carries [F4], which is its actual use.
- **Out-of-closure dependency removed** as recorded under Design versus plan (inline integral computation replacing the `cm-math-continuum` lemma).

## Checks run on the final carriers

- `precheck.mts` on all 16 items: `13 checked, 0 failing — all clean` (the three definition/remark items have no phase body).
- `proof-layout.mjs` on 16 items + 2 pages: `18 items, 65 steps, 0 defects`.
- `rendercheck.mjs` on 16 items + 2 pages: OK (YAML, KaTeX, no nested or multiline math problems).
- `proof-contract.mjs --strict`: `0 error(s), 0 warning(s), 16/16 item(s) checked` (179 citation excerpts).
- `proof-contract-coverage.mjs` (batch-23 overlay using the same predicate and contract file): `16 item(s), 13/13 supplied argument(s) covered`; the run-wide form aborts on empty inventories of unbuilt pages in other batches.
- `content-policy.mjs` on the batch manifest: `16 scoped item(s), 0 error(s), 0 warning(s)`.
- `manifest-deps.mjs`: `16 item(s), 0 normalized, 0 error(s)`; `manifest-integrity.mjs --run`: `158 page(s) owed, 158 in the manifests — no scope drift`.
- `coverage-checklist.mjs`: `2 page(s), 46 harvested result(s), 0 error(s), 0 warning(s)`; `source-fetch-check.mjs --coverage`: `10/10 source(s) fetch-verified` (check mode).
- `item-dependency-levels.mjs check --run`: no cm07 finding; remaining errors are empty inventories of unbuilt pages in other batches.
- `depcheck.mjs --run`: no cm07 finding (only the two page home listing lines).
- `validate-plan.mjs`: pages 125/126 resolve with 10/6 items and exactly the plan requires; no cm07 finding; run-wide FAIL on other batches' `undeclared-prereq` and `redundant-prereq` items only.
- `frontier-dependency-ledger.mjs refresh --run`: `refreshed and deduplicated`; all 94 batch-23 outgoing rows present, all `verified`.
- `fwdcheck.mjs --run`: all 16 cm07 items `inherited` from published suppliers' edges; no cm07-caused finding. `extcheck.mjs` on the 16 explicit item paths: `28028 items, 0 recorded-not-proved, 0 resting on them — OK`.

## Run-level findings outside batch 23 (recorded, not repaired here)

1. `physics-check.mjs --run` aborts run-wide on `physics-content: Invalid or empty current page in physics-cm-qm-gr-79-2026-10-11-batch-24.pages.json`; the unbuilt later batches' empty inventories are outside this worker's scope, and the same condition blocks the run-wide form of `item-dependency-levels`, `proof-contract-coverage` and `extcheck --run`.
2. `validate-plan.mjs --run` fails only on other batches' `undeclared-prereq`/`redundant-prereq` findings; no cm07 page or item appears in those findings.
3. `step1-decisions.mjs check` reports stale non-ready rows for other scopes; no cm07 row is failing at handoff.

## Readiness

All 16 items are recorded `ready` with their exact examined dependency lists after the final carrier and manifest rebuild (`step1-decisions.mjs record`, then `check`: no cm07 work row). No item of this batch is escalated; no source recovery or owner escalation was required. Step 1 authoring is complete; independent review is Step 2's task, and readiness here is an authoring disposition, not a mathematical approval.
