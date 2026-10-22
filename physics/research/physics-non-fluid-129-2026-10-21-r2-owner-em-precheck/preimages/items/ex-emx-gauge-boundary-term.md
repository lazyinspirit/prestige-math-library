---
id: ex-emx-gauge-boundary-term
kind: example
title: Charged configurations retain an additional term
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - pthm-emx-canonical-kinetic-integral
  - def-emx-angular-momentum-split
  - post-em-vacuum-maxwell
  - def-em-fields
  - def-em-lab-geometry
  - def-em-sources
  - def-em-gauge-transformation
  - def-cross-product-in-r3
  - def-divergence-and-curl-of-a-c1-vector-field
  - thm-the-divergence-of-a-curl-vanishes
  - thm-clairaut-schwarz-mixed-partials
  - def-em-si-conventions
  - lem-schwartz-cutoffs-from-the-standard-smooth-step
  - def-multidimensional-rectangle-and-volume
  - def-multidimensional-darboux-integral
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-riemann-fubini-on-product-rectangles
  - thm-ftc-second-part
  - thm-multidimensional-integral-properties
dependency_roles:
  pthm-emx-canonical-kinetic-integral: physical-result
  def-emx-angular-momentum-split: formulation-prerequisite
  post-em-vacuum-maxwell: physical-assumption
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-gauge-transformation: formulation-prerequisite
  def-cross-product-in-r3: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  thm-the-divergence-of-a-curl-vanishes: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  def-em-si-conventions: formulation-prerequisite
  lem-schwartz-cutoffs-from-the-standard-smooth-step: mathematical-premise
  def-multidimensional-rectangle-and-volume: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
proof_strategy: direct
physical_scope: >-
  A smooth sourced vacuum Maxwell solution in the SI laboratory chart, used
  only to demonstrate the divergence term in the componentwise angular-momentum
  identity. The displayed algebraic integrals
  extend the A-page formulas for this calculation; the example does not extend
  the A-page functionals' source-free Schwartz domain or make a gauge-invariant
  claim for general charged fields.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "K. Y. Bliokh, F. J. Rodríguez-Fortuño, F. Nori and A. V. Zayats, Spin-orbit interactions of light, Nature Photonics 9 (2015), arXiv:1505.02864"
      url: "https://arxiv.org/pdf/1505.02864"
      locator: "Section 'Angular momenta and geometric phases', Box 1, PDF pp. 3–4: context for keeping gauge and domain restrictions explicit; this sourced time-slice calculation is proved locally."
    - title: "Niklas Beisert, Elektrodynamik, ETH Zürich 2024 FS lecture notes"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§8.2, equations (8.15) and (8.18), and §8.3 'Drehimpuls, Schwerpunkt', equations (8.19)–(8.20): field momentum and origin-relative angular momentum; the charge-supported correction is derived locally."
verification:
  precheck: pending
---

## Example

Let $\chi$ be the smooth cutoff equal to $1$ on the unit ball and $0$ outside
the radius-two ball. Every integral over $\mathbb R^3$ below means integration
over any cube containing the compact support of its integrand; the value is
independent of the chosen cube. Fix $L>0$ metres, $E_0>0$ volts per metre, and $A_0>0$
tesla metres, and put $f(x):=\chi(x/L)$ and $g(x):=\chi(x/(2L))$. For all
$(x,t)\in\mathbb R^3\times\mathbb R$, define

$$E(x,t):=E_0f(x)e_1,\qquad A(x,t):=A_0g(x)e_2-tE_0f(x)e_1,\qquad \varphi:=0,\qquad B:=\operatorname{curl}A,\qquad \rho:=\varepsilon_0E_0\partial_1f,\qquad J:=\mu_0^{-1}\operatorname{curl}B.$$

These maps are smooth, compactly supported in space, and satisfy all four
smooth-branch Maxwell equations. At $t=0$ the boundary term in the finite-cube
angular-momentum identity vanishes, but the charge correction is

$$\int_{\mathbb R^3}\rho\,x\times A(x,0)\,d^3x=-\varepsilon_0E_0A_0L^3\left(\int_{\mathbb R^3}\chi(y)\,d^3y\right)e_3\ne0.$$

Thus the source-free total-integral equality cannot be extended to these
sourced fields by deleting the divergence term. This is a model calculation,
not a reported measurement.

## Example references

[[pthm-emx-canonical-kinetic-integral]]

[[def-emx-angular-momentum-split]]

[[post-em-vacuum-maxwell]]

## Facts & Assumptions

**Given:** The positive length and SI amplitude scales, the cutoff $\chi$,
the fields and sources defined above, and the adopted smooth Maxwell branch.

[F1] The source-free packet domain and its functionals are defined in
[[def-emx-angular-momentum-split]]. On each cube, the exact component identity is
$J_R=L_R+S_R+\varepsilon_0\int_{Q_R}(\operatorname{div}E)(x\times A)
-\varepsilon_0\int_{\partial Q_R}(n\cdot E)(x\times A)$.
([[pthm-emx-canonical-kinetic-integral]])

[A1] Adopt the smooth branch of the vacuum Maxwell postulate:
$\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$,
$\operatorname{curl}E=-\partial_tB$, and
$\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$ for smooth fields and
continuous sources. ([[post-em-vacuum-maxwell]])

