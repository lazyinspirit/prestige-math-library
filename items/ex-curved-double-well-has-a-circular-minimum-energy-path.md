---
id: ex-curved-double-well-has-a-circular-minimum-energy-path
kind: example
title: "A curved double well has an exact circular minimum-energy path"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-regular-minimum-energy-path-in-a-collision-free-tube
  - alg-finite-image-string-method
  - def-hessian-and-euclidean-critical-point
  - cor-hessian-is-symmetric
  - thm-chain-rule-for-total-derivatives
  - thm-multivariable-taylor-formula-with-lagrange-remainder
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Weinan E, Weiqing Ren, and Eric Vanden-Eijnden, String method for the study of rare events"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect02/string.pdf"
      locator: "§II, equations (2)–(5): the normal-gradient MEP condition used to check the path"
    - title: "Graeme Henkelman, Blas P. Uberuaga, and Hannes Jónsson, A climbing image nudged elastic band method for finding saddle points and minimum energy paths"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect04/climbimageNEB.pdf"
      locator: "§I: the index-one saddle on a minimum-energy path"
---

## Example

Prescribe $C_{\rm bad}=\{(0,0)\}$. Let $D=(-\pi/4,\pi/4)\times(-1/4,1/4)$ and define

$$X(s,n)=(1+n)(\cos s,\sin s),\qquad U:=X(D).$$

The domain satisfies $U\subseteq\mathbb R^2\setminus C_{\rm bad}$. Indeed, it is an open annular sector: its points have radius $3/4<\|x\|_2<5/4$, positive first coordinate, and angular coordinate in $(-\pi/4,\pi/4)$. The displayed polar map is one-to-one on $D$ with smooth inverse $s=\arctan(y/x)$ and $n=\sqrt{x^2+y^2}-1$. Let $a=\pi/6$, $W(s)=(s^2-a^2)^2$, and define $V(X(s,n))=W(s)+n^2/2$ on $U$. The curve $R(t)=X(-a+2at,0)$, $0\le t\le1$, is a regular MEP joining the two minima $X(-a,0)$ and $X(a,0)$. Its image is the circular arc of radius one. The point $X(0,0)$ is an index-one saddle.

## Facts & Assumptions

**Given:** The chart, potential, $a=\pi/6$, and path in the Example.

[F1] [[def-regular-minimum-energy-path-in-a-collision-free-tube]]: a regular MEP has zero gradient component normal to its unit tangent, and the endpoints are fixed data.

[F2] [[def-hessian-and-euclidean-critical-point]]: at a critical point the Hessian is the matrix of second partial derivatives and its negative-eigenvalue count is the Morse index used here. Since $V$ is $C^2$, [[cor-hessian-is-symmetric]] makes that Hessian symmetric.

[F3] [[thm-chain-rule-for-total-derivatives]]: derivatives of a scalar field in the displayed chart equal its ambient gradient paired with the chart tangent vectors.

[F4] Since $U$ is open, a sufficiently small convex open ball centered at $X(0,0)$ has its closure in $U$. The potential is $C^\infty$ on that ball, so [[thm-multivariable-taylor-formula-with-lagrange-remainder]] applies there; bounded third derivatives on the compact closure give a quadratic expansion with remainder $O(\|x-X(0,0)\|_2^3)=o(\|x-X(0,0)\|_2^2)$.



**Given:** The data above.

## Proof

1.1 Write $T(s)=(-\sin s,\cos s)$ and $N(s)=(\cos s,\sin s)$. Then $X_s=(1+n)T(s)$ and $X_n=N(s)$ are orthogonal, with lengths $1+n>0$ and $1$. By [F3], $\nabla V(X(s,n))\cdot T(s)=W'(s)/(1+n)$ and $\nabla V(X(s,n))\cdot N(s)=n$. At $n=0$, the path tangent is $T(s)$ and its unit normal is $N(s)$, so the normal gradient component vanishes. The path is regular because $\|R'(t)\|_2=2a>0$; hence it is a regular MEP by [F1]. [F1, F3, given, algebra]

1.2 Since $W(s)\ge0$ and $n^2/2\ge0$, the potential is nonnegative and equals zero exactly at $(s,n)=(-a,0)$ and $(a,0)$. Thus both specified endpoints are global minima on $U$. [given, algebra]

2.1 At $(s,n)=(0,0)$, $W'(0)=0$ and $n=0$, so step 1.1 gives $\nabla V(X(0,0))=0$. The coordinate Hessian of $V\circ X=W(s)+n^2/2$ is $\operatorname{diag}(W''(0),1)=\operatorname{diag}(-4a^2,1)$. By [F4], the quadratic Taylor term of $V$ at $X(0,0)$ is $\frac12v^T(D^2V)v+o(\|v\|_2^2)$. Substituting $v=X(s,n)-X(0,0)=DX(0,0)(s,n)+O(s^2+n^2)$ shows the coordinate quadratic form is $DX(0,0)^T(D^2V)DX(0,0)$; the linear term vanishes because the point is critical. Since $DX(0,0)=[T(0),N(0)]$ is orthogonal, this is an orthogonal representation of the ambient Hessian. By [F2] it has exactly one negative eigenvalue, making the point an index-one saddle. [F2, F4, step 1.1, given, algebra]

3.1 The fixed-endpoint finite-image string of [[alg-finite-image-string-method]] can sample and redistribute this arc, but that finite procedure alone does not imply convergence to it from arbitrary initial images. [given, step 2.1] ∎

