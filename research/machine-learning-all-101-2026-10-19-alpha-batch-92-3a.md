# Batch 92 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`; group: `batch-92`; scope: batch 92 only.

## Routed supplier findings (level 0)

`reader:92:1` and `refuter:92:1` concern the same current batch-15 definition, `def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces`. Both are **escalated**. The Definition unconditionally prescribes a norm completion and claims justification by `thm-canonical-rkhs-construction-and-reproducing-property`; that theorem's Statement explicitly assumes Countable Choice and its Proof 4.1 invokes the conditional completion/inner-product-extension suppliers. Its Proof 6.1 also invokes countable choice for approximants. The finite semidefinite form, null-radical quotient, reproducing pairing and injectivity argument are sound under the theorem's stated assumption, including empty X and the zero kernel. They do not remove the completion prerequisite.

Independently opened the current producer Definition, full construction proof, and their owning batch-15 contract and manifest. The definition contract's nonempty-choice row says the separate theorem states the assumption; this does not qualify the unconditional defining construction. The manifest also lacks a choice dependency for the definition. Attempted local closure: distinguish the purely conditional definition of an already supplied RKHS from the additional canonical existence assertion. The former is sound, but it does not justify the latter. No choice-free general construction has been supplied or established here. Required owner action: route a supplier-first repair to batch 15 to qualify only the canonical construction with Countable Choice, synchronize its contract/manifest and check actual consumers, or supply and prove an adequate choice-free construction. Producer files remain read-only. No closed ledger row or repair confidence is invented for an unresolved prerequisite; these findings remain open.

The owned minimizer theorem assumes an RKHS as input. Its Proof 1.1–3.1 uses only finite Gram positivity, the reproducing identity, invertibility and cancellation of cross terms with tau=n lambda. Thus the supplier defect does not refute that conditional theorem or require adding choice to it. The original consumer and producer bindings are preserved verbatim in the decisions file.

## Level 2 risk review

`thm-kernel-ridge-gram-perturbation-bound`: independently checked Proof 1.1–4.1 and all five exact cited supplier interfaces. The resolvent sign/order is A^-1 (Ktilde-K) B^-1, yielding delta ||y||/tau^2; u=y-tau a yields delta ||y||/tau. Both shifted matrices are positive definite even when singular before shifting. Nyström PSD and residual suppliers have the exact real specialization and full-row-rank premise used here. At r=0 the leading block is empty and delta=lambda_1; at r=n the tail is empty and full-row-rank S gives exact capture. s=0, zero K, zero y and delta=0 are allowed; tau=0 and n=0 are excluded. No probability, out-of-sample, converse or choice-dependent RKHS-existence claim is made. Current argument is sound; no item edit.

Checkpoint: supplier findings escalated; level-2 risk complete. Next: level-3 algorithm and examples, then level-4 remark.

## Level 3 algorithm risk review

`alg-nystrom-kernel-ridge-fit`: the exact-arithmetic procedure specifies all inputs, the singular/empty-sketch pseudoinverse and all status exits. B is SPD by the Nyström PSD and shifted-inverse suppliers. Hence p^T B p cannot be negative; zero returns, while the positive branch divides safely. Step 3 prevents a zero old residual entering the beta division. The recurrence residual equals the actual residual in exact arithmetic; all exits return both actual residuals. T=0, y=0, eta=0, zero/singular K and s=0 are covered. Certification requires both residual tests; zero Nyström residual alone can return uncertified. The original-system theorem bounds Kb, while this procedure explicitly returns Ktilde b; the text does not identify the two. No unproved convergence or finite-precision guarantee is claimed. No edit.

Checkpoint: algorithm risk complete. Next: the two routed level-3 examples, followed by the level-4 remark.

## Level 3 exact-range example risk review

`ex-kernel-ridge-nystrom-exact-range`: read Example, Facts F1–F4 and both Verification steps. S=I2 captures the full range; equivalently K K^-1 K=K. The two shifted diagonal inverse entries and fitted-vector entries are exactly those displayed. The denominators remain positive for tau>0, p and q may independently be zero, and delta=0 is an allowed perturbation bound. All four cited dependencies have been checked at the actual use. No edit.

Checkpoint: exact-range example risk complete. Next: training/test distinction example, then statistical/numerical remark.

## Level 3 training/test example risk review

`ex-training-gram-does-not-control-test-prediction`: read the complete Example and Verification 1.1–3.1 with all four suppliers. For each fixed kernel, arbitrary finite Gram quadratic forms equal squared feature-sum norms. Feature determinants are 1 and sqrt(3)/2, so the supplied function spaces are isometric to R2 and are actual RKHSs without any canonical completion invocation. Both one-point training matrices equal [1], while cross entries 0 and 1/2 give the stated distinct predictions for every tau>0. In the second computation, S^T S=101/100 gives the displayed rank-one projector; training coefficient 101/201, fitted error 1/402, test error 10/201 and training Gram error 1/101 all check. The full two-point approximation and its one-point training submatrix are kept distinct. n=1 makes lambda=tau valid. No edit; the supplier construction escalation does not invalidate this explicit finite construction.

