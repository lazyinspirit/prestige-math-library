# Step 3a adjudication — batch 34

Run: `mathematical-statistics-foundations-37`; group: `batch-34`.

Scope: six touched obligations, one refuter obligation, and 28 required risk reviews in generated dependency order. Reader findings are empty. No agents were dispatched.

## Completed review checkpoints

### lem-finite-dimensional-golden-thompson-trace-inequality

Reviewed all seven steps and the SVD, normal spectral theorem and bounded-strip three-lines statements. Positive singular values make the analytic dual powers defined; the wedge bound and integrated positive-part inequality give the eigenvalue/Schatten comparison. The noncommutative telescoping limit is valid. p=1 and H=K=0 give equality. Tropp §3.3 (3.3.3), printed p.34, agrees; no commutativity or extra choice is assumed.

### lem-matrix-depth-gaussian-scale-constant-exists-uniquely

Reviewed both steps and the standard-normal density, continuity-from-below and IVT statements. The bounded positive even density gives continuity, strict increase and Phi(0)=1/2; total mass gives an upper endpoint above 3/4. Thus the positive quantile and its square exist uniquely. The standard-normal supplier explicitly assumes AC, which is carried in deps; no additional choice is used.

### lem-projection-slab-uniform-deviation

Reviewed all ten steps and every declared supplier statement/definition. Countable rational approximation approaches thresholds from above and includes atoms; finite halfspace arrangements bound slab traces, and the elementary packing and finite chaining estimates yield sqrt((s+1)/N). The bounded-difference MGF argument applies to bounded measurable suprema. Finite support union bound adds log(m/delta); increasing strict tails and complementation handle upper weak tails. Empty negative-threshold slabs and singleton support are covered. Step 3.1 has a harmless duplicated editorial phrase, with an unambiguous citation to step 2.1.


### lem-bounded-independent-matrix-bernstein-via-trace-exponential

Reviewed all five steps against the Golden–Thompson and spectral suppliers, product joint-law and Markov statements. The scalar second-moment upper bound v is uniform per summand; iteration therefore legitimately pays mv, without a claimed noncommutative product factorization. Series domination covers negative eigenvalues and odd powers. The optimized s is strictly within 3/R for v>0; v=0 gives all-zero matrices. Two-sided union and the explicit radius expansion are correct.

### alg-adaptive-truncated-covariance-estimator — refuter:34:1

Original raw source SHA-256 0455df05eb84efb556fb49d1ddde0b03c290020e5a38479f1db7415024f54cab matches both snapshots; the canonical three-carrier fingerprint is the routed 9be1fb23f13fa793f1faa0394c098530237ef660c6b94417e07e2e9c039a74ac. At beta=1.1, m=8, consecutive pairs yield median 0 while alternating pairs yield 50, so the original partition instruction was not single-valued. Repaired by calling the supplier on the original sample with k and its exact consecutive balanced sizes. Read the minimum-norm selector proof (zero span, regularization and Borel limit), spectral prerequisites and totality proof. Grid scales are positive; largest-index admissibility ensures output. Checked every actual item/reference consumer: totality, fixed-scale deviation, Lepski, heavy-tail theorem and intrinsic-variance counterexample; their uses remain sound and need no change. No outside consumer was found.

Verdict: `confirmed_fatal`: this changes algorithm outputs rather than omitting a readily supplied proof step. The routed nonfatal label is evidence only. Repair confidence: 1. Ledger row: `msf37-b34-adaptive-partition`.

### lem-covariance-median-pilot-exact-block-budget

Reviewed all four steps and cited supplier statements. Independence of deterministic disjoint blocks and finite covariance justify the exact block second moment T/b_j. Chernoff with a=7/18 and q=1/10 gives psi>43/150>2/7; both logarithmic series bounds and C_a^2=121/72 are correct. floor(m/k)>=m/(2k) and k<=3.5 beta+1 give the claimed radius 11 sqrt(T(beta+1)/m). T=0 is handled separately. Consecutive blocks agree with the repaired covariance algorithm; Countable Choice is inherited only via the Borel selector.

### lem-matrix-variance-intrinsic-dimension-at-least-one

Reviewed both steps and covariance, matrix variance, real spectral theorem, norm and Cauchy–Schwarz statements. The top eigenvalue is positive for nonzero PSD covariance; sigma_0^2 dominates the fourth moment of that unit projection, which dominates its second-moment square. Cauchy–Schwarz is applied to W^2 and 1 (a routine implicit substitution), legitimate by finite fourth moment. Nonzero covariance excludes division by zero; no coordinate independence is assumed.

