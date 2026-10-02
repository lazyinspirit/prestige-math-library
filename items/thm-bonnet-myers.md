---
id: thm-bonnet-myers
kind: theorem
title: Bonnet myers
status: draft
origin: pipeline
deps:
  - def-index-form-of-a-geodesic-segment
  - def-ricci-curvature
  - thm-hopf-rinow
  - prop-model-functions-solve-the-constant-curvature-jacobi-equation
  - def-countable-choice
  - def-riemannian-distance-on-a-connected-manifold
  - def-metric-bounded-diameter
  - def-energy-of-a-piecewise-smooth-curve
  - prop-length-energy-inequality-and-constant-speed-equality-case
  - thm-second-variation-formula-for-energy
  - lem-ricci-curvature-is-symmetric-and-basis-independent
  - def-sectional-curvature
  - def-riemann-curvature-four-tensor
  - thm-algebraic-symmetries-of-the-riemann-tensor
  - thm-existence-and-uniqueness-of-parallel-sections
  - prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume
  - def-orthogonal-complement
  - cor-double-orthogonal-complement-and-dimension
  - thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth
  - thm-sine-and-cosine-derivatives
  - thm-sine-and-cosine-addition-formulas
  - cor-trigonometric-parity-and-pythagorean-identity
  - cor-pi-is-the-first-positive-sine-zero
  - thm-chain-rule
  - thm-ftc-second-part
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Theorem 27.1.1, §27.1, printed pp.199–200: Myers' theorem"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§12, pp.59–62: Myers' theorem and the trace comparison"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a nonempty, complete, connected, boundaryless Riemannian manifold of dimension
$n\ge2$ and let $k>0$. Suppose the Ricci curvature satisfies the lower bound
$$\operatorname{Ric}_p(v,v)\ge (n-1)\,k\,g_p(v,v) \qquad\text{for every }p\in M\text{ and every }v\in T_pM.$$
Then the diameter of $(M,g)$ satisfies
$$\operatorname{diam}(M,g)\le\frac{\pi}{\sqrt k},$$
and $M$ is compact.

The second conclusion is a consequence of the first: a complete Riemannian
manifold whose diameter is finite has every closed bounded subset compact, and
$M$ itself is closed and bounded. The proof is the classical second-variation
argument: a minimizing unit-speed segment longer than $\pi/\sqrt k$ carries
$n-1$ sine test fields whose index forms are negative in total, contradicting
the minimality of the segment; the pointwise Ricci bound enters only through
the trace of the normal curvature, and no sectional-curvature bound is needed.

## Facts & Assumptions

**Given:** The nonempty complete connected boundaryless Riemannian $n$-manifold
$(M,g)$ with $n\ge2$ and the Ricci lower bound
$\operatorname{Ric}\ge(n-1)k\,g$ for some $k>0$; the inherited
$\mathrm{AC}_\omega$ of [A1].

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$
([[def-countable-choice]]), carried by the Hopf–Rinow, energy and
curvature and second-variation suppliers; the parallel initial-value
construction itself is choice-free, and all frames below are finite families.

[F1] Hopf–Rinow: for a nonempty complete connected boundaryless Riemannian manifold the
metric and geodesic completenesses are equivalent, every two points are joined
by a minimizing geodesic segment, and every closed bounded subset is compact
([[thm-hopf-rinow]]). The distance and diameter are those of
[[def-riemannian-distance-on-a-connected-manifold]] and
[[def-metric-bounded-diameter]].

[F2] Energy and length: for a piecewise smooth curve $c:[a,b]\to M$ one has
$L(c)^2\le 2(b-a)E(c)$, with equality exactly for constant speed
([[def-energy-of-a-piecewise-smooth-curve]],
[[prop-length-energy-inequality-and-constant-speed-equality-case]]).

[F3] For a fixed-endpoint two-parameter variation of a geodesic covered by the
second variation formula, the variation fields lie in
$\mathcal X_0(\gamma)$ and the mixed energy derivative equals the index form
$I_\gamma(V,W)$ ([[def-index-form-of-a-geodesic-segment]],
[[thm-second-variation-formula-for-energy]]); $I_\gamma(V,W)$ is the
integrated expression of that same index form.

[F4] Ricci curvature: for every orthonormal basis $(e_1,\dots,e_n)$ of $T_pM$,
$\operatorname{Ric}_p(X,Y)=\sum_i\operatorname{Rm}_p(e_i,X,Y,e_i)$, and
$\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$ with
$\operatorname{Rm}(X,Y,Z,W)=-\operatorname{Rm}(X,Y,W,Z)$
([[def-ricci-curvature]],
[[lem-ricci-curvature-is-symmetric-and-basis-independent]],
[[def-riemann-curvature-four-tensor]],
[[thm-algebraic-symmetries-of-the-riemann-tensor]]). For an orthonormal pair
$(X,Y)$, $\operatorname{Rm}(X,Y,Y,X)=K(\operatorname{span}\{X,Y\})$
([[def-sectional-curvature]]).

