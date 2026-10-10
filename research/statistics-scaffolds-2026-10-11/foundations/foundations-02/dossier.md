# Foundations source dossier: point estimation, optimality, tests, and confidence sets

**Role:** foundations-02 source reader
**Scope:** point estimation and finite-sample optimality; unbiasedness; Rao–Blackwell and Lehmann–Scheffé; information bounds and regularity; testing, Neyman–Pearson and UMP tests; confidence sets, pivots, and test inversion.
**Research state:** complete; draft planning evidence only. No statistical item, page, canonical plan, or workflow was authored.

This dossier supplies source-backed content and a dependency proposal for the later scaffold author. Proposed IDs below are proposals, not authored or validated library items. The foundation-01 interface must be reconciled against its other five source dossiers before integration.

## Mathematical audit

Work over a parametric family \(\{P_\theta:\theta\in\Theta\}\) and an observed random element \(X\). Foundation-01 is assigned the model, statistic, likelihood, sufficiency, completeness, and exponential-family foundations that these results require. For a real target \(\tau(\theta)\), an estimator is a measurable statistic \(\delta(X)\); its bias is \(E_\theta\delta-\tau(\theta)\), and its squared-error risk is its mean-squared error
\[
\operatorname{MSE}_\theta(\delta)=E_\theta[(\delta-\tau(\theta))^2]
=\operatorname{Var}_\theta(\delta)+(E_\theta\delta-\tau(\theta))^2
\]
when the second moment is finite. The identity follows by expanding around \(E_\theta\delta\). It separates unbiasedness from finite-sample risk: smaller variance among unbiased estimators does not mean smaller MSE among all estimators. MIT 14.381 Lecture 5, Oxford Chapter 5, and USC STAT 713 Lecture 6 give finite-sample examples. The normal variance estimator with divisor \(n\) is biased but has lower MSE than the unbiased divisor-\((n-1)\) estimator for \(n\ge2\); no general ordering by bias or variance exists.

For Rao–Blackwell, let \(T(X)\) be sufficient and let \(\widetilde\tau\) be unbiased with finite variance for every \(\theta\). Then
\[
\tau^*(T)=E_\theta[\widetilde\tau\mid T]
\]
has a version that is a function of \(T\) alone and independent of \(\theta\), is unbiased, and has no larger variance. Sufficiency makes the conditional law of \(X\) given \(T\) independent of \(\theta\), which makes the conditional expectation an estimator rather than an expression involving the unknown parameter. The tower property proves unbiasedness. The total-variance identity gives
\[
\operatorname{Var}_\theta(\widetilde\tau)
=\operatorname{Var}_\theta(\tau^*(T))
+E_\theta[\operatorname{Var}_\theta(\widetilde\tau\mid T)].
\]
This proves variance reduction; for squared-error risk the same identity holds after centering at \(\tau(\theta)\), so conditional expectation also reduces MSE without requiring unbiasedness. The general statement needs finite second moments for variance/MSE claims and a statistic space for which the conditional expectation can be represented as a measurable function of \(T\). The proposed A item should state the usual standard-Borel/dominated-model convention or explicitly cite the Doob–Dynkin/sufficiency interface.

If \(T\) is complete and sufficient and \(\tau(\theta)\) is estimable, the Lehmann–Scheffé result says that any unbiased finite-variance function \(h(T)\) of \(T\) is the unique UMVU estimator, up to equality almost surely under every \(P_\theta\). Equivalently, Rao–Blackwellizing any finite-variance unbiased estimator gives that UMVU estimator. For any other unbiased \(U\), sufficiency makes \(E_\theta[U\mid T]\) a function of \(T\); completeness applied to the difference between two unbiased functions of \(T\) makes them equal almost surely; Rao–Blackwell then gives \(\operatorname{Var}(h(T))\le\operatorname{Var}(U)\). Completeness is not optional, and a complete sufficient statistic need not exist. Oxford gives the full proof; USC’s annotated notes independently show the uniqueness step and the Rao–Blackwell variance argument. UW–Madison confirms the theorem statement and examples.