[F2] The fields are maps $E,B:\mathbb R^3\times\mathbb R\to\mathbb R^3$;
the laboratory chart is positively oriented, and the source fields $\rho,J$
are continuous maps to $\mathbb R$ and $\mathbb R^3$ with units
$\mathrm{C\,m^{-3}}$ and $\mathrm{A\,m^{-2}}$.
The divergence and curl use their coordinate partial-derivative formulas;
for a $C^2$ vector field, divergence of curl vanishes, and continuous second
partial derivatives commute.
([[def-em-fields]], [[def-em-lab-geometry]], [[def-em-sources]],
[[def-divergence-and-curl-of-a-c1-vector-field]],
[[thm-the-divergence-of-a-curl-vanishes]], [[thm-clairaut-schwarz-mixed-partials]])

[F3] The SI constants satisfy $\varepsilon_0=(\mu_0c^2)^{-1}$, and
$[E_0]=\mathrm{V\,m^{-1}}$, $[A_0]=\mathrm{T\,m}$,
$[c]=\mathrm{m\,s^{-1}}$. ([[def-em-si-conventions]])

[F4] A potential pair satisfies $E=-\nabla\varphi-\partial_tA$ and
$B=\operatorname{curl}A$. ([[def-em-gauge-transformation]])

[F5] There exists a smooth cutoff $\chi:\mathbb R^3\to[0,1]$ equal to $1$
on the unit ball and $0$ outside the radius-two ball.
([[lem-schwartz-cutoffs-from-the-standard-smooth-step]])

[F6] The coordinate cross product satisfies
$x\times(0,g,0)=(-x_3g,0,x_1g)$ and is bilinear.
([[def-cross-product-in-r3]])

[F7] Continuous functions on cubes and their faces are Riemann integrable,
iterated integrals on product rectangles agree, the integral of a derivative
is the endpoint increment, and the integral is monotone under pointwise
inequalities. ([[def-multidimensional-rectangle-and-volume]],
[[def-multidimensional-darboux-integral]],
[[thm-continuous-on-a-rectangle-is-riemann-integrable]],
[[thm-riemann-fubini-on-product-rectangles]], [[thm-ftc-second-part]],
[[thm-multidimensional-integral-properties]])

## Verification

1.1 By [F5], $f$ and $g$ are smooth and compactly supported; $g=1$ on the
support of $f$. Scaling shows that $f=1$ on the ball of radius $L$, so the cube
$[-L/\sqrt3,L/\sqrt3]^3$ lies where $f=1$. Its positive volume and monotonicity
of the Riemann integral [F7] imply $\int f\,d^3x>0$. The maps $E,A,B,\rho,J$
in the Example are smooth, and [F4] gives $E=-\partial_tA$ and
$B=\operatorname{curl}A$. [given, F4, F5, F7, construct]

1.2 Direct differentiation gives
$\operatorname{div}E=E_0\partial_1f=\rho/\varepsilon_0$ and
$\operatorname{div}B=0$, since mixed partial derivatives cancel in the
divergence of a curl. Also $\partial_tB=-\operatorname{curl}E$, because
$\partial_tA=-E$, and $\partial_tE=0$. The definition
$J=\mu_0^{-1}\operatorname{curl}B$ gives
$\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$. Thus all four equations in
[A1] hold, with continuous sources. Moreover $\partial_t\rho=0$ and
$\operatorname{div}J=0$, so these sources satisfy continuity as well.
[step 1.1, A1, F2, F3, F4, algebra]

2.1 At $t=0$, all fields have compact support, so the boundary term in [F1]
vanishes on sufficiently large cubes. Gauss's equation in [A1] identifies
$\rho=\varepsilon_0\operatorname{div}E$, so [F1] leaves exactly the correction
$\int_{\mathbb R^3}\rho\,x\times A(x,0)\,d^3x$.
[step 1.2, A1, F1]

2.2 At $t=0$, $A=A_0g e_2$ and
$x\times A=A_0g(-x_3,0,x_1)$ by [F6]. On the support of $f$ and
$\partial_1f$, $g=1$ and $\partial_1g=0$. The FTC and iterated integration
in [F7] give
$\int x_3g\partial_1f\,d^3x=0$ and
$\int x_1g\partial_1f\,d^3x=-\int f\,d^3x$. Rescaling $y=x/L$ gives
$\int f(x)\,d^3x=L^3\int\chi(y)\,d^3y>0$. Hence
$\int\rho\,x\times A(x,0)\,d^3x
=-\varepsilon_0E_0A_0L^3(\int\chi(y)\,d^3y)e_3\ne0$.
[step 1.1, step 2.1, F2, F3, F6, F7, algebra]

3.1 The field is sourced: if $\partial_1f$ vanished identically, the FTC in
[F7] would make $f$ constant along every $x^1$-line. Compact support would
then make that constant zero, contradicting $f=1$ near the origin from step
1.1. Hence $\rho=\varepsilon_0E_0\partial_1f$ is not identically zero, and
this example lies outside the source-free packet domain in [F1]. The explicit
nonzero correction is the conditional sourced identity in part (b), not a
gauge-independent split for charged fields.
[step 1.1, step 2.2, F1, F2, F7] ∎
