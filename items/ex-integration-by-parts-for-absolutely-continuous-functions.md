---
id: ex-integration-by-parts-for-absolutely-continuous-functions
kind: example
title: "Integration by parts for absolutely continuous functions"
status: draft
origin: pipeline
deps: [def-countable-choice, def-dependent-choice, cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous, thm-integration-by-parts-for-absolutely-continuous-functions]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Corollary 6.3.9"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Example

Assume the Axioms of Countable Choice and Dependent Choice. On $[0,1]$, take $F(x)=\sqrt{x}$ and $G(x)=x$. Both are absolutely continuous,
and integration by parts gives
$$\int_0^1\sqrt{x}\,dx+\int_0^1\frac{x}{2\sqrt{x}}\,dx=1.$$

## Facts & Assumptions

**Given:** Countable choice, dependent choice, $F(x)=\sqrt{x}$, and $G(x)=x$ on $[0,1]$.

## Verification

**Proof technique:** direct.

1.1 $F(x)=\int_0^x(2\sqrt{t})^{-1}\,dt$ and $G(x)=\int_0^x1\,dt$. Both integrands are in $L^1[0,1]$, so [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]] makes $F$ and $G$ AC; their derivatives are respectively $(2\sqrt{x})^{-1}$ and $1$ almost everywhere. [given, algebra]

2.1 Apply [[thm-integration-by-parts-for-absolutely-continuous-functions]]: its endpoint term is $F(1)G(1)-F(0)G(0)=1$. [step 1.1]

3.1 The two integrands are respectively $\sqrt{x}$ and $\sqrt{x}/2$, whose integrals are $2/3$ and $1/3$. [step 2.1, algebra] ∎
