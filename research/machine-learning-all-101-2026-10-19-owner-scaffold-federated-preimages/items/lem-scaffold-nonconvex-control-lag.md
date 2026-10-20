---
id: lem-scaffold-nonconvex-control-lag
kind: lemma
title: Nonconvex SCAFFOLD control-anchor tracking recursion
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - alg-scaffold
  - def-scaffold-analysis-trajectory-and-errors
  - lem-scaffold-control-tracking-identity
  - lem-scaffold-nonconvex-server-variance
  - lem-uniform-client-sampling-moments
  - lem-relaxed-euclidean-squared-norm
  - def-euclidean-inner-product
  - def-axiom-of-choice
  - def-filtration-and-filtered-probability-space
  - def-conditional-expectation-as-an-ae-class
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-taking-out-what-is-known
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - cor-expectation-linearity-monotonicity-and-modulus-bound
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD, Appendix E.2, Lemma 15"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
proof_strategy: direct
---

## Statement

Let $f_i:\mathbb R^d\to\mathbb R$ have $\beta$-Lipschitz gradients and let
$f=N^{-1}\sum_i f_i$. Run Option II SCAFFOLD with $1\le S\le N$ uniformly
sampled clients, $K\ge1$ local steps, and fresh conditionally unbiased local
stochastic gradients of within-client variance at most $\sigma^2$. Write
$p=S/N$, $\widetilde\eta=K\eta_l\eta_g$, and let $E_r,\Xi_r$ be the drift
and tracking errors in the SCAFFOLD analysis-trajectory definition. If
$$ 0<\widetilde\eta\le\frac{p^{2/3}}{24\beta}, $$
then
$$ \begin{aligned} \Xi_r\le{}&\left(1-\frac{11p}{24}\right)\Xi_{r-1} +\frac{p^{1/3}}{50\beta^2} \mathbb E\|\nabla f(x_{r-1})\|_2^2 +\frac{73p^{1/3}}{36}E_r +\frac{p\sigma^2}{16KS\beta^2}. \end{aligned} $$

## Statement references

[Karimireddy et al., SCAFFOLD, Appendix E.2, Lemma 15 and its proof](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

## Facts & Assumptions
**Given:** The SCAFFOLD anchor update, stochastic-gradient assumptions and tracking errors in the Statement.

[F1] [[alg-scaffold]]: selected clients replace controls by Option II local updates; unselected clients keep controls and anchors.

[F2] [[def-scaffold-analysis-trajectory-and-errors]]: $\Xi_r$ is the mean squared distance of stored anchors from $x_r$, and $E_r$ is the mean squared query-point drift from $x_{r-1}$.

[F3] [[lem-scaffold-control-tracking-identity]]: Option II controls are the averages of realized query gradients; the full-gradient means at their stored anchors give their conditional means, and the server control is the client-control mean.

[F4] [[lem-scaffold-nonconvex-server-variance]]: the conditional mean and second moment of the server displacement are bounded by local drift, tracking error, objective gradient and within-client variance.

[F5] [[lem-uniform-client-sampling-moments]]: a client is selected with probability $p$ in a uniform size-$S$ sample.

[F6] [[lem-relaxed-euclidean-squared-norm]] and [[def-euclidean-inner-product]]: squared norms of sums obey the stated relaxed-square and Young inequalities.

[F7] [[def-filtration-and-filtered-probability-space]], [[def-conditional-expectation-as-an-ae-class]], [[thm-basic-algebra-and-order-properties-of-conditional-expectation]], [[thm-taking-out-what-is-known]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], and [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: condition on the past and average current round randomness.

[A1] The gradient and stochastic-oracle hypotheses in the Statement hold at every local query.

[A2] Assume the Axiom of Choice. It is used only to invoke the published conditional-expectation-as-an-a.e.-class interface in [F7].

## Proof

1.1 Let $\Delta x=x_r-x_{r-1}$. For $p<1$, choose [given]
$b=p/[2(1-p)]$. Conditioned on the prior history, a client anchor is
updated with probability $p$ and otherwise persists. Expand its squared
distance from $x_r=x_{r-1}+\Delta x$; apply [F6] with Young parameter $b$
to the cross term for an unselected anchor, and use
$\|y_{i,k-1}^r-x_r\|_2^2\le
2\|y_{i,k-1}^r-x_{r-1}\|_2^2+2\|\Delta x\|_2^2$ for a selected anchor.
Average over clients and anchors. The result is
$$ \Xi_r\le(1-p)(1+b)\Xi_{r-1}+2pE_r +2\mathbb E\|\Delta x\|_2^2 +b^{-1}\mathbb E\|\mathbb E[\Delta x\mid\mathcal F_{r-1}]\|_2^2. $$
For $p=1$ the same inequality holds with the terms involving $1-p$ and
$b^{-1}$ omitted. The control identity [F3] supplies the stored-anchor
representation used in the tracking error. [F1, F2, F3, F5, F6, F7, A1, A2,
given, algebra]

2.1 Substitute both bounds from [F4] into step 1.1. For $p<1$, using [given]
$b=p/[2(1-p)]$ gives
$$ \begin{aligned} \Xi_r\le{}&\bigl((1-p)(1+b)+24\beta^2\widetilde\eta^2\bigr)\Xi_{r-1} +\left(2p+12\beta^2\widetilde\eta^2+\frac{2\beta^2\widetilde\eta^2}{b}\right)E_r\\ &+\left(6+\frac2b\right)\widetilde\eta^2 \mathbb E\|\nabla f(x_{r-1})\|_2^2 +\frac{36\widetilde\eta^2\sigma^2}{KS}. \end{aligned} $$
For $p=1$, take the limit $b\to\infty$ in this expression. [F4, step 1.1,
given, algebra]

3.1 Since $\widetilde\eta^2\beta^2\le p^{4/3}/576$, the coefficient of $\Xi_{r-1}$ in step 2.1 is at most $1-p/2+p/24=1-11p/24$. Also $\widetilde\eta^2(6+2/b)\le p^{1/3}/(50\beta^2)$ and $2p+12\beta^2\widetilde\eta^2+2\beta^2\widetilde\eta^2/b \le73p^{1/3}/36$. Finally, $36\widetilde\eta^2\sigma^2/(KS)\le p\sigma^2/(16KS\beta^2)$ because $p\le1$. These estimates also hold at $p=1$ by the stated limiting case. Substitute them into step 2.1 to obtain the claim. [step 2.1, given, algebra] ∎