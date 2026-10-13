# Batch 4 Step 3a adjudication

Run: physics-cm-qm-gr-79-2026-10-11; group: batch-4. Only batch 4 carriers are editable. Review follows the dispatched dependency order. No judging or certification is performed.

Scope: 23 reader and 24 refuter findings; no touched/page obligations. Pre/post snapshot comparison and current dependencies remain part of review.

## Level 0 checkpoint

Holonomic mass condition is missing its quadratic-form definition; the pendulum remark includes an inadmissible origin. Nonholonomic law omits its actual action supplier and has an unspecified derivative side. Action first variation has the same side ambiguity. Corrections make the intended ordinary two-sided derivative explicit, define M^T=M and u^TMu>0 for nonzero u, and exclude the pendulum origin. Final consumer checks and owner dispositions are recorded below. Bump gluing is valid at c-r,c,c+r by matching first and second derivatives; its sign-detection argument must restrict E beta to its actual interval rather than all R. No choice is used.

### def-cm-holonomic-constraint-and-ideal-reactions — reader:4:2, refuter:4:2

The cited invertible-matrix Definition gives AB=BA=I, not the SPD condition. Defined M^T=M and u^TMu>0 for every nonzero u locally. This spells out the intended fixed positive mass hypothesis; reaction equations and virtual-displacement kernel unchanged. Consumer interface audit remains recorded below.

### def-cm-holonomic-constraint-and-ideal-reactions — refuter:4:3

G_q=2q^T has rank zero at q=0, so the all-R2 pendulum remark violates the everywhere-rank hypothesis. Replaced that domain with R2 minus {0}, with l>0; the alternative y!=0 chart remains regular. This is a remark correction.

### def-cm-nonholonomic-velocity-constraint-law — reader:4:3, refuter:4:4

The nonholonomic Definition explicitly imports action/stationary/EL from def-cm-time-dependent-lagrangian-and-action, absent in deps. Added its mathematical-premise edge; no cycle because the action Definition only lists the first-variation lemma as justified_by. In-run dependency levels and page manifest will be reconciled locally before handoff.

### def-cm-nonholonomic-velocity-constraint-law — reader:4:5, refuter:4:6

The augmented functional is defined for both signs of s and is polynomial in s for fixed C2 pair/variation. Its derivative convention is now ordinary two-sided directional differentiation, matching the displayed notation and the later compact-rectangle differentiation.

### def-cm-time-dependent-lagrangian-and-action — reader:4:4, refuter:4:5

Both signs of epsilon are admissible by lem-cm-first-variation-formula. Defined the first variation as ordinary two-sided differentiation, exactly what that lemma proves. No one-sided-only derivative is used by the consumers.

### cex-cm-dalembert-and-vakonomic-evolutions-differ

Oriented integrals now construct y,z: continuous integrands give integrability and FTC-first plus interval additivity differentiates them for t<0, t=0 and t>0. The curve is C2 on R. dAlembert acceleration equations preserve z'=xy'; uniqueness is maximal uniqueness and agreement under restriction. Vakonomic variations yield x''=-eta y', y''=(eta x)', z''=-eta' on any nondegenerate [a,b]. y'>0 forces eta=0, but y'' is nonzero at a nonzero interior point of every such interval. No stationary multiplier exists. Exact suppliers: bump lemma, compact-rectangle differentiation, IBP, Picard-Lindelof and maximal solution Statements. No choice or empirical claim.

### cex-cm-dalembert-and-vakonomic-evolutions-differ — reader:4:13, refuter:4:17

Oriented integrals now construct y,z: continuous integrands give integrability and FTC-first plus interval additivity differentiates them for t<0, t=0 and t>0. The curve is C2 on R. dAlembert acceleration equations preserve z'=xy'; uniqueness is maximal uniqueness and agreement under restriction. Vakonomic variations yield x''=-eta y', y''=(eta x)', z''=-eta' on any nondegenerate [a,b]. y'>0 forces eta=0, but y'' is nonzero at a nonzero interior point of every such interval. No stationary multiplier exists. Exact suppliers: bump lemma, compact-rectangle differentiation, IBP, Picard-Lindelof and maximal solution Statements. No choice or empirical claim.

### cex-cm-dalembert-and-vakonomic-evolutions-differ — reader:4:14, refuter:4:18

Oriented integrals now construct y,z: continuous integrands give integrability and FTC-first plus interval additivity differentiates them for t<0, t=0 and t>0. The curve is C2 on R. dAlembert acceleration equations preserve z'=xy'; uniqueness is maximal uniqueness and agreement under restriction. Vakonomic variations yield x''=-eta y', y''=(eta x)', z''=-eta' on any nondegenerate [a,b]. y'>0 forces eta=0, but y'' is nonzero at a nonzero interior point of every such interval. No stationary multiplier exists. Exact suppliers: bump lemma, compact-rectangle differentiation, IBP, Picard-Lindelof and maximal solution Statements. No choice or empirical claim.

### def-cm-infinitesimal-point-symmetry — reader:4:6, refuter:4:7

