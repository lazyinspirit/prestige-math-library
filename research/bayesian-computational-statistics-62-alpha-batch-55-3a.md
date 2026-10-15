# Step 3a adjudication — batch 55

Run: `bayesian-computational-statistics-62`. Group: `batch-55`.

Scope: one obligation, `refuter:55:1`; no reader repairs, touched carriers or page obligations. Pre/post snapshot item, contract and manifest hashes agree; only the snapshot label differs. Reader found no defects. Refuter reports an omitted explicit constant cancellation in likelihood-ratio step 4.1.

## Completed review in dependency order

### `lem-finite-population-permutation-clt`

Reviewed Statement and steps 1.1–7.1 against the martingale CLT proof (including its unconditional Lindeberg hypothesis), conditional Hoeffding bound, SRSWOR variance and variance-clock definition. UI of squares supplies empirical variance and max/sqrt(N) control; clipping supplies uniform prefix means and squares; the Doob coefficients n/(N-k) give the telescoping normalized clock 1. On extracted deterministic rows the maximum increment bound is deterministic, so Lindeberg is eventually exactly zero, satisfying the unconditional supplier condition. The rowwise characteristic-function justification matches the actual supplier proof. Positive limiting variance and interior sampling fraction dispose of zero variance and endpoint cases; AC is carried. No defect found.

### `lem-general-measurable-finite-group-randomization-validity`

Checked every step against group/action, product measurability and finite-multiset rank statements. Right multiplication permutes the orbit list with multiplicity; invariance transfers the uniform-index rank law to the data law. Independent U remains independent after random action. Finite sums make joint ranks measurable. Trivial group/all ties give p0=1 and pU=U; t=0,1 are correct. No finiteness of the sample space or choice axiom is needed. No defect found.

## Sources and limits

Local cited supplier statements were read directly; the martingale CLT and conditional Hoeffding proofs were also checked because the finite-population argument adapts them. Stanford PDFs were inaccessible through the web reader, but downloaded successfully and were read with PyMuPDF: TR 2011-05 §3.4, Lemma 3.2, PDF p.21 and its full proof pp.30–33; TR 2011-09 §3.2, PDF pp.18–20. TR 2011-05 treats sampling fraction equal to marked fraction; the local proof independently allows distinct limits. TR 2011-09 requires assignment-wise centering; that stronger source premise must not be silently imported into the local weak-null claim.

All dispatched item reviews are completed below in the generated dependency order.

### `lem-hypergeometric-binomial-contiguity-for-permutation-samples`

Reviewed all steps and actual Lindeberg–Feller, Stirling, finite-product and moment suppliers. Independently differentiated the entropy expression: after subtracting H(N,s_N N), F_N(0)=F_N'(0)=0 and F_N''(0)=-1/[p_N q_N N(1-s_N)]. The uniform Stirling errors hold as all factorial arguments exceed cN on the high-probability central event. The third-order remainder is O_P(N^-1/2), the square-root factor is (1-s)^-1/2, and normal integration gives limit mean one. Equal nonnegative means give UI and the asserted hypergeometric-to-binomial contiguity direction. Interior p,s exclude boundary singularities; off-support mass has vanishing binomial probability. Refuter:55:1 confirmed nonfatal and repaired by explicit constant subtraction plus defining scalar entropy notation. Statement unchanged; no consumer-interface repair needed. TR 2011-05 PDF pp.21,30–33 checked; local unequal p,s generalization verified directly.

Verdict: `confirmed_nonfatal`, repair confidence 1. The original proof already states order-N cancellation, so the defect is a readily filled algebra gap rather than a false limit. The repair includes the missing constant in F_N and states its zero value at the expansion point. It also defines H(t)=H(1,t), preserving the entropy identities. No Statement/Definition, dependencies or manifest changes. The pre-edit raw SHA256 54306e3c06aee8e8394c7c0757ed4c8c21fb5ffa6275c4f2b2e9cba818a8cbcf matches both frozen reader snapshots. Canonical hashing of the snapshot typed carrier (item, contract and manifest hashes) gives exactly the scope observed_sha256 b2c4b3a23263d3dcb951922ecb6ecd584ef56246bd3c1eaaf09493c726563834. Thus the original finding is bound to the reviewed pre-edit carrier; no historical-byte uncertainty remains.

### `def-two-sample-order-r-u-statistic-and-first-projections`

