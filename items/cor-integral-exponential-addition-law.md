---
id: cor-integral-exponential-addition-law
kind: corollary
title: "The inverse $E$ satisfies $E(a+b)=E(a)E(b)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integral-exponential, thm-integral-logarithm-product-law]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "OpenStax, Calculus Volume 1, Section 6.7"
      url: "https://openstax.org/books/calculus-volume-1/pages/6-7-integrals-exponential-functions-and-logarithms"
pipeline_run: null
---

## Statement

For all $a,b\in\mathbb R$,

$$E(a+b)=E(a)E(b).$$

## Facts & Assumptions

**Given:** $a,b\in\mathbb R$.

[F1] $E=L^{-1}$, so $L(E(y))=y$, and $L$ is injective
([[def-integral-exponential]]).

[L1] $L(xy)=L(x)+L(y)$ for positive $x,y$
([[thm-integral-logarithm-product-law]]).

## Proof

**Proof technique:** direct.

1.1 Since $E(a),E(b)>0$, the product law gives $$ L(E(a)E(b))=L(E(a))+L(E(b))=a+b. $$ [F1, L1]

2.1 Also $L(E(a+b))=a+b$. Injectivity of $L$ therefore gives $E(a+b)=E(a)E(b)$. [F1, step 1.1] ∎
