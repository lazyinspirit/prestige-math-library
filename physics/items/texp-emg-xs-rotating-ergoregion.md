---
id: texp-emg-xs-rotating-ergoregion
kind: thought-experiment
title: Fixed-coordinate curve is spacelike in the rotating ergoregion
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 9
deps:
  - pthm-emg-xs-kn-model
  - def-emg-xs-si-parameters
  - thm-emg-xs-kn-extension
  - prop-emg-xs-kn-ergoregion
  - def-emg-causal-solution-and-horizon-vocabulary
  - def-gr-timelike-worldline-and-proper-time
  - post-gr-ideal-clocks-and-free-fall
  - def-countable-choice
dependency_roles:
  pthm-emg-xs-kn-model: physical-result
  def-emg-xs-si-parameters: formulation-prerequisite
  thm-emg-xs-kn-extension: mathematical-premise
  prop-emg-xs-kn-ergoregion: mathematical-premise
  def-emg-causal-solution-and-horizon-vocabulary: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  def-countable-choice: mathematical-premise
physical_scope: >
  Conditional demonstration that a fixed-angular-coordinate stationary curve
  is spacelike in a chosen exterior region of the rotating KN model. It
  supplies no energy-extraction argument, maximum-extension result, or
  observation and does not rule out timelike trajectories with angular
  motion.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete 238-page arXiv version"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Chapter 7, equations (7.124)-(7.128), printed pp. 211-212 (PDF pp. 217-218): rotating stationary-limit and horizon context."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2, complete 30-page full text"
      url: "https://arxiv.org/pdf/1410.6626"
      locator: "Section 3.3, equations (3.18)-(3.23), printed pp. 17-19 (PDF pp. 18-20): KN roots and stationary-limit surface."
---

## Statement

