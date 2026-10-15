# Reader report — batch 30

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: Step 3a reader  
Scope: batch `30`

## Inventory opened

### Assigned pages

- `rpm-radiation-models` — `library/relativistic-particle-mechanics/rpm-radiation-models.md`
- `rpm-radiation-models-examples` — `library/relativistic-particle-mechanics/rpm-radiation-models-examples.md`

### Assigned items, reviewed in dependency order

- `lem-rpm-ll-reduced-ode`
- `post-rpm-lad-effective-equation`
- `lem-rpm-reduction-residual`
- `rem-rpm-self-force-status`
- `ex-rpm-al-future-boundary-preacceleration`
- `cex-rpm-lad-force-free-runaway`

### Dependency context opened

- Geometry and regularity: `def-sr-affine-minkowski-model`, `def-inertial-frame-and-inertial-chart`, `def-time-orientation-and-future-causal-sets`, `def-directional-and-partial-derivatives`, `def-rpm-spacetime-observer-and-worldline`.
- Local ODE and differential calculus: `thm-picard-lindelof-local-existence-and-uniqueness`, `def-first-order-ode-initial-value-problem-and-solution`, `def-locally-lipschitz-in-the-state-variable`, `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`, `lem-picard-operator-preserves-a-closed-curve-ball`, `lem-picard-operator-is-a-short-time-contraction`, `lem-vector-valued-continuous-curve-space-is-complete`, `cor-mean-value-theorem`, `thm-intermediate-value`, `thm-extreme-value-metric`, `thm-heine-borel-rn`, `thm-algebra-of-derivatives`, `thm-chain-rule`, `thm-chain-rule-for-total-derivatives`.
- Integration, exponential, and metric facts: `thm-continuous-implies-integrable`, `cor-integrability-of-absolute-values-products-and-lattice-operations`, `thm-linearity-of-the-integral`, `thm-monotonicity-of-the-integral`, `thm-ftc-first-part`, `thm-derivative-of-exponential`, `thm-exponential-is-strictly-increasing`, `def-real-exponential-function-and-e`, `cor-exponential-reciprocal-and-positivity`, `thm-exponential-limits-and-range`, `lem-integral-elementary-bounds`, `lem-metrics-on-rn`, `def-metric-topology`, `def-metric-compactness`, `lem-of-triangle-inequality`.
- Model and source definitions: `def-rpm-charge-spin-model`, `def-em-electromagnetic-tensor`, `def-em-si-conventions`, `def-rpm-body-moments`, `def-hyperbolic-functions`, `thm-hyperbolic-identities-and-derivatives`.

The source passages checked were Landau and Lifshitz, *The Classical Theory of Fields*, §§75–76 (printed pp. 222–229); Zhang, “Pre-acceleration from Landau-Lifshitz Series,” §2, Eqs. (2.1)–(2.6), and Appendix A, Eqs. (A.1)–(A.4); Poisson, Pound, and Vega, “The Motion of Point Particles in Curved Spacetime,” §§22.1–22.6; Gralla, Harte, and Wald, “A Rigorous Derivation of Electromagnetic Self-force,” §II assumptions (i)–(ii), §IV, and §§V–VI; and the cited BIPM SI Brochure §2.3.1. The local mathematical arguments, not these physics sources, establish the ODE examples and estimates.

## Review and repairs

### `lem-rpm-ll-reduced-ode`

The local existence statement follows from Picard–Lindelöf: the displayed full-state vector field is C¹ on the open coordinate state domain. I repaired step 1.1’s inference from bounded multivariable derivatives to local Lipschitz continuity. The former line-segment appeal did not state the multivariable chain rule needed for that restriction. The replacement bounds each component by changing the eight coordinates one at a time, applying the supplied one-variable mean-value theorem to each coordinate segment, and then converting the coordinate sum to the Euclidean norm.

I also completed step 2.1’s future-cone argument. It now proves both directions of the characterization that a timelike vector is future exactly when its zeroth component is positive in the chosen inertial frame, before using continuity and the intermediate value theorem to preserve the sign along the solution. The shell calculation in step 1.2 is valid off shell as the scalar equation $h'=(2\tau_e/c^2)\eta(U,B)h$, with $h=\eta(U,U)+c^2$; scalar uniqueness therefore preserves the shell.

