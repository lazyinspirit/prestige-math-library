# Batch 59 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`. Group: `batch-59`.

Scope and order: generated order task and scope 59; one touched obligation, no reader/refuter/gate/page findings. Reader and refuter reports were read independently of the mathematical verdicts. The native status and recent Git history confirm this is current Step 3 work; unrelated collection blockers 36 and 57 are outside this assignment.

## Completed reviews in dependency order

### Level 0: def-energy-based-density-and-partition-function

Reviewed the entire Definition and its five direct supplier definitions, plus the normalization lemma prerequisite interface. Real measurable energy gives a nonnegative measurable exponential density; admissibility explicitly excludes zero and infinite partition functions. Empty and zero-measure spaces therefore have no admissible parameters; an empty parameter set is harmless, and Z=1 needs no special case. No sigma-finiteness or choice is required. The stated justified_by lemma establishes countable additivity and unit mass. Hyvarinen Sections 1–2, equations (1)–(2), support the normalization convention; no statistical consistency claim is imported. Uninterrupted Definition and references comply; no diagram is needed. No defect or repair.

Next: level-1 algorithm, normalization lemma, then score-matching theorem; higher CD consumers remain pending.

### Level 1: alg-contrastive-divergence-k

Read the full procedure and every direct supplier interface; read the kernel-composition proof, whose monotone-convergence construction gives a probability kernel pointwise without a product-measure Fubini shortcut. The singleton-source recursion gives Q_j for every finite j without representative choices. Inputs include an actual transition sampler, independent data, conditional chain independence, m,k positive and eta positive; the finite loops and explicit parameter update specify the output. No mixing, optimizer convergence, or next-iterate admissibility is asserted. Specified relative densities and absolute entropy integrability avoid hidden Radon–Nikodym/existence or infinity-minus-infinity assumptions; 0 log 0 is declared. Population gradients are asserted only under both integrability hypotheses. Hinton Section 2, PDF pp.4–6, and Murphy 24.2.2, printed pp.852–855, agree with the stop-gradient convention; the local procedure does not inherit Murphy equation 24.19 prose as an exact gradient claim. No AC, diagram, or editorial defect.

### Level 1: lem-energy-based-density-is-a-probability-measure

Read both proof steps and all nine direct supplier statements. Infinite exponential-series radius and continuity make t maps to exp(-t) Borel; composition with the measurable energy supplies a positive measurable density. The density-measure definition and its proved well-definedness supplier give countable additivity; multiplication by the positive finite constant Z inverse commutes with the nonnegative partial-sum limit. Total mass is exactly one. The argument neither assumes sigma-finiteness nor requires choices; empty X, zero measure, Z=0 and Z=infinity are excluded by admissibility, and Z=1 is valid. Definition and Statement references remain uninterrupted. No defect or repair.

Next: score-matching touched obligation and risk review; CD derivative theorem and example pending.

### Level 1: thm-score-matching-integration-by-parts-identity

Verdict: `amended_repair`; repair confidence 1.

Read every current step and all 27 direct supplier statements, and compared complete hash-bound pre-reader and reader-post archives. The current item exactly equals reader-post raw SHA256 9d62afde61a7659100e735c1b4974ccc5f012183ef48e0e125581fe6492edcdd; recovered preimage exactly matches pre raw SHA256 58a593c3ec2907528aeaecfcafd103ffd11c42a57580187a4418b7c5445b140d. Statement and original claim strength are unchanged. The old proof already described mollification but left its supporting results undeclared; reader supplies and verifies those interfaces. Step 1.1 normalizes a nonnegative bump with explicit positive finite box bounds and derives its gradient bound. Step 2.1 applies convolution smoothing to a locally integrable compact C1 test, differentiates it under an explicit integrable majorant, and uses common compact support with local integrability to pass smooth weak identities by dominated convergence. Only the finite diagonal sum is taken before the global limit, so no unstated weighted integrability of individual diagonal derivatives is required. Step 2.2 proves gradient p=p times score even at density zeros by Fermat, bounds the cross term by the two finite squared moments, and bounds the boundary term by C(1+E||psi||^2)/(2R). Steps 3.1–4.1 use the integrable divergence and cross term to remove cutoffs and obtain the sign-correct identity. Lebesgue-null changes are P_p-null; AC_omega covers the actual Lebesgue, Borel, representative, substitution and smoothing interfaces, with no full AC. d=1, density zeros, empty admissible parameter set, and R to infinity are covered. Hyvarinen Theorem 1/Appendix A imposes a pointwise boundary condition; this local cutoff proof independently proves the stated stronger boundary formulation. No diagram is required. Accepted reader repair verbatim; synchronized only the stale manifest dependency mirror.

