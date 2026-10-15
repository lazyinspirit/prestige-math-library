---
id: thm-mean-and-variance-under-biological-and-technical-replication
kind: theorem
title: Mean and variance under balanced biological and technical replication
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-biological-and-technical-replication-model
  - def-moments-variance-and-covariance
  - thm-covariance-bilinearity-and-symmetry
  - thm-factorization-of-expectations-for-independent-variables
  - def-independent-random-elements
  - cor-expectation-linearity-monotonicity-and-modulus-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 1 §1.5, printed pp. 8–10"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
    - title: "Susan Holmes and Wolfgang Huber, Modern Statistics for Modern Biology, Chapter 13 §§13.3.2, 13.4.2, 13.4.5"
      url: "https://www.huber.embl.de/msmb/13-chap.html"
verification:
  precheck: pass
---

## Statement

Assume the balanced model of
[[def-biological-and-technical-replication-model]], with $n,m\ge1$, and set
$$\bar Y=\frac1{nm}\sum_{i=1}^n\sum_{j=1}^mY_{ij},\qquad \bar B=\frac1n\sum_{i=1}^nB_i,\qquad \bar E=\frac1{nm}\sum_{i=1}^n\sum_{j=1}^mE_{ij},\qquad \bar\tau=\frac1n\sum_{i=1}^n\tau_i.$$
For a fixed treatment schedule $(\tau_i)_{i=1}^n$,
$$\mathbb E[\bar Y]=\mu+\bar\tau,\qquad \operatorname{Var}(\bar Y)=\frac{\sigma_b^2}{n}+\frac{\sigma_e^2}{nm}.$$
If instead $\boldsymbol\tau=(\tau_1,\ldots,\tau_n)$ is square-integrable and
random under the assignment-averaged law, then
$$\mathbb E[\bar Y]=\mu+\mathbb E[\bar\tau],\qquad \operatorname{Var}(\bar Y)=\frac{\sigma_b^2}{n}+\frac{\sigma_e^2}{nm}+\operatorname{Var}(\bar\tau)+2\operatorname{Cov}(\bar\tau,\bar B)+2\operatorname{Cov}(\bar\tau,\bar E).$$
Thus, when $\bar\tau$ is independent of $\bar B$ and $\bar E$, the assignment
contribution is
$\operatorname{Var}(\bar\tau)=n^{-2}\sum_{i,k=1}^n\operatorname{Cov}(\tau_i,\tau_k)$.
If, in addition, the $\tau_i$ are mutually independent with common variance
$\sigma_\tau^2$, the full variance is
$\sigma_b^2/n+\sigma_e^2/(nm)+\sigma_\tau^2/n$. Without independence of the
treatment average from $\bar B,\bar E$, the two covariance terms remain. No
Gaussian assumption is required.

## Facts & Assumptions

**Given:** The finite balanced model and the random-variable conventions in
[[def-biological-and-technical-replication-model]]. For the second branch,
$\boldsymbol\tau$ has finite second moments under the declared assignment
law.

[F1] [[def-biological-and-technical-replication-model]]: $Y_{ij}=\mu+\tau_i+B_i+E_{ij}$; the $B_i$ and $E_{ij}$ have zero means, common variances $\sigma_b^2$ and $\sigma_e^2$, and the complete finite family of biological and technical random variables is mutually independent.

[F2] [[def-moments-variance-and-covariance]]: for square-integrable real random variables, variance is the expectation of the centered square and covariance is the expectation of the product of centered variables.

[F3] [[thm-covariance-bilinearity-and-symmetry]]: covariance expands bilinearly over finite linear combinations of square-integrable random variables.

[F4] [[thm-factorization-of-expectations-for-independent-variables]]: products of independent integrable real random variables are integrable and their expectations factor.

[F5] [[def-independent-random-elements]]: mutual independence means the generated sigma-algebras form an independent family; the random variables in [F1] therefore satisfy the independence hypothesis of [F4].

