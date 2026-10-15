# Step 3a reader report — batch 24

Run: `bayesian-computational-statistics-62`  
Batch: `24`  
Role: reader

## Inventory opened

The run status was `running` in Step 3a; no reader result had yet been recorded for batch 24. I read the batch manifest and reader brief, and reviewed both assigned draft pages:

- `library/bayesian-computational-statistics/em-algorithm-and-latent-variable-likelihood-ascent.md` (A page)
- `library/bayesian-computational-statistics/em-algorithm-and-latent-variable-likelihood-ascent-examples.md` (B page)

The nine assigned items were reviewed in supplier order:

- `alg-expectation-maximization`
- `thm-em-observed-log-likelihood-is-nondecreasing`
- `thm-generalized-em-is-nondecreasing-under-q-ascent`
- `rem-em-ascent-does-not-imply-global-optimality-or-convergence`
- `ex-em-finite-mixture-responsibilities`
- `ex-generalized-em-increases-q-without-maximizing`
- `ex-em-likelihood-has-two-local-maxima`
- `ex-gaussian-mixture-likelihood-unbounded-under-covariance-collapse`
- `ex-em-support-losing-candidate-violates-finite-kl-condition`

I opened the relevant supplier items: `def-axiom-of-choice`, `def-kullback-leibler-divergence`, `def-latent-variable-joint-and-observed-data-factorization`, `def-likelihood-density`, `def-measure-with-density`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `cor-integral-over-a-null-set-vanishes`, `thm-of-archimedean`, `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`, `thm-integration-against-a-density`, `thm-kullback-leibler-is-nonnegative`, `thm-observed-density-is-latent-marginal-under-tonelli`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-conditional-density-formula`, `thm-conditional-expectation-exists-by-radon-nikodym`, `def-conditional-expectation-as-an-ae-class`, `thm-conditional-jensen-inequality`, `thm-bayes-formula-for-dominated-kernels`, `lem-normal-location-scale-density`, `def-standard-normal-and-normal-laws`, `lem-normal-density-has-total-mass-one`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `thm-choice-implies-dependent-implies-countable-choice`, and `def-countable-choice`. I also reviewed the batch-24 proof-contract entries for the assigned items.

No rendered evidence bundle was present under this run, so review used the current manifest, page and item carriers, contracts, and the listed suppliers. I checked the cited EM literature directly: Dempster–Laird–Rubin, §2 eq. (2.17) and §3 eq. (3.2), Lemma 1 and Theorem 1 (printed pp. 6–8), [PDF](https://www.maths.usyd.edu.au/u/jchan/GLM/Dempster1977EM.pdf); and Figueiredo, §2 (PDF pp. 2–5), [PDF](https://www2.stat.duke.edu/courses/Spring06/sta376/Support/EM/EM.Mixtures.Figueiredo.2004.pdf). These give the complete-data conditional-expectation Q function, the Q-ascent condition for generalized EM, and the likelihood monotonicity decomposition. They support the context; the item’s local proof supplies its stated measure-theoretic hypotheses and identity.

## Review and edits

The algorithm specifies the input model, valid-fiber and integrability conditions, exact and generalized selector branches, stop statuses, and infinite-sequence behavior. It makes no convergence claim. The theorem and remark preserve the distinction between one-step ascent and convergence or global optimality. The five examples’ mixture responsibilities, Bernoulli Q values and maximizer, tied-maximizer selector, Gaussian collapse bound, and support-loss KL calculation check out.

I repaired `items/thm-em-observed-log-likelihood-is-nondecreasing.md` without changing its statement. Its original ratio argument used the pointwise quotient `q_t/q_theta` as a Radon–Nikodym derivative without addressing that densities may take the value infinity on null sets, while the KL definition requires a finite-valued representative. I replaced it with an argument that first removes the null sets where either density is infinite, uses the finite-valued Radon–Nikodym representative, identifies its product with the candidate density by uniqueness of densities, and then integrates the log identity. I also removed the redundant conditional-Jensen route, whose application to the exponential and logarithm did not supply the needed convexity and monotonicity justifications.

I updated the theorem’s direct dependencies and its contract citations, derivations, and nonempty-choice boundary. The contract now records the finite-density and Radon–Nikodym steps. No `verification.judge` entry existed on the item, so there was no stale judge record to remove. Reflow reported the item unchanged; precheck passed (`1 checked, 0 failing`); the final proof-layout pass reported `1 item, 3 steps, 0 defects`.

No page prose or B-page prose was edited.

## Uneditable findings

1. `thm-observed-density-is-latent-marginal-under-tonelli` is a current-run draft supplier in batch 23 and is directly used by `alg-expectation-maximization`. Its proof step 4.1 (line 177) cites `step 1.4`, which does not exist. The preceding steps 2.1–3.2 do contain the stated marginal, normalization, fiber-density and integral-exchange arguments, so this is a nonfatal stale proof-step citation. The current raw source SHA-256 is `a00b6002c36f500729fe27a8e8c6dcd4c7bdbbe507886cc42ec08dabcc90ae0e`.

2. The published dependency `lem-normal-density-has-total-mass-one` has `def-standard-normal-and-normal-laws` in its `deps` (frontmatter line 5), while that published definition lists `lem-normal-density-has-total-mass-one` in its own `deps` (frontmatter line 5). This is a dependency cycle. The lemma proves normalization of the explicit density and does not use the normal-law definition; the unnecessary edge makes the active dependency graph ill-formed. The assigned consumer whose dependency closure reaches it is `ex-gaussian-mixture-likelihood-unbounded-under-covariance-collapse`. This is fatal until the cycle is removed.

## Page verdicts and blockers

- **A page `em-algorithm-and-latent-variable-likelihood-ascent`: pass after the theorem repair.** Its summary accurately restricts the identity and ascent claims to positive finite fibers, integrable log densities, support inclusion, and finite directional KL, and it makes no unsupported convergence claim.
- **B page `em-algorithm-and-latent-variable-likelihood-ascent-examples`: pass.** Its summary matches the five reviewed examples and correctly presents them as limits or illustrations of the one-step result.

Blocker: none for this reader report. The two uneditable dependency findings are recorded for routing.
