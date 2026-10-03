# Step 5a adjudication — batch 5

Run: `frontier-38-owner-30`; group: `batch-5`. Only assigned draft carriers and the batch contract are writable. Engine judgment, hashes, gates and stage transitions remain pending.

Scope owes 26 touched decisions and `flagged:5:1`; reader findings and page obligations are empty. All 31 current raw item hashes initially match the reader post snapshot. All 24 available `/tmp/reader5-before/<id>.md` before-images match the pre snapshot exactly; seven unchanged carriers have identical pre/post item hashes. Two touched obligations concern only contracts (`def-standard-holder-calderon-zygmund-kernel`, `lem-mihlin-dyadic-pieces-sum-to-an-off-support-kernel-representation`).

Initial risk-report: 31 items, 0 errors, 27 HIGH/CRITICAL. Reviews below proceed in generated dependency order. Published suppliers are read for their exact claim interfaces, with complete proofs only where specified; no transitive published audit is claimed.

## Completed reviews

### `def-calderon-zygmund-kernel-and-principal-value-operator` (level 0)

Definition (1) is annular L1 size, (2) integral Hormander smoothness, (3) a separate L2 off-support identity; no principal-value existence follows from them. Checked finite annulus covering, locally L2 kernels with compact input, zero kernel/identity possibility and one common truncation sequence for all Schwartz tests. Complex tests and distributions use the stated bilinear convention. No choice is spent on the definition.

Dependencies: `def-complex-lp-and-euclidean-test-function-conventions`, `def-locally-integrable-function-on-r-n`, `def-schwartz-space-and-its-seminorms`, `def-tempered-distribution`. Current proof read completely; relevant supplier interfaces checked.

### `def-dyadic-cube-in-rn-all-generations` (level 0)

Definition uses (m_i2^{-k},(m_i+1)2^{-k}] for k in Z and i<n. Finite endpoint uniqueness recovers side length/generation; positive powers and box volume give 2^{-kn}. The exact box-measure supplier assumes Countable Choice, now explicitly inherited while the set construction is choice-free. Before-image omits that scope; repair accepted. Negative generations and included right/excluded left faces checked.

Dependencies: `def-dyadic-cube-in-rn`, `def-half-open-box`, `def-integer-power`, `def-integers`, `lem-power-laws`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `def-countable-choice`. Current proof read completely; relevant supplier interfaces checked.

### `def-maximal-truncated-singular-integral` (level 0)

Definition restricts 1<=p<infinity. Polar integration of r^{n-1-np-prime} gives finite tail for p-prime>1; p=1 uses the L-infinity bound A1 epsilon^{-n}. Holder applies at each x and is class invariant. Dominated convergence at the upper tail and T^(epsilon,N)=T_epsilon-T_N prove both comparisons, including zero kernel. Explicit polar/DCT/Countable Choice citations repair the missing supplier hypotheses; no principal value is inferred.

Dependencies: `def-complex-lp-and-euclidean-test-function-conventions`, `thm-complex-holder-minkowski-and-the-quotient-norm`, `def-countable-choice`, `thm-polar-coordinates-formula-for-lebesgue-measure`, `thm-dominated-convergence`. Current proof read completely; relevant supplier interfaces checked.

### `lem-dyadic-mihlin-kernels-have-uniform-integral-hormander-control` (level 0)

Proof 1.1 differentiates the exact published cutoff construction to prove radial monotonicity and telescoping partition. Proofs 1.2–2.2 identify smooth inverse transforms via Fubini/injectivity and Plancherel and bound weighted L2 norms by A 2^{j(n/2-|gamma|)}. In 3.1, -2 floor(n/2)-2+1/2<-n even at n=1, so Cauchy–Schwarz gives the weighted L1 estimate. Applying the same argument to xi_r zeta controls gradients with factor 2^j. Fixed cutoff qualification removes the arbitrary-cutoff nonnegativity defect; zero symbol and all j in Z checked.

Dependencies: `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-locally-integrable-functions-embed-in-distributions`, `thm-differentiation-and-polynomial-multiplication-preserve-tempered-distributions`, `thm-holder-inequality-for-integrals`, `def-countable-choice`, `def-fourier-transform-of-a-tempered-distribution`, `def-mihlin-symbol-with-more-than-half-dimension-derivatives`, `def-schwartz-space-and-its-seminorms`, `lem-schwartz-cutoffs-from-the-standard-smooth-step`, `thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions`, `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms`, `thm-plancherel`. Current proof read completely; relevant supplier interfaces checked.

### `lem-marcinkiewicz-interpolation-from-weak-one-one-and-strong-two-two` (level 0)

Proofs 1.1–4.1 split at |f|>t and <=t into L1 and L2, then sublinearity, Chebyshev, layer cake and nonnegative Tonelli produce 2A/(p-1)+4B^2/(2-p). Zero f is treated before the zero-times-infinite inner integral; 1<p<2 ensures integrability at both ends. Quotient invariance is assumed by T on L1+L2. Empty/zero measure and A=B=0 give zero outputs. No stronger endpoint is claimed.

Dependencies: `def-distribution-function-of-absolute-value`, `def-l-p-space-as-a-quotient-by-null-functions`, `def-sublinear-operator-weak-and-strong-type-p-q`, `thm-chebyshev-markov-inequality-for-the-integral`, `thm-layer-cake-formula-for-l-p-powers`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`. Current proof read completely; relevant supplier interfaces checked.

### `lem-radially-decreasing-kernels-are-dominated-by-the-maximal-function` (level 0)

Proof 1.2 identifies {omega>t} with a ball up to its null boundary, including the empty/singleton radius-zero case. Integrability excludes infinite radii at t>0. Proof 2.1 controls its integral by centered M, then Tonelli/layer cake give norm(omega)_1 M f pointwise. Zero norm uses 0 times infinity=0. Explicit Countable Choice now matches maximal-function/ball-scaling suppliers; no translated choice selections occur.

Dependencies: `def-centered-and-uncentered-hardy-littlewood-maximal-functions`, `def-countable-choice`, `lem-euclidean-balls-have-positive-finite-lebesgue-measure`, `prop-measure-monotonicity`, `thm-layer-cake-formula-for-l-p-powers`, `thm-lebesgue-measure-under-dilations-and-reflections`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`. Current proof read completely; relevant supplier interfaces checked.

