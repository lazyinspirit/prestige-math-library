---
id: lem-fedavg-local-drift
kind: lemma
title: Client drift under FedAvg gradient dissimilarity
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - alg-fedavg
  - def-federated-objective-and-client-sampling
  - lem-convex-gradient-step-nonexpansive
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
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD, Appendix D.3, Lemma 8"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
proof_strategy: direct
---

## Statement

Let $N\ge S\ge1$, $K\ge1$, and let $f_i:\mathbb R^d\to\mathbb R$ be
convex differentiable functions with $\beta$-Lipschitz gradients,
$\beta>0$. Put $f=N^{-1}\sum_i f_i$ and suppose $x^\star$ minimizes $f$.
At a fixed FedAvg round start $x$, each sampled client performs $K$ local
updates as in the uniform-client analysis mode of the FedAvg algorithm, with
local step $\eta_l$, global scale $\eta_g\ge1$, and conditionally unbiased
local stochastic gradients of variance at most $\sigma^2$ at every queried
point. The client sample is uniform without replacement. Suppose $B\ge1$,
$G\ge0$, and for every $z\in\mathbb R^d$,
$$ \frac1N\sum_{i=1}^N\|\nabla f_i(z)\|_2^2 \le G^2+2\beta B^2(f(z)-f^\star). $$
Let $\widetilde\eta=K\eta_l\eta_g$, write $y_{i,k}$ for the local path
initialized at $y_{i,0}=x$, and define the query-point drift
$$ E=\frac1{KN}\sum_{i=1}^N\sum_{k=1}^K \mathbb E\|y_{i,k-1}-x\|_2^2, $$
where unselected clients are included as hypothetical copies of the same
local procedure. If
$$ 0<\widetilde\eta\le\frac1{8(B^2+1)\beta}, $$
then
$$ 3\beta\widetilde\eta E \le\frac{2\widetilde\eta}{3}(f(x)-f^\star) +\frac{\widetilde\eta^2\sigma^2}{2K\eta_g^2} +18\beta\widetilde\eta^3G^2. $$

## Statement references

[Karimireddy et al., SCAFFOLD, Appendix D.3, Lemma 8 and its proof](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

## Facts & Assumptions
**Given:** The equal-client objective, local paths and stochastic-gradient assumptions in the Statement.

[F1] [[alg-fedavg]]: each local update is $y_{i,k}=y_{i,k-1}-\eta_l g_i(y_{i,k-1})$.

[F2] [[lem-convex-gradient-step-nonexpansive]]: if $\eta_l\le2/\beta$, then $y\mapsto y-\eta_l(\nabla f_i(y)-\nabla f_i(x))$ does not increase the distance from $x$.

[F3] [[lem-relaxed-euclidean-squared-norm]] and [[def-euclidean-inner-product]]: squared norms expand bilinearly and $\|u+v\|_2^2\le(1+a)\|u\|_2^2+(1+a^{-1})\|v\|_2^2$ for $a>0$.

[F4] [[def-filtration-and-filtered-probability-space]], [[def-conditional-expectation-as-an-ae-class]], [[thm-basic-algebra-and-order-properties-of-conditional-expectation]], [[thm-taking-out-what-is-known]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], and [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: conditional expectations at each local query are linear, preserve the integrable bounds, and take history-measurable vectors out of the conditional expectation.

[F5] The population gradient second moment obeys the dissimilarity bound in the Statement.

[A1] Each oracle draw is conditionally unbiased given the full history before that draw and has conditional variance at most $\sigma^2$.

[A2] Assume the Axiom of Choice. It is used only to invoke the published conditional-expectation-as-an-a.e.-class interface in [F4].

## Proof

1.1 If $K=1$, every query point is $x$ and $E=0$. Suppose $K\ge2$. For a [given]
fixed client, put $d_k=y_{i,k}-x$, $g=\nabla f_i(x)$, and
$\xi_k=g_i(y_{i,k-1})-\nabla f_i(y_{i,k-1})$. Define
$T_i(y)=y-\eta_l(\nabla f_i(y)-\nabla f_i(x))$. The local update is
$d_k=T_i(y_{i,k-1})-x-\eta_l g-\eta_l\xi_k$. By [F2] and the stepsize
condition, $\|T_i(y_{i,k-1})-x\|_2\le\|d_{k-1}\|_2$. Conditional
centering of $\xi_k$ therefore gives
$$ q_k:=\mathbb E\|d_k\|_2^2 \le(\sqrt{q_{k-1}}+\eta_l\|g\|_2)^2+\eta_l^2\sigma^2. $$
Induction from $q_0=0$ yields
$q_k\le(k\eta_l\|g\|_2+\sqrt{k}\eta_l\sigma)^2
\le2k^2\eta_l^2\|g\|_2^2+2k\eta_l^2\sigma^2$: substituting the bound at
$k-1$ into the recurrence gives
$(k\eta_l\|g\|_2+\sqrt{k-1}\eta_l\sigma)^2+\eta_l^2\sigma^2$, which is
at most the claimed square. [F1, F2, F3, F4, A1, A2, given, induction,
algebra]

2.1 Average the step 1.1 bound for $d_{k-1}$ over $k=1,\ldots,K$ and [given]
clients. Since $K^{-1}\sum_{k=1}^K 2(k-1)^2\le2K^2/3$ and
$K^{-1}\sum_{k=1}^K2(k-1)=K-1\le K$, this gives
$$ E\le\frac23K^2\eta_l^2\frac1N\sum_i\|\nabla f_i(x)\|_2^2 +K\eta_l^2\sigma^2 \le\frac23K^2\eta_l^2\bigl(G^2+2\beta B^2(f(x)-f^\star)\bigr) +K\eta_l^2\sigma^2. $$
Uniform sampling makes the expected average over selected clients the
population average, and the hypothetical local paths have the same per-client
law. [F5, step 1.1, given, algebra]

3.1 Multiply step 2.1 by $3\beta\widetilde\eta$ and use $\eta_l=\widetilde\eta/(K\eta_g)$. The three resulting coefficients are $2\beta\widetilde\eta^3/\eta_g^2$ for $G^2$, $4\beta^2B^2\widetilde\eta^3/\eta_g^2$ for the function gap, and $3\beta\widetilde\eta^3/(K\eta_g^2)$ for the variance. Since $\eta_g\ge1$ and $\beta\widetilde\eta\le1/[8(B^2+1)]$, these are at most $18\beta\widetilde\eta^3$, $2\widetilde\eta/3$, and $\widetilde\eta^2/(2K\eta_g^2)$, respectively. This proves the claim. [F5, step 2.1, given, algebra] ∎