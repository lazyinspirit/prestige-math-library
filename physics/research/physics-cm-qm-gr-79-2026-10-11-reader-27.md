# Independent reader report — batch 27

- **Run:** `physics-cm-qm-gr-79-2026-10-11`
- **Role:** Step 3a reader
- **Scope:** batch `27`
- **Disposition:** defects found in assigned items were repaired; no uneditable content defect remains.

## Opened inventory

**Assigned pages:**

- `cm11-rigid-body-dynamics-and-stability` — `library/non-relativistic-classical-mechanics/cm11-rigid-body-dynamics-and-stability.md` (A page).
- `cm11-rigid-body-dynamics-and-stability-examples` — `library/non-relativistic-classical-mechanics/cm11-rigid-body-dynamics-and-stability-examples.md` (B page).

**Assigned items, opened in dependency order:**

- `post-cm11-torque-balance`
- `pthm-cm11-euler-equations`
- `pthm-cm11-torque-free-invariants`
- `pthm-cm11-principal-rotations`
- `pthm-cm11-linearized-spin`
- `pthm-cm11-nonlinear-spin-stability`
- `post-cm11-heavy-top`
- `pthm-cm11-top-reduction`
- `ex-cm11-free-top-checks`
- `cex-cm11-invariants-do-not-force-uniform-rotation`
- `ex-cm11-intermediate-axis-escape`
- `ex-cm11-heavy-top-steady-precession`