### `cex-calderon-zygmund-strong-lone-bound-fails` (level 0)

Counterexample 1.1 explicitly computes both interior and exterior truncations of 1_(0,1]; the difference of positive-part logarithms is bounded by |q| because positive part is 1-Lipschitz. q=pi^{-1}log|x/(x-1)| is locally integrable but has a 1/x nonintegrable tail. Steps 1.2 and 2.1 use uniform smooth-test bounds, absolutely convergent Fubini, skew-adjointness and DCT to identify q with the L2 Hilbert transform. The old absolute kernel majorant was infinite on (0,1); its replacement is valid. Endpoints 0,1 are a null exception, and no weak bound is refuted.

Dependencies: `cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity`, `def-complex-lp-and-euclidean-test-function-conventions`, `def-countable-choice`, `def-hilbert-space-adjoint`, `def-truncated-hilbert-transform-and-principal-value`, `lem-hilbert-transform-has-signum-fourier-multiplier`, `lem-hilbert-transform-is-skew-adjoint-on-ltwo`, `thm-dominated-convergence`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-locally-integrable-functions-embed-in-distributions`. Current proof read completely; relevant supplier interfaces checked.

### `def-standard-holder-calderon-zygmund-kernel` (level 1)

Definition (1) is a pointwise first-difference hypothesis for 0<delta<=1 and |x|>=2|y|>0; neither argument reaches zero. The integral smoothness consequence is a separate lemma, no converse/L2/principal value is asserted. Zero differences and delta=1 are included. Item raw pre/post hashes agree; the routed delta is contract boundary enrichment, reviewed_no_defect with no defect row.

Verdict: `reviewed_no_defect`. Current argument and relevant supplier interfaces checked; no local item edit needed.

### `lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality` (level 1)

Proof 1.1 invokes the reviewed Marcinkiewicz estimate only for 1<q<2; the adjoint has a compatible L1+L2 extension explicitly required. In 4.1 conjugating the test converts bilinear integral to first-variable-linear adjoint pairing, and bounded finite-measure g_N first proves Tf belongs to Lp by integral monotone convergence. Density then gives the compatible extension. p=2 is deliberately supplied by the hypothesis; p=1,infinity are excluded. Replacing real-sequence monotone convergence by its integral theorem and exposing Countable Choice is valid.

Verdict: `accepted_repair`. Current argument and relevant supplier interfaces checked; no local item edit needed.

### `lem-cotlar-inequality-for-maximal-truncations` (level 1)

Proofs 1.1–2.1 bound R_epsilon=k^(epsilon)-W*phi_epsilon near zero by size plus annular cancellation and far away by Holder smoothness. W is used through one common principal-value sequence; distributional associativity in 3.1 is justified in each Schwartz seminorm, avoiding nonabsolute Fubini. Radial domination in 4.1–4.2 applies to |Tf| and |f|. The corrected F4 modulus is essential for complex g; constants depend only on fixed bump,n,delta. Zero kernel, boundaries at 2 epsilon and delta=1 checked.

Verdict: `accepted_repair`. Current argument and relevant supplier interfaces checked; no local item edit needed.

### `lem-cz-bad-part-is-integrable-away-from-expanded-cubes` (level 1)

Proof 1.1 gives |x-c_Q|>sqrt(n)ell>=2|y-c_Q| outside the closed expanded cube; compact L2 input is L1. Step 2.1 subtracts the centre value using integral b_Q=0, and Tonelli/Hormander give A2 norm(b_Q)_1. At y=c_Q the difference is exactly zero rather than an illegal y=0 invocation. Countable Choice matches box measure. Expanded boundary, zero b_Q and A2=0 checked; current contract centre-case correction is valid.

Verdict: `accepted_repair`. Current argument and relevant supplier interfaces checked; no local item edit needed.

### `lem-dyadic-cubes-all-generations-partition-and-nesting` (level 1)

Proofs 1.1–2.1 give a unique integer index from m<t<=m+1 for every coordinate; volume is 2^{-kn} under the exact choice-assuming box theorem. In 2.2 rescaling coarser endpoints to the finer generation gives integer blocks and forces containment of any intersecting finer cube. The upper corner in 3.1 belongs to Q and selects its unique ancestor; parent measure is 2^n times Q. All k in Z, equal generations and points on grid boundaries checked. Statement now exposes the assumed Countable Choice.

Verdict: `accepted_repair`. Current argument and relevant supplier interfaces checked; no local item edit needed.

### `lem-mihlin-dyadic-pieces-sum-to-an-off-support-kernel-representation` (level 1)

Proof 1.1 gives inverse-transform transposition and dominated pairing convergence. Low frequency pieces obey |K_j|<=C A 2^{jn}; high frequency tails obey C A(1+2^j delta)^(-1/4), so 2.1–3.2 give absolute a.e. summation, local L1 equality with W and a scale-uniform annular bound. In 3.3 high-frequency tails and low-frequency gradient translations sum geometrically for each y!=0; translated exceptional null sets cause no loss. Zero m is included. Carrier raw pre/post hashes agree: supplier quotations/derivations were enriched, not its mathematics; no defect row.

Verdict: `reviewed_no_defect`. Current argument and relevant supplier interfaces checked; no local item edit needed.

### `cex-calderon-zygmund-operators-need-not-map-linfinity-to-linfinity` (level 1)

The reviewed L2 interval-transform supplier gives q=pi^{-1}log|x/(x-1)|. On (0,1), one-sided endpoint limits give nondegenerate positive-measure intervals where q>M and q<-M for every M, proving essential unboundedness. Compatibility on L-infinity intersection L2 yields the contradiction; merely redefining values at endpoints cannot repair it. Countable Choice is now inherited. No BMO conclusion is attempted.

Verdict: `accepted_repair`. Current argument and relevant supplier interfaces checked; no local item edit needed.

### `cex-size-without-cancellation-does-not-give-a-principal-value-operator` (level 1)

Proof 1.1 evaluates the positive kernel on epsilon<min(1,N), fixes N=2 for divergence and distinguishes finite individual truncations from infinite suprema. Proof 3.1 uses the globally nonnegative Gaussian Schwartz test, so its lower bound cannot be cancelled by a negative/complex tail. Gradient n|z|^(-n-1) implies the integral Hormander bound despite principal-value failure. Thus cancellation for principal values differs from smoothness. Countable Choice is explicit; n=1, epsilon>=1 and arbitrary sequences tending to zero checked.

Verdict: `accepted_repair`. Current argument and relevant supplier interfaces checked; no local item edit needed.

### `lem-holder-cz-kernels-satisfy-hormander-cancellation` (level 2)

Proofs 1.1–2.1 integrate the pointwise bound only for y!=0, with polar r^{n-1} reducing the tail to r^{-1-delta}. The constant |S^{n-1}|2^{-delta}/delta A2-prime is uniform in y and finite precisely because delta>0. delta=1 and zero A2-prime are valid; delta=0 is excluded. Annular/local integrability hypotheses are inherited separately. The Borel polar integrand is the explicit radial majorant, so measurability of k suffices. No converse or principal value is inferred.

Current proof and all relevant cited supplier statements checked. No item edit required.

### `lem-maximal-dyadic-cubes-at-height-lambda` (level 2)

Proofs 1.1–2.1 bound every bad volume by norm(f)_1/lambda, so bad ancestor generations form a nonempty lower-bounded subset of Z with a canonical least member. Maximality excludes every larger bad ancestor, not just the parent. Nesting yields disjointness; the explicit grid is countable and the selected subfamily is a subset. Parent volume 2^n gives the average bound; disjoint integration gives the summed volume; both superlevel inclusions hold. Empty bad family/zero f, strict >lambda and all large negative generations checked. Choice hypothesis repair and corrected maximality contract accepted.

Current proof and all relevant cited supplier statements checked. No item edit required.

### `lem-calderon-zygmund-decomposition-at-height-lambda` (level 3)

Proof 1.1 defines each b_j only on disjoint bad cubes and computes integral zero and norm bound. Proof 2.1 uses dyadic cubes shrinking nicely: constant extension across each dyadic radius interval loses at most another 2^n in the ball-to-cube ratio, still a uniform positive constant. Differentiation yields |f|<=lambda off the bad union a.e. Step 3.1 averages cannot increase L1 mass and |g|<=2^n lambda gives the L2 bound. Complex f, empty bad family, zero f and strict stopping level are valid. The Statement already assumed Countable Choice; adding its deps entry is metadata normalization, not a newly confirmed mathematical defect.

Verdict: `reviewed_no_defect`; current proof and cited prerequisite interfaces checked.

### `ex-riesz-transform-as-a-standard-calderon-zygmund-operator` (level 3)

Verification 1.1–1.4 consumes exact published size, first differences, zero spherical mean, principal-value Schwartz representation and L2 multiplier bound. Purely imaginary multiplier gives R_j-star=-R_j. In 2.1, pairing against conjugate(phi) gives -integral f conjugate(R_j conjugate(phi)); the real kernel at y-x and oddness convert this to integral K_j(x-y) f(y) phi(x). Positive support separation supplies absolute Fubini and locally integrable injectivity. This repairs the old sign/conjugation error; zero tests and n=1 are valid. All source constants and Countable Choice scopes preserved.

Verdict: `accepted_repair`; current proof and cited prerequisite interfaces checked.

### `ex-second-derivative-newtonian-kernels-fit-the-cz-framework` (level 3)

Verification 1.1–2.2 computes k_ij=|S|^{-1}(n x_i x_j |x|^{-n-2}-delta_ij |x|^{-n}), size/gradient and zero spherical mean. In 3.1 test subtraction proves a tempered principal value; annular integration by parts with inner normal -omega gives Hessian=V_ij-(delta_ij/n)delta_0. Taking its trace recovers -Delta Gamma=delta_0. In 4.1 Gamma and a=(4 pi^2 |xi|^2)^{-1} are tempered and a is locally integrable for n>=3; origin-supported U has scaling lambda^{n-2}, incompatible with every Dirac derivative scaling lambda^{-|alpha|}, so U=0 by the exact point-support theorem. Symbol -xi_i xi_j/|xi|^2+delta_ij/n then gives L2 boundedness, and even real kernel/self-adjointness/Fubini gives the off-support identity. Diagonal/off-diagonal cases, zero test and the n>=3 exclusion of the two-dimensional frequency ambiguity checked. Hunter Theorem 2.26 and complete proof, printed pp.37–38, corroborate the boundary correction; the local argument supplies its distributional/Fourier completion.

Verdict: `accepted_repair`; current proof and cited prerequisite interfaces checked.

### `lem-cz-good-part-has-controlled-ltwo-image` (level 4)

Proofs 1.1–2.1 apply the L2 norm bound to the good part from the reviewed decomposition, then Chebyshev at (lambda/2)^2. Exact coefficient 4 B^2 2^n lambda^{-1} norm(f)_1 is correct. Height lambda>0 is essential; B=0 or f=0 yields zero. All source hypothesis scopes, including Countable Choice, are carried. No input L2 assumption on f is required because g is L2.

### `ex-calderon-zygmund-decomposition-of-an-interval-indicator` (level 4)

Verification 1.1 uses nesting with (0,1], with containing ancestor means 1,1/2,1/4,1/8,...; strict >lambda=1/4 makes only (0,2] maximal, and equality makes its parent good. Disjoint cubes have zero mean; contained ones have mean 1. Correct F2 bad-part formula includes indicator(Q) and vanishes on the good region. Then b=(1/2)1_(0,1]-(1/2)1_(1,2], g=(1/2)1_(0,2], integral b=0, total length 2<=4. The |g|=2lambda claim is restricted to its support. Half-open endpoints and exact-height ancestor checked; accepted repair.

### `thm-calderon-zygmund-operator-has-weak-type-one-one` (level 5)

Proof 1.1 starts on L1 intersection L2 with B>0, fixes gamma=2^{-(n+1)}/B and proves L2 convergence of disjoint bad parts. Chebyshev at the target lambda/2 gives 2B norm(f)_1/lambda. Expanded-cube measure and integral Hormander control of the bad sum give coefficients 2^{2n+1}n^{n/2}B and 2^{n+2}A2; the stated maximum C_n controls their sum. Tonelli ensures absolute integrability of the bad image off the expanded union; L2 continuity/subsequence identifies it with Tb there. In 3.1 explicit bounded compact truncations approximate any L1 f; the weak difference estimate yields a unique measurable limit and Fatou preserves the weak constant. B=0 gives T=0, zero f/empty bad family are valid. Countable Choice and the actual integral Fatou supplier are now declared; no principal-value distribution is required by this operator theorem.

Verdict: `accepted_repair`. Countable Choice supplies approximation/subsequence interfaces; no additional arbitrary choice.

### `thm-calderon-zygmund-singular-integrals-are-bounded-on-lp` (level 6)

Proof 1.1 proves rather than presupposes the adjoint kernel representation: compact separated E and supp(h), local annular integrability and bounded tests give absolute Fubini, then exhaustion identifies T-star with conjugate(k(-x)). Reflection preserves the Hormander constant. Step 1.2 variable-height interpolation balances A and B; A=0 and B=0 use delta tending to zero/infinity respectively. Step 2.2 bounded finite-support norm tests avoid assuming Tf in Lp before proving it. New 3.1 normalizes by D=A2+B; fixed q=3/2 adjoint interpolation gives dimension-only strong L3 bounds, and weak-one/strong-three layer cake yields norm(S)_p^p<=K_n/(p-1) for 1<p<=2. Applying this to the adjoint and dualizing gives K_n p for p>2, including compatibility on L1 intersection L3 by common truncations. D=0 and p=2 are explicit; strong endpoints are excluded. The stronger uniform constant required by Mihlin is now proved. Integral monotone convergence and choice hypotheses are corrected; accepted complete repair.

Exact prerequisites are the previously reviewed weak endpoint, interpolation lemma and current published Fubini, Holder, density, layer-cake, Tonelli, integral monotone convergence and adjoint interfaces.

### `cor-hilbert-transform-is-bounded-on-lp` (level 7)

Proofs 1.1–2.1 directly give |k|=1/(pi|x|), difference constant 2/pi, zero sphere mean, annular 2log(2)/pi and Hormander 2/pi. Step 3.1 uses first-variable-linear skew-adjointness and the real odd kernel at y-x, with separated compact supports, to derive absolutely convergent off-support Fubini; injectivity identifies the class. B=1 and the reviewed strict-range theorem then give the claimed norm/unique extension. p=2,n=1 and zero input checked; no strong endpoints are asserted. The reader only adds explicit Fubini/injectivity citations to an already correct argument and reflows facts, so this is audit_enrichment with no mathematical defect row.

Verdict: `reviewed_no_defect`. Current carrier, historical mathematical delta and actual cited prerequisites reviewed.

### `cor-riesz-transforms-are-bounded-on-lp` (level 7)

Proof 1.1 uses the exact published size/difference/spherical-mean estimates; 1.2 derives skew-adjointness from the purely imaginary multiplier and L2 bound <=1. Step 2.2 correctly conjugates the Schwartz action and uses the kernel at y-x, then real oddness yields x-y. Separated compact supports justify absolute Fubini and local distribution injectivity. Step 3.1 applies the reviewed CZ theorem with A2=|S|C_n/2, B<=1. n=1,zero input,all permitted j and p=2 checked; p=1,infinity excluded. Reader changes only add explicit supplier facts/tags to this valid preexisting proof: audit_enrichment, no defect row.

Verdict: `reviewed_no_defect`. Current carrier, historical mathematical delta and actual cited prerequisites reviewed.

### `rem-calderon-zygmund-endpoints-are-weak-lone-and-bmo-not-strong-lone-or-linfinity` (level 7)

The title now states that strong endpoints fail in general; zero/identity CZ operators with k=0 show why a universal failure title would be false. Statement correctly separates the reviewed weak (1,1) theorem, strict-range Lp estimates and Hilbert counterexamples to class-wide strong endpoints. Later BMO content is contextual and unused. The quantitative displayed upper bounds blow up at p=1,infinity; this does not assert every operator norm does. Countable Choice is exposed. Accepted title/scope repair.

Verdict: `accepted_repair`. Current carrier, historical mathematical delta and actual cited prerequisites reviewed.

### `thm-maximal-truncations-are-weak-one-one-and-strong-lp` (level 7)

Proof 1.1 extends Cotlar by pointwise L2 Holder with the truncated kernel, plus a common a.e. subsequence for two maximal images; parameter continuity gives rational-supremum measurability. Geometry outside 5sqrt(n) cubes makes J3 cubes lie in t/2<=|x-y|<=3t/2. Step 2.1 uses an inequality for partial J3 integrals and subtracts their means, giving E1,E2 plus C_n mu A1; Tonelli/Hormander bound their off-cube integrals, with y=c_j a zero difference. gamma=(K_n(A1+A2-prime+A3+B))^{-1} controls the annular term, and Cotlar/weak M/L2 Chebyshev control the good part. Step 6.1 uses the valid pointwise A1 epsilon^{-n} L1 difference bound; 7.1 uses Lp-prime Holder, with Fatou on powers and indicators. The earlier truncated-kernel L1 assertion and pointwise L1-by-L1 convolution estimate were false and are completely replaced. Zero total constant gives zero kernel/maximal operators; when a coefficient vanishes its term is omitted. Fixed delta>0,strict truncation boundaries,unbounded parameter sets and p-dependent strong constants checked. Complete repair accepted.

Verdict: `accepted_repair`. Current carrier, historical mathematical delta and actual cited prerequisites reviewed.

### `thm-mihlin-fourier-multiplier-theorem` (level 7)

Proof 1.1 consumes the reviewed weighted dyadic and off-origin series bounds. Step 1.2 uses compact cutoffs tending to one in Schwartz space and geometric annular-tail summability, requiring no pointwise |k| bound. Step 2.1 compares compact L2 mollifications in local L1(E) by norm(f_epsilon-f)_1 integral_(E-S)|k| and also in L2 via the multiplier norm; uniqueness gives absolute a.e. off-support representation. Step 3.1 therefore makes T_m a CZ operator and applies the now-proved dimension-only quantitative estimate, preserving q=floor(n/2)+1, A and ||m||_infinity. W is an off-origin distributional extension, not asserted principal value: m=1 gives W=delta_0,k=0 and is included. A=0 gives the zero operator; origin values are null; n=1 signum fits. Complete reader repair accepted. Although this Statement displays strict-range strong bounds only, its CZ proof together with the earlier weak theorem also implies weak (1,1), the issue in the routed remark.

Verdict: `accepted_repair`. Current carrier, historical mathematical delta and actual cited prerequisites reviewed.

### `cor-principal-value-truncations-converge-almost-everywhere` (level 8)

Proof 1.1 controls limsup oscillation by 2T-star(f-g) on the full-measure convergence set for each g in D. The maximal supplier proves parameter continuity, so the oscillation is measurable via rational truncation parameters. For p=1 the weak difference estimate, and for p>1 Chebyshev plus the strong maximal estimate, force each positive superlevel measure to zero by density; a countable set of lambda=1/m then gives zero oscillation a.e. Completeness of complex numbers yields a finite limit of the Cauchy family. D need only be dense, not a subspace; no algebraic property of D is used. Step 3.1 now verifies all Hilbert/Riesz maximal-theorem hypotheses, including a principal-value distribution constructed by zero spherical mean/test subtraction, L2 bounds and off-support identities supplied by the reviewed corollaries. Arbitrary null representative changes,zero inputs,p=1 and all finite p checked. This repairs the formerly incomplete application prerequisite chain.

Verdict: `accepted_repair`; no additional edit needed.

### `rem-mihlin-does-not-assert-strong-endpoint-bounds` (level 8; `flagged:5:1`)

Confirmed fatal refuter finding at Statement paragraph 2 and the title: the blanket page-level denial of any endpoint for symbols with jumps is false. Current Mihlin proof 3.1 proves T_m is CZ with A2<=C_n A and B=||m||_infinity; the reviewed weak theorem then gives measure{|T_m f|>lambda}<=C_n(A+||m||_infinity)||f||_1/lambda under their shared Countable Choice. n=1 m=-i sgn(xi) has zero punctured derivatives and C0=1, so its origin jump is allowed; the Hilbert counterexamples exclude general compatible strong L1/L-infinity bounds. Grafakos Theorem 6.2.7 printed p.446 explicitly includes the weak endpoint and its proof pp.446–449 uses the same CZ route. Repaired title and Statement, replaced the irrelevant maximal-truncation dependency by the exact weak theorem; contextual Hilbert counterexample pointers are in Remarks and do not create A-page dependencies on B items, exposed Countable Choice and updated statement provenance/source locator. No item or article consumes the remark. Its A-page inventory slot remains valid; the closing page paragraph is a separate unresolved prose defect, routed below for Step 5b.

Verdict: `confirmed_fatal`; complete local repair, `repair_confidence: 1`. Refuter evidence is independently confirmed, not accepted solely from its report.

## Confirmed defects and dispositions

The 37 distinct confirmed defects below were repaired completely by the reader, except the final Mihlin remark repaired here. Their closed ledger rows are owned at `5a-adjudicate`; every completed repair has `repair_confidence: 1`. Metadata/audit-enrichment decisions have empty defect IDs. The single refuter obligation maps to exactly one defect row.

- `frontier-38-owner-30-5a-batch-5-01` — `def-dyadic-cube-in-rn-all-generations`, fatal: The volume identity was stated without the Countable Choice assumed by the actual box-measure supplier. The repaired Definition restricts that identity to Countable Choice and keeps the set construction choice-free.
- `frontier-38-owner-30-5a-batch-5-02` — `def-maximal-truncated-singular-integral`, fatal: The polar tail-norm evaluation inherited Countable Choice but the original Definition expressly denied any choice use. The repair exposes that hypothesis and its polar supplier; absolute convergence and upper-tail DCT remain valid.
- `frontier-38-owner-30-5a-batch-5-03` — `lem-dyadic-mihlin-kernels-have-uniform-integral-hormander-control`, fatal: An arbitrary smooth plateau cutoff need not be radially decreasing, so zeta=chi-chi(2 dot) need not be nonnegative. The specific published cutoff construction is now required and its monotonicity is proved locally.
- `frontier-38-owner-30-5a-batch-5-04` — `lem-radially-decreasing-kernels-are-dominated-by-the-maximal-function`, fatal: The Statement omitted Countable Choice assumed by its Given, maximal-function and ball/dilation interfaces. The current Statement carries that hypothesis.
- `frontier-38-owner-30-5a-batch-5-05` — `cex-calderon-zygmund-strong-lone-bound-fails`, fatal: The old majorant G=pi^{-1} integral_0^1 |x-y|^{-1}dy is infinite on (0,1), so its claimed finite local integral and DCT domination were false. The repaired logarithmic majorant |q| is locally integrable and bounds every truncation by the positive-part Lipschitz calculation.
- `frontier-38-owner-30-5a-batch-5-07` — `lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality`, fatal: F4 cited thm-monotone-convergence, a real-sequence theorem, for convergence of integrals. The exact integral monotone-convergence supplier now supports the finite-support norm tests.
- `frontier-38-owner-30-5a-batch-5-07-2` — `lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality`, fatal: The adjoint was used on L1+L2 without explicitly specifying a compatible linear extension. Its required extension and inherited Countable Choice are now hypotheses.
- `frontier-38-owner-30-5a-batch-5-08` — `lem-cotlar-inequality-for-maximal-truncations`, fatal: F4 ordered an integral of a possibly complex g against a nonnegative real bound, omitting |g|. The repaired fact uses the modulus and agrees with the exact radial-domination supplier and its applications.
- `frontier-38-owner-30-5a-batch-5-09` — `lem-cz-bad-part-is-integrable-away-from-expanded-cubes`, fatal: The Statement omitted Countable Choice inherited by the cube-volume supplier. The repair declares it.
- `frontier-38-owner-30-5a-batch-5-09-2` — `lem-cz-bad-part-is-integrable-away-from-expanded-cubes`, nonfatal: The prior boundary contract excluded y=c_Q although it is allowed and produces an identically zero difference. The current proof step 4.1 and contract explicitly handle that case.
- `frontier-38-owner-30-5a-batch-5-10` — `lem-dyadic-cubes-all-generations-partition-and-nesting`, fatal: The volume claim omitted Countable Choice already assumed by Given and the exact box-measure theorem. The repaired Statement exposes that prerequisite while partition/nesting constructions remain choice-free.
- `frontier-38-owner-30-5a-batch-5-12` — `cex-calderon-zygmund-operators-need-not-map-linfinity-to-linfinity`, fatal: The Statement omitted Countable Choice from the compatible L2 interval-transform supplier. Its current Statement and dependency entry carry the hypothesis.
- `frontier-38-owner-30-5a-batch-5-13` — `cex-size-without-cancellation-does-not-give-a-principal-value-operator`, fatal: The old proof chose arbitrary Schwartz phi with phi(0)>0 and compared its global possibly signed or complex integral to a positive near-zero integral. The nonnegative Gaussian witness makes the global lower bound valid.
- `frontier-38-owner-30-5a-batch-5-13-2` — `cex-size-without-cancellation-does-not-give-a-principal-value-operator`, fatal: The old ending conflated integral Hormander smoothness with principal-value cancellation; |x|^{-n} satisfies Hormander smoothness. The repaired Statement separates the conditions and the proof supplies its gradient/Hormander estimate.
- `frontier-38-owner-30-5a-batch-5-13-3` — `cex-size-without-cancellation-does-not-give-a-principal-value-operator`, fatal: The supremum expression used the logarithmic doubly truncated formula outside its valid epsilon<min(1,N) range. The repaired proof states that range and fixes N=2 for divergence.
- `frontier-38-owner-30-5a-batch-5-14` — `lem-maximal-dyadic-cubes-at-height-lambda`, fatal: The Statement omitted the inherited choice assumption of cube measure and differentiation interfaces. The repair exposes Countable Choice.
- `frontier-38-owner-30-5a-batch-5-14-2` — `lem-maximal-dyadic-cubes-at-height-lambda`, nonfatal: The historical contract treated a good parent as sufficient for maximality; a coarser bad ancestor can still exist. The corrected contract matches the proof requirement that every strictly larger ancestor be good.
- `frontier-38-owner-30-5a-batch-5-16` — `ex-riesz-transform-as-a-standard-calderon-zygmund-operator`, fatal: Old step 2.1 used K_j(x-y) inside the adjoint action and said oddness removes conjugation. Current step 2.1 correctly uses K_j(y-x), conjugates R_j conjugate(phi), and then uses reality and oddness for the bilinear-test identity.
- `frontier-38-owner-30-5a-batch-5-17` — `ex-second-derivative-newtonian-kernels-fit-the-cz-framework`, fatal: Old F1 attributed global regular Hessian derivatives and the fundamental-solution identity to definitions that do not prove them; diagonal Hessians have a local delta term. New step 3.1 proves the principal value and Hessian=V-(delta_ij/n)delta_0 by annular integration by parts.
- `frontier-38-owner-30-5a-batch-5-17-2` — `ex-second-derivative-newtonian-kernels-fit-the-cz-framework`, fatal: Dividing 4pi^2|xi|^2 F(Gamma)=1 omitted an origin-supported distribution. New step 4.1 applies the point-support theorem and homogeneity to exclude every Dirac derivative for n>=3 before identifying the bounded Hessian symbol.
- `frontier-38-owner-30-5a-batch-5-18` — `ex-calderon-zygmund-decomposition-of-an-interval-indicator`, fatal: The Example claimed |g|=2lambda globally although g vanishes off (0,2]. It is now explicitly restricted to (0,2].
- `frontier-38-owner-30-5a-batch-5-18-2` — `ex-calderon-zygmund-decomposition-of-an-interval-indicator`, fatal: Old F2 defined b=f minus only the bad-cube averages, leaving b=f on the good region. The repaired formula sums (f-average_Q f) indicator_Q, matching the decomposition supplier.
- `frontier-38-owner-30-5a-batch-5-19` — `thm-calderon-zygmund-operator-has-weak-type-one-one`, fatal: The theorem Statement omitted Countable Choice used by decomposition and the a.e. extension/subsequence construction. It now exposes the hypothesis and cites the actual Fatou supplier.
- `frontier-38-owner-30-5a-batch-5-20` — `thm-calderon-zygmund-singular-integrals-are-bounded-on-lp`, fatal: The proof used the real-sequence monotone-convergence item for integrals. The repaired fact cites the integral theorem and the Statement exposes Countable Choice.
- `frontier-38-owner-30-5a-batch-5-20-2` — `thm-calderon-zygmund-singular-integrals-are-bounded-on-lp`, fatal: The old zero-A or zero-B interpolation claim said any delta gives the weighted-geometric-mean conclusion even though its right side vanishes. The repair takes delta down to zero for A=0 and up to infinity for B=0, proving S f=0.
- `frontier-38-owner-30-5a-batch-5-23` — `rem-calderon-zygmund-endpoints-are-weak-lone-and-bmo-not-strong-lone-or-linfinity`, fatal: The old title said never strong endpoints; zero and identity operators with k=0 contradict universal failure. The repaired title states failure in general and carries the theorem hypotheses.
- `frontier-38-owner-30-5a-batch-5-24` — `thm-maximal-truncations-are-weak-one-one-and-strong-lp`, fatal: Old step 1.1 assumed the truncated tail kernel is L1, false already for the Hilbert kernel. Pointwise Holder with its L2 norm now passes Cotlar to L2 inputs.
- `frontier-38-owner-30-5a-batch-5-24-2` — `thm-maximal-truncations-are-weak-one-one-and-strong-lp`, fatal: Old step 1.1 equated integral_0^R phi_x(r)dr with a ball integral while omitting r^{n-1}. Parameter continuity is now proved directly by an absolutely integrable DCT majorant.
- `frontier-38-owner-30-5a-batch-5-24-3` — `thm-maximal-truncations-are-weak-one-one-and-strong-lp`, fatal: Old step 2.1 equated a partial truncated J3 absolute integral with the full cube integral. The current inequality majorizes the partial integral correctly.
- `frontier-38-owner-30-5a-batch-5-24-4` — `thm-maximal-truncations-are-weak-one-one-and-strong-lp`, nonfatal: Old good-part step 4.1 omitted the dimensional weak maximal-function constant C_n. The repaired displayed estimate includes it.
- `frontier-38-owner-30-5a-batch-5-24-5` — `thm-maximal-truncations-are-weak-one-one-and-strong-lp`, fatal: Old step 6.1 asserted a pointwise convolution bound by the product of two L1 norms. The valid pointwise size bound A1 epsilon^{-n}||f_m-f||_1 now gives convergence at each x.
- `frontier-38-owner-30-5a-batch-5-24-6` — `thm-maximal-truncations-are-weak-one-one-and-strong-lp`, fatal: Old strong estimate step 7.1 dropped the Cotlar term proportional to A1+A2-prime+A3 before its final bound. The repaired argument retains every term and uses Lp-prime Holder/Fatou for all Lp inputs.
- `frontier-38-owner-30-5a-batch-5-25` — `thm-mihlin-fourier-multiplier-theorem`, fatal: The dyadic suppliers gave annular L1 size but the old proof assumed pointwise |k(x)|<=A1 |x|^{-n} to claim uniform mollified kernel convergence. The repaired proof uses Schwartz annular-tail summability and local L1(E) convergence on compact separated sets.
- `frontier-38-owner-30-5a-batch-5-25-2` — `thm-mihlin-fourier-multiplier-theorem`, fatal: Old proof 3.1 silently replaced the CZ constant C_(n,p) by a dimension-only C_n. The quantitative CZ supplier now proves a dimension-only estimate, which the current Mihlin argument invokes exactly.
- `frontier-38-owner-30-5a-batch-5-25-3` — `thm-mihlin-fourier-multiplier-theorem`, fatal: Old F2 called W=m-inverse a principal-value distribution for k. For m=1, W=delta_0 and k=0, so this fails. Current F2 requires only an off-origin distributional extension and preserves constant symbols.
- `frontier-38-owner-30-5a-batch-5-26` — `cor-principal-value-truncations-converge-almost-everywhere`, fatal: Old application step 3.1 invoked the maximal theorem from Schwartz convergence alone, without checking its operator/kernel prerequisites. The repaired step supplies principal-value distributions by test subtraction and maps size/smoothness/cancellation/L2/off-support conditions to checked Hilbert/Riesz corollaries.
- `frontier-38-owner-30-5a-batch-5-27` — `rem-mihlin-does-not-assert-strong-endpoint-bounds`, fatal: The original blanket denial of any endpoint for jump/singular symbols contradicts Mihlin proof 3.1 plus the weak CZ theorem. Current Statement derives weak (1,1) under Countable Choice; Remarks use the Hilbert signum example to distinguish weak from general strong endpoints.

## Consumer impact and Step 5b alert

All 16 reader-altered claim interfaces were compared semantically against the hash-matching before-images. Every direct item dependency/reference consumer is inside batch 5; their actual uses were checked as the corresponding consumers were reviewed above. No outside-batch item/article consumer was found. The locally repaired Mihlin remark likewise has no item/article consumer. The owned cross-batch input remains `research/frontier-38-owner-30-batch-5.cross-batch-dependencies.json` = `[]`, since all actual suppliers are published or same-batch; no ledger input or unified dependency ledger needed alteration. No proposed withdrawal exists.

**Open page-prose alert for the Step 5b lead:** `calderon-zygmund-decomposition-and-singular-integrals`, file `library/fourier-analysis/calderon-zygmund-decomposition-and-singular-integrals.md`, current raw SHA-256 `643d5369fd461f401516ebd4ff5589e1a2872c4c404262d8eb1c7b26fe6572f7`, final paragraph beginning “Finally, the dyadic pieces”. Its closing sentences say “only strict-range bounds are asserted” and attribute the weak endpoint to the maximal-truncation theorem. This is false for Mihlin multipliers: `thm-mihlin-fourier-multiplier-theorem`, proof 3.1, identifies their operator as CZ; `thm-calderon-zygmund-operator-has-weak-type-one-one` then yields weak (1,1). The repaired `rem-mihlin-does-not-assert-strong-endpoint-bounds` records the correct consequence. Required strategy: surgically replace the closing endpoint summary by strict-range strong bounds plus the weak (1,1) consequence for Mihlin operators; retain the absence of general strong L1/L-infinity bounds and the later BMO scope. This is a reference consumer prose repair, not a supplier change. The current scope has `pages_touched: []` and no page obligation, so the page remains read-only in this dispatch and **this finding remains open**. The B-page prose has no corresponding denial and its inventory/formulas remain compatible.

No defective published supplier was identified in the exact claim-interface checks; published content and the published-consumer ledger remain unchanged. No substantial unmet mathematical prerequisite blocks any owed item decision. The open page alert requires the Step 5b lead's routed prose repair, not an owner decision on unfamiliar mathematics.

## Sources and mathematical evidence

Read current carriers and all actual cited supplier claim interfaces, using full proof for `lem-schwartz-cutoffs-from-the-standard-smooth-step` to check the specific cutoff. Complex pairings are first-variable linear; distribution tests are bilinear; all choice-assuming analytic suppliers are used under Countable Choice. This review is not a whole-proof audit of the transitive published library.

Consulted the authoritative PDFs through their official university URLs and the complete local page extractions: [Grafakos, Classical Fourier Analysis, third edition](https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf), printed pp.358–371 (PDF indices 373–386), for kernel distinctions, CZ weak/strong estimates, Cotlar and the complete maximal-truncation argument; printed pp.445–449 (indices 459–463), for the complete relevant Mihlin theorem/proof, weighted dyadic estimates and weak endpoint statement. The source's low-frequency summation sentence is not taken as a verdict: the local lemma instead proves its low-frequency bound using |K_j|<=C A 2^{jn}, which sums correctly. [Hunter, Notes on Partial Differential Equations](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf), Theorem 2.26 and its complete proof, printed pp.37–38 (indices 42–43), checks the annular integration-by-parts correction; the frequency homogeneity argument is supplied locally from the published point-support theorem. No source reading beyond these precise sections is claimed.

Engine state was read only: live run `frontier-38-owner-30` at `5a-split`; latest git commit inspected was `badc8bdf3`. No RESUME claim was used and no engine transition was initiated.

## Final local checks and handoff

- `node tools/proof-contract.mjs research/frontier-38-owner-30-batch-5.proof-contracts.json --strict`: 31/31 items, 0 errors, 1 existing `shotgun-bracket` style warning on `cex-calderon-zygmund-strong-lone-bound-fails`, step 1.2. Each of its four facts is actually used; no mathematical rejection is inferred. An initial boundary locator referred to a supplier step as if it were a remark step; subsequent boundary evidence lacked the required Statement anchor. Both contract syntax failures were corrected, without mathematical/item edits or defect rows, before this final passing check.
- `node tools/risk-report.mjs research/frontier-38-owner-30-batch-5.proof-contracts.json --require-reviewed --json`: success, 0 errors, all 27 HIGH/CRITICAL reviews complete. The initial non-requiring report preceded all reviews.
- `node tools/tsx-run.mjs tools/precheck.mts items/rem-mihlin-does-not-assert-strong-endpoint-bounds.md --json`: 1 file, proof precheck not applicable to the remark, 0 failures. This is not a proof certification.
- `node tools/rendercheck.mjs items/rem-mihlin-does-not-assert-strong-endpoint-bounds.md --quiet`: exit 0, renderer YAML and every math span pass.
- `node tools/depcheck.mjs --items-file /tmp/frontier38-alpha-b5-item-scope.json --json`: exit 0, no errors, no warnings on the changed remark; the complete metadata/cycle join also reports 141 unrelated warnings. Contextual B-page pointers are in Remarks; the theorem spine has no new B-page dependency.
- `node tools/content-policy.mjs research/frontier-38-owner-30-batch-5.pages.json --json`: exit 0, scoped provenance policy passes.
- Required final command, run once after the last item edit: `node tools/proof-layout.mjs items/rem-mihlin-does-not-assert-strong-endpoint-bounds.md`: 1 item, 0 numbered steps, 0 defects. No item edit followed it.
- Custom read-only coverage/ledger check: exactly the 27 owed obligations, no duplicates/extras, five metadata/audit-enrichment decisions with empty defect IDs, 21 accepted repairs and one confirmed-fatal refuter finding; all 37 referenced defect rows exist, match their subjects, are owned at `5a-adjudicate` and closed as `fixed`. The refuter decision references exactly one row. No engine hash stamp was authored.

The only item edited in this adjudication is `items/rem-mihlin-does-not-assert-strong-endpoint-bounds.md`, final raw SHA-256 `1884b0a02517f24fde2d9dacd537570784b902973d34c70ba77b1a129b3f1e8d`. Its provenance/source locator and boundary contract were updated; its stable ID and page inventories remain unchanged. The batch contract has the 27 completed risk reviews. The canonical defect ledger was appended through its serializing tool and its generated view refreshed. The exact dispatched report and decisions paths are `research/frontier-38-owner-30-alpha-batch-5-5a.md` and `research/frontier-38-owner-30-alpha-batch-5-5a-decisions.json`.

All owed item obligations are dispositioned. **The A-page closing prose alert remains unresolved and must be repaired by the Step 5b lead before page-level closure.** No published content, other batch, page, plan, consolidated contract or engine state was edited. Next action: engine stamps current carrier/contract hashes and runs its gates; Step 5b routes and resolves the page-prose alert. No judge, self-certification, gate battery, agent dispatch, commit or engine transition was performed by this adjudicator.
