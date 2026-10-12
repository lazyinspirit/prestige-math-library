---
id: lem-gr-schwarzschild-static-congruence-and-clock-rates
kind: lemma
title: "The static observer congruence of the Schwarzschild exterior model: unit field, integral curves, acceleration and clock-rate ratios"
status: draft
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-schwarzschild-exterior-model, lem-gr-schwarzschild-metric-properties, lem-gr-schwarzschild-christoffel-symbols, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-observer-and-rest-space, def-gr-observer-congruence-and-adapted-charts, def-gr-congruence-acceleration-and-expansion, lem-gr-congruence-acceleration-and-expansion-properties, def-gr-timelike-worldline-and-proper-time, lem-gr-proper-time-reparametrization-and-four-velocity, def-derivative, thm-chain-rule, thm-algebra-of-derivatives, def-rational-power, thm-real-power-continuity-and-derivatives, def-countable-choice, def-smooth-vector-field-as-a-tangent-bundle-section]
dependency_roles:
  def-gr-schwarzschild-exterior-model: mathematical-premise
  lem-gr-schwarzschild-metric-properties: mathematical-premise
  lem-gr-schwarzschild-christoffel-symbols: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-congruence-acceleration-and-expansion: mathematical-premise
  lem-gr-congruence-acceleration-and-expansion-properties: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  def-derivative: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-rational-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
sources:
  references:
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 6.1: the Schwarzschild metric (6.1) and the statement that the metric is independent of the time coordinate, printed p. 232 (PDF p. 239); section 4.3.2: conserved quantities from Killing vectors, printed pp. 163-165 (PDF pp. 170-172)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "P. K. Townsend, Black Holes, arXiv:gr-qc/9707012v1 (1997), section 2.2: the Killing vector k = partial_t of the Schwarzschild metric and the conserved charge mk_mu dx^nu/dtau g_{mu nu} = -m epsilon, printed pp. 13-14"
      url: "https://arxiv.org/pdf/gr-qc/9707012"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7 (7.41)-(7.44): the energy and angular momentum constants of Schwarzschild geodesics, printed p. 174 (PDF p. 181)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be the Schwarzschild exterior datum of mass parameter $m_*$
with Schwarzschild radius $s>0$ and $f(r)=1-s/r$
([[def-gr-schwarzschild-exterior-model]]), with metric-selected connection
$\nabla$ ([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]). Define the
smooth vector field

$$n:=f^{-1/2}\,\partial_0=\Bigl(1-\frac{s}{r}\Bigr)^{-1/2}\partial_0$$

on $M$. Then:

**(a) Observer congruence.** $n$ is a smooth observer congruence on $M$ in the
sense of [[def-gr-observer-congruence-and-adapted-charts]]: $g(n,n)=-1$ and
$g(n,N)<0$ at every point, so $n$ is a future-directed unit timelike field.

**(b) Integral curves.** For any $p=(c_0,r_0,\omega_0)\in M$, including sphere poles, the maximal integral curve of $n$ through $p$, with length-valued flow parameter $\lambda\in\mathbb R$, is
$$\lambda\mapsto\bigl(c_0+f(r_0)^{-1/2}\lambda,\ r_0,\ \omega_0\bigr).$$
It is defined on all of $\mathbb R$ and is the **static observer worldline** at radius $r_0$. In a spherical-polar chart it has constant angular coordinates $(\vartheta_0,\varphi_0)$; in any angular chart the sphere point is constant, and the global coordinate $x^0$ increases monotonically.

**(c) Proper time and clock rate.** Along each static observer worldline the
proper time $\tau$ is an affine function of the flow parameter $\lambda$, with
$\frac{d\tau}{d\lambda}=\frac1c$, and

$$\Delta\tau=\frac{\sqrt{f(r_0)}}{c}\,\Delta x^0=\sqrt{f(r_0)}\,\Delta t,$$

where $\Delta x^0$ is the coordinate difference in metres between two events
of the worldline and $\Delta t=\Delta x^0/c$ is the same difference in
seconds. In particular the proper-time increment is strictly positive for
$\Delta x^0>0$, and it is smaller than $\Delta t$ at every finite radius
because $0<f(r_0)<1$.

