---
id: post-em-material-closure
kind: postulate
title: "Declared material-closure branches: linear nondispersive Ohmic response and the causal memory branch"
status: draft
origin: pipeline
domain: physics
dependency_level: 16
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complex-differentiability-holomorphic-and-entire, def-em-fields, def-em-lab-geometry, def-em-polarization-magnetization, def-em-si-conventions, def-inertial-frame-and-inertial-chart, def-l-one-of-a-measure, pthm-em-macroscopic-maxwell]
dependency_roles:
  def-complex-differentiability-holomorphic-and-entire: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-polarization-magnetization: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-inertial-frame-and-inertial-chart: formulation-prerequisite
  def-l-one-of-a-measure: mathematical-premise
  pthm-em-macroscopic-maxwell: formulation-prerequisite
physical_scope: "Declared material-closure branches for the macroscopic fields: a constant symmetric linear nondispersive branch with positive-definite epsilon, mu and positive-semidefinite Ohmic sigma, with the isotropic broadband condition epsilon*mu >= c^-2 stated separately, and a causal memory branch with an L1 kernel or an explicitly finitely-subtracted analytic transfer function satisfying real-history symmetry, all stated in a material rest frame. Adopted model assumptions: no derivation, no microscopic mechanism, no material data and no empirical claim; hysteresis, nonlinear and general nonlocal response are excluded."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "sec. 7.3 printed pp. 183-186 (the linear-material closure D=eps E, B=mu H described as the simplest linear materials, with the warning that eps is not as constant as pretended); sec. 7.6.1 printed pp. 205-208 (the Ohmic form J=sigma E and its DC limit); sec. 7.5.4 printed pp. 199-205 (the causal convolution, the t<0 vanishing kernel and the analyticity conventions). Read in the retained 236-page full text."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "sec. 4.4.1-4.4.2 printed pp. 179-188 (the linear dielectric D=eps E and the susceptibility, with the model-choice warning) and sec. 7.1.1 printed p. 285, equation (7.3) (the restricted Ohmic law J=sigma E, with the magnetic-force qualification); read in the stamped 596-page scan."
    - title: "R. Fitzpatrick, Electromagnetism (University of Texas at Austin course), node 74: Magnetic susceptibility and permeability"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node74.html"
      locator: "node 74, equations (866)-(868): the restricted isotropic relations M=chi_m H and B=mu H, with mu=mu_0(1+chi_m). Independently opened during the batch-29 reader review; the matrix extension and positivity assumptions below are declared model data."
---

## Postulate

Adopt as a modelling postulate of this framework the following constitutive branches for the material described by the macroscopic fields of [[def-em-polarization-magnetization]].

**(a) [Material rest frame]** The relations below are stated in a material rest frame: an inertial frame $(o;e_0,e_1,e_2,e_3)$ of the Minkowski model of [[def-em-lab-geometry]] ([[def-inertial-frame-and-inertial-chart]]) in whose coordinates each modelled material element has fixed spatial position $x$, hence history $t\mapsto(ct,x)$ on the declared time interval. When this is the laboratory frame, the components below are laboratory components. Boosting the material changes both the fields and the rest observer; this postulate does not assert that the relations below hold with the same constants in every frame.

**(b) [Elementary inertial-rest branch]** In the rest frame, with constant symmetric positive-definite matrices $\varepsilon,\mu\in\mathbb R^{3\times3}$ (the isotropic scalar cases $\varepsilon=\varepsilon\mathbf 1$, $\mu=\mu\mathbf 1$ with $\varepsilon,\mu>0$ included), the model takes

$$D=\varepsilon E,\qquad B=\mu H,\qquad J_c=\sigma E,$$

where $\sigma\in\mathbb R^{3\times3}$ is symmetric positive semidefinite and $J_c$ is the conduction part of the free current, $J_f=J_c+J_{\mathrm{ext}}$ for a declared external free current $J_{\mathrm{ext}}:\Omega\times I\to\mathbb R^3$ in $\mathrm A\,\mathrm m^{-2}$. For a real matrix $T$, symmetric means $T^{\mathsf T}=T$, positive definite means $v^{\mathsf T}Tv>0$ for every nonzero $v\in\mathbb R^3$, and positive semidefinite means $v^{\mathsf T}Tv\ge0$ for every $v$. Entries of $\varepsilon,\mu,\sigma$ carry respectively $\mathrm F\,\mathrm m^{-1}$, $\mathrm H\,\mathrm m^{-1}$ and $\mathrm S\,\mathrm m^{-1}$, where $\mathrm F=\mathrm C/\mathrm V$, $\mathrm H=\mathrm T\,\mathrm m^2/\mathrm A$ and $\mathrm S=\mathrm A/\mathrm V$; these make the three displayed relations dimensionally consistent. Local, linear and nondispersive (instantaneous) response is part of this restricted assumption. In the isotropic case an exact broadband interpretation of the constant-coefficient law additionally requires $\varepsilon\mu\ge c^{-2}$, so that the characteristic speed $1/\sqrt{\varepsilon\mu}$ does not exceed the vacuum speed $c$; without that condition, and in the anisotropic branch, the constant-coefficient law is a declared finite-band effective phase-response model and carries no universal front-speed claim.

