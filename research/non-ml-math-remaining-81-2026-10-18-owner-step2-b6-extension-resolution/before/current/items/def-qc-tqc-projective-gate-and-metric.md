---
id: def-qc-tqc-projective-gate-and-metric
kind: definition
title: Projective braid gate and operator metric
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-qc-tqc-braid-action-from-fusion-data
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-triangle-inequality-for-inner-product-norm
  - lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous
  - lem-unit-circle-is-a-compact-metrizable-topological-group
  - thm-extreme-value-metric
dependency_level: 7
axiom_use: None; compactness of the unit circle and the finite-dimensional operator norm use no choice.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §II.B, PDF pp. 7–11
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: §§9.5 and 9.17, PDF pp. 13–16 and 61–62
---

## Definition

Let $V\ne0$ be a finite-dimensional complex inner-product space and let
$U(V)$ be its unitary group. Two unitaries are **projectively equivalent**
when $A=zB$ for some $z\in\mathbb C$ with $|z|=1$; write $[A]\in PU(V)$ for
the equivalence class. Define
$$d_P([A],[B]):=\min_{|z|=1}\|A-zB\|_{\mathrm{op}}.$$
This is the distance after quotienting by one common scalar phase. The phase
is minimized over the unit circle; it is not chosen independently in
different charge blocks.

## Facts & Assumptions

**Given:** The finite-dimensional unitary group $U(V)$ and the operator norm.

[F1] The operator norm is the maximum of $\|Tx\|$ over unit vectors.
[[def-operator-norm-on-a-finite-dimensional-inner-product-space]]

[F2] The inner-product norm satisfies the triangle inequality and
$\|\lambda x\|=|\lambda|\|x\|$.
[[cor-triangle-inequality-for-inner-product-norm]]
[[lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous]]

[F3] The multiplicative unit circle is compact and metrizable.
[[lem-unit-circle-is-a-compact-metrizable-topological-group]]

[F4] A continuous real-valued function on a nonempty compact metric space
attains its minimum. [[thm-extreme-value-metric]]

## Proof

1.1 The operator norm satisfies the triangle inequality: for every unit vector $x$, $\|(S+T)x\|\le\|Sx\|+\|Tx\|\le\|S\|_{\mathrm{op}}+\|T\|_{\mathrm{op}}$, so taking the maximum gives $\|S+T\|_{\mathrm{op}}\le\|S\|_{\mathrm{op}}+ \|T\|_{\mathrm{op}}$. Scalar homogeneity follows from [F2] and the same maximum definition. Thus $|\|S\|_{\mathrm{op}}-\|T\|_{\mathrm{op}}|\le\|S-T\|_{\mathrm{op}}$ by applying the triangle inequality twice. [F1, F2, algebra]

1.2 The formula is independent of representatives. If $A'=uA$ and $B'=vB$ with $|u|=|v|=1$, then $\inf_{|z|=1}\|A'-zB'\|=\inf_{|z|=1}\|A-(u^{-1}zv)B\|$; as $z$ runs over the unit circle, so does $u^{-1}zv$. [given, F1, algebra]

2.1 The map $z\mapsto\|A-zB\|_{\mathrm{op}}$ is continuous: step 1.1 bounds $|\|A-zB\|-\|A-wB\||\le\|(z-w)B\|=|z-w|\|B\|$. By [F3] and [F4] it attains its minimum on the unit circle, so the infimum in the definition is a minimum. Nonnegativity and symmetry follow from the norm axioms and the substitution $z\mapsto\bar z$. [F1, F2, F3, F4, step 1.1, algebra]

3.1 For classes $[A],[B],[C]$, choose minimizing phases $z,w$ for the pairs $(A,B)$ and $(B,C)$ by [F3]–[F4]. The triangle inequality gives $\|A-zwC\|\le\|A-zB\|+\|zB-zwC\|=d_P([A],[B])+d_P([B],[C])$, so taking the minimum over phases for $(A,C)$ proves the triangle inequality. If $d_P([A],[B])=0$, a minimizing phase satisfies $A=zB$, so $[A]=[B]$. Conversely equal classes have distance zero. Therefore $d_P$ is a metric on $PU(V)$. [F1, F2, F3, F4, step 1.1, step 1.2, step 2.1, algebra] ∎
