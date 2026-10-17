---
id: post-emg-strict-charged-fluid-model
kind: postulate
title: "Adopted strict charged barotropic fluid model"
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 2
deps:
  - def-emg-strict-charged-barotropic-system
  - def-emg-geometry-units
dependency_roles:
  def-emg-strict-charged-barotropic-system: mathematical-premise
  def-emg-geometry-units: formulation-prerequisite
physical_scope: >
  An adopted smooth classical charged perfect-fluid material closure for the
  strict interior barotropic Einstein-Maxwell model, with an EOS-defined
  number-density variable and advected charge per particle. It adds no matter
  action and makes no claim that a real material universally obeys this closure.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Yvonne Choquet-Bruhat, Introduction to General Relativity, Black Holes, and Cosmology, Oxford University Press, open-access first edition (2023), Chapter IX, Relativistic fluids"
      url: "https://inspirehep.net/files/b6b9e25e70e9a80e6aa13c2611ae4a76"
      locator: "Complete 300-page PDF inspected; §§IX.3–IX.4 and IX.13.1–IX.13.2, printed pp. 210–216 and 227–228."
    - title: "Benoit Pausader, Relativistic Fluid Equations, complete Brown University lecture notes (16 pages, undated)"
      url: "https://www.math.brown.edu/bpausade/Relativistic%20fluid.pdf"
      locator: "Complete notes inspected; §§1.3–1.5 and 2.1.1–2.2.1, printed pp. 2–5 and 7–9."
    - title: "Daniela Pugliese and Juan A. Valiente Kroon, On the evolution equations for ideal magnetohydrodynamics in curved spacetime, arXiv:1112.1525v2 (2012)"
      url: "https://arxiv.org/pdf/1112.1525"
      locator: "Full 25-page PDF fetched; abstract/introduction and §3.3 inspected for charged Einstein-Maxwell-Euler model context."
verification:
  precheck: n/a
---

## Postulate

Use the smooth oriented, time-oriented Lorentzian four-manifold, metric-selected
connection, signature $(-,+,+,+)$, two-form field, and SI conventions stated in
[[def-emg-geometry-units]] and [[def-emg-strict-charged-barotropic-system]].
On an open set $U$ of that spacetime, let $\epsilon:U\to J$ be a smooth
rest-energy-density scalar, let $u$ be a smooth future-directed vector field
with $g(u,u)=-1$, and let $Z:U\to\mathbb R$ be a smooth charge-per-particle
scalar. Here $J\subseteq\mathbb R$ is an open interval, $\epsilon$ and
$p(\epsilon)$ have units J m$^{-3}$ = Pa, $u$ is dimensionless, and $Z$ has
units C. In this adopted model, the word *barotropic* means that pressure is a
function of rest-energy density alone.

Adopt a smooth equation of state $p:J\to\mathbb R$ satisfying
$$\epsilon+p(\epsilon)>0,\qquad 0<p'(\epsilon)<1$$
for every $\epsilon\in J$. The dimensionless derivative gives the model's
barotropic characteristic speed $c_{\mathrm s}:=c\sqrt{p'(\epsilon)}$, so
this selection requires $0<c_{\mathrm s}<c$. Fix $\epsilon_*\in J$ and a
positive normalization $N_*>0$ with units m$^{-3}$, and define
$$N(\epsilon):=N_*\exp\!\left(\int_{\epsilon_*}^{\epsilon} \frac{dz}{z+p(z)}\right).$$
For each $\epsilon\in J$, the closed segment between $\epsilon_*$ and
$\epsilon$ is compact and contained in $J$; the smooth integrand is finite
there. Its integral is dimensionless, so $N(\epsilon)>0$ has units m$^{-3}$.
Within this model, $N$ is the EOS-defined number-density variable and $N_*$
is its chosen normalization. This definition makes no claim that a microscopic
particle theory derives $N$ for every EOS.

Adopt the charged-fluid current and matter stress tensor
$$j^a:=cN(\epsilon)Zu^a,\qquad T_{m,ab}:=(\epsilon+p(\epsilon))u_a u_b+p(\epsilon)g_{ab},$$
and the material balance and advection equations
$$\nabla^aT_{m,ab}=F_{bc}j^c,\qquad u^a\nabla_aZ=0.$$
Thus $j$ is a smooth four-current with components in A m$^{-2}$, and $T_m$
has components in Pa in length coordinates $x^0=ct$. The balance law adopts
the Lorentz-force density with the same field and current conventions as the
chosen Einstein-Maxwell formulation. Charge-per-particle is carried along the
fluid flow. Current conservation is not an additional adopted material law.

This is a physical postulate for smooth classical matter in the strict interior
regime only. It excludes shocks, vacuum interfaces, free boundaries, degenerate
or superluminal sound speed, finite-conductivity and dissipative currents,
point-charge sources, and arbitrary currents chosen independently of the
fluid. The cited treatments motivate the perfect-fluid and charged-current
structures in their own conventions; they do not establish this exact EOS
normalization, the $Z$ transport choice, or the physical applicability of this
model. No matter action, experiment, or universal material law is asserted.
