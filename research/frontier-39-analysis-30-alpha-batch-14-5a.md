# Batch 14 Step 5a adjudication

Run: `frontier-39-analysis-30`; group: `batch-14`. Review completed in generated dependency order. Scope: 29 touched items, one page, two flagged findings, and the required risks of two untouched suppliers. No judgment or engine stamp is issued.

Evidence: the current item bytes initially all match the post-reader item hashes. Pre/post snapshots distinguish changes but contain fingerprints, not full historical proofs; the pre-review batch manifest supplied original statement mirrors (now synchronized to current content) and the reader report describes its edits. Claims of accepted repairs below are based on independently reviewed current arguments, the original statements, and these explicit edit descriptions.

## `lem-geometric-oscillation-decay-implies-a-holder-modulus`

Reviewed all six steps and real-power/Hölder definitions. Midpoint balls of radius at most R/2 remain compactly inside B_R because the midpoint lies strictly inside B_R/2. Maximal k gives 2^(-k)<4d/R; the large-distance case and the smaller-exponent clause cover d>=R/4. Zero oscillation and x=y are covered. Finite oscillation guarantees finite real bounds. No choice use or item change; pre/post hashes agree.

Disposition: risk review only; no routed decision. Next: continue generated dependency order.

## `lem-nonlinear-geometric-iteration-sequence-converges-to-zero`

Reviewed all three steps and the real-power and geometric-null suppliers. The induction multiplier is (C Y0^delta/lambda)2^(-j)<=1, including threshold equality, B=1 and Y0=0 without division by Y0. Both smallness formulations are equivalent by positive powers; increasing bounded partial sums give summability. No item change; pre/post hashes agree.

Disposition: risk review only; no routed decision. Next: continue generated dependency order.

## `def-weak-subsolution-and-supersolution-of-a-divergence-form-equation`

Independently checked the real order, sesquilinear convention, continuous H-minus-one functional, positive-cone density, signed essential extrema and trace interfaces. The summable Chebyshev subsequence and DCT use Du=0 on the zero level; compact-support nonnegative mollification supplies admissible smooth approximants. L1-local sources are paired only with compact smooth tests; extension requires continuity. The planar finite-q embedding uses a bounded C1 extension domain. Boundary constant and two-function inequalities are distinguished. Reader additions are sound and preserve the original contract; current bytes match post snapshot. Manifest dependency enrichment (DCT/Chebyshev and positive-part/local-mollification suppliers) will be synchronized within this batch.

Disposition: amended_repair. Defect references: `f39-b14-positive-cone-density`, `f39-b14-signed-extrema`, `f39-b14-boundary-constant`.

## `lem-positive-part-is-an-admissible-weak-test-by-truncation`

Checked all seven steps against the current chain-rule, level-set calculus, compact extension, density, ACL reconstruction and boundary-definition interfaces. Arbitrary k is only locally H1 on an infinite-measure domain; the precise global L2 condition and favourable signs are retained. Cutoff support lies in a bounded interior neighborhood, yielding H1-zero membership. W1-infinity multipliers are locally W1,2, so the finite-p ACL supplier applies. Nonnegative tests require a continuous source pairing. Both trace-membership directions are definitional. Current bytes match post snapshot; carrier mathematics is sound.

Disposition: reviewed_no_defect. Defect references: none; metadata normalization.

## `lem-caccioppoli-inequality-for-truncated-subsolutions`

Reviewed three steps and the cutoff, Young, Holder and admissibility suppliers. Symmetry and theta I<=A<=M_a^2 I justify matrix Cauchy-Schwarz: cross term <=2 M_a S ||u_k Deta||2. Young with half S squared gives exactly 4 M_a^2/theta and 2/theta. Local L2 forcing makes the compact-support pairing continuous. Arbitrary k uses local H1 only; no division by energy, and f-positive replacement preserves inequality. Concentric bump gradient bound yields the stated uniform radius factor. Current bytes match post snapshot; no residual defect.

Disposition: reviewed_no_defect. Defect references: none; metadata normalization.

## `lem-positive-part-of-a-zero-trace-function-has-zero-trace`