Checked the complete Definition and Remarks, parameter supplier (r>=1, real measurable symmetric h), finite-coordinate measurability, Fubini and product-measure statements. Nonzero binomial denominators require m,n>=r as stated. L2 implies L1 under a probability law; projections are centered section-integral equivalence classes, with exceptional-set handling explicitly delegated to the following well-definedness lemma. Increasing index enumeration and block symmetry agree; no antisymmetry or null premise is silently imposed. No defect found.

### `lem-permutation-consistency-from-iid-mixture`

Read all four steps and exact contiguity, statistic and independence suppliers. Conditional on the component count, ordered P positions are uniform and distinct IID source values have precisely the same product law in the two schemes. The bounded conditional bad-event function transfers by the correct hypergeometric-to-binomial contiguity direction and boundedness. Both group sizes have fractions in (0,1); no symmetry of T is needed. The exact triangular weight p_N avoids the fixed-mixture rate restriction. Checked TR2011-05 Lemma3.3 PDF pp.21–22 and full proof pp.33–34. No defect found; AC inherited only from contiguity.

### `lem-permutation-mixture-coupling-for-two-sample-u-statistics`

Read the complete coupling construction and six steps, transposition-variance supplier proof and Cauchy–Schwarz/product/independence interfaces. Conditional labels give independent coordinate pairs; matching by labels is value-independent. Block antisymmetry centers the full permutation statistic for fixed arrays even with nonzero mixed-assignment means. The transposition counts are O(N^(2r-1)) and O(D N^(2r-2)), and chance of hitting a mismatch is at most 2D/N. The supplier coefficients sum to N/2, giving E[m f^2]<=CB(ED/N+ED^2/N^2)=O(N^-1/2). Bounds hold also D=0 and r=1. Exact p_N makes ED^2<=N/4 without a sample-fraction rate. TR2011-09 Lemma A.1 and proof PDF pp.34–37 checked; extra source centering/rate assumptions are replaced by the local transposition argument. No defect found.

### `lem-two-sample-u-statistic-projections-well-defined`

Checked every step against the exact Fubini and L2 Cauchy–Schwarz statements and the projection Definition. L2 implies L1 on the finite product probability space; measurable zero extensions of exceptional sections exist from Fubini, and square bounds follow by sectionwise Cauchy–Schwarz then Fubini on h^2. Centering gives Var(f)=Ef^2-(Ef)^2<=Eh^2, so the displayed centered bounds follow immediately from steps 2.1–3.1. Arbitrary measurable spaces need neither regular conditional distributions nor new choice. Zero kernel, r=1 and exceptional sections are covered. No defect found.

### `lem-pooled-mixture-projection-and-variance`

Confirmed a fatal missing hypothesis in the written Statement: direct P^r Q^r square-integrability and antisymmetry alone do not ensure finite pooled variance. For r=1, P=delta_0, Q density 3x^-4 on [1,infinity), h(x;y)=xy(x-y), the direct second moment is zero but pooled g_t(z)=mu_t z^2-nu_t z has infinite second moment (mu_t>0, EQ^4=infinity). Moved the all-independent-P/Q-assignment finite-second-moment premise from Facts/conditional continuity wording to the opening Statement, so all conclusions have the hypothesis used by the existing proof. Independently checked the common (P+Q)-null-set versions, finite polynomial expansion, L2 cross-integrals, sign relation and r^2/(1-p) scale. All direct reference consumers are local: the studentized Definition only uses scaling notation; the weak-null CLT already explicitly assumes all mixed moments; the finite rank example is bounded finite support (review completed at its ordered position). Page inventory has no mathematical premise use. No outside consumer needs repair. Statement repaired; proof unchanged.

### `lem-two-sample-u-statistic-hoeffding-decomposition`

Read all steps, coordinate-projection/Fubini/L2 suppliers, and Major Theorem9.1 with full proof (printed pp.76–78, PDF82–84). Confirmed a nonfatal counting error in step4.1: a fixed kernel-coordinate slot (e.g. first of two increasing indices) does not sample all selected observations uniformly. Replaced it by joint counting over sample subsets and selected coordinate slots: each a-subset has binom(m-a,r-a) extensions, giving coefficient binom(r,a)/binom(m,a), independently in both blocks. This proves the same decomposition including zero-order and r=1 cases. Operators are commuting L2 classes, Q annihilates integrated coordinates, and first projections have coefficients r/m and r/n. Statement and dependencies unchanged.

