---
id: thm-unique-maximal-integral-curve-through-each-point
kind: theorem
title: "Through each point there is a unique maximal integral curve"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integral-curve-of-a-vector-field, thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

For every point $p\in M$ and every smooth vector field $X$ on $M$, there is a
unique maximal integral curve $\gamma_p:I_p\to M$ of $X$ with $\gamma_p(0)=p$.

## Facts & Assumptions

**Given:** A smooth vector field $X$ on $M$ and a point $p\in M$.

[L1] Through each point there is a unique integral curve on some open interval about $0$, depending smoothly on the initial value ([[thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], there exists at least one integral curve of $X$ through $p$ on some open interval about $0$. If two such curves are defined on overlapping intervals, [L1] forces them to agree on the overlap because they solve the same initial-value problem at any common time. [L1, given]

2.1 Let $I_p$ be the union of all intervals carrying an integral curve through $p$, and define $\gamma_p(t)$ by any one of those curves. Step 1.1 shows this is well defined on $I_p$. Because all the intervals contain $0$ and pairwise overlap along the common trajectory, their union is again an interval. [step 1.1, construct]

3.1 The map $\gamma_p:I_p\to M$ is an integral curve, since near each $t\in I_p$ it coincides with one of the local curves from which it was assembled. If it extended to a larger interval, that larger curve would belong to the family defining $I_p$, contradicting the definition of the union. [step 2.1]

4.1 Therefore $\gamma_p$ is the unique maximal integral curve of $X$ through $p$. [step 1.1, step 3.1] ∎