Reviewed the complete four-step proof, F4 subsequence proof, smooth-boundary density, bounded trace and trace-kernel supplier. Every subsequence admits an a.e.-convergent further subsequence by summable Chebyshev estimates. Gradient vanishes at the zero level, so DCT proves the positive-part H1 limit and the subsequence contradiction gives full convergence. Trace continuity then gives T(w-positive)=(Tw)-positive. Both iff directions and all finite levels k follow; the boundary supremum includes unbounded-above traces. On a nonempty C1 boundary, finite-a.e. L2 trace excludes negative-infinite supremum. Reader repair is sound; current bytes match post snapshot.

Disposition: amended_repair. Defect references: `f39-b16-trace-subsequence`.

## `lem-sobolev-level-set-iteration-step`

Checked all seven steps, Sobolev exponents, Poincare, cutoffs and the current supplier interfaces. Holder gives measure exponent 2/n or delta; Chebyshev gives level power -4/n or -2delta. Applying the energy estimate at levels 0<h and then Chebyshev at k-h proves the measure clause. The planar radius factor is R^(4/kappa)=R^(2-2delta). The cutoff support is inside B_rho, so the Chebyshev bound used over B_R also bounds B_rho despite the step displaying B_r first. Removed undefined theta and M_a from C(n,theta,M_a,C0): the assumed abstract energy constant C0 is the only coefficient datum, and the proof already proves C(n,C0). Direct uses are confined to local boundedness and oscillation reduction within batch 14; neither relies on independent theta/M_a parameters beyond its own C0. No weakening or additional premise.

Disposition: amended_repair. Defect references: `f39-b14-abstract-energy-constant`.

## `thm-weak-maximum-principle-for-coercive-divergence-form-equations`

Reviewed all four steps including the complete forcing recursion, trace reverse bound and signed lower-order tests. Smooth squared approximants converge in W1,1, so the c-div(b)>=0 distribution condition applies to w^2 without demanding H1 regularity of that square. The quadratic decomposition and t>=0 use c>=0. For forcing, beta=1+4/n-2/q>1; in n=2 choose kappa>2q-prime. Z=Y/T^2 leaves prefactor proportional to a^2/T^2 and the explicit T choice meets both threshold conditions. Zero forcing and zero gradients are separated. The planar p=2kappa/(kappa+2) Sobolev derivation gives volume-only constants. The equality case uses trace monotonicity, including infinite boundary supremum, and b=c=0 allows signed shifts. Reader repairs are sound; current bytes initially matched post snapshot.

Disposition: accepted_repair. Defect references: `f39-b14-maximum-volume-constant`, `f39-b14-maximum-equality`.

## `cor-weak-comparison-and-uniqueness`

Checked all four steps against the real form, current maximum principle, trace and Dirichlet interfaces. Subtracting inequalities with identical f cancels even when f is only locally L1, leaving the homogeneous continuous-test inequality. The trace of W-positive is zero; applying the maximum bound gives W<=0. Forcing has b=0 and q>n/2 (hence q>1 in n=2). Equality of traces licenses comparison in both directions. Original/post differences are dependency-level metadata; no reader body edit is listed.

Disposition: reviewed_no_defect. Defect references: none; metadata normalization.

## `thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions`

Reviewed all seven steps and truncation/chain-rule, level-step, geometric-iteration, Young, MCT and Holder interfaces. Convex Lipschitz power truncations are nonnegative subsolutions by the chain/product calculation; smoothing passes using the zero-gradient level clause. Dyadic energy has factor R^(-n delta) and Z=R^(-n)T^(-2)Y cancels both scales. Zero energy is covered. The finite interior cover gives explicit radius-gap dependence. For p>=2 use the already-proved p=2 estimate then MCT; for 0<p<2 the outer limiting radius stays strictly below R, so M_j are uniformly finite and epsilon absorbs the growing gap constants. The resulting constant correctly depends on p. The level-step amendment C(n,C0) matches F3 exactly; no consumer body correction is needed. Pre/post carrier change is metadata; no reader body edit is listed.

Disposition: reviewed_no_defect. Defect references: none; metadata normalization.

## `cex-weak-maximum-principle-needs-the-zero-order-sign`

Checked the full radial witness and four verification steps. The even power series makes sin(r)/r smooth at zero; in dimension three the radial Laplacian is -u. It is positive inside B_pi and has zero trace, hence is H1-zero and a weak solution. Its essential supremum is one by continuity at zero. With b=0,c=-1 the actual theorem sign functional is integral(c zeta+b.Dzeta)=-integral(zeta)<0. The reader corrected the sign in the cited functional; the computed obstruction is unchanged and sound.

Disposition: accepted_repair. Defect references: `f39-b14-counterexample-sign-functional`.

