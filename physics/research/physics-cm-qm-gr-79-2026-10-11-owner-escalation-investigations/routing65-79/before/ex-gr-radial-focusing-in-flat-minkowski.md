---
id: ex-gr-radial-focusing-in-flat-minkowski
kind: example
title: "Sharp radial focusing in flat Minkowski space: equality in the Raychaudhuri bound without a singularity"
status: draft
origin: session
domain: mathematics
dependency_level: 14
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-gr-flat-minkowski-model-and-inertial-charts, lem-gr-future-causal-classification-by-a-timelike-field, def-time-orientation-and-future-causal-sets, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, def-gr-observer-congruence-and-adapted-charts, def-gr-observer-and-rest-space, def-gr-geodesic-congruence-and-kinematics, lem-gr-kinematic-decomposition-identities, thm-gr-timelike-raychaudhuri-and-local-focusing, lem-gr-constant-component-chart-flatness, prop-coordinate-geodesic-equation, def-causal-classification-of-lorentz-vectors]
dependency_roles:
  def-gr-flat-minkowski-model-and-inertial-charts: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-geodesic-congruence-and-kinematics: mathematical-premise
  lem-gr-kinematic-decomposition-identities: mathematical-premise
  thm-gr-timelike-raychaudhuri-and-local-focusing: mathematical-premise
  lem-gr-constant-component-chart-flatness: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: expansion and shear, the Riccati equation (6.4) and the Raychaudhuri equation (6.5)-(6.6), section 6.2 printed pp. 161-164"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision): the geodesic deviation equation, section 4.5 printed pp. 46-48 (PDF pp. 47-49)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): the energy-momentum tensor and the weak energy condition (4.72), printed p. 117 (PDF p. 124)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Example

Let $(A,\eta,N)$ be the flat model of
[[def-gr-flat-minkowski-model-and-inertial-charts]], written $A=\mathbb R^4$,
with its global inertial chart $x=(t,z)$. Fix $T>0$ and let $e:=x^{-1}(T,0)$
be the event at coordinate time $T$ on the worldline of the origin. Let
$$O:=\bigl\{q\in A:\ T-t(q)>|z(q)|_{\mathrm e}\bigr\}$$
be the interior of the past light cone of $e$, and define
$$\rho:O\to(0,\infty),\qquad \rho(q):=\sqrt{\bigl(T-t(q)\bigr)^2-|z(q)|_{\mathrm e}^2},$$
and the vector field $W$ on $O$ whose chart components are
$$W^a(q):=\frac{e^a-q^a}{\rho(q)}\qquad(a=0,1,2,3).$$
Then:

**(i)** $W$ is a smooth future unit timelike vector field on the open set
$O$; it is a smooth future unit timelike geodesic congruence in the sense of
[[def-gr-geodesic-congruence-and-kinematics]] clause (a).

**(ii)** The maximal forward flow line of $W$ through $p\in O$ is
$$\gamma_p(s)=e-\Bigl(1-\frac{s}{\rho(p)}\Bigr)\bigl(e-p\bigr),\qquad s\in[0,\rho(p)),$$
with $\rho(\gamma_p(s))=\rho(p)-s$ and $\gamma_p(0)=p$; it reaches $e$ at
$s=\rho(p)$. The parameter $s=0$ is included as a one-sided endpoint, and
$e\notin O$ so it is excluded from the flow domain. Each affine geodesic
$s\mapsto\gamma_p(s)$ extends beyond $s=\rho(p)$ as a straight line of $A$
defined for all real $s$.

**(iii)** With $h_{ab}=g_{ab}+W_aW_b$ the rest-space metric of the congruence
and $B_{ab}=\nabla_bW_a$, one has
$$B_{ab}=-\frac{1}{\rho}\,h_{ab},\qquad \theta=-\frac{3}{\rho},\qquad \sigma_{ab}=0,\qquad \omega_{ab}=0 .$$

