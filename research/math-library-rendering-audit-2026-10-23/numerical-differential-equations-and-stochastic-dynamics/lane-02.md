# Lane 02 rendering audit

Category: `numerical-differential-equations-and-stochastic-dynamics`  
Assignment: `assignment-02.json`  

## Result

No confirmed LaTeX/TikZ rendering defects or diagram-mathematics defects were found. The 67 frozen item snapshots and all 105 receipt-listed PNG tiles were reviewed. Every tile was opened individually through `tools.view_image(detail="original")`; no collage or downscaling was used. Receipt metadata reports no KaTeX errors, TikZ render failures, or diagram failures for this lane.

No clipping suspicion remained after checking the standalone tiles and adjacent overlap/context.

## Findings

None.

## Existing diagram checks

No existing TikZ diagrams were recorded in the lane receipts (`tikz_count: 0` for every assigned item), so there are no existing diagram labels/maps/crossings to validate.

## Diagram candidates

These are optional editorial candidates, not defects. Each is supported by the frozen source and includes a concrete drawing/check proposal; the exact source line anchors, screenshot paths, and tile hashes are in `lane-02.json`.

### `ex-bouncing-ball-transverse-event-error-and-reset` — Event-time and reset geometry for the bouncing-ball example

- Source lines: [33, 35]
- Kind: phase-plane trajectory and event timeline (editorial candidate; uncertain)
- Source claim: The exact incoming trajectory y(t)=(1-t^2,-2t) hits q=0 at τ=1 with downward orientation; the approximate reconstruction has q-offset 1/25, reported root τhat=sqrt(26/25), and reset R(q,v)=(0,-v/2).
- Draw/check: Plot q versus t and v versus t (or the (q,v) phase curve), mark the exact and reported guard crossings, indicate the downward signed crossing and apply the reset to the reported event state; distinguish the exact event time from the later reported time.

### `ex-natural-parameterization-fails-at-x-squared-fold` — Fold projection and two solution branches

- Source lines: [29, 30]
- Kind: bifurcation curve sketch (editorial candidate; uncertain)
- Source claim: The solution set of x^2-λ=0 has a simple fold at (0,0): no real solution for λ<0, one double solution at zero, and two branches x=±sqrt(λ) for λ>0; λ is not a two-sided local coordinate.
- Draw/check: Draw λ=x^2 in the (λ,x) plane with both branches and the fold point, and show that projection to the λ-axis is not locally one-to-one across the fold.

### `ex-supercritical-hopf-cubic-normal-form` — Planar Hopf phase portrait across the parameter sign

- Source lines: [35, 37, 49, 55]
- Kind: phase portrait with parameter bifurcation inset (editorial candidate; uncertain)
- Source claim: The displayed planar cubic field has polar equations rdot=μr-r^3 and θdot=1; for μ>0 the nonzero radial equilibrium is r=sqrt(μ), with negative radial derivative, yielding a stable periodic orbit of period 2π.
- Draw/check: Show the origin and concentric cycle r=sqrt(μ) for μ>0, radial arrows pointing toward the cycle, counterclockwise angular orientation from θdot=1, and optionally the cycle-radius branch versus μ. Do not depict a cycle for μ≤0.

### `ex-xd-two-state-gating-uniformization` — Two-state gate transition graph with column generator convention

- Source lines: [36, 40]
- Kind: two-state transition graph (editorial candidate; uncertain)
- Source claim: The off-to-on rate is α and on-to-off rate is β; for the column probability vector (p_off,p_on)^T the generator is Q=[[-α,β],[α,-β]], with each source state indexed by a column.
- Draw/check: Draw nodes off/on, directed arrows off→on labelled α and on→off labelled β, and beside it the displayed column generator with column sums zero; indicate the initial off state and p_on(t)=α(1−e^(−(α+β)t))/(α+β) when α+β>0.

### `def-projected-contact-dynamics-and-euler-step` — Projection onto a convex set and outward normal correction

- Source lines: [39, 47]
- Kind: convex geometry schematic (editorial candidate; uncertain)
- Source claim: For p=P_C(y), p lies in C and y−p lies in the outward normal cone N_C(p); projection Euler maps x_k to P_C(x_k+h f(t_k,x_k)) and linearly interpolates consecutive projected nodes.
- Draw/check: Use a simple closed convex planar set as an explicitly illustrative special case; mark trial point y, nearest point p, segment y−p perpendicular to a smooth boundary where applicable, and outward normal cone at p. A separate small step sketch can show x_k+h f projected back to C as x_(k+1), with the affine segment. Do not imply smoothness or uniqueness beyond the convex-projection statement.

### `thm-finite-hybrid-trajectory-error-under-separated-events` — Event-aligned error propagation through mode segments and resets

- Source lines: [36, 44]
- Kind: hybrid time-line with mode-segment state tracks (editorial candidate; uncertain)
- Source claim: Exact event times τ_j precede reported upper-box times τhat_j; compare paths at the reported time in the outgoing mode, propagate aligned start discrepancy E_j through each mode segment and reset to E_(j+1), with lag Δ_(j+1)<δ/3 preserving event order.
- Draw/check: Draw exact and reported trajectories with labeled mode segments, exact event τ_j, later reported event τhat_j, guard bracket/lag, reset jump, and aligned outgoing comparison at τhat_j. Show E_j entering the segment, D_j incoming error, and E_(j+1) after reset. Make explicit that no same-clock state error is claimed between the exact jump and the later reported jump.

### `thm-minimum-intensity-tau-leap-level-variance` — Fine/coarse Poisson tau-leap coupling over two half intervals

- Source lines: [35, 47]
- Kind: coupling timeline with shared and residual count streams (editorial candidate; uncertain)
- Source claim: Each fine step h is paired with a coarse step 2h on two half intervals; each channel uses a shared min-intensity Poisson count plus fine/coarse positive-part residual counts, the fine state updates between halves, and coarse counts are accumulated at the coarse starting state.
- Draw/check: Draw one coarse interval split into two fine half-intervals; above/below it track fine state updates versus the held coarse state. For each channel mark the shared count mean h min(a_j(x),a_j(z)) and the two residual means, then show the two coarse count vectors accumulated into one coarse leap.

### `thm-age-structured-renewal-bv-l1-convergence` — Age-time upwind mesh and renewal inflow boundary

- Source lines: [36, 46]
- Kind: age-time mesh/characteristics schematic (editorial candidate; uncertain)
- Source claim: The finite-volume scheme uses age/time grids with transport-plus-loss CFL, cellwise constant reconstructions, newborn mass supplied at the renewal boundary, and an absorbing right cutoff; the theorem gives L1 convergence without requiring initial-trace/birth-rate compatibility.
- Draw/check: Draw age a horizontally and time t vertically, transport characteristics moving with slope da/dt=1, the age-zero renewal inflow, cell fluxes on the upwind grid, and the cutoff outflow. Mark that the initial trace may mismatch the birth boundary at (a,t)=(0,0), so the drawing does not suggest compatibility or a Taylor error rate.

## Coverage

The JSON companion records each snapshot SHA256 and line count, exact receipt tile paths and SHA256 hashes, and a per-tile individual original-resolution viewing attestation.
