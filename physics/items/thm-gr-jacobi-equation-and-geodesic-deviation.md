---
id: thm-gr-jacobi-equation-and-geodesic-deviation
kind: theorem
title: "The Jacobi equation, geodesic deviation and the initial-value theory of Jacobi fields"
status: published
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-jacobi-field-and-conjugate-instant, def-gr-curvature-tensor-and-derived-tensors, thm-gr-curvature-tensoriality-and-coordinate-formula, thm-gr-curvature-algebraic-symmetries, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-affine-connection-on-a-smooth-manifold, def-geodesic-of-an-affine-connection, def-covariant-derivative-along-a-curve, def-vector-field-and-section-along-a-smooth-curve, def-christoffel-symbols-of-an-affine-connection, lem-gr-connection-conditions-in-chart-components, thm-existence-and-uniqueness-of-parallel-sections, def-parallel-section-along-a-curve, lem-gr-parallel-transport-and-geodesic-speed, lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval, thm-clairaut-schwarz-mixed-partials, def-interval]
dependency_roles:
  def-gr-jacobi-field-and-conjugate-instant: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-affine-connection-on-a-smooth-manifold: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-vector-field-and-section-along-a-smooth-curve: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  thm-existence-and-uniqueness-of-parallel-sections: mathematical-premise
  def-parallel-section-along-a-curve: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 4.5: the geodesic deviation equation (4.22)-(4.24), the remark that curvature produces relative acceleration and the flatness criterion, printed pp. 46-48 (PDF pp. 47-49)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: the geodesic deviation equation (3.113) and the physical reading as tidal acceleration, printed pp. 86-88 (PDF pp. 93-95)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), section 6.1: Proposition 6.3, the geodesic-variation equation (6.2), and the matrix A of Jacobi fields with the initial conditions A(0)=0, nabla A = Id, printed pp. 159-161 (PDF pp. 159-161)"
      url: "https://link.springer.com/content/pdf/10.1007/s41114-019-0019-x.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), let $R$ be its
curvature ([[def-gr-curvature-tensor-and-derived-tensors]]), let
$I,J_0\subseteq\mathbb R$ be intervals with nonempty interior
([[def-interval]]), and let $F:J_0\times I\to M$ be a smooth map. Write
$T:=\partial_tF$ and $J^F:=\partial_rF$; a field along $F$ means a smooth
section of $F^*TM$ over $J_0\times I$, and $D_r,D_t$ are the covariant
derivatives in the two parameters
([[def-covariant-derivative-along-a-curve]]).

**(a) Curvature as the commutator of the two derivatives.** For every smooth
field $V$ along $F$,
$$\bigl(D_tD_r-D_rD_t\bigr)V=R(T,J^F)V .$$

**(b) Geodesic deviation.** Suppose in addition that for every $r\in J_0$ the
curve $t\mapsto F(r,t)$ is a geodesic with affine parameter $t$, that is
$D_tT=0$. Then $D_tJ^F=D_rT$ and
$$D_t^2J^F=R(T,J^F)T .$$
Consequently, for every $r$ the field $t\mapsto J^F(r,t)$ is a Jacobi field
along the geodesic $t\mapsto F(r,t)$
([[def-gr-jacobi-field-and-conjugate-instant]] clause (b)), and for a geodesic
variation the variation field is a Jacobi field.

**(c) Initial data.** Let $\gamma:I\to M$ be a smooth geodesic and let
$s_0\in I$. For every pair $J_0,J_1\in T_{\gamma(s_0)}M$ there exists exactly
one smooth Jacobi field $J$ along $\gamma$ with
$$J(s_0)=J_0,\qquad D_sJ(s_0)=J_1 .$$
The set of all Jacobi fields along $\gamma$ is a real vector space of
dimension $8$, and $J\mapsto\bigl(J(s_0),D_sJ(s_0)\bigr)$ is a linear
isomorphism onto $T_{\gamma(s_0)}M\oplus T_{\gamma(s_0)}M$.

