# Batch 33 Step 3a adjudication

Run: `mathematical-statistics-foundations-37`; group: `batch-33`.

Read the exact dispatch/order, CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md and Alpha briefs. Scope owes eleven touched decisions, no page/reader/refuter decisions. Sixteen HIGH/CRITICAL reviews are required. Exact pre-reader archives exist in `research/mathematical-statistics-foundations-37-owner-step3-reader33-preimages/`; all eleven raw archive hashes match immutable pre snapshots, and all eleven current source hashes match immutable post snapshots. No historical-byte uncertainty. Reader/refuter reports have empty findings arrays.

## Dependency-level review checkpoint

### alg-geometric-median-of-block-means

Definition reviewed: 1<=k<=n makes every balanced consecutive block nonempty. The minimum-norm rule is delegated through justified_by, without a reverse deps cycle. The exact archived pre-reader/current diff only adds def-separable-space for the already stated separability domain; classify as metadata, not a mathematical defect. k=1, k=n and zero data are coherent.

### lem-absolutely-continuous-upper-quantile-exact-tail-mass

Steps 1.1–2.1 reviewed: singleton-null supplier explicitly assumes Countable Choice, retained in Given; continuity from above applies to probability mass <=1. Tail limits 0 and 1 ensure a nonempty bounded threshold set for 0<u<1; continuity places its supremum in it and excludes tail mass strictly above 1-u. Flat distribution intervals do not break the supremum argument. Endpoints u=0,1 excluded. Dependencies read at their exact stated interfaces.

### lem-finite-covariance-matrix-basic-properties

Steps 1.1–4.1 reviewed against exact pre-reader archive: |x|<=1+x^2 and 2|xy|<=x^2+y^2 establish all integrability before linearity; continuous polynomial compositions are measurable. v^T Sigma v=E<v,Y>^2 proves PSD and finite diagonal sum gives trace. Euclidean pointwise Cauchy–Schwarz and the nonzero finite-dimensional Rayleigh supplier yield 0<=lambda_max<=trace. Integral-zero supplier applies to the nonnegative norm square. d>=1 and trace=0 checked; no scalar L2 citation inflation remains.

### lem-positive-real-has-dyadic-scale-in-factor-two

Steps 1.1–2.1 reviewed: Archimedean n bounds both a and 1/a; induction gives 2^n>=n+1. The finite search excludes -n, so the predecessor exists and minimality yields 2^(i-1)<a<=2^i<2a. Exact dyadic a selects itself and strict upper bound remains true. No infinite choice or unproved integer minimum is used.

### lem-variance-sensitive-bounded-empirical-process-concentration

Steps 1.1–4.1 independently checked. Entropy product decomposition and convex perspective yield tensorization; fresh-copy covariance gives Ent(e^tZ)<=t^2 E[e^tZ V+] with V+<=2W+2ns^2. Leave-one-out W is self-bounding with increments <=B^2; differential inequality gives log Ee^aW<=2am for aB^2<=1/2. Tilted Jensen at a=4t^2 absorbs D/2 and yields A=8m+4ns^2 for t<=1/(sqrt8 B); explicit Chernoff t gives 2sqrt(Ax)+sqrt8 Bx. B=0, m=0, A=0 and countable bounded convergence checked. Product-law, Fubini, bounded DCT, Jensen and Markov supplier hypotheses read; scalar joint-convex Jensen application is the elementary finite-dimensional supporting-plane consequence. Source: Boucheron et al., arxiv math/0503651 Section 3.1, PDF pp.9–10; local constants derived independently, not inferred from a citation.

Next action: complete remaining level-1 routed reviews before level 2; no current mathematical blocker identified.
### cex-excess-tail-functional-does-not-bound-trimmed-mean

Steps 1.1–2.1 reviewed: the two disjoint uniform intervals have mean 0, variance 1+w^2/3 and exact tail-quantile gap 8w epsilon. Integrating triangular tail excess yields 8w epsilon^2 and bound <.0042. Replacing 20000 negative first-half entries respects floor(2eta N); Chebyshev controls the sign average and second-half count, with joint success >=.989996. Ranks ceil(epsilon N), ceil((1-epsilon)N) lie in opposite intervals; winsorized average >=.029 exceeds the false bound with probability >delta. Countable Choice retained through quantile supplier. This refutes excess-tail replacement, not the current raw-tail theorem.

### cex-univariate-clean-quantile-count-exponent-is-false