### lem-oracle-truncated-covariance-and-vector-concentration

Reviewed all seven steps and exact matrix Bernstein interface. Rank-one clipping has bias <=theta sigma_0^2/4 and centered norm <=1/theta; covariance of clipped matrices is bounded in PSD order without commutation. Vector bias uses scalar Cauchy–Schwarz; dilation variance <=T and norm <=2/sqrt(theta). Fixed Chernoff s=theta is admissible and b=beta+log 2 gives ambient p failure; vector one-sided failure is (p+1)/2. All constants and the log2<0.7 series check hold. Values at Z=0 are defined; nonzero covariance makes sigma_0 positive. No pilot conditioning is used.

### ex-clean-heavy-tailed-finite-matrix-variance

Reviewed all four verification paragraphs and each measure/integral/p-series supplier statement. Positive normalized countable Dirac masses sum to one. Simple truncations and MCT give second/fourth moments zeta(4)/zeta(6) and zeta(2)/zeta(6); integrability and symmetry give mean zero. Rational p-series exponents 2,4,6 meet the supplier scope. The successive exponential-moment summand ratio tends to e^t>1 for every t>0, proving divergence. Scalar covariance is positive and the ratio is finite; this law asserts no estimator guarantee without further sample hypotheses.

### def-matrix-depth-covariance-estimator

Reviewed the complete definition, Gaussian beta and bounded/single-block classes and all Dirac/weighted-measure suppliers. Weak tails include ties; U is nonempty and beta positive. Empirical-law enrichment proves normalization with finite positive weights and adds exact prerequisites. Global and known-bound searches are distinguished and a Borel selector is required, not assumed from compactness alone. Exact pre-reader source recovered in .autopilot/mathematical-statistics-foundations-37/owner-e23-e26-accepted-source/def-matrix-depth-covariance-estimator.md; its raw hash matches pre, and current raw hash matches post. Delta only enriches justification of the unchanged empirical probability law; reviewed_no_defect, audit_enrichment, no defect row.

### lem-fixed-scale-truncated-covariance-deviation

Reviewed all three proof steps and oracle/pilot/intrinsic-ratio suppliers. Weight ratio is uniformly bounded on the pilot ball, making the perturbation pointwise and valid for a same-sample pilot. PSD sums and scalar Cauchy–Schwarz control the quadratic and cross terms. Homogeneous normalization, D>=d>=1, rho^2/d<=D and eta=Dt<=10^-16 justify all displayed bounds, including q<=288 eta^(1/4) sqrt(t). The perturbation bound 1184 eta^(1/4)+18752 sqrt(eta)<0.3 closes radius 3. The pilot block count is admissible. Shared failures cost h_p+1<=5p. Exact mean uses only the oracle matrix event; no trace condition is needed then.

### lem-huber-covariance-mixture-is-a-probability-measure

Reviewed both proof steps and the Gaussian Huber model and probability-measure definitions. Nonnegative coefficients summing to one preserve countable additivity by finite partial sums and nonnegative limits. Both epsilon=0 and epsilon=1 remain probability laws. Gaussian AC is inherited explicitly; mixture formation adds no choice. The target is the clean covariance, not a possibly undefined contaminant moment.

### cex-bounded-spectrum-covariance-lower-rate-must-be-capped

Reviewed both counterexample steps and bounded-spectrum, norm, Huber model and Archimedean interfaces. The Borel zero estimator has loss <=M^2 for every observation and every contaminant. Given any C_M>0, n=1, epsilon=0 and integer p>M^2/C_M make the proposed tail event empty. This correctly refutes an uncapped bound uniform over all p,n, while saying nothing against a low-ratio or capped lower result.

### cex-intrinsic-variance-alone-does-not-control-covariance-pilot

Reviewed all four counterexample paragraphs against the exact covariance algorithm and moment definitions. Finite support gives Sigma=diag(lambda_j), sigma_0^2=S_p<2 and unbounded trace. On distinct tail axes with at least one tail per block, every median lies in the compact convex hull; disjoint tail supports force a pilot norm growing with p and all residuals are clipped. A singleton exact-scale grid makes fixed/adaptive estimates coincide; their leading entry tends to zero. The growing beta_b,k_b,m_b,p_b family makes the ambient failure budget tend to zero while failure tends to one. Balanced consecutive blocks satisfy every event calculation, so the algorithm repair preserves the witness. No counterexample to the trace-aware current theorem is claimed.

