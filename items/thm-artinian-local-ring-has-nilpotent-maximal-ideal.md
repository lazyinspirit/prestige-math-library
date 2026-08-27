---
id: thm-artinian-local-ring-has-nilpotent-maximal-ideal
kind: theorem
title: "An Artinian local ring has nilpotent maximal ideal, and its finite modules have finite length"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-local-ring, thm-artinian-ring-primes-are-maximal, cor-nilradical-as-intersection-of-primes, thm-nilradical-of-artinian-ring-is-nilpotent, thm-artinian-ring-is-noetherian, thm-noetherian-ring-ideal-characterisations, cor-length-is-additive-in-short-exact-sequences]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Corollary 16.2"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.52: Length"
      url: "https://stacks.math.columbia.edu/tag/00IU"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $(R,\mathfrak m)$ be a commutative Artinian local ring. Then $\mathfrak m$ is nilpotent. Moreover, if $M$ is a finitely generated $R$-module, then $M$ has finite length.

## Facts & Assumptions

**Given:** A commutative Artinian local ring $(R,\mathfrak m)$, a finitely generated $R$-module $M$, and the Axiom of Choice.

## Proof

**Proof technique:** direct.

1.1 Because $R$ is local, $\mathfrak m$ is its only maximal ideal. By [[thm-artinian-ring-primes-are-maximal]], every prime ideal of $R$ is maximal, so $\mathfrak m$ is also the only prime ideal. Therefore [[cor-nilradical-as-intersection-of-primes]] gives $\operatorname{Nil}(R)=\mathfrak m$. Now [[thm-nilradical-of-artinian-ring-is-nilpotent]] yields an integer $n\ge1$ with $\mathfrak m^n=0$. [given, algebra]

2.1 By [[thm-artinian-ring-is-noetherian]], the ring $R$ is Noetherian. Hence [[thm-noetherian-ring-ideal-characterisations]] makes each ideal $\mathfrak m^i$ finitely generated; fix generators $a_{i1},\ldots,a_{is_i}$ of $\mathfrak m^i$. Also choose generators $x_1,\ldots,x_t$ of $M$. Then for every $0\le i<n$, the quotient $\mathfrak m^iM/\mathfrak m^{i+1}M$ is spanned over the residue field $k=R/\mathfrak m$ by the finitely many classes of the elements $a_{iq}x_j$. Indeed every element of $\mathfrak m^iM$ is a finite sum $\sum_q a_{iq}m_q$, and each $m_q$ is a finite $R$-linear combination of the $x_j$; modulo $\mathfrak m^{i+1}M$, only the residue classes of the coefficients in $k$ matter because multiplication by an element of $\mathfrak m$ lands in $\mathfrak m^{i+1}M$. Deleting redundant spanning vectors yields a basis $y_1,\ldots,y_d$ of $\mathfrak m^iM/\mathfrak m^{i+1}M$, and the partial spans $0<ky_1<ky_1+ky_2<\cdots<ky_1+\cdots+ky_d$ form a composition series. So every quotient $\mathfrak m^iM/\mathfrak m^{i+1}M$ has finite length. [step 1.1, given, choose, algebra]

3.1 The filtration $M\supseteq\mathfrak mM\supseteq\cdots\supseteq\mathfrak m^nM=0$ is finite by step 1.1. Applying [[cor-length-is-additive-in-short-exact-sequences]] successively to $0\to\mathfrak m^{i+1}M\to\mathfrak m^iM\to\mathfrak m^iM/\mathfrak m^{i+1}M\to0$ shows that $M$ has finite length. Taking $M=R$ recovers the ring case from the first sentence of the theorem. [step 1.1, step 2.1, given, algebra] ∎