**(d) Clock-rate ratio.** For two static observers at radii
$r_1,r_2\in(s,\infty)$ compared over the same coordinate interval
$\Delta x^0$, the proper-time increments satisfy

$$\frac{\Delta\tau_1}{\Delta\tau_2}=\sqrt{\frac{f(r_1)}{f(r_2)}}=\sqrt{\frac{1-s/r_1}{1-s/r_2}} .$$

**(e) Acceleration.** The acceleration field of the congruence is
$a:=\nabla_nn=\frac{f'(r)}{2}\,\partial_1=\frac{s}{2r^2}\,\partial_r$; it is
spatial, nowhere zero, and points in the direction of increasing $r$, so the
static observers are not geodesics.

**(f) Scope.** These are identities of the geometric datum. The reading of
$\tau$ as the time measured by an ideal clock and of the congruence as a
family of static observers belongs to the framework's postulates and is not
asserted here; no measurement and no comparison with any observed rate is
made.

## Facts & Assumptions

**Given:** The Schwarzschild exterior datum with $s>0$, a spherical-polar product chart $(x^0,r,\vartheta,\varphi)$, the metric $g$ of the datum, its connection $\nabla$ and the field $n=f^{-1/2}\partial_0$.

[L1] In a spherical-polar product chart the metric components are $g_{00}=-f$, $g_{11}=f^{-1}$, $g_{22}=r^2$, $g_{33}=r^2\sin^2\vartheta$ with $f(r)=1-s/r>0$ on $r>s$, and the nonzero Christoffel symbols are those of [[lem-gr-schwarzschild-christoffel-symbols]], in particular $\Gamma^1{}_{00}=ff'/2$ with $f'=s/r^2$ ([[lem-gr-schwarzschild-metric-properties]], [[lem-gr-schwarzschild-christoffel-symbols]]).

[L2] An observer congruence on an open set is a smooth field $n$ with $g(n,n)=-1$ and $g(n,N)<0$ everywhere; its observer curves are the maximal integral curves of $n$, and the field is called the acceleration field $a=\nabla_nn$, which is spatial; the flow parameter of $n$ is not by itself a clock reading ([[def-gr-observer-congruence-and-adapted-charts]], [[def-gr-observer-and-rest-space]], [[def-gr-congruence-acceleration-and-expansion]], [[lem-gr-congruence-acceleration-and-expansion-properties]]).

[L3] For a $C^1$ future timelike worldline the proper-time density is $c^{-1}\sqrt{-g(\gamma',\gamma')}$, the proper time is strictly increasing with the parameter, and the four-velocity $U=\gamma_\tau'$ satisfies $g(U,U)=-c^2$ ([[def-gr-timelike-worldline-and-proper-time]], [[lem-gr-proper-time-reparametrization-and-four-velocity]]).

[L4] The function $f^{-1/2}$ is smooth on $(s,\infty)$ because $f$ is smooth, positive and never zero there, and $x\mapsto x^{-1/2}$ is smooth on $(0,\infty)$; the product and chain rules apply ([[thm-real-power-continuity-and-derivatives]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-rational-power]], [[def-derivative]]).

[L5] The maximal integral curve of a smooth vector field through a point is unique and defined on an open interval; for the coordinate field $\partial_0$ on a product domain the integral curves are obtained by translating the coordinate $x^0$ ([[def-gr-observer-congruence-and-adapted-charts]] clause (b), [[def-smooth-vector-field-as-a-tangent-bundle-section]], [[def-countable-choice]]).

## Proof

**Proof technique:** evaluate the metric on $n$, integrate the flow explicitly, and apply the proper-time and acceleration definitions.

1.1 (Unit timelike and future-directed.) By [L1] and [L4], $g(n,n)=f^{-1}g_{00}=f^{-1}(-f)=-1$, and $g(n,N)=f^{-1/2}g(\partial_0,\partial_0)=-f^{1/2}<0$; hence $n$ is a unit timelike future-directed smooth field, i.e. an observer congruence, and $f^{1/2}$ is smooth and positive. This proves (a). [L1, L2, L4, algebra]

