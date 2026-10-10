---
id: post-em-vacuum-maxwell
kind: postulate
title: "The microscopic vacuum Maxwell equations: smooth and weak branches"
status: draft
origin: session
domain: physics
deps: [def-directional-and-partial-derivatives, def-distribution, def-distributional-derivative, def-divergence-and-curl-of-a-c1-vector-field, def-em-fields, def-em-lab-geometry, def-em-si-conventions, def-em-sources, def-regular-distribution-from-a-locally-integrable-function, def-test-function-space-d-of-an-open-set, thm-locally-integrable-functions-embed-in-distributions]
dependency_roles:
  def-directional-and-partial-derivatives: mathematical-premise
  def-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The adopted microscopic vacuum Maxwell equations of the classical framework, in both a smooth (pointwise) branch for jointly C^1 fields and a weak (distributional) branch for locally integrable fields and sources, in a named inertial chart with SI constants. No magnetic charge, no singular point or sheet source and no material constitutive law is included; the equations are adopted assumptions and are not claimed to describe nature exactly."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Mathematical Tripos lecture notes (Lent Term, 2015; 236 PDF pages)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Cover: Lent Term, 2015. §1.2.1 printed p. 6 (PDF p. 14), equations (1.4)-(1.7) in SI units (div E = rho/eps_0, div B = 0, curl E + d_t B = 0, curl B - mu_0 eps_0 d_t E = mu_0 J). The notes also print the pre-2019 exact value mu_0 = 4pi x 10^-7, which this framework does not adopt as exact"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§7.3.3 printed p. 326 (PDF p. 342), Maxwell equations (7.39), the rearranged form (7.42), and continuity equation (7.41); equation (7.40) is the separate Lorentz force law. §7.3.4 printed pp. 327-328 (PDF pp. 343-344) discusses magnetic-charge terms, which are absent in the adopted equations"
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§26 printed pp. 66-67 (PDF pp. 78-79), equations (26.1)-(26.2): curl E = -(1/c) dH/dt and div H = 0; §30 printed pp. 73-75 (PDF pp. 85-87), equations (30.2)-(30.4): the second pair and its three-dimensional form. These are Gaussian-unit formulations; the adopted equations here use the SI conventions of def-em-si-conventions"
---

## Postulate

Adopt as a physical postulate of this framework the following four equations for
the fields of [[def-em-fields]] and the sources of [[def-em-sources]] on the
laboratory region $U\cong I\times\Omega$ of [[def-em-lab-geometry]], with
$\mu_0>0$, $c>0$, $\varepsilon_0=(\mu_0c^2)^{-1}$ and the SI units of
[[def-em-si-conventions]].

(a) [Smooth branch] Let $E,B$ be jointly $C^1$ fields with the additional
derivatives required by each equation existing and continuous, and let
$\rho,J$ be continuous. Then, with the divergence and curl of
[[def-divergence-and-curl-of-a-c1-vector-field]] and the partial derivative
$\partial_t$ at fixed position of
[[def-directional-and-partial-derivatives]],

$$\operatorname{div}E=\rho/\varepsilon_0,\qquad \operatorname{div}B=0,\qquad \operatorname{curl}E=-\partial_tB,\qquad \operatorname{curl}B=\mu_0J+c^{-2}\partial_tE.$$

(b) [Weak branch] Let instead $E,B$ be locally integrable $\mathbb R^3$-valued
fields and $\rho,J$ locally integrable scalar and vector fields on
$I\times\Omega$, identified with their regular distributions
([[def-regular-distribution-from-a-locally-integrable-function]],
[[thm-locally-integrable-functions-embed-in-distributions]]). Let
$\operatorname{div}$, $\operatorname{curl}$ and $\partial_t$ act as
distributional derivatives, componentwise, and let $\psi$ range over
$C_c^\infty(I\times\Omega)$ ([[def-test-function-space-d-of-an-open-set]]).
Then the same four identities hold in the sense of [[def-distribution]]: the
pairings

$$\langle\operatorname{div}E-\rho/\varepsilon_0,\psi\rangle,\qquad \langle\operatorname{div}B,\psi\rangle,\qquad \langle\operatorname{curl}E+\partial_tB,\psi\rangle,\qquad \langle\operatorname{curl}B-\mu_0J-c^{-2}\partial_tE,\psi\rangle$$

all vanish for every such $\psi$, all derivatives being distributional
derivatives ([[def-distributional-derivative]]).

(c) [Scope] The postulate contains no magnetic charge: $\operatorname{div}B=0$
and no magnetic-source term appears in $\operatorname{curl}E$. Sources that
are not locally integrable functions (point or sheet sources) are covered by
neither branch and require their own definition. The equations are adopted
classical vacuum physics in the named inertial chart; they are not deduced from
charge conservation, from empirical agreement or from the special-relativity
postulates, and this item by itself asserts no covariance under changes of
inertial frame.
