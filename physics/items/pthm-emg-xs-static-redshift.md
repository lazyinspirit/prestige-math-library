---
id: pthm-emg-xs-static-redshift
kind: physics-theorem
title: Stationary RN observer frequency ratio
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 8
deps:
  - pthm-emg-xs-rn-model
  - def-emg-xs-si-parameters
  - def-emg-geometry-units
  - def-emg-xs-rn-data
  - post-gr-ideal-clocks-and-free-fall
  - def-gr-si-unit-and-coordinate-conventions
  - def-gr-metric-selected-connection
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-gr-inverse-metric-and-musical-isomorphisms
  - def-geodesic-of-an-affine-connection
  - thm-clairaut-schwarz-mixed-partials
  - def-gr-killing-field
  - thm-gr-killing-and-on-shell-matter-identities
  - lem-gr-future-causal-classification-by-a-timelike-field
  - def-countable-choice
dependency_roles:
  pthm-emg-xs-rn-model: physical-result
  def-emg-xs-si-parameters: formulation-prerequisite
  def-emg-geometry-units: formulation-prerequisite
  def-emg-xs-rn-data: mathematical-premise
  post-gr-ideal-clocks-and-free-fall: physical-assumption
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  def-gr-killing-field: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  lem-gr-future-causal-classification-by-a-timelike-field: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: >
  Conditional phase-frequency ratio for a local future null eikonal phase
  crossing two static observers in a source-free RN model region. Ideal-clock
  and geometric-optics readings are adopted assumptions; no emitted or
  received measurement, apparatus model, or empirical agreement is asserted.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete 238-page arXiv version"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Chapter 4, gravitational redshift discussion, and Chapter 7, equations (7.106)-(7.113), printed pp. 97-100 and 201-203 (PDF pp. 104-107 and 207-209): static metric time normalization and RN exterior."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2, complete 30-page full text"
      url: "https://arxiv.org/pdf/1410.6626"
      locator: "Section 2.1, equations (2.1)-(2.9), printed pp. 4-5 (PDF pp. 5-6): static RN seed and its lapse; the local phase-frequency calculation is supplied here."
---

## Statement

Let $m_*>0$, $Q_e,\Phi_B\in\mathbb R$, and use [[def-emg-xs-si-parameters]] and [[def-emg-xs-rn-data]] for the dyonic RN metric on $\mathcal M_J=\mathbb R_{x^0}\times J_r\times S^2$, where $J$ is a connected open interval with $f(r)=1-2M/r+(q_e^2+q_m^2)/r^2>0$. The coordinate $x^0=ct$ and $r$ have units of metres. Put $\xi=\partial_{x^0}$; it is the future static Killing field on this region. Let $I_\gamma\subseteq\mathbb R$ be a nonempty open interval, let $\gamma:I_\gamma\to\mathcal M_J$ be a $C^2$ curve, and let $W$ be an open neighborhood of $\gamma(I_\gamma)$ carrying a dimensionless $C^2$ phase $\theta:W\to\mathbb R$. Set $k=d\theta$ and $K=k^\sharp$. Assume the eikonal equation $g^{-1}(d\theta,d\theta)=0$ holds throughout $W$, and that $K$ is nowhere zero and future directed along $\gamma(I_\gamma)$. Parameterize the phase ray by $\gamma'(\lambda)=K(\gamma(\lambda))$, which fixes its affine parameter normalization. For each spatial point $(r,\omega)\in J\times S^2$ and nonempty open interval $I\subset\mathbb R$, define the static observer curve $\sigma_{r,\omega}:I\to\mathcal M_J$ by $\sigma_{r,\omega}(s)=(s,r,\omega)$, where $s=x^0$ has units of metres. It is smooth and regular with tangent $\xi$, and it is future timelike because $g(\xi,\xi)=-f(r)<0$. Its proper-time parameter satisfies $d\tau/ds=\sqrt{f(r)}/c$ under the metric proper-time definition, so its normalized four-velocity is
$$U(r):=\frac{c}{\sqrt{f(r)}}\,\xi,\qquad g(U,U)=-c^2,\qquad \nu_U:=-\frac{k(U)}{2\pi}.$$
Here $U=d\sigma_{r,\omega}/d\tau$ is normalized by the SI proper-time convention of [[def-gr-si-unit-and-coordinate-conventions]], and $\nu_U$ is the phase frequency in cycles per unit ideal-clock time under [[post-gr-ideal-clocks-and-free-fall]]. If $\gamma$ intersects static observer curves $\sigma_{r_E,\omega_E}$ and $\sigma_{r_R,\omega_R}$ at events $E$ and $R$, respectively, with $r_E,r_R\in J$, then the conditional model prediction is
$$\frac{\nu_R}{\nu_E}=\sqrt{\frac{f(r_E)}{f(r_R)}}.$$
The phase data and source-free RN model are conditional inputs; the formula is not a reported observation or a claim of measured precision.

## Facts & Assumptions

**Given:** Positive $G_N,c,\mu_0$, the SI RN parameters and metric on a connected $f>0$ interval, the adopted classical clock/light-ray postulate, and a local $C^2$ dimensionless phase satisfying $g^{-1}(d\theta,d\theta)=0$ on its open domain $W$, with nowhere-zero future-directed differential along the ray.

