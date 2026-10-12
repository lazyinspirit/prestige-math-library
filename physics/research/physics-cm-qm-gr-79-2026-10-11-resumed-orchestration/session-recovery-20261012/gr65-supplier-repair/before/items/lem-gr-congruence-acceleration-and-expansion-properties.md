---
id: lem-gr-congruence-acceleration-and-expansion-properties
kind: lemma
title: "Spatiality and curve identity of the acceleration, the divergence form of the expansion, and the along-congruence derivative"
status: draft
origin: session
domain: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-congruence-acceleration-and-expansion, def-gr-observer-energy-momentum-current, def-gr-observer-congruence-and-adapted-charts, def-gr-observer-and-rest-space, lem-gr-observer-projection-decomposition, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-inverse-metric-and-musical-isomorphisms, def-affine-connection-on-a-smooth-manifold, def-covariant-derivative-along-a-curve, def-geodesic-of-an-affine-connection, lem-gr-metric-divergence-and-density-formula, def-christoffel-symbols-of-an-affine-connection, def-smooth-vector-field-as-a-tangent-bundle-section, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-gr-congruence-acceleration-and-expansion: mathematical-premise
  def-gr-observer-energy-momentum-current: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-affine-connection-on-a-smooth-manifold: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  lem-gr-metric-divergence-and-density-formula: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035v1 (2007), sections 3.3.3-3.3.4: a = grad_n n and a = D ln N, and the relation grad n = -K - D ln N (x) n, printed pp. 43-44 (PDF pp. 43-44); sections 5.2.1-5.2.2: the expansion term in the energy conservation equation, printed pp. 72-73 (PDF pp. 72-73)"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: the covariant derivative along a curve, parallel transport and the geodesic equation, printed pp. 67-69 and 100-101 (PDF pp. 74-76 and 107-108)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$, let $U\subseteq M$ be a nonempty open
subset and let $n$ be a smooth observer congruence on $U$, with acceleration
$a=\nabla_nn$, expansion $\theta=\nabla_an^a$ and along-congruence derivative
$D$ as in [[def-gr-congruence-acceleration-and-expansion]]. Then:

**(a) The acceleration is spatial.** $a$ is smooth and

$$g_p(a_p,n_p)=0\qquad\text{for every }p\in U,$$

that is, $a_p\in n_p^{\perp}$; equivalently $h(a)=a$ for the projection field
$h$ of [[def-gr-observer-energy-momentum-current]].

**(b) Acceleration of the observer curves.** Let $\gamma:I\to U$ be an
observer curve of the congruence, that is, an integral curve of $n$
([[def-gr-observer-congruence-and-adapted-charts]] clause (b)), and let
$D_s$ denote the covariant derivative along $\gamma$
([[def-covariant-derivative-along-a-curve]]). Then

$$D_s\gamma'(s)=a_{\gamma(s)}\qquad\text{for every }s\in I .$$

Consequently every observer curve is a geodesic in its flow parameter if and
only if $a=0$ on $U$ ([[def-geodesic-of-an-affine-connection]]).

**(c) Divergence form of the expansion.** In every smooth chart of $U$, with
$g_{ab}$ the metric components and $w:=\sqrt{|\det(g_{ab})|}>0$,

$$\theta=w^{-1}\partial_a\bigl(w\,n^a\bigr),$$

and $\theta=g^{ab}\nabla_an_b=h^{ab}\nabla_an_b$ with
$h^{ab}=g^{ab}+n^an^b$. In particular $\theta$ is smooth.

**(d) Derivation property.** For smooth functions $f,h:U\to\mathbb R$,
$D(fh)=f\,Dh+h\,Df$, and $D$ annihilates constants.

## Facts & Assumptions

**Given:** The time-oriented smooth Lorentzian four-manifold $(M,g,N)$, the open subset $U$, the smooth observer congruence $n$ on $U$, and the fields $a$, $\theta$, $D$ of [[def-gr-congruence-acceleration-and-expansion]].

