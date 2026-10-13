---
id: thm-gr-local-birkhoff-warped-product
kind: theorem
title: "Local Birkhoff theorem: a vacuum warped product with a round sphere factor is locally Schwarzschild with an extra Killing field"
status: published
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-gr-warped-spherical-christoffel-and-ricci, lem-gr-warped-base-vacuum-reduction, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-curvature-tensor-and-derived-tensors, def-gr-killing-field, def-gr-smooth-covariant-two-tensor-field, lem-gr-covariant-two-tensor-transformation-law, thm-flow-box-theorem, def-smooth-vector-field-as-a-tangent-bundle-section, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, def-c-r-and-smooth-maps-between-smooth-manifolds, def-derivative, thm-chain-rule, def-invertible-matrix-and-general-linear-group, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, def-euclidean-spheres-and-closed-balls, ex-the-round-metric-on-the-sphere-as-an-induced-metric, def-countable-choice, def-interval, def-oriented-integral, thm-ftc-first-part, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space, thm-zero-derivative-on-connected-open-euclidean-set-iff-constant]
dependency_roles:
  thm-zero-derivative-on-connected-open-euclidean-set-iff-constant: mathematical-premise
  lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space: mathematical-premise
  lem-gr-warped-spherical-christoffel-and-ricci: mathematical-premise
  lem-gr-warped-base-vacuum-reduction: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-killing-field: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  lem-gr-covariant-two-tensor-transformation-law: mathematical-premise
  thm-flow-box-theorem: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-derivative: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure: mathematical-premise
  def-euclidean-spheres-and-closed-balls: mathematical-premise
  ex-the-round-metric-on-the-sphere-as-an-induced-metric: mathematical-premise
  def-countable-choice: mathematical-premise
  def-interval: mathematical-premise
  def-oriented-integral: mathematical-premise
  thm-ftc-first-part: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 6.1.1: the statement and sketch of Birkhoff's theorem that a spherically symmetric vacuum solution is static and locally of Schwarzschild form, printed pp. 233-235 (PDF pp. 240-242)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7 (7.20)-(7.29): the proof that a spherically symmetric vacuum metric is static with metric coefficients functions of r only, and the identification of the resulting Schwarzschild form, printed pp. 169-172 (PDF pp. 176-179)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "P. K. Townsend, Black Holes, arXiv:gr-qc/9707012v1 (1997), section 2.4: the uniqueness of the Schwarzschild solution among static spherically symmetric vacuum solutions, printed pp. 25-26"
      url: "https://arxiv.org/pdf/gr-qc/9707012"
verification:
  precheck: pass
---

## Statement

Let $V\subseteq\mathbb R^2$ be a connected nonempty open set with global
coordinates $y$, let $(q_{AB})$ be a smooth symmetric matrix of functions on
$V$ with $D_q:=\det(q_{AB})<0$ everywhere, let $r:V\to(0,\infty)$ be smooth
and let $z=\sum_{A,B}q^{AB}\partial_Ar\,\partial_Br$ be nonzero everywhere; let
$M=V\times S^2$ and let $g$ be the warped metric of
[[lem-gr-warped-spherical-christoffel-and-ricci]], whose Ricci tensor is given
there in clause (c) by $\operatorname{Ric}_{AB}=\operatorname{Ric}(q)_{AB}-(2/r)\operatorname{Hess}_{AB}r$,
$\operatorname{Ric}_{Ai}=0$, $\operatorname{Ric}_{ij}=(1-z-r\Delta_qr)\gamma_{ij}$.
Assume the **vacuum condition**

$$\operatorname{Ric}(g)=0\qquad\text{on }M,$$

that is, the vanishing of all components of the Ricci tensor of $g$ in every
product chart. Then:

**(a) Mass parameter.** There is a constant $s\in\mathbb R$ such that
$z=1-\dfrac{s}{r}$ on $V$; equivalently $r(1-z)=s$.

**(b) Local Schwarzschild coordinates.** For every $p\in V$ there are an open
neighborhood $W\subseteq V$ of $p$ and a smooth function $T:W\to\mathbb R$ such
that $(T,r)$ is a smooth coordinate system on $W$, the vector field
$\partial_T$ coincides on $W$ with the volume-form field $K$ of
[[lem-gr-warped-base-vacuum-reduction]], and in these coordinates

$$q=-\Bigl(1-\frac{s}{r}\Bigr)dT\otimes dT+\Bigl(1-\frac{s}{r}\Bigr)^{-1}dr\otimes dr \qquad\text{on }W,$$

where $\bigl(1-s/r\bigr)^{-1}$ is the smooth function $1/z$ on $W$.

**(c) Local Schwarzschild form of the metric.** In the product chart
$(T,r,\vartheta,\varphi)$ over $W\times S^2$ the components of $g$ are

$$g_{TT}=-\Bigl(1-\frac{s}{r}\Bigr),\quad g_{rr}=\Bigl(1-\frac{s}{r}\Bigr)^{-1},\quad g_{\vartheta\vartheta}=r^2,\quad g_{\varphi\varphi}=r^2\sin^2\vartheta,$$

