---
id: thm-laplacian-comparison-for-distance-under-a-ricci-lower-bound
kind: theorem
title: Laplacian comparison for distance under a ricci lower bound
status: draft
origin: pipeline
deps:
  - def-laplace-beltrami-operator-as-trace-of-the-hessian
  - lem-trace-riccati-inequality
  - def-comparison-sine-cosine-and-cotangent-functions
  - prop-model-functions-solve-the-constant-curvature-jacobi-equation
  - prop-hessian-of-distance-in-terms-of-radial-jacobi-fields
  - prop-gradient-of-the-distance-is-the-outward-unit-radial-field-off-the-cut-locus
  - thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p
  - def-radial-jacobi-tensor
  - def-radial-riccati-operator
  - thm-radial-riccati-equation
  - def-ricci-curvature
  - thm-taylor-peano-remainder
  - def-countable-choice
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
      locator: "§4, equation (4.1) and the paragraph following it, printed p.15: the traced Riccati inequality and the substitution a = tr(A)/(n−1) compared with the scalar model"
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§26.1–26.2 and 28.1, pp.191–197, 205–209: the traced Riccati equation and the scalar comparison for the Laplacian of the distance"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a complete, connected, boundaryless Riemannian manifold of
dimension $n\ge2$ whose Ricci curvature satisfies the lower bound
$$\operatorname{Ric}_x(X,X)\ge(n-1)k\,|X|^2\qquad\text{for all }x\in M,\ X\in T_xM ,$$
for a real number $k$; equivalently $\operatorname{Ric}\ge(n-1)k\,g$ in the
bilinear-form sense. Let $p\in M$, let $r:=r_p=d_g(p,\cdot)$ be the distance
from $p$, and let $q\in M\setminus(\{p\}\cup\operatorname{Cut}(p))$ be a point
off $p$ and off the cut locus of $p$. Assume in addition that
$$r(q)<\pi/\sqrt k\qquad\text{when }k>0 .$$
Then the Laplace–Beltrami operator of $g$ satisfies
$$\Delta_g r(q)\le(n-1)\operatorname{ct}_k\bigl(r(q)\bigr).$$
The estimate is pointwise at $q$, a point of smoothness of $r$; the cut locus
and $p$ itself are excluded because $\operatorname{Hess}r$, hence $\Delta_gr$,
is not defined there. For $k>0$ the restriction $r(q)<\pi/\sqrt k$ keeps
$r(q)$ inside the domain of $\operatorname{ct}_k$; for $k\le0$ the function
$\operatorname{ct}_k$ is defined on all of $(0,\infty)$ and no restriction on
$r(q)$ is imposed. The sign convention is the positive-divergence convention
of [[def-laplace-beltrami-operator-as-trace-of-the-hessian]], and in
dimension $n=2$ the inequality reads
$\Delta_gr(q)\le\operatorname{ct}_k(r(q))$, the trace being a single normal
eigenvalue. No compactness of $M$ is assumed and no choice beyond the
inherited $\mathrm{AC}_\omega$ is used.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1]; a complete, connected, boundaryless Riemannian manifold $(M,g)$ of dimension $n\ge2$ with $\operatorname{Ric}\ge(n-1)k\,g$; a point $p\in M$; the distance function $r=r_p$; a point $q\in M\setminus(\{p\}\cup\operatorname{Cut}(p))$ with $r(q)<\pi/\sqrt k$ when $k>0$.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carried by the cut-time, curvature and distance-Hessian interfaces used by the suppliers below; the Jacobi and parallel initial-value constructions require no choice; no further selection is made.

[F1] Laplace–Beltrami operator ([[def-laplace-beltrami-operator-as-trace-of-the-hessian]]): $\Delta_gf(p)=\operatorname{tr}_g(\operatorname{Hess}f)_p =\sum_i\operatorname{Hess}f(e_i,e_i)$ for any $g_p$-orthonormal basis $e_1,\dots,e_n$ of $T_pM$; the value is basis-independent.

[F2] Trace Riccati inequality ([[lem-trace-riccati-inequality]]): for a unit-speed geodesic $\gamma$ with radial Jacobi tensor $A$ and radial Riccati operator $S=D_tA\circ A^{-1}$, the function $h:=\operatorname{tr}S$ is differentiable on $0<t<\tau$ ($\tau$ the first conjugate instant) and satisfies $$h'(t)+\frac{h(t)^2}{n-1} +\operatorname{Ric}_{\gamma(t)}\bigl(\dot\gamma(t),\dot\gamma(t)\bigr)\le0 \qquad(0<t<\tau).$$

