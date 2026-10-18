# Batch 61 PIC final-review owner resolution

Run: numerical-analysis-remaining-71-2026-10-17. Focused resolution completed 2026-10-18. CLAUDE.md and the full native batch-61 review-1.json were read, followed by the actual RK4, staged-budget, force-consistency, scalar shape/quadrature, scalar trapezoid, norm/shape definitions, residual-force, Lipschitz-kernel, mean-field, RK4 local-order and one-step stability/recurrence suppliers, and affected consumer proofs. This is focused owner evidence, not a new native batch review or gate receipt.

## Actual before-images and source ownership

Before any source edit, all 29 actual reviewed batch item carriers and both actual pages were copied into scope61-before/. These are genuine post-native/pre-owner bytes. New proof helpers were unnecessary: the missing extensions fit concisely into the existing supplied proofs.

Changed source files, all inside batch 61:

- items/lem-periodic-pic-shape-partition-and-quadrature-bound.md.
- items/thm-periodic-pic-smooth-density-grid-force-consistency.md.
- items/thm-periodic-pic-rk4-finite-time-error-on-a-controlled-tube.md.
- items/thm-periodic-pic-staged-fixed-regularization-error-budget.md.
- items/thm-periodic-pic-mean-field-error-with-force-defect.md (one stale prose step reference only).
- library/numerical-pdes-and-spatial-discretization/particle-in-cell-and-particle-mesh-kinetic-methods.md.

No outside source, native control/state/report, manifest, contract, numeric dependency level, readiness record or verification stamp was edited. Root owns current hashes and mechanical mirrors. In particular, thm-periodic-pic-poisson-residual-to-gathered-force-bound remains byte-for-byte equal to its archived owner-entry image: the already repaired zero-mode/approximate-potential interface was preserved.

## Confirmed RK4 grid defect and richest sound extension

The original RK4 supplier required h_t=T/n<=h_0. The staged theorem supplied only Delta t and t_n<=T; it neither identified the uniform grid nor imposed the local admitted step-width condition. Its F3 invocation therefore lacked a hypothesis.

The repaired local PIC RK4 theorem proves the stronger uniform partial-grid version directly. Choose 0<h_t<=h_0, retain t_k=k h_t<=T for integers k>=0, and do not require T/h_t to be an integer. The C4 tube, exact initialization, exact/numerical stage admissibility and uniform local defect assumptions remain explicit. The local-order supplier supplies a positive admissible h_0 and C_4 under those hypotheses; this is the genuine small-step condition, not an arbitrary restriction added to avoid proving an endpoint case.

The unchanged one-step proof gives E_(k+1)<=(1+L_* h_t)E_k+C_4 h_t^5. The new final proof step unrolls it over exactly k retained steps. For L_*>0 the geometric sum gives C_4 h_t^4[(1+L_* h_t)^k-1]/L_*, bounded by C_4 h_t^4(e^(L_*T)-1)/L_* because k h_t<=T. For L_*=0 the result is C_4 k h_t^5<=C_4 T h_t^4. The k=0 empty sum is covered. No invocation of a T/n-only recurrence theorem is made beyond its scope; its now-unused dependency/Fact was removed from this local theorem. The existing endpoint-fitting grid remains a special case, while arbitrary uniform partial grids are now proved.

The staged theorem now explicitly uses t_n=n Delta t, n>=0, 0<Delta t<=h_0 and retains every t_n<=T without requiring a step at T. Its F3 and coupling proof explicitly apply the repaired partial-grid result. The original time coefficient C_RK, order-four power, and P^-1/2 conversion from stacked Euclidean state error to average labelled error are unchanged. No universal empirical Wasserstein P^-1/2 rate or singular-regularization limit was introduced.

## Confirmed vector and shifted-product constant defects

The original shape supplier stated its gathered-sample estimate only for scalar g. The force theorem applied it directly to vector E_epsilon in dimensions 2 and 3, without stating a vector norm or justifying the same constant. A naive separate-component estimate could introduce an unwanted dimension factor.

Reading the actual formula also exposed a separate constant defect: its original C_(eta,g) was

`(L^d/12) sum_a ||partial_aa(eta_epsilon(y) g(y))||_infinity`,

but proof step 1.2 applied the scalar trapezoid rule to

`f_x(y)=eta_epsilon(y-x) g(y)`.

Translating only eta does not translate g, so the unshifted product derivative supremum does not bound all those integrands. For example, the admissible smooth scalar g=1/eta has unshifted product identically one and zero second derivative, while eta(y-x)/eta(y) is nonconstant for a nontrivial kernel shift (the explicit one-dimensional kernel at half-period gives a ratio of nonconstant opposite-sign cosine denominators). A nonconstant smooth periodic function cannot have identically zero second derivative. This demonstrates the missing derivative bound in the argument; no unperformed numerical test or claimed numeric counterexample to the entire final normalized bound is being asserted.

With root's explicit approval the scalar supplier was corrected and extended, rather than discarding its bound. For every finite real vector dimension m>=1, use the Euclidean norm, with ||g||_infinity=sup_y |g(y)|_2, and define

`C_(eta,g)=(L^d/12) sum_a sup_(x,y) |partial_(y_a y_a)[eta_epsilon(y-x)g(y)]|_2`.