with all mixed components zero; that is,
$g=-\bigl(1-\frac{s}{r}\bigr)dT\otimes dT+\bigl(1-\frac{s}{r}\bigr)^{-1}dr\otimes dr+r^2\gamma_{S^2}$
on the chart domain.

**(d) Extra Killing field.** $\partial_T=K$ is a Killing field of $g$ on the
chart domain in the sense of [[def-gr-killing-field]]; it satisfies
$\partial_T(r)=0$ and $g(\partial_T,\partial_T)=-z=-(1-s/r)$. On a subregion
where $z>0$, this field is timelike and orthogonal to the hypersurfaces
$T=\mathrm{constant}$; this is the local staticity asserted here. Where
$z<0$, it is spacelike and no staticity is asserted. In either case it is an
additional symmetry not assumed among the hypotheses.

**(e) Scope.** The statement is local in $V$: a neighborhood of each point is
produced, and $s$ is a constant on the connected set $V$ but need not be
positive, need not be the same for a different connected component of a larger
region, and no asymptotic flatness, regular-center, completeness, maximality or
global uniqueness statement is made. The hypotheses $D_q<0$ and $z\ne0$
are exactly those of the two quoted lemmas, and $r>0$ is used to divide by $r$.

## Facts & Assumptions

**Given:** A connected open set $V\subseteq\mathbb R^2$, a smooth symmetric matrix $q_{AB}$ with $\det q<0$, a smooth $r:V\to(0,\infty)$ with $z\ne0$ everywhere, the warped metric $g$ on $M=V\times S^2$ in product charts, and the vacuum condition $\operatorname{Ric}(g)=0$.

[L1] The functions $\Gamma^A{}_{BC}$, $\operatorname{Hess}_{AB}r$, $\Delta_qr$, $z$, $R^A{}_{BCD}$, $\operatorname{Ric}(q)_{AB}$ are those of [[lem-gr-warped-spherical-christoffel-and-ricci]], where clause (c) gives the Ricci components of $g$ in every product chart; the components of a smooth tensor field vanish identically if they vanish in every chart of an atlas ([[def-gr-smooth-covariant-two-tensor-field]], [[lem-gr-covariant-two-tensor-transformation-law]]).

[L2] Under the hypotheses of the statement, [[lem-gr-warped-base-vacuum-reduction]] applies to the two equations $\operatorname{Ric}_{AB}=0$ and $\operatorname{Ric}_{ij}=0$, and its clauses (c)-(e) give the constant $s$ with $z=1-s/r$, the volume-form field $K$ with $K\neq0$, $K(r)=0$, $K$ pointwise independent of $\nabla r$, the Killing property $\nabla_AK_B+\nabla_BK_A=0$ and the component formulas $K^0=-\partial_1r/\lambda$, $K^1=\partial_0r/\lambda$ with $\lambda=\sqrt{-D_q}$.

[L3] The flow-box theorem applies to the smooth vector field $K$ on the smooth surface $V$: at every point $p$ with $K_p\ne0$ there are coordinates $(u^1,u^2)$ on a neighborhood of $p$ in which $K=\partial_{u^1}$ ([[thm-flow-box-theorem]], [[def-smooth-vector-field-as-a-tangent-bundle-section]]).

[L4] In a chart, coordinate derivations form a basis of each tangent space, and a list of $n$ smooth functions on an $n$-manifold is a coordinate system near a point when its Jacobian determinant is nonzero there ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], with $n=2$ in the chart domain).

[L5] Smoothness, the chain and product rules, the inverse of an invertible $2\times2$ matrix and the fact that a smooth function of one variable with nonzero derivative is a local coordinate are available ([[def-derivative]], [[thm-chain-rule]], [[def-invertible-matrix-and-general-linear-group]], [[def-interval]], [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]). On a connected open real interval, a smooth function with zero derivative is constant ([[thm-zero-derivative-on-connected-open-euclidean-set-iff-constant]], $m=q=1$).

[L6] A smooth function on a real interval has the primitive $H(r)=\int_{r_0}^r h(u)\,du$ with derivative $H'=h$ ([[def-oriented-integral]], [[thm-ftc-first-part]]).

## Proof

**Proof technique:** read the two vacuum equations off the warped Ricci formula, invoke the base reduction for the constant $s$ and the Killing field $K$, straighten $K$ by the flow-box theorem, use $K(r)=0$ to make $(T,r)$ coordinates, remove the cross term, and read off the metric and the Killing property.

1.1 (Vacuum equations in warped form.) By [L1] the components of $\operatorname{Ric}(g)$ in a product chart are those displayed in the statement; the vacuum condition therefore gives $\operatorname{Ric}(q)_{AB}=(2/r)\operatorname{Hess}_{AB}r$ and $1-z-r\Delta_qr=0$ on $V$, since $\gamma_{ij}$ is a nondegenerate matrix and $r>0$. [L1, given, algebra]

