# Step 5a adjudication — batch 5

Run `frontier-39-analysis-30`; scope remains original group `c`, adjudication group `batch-5`. The engine owns scheduling, sealing and gates. This report records local mathematical review, not an independent judge stamp.

Read the task, scope, reader report/findings, refuter artifact, pre/post snapshots, repository rules and exact suppliers. No rendered evidence bundle was supplied. Current bytes match the raw post-reader hashes before local edits. Risk-report initially routed all 33 items HIGH/CRITICAL. No agents dispatched.

## Dependency-ordered item reviews

### `def-hp-atom-with-moment-order`

Reviewed support of the chosen representative, essential size, absolute moments under Countable Choice, and legal moment orders. For p=1 the minimum is s=0; n/(n+1) belongs to s=1, and zero atoms are valid. The reader correctly restricted s' to the legal range and removed the coefficient assertion. Box-measure Statement explicitly assumes Countable Choice. DKKP section 1.2, printed p.61 was read; its integer multi-index cutoff agrees with floor(n(1/p-1)). No further defect.

Disposition: accepted_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-atom-orders`; `frontier-39-analysis-30-5a-b5-zero-atom-coefficient`; `frontier-39-analysis-30-5a-b5-atom-moment-choice`; repair confidence 1.

### `lem-existence-of-schwartz-functions-with-flat-fourier-transform-at-the-origin`

Read all six steps and exact bump, Newton–Leibniz, Riemann Fubini, Fourier and substitution suppliers. Even-order differences preserve oddness; mh=1/8 keeps translated supports and the reciprocal away from zero. The reciprocal derivative has constant sign opposite Theta, so its integral cannot vanish. Tensor moments factor, the circumradius is strictly below 1, and the corrected mean is lambda^{-n}(integral phi)^n. Checked n=1 and odd m via m+1. Read complete DKKP Lemma 1, printed pp.61–62; its Fourier convention differs by 2pi but does not change vanishing. The corrected Jacobian is necessary and sufficient.

Disposition: accepted_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-lem-existence-of-schwartz-functions-with-flat-fourier-transform-at-the-origin`; repair confidence 1.

### `lem-local-polynomial-projections-match-moments-through-order-s`

Read Gram-matrix proof, bilinear distribution convention, compact tests, weighted measure and complex L2 interfaces. A nonzero polynomial cannot vanish on an open positive-weight set; positivity makes the symmetric real Gram matrix invertible even for N=0. The moment equations imply complex orthogonality by conjugating coefficients, and the same test support establishes locality on every open neighborhood. Countable Choice now qualifies the supplied Lebesgue route. No positivity/uniqueness or typing gap remains.

Disposition: accepted_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-projection-choice`; `frontier-39-analysis-30-5a-b5-projection-polynomial-zero`; repair confidence 1.

### `lem-schwartz-dilations-preserve-schwartz-space`

Checked every scaling computation against the exact seminorm, topology, integrability and C1 substitution statements. Differentiation contributes t^{-|beta|}, polynomial weight t^{|alpha|}, normalization t^{-n}, and Lebesgue Jacobian t^n. Fixed t>0 gives continuity in every finite family of seminorms; t=0 is excluded. Countable Choice is limited to the integral assertions. The reader's identity D_t phi=t^n phi_t correctly replaces its false t^{-n}=1 description.

Disposition: accepted_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-lem-schwartz-dilations-preserve-schwartz-space`; repair confidence 1.

### `lem-whitney-decomposition-of-proper-open-subsets-of-euclidean-space`

Read the entire distance-rule, maximal-superset and packing proof and exact dyadic nesting/measure suppliers. Maximal supersets lie in a finite dyadic range; touching ratios allow five generations, with coarse counts 2^n each and fine counts 3^n,4^n,6^n. Small dilates give ell in [2d/(11sqrt(n)),2d/sqrt(n)], so disjoint interior balls yield finite overlap. The reader repaired the missing coarse generations and closed circum-ball. Additional endpoint repair: step 1.1 allows d(x)/(4sqrt(n))=ell(x), so step 5.1 now uses <=, not <, both times. The Statement already promises <= and is unchanged. The (0,infinity) dilation illustration with (2^k,2^{k+1}] is correct at R=3. No outside consumer impact from this proof-only correction.

