---
id: prop-emg-fx-discrete-gauss-preservation
kind: proposition
title: "Exact discrete constraints and semidiscrete and staggered energy"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
proof_strategy: direct
deps:
  - def-emg-fx-cochain-maxwell
  - alg-emg-fx-leapfrog-cochains
  - lem-cm-positive-definite-matrix-square-roots
  - thm-operator-norm-is-the-largest-singular-value
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
dependency_roles:
  def-emg-fx-cochain-maxwell: mathematical-premise
  alg-emg-fx-leapfrog-cochains: mathematical-premise
  lem-cm-positive-definite-matrix-square-roots: mathematical-premise
  thm-operator-norm-is-the-largest-singular-value: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ralf Hiptmair, Maxwell’s Equations: Continuous and Discrete, ETH Research Report 2015-18"
      url: "https://www.sam.math.ethz.ch/sam_reports/reports_final/reports2015/2015-18.pdf"
      locator: "Complete 56-page report inspected. §§3.1–3.3, printed pp. 23–26 (PDF pp. 24–27): signed incidence identities and the algebraic preservation of cochain Maxwell constraints."
    - title: "Davit Harutyunyan, Adaptive Vector Finite Element Methods for the Maxwell Equations, University of Twente dissertation (2007)"
      url: "https://ris.utwente.nl/ws/portalfiles/portal/6041555/thesis_Harutyunyan.pdf"
      locator: "Complete 210-page dissertation inspected. Ch. 6, §§6.7–6.9, printed pp. 169–174 (PDF pp. 179–184): exact staggered energy in a Whitney finite-element scheme and a separate discrete-divergence construction."
---

## Statement

Use finite-dimensional real cochain data as in the definition item and fix $\tau>0$. For a state $(b,d)\in\mathcal X$, define the real one-step map $T_\tau:\mathcal X\to\mathcal X$ by

$$b^+:=b-\tau D_1M_1^{-1}d,\qquad d^+:=d+\tau D_1^{\mathsf T}M_2b^+,\qquad T_\tau(b,d):=(b^+,d^+).$$

On rational admissible matrices, rational initial coordinates, and rational $\tau>0$, this is the one-step update used by the exact rational algorithm; the algorithm's input domain is the rational one stated in its Definition. For every real input state, $D_2b^+=D_2b$ and $D_0^{\mathsf T}d^+=D_0^{\mathsf T}d$, so an input satisfying both zero constraints maps to a state satisfying both. Every continuously differentiable semidiscrete solution conserves $\mathcal E(b,d)$. For any sequence $(b_n,d_{n+1/2})_{n\geq0}$ with $(b_{n+1},d_{n+3/2})=T_\tau(b_n,d_{n+1/2})$, define

$$Q_\tau(b,d):=b^{\mathsf T}M_2b+d^{\mathsf T}M_1^{-1}d-\tau b^{\mathsf T}M_2D_1M_1^{-1}d,\qquad Q_n:=Q_\tau(b_n,d_{n+1/2}).$$

Then $Q_n$ is exactly invariant under $T_\tau$. Equip coordinate and dual-coordinate columns with their standard Euclidean inner products, so $\langle x,y\rangle=x^{\mathsf T}y$ and $\lVert x\rVert_2=(x^{\mathsf T}x)^{1/2}$. Regard $S:=M_2^{1/2}D_1M_1^{-1/2}$ as a real linear map from the dual-coordinate columns of $(C^1)^*$ to the coordinate columns of $C^2$. Set $\sigma:=0$ when its domain $(C^1)^*$ is zero; otherwise set $\sigma:=\max_{\lVert y\rVert_2=1}\lVert Sy\rVert_2$. For a nonzero domain this is the largest singular value of $S$. The quadratic form $Q_\tau$ is positive definite on $\mathcal X$ whenever $\tau\sigma<2$.

## Statement references

[[def-emg-fx-cochain-maxwell]]

[[alg-emg-fx-leapfrog-cochains]]

[[lem-cm-positive-definite-matrix-square-roots]]

[[thm-operator-norm-is-the-largest-singular-value]]

