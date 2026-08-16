---
id: ex-primes-dividing-x-squared-plus-three
kind: example
title: "Odd primes represented by a divisor of $x^2+3$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-quadratic-reciprocity,
       thm-first-supplement-to-quadratic-reciprocity,
       thm-legendre-symbol-multiplicativity, def-legendre-symbol]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Gorodnik, Number Theory, Lecture 9, Example 2.4"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf"
pipeline_run: null
---

## Example

An odd prime $p$ divides $x^2+3$ for some integer $x$ if and only if $p=3$ or $p\equiv1\pmod3$. Equivalently, for every odd prime $p\ne3$, the congruence $x^2\equiv-3\pmod p$ is soluble if and only if $p\equiv1\pmod3$.

## Facts & Assumptions

**Given:** An odd prime $p$.

[L1] For distinct odd primes $p,q$, $\left(\frac pq\right)\left(\frac qp\right)=(-1)^{(p-1)(q-1)/4}$ ([[thm-quadratic-reciprocity]]).

[L2] For every odd prime $p$, $\left(\frac{-1}{p}\right)=(-1)^{(p-1)/2}$ ([[thm-first-supplement-to-quadratic-reciprocity]]).

[L3] For an odd prime $p$, the Legendre symbol is $1$ exactly on the nonzero square classes modulo $p$ ([[def-legendre-symbol]]).

[L4] For every odd prime $p$ and integers $a,b$, $\left(\frac{ab}{p}\right)=\left(\frac ap\right)\left(\frac bp\right)$ ([[thm-legendre-symbol-multiplicativity]]).

## Verification

**Proof technique:** direct.

1.1 Suppose $p\ne3$. Applying [L1] to $3$ and $p$ gives $(3/p)(p/3)=(-1)^{(p-1)/2}=(-1/p)$ by [L2]. Since $(3/p)$ is a sign and [L4] gives $(-3/p)=(-1/p)(3/p)$, multiplication by $(3/p)$ yields $(-3/p)=(p/3)$. [L1, L2, L4, given, algebra]

2.1 By [L3], $x^2\equiv-3\pmod p$ is soluble exactly when $(-3/p)=1$. For $p\ne3$, step 1.1 makes this equivalent to $(p/3)=1$, and the nonzero square classes modulo $3$ consist only of $1$, so this is equivalent to $p\equiv1\pmod3$. For $p=3$, the class $x=0$ directly satisfies $x^2\equiv-3\pmod3$. [step 1.1, L3, algebra] ∎
