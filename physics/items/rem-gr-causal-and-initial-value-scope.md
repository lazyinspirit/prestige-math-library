---
id: rem-gr-causal-and-initial-value-scope
kind: remark
title: "Scope and status of the causal and initial-value material: model conditions, predictions and deferred theorems"
status: draft
origin: session
domain: physics
dependency_level: 14
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [post-gr-spacetime-and-classical-domain, post-gr-einstein-field-law, post-gr-ideal-clocks-and-free-fall, def-gr-causal-curves-and-reachability, def-gr-causal-conditions-and-global-hyperbolicity, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-spacelike-initial-data-and-constraints, lem-gr-causal-curve-calculus, lem-gr-temporal-functions-and-time-functions, lem-gr-maximal-geodesics-and-extension, lem-gr-constraint-projections, lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form, thm-gr-minkowski-cauchy-and-global-hyperbolicity, thm-gr-flat-cylinder-closed-timelike-and-no-cauchy-set, thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice, thm-gr-timelike-raychaudhuri-and-local-focusing]
dependency_roles:
  post-gr-spacetime-and-classical-domain: formulation-prerequisite
  post-gr-einstein-field-law: formulation-prerequisite
  post-gr-ideal-clocks-and-free-fall: formulation-prerequisite
  def-gr-causal-curves-and-reachability: formulation-prerequisite
  def-gr-causal-conditions-and-global-hyperbolicity: formulation-prerequisite
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: formulation-prerequisite
  def-gr-spacelike-initial-data-and-constraints: formulation-prerequisite
  lem-gr-causal-curve-calculus: mathematical-premise
  lem-gr-temporal-functions-and-time-functions: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  lem-gr-constraint-projections: mathematical-premise
  lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form: mathematical-premise
  thm-gr-minkowski-cauchy-and-global-hyperbolicity: mathematical-premise
  thm-gr-flat-cylinder-closed-timelike-and-no-cauchy-set: mathematical-premise
  thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice: mathematical-premise
  thm-gr-timelike-raychaudhuri-and-local-focusing: mathematical-premise
physical_scope: "Scope and status note for the causal, initial-value and focusing material of the classical gravitational framework in its smooth branch: which items are mathematical definitions and conditional deductions, which physical readings belong to the framework postulates, and which existence, uniqueness, splitting and singularity claims are deferred to the later pages of the track. The note asserts no law, no solution family, no measurement and no empirical fact."
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: the causal ladder and the definition of global hyperbolicity with its equivalent characterizations, sections 4.1-4.5 printed pp. 104-148"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007): Cauchy surfaces and global hyperbolicity, section 3.2.1 printed pp. 39-40; the Cauchy problem and the constraint equations, sections 4.4 and 4.4.3 printed pp. 61-65"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision): the domain of dependence and the maximal Cauchy development, section 10.5 printed pp. 123-124 (PDF pp. 124-125)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): the initial value problem, domains of dependence, Cauchy horizons and the Misner-space identification warning, printed pp. 119-127 (PDF pp. 126-134)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: n/a
---

## Scope, status and conventions

This note fixes the scope of the page's causal and initial-value content and
the status of its claims; it proves nothing by itself.

- **Model conditions versus physical readings.** Chronology, causality, strong
  causality, global hyperbolicity, achronality, acausality, the Cauchy-set
  property and the existence of time or temporal functions are mathematical
  conditions on a time-oriented smooth Lorentzian four-manifold
  ([[def-gr-causal-curves-and-reachability]],
  [[def-gr-causal-conditions-and-global-hyperbolicity]],
  [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]). In the framework's
  geometric-optics assumption, ideal light rays are future null geodesics
  ([[post-gr-ideal-clocks-and-free-fall]] clause (iii)); this specifies the
  model's ideal ray-propagation rule and does not assert that it exhausts every
  physical signalling mechanism. A Cauchy set is defined by exactly one
  parameter intersection with every inextendible curve of the stated causal
  class. A model with no such set fails that mathematical property; claims
  about predictive power require specified dynamics, admissible data and
  well-posedness results, none of which follows from the absence of a Cauchy
  set alone. These are qualified model interpretations, not observations or
  proofs about nature. A model with a closed timelike curve is not
  "mathematically inconsistent": it is a model whose causal structure differs
  from that of the flat models of the examples page.

- **What is proved here.** Conditional deductions inside the stated classes
  of curves and models: the curve calculus of
  [[lem-gr-causal-curve-calculus]], the implication from temporal functions
  to time functions and the exclusion of closed causal curves by a time
  function ([[lem-gr-temporal-functions-and-time-functions]]), the
  extendibility of convergent causal ends and the acausality of Cauchy sets
  ([[lem-gr-maximal-geodesics-and-extension]]), the Minkowski model's global
  hyperbolicity and its inertial Cauchy hypersurfaces
  ([[thm-gr-minkowski-cauchy-and-global-hyperbolicity]]), the flat cylinder's
  failure of chronology, causality and the Cauchy property
  ([[thm-gr-flat-cylinder-closed-timelike-and-no-cauchy-set]]), the open
  slab's incompleteness together with its Cauchy slice and global
  hyperbolicity ([[thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice]]),
  and the local focusing bound along a geodesic congruence
  ([[thm-gr-timelike-raychaudhuri-and-local-focusing]]). Each is a statement
  about the explicitly displayed model and its curve class.

- **Initial value material.** [[def-gr-spacelike-initial-data-and-constraints]]
  defines initial data $(\Sigma,h,K,\rho,j)$ and the constraint equations as
  the normal and normal-tangential projections of the field equation;
  [[lem-gr-constraint-projections]] proves that data induced by a solution of
  the field equation ([[post-gr-einstein-field-law]]) satisfy the
  constraints, and the normal, induced metric and second fundamental form are
  constructed in
  [[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]]. The
  page does not assert the converse in any form: the existence of a
  development of given data, its uniqueness, the maximal globally hyperbolic
  development, and the equivalence of global hyperbolicity with the existence
  of a Cauchy hypersurface or of a smooth temporal function with Cauchy
  levels are not proved here. Those statements require the local
  Einstein-matter well-posedness theory, the Gauss-Codazzi relations and
  global causal gluing arguments, and are deferred to the later pages of this
  track (the convex-normal-neighborhood and full symmetric-hyperbolic
  pages). The equivalent component form of the constraints in terms of the
  induced scalar curvature and the divergence of $K$ is deferred with them.

- **Focusing versus singularities.** The Raychaudhuri theorem of this page is
  a local differential inequality along one flow line of a smooth geodesic
  congruence: it bounds the affine parameter range on which the congruence
  remains smooth under the stated hypotheses. It does not assert that the
  spacetime ends, that a singularity theorem holds, or that an
  infinite-curvature point forms. A genuine singularity theorem requires its
  own energy, causality and global compactness hypotheses and a complete
  proof, none of which is claimed here; cosmic censorship and chronology
  protection are not theorems and are not used.

- **Empirical status.** The page contains no experiment, no apparatus, no
  measured input, no sampling model and no statistical inference, and it
  draws no conclusion about nature. A prediction computed from a fully
  specified model may later be compared with reported observations; such a
  comparison tests the combined model and its auxiliary assumptions, and
  agreement is evidence, not a proof of the model or of its postulates.

- **Deferred obligations.** The causal hierarchy's equivalences, the
  equivalence of the global-hyperbolicity formulation used here with the
  Cauchy-hypersurface and smooth-splitting formulations, the existence and
  uniqueness theory for the Einstein-matter initial value problem, the
  maximal development, and singularity and censorship statements are
  obligations of the later pages of the general-relativity track, not of this
  page.
