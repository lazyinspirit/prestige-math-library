---
id: def-tgr-framework-units
kind: definition
title: "Thermodynamics-GR fields, currents, reference normalization and units"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - def-gr-smooth-lorentzian-objects
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-gr-killing-field
  - def-tgr-local-fluid-state
  - lem-tgr-killing-energy-normalization
  - def-tgr-spacelike-current-slab
  - thm-sr-local-congruence-adapted-charts-and-frobenius
  - def-pullback-connection
  - thm-pullback-connection-is-well-defined-and-functorial
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-killing-field: mathematical-premise
  def-tgr-local-fluid-state: mathematical-premise
  lem-tgr-killing-energy-normalization: mathematical-premise
  def-tgr-spacelike-current-slab: mathematical-premise
  thm-sr-local-congruence-adapted-charts-and-frobenius: mathematical-premise
  def-pullback-connection: mathematical-premise
  thm-pullback-connection-is-well-defined-and-functorial: mathematical-premise
justified_by: []
physical_scope: "Explicit primitive/derived quantities, mechanical versus energy covectors, proper versus KillingT, scalar/vectorβ and KMS time-length width, geometric/accelerationκ."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1 (2006), §§3.1–3.2, 4.1–4.3, and 5.3"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "Full 37-page PDF; PDF pp. 10–19, especially §§4.1–4.3 and equations (4.10)–(4.14): rest-frame quantities, stress tensor, energy including rest mass, state-function derivatives, and first-law conventions."
    - title: "Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (version 2015)"
      url: "https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics15/Hydrodynamics.pdf"
      locator: "Full 184-page PDF; §§IX.2, IX.3.1, and IX.4.1–IX.4.2 (PDF pp. 137–147): timelike flow, local rest-frame variables, currents and stress decompositions, and alternative frame choices."
    - title: "H. S. Reall, Part III General Relativity, University of Cambridge lecture notes (12 October 2022 revision)"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "Full 125-page PDF; §5.3, PDF pp. 56–57: Killing equation and conserved-current exercise; §6.3, PDF pp. 64–66: stress-energy and observer energy."
    - title: "David Tong, General Relativity, University of Cambridge Part III lecture notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html"
      locator: "Full author-hosted chapter section; §4.5.5, Conserved Energy from a Killing Vector: current, divergence and hypersurface charge."
    - title: "The International System of Units (SI), BIPM, 9th edition, version 4.01 (2026)"
      url: "https://www.bipm.org/documents/d/guest/si-brochure-9-pdf"
      locator: "§2.2, PDF pp. 124–125: exact SI defining constants, including c, h and k_B; the exact numerical values define units and have no uncertainty."
    - title: "P. J. Mohr, D. B. Newell, and B. N. Taylor, CODATA Recommended Values of the Fundamental Physical Constants: 2022, NIST"
      url: "https://physics.nist.gov/cuu/pdf/JPCRD2022CODATA.pdf"
      locator: "The Newtonian constant of gravitation G is included among adjusted constants with measurement inputs and standard uncertainty; no numerical value is used here."
    - title: "Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, arXiv:1311.2717v2 (2016), §3.4, Definition 3.4.4"
      url: "https://arxiv.org/pdf/1311.2717"
      locator: "Printed pp. 74–75: the C*-dynamical KMS strip boundary condition for all observables, with physical-time strip width equal to hbar times inverse temperature."
    - title: "David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, arXiv:math-ph/0107009v1 (2001), Chapter 1, §7"
      url: "https://arxiv.org/pdf/math-ph/0107009"
      locator: "PDF pp. 12–13: strongly continuous automorphism groups and the all-observable KMS strip condition; the KMS condition gives the bound sup_z |F_{A,B}(z)| \u2264 ||A|| ||B||."
---

## Definition

Use a smooth, oriented and time-oriented Lorentzian four-manifold $(M,g)$ of signature $(-,+,+,+)$ with its metric-selected Levi-Civita connection $\nabla$, as defined in [[def-gr-smooth-lorentzian-objects]] and [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]. A chart is a smooth coordinate map; an observer congruence is a smooth future-directed unit timelike vector field $u$ with $g(u,u)=-1$; its integral curves, an adapted chart, and a tetrad field are distinct objects. The exact regularity and rest-space conventions of [[def-tgr-local-fluid-state]] and the chart/congruence distinction of [[thm-sr-local-congruence-adapted-charts-and-frobenius]] apply. An orthogonal family of rest slices is not available for every congruence.

