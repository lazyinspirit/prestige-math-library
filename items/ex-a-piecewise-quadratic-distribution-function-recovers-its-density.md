---
id: ex-a-piecewise-quadratic-distribution-function-recovers-its-density
kind: example
title: "A piecewise-quadratic distribution function recovers its density"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-radon-nikodym-derivative, def-measure-with-density,
       cor-integral-over-a-null-set-vanishes,
       thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r,
       thm-existence-of-the-lebesgue-stieltjes-measure]
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Assume the Axiom of Countable Choice. Define
$$F(x):=\begin{cases}0,&x\le0,\\x^2,&0\le x\le1,\\1,&x\ge1.\end{cases}$$
Let $\mu_F$ be the Lebesgue-Stieltjes measure of $F$. Then
$$\mu_F(E)=\int_E2x\,\chi_{[0,1]}(x)\,d\lambda(x)\qquad(E\in\mathcal B(\mathbb R)),$$
so the density recovered from $F$ is $2x\,\chi_{[0,1]}(x)$.

## Facts & Assumptions

**Given:** The piecewise-quadratic distribution function $F$ above.

[L1] A nondecreasing right-continuous function on $\mathbb R$ defines a
Lebesgue--Stieltjes measure. Two Borel measures finite on compact sets and
agreeing on all half-open intervals are equal
([[thm-existence-of-the-lebesgue-stieltjes-measure]],
[[thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r]]).

[L3] A nonnegative measurable density defines a measure
([[def-measure-with-density]]).

[L2] For an absolutely continuous signed measure and a sigma-finite positive
base satisfying a common finite exhaustion, a Radon--Nikodym derivative is
represented by a measurable function whose measurable-set integrals recover
the measure ([[def-radon-nikodym-derivative]]).

[L4] Integrals over null sets vanish
([[cor-integral-over-a-null-set-vanishes]]).

## Verification

**Proof technique:** direct.

1.1 The function $F$ is nondecreasing and right-continuous, so [L1] gives a Borel measure $\mu_F$. For every $a<b$, direct integration shows $$\int_{(a,b]}2x\,\chi_{[0,1]}(x)\,d\lambda(x)=F(b)-F(a),$$ because both sides are $0$ off $[0,1]$, and on $[0,1]$ they equal $b^2-a^2$ or the corresponding truncated interval increment. [L1, given, algebra]

2.1 By [L3], $E\mapsto\int_E2x\chi_{[0,1]}\,d\lambda$ is a finite Borel measure and hence is finite on compact sets. The Lebesgue--Stieltjes measure $\mu_F$ is also finite, because $F$ has total increment $1$. The two measures agree on every half-open interval by step 1.1, so [L1] makes them equal on all Borel sets. Thus [L4] makes $\mu_F\ll\lambda$; $\lambda$ is sigma-finite and $[-n,n]$ is a common finite exhaustion. Therefore [L2] identifies $2x\,\chi_{[0,1]}$ as a representative of $d\mu_F/d\lambda$. [step 1.1, L1, L2, L3, L4] ∎
