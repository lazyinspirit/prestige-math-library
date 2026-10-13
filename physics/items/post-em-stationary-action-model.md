---
id: post-em-stationary-action-model
kind: postulate
title: "Adopt stationary Maxwell action as alternative physical formulation"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: physics
dependency_level: 15
deps: [def-em-field-action-definition]
dependency_roles:
  def-em-field-action-definition: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adopted formulation principle: stationarity of the precisely defined smooth finite-region field action and of the fixed-endpoint particle functional under the declared variations, as an alternative presentation of the field equations and the force law. Not asserted: minimality, existence, uniqueness, symmetry-forcing, uniqueness of the action, coupling of the sectors, or any empirical claim."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "David Tong, Electromagnetism (University of Cambridge Part II Mathematical Tripos), Chapter 5, §5.5"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro4.pdf"
      locator: "§5.5.1-§5.5.3, printed pp. 118-127 (the action principle is introduced and used, not derived)"
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields (Course of Theoretical Physics vol. 2, English text, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§16 printed p. 44, footnote 2: the form of the interaction term 'cannot be fixed on the basis of general considerations alone'; §27 printed pp. 67-68"
---

## Postulate

Adopt as a physical formulation principle of this framework, as an alternative
to postulating the field equations and the force law directly, the following
assumption about the functionals, variation classes and stationarity predicate
of [[def-em-field-action-definition]].

(i) [Field sector] A smooth field $A:N\to\mathbb R^4$ on the region $U$ of
clause (a) of that definition is dynamically admissible exactly when it is
stationary for the field action $S[A]$ under all compactly supported smooth
variations $h\in C_c^\infty(U;\mathbb R^4)$ in the sense of clause (b) of that
definition: $\frac{d}{ds}\big|_{s=0}S[A+sh]=0$ for every such $h$.

(ii) [Particle sector] For a prescribed external four-potential $A_\mu$ on a
neighbourhood of the image of a $C^2$ future timelike massive worldline $X$,
the motion is dynamically admissible exactly when $X$ is stationary for the
particle functional $S_{\rm pt}$ of clause (c) of that definition under all
fixed-endpoint $C^2$ variations.

This is an adopted assumption of the model, not a theorem, not a derivation
from the remaining postulates and not an empirical result. It asserts
stationarity only: it does not assert that a stationary configuration is a
local or global minimum, that stationary configurations exist or are unique,
that the action functional is uniquely determined or forced by symmetry, that
no other action formulation is possible, or that the two sectors can be
coupled into a single well-posed action for singular sources. No Noether
theorem, no symmetry-to-conservation machinery and no matter dynamics beyond
the prescribed potential are assumed.

The conditional deductions of this pair are: on the declared smooth classes,
(i) is equivalent to the inhomogeneous tensor field equation
$\partial_\mu F^{\mu\nu}=-\mu_0j^\nu$ and, for potential-represented fields, to
the smooth-branch Maxwell equations, and (ii) is equivalent to the framework's
adopted four-force equation $m\,dU/d\tau=q\,\Phi(U)$; both deductions are
recorded separately on this page and in
[[pthm-em-action-maxwell-variation]] and
[[pthm-em-particle-action-coupling]], and this postulate asserts neither.

## Source notes

The cited treatments present the action principle of classical
electrodynamics as adopted, not derived: Tong §5.5 introduces the action and
obtains the field equations from its variation, and Landau–Lifshitz §16 states
in the footnote on p. 44 that the form of the interaction term cannot be fixed
on general considerations alone. The Gaussian-unit expressions of the
monograph are read only for the structure of the principle; the functionals
adopted here are exactly the SI functionals of
[[def-em-field-action-definition]]. No measurement, no empirical claim and no
uniqueness of the formulation is contained in this item.
