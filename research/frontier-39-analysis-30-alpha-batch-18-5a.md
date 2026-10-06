# Batch 18 Step 5a adjudication — frontier-39-analysis-30

Scope: batch 18 only, group batch-18. Reader report, empty reader findings, refute-18, pre/post hash snapshots and the generated item order were opened. Current item raw hashes initially match all reader-post hashes. Review is independent mathematical adjudication; engine hashes, gates and judgments remain engine-owned.

## lem-power-series-coefficients-are-determined-by-real-values

Current Proof 1.2 uses q=rho/2, strictly inside the convergence interval; bounded coefficients at q give a geometric uniform tail at |h|<=q/2. Factoring after the first n zero coefficients proves uniqueness by induction, including n=0 and h=0. The centre is real as required; translated uses must have centre zero. The reader-described excluded-boundary inference is a genuine invalid inference now repaired. Opened current series/norm definitions and complex-norm convention; no completeness or choice is used.

Verdict: accepted_repair. Defect ledger: f39-b18-lem-power-series-coefficients-are-determined-by-real-values. Risk review complete.

## def-closed-sectorial-form-and-its-associated-operator

The Hermitian part plus (M+1) times the H pairing is positive definite and gives the stated form norm. Both norm completions are Banach; the reverse identity has closed graph because both inclusions into H are continuous, so the opened DC closed-graph theorem gives norm equivalence. Coercivity gives it directly. Dense V gives uniqueness of f without choice; A=-form operator and M-A is accretive. Zero H and zero forms on proper dense V do not bypass completeness. Reader repaired the formerly unsupported norm-equivalence assertion; the optional Sobolev instance is contextual, not a choice-free completeness theorem.

Verdict: accepted_repair. Defect ledger: f39-b18-def-closed-sectorial-form-and-its-associated-operator. Risk review complete.

## lem-resolvent-identity-and-holomorphy-for-closed-operators

Item raw hash is identical in pre and post snapshots; only its evidence map changed. Current factorization is on D(A), both inverse identities have the correct domains, the Neumann series has ||T||<1, and the h^2 tail proves derivative -R^2. Scalar exponential differentiation also applies to real parameters via the opened canonical complexification. Coincident resolvent parameters and zero X are harmless. Current exact resolvent, Neumann, composition and exponential clauses were opened; no closed-graph theorem or choice is needed.

Verdict: reviewed_no_defect. Defect ledger: none; audit enrichment only. Risk review complete.

## def-complex-sector-and-bounded-analytic-semigroup

The principal argument is now explicitly (-pi,pi], independent of the scalar holomorphy definition. For analytic angles <=pi/2 the open sector is closed under addition; norm holomorphy gives continuity away from zero, and the assumed strong vertex limit gives the real C0 family. Boundedness is on every strictly smaller sector and not at its boundary. Real spaces use the opened canonical complexification. Reader repaired an inaccurate citation of the argument convention. Zero X is allowed.

Verdict: accepted_repair. Defect ledger: f39-b18-def-complex-sector-and-bounded-analytic-semigroup. Risk review complete.

## lem-sectorial-form-angle-controls-the-numerical-range-of-its-operator

Pre/post item raw hashes coincide: citation-map enrichment only. Testing the associated-operator identity with v=u gives (Au,u)=-a(u,u); subtracting M||u||^2 gives the reflected closed sector. Normalization is only for nonzero u. On zero H the range convention W(0)={0} still satisfies containment. This uses no norm-equivalence assertion or choice; theta=0 gives the nonpositive real ray. Opened current form, inner-product and numerical-range definitions.

Verdict: reviewed_no_defect. Defect ledger: none; audit enrichment only. Risk review complete.

## def-sectorial-operator-with-the-semigroup-sign-convention

Closed reflected spectral sector includes zero and its boundary; delta=pi/2 gives the nonpositive real ray, not an empty open sector. For B=-A+omega I, R(mu,B)=-R(omega-mu,A), with denominator |mu| on the reflected resolvent sector. The real operator complexification is coordinatewise closed and dense. Opened resolvent and complexification clauses. Reader repaired a false open-sector sign dictionary.

Verdict: accepted_repair. Defect ledger: f39-b18-def-sectorial-operator-with-the-semigroup-sign-convention. Risk review complete.

## lem-banach-valued-cauchy-theorem-on-star-shaped-domains

Proof 1.1 fixes the first suitable child in a finite order, so shrinking triangles require no extra selection. Their prescribed vertices converge to w0; differentiability controls the remainder uniformly only on these shrinking triangles. The affine primitive has zero triangle integral by the opened Banach FTC. The fan triangle conv{a,z,z+h} lies in U by star-shapedness, hence the primitive quotient tends to F(z). The contour chain rule is piecewise C1 and telescopes. CC is explicit for the integral interfaces. The reader-described fixed-triangle remainder estimate was invalid and is now replaced by the sound Goursat argument.

Verdict: accepted_repair. Defect ledger: f39-b18-lem-banach-valued-cauchy-theorem-on-star-shaped-domains. Risk review complete.

## lem-taylor-expansion-with-integral-remainder-for-banach-valued-curves

The opened Banach FTC assumes CC, now explicitly inherited. Integration by parts with scalar (t+h-s)^k/k! gives the correct negative derivative and boundary term; oriented integrals preserve it for h<0, while h=0 and n=0 give the FTC identity. Induction requires k<=n and C^{n+1}, as available. Complex curves use real differentiation. This is a supplier-choice-scope repair, with no altered Taylor formula.

Verdict: accepted_repair. Defect ledger: f39-b18-lem-taylor-expansion-with-integral-remainder-for-banach-valued-curves. Risk review complete.

## lem-contour-definition-of-an-analytic-semigroup

Current admissibility theta>pi/2+|arg z| gives strictly negative ray real parts, locally uniformly on nonempty compact subsets. The resolvent integrand is holomorphic on a star-shaped slit sector; closing truncated paths and killing outer arcs proves radius/angle independence. The derivative quotient has an integrable s exp(-cs) majorant; r=1/|z| gives uniform smaller-sector bounds. Schnaubelt Lemma 2.22, printed pp.58-59, independently supports the orientation and contour estimates. Reader corrected the title to holomorphic family rather than an unproved semigroup claim, and inherited DC. Adjudication additionally fixes Proof 2.1: the tail has two rays and hence needs 2M_epsilon, not M_epsilon. The convergence conclusion is unchanged; no Statement changed.

