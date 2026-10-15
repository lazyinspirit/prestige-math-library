---
id: ex-rpm-rest-spin-and-size-bound
kind: example
title: Rest magnetic spin rotation and independent centroid disk
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked exact rest-frame BMT rotation in a uniform magnetic field alongside the separate flat-body SSC centroid disk and positive-energy size bound. The polarization and body angular momentum are kept distinct; no experiment or material family is reported."
empirical_premises: []
deps:
  - def-countable-choice
  - def-cross-product-in-r3
  - def-em-electromagnetic-tensor
  - def-inertial-frame-and-inertial-chart
  - def-rpm-charge-spin-model
  - lem-rpm-body-spin-size-bound
  - lem-rpm-flat-centroid-shift
  - pthm-rpm-rest-spin-and-size-bound
dependency_roles:
  def-countable-choice: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-rpm-charge-spin-model: formulation-prerequisite
  lem-rpm-body-spin-size-bound: mathematical-premise
  lem-rpm-flat-centroid-shift: mathematical-premise
  pthm-rpm-rest-spin-and-size-bound: physical-result
sources:
  references:
    - title: "University of Virginia, Relativistic Spin Precession: the BMT Equation, Electromagnetic Theory lecture"
      url: https://galileoandeinstein.phys.virginia.edu/Elec_Mag/2022_Lectures/EM_71_g-2.html
      locator: Full BMT section, rest-frame precession equation and constant-field specialization; the sign-specific solution is differentiated below.
    - title: "L. Filipe Costa and José Natário, Center of mass, spin supplementary conditions, and the momentum of spinning particles, arXiv:1410.6443v2; published in Equations of Motion in Relativistic Gravity, Fundamental Theories of Physics 179 (Springer, 2015)"
      url: https://arxiv.org/html/1410.6443v2
      locator: Section 2, observer-dependent centroid displacement disk and Møller radius; the separate body-size inequality is taken from its explicit local proof supplier.
verification: {}
---

## Example

Assume $\mathrm{AC}_\omega$ of [[def-countable-choice]] for the canonical tangent-bundle and connection suppliers used by the BMT transport and charged-action equivalence. No full Axiom of Choice is assumed.