## `ex-weak-and-classical-maximum-principles-agree-for-smooth-solutions`

Checked the polynomial, three verification steps and exact Laplacian/classical-to-weak/Gauss-Green suppliers. In the two-dimensional unit ball, Delta(|x|^2-1)=4 and the zero trace gives H1-zero. Integration by parts against nonnegative Sobolev tests gives -4 integral(v)<=0. Maximum principles give the upper bound, and boundary-approaching polynomial values plus continuity give the reverse essential bound. Reader addition is the necessary explicit equality justification; no statement change is needed.

Disposition: accepted_repair. Defect references: `f39-b14-polynomial-supremum-equality`.

## `lem-de-giorgi-oscillation-reduction`

Independently checked six steps and Velichkov Lemmas 9-12 (printed pp.3-7) against current arguments. The polar-kernel bound holds on the convex ball; strong H1 approximation plus Fatou and widened levels handles endpoint sets. In B_s with volume 3/4 of B1, the low set has fraction at least 1/3; the level gap cancels the (1-Tk) energy factor. Telescoping gives N^(-n/(2n-2)) measure, and the L2 bound yields a universal drop. Applying to -v covers the other dichotomy and zero oscillation is immediate. Refuter 14:2 is confirmed nonfatal: claim 1 needs no doubled ball, whereas old step 1.1 defined v on B2 before restricting scope. Amended 1.1 to prove the disjoint-set dichotomy for arbitrary interior B_R first, then explicitly assume B_2R for quantitative normalization. F2 supplies subsolution truncations used for initial local boundedness. No Statement change; only the proof is corrected. The level-step constant correction is compatible with F2.

Disposition: amended_repair. Defect references: `f39-b14-oscillation-extrema-citation`, `f39-b14-oscillation-ball-scope`.

## `lem-logarithmic-caccioppoli-estimate-for-positive-supersolutions`

Checked all three steps, reciprocal/chain-rule, compact cutoff, stability and MCT interfaces. Positive u and fixed epsilon give a globally Lipschitz reciprocal extension; eta-squared times it is a nonnegative H1-zero test even when eta changes sign. Matrix Cauchy-Schwarz gives C^2<=2 M_a B C; the zero-energy branch avoids division by zero. The logarithm uses the Lipschitz extension log(max(t,0)+epsilon), with derivative Du/(u+epsilon). Ellipticity gives exactly 4 M_a^2/theta. Monotone limiting on the ball requires positivity but no uniform positive lower bound. Reader changed only the inaccurate Simon locator to Lecture 17 general remark (a) and Lemma 4 display (1), printed pp.206-207; mathematical derivation is sound.

Disposition: amended_repair. Defect references: `f39-b14-log-source-locator`.

## `thm-de-giorgi-local-boundedness-with-scale-correct-forcing-term`

Reviewed the complete three-step barrier proof, its positive-part and positive-cone density derivations, and all 34 supplier interfaces. The newly cited Hilbert theorem plus closed linear H1-zero subspace supplies the premise of Lax-Milgram; coercivity is theta/(1+CP^2). q>n/2 places q-prime in the dual Sobolev range. Solving L0h=g-positive gives h>=0 and an upper bound by the maximum principle; (U-h)-positive is a homogeneous subsolution below U. Inner outer radius s=(1+rho)/2 leaves a strict margin. Zero positive forcing is separated before normalization; scaling g=R^2f yields R^(2-n/q). Reader Hilbert repair is sound; current bytes match post snapshot. No statement narrowing or consumer repair.

Disposition: amended_repair. Defect references: `f39-b14-boundedness-hilbert-premise`.

## `lem-moser-iteration-for-positive-supersolutions`

Reviewed all five long steps, 26 declared supplier interfaces and Simon Lecture 17 pp.205-209 (general remarks (a),(b), Lemmas 3-4 and full exponent-transition argument). Current proof supplies its own dyadic argument. U=u+epsilon makes every negative-power test Lipschitz and admissible; matrix-energy absorption has factor 4 M_a^2/(p+1)^2 and transformed gradient factor p^2/(p+1)^2<=1. Sobolev iteration multiplies a convergent sum (1+j)kappa^(-j) and norm limits on the fixed inner ball. Logarithmic energy plus ball Poincare bounds each dyadic mean oscillation uniformly. Maximal bad cubes are disjoint, parent means bound jumps by 2^n A, and each generation contracts measure by 2K/A. Layer cake gives factorial moments; j! cancels exactly in the exponential series. Fixed cube size bounds their means by the L2 log estimate. Capping p0 at one supplies u+1 for DCT, while MCT handles reciprocal moments and shows the seed negative moment finite. Arbitrary p allows infinite reciprocal moments with inverse value zero. Reader corrections preserve the complete claim and are sound; no prerequisite remains unmet.

