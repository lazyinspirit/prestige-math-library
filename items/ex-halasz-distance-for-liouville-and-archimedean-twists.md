---
dependency_level: 3
id: ex-halasz-distance-for-liouville-and-archimedean-twists
kind: example
title: "Comparing Liouville with Archimedean twists"
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
  - def-liouville-function
  - lem-reciprocal-prime-sum-from-mertens-first-theorem
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions
proof_strategy: direct
aliases: []
sources:
  scraped: []
  references: []
---

## Example

For the Liouville function $\lambda$ and every real $x\ge3$ and $t\in\mathbb R$,

$$ D(\lambda,n^{it};x)^2=\sum_{p\le x}\frac{1+\cos(t\log p)}p. $$

At $t=0$, this gives

$$ D(\lambda,1;x)^2=2\sum_{p\le x}\frac1p=2\log\log x+O(1), $$

so for every $T\ge1$,

$$ M(\lambda;x,T)\le2\log\log x+O(1). $$

## Example references

[[def-liouville-function]]

[[def-pretentious-distance-to-an-archimedean-twist]]

[[lem-reciprocal-prime-sum-from-mertens-first-theorem]]

[[def-halasz-minimal-pretentious-distance]]

[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

## Facts & Assumptions

**Given:** A real $x\ge3$, real $t$, and the Liouville function $\lambda$.

[F1] The Liouville function is $\lambda(n)=(-1)^{e_0+\cdots+e_{r-1}}$ when $n=\prod_{i<r}p_i^{e_i}$; hence $\lambda(p)=-1$ for every prime $p$ ([[def-liouville-function]]).

[F2] $D(f,n^{it};x)^2=\sum_{p\le x}(1-\operatorname{Re}(f(p)p^{-it}))/p$ ([[def-pretentious-distance-to-an-archimedean-twist]]).

[F3] For real $u,v$, $\exp(u+iv)=e^u(\cos v+i\sin v)$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F4] $\cos(-u)=\cos u$ for every real $u$ ([[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]).

[F5] For real $x\ge3$, $\sum_{p\le x}1/p=\log\log x+O(1)$ ([[lem-reciprocal-prime-sum-from-mertens-first-theorem]]).

[F6] $M(\lambda;x,T)=\min_{|t|\le T}D(\lambda,n^{it};x)^2$ for $T\ge1$ ([[def-halasz-minimal-pretentious-distance]]).

## Verification

1.1 Substituting $f(p)=\lambda(p)=-1$ from [F1] into [F2], and using [F3]–[F4] to evaluate the real part, gives $D(\lambda,n^{it};x)^2=\sum_{p\le x}(1+\cos(t\log p))/p$. [F1, F2, F3, F4, given, algebra]

2.1 At $t=0$, every cosine equals $1$, so [F5] gives $D(\lambda,1;x)^2=2\log\log x+O(1)$. [F5, step 1.1, algebra]

3.1 Since $0\in[-T,T]$ for $T\ge1$, the minimum in [F6] is no greater than its value at $t=0$; substituting step 2.1 proves the asserted bound for $M(\lambda;x,T)$. [F6, step 2.1, choose] ∎

## Verification references

[[def-liouville-function]]

[[def-pretentious-distance-to-an-archimedean-twist]]

[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

[[lem-reciprocal-prime-sum-from-mertens-first-theorem]]

[[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]

[[def-halasz-minimal-pretentious-distance]]
