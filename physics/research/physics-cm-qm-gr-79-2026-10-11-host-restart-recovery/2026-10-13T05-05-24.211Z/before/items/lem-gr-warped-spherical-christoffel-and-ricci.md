---
id: lem-gr-warped-spherical-christoffel-and-ricci
kind: lemma
title: "The warped product of a two-dimensional Lorentzian base with a round sphere: Christoffel symbols and Ricci tensor"
status: draft
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-smooth-covariant-two-tensor-field, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-curvature-tensor-and-derived-tensors, def-christoffel-symbols-of-an-affine-connection, def-gr-tensor-fields-and-components, def-gr-inverse-metric-and-musical-isomorphisms, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, def-smooth-manifold, def-euclidean-spheres-and-closed-balls, ex-the-round-metric-on-the-sphere-as-an-induced-metric, lem-gr-covariant-two-tensor-transformation-law, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, def-c-r-and-smooth-maps-between-smooth-manifolds, def-rational-power, def-interval, thm-gr-curvature-tensoriality-and-coordinate-formula, def-countable-choice, def-derivative, def-lorentz-form-and-inertia]
dependency_roles:
  def-lorentz-form-and-inertia: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-euclidean-spheres-and-closed-balls: mathematical-premise
  ex-the-round-metric-on-the-sphere-as-an-induced-metric: mathematical-premise
  lem-gr-covariant-two-tensor-transformation-law: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-rational-power: mathematical-premise
  def-interval: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  def-countable-choice: mathematical-premise
  def-derivative: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7 (7.4)-(7.20): the general spherically symmetric warped metric in coordinates with the sphere factor r^2 dOmega^2, the connection components and the reduction of the vacuum equations to functions of r (Birkhoff setup), printed pp. 167-169 (PDF pp. 174-176)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 6.1.1: the spherically symmetric ansatz ds^2 = -f(r)h(t)dt^2 + g(r)dr^2 + r^2 dOmega^2 and the reduction steps of the Birkhoff argument, printed pp. 233-235 (PDF pp. 240-242)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $V\subseteq\mathbb R^2$ be a nonempty open set with global coordinates
$y=(y^0,y^1)$ ([[def-interval]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]),
let $(q_{AB})$ be a smooth symmetric $2\times2$ matrix of functions on $V$
with

$$\Delta_q(y):=\det\bigl(q_{AB}(y)\bigr)<0\qquad(y\in V),$$

so that $q$ is a smooth symmetric covariant $2$-tensor field on $V$ whose value
at every point is nondegenerate with inertia $(1,1,0)$
([[def-gr-smooth-covariant-two-tensor-field]], [[def-lorentz-form-and-inertia]]), and let $r:V\to(0,\infty)$ be
a smooth function. Indices $A,B,C,D$ run over $\{0,1\}$ and indices
$i,j,k,l$ over the sphere directions below. Define on $V$:

$$(q^{AB}):=(q_{AB})^{-1},\qquad \Gamma^A{}_{BC}:=\tfrac12\sum_Dq^{AD}\bigl(\partial_Bq_{DC}+\partial_Cq_{BD}-\partial_Dq_{BC}\bigr),$$

$$\operatorname{Hess}_{AB}r:=\partial_A\partial_Br-\sum_C\Gamma^C{}_{AB}\,\partial_Cr, \qquad \Delta_qr:=\sum_{A,B}q^{AB}\operatorname{Hess}_{AB}r, \qquad z:=\sum_{A,B}q^{AB}\partial_Ar\,\partial_Br .$$

Further define

$$R^A{}_{BCD}:=\partial_C\Gamma^A{}_{DB}-\partial_D\Gamma^A{}_{CB} +\sum_E\bigl(\Gamma^A{}_{CE}\Gamma^E{}_{DB}-\Gamma^A{}_{DE}\Gamma^E{}_{CB}\bigr), \qquad R_{ABCD}:=\sum_Eq_{AE}R^E{}_{BCD},$$

$$\operatorname{Ric}(q)_{BD}:=\sum_{A,C}q^{AC}R_{ABCD},\qquad S_q:=\sum_{B,D}q^{BD}\operatorname{Ric}(q)_{BD}.$$

