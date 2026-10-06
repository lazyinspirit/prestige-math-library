# Step 5a adjudication — batch 16

Run: frontier-39-analysis-30. Group: batch-16. Scope: batch 16 only; engine owns hashes, gates and stage transitions.

The initial risk-report routes all 34 items HIGH/CRITICAL (0 errors). Review follows the generated dependency order. Current raw item hashes initially equal all 34 post-reader item hashes. Sixteen item hashes differ between pre/post; seventeen touched items retain their item hash and have contract/manifest enrichment only. The untouched projection lemma owes risk review but no decision. Historical raw preimages are not assumed available from hash inventories or reader descriptions; HEAD does not match these preimages.

## Current blockers and dependency routing

`thm-poincare-inequality-for-w-one-p-zero` (batch 4), Statement, still omits Countable Choice. Current proof 1.1–3.1 correctly gives constant 1 by smooth zero extension, one-coordinate FTC, Holder (including p=1), Tonelli and closure approximation. Empty domains give the zero class, and n=1/complex scalars are handled. Its F7 and Given require Countable Choice, as do the opened exact definitions `def-wkp-zero-as-a-sobolev-closure` and `def-sobolev-space-wkp-and-its-norm`, and the coordinate-change Statement. Current batch-4 contract citations and manifest entry were independently opened; both retain the undeclared-choice interface. Attempted local closure: derive the estimate with the explicit CC hypotheses and check whether assigned consumer choice discharges them; it does, but this cannot repair the supplier's overstrong standalone Statement. Required owner action: batch 4 must add CC to Statement and synchronize its manifest/contract, or supply choice-free prerequisites and proof. Outside edit scope; no producer edit or historical clearance. Reader:16:3 and flagged:16:3 remain escalated, with the original consumer, path and immutable producer fingerprints retained in decisions. No closed ledger row or repair confidence is fabricated for this unresolved defect.

## Dependency-ordered item reviews

### lem-absolute-value-does-not-increase-dirichlet-energy-or-change-ltwo-normalisation (level 0)

Reviewed Proof 1.1–4.1 and exact truncation, closure, a.e.-subsequence, DCT and choice suppliers: smooth Phi_epsilon vanishes at zero, dominates values/gradients; subsequence sign convergence is used only off {u=0}, where Du=0; the closed H1_0 limit and both energy/norm equalities follow. Empty Omega and zero u are valid. Coordinatewise application of the real chain rule is sufficient. Reader bibliography correction accurately separates Brezis Proposition 9.5 (smooth composition, printed p. 270) from the locally proved nonsmooth and zero-boundary assertions; no Andersson eigenfunction attribution is retained. Statement unchanged.

Verdict: accepted_repair. Risk review: complete. Next: next ordered level-0 item.

### lem-functionals-vanishing-on-the-common-kernel-of-an-independent-family (level 0)

Proof 1.1–5.1: normalization psi(x1)=1 proves m=1 including phi=0; restrictions to ker psi_m are independent by the base case, their common kernel satisfies the transferred hypothesis, and induction reconstructs the last coefficient. Independence gives uniqueness. Exact algebraic-dual/linear-map/kernel/independence statements checked; m>=1 excludes empty family and X={0} cannot satisfy the hypotheses. No infinite choice is used. Unchanged item hash: touched contract enrichment only.

Verdict: reviewed_no_defect. Risk review: complete. Next: next ordered level-0 item.

### lem-hilbert-projection-characterisation-by-a-variational-inequality (level 0)

Proof 1.1–2.1: unique nearest-point and variational-characterization suppliers explicitly require CC, assumed here; reversing x-u changes <=0 to >=0 in a real inner product. Both directions retain u in K, nonempty closed convex K. Singleton K, H={0}, x in K are valid. Exact published projection Statements and inner-product convention opened. Unchanged item hash: contract enrichment only.

Verdict: reviewed_no_defect. Risk review: complete. Next: next ordered level-0 item.

### lem-nonnegative-test-pairings-imply-a-e-nonnegativity-for-ltwo-functions (level 0)

Proof 1.1–4.1: zero-extended z^- eta is L2 with compact support; convolution is nonnegative and supported inside O for epsilon<d/2. Cauchy–Schwarz passes pairings to -integral (z^-)^2 eta; compact cutoffs and countable exhaustion yield nonnegativity. Applying the uniform argument to +/-z on O proves the vanishing assertion, including empty O/Omega, zero eta and O=Rn. Exact mollifier/approximate-identity, distance-gap, cutoff, null-union, Holder and zero-integral Statements checked; CC covers analytic interfaces. Unchanged item hash: contract enrichment only.

Verdict: reviewed_no_defect. Risk review: complete. Next: next ordered level-0 item.

### lem-one-dimensional-trace-truncation-compatibility (level 0)

