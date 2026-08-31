---
id: ex-arnoldi-factorization-by-hand-for-a-three-step-krylov-chain
kind: example
title: "A hand calculation of Arnoldi shows the Hessenberg factorization entry by entry"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Lloyd N. Trefethen and David Bau III, Numerical Linear Algebra"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---

## Example

Take

$$A=\begin{pmatrix}2&1&0\\1&2&1\\0&1&2\end{pmatrix},\qquad v_1=e_1.$$

The first two Arnoldi steps give

$$v_2=e_2,\qquad v_3=e_3,\qquad \bar H_2=\begin{pmatrix}2&1\\1&2\\0&1\end{pmatrix},$$

so with
$Q_2=[e_1\,e_2]$ and $Q_3=[e_1\,e_2\,e_3]$ one has

$$AQ_2=Q_3\bar H_2.$$

## Facts & Assumptions

**Given:** The matrix $A$ and start vector $v_1=e_1$.

[L1] Before breakdown, Arnoldi produces an orthonormal Krylov basis and the
factorization $AQ_m=Q_{m+1}\bar H_m$
([[thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization]]).

## Verification
**Proof technique:** direct.

1.1 Since $Av_1=2e_1+e_2$, the first Arnoldi coefficients are $h_{11}=2$, $h_{21}=1$, and $v_2=e_2$. Next, $Av_2=e_1+2e_2+e_3$, so $h_{12}=1$, $h_{22}=2$, $h_{32}=1$, and $v_3=e_3$. [L1, algebra]

2.1 Therefore $Q_2=[e_1\,e_2]$ and $Q_3\bar H_2=[Ae_1\,Ae_2]=AQ_2$. The vectors are orthonormal exactly as [L1] predicts, and the Hessenberg entries are visible column by column. [L1, step 1.1] ∎