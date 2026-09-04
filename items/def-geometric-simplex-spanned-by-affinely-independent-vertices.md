---
id: def-geometric-simplex-spanned-by-affinely-independent-vertices
kind: definition
title: "The geometric simplex spanned by affinely independent vertices"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-04
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

## Definition

Let $v_0,\dots,v_n \in \mathbb R^m$ be affinely independent. The
**geometric simplex** spanned by these vertices is
$$[v_0,\dots,v_n]:=\left\{\sum_{i=0}^n \lambda_i v_i : \lambda_i \geq 0,\ \sum_{i=0}^n \lambda_i=1\right\}.$$

The numbers $\lambda_0,\dots,\lambda_n$ are the **barycentric coordinates** of
the point. When $n=0$, the simplex is the single point $v_0$.