For physical unit assignments use length coordinates $x^0=ct_{\rm phys}$ and spatial coordinates in metres, where $c>0$ has units $\mathrm{m\,s^{-1}}$. In this convention the metric components, a unit observer $u$, and a length-normalized Killing field $\xi$ are dimensionless. Other coordinate choices transform component units by their coordinate Jacobians. State maps and geometric currents have the types and units in [[def-tgr-local-fluid-state]]: a formal marker density $n$ is $\mathrm{marker\,m^{-3}}$; entropy density $s$ is $\mathrm{J\,K^{-1}\,m^{-3}}$; a $C^1$ entropy current $S^a$ has components $\mathrm{J\,K^{-1}\,m^{-3}}$; and its physical flux is $cS^a$ in $\mathrm{J\,K^{-1}\,m^{-2}\,s^{-1}}$. Its geometric divergence $\nabla_aS^a$ has units $\mathrm{J\,K^{-1}\,m^{-4}}$, so $c\nabla_aS^a$ is entropy production per physical volume per second. The symmetric stress tensor $\mathsf T^{ab}$ has components in pascals in length coordinates; it is a tensor, not an observer-independent array of energy densities. The state-function energy density $\varepsilon$ and the observer projection $\mathsf T^{ab}u_a u_b$ remain distinct unless a material model identifies them.

The constant $c$ supplies the spacetime length/time conversion. In a branch with dynamical Einstein gravity, $G$ is an independent coupling parameter in $\mathrm{m^3\,kg^{-1}\,s^{-2}}$. The Boltzmann constant $k_B$ has units $\mathrm{J\,K^{-1}}$ and is used when a statistical entropy/temperature calibration is adopted. Planck's constant $h_{\rm P}=2\pi\hbar$ has units $\mathrm{J\,s}$; $\hbar$ is used only in a quantum branch. Under the current SI definition, $c$, $h_{\rm P}$ and $k_B$ have exact defining numerical values; this metrological fact does not make them derived predictions of a thermodynamic or gravitational model. $G$ is experimentally adjusted and carries measurement uncertainty. The roles of these quantities as primitive model inputs are framework-specific. The local energy function, pressure, temperature and chemical potential in [[def-tgr-local-fluid-state]] are derived from the supplied state function; no particle mass or universal equation of state is derived from gravity alone.

For a smooth Killing field $\xi$ on an open domain, meaning $\mathcal L_\xi g=0$ by [[def-gr-killing-field]], restrict attention to a domain where $\xi$ is future timelike and choose a positive normalization at infinity or at a specified wall/observer. Define the lapse $N_\xi:=\sqrt{-g(\xi,\xi)}>0$ and unit observer $u_\xi:=\xi/N_\xi$. For a supplied proper-temperature scalar $T>0$ in kelvins, define the Killing-normalized temperature field $T_\xi:=N_\xi T$. It is not assumed constant; if a separate equilibrium argument proves constancy on its stated domain, denote that value by $T_K$. The finite matter charge and its side-flux convention are those in [[lem-tgr-killing-energy-normalization]] and [[def-tgr-spacelike-current-slab]]; their charge-balance clause retains its explicitly conditional finite-slab hypotheses. This charge is not a general gravitational energy.

Keep covector types separate. A mechanical momentum covector $p_a$ has units $\mathrm{kg\,m\,s^{-1}}$; its Killing energy is $E_\xi(p):=-c\,p_a\xi^a$ in joules. An energy-valued covector $\pi_a$ already has units joules and pairs as $E_\xi(\pi):=-\pi_a\xi^a$, without another factor of $c$. An inverse-length wave covector $k_a$ has units $\mathrm{m^{-1}}$ and pairs as $E_\xi(k):=-\hbar c\,k_a\xi^a$. For a specified charged stationary gauge, charge $q$ has coulombs and a potential covector $A_a$ in length coordinates has units $\mathrm{V\,s\,m^{-1}}$; when a global stationary potential is actually defined, $\Phi_\xi:=-cA_a\xi^a$ has volts and $q\Phi_\xi$ has joules. A charged energy or chemical-potential convention requires its stated gauge and reference; no global potential, electrochemical equilibrium, or constancy is asserted here.

