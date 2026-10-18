# Batch 17 Step 3a adjudication

Run: numerical-analysis-remaining-71-2026-10-17. Group: batch-17. Scope: batch 17 only; batch 11 is read-only prerequisite context. No judging, stamping, scheduling or certification is performed.

Review proceeds in the generated dependency order. Native reader/refuter artifacts and immutable pre/post hash snapshots were read; current raw item hashes for the three touched carriers equal reader-post. The reader report describes the original edits; hash snapshots identify carriers but are not full historical source archives.

## Level 0: read-only Gaussian-law supplier

reader:17:3 and refuter:17:3 are escalated. Current def-standard-real-and-normalized-complex-gaussian-matrix-law has only Countable Choice and Lebesgue-definition/completeness suppliers; its batch-11 contract is null and its manifest likewise supplies no normalization or moment result. The Definition declares both formulas probability densities and asserts complex E|z|²=1 without proof or justified_by discharge. Current consumer lem-gaussian-squared-norm-tail step 1.1 explicitly needs both total masses to equal one. This is a genuine missing prerequisite, not a false Gaussian formula.

Attempted closure: read the complete published lem-normal-density-has-total-mass-one, thm-gaussian-integral and lem-plane-gaussian-integral-in-polar-coordinates. The first explicitly assumes full AC and proves only real normalization; the other two are improper Riemann integral results requiring a Lebesgue bridge and a second-moment argument to supply this Definition. No such closure exists in its declared suppliers. HMT §10.1 (PDF p.55, printed p.54) defines independent real normals and notes analogous complex results, without providing these local normalization/moment proofs. Required owner action: have batch 11 author and independently review a Countable-Choice-compatible real/normalized-complex normalization and moment discharge, with actual prerequisites and manifest/contract, then re-review the tail and Gaussian embedding. Batch 17 cannot repair the producer. These obligations remain open; no closed ledger row or completed risk review is claimed for this escalation. Exact routing fingerprints/path are retained in the decisions file.

## Level 0: leverage definition

amended_repair for touched:17:def-subspace-leverage-scores (reader item repair retained; manifest dependency synchronized). The added orthonormal-basis corollary supplies existence for every finite-dimensional real/complex subspace. Read its proof and the entire justified_by lemma lem-subspace-leverage-score-identities: Q'=QW, W*W=I, finite column norm sum d, and orthogonal projection give basis independence, [0,1], total d and zero-row equivalence. The Definition itself is unchanged; d≥1 excludes the empty basis, and no unrestricted choice is used. The added Remark is correct. Reconciled the batch manifest dependency to match this reader repair. Consumer quotations of the unchanged Definition need no repair.

## Level 0: Hermitian net

accepted_repair for touched:17:lem-hermitian-sphere-net-controls-operator-norm. Read every current proof step and all four suppliers. Complex normal spectral decomposition applies to H=H*; eigenvalues are real. For a real H, a nonzero real/imaginary part of a maximal complex eigenvector supplies a real eigenvector, so both real and complex norms equal max |lambda|. The finite net supplier gives 9^d or 9^(2d), and the two-term quadratic-form difference is at most 2||u-v||||H||≤||H||/2. H=0, d=1 and repeated eigenvalues cause no exception. The reader expansion is valid, concise proof clarification. Risk review complete before advancing to level 1.

Sources checked so far: local supplier Statements and proofs above; Woodruff https://arxiv.org/pdf/1411.4357 §2.1 Lemma 5 and §2.4 Definition 16; Rigollet–Hütter https://arxiv.org/pdf/2310.19244v1 Lemma 1.18; HMT https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf §10.1. Source-specific bounds and proof limitations will be recorded below.



## Level 1 reviews

lem-gaussian-squared-norm-tail: all four steps and six cited dependencies checked. Conditional mgf calculation, Markov thresholds, both logarithm inequalities and finite union are correct for m≥1, 0<t<1 and both fields. Its risk review stays open on the level-0 supplier escalation; no local patch can discharge the batch-11 well-definedness obligation.

thm-sketch-and-solve-exact-minimizer: complete risk review. Read the full procedure, its earlier algorithm Definition, and minimum-norm model theorem. Strict zero threshold retains every positive singular value, so C_0=C even in the rank-zero/empty-spectrum branch. The theorem preserves exact convergence and supplied exact record hypotheses and asserts uniqueness only of the minimum-norm minimizer, not uniqueness of all fits or convergence within arbitrary budgets. No defect.

thm-sketch-qr-right-preconditioner-conditioned-spectrum: complete risk review. Read all four steps, both local Definitions and exact published QR/SVD/norm supplier statements. Injectivity of SA follows from 1-epsilon>0 and full column rank; m≥d permits QR; R kernel is zero. SAPy=Qy gives (1-epsilon)||APy||²≤||y||²≤(1+epsilon)||APy||². The two reciprocal square-root extremal bounds and condition-number ratio follow. Zero y, d=1 and both fields are valid; deficient rank and epsilon=1 are excluded. No defect.