Disposition: amended_repair. Defect references: `f39-b14-moser-planar-sobolev`, `f39-b14-moser-dyadic-differentiation`, `f39-b14-moser-stopping-cubes`, `f39-b14-moser-factorial-bound`, `f39-b14-moser-positive-moment-limit`, `f39-b14-moser-source-attribution`.

## `thm-de-giorgi-nash-interior-holder-regularity`

Reviewed all six steps and the current oscillation, boundedness, Lebesgue-point, complete-real-target and dense-extension suppliers. Doubled-ball reduction begins at outer radius R/2, so every step has its required margin; the loss is the explicit 4^alpha0 factor. Midpoint comparison is replaced by centered B_2d(x) with both points inside; averages converge to Lebesgue values. Zero extension places u in the whole-space L1-local supplier domain. On each smaller ball the Holder bound gives uniform continuity and real completeness gives the extension; overlaps agree on a dense set. B_3R/4 oscillation is bounded by L2 means on B_R; exponent cap and smaller exponents give the stated scale. Unique continuous representatives agree everywhere. Reader localization/completeness and scalar-scope repairs are sound.

Disposition: amended_repair. Defect references: `f39-b14-holder-whole-space-localization`, `f39-b14-holder-complete-target`, `f39-b14-holder-scalar-scope`.

## `ex-oscillation-decay-implies-a-holder-modulus`

Reviewed both steps against the geometric modulus lemma and corrected doubled-ball oscillation interface. The two inputs are independently assumed ratios, not asserted universal ellipticity constants. theta=1/2 gives alpha0=1, capped alpha=1/2 and 4^alpha=2; theta=2^(-1/3) gives alpha=1/3 and 4^(1/3). Reader correctly adds the reserved interior margin before any analogous PDE dyadic conversion. No further hypothesis is silently supplied by the PDE lemma.

Disposition: accepted_repair. Defect references: `f39-b14-example-interior-margin`.

## `rem-scalar-de-giorgi-theory-does-not-transfer-verbatim-to-systems`

Reviewed the entire remark and the exact scalar theorem, and Velichkov Theorem 1, p.1. It says only that system ellipticity does not check the scalar equation satisfied by each component; it asserts no unproved system counterexample. Decoupled components may satisfy the scalar hypotheses. Reader lists no body repair; the changed carrier is metadata.

Disposition: reviewed_no_defect. Defect references: none; metadata normalization.

## `thm-weak-harnack-inequality-for-nonnegative-supersolutions`

Reviewed six steps, all supplier interfaces and Simon Lecture 17 pp.205-209. The Lax-Milgram barrier solves L0h=F-positive, has 0<=h<=C||F||q and is added: w=u+h is a homogeneous supersolution. Closed H1-zero is Hilbert by the current explicit supplier. The B7/4 seed comparison yields B21/16, and inverse-moment ratio 8/21 gives B1/2 exactly. Input s<1 produces gradient factor M_a^2 s^2/((1-s)^2 theta); finite transitions reach every p<kappa-star with final input p/kappa-star<1. In n=2 finite Sobolev exponents give all finite p. The cutoff-local Sobolev majorant justifies DCT, including p<1. Added the missing DCT dependency and exact fact link; the mathematical proof and Statement are unchanged. Zero infimum and zero forcing are handled by regularization/barrier. The doubled-ball margin and source scaling R^(2-n/q) are correct. Reader Hilbert, sign-prose and bibliography repairs are accepted; added dependency is metadata only.

Disposition: amended_repair. Defect references: `f39-b14-weak-harnack-hilbert`, `f39-b14-weak-harnack-barrier-prose`, `f39-b14-weak-harnack-ball-locator`.

## `ex-measurable-coefficients-with-a-holder-regular-weak-solution`

