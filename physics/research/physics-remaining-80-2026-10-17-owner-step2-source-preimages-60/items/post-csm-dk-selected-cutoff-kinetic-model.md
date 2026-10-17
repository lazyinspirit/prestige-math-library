---
id: post-csm-dk-selected-cutoff-kinetic-model
kind: postulate
title: "Selected phenomenological cutoff collision model"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - def-csm-dk-reflection-collision-gain
  - lem-csm-dk-reflection-measure-and-gain-identities
  - def-countable-choice
dependency_roles:
  def-csm-dk-reflection-collision-gain: formulation-prerequisite
  lem-csm-dk-reflection-measure-and-gain-identities: formulation-prerequisite
  def-countable-choice: mathematical-premise
physical_scope: "An adopted spatially homogeneous one-particle velocity-density model for identical nonrelativistic particles with a finite normalized angular reflection law and prescribed collision rate. It is not derived from finite-particle mechanics, a hard-sphere Boltzmann–Grad limit, or a general hydrodynamic limit."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
      locator: "§2.2.1–§2.2.3, printed pp. 20–32: kinetic collision equation, molecular-chaos closure, elastic collision kinematics and scattering assumptions."
    - title: "R. Fitzpatrick, Plasma Physics, Boltzmann H-Theorem"
      url: "https://farside.ph.utexas.edu/teaching/plasma/lectures1/node40.html"
      locator: "Equations (3.123)–(3.144): homogeneous collision model, H functional and Maxwellian detailed-balance discussion."
verification:
  precheck: n/a
---

## Postulate

For this selected model, an identical classical particle is nonrelativistic in the explicit sense that its velocity is a vector $v\in\mathbb R^3$ and its kinetic energy is the Newtonian scalar $m|v|^2/2$. The mass $m>0$ is a primitive model parameter in kilograms. At time $t\ge0$, $f_t(v)$ is the probability density of velocity for a randomly selected particle with respect to Lebesgue measure $dv$; it is nonnegative, normalized by $\int f_t\,dv=1$, and therefore has SI units $(\mathrm{m\,s^{-1}})^{-3}$. Assume $\mathrm{AC}_\omega$ for the completed Lebesgue measure used by the mathematical gain definition ([[def-countable-choice]]). A positive speed $v_0$ in $\mathrm{m\,s^{-1}}$ is a reference scale used only to make the logarithm in the one-particle information functional dimensionless. The Boltzmann constant $k_B>0$ in $\mathrm{J\,K^{-1}}$ is a primitive conversion factor when that functional is assigned entropy units.

Adopt the spatially homogeneous kinetic equation

$$\partial_t f_t(v)=\lambda\bigl(\mathcal G(f_t,f_t)(v)-f_t(v)\bigr),\qquad \lambda>0,$$

where $\mathcal G$ and the elastic reflection $(v,w)\mapsto(v',w')$ are exactly those of [[def-csm-dk-reflection-collision-gain]] and [[lem-csm-dk-reflection-measure-and-gain-identities]]. The angular measure is the finite normalized area law specified there, and $\lambda$ is a prescribed rate in $\mathrm{s^{-1}}$, independent of relative speed; it is not a measured cross-section or a derived microscopic frequency. The selected incoming pair law is $f(v)f(w)\,dv\,dw$, and the gain uses the corresponding product $f(v')f(w')$ after reflection. This factorized independent-pair closure is adopted here; it is not deduced from reversible many-particle mechanics or from a molecular-chaos theorem. The mathematical existence and regularity claims are separate from this physical adoption.

The model's global mild evolution and its finite-energy hypotheses are mathematical claims treated separately from this physical adoption. This postulate makes no claim of a hard-sphere Boltzmann–Grad limit, generic gas applicability, spatially inhomogeneous PDE well-posedness, a hydrodynamic limit, or observed entropy increase.