[F3] Distance Hessian ([[prop-hessian-of-distance-in-terms-of-radial-jacobi-fields]]): for a unit $v\in S_pM$ and $0<t<c_p(v)$, with $\gamma=\gamma_{p,v}$, $q=\gamma(t)$, $T=\dot\gamma(t)$, the endomorphism $H:=\nabla\operatorname{grad}r$ satisfies $H(T)=0$, and for $X\perp T$ one has $H(X)=D_tJ_X(t)$ for the Jacobi field with $J_X(0)=0$, $J_X(t)=X$; on $T^{\perp}$ the operator $H$ equals $D_tJ(t)\circ J(t)^{-1}$ and is $g$-self-adjoint, and $(\nabla^2r)_q(X,Y)=g_q(D_tJ_X(t),Y)=\operatorname{Hess}r(X,Y)$.

[F4] Cut-locus parametrisation ([[thm-exp-p-is-a-diffeomorphism-from-the-open-tangent-cut-domain-onto-m-minus-the-cut-locus-and-p]], [[prop-gradient-of-the-distance-is-the-outward-unit-radial-field-off-the-cut-locus]]): $q\in M\setminus(\{p\}\cup\operatorname{Cut}(p))$ has a unique representation $q=\exp_p(t_0v)$ with $v\in S_pM$, $0<t_0<c_p(v)$; then $t_0=d_g(p,q)=r(q)$, the segment is minimizing, $\operatorname{grad}r(q)=\dot\gamma(t_0)=:T$ has norm one, and $N=T^{\perp}=\{\operatorname{grad}r(q)\}^{\perp}$.

[F5] Radial theory ([[def-radial-jacobi-tensor]], [[def-radial-riccati-operator]], [[thm-radial-riccati-equation]]): the endpoint map $A(t)=J(t):N_0\to N_t$ is a linear isomorphism for $0<t<c_p(v)\le\tau$, the Riccati operator satisfies $S=\bar A'\bar A^{-1}$ with $\bar A=P^{-1}A$, $S$ is self-adjoint and $S(t)=t^{-1}\operatorname{id}+O(t)$ as $t\downarrow0$; hence $$h(t)=\operatorname{tr}S(t)=\frac{n-1}{t}+O(t)\qquad(t\downarrow0),$$ for every $t$ at which $S$ is defined.

[F6] Ricci curvature ([[def-ricci-curvature]]): $\operatorname{Ric}_x(X,Y)=\operatorname{tr}(Z\mapsto R(Z,X)Y)$; the assumed lower bound gives $\operatorname{Ric}_{\gamma(t)}(\dot\gamma(t),\dot\gamma(t))\ge(n-1)k$.

[F7] Model functions ([[prop-model-functions-solve-the-constant-curvature-jacobi-equation]], [[def-comparison-sine-cosine-and-cotangent-functions]]): $\operatorname{sn}_k''+k\operatorname{sn}_k=0$ with $\operatorname{sn}_k(0)=0$, $\operatorname{sn}_k'(0)=1$, $\operatorname{cs}_k=\operatorname{sn}_k'$, $\operatorname{cs}_k''+k \operatorname{cs}_k=0$, $\operatorname{cs}_k(0)=1$, $\operatorname{cs}_k'(0)=0$; the comparison cotangent $\operatorname{ct}_k=\operatorname{cs}_k/\operatorname{sn}_k$ is defined where $\operatorname{sn}_k\ne0$, in particular on $(0,\pi/\sqrt k)$ for $k>0$ and on $(0,\infty)$ for $k\le0$.

[F8] Taylor expansion ([[thm-taylor-peano-remainder]]): a function that is $m$ times differentiable at $0$ satisfies $f(t)=\sum_{j=0}^{m}f^{(j)}(0)t^j/j!+o(t^m)$ as $t\to0$.

## Proof

**Proof technique:** direct: identify $\Delta_gr(q)$ with the trace $h(t_0)$ of the radial Riccati operator, use the trace Riccati inequality of the page to reduce to the scalar inequality $a'+a^2\le-k$ for $a=h/(n-1)$, and compare $a$ with the model $\operatorname{ct}_k$ by the integrating-factor argument with matched asymptotics at $t=0$.

