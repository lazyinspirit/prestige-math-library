# Reader report — batch 22

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: Step 3a reader  
Scope: batch `22`

## Opened inventory

Assigned pages opened:

- `cm06-regular-constraints-and-moving-frames` — A page; prose reviewed and repaired.
- `cm06-regular-constraints-and-moving-frames-examples` — B page; prose reviewed, no edit.

Assigned items opened in dependency order (suppliers before consumers):

- `def-cm06-holonomic-constraint-model`
- `post-cm06-ideal-reaction-law`
- `pthm-cm06-multiplier-balance`
- `pthm-cm06-rheonomic-power`
- `def-cm06-moving-frame`
- `pthm-cm06-inertial-forces`
- `def-cm06-nonholonomic-model`
- `rem-cm06-dalembert-vakonomic-distinction`
- `ex-cm06-bead-on-a-rotating-wire`
- `ex-cm06-pendulum-tension-and-reaction-power`
- `ex-cm06-rotating-chart-inertial-terms`
- `ex-cm06-rolling-disk-model-comparison`

I also opened all 49 unique direct external item dependencies enumerated by the batch manifest and the additional transitive prerequisite statements needed for the assigned claims. Relevant opened suppliers include `lem-cm-moving-frame-acceleration-identity`, `lem-cm-adapted-charts-and-galilean-transformations`, `lem-cm-adapted-coordinates-exist-and-are-unique`, `def-cm-affine-time-space`, `post-cm01-frames`, `post-cm01-worldlines`, `def-cm01-units`, `def-cm01-configuration`, `post-cm02-force-superposition`, `def-cm-nonholonomic-velocity-constraint-law`, `lem-cm-c2-bump-functions`, and `cex-cm-dalembert-and-vakonomic-evolutions-differ`. The page prerequisites opened were:

- `cm-math-variations`
- `cm03-momentum-work-and-energy-balances`
- `cm02-forces-initial-data-and-newtonian-flow`
- `cm01-framework-quantities-and-geometry`
- `cm-math-balances`
- `cm-math-geometry`
- `cm-math-rigid`

## Repairs and evidence

1. **`items/def-cm06-moving-frame.md`** — Corrected the overbroad statement that a moving chart can never be an inertial chart. The definition now distinguishes a general time-dependent chart from the restriction of an adapted chart when $R$ is constant and $c$ is affine on the stated interval. Added dimensions for $c$, $R$, and $y$, and defined the spacetime lift of a chart-rest coordinate curve so the worldline parameter condition is applied to a curve in the event space. These changes follow the exact adapted-chart and Galilean transformation statements in `lem-cm-adapted-charts-and-galilean-transformations`, the frame definition in `post-cm01-frames`, the worldline definition in `post-cm01-worldlines`, and unit conventions in `def-cm01-units`.

2. **`items/pthm-cm06-inertial-forces.md`** — Restricted the inertial-chart criterion to the interval $I$, and stated that such a chart is the restriction of the globally defined adapted chart supplied by the affine Galilean transformation. Clarified that a general moving chart is not inertial and narrowed the title to the proved result. The proof uses the frame transformation statement in `pthm-cm01-galilean-kinematics` and the moving-frame acceleration identity. The affine map extends to all times, which resolves the former mismatch between the chart's domain and the model's global frame definition.

3. **`items/def-cm06-nonholonomic-model.md`** — Stated the dimensions assigned to the factorization data Phi and varrho, and identified the straight-line rolling formula as a separate reduced two-coordinate model rather than an instance of the generic 3N-coordinate datum. The example now declares the coordinates q=(s,theta), the dimensions of s, a, theta, and Phi, and its A, b, Phi, and varrho. This aligns the example with `def-cm01-units`, `def-cm01-configuration`, and the velocity-constraint definitions.

4. **`items/rem-cm06-dalembert-vakonomic-distinction.md`** — Qualified the rolling statement as a reduced planar two-coordinate no-slip law, consistent with the model defined above and the separate higher-dimensional rolling example cited in the remark.

