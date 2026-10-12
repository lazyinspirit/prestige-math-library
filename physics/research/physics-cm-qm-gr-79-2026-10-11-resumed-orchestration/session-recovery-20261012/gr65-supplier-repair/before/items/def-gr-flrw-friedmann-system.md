---
id: def-gr-flrw-friedmann-system
kind: definition
title: "The Friedmann, acceleration and continuity equations of an FLRW model datum"
status: draft
origin: session
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-flrw-model-data, def-c-r-and-smooth-maps-between-smooth-manifolds, def-interval, def-derivative]
dependency_roles:
  def-gr-flrw-model-data: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-interval: mathematical-premise
  def-derivative: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 8 (8.20)-(8.23) and (8.35)-(8.36): the conservation equation, the equation of state p = w rho and the two Friedmann equations, printed pp. 221-223 (PDF pp. 228-230)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.6.2: the continuity equation, the Friedmann equation (4.66) and the acceleration equation (4.67) with the cosmological term, printed pp. 201-203 (PDF pp. 208-210)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "D. Tong, Cosmology (Cambridge Part III Mathematical Tripos, 2019 revision), section 1.2.2 and section 1.2.3: the continuity equation (1.39), the Friedmann equation (1.42) with c restored, printed pp. 28-29 (PDF pp. 34-35)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/cosmo/cosmo.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Data.** A **Friedmann-system datum** is a tuple

$$(c,G_N,\Lambda,I,k,a,\varepsilon,p)$$

consisting of positive real constants $c>0$ and $G_N>0$, a real constant
$\Lambda\in\mathbb R$, a nonempty open interval $I\subseteq\mathbb R$
([[def-interval]]), a real number $k$ (the **curvature parameter** of the
datum), and smooth functions $a:I\to(0,\infty)$, $\varepsilon:I\to\mathbb R$
and $p:I\to\mathbb R$, with values in the open interval of strictly positive
reals in the case of $a$
([[def-c-r-and-smooth-maps-between-smooth-manifolds]]). We write
$\dot a,\ddot a,\dot\varepsilon$ for the derivatives of these functions of one
variable and

$$H:=\frac{\dot a}{a}:I\to\mathbb R$$

for the **Hubble parameter** of the datum ([[def-derivative]]). No relation
between $k$ and the three signs $\{-1,0,1\}$ is imposed by this definition;
the spatial model data of [[def-gr-flrw-model-data]] restrict to those signs,
and the real parameter is used so that the equations can also be examined
after a rescaling of the spatial metric.

**(b) The equations.** For a Friedmann-system datum define the following three
scalar equations on $I$:

**(F) The Friedmann equation.**

$$H(t)^2+\frac{kc^2}{a(t)^2}=\frac{8\pi G_N}{3c^2}\,\varepsilon(t)+\frac{\Lambda c^2}{3}\qquad\text{for all }t\in I;$$

**(A) The acceleration equation.**

$$\frac{\ddot a(t)}{a(t)}=-\frac{4\pi G_N}{3c^2}\bigl(\varepsilon(t)+3p(t)\bigr)+\frac{\Lambda c^2}{3}\qquad\text{for all }t\in I;$$

**(C) The continuity equation.**

$$\dot\varepsilon(t)+3H(t)\bigl(\varepsilon(t)+p(t)\bigr)=0\qquad\text{for all }t\in I .$$

We also record the **spatial-component equation**

**(S)**

$$-\frac{2a(t)\ddot a(t)+\dot a(t)^2}{c^2}-k+\Lambda a(t)^2=\frac{8\pi G_N}{c^4}\,p(t)\,a(t)^2\qquad\text{for all }t\in I .$$

Each of (F), (A), (C), (S) is an equality of real numbers at each point of
$I$; the equations involve the data of clause (a) alone. Their relation to the
curvature components of an FLRW metric, and their logical relations among one
another, are the content of the results on this page and are not asserted by
this definition. In particular, this definition adopts no equation of state:
a relation $p=P(\varepsilon)$, when used, is an additional datum.

## Remarks

- **Origin of the equations.** In the physical model the three equations are
  the reductions of the field law and of the matter conservation identity for
  a homogeneous and isotropic metric with a comoving fluid; the stress-energy
  input supplies $\varepsilon$ and $p$, and the cosmological parameter enters
  through $\Lambda$. The equations as displayed are purely mathematical
  relations among the numerical data; the physical derivation and the meaning
  of $c,G_N,\Lambda,\varepsilon,p$ belong to the postulates and to the
  physics theorems of this page.

- **Units.** With $t$ in seconds, $a$ in metres, $c$ in metres per second,
  $G_N$ in $\mathrm m^3\,\mathrm{kg}^{-1}\,\mathrm s^{-2}$ and
  $\varepsilon,p$ in $\mathrm J\,\mathrm m^{-3}$, equation (F) is
  dimensionally homogeneous: $H^2$, $kc^2/a^2$,
  $8\pi G_N\varepsilon/(3c^2)$ and $\Lambda c^2/3$ all carry
  $\mathrm s^{-2}$, and (A) and (C) carry $\mathrm s^{-2}$ and
  $\mathrm J\,\mathrm m^{-3}\,\mathrm s^{-1}$ respectively. These unit readings
  belong to the framework's convention item and are not part of the
  mathematical definition.
