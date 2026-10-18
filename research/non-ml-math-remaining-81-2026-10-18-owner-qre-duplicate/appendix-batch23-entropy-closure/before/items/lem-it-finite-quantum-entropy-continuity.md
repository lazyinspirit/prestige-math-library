---
id: lem-it-finite-quantum-entropy-continuity
kind: lemma
title: Continuity of finite-dimensional quantum entropy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-it-von-neumann-entropy
  - def-qc-density-operator
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - lem-complex-hermitian-eigenvalues-lipschitz
  - thm-natural-logarithm-laws
  - thm-exponential-beats-every-polynomial
proof_strategy: direct
axiom_use: "No choice axiom is used; all selections and probability spaces are finite, and analytic existence uses the stated finite-dimensional or real-completeness hypotheses."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, §11.10"
      url: "https://arxiv.org/pdf/1106.1445v8"
    - title: "John Watrous, The Theory of Quantum Information, §5.2.4"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
---

## Statement

For each fixed finite dimension $d$, von Neumann entropy is continuous on density operators ([[def-qc-density-operator]]) on $\mathbb C^d$ in operator norm ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]). Thus, if $\rho_k\to\rho$ in operator norm, then $S(\rho_k)\to S(\rho)$.

## Facts & Assumptions

**Given:** A fixed finite dimension $d$ and density operators $\rho_k,\rho$ on $\mathbb C^d$.

[F1] [[def-it-von-neumann-entropy]]: $S(\rho)=-\sum_j\lambda_j\ln\lambda_j$, with $0\ln0:=0$.

[F2] [[lem-complex-hermitian-eigenvalues-lipschitz]]: each ordered eigenvalue of Hermitian matrices changes by at most the operator norm of the matrix difference.

[F3] [[thm-natural-logarithm-laws]]: $\ln$ is continuous on $(0,\infty)$ and $\ln(e^u)=u$.

[F4] [[thm-exponential-beats-every-polynomial]]: $u/e^u\to0$ as $u\to+\infty$.

[F5] [[def-qc-density-operator]]: a density operator is nonnegative with trace one, so its eigenvalues lie in $[0,1]$.

## Proof

1.1 Define $h(t)=-t\ln t$ for $0<t\le1$ and $h(0)=0$. It is continuous for positive $t$ by [F3]. As $t\downarrow0$, put $u=-\ln t\to+\infty$; then $h(t)=u/e^u\to0$ by [F3]–[F4]. Thus $h$ is continuous on $[0,1]$. [F3, F4, algebra, construct]

2.1 Let $\lambda_1(\rho)\ge\cdots\ge\lambda_d(\rho)$ and similarly for $\rho_k$. By [F5], density eigenvalues lie in $[0,1]$; [F2] gives $|\lambda_j(\rho_k)-\lambda_j(\rho)|\le\|\rho_k-\rho\|$ for every $j$. For any $\varepsilon>0$, continuity of $h$ at the finitely many $\lambda_j(\rho)$ gives one positive radius $\delta$ such that $\|\rho_k-\rho\|<\delta$ makes $|h(\lambda_j(\rho_k))-h(\lambda_j(\rho))|<\varepsilon/d$ for all $j$. [F2, F5, step 1.1, given, choose]

3.1 Sum the $d$ inequalities in step 2.1 and use [F1]. This gives $|S(\rho_k)-S(\rho)|<\varepsilon$ whenever $\|\rho_k-\rho\|<\delta$, proving continuity. The zero-eigenvalue boundary is covered by step 1.1, so no full-rank assumption is used. [F1, step 1.1, step 2.1, algebra] ∎