Let $S^2:=\{y\in\mathbb R^3:\lVert y\rVert_2=1\}$ be the unit Euclidean
sphere with its induced smooth structure and round metric $\gamma_{S^2}$
([[def-euclidean-spheres-and-closed-balls]],
[[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]), let
$M:=V\times S^2$ carry the product smooth structure
([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]),
and let $\pi:M\to V$ and $\iota:M\to S^2$ be the projections. Define the
global symmetric covariant $2$-tensor

$$g:=\pi^*q+r^2\,\iota^*\gamma_{S^2}$$

on $M$, where $r$ in this formula is pulled back from $V$. In any product
chart $(y^0,y^1,\xi^2,\xi^3)$, let $\gamma_{ij}$ be the round-metric
components of the angular chart. The components of $g$ are

$$g_{AB}:=q_{AB},\qquad g_{Ai}:=0,\qquad g_{ij}:=r^2\,\gamma_{ij} \qquad(A,B\in\{0,1\},\ i,j\in\{2,3\}),$$

Then:

**(a) The metric.** The global pullback formula defines a smooth symmetric
covariant $2$-tensor field $g$ on $M$; at every point it is nondegenerate
with inertia $(3,1,0)$, so
$(M,g)$ is a smooth Lorentzian four-manifold of signature $(-,+,+,+)$
([[def-gr-smooth-lorentzian-objects]]).

**(b) Christoffel symbols.** Let $\nabla$ be the metric-selected connection of
$g$, unique by [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]
clause (b) ([[def-gr-metric-selected-connection]]), and let
$\Gamma^\mu{}_{\nu\rho}$ be its Christoffel symbols in a product chart. Then
the only nonzero symbols, beyond the displayed lower-index symmetry
$\Gamma^\mu{}_{\nu\rho}=\Gamma^\mu{}_{\rho\nu}$, are

$$\Gamma^A{}_{BC}\ \text{of the first display},\qquad \Gamma^i{}_{Aj}=\frac{\partial_Ar}{r}\,\delta^i{}_j,\qquad \Gamma^A{}_{ij}=-r\,q^{AB}\partial_Br\,\gamma_{ij},\qquad \Gamma^i{}_{jk}\ \text{the round-sphere symbols in the chosen chart},$$

In a spherical-polar chart these are $\Gamma^2{}_{33}=-\sin\vartheta\cos\vartheta$
and $\Gamma^3{}_{23}=\Gamma^3{}_{32}=\cot\vartheta$, with all other
$\Gamma^i{}_{jk}$ vanishing. Pole charts use their own round-metric symbols.

**(c) Ricci tensor.** With $\operatorname{Ric}$ the Ricci tensor of $\nabla$
([[def-gr-curvature-tensor-and-derived-tensors]] clause (c)), in every product
chart

$$\operatorname{Ric}_{AB}=\operatorname{Ric}(q)_{AB}-\frac{2}{r}\operatorname{Hess}_{AB}r, \qquad \operatorname{Ric}_{Ai}=0,\qquad \operatorname{Ric}_{ij}=\bigl(1-z-r\Delta_qr\bigr)\gamma_{ij}.$$

**(d) Scope.** The statements are identities of the displayed component
functions in product charts and use no field equation, no vacuum condition and
no sign or positivity assumption on $s$; nothing is asserted about
completeness, geodesics, extensions or the physical reading of the coordinates.
The hypothesis $\Delta_q<0$ is used for nondegeneracy and inertia of $g$; it is
the only signature input.

## Facts & Assumptions

**Given:** An open set $V\subseteq\mathbb R^2$, a smooth symmetric matrix $q_{AB}$ with $\det q<0$ on $V$, a smooth $r:V\to(0,\infty)$, the product manifold $M=V\times S^2$, the assigned components $g_{AB}=q_{AB}$, $g_{Ai}=0$, $g_{ij}=r^2\gamma_{ij}$ in product charts, and the auxiliary functions of the statement.

[L1] A smooth symmetric covariant $2$-tensor field on a smooth manifold is a family of smooth bilinear forms whose chart components transform by the covariant $2$-tensor law on overlaps ([[def-gr-smooth-covariant-two-tensor-field]], [[lem-gr-covariant-two-tensor-transformation-law]], [[def-gr-tensor-fields-and-components]]).

[L2] The product $M=V\times S^2$ with the product smooth structure is a smooth four-manifold without boundary; its projections are smooth and product charts cover $M$, including charts about the two poles. On the dense regular angular locus the polar round-metric components are $\gamma_{22}=1$, $\gamma_{23}=\gamma_{32}=0$, $\gamma_{33}=\sin^2\vartheta$; in every sphere chart the components transform as a $(0,2)$-tensor ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]], [[def-smooth-manifold]], [[def-euclidean-spheres-and-closed-balls]], [[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]).

