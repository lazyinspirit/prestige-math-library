# Reader report — batch 11

Run: physics-cm-qm-gr-79-2026-10-11  
Role: reader (reader-11)  
Batch: 11

## Opened inventory

Assigned pages:

| Page ID | Kind | Verdict |
|---|---|---|
| cm-math-evidence | A | Reviewed; summary matches the assigned mathematics, with no remaining page defect. |
| cm-math-evidence-examples | B | Reviewed; computations and nonmeasurement qualifications match the examples, with no remaining page defect. |

Assigned items reviewed in supplier-first order within the batch:

- A page: def-cm-measurement-model, def-cm-calibration-rule, def-cm-iid-sampling-model, lem-cm-finite-iid-sample-mean-bound, def-cm-covariance-matrix-of-a-random-vector, lem-cm-linearized-propagation-of-covariance, lem-cm-uniform-second-order-remainder-bound, cor-cm-linearization-error-bounds, def-cm-statistical-test-and-size, def-cm-confidence-set-and-coverage, def-cm-likelihood-function, rem-cm-inference-and-uncertainty-scope.
- B page: ex-cm-math-evidence-pendulum-propagation, ex-cm-math-evidence-exact-versus-linear-variance, ex-cm-math-evidence-chebyshev-sample-mean-check, ex-cm-math-evidence-remainder-bound-check, cex-cm-math-evidence-confidence-coverage-is-not-posterior, cex-cm-math-evidence-propagation-is-not-exact-for-nonlinear-maps.

I inspected the exact Definition/Statement sections of the 52 direct external mathematical suppliers declared by these items. Their IDs are:

cor-additivity-of-the-nonnegative-lebesgue-integral, cor-chebyshev-inequality-for-random-variables, cor-expectation-linearity-monotonicity-and-modulus-bound, cor-iid-finite-variance-weak-law, def-borel-sigma-algebra, def-ck-euclidean-maps-and-diffeomorphisms, def-complete-ordered-field, def-conditional-probability, def-convex-subset-of-euclidean-space, def-euclidean-inner-product, def-euclidean-linear-map, def-expectation-on-a-finite-probability-space, def-finite-probability-space-and-event, def-hessian-and-euclidean-critical-point, def-identically-distributed-and-iid-random-variables, def-independence-of-finite-random-variables, def-infimum, def-integrable-real-and-complex-functions-and-their-integrals, def-jacobian-matrix-and-gradient, def-matrix-space, def-measurable-function-between-measurable-spaces, def-measurable-space, def-measure, def-measure-null-set-and-almost-everywhere, def-measure-with-density, def-moments-variance-and-covariance, def-multivariable-taylor-polynomial, def-nonnegative-lebesgue-integral, def-operator-norm-on-a-finite-dimensional-inner-product-space, def-probability-measure, def-random-element-and-real-random-variable, def-sigma-algebra, def-total-derivative-in-euclidean-space, def-uniform-finite-probability-space, lem-derivative-of-a-power, lem-sup-unique, lem-variance-and-covariance-identities-for-random-variables, prop-closure-properties-of-measurable-functions-used-by-the-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-algebra-of-derivatives, thm-cauchy-schwarz-in-an-inner-product-space, thm-clairaut-schwarz-mixed-partials, thm-continuous-partial-derivatives-imply-total-differentiability, thm-continuous-preimages-of-borel-sets-are-borel, thm-coordinatewise-measurability-into-r-n, thm-factorization-of-expectations-for-independent-variables, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces, thm-infimum-property, thm-matrix-multiplication-laws, thm-multivariable-taylor-formula-with-lagrange-remainder, thm-operator-norm-is-the-largest-singular-value, thm-the-lebesgue-integral-respects-almost-everywhere-equality.

I also inspected the multi-index regularity definition needed for the Hessian argument and relevant direct-consumer sections in batch 18: def-ck-and-multi-index-notation-in-several-variables, def-cm18-sampling-model, ex-cm18-uniform-motion-sampling-check, ex-cm18-frame-change-of-an-observation-model, and ex-cm18-pendulum-calibration-proposal. Their current formulas are compatible with the clarified one-based statistical labels and matrix-operator convention; no out-of-batch files were edited.

## Repairs and evidence