Proof 1.1–7.1 and exact interval representative/endpoint/truncation/extension/density/localization Statements: endpoint pair estimate correctly has sqrt(2). Bounded T vanishes on closure. For Tu=0 the cutoff-gradient error is bounded by (4M)^p/p times shrinking endpoint derivative integrals, also for p=1; compact support zero extension, smooth density and interior cutoff give the converse ker T inclusion. Continuous representatives give truncation traces and both iff directions for every real k, including k<0 and u=0. AC discharges representative and density interfaces; p=infinity is excluded. Reader norm correction accepted.

Verdict: accepted_repair. Risk review: complete. Next: next ordered level-0 item.

### thm-banach-implicit-function-theorem-for-a-split-surjective-derivative (level 0)

Proof 1.1–5.1: finite preimages of the standard basis give an independent complement Y, bounded inverse and projection. Closed kernel and finite-dimensional Y are Banach; addition coordinates are a topological isomorphism. Auxiliary C1 F has invertible Y derivative, so the exact published IFT yields the complete local graph and uniqueness; differentiating shows Dphi(0)=0 by kernel/Y intersection. AC, m>=1 and open U explicitly assumed; zero kernel is allowed and X={0} cannot be surjective. Exact finite-choice, finite-dimensional boundedness/completeness, Banach-product, derivative and IFT Statements checked. Sideris Theorem 5.7 is the corresponding source. Unchanged item hash: contract enrichment only.

Verdict: reviewed_no_defect. Risk review: complete. Next: next ordered level-0 item.

### lem-metric-projection-onto-a-nonempty-closed-convex-set-is-nonexpansive (level 1)

Proof 1.1–4.1: test the two projection inequalities with each other and add them to get <u-v,x-y> >= ||u-v||^2. The residual form is exactly the same inequality after subtraction. Cauchy–Schwarz yields nonexpansiveness, with u=v treated before division. H={0}, singleton K, x=y and equality cases checked; CC supplies projections. Exact projection and inner-product Statements checked. Untouched/unflagged: no carrier decision owed.

Risk review: complete. Next: next ordered item.

### lem-regular-banach-constraint-directions-are-realised-by-level-set-curves (level 1)

Proof 1.1–3.1: openness of A gives radius r; epsilon=r/(2||h||) for h!=0 and epsilon=1 for h=0. The graph curve lies in U and preserves G; chain rule and Dphi(0)=0 give c prime(0)=h. Exact lower-level parametrisation and derivative interfaces checked; AC inherited, zero tangent direction gives the constant curve. Unchanged item hash: touched contract enrichment only.

Risk review: complete. Next: next ordered item.

### Read-only producer: lem-form-to-bounded-operator-by-hilbert-riesz (level 1)

Historical complex second-slot linearity calculation omitted conjugation; with s=i and a nonzero real inner product the displayed scalar equality has the wrong sign. This is a short nonfatal proof omission, not a false theorem. Current producer Proof 1.1–5.1 independently reviewed: conjugate f_u is linear, Riesz gives a unique Au, corrected 3.1 uses (A(su+tw),v) in the first slot, and norm, coercivity iff, uniqueness, linear form assignment and adjoint identity all follow. H={0}, M=0, complex scalars and least-bound case checked. Exact current Riesz/adjoint/form/inner-product interfaces, batch-10 contract and matching manifest opened. CC suffices and the real Stampacchia consumer is unaffected. Immutable pre-reader fingerprint retained; current correctness does not erase the historical finding.

Verdict: confirmed_nonfatal; current repair independently accepted, producer outside write scope. Next: level 2.

### lem-strong-ltwo-compactness-preserves-unit-normalisation (level 2)

Proof 1.1–4.1: exact Rellich Statement provides an L2 convergent subsequence for bounded H1_0 on bounded arbitrary open Omega under AC. Bounded smooth-test pairings identify the strong limit with the specified weak H1_0 limit by the reviewed L2 vanishing lemma; reverse triangle inequality preserves norm 1. Empty Omega/zero sequence are excluded by normalization, and weak limit membership is part of the convergence definition. All exact cited interfaces opened. Unchanged item hash: contract enrichment only.

Verdict: reviewed_no_defect. Risk review complete. Next: next ordered item.

### lem-tangent-space-to-a-regular-level-set-is-the-kernel-of-the-constraint-derivative (level 2)

Proof 1.1–2.1 checks both inclusions: chain rule puts every derivative of a constant-G curve in ker DG(u), and the lower-level graph curve realizes every h in the kernel. Composition being defined entails curve values in U; local restriction suffices. Zero h and zero kernel are included. AC/surjectivity/C1 are explicit and match the reviewed suppliers. Unchanged item hash: contract enrichment only.

Verdict: reviewed_no_defect. Risk review complete. Next: next ordered item.

### thm-stampacchia-variational-inequality (level 2)

