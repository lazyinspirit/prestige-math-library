---
id: thm-gr-timelike-raychaudhuri-and-local-focusing
kind: theorem
title: "The Raychaudhuri equation for a geodesic congruence and finite-time focusing"
status: published
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-geodesic-congruence-and-kinematics, lem-gr-kinematic-decomposition-identities, lem-gr-contracted-commutator-identity, def-gr-curvature-tensor-and-derived-tensors, def-gr-observer-congruence-and-adapted-charts, def-gr-observer-and-rest-space, thm-unique-maximal-integral-curve-through-each-point, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-smooth-lorentzian-objects, def-gr-inverse-metric-and-musical-isomorphisms, thm-ftc-second-part, def-interval]
dependency_roles:
  def-gr-geodesic-congruence-and-kinematics: mathematical-premise
  lem-gr-kinematic-decomposition-identities: mathematical-premise
  lem-gr-contracted-commutator-identity: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  thm-unique-maximal-integral-curve-through-each-point: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: the Weingarten map, its Riccati equation (6.4), the Raychaudhuri equation (6.5) with the shear evolution (6.6) and the focusing arguments, section 6.2 printed pp. 161-164"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision): the geodesic deviation equation, section 4.5 printed pp. 46-48 (PDF pp. 47-49)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): the energy-momentum tensor and the weak energy condition (4.72), printed p. 117 (PDF p. 124)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold, let
$U\subseteq M$ be open and let $n$ be a smooth future unit timelike geodesic
congruence on $U$ with kinematic quantities $B$, $\theta$, $\sigma$, $\omega$
and rest-space metric $h$
([[def-gr-geodesic-congruence-and-kinematics]]). Let $q\in U$ and let
$\gamma_q:I_q\to U$ be the observer curve through $q$ with affine parameter
$s$, $s\in I_q$ ([[thm-unique-maximal-integral-curve-through-each-point]]).

**(a) Raychaudhuri equation.** For every $s\in I_q$,
$$\frac{d}{ds}\theta(\gamma_q(s)) =-\tfrac13\theta(\gamma_q(s))^2-\sigma_{ab}\sigma^{ab}(\gamma_q(s)) +\omega_{ab}\omega^{ab}(\gamma_q(s))-\operatorname{Ric}_{ab}(\gamma_q(s))\,n^a(\gamma_q(s))\,n^b(\gamma_q(s)),$$
where all contractions use $g$ and $\operatorname{Ric}$ is the Ricci tensor
of the metric-selected connection
([[def-gr-curvature-tensor-and-derived-tensors]]).

**(b) Focusing.** Suppose $\omega=0$ and
$\operatorname{Ric}_{ab}n^an^b\ge0$ on $U$, and suppose there is
$s_0\in I_q$ with $\theta_0:=\theta(\gamma_q(s_0))<0$. Then
$\theta(\gamma_q(s))<0$ for every $s\in I_q$ with $s>s_0$, and
$$\frac{1}{-\theta(\gamma_q(s))}\le\frac{1}{-\theta_0}-\frac{s-s_0}{3}.$$
Consequently $s<s_0+3/(-\theta_0)$ for every such $s$, so
$\sup I_q\le s_0+3/(-\theta_0)$ for the maximal integral curve in $U$.
Any continuation beyond this bound that remains a smooth geodesic congruence
and continues to satisfy $\omega=0$ and $\operatorname{Ric}_{ab}n^an^b\ge0$
along the continued flow line is impossible. A continuation outside $U$ that
does not preserve these hypotheses is not ruled out by this result.

## Facts & Assumptions

**Given:** A geodesic congruence $n$ on $U$ with kinematic fields $\theta,\sigma,\omega,B,h$, an observer curve $\gamma:=\gamma_q$ with affine parameter $s$, and a parameter $s_0$ with $\theta_0<0$.

[L1] $\theta=\nabla_an^a$: indeed $\theta=g^{ab}B_{ab}=g^{ab}\nabla_bn_a=\nabla_an^a$ and $g^{ab}\nabla_bn_a=g^{ab}\nabla_bn_a$; the indices are raised and lowered with $g$ and $g^{-1}$ ([[def-gr-geodesic-congruence-and-kinematics]], [[def-gr-inverse-metric-and-musical-isomorphisms]] — the index-raised fields and the convention $n_a=g_{ab}n^b$ are those of the definition of the congruence).

[L2] Along the observer curve $\gamma$, the derivative of a smooth function $f$ with respect to the affine parameter is $\frac{d}{ds}(f\circ\gamma)=n^c\nabla_cf$ ([[def-gr-observer-congruence-and-adapted-charts]] for the flow lines and [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] for the derivative of functions).

