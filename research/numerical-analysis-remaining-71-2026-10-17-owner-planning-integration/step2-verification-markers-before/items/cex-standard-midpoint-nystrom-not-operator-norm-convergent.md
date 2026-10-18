---
id: cex-standard-midpoint-nystrom-not-operator-norm-convergent
kind: counterexample
title: Standard midpoint Nyström operators need not converge in operator norm on C
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-nystrom-quadrature-and-finite-rank-operators
  - alg-composite-midpoint-rule
justified_by: []
proof_strategy: direct
axiom_use: None. Each witness is an explicit continuous piecewise-linear function.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and Boundary Value Problems, §3.3"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "The discussion after equations (3.21)–(3.23) and Remark 3.21, printed pp. 60 and 64."
    - title: "Habib Ammari, Brian Fitzpatrick, and Sanghyeon Yu, Mathematical and Computational Methods in Photonics: Tutorial Notes, §1.4"
      url: "https://people.math.ethz.ch/~grsam/HS16/MCMP/Mathematical%20and%20Computational%20Methods%20in%20Photonics%20-%20Tutorial%20Notes.pdf"
      locator: "Theorem 1.11 and its proof, printed pp. 15–16."
---

## Statement refuted

For every continuous kernel $k$ on $[0,1]^2$, the composite midpoint Nyström
operators $K_N$ converge to the integral operator $K$ in the operator norm on
$C([0,1],\mathbb R)$.

## Facts & Assumptions

**Given:** The constant kernel $k(x,y)=1$, the operator $K$ and composite midpoint Nyström operators $K_N$ from [[def-nystrom-quadrature-and-finite-rank-operators]], and $h=1/N$.

[F1] [[def-nystrom-quadrature-and-finite-rank-operators]]: $Ku=(\int_0^1u(y)dy)1$ and $K_Nu=(h\sum_{j=0}^{N-1}u((j+\tfrac12)h))1$.

[F2] [[alg-composite-midpoint-rule]]: the midpoint nodes are separated by $h$, each has weight $h$, and the weights sum to $1$.

## Counterexample

**Given:** A fixed $N\ge1$, $h=1/N$, and $0<\rho<h/2$.

1.1 Let $m_j:=(j+\tfrac12)h$. Define $u_\rho$ to equal $-1+2|y-m_j|/\rho$ on each interval $|y-m_j|\le\rho$ and $1$ elsewhere. The windows are disjoint and lie inside $[0,1]$, so $u_\rho$ is continuous and $\|u_\rho\|_\infty=1$. Its integral over each window is zero, hence $\int_0^1u_\rho(y)dy=1-2N\rho$. [given, F2, construct]

2.1 Every midpoint value is $u_\rho(m_j)=-1$, so $K_Nu_\rho=-1$ by [F1] and [F2], whereas $Ku_\rho=1-2N\rho$. Therefore $\|(K-K_N)u_\rho\|_\infty=2-2N\rho$. [given, F1, F2, step 1.1, algebra]

3.1 The operators $K$ and $K_N$ both have norm at most $1$, because their defining integrals or positive quadrature weights have total mass $1$. Thus $\|K-K_N\|\le2$. Letting $\rho\downarrow0$ in step 2.1 gives $\|K-K_N\|\ge2$, so $\|K-K_N\|=2$ for every $N$. This disproves the claimed operator-norm convergence. [given, F1, F2, step 2.1, algebra] ∎