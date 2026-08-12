---
id: cor-integral-logarithm-agrees-with-natural-logarithm
kind: corollary
title: "The integral logarithm $L$ is the published natural logarithm"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-integral-exponential-agrees-with-exponential,
       def-integral-exponential, def-natural-logarithm]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "OpenStax, Calculus Volume 1, Section 6.7"
      url: "https://openstax.org/books/calculus-volume-1/pages/6-7-integrals-exponential-functions-and-logarithms"
pipeline_run: null
---

## Statement

For every $x>0$,

$$L(x)=\log x.$$

## Facts & Assumptions

**Given:** $x>0$.

[F1] $E=L^{-1}$ ([[def-integral-exponential]]).

[L1] $E=\exp$ on $\mathbb R$
([[thm-integral-exponential-agrees-with-exponential]]).

[F2] The natural logarithm is the inverse of the bijection
$\exp:\mathbb R\to(0,\infty)$ ([[def-natural-logarithm]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [L1], $L$ is an inverse of $\exp$. [F1, L1]

2.1 Inverse functions are unique, so [F2] and step 1.1 give $L(x)=\log x$ for every $x>0$. [step 1.1, F2] ∎