Defining identity/charge are sound; interpretation confused parameter with time differentiation. At fixed t, dB(q+s xi)/ds=B_q dot xi; along a C1 trajectory dB(t,q(t))/dt=B_t+B_q dot q'. Corrected that explanatory sentence; consumers use the unchanged identity.

### lem-cm-constraint-multipliers-and-accelerations

Both orthogonality/multiplier directions checked against the surjection-annihilator lemma: lambda unique for fixed R. For z!=0, G_q^T z!=0 by surjectivity; M inverse is SPD by the independently read repaired batch-3 square-root proof. Quadratic form proves C SPD. Added rank-nullity to infer onto/inverse from trivial kernel in R^k, and adjugate inverse for the C1 dependence at 2.1. k,n>=1; k>n excluded by rank; zero R gives zero lambda. No choice. Historical producer defect is distinct from corrected current proof.

### lem-cm-constraint-multipliers-and-accelerations — refuter:4:10

Both orthogonality/multiplier directions checked against the surjection-annihilator lemma: lambda unique for fixed R. For z!=0, G_q^T z!=0 by surjectivity; M inverse is SPD by the independently read repaired batch-3 square-root proof. Quadratic form proves C SPD. Added rank-nullity to infer onto/inverse from trivial kernel in R^k, and adjugate inverse for the C1 dependence at 2.1. k,n>=1; k>n excluded by rank; zero R gives zero lambda. No choice. Historical producer defect is distinct from corrected current proof.

### lem-cm-first-variation-formula

Read every step and compactness, positive-distance-gap, extrema, chain-rule and compact-rectangle differentiation suppliers. q[a,b] nonempty compact; U=Rn gives epsilon0=1, otherwise gap d and eta maximum control admissibility. eta=0 handled separately; each parameter interior to a smaller rectangle gives ordinary two-sided differentiation. C2 extensions and openness allow a slightly larger time interval for the composite; L_v is C1 with continuous derivative. No choice; a<b, n>=1 explicit. Intended first-variation convention preserved.

### prop-cm-coordinate-covariance-of-the-euler-lagrange-expression

C3 X makes (t,q,v)->(t,X,X_t+X_qv) C2, and the open preimage may be empty without invalidating clauses 1-3. Column gradients transform by X_q^T; chain/product rules and mixed partials cancel extra terms. Narrowed F4 to the transpose-injectivity implication actually used; its earlier converse was not established. Bound a<b in transport clause. Both EL-zero directions follow from invertible X_q. Only interval binding changes Statement; consumer checks recorded below.

### prop-cm-coordinate-covariance-of-the-euler-lagrange-expression — reader:4:9, refuter:4:12

C3 X makes (t,q,v)->(t,X,X_t+X_qv) C2, and the open preimage may be empty without invalidating clauses 1-3. Column gradients transform by X_q^T; chain/product rules and mixed partials cancel extra terms. Narrowed F4 to the transpose-injectivity implication actually used; its earlier converse was not established. Bound a<b in transport clause. Both EL-zero directions follow from invertible X_q. Only interval binding changes Statement; consumer checks recorded below.

### prop-cm-coordinate-covariance-of-the-euler-lagrange-expression — refuter:4:13

C3 X makes (t,q,v)->(t,X,X_t+X_qv) C2, and the open preimage may be empty without invalidating clauses 1-3. Column gradients transform by X_q^T; chain/product rules and mixed partials cancel extra terms. Narrowed F4 to the transpose-injectivity implication actually used; its earlier converse was not established. Bound a<b in transport clause. Both EL-zero directions follow from invertible X_q. Only interval binding changes Statement; consumer checks recorded below.

### prop-cm-nonholonomic-distribution-is-not-tangent-to-level-sets

A(BG)-B(AG)=G_z uses C2 mixed partials and the x product term; AG=BG=0 gives all components of DG zero, without Frobenius converse. Global nonintegrability does not exclude equality at a point: clarified consequential Statement that equality cannot hold for every q in O (G=z gives equality at x=0). O nonempty; connectedness/choice not required. Consumers need absence of an everywhere regular defining function; actual uses checked below.

### cor-cm-reduced-dalembert-and-generalized-forces

Ambient DX is m by n; reaction annihilation is equivalent to DX^T R=0, and twice differentiating x=X(q) yields the n-dimensional reduced equation with its quadratic correction. Defined the intended SPD hypothesis locally. Corrected the remark domain: DX^T M DX acts on Rn, with strict quadratic form from injectivity. Affine X has zero Hessian. No physical law is derived from mathematics; ideal reaction is a hypothesis. Direct consumers use this equation and the unchanged intended SPD condition.

### cor-cm-reduced-dalembert-and-generalized-forces — reader:4:7, refuter:4:8

Ambient DX is m by n; reaction annihilation is equivalent to DX^T R=0, and twice differentiating x=X(q) yields the n-dimensional reduced equation with its quadratic correction. Defined the intended SPD hypothesis locally. Corrected the remark domain: DX^T M DX acts on Rn, with strict quadratic form from injectivity. Affine X has zero Hessian. No physical law is derived from mathematics; ideal reaction is a hypothesis. Direct consumers use this equation and the unchanged intended SPD condition.

