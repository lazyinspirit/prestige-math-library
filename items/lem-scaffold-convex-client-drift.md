---
id: lem-scaffold-convex-client-drift
kind: lemma
title: Convex SCAFFOLD client-drift bound
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-scaffold
  - def-scaffold-analysis-trajectory-and-errors
  - lem-relaxed-euclidean-squared-norm
  - lem-smooth-convex-gradient-difference
  - lem-convex-gradient-step-nonexpansive
  - lem-finite-sum-gradient-is-average
  - def-euclidean-inner-product
  - def-axiom-of-choice
  - def-filtration-and-filtered-probability-space
  - def-conditional-expectation-as-an-ae-class
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-taking-out-what-is-known
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - lem-scaffold-control-tracking-identity
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD, Appendix E.1, Lemma 12"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
proof_strategy: direct
---

## Statement

Let $f_i:\mathbb R^d\to\mathbb R$ be convex, differentiable and
$\beta$-smooth, with $f=N^{-1}\sum_i f_i$ minimized at $x^\star$. Run
Option II SCAFFOLD for $K\ge1$ local steps with server scale $\eta_g\ge1$,
local step $\eta_l$, and fresh conditionally unbiased local stochastic
gradients of variance at most $\sigma^2$. Use controls satisfying
$c=N^{-1}\sum_i c_i$, initialized by $c_i^0=\nabla f_i(x_0)$ and
$c^0=N^{-1}\sum_i c_i^0$. Let $E_r,C_{r-1}$ be the local-drift and convex
control-lag quantities in the SCAFFOLD analysis-trajectory definition. For
$\widetilde\eta=K\eta_l\eta_g\le1/(81\beta)$,
$$ 3\beta\widetilde\eta E_r \le\frac{2\widetilde\eta^2}{3}C_{r-1} +\frac{\widetilde\eta}{25\eta_g^2} \mathbb E[f(x_{r-1})-f^\star] +\frac{\widetilde\eta^2\sigma^2}{K\eta_g^2}. $$

## Statement references