- def-cm-measurement-model: the input map had codomain $\mathbb R^m$ while $f$ has domain $U$. I introduced the explicit corestriction $X_U:\Omega\to U$, then showed it is measurable for the relative Borel sigma-algebra and that $Y=f\circ X_U$ is a random element by the preimage calculation. The model remains a formal mathematical structure with no measurement claim.
- def-cm-covariance-matrix-of-a-random-vector: corrected the false phrase that $X$ “takes values in a probability space”; the probability space is the domain of $X$. The earlier bound on $|X_i-\mu_i|$ established integrability but did not establish square-integrability, so I added $(X_i-\mu_i)^2\le2X_i^2+2\mu_i^2$. I corrected the $Y/X$ coordinate typo, made the one-based statistical labels map explicitly to the root library’s zero-based coordinates and matrix entries, defined the quadratic-form and positive-(semi)definite conventions, and proved the zero-variance/almost-sure-constant characterization using Chebyshev and almost-everywhere invariance of the integral.
- lem-cm-finite-iid-sample-mean-bound: the supplier defines its family as $Y_0,\ldots,Y_{n-1}$, while the lemma used $Y_1,\ldots,Y_n$ without mapping them. The Statement now explicitly defines the reindexing $Y_i^{\mathrm{lemma}}=Y_{i-1}^{\mathrm{supplier}}$; the sample-mean formula is unchanged.
- lem-cm-linearized-propagation-of-covariance: stated the Jacobian’s one-based statistical labels as the root entries $\partial_{j-1}h_{i-1}$. Step 1.1 used covariance of $T_i(X)$ before establishing those variables were square-integrable; it now proves this by Cauchy–Schwarz applied to the finite linear part, followed by $(u+v)^2\le2u^2+2v^2$. The measurability fact now explicitly includes continuity of the coordinate projections.
- lem-cm-uniform-second-order-remainder-bound: the Taylor remainder’s multi-index sum was identified with a Hessian quadratic form without establishing mixed-partial symmetry. The exact C² Clairaut–Schwarz supplier is now a prerequisite and supports Fact L3. I corrected the Taylor-polynomial sum to the published zero-based coordinate convention. The matrix norm is now defined as the operator norm of the induced map $v\mapsto Mv$ on Euclidean $\mathbb R^m$, rather than as an operator norm on the matrix space; the linearity and existence of the defining maximum are supplied explicitly.
- def-cm-likelihood-function: made the target measurable space for the density $p_\theta$ explicit and defined the $\log(+\infty)=+\infty$ case required by the stated extended-valued likelihood.
- def-cm-statistical-test-and-size: its Wasserman reference incorrectly included Definition 10.4 as a general test definition. The available table of contents identifies §10.4 as Pearson’s $\chi^2$ test for multinomial data; the source entry now cites Definition 10.1 and §10.1 for power, size, and rejection regions. NIST §7.1.3 remains as a second reference.
- ex-cm-math-evidence-pendulum-propagation: the JCGM citation incorrectly claimed Annex H.5.2 was a pendulum example. In JCGM 100:2008, Annex H.5 is analysis of variance; H.5.2.6 concerns the voltage-standard analysis, and the PDF search found no “pendulum” occurrence. I replaced that locator with §§5.1.2 and 5.2.2, equations (10) and (13), on first-order propagation with correlated inputs. I also cited the exact continuous-partial-derivative theorem for total differentiability, established Borel measurability, and added the repeated-derivative formulas that justify the stated $C^\infty$ regularity.
- cex-cm-math-evidence-propagation-is-not-exact-for-nonlinear-maps: the refuted nonlinear equality had been attached to lem-cm-linearized-propagation-of-covariance, whose Statement only gives the covariance of the affine linearization $T(X)$. The text now identifies the false equality as an unsupported nonlinear extension of that lemma.
- rem-cm-inference-and-uncertainty-scope: “$h$ is affine on the values of $X$” did not ensure its values there equal its tangent linearization. The sufficient condition is now stated exactly: $h(x)=h(\mu)+Dh(\mu)(x-\mu)$ for every $x\in U$.

I updated the affected records in physics-cm-qm-gr-79-2026-10-11-batch-11.proof-contracts.json for the reindexing, mixed-partial supplier, matrix-action norm, Jacobian measurability and square-integrability steps, and pendulum regularity argument. No changed item had a stale verification.judge record.

## Unedited defects and page verdicts

No confirmed defects remain unedited and there is no blocker.

cm-math-evidence (A) accurately summarizes the definitions, finite IID bound, linearization covariance, Hessian remainder and inference limitations. Its statements remain model-conditional and distinguish these mathematical structures from physical observations.

cm-math-evidence-examples (B) accurately summarizes the symbolic propagation, finite computations and two counterexamples. The item values remain explicitly mathematical; no page text reports an apparatus measurement.

## Validation and coverage notes

- Final reflow completed for all 10 changed item paths; every item was unchanged on the final reflow pass.
- Final precheck: all five changed proof-bearing items passed; the five changed definition/remark items reported 0 checked and 0 failing.
- Final proof-layout: 10 items, 23 steps, 0 defects.
- I inspected exact relevant supplier statements/definitions, not the full proofs of all 52 published mathematical suppliers. The browser could not render the cited egrcc Wasserman PDF itself; the cited locators were cross-checked against available searchable text for the work, while the local mathematical dependencies supply the deductions.
