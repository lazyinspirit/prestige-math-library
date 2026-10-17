---
id: def-emg-geometry-units
kind: definition
title: "Einstein–Maxwell primitive quantities and SI conventions"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 0
deps: [def-emg-lorentzian-forms, lem-emg-observer-field-decomposition, lem-emg-lorentz-hodge-calculus, def-em-electromagnetic-tensor, def-em-si-conventions, post-em-minkowski-physical-model]
dependency_roles:
  def-emg-lorentzian-forms: mathematical-premise
  lem-emg-observer-field-decomposition: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  post-em-minkowski-physical-model: formulation-prerequisite
physical_scope: "SI quantities and frame-local field conventions for the selected smooth classical Einstein–Maxwell model. It distinguishes primitive parameters and field variables from observer-derived fields, fixes the flat SI component dictionary and the curvature-coordinate units, and makes no field-equation, global inertial-chart, measured μ0 numerical-value, charge-quantization, or cross-framework identification claim."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "BIPM, The International System of Units (SI), 9th edition, version 4.01 (2026 update), complete 214-page brochure"
      url: "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf"
      locator: "§2.2, defining values of c and e; §2.3.1, current experimentally determined status of μ0, exact ε0μ0=1/c² relation, and historical 2019 uncertainty context."
    - title: "David Tong, Electromagnetism, University of Cambridge Mathematical Tripos lecture notes, complete 236-page author-hosted PDF"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§1.1–§1.2, charge/current and SI Maxwell equations; §3.5, post-2019 SI units; §§5.3–5.4, electromagnetic tensor and covariant Maxwell equations."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall, 1999), full scanned text"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§5.3.2, tesla and permeability units; §§7.3.3 and 12.3, SI Maxwell equations and the field tensor. Its pre-2019 exact μ0 value is not adopted."
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §2.4.2, The Electromagnetic Field"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S2.html"
      locator: "§2.4.2, equation (2.87), the two-form field strength and its electric/magnetic component convention with c=1."
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §§3.1.3 and 3.2.5"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html"
      locator: "§3.1.3, equations (3.97)–(3.98), Hodge dual; §3.2.5, Maxwell action and curved-spacetime field equations. The local SI signs and units are stated explicitly here."
    - title: "H. S. Reall, Part III General Relativity, Cambridge, 12 October 2022 revision, full 125-page lecture notes (Internet Archive copy of the author-hosted PDF)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "§6.2, equations (6.7)–(6.8), Maxwell equations in Gaussian units and their covariant continuation; §8.5, equations (8.55)–(8.57), Hodge dual."
---

## Definition

Adopt SI units and the following model-local quantity roles. Here the selected Einstein–Maxwell framework combines the stated Lorentzian geometry with a classical electromagnetic two-form and current; this definition itself supplies no gravitational equation, matter action, or empirical claim. A primitive is an input or independent field variable of this formulation; a derived quantity is fixed by a stated construction from its inputs. Neither label is universal across physical theories, and unit choice alone does not determine it.

The spacetime data are a smooth, Hausdorff, second-countable, boundaryless four-manifold $M$, a smooth Lorentzian metric $g$ of signature $(-,+,+,+)$, a smooth time-orientation field, and an independent orientation, exactly as in [[def-emg-lorentzian-forms]]. The metric, its time orientation, and the manifold orientation are separate data. An observer at $p\in M$ is a future unit timelike vector $n\in T_pM$ with $g(n,n)=-1$. A smooth observer congruence is a smooth field of such vectors. A local tetrad is a smooth basis $(e_0,e_1,e_2,e_3)$ with metric matrix $\operatorname{diag}(-1,1,1,1)$; an observer congruence, a coordinate chart, and a tetrad are different objects. Tetrads and observer fields need only exist locally; this definition assumes no global inertial chart, global tetrad, or hypersurface-orthogonal congruence.

The electromagnetic field-strength variable $F$ is a smooth real two-form, hence an alternating covariant tensor of type $(0,2)$, on an open subset of $M$, as in [[def-emg-lorentzian-forms]]. It is primitive in this formulation. For an observer congruence $n$, its electric and magnetic observer covectors are derived by

$$E_a:=cF_{ab}n^b,\qquad B_a:=-({\star_gF})_{ab}n^b.$$