The historical support/citation omission is nonfatal: the preimage contains the C1 mollification argument, rather than lacking any route from smooth tests. The reader made its prerequisites explicit and proved the required approximation with checked hypotheses. One closed ledger row records this repair; no item text changed during adjudication and no interface propagation is triggered. Next: level-2 CD derivative theorem, then level-3 witness.

### Level 2: thm-contrastive-divergence-k-gradient-omits-chain-derivative

Independently read all seven steps and all twelve direct supplier interfaces, including conditional expectation as an event-integral criterion. On a small coordinate interval in the open parameter set, finite nonempty states and real energies give positive finite Z and positive model masses. Differentiating the finite partition sum yields the stated negative-log-likelihood sign. Induction differentiating each finite matrix product yields the k-term derivative and sum of reconstruction derivatives zero. Strictly positive stochastic K and k>=1 make every reconstruction mass positive even when q0 has zeros, so the logarithm/quotient rules apply; fixed zero data masses contribute zero with no derivative of log zero. Subtracting the two KL derivatives cancels the model expectations and leaves minus the reconstruction-law logarithmic term. Independently checked that the finite path weights normalize by successive row sums, the endpoint marginal is q0(x)K^k(x,y), and the explicitly zero-valued version on q0-null fibers obeys every sigma(X0) event integral. Singleton states and k=1 give the expected zero/product-base cases; empty states and k=0 are excluded, empty Theta is vacuous. No exchange of infinite differentiation/integration or choice is used. Hinton Section 2 and Murphy 24.2.2 support the objective/update distinction; no equality with a likelihood or scalar-objective gradient is asserted. No diagram or editorial defect; no repair.

Next: the sole level-3 numerical witness and its diagram.

### Level 3: ex-short-run-contrastive-divergence-bias

Read the complete Example, four verification steps, all eight direct prerequisites and the sole scoped TikZ diagram. For every finite theta, the positive logistic law normalizes; the half-identity plus half-refresh kernel is positive, stochastic, smooth and p-invariant, so all finite-state CD theorem hypotheses hold. At theta=0 recomputed p=(1/2,1/2), q1=(3/4,1/4), p1 derivative=-1/4, and q1 derivative=(1/8,-1/8). Energy derivative=(0,1) gives likelihood derivative=-1/2 and population stop-gradient=-1/4. The logarithmic correction is (log(3/2)-log(1/2))/8=log(3)/8>0, so scalar CD derivative=-1/4-log(3)/8. Checked theta=0 is an interior point; denominator 1+exp(-theta) never vanishes and no boundary parameter or infinity is included. The TikZ arrows run from source x to target y, with each loop labeled 3/4 and both cross-arrows 1/4, exactly the displayed matrix; proof is independent of the diagram. The witness asserts neither general bias sign nor asymptotic inconsistency. Example contains no hyperlinks before its complete references section; no repair or missing diagram.

All six risk reviews are now complete; no mathematical blocker or outside supplier/consumer defect was found.

## Disposition and source evidence

