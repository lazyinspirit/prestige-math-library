# Batch 12 scaffold — frontier-33

Scope: only this batch's pages.json, coverage.json and notes.md. Scaffold stage; no item bodies or workflow state edited.

Design read: research/plan-pde-track.md PDE-4 lines 690–745 and additions 3002–3013; PDE-3 published page and exact mean-value/regularity dependency statements read. Spec agrees on pair identity, order 458.005/458.006 and PDE-3 examples prerequisite. Design gives no numerical order and additionally mentions generic topology/geometry; any validator prerequisite conflict is left to drift, not repaired in plan structure.

Sources read through web PDF extraction: H = Hunter, Notes on Partial Differential Equations, June 2014, URL below; G = Tsogtgerel Gantumur, Harmonic functions, October 28 2012, URL below. Both have contents; H is a complete 242-page graduate course and G an independent 20-page treatment. Exact ranges and every harvested heading are in coverage.json. No unread Teschl/Evans citation is used as backing. The design mislocates H: §2.7 is Newtonian potentials, not a Harnack convergence or removable-singularity section. H §2.4 ends with the monotone convergence observation; G Theorem 26 proves it and G Theorem 17 proves removability.

Conventions: real-valued classical C2 functions; subharmonic means Delta u >= 0; domain means nonempty connected open set. Weak/comparison results work on arbitrary bounded nonempty open sets, with continuity on their closure. n >= 2 unless explicitly stated; elementary maximum and mean-ball arguments also work for n=1. Hopf uses the supplied tangent sphere vector nu=(p-a)/R and the one-sided derivative lim[t down to 0](u(p)-u(p-t nu))/t, assumed to exist; no general boundary normal theorem is invoked. Zero harmonic functions are handled before taking ratios.

Source correction: H p.30 after its displayed Delta v=2c alpha(2alpha|x|^2-n)exp(-alpha|x|^2), the prose says Delta v<0. For alpha>=2n/R^2 on R/2<|x|<R the correct sign is >=0 (strict inside); retain the displayed calculation, not that typo.

Dependency closure decisions: strong harmonic maximum uses mean values and a clopen maximum set. Add subharmonic mean inequality and strong version to retain H Theorem 2.13. Finite chains are built in the ambient connected open set, never by claiming an arbitrary compact connected set is path connected. Ball reachability is clopen; finitely many local balls covering K plus finitely many connecting chains give a fixed finite family independent of u. Monotone convergence uses Cauchy differences, so no new Arzela-Ascoli theorem is needed.

Harmonic replacement obligation: PDE-3 has no Poisson formula. Add only a smooth-sphere-data replacement lemma, with the explicit kernel verified inline, before removability. This is a restricted prerequisite of the later continuous-data Poisson theorem, not a second unrestricted claim. PDE-6 keeps its Green-function derivation and general continuous-data theorem. The B kernel-ratio computation uses this earlier lemma; the design's claim that a Poisson mean representation already exists on PDE-3 is false on disk. Record this seam for drift; do not edit PDE-6. No general Green identity or fundamental-solution theorem is imported from a later page.

For replacement, verify Delta_x P=0 by Cartesian differentiation; integral of P is rotation invariant, smooth harmonic and therefore constant (radial ODE with regularity at zero), and equals 1 at zero. Boundary convergence follows from positive unit mass plus near/far splitting. Differentiation under the compact sphere integral is justified by uniform bounds on derivatives away from the sphere; use finite charts or dominated convergence as already available. This proves the lemma without Green representation. Annular barriers in removability are written explicitly inline, separately for n=2 and n>=3.

Fetch limitation: web open successfully exposes both complete PDFs, but shell curl and Node fetch fail DNS (EAI_AGAIN). Do not fabricate byte hashes or fetch_verified stamps. Run required fetch/liveness validators and record actual outcomes below.

## Item checkpoints

### def-subharmonic-and-superharmonic-functions-in-rn

Claim/conventions: On open Omega in Rn, u in C2 is subharmonic if Delta u>=0 and superharmonic if Delta u<=0; harmonic means both.

Dependencies: def-laplacian-of-a-c2-function.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — §2.1.1 Definition 2.4, p.22.

Proof/dependency rationale: Fix classical sign convention; no semicontinuous generalization.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### lem-strict-subharmonic-perturbation

Claim/conventions: Delta(u+epsilon|x|^2)>=2n epsilon>0; this perturbation has no interior local maximum for epsilon>0.

Dependencies: def-subharmonic-and-superharmonic-functions-in-rn.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — §2.3.1 proof of Theorem 2.17, pp.27–28.

Proof/dependency rationale: Restrict to each coordinate line at a local maximum: each second derivative is nonpositive. Sum and contradict the displayed positive Laplacian.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### thm-weak-maximum-principle-for-the-laplacian

Claim/conventions: For bounded nonempty open Omega and subharmonic u in C2(Omega) intersect C(closure Omega), max on closure equals max on boundary.

Dependencies: lem-strict-subharmonic-perturbation, thm-heine-borel-rn, thm-extreme-value-metric.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Theorem 2.17 and following subharmonic extension, pp.27–28.

Proof/dependency rationale: Compact closure supplies a maximum; strict perturbation puts it on boundary; bound epsilon|x|^2 by epsilon R^2 and send epsilon to zero.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### cor-weak-minimum-principle-for-the-laplacian

Claim/conventions: Under the same closure and boundedness assumptions, a superharmonic function has its minimum on the boundary.

Dependencies: thm-weak-maximum-principle-for-the-laplacian.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — §2.3.1 p.28.

Proof/dependency rationale: Apply weak maximum to -u.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### thm-comparison-principle-for-classical-subharmonic-functions

Claim/conventions: For u,v in C2(Omega) intersect C(closure Omega) on bounded open Omega, Delta u>=Delta v and u<=v on boundary imply u<=v throughout.

Dependencies: thm-weak-maximum-principle-for-the-laplacian.

Support: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §6 Corollary 10, p.9.

Proof/dependency rationale: Apply weak maximum to u-v; no connectedness needed.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### lem-classical-subharmonic-mean-value-inequalities

Claim/conventions: A classical subharmonic function lies below both sphere and ball averages on every compactly contained ball; inequalities reverse for superharmonic functions.

Dependencies: def-subharmonic-and-superharmonic-functions-in-rn, lem-radial-derivative-of-a-spherical-average, thm-polar-coordinates-formula-for-lebesgue-measure.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — §2.1.1 Theorem 2.5, p.22.

Proof/dependency rationale: The published spherical derivative identity has nonnegative right side; integrate from zero, then integrate radii with positive weights.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### thm-strong-maximum-principle-for-classical-subharmonic-functions

Claim/conventions: On connected open Omega a C2 subharmonic function attaining its global maximum at an interior point is constant.

Dependencies: lem-classical-subharmonic-mean-value-inequalities, def-connected-space.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Theorem 2.13, p.26.

Proof/dependency rationale: Maximum set is relatively closed; a nonpositive continuous integrand with nonnegative integral vanishes throughout a ball, hence the set is open.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### thm-strong-maximum-principle-for-harmonic-functions

Claim/conventions: A harmonic function on a domain attaining an interior global maximum or minimum is constant.

Dependencies: cor-ball-mean-value-property-for-harmonic-functions, def-connected-space.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Theorem 2.15, pp.26–27.

Proof/dependency rationale: Use mean values directly on M-u to make the maximum set clopen; apply the same proof to -u for minima.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### cor-nonnegative-harmonic-function-with-an-interior-zero-vanishes

Claim/conventions: A nonnegative harmonic function on a domain is either identically zero or strictly positive.

Dependencies: thm-strong-maximum-principle-for-harmonic-functions.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Theorem 2.15, pp.26–27.

Proof/dependency rationale: An interior zero is a global minimum. This discharges all later divisions by positive harmonic values.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### cor-uniqueness-for-the-classical-dirichlet-problem

