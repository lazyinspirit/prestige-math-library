---
id: prop-pointwise-orientation-sign-of-a-local-diffeomorphism
kind: proposition
title: "Pointwise orientation sign of a local diffeomorphism"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-oriented-smooth-manifold-and-oriented-chart, def-diffeomorphism-and-local-diffeomorphism-of-manifolds, cor-the-differential-of-a-diffeomorphism-is-an-isomorphism]
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

## Statement

A local diffeomorphism between oriented manifolds has at each source point a well-defined sign according as its determinant map preserves or reverses the selected rays. In local positive determinant-line frames this is the sign of the representing scalar; whenever oriented source and target charts exist, it is the Jacobian sign in those charts. The sign is constant on a nonempty connected source.

## Facts & Assumptions

**Given:** Oriented smooth manifolds $M$ and $N$ of the same dimension and a local diffeomorphism $F:M\to N$.

[L1] A local diffeomorphism restricts near every source point to a diffeomorphism onto an open submanifold ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

[L2] The differential of a diffeomorphism is a linear isomorphism at every point ([[cor-the-differential-of-a-diffeomorphism-is-an-isomorphism]]).

[L3] An orientation is a smooth choice of determinant ray; a chart is called oriented when its coordinate frame lies in that ray ([[def-oriented-smooth-manifold-and-oriented-chart]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $dF_p$ is an isomorphism. Its determinant map therefore sends the selected source ray to exactly one of the two target rays. Choose local nonzero determinant sections $\sigma_M$ and $\sigma_N$ in the selected rays. There is a smooth nowhere-zero scalar $\lambda$ such that $\det(dF)(\sigma_M)=\lambda\sigma_N$; its sign is precisely whether the selected rays are preserved or reversed. [given, L1, L2, L3, construct, algebra]

2.1 Since $\lambda$ is continuous and never zero, its sign is locally constant and therefore constant when $M$ is nonempty and connected. If oriented source and target charts happen to be available, their coordinate determinants may be used for $\sigma_M$ and $\sigma_N$, and then $\lambda$ is the Jacobian determinant. The determinant-line formulation remains valid at one-dimensional boundary points and in dimension zero, where such chart frames need not encode every selected ray. [given, L3, step 1.1, algebra] ∎
