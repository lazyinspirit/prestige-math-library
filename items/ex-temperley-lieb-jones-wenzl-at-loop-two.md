---
id: ex-temperley-lieb-jones-wenzl-at-loop-two
kind: example
title: "The rank-two Jones–Wenzl idempotent at loop value two"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
  - def-temperley-lieb-jones-wenzl-recursion
  - lem-temperley-lieb-jones-wenzl-recursion-properties
  - def-temperley-lieb-normalized-markov-trace-by-closure
  - lem-temperley-lieb-closure-trace-is-cyclic-and-markov
  - lem-temperley-lieb-generators-satisfy-local-relations
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§2.3, Theorem 2.3.2 and Proposition 2.3.6, PDF pp. 19–24: recursion and trace values."
---

## Example

Let $q=1$, so $\delta=2$ and $[r]_q=r$. In rank two the recursion gives $p_2=1-\frac12d_1$, an idempotent annihilated by $d_1$, with normalized closure trace $\tau_2(p_2)=3/4$.

## Facts & Assumptions

**Given:** $q=1$, $\delta=2$, $[r]_q=r$, and the rank-two generator $d_1$.

[F1] $d_1^2=2d_1$, and $\tau_2(1)=1$, $\tau_2(d_1)=1/2$ ([[lem-temperley-lieb-generators-satisfy-local-relations]], [[def-temperley-lieb-normalized-markov-trace-by-closure]], [[lem-temperley-lieb-closure-trace-is-cyclic-and-markov]]).

[F2] The recursion is $p_2=1-\frac{[1]}{[2]}d_1$, and its trace formula is $\tau_2(p_2)=[3]/2^2$ ([[def-temperley-lieb-jones-wenzl-recursion]], [[lem-temperley-lieb-jones-wenzl-recursion-properties]]).

## Verification

**Given:** The stated parameter and rank-two algebra.

1.1 Since $[1]=1$ and $[2]=2$, the recursion gives $p_2=1-\frac12d_1$. By [F1], $$p_2^2=1-d_1+\frac14d_1^2=1-\frac12d_1=p_2,\qquad d_1p_2=p_2d_1=0.$$ The identity coefficient is $1$, so $p_2\ne0$. [F1, F2, given, algebra]

2.1 The trace formula in [F2] gives $\tau_2(p_2)=[3]/2^2=3/4$. This calculation uses the closure trace normalization $\tau_2(1)=1$, not the unnormalized categorical trace. [F1, F2, step 1.1] ∎