Proof 1.1–5.1: current Riesz/form producer yields f,A and ||A||<=M. The repaired proof first settles H={0}; for nonzero H, coercivity/boundedness imply alpha<=M. rho=alpha/M^2 gives a real q=sqrt(1-alpha^2/M^2) in [0,1), including q=0, which exact Banach fixed-point Statement permits. Projection contraction acts on nonempty complete K. The fixed-point/VI equivalence uses rho>0 and the correct sign; testing two solutions gives -a(u-u prime,u-u prime)>=0 and uniqueness. No symmetry is needed. CC matches Riesz/projection inputs. Reader zero-dimensional repair accepted; Statement unchanged.

Verdict: accepted_repair. Risk review complete. Next: next ordered item.

### lem-the-differential-annihilates-the-tangent-kernel-at-a-constrained-extremum (level 3)

Proof 1.1–4.1: for each kernel h the reviewed curve realizes h; continuity shrinks the curve into the local extremum neighborhood. Pointwise Frechet differentiability of I at u suffices for the chain rule at 0; no C1 assumption on I is added. The real composite has an interior two-sided extremum, so exact Fermat Statement gives DI(u)h=0 for both minima and maxima. AC enters the curve supplier. Unchanged item hash: contract enrichment only.

Verdict: reviewed_no_defect. Risk review complete. Next: next ordered item.

### thm-lipschitz-stability-of-strongly-monotone-variational-inequalities (level 3)

Proof 1.1–3.1: reciprocal tests on the same K and same form yield alpha||d||^2 <= (F1-F2)(d); the exact dual-norm estimate and positive-norm division give the claimed 1/alpha stability. d=0, equal data and H={0} need no division. No symmetry or varying-K conclusion is asserted. CC supplies Stampacchia solutions; Yen–Kim (2.4), printed p.408, independently corroborates this estimate. Unchanged item hash: contract enrichment only.

Verdict: reviewed_no_defect. Risk review complete. Next: next ordered item.

### cex-the-ltwo-unit-sphere-is-not-weakly-closed-in-an-infinite-dimensional-hilbert-space (level 3)

Counterexample 1.1–5.1: under full AC, the exact maximal orthonormal family supplier gives B; finite-dimensional closed span cannot equal infinite-dimensional H. AC chooses extensions of every finite distinct tuple and recursion gives an orthonormal sequence. Bessel makes coefficients tend to zero, and exact Riesz identifies every weak test, so e_j weakly tends to 0 outside the norm-closed unit sphere. Finite-dimensional/zero H are excluded. Exact full dominated HB extension (rather than norm-preserving extension alone) implies the HB premise of the weak sphere-closure corollary. Reader explicit-AC and exact-HB supplier repair accepted; current mathematical witness sound.

Verdict: accepted_repair. Risk review complete. Next: next ordered item.

### thm-direct-method-on-a-weakly-closed-constraint-set (level 4)

Proof 1.1–2.1: exact direct-method supplier is on A, and the linked functional Definition explicitly identifies I with its restriction to A, including properness (a finite competitor on A). Thus the application has the requisite domain and properness convention; weak sequential closure/coercivity/lower semicontinuity and UL,DC,HB match. Exact norm-closed-convex/weak-closed theorem supplies the second clause in both real and complex convention, here real. Empty A/C excluded, singleton and bounded constant functionals covered if hypotheses hold. Unchanged item hash: contract enrichment only.

Verdict: reviewed_no_defect. Risk review complete. Next: next ordered item.

### thm-finite-regular-constraint-lagrange-multiplier-rule (level 4)

Proof 1.1–3.1: reviewed stationarity lemma annihilates ker DG, which equals intersection of component kernels. Surjectivity supplies finite preimages x_i of e_i; evaluating any functional relation gives independence. The reviewed algebraic common-kernel lemma gives unique lambda, with bounded functionals legitimately viewed in the algebraic dual. AC enters stationarity/IFT; finite selections need no additional choice. Regular finite-family convention matches m>=1 suppliers, including one constraint and DI=0. Unchanged item hash: contract enrichment only.

Verdict: reviewed_no_defect. Risk review complete. Next: next ordered item.

### thm-hilbert-space-lagrange-multiplier-rule-for-one-regular-constraint (level 4)

Proof 1.1–3.1: nonzero real DG is onto R (evaluate and rescale a vector with nonzero value), so constrained stationarity gives ker inclusion; reviewed one-functional lemma gives unique lambda. Both minima/maxima, DI=0/lambda=0 are included; DG=0/H={0} are excluded by regularity. AC discharges curve supplier, and Hilbert completeness gives the real Banach domain. Unchanged item hash: contract enrichment only.

Verdict: reviewed_no_defect. Risk review complete. Next: next ordered item.

### lem-lagrange-multiplier-is-unique-when-constraint-gradients-are-independent (level 5)

