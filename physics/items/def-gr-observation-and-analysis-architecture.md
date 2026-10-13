---
id: def-gr-observation-and-analysis-architecture
kind: definition
title: "Model configurations, interface readouts, operational models, data records and the analysis vocabulary of the experiment interface"
status: published
origin: session
domain: physics
physical_scope: "Formulation vocabulary inside the classical gravitational framework: it names model configurations built from the framework's own objects (Lorentzian four-manifolds, metric-selected connections, worldlines with proper time, observers and congruences, future null geodesics, charts, ideal two-body detectors and declared parameters), the readouts assigned to those configurations (frequency ratio and redshift, radar round-trip proper time, deflection angle, azimuthal increment and perihelion advance, arrival times, strain), operational models with a declared interpretation obligation, hard-bound data records, calibration declarations and declared uncertainty bounds, and the separation of comparison claims from all of these. It asserts no measurement, no apparatus behaviour, no sampling law, no statistical inference, no value of any physical constant, and no in-framework prediction for the propagation-delay, deflection, perihelion-advance or arrival-time slots, which are recorded as future-report destinations."
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, post-gr-spacetime-and-classical-domain, def-gr-si-unit-and-coordinate-conventions, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-timelike-worldline-and-proper-time, lem-gr-proper-time-reparametrization-and-four-velocity, def-gr-observer-and-rest-space, def-gr-observer-congruence-and-adapted-charts, def-gr-observer-relative-energy-and-momentum, lem-gr-observer-projection-decomposition, lem-gr-observer-pairing-with-future-causal-vectors, post-gr-ideal-clocks-and-free-fall, def-geodesic-of-an-affine-connection, def-causal-classification-of-lorentz-vectors, def-smooth-manifold, def-inner-product-space, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-principal-inverse-sine-and-cosine, def-countable-choice, def-gr-linearized-wave-regime-and-detector-coupling]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  post-gr-spacetime-and-classical-domain: formulation-prerequisite
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-observer-relative-energy-and-momentum: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  post-gr-ideal-clocks-and-free-fall: formulation-prerequisite
  def-geodesic-of-an-affine-connection: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-inner-product-space: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-principal-inverse-sine-and-cosine: mathematical-premise
  def-countable-choice: mathematical-premise
  def-gr-linearized-wave-regime-and-detector-coupling: formulation-prerequisite
sources:
  references:
    - title: "C. M. Will, The Confrontation between General Relativity and Experiment, Living Rev. Relativity 17 (2014) 4, arXiv:1403.7377v1: section 2.1.3 printed pp. 12-16 (gravitational redshift as a comparison of frequency standards), section 4.1.1 printed pp. 40-43 (light deflection by optical astrometry and radio interferometry, with least-squares fitting of the deflection coefficient), section 4.1.2 printed pp. 43-44 (light-time delay from differential round-trip travel times and ephemeris determination), section 4.2 printed pp. 45-46 (perihelion advance after subtraction of planetary perturbations and equinox precession), section 6.1 printed pp. 67-71 (binary pulsars analysed through pulse arrival times), section 7.1 printed pp. 77-78 (laser-interferometric observatories, strain sensitivity and pulsar timing arrays)"
      url: "https://arxiv.org/pdf/1403.7377"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 6 (6.58)-(6.66) on the geodesic deviation of slowly moving test particles in a plane wave, printed pp. 152-153 (PDF pp. 159-160); Ch. 7 (7.56)-(7.62) on the perihelion precession and the exact Schwarzschild frequency ratio between fixed observers, printed pp. 179-181 (PDF pp. 186-188), with the deflection and time-delay discussion on printed p. 181 (PDF p. 188)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 1.2.5 printed pp. 25-26 (gravitational redshift and the Pound-Rebka frequency-standard comparison), sections 5.2.2-5.2.3 printed pp. 212-215 (the bobbing of neighbouring geodesics and the interferometer arm response)"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
verification:
  precheck: n/a
dependency_level: 16
---

## Definition

Adopt the unit conventions of [[def-gr-si-unit-and-coordinate-conventions]], the
spacetime postulate of [[post-gr-spacetime-and-classical-domain]] and the
clock, free-fall and light-ray postulates of
[[post-gr-ideal-clocks-and-free-fall]]. This definition fixes the vocabulary in
which the framework's empirical layer is stated: it names model
configurations, the readouts assigned to them, operational models, data
records, calibration declarations and declared uncertainty bounds. It selects
no experiment, records no value and asserts no comparison.

