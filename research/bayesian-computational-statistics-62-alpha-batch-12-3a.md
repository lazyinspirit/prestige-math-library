# Batch 12 Step 3a adjudication

Run: `bayesian-computational-statistics-62`; group: `batch-12`. Scope original group `c` is preserved.

Read scope, order, reader report/findings (empty), and refuter report `bayesian-computational-statistics-62-refute-12.json` (empty flags). Nine touched obligations; no page/finding obligations. Initial risk-report succeeded: twelve CRITICAL items and three MODERATE items.

## Dependency-ordered review

### Level 0: lem-centered-integrable-iid-random-walk-is-unbounded-above

Checked steps 1.1–6.1 and all eight exact supplier statements. Infinite-supremum event is invariant under removing finite prefixes and hence tail measurable. Under finite supremum, independent M′ has the same law, and truncation plus |A-B|<=|X1| justifies E(A-B)=0 without E(M)<infinity. Centering forces the reflection remainder to vanish; independence gives the characteristic-function identity. Nonvanishing near zero and the countable cosine argument force X1=0 almost surely, contradicting nondegeneracy. Finite prefixes give the limsup conclusion. Zero increments are expressly excluded; no AC selection or finite variance is used. No defect found. Current carrier and cited supplier Statements are the evidence; Durrett is bibliography, not an imported proof premise. No decision owed (risk-only).


### ex-distant-alternatives-without-uniform-tests

Checked every verification step against the four supplier definitions. Bernoulli KL is -log(1-4delta_j^2)/2>0, so only label 0 minimizes and every KL neighborhood has prior mass >=1/2. The explicit coupling has the stated marginals, disagreement delta_j, and n-fold disagreement <=n delta_j<=1/n for j_n>=n^2. The finite-space TV bound applies to all randomized [0,1] tests; the supremum alternative error tends to one if null error tends to zero. Priors sum to one, all alternative distances are one, n=1 is allowed, and selected tilt equals P_j. No uniform test claim is being inferred from prior support. No defect found.

### lem-kl-neighborhood-prior-mass-likelihood-denominator-lower-bound

Checked all six steps and nineteen exact dependency statements. Finite KL gives absolute continuity and integrability of each log density ratio, so contrast expectation has the stated sign. Jointly measurable zero sets, extended log parts, and section integrals give measurable K and B_epsilon. Coordinatewise strong laws and Tonelli yield a common full sample event for prior-almost every parameter, without an uncountable intersection. Normalized product likelihood has total prior-predictive integral one under sigma-finite mu^n, proving finite evidence under P0^n; positive KL-neighborhood mass and Tonelli give positivity. For alpha>epsilon choose epsilon<alpha′<alpha; pointwise divergence after multiplying by exp(n alpha) and Fatou give liminf exp(n alpha)D_n=infinity. Infinite tilt mass is harmless. AC is inherited from the specified density/KL conventions only. No defect found.

### lem-likelihood-tilted-measure-is-sigma-finite

Checked both steps against exact density, measure, probability, and measurability suppliers. Supplied finite-valued densities and the zero-denominator convention give a finite nonnegative measurable ratio everywhere. The nonnegative indefinite integral is a measure; explicit E_k={r<=k} exhausts the entire space and Q(E_k)<=k. This proves sigma-finiteness even when total mass is infinite; zero numerators and denominator-null points cause no missing portion of the exhaustion. Selected minimizer has ratio one P0-almost surely and mass one. No new choice and no defect found.

### def-likelihood-tilted-measure-at-kl-projection

The supplied finite densities and finite-KL projection make the zero-denominator set P0-null. The defining nonnegative integral allows zero, finite, and infinite mass. Sigma-finiteness and product density are supplied by the later proved well-definedness lemmas, rather than assumed probability normalization. Eventual finiteness follows from convergence of the stated nonnegative error to zero. The capitalization change has no mathematical effect; reviewed_no_defect, metadata. Direct uses retain the same definition.

### lem-product-likelihood-tilt-has-product-density

Checked all three steps against all eight exact prerequisites. Sigma-finiteness of the one-coordinate tilt and probability P0 supplies both finite product measures. Finite products of measurable ratios give a nonnegative density. Tonelli on rectangles gives product Q_theta(A_i) with the zero-times-infinity convention. The stated product-measure uniqueness applies to the sigma-finite factors, proving equality on the whole product sigma-algebra even for infinite total tilt mass. n=1 and zero-coordinate mass are covered; n=0 is outside the statement. No defect found. Contract quote synchronization only: reviewed_no_defect, audit_enrichment; no content repair.

### ex-likelihood-tilt-can-have-mass-above-one

Checked both verification steps and all four supplier definitions/results. All displayed finite densities normalize. Positive pa gives finite KL, whereas pb(1)=0 with positive truth mass gives KL infinity, so a uniquely minimizes. Q_b({0})=(1/1000)*10^6=1000 and Q_b({1})=0. No false bound of one is imported; the tilt is a finite measure. Prior masses sum to one; AC is only the inherited KL convention. No defect found. Contract quote synchronization only: reviewed_no_defect, audit_enrichment; no content repair.

