---
id: ex-real-projective-space-is-orientable-exactly-in-odd-dimension
kind: example
title: "Positive-dimensional real projective space is orientable exactly in odd dimension"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-orientable-manifold, prop-pointwise-orientation-sign-of-a-local-diffeomorphism, def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space, def-induced-boundary-orientation]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
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

**Given:** An integer $n\ge1$, the standard sphere orientation on $S^n=\partial B^{n+1}$, the antipodal map $a:S^n\to S^n$, $a(x)=-x$, and the quotient covering $\pi:S^n\to\mathbb {RP}^n=S^n/\{1,a\}$.

[L1] The orientation on the boundary of the standard oriented ball is outward-normal-first ([[def-induced-boundary-orientation]]).

[L2] Between manifolds equipped with chosen orientations, a local diffeomorphism has a well-defined pointwise orientation sign, constant on a nonempty connected source ([[prop-pointwise-orientation-sign-of-a-local-diffeomorphism]]).

[L3] A zero-dimensional real vector space has two determinant-line orientation rays ([[def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space]]).

## Verification

**Proof technique:** direct.

1.1 Fix $x\in S^n$ and a positive tangent basis $(v_1,\ldots,v_n)$ at $x$. By [L1], $(x,v_1,\ldots,v_n)$ is positive in $\mathbb R^{n+1}$. Since $da_x(v_i)=-v_i$, the corresponding ambient tuple at $-x$ is $(-x,-v_1,\ldots,-v_n)$, whose sign relative to the original tuple is $(-1)^{n+1}$. Thus [L2] gives the antipodal map the constant orientation sign $(-1)^{n+1}$. [given, L1, L2, algebra]

2.1 If $a$ preserves orientation, define the orientation ray at $[x]$ by pushing the ray at $x$ forward with $d\pi_x$. The other lift is $a(x)$, and $\pi\circ a=\pi$ makes the resulting ray independent of that choice. Conversely, an orientation on $\mathbb {RP}^n$ pulls back through the local diffeomorphism $\pi$ to an orientation of $S^n$ that $a$ must preserve. By step 1.1 this occurs exactly when $(-1)^{n+1}=1$, namely when $n$ is odd. Finally, $\mathbb {RP}^0$ is a point and is orientable by [L3]. [given, L2, L3, step 1.1] ∎