[Karimireddy et al., SCAFFOLD, Appendix E.1, Lemma 12 and its proof](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

## Facts & Assumptions

**Given:** The SCAFFOLD local updates, controls, error quantities and stochastic-gradient assumptions in the Statement.

[F1] [[alg-scaffold]]: a local update subtracts $\eta_l(g_i(y)-c_i+c)$.

[F2] [[def-scaffold-analysis-trajectory-and-errors]]: $E_r$ averages squared displacements at the query points $y_{i,k-1}^r$; $C_{r-1}$ is the average expected squared error of the mean full gradient at each client's stored anchors from $\nabla f_i(x^\star)$.

[F3] [[lem-convex-gradient-step-nonexpansive]]: if $\eta_l\le2/\beta$, then $y\mapsto y-\eta_l(\nabla f_i(y)-\nabla f_i(x))$ does not increase the distance from $x$.

[F4] [[lem-relaxed-euclidean-squared-norm]] and [[def-euclidean-inner-product]]: for $a>0$, $\|u+v\|_2^2\le(1+a)\|u\|_2^2+(1+a^{-1})\|v\|_2^2$; squared norms expand bilinearly.

[F5] [[lem-smooth-convex-gradient-difference]] and [[lem-finite-sum-gradient-is-average]]: $\nabla f(x^\star)=0$ and $N^{-1}\sum_i\|\nabla f_i(x)-\nabla f_i(x^\star)\|_2^2\le 2\beta(f(x)-f^\star)$.

[F6] [[def-filtration-and-filtered-probability-space]], [[def-conditional-expectation-as-an-ae-class]], [[thm-basic-algebra-and-order-properties-of-conditional-expectation]], [[thm-taking-out-what-is-known]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], and [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: the current local oracle error has conditional mean zero and conditional second moment at most $\sigma^2$; the needed conditional expectations and finite sums obey the stated tower and linearity rules.

[F7] [[lem-scaffold-control-tracking-identity]]: for every client the current control equals the mean full gradient at its stored anchors plus a residual with second moment at most $\sigma^2/K$.

[A1] The stochastic-gradient assumptions and gradient-consistent initialization in the Statement hold at every round and local query.

[A2] Assume the Axiom of Choice. It is used only to invoke the published conditional-expectation-as-an-a.e.-class interface in [F6].

## Proof

1.1 If $K=1$, every query is the round-start point, so $E_r=0$ and the claim [given]
follows. Suppose $K\ge2$. Put
$m_i=K^{-1}\sum_k\nabla f_i(\alpha_{i,k}^{r-1})$,
$e_i=c_i^{r-1}-m_i$, $a_i=m_i-\nabla f_i(x^\star)$,
$\bar a=N^{-1}\sum_i a_i$, and $\bar e=N^{-1}\sum_i e_i$. Since
$c=N^{-1}\sum_i c_i$ and $N^{-1}\sum_i\nabla f_i(x^\star)=0$, the residual
vector in client $i$'s update is
$$ v_i=c-c_i+\nabla f_i(x_{r-1}) =\bar a-a_i+\bar e-e_i+ (\nabla f_i(x_{r-1})-\nabla f_i(x^\star)). $$
For each realization,
$N^{-1}\sum_i\|\bar a-a_i\|_2^2\le N^{-1}\sum_i\|a_i\|_2^2$;
the same identity applies to $e_i$. Thus [F2], [F5], and [F7], followed by
the three-term squared-norm bound, give
$$ \frac1N\sum_i\mathbb E\|v_i\|_2^2 \le3C_{r-1}+3\frac{\sigma^2}{K} +6\beta\mathbb E[f(x_{r-1})-f^\star] \le6\left(C_{r-1}+\beta\mathbb E[f(x_{r-1})-f^\star] +\frac{\sigma^2}{K}\right). $$
For $d_{i,k}=y_{i,k}^r-x_{r-1}$, write the update as
$d_{i,k}=T_i(y_{i,k-1}^r)-x_{r-1}-\eta_l v_i-\eta_l\xi_{i,k}$,
where $T_i(y)=y-\eta_l(\nabla f_i(y)-\nabla f_i(x_{r-1}))$ and
$\xi_{i,k}=g_i(y_{i,k-1}^r)-\nabla f_i(y_{i,k-1}^r)$. The vector before
$\xi_{i,k}$ is measurable before that draw, so conditional centering removes
the cross term and adds at most $\eta_l^2\sigma^2$. Apply [F3] and [F4]
with $a=1/(K-1)$; since $\eta_l\le1/(81\beta K\eta_g)\le2/\beta$,
$$ \mathbb E\|d_{i,k}\|_2^2 \le\left(1+\frac1{K-1}\right)\mathbb E\|d_{i,k-1}\|_2^2 +K\eta_l^2\mathbb E\|v_i\|_2^2+\eta_l^2\sigma^2. $$ [F1, F3, F4, F6, F7, A1, A2, given, algebra]

1.2 Since $d_{i,0}=0$ and [given]
$\sum_{j=0}^{k-1}(1+1/(K-1))^j\le3K$ for $1\le k\le K$, the recurrence
in step 1.1 bounds each query-point second moment by
$3K(K\eta_l^2\mathbb E\|v_i\|_2^2+\eta_l^2\sigma^2)$. Average over
clients and query indices and use the bound on $v_i$ from step 1.1. The
result is
$$ E_r\le18K^2\eta_l^2\left(C_{r-1}+\beta\mathbb E[f(x_{r-1})-f^\star]\right) +21K\eta_l^2\sigma^2. $$ [F2, step 1.1, given, algebra]

2.1 Multiply step 1.2 by $3\beta\widetilde\eta$ and substitute $\eta_l=\widetilde\eta/(K\eta_g)$. The coefficients of $C_{r-1}$, the function gap, and $\sigma^2$ are respectively $54\beta\widetilde\eta^3/\eta_g^2$, $54\beta^2\widetilde\eta^3/\eta_g^2$, and $63\beta\widetilde\eta^3/(K\eta_g^2)$. Since $\eta_g\ge1$ and $\beta\widetilde\eta\le1/81$, these are at most $2\widetilde\eta^2/3$, $\widetilde\eta/(25\eta_g^2)$, and $\widetilde\eta^2/(K\eta_g^2)$, respectively. This proves the claim. [F2, step 1.2, given, algebra] ∎