Claim/conventions: On bounded open Omega, two C2 interior, continuous-closure solutions of the same Poisson equation and same Dirichlet data agree.

Dependencies: thm-comparison-principle-for-classical-subharmonic-functions.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Theorem 2.18, p.28.

Proof/dependency rationale: Apply comparison in both directions; harmonic Dirichlet uniqueness is the zero-source special case.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### cor-poisson-supremum-estimate-from-a-quadratic-barrier

Claim/conventions: If Omega lies in a slab 0<x1<d and Delta u is bounded, then sup|u|<=sup_boundary|u|+(d^2/2)sup|Delta u| for C2 interior, continuous-closure u.

Dependencies: thm-comparison-principle-for-classical-subharmonic-functions.

Support: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §6 Corollary 11, p.9.

Proof/dependency rationale: Set gamma=sup|Delta u|/2 and v=sup_boundary|u|+gamma(d^2-x1^2); compare both u and -u with v.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### def-interior-sphere-condition-and-sphere-normal

Claim/conventions: At p in boundary Omega, an interior tangent ball B_R(a) contained in Omega supplies nu=(p-a)/R; define the outward derivative by the one-sided inward-segment difference quotient.

Dependencies: none.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Definition 2.19 and Lemma 2.21, p.29.

Proof/dependency rationale: Specify the supplied ball and directional derivative, without assuming a globally defined boundary normal.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### lem-interior-sphere-barrier-for-the-laplacian

Claim/conventions: On R/2<|x-a|<R, v=c(exp(-alpha|x-a|^2)-exp(-alpha R^2)) has v=1 on inner sphere, v=0 on outer sphere, Delta v>=0 and outward derivative <0, for alpha>=2n/R^2 and normalizing c>0.

Dependencies: def-subharmonic-and-superharmonic-functions-in-rn, def-interior-sphere-condition-and-sphere-normal.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Lemma 2.21 proof, pp.29–30.

Proof/dependency rationale: Compute the Cartesian Laplacian and radial derivative explicitly. Correct the source prose sign typo using its displayed formula.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### thm-hopf-boundary-point-lemma-for-the-laplacian

Claim/conventions: Let u be C2 subharmonic in Omega and continuous at p and on the closed tangent ball, u<M throughout Omega, u(p)=M. If an interior sphere exists at p and its outward directional derivative exists, then that derivative is strictly positive.

Dependencies: lem-interior-sphere-barrier-for-the-laplacian, thm-weak-maximum-principle-for-the-laplacian.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Lemma 2.21, pp.29–30.

Proof/dependency rationale: Choose epsilon=M-max_inner_sphere u>0; compare u+epsilon v-M on the annulus. Divide the inward-segment inequality by t and pass to the limit; no differentiability of the whole boundary is required.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### thm-harnack-inequality-on-a-ball

Claim/conventions: For nonnegative harmonic u on B_R(a), u(x)<= (R/(R-|x-a|))^n u(a). In particular a fixed dimension/radius-ratio two-sided comparison holds on each B_r(a), r<R.

Dependencies: cor-ball-mean-value-property-for-harmonic-functions, lem-sphere-and-ball-measures-scale.

Support: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §5 Lemma 5, p.8; H Theorem 2.22 local proof p.31.

Proof/dependency rationale: Integrate the contained ball B_(s-|x-a|)(x) inside B_s(a) for |x-a|<s<R and send s up to R. For a two-sided constant cover the segment a to x by m=ceil(4r/(R-r))+1 steps of length at most (R-r)/4, apply the local bound on radius (R-r)/2 balls in both directions: 2^(nm) suffices. No boundary trace at radius R is assumed.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### lem-finite-harnack-chain-on-a-compact-connected-subset

Claim/conventions: For compact K inside connected open Omega there is a finite family of interior balls covering K, with connected overlap graph and each fourfold concentric ball inside Omega.

Dependencies: def-connected-space, thm-heine-borel-rn.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Theorem 2.22 proof, p.31; G Lemma 25 pp.18–19.

Proof/dependency rationale: Prove finite-ball reachability from a base ball is both open and closed in Omega. Select a finite cover of K and finitely many chains connecting their centers. Shrink subdivided chains if needed so fourfold balls remain inside. K itself need not be path connected; the stronger compact-K form supports monotone convergence.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### cor-harnack-inequality-on-compact-subsets

Claim/conventions: For compact nonempty K in a domain Omega, there is C(K,Omega)>=1 with sup_K u<=C inf_K u for every nonnegative harmonic u.

Dependencies: thm-harnack-inequality-on-a-ball, lem-finite-harnack-chain-on-a-compact-connected-subset, cor-nonnegative-harmonic-function-with-an-interior-zero-vanishes.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Theorem 2.22, pp.31–32; G Lemma 25 pp.18–19.

Proof/dependency rationale: Use the fixed finite overlap family and multiply local constants, using any common point in each overlap. Treat u=0 separately.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### thm-harnack-convergence-principle

Claim/conventions: An increasing sequence of harmonic functions on a domain either tends to +infinity at every point or converges locally uniformly to a harmonic function.

Dependencies: cor-harnack-inequality-on-compact-subsets, thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic.

Support: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §11 Theorem 26, p.19.

Proof/dependency rationale: If bounded above at one point, apply compact Harnack to nonnegative differences u_j-u_i on K union that point. Scalar monotone convergence gives uniform Cauchy control. If no point is bounded above, monotonicity gives divergence everywhere.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### lem-smooth-sphere-data-have-a-harmonic-replacement

Claim/conventions: For n>=2, smooth data g on the sphere of a ball have a harmonic replacement h smooth inside and continuous on the closed ball, equal to g on the sphere. The replacement is the integral of g against (R^2-|x-a|^2)/(R |S^(n-1)| |x-y|^n).

Dependencies: def-laplacian-of-a-c2-function, lem-sphere-and-ball-measures-scale, thm-spherical-mean-value-property-for-harmonic-functions, cor-uniqueness-for-the-classical-dirichlet-problem.

Support: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §8 equations (77)–(88), Theorem 15, pp.13–14.

Proof/dependency rationale: Verify harmonicity, unit mass and boundary convergence directly as detailed above; uniqueness uses weak maximum. Restrict statement to smooth data needed here; later PDE-6 owns continuous data and Green-function derivation. Kernel and mass calculation stay inline.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### lem-derivative-estimate-proof-of-one-sided-harmonic-liouville

Claim/conventions: For n>=2, nonnegative harmonic u on B_R(a) satisfies |gradient u(a)|<=n u(a)/R; hence nonnegative entire harmonic u has zero gradient.

Dependencies: lem-smooth-sphere-data-have-a-harmonic-replacement, lem-derivatives-of-harmonic-functions-are-harmonic.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Theorem 2.7 and Corollary 2.8 p.23; G §8 (77)–(78) pp.13–14.

Proof/dependency rationale: Represent u on every smaller closed ball with its smooth trace by replacement and uniqueness. Differentiate at center: gradient is n/R times the spherical average of u times the unit vector. Positivity bounds its norm by n u(a)/R. Pass through smaller radii, then send R to infinity for entire u. This records the design-required alternate gradient route without importing later interior estimates.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### thm-liouville-theorem-for-bounded-harmonic-functions

Claim/conventions: A real entire harmonic function bounded above or bounded below is constant.

Dependencies: thm-harnack-inequality-on-a-ball.

Support: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §5 Corollary 6 and Exercise 10, p.8.

Proof/dependency rationale: Shift and possibly negate to obtain u>=0. For fixed x,y use Lemma 5 on arbitrarily large balls centered at y; the constant tends to 1. Interchange x,y. The preceding gradient lemma supplies a second proof, not a cyclic dependency.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### cor-positive-entire-harmonic-functions-are-constant

Claim/conventions: Every nonnegative entire harmonic function is constant.

Dependencies: thm-liouville-theorem-for-bounded-harmonic-functions.

Support: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §5 Corollary 6, p.8.

