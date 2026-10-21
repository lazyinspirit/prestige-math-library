# Step 3a reader report — batch 50

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Date: 2026-10-21

## Opened inventory

- Manifest: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-50.pages.json`; batch coverage and proof-contract files were also reviewed as evidence.
- Pages: `library/inverse-problems/score-diffusion-inverse-solvers.md` (A) and `library/inverse-problems/score-diffusion-inverse-solvers-examples.md` (B).
- Assigned items, in dependency order: `lem-ip-conditional-score-and-tweedie-identities`; `def-ip-diffusion-prior-score-and-measurement-score`; `alg-ip-measurement-guided-diffusion-reconstruction` and `prop-ip-plugged-in-measurement-score-is-approximate`; `ex-ip-finite-score-guidance-laws-converge-without-finite-exactness` and `ex-ip-diffusion-inverse-method-families-and-exactness`.
- Direct published dependencies: `def-borel-sigma-algebra`, `def-measure-kernel-and-probability-kernel`, `def-probability-measure`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `def-weak-convergence-of-borel-probability-measures`, and `def-invariant-and-stationary-distribution-for-a-markov-kernel`. Supporting definitions consulted for the measure, measurability, continuity, and integrability uses: `def-measure`, `def-measure-space`, `def-measurable-function-between-measurable-spaces`, `def-metric-continuity`, and `def-integrable-real-and-complex-functions-and-their-integrals`.
- Source passages checked: Daras et al., *A Survey on Diffusion Models for Inverse Problems*, §2.2 Eq. 2.10 and Appendix A.1–A.2; §2.4.4 Eqs. 2.17 and 2.20; §3.1.4 Eq. 3.8. Song et al., *Score-Based Generative Modeling through Stochastic Differential Equations*, §3.3 Eq. 7, §5 Eq. 14, and Appendix G predictor-corrector algorithms. Chung et al., *Diffusion Posterior Sampling for General Noisy Inverse Problems*, §3.1 Eqs. 7–15 and Algorithm 1. Prince, *Understanding Deep Learning*, Chapter 18 notes on reverse sampling and sampling algorithms. In particular, Chung §3.1 Eq. 7 explicitly uses conditional independence of the observation and noised state given the clean state before replacing the joint likelihood by the clean-state likelihood.

## Repairs and evidence

- `lem-ip-conditional-score-and-tweedie-identities`: its likelihood-averaging formula was called a conditional measurement density without requiring the observation to be conditionally independent of the Gaussian noising noise given the clean state. Added that model hypothesis to the Statement and Facts & Assumptions. Also established continuity, hence Borel measurability, of the numerator defining `m_sigma` in Proof 2.1; this makes the claimed minimizer an admissible Borel estimator. The local Gaussian derivative and Tonelli arguments otherwise checked against the stated assumptions.
- `alg-ip-measurement-guided-diffusion-reconstruction`: added the same conditional-independence condition to the exact-score branch. Reviewed its sole TikZ flow diagram: initialization, correction, kernel draw, optional projection, stopping, and loop-back directions agree with the procedure; no diagram repair was needed.
- `prop-ip-plugged-in-measurement-score-is-approximate`: specified the observation noise as independent of both the clean state and Gaussian noising noise. This makes the displayed conditional likelihood average the actual measurement density used in the counterexample. The two-point posterior, constant exact score, and nonzero plug-in score computations checked.
- `ex-ip-finite-score-guidance-laws-converge-without-finite-exactness`: completed the one-step algorithm witness by specifying the singleton observation space, constant forward map, unit likelihood, and deterministic terminal initialization. The Bernoulli sampler has the claimed law and finite budget; the weak-convergence and finite-index non-equality calculations checked.
- `ex-ip-diffusion-inverse-method-families-and-exactness`: made the exact reverse-kernel sufficiency condition explicit: the path law has the target as its (X_0)-marginal and factors through the stated Borel reverse kernels. Added conditional independence to the exact-score branch, proved the ELBO upper bound by Jensen applied to (t\log t), and fully specified the two-step failure-selection witness. The MCMC induction, finite empirical-measure separation, and deterministic latent-output claims checked.

The affected batch proof-contract entries were regenerated. No edited item had a stale `verification.judge` record. Reflow reported all five changed items unchanged; precheck passed for the four proof-bearing items (the algorithm definition had zero proof sections to check). Final proof-layout check: 5 items, 19 steps, 0 defects.

## Unrepaired finding

- `alg-ip-measurement-guided-diffusion-reconstruction`, Definition: the finite schedule and per-operation finite budgets make termination immediate, but the assigned batch contains no separate proved termination result for this algorithm. The algorithm instructions require termination and other algorithmic properties in separate result items; procedure instructions alone are not a phase proof. A short result bounding the run by (N) reverse iterations and the sum of the declared budgets would close this nonfatal item. It is outside the assigned item/page carriers available for this repair, so it remains in the findings JSON.

No other uneditable defects were found. I read the cited relevant source passages, not every section of the cited books and papers; the reviewed mathematical claims are supported by the local arguments and no source uncertainty remains.

## Page verdicts

- `score-diffusion-inverse-solvers` (A): no page defect. Its frontmatter-only inventory matches the manifest, the body is empty, and `page_layout: compact-v1` is preserved.
- `score-diffusion-inverse-solvers-examples` (B): no page defect. Its frontmatter-only example inventory matches the manifest, the body is empty, and `page_layout: compact-v1` is preserved.

## Blocker

None.
