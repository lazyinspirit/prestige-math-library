---
id: cor-principal-localisation-spectrum-is-distinguished-open
kind: corollary
title: "The spectrum of a principal localisation is the distinguished open D(f)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-localisation-spectrum-map-homeomorphism-onto-image, def-principal-distinguished-subset-of-spectrum]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Lemma 10.17.6"
      url: "https://stacks.math.columbia.edu/tag/00DY"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $R$ be a commutative ring and let $f\in R$. The localisation map $R\to R_f$ induces a homeomorphism from $\operatorname{Spec}(R_f)$ onto the distinguished open subset $$ D(f)=\{\mathfrak p\in\operatorname{Spec}(R):f\notin\mathfrak p\}. $$

## Facts & Assumptions

**Given:** A commutative ring $R$ and an element $f\in R$.

[L1] For a localization at a multiplicative set $S$, the spectrum identifies homeomorphically with the primes of $R$ disjoint from $S$ ([[lem-localisation-spectrum-map-homeomorphism-onto-image]]).

[L2] $D(f)$ is the set of prime ideals of $R$ that do not contain $f$ ([[def-principal-distinguished-subset-of-spectrum]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] with $S=\{1,f,f^2,\ldots\}$. Its image consists of the prime ideals $\mathfrak p$ such that $\mathfrak p\cap S=\varnothing$. [L1]

1.2 For a prime ideal $\mathfrak p$, the condition $\mathfrak p\cap\{1,f,f^2,\ldots\}=\varnothing$ is equivalent to $f\notin\mathfrak p$, because $f\in\mathfrak p$ implies $f^n\in\mathfrak p$ for every $n\ge 1$, while $f^n\in\mathfrak p$ implies $f\in\mathfrak p$ by primality. By [L2], this image is exactly $D(f)$. [L2, given, algebra]

2.1 Therefore $\operatorname{Spec}(R_f)$ is homeomorphic to the distinguished open subset $D(f)$. [step 1.1, step 1.2] ∎