Disposition: amended_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-whitney-generations`; `frontier-39-analysis-30-5a-b5-whitney-circum-ball`; `frontier-39-analysis-30-5a-b5-whitney-face-convention`; `frontier-39-analysis-30-5a-b5-whitney-endpoint`; repair confidence 1.

### `lem-whitney-type-ball-cover-of-a-proper-open-set`

Reviewed deterministic rational-grid recursion and all covering, comparison and packing steps with rational density/countability and translated-ball volume suppliers. Rejected grid balls meet earlier selected small balls, yielding rho(q)<9rho_i/7 and |x-xi_i|<15rho_i/49<rho_i/2. Meeting 3rho/4 balls have radii within factor 7. Disjoint rho/8 balls shrink to common rho_j/56, giving at most 392^n neighbors and hence the stated 785^n. No maximality or arbitrary choice is used; Countable Choice covers the measure route. Empty/nonproper Omega excluded. No defect; risk review only.

Disposition: risk review only; no touched obligation. 

### `def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution`

Reviewed nonzero-mean kernel, normalized t>0 dilations, bilinear reflected-translate pairing and smooth polynomial-growth supplier. Suprema contain t=1,y=x; zero gives zero, infinite values are allowed, and the closed-cone diagonal proves radial domination. Defining the functions requires no selection. The accompanying mass identity uses the integral clause of the reviewed dilation supplier. DKKP p.60 confirms normalization and cone convention. No defect; risk review only.

Disposition: risk review only; no touched obligation. 

### `lem-approximate-identities-in-schwartz-space-converge-in-tempered-distributions`

Reviewed all three steps and exact Schwartz parameter-interchange, finite-seminorm, convolution and substitution interfaces. Reflected convolution has the correct sign; weighted translation differences tend to zero in every seminorm, and psi(x)Phi_t(x-dot) has integrable seminorm majorants. Integral-one Phi*Phi gives the iterated conclusion without extra distribution convolution. Found an omitted dimension factor in the explicitly fixed constant: |gradient h|<=sqrt(n) max_i |partial_i h|. Replaced C_alpha=sum binomial by sqrt(n) sum binomial; theorem is unchanged. This closes the estimate also for n>1. Reader's touched delta was contract enrichment, but the present proof correction is mathematical.

Disposition: amended_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-lem-approximate-identities-in-schwartz-space-converge-in-tempered-distributions`; repair confidence 1.

### `lem-schwartz-deconvolution-along-dyadic-dilations`

Read all five steps, exact Fourier automorphism/convolution/derivative interfaces, and complete Bownik Lemma 7.3 proof pp.43–44 from the local PDF after web retrieval failed. Nonzero mean gives a fixed zero-free ball; normalization and dilation yield s0=1/delta for the original kernel. The cutoff equals one on the unit ball, has compact support strictly inside the zero-free ball, and telescopes. For j>=1 its support is annular; j=0 is separately bounded. Fourier product differentiation followed by higher Schwartz decay supplies 2^{-jnL}; input norm order increases by n+1 on each Fourier passage. Checked xi=0 and smaller s0. Reader corrected j=0, explicit cutoff and the decay factor in the conclusion; no remaining defect.

Disposition: accepted_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-deconvolution-zero-index`; `frontier-39-analysis-30-5a-b5-deconvolution-decay-factor`; repair confidence 1.

### `cex-a-normalised-cube-indicator-is-not-a-hone-atom`

Closed cube convention agrees with the exact multidimensional rectangle Definition; its support is Q, volume positive, and Countable Choice supplies box measurability/measure. Integral |Q|^{-1}1_Q equals 1, so no witnessing cube can restore zeroth cancellation. The refuted claim is sufficient size/support for atomhood, without conflating this with H1 nonmembership. Reader correctly removed the false equivalence and inherited choice; no further defect.

Disposition: accepted_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-indicator-equivalence`; `frontier-39-analysis-30-5a-b5-indicator-choice`; repair confidence 1.

### `cex-an-hone-atom-need-not-be-smooth`

Reviewed all three steps against atom, closed cube, box-measure and topology interfaces. Disjoint halves have equal measure and slice is null, giving integral zero and the required essential bound. At every point in the relative interior of Q intersect H, opposite approach sequences have values +/-|Q|^{-1}, so continuity fails regardless of the slice value. Outside that slice no global-hyperplane assertion remains. Checked n=1, measurable representative support and Countable Choice. Reader's localized discontinuity statement and box description repair the original overclaim.

