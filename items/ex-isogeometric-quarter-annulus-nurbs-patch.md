---
id: ex-isogeometric-quarter-annulus-nurbs-patch
kind: example
title: A tensor NURBS patch exactly covers a quarter annulus
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-nurbs-patch-map-and-rational-spline-space
  - lem-positive-nurbs-basis-and-quotient-derivative
  - lem-isogeometric-pullback-energy-norm-equivalence
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
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

Assume Countable Choice. Fix $0<r_0<1$. Use a linear radial coordinate $\rho(s)=r_0+(1-r_0)s$ and a rational quadratic angular curve with control points $Q_0=(1,0)$, $Q_1=(1,1)$, $Q_2=(0,1)$ and weights $(1,1/\sqrt2,1)$. Tensor their bases, use control points $P_{ij}=r_iQ_j$ for $r_i\in\{r_0,1\}$, and tensor weights $w_{ij}=w_j$. The resulting patch maps $[0,1]^2$ bijectively onto $\{(x,y):r_0\le\sqrt{x^2+y^2}\le1,\ x,y\ge0\}$ with strictly positive Jacobian, and its exact map satisfies the norm-equivalence hypotheses of [[lem-isogeometric-pullback-energy-norm-equivalence]].


## Facts & Assumptions

**Given:** The radial degree-one basis, the rational quadratic angular basis and controls above, and the positive parameter $r_0$.

[A1] [[def-countable-choice]] is used only for the pullback norm equivalence in [F3]; the explicit geometry calculations do not require choice.

[F1] [[def-nurbs-patch-map-and-rational-spline-space]]: tensor-product rational geometry uses the weighted denominator and positive-weight control points.

[F2] [[lem-positive-nurbs-basis-and-quotient-derivative]]: positive weights and the tensor B-spline partition yield a positive denominator and a rational partition of unity.

[F3] [[lem-isogeometric-pullback-energy-norm-equivalence]] under Countable Choice: a global bi-Lipschitz patch with positive bounded Jacobian and bounded derivative/inverse derivative has the stated H1 and energy norm equivalences.

## Proof

1.1 Put $a=\sqrt2$ and $x_0(t)=(1-t)^2+a t(1-t),\qquad y_0(t)=t^2+a t(1-t),\qquad D(t)=(1-t)^2+a t(1-t)+t^2.$ The weighted middle Bernstein coefficient is $2(1/\sqrt2)t(1-t)=a t(1-t)$, so the angular map is $(X,Y)=(x_0/D,y_0/D)$. Direct expansion gives $x_0^2+y_0^2-D^2=-2t^2(1-t)^2+a^2t^2(1-t)^2=0,$ so $X^2+Y^2=1$; also $X,Y\ge0$ and $D>0$. The tensor-product weights and controls therefore give $F(s,t)=(\rho(s)X(t),\rho(s)Y(t))$. [F1, F2, given, algebra]

2.1 Expanding the numerator derivatives gives $x_0y_0'-y_0x_0'=a+2(1-a)t(1-t)=aD(t),$ because $D(t)=1+(a-2)t(1-t)$ and $a(a-2)=2(1-a)$. Consequently $XY'-YX'=a/D(t)>0$. Since $X^2+Y^2=1$, the angular coordinate $\theta(t)=\arctan(Y/X)$ has derivative $\theta'=XY'-YX'=a/D(t)>0$ on the interior and extends monotonically from $0$ to $\pi/2$. Thus $t\mapsto(X,Y)$ traverses the first-quadrant unit-circle arc exactly once. Since $\rho$ increases bijectively from $r_0$ to $1$, $F$ is injective and its image is exactly the stated quarter annulus. [step 1.1, algebra]

3.1 The Jacobian is $\det DF(s,t)=\rho'(s)\rho(s)(XY'-YX')=(1-r_0)\rho(s)\frac{\sqrt2}{D(t)}>0.$ On the closed square, $\rho\ge r_0>0$ and $D$ is continuous and positive, so this determinant has positive minimum and finite maximum; $DF$ is continuous and bounded, and the inverse matrix is bounded by its cofactor formula divided by the positive determinant. The physical inverse first recovers $\rho=\sqrt{x^2+y^2}$ and the angle $\theta=\operatorname{atan2}(y,x)$. This angle is Lipschitz on the annular sector because $\rho\ge r_0$, and the inverse parameter $t(\theta)$ is Lipschitz because $\theta'(t)=\sqrt2/D(t)$ has a positive minimum. Together with the linear inverse for $s$, this makes $F^{-1}$ Lipschitz; bounded $DF$ makes $F$ Lipschitz. The quarter annulus has a finite piecewise smooth Lipschitz boundary, so all admissibility hypotheses in [F1] hold. Applying [F3] gives the announced pullback norm equivalence. [A1, F1, F3, step 1.1, step 2.1, given, algebra] ∎
