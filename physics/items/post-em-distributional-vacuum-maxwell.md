---
id: post-em-distributional-vacuum-maxwell
kind: postulate
title: "Distributional vacuum Maxwell equations for the declared point and stationary-sheet sources"
domain: physics
status: published
origin: pipeline
dependency_level: 15
deps: [def-em-weak-sources,
       def-em-lab-geometry,
       def-em-si-conventions,
       post-em-vacuum-maxwell,
       def-countable-choice]
dependency_roles:
  def-em-weak-sources: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  post-em-vacuum-maxwell: formulation-prerequisite
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "An additional adopted physical assumption of the framework: field-source tuples whose singular sources are exactly the declared point trajectories with their properness or finite-endpoint qualifications, or exactly the declared stationary tangential surface-charge and surface-current sheets, are required to satisfy the four distributional vacuum Maxwell identities of the weak solution predicate of def-em-weak-sources. The postulate covers only these source classes in the named inertial laboratory model, with the stated SI constants; it asserts no existence, no conservation of matter, no self-force, no matter dynamics, no material response and no empirical claim."
sources:
  references:
    - title: "Weng Cho Chew, Lectures on Electromagnetic Field Theory, Purdue University Fall 2020 (497-page official full PDF)"
      url: "https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf"
      locator: "$1.2 printed p. 7 (PDF p. 21), equations (1.2.1)-(1.2.4), explicitly presents the Maxwell equations as fundamental postulates; $3.3.2-$3.3.3 printed pp. 35-36 (PDF pp. 49-50), point charge q delta and Poisson/Green equations; $4.3-$4.3.4 printed pp. 43-48 (PDF pp. 57-62), surface-charge and current delta sources and singularity matching of all four Maxwell operators. Read in the retrieved official PDF; the framework restricts these textbook models to its explicitly defined vacuum point and stationary-sheet types and does not adopt the book's numerical mu0 convention."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "$1.1 printed pp. 2-4 (PDF pp. 10-12): point density, current density and local conservation; $1.2.1 printed p. 6 (PDF p. 14): the four Maxwell equations. Surface-source adoption is supported by the Chew reference above; no boundary dictionary is attributed to Tong's introductory Maxwell section."
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "Section 28 printed pp. 69-70 (point charges represented by delta-functions and the four-current) and Section 30 printed pp. 73-75 (the field equations), read in Gaussian units and re-expressed in the framework's SI conventions; read in the stamped full text."
---

## Postulate

Assume Countable Choice ([[def-countable-choice]]) as carried by the declared
distributional and surface source objects of [[def-em-weak-sources]]. In the
flat classical laboratory model of [[def-em-lab-geometry]], with the positive
constants and SI conventions of [[def-em-si-conventions]], adopt the following
additional physical assumption for models using the declared point or
stationary-sheet sources: the locally integrable field pair and the
volume-plus-singular source pair of [[def-em-weak-sources]](a)-(d) must satisfy
its solution predicate (e). Explicitly,

$$\operatorname{div}E=\rho/\varepsilon_0,\qquad\operatorname{div}B=0,\qquad\operatorname{curl}E=-\partial_tB,\qquad\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$$

are required in $\mathcal D'(U)$, meaning that all four residual pairings
defined there vanish for every compact smooth test. This is a physical adoption
of the classical vacuum idealisation in that source class, not a theorem about
sources and not a consequence of the original locally integrable source branch
of [[post-em-vacuum-maxwell]]. When the singular part vanishes, the adopted
identities coincide with that earlier weak branch.

Only source and field tuples satisfying these identities are models of this
postulate; the postulate does not assert existence for every prescribed source
pair, and compatibility conditions remain consequences to be checked. Sources
are the exact point and stationary-sheet types defined earlier, including their
properness or endpoint and tangential-current qualifications. No moving sheet,
line current, magnetic source, product of distributions, self-force,
regularisation, matter dynamics or material constitutive law is introduced.
This postulate reports no experiment or measurement and does not infer
empirical certainty from its mathematical formulation.

## Source notes

The adoption of the vacuum field equations for idealised point and stationary
sheet sources is the standard classical idealisation of the cited treatments:
the point-particle delta current and the surface charge and current
dictionaries are presented there as modelling assumptions of the same type.
The formulation, the field and source types, the units and the distributional
scope are the framework's own, as recorded in the cited definitions.