Checkpoint: all routed level-3 risk reviews complete. Next: level-4 remark and final checks.

## Level 4 remark risk review

`rem-statistical-and-numerical-kernel-errors`: read complete Scope and all twelve direct supplier interfaces, including the full current GP/KRR proof and Gaussian expectation wrapper. GP substitution uses an already supplied real RKHS, m=0 in H, sigma=sqrt(tau)>0, independent noise covariance tau I, and explicit AC. The observed covariance is SPD, including singular K and repeated training points; the posterior-law version gives the displayed identity almost surely. Real and normalized-complex Gaussian range-finder interfaces use fixed A, k,p>=2, ell=k+p<=min(m,n), exact arithmetic, and Countable Choice. Only expectation guarantees are imported; arbitrary sketches, per-draw tails, statistical risk and floating-point reliability require separate results. These distinctions and the need for a test cross-kernel certificate are correct. No edit.

Diagram review: no diagram occurs in the five routed risk carriers. The cited observation-model diagram has arrows from the common process to latent train/test evaluations and from each latent/noise pair to the corresponding summed observation. Its prose correctly permits train/test dependence and states the noise independence separately. No diagram repair or addition is necessary.

Checkpoint: all five HIGH/CRITICAL risk reviews complete in the owning contract. Both routed supplier findings remain escalated; no unresolved mathematical question is hidden by the complete local conditional risk reviews. Next: preserve dependency alerts, compare fingerprints and run focused local checks.

## Source evidence and scope limits

The review used the current local source statements and proofs, not inherited verdicts: the batch-15 kernel Definition and canonical-construction theorem; batch-92 system Definition, inverse lemma, minimizer, perturbation and residual theorems; the Nyström Definition, pseudoinverse Definition/existence theorem, PSD-order/exactness theorem and deterministic spectral residual theorem; and the GP observation-model Definition, GP/KRR theorem, posterior-law corollary and invertibility lemma. For the remark, read the AC and Countable Choice Definitions, standard-real/normalized-complex Gaussian matrix-law Definition, expectation wrapper and real/complex expectation interfaces. Those source IDs are exact filenames in `items/`; locators for the substantive uses are recorded above and in each `risk_review`. No external paper or source was fetched in this review; source URLs in current carriers remain attribution, not a claimed new external audit. No unfamiliar unresolved mathematical inference is being accepted.

The two pages were inspected for metadata-only presentation and retain empty bodies and `page_layout: compact-v1`. There are no page obligations. The two lower-risk examples not routed here were not independently re-audited; their source hashes remain unchanged. Published AC/Countable Choice inline-link presentation defects were already recorded; the locked published ledger and its deduplicated classification index now also record this batch's actual remark use, preserving the original defect IDs and owner maintenance strategy. No published carrier was edited and no duplicate defect was created.

## Current evidence and local checks

- Initial `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-92.proof-contracts.json`: exit 0, 11 routed items, exactly five HIGH/CRITICAL reviews required.
- Final same command with `--require-reviewed`: exit 0, zero errors, all five required reviews complete.
- `node tools/frontier-dependency-ledger.mjs refresh --run machine-learning-all-101-2026-10-19`: exit 0, refreshed and deduplicated the derived ledger after updating the owning batch input.
- Local Python fingerprint/JSON assertions: pass. All eleven owned item raw hashes and both page file hashes equal their pre-reader and post-reader snapshots. Pre/post carrier maps are equal, so there is no reader item/page repair to accept or revert. The current supplier raw hash is exactly `619dc6bc2be1ef30b7d44c16aefddbbf4b2ab59275483961120d449a97515274`; the immutable producer-pre snapshot file matches its recorded SHA-256. Both decisions preserve producer batch 15, the exact original consumer, dependency path, observed source, producer carrier at split and producer pre-snapshot binding.
- No item or page was changed. Reflow, item precheck and proof-layout are consequently not applicable to changed items; no empty-selection check is claimed. Only five risk-review fields were added to the owning contract; mathematical contracts, provenance, manifests and judge metadata were not rewritten. Decision JSON has exactly the two owed finding entries, both escalated, and no invented risk-only obligations.

Active-run evidence: the native status command reports this run in Step 3a; latest Git log entries concern native foreign-refuter adjudication routing. No retired handoff was used as active status evidence. Other engine blockers and unrelated dirty worktree changes are outside this dispatch and were not modified.

## Handoff and blocker

Review/reporting work is complete. Both `reader:92:1` and `refuter:92:1` remain **escalated**, preserving the single unresolved batch-15 prerequisite defect. Required owner action is the supplier-first qualification or a fully proved alternative construction, with metadata and actual consumer review. No completed repair, closed fatal defect, repair confidence, acceptance, judgment, stamp or gate battery is claimed. The five local risk reviews concern valid conditional/matrix arguments and do not clear this escalation. Stable IDs, existing withdrawal proposals and independent reader/refuter evidence are retained.