### ex-likelihood-tilt-can-have-mass-below-one

Checked both verification steps and four exact suppliers. KL(a)=(4/5)log9 is finite, and the truth-positive point with pb=0 makes KL(b)=infinity. Therefore the KL minimizer is a and every KL neighborhood has mass at least 1/2. Direct density integration gives Q_b({0})=1/9 and Q_b({1})=0. All densities and prior normalize, zero numerator contributes zero, and inherited AC is identified. No defect found. Contract quote synchronization only: reviewed_no_defect, audit_enrichment; no content repair.

### ex-unique-kl-projection-finite-model

Checked all three steps and five exact suppliers. Relative contrast (2/5)log(5/8)+(3/5)log(5/2)=(1/5)log(3125/512)>0 uniquely selects a. Equal-prior posterior odds are the product pb/pa; bounded IID log ratios have negative mean, so the exact L1 strong law makes odds vanish almost surely and alternative posterior mass tend to zero. Q_b mass=(2/5)(8/5)+(3/5)(2/5)=22/25. All densities are positive and normalized; denominator stays positive; no extra choice is used. No defect found. Contract quote synchronization only: reviewed_no_defect, audit_enrichment; no content repair.

### lem-exponential-test-posterior-splitting-at-kl-projection

Checked all four steps and every exact dependency statement. Finite KL in B_epsilon supplies the denominator lemma log integrability. Choose epsilon<alpha<beta. Tonelli plus product density gives E[e^(n alpha)N_n]<=exp(-n(beta-alpha)); Markov with threshold exp(-n(beta-alpha)/2) and first Borel-Cantelli give almost-sure convergence on the supplied infinite IID sample space. Normalized likelihood posterior on finite positive evidence satisfies Pi(V|X)<=phi_n+N_n/D_n. Both terms vanish on intersected full events. Finite initial exceptions and empty V do not matter; no independence of the tested events or probability normalization of Q is assumed. AC is only inherited. No defect found.

### prop-compact-kl-projection-tests-under-fractional-moment-continuity

Checked all six steps and all twenty-three exact dependency statements. Integrable r1 bounds log-positive part. As t decreases to zero, if P0(r1>0)<1 dominated convergence yields E r1^t<1; otherwise the positive quotient is dominated by C r1 and the negative quotient increases to -log r1, so DCT/MCT yield the extended negative derivative, allowing -infinity. Choose t small with s=1-t in the stipulated interval. Fractional-moment continuity supplies a neighborhood with moment uniformly <1. Product likelihood tests give both exponential errors; zero numerators, zero r1, and mixed zero/infinite products obey the stated convention. Restrict open neighborhoods to the closed separated metric subspace and take a finite subcover; finite maxima give uniform exponents. Empty separated set uses the zero test. No appeal to invalid weak-test amplification. Verified corrected source locator against UvA PDF Theorem 3.2 and full proof, printed pp.369–370 (PDF pages16–17). No mathematical defect found; accept source-locator repair.

### cex-weak-tilted-tests-do-not-imply-almost-sure-consistency

Independently checked all seven steps, the random-walk lemma and every exact cited supplier. The density c/[y^2(log y)^2] normalizes with mean c; truncated second moments are O(b/log^2 b). With b_n=n/log^(3/2)n the exceptional maximum probability vanishes and Chebyshev gives S_n/(n/log n)->-c in probability, so null-test expectation vanishes. The centered integrable nonconstant walk hits every positive level; least deterministic quantiles N_j and Borel-Cantelli give T_j/N_j<=1 eventually. Supplied continuous densities leave positive mass at z, are jointly measurable, and yield KL(*)=2mu and KL(j)=2mu+1/N_j. Tilts have infinite mass but finite pointwise density and product exp(S_n-n/N_j); on nonrejection their integrals are uniformly <=exp(-a_n). Proper geometric prior and positive minimizer mass ensure finite positive evidence. At T_j, A_Tj>=exp(j-1)pi_j diverges, giving posterior limsup one. Type-I statistics do not vanish almost surely, so the stronger local theorem is unaffected. Repaired the parameter and alternative index sets to {1,2,...}: library N contains zero, while epsilon_j, density p_j and prior pi_j were defined only for j>=1. The seven-step argument and content contract otherwise stand; no extra AC or consumer-interface change.

Verdict: amended_repair; repair_confidence: 1. Defect `bayesian-computational-statistics-62-3a-b12-positive-index` is a local well-formedness correction to the witness, not a change of Statement refuted. Proof provenance and quoted derivations were synchronized. No judge stamp was present.

### thm-posterior-consistency-at-kl-projection

