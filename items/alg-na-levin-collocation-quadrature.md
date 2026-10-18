---
id: alg-na-levin-collocation-quadrature
kind: algorithm
title: Levin collocation for a nonstationary oscillatory integral
status: published
origin: pipeline
dependency_level: 2
deps:
  - def-na-finite-interval-oscillatory-integral
  - lem-na-complex-phase-derivative
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "D. Levin, Procedures for computing one- and two-dimensional integrals of
        functions with rapid irregular oscillations, §1"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/OSCINT/LEV82.pdf"
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature:
        The story so far, §3.3"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
verification:
  precheck: n/a
---

## Definition

Input $a<b$, $\omega\in\mathbb R\setminus\{0\}$, real $g\in C^1[a,b]$ with $|g'|\ge c>0$, complex $f\in C[a,b]$, an integer $n\ge2$, and complex-valued $C^1$ functions $\psi_1,\ldots,\psi_n:[a,b]\to\mathbb C$ linearly independent over $\mathbb C$. Also input distinct collocation nodes $a=x_1<\cdots<x_n=b$. Define $L_\omega\psi=\psi'+i\omega g'\psi$, form $A_{jk}=L_\omega\psi_k(x_j)$ and $y_j=f(x_j)$. If $A$ is singular, return failure status and no quadrature value. Otherwise solve $Ac=y$ in exact arithmetic, put $p=\sum_{k=1}^nc_k\psi_k$, and return
$$Q_L=p(b)e^{i\omega g(b)}-p(a)e^{i\omega g(a)}$$
with $A,c$, and $\kappa_2(A)=\|A\|_2\|A^{-1}\|_2$, where vector norms are Euclidean and $\|A\|_2=\sup_{\|v\|_2=1}\|Av\|_2$ is the induced matrix norm. This is a finite collocation procedure; residual and conditioning claims for the nonsingular branch are stated separately on this page. Rounded factorization error is outside this exact-arithmetic definition.