Verdict: amended_repair. Defect ledger: f39-b18-lem-contour-definition-of-an-analytic-semigroup. Risk review complete.

## thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions

The continuous filled quotient is holomorphic off z; cutting small corners and bounding their O(eta) edges gives zero triangle integrals even at z. The segment primitive and chain-rule FTC then give circle vanishing, without assuming quotient differentiability at z. The geometric kernel converges uniformly because |z-z0|<r; coefficient uniqueness is applied after translating to centre zero, meeting the real-centre supplier. Bounds at r prime>rho justify differentiated series and all Cauchy estimates, including n=0. CC is declared. Reader removed the false primitive-increment equality; current proof is sound with all local prerequisite proofs independently reviewed.

Verdict: accepted_repair. Defect ledger: f39-b18-thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions. Risk review complete.

## lem-cauchy-estimates-for-an-analytic-semigroup-give-generator-power-bounds

DC now discharges the CC Cauchy-integral supplier. Norm difference quotients and the generator definition give AT(t)=T prime(t); differentiating the semigroup identity gives each higher-power domain inclusion, without assuming powers are closed. The circle radius t sin(delta double-prime) has a strict larger margin R<t sin(delta prime), so Cauchy estimates apply to a closed disc inside the sector. All integers m>=1 and t>0 are covered; no vertex regularity is inferred.

Verdict: accepted_repair. Defect ledger: f39-b18-lem-cauchy-estimates-for-an-analytic-semigroup-give-generator-power-bounds. Risk review complete.

## lem-classical-parabolic-solution-at-time-zero-needs-the-compatibility-ax-plus-f-zero

The opened generator closedness theorem assumes DC, now explicitly inherited. Au(t)=u prime(t)-f(t) has a limit, and closedness gives x in D(A), Ax=y-f(0). The FTC yields the one-sided derivative at zero and both directions of the classicality iff. For the extra order, graph-C1 differentiates Au and graph convergence controls Aw; the extra domain hypothesis Ax+f(0) in D(A) is explicit. No stationarity Ax+f(0)=0 is asserted. Current classical-solution definition and Banach FTC clauses were opened.

Verdict: accepted_repair. Defect ledger: f39-b18-lem-classical-parabolic-solution-at-time-zero-needs-the-compatibility-ax-plus-f-zero. Risk review complete.

## lem-dunford-contour-construction-satisfies-the-semigroup-law

Two disjoint nested contours have theta1<theta2 and r2<r1; poles on Gamma2 are inside Gamma1, poles on Gamma1 outside Gamma2. The closed finite keyhole has index one at zero from the two arcs, hence throughout its connected interior, and index zero outside by radial escape and the opened winding-number theorems. Entire filled exponential quotients give the scalar residues. Positive contour separation and exponential decay justify the split double integrals; substituting leaves T(z1+z2). Dense D(A), the resolvent identity and r=1/|z| give the strong vertex limit. Reader filled the unstated winding calculation. Adjudication also corrects Proof 2.2 to count both ray contributions (2M_epsilon); no exported estimate or Statement is changed.

Verdict: amended_repair. Defect ledger: f39-b18-lem-dunford-contour-construction-satisfies-the-semigroup-law. Risk review complete.

## thm-analytic-semigroup-smoothing-estimates

Current differentiated contour integrals have s^{k-1}exp(-cst) bounds locally away from t=0. Riemann sums converge with their A-images since AR(lambda)=lambda R(lambda)-I; closedness then gives each domain inclusion recursively. Scalar entire integrands have zero closed integral and exponentially vanishing left closing arcs. r=1/t gives the stated C_m t^{-m} bound with a constant accounting for both rays and the arc. The contour semigroup supplier is independently reviewed; no generator-identification circularity is used. DC is the inherited supplier hypothesis now restored.

Verdict: accepted_repair. Defect ledger: f39-b18-thm-analytic-semigroup-smoothing-estimates. Risk review complete.

## cor-analytic-semigroups-are-operator-norm-differentiable-away-from-zero

Positive-time C-infinity and AT(t) follow from the fully reviewed contour smoothing theorem. For any C0 generator G, norm continuity at zero gives K_h=J_h/h with ||K_h-I||<1/2. The opened integrated-orbit identity gives range K_h subset D(G); its Neumann inverse forces D(G)=X and G=(T(h)-I)K_h^{-1}/h bounded. Thus the universal unbounded-generator exclusion is proved, not merely inferred from a heat witness. DC discharges the supplier assumptions; zero X causes no exception.

Verdict: accepted_repair. Defect ledger: f39-b18-cor-analytic-semigroups-are-operator-norm-differentiable-away-from-zero. Risk review complete.

## lem-analytic-duhamel-cancellation-removes-the-generator-singularity

The cutoff integrals factor through T(epsilon), and A-images are integrable with c1[f]_alpha sigma^{alpha-1}; alpha>0 is essential. Closedness gives v1 in D(A). Tails c0[f]_alpha epsilon^{1+alpha}/(1+alpha) and c1[f]_alpha epsilon^alpha/alpha converge uniformly on each positive compact time interval. Integrated orbits give Av2=(T(t)-I)f(t), continuous at zero; hence graph continuity and Au(t)->Ax. The complete Schnaubelt Theorem 2.31(b) proof on printed pp.70-71 was read independently. Reader supplied the missing uniform convergence. Refuter is correct: DC is a choice axiom and the old Statement claimed none; that final sentence now says no principle beyond DC. No forcing modulus stronger than continuity of Av is claimed.

Verdict: amended_repair. Defect ledger: f39-b18-lem-analytic-duhamel-cancellation-removes-the-generator-singularity. Risk review complete.

## lem-analytic-duhamel-cancellation-removes-the-generator-singularity

