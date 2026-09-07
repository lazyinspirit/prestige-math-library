# frontier-33 batch 3 — scaffold checkpoint

Authorized outputs: this notes file, sibling pages.json and coverage.json only. No authored items, published pages, plan structure, or workflow state changed.

Design read: research/plan-probability-track.md PT-5, lines 553–608; SCHEMA.md and current plan-spec.json read. Spec A/B orders 288.105/288.106 and requires are preserved. Design gives no numeric order; its broader PT-1–4 and MT-8/11/14 prerequisite list is recorded for drift, while spec directly requires modes-of-convergence-for-random-variables-examples. Validate the induced dependency closure; do not adjudicate structural drift here.

Conventions: all variables are finite real measurable functions, sums start at 1 with S_0=0; translate published zero-based finite sums explicitly. IID means mutual independence and common law. Fixed truncation uses |X| <= A, A>0, and is zero outside; it is not clipping. Normalizers are strictly positive, deterministic, nondecreasing, tending to infinity where stated. All probability-one statements use one countable measurable event. No CLT, characteristic-function continuity theorem, martingale convergence theorem, or unproved external result is used.

Design corrections: the series tail-event lemma is already established in published cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event (including its measurable Cauchy description); reuse it in the series definition instead of minting the design lemma. The design B7 deterministic example cannot refute variance necessity (all deterministic variances vanish); retain its intended claim with rare symmetric jumps, and keep deterministic harmonic/alternating contrasts inside the three-condition examples. Roch Note 4 Appendix A, not Note 3 alone, supplies the weak-law converse. Roch has sign/atom transcription pitfalls: use equality of laws for symmetry and direct first-crossing estimates with strict inequalities; do not copy the faulty sign in (5) of Lemma 4.19. Source mathematical statements are checked against the displayed proofs.

Sources read through browser full PDF text: Durrett 5th edition, author-hosted PDF; Varadhan Chapter 3 and complete-course contents; Roch Notes 4 and 5 at the author course index. Exact harvested ranges will be in coverage.json. Shell curl failed DNS for sites.math.duke.edu; browser access succeeded. Mechanical fetch/liveness validators remain outstanding; no byte/hash stamp is fabricated.

The following records are checkpointed after each scaffolded item. Each includes exact proposed claim, dependencies, proof route and source locators. Proofs are planned, not authored or independently reviewed. Next: finish coverage dispositions, run required gates and record all remaining failures.

Existence conventions: uses of the established countable product and countable copies inherit its Countable Choice and Dependent Choice hypotheses. Finite product symmetrization uses the two-factor product measure. Statements conditional on a given sequence do not assert a stronger choice-free construction.

## def-identically-distributed-and-iid-random-variables

Page: weak-laws-and-series-of-independent-random-variables. Kind: definition.

Claim/conventions: A family is identically distributed if every marginal law is the same; it is IID if it is also mutually independent.

Dependency IDs: def-independent-random-elements, def-law-or-distribution-of-a-random-element.

Proof/dependency rationale: Define using established laws and independence, with no moment hypothesis.

Source support: Section 2.2.1, p. 58, IID paragraph — https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf.

Provenance: statement ai-altered, proof not-applicable. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## def-partial-sums-and-sample-means

Page: weak-laws-and-series-of-independent-random-variables. Kind: definition.

Claim/conventions: S_0=0, S_n=sum_{k=1}^n X_k, and sample mean S_n/n for n>=1. For a finite row of length r_n use S_n=sum_{k=1}^{r_n}X_{n,k}.

Dependency IDs: def-random-element-and-real-random-variable, thm-arithmetic-and-lattice-operations-preserve-measurability, def-finite-sum.

Proof/dependency rationale: Finite measurable arithmetic makes each quantity a random variable; no independence or moments are implicit.

Source support: Section 2.2.2, p. 59, opening row-sum notation — https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf.

Provenance: statement ai-altered, proof not-applicable. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## thm-chebyshev-weak-law-for-uncorrelated-arrays

Page: weak-laws-and-series-of-independent-random-variables. Kind: theorem.

Claim/conventions: For finite square-integrable pairwise uncorrelated rows and b_n>0, if sum_k Var(X_{n,k})/b_n^2 ->0, then (S_n-E S_n)/b_n ->0 in L2 and probability. No independence between rows is required.

Dependency IDs: def-partial-sums-and-sample-means, def-moments-variance-and-covariance, lem-variance-and-covariance-identities-for-random-variables, cor-chebyshev-inequality-for-random-variables, def-convergence-in-probability, def-convergence-in-lp-for-random-variables, cor-expectation-linearity-monotonicity-and-modulus-bound.

Proof/dependency rationale: Expand the finite centered square using covariance bilinearity, cancel off-diagonal terms, then apply Chebyshev.

Source support: Theorems 2.2.1, 2.2.3 and 2.2.6, pp. 56–59 — https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## cor-iid-finite-variance-weak-law

Page: weak-laws-and-series-of-independent-random-variables. Kind: corollary.

Claim/conventions: For IID square-integrable X_k with mean mu and variance sigma^2, E|S_n/n-mu|^2=sigma^2/n and S_n/n ->mu in probability.

Dependency IDs: def-identically-distributed-and-iid-random-variables, thm-chebyshev-weak-law-for-uncorrelated-arrays, thm-factorization-of-expectations-for-independent-variables.

Proof/dependency rationale: Independence factors mixed moments; apply row variance with b_n=n.

Source support: Section 2.2.1, p. 58 — https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf; Theorem 3.2, pp. 55–56 — https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## def-truncation-at-a-fixed-level

Page: weak-laws-and-series-of-independent-random-variables. Kind: definition.

Claim/conventions: For A>0 set X^(A)=X 1_{|X|<=A}. This is measurable and bounded by A; every finite moment exists.

Dependency IDs: def-random-element-and-real-random-variable, thm-arithmetic-and-lattice-operations-preserve-measurability.

Proof/dependency rationale: Borel threshold events and measurable arithmetic establish the definition; boundedness on a probability space establishes integrability inline.

Source support: Section 2.2.3, p. 62 — https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf.

Provenance: statement ai-altered, proof not-applicable. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## thm-khinchin-weak-law-for-iid-integrable-variables

Page: weak-laws-and-series-of-independent-random-variables. Kind: theorem.

Claim/conventions: If X_k are IID and E|X_1|<infinity, then S_n/n -> E X_1 in L1 and in probability.

Dependency IDs: def-identically-distributed-and-iid-random-variables, def-partial-sums-and-sample-means, def-truncation-at-a-fixed-level, cor-iid-finite-variance-weak-law, lem-measurable-functions-preserve-independence, thm-dominated-convergence, cor-markov-inequality-for-random-variables, thm-finite-measure-l-r-includes-into-l-p-for-p-less-r, cor-expectation-linearity-monotonicity-and-modulus-bound.

Proof/dependency rationale: For fixed A, the centered truncated average has L1 norm at most its L2 norm, tending to zero. The residual centered average has L1 norm at most 2 E[|X_1|1_{|X_1|>A}]. Let n then A tend to infinity; Markov gives probability convergence.

Source support: Theorem 3.3, first proof, pp. 56–57 — https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf; Theorem 2.2.14, pp. 64–65 — https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## def-almost-sure-convergence-of-a-random-series

Page: weak-laws-and-series-of-independent-random-variables. Kind: definition.

Claim/conventions: The series sum_{n>=1} X_n converges almost surely when its real partial sums converge on a measurable event of probability one. Its convergence event is the countable Cauchy event and belongs to the tail sigma-algebra, regardless of independence; under independence its probability is zero or one.

Dependency IDs: def-partial-sums-and-sample-means, def-almost-sure-convergence-of-random-variables, thm-series-cauchy-criterion, thm-arithmetic-and-lattice-operations-preserve-measurability, cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable.

Proof/dependency rationale: Spell out the countable Cauchy event using tolerances 1/r, and use the existing tail-event proof without minting a duplicate theorem. The finite limit extended by zero on the complement is measurable by measurable limits. Inline tail examples: limsup {X_n in B_n} is tail measurable; a finite change has vanishing effect on S_n/c_n if c_n>0 tends to infinity, whereas it can change the unnormalized limsup sign.

Source support: Section 2.5, Example 2.5.2 p. 81 and series convention p. 84 — https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf; Section 3.4 opening, p. 61 — https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf.

Provenance: statement ai-altered, proof not-applicable. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## thm-kolmogorov-maximal-inequality

Page: weak-laws-and-series-of-independent-random-variables. Kind: theorem.

Claim/conventions: For independent centered square-integrable X_1,...,X_n and lambda>0, P(max_{1<=k<=n}|S_k|>=lambda)<=Var(S_n)/lambda^2.

Dependency IDs: def-partial-sums-and-sample-means, def-independent-random-elements, def-moments-variance-and-covariance, thm-grouping-independent-sigma-algebras, thm-factorization-of-expectations-for-independent-variables, lem-variance-and-covariance-identities-for-random-variables, thm-arithmetic-and-lattice-operations-preserve-measurability.

Proof/dependency rationale: Disjoint first-crossing events A_k belong to sigma(X_1,...,X_k). Factor E[1_{A_k}S_k(S_n-S_k)]=0 using grouping and integrability. Sum E[1_{A_k}S_n^2]>=lambda^2 P(A_k).

Source support: Theorem 2.5.5, p. 84 — https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf; Lemma 3.7, p. 62 — https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## thm-kolmogorov-convergence-criterion

Page: weak-laws-and-series-of-independent-random-variables. Kind: theorem.

Claim/conventions: For independent centered square-integrable X_n, sum Var(X_n)<infinity implies convergence of sum X_n almost surely and in L2 to the same finite random variable.

Dependency IDs: thm-kolmogorov-maximal-inequality, def-almost-sure-convergence-of-a-random-series, thm-series-cauchy-criterion, thm-continuity-from-below-for-measures, thm-continuity-from-above-for-measures, lem-variance-and-covariance-identities-for-random-variables, thm-riesz-fischer-completeness-of-l-p, thm-lp-convergence-implies-convergence-in-probability, thm-almost-sure-convergence-implies-convergence-in-probability, thm-limits-in-probability-are-unique-almost-surely.

Proof/dependency rationale: Maximal inequality bounds the supremum of each tail by the variance tail. For w_m=sup_{i,j>=m}|S_i-S_j| use its monotonicity and rational tolerances to obtain one a.s. Cauchy event. L2 completeness supplies an L2 limit; uniqueness of probability limits identifies it.

Source support: Theorem 2.5.6, pp. 84–85 — https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf; Theorem 3.10, pp. 65–66; L2 strengthening uses published completeness — https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## cor-kolmogorov-two-series-sufficiency

Page: weak-laws-and-series-of-independent-random-variables. Kind: corollary.

Claim/conventions: For independent square-integrable X_n, if sum E X_n converges in R and sum Var(X_n)<infinity, then sum X_n converges almost surely (also in L2).

Dependency IDs: thm-kolmogorov-convergence-criterion, def-almost-sure-convergence-of-a-random-series, lem-measurable-functions-preserve-independence, lem-variance-and-covariance-identities-for-random-variables.

Proof/dependency rationale: Apply the centered criterion and add the convergent deterministic series.

Source support: Theorem 3.11, p. 66 — https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## def-symmetric-real-random-variable

Page: weak-laws-and-series-of-independent-random-variables. Kind: definition.

Claim/conventions: A real random variable X is symmetric if X and -X have the same law. Symmetry does not imply existence of its expectation.

Dependency IDs: def-law-or-distribution-of-a-random-element.

Proof/dependency rationale: Use equality of measures, so atoms cause no distribution-function boundary ambiguity.

Source support: Appendix A, Definition 4.16, p. 9 — https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf.

Provenance: statement ai-altered, proof not-applicable. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## lem-symmetrization-for-independent-random-series

Page: weak-laws-and-series-of-independent-random-variables. Kind: lemma.

Claim/conventions: On the product of a probability space with itself, X_n(omega) and X_n(omega-prime) form two independent copies of the whole independent sequence. Z_n=X_n-X_n-prime are independent and symmetric. A.s. convergence of sum X_n implies that of sum Z_n. If |X_n|<=A then |Z_n|<=2A, E Z_n=0 and Var(Z_n)=2 Var(X_n).

Dependency IDs: def-independent-random-elements, def-symmetric-real-random-variable, def-almost-sure-convergence-of-a-random-series, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-grouping-independent-sigma-algebras, lem-measurable-functions-preserve-independence, thm-factorization-of-expectations-for-independent-variables, lem-variance-and-covariance-identities-for-random-variables.

Proof/dependency rationale: The product rectangle formula gives the independent copies; grouping gives independence of coordinate pairs and exchange of the two coordinates gives symmetry. Intersect the two probability-one convergence events. No converse without centering is claimed.

Source support: Theorem 3.12 necessity, p. 67 — https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf; Appendix A, Example 4.17, p. 9 — https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## lem-bounded-centered-convergent-series-have-summable-variances

Page: weak-laws-and-series-of-independent-random-variables. Kind: lemma.