Steps 1.1–4.1 reviewed: delta=4exp(-N/120) gives epsilon=.1 with eta=0 and delta>=exp(-N/4). Exact continuous upper-tail mass .05 produces Bin(N,.05). Rational log integral estimates give D(.075||.05)<.00575<1/120. At m=.075N+1, the Bin(N,m/N) mode is m, mass >=1/(N+1); likelihood ratio gives the exp(-ND(m/N||p)) lower bound. Continuity and the exponential quadratic term beat N+1 for sufficiently large multiples of 40. Strict count >.075N and asymptotic quantifier checked; no finite N guarantee fabricated. Source Lugosi–Mendelson PDF p.11 equations (2.8),(2.10) checked; this is an actual source-level exponent defect, not a refutation of corrected current theorem.

### lem-geometric-median-majority-radius-bound

Steps 1.1–2.1 and exact reader diff reviewed. C_a^2>1 excludes zero denominators for good centers; orthogonal projection gives line distance D sin(theta)<=r and strict cosine >a/(1-a). Rationalized norm quotient gives directional derivative, including contribution +1 at a center equal to m. At least (1-a)k good points and at most ak others make derivative strictly negative, contradicting minimum. k>=1 is essential; 0<a<1/2 and r>0 keep all divisions valid. Reader correctly replaces an inflated def-hilbert-space attribution of derivative identities with their elementary derivation. Minsker Lemma 2.1(a), PDF pp.3–4 complete proof checked, constants agree.

### lem-measurable-minimum-norm-geometric-median-selection

Steps 1.1–3.1 reviewed against exact preimage. Finite Gram–Schmidt yields a closed finite-dimensional center span; Pythagoras strictly lowers objective outside it and coercivity gives compact sublevel minimum. Projection supplier explicitly assumes Countable Choice and yields unique minimum norm. Penalization has strong convexity gap >=lambda||y-z_lambda||^2; least dense-index approximations are Borel through scalar comparison unions and converge. Tikhonov points stay in a fixed finite-dimensional compact ball; nested closed tail sets force their unique cluster point to be z_*. Separable metric basis makes vector pointwise limits Borel, including H={0}. Added enumeration/comparison details enrich an already sound argument. Exact archive/current diff does not contain the delimiter correction claimed in reader prose; no such historical edit is credited.

### lem-multivariate-trimmed-mean-selector-total-and-measurable

Steps 1.1–6.1 reviewed against exact preimage and algorithm. Finite min-max order-statistic formula is continuous even at ties; all feasible sets are convex closed and norm bounded. Upward-closed S has precisely the empty/all/least-integer cases; nested compact sets make the all-scale branch nonempty. g_Q is continuous by compact-sphere uniformity; high Q>=2M yields norm(z-barX)-2epsilon Q and local finite maximum. Low-scale |g_Q-g_0|<=(1+2epsilon)Q gives a uniform limit, hence continuous g_I. Positive continuous R turns nonemptiness into a compact-ball minimum <=0. Strictly convex penalties and dense least-index approximants are Borel and converge to the unique minimum-norm feasible point. Compactness proof selects least sequence indices; no arbitrary choice. epsilon=1 tied rank case and M=0 covered. Reader additions spell out elementary comparison/product measurability and sequential compactness; no overstrong current assertion or substantial unmet prerequisite found.

Level 1 complete. Next action: read level-2 zero covariance, Hilbert/univariate bounds and examples with their actual supplier interfaces.

### lem-zero-covariance-multivariate-trimmed-mean-exact

Steps 1.1–3.1 reviewed: trace=0 gives clean sample all mu on one probability-one event. Each half has m<=epsilon N/5<epsilon N/2=q alterations; integer ranks ceil(q), N-floor(q) remain among the unchanged central entries, including epsilon=1 and odd N. Thus both directional cutoffs equal <mu,v>; clipping displacement <=2eta Q gives mu in every slab and S=Z. All-scale constraint shrinks as i->-infinity, forcing every directional displacement to 0 and intersection={mu}. Arbitrary sample-dependent replacements and eta=0, mu=0 checked. Exact finite covariance, algorithm and selector statements apply.

### thm-finite-variance-geometric-median-mean-bound

