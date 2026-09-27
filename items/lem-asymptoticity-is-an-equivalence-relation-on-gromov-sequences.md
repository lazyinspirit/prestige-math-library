---
id: lem-asymptoticity-is-an-equivalence-relation-on-gromov-sequences
kind: lemma
title: "Asymptoticity of Gromov sequences is an equivalence relation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-gromov-boundary-by-asymptotic-sequences, lem-slim-triangles-imply-the-gromov-product-inequality]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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

[L1] The slim-triangle definition of hyperbolicity gives a Gromov-product inequality $(u,w)_o\ge\min\{(u,v)_o,(v,w)_o\}-3\delta$ for a fixed $\delta\ge0$ ([[lem-slim-triangles-imply-the-gromov-product-inequality]]).

[A1] Reflexivity and symmetry are immediate from the definition of asymptoticity.

## Proof

**Proof technique:** direct.

1.1 By [A1], every Gromov sequence is asymptotic to itself, and if $(x_n)$ is asymptotic to $(y_n)$ then $(y_n)$ is asymptotic to $(x_n)$. [A1]

2.1 Suppose $(x_n)$ is asymptotic to $(y_n)$ and $(y_n)$ is asymptotic to $(z_n)$. By [L1], there is $\delta \ge 0$ with $(x_m,z_n)_o \ge \min\{(x_m,y_k)_o,(y_k,z_n)_o\}-3\delta$ for all $m,n,k$. Given $R>0$, choose $N$ so both mixed products exceed $R+3\delta$ whenever both of their indices are at least $N$. For every $m,n\ge N$, taking $k=N$ in the inequality gives $(x_m,z_n)_o>R$. Hence $(x_m,z_n)_o\to\infty$, so $(x_n)$ is asymptotic to $(z_n)$. [L1, step 1.1, algebra] ∎
