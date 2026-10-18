# Step 3a reader report — batch 40

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Scope: batch `40`

## Review basis

I reviewed the current batch-40 carriers independently of their authoring notes and proof contracts. The batch contains 15 A-page items and four B-page examples/counterexamples. I opened both assigned page files, all 19 assigned item files in dependency order, the five page-level prerequisites of the A page, and the direct published item suppliers used by the assigned arguments. I checked all 15 proof-bearing batch contracts against the current item facts, derivations, tags, cited interfaces, and axiom-use records.

### Assigned pages

- `graph-diffusion-and-metric-network-pde-numerics` — `library/numerical-pdes-and-spatial-discretization/graph-diffusion-and-metric-network-pde-numerics.md`
- `graph-diffusion-and-metric-network-pde-numerics-examples` — `library/numerical-pdes-and-spatial-discretization/graph-diffusion-and-metric-network-pde-numerics-examples.md`

### Assigned items, read in dependency order

Level 0: `def-anchored-finite-metric-graph-h1-space`, `def-conservative-network-advection-routing`, `def-finite-weighted-network-diffusion-data`.

Level 1: `def-metric-graph-p1-edge-mesh`, `lem-anchored-metric-graph-h1-space-is-hilbert`, `lem-anchored-metric-graph-poincare`, `lem-metric-graph-kirchhoff-green-identity`, `lem-weighted-network-energy-kernel-and-mass-balance`, `thm-conservative-network-routing-conserves-flux`.

Level 2: `cor-weighted-network-gauged-cg-applicability`, `lem-metric-graph-p1-interpolation-estimate`, `thm-metric-graph-p1-parabolic-semidiscrete-stability`, `thm-metric-graph-weak-elliptic-problem`, `thm-weighted-network-semigroup-and-euler-positivity`, `cex-density-continuity-fails-unequal-speed-routing`, `ex-disconnected-unanchored-network-solve`, `ex-y-junction-metric-graph-kirchhoff-flux`.

Level 3: `thm-metric-graph-p1-fem-cea-and-energy-rate`, `ex-three-compartment-weighted-migration`.

### Page-level prerequisites and mathematical sources

I opened the required published pages `finite-generator-master-equations-and-uniformization`, `elliptic-finite-difference-methods`, `parabolic-finite-element-methods`, `algebraic-and-spectral-graph-theory`, and `conjugate-gradients-minres-and-preconditioning`. I also opened the direct published item suppliers used by the batch proofs, including the graph incidence/Laplacian interfaces, one-dimensional Sobolev representative and endpoint estimates, Hilbert and integral inequalities, Lax–Milgram and parabolic ODE interfaces, finite-generator/exponential results, and rank-nullity, orthonormal-basis, Céa, symmetric Galerkin, and CG results.

I checked the cited primary-source passages relevant to the authored claims: [Kuchment](https://arxiv.org/pdf/0802.3442), §2 and §§4–4.1 (finite metric graphs, loops/multiple edges, edgewise H1 trace matching, outgoing Kirchhoff derivatives, and the quadratic form); [Arioli–Benzi](https://www.cs.emory.edu/technical-reports/techrep-00275.pdf), §§2 and 4, including the local edge error discussion on printed p. 10 (graph spaces, P1 edge meshes, and H2 interpolation context); [Chung](https://fanchung.ucsd.edu/cbms.pdf), §§1.2 and 1.4 (unnormalized and weighted graph Laplacian conventions); [Whitt](https://www.columbia.edu/~ww2040/4106S11/CTMCchapter121906.pdf), §§3.2 and 3.4 (finite master equation and uniformization, transposed from the notes' row convention); [Shewchuk](https://www.cs.cmu.edu/~quake-papers/painless-conjugate-gradient.pdf), §7.3 (CG energy-error optimality); and [Clason](https://arxiv.org/pdf/1709.08618v2.pdf), Chapter 12 §12.1 (the finite-element method-of-lines ODE context). The batch supplies local proofs for its strengthened weighted, anchored, and graph-specific claims; I did not transfer source results beyond their stated hypotheses.

## Findings and edits

No assigned item or A-page prose required repair. The explicit matrix calculations, graph energy and kernel characterization, path Poincare bound, Green identity including loop incidences, interpolation estimate, coercivity constants, finite-dimensional existence arguments, positivity thresholds, CG positive-definiteness conditions, and examples are supported by their stated hypotheses and dependencies. The contracts match the current proof steps and do not introduce unsupported claims.

One uneditable page-summary defect remains in the published prerequisite `algebraic-and-spectral-graph-theory`: its summary opens “This draft page builds ...” while that page's frontmatter has `status: published`. It is outside batch 40 and is reported for the owner; the assigned item `def-finite-weighted-network-diffusion-data` reaches the page's incidence/Laplacian suppliers through its `deps`.

No item bytes changed; there are no item-edit evidence or validation commands to record.

## Page verdicts

- `graph-diffusion-and-metric-network-pde-numerics` (A): reviewed; the summary accurately reflects the current items' assumptions and conclusions, including the separation between finite-network and metric-graph claims and the conditional edgewise H2 rate.
- `graph-diffusion-and-metric-network-pde-numerics-examples` (B): reviewed; the four examples and the page summary agree, and the displayed flux, stiffness, equilibrium, and Kirchhoff computations check out.

## Blockers and coverage limits

The live run status reports an unrelated `3a-collect` blocker: `collect-7` failed three times for batch 7. No batch-40 blocker was found.

I reviewed all assigned carriers, their directly used published item interfaces, and the five required page summaries. I did not recursively audit every transitive dependency of those published suppliers where it was not needed to check the batch-40 arguments.
