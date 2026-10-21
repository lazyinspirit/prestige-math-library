# Batch 50 Step 3a adjudication

Run: `inverse-problems-knot-theory-all-109-2026-10-19`. Group: `batch-50`; scope assignment group `q` is preserved. Six obligations: five touched carriers and reader:50:1; no page or foreign gate obligation. Review proceeds in the generated dependency order.

All six initial item hashes match the post-reader snapshot. Git commit `66722d74a1` supplies exact pre-reader bytes: SHA256 for each of the six items matches the pre snapshot. Historical deltas are therefore known. Reader and refuter reports were read independently; refuter flags are empty.

## Level 0: conditional-score lemma

Verdict: amended_repair. Retain the reader conditional-independence hypothesis and Borel-estimator continuity argument. The post-reader Statement and A2 referred to undefined Z. Define Z=(X_sigma-X_0)/sigma on the existing joint law and prove its independent standard-Gaussian distribution by change of variables in Proof 2.1. No claim is weakened. Repair confidence: 1.

Checked Proof 1.1 (bounded Gaussian Hessian and positivity), 2.1 (probability kernel, rectangle disintegration, finite/Borel conditional mean), 3.1 (Tweedie and posterior-convolution factorization), 3.2 (finite-second-moment denoising projection), and 4.1 (finite Gaussian score target, risk decomposition and uniqueness). Point-mass/singular priors and infinite-second-moment priors remain admissible for score matching; sigma=0 is excluded. Finite moment is used exactly for denoising and its class equivalence. Probability-times-Lebesgue is sigma-finite and each Tonelli use is nonnegative; signed expansions have finite second moments. No AC. The CRITICAL risk review is complete in the contract.

Direct item consumers found by dependency/reference search: def-ip-diffusion-prior-score-and-measurement-score, alg-ip-measurement-guided-diffusion-reconstruction, prop-ip-plugged-in-measurement-score-is-approximate, ex-ip-diffusion-inverse-method-families-and-exactness. Their actual lemma uses respectively inherit all hypotheses, explicitly declare independent noising and observation, use independent observation noise, and explicitly declare the model independence. Defining Z requires no consumer mathematical edit or further propagation. All are owned batch-50 carriers. Manifest statement mirrors and contract citation quotations will be synchronized after the remaining reviews.

