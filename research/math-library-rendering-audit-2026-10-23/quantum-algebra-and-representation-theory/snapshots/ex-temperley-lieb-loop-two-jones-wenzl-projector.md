---
id: ex-temperley-lieb-loop-two-jones-wenzl-projector
kind: example
title: "The two-strand Jones-Wenzl projector at loop value two"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-temperley-lieb-closure-trace-and-partial-trace
  - lem-temperley-lieb-closure-trace-component-identities
  - def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators
  - lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
  - def-temperley-lieb-diagram-category
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§2.3, Theorem 2.3.2, PDF pp. 20–23: first Jones–Wenzl recursion."
    - title: "K. Iohara, G. I. Lehrer, and R. B. Zhang, The Jones Quotients of the Temperley-Lieb Algebras"
      url: "https://arxiv.org/pdf/1702.08128"
      locator: "§2.1, printed pp. 3–4: the first projector and its trace."
---

## Example

Take $R=\mathbb C$, $\delta=2$, so $[1]=1$, $[2]=2$, and $[3]=3$. The recursion gives

$$p_2=1_2-\tfrac12U_1.$$

It is a nonzero idempotent annihilated by $U_1$ on both sides, has partial trace $\tfrac32p_1$, and has unnormalized closure trace $3$.

## Facts & Assumptions

**Given:** The two-strand Temperley–Lieb algebra with $U_1^2=2U_1$.

[F1] The recursion is $p_2=1_2-([1]/[2])U_1$ when $[2]$ is a unit ([[def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators]]).

[F2] For unit quantum integers the projector is idempotent, annihilates the generator, and has partial trace $([3]/[2])p_1$ and closure trace $[3]$ ([[lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness]]).

[F3] The recurrence gives $[2]=\delta$ and $[3]=\delta[2]-[1]$ ([[def-temperley-lieb-quantum-integers-and-quantum-characteristic]]).

## Verification

**Proof technique:** direct calculation.

1.1 Substituting $\delta=2$ into [F3] yields $[2]=2$ and $[3]=2\cdot2-1=3$. Thus [F1] gives $p_2=1_2-\frac12U_1$; the coefficient denominator is a unit in $\mathbb C$. [F1, F3, given, algebra]

2.1 Directly, $p_2^2=1-U_1+\frac14U_1^2=1-U_1+\frac12U_1=p_2$ and $U_1p_2=p_2U_1=U_1-\frac12(2U_1)=0$. The identity and cup-cap diagrams are distinct basis vectors, so the coefficient $1$ on the identity makes $p_2\ne0$. [F1, step 1.1, algebra]

3.1 From [F2], $\operatorname{ptr}_2(p_2)=([3]/[2])p_1=\frac32p_1$ and $\operatorname{Tr}_2(p_2)=[3]=3$. These agree with direct closure: $\operatorname{Tr}_2(1_2)=4$ and $\operatorname{Tr}_2(U_1)=2$, so $4-\frac12(2)=3$. [F2, F3, step 1.1, algebra] ∎