### cor-cm-reduced-dalembert-and-generalized-forces — refuter:4:9

Ambient DX is m by n; reaction annihilation is equivalent to DX^T R=0, and twice differentiating x=X(q) yields the n-dimensional reduced equation with its quadratic correction. Defined the intended SPD hypothesis locally. Corrected the remark domain: DX^T M DX acts on Rn, with strict quadratic form from injectivity. Affine X has zero Hessian. No physical law is derived from mathematics; ideal reaction is a hypothesis. Direct consumers use this equation and the unchanged intended SPD condition.

### lem-cm-legendre-map-local-invertibility

C2 L gives a C1 Legendre map; its derivative is block triangular with identity t,q blocks. Kernel consists exactly of (0,0,dv) with L_vv dv=0. Added rank-nullity to license invertibility of these square endomorphisms, and determinant-unit supplier gives det!=0 over R. Inverse-function theorem hypotheses verified on open dimension 1+2n. Both iff directions and local versus fibre-global distinction checked; no choice. Statement unchanged.

### lem-cm-legendre-map-local-invertibility — reader:4:8, refuter:4:11

C2 L gives a C1 Legendre map; its derivative is block triangular with identity t,q blocks. Kernel consists exactly of (0,0,dv) with L_vv dv=0. Added rank-nullity to license invertibility of these square endomorphisms, and determinant-unit supplier gives det!=0 over R. Inverse-function theorem hypotheses verified on open dimension 1+2n. Both iff directions and local versus fibre-global distinction checked; no choice. Statement unchanged.

### prop-cm-ideal-holonomic-system-in-a-time-dependent-chart

C3 G, rank k everywhere, C1 f and constant SPD M give C2 C inverse and C1 acceleration. Twice differentiation gives h''=0, so consistent initial h,h' preserve both position and velocity constraints. Reaction power is lambda dot G_q q'=-lambda dot G_t. Converse differentiates constraint and uniquely solves C lambda=-bracket. Corrected a type defect: state curve (q,v) maps into R2n, while (t,q,v) lies in the open time-state domain O x Rn. Also wrote the final vector equation as C Lambda with valid order. Local Lipschitz follows from bounded derivative on a smaller convex ball. No continuation beyond rank loss asserted; actual consumers checked below.

### prop-cm-mechanical-chart-lagrangian-is-hyperregular

Quadratic differentiation uses symmetry G, yielding L_v=Gv+A and L_vv=G. SPD kills kernel; rank-nullity now explicitly yields onto and inverse. Matrix-inversion regularity supplies C2 G inverse; affine velocity-momentum map is globally bijective on every fibre with explicit C2 inverse G inverse(p-A). Hamiltonian formula follows by substitution and symmetry of G inverse, preserving A term. det!=0, n>=1, all p allowed. No choice; Statement unchanged.

### prop-cm-mechanical-chart-lagrangian-is-hyperregular — reader:4:10, refuter:4:14

Quadratic differentiation uses symmetry G, yielding L_v=Gv+A and L_vv=G. SPD kills kernel; rank-nullity now explicitly yields onto and inverse. Matrix-inversion regularity supplies C2 G inverse; affine velocity-momentum map is globally bijective on every fibre with explicit C2 inverse G inverse(p-A). Hamiltonian formula follows by substitution and symmetry of G inverse, preserving A term. det!=0, n>=1, all p allowed. No choice; Statement unchanged.

### thm-cm-endpoint-action-differential

Confirmed fatal vector/Jacobian typing defect in 1.1 under exact column-gradient Definition. Replaced all q-gradient products by J_q^T times gradient; IBP gives [J_q^T P] and the EL interior coefficient cancels. Time differentiation uses dot products. Endpoint J_q(t)=I, J_q(t0)=0 yields W_q=p; X_t(t)+X_s(t)=0 gives W_t=L-p dot v=-H using hyperregular inverse. Compact segment inside open D permits a common parameter rectangle; t<t0 uses oriented integration. Family existence remains an explicit hypothesis, no caustic exclusion deduced here. Statement unchanged.

### thm-cm-endpoint-action-differential — reader:4:11, refuter:4:15

Confirmed fatal vector/Jacobian typing defect in 1.1 under exact column-gradient Definition. Replaced all q-gradient products by J_q^T times gradient; IBP gives [J_q^T P] and the EL interior coefficient cancels. Time differentiation uses dot products. Endpoint J_q(t)=I, J_q(t0)=0 yields W_q=p; X_t(t)+X_s(t)=0 gives W_t=L-p dot v=-H using hyperregular inverse. Compact segment inside open D permits a common parameter rectangle; t<t0 uses oriented integration. Family existence remains an explicit hypothesis, no caustic exclusion deduced here. Statement unchanged.

### thm-cm-stationarity-iff-euler-lagrange

First-variation lemma and componentwise IBP with C1 momentum/C2 eta give integral E dot eta. EL-zero implies every variation zero. Reverse direction: endpoint nonzero E gives an interior nonzero component by continuity and a<b; explicit C2 bump has closed support [t1-rho,t1+rho] inside (a,b), giving a nonzero first variation. Corrected false open-support assertion in F2 and 1.3; also aligned the finite sum with the imported zero-based Rn coordinate convention. Both directions, zero variation and interval endpoints checked; no choice or minimum claim.

