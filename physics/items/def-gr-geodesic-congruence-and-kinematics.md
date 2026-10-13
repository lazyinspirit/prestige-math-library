---
id: def-gr-geodesic-congruence-and-kinematics
kind: definition
title: "Geodesic congruences and their expansion, shear and vorticity"
status: published
origin: session
domain: mathematics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-observer-congruence-and-adapted-charts, def-gr-observer-and-rest-space, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-geodesic-of-an-affine-connection, def-covariant-derivative-along-a-curve, lem-gr-parallel-transport-and-geodesic-speed, def-gr-smooth-covariant-two-tensor-field, def-gr-inverse-metric-and-musical-isomorphisms, thm-unique-maximal-integral-curve-through-each-point, def-gr-timelike-worldline-and-proper-time]
dependency_roles:
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-covariant-derivative-along-a-curve: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  thm-unique-maximal-integral-curve-through-each-point: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
justified_by: [lem-gr-kinematic-decomposition-identities]
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: geodesic congruences orthogonal to a spacelike hypersurface and the Weingarten map, section 6.2 printed pp. 161-163"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision): the geodesic deviation equation for neighbouring observers, section 4.5 printed pp. 46-48 (PDF pp. 47-49)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): the energy-momentum tensor and the weak energy condition (4.72), printed p. 117 (PDF p. 124)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]) and let
$U\subseteq M$ be a nonempty open subset.

**(a) Geodesic congruence.** A **smooth future unit timelike geodesic
congruence** on $U$ is an observer congruence $n$ on $U$
([[def-gr-observer-congruence-and-adapted-charts]],
[[def-gr-observer-and-rest-space]]), so that
$g(n,n)=-1$ and $g(n,N)<0$ on $U$, which in addition is geodesic:
$$\nabla_nn=0\qquad\text{on }U .$$
Thus each observer curve of the congruence is an affinely parametrized
geodesic ([[def-geodesic-of-an-affine-connection]]) and its flow parameter is
affine; by [[lem-gr-parallel-transport-and-geodesic-speed]] the tangent is
future unit timelike at every parameter value.

**(b) Observer curves.** By [[thm-unique-maximal-integral-curve-through-each-point]]
each $q\in U$ lies on a unique maximal integral curve
$\gamma_q:I_q\to U$ of $n$ with $\gamma_q(0)=q$; these are the **observer
curves** or **flow lines** of the congruence, and their parameter $s$ is the
**affine parameter** of the geodesic. The mathematical proper-time function
$\tau$ of [[def-gr-timelike-worldline-and-proper-time]], normalized by
$\tau(0)=0$, satisfies
$$\tau(s_2)-\tau(s_1)=\frac{1}{c}\int_{s_1}^{s_2}\sqrt{-g(n,n)}\,ds=\frac{s_2-s_1}{c}\qquad(s_1<s_2,\ s_1,s_2\in I_q).$$
Thus $\tau(s)=s/c$ with this normalization. This is the metric-defined
mathematical proper-time parameter, not a clock reading; the ideal-clock
interpretation is a separate physical assumption.

**(c) Kinematic quantities.** On $U$ define the smooth covariant $2$-tensor
field
$$B_{ab}:=\nabla_bn_a,\qquad n_a:=g_{ab}n^b ,$$
the **rest-space metric field**
$$h_{ab}:=g_{ab}+n_an_b,$$
with index-raised field $h^{ab}:=g^{ab}+n^an^b$ built from the inverse metric
([[def-gr-inverse-metric-and-musical-isomorphisms]]), and:
$$\theta:=g^{ab}B_{ab},\qquad \sigma_{ab}:=B_{(ab)}-\tfrac13\theta\,h_{ab},\qquad \omega_{ab}:=B_{[ab]},$$
the **expansion**, **shear** and **vorticity** of the congruence, where
$B_{(ab)}=\tfrac12(B_{ab}+B_{ba})$ and $B_{[ab]}=\tfrac12(B_{ab}-B_{ba})$.
The three fields $\theta$, $\sigma$, $\omega$ and the tensor $B$ are smooth
in every chart ([[def-gr-smooth-covariant-two-tensor-field]]), because
components of $\nabla n$, $g$ and $g^{-1}$ are smooth.

**(d) Scope.** The definition asserts no dynamical equation, no sign of
$\theta$ and no physical interpretation. In particular the identities making
$\sigma$ and $\omega$ rest-space tensors, their tracelessness and
antisymmetry, and the decomposition $B=\tfrac13\theta h+\sigma+\omega$ are
proved in [[lem-gr-kinematic-decomposition-identities]], not assumed here.