1.1 Setup: $\Delta_gr(q)=h(t_0)$. [F1, F3, F4, F5, A1, given]
By [F4] fix the unique $v\in S_pM$ and $t_0=r(q)\in(0,c_p(v))$ with $q=\exp_p(t_0v)$; then $\gamma=\gamma_{p,v}$, $T=\dot\gamma(t_0)$, and $t_0<\tau$ by [F5]. By [F3] the operator $H=\nabla\operatorname{grad}r$ satisfies $H(T)=0$ and $H=D_tA(t_0)\circ A(t_0)^{-1}$ on $N=T^{\perp}$, so $H$ maps $N$ into $N$ and annihilates $T$. Choosing a $g_q$-orthonormal basis of $T_qM$ whose first vector is $T$ and whose remaining $n-1$ vectors form an orthonormal basis $e_1,\dots,e_{n-1}$ of $N$, the trace formula of [F1] gives $$\Delta_gr(q)=\operatorname{Hess}r(T,T)+\sum_{i=1}^{n-1}\operatorname{Hess}r(e_i,e_i) =0+\sum_{i=1}^{n-1}g_q\bigl(D_tA(t_0)A(t_0)^{-1}e_i,e_i\bigr),$$ the vanishing of $\operatorname{Hess}r(T,T)=g_q(H(T),T)$ by [F3]. Since $P_{t_0}$ is an isometry and $S(t_0)=P_{t_0}^{-1}\circ(D_tA(t_0)A(t_0)^{-1})\circ P_{t_0}$ by [F5], the sum is the trace of $S(t_0)$ over the orthonormal basis $P_{t_0}^{-1}e_1,\dots,P_{t_0}^{-1}e_{n-1}$ of $N_0$: $$\Delta_gr(q)=\operatorname{tr}S(t_0)=h(t_0).$$ [F1, F3, F4, F5, A1, given]

1.2 The scalar Riccati inequality and its asymptotics. [F2, F5, F6, given]
By [F2] the function $h=\operatorname{tr}S$ is differentiable on $(0,\tau)$ and satisfies $$h'+\frac{h^2}{n-1}+\operatorname{Ric}_{\gamma}(\dot\gamma,\dot\gamma)\le0 .$$ By [F6] the Ricci lower bound gives $\operatorname{Ric}_{\gamma(t)}(\dot\gamma(t),\dot\gamma(t))\ge(n-1)k$ at every $t\in(0,t_0]$, so $$h'(t)+\frac{h(t)^2}{n-1}\le-(n-1)k\qquad(0<t\le t_0).$$ Put $a:=h/(n-1)$, a differentiable function on $(0,\tau)$ with $a'=\frac{h'}{n-1}$ and $a^2=h^2/(n-1)^2$; dividing the inequality by the positive number $n-1>0$ gives the scalar Riccati inequality $$a'(t)+a(t)^2\le-k\qquad(0<t\le t_0).$$ Moreover $h(t)=(n-1)t^{-1}+O(t)$ by [F5], so $$a(t)=\frac1t+O(t)\qquad(t\downarrow0).$$ [F2, F5, F6, given]

1.3 The scalar comparison lemma. [given]
We use the following elementary fact, the integrating-factor comparison for Riccati inequalities with matched asymptotics at the singular endpoint. Let $0<T\le t_0$ and let $a,c:(0,T]\to\mathbb R$ be differentiable with $$a'+a^2\le-k,\qquad c'+c^2=-k\qquad\text{on }(0,T],$$ both $a(t)=1/t+O(t)$ and $c(t)=1/t+O(t)$ as $t\downarrow0$. Then $a\le c$ on $(0,T]$.