Proof 1.1–3.1: subtract multiplier identities, evaluate on finite surjectivity witnesses and obtain every coefficient zero. Exact Banach transpose Definition has domain (R^m)*; F3 explicitly supplies the elementary standard-basis identification with R^m and its coordinate formula, so the displayed map is well typed under that identification. Injectivity is the zero-kernel statement, and lambda=0/one constraint are included. No new choice beyond standing AC. Unchanged item hash: contract enrichment only.

Verdict: reviewed_no_defect. Risk review complete. Next: next ordered item.

### ex-isoperimetric-integral-constraint-and-its-multiplier (level 5)

Verification 1.1–5.1: polynomial u0=6A x(1-x) has zero trace and integral A. Quadratic expansion gives DJ=2 integral u prime h prime and bounded affine G has constant continuous DG; DG(u0)u0=A!=0. Exact AC integration-by-parts Statement (CC and DC, supplied by AC) gives DJ(u0)=24A DG. Energy difference is ||(v-u0) prime||2 squared; equality forces constant h and trace zero, hence h=0. Negative A valid; A=0 excluded as written (the same minimum remains true but the regularity test would use another vector). Current bibliography accurately identifies Cristoferi quadratic sphere mechanism rather than claiming the parabola is there. Reader source/notation/step-layout repair accepted.

Verdict: accepted_repair. Risk review complete. Next: next ordered item.

### Read-only producer: lem-positive-part-of-a-zero-trace-function-has-zero-trace (level 6)

Current read-only producer F4 and Proof 1.1–4.1 independently reviewed, with exact current trace, kernel, smooth-density, positive-part and level-set gradient suppliers plus its batch-14 contract/manifest. Every subsequence has a further a.e.-convergent subsequence (Chebyshev and summable exceptional sets). On {w!=0} indicators converge, on {w=0} Dw=0; DCT controls the indicator-gradient term. A contradiction yields full H1 positive-part convergence. Trace continuity gives T(w^+)=(Tw)^+ and the kernel theorem gives both trace-order/zero-boundary directions for all k. This closes the short historical omission, classified nonfatal; it does not erase that omission. The original observed bytes were not bound, so historical_delta_unknown remains true. Current manifest deps omit the DCT/Chebyshev IDs now declared in the producer; route metadata synchronization to batch 14/Step 5b without editing its artifacts.

Owner-authorized historical disposition: The owner dispatch expressly instructs normal adjudication of observation_basis unbound findings after independent current proof review, retaining historical uncertainty. Current F4, its exact suppliers, contract and manifest establish closure of the reported short omission; absent original observed bytes limit historical comparison and no snapshot binding is asserted.

Next: batch-16 level 6.

### cex-dependent-equality-constraints-have-nonunique-multiplier-vectors (level 6)

Counterexample 1.1–3.1: on G=(x,2x)=0, I=y^2 has a strict global minimum only at (0,0). Explicit Frechet derivatives yield DI=0, DG_2=2DG_1 and non-surjective image {(a,2a)}. Multipliers are exactly (-2t,t); both t=0 and t=1 verify nonuniqueness despite unique minimum. Reviewed regular multiplier/uniqueness suppliers are used for comparison only; no application in this singular case. Unchanged item hash: contract enrichment only.

Verdict: reviewed_no_defect. Risk review complete. Next: next ordered item.

### def-closed-convex-obstacle-set-and-variational-inequality (level 7)

Definition checked in both dimensions: interval endpoint trace and n>=2 bounded C1 trace suppliers make Tpsi<=0 equivalent to psi^+ in H1_0 under AC. K is defined on real a.e. classes, F is real H^-1 so conjugate-linearity reduces to linearity. Energy requires symmetry; VI allows nonsymmetric bounded coercive forms. Reaction is a bounded real H1_0 functional, fixed-support H1 seminorm estimate proves continuity in exact LF test topology, and the complex-linear extension matches exact distribution convention. Null/empty compact support is harmless; definition excludes incompatible trace by the obstacle hypothesis. Reader distribution-continuity/scalar justification accepted. All direct consumer uses remain under these same real conventions.

Verdict: accepted_repair. Risk review complete. Next: next ordered item.

### lem-the-obstacle-admissible-set-is-closed-convex-and-weakly-closed (level 8)

Proof 1.1–2.1: trace compatibility puts psi^+ in H1_0 and psi^+>=psi gives a witness. Convex combinations preserve the a.e. order. Norm convergence gives an a.e.-convergent subsequence, and CC combines countably many exceptional sets, giving sequential closure; metric sequential closure implies norm closure under the available CC. Exact AC norm-closed-convex supplier gives topological weak closure, hence weak sequential closure. psi=0 gives the nonnegative cone; psi<=0 gives 0 as a competitor but does not generally make K all of H1_0. Unchanged item hash: contract enrichment only.

Verdict: reviewed_no_defect. Risk review complete. Next: next ordered item.

### cex-obstacle-admissible-set-can-be-empty-when-trace-and-obstacle-are-incompatible (level 8)

