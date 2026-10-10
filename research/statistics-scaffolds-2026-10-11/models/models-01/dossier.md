# Models source dossier 01

Commission scope: regression and generalized linear models; likelihood
applications; multivariate models, covariance and classical PCA inference;
prediction and diagnostics; hierarchical, mixed-effects and longitudinal
models. This is a source-backed proposal for prose A/B pairs, not item or page
authoring. The proposed pairs follow the integrated SME-01–SME-05 labels in
`research/plan-statistical-models-experiments-track.md`; category-1 clauses are
prerequisites only and are identified separately from existing library items.

## Main findings

The assignment is supported by several complete university lecture units and
an open-access multivariate-statistics textbook. The strongest exact
fixed-design regression source is MIT 18.443, which explicitly separates the
Gaussian coefficient coordinates from the residual coordinates by completing
the design's orthonormal columns to an orthogonal basis. That proof gives the
residual chi-square law and independence needed for exact t and F pivots. The
same course's multivariate-normal note proves orthogonal invariance by a joint
density/Jacobian calculation. The local library already supplies a
projection-based multivariate normal law and its characteristic-function
uniqueness theorem; it does not have a published explicit orthogonal-invariance
clause. The models-01 proof can derive that bridge from the existing definition.
The current foundations scaffold now includes planned MSF-35,
`gaussian-orthogonal-decomposition-and-quadratic-forms`, with explicit
orthogonal-normal, chi-square, t/F and Gaussian-linear-model bridge clauses.
SME-02 consumes that earlier A-page supplier rather than duplicating the
general invariance result.

The appropriate classical regression hypotheses are fixed design, full
column rank for the inverse formulas, and—only for the finite-sample normal,
chi-square, t and F laws—independent Gaussian errors with covariance
\(\sigma^2 I\) and \(n>p\). The Gaussian model yields normal contrasts;
orthogonal residual coordinates yield \(RSS/\sigma^2\sim\chi^2_{n-p}\)
independently; their ratio gives the exact pivots. The maximum-likelihood
variance estimate \(RSS/n\) and unbiased residual variance \(RSS/(n-p)\)
must not be conflated. Mean-response intervals and new-response prediction
intervals differ by the independent observation-noise term.

For GLMs, MIT 18.650 and CMU's independent lecture note establish the
exponential-family/link/likelihood contract and the canonical-link score and
Hessian route. A GLM MLE need not exist as a finite vector (logistic
separation is the standard counterexample); a negative-definite Hessian gives
at most one stationary maximizer, not existence. IRLS is a definition-like
Fisher-scoring iteration. Its algebraic one-step identity is separable from
any global convergence claim. Regular iid likelihood asymptotics belong to
planned category-1 MSF-15. The read GLM units do not derive deviance residuals
or justify a generic chi-square goodness-of-fit law; such a law should not be
claimed merely because software prints a residual deviance. The current source
evidence fully supports linear-model diagnostics and GLM likelihood/IRLS, and
records GLM residual-deviance details as a source gap for the integrator.

The Springer textbook gives complete real multivariate-Gaussian coverage,
sample-mean/scatter independence and covariance MLEs, a focused complete
Wishart section, and an exact Hotelling \(T^2\)-to-F treatment. A short 2021
multivariate-analysis note independently states the same exact result but
defers parts of its proof; it is a cross-check, not a substitute. For sample
covariance \(S\) with denominator \(n-1\), the one-sample null result is
\[
 T^2=n(\bar X-\mu_0)^T S^{-1}(\bar X-\mu_0),\qquad
 \frac{n-p}{p(n-1)}T^2\sim F_{p,n-p},\quad n>p.
\]
The covariance likelihood-ratio statistic and the exact trace chi-square
statistic are different procedures and must be kept distinct. PCA is first a
deterministic Rayleigh-quotient optimization; sample inference needs separate
distributional assumptions. A repeated eigenvalue determines an eigenspace,
not a unique eigenvector; no generic finite-sample confidence law for selected
components is proposed.

Duke STA610 notes supply derivations for random-intercept covariance, ICC,
ANOVA variance components, mixed-model GLS/BLUP forms, REML via error
contrasts, and longitudinal covariance patterns. Their frequentist BLUP
claims can be proved by the L2 normal equations and covariance projection; the
notes themselves do not give a complete general BLUP proof. Bayesian
posterior/empirical-Bayes interpretations, software fitting steps, EM or
variational procedures, and missing-data mechanisms are excluded. The
longitudinal covariance model states a data law; it does not make a design
missing at random or validate a scientific application.

## Topic-to-pair/source coverage

