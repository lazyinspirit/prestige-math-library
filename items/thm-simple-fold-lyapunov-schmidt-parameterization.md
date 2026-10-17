---
id: thm-simple-fold-lyapunov-schmidt-parameterization
kind: theorem
title: "A simple fold has a unique local Lyapunov–Schmidt chart and nonzero parameter curvature"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - lem-pseudo-arclength-border-matrix-invertibility-and-inverse-bound
  - lem-regular-curve-chart-and-pseudo-arclength-predictor-defect
  - def-simple-fold-complement-splitting-and-projection
  - lem-simple-fold-complement-restriction-is-an-isomorphism
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
  - thm-rank-nullity
  - def-rank-and-nullity
  - thm-dimension-of-a-linear-subspace
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-total-derivative-in-euclidean-space
  - thm-chain-rule-for-total-derivatives
  - thm-newton-leibniz-with-interior-derivative
  - thm-extreme-value-metric
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Eugene L. Allgower and Kurt Georg, Numerical Continuation Methods: An Introduction, Springer Series in Computational Mathematics 13 (1990)"
      url: "http://lib.ysu.am/disciplines_bk/080dea8526183abcce1135f2a4460625.pdf"
      locator: "Chapter 2, §§2.1–2.2, printed pp. 7–16: full-rank solution curves and tangent-plane continuation"
    - title: "K. A. Cliffe, A. Spence, and S. J. Tavener, The numerical analysis of bifurcation problems with application to fluid mechanics, Acta Numerica 9 (2000), 39–131"
      url: "https://www.math.colostate.edu/~tavener/manuscripts/cliffe/acta-numerica-2000.pdf"
      locator: "§§3.1–3.2 and 7.1, printed pp. 51–55 and 92–94: simple-fold hypotheses, Lyapunov–Schmidt scalar reduction, curvature formula, and pseudo-arclength system"
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n\times\mathbb R$ be open, and let
$F:U\to\mathbb R^n$ be $C^3$. Write
$D_xF(x,\lambda)u:=DF(x,\lambda)(u,0)$ and
$F_\lambda(x,\lambda):=DF(x,\lambda)(0,1)$. Define
$$F_{xx}(x_0,\lambda_0)[v,v] :=\left.\frac{d}{dt}\bigl(D_xF(x_0+tv,\lambda_0)v\bigr)\right|_{t=0}.$$
Suppose
$$F(x_0,\lambda_0)=0,\qquad J:=D_xF(x_0,\lambda_0),\qquad \operatorname{rank}J=n-1.$$
Assume that $v\in\mathbb R^n$ is a unit vector with
$\ker J=\operatorname{span}\{v\}$, that $w\in\mathbb R^n\setminus\{0\}$
satisfies $w^TJ=0$, and that
$$a:=w^TF_\lambda(x_0,\lambda_0)\ne0,\qquad b:=w^TF_{xx}(x_0,\lambda_0)[v,v]\ne0.$$
Then there is $\delta>0$ and a unique local $C^3$ curve of solutions
$(x(s),\lambda(s))$, $|s|<\delta$, with
$$x(0)=x_0,\quad \lambda(0)=\lambda_0,\quad v^T(x(s)-x_0)=s,\quad x'(0)=v,\quad \lambda'(0)=0,\quad \lambda''(0)=-\frac{b}{a}\ne0.$$
In particular, on a smaller interval there is a finite $M_3$ such that
$$\left|\lambda(s)-\lambda_0+\frac{b}{2a}s^2\right| \le\frac{M_3}{6}|s|^3.$$
The full derivative $D_{(x,\lambda)}F$ has rank $n$ at the fold, and the
solution curve tangent there is $(v,0)$. Thus an augmented pseudo-arclength
hyperplane with unit normal $\tau$ remains locally regular whenever
$|\tau^T(v,0)|>0$. This is a local statement; it asserts no global branch
completeness.

## Facts & Assumptions

**Given:** The dimensions, $U,F,(x_0,\lambda_0),J,v,w,a,b$ and hypotheses
in the Statement.

[F1] [[def-simple-fold-complement-splitting-and-projection]]: with
$X=v^\perp$, $Y=\ker(w^T)$, $q=F_\lambda/a$, and $P=I-qw^T$, the map $P$
is the complement projection notation used below.

[F2] [[lem-simple-fold-complement-restriction-is-an-isomorphism]]:
$J|_X:X\to Y$ is a linear isomorphism, $P^2=P$,
$\operatorname{range}P=Y$, $\ker P=\operatorname{span}\{q\}$,
$PJ=J$, and $PF_\lambda=0$.

[F3] [[thm-parametrized-implicit-function-theorem-with-higher-regularity]]:
a $C^3$ equation with invertible derivative in the solved variables has a
unique local $C^3$ implicit solution in the remaining parameters.

[F4] [[thm-chain-rule-for-total-derivatives]]: derivatives of the
parameterized compositions are obtained by composing their derivatives.

[F5] [[thm-newton-leibniz-with-interior-derivative]]: for a $C^1$ scalar
function, its endpoint difference is the integral of its derivative.

[F6] [[thm-extreme-value-metric]]: a continuous real-valued function on a
compact metric space is bounded and attains its extrema.

[F7] [[lem-pseudo-arclength-border-matrix-invertibility-and-inverse-bound]]:
the augmented derivative with last row $\tau^T$ is invertible when its dot
product with the unit tangent is nonzero.

[F8] [[thm-dimension-of-a-linear-subspace]]: each finite-dimensional
subspace has a finite basis, so finite-dimensional coordinates can be fixed
on $X$ and $Y$.

[F9] [[thm-rank-nullity]]: for a linear map with finite-dimensional domain,
the domain dimension is the sum of kernel and image dimensions.