Steps 1.1–6.1 and exact preimage/current diff reviewed. Dense finite nearest-center approximants are Borel and strongly measurable; ||X||<=1+||X||^2 gives Bochner first moment. Rank-one trace norm equals ||x||||y||, and quadratic rank-one map continuity gives strong S1 measurability before Bochner integration. Trace and bounded evaluations commute with integral under explicit Countable Choice trace supplier chain. Independent cross terms vanish by integrable product-law Fubini, yielding block variance V/size. floor(n/k)>=n/(2k) and Markov give bad probability <=.1; Bernoulli Chernoff with a=7/18 boosts it. Shrinking-radius limit establishes nonstrict tail only for V>0. V=0 gives exact recovery and strict tail bound. Log-series constants and k-floor inequality give multiplier 11 and log(1.4/delta). Minsker Corollary 4.1 and complete proof, PDF p.8, checked; local balanced blocks and zero caveat verified independently. Reader removes inflated scalar L2 use; trace measurability construction is sound.

### thm-univariate-trimmed-mean-under-replacement

Steps 1.1–4.1 and exact preimage reviewed. Centering shifts both empirical clipping and population threshold sets without assuming unproved translation absolute continuity. Expanded square gives E|Z|1_A<=sigma sqrt(P(A)); clip Lipschitzness plus variance identity controls deterministic clip variance. Binomial Bernstein uses its exact one-sided proof step 2.1, not the two-sided statement alone. Inner/outer exponent rational functions increase for eta/t>=0 and yield 4e^(-9ell/4)<=delta/2; strict count thresholds survive <=2eta N replacements and ceil-rank boundaries. Fixed comparison clips avoid conditional independence of corrupted cutoffs; Bernstein noise <=2sigma sqrt(ell/N). Tail functional absorbs replacement by case splitting endpoint signs. Wider outer quantiles for the second bound give failure 2e^(-3s/2)+2e^(-18s/5)+2e^(-s)<=4e^(-s), s>=ell>log4, and total constant <10. eta>=0 is essential; epsilon<=1/4 implies eta<1/32, compatible with replacement domain. Alpha corrects Q domain to 0<u<1 (Q_1 would be sup R, not a finite real), preserving E for 0<u<=1 and the epsilon=1/4 case E(1,X). Only consumers are the algorithm contextual remark and owning A-page summary; both remain sound with no edits. Lugosi–Mendelson Theorem 1/proof PDF pp.8–13 checked; local strict-count proof avoids the source exponent defect.

### ex-one-corrupted-block-is-rejected-by-the-geometric-median

Verification steps 1.1–2.1 checked: objective M-5z on z<=0, M+3z on [0,M], 5z-M on z>=M has unique minimizer 0 for every M>0. Real inner-product/separability derivation matches exact ordered-field, square-root, absolute-value, Cauchy-completeness and rational-density/countability statements. Countable Choice is explicitly inherited from selector, though direct scalar minimization needs none. Reader adds an elementary prerequisite explanation without changing sample claim or argument; audit enrichment, no manufactured defect.

### cex-half-replacement-prevents-covariance-only-mean-recovery

Exact preimage/current comparison confirms added eta<=1 domain, matching replacement definition. Two point masses at 0 and M give the identical deterministic vector with N entries each; N replacements are admissible at eta=1/2 including floor budget. Both clean covariances vanish and deterministic T cannot output both means. Huber iid mixture is correctly distinguished. The added eta<=1 spells out the replacement definition’s existing fraction domain; classify as audit enrichment, with no invented defect. No logical consumers exist (generated counterexample).

Level 2 complete. Next action: slab proposition, polynomial-tail example and multivariate theorem.

### prop-correct-scale-multivariate-trimming-slab-bound

Steps 1.1–5.1 and exact reader diff reviewed. Normalized nonzero rational directions are countable dense; bounded continuous clips and DCT identify full/countable suprema. Independent clean opposite half is valid ghost sample; finite pair swap and one-sign replacement derive contraction with correct factor. E||N^-1 sum sigma_i(X_i-mu)||<=r follows from variance identity, not an inflated Hilbert-only citation. Tail ramp h has second moment <=epsilon/64, expected empirical supremum <=epsilon/32; local concentration at x=epsilon N/1280 gives strict count <epsilon N/8 in both halves. Odd symmetric Q-clips have EZ/N<=2r, EW/N<=lambda+4Qr and noise <epsilon Q/32; centered clipping bias <=lambda/Q. <=epsilon N/5 alterations yield observed outlier count <13epsilon N/40<epsilon N/2, securing both ceil ranks even at epsilon=1. Comparing clips costs <=epsilon Q/16 and replacements <=3epsilon Q/5; full center error <epsilon Q implies radius <12epsilon Q0<=16epsilon Q0. Nested dyadic slabs follow center shift <2epsilon R. Three bad events <=3exp(-x)<=3delta^2/4<=delta. Positive trace ensures Q0>0. Exact symmetrization/contraction supplier interfaces read; proof derives its one-sided variant. Reader additions supply rational class/ghost realization/variance identity without changing the already sound bound; audit enrichment.

