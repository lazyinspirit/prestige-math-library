---
id: def-csm-full-marked-model
kind: definition
title: Interacting marked phase-space and reference measures
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-csm-stable-superstable-continuum-interaction
  - def-csm-statistical-state-observable
  - def-tdmath-poisson-configuration-reference
  - def-tdmath-superstable-regular-interaction
  - lem-csm-gaussian-mark-moments
  - thm-kolmogorov-extension-for-standard-borel-coordinate-spaces
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-csm-stable-superstable-continuum-interaction: mathematical-premise
  def-csm-statistical-state-observable: mathematical-premise
  def-tdmath-poisson-configuration-reference: mathematical-premise
  def-tdmath-superstable-regular-interaction: mathematical-premise
  lem-csm-gaussian-mark-moments: mathematical-premise
  thm-kolmogorov-extension-for-standard-borel-coordinate-spaces: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Sections 2–3, printed pp.172–178 / PDF pp.2–8, positional finite-volume reference, pair energy and superstability."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "§§4.2–4.5, printed pp.192–215 / PDF viewer pp.220–243, classical microcanonical, canonical, and grand-canonical phase references."
---

## Definition

Assume AC. Fix $d\geq1$ and let $\phi:\mathbb R^d\to\mathbb R\cup\{+\infty\}$ be the numerical even Borel pair potential. Assume the stability, cell-superstability, lower-regularity, and decreasing-integrable-tail conditions of [[def-csm-stable-superstable-continuum-interaction]], with its fixed cell side $\ell$, and the superstable regular interaction, unit-coordinate, and periodic-image conventions of [[def-tdmath-superstable-regular-interaction]]. These are model hypotheses; the definitions do not prove that a particular material satisfies them. Use the finite-region phase-space and statistical-state conventions of [[def-csm-statistical-state-observable]].

Let $E_0>0$ joules be the energy unit, $\ell_0>0$ metres the length unit, $m>0$ kilograms the particle mass, and $p_*>0$ kg m s$^{-1}$ the momentum reference. Positions $x=q/\ell_0$ are dimensionless numerical coordinates; write $V_L=L^d$ for numerical volume. The dimensionless positional energy $U_{L,bc}$ is the physical pair energy divided by $E_0$, with $bc\in\{\mathrm{free},\mathrm{per}\}$ and the exact image convention above. If $T>0$ kelvin, put $\beta_{\rm phys}=1/(k_BT)$ in J$^{-1}$ and $b=\beta_{\rm phys}E_0=E_0/(k_BT)>0$.

Let $Q_L$ be the unit-intensity Poisson probability on positional configurations in $\Lambda_L=[0,L)^d$, defined by [[def-tdmath-poisson-configuration-reference]]. Its $N$-particle conditional law $Q_{L,N}$ is uniform on the unordered simple $N$-point configurations; in labelled coordinates it is $L^{-dN}dx_1\cdots dx_N$ on the no-collision set. On an $N$-point configuration, attach one momentum $p_x\in\mathbb R^d$ to each point and use the symmetric product reference $r^{\otimes q}$ with $r(dp)=dp/p_*^d$. The finite phase reference is
$$R_{L,N}(dq,dp):=Q_L(dq)\,r^{\otimes q}(dp)\,1_{\{N(q)=N\}}.$$
It is sigma-finite; the factor $e^{-V_L}/N!$ from the Poisson sector is retained. In physical coordinates the corresponding one-particle product scale is $h_{\rm ref}^d=\ell_0^dp_*^d$, an action to the power $d$; it is a reference convention, not a derived quantum constant.

For a marked configuration define the total dimensionless energy
$$\mathcal H_{L,bc}(q,p)=U_{L,bc}(q)+\sum_{x\in q}K(p_x),\qquad K(p)=\frac{|p|^2}{2mE_0}.$$
For $b>0$, [[lem-csm-gaussian-mark-moments]] gives $\kappa_b=\int e^{-bK}r(dp)=(2\pi mE_0/(bp_*^2))^{d/2}$ and the probability kernel $\nu_b(dp)=\kappa_b^{-1}e^{-bK(p)}r(dp)$. Whenever the positional canonical partition is finite and positive, nonnegative product integration [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] gives exact identities
$$Z^{\rm ph}_{Q,L,N,bc}(b)=\int e^{-b\mathcal H_{L,bc}}dR_{L,N}=\kappa_b^N Z^{\rm pos}_{Q,L,N,bc}(b),\qquad C^{\rm ph}_{L,N,bc}=C^{\rm pos}_{L,N,bc}\,\nu_b^{\otimes q}.$$
Here $Z^{\rm pos}_{Q,L,N,bc}=E_{Q_L}[1_{\{N(q)=N\}}e^{-bU_{L,bc}}]$ and the canonical probabilities are the normalized respective integrands. Under a full grand preparation of activity $z_{\rm ph}$, integrating each momentum changes the positional activity to $z=z_{\rm ph}\kappa_b$; thus a positional activity $z=e^\alpha$ corresponds to $z_{\rm ph}=e^\alpha/\kappa_b$. These are exact definitions and normalizations; they do not assert dynamical equilibration or finite-volume grand convergence. For periodic boundary conditions, simultaneous translation of all positions modulo the period preserves $R_{L,N}$ and $\mathcal H_{L,\mathrm{per}}$: the conditional position law is uniform on the torus, the mark reference is invariant under relabelling points, and the image energy depends only on pair displacements. Hence normalized canonical and finite band restrictions are torus-translation invariant.