| Assigned topic | Pair coverage | Main read anchors | Independent check and limit |
|---|---|---|---|
| Scientific model contract and applicability | SME-01 | Wickham, PDF pp. 2-3; Duke Lecture 1, pp. 1-4 | These sources distinguish responses, predictors, units and clustering in examples; the A page must use MSF-01 for experiment/estimand/identifiability definitions and must not prove physical applicability. |
| Fixed-design regression, OLS, estimability and Gauss-Markov | SME-02 | MIT 18.443 regression, PDF pp. 1-4; Wickham pp. 2-6 | Both develop least squares and projection geometry. Wickham p. 6 gives the clean competing-estimator Gauss-Markov proof; rank and estimability assumptions remain explicit. |
| Exact Gaussian regression inference, prediction | SME-02 | MIT 18.443 regression, pp. 2-7; MIT multivariate normal, pp. 3-4 | MIT's QR/orthogonal-completion proof is explicit. Wickham pp. 6-7 states exact distributions but does not prove the independence bridge. Distinguish \(\hat\sigma^2_{ML}=RSS/n\) from \(s^2=RSS/(n-p)\). |
| Linear residual diagnostics | SME-02 | Wickham pp. 8, 11-12, 17 | Diagnostics are plots and investigation prompts, not assumption proofs or automatic model-validation results. |
| Exponential-family likelihood, links, logistic/Poisson regression, score, Fisher scoring | SME-03 | MIT 18.650, pp. 10-21, 23-33, 40-52 | CMU Tibshirani, pp. 1-5, independently checks family/link examples and the likelihood; CMU's inferential shortcut from the last weighted fit is not used. |
| GLM deviance and residual diagnostics | SME-03 | No fully read source in this dossier gives a complete deviance/residual treatment. MIT and CMU cover likelihood/IRLS but not deviance. | Source gap: before authoring deviance residual properties or a goodness-of-fit reference law, add and fully read an authoritative GLM-diagnostics unit. A definition from the saturated-model likelihood is possible; it does not by itself justify a chi-square approximation. |
| Multivariate normal, covariance, mean/scatter independence and Wishart | SME-04 | Springer Chapter 3, entire PDF pp. 1-87, especially pp. 55-62; Springer Chapter 5, §5.5 only, pp. 47-66 | MIT 18.443 MVN pp. 1-4 and Mukherjee Lecture 2 pp. 1-3 independently cover the basic formulas. Mukherjee's Wishart properties are mostly stated or exercises. |
| Hotelling \(T^2\), covariance null testing, likelihood applications | SME-04 | Springer Chapter 6 §6.3, pp. 20-36; §6.4, pp. 37-42 | Mukherjee Lecture 3 pp. 3-5 independently states the exact F law but defers the inverse-Wishart quadratic proof; Lecture 7 pp. 1-4 states Gaussian MLE/LRT but defers Wilks. The exact trace chi-square test is not the LR statistic. |
| PCA, explained variance and scaling | SME-04 | Springer Chapter 9, entire PDF pp. 1-43, especially pp. 2-15 | Mukherjee Lecture 8 pp. 2-4 independently checks the top eigen-direction; its second-component proof is an exercise. Local spectral theorem and Courant-Fischer provide a checked existing algebraic route. |
| Random intercepts, ICC, ANOVA variance components, REML | SME-05 | Duke Lectures 1, 3, 4; exact ranges in sources.json | Duke notes derive first/second moments and balanced ANOVA/REML relationships; boundary estimates/tests need their own hypotheses. |
| Mixed effects, GLS, BLUP, longitudinal means/covariance | SME-05 | Duke Lectures 5-7; exact ranges in sources.json | Duke Lecture 5 gives a simple scalar BLUP result and separates frequentist and Bayesian readings; Lecture 6 gives matrix formulas but mixes mathematical claims with software examples. No Bayes or computation dependency is adopted. |

## Proposed dependency-ordered A/B pairs

IDs below are integrated scaffold labels, not authored items. A is a reusable
supplier; B is an example/counterexample page and is not a cross-page
dependency.

### SME-01 — Scientific model contracts and applicability

**Proposed pages:** `statistical-models-and-estimands` /
`statistical-models-and-estimands-examples`.

**A scope.** Reuse category-1 experiment, estimand, estimator and
identifiability definitions. Add the model-specific translation from a
scientific protocol to response/covariate variables, observational units, time
origin, fixed/random/observed/latent/conditioned quantities, assumed law, and
target population. A model definition does not prove correct specification or
physical applicability. A fixed-design regression conditions on its design;
a repeated-measures model must identify the subject and visit as distinct
indices.

**B scope.** Compare technical versus biological replication and a regression
with a repeated observation unit. Include a deterministic calibration map
separately from the stochastic measurement-error law. Mark each assumption as
design controlled, empirically checkable, or scientifically untestable; do not
promote those labels into an identifiability theorem.

**Proof route and dependencies.** This is definitional bookkeeping, not a new
statistical identification result. Consume planned MSF-01 items
`def-statistical-experiment`, `def-estimand-on-a-statistical-model`,
`def-identifiability-of-an-estimand`, and
`thm-identifiability-iff-constant-on-equivalence-classes`. Existing
`def-random-element-and-real-random-variable` and
`def-law-or-distribution-of-a-random-element` supply measurable observations
and laws. Wickham pp. 2-3 and Duke Lecture 1 pp. 1-4 give examples of response,
predictor and nested-unit notation. The source examples do not establish
whether a scientific model is true.

