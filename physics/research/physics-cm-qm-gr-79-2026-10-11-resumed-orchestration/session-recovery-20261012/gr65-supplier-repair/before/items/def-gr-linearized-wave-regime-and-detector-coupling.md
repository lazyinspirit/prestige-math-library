---
id: def-gr-linearized-wave-regime-and-detector-coupling
kind: definition
title: "The linearized-wave approximation regime and the ideal two-body detector model: proper separation, arm direction and strain function"
status: draft
origin: session
domain: physics
dependency_level: 14
physical_scope: "Modelling definitions inside the classical gravitational framework: the class of small-amplitude flat linearized-wave data, and an ideal two-body detector model consisting of two freely falling test-body worldlines and the strain function of their proper separation at equal parameter time. The definitions state the model objects and their exact formulas; they exclude rigid bodies, elasticity, internal resonances, noise, light propagation, readout and any measured signal, and they assert no observation and no property of any laboratory apparatus."
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-plane-wave-perturbation, def-gr-wave-screen-and-tt-projection, def-gr-flat-linearized-perturbation, def-gr-minkowski-model-and-inertial-chart, def-gr-smooth-covariant-two-tensor-field, def-gr-timelike-worldline-and-proper-time, lem-gr-proper-time-reparametrization-and-four-velocity, thm-gr-tt-plane-wave-solutions, thm-gr-flat-linearized-curvature-and-gauge, pthm-gr-linearized-field-equations, post-gr-ideal-clocks-and-free-fall, post-gr-einstein-field-law, def-gr-si-unit-and-coordinate-conventions, def-euclidean-inner-product, def-rational-power, def-real-order, lem-of-square-positive, def-compact-space]
dependency_roles:
  def-gr-plane-wave-perturbation: mathematical-premise
  def-gr-wave-screen-and-tt-projection: mathematical-premise
  def-gr-flat-linearized-perturbation: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  thm-gr-tt-plane-wave-solutions: mathematical-premise
  thm-gr-flat-linearized-curvature-and-gauge: mathematical-premise
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
nonempty open set and let $K\subseteq\Omega$ be a nonempty compact set. A
**linearized-wave datum on $K$ of length scale $L>0$** consists of

- a flat linearized family $(\varepsilon_1,h,q)$ over $\Omega$ with
  perturbation $h$ ([[def-gr-flat-linearized-perturbation]]) such that
  $B_K(h)<\infty$ in the weighted norm of
  [[thm-gr-flat-linearized-curvature-and-gauge]] clause (f);
- a real parameter $\Lambda$ (the cosmological parameter) and a symmetric
  field $S$ on a neighborhood of $K$ (the source), such that $h$ solves the
  linearized field equation with source $S$ and parameter $\Lambda$ in the
  sense of [[def-gr-plane-wave-perturbation]] clause (e);
- a real parameter $\lambda$ with $0<|\lambda|<\varepsilon_1$ (the
  **amplitude**), for which $g(\lambda):=\eta+\lambda h$ is a Lorentzian
  metric of signature $(-,+,+,+)$ on a neighborhood of $K$.

The datum is a **linearized vacuum wave datum** when $S=0$ and
$\Lambda=0$. If in addition the perturbation is a TT planar perturbation
with amplitudes $A_+,A_\times$
([[def-gr-plane-wave-perturbation]] clause (b)), the datum is a **TT
linearized-wave datum**. The **approximation defect** of the datum is the
number

$$D(\lambda,K):=\max_{a,b}\ \sup_{p\in K}\bigl|G_{ab}(\eta+\lambda h)(p)+\Lambda\,g_{ab}(\lambda)(p)-\kappa\,S_{ab}(p)\bigr|,$$

with $G$ the Einstein tensor of the exact metric $\eta+\lambda h$ and
$\kappa=8\pi G_N/c^4$; it measures the failure of the exact metric
$\eta+\lambda h$ to satisfy the field law with parameter $\Lambda$ and source
$S$ on $K$. The datum is **within the quadratic approximation** when
$|\lambda|\le\delta_0/B_K(h)$ in the notation of
[[thm-gr-flat-linearized-curvature-and-gauge]] clause (f) with $B_K(h)>0$.
Whether a datum satisfies any of these conditions is a property of the given
data; this definition names the conditions and the defect and asserts neither
existence nor a bound.

