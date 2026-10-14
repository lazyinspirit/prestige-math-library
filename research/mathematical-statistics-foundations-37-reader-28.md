# Step 3a reader report — batch 28

Run: mathematical-statistics-foundations-37  
Batch: 28  
Assignment: Semiparametric Models and Tangent Spaces and its examples companion

## Page verdicts

- semiparametric-models-and-tangent-spaces — pass. Its nine A-items match the manifest. The summary distinguishes tangent sets from their closed linear span, states the Countable Choice use for the Hilbert-space result, and keeps the Axiom-of-Choice density convention separate.
- semiparametric-models-and-tangent-spaces-examples — pass. Its three examples match the manifest and its summary describes their conclusions accurately.

## Opened inventory

The assigned pages and all twelve assigned items were opened. The manifest item inventory is:

1. def-mean-zero-square-integrable-space; def-dqm-submodel-through-a-law.
2. thm-mean-zero-square-integrable-space-is-hilbert; thm-dqm-score-mean-zero.
3. def-tangent-set; ex-regular-bernoulli-submodel-dqm-score.
4. def-tangent-space.
5. thm-tangent-space-is-closed-linear-subspace; ex-bounded-scores-generate-unrestricted-tangent-space; ex-boundary-score-cone-and-linear-tangent-space.
6. def-nuisance-tangent-space; def-nuisance-tangent-orthogonal-complement.

The page prerequisites dominated-experiments-likelihood-and-sufficiency, local-asymptotic-normality-contiguity-and-efficiency, and hilbert-space-geometry-and-riesz-representation were opened. For the QMD path-interface check, I also opened def-qmd-path and its home page likelihood-asymptotics-wald-score-and-likelihood-ratio.

The distinct direct item dependencies opened were cor-cauchy-schwarz-inequality-for-l-two, def-axiom-of-choice, def-countable-choice, def-counting-measure, def-dominated-statistical-experiment, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-finite-sigma-finite-and-semifinite-measures, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-likelihood-density, def-linear-subspace, def-measurable-space, def-orthogonality-and-orthogonal-complement, def-probability-measure, def-sigma-algebra, lem-expectation-is-independent-of-the-ae-representative, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, lem-orthogonal-complement-is-closed, lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative, prop-counting-measure-is-a-measure, thm-cauchy-schwarz-in-an-inner-product-space, thm-dominated-convergence, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, thm-real-power-continuity-and-derivatives, and thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space.

For the cited dependency arguments I also opened def-statistical-experiment, def-measure, def-absolutely-continuous-with-respect-to-a-positive-measure, def-radon-nikodym-derivative, def-total-variation-of-a-signed-or-complex-measure, def-calligraphic-l-p-on-a-measure-space, def-real-and-complex-inner-product-space, thm-riesz-fischer-completeness-of-l-p, and def-measure-with-density.

## Review and evidence

- The mean-zero definition uses quotient L²(P) correctly: Cauchy–Schwarz on a probability space makes Pf finite, and the cited almost-everywhere invariance result makes it representative-independent. The Hilbert-space theorem identifies L²₀(P) with the kernel of the bounded functional f ↦ ⟨f,1⟩P. The closed-kernel and inherited-completeness arguments follow under Countable Choice. The published L² Hilbert supplier and its Riesz–Fischer completeness dependency use the same choice assumption.
- The DQM definition is one-sided, requires one supplied common sigma-finite dominator, and assumes supplied path density versions. It does not assume score centering. In thm-dqm-score-mean-zero, probability-density normalization gives unit L²(μ) norms; the squared-norm expansion proves Ps = 0, and subtraction of two DQM expansions proves uniqueness as a P-a.e. class. For the product s√p, a measurable representative s̃ gives an L²(μ) class with squared norm P(|s̃|²). This identity follows by extending the RN formula from indicators to nonnegative simple functions and then to |s̃|². Representatives agreeing P-a.e. give the same weighted L²(μ) class.
- The current batch-4 suppliers def-dominated-statistical-experiment, def-likelihood-density, and lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative supply the common-dominance and nonnegative finite-valued density interfaces used by DQM under the explicit AC convention. No interface gap was found. These suppliers remain draft; this is not global acceptance of batch 4.
- The QMD definition in def-qmd-path uses the same supplied common dominator and densities. For each fixed direction v, h = tv gives scalar score vᵀsθ₀ and remainder o(t), compatible with the assigned one-sided convention. The scalar definition also admits paths that do not arise from a vector QMD model. The boundary example correctly separates nonnegative directions from negative directions.
- The tangent-set definition uses scores of designated allowed paths, with uniqueness supplied by the DQM theorem. The tangent-space definition takes the closed real linear span, not the tangent set itself. Its theorem proves linearity of the finite span, closedness and linearity of the closure, and completeness inherited from L²₀(P).
- The bounded-score example normalizes with cₜ = P(1 + ts/2)² = 1 + t²Ps²/4. Its square-root remainder is O(t²). Centered truncations converge in L²(P) by dominated convergence and Cauchy–Schwarz. The Bernoulli and boundary examples compute the densities, scores, means, and second moments correctly; the boundary proof identifies exactly the nonnegative score ray and its full one-dimensional real span.
- The nuisance tangent definition requires an existing zero right derivative of the specified finite-dimensional target along designated nuisance paths. The orthogonal-complement definition explicitly uses L²₀(P) as its ambient Hilbert space, so closedness follows from the cited orthogonal-complement lemma. Kennedy §4 gives the complement in L²(P); the local item defines the relative complement inside L²₀(P), and does not attribute the identical ambient-space formula to Kennedy.
- The current proof-contract file research/mathematical-statistics-foundations-37-batch-28.proof-contracts.json covers the same twelve items. Its six proof-bearing contract entries have derivation rows matching the current numbered steps and cite facts matching the displayed tags. No contract mismatch was found.

I checked the cited sources directly: A. W. van der Vaart, Semiparametric Statistics, Lecture 1 §1.2, printed pp. 10–12, especially Definition 1.6 and Lemma 1.8 on p. 10; URL: https://sites.stat.washington.edu/jaw/COURSES/EPWG/stflour.pdf. Definition 1.6 gives the square-root-density DQM expansion; Lemma 1.8 states every DQM score is mean-zero with finite second moment. I also checked Edward H. Kennedy, “Semiparametric theory,” arXiv:1709.06418v1, §4, pp. 4–6; URL: https://arxiv.org/pdf/1709.06418. It uses the real L²(P) score space, the closed linear span of submodel scores, and zero target derivative for nuisance directions. The local carriers supply their own proofs and state their common-dominator and ambient-space conventions explicitly.

## Edits and uneditable defects

No item or page prose was changed. A proposed formatting-only patch did not apply because its expected source context did not match; it left the carrier unchanged. No confirmed defect remained in an assigned carrier or in a dependency needed for these claims. No uneditable defect is reported.

## Checks and blockers

No material item repair was made, so reflow, precheck, and proof-layout were not run. There is no mathematical blocker.

## Coverage note

All assigned items, assigned pages, direct item dependencies, and the additional supporting items listed above were opened. I did not audit every transitive dependency of those suppliers. The initial reads of the two base assigned definitions began before the current-run direct supplier mapping was complete. After opening the suppliers, I re-evaluated the captured consumer text without rereading files, so the final dependency reasoning used supplier evidence but the initial file-opening order was not strictly supplier-first. The cited PDF text extraction contains some OCR artifacts; the relevant statements and locators were legible.
