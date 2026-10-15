# Step 3a adjudication — batch 6

Run: `bayesian-computational-statistics-62`. Group: `batch-6`. Scope: batch 6 only.

Read the scope, order task, reader report/findings, refute-6.json, and pre/post fingerprint inventories. Exactly two touched obligations; no page, reader, or refuter findings. No agents or judge cycle initiated.

## def-exponential-conjugate-prior-family

Reviewed the Definition and complete log-partition measurability argument. The sigma-finite constant sampling kernel has a common finite exhaustion, so parameter integration applies to the nonnegative product-measurable integrand; H is Borel and log is continuous on the finite-positive range. Trace measurability permits arbitrary Omega subset H. The prior is asserted only for 0<Z<infinity; zero rho and divergent integrals produce no probability prior. No additional choice is used. No source edit; risk review complete. Source evidence: current item Facts/Remarks and the exact local dependency Statements/Definitions.

## lem-beta-density-normalization

Reviewed steps 1.1–3.1 and all ten dependency statements. Positive-parameter powers are continuous on the open interval. The increasing compact intervals [1/m,1-1/m] exhaust (0,1), and Countable Choice is explicitly assumed for the Riemann/Lebesgue identification. Monotone convergence identifies the nonnegative Lebesgue integral with the convergent improper Beta integral; the Beta–Gamma identity and positive Gamma integrals give finite strict positivity, including parameters below one with endpoint singularities. No source edit; risk review complete. Source evidence: current item Facts/Remarks and the exact local dependency Statements/Definitions.

## lem-finite-euclidean-space-is-standard-borel

Reviewed all six steps and nineteen prerequisite Statements/Definitions. n>=1 makes the finite minimum and maximum nonempty and sqrt(n)>0. Product boxes identify the maximum metric topology; termwise square bounds give d_infinity<=d_2<=sqrt(n)d_infinity. Rational tolerance refinement transfers Cauchy sequences and limits from the complete Euclidean metric. Q^n supplies countable density, and identity supplies the Borel isomorphism. No empty-coordinate or arbitrary choice assertion is made. No source edit; risk review complete. Evidence: current proof and local cited Statements/Definitions.

## lem-gamma-density-normalization

Reviewed steps 1.1–3.1 and all prerequisite statements. The compact exhaustion [1/m,m] handles both the origin singularity and infinity; the explicit Countable Choice assumption covers Riemann/Lebesgue identification and change of variables. For a,b>0 the map x↦bx is a C1 diffeomorphism with determinant b, giving b^(-a)Gamma(a), finite and positive. Multiplication by b^a/Gamma(a) yields exactly one. The cases a<1 and arbitrary positive rate retain the hypotheses. No source edit; risk review complete. Evidence: current proof and local cited Statements/Definitions.

## thm-multivariate-normal-conditional-law

Reviewed steps 1.1–4.1, all eight supplier statements, and the singular Gaussian definition and block-independence proofs. The Schur complement is nonnegative by substituting v=-B^(-1)C^T u. The affine residual has zero observed cross-covariance and is independent by the singular-capable Gaussian lemma under AC. Its translated law is a probability kernel by finite-kernel integration; product joint law and Tonelli prove the conditional rectangle identity. B is positive definite, d,m>=1; A or S may be singular, including S=0. No assertion is made for singular B or a density of the residual. No source edit; risk review complete.

## thm-dirichlet-density-normalization

Reviewed all four steps and twelve cited prerequisites. The simplex is open in R^(k-1), k>=2; the stick-breaking map and inverse have positive denominators, and the triangular determinant is product_(i<=k-2)(1-z_i)^(k-i-1). Combining all powers gives exponent sum_(j>i)alpha_j-1. The Beta parameters are positive; Tonelli and telescoping Gamma ratios yield the exact finite-positive normalizer. k=2 gives the one-dimensional Beta integral with empty Jacobian product one. Countable Choice covers change of variables and Lebesgue suppliers. No source edit; risk review complete. Evidence: current proof and cited local Statements/Definitions.

## thm-iid-exponential-family-statistic-is-sufficient

Reviewed steps 1.1–3.1 and all twelve supplier statements. Nonnegative product densities integrate to one and agree with product laws on rectangles, allowing finite-measure uniqueness. Nonempty Omega permits a single in-model reference eta_0. Finite h and real T make the likelihood ratio a finite positive exponential of the sum statistic; zero h forces both densities to vanish, so absolute continuity holds. The exact common-reference criterion applies to the standard-Borel finite sample and statistic target, including k=0 singleton. AC is carried for conditional-law suppliers; no full-rank or converse claim is used. No source edit; risk review complete. Evidence: current proof and cited local Statements/Definitions.

