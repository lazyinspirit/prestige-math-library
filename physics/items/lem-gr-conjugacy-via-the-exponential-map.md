---
id: lem-gr-conjugacy-via-the-exponential-map
kind: lemma
title: "The differential of the exponential map and conjugacy along a geodesic"
status: draft
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-jacobi-equation-and-geodesic-deviation, def-gr-jacobi-field-and-conjugate-instant, thm-gr-local-geodesics-and-exponential-map, thm-gr-point-normal-and-exponential-coordinate-charts, def-gr-curvature-tensor-and-derived-tensors, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-geodesic-of-an-affine-connection, def-covariant-derivative-along-a-curve, def-differential-of-a-smooth-map, thm-chain-rule-for-total-derivatives, def-interval]
dependency_roles:
  thm-gr-jacobi-equation-and-geodesic-deviation: mathematical-premise
  def-gr-jacobi-field-and-conjugate-instant: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-gr-point-normal-and-exponential-coordinate-charts: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), section 6.1: the exponential map, the definition of conjugate points via non-injectivity of (exp_p)_*, the Jacobi-field initial conditions J(0)=0, nabla J(0)=given vector orthogonal to the tangent, and the matrix A(t) with A(0)=0, nabla A=Id, printed pp. 159-161 (PDF pp. 159-161)"
      url: "https://link.springer.com/content/pdf/10.1007/s41114-019-0019-x.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: the one-parameter family exp_p(t(v+rw)) of geodesics and its deviation field, printed pp. 86-88 (PDF pp. 93-95)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 4.5: deviation vectors and the relative acceleration of one-parameter families of geodesics (4.21)-(4.24), printed pp. 46-48 (PDF pp. 47-49)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), let $p\in M$,
let $\mathcal E_p\subseteq T_pM$ be the exponential domain and
$\exp_p:\mathcal E_p\to M$ the exponential map of
[[thm-gr-local-geodesics-and-exponential-map]], and identify
$T_{h}(T_pM)$ with $T_pM$ by the canonical isomorphism for every
$h\in T_pM$ ([[def-differential-of-a-smooth-map]]).

**(a) The differential in terms of Jacobi fields.** Let $v\in T_pM$, let
$s_1>0$ satisfy $s_1v\in\mathcal E_p$, and let $u\in T_pM$. Let
$\gamma:[0,s_1]\to M$, $\gamma(t):=\exp_p(tv)$ (well defined by star-shapedness
of $\mathcal E_p$), and let $J_u$ be the unique Jacobi field along
$\gamma$ with $J_u(0)=0$ and $D_tJ_u(0)=u$
([[thm-gr-jacobi-equation-and-geodesic-deviation]] clause (c),
[[def-gr-jacobi-field-and-conjugate-instant]] clause (b)). Then
$$d(\exp_p)_{tv}(tu)=J_u(t)\qquad(0\le t\le s_1);$$
in particular $d(\exp_p)_{s_1v}(s_1u)=J_u(s_1)$ and, in the special case
$s_1=1$, $v\in\mathcal E_p$, $d(\exp_p)_v(u)=J_u(1)$.

**(b) Conjugacy as a kernel condition.** With the notation of (a),
$d(\exp_p)_{s_1v}$ is injective if and only if no nonzero Jacobi field
along $\gamma$ vanishes at $t=0$ and at $t=s_1$. Moreover
$\ker d(\exp_p)_{s_1v}=s_1\{u\in T_pM:J_u(s_1)=0\}$, so
$\dim\ker d(\exp_p)_{s_1v}$ equals the multiplicity of the conjugate
instant $s_1$ whenever $\gamma(s_1)$ is conjugate to $p$ along $\gamma$
([[def-gr-jacobi-field-and-conjugate-instant]] clause (d)).

