---
id: cex-not-every-monoidal-category-is-rigid
kind: counterexample
title: "Not every monoidal category is rigid"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rigid-object-and-rigid-monoidal-category, def-dimension]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Example 2.10.12"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Keith Conrad, Infinite-Dimensional Dual Spaces"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/dualspaceinfinite.pdf"
---

## Statement refuted

Every monoidal category is rigid.

## Facts & Assumptions

**Given:** A field $k$, the monoidal category $\mathbf{Vect}_k$, and the
infinite-dimensional vector space $V=k[x]$.

[L1] A vector space with no finite basis is infinite-dimensional
([[def-dimension]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $k$ be a field and let $\mathbf{Vect}_k$ be the category of all $k$-vector spaces with the usual tensor product and unit object $k$. This is a monoidal category, and $V:=k[x]$ is infinite-dimensional by [L1]. [given, L1]

1.2 Assume for contradiction that $V$ had a left dual $(V^\vee,\operatorname{ev},\operatorname{coev})$. Because $\operatorname{coev}(1)\in V\otimes V^\vee$ is a single tensor in an algebraic tensor product, it is a finite sum $\sum_{i=1}^m v_i\otimes f_i$ with $f_i\in V^\vee$. Applying the first zig-zag identity to any $v\in V$ gives $$v=\sum_{i=1}^m \operatorname{ev}(f_i\otimes v)v_i,$$ so every vector of $V$ lies in the span of the finite set $\{v_1,\dots,v_m\}$. [assume-contra, algebra]

2.1 Step 1.2 makes $V$ finite-dimensional, contradicting that $k[x]$ has no finite basis. Therefore $V$ has no left dual, hence is not rigid, so $\mathbf{Vect}_k$ is a monoidal category that is not rigid. [discharge-contradiction: infinite-dimensional vector spaces cannot be finitely spanned] ∎