When $T_K>0$ is supplied, distinguish the inverse-temperature vector $\beta^a:=u_\xi^a/(k_BT)=\xi^a/(k_BT_K)$, with units $\mathrm{J^{-1}}$, from the scalar $\beta_K:=1/(k_BT_K)$, also in $\mathrm{J^{-1}}$. For a quantum statistical model, let $\mathcal A$ be a unital complex $C^*$-algebra: an associative complex algebra with nonzero identity $1$, a complete norm satisfying $\|AB\|\leq\|A\|\,\|B\|$, and a conjugate-linear involution $A\mapsto A^*$ satisfying $(A^*)^*=A$, $(AB)^*=B^*A^*$, and $\|A^*A\|=\|A\|^2$. Its elements represent bounded observables. Let $\{\alpha_t:t\in\mathbb R\}$ be bijective complex-linear maps $\alpha_t:\mathcal A\to\mathcal A$ preserving multiplication and involution, with $\alpha_t(1)=1$, $\alpha_0=\operatorname{id}$, and $\alpha_{s+t}=\alpha_s\circ\alpha_t$; require $t\mapsto\alpha_t(A)$ to be norm-continuous for every $A\in\mathcal A$. A state is a bounded complex-linear functional $\omega:\mathcal A\to\mathbb C$ with $\omega(1)=1$ and $\omega(A^*A)\geq0$ for every $A\in\mathcal A$. For $b>0$ in the chosen flow-parameter units, define $S_b:=\{z\in\mathbb C:0\leq\operatorname{Im}z\leq b\}$. The state $\omega$ satisfies the KMS condition at width $b$ when for every $A,B\in\mathcal A$ there is a function $F_{A,B}:S_b\to\mathbb C$ with $\sup_{z\in S_b}|F_{A,B}(z)|<\infty$, continuous on $S_b$ and complex-differentiable at every point of its interior, such that

$$F_{A,B}(t)=\omega(A\alpha_t(B)),\qquad F_{A,B}(t+ib)=\omega(\alpha_t(B)A)\quad(t\in\mathbb R).$$

This all-observable boundary-value definition uses no separately declared analytic subalgebra. With the quantum statistical calibration $\beta_K=(k_BT_K)^{-1}$, a physical-time parameter $t$ in seconds has KMS width $b_t=\hbar\beta_K$ seconds. If the flow parameter is length $\lambda=ct$, use the reparameterized group $\widetilde\alpha_\lambda:=\alpha_{\lambda/c}$; its KMS width is $b_\lambda=c\hbar\beta_K$ metres. These are unit and parameter-convention assignments only. This definition introduces no Hilbert-space operator $H_K$ and does not identify the abstract automorphism flow or its strip width with the finite matter charge $H_\xi$ of [[lem-tgr-killing-energy-normalization]]. This item asserts neither the existence of an observable algebra or flow for a given thermodynamic-gravity model nor the existence of a KMS state or equilibrium.

On a specified smooth embedded null hypersurface $\mathcal H\subset M$,
write $i:\mathcal H\hookrightarrow M$ for the inclusion. A generator $\chi$
here is a smooth section of $i^*TM$ with $\chi_p\in T_p\mathcal H$
nonzero and null at each $p\in\mathcal H$. For a smooth tangent field $X$
on $\mathcal H$ and a smooth vector field $V$ along it, define
$\nabla_XV:=(i^*\nabla)_XV$ by [[def-pullback-connection]], applied to the
ambient tangent bundle and its metric-selected connection. The prescription
is independent of frames by
[[thm-pullback-connection-is-well-defined-and-functorial]]. In particular,
$\nabla_\chi\chi$ is a vector field along $\mathcal H$ and needs no chosen
ambient extension. If $\chi$ is the restriction of a smooth ambient field
$\widetilde\chi$, the same theorem gives
$\nabla_\chi\chi=(\nabla_{\widetilde\chi}\widetilde\chi)|_{\mathcal H}$;
thus this convention also covers the supplied ambient Killing generators.
The generator may admit a scalar $\kappa_{\rm geom}$ defined by
$\nabla_\chi\chi=\kappa_{\rm geom}\chi$. When the flow parameter has length units, $\kappa_{\rm geom}$ has units $\mathrm{m^{-1}}$; the corresponding acceleration-unit quantity $\kappa_{\rm acc}:=c^2\kappa_{\rm geom}$ has units $\mathrm{m\,s^{-2}}$. This definition does not assert a horizon exists, that $\kappa$ is constant, or that a temperature law follows. The formula $T_K=\hbar c\kappa_{\rm geom}/(2\pi k_B)$ requires a specified quantum/semiclassical model, and an area-entropy formula requires a separate thermodynamic identification. In particular, equal units do not identify local material entropy, finite statistical entropy, and area entropy, and no generalized second law is asserted here.

## Remarks

The source scaffold also discusses relativistic kinetic partition integrals and finite-regulator generalized entropy. Their detailed preparation, existence, convergence, and moment claims require their own exact definitions and proofs on the later planned pages; they are not additional consequences of this units definition. The sources are used for conventions and independent treatments, not as substitutes for those arguments or as evidence that a selected model describes every material.
