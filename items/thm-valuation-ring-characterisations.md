---
id: thm-valuation-ring-characterisations
kind: theorem
title: "Characterizations of valuation rings"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-valuation-ring, lem-valuation-ring-is-local]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "M. Mustata, Commutative Algebra, Propositions 8.3-8.6"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise (26.3) and Exercise (26.15)(1)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $V$ be a domain with fraction field $K$. The following are equivalent.

1. $V$ is a valuation ring of $K$.
2. For every $a,b\in V$, one of $a$ and $b$ divides the other in $V$.
3. The ideals of $V$ are linearly ordered by inclusion.

When these conditions hold, every finitely generated ideal of $V$ is principal.

## Facts & Assumptions

**Given:** A domain $V$ with fraction field $K$.

[F1] A valuation ring is a subring $V\subseteq K$ such that for every nonzero $x\in K$ at least one of $x$ and $x^{-1}$ lies in $V$ ([[def-valuation-ring]]).

[L1] A valuation ring is local, and its nonunits form the unique maximal ideal ([[lem-valuation-ring-is-local]]).

[A1] Every nonzero element of the fraction field $K$ can be written as $a/b$ with $a,b\in V$ and $b\ne0$.

## Proof

**Proof technique:** direct.

1.1 Assume condition 1. Let $a,b\in V$. If $a=0$ or $b=0$, divisibility is trivial. If $a,b\ne0$, apply [F1] to $a/b\in K^\times$: if $a/b\in V$, then $a=(a/b)b$, so $b$ divides $a$; if $b/a\in V$, then $a$ divides $b$. Thus condition 2 holds. [F1, given]

1.2 Assume condition 2. Let $I$ and $J$ be ideals of $V$. If $I\not\subseteq J$, choose $a\in I\setminus J$. For any $b\in J$, condition 2 says either $a$ divides $b$ or $b$ divides $a$; the second option would put $a$ in $J$, so $b=ca$ for some $c\in V$ and hence $b\in I$. Therefore $J\subseteq I$. By symmetry, any two ideals are comparable, so condition 3 holds. [given, algebra]

1.3 Assume condition 3. Let $x\in K^\times$, and choose $a,b\in V$ with $b\ne0$ and $x=a/b$ by [A1]. The principal ideals $(a)$ and $(b)$ are comparable. If $(a)\subseteq(b)$, then $a=bc$ for some $c\in V$, so $x=c\in V$. If $(b)\subseteq(a)$, then $b=ad$ for some $d\in V$, so $x^{-1}=d\in V$. Thus condition 1 holds. [A1, given, algebra]

2.1 Under condition 3, a finitely generated ideal $I=(a_1,\ldots,a_n)$ is principal: among the finitely many comparable principal ideals $(a_i)$, choose a largest one, say $(a_j)$. Then every $a_i$ lies in $(a_j)$, so $I=(a_j)$. The zero ideal is $(0)$, and step 1.3 now identifies $V$ as a valuation ring, so [L1] records the local consequence for nonunits. [L1, step 1.3, algebra] ∎
