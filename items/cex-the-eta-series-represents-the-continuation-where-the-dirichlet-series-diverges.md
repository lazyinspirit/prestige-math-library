---
id: cex-the-eta-series-represents-the-continuation-where-the-dirichlet-series-diverges
kind: counterexample
title: "The eta series can represent the continued zeta function where the defining Dirichlet series diverges"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-dirichlet-eta-representation, thm-p-series-rational]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 6 §2.1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement refuted

Whenever a series represents the zeta continuation, it must be the defining
Dirichlet series $\sum_{n\ge1}n^{-s}$.

## Facts & Assumptions

**Given:** The point $s=1/2$.

[L1] On $\operatorname{Re}s>0$,
$$\sum_{n\ge1}(-1)^{n-1}n^{-s}=(1-2^{1-s})\zeta(s)$$
([[thm-dirichlet-eta-representation]]).

[L2] The series $\sum_{n\ge1}n^{-1/2}$ diverges because $1/2\le1$
([[thm-p-series-rational]]).

## Counterexample

**Proof technique:** direct.

1.1 Apply [L1] at $s=1/2$. Then $$\sum_{n\ge1}\frac{(-1)^{n-1}}{\sqrt n}=(1-\sqrt2)\zeta(1/2),$$ so the eta series represents the continued zeta value at $1/2$. [L1, given]

2.1 By [L2], the defining Dirichlet series $\sum_{n\ge1}n^{-1/2}$ diverges. Therefore step 1.1 gives a point where the continuation is represented by the eta series even though the defining Dirichlet series diverges. [step 1.1, L2, algebra] ∎
