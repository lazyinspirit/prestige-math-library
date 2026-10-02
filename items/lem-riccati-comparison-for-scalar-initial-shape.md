---
id: lem-riccati-comparison-for-scalar-initial-shape
kind: lemma
title: Riccati comparison for scalar initial shape
status: draft
origin: pipeline
deps:
  - thm-determinant-differential-and-jacobis-formula
  - thm-radial-riccati-equation
  - prop-model-functions-solve-the-constant-curvature-jacobi-equation
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-derivative-of-matrix-inversion
  - lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval
  - prop-a-fundamental-matrix-is-invertible
  - thm-monotonicity-of-the-integral
  - def-euclidean-inner-product
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§3, Theorem 3.1 and its proof, printed pp.11–12, and the specialisations Rauch I and Rauch II, printed p.13: Riccati comparison with matched initial asymptotics"
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§26.1–26.2 and 28.1, pp.191–197, 205–209: matrix Jacobi tensors, the Riccati equation and log-derivative comparison"
---

## Statement

Let $E$ be a finite-dimensional real inner product space of dimension
$m\ge1$, let $T>0$, let $\lambda\in\mathbb R$, and let
$R_1,R_2:[0,T]\to\operatorname{End}(E)$ be continuous with every $R_i(t)$
self-adjoint and
$$R_1(t)\ge R_2(t)\quad\text{in the Loewner order:}\quad \langle R_1(t)u,u\rangle\ge\langle R_2(t)u,u\rangle\ \text{ for all }u\in E.$$
For $i=1,2$ let $Y_i:[0,T]\to\operatorname{End}(E)$ be a $C^2$ solution of the
matrix Jacobi equation
$$Y_i''(t)+R_i(t)Y_i(t)=0,\qquad Y_i(0)=\operatorname{id}_E,\qquad Y_i'(0)=\lambda\operatorname{id}_E,$$
and on the set where $Y_i(t)$ is invertible put
$S_i(t):=Y_i'(t)Y_i(t)^{-1}\in\operatorname{End}(E)$. Let
$t_i\in(0,T]\cup\{+\infty\}$ be the first positive singular time of $Y_i$
in $[0,T]$, with $t_i=+\infty$ if there is none. Then:

1. wherever $S_i$ is defined it is self-adjoint and satisfies the **Riccati
   equation** $S_i'+S_i^2+R_i=0$, and $S_i(t)\to\lambda\operatorname{id}_E$ as
   $t\downarrow0$;
2. for every $t\in(0,T]$ with $t<t_1$, $Y_2(t)$ is invertible and
   $S_1(t)\le S_2(t)$. If $t_1\le T$, then $t_1\le t_2$;
3. if in addition $R_2=k\operatorname{id}_E$ is scalar for some $k\in\mathbb R$
   and $f:=\operatorname{cs}_k+\lambda\operatorname{sn}_k$, then the given
   solution is $Y_2=f\operatorname{id}_E$, with $f(t)>0$ for every
   $t\in[0,T]$ with $t<t_1$, and for every $u\in E$ and every
   $t\in(0,T]$ with $t<t_1$,
   $$|Y_1(t)u|\le f(t)\,|u|,$$
   with equality at $t=0$; if $t_1\le T$, the inequality extends to
   $t=t_1$ by continuity.

No choice is used: $E$ is finite-dimensional and every object below is
explicit.

## Facts & Assumptions

**Given:** The finite-dimensional real inner product space $E$ of dimension $m\ge1$, the time interval $[0,T]$, the number $\lambda$, the self-adjoint curvature families $R_1\ge R_2$, the solutions $Y_1,Y_2$ of the matrix Jacobi equation with initial data $\operatorname{id}_E,\lambda\operatorname{id}_E$, the operators $S_i=Y_i'Y_i^{-1}$ and the first singular times $t_i$ in $[0,T]$, with $+\infty$ meaning that no singular time occurs there.

[F1] Riccati computation: [[thm-radial-riccati-equation]] records that an invertible family $A$ with $A''+R_\gamma A=0$ and $S=D_tA\circ A^{-1}$ satisfies $S'+S^2+R_\gamma=0$, together with the derivation $(Y^{-1})'=-Y^{-1}Y'Y^{-1}$ used there; the same two-line computation applies verbatim to any matrix family $Y$ with $Y''+RY=0$. The item supplies the computation, no radial geometry being used.