### SME-02 — Linear regression and prediction

**Proposed pages:** `linear-regression-and-prediction` /
`linear-regression-and-prediction-examples`.

**A scope and theorem contracts.** Define the fixed-design model
\(Y=X\beta+\varepsilon\), least-squares minimizers, fitted vector and
residual vector. Reuse the existing linear-algebra minimizer theorem. For
general \(X\), \(X\hat\beta\) and the residual are unique even when the
coefficient vector is not; estimable linear contrasts must be identified by
their row-space condition. Under full column rank, the inverse formula is
\(\hat\beta=(X^TX)^{-1}X^TY\). With \(E\varepsilon=0\) and
\(\operatorname{Cov}(\varepsilon)=\sigma^2 I\), prove unbiasedness and
\(\operatorname{Cov}(\hat\beta)=\sigma^2(X^TX)^{-1}\). State Gauss-Markov
separately with fixed \(X\), full rank, zero-mean errors and spherical
covariance: OLS has minimum covariance among linear unbiased estimators of
estimable contrasts. Gaussianity is not needed for those linear second-moment
claims.

For exact inference, assume fixed full-rank \(X\), \(n>p\), and
\(\varepsilon\sim N_n(0,\sigma^2I)\). Choose a thin QR factorization
\(X=QR\) with \(Q^TQ=I_p\). Then
\[
 \hat\beta-\beta=R^{-1}Q^T\varepsilon,\qquad
 \hat\varepsilon=(I-QQ^T)\varepsilon.
\]
Complete the rows of \(Q^T\) to an orthogonal \(n\times n\) matrix \(U\)
and set \(g=U\varepsilon/\sigma\). The first \(p\) coordinates determine
\(\hat\beta\); the last \(n-p\) determine the residual sum of squares:
\[
 RSS/\sigma^2=\sum_{j=p+1}^n g_j^2\sim\chi^2_{n-p},
 \qquad \hat\beta\perp\!\!\!\perp RSS.
\]
The local MVN route is explicit: for every \(a\), \(a^TU(\varepsilon/\sigma)
\sim N(0,\|U^Ta\|^2)=N(0,\|a\|^2)\), so by the existing
projection-based definition \(U(\varepsilon/\sigma)\sim N_n(0,I)\); the
existing construction realizes this law as independent standard-normal
coordinates. Consume planned category-1 MSF-35 clauses
`thm-orthogonal-transform-preserves-standard-normal-product-law`,
`thm-orthogonal-projection-has-independent-chi-square-sums`,
`def-chi-square-law`, `def-student-t-and-f-laws`, and
`thm-gaussian-linear-model-qr-and-exact-t-f-pivots` for the reusable exact
bridge; the regression page specializes the general decomposition to its
design matrix and contrast. MIT 18.443 independently proves the same
coordinate claim by the product Gaussian density and Jacobian under an
orthogonal change of variables (multivariate-normal note pp. 3-4).

For a nonzero contrast \(c^T\beta\), its standardized estimation error is
normal with variance \(\sigma^2c^T(X^TX)^{-1}c\); division by the independent
residual estimate \(s^2=RSS/(n-p)\) gives an exact \(t_{n-p}\) pivot. A
\(q\)-restriction nested-model residual ratio gives the exact
\(F_{q,n-p}\) law under the null. State the MLE \(RSS/n\) separately from
\(s^2=RSS/(n-p)\). The foundation pivot/test-inversion items supply the
confidence-set and test interpretation, not the Gaussian decomposition.

For a new design vector \(x_0\), the mean response \(x_0^T\beta\) has
standard error \(s\sqrt{x_0^T(X^TX)^{-1}x_0}\); an independent new response
with the same normal error model has prediction standard error
\(s\sqrt{1+x_0^T(X^TX)^{-1}x_0}\). This difference is a model fact: the
new-observation interval contains its own noise term. Do not state it if the
new response is dependent or has a different variance law.

**Algorithms and diagnostics.** Least squares is the minimizer definition;
QR/SVD and pseudoinverse results are existing algebraic suppliers. Residual
plots against fitted values, predictors, omitted covariates and time, plus a
normal Q-Q plot under the Gaussian model, are diagnostic procedures. Leverage
is a property of the design projection. A diagnostic plot does not prove an
assumption, repair confounding, or establish causality.

**B scope.** Include duplicate/collinear predictors with rank-deficient
coefficients but unique fit, an estimable contrast, high leverage, a
heteroskedastic or correlated error that invalidates the classical covariance
formula, and side-by-side mean-response versus new-response intervals.

**Existing suppliers.**

- `thm-least-squares-solutions-and-normal-equation` and
  `thm-orthogonal-projection-is-the-unique-nearest-point` give finite-dimensional
  projection/minimizer results; they do not give statistical unbiasedness,
  covariance, or Gaussian inference.
- `thm-rank-nullity`, `thm-qr-factorisation-over-r-or-c`,
  `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`,
  `thm-singular-value-decomposition`, and the Moore-Penrose minimum-norm
  theorem supply their exact algebraic clauses.