**(iv)** Along the flow line through a point $p$ with
$\theta_0:=\theta(p)=-3/\rho(p)<0$ one has, for $0\le s<\rho(p)$,
$$\theta\bigl(\gamma_p(s)\bigr)=-\frac{3}{\rho(p)-s},\qquad \frac{1}{-\theta(\gamma_p(s))}=\frac{1}{-\theta_0}-\frac{s}{3}:$$
the Raychaudhuri focusing bound of
[[thm-gr-timelike-raychaudhuri-and-local-focusing]] clause (b) holds with
equality, and the congruence cannot be continued as a smooth geodesic
congruence to affine parameter $3/(-\theta_0)=\rho(p)$ or beyond.

**(v)** The spacetime is flat, the Ricci tensor vanishes identically,
every maximal geodesic of the model has domain all of $\mathbb R$, and at
$s=\rho(p)$ the flow lines merely meet at the event $e$, where the field $W$
is not defined. Thus the finite-time breakdown in (iv) is the focal crossing
of the congruence and not a singularity of the spacetime or of any individual
geodesic.

## Facts & Assumptions

**Given:** The flat model $(A,\eta,N)$ of [[def-gr-flat-minkowski-model-and-inertial-charts]], its global inertial chart $x$, the event $e=x^{-1}(T,0)$ with $T>0$, the open set $O$, the function $\rho$ and the field $W$, and a point $p\in O$.

[L1] In the global inertial chart $x$, $\eta=\operatorname{diag}(-1,1,1,1)$, the coordinate field $\partial_0=N$ is future unit timelike and satisfies $\eta(\partial_0,\partial_0)=-1$; the coordinate connection of the chart is the metric-selected connection, its Christoffel symbols vanish, straight coordinate lines are its geodesics and the curvature and Ricci tensor vanish identically ([[def-gr-flat-minkowski-model-and-inertial-charts]] clauses (a)-(c), [[lem-gr-constant-component-chart-flatness]], [[prop-coordinate-geodesic-equation]]).

[L2] With $y:=e-q$ one has $y^0=T-t(q)$, $y^i=-z^i(q)$ and $\eta(y,y)=-(T-t(q))^2+|z(q)|_{\mathrm e}^2=-\rho(q)^2$; hence on $O$ the vector $y$ is timelike and $W=y/\rho$ satisfies $\eta(W,W)=-1$ and $\eta(W,N)=\eta(W,\partial_0)=-(T-t)/\rho<0$, so $W$ lies in $C_q^+$ and is future-directed ([[def-causal-classification-of-lorentz-vectors]], [[lem-gr-future-causal-classification-by-a-timelike-field]] clause 3, [[def-time-orientation-and-future-causal-sets]], [[def-gr-smooth-lorentzian-objects]]).

[L3] A smooth future unit timelike vector field on an open set is an observer congruence, and if it is geodesic it is a smooth future unit timelike geodesic congruence ([[def-gr-observer-congruence-and-adapted-charts]], [[def-gr-observer-and-rest-space]], [[def-gr-geodesic-congruence-and-kinematics]] clause (a)).

[L4] For a smooth geodesic congruence the expansion, shear and vorticity are $\theta=g^{ab}B_{ab}$, $\sigma_{ab}=B_{(ab)}-\tfrac13\theta h_{ab}$, $\omega_{ab}=B_{[ab]}$ with $B_{ab}=\nabla_bW_a$ and $h_{ab}=g_{ab}+W_aW_b$, and $h_{ab}W^b=0$, $g^{ab}h_{ab}=3$ ([[def-gr-geodesic-congruence-and-kinematics]] clauses (c), [[lem-gr-kinematic-decomposition-identities]] clause (b)).

[L5] Raychaudhuri equation and focusing: along a flow line of a geodesic congruence, $\frac{d\theta}{ds}=-\tfrac13\theta^2-\sigma_{ab}\sigma^{ab}+\omega_{ab}\omega^{ab}-\operatorname{Ric}_{ab}W^aW^b$; if $\omega=0$, $\operatorname{Ric}(W,W)\ge0$ and $\theta_0<0$ at $s_0$, then $\frac{1}{-\theta(s)}\le\frac{1}{-\theta_0}-\frac{s-s_0}{3}$ ([[thm-gr-timelike-raychaudhuri-and-local-focusing]] clauses (a), (b)).