[F2] Adjoints: [[def-adjoint-of-a-linear-map-between-inner-product-spaces]] characterises the adjoint by $\langle Lx,y\rangle=\langle x,L^*y\rangle$, with $(LM)^*=M^*L^*$, $(L^{-1})^*=(L^*)^{-1}$ for invertible $L$, and $L^*=L$ for self-adjoint $L$.

[F3] Matrix inversion: $Y\mapsto Y^{-1}$ is differentiable at every invertible $Y$, with derivative $-Y^{-1}(\cdot)Y^{-1}$, hence continuous there ([[thm-derivative-of-matrix-inversion]]).

[F4] Linear matrix ODEs: for continuous $C$ on a compact interval and any initial data, $Y'=CY$ has a unique solution on the whole interval ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]), and the solution with $Y(t_0)=I$ is invertible at every time ([[prop-a-fundamental-matrix-is-invertible]]).

[F5] Model functions: $\operatorname{sn}_k''+k\operatorname{sn}_k=0$, $\operatorname{sn}_k(0)=0$, $\operatorname{sn}_k'(0)=1$, and $\operatorname{cs}_k''+k\operatorname{cs}_k=0$, $\operatorname{cs}_k(0)=1$, $\operatorname{cs}_k'(0)=0$ ([[prop-model-functions-solve-the-constant-curvature-jacobi-equation]]).

[F6] Monotonicity of the integral: if $\varphi\le\psi$ are continuous then $\int_0^t\varphi\le\int_0^t\psi$ ([[thm-monotonicity-of-the-integral]]); in particular the integral of a continuous nonnegative real function over $[0,t]$, $t>0$, is nonnegative.

[F7] Inner products: on the finite-dimensional real inner product space $E$ the pairing $\langle\cdot,\cdot\rangle$ is bilinear, symmetric and positive definite ([[def-euclidean-inner-product]]).