- `def-moments-variance-and-covariance` and its scalar covariance identities,
  `def-standard-normal-and-normal-laws`, `def-multivariate-normal-law`, and
  `lem-characteristic-function-of-a-multivariate-normal-law` supply moments and
  Gaussian laws. The multivariate-normal definition assumes AC and is defined
  through all scalar projections; it already constructs the identity-covariance
  law from independent standard normals. It does not state orthogonal
  invariance as a named theorem.
- `thm-independent-random-elements-have-product-joint-law` and
  `thm-factorization-of-expectations-for-independent-variables` supply product
  law/factorization. `thm-normal-equations-for-best-affine-l2-prediction` is a
  population L2 predictor theorem; it is not a fixed-design sampling theorem.
- `thm-linear-change-of-variables-for-lebesgue-measure` supports the MIT density
  proof route but explicitly assumes countable choice. The existing MVN
  projection-definition proof route avoids introducing a fresh density
  assumption.

**Category-1 interface.** Consume planned MSF-01 model/estimand definitions,
MSF-02 estimator/statistic definitions, MSF-03 prediction risk if a risk
statement is made, MSF-08 finite-sample tests, MSF-10 confidence/test
inversion, and the planned MSF-35 A page
`gaussian-orthogonal-decomposition-and-quadratic-forms`, particularly
`thm-gaussian-linear-model-qr-and-exact-t-f-pivots` and its orthogonal,
chi-square and t/F clauses. These are earlier category-1 suppliers, not
existing library items. The page may include the short QR specialization so
its design, contrast and nested-model notation is visible without duplicating
the general foundational bridge.

**Evidence and limits.** MIT 18.443 regression pp. 1-7 provides the fixed-design
MLE, QR proof, exact pivots and joint inference; MIT 18.443 MVN pp. 3-4 proves
orthogonal invariance separately. Wickham pp. 2-7 independently covers OLS,
estimability and Gauss-Markov; its exact laws are stated, not derived. Wickham
pp. 8, 11-12 and 17 covers diagnostic workflow. Do not import its p. 5
variance-algebra typo/sloppiness or p. 7 formulas without checking.

### SME-03 — Generalized linear models

**Proposed pages:** `generalized-linear-models` /
`generalized-linear-models-examples`.

**A scope.** For independent observations with response law in an exponential
family with base measure \(\nu\), state the random component, linear
predictor \(\eta_i=x_i^T\beta\), link \(g(\mu_i)=\eta_i\), dispersion
convention and variance function explicitly. Under the canonical link
\(\theta_i=\eta_i\) and common scale \(a(\phi)>0\), with
\[
 f_i(y_i;\theta_i,\phi)=\exp\{(y_i\theta_i-b(\theta_i))/a(\phi)
                       +c(y_i,\phi)\},
\]
the log likelihood, score and Hessian are
\[
 \ell(\beta)=\sum_i\{y_i x_i^T\beta-b(x_i^T\beta)\}/a(\phi)+C,
 \quad U(\beta)=X^T(y-\mu)/a(\phi),
 \quad \nabla^2\ell(\beta)=-X^T\operatorname{diag}(b''(\eta_i))X/a(\phi).
\]
If \(b''(\eta_i)>0\) and \(X\) has full column rank, the Hessian is
negative definite on the finite parameter space and the log likelihood is
strictly concave. This gives at most one stationary maximizer; it does not
prove a finite maximizer exists. Logistic complete or quasi-complete
separation is an example where estimates can diverge and no finite MLE exists.
For a general differentiable link, state the score/information with
\(d\mu_i/d\eta_i\) and variance \(\phi V(\mu_i)\), and state the common
support/differentiation conditions before invoking zero-mean score or the
information identity.

Define Fisher scoring / IRLS at iterate \(\beta^{(k)}\):
\[
 z_i=\eta_i+(y_i-\mu_i)/(d\mu_i/d\eta_i),\qquad
 w_i=(d\mu_i/d\eta_i)^2/(\phi V(\mu_i)),
\]
then choose \(\beta^{(k+1)}\) as a minimizer of
\(\sum_iw_i(z_i-x_i^T\beta)^2\), under full rank and strictly positive
weights or an explicitly stated generalized-inverse convention. Prove
algebraically that this is the Fisher-scoring step when the information matrix
is invertible. The algorithm definition and one-step identity are separate
from global convergence or finite-iteration attainment.

Deviance can be defined from a stated saturated model as twice the maximized
log-likelihood difference. A nested-model deviance difference is the
likelihood-ratio statistic; its regular fixed-codimension asymptotic
\(\chi^2_q\) calibration uses planned MSF-15 and its exact iid/interior
regularity. The saturated model's dimension often grows with sample size, so
the usual fixed-dimensional Wilks theorem does not automatically justify a
goodness-of-fit reference law. Pearson and deviance residuals may be defined
as diagnostic quantities, but the source dossier lacks a fully read GLM
diagnostics unit; any residual-property or approximate reference-law theorem
needs an additional source and proof check.