[L3] The Levi-Civita theorem for a smooth four-manifold with a smooth nondegenerate symmetric covariant $2$-tensor field supplies the unique metric-selected connection and its Christoffel symbols $\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$ in every chart ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] clauses (a)-(b), [[def-gr-metric-selected-connection]], [[def-christoffel-symbols-of-an-affine-connection]]).

[L4] Sums, products, quotients, powers and compositions of smooth functions are smooth and satisfy the usual derivative rules; $r>0$ on $V$ and $\sin\vartheta>0$ on the polar-chart domain $0<\vartheta<\pi$ ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-derivative]], [[def-interval]], [[def-rational-power]]).

[L5] The inverse of the block matrix $\operatorname{diag}(q_{AB},r^2\gamma_{ij})$ is the block matrix $\operatorname{diag}(q^{AB},r^{-2}\gamma^{ij})$ with $\gamma^{ij}$ the inverse of the round metric; the components of the Ricci tensor are those of [[def-gr-curvature-tensor-and-derived-tensors]] clause (c) with components $R^a{}_{bcd}$ of clause (b) and the coordinate formula of [[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (b), applied on the locally time-oriented restrictions constructed in step 2.4 ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-gr-curvature-tensor-and-derived-tensors]], [[thm-gr-curvature-tensoriality-and-coordinate-formula]]).

[L6] The coordinate derivations $\partial_a$ form a basis of each tangent space in a chart, the Christoffel symbols are those functions with $\nabla_{\partial_b}\partial_c=\sum_a\Gamma^a{}_{bc}\partial_a$, and all index sums in the displays are finite ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]], [[def-christoffel-symbols-of-an-affine-connection]], [[def-countable-choice]]).


## Proof

**Proof technique:** define the warped metric globally with the round-metric pullback, compute in local sphere charts (using polar coordinates for the explicit Ricci calculation), and extend the smooth tensor identities to the poles by continuity.

1.1 (Global smooth tensor.) The product projection $\pi:M\to V$ and sphere projection $\iota:M\to S^2$ are smooth by [L2]. Thus $\pi^*q+r^2\iota^*\gamma_{S^2}$ is a globally defined smooth symmetric covariant $2$-tensor field; its product-chart components are exactly $g_{AB}=q_{AB}$, $g_{Ai}=0$, $g_{ij}=r^2\gamma_{ij}$. This proves the global tensor assertion, including the pole charts. [L1, L2, L4, given]

1.2 (Preliminary identities.) On $V$, differentiating $\sum_Bq^{AB}q_{BC}=\delta^A{}_C$ gives $\partial_Dq^{AB}=-\sum_{E,F}q^{AE}q^{BF}\partial_Dq_{EF}$, and substituting the definition of $\Gamma^A{}_{BC}$ shows that the identity $\partial_Cq_{AB}=\sum_D(\Gamma^D{}_{CA}q_{DB}+\Gamma^D{}_{CB}q_{AD})$ holds, because its right-hand side equals $\tfrac12(\partial_Cq_{AB}+\partial_Aq_{CB}-\partial_Bq_{CA})+\tfrac12(\partial_Cq_{BA}+\partial_Bq_{CA}-\partial_Aq_{CB})=\partial_Cq_{AB}$; moreover $\partial_C(r^2\gamma_{ij})=2r\partial_Cr\,\gamma_{ij}$, and the inverse-metric block $\operatorname{diag}(q^{AB},r^{-2}\gamma^{ij})$ has no mixed entries. [L2, L4, L5, given, algebra]

2.1 (Nondegeneracy and inertia.) At a point $(y,\omega)\in M$ the coordinate derivations form a basis of the tangent space by [L6], and the matrix of $g$ in the product chart frame is block diagonal with the $2\times2$ block $q_{AB}(y)$ and the $2\times2$ block $r(y)^2\gamma_{ij}(\omega)$. The first block has determinant $\Delta_q(y)<0$, hence two eigenvalues of opposite signs and no zero eigenvalue; the second block is positive definite because $r(y)^2>0$ and the round metric is positive definite. Accordingly $g$ has one negative and three positive eigenvalues, that is, inertia $(3,1,0)$, and is nondegenerate, so by [L3] its metric-selected connection exists and is unique. [L2, L3, L5, L6, step 1.1, given, algebra]