[[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]

## Facts & Assumptions

**Given:** Finite-dimensional real spaces and matrices as in [[def-emg-fx-cochain-maxwell]], $\tau>0$, and either a continuously differentiable solution of its semidiscrete equations or a state sequence whose consecutive states are related by the real map $T_\tau$ defined in the Statement.

[F1] [[def-emg-fx-cochain-maxwell]]: $D_1D_0=0$, $D_2D_1=0$, $M_1,M_2$ are symmetric positive definite, the semidiscrete equations are $\dot b=-D_1M_1^{-1}d$, $\dot d=D_1^{\mathsf T}M_2b$, the constraints are $D_2b=0$ and $D_0^{\mathsf T}d=0$, and $\mathcal E=(b^{\mathsf T}M_2b+d^{\mathsf T}M_1^{-1}d)/2$.

[F2] [[alg-emg-fx-leapfrog-cochains]]: on its rational admissible input domain, each algorithm step is $b_{n+1}=b_n-\tau D_1M_1^{-1}d_{n+1/2}$ followed by $d_{n+3/2}=d_{n+1/2}+\tau D_1^{\mathsf T}M_2b_{n+1}$; this is the rational restriction of the real map $T_\tau$ in the Statement.

[F3] [[lem-cm-positive-definite-matrix-square-roots]]: a symmetric positive-definite matrix $M$ has a symmetric positive-definite square root and inverse square root, with $M^{-1/2}MM^{-1/2}=I$; the assertion applies to positive dimensions, and on the zero-dimensional space the unique map is handled directly.

[F4] [[thm-operator-norm-is-the-largest-singular-value]]: for a linear map between finite-dimensional inner-product spaces, the maximum of $\lVert Sy\rVert_2$ over unit domain vectors equals its largest singular value when the domain is nonzero; the norm is $0$ when the domain is zero.

[F5] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: in a real Euclidean space, $|x^{\mathsf T}y|\leq\lVert x\rVert_2\lVert y\rVert_2$.

## Proof

1.1 On its rational admissible inputs, the algorithm's one-step formulas in [F2] agree with the real map $T_\tau$ defined in the Statement. For any real state, the cochain-complex identities in [F1] give $D_2b_{n+1}=D_2b_n-\tau D_2D_1M_1^{-1}d_{n+1/2}=D_2b_n$ and $D_0^{\mathsf T}d_{n+3/2}=D_0^{\mathsf T}d_{n+1/2}+\tau(D_1D_0)^{\mathsf T}M_2b_{n+1}=D_0^{\mathsf T}d_{n+1/2}$. Thus both constraint residuals are invariant, with no restriction on $\tau$. [given, F1, F2, algebra]

1.2 For a semidiscrete solution, $M_2$ is symmetric by [F1] and $M_1^{-1}$ is symmetric by [F3], so $\frac{d}{dt}\mathcal E=\dot b^{\mathsf T}M_2b+\dot d^{\mathsf T}M_1^{-1}d =-d^{\mathsf T}M_1^{-1}D_1^{\mathsf T}M_2b+d^{\mathsf T}M_1^{-1}D_1^{\mathsf T}M_2b=0$. Therefore $\mathcal E$ is constant on the solution interval. [given, F1, F3, algebra]

2.1 In positive dimensions set $x_n=M_2^{1/2}b_n$, $y_{n+1/2}=M_1^{-1/2}d_{n+1/2}$, and $S=M_2^{1/2}D_1M_1^{-1/2}$. By the definition of $T_\tau$ and [F3], the update becomes $x_{n+1}=x_n-\tau Sy_{n+1/2}$ and $y_{n+3/2}=y_{n+1/2}+\tau S^{\mathsf T}x_{n+1}$. Write $x=x_n$, $y=y_{n+1/2}$, and $x'=x_{n+1}=x-\tau Sy$. Then $\lVert y+\tau S^{\mathsf T}x'\rVert_2^2 =\lVert y\rVert_2^2+2\tau x'^{\mathsf T}Sy+\tau^2\lVert S^{\mathsf T}x'\rVert_2^2$ and $-\tau x'^{\mathsf T}S(y+\tau S^{\mathsf T}x') =-\tau x'^{\mathsf T}Sy-\tau^2\lVert S^{\mathsf T}x'\rVert_2^2$. Adding these to $\lVert x'\rVert_2^2$ cancels the squared terms and leaves $\lVert x'\rVert_2^2+\lVert y\rVert_2^2+\tau x'^{\mathsf T}Sy$. Finally, $\lVert x'\rVert_2^2+\tau x'^{\mathsf T}Sy =\lVert x-\tau Sy\rVert_2^2+\tau(x-\tau Sy)^{\mathsf T}Sy =\lVert x\rVert_2^2-\tau x^{\mathsf T}Sy$, so $Q_{n+1}=Q_n$. If either coordinate space is zero-dimensional, the cross term vanishes and the update leaves the squared Euclidean norm on the remaining state space unchanged. [given, F1, F3, step 1.1, algebra]

3.1 By [F4] and [F5], $|x^{\mathsf T}Sy|\leq\lVert x\rVert_2\lVert Sy\rVert_2\leq\sigma\lVert x\rVert_2\lVert y\rVert_2 \leq\frac{\sigma}{2}(\lVert x\rVert_2^2+\lVert y\rVert_2^2)$. Hence $Q_n\geq(1-\tau\sigma/2)(\lVert x_n\rVert_2^2+\lVert y_{n+1/2}\rVert_2^2)$, which is strictly positive for every nonzero state when $\tau\sigma<2$. If $\sigma=0$ or a coordinate space is zero, the cross term vanishes and the same conclusion holds for every $\tau>0$. [F3, F4, F5, step 2.1, algebra] ∎

## Remarks

The sign in $Q_n$ follows from the specified order $b_n,d_{n+1/2}$. This is a finite algebraic result; the cited finite-element sources use their own field spaces, material operators and boundary conditions. No mesh-uniform stability or continuum-convergence theorem is claimed.
