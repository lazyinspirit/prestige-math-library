# Step 3a reader report — batch 30

Run: `numerical-analysis-remaining-71-2026-10-17`  
Batch: `30`  
Role: reader

## Scope and inventory

At review start, `.autopilot/numerical-analysis-remaining-71-2026-10-17` reported the run as live in `3a-read`, with no workers running. The assigned batch manifest was read directly. Both assigned pages and all 30 listed items were opened; item review followed the manifest dependency levels, with the A page before its B examples.

- A page: `riemann-solvers-for-hyperbolic-systems` at `library/numerical-pdes-and-spatial-discretization/riemann-solvers-for-hyperbolic-systems.md`.
- B page: `riemann-solvers-for-hyperbolic-systems-examples` at `library/numerical-pdes-and-spatial-discretization/riemann-solvers-for-hyperbolic-systems-examples.md`.
- A items, in dependency order:
  - Level 0: `def-hyperbolic-system-and-characteristic-families`.
  - Level 1: `def-rankine-hugoniot-and-lax-shocks`, `lem-smooth-simple-characteristic-eigenpairs`, `def-ideal-gas-euler-state-and-pressure`, `def-roe-linearization-and-flux`, `def-hll-two-wave-flux`, `def-scalar-convex-entropy-admissibility`.
  - Level 2: `def-local-rarefaction-curve`, `lem-rankine-hugoniot-jump-is-a-weak-solution`, `lem-local-characteristic-shock-curve`, `thm-one-dimensional-ideal-gas-euler-eigenstructure`, `def-euler-star-pressure-response`, `thm-roe-flux-is-consistent-and-conservative`, `thm-hll-flux-is-consistent-and-conservative`.
  - Level 3: `lem-euler-acoustic-wave-pressure-response`, `lem-local-rarefaction-fan`, `lem-linearly-degenerate-characteristic-contact`.
  - Level 4: `thm-euler-star-pressure-root-and-vacuum-criterion`, `def-mixed-characteristic-wave-curve`.
  - Level 5: `alg-safeguarded-euler-star-pressure-solver`, `lem-mixed-wave-curves-are-c1`.
  - Level 6: `lem-euler-pressure-solver-bracket-and-termination`, `thm-local-small-data-riemann-solver`.
  - Level 7: `def-godunov-flux-from-a-local-riemann-solver`.
  - Level 8: `thm-godunov-flux-is-consistent-and-conservative`.
- B items: `cex-roe-jump-property-does-not-imply-entropy-admissibility`, `ex-ideal-gas-contact-discontinuity`, `ex-euler-vacuum-threshold-boundary`, `ex-sod-tube-pressure-root`, `ex-acoustic-system-local-riemann-solution`.
- Direct prerequisite items opened: `def-c-one-map-and-local-inverse`, `def-ck-euclidean-maps-and-diffeomorphisms`, `thm-euclidean-implicit-function-theorem`, `thm-heine-cantor-metric`, `thm-c2-ode-flow-on-common-tube`, `cor-uniform-picard-lindelof-for-nearby-initial-values`, `thm-intermediate-value`, `alg-finite-budget-newton-for-vector-residuals`, and `alg-newton-correction-for-vector-residuals`.
- The two page prerequisites were opened: `nonlinear-equations-and-newton-methods` and `periodic-orbit-shooting-collocation-and-floquet-error`. The batch proof-contract file was also read and updated for the repairs below.

## Repairs and mathematical evidence

1. **Weak-solution integrals were not fully specified.** In `def-hyperbolic-system-and-characteristic-families`, the distributional identity was stated for a locally bounded map without requiring measurability or local integrability of `f(u)`. The integral would not be defined for all such maps. The definition now explicitly requires Lebesgue measurability and `f∘u ∈ L¹_loc`; local boundedness supplies local integrability of `u`. `def-scalar-convex-entropy-admissibility` now uses that weak-solution definition, specifies the domains and componentwise convexity of its entropy pair, and requires `η∘u,q∘u ∈ L¹_loc` before asserting the distributional entropy inequality. The Burgers counterexample still has these properties.

2. **The Roe definition omitted diagonal continuity from its cited convention.** LeVeque, *Numerical Methods for Conservation Laws*, Ch. 14 §14.2, printed p. 149 (PDF pp. 149–150), lists exact flux-jump matching, real diagonalizability, and consistency as the two states approach the diagonal. The original item required only the pointwise identity `A(u,u)=Df(u)`. The definition now also requires continuity at every diagonal pair. The Burgers witness in `cex-roe-jump-property-does-not-imply-entropy-admissibility` explicitly verifies this continuity for `ã(uL,uR)=(uL+uR)/2`; its entropy production remains `2/3>0`.