**(b) Ideal two-body detector.** Let a TT linearized-wave datum be given, and
let $\gamma:\mathbb R\to\mathbb R^4$, $\gamma(s):=(cs,\,x_0)$ for a fixed
spatial point $x_0$, be the **reference worldline**; and let $\delta\ne0$ be
a **separation vector**, by which we mean a vector with $\delta^0=0$ and
Euclidean norm $|\delta|>0$ ([[def-euclidean-inner-product]]). The
**companion worldline** is $\gamma_\delta(s):=(cs,\,x_0+\delta)$, and the
pair $(\gamma,\gamma_\delta)$ with the data $(x_0,\delta)$ is the **ideal
two-body detector** of the model with reference point $x_0$ and separation
$\delta$. Its **arm direction** is $e_\delta:=\delta/|\delta|$, an
observer-frame spatial unit vector.

**(c) Proper separation and strain.** For the ideal two-body detector and
the metric $g(\lambda)=\eta+\lambda h$, define the **proper separation** at
parameter $s$ by

$$L_\delta(s):=\sqrt{g(\lambda)_{\gamma(s)}(\delta_v,\delta_v)},\qquad \delta_v:=\delta^a\partial_a,$$

with the nonnegative square root of [[def-rational-power]], on the set of
$s$ at which the quantity under the root is positive; and the **strain
function** by $S_\delta(s):=L_\delta(s)/|\delta|-1$. For a TT
linearized-wave datum the quantity under the root is
$g(\lambda)_{\gamma(s)}(\delta_v,\delta_v)=|\delta|^2+\lambda\,\delta^i\delta^jh_{ij}(s)$,
so that on the set where $1+\lambda\,\delta^i\delta^jh_{ij}(s)/|\delta|^2>0$
the strain function is the smooth function

$$S_\delta(s)=\sqrt{1+\lambda\,\frac{\delta^i\delta^jh_{ij}(s)}{|\delta|^2}}-1 .$$

The **first-order strain response** of the detector is the function

$$S^{(1)}_\delta(s):=\tfrac12\,\frac{\delta^i\delta^jh_{ij}(s)}{|\delta|^2},$$

which is the first-order term of the expansion of $S_\delta$ in $\lambda$;
the precise remainder statement belongs to the response theorem of this page
and is not asserted here.

**(d) Reading and scope.** The construction of (b)-(c) is a model
idealization of a detector as two freely falling test bodies together with
their proper separation at equal parameter $s$: both worldlines are
parametrized so that $s$ is their common coordinate-time parameter
$s=x^0/c$ and, for the metric family considered, their proper-time parameter
([[def-gr-timelike-worldline-and-proper-time]],
[[lem-gr-proper-time-reparametrization-and-four-velocity]]). Rigid bodies,
elasticity, internal resonances, the propagation and readout of light, noise
and any calibration are outside this definition; no reading of a real
apparatus is defined here, and no fact about nature is asserted.

## Remarks

- **Why the regime conditions are separate from the detector.** Clause (a)
  packages the approximation hypotheses — a linearized family, a length
  scale, a source and parameter, a compact set and an amplitude — so that
  later theorems can quantify the approximation defect and the response
  without repeating them. The bound on the defect for vacuum data is the
  content of [[pthm-gr-linearized-field-equations]] clause (d) and
  [[thm-gr-tt-plane-wave-solutions]] clause (c); the definition itself only
  names the defect.

- **Simultaneity is chart-defined.** The separation $L_\delta(s)$ compares
  the two worldlines at equal inertial-chart time $x^0=cs$. This is the
  idealization appropriate to the flat linearization; it is not a statement
  about how any particular apparatus records a duration or a length, and the
  dependence of such model quantities on the chosen frame is a separate
  question.
