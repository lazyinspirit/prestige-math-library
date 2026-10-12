---
id: def-gr-linearized-wave-regime-and-detector-coupling
kind: definition
title: "The linearized-wave approximation regime and an ideal two-body detector with a prescribed finite arm path"
status: draft
origin: session
domain: physics
dependency_level: 15
physical_scope: "Modelling definitions inside the classical gravitational framework: the class of flat linearized-wave data with an explicitly scaled smooth stress-energy family and a fixed quadratic threshold, and an ideal detector consisting of two freely falling test-body worldlines plus the metric length of their prescribed chart-straight spatial arm at equal chart time. The arm length is path-dependent and is not asserted to be the shortest spatial distance between its endpoints. The definitions exclude rigid bodies, elasticity, internal resonances, noise, light propagation, readout and any measured signal, and assert no observation and no property of any laboratory apparatus."
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-plane-wave-perturbation, def-gr-wave-screen-and-tt-projection, def-gr-flat-linearized-perturbation, def-gr-minkowski-model-and-inertial-chart, def-gr-smooth-covariant-two-tensor-field, def-gr-stress-energy-tensor-field, def-gr-timelike-worldline-and-proper-time, lem-gr-proper-time-reparametrization-and-four-velocity, thm-gr-tt-plane-wave-solutions, pthm-gr-linearized-field-equations, post-gr-ideal-clocks-and-free-fall, post-gr-einstein-field-law, def-gr-si-unit-and-coordinate-conventions, def-euclidean-inner-product, def-rational-power, def-real-order, lem-of-square-positive, def-compact-space]
dependency_roles:
  def-gr-plane-wave-perturbation: mathematical-premise
  def-gr-wave-screen-and-tt-projection: mathematical-premise
  def-gr-flat-linearized-perturbation: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-stress-energy-tensor-field: formulation-prerequisite
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  thm-gr-tt-plane-wave-solutions: mathematical-premise
  pthm-gr-linearized-field-equations: formulation-prerequisite
  post-gr-ideal-clocks-and-free-fall: formulation-prerequisite
  post-gr-einstein-field-law: formulation-prerequisite
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-rational-power: mathematical-premise
  def-real-order: mathematical-premise
  lem-of-square-positive: mathematical-premise
  def-compact-space: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 6 (6.58)-(6.66): geodesic deviation of slowly moving test particles in a plane wave and the oscillating separation S_1 = (1 + (1/2) C_+ e^{i k.x}) S_1(0), printed pp. 152-153 (PDF pp. 159-160)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 5.2.2-5.2.3: the bobbing of neighbouring geodesics in a passing wave, the circle-to-ellipse deformation and the interferometer arm response L' = L(1 +/- H_+/2), printed pp. 212-215 (PDF pp. 219-222)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 7.3: the parallelly transported frame of an observer, the geodesic deviation of nearby test particles and the corresponding changes in separation caused by + and x polarized waves, printed pp. 79-81 (PDF pp. 80-82)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Definition

Let $(M,g,N)=(\mathbb R^4,\eta,\partial_0)$ be the flat model with its
inertial chart and let $c>0$ be the parameter of
[[def-gr-si-unit-and-coordinate-conventions]]. All objects below are
component families in this chart.

**(a) Linearized-wave datum.** Let $\Omega\subseteq\mathbb R^4$ be a
nonempty open set and let $K\subseteq\Omega$ be a nonempty compact set. Fix a
length scale $L>0$, and use the numerical threshold $\delta_0=1/16$ and
chart control functional $B_K$ defined in
[[pthm-gr-linearized-field-equations]] clause (d) for this $K,L$. A
**linearized-wave datum on $K$** consists of:

- a flat linearized family $(\varepsilon_1,h,q)$ over $\Omega$ with
  perturbation $h$ ([[def-gr-flat-linearized-perturbation]]) such that
  $B_K(h)<\infty$ in the chart control functional of that clause;
- the real cosmological parameter $\Lambda$ and a smooth family
  $\mathcal T(\lambda)$ of stress-energy tensor fields on $\Omega$ for
  $\lambda\in(-\varepsilon_1,\varepsilon_1)$, with component fields smooth
  jointly in $(\lambda,x)$ ([[def-gr-stress-energy-tensor-field]]);
