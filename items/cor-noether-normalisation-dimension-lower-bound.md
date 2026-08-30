---
id: cor-noether-normalisation-dimension-lower-bound
kind: corollary
title: "A domain finite over a polynomial ring has dimension at least the number of variables"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-krull-dimension-of-a-ring, cor-integral-extension-lifts-finite-prime-chains]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Lemma (15.9)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $k$ be a field, let $d\ge 0$, and let $A$ be an integral domain that is
module-finite over the polynomial ring $k[z_1,\ldots,z_d]$ via an injective
$k$-algebra map
$$
k[z_1,\ldots,z_d]\hookrightarrow A.
$$
Then
$$
\dim A\ge d.
$$

## Facts & Assumptions

**Given:** The Axiom of Choice, a field $k$, an integer $d\ge 0$, an integral domain $A$, and an injective $k$-algebra map $k[z_1,\ldots,z_d]\hookrightarrow A$ making $A$ module-finite over $k[z_1,\ldots,z_d]$.

[L1] Krull dimension is the supremum of the lengths of chains of prime ideals ([[def-krull-dimension-of-a-ring]]).

[L2] Integral extensions lift finite prime chains from the base ([[cor-integral-extension-lifts-finite-prime-chains]]).

## Proof

**Proof technique:** direct.

1.1 Because $A$ is finitely generated as a module over $R:=k[z_1,\ldots,z_d]$, multiplication by any $a\in A$ is an $R$-linear endomorphism of a finite $R$-module. Cayley-Hamilton therefore gives a monic polynomial over $R$ satisfied by $a$, so $A$ is integral over $R$. [given, algebra]

1.2 The polynomial ring $R$ has the prime chain $$ (0)\subset (z_1)\subset (z_1,z_2)\subset \cdots \subset (z_1,\ldots,z_d), $$ of length $d$: each quotient by $(z_1,\ldots,z_i)$ is again a polynomial ring over $k$ and hence an integral domain, so those ideals are prime. [given, algebra]

2.1 Apply [L2] to the chain from step 1.2 and the integral inclusion $R\subseteq A$ from step 1.1. This gives a chain of $d+1$ prime ideals in $A$, so by [L1] the dimension of $A$ is at least $d$. [L1, L2, step 1.1, step 1.2] ∎