Refute-18 finding 1 is confirmed fatal in the authored choice-accounting claim: the Statement expressly assumes Dependent Choice yet concluded no choice principle is used. The opened def-dependent-choice calls it an axiom, and the integrated-orbit/commutation suppliers carry CC/DC. The repaired Statement now agrees with the final proof clause, no choice beyond DC; cancellation and all bounds were independently reviewed against Schnaubelt printed pp.70-71. The historical observed hash remains evidence of the old carrier, not a refutation of the corrected wording.

Verdict: confirmed_fatal. Defect ledger: f39-b18-lem-analytic-duhamel-cancellation-removes-the-generator-singularity. Risk review complete.

## lem-generator-of-the-contour-semigroup-is-the-sectorial-operator

The zero vertex and complex Banach space now explicitly match the contour construction. For x in D(A), contour commutation plus zero scalar contour integral gives T(h)x-x=int_0^h T(s)Ax ds, proving A subset B. The exponentially weighted orbit is integrated in graph norm on [eta,R]; endpoint terms and closedness yield its Laplace integral R(lambda,A)x. The opened Laplace theorem gives the same R(lambda,B); equal ranges give full domain equality, not just operator inclusion. The derivative of S(t-s)T(s)x vanishes on the dense domain and boundedness extends uniqueness. DC supplies the cited FTC/semigroup hypotheses.

Verdict: accepted_repair. Defect ledger: f39-b18-lem-generator-of-the-contour-semigroup-is-the-sectorial-operator. Risk review complete.

## thm-classical-regularity-for-holder-continuous-forcing-under-compatibility

The current Duhamel lemma gives graph continuity of v and Av; the opened variation-of-constants theorem is used only for the integral identity, not its C1-forcing upgrade. Integrating v in graph norm allows A outside the integral, and the FTC proves v prime=Av+f at both endpoints. x in D(A) makes the homogeneous orbit classical at zero. Subtracting Ax gives exactly (T(t)-I)(Ax+f(0))+R_f, with the stated alpha-tail bound. The orbit term precludes a modulus depending only on [f]_alpha; no false Au Holder claim remains. Full Schnaubelt proof printed pp.70-71 was checked, and DC now carries the current suppliers.

Verdict: accepted_repair. Defect ledger: f39-b18-thm-classical-regularity-for-holder-continuous-forcing-under-compatibility. Risk review complete.

## thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups

Every implication was checked independently: complex Laplace inversion and graph swapping give closed/dense generators; contour rotation identifies full rotated domains by equal resolvents; rotated half-planes cover the claimed sector with the cosine/sine lower bound. Uniform resolvent limits at is and Neumann perturbations give the wedge, including both signs of s. Condition (c) gives n-th power bounds (M1*n/t)^n, norm-C-infinity calculus and Taylor remainders, locally compatible real-centred series; the repaired identity theorem proves the locally-zero set closed through continuous derivatives. The extension semigroup law and strong vertex limit follow by identity continuation and approximation by T(h)x. M1=0 gives T=I, including zero X. All five conditions and the supremal-angle equalities are proved; no endpoint attainment is claimed. Schnaubelt Theorem 2.25 and Remark 2.26, complete printed pp.63-65, were read as corroboration. Reader repaired the formerly unjustified global identity-theorem inference.

Verdict: accepted_repair. Defect ledger: f39-b18-thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups. Risk review complete.

## cor-abstract-parabolic-smoothing

The current source hypothesis measures f and its derivatives in sum-of-powers graph norm, so every A^j f is continuous and g=A^{m-1}f is Holder (for m>=2 even Lipschitz). Riemann sums and A closedness successively commute A with the Duhamel integral up to m-1; the reviewed classical Holder theorem at datum zero adds the final A. Homogeneous smoothing handles every x at m=1; the explicit compatibility tower for m>=2 is stronger than needed but retained. Endpoint, empty tower and graph domains are well formed, and the displayed bound absorbs t<=b. Reader restored DC for the semigroup suppliers.

Verdict: accepted_repair. Defect ledger: f39-b18-cor-abstract-parabolic-smoothing. Risk review complete.

## rem-real-banach-spaces-require-complexification-for-analyticity

Complexification gives the rotation-supremum Banach norm and norm-preserving complex extension of every real-time bounded operator. Real analyticity is defined by a complex-time extension, while smaller-sector boundedness is an additional requirement. The unbounded generator has domain D(A) times D(A); closedness and density are coordinatewise. The bounded real spectrum reference is used only for the resolvent/spectrum convention, not its AC-dependent spectral-radius assertions. Reader repaired the conflation of analytic and bounded analytic extensions.

Verdict: accepted_repair. Defect ledger: f39-b18-rem-real-banach-spaces-require-complexification-for-analyticity. Risk review complete.

## cex-a-time-discontinuous-forcing-can-block-classical-regularity-at-its-jump

The explicit witness is C with identity semigroup, x=0 and f=1_[t0,b], 0<t0<b. Its integral has derivative zero on the left and one on the right, so it is Lipschitz but not differentiable at t0. The continuous-Dini paragraph is only a sufficient cancellation estimate and not a characterization of classicality; for this witness AT=0 and no singular kernel causes the failure. Reader repaired the ill-typed any-Banach scalar witness and excluded zero X from the optional vector extension. Actual Duhamel/classical consumer uses remain valid under DC.

Verdict: accepted_repair. Defect ledger: f39-b18-cex-a-time-discontinuous-forcing-can-block-classical-regularity-at-its-jump. Risk review complete.

## cex-sector-angle-changes-under-the-sign-convention

At vertex zero, scalar +1 puts spectrum in every required right sector, while -1 avoids Sigma_pi and satisfies |lambda+1|>=|lambda|sin(epsilon). This proves maximal angle pi/2 and real-time contractivity of exp(-t); sign reversal destroys boundedness. The implication refuted is witnessed by starting with the sectorial operator -1 and reversing to +1, so using the opposite symbol in the displayed witness does not invalidate the refutation. Reader correctly qualified the formerly unlocated sectoriality claim with vertex zero; positive shifts can make +1 sectorial.