Here $\star_g$ is the unique Hodge map characterized pointwise by $\alpha\wedge\star_g\beta=\langle\alpha,\beta\rangle_g\,\mathrm{vol}_g$, using the metric and independent orientation, as in [[lem-emg-lorentz-hodge-calculus]]. Both covectors annihilate $n$ and lie in the rest covector space $\{\alpha\in T_p^*M:\alpha(n)=0\}$, whose induced metric is positive definite. In a positively oriented future orthonormal tetrad with $e_0=n$ and $\epsilon_{123}=+1$, their spatial components obey the fixed dictionary $F_{0i}=-E_i/c$ and $F_{ij}=\epsilon_{ijk}B_k$ from [[lem-emg-observer-field-decomposition]]. Thus $E$ and $B$ are observer-dependent derived fields, not globally defined observer-independent three-vectors on a curved spacetime. Their tetrad components have units $\mathrm{V\,m^{-1}}$ and tesla (T), respectively; the components of $F$ in a length-coordinate chart have unit T. No global potential is assumed; when a local potential $A_a$ is used, its components have unit $\mathrm{T\,m}$ and a scalar potential $\varphi$ has unit V.

For any chosen observer $n$, a smooth four-current is a vector field $j$ whose local decomposition is $j=c\rho\,n+J$, where $\rho:=-g(n,j)/c$ is the observer charge density and $J:=j-c\rho n$ is orthogonal to $n$. In the associated positively oriented orthonormal tetrad its components are $j^0=c\rho$ and $j^i=J^i$. The units are $[\rho]=\mathrm{C\,m^{-3}}$, $[J^i]=[j^a]=\mathrm{A\,m^{-2}}$, and $[q]=\mathrm C$ for a charge parameter supplied by a matter model. The current is a prescribed input or is supplied by an explicitly stated matter model; it is not inferred from the Maxwell equation alone.

The SI constants and coordinate units are fixed as follows. The speed of ideal vacuum light $c>0$ is the exact SI defining constant $299\,792\,458\ \mathrm{m\,s^{-1}}$; identifying it with the shared ideal-light and clock conversion constant is the adopted Minkowski model of [[post-em-minkowski-physical-model]], not a consequence of its unit definition. The elementary charge $e$ is exactly $1.602\,176\,634\times10^{-19}\ \mathrm C$. These unit definitions do not imply that charge is quantized. The magnetic constant $\mu_0>0$ has unit $\mathrm{N\,A^{-2}}$ and is experimentally determined in the revised SI, so no exact numerical value for $\mu_0$ is adopted. Define the electric constant (vacuum permittivity) $\varepsilon_0:=(\mu_0c^2)^{-1}$ in $\mathrm{F\,m^{-1}}$; hence $\varepsilon_0\mu_0c^2=1$, and $\varepsilon_0$ has the same relative standard uncertainty as $\mu_0$ because $c$ is exact. The exact component equation $\nabla_aF^{ab}=-\mu_0j^b$ is dimensionally consistent: both sides have unit $\mathrm{T\,m^{-1}}$ in a length-coordinate frame.

In a length-coordinate chart all four coordinate values are assigned metres, with $x^0=ct$ when a time coordinate $t$ in seconds is selected. This is local coordinate bookkeeping, not a global inertial-coordinate claim. In such a chart $g_{ab}$ is dimensionless, the Levi-Civita coefficients $\Gamma^a{}_{bc}$ have unit $\mathrm{m^{-1}}$, and curvature components have unit $\mathrm{m^{-2}}$, as in [[def-emg-lorentzian-forms]]. Components in other coordinate units transform by their Jacobians.

For the gravitational sector, take Newton's gravitational constant $G_N>0$ with unit $\mathrm{m^3\,kg^{-1}\,s^{-2}}$ and the cosmological constant parameter $\Lambda\in\mathbb R$ with unit $\mathrm{m^{-2}}$ as primitive parameters of the selected model; no numerical value for either is used here. The coupling normalization $\kappa_E:=8\pi G_N/c^4$ is derived from these parameters and has unit $\mathrm{m\,J^{-1}}$. This definition records the convention for a later Einstein equation; it asserts no Einstein equation. A separate positive normalization $\kappa_0$ with unit weber (Wb) is a chosen flux conversion reserved for a later explicitly specified $U(1)$ formulation, where $U(1):=\{z\in\mathbb C:|z|=1\}$ under multiplication. It is not $\kappa_E$, an electric charge, $\mu_0$, or Planck's constant, and it implies no charge quantization. Test-particle rest mass $m>0$ in kg and charge $q$ in C are externally supplied matter parameters, not quantities derived by classical electromagnetism.

These are SI and model-definition conventions only. They neither assert empirical measurements beyond the stated SI defining constants and measured status of $\mu_0$, nor identify similarly named quantities in another framework.
