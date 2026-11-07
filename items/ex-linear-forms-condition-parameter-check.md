---
id: ex-linear-forms-condition-parameter-check
kind: example
title: "Checking the linear-forms parameters for $k=4$"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-k-pseudorandom-measure
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§3, Definition 3.3, printed p. 491"
---

## Example

For $k=4$, the Green–Tao pseudorandomness parameters are $m_0=4\cdot2^3=32$, $t_0=3\cdot4-4=8$, and $L_0=4$, and the correlation order is $2^3=8$. The constant sequence $\nu_p(x)=1$ satisfies all these conditions exactly.

## Example references

[[def-k-pseudorandom-measure|$k$-pseudorandom measure in the Green–Tao convention]]

[Green and Tao, §3, Definition 3.3](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

## Facts & Assumptions

**Given:** The Green–Tao definition of $k$-pseudorandomness and the constant sequence $\nu_p\equiv1$.

[F1] For fixed $k\ge3$, the linear-forms tuple is $(k2^{k-1},3k-4,k)$ and the correlation order is $2^{k-1}$ ([[def-k-pseudorandom-measure]]).

## Verification

1.1 Substituting $k=4$ in [F1] gives $(m_0,t_0,L_0)=(32,8,4)$ and correlation order $8$. [given, F1, algebra]

2.1 For every admissible affine-linear system and every $p$, every factor in the linear-forms average is $1$. For every correlation order choose $\tau_{m,p}\equiv1$; every moment and correlation average is exactly $1$. Thus $\nu_p\equiv1$ meets the specified tests with zero error. [given, F1, algebra] ∎