**B scope.** Include Bernoulli-logit and Poisson-log examples, logistic
separation, overdispersion, an identity-link boundary case, and a singular or
nonpositive Fisher information example where the stated IRLS step is not
uniquely defined. Use residual plots only as exploratory diagnostics.

**Existing suppliers.** Reuse the existing scalar probability/moment/variance
items, `def-exponential-family` if the integrated MSF-05 supplier is authored,
existing matrix calculus `prop-matrix-differentials-obey-sum-product-and-adjoint-rules`,
`thm-derivative-of-matrix-inversion`, and the real-analysis Taylor/implicit
function items only where their hypotheses are stated. Existing
`thm-multivariate-iid-central-limit-theorem`, convergence-mode and Slutsky
items are asymptotic foundations; do not use a CLT to claim exact finite-sample
GLM laws.

**Category-1 interface.** Consume planned MSF-04 likelihood/dominating-measure
clauses, MSF-05 exponential-family definition, MSF-07 score/Fisher-information
identities with common-support and derivative-envelope assumptions, MSF-13/14
consistency/asymptotic-normality only when invoked, and MSF-15 regular
likelihood Wald/score/LR calibration. No category-3 optimization, EM,
variational, bootstrap, Bayesian posterior or MCMC supplier is used.

**Evidence and limits.** MIT 18.650 pp. 10-21, 23-33, 40-52 is the primary
derivation source. CMU Tibshirani pp. 1-5 independently checks components,
links, exponential families and canonical likelihood. CMU p. 5 gives IRLS
but not an inferential theorem; its claim that the final weighted least
squares step can simply be used for inference is excluded. The read sources
do not supply deviance diagnostics; this is a source gap, not an implied
coverage claim.

### SME-04 — Multivariate models, covariance and classical PCA

**Proposed pages:** `multivariate-models-covariance-and-pca-inference` /
`multivariate-models-covariance-and-pca-inference-examples`.

**A scope.** Define iid \(p\)-variate normal sampling
\(X_i\sim N_p(\mu,\Sigma)\), with symmetric positive-definite \(\Sigma\)
where inverse/density results are used. Define
\[
 \bar X=n^{-1}\sum_i X_i,\qquad
 S=(n-1)^{-1}\sum_i(X_i-\bar X)(X_i-\bar X)^T.
\]
State the MLE covariance
\(\hat\Sigma_{ML}=n^{-1}\sum_i(X_i-\bar X)(X_i-\bar X)^T\)
separately from unbiased \(S\). Under the Gaussian model,
\((n-1)S\sim W_p(n-1,\Sigma)\) and \(\bar X\) is independent of \(S\).
For \(n>p\), state the exact one-sample Hotelling result from the heading
paragraph, including its degrees of freedom and sample-covariance convention.
The proof route is a transformation of the \(n\) sample rows into the
mean-direction coordinate and its \(n-1\)-dimensional orthogonal complement,
followed by the Wishart normal-squares construction and the inverse-Wishart
quadratic form. Springer §6.3 gives the latter derivation; Mukherjee Lecture 3
states the result but leaves an inverse-Wishart step unproved.

For \(H_0:\Sigma=\Sigma_0\), separate (i) the exact trace statistic
\(\operatorname{tr}(\Sigma_0^{-1}(n-1)S)\), whose chi-square law follows
from the Wishart trace under the null, from (ii) the covariance likelihood
ratio statistic, whose regular fixed-dimensional null calibration is
asymptotic with \(p(p+1)/2\) degrees of freedom under MSF-15. Do not call
the trace statistic the LR statistic. State that positive-definite interior
and sample-size/rank conditions matter.

Define covariance-PCA or correlation-PCA by naming the actual symmetric
matrix being decomposed. The leading direction maximizes \(a^T\Sigma a\)
subject to \(a^Ta=1\); subsequent directions maximize with orthogonality
constraints. Eigenvalues are component variances and their sum is total
variance. A scale change can change covariance-PCA directions; standardizing
first produces correlation-PCA. Existing spectral theorem/Courant-Fischer
prove these deterministic statements. At tied eigenvalues only the
corresponding subspace is unique. A simple isolated eigenvalue admits a local
eigenpair branch using the existing simple-eigenvalue perturbation theorem,
but no generic finite-sample confidence interval for a selected eigenvector
is promised.

**B scope.** Show singular sample covariance for \(p\ge n\), a tied-eigenvalue
example where components rotate within an invariant subspace, and a
rescaling example where covariance- and correlation-PCA differ. Include a
Hotelling test with \(n>p\) and a covariance LR example only after the
regularity and null statistic are specified.

**Existing suppliers.**

- Existing `def-multivariate-normal-law` and
  `lem-characteristic-function-of-a-multivariate-normal-law` give the vector
  Gaussian law, mean/covariance and uniqueness, with AC explicit; there is no
  existing multivariate Wishart or Hotelling theorem.
- Existing `thm-independent-random-elements-have-product-joint-law`,
  `thm-factorization-of-expectations-for-independent-variables`, scalar
  normal/chi-square prerequisites, and vector-normal suppliers support the
  normal-squares argument but do not themselves assert a Wishart law.