### lem-adaptive-covariance-lepski-scale-reduction

Reviewed all three steps, totality and fixed-scale suppliers, plus exact pre-reader archive (hash 62c5f56e8cf53a9a414e42e6d0cde9f198df3a0a432435adbec57f300c630455); current raw hash matches post. The original 5d example was explicitly conditional and disclaimed unverified individual bounds, so it was not an unconditional false estimator guarantee. Current version replaces that illustration with a justified ambient-5p instance under the trace-aware lemma and makes matrix estimates measurable. First sufficient scale is in the finite grid and strictly below 2 sigma_0; triangle inequalities give error <18 sigma_0 sqrt(beta/m), including j*=bar j and a singleton grid. Shared events are union-bounded without independence and ceil(L_g) is exact. The sole logical consumer heavy-tail theorem uses these corrected interfaces and needs no change. Disposition: reviewed_no_defect, audit_enrichment.

### lem-matrix-depth-maximizer-exists-on-compact-classes

Reviewed all four steps and exact compactness/semicontinuity supplier statements. PSD norm-bounded matrices form a closed bounded nonempty Euclidean class. Sparse support equalities are closed and their finite union compact. Both empirical weak tails are upper semicontinuous, including ties; their directional infimum remains so. Maximum fibers are nonempty closed subsets of the compact class. Exact pre-reader source was recovered from reader-reader-34.attempt-1.log at character offset 876982 and matches the frozen pre hash; current matches post. The reader now explicitly identifies the bounded classes proved by the original argument, avoiding confusion with global noncompact argmax fibers. Actual consumers fixed-cap selector and comparison lemma use only this scope; Gaussian-depth lemma cites the definition; global existence is independently established by the selector cap. No outside surgical repair is required.

### lem-scaled-gaussian-covariance-has-depth-at-least-half

Reviewed both proof steps and Gaussian projection, standard-normal, beta and zero-integral supplier statements. Positive-variance normalized projections give exactly half in each weak tail because their boundary is atom-free. Zero-variance projections vanish almost surely, so both tails are one. Infimum over nonempty U is >=1/2 and Sigma=0 gives depth one. Gaussian AC is inherited. Published zero-integral supplier has an omitted ambient measure binding (owner alert separately); the applied nonnegative variable is on the specified Gaussian probability space and the elementary implication follows directly since E f=0 forces P(f>=1/k)=0 for every k.

### ex-block-sparse-huber-covariance-model

Reviewed both verification steps and class, mixture, spectral and Dirac interfaces. Only off-diagonal entries (1,2),(2,1) are nonzero, so the common block is size two in p=4. Eigenvalues 5/4,3/4,1,1 are positive and at most M=2. Epsilon=1/10 and delta_0 are admissible probability contaminations. This is a single-block model and makes no independent row-sparsity or unknown-mean guarantee.

### ex-dense-huber-covariance-model

Reviewed both verification steps and every cited definition/supplier statement. The explicit symmetric 2x2 covariance has eigenvalues 5/4 and 3/4, lies in F_2(2), and delta_(2,0) is a Borel probability law. The convex mixture is well-defined at epsilon=1/10. Clean Gaussian covariance remains the target; neither mixture covariance nor an estimator risk is falsely identified.

### lem-huber-covariance-ambient-action-tail-lower-bound

Reviewed all four proof paragraphs, complete current equalization proof, exact contamination-modulus definition and finite-product/measurability interfaces. The clean branch takes Q=P_Sigma for each target. The modulus branch selects an admissible pair with loss >omega/2 (omega positive there), equalizes one-observation laws under AC, and uses their identical iid sample laws. The pointwise triangle bound covers arbitrary matrix actions, including nonsymmetric ones; two tail events cover the sample space. Finite omega, M_0=0, epsilon=0 and epsilon=1 are correctly distinguished. No parameter-valued action restriction is imported.

### lem-huber-covariance-contamination-modulus-lower-bound

Reviewed all three proof paragraphs and the complete current Gaussian KL proof plus Pinsker/modulus statements. The explicit diagonal pair is positive definite in every defined class and has separation M^2 epsilon^2/16. Directional KL has scalar bracket log(1+r)+(1+r)^(-1)-1 with derivative r/(1+r)^2, yielding KL<=epsilon^2/16 and TV<=epsilon/sqrt(32). Zero epsilon gives the zero lower bound; epsilon=1 allows every pair. Exact pre-reader source from archived reader log offset 956326 matches frozen pre hash; current source matches post. The title now identifies the proved quadratic bound without claiming coefficient one. The prior coefficient-one title was unsupported by this authored proof; no assertion that all possible coefficient-one lower results are false is made. Statements and consumer interfaces remain unchanged.

