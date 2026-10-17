---
id: def-emg-matter-observables
kind: definition
title: "Smooth matter quantities, current and observer observables"
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 1
deps:
  - def-emg-geometry-units
  - def-emg-matter-formal-systems
dependency_roles:
  def-emg-geometry-units: formulation-prerequisite
  def-emg-matter-formal-systems: mathematical-premise
physical_scope: "Framework-local SI definitions of smooth matter fields, selected dust and perfect-fluid stress/current closures, and observer contractions in the equation-based Einstein–Maxwell model. It makes no empirical claim and supplies no general matter closure or coupled-field existence result."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete 238-page lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Chapter 1, equations (1.104)–(1.110): dust current/stress and perfect-fluid rest-frame/covariant tensors. The Maxwell tensor appears separately at equation (1.111), in Gaussian units. Chapter 4, equations (4.69)–(4.72): general Hilbert stress-energy definition and weak-energy-condition context. Carroll uses c=1 and Gaussian electromagnetic units; the local SI definitions are stated explicitly."
    - title: "David Tong, General Relativity, complete author-hosted 290-page lecture notes"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§§4.5.2–4.5.5 and §4.5.7, PDF pp. 190–204 (printed pp. 183–197): electromagnetic and perfect-fluid stress, observer energy, local stress balance, Killing currents and energy conditions. Source units and conventions are not silently imported."
    - title: "Reinhard Meinel and Moritz Hütten, On the black hole limit of electrically counterpoised dust configurations, arXiv:1105.3807v3 (2011)"
      url: "https://arxiv.org/pdf/1105.3807"
      locator: "Complete 8-page article inspected; §2, equations (1)–(7), PDF pp. 2–3, static electrically counterpoised dust stress, current parallel to the dust velocity, and sourced Einstein–Maxwell system. Its c=G=1 Gaussian units and fixed charge-to-mass ratio are not adopted."
verification:
  precheck: n/a
---

## Definition

Let $\Omega$ be an open subset of the smooth, oriented, time-oriented Lorentzian four-manifold $(M,g,N,o)$ of [[def-emg-geometry-units]], with signature $(-,+,+,+)$ and metric-selected Levi–Civita connection $\nabla$. The exact tensor types, formal matter systems, stress convention, observer conventions and smoothness levels below are those of [[def-emg-matter-formal-systems]]. Use SI units with length coordinates $x^0=ct$ as in [[def-emg-geometry-units]]; no numerical value of the experimentally determined $\mu_0$ is treated as exact.

At a point $p\in\Omega$, an **observer** is a future-directed unit timelike vector $n\in T_pM$ satisfying $g(n,n)=-1$. A smooth field of such vectors is an **observer congruence**. A **local tetrad** on an open set $V\subseteq\Omega$ is a tuple of smooth vector fields $(e_0,e_1,e_2,e_3)$ forming a basis of $T_xM$ at every $x\in V$ and satisfying $g(e_\alpha,e_\beta)=\eta_{\alpha\beta}$, where $\eta=\operatorname{diag}(-1,1,1,1)$, as in [[def-emg-geometry-units]]; its value at a point is an orthonormal tangent-space basis. An observer, a congruence, a tetrad and a coordinate chart are different objects. A **four-velocity field** $U$ is a $C^2$ future-timelike vector field with $g(U,U)=-c^2$; $n=U/c$ is its unit observer at each point. A **proper-time worldline segment** is a $C^2$ future-directed timelike curve $z:I\to\Omega$ on an interval $I$ of proper time $\tau$ in seconds, with $dz/d\tau=U$ and $g(U,U)=-c^2$ along the segment. These are local model fields and curves; no global flow or completeness is included.

The matter variables are constitutive inputs of a selected model: rest-mass density $\rho$ in $\mathrm{kg\,m^{-3}}$, rest-charge density $\sigma$ in $\mathrm{C\,m^{-3}}$, rest-energy density $\epsilon$ in $\mathrm{J\,m^{-3}}$, and isotropic pressure $p$ in $\mathrm{J\,m^{-3}}$. A smooth matter current $j^a$ has units $\mathrm{A\,m^{-2}}$, and a symmetric matter stress tensor $T_m^{ab}$ has units $\mathrm{J\,m^{-3}}$ in the stated length-coordinate convention. Their physical meanings are fixed only after a constitutive branch is selected:

- For charged dust, $T_m^{ab}=\rho U^aU^b$ and $j^a=\sigma U^a$. Here $\rho\geq0$ is rest-mass density, not energy density.
- For a perfect fluid, $T_m^{ab}=(\epsilon+p)U^aU^b/c^2+pg^{ab}$. Its rest-frame entries are $(\epsilon,p,p,p)$. No equation of state is included by this tensor definition.
- An optional conducting-fluid current is $j^a=\sigma U^a+q^a$, where $q^aU_a=0$ and $q^a$ is a rest-space conduction-current density in $\mathrm{A\,m^{-2}}$. The separate constitutive choice $q^a=\chi E_U^a$ uses a scalar conductivity $\chi\geq0$ in $\mathrm{S\,m^{-1}}$ and is not part of the general definition.

For a smooth real electromagnetic two-form $F$ and positive $\mu_0$, define the electromagnetic stress by

$$T_{\mathrm{EM}}^{ab}:=\frac1{\mu_0}\left(F^{ac}F^b{}_c-\frac14g^{ab}F_{cd}F^{cd}\right),\qquad T^{\mathrm{EM}}_{ab}:=g_{ac}g_{bd}T_{\mathrm{EM}}^{cd}.$$

The components of $F$ in an orthonormal tetrad have tesla units. For an observer $n$, the observer electric field is $E_n^a:=cF^a{}_bn^b$ in $\mathrm{V\,m^{-1}}$; with $U=cn$, write $E_U^a:=F^a{}_bU^b=E_n^a$. The observer magnetic field is the spatial covector $B_{n,a}:=-({\star_gF})_{ab}n^b$ in tesla, with the orientation and Hodge convention of [[def-emg-geometry-units]]. These observer fields depend on $n$; they are not global observer-independent three-vectors.

Define the matter-plus-field force density by $f^a:=F^a{}_bj^b$, in $\mathrm{N\,m^{-3}}$, and the matter exchange equation by $\nabla_aT_m^{ab}=f^b$. This equation is a condition of a selected coupled model, not a consequence of the tensor definitions alone. For any unit observer $n$, define the measured energy density of a symmetric stress tensor $T_{ab}$ by $\mathcal E_n:=T_{ab}n^an^b$ in $\mathrm{J\,m^{-3}}$. Define its spatial energy-current vector by $\mathcal S_n^a:=-h_n{}^a{}_cT^c{}_bn^b$, where $h_n{}^a{}_b=\delta^a{}_b+n^an_b$ projects to $n^\perp$; its orthonormal-frame physical energy flux is $c\mathcal S_n^i$ in $\mathrm{W\,m^{-2}}$. These contractions are derived, observer-dependent quantities.

Within the selected Einstein–Maxwell formulation, the fields $g$ and $F$ may be dynamical unknowns in a coupled branch or prescribed data in a test branch. The matter variables $\rho,\sigma,\epsilon,p$ and any chosen conductivity or equation of state are independent constitutive input. The current, stress, force density, electromagnetic stress, observer fields and observer contractions are derived from those inputs by the displayed definitions. This definition makes no identification with Newtonian or thermodynamic quantities solely because units agree; it records no measurement and asserts no matter evolution, entropy law, or coupled Einstein–Maxwell solution.
