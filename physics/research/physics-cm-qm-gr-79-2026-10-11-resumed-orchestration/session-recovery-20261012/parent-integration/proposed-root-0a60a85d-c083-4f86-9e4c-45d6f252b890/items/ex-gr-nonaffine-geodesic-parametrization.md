---
id: ex-gr-nonaffine-geodesic-parametrization
kind: example
title: "A geodesic image with a non-affine parameter, and the equation of a pregeodesic"
status: draft
origin: session
domain: mathematics
dependency_level: 10
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-geodesic-of-an-affine-connection, lem-gr-parallel-transport-and-geodesic-speed, thm-gr-local-geodesics-and-exponential-map, def-gr-smooth-lorentzian-objects, def-covariant-derivative-along-a-curve, def-christoffel-symbols-of-an-affine-connection, prop-coordinate-geodesic-equation, ex-gr-flat-space-geodesics-and-proper-time]
dependency_roles:
  def-geodesic-of-an-affine-connection: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  ex-gr-flat-space-geodesics-and-proper-time: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: the geodesic equation (3.47), the affine freedom and the equation satisfied by a non-affine geodesic parameter, printed pp. 70-71 (PDF pp. 77-78)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 3.3: reparametrizations of a geodesic satisfy $\\nabla_YY=fY$, and affine parameters form a two-parameter family, printed pp. 37-38 (PDF pp. 38-39)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Example

Let $M=\mathbb R^4$ carry the identity chart $x$, the flat metric
$g=\operatorname{diag}(-1,1,1,1)$ and the metric-selected connection
$\nabla$, which in this chart has $\Gamma^a{}_{bc}=0$; its geodesics are the
affine lines ([[ex-gr-flat-space-geodesics-and-proper-time]]).

1. The curve $\beta:(0,\infty)\to\mathbb R^4$,
   $\beta(s):=(s^2,0,0,0)$, has as image the positive half of the $x^0$-axis,
   which is the image of the affine geodesic $\gamma(\sigma):=(\sigma,0,0,0)$;
   nevertheless $\beta$ is not a geodesic in its own parameter, because
   $D_s\beta'(s)=(2,0,0,0)\neq0$ for every $s>0$.
2. The reparametrization is explicit: $\beta=\gamma\circ h$ with
   $h(s)=s^2$, and
   $D_s\beta'(s)=h''(s)\,\gamma'(h(s))=(2,0,0,0)$, in agreement with the
   general formula that a reparametrized geodesic is geodesic exactly for
   affine $h$ ([[lem-gr-parallel-transport-and-geodesic-speed]], clause 4).
3. In the language of the pregeodesic equation, $\beta$ satisfies
   $\nabla_{\beta'}\beta'=f\beta'$ with $f(s)=1/s=h''(s)/h'(s)$; a curve with
   this property and $f$ continuous is the image of a geodesic, but its own
   parameter is not affine.

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(\mathbb R^4,g)$ with identity chart and vanishing Christoffel symbols, the affine geodesic $\gamma(\sigma)=(\sigma,0,0,0)$, and the curve $\beta(s)=(s^2,0,0,0)$ on $(0,\infty)$.

[L1] In this chart a curve is a geodesic if and only if all its coordinate components are affine functions of the parameter; equivalently $\ddot x^k=0$ ([[prop-coordinate-geodesic-equation]], [[ex-gr-flat-space-geodesics-and-proper-time]]).

[L2] The covariant derivative along a curve in this chart is componentwise differentiation, $D_sV=\sum_a\partial_sV^a\partial_a$ ([[def-covariant-derivative-along-a-curve]], [[lem-gr-parallel-transport-and-geodesic-speed]]).

[L3] For a geodesic $\gamma$ and a $C^2$ diffeomorphism $h$ onto its image, $\gamma\circ h$ is a geodesic if and only if $h''=0$; in general $D_s(\gamma\circ h)'=h''(\gamma'\circ h)$ ([[lem-gr-parallel-transport-and-geodesic-speed]], clause 4; [[thm-gr-local-geodesics-and-exponential-map]]).

[L4] A vector field along a curve is geodesic exactly when $D_s\gamma'=0$ ([[def-geodesic-of-an-affine-connection]]).

## Verification

**Proof technique:** direct.

1.1 The curve $\gamma$ is geodesic by [L1] because its components are affine; its image is the positive $x^0$-axis, and $\beta=\gamma\circ h$ with $h(s)=s^2$, whose image is the same half-axis. [given, L1, algebra]

1.2 By [L2], $D_s\beta'(s)=\partial_s(2s,0,0,0)=(2,0,0,0)\neq0$ for every $s>0$; by [L4], $\beta$ is therefore not an affinely parametrized geodesic, so its parameter is not affine. This is consistent with $h''(s)=2\neq0$ in the criterion of [L3]. [given, L2, L3, L4, algebra]

2.1 Directly from [L3], $D_s\beta'(s)=h''(s)(\gamma'\circ h)(s)=2(1,0,0,0)$, which matches the computation of step 1.2; dividing by $h'(s)=2s$ gives the proportionality $D_s\beta'=f\beta'$ with $f(s)=1/s$. [step 1.2, L3, algebra]

3.1 Consequently the image of $\beta$ is exactly the image of an affine geodesic while $\beta$ itself fails the geodesic equation in its parameter; the two statements "the image is a geodesic image" and "the curve is parametrized affinely" are different, and only the latter is preserved under a reparametrization, exactly as clause 4 of [L3] states. [step 2.1, L3, algebra] ∎