- Existing `cor-real-spectral-theorem-for-self-adjoint-endomorphisms` and
  `thm-courant-fischer-min-max-principle` supply the PCA optimization; existing
  SVD/eigenvalue and simple-eigenvalue perturbation bodies supply the exact
  deterministic algebra. Do not use matrix perturbation claims outside their
  simple-spectrum hypotheses.
- Existing `thm-linear-change-of-variables-for-lebesgue-measure` has an
  explicit countable-choice assumption. The orthogonal normal-vector route
  through the MVN definition avoids needing a new density proof; Springer
  Wishart-density calculations should retain their own assumptions.

**Category-1 interface.** Consume MSF-01/02 for model/data/statistic
terminology, MSF-04 for likelihood ratios, MSF-08/10 for tests and confidence
sets, MSF-15 only for regular asymptotic covariance-LR calibration, and the
planned MSF-35 A page `gaussian-orthogonal-decomposition-and-quadratic-forms`
for standard-normal orthogonal invariance and independent chi-square sums.
These are earlier category-1 suppliers, not existing library results.
Multivariate normal law and characteristic-function uniqueness are already
existing library suppliers, so do not request a duplicate normal definition.
Wishart/sample-scatter, Hotelling \(T^2\), covariance tests and PCA remain
models-01 results.

**Evidence and limits.** Springer Chapter 3 is fully read; Chapter 5 is
completely read only at §5.5, not as a whole chapter; Chapter 6 is read only at
§§6.3-6.4 plus the exact partial ranges in sources.json; Chapter 9 is fully
read. MIT 18.443 MVN pp. 1-4 independently proves affine/orthogonal normal
facts. Mukherjee Lectures 2, 3, 7 and 8 are complete short cross-check notes,
with deferred proof steps recorded in sources.json. Springer Chapter 9
contains a typographical eigenvalue variance error and the long random-
eigenvalue derivation relies on matrix-Jacobian formulas; neither is reused.

### SME-05 — Hierarchical, mixed-effects and longitudinal models

**Proposed pages:** `mixed-effects-and-longitudinal-models` /
`mixed-effects-and-longitudinal-models-examples`.

**A scope.** Define a linear mixed model
\[
 Y=X\beta+Zb+\varepsilon,\qquad E b=0,\quad E\varepsilon=0,
 \quad \operatorname{Cov}(b)=G,\quad\operatorname{Cov}(\varepsilon)=R,
 \quad b\perp\!\!\!\perp\varepsilon.
\]
Under Gaussianity, \(Y\sim N(X\beta,V)\) with
\(V=ZGZ^T+R\); more generally that covariance identity needs only the
displayed means, covariances and independence. With known positive-definite
\(V\) and full-column-rank \(X\), GLS is
\(\hat\beta_{GLS}=(X^TV^{-1}X)^{-1}X^TV^{-1}Y\), is unbiased, and has
covariance \((X^TV^{-1}X)^{-1}\). Prove the BLUE claim by whitening with
\(V^{-1/2}\) and applying the existing least-squares/Gauss-Markov route.
Do not claim those formulas after replacing \(V\) by an estimated covariance
without accounting for estimation.

For known \(\beta,G,R\), the conditional Gaussian mean of \(b\) given
\(Y\) is \(GZ^TV^{-1}(Y-X\beta)\), with conditional covariance
\(G-GZ^TV^{-1}ZG\). For unknown fixed effects, the conventional BLUP uses
\(\hat\beta_{GLS}\); state its linear-unbiased prediction criterion and
prediction-error covariance with the fixed-effect estimation term included.
The derivation is the joint Gaussian conditional formula plus the existing
affine L2 projection/covariance normal equations. BLUP is a frequentist
best-linear-unbiased prediction guarantee under its moment assumptions. The
same formula may coincide algebraically with a Bayesian posterior mean under
a Gaussian prior, but that interpretation is out of category and supplies
no proof here.

For longitudinal data, state subject and visit indices, the mean/covariate
structure, random effects and residual covariance separately. A random
intercept alone yields compound symmetry when residuals are independent;
random slopes induce time-dependent covariance. Covariance structures such
as independence, compound symmetry, AR(1), Toeplitz and unstructured are
model choices. Variance-component identifiability is injectivity of the map
from covariance parameters to \(V(\theta)\), not a consequence of observing
repeated measures. Describe ML/REML as likelihood definitions; REML is the
likelihood of error contrasts annihilating the fixed-effect design. The
balanced one-way identity with ANOVA is a special result, not a general
unbiasedness claim.

**B scope.** Include random intercept covariance/ICC, a random-slope
longitudinal example with unequal visits, an alias between time and random
slope terms, unbalanced groups with an unconstrained negative moment estimate,
and a contrast-space illustration of REML. Label empirical BLUP as a plug-in
predictor whose variance-component estimation uncertainty is not the known-
parameter BLUP theorem.

**Existing suppliers.**

