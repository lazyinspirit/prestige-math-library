---
id: def-direct-product-and-direct-sum-of-lie-algebras
kind: definition
title: Direct products and direct sums of Lie algebras
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-lie-algebra-over-a-field, def-direct-sum-of-a-family-of-modules, def-vector-space]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, componentwise direct-sum convention in §3"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
---

## Definition

For a family $(\mathfrak g_i)_{i\in I}$ of Lie algebras over $k$, the Cartesian
product $\prod_i\mathfrak g_i$ has componentwise vector operations and bracket

$$[(x_i),(y_i)]=([x_i,y_i])_{i\in I}.$$

Bilinearity, alternation, and Jacobi hold componentwise, so this is the
**direct product Lie algebra**. Its **algebraic direct sum**

$$\bigoplus_{i\in I}\mathfrak g_i$$

is the finite-support subspace of the product
([[def-direct-sum-of-a-family-of-modules]]) with the restricted bracket. It is
closed because
$\operatorname{supp}([(x_i),(y_i)])\subseteq
\operatorname{supp}(x)\cap\operatorname{supp}(y)$, a finite set when both
inputs have finite support.

For finite $I$, product and direct sum are the same Lie algebra. For
$I=\varnothing$, both are the zero Lie algebra. For two algebras the notation is
$\mathfrak g\oplus\mathfrak h$ and the bracket is
$[(x,u),(y,v)]=([x,y],[u,v])$.

