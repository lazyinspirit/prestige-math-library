---
id: rem-gr-mghd-scope
kind: remark
title: "Scope and empirical qualifications of the maximal globally hyperbolic development: model content, idealisations, and no observational claims"
status: draft
origin: session
domain: physics
physical_scope: "Conditional classical general relativity for smooth globally hyperbolic developments of a fixed admissible covariant coupled matter model with compatible complete Cauchy data and the stated analytic and geometric hypotheses. This remark records the existing mathematical choice premises, regularity, idealisations and empirical limits; it reports no measurement or claim about the observed universe."
dependency_level: 42
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [pthm-gr-smooth-maximal-development, thm-gr-smooth-maximal-globally-hyperbolic-development, post-gr-einstein-field-law, post-gr-spacetime-and-classical-domain, post-gr-field-and-matter-assumptions, def-gr-development-and-data-fixing-isometry, thm-gr-high-regularity-selected-matter-development]
dependency_roles:
  pthm-gr-smooth-maximal-development: physical-result
  thm-gr-smooth-maximal-globally-hyperbolic-development: mathematical-premise
  post-gr-einstein-field-law: physical-assumption
  post-gr-spacetime-and-classical-domain: physical-assumption
  post-gr-field-and-matter-assumptions: physical-assumption
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  thm-gr-high-regularity-selected-matter-development: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): Theorem 2.8 and the surrounding discussion of extensions and isometry classes, printed pp. 12 and 20-24"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "Y. Choquet-Bruhat and R. Geroch, Global aspects of the Cauchy problem in general relativity, Communications in Mathematical Physics 14 (1969), 329-335: the original statement of maximality and uniqueness in the vacuum case"
      url: "https://doi.org/10.1007/BF01645389"
verification:
  precheck: n/a
---

## Scope and empirical qualifications

This remark records how [[pthm-gr-smooth-maximal-development]] is to be
read; it adds no new mathematical claim.

**(a) The deduction is conditional on the adopted postulates.** The
existence and uniqueness of the maximal development is a logical consequence
of [[post-gr-einstein-field-law]],
[[post-gr-spacetime-and-classical-domain]],
[[post-gr-field-and-matter-assumptions]] and the mathematical theorem
[[thm-gr-smooth-maximal-globally-hyperbolic-development]], applied to data
that satisfy the constraints, complete-data regularity and actual local existence/geometric uniqueness/restart hypotheses of the fixed admissible coupled model in [[def-gr-development-and-data-fixing-isometry]]. Countable Choice and Dependent Choice are mathematical premises. The vacuum, scalar, strict-fluid and nonnegative tilted geodesic dust branches of [[thm-gr-high-regularity-selected-matter-development]] are included, with independently prescribed dust velocity through zero density; the conclusion is not confined to those four models and does not follow from an arbitrary conserved stress tensor.
Granting the postulates, the deduction is a theorem about the model; it is
not evidence that the model describes nature.

**(b) The initial data are model inputs, not observations.** The data
$(h,K,\psi_0)$ are idealised smooth fields on an idealised smooth connected
three-manifold; constraint-satisfying choices are mathematical objects. If a
physical situation is modelled by such data, the accuracy of that modelling
and the errors in choosing the data are separate questions not addressed by
the deduction. No measurement, apparatus, sample or statistical inference
occurs in the delivered claims, and none should be attributed to them.

**(c) Maximality is a statement inside the smooth globally hyperbolic
class.** "Maximal" in [[def-gr-development-and-data-fixing-isometry]] clause
(d) means: every smooth development of the same data embeds into
$M_{\mathrm{max}}$ by a data-fixing development embedding. It does not mean
that $M_{\mathrm{max}}$ is geodesically complete, that no larger Lorentzian
manifold of any kind extends it, or that it maximises any geometric
quantity. Extensions that are not globally hyperbolic, or
$C^k$-developments with $k<4$ in the sense of the sector's regularity, are
outside the class compared by the theorem.

**(d) Uniqueness is up to a unique data-fixing isometry.** Two maximal
developments of the same data are isometric by exactly one isometry
commuting with the initial embeddings and preserving the matter fields and
time orientation; the "solution" of the model's initial-value problem is an
isometry class of developments, not a distinguished coordinate
representative. The uniqueness conclusion says nothing about the
multiplicity of stationary or periodic solutions of the field equations
unrelated to the given data.

**(e) Regularity, matter and topological hypotheses are active.** The
deduction requires the smooth four-dimensional regularity of the adopted
domain, the fixed covariant coupled matter model with its full equations and stress expression, the smoothness and completeness of the initial data
in the sense of the constraint framework, and the second countability of the
initial manifold. If the sector assumptions are modified (for example to
non-smooth matter, matter with additional gauge freedom, or a different
stress-energy model), the deduction must be re-established for the modified
system; the mathematical reductions of
[[thm-gr-high-regularity-selected-matter-development]] are exactly where
those hypotheses enter.

**(f) No claim about the observed universe.** The statement that "given
initial data, the model has a maximal development" is a conditional
deduction. It does not assert that the actual universe is globally
hyperbolic, that smooth initial data describe any particular epoch, or that
any observed phenomenon is predicted by the development of specific data.
Comparisons of developments with observations test the combined model and
apparatus assumptions; agreement is evidence and not a proof of the model.
