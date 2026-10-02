---
id: thm-relative-volume-density-comparison
kind: theorem
title: Relative volume density comparison
status: published
origin: pipeline
deps:
  - cor-cut-time-does-not-exceed-first-conjugate-time
  - lem-trace-riccati-inequality
  - lem-logarithmic-derivative-of-the-radial-volume-jacobian-is-the-distance-laplacian
  - prop-model-functions-solve-the-constant-curvature-jacobi-equation
  - def-radial-volume-jacobian
  - def-radial-riccati-operator
  - thm-radial-riccati-equation
  - def-radial-jacobi-tensor
  - lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point
  - def-comparison-sine-cosine-and-cotangent-functions
  - def-ricci-curvature
  - def-cut-time-in-a-unit-tangent-direction
  - thm-taylor-peano-remainder
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§§4–5, printed pp.15–20 (PDF labels P15–P20): q(t) = j(t)/\bar j(t) is monotone decreasing, with the Euclidean initial normalisation q → 1 as r → 0"
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§27.2 and 28.1, pp.200–209: the volume element in polar coordinates, its logarithmic derivative and the comparison with the model density"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a complete, connected, boundaryless Riemannian manifold of
dimension $n\ge2$ whose Ricci curvature satisfies
$\operatorname{Ric}\ge(n-1)k\,g$ for a real number $k$. Let $p\in M$, let
$v\in S_pM$ be a unit tangent vector with cut time $c_p(v)$, let $\gamma_v$
be the radial geodesic $\gamma_v(t)=\exp_p(tv)$, and let $J_p(t,v)$ be the
radial volume Jacobian of [[def-radial-volume-jacobian]], defined and positive
for $0<t<c_p(v)$. Assume
$$0<t<\min\bigl(c_p(v),\pi/\sqrt k\,\bigr)\ \text{ when }k>0,\qquad 0<t<c_p(v)\ \text{ when }k\le0 ,$$
and define the **relative volume density**
$$q_v(t):=\frac{J_p(t,v)}{\operatorname{sn}_k(t)^{n-1}} .$$
Then $q_v$ is differentiable, nonincreasing, and satisfies
$$q_v(t)\le1=q_v(0+)\qquad\text{on the stated interval},$$
where the second equality is the limit $q_v(t)\to1$ as $t\downarrow0$; in
particular $J_p(t,v)\le\operatorname{sn}_k(t)^{n-1}$ there. The interval ends
at the cut time $c_p(v)$, where the minimizing polar chart and the declared
domain of $J_p(t,v)$ end, and at the model pole $\pi/\sqrt k$ for $k>0$.
The geodesic $\gamma_v(t)=\exp_p(tv)$ remains defined for all real $t$;
for $k\le0$ the model density has no positive zero and only the cut time
bounds the interval. In dimension $n=2$ the density is
$q_v(t)=J_p(t,v)/\operatorname{sn}_k(t)$. No compactness of $M$ is assumed
and no choice beyond the inherited $\mathrm{AC}_\omega$ is used.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1]; a complete, connected, boundaryless Riemannian manifold $(M,g)$ of dimension $n\ge2$ with $\operatorname{Ric}\ge(n-1)k\,g$; a point $p\in M$; a unit vector $v\in S_pM$ with cut time $c_p(v)$; the radial geodesic $\gamma_v$; the radial volume Jacobian $J_p(t,v)$; and the interval $I:=(0,c_p(v))$ when $k\le0$, $I:=(0,\min(c_p(v),\pi/\sqrt k))$ when $k>0$.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the cut-time, curvature and distance-Hessian interfaces used by the suppliers below; no further selection is made.

[F1] Radial volume Jacobian ([[def-radial-volume-jacobian]]): for $0<t<c_p(v)$ one has $J_p(t,v)=\det\bar A_v(t)>0$, where $\bar A_v$ is the radial Jacobi tensor of $\gamma_v$ in a parallel orthonormal frame, and the normalisation $J_p(t,v)/t^{n-1}\to1$ as $t\downarrow0$ holds.