I opened the current statement or definition section of every direct supplier in the assigned dependency graph. The 65 external supplier IDs checked were: `cor-cm-finite-time-breakdown-requires-escape`, `cor-trigonometric-parity-and-pythagorean-identity`, `cor-zero-derivative-implies-constant`, `def-cm-equilibrium-and-lyapunov-stability`, `def-cm-euler-angle-parametrization-and-heavy-top-system`, `def-cm-mass-distribution-and-inertia-matrix`, `def-cm-orbital-and-linear-stability`, `def-cm-quaternion-rotation-map-and-cover`, `def-cm-special-orthogonal-group`, `def-cm01-units`, `def-cm06-holonomic-constraint-model`, `def-cm10-angular-velocity`, `def-cm10-inertia-tensor`, `def-cm10-rigid-body-configuration`, `def-countable-choice`, `def-cross-product-in-r3`, `def-derivative`, `def-euclidean-inner-product`, `def-first-order-ode-initial-value-problem-and-solution`, `def-hyperbolic-functions`, `def-interval`, `def-invertible-matrix-and-general-linear-group`, `def-locally-lipschitz-in-the-state-variable`, `def-matrix-product-and-identity-matrix`, `def-maximal-ode-solution`, `def-metric-ball`, `def-pi-via-first-positive-cosine-zero`, `def-sine-and-cosine-by-power-series`, `def-total-derivative-in-euclidean-space`, `lem-cm-coordinate-rotation-matrices`, `lem-cm-derivative-of-pairings-of-curves`, `lem-cm-euler-angle-angular-velocity`, `lem-cm-inertia-matrix-properties`, `lem-cm-mass-moments-are-finite`, `lem-cm-matrix-curve-derivative-rules`, `lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity`, `lem-cm-skew-matrix-cross-product-correspondence`, `lem-cross-product-is-bilinear-alternating-and-orthogonal`, `post-cm01-frames`, `post-cm06-ideal-reaction-law`, `post-cm10-rigid-material`, `pthm-cm03-angular-momentum-balance`, `pthm-cm10-frame-covariance`, `pthm-cm10-kinetic-splitting`, `pthm-cm10-principal-axes`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `thm-cm-euler-equations-and-torque-free-invariants`, `thm-cm-heavy-top-reduction`, `thm-cm-instability-of-the-intermediate-axis`, `thm-cm-linearized-torque-free-euler-equations`, `thm-cm-rigid-kinetic-energy-and-angular-momentum`, `thm-cm-stability-of-extreme-principal-axes`, `thm-cosine-has-a-smallest-positive-zero`, `thm-cross-product-norm-is-the-two-vector-gram-determinant`, `thm-existence-and-uniqueness-of-a-maximal-ode-solution`, `thm-heine-borel-rn`, `thm-hyperbolic-identities-and-derivatives`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-of-square-roots`, `thm-picard-lindelof-local-existence-and-uniqueness`, `thm-quarter-turn-values-and-shift-formulas`, `thm-sine-and-cosine-addition-formulas`, `thm-sine-and-cosine-derivatives`, and `thm-sine-cosine-signs-monotonicity-and-ranges`.

In addition to those statements and definitions, I inspected the load-bearing proofs in `pthm-cm10-kinetic-splitting`, `pthm-cm10-principal-axes`, `pthm-cm10-frame-covariance`, `thm-cm-euler-equations-and-torque-free-invariants`, `lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity`, `thm-cm-stability-of-extreme-principal-axes`, `thm-cm-instability-of-the-intermediate-axis`, `cor-cm-finite-time-breakdown-requires-escape`, `thm-cm-heavy-top-reduction`, and `thm-cm-linearized-torque-free-euler-equations`.

## Repairs and evidence

- **`post-cm11-heavy-top`:** replaced “centre of mass is constrained to the circle of radius $d$” by “lies on the sphere of radius $d$” in clause (iii) and `physical_scope`. The stated constraint is $c(t)=dR(t)e_3$ with $R(t)e_3$ a unit vector, which fixes $\lVert c(t)\rVert=d$ but does not confine the centre-of-mass path to a circle. Updated its scope contract and refreshed the three dependent proof-contract source quotes. I checked `pthm-cm11-top-reduction` and `ex-cm11-heavy-top-steady-precession`: both use the actual vector constraint and remain valid; no consumer proof edit was needed.

- **`pthm-cm11-principal-rotations`:** changed the title’s “fixed spatial axis” to “fixed spatial direction”. The centre-of-mass curve is arbitrary, so a line through it need not remain fixed. Clause 3 now defines the line $\ell_j(t)=\{c(t)+sR(t)e_j:s\in\mathbb R\}$ and direction $n_j(t)=R(t)e_j$, proves the direction and spatial angular velocity are constant, and explicitly allows the line to translate. I also replaced the unsupported inference “$\omega_0\times I\omega_0=0$, so the vectors are parallel by alternation” with the coordinate-minor argument from the cross-product definition. Updated the derivation contract and the current-statement quotes in its three direct consumer contracts. I checked `pthm-cm11-linearized-spin`, `pthm-cm11-nonlinear-spin-stability`, and `ex-cm11-free-top-checks`; none relies on a fixed line position.

- **`pthm-cm11-torque-free-invariants`:** removed the false assertion that $C$ and $E$ are always independent constants. For a spherical inertia matrix $I=\alpha I_3$, $E=C/(2\alpha)$. The revised remark calls them the two invariant functions and no longer claims generic level sets are curves. Its theorem statement, proof, and proof contract were unchanged.

- **`ex-cm11-intermediate-axis-escape`:** corrected $\sqrt{1-4(1/400)^2}$ from $\sqrt{159999/160000}$ to $\sqrt{39999/40000}$. Also changed the remark’s strict “below 18.42” to the proved bound “at most $4\log100\approx18.421$”. Updated the derivation and endpoint contract evidence.

- **`pthm-cm11-nonlinear-spin-stability`:** repaired the MIT OCW URL typo. The corrected URL resolves to the 8.09(F14) Advanced Classical Mechanics PDF; §2.4, Eqs. (2.68)–(2.73), treats the body-frame Euler equations and linearized stability (printed pp. 44–45; PDF pp. 47–48). The former URL did not resolve.

- **Nine assigned citations to Likharev’s Chapter 4 §4.4:** corrected the chapter/PDF page locators in `post-cm11-torque-balance`, `pthm-cm11-euler-equations`, `pthm-cm11-torque-free-invariants`, `pthm-cm11-principal-rotations`, `pthm-cm11-linearized-spin`, `pthm-cm11-nonlinear-spin-stability`, `ex-cm11-free-top-checks`, `cex-cm11-invariants-do-not-force-uniform-rotation`, and `ex-cm11-intermediate-axis-escape`. The cited Euler equations, free-top relations, and stability discussion occur in the PDF’s Chapter 4 pp. 15–16 (PDF pp. 69–70), not pp. 9–12 (PDF pp. 63–66). The PDF’s own page headers and Eqs. (4.63)–(4.71) establish the location: [Likharev, *Essential Graduate Physics*, Part CM](https://essentialgraduatephysics.org/Files/CM%20merged.pdf).

- **`ex-cm11-heavy-top-steady-precession`:** added explicit direct mathematical prerequisites for the use of $\pi$ and the exact values at $\pi/3$, then proved $\cos(\pi/3)=1/2$ and $\sin(\pi/3)=\sqrt3/2$ in step 1.1 using the addition formula, monotonicity/signs, the quarter-turn values, the Pythagorean identity, and square-root uniqueness. Added the supplier IDs to `deps` and `dependency_roles`; updated its facts, citations, derivation contract, and canonical step order. The item’s current direct dependencies are sound, but the dispatch manifest still contains the pre-reader 18-dependency list rather than the current 24. I did not edit the dispatch manifest under reader scope; it may require owner reconciliation before a dependency gate.

No `verification.judge` record was present on any changed item. No source, page summary, or assigned item remains with a confirmed defect I could not edit.

## Page verdicts

- **`cm11-rigid-body-dynamics-and-stability` (A):** its summary agrees with the current postulates and theorem statements. The corrected pivot locus is a sphere, and the theorem uses the same $c=dRe_3$ constraint.
- **`cm11-rigid-body-dynamics-and-stability-examples` (B):** its examples and numerical summaries agree with their items; the escape-time approximation is valid as an approximation to $4\log100$. No page prose was edited.

## Validation

- Reflow and precheck were run for all 11 changed item paths; all final prechecks passed.
- Final `proof-layout` run: 11 items, 40 numbered steps, 0 defects.
- The proof-contract JSON parsed successfully after updates. No full build or gate was run.

## Coverage limitation / blocker

The direct supplier statements and definitions were checked, and the full proofs listed above were inspected, but I did not recursively audit every upstream supplier’s own dependency proof tree. The David Tong PDF and Sussman–Wisdom SICM ZIP could not be retrieved with the web reader, so those bibliography entries were not independently checked in full; the local conditional proofs were reviewed, and the accessible Likharev and MIT sources corroborate the cited classical results. The batch-27 dispatch manifest remains unchanged and does not yet list the six new direct mathematical dependencies of `ex-cm11-heavy-top-steady-precession`; downstream dependency checks may require its owner to reconcile the manifest.
