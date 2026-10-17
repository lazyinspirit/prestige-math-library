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

For this selected model, an identical classical particle is nonrelativistic in the explicit sense that its velocity is a vector $v\in\mathbb R^3$ and its kinetic energy is the Newtonian scalar $m|v|^2/2$. The mass $m>0$ is a primitive model parameter in kilograms. At time $t\ge0$, $f_t(v)$ is the probability density of velocity for a randomly selected particle with respect to Lebesgue measure $dv$; it is nonnegative, normalized by $\int f_t\,dv=1$, and therefore has SI units $(\mathrm{m\,s^{-1}})^{-3}$. Assume $\mathrm{AC}_\omega$ for the completed Lebesgue measure used by the mathematical gain definition ([[def-countable-choice]]). A positive speed $v_0$ in $\mathrm{m\,s^{-1}}$ is a reference scale used both in the dimensionless weight $w_0(v)=1+|v|^2/v_0^2$ defining the norm on $X$ below and to make the logarithm argument $v_0^3f_t(v)$ in the one-particle information functional dimensionless. The Boltzmann constant $k_B>0$ in $\mathrm{J\,K^{-1}}$ is a primitive conversion factor when that functional is assigned entropy units.

Let $X$ and $w_0(v)=1+|v|^2/v_0^2$ be as defined in [[def-csm-dk-reflection-collision-gain]]. On the interior of a time interval $J\subseteq[0,\infty)$, an admissible classical trajectory is a map $t\mapsto f_t\in X$ continuously differentiable in the $X$ norm, with its derivative extending continuously to included endpoints by one-sided derivatives, and with $f_t\ge0$ almost everywhere and $\int f_t\,dv=1$ for every $t\in J$. Thus each admissible density has finite second velocity moment. The differential equation below is an equality in the normed space $X$, hence an equality of equivalence classes of functions of velocity. When a trajectory has a chosen representative $\widetilde f:J\times\mathbb R^3\to[0,\infty)$ that is continuously differentiable in $t$ and for which the gain integral is finite and continuous in $(t,v)$, the pointwise form $\partial_t\widetilde f(t,v)=\lambda(\mathcal G(\widetilde f_t,\widetilde f_t)(v)-\widetilde f(t,v))$ is required for every $(t,v)$ on that representative; this pointwise conclusion is not asserted for arbitrary representatives of an $X$ class.

Adopt the spatially homogeneous kinetic equation

$$\frac{d}{dt}f_t=\lambda\bigl(\mathcal G(f_t,f_t)-f_t\bigr)\quad\text{in }X,\qquad \lambda>0,$$

where $\mathcal G$ and the elastic reflection $(v,w)\mapsto(v',w')$ are exactly those of [[def-csm-dk-reflection-collision-gain]] and [[lem-csm-dk-reflection-measure-and-gain-identities]]. The angular measure is the finite normalized area law specified there, and $\lambda$ is a prescribed rate in $\mathrm{s^{-1}}$, independent of relative speed; it is not a measured cross-section or a derived microscopic frequency. The selected incoming pair law is $f(v)f(w)\,dv\,dw$, and the gain uses the corresponding product $f(v')f(w')$ after reflection. This factorized independent-pair closure is adopted here; it is not deduced from reversible many-particle mechanics or from a molecular-chaos theorem. The mathematical existence and regularity claims are separate from this physical adoption.

The model's global mild evolution and its finite-energy hypotheses are mathematical claims treated separately from this physical adoption. This postulate makes no claim of a hard-sphere Boltzmann–Grad limit, generic gas applicability, spatially inhomogeneous PDE well-posedness, a hydrodynamic limit, or observed entropy increase.