2.2 (Base-type symbols.) In the Christoffel formula of [L3] with all three indices $A,B,C\in\{0,1\}$, all entries $g_{AB}=q_{AB}$ are independent of the angular coordinates and $g_{Ai}=0$, so the formula reduces to $\Gamma^A{}_{BC}=\tfrac12q^{AD}(\partial_Bq_{DC}+\partial_Cq_{BD}-\partial_Dq_{BC})$, the displayed base symbols. If exactly one lower index is angular, then either the differentiations produce only $g_{Ai}=0$ terms or the angular derivative annihilates the base block, and the resulting expression vanishes; this gives $\Gamma^A{}_{Bi}=0$ and $\Gamma^i{}_{AB}=0$. [L3, L4, step 1.2, algebra]

2.3 (Mixed and sphere-type symbols.) With both lower indices angular, the formula gives $\Gamma^A{}_{ij}=\tfrac12g^{AD}(\partial_ig_{Dj}+\partial_jg_{Di}-\partial_Dg_{ij})=-\tfrac12q^{AD}\partial_D(r^2\gamma_{ij})=-r\,q^{AD}\partial_Dr\,\gamma_{ij}$, using $g_{Ai}=0$, $\partial_ig_{AB}=0$ and step 1.2. With one lower index angular and one base, $\Gamma^i{}_{Aj}=\tfrac12g^{ik}(\partial_Ag_{kj}+\partial_jg_{kA}-\partial_kg_{Aj})=\tfrac12r^{-2}\gamma^{ik}\partial_A(r^2\gamma_{kj})=(\partial_Ar/r)\delta^i{}_j$, and $\Gamma^i{}_{jA}$ is the same by symmetry. Finally, with all three indices angular the formula is $\tfrac12\gamma^{ik}(\partial_j\gamma_{kl}+\partial_l\gamma_{kj}-\partial_k\gamma_{jl})$, the round-sphere symbols of the statement. This proves (b). [L3, L4, step 1.2, algebra]

2.4 (Local time orientations and intrinsic curvature.) Fix $y_0\in V$. Since $q(y_0)$ has inertia $(1,1,0)$, there is a vector $v\in\mathbb R^2$ with $q(y_0)(v,v)<0$. Continuity gives an open neighborhood $W\subset V$ of $y_0$ on which the constant base field $v^A\partial_A$ is timelike. Its lift $N_W$ to $W\times S^2$ is smooth and satisfies $g(N_W,N_W)=q(v,v)<0$, so [L5]'s time-oriented curvature suppliers apply there. The global connection supplied by [L3] restricts to the same unique metric-selected connection on each such open set. The curvature operator, lowering and contraction formulas of [L5] contain no $N_W$, so their tensors agree on overlaps and define smooth global curvature and Ricci tensors even when no global time orientation exists. No simultaneous choice of local orientations is needed: this argument is at an arbitrary point. [L3, L5, step 2.1, given, algebra]

3.1 (The trace identity.) Metric compatibility in step 1.2 gives $\partial_Aq^{AB}=-\Gamma^A{}_{AD}q^{DB}-\Gamma^B{}_{AD}q^{AD}.$ Consequently $\partial_A(q^{AB}\partial_Br)=q^{AB}\partial_A\partial_Br-\Gamma^A{}_{AD}q^{DB}\partial_Br-\Gamma^B{}_{AD}q^{AD}\partial_Br.$ Adding $\Gamma^A{}_{AB}q^{BD}\partial_Dr$ cancels the first connection term after relabelling dummy indices. Relabel the remaining term and use symmetry of $q^{AB}$ and of the lower connection indices to obtain $\Delta_qr=q^{AB}\partial_A\partial_Br-q^{AB}\Gamma^C{}_{AB}\partial_Cr=\partial_A(q^{AB}\partial_Br)+\Gamma^A{}_{AB}q^{BD}\partial_Dr.$ This is the trace identity used in the Ricci contraction below. [L4, step 1.2, step 2.2, algebra]