### thm-cm-stationarity-iff-euler-lagrange — reader:4:12, refuter:4:16

First-variation lemma and componentwise IBP with C1 momentum/C2 eta give integral E dot eta. EL-zero implies every variation zero. Reverse direction: endpoint nonzero E gives an interior nonzero component by continuity and a<b; explicit C2 bump has closed support [t1-rho,t1+rho] inside (a,b), giving a nonzero first variation. Corrected false open-support assertion in F2 and 1.3; also aligned the finite sum with the imported zero-based Rn coordinate convention. Both directions, zero variation and interval endpoints checked; no choice or minimum claim.

### prop-cm-hamiltonian-branch-identities

Differentiation cancels inverse-branch derivative terms because L_v=p. H_p=v, H_q=-L_q, H_t=-L_t; both equation directions checked, with Hamilton C1 curve giving C1 q'=v and hence C2 q. Added I subset J so every time evaluation is defined. Energy rate is -L_t along the trajectory, with constancy iff that rate vanishes, on the interval. Regular local branches remain separate from hyperregular global fibre inversion. No choice/empirical premise; actual consumers use in-domain times.

### prop-cm-lagrangian-boundary-terms-and-scaling

C3 F makes total derivative G=F_t+F_q dot v C2; mixed partials give E_G=0 for every C2 curve. FTC-second applies to C1 F(t,q(t)) and continuous derivative to recover endpoint increment. Fixed endpoints keep that increment constant under variation. Both stationarity directions follow from equal EL coefficients; c!=0 preserves zero set, c=0 makes every curve stationary. a<b and velocity-full chart explicit; zero F and negative c checked, no minimum claim/choice/empirical premise.

### rem-cm-scope-of-stationarity — reader:4:19, refuter:4:22

The cited theorem proves stationarity iff EL-zero, contrary to the one-direction-only wording. Replaced it with the exact equivalence and separately proved the necessary-extremum claim in the explicit fixed-endpoint C2 norm: q+s eta converges and differentiable scalar local extremum has derivative zero (opposite quotient signs). Both minimum and maximum treated; no sufficient-extremum assertion.

### thm-cm-point-symmetry-charge-is-conserved

The corrected symmetry interpretation does not alter identity or charge. L_v along C2 q is C1, xi and B are C1 on domains covering the chart projections. Product/chain rules give C'=EL momentum derivative dot xi+L_v dot Dxi q'-D_tB; EL and the symmetry identity make it zero. Zero-derivative theorem applies to open interval I. No claim that a model possesses symmetry, no choice, no empirical premise.

### ex-cm-ideal-pendulum-equation-and-stability

Immersion X has norm l derivative, orthogonal second derivative and tangent force -mgl sin theta. Reduced dAlembert equation yields exact pendulum ODE; energy derivative vanishes. Zero-set supplier ensures cos theta<1 for 0<|theta|<pi; choose closed smaller radius to apply independently reviewed batch-3 strict-minimum energy stability (degenerate minima allowed, no attraction). Restricted F3 to the constant mass actually used: for variable mass the stated simplified acceleration would omit its derivative term. Linear frequency sqrt(g/l) follows from one-dimensional quadratic-mode theorem, not nonlinear finite-amplitude period. No empirical input.

### ex-cm-regular-lagrangians-need-not-be-hyperregular

Power/chain rules yield positive Hessian for sqrt(1+v2); monotonicity gives injectivity but fibre range is bounded. Added missing reverse range inclusion by explicit v=p/sqrt(1-p2) for every |p|<1, including p=0 and both signs. p=+/-1 never attained. Zero L has zero Hessian and constant map; quadratic L has identity fibre map with smooth inverse. Regular/local and hyperregular/global definitions kept distinct; no physical interpretation/choice.

### ex-cm-regular-lagrangians-need-not-be-hyperregular — reader:4:15, refuter:4:19

Power/chain rules yield positive Hessian for sqrt(1+v2); monotonicity gives injectivity but fibre range is bounded. Added missing reverse range inclusion by explicit v=p/sqrt(1-p2) for every |p|<1, including p=0 and both signs. p=+/-1 never attained. Zero L has zero Hessian and constant map; quadratic L has identity fibre map with smooth inverse. Regular/local and hyperregular/global definitions kept distinct; no physical interpretation/choice.

### ex-cm-rolling-disk-acceleration

G_q=(1,-a) rank one everywhere; kernel span(a,1), velocity constraint exact on any interval. SPD diag(m,I) and reaction annihilation give (mx''-f)a+I theta''=0; twice constraint gives x''=a theta''. Solved acceleration and lambda=-fI/(I+ma2), checked sign and f=0, positivity of denominator, strict reaction bound iff f!=0. Uniform-disk/hoop inertias are adopted parameter choices. Explicit quadratic curve with consistent data realizes all equations on R. Chart multiplier agrees; planar holonomic law makes no 3D claim or empirical guarantee. Corrected explanatory algebra sentence to state actual substitution.

