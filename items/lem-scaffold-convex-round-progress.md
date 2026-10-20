---
id: lem-scaffold-convex-round-progress
kind: lemma
title: Strongly convex SCAFFOLD progress in one communication round
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - alg-scaffold
  - def-scaffold-analysis-trajectory-and-errors
  - lem-scaffold-convex-server-variance
  - lem-scaffold-convex-control-lag
  - lem-scaffold-convex-client-drift
  - lem-perturbed-strong-convexity
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
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD, Appendix E.1, Lemma 13"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $f_i:\mathbb R^d\to\mathbb R$ be differentiable, $\mu$-strongly
convex and $\beta$-smooth, with $0\le\mu\le\beta$, and let
$f=N^{-1}\sum_i f_i$ attain $f^\star=f(x^\star)$. Run Option II SCAFFOLD
with $1\le S\le N$ clients sampled uniformly without replacement, $K\ge1$
local steps, local step $\eta_l$, server scale $\eta_g\ge1$, and fresh
conditionally unbiased local stochastic gradients with variance at most
$\sigma^2$. Assume $c=N^{-1}\sum_i c_i$, initialize
$c_i^0=\nabla f_i(x_0)$ and $c^0=N^{-1}\sum_i c_i^0$, and define
$\widetilde\eta=K\eta_l\eta_g$. If
$$ \widetilde\eta\le\frac1{81\beta}, \qquad \text{and, when }\mu>0,\quad \widetilde\eta\le\frac{S}{15\mu N}, $$
then, with $E_r,C_r$ as in the SCAFFOLD analysis-trajectory definition and
$\rho=(2+34\beta\widetilde\eta)/3$,
$$ \begin{aligned} \mathbb E\|x_r-x^\star\|_2^2 +\frac{14N\widetilde\eta^2}{S}C_r &\le\left(1-\frac{\mu\widetilde\eta}{2}\right) \left(\mathbb E\|x_{r-1}-x^\star\|_2^2 +\frac{14N\widetilde\eta^2}{S}C_{r-1}\right)\\ &\quad-\widetilde\eta\mathbb E[f(x_{r-1})-f^\star] +\left(\frac{18}{KS}+\frac{\rho}{K\eta_g^2}\right) \widetilde\eta^2\sigma^2. \end{aligned} $$
For $\mu=0$ this is a general-convex descent inequality; for $\mu>0$ it
also contracts the distance-and-control potential.

## Statement references

