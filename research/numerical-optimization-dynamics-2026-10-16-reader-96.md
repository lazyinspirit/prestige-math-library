# Step 3a reader report — batch 96

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `96`  
Role: independent reader

## Opened inventory

Reviewed both assigned pages:

- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/discrete-continuous-and-pde-adjoint-sensitivities.md`
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/discrete-continuous-and-pde-adjoint-sensitivities-examples.md`

Reviewed all nine required pages: `data-assimilation-variational-and-ensemble-methods`, `automatic-differentiation-and-computational-graphs`, `nonlinear-boundary-value-solvers`, `global-ode-and-density-error`, `runge-kutta-methods-and-order`, `ceas-lemma-and-aubin-nitsche-error-estimates`, `parabolic-finite-element-methods`, `implicit-stiff-time-stepping-and-algebraic-error`, and `variational-crimes-and-strang-lemmas`.

Reviewed all 27 assigned items in dependency order.

**A-page items (19):**

`def-parameterized-finite-state-step-objective`; `def-parameterized-elliptic-variational-problem`; `def-parameterized-parabolic-variational-problem`; `lem-parameter-ode-flow-tangent-on-common-tube`; `lem-ode-adjoint-pairing-integration-by-parts`; `thm-discrete-adjoint-gradient-recursion`; `thm-continuous-ode-adjoint-gradient-formula`; `lem-local-c1-step-consistency-implies-tangent-adjoint-gradient-order`; `lem-explicit-rk-differentiated-stages-give-local-c1-order`; `thm-discrete-continuous-gradient-error-order-p`; `lem-implicit-rk-stage-jacobian-nonsingular-on-branch`; `thm-implicit-rk-stage-parameter-sensitivity`; `lem-elliptic-state-map-c1-under-uniform-coercivity`; `thm-elliptic-adjoint-reduced-gradient`; `thm-elliptic-fe-gradient-error-in-energy-norms`; `cor-elliptic-l2-gradient-rate-under-dual-regularity`; `thm-parabolic-adjoint-gradient-sensitivity`; `thm-parabolic-fe-gradient-error-with-time-dependent-ritz`; `thm-finite-time-tangent-volume-growth-from-qr`.

**B-page items (8):**

`ex-4dvar-discrete-adjoint-gradient`; `ex-implicit-stiff-decay-parameter-fit`; `ex-elliptic-diffusion-coefficient-sensitivity`; `ex-multiple-shooting-sensitivity-jacobian`; `ex-qr-finite-time-volume-growth`; `ex-tent-map-finite-time-sensitivity-growth`; `ex-discrete-terminal-condition-mismatch`; `cex-state-error-alone-does-not-control-gradient`.

Opened the claim-relevant dependency statements and proofs, including the ODE Volterra, mean-value, Gronwall, vector-integral, linear-matrix-ODE, FTC, and chain-rule suppliers; reverse-mode and finite-graph gradient suppliers; explicit and implicit Runge–Kutta stage, order, branch, and global-error suppliers; elliptic Lax–Milgram/adjoint, Banach chain-rule, Céa, Strang, variational-crime, Sobolev (H^1_0), Poincaré, and Hilbert-space suppliers; and the parabolic evolution-pairing, projection-product, Ritz-residual, and semidiscrete energy suppliers. The batch-38 Aubin–Nitsche supplier and the Hilbert/Céa statements were also opened to verify the outstanding dependency defect below.

## Page verdicts

- `discrete-continuous-and-pde-adjoint-sensitivities` (A): **Pass.** Its summary is consistent with the finite-horizon ODE, elliptic, and conditional parabolic sensitivity results. No page-prose defect was found.
- `discrete-continuous-and-pde-adjoint-sensitivities-examples` (B): **Pass.** Its summary accurately describes the examples and counterexamples. No page-prose defect was found.

## Repairs made

Only assigned batch-96 items were edited. No published content, other batch, B-page prose, or planning artifact was edited.

