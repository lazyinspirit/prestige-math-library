# Step 3a adjudication — batch 10

Run: mathematical-statistics-foundations-37. Group: batch-10.

Scope: one touched obligation; no reader/refuter findings or page obligations. Reader report/findings and refute-10.json were read independently as evidence. Current item dependencies were inspected at their exact Statement/Definition sections, including the published normal construction and characteristic-function proofs. No published supplier proof audit is claimed for other suppliers.

Initial risk-report: exit 0, eleven carriers routed, eight HIGH/CRITICAL.

## def-chi-square-law

Reviewed Definition and actual normal-law, normal characteristic-function, measurability and Dirac suppliers. For finite k>=1 the fixed N_k(0,I_k) law uniquely determines the continuous squared-norm pushforward. At k=0 the separate Dirac-zero rule is well-defined; no zero-degree denominator is allowed. AC is explicitly inherited from normal construction/uniqueness. No reverse Gaussian characterization is asserted. No defect.

Evidence: items/def-chi-square-law.md and its cited local supplier sections; reader-10.md and refute-10.json contain no findings. Risk review complete; no decision owed for this untouched/unflagged carrier. No edit to mathematics.

## thm-orthogonal-transform-preserves-standard-normal-product-law

Reviewed all three proof steps and exact supplier statements. Square U^T U=I implies UU^T=I; Borel measurability follows with AC=>countable choice. Characteristic functions agree for all t; substitution xi=-t/(2pi) matches the stated Fourier convention. The two laws are finite Borel probability measures, satisfying uniqueness hypotheses. Equality with the original joint law preserves product-normal coordinates, including n=1. No assertion for arbitrary independent coordinates. No defect.

Evidence: items/thm-orthogonal-transform-preserves-standard-normal-product-law.md and its cited local supplier sections; reader-10.md and refute-10.json contain no findings. Risk review complete; no decision owed for this untouched/unflagged carrier. No edit to mathematics.

## lem-positive-df-chi-square-has-density-and-regular-cdf

Reviewed steps 1.1--4.1 and product-law, Tonelli, Euclidean Lebesgue product, polar-measure and continuity-from-below statements. Finite product normal density follows on rectangles then by uniqueness. Polar substitution x=r^2 gives exactly sigma(S)/(2(2pi)^(k/2)) and exponent k/2-1>-1, including k=1. Increasing finite-radius events have mass tending to 1, so the finite polar constant is positive; shrinking-radius mass tends to zero, excluding an atom at 0. The positive integrable density gives global CDF continuity and strict increase only on (0,infinity). AC supplies countable choice for the polar/product suppliers. No defect.

Evidence: items/lem-positive-df-chi-square-has-density-and-regular-cdf.md and its cited local supplier sections; reader-10.md and refute-10.json contain no findings. Risk review complete; no decision owed for this untouched/unflagged carrier. No edit to mathematics.

## thm-orthogonal-projection-has-independent-chi-square-sums

Reviewed steps 1.1--3.1 and exact spectral, self-adjoint idempotent, grouping-independence and measurable-function suppliers. Eigenvalues are 0/1, with exactly r ones. U^T Z has independent normal coordinates by the already reviewed invariance result; zero-padded blocks are measurable and depend on disjoint coordinate sigma-algebras. Norms are their independent sums of squares. Both r=0 and r=n use empty sums and trivial constant-block sigma-algebras, giving Dirac-zero laws without ratio denominators. AC=>countable choice covers all Borel maps. No defect.

Evidence: items/thm-orthogonal-projection-has-independent-chi-square-sums.md and its cited local supplier sections; reader-10.md and refute-10.json contain no findings. Risk review complete; no decision owed for this untouched/unflagged carrier. No edit to mathematics.


## def-student-t-and-f-laws

Reviewed Definition and its already reviewed chi-square supplier plus exact product-measure/product-joint-law and Borel-map statements. Positive integer degrees give product probability realizations; the quotient maps are continuous on their positive-denominator domains with constant Borel extension at zero. Chi-square positivity makes these versions equal to the usual ratios almost surely and independent of realizations. Neither degree-zero denominators nor arbitrary dependent pairs are admitted. AC is explicit. No defect.

