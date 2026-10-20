# Batch 16 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`; group: `batch-16`.

Dependency-order checkpoint: completed level-1 review of `lem-gp-regression-observed-covariance-invertibility` and `thm-gp-regression-log-marginal-likelihood`; specific risk reviews are in the owning proof contract. Their exact claims and conventions are preserved: finite nonempty lists, PSD summands, positive-definite observed covariance for inverses/density; AC for Gaussian suppliers. All their direct supplier statements were read, and the independent-stack, density, nonnegative-characterisation, square-root and SVD proofs were inspected. Both iff directions and zero/singular summands are sound. No item edit.

The dependency-order reviews and routed dispositions are now complete. Exact local supplier paths are the item IDs listed in each carrier’s deps. External checks, final validation and residual owner work are recorded below.

## rem-gp-regression-computation-and-scope-caveats

Read complete Proof 1.1–4.1 and all direct supplier statements, plus the characteristic-function, GP existence, finite posterior, Cholesky-count and measure continuity proofs. Dense real scalar counts give n^3/3 and O(n^2) after factoring; GPML Algorithm 2.1 uses a different operation convention, so FNC Observation 2.9.3 and the local explicit count control the constant. Diagonal perturbation has relative norm epsilon and makes A singular. Negative evidence log-likelihood has negative second derivative for theta>0. Logistic third derivative is 3/32 at log 3; probit gives sqrt(2/pi)(4/pi-1) at zero; bounded positive likelihoods normalize, exclude degenerate laws and are not Gaussian. Equality kernel is PSD even with repeats; characteristic-function uniqueness gives finite independence. Countable coordinate agreement, continuity from above and the union over tails show infinitely many excursions with positive probability, contradicting continuity at zero. AC is explicit for the witness. Confirmed nonfatal locator defect: GPML RW4 p.81 §4.1.1, independently read and screenshot inspected; corrected reference range and source title only. All mathematical clauses remain unchanged.

## thm-gp-regression-kernel-ridge-posterior-mean-equivalence

Read all six proof steps and eight direct suppliers. Reproducing identities bound S and explicitly construct its adjoint; SS*=K. For sigma>0, K+sigma^2 I is positive definite even with repeated points or K=0. Finite-span projection handles V=0 and needs no infinite-dimensional projection theorem. B=K^(1/2) and the finite C normal equation prove existence without cancelling a possibly singular K; coefficient representations need not be unique. The objective difference is ||Sd||^2+sigma^2||d||^2, proving uniqueness of the function on H. m belongs to H as required for the written norm. At X*=X the posterior supplier matches exactly, including AC and independent noise. GPML §6.2.2 (6.19)–(6.20), p.135 confirms the scalar-noise correspondence; the local shifted-mean proof is complete.

## ex-gp-regression-noisy-finite-interpolation

Read complete Example and Verification 1.1–3.1 and all six suppliers. Equality kernel is PSD for arbitrary repeated finite lists. Distinct a,b give K=I2, A=2I2. Direct substitution gives mean (1,-1/2), latent covariance I2/2; new test noise independent of the pair (f,epsilon) adds I2 and gives 3I2/2. AC is stated for the canonical prior; n=p=2 excludes empty lists. No defect.

## ex-gp-regression-rank-one-prior-positive-noise-singular-prediction

Read complete Example and Verification 1.1–3.1 and all six suppliers. Feature Gram form is a square, including repeated indices. v=(1,2), K=vv^T and A=I2+vv^T are correctly formed; A is positive definite although K is singular. Inverse is [[5,-2],[-2,2]]/6, so A^-1 y=(5/6,-1/3), A^-1 v=v/6, mean v/6 and latent covariance K/6. The nonzero vector (2,-1) is a null vector while K/6 is nonzero. Positive observation noise therefore does not imply nonsingular latent prediction. AC and finite nonempty lists are explicit; no defect.

## Routed published findings