[F2] Logarithmic derivative ([[lem-logarithmic-derivative-of-the-radial-volume-jacobian-is-the-distance-laplacian]]): for $0<t<c_p(v)$ the function $t\mapsto\log J_p(t,v)$ is differentiable and $$\frac{d}{dt}\log J_p(t,v)=\operatorname{tr}S_v(t) =\Delta_gr_p\bigl(\exp_p(tv)\bigr),$$ where $S_v$ is the radial Riccati operator of [[def-radial-riccati-operator]] along $\gamma_v$ and $r_p=d_g(p,\cdot)$.

[F3] Trace Riccati inequality ([[lem-trace-riccati-inequality]]): the function $h=\operatorname{tr}S_v$ is differentiable on $(0,\tau)$, where $\tau$ is the first conjugate instant of $\gamma_v(0)$ along $\gamma_v$, and $$h'+\frac{h^2}{n-1} +\operatorname{Ric}_{\gamma_v}\bigl(\dot\gamma_v,\dot\gamma_v\bigr)\le0 .$$ By [[def-ricci-curvature]] the assumed bound gives $\operatorname{Ric}_{\gamma_v(t)}(\dot\gamma_v(t),\dot\gamma_v(t))\ge(n-1)k$ for every $t>0$. By [[thm-radial-riccati-equation]] the operator $S_v$ is self-adjoint and $S_v(t)=t^{-1}\operatorname{id}+O(t)$, so $$h(t)=\frac{n-1}{t}+O(t)\qquad(t\downarrow0),$$ and by [[cor-cut-time-does-not-exceed-first-conjugate-time]] one has
$c_p(v)\le\tau$ (the empty conjugate-time set gives $\tau=+\infty$), so $S_v$ and $h$ are defined on all of $I$.

[F4] Model functions ([[prop-model-functions-solve-the-constant-curvature-jacobi-equation]], [[def-comparison-sine-cosine-and-cotangent-functions]]): $\operatorname{sn}_k''+k\operatorname{sn}_k=0$ with $\operatorname{sn}_k(0)=0$, $\operatorname{sn}_k'(0)=1$ and $\operatorname{cs}_k=\operatorname{sn}_k'$, $\operatorname{cs}_k(0)=1$, $\operatorname{cs}_k'(0)=0$; the comparison cotangent $\operatorname{ct}_k=\operatorname{cs}_k/\operatorname{sn}_k$ is defined where $\operatorname{sn}_k\ne0$, and $\operatorname{sn}_k>0$ on $(0,\pi/\sqrt k)$ for $k>0$ and on $(0,\infty)$ for $k\le0$, so that $I$ is contained in the positive domain and $t\mapsto\log\operatorname{sn}_k(t)$ is defined on $I$.

[F5] Cut time ([[def-cut-time-in-a-unit-tangent-direction]]): $c_p(v)>0$ is the time at which the geodesic $\gamma_v$ stops being minimizing, and $\gamma_v|_{[0,t]}$ is the minimizing radial geodesic from $p$ for $0<t<c_p(v)$.

[F6] Taylor expansion ([[thm-taylor-peano-remainder]]): a function that is $m$ times differentiable on an open neighborhood of $0$ satisfies $f(t)=\sum_{j=0}^{m}f^{(j)}(0)t^j/j!+o(t^m)$ as $t\to0$.

## Proof

**Proof technique:** direct: write the logarithm of the relative density as $\log J_p(t,v)-(n-1)\log\operatorname{sn}_k(t)$, differentiate with the logarithmic-derivative identity, bound the trace of the Riccati operator by the traced Riccati inequality and the scalar comparison with the model, and integrate from the common initial value one.