Evidence: items/def-student-t-and-f-laws.md, its exact cited supplier Statement/Definition sections, reader-10.md and refute-10.json. Risk review complete. No routed decision owed and no mathematical edit.

## lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing

Reviewed steps 1.1, 1.2, 2.1 and 3.1 with the exact normal-density, chi-square, product-law, Tonelli, DCT, increasing-union and IVT statements. F scaling is xrq/s, and t scaling is x sqrt(q/k), both derived from the defining inequalities with q>0. Majorant 1 is integrable under each denominator probability law, including at the F zero endpoint and both infinity limits. Strict inequalities hold on the full positive-denominator set and integrate strictly. Symmetry uses the even normal density and independence, then absence of atoms gives F_t(-x)=1-F_t(x). IVT is applied on finite closed intervals within the strictly increasing domains for u in (0,1); endpoints u=0,1 are excluded. Positive degrees are the integer degrees of the preceding definition. No defect.

Evidence: items/lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing.md, its exact cited supplier Statement/Definition sections, reader-10.md and refute-10.json. Risk review complete. No routed decision owed and no mathematical edit.

## cex-rademacher-orthogonality-does-not-imply-independence-or-exact-t-f

Verdict: reviewed_no_defect; change_kind: audit_enrichment; defect_ids: [].

Independent review of Counterexample steps 1.1, 1.2 and 2.1 verifies the orthogonal two-sign transform and probabilities 1/2, 1/4 and 1/2. The explicit uniform eight-point realization strengthens witness documentation without correcting a false claim: the earlier independent-sign assumption already supports every computation. The original Given paragraph is recovered from reader-reader-10.attempt-1.log lines 6269--6270; replacing only this paragraph in current bytes reproduces the exact pre hash 6b15f2b74c2d00607158b235763641b41672fefd23c3f85fece532c3f66e4dd2. Current bytes equal post hash d771a13bc942dcb7224a23c5152b7c05ef1e38c8d3892d74d92dc82e4e7c1a87. The added finite_checks row records the same realization. This is sound witness/audit enrichment; no mathematical defect is confirmed and no edit is necessary.

The Hadamard matrix is orthogonal; its magnitude-sqrt(2) events are disjoint with probability 1/2 each. Equal three-sign samples have variance zero with probability 1/4. In the two-sign nested intercept/zero-space model, RSS_U=0 and RSS_R=2 with probability 1/2. These usual ratios are undefined or infinite on positive-probability events, while Gaussian t/F ratios are finite almost surely. No Statement/Definition changed; no mathematical repair, judge invalidation, or confirmed-defect ledger row is required. All prerequisites were reviewed above.

## thm-gaussian-linear-model-qr-and-exact-t-f-pivots

Reviewed all four proof steps with the actual full-rank least-squares, Gram--Schmidt, orthogonal-decomposition/basis, projection/Pythagoras and statistic supplier statements. X=QR yields invertible R and P_X=QQ^T; standardizing with sigma>0 gives independent Q and residual blocks. The coefficient statistic is linear/Borel and its residual sum has sigma^2 chi-square(n-p) law. For fixed nonzero c, v=R^{-T}c is nonzero and ||v||^2=c^T(X^TX)^{-1}c>0; the rotated standard-normal contrast is independent of the positive residual chi-square. Under the nested-model null, W_R, W_U intersect W_R-perp and W_U-perp form orthogonal blocks of dimensions p-q, q and n-p, so RSS_R-RSS_U and RSS_U are the independent scaled chi-square contributions. q=p includes the zero-dimensional reduced space; q>=1 and n>p ensure positive ratio degrees. Piecewise-zero extensions are Borel and agree almost surely with the finite ratios. AC/countable-choice assumptions are preserved. No defect.

Evidence: items/thm-gaussian-linear-model-qr-and-exact-t-f-pivots.md, exact cited supplier Statement/Definition sections and the already reviewed local t/F and CDF suppliers. Reader/refuter artifacts contain no finding. Risk review complete; no routed decision owed. The batch-2 statistic interface is used only to identify the Borel data map, with no parameter-measurability assumption. No mathematical edit.

