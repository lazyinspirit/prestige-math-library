---
id: def-em-sources
kind: definition
title: "Charge parameter, frame charge and current densities, volume charge and flux, and the four-current"
status: published
origin: session
domain: physics
deps: [def-em-lab-geometry, def-em-si-conventions, def-oriented-unit-normal-and-flux-of-a-surface-patch, def-riemann-integral-over-a-jordan-set, thm-sr-tensor-and-current-transformation, thm-sr-proper-time-and-observer-decomposition, def-countable-choice, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, thm-continuous-functions-on-compact-jordan-sets-are-integrable, lem-riemann-lebesgue-comparison-for-distribution-test-integrands, thm-extreme-value-metric, thm-continuous-preimages-of-borel-sets-are-borel, thm-borel-sets-are-lebesgue-measurable, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, prop-closure-properties-of-measurable-functions-used-by-the-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral]
dependency_roles:
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-oriented-unit-normal-and-flux-of-a-surface-patch: mathematical-premise
  def-riemann-integral-over-a-jordan-set: mathematical-premise
  thm-sr-tensor-and-current-transformation: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-countable-choice: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  thm-continuous-functions-on-compact-jordan-sets-are-integrable: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
  thm-borel-sets-are-lebesgue-measurable: mathematical-premise
  prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets: mathematical-premise
  prop-closure-properties-of-measurable-functions-used-by-the-integral: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  prop-the-nonnegative-integral-agrees-with-the-simple-integral: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Charge and current sources of the classical electromagnetic framework in a named inertial laboratory frame: the charge parameter, smooth frame densities and their volume charge and flux integrals, and the adopted identification of the charge-current with a vector field of the Minkowski model. Point and sheet sources are excluded here and are defined by their own pairings; the item asserts no conservation law and no empirical measurement. Its optional convective branch identifies a scalar multiplier as rest charge density only when the material proper-time four-velocity normalization is explicitly adopted; the general future-timelike factorization is retained without that identification. The original compact Jordan/Riemann charge branch remains valid. The full bounded Lebesgue-measurable volume branch with compact closure inside the laboratory region is retained under the exact Countable Choice cost; no singular-source Maxwell postulate is supplied by that extension."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§1.1 printed pp. 2-3 (charge q in R and the Coulomb; charge density rho with Q = integral of rho; current density J with I = surface integral of J; smooth densities and the point density q delta(x - r(t))); read in the stamped 236-page PDF"
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§28 printed pp. 69-71 (the four-dimensional current vector j^i = (c rho, j) and the transformation of the charge-current) and §29 printed pp. 71-73 (the equation of continuity), read in the stamped 387-page full text in the Gaussian-unit conventions that the framework re-expresses in SI"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§7.3.3 printed pp. 326-327 (eq. (7.41): the continuity equation) and §8.3 printed pp. 356-358 (charge conservation and Maxwell's equations), read in the stamped scanned full text"
---

## Definition

Let the laboratory region and its chart be those of [[def-em-lab-geometry]], with
the units of [[def-em-si-conventions]].

(a) [Charge parameter] The framework takes a real **charge parameter**
$q\in\mathbb R$, measured in coulombs, attached to a source; its sign is the
sign of the source and it is a parameter of the model. Charge quantisation is
not asserted.

(b) [Smooth source fields] A **smooth (volume) source field** on
$\Omega\times I$ is a pair $(\rho,J)$ of maps $\rho:\Omega\times I\to\mathbb R$,
$J:\Omega\times I\to\mathbb R^3$ that is continuous on $\Omega\times I$ and of
class $C^1$ wherever a displayed equation differentiates it; $\rho$ is the
**frame charge density** (C m$^{-3}$) and $J$ the **frame current density**
(A m$^{-2}$). For each fixed $t\in I$ retain the compact Jordan branch: if
$V\subseteq\Omega$ is compact and Jordan measurable, define

$$Q_R(V,t):=\int_V\rho(y,t)dy$$