Disposition: accepted_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-nonsmooth-slice`; `frontier-39-analysis-30-5a-b5-nonsmooth-half-box`; `frontier-39-analysis-30-5a-b5-nonsmooth-choice`; repair confidence 1.

### `def-grand-maximal-test-class-of-order-n`

Checked the finite weighted seminorm, zero and zero-mean tests, normalized dilations and closed aperture-one cone. P_N is finite on Schwartz space; F_N contains zero and is closed under negation/conjugation. Larger N increases weight and derivative range, giving F_{N'} subset F_N and M_{N'}<=M_N with possible infinity. DKKP printed p.60 equation (1) was read; its derivative range is N+1 as authored. Explicit source cutoffs are recorded separately from the proof's qualitative N0. All suppliers already reviewed. No defect; risk review only.

Disposition: risk review only; no touched obligation. 

### `lem-grand-maximal-function-is-dominated-by-the-tangential-maximal-function`

Reviewed complete proof, deconvolution, normalized dilations and parameter-interchange Statement, plus complete Bownik Lemma 7.5 pp.45–46. The Schwartz family H(w)(z)=eta_t(w)varphi_{st}(x-w-z) has integrable polynomial seminorm majorants, justifying associativity and finite-sum pairing followed by continuity. For finite tangential values the integral is controlled by s^{-T}, and nL'>T sums the dyadic decay; infinite values are immediate. Aperture uses psi(w+v), giving the exact convolution at y=x+tv. Scaling its S_M bound suffices even without membership in F_N. Reader's translate/interchange repairs are sound. Refuter:5:3 is confirmed nonfatal: replaced the literal vertical tab before arphi in F2 by the intended LaTeX varphi command; no mathematics or interface changed.

Disposition: amended_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-grand-aperture-translate`; `frontier-39-analysis-30-5a-b5-grand-interchange`; repair confidence 1.

### `lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable`

Reviewed all four steps and previously opened exact translate/dilation, topology and smooth-convolution interfaces. Parameter differences require one extra polynomial weight and derivative; local t in [a,b] excludes zero. Continuity of f converts Schwartz convergence to scalar joint continuity. A closed-cone endpoint witness moves slightly inward without lowering the value past lambda. The same witness is then admissible on a neighborhood, including zero-mean grand tests. Suprema may be infinite; strict superlevels at lambda=0 follow by a countable union of positive-level sets and negative levels give the whole space. This establishes Borel measurability. Touched delta is boundary-contract enrichment; no item repair or new defect needed.

Disposition: reviewed_no_defect. 

### `def-real-hardy-space-by-a-radial-maximal-function`

Read the definition and full norm-properties argument, plus exact positive-ball-measure and complex Lp norm suppliers. Membership includes finite-a.e. radial maximum and finite p integral. Under Countable Choice, lower semicontinuity turns an a.e.-zero radial maximum into the identically zero function; the normalized mean-one approximate identity then forces f=0. Homogeneity and Minkowski cover p>=1, while elementary (u+v)^p<=u^p+v^p covers 0<p<1. Kernel held fixed; later equivalence theorem supplies independence. No defect; risk review only.

Disposition: risk review only; no touched obligation. 

### `lem-grand-maximal-function-controls-admissible-radial-and-nontangential-maximal-functions`

Reviewed all three steps and previously opened test-class, distributional pairing, dilation and measurability interfaces. Translation G(w)=varphi(w+gamma) has P_N(G)<=(1+|gamma|)^N P_N(varphi), and convolution at y=x+tgamma equals that at x with G. Its normalized test gives domination for every N>=1, including closed cone endpoint and infinite values. Radial and norm consequences have correct direction. Found only F2's undefined left variable P in P_N(P)=sup derivatives of Psi; corrected it to P_N(Psi). This nonfatal notation correction is the sole current item edit; reader touched the contract only.

Disposition: amended_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-lem-grand-maximal-function-controls-admissible-radial-and-nontangential-maximal-functions`; repair confidence 1.

### `lem-tangential-maximal-function-norm-bound`

Reviewed all three steps and exact finite-exponent centered maximal bound, ball measures, Holder and bounded-set volume statements. Ball inclusion gives ratio (1+|y|/t)^n, canceled exactly by Tq=n. Nonnegative extended averages are legitimate even without local integrability. When the aperture norm is finite, g belongs to L^{p/q} with 1<p/q<infinity and thus L1loc, permitting the supplied maximal theorem. Taking q-th roots renames its constant. Zero and infinite right sides are handled; tangential maximum is lower semicontinuous as a supremum. Reader correctly restricted the citation from unsupported infinity to finite exponents. Complete CUW section 3.1 pp.8–11 was consulted.

Disposition: accepted_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-lem-tangential-maximal-function-norm-bound`; repair confidence 1.

### `lem-truncated-maximal-function-estimates`

Read all six steps and every exact supplier interface, comparing with complete CUW sections 3.1–3.2 pp.8–15. Finite-order distribution bounds at small/large t and L>max(n+M,N0+n/p) give integrable spatial decay for each fixed epsilon. Weighted deconvolution has s<=1 so st remains in the allowed range; the weight ratio is <=s^{-L}(1+|w|/t)^L and nL'>T+L sums the coefficients uniformly in epsilon. Parameter-interchange justifies pairing/series passage. The averaging estimate uses extended integrals, then finite p/q>1 where necessary. Strict good-set inequality forces finite positive saturation; translated derivatives and the explicit sqrt(n) gradient constant give a small-ball lower bound. Untruncated clause explicitly assumes finiteness and the zero case is immediate. Reader's associativity and citation corrections close the argument without appealing to the source's incorrect simplified distribution-growth formula. No further defect.