### ex-cm-rotating-hoop-reduced-energy

Carrier derivative inner products checked directly; tangent projection gives the same reduced ODE as local fixed-endpoint action stationarity. Reduced energy derivative cancels; inertial energy derivative is 2ma2 Omega2 sin theta cos theta v. Added Picard-Lindelof with C1-to-local-Lipschitz supplier for a real solution through (pi/4,1), giving nonconservation when Omega!=0. Omega=0 and special constant trajectories handled by wording as full-phase-space energy equality. Added exact cosine-one zero-set supplier: factorization proves strict minimum for subcritical and equality aOmega2=g (quartic minimum); supercritical bracket negative near zero. Independently read current energy-stability proof; it supplies stability only, not attraction. No measured precision.

### ex-cm-rotating-hoop-reduced-energy — reader:4:17

Carrier derivative inner products checked directly; tangent projection gives the same reduced ODE as local fixed-endpoint action stationarity. Reduced energy derivative cancels; inertial energy derivative is 2ma2 Omega2 sin theta cos theta v. Added Picard-Lindelof with C1-to-local-Lipschitz supplier for a real solution through (pi/4,1), giving nonconservation when Omega!=0. Omega=0 and special constant trajectories handled by wording as full-phase-space energy equality. Added exact cosine-one zero-set supplier: factorization proves strict minimum for subcritical and equality aOmega2=g (quartic minimum); supercritical bracket negative near zero. Independently read current energy-stability proof; it supplies stability only, not attraction. No measured precision.

### ex-cm-rotating-hoop-reduced-energy — reader:4:18, refuter:4:21

Carrier derivative inner products checked directly; tangent projection gives the same reduced ODE as local fixed-endpoint action stationarity. Reduced energy derivative cancels; inertial energy derivative is 2ma2 Omega2 sin theta cos theta v. Added Picard-Lindelof with C1-to-local-Lipschitz supplier for a real solution through (pi/4,1), giving nonconservation when Omega!=0. Omega=0 and special constant trajectories handled by wording as full-phase-space energy equality. Added exact cosine-one zero-set supplier: factorization proves strict minimum for subcritical and equality aOmega2=g (quartic minimum); supercritical bracket negative near zero. Independently read current energy-stability proof; it supplies stability only, not attraction. No measured precision.

### ex-cm-stationary-path-need-not-be-a-local-minimum

Defined fixed-endpoint C2 norm and local minimum explicitly. Computed scalar EL expression with the supplier convention L_q-dL_v/dt: -q''-4q (corrected original sign; its zero set unchanged). q*=sin2t solves it. Quadratic action expansion has zero linear term; sin t gives -3pi epsilon2/4 and sin3t gives +5pi epsilon2/4. Norm convergence of either perturbation makes them arbitrarily close; action unbounded below on lambda sin t proves no minimizer. Endpoint zeros and integral cosine multiples verified by exact trig/FTC suppliers. No empirical inference.

### ex-cm-stationary-path-need-not-be-a-local-minimum — reader:4:16, refuter:4:20

Defined fixed-endpoint C2 norm and local minimum explicitly. Computed scalar EL expression with the supplier convention L_q-dL_v/dt: -q''-4q (corrected original sign; its zero set unchanged). q*=sin2t solves it. Quadratic action expansion has zero linear term; sin t gives -3pi epsilon2/4 and sin3t gives +5pi epsilon2/4. Norm convergence of either perturbation makes them arbitrarily close; action unbounded below on lambda sin t proves no minimizer. Endpoint zeros and integral cosine multiples verified by exact trig/FTC suppliers. No empirical inference.

### prop-cm-local-action-family-exists

Smooth L plus C1 hyperregular inverse gives nonsingular Legendre derivative by differentiating both inverse identities; higher-regularity inverse theorem makes v,H smooth. Nonautonomous smooth ODE theorem gives local parameter flow; proof 1.1 propagates along a compact lifetime segment using finitely many local maps, preserving a common open K containing t0,t1 and nearby endpoint times. Endpoint F=(t,E) has invertible derivative by explicit block solution, and IFT supplies smooth p0 selection on product neighbourhood. t1!=t0 follows since E(t0,p0)=q0 and n>=1. Smooth family lies in U, solves Hamilton/EL, and satisfies both endpoint conditions; independently repaired endpoint differential applies. No arbitrary endpoint solvability, no infinite choice.

### thm-cm-hamilton-phase-action-stationarity

C1 phase path and variations give continuous parameter derivatives; compact graph inside open O_H ensures all sufficiently small variations are admissible. Componentwise IBP (corrected F1 variables) has fixed q/free p endpoints. Independent bump variations detect both continuous coefficients on (a,b), then continuity supplies endpoints. Both Hamilton/stationarity directions checked. Hyperregular elimination gives pointwise integrand identity A=S, while stationarity equivalence uses Hamilton/EL equivalence rather than equality alone. C2 H remains an explicit initial assumption also in elimination; C2 L only guarantees C1 H without it. No choice or empirical claim.

### thm-cm-point-noether-identity-with-time-reparametrization