Checked both proof steps and all twelve exact prerequisite statements after completing supplier risk reviews. Distance to nonempty Theta* is finite and 1-Lipschitz by the two triangle inequalities, even if Theta* is not closed; thus V={d>eta} is Borel. For fixed eta, choose 0<epsilon<beta_eta; positive prior KL mass and stated log integrability supply finite positive evidence and the denominator bound. The supplied product tilt and Bayes kernel match the splitting lemma, whose hypotheses give almost-sure exclusion of V. Quantifiers assert almost-sure convergence for every fixed eta, without an unjustified uncountable intersection. Nonunique projection sets and infinite tilt mass are allowed; eta>0 and a selected finite-KL projection exclude empty-set/direction issues. Weak-error counterexample does not satisfy the almost-sure type-I premise. Inherited AC only; no defect found. Risk-only; no decision owed.

## Historical comparison and dispositions

All nine initial current item raw hashes matched the frozen reader-post snapshot. Seven item hashes were unchanged from reader-pre: their touched status comes only from eight contract quotations of the definition's capitalization. Reversing `once that product measure` to `Once that product measure` in each pre-risk-review contract exactly reproduces every corresponding pre contract hash. Thus these are metadata/audit enrichment, not mathematical repairs. The definition's single reversed capitalization also exactly reproduces its pre item hash.

For the proposition, the durable preimage is `research/bayesian-computational-statistics-62-owner-step2-gate1-9-12-before/prop-compact-kl-projection-tests-under-fractional-moment-continuity.md`; its raw SHA256 matches the frozen pre item hash. Full diff confirms the source-locator correction and soft-line reflow in Facts & Assumptions only; all Statement and Proof text is unchanged. Accept the reader's source-locator repair. No historical preimage uncertainty remains.

The counterexample's reader change was only a contract quotation update. Adjudication additionally repairs the positive-index witness defect described above. Its Statement refuted is unchanged. No direct or indirect consumer interface changes; the splitting lemma and consistency theorem refer to this counterexample only in Remarks and remain correct. Stable IDs and all proposed content are retained.

Nine decisions: definition `reviewed_no_defect` (`metadata`); proposition `accepted_repair`; counterexample `amended_repair`; the other six touched carriers `reviewed_no_defect` (`audit_enrichment`). Two closed defect rows are referenced by the corresponding repair decisions. There are no reader/refuter/page obligations, escalations, proposed withdrawals, or defective published local items.

## Sources and prerequisites

Every routed current carrier and every cited local supplier Statement/Definition used above was read independently. The core probability arguments were checked from those exact local statements rather than treating bibliography or earlier reports as a proof premise. The KL convention explicitly includes AC and a finite negative log part; both finite KL values therefore justify the integrable log contrast. The finite-valued supplied density family avoids simultaneous density-version selection. The metric subspace cover in the compact proposition is obtained by restricting each ambient open neighborhood; compactness is used intrinsically.

Independently opened [Kleijn–van der Vaart, full published PDF](https://pure.uva.nl/ws/files/1850322/114737_376240.pdf): Theorem 3.2 and its proof, printed pp. 369–370 (PDF indices 16–17), and all of Lemma 3.3 with its proof, pp. 374–375 (PDF indices 21–22). The compact construction's hypotheses agree with the source; the local proof additionally derives exponential null errors directly and handles zero densities. Lemma 3.3's block centering uses integrals of the rejection statistics under the tilts. These need not be finite for infinite tilt mass. The local counterexample independently demonstrates failure of the unrestricted amplification; the local sufficient theorem retains the stronger almost-sure type-I premise and exponential type-II hypothesis. This external-source issue has no corresponding defective local published carrier to enter in the published-consumer ledger. Durrett and other bibliography were not independently reread or used as unproved premises.

## Validation and handoff

- Initial `node tools/risk-report.mjs research/bayesian-computational-statistics-62-batch-12.proof-contracts.json`: 15 items, 12 CRITICAL, zero errors. All twelve now have specific complete Alpha risk reviews; the final `--require-reviewed` invocation passes.
- `node tools/tsx-run.mjs tools/reflow.mts items/cex-weak-tilted-tests-do-not-imply-almost-sure-consistency.md`: completed.
- `node tools/tsx-run.mjs tools/precheck.mts items/cex-weak-tilted-tests-do-not-imply-almost-sure-consistency.md`: 1 checked, zero failures.
- After the final item edit and reflow, `node tools/proof-layout.mjs items/cex-weak-tilted-tests-do-not-imply-almost-sure-consistency.md`: 1 item, 7 steps, zero defects. This is the complete item-edit scope of this adjudication.
- `node tools/rendercheck.mjs items/cex-weak-tilted-tests-do-not-imply-almost-sure-consistency.md`: 1 file, successful YAML and real KaTeX parsing. An earlier unsupported `--help` invocation selected the broad corpus and was stopped; it supplies no validation evidence.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-12.proof-contracts.json --strict`: 15/15 items, zero errors or warnings. An initial failure exposed an overbroad replacement in a quoted supplier; restored that quotation to the exact unchanged supplier statement before the passing run. This was a mechanical synchronization error, not a mathematical defect.

No gate battery, judging, stamping, agent dispatch, or publication was performed. Remaining action belongs to the engine: bind current hashes and run its gates. No mathematical blocker remains.
