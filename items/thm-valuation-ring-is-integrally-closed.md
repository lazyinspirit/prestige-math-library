---
id: thm-valuation-ring-is-integrally-closed
kind: theorem
title: "Valuation rings are integrally closed"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integral-closure-and-integrally-closed-domain, def-valuation-ring, lem-valuation-ring-is-local]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise (26.5)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "M. Mustata, Commutative Algebra, Section 8.1"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
pipeline_run: null
---

## Statement

Every valuation ring is an integrally closed domain.

## Facts & Assumptions

**Given:** A valuation ring $V$ contained in a field $K$.

[L1] A domain is integrally closed when every element of its field of fractions
integral over it already lies in the domain
([[def-integral-closure-and-integrally-closed-domain]]).

[F1] A valuation ring is a subring $V\subseteq K$ such that for each
$x\in K^\times$, at least one of $x$ and $x^{-1}$ lies in $V$
([[def-valuation-ring]]).

[L2] A valuation ring is local, and its nonunits form the unique maximal ideal
([[lem-valuation-ring-is-local]]).

[A1] Any subring of a field is a domain, and its field of fractions embeds in
that field.

## Proof

**Proof technique:** direct.

1.1 Let $x$ be an element of the field of fractions of $V$ that is integral over $V$. By [A1], regard $x$ as an element of $K$. If $x\notin V$, then [F1] gives $x^{-1}\in V$. This element is not a unit of $V$, because a unit inverse would put $x$ back in $V$. Hence [L2] places $x^{-1}$ in the maximal ideal $\mathfrak m$ of $V$. [F1, L2, A1, given]

2.1 Choose a monic equation $x^n+a_{n-1}x^{n-1}+\cdots+a_0=0$ with $a_i\in V$. Multiplying by $x^{-n}$ gives $1+a_{n-1}x^{-1}+\cdots+a_0x^{-n}=0$. Since $x^{-1}\in\mathfrak m$ and $\mathfrak m$ is an ideal, every term except $1$ lies in $\mathfrak m$. Therefore $1\in\mathfrak m$, contradicting maximality. [step 1.1, algebra]

3.1 So $x\in V$. By [L1], this proves that $V$ is integrally closed; by [A1], it is also a domain. [L1, step 2.1, A1] ∎
