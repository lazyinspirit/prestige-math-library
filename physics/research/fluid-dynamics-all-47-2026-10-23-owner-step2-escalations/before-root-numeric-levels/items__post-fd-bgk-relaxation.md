---
id: post-fd-bgk-relaxation
kind: postulate
title: Conserving homogeneous BGK idealization
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
physical_scope: >-
  Separately adopted, spatially homogeneous, single-species, monatomic BGK
  relaxation model with positive translational temperature, constant
  phenomenological relaxation time, and a dimensionless fast-collision scale.
  It is not the binary Boltzmann collision operator, an inhomogeneous
  hydrodynamic limit, a many-particle derivation, or an empirical claim.
deps:
  - def-fd-conserving-bgk
dependency_roles:
  def-fd-conserving-bgk: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "François Golse and C. David Levermore, Fluid Dynamics from Kinetic Equations"
      url: "https://www.cmls.polytechnique.fr/perso/golse/Exposes/HLslides2.pdf"
      locator: "Lecture 2, section II, 'The BGK Operator', PDF pp. 27–29; local Maxwellian relaxation with positive relaxation time."
    - title: "David Tong, Lectures on Kinetic Theory, Chapter 2"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
      locator: "Section 2.5.1, printed pp. 45–46; the relaxation-time approximation and its explicit non-exactness qualification."
verification:
  precheck: pending
---

## Postulate

Let $v_*=1\,\mathrm{m\,s^{-1}}$ and $\omega_3(v)=\sum_{j=0}^3(|v|/v_*)^j$. A velocity density $g:\mathbb R^3\to[0,\infty)$ is admissible when it is finite-valued and Lebesgue measurable, $g\,d^3v$ is a number density in $\mathrm{m^{-3}}$ (so $g$ has units $\mathrm{s^3\,m^{-6}}$), and
$$\int_{\mathbb R^3}\omega_3(v)g(v)\,d^3v<\infty.$$
The primitive parameters are species mass $m>0$ in kilograms and Boltzmann constant $k_B>0$ in joules per kelvin. For an admissible $g$ with $n[g]:=\int_{\mathbb R^3}g\,d^3v>0$ and positive centered second moment, define
$$u[g]:=\frac{1}{n[g]}\int_{\mathbb R^3}v g(v)\,d^3v,\qquad T[g]:=\frac{m}{3k_Bn[g]}\int_{\mathbb R^3}|v-u[g]|^2g(v)\,d^3v.$$
The domain condition ensures $T[g]>0$.
Define its moment-matched Maxwellian by
$$M[g](v)=n[g]\left(\frac{m}{2\pi k_BT[g]}\right)^{3/2}\exp\left(-\frac{m|v-u[g]|^2}{2k_BT[g]}\right).$$
It has the same number, momentum, and kinetic-energy moments as $g$. For a constant relaxation time $\tau>0$ in seconds, adopt the homogeneous collision model
$$Q_{\rm BGK}(g)=\frac{M[g]-g}{\tau}.$$

Let $f_0$ be an admissible initial density with positive number density and positive centered second moment. For each dimensionless $\varepsilon>0$, a trajectory considered in the accelerated model is a continuously differentiable map
$$f^\varepsilon\in C^1\!\left([0,\infty);L^1\!\left(\mathbb R^3,\omega_3(v)\,d^3v\right)\right),$$
whose states have nonnegative admissible representatives with positive number density and positive centered second moment at every $t\ge0$, and whose initial trace satisfies $f^\varepsilon(0)=f_0$ in this weighted $L^1$ space. The derivative is the Banach-space derivative, with the right derivative at $t=0$. Adopt
$$\frac{d}{dt}f^\varepsilon(t)=\frac{M[f^\varepsilon(t)]-f^\varepsilon(t)}{\varepsilon\tau},\qquad t\ge0,$$
as an equality in $L^1(\mathbb R^3,\omega_3(v)\,d^3v)$ at every $t\ge0$.

The model also permits pointwise solution representatives $\widetilde f:\mathbb R^3\times[0,\infty)\to[0,\infty)$ that are jointly measurable, have finite $\omega_3$-weighted velocity integral at every time, and satisfy $\widetilde f(v,0)=f_0(v)$ for almost every $v$. Require their velocity sections to be continuous on $[0,\infty)$ and differentiable on $(0,\infty)$ for almost every $v$, with positive number density and centered second moment at every time. In this solution sense, require one full-measure set of velocities on which
$$\partial_t\widetilde f(v,t)=\frac{M[\widetilde f(\cdot,t)](v)-\widetilde f(v,t)}{\varepsilon\tau}$$
holds for every $t>0$, and require on each compact time interval a velocity-integrable majorant for $\omega_3(v)|\partial_t\widetilde f(v,t)|$ independent of $t$. The Banach-space and pointwise equalities specify two solution senses for the same adopted model; neither asserts solution existence. This is a separate phenomenological relaxation model. It does not replace or follow from the binary Boltzmann postulate, and the relaxation-time form is not asserted to be an exact microscopic collision operator. No empirical premise or measured relaxation time is asserted.

## Postulate references

Current draft mathematical definition of the moment-preserving Maxwellian relaxation operator: [[def-fd-conserving-bgk|moment-preserving BGK model]].

[François Golse and C. David Levermore, Fluid Dynamics from Kinetic Equations, Lecture 2, “The BGK Operator”](https://www.cmls.polytechnique.fr/perso/golse/Exposes/HLslides2.pdf)

[David Tong, Lectures on Kinetic Theory, §2.5.1 (relaxation-time approximation and its non-exactness qualification)](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)