[F1] [[def-emg-xs-si-parameters]] and [[def-emg-geometry-units]]: $M=G_Nm_*/c^2$, $q_e=\sqrt{G_N/(4\pi\varepsilon_0c^4)}Q_e$, $q_m=\alpha\Phi_B/(4\pi)$, $\varepsilon_0\mu_0c^2=1$, and $x^0=ct$ is a length coordinate.

[F2] [[def-emg-xs-rn-data]]: on $f>0$, $g=-f(dx^0)^2+f^{-1}dr^2+r^2\gamma_{S^2}$ and the chosen future time orientation is $\xi=\partial_{x^0}$.

[F3] [[pthm-emg-xs-rn-model]]: the exact dyonic RN datum on each stated positive-radius static domain with $f\ne0$ is a conditional solution of the adopted zero-source Einstein–Maxwell model; the carrier's proof remains draft and is not independently accepted.

[A1] [[post-gr-ideal-clocks-and-free-fall]]: ideal clocks read proper time, and in the geometric-optics approximation ideal light rays are future null geodesics of the metric-selected connection. These are adopted physical assumptions, not deductions from the Einstein–Maxwell equations.

[F4] [[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] and [[def-gr-inverse-metric-and-musical-isomorphisms]]: the selected connection is torsion-free and metric-compatible, its tensor extension obeys the product rule with $\nabla g^{-1}=0$, and $K=k^\sharp$ is characterized by $g(K,V)=k(V)$.

[F8] [[thm-clairaut-schwarz-mixed-partials]]: the mixed coordinate partials of a $C^2$ scalar field on an open Euclidean chart commute.

[F5] [[def-gr-killing-field]] and [[thm-gr-killing-and-on-shell-matter-identities]]: a field is Killing when $\mathcal L_\xi g=0$; for a Killing field and an affinely parametrized geodesic $\gamma$, $g(\xi,\gamma')$ is constant along $\gamma$.

[F6] [[lem-gr-future-causal-classification-by-a-timelike-field]]: a nonzero future null vector has strictly negative metric pairing with every future timelike vector.

[F7] [[def-gr-si-unit-and-coordinate-conventions]]: in length coordinates $x^0=ct$, $U=d\gamma/d\tau$ has SI velocity components and the proper-time parameter $\tau$ is measured in seconds.

[A2] [[def-countable-choice]]: the inherited geometric RN and metric-connection conventions use only $\mathrm{AC}_\omega$. No selection from a family is made by this local calculation; full AC is not used.

## Proof

1.1 The SI map and length-coordinate convention [F1] identify $x^0=ct$ and the RN length parameters used in [F2]. The metric in [F2] is independent of $x^0$, so its Lie derivative along $\xi=\partial_{x^0}$ vanishes and $\xi$ is Killing by [F5]. For any curve $\sigma_{r,\omega}(s)=(s,r,\omega)$ in the Statement, $\sigma'_{r,\omega}=\xi$ and $-g(\xi,\xi)=f(r)$ is constant along the curve, so the metric proper-time definition gives $d\tau/ds=\sqrt{f(r)}/c$ and $d\sigma_{r,\omega}/d\tau=c\xi/\sqrt{f(r)}=U(r)$. Thus $g(U,U)=-c^2$ and $U$ is future timelike on $J$. The solution is the conditional physical RN model of [F3]; no observational premise is used. [F1, F2, F3, F5, F7, given, algebra]

1.2 The metric dual $K=k^\sharp$ is nonzero and null because $k\ne0$ and $g^{-1}(k,k)=0$. In coordinates, $k_a=\partial_a\theta$; [F8] makes the mixed second partials commute, and torsion freedom in [F4] makes the Christoffel terms symmetric, so $\nabla_bk_a=\nabla_ak_b$. Metric compatibility and the tensor product rule in [F4] then give
$$K^b\nabla_bK_a=k^b\nabla_bk_a=k^b\nabla_ak_b=\frac12\nabla_a(g^{bc}k_bk_c)=0.$$
Thus the integral curves of $K$ are affinely parametrized null geodesics on the phase domain by the geodesic definition; the phase ray $\gamma'=K$ is one such curve. This is the local eikonal input used for the geometric-optics ray. [F4, F8, A1, given, algebra]

2.1 Apply the Killing contraction identity [F5] to the affinely parametrized geodesic tangent $K$ from step 1.2. It makes $g(\xi,K)=k(\xi)$ constant along that ray. Since $K$ is future null and $\xi$ is future timelike, [F6] gives $C:=-k(\xi)>0$. [F5, F6, step 1.1, step 1.2]

3.1 At radius $r$, the phase frequency is
$$\nu_U=-\frac{k(c\xi/\sqrt f)}{2\pi}=\frac{cC}{2\pi\sqrt f}.$$
The positive value is a phase rate; the ideal-clock postulate [A1] supplies its clock-time interpretation. Evaluating at the two events and dividing cancels the common positive constant $cC/(2\pi)$, yielding $\nu_R/\nu_E=\sqrt{f(r_E)/f(r_R)}$. [A1, F7, step 2.1, algebra]

4.1 The ratio in step 3.1 is a conditional phase-frequency prediction for the chosen RN domain and local ray. The model postulates and phase assumptions remain explicit; no clock apparatus, data, uncertainty, or empirical confirmation has been supplied. [A1, F3, step 3.1, A2] ∎