| Item | Repair and evidence |
|---|---|
| lem-parameter-ode-flow-tangent-on-common-tube | Added direct treatment of T = 0, zero state dimension, and zero parameter dimension. Replaced the unsupported secant-remainder shorthand with a uniform derivative-modulus argument on convex neighborhoods, using the opened total-derivative mean-value supplier. The Volterra, Gronwall, vector-integral, and linear-matrix-ODE suppliers support the remaining estimates and tangent existence. |
| lem-ode-adjoint-pairing-integration-by-parts | Made T > 0 explicit, as required by the scalar FTC supplier. Proved the row-vector identity coordinatewise, applying FTC to each scalar component. |
| def-parameterized-parabolic-variational-problem | Made T > 0 explicit so the continuous H-trace and endpoint state values are on a nondegenerate evolution interval. |
| thm-continuous-ode-adjoint-gradient-formula | Made T > 0 explicit; added the direct total-derivative chain-rule dependency. Proved terminal adjoint existence and uniqueness by augmenting (p, 1) in a homogeneous matrix ODE with terminal data. The running-objective derivative now records the uniform remainder and integration argument. |
| thm-elliptic-adjoint-reduced-gradient | Replaced the finite-dimensional chain-rule supplier with the Banach-space chain rule. The proof explicitly applies it to Gamma(theta) = (u_theta, theta) and establishes continuity of the reduced derivative. |
| lem-implicit-rk-stage-jacobian-nonsingular-on-branch | Corrected the input-state symbol to y. Made the closed stage ball, field bound M, derivative bound L, and invariance condition h times norm_infty(A) times M <= R explicit. The proof derives the Lipschitz bound by the mean-value supplier, checks invariance, invokes the contraction supplier, then proves the Jacobian kernel is zero and uses rank-nullity. |
| thm-elliptic-fe-gradient-error-in-energy-norms | Expanded the inverse-matrix argument to derive D(K_h^-1)[z] = -K_h^-1 DK_h[z] K_h^-1 from the inverse-difference identity and the C1 matrix expansion. Clarified the load/form add-subtract decomposition and retained all derivative-data defects. |
| thm-discrete-continuous-gradient-error-order-p | Defined T, N, h, t_n, the N graph transitions, and exact/discrete node states and adjoints. Renamed the continuous adjoint to lambda in this theorem to separate it from the integer order p. The weighted premise and proof now compare hat q_n at the discrete node states and adjoints. |
| thm-parabolic-adjoint-gradient-sensitivity | Made T > 0 explicit, matching the endpoint trace and pairing hypotheses. |
| ex-elliptic-diffusion-coefficient-sensitivity | Added the H1_0(0,1) Hilbert-space supplier, needed by the coercive variational theorem. The verification explicitly checks Hilbert structure, boundedness of the form/load/objective, operator-norm C1 dependence, coercivity, and the weak solution identity. |
| thm-parabolic-fe-gradient-error-with-time-dependent-ritz | Replaced the vague “finite-dimensional application” with exact continuous and semidiscrete adjoint-gradient representations as hypotheses, defines their direct terms r and r_h, and states the direct-term defect as norm(r_h - r) <= epsilon_J. The proof now identifies the discrete representation as an explicit premise and uses the cited adjoint theorem only for the continuous formula. |

Updated the affected rows in `research/numerical-optimization-dynamics-2026-10-16-batch-96.proof-contracts.json`. The matching batch manifest dependencies were updated for the Banach chain-rule, total-derivative chain-rule, and (H^1_0)-Hilbert suppliers. The changed items had no `verification.judge` records to remove.

## Defect outside edit scope

The draft in-run supplier cor-aubin-nitsche-h-r-plus-s-rate-under-primal-and-dual-approximation (batch 38) fixes V = H1_0(Omega), then applies Cea’s theorem in Proof steps 1.2 and 2.1. Its dependencies define H1_0 as a closure in the Sobolev norm but do not establish that H1_0(Omega) is Hilbert. The opened Cea theorem explicitly requires a Hilbert space. The missing supplier is lem-w-one-two-is-a-hilbert-space, which proves H1_0 is a closed Hilbert subspace of H1; it is not in the batch-38 item’s dependency closure. This is an unlicensed inference. Add that supplier or an equivalent proof before accepting the claim.

The assigned consumer `cor-elliptic-l2-gradient-rate-under-dual-regularity` directly depends on this corollary, so the defect lies in its dependency closure. The producer remains outside batch-96 edit scope. Its SHA-256 at split is `0fb4526d46df19509ca94127dbb6c794ebfa50e32bdb66483851b63598cb0018`, matching the observed current bytes.

## Validation and blocker

- Reflow and precheck ran for all eleven changed items. Reflow reported each unchanged; ten proof-bearing items passed precheck, and the changed definition reported zero checked and zero failing.
- The final single batched proof-layout run reported `11 items, 38 steps, 0 defects`.
- `manifest-deps` reported 27 items, zero normalized dependencies, and zero errors. The proof-contract JSON parsed successfully.
- The recomputed run status was `3a-read`, with no in-flight work.

Mathematical blocker: the batch-38 Hilbert-space prerequisite above must be supplied for the assigned gradient-rate consumer. No operational blocker prevented this review.