- `thm-normal-equations-for-best-affine-l2-prediction` proves a population
  affine L2 projection and covariance normal equations, including singular
  predictor covariance; it is an exact supplier for the best-linear
  prediction route, not for the mixed model's observation covariance.
- Existing `thm-conditional-expectation-is-the-l2-orthogonal-projection`,
  conditional Gaussian law, expectation/covariance items and
  `def-multivariate-normal-law` support conditional means and Gaussian sums.
- Existing least-squares normal equations, projection theorem, QR and
  Cholesky items supply whitening/GLS algebra; existing linear algebra does
  not prove model-based BLUE or BLUP claims.

**Category-1 interface.** Consume MSF-01/02 for model/estimand and predictor
terminology; MSF-03 only if a predictive risk is compared; MSF-04/07 for
marginal likelihood/score identities; MSF-13/14 only for a separately stated
regular iid asymptotic result; and MSF-15 for a correctly specified regular
interior likelihood-ratio approximation. MSF-35's Gaussian finite-sample
bridge can support Gaussian conditional laws where required.
Variance-component boundaries are nonregular: do not apply ordinary Wilks
degrees of freedom automatically. No category-3 Bayesian, EM, variational,
MCMC or empirical-Bayes dependency is proposed; do not take the posterior
interpretation in Duke Lecture 5 as a supplier.

**Evidence and limits.** Duke Lecture 1 pp. 1-11 proves the random-intercept
covariance/ICC and illustrates design effects; Lecture 3 pp. 1-9 derives
balanced ANOVA moment estimators; Lecture 4 pp. 1-6 defines MLE/REML and
balanced results; Lecture 5 pp. 8-10 states non-Bayesian BLUP/empirical BLUP
but does not prove the general matrix result; Lecture 6 pp. 1-16 gives LME
covariance/GLS/BLUP formulas; Lecture 7 pp. 1-21 develops longitudinal mean
and covariance forms. The notes also contain Bayesian, R/computational and
missing-data material, all read where present and explicitly excluded.

## Existing-library supplier inspection

These page and item bodies were read directly; no model or inference theorem
is credited from a name alone.

| Existing supplier body | Exact clause reused | Limit that remains in models-01 |
|---|---|---|
| `library/linear-algebra/inner-product-spaces-and-orthogonality.md`; item `thm-least-squares-solutions-and-normal-equation` | In finite-dimensional inner-product spaces, least-squares minimizers exist, satisfy the adjoint normal equation, and form a translate of the kernel. | No statistical sampling law, error covariance, unbiasedness or normality. |
| `items/thm-orthogonal-projection-is-the-unique-nearest-point.md` and `items/thm-qr-factorisation-over-r-or-c.md` | Projection geometry and exact orthogonal factorization. | Must still connect the residual subspace to Gaussian coordinates and their law. |
| `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`; items `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-courant-fischer-min-max-principle`, `thm-singular-value-decomposition` | Symmetric spectral decomposition, Rayleigh/min-max characterization and SVD. | PCA optimization follows; statistical sampling variability, Wishart and confidence statements do not. |
| `library/linear-algebra/the-moore-penrose-pseudoinverse-and-regularised-least-squares.md`; `items/thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution.md` | Minimum-norm coefficient solution when design rank is deficient. | Does not make a nonidentifiable coefficient vector uniquely estimable. |
| `library/linear-algebra/matrix-differentiation-and-first-order-spectral-perturbation.md`; `items/prop-matrix-differentials-obey-sum-product-and-adjoint-rules.md`, `items/thm-derivative-of-matrix-inversion.md`, `items/thm-determinant-differential-and-jacobis-formula.md`, `items/prop-gradient-of-a-quadratic-matrix-form.md` | First-order matrix calculus for likelihood score/Hessian calculations; simple-eigenvalue perturbation under the stated local hypotheses. | Does not prove MLE existence, convergence of IRLS, or a global Davis–Kahan-type bound. |
| `items/def-multivariate-normal-law.md`; `items/lem-characteristic-function-of-a-multivariate-normal-law.md` | Under AC, Gaussian law defined by all linear projections; construction from independent standard normals; mean/covariance and characteristic-function uniqueness. | No separately published orthogonal-invariance theorem, sample Wishart law, sample-mean/scatter independence theorem, or Hotelling test. Foundations-02's in-progress exact Gaussian bridge should supply the shared normal-coordinate/t/F interface. |
| `library/probability/probability-spaces-random-variables-and-expectation.md`; `items/def-moments-variance-and-covariance.md` and `items/lem-variance-and-covariance-identities-for-random-variables.md` | Scalar moments, variances, covariances and finite linearity. | Matrix-valued covariance/Wishart model results still need explicit statements and proofs. |
| `library/probability/independence-borel-cantelli-and-zero-one-laws.md`; items `thm-independent-random-elements-have-product-joint-law`, `thm-factorization-of-expectations-for-independent-variables`, `cor-covariance-vanishes-under-independence` | Product law/factorization for independent observations and basic covariance consequences. | These do not themselves yield the exact orthogonal residual law; use the planned bridge. |
| `items/thm-normal-equations-for-best-affine-l2-prediction.md` | Population affine L2 predictor exists uniquely as a random-variable class and its centered coefficients obey covariance normal equations, even when coefficients are nonunique. | Not a fixed-design regression theorem or a conditional-mean theorem. It supports the LMM BLUP proof only after the random-effects vector and observation law are specified. |
| `library/probability/conditional-expectation.md`; `items/thm-conditional-expectation-is-the-l2-orthogonal-projection.md` | Conditional expectation is an L2 projection under the item hypotheses. | No mixed-model likelihood, design covariance or variance-component identification result. |
| `items/thm-linear-change-of-variables-for-lebesgue-measure.md` | Determinant scaling for a linear change of variables. | The item explicitly assumes the Axiom of Countable Choice; use that inherited condition if invoking the normal-density Jacobian proof. |

