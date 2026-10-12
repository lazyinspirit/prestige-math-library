---
id: lem-gr-schwarzschild-metric-properties
kind: lemma
title: "The Schwarzschild exterior datum is a smooth time-oriented Lorentzian four-manifold"
status: draft
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

**(a) Components and smoothness.** $M$ is a smooth four-manifold without
boundary and the assignments of component functions in the product charts of
the datum agree on overlaps and define a smooth symmetric covariant
$2$-tensor field $g$ on $M$, whose components in every product chart
$(x^0,r,\vartheta,\varphi)$ are

$$g_{00}=-f(r),\qquad g_{11}=\frac{1}{f(r)},\qquad g_{22}=r^2,\qquad g_{33}=r^2\sin^2\vartheta,\qquad g_{ab}=0\ (a\ne b),$$

where $f(r)=1-s/r$. Equivalently
$g=-f\,d(x^0)\otimes d(x^0)+f^{-1}\,dr\otimes dr+r^2\,\iota^*\gamma_{S^2}$,
with $\iota:M\to S^2$ the third projection and $\gamma_{S^2}$ the round
metric of the unit sphere.

**(b) Lorentzian signature.** At every $p\in M$ the form $g_p$ is
nondegenerate with inertia $(3,1,0)$; consequently $(M,g,N)$ is a smooth
Lorentzian four-manifold of signature $(-,+,+,+)$.

**(c) Time orientation.** The field $N=\partial_0$ is a smooth nowhere
vanishing vector field with $g_p(N_p,N_p)=-f(r(p))<0$ at every $p$; it is
therefore a time orientation of $(M,g)$, so $(M,g,N)$ is a time-oriented
smooth Lorentzian four-manifold. Moreover $g(\partial_0,\partial_0)=-f$ is
negative, $g(\partial_1,\partial_1)=f^{-1}$ is positive wherever $\partial_1$
is defined, and the Schwarzschild chart frame
$(\partial_0,\partial_1,\partial_2,\partial_3)$ is $g$-orthogonal with
$\lvert g(\partial_0,\partial_0)\rvert=f$.

**(d) Domain of the coordinates.** Every product chart is defined on a
nonempty open subset of $M$, the functions $f$, $f^{-1}$, $r$, $r^2$ and
$\sin^2\vartheta$ restricted to any chart domain are smooth, and $f(r)>0$
because $r>s$; no product chart reaches a pole of $S^2$, since the sphere
charts exclude them.

**(e) Conventions.** The identities are equalities of component functions in
each product chart and hold at every point of every chart domain; they are
not assertions about any other chart or about the physical interpretation of
the coordinates.

## Facts & Assumptions

**Given:** Constants $c>0$, $G_N>0$, $m_*>0$, the Schwarzschild radius $s=2G_Nm_*/c^2$, the product manifold $M=\mathbb R\times(s,\infty)\times S^2$, the assignments of clause (c) of [[def-gr-schwarzschild-exterior-model]] in product charts, and the field $N=\partial_0$.

[L1] In every product chart $(x^0,r,\vartheta,\varphi)$ of the datum the component functions $g_{ab}$ are $g_{00}=-f(r)$, $g_{11}=f(r)^{-1}$, $g_{22}=r^2$, $g_{33}=r^2\sin^2\vartheta$ and $g_{ab}=0$ for $a\ne b$; the last two components arise from the round metric of $S^2$, whose components in the standard spherical chart are $\gamma_{22}=1$, $\gamma_{23}=\gamma_{32}=0$, $\gamma_{33}=\sin^2\vartheta$; the product charts cover $M$, their sphere parts range over the standard spherical atlas of $S^2$, and $f(r)=1-s/r$ is smooth and strictly positive on $(s,\infty)$ ([[def-gr-schwarzschild-exterior-model]] clauses (b)-(c), [[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]).

[L2] $M$ carries the product smooth structure: it is a Hausdorff, second-countable smooth four-manifold without boundary, and its smooth atlas is generated by products of charts of the factors; the projections $x^0$, $r$, $\iota$ are smooth ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]], [[def-smooth-manifold]], [[def-euclidean-spheres-and-closed-balls]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L3] A covariant $2$-tensor field is a family of bilinear forms whose components in every chart are $C^\infty$; specifying a symmetric matrix of component functions in the charts of one atlas defines a smooth symmetric covariant $2$-tensor field when the assigned components transform by the covariant $2$-tensor law on overlaps ([[def-gr-smooth-covariant-two-tensor-field]], [[lem-gr-covariant-two-tensor-transformation-law]]).

[L4] A smooth symmetric covariant $2$-tensor field $g$ on a smooth four-manifold $M$ is a Lorentzian metric of signature $(-,+,+,+)$ when $g_p$ is nondegenerate and has inertia $(3,1,0)$ at every $p$, that is, some (equivalently every) basis of $T_pM$ diagonalizing $g_p$ has exactly one negative and three positive diagonal entries ([[def-gr-smooth-lorentzian-objects]] clause (a), [[def-lorentz-form-and-inertia]]); a smooth vector field $N$ with $g_p(N_p,N_p)<0$ for every $p$ is a time orientation ([[def-gr-smooth-lorentzian-objects]] clause (c)).

