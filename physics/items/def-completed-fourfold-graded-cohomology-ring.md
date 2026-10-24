---
id: def-completed-fourfold-graded-cohomology-ring
kind: definition
title: "The completed cohomology ring in degrees divisible by four"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 0
deps:
  - def-singular-cohomology-ring
justified_by:
  - lem-completed-fourfold-graded-cohomology-ring-laws-and-naturality
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Chapter 19, original pp. 219-222: characteristic classes and multiplicative sequences as elements of a completed rational cohomology ring"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $B$ be a space (a topological space; no finite-dimensionality or CW
assumption is made). The **completed fourfold-graded cohomology group** of $B$
with rational coefficients is the product
$$\widehat H^{4*}(B;\mathbb Q):=\prod_{j\ge0}H^{4j}(B;\mathbb Q),$$
the set of all sequences $a=(a_0,a_1,a_2,\dots)$ with $a_j\in H^{4j}(B;\mathbb Q)$
([[def-singular-cohomology-ring]]). Addition is componentwise,
$$(a+b)_j:=a_j+b_j,$$
and multiplication is the convolution of the graded cup product,
$$(a\cdot b)_n:=\sum_{i+j=n}a_i\smile b_j.$$

The product is well defined: for fixed $n$ the sum has exactly $n+1$ terms, so
no infinite sum occurs in any component, and each $a_i\smile b_j$ lies in
$H^{4n}(B;\mathbb Q)$ because cup product adds degrees. The **unit** is
$$\mathbf 1:=(1,0,0,\dots),$$
with $1\in H^0(B;\mathbb Q)$ the unit of [[def-singular-cohomology-ring]].
For a continuous map $f:B\to C$ the **pullback** is
$$f^*:\widehat H^{4*}(C;\mathbb Q)\to\widehat H^{4*}(B;\mathbb Q),\qquad f^*(a)_j:=f^*(a_j),$$
the componentwise pullback of the ordinary cohomology rings.

The ring laws and the naturality assertions are *not* part of this definition:
they are proved in
[[lem-completed-fourfold-graded-cohomology-ring-laws-and-naturality]], the
lemma named in `justified_by`. The construction is a product of abelian groups
and a prescribed formula; nothing is selected, so no choice principle is used.
