---
id: post-tgr-kepler-microcanonical-volume-preparation
kind: postulate
title: "Confined relative Kepler shell and volume entropy preparation"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 6
deps:
  - def-tgr-framework-units
  - def-tgr-regulated-kepler-shell-law
  - lem-tgr-regulated-kepler-shell-law-normalization
dependency_roles:
  def-tgr-framework-units: formulation-prerequisite
  def-tgr-regulated-kepler-shell-law: mathematical-premise
  lem-tgr-regulated-kepler-shell-law-normalization: mathematical-premise
justified_by: []
physical_scope: "Effective Newtonian relative two-body shell with r0>0 and R>16r0, energy A/R<e≤A/(16r0), explicit Gibbs-volume entropy convention, and optional stated uniform slow-motion restriction; no center-of-mass response or empirical thermalization claim."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
      locator: "§2(i), PDF p. 3, equations (2.2)–(2.3), defines an energy-shell density of states and its logarithmic entropy; §2(ii), PDF pp. 5–6, discusses short-distance cutoffs. Katz does not supply the cumulative-volume entropy adopted here. That convention and the finite relative-shell formula are specified and justified by the exact local mathematical suppliers."
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
      locator: "Complete 191-page notes retrieved; §1.3, PDF pp. 23–30, for canonical entropy/response conventions and the distinction between finite ensemble preparations."
verification:
  precheck: pass
---

## Postulate

Adopt the relative Hamiltonian, shell $r_0\le|q|\le R$, parameters $\mu,A,r_0,R,h_*$, phase-volume function $\Omega(E)$, and shell measure from [[def-tgr-regulated-kepler-shell-law]]. For $E=-e$ in the branch
$$\frac AR<e\le\frac{A}{16r_0},\qquad \delta:=\frac{er_0}{A}\in(0,1/16],$$
adopt the normalized energy-shell probability $P_E=\Sigma_E/\Omega'(E)$, whose total mass and support on $h=E$ are established by [[lem-tgr-regulated-kepler-shell-law-normalization]]. Adopt the Gibbs-volume entropy convention $S_G(E)=k_B\log\Omega(E)$, define $1/T_G=dS_G/dE$ where this derivative is positive, and define $C_G=dE/dT_G$ where the derivative exists. These are the selected finite-system preparation and temperature conventions; they are not asserted to be universal operational identifications.

For a physical Newtonian slow-motion regime, additionally require a stated dimensionless tolerance $0<\delta_{\rm NR}\ll1$ and
$$\frac{2A}{\mu r_0c^2}\le\delta_{\rm NR}.$$
On the adopted negative-energy shell, $|p|/\mu$ then has the corresponding uniform speed bound. This condition restricts the microcanonical branch only; it is not imposed by or transferred to the distinct canonical preparation. No center-of-mass degree of freedom, dynamical wall law, empirical thermalization, or self-consistent relativistic field is included.

The masses, $G$, $r_0$, $R$, $h_*$, selected energy $E$, and any $\delta_{\rm NR}$ tolerance are fixed inputs. The reduced mass $\mu$, $A=Gm_1m_2$, relative Hamiltonian, phase-volume function, and entropy/temperature/response quantities are defined constructions of this model; none is asserted to be universal across gravitational frameworks.
