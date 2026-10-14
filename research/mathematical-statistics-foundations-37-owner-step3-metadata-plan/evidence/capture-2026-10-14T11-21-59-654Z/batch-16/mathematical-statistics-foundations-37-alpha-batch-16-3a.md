# Batch 16 Step 3a adjudication

Run: mathematical-statistics-foundations-37. Group: batch-16. Scope: batch 16 only.

Scope routes three touched items and one page; reader findings and refuter flags are empty. All three current touched item raw hashes equal immutable reader-post hashes. No Statement, Definition or dependency changes are made by this adjudication. One CLT proof bound is corrected below.

## Level 1 completed

`lem-empirical-process-bracketing-maximal-inequality`: accepted_repair, repair_confidence 1. Independently checked steps 1.1–3.1 and all seven current cited supplier interfaces. Bernstein uses centered bound 2b and variance n sigma^2; layer cake integrates the finite union tail. Nested cell oscillations vanish on one common full-measure set by countability and DCT. The stopping decomposition telescopes even at cutoff equality; finite partial sums are bounded by 2H and DCT plus finite sample convergence passes G_n to the limit. Residual maxima use cellwise w_q and the shifted L_{q+1} series is absorbed by reindexing. MCT sums nonnegative maxima. Nonempty cells, positive envelope norm, singleton classes, zero oscillations, q0=1 and infinite entropy tail checked. Reader limit-passage repair accepted; exact current item equals reader-post hash. No defect or unresolved prerequisite.

Source: Wellner official notes, Chapter 1 §7, PDF pp. 52–54, nested cutoff proof and Theorem 7.6. Local partitions are explicit hypotheses, rather than an assertion of automatic bracketing construction.

Next: level-2 risk reviews, then equicontinuity, functional CLT, Brownian-bridge example and page. No blocker at this checkpoint.

## Level 2 completed

`def-donsker-class-and-asymptotic-equicontinuity`: Checked all five cited definitions/interfaces. Centered L2 difference is a pseudometric (norm triangle); covariance is finite by Cauchy–Schwarz. Zero-distance pairs are allowed. Outer probability and bounded signed outer expectation conventions are explicit; Donsker uses bounded uniformly continuous tests and a tight Borel Gaussian law. Pointwise measurability alone is not asserted to imply Borel measurability in l-infinity. Nonempty class and finite envelope hypotheses are retained. No defect.

`thm-dudley-entropy-integral`: Checked steps 1.1–3.1 with all six cited suppliers. Finite maximum exponential moment is finite, establishing integrability before Jensen. Zero proxy gives a.s. zero by exponential Markov in both directions. Listed dense set makes finite net choices canonical. Fixed finite A residual tends to zero; dyadic intervals are disjoint and entropy monotonicity bounds the sum. N>=2 below D/2 absorbs added constants. D=0 and singleton cases rely on the supplied separability, not an uncountable intersection of null events. No defect.

`thm-gc-by-bracketing-entropy`: Checked steps 1.1–3.1 and seven cited dependencies. Clipping brackets to integrable envelope preserves inclusions and width; endpoint transforms of iid samples satisfy L1 SLLN. One common null set suffices for countable subclass. Pointwise approximation and DCT transfer the supremum samplewise. Probability branch fixes one cover; AC_omega only selects all covers in the a.s. branch. Empty classes excluded; zero envelope, singleton class and bracket boundary equalities valid. No defect.

`cex-pointwise-strong-laws-do-not-imply-uniform-law`: Checked both refutation steps and all five cited interfaces. Each fixed finite set has measure zero, including empty set and endpoint singletons; countably many observations avoid that fixed set a.s. No intersection over all finite sets is used. Sample set A_n belongs to fixed class even with repeated observations and attains empirical mass one. Every finite set has population mass zero. Supremum is constant one and measurable; witness invalidates uniform convergence. No defect.

## Level 3 equicontinuity completed