## Proof
1.1 $S_i$ satisfies the Riccati equation and is self-adjoint. [F1, F2, F3, given]
On any interval where $Y_i$ is invertible, differentiating $S_i=Y_i'Y_i^{-1}$ with [F3] gives $$S_i'=Y_i''Y_i^{-1}+Y_i'\,(-Y_i^{-1}Y_i'Y_i^{-1})=-R_iY_iY_i^{-1}-S_i^2 =-R_i-S_i^2,$$ the middle step using $Y_i''=-R_iY_i$; this is the Riccati equation. For self-adjointness put $W_i:=Y_i^*Y_i'-(Y_i')^*Y_i$. Differentiating and inserting the equation, $$W_i'=(Y_i')^*Y_i'+Y_i^*Y_i''-(Y_i'')^*Y_i-(Y_i')^*Y_i' =Y_i^*(-R_iY_i)+(R_iY_i)^*Y_i =-Y_i^*R_iY_i+Y_i^*R_iY_i=0,$$ because $R_i^*=R_i$ by [F2]. Hence $W_i$ is constant, and $W_i(0)=(\operatorname{id})^*(\lambda\operatorname{id})- (\lambda\operatorname{id})^*\operatorname{id}=0$, so $Y_i^*Y_i'=(Y_i')^*Y_i$. Multiplying on the right by $Y_i^{-1}$ gives $Y_i^*S_i=(Y_i')^*$, and multiplying on the left by $(Y_i^*)^{-1}$, $$S_i=(Y_i^*)^{-1}(Y_i')^* \overset{\text{[F2]}}{=}\bigl(Y_i^{-1}\bigr)^*(Y_i')^* =\bigl(Y_i'Y_i^{-1}\bigr)^*=S_i^*,$$ so $S_i$ is self-adjoint. [F1, F2, F3, given]

1.2 The limit at zero. [F3, F7, given]
The solutions are $C^2$ on $[0,T]$, so $Y_i(t)\to Y_i(0)= \operatorname{id}_E$ and $Y_i'(t)\to Y_i'(0)=\lambda\operatorname{id}_E$ as $t\downarrow0$. By [F3] inversion of matrices is continuous at the invertible point $\operatorname{id}_E$, so $Y_i(t)^{-1}\to\operatorname{id}_E$ and therefore $S_i(t)=Y_i'(t)Y_i(t)^{-1}\to \lambda\operatorname{id}_E$. In particular $U:=S_2-S_1$, defined on $(0,t_*)$ with $t_*:=\min(T,t_1,t_2)$, extends to $t=0$ by $U(0):=0$ and is continuous there. [F3, F7, given]

1.3 The scalar model. [F4, F5, given]
Let $R_2=k\operatorname{id}_E$ and $f:=\operatorname{cs}_k+ \lambda\operatorname{sn}_k$. By [F5], $f''+kf=0$, $f(0)=1$ and $f'(0)=\lambda$, so $Y:=f\operatorname{id}_E$ satisfies $Y''+kY=(f''+kf)\operatorname{id}_E=0$, $Y(0)=\operatorname{id}_E$ and $Y'(0)=\lambda\operatorname{id}_E$. The second-order equation for $Y$ is the first-order linear system $Z'=CZ$ for $Z=(Y,Y')$ with the constant matrix $C=\left(\begin{smallmatrix}0&1\\-k&0\end{smallmatrix}\right) $, so [F4] gives uniqueness of its solutions; hence the given $Y_2$ equals $f\operatorname{id}_E$, and $S_2=(f'/f)\operatorname{id}_E$ wherever $f\ne0$. [F4, F5, given]

2.1 The transport equation for $U$. [F2, step 1.1, given]
On $(0,t_*)$ both $S_1$ and $S_2$ are defined, and step 1.1 gives $$U'=S_2'-S_1'=(-S_2^2-R_2)-(-S_1^2-R_1)=S_1^2-S_2^2+(R_1-R_2).$$ Put $X:=-\tfrac12(S_1+S_2)$, self-adjoint by [F2] and step 1.1, and $S:=R_1-R_2\ge0$. The mixed terms collapse, $$XU+UX=-\tfrac12(S_1+S_2)(S_2-S_1)-\tfrac12(S_2-S_1)(S_1+S_2) =S_1^2-S_2^2,$$ so that $$U'=XU+UX+S,\qquad U(0)=0,\qquad S\ge0.$$ [F2, step 1.1, given]

3.1 Positivity of $U$: $S_1\le S_2$ on $(0,t_*)$. [F4, F6, F7, step 1.2, step 2.1]
Fix $\tau\in(0,t_*)$. The linear matrix initial value problem $g'=Xg$, $g(0)=\operatorname{id}_E$, has a unique solution $g$ on the compact interval $[0,\tau]$ by [F4], and every $g(s)$ is invertible by [F4]. For $v\in E$ and $s\in(0,\tau)$ define $$w(s):=g(s)^{-1}U(s)\bigl(g(s)^{-1}\bigr)^*;$$ since $U(s)\to0$ and $g(s)^{-1}\to\operatorname{id}_E$ as $s\downarrow0$ by step 1.2, $w$ extends continuously to $s=0$ with $w(0)=0$. Using $(g^{-1})'=-g^{-1}X$ from [F3] and $X^*=X$, $$w'=-g^{-1}XU(g^{-1})^*+g^{-1}\bigl(XU+UX+S\bigr)(g^{-1})^* -g^{-1}UX(g^{-1})^*=g^{-1}S(g^{-1})^*,$$ which is positive semidefinite at every $s$, because $\langle g^{-1}S(g^{-1})^*v,v\rangle =\langle S(g^{-1})^*v,(g^{-1})^*v\rangle\ge0$ by $S\ge0$ and [F7]. Therefore the continuous real function $s\mapsto\langle w'(s)v,v\rangle$ is nonnegative on $[0,\tau]$, and [F6] gives $$\langle w(\tau)v,v\rangle=\langle w(0)v,v\rangle+\int_0^\tau \langle w'(s)v,v\rangle\,ds\ge0 .$$ As $v$ was arbitrary, $w(\tau)\ge0$; since $U(\tau)=g(\tau)w(\tau)g(\tau)^*$ is a congruence by the invertible $g(\tau)$, $\langle U(\tau)v,v\rangle=\langle w(\tau)g(\tau)^*v,g(\tau)^*v\rangle\ge0$ for all $v$, that is $U(\tau)\ge0$. Thus $S_1\le S_2$ on $(0,t_*)$. [F4, F6, F7, step 1.2, step 2.1]

4.1 The less-curved tensor has no earlier singular time. [F3, F7, step 3.1, given]
Before either first singular time, $\det Y_i>0$, since it starts at one
and cannot change sign without vanishing. Jacobi's determinant formula
([[thm-determinant-differential-and-jacobis-formula]]) gives
$$\left(\log\frac{\det Y_2}{\det Y_1}\right)'=\operatorname{tr}(S_2-S_1)\ge0.$$
The trace is nonnegative because it is the sum of
$\langle(S_2-S_1)e_j,e_j\rangle\ge0$ in a finite orthonormal basis.
The determinant ratio starts at one, so $\det Y_2\ge\det Y_1>0$ on
this interval. If $t_2<t_1$ and $t_2\le T$, continuity as
$t\uparrow t_2$ would give $0=\det Y_2(t_2)\ge\det Y_1(t_2)>0$,
a contradiction. Thus $Y_2$ is invertible for all $t\le T$ with
$t<t_1$, and step 3.1 extends $S_1\le S_2$ to any included nonsingular
endpoint by continuity. This also proves $t_1\le t_2$ when $t_1\le T$.
If $t_1=+\infty$, there is no singular time of $Y_2$ in $[0,T]$.
[F3, F7, step 3.1, given]

4.2 The logarithmic norm inequality. [F2, step 3.1, step 1.3, given]
For $u=0$ the norm inequality is immediate. Fix $u\in E\setminus\{0\}$ and put $J(t):=Y_1(t)u$ for $t\in(0,t_1)$. Since $Y_1(t)$ is invertible there, $J(t)\ne0$ and $$J'(t)=Y_1'(t)u=S_1(t)Y_1(t)u=S_1(t)J(t).$$ On the initial interval where $t<t_*:=\min(T,t_1,t_2)$ and $f>0$ (which holds near $0$), the function $\log\bigl(|J(t)|/(f(t)|u|)\bigr)$ is defined and $$\Bigl(\log\frac{|J|}{f|u|}\Bigr)' =\frac{\langle S_1J,J\rangle}{|J|^2}-\frac{f'}{f} \le\frac{\langle S_2J,J\rangle}{|J|^2}-\frac{f'}{f}=0,$$ using $S_1\le S_2$ from step 4.1 and $S_2=(f'/f)\operatorname{id}$ from step 1.3. Moreover $$\frac{|J(t)|}{f(t)|u|}\longrightarrow\frac{|Y_1(0)u|}{f(0)|u|}=1 \qquad(t\downarrow0)$$ by continuity of $Y_1$ and $f$ (step 1.2 and [F5]). Hence $|Y_1(t)u|\le f(t)|u|$ on this initial interval. [F2, step 1.3, step 4.1, given]