Disposition: accepted_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-lem-truncated-maximal-function-estimates`; repair confidence 1.

### `lem-an-hp-atom-has-uniform-hp-quasinorm`

Read every near/far and pairing step with exact Taylor, box measure, monotone convergence and bilinear test interfaces. The closed circum-ball includes vertices. Cone centers satisfy |y-x|<=t; small t uses decay, large t uses centered Taylor cancellation and r<=(1+sqrt(n)/2)(t+|y-zeta|). pm=p(n+s+1)>n even when n(1/p-1) is an integer, so shell summation converges uniformly in cube size and N>=n+s+1. Pairing estimates have exponents (s+1-X)/n>0 and -X/n<=0, yielding a uniform global Schwartz seminorm. C0 is independent of the kernel and C1=2^N P_N(varphi)C0 depends on it. Reader correctly closed the circum-ball. Read Williams Prop.7.35 complete near/far proof pp.40–41 for comparison; its square-function normalization does not remove the present kernel dependence.

Disposition: accepted_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-lem-an-hp-atom-has-uniform-hp-quasinorm`; repair confidence 1.

### `rem-riesz-transform-characterisation-of-real-hone`

Read the entire recorded-result remark, source qualification and exact local Riesz/L2 interfaces. Read Williams Prop.6.10(a)–(b), printed p.26: the classical H1 norm is equivalent to L1 plus Riesz (Hilbert in n=1) norms and Poisson radial norm. This is explicitly external, not locally proved or used as a supplier; for non-L2 inputs the cited singular-integral extension supplies meaning and agrees with L2. No local proof completion or Poisson-kernel proof is claimed. No defect; risk review only.

Disposition: risk review only; no touched obligation. 

### `thm-maximal-function-characterisations-of-real-hardy-spaces`

Reviewed all four full steps against the just-reviewed maximal comparison/truncation suppliers and exact measure, Holder and monotone-convergence statements. With q0=p/2 the maximal input exponent is exactly 2 for every finite p>0; the constant is C_{n,2}^{1/q0}. Lambda=2^{1/p}C1 makes the bad-set p-integral at most half the finite total. Truncation uses an f-dependent L and auxiliary N' only to establish finiteness, uniformly in epsilon; monotone convergence then permits the fixed-order a priori argument with constants independent of f. Every direction 1=>3=>1, 3=>all apertures, and some aperture=>1 is proved. A common admissible N proves kernel independence. Quantitative reciprocal mean/zero-free Fourier data are retained in constant dependence. Complete CUW pp.8–15 was read and checked rather than adopting source typos. Reader's powered constant and nonvanishing corrections are sound.

Disposition: accepted_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-maximal-powered-constant`; `frontier-39-analysis-30-5a-b5-maximal-nonvanishing-data`; repair confidence 1.

### `cor-real-hardy-space-equals-lp-for-p-greater-than-one`

Read all three proof steps and exact radial-kernel domination, real/complex Lp duality, separability, Borel-completion and weak-star sequential compactness suppliers. The radial integrable majorant gives the forward bound. Normalizing Phi=varphi/integral(varphi) gives C2=|integral(varphi)|^{-1}. Bounded approximate convolutions in Lp have a weak-star convergent subsequence against separable complex L^{p'}; Borel restriction is countably generated and completion preserves its classes, with Countable Choice for representatives. Bilinear complex duality matches the Schwartz pairing, and every test is in L^{p'}. The ultrafilter lemma is explicitly assumed for sequential compactness; p=1 and infinity are excluded. Weak-star lower semicontinuity gives the bound. Reader's completion/complex-duality/normalization repairs are complete; no stronger choice is silently inferred.

Disposition: accepted_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-lp-borel-separability`; `frontier-39-analysis-30-5a-b5-lp-complex-duality`; `frontier-39-analysis-30-5a-b5-lp-mean-constant`; repair confidence 1.

### `lem-calderon-reproducing-formula-for-the-hardy-decomposition`

Reviewed all four steps and exact kernel-flatness, approximate-identity, maximal-characterization, Holder, volume and Chebyshev statements. Positive-order moments of varphi vanish while its mean is one; psi has also zero mean. The two-scale convolution factors telescope in S' by parameter-interchange, giving the one-sided identity for arbitrary distributions. For finite-p Hardy inputs, kernel independence supplies the reproducing-kernel radial norm. At p>=1, Holder gives uniform decay 2^{jn/p}; at p<1, each finite-measure grand-superlevel misses every sufficiently large ball, yielding a uniform coarse-scale convolution bound tending to zero. This proves the two-sided identity with the stated iterated-limit convention; constant f=1 demonstrates its failure outside Hp. Read DKKP pp.62–63 for this identity; no absolute convergence is claimed without the later quantitative hypotheses. Reader's zeroth-moment and kernel-independence corrections are justified.