Proof/dependency rationale: Specialize the one-sided bound to zero; retain the design corollary as its positivity-facing formulation.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### cor-entire-harmonic-functions-with-bounded-gradient-are-affine

Claim/conventions: If u is entire harmonic and its gradient is bounded, u(x)=b+c dot x.

Dependencies: lem-derivatives-of-harmonic-functions-are-harmonic, thm-liouville-theorem-for-bounded-harmonic-functions.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Theorem 2.7 and Corollary 2.8 p.23, applied to harmonic derivatives.

Proof/dependency rationale: Each partial derivative is bounded entire harmonic and constant. Integrate the constant gradient along the segment from 0 to x.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### cor-removable-singularity-for-bounded-harmonic-functions

Claim/conventions: For n>=2, a harmonic function on Omega minus {p}, bounded in a punctured neighborhood of p, has a unique harmonic extension across p.

Dependencies: lem-smooth-sphere-data-have-a-harmonic-replacement, thm-comparison-principle-for-classical-subharmonic-functions.

Support: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §8 Theorem 17, p.14.

Proof/dependency rationale: Choose a closed ball inside Omega. Replace its smooth boundary values by h. For w=u-h bounded by M near zero use M(delta/|x|)^(n-2) in n>=3, and M log(R/|x|)/log(R/delta) in n=2. Both dominate +/-w on the annular boundary; send delta to zero at each fixed x. Differentiate radial profiles inline. The same proof also records inline the stronger source condition u=o(|x|^(2-n)) or o(log(1/|x|)).

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### thm-maximum-principle-with-limsup-control-at-infinity

Claim/conventions: If Omega is unbounded open, u is C2 subharmonic and continuous on its closure, u<=M on the boundary, and limsup as |x| tends to infinity within Omega of u(x)<=M, then u<=M in Omega.

Dependencies: thm-weak-maximum-principle-for-the-laplacian.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — §2.3.1 Theorem 2.17 pp.27–28, truncation consequence.

Proof/dependency rationale: For epsilon>0 choose R0 with u<=M+epsilon beyond R0. Apply bounded-domain weak maximum on Omega intersect B_R, R>R0. Its boundary consists of old boundary and cut sphere points; then send epsilon to zero. No global boundary smoothness is required.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### rem-maximum-principles-need-domain-and-boundary-hypotheses

Claim/conventions: Keep bounded-domain closure continuity, connected-domain strong maximum, and tangent-sphere Hopf assumptions distinct; unbounded domains need infinity control.

Dependencies: thm-weak-maximum-principle-for-the-laplacian, thm-strong-maximum-principle-for-harmonic-functions, thm-hopf-boundary-point-lemma-for-the-laplacian, thm-maximum-principle-with-limsup-control-at-infinity.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — §§2.3–2.4, pp.26–32.

Proof/dependency rationale: Explain the four distinct scopes and sign conventions. Do not add the source's open-mapping consequence here: under its connected-domain hypotheses it is a direct consequence of the strong maximum principle, but is not needed by this item and is deliberately deferred for later PDE-6 treatment.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### ex-harmonic-function-attaining-only-boundary-extrema

Claim/conventions: On the unit ball u(x)=x1 is harmonic, reaches +/-1 only on the boundary and has outward derivative +1 at e1.

Dependencies: thm-weak-maximum-principle-for-the-laplacian, thm-hopf-boundary-point-lemma-for-the-laplacian.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Theorems 2.17 and Lemma 2.21, pp.27–30, affine specialization.

Proof/dependency rationale: Differentiate u, locate extrema by |x1|<=|x|, and evaluate gradient dot e1.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### ex-harnack-constant-from-the-poisson-kernel-ratio

Claim/conventions: For n>=2, u>=0 harmonic on B_R, t=|x|/R<1 gives (1-t)/(1+t)^(n-1) u(0)<=u(x)<=(1+t)/(1-t)^(n-1) u(0).

Dependencies: lem-smooth-sphere-data-have-a-harmonic-replacement, thm-harnack-inequality-on-a-ball.

Support: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §8 Remark 14 equations (80)–(81), p.13.

Proof/dependency rationale: Use smooth traces on balls of radius s<R, bound s-|x|<=|x-y|<=s+|x|, use spherical mean, and send s to R.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### cex-maximum-principle-fails-for-superharmonic-maxima

Claim/conventions: u=-|x|^2 on the unit ball is superharmonic and has strict interior maximum zero.

Dependencies: def-subharmonic-and-superharmonic-functions-in-rn.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Example 2.14 p.26, sign reversal.

Proof/dependency rationale: Delta u=-2n<0 and boundary value -1 refute the wrong-sign maximum assertion.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### cex-weak-maximum-principle-needs-boundedness-or-control-at-infinity

Claim/conventions: On the upper half-space u(x)=xn is harmonic, zero on its nonempty boundary and positive inside, disproving an unqualified unbounded-domain weak maximum principle.

Dependencies: thm-weak-maximum-principle-for-the-laplacian.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — §2.3.1 pp.27–28, hypothesis test.

Proof/dependency rationale: Direct affine calculation. Use the stronger nonempty-boundary example instead of merely invoking the empty boundary of Rn; same design obligation is retained.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### cex-hopf-lemma-needs-a-boundary-geometry-hypothesis

Claim/conventions: Near 0 in the right half-plane set r=sqrt(x^2+y^2), theta=atan(y/x), u=(x log r+y theta)/((log r)^2+theta^2). On Omega={0<r<1/2,x>0,u<0}, u has boundary maximum 0 at 0 and accessible outward derivative along -e1 equal to 0, and no interior tangent ball exists there.

Dependencies: def-interior-sphere-condition-and-sphere-normal, thm-hopf-boundary-point-lemma-for-the-laplacian.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Example 2.20, p.29.

Proof/dependency rationale: Verify Delta u=0 by real differentiation (or explicitly verify the Cauchy-Riemann identities for the displayed real/imaginary pair; do not import a plane theorem). u(t,0)=t/log t gives the zero derivative. The boundary is tangent to the y-axis since u=0 forces x/|y| to zero. A tangent ball centered on the x-axis contains points with x=O(y^2), where x log r+y theta>0, contradiction. Select the component containing the positive x-axis if needed; this is the sourced cusp-type example, not an invented geometry claim.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### cex-liouville-needs-one-sided-boundedness

Claim/conventions: u(x)=x1 is nonconstant entire harmonic and is unbounded in both signs.

Dependencies: thm-liouville-theorem-for-bounded-harmonic-functions.

Support: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §5 Corollary 6 and Exercise 10, p.8, affine hypothesis test.

Proof/dependency rationale: Compute Laplacian and values on +/-t e1.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### cex-unbounded-punctured-harmonic-singularity-is-not-removable

Claim/conventions: On a punctured ball, log|x| for n=2 and |x|^(2-n) for n>=3 are harmonic and have no continuous extension at 0.

Dependencies: cor-removable-singularity-for-bounded-harmonic-functions.

Support: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §8 Theorem 17 proof, p.14, radial profiles.

Proof/dependency rationale: Compute Delta f(r)=f second derivative+(n-1)f first derivative/r in Cartesian coordinates; divergence at zero prevents a continuous extension.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### cex-strong-maximum-principle-needs-connectedness

Claim/conventions: Give u=1 and u=0 on two disjoint balls. It is harmonic and attains an interior global maximum without being globally constant.

Dependencies: thm-strong-maximum-principle-for-harmonic-functions.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Discussion after Theorem 2.13, p.26.

Proof/dependency rationale: Verify harmonicity separately on both open components.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### cex-hopf-conclusion-needs-a-strict-nonconstant-extremum

Claim/conventions: A constant harmonic function on a ball attains a boundary maximum with zero outward derivative.

Dependencies: thm-hopf-boundary-point-lemma-for-the-laplacian.

Support: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §8 Exercise 14, pp.14–15.

Proof/dependency rationale: Direct constant derivative calculation retains the source exception unless constant.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