## thm-normal-mean-residual-independence-and-exact-t-pivot

Reviewed all six proof steps and exact normal affine-pushforward, multivariate projection, statistic, independence and local chi-square/t/CDF suppliers. With n>=2 and sigma>0 the standardized sample is product-normal, u=n^(-1/2)1 is unit and P=uu^T has rank 1. Mean and residual are measurable functions of independent projection blocks; u^T Z is standard normal and residual norm-squared is chi-square(n-1). S>0 almost surely, and the Borel zero-extension of the studentized mean is exactly the defining independent t ratio. For 0<alpha<1 the unique central quantile is positive, symmetry and continuity give central mass 1-alpha, and multiplication by S/sqrt(n)>0 identifies the interval event almost surely. n=2 and arbitrarily small positive sigma are admitted; n=1, sigma=0 and endpoint alpha values are excluded. The statistic supplier is used only for Borel data-map typing. AC/countable choice are explicit. No defect.

Evidence: items/thm-normal-mean-residual-independence-and-exact-t-pivot.md and exact cited Statement/Definition sections, together with reader-10.md and refute-10.json. Risk review complete; no routed decision owed and no mathematical edit.

## Dependencies and scope disposition

The four original cross-batch records in research/mathematical-statistics-foundations-37-batch-10.cross-batch-dependencies.json remain present with their existing open status. The two owned theorem consumers use def-statistic-and-estimator only for measurability on the Borel data space; the actual current Definition supplies exactly that interface. The estimators-and-randomized-procedures page edge records this same prerequisite. The supplemental product-measures-and-the-Fubini--Tonelli page edge is supported by the exact product-measure and Tonelli suppliers read for the chi-square density argument. Independent edge reconciliation and scheduling remain engine/owner duties; no outside batch is approved here. No supplier Statement/Definition changed, so no new downstream repair is required. Stable IDs and existing withdrawal records are preserved.

Both assigned page summaries were opened as placement/context evidence and accurately describe the reviewed results and positive-degree denominator convention. They owe no decisions in this dispatch. The two untouched, unflagged examples owe no decisions and were not separately re-audited.

## Source evidence and review limits

All 36 distinct direct supplier Statement/Definition sections were inspected; the published multivariate-normal construction and characteristic-function proofs were also read. Exact local source excerpts in all 91 contract citation records match current supplier bytes. Proof-contract validation additionally checked the nine routed/risk carriers. The arguments are elementary Gaussian linear algebra and integration against probability laws, and no unresolved mathematical uncertainty required an external-source search. External bibliographic PDFs were not independently consulted in this adjudication; no claim of checking those complete texts is made. Reader/refuter coverage claims are evidence, not substitute proofs.

## Local checks and handoff

- Initial and final risk-report on research/mathematical-statistics-foundations-37-batch-10.proof-contracts.json: exit 0; eleven carriers routed. Final --require-reviewed run: exit 0, zero errors, all eight HIGH/CRITICAL risk reviews complete.
- Focused proof-contract --strict on the eight risk carriers plus the touched counterexample: exit 0, 9/9 checked, zero errors and warnings.
- Exact-quote comparison: all 91 contract citation excerpts present in current supplier files.
- Current raw hashes: all eleven item carriers match the post-reader snapshot. The touched carrier's recovered original paragraph reproduces its exact pre-reader raw hash; historical delta is known.
- Counterexample precheck: exit 0; one checked, zero failing. Counterexample proof-layout: exit 0; one item, three steps, zero defects.

Only the owning proof contract was updated with eight risk_review records, alongside this report, the single-decision JSON and the owned-consumer note in briefs/tasks/frontier-dependency-ledger.md. No item/page content was edited. No formatter was needed. No mathematical repair is asserted; repair_confidence is inapplicable to this audit-enrichment disposition. No confirmed defect, published defect, missing prerequisite, escalation or blocker was found, so no defect-ledger or published-ledger row is warranted. No judgment, certification, hash stamp, dispatch or gate battery was initiated. Engine handoff: collect the single routed decision, stamp current hashes and run the native gates.