The proof contract derivations for steps 1.1 and 2.1 were updated to match the repaired arguments. The item had no `verification.judge` record to remove. Reflow reported unchanged; scoped precheck passed (`PASS ... (direct)`).

### `post-rpm-lad-effective-equation`

I made the approximation caveat’s “instantaneous rest frame” precise by defining it locally as the pointwise tuple at $x(\tau)$ with time vector $U(\tau)/c$, a positively oriented orthonormal spatial basis of $U(\tau)^\perp$, and the induced rest-space norm. The equation and its status as an adopted model premise are unchanged, and no prerequisite edge was added. Its formulation-contract evidence was updated. The item had no `verification.judge` record to remove.

I traced its item consumers after this physical-interface clarification. `cex-rpm-lad-force-free-runaway` uses the displayed force-free equation and does not invoke the rest-frame validity caveat; `rem-rpm-self-force-status` uses the adopted-model status and likewise does not invoke the caveat. The A-page summary and examples-page summary remain accurate. Reflow reported unchanged; scoped precheck passed (`PASS ... (nonproof structure)`).

### Other assigned items

`lem-rpm-reduction-residual` has two separate conditional results. For the LAD residual estimate, differentiating the Lorentz-force term gives $\dot f_0-B=\alpha F\delta$; orthogonal projection of the LAD bracket yields the displayed $P(C_1+AM C_0)\varepsilon^2$ bound under the stated uniform assumptions. The finite-interval comparison proves the integral inequality and exponential-factor estimate with a common compact region and full-interval solutions; it does not claim LAD existence or convergence.

`post-rpm-lad-effective-equation` is explicitly an adopted effective equation, not a deduction from a self-field or a source-backed observation. `rem-rpm-self-force-status` accurately distinguishes that premise from the conditional shrinking-body result of Gralla, Harte, and Wald; its summary of their scaling, field, and conservation assumptions matches §II, and its account of the perturbative correction and qualified reduction of order matches the cited sections. Poisson, Pound, and Vega discuss the singular point-charge field, singular/regular split, tail, and formal equation of motion in the cited sections; the item does not present that review as an unconditional point-source derivation.

`ex-rpm-al-future-boundary-preacceleration` correctly solves the separately stated scalar ODE: the integral obeys $I'=-F_{\rm ext}+I/\tau_e$, is zero after the pulse, and is strictly positive before it. The difference of two candidate solutions is $Ce^{t/\tau_e}$, so future decay forces $C=0$. This is a property of the stated equation and boundary condition, not an observation. Zhang §2, Eq. (2.6), gives the same future-selected integral after the substitution $s=(s'-t)/\tau_e$.

`cex-rpm-lad-force-free-runaway` constructs a smooth all-time rapidity solution. Direct differentiation gives the force-free LAD equation and $\sqrt{\eta(a,a)}=c|A|e^{(\tau-\tau_0)/\tau_e}$, which is unbounded to the future. The claim is correctly limited to the adopted ODE, not finite-body electrodynamics or an empirical result. Zhang Appendix A, Eqs. (A.1)–(A.4), gives the corresponding one-dimensional rapidity equation; the displayed branch is established by the item’s calculation.

## Page verdicts

- `rpm-radiation-models`: **pass** on the authored mathematics, model scope, and summary after the repairs above.
- `rpm-radiation-models-examples`: **pass** on both conditional example calculations and the page summary.

No confirmed content defect remains in the assigned batch. No item was withdrawn, and no defect requiring an out-of-scope repair was found.

## Validation and blocker

Scoped `reflow.mts` and `precheck.mts` passed for both changed items. The required final batched `proof-layout.mjs` command was attempted after the final edits but failed before inspecting either item: its renderer could not resolve the application alias `@/components` imported from `prestige-intelligence/web/components/library/ItemBody.tsx` (`ERR_MODULE_NOT_FOUND`). Proof-layout status is therefore unavailable; this is the handoff blocker. No external application or tool files were changed to work around it.