cex-embedding-the-column-space-alone-does-not-control-ls-residual: accepted_repair. Read all three steps and both cited definitions/procedures. For every real x the corrected norm equality is |x|, including x<0. A=e1, b=(1,1), S=(1,1) give unique sketch minimizer 2, physical optimum 1 at x=1, and physical squared residual 2 at x=2; 2>5/3 refutes epsilon=1/4. No defining clause changed.



## Level 2: Gaussian embedding

Read all three steps and all ten cited prerequisites, including the full current batch-11 invariance proof. Its orthogonal real-coordinate isometry argument is conditionally correct, including the complex case, but shares the unresolved density-normalization prerequisite. A fixed net of the d-dimensional coordinate sphere (real dimension d or 2d), basis completion for each fixed Qv, and right invariance give the stated independent coordinates. At t=epsilon/2 the tail and union give 2·9^(2d) exp(-m epsilon²/32). The displayed 192 constant yields exponent ≤2d log9-6d-6log(1/delta); log2+2d log9<6d and delta^6≤delta give the probability bound. The Hermitian transfer then gives the squared-norm inequality on U, including zero vectors. Fixed U precedes the draw; there is no simultaneous-all-subspaces claim. Risk review remains open solely on the explicitly escalated batch-11 prerequisite, pending owner supplier repair and re-review.



## Level 3: row sampling and leverage witness

thm-leverage-score-row-sampling-subspace-embedding: complete risk review. Read all five steps and seven suppliers, including the full published matrix-Bernstein argument. With R=d/beta≥1, Y=z z*/pi is defined on the positive probability support; missing rows are zero by zero leverage. E Y=I, Y²≤RY and E(Y-I)²≤(R-1)I≤RI give the uniform variance/norm hypotheses. The threshold sqrt(2mRa)+2Ra/3≤m epsilon follows from m epsilon²≥8Ra, 0<epsilon<1. The strict-tail Bernstein conclusion supplies nonstrict norm success. Quadratic forms give the embedding; conversely a Hermitian eigenvector gives max |lambda|≤epsilon from the embedding, so the stated equivalence is valid. For delta≤1/2, log(2d/delta)≤2log(d/delta); this caveat is correctly stated. Zero rows with positive probability merely waste samples; d=1 and beta=1 remain covered. The step-4.1 prose points to step 2.1 for the probability conclusion, but its tags include step 3.1 and the next displayed identity immediately supplies the conclusion; this is nonfatal polish and requires no rewrite.

ex-leverage-zero-rows-and-high-coherence: complete risk review. All three steps and four suppliers checked. Q=e1 in R³ yields leverage (1,0,0), maximal coherence 3; exact sampling is an isometry with probability one. Uniform beta=1/3 is admissible, but m=1 yields squared norm 3 or 0, neither in [1/2,3/2], hence failure probability one. This witness makes no claim at the asymptotic sufficient sample count.

## Page obligations

reader:17:1 and refuter:17:1: confirmed_nonfatal, fixed. The A-page omitted the robust-covariance page containing the direct Bernstein supplier. Added only that requires entry, matching the already approved manifest; page item order and mathematical summary are preserved. The supplier is published and is read-only.

reader:17:2 and refuter:17:2: confirmed_fatal, fixed (reader severity amended). The summary made objectively false first/final ordering claims against its explicit placement list. Rewrote the paragraph to follow counterexample, leverage witness, regression witness. Also avoided implying that the enlarged span is a necessary condition for every possible residual guarantee: the counterexample proves only that Ran(A) alone is insufficient. Read the complete regression example and residual theorem to check all descriptions: the orthonormal two-row sketch spans A and b, both minimizers are 1/3 and both squared residuals are 2/3. The residual theorem applies its two embedding sides to both residuals and the intervening sketch minimization with positive denominator. No item or defining clause changed.

## Carrier and history disposition

The leverage Definition item remains exactly reader-post, but synchronizing its missing manifest dependency changes the composite carrier: final touched verdict is amended_repair, preserving the reader's sound item repair. Net and counterexample remain accepted_repair, with only net risk metadata added. Each completed repair has repair_confidence 1. The two lanes share one closed defect row for each of the two page defects; the producer escalation has no closed-defect claim.

No Statement/Definition was changed by Alpha, so no changed-interface propagation is triggered. Batch-17 Gaussian consumer dependency records must remain open pending batch 11. No published defect was found; no published content or published ledger was edited. No withdrawal was proposed or removed.

## Source evidence and scope limits

