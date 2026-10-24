---
id: thm-every-jacobi-field-is-induced-by-a-geodesic-variation
kind: theorem
title: Every Jacobi field is induced by a geodesic variation
status: published
origin: pipeline
deps:
  - cor-every-tangent-vector-is-the-velocity-of-a-smooth-curve
  - def-affine-connection-on-a-smooth-manifold
  - def-countable-choice
  - def-covariant-derivative-along-a-curve
  - def-geodesic-of-an-affine-connection
  - def-geodesic-variation
  - def-levi-civita-connection
  - def-parallel-section-along-a-curve
  - def-parallel-transport-along-a-piecewise-smooth-curve
  - def-vector-field-and-section-along-a-smooth-curve
  - prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth
  - prop-identity-maps-and-composites-of-smooth-maps-are-smooth
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - thm-existence-and-uniqueness-of-parallel-sections
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - thm-variation-field-of-a-geodesic-variation-is-a-jacobi-field
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Lemma 10.3 and Exercise 10.1 hint, printed p.176 / PDF label P192; Lee states the converse and leaves its proof to the reader."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Proposition 22.2.1 converse proof, printed pp.162-163 / PDF labels P169-170, especially its construction and initial-derivative calculation at lines 9197-9266."
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "Remark 2.2 converse construction, §2, printed pp.6-7 / PDF labels P5-6, lines 281-320."
---

## Statement

Assume exactly $\mathrm{AC}_\omega$. Let $(M,g)$ be a smooth Riemannian
manifold without boundary, let $a<b$, let $\gamma:[a,b]\to M$ be an
affinely parametrized geodesic, and let $J$ be a Jacobi field along $\gamma$.
Then there are $\varepsilon>0$ and a smooth map
$$F:(-\varepsilon,\varepsilon)\times[a,b]\to M$$
such that $F(0,t)=\gamma(t)$, every longitudinal curve $t\mapsto F(s,t)$ is
an affinely parametrized geodesic, and
$$\left.\partial_sF(s,t)\right|_{s=0}=J(t)\qquad(t\in[a,b]).$$
The variation may have moving endpoints; no completeness assumption is
imposed. Jacobi derivatives at included endpoints are one-sided.

## Facts & Assumptions

**Given:** The boundaryless Riemannian manifold, a nondegenerate compact
geodesic segment $\gamma:[a,b]\to M$, and a supplied Jacobi field $J$ along
it, under the stated $\mathrm{AC}_\omega$ assumption.

[F1] $\mathrm{AC}_\omega$ is the countable-choice assumption
([[def-countable-choice]]).

[F2] Under [F1], every $(p,v)\in TM$ has a unique maximal geodesic with
initial data $(p,v)$; its flow domain
$\mathcal G=\{(t,p,v):t\in I_{p,v}\}$ is open and its evaluation map
$G(t,p,v)=\gamma_{p,v}(t)$ is smooth
([[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]]).

[F3] Every vector in $T_pM$ is the velocity of a smooth curve through $p$
([[cor-every-tangent-vector-is-the-velocity-of-a-smooth-curve]]).

[F4] Along a supplied smooth curve and connection, every initial fibre vector
has a unique smooth parallel section on the whole parameter interval
([[thm-existence-and-uniqueness-of-parallel-sections]]).

[F5] A section is parallel exactly when its covariant derivative along the
curve is zero ([[def-parallel-section-along-a-curve]]).

[F6] Parallel transport is evaluation of that unique parallel section, so
$X(s)=P_{\sigma;0,s}v_0$ and $W(s)=P_{\sigma;0,s}B$
([[def-parallel-transport-along-a-piecewise-smooth-curve]]).

[F7] A vector field along a smooth curve is a smooth section of its pulled-back
tangent bundle, equivalently a smooth lift of the base curve into $TM$
([[def-vector-field-and-section-along-a-smooth-curve]]).

[F8] A map into a product is smooth when its component maps are smooth, and
smooth maps compose ([[prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth]],
[[prop-identity-maps-and-composites-of-smooth-maps-are-smooth]]).

[F9] The curves $\gamma_{p,v}$ supplied by the geodesic flow are affinely
parametrized geodesics ([[def-geodesic-of-an-affine-connection]]).

[F10] A smooth map on a common parameter rectangle is a geodesic variation
when each longitudinal curve is an affinely parametrized geodesic; its field
is $\partial_sF(0,t)$ ([[def-geodesic-variation]]).

[F11] The variation field of a geodesic variation is Jacobi
([[thm-variation-field-of-a-geodesic-variation-is-a-jacobi-field]]).