1.2 (Integral curves.) Because $n=f(r)^{-1/2}\partial_0$ and $f$ depends only on $r$, in any angular chart at the fixed sphere point, the components of $n$ are $n^0=f(r_0)^{-1/2}$, $n^1=n^2=n^3=0$ along the curve at constant $(r_0,\omega_0)$; the curve of clause (b) has tangent $n$ at every value of the parameter $\lambda$ and satisfies the initial condition at $\lambda=0$, so by uniqueness of maximal integral curves [L5] it is the maximal integral curve, defined for all $\lambda\in\mathbb R$ because the explicit formula is defined there. This proves (b). [L1, L4, L5, algebra]

2.1 (Proper time.) The tangent $\gamma'(\lambda)=n_{\gamma(\lambda)}$ has $g(\gamma',\gamma')=-1$ by step 1.1, so by [L3] the proper-time density is $c^{-1}\sqrt{1}=1/c$, constant; integrating over a parameter interval of length $\Delta\lambda$ gives $\Delta\tau=\Delta\lambda/c$. Since $x^0$ increases by $\Delta x^0=f(r_0)^{-1/2}\Delta\lambda$ over that interval by step 1.2, we obtain $\Delta\lambda=f(r_0)^{1/2}\Delta x^0$ and hence $\Delta\tau=f(r_0)^{1/2}\Delta x^0/c=f(r_0)^{1/2}\Delta t$; the increment is positive for $\Delta x^0>0$, and $0<f<1$ on $r>s$. This proves (c). [L1, L3, step 1.2, algebra]

3.1 (Clock-rate ratio and acceleration.) Dividing the identity of step 2.1 for $r_1$ by the same identity for $r_2$ over a common coordinate interval gives $\Delta\tau_1/\Delta\tau_2=\sqrt{f(r_1)/f(r_2)}$, which is (d). For the acceleration, by [L2] and [L1], $\nabla_nn=f^{-1/2}\nabla_{\partial_0}(f^{-1/2}\partial_0)=f^{-1/2}\bigl(\partial_0(f^{-1/2})\partial_0+f^{-1/2}\Gamma^a{}_{00}\partial_a\bigr)=f^{-1}\Gamma^1{}_{00}\partial_1=\tfrac12f'\partial_1$, where the first term vanishes because $f$ is independent of $x^0$; substituting $f'=s/r^2$ gives $a=\frac{s}{2r^2}\partial_1$, which is spatial, nonzero and along $\partial_1$. This computation holds on the dense polar-chart locus. Both $\nabla_nn$ and $s(2r^2)^{-1}\partial_r$ are smooth global vector fields, so their equality extends to the poles by continuity. This proves (e) globally. [L1, L2, step 1.1, algebra]

4.1 (Conclusion.) Steps 1.1, 1.2, 2.1 and 3.1 prove clauses (a)-(e) as identities of the datum, using only its geometric data and the cited definitions; clause (f) records that the clock reading and the observer interpretation belong to the framework's postulates and that no measurement or empirical comparison is made. [step 1.1, step 1.2, step 2.1, step 3.1, given] ∎

## Remarks

- **Static does not mean geodesic.** The acceleration $a=\frac{s}{2r^2}\partial_1$
  is nonzero at every finite radius: the static observers are held at fixed
  $r$ by an external constraint and are not free-fall worldlines. The
  magnitude $\lvert a\rvert_g=\frac{f'}{2\sqrt f}=\frac{s}{2r^2\sqrt{1-s/r}}$
  diverges as $r\downarrow s$; this is a statement about the congruence, not
  about the curvature.

- **Relation to the redshift.** The ratio of clause (d) is a ratio of proper
  times of static observers over the same coordinate interval; the related
  but distinct statement about the observer energies of a null geodesic
  between two static observers is proved in the physics theorem of this page,
  and it is the latter that involves the light-ray postulate.
