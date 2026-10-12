---
id: rem-gr-convex-normal-neighborhoods-scope
kind: remark
title: "Scope and status of the convex-normal, volume-time and temporal-splitting material"
status: draft
origin: session
domain: physics
dependency_level: 30
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [post-gr-spacetime-and-classical-domain, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-spacelike-hypersurfaces-and-cauchy-sets, thm-gr-convex-normal-neighborhoods, thm-gr-volume-time-function, thm-gr-cauchy-surface-implies-globally-hyperbolic, lem-gr-local-cauchy-neighborhood, lem-gr-cone-bump-functions, lem-gr-strip-weak-steps, thm-gr-smooth-cauchy-temporal-splitting]
dependency_roles:
  post-gr-spacetime-and-classical-domain: formulation-prerequisite
  def-gr-causal-conditions-and-global-hyperbolicity: formulation-prerequisite
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: formulation-prerequisite
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  thm-gr-volume-time-function: mathematical-premise
  thm-gr-cauchy-surface-implies-globally-hyperbolic: mathematical-premise
  lem-gr-local-cauchy-neighborhood: mathematical-premise
  lem-gr-cone-bump-functions: mathematical-premise
  lem-gr-strip-weak-steps: mathematical-premise
  thm-gr-smooth-cauchy-temporal-splitting: mathematical-premise
physical_scope: "Scope and status note for the convex-normal-neighborhood and smooth temporal splitting material: which claims are mathematical deductions inside the smooth Lorentzian model, which physical readings belong to the framework postulates, and which existence, uniqueness and evolution claims are deferred to the later pages of the track. The note asserts no law, no solution family, no measurement and no empirical fact."
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: convex normal neighbourhoods, the causal ladder and the existence of time and temporal functions, sections 2.2 and 4.3-4.5 printed pp. 26-28 and 130-148"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): causality conditions, Cauchy hypersurfaces, the volume function and the smooth temporal splitting, sections 2.2, 2.4, 2.9 and 2.11 printed pp. 8-13, 26-28, 46-50 and 57-60"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: n/a
---

## Scope, status and conventions

This note fixes the scope of the page's convex-normal, volume-time and
splitting content and the status of its claims; it proves nothing by itself.

- **Model conditions versus physical readings.** Strictly convex normal
  neighbourhoods, the local causality inside them
  ([[thm-gr-convex-normal-neighborhoods]]), the auxiliary metric, the volume
  time function and its Cauchy levels ([[thm-gr-volume-time-function]]), the
  equivalence of the Cauchy-set property with global hyperbolicity
  ([[thm-gr-cauchy-surface-implies-globally-hyperbolic]]) and the smooth
  temporal function with its complete orthogonal flow
  ([[thm-gr-smooth-cauchy-temporal-splitting]]) are mathematical statements
  about a time-oriented smooth Lorentzian four-manifold. The readings of the
  Cauchy levels as the model's predictability slices, of the temporal
  function as a global simultaneity coordinate, and of the flow lines as a
  preferred family of observers are adopted assumptions of the classical
  framework ([[post-gr-spacetime-and-classical-domain]]); they are not
  proved, and nothing on this page is compared with any observation.

- **What is proved here.** Conditional deductions inside the stated classes
  of models and curves: the local causal cone and displacement-length
  calculus of [[thm-gr-convex-normal-neighborhoods]], the locally finite
  cone-bump and weak-step constructions ([[lem-gr-cone-bump-functions]],
  [[lem-gr-strip-weak-steps]]), the continuous volume time
  ([[thm-gr-volume-time-function]]), the local Cauchy neighbourhoods
  ([[lem-gr-local-cauchy-neighborhood]]) and the smooth Cauchy time function
  with Cauchy levels, complete gradient flow and orthogonal product
  ([[thm-gr-smooth-cauchy-temporal-splitting]]). Each theorem states its
  hypotheses, including the choice principles it uses, and each is a
  statement about the explicitly displayed model.

- **Deferred claims.** No statement of this page asserts existence,
  uniqueness, stability or maximality of solutions of the Einstein field
  law, nor the existence of a maximal globally hyperbolic development of
  given initial data; those are the objects of the later GR14 and GR15 pages
  of the track. The splitting proved here is conditional on global
  hyperbolicity and supplies the geometric setting those pages consume.

- **Empirical status.** No experiment, measurement or observational
  uncertainty occurs anywhere in the page's deductions. The empirical
  qualifications of the framework are carried by the postulate items and by
  the report pages of the track, not by these mathematical results.
