---
id: ex-distinguished-subset-and-localisation-primes
kind: example
title: "The distinguished subset D(x) matches the primes of the localization at x"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-principal-distinguished-subset-of-spectrum, cor-primes-of-a-principal-localisation]
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
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §13 and §17"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Example

In the polynomial ring $k[x,y]$, the distinguished subset $D(x)$ is exactly the set of prime ideals that correspond to prime ideals of the principal localization $k[x,y]_x$.

## Facts & Assumptions

**Given:** A field $k$ and the polynomial ring $k[x,y]$.

[L1] $D(x)$ is the set of prime ideals that do not contain $x$ ([[def-principal-distinguished-subset-of-spectrum]]).

[L2] Prime ideals of $k[x,y]_x$ correspond exactly to prime ideals of $k[x,y]$ that do not contain $x$ ([[cor-primes-of-a-principal-localisation]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], a prime ideal of $k[x,y]$ lies in $D(x)$ exactly when it avoids $x$. [L1]

2.1 By [L2], the same condition characterizes the prime ideals that survive in the localization $k[x,y]_x$. Therefore the contraction map from $\operatorname{Spec}(k[x,y]_x)$ identifies its image with $D(x)$. [L2, step 1.1]

3.1 So $D(x)$ is the prime-set avatar of localizing at $x$. [step 2.1] ∎
