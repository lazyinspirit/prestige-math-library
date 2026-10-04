# Reading ledger: Stewart replacement for inaccessible Nearing

Source and hashes: `source-inventory.json`. Access failures: `access-history.json`.
Locators below use printed page numbers; PDF index = printed page + 3 for every body page. Reading means the complete prose and displayed-equation extraction was returned and considered in bounded tool chunks, not a TOC or keyword scan. Equations fragmented by PDF extraction were interpreted with the adjoining derivation; selected suspect equations and corrupted plot labels were checked visually. This is a source review, not a whole-text independent proof audit or a claim that every figure was visually inspected.

## Exhaustive returned reading chunks

| Chunk | PDF pages | Actual content read |
|---|---|---|
| 1 | 1–10 | Title, complete contents, pp1–7: Newtonian introduction; frames versus coordinates; Lagrangian coordinate change; constrained cone examples. |
| 2 | 11–21 | pp8–18: Legendre transform, special quadratic Lagrangians, moving-support pendulum, conservation laws, moving-cart H versus E, holonomic/nonholonomic constraints and virtual displacements. |
| 3 | 22–32 | pp19–29: d'Alembert principle, generalized forces, friction/dissipation, full variational derivation, multiplier constraints and sphere/hoop/wedge examples; beginning rigid body chapter. |
| 4 | 33–43 | pp30–40: Euler angles, rotation matrices, axis theorem, rotating derivatives/forces, Coriolis/Foucault examples, inertia tensor and parallel-axis derivation. |
| 5 | 44–55 | pp41–52: tensor transformation/principal axes, cube example, Euler equations and linear rotational stability, full symmetric-top reduction/nutation, start quadratic oscillation expansion. |
| 6 | 56–66 | pp53–63: generalized eigenproblem and mass-orthogonal modes, full CO2 example, generating functions types 1–4. |
| 7 | 67–79 | pp64–76: transformation examples, full Poisson/symplectic derivation, conservation and infinitesimal generators, full Hamilton-Jacobi setup and oscillator example, formal quantum comparison. |
| 8 | 80–91 | pp77–88: characteristic function, separation, full planar and 3D Kepler reduction, actions and angle normalization, pendulum/oscillator/multiperiodic examples. |
| 9 | 92–104 | pp89–101: Kepler actions/orbital constants; perturbation formalism; free-to-oscillator expansion; finite-amplitude pendulum secular correction; perihelion perturbations, relativistic oscillator example. |
| 10 | 105–116 | pp102–113: complete Schwarzschild side note; spring-chain continuum scaling; field variation; Eulerian/Lagrangian fluid descriptions; pressure, material derivative, mass balance, vorticity, Euler and entropy equations; momentum balance begins. |
| 11 | 117–129 | pp114–126: momentum/energy/Bernoulli analysis; hydrostatics, buoyancy, steady pipes/jets, streamline/pathline distinctions, Pitot apparatus model; potential-flow examples and sphere; linear sound-wave derivation and Mach regime. |
| 12 | 130–142 | pp127–139: supersonic cone; full viscous constitutive tensor and Navier-Stokes; energy/entropy dissipation; parallel-plate/cylindrical flows; Reynolds similarity; complete Stokes sphere calculation; wakes begin. |
| 13 | 143–155 | pp140–152: turbulence conclusion; chaos definitions; ODE local existence statement, driven-pendulum nondimensionalization; volume evolution; fixed points, portraits, stroboscopic map and bifurcation plot. |
| 14 | 156–168 | pp153–165: all one-dimensional bifurcation types and examples, hysteresis, rotating hoop, constant torque; beginning 2D fixed-point classification and stability definitions. |
| 15 | 169–181 | pp166–178: full trace/determinant classification; population example; conserved E claims; limits cycles, van der Pol, unproved Poincare-Bendixson statement and trapping example; planar bifurcations and Hopf examples. |
| 16 | 182–194 | pp179–191: subcritical Hopf, constant-torque pendulum cycle; complete logistic map/period doubling/Lyapunov discussion; Lorenz system/strange-attractor discussion; start fractals. |
| 17 | 195–199 | pp192–195 and colophon: dimension definitions, Cantor/Koch calculations, Kaplan-Yorke sketch, fluid chaos and Kolmogorov scaling; end-of-text and OCW licensing/citation colophon. |

No substantive chapter or side note was skipped. There are no separately listed appendices. Reading was completed on 2026-10-03 UTC; exact per-chunk clock times were not separately logged.

## Chapter findings and limitations

| Chapter | Complete range read | Useful conclusions | Actual limitations |
|---|---|---|---|
| 1 Analytical mechanics | §§1.1–1.5, pp1–28, PDF4–31 | distinguishes canonical from kinetic momentum, H from E, frames from curvilinear coordinates; derives EL, generalized forces, constraints | Starts from prior course. Frames lack full affine geometry. Legendre regularity implicit. Broad Noether formulation oversimplified. Some source errors; details in report. |
| 2 Rigid bodies | §§2.1–2.5, pp29–51, PDF32–54 | SO(3), axis theorem, inertia/parallel axes, Euler dynamics, linear principal-axis stability, top | Euler-angle velocity relations and Foucault deduction assigned as exercises. Nondegeneracy assumptions implicit; cube calculation inconsistent. |
| 3 Oscillations | §§3.1–3.2, pp52–59, PDF55–62 | quadratic natural Lagrangian, generalized symmetric eigenproblem, decoupled modes | Zero modes and degenerate eigenspaces need careful treatment; planar CO2 example does not establish complete 3D vibrational count. Literal '[to be continued]' appears p58, but following p59 continues computation. |
| 4 Canonical/HJ/actions | §§4.1–4.6, pp60–91, PDF63–94 | local generating functions, PB condition, phase volume, HJ separation, Kepler, action conventions | Time-dependent criterion proof deferred to Goldstein; global exactness/complete-integral assumptions absent; quantization/WKB comparison formal. Some integrations and orbital-element identifications asserted. |
| 5 Perturbation | §§5.1–5.3 and Schwarzschild side note, pp92–103, PDF95–106 | explicit first-order periodic versus secular corrections, averaged precession | No general convergence/remainder theorem. Relativistic side note needs affine parameter/causal justification, not 'minimum distance'. Mercury data lack experimental report/uncertainty. |
| 6 Fluids | §§6.1–6.8, pp104–141, PDF107–144 | continuum scaling, mass/momentum, Euler, constitutive stress, Navier-Stokes, wave speed, Poiseuille and Stokes | Continuum convergence heuristic; EOS and transport constitutive laws are additional assumptions. Global PDE existence not proved. Several mathematical errors; turbulent Reynolds ranges qualitative. |
| 7 Nonlinear dynamics | §§7.1–7.6, pp142–195, PDF145–198 | local ODE setup, fixed points, bifurcation normal forms/examples, maps, Lorenz, turbulence scaling | Existence theorem stated, not proved. PB proof explicitly omitted and statement overbroad. Chaos/fractal/Kaplan-Yorke results often sketches/numerical illustrations, with inaccurate claims. |

## Visual checks actually performed

Saved and viewed PDF pages 14, 24, 30, 32, 46, 47, 71, 118, 127, 154, 155, 169, 175, 178, 195, 196. These resolve formula fragmentation, verify claimed source errors, and recover plot labels in Figs7.6–7.7. Saved PNGs preserve the evidence. Rendering emitted 'No common ancestor in structure tree' warnings but produced visible page images. No OCR was needed. Other figure geometry was assessed from surrounding equations/captions, not separately audited visually.
