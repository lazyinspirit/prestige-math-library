---
id: lem-primes-of-a-quotient-are-primes-over-the-kernel
kind: lemma
title: "Primes of a quotient lie over the kernel"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-correspondence-theorem-ideals, def-prime-spectrum-and-vanishing-sets, def-prime-and-maximal-ideals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 10.17: The spectrum of a ring"
      url: "https://stacks.math.columbia.edu/tag/00DY"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §13 and §17"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $I\trianglelefteq R$ be an ideal, and let $\pi:R\to R/I$ be the quotient map. If $\mathfrak q\in\operatorname{Spec}(R/I)$, then $\pi^{-1}(\mathfrak q)$ is a prime ideal of $R$ containing $I$. If $\mathfrak p\in\operatorname{Spec}(R)$ contains $I$, then $\mathfrak p/I$ is a prime ideal of $R/I$. Both assignments preserve strict inclusion.

## Facts & Assumptions

**Given:** A commutative ring $R$, an ideal $I\trianglelefteq R$, and the quotient map $\pi:R\to R/I$.

[L1] Ideals of $R/I$ correspond to ideals of $R$ containing $I$ ([[thm-correspondence-theorem-ideals]]).

[L2] A prime ideal is a proper ideal that absorbs factors of a product ([[def-prime-and-maximal-ideals]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathfrak q\in\operatorname{Spec}(R/I)$. Because $0+I\in\mathfrak q$, the contraction $\pi^{-1}(\mathfrak q)$ contains $I$. If $ab\in\pi^{-1}(\mathfrak q)$, then $(a+I)(b+I)=ab+I\in\mathfrak q$, so [L2] gives $a\in\pi^{-1}(\mathfrak q)$ or $b\in\pi^{-1}(\mathfrak q)$. Also $1\notin\pi^{-1}(\mathfrak q)$ because $\mathfrak q$ is proper. Hence $\pi^{-1}(\mathfrak q)$ is prime. [L2, given, algebra]

1.2 Let $\mathfrak p\in\operatorname{Spec}(R)$ with $I\subseteq\mathfrak p$. By [L1], $\mathfrak p/I$ is an ideal of $R/I$. If $(a+I)(b+I)=ab+I\in\mathfrak p/I$, then $ab\in\mathfrak p$, so [L2] gives $a+I\in\mathfrak p/I$ or $b+I\in\mathfrak p/I$. Properness is inherited from $1\notin\mathfrak p$. Inclusion preservation is immediate from [L1]. [L1, L2, given, algebra]

2.1 Therefore primes of the quotient and primes of $R$ above $I$ correspond by extension and contraction, with strict inclusions preserved. [step 1.1, step 1.2] ∎