**(c) Conjugate instants of a geodesic.** Let $\gamma:I\to M$ be a smooth
geodesic with $\gamma(0)=p$, and let $s_1>0$ with $s_1\in I$ and
$s_1\gamma'(0)\in\mathcal E_p$. Then $\gamma(s_1)$ is conjugate to
$\gamma(0)=p$ along $\gamma$ if and only if $d(\exp_p)_{s_1\gamma'(0)}$ is
not injective.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold with metric-selected connection, a point $p$, the exponential domain $\mathcal E_p$ and map $\exp_p$, a vector $v\in\mathcal E_p$ and a vector $w\in T_pM$.

[L1] $\mathcal E_p$ is open and star-shaped about $0$; for every $h\in\mathcal E_p$ the curve $t\mapsto\exp_p(th)$ on an interval containing $[0,1]$ is the geodesic $\gamma_{p,h}$ with $\gamma_{p,h}(0)=p$, $\gamma_{p,h}'(0)=h$, and $\exp_p(th)=\gamma_{p,h}(t)$; the map $(t,p,h)\mapsto\gamma_{p,h}(t)$ is smooth on its domain ([[thm-gr-local-geodesics-and-exponential-map]] clauses (a)-(d)).

[L2] For a smooth two-parameter map $\Phi(r,s)$, the variation field $\partial_r\Phi$ of a family of geodesics is a Jacobi field along each longitudinal geodesic, the two covariant derivatives satisfy $D_s\partial_r\Phi=D_r\partial_s\Phi$ whenever the longitudinal curves are geodesics, and the differential of a smooth map is computed by the chain rule ([[thm-gr-jacobi-equation-and-geodesic-deviation]] clauses (a)-(b), [[def-differential-of-a-smooth-map]], [[thm-chain-rule-for-total-derivatives]]).

[L3] A Jacobi field along a geodesic is determined by its value and covariant derivative at one parameter; the map from initial data $(J_0,J_1)$ to Jacobi fields is a linear isomorphism onto $T_{\gamma(s_0)}M\oplus T_{\gamma(s_0)}M$ ([[thm-gr-jacobi-equation-and-geodesic-deviation]] clause (c)).

[L4] A field $J$ along a geodesic is a Jacobi field when $D_t^2J=R(\gamma',J)\gamma'$; conjugacy at a pair of instants means the existence of a nonzero Jacobi field vanishing there, and the multiplicity is the dimension of the space of such fields ([[def-gr-jacobi-field-and-conjugate-instant]] clauses (b) and (d)).

[L5] The canonical identification $T_h(T_pM)\cong T_pM$ of a vector space with its tangent space at a point, and the linearity of the differential in its second argument ([[def-differential-of-a-smooth-map]]).

## Proof

**Proof technique:** direct.

1.1 (The two-parameter family.) Fix $v\in T_pM$, $u\in T_pM$ and $s_1>0$ with $s_1v\in\mathcal E_p$, and put $\Phi(r,s):=\exp_p\bigl(s(v+ru)\bigr)$ for $s\in[0,s_1]$ and $|r|$ small. This is well defined and smooth: $\mathcal E_p$ is open and star-shaped by [L1], for small $|r|$ the vector $v+ru$ is close to $v$, hence $s_1(v+ru)\in\mathcal E_p$, and then $s(v+ru)=\frac{s}{s_1}\bigl(s_1(v+ru)\bigr)\in\mathcal E_p$ for $0\le s\le s_1$. For each $r$, $s\mapsto\Phi(r,s)$ is the geodesic with initial tangent $v+ru$ at $s=0$ by [L1]; its tangent field is $T:=\partial_s\Phi$, and $T(0,r)=v+ru$. [L1, given]

2.1 (The variation field is Jacobi.) By [L2], $J(s):=\partial_r\Phi(0,s)$ is a Jacobi field along $s\mapsto\Phi(0,s)=\exp_p(sv)=\gamma(s)$, and $D_sJ=D_rT$. Its initial data are $J(0)=\partial_r\Phi(0,0)=0$ because $\Phi(r,0)=\exp_p(0)=p$ for all $r$, and $D_sJ(0)=D_rT(0,0)=\partial_r(v+ru)|_{r=0}=u$, because the curve $r\mapsto\Phi(r,0)$ is constant and hence $D_r$ at $s=0$ is the ordinary derivative. [step 1.1, L1, L2, algebra]

3.1 (Value at the parameter $t$.) For $0\le t\le s_1$, by [L2] and the chain rule, $J(t)=\partial_r\bigl(\exp_p(t(v+ru))\bigr)|_{r=0}=d(\exp_p)_{tv}(tu)$, the derivative of $r\mapsto t(v+ru)$ at $r=0$ being $tu$. [step 2.1, L2, L5, algebra]

4.1 (Identification with $J_u$.) By step 2.1, $J$ is a Jacobi field along $\gamma$ with initial data $(0,u)$; by the uniqueness and linearity of the initial-data correspondence [L3], $J=J_u$. Combining with step 3.1, $d(\exp_p)_{tv}(tu)=J_u(t)$ for every $t\in[0,s_1]$; at $t=0$ both sides vanish. The cases $t=s_1$ and $s_1=1$ are the stated special cases, so (a) holds. [step 3.1, L3, algebra]

5.1 (Kernel and conjugacy.) By step 4.1 with $t=s_1$, $d(\exp_p)_{s_1v}(s_1u)=J_u(s_1)$; since $u\mapsto s_1u$ is a linear isomorphism, $\ker d(\exp_p)_{s_1v}=\{s_1u:J_u(s_1)=0\}$. By [L3], $u\mapsto J_u$ is a linear isomorphism from $T_pM$ onto the Jacobi fields along $\gamma$ vanishing at $0$ (those with initial value $0$), so the kernel is nonzero exactly when some nonzero Jacobi field vanishes at $0$ and $s_1$, and its dimension, namely $\dim\{u:J_u(s_1)=0\}$, is the multiplicity by [L4]. This proves (b). [step 4.1, L3, L4, algebra]

6.1 (Geodesics starting at $p$.) Let $\gamma:I\to M$ be a geodesic with $\gamma(0)=p$ and let $s_1\gamma'(0)\in\mathcal E_p$. By [L1], $\gamma(s)=\exp_p(s\gamma'(0))$ for those $s\in I$ with $s\gamma'(0)\in\mathcal E_p$, and $s_1$ is such a value; so the claim is the special case of step 5.1 with $v=\gamma'(0)$. This proves (c) and completes the proof. [step 5.1, L1, L4, algebra] ∎

## Remarks

- **No Riemannian positivity is used.** The statement and proof use only the smooth exponential map, the geodesic-variation equation and the initial-value theory of Jacobi fields. Positivity of the metric on a normal bundle enters only in the separate index-form lemma [[lem-gr-normal-index-form-factorization]].

- **The base point.** Formula (a) compares the differential at $tv$ with a Jacobi field along the geodesic from $p$; the factor $t$ in the argument is essential and is what makes the kernel computation of (b) exact. The convention $v\in\mathcal E_p$ ensures that the entire radial segment $[0,v]$ is in the exponential domain, so no completeness of $(M,g)$ is assumed.
