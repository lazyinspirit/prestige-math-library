---
id: post-rns-ns-background-sigma-model
kind: postulate
title: RNS NS Background Sigma Model
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: physics
library: physics
deps:
- post-rns-flat-worldsheet-model
- def-st-flat-bosonic-string-model
- def-st-string-tension-alpha-prime
- def-rns-n11-worldsheet-superspace-data
dependency_roles:
  post-rns-flat-worldsheet-model: formulation-prerequisite
  def-st-flat-bosonic-string-model: formulation-prerequisite
  def-st-string-tension-alpha-prime: formulation-prerequisite
  def-rns-n11-worldsheet-superspace-data: mathematical-premise
physical_scope: Adopted local N=(1,1) RNS NS–NS sigma-model action on compact closed oriented Euclidean worldsheets, for field
  configurations whose body map lies in one target chart with a chosen Spin structure. It asserts no global B-gerbe quantization,
  RR fields, branes, orientifolds, target-space equations, conformal-invariance conditions, functional measure, or backreaction.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: M. E. Knutt-Wehlau and R. B. Mann, Supergravity from a Massive Superparticle and the Simplest Super Black Hole, hep-th/9708126v2
    url: https://arxiv.org/pdf/hep-th/9708126v2
    locator: "§4 equations (4.2)–(4.5), PDF pp. 6–7: constrained compensator geometry and exact cancellation of the super-Weyl factor in the kinetic and curvature densities. The Euclidean continuation, real odd integration and resulting RNS normalization are explicitly fixed by the mathematical supplier and this Postulate; they are not quoted as Lorentzian source constants."
  - title: Timo Weigand, Introduction to String Theory, Winter term 2011/12
    url: https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf
    locator: §5.6.1, printed pp. 120–122, equations (5.128)–(5.138), for the bosonic curved-target metric, two-form, and dilaton
      action; Chapter 6.1, printed pp. 128–130, equations (6.7)–(6.12), for the flat-gauge RNS matter fields and supersymmetry.
  - title: David Tong, String Theory, University of Cambridge Part III lecture notes
    url: https://www.damtp.cam.ac.uk/user/tong/string/string.pdf
    locator: §7.2.2, printed pp. 167–168, equation (7.12), for the bosonic metric, B-field, and Fradkin–Tseytlin curvature
      coupling.
  - title: C. M. Hull, G. Papadopoulos, and P. K. Townsend, Potentials for (p,0) and (1,1) supersymmetric sigma models with
      torsion
    url: https://arxiv.org/pdf/hep-th/9307013
    locator: Introduction and §5, especially equations (1.1), (5.3), and (5.4), for the local (1,1) superspace sigma-model
      density with metric and two-form couplings.
verification:
  precheck: pass
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

Adopt the following local physical model. A worldsheet $\Sigma$ is a finite disjoint union of compact connected Riemann surfaces, each equipped with a smooth positive-definite metric $h$ satisfying $h(Ju,Jv)=h(u,v)$ for its complex structure $J$, and a supplied Spin structure. Use exactly the real split $2|2$ superspace defined by the earlier item def-rns-n11-worldsheet-superspace-data: its odd tangent bundle has real rank two and complex chiral decomposition $S_+\oplus S_-$, while the chiral coordinate functions $\theta^\pm$ are exchanged by the real structure. The curved data are the supplier's explicit constrained conformal-presentation geometry and its coordinate/Spin transforms: $E_M{}^A$ is the coframe, $\mathcal E=\operatorname{Ber}(E_A{}^M)$ is the inverse-frame Berezinian, $\mu=\mathcal E^{-1}$ is the coframe density, $\nabla_\pm$ are its Euclidean curved odd derivatives, and $\mathcal R=4F_J$ is its real scalar curvature normalized relative to the real rotation generator. In particular $\nabla_\pm$ are not the flat Lorentzian plus-sign generators $Q_\pm$. Write $d^2\theta_E$ for the supplier's real odd integral $I_E$, with $I_E(\theta^+\theta^-)=-i$, and use $d^2z=dx\,dy$ in an oriented conformal chart $z=x+iy$. The even superfield $X:\mathcal W\to M$ is real, so in the component convention below its coefficients obey the supplied reality condition. On each connected component, the body field is a smooth map $x:\Sigma\to U$ into one target chart $U$ of a smooth ten-dimensional Lorentzian manifold $M$ with signature $(-,+,\ldots,+)$. The fields $G_{\mu\nu}$, $B_{\mu\nu}=-B_{\nu\mu}$, and $\Phi$ are respectively a Lorentzian metric, a local two-form potential, and a real scalar on $U$; $H=dB$ is the resulting local three-form, with components $H_{\mu\nu\rho}=3\partial_{[\mu}B_{\nu\rho]}$. The target coordinates are $X^\mu$, $\mu=0,\ldots,9$, and the worldsheet coordinate indices are $a,b=1,2$. The metric $G$ is the string-frame metric by definition here: it is the metric entering the worldsheet kinetic term, with no Einstein-frame identification asserted.