Counterexample 1.1–3.1: continuity of interval AC representatives turns v>=1 a.e. into v>=1 throughout the closed interval, including endpoints via one-sided neighborhoods, contradicting Tv=0. Current final step additionally proves necessity for any H1 interval psi using T((psi-v)^+)=(Tpsi-Tv)^+=0. The witness intentionally removes the obstacle Definition compatibility hypothesis and does not refute its compatible setting. AC inherited explicitly. Reader general-necessity and choice repair accepted.

Verdict: accepted_repair. Risk review complete. Next: next ordered item.

### thm-existence-and-uniqueness-for-the-obstacle-problem (level 9)

Proof 1.1–2.1: exact Hk Hilbert completeness and closed-subspace suppliers justify real H1_0 before Stampacchia. Reviewed K lemma gives nonempty closed convex K. Symmetry gives J(v)-J(u)=a(u,v-u)-F(v-u)+a(v-u,v-u)/2, so VI yields quantitative strict minimization. Conversely feasible convex one-sided variations and t down to zero give VI, including w=0/a(w,w)=0 before divisions. Both directions and uniqueness hold. AC/CC explicitly match trace/Hilbert/Stampacchia interfaces. Reader choice/completeness repair accepted; direct consumer assumptions checked in subsequent ordered reviews.

Verdict: accepted_repair. Risk review complete. Next: next ordered item.

### cor-obstacle-complementarity-in-distribution-form (level 10)

Proof 1.1–4.1: real upward smooth variations give nonnegative reaction, whose continuity/complex extension is justified by the reviewed Definition. With the separately assumed continuous representatives, O={u>psi} is open and every compact smooth support in O has positive gap; sufficiently small two-sided variations force zero pairings there. Exact L2 sign lemma and local-integrable fundamental lemma give zeta>=0 and zeta=0 on O; a.e. feasibility makes u-psi=0 off O, so product vanishes a.e. Empty O and zero tests handled. No unsupported general Sobolev/distribution product. Reader real/complex scalar clarification accepted.

Verdict: accepted_repair. Risk review complete. Next: next ordered item.

### ex-one-dimensional-obstacle-problem-and-contact-set (level 10)

Verification 1.1–7.1: t in (0,1) solves epsilon=t-t^2/2, giving matching values and slopes at +/-t. Piecewise C1 u has zero endpoint trace; off contact, u-psi=(|x|-t)^2/2. u prime is continuous piecewise affine hence AC, and exact integration by parts gives a(u,v-u)=integral[-t,t](v-psi)>=0. Energy comparison and zero derivative/zero trace show unique minimum. Exact principal form coercivity supplier applies to interval model with AC/CC; reader added this missing cited form prerequisite. Endpoints epsilon=0,1/2 excluded as written; no boundary atoms are used here.

Verdict: accepted_repair. Risk review complete. Next: next ordered item.

### cor-obstacle-reaction-is-supported-on-the-contact-set-under-measure-regularity (level 11)

Proof 1.1–5.1: continuous representatives give an open positive gap set and two-sided compact variations make reaction vanish there without any L2-density premise. Exact cutoff supplier gives each compact subset zero measure; Radon inner regularity on opens, not arbitrary Borel sets, gives mu(O)=0, including O empty. Continuous u>=psi a.e. implies pointwise feasibility since a nonempty negative-gap open set contains a positive-measure ball. Contact concentration then makes both positive/negative product integrals zero even if u-psi is globally unbounded. Exact Radon, cutoff, compact-minimum, monotonicity and null-integral Statements checked. Unchanged item hash: contract enrichment only.

Verdict: reviewed_no_defect. Risk review complete. Next: next ordered item.

### thm-higher-eigenvalues-by-orthogonality-constrained-minimisation (level 11)

Proof 1.1–8.1: e_k gives a finite competitor, DC supplies minimizing sequence, bounded H1 norm gives weak subsequence, and reviewed strong-L2 lemma preserves normalization while bounded orthogonality tests preserve prior constraints. Convex energy lower semicontinuity is applied on all X, not on nonconvex S_k. Explicit derivative remainders and operator-norm continuity give C1 G; v0/2 and e_j give surjectivity. Testing multiplier identity against earlier e_j annihilates orthogonality multipliers, against v0 identifies mu_k; completeness and distinct-eigenvalue orthogonality force mu_k=lambda_k, including repeated eigenvalues. All actual spectral, reflexivity, compactness, density and multiplier Statements independently opened. Amended Statement and F1 to name the real Dirichlet Laplacian (identity principal matrix, zero drift/potential), matching the existing E and Given; a general scaled principal operator -2Delta would have twice these eigenvalues. Current manifest and citation specialization synchronized; no item dependency/reference consumers found. Reader DC/C1 repair retained; new operator-specification repair complete.

Verdict: amended_repair. Risk review complete. Next: next ordered item.

