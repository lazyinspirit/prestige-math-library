---
id: thm-normality-is-local-for-domains
kind: theorem
title: "A domain is integrally closed if and only if its prime localisations are, equivalently if and only if its maximal localisations are"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integral-closure-and-integrally-closed-domain, thm-integrality-commutes-with-localisation, thm-integrality-and-finite-module-equivalences, thm-local-criterion-for-zero-modules-and-maps, thm-proper-ideal-contained-in-maximal-ideal, prop-iterated-localisation, def-localisation-at-a-prime-ideal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Corollary 6.15 and Proposition 6.16"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Proposition (14.8)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $A$ be a domain. Then the following are equivalent:

1. $A$ is integrally closed.
2. For every prime ideal $\mathfrak p$ of $A$, the localisation $A_{\mathfrak p}$ is integrally closed.
3. For every maximal ideal $\mathfrak m$ of $A$, the localisation $A_{\mathfrak m}$ is integrally closed.

## Facts & Assumptions

**Given:** A domain $A$.

[L1] A domain is integrally closed exactly when every element of its field of fractions integral over it already lies in the domain ([[def-integral-closure-and-integrally-closed-domain]]).

[L2] Integrality localises, and conversely an integral equation after localisation can be cleared by multiplying the element by one denominator ([[thm-integrality-commutes-with-localisation]]).

[L3] For a nonzero commutative ring $R$ and $x$ in an $R$-algebra, the element $x$ is integral over $R$ if and only if $R[x]$ is a finitely generated $R$-module ([[thm-integrality-and-finite-module-equivalences]]).

[L4] Assuming the Axiom of Choice, a module or map is zero, injective, or surjective exactly when all maximal localisations have that property ([[thm-local-criterion-for-zero-modules-and-maps]]).

[L7] Localisation at a prime ideal means inverting the complement of that prime ([[def-localisation-at-a-prime-ideal]]).

## Proof

**Proof technique:** direct.

1.1 Assume $A$ is integrally closed, and let $\mathfrak p$ be a prime ideal. If $x\in\operatorname{Frac}(A)$ is integral over $A_{\mathfrak p}$, then [L2] gives some $s\notin\mathfrak p$ with $sx$ integral over $A$. By [L1], $sx\in A$, so $x=(sx)/s\in A_{\mathfrak p}$. Hence every prime localisation is integrally closed. [L1, L2, L7, given]

1.2 Assume every maximal localisation $A_{\mathfrak m}$ is integrally closed, and let $x\in\operatorname{Frac}(A)$ be integral over $A$. Because $A$ is a domain, it is nonzero, so [L3] applies and makes the $A$-algebra $M:=A[x]$ a finite $A$-module. For each maximal ideal $\mathfrak m$, the same element $x$ is integral over $A_{\mathfrak m}$ by [L2], so the hypothesis gives $x\in A_{\mathfrak m}$ and therefore $M_{\mathfrak m}=A_{\mathfrak m}$. Thus the localisation of the inclusion $i:A\hookrightarrow M$ at every maximal ideal is surjective. [L2, L3, given]

2.1 Every maximal ideal is prime, so step 1.1 implies that if all prime localisations are integrally closed, then all maximal localisations are integrally closed. [step 1.1, given, algebra]

2.2 By [L4], the map $i:A\hookrightarrow M$ is surjective. Hence $M=A$, so $x\in A$. By [L1], the domain $A$ is integrally closed. [L1, L4, step 1.2]

3.1 Step 1.1 proves $(1)\Rightarrow(2)$, step 2.1 gives $(2)\Rightarrow(3)$, and step 2.2 proves $(3)\Rightarrow(1)$. Therefore the three conditions are equivalent. [step 1.1, step 2.1, step 2.2] ∎
