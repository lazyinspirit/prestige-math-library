---
id: lem-clifford-polarized-relations
kind: lemma
title: Polarized relations in a Clifford algebra
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: clifford-universal-algebras-and-pbw
dependency_level: 1
deps: [def-clifford-algebra-of-a-quadratic-space]
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §1.2"
      url: https://arxiv.org/pdf/0805.0311
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Part I, §1"
      url: https://www.math.ens.psl.eu/~benoist/refs/ABS.pdf
---

## Statement

Let $k,V,B,Q$ be as in [[def-clifford-algebra-of-a-quadratic-space]], and let $\bar v=i_Q(v)$. Then

$$\bar v\bar w+\bar w\bar v=2B(v,w)1$$

for all $v,w\in V$.

## Facts & Assumptions

**Given:** A field $k$ of characteristic not $2$, a finite-dimensional $k$-vector space $V$, a symmetric bilinear form $B$, $Q(v)=B(v,v)$, and $v,w\in V$.

[F1] The quotient map sends each $v\in V$ to an element satisfying $i_Q(v)^2=Q(v)1$ ([[def-clifford-algebra-of-a-quadratic-space]]).

## Proof

**Proof technique:** direct.

1.1 Applying [F1] to $v+w$, $v$, and $w$, then subtracting the last two defining equalities from the first, gives $\bar v\bar w+\bar w\bar v=(Q(v+w)-Q(v)-Q(w))1$. [given, F1, algebra]

2.1 Bilinearity and symmetry give $Q(v+w)-Q(v)-Q(w)=B(v,w)+B(w,v)=2B(v,w)$, proving the relation. [given, step 1.1, algebra] ∎