### `cex-weak-null-does-not-imply-mixed-assignment-centering`

Recomputed the finite example: means +/-1/2 give weak parameter 0, while PP versus PQ gives 1/2. Products have strictly positive variance because zero and a nonzero product each have positive probability for every assignment; independent blocks give positive kernel second moment. Direct projections x/2-1/4 and y/2+1/4 have variance3/16. At p=1/4 pooled mean=-1/4 gives projection -(z+1/4)/4 with positive variance. Thus all claimed boundary and moment hypotheses hold and the source mixed-centering inference is refuted, without claiming the broader permutation theorem false. No defect found.

### `cor-two-sample-permutation-exact-under-equal-distributions`

Read all three steps, the actual batch54 finite-group theorem and proof and both setup/rank Definitions. IID P^N rectangle probabilities are invariant under coordinates, with product-measure uniqueness extending this to the whole sigma-algebra. The finite measurable action and real studentizer, including zero-error branch, satisfy the supplier without asymptotic moments or positive variance. Multiplicity, all ties and independent U yield inclusive superuniformity and exactly uniform randomized ranks. No defect found.

### `thm-two-sample-u-statistic-permutation-clt-under-weak-null`

Checked all five proof stages and each current supplier, including the repaired pooled-moment premise and joint subset counting. Its Statement already imposes every mixed second moment, so the supplier Statement change needs no consumer edit. The exact mixture gives uniform kernel L2 bound. A common finite set of P/Q section integrals dominates g_N^2 by an integrable envelope, proving UI and variance convergence. The linear identity and empirical variance give scale r sqrt(N/n) S_g -> tau_p; zero empirical variance has vanishing probability. Remainder negligible jointly implies conditional negligibility by Markov. Two independent permutations and the L2 coupling give first/second moment convergence of the conditional CDF, then a finite grid gives uniform convergence. No mixed-assignment centering or sample-fraction rate is used. AC explicitly carried; no defect found.

### `thm-two-sample-u-statistic-projection-clt`

Checked all four steps and exact IID CLT, characteristic-function, Slutsky and triangular remainder statements. Independent first projections give variance r^2(sigma_X^2+p sigma_Y^2/(1-p)); deterministic coefficient convergence can be combined with marginal weak limits by Slutsky before multiplying characteristic functions. The mixed finite moment hypothesis bounds the fixed row remainder and makes sqrt(m)R negligible. Positive variances/interior fractions exclude singularities. Found a nonfatal choice-scope omission: AC was explicit in Facts [A1] and used in proof/suppliers but absent from Statement. Added AC to the opening Statement. Its only item consumer is the studentized validity theorem, whose Statement already assumes AC; no consumer change required. Repair confidence1.

### `cex-positive-kernel-second-moment-does-not-imply-nondegenerate-projections`

Recomputed all four steps for independent Rademachers: each product is a centered sign with square1, so every assignment has Eh^2=2, parameter0 and both section projections0. The preceding degenerate remainder result applies at proportional sample sizes (specified in step2.1), giving E U^2=O(N^-2) and sqrt(m)U ->0 in L2. The counterexample refutes the proposed implication, including the P=Q case, while preserving the separately required first-projection positivity hypothesis. No defect found.

### `thm-studentized-two-sample-u-statistic-permutation-validity`

Read all four steps, current numerator CLTs and repaired projection CLT Statement, exact-mixture consistency lemma, studentizer and Slutsky. Its all-mixed-moment and explicit AC assumptions satisfy the repaired supplier interfaces. The separate-group sufficient condition transfers by contiguity, then Markov yields conditional probability convergence; joint estimates instead have that conditional convergence as an express hypothesis. Numerator scale sqrt(m) is divided by sqrt(m)V_SE -> tau_p in permutations and ->a under sampling. The threshold squeeze orders t(tau+/-delta) correctly for negative t and finite grids give uniformity. Both zero-denominator events vanish. No unsupported transfer for joint estimators, extra sqrt(m) or new defect.

### `thm-two-sample-u-statistic-permutation-clt-under-mixed-centering`

Checked both steps and exact current general permutation CLT. Every assignment-wise zero mean and positive finite second moment includes its weak-null and moment assumptions; block symmetry/antisymmetry, AC, pooled nondegeneracy and proportional sizes match exactly. This is a sufficient specialization with the identical tau scale; it does not infer assignment centering from the weak null. No defect found.

