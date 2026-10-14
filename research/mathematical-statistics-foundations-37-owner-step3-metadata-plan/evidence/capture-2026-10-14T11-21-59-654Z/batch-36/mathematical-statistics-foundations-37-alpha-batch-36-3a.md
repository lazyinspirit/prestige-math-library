# Batch 36 Step-3a adjudication

Run: `mathematical-statistics-foundations-37`; group: `batch-36`. Scope: seven obligations (six refuter findings and one touched example). Independent current-content review; no judgments or stamps.

The six citation findings are confirmed: the Springer DOI is a Horváth–Kokoszka chapter, whereas the Hörmann–Kokoszka chapter is in Handbook of Statistics 30 (2012), pp.157–186, DOI 10.1016/B978-0-444-53858-1.00007-7. Publisher and author-institution records were checked at https://link.springer.com/chapter/10.1007/978-1-4614-3655-3_16 (authors, pp.289–341) and https://tugraz.elsevierpure.com/en/publications/functional-time-series/ (bibliography and DOI). Corrected references retain the chapter as bibliographic context and omit unverified section/page locators. No claim of reading its unavailable full text is made. Local proofs supply all logical prerequisites.

## def-l2-m-approximable-causal-bernoulli-shift

Reviewed the complete Definition and Remarks and all 19 direct supplier statements. The Borel finite measure gives the real separable L2 quotient under Countable Choice. Countable independent-copy and sigma-finite product suppliers supply the replacement extension under CC+DC, including arbitrary measurable innovation spaces. Independent arrays indexed by t,m give equal marginals, joint stationarity and independent past/future windows. Full replacement m=0 is separate; delta_0 is finite by the L2 triangle inequality. Constant/zero maps and finite-memory maps satisfy the convention. Finite tie-broken dense-point approximants establish strong measurability. Citation repair changes no Definition, dependencies, claim, proof or manifest interface; no consumer repair is needed.

## lem-finite-dependent-vector-clt

Reviewed all six proof steps and all 14 direct suppliers. The finite covariance expansion gives a positive semidefinite Sigma and handles zero projection variance. Centered clipping converges in L2, preserving m-dependence; finite-lag covariance convergence gives sigma_K^2 convergence. Blocks of length floor(n^(1/4)), separated by m omissions, are jointly independent by successive past/future independence. On the eventual tail where block length exceeds m and total variance is positive, the variance formula and vanishing maximum normalized block bound verify Lindeberg. Omitted o(n) indices have O(o(n)) variance. The uniform truncation-error bound permits successive n then K characteristic-function limits; AC covers the specified-law criterion and Cramer–Wold. m=0, singular covariance and zero covariance are sound. Citation-only correction leaves mathematics and consumer interfaces unchanged.

## lem-positive-trace-class-covariance-defines-hilbert-gaussian

Reviewed every step and all 20 direct suppliers. Under AC the compact self-adjoint eigenbasis supplier applies because trace class implies compactness; separability makes that basis at most countable. Independent normal coordinates exist under inherited CC+DC. Tonelli gives finite expected squared-coordinate sum, so the orthogonal Gaussian series converges almost surely and in L2. Closed-set preimages prove Borel measurability, and finite nearest-dense-point maps prove strong measurability. Characteristic-function limits identify every scalar projection, including variance zero; Cauchy–Schwarz passes covariance products through L2 convergence. Finite bases use eventually constant sums and an empty basis gives G=0. Citation-only correction does not alter the statement, proof or dependencies.

## lem-real-l-two-kernel-operator-is-bounded-and-rank-one-compatible

Reviewed four proof steps and all ten supplier interfaces. Finite Borel product measure is sigma-finite; Tonelli and Fubini apply to the explicitly integrable products. Product null strips have measure zero, giving representative-independent boxtimes classes. Cauchy–Schwarz on I^2 and then its sections bounds T_k by ||k||_2; Fubini removes exceptional sections and null changes. Rank-one orientation is (x tensor y)h=<h,y>x over the real field. Product-kernel pairing factors with absolute integrability. Zero kernels and zero factors are included. Countable Choice covers the L2 Hilbert interfaces. Citation-only correction leaves claims and consumer uses unchanged.

## lem-independent-centered-hilbert-elements-have-zero-expected-inner-product

Reviewed both steps, local Parseval proof and all ten direct supplier interfaces. The fixed complete basis avoids a choice of basis. Continuous scalar coordinates commute with Bochner integration, so their means vanish; measurable maps preserve independence, and scalar factorization applies to integrable products. Finite projections converge and are contractions; ||U|| ||V|| is integrable by Cauchy–Schwarz, so dominated convergence passes the inner product expectation. Empty/finite bases and U=0 or V=0 are harmless. No mathematical or citation defect was found.