Claim/conventions: If independent centered X_n obey |X_n|<=C for one finite C and sum X_n converges a.s., then sum Var(X_n)<infinity.

Dependency IDs: def-almost-sure-convergence-of-a-random-series, def-partial-sums-and-sample-means, def-independent-random-elements, thm-grouping-independent-sigma-algebras, thm-factorization-of-expectations-for-independent-variables, lem-variance-and-covariance-identities-for-random-variables, thm-continuity-from-below-for-measures, cor-expectation-linearity-monotonicity-and-modulus-bound.

Proof/dependency rationale: Choose l and delta>0 with P(sup_k|S_k|<=l)>=delta. Set F_n={max_{k<=n}|S_k|<=l}, F_0=Omega. The stopped integral identity gives delta Var(X_n)<=E[S_n^2;F_n]-E[S_{n-1}^2;F_{n-1}]+(l+C)^2 P(F_{n-1} minus F_n). Telescope: delta sum_{k<=n}Var(X_k)<=l^2+(l+C)^2. This uses no stopping-time theorem.

Source support: Lemma 3.13 and complete proof, pp. 67–68 — https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## lem-three-series-necessity-for-truncated-means-and-variances

Page: weak-laws-and-series-of-independent-random-variables. Kind: lemma.

Claim/conventions: If independent X_n have sum X_n convergent a.s., then for every A>0, sum P(|X_n|>A)<infinity, sum Var(X_n^(A))<infinity and sum E X_n^(A) converges.

Dependency IDs: lem-symmetrization-for-independent-random-series, lem-bounded-centered-convergent-series-have-summable-variances, thm-kolmogorov-convergence-criterion, def-truncation-at-a-fixed-level, cor-first-borel-cantelli-lemma-for-events, cor-second-borel-cantelli-lemma-under-pairwise-independence, lem-measurable-functions-preserve-independence, lem-series-tail-invariance.

Proof/dependency rationale: Terms tend to zero; BC2 forces the probability series to converge. Truncated and original sums differ finitely a.s. Symmetrize the bounded truncations and apply the bounded-centered lemma, then the centered convergence criterion. Subtract the two convergent series to recover the deterministic means.

Source support: Theorem 3.12 necessity and Lemma 3.13, pp. 67–68 — https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## thm-kolmogorov-three-series-theorem

Page: weak-laws-and-series-of-independent-random-variables. Kind: theorem.

Claim/conventions: For independent real X_n and A>0, sum X_n converges a.s. iff sum P(|X_n|>A)<infinity, sum E X_n^(A) converges, and sum Var(X_n^(A))<infinity. The conditions hold for one A>0 iff they hold for every A>0.

Dependency IDs: def-almost-sure-convergence-of-a-random-series, def-truncation-at-a-fixed-level, lem-three-series-necessity-for-truncated-means-and-variances, cor-kolmogorov-two-series-sufficiency, cor-first-borel-cantelli-lemma-for-events, lem-measurable-functions-preserve-independence, lem-series-tail-invariance.

Proof/dependency rationale: Sufficiency: two-series for bounded truncations plus BC1 and finite-change invariance. Necessity is the preceding direct symmetrization lemma for arbitrary A. Form all numerical series after fixed truncation, never subtract infinite expectations.

Source support: Theorem 2.5.8, p. 85 — https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf; Theorem 3.12, pp. 66–68 — https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## lem-kronecker-summation-lemma

Page: weak-laws-and-series-of-independent-random-variables. Kind: lemma.

Claim/conventions: If 0<b_n is nondecreasing with b_n ->infinity and sum x_n/b_n converges, then (sum_{k<=n}x_k)/b_n ->0.

Dependency IDs: lem-abel-summation-by-parts, thm-series-cauchy-criterion.

Proof/dependency rationale: Apply Abel summation to convergent partial sums t_n of x_n/b_n. Put b_0=t_0=0. The weights (b_k-b_{k-1})/b_n are nonnegative and sum to one; split at a fixed index to show their average of t_{k-1} tends to lim t_n.

Source support: Theorem 2.5.9 and full proof, pp. 85–86 — https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## thm-kolmogorov-strong-law-under-summable-normalized-variances

Page: weak-laws-and-series-of-independent-random-variables. Kind: theorem.

Claim/conventions: For independent square-integrable X_n and 0<b_n nondecreasing tending to infinity, sum Var(X_n)/b_n^2<infinity implies b_n^-1 sum_{k<=n}(X_k-E X_k)->0 a.s.

Dependency IDs: thm-kolmogorov-convergence-criterion, lem-kronecker-summation-lemma, lem-measurable-functions-preserve-independence, lem-variance-and-covariance-identities-for-random-variables, def-partial-sums-and-sample-means, thm-integral-test-for-series.

Proof/dependency rationale: Apply the centered convergence criterion to (X_n-E X_n)/b_n, then apply Kronecker pointwise on its probability-one event. State square integrability explicitly instead of mentioning only finite means. Inline rate example: for IID centered L2 variables, b_n=sqrt(n)(log n)^(1/2+epsilon) for n>=2 gives a summable variance series by the integral test, hence S_n/b_n ->0 a.s.; choose the first positive normalizer to preserve monotonicity.

Source support: Theorems 2.5.6 and 2.5.9; proof of Theorem 2.5.11, pp. 84–87 — https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## cor-independent-nonidentical-finite-variance-strong-law

Page: weak-laws-and-series-of-independent-random-variables. Kind: corollary.

Claim/conventions: For independent square-integrable X_n with sum Var(X_n)/n^2<infinity, (S_n-E S_n)/n ->0 a.s.

Dependency IDs: thm-kolmogorov-strong-law-under-summable-normalized-variances.

Proof/dependency rationale: Specialize the normalizer to n; no common law or common mean is needed.

Source support: Theorems 2.5.6 and 2.5.9, pp. 84–86 — https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## lem-one-sided-maximal-inequality-for-symmetric-independent-sums

Page: weak-laws-and-series-of-independent-random-variables. Kind: lemma.

Claim/conventions: If independent summands are symmetric, then for every real a, P(max_{1<=k<=n} S_k>a)<=2 P(S_n>a). Consequently P(max_{k<=n}|S_k|>t)<=2 P(|S_n|>t) for t>0.

Dependency IDs: def-symmetric-real-random-variable, def-partial-sums-and-sample-means, thm-grouping-independent-sigma-algebras, lem-measurable-functions-preserve-independence.

Proof/dependency rationale: On the first crossing of a at k, the unused tail is independent and symmetric, so has probability at least 1/2 to be nonnegative. Apply the result also to -S and sum for the two-sided bound. No moment hypotheses.

Source support: Section 2.2, Lemma 5.13 and proof, p. 8 — https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes5.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## lem-independent-copy-symmetrization-tail-bounds

Page: weak-laws-and-series-of-independent-random-variables. Kind: lemma.

Claim/conventions: For an independent copy X-prime of real X, P(|X-X-prime|>t)<=2P(|X|>t/2). If M>=0 satisfies P(|X|<=M)>=1/2, then P(|X-X-prime|>t)>=P(|X|>t+M)/2 for t>0; such an M always exists.

Dependency IDs: lem-symmetrization-for-independent-random-series, thm-continuity-from-below-for-measures.

Proof/dependency rationale: Triangle inequality gives the upper bound. The independent event {|X|>t+M, |X-prime|<=M} gives the lower bound. Continuity from below on [-M,M] supplies M. This symmetric interval variant of the median estimate avoids adding median machinery.

Source support: Appendix A, Lemma 4.18 and proof, pp. 9–10; symmetric-interval variant — https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## thm-truncation-weak-law-for-independent-arrays

Page: weak-laws-and-series-of-independent-random-variables. Kind: theorem.

Claim/conventions: For independent finite rows X_{n,k}, b_n>0 tending to infinity, set Y_{n,k}=X_{n,k}1_{|X_{n,k}|<=b_n}. If sum_k P(|X_{n,k}|>b_n)->0 and b_n^-2 sum_k Var(Y_{n,k})->0, then (sum_k X_{n,k}-sum_k E Y_{n,k})/b_n ->0 in probability.

Dependency IDs: def-truncation-at-a-fixed-level, thm-chebyshev-weak-law-for-uncorrelated-arrays, lem-measurable-functions-preserve-independence, def-convergence-in-probability, thm-finite-and-countable-subadditivity-of-measures.

Proof/dependency rationale: Union bound controls the event on which any truncation differs; the uncorrelated-array law controls centered truncated sums. No dependence condition between rows.

Source support: Theorem 2.2.11, pp. 62–63; second-moment sufficient form — https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf; Section 2.1, Theorem 4.8 and proof, p. 4; variance form — https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## lem-vanishing-tail-control-implies-small-truncated-second-moment

Page: weak-laws-and-series-of-independent-random-variables. Kind: lemma.

Claim/conventions: For real X, n P(|X|>n)->0 implies x P(|X|>x)->0 as real x->infinity and E[X^2 1_{|X|<=n}]/n ->0. Also, E|X|^p<infinity for every 0<p<1.

Dependency IDs: def-truncation-at-a-fixed-level, thm-layer-cake-formula-for-l-p-powers.

Proof/dependency rationale: Use the integer part and monotonicity of tail probabilities. The layer-cake bound E[X^2 1_{|X|<=n}]<=2 integral_0^n t P(|X|>t)dt and a fixed-prefix/vanishing-tail split prove the limit. For 0<p<1, apply layer cake and bound the large-t integrand by a constant times t^(p-2).

Source support: Theorem 2.2.12 proof with Lemma 2.2.13, pp. 63–64 — https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## lem-largest-summand-bound-for-symmetric-independent-variables

Page: weak-laws-and-series-of-independent-random-variables. Kind: lemma.

Claim/conventions: For independent symmetric real Y_1,...,Y_n, t>0 and S_n=sum Y_k, P(|S_n|>=t)>=P(max_k|Y_k|>=t)/2; the same comparison holds with strict inequalities. For IID Y_k and p=P(|Y_1|>t), this gives P(|S_n|>t)>=(1-(1-p)^n)/2>=(1-exp(-np))/2.

Dependency IDs: def-symmetric-real-random-variable, def-partial-sums-and-sample-means, thm-independent-random-elements-have-product-joint-law, thm-arithmetic-and-lattice-operations-preserve-measurability.

Proof/dependency rationale: Partition by the least index j with largest absolute summand. Its selection event depends only on magnitudes and is invariant under flipping coordinate j. Independence and symmetry make the joint law invariant under that flip. For R=sum_{k!=j}Y_k, at least one of |R+Y_j| and |R-Y_j| is >=|Y_j|. Integrate on the selection event, then sum over j. Handle strict thresholds directly; do not copy the source sign error or its atom-sensitive CDF shorthand.

Source support: Roch Note 4, Appendix A, Lemma 4.19 and proof, p. 10 — https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## thm-truncated-centering-criterion-for-an-iid-weak-law

Page: weak-laws-and-series-of-independent-random-variables. Kind: theorem.

Claim/conventions: For IID real X_n there exist real constants mu_n such that S_n/n-mu_n ->0 in probability iff n P(|X_1|>n)->0. When this holds mu_n=E[X_1 1_{|X_1|<=n}] works. No convergence or finiteness of the untruncated mean is asserted.

Dependency IDs: def-identically-distributed-and-iid-random-variables, lem-symmetrization-for-independent-random-series, lem-independent-copy-symmetrization-tail-bounds, lem-one-sided-maximal-inequality-for-symmetric-independent-sums, thm-truncation-weak-law-for-independent-arrays, lem-vanishing-tail-control-implies-small-truncated-second-moment, def-convergence-in-probability, thm-finite-and-countable-subadditivity-of-measures, lem-largest-summand-bound-for-symmetric-independent-variables.

Proof/dependency rationale: Sufficiency follows from the truncated array law and second-moment bound. Necessity: copy the centered sum, so T_n/n=sum(X_k-X_k-prime)/n ->0. The largest-summand lemma gives P(|T_n|>epsilon n)>=(1-exp(-n P(|X_1-X_1-prime|>epsilon n)))/2, hence n times that tail tends to zero. The independent-copy lower tail comparison with fixed M and epsilon<1 then yields n P(|X_1|>n)->0. The one-sided maximal inequality supplies an alternate check using max|Z_k|<=2 max|T_k|. No CLT or characteristic functions.

Source support: Theorem 4.4, pp. 2–5 and Appendix A, pp. 9–11 — https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf; Theorem 2.2.12 and necessity remark, pp. 63–64 — https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf; Lemma 5.13, p. 8 — https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes5.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## lem-levy-maximal-inequality-for-independent-tail-sums

Page: weak-laws-and-series-of-independent-random-variables. Kind: lemma.

Claim/conventions: For independent X_1,...,X_n, l>0 and 0<=delta<1, if P(|sum_{j=i}^n X_j|>=l/2)<=delta for every i=1,...,n, then P(max_{k<=n}|S_k|>=l)<=delta/(1-delta).

