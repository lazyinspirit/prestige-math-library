---
id: thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x
kind: theorem
title: "Along a differentiable matrix path, a simple eigenvalue satisfies $\\lambda'=y^*A'x$ under the normalization $y^*x=1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing,
       prop-simple-eigenvalues-admit-left-right-normalization]
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
    - title: "David Bindel, CS 6210: Matrix Computations - Perturbation theory"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-22.html"
---

## Statement

Let $A(t)$ be differentiable, and let $\lambda(t)$ be a simple eigenvalue with
differentiable compatible eigenvectors $x(t),y(t)$ normalized by
$y(t)^\ast x(t)=1$. Then

$$\lambda'(t)=y(t)^\ast A'(t)x(t).$$

## Facts & Assumptions

**Given:** A differentiable matrix path $A(t)$, a differentiable simple
eigenpair branch $\lambda(t),x(t),y(t)$, and the normalization
$y(t)^\ast x(t)=1$.

[L1] Simple eigenpairs admit local differentiable branches after gauge fixing
([[thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing]]).

## Proof
**Proof technique:** direct.

1.1 Differentiate the eigenvalue equation $A(t)x(t)=\lambda(t)x(t)$: $$A'(t)x(t)+A(t)x'(t)=\lambda'(t)x(t)+\lambda(t)x'(t).$$ Left-multiply by $y(t)^\ast$. Since $y(t)^\ast A(t)=\lambda(t)y(t)^\ast$, the terms with $x'(t)$ cancel. [given, L1, algebra]

2.1 Step 1.1 leaves $y(t)^\ast A'(t)x(t)=\lambda'(t)\,y(t)^\ast x(t)$. The normalization $y(t)^\ast x(t)=1$ therefore gives $\lambda'(t)=y(t)^\ast A'(t)x(t)$. [step 1.1, algebra] ∎