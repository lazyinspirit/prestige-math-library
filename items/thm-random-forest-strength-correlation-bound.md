---
id: thm-random-forest-strength-correlation-bound
kind: theorem
title: "Breiman's random-forest strength–correlation error bound"
status: draft
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
  - cor-chebyshev-inequality-for-random-variables
aliases: []
proof_strategy: direct
verification:
  precheck: pass
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

Fix a finite training dataset and a classifier $h(x,\theta)$ taking values in an ordered finite class set $\mathcal C=\{c_1<\cdots<c_J\}$ with $J\ge2$. Assume $h$ is jointly measurable on the product of the test-feature space and the randomization space. Let $Z=(X,Y)$ be a test pair with $Y\in\mathcal C$ and test law $P$. Let $\Theta,\Theta'$ be independent randomizations with common law $Q$, and assume the pair $(\Theta,\Theta')$ is independent of $Z$. For $j\in\{1,\ldots,J\}$ define $p_j(x)=Q\{\theta:h(x,\theta)=c_j\}$. For $y=c_k$, let $\hat j(x,y)$ be the least index attaining $\max_{j\ne k}p_j(x)$, and define the limiting margin

$$
m(x,y)=p_k(x)-p_{\hat j(x,y)}(x),\qquad s=\mathbb E_P[m(Z)].
$$

Assume $s>0$. For a tree randomization $\theta$, define the raw margin $r_\theta(x,y)=\mathbf1\{h(x,\theta)=y\}-\mathbf1\{h(x,\theta)=c_{\hat j(x,y)}\}$ and $sd(\theta)=\sqrt{\operatorname{Var}_P(r_\theta(Z))}$. Put $d=\mathbb E_Q[sd(\Theta)]$. If $d=0$, then $P\{m(Z)<0\}=0$. If $d>0$, define

$$
\rho=\frac{\mathbb E_{Q\times Q}[\operatorname{Cov}_P(r_\Theta(Z),r_{\Theta'}(Z))]}{d^2}.
$$

Then $\rho\ge0$ and

$$
P\{m(Z)<0\}\le \rho\frac{1-s^2}{s^2}.
$$

The covariance formula for $\rho$ is Breiman's weighted mean raw-margin correlation written without undefined zero-standard-deviation correlation terms.

## Statement references

[Breiman, “Random Forests,” Definitions 2.1–2.2 and Theorem 2.3, printed pp. 8–9](https://mfm.uchicago.edu/wp-content/uploads/2020/06/Breiman-Random-Forests.pdf)

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §15.4, printed pp. 597–602; used for the variance/correlation context, not as a proof of this bound](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

## Facts & Assumptions

**Given:** The fixed data, classifier jointly measurable on the product of the test-feature and randomization spaces, finite ordered class set, class-valued test response, independent randomizations and test pair, and positive-strength condition in the Statement.

[F1] [[alg-bagged-random-forest]]: The tree law is fixed conditional on the training data, and each tree takes one class value at an input.

[F2] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: Expectation on a probability space is integration against its probability measure.

[F3] [[def-moments-variance-and-covariance]]: For square-integrable real random variables, variance is the mean squared centered value and covariance is the mean product of centered values.

[F4] [[thm-independent-random-elements-have-product-joint-law]]: The joint law of a finite independent family of random elements is the product of their marginal laws.

[F5] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: For an integrable function on a product of sigma-finite measure spaces, either order of iterated integration gives the product integral.

[F6] [[cor-cauchy-schwarz-for-random-variables]]: If $U,V\in L^2(Q)$, then $\mathbb E_Q|UV|\le(\mathbb E_QU^2)^{1/2}(\mathbb E_QV^2)^{1/2}$.

[F7] [[cor-chebyshev-inequality-for-random-variables]]: For square-integrable $W$ and $a>0$, $P(|W-\mathbb E W|\ge a)\le\operatorname{Var}(W)/a^2$.

## Proof

1.1 For each fixed $z=(x,y)$, the definition of $\hat j$ gives $\mathbb E_Q[r_\Theta(z)]=p_k(x)-p_{\hat j(x,y)}(x)=m(z)$. Also $|r_\theta(z)|\le1$, so all displayed means and covariances are finite. [given, F1, F2, algebra]

2.1 The bounded jointly measurable class indicators and [F5] make $p_j$ and the finite maximizer $\hat j$ measurable. By [F4] the pair $(\Theta,\Theta',Z)$ has product law, and [F5] permits exchanging the integrals of these bounded functions. Thus $\mathbb E_{Q\times Q}[\operatorname{Cov}_P(r_\Theta,r_{\Theta'})]=\mathbb E_P[m(Z)^2]-s^2=\operatorname{Var}_P(m(Z))$. Indeed, the product of the two conditional raw-margin means is $m(z)^2$, while the product of their $P$-means integrates to $(\mathbb E_Pm)^2=s^2$. If both standard deviations are positive, covariance equals correlation times their product; if either is zero, both the covariance and the weighted correlation term are zero. Thus the covariance expression for $\rho$ is exactly Breiman's weighted mean raw-margin correlation. [F3, F4, F5, step 1.1, algebra]

3.1 Suppose $d>0$. From step 2.1, $\rho=\operatorname{Var}_P(m)/d^2\ge0$. Since $r_\theta^2\le1$, $\mathbb E_Q[sd(\Theta)^2]=\mathbb E_{Q\times P}[r_\Theta^2]-\mathbb E_Q[(\mathbb E_Pr_\Theta)^2]\le1-s^2$. The final inequality uses $\mathbb E_Q[(\mathbb E_Pr_\Theta)^2]\ge(\mathbb E_Q\mathbb E_Pr_\Theta)^2=s^2$, by [F6] with one factor equal to $1$; [F5] and step 1.1 give $\mathbb E_Q\mathbb E_Pr_\Theta=s$. The same inequality gives $d^2\le\mathbb E_Q[sd(\Theta)^2]$. Therefore $\operatorname{Var}_P(m)=\rho d^2\le\rho(1-s^2)$. [F2, F3, F5, F6, step 1.1, step 2.1, algebra]

4.1 Since $s>0$, the event $\{m(Z)<0\}$ is contained in $\{|m(Z)-s|\ge s\}$. Applying [F7] and then step 3.1 gives $P\{m(Z)<0\}\le\operatorname{Var}_P(m(Z))/s^2\le\rho(1-s^2)/s^2$. [F7, step 3.1, algebra]

5.1 If $d=0$, then $sd\ge0$ and $\mathbb E_Qsd=0$. For each $n\ge1$, $Q\{sd\ge1/n\}=0$, since otherwise $\mathbb E_Qsd>0$; taking the countable union gives $sd=0$ $Q$-almost everywhere. For each such $\theta$, $\mathbb E_P(r_\theta-\mathbb E_Pr_\theta)^2=0$, so the same nonnegative-integral argument makes $r_\theta(Z)=\mathbb E_Pr_\theta$ $P$-almost surely. By [F5], $m(Z)=\mathbb E_Qr_\Theta(Z)$ is therefore the constant $\mathbb E_Pm(Z)=s>0$ for $P$-almost every $Z$. Hence $P\{m(Z)<0\}=0$, as claimed in this case. [F2, F3, F5, step 1.1, algebra] ∎