Dependency IDs: def-partial-sums-and-sample-means, def-independent-random-elements, thm-grouping-independent-sigma-algebras, thm-arithmetic-and-lattice-operations-preserve-measurability.

Proof/dependency rationale: Partition by first crossing l. On a crossing with |S_n|<=l/2 the remaining tail has magnitude at least l/2; independence bounds that event by delta times the crossing probability. The complementary final-tail event has probability at most delta.

Source support: Lemma 3.8 and proof, pp. 62–63 — https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## lem-cauchy-in-probability-sequences-have-a-measurable-limit

Page: weak-laws-and-series-of-independent-random-variables. Kind: lemma.

Claim/conventions: If real random variables Y_n on one probability space satisfy: for every epsilon,eta>0 there is N such that P(|Y_n-Y_m|>epsilon)<eta for all n,m>=N, then Y_n converges in probability to a finite measurable random variable Y.

Dependency IDs: def-convergence-in-probability, cor-first-borel-cantelli-lemma-for-events, thm-series-cauchy-criterion, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable, thm-almost-sure-convergence-implies-convergence-in-probability, thm-finite-and-countable-subadditivity-of-measures.

Proof/dependency rationale: Choose strictly increasing least indices n_k so that all pairs beyond n_k have probability at most 2^-k of separation exceeding 2^-k. BC1 gives eventual summability of the selected successive differences, so the subsequence converges a.s. by completeness of R. Extend its finite limit by zero off its measurable convergence event. Triangle and union bounds, first taking k large and then n>=n_k, show convergence of the entire sequence in probability.

Source support: Varadhan, Chapter 3, Exercise 3.11, p. 65 — https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf.

Provenance: statement literature-derived, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## thm-independent-series-probability-and-almost-sure-convergence-agree

Page: weak-laws-and-series-of-independent-random-variables. Kind: theorem.

Claim/conventions: For partial sums of a series of independent real random variables, convergence in probability to a finite random variable is equivalent to almost-sure convergence; the limits agree a.s. Equivalently, the partial sums are Cauchy in probability.

Dependency IDs: lem-levy-maximal-inequality-for-independent-tail-sums, def-almost-sure-convergence-of-a-random-series, def-convergence-in-probability, thm-continuity-from-below-for-measures, thm-continuity-from-above-for-measures, thm-series-cauchy-criterion, thm-almost-sure-convergence-implies-convergence-in-probability, thm-limits-in-probability-are-unique-almost-surely, lem-cauchy-in-probability-sequences-have-a-measurable-limit.

Proof/dependency rationale: Probability convergence makes all sufficiently late increments uniformly small in probability. Apply the preceding maximal bound to finite tail blocks, pass to the infinite supremum, and use decreasing Cauchy oscillations. Identify limits by uniqueness. Distribution-only convergence is deferred to the characteristic-function page. The preceding completeness lemma makes the Cauchy-in-probability formulation equivalent to convergence in probability.

Source support: Theorem 3.9, implication (ii) to (iii), pp. 63–65 — https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## ex-weak-law-for-bernoulli-sample-means

Page: weak-laws-and-series-of-independent-random-variables-examples. Kind: example.

Claim/conventions: For IID Bernoulli(p), S_n/n ->p in probability with P(|S_n/n-p|>=epsilon)<=p(1-p)/(n epsilon^2), including p=0 and p=1.

Dependency IDs: cor-iid-finite-variance-weak-law, def-bernoulli-and-binomial-random-variables, lem-bernoulli-and-binomial-mean-and-variance, cor-countable-independent-copies-exist.

Proof/dependency rationale: Use the published Bernoulli moments and Chebyshev; the established countable product supplies a common-space infinite sequence.

Source support: Section 3.2 opening calculation, pp. 54–55 — https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## ex-weak-law-for-independent-nonidentical-variables

Page: weak-laws-and-series-of-independent-random-variables-examples. Kind: example.

Claim/conventions: Independent Bernoulli variables with p_k=1/4 for odd k and 3/4 for even k satisfy S_n/n ->1/2 in probability; centered variance is 3/(16n).

Dependency IDs: thm-chebyshev-weak-law-for-uncorrelated-arrays, cor-coordinate-random-elements-on-a-countable-product-are-independent, thm-countable-product-of-probability-spaces, lem-bernoulli-and-binomial-mean-and-variance.

Proof/dependency rationale: Compute the deterministic mean average and the sum of variances; apply the row law. Existence uses varying Bernoulli factors.

Source support: Theorem 2.2.6, p. 59, direct example — https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf.

Provenance: statement ai-generated, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## ex-rademacher-series-convergence-threshold

Page: weak-laws-and-series-of-independent-random-variables-examples. Kind: example.

Claim/conventions: For independent fair signs epsilon_n and real alpha, sum epsilon_n n^-alpha converges a.s. exactly when alpha>1/2; if alpha<=1/2 it diverges a.s. Absolute convergence occurs exactly when alpha>1.

Dependency IDs: thm-kolmogorov-three-series-theorem, cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event, cor-countable-independent-copies-exist, thm-p-series-real-exponents.

Proof/dependency rationale: For alpha>0 eventually truncation leaves the terms unchanged, with zero means and variances n^-2alpha. For alpha<=0 the terms fail to tend to zero. Three-series plus the existing zero-one result gives a.s. divergence.

Source support: Example 2.5.7, p. 85 — https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## ex-a-random-series-that-converges-conditionally-almost-surely

Page: weak-laws-and-series-of-independent-random-variables-examples. Kind: example.

Claim/conventions: The random harmonic series sum epsilon_n/n with independent fair signs converges almost surely but its absolute series diverges at every sample point.

Dependency IDs: thm-kolmogorov-three-series-theorem, cor-countable-independent-copies-exist, thm-p-series-real-exponents, thm-alternating-series-test.

Proof/dependency rationale: Apply three-series at A=1 and the p-series criterion separately to the squares and absolute values; no dependency on a generated example. Inline contrast: the deterministic harmonic series diverges, whereas its alternating version converges by the published alternating-series test.

Source support: Example 2.5.7, p. 85 — https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf; Examples 5.1 and 5.3, pp. 1–2 — https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes5.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## ex-three-series-with-rare-large-jumps

Page: weak-laws-and-series-of-independent-random-variables-examples. Kind: example.

Claim/conventions: At cutoff A=1, three independent-sequence constructions each violate only one condition: (i) X_n=2 with probability 1/n and zero otherwise (n>=2), so both truncated series vanish; (ii) X_n=1/n deterministically, so only the mean series diverges; (iii) X_n=epsilon_n/sqrt(n), so only the variance series diverges.

Dependency IDs: thm-kolmogorov-three-series-theorem, cor-second-borel-cantelli-lemma-under-pairwise-independence, thm-p-series-real-exponents, cor-coordinate-random-elements-on-a-countable-product-are-independent, thm-countable-product-of-probability-spaces.

Proof/dependency rationale: Compute all three numerical series for each case, including the cutoff endpoint. BC2 or three-series gives failure of convergence. These are direct diagnostic instances of the exact theorem.

Source support: Theorem 3.12, pp. 66–68, direct specializations — https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf; Example 2.5.7, p. 85, variance obstruction — https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf.

Provenance: statement ai-generated, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## cex-weak-law-can-fail-without-tail-control

Page: weak-laws-and-series-of-independent-random-variables-examples. Kind: counterexample.

Claim/conventions: For each row let X_{n,1}=n epsilon_n with epsilon_n a fair sign and all other n-1 entries zero. Every row is independent and centered, but S_n/n is a fair sign and does not tend to zero in probability.

Dependency IDs: thm-chebyshev-weak-law-for-uncorrelated-arrays, def-convergence-in-probability, cor-countable-independent-copies-exist.

Proof/dependency rationale: P(|S_n/n|>1/2)=1 and normalized row variance equals one. Explicitly this is an array example, not a counterexample to an IID integrable law.

Source support: Theorem 2.2.6, p. 59, direct counterexample when its variance condition fails — https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf.

Provenance: statement ai-generated, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## cex-sum-of-variances-condition-is-sufficient-not-necessary-without-further-hypotheses

Page: weak-laws-and-series-of-independent-random-variables-examples. Kind: counterexample.

Claim/conventions: For n>=2 let independent X_n take n and -n with probabilities 1/(2n^2) each and zero otherwise. Then E X_n=0 and Var(X_n)=1, but sum X_n converges absolutely a.s.

Dependency IDs: cor-first-borel-cantelli-lemma-for-events, cor-coordinate-random-elements-on-a-countable-product-are-independent, thm-countable-product-of-probability-spaces, thm-p-series-real-exponents, def-almost-sure-convergence-of-a-random-series.

Proof/dependency rationale: Sum P(X_n!=0)=sum n^-2<infinity gives only finitely many nonzero terms a.s.; nevertheless the variance sum diverges. This repairs the design deterministic witness, which has zero variances and cannot prove the claim.

Source support: Borel–Cantelli Lemma 3.4, pp. 58–59; Theorem 3.12 fixed-truncation conditions, pp. 66–68, direct counterexample — https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf.

Provenance: statement ai-generated, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## cex-iid-cauchy-averages-have-no-deterministic-weak-centering

Page: weak-laws-and-series-of-independent-random-variables-examples. Kind: counterexample.

Claim/conventions: For IID variables with density 1/(pi(1+x^2)), no real sequence mu_n makes S_n/n-mu_n ->0 in probability.

Dependency IDs: thm-truncated-centering-criterion-for-an-iid-weak-law, cor-countable-independent-copies-exist, def-law-or-distribution-of-a-random-element.

Proof/dependency rationale: The density integrates to one by arctangent; elementary integral bounds give n P(|X|>n)->2/pi. Apply the necessity theorem without characteristic functions or stable-law identities.

Source support: Example 2.2.15, p. 65 — https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## ex-truncated-centering-weak-law-with-infinite-mean

Page: weak-laws-and-series-of-independent-random-variables-examples. Kind: example.

Claim/conventions: Let X>=e have survival P(X>x)=1/(x log x) for x>=e, including an atom of mass 1-1/e at e. Then E X=infinity, nP(X>n)->0 and the IID sample mean minus mu_n converges in probability to zero, where for n>=e, mu_n=e+log log n-1/log n. Inline family comparison: replacing log x by (log x)^alpha, alpha>=0, gives infinite second moment for every alpha, finite first moment exactly for alpha>1, and the deterministic-centering weak law exactly for alpha>0.

Dependency IDs: thm-truncated-centering-criterion-for-an-iid-weak-law, cor-countable-independent-copies-exist, cor-layer-cake-formulas-for-random-variables, thm-probability-law-and-distribution-function-correspondence.

Proof/dependency rationale: Verify the distribution, integrate the survival, and use E[X1_{X<=n}]=integral_0^n P(X>t)dt-nP(X>n). Retain the atom correction omitted in the source displayed truncated integral; the asymptotic is mu_n~log log n.

Source support: Example 4.7, pp. 3–4, alpha=1 with endpoint correction — https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf.

Provenance: statement ai-altered, proof ai-generated. Status: scaffold complete; proof authoring and independent review remain for the authoring stage.

## URL recovery/liveness validator

Command: `node tools/url-sweep.mjs --coverage research/frontier-33-batch-3.coverage.json --out /dev/stdout --recover --fail-on-dead --timeout-ms 3000` (report captured from stdout to avoid creating an unauthorized artifact). Exit 1.

```json
{
  "version": 1,
  "generated_at": "2026-09-06T19:08:38.657Z",
  "scope": {
    "manifests": [],
    "ledgers": [],
    "items": 0
  },
  "summary": {
    "urls": 7,
    "live": 0,
    "failed": 7,
    "recovered": 0,
    "suspect": 0,
    "superseded": 0
  },
  "superseded": [],
  "rows": [
    {
      "url": "https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf",
      "status": 0,
      "ok": false,
      "final_url": "https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf",
      "ms": 9,
      "error": "curl: (6) Could not resolve host: math.nyu.edu",
      "recovered": null
    },
    {
      "url": "https://math.nyu.edu/~varadhan/course/PROB.intr.pdf",
      "status": 0,
      "ok": false,
      "final_url": "https://math.nyu.edu/~varadhan/course/PROB.intr.pdf",
      "ms": 8,
      "error": "curl: (6) Could not resolve host: math.nyu.edu",
      "recovered": null
    },
    {
      "url": "https://math.nyu.edu/~varadhan/limittheorems.html",
      "status": 0,
      "ok": false,
      "final_url": "https://math.nyu.edu/~varadhan/limittheorems.html",
      "ms": 9,
      "error": "curl: (6) Could not resolve host: math.nyu.edu",
      "recovered": null
    },
    {
      "url": "https://people.math.wisc.edu/~roch/grad-prob/",
      "status": 0,
      "ok": false,
      "final_url": "https://people.math.wisc.edu/~roch/grad-prob/",
      "ms": 7,
      "error": "curl: (6) Could not resolve host: people.math.wisc.edu",
      "recovered": null
    },
    {
      "url": "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf",
      "status": 0,
      "ok": false,
      "final_url": "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf",
      "ms": 8,
      "error": "curl: (6) Could not resolve host: people.math.wisc.edu",
      "recovered": null
    },
    {
      "url": "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes5.pdf",
      "status": 0,
      "ok": false,
      "final_url": "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes5.pdf",
      "ms": 6,
      "error": "curl: (6) Could not resolve host: people.math.wisc.edu",
      "recovered": null
    },
    {
      "url": "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf",
      "status": 0,
      "ok": false,
      "final_url": "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf",
      "ms": 7,
      "error": "curl: (6) Could not resolve host: sites.math.duke.edu",
      "recovered": null
    }
  ]
}
```

