---
id: texp-emg-xs-photon-radius
kind: thought-experiment
title: RN circular null orbit example
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 8
deps:
  - pthm-emg-xs-rn-model
  - def-emg-xs-si-parameters
  - def-emg-xs-rn-data
  - post-gr-ideal-clocks-and-free-fall
  - def-gr-si-unit-and-coordinate-conventions
  - def-gr-metric-selected-connection
  - def-gr-inverse-metric-and-musical-isomorphisms
  - def-geodesic-of-an-affine-connection
  - def-gr-killing-field
  - thm-gr-killing-and-on-shell-matter-identities
  - lem-gr-future-causal-classification-by-a-timelike-field
  - def-countable-choice
dependency_roles:
  pthm-emg-xs-rn-model: physical-result
  def-emg-xs-si-parameters: formulation-prerequisite
  def-emg-xs-rn-data: mathematical-premise
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-gr-killing-field: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: >
  A conditional calculation of equatorial circular null geodesic radii in
  the selected dyonic RN exterior. Under the adopted geometric-optics rule,
  these are ideal-light-ray orbit radii; the result makes no stability,
  photon-mass, observation, or measurement claim.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete 238-page arXiv version"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Chapter 7, equations (7.106)-(7.113), printed pp. 201-203 (PDF pp. 207-209), and the circular null-orbit discussion in the Schwarzschild chapter: RN lapse and null-geodesic conventions. The charged-radius calculation is supplied here."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2, complete 30-page full text"
      url: "https://arxiv.org/pdf/1410.6626"
      locator: "Section 2.1, equations (2.1)-(2.9), printed pp. 4-5 (PDF pp. 5-6): RN static seed and its charge parameter; the circular-orbit proof is supplied here."
---

## Statement

Let $m_*>0$ and $Q_e,\Phi_B\in\mathbb R$ be SI mass, electric-charge and magnetic-flux inputs, and define the dyonic RN lengths by [[def-emg-xs-si-parameters]] and [[def-emg-xs-rn-data]]. Write $Q^2:=q_e^2+q_m^2$ and assume $0\le Q^2\le M^2$. In the static exterior $r>r_+:=M+\sqrt{M^2-Q^2}$, let $\gamma$ be a future affine null geodesic in the equatorial plane $\theta=\pi/2$, with constants $\mathcal E:=f\dot x^0>0$ and $\ell:=r^2\dot\phi\ne0$. Its radial equation is
$$\dot r^2=\mathcal E^2-\ell^2 V(r),\qquad V(r):=\frac{f(r)}{r^2}.$$
An exterior circular null orbit exists at and only at the outer radius
$$r_\gamma^+=\frac{3M+\sqrt{9M^2-8Q^2}}2>r_+.$$
The second algebraic stationary radius $r_\gamma^-=(3M-\sqrt{9M^2-8Q^2})/2$ lies at or inside $r_+$ and is not a second exterior circular orbit. Radii are in metres. By the adopted geometric-optics assumption of [[post-gr-ideal-clocks-and-free-fall]], the exhibited null geodesic is an ideal-light-ray orbit within that model approximation. The result says nothing about orbital stability or an observed photon trajectory.

## Facts & Assumptions

**Given:** The conditional dyonic RN model with $M>0$ and $0\le Q^2\le M^2$, the static exterior, and the adopted ideal-light-ray geometric-optics rule.

[F1] [[def-emg-xs-si-parameters]] and [[def-emg-xs-rn-data]]: $M=G_Nm_*/c^2$, $q_e=\sqrt{G_N/(4\pi\varepsilon_0c^4)}Q_e$, $q_m=\alpha\Phi_B/(4\pi)$, and the static metric is $g=-f(dx^0)^2+f^{-1}dr^2+r^2(d\theta^2+\sin^2\theta\,d\phi^2)$ with $f=1-2M/r+Q^2/r^2$.

[F2] [[pthm-emg-xs-rn-model]]: this dyonic RN datum on $r>0$, $f\ne0$ is a conditional solution of the adopted source-free equation-based model; the field-equation proof is draft and not independently accepted.

[A1] [[post-gr-ideal-clocks-and-free-fall]]: in geometric optics an ideal light ray is assumed to be a future null geodesic of the metric-selected connection. This is an adopted model postulate, not an equation derived from the RN field solution.

[F3] [[def-gr-metric-selected-connection]] and [[def-geodesic-of-an-affine-connection]]: the selected connection is torsion-free and metric-compatible, and an affine geodesic satisfies $D_t\gamma'=0$.

[F4] [[def-gr-killing-field]] and [[thm-gr-killing-and-on-shell-matter-identities]]: a Killing field has zero metric Lie derivative, and its metric pairing with an affine geodesic tangent is constant.