**(a) Model configurations.** Let $(M,g,N)$ be a time-oriented smooth
Lorentzian four-manifold with metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]], [[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]). A **model
configuration** is a finite tuple $D=(d_1,\dots,d_r)$ whose entries are objects
of the following kinds, each carrying the domain, parametrization and
regularity required by the cited item:

- a *worldline entry*: a $C^1$ future timelike worldline $h:I\to M$ on an
  interval $I$ with nonempty interior, parametrized by proper time, so that its
  four-velocity $U:=h'$ satisfies $g(U,U)=-c^2$
  ([[def-gr-timelike-worldline-and-proper-time]],
  [[lem-gr-proper-time-reparametrization-and-four-velocity]]), or the
  restriction of such a worldline to a subinterval;
- an *observer entry*: an observer at a point, that is a future unit timelike
  vector $n$ with $g(n,n)=-1$, or a smooth observer congruence
  ([[def-gr-observer-and-rest-space]],
  [[def-gr-observer-congruence-and-adapted-charts]]);
- an *isometric-identification entry*: declared points $p,q\in M$ and a
  linear isomorphism $\Phi:T_pM\to T_qM$ satisfying
  $g_q(\Phi v,\Phi w)=g_p(v,w)$ for every $v,w\in T_pM$; this map is supplied
  comparison data, not an identification selected by the metric alone, and
  any required relation to observer entries is specified by the readout;
