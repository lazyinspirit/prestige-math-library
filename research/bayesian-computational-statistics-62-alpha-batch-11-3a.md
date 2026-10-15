# Batch 11 Step 3a adjudication

Run: `bayesian-computational-statistics-62`; group: `batch-11`; scope assignment group remains `c`.

Reviewed the dispatch, order, scope, reader report/findings and refuter report. There are four touched obligations, one refuter obligation, and no page or reader obligations. All nine current raw item hashes initially equal the frozen post-reader hashes. Pre/post snapshots identify the four reader changes; they remain immutable.

## Dependency-ordered review checkpoint

### `def-hellinger-distance-between-density-laws`

Reviewed Definition and Remarks with all seven exact supplier statements. Square-root measurability and (sqrt(p)-sqrt(q))^2<=p+q prove finiteness h^2<=2; null changes preserve the value. Zero densities on subsets and disjoint supports are admissible; an empty underlying probability space is impossible. Fixed dominator and supplied versions do not assert joint parameter measurability or require choice.

### `lem-iid-bounded-variance-bernstein-tail`

Reviewed all five steps and all exact cited statements. Uniform convergence on [-b,b] justifies expectation of the exponential series; k!>=2*3^(k-2) gives the MGF bound only for |lambda|b<3. Independence factors the MGF; lambda=t/(V+bt/3) is admissible for V>0 and yields the stated exponent. Negation proves the lower tail; V=0 and m=0 give zero sums. Reader empty-family clarification is sound. Tropp Lemma 4.15 proof and Theorem 4.16, printed pp.36-37, checked; local proof correctly restricts the geometric-series domain.

### `lem-iid-posterior-denominator-lower-bound-from-kl-mass`

Reviewed all seven steps and all 22 exact dependency statements. Joint finite-valued densities and sigma-finite mu permit Tonelli for KL positive/negative parts (negative integral <=1/e) and the log square, so K_n is measurable. Positive KL mass gives positive D_n by Tonelli without a common exceptional null set; expectation <=1 gives finiteness. Conditional-prior log average has second moment <=epsilon_n^2, independent sample averaging variance <=epsilon_n^2/n, and Chebyshev plus Jensen gives threshold exp(-(C+2)n epsilon_n^2). n>=1, epsilon_n>0 and positive mass are explicit; the probability lower bound may be negative for small n but remains valid. AC is explicitly inherited from directional KL/RN, with no density selection. Reader product-law citation is accurate. Kleijn Lemma 6.4.5 and full proof, printed p.184, checked.

### `lem-hellinger-distance-controls-l1-and-total-variation`

Reviewed four steps and all ten exact dependency statements. Square roots have unit L2 norm; Minkowski proves the triangle inequality. Both directions h=0 iff P=Q are checked without a sigma-finiteness requirement: threshold sets of the integrable difference force equal densities almost everywhere. The positive set attains the event supremum, giving d1=2TV. The pointwise root-square inequality handles p=q=0 explicitly; Holder gives d1<=2h. Disjoint-support endpoint gives h^2=d1=2 and TV=1. No choice is used.

### `lem-iid-sieve-entropy-produces-exponential-tests`

Reviewed all seven steps and all 23 exact dependency statements, including generating rectangles and finite product-law identity. For each n finitely many nonempty shells exist; bounded attainable separated cardinalities attain a maximum, giving finite nets of radius eta*a with eta=1/128. The reader net-existence clarification is sound. L1 sign tests give c1=3(1-2eta)^2/40; uniformly B-bounded L2 tests give c2=3/(512B). Hellinger block tests have affinity error <=1/8 and ball perturbation sqrt(m)*r<1/8. Independent block majority yields c_h=3/2048 once n/m>=2, uniformly because a>=M epsilon_n. The shell geometric sum gives the factor 2 and entropy exponent loss 1; empty alternatives use the zero test. No arbitrary-index choice is needed for the finite construction. Checked Kleijn section6.4.4 pp.181-183 and Ghosal section2.5.2 pp.64-66 for entropy/testing framework; the local elementary block proof independently establishes the explicit constants.

### `thm-iid-posterior-contraction-by-entropy-and-prior-mass`

Reviewed all five steps and all 21 exact dependency statements after the denominator, distance and tests suppliers. The joint family yields measurable distance sets and nonnegative likelihood integrals. The denominator lemma makes evidence finite and positive almost surely; on its high-probability lower-bound event, change of density controls the tested sieve numerator even when P_theta has mass outside P0 support (an inequality, not an equality). Prior-tail expectation <=exp(-(C+4)n epsilon_n^2), c_d M^2>=C+4, and Markov give a bound tending to zero for every delta>0. The same metric is used throughout, B is required for L2, and the statement asserts probability rather than almost-sure convergence. Explicit AC is inherited from KL, not joint version selection. Reader product-density supplier declarations are accurate. Checked Kleijn theorem6.4.3 proof pp.180-181 and Ghosal section2.5.2 pp.64-66.