[Karimireddy et al., SCAFFOLD, Appendix E.1, Lemma 13 and its proof](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

## Facts & Assumptions
**Given:** The Option II SCAFFOLD round, objective and stepsize assumptions in the Statement.

[F1] [[alg-scaffold]]: the server update is the mean corrected local update, and $c=N^{-1}\sum_i c_i$.

[F2] [[def-scaffold-analysis-trajectory-and-errors]]: $E_r$ averages query-point displacement, and $C_r$ is the expected squared error of the mean full gradient at the stored anchors from $\nabla f_i(x^\star)$.

[F3] [[lem-scaffold-convex-server-variance]]: the displacement second moment is at most $6\beta^2\widetilde\eta^2E_r+12\widetilde\eta^2C_{r-1} +6\beta\widetilde\eta^2\mathbb E[f(x_{r-1})-f^\star] +18\widetilde\eta^2\sigma^2/(KS)$.

[F4] [[lem-scaffold-convex-control-lag]]: the next control lag is at most $(1-S/N)C_{r-1}+(S/N)(4\beta\mathbb E[f(x_{r-1})-f^\star] +2\beta^2E_r)$.

[F5] [[lem-scaffold-convex-client-drift]]: the local drift satisfies $3\beta\widetilde\eta E_r\le(2/3)\widetilde\eta^2C_{r-1} +\widetilde\eta\mathbb E[f(x_{r-1})-f^\star]/(25\eta_g^2) +\widetilde\eta^2\sigma^2/(K\eta_g^2)$.

[F6] [[lem-perturbed-strong-convexity]]: each client gradient at a local point paired with $x_{r-1}-x^\star$ is bounded below by its objective gap, a strong-convexity distance term and the local-point displacement term.

[F7] [[def-euclidean-inner-product]]: squared distance expands as a norm square plus its inner-product term.

[F8] [[def-filtration-and-filtered-probability-space]], [[def-conditional-expectation-as-an-ae-class]], [[thm-basic-algebra-and-order-properties-of-conditional-expectation]], [[thm-taking-out-what-is-known]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], and [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: roundwise conditional expectations are linear and preserve the integrable bounds.

[A1] The local stochastic-gradient assumptions and gradient-consistent initialization in the Statement hold at all queries; the current client sample is independent of the preceding history.

[A2] Assume the Axiom of Choice. It is used only to invoke the published conditional-expectation-as-an-a.e.-class interface in [F8].

## Proof

1.1 Write $\Delta x=x_r-x_{r-1}$. Conditional on the round-start history, [given]
the client-control terms cancel in the mean server update by [F1] and uniform
sampling. Expand $\|x_{r-1}+\Delta x-x^\star\|_2^2$, and apply [F6] to each
local gradient at $y_{i,k-1}^r$ with comparison points $x^\star$ and
$x_{r-1}$. Averaging over clients and query indices gives a cross-term bound
$-2\widetilde\eta\mathbb E[f(x_{r-1})-f^\star]
-\mu\widetilde\eta\mathbb E\|x_{r-1}-x^\star\|_2^2/2
+2\beta\widetilde\eta E_r$. Add the second-moment bound [F3]. The result is
$$ \begin{aligned} \mathbb E\|x_r-x^\star\|_2^2 &\le\left(1-\frac{\mu\widetilde\eta}{2}\right) \mathbb E\|x_{r-1}-x^\star\|_2^2 +(6\beta\widetilde\eta^2-2\widetilde\eta) \mathbb E[f(x_{r-1})-f^\star]\\ &\quad+12\widetilde\eta^2C_{r-1} +(2\beta\widetilde\eta+6\beta^2\widetilde\eta^2)E_r +\frac{18\widetilde\eta^2\sigma^2}{KS}. \end{aligned} $$ [F1, F3, F6, F7, F8, A1, A2, given, algebra]

2.1 Multiply [F4] by $14\widetilde\eta^2/(S/N)$ and add it to step 1.1. [given]
Set $t=\beta\widetilde\eta$. The objective-gap coefficient becomes
$-2\widetilde\eta+62\beta\widetilde\eta^2$, the local-drift coefficient
is $2\beta\widetilde\eta+34\beta^2\widetilde\eta^2
=3\beta\widetilde\eta\rho$, and the extra control-lag coefficient after
subtracting the contracted old potential is
$(-2+7\mu\widetilde\eta/(S/N))\widetilde\eta^2C_{r-1}$. The resulting
inequality is
$$ \begin{aligned} V_r\le{}&(1-\mu\widetilde\eta/2)V_{r-1} +(-2\widetilde\eta+62\beta\widetilde\eta^2) \mathbb E[f(x_{r-1})-f^\star]\\ &+3\beta\widetilde\eta\rho E_r +(-2+7\mu\widetilde\eta/(S/N))\widetilde\eta^2C_{r-1} +\frac{18\widetilde\eta^2\sigma^2}{KS}, \end{aligned} $$
where $V_r=\mathbb E\|x_r-x^\star\|_2^2+14\widetilde\eta^2C_r/(S/N)$.
[F2, F4, step 1.1, given, algebra]

3.1 Substitute [F5] into step 2.1. Since $\widetilde\eta/(25\eta_g^2)\le\widetilde\eta/25$ and $\rho\le196/243$, the objective-gap coefficient is at most $(-2+62/81+196/6075)\widetilde\eta\le-\widetilde\eta$. Also $\mu\widetilde\eta/(S/N)\le1/15$, so the remaining control-lag coefficient is at most $(-23/15+392/729)\widetilde\eta^2<0$. Finally $\rho\le196/243<1$, and the drift variance term is at most $\widetilde\eta^2\sigma^2/(K\eta_g^2)$. Drop the nonpositive control-lag term and combine the two variance terms. This proves the Statement. [F2, F5, step 2.1, given, algebra] ∎