Browser full-text access to the same original documents succeeded. DNS failures here do not establish that those documents are unavailable; do not replace live originals merely because this execution environment cannot resolve them. No source or result was removed. Mechanical liveness/fetch gates remain blocked.


## Final scope and obligations

27 A items and 9 B items; all item objects have explicit deps. No split required. The largest-summand bound and generic Cauchy-in-probability completeness lemma retain the full source results and are used by the subsequent theorems. The three-series necessity route is Varadhan, not a CLT route. No source results were removed to address DNS failures. No independent review or exact-hash approval is claimed. Next: final structural and source validators; preserve external blockers.

## Final validator results

Command: `node tools/coverage-checklist.mjs research/frontier-33-batch-3.coverage.json --require-destination`. Exit 0.

```text
coverage-checklist: 1 page(s), 94 harvested result(s), 0 error(s), 0 warning(s)
```

Command: `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-3.pages.json`. Exit 0.

```text
content-policy: 36 scoped item(s), 0 error(s), 0 warning(s)
```

Command: `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-1.pages.json research/frontier-33-batch-10.pages.json research/frontier-33-batch-11.pages.json research/frontier-33-batch-12.pages.json research/frontier-33-batch-13.pages.json research/frontier-33-batch-14.pages.json research/frontier-33-batch-15.pages.json research/frontier-33-batch-16.pages.json research/frontier-33-batch-17.pages.json research/frontier-33-batch-18.pages.json research/frontier-33-batch-19.pages.json research/frontier-33-batch-2.pages.json research/frontier-33-batch-20.pages.json research/frontier-33-batch-3.pages.json research/frontier-33-batch-4.pages.json research/frontier-33-batch-5.pages.json research/frontier-33-batch-6.pages.json research/frontier-33-batch-7.pages.json research/frontier-33-batch-8.pages.json research/frontier-33-batch-9.pages.json`. Exit 1.

```text
content-policy: 677 scoped item(s), 6 error(s), 0 warning(s)
ERROR batch-dependency-missing [thm-kernel-range-annihilator-identities]: thm-kernel-range-annihilator-identities depends on def-weak-star-topology, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-kernel-range-annihilator-identities]: thm-kernel-range-annihilator-identities depends on thm-bipolar-closure-for-linear-subspaces, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-regular-local-rings-are-domains-and-cohen-macaulay]: thm-regular-local-rings-are-domains-and-cohen-macaulay depends on def-cohen-macaulay-module-and-ring, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-polynomial-local-regularity-fibre-step]: lem-polynomial-local-regularity-fibre-step depends on thm-euclidean-domain-implies-pid, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-normal-noetherian-ring]: def-normal-noetherian-ring depends on def-integrally-closed-domain, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-total-ring-of-fractions]: def-total-ring-of-fractions depends on def-localisation-of-a-commutative-ring, which is neither declared by this batch nor an item on disk
```

Command: `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-3.coverage.json`. Exit 1.

```text
source-fetch-check: 0/4 source(s) fetch-verified, 4 FAILED
ERROR fetch-check-unstamped: weak-laws-and-series-of-independent-random-variables: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
ERROR fetch-check-unstamped: weak-laws-and-series-of-independent-random-variables: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf
ERROR fetch-check-unstamped: weak-laws-and-series-of-independent-random-variables: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf
ERROR fetch-check-unstamped: weak-laws-and-series-of-independent-random-variables: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes5.pdf
```

Command: `node tools/validate-plan.mjs <in-memory plan with all current frontier-33 batch manifests overlaid>`. Exit 1. This tests the actual scaffold without changing plan-spec.json. Batch-3 errors in the complete error list: 0.

```text
14 ERROR(s):
  [resolve] thm-kernel-range-annihilator-identities (dual-spaces-adjoint-operators-and-annihilators) depends on "def-weak-star-topology", which is neither planned nor in items/
  [resolve] thm-kernel-range-annihilator-identities (dual-spaces-adjoint-operators-and-annihilators) depends on "thm-bipolar-closure-for-linear-subspaces", which is neither planned nor in items/
  [resolve] thm-regular-local-rings-are-domains-and-cohen-macaulay (regular-local-rings-and-homological-dimension) depends on "def-cohen-macaulay-module-and-ring", which is neither planned nor in items/
  [resolve] lem-polynomial-local-regularity-fibre-step (regular-local-rings-and-homological-dimension) depends on "thm-euclidean-domain-implies-pid", which is neither planned nor in items/
  [resolve] def-normal-noetherian-ring (regular-local-rings-and-homological-dimension) depends on "def-integrally-closed-domain", which is neither planned nor in items/
  [resolve] def-total-ring-of-fractions (regular-local-rings-and-homological-dimension) depends on "def-localisation-of-a-commutative-ring", which is neither planned nor in items/
  [b-leaf] lem-finite-truncations-are-dense-in-c0-and-ell-one (dual-spaces-adjoint-operators-and-annihilators) depends on published def-c-zero-and-ell-infinity, which is homed on examples page geometric-hahn-banach-and-convex-separation-examples; B pages must be leaves
  [b-leaf] thm-dual-of-c0-is-ell-one (dual-spaces-adjoint-operators-and-annihilators) depends on published def-c-zero-and-ell-infinity, which is homed on examples page geometric-hahn-banach-and-convex-separation-examples; B pages must be leaves
  [b-leaf] thm-complex-dual-of-ell-one-is-ell-infinity (dual-spaces-adjoint-operators-and-annihilators) depends on published def-c-zero-and-ell-infinity, which is homed on examples page geometric-hahn-banach-and-convex-separation-examples; B pages must be leaves
  [b-leaf] cex-transpose-range-need-not-be-norm-dense (dual-spaces-adjoint-operators-and-annihilators-examples) depends on published lem-c-zero-is-a-closed-subspace-of-ell-infinity, which is homed on examples page geometric-hahn-banach-and-convex-separation-examples; B pages must be leaves
  [undeclared-prereq] page dual-spaces-adjoint-operators-and-annihilators-examples has an item depending on radon-measures-and-the-riesz-markov-kakutani-theorem, which is NOT in the closure of its declared requires — either add it or drop the dependency
  [undeclared-prereq] page dimension-constructible-images-and-dimensions-of-fibres has an item depending on zariski-topology-on-prime-spectra, which is NOT in the closure of its declared requires — either add it or drop the dependency
  [undeclared-prereq] page dimension-constructible-images-and-dimensions-of-fibres has an item depending on schemes-subschemes-and-morphisms-locally-of-finite-type, which is NOT in the closure of its declared requires — either add it or drop the dependency
  [undeclared-prereq] page arithmetization-and-the-sum-check-protocol has an item depending on the-cook-levin-theorem, which is NOT in the closure of its declared requires — either add it or drop the dependency

FAIL
```

Command: `node tools/validate-plan.mjs research/plan-spec.json`. Exit 0.

```text
NOTE: 511 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.
```

Readiness: NOT READY for a whole-run green gate. Batch coverage and batch manifest policy pass; no batch-3 errors were reported by the merged plan check. Whole-run failures in other owners’ files are left untouched. Source-fetch is 0/4 because all shell requests fail DNS (EAI_AGAIN); URL recovery/liveness is 0/7, no archive recovery obtained in this environment. Browser full-text reads verified the original documents, but do not supply the validator’s required byte/hash stamps. Next action: rerun source-fetch --stamp and URL sweep in a network-capable execution environment, then recheck the whole-run gates after their owners resolve the unrelated errors. Mathematical authoring remains step 5; this dispatch changes scaffolds only.

## Step-3 fix pass

Review input: `research/frontier-33-alpha-a-step3-scaffold-review.md`, Batch 3 (weak laws and independent series). Finding id: none for this batch. The review’s sole licensed correction is expressly confined to Batch 4; its Batch-3 verdict is `sufficient`, with no missing result, source, backward dependency, or owner decision. Disposition: accepted; no claim, id, kind, order, page prerequisite, item dependency, proof route, source URL, or harvest disposition is changed.

Source repair: the four existing `fetch_verified` objects in `frontier-33-batch-3.coverage.json` are current full-text PDF stamps, so the stale `read_verified.status` wording “shell fetch stamp pending” was corrected to “full-text fetch stamp recorded below.” Changed scaffold records: the Durrett 5th-edition textbook, Varadhan Chapter 3 lecture notes, and Roch Notes 4 and 5 source records only. No source was removed, replaced, or archived; `original_url` is therefore not applicable. The sources remain source-grounded at their recorded locators: Durrett §§2.2 and 2.5, printed pp. 56–87; Varadhan §§3.2–3.4, printed pp. 54–68; Roch Note 4 §2, §2.1, and Appendix A, pp. 2–5 and 9–11; Roch Note 5 §§1.1–1.3 and Lemma 5.13, pp. 1–4 and 8. These support the weak-law truncation route, direct three-series necessity, symmetrization, and first-crossing maximal route respectively.

Dependency and convention recheck: all 36 planned items carry an explicit `deps` array (none is empty), the 27 A-page items remain below the split threshold, and `manifest-deps` reports 36 items with no missing dependency or error. The series route still uses a fixed positive zero truncation, finite real random variables, deterministic positive normalizers where stated, and no CLT, characteristic-function continuity result, martingale convergence theorem, or unproved external theorem.

Current validation receipts:

```text
node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-3.coverage.json
source-fetch-check: 4/4 source(s) fetch-verified

node tools/coverage-checklist.mjs research/frontier-33-batch-3.coverage.json --require-destination
coverage-checklist: 1 page(s), 94 harvested result(s), 0 error(s), 0 warning(s)

node tools/manifest-deps.mjs research/frontier-33-batch-3.pages.json
manifest-deps: 36 item(s), 0 normalized, 0 error(s)

node tools/splice-plan.mjs --run frontier-33 --batch 3 --dry-run
splice-plan: batch 3 — 2 page(s) spliced, 0 reused, 0 already correct, 36 new item(s), 0 reused item(s)

node tools/content-policy.mjs --manifest-only research/frontier-33-batch-*.pages.json
content-policy: 923 scoped item(s), 0 error(s), 0 warning(s)

node tools/validate-plan.mjs research/plan-spec.json
OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 844 page(s) with item lists.
```

No batch-3 obligation remains for this scaffold fix pass. Next action: engine-owned transition; mathematical authoring remains Step 5.

## Step-5 authoring

Scope: the 36 assigned items and two probability pages. All remain draft. Independent scaffold review and coverage records are preserved. Current source proofs were reread through the browser: Varadhan Chapter 3 pp. 55–57, 61–68; Roch Note 4 pp. 2–5 and 9–11; Roch Note 5 pp. 1–4 and Lemma 5.13 p. 8; Durrett Kronecker proof pp. 85–86 and rate proof p. 87. Shell curl still fails DNS; browser original-source access works. The exact dependency Statement/Definition sections were read on disk. No publication or judge action is taken.

### Authored `def-identically-distributed-and-iid-random-variables`

Claim/conventions: Let $(X_i)_{i\in I}$ be random elements with the same measurable target $(E,\mathcal E)$. They are **identically distributed** if $\mathbb P(X_i\in B)=\mathbb P(X_j\in B)$ for all $i,j\in I$ and $B\in\mathcal E$, that is, their laws in [[def-law-or-distribution-of-a-random-element]] agree. They are **independent and identically distributed (IID)** if, in addition, the whole family is independent in [[def-independent-random-elements]]. Independence means mutual independence, not merely pairwise independence. No moment assumption is part of either definition. The empty family satisfies these universal conditions vacuously.

Dependencies: def-independent-random-elements, def-law-or-distribution-of-a-random-element.

Sources: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf — Section 2.2.1, p. 58, IID paragraph.

Decision/provenance: ai-altered statement; not-applicable proof. Define using established laws and independence, with no moment hypothesis.

Current state: draft written; definition; no proof contract required. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `def-partial-sums-and-sample-means`

Claim/conventions: For real random variables $X_1,X_2,\ldots$ on one probability space, define
$$S_0=0,\qquad S_n=\sum_{k=1}^nX_k,\qquad \overline X_n=S_n/n\quad(n\ge1).$$
For a triangular array with finite row length $r_n\ge0$, write $S_n=\sum_{k=1}^{r_n}X_{n,k}$. An empty row has sum zero. These are finite sums in [[def-finite-sum]], with its index shifted by one. Each sum and each sample mean is a real random variable by [[thm-arithmetic-and-lattice-operations-preserve-measurability]] and [[def-random-element-and-real-random-variable]]. No independence, common law, or integrability is implicit.