### lem-huber-matrix-depth-estimator-operator-error

Reviewed all six numbered paragraphs, slab proof and Gaussian projection/beta/norm interfaces. Independent latent contamination labels realize the finite mixture; Hoeffding calculation gives n_1>3n/4 under a sufficiently large C_1. Conditional clean observations remain iid, so the uniform slab event is valid with failure delta. Depth comparisons cost n_2/n_1+2e<=5/12; Gaussian inverse-CDF arguments stay on [13/24,23/24], bounding positive-variance directions. In zero-variance directions positive candidate quadratic form would force depth zero, contradiction. The supremum loss is Lipschitz in the matrix and hence Borel. Only the comparison premise is needed; existence/measurability of selectors are separately supplied.

### lem-measurable-matrix-depth-maximizer-selection

Reviewed all seven paragraphs and every cited supplier statement. Joint upper semicontinuity follows from closed weak-tail predicates and directional infima. Compact projections make each finite depth-level cube-hit set closed. Finite-valued depth maximum allows Borel strata; ordered dyadic children give a deterministic nested-cube selector, including ties. Coordinate limits are measurable. The data cap 1+floor(max_i ||x_i||^2) ensures every outside PSD matrix has zero depth, including sparse classes via a supported top vector. Cap maximizers are global even when maximum depth is zero, and countable Borel pasting works. Global argmax compactness is neither needed nor claimed; zero sample is covered.

### thm-heavy-tailed-covariance-bound

Reviewed both proof paragraphs against exact repaired algorithm, pilot, fixed-scale and Lepski interfaces. D>=d>=1 guarantees the prescribed block budget. A common pilot event is paid once; N_+ true-centered concentration events need no independence. Fixed-scale bounds transfer to the adaptive estimate with radius 18 sigma_0 sqrt(beta/m). The exact ceil(L_g) grid satisfies N_+<=2L_g for L_g>=1, giving 1+h_p N_+<=5p L_g, including an exact singleton bracket. Nonzero covariance and finite fourth moments are explicit, as is Countable Choice; no contamination or intrinsic-only sample guarantee is asserted.

### lem-clean-block-sparse-gaussian-covariance-minimax-lower-bound

Reviewed all nine proof paragraphs and complete Gaussian KL/Fano/Le Cam proofs, finite-product KL and Pinsker statements, and kernel/classification typing. s=1 uses a diagonal p-pack or a binary p=2 pair; s>=2 uses finite greedy words on k=s-1 disjoint groups and an explicit rank-two star covariance. Hamming entropy bound, log pack >=9s log(ep/s)/80, at least three words, separation >a/8, and sample KL <=4 gamma^2 s log(ep/s) all check. Positive definiteness is retained by a<=M/4. Fano is applied to a discrete classifier metric, producing tail probability through nearest-target decisions, not by converting expected squared covariance risk to tail risk. Both classifier and arbitrary ambient Borel estimators are correctly typed. Finite packing introduces no additional AC.

### lem-clean-dense-gaussian-covariance-minimax-lower-bound

Reviewed all twelve paragraphs and every supplier interface. A 1/4 sphere net and sign MGF give at least half good sign matrices with norm<=16 sqrt(p); greedy Hamming deletion yields log pack>=p^2/20 for p>=16. Frobenius separation implies operator separation >=a/2; positive-definite perturbed covariances have sample KL<=2 gamma^2 p^2. Fano on discrete nearest-index classifiers supplies tails. p<=15 uses a binary pair and Pinsker/Le Cam. The capped extension retains the small-ratio result, zero-pads a k=floor(cn) Gaussian submodel for n>=2/c, and uses a fixed separated pair for n<2/c. Compression inequality holds even for nonsymmetric ambient actions. All p,n>=1 and fixed M>0 regimes close with one c_1<=1/16 and the stated a_M; no additional choice is introduced by finite codes.

### thm-huber-covariance-upper-and-lower-risk

