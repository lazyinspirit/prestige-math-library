---
id: cex-positive-nurbs-weights-do-not-imply-admissible-patch
kind: counterexample
title: Positive NURBS weights do not imply an admissible patch
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-nurbs-patch-map-and-rational-spline-space
  - lem-positive-nurbs-basis-and-quotient-derivative
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Stefan Takacs, Numerical Analysis of Isogeometric Methods, complete JKU lecture notes, 2018/19"
      url: "https://numa.jku.at/media/filer_public/3c/2a/3c2a6222-fd4d-4405-b866-e3757698fe8c/lecture_notes_iga.pdf"
    - title: "Annalisa Buffa, Gregor Gantner, Carlotta Giannelli, Dirk Praetorius, Rafael Vázquez, Mathematical Foundations of Adaptive Isogeometric Analysis, Archives of Computational Methods in Engineering 29 (2022)"
      url: "https://d-nb.info/1278950273/34"
---

## Statement

On $[0,1]^2$, take degree-one tensor Bernstein functions in each coordinate, all four weights equal to one, and control net
$$P_{00}=(0,0),\quad P_{10}=(1,0),\quad P_{01}=(0,1),\quad P_{11}=(1,-1).$$
The resulting positive-weight bilinear NURBS map is $F(\xi,\eta)=(\xi,\eta(1-2\xi))$. Its Jacobian vanishes at $\xi=1/2$, changes sign across that line, and the map is not injective; hence positive weights alone do not give an admissible patch.


## Facts & Assumptions

**Given:** The degree-one tensor Bernstein basis, the four control points and unit weights in the Statement.

[F1] [[def-nurbs-patch-map-and-rational-spline-space]] defines $F$ as the rational weighted sum of its control points and requires global injectivity and positive cell Jacobian for admissibility.

[F2] [[lem-positive-nurbs-basis-and-quotient-derivative]]: unit weights yield denominator one and nonnegative basis functions summing to one.

## Proof

1.1 The degree-one Bernstein functions are $1-\xi,\xi$ and $1-\eta,\eta$. With all weights one, [F2] gives $W=1$, so the tensor rational basis is the ordinary bilinear basis. Its first component is $\xi$ and its second component is $(1-\xi)\eta+\xi(-\eta)=\eta(1-2\xi)$. [F1, F2, given, algebra]

2.1 Differentiation gives $DF=\begin{pmatrix}1&0\\-2\eta&1-2\xi\end{pmatrix},\qquad \det DF=1-2\xi.$ Thus the Jacobian is zero on $\xi=1/2$, positive for $\xi<1/2$, and negative for $\xi>1/2$. Moreover, $F(1/2,0)=F(1/2,1)=(1/2,0)$ with distinct parameter points. These violate two separate admissibility requirements in [F1] despite all weights being positive. [F1, step 1.1, algebra] ∎
