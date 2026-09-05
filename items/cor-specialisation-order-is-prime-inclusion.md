---
id: cor-specialisation-order-is-prime-inclusion
kind: corollary
title: "Specialisation in a prime spectrum is reverse inclusion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-specialisation-and-generic-point, lem-closure-of-a-point-is-its-vanishing-set]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.17: The spectrum of a ring"
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

Assume the Axiom of Choice.

Let $R$ be a commutative ring and let $\mathfrak p,\mathfrak q\in\operatorname{Spec}(R)$. Then $\mathfrak q$ is a specialisation of $\mathfrak p$ if and only if $$ \mathfrak p\subseteq\mathfrak q. $$

## Facts & Assumptions

**Given:** A commutative ring $R$, prime ideals $\mathfrak p,\mathfrak q\subseteq R$, and the Axiom of Choice.

[L1] A point $y$ is a specialisation of $x$ exactly when $y\in\overline{\{x\}}$ ([[def-specialisation-and-generic-point]]).

[L2] The closure of $\{\mathfrak p\}$ is $V(\mathfrak p)$ ([[lem-closure-of-a-point-is-its-vanishing-set]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $\mathfrak q$ is a specialisation of $\mathfrak p$ exactly when $\mathfrak q\in V(\mathfrak p)$. [L1, L2]

2.1 By the definition of $V(\mathfrak p)$, the condition $\mathfrak q\in V(\mathfrak p)$ is exactly $\mathfrak p\subseteq\mathfrak q$. [step 1.1, algebra]

3.1 Therefore specialisation in $\operatorname{Spec}(R)$ is reverse inclusion of prime ideals. [step 1.1, step 2.1] ∎
