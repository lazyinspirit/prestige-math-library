---
id: ex-determinant-as-the-pairing-of-top-exterior-powers
kind: example
title: "Determinant as the pairing of top exterior powers"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-exterior-power-duality-pairing,
       prop-the-top-exterior-power-is-one-dimensional]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Example

On $\mathbb R^n$ with standard basis $e_1,\ldots,e_n$ and dual basis
$e^1,\ldots,e^n$, the pairing

$$
\langle e^1\wedge\cdots\wedge e^n,\ v_1\wedge\cdots\wedge v_n\rangle
$$

is exactly $\det[v_1\ \cdots\ v_n]$.

## Facts & Assumptions

**Given:** Vectors $v_1,\ldots,v_n\in\mathbb R^n$.

[L1] The exterior-power pairing on decomposable elements is the determinant of the evaluation matrix ([[prop-exterior-power-duality-pairing]]).

[L2] The top exterior power is one-dimensional ([[prop-the-top-exterior-power-is-one-dimensional]]).

## Verification
**Proof technique:** direct.

1.1 The matrix with entries $e^i(v_j)$ is exactly the coordinate matrix $[v_1\ \cdots\ v_n]$ of the ordered $n$-tuple $(v_1,\ldots,v_n)$. [given]

2.1 Applying [L1] to $\alpha_i=e^i$ gives $$ \langle e^1\wedge\cdots\wedge e^n,\ v_1\wedge\cdots\wedge v_n\rangle =\det(e^i(v_j)) =\det[v_1\ \cdots\ v_n]. $$ [L1, step 1.1, algebra]

3.1 By [L2], this scalar determines the decomposable top wedge relative to the standard volume form. [L2, step 2.1]

4.1 Thus the determinant is the top-degree pairing against $e^1\wedge\cdots\wedge e^n$. [step 2.1, step 3.1] ∎