[F12] Jacobi fields on $[a,b]$ with prescribed $J(a)$ and $D_tJ(a)$ are unique
([[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]).

[F13] The covariant derivative along a curve is given by the pullback
connection ([[def-covariant-derivative-along-a-curve]]); a Levi-Civita
connection is affine and torsion free ([[def-levi-civita-connection]],
[[def-affine-connection-on-a-smooth-manifold]]). In coordinates this gives
the product rule and the identity $D_r(\partial_sF)=D_s(\partial_rF)$ for a
smooth two-parameter map.

## Proof

**Proof technique:** direct.

1.1 Put $L=b-a$, $q=\gamma(a)$, $v_0=\dot\gamma(a)$, $A=J(a)$, and $B=D_tJ(a)$. By [F3], choose a smooth curve $\sigma:(-\delta,\delta)\to M$ with $\sigma(0)=q$ and $\sigma'(0)=A$. By [F4], let $X$ and $W$ be the unique parallel sections along $\sigma$ with $X(0)=v_0$ and $W(0)=B$. Their values are the transports $X(s)=P_{\sigma;0,s}v_0$ and $W(s)=P_{\sigma;0,s}B$ by [F6]. By [F5], $D_sX=D_sW=0$. Define $u(s)=X(s)+sW(s)\in T_{\sigma(s)}M$. In a local bundle chart along a short subinterval of $\sigma$, the coefficient functions of $X$ and $W$ are smooth, so those of $u$ are smooth; [F7] therefore makes $u$ a smooth curve in $TM$. Also $u(0)=v_0$. [F3, F4, F5, F6, F7, given, algebra]

2.1 By uniqueness of the initial-value geodesic, $r\mapsto\gamma(a+r)$ is $\gamma_{q,v_0}(r)$ for $r\in[0,L]$. Thus $K=\{(r,(q,v_0)):r\in[0,L]\}$ lies in the open geodesic-flow domain $\mathcal G\subset\mathbb R\times TM$ from [F2]. The map $H(s,r)=(r,(\sigma(s),u(s)))$ into $\mathbb R\times TM$ is smooth by [F8] and $H(0,r)\in K$ for every $r$. The open set $H^{-1}(\mathcal G)$ contains $\{0\}\times[0,L]$, so for each $r_0\in[0,L]$ it contains a product neighborhood $(-\varepsilon_{r_0},\varepsilon_{r_0})\times(r_0-\eta_{r_0},r_0+\eta_{r_0})$. Compactness gives finitely many of these second intervals covering $[0,L]$; the minimum of their positive first radii is one $\varepsilon>0$ with $(-\varepsilon,\varepsilon)\times[0,L]\subset H^{-1}(\mathcal G)$. Therefore $\widetilde F(s,r)=G(r,\sigma(s),u(s))$ is smooth by [F8], each $r$-curve is an affinely parametrized geodesic by [F9], and $\widetilde F(0,r)=\gamma(a+r)$. Set $F(s,t)=\widetilde F(s,t-a)$. Then $F$ is smooth on the common rectangle, has central curve $\gamma$, and is a geodesic variation by [F10]. [F2, F8, F9, F10, step 1.1, given]

3.1 Let $V(t)=\partial_sF(0,t)$. By [F11], $V$ is Jacobi. Since $F(s,a)=\sigma(s)$, $V(a)=A=J(a)$. In a chart about $q$, write $\widetilde F$ in coordinates $x^k(s,r)$. By the initial-velocity clause in [F2], $\partial_r\widetilde F(s,0)=u(s)$. The components of $D_r(\partial_s\widetilde F)$ and $D_s(\partial_r\widetilde F)$ are $\partial_r\partial_sx^k+\Gamma^k_{ij}\partial_rx^i\partial_sx^j$ and $\partial_s\partial_rx^k+\Gamma^k_{ij}\partial_sx^i\partial_rx^j$. Coordinate vector fields commute and torsion freeness gives $\Gamma^k_{ij}=\Gamma^k_{ji}$, so these components agree and $D_r(\partial_s\widetilde F)(0,0)=D_su(0)$. By [F5] and the product rule in [F13], $D_su(0)=D_s(X+sW)(0)=W(0)=B$. Hence $D_tV(a)=B=D_tJ(a)$, with the one-sided derivative at the included endpoint. [F2, F4, F5, F11, F13, step 1.1, step 2.1, algebra]

4.1 Both $V$ and $J$ are Jacobi fields along the same segment with the same initial data, so [F12] gives $V=J$ on all of $[a,b]$ and the constructed $F$ has the prescribed variation field. If $M$ is empty there is no supplied geodesic segment. In dimension zero, $A=B=0$, the unique parallel sections and $u$ are zero, and the construction is the constant variation; dimension one is covered by the same argument. If $J=0$, then $A=B=0$ and the construction still works. If $\gamma$ is constant, then $v_0=0$ and the construction varies its initial point and velocity while matching both Jacobi initial data. Endpoints are included with one-sided derivatives and may move. The only choice assumption is exactly $\mathrm{AC}_\omega$ through [F1]; the geodesic-flow supplier [F2] carries the same premise. The parallel extensions are unique and the common interval uses only a finite cover of $[0,L]$, so no full Axiom of Choice is used. This is a one-way existence assertion, not an iff claim. [F1, F2, F4, F11, F12, step 1.1, step 2.1, step 3.1] ∎
