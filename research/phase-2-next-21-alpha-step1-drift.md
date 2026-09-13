# Phase 2 next 21 — prerequisite drift review

Run: `phase-2-next-21`  
Role: alpha  
Scope audited: the 21 A pages in `research/phase-2-next-21-scope-ledger.json`

I read all twelve assigned manifests, their prose designs, the planning notes, the
scope ledger, and the canonical plan. Candidate-page lists were used only for
navigation. For unfamiliar interfaces I also consulted the cited authoritative
sources: Bühler–Salamon, *Functional Analysis*, §§3.2–3.5
(https://people.math.ethz.ch/~salamon/PREPRINTS/funcana.pdf); Hatcher, *Algebraic
Topology*, §§3.H and 4.3 (https://pi.math.cornell.edu/~hatcher/AT/AT.pdf); May, *A
Concise Course in Algebraic Topology*, ch. 22
(https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf); and
Meierfrankenfeld, *Group Theory and Representation Theory*, §§6.6–6.7, pp. 153–171
(https://users.math.msu.edu/users/meierfra/classnotes/mth912f04/912f04master.pdf).
I read Meierfrankenfeld's complete dependency chain and argument through Theorem
6.7.15 and Corollaries 6.7.16–6.7.17 rather than relying on its table of contents.
The review found two omitted, already-planned backward edges. Both are explicit in
the functional-analysis prose scaffold and were applied without changing scope or
order. There are no owner-held decisions or remaining mathematical uncertainties.

### the-ergodic-theorems-of-von-neumann-and-birkhoff

Measure Theory MT-23's theorem inventory and proof plan use the declared
measure-preserving, scalar integration, convergence-mode, Radon–Nikodým, and
concrete $L^p$ interfaces. Its Hilbert projection step is already reached through
the declared maximal-ergodic predecessor, so no direct Hilbert-space edge is
missing. No uncertainty remains.

VERDICT: no-drift

### banach-alaoglu-goldstine-and-krein-milman

Functional Analysis FA-9 explicitly requires planned MT-20 for the probability-
measure applications: the examples identify the positive normalized slice of
$C(K)^*$ with regular Borel probability measures before applying compact-convex
results. Weak/weak-star topology does not supply that representation theorem.
Added `radon-measures-and-the-riesz-markov-kakutani-theorem` (order 288.039), a
published backward prerequisite. No uncertainty remains.

VERDICT: drift-applied — radon-measures-and-the-riesz-markov-kakutani-theorem (order 288.039)

### reflexivity-and-eberlein-smulian

Functional Analysis FA-10 explicitly requires MT-16 for its concrete $L^p$
consequences. The reflexivity corollary cites concrete $L^p$ duality, and the
uniform-convexity corollary cites Clarkson inequalities in the exact scalar setting;
neither interface was in the former closure. Added
`complex-lp-spaces-and-test-function-conventions` (order 288.0321), a published
backward prerequisite. References to FA-13 in two examples are expressly later
finalization notes, not prerequisites of this page. No uncertainty remains.

VERDICT: drift-applied — complex-lp-spaces-and-test-function-conventions (order 288.0321)

### tempered-distributions-and-the-fourier-transform

The Analysis/PDE scaffold makes the distributions-and-test-functions page the
single direct supplier; its closure already contains Schwartz-space conventions,
distributional differentiation, scalar integration, and concrete $L^p$ facts used
by the Fourier-transform inventory. No additional load-bearing interface appears in
the proof plan. No uncertainty remains.

VERDICT: no-drift

### martingale-inequalities-and-convergence

Probability PT-13's binding requirements table is exactly represented by the
declared closure: conditional expectation, discrete martingales, scalar integration,
random-variable and measure convergence modes, $L^p$, and the CLT interface. The
$L^2$ projection discussion belongs to the already declared conditional-expectation
route and does not introduce a functional-analysis prerequisite. No uncertainty
remains.

VERDICT: no-drift

### stopping-times-and-optional-stopping

Probability PT-14's binding table requires conditional expectation, discrete-time
martingales, and PT-13. Those pages supply stopping-time measurability, integrability,
uniform-integrability, and convergence inputs used by every optional-stopping form
in the scaffold. No uncertainty remains.

VERDICT: no-drift

### bocksteins-steenrod-squares-and-cohomology-operations

Algebraic Topology AT-9's final reconciliation adds the orientation/duality seam to
the cup, cap, and cross-product predecessor for Thom and Wu-class arguments. Both
are already direct prerequisites, and their closure supplies the cochain and
relative-cohomology machinery used in the source construction. No uncertainty
remains.

VERDICT: no-drift

### local-coefficients-twisted-homology-and-duality

Algebraic Topology AT-23's binding table is fully represented: singular cohomology,
orientation/duality, fibrations, Hurewicz/Whitehead, categorical functors, and group
algebras. These cover monodromy modules, twisted chains, and the duality statement;
the complete Hatcher local-coefficient argument exposed no extra prerequisite. No
uncertainty remains.

VERDICT: no-drift

### spectra-and-stable-homotopy-groups

Algebraic Topology AT-21 uses higher homotopy, the Hurewicz/Whitehead interface,
pointed quotient constructions, and categorical limits/colimits. The declared
closure supplies suspension-loop adjunction conventions and the sequential
colimit machinery needed for stable groups. May's spectra chapter exposed no
additional backward edge. No uncertainty remains.

VERDICT: no-drift

### obstruction-theory-postnikov-towers-and-classifying-spaces

Algebraic Topology AT-13's final binding table is exactly present: singular
cohomology, cohomology operations, higher homotopy, fibrations, Hurewicz/Whitehead,
local coefficients, and the fundamental-group applications page. Together these
supply twisted obstruction classes, Postnikov stages, and classifying-space
conventions. No uncertainty remains.

VERDICT: no-drift

### riemann-curvature-and-riemannian-submanifolds

Differential Geometry DG-21's listed inputs—rank theorem, vector bundles, tensor
fields, Riemannian metrics, connections, and geodesics—are all direct prerequisites.
Their closure covers pullbacks, induced connections, second fundamental form, and
Gauss–Codazzi conventions used by the proof plan. No uncertainty remains.

VERDICT: no-drift

### lie-groups-invariant-fields-and-the-exponential-map

Differential Geometry DG-25's exact reconciliation is matched by the plan: tangent
and rank theorems, ODEs, vector fields, Frobenius, tensors/forms, connections and
geodesics, plus the algebraic group, matrix, and determinant interfaces. These close
the invariant-field, bracket, and exponential-map arguments. No uncertainty
remains.

VERDICT: no-drift

### lie-subgroups-actions-and-homogeneous-spaces

Differential Geometry DG-26 has every declared geometric and topological supplier,
including the covering-space seam needed for quotient and homogeneous-space
statements. Whitney/tubular neighborhoods, Frobenius, boundaries/orientations,
geodesics, Lie groups, and quotient topology are already in closure. No uncertainty
remains.

VERDICT: no-drift

### lie-algebra-representations-enveloping-algebras-and-pbw

Differential Geometry DG-27's Lie-group and tensor-field inputs and its algebraic
module, tensor-product, free-module, ring, and ideal inputs are all declared. The
free-module closure supplies the direct-sum construction used for the tensor
algebra, so no separate direct-sum edge is missing. No uncertainty remains.

VERDICT: no-drift

### brauers-second-main-theorem

Representation Theory RG-17's binding table requires blocks/defect groups,
vertices/Green correspondence, Brauer's first main theorem, and Brauer characters;
all are direct. Reading Meierfrankenfeld §§6.6–6.7 through the second main theorem
and its defect-group corollary confirmed that the required block induction,
centralizer blocks, and generalized decomposition numbers are supplied by that
closure. No uncertainty remains.

VERDICT: no-drift

### symplectic-manifolds-moser-stability-and-darboux-weinstein-theory

Differential Geometry DG-35's exact prerequisites are all present: partitions of
unity, vector bundles and tubular neighborhoods, ODE/flow machinery, tensors and
exterior calculus, integration/de Rham, Riemannian metric/geodesic tools, and the
finite-dimensional bilinear/spectral interfaces. These close Moser's method and the
Darboux–Weinstein arguments. No uncertainty remains.

VERDICT: no-drift

### hamiltonian-mechanics-and-completely-integrable-systems

Differential Geometry DG-36 directly requires DG-35 together with ODEs, vector
fields, exterior/de Rham calculus, metrics, connections, geodesics, and measure-
preserving recurrence. That closure supplies Hamiltonian vector fields, conserved
quantities, symplectic volume, and the recurrence application. No uncertainty
remains.

VERDICT: no-drift

### preservation-cohen-forcing-and-the-continuum

Set Theory SET-15's exact dependency graph names the forcing theorem and the
trees/$\Delta$-systems/$\Diamond$ page, both already direct. Their closure supplies
names, generic interpretation, chain-condition arguments, and cardinal bookkeeping.
It does not reach the deferred beyond-choice branch. No uncertainty remains.

VERDICT: no-drift

### finite-support-iterations-and-martins-axiom

Set Theory SET-16 directly requires SET-15, complete metrizability/Baire category,
and Lebesgue measure, exactly as the preservation, forcing-axiom, and category/
measure applications demand. Its closure does not reach the deferred beyond-choice
branch. No uncertainty remains.

VERDICT: no-drift

### permutation-models-and-transfer-to-zf

Set Theory SET-18's dependency graph requires the forcing theorem and the weak-
choice/Sierpiński interface. These supply the model-theoretic forcing vocabulary and
the exact choice principles used in permutation models and transfer. Its closure
does not reach the deferred beyond-choice branch. No uncertainty remains.

VERDICT: no-drift

### symmetric-extensions-and-basic-choice-failure-models

Set Theory SET-19 requires SET-18 and the condensation/GCH/$\Diamond$ page. Those
pages supply symmetry filters, transfer context, and the constructibility/cardinal
background used by the basic choice-failure models. Its closure does not reach the
deferred beyond-choice branch. No uncertainty remains.

VERDICT: no-drift

## Validation

- After adding each edge independently, `node tools/validate-plan.mjs research/plan-spec.json`
  exited 0. The final run reports an acyclic, order-consistent plan with no forward
  references, B-page dependencies, or unresolved IDs.
- `node tools/drift-review-check.mjs --run phase-2-next-21 --before-apply`
  exited 0: all 21 page decisions are valid; materialization and buildability remain
  with the engine.