### thm-lewy-stampacchia-bounds-in-the-sourced-obstacle-regularity-class (level 11)

Proof 1.1–5.1: psi in H1_0 permits both competitors psi and 2u-psi, forcing Lambda(w)=0 for nonnegative w=u-psi. Lpsi in L2 and density extend its test identity to all H1_0; compact truncation products theta_delta phi and m_delta phi have the required membership by the explicitly proved zero-extension/density/cutoff argument. Positivity and domination by Cw force Lambda(m_delta phi)=0. The principal gradient-square term has nonnegative sign; DCT kills the remaining gradient/drift terms because Dw=0 on {w=0}, and potential term uses w theta_delta<=delta/4, leaving Lambda(phi)<=integral_{w=0} h phi<=integral h^+ phi. Zero w, zero phi, sign-changing h/c and bounded drift are handled; no derivative of measurable coefficients is taken. Exact elliptic boundedness, truncation, density and sign interfaces checked. Ouaro–Traore assumptions (2.1)–(2.8), Theorem 2.5/(2.10), pp.129–132, and complete Section 4 proof pp.139–140 independently read from recovered PDF: psi^+ bounded and principal-part entropy case only. Reader proof/citation correction accepted; lower-order extension justified by this local argument.

Verdict: accepted_repair. Risk review complete. Next: next ordered item.

### ex-one-dimensional-obstacle-reaction-is-supported-on-the-contact-set (level 11)

Verification 1.1–4.1: reviewed explicit solution has continuous piecewise affine u prime, hence AC; integration by parts proves its a.e. derivative -1_{(-t,t)} is the weak derivative and lies in L2, establishing H2 without a false C1 assertion for u prime at corners. Compact-test boundary terms vanish, so -u second gives density 1_{[-t,t]}, mass 2t, and singleton free-boundary points have zero density-measure mass. CC/DC integration prerequisites supplied by inherited AC. Reader weak-second-derivative repair accepted.

Verdict: accepted_repair. Risk review complete. Next: next ordered item.

### rem-pointwise-and-integral-constraints-have-different-regularity-tests (level 12)

Reviewed complete Remark and exact multiplier/obstacle/complementarity suppliers: regular C1 equality constraints require onto derivative; obstacle VI gives a positive reaction but not automatically an L2 density or continuous representatives. The conditional measure formulation does not deny Radon representation of positive distributions. The Dirac counterexample below concerns arbitrary measures rather than obstacle reactions. Singular-constraint comparison x^2+y^2=0 correctly allows failure of stationarity. Reader removal of false no-Radon implication accepted.

Verdict: accepted_repair. Risk review complete; producer escalation remains open. Next: next ordered item/page obligations.

### cex-obstacle-complementarity-product-needs-extra-regularity (level 12)

Counterexample 1.1–5.1: n=2 cutoff radial loglog has finite L2 value integral via exponential tail and finite gradient integral sigma(S1)/log4. Apart from one null exceptional coordinate line in each direction, the piecewise radial sections are locally AC with matching values at r=1/4; exact ACL Statement establishes H1 under AC. Unboundedness on every punctured small ball excludes a continuous representative. Values 0/1 at a Lebesgue-null singleton represent the same H1 class; exact Dirac measure and constructed cutoff phi(0)=1 give pairings 0/1. Arbitrary Radon multiplication is refuted; no assertion that delta0 is an obstacle reaction is retained. Exact polar, ACL, Dirac, smooth multiplication, null-set and cutoff suppliers checked. Reader removal of overstrong actual-reaction equivalence and explicit AC repair accepted.

Verdict: accepted_repair. Risk review complete; producer escalation remains open. Next: next ordered item/page obligations.

### thm-first-dirichlet-eigenfunction-by-constrained-minimisation (level 13)

Proof 1.1–7.1: nonempty open Omega supplies a nonzero cutoff and normalized competitor. Convex continuous E is weakly lower semicontinuous on X; DC selection and 1+E bound give weak subsequence, and reviewed Rellich lemma preserves norm 1. Differentiability remainders and operator-norm Lipschitz bound for DG give C1; DG(v0)v0=2 makes the one-constraint derivative onto. Multiplier equation tested at v0 identifies lambda; exact absolute-value lemma gives some nonnegative minimizer, without claiming every minimizer nonnegative. Poincare at p=2 gives positivity; its proof was independently checked under CC, which this consumer discharges via AC/DC. Its defective standalone Statement remains escalated to batch 4 and is not certified by this review. Exact Rayleigh supplier specializes to the explicitly named Laplacian form and identifies all S-intersect-eigenspace minimizers, including disconnected domains and multiplicities. Reader DC/C1/sign-selection repair accepted.

Verdict: accepted_repair. Risk review complete; producer escalation remains open. Next: next ordered item/page obligations.

### ex-rayleigh-quotient-on-an-interval (level 14)