**(c) [Causal memory branch]** Alternatively, at each fixed material position $x$, declare a bounded continuous full history $E_x:\mathbb R\to\mathbb R^3$ in $\mathrm V\,\mathrm m^{-1}$ and its response $P_x:\mathbb R\to\mathbb R^3$ in $\mathrm C\,\mathrm m^{-2}$. Write $E(t)=E_x(t)$ and $P(t)=P_x(t)$ in the following formula; any field on a smaller time interval uses a declared full-history extension, not unspecified past values. The polarisation response is the causal convolution

$$P(t)=\varepsilon_0\int_0^\infty K(s)\,E(t-s)\,ds$$

for a declared real matrix kernel $K:[0,\infty)\to\mathbb R^{3\times3}$ with entries in $L^1(0,\infty)$ ([[def-l-one-of-a-measure]]) and units $\mathrm s^{-1}$; the integral then converges absolutely because $|K_{jk}(s)E_k(t-s)|\le(\sup|E_k|)|K_{jk}(s)|$. The convolution uses only the past history; its continuity and causality are proved in `pthm-em-causal-dispersive-response`, while passivity is an additional model condition. Spatial or temporal differentiability of the resulting fields requires separate hypotheses when used. A finitely-subtracted analytic response may instead be declared by a dimensionless scalar transfer function $\chi$ that is holomorphic on the open upper half-plane, continuous on its closure, of class $C^1$ on the real boundary away from a real subtraction point $\omega_0$, holomorphic on a neighbourhood of $\omega_0$ in $\mathbb C$, and satisfies $|\chi(z)|\le C(1+|z|^{n-1})$ on $\{\operatorname{Im}z\ge0\}$ outside a compact set for some integer $n\ge1$ and constant $C>0$ ([[def-complex-differentiability-holomorphic-and-entire]]). Here $z,\omega_0$ are numerical angular frequencies in $\mathrm s^{-1}$ and the growth bound uses those SI numerical coordinates. Require also $\chi(-\omega)=\overline{\chi(\omega)}$ for every real $\omega$, hence $\chi(0)\in\mathbb R$, so that the response is defined on real harmonic histories independently of their representation. For $\omega\ne0$ the amplitude at that frequency is unique and reversing frequency conjugates it; the symmetry gives the same real output. At $\omega=0$ only $\operatorname{Re}e$ determines the input, and real $\chi(0)$ makes the output depend only on that input. For $e\in\mathbb C^3$, real $\omega$, and componentwise real part, declaring this transfer means adopting the harmonic relation $E(t)=\operatorname{Re}(e e^{-i\omega t})\mapsto P(t)=\operatorname{Re}(\varepsilon_0\chi(\omega)e e^{-i\omega t})$; upper-half-plane holomorphy alone does not construct a time-domain response for arbitrary histories.

**(d) [Status]** These are adopted model assumptions, one branch at a time; the framework does not derive them from the vacuum equations or from coarse graining, and no microscopic mechanism, material data or empirical validity is claimed. Ferroelectric and ferromagnetic response, hysteresis, nonlinear response and general nonlocal response lie outside the branches declared here.

## Status and conventions

The equations of [[pthm-em-macroscopic-maxwell]] are formulated for arbitrary declared $C^2$ maps $P,M$; the branches above are the additional modelling assumptions by which a given medium is closed. Clause (a) fixes the frame in which the constant coefficients and kernels are declared, clause (b) is a restricted instantaneous branch with explicit positivity and the separate isotropic broadband condition, and clause (c) retains a causal memory response whose analysis is the separate result `pthm-em-causal-dispersive-response`. No branch is deduced from the vacuum equations, from the averaging convention of the item `post-em-coarse-graining` or from material data, and none is asserted to hold for any actual substance; the exclusions in (d) delimit the model.
