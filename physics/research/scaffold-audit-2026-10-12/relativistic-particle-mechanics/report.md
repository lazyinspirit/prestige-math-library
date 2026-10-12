# Relativistic Particle Mechanics scaffold audit

The revised RPP prose now defines its geometry, momenta, forces, constraints,
spin models, orbit quantities and radiation equations before use. The local
Lorentz proof supplies the finite-dimensional basis, cone, observer-energy and
causal-sum facts needed by the RPP clauses. The framework register now also
defines affine spacetime and displacement, covering the sixth content-only
snapshot that the Lorentz-vector proof alone did not replace. It contains an
explicit open-flat-slab example showing why local ODE existence does not imply
completeness. The former C4 reservation is rebound to this local example; no
neighboring unbuilt scaffold is treated as an authored item. The former S10
reservation is bound to the actual SR Fermi-Walker, hyperbolic-motion, observer
congruence and Rindler draft sources, with a bounded local right-wedge argument.

The six physics snapshots `def-affine-space-and-displacement`,
`def-lorentz-form-and-inertia`,
`def-causal-classification-of-lorentz-vectors`,
`def-time-orientation-and-future-causal-sets`,
`lem-lorentz-form-has-orthonormal-basis`, and
`lem-timelike-cone-has-two-convex-components` have no canonical root originals.
They remain read-only content. The scoped Lorentz facts used in RPP are bound
to the local proof and explicit definition contracts. Nineteen published math
sources currently referenced by the old RPP map or the local Lorentz proof have
matching root, import and manifest hashes; this is a currency check, not a
claim that this replacement auditor re-read all nineteen proofs.

The source map records the current bytes and declared direct dependencies of 49
actual physics draft items spanning SR, EM, GR and CM, plus the nineteen math
sources, six orphan snapshots and nine local research developments. The prior
checkpoint records the full relevant proof-body reads for the SR, EM, GR and CM
sources. I rechecked current metadata/dependency edges and selected load-bearing
statements and proof clauses; the replacement pass does not claim a full re-read
or independent acceptance of every current upstream proof. Draft sources remain
conditional suppliers, and RPP proof modules remain research arguments rather
than production acceptance receipts.

The EM dictionary remains `F_{0i}=-E_i/c`, `F_{ij}=epsilon_{ijk}B_k`,
`F^{0i}=E_i/c`, with action term `+q integral A_a dx^a`. The EM coupling and
force theorem apply to constant `q`, constant `m>0`, a prescribed external
field and the declared flat domain where used. They do not add self-force,
radiation or a closed particle-plus-field energy balance. The variable-mass
identity `g(U,D_tau P)=-c^2 dot m` is an identity, not a variable-mass law;
force tangency is stated only on the constant-mass branch.

The Schwarzschild conventions are bound to the current GR draft items using
`s=2G_N m*/c^2=2mu` and `f=1-s/r`. The GR circular-orbit draft supplies the
existence threshold and the sign of the fixed-angular-momentum potential's
second derivative. RPP retains its separate local nonlinear radial stability
argument. Global capture uses the actual Kruskal extension and its causal
escape clause. The Coulomb draft is used only for the Newtonian comparison.
The scaled weak-field theorem is an exact authored GR physics draft result with
compact-region, speed and fixed-scaled-time ODE/analysis hypotheses; no solver,
P-NUM or numerical-analysis result is used.

The external-page role entry records direct consumers `emg-g04`, `emg-mm03`
and `csm-exact-models`. The item contracts are compatible with the exact RPP
action/force and null-momentum clauses. Root integration should replace the
research-only placeholders with the planned RPP items listed in
`integration-changes.json`; no external content edit is indicated. `emg-mp03`
is a downstream consumer through `emg-mm03`, not a direct RPP page edge.

The actual weak-field theorem remains homed on the A page
`gr-flat-and-newtonian-bridges` (order 245), and RPP's
`rpm-controlled-limits` page (order 431) retains that necessary supplier edge.
A forward `requires` edge from the GR page to the later GR14 page was observed
during this audit, then removed by the GR owner from both canonical plan-spec
and library-page metadata. The current library page no longer declares that
forward edge; root reports the selected-plan validator now passes. The former
reading-order hold is therefore resolved externally. This audit did not edit
GR or remove the necessary weak-field supplier edge.

No statistics, statistical-model, Bayesian, inference, numerical-analysis,
numerical-methods, solver-diagnostic or P-NUM result is a direct, indirect or
prospective RPP supplier. Exact ODE/analysis remains eligible. The scoped
definitions, source bindings, exclusions and current hashes are recorded in
`definition-coverage.json`, `supplier-map.json`, `exclusions.json`,
`integration-changes.json` and `source-reading.json`.

Checks completed: current source metadata/hash extraction for the selected
suppliers; current root/import/manifest byte comparison for the nineteen math
inputs; scoped JSON parsing and Markdown/render checks for the RPP audit,
track and prose files. No production items/pages, imports, root metadata or
workflow state were changed.
