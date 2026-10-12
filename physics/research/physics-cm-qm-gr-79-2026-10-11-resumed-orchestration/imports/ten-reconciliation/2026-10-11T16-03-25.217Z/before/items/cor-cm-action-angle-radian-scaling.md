---
id: cor-cm-action-angle-radian-scaling
kind: corollary
title: "Period-one to radian action-angle rescaling: $\\theta^{\\mathrm{rad}}=2\\pi\\theta$ and $I^{\\mathrm{rad}}=I/(2\\pi)$ preserve $\\omega$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [thm-cm-liouville-arnold-action-angle-repaired, def-action-and-angle-coordinates, def-cm-phase-domain-and-standard-symplectic-two-form, prop-cm-canonical-map-tests-and-hamiltonian-transport, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives]
dependency_roles:
  thm-cm-liouville-arnold-action-angle-repaired: mathematical-premise
  def-action-and-angle-coordinates: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  prop-cm-canonical-map-tests-and-hamiltonian-transport: mathematical-premise
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 4.5.3 (action-angle variables for one-dimensional systems and the 2 pi normalisation), printed pages 108-111"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Ana Cannas da Silva, Lectures on Symplectic Geometry, revised January 2006, Lecture 18 and Definition 6.18 (period-one angles and the convention omega = sum d theta_i wedge d I_i)"
      url: "https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf"
verification:
  precheck: pass
---

## Statement

Let $(I,\theta)$ be period-one action-angle coordinates with
$\omega=\sum_{i=1}^n d\theta_i\wedge dI_i$ as supplied by
[[thm-cm-liouville-arnold-action-angle-repaired]] and
[[def-action-and-angle-coordinates]]. Define the rescaled coordinates

$$\theta_i^{\mathrm{rad}}:=2\pi\,\theta_i,\qquad I_i^{\mathrm{rad}}:=\frac{I_i}{2\pi}\qquad(i=1,\dots,n).$$

Then $(\theta^{\mathrm{rad}},I^{\mathrm{rad}})$ are $C^\infty$ coordinates on the same chart,

$$\omega=\sum_{i=1}^n d\theta_i^{\mathrm{rad}}\wedge dI_i^{\mathrm{rad}},$$

the angles $\theta^{\mathrm{rad}}$ are $2\pi$-periodic (radian-valued), and if a Hamiltonian is
$H=h(I)$ with $h$ of class $C^2$ in the period-one coordinates then in the radian coordinates it is
$H=\tilde h(I^{\mathrm{rad}})$ with $\tilde h(I^{\mathrm{rad}})=h(2\pi I^{\mathrm{rad}})$ and
$\dot\theta^{\mathrm{rad}}_i=\partial\tilde h/\partial I^{\mathrm{rad}}_i$.

## Facts & Assumptions

**Given:** Period-one action-angle coordinates $(I,\theta)$ on a chart $U$, with $\omega=\sum_id\theta_i\wedge dI_i$, and the rescaled functions $\theta^{\mathrm{rad}}=2\pi\theta$, $I^{\mathrm{rad}}=I/(2\pi)$.

[F1] Coordinate calculus ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-directional-and-partial-derivatives]]): the rescaling is a linear invertible change of coordinates with constant differential $d\theta^{\mathrm{rad}}_i=2\pi\,d\theta_i$ and $dI^{\mathrm{rad}}_i=(2\pi)^{-1}dI_i$.

[F2] The period-one form ([[def-action-and-angle-coordinates]], [[thm-cm-liouville-arnold-action-angle-repaired]], [[def-cm-phase-domain-and-standard-symplectic-two-form]]): on the chart, $\omega=\sum_i d\theta_i\wedge dI_i$ and this is the standard two-form in the coordinates $(\theta,I)$.

[F3] Hamilton's equations in canonical coordinates ([[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]]): on a phase domain with coordinates $(q,p)$ and standard two-form $\sum_i dq^i\wedge dp_i$, a $C^2$ function $K$ has Hamiltonian field $X_K=J\nabla K$, so its integral curves satisfy $\dot q^i=K_{p_i}$ and $\dot p_i=-K_{q^i}$.

## Proof

**Proof technique:** direct; substitute the constant rescalings into the coordinate expression of $\omega$.

1.1 By [F1], $d\theta^{\mathrm{rad}}_i\wedge dI^{\mathrm{rad}}_i=(2\pi\,d\theta_i)\wedge((2\pi)^{-1}dI_i)=d\theta_i\wedge dI_i$ for each $i$; summing over $i$ and using [F2] gives $\omega=\sum_id\theta^{\mathrm{rad}}_i\wedge dI^{\mathrm{rad}}_i$. Since the rescaling is a linear bijection of the chart coordinates, $(\theta^{\mathrm{rad}},I^{\mathrm{rad}})$ are coordinates on the same chart. [F1, F2, algebra]

2.1 The relation $H=h(I)$ becomes $H=h(2\pi I^{\mathrm{rad}})=\tilde h(I^{\mathrm{rad}})$; in the radian chart the two-form is $\sum_i d\theta^{\mathrm{rad}}_i\wedge dI^{\mathrm{rad}}_i$ by step 1.1, so [F3] applies there with $(q,p)=(\theta^{\mathrm{rad}},I^{\mathrm{rad}})$: $\dot I^{\mathrm{rad}}_i=0$ and $\dot\theta^{\mathrm{rad}}_i=\partial\tilde h/\partial I^{\mathrm{rad}}_i$. The chain rule gives $\partial\tilde h/\partial I^{\mathrm{rad}}_i=2\pi\,h'(2\pi I^{\mathrm{rad}}_i)=2\pi\dot\theta_i$, consistent with $\theta^{\mathrm{rad}}_i=2\pi\theta_i$. [F1, F3, step 1.1, algebra] ∎

## Remarks

- The rescaling is the standard conversion between the period-one convention of [[def-action-and-angle-coordinates]] and the radian convention used, for instance, in the adiabatic-invariant estimates of the approximation layer; the symplectic form, and with it the canonical structure, is unchanged.
