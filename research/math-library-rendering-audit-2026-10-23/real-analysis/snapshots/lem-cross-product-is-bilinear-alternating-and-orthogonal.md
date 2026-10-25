---
id: lem-cross-product-is-bilinear-alternating-and-orthogonal
kind: lemma
title: 'The cross product is bilinear, alternating, and orthogonal to both factors'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cross-product-in-r3, def-euclidean-inner-product, def-determinant-of-a-square-matrix]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'M. E. Taylor, Introduction to Analysis in Several Variables, Section 3.2'
      url: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf'
    - title: 'University of Toronto MAT237 notes, Section 5.3'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html'
pipeline_run: null
---

## Statement

For all $u,v,w\in\mathbb R^3$, the cross product is bilinear and alternating, $\langle u\times v,w\rangle=\det[u\ v\ w]$, and $u\times v$ is orthogonal to both $u$ and $v$.

## Facts & Assumptions

**Given:** Vectors $u,v,w\in\mathbb R^3$ and a scalar $c\in\mathbb R$.

[L1] The cross product is given by its three coordinate differences of products ([[def-cross-product-in-r3]]), and the Euclidean inner product is the coordinate dot product ([[def-euclidean-inner-product]]).

[L2] The determinant of a real $3\times3$ matrix is its signed permutation sum ([[def-determinant-of-a-square-matrix]]).

## Proof

**Proof technique:** direct.

1.1 Substitution in [L1] gives $(u+u')\times v=u\times v+u'\times v$, $(cu)\times v=c(u\times v)$, and the corresponding two identities in the second argument. [L1, algebra]

1.2 The same coordinate formula gives $u\times u=0$ and $v\times u=-(u\times v)$, so the product is alternating. [L1, algebra]

1.3 Expanding the dot product in [L1] yields $\langle u\times v,w\rangle=(u_yv_z-u_zv_y)w_x+(u_zv_x-u_xv_z)w_y+(u_xv_y-u_yv_x)w_z$, which is the determinant $\det[u\ v\ w]$ by [L2]. [L1, L2, algebra]

2.1 Taking $w=u$ or $w=v$ makes the determinant have two equal columns and hence zero; therefore $u\times v$ is orthogonal to both factors. The calculation includes zero and parallel vectors. [step 1.3, L2, algebra] ∎
