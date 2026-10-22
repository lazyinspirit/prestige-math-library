---
id: ex-ip-discrete-grid-l-curve-parameter-choice
kind: example
title: A finite-grid L-curve selects an interior parameter
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - alg-discrete-l-curve-parameter-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: "https://people.compute.dtu.dk/pcha/DIP/chap5.pdf"
      locator: "Slides 10–14, PDF pp. 9–13: log-log L-curve, curvature, and maximum-curvature corner."
---

## Example

Take $A=I_2\in\mathbb R^{2\times2}$, $b=e_1$, and the strictly increasing grid
$1/9<1<9$. Apply the discrete maximum-curvature L-curve selector to this input.
The Tikhonov solution at $\lambda$ is $x_\lambda=(1+\lambda)^{-1}e_1$, so all
three residual and solution norms are positive and the selector returns the
middle grid value $\lambda=1$. This finite-grid data-driven choice is made
without a noise-level input, and it carries no universal optimality claim. The
matrix is finite-dimensional, so the discontinuity hypothesis of the
Bakushinskii veto is absent.

## Example references

[[alg-discrete-l-curve-parameter-choice|Discrete maximum-curvature L-curve selector]]

[Hansen, Introduction to Inverse Problems, Chapter 5, slides 10–14](https://people.compute.dtu.dk/pcha/DIP/chap5.pdf)

## Facts & Assumptions

**Given:** The real matrix $A=I_2$, the datum $b=e_1$, and the grid
$(\lambda_1,\lambda_2,\lambda_3)=(1/9,1,9)$.

[F1] [[alg-discrete-l-curve-parameter-choice]]: At each grid value the selector computes $x_j=(A^TA+\lambda_j I)^{-1}A^Tb$, its residual and solution norms, and discards zero residuals or solution norms. For consecutive retained log-log points $p_0,p_1,p_2$, it sets $u=p_1-p_0$ and $v=p_2-p_1$, then defines $\kappa=2|\det(u,v)|/(\|u\|_2\|v\|_2\|u+v\|_2)$ when the denominator is positive and $0$ otherwise. It assigns this curvature to the middle index and returns a parameter with largest curvature, breaking ties by smallest original index.

## Verification

1.1 Since $A=I_2$, the formula in [F1] gives $x_\lambda=(1+\lambda)^{-1}e_1$, residual norm $r_\lambda=\|Ax_\lambda-b\|_2=\lambda/(1+\lambda)$, and solution norm $s_\lambda=\|x_\lambda\|_2=1/(1+\lambda)$. At the three grid values, $(r_\lambda,s_\lambda)$ equals $(1/10,9/10)$, $(1/2,1/2)$, and $(9/10,1/10)$, respectively. All retained points are valid because both coordinates are positive. [given, F1, algebra]

2.1 Their log-log points are $p_0=(-\log 10,\log(9/10))$, $p_1=(-\log 2,-\log 2)$, and $p_2=(\log(9/10),-\log 10)$. Thus $u=p_1-p_0=(\log 5,-\log(9/5))$ and $v=p_2-p_1=(\log(9/5),-\log 5)$. Their determinant is $-\log^2 5+\log^2(9/5)\ne0$ because $5>9/5>1$; moreover $\|u\|_2=\|v\|_2>0$ and $u+v=(\log9,-\log9)\ne0$. The algorithm's curvature is therefore well-defined and positive. [step 1.1, F1, algebra]

3.1 There are exactly three retained grid indices, so the only consecutive triple is $(1,2,3)$ and its curvature is assigned to index $2$. This is the only candidate for the maximum, so the selector returns $\lambda_2=1$; no tie-break is needed. The computation supplies no claim about any grid outside this input. [given, step 2.1, F1, algebra] ∎
