---
id: thm-shift-invert-map-and-inexact-solve-residual-transfer
kind: theorem
title: "Shift-invert maps eigenvalues exactly and transfers an inexact solve residual to the original eigenpair"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - alg-shift-invert-and-harmonic-ritz-extraction
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
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
    date: 2026-10-17
sources:
  references:
    - title: "Yousef Saad, Numerical Methods for Large Eigenvalue Problems, second edition, §8.1.1"
      url: "https://www-users.cse.umn.edu/~saad/eig_book_2ndEd.pdf"
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §§11.4 and 12.6"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
---

## Statement

Let $A\in\mathbb C^{n\times n}$, $\sigma\in\mathbb C$, and
$M=A-\sigma I$ be invertible. Then a nonzero vector $u$ is an eigenvector of
$A$ with eigenvalue $\lambda$ if and only if it is an eigenvector of
$M^{-1}$ with eigenvalue $\theta=(\lambda-\sigma)^{-1}$. In particular,
$\lambda=\sigma+1/\theta$ and $\theta\ne0$.

For any nonzero candidate $u$, any $\theta\ne0$, and any computed vector $y$
with solve residual $s_0=My-u$, define the transformed residual
$r_T=y-\theta u$ and $\lambda=\sigma+1/\theta$. Then
$$ (A-\lambda I)u=\theta^{-1}(s_0-Mr_T), $$
and consequently
$$\|(A-\lambda I)u\|_2\le\frac{\|s_0\|_2+\|Mr_T\|_2}{|\theta|}.$$

## Facts & Assumptions

**Given:** $M=A-\sigma I$ invertible, a nonzero vector $u$, a nonzero scalar
$\theta$, and a computed solve vector $y$ with $s_0=My-u$.

[F1] [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]: $Au=\lambda u$ with $u\ne0$ is the definition of an eigenpair.

[F2] [[alg-shift-invert-and-harmonic-ritz-extraction]]: the inexact candidate solve records $s_0=My-u$ and $r_T=y-\theta u$.

## Proof

**Proof technique:** direct.

1.1 If $Au=\lambda u$, then $Mu=(\lambda-\sigma)u$. Invertibility of $M$ and $u\ne0$ imply $\lambda\ne\sigma$, so applying $M^{-1}$ gives $M^{-1}u=(\lambda-\sigma)^{-1}u$. Conversely, if $M^{-1}u=\theta u$ with $u\ne0$, multiplying by $M$ gives $Mu=\theta^{-1}u$; hence $Au=(\sigma+\theta^{-1})u$. Thus the eigenvalue map is exact and the inverse Ritz value cannot be zero. [given, F1, algebra]

1.2 From [F2], $Mr_T=My-\theta Mu=u+s_0-\theta Mu$. Rearranging yields $Mu-\theta^{-1}u=\theta^{-1}(s_0-Mr_T)$. Since $M=A-\sigma I$ and $\lambda=\sigma+1/\theta$, the left side is $(A-\lambda I)u$, proving the residual identity. [given, F2, algebra]

2.1 Taking Euclidean norms in step 1.2 and applying the triangle inequality gives the stated residual bound, which keeps the solve residual $s_0$ and the transformed residual after multiplication by $M$ as separate terms. [step 1.2, algebra] ∎
