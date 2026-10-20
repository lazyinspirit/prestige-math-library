---
id: lem-scaffold-nonconvex-client-drift
kind: lemma
title: Nonconvex SCAFFOLD query-point drift bound
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-scaffold
  - def-scaffold-analysis-trajectory-and-errors
  - lem-scaffold-control-tracking-identity
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
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD, Appendix E.2, Lemma 16"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $f_i:\mathbb R^d\to\mathbb R$ have $\beta$-Lipschitz gradients with $\beta>0$ and
let $f=N^{-1}\sum_i f_i$ be bounded below. Run Option II SCAFFOLD with
$1\le S\le N$ uniformly sampled clients, $K\ge1$ local steps, server scale
$\eta_g\ge1$, and fresh conditionally unbiased local stochastic gradients
with within-client variance at most $\sigma^2$. Initialize
$c_i^0=\nabla f_i(x_0)$ and $c^0=N^{-1}\sum_i c_i^0$. Let
$\widetilde\eta=K\eta_l\eta_g$ and let $E_r,\Xi_{r-1}$ be the query-point
drift and anchor-tracking errors in the SCAFFOLD analysis-trajectory
definition. If
$$ 0<\widetilde\eta\le\frac{(S/N)^{2/3}}{24\beta}, $$
then
$$ E_r\le72K^2\eta_l^2\left( \mathbb E\|\nabla f(x_{r-1})\|_2^2 +\beta^2\Xi_{r-1}\right)+96K\eta_l^2\sigma^2. $$

## Statement references

[Karimireddy et al., SCAFFOLD, Appendix E.2, Lemma 16 and its proof](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

## Facts & Assumptions

**Given:** The Option II local updates, anchor errors and stochastic-gradient assumptions in the Statement.

[F1] [[alg-scaffold]]: a local update is $y_{i,k}=y_{i,k-1}-\eta_l(g_i(y_{i,k-1})-c_i+c)$.

[F2] [[def-scaffold-analysis-trajectory-and-errors]]: $E_r$ averages squared displacements of local query points $y_{i,k-1}^r$ from $x_{r-1}$; $\Xi_{r-1}$ averages squared distances of stored anchors from $x_{r-1}$.

[F3] [[lem-scaffold-control-tracking-identity]]: each control $c_i$ is the mean full gradient at its stored anchors plus a residual whose second moment is at most $\sigma^2/K$, and $c=N^{-1}\sum_i c_i$.

[F4] [[lem-relaxed-euclidean-squared-norm]] and [[def-euclidean-inner-product]]: for $a>0$, $\|u+v\|_2^2\le(1+a)\|u\|_2^2+(1+a^{-1})\|v\|_2^2$; the squared norm of three vectors is at most three times the sum of their squared norms.

[F5] [[def-filtration-and-filtered-probability-space]], [[def-conditional-expectation-as-an-ae-class]], [[thm-basic-algebra-and-order-properties-of-conditional-expectation]], [[thm-taking-out-what-is-known]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], and [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: conditional expectation is linear, preserves expectations and inequalities, and permits taking out integrable history-measurable factors. The centering and variance bounds used below are the oracle hypotheses in [A1], not consequences of these interfaces.

[A1] The stochastic-gradient assumptions and gradient-consistent initialization in the Statement hold at every round and local query.

[A2] Assume the Axiom of Choice. It is used only to invoke the published conditional-expectation-as-an-a.e.-class interface in [F5].

## Proof

1.1 If $K=1$, all query points are at the round start, so $E_r=0$. Suppose [given]
$K\ge2$, write $x=x_{r-1}$, and define
$m_i=K^{-1}\sum_k\nabla f_i(\alpha_{i,k}^{r-1})$,
$e_i=c_i-m_i$, $a_i=m_i-\nabla f_i(x)$, and their client means
$\bar a=N^{-1}\sum_i a_i$, $\bar e=N^{-1}\sum_i e_i$. The corrected
control vector in client $i$'s local update is
$$ v_i=c-c_i+\nabla f_i(x) =\nabla f(x)+\bar a-a_i+\bar e-e_i. $$
For each realization,
$N^{-1}\sum_i\|\bar a-a_i\|_2^2\le N^{-1}\sum_i\|a_i\|_2^2$;
the same holds for $e_i$. Lipschitzness and Jensen give
$N^{-1}\sum_i\mathbb E\|a_i\|_2^2\le\beta^2\Xi_{r-1}$, and [F3] gives
$N^{-1}\sum_i\mathbb E\|e_i\|_2^2\le\sigma^2/K$. Apply the three-vector
bound [F4] to obtain
$$ \frac1N\sum_i\mathbb E\|v_i\|_2^2 \le3\left(\mathbb E\|\nabla f(x)\|_2^2 +\beta^2\Xi_{r-1}+\frac{\sigma^2}{K}\right). $$ [F2, F3, F4, F5, A1, given, algebra]

1.2 Put $d_{i,k}=y_{i,k}^r-x$. Define [given]
$T_i(y)=y-\eta_l(\nabla f_i(y)-\nabla f_i(x))$ and
$\xi_{i,k}=g_i(y_{i,k-1}^r)-\nabla f_i(y_{i,k-1}^r)$. The update is
$d_{i,k}=T_i(y_{i,k-1}^r)-x-\eta_l v_i-\eta_l\xi_{i,k}$, and
$\|T_i(y_{i,k-1}^r)-x\|_2\le(1+\eta_l\beta)\|d_{i,k-1}\|_2$.
Conditional centering of $\xi_{i,k}$ removes its cross term with the
pre-draw vector. Use [F4] with $a=1/(K-1)$ to get
$$ \mathbb E\|d_{i,k}\|_2^2 \le q\,\mathbb E\|d_{i,k-1}\|_2^2 +K\eta_l^2\mathbb E\|v_i\|_2^2+\eta_l^2\sigma^2, \qquad q=\left(1+\frac1{K-1}\right)(1+\eta_l\beta)^2. $$
The step bound implies $\eta_l\beta\le1/(24K)$. For $K\ge2$,
$1+1/(K-1)\le1+2/K$ and
$(1+1/(24K))^2\le1+1/(10K)$, hence $q\le1+3/K$. Therefore
$\sum_{j=0}^{K-1}q^j\le K(1+3/K)^K\le Ke^3<24K$. Unrolling from
$d_{i,0}=0$ and averaging the query points gives
$$ E_r\le24K^2\eta_l^2\frac1N\sum_i\mathbb E\|v_i\|_2^2 +24K\eta_l^2\sigma^2. $$ [F1, F2, F4, F5, step 1.1, A1, A2, given, algebra]

2.1 Substitute the control-vector bound from step 1.1 into step 1.2. [given]
Collecting the gradient, anchor-tracking and oracle-variance terms gives
$$ E_r\le72K^2\eta_l^2\left( \mathbb E\|\nabla f(x_{r-1})\|_2^2+\beta^2\Xi_{r-1}\right) +96K\eta_l^2\sigma^2, $$
which is the Statement. [F2, step 1.1, step 1.2, algebra] ∎
