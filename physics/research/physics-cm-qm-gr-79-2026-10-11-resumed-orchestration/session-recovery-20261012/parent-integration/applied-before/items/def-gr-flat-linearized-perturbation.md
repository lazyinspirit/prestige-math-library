---
id: def-gr-flat-linearized-perturbation
kind: definition
title: "Flat linearized perturbations: families, trace reversal, gauge transformation and harmonic gauge"
status: draft
origin: session
domain: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-minkowski-model-and-inertial-chart, def-gr-smooth-covariant-two-tensor-field, def-christoffel-symbols-of-an-affine-connection, def-gr-curvature-tensor-and-derived-tensors, def-gr-inverse-metric-and-musical-isomorphisms]
dependency_roles:
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: the linearized metric g = eta + h, the trace-reversed perturbation hbar and harmonic gauge, printed pp. 105-110 (PDF pp. 112-117); Ch. 6: the derivation of the linearized field equations (6.1)-(6.9), printed pp. 142-145 (PDF pp. 149-152)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 7.1: perturbations of the metric, the trace-reversed perturbation hbar_{ab} = h_{ab} - (1/2)h eta_{ab} and the gauge transformation h -> h + L_xi eta, printed pp. 86-90 (PDF pp. 87-91)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 5.1-5.1.2: the weak-field expansion g_{mu nu} = eta_{mu nu} + h_{mu nu}, gauge freedom, the trace-reversed tensor and the harmonic (de Donder) gauge condition, printed pp. 205-210 (PDF pp. 212-217)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Definition

Let $(M,g,N)$ be the flat model of
[[def-gr-minkowski-model-and-inertial-chart]] with inertial chart $x$ and
constant metric components $\eta_{ab}=\operatorname{diag}(-1,1,1,1)$, and let
$\Omega\subseteq M$ be a nonempty open set, identified with its image under
$x$; all components below are taken in the inertial chart. Let $c>0$ be a
real parameter.

**(a) Flat linearized family.** A **flat linearized family over $\Omega$**
consists of a number $\varepsilon_1>0$, a smooth symmetric covariant
$2$-tensor field $h$ on $\Omega$ with components $h_{ab}$
([[def-gr-smooth-covariant-two-tensor-field]]) — the **first-order
perturbation** — and a smooth family $q$ of symmetric component fields
$q_{ab}(\lambda,p)$, defined for $\lambda\in(-\varepsilon_1,\varepsilon_1)$
and $p\in\Omega$, such that for every $\lambda$ with
$0<|\lambda|<\varepsilon_1$ the component field

$$g_{ab}(\lambda,p):=\eta_{ab}+\lambda\,h_{ab}(p)+\lambda^2\,q_{ab}(\lambda,p)$$

is the component field of a smooth Lorentzian metric $g(\lambda)$ on
$\Omega$ of signature $(-,+,+,+)$; $q$ is the **normalized remainder**. The
family is thus normalized so that $g(0)=\eta$ is its value at
$\lambda=0$ and $h=\partial_\lambda g(\lambda)|_{\lambda=0}$. No assumption
is made that $g(\lambda)$ solves any field equation; the metrics $g(\lambda)$
are the mathematical input of the linearization.

**(b) First-order coefficients.** Let $A(\lambda)$ stand for any of the
component families $\Gamma^a{}_{bc}(g(\lambda))$,
$\operatorname{Ric}_{ab}(g(\lambda))$, $S(g(\lambda))$,
$G_{ab}(g(\lambda))$ of the metric-selected connection of $g(\lambda)$; these
are smooth in $(\lambda,p)$ because the Christoffel symbols, the curvature
components and the inverse metric are smooth functions of the metric
components and their derivatives
([[def-christoffel-symbols-of-an-affine-connection]],
[[def-gr-curvature-tensor-and-derived-tensors]]). Define the **first-order
coefficients**

$$\Gamma^{(1)a}{}_{bc}:=\partial_\lambda\Gamma^a{}_{bc}(g(\lambda))\big|_{\lambda=0},\quad \operatorname{Ric}^{(1)}_{ab}:=\partial_\lambda\operatorname{Ric}_{ab}(g(\lambda))\big|_{\lambda=0},$$
$$S^{(1)}:=\partial_\lambda S(g(\lambda))\big|_{\lambda=0},\qquad G^{(1)}_{ab}:=\partial_\lambda G_{ab}(g(\lambda))\big|_{\lambda=0}.$$

**(c) Index conventions.** Indices on first-order quantities are raised and
lowered with the flat metric $\eta$ and its inverse $\eta^{ab}$
([[def-gr-inverse-metric-and-musical-isomorphisms]]): $\partial^a:=\eta^{ab}\partial_b$,
$h^{ab}:=\eta^{ac}\eta^{bd}h_{cd}$, and

$$\Box:=\eta^{ab}\partial_a\partial_b=-\partial_0^2+\partial_1^2+\partial_2^2+\partial_3^2$$

is the **d'Alembertian** of the flat metric, applied componentwise to
component families. The **trace** of $h$ and the **trace-reversed
perturbation** are

$$h:=\eta^{ab}h_{ab},\qquad \bar h_{ab}:=h_{ab}-\tfrac12\,h\,\eta_{ab} .$$

The inverse passage is the same formula, $\bar h_{ab}$'s trace being
$\eta^{ab}\bar h_{ab}=h-2h=-h$: explicitly

$$h_{ab}=\bar h_{ab}-\tfrac12\,\eta_{ab}\,\eta^{cd}\bar h_{cd} .$$

**(d) Gauge transformation.** For a smooth covector field $\xi_b$ on
$\Omega$ define the **gauge-transformed first-order perturbation**

$$h'_{ab}:=h_{ab}-\partial_a\xi_b-\partial_b\xi_a .$$

This is the first-order perturbation of the pullback family
$\Phi_{-\lambda}^*g(\lambda)$ along the local flows $\Phi_s$ of the vector
field $\xi^a=\eta^{ab}\xi_b$, that is, the perturbation produced by the
infinitesimal chart change $x'^a=x^a+\lambda\xi^a$ and re-read on the fixed
inertial chart; the transformation of the metric components displayed here
is the linearization of the Jacobian transformation law, and
its consequences for $\bar h$ and for $\operatorname{Ric}^{(1)}$, $S^{(1)}$
and $G^{(1)}$ are proved separately on this page (the first-order curvature
and gauge theorem that follows this definition).
The perturbation $h$ is **in harmonic gauge** (also called de Donder gauge)
when

$$\partial^a\bar h_{ab}=0 .$$

**(e) Scope.** This item fixes the objects of the flat linearization: the
normalized family, the first-order coefficients defined as exact
$\lambda$-derivatives, the trace reversal, the d'Alembertian and the gauge
transformation. It asserts no explicit formula for the first-order
coefficients, no existence of a gauge representative satisfying (d), no
solution of any linearized field equation and no physical interpretation;
those are separate results. The notation is tied to the inertial chart: a
change of chart is a different operation from the gauge transformation (d),
which changes the metric family inside the fixed chart.