Checked all three steps, actual chain-rule/weak-derivative/formulation suppliers and the complete explicit witness. Interface r=1/2 is now defined by the inner branch; both limits equal -log2. The scalar radial profile G is globally 4-Lipschitz and composition gives the piecewise weak gradient. Multiplying by a=1 or 4 gives the same smooth flux x/|x|^2 a.e.; in dimension two its divergence is zero. Compact smooth integration by parts plus L2 density justifies all H1-zero tests. One-sided derivatives are 2 and 1/2, refuting C1 while preserving global Lipschitz continuity on the annulus. Reader witness and weak-testing repairs are sound.

Disposition: amended_repair. Defect references: `f39-b14-annulus-interface`, `f39-b14-annulus-weak-gradient`, `f39-b14-annulus-weak-tests`.

## `lem-zero-set-propagation-for-a-nonnegative-holder-weak-solution`

Checked three steps against weak Harnack, continuous-representative, connectedness and signed-extrema interfaces. For n>=3, p=1 lies strictly below n/(n-2); taking F=0 gives integral(u)<=C ess-inf(u)=0 at any continuous zero. Nonnegative integrand implies zero a.e. on the ball, and continuity upgrades to zero everywhere there. Repeat at each zero to make Z open; continuity makes Z closed and the given zero makes it nonempty. For a representative merely continuous at one point, its arbitrarily small positive bounds on positive-measure neighborhoods imply ess-inf=0 and only the local conclusion follows. Reader fixes the source attribution to Simon p.211 local Harnack, with zero-set deduction identified as the local argument. No unresolved published or external supplier defect.

Disposition: amended_repair. Defect references: `f39-b14-zero-set-source-locator`.

## `rem-weak-harnack-exponent-has-a-coefficient-and-dimension-dependent-upper-range`

Reviewed the complete remark against the current weak-Harnack proof and Simon Theorem 2 and its completed exponent transition, pp.205-209. The upper endpoint n/(n-2) is dimension-only; the seed and constants depend on coefficients. It records an open endpoint in n>=3 and all finite positive exponents in n=2, without claiming endpoint validity. Reader lists no body repair; the carrier change is metadata.

Disposition: reviewed_no_defect. Defect references: none; metadata normalization.

## `thm-harnack-inequality-for-nonnegative-weak-solutions`

Reviewed all three steps and current forcing-boundedness, weak-Harnack and Moser interfaces, with Simon Lecture 18 Theorem 1 and full local-ball proof, p.211. The solution has subsolution source -F, so its forcing contribution is F-negative; the supersolution contribution uses ||F||q on B2R. Seed s0=min(p0,1/2) is inside both dimension ranges, and the normalized mean conversion is |B1|^(-1/s0). Both extrema lie on B_R/2. Coefficients of infimum and source are dominated by C1(C2-prime+1); zero forcing gives the usual inequality. No continuous representative is required. Reader lists no body repair; carrier changes are dependency metadata.

Disposition: reviewed_no_defect. Defect references: none; metadata normalization.

## `cor-strong-maximum-principle-for-weak-elliptic-solutions`

Checked both steps and exact zero-set, Holder-representative, connectedness and weak-solution suppliers. Continuity upgrades nonnegativity a.e. to nonnegativity everywhere. An interior zero forces identically zero by the reviewed lemma; absence of zeros then gives positivity everywhere and hence a.e. The n>=3 restriction is preserved. Empty Omega yields vacuous conclusions, while any asserted zero supplies a nonempty set for propagation. Reader lists no body repair; only dependency metadata changed.

Disposition: reviewed_no_defect. Defect references: none; metadata normalization.

## `lem-finite-interior-ball-chain-propagates-weak-harnack-bounds`

Reviewed all three steps, complete local Harnack, compactness and Lebesgue-point suppliers, and Simon p.211 local Harnack proof. A finite cover centered on K has nonempty relative sets; disconnected intersection graph would separate connected K. An intersecting pair of open half-balls overlaps on positive measure. The direction m_s<=M_(s+1) is correct, so local bounds propagate along a simple path of length <=N-1 and finish with m_last<=u(y), giving C0^N. Lebesgue points in K have full relative measure after whole-space zero extension; positive measure of K permits selection near its essential infimum. Finite local bounds ensure these extrema are finite. Reader localization and source-attribution repairs are sound; F=0 and one-ball cover are included.

Disposition: amended_repair. Defect references: `f39-b14-chain-lebesgue-localization`, `f39-b14-chain-source-locator`.

## `cex-harnack-estimate-needs-an-additive-forcing-term`