2.1 (The constant $s$.) The hypotheses of [[lem-gr-warped-base-vacuum-reduction]] are exactly the connectedness of $V$, $D_q<0$, $r>0$, $z\ne0$ and the two equations of step 1.1, so its clause (c) gives a constant $s\in\mathbb R$ with $r(1-z)=s$, that is, $z=1-s/r$; this is (a). [step 1.1, L2, given]

3.1 (Coordinates adapted to $K$.) By [L2], $K$ is a nonvanishing smooth field, so [L3] supplies a flow-box chart $(u^1,u^2)$ near $p$ with $K=\partial_{u^1}$. In this chart the smooth map $F(u^1,u^2)=(u^1,r(u^1,u^2))$ has derivative matrix $\begin{pmatrix}1&0\\0&\partial_{u^2}r\end{pmatrix}$, since $\partial_{u^1}r=K(r)=0$. Its determinant is nonzero: otherwise $dr$ would vanish, contrary to $z\ne0$. Apply the smooth Euclidean inverse-function theorem [L4] at $p$ to obtain an open neighborhood $W$ with coordinates $(T,r)=(u^1,r)$. The identities $K(T)=1$ and $K(r)=0$ show $K=\partial_T$ there. [step 2.1, L2, L3, L4, L5, algebra]

4.1 (The base metric in coordinates adapted to $K$.) In the coordinates $(T,r)$ from step 3.1, $K=\partial_T$ and $q_{TT}=q(K,K)=-z$ by [L2]. Since $K$ is Killing, $\mathcal L_{\partial_T}q=0$, so the coordinate components $q_{TT},q_{Tr},q_{rr}$ are independent of $T$. After shrinking $W$ to a coordinate rectangle, write $E(r)=q_{TT}$ and $F(r)=q_{Tr}$. The assumption $z\ne0$ gives $E=-z\ne0$. Define locally
$$H(r):=\int_{r_0}^{r}\frac{F(u)}{E(u)}\,du.$$
The integrand is smooth, and [L6] gives $H'=F/E$. Replace the time coordinate by $\widehat T=T+H(r)$, leaving $r$ fixed; because the old coordinate is $T=\widehat T-H(r)$, the new cross coefficient is $F-EH'=0$, while $\partial_{\widehat T}=\partial_T=K$ and $q_{\widehat T\widehat T}=E=-z$. In these diagonal coordinates $z=q^{rr}=1/q_{rr}$ by its definition, so $q_{rr}=1/z$. Substituting $z=1-s/r$ from step 2.1 gives $q=-(1-\tfrac{s}{r})d\widehat T\otimes d\widehat T+(1-\tfrac{s}{r})^{-1}dr\otimes dr$. Renaming $\widehat T$ as $T$ proves (b). [step 2.1, step 3.1, L2, L5, L6, algebra]

5.1 (The metric and the Killing field.) In the product chart $(T,r,\vartheta,\varphi)$ the components of $g$ are $g_{TT}=q_{TT}$, $g_{rr}=q_{rr}$, $g_{\vartheta\vartheta}=r^2$, $g_{\varphi\varphi}=r^2\sin^2\vartheta$ and all mixed components zero, by the definition of $g$ in [[lem-gr-warped-spherical-christoffel-and-ricci]]; substituting step 4.1 gives (c). After shrinking to a connected coordinate rectangle, $z$ has a constant nonzero sign. On this product domain choose $N=\partial_T$ when $z>0$ and $N=\partial_r$ when $z<0$; its squared norm is respectively $-z<0$ or $1/z<0$, so the time-oriented domain required by [[def-gr-killing-field]] is available. Every displayed component is independent of $T$, and $\partial_T$ has components $(1,0,0,0)$ in this chart, so the Lie derivative $\mathcal L_{\partial_T}g$ has all components $\partial_Tg_{ab}=0$ and vanishes; by [L2] we also know $K$ is a Killing field of $q$ with $K(r)=0$ and $q(K,K)=-z$, and $\partial_T=K$ by step 3.1, so $\partial_T(r)=0$ and $g(\partial_T,\partial_T)=-z=-(1-s/r)$. This proves (d). [step 3.1, step 4.1, L1, L2, algebra]

6.1 (Conclusion.) Step 2.1 proves (a), step 4.1 proves (b), step 5.1 proves (c) and (d); clause (e) records the local scope, the role of the hypotheses and the fact that $s$ is constant only on the connected set $V$. [step 2.1, step 4.1, step 5.1, given] ∎

## Remarks

- **What the theorem does and does not say.** It converts the two-component vacuum condition on a warped chart into the local Schwarzschild form and an extra local Killing symmetry; it does not assert that every vacuum solution is spherically symmetric, that the region is an exterior region, that $s>0$, or that the coordinates extend beyond $W$. The hypothesis $z\ne0$ excludes every point with $r=s$; because $V$ is connected and $r-s$ is continuous, a region satisfying it lies wholly on one side of that level. It does not merely exclude a chart on which $r$ is constantly $s$.

- **Relation to the global sources.** The cited treatments derive the same conclusion under stronger global or static hypotheses and in coordinates adapted to the spherical symmetry; the version proved here is the local warped-product statement, with all hypotheses displayed, and it is the form used by the spherical vacuum model of this page.