Bound p:=L_v, resolving undefined title momentum and keeping charge unchanged. Defined vector D_t xi by Jacobian multiplication/componentwise scalar rule, since scalar gradient dot v alone did not type the vector use. Product/chain rules give E'=-L_t on every EL solution without hyperregularity. Differentiating C and substituting Noether identity cancels all terms with correct -E D_t tau sign. tau=0,time-independent xi recovers earlier symmetry identity; xi=0,tau=1,B=0 gives identity iff L_t=0 and charge -E. C2 generators/C2 q suffice; domains cover O projection. No finite transformations or empirical model validity asserted.

### thm-cm-point-noether-identity-with-time-reparametrization — reader:4:20

Bound p:=L_v, resolving undefined title momentum and keeping charge unchanged. Defined vector D_t xi by Jacobian multiplication/componentwise scalar rule, since scalar gradient dot v alone did not type the vector use. Product/chain rules give E'=-L_t on every EL solution without hyperregularity. Differentiating C and substituting Noether identity cancels all terms with correct -E D_t tau sign. tau=0,time-independent xi recovers earlier symmetry identity; xi=0,tau=1,B=0 gives identity iff L_t=0 and charge -E. C2 generators/C2 q suffice; domains cover O projection. No finite transformations or empirical model validity asserted.

### cor-cm-noether-charges-for-translations-rotations-and-boosts

