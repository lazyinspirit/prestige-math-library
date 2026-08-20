---
id: thm-nonnegative-improper-multiple-integral-by-exhaustion
kind: theorem
title: "Every Jordan exhaustion computes a nonnegative improper multiple integral"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-improper-multiple-integral-and-absolute-convergence, thm-multidimensional-integral-properties]
justified_by: []
aliases: []
landmark: true
short: "Exhaustions compute nonnegative integrals"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "V. Guillemin, MIT 18.101 Analysis II Lecture Notes, Theorem 3.24"
      url: "https://ocw.mit.edu/courses/18-101-analysis-ii-fall-2005/babd982be745679b6d691f78b1c18f53_lectures.pdf"
pipeline_run: null
---

## Statement

Every compact Jordan exhaustion computes the nonnegative improper integral, independently of the exhaustion.

Precisely, if $f:D\to[0,\infty)$ is locally Riemann integrable and $(K_j)$ is a compact Jordan exhaustion, then

$$\int_D f=\sup_{j\in\mathbb N}\int_{K_j}f.$$

## Facts & Assumptions

**Given:** An open $D\subseteq\mathbb R^n$, a locally Riemann-integrable $f\ge0$, and a compact Jordan exhaustion $(K_j)$.

[L1] For nonnegative $f$, its improper integral is the extended-real supremum of its compact Jordan integrals ([[def-improper-multiple-integral-and-absolute-convergence]]).

[L2] Proper Riemann integrals are monotone: $f\le g$ implies $\int f\le\int g$ ([[thm-multidimensional-integral-properties]]).

## Proof

**Proof technique:** direct.

1.1 Since $K_j\subseteq K_{j+1}$, [L2] makes the numbers $\int_{K_j}f$ increasing, and every one is bounded above by the defining supremum $\int_Df$ of [L1]. [L1, L2]

1.2 Every compact Jordan set $K\subseteq D$ lies in some $K_j$ by compact cofinality of an exhaustion, so [L2] gives $\int_Kf\le\int_{K_j}f\le\sup_i\int_{K_i}f$. [L1, L2]

2.1 Taking the supremum over all compact Jordan $K$ in step 1.2 gives $\int_Df\le\sup_i\int_{K_i}f$, while step 1.1 gives the reverse inequality; equality follows, including when the value is $+\infty$. [step 1.1, step 1.2, L1] ∎