3.2 (Preparation of the Ricci computation.) By [L5] and step 2.4, locally at every base point the Ricci components are $\operatorname{Ric}_{bd}=\sum_a\partial_a\Gamma^a{}_{db}-\sum_a\partial_d\Gamma^a{}_{ab}+\sum_{a,e}\Gamma^a{}_{ae}\Gamma^e{}_{db}-\sum_{a,e}\Gamma^a{}_{de}\Gamma^e{}_{ab}$, with all indices running over $\{0,1,2,3\}$. In the sums we separate the base values $a,e\in\{0,1\}$ from the sphere values; by the symbol list of (b) the nonvanishing symbols are the base symbols, the sphere symbols, $\Gamma^i{}_{Aj}=(1/r)\partial_Ar\,\delta^i{}_j$ and $\Gamma^A{}_{ij}=-rq^{AD}\partial_Dr\,\gamma_{ij}$, and every symbol of mixed type with both lower indices base and upper index sphere, or exactly one lower index sphere and upper index base, vanishes; moreover the base symbols, $q$, $r$ and their derivatives are independent of the angular coordinates, and $\sum_l\Gamma^l{}_{li}=\partial_i\log\sqrt{\det\gamma}=\cot\vartheta\,\delta^2{}_i$. [L3, L5, step 2.2, step 2.3, step 2.4, algebra]

4.1 (The components $\operatorname{Ric}_{AB}$.) Take $b=B$, $d=A$ base. The terms with all summed indices base give $\operatorname{Ric}(q)_{AB}$. Among the sphere-index terms, the first Ricci sum vanishes because $\Gamma^i{}_{AB}=0$; the second contributes $-\partial_A\sum_i\Gamma^i{}_{iB}=-2\partial_A(\partial_Br/r)=-2r^{-1}\partial_A\partial_Br+2r^{-2}\partial_Ar\partial_Br$. The third contributes $2r^{-1}\partial_Dr\,\Gamma^D{}_{AB}$ from $\sum_i\Gamma^i{}_{iD}\Gamma^D{}_{AB}$; its other possible sphere-index term is zero because $\Gamma^l{}_{AB}=0$. The fourth contributes $-2r^{-2}\partial_Ar\partial_Br$ from $-\sum_{i,l}\Gamma^i{}_{Al}\Gamma^l{}_{iB}$; its other mixed terms vanish because $\Gamma^i{}_{AD}=\Gamma^D{}_{iB}=0$. Adding these contributions gives $-2r^{-1}(\partial_A\partial_Br-\Gamma^D{}_{AB}\partial_Dr)=-2r^{-1}\operatorname{Hess}_{AB}r$. Thus $\operatorname{Ric}_{AB}=\operatorname{Ric}(q)_{AB}-2r^{-1}\operatorname{Hess}_{AB}r$. [L3, step 1.2, step 3.2, algebra]

4.2 (The mixed components vanish.) The four sums below are those of the component formula of [L5]. Take $b=i$, $d=A$. The first sum $\sum_a\partial_a\Gamma^a{}_{iA}=\sum_l\partial_l((1/r)\partial_Ar\,\delta^l{}_i)$ vanishes because $r$ is independent of the angular coordinates and the only angular dependence sits in the constant coefficient $\delta^l{}_i$; the second sum $\sum_a\partial_A\Gamma^a{}_{ai}=\partial_A(\sum_C\Gamma^C{}_{Ci}+\sum_l\Gamma^l{}_{li})$ vanishes because $\Gamma^C{}_{Ci}=0$ and $\sum_l\Gamma^l{}_{li}=\cot\vartheta\,\delta^2{}_i$ is angular. In the third sum the nonvanishing terms are $\sum_l\Gamma^l{}_{li}((1/r)\partial_Ar)=\cot\vartheta\,\delta^2{}_i\,\partial_A\log r$; in the fourth sum the nonvanishing terms are $-\sum_l\Gamma^l{}_{il}((1/r)\partial_Ar)=-\cot\vartheta\,\delta^2{}_i\,\partial_A\log r$, since the remaining possibilities have at least one symbol of a vanishing mixed type. The two contributions cancel and $\operatorname{Ric}_{Ai}=0$. [L5, step 2.3, step 3.2, algebra]