[F6] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectation is linear for finite linear combinations of integrable random variables.

## Proof

**Given:** The assumptions in [F1], $n,m\ge1$, and, in the random-treatment branch, a square-integrable treatment-contribution vector.

1.1 Summing the model in [F1] over $i,j$ gives $\bar Y=\mu+\bar\tau+\bar B+\bar E$. Each summand is integrable, so [F6] and the zero means in [F1] give $\mathbb E[\bar Y]=\mu+\bar\tau$ when $\boldsymbol\tau$ is fixed, and $\mathbb E[\bar Y]=\mu+\mathbb E[\bar\tau]$ when it is random. [given, F1, F6, algebra]

1.2 For distinct biological indices $i\ne k$, distinct technical indices $(i,j)\ne(k,\ell)$, and any biological-technical pair $(i,(k,\ell))$, the variables in each pair are independent by [F1] and [F5]. They are integrable because they are square-integrable. Applying [F4] to identity functions gives expectation of the product equal to the product of their zero means; [F2] therefore makes every such off-diagonal covariance zero. By [F3], bilinearity over the finite index families then gives $\operatorname{Cov}(\bar B,\bar E)=\frac{1}{n^2m}\sum_{i=1}^n\sum_{k=1}^n\sum_{\ell=1}^m\operatorname{Cov}(B_i,E_{k\ell})=0$. [F1, F2, F3, F4, F5]

2.1 Bilinearity [F3] expands $\operatorname{Var}(\bar B)$ into $n^2$ covariance terms with coefficient $n^{-2}$. By 1.2 the off-diagonal terms vanish, and the $n$ diagonal terms equal $\sigma_b^2$ by [F1] and [F2]. Hence $\operatorname{Var}(\bar B)=n^{-2}n\sigma_b^2=\sigma_b^2/n$. [F1, F2, F3, step 1.2, algebra]

2.2 Bilinearity [F3] expands $\operatorname{Var}(\bar E)$ into $(nm)^2$ covariance terms with coefficient $(nm)^{-2}$. By 1.2 the off-diagonal terms vanish, and the $nm$ diagonal terms equal $\sigma_e^2$ by [F1] and [F2]. Hence $\operatorname{Var}(\bar E)=(nm)^{-2}(nm)\sigma_e^2=\sigma_e^2/(nm)$. [F1, F2, F3, step 1.2, algebra]

3.1 With fixed $\boldsymbol\tau$, $\mu+\bar\tau$ is constant and has zero covariance with every square-integrable random variable by [F2]. Expand the variance of $\bar B+\bar E$ using [F3]; its cross-covariance is zero by 1.2. Substituting 2.1 and 2.2 proves the fixed-schedule formula. [F2, F3, step 1.2, step 2.1, step 2.2, algebra]

4.1 With random $\boldsymbol\tau$, expand the variance of $\bar\tau+\bar B+\bar E$ by [F3]. The $\bar B$-$\bar E$ covariance is zero by 1.2, and 2.1–2.2 give the two component variances, yielding exactly the displayed general formula with both treatment cross-covariances retained. If $\bar\tau$ is independent of $\bar B$ and $\bar E$, [F4] makes those cross-covariances zero. Expanding $\operatorname{Var}(n^{-1}\sum_i\tau_i)$ by [F3] gives the stated covariance sum; when the $\tau_i$ are mutually independent with common variance $\sigma_\tau^2$, only its $n$ diagonal terms remain, giving $\sigma_\tau^2/n$. [F1, F3, F4, step 1.2, step 2.1, step 2.2, algebra] ∎

## Remarks

The proof uses only finite sums and moment identities, so it is choice-free. The
assignment contribution is not generally $\sigma_\tau^2/n$: under a constrained
or otherwise dependent assignment law, its covariance sum must be evaluated
under that law. The identity is conditional on the stated model assumptions; it
does not validate them or provide an exact normal inference procedure.
