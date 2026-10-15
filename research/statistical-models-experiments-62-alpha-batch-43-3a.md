# Batch 43 Step 3a adjudication

Run: `statistical-models-experiments-62`; group: `batch-43`.

Scope owes only `touched:43:ex-nongaussian-conditional-mean-not-best-affine-predictor`. Reader findings and refuter flagged arrays are empty; no page obligations. The scope assignment group `o` is preserved.

## Dependency-ordered review

### Level 0: Gaussian block lemma

Read Proof 1.1–3.1 and all seven cited suppliers. The covariance is block diagonal, and its positive square root is block diagonal by uniqueness. The independent-normal realization gives block product law on arbitrary Borel rectangles; measurable affine block maps and characteristic-function uniqueness transfer independence. Null eigenvalues and entirely deterministic blocks require no inverse. Dimensions p,q≥1 exclude empty blocks. AC is explicitly inherited from Gaussian realization and law uniqueness, not silently dropped. Reader/refuter report no remaining finding; no mathematical defect found.

Sources: Norris, Probability and Measure, §8.2 Theorem 8.2.1, printed pp. 37–38, https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf. Current local supplier proofs, not previous review verdicts, establish the inference.

### Level 1: forecast definition

The Definition uses square-integrable variables by the current stationarity definition, takes almost-sure classes in the published L2 quotient, and explicitly minimizes over all finite real affine combinations. This is independent of the representative. The finite-dimensional projection supplier proves existence without completeness or covariance invertibility; the named justified_by theorem merely specializes it. A zero or constant process is allowed and has a unique class. n,h≥1 exclude the empty-history convention. No choice axiom is spent. No mathematical defect found.

### Level 2: existence and uniqueness

Read Proof 1.1–2.1 against current stationarity, forecast Definition and published affine-projection theorem including its Proof 1.1–7.1. All target/regressor variables are L2. The finite span inside span(target,1,history) is finite-dimensional, so no infinite-dimensional completeness hypothesis is needed. Squared-error and norm minimizers coincide. Unique means almost-sure class; constants, zero covariance and singular coefficient systems are covered, with n=h=1 admitted. No extra AC assumption is used. Reader/refuter found no remaining defect; independent review agrees.

### Level 2: causal AR(1) example

Verification 1.1–3.1 correctly iterates the assumed causal L2 series; all future innovation indices exceed n. Pairwise uncorrelatedness suffices for orthogonality against finite past sums, and the cited Cauchy–Schwarz inequality passes it to each L2 limit. Expanding error against every affine competitor proves minimality and unique class without Gaussianity or independence. The finite residual variance is sigma² times the geometric sum. phi=0 and n=h=1 work directly; |phi|=1 and sigma²=0 are outside the stated domain. No AC or arbitrary representative selection is used. All five dependency interfaces were read; no remaining reader/refuter finding or defect.

### Level 3: forecast equations

Proof 1.1–4.1 uses exactly the current L2 affine normal equations. Checked reversed-history indexing: Cov(Y_i,Y_j)=gamma(j−i)=gamma(i−j) by real covariance symmetry; target lag is h+i−1. All means equal mu, so the stated intercept centers the error. Expansion gives gamma(0)−2a^T gamma_h+a^T Gamma a, reducing to the claimed variance. Only nonsingular history is inverted; singular history is covered by the earlier existence theorem but not claimed here. n=h=1 and zero target/history cross-covariance are valid; zero history covariance is excluded by nonsingularity. All seven dependencies were read. No new choice use, no remaining finding and no defect.

### Level 3: Gaussian conditional expectation

Read Proof 1.1–3.1 with every cited current dependency and conditional-expectation supplier proofs. The minimizing affine representative has centered residual orthogonal to all history coordinates even for singular covariance. Every scalar projection of (R,Y) is an affine scalar projection of the original jointly Gaussian vector, so the current block lemma applies. Independence from the vector gives independence from sigma(Y); the measurable forecast and integrable zero-mean residual then satisfy the conditional event identities by linearity and uniqueness. No covariance inversion or density is assumed. Deterministic residual/history and n=h=1 are included. AC is retained explicitly for the Gaussian and conditional-class supplier branches. No remaining reader/refuter finding; no defect.

### Level 3: singular-history example

Read Verification 1.1–3.1 and all eight current dependency interfaces. The uniform two-point variable has mean zero and second moment one, and the repeated-coordinate process has shift-invariant joint laws and constant covariance. The all-ones 2×2 history matrix has rank one; target covariance is (1,1), so every normal-equation solution has a1+a2=1 and intercept zero. Every such solution, not only the displayed pair, gives Z pointwise and zero error. The unique-class conclusion follows from the reviewed affine theorem. The fixed positive-weight finite model requires no choice or limiting operation; no empty or zero-variance extension is claimed. No defect or remaining finding.

### Level 4: Durbin–Levinson correctness

Read Proof 1.1–4.1 and algorithm Definition with all five current suppliers. Base order uses gamma(0)>0. At order k≤m the Schur quadratic form of Gamma_k at (1,−Gamma_(k−1)^−1 r) proves nu_(k−1)>0, exactly the denominator needed; Gamma_(m+1) positive definite is not required, and final nu_m may be zero. Reindexed reversed coefficients solve rows i<k and the final row; the scalar-product update gives nu_k=nu_(k−1)(1−kappa_k²). Stationarity transfers the one-step forecast theorem to any integer t. Checked m=1, white-noise zero reflection coefficients and a deterministic terminal error. No inverse beyond positive-definite blocks, no AC use and no claim of strictly positive final error. The finite loop and input/output instructions are explicit. Reader/refuter findings are empty; no defect.

