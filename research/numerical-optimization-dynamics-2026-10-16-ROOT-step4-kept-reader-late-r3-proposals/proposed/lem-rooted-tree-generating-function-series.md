---
id: lem-rooted-tree-generating-function-series
kind: lemma
title: Rooted-tree series and the inverse of u exp(-u)
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - thm-lagrange-burmann-inversion
  - prop-formal-derivative-algebra
  - thm-formal-power-series-unit-criterion
  - thm-exponential-product-limit
  - lem-convergent-power-series-termwise-differentiation
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the proof is coefficient extraction and a deterministic convergence bound.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Philippe Laurençot, Weak compactness techniques and coagulation equations, §§1 and 3.3
      url: https://arxiv.org/pdf/1801.08312
---

## Statement

Let $T(z)=\sum_{k\ge1}k^{k-1}z^k/k!$ and $U(z)=T(z)-T(z)^2/2$. These series converge absolutely for $|z|<e^{-1}$. On that disk they satisfy $T=ze^T$, $zT'=T/(1-T)$, and $zU'=T$. Consequently $U(z)=\sum_{k\ge1}k^{k-2}z^k/k!$. For real $0\le z<e^{-1}$, $T(z)$ is the unique $u\in[0,1)$ satisfying $u e^{-u}=z$.

## Facts & Assumptions

**Given:** Formal series are multiplied by coefficient convolution, and the Lagrange–Bürmann formula applies to the unique formal solution of $w=z\phi(w)$ over a field containing $\mathbb Q$.

[F1] [[thm-lagrange-burmann-inversion]]: if $w=z\phi(w)$ and $\phi(0)\ne0$, then $[z^n]H(w)=\frac1n[u^{n-1}]H'(u)\phi(u)^n$ for every $n\ge1$.

[F2] [[prop-formal-derivative-algebra]]: formal differentiation obeys the product rule.

[F3] [[thm-formal-power-series-unit-criterion]]: a formal power series with nonzero constant coefficient over a field is invertible.

[F4] [[thm-exponential-product-limit]]: $(1+1/n)^n\to e$.

[F5] [[lem-convergent-power-series-termwise-differentiation]]: if a power series and its formal derivative series converge absolutely at every smaller radius, the sum differentiates termwise inside the radius.

## Proof

1.1 Apply [F1] with $\phi(u)=e^u$ and $H(u)=u$. It gives $[z^k]T=\frac1k[u^{k-1}]e^{ku}=k^{k-1}/k!$, and the defining equation for the compositional inverse gives $T=ze^T$ as a formal identity. [given, F1, algebra]

1.2 Differentiate $T=ze^T$ formally using [F2]. Since $T(0)=0$, the series $1-T$ is a unit by [F3], and rearrangement yields $zT'=T/(1-T)$. Therefore $zU'=zT'(1-T)=T$, so $[z^k]U=[z^k]T/k=k^{k-2}/k!$. [step 1.1, F2, F3, algebra]

2.1 For $a_k=k^{k-1}/k!$, the ratio is $a_{k+1}/a_k=(1+1/k)^{k-1}\to e$ by [F4]. The coefficients of $U$ are $a_k/k$, so their ratios have the same limit; the derivative-series ratios are $(1+1/k)^k\to e$ and $(1+1/k)^{k-1}\to e$, respectively. Given any $r<e^{-1}$, choose $r'$ with $r<r'<e^{-1}$; all four series are then bounded in their tails on $|z|\le r$ by geometric series with ratio strictly below $1$. Thus the original and derivative series satisfy the absolute-convergence hypotheses of [F5] at every smaller radius, so $T,U$ differentiate termwise there and the formal identities hold for their analytic sums. [F1, F2, F4, F5, step 1.2, algebra]

3.1 For real $0\le z<e^{-1}$, the coefficients of $T$ are nonnegative, so $T(z)\ge0$. If $T(z)\ge1$, continuity and $T(0)=0$ give $z_0\le z$ with $T(z_0)=1$, but step 1.1 implies $z_0=T(z_0)e^{-T(z_0)}=e^{-1}$, a contradiction. Thus $T(z)<1$. Since $u\mapsto ue^{-u}$ is strictly increasing on $[0,1)$, step 1.1 identifies $T(z)$ with its unique inverse-branch value. [step 1.1, step 2.1, algebra] ∎