## lem-long-run-covariance-is-trace-class

Reviewed all five steps and all 21 direct suppliers. The rank-one norm equals ||x|| ||y|| (its sole singular value; the nuclear representation gives the upper bound and operator norm gives equality). Continuous tensor maps applied to finite simple approximants are strongly measurable in S1 and K, with integrable norms. X_0 is independent of X_{j,j-1}; at j=1 the full replacement is used. Scalar factorization and bounded evaluations kill the independent tensor expectation; rectangle density kills the kernel expectation. Each positive lag is bounded by sigma delta_{j-1}, including finite delta_0; absolute summability and the CC Banach supplier yield both series. Finite triangular covariance weights converge in trace norm; positivity and self-adjointness pass in operator norm. Bounded kernel evaluations commute with integration and limits, proving T_c=Gamma without selecting pointwise representatives. Zero process is included. Citation-only repair leaves statement and consumer interfaces intact.

## ex-nonsummable-physical-dependence-linear-process

Accepted the reader repair after independently reviewing all four proof steps and the 13 supplier statements. The deterministic least N_0 and recursively least N_r exist because square-coefficient tails vanish. The total product-measurable subsequence filter agrees almost surely with the L2 series by Chebyshev and Borel–Cantelli; the specified N_r already satisfies the bounds used in step 2.1. Centering and finite second moment pass under L2 convergence. Mixed replacement inputs remain iid, and independent differences have variance 2, giving delta_m squared = 2 sum_{k>=m}(k+1)^(-2). Integral comparison yields delta_m >= sqrt(2/(m+1)) and divergence; no converse CLT claim is made. Current raw item hash equals frozen reader-post 6bc79c0fd34cbab8fa93b233879c0c0f858a2ee6a604f58d255cd66b7c90e235; pre hash is 3d03bc0a099ea74d8375191e7b2a6c6caa2e8ccbefbe85127d41bb258c7084be. Contract pre/post hashes differ, and the current step-1.1 existence derivation matches the repair described in the reader report; manifest hashes agree. The reader initial-cutoff correction is complete; no further item edit is necessary.

## thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts

Reviewed all six steps and 28 direct dependencies, including the independently reviewed local suppliers. Independent replacement arrays remain distinct even when h=m. The lag-error bounds give sup_n E||U_n-U_n^(m)||^2 <= delta_m^2+2 delta_m sum delta_h+2 sigma(m-1)delta_m. Summability gives liminf m delta_m=0, not a full-sequence rate; the least-index subsequence makes the bound vanish. Trace-norm covariance convergence bounds every finite projection second moment. Cauchy–Schwarz controls covariance differences uniformly in n, and the finite-dependent vector CLT then identifies their Gaussian limits. Characteristic-function comparisons at a=t b cover every frequency. Parseval and dominated convergence make projection tails vanish; independent-copy subtraction bounds the sample-sum tails uniformly in n by alpha_K^2+2 alpha_K sum_{h>=0}delta_h. Tonelli controls Gaussian tails. Bounded uniformly continuous tests and Portmanteau prove Hilbert-law convergence. Zero Gamma and finite projections are covered; no time-indexed path limit is asserted. The HKR Theorem 1 hypotheses and Appendix A.1 route were read; local proof independently supplies the finite-dependent input and justified tail transfer. Citation-only correction leaves the theorem and consumers unchanged.

## cex-terminal-weak-limit-does-not-imply-path-weak-limit

Reviewed all three steps and both supplier statements. The zero and sine paths are continuous H-valued paths with endpoint zero. The truncated supremum norm is bounded and 1-Lipschitz in the sup metric; its expectations alternate 0 and 1, so no weak path-law limit exists. The witness refutes endpoint-to-path inference only and does not assert that these paths arise from the theorem’s stationary sample sums. No choice or probabilistic construction is required for the deterministic point-mass laws. No defect was found.

## ex-finite-dependent-functional-moving-average

Reviewed all four steps and nine direct suppliers. Rademacher mean and variance give E||X_0||^2=5. Replacing the older innovation at m=1 yields delta_1^2=8; retaining both at m>=2 makes the error zero. Lag-zero and signed lag-one covariances are 5 and 2, with all farther covariances zero by disjoint innovations; hence Gamma=9(e tensor e). Past/future coordinate groups verify 1-dependence at the exact a+2 boundary. The finite-coordinate filter is measurable, centered and square-integrable; AC permits the theorem and its CC+DC constructions. The finite-rank Gaussian conclusion is licensed. No defect was found.

## ex-geometrically-summable-bernoulli-shift

