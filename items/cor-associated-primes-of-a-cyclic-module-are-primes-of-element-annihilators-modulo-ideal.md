---
id: cor-associated-primes-of-a-cyclic-module-are-primes-of-element-annihilators-modulo-ideal
kind: corollary
title: "Associated primes of a cyclic quotient are colon primes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-associated-prime-of-a-module, def-quotient-module, def-annihilator-and-torsion-of-a-module]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §19"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.63: Associated primes"
      url: "https://stacks.math.columbia.edu/tag/00L9"
---

## Statement

Let $R$ be a commutative ring and let $I \trianglelefteq R$ be an ideal. Then
$$ \operatorname{Ass}_R(R/I)=\{\mathfrak p \in \operatorname{Spec}(R) : \mathfrak p=(I:r)\text{ for some }r \notin I\}. $$

## Facts & Assumptions

**Given:** A commutative ring $R$ and an ideal $I \trianglelefteq R$.

[L1] A prime ideal belongs to $\operatorname{Ass}_R(M)$ exactly when it is the annihilator of some element of $M$ ([[def-associated-prime-of-a-module]]).

[L2] The quotient module $R/I$ consists of the cosets $r+I$ ([[def-quotient-module]]).

[L3] The annihilator of an element $x$ is the set of scalars that kill $x$ ([[def-annihilator-and-torsion-of-a-module]]).

## Proof

**Proof technique:** direct.

1.1 For any $r \in R$, the annihilator of $r+I$ in $R/I$ is $$ \operatorname{Ann}_R(r+I)=\{a \in R : a(r+I)=0+I\}=\{a \in R : ar \in I\}=(I:r). $$ [L2, L3, given]

2.1 If $\mathfrak p \in \operatorname{Ass}_R(R/I)$, then [L1] gives a nonzero class $r+I$ with $\mathfrak p=\operatorname{Ann}_R(r+I)$. Since $r+I \neq 0$, one has $r \notin I$, and step 1.1 yields $\mathfrak p=(I:r)$. [L1, step 1.1]

2.2 Conversely, if $\mathfrak p=(I:r)$ for some $r \notin I$ and if $\mathfrak p$ is prime, then step 1.1 gives $\mathfrak p=\operatorname{Ann}_R(r+I)$ with $r+I \neq 0$, so $\mathfrak p \in \operatorname{Ass}_R(R/I)$ by [L1]. [L1, step 1.1]

3.1 Steps 2.1 and 2.2 prove the stated description of $\operatorname{Ass}_R(R/I)$. [step 2.1, step 2.2] ∎