reader:16:1 — `def-axiom-of-choice`: **confirmed_nonfatal**. AC is explicitly a set-indexed choice assertion, including the empty-family case; its product formulation preserves the same quantifiers. The choice-function wikilink is inside the Definition and Definition references is absent. The corollary uses exactly AC to invoke the canonical Gaussian construction; no mathematical premise is missing. This is an editorial statement-first violation, not an ill-formed mathematical assertion. Published carrier remains read-only; closed bounded disposition is nonfatal-recorded, with owner maintenance still pending. Closed defect: `machine-learning-all-101-2026-10-19-3a-b16-published-format-1`.

reader:16:2 — `def-independent-random-elements`: **confirmed_nonfatal**. The preimage family sigma(X_i) is a sigma-algebra, and independence of those sigma-algebras is a sound definition, including arbitrary index sets via finite subfamilies. Both named wikilinks interrupt the Definition and Definition references is absent. The observation model uses precisely independence of the process and noise; no consumer repair is needed. This is an editorial statement-first violation, not an ill-formed mathematical assertion. Published carrier remains read-only; closed bounded disposition is nonfatal-recorded, with owner maintenance still pending. Closed defect: `machine-learning-all-101-2026-10-19-3a-b16-published-format-2`.

reader:16:3 — `def-gaussian-process`: **confirmed_nonfatal**. Normal finite scalar combinations and possibly singular finite evaluation vectors are equivalent by the exact multivariate-normal projection definition, with repeats and zero coefficients allowed. AC remains explicit. The three reported links interrupt the complete Definition; references section is absent. The observation model uses these finite-law clauses correctly. This is an editorial statement-first violation, not an ill-formed mathematical assertion. Published carrier remains read-only; closed bounded disposition is nonfatal-recorded, with owner maintenance still pending. Closed defect: `machine-learning-all-101-2026-10-19-3a-b16-published-format-3`.

reader:16:4 — `def-singular-values-of-an-endomorphism`: **confirmed_nonfatal**. For a linear map between finite-dimensional real or complex inner-product spaces, T*T is nonnegative and its unique nonnegative square root has well-defined eigenvalues with multiplicity, including zero values. Both reported supplier links occur within the Definition. The covariance lemma correctly specializes to the symmetric PSD endomorphism A; no change to its inference is needed. This is an editorial statement-first violation, not an ill-formed mathematical assertion. Published carrier remains read-only; closed bounded disposition is nonfatal-recorded, with owner maintenance still pending. Closed defect: `machine-learning-all-101-2026-10-19-3a-b16-published-format-4`.

reader:16:5 — `thm-finite-gaussian-process-posterior-and-predictive-laws`: **confirmed_nonfatal**. Read the full present Statement and Proof 1.1–5.1: the independent Gaussian stack and linear observation map give the required block covariance; positive-definite observed C permits conditional-normal application, including singular test blocks and repeated lists. Noise independent of the pair adds R*, and the kernel is an all-y version only almost-surely unique. Cholesky substitution is valid. The canonical-prior existence link interrupts the Statement, with Statement references absent. The batch posterior corollary matches every hypothesis. This is an editorial statement-first violation, not an ill-formed mathematical assertion. Published carrier remains read-only; closed bounded disposition is nonfatal-recorded, with owner maintenance still pending. Closed defect: `machine-learning-all-101-2026-10-19-3a-b16-published-format-5`.

refuter:16:1 — **confirmed_nonfatal**, completed locator repair with `repair_confidence: 1`. Independently read GPML RW4 §4.1.1 printed p.81 (PDF page index 2, text lines 143–160) and inspected the page screenshot. The continuity caveat lies outside the original pp.79–80 range. Corrected Remark references to §§4.1–4.1.1 pp.79–81 and synchronized its source title in item and page manifest. All mathematical text and Proof 1.1–4.1 are unchanged and independently sound; six specific high/critical risk reviews are complete. Locator defect is nonfatal because the local no-continuous-modification proof supplies its own witness.

## Carrier comparison and source evidence

The immutable pre/post reader snapshots agree on all nine item carriers and page carriers; scope has no touched/page obligations and the reader made no edits. Current raw bytes match the post snapshot for eight items. For the caveats remark, reversing exactly the source-title and reference-label correction reconstructs the post snapshot raw SHA256 `21d5131b72b9890df13556bb6a9c8de5823b58df8c6cda79b529197bcd5744bc`; current raw SHA256 is `9aa47e482e407fa631636401f3d67bf7dd2f19e46cfb66d56eca2267e0e3c8a0`. No mathematical clause, dependency, proof step, status or provenance classification changed. The page manifest source title was synchronized; proof-contract changes consist solely of the six specific risk reviews. There was no material rewrite or judge record to invalidate.