5. **`items/ex-cm06-rolling-disk-model-comparison.md`** — Made the contact-capability premise explicit: a horizontal plane, $N=mg$, and a declared Coulomb static-contact capacity interval $|f_s|\leq\mu_sN$, with dimensions and an express statement that its parameters are model assumptions, not measurements. Rephrased the deduction as feasibility of the required reaction under that declared capacity. The algebra for the reaction and acceleration was checked against the item's defining equations and the supplied rigid-disk moment $I=\tfrac12ma^2$. Source checks: Stewart, [*Advanced Classical Mechanics*](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/resources/mit8_09f14_full/), §§1.4–1.5 (printed pp.19–25; virtual displacements, ideal reactions, and work by time-dependent constraints), §1.4 (printed p.20; static-friction capacity), and §2.2 (printed pp.33–36; rotating coordinates); Likharev, [*Essential Graduate Physics: Classical Mechanics*](https://commons.library.stonybrook.edu/egp/2/), §4.3, Eq. (4.45) (no-slip rolling relation) and Eqs. (4.46)–(4.47); OpenStax, [*University Physics*, Vol. 1, §10.5](https://openstax.org/books/university-physics-volume-1/pages/10-5-calculating-moments-of-inertia), lines 101–115 (thin-disk inertia from mass elements). The capacity inequality is adopted as a model premise here; this example reports no measured friction coefficient.

6. **A page prose** — Updated `library/non-relativistic-classical-mechanics/cm06-regular-constraints-and-moving-frames.md` to summarize the moving-chart exception and to specify the reduced two-coordinate scope of the planar no-slip example. B-page prose was not changed.

The batch proof contract was updated for `pthm-cm06-inertial-forces` steps 2.2 and 3.1 and `ex-cm06-rolling-disk-model-comparison` steps 2.2 and 3.1. No changed item contained a `verification.judge` record, so none required removal.

## Validation

- Reflow: all five changed item files completed successfully and reported unchanged layout.
- Precheck: all five changed item files completed successfully; checked proofs passed.
- Final proof layout: `node tools/physics-support/proof-layout.mjs items/def-cm06-moving-frame.md items/pthm-cm06-inertial-forces.md items/def-cm06-nonholonomic-model.md items/rem-cm06-dalembert-vakonomic-distinction.md items/ex-cm06-rolling-disk-model-comparison.md` — 5 items, 13 steps, 0 defects.
- No workflow blocker remains.

## Uneditable findings

1. **`lem-cm-moving-frame-acceleration-identity`, Proof step 4.1** (in-run dependency; consumer `def-cm06-moving-frame`): the substitution is attributed to step 3.1, which proves uniqueness of omega; the acceleration formula needed at this point is established in step 1.2. The formula is available, so this is a nonfatal citation error. Current source SHA-256: `f48b734148f1c0c44c161d974c3c6fef88e1dc07f1ec5bd424bc7aa3c806d3c7`.

2. **`lem-cm-c2-bump-functions`, Proof step 3.1** (in-run dependency; consumer `def-cm06-nonholonomic-model`, through `cex-cm-dalembert-and-vakonomic-evolutions-differ`): the proof states $E\beta\geq0$ on the real line, although $E$ is defined only on the open interval $J$. Its argument only needs the inequality on $[t_0-\rho,t_0+\rho]\subset J$, which follows by restricting the displayed definition to that interval; as written, the domain statement is ill-formed but the intended local argument is recoverable. This is nonfatal. Current source SHA-256: `392692813c46c88cef7fb73539e4d3ffcb9f15d794f9ddb5af8dd89ac010a8a0`.

## Page verdicts and source limitation

- **`cm06-regular-constraints-and-moving-frames` (A):** pass after the repairs above. The two remaining supplier issues are recorded for their owners; neither defeats the assigned claims.
- **`cm06-regular-constraints-and-moving-frames-examples` (B):** pass; all four assigned examples and the page summary were reviewed, with no remaining defect found.

The direct web open of Tong, *Classical Dynamics*, Sections 6.1–6.2, returned an internal error in this pass. A prior run coverage record indicated that the text had been fetched, but I did not independently read that source text in this review. The moving-frame claims above were checked against the local mathematical supplier and the adapted-frame definitions; I do not treat the Tong source as independently verified here.
