---
id: ex-lucky-arnoldi-breakdown-on-an-invariant-krylov-space
kind: example
title: "Lucky breakdown occurs when the current Krylov space is already invariant"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance]
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

## Example

Let

$$A=\operatorname{diag}(2,3,4),\qquad b=e_1.$$

Then $K_1(A,b)=\operatorname{span}\{e_1\}$ and
$A(K_1(A,b))\subseteq K_1(A,b)$, because $Ae_1=2e_1$. Arnoldi therefore breaks
down exactly after the first step: the next residual is zero.

## Facts & Assumptions

**Given:** The diagonal matrix $A$ and start vector $b=e_1$.

[L1] Exact Arnoldi breakdown at the next step is equivalent to invariance of
the current Krylov space ([[prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance]]).

## Verification
**Proof technique:** direct.

1.1 Here $K_1(A,b)=\operatorname{span}\{e_1\}$ and $Ae_1=2e_1\in K_1(A,b)$, so the current Krylov space is $A$-invariant. [algebra]

2.1 By [L1], that invariance is equivalent to exact Arnoldi breakdown at the next step. Concretely, the Arnoldi residual is $w_1=Ae_1-\langle Ae_1,e_1\rangle e_1=2e_1-2e_1=0$. [L1, step 1.1, algebra] ∎