3. **A proof citation named a nonexistent step.** In `lem-euler-acoustic-wave-pressure-response`, proof step 3.1 referred to “steps 1.2–2.2”; the proof has no step 2.2. It now cites steps 1.2 and 2.1, which establish the density ratio and shock speed identities used for the Lax inequalities. The calculations agree with the ideal-gas shock relations in LeVeque, Ch. 9 §9.2, printed pp. 91–93.

4. **The local Riemann proof did not place the IFT solution inside its claimed strength cube.** In `thm-local-small-data-riemann-solver`, the implicit function theorem gave a continuous strength map into a neighborhood `Q`, but the proof only chose a cube contained in `Q`. The proof now chooses the cube first and uses continuity of the IFT strength map at $(\bar u,\bar u)$ to shrink the data radius so its image lies in that cube. The ordered wave construction, shock/rarefaction/contact cases, and wave-speed separation were checked against the local construction in Bressan, *Hyperbolic Conservation Laws: An Illustrated Tutorial*, §§3.3–3.4, printed pp. 24–29, and against the item’s own elementary-wave suppliers.

5. **Consumer impact.** The weak-solution clarification was checked against the batch’s jump, fan, contact, local-solver, Burgers, and acoustic consumers; their constructed profiles are measurable and have locally integrable fluxes. The current-run dependency closure also reaches batch 33 and batch 36. I opened the direct batch-33 consumers `def-pe03-system-entropy-pair-and-potential` and `def-pe03-first-order-hll-finite-volume-update`, and the batch-36 consumers `def-pe04-flux-differencing-sbp-systems` and `thm-pe04-flux-differencing-sbp-conservation-and-entropy-stability`. They use the conservation-system, HLL, entropy-pair, and SBP clauses; the clarified weak-solution well-definedness clause does not change those claims. No other-batch files were edited.

Other source sections consulted for the assigned claims were Bressan §§2.2–2.3, printed pp. 13–15 (Rankine–Hugoniot and entropy admissibility); LeVeque Ch. 13 §13.2, printed pp. 138–140 (Godunov flux); and Ketcheson, LeVeque, and del Razo, [HLL solver derivation](https://www.clawpack.org/riemann_book/html/Shallow_water_approximate.html), which gives the intermediate-state conservation equation and explicitly treats enclosing wave speeds as a separate solver choice. The two Newton algorithm prerequisites and their cited context were checked against Hairer and Wanner, Ch. VI §VI.3, printed pp. 138–141, and Driscoll and Braun, [§4.5.2](https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html). These sources support the context; the batch’s local proofs supply the stated new brackets and finite-budget guarantees.

## Reflow and precheck

Reflow ran for each of the six edited items. It reflowed `cex-roe-jump-property-does-not-imply-entropy-admissibility`; the other five items were unchanged by reflow. Precheck passed for all six: the three definitions had zero proof sections to check, and each of the three proof-bearing items reported one proof checked with zero failures. The batch proof contracts were updated, including all in-batch quotations of the revised definitions and the three edited derivation rows. No `verification.judge` record was present on the edited items, and no judge stamp was added.

The required final layout pass was run once on all changed item paths:

```text
node tools/proof-layout.mjs items/def-hyperbolic-system-and-characteristic-families.md items/def-scalar-convex-entropy-admissibility.md items/def-roe-linearization-and-flux.md items/cex-roe-jump-property-does-not-imply-entropy-admissibility.md items/lem-euler-acoustic-wave-pressure-response.md items/thm-local-small-data-riemann-solver.md
proof-layout: 6 items, 12 steps, 0 defects
```

## Page verdicts and handoff

- **A — `riemann-solvers-for-hyperbolic-systems`:** the stated local scope, Euler pressure criterion, finite-budget solver, Roe/HLL qualifications, and Godunov flux claims agree with the reviewed items. The repairs above are complete; no uneditable defect remains.
- **B — `riemann-solvers-for-hyperbolic-systems-examples`:** all five examples and the Burgers entropy counterexample agree with their suppliers and stated hypotheses. The Roe witness was updated for the clarified diagonal-continuity condition. No uneditable defect remains.
- **Uneditable defects:** none.
- **Blocker:** none.

Coverage limitation: I reviewed the direct prerequisite interfaces used by this batch and the specified consumer impact, but did not recursively re-audit the complete dependency closures of already-published prerequisite theorems. I relied on their current statements as established premises where used.