Checked three steps, weak-formulation and current Harnack suppliers. For all n>=1, u=|x|^2/(2n) has Delta u=1, so f=-1, and compact-test integration by parts proves the weak identity. On B1/2 the infimum is zero and supremum 1/(8n), refuting every finite multiplicative constant. For n>=2 its extension to B3 supplies the required doubled B2 and F=1 gives a nonzero additive term. The n=1 computation is independent of the n>=2 theorem. Reader lists no body repair; carrier change is dependency metadata.

Disposition: reviewed_no_defect. Defect references: none; metadata normalization.

## `cex-harnack-requires-nonnegativity`

Checked three steps and the exact local-weak and Harnack interfaces. The coordinate function is H1 and harmonic; its compact smooth weak identity passes to H1-zero by density. It approaches extrema +1/2 and -1/2 on B1/2, so every positive C has C inf=-C/2<sup. Reader correctly removed the false assertion that a negative infimum makes the inequality meaningless; the mathematically defined inequality is false for the witness. Nonnegativity is the actual theorem hypothesis.

Disposition: amended_repair. Defect references: `f39-b14-negative-infimum-prose`.

## `ex-essential-supremum-precedes-holder-representative-in-de-giorgi-theory`

Checked all three steps and the representative-independent weak derivative, quotient and continuous-representative suppliers. The singleton modification equals zero a.e. and has zero weak gradients, hence satisfies the same weak equation. Its pointwise supremum is one, class essential supremum zero. The unique continuous representative of the zero class is identically zero, since a nonzero continuous value would persist on positive measure. Reader replaces the inaccurate claim that pointwise extrema cannot be evaluated before choosing a Holder representative by the correct condition for converting class estimates to pointwise bounds.

Disposition: amended_repair. Defect references: `f39-b14-representative-extrema-prose`.

## `cex-degenerate-ellipticity-allows-nonconstant-solutions-with-interior-zero-sets`

Reviewed three steps and the weak derivative, operator and strong-principle suppliers. The three-dimensional witness x2-positive is H1 with weak gradient (0,1_{x2>0},0), established directly by one-dimensional integration by parts and Fubini, so A=diag(1,0,0) annihilates it. Its lower half-ball zero set has positive measure and its upper half-ball is positive. The degeneracy at e2 excludes every theta>0. The integral equation is meaningful with this bounded matrix, while the uniformly elliptic definition is only a vocabulary comparison. Reader removed the nonexistent numbered operator locator; no mathematics was altered.

Disposition: accepted_repair. Defect references: `f39-b14-ellipticity-numbered-locator`.

## `cex-global-harnack-comparison-needs-connectedness`

Reviewed all three steps and local Harnack, finite-chain, weak solution and connectedness interfaces. The disjoint two-unit-ball set in R2 has finite measure, so the componentwise constants 0 and 1 lie in H1; local constancy gives zero weak gradient, with compact smooth tests supported away from the external component boundaries. Thus the function is a nonnegative harmonic weak solution with sup=1 and inf=0, refuting every finite global C. Reader adds the essential H1 hypothesis to the general local-constant fact and verifies it for this bounded witness; Simon p.211 is correctly identified as local Harnack. No whole-domain bound is asserted from connectedness alone.

Disposition: amended_repair. Defect references: `f39-b14-local-constant-h1`, `f39-b14-global-harnack-source`.

## Page and refuter dispositions

- `refuter:14:2`: **confirmed_nonfatal**. Confirmed nonfatal on the observed post-reader carrier: the first dichotomy is asserted for arbitrary interior B_R, but old 1.1 normalized on B2 before assuming B_2R. The strict half-level sets are disjoint on B_R, so this gap is immediately closed. Revised 1.1 proves that dichotomy first and then imposes B_2R for the quantitative part; all later steps and both signs were independently reviewed. Defect references: `f39-b14-oscillation-ball-scope`.

- `page:14:weak-elliptic-maximum-principles-and-holder-regularity`: **amended_repair**. Reviewed A-page prose and all placements against the complete current batch chain. Accepted reader additions of real symmetric coefficient scope, c>=0 with weak sign, n>=3 zero-set scope and scale-correct forcing. Amended the omitted exponent dependence: local boundedness has C(n,theta,M_a,rho,p), and Holder estimates also record their exponent. For u=x1-positive on B1 in R2, the positive region has half measure; avg(u^p) tends to 1/2, so its 1/p power tends to zero as p decreases to zero while sup on B1/2 is 1/2. Hence a p-independent constant is impossible. The summary now retains every estimate's stated exponent and radius ratio. Also corrected forcing prose: C||f-positive||q is added to the positive boundary supremum, rather than replacing it. Page ordering retains every supplier and no item/page was added or withdrawn. Defect references: `f39-b14-page-exponent-dependence`, `f39-b14-page-coefficient-hypotheses`, `f39-b14-page-forcing-boundary`.

