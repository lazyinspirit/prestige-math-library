---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-hopf-lax-solution-with-a-forming-corner.json
  precheck: pass
id: ex-hopf-lax-solution-with-a-forming-corner
kind: example
title: A Hopf--Lax solution with a forming corner from smooth data
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-hopf-lax-operator
- lem-hopf-lax-infima-localise
- thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation
- cor-hopf-lax-preserves-a-modulus-of-continuity
- def-characteristic-crossing-and-caustic-for-first-order-pde
- def-total-derivative-in-euclidean-space
- def-directional-and-partial-derivatives
- thm-intermediate-value
- cor-mean-value-theorem
- thm-derivative-of-exponential
- thm-chain-rule
- thm-algebra-of-derivatives
- lem-exponential-dominates-one-plus-x
justified_by: []
aliases: []
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 2, Example 2.4 and Section 5.4, printed pp. 67--68
  - title: Alberto Bressan, Viscosity Solutions of Hamilton--Jacobi Equations and Optimal Control Problems, complete author lecture notes, Penn State University (PDF records Fall 2019 revision)
    url: https://sites.psu.edu/bressan/files/2025/05/HJlnotes24.pdf
    locator: Section 1, characteristic crossing and caustics, printed pp. 2--6

---

## Example

Let $H(p)=p^2/2$, $L(v)=v^2/2$, and $u_0(x)=e^{-x^2}-1$. Then $u_0$ is
smooth, bounded and uniformly continuous, with
$p_0(y):=u_0'(y)=-2ye^{-y^2}$ and $u_0''(y)=(4y^2-2)e^{-y^2}$. The
characteristic projection is $X_t(y)=y+tp_0(y)=y-2tye^{-y^2}$, and its lifted
value is $Z_t(y)=u_0(y)+\tfrac t2p_0(y)^2$. For $0\le t<\tfrac12$, $X_t$ is a
diffeomorphism of $\mathbb R$, and $u_{\rm cl}(X_t(y),t)=Z_t(y)$ is the
classical characteristic solution. At $t=\tfrac12$, $X_t'(0)=0$; for
$t>\tfrac12$, putting $s_t=\sqrt{\log(2t)}$ gives
$X_t(-s_t)=X_t(0)=X_t(s_t)=0$, so the characteristic projection is no longer
injective and its single-valued classical graph breaks down. The Hopf--Lax
formula
$$u(x,t)=\inf_{y\in\mathbb R}\left\{e^{-y^2}-1+\frac{|x-y|^2}{2t}\right\},\qquad t>0,$$
is finite, satisfies $-1\le u(x,t)\le0$, is uniformly continuous in $x$, and is
a viscosity solution of $u_t+\tfrac12u_x^2=0$ with initial datum $u_0$
([[thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation]],
[[cor-hopf-lax-preserves-a-modulus-of-continuity]]). For each fixed
$t>\tfrac12$, the minimisers at $x=0$ are exactly $y=\pm s_t$, and
$$u(0,t)=\frac{1+\log(2t)}{2t}-1.$$
For $x>0$ sufficiently close to $0$, the unique minimiser tends to $s_t$ as
$x\downarrow0$; for $x<0$ sufficiently close to $0$, it tends to $-s_t$ as
$x\uparrow0$. Thus the one-sided spatial derivatives tend to $-s_t/t$ from the
right and $s_t/t$ from the left, so $u(\cdot,t)$ is continuous but has a corner
at $x=0$.

## Verification

**Given:** The Hamiltonian $H(p)=p^2/2$ with Lagrangian $L(v)=v^2/2$, the datum $u_0(y)=e^{-y^2}-1$, its derivatives $p_0=u_0'$, $u_0''$, the characteristic data $X_t(y)=y+tp_0(y)$, $Z_t(y)=u_0(y)+\frac t2p_0(y)^2$, and the Hopf--Lax function $u=Q_tu_0$ ([[def-hopf-lax-operator]], [[def-characteristic-crossing-and-caustic-for-first-order-pde]]).

