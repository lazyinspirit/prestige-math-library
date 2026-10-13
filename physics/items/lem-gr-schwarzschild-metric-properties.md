---
id: lem-gr-schwarzschild-metric-properties
kind: lemma
title: "The Schwarzschild exterior datum is a smooth time-oriented Lorentzian four-manifold"
status: published
origin: session
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-schwarzschild-exterior-model, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, lem-gr-covariant-two-tensor-transformation-law, def-c-r-and-smooth-maps-between-smooth-manifolds, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, def-smooth-manifold, def-euclidean-spheres-and-closed-balls, ex-the-round-metric-on-the-sphere-as-an-induced-metric, def-derivation-at-a-point-and-tangent-space, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, def-rational-power, def-interval, def-countable-choice, def-lorentz-form-and-inertia]
dependency_roles:
  def-gr-schwarzschild-exterior-model: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  lem-gr-covariant-two-tensor-transformation-law: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-euclidean-spheres-and-closed-balls: mathematical-premise
  ex-the-round-metric-on-the-sphere-as-an-induced-metric: mathematical-premise
  def-derivation-at-a-point-and-tangent-space: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  def-rational-power: mathematical-premise
  def-interval: mathematical-premise
  def-countable-choice: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 6.1: the Schwarzschild metric (6.1) and the statement that the coordinates are valid for r > 2GM, printed pp. 232-233 (PDF pp. 239-240)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7 (7.29): the Schwarzschild metric in the coordinates (t,r,theta,phi) with r > 2GM, printed p. 170 (PDF p. 177)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "P. K. Townsend, Black Holes, arXiv:gr-qc/9707012v1 (1997), section 2.3 (2.32)-(2.33): the Schwarzschild metric and the metric dOmega^2 = dtheta^2 + sin^2 theta dphi^2 on the unit 2-sphere, printed p. 15"
      url: "https://arxiv.org/pdf/gr-qc/9707012"
verification:
  precheck: pass
---

## Statement

Let $c>0$, $G_N>0$, $m_*>0$ and let $(M,g,N)$ be the Schwarzschild exterior
datum of mass parameter $m_*$ with Schwarzschild radius
$s=2G_Nm_*/c^2$ ([[def-gr-schwarzschild-exterior-model]]). Then:

**(a) Global metric and local components.** $M$ is a smooth four-manifold
without boundary and $g$ is the smooth symmetric covariant $2$-tensor field
globally defined by

$$g=-f\,d(x^0)\otimes d(x^0)+f^{-1}\,dr\otimes dr+r^2\,\iota^*\gamma_{S^2}.$$

In every spherical-polar product chart $(x^0,r,\vartheta,\varphi)$ its
components are

$$g_{00}=-f(r),\qquad g_{11}=\frac{1}{f(r)},\qquad g_{22}=r^2,\qquad g_{33}=r^2\sin^2\vartheta,\qquad g_{ab}=0\ (a\ne b),$$

where $f(r)=1-s/r$, $\iota:M\to S^2$ is the third projection and
$\gamma_{S^2}$ is the round metric of the unit sphere. The component display
is local to the spherical-polar charts; the global tensor formula includes
the poles.

**(b) Lorentzian signature.** At every $p\in M$ the form $g_p$ is
nondegenerate with inertia $(3,1,0)$; consequently $(M,g,N)$ is a smooth
Lorentzian four-manifold of signature $(-,+,+,+)$.

**(c) Time orientation.** The global product field $N=\partial_0$ is smooth
and nowhere vanishing, and $g_p(N_p,N_p)=-f(r(p))<0$ at every $p$; it is
therefore a time orientation of $(M,g)$. The globally defined base fields
$\partial_0,\partial_r$ are orthogonal with squared norms $-f$ and $f^{-1}$.
In a spherical-polar chart the angular coordinate fields are orthogonal with
positive squared norms $r^2$ and $r^2\sin^2\vartheta$; at a pole use any
angular chart and the positive-definite round metric instead.

**(d) Domain of the coordinates.** Product charts form an atlas covering
$M$. Spherical-polar charts are defined on the regular angular locus
$0<\vartheta<\pi$ and omit the poles; pole charts are ordinary smooth charts
of $S^2$. The functions $f$ and $f^{-1}$ are smooth on $r>s$, and the
spherical-polar component functions are smooth on their chart domains.

**(e) Conventions.** The global tensor identity holds on all of $M$; the
displayed component identities are in spherical-polar product charts. In pole
charts the sphere block is $r^2$ times the round-metric component matrix.

## Facts & Assumptions

**Given:** Constants $c>0$, $G_N>0$, $m_*>0$, the Schwarzschild radius $s=2G_Nm_*/c^2$, the product manifold $M=\mathbb R\times(s,\infty)\times S^2$, the assignments of clause (c) of [[def-gr-schwarzschild-exterior-model]] in product charts, and the field $N=\partial_0$.