Verification 1.1–5.1: u0=sqrt2 sin(pi x), derivatives and zero endpoints checked. Explicit boundary cutoffs have supported error of length <=4/m, value error O(1/m), bounded derivative error, so u0 lies in H1_0 by closure. Power reduction gives L2 norm 1 and energy pi^2; exact sharp interval inequality (CC) proves global minimum and exact weak identity supplies the eigenfunction equation. The explicit computation itself needs CC only, whereas the cited general first-eigenfunction setting retains AC/UL/DC/HB. Zero competitors excluded by norm 1; no claim of uniqueness up to all signs beyond stated existence. Unchanged item hash: contract enrichment only.

Verdict: reviewed_no_defect. Risk review complete; producer escalation remains open. Next: next ordered item/page obligations.

## Page obligations

### A page

Current A-page overview falsely omitted continuous representatives from reaction vanishing on the noncontact set. The assigned Definition imposes an a.e.-class inequality; without continuity, arbitrary representative changes alter {u>psi} and it need not be an open distribution test domain. Independently checked current complementarity Proof 1.2 and measure-support Proof 1.1–5.1: both require continuous u and psi to obtain compact positive gaps. Repaired page to state exactly that continuity condition and the nonnegative Radon representation for contact support. Remaining page prose matches reviewed item claims, including trace compatibility, scalar conventions, multiplier uniqueness and actual choice footprints. Lists/order remain unchanged.

Verdicts: flagged:16:1 confirmed_fatal; page:16:constrained-variational-problems-and-variational-inequalities amended_repair. Repair confidence 1.

### B page

Current B-page final sentence falsely says all explicit computations use only CC. Exact trace/AC-representative Statements require AC and integration-by-parts requires CC plus DC; current isoperimetric and obstacle computations explicitly invoke them. Independent item review confirms Rayleigh alone uses CC for its explicit verification, sphere/ACL examples use AC, and the dependent-constraint polynomial calculation is choice-free. Replaced the page sentence with these per-example footprints. All eight computations and witnesses checked above; no item statement or page list change is needed.

Verdicts: reader:16:4 and flagged:16:2 confirmed_fatal, sharing one defect row. Repair confidence 1. No extra page obligation invented.

Next: ledger, consumer routing and focused final checks.

## Sources and exact conventions

The report's item sections identify the local supplier Statements/Definitions and proof loci actually used. The review covers current authored mathematics and its actual prerequisites; it does not certify every transitive proof or repeat the old scaffold checklist.