- the zeroth-order compatibility condition
  $\kappa\mathcal T_{ab}(0)=\Lambda\eta_{ab}$, where
  $\kappa=8\pi G_N/c^4$; define the linearized source field, with curvature
  units, by $S_{ab}:=\kappa\,\partial_\lambda\mathcal T_{ab}(\lambda)|_0$,
  and require
  $G^{(1)}_{ab}(h)+\Lambda h_{ab}=S_{ab}$ in the sense of
  [[def-gr-plane-wave-perturbation]] clause (e);
- a nonzero real amplitude $\lambda$ with $|\lambda|<\varepsilon_1$ for
  which $g(\lambda):=\eta+\lambda h$ is a Lorentzian metric of signature
  $(-,+,+,+)$ on a neighborhood of $K$.

The parameter $\lambda$ is dimensionless, and in the adopted SI length
coordinates $S_{ab}$, $G^{(1)}_{ab}(h)$ and $\Lambda h_{ab}$ have units
$\mathrm m^{-2}$, whereas $\mathcal T_{ab}$ has energy-density units and
$\kappa\mathcal T_{ab}$ has units $\mathrm m^{-2}$
([[def-gr-si-unit-and-coordinate-conventions]]). The $B_K$ and $\delta_0$
values in the chart Taylor estimate are numerical controls: evaluate
component functions and their coordinate derivatives as SI numerical values
in this fixed length-coordinate chart, then form the displayed real-valued
functional. It is not a physical observable or an intrinsic norm. In this
fixed numerical convention, $B_K$, $\delta_0$ and $C_{K,L}$ are real control
numbers and $C_{K,L}B_K^2/L^2$ has the residual component unit
$\mathrm m^{-2}$ for $L$ in metres. The datum is a
**linearized vacuum wave datum** when $S=0$ and $\Lambda=0$. If in addition
the perturbation is a TT planar perturbation with amplitudes $A_+,A_\times$
([[def-gr-plane-wave-perturbation]] clause (b)), the datum is a **TT
linearized-wave datum**. Its **approximation defect** is

$$D(\lambda,K):=\max_{a,b}\ \sup_{p\in K}\bigl|G_{ab}(\eta+\lambda h)(p)+\Lambda\,g_{ab}(\lambda)(p)-\kappa\,\mathcal T_{ab}(\lambda,p)\bigr|,$$

where $G$ is the Einstein tensor of the exact metric $\eta+\lambda h$;
this is the residual against the specified exact stress-energy family, not
against its first-order coefficient alone. In length coordinates it has
units $\mathrm m^{-2}$. The datum is **within the quadratic approximation**
when $|\lambda|B_K(h)\le\delta_0$. This uses the chosen threshold rather than
an unspecified existential $\delta_0/B_K(h)$, and also covers $B_K(h)=0$.
Whether a datum satisfies any of these conditions is a property of the
given data; this definition names the data, the condition and the defect and
asserts neither existence nor a bound.

**(b) Ideal two-body detector.** Let a TT linearized-wave datum be given.
Choose a nonempty open interval $J\subseteq\mathbb R$, a spatial point
$x_0\in\mathbb R^3$, and a nonzero spatial vector $\delta\in\mathbb R^3$
with Euclidean norm $|\delta|>0$ ([[def-euclidean-inner-product]]). Require
the coordinate tube

$$\mathcal A_{J,\delta}:=\{(cs,\,x_0+q\delta):s\in J,\ q\in[0,1]\}$$

to lie in $\Omega$. For $q\in[0,1]$ define the smooth curves
$\gamma_q:J\to\Omega$ by $\gamma_q(s):=(cs,\,x_0+q\delta)$, and require
$g(\lambda)$ to be Lorentzian on a neighborhood of $\mathcal A_{J,\delta}$;
the
**reference worldline** is $\gamma_0$ and the **companion worldline** is
$\gamma_1$. Whenever these endpoint curves are the ideal freely falling
worldlines assigned by the postulate of [[post-gr-ideal-clocks-and-free-fall]],
their pair with $(x_0,\delta)$ is the **ideal two-body detector**. Its
**arm direction** is $e_\delta:=\delta/|\delta|$, the spatial unit vector in
the chosen inertial chart.