### `ex-bernoulli-density-logarithmic-contraction-rate`

Reviewed Example, all four verification steps, and all ten exact dependency statements. Packing is in full density L1=2|theta-theta_prime|; epsilon_n=2 sqrt(log n/n) has n epsilon_n^2=4 log n. On [a,b] inside (0,1), g(theta0)=g_prime(theta0)=0 and |g_second|<=L give quadratic KL control by two MVT uses for theta!=theta0; log derivatives give log-square bound with the same L. Confirmed refuter equality-case omission as nonfatal and added explicit zero contrasts at theta=theta0, preserving every bound. The strict interior truth permits a local interval of prior mass 2c epsilon_n/(b-a), exceeding an exponential threshold for fixed C. Selected-metric contraction follows for large fixed M; no minimax claim or endpoint truth is asserted. AC is inherited from directional KL. Checked Ghosal section2.5.3 p.67 finite-dimensional logarithmic overhead.

Refuter obligation `refuter:11:1`: **confirmed_nonfatal**, repair confidence 1. The exact current supplier `cor-mean-value-theorem`, Statement, requires distinct endpoints a<b. Equality theta=theta0 gives both contrasts zero directly; the quadratic estimates and resulting local-prior-mass argument remain unchanged. Updated proof provenance to ai-altered and synchronized derivation 1.2 and the zero boundary. No Statement, Example, dependency, or manifest claim changed.

### `ex-high-entropy-sieve-can-fail-without-precluding-contraction`

Reviewed all four steps and all nine exact dependency statements. With epsilon_n=(log n)^(1/4)/sqrt(n), n epsilon_n^2=sqrt(log n) diverges while epsilon_n vanishes. The explicit grid j*epsilon_n stays in [0,1] and has pairwise full L1 distance >=2epsilon_n>epsilon_n, giving log D>0.5log n-0.25log log n>sqrt(log n) eventually. Full-space sieve tail is zero; the local KL/log-square set contains the truth atom with mass one. Every finite data vector has evidence 2^(-n)>0 and posterior delta_(1/2), so every positive-radius complement has mass zero, including endpoint-valued alternative densities. This establishes failure of necessity of the specified broad-sieve entropy premise, without applying a theorem whose premise fails. AC only enters through directional KL conventions.

### `ex-holder-density-rate-from-entropy-balance`

Reviewed both verification steps and all five exact dependency statements. This is explicitly conditional on the Hellinger entropy bound and local KL/log-square prior mass, not a proof of those properties for every Holder prior. With 0<alpha<=1 and fixed K, n epsilon_n^2=K^2 n^(1/(2alpha+1)) diverges, epsilon_n vanishes, and K^(2+1/alpha)>=C_H gives the stated entropy bound. The full-space sieve has zero prior tail and is nonempty since it contains p0; all supplied densities are bounded and finite. Endpoints alpha=1 and zeros of densities cause no problem; alpha=0 is excluded. The contraction conclusion follows for sufficiently large fixed M under inherited AC. Checked the conditional entropy-balance comparison against Ghosal section2.5.3 pp.66-67; no minimax lower bound or unconditional entropy assertion is made.

All nine mathematical risk reviews are complete.

## Decisions and repairs

The companion decisions file contains exactly five entries:

| Obligation | Verdict | Defect disposition |
|---|---|---|
| touched:11:lem-iid-bounded-variance-bernstein-tail | accepted_repair | `bayesian-computational-statistics-62-3a-b11-empty-bounded-sum`, fixed nonfatal clarification |
| touched:11:lem-iid-posterior-denominator-lower-bound-from-kl-mass | reviewed_no_defect (metadata) | No defect row: explicit product-law prerequisite enrichment |
| touched:11:lem-iid-sieve-entropy-produces-exponential-tests | amended_repair | `bayesian-computational-statistics-62-3a-b11-finite-shell-net`, fixed nonfatal justification; exact contract quotations refreshed |
| touched:11:thm-iid-posterior-contraction-by-entropy-and-prior-mass | reviewed_no_defect (metadata) | No defect row: explicit product-density prerequisite enrichment |
| refuter:11:1 | confirmed_nonfatal | `bayesian-computational-statistics-62-3a-b11-bernoulli-equality-case`, fixed |

Every completed repair has `repair_confidence: 1`. The reader's four source edits are retained. Only the Bernoulli example was edited by this adjudicator: Verification 1.2 explicitly treats equality and applies MVT only for unequal parameters; its proof provenance is now `ai-altered`. Its Statement/Example and all mathematical interfaces are preserved. There was no `verification.judge` to invalidate. The manifest's nine dependency mirrors match the actual carriers, and its claims and strategies remain accurate, so no manifest edit is needed.

