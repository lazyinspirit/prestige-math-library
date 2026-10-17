---
id: prop-ritz-residual-formula-for-an-arnoldi-ritz-pair
kind: proposition
title: "An Arnoldi Ritz pair has residual norm controlled by the last Hessenberg subdiagonal entry"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ritz-values-and-ritz-vectors-from-arnoldi,
       thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lloyd N. Trefethen and David Bau III, Numerical Linear Algebra"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---

## Statement

Assume Arnoldi runs through step $m$ without breakdown, let
$H_m=Q_m^\ast A Q_m$, and let $H_my=\theta y$ with $\|y\|_2=1$. If
$u=Q_my$ is the associated Ritz vector, then

$$Au-\theta u=h_{m+1,m}(e_m^\ast y)v_{m+1}.$$

In particular,

$$\|Au-\theta u\|_2=|h_{m+1,m}|\,|e_m^\ast y|.$$

## Facts & Assumptions

**Given:** An Arnoldi run through step $m$ without breakdown, a unit eigenvector $y$ of $H_m$, and the Ritz vector $u=Q_my$.

[F1] In Arnoldi, Ritz values are eigenvalues of $H_m=Q_m^\ast A Q_m$ and Ritz vectors have the form $u=Q_my$ ([[def-ritz-values-and-ritz-vectors-from-arnoldi]]).

[L1] Arnoldi gives $AQ_m=Q_{m+1}\bar H_m$, where $\bar H_m=\begin{bmatrix}H_m\\ h_{m+1,m}e_m^\ast\end{bmatrix}$ ([[thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization]]).

## Proof
**Proof technique:** direct.

1.1 Using [F1] and [L1], $$Au=AQ_my=Q_{m+1}\bar H_my =Q_mH_my+h_{m+1,m}(e_m^\ast y)v_{m+1}.$$ Since $H_my=\theta y$, this becomes $$Au=\theta Q_my+h_{m+1,m}(e_m^\ast y)v_{m+1}.$$ [F1, L1, algebra]

2.1 Because $Q_my=u$, step 1.1 is exactly $Au-\theta u=h_{m+1,m}(e_m^\ast y)v_{m+1}$. The Arnoldi vectors are orthonormal, so $\|v_{m+1}\|_2=1$, and the norm formula follows. [step 1.1, L1, algebra] ∎
