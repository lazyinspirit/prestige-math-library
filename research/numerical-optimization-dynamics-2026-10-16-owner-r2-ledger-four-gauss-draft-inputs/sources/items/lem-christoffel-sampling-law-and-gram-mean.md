---
id: lem-christoffel-sampling-law-and-gram-mean
kind: lemma
title: Christoffel sampling is normalized and its weighted Gram has mean identity
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-christoffel-weighted-least-squares-collocation
  - thm-independent-polynomial-chaos-tensors-are-orthonormal
  - thm-tonelli-and-fubini-for-completed-product-measures
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: None. The proof uses finite sums, probability integration, and finite-dimensional spectral facts.
verification: {}
sources:
  references:
    - title: Albert Cohen and Giovanni Migliorati, Optimal Weighted Least-Squares Methods, §2
      url: https://arxiv.org/pdf/1608.00512
    - title: Joel A. Tropp, An Introduction to Matrix Concentration Inequalities, §6.2
      url: https://arxiv.org/pdf/1501.01571
---

## Statement

Let $\Lambda$ and $K_\Lambda$ be as in
[[alg-christoffel-weighted-least-squares-collocation]], with
$N=|\Lambda|\ge1$. Then $K_\Lambda\ge1$ pointwise, the measure
$d\nu=(K_\Lambda/N)d\rho$ is a probability measure, and the random matrix
$$A(X)=\frac{N}{K_\Lambda(X)}\psi(X)\psi(X)^T,\qquad X\sim\nu,$$
satisfies $A\succeq0$, $\mathbb E_\nu A=I_N$, and
$\|A\|_{\mathrm{op}}\le N$ almost surely.

## Facts & Assumptions

**Given:** A finite real orthonormal polynomial family indexed by $\Lambda$, with $0\in\Lambda$, and its Christoffel kernel.

[F1] [[alg-christoffel-weighted-least-squares-collocation]] defines $K_\Lambda=\sum_{\alpha\in\Lambda}|\psi_\alpha|^2$ and the rank-one matrix $A$.

[F2] [[thm-independent-polynomial-chaos-tensors-are-orthonormal]] gives $\int\psi_\alpha\psi_\beta\,d\rho=\delta_{\alpha\beta}$ and $\psi_0=1$.

[F3] [[thm-tonelli-and-fubini-for-completed-product-measures]] permits integrating the finite sums entrywise under the product law.

## Proof

1.1 Since $0\in\Lambda$ and $\psi_0=1$, $K_\Lambda(y)\ge1$. By [F2]–[F3], $\int K_\Lambda\,d\rho=\sum_{\alpha\in\Lambda}\int|\psi_\alpha|^2\,d\rho=N$. Therefore $d\nu=(K_\Lambda/N)d\rho$ is a probability measure and the denominator in [F1] is positive everywhere. [F1, F2, F3, algebra]

2.1 For each pair $\alpha,\beta$, the $(\alpha,\beta)$ entry of $\mathbb E_\nu A$ is $\int_\Gamma \frac{N}{K_\Lambda(y)}\psi_\alpha(y)\psi_\beta(y)\frac{K_\Lambda(y)}{N}\,d\rho(y)=\int_\Gamma\psi_\alpha\psi_\beta\,d\rho=\delta_{\alpha\beta}$ by [F2]–[F3], so $\mathbb E_\nu A=I_N$. The rank-one outer product is positive semidefinite and has operator norm $N\|\psi(y)\|_2^2/K_\Lambda(y)=N$, proving the remaining assertions. [F1, F2, F3, step 1.1, algebra] ∎