Sources read: [Daras v1](https://arxiv.org/html/2410.00083v1), section 2.2 Eq 2.10 and Appendix A Lemmas A.1-A.2 including proofs, A.2 DSM formulation; [Song v2](https://arxiv.org/html/2011.13456v2), section 3.3 Eq 7 and section 5 Eq 14. These motivate the identities; current local differentiation and L2 arguments establish their stated hypotheses. Read current exact statements of def-borel-sigma-algebra, def-measure-kernel-and-probability-kernel, def-probability-measure and thm-tonelli-theorem-for-sigma-finite-product-spaces (including its proof). No published mathematical defect found.


## Level 2: algorithm and reader:50:1

Touched verdict: accepted_repair; repair confidence 1. Keep the exact-score option conditional-independence requirement. Read the complete Definition, all three dependencies and the TikZ source: terminal draw, correction, kernel draw, optional projection/admissibility test, decrement and k=1 return are correctly directed. Failure arrows terminate at first failure; the upper loop carries the new state and decremented index. This diagram asserts no distributional identity. Inputs include total measurable corrections, probability kernels, explicit failure spaces and finite operation budgets; the optional exact branch now meets the lemma hypotheses. Surrogates have no exactness certificate.

Reader:50:1 verdict: false_positive. SCHEMA.md Algorithms requires *algorithmic properties* to be stated and proved in separate result items. It does not require every procedure definition to carry a termination theorem. This Definition states finite-budget admissibility requirements and instructions, and claims no standalone correctness, termination or complexity theorem. The finite control flow is fully specified: one initialization, at most N loop visits with k reduced by one, or immediate failure return; each operation is covered by the given budget. There is no missing mathematical prerequisite for defining this procedure. The observed hash in scope (313f...) differs from the post snapshot (16dc...), but the finding is an absence claim and the exact pre and post carriers both contain the same finite loop and budget clauses. Neither contains the alleged property theorem. The finding is closed as false-positive with its own ledger row; no unnecessary algorithm edit or new item.

Checked both algorithm consumers: the finite-law example supplies a one-step always-successful draw; the family example either assumes almost-sure success or explicitly models correction failure. Neither uses a standalone termination theorem. The reader model clarification changes neither procedure inputs nor any consumer's claim.

## Level 2: plug-in measurement-score proposition

Verdict: accepted_repair; repair confidence 1. Retain explicit W independent of (X_0,Z). This makes the fixed-y likelihood average the actual observation density; the weaker pre-reader conditional law alone permits coupling to the noising variable. At y=0 the two clean states have identical positive likelihood, so r is constant and its score zero. Posterior odds exp(2x/sigma^2) give tanh(x/sigma^2); its derivative 4exp(2x/sigma^2)/(sigma^2(exp(2x/sigma^2)+1)^2) is strictly positive. The plug-in score is nonzero for every x != 0, and both scores vanish at x=0. Sigma,tau>0 exclude singular boundaries. Every proof step and F1/F2 checked; HIGH risk review complete in contract. No AC or diagram. Direct dependency/reference search found no item consumers requiring review or repair.

[Chung v4](https://arxiv.org/html/2209.14687v4), section 3.1 Eq 7 explicitly uses conditional independence before likelihood averaging. This is source support for the model qualification, not a claim that its approximation is exact. [Daras v1](https://arxiv.org/html/2410.00083v1), section 2.4.4 Eqs 2.17/2.20 provides the decomposition and averaged likelihood; the two-point counterexample is established by the current local calculation.


## Level 3: solver-family example

Verdict: amended_repair; repair confidence 1. The pre-reader Proof 1.1 asserted that adjacent reverse conditionals generate an arbitrary supplied path law. That joint-law inference fails for non-Markov paths, but the claimed terminal output law remains true: each exact reverse conditional propagates the corresponding one-time marginal. The reader supplied reverse factorization, making the argument sound but unnecessarily restricting the sufficient condition. Retain the explicit X_0 target marginal, restore general adjacent reverse conditionals, and replace the proof by backward marginal induction. A2 states the precise kernel identity used at each step. This preserves the richest sound original final-law claim and explicitly disclaims reconstruction of the full joint path.

For an independent check on the discarded joint-law inference, take independent fair bits X_2,X_1 and X_0=X_2. The true path has X_0=X_2 surely. Both adjacent reverse conditionals are fair coins independent of their input, so reverse simulation makes X_0 independent of X_2 and agrees with it only with probability 1/2. Its X_0 marginal is nevertheless the correct fair bit. This is why the repair changes the proof rather than imposing a Markov/path-factorization hypothesis.

Checked Verification 1.1 backward marginal induction and probability-one completion; 1.2 ELBO identity, Jensen/strict-convexity equality and both directions of density/measure equality; 1.3 deterministic latent law and lack of a MAP certificate; 1.4 invariance induction and identity-kernel counterexample; 1.5 complete two-step correction-failure witness; 2.1 finite-support/non-atomic separation. The failure witness has completion probability 1/2 and completed law delta_0 against the two-point target. For J=1 and any permitted zero weights the support test still gives empirical mass one and target mass zero. Empty probabilities, zero evidence and zero noising scale are excluded by explicit hypotheses. No AC, no diagram and no downstream item consumer requiring propagation. CRITICAL risk review complete.

Source checks: [Song v2](https://arxiv.org/html/2011.13456v2), section 5 Eq 14 and Appendix G Algorithm 1 supplies conditional-score and finite sampling context, not the claimed exact finite-kernel certificate. [Chapter 18 course notes](https://csci4052u.science.ontariotechu.ca/generative_models/chapter_18_diffusion_models/notes.html), reverse decoder/ancestral sampling and ELBO bound sections were read as the cited secondary exposition, not as a reading of Prince's complete book. The current finite-kernel, invariance, failure and particle assertions have explicit local arguments.

The published invariant/stationary-kernel Definition supplies the exact integral identity used in F3/Verification 1.4. Its embedded wikilinks interrupt its Definition; report that existing presentation issue read-only for owner maintenance, with no mathematical supplier blocker.


## Level 3: finite-law example

Verdict: accepted_repair; repair confidence 1. Reader's completion of the observation, likelihood, forward map and deterministic initialization is a sound nonfatal witness completion. All four steps checked against the actual algorithm Definition and def-weak-convergence-of-borel-probability-measures Definition. Independent m fair bits give probability 2^(-m) of output one; every bounded continuous test integral has error 2^(-m)(f(1)-f(0)) tending to zero. The Borel set {1} separates every finite output from delta_0, including m=1. The degenerate target is permitted; m=0 and a uniform budget across m are not claimed. No AC, diagrams or downstream consumers. HIGH risk review complete.

## Consumer and scope disposition

All statement/definition changes were checked against direct item dependencies and reference consumers: lemma consumers are the four listed above; algorithm consumers are both examples; the proposition and both examples have no further item consumers. The score Definition inherits the amended lemma hypotheses. No mathematical consumer edit outside batch 50 is needed and no further-hop propagation is triggered. Both page inventories remain unchanged and frontmatter-only with compact-v1; no page summary is authored. Batch manifest statement mirrors and local citation quotations are synchronized to the reviewed claims. Existing cross-batch input will be preserved; there is no new in-run supplier edge. No withdrawal is proposed and stable IDs are retained.

Independent source reading is limited to the cited passages, not the complete papers/books. Daras v1 Appendix A.1/A.2 proofs and DSM proof through Eq A.32, section 2.4.4 Eqs 2.17-2.20 and section 3.1.4 Eq 3.8 were checked; Song v2 section 3.3 Eq 7, section 5 Eq 14 and Appendix G Algorithm 1 were checked; Chung v4 section 3.1 Eqs 7-11 were checked for averaging and approximation, without importing its error estimates as local results. The course notes' reverse-sampling and ELBO sections were read as secondary context. All owned claims have the local arguments described above.

## Defect dispositions and checks

The companion decisions file contains exactly five touched decisions and reader:50:1, in generated item order; there are no extra page, unflagged-item or foreign-gate decisions. Two touched verdicts are amended_repair (lemma and family example), three are accepted_repair, and the reader finding is false_positive. Every completed repair has repair_confidence 1.

Closed ledger rows appended at caught_at_stage 3a-adjudicate:

- ipkt109-b50-3a-unbound-noising-variable: nonfatal undefined Z, fixed in lemma.
- ipkt109-b50-3a-algorithm-model-independence: fatal missing exact-model independence, reader repair accepted.
- ipkt109-b50-3a-two-point-observation-independence: fatal missing observation/noising independence, reader repair accepted.
- ipkt109-b50-3a-adjacent-reverse-joint-inference: nonfatal incorrect joint-law inference, fixed by marginal induction.
- ipkt109-b50-3a-finite-instance-completion: nonfatal incomplete finite algorithm witness, reader completion accepted.
- ipkt109-b50-3a-reader-termination-false-positive: closed false-positive; exactly the one row referenced by reader:50:1.
- ipkt109-b50-3a-published-invariant-presentation: closed nonfatal-recorded maintenance routing; published source remains unchanged and owner maintenance remains pending.

The published ledger was reread and merged under research/.published-consumer-ledger.lock; only this worker's lock was removed. Its deduplicated classification index has one entry for the invariant-kernel Definition. The frontier dependency ledger records the owned consumer uses and preserves existing cross-batch page-context records and their historical qualifications. No additional item/page, withdrawal or published-content edit. No prior verification.judge record existed on either materially amended carrier.

Local checks after final item edits:

- Reflow: all five changed carriers unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` with the five explicit item paths: four proof-bearing carriers passed, zero failing; the algorithm has no proof phase.
- `node tools/rendercheck.mjs` with those five paths: all five parsed, including real KaTeX and renderer YAML.
- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-50.proof-contracts.json --strict`: 6/6 checked, zero errors or warnings.
- `node tools/risk-report.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-50.proof-contracts.json`: initial routing read; all four HIGH/CRITICAL reviews then authored. Final rerun with `--require-reviewed`: six items routed, zero errors.
- Required final single batched `node tools/proof-layout.mjs` with all five changed item paths: five items, nineteen steps, zero defects.
- Scoped `git diff --check`: clean.

No mathematical blocker or unresolved owner decision for the six routed obligations. The presentation-only published maintenance alert remains pending with the owner. These are local checks, not judge, native gate, hash stamp, publication or stage-transition certification. The engine owns the next gate battery and stamping.