### `thm-studentized-permutation-validity-under-mixed-assignment-centering`

Checked both steps against the current general studentized theorem and mixed-centered permutation CLT. The inherited sampling/kernel assumptions include every premise of the general weak-null theorem; remaining positive variances and direct/permutation consistency are explicitly the same. Exact triangular-mixture separate-group sufficiency is correctly restricted, and both scales use U/V_SE without an extra factor. Zero denominators inherit the general convention, AC is explicit. No defect found.

### `thm-studentized-wilcoxon-validity-under-heterogeneous-laws`

Read six complete proof stages and exact general studentization, algorithm, measurable-group and Chebyshev suppliers. The sign kernel includes ties, is bounded antisymmetric and has positive PP/QQ mixed moments because positive direct variance excludes point masses. Row/column mean squared errors <=1/n,1/m and bounded empirical moments prove direct variance consistency. On a fixed pool, SRSWOR row errors and group empirical d_i,d_i^2 converge uniformly to A_N; ordered-triple counting gives |EA_N-sigma_N^2|<=6/N, Var(A_N)<=18/N. This proves actual joint-estimator conditional consistency, rather than misapplying separate-group transfer. The true and conditional normal limits give vanishing rank atoms and asymptotically uniform ranks for all three alternatives; P=Q exactness remains without nondegeneracy. Both directions of the null equivalence follow from P(<)+P(=)+P(>)=1. No defect found. TR2011-09 Example3.1/Thm3.2 PDFpp.20–22 checked; local variance expression retains atoms rather than importing its continuous-law 1/12 formula.

### `cex-extra-sqrt-m-after-standard-error-studentization-diverges`

Checked all four steps and exact mixed-centered studentization, standard-error and finite-space Chebyshev suppliers. Rademacher differences have mean0, Eh^2=2, projections x,-y and all variances1. Sample variances k/(k-1)(1-bar(W)^2) are consistent, including exact triangular mixture and conditional permutation transfer via the theorem. For every M and epsilon, bounded-interval probability is bounded by the standard-normal mass of [-epsilon,epsilon]; continuity then makes it vanish after epsilon decreases to0, both under sampling and conditional permutation law. Divergence is of the absolute value, not signed convergence. Zero denominator is covered; sizes >=2 eventually. No defect found.

### `ex-exact-versus-weak-two-sample-null`

Checked all three steps and exact finite-group/studentized suppliers. Both finite law pairs have zero means and positive variances1,1 or1,2, so all assignments are centered with finite positive second moments. Equal-law product invariance holds; unequal marginals fail invariance under a cross-group swap (event coordinate=0 distinguishes them). Separate sample variances are consistent by finite-support mean/second-moment Chebyshev bounds uniformly along the exact triangular mixture; pooled variance limits1 and3/2 are correct. Thus finite exactness versus asymptotic weak-null calibration is distinguished correctly. AC is an explicit assumption of the Verification/Facts rather than a new choice-free asymptotic assertion. No defect found.

### `ex-same-mean-unequal-variance-studentized-permutation-test`

Recomputed means0, variances1 and2 and all four centered assignment moments, direct projections x,-y and pooled variance2-p_N ->7/4. The own-group sample variances satisfy the exact-mixture sufficient condition by uniform bounded support. At p=1/4 sampling variance is1+(1/3)2=5/3 whereas raw permutation variance=(7/4)/(3/4)=7/3. Uniform conditional CDF convergence implies each interior quantile converges by squeezing around the strictly increasing normal quantile. Sampling continuity at both random limiting thresholds gives equal-tail rejection limit2(1-Phi(z_(1-alpha/2)*sqrt(7/5)))<alpha. This precisely stated raw test is conservative, and standard-error studentization repairs calibration. Eventual sample sizes>=2, zero-error convention, explicit AC and alpha endpoints are handled. No defect found.

### `ex-studentized-rank-u-statistic-under-weak-null`

Recomputed all five steps: direct X projections+/-1/2 have variance1/4; Y projections -1,0,1 have variance1/2. Assignment moments are1,1,1/2,5/8 and all means0. Pooled masses(1/8,1/4,1/4,1/4,1/8), projections(7/8,1/2,0,-1/2,-7/8) give81/256. This bounded finite support satisfies the repaired pooled-moment premise without change. Exact triangular group frequencies transfer by the single-group contiguity lemma; finite unions and Markov give conditional joint convergence, and polynomial expressions yield actual joint variance-estimator consistency. The centered empirical means vanish identically. The specialized theorem applies with AC and positive variances; cross-sample ties are absent but pooled ties are explicitly included. No defect found.

