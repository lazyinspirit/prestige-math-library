---
id: lem-product-coordinate-projections-commute-and-contract
kind: lemma
title: Product-coordinate projections commute and contract in L2
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-product-coordinate-projections, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-tonelli-theorem-for-sigma-finite-product-spaces, cor-cauchy-schwarz-inequality-for-l-two]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Thierry Klein, Introduction to Sensitivity Analysis: The Statistical Study of Sobol Indices, complete lecture notes, §2.2.2"
      url: https://perso.math.univ-toulouse.fr/klein/files/2014/07/cours_AS.pdf
---

## Statement

For the product-coordinate averages of [[def-product-coordinate-projections]],
each $P_J$ is a well-defined self-adjoint contraction on real $L^2(\mu)$,
$P_J^2=P_J$, and for all $J,K\subseteq[d]$,
$$P_JP_K=P_{J\cap K}$$
as operators on $L^2(\mu)$.

## Facts & Assumptions

**Given:** A finite product of probability spaces, $f,g\in L^2(\mu)$, and subsets $J,K\subseteq[d]$.

[F1] [[def-product-coordinate-projections]]: $P_Jf$ is obtained by integrating $f$ over the complementary coordinates, with zero assigned on exceptional sections.

[F2] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: Tonelli identifies the integral of a nonnegative product-measurable function with either iterated integral.

[F3] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: integrable functions on a product have integrable sections almost everywhere and their iterated integrals agree.

[F4] [[cor-cauchy-schwarz-inequality-for-l-two]]: $L^2$ functions have integrable products and satisfy $\int|uv|\le\|u\|_2\|v\|_2$.

## Proof

**Given:** The objects in the Statement and facts [F1]–[F4].

1.1 Let $f\in L^2(\mu)$. Tonelli applied to $|f|^2$ shows that for almost every $x_J$, the section $z\mapsto f(x_J,z)$ is square-integrable on the complementary probability space. Cauchy–Schwarz with the constant function $1$ makes that section integrable, so [F1] defines its average there. If representatives $f$ and $\tilde f$ agree almost everywhere, Tonelli applied to $|f-\tilde f|^2$ shows their sections agree almost everywhere for almost every $x_J$; their averages therefore define the same almost-sure class. Fubini gives measurability of the section-average function. [F1, F2, F3, F4]

2.1 On almost every section, Cauchy–Schwarz gives $|P_Jf(x_J)|^2\le\int|f(x_J,z)|^2\,d\mu_{-J}(z)$ because $\mu_{-J}$ has mass one. Integrating in $x_J$ and using Tonelli yields $\|P_Jf\|_2^2\le\|f\|_2^2$, so $P_J$ is a contraction. Averaging a function already independent of $z_{-J}$ leaves it unchanged, hence $P_J^2=P_J$. [F1, F2, F4, step 1.1]

3.1 For $f,g\in L^2$, Cauchy–Schwarz makes $fg$ integrable. Fubini in the two groups of coordinates gives $\langle P_Jf,g\rangle=\int_{E_J}(P_Jf)(P_Jg)\,d\mu_J=\langle f,P_Jg\rangle$. Thus $P_J$ is self-adjoint. [F1, F3, F4, step 2.1]

4.1 Applying $P_K$ and then $P_J$ integrates over the coordinates outside $K$, then over the coordinates in $K\setminus J$. Repeated finite-product Fubini permits this order and identifies the iterated integral with integration over the complement of $J\cap K$. The equality holds almost everywhere by [F3], including when either set is empty or full, so $P_JP_Kf=P_{J\cap K}f$ in $L^2$. [F1, F3, step 1.1] ∎
