---
id: ex-failed-constraint-qualification-blocks-kkt
kind: example
title: A true minimizer with no KKT multipliers when MFCQ fails
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-inequality-constrained-program-and-kkt-geometry
  - thm-first-order-kkt-necessity-under-mfcq
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Nocedal and Wright, Numerical Optimization, second edition
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: Chapter 12, Sections 12.2 and 12.5, printed pp. 328–329 and 351–353; constraint qualifications are required for first-order multiplier existence.
    - title: Boyd and Vandenberghe, Convex Optimization
      url: https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf
      locator: Chapter 5, Sections 5.2–5.3, printed pp. 221–236; constraints qualifications and the separate Slater branch.
---

## Example

Minimize $f(x,y)=x$ subject to
$g(x,y)=y^2-x^3\le0$. The origin is a global minimizer, but it has no KKT
multiplier because the active constraint gradient vanishes there.

## Facts & Assumptions

**Given:** The $C^2$ objective $f(x,y)=x$, the $C^2$ inequality
$g(x,y)=y^2-x^3\le0$, and the feasible candidate $(0,0)$.

[F1] KKT stationarity for one inequality is
$\nabla f+\lambda\nabla g=0$ with $\lambda\ge0$, and MFCQ requires a
direction strictly decreasing every active inequality
([[def-inequality-constrained-program-and-kkt-geometry]]).

[F2] Under MFCQ, every smooth local minimizer has KKT multipliers
([[thm-first-order-kkt-necessity-under-mfcq]]).

## Verification

1.1 If $g(x,y)\le0$, then $y^2\le x^3$. Since $y^2\ge0$, this forces $x^3\ge0$, hence $x\ge0$. The origin is feasible and has objective $0$, so it is a global minimizer. [given, algebra]

1.2 At $(0,0)$ the constraint is active, $\nabla f(0,0)=(1,0)$, and $\nabla g(0,0)=(-3x^2,2y)|_{(0,0)}=(0,0)$. Thus $\nabla f+\lambda\nabla g=(1,0)\ne0$ for every $\lambda\ge0$; no KKT multiplier exists. MFCQ also fails because $Dg(0,0)w=0$ for every direction $w$, so no direction strictly decreases the active constraint. [given, F1, algebra]

2.1 This does not contradict [F2]: the origin is a local and global minimizer, but the MFCQ hypothesis fails, and the direct stationarity calculation proves multiplier existence cannot be inferred here. [step 1.1, step 1.2, F2] ∎