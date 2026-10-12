---
id: ex-gr-flat-metric-in-cylindrical-coordinates
kind: example
title: "A flat metric whose Christoffel symbols never vanish: flat space in cylindrical coordinates"
status: draft
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-christoffel-symbols-of-an-affine-connection, def-gr-inverse-metric-and-musical-isomorphisms, thm-gr-curvature-tensoriality-and-coordinate-formula, thm-gr-curvature-algebraic-symmetries, def-gr-curvature-tensor-and-derived-tensors, thm-gr-jacobi-equation-and-geodesic-deviation, def-covariant-derivative-along-a-curve, def-geodesic-of-an-affine-connection]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-jacobi-equation-and-geodesic-deviation: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: the Christoffel symbols of the plane in polar coordinates (3.22)-(3.25) with Gamma^r_{theta theta} = -r and Gamma^theta_{r theta} = 1/r, and the remark that connection coefficients vanish in Cartesian but not in curvilinear coordinates, printed pp. 60-61 (PDF pp. 67-68)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.4: the coordinate formula (3.39) for the Riemann tensor, printed pp. 130-131 (PDF pp. 137-138); section 3.3.2 on curvature as the obstruction to flattening coordinates"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Example

On the open set $\Omega:=\{x\in\mathbb R^4:x^1>0\}$ with the identity chart
$x=(x^0,x^1,x^2,x^3)$ consider the metric
$$g:=-(dx^0)^2+(dx^1)^2+(x^1)^2(dx^2)^2+(dx^3)^2,\qquad N:=\partial_0 ,$$
and let $\nabla$ be its metric-selected connection and $R$ its curvature
([[def-gr-smooth-lorentzian-objects]], [[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]],
[[def-gr-curvature-tensor-and-derived-tensors]]). Writing
$X:=x^1\cos x^2$ and $Y:=x^1\sin x^2$, the chain rule gives
$dX=\cos x^2\,dx^1-x^1\sin x^2\,dx^2$ and
$dY=\sin x^2\,dx^1+x^1\cos x^2\,dx^2$, hence
$dX^2+dY^2=(dx^1)^2+(x^1)^2(dx^2)^2$: the displayed metric is the flat metric
$-(dx^0)^2+dX^2+dY^2+(dx^3)^2$ written in the cylindrical coordinates
$(x^0,x^1,x^2,x^3)$. The verification below uses only the displayed
components.

1. The only nonzero Christoffel symbols of $\nabla$ in this chart are
   $$\Gamma^1{}_{22}=-x^1,\qquad \Gamma^2{}_{12}=\Gamma^2{}_{21}=\frac{1}{x^1},$$
   so no Christoffel symbol vanishes at any point of $\Omega$.
2. The curvature vanishes identically, $R=0$, even though the chart has
   nonvanishing Christoffel symbols everywhere.
3. Consequently $R(T,J)T=0$ for every geodesic tangent $T$ and every field
   $J$ along it: for every smooth family of affinely parametrized geodesics
   the deviation equation reads $D_s^2J=0$, with no tidal term.

## Facts & Assumptions

**Given:** The open set $\Omega=\{x^1>0\}\subseteq\mathbb R^4$ with the identity chart, the metric $g=\operatorname{diag}(-1,1,(x^1)^2,1)$, its metric-selected connection $\nabla$ and curvature $R$.