[L5] On the overlap of two smooth charts, coordinates and component functions of a smooth tensor transform by the chain rule; in particular the transition maps of the standard spherical atlas of $S^2$ are smooth and the round metric components transform as a $(0,2)$-tensor ([[lem-gr-covariant-two-tensor-transformation-law]], [[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L6] The functions $\sin\vartheta$ and $\sin^2\vartheta$ are smooth on $0<\vartheta<\pi$ and strictly positive there; $r^2$, $r^4\sin^2\vartheta$, $f(r)$ and $f(r)^{-1}$ are smooth and positive on the ranges stated ([[def-rational-power]], [[def-interval]]).

## Proof

**Proof technique:** direct; establish overlap consistency of the assigned components, then read off nondegeneracy, inertia and the sign of $g(N,N)$ in the chart frame.

1.1 (Products of charts and smoothness.) Let $(x^0,r,\vartheta,\varphi)$ and $(x^0,r,\vartheta',\varphi')$ be two product charts with overlapping domains. Their last two entries are charts of $S^2$ from the standard spherical atlas; on the overlap of their angular domains the transition $(\vartheta',\varphi')\mapsto(\vartheta,\varphi)$ is smooth, and the round metric components satisfy the $(0,2)$-tensor transformation law $\gamma'_{ij}=\sum_{k,l}\partial x^k/\partial y^i\,\partial x^l/\partial y^j\,\gamma_{kl}$ there by [L5]. Since the coordinate functions $x^0$ and $r$ are the same in both charts, the joint transition map of the two product charts is $(\text{id},\text{id},y^i\mapsto x^i)$ and is smooth; its total derivative is block diagonal with the identity on the first two coordinates and the angular transition on the last two. [L2, L5]

2.1 (Overlap consistency of the assigned components.) Write $A_{ab}$ for the assigned matrix $\operatorname{diag}(-f(r),f(r)^{-1},r^2,r^2\sin^2\vartheta)$ and $A'_{ab}$ for the matrix of the second chart. Since $f$ depends on $r$ alone and $x^0,r$ are unchanged, the two upper-left entries agree in the two charts; for the angular block, $A'_{ij}=r^2\gamma'_{ij}=\sum_{k,l}(\partial x^k/\partial y^i)(\partial x^l/\partial y^j)r^2\gamma_{kl}=\sum_{k,l}(\partial x^k/\partial y^i)(\partial x^l/\partial y^j)A_{kl}$, which is exactly the transformation law required in [L3] restricted to the angular indices. All mixed entries vanish in both charts, so the full matrix relation $A'_{ab}=\sum_{c,d}(\partial x^c/\partial y^a)(\partial x^d/\partial y^b)A_{cd}$ holds. Hence the assignments in all product charts define a single symmetric bilinear form $g_p$ at every $p\in M$, and the component functions are smooth in every product chart by [L1] and [L6]. This proves that $g$ is a smooth symmetric covariant $2$-tensor field on $M$, and the chart formula of clause (a) follows from the definition of its components; the coordinate-free expression is the same identity read as a sum of tensor products of the one-forms $dx^0$, $dr$ and the pullback of $\gamma_{S^2}$ along $\iota$. [L1, L3, L6, step 1.1]

3.1 (Nondegeneracy and inertia.) Let $p\in M$ lie in a product chart. In the chart frame $(\partial_0,\partial_1,\partial_2,\partial_3)$ of $T_pM$ the matrix of $g_p$ is diagonal with diagonal entries $-f(r(p))$, $f(r(p))^{-1}$, $r(p)^2$, $r(p)^2\sin^2\vartheta(p)$. By [L1] $f(r(p))>0$; by [L6] $r(p)^2>0$ and $\sin^2\vartheta(p)>0$ on the chart domain, since the spherical chart satisfies $0<\vartheta<\pi$. Hence exactly one diagonal entry is negative and three are positive, and all are nonzero; the chart frame therefore diagonalizes $g_p$ with one negative and three positive entries, so $g_p$ is nondegenerate with inertia $(3,1,0)$. This holds at every point of every product chart and hence, the product charts covering $M$, at every $p\in M$. [L1, L4, L6, step 2.1]

4.1 (Time orientation and the frame signs.) The field $N=\partial_0$ is a coordinate vector field of the product chart and is smooth on the chart domain; on overlaps the two expressions agree because the first coordinate is common, so $N$ is a globally defined smooth vector field on $M$ ([[def-derivation-at-a-point-and-tangent-space]], [[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]). Its value is nonzero at every point, since $g_p(N_p,N_p)=-f(r(p))<0$ by step 3.1; hence $N_p$ is timelike at every $p$ and, by definition, $N$ is a time orientation of $(M,g)$. The frame signs recorded in clause (c) are the diagonal entries of step 3.1. This proves (c). [L1, L4, step 3.1]

5.1 (Conclusion.) Steps 1.1 and 2.1 prove (a) and the smoothness and manifold statements; step 3.1 proves (b); step 4.1 proves (c). Clause (d) is the statement that the charts are defined on nonempty open sets and that the displayed functions are smooth and positive there, which was used in steps 1.1 and 2.1; clause (e) is a summary of the exact scope of the component identities. No property of any extension of the metric beyond $r>s$ is asserted. [step 1.1, step 2.1, step 3.1, step 4.1, given] ∎

## Remarks

- **Why the chart frame suffices for the inertia.** The definition of a
  Lorentzian metric requires the existence of a diagonalizing basis with one
  negative and three positive entries; the chart frame is such a basis, so no
  basis-change argument is needed. This is the only place in this batch where
  the inertia is read directly from a coordinate frame.

- **No extension is claimed.** The chart frame degenerates in the limit
  $r\downarrow s$ in the sense that the component $g_{11}=f^{-1}$ diverges,
  but this lemma asserts nothing at $r=s$; the metric's behavior there is the
  subject of the extension and Kruskal items of this page, where a different
  chart is used.
