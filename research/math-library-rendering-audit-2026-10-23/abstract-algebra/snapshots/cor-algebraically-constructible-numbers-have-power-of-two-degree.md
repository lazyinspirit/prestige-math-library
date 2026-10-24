---
id: cor-algebraically-constructible-numbers-have-power-of-two-degree
kind: corollary
title: "An algebraically constructible real algebraic number has degree over $\\mathbb Q$ equal to a power of two"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-quadratic-tower-characterization-of-algebraic-constructibility, thm-tower-law-for-finite-field-extensions, cor-intermediate-field-degrees-divide, thm-canonical-prime-factorisation]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 5"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, consequence 1.41"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

If a real algebraic number $x$ is algebraically constructible, then

$$[\mathbb Q(x):\mathbb Q]=2^s$$

for some $s\in\mathbb N$.

## Facts & Assumptions

**Given:** A real algebraic, algebraically constructible number $x$.

[L1] The element $x$ lies in a finite tower of quadratic extensions beginning at $\mathbb Q$ ([[thm-quadratic-tower-characterization-of-algebraic-constructibility]]).

[L2] Degrees multiply in finite towers ([[thm-tower-law-for-finite-field-extensions]]).

[L3] The degree of an intermediate field divides the total finite degree ([[cor-intermediate-field-degrees-divide]]).

[L4] Prime factorization is unique, so a positive divisor of a power of $2$ is itself a power of $2$ ([[thm-canonical-prime-factorisation]]).

## Proof

**Proof technique:** direct.

1.1 Choose from [L1] a tower $\mathbb Q=K_0\subseteq\cdots\subseteq K_r$ with $x\in K_r$ and every step degree $2$. [given, L1, choose]

2.1 Repeated application of [L2] gives $[K_r:\mathbb Q]=2^r$. [step 1.1, L2, algebra]

3.1 The simple field $\mathbb Q(x)$ is intermediate between $\mathbb Q$ and $K_r$, so [L3] says its degree divides $2^r$. [step 1.1, step 2.1, L3]

4.1 By [L4], that positive divisor is $2^s$ for some $s\le r$. [step 3.1, L4] ∎
