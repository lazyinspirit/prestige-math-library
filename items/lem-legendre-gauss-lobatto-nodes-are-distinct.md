---
id: lem-legendre-gauss-lobatto-nodes-are-distinct
kind: lemma
title: Legendre-Gauss-Lobatto nodes are distinct and interior critical points are simple
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-legendre-polynomial-family-and-l2-pairing
  - lem-legendre-weighted-derivative-orthogonality-and-norm
  - thm-rolle
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, p-version FEM
      url: https://jschoeberl.github.io/iFEM/pversion/hpfem.html
      locator: "§§30.1–30.2: Legendre polynomial family and p-version spectral points."
    - title: Lloyd N. Trefethen, Short note on the mass matrix for Gauss-Lobatto grid points
      url: https://arxiv.org/pdf/1412.2276
      locator: "§1, pp. 1–2: Legendre–Gauss–Lobatto nodes defined as endpoints and roots of the Legendre derivative."
---

## Statement

For every integer $p\ge1$, the Legendre polynomial $P_p$ has exactly $p$ simple roots in $(-1,1)$, and $P_p'$ has exactly $p-1$ simple roots in $(-1,1)$, one between each consecutive pair of roots of $P_p$. Consequently, the $p+1$ nodes consisting of $-1$, $1$, and the roots of $P_p'$ are pairwise distinct.

## Facts & Assumptions

**Given:** An integer $p\ge1$ and the Legendre polynomials $P_n$.

[F1] [[def-legendre-polynomial-family-and-l2-pairing]]: $P_p$ is a nonzero degree-$p$ polynomial.

[F2] [[lem-legendre-weighted-derivative-orthogonality-and-norm]]: $P_p$ is orthogonal in unweighted $L^2(-1,1)$ to every polynomial of degree less than $p$.

[F3] [[thm-rolle]]: between two distinct zeros of a differentiable real function there is a zero of its derivative.

## Proof

1.1 Suppose $P_p$ has only $m<p$ sign-changing roots $r_1,\ldots,r_m$ in $(-1,1)$ and set $q(x)=\prod_{j=1}^m(x-r_j)$, with $q=1$ if $m=0$. At each sign-changing root both $P_p$ and $q$ change sign, while at every other real root $P_p$ does not change sign; therefore $P_pq$ has one constant sign on $(-1,1)$ and is not identically zero. It is continuous and nonzero on some open interval, so its integral is nonzero. But $\deg q=m<p$, and [F2] gives $\int_{-1}^1P_pq=0$, a contradiction. Thus $P_p$ has at least $p$ sign-changing roots in the open interval. [F1, F2, given, algebra]

2.1 A degree-$p$ polynomial cannot have more than $p$ distinct roots. The $p$ roots obtained in step 1.1 therefore exhaust its degree; each has multiplicity one and there are no other roots. Rolle's theorem [F3] between consecutive roots gives $p-1$ distinct roots of $P_p'$ in $(-1,1)$. Since $P_p'$ has degree $p-1$, these are all its roots and each is simple. None equals an endpoint, so adjoining $-1$ and $1$ gives $p+1$ distinct nodes, including the case $p=1$ where there are no interior critical points. [F1, F3, step 1.1, given, algebra] ∎