[L1] The metric is globally $g=-f\,d(x^0)\otimes d(x^0)+f^{-1}\,dr\otimes dr+r^2\iota^*\gamma_{S^2}$; on the dense regular angular locus its spherical-polar components are $g_{00}=-f(r)$, $g_{11}=f(r)^{-1}$, $g_{22}=r^2$, $g_{33}=r^2\sin^2\vartheta$ and all mixed components vanish. The round metric is smooth and positive definite also at the two poles; $f(r)=1-s/r$ is smooth and strictly positive on $(s,\infty)$ ([[def-gr-schwarzschild-exterior-model]] clauses (b)-(c), [[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]).

[L2] $M$ carries the product smooth structure: it is a Hausdorff, second-countable smooth four-manifold without boundary, and its smooth atlas is generated by products of charts of the factors; the projections $x^0$, $r$, $\iota$ are smooth ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]], [[def-smooth-manifold]], [[def-euclidean-spheres-and-closed-balls]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L3] A covariant $2$-tensor field is a family of bilinear forms whose components in every chart are $C^\infty$; specifying a symmetric matrix of component functions in the charts of one atlas defines a smooth symmetric covariant $2$-tensor field when the assigned components transform by the covariant $2$-tensor law on overlaps ([[def-gr-smooth-covariant-two-tensor-field]], [[lem-gr-covariant-two-tensor-transformation-law]]).

[L4] A smooth symmetric covariant $2$-tensor field $g$ on a smooth four-manifold $M$ is a Lorentzian metric of signature $(-,+,+,+)$ when $g_p$ is nondegenerate and has inertia $(3,1,0)$ at every $p$, that is, some (equivalently every) basis of $T_pM$ diagonalizing $g_p$ has exactly one negative and three positive diagonal entries ([[def-gr-smooth-lorentzian-objects]] clause (a), [[def-lorentz-form-and-inertia]]); a smooth vector field $N$ with $g_p(N_p,N_p)<0$ for every $p$ is a time orientation ([[def-gr-smooth-lorentzian-objects]] clause (c)).

[L5] On the overlap of two smooth charts, coordinates and component functions of a smooth tensor transform by the chain rule; in particular the transition maps of the standard spherical atlas of $S^2$ are smooth and the round metric components transform as a $(0,2)$-tensor ([[lem-gr-covariant-two-tensor-transformation-law]], [[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L6] The functions $\sin\vartheta$ and $\sin^2\vartheta$ are smooth on $0<\vartheta<\pi$ and strictly positive there; $r^2$, $r^4\sin^2\vartheta$, $f(r)$ and $f(r)^{-1}$ are smooth and positive on the ranges stated ([[def-rational-power]], [[def-interval]]).

## Proof

**Proof technique:** use the global pullback formula, the product tangent-space splitting and positive definiteness of the round metric.

1.1 (Global smooth tensor.) The product manifold atlas covers $M$, including charts about both sphere poles, by [L2]. The projections $x^0,r,\iota$ are smooth, $f$ and $f^{-1}$ are smooth on $r>s$, and $\gamma_{S^2}$ is a smooth covariant tensor on all of $S^2$ by [L1]-[L3]. Therefore each term of the coordinate-free expression in [L1] is a smooth tensor field on $M$, their sum is a smooth symmetric covariant $2$-tensor field, and on the regular angular locus its polar components are the display of clause (a). By [L5], smooth changes of angular coordinates re-express this same tensor by the covariant component transformation law in the corresponding coordinate bases, including pole charts. This proves the global assertion and the chart-local statement. [L1, L2, L3, L5, L6, algebra]

1.2 (Nondegeneracy and inertia, including the poles.) At $p=(x^0,r,\omega)$ the product tangent space splits as $T_pM\cong\mathbb R\oplus\mathbb R\oplus T_\omega S^2$. For $v=(a,b,w)$ in this splitting,
$g_p(v,v)=-f(r)a^2+f(r)^{-1}b^2+r^2\gamma_{S^2,\omega}(w,w)$.
Here $f(r)>0$, and $\gamma_{S^2,\omega}$ is positive definite at every sphere point, including the poles. The first two summands thus have one negative and one positive direction, and the sphere summand has two positive directions; $g_p$ is nondegenerate with inertia $(3,1,0)$ at every $p$. This proves (b). [L1, L4, algebra]

2.1 (Time orientation.) The product field $N=\partial_0$ is smooth and nowhere zero. By [L1] and the global metric formula, $g(N,N)=-f(r)<0$ everywhere, so $N$ is a time orientation. The base-vector signs and the polar angular signs in (c) follow from that formula and the positive-definite round metric. [L1, L4, step 1.2, algebra]

3.1 (Conclusion.) Step 1.1 proves (a), step 1.2 proves (b) at all sphere points, and step 2.1 proves (c). Clauses (d)-(e) record the polar-chart domain of the component display and the global scope of the tensor formula. No property outside $r>s$ is asserted. [step 1.1, step 1.2, step 2.1, given] ∎

## Remarks

- **Why the poles cause no degeneracy.** The global product tangent-space
  splitting separates the Lorentzian time-radial block from the positive
  round metric on $S^2$. Polar coordinates are only a local component display;
  their failure at the poles does not affect the metric or its inertia.

- **No extension is claimed.** The product-chart frame remains a basis at
  every point with $r>s$, while its component $g_{11}=f^{-1}$ diverges as
  $r\downarrow s$. The chart has no point at $r=s$, so it has no frame limit
  there; this lemma asserts nothing at that boundary. The extension and
  Kruskal items of this page study the metric there in different charts.
