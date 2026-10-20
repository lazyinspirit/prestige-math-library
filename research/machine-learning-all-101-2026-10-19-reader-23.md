# Step 3a reader report — batch 23

Run: machine-learning-all-101-2026-10-19

## Opened inventory

Pages opened:

- ml02-latent-representations — A page.
- ml02-latent-representations-examples — B page.

All 16 items in the current batch manifest were opened and reviewed in dependency order:

- Definitions: def-covariance-factor-model, def-square-ica-model, def-poisson-nmf-model.
- Covariance and NMF results: prop-covariance-factor-model-rotation-ambiguity, lem-ica-whitening-reduces-mixing-to-orthogonal, prop-poisson-nmf-factorization-invariances, prop-poisson-nmf-loglikelihood.
- ICA characterization chain: lem-local-gaussian-characteristic-function-is-global, lem-orthogonal-independent-mixing-shared-columns-gaussian, thm-square-ica-identifiability-at-most-one-gaussian.
- NMF procedure chain: alg-poisson-nmf-multiplicative-updates, lem-poisson-nmf-updates-preserve-positivity.
- Examples: ex-ica-sign-permutation-ambiguity, ex-gaussian-factor-rotation, ex-poisson-nmf-nonunique-factorizations, ex-poisson-nmf-zero-count-update.

The current manifest includes the two ICA helper lemmas absent from the older 14-item authoring notes. I reviewed the current manifest and proofs, not the earlier escalation decision.

The exact statements of these 17 published item suppliers were opened before their assigned consumers: def-characteristic-function-of-a-real-random-variable, thm-fatou-lemma, thm-dominated-convergence, thm-monotone-convergence-for-the-integral, lem-moments-give-derivatives-of-the-characteristic-function, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-gaussian-integral, lem-finite-measure-uniqueness-on-a-pi-system, thm-integration-by-parts, thm-substitution, thm-continuous-implies-integrable, cor-zero-derivative-implies-constant, lem-characteristic-functions-under-affine-maps-and-independent-sums, thm-ftc-first-part, thm-singular-value-decomposition, and cor-real-spectral-theorem-for-self-adjoint-endomorphisms. Their statements supply the hypotheses used in the assigned arguments; no defect in these statements was confirmed.

The A page's nine required published page IDs were checked against their page frontmatter and all resolve as published: the-spectral-theorem-and-singular-value-decomposition, characteristic-functions-inversion-and-continuity, improper-and-parameter-dependent-multiple-integrals, measures-and-their-basic-properties, product-measures-and-the-fubini-tonelli-theorems, properties-of-the-integral-and-the-working-ftc, the-derivative-and-mean-value-theorems, the-lebesgue-integral-and-the-convergence-theorems, and the-riemann-integral.

## Source checks

