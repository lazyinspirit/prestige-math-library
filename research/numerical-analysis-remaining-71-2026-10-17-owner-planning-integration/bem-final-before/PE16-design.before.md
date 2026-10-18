## PE16 — Boundary-integral equations and Galerkin BEM

A: `boundary-integral-equations-and-galerkin-bem`. B: `boundary-integral-equations-and-galerkin-bem-examples`.

### Scope

Define single/double-layer potentials, boundary traces/jumps, Calderon operators and Galerkin BEM for 3D Laplace on a closed orientable Lipschitz polyhedral boundary. Prove bounded mappings in H±1/2 trace spaces, correct signed jump identities and ellipticity modulo stated constants/kernel; prove unique stabilized formulation and quasi-optimal error under a shape-regular surface family. Treat 2D logarithmic capacity/scaling separately. Helmholtz combined-field extension consumes PE18 uniqueness and carries frequency-dependent inverse bounds. Quadrature and FMM acceleration have separately controlled matrix perturbation error; they are not free exact BEM.

### Proof construction

Build Lipschitz trace/lift and dual normal trace, weak layer potentials by variational transmission, then prove singular-kernel representation agrees and derive jumps by transmission/Green. Positivity of single layer from whole-space energy; quotient/gauge removal, Lax–Milgram and NA29 Galerkin. Surface interpolation in fractional norms via a proved local norm/scaling estimate. For Helmholtz use compact perturbation and a locally proved Fredholm alternative plus uniqueness. Kernel principal-value and jump signs are computed, not memorized.

### Examples

sphere constant density, jump sign orientation, polyhedral singularity, inexact assembly ledger.

### Prerequisite interfaces

- **Same-frontier pair `NA-28`** — A page `finite-element-meshes-and-interpolation` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-29`** — A page `ceas-lemma-and-aubin-nitsche-error-estimates` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `NA-30`** — A page `variational-crimes-and-strang-lemmas` in the `spatial` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `QUAD-SING`** — A page `singular-and-infinite-interval-quadrature` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Same-frontier pair `LIN-FMM`** — A page `fast-multipole-expansions-and-error` in the `linear` category of the unified frontier. This is a planned supplier contract in the unified DAG, not a published item.
- **Published item interface** in `lax-milgram-and-weak-elliptic-solutions`: `thm-lax-milgram`, `thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem`. Import only the literal hypotheses; exact interface review is recorded in `research/numerical-analysis-four-category-scaffolds-2026-10-16/spatial-audit.md`.

### Same-frontier proof closure and well-definedness

Define layer kernels, orientation, trace spaces and jump signs on a closed Lipschitz polyhedron. Prove local fractional trace/lifting, transmission Green identity, layer jumps/ellipticity and Galerkin stability; the published C1 trace item cannot be widened. Helmholtz solvability waits for PE18 uniqueness.


