---
id: ex-real-projective-space-is-orientable-exactly-in-odd-dimension
kind: example
title: "Positive-dimensional real projective space is orientable exactly in odd dimension"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-orientable-manifold, prop-pointwise-orientation-sign-of-a-local-diffeomorphism, def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Example

For $n\ge1$, $\mathbb {RP}^n$ is orientable exactly when $n$ is odd; $\mathbb {RP}^0$ is a point and is orientable.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Verification

**Proof technique:** direct.

1.1 The antipodal map on $S^n$ has degree $(-1)^{n+1}$. [given]

2.1 Let $\pi:S^n\to\mathbb {RP}^n$ be the quotient map and $a(x)=-x$ its nontrivial deck transformation. If $a$ preserves an orientation of $S^n$, define the ray at $[x]$ by pushing the ray at $x$ forward with $d\pi_x$. Choosing the other lift $a(x)$ gives the same ray because $\pi\circ a=\pi$. Conversely, an orientation on $\mathbb {RP}^n$ pulls back through the local diffeomorphism $\pi$ to an orientation of $S^n$, and $\pi\circ a=\pi$ forces $a$ to preserve it. Thus the quotient is orientable exactly when the antipodal degree is positive, namely when $n$ is odd. The separate zero-dimensional point has a determinant-line orientation. [step 1.1] ∎