Dependencies: def-random-element-and-real-random-variable, thm-arithmetic-and-lattice-operations-preserve-measurability, def-finite-sum.

Sources: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf — Section 2.2.2, p. 59, opening row-sum notation.

Decision/provenance: ai-altered statement; not-applicable proof. Finite measurable arithmetic makes each quantity a random variable; no independence or moments are implicit.

Current state: draft written; definition; no proof contract required. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `thm-chebyshev-weak-law-for-uncorrelated-arrays`

Claim/conventions: For each $n\ge1$, let $X_{n,1},\ldots,X_{n,r_n}$ be square-integrable real random variables on one probability space, pairwise uncorrelated within the row, where $r_n\ge0$ is finite. Set $S_n=\sum_{k=1}^{r_n}X_{n,k}$ and let $b_n>0$ be deterministic. If
$$v_n:=b_n^{-2}\sum_{k=1}^{r_n}\operatorname{Var}(X_{n,k})\longrightarrow0,$$
then $(S_n-\mathbb ES_n)/b_n\to0$ in $L^2$ and in probability. More precisely, its second moment is $v_n$, and its probability of absolute value at least $\varepsilon>0$ is at most $v_n/\varepsilon^2$. No independence between rows is required.

Dependencies: def-partial-sums-and-sample-means, def-moments-variance-and-covariance, lem-variance-and-covariance-identities-for-random-variables, cor-chebyshev-inequality-for-random-variables, def-convergence-in-probability, def-convergence-in-lp-for-random-variables, cor-expectation-linearity-monotonicity-and-modulus-bound.

Sources: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf — Theorems 2.2.1, 2.2.3 and 2.2.6, pp. 56–59.

Decision/provenance: ai-altered statement; ai-generated proof. Expand the finite centered square using covariance bilinearity, cancel off-diagonal terms, then apply Chebyshev.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `cor-iid-finite-variance-weak-law`

Claim/conventions: Let $(X_k)_{k\ge1}$ be IID square-integrable real random variables, with $\mu=\mathbb EX_1$ and $\sigma^2=\operatorname{Var}(X_1)$. For $S_n=\sum_{k=1}^nX_k$,
$$\mathbb E|S_n/n-\mu|^2=\sigma^2/n,$$
and $S_n/n\to\mu$ in $L^2$ and in probability. Also $\mathbb P(|S_n/n-\mu|\ge\varepsilon)\le\sigma^2/(n\varepsilon^2)$ for $\varepsilon>0$.

Dependencies: def-identically-distributed-and-iid-random-variables, thm-chebyshev-weak-law-for-uncorrelated-arrays, thm-factorization-of-expectations-for-independent-variables.

Sources: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf — Section 2.2.1, p. 58; https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf — Theorem 3.2, pp. 55–56.

Decision/provenance: ai-altered statement; ai-generated proof. Independence factors mixed moments; apply row variance with b_n=n.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `def-truncation-at-a-fixed-level`

Claim/conventions: For a real random variable $X$ and a deterministic level $A>0$, its **zero truncation** is
$$X^{(A)}=X\mathbf1_{\{|X|\le A\}}.$$
The threshold event is measurable because $X$ is measurable and $[-A,A]$ is Borel; its indicator and the product are measurable by [[thm-arithmetic-and-lattice-operations-preserve-measurability]]. Thus $X^{(A)}$ is a real random variable as in [[def-random-element-and-real-random-variable]]. It equals $X$ at both cutoff endpoints and is zero outside the interval. Since $|X^{(A)}|\le A$, for every $0<p<\infty$ its absolute $p$th moment is at most $A^p\mathbb P(\Omega)=A^p$. This is not clipping to the endpoints.

Dependencies: def-random-element-and-real-random-variable, thm-arithmetic-and-lattice-operations-preserve-measurability.

Sources: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf — Section 2.2.3, p. 62.

Decision/provenance: ai-altered statement; not-applicable proof. Borel threshold events and measurable arithmetic establish the definition; boundedness on a probability space establishes integrability inline.

Current state: draft written; definition; no proof contract required. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `thm-khinchin-weak-law-for-iid-integrable-variables`

Claim/conventions: If $(X_k)_{k\ge1}$ are IID real random variables and $\mathbb E|X_1|<\infty$, then, with $S_n=\sum_{k=1}^nX_k$ and $\mu=\mathbb EX_1$,
$$\mathbb E|S_n/n-\mu|\longrightarrow0.$$
Consequently $S_n/n\to\mu$ in probability.

Dependencies: def-identically-distributed-and-iid-random-variables, def-partial-sums-and-sample-means, def-truncation-at-a-fixed-level, cor-iid-finite-variance-weak-law, lem-measurable-functions-preserve-independence, thm-dominated-convergence, cor-markov-inequality-for-random-variables, thm-finite-measure-l-r-includes-into-l-p-for-p-less-r, cor-expectation-linearity-monotonicity-and-modulus-bound.

Sources: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf — Theorem 3.3, first proof, pp. 56–57; https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf — Theorem 2.2.14, pp. 64–65.

Decision/provenance: ai-altered statement; ai-generated proof. For fixed A, the centered truncated average has L1 norm at most its L2 norm, tending to zero. The residual centered average has L1 norm at most 2 E[|X_1|1_{|X_1|>A}]. Let n then A tend to infinity; Markov gives probability convergence.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `def-almost-sure-convergence-of-a-random-series`

Claim/conventions: For real random variables $(X_n)_{n\ge1}$, the series $\sum_{n\ge1}X_n$ **converges almost surely** if its partial sums $S_n$ converge to a finite real limit on an event of probability one, as in [[def-almost-sure-convergence-of-random-variables]]. With $S_0=0$ from [[def-partial-sums-and-sample-means]], its convergence event is
$$C=\bigcap_{r\ge1}\bigcup_{N\ge1}\bigcap_{j\ge i\ge N}\{|S_j-S_i|<1/r\}.$$
This is exactly the real Cauchy condition, with the indexing of [[thm-series-cauchy-criterion]] shifted by one. Measurable arithmetic makes every event in this countable expression measurable. For any fixed $m$, the union over $N$ may be restricted to $N\ge m$; then each difference uses only $X_{m+1},X_{m+2},\ldots$. Thus $C$ is in the tail sigma-algebra, without assuming independence. Under independence, [[cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event]] gives $\mathbb P(C)\in\{0,1\}$.

Set $S=\lim_n S_n$ on $C$ and $S=0$ off $C$. The functions $\mathbf1_C S_n$ converge everywhere to $S$, so [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]] and [[thm-arithmetic-and-lattice-operations-preserve-measurability]] make $S$ measurable.

For Borel sets $B_n$, the event $\{X_n\in B_n\text{ infinitely often}\}=\bigcap_m\bigcup_{n\ge m}\{X_n\in B_n\}$ is likewise tail measurable. Changing finitely many summands adds an eventually constant finite difference to $S_n$; divided by deterministic $c_n>0$ tending to infinity that difference tends to zero, so the normalized limsup is unchanged. The sign of the unnormalized limsup need not be unchanged: the all-zero sequence has limsup zero, while changing its first term to $1$ makes the limsup of partial sums equal to $1$.

Dependencies: def-partial-sums-and-sample-means, def-almost-sure-convergence-of-random-variables, thm-series-cauchy-criterion, thm-arithmetic-and-lattice-operations-preserve-measurability, cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable.

Sources: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf — Section 2.5, Example 2.5.2 p. 81 and series convention p. 84; https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf — Section 3.4 opening, p. 61.

Decision/provenance: ai-altered statement; not-applicable proof. Spell out the countable Cauchy event using tolerances 1/r, and use the existing tail-event proof without minting a duplicate theorem. The finite limit extended by zero on the complement is measurable by measurable limits. Inline tail examples: limsup {X_n in B_n} is tail measurable; a finite change has vanishing effect on S_n/c_n if c_n>0 tends to infinity, whereas it can change the unnormalized limsup sign.

Current state: draft written; definition; no proof contract required. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `thm-kolmogorov-maximal-inequality`

Claim/conventions: Let $X_1,\ldots,X_n$ be independent centered square-integrable real random variables, $n\ge1$, and $S_k=\sum_{j=1}^kX_j$. For every $\lambda>0$,
$$\mathbb P\left(\max_{1\le k\le n}|S_k|\ge\lambda\right)\le\frac{\operatorname{Var}(S_n)}{\lambda^2}=\frac{\sum_{j=1}^n\operatorname{Var}(X_j)}{\lambda^2}.$$
Thus controlling the whole finite maximum costs no larger bound than controlling the final sum by Chebyshev.

Dependencies: def-partial-sums-and-sample-means, def-independent-random-elements, def-moments-variance-and-covariance, thm-grouping-independent-sigma-algebras, thm-factorization-of-expectations-for-independent-variables, lem-variance-and-covariance-identities-for-random-variables, thm-arithmetic-and-lattice-operations-preserve-measurability.

Sources: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf — Theorem 2.5.5, p. 84; https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf — Lemma 3.7, p. 62.

Decision/provenance: ai-altered statement; ai-generated proof. Disjoint first-crossing events A_k belong to sigma(X_1,...,X_k). Factor E[1_{A_k}S_k(S_n-S_k)]=0 using grouping and integrability. Sum E[1_{A_k}S_n^2]>=lambda^2 P(A_k).

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `thm-kolmogorov-convergence-criterion`

Claim/conventions: For independent centered square-integrable real random variables $(X_n)_{n\ge1}$, if $\sum_{n\ge1}\operatorname{Var}(X_n)<\infty$, then $\sum_{n\ge1}X_n$ converges almost surely and in $L^2$ to the same finite real random variable.

Dependencies: thm-kolmogorov-maximal-inequality, def-almost-sure-convergence-of-a-random-series, thm-series-cauchy-criterion, thm-continuity-from-below-for-measures, thm-continuity-from-above-for-measures, lem-variance-and-covariance-identities-for-random-variables, thm-riesz-fischer-completeness-of-l-p, thm-lp-convergence-implies-convergence-in-probability, thm-almost-sure-convergence-implies-convergence-in-probability, thm-limits-in-probability-are-unique-almost-surely.

Sources: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf — Theorem 2.5.6, pp. 84–85; https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf — Theorem 3.10, pp. 65–66; L2 strengthening uses published completeness.

Decision/provenance: ai-altered statement; ai-generated proof. Maximal inequality bounds the supremum of each tail by the variance tail. For w_m=sup_{i,j>=m}|S_i-S_j| use its monotonicity and rational tolerances to obtain one a.s. Cauchy event. L2 completeness supplies an L2 limit; uniqueness of probability limits identifies it.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `cor-kolmogorov-two-series-sufficiency`

Claim/conventions: Let $(X_n)_{n\ge1}$ be independent square-integrable real random variables. If $\sum_{n\ge1}\mathbb EX_n$ converges in $\mathbb R$ and $\sum_{n\ge1}\operatorname{Var}(X_n)<\infty$, then $\sum_{n\ge1}X_n$ converges almost surely and in $L^2$.

Dependencies: thm-kolmogorov-convergence-criterion, def-almost-sure-convergence-of-a-random-series, lem-measurable-functions-preserve-independence, lem-variance-and-covariance-identities-for-random-variables.

Sources: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf — Theorem 3.11, p. 66.

Decision/provenance: ai-altered statement; ai-generated proof. Apply the centered criterion and add the convergent deterministic series.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `def-symmetric-real-random-variable`

Claim/conventions: A real random variable $X$ is **symmetric** if its law as defined in [[def-law-or-distribution-of-a-random-element]] equals the law of $-X$. Equivalently, $\mathbb P(X\in B)=\mathbb P(X\in -B)$ for every Borel $B\subseteq\mathbb R$, where $-B=\{-b:b\in B\}$. No existence of an expectation is assumed in this definition. In particular atoms, including an atom at zero, are allowed.

Dependencies: def-law-or-distribution-of-a-random-element.

Sources: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf — Appendix A, Definition 4.16, p. 9.

Decision/provenance: ai-altered statement; not-applicable proof. Use equality of measures, so atoms cause no distribution-function boundary ambiguity.

Current state: draft written; definition; no proof contract required. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `lem-symmetrization-for-independent-random-series`