- Rick Durrett, Probability: Theory and Examples, §3.3: Example 3.3.5 gives the standard Gaussian characteristic function; Theorem 3.3.18 gives the finite-moment derivative formula; Theorem 3.3.21 gives the second-moment converse by a finite-difference/Fatou argument; Theorem 3.3.25 gives a moment-determinacy criterion. The assigned local proof supplies the higher even-difference and smoothing details beyond those cited results. [Author-hosted PDF](https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf), printed pp. 127, 134–136, 142.
- Hyvärinen, Karhunen, and Oja, Independent Component Analysis: §7.2.2, pp. 153–154, gives the square/invertible ICA context and says the identifiability proof is omitted; §§7.5–7.6, p. 163, states the at-most-one-Gaussian boundary and that Gaussian components can mix. [Author-hosted PDF](https://www.cs.helsinki.fi/u/ahyvarin/papers/bookfinal_ICA.pdf).
- Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, §14.7.2, pp. 560–561, discusses the non-Gaussian sufficient condition and does not supply the proof. The linked PDF was unavailable through the retrieval tool; the section text was checked in a university course mirror, and the author site confirmed the corrected 12th printing. [Author page](https://hastie.su.domains/ElemStatLearn/main.html), [course mirror](https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf).
- Lee and Seung, “Algorithms for Non-negative Matrix Factorization,” §4, Theorem 2, gives multiplicative generalized-KL update formulas. No monotonicity or convergence conclusion from that paper is asserted by the assigned finite-sweep algorithm. [Cornell-hosted PDF](https://www.cs.cornell.edu/courses/cs6241/2019sp/readings/Lee-Seung-2001-NMF.pdf).

## Edits and evidence

1. items/alg-poisson-nmf-multiplicative-updates.md, Definition, line 30: changed “simultaneous updates” to “one complete sweep in the stated order.” The definition updates all W entries from the current H, recomputes rates, then updates H from the new W; line 42 and both assigned consumers already use that order. Refreshed the algorithm quotation in the proof contracts for lem-poisson-nmf-updates-preserve-positivity and ex-poisson-nmf-zero-count-update. The two consumer proofs and calculations were checked against the clarified procedure.

2. items/lem-local-gaussian-characteristic-function-is-global.md, Facts & Assumptions F9, line 52: clarified how the cited compact substitution theorem applies to the absolutely integrable whole-line substitutions in the proof. Finite truncations and the Gaussian or bounded-integrand tail bounds justify passage to the limit.

3. items/thm-square-ica-identifiability-at-most-one-gaussian.md, Statement references, lines 33 and 35: refined the visible labels. The ESL citation is identified as its non-Gaussian discussion; the HKO label now includes §§7.5–7.6, p. 163, where the at-most-one-Gaussian boundary appears. The theorem statement and strength are unchanged.

4. items/ex-ica-sign-permutation-ambiguity.md, Verification 1.1–3.1: added the elementary normalization, mean, variance, and non-Gaussian checks for the displayed Laplace density; renumbered the two alternative-representation steps. Updated its proof-contract steps and supplier-use map.

5. items/ex-gaussian-factor-rotation.md, Verification 1.1–3.1: added the factorization, centering, unit-variance, and zero-cross-covariance checks needed to establish the factor-model hypotheses; renumbered the rotation and density steps. Updated its proof-contract steps, supplier-use map, and degenerate-case evidence.

No stale verification.judge record was present on the edited items or affected consumers. The local-Gaussian contract's cited theorem statement and step uses did not change; the strict contract check passes on the current contracts. No assigned page or page body was edited. No TikZ or tikzcd diagrams occur in the assigned items.

## Page verdicts

| Page | Verdict |
|---|---|
| ml02-latent-representations | Correct assigned inventory and published-page requirements. Draft status and page_layout: compact-v1 are preserved. The body is empty as required; no summary defect. |
| ml02-latent-representations-examples | Correct four-example inventory and A-page requirement. Draft status and page_layout: compact-v1 are preserved. The body is empty as required; no summary defect. |

Every assigned statement/definition/example description is uninterrupted by hyperlinks; references remain after the complete sections. No uneditable defect was confirmed, so the findings array is empty.

## Validation and blocker

- Reflow: all five edited item paths reported unchanged.
- Precheck: algorithm 0 proof-bearing sections checked; the other four edited items passed. Total: 0 failures.
- Strict proof-contract validation: 12 contracted items checked, 0 errors and 0 warnings.
- Final proof-layout: five edited items, 14 steps, 0 defects.
- No batch-23 blocker. At the latest live status check, the run was in Step 3a review with no in-flight dispatch; an unrelated 3a-split blocker reports split-8 failed three times for batch 8.

Coverage limitation: I opened the direct published supplier statements used in the assigned proofs and checked their hypothesis fit, but did not independently re-audit the transitive proof bodies of the full published dependency closure. The nine required-page check covered page IDs, titles, and published statuses, not their full bodies. No defect in those unexamined transitive proofs or page bodies is claimed.