`lem-empirical-process-asymptotic-equicontinuity-from-bracketing-entropy`: accepted_repair, repair_confidence 1. Checked steps 1.1–5.1 and all eight cited supplier interfaces. Centered differences have envelope 2F+2PF and L2 norm <=delta. For each bracket actually containing a class member f, both endpoints are L2 because their absolute values are bounded by |f|+(u-l); hence every expectation in step 1.2 is defined. Unused brackets may be discarded without increasing counts. Width bound is 4r||F||. Countable Choice selects dyadic covers and representatives. Cumulative refinement entropy is bounded by swapping geometric sums; H norm lies between 2||F|| and 4||F||, so rescaling constants are uniform. H_delta is nonempty (diagonal zero). Fixed-delta envelope tail tends to zero by DCT on H^2 before delta tends to zero. Coarse entropy vanishes by monotonicity. Corrected reader DCT citation in step 5.1 accepted; squared-error DCT preserves rho and strict-radius slack transfers the modulus by outer probability. Zero envelope excluded here and handled separately by CLT. No unresolved defect.

The temporary endpoint-clipping edit was removed: membership and finite L2 bracket width already force endpoint integrability. This was not a confirmed defect; no ledger row is created. Current carrier again equals reader-post raw hash.

`ex-threshold-class-is-glivenko-cantelli`: Reviewed all three verification steps and eight dependency statements. Rational thresholds approach from above, retaining value one at x=t, including t=0; t=1 is already rational. AC_omega is stated and supplies the strong branch. m grid brackets cover both endpoints and have L1 width exactly 1/m under uniform law; m=1 works. Constant envelope is integrable. No defect.

Next: functional CLT and final example/page.

## Level 4 completed

`thm-empirical-process-functional-clt`: amended_repair, repair_confidence 1. Independently reviewed all twelve steps and 33 current dependency interfaces, including normal density/normalization and substitution used through F12. AC covers Gaussian existence, Kolmogorov extension, CLT, separability and tightness; CC covers completion. Zero envelope uses common countable null set and pointwise approximation. Quotient is totally bounded and completion compact. PSD covariances and Cramer–Wold give consistency even for singular covariances. Completing square and translated-interval MCT establish Gaussian MGF. Restricted increment-pair covering uses internal representatives; countable index provides separability, entropy bounds yield vanishing expected modulus, and Markov/BC give uniform continuity. Dense path extension is unique and Borel in separable C(T); its isometric pushforward is tight. Bounded characteristic integrands and DCT identify extended Gaussian laws without L2 completeness. Step 9.1 repaired to bound centered squared norm by 2m(F(X)^2+(PF)^2), proving finite second moment. Finite-net convergence and outer-expectation approximation then give the process limit; epsilon limit follows n limit. Reader MGF/CF repairs accepted with this additional nonfatal correction. No remaining defect.

Confirmed nonfatal defect: a centered coordinate need not vanish where its envelope vanishes. Example: Bernoulli(1/2), f=F=indicator{1}; at X=0, F(X)^2=0 but (f(X)-Pf)^2=1/4. The bound with +(PF)^2 closes finite-moment justification. Defect ID: msf37-3a-batch16-centered-envelope-bound. No Statement/Definition/dependency/manifest change and no prior judge record; step-9.1 derivation synchronized.

## Level 5 and page completed

`ex-uniform-empirical-cdf-converges-to-brownian-bridge`: Reviewed all four verification steps and eight actual supplier statements. Rational approximants from above preserve threshold endpoints, including t=0; t=1 is in countable subclass. Envelope norm is one. Grid brackets cover the class and L2 widths are exactly m^(-1/2); ceil(epsilon^(-2)) works also epsilon=1. Entropy bound by sqrt(log2)+sqrt(2)epsilon^(-1/2) is integrable. AC premise is retained. Functional CLT supplies tight outer weak Gaussian limit; injective indexing t -> f_t identifies l-infinity spaces. Covariance min(s,t)-st is computed directly and variance vanishes at both endpoints. No defect.

`chaining-uniform-laws-and-empirical-process-limits`: accepted_repair, repair_confidence 1. Current page inventory and order match manifest and post-reader snapshot. The summary correctly distinguishes the finite-variance/measurability/AC hypotheses from the Gaussian tightness conclusion. The deterministic oracle inequality uses only the two uniform deviations and approximate minimization; no exact minimizer is required. The page accurately distinguishes probability and strong GC branches. No page edit was needed.

Contract-only reconciliation: refreshed F1 exact quote to current batch-13 Definition, removed an invalid duplicate F12 Facts & Assumptions citation, and mapped both remaining F12 sources to steps 4.1 and 8.1. The normal lemma supplies density integration and normalization through its actual prerequisites; substitution is supplied through its normalization dependency. These mechanical failures create no defect rows.