[L3] The contracted commutator identity: for smooth vector fields $V,Z$, $V^c\nabla_c(\nabla_aZ^a)=\nabla_a(V^c\nabla_cZ^a)-(\nabla_aV^c)(\nabla_cZ^a)-\operatorname{Ric}_{cd}V^cZ^d$ ([[lem-gr-contracted-commutator-identity]] clause (c)).

[L4] $B_{ab}B^{ba}=\tfrac13\theta^2+\sigma_{ab}\sigma^{ab}-\omega_{ab}\omega^{ab}$, and the two quadratic quantities are nonnegative ([[lem-gr-kinematic-decomposition-identities]] clause (d)).

[L5] The geodesic condition $\nabla_nn=0$ means $n^c\nabla_cn^a=0$ ([[def-gr-geodesic-congruence-and-kinematics]] clause (a), [[def-gr-metric-selected-connection]]).

[L6] Fundamental theorem of calculus for $C^1$ functions on closed intervals; here the functions are smooth on $I_q$ ([[thm-ftc-second-part]], [[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 (Reduction of the curvature and quadratic terms.) Apply [L3] with $V=Z=n$: the first term on the right vanishes by [L5], so $$n^c\nabla_c(\nabla_an^a)=-(\nabla_an^c)(\nabla_cn^a)-\operatorname{Ric}_{cd}n^cn^d .$$ The quadratic term is $B_{ab}B^{ba}$: since $B_{ab}=\nabla_bn_a$, raising gives $\nabla_an^c=g^{cb}B_{ba}$ and $\nabla_cn^a=g^{ad}B_{dc}$, so $(\nabla_an^c)(\nabla_cn^a)=B_{ab}B^{ba}$. By [L1] and [L2], the left side is $\frac{d}{ds}\bigl(\theta(\gamma(s))\bigr)$, and by [L4] the quadratic term equals $\tfrac13\theta^2+\sigma_{ab}\sigma^{ab}-\omega_{ab}\omega^{ab}$. Substituting, with all fields evaluated at $\gamma(s)$, gives exactly the displayed equation of (a). [given, L1, L2, L3, L4, L5, algebra]

2.1 (Differential inequality and integration.) Assume now $\omega=0$ and $\operatorname{Ric}_{ab}n^an^b\ge0$ on $U$, and define $y(s):=-\theta(\gamma(s))$ for $s\in I_q$. By (a), $y'(s)=\tfrac13\theta^2+\sigma_{ab}\sigma^{ab}+\operatorname{Ric}_{ab}n^an^b\ge\tfrac13y(s)^2\ge0$, where nonnegativity of $\sigma_{ab}\sigma^{ab}$ and of the Ricci term was used. At $s_0$ one has $y(s_0)=-\theta_0>0$; hence, as long as $s>s_0$ and $y>0$, $\frac{d}{ds}\bigl(1/y(s)\bigr)=-\frac{y'(s)}{y(s)^2}\le-\frac13$. Integrating from $s_0$ to $s$ by [L6] gives $\frac{1}{y(s)}\le\frac{1}{y(s_0)}-\frac{s-s_0}{3}$. [step 1.1, given, L6, algebra]

3.1 (Positivity and the bound.) Let $J$ be the connected component of $\{s\in I_q:s\ge s_0,\ y(s)>0\}$ containing $s_0$; it contains a right-neighborhood of $s_0$. On $J$, step 2.1 gives $y'(s)\ge y(s)^2/3>0$, so $y$ is increasing and $y(s)\ge y(s_0)>0$. Thus $J$ cannot have a right endpoint strictly inside $I_q$: continuity there gives a positive limiting value, allowing $J$ to continue. Therefore $y>0$ on $[s_0,\sup I_q)$, and the reciprocal estimate of step 2.1 holds for every $s>s_0$ in $I_q$. Since $1/y(s)>0$, that estimate gives $s<s_0+3/(-\theta_0)$ for every such $s$, hence $\sup I_q\le s_0+3/(-\theta_0)$. The stated continuation conclusion follows for any continuation on which the smooth congruence and both sign hypotheses persist; this proves (b) and completes the proof. [step 2.1, given, algebra] ∎

## Remarks

- **What focusing does and does not say.** The bound concerns the maximal flow line in the region where the smooth congruence and the stated sign hypotheses hold. It does not assert that the spacetime or the individual geodesic ends at $s_0+3/(-\theta_0)$, and it does not constrain continuations on which the hypotheses fail. In flat spacetime the radial congruence from a point reaches infinite expansion in finite affine time at its focal point while the spacetime and the geodesics continue, as the companion examples page shows.
- **Hypotheses.** Irrotationality ($\omega=0$) and the sign of the Ricci term are both essential: the vorticity term enters with the opposite sign, and without the Ricci sign assumption the expansion need not decrease. No energy condition is asserted: the inequality $\operatorname{Ric}_{ab}n^an^b\ge0$ is a hypothesis on the geometry, and whether a matter model satisfies it is a separate question.
