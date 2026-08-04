---
id: thm-number-theoretic-and-poset-mobius-agree
kind: theorem
title: "The number-theoretic Möbius function is the poset Möbius function of divisibility: $\\mu(n)=\\mu_{\\mid}(1,n)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-number-theoretic-mobius-function, def-poset-mobius-function, lem-divisibility-poset-is-lower-finite-and-factorises, thm-mobius-function-of-a-product-poset, thm-mobius-function-of-a-finite-chain, lem-poset-mobius-recurrence]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "R. Stanley, Enumerative Combinatorics, Volume 1, §§3.8.4–3.8.5"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Statement

For every positive integer $n$,

$$\mu(n)=\mu_{\mid}(1,n),$$

where the left side is [[def-number-theoretic-mobius-function]] and the right side is the poset Möbius function of positive-integer divisibility ([[def-poset-mobius-function]]). More generally, if $d\mid n$, then

$$\mu_{\mid}(d,n)=\mu(n/d).$$

## Facts & Assumptions

**Given:** A positive integer $n$ and, for the general clause, a positive divisor $d$ of $n$.

[L1] A divisor interval for quotient $q$ is order-isomorphic to a finite product of exponent chains $\{0,\ldots,v_{p_i}(q)\}$ ([[lem-divisibility-poset-is-lower-finite-and-factorises]]).

[L2] The Möbius function of a product poset is the product of the factor Möbius functions ([[thm-mobius-function-of-a-product-poset]]).

[L3] The endpoint Möbius value of a finite chain is $1$ for a one-point chain, $-1$ for a two-point chain, and $0$ for a longer chain ([[thm-mobius-function-of-a-finite-chain]]).

[L4] The diagonal and interval-sum recurrence uniquely determine the Möbius function, so a poset isomorphism transports its values ([[lem-poset-mobius-recurrence]]).

[F1] The prime-factor definition gives $0$ when some exponent is at least $2$, and otherwise gives $(-1)^r$ for the $r$ exponents equal to $1$ ([[def-number-theoretic-mobius-function]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to $[1,n]$. Transporting through its order isomorphism by [L4] and iterating [L2], its endpoint Möbius value is the product over the prime exponents $e_i=v_{p_i}(n)$ of the endpoint values of the chains $\{0,\ldots,e_i\}$. [L1, L2, L4]

2.1 If some $e_i\ge2$, [L3] makes one factor $0$, so the product is $0$. If every $e_i=1$, every factor is $-1$, so the product is $(-1)^r$. For $n=1$ the product is empty and equals $1$. [step 1.1, L3]

3.1 The cases in step 2.1 are exactly those of [F1], proving $\mu_{\mid}(1,n)=\mu(n)$. [step 2.1, F1]

3.2 For $d\mid n$, [L1] identifies $[d,n]$ with the divisor interval $[1,n/d]$ and hence with the same exponent-chain product; transporting through these isomorphisms by [L4] and repeating steps 1.1 and 2.1 gives $\mu_{\mid}(d,n)=\mu(n/d)$. [step 1.1, step 2.1, L1, L2, L3, L4]

4.1 Steps 3.1 and 3.2 prove the stated agreement and its interval form. [step 3.1, step 3.2] ∎
