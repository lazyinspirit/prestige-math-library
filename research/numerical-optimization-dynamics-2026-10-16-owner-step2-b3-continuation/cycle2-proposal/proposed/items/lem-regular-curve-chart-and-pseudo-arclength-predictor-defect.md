---
id: lem-regular-curve-chart-and-pseudo-arclength-predictor-defect
kind: lemma
title: "A regular solution curve has a unique local arclength chart and a quadratic predictor defect"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - lem-pseudo-arclength-border-matrix-invertibility-and-inverse-bound
  - def-rank-and-nullity
  - thm-rank-nullity
  - thm-ftc-first-part
  - thm-additivity-over-subintervals
  - def-oriented-integral
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-total-derivative-in-euclidean-space
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
  - thm-chain-rule-for-total-derivatives
  - thm-newton-leibniz-with-interior-derivative
  - thm-continuous-implies-integrable
  - thm-monotonicity-of-the-integral
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-euclidean-inverse-function-theorem
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Eugene L. Allgower and Kurt Georg, Numerical Continuation Methods: An Introduction, Springer Series in Computational Mathematics 13 (1990)"
      url: "http://lib.ysu.am/disciplines_bk/080dea8526183abcce1135f2a4460625.pdf"
      locator: "Chapter 2, §§2.1–2.2, printed pp. 7–16: full-rank implicit curves, tangent orientation, and predictor-corrector steps"
    - title: "K. A. Cliffe, A. Spence, and S. J. Tavener, The numerical analysis of bifurcation problems with application to fluid mechanics, Acta Numerica 9 (2000), 39–131"
      url: "https://www.math.colostate.edu/~tavener/manuscripts/cliffe/acta-numerica-2000.pdf"
      locator: "§7.1, printed pp. 92–94: local parameterization by the tangent-plane normalization"
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^{n+1}$ be open, and let
$F:U\to\mathbb R^n$ be $C^2$. Suppose $F(z_0)=0$ and
$\operatorname{rank}DF(z_0)=n$. Let $t\in\ker DF(z_0)$ be a unit vector.
There is an interval about $0$ and a unique local $C^2$ curve
$\gamma(r)$ satisfying
$$F(\gamma(r))=0,\qquad \gamma(0)=z_0,\qquad t^T(\gamma(r)-z_0)=r.$$
There is a neighborhood $V$ of $z_0$ in which every solution $z$ of $F(z)=0$
has the form $z=\gamma(t^T(z-z_0))$. It has $\gamma'(0)=t$. After reparameterization by Euclidean arclength,
the same local curve is represented by a $C^1$ unit-speed curve $c(s)$ with
$c(0)=z_0$ and $c'(0)=t$.