Wang §5.5.1, Proposition 5.3, printed pp. 73–75, gives the same recurrences under decay assumptions sufficient for positive definiteness. The local proof establishes the more precise finite positive-definite-block hypothesis directly; no decay assumption is borrowed without proof.

### Level 4: nonaffine conditional-mean example

Read Verification 1.1–3.1 with all ten current dependencies. Uniform phase permutation proves every shifted finite-dimensional law equal; bounded coordinates then give weak stationarity. Enumerating the three pairs gives means zero, Var(X1)=2/3 and Cov(X2,X1)=−1/3, so the reviewed forecast theorem gives −X1/2. All singleton fibres are Borel preimages of X1, making sigma(X1) the full event algebra; X2 directly satisfies the conditional-expectation version definition. Thus the known-variable clause uses no conditional-expectation existence choice here. With all weights 1/3, almost-sure equality is pointwise: the middle and first outcomes force a=b=1, contradicting the third outcome. This proves absence of every affine representation, beyond mere inequality with the optimum. Fixed n=h=1, X1=0 and both endpoints are checked; there is no iff or empty-domain claim. Reader repair accepted without amendment; no remaining defect.

Verdict: `accepted_repair`, repair confidence 1. The reader describes the earlier step as proving only inequality with the best affine forecast; the added three-outcome contradiction directly proves the stronger nonaffinity conclusion. The current raw SHA-256 `daae650df8a4158afb77340b1fa9411bc0a5cef12d7c497f0bbaeb6b4b1f562a` equals the post-reader item hash and differs from pre-reader `d0c90382bc3878a677a16351cba88e02c3d3e4a5e058508f1f110da2f259b8d1`. No claim of a recovered full pre-reader text is made; the durable reader report documents the edit, and the current argument is independently sound. Statement, Definition, dependencies, provenance and manifest claim are unchanged. No judge stamp exists in this carrier; no Alpha item edit is needed.

## Dependency maintenance, sources and published scope

The 51 batch-owned cross-batch dependency rows retain their stable consumer/supplier IDs and existing `verified` statuses. Current direct item supplier interfaces were inspected for their actual uses, including the two batch-40 stationarity/ACVF definitions. The four page-requirement rows are retained as existing navigation metadata, with no new page-only obligation or page audit claimed. No supplier Statement or Definition changed, no downstream repair is necessary, and no withdrawal is proposed or removed. No defective published supplier was found; published content remained read-only and no published-ledger edit was needed.

Source passages actually consulted in this adjudication:

- [Norris, Probability and Measure](https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf), §8.1–8.2, Proposition 8.1.1 and Theorem 8.2.1 with its complete proof, printed pp. 37–38 (PDF pages 37–38): degenerate normals are admitted; affine images remain Gaussian; zero cross-covariance gives independent blocks. The source proof does not require nonsingular covariance for independence.
- [Wang, STAT 720 notes](https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf), §5.1–5.2, printed pp. 63–66 (PDF pages 66–69), equations (5.2)–(5.3) and error formula: finite affine prediction with reversed history. §5.5.1, Proposition 5.3 and its complete proof, printed pp. 73–75 (PDF pages 76–78): the coefficient and variance updates. The local arguments independently justify singular-class uniqueness and the finite positive-definiteness hypothesis; source claims are not treated as certification.

The remaining bibliography is retained as provenance, not claimed as newly read. This is a focused review of the current claims, all their direct cited dependencies and relevant supplier proofs; it is not a recursive audit of unrelated prerequisite branches.

## Checks and handoff

- Initial batch risk report: 0 errors; nine HIGH/CRITICAL reviews required, plus one MODERATE algorithm. Nine complete, item-specific risk reviews were written in the prescribed order. The algorithm was read as the correctness theorem's supplier.
- Final `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-43.proof-contracts.json --require-reviewed`: 0 errors, 10 items routed.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-43.proof-contracts.json --strict`: 0 errors, 0 warnings, 10/10 checked.
- `node tools/finite-smoke.mjs research/statistical-models-experiments-62-batch-43.proof-contracts.json`: 0 errors; the one registered two-atom covariance check passed. This checks that finite model only.
- Focused precheck of the accepted three-state example: 1 checked, 0 failing.
- Final proof-layout on that item: 1 item, 3 steps, 0 defects. No item file was edited by this adjudicator; the reader's formatting was preserved.
- Focused rendercheck of that item: 1 file, 0 errors, 0 warnings.
- All ten current item raw hashes match the post-reader snapshot. Only the three-state item differs between pre/post item snapshots. Contract changes in this adjudication add risk-review evidence only; no source claim, manifest or provenance changes were made.
- Closed defect `sme62-b43-3a-nonaffinity-proof-gap` was appended through the serialized defect-ledger tool, which refreshed its generated view. One touched decision references it. No reader/refuter/page decisions are owed. The first append attempt rejected the unsupported location value `proof`; corrected to `proof-step`, then appended successfully. No defect row was created for that mechanical rejection.
- A rendercheck help probe was stopped after inspection showed that a flag-only invocation selects the full corpus; it produced no passing result and is not counted as validation. The explicit one-file check above is the validation result.

No unresolved mathematical blocker or escalation. No judge cycle, stamps, baseline, transition or gate battery was initiated. The engine owns hash stamping and the gate battery after this dispatch. Next action: engine collection of the report and single decision.