Reviewed all three proof paragraphs against current Gaussian Huber model, dense comparison, Borel selectors, all-regime clean lower bound, modulus pair and ambient-action helper. Upper comparison applies to both global and beta M-bounded maximizers; the spectral supremum gives norm error and squaring yields the stated rate. The unrestricted-action lower theorem applies with finite omega<=4M^2 and M_0=a_M min(1,p/n). Since epsilon<=1, min(1,p/n) vee epsilon^2 equals min(1,(p/n) vee epsilon^2). Confidence/sample restrictions belong to the upper claim; the lower claim holds for all p,n and epsilon endpoints. Exact pre-reader source recovered in the archived reader log at offset 1031540 matches the pre hash, and reader-post source matched post before Alpha quoted the title. Reader title repair distinguishes high-probability upper from capped lower assertions without changing either Statement or proof.

### thm-huber-sparse-covariance-upper-and-lower-risk

Reviewed all three proof paragraphs, current selectors/comparison/lower suppliers and every combinatorial/calculus supplier statement. A difference of single-block matrices has an off-diagonal block supported on at most 2s coordinates and diagonal complement; a supported eigenvector or coordinate vector attains its norm. The reader explicitly supplies the T=empty,A=0 case. Supports extend to exactly 2s since p>=2s. Binomial count and log(k!)>=k log k-k give the stated support entropy; derivative theorem and FTC justify the antiderivative. Found an additional exact citation defect: thm-product-rule is a finite-set cardinality theorem, not a differentiation theorem. Replaced both its dependency and F9 link with thm-algebra-of-derivatives, whose product/scaling rules yield derivative(x log x-x)=log x on [1,2s]. Manifest and contract quotation synchronized. No Statement or Definition changes, and no consumer propagation is required for this citation repair. Lower result retains the supplier low-ratio condition and arbitrary ambient matrix actions; epsilon=0,1 and s=1 remain covered. Exact pre-reader archive matches pre hash; original reader-post bytes matched post before this amendment. Verdict amended_repair; repair confidence 1.

## Mechanical synchronization

Refreshed 13 stale contract quotations to exact current supplier sections after independent interface review. This covers the repaired consecutive-block algorithm and reader edits, plus the owner-declared MCT ambient data and product-KL index normalization; it records no new defect and no outside source edit.

## Published prerequisite alert

A-P, owner ambient-binding repair pending, 2026-10-14 batch34. Statement introduces f:X to [0,infinity] but not the measure mu or a sigma-algebra; Given only says nonnegative measurable f. The three proof paragraphs correctly establish both directions once an arbitrary measure space is bound. Owned consumer lem-scaled-gaussian-covariance-has-depth-at-least-half uses F4/step 2.1 on its specified Gaussian probability space; its required forward implication is independently closed by P(f>=1/k)<=k E f=0 and a countable union. Exact suppliers: prop-order-and-scalar-rules-for-the-nonnegative-integral, def-measure-null-set-and-almost-everywhere, def-nonnegative-lebesgue-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral. Strategy: bind arbitrary (X,A,mu) in Statement/Given, preserve the sound proof, then owner checks actual consumers and published-repair protocol. Raw SHA-256 d9b3290690080aa833a00a4def8f4801054b4c9f14bde1ef4ae3af8f543a3c82. Defect msf37-b34-published-zero-integral-ambient is deferred, not fixed. Evidence research/mathematical-statistics-foundations-37-alpha-batch-34-3a.md. Published carrier was not edited. Classification index moved the single stable ID A-R to A-P while retaining historical repair evidence; ledger editing acquired the exclusive lock, reread/merged, and released only its own lock. This is an owner declaration/protocol obligation, not an unmet substantial mathematical result; the local forward implication is elementary and independently checked.

## Final renderer repairs

Both reader-added dense/sparse titles contained an unquoted colon-space. The actual YAML renderer rejected them. Quoted their exact strings, preserving both claims and proofs; both touched verdicts are therefore `amended_repair`. Closed carrier-schema defects `msf37-b34-dense-title-yaml` and `msf37-b34-sparse-title-yaml` are recorded. The initial sparse-only precheck passed, but the initial renderer failed; subsequent results are recorded below.

## Source comparisons and evidence limits