No existing body above defines an exponential-family regression, generalized
linear model, multivariate Wishart sampling law, Hotelling statistic, PCA
sampling inference, or linear mixed model. The existing Gaussian definition
was missed in the initial targeted search; it was checked by reading its full
item body and the characteristic-function item. Do not duplicate that
definition.

## Category boundary and cross-track interfaces

Category-2 results may use planned category-1 definitions/theorems and existing
library probability/linear algebra, but may not depend directly or transitively
on categories 3 or 4. The following category-1 interfaces are planned, not
existing model results:

- **MSF-01–03:** experiment/model/estimand and identifiability; estimator and
  randomized procedure; loss/risk for predictive comparisons. SME-01 consumes
  these; it must not redefine identifiability.
- **MSF-04–05:** dominated likelihood/Radon–Nikodym ratio and full-rank
  exponential family. SME-03 consumes the likelihood/family definitions.
- **MSF-07:** score/Fisher information and information identity with
  common-support, differentiation and integrability conditions. SME-03 and
  SME-05 use only when those conditions are stated.
- **MSF-08 and MSF-10:** finite-sample tests and confidence/test inversion.
  SME-02/04 use them for procedures after their model-specific laws are proved.
- **MSF-12–15:** consistency, M/Z, delta method, asymptotic normality and
  regular interior Wald/score/LR calibration. These are not exact finite-sample
  normal regressions, and may not be used at boundary variance components or
  under misspecification without their separate planned results.
- **Foundations-02 exact Gaussian bridge:** root reports a new reusable
  decomposition/chi-square/t/F pair is being added. This is the minimum shared
  earlier interface for exact finite-sample normal regression; its exact
  proposed A/B IDs were not supplied at dossier drafting and must be copied
  from the foundations author before final integration. The bridge should
  state Gaussian orthogonal decomposition, independent chi-square residual
  sums, and exact t/F pivot construction with degrees of freedom. The source
  route is recorded in SME-02; the exact normal law itself is already an
  existing probability supplier.

No Bayesian posterior, empirical Bayes, EM, variational inference, bootstrap,
MCMC, stochastic optimization, predictive machine-learning guarantee, model
selection guarantee, or automatic software-fitting result is a supplier.
Matrix QR/SVD/Cholesky and exact matrix calculus are existing algebraic
suppliers, not numerical-methods dependencies. GLM IRLS is a category-2
algorithm definition; only its one-step identity is proved here, not
convergence. Mixed-model algorithms are excluded.

## Open source/proof gaps for integration

1. **GLM residual deviance diagnostics.** MIT and CMU full lecture units read
   here do not cover deviance residuals or a goodness-of-fit reference law.
   Either add a complete authoritative university/author diagnostics unit and
   record its full reading range, or narrow SME-03 to likelihood, score,
   information, IRLS and model checks whose formulas are sourced. In either
   case, do not use a fixed-dimensional Wilks theorem against a saturated model
   whose dimension grows with n without a separate theorem.
2. **PCA inference boundary.** The deterministic PCA theorem is well supported.
   A generic finite-sample law for selected sample eigenvectors is not. If the
   final page says only that a simple eigenvalue admits a local branch, cite the
   exact existing simple-eigenvalue perturbation clauses and their local
   gap/gauge assumptions. Any explicit operator-norm eigenvector error bound
   requires a separately checked supplier.
3. **Wishart/Hotelling proof closure.** The exact F statement has the Springer
   proof route and an independent Mukherjee statement. The eventual item must
   spell the Wishart degrees of freedom, sample-covariance denominator and
   inverse-Wishart quadratic-form proof; it must not rely on the scribed note's
   deferred exercise.
4. **Mixed model scope.** Keep GLS BLUE with known V distinct from plug-in
   covariance estimation. Keep known-parameter BLUP distinct from empirical
   BLUP, and distinguish unconditional BLUP from conditional unbiasedness.
   Do not infer an ignorability/missingness guarantee from longitudinal LMM
   covariance equations.

The full PDF extraction metadata, source URLs, page counts, SHA-256 hashes,
actual read ranges and per-source proof limits are in
[`sources.json`](sources.json). No category-3 or category-4 dependency is
proposed; no library item/page has been authored by this dossier.