For the five published findings, every current guard hash equals its routed `pre_sha256`. Current raw hashes are distinct from the routed observed fingerprints; no raw-byte identity is claimed. Each present carrier independently retains the reported inline links and lacks the required references section. The decisions concern that present defect; no missing historical preimage is used to infer a repair or false positive.

External sources independently opened/read where used:

- [GPML Chapter 4](https://gaussianprocess.org/gpml/chapters/RW4.pdf): pp.79–81; PSD Gram discussion p.80, continuity distinction §4.1.1 p.81 (PDF index 2; screenshot inspected). These are separate from the locally proved equality-kernel witness.
- [GPML Chapter 2](https://gaussianprocess.org/gpml/chapters/RW2.pdf): Eq.(2.30), p.19, and Algorithm 2.1; the standard zero-mean scalar-noise formula agrees with the local extension. Its arithmetic convention differs from the explicit real-operation count here.
- [GPML Chapter 3](https://gaussianprocess.org/gpml/chapters/RW3.pdf): p.43, Eqs.(3.15)–(3.16), the logistic/probit likelihood and derivative table; both third-derivative witnesses were independently differentiated above.
- [GPML Chapter 6](https://gaussianprocess.org/gpml/chapters/RW6.pdf): §6.2.2, p.135, Eqs.(6.19)–(6.20); the stated regularized solution matches the posterior mean. The local proof handles singular K without cancelling it.
- [FNC matrix structure](https://fncbook.com/structure/): §2.9.3, Observation 2.9.3, supports the n³/3 real-flop leading count. [FNC efficiency](https://fncbook.com/efficiency/) was opened; the local triangular-solve supplier and explicit sums supply the required proof.

Bishop, ESL and Treil external full texts were not independently checked in this dispatch; no claim is made about having verified their complete citation locators. The exact local dependency statements and relevant proofs provide the mathematics reviewed here. This is not a transitive audit of the published foundation library.

## Presentation and checks

Both scoped A/B pages are YAML-only, retain compact-v1 and their inventories, and were unchanged. The model diagram in the observation definition was inspected: shared prior arrows to training/test evaluations and separate noise arrows into the sums match the text; no posterior-independence assertion or missing required diagram was found. All complete assigned statements/definitions/remarks/examples are hyperlink-free and followed by their reference sections. Existing numbered proofs have separated single-paragraph steps and terminal tags.

Executed local checks:

- `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-16.proof-contracts.json` — 0 errors, eight proof-bearing items routed, six HIGH/CRITICAL.
- Same command with `--require-reviewed` after the six completed reviews — 0 errors.
- `node tools/tsx-run.mjs tools/precheck.mts items/rem-gp-regression-computation-and-scope-caveats.md` — 1 checked, 0 failing.
- `node tools/rendercheck.mjs items/rem-gp-regression-computation-and-scope-caveats.md --quiet` — 1 file, no errors.
- Final item-layout command, after the last item edit: `node tools/proof-layout.mjs items/rem-gp-regression-computation-and-scope-caveats.md` — 1 item, 9 steps, 0 defects. No item edits followed.
- Defect-ledger append accepted all six closed rows and regenerated its Markdown view. Six decisions exactly match the six routed obligations, each references exactly one closed defect row. No touched/page decision was invented.

The published ledger was reread and merged while holding this worker’s exclusive `research/.published-consumer-ledger.lock`, then only that lock was released. Its deduplicated index now records the five pending A-P editorial findings and preserves prior bounded history. Frontier dependency records name the owned consumers and retain their sound supplier uses.

## Residual owner work

No substantial mathematical prerequisite is missing and no escalation is being cleared. Five published editorial repairs remain pending owner maintenance, explicitly recorded as nonfatal-recorded rather than fixed. Local adjudication is complete; no publication, judgment, stamping, dispatch, or engine gate battery was initiated.
