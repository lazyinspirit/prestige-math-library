---
id: ex-integrality-localisation-clearing-denominators
kind: example
title: "The element 1/p is integral over Z[1/p] but not over Z"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-integrality-commutes-with-localisation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 6.7"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Example

Let $p$ be a prime number. Inside $\mathbb Q$, the element $1/p$ is integral over $\mathbb Z[1/p]$ but not integral over $\mathbb Z$.

## Facts & Assumptions

**Given:** A prime number $p$, the inclusion $\mathbb Z\subseteq\mathbb Q$, and the localisation $\mathbb Z[1/p]$.

[L1] Integrality localises, and conversely denominators can be cleared after localisation ([[thm-integrality-commutes-with-localisation]]).

## Verification

**Proof technique:** direct.

1.1 The element $1/p$ already belongs to the base ring $\mathbb Z[1/p]$, so it satisfies the monic equation $T-1/p=0$ there. Hence it is integral over $\mathbb Z[1/p]$. [L1, given]

1.2 Suppose $1/p$ were integral over $\mathbb Z$. Then there would be a monic equation $(1/p)^n+a_{n-1}(1/p)^{n-1}+\cdots+a_0=0$ with $a_i\in\mathbb Z$. Multiplying by $p^n$ gives $1+a_{n-1}p+\cdots+a_0p^n=0$, impossible because the left side is congruent to $1$ modulo $p$. [given, algebra]

2.1 Thus localisation makes $1/p$ integral only after $p$ has become invertible in the base ring. [L1, step 1.1, step 1.2] ∎