The first strict contract check found nine literal-quotation mismatches introduced with the reader's product-law citations: denominator F19 (one), test-lemma F8 (four), and contraction-theorem F8 (four). Replaced these paraphrases by the exact independently opened Statement/Definition sections. This is mechanical contract synchronization, not nine mathematical defects. Bernoulli derivation 1.2 and the zero-boundary evidence are synchronized with the repair. All nine contracts now contain specific complete Alpha risk reviews.

## Supplier and consumer evidence

Read every declared item prerequisite's actual Statement or Definition, including all measure/integral, independence/product-law, calculus, KL/RN, choice, and probability-inequality interfaces, before accepting its uses. Reviewed full owned arguments, rather than treating the contracts or reader/refuter verdicts as mathematical authority. No claim depends on an open problem or an unproved external result.

Opened the current page-level prerequisite `posterior-consistency-and-tests` and its Hellinger definition, invariance/comparison proof and consistency proof. Its current amplification Step 2.3 explicitly states `n>=m`; the old finite-prefix concern retained in the cross-batch evidence is not a current defect. The owned batch proves its own Hellinger comparison, denominator, tests and contraction theorem and does not import the outside consistency conclusion. Appended this current disposition to the owned cross-batch input and `briefs/tasks/frontier-dependency-ledger.md`, preserving prior evidence and stable IDs. No Statement, Definition or Example claim changed, so no consumer propagation or outside supplier repair was required. Published carriers stayed read-only; no defective published supplier was established and no published-ledger entry was warranted.

## Source reading

- [Tropp, Probability in High Dimensions](https://tropp.caltech.edu/notes/Tro21-Probability-High-LN-corr.pdf), printed pp. 36–37 (PDF pp. 46–47), Lemma 4.15 proof and Theorem 4.16: checked the exponential-moment argument and bounded-sum assumptions. The local proof explicitly restricts the geometric-series parameter to `|lambda|b<3`; it does not import the source lemma's unrestricted-parameter wording.
- [Kleijn, Bayesian Statistics for Frequentists](https://staff.fnwi.uva.nl/b.j.k.kleijn/bkleijn-book-work-in-progress-Bayesian_Statistics_for_frequentists-Version-1.0-July-2025.pdf), §6.4.3 proof pp. 180–181, §6.4.4 pp. 181–183, and Lemma 6.4.5 with complete proof p. 184: checked the testing/entropy framework and conditional-prior Jensen–Chebyshev denominator mechanism. The local proofs establish their own constants, measurability details and metric branches.
- [Ghosal, The Dirichlet Process, Related Priors and Posterior Asymptotics](https://people.eecs.berkeley.edu/~jordan/sail/readings/Ghosal09.pdf), §2.5.2 pp. 64–66 and §2.5.3 pp. 66–67: checked the prior-mass, entropy and sieve framework, the L1 and bounded-L2 alternatives, and the conditional Hölder and finite-dimensional rate discussion.
- Attempted the cited GGV DOI, but retrieval returned an internal error. No claim of reading that article is made; the accessible source treatments and independent local derivations supply the evidence above.

## Checks and handoff

- Initial risk report: 1 HIGH and 8 CRITICAL items, all nine reviewed in generated dependency order. Final `node tools/risk-report.mjs research/bayesian-computational-statistics-62-batch-11.proof-contracts.json --require-reviewed`: 0 errors, 9 items.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-11.proof-contracts.json --strict`: after exact-quote synchronization, 0 errors, 0 warnings, 9/9 items.
- Reflow of the edited Bernoulli item: unchanged. Its actual precheck passed (1 checked, 0 failures), and rendercheck passed including real KaTeX and renderer YAML parsing. A tooling-discovery invocation of precheck with `--help` treated the flag as a filename and failed; the subsequent explicit-file checks above are the reported validation.
- Explicit-file precheck of the four retained reader-edited items: 4 checked, 0 failures.
- Final required layout command: `node tools/proof-layout.mjs items/ex-bernoulli-density-logarithmic-contraction-rate.md`: 1 item, 4 steps, 0 defects. No item was edited afterward.
- Exact decision coverage checked locally: 5/5 owed obligations, no duplicates or extra decisions; all three referenced defect rows are closed. Shared ledger append used its native serialized append/render transaction.
- Autopilot status recomputed from the live state directory: run is PAUSED with unrelated collection/split blockers for batches 23 and 25. No controller state or other batch was changed. No local mathematical escalation remains for batch 11.

No judging, stamping, certification, agent dispatch, gate battery or stage transition was performed. The engine owns decision hashes and subsequent gates. The report records current proof review and frozen snapshot comparisons; it does not claim independent reconstruction of the reader's missing historical full-byte preimages from its narrative report.