[F1] $Q_tu_0$ satisfies the bounds $-1\le Q_tu_0\le0$, is spatially uniformly continuous, and is a viscosity solution with datum $u_0$ ([[cor-hopf-lax-preserves-a-modulus-of-continuity]], [[thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation]]); the defining infimum is attained ([[lem-hopf-lax-infima-localise]]).

[F2] Differentiation rules for the elementary functions give $p_0(y)=-2ye^{-y^2}$, $p_0'(y)=(4y^2-2)e^{-y^2}$, and $X_t'(y)=1+tp_0'(y)=1-2te^{-y^2}+4ty^2e^{-y^2}$ ([[def-total-derivative-in-euclidean-space]], [[def-directional-and-partial-derivatives]]).

[F3] A continuous scalar function takes every value between its endpoint values ([[thm-intermediate-value]]), and for a differentiable scalar function on an interval there is a mean-value point ([[cor-mean-value-theorem]]). The bound $e^{y^2}\ge1+y^2$ from [[lem-exponential-dominates-one-plus-x]] gives $|y|e^{-y^2}\le|y|/(1+y^2)\to0$. The exponential is smooth and the elementary chain and algebra rules apply ([[thm-derivative-of-exponential]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

**Proof technique:** explicit characteristic and minimiser computations.

1.1 Classical solution before the first singular time. For $0\le t<1/2$, [F2] gives $X_t'(y)\ge1-2t>0$. The mean value theorem [F3] makes $X_t$ strictly increasing, and $X_t(y)-y=-2tye^{-y^2}\to0$ at both infinities, so the intermediate value theorem gives a unique inverse $Y(x,t)$. This inverse is continuous jointly: near any fixed $(x,t)$, $X_t'$ has a positive lower bound, and the mean value theorem bounds changes in $Y$ by changes in $x$ and in $X_t(Y)$. Differentiating the identity $x=Y+tp_0(Y)$ by difference quotients then gives $Y_x=(1+tp_0'(Y))^{-1}$ and $Y_t=-p_0(Y)/(1+tp_0'(Y))$, continuously. Thus $u_{\rm cl}(x,t)=u_0(Y)+(t/2)p_0(Y)^2$ is $C^1$, with $u_{{\rm cl},x}=p_0(Y)$ and $u_{{\rm cl},t}=-p_0(Y)^2/2$, by substitution of these derivatives. It solves the equation and has the initial datum $u_0$. [F2, F3, algebra]

1.2 Breakdown of the projection. At $t=\tfrac12$ we have $X_t'(0)=1-2t=0$. For $t>\tfrac12$ put $s_t=\sqrt{\log(2t)}>0$; then $e^{-s_t^2}=1/(2t)$, so $X_t(\pm s_t)=\pm s_t-2t(\pm s_t)/(2t)=0=X_t(0)$, and the projection is not injective; it is locally decreasing near $y=0$ because $X_t'(0)=1-2t<0$. The loss of rank at $t=1/2$, $y=0$, is the caustic of [[def-characteristic-crossing-and-caustic-for-first-order-pde]]; the later equal projections show global folding, without asserting local noninjectivity at $y=0$ for $t>1/2$. [F2, algebra]

2.1 Bounds, minimisers at $x=0$, and the corner. By [F1] the Hopf--Lax function is finite, $-1\le u\le0$ and uniformly continuous in $x$. For $g_t(y):=e^{-y^2}-1+y^2/(2t)$ we have $g_t'(y)=y(1/t-2e^{-y^2})$, so for $t>\tfrac12$ the critical points are $0,\pm s_t$, with $g_t''(0)=1/t-2<0$ and $g_t''(\pm s_t)=2s_t^2/t>0$; since $g_t(y)\to\infty$ as $|y|\to\infty$ and $g_t(\pm s_t)=-1+(1+\log(2t))/(2t)<0=g_t(0)$ (since $g_t'(y)<0$ for $0<y<s_t$ and [F3] makes $g_t$ strictly decreasing there), the global minimisers of $g_t$ are exactly $\pm s_t$, and the value is $(1+\log(2t))/(2t)-1$. For $G_t(x,y):=u_0(y)+(x-y)^2/(2t)$ any minimiser obeys $|x-y|\le\sqrt{2t}$, so all minimisers for $|x|\le1$ lie in a fixed compact interval. For every neighbourhood of $\{-s_t,s_t\}$, the complement in this interval has a positive gap above $\min g_t$ by continuity and compact attainment [F1]; uniform convergence $G_t(x,\cdot)\to g_t$ on the interval forces every minimiser into that neighbourhood for all sufficiently small $|x|$. since $G_t(x,y)-G_t(x,-y)=-2xy/t$, a minimiser cannot be negative when $x>0$ nor positive when $x<0$, and $y=0$ is not a minimiser for $x\ne0$ because $\partial_yG_t(x,0)=-x/t\ne0$. Hence all minimisers have the sign of $x$ and, as $x\downarrow0$, they converge to $s_t$ (and to $-s_t$ as $x\uparrow0$). The stationarity equation is $x=F_t(y):=y-2tye^{-y^2}$ with $F_t'(\pm s_t)=2s_t^2>0$, so on small intervals around $\pm s_t$, $F_t'$ is bounded below by a positive constant. The mean value and intermediate value theorems [F3] give a unique local inverse there, and its difference quotient has derivative $1/F_t'(y)$, which is continuous. Since every minimiser is on the corresponding interval for small $|x|$, this inverse is the unique $C^1$ minimising branch on each punctured side. Along a branch the envelope derivative is $u_x=(x-y(x))/t$, whose one-sided limits are $-s_t/t$ (from the right) and $s_t/t$ (from the left); these unequal finite limits show that $u(\cdot,t)$ has a corner at $x=0$ while remaining continuous. [step 1.1, step 1.2, F1, F2, F3, algebra] ∎

## Remarks

- **What is claimed.** The computation identifies the minimisers and the
  one-sided derivatives at the corner; it does not assert local noninjectivity
  of $X_t$ near $y=0$, where $X_t'(0)<0$ and the map is locally decreasing, and
  it does not claim that the classical solution extends past $t=\tfrac12$.

The projection graphs below use the exact formula $X_t(y)=y-2tye^{-y^2}$.
The last panel shows the objective $g_1(y)=e^{-y^2}-1+y^2/2$ at $x=0$,
with a separate vertical scale. Here $s_1=\sqrt{\log 2}$: the three points
$-s_1,0,s_1$ project to zero, but only $\pm s_1$ minimise $g_1$.
The figure illustrates steps 1.1, 1.2 and 2.1; the verification above is
independent of it.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm,>=stealth]
\begin{scope}[shift={(0,0)}]
\draw[->] (-1.85,0) -- (1.95,0) node[right] {$y$};
\draw[->] (0,-1.7) -- (0,1.8) node[above] {$X_t(y)$};
\node at (0,2.8) {$t=\frac14$};
\draw[cyan,thick] plot coordinates {(-1.60000,-1.53816) (-1.57333,-1.50715) (-1.54667,-1.47596) (-1.52000,-1.44459) (-1.49333,-1.41305) (-1.46667,-1.38134) (-1.44000,-1.34947) (-1.41333,-1.31746) (-1.38667,-1.28531) (-1.36000,-1.25304) (-1.33333,-1.22066) (-1.30667,-1.18819) (-1.28000,-1.15565) (-1.25333,-1.12307) (-1.22667,-1.09046) (-1.20000,-1.05784) (-1.17333,-1.02525) (-1.14667,-0.99272) (-1.12000,-0.96026) (-1.09333,-0.92792) (-1.06667,-0.89572) (-1.04000,-0.86369) (-1.01333,-0.83188) (-0.98667,-0.80031) (-0.96000,-0.76902) (-0.93333,-0.73804) (-0.90667,-0.70741) (-0.88000,-0.67717) (-0.85333,-0.64734) (-0.82667,-0.61797) (-0.80000,-0.58908) (-0.77333,-0.56071) (-0.74667,-0.53288) (-0.72000,-0.50563) (-0.69333,-0.47897) (-0.66667,-0.45294) (-0.64000,-0.42755) (-0.61333,-0.40281) (-0.58667,-0.37875) (-0.56000,-0.35537) (-0.53333,-0.33268) (-0.50667,-0.31069) (-0.48000,-0.28939) (-0.45333,-0.26877) (-0.42667,-0.24884) (-0.40000,-0.22957) (-0.37333,-0.21095) (-0.34667,-0.19296) (-0.32000,-0.17557) (-0.29333,-0.15876) (-0.26667,-0.14249) (-0.24000,-0.12672) (-0.21333,-0.11141) (-0.18667,-0.09653) (-0.16000,-0.08202) (-0.13333,-0.06784) (-0.10667,-0.05394) (-0.08000,-0.04026) (-0.05333,-0.02674) (-0.02667,-0.01334) (0.00000,0.00000) (0.02667,0.01334) (0.05333,0.02674) (0.08000,0.04026) (0.10667,0.05394) (0.13333,0.06784) (0.16000,0.08202) (0.18667,0.09653) (0.21333,0.11141) (0.24000,0.12672) (0.26667,0.14249) (0.29333,0.15876) (0.32000,0.17557) (0.34667,0.19296) (0.37333,0.21095) (0.40000,0.22957) (0.42667,0.24884) (0.45333,0.26877) (0.48000,0.28939) (0.50667,0.31069) (0.53333,0.33268) (0.56000,0.35537) (0.58667,0.37875) (0.61333,0.40281) (0.64000,0.42755) (0.66667,0.45294) (0.69333,0.47897) (0.72000,0.50563) (0.74667,0.53288) (0.77333,0.56071) (0.80000,0.58908) (0.82667,0.61797) (0.85333,0.64734) (0.88000,0.67717) (0.90667,0.70741) (0.93333,0.73804) (0.96000,0.76902) (0.98667,0.80031) (1.01333,0.83188) (1.04000,0.86369) (1.06667,0.89572) (1.09333,0.92792) (1.12000,0.96026) (1.14667,0.99272) (1.17333,1.02525) (1.20000,1.05784) (1.22667,1.09046) (1.25333,1.12307) (1.28000,1.15565) (1.30667,1.18819) (1.33333,1.22066) (1.36000,1.25304) (1.38667,1.28531) (1.41333,1.31746) (1.44000,1.34947) (1.46667,1.38134) (1.49333,1.41305) (1.52000,1.44459) (1.54667,1.47596) (1.57333,1.50715) (1.60000,1.53816)};
\fill (0,0) circle (1.6pt);
\end{scope}
\begin{scope}[shift={(4.7,0)}]
\draw[->] (-1.85,0) -- (1.95,0) node[right] {$y$};
\draw[->] (0,-1.7) -- (0,1.8) node[above] {$X_t(y)$};
\node at (0,2.8) {$t=\frac12$};
\draw[cyan,thick] plot coordinates {(-1.60000,-1.47631) (-1.57333,-1.44097) (-1.54667,-1.40525) (-1.52000,-1.36918) (-1.49333,-1.33276) (-1.46667,-1.29601) (-1.44000,-1.25895) (-1.41333,-1.22158) (-1.38667,-1.18395) (-1.36000,-1.14607) (-1.33333,-1.10798) (-1.30667,-1.06971) (-1.28000,-1.03131) (-1.25333,-0.99280) (-1.22667,-0.95425) (-1.20000,-0.91569) (-1.17333,-0.87718) (-1.14667,-0.83877) (-1.12000,-0.80052) (-1.09333,-0.76250) (-1.06667,-0.72477) (-1.04000,-0.68739) (-1.01333,-0.65042) (-0.98667,-0.61395) (-0.96000,-0.57803) (-0.93333,-0.54275) (-0.90667,-0.50816) (-0.88000,-0.47434) (-0.85333,-0.44135) (-0.82667,-0.40928) (-0.80000,-0.37817) (-0.77333,-0.34809) (-0.74667,-0.31910) (-0.72000,-0.29126) (-0.69333,-0.26462) (-0.66667,-0.23921) (-0.64000,-0.21509) (-0.61333,-0.19229) (-0.58667,-0.17084) (-0.56000,-0.15075) (-0.53333,-0.13204) (-0.50667,-0.11471) (-0.48000,-0.09878) (-0.45333,-0.08422) (-0.42667,-0.07101) (-0.40000,-0.05914) (-0.37333,-0.04857) (-0.34667,-0.03926) (-0.32000,-0.03115) (-0.29333,-0.02418) (-0.26667,-0.01830) (-0.24000,-0.01343) (-0.21333,-0.00949) (-0.18667,-0.00639) (-0.16000,-0.00404) (-0.13333,-0.00235) (-0.10667,-0.00121) (-0.08000,-0.00051) (-0.05333,-0.00015) (-0.02667,-0.00002) (0.00000,0.00000) (0.02667,0.00002) (0.05333,0.00015) (0.08000,0.00051) (0.10667,0.00121) (0.13333,0.00235) (0.16000,0.00404) (0.18667,0.00639) (0.21333,0.00949) (0.24000,0.01343) (0.26667,0.01830) (0.29333,0.02418) (0.32000,0.03115) (0.34667,0.03926) (0.37333,0.04857) (0.40000,0.05914) (0.42667,0.07101) (0.45333,0.08422) (0.48000,0.09878) (0.50667,0.11471) (0.53333,0.13204) (0.56000,0.15075) (0.58667,0.17084) (0.61333,0.19229) (0.64000,0.21509) (0.66667,0.23921) (0.69333,0.26462) (0.72000,0.29126) (0.74667,0.31910) (0.77333,0.34809) (0.80000,0.37817) (0.82667,0.40928) (0.85333,0.44135) (0.88000,0.47434) (0.90667,0.50816) (0.93333,0.54275) (0.96000,0.57803) (0.98667,0.61395) (1.01333,0.65042) (1.04000,0.68739) (1.06667,0.72477) (1.09333,0.76250) (1.12000,0.80052) (1.14667,0.83877) (1.17333,0.87718) (1.20000,0.91569) (1.22667,0.95425) (1.25333,0.99280) (1.28000,1.03131) (1.30667,1.06971) (1.33333,1.10798) (1.36000,1.14607) (1.38667,1.18395) (1.41333,1.22158) (1.44000,1.25895) (1.46667,1.29601) (1.49333,1.33276) (1.52000,1.36918) (1.54667,1.40525) (1.57333,1.44097) (1.60000,1.47631)};
\fill (0,0) circle (1.6pt);
\draw[dashed] (-0.5,0) -- (0.5,0);
\node[below right] at (0.15,-0.25) {$X_{1/2}^\prime(0)=0$};
\end{scope}
\begin{scope}[shift={(0,-5.2)}]
\draw[->] (-1.85,0) -- (1.95,0) node[right] {$y$};
\draw[->] (0,-1.7) -- (0,1.8) node[above] {$X_t(y)$};
\node at (0,2.8) {$t=1$};
\draw[cyan,thick] plot coordinates {(-1.60000,-1.35262) (-1.57333,-1.30860) (-1.54667,-1.26384) (-1.52000,-1.21837) (-1.49333,-1.17220) (-1.46667,-1.12536) (-1.44000,-1.07789) (-1.41333,-1.02983) (-1.38667,-0.98123) (-1.36000,-0.93214) (-1.33333,-0.88263) (-1.30667,-0.83276) (-1.28000,-0.78262) (-1.25333,-0.73227) (-1.22667,-0.68183) (-1.20000,-0.63137) (-1.17333,-0.58102) (-1.14667,-0.53087) (-1.12000,-0.48105) (-1.09333,-0.43167) (-1.06667,-0.38287) (-1.04000,-0.33477) (-1.01333,-0.28751) (-0.98667,-0.24123) (-0.96000,-0.19607) (-0.93333,-0.15216) (-0.90667,-0.10965) (-0.88000,-0.06867) (-0.85333,-0.02938) (-0.82667,0.00812) (-0.80000,0.04367) (-0.77333,0.07716) (-0.74667,0.10846) (-0.72000,0.13748) (-0.69333,0.16410) (-0.66667,0.18824) (-0.64000,0.20981) (-0.61333,0.22875) (-0.58667,0.24500) (-0.56000,0.25851) (-0.53333,0.26926) (-0.50667,0.27724) (-0.48000,0.28245) (-0.45333,0.28490) (-0.42667,0.28464) (-0.40000,0.28172) (-0.37333,0.27619) (-0.34667,0.26816) (-0.32000,0.25771) (-0.29333,0.24496) (-0.26667,0.23006) (-0.24000,0.21313) (-0.21333,0.19435) (-0.18667,0.17388) (-0.16000,0.15191) (-0.13333,0.12863) (-0.10667,0.10425) (-0.08000,0.07898) (-0.05333,0.05303) (-0.02667,0.02663) (0.00000,0.00000) (0.02667,-0.02663) (0.05333,-0.05303) (0.08000,-0.07898) (0.10667,-0.10425) (0.13333,-0.12863) (0.16000,-0.15191) (0.18667,-0.17388) (0.21333,-0.19435) (0.24000,-0.21313) (0.26667,-0.23006) (0.29333,-0.24496) (0.32000,-0.25771) (0.34667,-0.26816) (0.37333,-0.27619) (0.40000,-0.28172) (0.42667,-0.28464) (0.45333,-0.28490) (0.48000,-0.28245) (0.50667,-0.27724) (0.53333,-0.26926) (0.56000,-0.25851) (0.58667,-0.24500) (0.61333,-0.22875) (0.64000,-0.20981) (0.66667,-0.18824) (0.69333,-0.16410) (0.72000,-0.13748) (0.74667,-0.10846) (0.77333,-0.07716) (0.80000,-0.04367) (0.82667,-0.00812) (0.85333,0.02938) (0.88000,0.06867) (0.90667,0.10965) (0.93333,0.15216) (0.96000,0.19607) (0.98667,0.24123) (1.01333,0.28751) (1.04000,0.33477) (1.06667,0.38287) (1.09333,0.43167) (1.12000,0.48105) (1.14667,0.53087) (1.17333,0.58102) (1.20000,0.63137) (1.22667,0.68183) (1.25333,0.73227) (1.28000,0.78262) (1.30667,0.83276) (1.33333,0.88263) (1.36000,0.93214) (1.38667,0.98123) (1.41333,1.02983) (1.44000,1.07789) (1.46667,1.12536) (1.49333,1.17220) (1.52000,1.21837) (1.54667,1.26384) (1.57333,1.30860) (1.60000,1.35262)};
\fill[cyan] (-0.83255,0) circle (2pt);
\node[below] at (-0.83255,-0.08) {$-s_1$};
\fill[cyan] (0.00000,0) circle (2pt);
\node[below] at (0.00000,-0.08) {$0$};
\fill[cyan] (0.83255,0) circle (2pt);
\node[below] at (0.83255,-0.08) {$s_1$};
\end{scope}
\begin{scope}[shift={(4.7,-5.2)}]
\draw[->] (-1.85,0) -- (1.95,0) node[right] {$y$};
\draw[->] (0,-1.7) -- (0,1.8) node[above] {$g_1(y)$};
\node at (0,2.8) {$g_1\quad(x=0)$};
\draw[cyan,thick] plot coordinates {(-1.60000,1.42922) (-1.57333,1.28728) (-1.54667,1.15008) (-1.52000,1.01769) (-1.49333,0.89018) (-1.46667,0.76764) (-1.44000,0.65013) (-1.41333,0.53771) (-1.38667,0.43045) (-1.36000,0.32840) (-1.33333,0.23161) (-1.30667,0.14012) (-1.28000,0.05396) (-1.25333,-0.02683) (-1.22667,-0.10225) (-1.20000,-0.17229) (-1.17333,-0.23695) (-1.14667,-0.29625) (-1.12000,-0.35021) (-1.09333,-0.39889) (-1.06667,-0.44232) (-1.04000,-0.48059) (-1.01333,-0.51377) (-0.98667,-0.54196) (-0.96000,-0.56527) (-0.93333,-0.58383) (-0.90667,-0.59778) (-0.88000,-0.60728) (-0.85333,-0.61249) (-0.82667,-0.61361) (-0.80000,-0.61083) (-0.77333,-0.60437) (-0.74667,-0.59445) (-0.72000,-0.58131) (-0.69333,-0.56520) (-0.66667,-0.54639) (-0.64000,-0.52514) (-0.61333,-0.50172) (-0.58667,-0.47643) (-0.56000,-0.44955) (-0.53333,-0.42138) (-0.50667,-0.39221) (-0.48000,-0.36234) (-0.45333,-0.33205) (-0.42667,-0.30165) (-0.40000,-0.27142) (-0.37333,-0.24165) (-0.34667,-0.21259) (-0.32000,-0.18453) (-0.29333,-0.15770) (-0.26667,-0.13234) (-0.24000,-0.10869) (-0.21333,-0.08694) (-0.18667,-0.06729) (-0.16000,-0.04990) (-0.13333,-0.03493) (-0.10667,-0.02250) (-0.08000,-0.01272) (-0.05333,-0.00567) (-0.02667,-0.00142) (0.00000,0.00000) (0.02667,-0.00142) (0.05333,-0.00567) (0.08000,-0.01272) (0.10667,-0.02250) (0.13333,-0.03493) (0.16000,-0.04990) (0.18667,-0.06729) (0.21333,-0.08694) (0.24000,-0.10869) (0.26667,-0.13234) (0.29333,-0.15770) (0.32000,-0.18453) (0.34667,-0.21259) (0.37333,-0.24165) (0.40000,-0.27142) (0.42667,-0.30165) (0.45333,-0.33205) (0.48000,-0.36234) (0.50667,-0.39221) (0.53333,-0.42138) (0.56000,-0.44955) (0.58667,-0.47643) (0.61333,-0.50172) (0.64000,-0.52514) (0.66667,-0.54639) (0.69333,-0.56520) (0.72000,-0.58131) (0.74667,-0.59445) (0.77333,-0.60437) (0.80000,-0.61083) (0.82667,-0.61361) (0.85333,-0.61249) (0.88000,-0.60728) (0.90667,-0.59778) (0.93333,-0.58383) (0.96000,-0.56527) (0.98667,-0.54196) (1.01333,-0.51377) (1.04000,-0.48059) (1.06667,-0.44232) (1.09333,-0.39889) (1.12000,-0.35021) (1.14667,-0.29625) (1.17333,-0.23695) (1.20000,-0.17229) (1.22667,-0.10225) (1.25333,-0.02683) (1.28000,0.05396) (1.30667,0.14012) (1.33333,0.23161) (1.36000,0.32840) (1.38667,0.43045) (1.41333,0.53771) (1.44000,0.65013) (1.46667,0.76764) (1.49333,0.89018) (1.52000,1.01769) (1.54667,1.15008) (1.57333,1.28728) (1.60000,1.42922)};
\draw[dashed] (-1.4,-0.61371) -- (1.4,-0.61371);
\fill (0,0) circle (1.6pt);
\draw[dotted] (-0.83255,0) -- (-0.83255,-0.61371);
\fill[cyan] (-0.83255,-0.61371) circle (2pt);
\node[above] at (-0.83255,0.08) {$-s_1$};
\draw[dotted] (0.83255,0) -- (0.83255,-0.61371);
\fill[cyan] (0.83255,-0.61371) circle (2pt);
\node[above] at (0.83255,0.08) {$s_1$};
\end{scope}
\end{tikzpicture}
```
