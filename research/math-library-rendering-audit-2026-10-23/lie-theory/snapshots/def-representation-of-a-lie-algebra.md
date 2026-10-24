---
id: def-representation-of-a-lie-algebra
kind: definition
title: Representations of Lie algebras
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-lie-algebra-over-a-field, def-homomorphism-of-possibly-infinite-dimensional-lie-algebras, def-vector-space-of-linear-maps]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, §11.1, printed pp. 61–62"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §4.1, printed pp. 49–50"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Definition

For a vector space $V$ over $k$, write

$$\mathfrak{gl}(V)=\operatorname{End}_k(V)$$

with commutator bracket $[A,B]=AB-BA$. Expansion of triple composites shows
that this is a Lie algebra in every characteristic.

A **representation** of a Lie algebra $\mathfrak g$ on $V$ is a Lie-algebra
homomorphism

$$\rho:\mathfrak g\longrightarrow\mathfrak{gl}(V).$$

Writing $xv$ for $\rho(x)(v)$, this is equivalently a $k$-bilinear action
$\mathfrak g\times V\to V$ satisfying

$$[x,y]v=x(yv)-y(xv)$$

for all $x,y\in\mathfrak g$ and $v\in V$. No finite-dimensional hypothesis is
imposed on either $\mathfrak g$ or $V$. The zero vector space and the zero
action are allowed.