Verdict: accepted_repair. Defect ledger: f39-b18-cex-sector-angle-changes-under-the-sign-convention. Risk review complete.

## cex-the-translation-semigroup-is-not-analytic

Strong continuity uses smooth density and isometry for 1<=p<infinity. The corrected test substitution gives the negative test derivative for f(x+h); Sobolev density and the shift inequality prove the converse generator-domain inclusion. The jump indicator cannot acquire a weak derivative after translation, while any norm-holomorphic positive-time extension forces its range into D(A), requiring no bounded-sector assertion. Explicit half-plane resolvents and dilated wave packets give spectrum iR, including xi=0. All current density, translation and weak-derivative suppliers were read. Reader repaired the sign substitution and inflated bounded-analytic citation. Adjudication also aligns the final choice accounting with the DC hypothesis and the DC characterization actually invoked.

Verdict: amended_repair. Defect ledger: f39-b18-cex-the-translation-semigroup-is-not-analytic. Risk review complete.

## lem-coercive-sectorial-form-resolvents-define-a-closed-m-sectorial-operator

The weak equation is a(u,v)=-(lambda u-f,v), so Au=lambda u-f and the inverse has the correct sign. The DC norm-comparison lemma gives c_a>0; coercivity beta_lambda=c_a min(1,Re(lambda)-M) and functional norm kappa||f|| make the opened CC Lax-Milgram applicable. A bounded resolvent yields closedness; D(A) perp={0} plus the newly cited CC double-orthogonal theorem gives density. The numerical-range lower bound, connected sector complement and open/closed surjectivity prove the full shifted resolvent region, with positive cos(theta+delta-epsilon). B=A-M generates bounded analytic S; multiplication by exp(Mz) gives precisely domain D(A), potentially growing T. Coercivity gives dissipativity of A+alpha/kappa^2 and Lumer-Phillips decay. Zero H has a positive arbitrary kappa and is covered. Reader repaired the form/operator sign and the unsupported density inference.

Verdict: accepted_repair. Defect ledger: f39-b18-lem-coercive-sectorial-form-resolvents-define-a-closed-m-sectorial-operator. Risk review complete.

## thm-self-adjoint-nonpositive-operators-generate-bounded-analytic-semigroups

Nonpositivity and Cauchy-Schwarz give a lower bound by dist(lambda,(-infinity,0]), so the range is closed. The opened adjoint kernel identity and self-adjointness make the perpendicular zero; the newly explicit CC double-orthogonal theorem converts this to full surjectivity. Resolvent bounds on Sigma_(pi-epsilon) and the reviewed characterization give angle pi/2. Hilbert dissipativity and positive-real surjectivity give contractivity by the opened DC Lumer-Phillips theorem; uniqueness identifies the analytic and contraction families. Zero H is harmless. Reader repaired the uncited closed-subspace conclusion; the stronger spectral theorem/AC is not invoked.

Verdict: accepted_repair. Defect ledger: f39-b18-thm-self-adjoint-nonpositive-operators-generate-bounded-analytic-semigroups. Risk review complete.

## cor-spectral-gap-gives-exponential-decay-of-a-self-adjoint-parabolic-semigroup

For B=A+lambda1 I, the adjoint definition proves full self-adjoint domain equality, and B is nonpositive. Rotating S along every angle |alpha|<pi/2 gives generator e^{i alpha}B by domain inclusion plus a common resolvent; its real quadratic dissipation makes S contractive throughout the sector. The exponential shift gives exactly generator A in both domain directions and e^{-lambda1 Re z} for all three signs of lambda1. Under AC, bounded spectral projections near each real resolvent point violate its inverse lower bound unless zero; the countable rational cover gives E(R\sigma(A))=0. Opened spectral/PVM domain and quadratic-norm clauses justify the integral upper bound, with zero H handled separately. Reader replaced the inflated spectral-carrier citation by this proof.

Verdict: accepted_repair. Defect ledger: f39-b18-cor-spectral-gap-gives-exponential-decay-of-a-self-adjoint-parabolic-semigroup. Risk review complete.

## ex-analytic-semigroup-generated-by-a-bounded-operator

The exponential and derivative series converge uniformly on bounded complex discs; the difference-quotient remainder is O(|h|), and absolute products plus the binomial formula give the complex semigroup law. The real restriction has generator A on all X; real spaces use canonical complexification. The bounded-analytic criterion retains both spectrum avoidance and the small-lambda resolvent bound. Jordan and scalar +1 witnesses are unbounded along the stated directions. Numerical-sector separation gives an inverse lower bound; surjectivity is open and closed in the connected complementary sector by uniform resolvent convergence, so it holds throughout. The criterion proves an angle at least theta, not exact angle. Reader repaired complex scalars on real X and the unsupported surjectivity inference.

Verdict: accepted_repair. Defect ledger: f39-b18-ex-analytic-semigroup-generated-by-a-bounded-operator. Risk review complete.

## ex-sectorial-multiplication-operator

Truncating f at |q|<=n gives a dense maximal domain. For g in D(A*) the test h_n=1_En(A*g-qg) is in L2 because ||h_n||<=||A*g||+n||g||, even on infinite measure; the adjoint identity forces qg=A*g. The inverse multiplier maps into D(A) since q/(lambda-q)=lambda/(lambda-q)-1. Sigma-finiteness provides a finite positive-measure subset for the essential-supremum norm lower bound. Real nonpositive q gives the sharp uniform distance bound and maximal allowed exponent pi/2; equality for a fixed q is not claimed. Strong continuity uses the 4|f|^2 majorant. Scalar Fubini against any L2 h has absolute bound ||f||||h||/lambda and identifies the Bochner Laplace integral and full generator domain. Reader repaired the infinite-measure L2 inference and invalid unqualified pointwise Tonelli invocation.

Verdict: accepted_repair. Defect ledger: f39-b18-ex-sectorial-multiplication-operator. Risk review complete.

## cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup

A=-L and adjoint domain equality give complex self-adjoint nonpositive A on every nonempty open domain, so the reviewed self-adjoint generation theorem gives angle pi/2 under DC/CC. Slab Poincare makes the Rayleigh infimum positive; AC is used only for bounded-domain compactness/eigenvalue attainment. The unbounded disjoint intervals of increasing lengths give a positive nonattained infimum. For n>=2, the actual H2 and higher-order suppliers require bounded C^{2m} boundaries and constant Laplacian coefficients meet all coefficient regularity; induction proves both directions of the iterated-domain description. In n=1, weak derivatives give the extra two derivatives directly. Reader restored DC. Adjudication qualifies Proof 5.1 by n>=2, avoiding its blanket boundary-regularity restriction contrary to the explicit one-dimensional proof. No Statement or actual consumer formula changed.

Verdict: amended_repair. Defect ledger: f39-b18-cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup. Risk review complete.

## rem-abstract-generator-domain-smoothing-becomes-spatial-regularity-only-after-domain-identification

Homogeneous analytic orbits enter all graph-power domains. Forced higher powers use exactly the corollary graph-valued C^{m-1,alpha} source hypothesis, not arbitrary X-valued forcing. The reviewed Dirichlet theorem supplies the concrete H2/H^{2m} identifications and iterated H0^1 conditions; the zero-boundary a-priori estimates are used, not the AC trace-lifting branch of the contextual caveat remark. The sequence-space reading is mathematical and claims no intrinsic spatial coordinates. Reader restored DC for its actual semigroup conclusions.

Verdict: accepted_repair. Defect ledger: f39-b18-rem-abstract-generator-domain-smoothing-becomes-spatial-regularity-only-after-domain-identification. Risk review complete.

## thm-form-generated-sectorial-elliptic-semigroups

The fully reviewed closed-form resolvent lemma applies with dense continuous V inclusion and positive kappa, including zero H. Under DC the form norm is equivalent to the given Hilbert norm. B=A-M is sectorial at zero; S is bounded analytic on every delta<pi/2-theta and exp(Mz)S has full generator A with potential exponential growth. Coercivity gives exp(-alpha t/kappa^2) along real time. The Dirichlet form has theta=M=0 and complete H1 form norm; uniqueness recovers the same heat flow. Reader repaired the norm-comparison justification and attribution of sector boundedness to the shifted S, preserving nonsymmetric forms and the lower-angle caveat.

Verdict: accepted_repair. Defect ledger: f39-b18-thm-form-generated-sectorial-elliptic-semigroups. Risk review complete.

## ex-analytic-dirichlet-heat-semigroup

The opened eigenbasis/form expansion under AC gives Au coefficients -lambda_j c_j; both directions of D(A) follow from form convergence and lambda_j>=lambda1>0. Coefficientwise exponentials give the contraction C0 semigroup; their finite partial sums have a common integrable e^{-lambda t}||g|| majorant for Bochner DCT, so the Laplace inverse and full generator domain equal A. Powers have discrete norm sup_j lambda_j^m exp(-lambda_j t), bounded by the continuous scalar supremum (m/(et))^m. Higher-order elliptic regularity descends from A^{m-1}v; every intermediate w_r lies in H0^1, and n=1 uses distributional derivatives even on arbitrary bounded open sets. Reader repaired the false sharp-discrete-supremum claim; AC is expressly inherited in the spectral branch.

Verdict: accepted_repair. Defect ledger: f39-b18-ex-analytic-dirichlet-heat-semigroup. Risk review complete.

## cex-an-analytic-semigroup-need-not-be-norm-continuous-at-zero

For each fixed t>0, the normalized Dirichlet eigenfunctions have ||(T(t)-I)e_j||=1-exp(-lambda_j t) tending to one as j->infinity, so the operator norm never tends to zero. The positive-time derivative and bounded-generator comparisons use the fully reviewed local suppliers. Reader carried DC, but current spectral suppliers additionally require AC for the eigenbasis: this assumption was still absent from the witness Statement. Adjudication now declares AC exactly for that branch and adds def-axiom-of-choice to deps/Given; no witness or analytic conclusion changes. Direct-reference search finds only its owned B-page, whose heat-witness prose stays valid.

Verdict: amended_repair. Defect ledger: f39-b18-cex-an-analytic-semigroup-need-not-be-norm-continuous-at-zero. Risk review complete.

## ex-abstract-smoothing-does-not-imply-a-spatial-derivative-without-a-pde-realisation

The opened given-basis Hilbert/ell2 theorem and explicit trigonometric basis require CC, supplied by DC. Finite-support vectors make D(A) dense; coordinate adjoint tests give maximal self-adjoint domain. Dominated series for both real semigroup continuity and generator quotients establish exactly A; reverse inclusion follows coordinatewise. Induction gives weighted domain n^{4m}, and the discrete scalar supremum is correctly <=(m/(et))^m, not equal. The vector 1/n lies in ell2 but not D(A), yet enters all domains at t>0. The model has no supplied spatial identification. Reader inherited DC; the repaired discrete-supremum inequality already appears in the current reader-post bytes and is independently sound.

Verdict: accepted_repair. Defect ledger: f39-b18-ex-abstract-smoothing-does-not-imply-a-spatial-derivative-without-a-pde-realisation. Risk review complete.

## ex-sectorial-nonselfadjoint-multiplication-generator

Countable rational-ball covers ensure q lies in its essential range a.e. Angular separation >=epsilon gives |lambda-q|>=|lambda|sin(epsilon), including q=0; every point of the open resolvent sector is covered by some smaller epsilon. Essential-range membership gives finite positive-measure tests with approximate eigenvectors and excludes a bounded inverse. AC is explicitly declared for choosing this family. The bounded exponential converges in essential supremum norm and acts on f as exp(zq)f; Re(zq)<=0 on Sigma_theta gives contractivity. On a positive-measure nonreal set a finite-measure indicator distinguishes M_q from M_conjugate(q), so the adjoint really differs. Reader repaired the omitted f and pointwise-versus-essential-supremum convergence; maximal angle is only at least theta.

Verdict: accepted_repair. Defect ledger: f39-b18-ex-sectorial-nonselfadjoint-multiplication-generator. Risk review complete.