4.3 (The components $\operatorname{Ric}_{ij}$.) Take $b=j$, $d=i$ sphere indices. The terms of the four sums of step 3.2 whose indices are all sphere are exactly the curvature and Ricci computation of the round unit sphere; with the symbols of step 2.3 the direct components are $\operatorname{Ric}(\gamma_{S^2})_{22}=0+\frac{1}{\sin^2\vartheta}-\cot^2\vartheta=1$, $\operatorname{Ric}(\gamma_{S^2})_{33}=\sin^2\vartheta-\cos^2\vartheta-\cos^2\vartheta+2\cos^2\vartheta=\sin^2\vartheta$ and $\operatorname{Ric}(\gamma_{S^2})_{23}=0$, so these terms contribute $\operatorname{Ric}(\gamma_{S^2})_{ij}=\gamma_{ij}$. The remaining, base-involving terms are: the value $a=A$ of the first sum, $-\gamma_{ij}\,\partial_A(r\,q^{AB}\partial_Br)$; the terms $\Gamma^k{}_{kA}\Gamma^A{}_{ji}=-2z\gamma_{ij}$ and $\Gamma^A{}_{AB}\Gamma^B{}_{ji}=-r\gamma_{ij}(\sum_A\Gamma^A{}_{AB})q^{BD}\partial_Dr$ of the third sum, where $\sum_k\Gamma^k{}_{kA}=2\partial_A\log r$; and the terms $-\Gamma^A{}_{jl}\Gamma^l{}_{Ai}-\Gamma^l{}_{jA}\Gamma^A{}_{li}=2z\gamma_{ij}$ of the fourth sum, each of the two equal to $\gamma_{ij}\sum_{A,B}q^{AB}\partial_Ar\partial_Br=z\gamma_{ij}$. Since $\partial_A(rq^{AB}\partial_Br)=z+r\partial_A(q^{AB}\partial_Br)$, these base-involving terms sum to $-\gamma_{ij}(z+r\partial_A(q^{AB}\partial_Br))-2z\gamma_{ij}-r\gamma_{ij}(\sum_A\Gamma^A{}_{AB})q^{BD}\partial_Dr+2z\gamma_{ij}=-\gamma_{ij}(z+r\Delta_qr)$ by the trace identity of step 3.1. Adding the sphere contribution gives $\operatorname{Ric}_{ij}=(1-z-r\Delta_qr)\gamma_{ij}$. [L6, step 2.3, step 3.2, step 3.1, algebra]

5.1 (Extension to pole charts and conclusion.) The explicit polar-chart calculations in steps 2.2-4.3 establish the Christoffel and Ricci formulas on the dense regular angular locus. The formulas in clause (b) are the general product-coordinate formulas with the sphere connection of the chosen chart. Each Ricci side in clause (c) is a smooth tensor field: the base block is smooth, the mixed block is zero, and the sphere block is a smooth scalar multiple of $\gamma_{S^2}$. Since both sides agree on a dense subset, their components agree in every pole chart by continuity. Thus (a)-(c) hold globally; (d) records that no equation on $g$ and no sign of $s$ was used, and $\det q<0$ entered only through the inertia computation of step 2.1. [step 1.1, step 2.1, step 2.2, step 2.3, step 4.1, step 4.2, step 4.3, L1, L2, given] ∎

## Remarks

- **Where the hypothesis $\det q<0$ is used.** It gives the two-dimensional base the Lorentzian inertia $(1,1,0)$ and hence $g$ the inertia $(3,1,0)$ of step 1.2; all other computations are algebraic and would hold verbatim for any nondegenerate symmetric $q$.

- **The sign convention.** The signs of $R^a{}_{bcd}$ and of the Ricci tensor are those of [[def-gr-curvature-tensor-and-derived-tensors]], which fixes $R(\partial_c,\partial_d)\partial_b=R^a{}_{bcd}\partial_a$ and $\operatorname{Ric}_{bd}=\sum_{a,c}g^{ac}R_{abcd}$. With the opposite curvature convention, every curvature and Ricci component changes sign; the right-hand sides of clause (c), evaluated with the convention used here, must therefore be negated. The Christoffel symbols, Hessian, $z$ and $\Delta_qr$ do not change.

- **Why $q$ is not assumed to come from a global two-manifold.** The statement is local in the base coordinates; it applies to every warped-form expression of a smooth Lorentzian metric in a product chart of the form $V\times S^2$, which is the form in which the vacuum computation of the spherical model is performed.
