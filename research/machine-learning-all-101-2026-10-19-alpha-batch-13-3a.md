# Batch 13 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`. Group: `batch-13`.

The scope has no touched items, changed pages, reader findings or refuter findings. No decisions are owed; the decisions file will contain an empty array. Pre/post item, contract and page snapshot entries are identical. Risk review remains required for nine items.

## Completed risk reviews, dependency order

### lem-chi-square-degree-ratio

Checked both steps against the standard-normal density and Markov statement: integration by parts gives moments 1 and 3; independence gives variance 2r. The eta/2 split gives 8r/(eta^2 n^2), tending to zero. Positive degrees exclude empty sums; n tends to infinity is explicit. No cross-row independence or DC is needed. Reader and refuter report no findings.

### lem-finite-gaussian-max-comparison

Checked all four steps and cited Gaussian realization, density, product-measure and dominated-convergence interfaces. Soft-max Hessian yields a/4 times the increment-variance difference with nonnegative p_i p_j, so the direction is correct. Derivatives are dominated on compact t intervals; endpoint continuity uses linear Gaussian domination. Singular covariances and equal increments are allowed; log(m)/a closes the limit without nondegeneracy. AC is declared. Reader/refuter have no findings.

### lem-gaussian-sample-covariance-operator-concentration

Checked all three steps and all six dependency interfaces. Positive d and d/n tending to zero imply n tends to infinity. Gaussian mgf/Chernoff exponents are correct for both tails, including delta=1 lower tail. Radius-1/8 packing gives a 1/4-net of at most 9^d; union exponent d log9-n epsilon^2/32 tends to minus infinity. Spectral theorem and Cauchy-Schwarz give the factor-two net extension. Singular samples and d=1 cause no exception. AC is explicit; reader/refuter have no findings.

### fs-wainwright-lower-signed-support-threshold

Checked all eight refutation steps and every cited local supplier interface. The 3x3 covariance blocks are positive definite with trace 3; B inverse has row sum 1/delta and (c,-c) row norm 1-epsilon. r is positive and below 3e-6. theta_l>1/1728 gives the exact strict failure inequality. s=N^3 and n=s+ceil(.001s log N) give s/n tending to zero. Gram concentration ensures candidate positivity; the rotated fixed-direction inverse-Gram calculation gives Q=T/D with T/s and D/n tending to one. Conditional dual variance rM is at most .012/log N with high probability, giving 2N^(1-125/3). The final coordinate inequality proves global optimality with lambda=1, rather than presupposing KKT sufficiency. No restriction s<N or n<p is in the reproduced claim. All choice assumptions are carried; reader/refuter identify no findings.

### lem-orthonormal-lasso-soft-thresholding

Checked the objective definition and all three steps. X transpose X=I (rather than nI) gives scalar squared loss divided by 2n and hence threshold n lambda. Scalar one-sided derivatives cover z=0 and z=plus/minus n lambda; strict convexity gives uniqueness including those endpoints. Positive dimensions and lambda>0 are explicit; orthonormal columns imply p<=n. No choice or intercept convention is silently introduced. Reader/refuter have no findings.

### thm-ols-and-ridge-solutions

Checked all three steps against least-squares normal-equation, SVD and Tikhonov statements and both objective definitions. Existence and the full affine kernel family come from the exact finite-dimensional supplier; singleton iff zero kernel iff independent columns proves both directions. SVD adds lambda to every squared singular value including zero, so the ridge inverse exists for lambda>0 even for X=0 and rank deficiency. Ridge uses the unscaled objective, not the empirical Lasso normalization. Reader/refuter have no findings.

### fs-wainwright-signed-support-threshold-claim

Independently checked all nine refutation steps and every cited supplier interface. Identity covariance gives exact constants; log N~k, log s~k^2 and n/s~5k satisfy every upper hypothesis, with a globally non-increasing lambda sequence. Fixed rotation and Schur elimination yield A^-1 1=(n/d)1+Z. Conditional on H,d, the Gaussian Z covariance has norm <=8s/n and pairwise increment variance >=s/(4n), since e_i-e_j is perpendicular to 1. Sudakov-Fernique and the directly proved Gaussian-max lower bound give mean >=sqrt(s log s/n)/(4sqrt8). Applying the stated upper-tail concentration to minus the maximum gives the required lower tail uniformly on E_B intersect E_d, without conditioning on E_A. The separate active-noise union bound is on E_A; their final intersection needs no independence. Lambda times the maximum diverges like sqrt(k/log k); active stationarity therefore forces a negative coefficient for every putative correct-sign optimizer. AC, DC and countable choice are explicitly carried. The refutation disproves the upper branch and hence conjunction, without claiming the separate lower branch here. Reader/refuter have no findings.