## analytic-semigroups-and-linear-evolution-equations

Current A-page prose correctly describes the complex-analytic route, zero-vertex bounded analytic smoothing, self-adjoint contraction angle pi/2, and form generation on every sector narrower than pi/2-theta without claiming unshifted boundedness. Reader replaced the false necessary stationarity condition Ax+f(0)=0 by actual domain compatibility x in D(A) and endpoint derivative u prime(0)=Ax+f(0). The entire current A-page and contextual B-page were read against the reviewed carrier conclusions; placement lists preserve all item IDs. Page raw post hash is unchanged by this adjudication.

Verdict: accepted_repair. Defect ledger: f39-b18-analytic-semigroups-and-linear-evolution-equations. Risk review complete.

## Final sequence-index correction

`ex-abstract-smoothing-does-not-imply-a-spatial-derivative-without-a-pde-realisation` uses the explicit index set N_{>=1}. The library natural numbers contain zero, so unqualified ell2(N) made the 1/n witness undefined at zero and its exp(-t) estimate false on e_0. This surgical Statement/Proof correction preserves the intended positive-index model. Only the owned B-page references the item; its spatial-summary use remains valid. The risk review and manifest/contract are synchronized.

## Separate closed defect records

Independent defects are recorded separately, rather than folded into a single reader-repair verdict. The routed refuter decision references only its choice-accounting row. Touched decisions may additionally reference these distinct completed repairs:

- `f39-b18-title-lem-contour-definition-of-an-analytic-semigroup`: Reader corrected the title: the lemma proves a holomorphic contour family and estimates; the semigroup law and vertex continuity are supplied by the next lemma.
- `f39-b18-two-rays-lem-dunford-contour-construction-satisfies-the-semigroup-law`: Proof 2.2 had only M_epsilon multiplying the contribution from two rays. It now has 2M_epsilon; the unspecified C bound and Statement are unchanged.
- `f39-b18-uniform-tails-lem-analytic-duhamel-cancellation-removes-the-generator-singularity`: The reader-described inference from continuous cutoffs to continuity of their limit lacked uniform convergence. Proof 3.1 now bounds both graph-component tails uniformly on [a,b], a>0.
- `f39-b18-coefficient-centre-thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions`: The coefficient-uniqueness supplier requires a real centre. Proof 4.1 now applies it to translated power series centred at zero, even when z0 is complex.
- `f39-b18-analytic-scope-cex-the-translation-semigroup-is-not-analytic`: The original bounded-analytic power-bounds citation did not cover an arbitrary analytic extension. Proof 2.1 now uses the local norm derivative and generator definition directly.
- `f39-b18-choice-footer-cex-the-translation-semigroup-is-not-analytic`: Final Proof 3.1 invoked the DC characterization but credited only CC. It now states no choice principle beyond DC, while retaining CC for the Lp interfaces.
- `f39-b18-surjectivity-ex-analytic-semigroup-generated-by-a-bounded-operator`: Numerical-range separation gives a lower bound, not surjectivity alone. Current Proof 3.1 explicitly proves the surjectivity set open and closed by Neumann inversion and bounded resolvent limits.
- `f39-b18-resolvent-fact-ex-analytic-semigroup-generated-by-a-bounded-operator`: Reader replaced vocabulary-only references in L3 with the actual Neumann expansion and resolvent-holomorphy suppliers; both current clauses were independently read.
- `f39-b18-scalar-fubini-ex-sectorial-multiplication-operator`: The old global pointwise Tonelli assertion for an arbitrary L2 input was unjustified. Current Proof 4.1 integrates against an arbitrary L2 vector and uses absolutely integrable scalar Fubini with bound ||f||||h||/lambda.
- `f39-b18-choice-hypothesis-cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup`: Reader added DC for the invoked semigroup and generation suppliers; CC is retained for the elliptic interfaces and AC only for bounded-domain compactness/eigenvalue attainment.
- `f39-b18-positive-index-ex-abstract-smoothing-does-not-imply-a-spatial-derivative-without-a-pde-realisation`: The library N includes zero; ell2(N) conflicted with the 1/n witness and the exp(-t) bound on e0. The model now explicitly uses N_{>=1}, with the same intended diagonal weights and witness.
- `f39-b18-essential-norm-ex-sectorial-nonselfadjoint-multiplication-generator`: Reader specifies convergence of the scalar exponential series in essential supremum norm, as appropriate for an essentially bounded multiplier on L2; null-set values need not be pointwise uniformly bounded.
## Final dispositions and current evidence

This section supersedes review-time verdicts above where the final manifest synchronization changed a carrier. The decisions JSON is authoritative for the exact obligation list. There are 38 decisions: 1 accepted_repair, 34 amended_repair, 1 confirmed_fatal, 2 reviewed_no_defect. All 36 current items were reviewed in the generated dependency order; the single routed page was reviewed separately. Both unchanged item bodies are audit enrichment (no invented mathematical defect). All completed repair decisions have repair_confidence=1. Each distinct confirmed defect has its own closed 5a-adjudicate ledger row, including the twelve separated defects listed above; flagged:18:1 references exactly its choice-accounting row.

The owning manifest now mirrors current statements, dependencies, provenance, sources and authored arguments for all 36 items. The raw item hash equality with reader post was established before adjudication; the seven actual item amendments are listed below. A material old judge record was not reused; every changed carrier has no verification.judge. No engine state, stage, decision hash, judge stamp or gate result was written.