For each fixed gather point x, project the vector quadrature error q_x onto an arbitrary Euclidean unit v. The existing scalar trapezoid theorem bounds |v.q_x| by C_(eta,g)h² since |v.partial_aa f_x|<=|partial_aa f_x|_2. If q_x is nonzero, choose v=q_x/|q_x|_2; otherwise the conclusion is immediate. Thus the exact same 1/12 coefficient bounds the vector error, with no sqrt(m) factor. The convolution normalization correction has the same Euclidean estimate by projecting its integral and using eta>=0 and integral eta=1. The original scalar case is m=1, and the measure-deposition, partition, positivity and Z_min estimates are unchanged.

A finite explicit Leibniz upper bound is included using the separate suprema of eta, partial_a eta, partial_aa eta, g, partial_a g and partial_aa g. Thus the corrected joint supremum has concrete derivative controls independent of gather translation.

The force theorem's C_(eta,E) is now exactly this joint shifted-product constant for m=d. It explicitly states the Euclidean field/grid-vector infinity norm, cites the proved vector branch and retains C_int=(C_(eta,E)+||E||_infinity C_eta)/Z_min. This is a genuine constant-definition correction, not a claim that the old formula was unchanged. The staged unit-source proof checks translation uniformity correctly: translating the unit-source field is absorbed by translating both the spatial variable and the free gather point in the joint supremum. No translation invariance of the discrete grid kernel is asserted.

All original fixed-epsilon rates remain: h^(2-d/2) for d=1,2,3, interpolation h², RK4 Delta t^4 and the same coupling factors. The corrected constants are finite for the stated smooth solution, and the original valid capabilities in dimensions 1–3 are preserved.

During the necessary full mean-field supplier reading, proof 3.1 had prose “steps 1.1–1.2” although the needed flow construction is in steps 1.1 and 2.1. Its tags already named the right existing steps. This prose citation was surgically corrected; its Statement, hypotheses and proof argument are unchanged.

## Same-owner old/current consumers

The four changed Statements have no aliases. The old/current actual source/dependency/reference closure contains those four items and the manufactured one-dimensional example. Their only relevant page carrier is the assigned A-page; the companion examples page summarizes the same example. Searches found no outside source or published consumer requiring repair. All following current claims/proofs or page text were read in full for the affected use.

| Supplier/consumer | Disposition |
| --- | --- |
| lem-periodic-pic-shape-partition-and-quadrature-bound | Repaired before force consumers. Scalar deposition and normalization claims retained; gathered-sample claim extended to Euclidean vectors with the corrected uniform shifted-product constant and finite projection proof. |
| thm-periodic-pic-smooth-density-grid-force-consistency | Repaired after its quadrature supplier. Uses m=d and the exact corrected C_(eta,E), with explicit Euclidean norm. Source residual and inverse/derivative estimates unchanged, including gamma<=L/4 and h^(-d/2). |
| thm-periodic-pic-rk4-finite-time-error-on-a-controlled-tube | Repaired before staged consumer. Direct geometric proof establishes every uniform partial grid subject to the admitted positive step-width bound; original fitting grids retained. |
| thm-periodic-pic-staged-fixed-regularization-error-budget | Repaired after both suppliers. Explicit grid/h_0, valid partial-grid invocation, and joint-supremum source-translate argument. Original prescribed-coupling-before-infimum proof, all three budget terms and rates retained. |
| ex-periodic-smooth-density-poisson-grid-force-error | Accept unchanged. Its d=1 Fourier source/field/convolution computation remains exact. Its C_int is referenced from the force theorem rather than restated with the old product formula, so it now uses the corrected finite constant automatically. The h^(3/2)+h² convergence statement is unchanged. |
| particle-in-cell-and-particle-mesh-kinetic-methods | Updated summary to state Euclidean translation-uniform vector quadrature and uniform partial-grid times with Delta t<=h_0 plus the compact-tube/local-defect requirements. Existing model and error/rate scope retained. |
| particle-in-cell-and-particle-mesh-kinetic-methods-examples | Accept unchanged. Its manufactured-density summary makes no incompatible constant or time-grid assertion. |
| thm-periodic-pic-mean-field-error-with-force-defect | Actual supplier context, not a new consumer of the corrected quadrature/RK4 Statements. Only the stale prose step reference was repaired; prescribed-coupling proof and Statement unchanged. |
| thm-periodic-pic-poisson-residual-to-gathered-force-bound | Accept unchanged after full reading. Existing repaired approximate-potential residual, constant-kernel annihilation, zero mean and actual inverse/derivative norm proof remain valid and untouched. |
| lem-periodic-composite-trapezoid-error | Accept unchanged after full reading. It remains a scalar result; the vector projection extension is proved in its local shape consumer, so there is no unsupported scalar-to-vector application or wider supplier-interface change. |

No affected downstream item was omitted or left for an unrelated reviewer, and no consumer Statement was narrowed to avoid the repair.

## Final explicit check and handoff

After all final source edits ran:

`node tools/proof-layout.mjs items/lem-periodic-pic-shape-partition-and-quadrature-bound.md items/thm-periodic-pic-smooth-density-grid-force-consistency.md items/thm-periodic-pic-rk4-finite-time-error-on-a-controlled-tube.md items/thm-periodic-pic-staged-fixed-regularization-error-budget.md items/thm-periodic-pic-mean-field-error-with-force-defect.md`

Actual result: exit 0; `proof-layout: 5 items, 18 steps, 0 defects`.

No tests, full validators, gates, native control/state/report edits, metadata recertification, readiness or hash generation were performed. Root owns source/dependency mirrors and proof-contract quote updates (including the removed unused recurrence dependency), current hashes, readiness and the native owner resolution. Both final native findings and the directly confirmed shifted-product prerequisite defect are substantively resolved.