Use $\hbar=c=1$, dimensionless worldsheet and odd coordinates, and dimensionless metric components. The target coordinates $x^\mu$ have length dimension one, $\alpha'>0$ has length dimension two, $G$, $B$, $\Phi$, and the RNS fermions $\psi_\pm^\mu$ are dimensionless, $H_{\mu\nu\rho}$ has inverse-length dimension, and the auxiliary component $F^\mu$ has inverse-length dimension. Fix the superfield normalization as $X^\mu=x^\mu+\sqrt{\alpha'}\,\theta^+\psi_+^\mu+\sqrt{\alpha'}\,\theta^-\psi_-^\mu+\alpha'\theta^+\theta^-F^\mu$, so the odd coefficients in the mathematical superspace definition are $\Xi_\pm^\mu=\sqrt{\alpha'}\psi_\pm^\mu$ and the top coefficient is $A^\mu=\alpha'F^\mu$. In conformal spin coordinates these symbols denote conformal-frame components: relative to the orthonormal generators $\vartheta^\pm=e^{-s}\theta^\pm$ they obey $\psi_{\mathrm{conf},\pm}=e^{-s}\psi_{\mathrm{orth},\pm}$ and $F_{\mathrm{conf}}=e^{-2s}F_{\mathrm{orth}}$. The coefficients $\psi_+$ and $\psi_-$ are sections of $S_+^*\otimes x^*TM_{\mathbb C}$ and $S_-^*\otimes x^*TM_{\mathbb C}$, respectively, with odd component-algebra coefficients. Their signs label the multiplying odd coordinate; using the real spin metric to raise their spin index exchanges the two associated chiral summands. Their orthonormal components transform by $e^{\mp i\tau/2}$ and conformal components by $a_{ij}^{-1}$ and $\overline a_{ij}^{-1}$, respectively, as in the supplier. This is a change of local bundle trivialization with the same dimensions, not an identification with the independently named Lorentzian spinors. Since $X$ is real in the specified Euclidean superspace, these coefficients satisfy $\overline{\psi_+}=\psi_-$ and $\overline F=-F$ in this ordered-component convention. This is the Euclidean real-superfield condition; it does not identify the two chiral components with the independent Lorentzian Majorana-Weyl components of the flat RNS model. These assignments make the displayed actions dimensionless. For the even superfield $X:\mathcal W\to M$, adopt the local Euclidean superspace action
$$S_E^{\mathrm{matter}}=\frac{4i}{4\pi\alpha'}\int_{\mathcal W}d^2z\,d^2\theta_E\,\mathcal E^{-1}(G_{\mu\nu}(X)+B_{\mu\nu}(X))\nabla_+X^\mu\nabla_-X^\nu,$$
$$S_E^{\mathrm{FT}}=\frac{1}{4\pi}\int_{\mathcal W}d^2z\,d^2\theta_E\,\mathcal E^{-1}\Phi(X)\mathcal R.$$
The multiplier $4i$ in the matter term is part of this explicit Euclidean formulation: with $D_\pm^2=\partial_z,\partial_{\overline z}$ and $I_E(\theta^+\theta^-)=-i$, the supplier's tensor-density calculation gives $4iI_E(\mu(G+B)\nabla_+x\nabla_-x)=\sqrt h\,h^{ab}G_{\mu\nu}\partial_ax^\mu\partial_bx^\nu+i\varepsilon^{ab}B_{\mu\nu}\partial_ax^\mu\partial_bx^\nu$. This is an explicit public superspace-formulation normalization, not an asserted theorem of physical equivalence to a differently normalized uncontinued action. The bosonic truncation sets the independent matter components $\psi_\pm=F=0$ and the independent conformal-gauge gravitino/auxiliary components of $S$ to zero, while retaining the coframe's constraint-determined odd-coordinate terms. The proved weighted curvature-density identity holds for arbitrary $\Phi(x)$ without discarding its derivatives by integration by parts. With these conventions the complete bosonic component action is
$$S_E^{\mathrm{bos}}=\frac{1}{4\pi\alpha'}\int_\Sigma d^2\sigma\left(\sqrt h\,h^{ab}G_{\mu\nu}(x)\partial_a x^\mu\partial_b x^\nu+i\varepsilon^{ab}B_{\mu\nu}(x)\partial_a x^\mu\partial_b x^\nu\right)+\frac{1}{4\pi}\int_\Sigma d^2\sigma\,\sqrt h\,\Phi(x)R^{(2)}(h),$$
where $\varepsilon^{ab}$ is the orientation-compatible antisymmetric density with $\varepsilon^{12}=+1$, and $R^{(2)}=2K_h$ fixes the positive-curvature convention. The displayed superspace completion, its signs and normalization, and the component action are adopted together as a model postulate, not derived from the flat RNS action. This is local NS–NS data only; no RR background or localized source is present, and no global B-gerbe, boundary, or path-integral measure is asserted.

In $S_E^{\mathrm{FT}}$, $F_J$ is the coefficient of $J_0$ in the mixed odd frame curvature, and $\mathcal R=4F_J=-16i e^{2S}D_-D_+S$ in the supplier's Euclidean conformal presentation. The integrand contains this real scalar superfunction, rather than Lie-algebra-valued curvature or a representation matrix. At the bosonic truncation $S=s$, $h=e^{-4s}|dz|^2$, the coframe retains its linear odd-coordinate terms and $\mu\mathcal R=16i\theta^+\theta^-s_{z\overline z}$. Real odd integration therefore gives the scalar-curvature density $\sqrt h R^{(2)}$ with $R^{(2)}=2K_h$, positive on the round sphere. This formulation asserts a model convention and local classical component reduction; it supplies no functional integration measure or general supergeometry classification.

## Postulate references

[Timo Weigand, §5.6.1 and Chapter 6.1](https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf)

[David Tong, §7.2.2](https://www.damtp.cam.ac.uk/user/tong/string/string.pdf)

[Hull, Papadopoulos, and Townsend, Introduction and §5](https://arxiv.org/pdf/hep-th/9307013)

[Knutt-Wehlau and Mann, §4 equations (4.2)–(4.5)](https://arxiv.org/pdf/hep-th/9708126v2)

[[def-rns-n11-worldsheet-superspace-data]]

[[post-rns-flat-worldsheet-model]]

[[def-st-flat-bosonic-string-model]]

[[def-st-string-tension-alpha-prime]]