| Obligation | Final verdict | Pre / reader-post raw item bytes | Current raw SHA-256 |
|---|---|---|---|
| `touched:18:lem-power-series-coefficients-are-determined-by-real-values` | amended_repair | changed | `0f062e9fd245dac33ea0092b19fdf17c2c521758fd9a07b36d05e85e787165ae` |
| `touched:18:def-closed-sectorial-form-and-its-associated-operator` | amended_repair | changed | `1b4484b9d6f599dda9d911dd7821b201133e8041a9914f17c72c24ab8a7d742e` |
| `touched:18:lem-resolvent-identity-and-holomorphy-for-closed-operators` | reviewed_no_defect | same | `7be757603d99bdd1beb01208c93f4d497111ea05fad643e6cccf5e6db3ff118c` |
| `touched:18:def-complex-sector-and-bounded-analytic-semigroup` | amended_repair | changed | `078aa19ecc772b21e353caa4a609ff661306a22667b8eb64b0c57a7cf1d577b9` |
| `touched:18:lem-sectorial-form-angle-controls-the-numerical-range-of-its-operator` | reviewed_no_defect | same | `6500e943d80e49d59aa813767a1240ada5e53fc60768c5bd5ef1615dc5203401` |
| `touched:18:def-sectorial-operator-with-the-semigroup-sign-convention` | amended_repair | changed | `f50c9a1fd59076c2219ebf1a9a44834b4db714a497aabe9ad2a0ae081a9931ad` |
| `touched:18:lem-banach-valued-cauchy-theorem-on-star-shaped-domains` | amended_repair | changed | `2685c0235e40fdc674ae9c7ef677a07037d4923d43bd619e74aaec6d726c7832` |
| `touched:18:lem-taylor-expansion-with-integral-remainder-for-banach-valued-curves` | amended_repair | changed | `543334298dae176348f37bd7d5df53d9714d0a1ca489b21ecc268182587a4576` |
| `touched:18:lem-contour-definition-of-an-analytic-semigroup` | amended_repair | changed | `931d97ec1c9601633300d6327b64017a33763dca1e610e12d63b1c4645120a5c` |
| `touched:18:thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions` | amended_repair | changed | `f1d006805bf78558add10505ea1922ff6433f23132eae21e3377fa003fceda12` |
| `touched:18:lem-cauchy-estimates-for-an-analytic-semigroup-give-generator-power-bounds` | amended_repair | changed | `8f75e6c70355fa7a486d4a4e8bcdc792219d2c3b0be761b4be1e05aee47dd86b` |
| `touched:18:lem-classical-parabolic-solution-at-time-zero-needs-the-compatibility-ax-plus-f-zero` | amended_repair | changed | `d8d1b47578282dba8476c1b172882e909e17649d9ba300875edf6218fefc38e5` |
| `touched:18:lem-dunford-contour-construction-satisfies-the-semigroup-law` | amended_repair | changed | `9f524ea3bd910e60f0fb98019e24cd63109193d6a73e54d9d1140ab9569f56b5` |
| `touched:18:thm-analytic-semigroup-smoothing-estimates` | amended_repair | changed | `b3ada16d25f00dd1884753b9b8083fdab13d9f442f21a4c92684a367fadc2094` |
| `touched:18:cor-analytic-semigroups-are-operator-norm-differentiable-away-from-zero` | amended_repair | changed | `dae41aa8ecd58a11e89b55049a05cb7585549dd933fdef9663d680739923cad5` |
| `touched:18:lem-analytic-duhamel-cancellation-removes-the-generator-singularity` | amended_repair | changed | `f29da71b9beabe516ef40c04bca37b457a92f73b70503966bdfa18de9a3cf725` |
| `touched:18:lem-generator-of-the-contour-semigroup-is-the-sectorial-operator` | amended_repair | changed | `cda5ae1ef057aeb10739517032001f4171c91d03e3479941a360234ce7f691c0` |
| `touched:18:thm-classical-regularity-for-holder-continuous-forcing-under-compatibility` | amended_repair | changed | `f16f3a9475ecb0f8c004107f39d510409efdeb404b24771beac8a223a31e101d` |
| `touched:18:thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups` | amended_repair | changed | `bea1c2ed39ec13a5b47531941d6241da87eeb098c7f00702deb908a61255d9b5` |
| `touched:18:cor-abstract-parabolic-smoothing` | amended_repair | changed | `ac61681af9b18a02464bdc35a5d6f71f7a84e3b6bbf174fb4178154265060c02` |
| `touched:18:rem-real-banach-spaces-require-complexification-for-analyticity` | amended_repair | changed | `895e5c0fe36d126eb6aeabc1e91ce87e55e122e8d77bdeceb3d61a204a048a44` |
| `touched:18:cex-a-time-discontinuous-forcing-can-block-classical-regularity-at-its-jump` | amended_repair | changed | `64e533253fd16db54c0898c4412b7d2872b67897c1891c200afc9df36671544e` |
| `touched:18:cex-sector-angle-changes-under-the-sign-convention` | amended_repair | changed | `fc8df23d2da094dbe809324571f85a59ed072fb37841eded20622a70bde457a7` |
| `touched:18:cex-the-translation-semigroup-is-not-analytic` | amended_repair | changed | `c3cb87d362d69c1fe11a7053476f5801ebe5a4d1a78b8a859085e6af56a5a0df` |
| `touched:18:lem-coercive-sectorial-form-resolvents-define-a-closed-m-sectorial-operator` | amended_repair | changed | `2c1e1799e4ae34ddb453b17012ee89f95ac50b5d51adc00447c39c0ae0fe7d99` |
| `touched:18:thm-self-adjoint-nonpositive-operators-generate-bounded-analytic-semigroups` | amended_repair | changed | `43929617e60fc0046f327247db4d894e1ea2fa51461ea6ea54d90de76acafadd` |
| `touched:18:cor-spectral-gap-gives-exponential-decay-of-a-self-adjoint-parabolic-semigroup` | amended_repair | changed | `ef56d844408f2821c32fa602680cc1a14ad2ed6585f212f715284edd300e55a4` |
| `touched:18:ex-analytic-semigroup-generated-by-a-bounded-operator` | amended_repair | changed | `2f0027bfe1b1ddb5423ed3bd10ac3a40b923a1fb77af41edd8942065a17bef0a` |
| `touched:18:ex-sectorial-multiplication-operator` | amended_repair | changed | `e0453920d98aef6b7b36302984d0e613e10b88bef270ce49231323c30ff9a601` |
| `touched:18:cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup` | amended_repair | changed | `dfb6148e5d75b44eaad5d8b37b0929d6cb88ab3fe2a70e49e4e2101e6499a504` |
| `touched:18:rem-abstract-generator-domain-smoothing-becomes-spatial-regularity-only-after-domain-identification` | amended_repair | changed | `75e6cb946dae53558de868b5a94cf0bc975ca5353cc49a6d118e5983b9fcdcac` |
| `touched:18:thm-form-generated-sectorial-elliptic-semigroups` | amended_repair | changed | `7a5089fb0b5a0951f63974340ffc25ab2514ff1e348c8726bb8cbfcea6231651` |
| `touched:18:ex-analytic-dirichlet-heat-semigroup` | amended_repair | changed | `e7cc23c0499f05a05c3ec512cc66aff7269432807caef045fdbd226a61dbdfe5` |
| `touched:18:cex-an-analytic-semigroup-need-not-be-norm-continuous-at-zero` | amended_repair | changed | `0e5863a0a66e90392149459d6358c1c2fac87f1cc99ad9b0af2b391ce6f14eb8` |
| `touched:18:ex-abstract-smoothing-does-not-imply-a-spatial-derivative-without-a-pde-realisation` | amended_repair | changed | `94c3d5c9b2f12dfd8273e8d96ccd075463d4366d434575b0411fafe09fb8bc97` |
| `touched:18:ex-sectorial-nonselfadjoint-multiplication-generator` | amended_repair | changed | `0d511c63fb5157d27a6ee06a20b303ccecda77d1a9d4a9d4814e12f2505665cc` |