**(d) The tangential component.** Let $\gamma$ be a smooth geodesic and $J$ a
smooth Jacobi field along it. Then $s\mapsto g(J,\gamma')(s)$ is affine, and
if $\gamma$ is future timelike with $g(\gamma',\gamma')=-1$, the normal
component $J^\perp$ of [[def-gr-jacobi-field-and-conjugate-instant]] clause
(e), explicitly $J^\perp=J+g(J,\gamma')\gamma'$, is again a Jacobi field
along $\gamma$.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold with metric-selected connection and curvature, a smooth two-parameter map $F$, a geodesic $\gamma$, and the data of the claims.

[L1] The curvature operator is $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$ and is a smooth $(1,3)$-tensor, whose components satisfy $R(\partial_c,\partial_d)\partial_b=\sum_aR^a{}_{bcd}\partial_a$ and $g(R(X,Y)Z,W)=R_{abcd}W^aX^cY^dZ^b$ ([[def-gr-curvature-tensor-and-derived-tensors]], [[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (a)).

[L2] In a chart, $\nabla_{\partial_b}\partial_c=\sum_a\Gamma^a{}_{bc}\partial_a$ with $\Gamma^a{}_{bc}=\Gamma^a{}_{cb}$ because $\nabla$ is torsion-free; the coordinate fields commute and mixed partials commute ([[def-christoffel-symbols-of-an-affine-connection]], [[lem-gr-connection-conditions-in-chart-components]] clause 1, [[thm-clairaut-schwarz-mixed-partials]]).

[L3] For a smooth curve $\sigma$ and a field $V$ along it, the covariant derivative along the curve has, in a chart, the component expression $D_sV^a=\partial_sV^a+\sum_{b,c}\Gamma^a{}_{bc}\partial_s\sigma^bV^c$, and satisfies $D_s(fV)=f'V+fD_sV$ ([[def-covariant-derivative-along-a-curve]], [[def-christoffel-symbols-of-an-affine-connection]], [[def-vector-field-and-section-along-a-smooth-curve]]).

[L4] Along a geodesic $D_tT=0$. Metric compatibility gives $\frac{d}{dt}g(V,W)=g(D_tV,W)+g(V,D_tW)$ for fields along it ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] clause (c), [[def-covariant-derivative-along-a-curve]]). The curvature satisfies $R(X,Y)Z=-R(Y,X)Z$ and $g(R(X,Y)Z,W)=-g(R(X,Y)W,Z)$ ([[def-geodesic-of-an-affine-connection]], [[thm-gr-curvature-algebraic-symmetries]] clause (a)).

[L5] For a smooth curve there is a parallel smooth field with any prescribed initial value; parallel transport is linear and preserves the metric, so the parallel transports of a $g$-orthonormal basis form a smooth orthonormal frame along the curve ([[thm-existence-and-uniqueness-of-parallel-sections]], [[def-parallel-section-along-a-curve]], [[lem-gr-parallel-transport-and-geodesic-speed]] clause 2).

[L6] On a compact interval, a linear first-order system $Y'=A(s)Y$ with continuous coefficient matrix has a unique solution with prescribed initial value ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]).

[L7] A Jacobi field along a geodesic is by definition a smooth field with $D_t^2J=R(\gamma',J)\gamma'$; the Jacobi operator is $J\mapsto R(\gamma',J)\gamma'$ ([[def-gr-jacobi-field-and-conjugate-instant]] clause (b)).

## Proof

**Proof technique:** direct.

1.1 (Chart computation of the commutator.) Let $V$ be a smooth field along $F$, fix a parameter pair $(r,t)$ and a chart around $F(r,t)$. By [L3] applied to the curves with the other parameter fixed, $D_rV^a=\partial_rV^a+\sum_{b,c}\Gamma^a{}_{bc}\,\partial_rF^bV^c$ and $D_tV^a=\partial_tV^a+\sum_{b,c}\Gamma^a{}_{bc}\,\partial_tF^bV^c$ (indices here are chart components of the fields). Applying $D_t$ to the first expression and $D_r$ to the second and subtracting, the second-order terms $\partial_t\partial_rV^a$ and $\partial_r\partial_tV^a$ cancel by [L2], and the remaining terms are exactly $\sum_{b,c,d}\bigl(\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}\bigr)T^c(J^F)^dV^b$, with the Christoffel-product terms collected by relabelling summed indices; this is the coordinate expression whose coefficient is the curvature component of [L1]. [L2, L3, algebra]

1.2 (The two derivatives commute on the tangent.) If $D_tT=0$, then by the component expressions of [L3] with $V=T$ and by [L2], $D_tJ^F-D_rT$ has components $\partial_t\partial_rF^a+\Gamma^a{}_{bc}T^b(J^F)^c-\partial_r\partial_tF^a-\Gamma^a{}_{bc}(J^F)^bT^c$, which vanishes because the mixed partials commute and $\Gamma^a{}_{bc}$ is symmetric. Hence $D_tJ^F=D_rT$. [L2, L3, algebra]

1.3 (Jacobi fields with prescribed initial data.) Let $p:=\gamma(s_0)$ and extend a basis $E_1(s_0),\dots,E_4(s_0)$ of $T_pM$ to a parallel frame $E_1,\dots,E_4$ along $\gamma$ by [L5]. Writing a field along $\gamma$ as $J=\sum_iJ^iE_i$, [L3] and $D_sE_i=0$ give $D_s^2J=\sum_i(J^i)''E_i$. For each $j$, define the smooth coefficient functions $C^i{}_j$ by the unique frame expansion $R(\gamma',E_j)\gamma'=\sum_i C^i{}_jE_i$; then [L1] gives $R(\gamma',J)\gamma'=\sum_{i,j}J^jC^i{}_jE_i$. The Jacobi equation is therefore equivalent to the second-order linear system $(J^i)''=\sum_jC^i{}_jJ^j$ for the coefficient functions. [L5, L1, L3, algebra]

2.1 (Identification with the curvature and conclusion of (a).) The coefficient of $T^c(J^F)^dV^b$ in step 1.1 is $\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\sum_e(\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb})$, which is the coordinate formula for $R^a{}_{bcd}$ of [L1]. Therefore $(D_tD_r-D_rD_t)V=R(T,J^F)V$ at the chosen point; the point was arbitrary and the identity is between smooth fields, so (a) holds. [step 1.1, L1, algebra]

2.2 (Solution of the linear system.) The system of step 1.3 is equivalent to the first-order system $Y'=A(s)Y$ for $Y=\bigl(J^1,\dots,J^4,(J^1)',\dots,(J^4)'\bigr)$ and the continuous $8\times8$ block matrix $A=\left(\begin{smallmatrix}0&I\\ C&0\end{smallmatrix}\right)$. By [L6], on each compact subinterval of $I$ there is a unique solution with prescribed initial value; two such solutions agree on the overlap of their intervals, so they patch to a unique solution on all of $I$. Every pair $(J_0,J_1)=(J^i(s_0),(J^i)'(s_0))$ is an admissible initial value, and since the frame is a basis, prescribing $(J_0,J_1)\in T_pM\oplus T_pM$ prescribes exactly these coefficients. [step 1.3, L5, L6, algebra]

3.1 (Deviation equation.) By step 1.2 and $D_tT=0$, $D_t^2J^F=D_tD_rT$, and by step 2.1 with $V=T$, $D_tD_rT=D_rD_tT+R(T,J^F)T=0+R(T,J^F)T$. Hence $D_t^2J^F=R(T,J^F)T$; by [L7] the field $t\mapsto J^F(r,t)$ is a Jacobi field along the geodesic $t\mapsto F(r,t)$ for each $r$, which proves (b). [step 2.1, step 1.2, L4, L7, algebra]

3.2 (Vector space and dimension.) By step 2.2 the map $J\mapsto(J(s_0),D_sJ(s_0))$ from the set of smooth Jacobi fields along $\gamma$ to $T_pM\oplus T_pM$ is well defined, linear over $\mathbb R$, injective (two Jacobi fields with the same data agree by uniqueness of step 2.2) and surjective (existence in step 2.2). It is therefore a linear isomorphism, the space of Jacobi fields has dimension $\dim(T_pM\oplus T_pM)=8$, and (c) holds. [step 2.2, algebra]

4.1 (Tangential component.) For a Jacobi field $J$ along a geodesic, put $a(s):=g(J,\gamma')$. Metric compatibility and $D_s\gamma'=0$ give $a''=g(D_s^2J,\gamma')=g(R(\gamma',J)\gamma',\gamma')=0$ by [L4], so $a$ is affine. If in addition $g(\gamma',\gamma')=-1$, the normal component defined in [[def-gr-jacobi-field-and-conjugate-instant]] is $J^\perp=J+a\gamma'$. Therefore $D_s^2J^\perp=D_s^2J+a''\gamma'+2a'D_s\gamma'+aD_s^2\gamma' =R(\gamma',J)\gamma'$. Since $J=J^\perp-a\gamma'$ and $R(\gamma',\gamma')\gamma'=0$ by the first-slot skew-symmetry of [L4], this is $R(\gamma',J^\perp)\gamma'$. Thus $J^\perp$ is a Jacobi field, proving (d). [step 3.1, step 3.2, L4, L7, algebra] ∎

## Remarks

- **The deviation equation is exact for a geodesic family.** No smallness of the separation or of the family is assumed: the equation of claim (b) holds exactly for every smooth family of affinely parametrized geodesics and every parameter value, and holds even where the family map is not an immersion. Smallness enters only in physical applications, where a family of test bodies models an infinitesimal separation.

- **What determines a Jacobi field.** Claim (c) states the initial-value theory: initial value and initial derivative at one instant determine a Jacobi field on the whole parameter interval, and the space is eight-dimensional for a four-manifold. Nothing here asserts the existence of conjugate instants; conjugacy is the existence of a nonzero Jacobi field with two zeros, characterized separately in [[lem-gr-conjugacy-via-the-exponential-map]].
