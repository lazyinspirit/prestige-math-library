---
id: ex-bounded-fv-reconstructions-need-not-be-strongly-compact
kind: example
title: Uniformly bounded cell reconstructions need not have a strong local limit
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
aliases: []
deps: [ thm-conservative-finite-volume-weak-limit ]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

For $k\ge1$, let $h_k=2^{-k}$ and define the bounded cellwise functions
$$ V_k(x,t)=\begin{cases}(-1)^{\lfloor x/h_k\rfloor},&0\le x<1,\\0,&x\notin[0,1),\end{cases} \qquad 0<t<1. $$
Then $|V_k|\le1$, but $(V_k)$ has no strongly $L^1_{\mathrm{loc}}$-convergent
subsequence. These are a bounded sequence of cell reconstructions illustrating
why a compactness premise is explicit in the weak-limit theorem; they are not
asserted to arise from one fixed initial datum or from a stable update.

## Facts & Assumptions

**Given:** The functions $V_k$ in the Statement and the strong-convergence
hypothesis of [[thm-conservative-finite-volume-weak-limit]].

[F1] The weak-limit theorem assumes strong $L^1_{\mathrm{loc}}$ convergence of
the reconstructions; a uniform bound is not stated as a replacement for it.
([[thm-conservative-finite-volume-weak-limit]])

## Verification
1.1 Use the compact rectangle $K=[0,1]\times[1/4,3/4]$ inside the space-time domain. Each $V_k$ takes only the values $-1,1$ on $[0,1)\times(0,1)$ and zero outside, so $|V_k|\le1$ and $\|V_k\|_{L^1(K)}=1/2$. [given]

1.2 If $k<\ell$, every $k$-cell in $[0,1)$ is the union of $2^{\ell-k}$ finer $\ell$-cells, an even number. The signs of $V_\ell$ alternate on those finer cells, so their integral on each coarse cell is zero; since $V_k$ is constant on that coarse cell, $\int_KV_kV_\ell=0$. [given, algebra]

2.1 For signs $a,b\in\{-1,1\}$, $|a-b|=1-ab$. Thus for $k\ne\ell$, $$ \|V_k-V_\ell\|_{L^1(K)} =1/2-\int_KV_kV_\ell=1/2. $$ Every subsequence is therefore non-Cauchy in $L^1(K)$, so no subsequence can converge strongly in $L^1_{\mathrm{loc}}$. [step 1.1, step 1.2, algebra]

3.1 This example supplies only a bounded sequence without strong compactness; it makes no finite-volume recurrence claim. Therefore the convergence premise in [F1] remains a separate hypothesis. [F1, step 2.1] ∎