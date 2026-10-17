---
id: lem-barycentric-coordinates-are-unique
kind: lemma
title: "Barycentric coordinates are unique"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-geometric-simplex-spanned-by-affinely-independent-vertices]
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
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "Vidit Nanda, Computational Algebraic Topology, Lecture 01: Complexes"
      url: "https://people.maths.ox.ac.uk/nanda/cat/Lecture%2001%20Complexes.pdf"
---

## Statement

Let $v_0,\dots,v_n$ be affinely independent points in $\mathbb R^m$. If
$$x=\sum_{i=0}^n \lambda_i v_i=\sum_{i=0}^n \mu_i v_i,\qquad \sum_{i=0}^n \lambda_i=\sum_{i=0}^n \mu_i=1,$$
then $\lambda_i=\mu_i$ for every $i$.

## Proof

**Given:** Two barycentric-coordinate expressions for the same point of the simplex spanned by $v_0,\dots,v_n$.

1.1 Subtract the two expressions for $x$ to obtain $\sum_{i=0}^n (\lambda_i-\mu_i)v_i=0$, and subtract the two sum conditions to obtain $\sum_{i=0}^n (\lambda_i-\mu_i)=0$. [given]

2.1 The previous step is an affine dependence relation among $v_0,\dots,v_n$ whose coefficients sum to $0$. Since the vertices are affinely independent, every coefficient vanishes, so $\lambda_i-\mu_i=0$ for all $i$. [step 1.1] ∎