## Consumer and source disposition

All mathematical edits are confined to four batch-55 draft items. No dependency, title, inventory or justification edge changed; existing manifest rows remain accurate. The pooled-moment clarification has exactly three direct item/reference consumers: `def-studentized-two-sample-u-statistic` uses no pooled existence assertion; `thm-two-sample-u-statistic-permutation-clt-under-weak-null` assumes all mixed second moments; `ex-studentized-rank-u-statistic-under-weak-null` uses bounded finite-support kernels. None needs an edit. The projection-CLT AC clarification has one direct item consumer, `thm-studentized-two-sample-u-statistic-permutation-validity`, which already assumes AC. No consumer Statement/Definition changes and no further-hop repair. No published item defect, external supplier escalation or withdrawal is identified. The legacy finite-space Chebyshev theorem is used on finite-support sample laws in the examples; no general integrability extension is assumed for their actual arguments.

Additional locally discovered defects are recorded in their risk-review dispositions and the report, with one closed ledger row each. The machine decisions array contains exactly the single dispatched obligation, not extra fabricated touched obligations. The pooled premise defect is fatal for the original standalone written claim; the counting and choice-scope defects are nonfatal. Every completed repair has confidence1.

Sources additionally read: TR2011-05 Lemma3.3 statement/proof PDFpp.21–22,33–34; TR2011-09 LemmasA.1–A.2 full statements/proofs PDFpp.34–39, Theorem3.2 PDFp.21 and proof pp.44–45, Theorem3.1 proof pp.43–44; Major Theorem9.1 and full proof printedpp.76–78/PDF82–84. The Stanford source gives a continuous-law pooled rank variance in its tie example; the local rank theorem correctly computes the law-dependent pooled variance. These passages were read from the official PDFs downloaded to temporary files; no unavailable supplementary proof is claimed.

## Source links

- [Chung–Romano TR 2011-05](https://stacks.stanford.edu/file/vs995qc2521/vs995qc2521_2011-05.pdf), §3.4 and Lemmas 3.2–3.3, PDF pp.21–22,30–34.
- [Chung–Romano TR 2011-09](https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf), §3.2 and Appendix A, PDF pp.18–22,34–39,43–45.
- [Major, Chapter 9](https://static.renyi.hu/~major/articles/lect-note1.pdf), Theorem9.1 and proof, printed pp.76–78/PDF pp.82–84.

## Local validation and handoff

- Initial risk-report: 27 items routed, 22 HIGH/CRITICAL items requiring review. Final `--require-reviewed`: 0 errors, all 22 specific reviews complete.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-55.proof-contracts.json --strict`: 27/27 checked, 0 errors/warnings.
- Precheck on the four changed items: 4 checked, 0 failing.
- Rendercheck on the four changed items: all YAML and math parse under the real renderer/KaTeX.
- Citation lint on the four changed items: no warnings.
- Required final batched `node tools/proof-layout.mjs items/lem-hypergeometric-binomial-contiguity-for-permutation-samples.md items/lem-pooled-mixture-projection-and-variance.md items/lem-two-sample-u-statistic-hoeffding-decomposition.md items/thm-two-sample-u-statistic-projection-clt.md`: 4 items,21 steps,0 defects. No item edits followed it.

Four closed defect rows: `bcs62-b55-refuter-1-entropy-cancellation` (nonfatal), `bcs62-b55-risk-pooled-moment-premise` (fatal original claim), `bcs62-b55-risk-hoeffding-subset-count` (nonfatal), `bcs62-b55-risk-projection-clt-choice-scope` (nonfatal). The three additional findings have explicit dispositions, defect IDs and confidence1 in their risk reviews; the one routed finding has the sole machine decision. No remaining mathematical blocker or escalation. All original IDs and proposed withdrawals are preserved. No judges, stamps, engine transitions or gate cycles were initiated. Engine must bind current hashes and run its independent gate battery.

Defect-ledger validation for this run: 135 rows checked, 0 errors. (The shared ledger may subsequently grow through other dispatched batches.)
