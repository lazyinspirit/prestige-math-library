---
id: ex-prime-ideals-of-a-node
kind: example
title: "Minimal and maximal primes of the node ring"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-prime-spectrum-of-a-quotient-bijection, def-prime-and-maximal-ideals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14 The spectrum of a ring"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §13 and §17"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Example

Let $A=k[x,y]/(xy)$ for a field $k$. Then the minimal prime ideals of $A$ are $(\overline x)$ and $(\overline y)$, and every maximal ideal of $A$ contains at least one of them. The maximal ideal $(\overline x,\overline y)$ contains both.

## Facts & Assumptions

**Given:** A field $k$ and the quotient ring $A=k[x,y]/(xy)$.

[L1] Prime ideals of a quotient correspond to prime ideals of the original ring containing the kernel ([[thm-prime-spectrum-of-a-quotient-bijection]]).

[L2] Prime ideals are proper and absorb factors of a product ([[def-prime-and-maximal-ideals]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], prime ideals of $A$ correspond to prime ideals of $k[x,y]$ containing $(xy)$. If $\mathfrak p$ contains $(xy)$, then $xy\in\mathfrak p$, so [L2] gives $x\in\mathfrak p$ or $y\in\mathfrak p$. Therefore every prime of $A$ contains $(\overline x)$ or $(\overline y)$. Since $A/(\overline x)\cong k[y]$ and $A/(\overline y)\cong k[x]$ are integral domains, both $(\overline x)$ and $(\overline y)$ are prime, and no smaller prime can contain them. Thus they are the minimal primes of $A$. [L1, L2, given, algebra]

2.1 If $\mathfrak m$ is maximal in $A$, then it is prime, so step 1.1 shows that it contains $(\overline x)$ or $(\overline y)$. The maximal ideal $(\overline x,\overline y)$ indeed contains both, so "at least one" is the correct boundary statement here. [step 1.1, given, algebra]

3.1 This gives the minimal-prime picture of the node ring and the maximal-ideal boundary at the singular point. [step 1.1, step 2.1] ∎