## thm-beta-binomial-conjugate-update

Reviewed three steps and eight supplier statements. Finite count space makes likelihood event probabilities finite sums of continuous functions of p, giving a measurable probability kernel. Multiplication gives positive shapes alpha+y,beta+n-y, so Beta normalization supplies strictly positive finite evidence and the exact Bayes quotient. At y=0,y=n and n=0 the argument remains valid; n=0 gives evidence one and unchanged prior. Countable Choice is inherited only through Beta normalization. No source edit; risk review complete. Evidence: current proof and cited local Statements/Definitions.

## thm-dirichlet-multinomial-conjugate-update

Reviewed all three steps and ten supplier statements. Finite admissible counts give a measurable normalized sampling kernel. For k>=2 multiplication adds each nonnegative count to its positive prior shape; Dirichlet normalization gives the stated evidence constant and quotient. Zero coordinates of y and n=0 preserve positive shapes; the latter has evidence one. k=1 is handled separately as deterministic count and parameter with likelihood and evidence one. Countable Choice is carried and no endpoint atoms are introduced. No source edit; risk review complete. Evidence: current proof and cited local Statements/Definitions.

## thm-exponential-family-conjugate-update

Reviewed all three steps and six exact supplier statements, including the prior measurability argument already reviewed at level zero. The theorem expressly assumes the specified jointly measurable IID product density and a probability sampling kernel; it does not infer those from individual density versions. Finite-valued h is strictly positive at the observations and both prior and updated Z are finite positive. Exponents therefore add without undefined operations; integration gives the exact evidence ratio and cancellation gives the posterior. No full-rank, global conjugacy-domain, or invalid-fiber claim is used. No source edit; risk review complete. Evidence: current proof and cited local Statements/Definitions.

## thm-gamma-poisson-exposure-adjusted-update

Reviewed all three steps and fifteen prerequisite statements. Countably discrete data gives joint measurability and measurable kernel event sums by increasing finite boxes, including n=0 singleton. A zero exposure with positive count forces likelihood/evidence zero and no quotient. Otherwise c is finite positive, S>=0 and E>=0; updated a+S,b+E are positive and Gamma normalization gives precisely the stated evidence and quotient. All-zero exposures with zero counts, and the empty sample, give evidence one and the original prior. Countable Choice is inherited through Gamma normalization. No source edit; risk review complete. Evidence: current proof and cited local Statements/Definitions.

## thm-normal-normal-conjugate-update

Reviewed all three proof steps, all twenty-six prerequisites, and the complete current location-scale density supplier proof. AC supplies Countable Choice for Borel Lebesgue products and the finite cube exhaustion. Tonelli normalizes the product density; rectangle uniqueness identifies the IID law, and uniformly sigma-finite kernel integration proves measurable event evaluations. With P>0 and finite q,r, completing the square gives Delta=r-q^2/P>=0 and finite-positive evidence C exp(-Delta/2)sqrt(2pi/P). The quotient is N(q/P,1/P), exactly the stated mean and variance. n>=1 and positive variances exclude undefined averages and zero precision. The added density citation supplies the formula absent from the affine-pushforward definition. Risk review complete. Verdict: `amended_repair`, repair confidence 1. Reader source retained byte-for-byte; synchronized its manifest dependency list and Statement with the source.

Historical source was recovered from the numbered carrier output in the genuine reader attempt log (lines 8411–8477), removing only the listing prefixes and preserving the absence of a final newline. Its SHA256 matches pre-reader `ecf22cac1b504706999338c1f2bd1e5cdf26eb088a204f2526620ac9658c7a18`; current raw SHA256 matches post-reader `98d7e16bf9100460141c088579557feb38cb382046efd32cc3b4613cf1955e1e`. The old F1 misattributed the density formula to an affine-pushforward definition; the old step 1.1 omitted the probability-kernel event-measurability derivation. Both are closed by the current proof.

The Statement clarifies the Borel data sigma-algebra. Direct reference consumers: `ex-normal-normal-conjugate-update` uses positive variances, n=2 and the unchanged posterior formula; `thm-normal-normal-hierarchical-shrinkage` step 1.1 uses n=1 with canonical Borel normal densities and positive variances under AC. Both remain sound. The A-page summary uses only the unchanged precision update. No consumer repair is needed, including the outside-batch hierarchy theorem, so no further propagation is required.

## ex-beta-binomial-update

