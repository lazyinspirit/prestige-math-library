---
id: def-gr-barotropic-enthalpy-variable
kind: definition
title: "The barotropic enthalpy variable r(epsilon): definition, strict monotonicity and the symmetric form of the fluid equations"
status: draft
origin: session
domain: mathematics
dependency_level: 8
provenance:
  statement: ai-altered
  proof: not-applicable
proof_strategy: null
deps: [def-gr-perfect-fluid-matter-model, prop-gr-dust-and-perfect-fluid-conservation-equations, def-gr-inverse-metric-and-musical-isomorphisms, def-c-r-and-smooth-maps-between-smooth-manifolds, cor-ftc-integral-function-differentiable-almost-everywhere, thm-continuous-implies-integrable, def-countable-choice]
dependency_roles:
  def-gr-perfect-fluid-matter-model: mathematical-premise
  prop-gr-dust-and-perfect-fluid-conservation-equations: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  cor-ftc-integral-function-differentiable-almost-everywhere: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 4.2 (The Einstein-Euler System): the hyperbolic reduction of the Einstein-Euler system, the positivity conditions on specific enthalpy and speed of sound (4.38), the frame variables and their reduced equations, and the pressure-free (dust) subsidiary system of Sections 4.2.4-4.2.5, equations (4.26)-(4.48) and (4.56)-(4.63)"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "I. Rodnianski and J. Speck, The Stability of the Irrotational Euler-Einstein System with a Positive Cosmological Constant, arXiv:0911.5501 (v2, 2010), Sections 1 and 3: the Euler-Einstein system, the speed-of-sound hypotheses 0<cs<1 for a barotropic fluid (Postulate (4)), the sound cone and the wave-equation formulation of the fluid equations"
      url: "https://arxiv.org/pdf/0911.5501"
verification:
  precheck: pending
---

## Definition

Assume the Axiom of Countable Choice for the integral below
([[def-countable-choice]]). Let a perfect-fluid model on a Lorentzian manifold
be given with smooth equation of state $p=p(\epsilon)$ defined on an open
interval $J\subseteq\mathbb R$, with $\epsilon+p(\epsilon)>0$ and
$p'(\epsilon)>0$ for all $\epsilon\in J$
([[def-gr-perfect-fluid-matter-model]]). Fix a base point
$\epsilon_*\in J$ and define the **barotropic enthalpy variable**
$$r:J\to\mathbb R,\qquad r(\epsilon):=\int_{\epsilon_*}^{\epsilon}\frac{\sqrt{p'(z)}}{z+p(z)}\,dz .$$
The integrand is continuous on $J$ ([[thm-continuous-implies-integrable]]), so
$r$ is well defined and $C^1$ with $r'(\epsilon)=\sqrt{p'(\epsilon)}/(\epsilon+p(\epsilon))>0$
([[cor-ftc-integral-function-differentiable-almost-everywhere]]); hence $r$
maps $J$ diffeomorphically onto the open interval $r(J)$, and we write
$\epsilon(r)$ for its inverse and $c_s:=\sqrt{p'}$ for the **sound-speed
function**, so that $r'(\epsilon)=c_s(\epsilon)/(\epsilon+p(\epsilon))$ and
$c_s\in(0,1)$ when $0<p'<1$ is assumed.

The definition and the two displayed equivalences are the form in which the
fluid system is fed into [[lem-gr-barotropic-fluid-symmetric-hyperbolic-system]];
no existence theorem is asserted here.
