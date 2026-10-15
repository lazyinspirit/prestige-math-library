# Step 3a adjudication — batch 6

Run: `statistical-models-experiments-62`; group: `batch-6`; assigned batch: `6`.

The authoritative scope has no touched carriers, page obligations, reader findings or refuter findings. The reader made no edits; the pre/post inventories and recorded carrier hashes agree. Exactly zero decisions are owed. Seven HIGH/CRITICAL risk reviews remain independently required; these are audit enrichment, with no defect IDs or mathematical repairs.

Read the generated order, scope, reader report/findings, `research/statistical-models-experiments-62-refute-6.json`, current batch manifest and relevant contract entries. Initial full-contract risk-report succeeded (10 subjects, seven HIGH/CRITICAL). Published suppliers remain read-only. Existing unrelated working-tree changes are outside this dispatch.

## Completed review checkpoints, in generated order

### Level 0 — lem-pca-sample-covariance-is-a-measurable-estimator

Reviewed Statement, F1–F7, steps 1.1 and 2.1, and all nine current direct suppliers (definitions of experiment, parametric model, estimand, statistic/estimator, iid, covariance and sample covariance; finite-second-moment covariance well-definedness; Borel-preimage theorem). Polynomial coordinate continuity and symmetry give continuity into the symmetric-matrix subspace; Borel preimages give measurability. The covariance target exists and has the same measurable target space as the statistic. The claim expressly excludes unbiasedness and consistency. Checked n=1, zero data, singular covariance and arbitrary parameter labels; n=0 is excluded and no choice is used. Disposition: reviewed_no_defect; complete risk_review recorded in the owning contract. No decision obligation or repair.

### Level 0 — thm-local-leading-eigenvector-stability-under-eigengap

Reviewed Statement, F1–F4 and steps 1.1–3.1 against the spectral theorem, current Courant–Fischer theorem, operator norm, Euclidean inner product and Cauchy–Schwarz suppliers. The k=2 min-max dimension is p−1; the gap estimate is g−2epsilon>0. Symmetry preserves v-perp, so the projected operator has all eigenvalues at least g−epsilon; projection contractivity and the perturbed eigen-equation give the claimed bound. Checked epsilon=0, either sign, p=2 and ties among lower eigenvalues. The strict endpoint and zero gap are excluded. Disposition: reviewed_no_defect; complete risk_review recorded. No decision obligation or repair.


### Level 0 — thm-sample-centered-covariance-root-n-frobenius

Reviewed Statement, F1–F8 and steps 1.1, 2.1, 2.2 and 3.1, with all ten direct suppliers. The centered fourth moment is finite; each entrywise average has variance Var(Y_jY_k)/n. Summing gives the Frobenius second-moment bound E||M_n−Sigma||_F² <= E||Y||⁴/n. The sample-mean outer product has Frobenius norm ||bar Y_n||² and expectation tr(Sigma)/n, so its sqrt(n) scaling tends to zero in probability. The explicit union bound closes boundedness in probability on varying probability spaces. Checked fixed p, p=1, n=1 and singular/zero covariance; no Gaussian or AC hypothesis is used. Disposition: reviewed_no_defect; complete risk_review recorded. No decision obligation or repair.


### Level 1 — def-covariance-and-correlation-principal-component-analysis

Reviewed the complete Definition and all nine suppliers, including the current scientific-model contract. The covariance estimand is finite, symmetric and positive semidefinite; the ordered distinct-eigenvalue kernels are canonical under ties. Both directions of the kernel/eigenspace equivalence hold. Direct expansion gives Cov(D^{-1}(X−mu))=D^{-1}Sigma D^{-1}; strict positivity makes D invertible. The sample convention uses divisor n and the reviewed polynomial measurability lemma. Checked p=1, n=1, zero and singular covariance, ties and zero coordinate variances (excluded only from correlation-PCA). No global eigenbasis selector, AC or scientific adequacy follows. Disposition: reviewed_no_defect; complete risk_review recorded. No decision obligation or repair.


### Level 2 — cor-pca-sample-leading-eigenspace-root-n-consistency

Reviewed Statement, F1–F6 and steps 1.1–3.1 against all eight current dependencies, with supplier risk reviews already complete. Rowwise Cauchy–Schwarz gives operator norm <= Frobenius norm; the displayed tail inclusion proves P(G_n)->1. On G_n the deterministic bound gives uniqueness and sine angle <= 2epsilon_n/g. Operator norm is continuous since its change is bounded by the Frobenius norm of the increment. Applying the perturbation theorem at each matrix with a simple top proves continuity of its sign-free leading line, hence continuity of its angle to a fixed line; the zero extension across the Borel complement is measurable. Domination proves the rate, and step 3.1 proves probability convergence without an unstated stochastic-calculus lemma. Checked n=1 (possibly empty G_n), zero perturbation, sign invariance, singular population covariance with positive gap, and sample ties outside G_n. Disposition: reviewed_no_defect; complete risk_review recorded. No decision obligation or repair.