- [Woodruff](https://arxiv.org/pdf/1411.4357), §2.1 Lemma 5/Theorem 6 (PDF pp.13–14), §2.4 Definition 16/Theorem 17 (pp.26–28), §2.5 Theorem 21 and its complete short proof (pp.31–32), §2.6 QR-preconditioning discussion (pp.34–35). These provide the source setting; the actual constants and both-field extensions are independently derived in the local proofs.
- [Rigollet–Hütter](https://arxiv.org/pdf/2310.19244v1), Lemma 1.18 and complete packing proof, PDF pp.35–36: ball-net counting method. A ball net is not automatically a sphere net; the local sphere supplier proves its own sphere-centered packing argument.
- [Mahoney](https://www.math.ucdavis.edu/~strohmer/courses/270/RandLA.pdf), §§4.2–4.3, PDF pp.21–23: sampling, solving and deterministic structural hypotheses. The page does not replace the local exact solve or conditioning proofs.
- [Lin](https://zhims.github.io/doc/note/computing/matrixComputations.pdf), §3.2 Theorem 3.2.1 and complete proof/Remark 3.2.1, printed pp.50–51, downloaded PDF pp.61–62: real SVD least-squares coordinates. Web extraction was unavailable; downloaded the same URL into /tmp and read those pages using PyMuPDF. The local supplier proves the claimed complex and zero-dimensional extensions.
- [Woodruff lecture 4.2](https://www.cs.cmu.edu/afs/cs/user/dwoodruf/www/teaching/15859-fall20/lecture4_2.pdf), Claims 2–3 and their complete proofs, pp.2–3: centered sampled row matrices and variance calculation.
- [Tropp](https://tropp.caltech.edu/books/Tro14-Introduction-Matrix-preprint.pdf), §§6.6.1–6.6.4, Theorem 6.6.1/Lemma 6.6.2, PDF pp.102–105: Hermitian Bernstein hypotheses and scalar majorant. The actual local supplier uses uniform individual second-moment bounds and an iterated Golden–Thompson argument, which was read in full.
- [HMT](https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf), §10.1, PDF p.55; [Martinsson–Tropp](https://arxiv.org/pdf/2002.01387), §11.4.2, PDF p.48: checked the real-law scope and absence of the needed local complex normalization argument. Neither is treated as a proved local supplier.

All routed carrier arguments and their direct cited dependency statements were read; supplier proofs were additionally read where needed, including net, spectral, Cauchy–Schwarz, leverage identities, SVD model, Gaussian invariance, linear change of variables, Markov, logarithm, union bound, and Bernstein. The residual theorem's existence supplier covers finite-dimensional least squares without rank restrictions. The Gaussian invariance supplier's measure-preserving corollary explicitly assumes CC and covers real orthogonal maps, as required after realifying the complex isometry. This is not a recursive audit of the published library or unrelated page content.

## Local checks and remaining owner action

- Strict proof contracts: 11/11 checked, 0 errors, 0 warnings, exit 0.
- Renderer: the two edited draft pages pass YAML and real KaTeX checks, exit 0.
- Precheck on the three reader-repaired items: 2 proof sections checked, 0 failures, exit 0; the definition has no proof section. Alpha made no item-source edits.
- Final batched proof-layout on all three reader-repaired item paths: 3 items, 6 steps, 0 defects, exit 0.
- Ordinary batch risk-report: 11 items routed, 0 errors, exit 0. Five required risk reviews are complete; Gaussian tail and Gaussian embedding are explicitly open. The required --require-reviewed invocation reports exactly these two unresolved reviews and exits 1; no complete disposition is fabricated.
- Decision coverage checked locally: exactly 9/9 routed obligations, no duplicates or extras, with 5 unique fixed ledger rows and 2 escalated obligations. Both page findings share one row per defect using same_defect_as. Producer routing identities, dependency path and immutable pre-reader fingerprints are copied unchanged. Engine owns current decision hash stamps.
- Ledger append succeeded. The five owned rows validate separately: 5 checked, 0 errors, exit 0. Run-wide ledger validation crashes at tools/defect-ledger.mjs:271 because outside-owned row NA71-3a-batch15-filter-certificate-FP has non-array evidence. That mechanical defect is routed here to the owner, left unchanged and given no mathematical defect row. The generated ledger view was not regenerated (--no-render); engine/owner should refresh it at integration.

Handoff remains blocked on the batch-11 CC-compatible normalization/moment discharge and the resulting two open Gaussian risk reviews. Owner should resolve producer mathematics first, then obtain current supplier/consumer review and rerun reviewed-risk and native checks. The independent ledger schema crash also needs its owning batch's metadata correction. No engine transition, judge cycle, stamp, commit, push or publication was initiated.