[F5] Parallel frames: for a prescribed orthonormal basis of $T_{\gamma(0)}M$
there is a unique parallel frame along $\gamma$ with those initial values, and
parallel transport preserves inner products
([[thm-existence-and-uniqueness-of-parallel-sections]],
[[prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume]]).
By [[cor-double-orthogonal-complement-and-dimension]] and
[[def-orthogonal-complement]], the orthogonal complement of the line
$\mathbb R\dot\gamma(0)$ has dimension $n-1\ge1$, so it contains a unit vector.

[F6] The exponential map is smooth on its domain
([[thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth]]), and
on a complete manifold it is defined on the whole tangent space ([F1]);
consequently $t\mapsto\exp_{\gamma(t)}(s\varphi(t)E(t))$ is smooth in
$(s,t)$ for smooth $\gamma$, $\varphi$ and $E$.

[F7] Sine calculus: $\sin'=\cos$, $\cos'=-\sin$
([[thm-sine-and-cosine-derivatives]]), the chain rule holds
([[thm-chain-rule]]), $\sin^2+\cos^2=1$
([[cor-trigonometric-parity-and-pythagorean-identity]]),
$\cos(2u)=\cos^2u-\sin^2u$
([[thm-sine-and-cosine-addition-formulas]]), $\sin\pi=0$ with $\pi>0$ the
first positive zero of the sine ([[cor-pi-is-the-first-positive-sine-zero]]),
and $\int_a^bG'=G(b)-G(a)$ for a differentiable $G$ with integrable derivative
([[thm-ftc-second-part]]).

## Proof

1.1 Suppose some pair exceeds the proposed bound, and choose a minimizing segment. [F1, given]
Assume, toward a contradiction, that there are points $p,q\in M$ with
$l:=d_g(p,q)>\pi/\sqrt k$; by [F1]
there is a minimizing geodesic segment $\gamma:[0,l]\to M$ from $p$ to $q$,
which after affine reparametrization is unit speed, with $\gamma(0)=p$,
$\gamma(l)=q$ and $L(\gamma)=l=d_g(p,q)$. [F1, given]

1.2 The minimizing segment minimizes energy as well as length. [F2, given]
For any piecewise smooth competitor $c:[0,l]\to M$ with $c(0)=p$ and
$c(l)=q$, [F2] gives
$$2l\,E(c)\ge L(c)^2\ge d_g(p,q)^2=l^2,$$
so $E(c)\ge l/2$; since $\gamma$ is unit speed,
$E(\gamma)=\frac12\int_0^l1\,dt=l/2$. Hence $E(\gamma)\le E(c)$ for every
such $c$, and the endpoint-fixed energy functional attains its minimum at
$\gamma$. [F2, given]

2.1 Orthonormal normal frame, sine test fields, and nonnegativity of their index forms. [F3, F5, F6, F7, step 1.2]
By [F5] choose an orthonormal parallel frame $E_1,\dots,E_{n-1}$ along
$\gamma$ whose initial vectors form an orthonormal basis of the orthogonal
complement of $\mathbb R\dot\gamma(0)$; then each $E_i(t)$ is normal to
$\dot\gamma(t)$ and $(E_1(t),\dots,E_{n-1}(t),\dot\gamma(t))$ is an
orthonormal basis of $T_{\gamma(t)}M$. Put
$$\varphi(t):=\sin\!\Bigl(\frac{\pi t}{l}\Bigr),\qquad V_i(t):=\varphi(t)E_i(t),\qquad t\in[0,l].$$
By [F7] $\varphi(0)=\varphi(l)=\sin0=\sin\pi=0$, and $\varphi$ and the $E_i$
are smooth, so $V_i\in\mathcal X_0(\gamma)$ for every $i$. For fixed $i$ and
small $s$, define $\alpha_i(s,t):=\exp_{\gamma(t)}(s\,\varphi(t)E_i(t))$;
by [F6] this is smooth in $(s,t)$, its central curve is the geodesic $\gamma$,
and $\alpha_i(s,0)=\gamma(0)$, $\alpha_i(s,l)=\gamma(l)$ for every $s$
because $\varphi$ vanishes at the endpoints. Its variation field at $s=0$ is
$V_i$, so [F3] applied to the two-parameter family
$F(s,r,t):=\alpha_i(s+r,t)$ — whose two variation fields both equal $V_i$ —
identifies $\partial_s\partial_rE(F)$ at $(0,0)$ with $I_\gamma(V_i,V_i)$.
That second derivative is the second derivative of $s\mapsto E(\alpha_i(s,\cdot))$
at its minimum $s=0$ from step 1.2, hence is $\ge0$; therefore
$$I_\gamma(V_i,V_i)\ge0\qquad\text{for every }i=1,\dots,n-1.$$
[F3, F5, F6, F7, step 1.2]