- [Tropp](https://arxiv.org/pdf/1501.01571), §3.3 equation (3.3.3), printed p.34, supplies the Hermitian trace-exponential inequality; §6.6 Lemma 6.6.2, printed pp.97–98, supplies the centered Hermitian matrix MGF bound for positive parameters below 3/L. The local proof uses the stronger norm bound and uniform per-summand variance cap, enabling its direct scalar-majorant iteration. It does not invoke Lieb or falsely multiply noncommuting matrix MGFs.
- [Minsker–Wei](https://arxiv.org/pdf/1708.00502), §2.1 equation (4), §2.2 Lemma 2.1 and Theorem 2.1 (PDF pp.4–5), and §4.3 (PDF p.9) were read. The dyadic agreement rule and deterministic radius-eighteen transfer agree. The local balanced-block proof supplies its exact budget independently, and the current estimator guarantee retains the explicitly proved trace-aware condition and ambient probability factor. The two-axis witness was also independently checked: covariance diag(1,1/2), matrix variance 4/3 < trace-times-norm 3/2. No source claim substitutes for the authored concentration proof.
- [Chen–Gao–Ren](https://arxiv.org/pdf/1506.00691), Proposition 3.1 and §3.1 (PDF p.7), Theorems 3.1–3.2 (p.8), Theorems 3.6–3.7 (p.11), Theorem 5.1 (p.16), Lemma 7.3 and Theorem 7.1 (p.21), and the covariance comparison proof (pp.21–23) were checked. The local proof preserves both weak tails and treats singular zero-variance projections separately: those tails equal one, so the source’s blanket depth-equality wording is not imported. The dense lower result is capped over all dimensions, consistent with the independent zero-estimator counterexample; the sparse lower result retains its low-ratio premise. Ambient-action reduction and explicit Borel selector construction are proved locally.

Every required high-risk carrier was read in full; cited prerequisite Statements/Definitions and the specialized geometric-median, Gaussian-KL, Fano, Le Cam and Huber-equalization proofs were independently checked. This is not a whole-library audit of every transitive published proof. While reviewing, the batch-33 selector acquired explicit separability/enumeration suppliers; their exact definitions and the amended dense-sequence clause were checked, and its Statement is unchanged.

All six touched sources were compared with immutable pre/post fingerprints. Three exact preimages were in the existing owner-e23-e26-accepted-source archive (definition, Lepski, sparse theorem); the other three were recovered directly from the existing reader execution log, with raw SHA-256 equality to the frozen pre snapshots. The log was used only to recover exact historical inputs, not as mathematical evidence or a verdict. No historical delta remains unknown and no owner current-content exception is used. The earlier optional authorization question became unnecessary after this recovery.

## Checks and handoff

- Initial risk routing ran without `--require-reviewed`; all 28 HIGH/CRITICAL reviews were completed in the owning contract. Final required-review run passed (36 inventory carriers, zero errors).
- Final precheck: `node tools/tsx-run.mjs tools/precheck.mts items/alg-adaptive-truncated-covariance-estimator.md items/thm-huber-covariance-upper-and-lower-risk.md items/thm-huber-sparse-covariance-upper-and-lower-risk.md` — two phase proofs checked, zero failures; algorithm has no phase proof.
- Final rendercheck on those same three paths — all frontmatter and math parsed, zero errors.
- After final source edits, one batched `node tools/proof-layout.mjs` on those same three paths — 3 items, 6 steps, 0 defects. No later item edit or formatter ran.
- Strict batch proof-contract check — 36/36 checked, zero errors. Three heuristic broad-bracket warnings remain in the clean sparse/dense lower lemmas and slab lemma; their actual tagged inferences were reviewed and found sound, so no needless proof rewrite was made.
- Focused changed-carrier title/dependency mirrors and the exact algorithm Definition mirror passed using the renderer’s YAML parser.
- Defect-ledger append validation succeeded for each new row. The shared rendered ledger view was not regenerated; engine closeout owns its global freshness check. No row was created for a failed tool invocation. The direct `.mts` invocation failed before using the repository’s required `tsx-run.mjs` wrapper; the wrapped command above succeeded.

There are exactly seven routed decisions: two `reviewed_no_defect` audit enrichments (empirical probability-law justification and conditional Lepski illustration), two `accepted_repair` dispositions (bounded compactness scope and modulus title), two `amended_repair` dispositions (dense/sparse titles, with YAML quoting and the sparse calculus citation amendment), and one `confirmed_fatal` repaired partition finding. Each completed repair has confidence 1. No page decision is owed. Hash stamping, gates and judging remain with the engine.

No substantial local mathematical prerequisite is open. The published zero-integral ambient declaration/protocol repair remains deferred to the owner, and its historical repair/classification evidence remains preserved. The recomputed live status showed the run running, no workers in flight, batch 33 still missing native collection, and batch 34 awaiting this adjudication artifact; no runtime transition or unrelated repair was attempted.