In a charged-body inertial frame of [[def-inertial-frame-and-inertial-chart]] with $e_0=U/c$, positively oriented spatial basis $(e_1,e_2,e_3)$, and constant coordinates for the stationary trajectory, let $U=(c,\mathbf0)$, $\mathbf E=0$, and $\mathbf B=B\mathbf e_3$ with constant $B>0$ tesla. Let the adopted polarization law have $q$ in coulombs, $m>0$ kilograms, $\alpha=q/m$, $G=g_s/2$, and choose initial polarization $\mathbf s(\tau_0)=s_0\mathbf e_1$ in kilogram metres squared per second. Independently, choose a separate momentum-rest inertial frame $(o';f_0,f_1,f_2,f_3)$ of [[def-inertial-frame-and-inertial-chart]] with $f_0=p/(Mc)$, spatial origin $o'$ at the stipulated body center, and positive spatial basis $(f_1,f_2,f_3)$. Let a flat material body have rest momentum components $p=(Mc,\mathbf0)$ in this frame, $M>0$ kilograms, body angular momentum $\mathbf s_*=S_*f_3$ with $S_*>0$ in kilogram metres squared per second, and measurable densities $e:\mathbb R^3\to[0,\infty)$ and $j:\mathbb R^3\to\mathbb R^3$ with each component of $j$ in $L^1(\mathbb R^3)$, expressed in its spatial coordinates $\mathbf x$. Define $\overline B_\ell(0):=\{\mathbf x:|\mathbf x|\le\ell\}$ using this rest-space Euclidean norm. Assume $e$ and $j$ vanish almost everywhere outside this ball for $\ell>0$ metres, $|j|$ is that norm and satisfies $|j|\le e/c$ almost everywhere, $\int e\,d^3x=Mc^2$, and the componentwise vector integral satisfies $\mathbf s_*=\int\mathbf x\times j\,d^3x$. Assume also that its spin tensor is the spatial dual of $\mathbf s_*$ and obeys the momentum SSC. Then the polarization and body-centroid results are

$$\mathbf s(\tau)=s_0\bigl(\cos(\omega\Delta\tau)\mathbf e_1-\sin(\omega\Delta\tau)\mathbf e_2\bigr),\qquad \omega=\frac{qGB}{m},\quad \Delta\tau=\tau-\tau_0,$$

$$\ell\ge\frac{S_*}{Mc},\qquad \boldsymbol\delta=(\delta_1,\delta_2,0)\ \text{in the body-frame spatial components},\quad \delta_1^2+\delta_2^2<\left(\frac{S_*}{Mc}\right)^2.$$

Every interior shift vector is realized by some future timelike observer. There is no identification between $s_0$ and $S_*$ in this example.

## Facts & Assumptions

[A3] [[def-countable-choice]]: assume only countable choice $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure and inherited BMT/action-equivalence supplier hypotheses.

**Given:** The BMT rest-frame law and exact solution theorem, a constant uniform rest magnetic field, $m,M,B,S_*>0$, $q,g_s\in\mathbb R$, and separate material rest densities satisfying the stated energy-current and support hypotheses.

[A2] The inertial rest field is $\mathbf E=0$, $\mathbf B=B\mathbf e_3$ with $B>0$, and the initial polarization is $s_0\mathbf e_1$; independently, in the momentum-rest frame with origin and spatial basis specified in the Example, the body has $p=(Mc,\mathbf0)$, $\mathbf s_*=S_*f_3=\int\mathbf x\times j\,d^3x$, the stated spin tensor, and the specified componentwise-integrable rest densities supported in $\overline B_\ell(0)$ with the energy conditions.

[A1] The polarization obeys the adopted BMT model; in a rest frame the magnetic transport law is $d\mathbf s/d\tau=\alpha G(\mathbf s\times\mathbf B)$. [[pthm-rpm-rest-spin-and-size-bound]]

[F1] The component convention is $(\mathbf u\times\mathbf v)_i=\epsilon_{ijk}u_jv_k$ and $F_{ij}=\epsilon_{ijk}B_k$. [[def-cross-product-in-r3]]; [[def-em-electromagnetic-tensor]]

[F2] The exact constant-field spin solution and the separate body-size and centroid-disk statements hold under their stated assumptions. [[pthm-rpm-rest-spin-and-size-bound]]; [[lem-rpm-body-spin-size-bound]]; [[lem-rpm-flat-centroid-shift]]

[F3] The charge-model polarization $s$ and the flat-body moment spin are distinct model quantities unless an additional identification is supplied. [[def-rpm-charge-spin-model]]

## Verification

**Proof technique:** direct.

1.1 Under [A2], $\widehat{\mathbf B}=\mathbf e_3$, $\mathbf s_{\parallel,0}=0$, $\mathbf s_{\perp,0}=s_0\mathbf e_1$, and the angular frequency in the rest-spin theorem is $\omega=\alpha G B=qGB/m$. Substitution in that theorem gives the displayed $\mathbf s(\tau)$; differentiating yields $d\mathbf s/d\tau=\omega s_0[-\sin(\omega\Delta\tau)\mathbf e_1-\cos(\omega\Delta\tau)\mathbf e_2]$, equal to $\alpha G(\mathbf s\times B\mathbf e_3)$. The initial value at $\tau_0$ is $s_0\mathbf e_1$. [given, A3, A1, A2, F1, F2, algebra]

1.2 The independent body data [A2] satisfy the hypotheses of [F2]'s size lemma, so $|\mathbf s_*|=S_*$ gives $\ell\ge S_*/(Mc)$. The centroid lemma says the observer shifts fill the open disk in $\mathbf s_*^\perp$ of radius $S_*/(Mc)$; because $\mathbf s_*=S_*f_3$, this is exactly the displayed $f_1$–$f_2$ disk in body-frame components, with every strict interior point attainable and the boundary unattained. [given, A3, A2, F2, algebra]

2.1 The first calculation uses the polarization $\mathbf s$ and the second uses the body moment $\mathbf s_*$. [F3] imposes no equality between them, so the body-size inequality contains $S_*$ and does not constrain $s_0$ without an extra identification assumption. [F3, step 1.1, step 1.2] ∎

## Remarks

This is a model calculation. The field values are stipulated constants, not observations; the inequalities are conditional consequences for a separate body satisfying the stated material hypotheses.
