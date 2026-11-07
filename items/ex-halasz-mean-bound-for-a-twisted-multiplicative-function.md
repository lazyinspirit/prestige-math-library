---
dependency_level: 6
id: ex-halasz-mean-bound-for-a-twisted-multiplicative-function
kind: example
title: "Choosing the minimizing twist in a mean-value bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - def-pretentious-distance-to-an-archimedean-twist
  - def-halasz-minimal-pretentious-distance
  - thm-halasz-mean-value-bound
  - def-completely-multiplicative-arithmetic-function
  - lem-archimedean-twist-completely-multiplicative-and-unit-valued
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
proof_strategy: direct
sources:
  scraped: []
  references: []
---

## Example

For real $\tau$, define $f(n):=\exp(i\tau\log n)$ for every positive integer
$n$. If $x\ge3$ and $T\ge\max\{1,|\tau|\}$, then

$$ M(f;x,T):=\min_{|t|\le T}\sum_{p\le x}\frac{1-\operatorname{Re}(f(p)p^{-it})}{p}=0. $$

Consequently the Halász mean-value bound specializes to

$$ \frac1x\left|\sum_{n\le x}f(n)\right|\ll1+\frac1T+\frac{\log\log x}{\log x}, $$

with an absolute implied constant.

## Example references

[[def-completely-multiplicative-arithmetic-function]]

[[def-pretentious-distance-to-an-archimedean-twist]]

[[def-halasz-minimal-pretentious-distance]]

[[thm-halasz-mean-value-bound]]

[[thm-complex-exponential-addition-and-real-extension]]

[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]


## Facts & Assumptions

**Given:** Real $\tau$, real $x\ge3$, $T\ge\max\{1,|\tau|\}$, and $f(n)=\exp(i\tau\log n)$.

[F1] This Archimedean twist is completely multiplicative and has modulus one ([[lem-archimedean-twist-completely-multiplicative-and-unit-valued]]).

[F2] The minimum is the nonnegative minimizing prime sum in [[def-halasz-minimal-pretentious-distance]].

[F3] The full mean-value estimate holds for every 1-bounded multiplicative function and every $x\ge3,T\ge1$ ([[thm-halasz-mean-value-bound]]).

[F4] The complex exponential satisfies $\exp(z+w)=\exp(z)\exp(w)$ and $\exp(0)=1$ ([[thm-complex-exponential-addition-and-real-extension]]).

## Verification

1.1 By [F1], $f$ has $f(1)=1$, is multiplicative on coprime positive integers, and satisfies $|f(n)|\le1$. Thus every function hypothesis of [F3] holds; $x\ge3,T\ge1$ supply its parameter hypotheses. [given, F1, F3]

1.2 The admissible twist $t=\tau$ lies in $[-T,T]$. By [F4], $f(p)p^{-i\tau}=\exp(i\tau\log p)\exp(-i\tau\log p)=1$ at every prime, so the corresponding finite prime sum is zero. Every summand at any twist is nonnegative because its complex input has modulus one. Hence [F2] gives $M(f;x,T)=0$. [given, F1, F2, F4, algebra]

2.1 Apply [F3] using step 1.1 and substitute $M=0$ from step 1.2. Since $(1+0)e^0=1$, its right side is an absolute constant times $1+T^{-1}+\log\log x/\log x$, as claimed. [F3, step 1.1, step 1.2, algebra] ∎
