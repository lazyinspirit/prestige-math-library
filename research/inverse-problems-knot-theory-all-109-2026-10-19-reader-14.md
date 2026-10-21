# Step 3a reader report — batch 14

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Batch: `14`  
Role: read-only reader

## Run state

The live `.autopilot` status reports the run as running at `3a-read`, with no result recorded for batch 14 and no worker in flight. The latest Git commit at review time was `ace06e03bc` (`Check actual proof phases without treating Facts-only declarations as proofs`). I reviewed the current workspace carriers and did not rely on historical handoff claims.

## Opened inventory

Assigned pages:

- `library/inverse-problems/statistical-inverse-model-misspecification.md`
- `library/inverse-problems/statistical-inverse-model-misspecification-examples.md`

Assigned items, read supplier-first:

1. `def-ip-operator-and-prior-mismatch`
2. `thm-ip-no-uniform-recovery-under-unrestricted-operator-mismatch`
3. `ex-ip-restricted-operator-class-positive-modulus`
4. `ex-ip-identical-laws-under-operator-mismatch`

Claim-relevant dependency statements and proof sections inspected:

- `def-measurable-space`
- `def-metric-space`
- `def-probability-measure`
- `def-measurable-function-between-measurable-spaces`
- `def-random-element-and-real-random-variable`
- `def-law-or-distribution-of-a-random-element`
- `lem-law-of-a-random-element-is-a-probability-measure`
- `def-statistical-experiment`
- `def-ip-forward-map-and-solution-classes`
- `lem-metric-nonnegativity`
- `def-integral-of-a-nonnegative-simple-function`
- `def-nonnegative-lebesgue-integral`
- `prop-the-nonnegative-integral-agrees-with-the-simple-integral`
- `cor-additivity-of-the-nonnegative-lebesgue-integral`
- `prop-order-and-scalar-rules-for-the-nonnegative-integral`
- `def-randomized-procedure-as-a-markov-kernel`
- `lem-procedure-action-law-is-measurable`
- `def-loss-function-and-risk`
- `lem-metrics-on-rn`
- `lem-real-line-is-a-metric-space`
- `def-ip-identifiability-and-stability-modulus`

I also reviewed the batch source-evidence bundle and the four assigned proof-contract records as evidence, then checked the current carrier text independently.

## Item review

- `def-ip-operator-and-prior-mismatch`: the translated observation map is measurable by the stated translation condition; the law-of-a-random-element result makes each sampling law a probability measure. The definition keeps operator mismatch, noise-law mismatch, model misspecification, and prior-support mismatch distinct, and makes no posterior claim. Its definition and remark references follow their complete prose sections.
- `thm-ip-no-uniform-recovery-under-unrestricted-operator-mismatch`: the hypotheses supply a common probability law and a shared probability kernel, measurable nonnegative loss sections, and a metric target. Integrating the triangle inequality first against the kernel and then against the common law yields the sum-risk bound; the extended-risk argument handles infinite risks and Δ=0. The proof is complete and the cited lower-bound sources are contextual; this theorem is proved locally.
- `ex-ip-restricted-operator-class-positive-modulus`: the admissible class and restricted (d_1) metric are well defined. Same-label and cross-label cases establish the target-to-data inequality for every pair, and ω(t)=t satisfies the modulus conditions.
- `ex-ip-identical-laws-under-operator-mismatch`: both forward signals equal 1, so their translated sampling laws agree for every stated noise law. The power-set action sigma-algebra makes the loss sections measurable, and the theorem gives the claimed (1/2) risk bound.

No assigned item contains a TikZ/tikzcd diagram, and the exposition does not require one. The stability-definition dependency has a commutative diagram matching its exactness equation; it is not used as a proof.

## Page verdicts

- `statistical-inverse-model-misspecification`: clean. Frontmatter matches the manifest's title, requirements, and two-item inventory. The body is empty, there is no summary, and `page_layout: compact-v1` is present.
- `statistical-inverse-model-misspecification-examples`: clean. Frontmatter matches the manifest's title, A-page requirement, and two-example inventory. The body is empty, there is no summary, and `page_layout: compact-v1` is present.

## Edits and uneditable findings

No assigned item or A-page prose required a confirmed repair, so no carrier was edited. The proof-layout, reflow, and precheck commands were not run because there are no changed item paths.

Two nonfatal prose defects remain in published dependencies used directly by `thm-ip-no-uniform-recovery-under-unrestricted-operator-mismatch`; they are reported in the findings output and were not edited:

- `def-metric-space`, Definition, lines 63–69: after “No infinite value is permitted;” the following clause beginning “Which metric axiom list…” is malformed, and the later clause “as … proves” does not form a grammatical sentence. The metric axioms themselves are explicit, and the theorem separately uses `lem-metric-nonnegativity`.
- `def-loss-function-and-risk`, Definition, lines 46–48: “The inner integral is a measurable function of x, by A randomized procedure has a measurable action law, so …” is malformed. The risk formula and the measurability supplier remain explicit, but the explanatory sentence needs its missing grammatical connection restored.

## Source checks

- Baek, Aquino, and Mukherjee, [*Generalized Bayes Approach to Inverse Problems with Model Misspecification*](https://arxiv.org/pdf/2210.06921), §1 and §2.2 (PDF pp. 1–4): identifies forward-model and noise-distribution uncertainty; the local definition does not import posterior conclusions.
- Cvetković et al., [*Choosing Observation Operators to Mitigate Model Error in Bayesian Inverse Problems*](https://arxiv.org/pdf/2301.04863), Abstract, §1, and §2.1 (PDF pp. 1–6): describes additive observation noise, approximate versus best forward models, priors, and posterior comparisons in its stated finite-dimensional Gaussian setting. The assigned definition makes no such posterior assertion.
- Dashti and Stuart, [*The Bayesian Approach to Inverse Problems*](https://arxiv.org/pdf/1302.6989), §1.1 (PDF pp. 3–4) and the cited Bayesian-inversion material around PDF pp. 29–30: supports the conventional forward-map, prior, and noise setup; no theorem from it is used by the assigned items.
- Zheng et al., [*InverseBench*](https://arxiv.org/html/2503.11043), §2.1 and Appendix C: Appendix C states that the benchmark uses an exact, explicit forward model and identifies forward-model mismatch robustness as future work. The PDF endpoint exceeded the browser's content limit, so I checked the corresponding arXiv HTML sections rather than claiming to have read the full 29-page PDF. The assigned remark remains limited to empirical benchmark observations.
- Raginsky, [*Minimax lower bounds*](https://maxim.ece.illinois.edu/teaching/fall13/notes/minimax.pdf), §1, Lemma 1 and proof (PDF pp. 3–5): the discrete two-point overlap bound is relevant context; the assigned arbitrary-measurable-space result is proved locally.
- Duchi, [*Lecture Notes on Statistics and Information Theory*](https://web.stanford.edu/class/stats311/lecture-notes.pdf), Chapter 8 §§8.1–8.3, including Proposition 8.2.1: supplies the metric-risk and estimation-to-testing context; the assigned proof does not rely on that reduction.

## Limitations and blocker

No blocker remains. I inspected the claim-relevant clauses and proof sections of the item dependency closure rather than every unrelated transitive dependency body or the bodies of the page-level `requires` targets. The InverseBench PDF limitation and HTML sections actually checked are recorded above; no broader source coverage is claimed.