In SI length coordinates, the components of $x_0$ and $\delta$ and the arm
length $|\delta|$ are in metres, while $e_\delta$ is dimensionless.

**(c) Finite arm length and strain.** For $s\in J$ the prescribed spatial
arm path is $\sigma_s:[0,1]\to\Omega$, $\sigma_s(q):=\gamma_q(s)$, with
tangent $\dot\sigma_s(q)=\delta^i\partial_i$. Its **metric arm length** is
the metric length of this spacelike coordinate segment,

$$L_\delta(s):=\int_0^1\sqrt{g(\lambda)_{\sigma_s(q)}(\dot\sigma_s(q),\dot\sigma_s(q))}\,dq,$$

whenever the radicand is positive for every $q\in[0,1]$; the root is the
nonnegative square root of [[def-rational-power]]. This is the length along
the prescribed chart-straight path, not the infimum over spatial paths and
not a tangent-vector norm between finite-separated endpoints. The
**strain function** is $S_\delta(s):=L_\delta(s)/|\delta|-1$. For a TT
linearized-wave datum put

$$a_\delta(s,q):=\frac{\delta^i\delta^j h_{ij}(cs,\,x_0+q\delta)}{|\delta|^2}.$$

Since $g_{0i}=0$ and $g_{ij}=\delta_{ij}+\lambda h_{ij}$, wherever
$1+\lambda a_\delta(s,q)>0$ for every $q\in[0,1]$ one has

$$L_\delta(s)=|\delta|\int_0^1\sqrt{1+\lambda a_\delta(s,q)}\,dq,\qquad S_\delta(s)=\int_0^1\sqrt{1+\lambda a_\delta(s,q)}\,dq-1.$$

In the adopted SI length coordinates $L_\delta$ has units metres and
$S_\delta$ is dimensionless.

The **first-order strain response** is

$$S^{(1)}_\delta(s):=\left.\partial_\lambda S_\delta(s)\right|_{\lambda=0}=\tfrac12\int_0^1a_\delta(s,q)\,dq,$$

which is the parameter derivative of this finite-path length ratio; the
response theorem gives a uniform remainder estimate. If $\delta^3=0$, the
phase $u=cs-x_0^3-q\delta^3$ is constant along the arm, so the integrand is
constant in $q$ and the formula reduces to the usual single-point TT strain.

**(d) Reading and scope.** In the TT metric, $g(\gamma_q',\gamma_q')=-c^2$,
so $s=x^0/c$ is proper time along each endpoint curve; their geodesic and
free-fall properties are established in the response theorem of this page.
The detector is the two ideal endpoint bodies plus the defined path length
along a chosen coordinate segment at equal inertial-chart time; the length
depends on the chosen path and chart and is not asserted to be a geodesic
distance. Rigid bodies, elasticity, internal resonances, the propagation and
readout of light, noise and calibration are outside this definition; no
reading of a real apparatus is defined here, and no fact about nature is
asserted.

## Remarks

- **Why the regime conditions are separate from the detector.** Clause (a)
  packages the approximation hypotheses — a linearized family, a length
  scale, a source and parameter, a compact set and an amplitude — so that
  later theorems can quantify the approximation defect and the response
  without repeating them. When $\Lambda=0$ and the specified family satisfies
  $\mathcal T(\lambda)=0$ identically, the quadratic residual bound is the
  content of [[pthm-gr-linearized-field-equations]] clause (d) and
  [[thm-gr-tt-plane-wave-solutions]] clause (c). Merely having $S=0$ allows
  higher-order terms in $\mathcal T(\lambda)$, for which no residual bound is
  asserted here; the definition itself only names the defect.

- **Simultaneity and the arm path are chart-defined.** The length
  $L_\delta(s)$ is the metric length along the prescribed coordinate segment
  at equal inertial-chart time $x^0=cs$. It is not an intrinsic shortest
  distance between the endpoints or a statement about how any apparatus
  records a duration or length; its path and frame dependence are part of the
  model definition.