Let $K\subseteq U$ be convex, let $c(s)$ and the segment from
$c(s)$ to $c(s)+h c'(s)$ lie in $K$ for a step $h>0$, and suppose
$$\|DF(u)-DF(v)\|_{\rm op}\le L\|u-v\|_2\qquad(u,v\in K).$$
For $z_p:=c(s)+h c'(s)$, the augmented pseudo-arclength residual
$$G_{s,h}(z):=\bigl(F(z),c'(s)^T(z-z_p)\bigr)$$
satisfies
$$\|G_{s,h}(z_p)\|_2=\|F(z_p)\|_2\le\frac{\sqrt n L}{2}h^2.$$
Thus the predictor defect is quadratic in the step length on the stated tube.

## Facts & Assumptions

**Given:** $U,F,z_0,t,K,L$ and the hypotheses in the Statement.

[F1] [[lem-pseudo-arclength-border-matrix-invertibility-and-inverse-bound]]:
if $A:\mathbb R^{n+1}\to\mathbb R^n$ has rank $n$, $t$ is a unit kernel
vector, and $\tau$ is unit, then $\begin{bmatrix}A\\tau^T\end{bmatrix}$
is invertible exactly when $\tau^Tt\ne0$.

[F2] [[thm-parametrized-implicit-function-theorem-with-higher-regularity]]:
for a $C^2$ equation whose derivative in the solved variables is invertible,
there is a unique local $C^2$ implicit solution, and every nearby zero of the
equation is on its graph.

[F3] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composite
is the composite of the derivatives.

[F4] [[thm-continuous-implies-integrable]] and
[[thm-newton-leibniz-with-interior-derivative]]: a scalar $C^1$ function on a
compact interval equals its initial value plus the integral of its derivative.

[F5] [[thm-monotonicity-of-the-integral]]: pointwise bounds between integrable
real functions pass to their integrals.

[F6] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: a coordinate of a vector
has absolute value at most its Euclidean norm.

[F7] [[thm-euclidean-inverse-function-theorem]]: a $C^1$ map with invertible
derivative at a point has a local $C^1$ inverse.

[F8] [[def-ck-euclidean-maps-and-diffeomorphisms]]: $C^2$ means each scalar
component has continuous coordinate partial derivatives through order two.

[F9] [[def-total-derivative-in-euclidean-space]]: $DF(z)$ is the linear map
in the first-order approximation $F(z+h)=F(z)+DF(z)h+o(\|h\|_2)$.

[F10] [[def-rank-and-nullity]]: rank is the dimension of the image of a linear
map with finite-dimensional domain.

[F11] [[thm-rank-nullity]]: the kernel dimension plus the image dimension equals the domain dimension.

[F12] [[thm-ftc-first-part]]: the integral function of a continuous scalar integrand has derivative equal to that integrand.

[F13] [[thm-additivity-over-subintervals]] in its oriented form and [[def-oriented-integral]]: $\int_a^r v-\int_a^0v=\int_0^r v$, including negative $r$.

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 Define $\Phi(z,r):=(F(z),t^T(z-z_0)-r)$. Its derivative in $z$ at $(z_0,0)$ is $\begin{bmatrix}DF(z_0)\t^T\end{bmatrix}$, which is invertible by [F1] because $DF(z_0)t=0$ and $\|t\|_2=1$. Apply [F2] with parameter $r$ to obtain the unique local $C^2$ solution $z=\gamma(r)$ and the stated normalization. For each nearby zero $z$ of $F$, setting $r=t^T(z-z_0)$ makes $\Phi(z,r)=0$, so the local uniqueness clause in [F2] places $z$ on this graph. Differentiating the equations at $r=0$ using [F3] gives $DF(z_0)\gamma'(0)=0$ and $t^T\gamma'(0)=1$; rank-nullity [F11] gives $\dim\ker DF(z_0)=(n+1)-n=1$, so the kernel and unit length of $t$ force $\gamma'(0)=t$. [F1, F2, F3, F8, F9, F10, F11, given]

2.1 The speed $v(r):=\|\gamma'(r)\|_2$ is continuous and positive on a smaller interval because $v(0)=1$. Set $\ell(r):=\int_0^r v(u)\,du$. On a compact subinterval $[a,b]$ with $a<0<b$, continuity makes $v$ integrable by [F4]. Set $H(r)=\int_a^r v$; [F12] gives $H\prime(r)=v(r)$. By [F13], $\ell(r)=H(r)-H(0)$ on both sides of zero, so $\ell\prime(r)=v(r)>0$; [F7] therefore gives a local inverse $r=r(s)$. The curve $c(s):=\gamma(r(s))$ is $C^1$, satisfies $\|c'(s)\|_2=1$, and has $c(0)=z_0$, $c'(0)=t$. [F3, F4, F5, F7, F12, F13, step 1.1, algebra]

3.1 Fix an admissible $s,h$ and put $e:=h c'(s)$. Differentiating the identity $F(c(r))=0$ at $r=s$ by the chain rule gives $DF(c(s))c'(s)=0$, hence $DF(c(s))e=0$. For each coordinate $0\le i<n$, apply [F3] and [F4] to $u\mapsto F_i(c(s)+u e)$ and subtract the zero linear term $DF_i(c(s))e$ to obtain $$F_i(c(s)+e)=\int_0^1\bigl(DF_i(c(s)+u e)-DF_i(c(s))\bigr)e\,du.$$ The Lipschitz bound, [F6], and $\|e\|_2=h$ bound the integrand in absolute value by $Lu h^2$; [F5] then gives the coordinate bound $Lh^2/2$. [F3, F4, F5, F6, F8, F9, given, step 2.1]

4.1 Combining the $n$ coordinate bounds gives $\|F(z_p)\|_2\le \sqrt n Lh^2/2$. The last coordinate of $G_{s,h}(z_p)$ is zero by the definition of $z_p$, proving the augmented residual bound. [step 3.1, algebra] ∎ 
