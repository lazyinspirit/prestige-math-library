---
id: lem-asymptoticity-is-an-equivalence-relation-on-gromov-sequences
kind: lemma
title: "Asymptoticity of Gromov sequences is an equivalence relation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-gromov-boundary-by-asymptotic-sequences, thm-slim-triangle-gromov-product-and-four-point-hyperbolicity-are-equivalent-up-to-constants]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Brian H. Bowditch, A course on geometric group theory, Section 5.3"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
---

## Statement

In a proper geodesic hyperbolic space, asymptoticity of Gromov sequences is an
equivalence relation.

## Facts & Assumptions

**Given:** A proper geodesic hyperbolic space $X$ with basepoint $o$.

[L1] Hyperbolicity is equivalent to a Gromov-product inequality up to
constants
([[thm-slim-triangle-gromov-product-and-four-point-hyperbolicity-are-equivalent-up-to-constants]]).

[A1] Reflexivity and symmetry are immediate from the definition of asymptoticity.

## Proof

**Proof technique:** direct.

1.1 By [A1], every Gromov sequence is asymptotic to itself, and if $(x_n)$ is asymptotic to $(y_n)$ then $(y_n)$ is asymptotic to $(x_n)$. [A1]

2.1 Suppose $(x_n)$ is asymptotic to $(y_n)$ and $(y_n)$ is asymptotic to $(z_n)$. By [L1], there is $\delta \ge 0$ with $(x_m,z_n)_o \ge \min\{(x_m,y_k)_o,(y_k,z_n)_o\}-\delta$ for all $m,n,k$. Letting the indices go to infinity shows $(x_m,z_n)_o \to \infty$, so $(x_n)$ is asymptotic to $(z_n)$. [L1, step 1.1, algebra] ∎ 