Disposition: accepted_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-reproducing-positive-moments`; `frontier-39-analysis-30-5a-b5-reproducing-kernel-independence`; repair confidence 1.

### `lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions`

Reviewed all four steps and the complete uniform atom pairing/norm supplier, exact bilinear convolution and monotone-convergence interfaces. For p<=1, ell^p is contained in ell^1, so the common C^{s+1} Schwartz seminorm controls the absolute scalar sum and proves continuity of its distributional limit. Each fixed convolution converges; taking suprema gives maximal domination by the nonnegative atomic sum. The p-power inequality and monotone convergence, not an incorrect reverse Fatou bound, integrate that sum. Applying the same bound to tails proves Hp convergence. Checked p=1, zero coefficients/atoms and arbitrarily small/large cubes. Reader's monotone-integration repair closes the proof.

Disposition: accepted_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions`; repair confidence 1.

### `ex-a-normalised-mean-zero-hone-atom`

Reviewed three verification steps and all already-reviewed suppliers. The chosen closed cube contains the actual support; disjoint strict halves are measurable boxes with measure |Q|/2 and the middle slice contributes zero. Size and mean conditions hold pointwise/a.e. as required. The uniform atom lemma at p=1,s=0 supplies C1(n,1,0,N,varphi), with fixed kernel/order and Countable Choice. Cube translations and coordinate cuts do not change the bound. Reader's closed-support and box-face corrections are sound; the page's separate dimensional-only assertion is deferred to its routed finding.

Disposition: accepted_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-ex-a-normalised-mean-zero-hone-atom`; repair confidence 1.

### `lem-hardy-calderon-zygmund-level-decomposition-produces-atoms`

Read every line of all six steps, F1–F9 and exact suppliers; read complete DKKP pp.63–72, especially Lemmas 2,4,5 and their proofs. Independently checked the changed greedy cover rather than treating the source's sorted maximal cover as certification. Shell partition covers nonzero integrands a.e.; finite-measure superlevels are proper. Local bounds use explicit rescaled tests at cone scale 2a_k. Two distance boundaries leave at most four scale terms; full blocks telescope with supported endpoints. Absolute pairings decay as 2^{-k(K+1-n/p)} for k>=0 and 2^{kn/p} for k<0. F9's local real-L2-duality, phase-test and countable-gluing argument supplies bounded densities without an unstated L1-duality theorem. Eligible neighborhoods have rho ratios <11 and disjoint rho/8 balls give 231^n multiplicity, proving the greatest eligible index exists. The arbitrary-S localization leaves two boundary scales. With rho*=rho_j/7, high-scale meeting excludes every nonneighbor without presupposing its radius; the scale gap is <log2(112), hence at most seven. The support lies in a closed ball strictly smaller than 7B_j, so distributional moment tests pass to the bounded-function limit. Cube normalization includes the factor (2^n/omega_n)^{1/p}; layer cake gives ell^p coefficients. Zero f uses the empty family. Countable Choice covers actual measure/density and representative uses. Reader's partition, radius and density repairs are complete; no prerequisite is missing.

Disposition: accepted_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-level-partition-index`; `frontier-39-analysis-30-5a-b5-level-neighbor-cutoff`; `frontier-39-analysis-30-5a-b5-level-bounded-density`; repair confidence 1.

### `thm-atomic-characterisation-of-real-hp`

Read all four steps and exact complete level-decomposition and summation suppliers, already independently reviewed. Since n is an integer and s=floor(n/p-n), n+s+1=floor(n/p)+1, so the stated N meets both suppliers' thresholds. For the designated reproducing pair use the earlier explicit flat-kernel construction at the fixed n,K; its data are fixed before the level estimate, so constants can be recorded in terms of n,K. Summation gives every-representation upper bound, then infimum; level decomposition gives an existing representation and the reverse bound. Tail estimates prove Hp convergence for every ell^p atomic representation. Zero admits zero coefficients/atoms or the empty family. Both directions and constant powers are correct. DKKP Theorem 1 p.61 and closure p.72 support the route. Touched delta is contract enrichment; no new mathematical defect or item edit.

Disposition: reviewed_no_defect. 

### `rem-real-hp-is-quasi-banach-below-one`

