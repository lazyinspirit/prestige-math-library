# Step 3a reader report — batch 14

Run: `machine-learning-all-101-2026-10-19`  
Role: `reader-14`  
Review result: no confirmed defects; no edits.

## Run state

The live autopilot status was `running` at `3a-read` when checked on 2026-10-19 (`0/101` reader results recorded; no result artifact yet for batch 14). The repository HEAD was `603500781c` (`Add strict finite smoke fixtures for machine learning frontier`). This review uses current carriers and run state, not the retired handoffs.

## Opened inventory

Assigned pages:

- `library/machine-learning/ml02-linear-classification.md` (A): opened the full carrier. Its 11-item inventory matches the batch manifest; `examples` is empty, `requires` contains five resolved published pages, `page_layout: compact-v1` is present, and the Markdown body is empty.
- `library/machine-learning/ml02-linear-classification-examples.md` (B): opened the full carrier. Its three examples match the batch manifest; `items` is empty, `page_layout: compact-v1` is present, and the Markdown body is empty.

Assigned A-page items, read in dependency order:

`def-linear-score-classifier`; `def-indicator-response-least-squares-classifier`; `lem-indicator-response-least-squares-minimum-norm-fit`; `def-generative-lda-and-qda-models`; `thm-lda-and-qda-log-posterior-scores`; `def-binary-logistic-and-multiclass-softmax-models`; `def-binary-logistic-log-likelihood-and-l1-penalty`; `thm-binary-logistic-derivatives-and-irls-update`; `thm-complete-separation-precludes-finite-logistic-mle`; `alg-cyclic-perceptron`; `thm-perceptron-margin-mistake-bound`.

Assigned B-page items:

`ex-generative-lda-and-logistic-share-a-boundary`; `ex-separated-logistic-sample-has-unattained-supremum`; `ex-nonseparable-perceptron-cycles`.

Direct published item dependencies opened before their consumers:

`def-axiom-of-choice`; `def-multivariate-normal-law`; `thm-nondegenerate-multivariate-normal-law-has-density`; `thm-least-squares-solutions-and-normal-equation`; `thm-singular-value-decomposition`; `thm-hessian-characterises-convexity`; `def-glm-observation-family`; `def-generalized-linear-model`; `thm-glm-general-link-score-and-information`; `alg-fisher-scoring-irls`; `thm-irls-is-fisher-scoring-step`; `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`.

The five A-page `requires` targets were checked at frontmatter level and resolve as published pages: `convex-and-semicontinuous-functions-on-rn`, `inner-product-spaces-and-orthogonality`, `the-spectral-theorem-and-singular-value-decomposition`, `generalized-linear-models-and-fisher-scoring`, and `mixed-effects-and-longitudinal-models`. They were not needed as item-proof premises beyond the direct item suppliers listed above. The batch dependency evidence lists no in-run pair suppliers.

All eight proof-contract records in `research/machine-learning-all-101-2026-10-19-batch-14.proof-contracts.json` were opened and compared with the current Statements, Facts & Assumptions, proof steps, citations, and boundary clauses.

## Review and evidence

- The indicator-response minimum-norm fit proof covers rank zero and positive rank. The SVD candidate projects each response column onto `im(X)`; the normal-equation supplier gives the full minimizer set; row-space/kernel orthogonality and columnwise Pythagoras establish the unique minimum-Frobenius-norm minimizer.
- The LDA/QDA theorem applies the positive-definite Gaussian density, normalizes with a positive finite mixture density, and cancels only class-independent terms. The LDA expansion gives the stated affine score; the QDA expression is degree at most two. The finite ordered class set supplies the stated tie rule.
- The binary-logistic derivatives, Hessian, convexity, full-rank invertibility, Bernoulli-GLM conditions, Newton step, and weighted least-squares expression are justified under finite coefficients and the stated rank condition. The proof makes no convergence claim.
- The complete-separation proof correctly takes a separating ray to likelihood zero and proves strict negativity at every finite coefficient vector. The two-point example's augmented rows, separating vector, and likelihood limit check out.
- The cyclic perceptron specifies its order, non-strict update, tie convention, stopping rule, and unbounded execution. The margin theorem's progress and norm inequalities prove the update bound and finite termination. The contradictory-label example returns to zero after the two stated updates on every pass.
- The LDA/logistic example has LDA score difference `2x`; `sigma(2x)` crosses `1/2` at zero. Its diagram correctly places the means at `-1` and `1` and the tie boundary at `0`. No other assigned item contains a TikZ/tikzcd diagram.
- All assigned item Statements, Definitions, and example descriptions are uninterrupted by hyperlinks; their references occur after the complete section in separate paragraphs. Proof steps have the required paragraph separation, tags, punctuation, and final QED marker. Both page bodies are empty.

Source checks:

- Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, 2nd ed., corrected 12th printing, retrieved from the cited [author-hosted download link](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS), confirmed as a 764-page PDF. Relevant passages checked: §4.2 (printed pp. 103–105, equations 4.3–4.6); §4.3 (pp. 107–110, equations 4.7–4.12); §4.4.1 (pp. 119–121, equations 4.20–4.28); §4.4.4 (pp. 125–127, equation 4.31); §4.4.5 (pp. 127–128, equations 4.33–4.38 and Exercise 4.5); §4.5.1 (pp. 130–131, equation 4.44 and Exercise 4.6); and §18.4 (pp. 661–664).
- [Stanford CS229 Spring 2022 notes](https://cs229.stanford.edu/lectures-spring2022/main_notes.pdf): §2.1 (PDF pp. 20–23) for sigmoid, Bernoulli likelihood and derivative; §2.2 (pp. 23–24) for perceptron; §3.2.2–3.2.3 (pp. 30–34) for logistic and softmax; and §4.1.1–4.1.3 (pp. 36–42) for Gaussian discriminant analysis and its relationship to logistic regression.
- [Cornell CS4780 Spring 2018 Lecture 3](https://www.cs.cornell.edu/courses/cs4780/2018sp/lectures/lecturenote03.html): the augmented-bias convention and assumptions (lines 6–15), margin theorem and progress/norm proof (lines 26–43), and nonseparable-cycle note (line 49).

No citation was found inaccurate for the claims it supports. The item proofs supply the local arguments rather than relying on those citations as substitutes for proof.

## Edits, findings, and page verdicts

- Edits: none. No item source, page, proof contract, or judge record was changed. Reflow, precheck, and `proof-layout` were not run because no item was edited.
- Uneditable defects: none found.
- `ml02-linear-classification`: pass; inventory, prerequisites, compact layout, and empty body are consistent.
- `ml02-linear-classification-examples`: pass; example inventory, compact layout, and empty body are consistent.
- Blocker: none.