by [[def-riemann-integral-over-a-jordan-set]], with integrability supplied by
[[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]. For the
full measurable-volume branch assume Countable Choice ([[def-countable-choice]]),
as required by the published Lebesgue-measure interface. If $V$ is any bounded
Lebesgue-measurable subset with compact closure $\overline V\subseteq\Omega$,
define

$$Q(V,t):=\int_V\rho(y,t)d\lambda_3(y)=\int_{\mathbb R^3}F_t(y)\mathbf{1}_V(y)d\lambda_3(y),$$

where $F_t=\rho(\cdot,t)$ on $\Omega$ and $0$ elsewhere; the signed integral is
defined through its positive and negative parts
([[def-integral-over-a-measurable-set]],
[[def-integrable-real-and-complex-functions-and-their-integrals]]). The
function $F_t$ is Borel, and hence Lebesgue measurable: for every open
$O\subseteq\mathbb R$ its preimage inside the open set $\Omega$ is relatively
open in $\Omega$, hence open in $\mathbb R^3$, and the closed complement of
$\Omega$ is added precisely when $0\in O$
([[thm-continuous-preimages-of-borel-sets-are-borel]],
[[thm-borel-sets-are-lebesgue-measurable]]). This integral is absolutely
finite: $\rho(\cdot,t)$ is bounded on the compact $\overline V$ by
[[thm-extreme-value-metric]], $V$ has finite Lebesgue measure by
[[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], and the
monotonicity and homogeneity of the nonnegative integral
([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]) bound
$\int|F_t|\mathbf{1}_Vd\lambda_3\le M_t\lambda_3(V)<\infty$, the indicator
integral being its simple-function value
([[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]); the
positive and negative parts are measurable by
[[prop-closure-properties-of-measurable-functions-used-by-the-integral]]. On
the compact Jordan branch, under the same Countable Choice assumption,
$Q=Q_R$ by [[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]].
The
empty region has charge zero in both branches. The current flux remains
defined independently: for each oriented surface patch in $\Omega$ the current
flux at time $t$ is the surface integral of $J(\cdot,t)$ in the induced
orientation, as defined in [[def-oriented-unit-normal-and-flux-of-a-surface-patch]].
Point sources and sheet sources are not source fields in this sense; they are
different objects, defined by their own pairings when the framework uses them.

(c) [Covariant identification] Write $j:=(c\rho,J)$, so $j^0=c\rho$ and
$j^i=J^i$. The framework adopts as a model premise the identification of the
charge-current of a source with a vector field of the affine Minkowski model,
and hence the component transformation law of
[[thm-sr-tensor-and-current-transformation]] for $j$ between inertial charts.
This is a model premise, not a theorem about physical currents.

(d) [Frame density, scalar multiplier and the normalized material branch]
Suppose additionally that the identified $j$ is $C^1$ and $j=\rho_0U$, with a
$C^1$ future timelike vector field $U$ and a $C^1$ real scalar multiplier
$\rho_0$. Since $U^0>0$, define the normalized chart direction $u:=U/U^0$, so
$u^0=1$, $u^i=U^i/U^0$. Then $j=(\rho_0U^0)u$ and, because the electromagnetic
convention is $j^0=c\rho$,

$$\rho=\rho_0U^0/c,\qquad J^i=\rho_0U^i=c\rho\,u^i.$$

Pointwise equality $\rho=\rho_0$ holds if and only if $\rho_0(U^0-c)=0$,
including the zero-multiplier case. Where $\rho_0\ne0$, equality is equivalent
to $U^0=c$, which does not alone imply $U^i=0$ for an arbitrary future timelike
$U$. Thus a scalar multiplier is not automatically a Lorentz rest charge
density. The direction $u$ is chart normalized, with no unit or
proper-four-velocity normalization imposed in this general branch; if its
coordinate velocity interpretation is adopted, the spatial velocity is
$v^i:=cu^i$.

For the separate convective source model, explicitly assume that $U$ is the
material proper-time four-velocity, normalized by $\eta(U,U)=-c^2$ as in
[[thm-sr-proper-time-and-observer-decomposition]]. This is an additional model
condition, not a consequence of the factorization $j=\rho_0U$. In that branch,
$U=\gamma(c,v)$, $|v|<c$, $\gamma=(1-|v|^2/c^2)^{-1/2}$, and

$$\rho=\gamma\rho_0,\qquad J=\rho v.$$

Here $\rho_0$ is the rest charge density of this stipulated convective model:
in a comoving inertial frame $U=(c,0,0,0)$ and $j=(c\rho_0,0,0,0)$. The
equality $\rho=\rho_0$ then holds exactly where $\rho_0=0$ or $v=0$
(equivalently $\gamma=1$). Both signs of charge and the zero-density case are
retained.

(e) [Scope] This definition fixes the source objects of the smooth branch and
their transformation interface. It asserts no conservation law (that is proved
for stated source classes) and no regularity of singular sources.