3.1 Computing the index forms and summing the Ricci trace. [F4, F7, step 2.1]
Since $E_i$ is parallel, $D_tV_i=\varphi'E_i$ and
$g(D_tV_i,D_tV_i)=\varphi'^2$; the curvature term is
$g(R(V_i,\dot\gamma)\dot\gamma,V_i)=\varphi^2g(R(E_i,\dot\gamma)\dot\gamma,E_i)
=\varphi^2K_i$ with
$$K_i(t):=K(\operatorname{span}\{E_i(t),\dot\gamma(t)\}) =\operatorname{Rm}(E_i,\dot\gamma,\dot\gamma,E_i),$$
by [F4] and the orthonormality of the pair. Hence the definition of the index
form in [F3] gives
$$I_\gamma(V_i,V_i)=\int_0^l\bigl(\varphi'(t)^2-K_i(t)\varphi(t)^2\bigr)\,dt.$$
On the interval $[0,l]$ the elementary integrals are
$$\int_0^l\varphi^2=\int_0^l\frac{1-\cos(2\pi t/l)}{2}\,dt=\frac l2,$$
since $\frac{d}{dt}\frac{l}{4\pi}\sin(2\pi t/l)=\frac12\cos(2\pi t/l)$ and
$\sin(2\pi)=\sin0=0$ by [F7], and likewise
$$\int_0^l\varphi'^2=\frac{\pi^2}{l^2}\int_0^l\cos^2\!\Bigl(\frac{\pi t}{l}\Bigr)dt =\frac{\pi^2}{l^2}\cdot\frac l2=\frac{\pi^2}{2l},$$
using $\cos^2=(1+\cos(2\cdot))/2$ from [F7]. Therefore
$$\sum_{i=1}^{n-1}I_\gamma(V_i,V_i) =(n-1)\frac{\pi^2}{2l}-\int_0^l\Bigl(\sum_{i=1}^{n-1}K_i(t)\Bigr)\varphi(t)^2\,dt.$$
By [F4] the frame $(E_1,\dots,E_{n-1},\dot\gamma)$ is orthonormal, so
$$\sum_{i=1}^{n-1}K_i(t)=\sum_{i=1}^{n-1}\operatorname{Rm}(E_i,\dot\gamma,\dot\gamma,E_i) =\operatorname{Ric}_{\gamma(t)}(\dot\gamma(t),\dot\gamma(t)) -\operatorname{Rm}(\dot\gamma,\dot\gamma,\dot\gamma,\dot\gamma) =\operatorname{Ric}(\dot\gamma,\dot\gamma),$$
the last curvature term vanishing by the skew-symmetry in [F4] applied to its
last two slots. The hypothesis $\operatorname{Ric}\ge(n-1)k\,g$ and
$g(\dot\gamma,\dot\gamma)=1$ thus give
$\sum_iK_i(t)\ge(n-1)k$ for every $t$, and since $l>0$,
$$\sum_{i=1}^{n-1}I_\gamma(V_i,V_i) \le(n-1)\frac{\pi^2}{2l}-(n-1)\frac{kl}{2} =\frac{(n-1)l}{2}\Bigl(\frac{\pi^2}{l^2}-k\Bigr)<0,$$
because $l>\pi/\sqrt k$ is equivalent to $\pi^2/l^2<k$. [F4, F7, step 2.1]

4.1 The contradiction gives the diameter bound. [step 2.1, step 3.1]
Step 2.1 gives $I_\gamma(V_i,V_i)\ge0$ for every $i$, hence
$\sum_iI_\gamma(V_i,V_i)\ge0$, while step 3.1 gives
$\sum_iI_\gamma(V_i,V_i)<0$. This contradiction shows that no pair can have distance greater than
$\pi/\sqrt k$. Fix $p_0\in M$, possible by nonemptiness. Then
$M\subset B(p_0,\pi/\sqrt k+1)$, so $M$ is bounded. Its diameter is now
defined by [F1] as the supremum of pairwise distances and is at most
$\pi/\sqrt k$. [step 2.1, step 3.1]

5.1 Compactness and boundary conventions. [F1, step 4.1]
By step 4.1 the manifold is bounded: $d_g(x,y)\le\pi/\sqrt k$ for all
$x,y$. It is closed in itself, so [F1] makes $M$ compact. In dimension $n=1$
the normal space is zero, there are no test fields $V_i$, and the theorem has
no content — consistently, a complete one-dimensional manifold is
$\mathbb R$ or a circle and the bound is stated only for $n\ge2$. The strict
positivity $k>0$ is used in the strict inequality $\pi^2/l^2<k$; for $k=0$
the statement is false as a diameter bound (Euclidean space is complete with
nonnegative Ricci and is unbounded; its diameter is undefined under
[[def-metric-bounded-diameter]]). The case $l=\pi/\sqrt k$ is not
excluded by the argument and is attained by the round sphere of curvature $k$,
so the bound is sharp. All frames and test fields were chosen as finite
explicit families from the initial orthonormal frame, so nothing beyond the
inherited [A1] is selected. [F1, step 4.1] ∎
