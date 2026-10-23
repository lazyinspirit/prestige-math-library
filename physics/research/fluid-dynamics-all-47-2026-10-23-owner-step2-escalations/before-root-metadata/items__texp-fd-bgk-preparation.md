---
id: texp-fd-bgk-preparation
kind: thought-experiment
title: Prepared non-Maxwellian distribution and initial layer
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 9
physical_scope: >-
  Hypothetical spatially homogeneous preparation for the single-species BGK
  model, using a compactly supported non-Maxwellian initial velocity density.
  No apparatus, observation, or empirical relaxation is reported.
deps:
  - pthm-fd-bgk-equilibration
dependency_roles:
  pthm-fd-bgk-equilibration: physical-result
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "François Golse and C. David Levermore, Fluid Dynamics from Kinetic Equations"
      url: "https://www.cmls.polytechnique.fr/perso/golse/Exposes/HLslides2.pdf"
      locator: "Lecture 2, section II, 'The BGK Operator', PDF pp. 27–29; moment-preserving Maxwellian relaxation."
    - title: "David Tong, Lectures on Kinetic Theory, Chapter 2"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
      locator: "Section 2.5.1, printed pp. 45–46; the phenomenological relaxation-time qualification."
verification:
  precheck: pending
---

## Statement

Consider a hypothetical homogeneous three-dimensional gas with particle mass $m>0$ in kilograms, Boltzmann constant $k_B>0$ in joules per kelvin, number density $n_0>0$ in $\mathrm{m^{-3}}$, translational temperature $T_0>0$ in kelvins, and a constant reference density $f_{\rm ref}>0$ with the same units as the velocity density below. Put $\theta=k_BT_0/m$ in $\mathrm{m^2\,s^{-2}}$, $V_c=\sqrt{3\theta}$ in $\mathrm{m\,s^{-1}}$, and define the prepared number density in velocity space by

$$f_0(v)=\frac{n_0}{8V_c^3}\,\mathbf 1_{[-V_c,V_c]^3}(v),\qquad v\in\mathbb R^3.$$

The density $f_0$ has units $\mathrm{s^3\,m^{-6}}$, so $f_0\,d^3v$ is a number density in $\mathrm{m^{-3}}$.

Here $\mathbf 1_C$ is the function equal to one on the cube $C$ and zero outside it. The corresponding Maxwellian with the same number density, zero mean velocity, and temperature $T_0$ is

$$M(v)=n_0\left(\frac{m}{2\pi k_BT_0}\right)^{3/2}\exp\left(-\frac{m|v|^2}{2k_BT_0}\right).$$

Define the dimensionless weighted norm by $\|g\|_{1,3}=\int_{\mathbb R^3}(1+|v/v_*|^3)|g(v)|\,d^3v$, where $v_*=1\,\mathrm{m\,s^{-1}}$. Under the homogeneous fast-scale conserving BGK model with $\tau>0$ seconds and dimensionless $\varepsilon>0$, this preparation has an exact initial-layer solution: for every fixed $t>0$, $f^\varepsilon(t)\to M$ in this weighted $L^1$ norm as $\varepsilon\to0$, while $f^\varepsilon(0)=f_0\ne M$. The compactly supported $f_0$ is a hypothetical distribution, not an observed preparation or experiment.

## Statement references

[François Golse and C. David Levermore, Fluid Dynamics from Kinetic Equations, Lecture 2, “The BGK Operator”](https://www.cmls.polytechnique.fr/perso/golse/Exposes/HLslides2.pdf)

[David Tong, Lectures on Kinetic Theory, §2.5.1 (relaxation-time approximation and its non-exactness qualification)](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)

## Facts & Assumptions

**Given:** $n_0,T_0,m,k_B,\tau,\varepsilon,f_{\rm ref}>0$ with the units and dimensionless conventions in the statement, the hypothetical $f_0$, and the homogeneous BGK model.

[F1] [[pthm-fd-bgk-equilibration]] (current same-batch draft physics theorem; its K01 mathematical suppliers, including [[thm-fd-homogeneous-bgk-limit]] and [[prop-fd-bgk-entropy-rate]], are current draft carriers with Step 1 readiness records marked ready, recording authoring readiness but not proof acceptance): for nonnegative initial data with finite $\omega_3$ moment, positive number density and centered second moment, and finite reference-relative entropy, the homogeneous fast-scale BGK solution has the exact formula and weighted-norm equality in its Statement.

## Proof

1.1 Let $C=n_0/(8V_c^3)$ and $R=\sqrt3V_c/v_*$. The cube has volume $8V_c^3$, so $\int f_0\,d^3v=n_0$. Symmetry of each interval gives $\int v f_0\,d^3v=0$. For the second moment, each coordinate contributes $(2V_c)^2\int_{-V_c}^{V_c}s^2\,ds=8V_c^5/3$, so $\int_{[-V_c,V_c]^3}|v|^2\,d^3v=8V_c^5$; dividing by $8V_c^3$ gives mean square speed $V_c^2$. Thus $\int |v|^2f_0\,d^3v=n_0V_c^2=3n_0k_BT_0/m$, so the mean velocity is zero and its temperature is $T_0$. On the support, $\omega_3(v)\le1+R+R^2+R^3$, hence $\int\omega_3 f_0\,d^3v\le n_0(1+R+R^2+R^3)<\infty$. With $f_{\rm ref}>0$ in the same units as $C$, $\int f_0|\log(f_0/f_{\rm ref})|\,d^3v=n_0|\log(C/f_{\rm ref})|<\infty$, using $0\log0=0$. [given, algebra]

2.1 The Maxwellian $M$ is strictly positive on all of $\mathbb R^3$, whereas $f_0$ vanishes outside the compact cube, so $f_0\ne M$ almost everywhere and $\|f_0-M\|_{1,3}>0$. The data in step 1.1 satisfy the hypotheses of [F1]; applying it gives the exact solution and exponential weighted-norm equality. [given, F1, step 1.1]

3.1 For each fixed $t>0$, $e^{-t/(\varepsilon\tau)}\to0$ as $\varepsilon\to0$, so the equality in step 2.1 gives $f^\varepsilon(t)\to M$ in weighted $L^1$. At $t=0$, the solution is $f_0$, whose positive mismatch was proved in step 2.1. The initial layer is therefore a conditional model prediction for this hypothetical preparation, not an empirical result. [given, F1, step 2.1, algebra] ∎