Bound a0<b0 and epsilon>0 for the time chart, avoiding reuse of vector a, and required I within that band so evaluations are defined. Noether generators translation xi=a,B=0, rotation xi=a cross q,B=0 and boost xi=ta,B=m a dot q satisfy identities exactly under the stated directional potential invariances. Column momentum is mv; triple-product expansion gives J=m(q cross q') dot a. a=0 gives zero charges; n=3 only rotation; time-dependent potentials allowed. Corrected remark whole-chart necessity versus accidental conservation on one trajectory. Quadratic potential breaks translation/boost on any nonempty open U for nonzero a, not rotation. Consumers use the same charges under explicit model assumptions.

### cor-cm-noether-charges-for-translations-rotations-and-boosts — reader:4:1, refuter:4:1

Bound a0<b0 and epsilon>0 for the time chart, avoiding reuse of vector a, and required I within that band so evaluations are defined. Noether generators translation xi=a,B=0, rotation xi=a cross q,B=0 and boost xi=ta,B=m a dot q satisfy identities exactly under the stated directional potential invariances. Column momentum is mv; triple-product expansion gives J=m(q cross q') dot a. a=0 gives zero charges; n=3 only rotation; time-dependent potentials allowed. Corrected remark whole-chart necessity versus accidental conservation on one trajectory. Quadratic potential breaks translation/boost on any nonempty open U for nonzero a, not rotation. Consumers use the same charges under explicit model assumptions.

### lem-cm-positive-definite-matrix-square-roots — reader:4:21, refuter:4:23

Historical omitted finite-dimensional inverse and strict-congruence inferences are confirmed nonfatal, not false positives. Current producer proof, batch-3 manifest and contract independently read: step 2.1 constructs B in the positive eigenbasis and verifies BR=RB=I and B2M=MB2=I; 3.1 applies x^TSx=y^TKy for every nonzero x with y=M^(-1/2)x nonzero, and converse uses M^(1/2). Exact positivity, square-root and eigenbasis supplier Statements checked over finite-dimensional real inner-product space. n=1, K=0, both congruence directions valid. Batch-3 repair already resolves the current carrier; no producer edit or certification by this consumer review. Original producer fingerprints, observed hashes and consumer path are retained in each decision.

### thm-cm-energy-stability-of-a-strict-minimum — reader:4:22, reader:4:23, refuter:4:24

Historical F4 norm citation was inaccurate: def-euclidean-inner-product explicitly defers the norm theorem; findings remain confirmed nonfatal although current producer was repaired. Independently read current proof, batch-3 manifest/contract and actual suppliers: Cauchy-Schwarz/Euclidean norm is now declared and cited; reverse inequality follows from triangle both orders. Energy strictly above E0 on a compact nonempty phase sphere inside the strict-potential-minimum ball gives positive barrier; continuity selects delta, IVT first exit contradicts conserved energy, compact autonomous continuation gives all forward times. Constant masses ml2 and ma2 in the owned consumers meet hypotheses, including degenerate hoop critical minimum. No attraction or empirical certainty asserted. Retain original producer pre-reader/split hashes and consumer paths; no producer edit.

### Snapshot comparison

Pre/post item hashes equal: True; pre/post page hashes equal: True. Therefore no touched/page reader-repair decisions are owed; all edits reported here are Alpha repairs. Scope has 47 findings; all original finding bindings preserved for outside producers.

### lem-cm-c2-bump-functions — additional risk-review defect physics-cm-qm-gr-79-2026-10-11-3a-batch-4-bump-domain

E is defined on J, so the nonnegative-product assertion on all R was ill-formed; restricted it to the actual closed integration interval without changing Statement.

### prop-cm-nonholonomic-distribution-is-not-tangent-to-level-sets — additional risk-review defect physics-cm-qm-gr-79-2026-10-11-3a-batch-4-distribution-quantifier

Explicitly quantified failure of equality over every point of O. G=z has D=ker DG at x=0, so the pointwise wording was too strong; the global nonintegrability proof and intended claim are preserved.

### prop-cm-ideal-holonomic-system-in-a-time-dependent-chart — additional risk-review defect physics-cm-qm-gr-79-2026-10-11-3a-batch-4-holonomic-state-type

State (q,v) has dimension 2n and maps into R2n; its time-state graph lies in O x Rn. Corrected that codomain and the product order C Lambda in the final vector identity. Added exact C1 local Lipschitz supplier for the existence use.

### prop-cm-hamiltonian-branch-identities — additional risk-review defect physics-cm-qm-gr-79-2026-10-11-3a-batch-4-branch-time-domain

Required I subset J so each time argument lies in the Hamiltonian/Lagrangian domain; existing consumers use this condition.

### ex-cm-ideal-pendulum-equation-and-stability — additional risk-review defect physics-cm-qm-gr-79-2026-10-11-3a-batch-4-pendulum-constant-mass-citation

The cited mechanical field includes mass-derivative terms for variable M. Restricted the restatement to constant positive M0, which is the only case actually used at ml2.

### ex-cm-stationary-path-need-not-be-a-local-minimum — additional risk-review defect physics-cm-qm-gr-79-2026-10-11-3a-batch-4-quadratic-el-sign

Supplier E=L_q-dL_v/dt gives -q double-prime-4q, not its negative. Corrected exact expression; same zero set and stationary conclusion.

### thm-cm-hamilton-phase-action-stationarity — additional risk-review defect physics-cm-qm-gr-79-2026-10-11-3a-batch-4-phase-ibp-fact

IBP must use u=p_j and w=delta q_j componentwise, not u=p dot delta q. Corrected variables; actual proof remains valid.

### thm-cm-point-noether-identity-with-time-reparametrization — additional risk-review defect physics-cm-qm-gr-79-2026-10-11-3a-batch-4-vector-total-time-derivative

Defined D_t xi=xi_t+D_q xi v componentwise so the vector total derivative is typed; scalar gradient-dot rule alone did not define it.

### cor-cm-noether-charges-for-translations-rotations-and-boosts — additional risk-review defect physics-cm-qm-gr-79-2026-10-11-3a-batch-4-boost-remark-necessity

Whole-chart potential invariance suffices for all-solution boost conservation; constancy on an individual trajectory cannot imply whole-chart invariance. Replaced overstrong precisely-when remark with the actual defining identity and qualified implication.

### ex-cm-rotating-hoop-reduced-energy — additional risk-review defect physics-cm-qm-gr-79-2026-10-11-3a-batch-4-hoop-local-stationarity

Defined stationarity on open I through every nondegenerate compact subinterval, matching the action Definition. Distinguished full-phase-space energy equality at Omega=0 from accidental equality on special trajectories when Omega is nonzero.

### Outside consumer dispositions and owner alerts

Read actual cited paragraphs for all 34 outside direct interface consumers. The mass definition now spells out the SPD condition already used by each constant positive mass model; virtual displacement and reaction laws unchanged. Action consumers use ordinary two-sided derivatives on a small symmetric parameter interval. Covariance consumer pthm-cm07-coordinate-covariance-of-the-equations already binds a<b and applies the identity on compact subintervals. State/codomain repair preserves pthm-cm06-multiplier-balance's equations, consistency conditions and maximal solution use. Branch consumers evaluate at times inside their explicit model windows. Noether consumers use the unchanged charge/identity; added p binding and vector D_t definition clarify existing notation. Global nonintegrability is exactly what def-cm06-nonholonomic-model and rem-cm06-dalembert-vakonomic-distinction use. No owned consumer needs a further public-claim change.

Owner batch-22 alert: def-cm06-nonholonomic-model Definition (e) and rem-cm06-dalembert-vakonomic-distinction second main paragraph still call the d'Alembert motion unique without a maximal/restriction qualifier. Every restriction of the explicit R-domain solution is another motion under the cited Definition. Required surgical correction: unique maximal d'Alembert motion, or uniqueness up to restriction. The unequal-solution-sets conclusion remains sound. Neither outside carrier was edited. This is not an unresolved mathematical prerequisite of any owned proof.

Owner batch-22 alert: ex-cm06-rolling-disk-model-comparison F1 restates local flow existence with a C2 G, while its cited prop-cm-ideal-holonomic-system-in-a-time-dependent-chart requires C3 G for a C1 acceleration field. Its actual affine G is smooth, so the current calculation is justified; repair the F1 restatement to C3. Keep this outside citation repair with its owner.

Request owner acknowledgment of the outside interface consumer dispositions before run closure. Preserve both alerts until explicitly resolved; no outside acceptance or publication stamp is supplied here.

### Source fidelity and review limits

Local source inspected: research/first-principles-2026-10-03/non-relativistic-classical-mechanics/reader-tong/source/clas.txt, Sections 2.1 (lines 627-762, printed pp.10-12), 2.4.1 and 2.5.1 (lines 1333-1565, printed pp.24-27), 4.1.1 (4277-4330, printed p.82), 4.1.5 (4564-4625, printed pp.87-88), and 4.7 (6345-6438, printed pp.121-122). URL: https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf. Web retrieval of that URL failed; the existing local source was used. Checked first variation, symmetry charges, hoop carrier/effective potential, branch inversion, free momentum endpoints and endpoint W_q=p,W_t=-H. Local proofs explicitly add finite-regularity, bump, interval, inverse and critical-minimum qualifications rather than importing informal source wording. The Cline and Cortes locators/source-fetch receipts are inherited provenance context; no claim of fresh full-text reading of those two sources is made. The nonholonomic witness is completely rederived locally from its explicit prescriptions. All mathematical cited Definitions/Statements needed by owned proofs were opened; producer square-root and energy-stability current proofs were independently read with their actual prerequisites. No experiment or measured input occurs; no statistical certainty is inferred.

### Published maintenance

Recorded nonfatal row/column wording defect in the published surjection-annihilator lemma and supplemented the already indexed cylinder-definition record under an exclusively owned lock. The main multiplier functional identity and concrete compact-product Lipschitz arguments are independently adequate. No published or imported bytes edited.

### Decision coverage and remaining owner work

Final output has 47 exact decisions: 11 confirmed fatal and 36 confirmed nonfatal. There are no false positives, escalated finding decisions, touched decisions or page decisions. Current outside producer proofs are repaired; historical findings are preserved. Each decision references exactly one closed local defect-ledger row. Supplemental mathematical repairs from risk review are separately closed in the ledger/report without creating invented routed obligations. Outside batch-22 wording/citation alerts and the requested acknowledgment of outside interface dispositions remain owner work before run closure; they are not represented as silently repaired. Published maintenance records remain open. No substantial unmet mathematical prerequisite blocks the owned proofs. No item was withdrawn or published. No judging, verification-judge stamp, engine transition or gate battery was initiated.

### Focused local validation

All commands below ran in the physics workspace after the listed content repairs. These are local checks, not proof certification or engine gate acceptance.

- Reflow: `node tools/tsx-run.mjs tools/physics-support/reflow.mts` with all 25 changed item paths; exit 0.
- Precheck: `node tools/tsx-run.mjs tools/physics-support/precheck.mts` with those paths; exit 0, 20 proof-bearing items checked, 0 failing (five definition/remark carriers have no proof).
- Rendercheck: `node tools/physics-support/rendercheck.mjs` with those paths and `--quiet`; exit 0, 25 files, all YAML and actual KaTeX checks passed.
- Required final layout command: `node tools/physics-support/proof-layout.mjs` with every changed path in one invocation; exit 0, 25 items, 100 numbered steps, 0 defects. No item edit followed that invocation.
- `node tools/physics-support/proof-contract.mjs research/physics-cm-qm-gr-79-2026-10-11-batch-4.proof-contracts.json --strict`; exit 0, 24/24, 0 errors/warnings.
- `node tools/physics-support/citation-fidelity.mjs research/physics-cm-qm-gr-79-2026-10-11-batch-4.proof-contracts.json --fail-on-missing-quote`; exit 0, 321 recorded citations, no missing quotes or detector widening candidates. Exact current source quotes and step claims were regenerated, retaining risk reviews and boundary records.
- Risk report ran first without `--require-reviewed` and finally with it; final exit 0, all 24 HIGH/CRITICAL reviews complete.
- `node tools/physics-support/depcheck.mjs --items-file /tmp/physics-batch4-item-selection.json --quiet`; selection is the 32 current batch-4 manifest IDs. Exit 0; 11 cited-not-in-deps warnings all concern explicit contextual mentions of later results in Definitions/Scope paragraphs, not proof premises. For example the holonomic definition explicitly says its converse is not assumed, and the action definition separates stationarity characterization from its notation. Adding those as deps would create supplier/consumer cycles.
- `node tools/physics-support/content-policy.mjs research/physics-cm-qm-gr-79-2026-10-11-batch-4.pages.json`; exit 0, 32 scoped items, 0 errors/warnings.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-cm-qm-gr-79-2026-10-11`; exit 0, refreshed/deduplicated the owned input after its update. Final manifest/contract metadata synchronized with current carriers. Stable IDs and placements preserved; the new action edge raises def-cm-nonholonomic-velocity-constraint-law to level 1 and its owned direct consumers cex-cm-dalembert-and-vakonomic-evolutions-differ and prop-cm-nonholonomic-distribution-is-not-tangent-to-level-sets to level 2. Outside level reconciliation remains engine/owner work.
- JSON/ledger audit: all 47 owed obligations occur once, every routed finding references exactly one existing closed row caught at 3a-adjudicate, and every producer pre-reader/split fingerprint, dependency path, consumer ID and observed hash matches the immutable scope artifact.

Both assigned pages were read. Their prose remains sound under the final claims and no page carrier was edited. A manifest synchronization initially rejected a null Remarks extractor before writing; it was corrected with a direct Remarks fallback and the final synchronization succeeded. This was a mechanical script failure, not a mathematical defect, and has no defect-ledger row.
