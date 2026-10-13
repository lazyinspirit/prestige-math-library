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
deps: [def-geodesic-of-an-affine-connection, lem-gr-parallel-transport-and-geodesic-speed, thm-gr-local-geodesics-and-exponential-map, def-gr-smooth-lorentzian-objects, def-covariant-derivative-along-a-curve, def-christoffel-symbols-of-an-affine-connection, prop-coordinate-geodesic-equation, ex-gr-flat-space-geodesics-and-proper-time, thm-ftc-first-part, thm-continuous-implies-integrable, thm-derivative-of-exponential, cor-exponential-is-a-bijection-onto-positive-reals, thm-euclidean-inverse-function-theorem]
dependency_roles:
  def-geodesic-of-an-affine-connection: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  ex-gr-flat-space-geodesics-and-proper-time: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  cor-exponential-is-a-bijection-onto-positive-reals: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
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
   which is the image of the affine geodesic $\gamma(\sigma):=(\sigma,0,0,0)$
   on $(0,\infty)$; nevertheless $\beta$ is not a geodesic in its own parameter, because
   $D_s\beta'(s)=(2,0,0,0)\neq0$ for every $s>0$.
2. The reparametrization is explicit: $\beta=\gamma\circ h$ with
   $h(s)=s^2$, and
   $D_s\beta'(s)=h''(s)\,\gamma'(h(s))=(2,0,0,0)$, in agreement with the
   general formula that a reparametrized geodesic is geodesic exactly for
   affine $h$ ([[lem-gr-parallel-transport-and-geodesic-speed]], clause 4).
3. More generally, let $\beta:I\to M$ be a regular $C^2$ curve on an open interval in a smooth Lorentzian model with its metric-selected connection, and suppose $D_s\beta'=f(s)\beta'$ for a continuous real function $f$ on $I$. Then $\beta$ admits an orientation-preserving $C^2$ reparametrization as an affinely parametrized geodesic with exactly the same image. Explicitly, for any $s_0\in I$, set
   $$F(s):=\int_{s_0}^s f(t)\,dt,\qquad a(s):=\exp(F(s)),\qquad \sigma(s):=\int_{s_0}^s a(t)\,dt .$$
   The map $\sigma$ is a $C^2$ diffeomorphism onto the open interval $\sigma(I)$, and $\widehat\gamma:=\beta\circ\sigma^{-1}$ is geodesic there. For the displayed $\beta(s)=(s^2,0,0,0)$ one has $f=1/s$; choosing $s_0=1$ gives $a=s$, $\sigma=(s^2-1)/2$, recovering an affine parameter of the same half-axis.

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(\mathbb R^4,g)$ with identity chart and vanishing Christoffel symbols, the affine geodesic $\gamma(\sigma)=(\sigma,0,0,0)$, and the curve $\beta(s)=(s^2,0,0,0)$ on $(0,\infty)$; for clause 3, a regular $C^2$ curve on an open interval in a smooth Lorentzian model, satisfying $D_s\beta'=f\beta'$ with continuous $f$.

[L1] In this chart a curve is a geodesic if and only if all its coordinate components are affine functions of the parameter; equivalently $\ddot x^k=0$ ([[prop-coordinate-geodesic-equation]], [[ex-gr-flat-space-geodesics-and-proper-time]]).

[L2] The covariant derivative in an arbitrary chart is $D_sV^a=\partial_sV^a+\Gamma^a{}_{bc}\beta'{}^bV^c$; in the flat identity chart it is componentwise differentiation, $D_sV=\sum_a\partial_sV^a\partial_a$ ([[def-covariant-derivative-along-a-curve]], [[lem-gr-parallel-transport-and-geodesic-speed]]).

[L3] For a geodesic $\gamma$ with nowhere-zero tangent and a $C^2$ diffeomorphism $h$ onto its image, $\gamma\circ h$ is a geodesic if and only if $h''=0$; in general $D_s(\gamma\circ h)'=h''(\gamma'\circ h)$ ([[lem-gr-parallel-transport-and-geodesic-speed]], clause 4; [[thm-gr-local-geodesics-and-exponential-map]]).

[L4] A curve is geodesic exactly when $D_s\gamma'=0$ ([[def-geodesic-of-an-affine-connection]]).


[L5] A continuous real function is integrable on every compact subinterval, and its integral function has derivative that function. The exponential is smooth, positive on $\mathbb R$, and satisfies $(\exp)'=\exp$. A $C^1$ real map with nonzero derivative has a $C^1$ local inverse with reciprocal derivative ([[thm-continuous-implies-integrable]], [[thm-ftc-first-part]], [[thm-derivative-of-exponential]], [[cor-exponential-is-a-bijection-onto-positive-reals]], [[thm-euclidean-inverse-function-theorem]]).

## Verification

**Proof technique:** direct.

1.1 The curve $\gamma$ is geodesic by [L1] because its components are affine; on its parameter interval $(0,\infty)$ its image is the positive $x^0$-axis, and $\beta=\gamma\circ h$ with $h(s)=s^2$, whose image is the same half-axis. [given, L1, algebra]

1.2 By [L2], $D_s\beta'(s)=\partial_s(2s,0,0,0)=(2,0,0,0)\neq0$ for every $s>0$; by [L4], $\beta$ is therefore not an affinely parametrized geodesic, so its parameter is not affine. This is consistent with $h''(s)=2\neq0$ in the criterion of [L3]. [given, L2, L3, L4, algebra]

1.3 (General affine reparametrization.) For the regular curve of clause 3, [L5] gives $F'=f$, $a'=fa$ and $\sigma'=a>0$. Thus $\sigma$ is $C^2$, strictly increasing, and its image is an open interval: near every point [L5] gives a local inverse, and these agree by injectivity. Its global inverse $h:=\sigma^{-1}$ is $C^1$ with $h'=1/(a\circ h)$; since $a$ is $C^1$, this formula makes $h'$ $C^1$, so $h$ is $C^2$ and $h''=-f(h)/(a(h))^2$. Applying the component formula [L2] in any local chart gives
$D_\sigma\widehat\gamma'=(h')^2(D_s\beta')\circ h+h''(\beta'\circ h)=\bigl((h')^2f(h)+h''\bigr)(\beta'\circ h)=0.$
Hence $\widehat\gamma$ is an affinely parametrized geodesic by [L4], and its image is exactly $\beta(I)$ because $h$ maps $\sigma(I)$ onto $I$. All integrals here are over compact segments inside $I$; no endpoint convergence or completeness is required. [L2, L4, L5, algebra]

2.1 Directly from [L3], $D_s\beta'(s)=h''(s)(\gamma'\circ h)(s)=2(1,0,0,0)$, which matches the computation of step 1.2; dividing by $h'(s)=2s$ gives the proportionality $D_s\beta'=f\beta'$ with $f(s)=1/s$. [step 1.2, L3, algebra]

3.1 For $f(s)=1/s$ and $s_0=1$, the positive function $a(s)=s$ satisfies $a'=fa$, $a(1)=1$, so it equals $\exp(F(s))$ (differentiate $a\exp(-F)$). Integrating gives $\sigma(s)=(s^2-1)/2$. Thus the displayed curve has a geodesic image but is not affine in $s$, and the general converse of clause 3 is verified by step 1.3. [step 2.1, step 1.3, L5, algebra] ∎