1.1 The logarithmic derivative of the relative density. [F1, F2, F4, F5, given]
On $I$ the functions $J_p(t,v)$ and $\operatorname{sn}_k(t)$ are positive, so $\log q_v=\log J_p(t,v)-(n-1)\log\operatorname{sn}_k(t)$ is differentiable with $$\frac{d}{dt}\log q_v(t)=\operatorname{tr}S_v(t) -(n-1)\frac{\operatorname{sn}_k'(t)}{\operatorname{sn}_k(t)} =\operatorname{tr}S_v(t)-(n-1)\operatorname{ct}_k(t),$$ because $\operatorname{sn}_k'=\operatorname{cs}_k$ and $\operatorname{ct}_k=\operatorname{cs}_k/\operatorname{sn}_k$ by [F4]. By [F2] applied at $q=\exp_p(tv)$ this is also $\Delta_gr_p(\exp_p(tv))-(n-1)\operatorname{ct}_k(t)$; the derivative is computed only for $t\in I\subseteq(0,c_p(v))$, where all factors are defined. [F1, F2, F4, F5, given]

1.2 The trace bound $\operatorname{tr}S_v\le(n-1)\operatorname{ct}_k$. [F3, F4, F6, given]
Put $a:=h/(n-1)$ with $h=\operatorname{tr}S_v$, a differentiable function on $(0,\tau)\supseteq I$. Dividing the trace Riccati inequality of [F3] by the positive number $n-1$ and inserting the Ricci bound gives $$a'+a^2\le-k\qquad\text{on }I,\qquad a(t)=\frac1t+O(t)\ (t\downarrow0).$$ The model satisfies the companion identity and asymptotics $$\operatorname{ct}_k'+\operatorname{ct}_k^2=-k,\qquad \operatorname{ct}_k(t)=\frac1t+O(t),\qquad \operatorname{ct}_k(t)\ge\frac1{2t}\ (0<t<\delta)$$ for some $\delta>0$: the smooth model functions are defined on all of $\mathbb R$, so they satisfy the neighborhood hypothesis of [F6]. The identity follows from $\operatorname{cs}_k'=\operatorname{sn}_k''=-k\operatorname{sn}_k$ and $\operatorname{sn}_k'=\operatorname{cs}_k$ through the quotient rule, $$\operatorname{ct}_k' =\frac{\operatorname{cs}_k'\operatorname{sn}_k-\operatorname{cs}_k\operatorname{sn}_k'}{\operatorname{sn}_k^2} =\frac{-k\operatorname{sn}_k^2-\operatorname{cs}_k^2}{\operatorname{sn}_k^2} =-k-\operatorname{ct}_k^2 ,$$ while $\operatorname{sn}_k(t)=t(1+O(t^2))$ and $\operatorname{cs}_k(t)=1+O(t^2)$ by [F6] at order $3$ for $\operatorname{sn}_k$ and order $2$ for $\operatorname{cs}_k$, applied through $\operatorname{sn}_k(0)=0$, $\operatorname{sn}_k'(0)=1$, $\operatorname{sn}_k''(0)=0$ and $\operatorname{cs}_k(0)=1$, $\operatorname{cs}_k'(0)=0$ [F4], which gives the two asymptotic statements and the lower bound after shrinking $\delta>0$. Subtracting the two Riccati relations, the difference $\varphi:=a-\operatorname{ct}_k$ satisfies $$\varphi'\le-(a+\operatorname{ct}_k)\varphi\qquad\text{on }I .$$ Fix $0<\varepsilon_0<t$ in $I$ and put $\Phi(s):=\varphi(s)\exp\bigl(\int_{\varepsilon_0}^s(a+\operatorname{ct}_k)\bigr)$ for $s\in[\varepsilon_0,t]$; then $\Phi$ is differentiable with $$\Phi'(s)=\exp\Bigl(\int_{\varepsilon_0}^s(a+\operatorname{ct}_k)\Bigr) \bigl(\varphi'(s)+(a(s)+\operatorname{ct}_k(s))\varphi(s)\bigr)\le0 ,$$ hence $\Phi(t)\le\Phi(\varepsilon_0)$ and $$\varphi(t)\le\varphi(\varepsilon_0) \exp\Bigl(-\int_{\varepsilon_0}^{t}(a+\operatorname{ct}_k)\Bigr).$$ With $\delta':=\min(\delta,t)$ and $K:=(t-\delta')\max_{[\delta',t]}|a+\operatorname{ct}_k|$ after shrinking $\delta$ using both asymptotics one has $a(u)+\operatorname{ct}_k(u)\ge1/u$ on $(0,\delta)$ and therefore $$\int_{\varepsilon_0}^{t}(a+\operatorname{ct}_k)\ge \log\frac{\delta'}{\varepsilon_0}-K ,$$ so $$\varphi(t)\le e^{K}\,\delta'^{-1}\cdot \varepsilon_0\bigl|\varphi(\varepsilon_0)\bigr|\longrightarrow0 \qquad(\varepsilon_0\downarrow0),$$ because $\varepsilon_0|\varphi(\varepsilon_0)|\to0$ by the two asymptotics. Hence $a\le\operatorname{ct}_k$ on $I$, i.e. $$\operatorname{tr}S_v(t)\le(n-1)\operatorname{ct}_k(t)\qquad(t\in I).$$ [F3, F4, F6, given]

1.3 The limit of the density at zero. [F1, F4, F5, F6, given]
By the normalisation in [F1], $J_p(t,v)=t^{n-1}(1+o(1))$ as $t\downarrow0$. By [F6] at order $3$ and $\operatorname{sn}_k(0)=0$, $\operatorname{sn}_k'(0)=1$, $\operatorname{sn}_k''(0)=0$ [F4] one has $\operatorname{sn}_k(t)=t(1+O(t^2))$, hence $\operatorname{sn}_k(t)^{n-1}=t^{n-1}(1+O(t^2))$ and $$q_v(t)=\frac{J_p(t,v)}{\operatorname{sn}_k(t)^{n-1}} =\frac{1+o(1)}{1+O(t^2)}\longrightarrow1\qquad(t\downarrow0),$$ the quotient being defined and positive on $I$ by [F1] and [F4]. In particular the limit $q_v(0+)=1$ exists, independently of $k$ and of the geometry of $M$. [F1, F4, F5, F6, given]

2.1 Conclusion: $q_v$ is nonincreasing and at most one. [step 1.1, step 1.2, step 1.3, given]
By step 1.2, $\operatorname{tr}S_v(t)-(n-1)\operatorname{ct}_k(t)\le0$ on $I$; by step 1.1 this is the derivative of $\log q_v$, so $\log q_v$ is nonincreasing on $I$ (its derivative is continuous there by [F2]), and so is $q_v=\exp(\log q_v)$. Hence for $0<s<t$ in $I$, $$q_v(t)\le q_v(s)\ \text{ and, passing to the limit }s\downarrow0,\qquad q_v(t)\le q_v(0+)=1$$ by step 1.3; equivalently $J_p(t,v)\le\operatorname{sn}_k(t)^{n-1}$. The interval is exactly the set on which the two factors are defined and positive: $J_p$ and the Riccati operator are defined for $t<c_p(v)\le\tau$, and for $k>0$ the model sine vanishes at the pole $\pi/\sqrt k$, where the quotient is undefined; beyond it the radial model chart is no longer the stated positive-domain model; for $k\le0$ the model factor is positive on all of $(0,\infty)$ and only the cut time bounds the interval. The value at $t=0$ itself is excluded, since $J_p(t,v)\sim t^{n-1}$ vanishes there; only the limit $q_v(0+)=1$ is asserted, and at the cut time and beyond no value of $q_v$ is defined. In dimension $n=2$ the exponent is $n-1=1$ and the density is $q_v=J_p/\operatorname{sn}_k$; no step of the argument changes, the trace being one-dimensional. No completeness of $M$ beyond the quoted suppliers, no compactness, and no choice beyond the inherited [A1] is used. [step 1.1, step 1.2, step 1.3, given] ∎

## Source locator

Eschenburg §§4–5 (printed pp.15–20) introduces the volume-density quotient $q(t)=j(t)/\bar j(t)$ in polar coordinates, shows it to be monotone decreasing from the value one at the origin, and uses it for the Bishop–Gromov ratio; the argument in step 1.2 is the matched-asymptotic scalar comparison of the traced Riccati inequality, and step 1.1 is the in-run logarithmic-derivative identity $\frac{d}{dt}\log J_p(t,v)=\operatorname{tr}S_v(t)$. Datar §§27.2 and 28.1, pp.200–209, contains the polar volume element, the same logarithmic derivative and the comparison with the model density. The proof above is carried out from the in-run radial volume Jacobian, its logarithmic derivative, the trace Riccati inequality and the model-function suppliers.