### ex-beta-min-below-lasso-threshold-loses-support

Checked both verification steps using the reviewed soft-threshold supplier: n=p=1, X=1, y=1/4 and lambda=1/2 give threshold 1/2 and unique zero minimizer. The true support is the nonempty singleton and estimated support is empty. No stochastic, random-design or universal beta-min conclusion is asserted; no choice is used. Reader/refuter have no findings.

### ex-orthonormal-lasso-soft-thresholding

Checked both steps against the reviewed OLS/ridge and soft-threshold suppliers. X=I_2, n=2 and lambda=1/2 give threshold 1: coordinates 3 and -1 map to 2 and 0, including the equality endpoint. OLS is y and ridge with unscaled penalty parameter 1 gives y/2. Positive dimensions, uniqueness and the empirical-loss convention are explicit. No choice use or random-design assertion. Reader/refuter have no findings.

## Sources and prerequisite review

Read the current reader report, empty reader-findings and refuter artifacts, source-evidence record, current batch cross-batch dependency inventory, and the Statement/Definition sections of every supplier cited by the nine routed items. Also read the complete local Gaussian-maximum lower-bound and active-stationarity proofs needed by the upper refutation. This is a review of actual uses, not a transitive audit of published suppliers.

Checked [Wainwright 2006](https://arxiv.org/pdf/math/0605740), §3.1, Theorem 1, PDF pp.8–9 (printed pp.8–9), equations (17)–(21), and Appendix B, Lemma 10, PDF p.18. The source's asymptotic domains and threshold formulas agree with the reproduced claims; no restriction comparing s with p-s occurs in that theorem. Both refutations are independently proved locally; the paper's proof is not accepted as a supplier.

Rendered and inspected [Wainwright 2009](https://arindam.cs.illinois.edu/courses/s14cs598/paper/spt1.pdf), PDF pp.8–9 (printed pp.2190–2191), equations (26)–(35), and PDF p.18 (printed p.2200), Appendices J–K. Equation (27) indeed defines rho_ell as half the minimum pairwise increment variance, rather than a minimum eigenvalue. The revised interface is distinct. Appendix K supplies spectral-norm context; the local concentration and chi-square proofs were checked directly.

Read [Rigollet–Hütter v1](https://arxiv.org/pdf/2310.19244v1), §2.2 Proposition 2.1 and proof, PDF p.50 (printed p.43), and §§2.3–2.4, PDF pp.61–62 (printed pp.54–55), including the soft-threshold formula and Definition 2.12. The notes use their own orthonormal scaling; expanding the actual local objective gives the local n-lambda threshold. Their Lasso definition is twice the local objective with tau=lambda. The ESL Google download link returned an internal browser error; its cited pages were not independently inspected. ESL is contextual here: the local optimization derivations and exact published suppliers close all steps without importing its claims.

## Presentation, consumers and defects

All nine routed carriers have complete uninterrupted Statement/Example sections with hyperlinks in the immediately following references sections. None contains TikZ/tikzcd, and none requires a diagram to state its argument. There are no page obligations. Other batch carriers were opened only as prerequisite context or for hash comparison; no additional review coverage is claimed.

No item or page source was edited. Only nine risk_review fields were enriched in the batch contract. No Statement/Definition changed, so no changed-interface propagation or manifest/provenance change was needed. Existing cross-batch records, stable IDs and withdrawal proposals remain present. The frontier dependency ledger records the completed owned consumer checks. No confirmed defect, outside-scope repair, published defect, new withdrawal or blocker was identified; no defect-ledger or published-ledger row was created. There is no repair to assign repair_confidence to and no judge record was changed.

## Checks and disposition

- Pre/post snapshot item, contract and page projections are identical. All fourteen current raw item SHA-256 values equal the post-reader item_sha256 entries. Current contract deltas are the nine risk-review enrichments only; engine-owned hash stamping remains outstanding.
- Initial risk-report: exit 0, nine HIGH/CRITICAL items among fourteen routed entries.
- Final risk-report with --require-reviewed: exit 0, all nine required reviews complete, fourteen entries checked.
- Strict proof-contract check: exit 0, fourteen of fourteen checked, zero errors. Two heuristic shotgun-bracket warnings remain for comparison step 2.1 and lower-refutation step 4.2; these steps actually use their grouped facts for Gaussian realization, integration or rotation, while the uncited steps are elementary algebra or conclusions from prior steps. No missing inference was found.
- No reflow, precheck or proof-layout was run because no item was edited. No judgment, certification, dispatch or stage transition was initiated.

No touched/page/reader/refuter obligation is routed, so the decisions array is empty. All nine risk reviews are complete; there are no unresolved mathematical obligations in this dispatch. The engine owns subsequent current-hash checks and gates.