## Verification

**Proof technique:** direct.

1.1 (The field is a smooth unit future timelike geodesic congruence.) On $O$ the function $\rho$ is smooth and strictly positive, and the components $W^a=(e^a-q^a)/\rho$ are smooth; by [L2], $\eta(W,W)=-1$ and $W$ is future-directed relative to the time-orientation field $N=\partial_0$. It remains to verify the geodesic condition. Put $y:=e-q$, so $y^0=T-t$ and $y^i=-z^i$. From $\rho^2=(T-t)^2-|z|_{\mathrm e}^2$ one computes $\partial_0\rho=-(T-t)/\rho=y_0/\rho$ and $\partial_i\rho=-z^i/\rho=y_i/\rho$, hence $\partial_b\rho=y_b/\rho$ with $y_b=\eta_{bc}y^c$; also $\partial_b y^a=-\delta^a_b$. Therefore $$\partial_bW^a=\partial_b\Bigl(\frac{y^a}{\rho}\Bigr)=-\frac{\delta^a_b}{\rho}-\frac{y^ay_b}{\rho^3}=-\frac{\delta^a_b}{\rho}-\frac{W^aW_b}{\rho}.$$ Using $y^by_b=\eta(y,y)=-\rho^2$, $$W^b\partial_bW^a=\frac{y^b}{\rho}\Bigl(-\frac{\delta^a_b}{\rho}-\frac{y^ay_b}{\rho^3}\Bigr)=-\frac{y^a}{\rho^2}-\frac{y^a(y^by_b)}{\rho^4}=-\frac{y^a}{\rho^2}+\frac{y^a}{\rho^2}=0.$$ Since the metric-selected connection of the flat model has vanishing Christoffel symbols in this chart, $\nabla_WW=0$; with [L3] the field $W$ is a smooth future unit timelike geodesic congruence. This proves (i). [given, L1, L2, L3, algebra]

2.1 (The flow lines.) For fixed $p\in O$ define $\gamma(s):=e-(1-s/\rho(p))(e-p)$ for $s\in[0,\rho(p))$. Then $\gamma(0)=p$, $\gamma$ is affine in $s$ with derivative $\gamma'(s)=(e-p)/\rho(p)=W(p)$, a constant vector; by [L1] straight coordinate lines are geodesics, so $s\mapsto\gamma(s)$ is a geodesic of the model with $\gamma'(s)=W(p)$. Its $\rho$-value is $\rho(\gamma(s))=\sqrt{-\eta(e-\gamma(s),e-\gamma(s))}$; since $e-\gamma(s)=(1-s/\rho(p))(e-p)$, one gets $\rho(\gamma(s))=(1-s/\rho(p))\rho(p)=\rho(p)-s$, which is positive for $s<\rho(p)$ and vanishes at $s=\rho(p)$; in particular $\gamma(s)\in O$ for $0\le s<\rho(p)$ and $\gamma(\rho(p))=e$ in the ambient affine space $A$. Also $W(\gamma(s))=(e-\gamma(s))/\rho(\gamma(s))=(e-p)/\rho(p)=\gamma\prime(s)$, so it is an integral curve. Therefore $\gamma$ is the maximal forward flow line of $W$ through $p$, with $e$ as its limiting focal event at finite affine parameter $\rho(p)$. The same straight line continues for all real $s$ and is a geodesic of $A$ defined on all of $\mathbb R$ by [L1]. This proves (ii). [step 1.1, given, L1]