### ex-subharmonic-quartic-and-harmonic-saddle

Claim/conventions: On the unit ball |x|^4 is subharmonic and below the harmonic boundary replacement 1; x1^2-x2^2 is harmonic and has a saddle at 0.

Dependencies: def-subharmonic-and-superharmonic-functions-in-rn, thm-comparison-principle-for-classical-subharmonic-functions, thm-strong-maximum-principle-for-harmonic-functions.

Support: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Example 2.6 p.22 and Example 2.16 p.27.

Proof/dependency rationale: Compute Delta |x|^4=4(n+2)|x|^2; the quadratic has cancelling second derivatives and opposite signs on the coordinate axes.

Status: scaffold complete; authoring and proof review remain step 5 obligations. Next: complete remaining scaffold and run gates.

## Harvest completion and scope seams

26 A items and 10 B items; no split required. Source G Exercise 11 is retained inline in ball Harnack, Exercise 12 converse inline in the mean inequality, and G boundary uniform stability inline in uniqueness. Hunter's unnumbered open-mapping consequence is deferred to PDE-6: under its connected-domain hypotheses it is a direct strong-maximum-principle consequence, but is not needed in this pair's hypothesis remark. Theorem 17 stronger little-o removability is retained inline with the bounded statement. These are authoring obligations, not claims that bodies already exist. G Theorem 28 exposes a design PDE-3 addition absent on disk; deferred precisely to that predecessor for drift, without relying on it.

Additional exact verification: https://www.math.uni-hamburg.de/home/schmidt/lectures/PDE.pdf §2.4 Remark (1), printed p.22: infinity limsup maximum and affine half-space counterexample, full proof read via web extraction. The two relevant manifest source references now use this exact treatment. No original_url is needed: no recorded URL was replaced.

## Validator checkpoint

Current plan-spec validate-plan: exit 0 (existing empty batch scaffold not included). Ephemeral validation copy with only the two owned item lists overlaid: exit 0.

## Final scaffold checkpoint

The replacement lemma explicitly depends on thm-dominated-convergence: difference quotients of each kernel derivative have a uniform bound on the finite sphere measure for x in a compact interior ball. The derivative-estimate lemma carries both the signed supremum estimate from H Theorem 2.7 and the positive center-value refinement used in its expanding-ball limit. This retains the full harvested first-derivative claim.

Completed authoring plans: all 36 item IDs and exact dependencies are in pages.json; all 57 harvested headings/results have dispositions in coverage.json. A=26, B=10, below the 60-item limit. Published IDs and aliases are checked by validate-plan; no collisions found. No proofs have been authored or reviewed in this scaffold dispatch.

Validator results:
- coverage-checklist --require-destination: PASS, 1 A page, 57 harvested rows, zero errors/warnings.
- content-policy --manifest-only for batch 12: PASS, 36 items, zero errors/warnings.
- content-policy --manifest-only research/frontier-33-batch-*.pages.json: FAIL at the observed snapshot, 317 items, five missing-dependency errors outside batch 12: thm-kernel-range-annihilator-identities -> def-weak-star-topology and thm-bipolar-closure-for-linear-subspaces; ex-dual-of-a-finite-dimensional-space -> thm-all-norms-on-a-finite-dimensional-space-are-equivalent; def-localization-of-a-category-at-a-class-of-morphisms -> def-functor; lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms -> def-flat-module. Other owners' files remain untouched.
- validate-plan research/plan-spec.json: PASS. Also PASS for an ephemeral copy overlaying this batch's exact two manifest pages, so this includes the actual proposed dependency graph rather than merely the empty spec placeholders.
- source-fetch-check --coverage research/frontier-33-batch-12.coverage.json --stamp --timeout-sec 10: FAIL, 0/3 stamps, all three URLs EAI_AGAIN.
- url-sweep --coverage research/frontier-33-batch-12.coverage.json --recover --fail-on-dead --timeout-ms 5000: FAIL, 0/3 live and no recovered snapshot. Each failure is curl error 6, Could not resolve host. Archive failure under the same DNS outage does NOT establish that the documents are unavailable or justify re-sourcing. The three original URLs remain because the web tool successfully opened their complete text. No fabricated fetch hashes or liveness stamps were written.

Read evidence is content-specific: H 2.21 exponential formula and sign correction, G 15 kernel differentiation/unit-mass/boundary splitting, G 17 separate power/log annulus barriers, G 26 nonnegative Cauchy differences, and Schmidt 2.4 Remark (1) maximizing-sequence proof were read through completion, not inferred from citations or contents. Source URLs, locators and harvest are recorded above and in coverage.

Unresolved release obligations: command-line source-fetch/liveness gates must run in a network-capable environment and genuinely pass; whole-run missing dependencies must be repaired by their owners. This batch is NOT marked ready. The control plane owns those transitions. Next action is to rerun the failed validators after those external blockers clear, preserving this harvest and scope. At authoring, reread the exact source passages and dependency statements, then discharge the per-item strategies (especially sphere normalization, finite chains and cusp geometry); authoring review gates remain entirely outstanding.

Final dependency-name correction: the published DCT ID is thm-dominated-convergence (exact statement read). Final overlaid validate-plan exit 0.

## Step-3 fix pass

### Finding id (verbatim stable-review locator): Alpha-b / Batch 12 — "One false extra attribution was corrected"

Disposition: corrected in recheck. Hunter, *Notes on Partial Differential Equations*, §2.3, printed p.27 (https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf), explicitly presents the open-mapping statement as a consequence of the strong maximum principle under its connected-domain hypotheses; no unique-continuation or analyticity input is needed for that conclusion. The decision not to state it in this batch remains sound because no assigned PDE-4 item uses it; its later treatment remains deferred to `poisson-problems-and-interior-harmonic-estimates` (PDE-6).

Changed scaffold record: `Harvest completion and scope seams` and the corresponding coverage reason now state the direct strong-maximum-principle route accurately. The harvested row remains `deferred` to `poisson-problems-and-interior-harmonic-estimates`; `rem-maximum-principles-need-domain-and-boundary-hypotheses` continues not to state the open-mapping theorem. No page-item identity, dependency, or source-harvest row was changed.

