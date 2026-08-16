---
id: ex-length-of-z-modulo-p-to-the-k
kind: example
title: "The $\\mathbb Z$-module $\\mathbb Z/p^k$ has length $k$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-composition-series-and-length-of-a-module, thm-jordan-holder-theorem-for-modules, cor-length-is-additive-in-short-exact-sequences, cor-prime-order-group-is-cyclic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Arvind Nair, Algebra I, Lecture 5"
      url: "https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf"
pipeline_run: null
---

## Example

For a prime $p$ and $k\in\mathbb N$, the $\mathbb Z$-module $\mathbb Z/p^k\mathbb Z$ has length $k$. In particular, $k=0$ gives the zero module. See [[def-composition-series-and-length-of-a-module]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] A composition series of a left $R$-module $M$ is a finite chain $$0=M_0<M_1<\cdots<M_n=M$$ whose factors $M_i/M_{i-1}$ are simple. If such a series exists, the length $\ell_R(M)$ is its number $n$ of factors; thm-jordan-holder-theorem-for-modules proves independence of the chosen series. The zero module has the empty series and length $0$. ([[def-composition-series-and-length-of-a-module]]).

[L2] Any two composition series of a module have the same length, and their simple factors agree up to permutation and isomorphism. ([[thm-jordan-holder-theorem-for-modules]]).

[L3] For a short exact sequence $0\to N\to M\to Q\to0$, the module $M$ has finite length if and only if $N$ and $Q$ do, and then $$\ell_R(M)=\ell_R(N)+\ell_R(Q).$$. ([[cor-length-is-additive-in-short-exact-sequences]]).

[L4] Let $G$ be a finite group such that the positive integer $|G|$ is prime. Then every $g\ne e$ has order $|G|$, satisfies $\langle g\rangle=G$, and hence generates $G$. In particular, $G$ is cyclic. ([[cor-prime-order-group-is-cyclic]]).

## Verification

**Proof technique:** direct.

1.1 For $k\ge1$, the chain $0<p^{k-1}\mathbb Z/p^k\mathbb Z<\cdots<p\mathbb Z/p^k\mathbb Z<\mathbb Z/p^k\mathbb Z$ is strict, and every successive quotient has order $p$ and is therefore the simple $\mathbb Z$-module $\mathbb Z/p$. [L1, L2, L3, L4, given, algebra]

2.1 This composition series has $k$ factors, so Jordan–Hölder gives length $k$. For $k=0$, $\mathbb Z/p^0\mathbb Z=0$ has the empty series; for $k=1$, the displayed module itself is simple. [step 1.1, given, algebra]

3.1 The calculation concerns the finite-length quotient module and does not require the ambient ring $\mathbb Z$ to be Artinian. This proves the stated claim. [step 2.1, given, algebra] ∎
