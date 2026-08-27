---
id: thm-artinian-ring-has-finitely-many-maximal-ideals
kind: theorem
title: "An Artinian ring has only finitely many maximal ideals"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-artinian-ring, cor-maximal-ideals-are-prime, thm-equivalent-characterizations-of-artinian-modules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 16.3"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.53: Artinian rings"
      url: "https://stacks.math.columbia.edu/tag/00J4"
pipeline_run: null
---

## Statement

Let $R$ be a commutative Artinian ring. Then $R$ has only finitely many maximal ideals.

This theorem uses dependent choice only through the minimum condition for Artinian modules.

## Facts & Assumptions

**Given:** A commutative Artinian ring $R$. The dependent-choice use named in the Statement is the minimum-condition step invoked below.

[L1] Every nonempty family of submodules of an Artinian module has a minimal member. Applied to the regular module of a commutative Artinian ring, every nonempty family of ideals has a minimal member. ([[thm-equivalent-characterizations-of-artinian-modules]]).

## Proof

**Proof technique:** contradiction.

1.1 If $R$ has no maximal ideals then the conclusion is immediate. Otherwise let $\mathcal F$ be the set of all finite nonempty intersections of maximal ideals of $R$. This set is nonempty, so [L1] gives a member minimal under inclusion; write it as $$ I=\mathfrak m_1\cap\cdots\cap\mathfrak m_n $$ for maximal ideals $\mathfrak m_1,\ldots,\mathfrak m_n$. [L1, given, cases, choose]

2.1 Let $\mathfrak m$ be any maximal ideal of $R$. Then $I\cap\mathfrak m$ is again a finite nonempty intersection of maximal ideals, so $I\cap\mathfrak m\in\mathcal F$ and $I\cap\mathfrak m\subseteq I$. By the minimality from step 1.1, one has $I=I\cap\mathfrak m$, hence $I\subseteq\mathfrak m$. If $\mathfrak m$ were distinct from every $\mathfrak m_i$, then for each $1\le i\le n$ we could choose $x_i\in\mathfrak m_i\setminus\mathfrak m$ and put $x=x_1\cdots x_n$. Now $x\in I\subseteq\mathfrak m$, but every maximal ideal is prime by [[cor-maximal-ideals-are-prime]], so some factor $x_i$ would lie in $\mathfrak m$, contradicting the choice of the $x_i$. Therefore every maximal ideal of $R$ is one of $\mathfrak m_1,\ldots,\mathfrak m_n$. [step 1.1, given, choose, discharge-contradiction]

3.1 Therefore an Artinian ring has only finitely many maximal ideals. [step 1.1, step 2.1] ∎