Take the zero-magnetic-flux KN model with SI mass, angular-momentum and electric-charge inputs $m_*>0,J,Q_e$, mapped by [[def-emg-xs-si-parameters]] to lengths $M,a,q$. Assume $M>0$, $a\ne0$, and $M^2\ge a^2+q^2>0$. Use the selected ingoing product and its future orientation from [[thm-emg-xs-kn-extension]], and write $N$ for that product's designated smooth future timelike field. Let
$$r_+=M+\sqrt{M^2-a^2-q^2},\qquad r_{E+}=M+\sqrt{M^2-q^2}.$$
At the equator, choose any $r$ with $r_+<r<r_{E+}$ and fixed azimuth $\psi_0$, and set $\omega_0=(\cos\psi_0,\sin\psi_0,0)\in S^2$. The candidate fixed-coordinate curve is the smooth map
$$\gamma:\mathbb R\to\mathcal M_{\mathrm{in}},\qquad v\mapsto(v,r,\omega_0).$$
Its tangent is $T=\partial_v\ne0$ and, by [[prop-emg-xs-kn-ergoregion]], $g(T,T)>0$, so it is a regular spacelike curve. The exact definition [[def-gr-timelike-worldline-and-proper-time]] makes a future timelike worldline a $C^1$ map $\eta:I\to\mathcal M_{\mathrm{in}}$ on an interval $I$ with nonempty interior whose tangent satisfies $g(\eta',\eta')<0$ and $g(\eta',N)<0$ at every parameter value; its tangent is therefore nonzero. Thus $\gamma$ is not a worldline of a massive observer and cannot represent one at rest in these stationary coordinates. For ideal freely falling massive test bodies, [[post-gr-ideal-clocks-and-free-fall]] separately adopts a future timelike geodesic worldline. The ergoregion here means the positive-norm set of the specified stationary Killing field, as defined in [[def-emg-causal-solution-and-horizon-vocabulary]]. Curves with angular motion require a separate norm calculation; no energy-extraction or empirical claim follows.

## Facts & Assumptions

**Given:** The pure-electric KN SI inputs, $M>0$, $a\ne0$, $M^2\ge a^2+q^2>0$, the selected ingoing model, and the adopted massive-test-body interpretation.

[F1] [[def-emg-xs-si-parameters]]: $M=G_Nm_*/c^2$, $a=J/(m_*c)$, $q_e=\sqrt{G_N/(4\pi\varepsilon_0c^4)}Q_e$, and $\varepsilon_0\mu_0c^2=1$; zero magnetic flux makes the KN seed parameter $q=q_e$.

[F2] [[pthm-emg-xs-kn-model]]: on the stated electric KN domains with $\Delta\ne0$, the SI-rescaled datum is a conditional source-free equation-based model solution; its field-equation proof is draft and not independently accepted.

[F3] [[thm-emg-xs-kn-extension]]: $\mathcal M_{\mathrm{in}}=\mathbb R_v\times(0,\infty)_r\times S^2$ carries the smooth selected ingoing metric and future timelike field $N=\partial_v-\tfrac12(1+f_0^2)\partial_r$, where $f_0=1-(2Mr-q^2)/\Sigma$; $T=\partial_v$ is defined on the full product. Its field-equation continuation remains conditional on the current verification draft.

[L1] [[prop-emg-xs-kn-ergoregion]]: $g(T,T)=-(r^2-2Mr+q^2+a^2\cos^2\theta)/\Sigma$; at the equator the outer stationary-limit radius is $r_{E+}=M+\sqrt{M^2-q^2}$, it strictly exceeds $r_+$ when $a\ne0$, and the norm is positive between the roots. Its proof remains draft and is used conditionally.

[F4] [[def-emg-causal-solution-and-horizon-vocabulary]]: for a specified stationary Killing field, the ergoregion is its positive-norm set; this definition alone does not identify a null horizon.

[A1] [[post-gr-ideal-clocks-and-free-fall]] adopts a future timelike geodesic worldline for an ideal freely falling massive test body; it does not derive that physical rule from the KN equations. The exact mathematical worldline condition from [[def-gr-timelike-worldline-and-proper-time]] is a $C^1$ map on an interval with nonempty interior whose tangent satisfies $g(\eta',\eta')<0$ and $g(\eta',N)<0$ for the selected future timelike field $N$.

[A2] [[def-countable-choice]]: the inherited geometric metric convention uses only $\mathrm{AC}_\omega$. The finite choice of a radius between two explicit real roots uses no family selection or full AC.

## Proof

1.1 From $a\ne0$ and $M^2\ge a^2+q^2$, we have $M^2-q^2\ge a^2>0$. Therefore
$$r_{E+}-r_+=\sqrt{M^2-q^2}-\sqrt{M^2-a^2-q^2}>0,$$
since the first radicand exceeds the second and both square roots are nonnegative. Both radii are positive, so the stated open interval is nonempty. Retain the arbitrary radius $r$ of the Statement with $r_+<r<r_{E+}$. In particular $r>0$, which places every point of $\gamma$ in the selected product. [given, F1, F3, algebra]

2.1 On the equator, [L1] gives $g(T,T)=-(r^2-2Mr+q^2)/r^2$. The numerator factors as $(r-r_{E-})(r-r_{E+})$, where $r_{E-}=M-\sqrt{M^2-q^2}<M\le r_+$; the chosen radius satisfies $r_{E-}<r<r_{E+}$, so the numerator is strictly negative. Thus $g(T,T)>0$. The fixed-coordinate curve has derivative $T$ and is spacelike at every point. [L1, step 1.1, algebra]

3.1 By the future timelike worldline condition in [A1], a curve representing a massive observer must have a future timelike tangent. Since the curve in step 2.1 has a spacelike tangent, it cannot be such an observer at rest in the chosen stationary coordinates. This conclusion concerns only tangent $T$; an angularly moving curve has a different tangent and needs its own causal-norm check. [A1, step 2.1]

4.1 The result uses the conditional KN solution and ergoregion geometry only as specified in [F2]-[L1]. It establishes no extraction process, horizon maximality, observation, or measured property. [F2, F3, F4, A1, step 3.1, A2] ∎