[F5] [[def-gr-si-unit-and-coordinate-conventions]]: $x^0=ct$ and $r$ have units of metres; affine constants below are coordinate-geometric constants and are not assigned particle-energy measurements.

[F6] [[lem-gr-future-causal-classification-by-a-timelike-field]]: a nonzero causal vector whose metric pairing with the selected future timelike field is negative is future-directed.

[A2] [[def-countable-choice]]: the inherited RN metric and geometric-flux conventions use only $\mathrm{AC}_\omega$. The finite root and geodesic calculation makes no new selections from families and uses no full AC.

## Proof

1.1 On the static exterior $f>0$, the fields $\partial_{x^0}$ and $\partial_\phi$ are Killing because the metric in [F1] is independent of $x^0$ and $\phi$. Therefore [F4] makes $\mathcal E=f\dot x^0=-g(\partial_{x^0},\gamma')$ and $\ell=r^2\dot\phi=g(\partial_\phi,\gamma')$ constant along the affine geodesic. Restrict to its equatorial plane, as in the Statement. [F1, F4, F5, A1]

2.1 Substituting $\theta=\pi/2$, $\dot\theta=0$ and these constants into $g(\gamma',\gamma')=0$ gives
$$-f\dot x^{0,2}+f^{-1}\dot r^2+r^2\dot\phi^2=0.$$
Multiplying by $f>0$ and using $\mathcal E=f\dot x^0$, $\ell=r^2\dot\phi$ yields $\dot r^2=\mathcal E^2-f\ell^2/r^2$. [F1, step 1.1, algebra]

3.1 The metric-selected Christoffel formula from [F3] gives $\Gamma^r{}_{00}=ff'/2$ and $\Gamma^r{}_{\phi\phi}=-fr$ on the equator. At a circular point, $\dot r=\ddot r=0$ and the radial geodesic equation becomes $ff'\dot x^{0,2}/2-fr\dot\phi^2=0$. The null condition gives $f\dot x^{0,2}=r^2\dot\phi^2$, so the radial equation is equivalent to
$$V'(r)=\frac{f'}{r^2}-\frac{2f}{r^3}=0.$$
Conversely, at an equatorial point with $f>0$ and $V'=0$, the same connection coefficients make the radial equation hold for the null circular tangent; the $x^0$ and $\phi$ equations have only terms proportional to $\dot r$, and the $\theta$ equation vanishes at $\theta=\pi/2$ by reflection symmetry. Thus solving $V'=0$ is necessary and sufficient for an equatorial circular null geodesic in the static region. [F1, F3, step 2.1, algebra]

4.1 Expanding $V=r^{-2}-2Mr^{-3}+Q^2r^{-4}$ gives
$$V'(r)=-\frac{2}{r^5}(r^2-3Mr+2Q^2).$$
The discriminant is $9M^2-8Q^2\ge M^2>0$, so its real roots are $r_\gamma^\pm=(3M\pm\sqrt{9M^2-8Q^2})/2$. Set $x=\sqrt{M^2-Q^2}\in[0,M]$ and $s=\sqrt{M^2+8x^2}=\sqrt{9M^2-8Q^2}$. Then
$$r_\gamma^+-r_+=\frac{M+s-2x}{2}>0,$$
because $s^2-(2x)^2=M^2+4x^2>0$, while
$$r_\gamma^--r_+=\frac{M-s-2x}{2}\le0$$
because $s\ge M$ and $x\ge0$. Thus exactly the outer root is in $r>r_+$, and there $f>0$. [step 3.1, algebra]

5.1 At $r=r_\gamma^+$ choose any $\ell\ne0$ and set $\mathcal E=|\ell|\sqrt{f(r_\gamma^+)}/r_\gamma^+>0$. Then the null condition and $V'(r_\gamma^+)=0$ make the radial geodesic equation hold with constant $r$. Taking $\dot x^0=\mathcal E/f>0$ and $\dot\phi=\ell/r^2$ makes the tangent nonzero and null; its pairing with the selected future timelike static field $\xi=\partial_{x^0}$ is $g(\xi,\gamma')=-\mathcal E<0$, so [F6] makes it future-directed. The equatorial angular equation also holds as shown in step 3.1. This constructs the outer circular null geodesic, rather than only a formal root of an effective potential. [F1, F6, A1, step 3.1, step 4.1, algebra]

6.1 The outer orbit is therefore a conditional null-geodesic prediction of the selected dyonic RN model. The geometric-optics postulate interprets such a curve as an ideal light ray within its scope; no stability or empirical claim follows. [A1, F2, step 5.1, A2] ∎
