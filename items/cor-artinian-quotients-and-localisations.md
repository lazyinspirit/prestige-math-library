---
id: cor-artinian-quotients-and-localisations
kind: corollary
title: "Quotients and localizations of an Artinian ring are Artinian"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-correspondence-theorem-ideals, thm-structure-theorem-for-artinian-rings, thm-artinian-local-ring-has-nilpotent-maximal-ideal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Section 16"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.53: Artinian rings"
      url: "https://stacks.math.columbia.edu/tag/00J4"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a commutative Artinian ring.

1. For every ideal $I\subseteq R$, the quotient ring $R/I$ is Artinian.
2. For every multiplicative subset $S\subseteq R$, the localization $S^{-1}R$ is Artinian.

## Facts & Assumptions

**Given:** A commutative Artinian ring $R$ and the Axiom of Choice.

## Proof

**Proof technique:** direct.

1.1 Let $I\subseteq R$ be an ideal. By [[thm-correspondence-theorem-ideals]], descending chains of ideals in $R/I$ correspond exactly to descending chains of ideals of $R$ containing $I$. Since those stabilize in the Artinian ring $R$, the quotient $R/I$ is Artinian. [given, algebra]

2.1 If $R=0$, then every localization is again $0$ and there is nothing to prove. Otherwise [[thm-structure-theorem-for-artinian-rings]] gives maximal ideals $\mathfrak m_1,\ldots,\mathfrak m_r$ such that $R\cong\prod_{i=1}^rR_{\mathfrak m_i}$. Localization of a finite product acts factorwise, so it is enough to localize an Artinian local ring $(A,\mathfrak m)$. If $S\cap\mathfrak m\ne\varnothing$, choose $s\in S\cap\mathfrak m$. By [[thm-artinian-local-ring-has-nilpotent-maximal-ideal]], $s^n=0$ for some $n$, so $(s/1)^n=0$ in $S^{-1}A$ while $s/1$ is a unit; therefore $1=0$ and $S^{-1}A$ is the zero ring. If $S\cap\mathfrak m=\varnothing$, then every element of $S$ is a unit of $A$: otherwise $(s)$ would be a proper ideal and therefore lie in the unique maximal ideal $\mathfrak m$, contradicting $s\notin\mathfrak m$. So the localization map $A\to S^{-1}A$ is an isomorphism. Hence a localization of $R$ is exactly the product of those local factors whose maximal ideals avoid $S$, with the other factors collapsing to zero. [step 1.1, given, choose, cases]

3.1 A finite product of Artinian rings is Artinian, because a descending chain of ideals in the product is coordinatewise a descending chain in each factor and therefore stabilizes once every coordinate chain does. Step 1.1 handles quotients, and step 2.1 handles localizations. [step 1.1, step 2.1, given, algebra] ∎
