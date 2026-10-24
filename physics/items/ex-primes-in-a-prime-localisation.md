---
id: ex-primes-in-a-prime-localisation
kind: example
title: "Primes inside a localization at a prime"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: literature-derived
generation:
  role: example
deps: [cor-primes-of-a-prime-local-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14 The spectrum of a ring"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.17: The spectrum of a ring"
      url: "https://stacks.math.columbia.edu/tag/00DY"
pipeline_run: null
---

## Example

Let $A=k[x,y]$ and let $\mathfrak m=(x,y)$. The prime ideals $(0)$, $(x)$, $(y)$, and $(x+y)$ all lie inside $\mathfrak m$, so they give distinct prime ideals of the localization $A_{\mathfrak m}$.

## Facts & Assumptions

**Given:** A field $k$, the polynomial ring $A=k[x,y]$, and the prime ideal $\mathfrak m=(x,y)$.

[L1] Prime ideals of $A_{\mathfrak m}$ correspond exactly to prime ideals of $A$ contained in $\mathfrak m$ ([[cor-primes-of-a-prime-local-ring]]).

## Verification

**Proof technique:** direct.

1.1 The ideals $(0)$, $(x)$, $(y)$, and $(x+y)$ are prime in $A$, and each is contained in $\mathfrak m$ because their generators lie in $(x,y)$. [given, algebra]

2.1 By [L1], each of these four primes determines a distinct prime ideal of $A_{\mathfrak m}$, and every prime of $A_{\mathfrak m}$ comes from some prime of $A$ contained in $\mathfrak m$. [L1, step 1.1]

3.1 This records a concrete finite family of primes inside the prime localization. [step 2.1] ∎
