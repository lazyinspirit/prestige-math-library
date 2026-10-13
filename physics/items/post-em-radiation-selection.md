---
id: post-em-radiation-selection
kind: postulate
title: "Adopted retarded solution selection: the physical branch carries no incoming free field"
domain: physics
status: published
origin: pipeline
dependency_level: 18
deps: [pthm-em-lorenz-gauge-wave-form, def-em-potential-gauge-and-field-conventions, post-em-vacuum-maxwell, def-em-si-conventions, def-em-lab-geometry, post-em-distributional-vacuum-maxwell, def-em-weak-sources, def-countable-choice]
dependency_roles:
  pthm-em-lorenz-gauge-wave-form: formulation-prerequisite
  def-em-potential-gauge-and-field-conventions: formulation-prerequisite
  post-em-vacuum-maxwell: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  post-em-distributional-vacuum-maxwell: formulation-prerequisite
  def-em-weak-sources: formulation-prerequisite
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adopted selection rule for the classical vacuum Maxwell/wave model in the framework's inertial laboratory chart and SI conventions: the physical potential pair is the retarded one with zero incoming free field, both for the smooth compact-source branch and for the separately declared weak point-source equations. Excluded: existence, uniqueness, regularity or decay claims for any source class (consuming theorems must supply them); empirical, statistical or measurement claims; the advanced branch and free fields as physical solutions; products of distributions, self-force, radiation reaction and any apparatus model."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (author-hosted 236-page PDF, title page dated Lent Term 2015)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "$\\S6.1$ printed pp. 134-143, especially the retarded/advanced choice in $\\S6.1.1$ printed pp. 136-137 and the wave kernels in $\\S6.1.2$ printed pp. 138-142: the Helmholtz and wave Green functions, the two possible time-asymmetric Green functions and the explicit extra (retarded) choice at the displayed 'Retarded Potentials' page; read in the retained full text of the 236-page revision."
    - title: "R. Fitzpatrick, Classical Electromagnetism: An intermediate level course, University of Texas at Austin (complete author-hosted HTML lecture notes, document dated 2006-02-02)"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node50.html"
      locator: "Nodes 49-51 ('Green's functions', 'Retarded potentials', 'Advanced potentials?') of chapter 4 'Time-dependent Maxwell's equations': the retarded and advanced potentials are both displayed and the extra temporal choice is identified as additional structure."
    - title: "N. Beisert, Elektrodynamik, ETH Zurich 2024 FS (author-hosted 176-page script)"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "$\\S11.2$ printed pp. 11.4-11.7 (PDF pp. 124-127): retarded and advanced Green kernels, pole prescriptions and the causal potential construction, with the retarded selection stated as additional to the time-reversible equations."
---

## Postulate

Adopt as a physical assumption of this framework the following solution-selection rule for the classical vacuum model on the laboratory region $U\cong I\times\Omega$ of [[def-em-lab-geometry]], with the constants and SI units of [[def-em-si-conventions]] (so $c>0$, $\mu_0>0$, $\varepsilon_0=(\mu_0c^2)^{-1}$).

(a) [Formulation] In the potential formulation of [[pthm-em-lorenz-gauge-wave-form]] with the conventions of [[def-em-potential-gauge-and-field-conventions]], for a $C^2$ potential pair in Lorenz gauge the sourced Maxwell system of [[post-em-vacuum-maxwell]] is equivalent to the decoupled sourced wave equations $W\varphi=\rho/\varepsilon_0$, $WA=\mu_0J$, where $W=c^{-2}\partial_t^2-\Delta$. The wave expression $W$ is invariant under $t\mapsto-t$; where explicit retarded or advanced constructions for a prescribed history exist, they give distinguished particular solutions built from the corresponding forward or backward fundamental kernels. Every other solution differs from a chosen particular solution by a source-free addition; retarded and advanced particular solutions also differ by such an addition. This describes the affine free-solution freedom, not a claim that arbitrary histories have exactly two solutions or that either construction always exists.

(b) [Adopted rule] The framework adopts the retarded branch with no free field added: the physical potential pair of the model is the retarded one, that is, the one whose support and propagation lie in the forward light cones of the source and which carries no field arriving from the past independently of the source. For the zero-incoming model the selected sourced solution has no independently prescribed homogeneous addition. If nonzero Cauchy data are instead prescribed, their compatible homogeneous addition is a separate initial-data model; it is not equivalent to setting every free addition to zero. The advanced construction and independent incoming free fields are excluded by the present retarded selection.

(c) [Status and scope] This is an adopted extra temporal condition carrying the model's arrow-of-time content. It is not a theorem, not a consequence of the time-symmetric wave or Maxwell equations (which admit advanced and free solutions as mathematical objects), and not a deduction from experiment; it asserts no existence, uniqueness, regularity, support or decay for any source class, all of which must be supplied separately by theorems of this page. It selects a solution only of the models to which it is applied; it introduces no product of distributions, no source model, no self-force, no radiation reaction, no measured signal and no statistical claim. The retarded compact-source branch to which this selection applies is developed on this page as a conditional theorem, and the point-source branch is developed later on this page; neither existence statement is part of this postulate. For the separately declared point-source branch assume Countable Choice ([[def-countable-choice]]), as in its exact source/field interfaces, and adopt the same no-free-addition retarded selection in the weak equations of [[post-em-distributional-vacuum-maxwell]], for the locally integrable field and proper point-current types of [[def-em-weak-sources]]. This extends the selection's model scope explicitly; neither existence nor an arbitrary convolution of noncompact distributions is postulated.

## Source notes

The classical treatments cited above display the retarded and advanced Green functions of the wave operator and then identify the choice of the retarded branch as additional structure imposed on the time-reversal-symmetric equations; they support the formulation of clauses (a)-(b) and the honest non-theorem status recorded in clause (c). They are not evidence for the physical correctness of the choice, and this postulate reports no experiment, measurement or statistical inference. The exact interfaces of the wave form, the gauge conventions, the smooth Maxwell system and the separately adopted weak singular-source equations are those of the cited framework items; the weak point-source extension is an explicit physical selection on the already-adopted singular-source equations, not a deduction from the smooth-only potential theorem, and a consuming theorem must construct its actual history integrals and prove weak admissibility.
