---
id: ex-prime-spectrum-set-of-a-product-ring
kind: example
title: "Every prime ideal of a product ring comes from one factor"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-product-ring, def-prime-and-maximal-ideals]
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

## Example

Let $R$ and $S$ be commutative rings. Then the prime ideals of $R\times S$ are exactly the ideals of the form $\mathfrak p\times S$ with $\mathfrak p\in\operatorname{Spec}(R)$ and the ideals of the form $R\times\mathfrak q$ with $\mathfrak q\in\operatorname{Spec}(S)$.

## Facts & Assumptions

**Given:** Commutative rings $R$ and $S$.

[L1] A prime ideal is proper and absorbs factors of a product ([[def-prime-and-maximal-ideals]]).

## Verification

**Proof technique:** direct.

1.1 Let $P\in\operatorname{Spec}(R\times S)$. The idempotents $e_1=(1,0)$ and $e_2=(0,1)$ satisfy $e_1e_2=0\in P$, so [L1] gives $e_1\in P$ or $e_2\in P$. They cannot both lie in $P$ because then $1=e_1+e_2\in P$. If $e_1\in P$, then every $(r,0)=e_1(r,s)$ lies in $P$, so $P=R\times\mathfrak q$ where $\mathfrak q=\{s\in S:(0,s)\in P\}$. The same argument with $e_2$ gives the alternative form $\mathfrak p\times S$. In either case the factor ideal is prime because products in the factor ring are products in $R\times S$. [L1, given, algebra]

1.2 Conversely, if $\mathfrak p\in\operatorname{Spec}(R)$, then $\mathfrak p\times S$ is a prime ideal of $R\times S$: if $(r_1,s_1)(r_2,s_2)\in\mathfrak p\times S$, then $r_1r_2\in\mathfrak p$, so [L1] gives $r_1\in\mathfrak p$ or $r_2\in\mathfrak p$, which means $(r_1,s_1)$ or $(r_2,s_2)$ lies in $\mathfrak p\times S$. The same proof works for $R\times\mathfrak q$. [L1, given, algebra]

2.1 Therefore every prime ideal of the product ring comes from exactly one factor. [step 1.1, step 1.2] ∎
