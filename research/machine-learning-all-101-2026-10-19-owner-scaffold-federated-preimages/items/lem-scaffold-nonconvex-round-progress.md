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

Let $f_i:\mathbb R^d\to\mathbb R$ have $\beta$-Lipschitz gradients and
let $f=N^{-1}\sum_i f_i$ be bounded below by $f^\star$. Run Option II
SCAFFOLD with $1\le S\le N$ uniformly sampled clients, $K\ge1$ local steps,
and fresh conditionally unbiased local stochastic gradients of variance at
most $\sigma^2$. Let $p=S/N$, $\widetilde\eta=K\eta_l\eta_g$, and let
$\Xi_r$ be the nonconvex control-tracking error in the SCAFFOLD
analysis-trajectory definition. If
$$ 0<\widetilde\eta\le\frac{p^{2/3}}{24\beta}, $$
then the potential
$$ P_r=\mathbb E[f(x_r)-f^\star] +12\beta^3\widetilde\eta^2\frac NS\Xi_r $$
satisfies
$$ P_r\le P_{r-1} +\frac{5\beta\widetilde\eta^2\sigma^2}{KS} \left(1+\frac{S}{\eta_g^2}\right) -\frac{\widetilde\eta}{14} \mathbb E\|\nabla f(x_{r-1})\|_2^2. $$

## Statement references

[Karimireddy et al., SCAFFOLD, Appendix E.2, Lemma 17 and its proof](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

## Facts & Assumptions

**Given:** The nonconvex SCAFFOLD update, smoothness and stochastic-gradient assumptions in the Statement.

[F1] [[alg-scaffold]]: the server update is the average of selected corrected local updates with global scale $\eta_g$.

[F3] [[lem-scaffold-nonconvex-server-variance]]: the server update has the stated conditional mean and second-moment bounds.

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

## Unresolved proof obligation

The potential absorption step is not discharged. The source's Appendix E.2 coefficient calculation uses a sharper local-drift inequality than the conservative query-point estimate in [F5]. The new server-moment and control-tracking bounds above change the coefficients of $E_r$, $\Xi_r$, and the noise term. A valid absorption argument, or an exact local supplier for the sharper bound under the stated adaptive-query assumptions, is still required before this lemma or the nonconvex branch of its consumer can be marked ready. The exact in-run supplier candidates are [[lem-scaffold-nonconvex-control-lag]] and [[lem-scaffold-nonconvex-client-drift]].