### ex-polynomial-tail-law-with-finite-variance

Verification 1.1–2.1 reviewed against exact preimage. Normalization integral is 3*(1/3)=1; x^2 substitution gives 3*(1-1+1/3)=1. |x|<=1+x^2 makes first absolute moment finite and symmetry gives mean 0. For each lambda>0, exp(lambda x)/(1+x)^4 eventually exceeds 1, hence MGF diverges and every finite sub-Gaussian proxy fails. Real Hilbert/separability derivation uses exact elementary suppliers; iid sample, Countable Choice, delta and k<=n/2 are explicitly imposed before applying the positive-variance nonstrict geometric-median tail. Reader replaces a true elementary L2 first-moment argument by a shorter pointwise estimate and spells out H=R; audit enrichment, no manufactured defect.

Level 3 complete. Next action: final multivariate theorem and focused validation.

### thm-multivariate-trimmed-mean-under-replacement

Steps 1.1–2.1 and every actual supplier argument reviewed. Positive trace uses the independently checked corrected radius-16 slab event, not the false source radius-4 assertion. Deterministic rate supplier checks both all-scale and least-index branches: their output lies in K_i0 by inclusion. Its epsilon Q0 expansion bounds max by a sum, splits log(2/delta), and absorbs lambda_max log2/N into trace/N using lambda_max<=trace. Explicit c_16 is universal and positive; delta approaching 1 does not lose its log2 term. Zero trace is handled by exact-recovery supplier; it is incompatible with absolute continuity for d>=1 but remains a sound unused branch, not a gap. Full theorem restricts eta<=.1, N>=2560log(2/delta), epsilon<=1 and absolutely continuous laws. All consumers retain those hypotheses and total Borel selector. Lugosi–Mendelson Theorem 2, estimator pp.14–16 and full relevant Proposition/Lemmas/nesting argument pp.17–23 checked; current argument corrects source radius independently.

All sixteen required risk reviews are complete. No substantial unmet prerequisite or defective published supplier was identified. No published carrier was edited and no proposed withdrawal was removed.

## Routed decisions and repairs

| Carrier | Verdict | Closed defects |
|---|---|---|
| `alg-geometric-median-of-block-means` | `reviewed_no_defect` (metadata) | none |
| `cex-half-replacement-prevents-covariance-only-mean-recovery` | `reviewed_no_defect` (audit_enrichment) | none |
| `ex-one-corrupted-block-is-rejected-by-the-geometric-median` | `reviewed_no_defect` (audit_enrichment) | none |
| `ex-polynomial-tail-law-with-finite-variance` | `reviewed_no_defect` (audit_enrichment) | none |
| `lem-finite-covariance-matrix-basic-properties` | `amended_repair` | `msf37-batch33-3a-covariance-l2-attribution` |
| `lem-geometric-median-majority-radius-bound` | `accepted_repair` | `msf37-batch33-3a-median-derivative-attribution` |
| `lem-measurable-minimum-norm-geometric-median-selection` | `reviewed_no_defect` (audit_enrichment) | none |
| `lem-multivariate-trimmed-mean-selector-total-and-measurable` | `reviewed_no_defect` (audit_enrichment) | none |
| `prop-correct-scale-multivariate-trimming-slab-bound` | `reviewed_no_defect` (audit_enrichment) | none |
| `thm-finite-variance-geometric-median-mean-bound` | `amended_repair` | `msf37-batch33-3a-hilbert-mean-l2-attribution` |
| `thm-univariate-trimmed-mean-under-replacement` | `amended_repair` | `msf37-batch33-3a-quantile-endpoint-domain` |

Exactly eleven decisions are written; no page, reader or refuter obligations were routed. Completed repairs have `repair_confidence: 1`. Four confirmed nonfatal defects receive separate closed ledger rows. Immediate elementary proof expansions, standard real-Hilbert verification and explicit existing fraction domains are audit enrichment; no defect is manufactured for them.

Alpha changed one item: `thm-univariate-trimmed-mean-under-replacement`, splitting the finite quantile domain from the tail-functional domain. Its manifest statement mirror and endpoint contract were updated. Proof, provenance, dependencies, probability bounds and consumer contracts are otherwise unchanged; no judge record existed to invalidate. The two integral-zero citation quotes in the owned contract were stale after a supplier statement clarification, causing the first strict contract check to report two exact-quote mismatches. Refreshing the quotes to the already reviewed current statement repairs the mechanical drift without changing a mathematical premise or opening a defect row. Reader source repairs on covariance/Hilbert bounds are retained; those decisions are amended because their contract citations now differ from the reader-post carrier.

