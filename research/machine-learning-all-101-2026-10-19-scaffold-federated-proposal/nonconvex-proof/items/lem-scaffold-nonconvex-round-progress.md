---
id: lem-scaffold-nonconvex-round-progress
kind: lemma
title: Nonconvex SCAFFOLD progress in one communication round
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - alg-scaffold
  - def-scaffold-analysis-trajectory-and-errors
  - lem-scaffold-nonconvex-server-variance
  - lem-scaffold-nonconvex-control-lag
  - lem-scaffold-nonconvex-client-drift
  - lem-relaxed-euclidean-squared-norm
  - lem-l-smoothness-descent-inequality
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
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD, Appendix E.2, Lemma 17"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
proof_strategy: direct
---

## Statement

Let $f_i:\mathbb R^d\to\mathbb R$ have $\beta$-Lipschitz gradients with $\beta>0$, and let $f=N^{-1}\sum_i f_i$ be bounded below by $f^\star$. Run Option II SCAFFOLD with $1\le S\le N$ uniformly sampled clients, $K\ge1$ local steps, server scale $\eta_g\ge1$, and fresh conditionally unbiased local stochastic gradients of within-client variance at most $\sigma^2$. Initialize $c_i^0=\nabla f_i(x_0)$ and $c^0=N^{-1}\sum_i c_i^0$. Client samples are fresh and independent of prior history and counterfactual oracle draws. Let $p=S/N$, $t=\widetilde\eta=K\eta_l\eta_g$, and let $\Xi_r$ be the control-anchor tracking error. If
$$ 0<t\le\frac{p^{2/3}}{100\beta}, $$
then the potential
$$ P_r=\mathbb E[f(x_r)-f^\star]+\frac{24\beta^3t^2}{p}\Xi_r $$
satisfies
$$ P_r\le P_{r-1}-\frac t3\mathbb E\|\nabla f(x_{r-1})\|_2^2+\frac{10\beta t^2\sigma^2}{KS}\left(1+\frac S{\eta_g^2}\right). $$

## Statement references

[Karimireddy et al., SCAFFOLD, Appendix E.2, Lemma 17 and its proof](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

## Facts & Assumptions

**Given:** The nonconvex SCAFFOLD update, smoothness and stochastic-gradient assumptions in the Statement.

[F1] [[alg-scaffold]]: the server update is the average of selected corrected local updates with global scale $\eta_g$.

[F3] [[lem-scaffold-nonconvex-server-variance]]: the server update has the stated conditional mean and second-moment bounds.

[F4] [[lem-scaffold-nonconvex-control-lag]]: the exact tracking recursion has coefficients $1-p/2+72\beta^2t^2$, $2p+(36+8/p)\beta^2t^2$, $(18+8/p)t^2$, and $108t^2$ for the previous tracking error, drift, squared gradient and $\sigma^2/(KS)$.

[F5] [[lem-scaffold-nonconvex-client-drift]]: $E_r\le72t^2(\mathbb E\|\nabla f(x_{r-1})\|_2^2+\beta^2\Xi_{r-1})/\eta_g^2+96t^2\sigma^2/(K\eta_g^2)$.

[F6] [[lem-l-smoothness-descent-inequality]]: $\beta$-Lipschitz gradients give $f(x+u)\le f(x)+\langle\nabla f(x),u\rangle+ (\beta/2)\|u\|_2^2$.

[F7] [[lem-relaxed-euclidean-squared-norm]] and [[def-euclidean-inner-product]]: squared norms and inner products expand by the Euclidean algebra used in the two moment lemmas.

[F8] [[def-filtration-and-filtered-probability-space]], [[def-conditional-expectation-as-an-ae-class]], [[thm-basic-algebra-and-order-properties-of-conditional-expectation]], [[thm-taking-out-what-is-known]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], and [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: conditional expectations are linear and preserve the integrable bounds.

[A1] The smoothness and stochastic-oracle assumptions in the Statement hold at every query.

[A2] Assume the Axiom of Choice. It is used only to invoke the published conditional-expectation-as-an-a.e.-class interface in [F8].

## Proof

1.1 Put $x=x_{r-1}$ and $\Delta=x_r-x$. The smooth-descent bound [F6]
and conditional expectation give
$$ \mathbb E[f(x_r)-f(x_{r-1})] \le\mathbb E\langle\nabla f(x), \mathbb E[\Delta\mid\mathcal F_{r-1}]\rangle +\frac\beta2\mathbb E\|\Delta\|_2^2. $$
Use the first-moment bound in [F3] and
$-\langle u,v\rangle\le(\|u-v\|_2^2-\|u\|_2^2)/2$ with
$u=\nabla f(x)$ and $v$ the mean local-gradient displacement. Substituting
the second-moment bound in [F3] gives
$$ \begin{aligned} \mathbb E[f(x_r)-f(x_{r-1})] \le{}&-\left(\frac{\widetilde\eta}{2} -\frac{3\beta\widetilde\eta^2}{2}\right) \mathbb E\|\nabla f(x)\|_2^2\\ &+\left(\frac{\beta^2\widetilde\eta}{2} +3\beta^3\widetilde\eta^2\right)E_r +6\beta^3\widetilde\eta^2\Xi_{r-1} +\frac{9\beta\widetilde\eta^2\sigma^2}{KS}. \end{aligned} $$ [F1, F3, F6, F7, F8, A1, A2, given, algebra]

2.1 Write $h=\beta t$, $G=\mathbb E\|\nabla f(x_{r-1})\|_2^2$, $X=\Xi_{r-1}$, and $q=\sigma^2/(KS)$. Add $24\beta^3t^2/p$ times the tracking increment from [F4] to the inequality in step 1.1. The resulting coefficients of $E_r$, $X$, $G$ and noise are, respectively, $\beta^2td$, $\beta^3t^2(-6+1728h^2/p)$, $-t(1/2-3h/2)+24\beta^3t^4(18/p+8/p^2)$, and $9\beta t^2q+2592\beta^3t^4q/p$, where
$$ d=\frac12+51h+\frac{864h^3}{p}+\frac{192h^3}{p^2}. $$
Since $h\le p^{2/3}/100$ and $0<p\le1$, we have $h\le1/100$, $h^2/p\le1/10000$, $h^3/p\le1/1000000$, and $h^3/p^2\le1/1000000$. Consequently $d\le1.011056<11/10$. [F4, step 1.1, given, algebra]

2.2 Substitute [F5] into the drift term in step 2.1, using $d\le11/10$ and $\eta_g\ge1$. The total coefficient of $X$, divided by $\beta^3t^2$, is at most $-6+1728/10000+(396/5)/100=-5.0352<0$. The coefficient of $G$, divided by $t$, is at most $-1/2+3/200+624/1000000+(396/5)/10000=-0.476456\le-1/3$. Finally the variance contribution, divided by $\beta t^2q$ when $q>0$, is at most $9+2592/10000+(528/5)S/(100\eta_g^2)=9.2592+1.056S/\eta_g^2\le10(1+S/\eta_g^2)$; when $q=0$ all these variance terms vanish. Drop the nonpositive $X$ term. The resulting inequality is exactly the claimed potential recursion. [F5, step 2.1, given, algebra] ∎

## Remarks

The source states a sufficient step bound with absolute constant $1/24$. The locally proved result uses $1/100$ because it retains the dependence between the participation indicators, adaptive local queries, and the server displacement. This changes only absolute constants in the resulting nonconvex communication rate.
