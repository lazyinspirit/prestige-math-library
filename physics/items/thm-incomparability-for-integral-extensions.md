---
id: thm-incomparability-for-integral-extensions
kind: theorem
title: "Comparable primes with the same contraction are equal under an integral map"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integral-ring-extension, thm-integrality-commutes-with-localisation, thm-localisation-at-a-prime-is-local, thm-prime-spectrum-of-a-localisation-bijection, cor-contraction-of-maximal-ideals-integral-extension]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (14.3)(2)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Corollary 7.4"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $f:A\to B$ be an integral ring map, and let $\mathfrak q_1\subseteq\mathfrak q_2$ be prime ideals of $B$ with $f^{-1}(\mathfrak q_1)=f^{-1}(\mathfrak q_2)=\mathfrak p$. Then $\mathfrak q_1=\mathfrak q_2$.

## Facts & Assumptions

**Given:** An integral ring map $f:A\to B$ and prime ideals $\mathfrak q_1\subseteq\mathfrak q_2$ of $B$ with common contraction $\mathfrak p\subseteq A$.

[L1] Integrality is preserved by localisation ([[thm-integrality-commutes-with-localisation]]).

[L2] The localisation $A_{\mathfrak p}$ is local with maximal ideal $\mathfrak pA_{\mathfrak p}$ ([[thm-localisation-at-a-prime-is-local]]).

[L3] Prime ideals of a localisation correspond exactly to primes disjoint from the denominator set, with strict inclusions preserved ([[thm-prime-spectrum-of-a-localisation-bijection]]).

[L4] In an integral extension, a prime upstairs is maximal if and only if its contraction is maximal ([[cor-contraction-of-maximal-ideals-integral-extension]]).

## Proof

**Proof technique:** direct.

1.1 Let $S:=A\setminus\mathfrak p$. By [L3], the primes $\mathfrak q_1$ and $\mathfrak q_2$ correspond to primes $S^{-1}\mathfrak q_1\subseteq S^{-1}\mathfrak q_2$ of $S^{-1}B$, and by [L1] the localized map $A_{\mathfrak p}\to S^{-1}B$ remains integral. [L1, L3, given]

2.1 By [L2], the contraction of each $S^{-1}\mathfrak q_i$ to $A_{\mathfrak p}$ is the maximal ideal $\mathfrak pA_{\mathfrak p}$. Therefore [L4] makes both $S^{-1}\mathfrak q_1$ and $S^{-1}\mathfrak q_2$ maximal ideals of $S^{-1}B$. Since one is contained in the other, they are equal. [L2, L4, step 1.1]

3.1 Applying the inverse bijection of [L3] to the equality of step 2.1 gives $\mathfrak q_1=\mathfrak q_2$. [L3, step 2.1] ∎