Reviewed three steps and eight direct suppliers. Uniform absolute convergence for all sign sequences gives a total product-measurable causal map and bound 2. Independence and dominated convergence give mean zero and variance 4/3. Independent replacement differences have variance twice the coefficient-square tail, hence delta_m^2=(8/3)4^(-m), including full replacement if m=0 is considered. The shared innovation indices give gamma_j=(4/3)2^(-j) for j>=0 and symmetric negative lags; their sum is 4. Under AC all hypotheses of the local Hilbert CLT hold, with finite-rank covariance 4(e tensor e). No claim of path-process convergence is made. No defect was found.

## Source evidence and review limits

Read the current carriers, reader report/findings, refuter artifact, pre/post snapshots, owning manifest, proof contracts and cited supplier Statement/Definition/Facts interfaces. Independently traced each argument; this review does not recursively re-audit every transitive published proof. The ordinary-risk local Parseval supplier was also reviewed: finite Pythagoras gives projection minimality and contraction; density proves norm convergence and Parseval, with no extra choice assumption for a fixed basis.

The accessible primary source [Horváth–Kokoszka–Reeder](https://www.stat.colostate.edu/~piotr/horvathKokoszkaReeder2013.pdf), §1.1 (1.1)–(1.3), Theorem 1 (printed pp.104–106), and complete Appendix A.1 (pp.117–119), was read. The source asserts a centered finite-second-moment causal-shift sample-sum CLT and L2 covariance-kernel convergence; its finite-dimensional CLT is cited, while our local lemma supplies a proof. The authored proof's subsequence and uniform projection-tail arguments were checked independently rather than inferred from the source.

Read [Teschl](https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf), §2.1, Theorems 2.2–2.4 and their arguments (printed pp.49–51; PDF pp.61–63). The fixed complete-basis local projection argument has the stated real-Hilbert convention and no additional basis-selection obligation. Read [Durrett](https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf), §2.1.2, Theorem 2.1.12 and complete proof (printed pp.48–49; PDF pp.55–56): independence and integrability license scalar product factorization.

The unavailable Hörmann–Kokoszka chapter is retained as corrected bibliographic context only. Its original section/page locators and claimed browser reading are historical author reports, not verified source statements. Updated batch coverage records identify this limitation and preserve the retrieval history and local alternative proofs. No original worker report or frozen snapshot was altered.

## Verdicts and maintenance

Exactly seven decisions: `refuter:36:1` through `refuter:36:6` are `confirmed_fatal`, with one closed citation-inaccurate row each; the nonsummable example's touched obligation is `accepted_repair`, with a closed initial-cutoff row. All completed repairs have `repair_confidence: 1`. Fatal here includes the incorrect source identities; it does not assert that the locally proved mathematical claims are false. The six source repairs preserve all mathematical bodies except formatter whitespace, so no material rewrite invalidates a mathematical judge record. No Statement or Definition was changed by Alpha.

Pre/post snapshots show that the nonsummable example alone has a reader item/contract delta; its current source exactly matches the post snapshot. The other six disputed references persisted through the reader. Risk-review enrichment changes current contract carriers; the engine owns hashing and stamps. Manifest dependencies and interfaces remain consistent for all 12 items and require no edits. Batch cross-dependencies are empty, stable IDs remain, and the owned-consumer frontier ledger was updated. No defective published item or outside mathematical consumer was found; no published-content edit, withdrawal or mathematical escalation is needed.

## Local checks and owner alerts

- Initial `risk-report.mjs` routed ten CRITICAL items and one HIGH item. Final `--require-reviewed` passes: all eleven complete specific reviews are in the owning contract.
- `proof-contract.mjs research/mathematical-statistics-foundations-37-batch-36.proof-contracts.json --strict`: 12/12 checked, 0 errors, 0 warnings.
- Batched reflow of the six citation-edited items: two unchanged, four reflowed; proof semantics unchanged. Batched precheck: 5 proof-bearing items passed, 0 failing; definition not applicable.
- Batched rendercheck on those six items: all frontmatter and KaTeX expressions parse.
- Final single batched `proof-layout.mjs` on all six Alpha-changed item paths: 6 items, 26 steps, 0 defects.
- Native defect-ledger append validated and appended all seven closed rows and refreshed the generated view under its lock.
- `defect-ledger.mjs validate --run mathematical-statistics-foundations-37` fails only on outside rows: `msf37-batch24-3a-fixed-radius-truncation` uses invalid subclass `proof-step-overstatement`; `msf37-batch35-3a-test-supermartingale-source-locator` uses invalid location `sources`. Owner/the owning batches must normalize these schema fields. This is a mechanical alert, not a mathematical defect row or an Alpha waiver.

No gate battery, judging, self-certification, dispatch or engine transition was initiated. Required local work is complete; the engine must stamp decisions and run its gates, and the owner must address the two outside ledger schema errors.