[L1] $\nabla$ is torsion-free and $g$-compatible: for all smooth vector fields $X,Y,Z$ on $M$, $X(g(Y,Z))=g(\nabla_XY,Z)+g(Y,\nabla_XZ)$ ([[def-gr-metric-selected-connection]] clause (a), [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L2] $\nabla_XY$ is a smooth vector field for smooth $X,Y$, so $\nabla_nn$ is smooth on $U$; $\nabla_XY$ is additive and $C^\infty(M)$-linear in $X$, and additive in $Y$ ([[def-affine-connection-on-a-smooth-manifold]]).

[L3] For a smooth curve $\gamma$ and a smooth vector field $V$ along $\gamma$, the covariant derivative along the curve satisfies $(D_sV)(s)=\nabla_{\gamma'(s)}\widetilde V$ for any smooth local extension $\widetilde V$ of $V$; if $\gamma$ is an integral curve of the smooth field $n$, then $\gamma'=n\circ\gamma$ and $D_s\gamma'=(\nabla_nn)\circ\gamma$ ([[def-covariant-derivative-along-a-curve]], [[def-geodesic-of-an-affine-connection]], [[def-gr-observer-congruence-and-adapted-charts]]).

[L4] $g_p(n_p,n_p)=-1$ for every $p\in U$ ([[def-gr-observer-and-rest-space]], [[def-gr-observer-congruence-and-adapted-charts]]).

[L5] In every smooth chart of $U$, for every smooth vector field $J$ on $U$, $\nabla_aJ^a=w^{-1}\partial_a(wJ^a)$ with $w=\sqrt{|\det(g_{ab})|}$, and the chart formula represents the chart-independent scalar $\nabla_aJ^a$ ([[lem-gr-metric-divergence-and-density-formula]] clause (c), [[def-christoffel-symbols-of-an-affine-connection]]).

[L6] The projection field $h$ of [[def-gr-observer-energy-momentum-current]] satisfies $h_p(a_p)=a_p$ for $a_p\in n_p^{\perp}$ and annihilates multiples of $n_p$ ([[lem-gr-observer-projection-decomposition]], [[def-gr-observer-and-rest-space]]).

## Proof

**Proof technique:** direct; differentiate the normalization $g(n,n)=-1$, identify the covariant derivative along observer curves, and express the divergence of $n$ in a chart.

1.1 (Spatiality of $a$.) By [L2], $a=\nabla_nn$ is a smooth vector field on $U$. For any smooth vector field $X$ on $U$, [L1] gives $X(g(n,n))=g(\nabla_Xn,n)+g(n,\nabla_Xn)=2g(\nabla_Xn,n)$; by [L4] the left-hand side is $X(-1)=0$, so $g(\nabla_Xn,n)=0$ for every $X$. Taking $X=n$ gives $g_p(a_p,n_p)=0$ at every $p\in U$; hence $a_p\in n_p^{\perp}$ and $h_p(a_p)=a_p$ by [L6]. This proves (a). [L1, L2, L4, L6, algebra]

2.1 (Acceleration of the observer curves.) Let $\gamma$ be an integral curve of $n$; then $\gamma'=n\circ\gamma$, and [L3] gives $D_s\gamma'(s)=(\nabla_nn)_{\gamma(s)}=a_{\gamma(s)}$ for every $s\in I$. If $a=0$ on $U$, then $D_s\gamma'=0$, so each observer curve is a geodesic in its parameter ([[def-geodesic-of-an-affine-connection]]); conversely, if every observer curve satisfies $D_s\gamma'=0$, then $a_{\gamma(s)}=0$ for every $s$ and every observer curve, and since every point of $U$ lies on an observer curve ([[def-gr-observer-congruence-and-adapted-charts]] clause (b)), $a=0$ on $U$. This proves (b). [L3, step 1.1, algebra]

2.2 (Divergence form.) Applying [L5] to $J:=n$ gives $\theta=\nabla_an^a=w^{-1}\partial_a(wn^a)$; in particular $\theta$ is smooth on $U$, since the right-hand side is smooth. The trace identities follow from $h^{ab}=g^{ab}+n^an^b$ and $n^b\nabla_an_b=\tfrac12\nabla_a(n\cdot n)=0$, the last by [L1] and [L4]: $h^{ab}\nabla_an_b=g^{ab}\nabla_an_b+n^an^b\nabla_an_b=\theta+0$. This proves (c). [L5, L1, L4, step 1.1, algebra]

3.1 (Derivation property.) For smooth $f,h$, the action of $\nabla$ on functions is a derivation and $n^a$ is a smooth coefficient, so $D(fh)=n^a\nabla_a(fh)=n^a(f\nabla_ah+h\nabla_af)=f\,Dh+h\,Df$; for a constant function $c$ one has $\nabla_ac=0$, so $Dc=0$. This proves (d). [L2, algebra] ∎

## Remarks

- **Dependence on the congruence only through $n$ and $\nabla$.** The
  acceleration and expansion are computed from $n$ and the metric-selected
  connection alone; no adapted chart, tetrad or foliation is required, and no
  global existence statement for such structures is used.

- **Choice convention.** The smooth structure of the tangent bundle underlying
  $n$ assumes $\mathrm{AC}_\omega$ through
  [[def-gr-observer-congruence-and-adapted-charts]]; no other choice principle
  is used here.