[L1] The metric $g$ is a smooth Lorentzian metric of signature $(-,+,+,+)$ on $\Omega$ with time orientation $N=\partial_0$, and $\nabla$ exists, is unique, and has Christoffel symbols $\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$ in the identity chart, with $g^{ad}$ the matrix inverse of $g_{ab}$ ([[def-gr-smooth-lorentzian-objects]], [[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] clause (a), [[def-christoffel-symbols-of-an-affine-connection]], [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L2] The curvature components in a chart are $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\sum_e(\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb})$ ([[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (b), [[def-gr-curvature-tensor-and-derived-tensors]] clause (b)).

[L3] The curvature is antisymmetric in the loop indices: $R^a{}_{bcd}=-R^a{}_{bdc}$ ([[thm-gr-curvature-algebraic-symmetries]] clause (a)).

[L4] For a smooth family $F$ of affinely parametrized geodesics with $T=\partial_tF$ and $J=\partial_rF$, the deviation equation $D_t^2J=R(T,J)T$ holds ([[thm-gr-jacobi-equation-and-geodesic-deviation]] clause (b), [[def-covariant-derivative-along-a-curve]], [[def-geodesic-of-an-affine-connection]]).

## Verification

**Proof technique:** direct.

1.1 (Christoffel symbols.) In the identity chart only $g_{22}=(x^1)^2$ is nonconstant, with $\partial_1g_{22}=2x^1$, and $g^{22}=(x^1)^{-2}$; by [L1] the possible nonzero symbols are therefore $\Gamma^1{}_{22}=\tfrac12g^{11}(-\partial_1g_{22})=-x^1$, $\Gamma^2{}_{12}=\Gamma^2{}_{21}=\tfrac12g^{22}\partial_1g_{22}=1/x^1$, and every other symbol has a factor $\partial_ag_{bc}$ with $a\neq1$ or a constant metric component and vanishes. All displayed symbols are nonzero on all of $\Omega$ because $x^1>0$ there. [L1, algebra]

2.1 (Vanishing outside a finite list.) Let $a,b,c,d\in\{0,1,2,3\}$. Each of the four terms of [L2] contains a factor $\Gamma^a{}_{\cdot\cdot}$, so $R^a{}_{bcd}=0$ unless $a\in\{1,2\}$. If $c\notin\{1,2\}$ then $c\in\{0,3\}$: the first term vanishes because $\Gamma^a{}_{db}$ depends on $x^1$ alone, so $\partial_0$ and $\partial_3$ annihilate it; the second and fourth vanish because they contain $\Gamma^a{}_{cb}$ or $\Gamma^e{}_{cb}$, whose lower index pair contains $c\notin\{1,2\}$; the third vanishes because $\Gamma^a{}_{ce}=0$. If $d\notin\{1,2\}$: the first and third terms contain $\Gamma^a{}_{db}$ or $\Gamma^e{}_{db}$ with $d\notin\{1,2\}$ and vanish, the second vanishes because $\partial_d=0$, and the fourth contains $\Gamma^a{}_{de}=0$. Hence $R^a{}_{bcd}$ can be nonzero only when $a\in\{1,2\}$ and $c,d\in\{1,2\}$; by [L3] it then suffices to check the eight components $R^a{}_{b12}$ with $a\in\{1,2\}$ and $b\in\{0,1,2,3\}$. [L2, step 1.1, L3, algebra]

2.2 (Components with a lower index outside the block.) Let $b\notin\{1,2\}$. In $R^a{}_{b12}$ the first term is $\partial_1\Gamma^a{}_{2b}=0$ and the second is $\partial_2\Gamma^a{}_{1b}=0$ because both symbols have the lower index $b\notin\{1,2\}$; the third term contains $\Gamma^e{}_{2b}=0$ and the fourth contains $\Gamma^e{}_{1b}=0$ for the same reason. Hence $R^a{}_{b12}=0$ for $b\in\{0,3\}$ and $a\in\{1,2\}$. [L2, step 1.1, algebra]

3.1 (The four remaining components.) By steps 2.1 and 2.2 only $R^1{}_{112}$, $R^1{}_{212}$, $R^2{}_{112}$ and $R^2{}_{212}$ remain. Term by term, $\Gamma^1{}_{1e}=0$ for all $e$ and $\Gamma^e{}_{11}=0$ for all $e$, so the middle products vanish in the surviving components and $R^1{}_{112}=0$: using step 1.1 and the fourth term $-\Gamma^1{}_{2e}\Gamma^e{}_{12}$ with $e=2$, $$R^1{}_{212}=\partial_1\Gamma^1{}_{22}-\partial_2\Gamma^1{}_{12}-0-\Gamma^1{}_{22}\Gamma^2{}_{12}=-1+\Bigl(-x^1\Bigr)\Bigl(-\frac{1}{x^1}\Bigr)=0$$ and $$R^2{}_{112}=\partial_1\Gamma^2{}_{21}-\partial_2\Gamma^2{}_{11}+\Gamma^2{}_{12}\Gamma^2{}_{21}-0=-\frac{1}{(x^1)^2}+\frac{1}{(x^1)^2}=0 ,$$ while every term of $R^1{}_{112}$ and of $R^2{}_{212}$ contains a vanishing symbol, so those two components are $0$ as well. [step 2.1, step 2.2, L2, algebra]

4.1 (Conclusion and consequence.) Steps 2.1, 2.2 and 3.1 show that every component $R^a{}_{bcd}$ vanishes at every point of $\Omega$, so $R=0$, although step 1.1 shows that the Christoffel symbols do not vanish anywhere. Nonvanishing connection coefficients in curvilinear coordinates are chart artifacts, not curvature: no coordinate-invariant conclusion can be drawn from them. By [L4], for every smooth family $F$ of affinely parametrized geodesics the variation field satisfies $D_s^2J=R(T,J)T=0$: the congruence has no tidal term, and its deviation is governed only by the affine initial data. [step 1.1, step 3.1, L4, given] ∎

## Remarks

The metric is flat and the identity chart on $\Omega$ is not a point-normal
chart at any point, yet no Christoffel symbol vanishes. The vanishing of
Christoffel symbols is therefore a property of a chart at a point and not a
property of the geometry; only the curvature computed above, which is the
second-order chart-independent information
([[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (a)), can
detect the difference between flat space and a genuinely curved spacetime.
