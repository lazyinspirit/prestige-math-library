---
id: def-principal-part-and-principal-symbol-of-a-scalar-pde
kind: definition
title: "Principal part and principal symbol of a scalar PDE"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-partial-differential-operator-order-and-solution,
       def-linear-semilinear-quasilinear-and-fully-nonlinear-pde]
justified_by: [lem-principal-symbol-under-a-c-one-coordinate-change]
aliases: []
landmark: false
verification:
  audited: 2026-09-05
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Victor Ivrii, Partial Differential Equations"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
---

## Definition

Let

$$L u=\sum_{|\alpha|\le m} a_\alpha(x)D^\alpha u$$

be a linear scalar differential operator of order $m$ on an open
$\Omega\subseteq\mathbb R^n$.

Its **principal part** is the homogeneous order-$m$ operator

$$L_m u:=\sum_{|\alpha|=m} a_\alpha(x)D^\alpha u.$$

Its **principal symbol** is the homogeneous polynomial in the covector
$\xi\in(\mathbb R^n)^*$ given by

$$p_m(x,\xi):=\sum_{|\alpha|=m} a_\alpha(x)\xi^\alpha.$$

If the equation is quasilinear, first freeze the lower jet
$(u,Du,\ldots,D^{m-1}u)$ at the point under discussion; the resulting linear
operator in the highest derivatives has a principal part and principal symbol
defined by the same formula.