The algorithm’s added separability dependency is metadata. Both measurable-selector proofs, the polynomial-tail example, five-block example, slab proposition and half-replacement counterexample contain sound reader enrichment; their decisions use reviewed_no_defect with no ledger defects. The delimiter repair mentioned in the reader prose does not occur in the bound pre/post delta; it is not credited.

## Sources and consumer evidence

Read primary sources through browser: [Minsker](https://arxiv.org/pdf/1308.1334), Lemma 2.1(a) and complete proof (PDF pp.3–4), Corollary 4.1 and complete proof (p.8); [Lugosi–Mendelson](https://arxiv.org/pdf/1907.11391), Theorem 1 and full relevant proof (pp.8–13), Theorem 2/estimator (pp.14–16), Proposition 1/Lemmas 1–2 and final nesting argument (pp.17–23); [Boucheron et al.](https://arxiv.org/pdf/math/0503651), Section 3.1 tensorization discussion (pp.9–10). The local entropy/concentration constants were independently derived from the current proof, not asserted to be a verbatim source theorem. Local counterexamples to source exponent/radius assertions are sound; no currently defective published library item was identified.

Every directly cited prerequisite was opened at its relevant current Statement or Definition. Bernstein’s full proof was read because its one-sided step 2.1, rather than its two-sided Statement, is the actual input. The univariate totality supplier’s complete proof and the deterministic multivariate rate supplier’s complete proof were read. Previously completed routed proofs supply the higher-level arguments. Contract citations were checked against those actual interfaces, with Countable Choice retained for singleton-null, Hilbert projection and trace-class suppliers. No readiness record or earlier report was used as mathematical certification.

Supplier statement changes by the reader: univariate eta>=0 and half-replacement eta<=1 only make the imported replacement-fraction domain explicit. Alpha’s quantile domain correction is used solely inside the theorem’s raw-tail functional and proof. Repository reference search finds only its own carrier, the algorithm’s contextual Remark and owning A-page summary. These actual uses impose no Q_1 input and remain sound. Both owned page summaries were read as consumer context; no page decision is owed. There is no affected outside-batch consumer needing supplier-first repair.

## Local validation and handoff

- `node tools/risk-report.mjs research/mathematical-statistics-foundations-37-batch-33.proof-contracts.json`: initial routing passed, with sixteen HIGH/CRITICAL items; final `--require-reviewed --json` passed with `ok: true` and no errors.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-univariate-trimmed-mean-under-replacement.md`: unchanged after the domain edit.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-univariate-trimmed-mean-under-replacement.md`: one proof checked, zero failures.
- `node tools/proof-contract.mjs research/mathematical-statistics-foundations-37-batch-33.proof-contracts.json --strict`: final pass, 23/23 items, zero errors/warnings. Initial two exact-quote mismatches and their resolution are disclosed above.
- `node tools/finite-smoke.mjs research/mathematical-statistics-foundations-37-batch-33.proof-contracts.json`: twelve declared checks passed; these verify finite witnesses only, not the general proofs.
- `node tools/rendercheck.mjs items/thm-univariate-trimmed-mean-under-replacement.md --quiet`: one-file YAML/KaTeX rendering passed. An attempted `rendercheck --help` unexpectedly invoked its default read-only whole-corpus scan; that result is excluded from scoped validation and did not edit sources.
- Final required command after the last item edit/reflow: `node tools/proof-layout.mjs items/thm-univariate-trimmed-mean-under-replacement.md`: one item, five numbered steps, zero defects. All changed item paths were included in that single command.
- Exact obligation coverage checked: eleven unique touched decisions and no extra obligations; sixteen complete risk reviews; four referenced closed rows at `3a-adjudicate`; source delta against immutable reader-post consists only of the authorized quantile-domain correction.
- Defect-ledger append succeeded through its serialized append/render tool. Owned consumer dispositions appended under the batch-33 marker in `briefs/tasks/frontier-dependency-ledger.md`.

Final disposition: one accepted reader repair, three amended repairs, seven reviewed_no_defect metadata/audit enrichments. No open mathematical blocker, published defect, affected outside-batch consumer or pending withdrawal. Current live run status and git log were checked; concluded RESUME files were not used. No judge, decision hash stamp, dispatch, scheduling transition, publication or gate battery was initiated. The engine owns stamping and subsequent validation.