5.1 The model stays positive on the compared interval; conclusion. [step 4.1, step 4.2, given]
If $f$ has a zero in $(0,T]$ before $t_1$, let $t_0$ be its first such zero. Then $f>0$ on $[0,t_0)$ and step 4.2 applies there, so for every $u\in E$, $$|Y_1(t)u|\le f(t)|u|\longrightarrow0\qquad(t\uparrow t_0).$$ Continuity forces $Y_1(t_0)=0$, contradicting its invertibility. Thus $f>0$ on $[0,T]$ wherever $t<t_1$, and $Y_2=f\operatorname{id}_E$ is invertible there. Steps 3.1 and 4.2 give $S_1\le S_2$ and $|Y_1(t)u|\le f(t)|u|$ for every $u\in E$ and $t\in(0,T]$ with $t<t_1$. If $t_1\le T$, continuity extends the norm inequality to $t=t_1$, so $t_1\le t_2$. If $t_1>T$, then $Y_2$ is nonsingular on all of $[0,T]$, so $t_2=+\infty$ by definition. Step 4.1 proves the singular-time comparison for arbitrary $R_2$,
and the scalar argument here proves the additional norm conclusion.
[step 4.1, step 4.2, given] ∎

## Source locator

Eschenburg §3, Theorem 3.1 and its proof (printed pp.11–12), proves the Riccati comparison $R_1\ge R_2$, $A_1(t_0)\le A_2(t_0)$ $\Rightarrow$ $A_1\le A_2$ through the transport equation $U'=XU+UX+S$; the singular initial behaviour $S_i(t)\to\lambda\operatorname{id}$ at $t=0$ of the present lemma is the matched-asymptotic case of Remark 3.2 there, and the specialisations Rauch I/II (printed p.13) are the geometric consumers. Datar §§26.1–26.2 and §28.1, pp.191–197 and 205–209, contains the same matrix Riccati and log-derivative calculus. The proof above is carried out from the in-run Riccati equation and model-function suppliers.