Evidence re-read for this pass: Hunter §2.3 (Definition/Theorems 2.13, 2.15, and the unnumbered p.27 consequence); Gantumur, *Harmonic functions*, §5 Lemma 5, §8 Theorems 15 and 17, and §11 Theorem 26 (https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf); Schmidt, *Lectures Notes on PDE*, §2.4 Remarks (1) (https://www.math.uni-hamburg.de/home/schmidt/lectures/PDE.pdf). The coverage records retain full-fetch metadata for all three sources: Hunter `0dbade1806f7a1ea`, Gantumur `f7b47edc71970cdf`, and Schmidt `b93d4641f484dcf7`.

Current item obligations after the fix: the 36 planned records remain dependency-closed, each has an explicit `deps` array, and the A page remains 26 items (no split). At authoring, re-read the cited passages and preserve the stated deferral rather than adding the open-mapping assertion.

Validation after the fix (2026-09-07):

- `node tools/coverage-checklist.mjs research/frontier-33-batch-12.coverage.json --require-destination` — PASS: 1 page, 57 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-*.pages.json` — PASS: 923 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — PASS: declared page order acyclic; no item-level cycles, forward references, B-page dependencies, or unresolved IDs among the pages with item lists.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-12.coverage.json --stamp --timeout-sec 20` — PASS: 3/3 sources fetch-verified; existing stamps remained current and no stamp changed.

## Step-5 authoring

2026-09-07. Required inputs and Alpha group b review read. Only assigned drafts and batch reports are being authored. Source passages read through completion via web extraction: Hunter §§2.1.1–2.4 (first derivative range only in §2.2); Gantumur §§5–6, §8 equations (77)–(88), Theorem 17, Exercise 14, and §11 Theorems 24–26; Schmidt §2.4 Remark (1). Shell download failed DNS; web text was available. No fetch/judge stamps written. Existing independent reviews preserved. n >= 2 and real classical functions throughout; countable choice is made explicit where the published polar formula is used.

### Authored `def-subharmonic-and-superharmonic-functions-in-rn`

Claim/conventions: Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be open, and let $u:\Omega\to\mathbb R$ belong to $C^2(\Omega)$. With the Laplacian of [[def-laplacian-of-a-c2-function]], $u$ is **subharmonic** when $\Delta u\ge0$ at every point, and **superharmonic** when $\Delta u\le0$. Thus $u$ is harmonic exactly when both conditions hold, and $u$ is superharmonic exactly when $-u$ is subharmonic. Here a **domain** means a nonempty connected open set. This is the classical $C^2$ convention; the equivalence with local mean inequalities is established in the mean-inequality lemma.

Dependencies: def-laplacian-of-a-c2-function.

Sources: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — §2.1.1 Definition 2.4, p.22.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: not-applicable. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `lem-strict-subharmonic-perturbation`

Claim/conventions: Let $n\ge2$, $\Omega\subseteq\mathbb R^n$ be open, and $u\in C^2(\Omega)$ be subharmonic. For $\varepsilon>0$, put $u_\varepsilon(x)=u(x)+\varepsilon|x|^2$. Then $\Delta u_\varepsilon\ge2n\varepsilon>0$, and $u_\varepsilon$ has no interior local maximum.

Dependencies: def-subharmonic-and-superharmonic-functions-in-rn.

Sources: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — §2.3.1 proof of Theorem 2.17, pp.27–28.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `thm-weak-maximum-principle-for-the-laplacian`

Claim/conventions: Let $n\ge2$ and let $\Omega\subseteq\mathbb R^n$ be bounded, nonempty and open. If $u\in C^2(\Omega)\cap C(\overline\Omega)$ and $\Delta u\ge0$, then
$$\max_{\overline\Omega}u=\max_{\partial\Omega}u.$$
No connectedness or boundary smoothness is required.

Dependencies: lem-strict-subharmonic-perturbation, thm-heine-borel-rn, thm-extreme-value-metric.

Sources: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Theorem 2.17 and following subharmonic extension, pp.27–28.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `cor-weak-minimum-principle-for-the-laplacian`

Claim/conventions: For $n\ge2$, a bounded nonempty open $\Omega\subseteq\mathbb R^n$ and $u\in C^2(\Omega)\cap C(\overline\Omega)$ with $\Delta u\le0$ satisfy $\min_{\overline\Omega}u=\min_{\partial\Omega}u$.

Dependencies: thm-weak-maximum-principle-for-the-laplacian.

Sources: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — §2.3.1 p.28.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `thm-comparison-principle-for-classical-subharmonic-functions`

Claim/conventions: Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be bounded, nonempty and open, and let $u,v\in C^2(\Omega)\cap C(\overline\Omega)$. If $\Delta u\ge\Delta v$ in $\Omega$ and $u\le v$ on $\partial\Omega$, then $u\le v$ on $\overline\Omega$.

Dependencies: thm-weak-maximum-principle-for-the-laplacian.

Sources: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §6 Corollary 10, p.9.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `lem-classical-subharmonic-mean-value-inequalities`

Claim/conventions: Assume the Axiom of Countable Choice, as in the cited polar-coordinate theorem. Let $n\ge2$ and $u\in C^2(\Omega)$, where $\Omega\subseteq\mathbb R^n$ is open. If $\Delta u\ge0$, then for every $\overline B_r(a)\subset\Omega$, $r>0$,
$$u(a)\le\frac1{|\partial B_r|}\int_{\partial B_r(a)}u\,dS,\qquad u(a)\le\frac1{|B_r|}\int_{B_r(a)}u\,dx.$$
Both inequalities reverse for $\Delta u\le0$. Conversely, either family of local mean inequalities, for all sufficiently small radii at every center, implies the corresponding Laplacian inequality.

Dependencies: def-subharmonic-and-superharmonic-functions-in-rn, lem-radial-derivative-of-a-spherical-average, thm-polar-coordinates-formula-for-lebesgue-measure.

Sources: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — §2.1.1 Theorem 2.5, p.22.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `thm-strong-maximum-principle-for-classical-subharmonic-functions`

Claim/conventions: Assume countable choice for the mean-inequality input. Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be a domain, and let $u\in C^2(\Omega)$ satisfy $\Delta u\ge0$. If there is $a\in\Omega$ with $u(x)\le u(a)$ for every $x\in\Omega$, then $u$ is constant.

Dependencies: lem-classical-subharmonic-mean-value-inequalities, def-connected-space.

Sources: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Theorem 2.13, p.26.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `thm-strong-maximum-principle-for-harmonic-functions`

Claim/conventions: Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be a domain, and let $u\in C^2(\Omega)$ be harmonic. If $u$ attains a global maximum or a global minimum at a point of $\Omega$, it is constant.

Dependencies: cor-ball-mean-value-property-for-harmonic-functions, def-connected-space.

Sources: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Theorem 2.15, pp.26–27.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `cor-nonnegative-harmonic-function-with-an-interior-zero-vanishes`

Claim/conventions: Let $n\ge2$ and let $u\ge0$ be harmonic on a domain $\Omega\subseteq\mathbb R^n$. Then either $u\equiv0$ or $u(x)>0$ for every $x\in\Omega$.

Dependencies: thm-strong-maximum-principle-for-harmonic-functions.

Sources: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Theorem 2.15, pp.26–27.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `cor-uniqueness-for-the-classical-dirichlet-problem`

Claim/conventions: Let $n\ge2$ and let $\Omega\subseteq\mathbb R^n$ be bounded, nonempty and open. Two functions $u,v\in C^2(\Omega)\cap C(\overline\Omega)$ with $\Delta u=\Delta v$ in $\Omega$ and $u=v$ on $\partial\Omega$ agree on $\overline\Omega$. Thus prescribed classical Poisson equation and Dirichlet data have at most one such solution. Moreover, for equal Laplacians,
$$\sup_{\overline\Omega}|u-v|\le\sup_{\partial\Omega}|u-v|.$$
In particular, a sequence of such solutions with a common Laplacian and uniformly convergent boundary traces converges uniformly on the closure.

Dependencies: thm-comparison-principle-for-classical-subharmonic-functions.

Sources: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Theorem 2.18, p.28.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `cor-poisson-supremum-estimate-from-a-quadratic-barrier`

Claim/conventions: Let $n\ge2$ and let $\Omega\subseteq\mathbb R^n$ be bounded, nonempty and open, with $\Omega\subset\{x:0<x_1<d\}$ for some $d>0$. If $u\in C^2(\Omega)\cap C(\overline\Omega)$ and $L=\sup_\Omega|\Delta u|<\infty$, then
$$\sup_{\overline\Omega}|u|\le\sup_{\partial\Omega}|u|+\frac{d^2}{2}L.$$

Dependencies: thm-comparison-principle-for-classical-subharmonic-functions.

Sources: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §6 Corollary 11, p.9.

Decision: Restored the source hypothesis that Omega is bounded. A slab alone does not ensure it; the manifest now states the actual bounded-domain comparison scope. Statement provenance: ai-altered; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `def-interior-sphere-condition-and-sphere-normal`

Claim/conventions: Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be open, and let $p\in\partial\Omega$. An **interior tangent ball at $p$** is a ball $B_R(a)\subset\Omega$ with $R>0$ and $|p-a|=R$. Existence of such a ball is the **interior sphere condition**. Its supplied outward sphere direction is $\nu=(p-a)/R$.

For a real function defined on $B_R(a)\cup\{p\}$, the outward directional derivative, when the following finite limit exists, is
$$\partial_\nu u(p)=\lim_{t\downarrow0}\frac{u(p)-u(p-t\nu)}t.$$
The points $p-t\nu$ are in the ball for $0<t<2R$. This definition uses a specified sphere, without assuming a differentiable boundary or a normal field on all of $\partial\Omega$.

Dependencies: .

Sources: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Definition 2.19 and Lemma 2.21, p.29.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: not-applicable. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `lem-interior-sphere-barrier-for-the-laplacian`

Claim/conventions: Let $n\ge2$, $R>0$, $a\in\mathbb R^n$ and $\alpha\ge2n/R^2$. Set
$$c=(e^{-\alpha R^2/4}-e^{-\alpha R^2})^{-1},\qquad v(x)=c(e^{-\alpha|x-a|^2}-e^{-\alpha R^2}).$$
On the annulus $R/2<|x-a|<R$, $v$ is subharmonic; it equals $1$ on the inner sphere and $0$ on the outer sphere. At every point of the outer sphere its outward sphere derivative is strictly negative.

Dependencies: def-subharmonic-and-superharmonic-functions-in-rn, def-interior-sphere-condition-and-sphere-normal.

Sources: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Lemma 2.21 proof, pp.29–30.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `thm-hopf-boundary-point-lemma-for-the-laplacian`

Claim/conventions: Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be open, and suppose $B_R(a)\subset\Omega$ is an interior tangent ball at $p\in\partial\Omega$. Let $u\in C^2(\Omega)$ be subharmonic, with a continuous extension to $\overline B_R(a)$, such that $u(x)<M$ for every $x\in\Omega$ and $u(p)=M$. If the finite derivative $\partial_\nu u(p)$ exists for $\nu=(p-a)/R$, then $\partial_\nu u(p)>0$.

Dependencies: lem-interior-sphere-barrier-for-the-laplacian, thm-weak-maximum-principle-for-the-laplacian.

Sources: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Lemma 2.21, pp.29–30.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `thm-harnack-inequality-on-a-ball`

Claim/conventions: Let $n\ge2$, $R>0$, and let $u\ge0$ be harmonic on $B_R(a)\subset\mathbb R^n$. For every $x\in B_R(a)$,
$$u(x)\le\left(\frac R{R-|x-a|}\right)^n u(a).$$
For $0\le r<R$, set $m=\lceil4r/(R-r)\rceil+1$ and $C=2^{nm}$. Then $C^{-1}u(a)\le u(x)\le Cu(a)$ whenever $|x-a|\le r$. No trace on $\partial B_R(a)$ is assumed.

Dependencies: cor-ball-mean-value-property-for-harmonic-functions, lem-sphere-and-ball-measures-scale.

Sources: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §5 Lemma 5, p.8; H Theorem 2.22 local proof p.31.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `lem-finite-harnack-chain-on-a-compact-connected-subset`

Claim/conventions: Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be a domain, and let $K\subset\Omega$ be compact, possibly empty or disconnected. There is a finite nonempty family $\{B_{r_j}(a_j)\}_{j=1}^N$ covering $K$, with $r_j>0$ and $\overline B_{4r_j}(a_j)\subset\Omega$, whose overlap graph is connected. An edge means that the two open balls intersect. The family depends only on $K$ and $\Omega$.

Dependencies: def-connected-space, thm-heine-borel-rn.

Sources: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Theorem 2.22 proof, p.31; G Lemma 25 pp.18–19.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `cor-harnack-inequality-on-compact-subsets`

Claim/conventions: For $n\ge2$, a domain $\Omega\subseteq\mathbb R^n$ and a nonempty compact $K\subset\Omega$, there is $C=C(K,\Omega,n)\ge1$ such that every nonnegative harmonic function $u$ on $\Omega$ satisfies
$$\sup_Ku\le C\inf_Ku.$$
The compact set $K$ need not be connected.

Dependencies: thm-harnack-inequality-on-a-ball, lem-finite-harnack-chain-on-a-compact-connected-subset, cor-nonnegative-harmonic-function-with-an-interior-zero-vanishes.

Sources: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Theorem 2.22, pp.31–32; G Lemma 25 pp.18–19.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `thm-harnack-convergence-principle`

Claim/conventions: Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be a domain, and let $u_1\le u_2\le\cdots$ be real harmonic functions on $\Omega$. Either $u_j(x)\to+\infty$ for every $x\in\Omega$, or the sequence converges uniformly on each compact subset of $\Omega$ to a harmonic function.

Dependencies: cor-harnack-inequality-on-compact-subsets, thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic.

Sources: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §11 Theorem 26, p.19.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `lem-smooth-sphere-data-have-a-harmonic-replacement`

Claim/conventions: Let $n\ge2$, $a\in\mathbb R^n$, $R>0$, and $g\in C^\infty(\partial B_R(a))$ be real. Write $\omega_{n-1}=|S^{n-1}|$. There is a unique $h\in C^\infty(B_R(a))\cap C(\overline B_R(a))$ harmonic inside and equal to $g$ on the sphere. It is
$$h(x)=\int_{\partial B_R(a)}\frac{R^2-|x-a|^2}{R\omega_{n-1}|x-y|^n}\,g(y)\,dS(y),\qquad |x-a|<R.$$
The kernel is positive and has integral one at each interior point.

Dependencies: def-laplacian-of-a-c2-function, lem-sphere-and-ball-measures-scale, thm-spherical-mean-value-property-for-harmonic-functions, cor-uniqueness-for-the-classical-dirichlet-problem, thm-dominated-convergence.

Sources: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §8 equations (77)–(88), Theorem 15, pp.13–14.

Decision: Smooth sphere-data scope retained. Unit mass proved via rotation invariance and the exact published spherical mean theorem, avoiding a later Green identity. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `lem-derivative-estimate-proof-of-one-sided-harmonic-liouville`

Claim/conventions: Let $n\ge2$, $R>0$, and $u$ be real harmonic on $B_R(a)$. If $S=\sup_{B_R(a)}|u|<\infty$, then $|\nabla u(a)|\le nS/R$. If $u\ge0$, the stronger estimate $|\nabla u(a)|\le nu(a)/R$ holds without assuming a finite global supremum. Consequently, a nonnegative entire harmonic function has gradient zero everywhere.

Dependencies: lem-smooth-sphere-data-have-a-harmonic-replacement, lem-derivatives-of-harmonic-functions-are-harmonic, cor-ball-mean-value-property-for-harmonic-functions, thm-continuous-mean-value-functions-are-harmonic.

Sources: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Theorem 2.7 and Corollary 2.8 p.23; G §8 (77)–(78) pp.13–14.

Decision: Added separate published ball-mean and continuous-mean smoothness dependencies. The harmonic-derivative statement itself is used only after smoothness is established. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `thm-liouville-theorem-for-bounded-harmonic-functions`

Claim/conventions: Let $n\ge2$ and $u:\mathbb R^n\to\mathbb R$ be harmonic. If $u$ is bounded above or bounded below on all of $\mathbb R^n$, then $u$ is constant.

Dependencies: thm-harnack-inequality-on-a-ball.

Sources: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §5 Corollary 6 and Exercise 10, p.8.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `cor-positive-entire-harmonic-functions-are-constant`

Claim/conventions: For $n\ge2$, every nonnegative harmonic function on $\mathbb R^n$ is constant; this includes the zero function as well as strictly positive functions.

Dependencies: thm-liouville-theorem-for-bounded-harmonic-functions.

Sources: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §5 Corollary 6, p.8.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `cor-entire-harmonic-functions-with-bounded-gradient-are-affine`

Claim/conventions: Let $n\ge2$. If $u:\mathbb R^n\to\mathbb R$ is harmonic and $\sup_x|\nabla u(x)|<\infty$, then $u(x)=b+c\cdot x$ for some $b\in\mathbb R$ and $c\in\mathbb R^n$.

Dependencies: lem-derivatives-of-harmonic-functions-are-harmonic, thm-liouville-theorem-for-bounded-harmonic-functions, cor-ball-mean-value-property-for-harmonic-functions, thm-continuous-mean-value-functions-are-harmonic.

Sources: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Theorem 2.7 and Corollary 2.8 p.23, applied to harmonic derivatives.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `cor-removable-singularity-for-bounded-harmonic-functions`

Claim/conventions: Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be open and $p\in\Omega$. If $u\in C^2(\Omega\setminus\{p\})$ is harmonic and bounded in some punctured neighborhood of $p$, it has a unique harmonic extension to $\Omega$. More generally the same conclusion holds under $u(x)=o(|x-p|^{2-n})$ for $n\ge3$, or $u(x)=o(\log(1/|x-p|))$ for $n=2$, as $x\to p$.

Dependencies: lem-smooth-sphere-data-have-a-harmonic-replacement, thm-comparison-principle-for-classical-subharmonic-functions, cor-ball-mean-value-property-for-harmonic-functions, thm-continuous-mean-value-functions-are-harmonic.

Sources: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §8 Theorem 17, p.14.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `thm-maximum-principle-with-limsup-control-at-infinity`

Claim/conventions: Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be unbounded and open, and let $u\in C^2(\Omega)\cap C(\overline\Omega)$ be subharmonic. Suppose $M\in\mathbb R$, $u\le M$ on $\partial\Omega$, and
$$\limsup_{\substack{x\in\Omega\\ |x|\to\infty}}u(x)\le M.$$
Here the last condition means that for every $\varepsilon>0$ there is $R_0$ with $u(x)\le M+\varepsilon$ whenever $x\in\Omega$ and $|x|>R_0$. Then $u\le M$ on $\overline\Omega$, even if $\partial\Omega$ is empty.

Dependencies: thm-weak-maximum-principle-for-the-laplacian.

Sources: https://www.math.uni-hamburg.de/home/schmidt/lectures/PDE.pdf — §2.4 Remarks (on Phragmen-Lindelof principles), (1), printed p.22 / PDF p.24.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `rem-maximum-principles-need-domain-and-boundary-hypotheses`

Claim/conventions: The weak principle requires boundedness and continuity on the full closure; it allows disconnected open sets. Its conclusion is an attained boundary maximum for subharmonic functions. The strong harmonic principle instead uses connectedness and an attained **global** interior extremum; neither boundedness nor a boundary trace is needed. These are the distinct scopes of [[thm-weak-maximum-principle-for-the-laplacian]] and [[thm-strong-maximum-principle-for-harmonic-functions]].

At a boundary point, [[thm-hopf-boundary-point-lemma-for-the-laplacian]] needs an interior tangent ball, a strict interior inequality, continuity on its closure, and existence of the supplied outward directional derivative. It gives a positive outward derivative at a maximum; negating the function reverses the sign at a minimum.

Unbounded sets can be treated by [[thm-maximum-principle-with-limsup-control-at-infinity]] if the same finite upper bound controls the boundary and the limsup at infinity. No open-mapping or general boundary-normal theorem is asserted here.

Dependencies: thm-weak-maximum-principle-for-the-laplacian, thm-strong-maximum-principle-for-harmonic-functions, thm-hopf-boundary-point-lemma-for-the-laplacian, thm-maximum-principle-with-limsup-control-at-infinity.

Sources: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — §§2.3–2.4, pp.26–32.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: not-applicable. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `ex-harmonic-function-attaining-only-boundary-extrema`

Claim/conventions: For $n\ge2$, $u(x)=x_1$ on $\overline B_1(0)\subset\mathbb R^n$ is harmonic. Its maximum $1$ and minimum $-1$ occur only at $e_1$ and $-e_1$, respectively, on the boundary. At $e_1$ its outward sphere derivative is $1$.

Dependencies: thm-weak-maximum-principle-for-the-laplacian, thm-hopf-boundary-point-lemma-for-the-laplacian.

Sources: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Theorems 2.17 and Lemma 2.21, pp.27–30, affine specialization.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `ex-harnack-constant-from-the-poisson-kernel-ratio`

Claim/conventions: Let $n\ge2$, $R>0$, and $u\ge0$ be harmonic on $B_R(0)$. For $x\in B_R(0)$ and $t=|x|/R$,
$$\frac{1-t}{(1+t)^{n-1}}u(0)\le u(x)\le\frac{1+t}{(1-t)^{n-1}}u(0).$$
These kernel bounds require no boundary trace at radius $R$.

Dependencies: lem-smooth-sphere-data-have-a-harmonic-replacement, thm-harnack-inequality-on-a-ball, cor-ball-mean-value-property-for-harmonic-functions, thm-continuous-mean-value-functions-are-harmonic.

Sources: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §8 Remark 14 equations (80)–(81), p.13.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `cex-maximum-principle-fails-for-superharmonic-maxima`

Claim/conventions: The assertion that every superharmonic $u\in C^2(B_1)\cap C(\overline B_1)$ has its maximum on $\partial B_1$ is false, for every $n\ge2$. A witness is $u(x)=-|x|^2$.

Dependencies: def-subharmonic-and-superharmonic-functions-in-rn.

Sources: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Example 2.14 p.26, sign reversal.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `cex-weak-maximum-principle-needs-boundedness-or-control-at-infinity`

Claim/conventions: Without boundedness or control at infinity, a harmonic function continuous on the closure of an open set and zero on its nonempty boundary need not be nonpositive inside. For $n\ge2$, take $\Omega=\{x\in\mathbb R^n:x_n>0\}$ and $u(x)=x_n$.

Dependencies: thm-weak-maximum-principle-for-the-laplacian.

Sources: https://www.math.uni-hamburg.de/home/schmidt/lectures/PDE.pdf — §2.4 Remarks (on Phragmen-Lindelof principles), (1), printed p.22 / PDF p.24.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `cex-hopf-lemma-needs-a-boundary-geometry-hypothesis`

Claim/conventions: An accessible outward directional derivative at a strict boundary maximum need not be positive when there is no interior tangent ball. In the plane, for $x>0$ put $r=(x^2+y^2)^{1/2}$, $\theta=\arctan(y/x)$, and
$$u(x,y)=\frac{x\log r+y\theta}{(\log r)^2+\theta^2},\qquad \Omega=\{(x,y):x>0,\ 0<r<1/2,\ u(x,y)<0\}.$$
Then $\Omega$ is a domain, $u$ is harmonic there and extends continuously to its closure with $u(0,0)=0$. It is strictly negative inside, its outward derivative along $-e_1$ at zero is zero, and no interior tangent ball exists there.

Dependencies: def-interior-sphere-condition-and-sphere-normal, thm-hopf-boundary-point-lemma-for-the-laplacian.

Sources: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Example 2.20, p.29.

Decision: Retained Hunter’s local cusp-type construction, verifying harmonicity by real partial derivatives and connectedness by polar paths. The no-ball calculation tests every possible center, not just a guessed normal. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `cex-liouville-needs-one-sided-boundedness`

Claim/conventions: For $n\ge2$, an entire real harmonic function need not be constant without a one-sided bound. The coordinate function $u(x)=x_1$ is a counterexample.

Dependencies: thm-liouville-theorem-for-bounded-harmonic-functions.

Sources: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §5 Corollary 6 and Exercise 10, p.8, affine hypothesis test.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `cex-unbounded-punctured-harmonic-singularity-is-not-removable`

Claim/conventions: A harmonic function on a punctured ball need not have a harmonic extension at the puncture without growth control. On $0<|x|<1$, use $u(x)=\log|x|$ for $n=2$ and $u(x)=|x|^{2-n}$ for $n\ge3$. Neither has even a continuous extension at zero.

Dependencies: cor-removable-singularity-for-bounded-harmonic-functions.

Sources: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §8 Theorem 17 proof, p.14, radial profiles.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `cex-strong-maximum-principle-needs-connectedness`

Claim/conventions: For $n\ge2$, the connectedness hypothesis cannot be omitted from the strong harmonic maximum principle. Let $\Omega=B_1(0)\cup B_1(3e_1)$, and set $u=1$ on the first ball and $u=0$ on the second. It attains an interior global maximum without being globally constant.

Dependencies: thm-strong-maximum-principle-for-harmonic-functions.

Sources: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Discussion after Theorem 2.13, p.26.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `cex-hopf-conclusion-needs-a-strict-nonconstant-extremum`

Claim/conventions: For $n\ge2$, a boundary maximum and an interior sphere alone do not force a strictly positive outward derivative. On $\overline B_1(0)$, the harmonic function $u\equiv0$ attains its maximum at every boundary point and has outward derivative zero there.

Dependencies: thm-hopf-boundary-point-lemma-for-the-laplacian.

Sources: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf — §8 Exercise 14, pp.14–15.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

### Authored `ex-subharmonic-quartic-and-harmonic-saddle`

Claim/conventions: For $n\ge2$, on $\overline B_1(0)$ the function $q(x)=|x|^4$ is subharmonic and lies below the harmonic function $h\equiv1$ having the same boundary values. The function $s(x)=x_1^2-x_2^2$ is harmonic and has a saddle at the origin, despite $\nabla s(0)=0$.

Dependencies: def-subharmonic-and-superharmonic-functions-in-rn, thm-comparison-principle-for-classical-subharmonic-functions, thm-strong-maximum-principle-for-harmonic-functions.

Sources: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf — Example 2.6 p.22 and Example 2.16 p.27.

Decision: Claim retained; proof written from the recorded source route. Statement provenance: literature-derived; proof: ai-altered. Status: draft. Validation: pending focused checks. Remaining obligation: finalize citation/step contracts and run required validators. Next: next assigned item, then batch checks.

Both planned pages authored directly under library/pde/, with all 36 manifest IDs placed once. All status values are draft. Next: complete exact citation maps and apply focused validators.

Authoring refinements: source references now separate Hunter and Gantumur instead of placing a Gantumur locator under a Hunter URL. Adapted statements are tagged ai-altered (including strengthened vector-gradient, localized cusp, finite-chain and boundary-stability formulations); all supplied proofs are ai-altered, definitions/remark not-applicable. No generated statement or generation role is used. Smoothness dependencies were added only to owned items, using the published ball mean-value and continuous mean-value smoothness theorems. Hopf item steps 4.1–6.1 now supply the alternate strong-principle proof harvested from Hunter, without forward-depending on the later Hopf lemma in the earlier strong-principle item. The slab estimate is explicitly bounded-domain. No claim was dropped. Initial content-policy rejected flow-style reference arrays; canonical block-style references have been applied. Initial no-argument validate-plan printed usage, then the required explicit plan-spec invocation ran successfully.

Canonical precheck repairs applied to mean inequalities, Dirichlet uniqueness/stability, Hopf plus alternate proof, and the Hopf geometry counterexample. Boundary evidence step references were remapped. The alternate Hopf proof now has distinct ambient/function/boundary-point variables, with its subharmonic regularity hypotheses restated, and explicitly cites compactness, attained minima and connectedness. Next: rerun precheck and generate exact proof contracts from these final rows.

### Step-5 final factual report

Authored inventory: all 36 stable IDs in `research/frontier-33-batch-12.pages.json` (26 A + 10 B), with an individual claim/source/dependency checkpoint above. Both planned pages are written at `library/pde/maximum-principles-harnack-and-liouville-in-rn.md` and `library/pde/maximum-principles-harnack-and-liouville-in-rn-examples.md`. All 38 content files remain draft. No publication, judge record, permission request, plan-structure edit or workflow transition was made.

Proof evidence: `research/frontier-33-batch-12.proof-contracts.json` contains all 33 proof-bearing IDs, 94 mapped proof rows, 69 exact source-section citation edges with their actual uses, and 264 boundary-axis dispositions. Definitions and the scope remark have no proof-bearing section. The contract quotes the current dependency statements, including the exact smoothness, polar-coordinate and compactness hypotheses; it does not use another run’s contracts. The four canonical phase repairs were applied, their boundary references remapped, and checks rerun. The notation `\frac{L}{2}` avoids the checker reading `L2` as a fact label. No finite-smoke calculation is presented as proof.

Final provenance rationale: all supplied local proofs/verification arguments are ai-altered source treatments. Local strengthened, localized, sign-transformed or instantiated statement formulations are marked ai-altered; source-identical claims retain literature-derived statement provenance. Definitions and the remark have proof provenance not-applicable. Source URLs and locators are retained and cross-author citations now have their own reference objects. The derivative estimate’s vector-norm refinement comes from the verified kernel integral, not an assertion that Hunter’s coordinate estimate already states the vector estimate. There are no generated-statement dependency targets, recorded-not-proved fallbacks or forward proof dependencies.

Narrowed/qualified claims and scope decisions:

- The slab barrier estimate explicitly requires bounded nonempty open Omega, as in Gantumur Corollary 11. Containment in a slab alone is insufficient for the chosen comparison proof.
- All items state n >= 2. The subharmonic mean-inequality theorem and its dependent strong subharmonic theorem explicitly assume countable choice, matching the current polar-coordinate dependency.
- Smoothness needed for traces and harmonic derivatives is obtained from the exact published ball mean-value and continuous mean-value smoothness statements. No smoothness hypothesis in the derivative lemma is silently discarded.
- Hopf uses the supplied tangent sphere direction and an existing finite one-sided derivative. Its positive barrier Laplacian follows Hunter’s displayed calculation, correcting the following prose typo.
- The alternate strong-principle proof is placed inside the Hopf item after its dependencies become available; its proof rows have distinct variables and explicit regularity. The coverage support text now records that exact placement, without changing its disposition or independent review.
- No claim or planned item was dropped. The stronger little-o removability argument, mean-inequality converse, growth estimate and boundary uniform stability harvests were all written. Smooth-data harmonic replacement remains restricted to the assigned scope.

Required checks actually run:

- `node tools/tsx-run.mjs tools/precheck.mts` with all 36 explicit manifest item paths expanded as command arguments: PASS, 33 proof-bearing items checked, 0 failing after canonical repairs.
- `node tools/validate-plan.mjs` first returned usage (exit 2); the tool requires a plan argument. The corrected `node tools/validate-plan.mjs research/plan-spec.json` was run and returned exit 0. It reports no item-level cycles, forward references, B-page dependencies or unresolved IDs among 892 populated pages; 463 other planned pages still have no item list, as the validator explicitly notes.
- `node tools/content-policy.mjs research/frontier-33-batch-12.pages.json`: PASS, 36 scoped items, 0 errors and 0 warnings. The initial flow-style source-reference encoding was rejected; it was replaced by canonical block YAML and the validator rerun.
- `node tools/proof-contract.mjs research/frontier-33-batch-12.proof-contracts.json --strict`: PASS, 33/33 items checked, 0 errors and 0 warnings.
- Additional focused `node tools/rendercheck.mjs` with all 36 item and 2 page paths: PASS, all 38 files parse as renderer YAML and KaTeX, with no malformed math delimiters or wikilinks in math.
- Scope check: 36 unique assigned item IDs, 2 correctly located draft pages, 33/33 proof-bearing IDs in contract scope, and no judge records.

A diagnostic `rendercheck --help` invocation unexpectedly performed a whole-corpus scan because that tool has no help option. It reported two local TeX spacing errors (subsequently repaired and checked above) plus five errors in other batches’ files at that snapshot. Those external files were not changed, and no whole-corpus render success is claimed. The successful render result above is explicitly the assigned 38-file scope.

Blockers: none for the assigned Step-5 authoring and required focused checks. The independent review’s existing normal-family seam remains: Gantumur Theorem 28 is absent from the published PDE-3 predecessor, but no assigned item depends on it; its disposition remains deferred to that predecessor for the owner/control plane. It was not added to published content. Shell source download failed DNS in this dispatch; the complete relevant mathematical passages were read through web extraction, and existing independent source-fetch records were preserved without new stamps.

Next action: control-plane routing of these completed draft artifacts to independent review. Authoring does not adjudicate, stamp, publish or advance the run.