For a scalar parameter \(\theta\) in an open interval, the finite-sample Cramér–Rao inequality applies to a dominated family with a common support and sufficiently regular densities or mass functions. A standard sufficient setup is: \(p_\theta(x)\) is differentiable in \(\theta\); the support does not depend on \(\theta\); differentiation can pass through \(\int p_\theta=1\) and through \(E_\theta T\) for the statistic under study; the score \(S_\theta=\partial_\theta\log p_\theta(X)\) and the estimator have finite second moments; and \(0<I(\theta)=E_\theta S_\theta^2<\infty\). These assumptions give \(E_\theta S_\theta=0\) and
\[
\frac{d}{d\theta}E_\theta T=\operatorname{Cov}_\theta(T,S_\theta).
\]
Thus, if \(E_\theta T=\psi(\theta)\),
\[
\operatorname{Var}_\theta(T)\ge \frac{\psi'(\theta)^2}{I(\theta)}.
\]
Equality holds exactly when \(T-\psi(\theta)=\psi'(\theta)S_\theta/I(\theta)\) almost surely. For iid observations information adds, \(I_n(\theta)=nI_1(\theta)\). In a regular vector model with nonsingular information matrix \(I(\theta)\), an unbiased vector estimator of \(g(\theta)\) satisfies the covariance-matrix bound
\[
\operatorname{Cov}_\theta(T)\succeq Dg(\theta)\,I(\theta)^{-1}Dg(\theta)^\mathsf{T}.
\]
For a biased estimator, the scalar derivative form uses \(\psi(\theta)=E_\theta T\); the variance bound alone is not an MSE bound unless the squared bias is then added. Attaining the CRLB is a special equality case, not a guarantee that an efficient estimator exists.

The common-support condition matters. For iid \(U(0,\theta)\), the formal score calculation \(I_n(\theta)=n/\theta^2\) cannot be used with the regular CRLB because the support depends on \(\theta\). The unbiased estimator \((n+1)X_{(n)}/n\) has variance \(\theta^2/[n(n+2)]\), below the invalid naive bound \(\theta^2/n\). This is a counterexample to omitting regularity, not a counterexample to the properly stated theorem. A second exact example is Bernoulli sampling, where \(\bar X\) attains the bound for \(p\).

For tests, represent a possibly randomized test by a measurable rejection probability \(\phi(X)\in[0,1]\). Its power function is \(\beta(\theta)=E_\theta\phi(X)\), its size is \(\sup_{\theta\in\Theta_0}\beta(\theta)\), and it has level \(\alpha\) if this size is at most \(\alpha\). For simple \(H_0:P_0\) against simple \(H_1:P_1\), the Neyman–Pearson test rejects for large likelihood ratio \(p_1(X)/p_0(X)\). If the desired size falls inside an atom of the likelihood ratio, randomize on the threshold to reach it. For a test \(\phi^*\) with \(E_0\phi^*=\alpha\), any other test \(\phi\) with \(E_0\phi\le\alpha\) satisfies
\[
E_1(\phi^*-\phi)-cE_0(\phi^*-\phi)
=\int(\phi^*-\phi)(p_1-cp_0)\,d\mu\ge0,
\]
by the threshold construction. Hence \(E_1\phi^*\ge E_1\phi\). The same sign check must accompany the likelihood-ratio convention; replacing \(p_1/p_0\) by its reciprocal reverses the threshold direction.

UMP means pointwise maximum power over every alternative parameter value among the level-\(\alpha\) class. It need not exist for composite alternatives. If a scalar-parameter family has monotone likelihood ratio in a one-dimensional sufficient statistic \(T\), then the Karlin–Rubin theorem gives an upper-tail UMP test for \(H_0:\theta\le\theta_0\) versus \(H_1:\theta>\theta_0\), and a lower-tail UMP test for the reversed one-sided hypotheses. Choose a critical value at the boundary \(\theta_0\); randomize at equality if \(T\) has an atom. The proof applies Neyman–Pearson at the boundary against each fixed alternative; MLR makes the most-powerful critical region the same threshold region for every alternative, and monotonicity makes the boundary the worst-case null value. A one-parameter exponential family with increasing natural parameter has MLR in its natural statistic. For a two-sided normal-mean alternative, the most-powerful tests against positive and negative point alternatives have opposite tails, so a UMP test over the whole two-sided alternative generally does not exist.

A confidence set \(C(X)\subseteq\Theta\) has coverage function \(P_\theta\{\theta\in C(X)\}\); its confidence level is the infimum of coverage over \(\Theta\). A level-\(\alpha\) test \(\phi_{\theta_0}\) of \(H_0:\theta=\theta_0\) for each \(\theta_0\) yields the confidence set
\[
C(X)=\{\theta_0:\phi_{\theta_0}(X)=0\},
\]
whose coverage is at least \(1-\alpha\), because omission of the true value is exactly rejection of its null. A pivot \(Q(X;\theta)\) has a distribution not depending on \(\theta\); if \(A\) is chosen with \(P_\theta\{Q(X;\theta)\in A\}\ge1-\alpha\), then \(\{\theta:Q(X;\theta)\in A\}\) is a confidence set. It may be disconnected or non-interval; monotone scalar inversion often gives an interval. Discreteness may make coverage conservative. A realized frequentist interval is not a posterior probability statement about the fixed parameter. If a test family uses randomization, the inverted set must include the auxiliary randomization in its experiment or its stated coverage must account for randomized acceptance.

## Proposed A/B scaffold inventory

All IDs in this table are stable proposals only. Each A is intended as a reusable supplier; each B is an example or counterexample item and is not proposed as a cross-page supplier.

| Pair | Proposed A supplier and purpose | Proposed B example | Essential statement and hypotheses | Proof route and sources |
|---|---|---|---|---|
| F2-P01 | A: def-point-estimators-bias-mse-and-finite-sample-risk. Define estimator of a target, estimability, bias, unbiasedness, variance and squared-error MSE; state the bias-variance identity and distinguish pointwise/uniform comparison. | B: ex-finite-sample-mse-and-unbiasedness-tradeoff. Compare normal variance estimators with divisors n and n−1; optionally show an unbiased estimator need not exist for a target such as 1/p in a Bernoulli model. | For finite second moment, MSE = variance + squared bias. UMVU optimality is a comparison only within unbiased estimators; lower variance in that class does not imply lower MSE among all estimators. | Expand the centered square. Source: MIT 14.381 L5 pp. 1–3; Oxford Ch. 5 p. 30; USC Lec. 6 slides 2–7. Existing probability supplies: expectation and variance definitions/identities. |
| F2-P02 | A: thm-rao-blackwell-conditioning-on-a-sufficient-statistic. State unbiased and squared-error versions, finite-second-moment hypothesis, and parameter-free conditional estimator. | B: ex-rao-blackwell-bernoulli-and-poisson. Start from X1 in Bernoulli sampling or the sample variance in a Poisson model and condition on the sufficient statistic. | If T is sufficient and Eθ(δ²)<∞, δ*(T)=Eθ(δ|T) is parameter-free, preserves the mean, and has no larger variance; the squared-error risk also decreases. | Sufficiency removes θ from the conditional law; tower property preserves expectation; total variance or L2 projection proves the inequality. Source: Oxford Thm. 6.1 and proof, PDF pp. 35–36; MIT 18.443 Lecture 12 pp. 47–48; USC Lec. 6 slide 8/proof annotation PDF pp. 9–10. |
| F2-P03 | A: thm-lehmann-scheffe-complete-sufficient-umvue. State existence/finite variance and uniqueness up to modelwise almost-sure equality. | B: ex-lehmann-scheffe-uniform-and-poisson-estimators. Use the corrected maximum for U(0,θ), the sample sum for Poisson functionals, and an incomplete-sufficiency warning. | If T is complete sufficient and an unbiased finite-variance estimator of τ(θ) exists, its Rao–Blackwellization is the unique UMVU estimator. Equivalently any unbiased h(T) is UMVU. | Rao–Blackwellize any competing unbiased U; completeness makes its unbiased function of T equal to the candidate; variance reduction then proves optimality. Source: Oxford Thm. 6.5 and proof, PDF p. 39; USC Lec. 6 slides 11–12/proof annotation PDF pp. 15–16; Shao STAT 709 Lecture 15 Thm. 3.1, PDF p. 3, plus examples. Foundation-01 must supply the definitions/results for sufficiency and completeness. |
| F2-P04 | A: thm-fisher-information-and-cramer-rao-bound-under-regularity. Define score and information, state scalar and vector bounds, iid additivity, bias form, and equality condition. | B: ex-cramer-rao-attainment-and-support-failure. Bernoulli or normal mean attains the bound; the Uniform endpoint estimator demonstrates failure of a naive bound when support depends on θ. | Common support, open parameter set, differentiability, derivative/interchange domination for both normalization and estimator mean, finite positive information, and finite estimator variance are explicit prerequisites. For scalar T with mean ψ(θ), Var(T)≥ψ′²/I. | Differentiate EθT to get Cov(T,score)=ψ′; Cauchy–Schwarz gives the scalar bound. Equality is linear dependence of centered T and score. Vector proof uses the score covariance matrix and Loewner order. Source: Oxford Ch. 3, PDF pp. 22–24, and Thms. 5.3/5.9, PDF pp. 30–34; MIT 18.655 Lecture 13, PDF pp. 6–19; MIT 14.381 L6, especially PDF pp. 5–6, with its numeric typo corrected in the dossier. |
| F2-P05 | A: def-tests-size-level-power-and-randomization. Define simple/composite hypotheses, test function, Type I error, size, level and power using a single rejection convention. | B: ex-size-power-and-level-for-simple-and-composite-nulls. Give a simple point-null and a composite null example and identify the supremum. | A randomized test is φ(x)∈[0,1]; β(θ)=Eθφ; size is sup over Θ0; level α means size≤α. | Definitions and direct probability calculations. Source: Oxford Ch. 13, PDF pp. 77–78; MIT 14.381 L8 pp. 1–4; USC Lec. 10 slides 2–6/PDF pp. 2–7. |
| F2-P06 | A: thm-neyman-pearson-most-powerful-test. State the likelihood-ratio threshold and randomized tie case. | B: ex-randomized-neyman-pearson-discrete-test. A Bernoulli two-simple-hypothesis example where the level falls inside a likelihood-ratio atom. | Among tests with size≤α, reject for large p1/p0; choose threshold and boundary randomization to attain α when desired. State the common dominating measure and null/alternative orientation. | Integrate the nonnegative product (φ*−φ)(p1−c p0); use E0φ*=α≥E0φ to conclude E1φ*≥E1φ. Source: Oxford Thm. 13.2, PDF p. 78; USC Lec. 11 slide 6 and proof annotations PDF pp. 7–9; MIT 14.381 L9 pp. 3–4. |
| F2-P07 | A: thm-karlin-rubin-ump-one-sided-under-mlr. State MLR in a one-dimensional sufficient statistic and both one-sided tail orientations, with boundary randomization. | B: ex-one-sided-ump-and-two-sided-no-ump. Use a normal mean with known variance for each one-sided test and contrast with the two-sided no-UMP case. | For increasing MLR, H0:θ≤θ0 vs θ>θ0 uses T>c; H0:θ≥θ0 vs θ<θ0 uses T<c. A UMP test need not exist for a two-sided composite alternative. | Apply NP at θ0 against each fixed alternative; MLR makes the threshold independent of the alternative; monotone power puts worst-case null size at θ0. Source: Oxford Thm. 13.5 and proof, PDF pp. 79–80; USC Lec. 11 slide 9/PDF p. 14 and examples pp. 15–26. MIT 14.381 L9 Theorem 3 is not a supplier for the lower-tail orientation because its statement has a sign error. |
| F2-P08 | A: thm-confidence-sets-from-pivots-and-test-inversion. Define coverage/level, confidence level, pivot, and the accepted-null set. | B: ex-exact-normal-and-uniform-pivot-confidence-sets. Include the exact normal t interval and the U(0,θ) endpoint pivot; note the latter has parameter-dependent support but a valid pivot. | A pointwise level-α test family yields confidence level at least 1−α; a parameter-free pivot and acceptance set yield the same coverage bound. Intervals are a special case of sets, not guaranteed by inversion. | For inversion, the event θ∉C is rejection of the true θ-null. For pivots, substitute the true θ into C and use the pivot probability. Source: MIT 14.381 L11 pp. 1–3; MIT 18.443 Lecture 17 pp. 63–66; USC Lec. 14 slides 3–12/PDF pp. 3–24. The pivot theorem in USC is an exercise; its proof was checked by the defining event identity. |

## Topic-to-pair and source coverage

| Assigned topic | Proposed coverage | Primary anchors | Independent cross-check |
|---|---|---|---|
| Point estimators, bias, estimability, finite-sample MSE | F2-P01 | MIT 14.381 L5 pp. 1–3; Oxford Ch. 5 p. 30 | USC STAT 713 Lec. 6 pp. 2–8 |
| Unbiasedness and finite-sample best unbiased estimation | F2-P01, F2-P03 | Oxford Ch. 5 pp. 30–34; Oxford Ch. 6 pp. 35–40 | USC Lec. 6 pp. 8–16; Shao Lecture 15 pp. 1–11 |
| Rao–Blackwell theorem and risk reduction | F2-P02 | Oxford Thm. 6.1, pp. 35–36 | Panchenko Lecture 12 pp. 47–48; USC Lec. 6 pp. 9–10 |
| Lehmann–Scheffé theorem and uniqueness | F2-P03 | Oxford Thm. 6.5, p. 39 | USC Lec. 6 pp. 15–16; Shao Thm. 3.1, p. 3 |
| Score, Fisher information, regularity, scalar CRLB | F2-P04 | Oxford Ch. 3 pp. 22–24; Ch. 5 Thm. 5.3 pp. 30–31 | MIT 18.655 pp. 6–13; MIT 14.381 L6 pp. 3–6 |
| Multivariate information bound and equality cases | F2-P04 | Oxford Thm. 5.9, p. 33 | MIT 18.655 pp. 16–19 |
| Regularity failure and unattained bound | F2-P04 | Oxford Ch. 5 pp. 31–34 | MIT 14.381 L6 p. 6; Panchenko Lecture 6 pp. 25–29 |
| Testing definitions, power, size, level and randomization | F2-P05 | Oxford Ch. 13 pp. 77–78 | MIT 14.381 L8 pp. 1–4; USC Lec. 10 pp. 2–7 |
| Neyman–Pearson most-powerful test | F2-P06 | Oxford Thm. 13.2 p. 78 | USC Lec. 11 pp. 7–9; MIT 14.381 L9 pp. 3–4 |
| UMP, MLR and one-sided alternatives | F2-P07 | Oxford Thm. 13.5 pp. 79–80 | USC Lec. 11 p. 14 and examples; Panchenko Lectures 21–22 pp. 81–88 |
| Confidence sets and coverage | F2-P08 | MIT 14.381 L11 p. 1 | USC Lec. 14 pp. 3–4 |
| Pivots and exact confidence construction | F2-P08 | USC Lec. 14 pp. 6, 9 | Panchenko Lecture 17 pp. 63–66; MIT 14.381 L11 pp. 2–3 |
| Test inversion and test/interval duality | F2-P08 | MIT 14.381 L11 pp. 1–2 | USC Lec. 14 p. 20 |

## Existing library supplier inspection

A targeted search across current item bodies and library pages for Rao–Blackwell, Lehmann–Scheffé, Cramér–Rao, Fisher information, Neyman–Pearson, UMP, confidence sets/intervals, pivots and unbiased estimators found no existing statistical theorem or statistical inference page. The two relevant existing pages are general probability suppliers, not statistical inference claims:

| Existing page or item body read | Exact reusable interface | Limitation for this scaffold |
|---|---|---|
| probability-spaces-random-variables-and-expectation page | General probability-space objects, laws, CDFs, expectation, moments, variance/covariance, Holder and random-variable Cauchy–Schwarz. | Does not define statistical models, estimators, tests, information, or confidence coverage. |
| conditional-expectation page | Conditional expectation construction, uniqueness, tower property, L2 projection, conditional-variance decomposition. | Does not identify sufficiency with a parameter-free conditional law; that statistical interface is missing. |
| def-random-element-and-real-random-variable; def-law-or-distribution-of-a-random-element; def-identically-distributed-and-iid-random-variables | Measurable random data, laws, and iid terminology. | No sampling-model/parameter family or statistic definition. |
| def-expectation-of-a-nonnegative-or-integrable-random-variable; def-moments-variance-and-covariance; lem-variance-and-covariance-identities-for-random-variables | Integrability, finite moments, variance/covariance identities needed in the risk proofs. | Does not establish statistical optimality. |
| cor-cauchy-schwarz-for-random-variables; cor-cauchy-schwarz-inequality-for-l-two | Cauchy–Schwarz for the score/estimator covariance argument. | Equality statements concern absolute-value proportionality in the generic Holder result; the signed score equality condition should be stated and proved in the CRLB item. |
| thm-independent-random-elements-have-product-joint-law; thm-expectation-of-products-of-independent-random-variables | General iid/product-law support for sample examples. | Does not supply likelihood or sufficiency results. |
| def-conditional-expectation-given-a-sigma-algebra; thm-conditional-expectation-exists-by-radon-nikodym; def-conditional-expectation-as-an-ae-class; thm-conditional-expectation-is-the-l2-orthogonal-projection; thm-tower-property-of-conditional-expectation; cor-conditional-variance-decomposition | Conditional means, tower property and exact total-variance decomposition used in a general Rao–Blackwell proof. | The current general conditional-expectation supplier closure carries the repository’s explicit Axiom-of-Choice assumption. The scaffold can either state that inherited assumption or make a finite/discrete proof route explicit. |
| def-cumulative-distribution-function-of-a-random-variable | CDF notation for pivot and exact-coverage examples. | Does not define a pivot or confidence set. |

The two page bodies and every item body listed above were inspected rather than inferred from names. A dependency walk from the selected probability suppliers found 660 unique transitive item IDs, with no unresolved dependency IDs. The closure contains general probability, integration, measure, and foundational mathematics; it exposes no dependency on categories 2–4. The conditional-expectation path does include def-axiom-of-choice. This dependency walk checks metadata closure only; it is not an independent audit of the 660 proofs.

The smallest missing prerequisites are statistical, not general probability: model/parameter family, statistic/estimator, likelihood and domination, sufficiency, completeness, and the one-parameter exponential-family/MLR interface. Foundation-01 is assigned those topics and must supply the exact item IDs. F2-P02/P03 should depend on its sufficiency/completeness suppliers; F2-P04 should depend on its dominated model/likelihood interfaces; F2-P07 should depend on its exponential-family result or state MLR directly. The local probability suppliers above should be reused for their exact mathematical roles.

## Dependency order and category boundary

Proposed order is F2-P01 first; then F2-P02 and F2-P04; then F2-P03 after F2-P02; then F2-P05; F2-P06 after F2-P05; F2-P07 after F2-P06 and the foundation-01 MLR/exponential-family supplier; and F2-P08 after F2-P05. Foundation-01 model, statistic, likelihood, sufficiency, completeness, and exponential-family items are prerequisite context.

No claim in this dossier uses models/experiments, Bayesian/computational statistics, asymptotic inference, empirical processes, machine learning, adaptive decisions, or survey-design items as a supplier. Several inspected course PDFs contain those topics; they were explicitly excluded from this scaffold. The proposed A items form the reusable foundation for later categories. B items remain local illustrations and counterexamples. The models/experiments scaffold author must reconcile its provisional category-1 interface against these proposed suppliers before completion.

## Proof gaps, source cautions, and unresolved scope

The mathematical results above have independent proof routes in full-text sources. The following source defects and limitations affect what should be copied into an eventual item:

1. MIT 18.443 omits a sufficiently explicit common-support/differentiation hypothesis in its Rao-Cramer theorem statement. Its proof differentiates the integral of a density; use the explicit regularity statements in Oxford Chapter 3 and MIT 18.655.
2. MIT 18.443 has inconsistent Type-I/Type-II and decision conventions in Lectures 18–20. Its RB proof, CR derivation under corrected regularity, exact normal CI calculations, and MLR proof were still independently checked; use Oxford/USC/MIT 14.381 for test definitions and NP.
3. MIT 14.381 Lecture 6 has a numerical typo in the Uniform endpoint counterexample: it prints the naive n-observation reciprocal information as theta-squared divided by n-squared, but with one-observation information 1/theta-squared the correct reciprocal is theta-squared divided by n. The example remains a valid regularity counterexample, since the support depends on theta and the unbiased endpoint estimator variance theta-squared over n(n+2) is below the correct naive theta-squared over n.
4. MIT 14.381 Lecture 9 Theorem 3 gives the wrong rejection-tail sign for its lower-tail alternative. Its proof, the Oxford Karlin–Rubin theorem, and USC Lecture 11 agree that increasing MLR gives a lower-tail rejection rule for H0:theta at least theta0 versus H1:theta less than theta0.
5. USC’s annotated slide PDFs say they are instructional aids, not expositions. Their handwritten pages corroborate the short proof sketches; they do not replace Oxford’s complete proofs. The USC handwritten CRLB note was not used because fitz extraction is too corrupted to count as reading.
6. The USC pivotal-set and inversion statements are exercises rather than complete proofs. Both short event-set proofs were checked independently; the MIT 14.381 test-inversion note gives the full coverage argument.
7. Oxford’s one-sided UMP theorem assumes a continuous statistic and therefore avoids randomization. The scaffold should state the randomized boundary version, checked in USC and MIT 18.443.
8. The Oxford course notes give the two-sided UMP-unbiased theorem statement later in Chapter 13 but explicitly omit its full proof. UMPU optimality is not a required result in this assignment and is not proposed as a supplier.
9. One public University of Washington STAT 513 notes PDF was obtained as an alternative cross-check but yielded only 940 searchable words from 188 pages. It was not read or used; the failure is recorded in sources.json. No theorem or proof is inferred from that acquisition.

No unresolved mathematical gap remains for the assigned finite-sample core after imposing the stated regularity and moment hypotheses. The MLR UMP conclusion is restricted to the one-sided scalar setting. No proof of a general UMPU theorem, a general shortest-confidence-set result, or any asymptotic inference result is claimed here.