Exactly one decision is owed and supplied: `touched:59:thm-score-matching-integration-by-parts-identity`, `amended_repair`, confidence 1, linked to closed nonfatal defect `ml101-b59-3a-score-test-prerequisites`. The amendment synchronizes the manifest from 12 to the actual 27 dependencies; all six item files remain byte-identical to their reader-post snapshots. The other five also match pre-reader snapshots. The repaired theorem Statement is byte-identical to its authenticated preimage. Required risk reviews were added to the six contract rows; no provenance, verification or claim text was changed. No judge record existed on the reader-repaired theorem.

Primary source passages actually read:

- [Hyvärinen, full paper](https://jmlr.csail.mit.edu/papers/volume6/hyvarinen05a/hyvarinen05a.pdf): Section 1 normalization, Section 2 Theorem 1 and its footnote, Appendix A, PDF pp.1–3 and 12–14 (printed pp.695–697 and 706–708). Its boundary hypothesis is preserved as an attribution, rather than silently imported into the current cutoff proof.
- [Hinton, Version 1 full report](https://www.cs.toronto.edu/~hinton/absps/guideTR.pdf): Section 2, PDF pp.4–6, equations (2)–(9) and the omitted-derivative discussion. The report concerns RBMs; the local finite-state generalization is independently proved.
- [Murphy, 2025-Dec-10 author-hosted book](https://github.com/probml/pml2-book/releases/download/2025-dec-10/book2.pdf): read the existing local full PDF at `/tmp/prestige-murphy-pml2-book2.pdf` using PyMuPDF, PDF pp.883–893, printed pp.849–859. Relevant locators: (24.1)–(24.2), 24.2.2 and (24.19), 24.3.1 and (24.29)–(24.30). The book's informal CD minimization wording does not replace the exact local derivative proof.

Direct dependency statements were read from current `items/<id>.md` sources, including every newly added analysis supplier. The kernel-composition proof was also read to check the procedure's actual recursion, and the density-measure well-definedness theorem was read to check normalization. This is a review of the assigned arguments and their actual interfaces, not a new audit of every transitive published proof.

Both page carriers were inspected: draft, frontmatter only, compact-v1 retained, and the five A-page items / one B-page example match their inventories. There are no routed page decisions. The only diagram is the example's checked two-state graph; no additional diagram is needed. No published item was edited or found defective, so the published-consumer-supplier ledger needs no entry. Existing cross-batch dependency input is `[]`; no proposed withdrawal exists in this scope. No Statement or Definition changes were introduced by the reader or this adjudication, so no downstream interface repair is triggered.

## Local validation and handoff

- Initial `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-59.proof-contracts.json`: six HIGH/CRITICAL items, zero errors; all six then independently reviewed in generated order.
- Same risk command with `--require-reviewed`: six items, zero errors after all reviews.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-59.proof-contracts.json --items def-energy-based-density-and-partition-function,alg-contrastive-divergence-k,lem-energy-based-density-is-a-probability-measure,thm-score-matching-integration-by-parts-identity,thm-contrastive-divergence-k-gradient-omits-chain-derivative,ex-short-run-contrastive-divergence-bias`: 6/6 checked, zero errors and warnings.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-score-matching-integration-by-parts-identity.md`: one checked, zero failing.
- Final `node tools/proof-layout.mjs items/thm-score-matching-integration-by-parts-identity.md`: one item, five steps, zero defects. No item edit or formatter followed this check.
- Raw SHA256 checks matched all six current item files to reader-post; the recovered score-matching preimage matched pre-reader. The Statement comparison returned true.
- Defect append completed with one closed row and refreshed the generated ledger view. The first append attempt was rejected for a missing timestamp and wrote nothing; adding the actual timestamp resolved it. This was mechanical and creates no defect row.

No local mathematical blocker, unresolved risk review, outside repair, or escalation remains. Engine-owned hashing/stamping, gate battery and transitions were not run. The report and companion decisions JSON are the requested handoff.
