---
id: thm-conjugate-gradient-chebyshev-bound-in-the-a-norm
kind: theorem
title: "CG obeys the Chebyshev $A$-norm bound in terms of the spectral condition number $\\kappa_2(A)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error,
       thm-complex-spectral-theorem-for-normal-endomorphisms,
       prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jonathan Richard Shewchuk, An Introduction to the Conjugate Gradient Method Without the Agonizing Pain"
      url: "https://www.cs.cmu.edu/~quake-papers/painless-conjugate-gradient.pdf"
---

## Statement

Let $A\in M_n(\mathbb C)$ be Hermitian positive definite, let $x_*$ solve
$Ax=b$, let $e_m:=x_*-x_m$ be the error in the $m$th exact-arithmetic CG
iterate, let $0<\lambda_{\min}\le\lambda_{\max}$ be the smallest and largest
eigenvalues of $A$, and let

$$\kappa:=\frac{\lambda_{\max}}{\lambda_{\min}}.$$

Then for every $m\ge0$,

$$\|e_m\|_A\le 2\left(\frac{\sqrt{\kappa}-1}{\sqrt{\kappa}+1}\right)^m\|e_0\|_A.$$

## Facts & Assumptions

**Given:** A Hermitian positive-definite matrix $A$, the exact solution $x_*$, the CG iterates $x_m$, the errors $e_m=x_*-x_m$, and the extremal eigenvalues $0<\lambda_{\min}\le\lambda_{\max}$ of $A$.

[L1] The $m$th CG iterate uniquely minimizes the $A$-norm of the error over $x_0+K_m(A,r_0)$ ([[thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error]]).

[L2] In an orthonormal basis, a Hermitian matrix is normal ([[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]]).

[L3] A normal endomorphism of a finite-dimensional complex inner-product space has an orthonormal eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

## Proof
**Proof technique:** direct.

1.1 Every vector in $x_0+K_m(A,r_0)$ has the form $x_0+Az(A)e_0$ for some polynomial $z$ of degree at most $m-1$, because $r_0=Ae_0$. Hence every attainable error has the form $$e_0-Az(A)e_0=p(A)e_0,$$ where $p(0)=1$ and $\deg p\le m$. By [L1], the actual CG error therefore satisfies $$\|e_m\|_A\le\min_{\substack{p(0)=1\\ \deg p\le m}}\|p(A)e_0\|_A.$$ [L1, algebra]

2.1 Since $A$ is Hermitian, [L2] and [L3] give an orthonormal basis of eigenvectors, so $A=U\Lambda U^*$ with $U$ unitary and $\Lambda=\operatorname{diag}(\lambda_1,\dots,\lambda_n)$, where each $\lambda_j>0$. Writing $U^*e_0=c$, one gets $$\|p(A)e_0\|_A^2=\langle Ap(A)e_0,p(A)e_0\rangle=\sum_{j=1}^n \lambda_j|p(\lambda_j)|^2|c_j|^2\le \max_{\lambda\in[\lambda_{\min},\lambda_{\max}]}|p(\lambda)|^2\,\|e_0\|_A^2.$$ Thus $$\|e_m\|_A\le \min_{\substack{p(0)=1\\ \deg p\le m}}\max_{\lambda\in[\lambda_{\min},\lambda_{\max}]}|p(\lambda)|\,\|e_0\|_A.$$ [L2, L3, step 1.1, algebra]

3.1 Let $$t(\lambda):=\frac{\lambda_{\max}+\lambda_{\min}-2\lambda}{\lambda_{\max}-\lambda_{\min}},\qquad p_m(\lambda):=\frac{T_m(t(\lambda))}{T_m\!\left(\frac{\lambda_{\max}+\lambda_{\min}}{\lambda_{\max}-\lambda_{\min}}\right)},$$ where $T_m$ is the $m$th Chebyshev polynomial. Then $p_m(0)=1$, $\deg p_m=m$, and $|T_m(t)|\le1$ on $[-1,1]$, so $$\max_{\lambda\in[\lambda_{\min},\lambda_{\max}]}|p_m(\lambda)|\le \frac{1}{\left|T_m\!\left(\frac{\lambda_{\max}+\lambda_{\min}}{\lambda_{\max}-\lambda_{\min}}\right)\right|}.$$ With $\kappa=\lambda_{\max}/\lambda_{\min}$, the denominator equals $T_m((\kappa+1)/(\kappa-1))$. For $s>1$, $$T_m(s)=\frac{(s+\sqrt{s^2-1})^m+(s-\sqrt{s^2-1})^m}{2}\ge \frac{(s+\sqrt{s^2-1})^m}{2},$$ and at $s=(\kappa+1)/(\kappa-1)$ one has $$\frac{1}{s+\sqrt{s^2-1}}=\frac{\sqrt{\kappa}-1}{\sqrt{\kappa}+1}.$$ Therefore $$\max_{\lambda\in[\lambda_{\min},\lambda_{\max}]}|p_m(\lambda)|\le 2\left(\frac{\sqrt{\kappa}-1}{\sqrt{\kappa}+1}\right)^m.$$ Combining this polynomial with step 2.1 gives the stated bound. [step 2.1, algebra] ∎
