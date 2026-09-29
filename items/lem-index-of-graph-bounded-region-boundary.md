---
id: lem-index-of-graph-bounded-region-boundary
kind: lemma
title: Index of the boundary of a graph-bounded plane region
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-complex-contours-reversal-concatenation-and-closedness
  - def-winding-number-closed-complex-contour
  - thm-continuous-logarithms-exist-along-a-contour
  - cor-winding-number-is-the-normalized-argument-increment
  - cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace
  - cor-length-of-the-graph-of-a-c1-function
  - lem-planar-piecewise-analytic-region-triangulation
  - def-homotopy-relative-and-path-homotopy
  - thm-winding-number-equals-circle-degree
  - thm-degree-is-invariant-under-path-homotopy
  - thm-winding-number-circle-traversed-k-times
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis, Definition 5.24 and the cycle-existence remark"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Printed pp. 227–228; the argument-increment computation of the index of a grid cell, transferred here from rectangles to graph-bounded curvilinear regions."
---

## Statement

A **Puiseux-analytic arc** is a compact graph whose defining function is
analytic on the open parameter interval and has a convergent one-sided
Puiseux expansion at each endpoint, as in
[[lem-planar-piecewise-analytic-region-triangulation]].

Let $w<w'$, let $\alpha,\beta:[w,w']\to\mathbb R$ be continuous with
$\alpha\le\beta$, real-analytic on $(w,w')$, and suppose the graph of $\alpha$
and the graph of $\beta$ are Puiseux-analytic arcs. Put
$$T:=\{(x,y)\in\mathbb C:w\le y\le w',\ \alpha(y)\le x\le\beta(y)\},$$
so that $T$ has interior
$$T^\circ=\{(x,y):w<y<w',\ \alpha(y)<x<\beta(y)\},$$
and let $\gamma$ be the **positively oriented boundary contour** of $T$: the
concatenation of the bottom segment from $(\alpha(w),w)$ to $(\beta(w),w)$, the
graph of $\beta$ traversed with $y$ increasing, the top segment from
$(\beta(w'),w')$ to $(\alpha(w'),w')$, and the graph of $\alpha$ traversed with
$y$ decreasing, degenerate pieces (when $\alpha=\beta$ at a wall) being constant
paths. Then:

1. $\gamma$ is a closed complex contour
   ([[def-complex-contours-reversal-concatenation-and-closedness]]);
2. $n(\gamma,q)=1$ for every $q\in T^\circ$ and $n(\gamma,q)=0$ for every
   $q\in\mathbb C\setminus T$
   ([[def-winding-number-closed-complex-contour]]);
3. consequently $\gamma$ is null-homologous in every open set
   $\Omega\subseteq\mathbb C$ with $T\subseteq\Omega$;
4. the same two index assertions hold for the region $\sigma(T)$ with boundary
   contour $\sigma\circ\gamma$, for every orientation-preserving similarity
   $\sigma(z)=cz+d$, $c\in\mathbb C^\times$.

No choice principle is used.

## Facts & Assumptions

**Given:** $w<w'$, continuous $\alpha\le\beta$ on $[w,w']$, real-analytic on $(w,w')$, with Puiseux-analytic-arc graphs, the region $T$ and its boundary contour $\gamma$.

[F1] The boundary contour $\gamma$ is a finite concatenation of the graph paths $y\mapsto(\beta(y),y)$ and $y\mapsto(\alpha(y),y)$ over $[w,w']$ and the two wall segments; for a closed contour $\gamma$ and $q\notin\gamma^\ast$ a continuous logarithm of $\gamma-q$ along $\gamma$ exists, and $n(\gamma,q)=\frac{1}{2\pi i}\int_\gamma\frac{dz}{z-q}=\frac{\theta(1)-\theta(0)}{2\pi}$ for every continuous argument $\theta$ of $\gamma-q$ ([[thm-continuous-logarithms-exist-along-a-contour]], [[cor-winding-number-is-the-normalized-argument-increment]], [[def-winding-number-closed-complex-contour]]).

[F2] If $\gamma$ is a closed contour, $q\notin\gamma^\ast$ and $c\in\mathbb C^\times$, then $\widetilde\gamma:=(\gamma-q)/c$ is a closed contour with $n(\widetilde\gamma,0)=n(\gamma,q)$; this is [F1] applied to the logarithms $\lambda$ of $\gamma-q$ and $\lambda-\log c$ of $\widetilde\gamma$ ([[thm-continuous-logarithms-exist-along-a-contour]]). Also $\gamma^{-}$, the reversal, satisfies $n(\gamma^-,q)=-n(\gamma,q)$ ([[def-complex-contours-reversal-concatenation-and-closedness]]).

[F3] $n(\gamma,\cdot)$ is continuous on $\mathbb C\setminus\gamma^\ast$, constant on each connected component of that complement, and there is $R>0$ with $n(\gamma,p)=0$ whenever $|p|>R$ ([[cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace]]).

[F4] The graph path of a continuous function on $[a,b]$ that is differentiable with continuous derivative on $[a,b]$ is rectifiable, with finite length ([[cor-length-of-the-graph-of-a-c1-function]]); a finite concatenation of rectifiable paths is rectifiable ([[def-complex-contours-reversal-concatenation-and-closedness]]).

[F5] For a closed rectifiable loop $\gamma:[0,1]\to\mathbb C^\times$ with $\gamma(0)=\gamma(1)=1$ one has $n(\gamma,0)=\deg(\alpha)$ for $\alpha=\gamma/|\gamma|$ ([[thm-winding-number-equals-circle-degree]]); path-homotopic based circle loops have the same degree ([[thm-degree-is-invariant-under-path-homotopy]], [[def-homotopy-relative-and-path-homotopy]]).

[F6] For $a\in\mathbb C$, $r>0$ and $\gamma_1(t)=a+re^{it}$, $t\in[0,2\pi]$, one has $n(\gamma_1,z)=1$ for $|z-a|<r$ and $=0$ for $|z-a|>r$ ([[thm-winding-number-circle-traversed-k-times]]).



## Proof

**Proof technique:** direct.

1.1 ($\gamma$ is a closed complex contour.) The wall segments are straight paths. Near either endpoint the Puiseux expansion of $\beta$ has the form $\beta(w+t)=\sum_{j\ge0}c_jt^{j/m}$, or the analogous expansion in $w'-t$. Substituting $t=s^m$ parametrizes that graph segment by $s\mapsto(\sum c_js^j,w+s^m)$; both coordinates are $C^1$ on a closed short interval, so the segment has finite length by [F4]. On the remaining compact subinterval the graph is $C^1$ because $\beta$ is analytic on $(w,w')$, again giving finite length by [F4]. The same argument applies to $\alpha$. Thus all four (possibly degenerate) pieces are rectifiable, their concatenation $\gamma$ is a rectifiable path, and it is closed because consecutive endpoints agree, so $\gamma$ is a closed complex contour. [F4, given]

1.2 (Based homotopies preserve the index.) Let $\gamma_0,\gamma_1:[0,1]\to\mathbb C\setminus\{q\}$ be closed rectifiable loops with $\gamma_0(0)=\gamma_1(0)=q_0\ne q$, and let $F:[0,1]\times[0,1]\to\mathbb C\setminus\{q\}$ be continuous with $F(j,u)=\gamma_j(u)$ for $j\in\{0,1\}$ and $F(t,0)=F(t,1)=q_0$ for all $t$. Put $c=q_0-q\ne0$, $\widetilde F(t,u)=(F(t,u)-q)/c$ and $\alpha(t,u)=\widetilde F(t,u)/|\widetilde F(t,u)|$; then $\widetilde F$ takes values in $\mathbb C^\times$, is a path homotopy between the loops $\widetilde\gamma_j=(\gamma_j-q)/c$ based at $1$, and $\alpha$ is a path homotopy between the based circle loops $\alpha_j=\widetilde\gamma_j/|\widetilde\gamma_j|$; by [F5] the degrees of $\alpha_0$ and $\alpha_1$ are equal, and by [F5] and [F2] applied to the closed rectifiable loops $\widetilde\gamma_j$ based at $1$, $n(\gamma_j,q)=n(\widetilde\gamma_j,0)=\deg(\alpha_j)$; hence $n(\gamma_0,q)=n(\gamma_1,q)$. [F2, F5, given]

1.3 (Exterior case.) Let $q=(x_q,y_q)\in\mathbb C\setminus T$. If $y_q<w$, the vertical ray $\{(x_q,y):y\le y_q\}$ is disjoint from $T$ because every point of $T$ has $y\ge w>y_q$; if $y_q>w'$, the upward vertical ray $\{(x_q,y):y\ge y_q\}$ has the same property; if $w\le y_q\le w'$ and $x_q>\beta(y_q)$ (the endpoint case $y_q\in\{w,w'\}$ included, since every point of $T$ at height $y_q$ has first coordinate in $[\alpha(y_q),\beta(y_q)]$), the rightward horizontal ray $\{(x,y_q):x\ge x_q\}$ is disjoint from $T$; and if $x_q<\alpha(y_q)$ the leftward horizontal ray $\{(x,y_q):x\le x_q\}$ is disjoint from $T$. These cases exhaust $\mathbb C\setminus T$, since a point with $w\le y_q\le w'$ and $\alpha(y_q)\le x_q\le\beta(y_q)$ lies in $T$. Each chosen ray is a connected set containing $q$, contained in $\mathbb C\setminus\gamma^\ast$ (because $\gamma^\ast\subseteq T$) and meeting $\{p:|p|>R\}$ for $R$ as in [F3]; hence $n(\gamma,q)=0$ by [F3]. [F3, given]

2.1 (Interior case: reduction to a rectangle.) Let $q=(x_q,y_q)\in T^\circ$. Choose $M>\max\{x_q,\ \sup_{[w,w']}\beta\}$ and $M''>-\min\{x_q,\ \inf_{[w,w']}\alpha\}$, and put $q_0:=(\alpha(w),w)\ne q$. For $t\in[0,2]$ let $R_t$ be the region bounded by the graphs $\alpha_t,\beta_t:[w,w']\to\mathbb R$, $\alpha_t:=(1-s(t))\alpha-s(t)M''$ and $\beta_t:=(1-r(t))\beta+r(t)M$, where $r(t)=\min\{t,1\}$ and $s(t)=\max\{0,t-1\}$; then $\alpha_t\le\beta_t$ are continuous, real-analytic on $(w,w')$, and $q_0$ lies on the bottom wall of $R_t$ because $\alpha_t(w)\le\alpha(w)\le\beta(w)\le\beta_t(w)$. Parametrize the boundary of $R_t$ by the five arcs bottom-from-$q_0$, right graph of $\beta_t$, top wall, left graph of $\alpha_t$, bottom-to-$q_0$, the parameter on each arc being proportional to the arc parameter; every coordinate is built from $s(t),r(t)$ and the continuous functions $\alpha,\beta$ by affine operations, so $(t,u)\mapsto P(t,u)$ is continuous, $P(t,0)=P(t,1)=q_0$, and $P(t,\cdot)$ is a positively oriented closed contour. Moreover $q\in R_t^\circ$ for every $t$: indeed $\alpha_t(y_q)\le\alpha(y_q)<x_q<\beta(y_q)\le\beta_t(y_q)$ in the first stage and $\alpha_t(y_q)\le\alpha(y_q)<x_q<M$ in the second, with $w<y_q<w'$ fixed by $q\in T^\circ$. Hence $(t,u)\mapsto P(t,u)$ is a based homotopy in $\mathbb C\setminus\{q\}$ from $P(0,\cdot)=\gamma$ to $P(2,\cdot)=$ the positively oriented boundary of the rectangle $R:=[-M'',M]\times[w,w']$, which is rectifiable as a finite concatenation of segments; by step 1.2, $n(\gamma,q)=n(\partial R,q)$. [step 1.2, given, algebra, choose]

2.2 (Interior case: reduction of the rectangle to a circle.) Write $q=(x_q,y_q)$ and for each direction $\theta$ let $\rho(\theta)$ be the unique positive number with $q+\rho(\theta)e^{i\theta}\in\partial R$; explicitly $\rho(\theta)$ is the minimum of the positive numbers among $(M-x_q)/\cos\theta$ for $\cos\theta>0$, $(-M''-x_q)/\cos\theta$ for $\cos\theta<0$, $(w'-y_q)/\sin\theta$ for $\sin\theta>0$ and $(w-y_q)/\sin\theta$ for $\sin\theta<0$, so $\rho$ is continuous and positive on $[0,2\pi]$. With $\theta_0$ the argument of $q_0-q$ and $r_0:=|q_0-q|=\rho(\theta_0)$, put $G(t,\theta):=q+\bigl((1-t)\rho(\theta)+tr_0\bigr)e^{i\theta}$ for $t\in[0,1]$ and $\theta\in[\theta_0,\theta_0+2\pi]$; then $G$ is continuous, $G(t,\theta_0)=q+\rho(\theta_0)e^{i\theta_0}=q_0$ for every $t$, so $G$ is a based homotopy of closed curves in $\mathbb C\setminus\{q\}$, with $G(0,\cdot)$ a positively oriented parametrization of $\partial R$ and $G(1,\cdot)$ the circle of radius $r_0$ about $q$ traversed once positively. By step 1.2 and [F6], $n(\partial R,q)=n(\text{circle},q)=1$. [step 1.2, F6, given, algebra]

3.1 (Interior case concluded.) For $q\in T^\circ$ steps 2.1 and 2.2 give $n(\gamma,q)=n(\partial R,q)=1$. [step 2.1, step 2.2]

4.1 (Similarity invariance.) Let $\sigma(z)=cz+d$ with $c\ne0$ and let $q\notin\gamma^\ast$. By [F1] there is a continuous logarithm $\lambda$ of $\gamma-q$ along $\gamma$; then $\lambda+\log c$ is a continuous logarithm of $\sigma\circ\gamma-\sigma(q)=c(\gamma-q)$ along $\sigma\circ\gamma$, so by [F1] the two contours have the same index, $n(\sigma\circ\gamma,\sigma(q))=n(\gamma,q)$. Hence for $q'\in\sigma(T^\circ)$, writing $q'=\sigma(q)$ with $q\in T^\circ$, step 3.1 gives $n(\sigma\circ\gamma,q')=1$; and for $q'\notin\sigma(T)$ the point $q=\sigma^{-1}(q')$ lies in $\mathbb C\setminus T$, so step 1.3 gives $n(\gamma,q)=0$ and therefore $n(\sigma\circ\gamma,q')=0$. Multiplication by $c\ne0$ is orientation-preserving, so $\sigma\circ\gamma$ is the positively oriented boundary contour of $\sigma(T)$, and clause 4 follows. [step 1.3, step 3.1, F1, given]

5.1 (Conclusion.) Steps 3.1 and 1.3 give the two index assertions. For the homology claim, define $$H:[0,1]^2\to T,\qquad H(s,t)=\bigl((1-s)\alpha(y(t))+s\beta(y(t)),\ y(t)\bigr),\quad y(t)=w+(w'-w)t.$$ This is continuous and its restriction to the positively oriented boundary of the square traces $\gamma$. Thus $\gamma$ is null-homotopic in $T\subseteq\Omega$, and a null-homotopic loop represents zero in singular homology, so it is null-homologous in $\Omega$. The construction selected only finitely many explicit numbers ($M$, $M''$, the parameters of the arcs), so no choice principle is used. [step 3.1, step 1.3, given] ∎



## Remarks

The two index computations replace the unavailable general Jordan curve theorem by explicit deformations: the graph-bounded region is straightened into a rectangle by moving its two graph sides to distant vertical lines while the basepoint stays on the bottom wall, and the rectangle is then deformed radially onto a circle through the basepoint. Only the circle theorem [[thm-winding-number-circle-traversed-k-times]] supplies a numerical index; the deformations are compared through the degree of the normalized loop, whose invariance under path homotopy is [[thm-degree-is-invariant-under-path-homotopy]]. For a point outside the region the index vanishes by the ray argument, which is the same device used in [[lem-admissible-cycle-around-a-compact-plane-set]]. This lemma is the plane-local input of the residue theorem on a compact Riemann surface; it is stated for regions, not for the interior of an arbitrary closed curve, exactly because the general Jordan curve theorem is not available here.