2.2 (The kinematic quantities.) By [L1] the connection is flat and $B_{ab}=\nabla_bW_a=\partial_bW_a$; from the computation in step 1.1, with $W_a=y_a/\rho$, $$B_{ab}=\partial_b\Bigl(\frac{y_a}{\rho}\Bigr)=-\frac{\eta_{ab}}{\rho}-\frac{y_ay_b}{\rho^3}=-\frac{1}{\rho}\bigl(\eta_{ab}+W_aW_b\bigr)=-\frac{h_{ab}}{\rho}.$$ In particular $B$ is symmetric, so $\omega_{ab}=B_{[ab]}=0$, and $B_{ab}W^b=-h_{ab}W^b/\rho=0$. For the expansion, [L4] and $g^{ab}h_{ab}=3$ give $\theta=g^{ab}B_{ab}=-\frac{1}{\rho}g^{ab}h_{ab}=-\frac{3}{\rho}$; then the shear is $\sigma_{ab}=B_{(ab)}-\tfrac13\theta h_{ab}=-\frac{h_{ab}}{\rho}+\frac{1}{\rho}h_{ab}=0$. This proves (iii). [step 1.1, given, L1, L4, algebra]

3.1 (The focusing bound is attained and the congruence does not extend.) Let $\gamma=\gamma_p$ be the flow line of step 2.1 and write $\theta(s):=\theta(\gamma(s))$. By step 2.2 and $\rho(\gamma(s))=\rho(p)-s$, $\theta(s)=-3/(\rho(p)-s)$ for $0\le s<\rho(p)$. Hence $\theta_0:=\theta(p)=-3/\rho(p)<0$ and $$\frac{1}{-\theta(s)}=\frac{\rho(p)-s}{3}=\frac{1}{-\theta_0}-\frac{s}{3},$$ so the focusing bound of [L5] holds with equality for $s_0=0$. To see directly that this congruence field cannot extend continuously across its focal event $e$, use the translation identification of tangent spaces of $A=\mathbb R^4$ and set $v_1:=\partial_0|_e$ and $v_2:=\sqrt{2}\partial_0|_e+\partial_1|_e$. The flat metric gives $\eta(v_i,v_i)=-1$ and $\eta(v_i,N_e)<0$ for $i=1,2$, while $v_1\ne v_2$. Put $p_i:=e-v_i\in O$. Their flow lines have $\gamma_{p_i}(s)=e-(1-s)v_i$ for $0\le s<1$ and $W(\gamma_{p_i}(s))=v_i$; both base curves tend to $e$ as $s\uparrow1$, but the two limits of $W$ are distinct. A continuous extension of $W$ to $e$ would have to take both values $v_1$ and $v_2$, which is impossible. Thus this smooth congruence has no continuous, hence no smooth, extension through $e$; the individual affine geodesics still continue in $A$. This proves the local nonextension directly, independent of continuation beyond the region to which the hypotheses of [L5] apply. [step 2.2, given, L4, L5, algebra, construct]

4.1 (No singularity.) By [L1] the curvature and the Ricci tensor of the model vanish identically, every maximal geodesic of the model is a straight coordinate line with domain all of $\mathbb R$, and at $s=\rho(p)$ all flow lines pass through the single event $e$; the field $W$ is not defined at $e$ because $\rho(e)=0$. Hence the finite-time breakdown of the congruence in step 3.1 is exactly the focal crossing of the flow lines at $e$, while the spacetime and each individual geodesic continue; the example therefore shows that the local focusing theorem's conclusion is sharp and must be read as a statement about the congruence, not as a singularity. This proves (v) and completes the example. [step 2.1, step 3.1, given, L1] ∎

## Remarks

- **Equality case.** The radial congruence of future-directed geodesics converging to one event achieves equality in the Raychaudhuri focusing inequality with $\operatorname{Ric}(W,W)=0$, $\sigma=0$, $\omega=0$ and initial $\theta_0=-3/\rho(p)$; the trace of the extrinsic curvature of the level sets of $\rho$ (the hyperbolic "spheres" around $e$) is $-3/\rho$ in the convention of this library.
- **Interpretation cautions.** The ray $\theta\to-\infty$ at $s\to\rho(p)$ is an artifact of the congruence, not of the geometry: the curvature is zero and the geodesics extend. No singularity theorem is proved or illustrated by this computation.