## Source evidence and historical comparison

Read the reader report/findings, refuter report, immutable pre/post snapshot inventories, current batch manifest and contract, and all current supplier statements used by the nine risk carriers. No rendered batch evidence bundle was present. The two accepted lemma carriers and the accepted page equal their raw reader-post hashes; the CLT initially equaled its raw reader-post hash and now differs only by the reported step-9.1 bound correction. Pre/post hashes differ for all four routed carriers. Reader-reported historical edits are distinguished from independently reviewed current arguments; no unseen pre-reader source reading is claimed.

Consulted [Wellner's official notes](https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf), Chapter 1: §2 Theorem 2.1 and its forward proof (PDF pp. 7–9, extracted lines 342–474); §3 Corollary 3.5 (PDF p. 19, lines 1417–1440); §6 Theorem 6.1 with its full endpoint proof (PDF p. 35, lines 3392–3420); §7 Theorems 7.4–7.6 and full nested-partition/cutoff argument (PDF pp. 52–54, lines 5302–5589). Checked total boundedness, separability/outer-measure caveats, finite bracketing widths, envelope assumptions and Gaussian increment scales against the local argument. The source's measurability caveat appears at PDF p. 3, lines 42–47; local proofs explicitly address it. The Pollard source was not fetched in this session and was not relied upon. The normal density, characteristic-function, normalization and integration suppliers were read locally; their exact hypotheses cover the MGF and Gaussian extension steps.

## Closed defects and owned dependency evidence

Six distinct nonfatal defects/gaps are closed at 3a-adjudicate with repair_confidence 1: `msf37-3a-batch16-maximal-limit`, `msf37-3a-batch16-equicontinuity-dct-citation`, `msf37-3a-batch16-gaussian-mgf`, `msf37-3a-batch16-gaussian-extension-law`, `msf37-3a-batch16-page-tightness`, and `msf37-3a-batch16-centered-envelope-bound`. The first five preserve reader repairs; the final one is the additional Alpha correction. Each decision references its corresponding closed rows in research/defect-ledger.jsonl. No defect row was created for contract mechanics or the rejected bracket-endpoint concern.

The batch-16 cross-batch dependency input retains all existing rows and adds current Alpha evidence for the used item and page interfaces. Its source supplier IDs remain unchanged. The frontier-dependency notes contain the batch-16 review record. No Statement/Definition change triggers further consumer repairs, no withdrawal is proposed, and no defective published item was found. Published carriers were kept read-only.

## Checks and handoff

- Initial risk report: nine HIGH/CRITICAL items among eleven carriers. All nine now have specific complete Alpha risk_review records; final --require-reviewed: zero errors.
- Strict proof contract: eleven of eleven checked, zero errors and warnings after citation-record reconciliation.
- CLT precheck: one checked, zero failing.
- Final required batched proof-layout command on the single final changed item, items/thm-empirical-process-functional-clt.md: one item, twelve steps, zero defects. No item edits followed it.
- Four decisions authored: three touched and one page. No reader/refuter finding decisions were owed.
- Native status verified the active run at Step 3a; no run transitions, judges, stamps or gate battery were initiated.

Local mathematical blocker: none. Shared mechanical handoff issue: `node tools/frontier-dependency-ledger.mjs refresh --run mathematical-statistics-foundations-37` failed parsing the out-of-scope carrier `items/thm-huber-covariance-upper-and-lower-risk.md`, line 3, whose unquoted title begins `Dense Gaussian Huber covariance: high-probability upper and capped lower`. Diagnostic: “Nested mappings are not allowed in compact mappings”. Route to its owner to quote the title and rerun refresh. The owned batch-16 edge input is saved; no outside carrier was edited and no successful aggregate refresh is claimed. This mechanical failure does not change any mathematical verdict or create a defect-ledger row.

Final raw item hashes:

- `lem-empirical-process-asymptotic-equicontinuity-from-bracketing-entropy`: `174233c9baa7d570ae0abe8b310e50a9dd166ff5a71b223133ee87869076e906`.
- `lem-empirical-process-bracketing-maximal-inequality`: `802606287d9d76085526c8169448a9a5e5fcf2cb82c501661d4460aa568190af`.
- `thm-empirical-process-functional-clt`: `6d8566217c46c95fc36cd025233bf03951845e18fe89567c8cbaf254cb870615`.