Read the full witness and completeness argument with exact flat-function smoothness, Newton–Leibniz, Taylor and Fatou suppliers. Derivative bump is nonzero, compactly supported and cancels through s; radial near/far estimates give pq>n and a positive finite norm. Pointwise reverse triangle for the maximal operator yields M(a+a_y)>=|m-m_y|. Two disjoint translated cubes capture more than 2^p times the norm integral as their cross tails vanish, proving failure of the ordinary triangle inequality for every 0<p<1 and the fixed kernel. For completeness the Cauchy subsequence increments have summable ell1 atomic coefficients and a common Schwartz seminorm, so the distributional sum is continuous. Fixed convolution limits give M(f-f_l)<=liminf M(f_k-f_l); Fatou and Cauchy control prove convergence in Hp. No Banach duality below one is used. Reader's smoothness, continuity-of-sum and maximal-liminf additions close the argument.

Disposition: accepted_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-quasibanach-sum-continuity`; `frontier-39-analysis-30-5a-b5-quasibanach-maximal-liminf`; repair confidence 1.

### `thm-calderon-zygmund-operators-map-hone-to-lone-under-cancellation`

Reviewed all six proof steps, F1–F9 and exact CZ definition, Holder/Hormander, truncation, density, L1 completeness and subsequence statements. The current principal-value definition guarantees a sequence on Schwartz tests, not all radii; the repaired theorem states precisely that sequence-based conclusion. Holder gives Borel/local-integrability; truncated kernels are in L^{p'} for finite p>=1. Weak/strong maximal bounds and dense smooth tests prove a.e. sequential limits; dominated L2 convergence plus density identifies them with T on L2. Atom near integral is controlled by B and cube volume; off-support mean subtraction plus Hormander/Tonelli bounds the far integral by C_delta A2'. Atomic ell1 summation converges in L1 and weak differences converge in measure, whose unique limit supplies the H1 extension independently of representation. Finite atomic sums give density and uniqueness. Any full-radius limit is conditional on the extra dense-test convergence hypothesis. Reader's sequence qualification and identification argument are necessary and complete; no sharply cut kernel is falsely assigned the original Holder bound.

Disposition: accepted_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-cz-sequential-principal-value`; `frontier-39-analysis-30-5a-b5-cz-sharp-cutoff-holder`; `frontier-39-analysis-30-5a-b5-cz-limit-identification`; repair confidence 1.

### `thm-fourier-transform-decay-of-real-hardy-space-elements`

Reviewed all three steps, atomic/moment interfaces, exact bilinear Fourier transpose, L1 Fourier continuity, Fubini and dominated convergence. Centered exponential Taylor cancellation gives min(ell^{-X},|xi|^{s+1}ell^{s+1-X}), X=n(1/p-1), uniformly <=C|xi|^X because s+1>X, including integer X and p=1. Ell^p coefficients lie in ell1 and can be chosen bounded by the Hp norm. Local uniform summation gives continuity; the global |xi|^X Schwartz-integrable majorant identifies the full regular distribution, excluding an extra distribution at zero. Each atom's little-o plus an eta/2 tail and eta/2 finite sum gives the stated limit. Read complete Bownik–Wang Lemmas4–5, Theorem1 and Corollary6, pp.2302–2304, from the local PDF; A=2I has rho comparable to |xi|^n. Reader's global identification and epsilon-budget repairs are sound.

Disposition: accepted_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-fourier-origin-identification`; `frontier-39-analysis-30-5a-b5-fourier-epsilon-budget`; repair confidence 1.

### `cor-integrable-hardy-functions-have-vanishing-moments-in-the-atomic-range`

Reviewed all four steps and exact Fourier decay, integral continuity, dominated convergence and Peano Taylor suppliers. The zeroth weighted assumption gives f in L1, and each higher integrable weighted moment dominates the corresponding exponential difference quotient; iteration yields continuous derivatives through s. If the lowest nonzero derivative has degree m, the complex homogeneous Taylor polynomial is nonzero on some unit direction and forces |hat f(t eta)|>=ct^m. This contradicts little-o(t^gamma) for m<=floor(gamma), including m=0 and integer gamma=m. The derivative identity yields all stated moments, without confusing local integrability with absolute integrability of weighted moments. At p=1 the atomic ell1/L1 embedding supplies the automatic global hypothesis; at p<1 it remains explicit. Reader's hypothesis and derivative-proof repairs are complete.

Disposition: accepted_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-moments-global-hypothesis`; `frontier-39-analysis-30-5a-b5-moments-classical-derivatives`; repair confidence 1.

### `ex-hilbert-transform-of-a-hone-atom-is-integrable`