Reviewed the complete current three-step proof and four supplier statements, including the Beta–Gamma identity and integer Gamma theorem. Independently computed B(2,3)=1!2!/4!=1/12 and B(5,5)=4!4!/9!=1/630, hence 10 B(5,5)/B(2,3)=4/21. Updated shapes (5,5) and boundary shapes (2,8),(7,3) are positive. The explicit identity citation closes the derivation; Countable Choice is inherited through the update supplier. Risk review complete. Verdict: `amended_repair`, repair confidence 1. Current source retained unchanged; synchronized the manifest dependency list. The original numbered carrier in reader attempt log lines 8533–8585 reconstructs to pre-reader SHA256 `5f4937a1131a3e1c5951a4201b8b6cb4b3eb2ab8c8bfbf95f7ff2140baf69368` with no final newline. Current raw SHA256 matches post-reader `8d697a3ee38515405b4fc7361e31b9f52ed802399c299fc15aea207f7d40a51e`. The original equality 1!2!/3!=1/12 was false (its left side is 1/3); the repaired denominator 4! is correct. No Statement change or consumer propagation.

## ex-exposure-gamma-poisson-update

Reviewed all three steps and three cited suppliers. For exposures (2,0) and counts (3,0), S=3,E=2,c=2^3/3!=4/3; Gamma(5)=24 and Gamma(2)=1 give evidence (4/3)*24/3^5=32/243 and posterior Gamma(5,3) in shape-rate convention. A positive second count at zero exposure has identically zero likelihood/evidence and no quotient. No posterior conditional-kernel claim is made on the impossible fiber. Risk review complete. No source edit or owed decision.

## Disposition and validation

Exactly two decisions are owed and supplied in the companion `-decisions.json`. Both are `amended_repair` with `repair_confidence: 1`: the reader mathematical source is retained byte-for-byte, but manifest dependencies (both items), the Normal manifest Statement, and supporting exact contract quotations required reconciliation. The Normal example's local F1 contract quotation was refreshed for the supplier's Borel clarification; its content is unchanged. All fourteen risk reviews are specific and complete in the batch and consolidated contracts. The consolidated update touched only this batch's entries.

Closed defect rows: `bcs62-b6-3a-normal-density-citation` (misattributed citation), `bcs62-b6-3a-normal-kernel-derivation` (nonfatal standard omitted derivation), and `bcs62-b6-3a-beta-factorial` (false factorial computation). The touched decisions reference these rows. No row was created for manifest or quotation-validator failures. The standard ledger append tool serialized the append and refreshed its generated view.

Checks actually run:

- `node tools/risk-report.mjs research/bayesian-computational-statistics-62-batch-6.proof-contracts.json`, then `--require-reviewed`: 25 items routed, zero errors; all fourteen required reviews complete.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-6.proof-contracts.json --strict`: 25/25 checked, zero errors or warnings after exact-quotation synchronization. The initial check identified eleven stale quotations, all corrected without source changes.
- Consolidated contract check with the fourteen reviewed items plus `ex-normal-normal-conjugate-update` explicitly selected: 15/15 checked, zero errors or warnings.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-normal-normal-conjugate-update.md items/ex-beta-binomial-update.md`: two proofs checked, zero failures.
- `node tools/rendercheck.mjs items/thm-normal-normal-conjugate-update.md items/ex-beta-binomial-update.md`: both files pass actual YAML and KaTeX checks.
- Final `node tools/proof-layout.mjs items/thm-normal-normal-conjugate-update.md items/ex-beta-binomial-update.md`: two items, six steps, zero defects.
- Explicit scope/hash/manifest check: exactly two owed decisions; both raw item hashes equal the frozen reader-post inventory; both manifest dependency lists agree with current sources.

Source evidence is the current local Statements/Definitions cited in each reviewed carrier, plus the complete location-scale density and singular Gaussian supplier arguments described above. No external textbook reading or web-source verification is claimed. The genuine reader log was opened only to recover the two exact historical carriers, not as a review verdict. No item or page source was edited in this adjudication. No published content was edited, no defective published prerequisite identified, and no published-ledger row was needed. The frontier dependency ledger retains all stable IDs and prior proposed withdrawals and records this batch's consumer checks. No escalation, unresolved uncertainty or required outside consumer repair remains. Engine decision hashing and the gate battery remain due; no certification, stamping, judging, scheduling or transition was initiated.


## Owner resolution after native adjudication — 2026-10-15T14:58:23.899Z

The original native report and decision bytes are preserved in research/bayesian-computational-statistics-62-owner-step3-beta-positivity/native-before/. Root adopted the actual source repair by bcs_gate1_5_8 and separate focused review by bcs_gate1_37_40 in research/bayesian-computational-statistics-62-owner-step3-beta-positivity-independent-review.md. Current contracts record those genuine reviews. Beta strict positivity is explicitly proved, the two connected fact corrections preserve their Statements, and the quantile algorithm prerequisite use is closed. The canonical decision updates are owner resolutions and current evidence, not new native execution or a change to historical observations. All ordinary native gates remain required.