### Level 2 — thm-pca-leading-direction-maximizes-variance

Reviewed Statement, F1–F5 and steps 1.1–3.1 with all six current suppliers, including the variance definition. Finite second moments make the centered products integrable by 2|Y_jY_k| <= Y_j²+Y_k², and linearity identifies scalar-score variance with a^T Sigma a. The eigenbasis expansion is a convex combination of eigenvalues; both directions of equality follow from the vanishing nonnegative deficit sum. This includes every unit vector in a tied top eigenspace. Positive coordinate variances give a fixed invertible standardization with finite second moments, so the same argument applies to correlation-PCA. Checked p=1, zero and singular Sigma and ties. Disposition: reviewed_no_defect; complete risk_review recorded. No decision obligation or repair.


### Level 4 — ex-pca-tied-eigenvalues-and-sign-ambiguity

Reviewed Example, F1–F4 and steps 1.1–2.1 with all four suppliers. Also read the complete current repeated-leading-eigenvalue theorem: its two independent top eigenvectors give dimension >=2, and the reviewed variance theorem identifies all top unit vectors as maximizers. For I_2 the full leading kernel is R² and every unit score has variance one. For diag(2,1) the leading kernel is span(e_1), with precisely the unit representatives ±e_1. Realizability causes no hidden obstruction: independent centered variance-one two-point coordinates give I_2, and scaling the first coordinate by sqrt(2) gives diag(2,1). The example distinguishes the canonical full leading eigenspace from its maximizing lines, and does not confuse sign with a tie. Disposition: reviewed_no_defect; complete risk_review recorded. No decision obligation or repair.

## Sources checked

Opened both cited primary lecture-note PDFs and read the relevant text: [Fernandez-Granda, Learning signal representations](https://cims.nyu.edu/~cfgranda/pages/OBDA_spring16/material/learning_representations.pdf), section 3.1 (Algorithm 3.1, PDF p. 9), section 3.2 (projection-energy interpretation), and section 3.3 (Lemma 3.3 and its complete variance derivation, Definition 3.4 empirical covariance with divisor n, PDF p. 12; higher-moment consistency discussion, PDF p. 13). [Mukherjee, Multivariate Analysis Lecture 8](https://soumendu041.gitlab.io/teaching/courses/mva2021/lectures/scribes/lec-8.pdf), sections 8.1–8.3, PDF pp. 2–4: covariance spectral convention, unit-score variance maximization, sample replacement and positive standardization/correlation interpretation. These contextual sources do not replace the locally proved root-n or perturbation arguments. No unfamiliar theorem was assumed from an unread source.

## Scope limits and blockers

No confirmed mathematical defect, published-supplier alert, missing prerequisite or escalation was found in the reviewed claims. No item or page was edited. All seven required risk dispositions are reviewed_no_defect, change_kind audit_enrichment, defect_ids []; there are no repairs requiring repair_confidence. The three untouched lower-risk items and page summaries have no routed obligations and were not independently re-reviewed, except the repeated-eigenvalue theorem as a needed supplier. No defect-ledger rows or published-ledger changes are warranted. No Statement/Definition changed, so no supplier-triggered consumer repair is owed. Existing withdrawal proposals and stable IDs remain unchanged.

## Final local checks and handoff

The immutable pre/post item and page hash maps are identical. All ten current item raw SHA-256 values match the post-reader inventory; no item bytes changed. All reviewed contract citation quotes match their actual current supplier sections after whitespace normalization. Contract changes add only the seven required risk_review mappings; citations, derivations and boundaries are unchanged.

Updated the existing owned item-edge evidence for def-covariance-and-correlation-principal-component-analysis -> def-scientific-statistical-model-contract in research/statistical-models-experiments-62-batch-6.cross-batch-dependencies.json; the frontier ledger's prescribed refresh completed successfully and deduplicated the merged records. Existing page prerequisite rows remain intact; no page-only adjudication was owed.

Both final commands exited 0 with 0 errors and 10 routed subjects:

- node tools/risk-report.mjs research/statistical-models-experiments-62-batch-6.proof-contracts.json
- node tools/risk-report.mjs research/statistical-models-experiments-62-batch-6.proof-contracts.json --require-reviewed

The decisions file has version 1, run statistical-models-experiments-62, group batch-6, and decisions: [], exactly matching the zero routed obligations. Proof-layout, item precheck and item reflow are inapplicable because no item was edited. No judge cycle, decision hash stamping, certification or gate battery was initiated. No blockers remain in this dispatch; engine collection, stamping and gates are the next action.
