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
  statement: ai-altered
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD, Appendix E.2, Lemma 15"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
proof_strategy: direct
---

## Statement

Let $f_i:\mathbb R^d\to\mathbb R$ have $\beta$-Lipschitz gradients with $\beta>0$ and let $f=N^{-1}\sum_i f_i$. Run Option II SCAFFOLD with $1\le S\le N$ uniformly sampled clients, $K\ge1$ local steps, server scale $\eta_g\ge1$, and fresh conditionally unbiased local stochastic gradients with within-client variance at most $\sigma^2$. Initialize $c_i^0=\nabla f_i(x_0)$ and $c^0=N^{-1}\sum_i c_i^0$. Current client samples are independent of the past and of the counterfactual local oracle draws. Write $p=S/N$, $t=\widetilde\eta=K\eta_l\eta_g$, and let $E_r,\Xi_r$ be the query-point drift and anchor-tracking errors. Then
$$ \Xi_r\le\left(1-\frac p2+72\beta^2t^2\right)\Xi_{r-1}+\left(2p+\left(36+\frac8p\right)\beta^2t^2\right)E_r+\left(18+\frac8p\right)t^2\mathbb E\|\nabla f(x_{r-1})\|_2^2+\frac{108t^2\sigma^2}{KS}. $$

## Statement references

[Karimireddy et al., SCAFFOLD, Appendix E.2, Lemma 15 and its proof](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

## Facts & Assumptions

**Given:** The SCAFFOLD anchor update, stochastic-gradient assumptions and tracking errors in the Statement.

[F1] [[alg-scaffold]]: selected clients replace controls by Option II local updates; unselected clients keep controls and anchors.

[F2] [[def-scaffold-analysis-trajectory-and-errors]]: $\Xi_r$ is the mean squared distance of stored anchors from $x_r$, and $E_r$ is the mean squared query-point drift from $x_{r-1}$.

[F3] [[lem-scaffold-control-tracking-identity]]: Option II controls are the averages of realized query gradients; the residual between each control and its mean full gradient at the stored anchors has unconditional second moment at most $\sigma^2/K$, and the server control is the client-control mean. No conditional centering given all adaptive anchors is asserted.

[F4] [[lem-scaffold-nonconvex-server-variance]]: the conditional mean and second moment of the server displacement are bounded by local drift, tracking error, objective gradient and within-client variance.

[F5] [[lem-uniform-client-sampling-moments]]: a client is selected with probability $p$ in a uniform size-$S$ sample.

[F6] [[lem-relaxed-euclidean-squared-norm]] and [[def-euclidean-inner-product]]: squared norms of sums obey the stated relaxed-square and Young inequalities.

[F7] [[def-filtration-and-filtered-probability-space]], [[def-conditional-expectation-as-an-ae-class]], [[thm-basic-algebra-and-order-properties-of-conditional-expectation]], [[thm-taking-out-what-is-known]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], and [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: condition on the past and average current round randomness.

[A1] The gradient and stochastic-oracle hypotheses in the Statement hold at every local query.

[A2] Assume the Axiom of Choice. It is used only to invoke the published conditional-expectation-as-an-a.e.-class interface in [F7].

## Proof

1.1 Put $x=x_{r-1}$, $\Delta=x_r-x$, $I_i=\mathbf1_{\{i\in\mathcal S_r\}}$, $z_{i,k}=\alpha_{i,k}^{r-1}-x$, and $w_{i,k}=y_{i,k-1}^r-x$. Let $Z=(KN)^{-1}\sum_{i,k}z_{i,k}$, $U=(KN)^{-1}\sum_{i,k}I_iw_{i,k}$, and $V=(KN)^{-1}\sum_{i,k}I_iz_{i,k}$. The actual anchor update is $\alpha_{i,k}^r-x=z_{i,k}+I_i(w_{i,k}-z_{i,k})$. Expand the squared distance after subtracting $\Delta$. Fresh uniform sampling gives the first two terms in $$ \Xi_r=(1-p)\Xi_{r-1}+pE_r+\mathbb E\|\Delta\|_2^2-2\mathbb E\langle Z,\Delta\rangle-2\mathbb E\langle U,\Delta\rangle+2\mathbb E\langle V,\Delta\rangle. $$ All cross terms retain their actual dependence on the selected sample. [F1, F2, F5, F6, F7, A1, A2, given, algebra]

2.1 Jensen gives $\mathbb E\|Z\|_2^2\le\Xi_{r-1}$. Since exactly $S$ clients participate, $\|U\|_2^2\le p(KN)^{-1}\sum_{i,k}I_i\|w_{i,k}\|_2^2$, and the analogous estimate holds for $V$ and $z_{i,k}$. The counterfactual local paths have the same law independently of the fresh participation sample, so $\mathbb E\|U\|_2^2\le p^2E_r$; old anchors are history-measurable, giving $\mathbb E\|V\|_2^2\le p^2\Xi_{r-1}$. Set $D_2=\mathbb E\|\Delta\|_2^2$ and $M_2=\mathbb E\|\mathbb E[\Delta\mid\mathcal F_{r-1}]\|_2^2$. Because $Z$ is history-measurable, Young's inequality bounds the three cross terms in step 1.1, respectively, by $p\Xi_{r-1}/4+4M_2/p$, $pE_r+pD_2$, and $p\Xi_{r-1}/4+4pD_2$. Hence $$ \Xi_r\le(1-p/2)\Xi_{r-1}+2pE_r+(1+5p)D_2+4M_2/p. $$ This also holds for $p=1$. [F2, F5, F6, F7, step 1.1, given, algebra]

3.1 Apply the two server moment bounds [F4] to step 2.1, using $1+5p\le6$. The coefficients of $\Xi_{r-1}$, $E_r$, $\mathbb E\|\nabla f(x_{r-1})\|_2^2$, and $\sigma^2/(KS)$ are bounded by $1-p/2+72\beta^2t^2$, $2p+(36+8/p)\beta^2t^2$, $(18+8/p)t^2$, and $108t^2$, respectively. These are the claimed coefficients. [F4, step 2.1, given, algebra] ∎