[F10] [[def-ck-euclidean-maps-and-diffeomorphisms]]: $C^3$ means each
component has continuous coordinate partial derivatives through order three.

[F11] [[def-total-derivative-in-euclidean-space]]: $DF$ is the linear map in
the first-order approximation; state and parameter derivatives are its
restrictions to the corresponding coordinate directions.

[F12] [[def-rank-and-nullity]]: rank of a map with finite-dimensional domain
is the dimension of its image.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Let $c:=F_\lambda(x_0,\lambda_0)$. By [F2], $\operatorname{im}J=Y=\ker(w^T)$; and $w^Tc=a\ne0$. For any $r\in\mathbb R^n$, the vector $r-(w^Tr/a)c$ lies in $Y$, so the columns of $[J\ c]$ span $\mathbb R^n$. Thus the full derivative has rank $n$. Its kernel is one-dimensional by [F9] and contains $(v,0)$, so its unit tangent at the fold is $(v,0)$. The local full-rank curve chart follows from [F3], as also recorded in the regular-curve lemma. [F2, F3, F9, F10, F11, F12, given, algebra]

1.2 First take $n=1$. Then $J=0$, $v\in\{-1,1\}$, and $a=wF_\lambda\ne0$ implies $F_\lambda\ne0$. Apply [F3] solving for $\lambda$ as a function of $x=x_0+sv$. Differentiating $F(x_0+sv,\lambda(s))=0$ once gives $\lambda'(0)=0$, and differentiating twice gives $F_{xx}[v,v]+F_\lambda\lambda''(0)=0$. Since $w$ is a nonzero scalar, this is $\lambda''(0)=-b/a$. Local uniqueness is the uniqueness clause of [F3]. [F3, F4, F10, F11, given, algebra]

1.3 Now take $n\ge2$. Fix finite-dimensional coordinates on $X$ and $Y$ by [F8]. Apply [F3] to the complement equation $$P F(x_0+sv+u,\lambda_0+\mu)=0,\qquad u\in X.$$ Its derivative in $u$ at $(0,0,0)$ is $PJ|_X=J|_X$, invertible by [F1]–[F2]. It therefore has a unique local $C^3$ solution $u=\psi(s,\mu)\in X$ with $\psi(0,0)=0$. [F1, F2, F3, F8, F10, F11, given, construct]

2.1 Differentiating the complement equation at $(0,0)$ and using [F1]–[F2] gives $J\psi_s(0,0)=0$ and $J\psi_\mu(0,0)=0$. Both derivatives lie in $X$, on which $J$ is injective, so $\psi_s(0,0)=\psi_\mu(0,0)=0$. Define $$g(s,\mu):=w^TF(x_0+sv+\psi(s,\mu),\lambda_0+\mu).$$ The identity $F=PF+q(w^TF)$ shows that $F=0$ is equivalent, locally, to the complement equation and $g=0$. [F1, F2, F4, F10, F11, step 1.3, algebra]

3.1 The chain rule and $w^TJ=0$ give $$g(0,0)=0,\quad g_s(0,0)=0,\quad g_\mu(0,0)=a,\quad g_{ss}(0,0)=b.$$ For the last equality, terms involving $J\psi_{ss}$ vanish after multiplication by $w^T$, and $\psi_s(0,0)=0$ leaves exactly $w^TF_{xx}[v,v]$. [F4, F10, F11, step 2.1, given, algebra]

4.1 Since $a\ne0$, apply [F3] to $g(s,\mu)=0$ to obtain a unique local $C^3$ function $\mu=\mu(s)$. Differentiating this scalar equation gives $\mu'(0)=-g_s/g_\mu=0$ and $\mu''(0)=-g_{ss}/g_\mu=-b/a$. The resulting $x(s)=x_0+sv+\psi(s,\mu(s))$, $\lambda(s)=\lambda_0+\mu(s)$ has $x'(0)=v$ and $\lambda'(0)=0$. The equivalence in step 2.1 proves local uniqueness among solutions. [F3, F4, F10, F11, step 2.1, step 3.1, algebra]

5.1 Step 1.2 gives the stated curve and derivatives when $n=1$; steps 1.3–4.1 give them when $n\ge2$. In both cases $x'(0)=v$, $\lambda'(0)=0$, and $\lambda''(0)=-b/a\ne0$. [step 1.2, step 1.3, step 4.1]

6.1 In both cases $n=1$ and $n\ge2$, the branch is $C^3$. Choose a compact subinterval $[-\delta,\delta]$ and use [F6] to set $M_3:=\sup_{|s|\le\delta}|\lambda'''(s)|<\infty$. Repeatedly applying [F5] gives the integral remainder $$\lambda(s)-\lambda_0-\lambda'(0)s-\tfrac12\lambda''(0)s^2 =\int_0^s\int_0^u\int_0^t\lambda'''(r)\,dr\,dt\,du,$$ whose absolute value is at most $M_3|s|^3/6$. [F5, F6, step 1.2, step 4.1, step 5.1, algebra]

7.1 The tangent $(v,0)$ has unit length because $\|v\|_2=1$. Taking $\tau=(v,0)$ in [F7] gives angular factor $1$, so the bordered derivative of the local pseudo-arclength corrector is invertible at the fold. More generally it remains invertible whenever $|\tau^T(v,0)|>0$. The local curve has therefore a regular pseudo-arclength chart through the fold, while $\lambda'(0)=0$ and $\lambda''(0)\ne0$ show that $\lambda$ is not a local regular coordinate. No assertion about other components or global branch coverage follows. [F7, step 1.1, step 1.2, step 4.1, step 5.1, given, algebra] ∎
