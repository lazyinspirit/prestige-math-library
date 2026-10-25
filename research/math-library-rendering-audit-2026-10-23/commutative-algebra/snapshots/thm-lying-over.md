---
id: thm-lying-over
kind: theorem
title: "Lying over for integral ring maps"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integral-ring-extension, thm-integrality-commutes-with-localisation, cor-contraction-of-maximal-ideals-integral-extension, thm-field-of-fractions-is-a-field-and-the-domain-embeds, thm-quotient-is-domain-iff-ideal-prime, thm-prime-spectrum-of-a-quotient-bijection, thm-prime-spectrum-of-a-localisation-bijection, thm-proper-ideal-contained-in-maximal-ideal, prop-localisation-zero-equality-and-kernel-criteria]
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
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (14.3)(3)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 7.5"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $f:A\to B$ be an integral ring map, and let $\mathfrak p\in\operatorname{Spec}(A)$ with $\ker f\subseteq\mathfrak p$. Then there exists a prime ideal $\mathfrak q\in\operatorname{Spec}(B)$ such that $f^{-1}(\mathfrak q)=\mathfrak p$.

## Facts & Assumptions

**Given:** An integral ring map $f:A\to B$ and a prime ideal $\mathfrak p\subseteq A$ containing $\ker f$.

[L1] Integral ring maps are exactly those whose target elements satisfy monic equations over the source ring ([[def-integral-ring-extension]]).

[L2] Integrality is preserved by localisation ([[thm-integrality-commutes-with-localisation]]).

[L3] In an integral extension, a prime upstairs is maximal exactly when its contraction is maximal ([[cor-contraction-of-maximal-ideals-integral-extension]]).

[L5] The quotient by a prime ideal is a domain ([[thm-quotient-is-domain-iff-ideal-prime]]).

[L6] Prime ideals of a quotient correspond exactly to primes containing the kernel ideal ([[thm-prime-spectrum-of-a-quotient-bijection]]).

[L7] Prime ideals of a localisation correspond exactly to primes disjoint from the denominator set ([[thm-prime-spectrum-of-a-localisation-bijection]]).

[L8] Assuming the Axiom of Choice, every proper ideal of a nonzero commutative ring is contained in a maximal ideal ([[thm-proper-ideal-contained-in-maximal-ideal]]).

[L9] A localisation is the zero ring exactly when $0$ belongs to the denominator set ([[prop-localisation-zero-equality-and-kernel-criteria]]).

## Proof

**Proof technique:** direct.

1.1 Let $\overline A:=A/\ker f$, let $\pi:A\to\overline A$ be the quotient map, and let $\overline{\mathfrak p}:=\mathfrak p/\ker f$. By [L6], prime ideals of $\overline A$ correspond to prime ideals of $A$ containing $\ker f$, so $\overline{\mathfrak p}$ is prime. The map $f$ factors through an injective integral map $\overline f:\overline A\hookrightarrow B$, so it is enough to find a prime of $B$ contracting to $\overline{\mathfrak p}$ and then pull it back through [L6]. [L1, L6, given]

2.1 Replace $A$ by $\overline A$ and write again $\mathfrak p$ for the chosen prime. Set $S:=A\setminus\mathfrak p$. By [L5], $A/\mathfrak p$ is a domain, so $S$ contains no zero element of $A$; since $A\hookrightarrow B$ is injective, $0\notin S$ inside $B$ as well. Hence [L9] shows that $S^{-1}B$ is nonzero. By [L2], the map $S^{-1}A\to S^{-1}B$ is integral. [L2, L5, L9, step 1.1]

3.1 By [L7], prime ideals of $A_{\mathfrak p}=S^{-1}A$ correspond to prime ideals of $A$ contained in $\mathfrak p$. Therefore every prime of $A_{\mathfrak p}$ lies inside $\mathfrak pA_{\mathfrak p}$, so $\mathfrak pA_{\mathfrak p}$ is the unique maximal ideal of $A_{\mathfrak p}$. By [L8], the nonzero ring $S^{-1}B$ has a maximal ideal $\mathfrak n$. Then [L3] implies that $\mathfrak n\cap A_{\mathfrak p}=\mathfrak pA_{\mathfrak p}$. [L3, L7, L8, step 2.1]

4.1 By [L7], the prime ideal $\mathfrak n$ of $S^{-1}B$ is $S^{-1}\mathfrak q$ for a unique prime ideal $\mathfrak q$ of $B$ disjoint from $S$, and its contraction to $A$ is the contraction of $\mathfrak pA_{\mathfrak p}$, namely $\mathfrak p$. Therefore $\mathfrak q$ lies over $\mathfrak p$. Pulling back through step 1.1 gives a prime of $B$ lying over the original prime of $A$. [L7, step 1.1, step 3.1] ∎