*Proof.* Put $\varphi:=a-c$. Subtracting the two equations, $$\varphi'=a'-c'\le(-a^2-k)-(-c^2-k)=-(a+c)\varphi .$$ Fix $0<\varepsilon_0<t\le T$ and define $\Phi(s):=\varphi(s)\exp\bigl(-\int_s^t(a+c)\bigr)$ for $s\in[\varepsilon_0,t]$. Since $(a+c)$ is continuous, $\Phi$ is differentiable with $$\Phi'(s)=\exp\Bigl(-\int_s^t(a+c)\Bigr) \bigl(\varphi'(s)+(a(s)+c(s))\varphi(s)\bigr)\le0 ,$$ so $\Phi$ is nonincreasing and $$\varphi(t)\le\varphi(\varepsilon_0)\exp\Bigl(-\int_{\varepsilon_0}^{t}(a+c)\Bigr).$$ By the two asymptotics, choose $\delta\in(0,T]$ so that $a+c\ge1/t$ on $(0,\delta)$. Put $\delta':=\min(\delta,t)$ and $K:=(t-\delta')\max_{[\delta',t]}|a+c|$; then $$\int_{\varepsilon_0}^{t}(a+c)\ge\int_{\varepsilon_0}^{\delta'}\frac{du}{u}-K =\log\frac{\delta'}{\varepsilon_0}-K \qquad(0<\varepsilon_0<\delta' ),$$ and hence $$\varphi(t)\le e^{K}\delta'^{-1}\varepsilon_0|\varphi(\varepsilon_0)|\longrightarrow0\qquad(\varepsilon_0\downarrow0),$$ using $\varepsilon_0|\varphi(\varepsilon_0)|\to0$; therefore $\varphi(t)\le0$. [given] ∎

2.1 The distance Laplacian is bounded by the model trace. [step 1.1, step 1.2, step 1.3, F7, given]
On the positive domain of [F7] the comparison cotangent satisfies the model Riccati equation $\operatorname{ct}_k'+\operatorname{ct}_k^2=-k$: indeed $\operatorname{cs}_k'=\operatorname{sn}_k''=-k\operatorname{sn}_k$ and $\operatorname{sn}_k'=\operatorname{cs}_k$, so $$\operatorname{ct}_k' =\frac{\operatorname{cs}_k'\operatorname{sn}_k-\operatorname{cs}_k\operatorname{sn}_k'}{\operatorname{sn}_k^2} =\frac{-k\operatorname{sn}_k^2-\operatorname{cs}_k^2}{\operatorname{sn}_k^2} =-k-\operatorname{ct}_k^2 .$$ Moreover, by [F8] with order $3$ for $\operatorname{sn}_k$ and order $2$ for $\operatorname{cs}_k$, using $\operatorname{sn}_k'''(0)=-k$ and $\operatorname{cs}_k''(0)=-k$ together with the values $\operatorname{sn}_k(0)=0$, $\operatorname{sn}_k'(0)=1$, $\operatorname{sn}_k''(0)=-k\operatorname{sn}_k(0)=0$ and $\operatorname{cs}_k(0)=1$, $\operatorname{cs}_k'(0)=0$, $$\operatorname{sn}_k(t)=t(1+O(t^2)),\qquad \operatorname{cs}_k(t)=1+O(t^2),\qquad \operatorname{ct}_k(t)=\frac1t+O(t),\qquad \operatorname{ct}_k(t)\ge\frac1{2t}$$ for $0<t<\delta_0$ and some $\delta_0>0$. By step 1.2 the function $a=h/(n-1)$ satisfies $a'+a^2\le-k$ on $(0,t_0]$ and $a(t)=t^{-1}+O(t)$; the model $c:=\operatorname{ct}_k$ satisfies $c'+c^2=-k$ on $(0,t_0]$ (the interval $(0,t_0]$ lies in the positive domain of $\operatorname{ct}_k$ by [F7] and the hypothesis on $t_0$), $c\ge1/(2t)$ near $0$, and $|a-c|=O(t)=o(1/t)$. Step 1.3 with $T:=t_0$ therefore gives $$a(t)\le\operatorname{ct}_k(t)\qquad(0<t\le t_0),\qquad\text{hence } h(t_0)\le(n-1)\operatorname{ct}_k(t_0).$$ [step 1.1, step 1.2, step 1.3, F7, given]

3.1 Conclusion and boundary cases. [step 1.1, step 2.1, given]
Combining $\Delta_gr(q)=h(t_0)$ of step 1.1 with the bound of step 2.1 gives $\Delta_gr(q)\le(n-1)\operatorname{ct}_k(r(q))$, which is the assertion. The computation takes place on the interval $(0,t_0]$, so the singular initial point $t=0$ is excluded and the first conjugate instant $\tau>t_0$ is not reached; the cut locus is excluded by the hypothesis on $q$, and the model pole at $\pi/\sqrt k$ is excluded for $k>0$ by $t_0<\pi/\sqrt k$. For $k\le0$ the model $\operatorname{ct}_k$ is defined on all of $(0,\infty)$ and no restriction on $t_0$ is imposed. In dimension $n=2$ the normal space is one-dimensional and $h=S$ is the scalar Riccati function, so the trace Riccati inequality of [F2] reduces to $S'+S^2+\operatorname{Ric}(\dot\gamma,\dot\gamma)\le0$ and step 2.1 bounds $h=S$ by $\operatorname{ct}_k$ itself, as displayed. If $\operatorname{Ric}=(n-1)k\,g$, the differential inequality of step 1.2 is an equality where the traced Cauchy–Schwarz step [[lem-trace-riccati-inequality]] is an equality; equality in the final comparison additionally depends on the preceding radial segment. The proof uses no information about $r$ other than the single point $q$ and requires neither completeness of $M$ beyond the results quoted, nor compactness; the only choice is the inherited [A1]. [step 1.1, step 2.1, given] ∎

## Source locator

Eschenburg §4, equation (4.1) and the following paragraph (printed p.15), traces the Riccati equation to $\operatorname{trace}(A)'+\operatorname{trace}(A^2)+\operatorname{Ric}(V)=0$ and compares the average $a=\operatorname{trace}(A)/(n-1)$ with the scalar model $a_k$ having the same pole, which is precisely the passage carried out in steps 1.2–2.1 above, with the singular-matched comparison done by an integrating factor. Datar §§26.1–26.2 and 28.1, pp.191–197 and 205–209, contains the same traced Riccati calculus and the comparison for the logarithmic derivative of the volume density. The proof above is carried out from the in-run trace Riccati inequality and model-function suppliers and the published distance-Hessian formula; the trace $\operatorname{tr}_g\operatorname{Hess}r=\Delta_gr$ is the in-run definition of the Laplace–Beltrami operator.