- `refuter:14:1`: **confirmed_fatal**. Confirmed fatal on the exact post-reader page carrier: saying constants depend only on n,q,theta,M_a and radii omits the essential p dependence in the local mean-to-sup estimate. The explicit nonnegative subsolution x1-positive has inner supremum 1/2 but normalized p-mean tends to zero as p decreases to zero. Page prose now includes each stated exponent and radius ratio; the current theorem, hypotheses and entire proof were independently checked. Defect references: `f39-b14-page-exponent-dependence`.

The unchanged examples-page prose was read as page context; it matches the current explicit witnesses and owes no separate page decision.

## Sources and review limits

The complete current bodies of all 31 assigned items, both page summaries and their placements were read. All 74 unique external direct item supplier Statement/Definition interfaces were opened, together with the bounded-C1 extension theorem used to meet the critical embedding hypothesis. Full supplier proofs were opened where an actual prerequisite issue required it, including current Poincare-zero and the local trace convergence argument; this is not an audit of every transitive published proof.

- [Velichkov, Teorema di De Giorgi](https://people.dm.unipi.it/velichkov/PDE-capitolo-3-parte-3-teorema-di-De-Giorgi-v3.pdf): p.1 scalar/symmetric hypotheses, Lemmas 4–6 pp.2–3, complete Lemmas 9–12 and transition/oscillation arguments pp.3–7. The local proof was checked independently, including the level gap and polar-kernel estimate. The source contains typographical errors (for example the reversed t,T order in Proposition 11); the current local argument uses t<T and the correct clipped transition function.
- [Simon, Lectures on PDE](https://math.stanford.edu/~lms/lecs-on-pde.pdf): Lecture 13 boundary conventions/Lemma 4/Theorem 4 and complete proof, pp.153–155; Lecture 17 standing assumptions and Theorem 1, pp.199–200, planar Sobolev substitute p.202, Theorem 2 and complete Lemmas 3–4/positive-exponent transition, pp.205–209; Lecture 18 Theorem 1 and its full proof, p.211, and Theorem 2 statement and source scaling, p.212. The logarithmic test is general remark (a), followed by Lemma 4 display (1), pp.206–207. Source sign conventions differ from the repository's -div convention; the actual local energy calculations were checked directly. The source's general weak-Harnack theorem statement appears to omit p in its displayed constant dependence; the current proof and source's lemma bounds retain exponent dependence.

These source sections were read through web PDF extraction. The attempted local `pdftotext` command was unavailable and supplied no evidence. No independent retrieval or complete reading of Krummel, Teschl, or Schikorra is claimed in this session; their inherited bibliography assertions were not treated as mathematical certification. All used conclusions close by current explicit local arguments, exact repository interfaces and the source passages above.

Pre/post snapshots are fingerprint records, not full historical proof preimages. At entry every current item raw hash matched the post-reader item hash. The reader report supplies specific prior errors and edit descriptions, and the pre-review manifest supplies prior statement mirrors. These support the dispositions of the described repairs after independent current review; no byte-exact old-proof reconstruction is claimed. The trace omission already has row `f39-b16-trace-subsequence` and an expressly unbound batch-16 observation. This decision shares that one row via `same_defect_as: reader:16:2`; historical uncertainty and owner-authorized unbound disposition are preserved, without editing batch 16's decision or making a duplicate defect row.

## Changes, consumer review and ledgers

This adjudication changes three item carriers: the abstract level-step constant to C(n,C0), the oscillation proof's Step 1.1 scope, and the weak-Harnack DCT declaration/fact link. It also changes the routed A-page exponent-dependence and forcing-boundary prose. The first is a Statement correction: the complete current direct consumers are the owned local-boundedness theorem (F3/1.2) and oscillation lemma (F2); both already use C(n,C0) with their coefficient dependence carried by C0. Their actual proofs remain sound and no consumer Statement correction follows. A direct item/reference inventory for the reader's changed Definition/Statement carriers and this abstract level-step correction found no outside-batch item consumer; the owned page prose was checked. No other batch or published item was edited.

The owned manifest now mirrors current routed statements/definitions, dependencies, provenance and source locators; stable IDs and the existing pair are preserved. The newly linked DCT interface is the existing published theorem. Four affected proof-bearing contracts were regenerated, preserving boundary/risk fields; the stale H-minus-one F2 quote and subsequently changed ball-Poincare F6 quote were refreshed after reading the current supplier statements. No mathematical defect row was made for those mechanical quote mismatches. The original reader material rewrites have no judge records on changed carriers; no judge record was added here.

There are 39 newly appended closed defect rows and the one shared pre-existing trace row. Each confirmed defect has its own row; the two refuter decisions each reference exactly one row. Touched/page decisions reference the corresponding historical/current repairs, and metadata-only decisions use empty defect_ids. The existing ledger append tool serialized the append and regenerated its view.

The owned cross-batch input now has 69 records (64 verified, four open, one removed). Its existing removed/proposed withdrawal remains present. The manifest includes the reader's Hilbert and local-form additions; the current in-run page prerequisite from interior/boundary Sobolev regularity is now explicitly recorded. All current in-run dependency uses were reviewed against the exact interfaces above; the unified dependency ledger was refreshed through its tool. The canonical task ledger contains the batch-14 review and explicit owner routing. No defective published item was confirmed, so the published ledger was not edited.

## Owner/Step 5b handoff

OPEN external producer issue: `thm-poincare-inequality-for-w-one-p-zero`, owning batch 4. Its current Statement omits Countable Choice while its Given and F7 assume it. The proof from smooth line primitives, Holder, Tonelli and approximation is valid under the consumers' AC/CC; the four owned consumers are `lem-sobolev-level-set-iteration-step`, `thm-weak-maximum-principle-for-coercive-divergence-form-equations`, `thm-de-giorgi-local-boundedness-with-scale-correct-forcing-term`, and `thm-weak-harnack-inequality-for-nonnegative-supersolutions`. Their bounded balls/domains fit the finite-slab hypothesis and all use p=2. The owner must correct the producer's exported choice hypothesis and synchronize its proof contract/manifest. Step 5b must review current corrected bytes and refresh exact consumer quotes; these open edge records are not cleared by source presence or the valid AC-specialized use. No substantial unmet prerequisite blocks the owned mathematical proofs.

The engine owns decision hashes, the gate battery, routing and both impact windows. No stamp, judge cycle, dispatch, or stage transition was initiated.

## Local validation

- Initial risk-report without `--require-reviewed`: exit 0, 31 items routed; 29 HIGH/CRITICAL. Every one has a specific complete risk_review in the owning contract, including both untouched level-zero suppliers. Final required-review pass: exit 0, zero missing reviews.
- `node tools/tsx-run.mjs tools/reflow.mts` on the three changed item paths: exit 0, all unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` on the same explicit paths: exit 0, three checked and all PASS.
- `node tools/rendercheck.mjs` on the same three items and routed A-page with `--quiet`: exit 0, four files; mathematical spans and YAML parse.
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-14.proof-contracts.json --strict`: final exit 0, 31/31 checked, zero errors and warnings. Earlier local attempts identified exactly two stale supplier quotes, corrected as described above.
- `node tools/defect-ledger.mjs validate --run frontier-39-analysis-30`: exit 0, zero errors.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`: exit 0, refreshed and deduplicated.
- Required final post-edit/layout command: `node tools/proof-layout.mjs items/lem-sobolev-level-set-iteration-step.md items/lem-de-giorgi-oscillation-reduction.md items/thm-weak-harnack-inequality-for-nonnegative-supersolutions.md`: exit 0, three items, 19 steps, zero defects. No subsequent item edit or formatter was run.

Exact coverage: 32 decisions = 29 touched + one page + two flagged; no reader finding is owed. Verdict totals: accepted_repair: 5, amended_repair: 16, confirmed_fatal: 1, confirmed_nonfatal: 1, reviewed_no_defect: 9. Local checks above are format/contract evidence, not independent mathematical judgments or engine closure.

Final exact-coverage/reference check: 32/32 owed obligations, no duplicates or extras, every referenced row fixed at 5a-adjudicate, and no judge field on the three edited items. Final non-required and required risk passes both exited 0 (31 items; 29 required); the final strict contract pass again exited 0 with 31/31 checked and zero errors/warnings.