Reviewed all three verification steps, exact kernel estimates and L2 bounds, and the complete current batch-6 Hilbert/Riesz CZ supplier plus its manifest and contract. Its skew-adjointness/odd-kernel calculation has the correct sign and complex conjugation; disjoint compact supports make Fubini absolute, and distribution-injectivity proves off-support equality a.e. Thus F1 has the precise representation needed. Near integration is <=(2sqrt(n))^{n/2}B; mean subtraction, standard Holder with delta=1 and Tonelli bound the far integral by C_n A2'. The atom lies in L2 as well as H1, so the general extension agrees with its L2 image. The direct bound is dimensional because these specified kernels have delta=1; it does not depend on the arbitrary Hardy norm kernel. Reader's choice/Tonelli/L2/off-support supplier additions are justified. The batch-6 dependency is recorded for Step5b, without editing the producer.

Disposition: accepted_repair. Defect ledger: `frontier-39-analysis-30-5a-b5-ex-hilbert-transform-of-a-hone-atom-is-integrable`; repair confidence 1.

### `cex-an-lone-function-with-nonzero-integral-is-not-in-real-hone`

Read all five steps and previously opened exact moment corollary, atom, L1 completeness and integral-pairing suppliers. A nondegenerate closed cube has positive finite volume under Countable Choice. Every H1 atomic ell1 series converges in complex L1; its Schwartz tests agree with the distributional limit, establishing H1 subset L1. The moment corollary at p=1,s=0 contradicts a nonzero integral and the indicator makes inclusion strict. Finite sums of atoms also have zero integral, with no smoothness or positivity assumption. Complex absolute pairing bound follows by applying the real Holder bound to |u|,|v|. All boundary cases are correct. Touched delta was contract-only enrichment; no item edit or new defect.

Disposition: reviewed_no_defect. 

## Page obligations

A-page `real-hardy-spaces-maximal-functions-and-atoms`: accepted the four reader corrections with the exact current item hypotheses and argument reviewed above; no new prose edit. B-page `real-hardy-spaces-maximal-functions-and-atoms-examples`: reader:5:1 and refuter:5:1 confirm one fatal choice-scope defect; refuter:5:2 confirms a separate fatal kernel-constant overclaim. Replaced the choice-free claim by Countable Choice and made the atom bound uniform in cubes at fixed kernel and order. No extra touched/page obligation is invented for this finding-routed B-page.

The malformed F2 formula finding refuter:5:3 is confirmed nonfatal and repaired. Every finding references exactly one closed defect row; the duplicate choice finding shares its one row with explicit evidence.

## Cross-batch and published impacts

The current owned consumer `ex-hilbert-transform-of-a-hone-atom-is-integrable` cites current batch-6 supplier `lem-hilbert-and-riesz-transforms-are-calderon-zygmund-operators`. Its full current proof, relevant citations, producer manifest and contract were independently reviewed. The exact off-support representation meets the compact-L2 atom hypotheses. Producer raw SHA-256: `9de24684f4d4fa6ced439df2c803eb64e206ba0e35d38233e6079ba20453855b`. Updated the owned cross-batch input; supplier stays read-only.

The reader changed atom-order/choice commentary and maximal-theorem quantitative constant dependence. Direct outside item/reference consumers found on current disk are all batch 6: `thm-bmo-defines-a-bounded-functional-on-hone`, `lem-linfinity-bmo-functions-dualise-hone-boundedly`, `lem-finite-atomic-sums-are-dense-in-hone`, `lem-bmo-functions-pair-uniformly-with-hone-atoms`, `lem-bmo-classes-are-determined-by-their-atom-pairings`, and `lem-ltwo-atoms-have-uniform-hone-quasinorm`. Their exact supplier-use paragraphs and current Statements were read. They use p=1,s=0 and retain fixed-kernel/order constants, so the order and quantitative changes require no surgical repair. The first three explicitly assume AC or Countable Choice. The pairing lemma uses the given integrability and cancellation directly; no choice-cost defect is confirmed there. The atom-pairing injectivity lemma constructs a mean-zero phase test using cube averages and invokes the current BMO definition; its owner should verify the box-volume and countable-measure choice scope during Step5b. This is an out-of-scope review alert, not a certified defect, and no batch-6 content was edited. No next-hop change is made.

No defective published carrier was identified in the supplier/consumer uses reviewed here. Published content and the published-consumer ledger were not changed. No withdrawal is proposed or removed. Local proof/Facts corrections leave all four item Statements unchanged, so they create no further mathematical consumer repair.

## Sources and limits

Primary source sections actually read in full for this adjudication:

- [DKKP, A New Proof of the Atomic Decomposition of Hardy Spaces](https://people.math.sc.edu/pencho/Publications/DKKP-Sozopol-2016.pdf), section1.2 and Lemma1 pp.61–62; reproducing identity and complete level/localization arguments pp.63–72. Retrieved successfully by web and curl, then read via PyMuPDF. Its sorted maximal cover and stronger pointwise convergence claims were not substituted for the current greedy-cover/distributional proof.
- [Bownik, Anisotropic Hardy Spaces and Wavelets](https://pages.uoregon.edu/mbownik/papers/12-memo0781.pdf), complete Lemma7.3 pp.43–44 and Lemma7.5 pp.45–46, using the existing locally retrieved PDF after the web open failed. The local PDF was opened and the actual printed sections read; no source availability is inferred from a URL alone.
- [Cruz-Uribe–Wang, Variable Hardy Spaces](https://arxiv.org/pdf/1211.6505), complete relevant sections3.1–3.2 pp.8–15 in the existing local PDF. The authored proof corrects the source's oversimplified distribution growth and does not claim variable-exponent results.
- [Williams, Notes on Harmonic Analysis](https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf), Proposition6.10(a)–(b) p.26 and Definition7.34/complete Proposition7.35 proof pp.40–41, read in the existing local PDF. Riesz equivalence remains explicitly external.
- [Bownik–Wang, Fourier Transform of Anisotropic Hardy Spaces](https://pages.uoregon.edu/mbownik/papers/50.pdf), complete Lemmas4–5, Theorem1 and Corollary6 pp.2302–2304 in the existing local PDF. The current isotropic proof was checked independently.

Every assigned item was read in the task's dependency order, and every declared outside supplier interface was opened for its actual Definition/Statement. The complete current batch6 Hilbert/Riesz producer proof, relevant contract and manifest were additionally read. This is not a recursive audit of every transitive published proof, nor independent validation of every background bibliography locator. No mathematical uncertainty remains in the owned proofs; the outside choice-scope review alert above belongs to batch6/Step5b.

## Final local checks and handoff

- Exactly 33 owed decisions: 28 touched items, one A-page, one reader finding and three refuter findings; no extra obligation was created. Twenty-five touched carriers accept/amend mathematical repairs, while three unchanged item carriers use `reviewed_no_defect`, `change_kind: audit_enrichment`, and empty defect IDs.
- Appended 54 closed defect rows at `caught_at_stage: 5a-adjudicate`, one per recorded confirmed defect. All referenced rows match their subject; duplicate choice findings share one row. No mechanical failure generated a defect row.
- Synchronized existing batch5 manifest mirrors with current claims, dependencies and provenance/source fields, preserving all 33 IDs and both pages. Existing contracts were updated only for exact repaired formulas/claims and complete risk reviews. No new items/pages or published edits.
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-5.proof-contracts.json --strict`: 33/33 items, zero errors/warnings.
- `node tools/content-policy.mjs research/frontier-39-analysis-30-batch-5.pages.json`: 33 scoped items, zero errors/warnings.
- Explicit four-item reflow, then `node tools/tsx-run.mjs tools/precheck.mts` on the four changed item paths: four passes, zero failures. Reflow only altered introductory wrapping in the approximate-identity item.
- `node tools/rendercheck.mjs` on the four changed items and both assigned pages: six files, real KaTeX and renderer YAML parsing successful.
- Risk report was first run without `--require-reviewed`, all current proofs/evidence read and specific reviews completed before moving to higher levels, then rerun with `--require-reviewed`: zero errors, 33 items.
- Final required single batched proof-layout command on all four changed item paths: four items, 18 steps, zero defects. No item was edited after this final layout check.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`: refreshed/deduplicated after the owned input update.
- Manually checked exact obligation coverage, unique IDs, closed ledger references, finding row counts, all 33 complete risk reviews and absence of stale judge records in the four locally changed items.

Local checks are not the engine gate battery. No judge/stamp/self-certification, dispatch, stage transition, publication, commit or push was initiated. No owned escalation or blocker remains. The engine must seal current decisions and run its gates; Step5b retains the cross-batch review/alert above.

Final local item raw SHA-256 values (evidence only, not engine decision stamps):

- `lem-grand-maximal-function-is-dominated-by-the-tangential-maximal-function`: `f342cffb22fc5d989c77d9dc6087f633934a6366c285c31fa520e6e06ef8ebf8`.
- `lem-approximate-identities-in-schwartz-space-converge-in-tempered-distributions`: `d31303594e1b1cacddddf07d0fd01c0e1e411c9a9b9d2f22581c1fe9ad231aef`.
- `lem-whitney-decomposition-of-proper-open-subsets-of-euclidean-space`: `78c228a3a26f8143204b2cd53dc80b646fd6187ad72f2669378c1ac8da21352b`.
- `lem-grand-maximal-function-controls-admissible-radial-and-nontangential-maximal-functions`: `8d8f37da2b8289eaeb9577ae3f72dfa0e9e15c2f0a9e425430e227295d5dc7bf`.
