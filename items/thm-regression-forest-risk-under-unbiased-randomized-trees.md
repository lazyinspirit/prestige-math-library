---
id: thm-regression-forest-risk-under-unbiased-randomized-trees
kind: theorem
title: "Unbiased randomized-tree residual correlation bounds forest risk"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 4
deps:
  - alg-bagged-random-forest
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - thm-independent-random-elements-have-product-joint-law
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - cor-cauchy-schwarz-for-random-variables
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  scraped: []
  references:
    - title: 'Leo Breiman, "Random Forests," Machine Learning 45 (2001), 5–32; full text hosted by the University of Chicago Macro Finance Research Program'
      url: 'https://mfm.uchicago.edu/wp-content/uploads/2020/06/Breiman-Random-Forests.pdf'
    - title: 'Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing, Chapter 15'
      url: 'https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS'
pipeline_run: machine-learning-all-101-2026-10-19
---

## Statement

Fix a finite training dataset and a jointly measurable real-valued tree predictor $h(x,\theta)$. Let $Z=(X,Y)$ have test law $P$. Let $\Theta,\Theta'$ be independent randomizations with common law $Q$, assume the pair $(\Theta,\Theta')$ is independent of $Z$, and assume $\mathbb E_PY^2<\infty$ and $h(X,\Theta)\in L^2(P\times Q)$. For every allowed tree randomization $\theta$, assume $h(X,\theta)\in L^2(P)$ and $\mathbb E_PY=\mathbb E_Ph(X,\theta)$. Put $e_\theta(Z)=Y-h(X,\theta)$ and $sd(\theta)=\sqrt{\operatorname{Var}_P(e_\theta(Z))}$. Define

$$PE^*(\mathrm{forest})=\mathbb E_P\left(Y-\mathbb E_Qh(X,\Theta)\right)^2$$

$$PE^*(\mathrm{tree})=\mathbb E_Q\mathbb E_P e_\Theta(Z)^2$$

$$d=\mathbb E_Q[sd(\Theta)]$$

If $d=0$, then both risks are zero. If $d>0$, define

$$
\rho=\frac{\mathbb E_{Q\times Q}[\operatorname{Cov}_P(e_\Theta(Z),e_{\Theta'}(Z))]}{d^2}.
$$

Then $\rho\ge0$ and

$$
PE^*(\mathrm{forest})\le\rho\,PE^*(\mathrm{tree}).
$$

The covariance formula for $\rho$ is Breiman's weighted mean residual correlation written without undefined zero-standard-deviation correlation terms.

## Statement references

[Breiman, “Random Forests,” Theorem 11.2, printed pp. 25–26](https://mfm.uchicago.edu/wp-content/uploads/2020/06/Breiman-Random-Forests.pdf)

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §§15.1 and 15.4.1–15.4.3, printed pp. 587, 597–602; used for the regression forest and variance/correlation context, not as a proof of this bound](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

## Facts & Assumptions

**Given:** The fixed data, jointly measurable square-integrable predictor, unbiasedness condition for every allowed tree randomization, and independent randomizations and test pair in the Statement.

[F1] [[alg-bagged-random-forest]]: For regression, each tree predicts its leaf sample mean and the forest prediction is the average of its tree predictions.

[F2] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: Expectation on a probability space is integration against its probability measure.

[F3] [[def-moments-variance-and-covariance]]: For square-integrable real random variables, variance is the mean squared centered value and covariance is the mean product of centered values.

[F4] [[thm-independent-random-elements-have-product-joint-law]]: The joint law of a finite independent family of random elements is the product of their marginal laws.

[F5] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: For an integrable function on a product of sigma-finite measure spaces, either order of iterated integration gives the product integral.

[F6] [[cor-cauchy-schwarz-for-random-variables]]: If $U,V\in L^2(Q)$, then $\mathbb E_Q|UV|\le(\mathbb E_QU^2)^{1/2}(\mathbb E_QV^2)^{1/2}$.

## Proof

1.1 For every allowed $\theta$, the mean condition gives $\mathbb E_Pe_\theta(Z)=0$. Hence [F3] gives $\operatorname{Cov}_P(e_\theta,e_{\theta'})=\mathbb E_P[e_\theta e_{\theta'}]$. If both residual standard deviations are positive, define their correlation as this covariance divided by their product; if either is zero, the covariance is zero. Thus the covariance expression for $\rho$ agrees with Breiman's weighted mean residual correlation, including zero-standard-deviation pairs. The products are integrable by [F6] and square-integrability. Also $\mathbb E_{P\times Q}e_\Theta^2<\infty$, since $(a-b)^2\le2a^2+2b^2$ and both $Y$ and $h(X,\Theta)$ are square-integrable. [given, F2, F3, F6, algebra]

2.1 By [F4] the pair $(\Theta,\Theta',Z)$ has product law. For $P$-almost every $z$, [F6] gives $(\mathbb E_Q|e_\Theta(z)|)^2\le\mathbb E_Qe_\Theta(z)^2$; integrating and using step 1.1 shows $e_\theta(z)e_{\theta'}(z)$ is integrable on $P\times Q\times Q$. Thus [F5] permits the following integrations. The $Q$-average is the infinite-forest prediction obtained from the same regression tree predictions that the algorithm averages at finite $B$ [F1]. Also $\mathbb E_Qe_\Theta(Z)=Y-\mathbb E_Qh(X,\Theta)$ for $P$-almost every $Z$. Consequently $PE^*(\mathrm{forest})=\mathbb E_P[(\mathbb E_Qe_\Theta(Z))^2]=\mathbb E_{Q\times Q}[\mathbb E_P(e_\Theta(Z)e_{\Theta'}(Z))]=\mathbb E_{Q\times Q}[\operatorname{Cov}_P(e_\Theta(Z),e_{\Theta'}(Z))]$. Thus when $d>0$, $PE^*(\mathrm{forest})=\rho d^2$ and $\rho\ge0$. [F1, F2, F4, F5, F6, step 1.1, algebra]

3.1 The zero-mean condition and [F3] give $PE^*(\mathrm{tree})=\mathbb E_Q[sd(\Theta)^2]$. By [F6] with one factor equal to $1$, $d^2=(\mathbb E_Qsd(\Theta))^2\le\mathbb E_Q[sd(\Theta)^2]$. For $d>0$, combining with step 2.1 and $\rho\ge0$ yields $PE^*(\mathrm{forest})\le\rho\,PE^*(\mathrm{tree})$. [F2, F3, F6, step 2.1, algebra]

4.1 If $d=0$, then the nonnegative function $sd$ vanishes $Q$-almost everywhere: each set $\{sd\ge1/n\}$ has measure zero since otherwise $\mathbb E_Qsd>0$. For $Q$-almost every $\theta$, the mean-zero residual has variance zero, so the same argument applied to $(e_\theta-\mathbb E_Pe_\theta)^2$ gives $e_\theta=0$ $P$-almost surely. Fubini then gives $e_\Theta(Z)=0$ for $P\times Q$-almost every $(Z,\Theta)$; both displayed risks are zero. [F2, F3, F5, step 1.1] ∎