These are raw evidence fingerprints, not engine-sealed carrier or decision hashes. The immutable pre/post snapshots are preserved unchanged. Historical repair descriptions are drawn from the reader report and the exact snapshot deltas; no unavailable full historical preimage is represented as having been opened, and no corrected current bytes are presented as an old defective observation. There is no unbound in-run-dependency finding in this dispatch, no inherited historical escalation, and no current-content-review owner resolution was invented.

## Sources and prerequisite-use scope

Primary authority opened online and read from the corresponding complete 118-page PDF: [Roland Schnaubelt, Evolution Equations, March 19, 2026](https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf). The complete relevant sections read here are printed pp.56-59 (Definition 2.18, Examples 2.19-2.21, formulas (2.14)-(2.17), Lemma 2.22 and its proof), pp.63-65 (Definition 2.24, full Theorem 2.25 argument and Remark 2.26), p.66 (Corollaries 2.28-2.29 and their proofs), and pp.70-71 (Theorem 2.31, Remark 2.32 and full cancellation proof). The library sectorial exponent is the source resolvent half-angle minus pi/2. The source excludes zero Banach spaces globally; the local zero-space cases were instead checked directly. The local proofs use norm estimates and DC/CC where required, rather than the source dual-separation/Hahn-Banach route. No complete reading of Engel-Nagel, Teschl or all bibliography entries is claimed.

Current supplier sections were opened from the item files, not accepted from contract quotations alone. Actual uses include Banach FTC and Bochner integrals under CC; semigroup commutation, closedness, Laplace inversion, variation of constants and Lumer-Phillips under DC; adjoint and double-orthogonal-complement clauses under CC; the spectral PVM theorem under AC only for the spectral branch; given-basis ell2 identification under CC; and Dirichlet self-adjointness and H2/higher regularity under their exact open/bounded/C^k/coefficient hypotheses. No recursive audit of every supplier proof is claimed. All external prerequisites used in facts or derivations were checked at their current exported interfaces; the authored owned arguments were read completely. Removed cross-batch edges are retained for disposition, not newly certified as suppliers.

## Consumers, published findings, and Step 5b

A scan of current frontmatter deps/justified_by and body references found no outside-batch direct item consumers of the 36 owned IDs. Both page bodies were read; the AC heat witness and positive-index sequence amendments have only the owned B-page as reference consumer, and its summaries remain sound. The Duhamel choice amendment is used only by the owned Holder theorem, time-jump example and A-page; their actual uses already assume DC. No published content was edited and no defective published supplier or consumer was confirmed, so no published-ledger write or lock was required. The owned cross-batch input preserves 123 records (11 removed, 112 verified), stable IDs and all proposed withdrawals, with current supplier raw fingerprints and per-edge review evidence appended. The unified frontier ledger has a batch-18 entry. Step 5b must independently reconcile computed obligations and close both impact windows; neither is claimed closed here.

## Local checks and owner/engine alert

- Reflow on the seven actual changed items: unchanged canonical layouts, exit 0.
- Explicit seven-item precheck: 7 checked, 0 failing, exit 0.
- Strict batch proof-contract check after refreshing current resolvent and Duhamel quotes: 36/36, 0 errors, exit 0. One nonfatal broad-bracket warning at contour Proof 1.2 remains; all four cited facts are used there. The initial nine stale-quote diagnostics were mechanical evidence drift, corrected without defect rows.
- Batch risk report ran before review and again with --require-reviewed: 36 items, all 35 HIGH/CRITICAL reviews complete, 0 errors, exit 0. The moderate numerical-range lemma was also independently reviewed.
- Scoped rendercheck on 36 items and both pages: 38 files, actual renderer YAML and KaTeX parse, exit 0.
- Required final batched proof-layout on all seven changed item paths: 7 items, 49 steps, 0 defects, exit 0; no later item edit or formatter.
- Exact obligation coverage checked: 38/38, no duplicates; flagged decision has exactly one closed row.
- Batch-owned ledger validation: 47 rows, 0 errors, exit 0.

**Owner/engine alert outside this dispatch:** full-run defect-ledger validation returns exit 1 with 14 schema errors in seven batch-1 rows: f39-b1-compact-increment-domain, f39-b1-coordinate-typing, f39-b1-strong-coordinate-typing, and f39-b1-speck-locator-{def-duhamel-heat-potential,thm-duhamel-principle-for-the-whole-space-heat-equation,thm-inhomogeneous-heat-cauchy-formula,ex-duhamel-solution-for-a-time-independent-source}. Their subclass and location values are outside the current closed enums. Batch 1 / the engine owns those records; they were not altered. This mechanical failure is not a mathematical defect row or a cleared run gate. No batch-18 mathematical blocker remains.