- [Brezis](https://www.math.utoronto.ca/almut/Brezis.pdf), Proposition 9.5, printed p.270 (PDF page 285): C1 scalar composition, value zero at zero, uniformly bounded derivative, complete composition proof read. This corroborates smooth compositions only; absolute value and zero-boundary preservation are proved locally. Chapter 8 attribution in the interval-trace item is supporting bibliography; its closure proof is independently checked from exact library interfaces.
- [Sideris](https://web.math.ucsb.edu/~sideris/pdffiles/BookPublishedComplete.pdf), Theorem 5.7 and complete contraction proof, printed pp.82–84: Banach C1 map, open product neighborhood and bounded inverse of partial derivative. The local complement construction discharges the inverse/splitting hypotheses.
- [Yen–Kim](https://math.ac.vn/uploads/files/0103407.pdf), Section 2, Theorems 2.2–2.3 and estimate (2.4), printed pp.408–409: real Hilbert space, nonempty closed convex set and bounded coercive operator/form. Independent local contraction proof handles the zero-space case. Theorem 2.3 prints an absolute diagonal lower bound, which is overstrong as a sufficient hypothesis: H=R, C=[-1,1], a(u,v)=-uv and y=0 give solutions -1,0,1. The current item instead assumes positive coercivity and proves the result locally; Theorem 2.2 has the correct positive operator condition, and the printed 2.3 defect is not imported.
- [Cristoferi](https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf), Chapter 7, printed pp.67–68: complete finite-dimensional quadratic/sphere and orthogonality-constrained argument read. It does not supply the integral-constrained parabola; that computation is checked locally. Source simplifications/formulas are not used as verdicts.
- [Andersson](https://www.kth.se/social/files/5671638ef276544fe6bf8bb4/Lectures_Obstacle_Problem.pdf), Theorem 3.1 and complete variation discussion, printed pp.27–28; Theorem 4.2/(58) and complete proof/qualification, printed pp.36–37: nonempty obstacle class and normalized W2,2-local complementarity. The source's sign mistakes and informal level-set assertion are not imported into the current local proofs. General bounded-form and distribution arguments are checked from current library suppliers.
- [Ouaro–Traore](http://www.ybook.co.jp/online-p/PJO/vol5/pjov5n1p127.pdf), recovered full article `/tmp/reader16-ouaro.pdf`: assumptions (2.1)–(2.8), Theorem 2.5/(2.10), printed pp.129–132, and entire Section 4 proof, pp.139–140, read with PyMuPDF after the web open failed and pdftotext was unavailable. It corroborates the principal-part entropy setting with bounded positive obstacle part. The present bounded lower-order calculation is proved locally; H2 alone does not assert Lpsi in L2 with measurable principal coefficients, so that additional hypothesis is retained.

Teschl, Oden–Kikuchi, Nagurney and Laugesen bibliography locators were not newly full-text audited in this dispatch. No new source-reading claim is made for them; the claims reviewed above are justified by the opened exact library interfaces and independent elementary derivations, plus the specific primary passages listed here.

## Consumer impacts, published findings and remaining alerts

The only new item amendment in this dispatch is the explicit real-Laplacian specialization in `thm-higher-eigenvalues-by-orthogonality-constrained-minimisation`, Statement and F1; its manifest statement/provenance and contract citation specialization were synchronized. Its statement was already coupled to unweighted E and the Given model form. Without the specialization, the generic principal-form reading allows -2Delta on (0,1), for which spectral lambda_k is twice the constrained minimum of this E. All multiplicities and variational conclusions for the intended Laplacian are preserved. The authored proof is retained; no judge stamp was present or added. Repository-wide dependency/reference search found no direct item/reference consumer of this item. Its owning A-page placement is retained.

Reader statement/definition changes were traced through all current direct dependency/reference consumers of the obstacle definition, obstacle existence theorem, distribution complementarity, sphere, product and incompatible-trace counterexamples. All are the reviewed batch-16 carriers and the two assigned pages; no outside consumer requires a mathematical repair. Their actual uses retain real scalar conventions, inherited AC and the conditional continuity/density hypotheses. No sound item was edited merely for citing an amended supplier.

The owned cross-batch input retains all 57 rows, including all proposed removals. Its Poincare consumer edge is open; the independently checked Riesz and trace uses remain verified with historical findings preserved, and spectral uses explicitly specialize to the Laplacian. The canonical dependency-ledger note was added and `frontier-dependency-ledger refresh` completed. Batch 14/Step 5b should reconcile its producer manifest dependency additions for DCT and Chebyshev; that metadata drift does not refute the current independently checked trace proof.

No defective published item was identified within the opened prerequisite/consumer scope. Published item files and the published-consumer ledger were left read-only; no published repair or classification row was manufactured.

**Owner-held blocker:** reader:16:3 and flagged:16:3 retain `escalated` for the same current batch-4 missing-CC Statement. They reference one **open** ledger row `f39-b16-poincare-choice-open`; the closed-row requirement cannot honestly be met before the producer repair. The report does not claim gate closure. Their immutable producer pre-reader and routing fingerprints, dependency paths and consumer bindings are preserved. The current producer raw hash at handoff is `19786ad5c40ae8fd074b19f95edb723c28012f5a78ae97852575909f63973650`.

The historical trace finding retains `historical_delta_unknown: true` and the dispatch-authorized unbound disposition, without claiming recovered original bytes. No earlier escalation or uncertainty was deleted.

## Focused checks and disposition coverage

- Initial `node tools/risk-report.mjs research/frontier-39-analysis-30-batch-16.proof-contracts.json`: 34 HIGH/CRITICAL items routed, 0 errors.
- Final same command with `--require-reviewed`: 34 current item-specific complete risk reviews, 0 errors. This does not clear the outside producer escalation.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-higher-eigenvalues-by-orthogonality-constrained-minimisation.md`: 1 checked, 0 failing, PASS; no proposed formatter repair.
- `node tools/rendercheck.mjs items/thm-higher-eigenvalues-by-orthogonality-constrained-minimisation.md library/pde/constrained-variational-problems-and-variational-inequalities.md library/pde/constrained-variational-problems-and-variational-inequalities-examples.md`: 3 files clean, real KaTeX and YAML parsing available.
- Final, after all item edits: `node tools/proof-layout.mjs items/thm-higher-eigenvalues-by-orthogonality-constrained-minimisation.md`: 1 item, 9 steps, 0 defects. This is the complete set of item paths changed by this dispatch.
- `node tools/defect-ledger.mjs validate --run frontier-39-analysis-30`: 211 run rows checked, 0 errors. This is ledger schema validation, not mathematical closure.
- Local exact-obligation comparison: 41/41 decisions, no duplicates or extras; 33 touched, 1 page, 4 reader and 3 flagged. The untouched projection lemma has a complete risk review and no invented decision. Every reader/flagged decision references exactly one ledger row; the two escalated Poincare observations intentionally share the open row. There are 23 referenced defect rows: 22 closed and 1 open.

No judge, stamp, self-certification, agent dispatch, engine retry or stage transition was initiated. Next action is producer-owner Poincare repair and Step-5b reconciliation; the engine owns decision-hash stamping and gate execution.
