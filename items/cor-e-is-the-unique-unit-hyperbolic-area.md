---
id: cor-e-is-the-unique-unit-hyperbolic-area
kind: corollary
title: "The number $e$ is the unique $x>0$ satisfying $\\int_1^x\\frac{dt}{t}=1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-integral-exponential-agrees-with-exponential,
       cor-integral-logarithm-is-strictly-increasing,
       def-real-exponential-function-and-e, def-integral-exponential]
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

The number $e$ is the unique $x>0$ such that

$$\int_1^x\frac{dt}{t}=1.$$

## Facts & Assumptions

**Given:** The published number $e$ and the integral function $L$.

[F1] $e:=\exp(1)$ ([[def-real-exponential-function-and-e]]).

[L1] $E=\exp$ ([[thm-integral-exponential-agrees-with-exponential]]).

[L2] $L$ is strictly increasing on $(0,\infty)$
([[cor-integral-logarithm-is-strictly-increasing]]).

[F2] $E=L^{-1}$, so $L(E(y))=y$
([[def-integral-exponential]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [L1], $e=E(1)$. The inverse identity [F2] gives $L(e)=L(E(1))=1$. [F1, L1, F2, algebra]

2.1 Strict increase [L2] makes $L$ injective. Hence if $x>0$ also satisfies $L(x)=1=L(e)$, then $x=e$. [L2, step 1.1]

3.1 The defining integral for $L$ converts steps 1.1 and 2.1 into the stated existence and uniqueness claim. [step 1.1, step 2.1] ∎
