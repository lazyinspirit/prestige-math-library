---
id: thm-pick-freeze-sobol-covariance-identities
kind: theorem
title: Pick-freeze covariances recover first and total Sobol numerators
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [thm-product-hoeffding-anova-decomposition, def-first-and-total-sobol-indices, def-independent-random-elements, thm-independent-random-elements-have-product-joint-law, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, def-moments-variance-and-covariance, def-product-coordinate-projections, lem-product-coordinate-projections-commute-and-contract]
proof_strategy: direct
axiom_use: No choice principle is used; the proof uses finite product integration and independent copies.
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
    - title: Andrea Saltelli, Making Best Use of Model Evaluations to Compute Sensitivity Indices, §2
      url: https://www.andreasaltelli.eu/file/repository/Making_best_use.pdf
    - title: Art B. Owen, Variance Components and Generalized Sobol' Indices, §2.1
      url: https://arxiv.org/pdf/1205.1774
---

## Statement

Let $X=(X_1,\ldots,X_d)$ have a finite product probability law $\mu$,
$f\in L^2(\mu)$, and $\mu_f=\mathbb E[f(X)]$. Let $X'$ be an independent
copy of $X$. For $i\in[d]$, define the first-order hybrid
$X^{[i]}=(X_i,X'_{-i})$ and the total-effect hybrid
$\widetilde X^{[i]}=(X_{-i},X'_i)$. Then
$$\mathbb E[(f(X)-\mu_f)(f(X^{[i]})-\mu_f)]=V_{\{i\}},\qquad \frac12\mathbb E[(f(X)-f(\widetilde X^{[i]}))^2]=\sum_{u\ni i}V_u,$$
where $V_u=\mathbb E[f_u^2]$ are the variance components of
[[thm-product-hoeffding-anova-decomposition]]. The first covariance is an
unbiased numerator for the first-order index and the half squared difference
is an unbiased numerator for the total index; normalizing by $V$ is defined
only when $V>0$.

## Facts & Assumptions

**Given:** The objects in the Statement and an independent product-law copy $X'$.

[F1] [[thm-product-hoeffding-anova-decomposition]]: $f=\sum_uf_u$ in $L^2$, distinct components are orthogonal, and nonempty components are centered in each of their own coordinates.

[F2] [[def-first-and-total-sobol-indices]]: $V_{\{i\}}$ and $\sum_{u\ni i}V_u$ are the unnormalized first-order and total-effect numerators.

[F3] [[def-product-coordinate-projections]]: $P_J$ integrates the coordinates outside $J$ under the product law.

[F4] [[def-independent-random-elements]] and [[thm-independent-random-elements-have-product-joint-law]]: independent random elements have the product joint law.

[F5] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: integrable products may be evaluated by iterated integration.

[F6] [[def-moments-variance-and-covariance]]: variance and covariance are centered second moments.

[F7] [[lem-product-coordinate-projections-commute-and-contract]]: $P_JP_K=P_{J\cap K}$ for every pair of coordinate subsets.

## Proof

**Given:** The hypotheses of the Statement and facts [F1]–[F7].

1.1 Fix $i$. For fixed $x_i$, integrate $f(x_i,x_{-i})f(x_i,x'_{-i})$ over two independent copies of the other coordinates. Fubini [F5] factors this integral as $(P_{\{i\}}f(x_i))^2$. Averaging over $x_i$ gives $\mathbb E[f(X)f(X^{[i]})]=\|P_{\{i\}}f\|_2^2$. For a nonconstant ANOVA component with support $u\not=\{i\}$, choose $j\in u\setminus\{i\}$ if $i\in u$, or any $j\in u$ otherwise. Dependence gives $P_uf_u=f_u$. Hence [F7] gives $P_{\{i\}}f_u=P_{\{i\}}P_uf_u=P_{\{i\}\cap u}f_u$ and $P_{\{i\}}P_{u\setminus\{j\}}f_u=P_{\{i\}\cap(u\setminus\{j\})}f_u$. The two index sets are equal by the choice of $j$, so these averages agree; the latter is zero by the coordinate-centering property [F1]. Thus only the constant and singleton components remain, and $P_{\{i\}}f=\mu_f+f_{\{i\}}$. Orthogonality [F1] gives $\|P_{\{i\}}f\|_2^2=\mu_f^2+V_{\{i\}}$, the first-order numerator by [F2]. Subtracting $\mu_f^2$ proves the first identity. [F1, F2, F3, F4, F5, F6, F7]

1.2 Fix $x_{-i}$. The two values $f(X_i,x_{-i})$ and $f(X'_i,x_{-i})$ are independent with the same conditional product integral over coordinate $i$. Expanding their squared difference gives half its conditional expectation equal to the variance of that one-coordinate section. Integrating over $x_{-i}$ by Fubini yields $\frac12\mathbb E[(f(X)-f(\widetilde X^{[i]}))^2]=\|f-P_{-i}f\|_2^2$. [F3, F4, F5, F6, algebra]

2.1 If $i\notin u$, then $P_{-i}f_u=f_u$ because $f_u$ depends only on $X_u$. If $i\in u$, dependence gives $P_uf_u=f_u$, and [F7] gives $P_{-i}f_u=P_{-i}P_uf_u=P_{u\setminus\{i\}}f_u=0$ by [F1]. Thus $f-P_{-i}f=\sum_{u\ni i}f_u$. Orthogonality [F1] makes its squared norm $\sum_{u\ni i}V_u$, which is the total-effect numerator by [F2] and proves the second identity. [F1, F2, F3, F7, step 1.2, algebra] ∎