Claim/conventions: Given an independent sequence $(X_n)_{n\ge1}$ on $(\Omega,\mathcal F,\mathbb P)$, form the product probability space $(\Omega^2,\mathcal F\otimes\mathcal F,\mathbb P\otimes\mathbb P)$. Write $U_n(\omega,\omega')=X_n(\omega)$, $V_n(\omega,\omega')=X_n(\omega')$, and $Z_n=U_n-V_n$. Then $(U_n)$ and $(V_n)$ are independent copies of the whole sequence, and the $Z_n$ are independent symmetric real random variables. Almost-sure convergence of $\sum_nX_n$ implies almost-sure convergence of $\sum_nZ_n$. If $|X_n|\le A$ almost surely for every $n$, with $0\le A<\infty$, then $|Z_n|\le2A$ almost surely, $\mathbb EZ_n=0$, and $\operatorname{Var}(Z_n)=2\operatorname{Var}(X_n)$.

Dependencies: def-independent-random-elements, def-symmetric-real-random-variable, def-almost-sure-convergence-of-a-random-series, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-grouping-independent-sigma-algebras, lem-measurable-functions-preserve-independence, thm-factorization-of-expectations-for-independent-variables, lem-variance-and-covariance-identities-for-random-variables.

Sources: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf — Theorem 3.12 necessity, p. 67; https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf — Appendix A, Example 4.17, p. 9.

Decision/provenance: ai-altered statement; ai-generated proof. The product rectangle formula gives the independent copies; grouping gives independence of coordinate pairs and exchange of the two coordinates gives symmetry. Intersect the two probability-one convergence events. No converse without centering is claimed.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `lem-bounded-centered-convergent-series-have-summable-variances`

Claim/conventions: Let $(X_n)_{n\ge1}$ be independent centered real random variables with $|X_n|\le C$ almost surely for one finite constant $C\ge0$. If $\sum_nX_n$ converges almost surely, then $\sum_n\operatorname{Var}(X_n)<\infty$. The bound is two-sided and uniform in $n$.

Dependencies: def-almost-sure-convergence-of-a-random-series, def-partial-sums-and-sample-means, def-independent-random-elements, thm-grouping-independent-sigma-algebras, thm-factorization-of-expectations-for-independent-variables, lem-variance-and-covariance-identities-for-random-variables, thm-continuity-from-below-for-measures, cor-expectation-linearity-monotonicity-and-modulus-bound.

Sources: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf — Lemma 3.13 and complete proof, pp. 67–68.

Decision/provenance: ai-altered statement; ai-generated proof. Choose l and delta>0 with P(sup_k|S_k|<=l)>=delta. Set F_n={max_{k<=n}|S_k|<=l}, F_0=Omega. The stopped integral identity gives delta Var(X_n)<=E[S_n^2;F_n]-E[S_{n-1}^2;F_{n-1}]+(l+C)^2 P(F_{n-1} minus F_n). Telescope: delta sum_{k<=n}Var(X_k)<=l^2+(l+C)^2. This uses no stopping-time theorem.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `lem-three-series-necessity-for-truncated-means-and-variances`

Claim/conventions: Let independent real random variables $(X_n)_{n\ge1}$ have $\sum_nX_n$ convergent almost surely. For every fixed $A>0$, set $Y_n=X_n^{(A)}=X_n\mathbf1_{\{|X_n|\le A\}}$. Then
$$\sum_n\mathbb P(|X_n|>A)<\infty,\qquad \sum_n\operatorname{Var}(Y_n)<\infty,$$
and the real numerical series $\sum_n\mathbb EY_n$ converges.

Dependencies: lem-symmetrization-for-independent-random-series, lem-bounded-centered-convergent-series-have-summable-variances, thm-kolmogorov-convergence-criterion, def-truncation-at-a-fixed-level, cor-first-borel-cantelli-lemma-for-events, cor-second-borel-cantelli-lemma-under-pairwise-independence, lem-measurable-functions-preserve-independence, lem-series-tail-invariance.

Sources: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf — Theorem 3.12 necessity and Lemma 3.13, pp. 67–68.

Decision/provenance: ai-altered statement; ai-generated proof. Terms tend to zero; BC2 forces the probability series to converge. Truncated and original sums differ finitely a.s. Symmetrize the bounded truncations and apply the bounded-centered lemma, then the centered convergence criterion. Subtract the two convergent series to recover the deterministic means.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `thm-kolmogorov-three-series-theorem`

Claim/conventions: Let $(X_n)_{n\ge1}$ be independent real random variables and fix $A>0$. Put $Y_n=X_n\mathbf1_{\{|X_n|\le A\}}$. Then $\sum_nX_n$ converges almost surely if and only if all three conditions hold:
$$\sum_n\mathbb P(|X_n|>A)<\infty,\qquad \sum_n\mathbb EY_n\text{ converges in }\mathbb R,\qquad \sum_n\operatorname{Var}(Y_n)<\infty.$$
The conditions hold for some $A>0$ if and only if they hold for every $A>0$. No moment assumption is imposed on the untruncated variables.

Dependencies: def-almost-sure-convergence-of-a-random-series, def-truncation-at-a-fixed-level, lem-three-series-necessity-for-truncated-means-and-variances, cor-kolmogorov-two-series-sufficiency, cor-first-borel-cantelli-lemma-for-events, lem-measurable-functions-preserve-independence, lem-series-tail-invariance.

Sources: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf — Theorem 2.5.8, p. 85; https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf — Theorem 3.12, pp. 66–68.

Decision/provenance: ai-altered statement; ai-generated proof. Sufficiency: two-series for bounded truncations plus BC1 and finite-change invariance. Necessity is the preceding direct symmetrization lemma for arbitrary A. Form all numerical series after fixed truncation, never subtract infinite expectations.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `lem-kronecker-summation-lemma`

Claim/conventions: Let $(x_n)_{n\ge1}$ be real and let $0<b_n$ be deterministic, nondecreasing, and tend to infinity. If $\sum_{n\ge1}x_n/b_n$ converges in $\mathbb R$, then
$$\frac1{b_n}\sum_{k=1}^nx_k\longrightarrow0.$$
Repeated values of $b_n$ are allowed.

Dependencies: lem-abel-summation-by-parts, thm-series-cauchy-criterion.

Sources: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf — Theorem 2.5.9 and full proof, pp. 85–86.

Decision/provenance: ai-altered statement; ai-generated proof. Apply Abel summation to convergent partial sums t_n of x_n/b_n. Put b_0=t_0=0. The weights (b_k-b_{k-1})/b_n are nonnegative and sum to one; split at a fixed index to show their average of t_{k-1} tends to lim t_n.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `thm-kolmogorov-strong-law-under-summable-normalized-variances`

Claim/conventions: Let $(X_n)_{n\ge1}$ be independent square-integrable real random variables. Let $0<b_n$ be deterministic and nondecreasing with $b_n\to\infty$. If
$$\sum_{n\ge1}\frac{\operatorname{Var}(X_n)}{b_n^2}<\infty,$$
then
$$\frac1{b_n}\sum_{k=1}^n(X_k-\mathbb EX_k)\longrightarrow0\quad\text{almost surely}.$$
In particular, for IID centered square-integrable variables and any $\varepsilon>0$, $S_n/[\sqrt n(\log n)^{1/2+\varepsilon}]\to0$ almost surely (the displayed normalization is used for $n\ge2$).

Dependencies: thm-kolmogorov-convergence-criterion, lem-kronecker-summation-lemma, lem-measurable-functions-preserve-independence, lem-variance-and-covariance-identities-for-random-variables, def-partial-sums-and-sample-means, thm-integral-test-for-series.

Sources: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf — Theorems 2.5.6 and 2.5.9; proof of Theorem 2.5.11, pp. 84–87.

Decision/provenance: ai-altered statement; ai-generated proof. Apply the centered convergence criterion to (X_n-E X_n)/b_n, then apply Kronecker pointwise on its probability-one event. State square integrability explicitly instead of mentioning only finite means. Inline rate example: for IID centered L2 variables, b_n=sqrt(n)(log n)^(1/2+epsilon) for n>=2 gives a summable variance series by the integral test, hence S_n/b_n ->0 a.s.; choose the first positive normalizer to preserve monotonicity.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `cor-independent-nonidentical-finite-variance-strong-law`

Claim/conventions: For independent square-integrable real random variables $(X_n)_{n\ge1}$, the condition $\sum_{n\ge1}\operatorname{Var}(X_n)/n^2<\infty$ implies
$$\frac{S_n-\mathbb ES_n}{n}\longrightarrow0\quad\text{almost surely},\qquad S_n=\sum_{k=1}^nX_k.$$
The variables need not have a common law or a common mean.

Dependencies: thm-kolmogorov-strong-law-under-summable-normalized-variances.

Sources: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf — Theorems 2.5.6 and 2.5.9, pp. 84–86.

Decision/provenance: ai-altered statement; ai-generated proof. Specialize the normalizer to n; no common law or common mean is needed.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `lem-one-sided-maximal-inequality-for-symmetric-independent-sums`

Claim/conventions: For independent symmetric real random variables $X_1,\ldots,X_n$, $n\ge1$, let $S_k=\sum_{j=1}^kX_j$. For every real $a$,
$$\mathbb P(\max_{1\le k\le n}S_k>a)\le2\mathbb P(S_n>a).$$
Consequently for every $t>0$,
$$\mathbb P(\max_{1\le k\le n}|S_k|>t)\le2\mathbb P(|S_n|>t).$$
No moment assumptions are needed.

Dependencies: def-symmetric-real-random-variable, def-partial-sums-and-sample-means, thm-grouping-independent-sigma-algebras, lem-measurable-functions-preserve-independence.

Sources: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes5.pdf — Section 2.2, Lemma 5.13 and proof, p. 8.

Decision/provenance: ai-altered statement; ai-generated proof. On the first crossing of a at k, the unused tail is independent and symmetric, so has probability at least 1/2 to be nonnegative. Apply the result also to -S and sum for the two-sided bound. No moment hypotheses.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `lem-independent-copy-symmetrization-tail-bounds`

Claim/conventions: Let $X'$ be an independent copy of a real random variable $X$. For every $t>0$,
$$\mathbb P(|X-X'|>t)\le2\mathbb P(|X|>t/2).$$
There exists a finite $M\ge0$ with $\mathbb P(|X|\le M)\ge1/2$; for every such $M$,
$$\mathbb P(|X-X'|>t)\ge\tfrac12\mathbb P(|X|>t+M).$$

Dependencies: lem-symmetrization-for-independent-random-series, thm-continuity-from-below-for-measures.

Sources: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf — Appendix A, Lemma 4.18 and proof, pp. 9–10; symmetric-interval variant.

Decision/provenance: ai-altered statement; ai-generated proof. Triangle inequality gives the upper bound. The independent event {|X|>t+M, |X-prime|<=M} gives the lower bound. Continuity from below on [-M,M] supplies M. This symmetric interval variant of the median estimate avoids adding median machinery.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `thm-truncation-weak-law-for-independent-arrays`

Claim/conventions: For each $n\ge1$ let $X_{n,1},\ldots,X_{n,r_n}$ be independent real random variables on one probability space, with finite $r_n\ge0$. Let deterministic $b_n>0$ tend to infinity and set $Y_{n,k}=X_{n,k}\mathbf1_{\{|X_{n,k}|\le b_n\}}$. If
$$\sum_{k=1}^{r_n}\mathbb P(|X_{n,k}|>b_n)\to0,\qquad b_n^{-2}\sum_{k=1}^{r_n}\operatorname{Var}(Y_{n,k})\to0,$$
then
$$\frac{\sum_{k=1}^{r_n}X_{n,k}-\sum_{k=1}^{r_n}\mathbb EY_{n,k}}{b_n}\longrightarrow0\quad\text{in probability}.$$
No independence between rows is required.

Dependencies: def-truncation-at-a-fixed-level, thm-chebyshev-weak-law-for-uncorrelated-arrays, lem-measurable-functions-preserve-independence, def-convergence-in-probability, thm-finite-and-countable-subadditivity-of-measures.

Sources: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf — Theorem 2.2.11, pp. 62–63; second-moment sufficient form; https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf — Section 2.1, Theorem 4.8 and proof, p. 4; variance form.

Decision/provenance: ai-altered statement; ai-generated proof. Union bound controls the event on which any truncation differs; the uncorrelated-array law controls centered truncated sums. No dependence condition between rows.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `lem-vanishing-tail-control-implies-small-truncated-second-moment`

Claim/conventions: Let $X$ be a real random variable with $n\mathbb P(|X|>n)\to0$ as positive integers $n\to\infty$. Then $x\mathbb P(|X|>x)\to0$ for real $x\to\infty$, and
$$\frac{\mathbb E[X^2\mathbf1_{\{|X|\le n\}}]}n\longrightarrow0.$$
Moreover $\mathbb E|X|^p<\infty$ for every $0<p<1$.

Dependencies: def-truncation-at-a-fixed-level, thm-layer-cake-formula-for-l-p-powers.

Sources: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf — Theorem 2.2.12 proof with Lemma 2.2.13, pp. 63–64.

Decision/provenance: ai-altered statement; ai-generated proof. Use the integer part and monotonicity of tail probabilities. The layer-cake bound E[X^2 1_{|X|<=n}]<=2 integral_0^n t P(|X|>t)dt and a fixed-prefix/vanishing-tail split prove the limit. For 0<p<1, apply layer cake and bound the large-t integrand by a constant times t^(p-2).

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `lem-largest-summand-bound-for-symmetric-independent-variables`

Claim/conventions: Let $Y_1,\ldots,Y_n$ be independent symmetric real random variables, $n\ge1$, and $S_n=\sum_{k=1}^nY_k$. For $t>0$,
$$\mathbb P(|S_n|\ge t)\ge\tfrac12\mathbb P(\max_{k\le n}|Y_k|\ge t).$$
The same bound holds when both inequalities inside the probabilities are strict. If the $Y_k$ are IID and $p=\mathbb P(|Y_1|>t)$, then
$$\mathbb P(|S_n|>t)\ge\tfrac12(1-(1-p)^n)\ge\tfrac12(1-e^{-np}).$$

Dependencies: def-symmetric-real-random-variable, def-partial-sums-and-sample-means, thm-independent-random-elements-have-product-joint-law, thm-arithmetic-and-lattice-operations-preserve-measurability.

Sources: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf — Roch Note 4, Appendix A, Lemma 4.19 and proof, p. 10.

Decision/provenance: ai-altered statement; ai-generated proof. Partition by the least index j with largest absolute summand. Its selection event depends only on magnitudes and is invariant under flipping coordinate j. Independence and symmetry make the joint law invariant under that flip. For R=sum_{k!=j}Y_k, at least one of |R+Y_j| and |R-Y_j| is >=|Y_j|. Integrate on the selection event, then sum over j. Handle strict thresholds directly; do not copy the source sign error or its atom-sensitive CDF shorthand.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `thm-truncated-centering-criterion-for-an-iid-weak-law`

Claim/conventions: For IID real random variables $(X_n)_{n\ge1}$ and $S_n=\sum_{k=1}^nX_k$, there exist deterministic real constants $(\mu_n)$ with $S_n/n-\mu_n\to0$ in probability if and only if
$$n\mathbb P(|X_1|>n)\longrightarrow0.$$
When this condition holds, $\mu_n=\mathbb E[X_1\mathbf1_{\{|X_1|\le n\}}]$ works. Neither existence of an untruncated mean nor convergence of $(\mu_n)$ is asserted.

Dependencies: def-identically-distributed-and-iid-random-variables, lem-symmetrization-for-independent-random-series, lem-independent-copy-symmetrization-tail-bounds, lem-one-sided-maximal-inequality-for-symmetric-independent-sums, thm-truncation-weak-law-for-independent-arrays, lem-vanishing-tail-control-implies-small-truncated-second-moment, def-convergence-in-probability, thm-finite-and-countable-subadditivity-of-measures, lem-largest-summand-bound-for-symmetric-independent-variables.

Sources: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf — Theorem 4.4, pp. 2–5 and Appendix A, pp. 9–11; https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf — Theorem 2.2.12 and necessity remark, pp. 63–64; https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes5.pdf — Lemma 5.13, p. 8.

Decision/provenance: ai-altered statement; ai-generated proof. Sufficiency follows from the truncated array law and second-moment bound. Necessity: copy the centered sum, so T_n/n=sum(X_k-X_k-prime)/n ->0. The largest-summand lemma gives P(|T_n|>epsilon n)>=(1-exp(-n P(|X_1-X_1-prime|>epsilon n)))/2, hence n times that tail tends to zero. The independent-copy lower tail comparison with fixed M and epsilon<1 then yields n P(|X_1|>n)->0. The one-sided maximal inequality supplies an alternate check using max|Z_k|<=2 max|T_k|. No CLT or characteristic functions.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `lem-levy-maximal-inequality-for-independent-tail-sums`

Claim/conventions: Let $X_1,\ldots,X_n$ be independent real random variables, $n\ge1$, with $S_k=\sum_{j=1}^kX_j$. Let $l>0$ and $0\le\delta<1$. If
$$\mathbb P\left(\left|\sum_{j=i}^nX_j\right|\ge l/2\right)\le\delta\quad(1\le i\le n),$$
then
$$\mathbb P(\max_{k\le n}|S_k|\ge l)\le\frac\delta{1-\delta}.$$
No centering or moment assumption is required.

Dependencies: def-partial-sums-and-sample-means, def-independent-random-elements, thm-grouping-independent-sigma-algebras, thm-arithmetic-and-lattice-operations-preserve-measurability.

Sources: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf — Lemma 3.8 and proof, pp. 62–63.

Decision/provenance: ai-altered statement; ai-generated proof. Partition by first crossing l. On a crossing with |S_n|<=l/2 the remaining tail has magnitude at least l/2; independence bounds that event by delta times the crossing probability. The complementary final-tail event has probability at most delta.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `lem-cauchy-in-probability-sequences-have-a-measurable-limit`

Claim/conventions: Let $(Y_n)_{n\ge1}$ be real random variables on one probability space. Suppose that for every $\varepsilon,\eta>0$ there is $N$ such that
$$\mathbb P(|Y_n-Y_m|>\varepsilon)<\eta\quad(n,m\ge N).$$
Then there is a finite measurable real random variable $Y$ such that $Y_n\to Y$ in probability.

Dependencies: def-convergence-in-probability, cor-first-borel-cantelli-lemma-for-events, thm-series-cauchy-criterion, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable, thm-almost-sure-convergence-implies-convergence-in-probability, thm-finite-and-countable-subadditivity-of-measures.

Sources: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf — Varadhan, Chapter 3, Exercise 3.11, p. 65.

Decision/provenance: literature-derived statement; ai-generated proof. Choose strictly increasing least indices n_k so that all pairs beyond n_k have probability at most 2^-k of separation exceeding 2^-k. BC1 gives eventual summability of the selected successive differences, so the subsequence converges a.s. by completeness of R. Extend its finite limit by zero off its measurable convergence event. Triangle and union bounds, first taking k large and then n>=n_k, show convergence of the entire sequence in probability.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `thm-independent-series-probability-and-almost-sure-convergence-agree`

Claim/conventions: For partial sums $S_n=\sum_{k=1}^nX_k$ of independent real random variables $(X_n)_{n\ge1}$ on one probability space, the following are equivalent: $(S_n)$ is Cauchy in probability; $(S_n)$ converges in probability to a finite real random variable; $(S_n)$ converges almost surely to a finite real random variable. The probability and almost-sure limits agree almost surely.

Dependencies: lem-levy-maximal-inequality-for-independent-tail-sums, def-almost-sure-convergence-of-a-random-series, def-convergence-in-probability, thm-continuity-from-below-for-measures, thm-continuity-from-above-for-measures, thm-series-cauchy-criterion, thm-almost-sure-convergence-implies-convergence-in-probability, thm-limits-in-probability-are-unique-almost-surely, lem-cauchy-in-probability-sequences-have-a-measurable-limit.

Sources: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf — Theorem 3.9, implication (ii) to (iii), pp. 63–65.

Decision/provenance: ai-altered statement; ai-generated proof. Probability convergence makes all sufficiently late increments uniformly small in probability. Apply the preceding maximal bound to finite tail blocks, pass to the infinite supremum, and use decreasing Cauchy oscillations. Identify limits by uniqueness. Distribution-only convergence is deferred to the characteristic-function page. The preceding completeness lemma makes the Cauchy-in-probability formulation equivalent to convergence in probability.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `ex-weak-law-for-bernoulli-sample-means`

Claim/conventions: Assume countable choice and dependent choice. For IID Bernoulli$(p)$ variables $(X_k)_{k\ge1}$, where $0\le p\le1$, let $S_n=\sum_{k=1}^nX_k$. Then $S_n/n\to p$ in probability and
$$\mathbb P(|S_n/n-p|\ge\varepsilon)\le\frac{p(1-p)}{n\varepsilon^2}\quad(\varepsilon>0).$$
The endpoint laws $p=0,1$ are included.

Dependencies: cor-iid-finite-variance-weak-law, def-bernoulli-and-binomial-random-variables, lem-bernoulli-and-binomial-mean-and-variance, cor-countable-independent-copies-exist.

Sources: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf — Section 3.2 opening calculation, pp. 54–55.

Decision/provenance: ai-altered statement; ai-generated proof. Use the published Bernoulli moments and Chebyshev; the established countable product supplies a common-space infinite sequence.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `ex-weak-law-for-independent-nonidentical-variables`

Claim/conventions: Assume countable choice and dependent choice. Let independent $X_k$ be Bernoulli$(p_k)$ with $p_k=1/4$ for odd $k$ and $p_k=3/4$ for even $k$. Then for $S_n=\sum_{k=1}^nX_k$,
$$\mathbb E\left|\frac{S_n-\mathbb ES_n}{n}\right|^2=\frac3{16n},\qquad S_n/n\longrightarrow1/2\quad\text{in probability}.$$
Thus a common distribution is not required.

Dependencies: thm-chebyshev-weak-law-for-uncorrelated-arrays, cor-coordinate-random-elements-on-a-countable-product-are-independent, thm-countable-product-of-probability-spaces, lem-bernoulli-and-binomial-mean-and-variance.

Sources: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf — Theorem 2.2.6, p. 59, direct example.

Decision/provenance: ai-generated statement; ai-generated proof. Compute the deterministic mean average and the sum of variances; apply the row law. Existence uses varying Bernoulli factors.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `ex-rademacher-series-convergence-threshold`

Claim/conventions: Assume countable choice and dependent choice, and let $(\epsilon_n)_{n\ge1}$ be independent fair signs taking exactly the values $-1$ and $1$. For real $\alpha$, the series $\sum_{n\ge1}\epsilon_n n^{-\alpha}$ converges almost surely exactly when $\alpha>1/2$; if $\alpha\le1/2$ it diverges almost surely. Its absolute series converges exactly when $\alpha>1$.

Dependencies: thm-kolmogorov-three-series-theorem, cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event, cor-countable-independent-copies-exist, thm-p-series-real-exponents.

Sources: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf — Example 2.5.7, p. 85.

Decision/provenance: ai-altered statement; ai-generated proof. For alpha>0 eventually truncation leaves the terms unchanged, with zero means and variances n^-2alpha. For alpha<=0 the terms fail to tend to zero. Three-series plus the existing zero-one result gives a.s. divergence.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `ex-a-random-series-that-converges-conditionally-almost-surely`

Claim/conventions: Assume countable choice and dependent choice. On a probability space carrying independent fair signs $\epsilon_n\in\{-1,1\}$, the random harmonic series $\sum_{n\ge1}\epsilon_n/n$ converges almost surely, but $\sum_{n\ge1}|\epsilon_n/n|$ diverges at every sample point. By comparison the deterministic harmonic series diverges and its alternating version converges.

Dependencies: thm-kolmogorov-three-series-theorem, cor-countable-independent-copies-exist, thm-p-series-real-exponents, thm-alternating-series-test.

Sources: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf — Example 2.5.7, p. 85; https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes5.pdf — Examples 5.1 and 5.3, pp. 1–2.

Decision/provenance: ai-altered statement; ai-generated proof. Apply three-series at A=1 and the p-series criterion separately to the squares and absolute values; no dependency on a generated example. Inline contrast: the deterministic harmonic series diverges, whereas its alternating version converges by the published alternating-series test.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `ex-three-series-with-rare-large-jumps`

Claim/conventions: Assume countable choice and dependent choice. At cutoff $A=1$, each of the following independent-sequence constructions violates exactly one of the three-series conditions:

1. For $n\ge2$, let $X_n=2$ with probability $1/n$ and $X_n=0$ otherwise; set $X_1=0$. Only the large-jump probability series diverges.
2. Let $X_n=1/n$ deterministically. Only the truncated mean series diverges.
3. Let $X_n=\epsilon_n/\sqrt n$ for independent fair signs. Only the truncated variance series diverges.

None of these series converges almost surely.

Dependencies: thm-kolmogorov-three-series-theorem, cor-second-borel-cantelli-lemma-under-pairwise-independence, thm-p-series-real-exponents, cor-coordinate-random-elements-on-a-countable-product-are-independent, thm-countable-product-of-probability-spaces.

Sources: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf — Theorem 3.12, pp. 66–68, direct specializations; https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf — Example 2.5.7, p. 85, variance obstruction.

Decision/provenance: ai-generated statement; ai-generated proof. Compute all three numerical series for each case, including the cutoff endpoint. BC2 or three-series gives failure of convergence. These are direct diagnostic instances of the exact theorem.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `cex-weak-law-can-fail-without-tail-control`

Claim/conventions: The assertion that independent centered rows automatically satisfy a weak law with normalization $n$ is false. Assume countable choice and dependent choice. A witness is the row of length $n$ defined by $X_{n,1}=n\epsilon_n$ and $X_{n,k}=0$ for $2\le k\le n$, where the $\epsilon_n$ are independent fair signs. With $S_n=\sum_{k=1}^nX_{n,k}$, $S_n/n$ does not converge in probability to zero.

Dependencies: thm-chebyshev-weak-law-for-uncorrelated-arrays, def-convergence-in-probability, cor-countable-independent-copies-exist.

Sources: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf — Theorem 2.2.6, p. 59, direct counterexample when its variance condition fails.

Decision/provenance: ai-generated statement; ai-generated proof. P(|S_n/n|>1/2)=1 and normalized row variance equals one. Explicitly this is an array example, not a counterexample to an IID integrable law.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `cex-sum-of-variances-condition-is-sufficient-not-necessary-without-further-hypotheses`

Claim/conventions: It is false that almost-sure convergence of a series of independent centered square-integrable variables forces summability of their untruncated variances. Assume countable choice and dependent choice. Let $X_1=0$ and for $n\ge2$ take independent $X_n$ with
$$\mathbb P(X_n=n)=\mathbb P(X_n=-n)=\frac1{2n^2},\qquad \mathbb P(X_n=0)=1-\frac1{n^2}.$$
Then $\sum_nX_n$ converges absolutely almost surely, although $\mathbb EX_n=0$ and $\operatorname{Var}(X_n)=1$ for every $n\ge2$.

Dependencies: cor-first-borel-cantelli-lemma-for-events, cor-coordinate-random-elements-on-a-countable-product-are-independent, thm-countable-product-of-probability-spaces, thm-p-series-real-exponents, def-almost-sure-convergence-of-a-random-series.

Sources: https://math.nyu.edu/~varadhan/course/PROB.ch3.pdf — Borel–Cantelli Lemma 3.4, pp. 58–59; Theorem 3.12 fixed-truncation conditions, pp. 66–68, direct counterexample.

Decision/provenance: ai-generated statement; ai-generated proof. Sum P(X_n!=0)=sum n^-2<infinity gives only finitely many nonzero terms a.s.; nevertheless the variance sum diverges. This repairs the design deterministic witness, which has zero variances and cannot prove the claim.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `cex-iid-cauchy-averages-have-no-deterministic-weak-centering`

Claim/conventions: Assume countable choice and dependent choice. For IID real variables with density $f(x)=1/[\pi(1+x^2)]$ on $\mathbb R$, there is no deterministic real sequence $(\mu_n)$ for which $S_n/n-\mu_n\to0$ in probability, where $S_n=\sum_{k=1}^nX_k$. Thus IID alone cannot guarantee a weak law even with varying deterministic centering.

Dependencies: thm-truncated-centering-criterion-for-an-iid-weak-law, cor-countable-independent-copies-exist, def-law-or-distribution-of-a-random-element.

Sources: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf — Example 2.2.15, p. 65.

Decision/provenance: ai-altered statement; ai-generated proof. The density integrates to one by arctangent; elementary integral bounds give n P(|X|>n)->2/pi. Apply the necessity theorem without characteristic functions or stable-law identities.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

### Authored `ex-truncated-centering-weak-law-with-infinite-mean`

Claim/conventions: Assume countable choice and dependent choice. Let $X\ge e$ have survival function $\mathbb P(X>x)=1/(x\log x)$ for $x\ge e$, with an atom of mass $1-1/e$ at $e$. For IID copies $(X_k)$, the untruncated mean is infinite but
$$S_n/n-\mu_n\longrightarrow0\quad\text{in probability},\qquad \mu_n=e+\log\log n-\frac1{\log n}\quad(n\ge e).$$
Here $\mu_n=\mathbb E[X\mathbf1_{\{X\le n\}}]$; for integer $n<e$ set $\mu_n=0$. More generally, the survival family $1/[x(\log x)^\alpha]$ for $x\ge e$, $\alpha\ge0$, has infinite second moment for every $\alpha$, finite first moment exactly for $\alpha>1$, and admits deterministic weak-law centering exactly for $\alpha>0$.

Dependencies: thm-truncated-centering-criterion-for-an-iid-weak-law, cor-countable-independent-copies-exist, cor-layer-cake-formulas-for-random-variables, thm-probability-law-and-distribution-function-correspondence.

Sources: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes4.pdf — Example 4.7, pp. 3–4, alpha=1 with endpoint correction.

Decision/provenance: ai-altered statement; ai-generated proof. Verify the distribution, integrate the survival, and use E[X1_{X<=n}]=integral_0^n P(X>t)dt-nP(X>n). Retain the atom correction omitted in the source displayed truncated integral; the asymptotic is mu_n~log log n.

Current state: draft written; item-specific citation, derivation, and boundary contract written. No judge record. Focused validators pending. No mathematical obligation left in this item; next action: author the next assigned item, then run all required checks.

Both assigned probability pages have been written at their exact planned library paths with status draft, listing all 27 A items and 9 B items. No claim was dropped or narrowed. The design’s invalid deterministic variance witness remains replaced by the scaffold’s rare symmetric jumps. Validator execution is next.

### Initial validation and repairs

The first explicit-path precheck run checked 31 proof bodies and required canonical phase stratification on all 31. Its returned canonical step numbers and references were adopted, with all contract use maps and boundary anchors updated. Initial strict contracts passed 31/31 with zero warnings. Initial content-policy reported one applied-iota notation error inherited in the displayed integral-test quotation; its displayed fact was replaced by the exact relevant mathematical specialization while retaining the full original quote in the contract.

Citation precision: added the already-published expectation-factorization dependency to the truncated-array theorem and nonidentical Bernoulli example; added the finite product-joint-law dependency to the symmetric maximal lemma; added the distribution-function correspondence dependency to the Cauchy counterexample, whose probability-law construction is now explicit. These are existing backward prerequisites, with exact statements read; no new item or page is added. The Cauchy-in-probability completeness statement is tagged ai-altered to reflect its explicit quantified reformulation of Varadhan Exercise 3.11. No claim was narrowed or dropped.

The exact required bare validate-plan command was attempted and returned usage because this executable requires a plan path. The next run supplies research/plan-spec.json. Checks remain pending after repairs.

### Final proof-type check

In `thm-kolmogorov-convergence-criterion`, canonical step 1.2 now explicitly takes the real part of the L2 representative and uses |S_n-Re(T_0)| <= |S_n-T_0|. This makes the limit a finite real random variable even though the published Lp completeness theorem can be read over complex scalars. The dependency statement and the current proof were reread before this repair; its derivation contract was updated. No statement, dependency, or page change is needed. The canonical proof reorder in this item was also reflected in all citation-use maps and boundary evidence; strict contracts then passed 31/31.

### Final Step-5 validation receipts

Command (executed):

```bash
node tools/tsx-run.mjs tools/precheck.mts items/def-identically-distributed-and-iid-random-variables.md items/def-partial-sums-and-sample-means.md items/thm-chebyshev-weak-law-for-uncorrelated-arrays.md items/cor-iid-finite-variance-weak-law.md items/def-truncation-at-a-fixed-level.md items/thm-khinchin-weak-law-for-iid-integrable-variables.md items/def-almost-sure-convergence-of-a-random-series.md items/thm-kolmogorov-maximal-inequality.md items/thm-kolmogorov-convergence-criterion.md items/cor-kolmogorov-two-series-sufficiency.md items/def-symmetric-real-random-variable.md items/lem-symmetrization-for-independent-random-series.md items/lem-bounded-centered-convergent-series-have-summable-variances.md items/lem-three-series-necessity-for-truncated-means-and-variances.md items/thm-kolmogorov-three-series-theorem.md items/lem-kronecker-summation-lemma.md items/thm-kolmogorov-strong-law-under-summable-normalized-variances.md items/cor-independent-nonidentical-finite-variance-strong-law.md items/lem-one-sided-maximal-inequality-for-symmetric-independent-sums.md items/lem-independent-copy-symmetrization-tail-bounds.md items/thm-truncation-weak-law-for-independent-arrays.md items/lem-vanishing-tail-control-implies-small-truncated-second-moment.md items/lem-largest-summand-bound-for-symmetric-independent-variables.md items/thm-truncated-centering-criterion-for-an-iid-weak-law.md items/lem-levy-maximal-inequality-for-independent-tail-sums.md items/lem-cauchy-in-probability-sequences-have-a-measurable-limit.md items/thm-independent-series-probability-and-almost-sure-convergence-agree.md items/ex-weak-law-for-bernoulli-sample-means.md items/ex-weak-law-for-independent-nonidentical-variables.md items/ex-rademacher-series-convergence-threshold.md items/ex-a-random-series-that-converges-conditionally-almost-surely.md items/ex-three-series-with-rare-large-jumps.md items/cex-weak-law-can-fail-without-tail-control.md items/cex-sum-of-variances-condition-is-sufficient-not-necessary-without-further-hypotheses.md items/cex-iid-cauchy-averages-have-no-deterministic-weak-centering.md items/ex-truncated-centering-weak-law-with-infinite-mean.md
```

Exit code: 0.

```text
31 checked, 0 failing — all clean (the five definitions have no phase proof body).
```

Command (executed):

```bash
node tools/validate-plan.mjs research/plan-spec.json
```

Exit code: 0.

```text
OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 892 page(s) with item lists.
NOTE: 463 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.
```

Command (executed):

```bash
node tools/content-policy.mjs research/frontier-33-batch-3.pages.json
```

Exit code: 0.

```text
content-policy: 36 scoped item(s), 0 error(s), 0 warning(s)
```

Command (executed):

```bash
node tools/proof-contract.mjs research/frontier-33-batch-3.proof-contracts.json --strict
```

Exit code: 0.

```text
proof-contract: 0 error(s), 0 warning(s), 31/31 item(s) checked
```

Command (executed):

```bash
node tools/rendercheck.mjs items/def-identically-distributed-and-iid-random-variables.md items/def-partial-sums-and-sample-means.md items/thm-chebyshev-weak-law-for-uncorrelated-arrays.md items/cor-iid-finite-variance-weak-law.md items/def-truncation-at-a-fixed-level.md items/thm-khinchin-weak-law-for-iid-integrable-variables.md items/def-almost-sure-convergence-of-a-random-series.md items/thm-kolmogorov-maximal-inequality.md items/thm-kolmogorov-convergence-criterion.md items/cor-kolmogorov-two-series-sufficiency.md items/def-symmetric-real-random-variable.md items/lem-symmetrization-for-independent-random-series.md items/lem-bounded-centered-convergent-series-have-summable-variances.md items/lem-three-series-necessity-for-truncated-means-and-variances.md items/thm-kolmogorov-three-series-theorem.md items/lem-kronecker-summation-lemma.md items/thm-kolmogorov-strong-law-under-summable-normalized-variances.md items/cor-independent-nonidentical-finite-variance-strong-law.md items/lem-one-sided-maximal-inequality-for-symmetric-independent-sums.md items/lem-independent-copy-symmetrization-tail-bounds.md items/thm-truncation-weak-law-for-independent-arrays.md items/lem-vanishing-tail-control-implies-small-truncated-second-moment.md items/lem-largest-summand-bound-for-symmetric-independent-variables.md items/thm-truncated-centering-criterion-for-an-iid-weak-law.md items/lem-levy-maximal-inequality-for-independent-tail-sums.md items/lem-cauchy-in-probability-sequences-have-a-measurable-limit.md items/thm-independent-series-probability-and-almost-sure-convergence-agree.md items/ex-weak-law-for-bernoulli-sample-means.md items/ex-weak-law-for-independent-nonidentical-variables.md items/ex-rademacher-series-convergence-threshold.md items/ex-a-random-series-that-converges-conditionally-almost-surely.md items/ex-three-series-with-rare-large-jumps.md items/cex-weak-law-can-fail-without-tail-control.md items/cex-sum-of-variances-condition-is-sufficient-not-necessary-without-further-hypotheses.md items/cex-iid-cauchy-averages-have-no-deterministic-weak-centering.md items/ex-truncated-centering-weak-law-with-infinite-mean.md library/probability/weak-laws-and-series-of-independent-random-variables.md library/probability/weak-laws-and-series-of-independent-random-variables-examples.md
```

Exit code: 0.

```text
OK — 38 file(s): no wikilink inside math, no nested or unbalanced
delimiters, no multiline display block, every math span parses under the real
KaTeX, and every frontmatter block parses under the renderer's YAML parser.
```

Final scope check: all 36 item files and both planned probability page files exist, have status draft, have no judge record, and have no trailing whitespace. Page item lists exactly match the manifest; strict contract scope exactly matches the 31 proof-bearing items. The current manifest records the four added backward citation edges and the completeness statement provenance correction. No plan structure, workflow state, published content, or other batch was edited by this authoring task.

Narrowed/dropped claims: none. Choice hypotheses in existence examples explicitly preserve the published construction hypotheses already required by the scaffold notes. Source qualifications retained: two-sided uniform bound in bounded-series necessity; real L2 representative; fixed positive zero truncation; both directions of the centering and three-series equivalences; exact logarithmic-tail endpoint atom. No finite-smoke result is offered as proof, and no judge, publication, or source stamp was created.

Blockers: none for Step-5 authoring. The bare validate-plan invocation requires an argument in this checkout; the explicit current-plan invocation passed. Repository-wide redundant-prerequisite notices and the note about unfilled future pages are informational. Next action belongs to the build driver; this authoring dispatch is complete.

### Gate repair checkpoint

`lem-cauchy-in-probability-sequences-have-a-measurable-limit` now starts its selected subsequence at `n_0=1` and states the recursive bounds only for `k>=1`, closing the frozen refuter's undefined-`Y_0` finding. The weak-laws examples page title now uses an actual em dash rather than an invalid YAML escape. Reflow was unchanged; focused precheck/render, content policy, strict contract, depcheck, and refreshed batch author-check all pass.