- a *ray entry*: a smooth curve $\eta:J\to M$, where $J\subseteq\mathbb R$ is
  an interval with nonempty interior, that is a future-directed null geodesic
  of $\nabla$; thus it is affinely parametrized and satisfies
  $\nabla_{\eta'}\eta'=0$, $g(\eta',\eta')=0$ and $\eta'$ is future-directed,
  with the one-sided convention at included endpoints
  ([[def-geodesic-of-an-affine-connection]],
  [[def-causal-classification-of-lorentz-vectors]],
  [[post-gr-ideal-clocks-and-free-fall]] clause (iii));
- a *chart entry*: a smooth chart $(U,x)$ of $M$ ([[def-smooth-manifold]]);
- an *azimuth entry*: a continuous real function $\varphi:K\to\mathbb R$
  on a compact parameter interval $K=[t_1,t_2]$ of a worldline entry, with
  values in radians, together with the local azimuth chart designations and
  compatibility conditions specified in (b)4; this is supplied data, not an
  assertion that such a function exists;
- a *detector entry*: the data of the ideal two-body detector of the
  linearized-wave regime, namely a TT linearized-wave datum, a reference point
  $x_0$, a separation vector $\delta\ne0$ with $\delta^0=0$, the arm direction
  $e_\delta$, and a parameter value $s$, as in
  [[def-gr-linearized-wave-regime-and-detector-coupling]] clauses (a)-(c);
- a *parameter entry*: a finite tuple of real numbers in a declared subset of
  $\mathbb R^m$, each component with declared units;
- an *annotation entry*: a finite string recording declared conditions of the
  configuration and, where a datum is taken from a report, the bibliographic
  identification of that report.

A model configuration is a description of a hypothetical model situation. The
tuple asserts nothing about any apparatus and nothing about nature, and no
clause of this definition asserts that a configuration with prescribed entries
exists: existence claims belong to the items that construct the entries.

**(b) Readouts.** Let $D$ be a model configuration. The following **readouts**
are defined whenever $D$ contains the entries named in the clause together with
the stated incidence conditions; each is a real number or a finite tuple of
real numbers determined by the entries of $D$.

1. *Frequency ratio and redshift.* Suppose $D$ contains a ray entry
   $\eta:J\to M$ with tangent $W:=\eta'$, worldline entries $h_E:I_E\to M$ and
   $h_R:I_R\to M$ with four-velocities $U_E,U_R$, and parameter values
   $s_E<s_R$ in $J$, $t_E\in I_E$, $t_R\in I_R$ with $\eta(s_E)=h_E(t_E)$ and
   $\eta(s_R)=h_R(t_R)$. The **observer energies** of the ray at the two events
   relative to the unit observers $U_E/c$ and $U_R/c$ are

   $$E_E:=-c\,g_{\eta(s_E)}\bigl(W(s_E),U_E(t_E)/c\bigr),\qquad E_R:=-c\,g_{\eta(s_R)}\bigl(W(s_R),U_R(t_R)/c\bigr),$$

   the values of clause (a) of
   [[def-gr-observer-relative-energy-and-momentum]] for those observers; both
   are strictly positive by claim 1 of
   [[lem-gr-observer-pairing-with-future-causal-vectors]], because $W$ is
   nonzero future null and $U_E/c$, $U_R/c$ are future unit timelike. The
   **frequency-ratio readout** and the **redshift readout** are

   $$\mathcal F:=\frac{E_R}{E_E}=\frac{g_{\eta(s_R)}\bigl(W(s_R),U_R(t_R)\bigr)}{g_{\eta(s_E)}\bigl(W(s_E),U_E(t_E)\bigr)},\qquad z:=\frac{E_E}{E_R}-1=\frac1{\mathcal F}-1 .$$

2. *Radar round-trip proper time.* Suppose $D$ contains worldline entries
   $h_R:I_R\to M$ (the receiver) and $h_C:I_C\to M$ (the reflector), parameter
   values $t_1<t_2$ in $I_R$ and $s_C\in I_C$, and ray entries $\eta_1,\eta_2$
   whose parameter intervals contain values exhibiting
   $\eta_1(s_1)=h_R(t_1)$, $\eta_1(s_1')=h_C(s_C)$ with $s_1<s_1'$, and
   $\eta_2(s_2)=h_C(s_C)$, $\eta_2(s_2')=h_R(t_2)$ with $s_2<s_2'$. The
   **radar readout** is the receiver proper-time increment
   $\Delta\tau:=t_2-t_1$ between emission and reception. It is independent of
   the affine parametrizations of $\eta_1,\eta_2$, which enter only through the
   incidence statements ([[def-gr-timelike-worldline-and-proper-time]] clause
   (d), [[lem-gr-proper-time-reparametrization-and-four-velocity]]).

3. *Deflection angle.* Suppose $D$ contains a ray entry $\eta:J\to M$ with
   tangent $W$, parameter values $s_1<s_2$ in $J$, observer entries $n_1,n_2$ at
   $p_1:=\eta(s_1)$ and $p_2:=\eta(s_2)$, and an isometric-identification
   entry $\Phi:T_{p_1}M\to T_{p_2}M$ of (a) satisfying $\Phi(n_1)=n_2$.
   Put $q_i:=h_{n_i}(W(s_i))$, the spatial projection of
   clause (c) of [[def-gr-observer-and-rest-space]], and suppose $q_1,q_2\ne0$.
   Then $|q_i|_{n_i}:=\sqrt{g_{p_i}(q_i,q_i)}>0$, because $g_{p_i}$ is positive
   definite on the rest space ([[lem-gr-observer-projection-decomposition]]),
   and $\Phi(q_1)$ lies in $n_2^{\perp}$ with
   $g_{p_2}(\Phi q_1,\Phi q_1)=g_{p_1}(q_1,q_1)$. The **deflection cosine**
   and **deflection readout** are

   $$\kappa:=\frac{g_{p_2}\bigl(\Phi(q_1),q_2\bigr)}{|q_1|_{n_1}\,|q_2|_{n_2}}\in[-1,1],\qquad \Theta:=\arccos\kappa,$$

   where the bound is the Cauchy-Schwarz inequality in the real inner product
   space $(n_2^{\perp},g_{p_2})$
   ([[def-inner-product-space]],
   [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]) and
   $\arccos$ is the principal inverse cosine of
   [[def-principal-inverse-sine-and-cosine]].

4. *Azimuthal increment and perihelion advance.* Suppose $D$ contains a
   worldline entry $h:I\to M$, a chart entry $(U,x)$ with
   $h([t_1,t_2])\subseteq U$ for $t_1<t_2$ in $I$, and an azimuth entry
   $\varphi:[t_1,t_2]\to\mathbb R$. Put $r(t):=x^1(h(t))$ on $h^{-1}(U)\subseteq I$. Require $t_1,t_2$
   to be strict local minima of $r$ (relative to its domain in $I$), with no
   strict local minimum between them; these are the designated successive
   perihelion passages. For every $t\in[t_1,t_2]$ require a smooth chart
   $(V,y)$ containing $h(t)$, whose dimensionless coordinate $y^2$ is
   designated as a local azimuth, and a relative parameter neighborhood $J_t$
   of $t$ on which $h(J_t)\subseteq V$ and
   $\varphi(u)-y^2(h(u))\in2\pi\mathbb Z$ for every $u\in J_t$.
   Here $2\pi\mathbb Z:=\{2\pi k:k\in\mathbb Z\}$, and the designations
   specify a common angular orientation and period $2\pi$. The supplied
   continuous $\varphi$ is the **unwrapped azimuth** along this traversal;
   local azimuth representatives alone are not sufficient input. The
   **azimuthal-increment readout** and the **perihelion-advance readout** are

   $$\Delta\varphi:=\varphi(t_2)-\varphi(t_1),\qquad A:=\Delta\varphi-2\pi .$$

   This convention subtracts one positive circuit; for a negatively oriented
   traversal it still uses the displayed signed formula. The radial and
   angular designations are part of the declared configuration, not a
   dynamical prediction or a chart-invariance assertion. Adding a constant
   $2\pi k$ to the supplied lift leaves the increment unchanged. A traversal
   with $\varphi(t_2)=\varphi(t_1)+2\pi$ has $A=0$ even when its endpoint
   local azimuth representatives coincide. No lift-existence theorem is
   assumed: the readout is defined only when the required lift is supplied.

5. *Arrival times.* Suppose $D$ contains worldline entries $h_E,h_R$, a finite
   family of ray entries $\eta_1,\dots,\eta_N$ and parameter values such that
   $\eta_k$ joins an event of $h_E$ to $h_R(t_k)$, with $t_1<\cdots<t_N$ in
   $I_R$. The **arrival-time readout** is the tuple $(t_1,\dots,t_N)$ of
   receiver proper-time values.

6. *Strain.* Suppose $D$ contains a detector entry of (a) and a parameter
   value at which the quantity under the square root of clause (c) of
   [[def-gr-linearized-wave-regime-and-detector-coupling]] is positive. The
   **strain readout** is the value $S_\delta(s)$ of the strain function of that
   clause.

**(c) Operational models.** An **operational model** is a tuple
$M=(S,\Theta,\theta,D,F)$ in which $S$ is a nonempty set, the *preparation
index set*; $\Theta\subseteq\mathbb R^m$ is a nonempty *parameter set* whose
coordinates carry declared units; $\theta:S\to\Theta$ is a surjection, the
*parameter map*; $D$ assigns to each $s\in S$ a model configuration $D(s)$ of
(a); and for some integer $d\ge1$ a map $F:\Theta\to\mathbb R^d$ is a
**prediction map** for $D$, subject to the declared interpretation $(*)$: for
every $s\in S$, each component of $F(\theta(s))$ is a value that the
framework's definitions, postulates and proved consequences assign to a
readout of (b) of the configuration $D(s)$, with every intermediate quantity,
event, frame, sign and unit declared. In particular, a component asserted to be
a frequency ratio, redshift, radar, deflection, azimuthal, advance,
arrival-time or strain value must be the corresponding readout of (b) for
entries that the configuration contains, and a component read from a cited
prediction theorem must be a value that theorem assigns to entries of $D(s)$
satisfying its hypotheses. Condition $(*)$ is a declared interpretation that
reviewers check when the model is used; it is not a consequence of the tuple
structure, and no clause of this definition asserts that any apparatus realizes
$M$ or that any component of $F$ is measured.

**(d) Data records.** A **data record** is a tuple $R=(N,z,\varepsilon,a)$ with
an integer $N\ge1$; $z=(z_1,\dots,z_N)$ with $z_k\in\mathbb R^d$;
$\varepsilon=(\varepsilon_1,\dots,\varepsilon_N)$ with
$\varepsilon_k\in[0,\infty)^d$; and $a=(a_1,\dots,a_N)$ a finite tuple of
*condition annotations* as in (a). The record declares: for each $k$, the value
of the readout under the condition annotated by $a_k$ lies in the closed box
$\prod_{j=1}^d[z_{k,j}-\varepsilon_{k,j},\,z_{k,j}+\varepsilon_{k,j}]$, in the
declared units. A data record contains no probability space, random variable,
distribution, sampling law, independence assumption, likelihood or coverage
statement; it declares nothing about how the values $z_k$ were produced and
nothing about the correctness of any calibration.

**(e) Calibration declarations.** Let $Z$ be a nonempty set of declared
*instrument-output values*. A **calibration declaration** is a tuple
$C=(Z,c,\delta,h)$ with $c:Z\to\mathbb R^d$, $\delta:Z\to[0,\infty)^d$ and $h$
a condition annotation as in (a); it declares that for every $z\in Z$ obtained
under the condition annotated by $h$, the value of the declared readout lies in
the closed box
$\prod_{j=1}^d[c_j(z)-\delta_j(z),\,c_j(z)+\delta_j(z)]$ in the declared units.
A **calibration record** is a data record of (d) whose declared readout is the
value of the calibration map's output. The declaration asserts no accuracy
beyond the bound $\delta$ and no statistical property of $c$ or $\delta$.

**(f) Uncertainty vocabulary.** For a data record of (d), the **declared
uncertainty** of the $k$-th datum is the vector $\varepsilon_k$; a **source
label** is an element of the finite declared set
$\{\text{calibration},\ \text{systematic},\ \text{sampling-variability},\
\text{rounding},\ \text{other}\}$ attached to a bound; and a **total declared
bound** for a value computed from finitely many recorded values by a declared
finite arithmetic expression is any $B\in[0,\infty)$ for which the declaration
states: whenever each recorded value lies in its declared closed box, the
computed value lies in $[\hat y-B,\hat y+B]$ for the declared number $\hat y$
(for instance, for a sum of recorded scalars the sum of the recorded bounds is
such a bound). Every uncertainty entry is a declared constraint of the form in
(d) and (e); no probability law, coverage probability, confidence level,
p-value or posterior is defined by this vocabulary.

**(g) Comparison claims are separate.** A claim that a data record $R$ and an
operational model $M$ are consistent, or that $R$ supports, refutes or fails to
distinguish $M$, is not part of (a)-(f): it requires its own statement, an
explicitly declared comparison rule, and adequate primary-report and analysis
prerequisites. A declared rule of the form "$t\in\Theta$ is consistent with the
one-point hard-bound record $R$ exactly when $F(t)$ lies in the record's closed
box", together with the resulting consistency set
$C(R,M):=\{t\in\Theta:F(t)\in\prod_{j}[z_{1,j}-\varepsilon_{1,j},\,z_{1,j}+\varepsilon_{1,j}]\}$,
is a comparison rule in this sense; it is conditional on the record's declared
bounds and on the interpretation $(*)$, and it establishes neither the truth of
a postulate nor the correctness of any apparatus. The source design's research
prerequisite labelled M20, the primary-report and analysis layer, is not
supplied by the items of this page: no reported measurement and no experiment
item occurs here. The framework's model-side prediction content for the
readouts of (b) currently consists of the restricted redshift theorems
`pthm-gr-schwarzschild-stationary-redshift` (static observers in the
Schwarzschild exterior model) and `pthm-gr-flrw-cosmological-redshift`
(comoving observers in a homogeneous cosmological model) for readout 1, and of
the ideal-detector definition `def-gr-linearized-wave-regime-and-detector-coupling`
with the response theorem `pthm-gr-plane-wave-tidal-detector-response` for
readout 6; the propagation-delay, deflection, perihelion-advance and
arrival-time readouts of 2-5 have no in-framework prediction theorem yet and
are recorded as report destinations in
`rem-gr-primary-report-research-queue`. These item names are nonlogical
status pointers; they add no premise to this definition.

**(h) Well-definedness and scope.** All components of (a)-(g) are finite tuples
of sets, maps, curves and real numbers with declared domains and units. The
constructions use no choice principle beyond those already assumed by the cited
suppliers: [[def-gr-smooth-lorentzian-objects]] uses countable choice
([[def-countable-choice]]) for the canonical smooth structures of tangent
bundles, and nothing here uses any further choice. No measurability,
integrability, completeness, differentiability or convergence beyond the cited
items is used; the continuous unwrapped azimuth in (b)4 is supplied explicitly. Clause (c) evaluates a prediction only at parameter values for
which the cited items supply its ingredients, and each readout of (b) is
defined only for configurations carrying the stated entries and incidence
conditions, so this definition asserts no existence of worldlines, rays,
charts, detectors or configurations. The vocabulary asserts no measurement, no
apparatus behaviour, no empirical support or refutation, no value of the
constant $c$ or of any other physical parameter, and no statistical inference.
