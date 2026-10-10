---
id: post-em-minkowski-physical-model
kind: postulate
title: "Adopted Minkowski physical model of the electromagnetic framework"
status: draft
origin: session
domain: physics
deps: [def-em-lab-geometry, def-em-minkowski-affine-space, def-em-si-conventions, def-inertial-frame-and-inertial-chart, post-sr-ideal-clocks-and-light, post-sr-inertial-covariance]
dependency_roles:
  def-em-lab-geometry: formulation-prerequisite
  def-em-minkowski-affine-space: mathematical-premise
  def-em-si-conventions: formulation-prerequisite
  def-inertial-frame-and-inertial-chart: mathematical-premise
  post-sr-ideal-clocks-and-light: formulation-prerequisite
  post-sr-inertial-covariance: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The adopted physical interpretation of flat Minkowski spacetime for classical electromagnetism: events, inertial descriptions, ideal clocks and ideal vacuum light rays with the shared constant c. The postulate is an assumption, not an experimental result; it selects no field equation and no force law, and it excludes gravity, quantum effects and measurement postulates."
sources:
  references:
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§1 printed pp. 1-3 (the principle of relativity and the propagation of interactions with the velocity c), §2 printed pp. 3-7 (Minkowski spacetime and intervals), §3 printed pp. 7-9 (proper time) and §4 printed pp. 9-12 (Lorentz transformations), read in the stamped 387-page full text"
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§5.1-§5.1.4, printed pp. 95-101 (PDF pp. 103-109): inertial descriptions, Lorentz transformations and proper time, with signature (+---) converted here to (-+++). The physical model is adopted, not deduced."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§12.1-§12.2 printed pp. 491-504 (the postulates of special relativity, their interpretation and the constancy of c), read in the stamped scanned full text"
---

## Postulate

Adopt as physical assumptions of this framework:

(i) The oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$ used by
[[def-em-lab-geometry]], together with the
conversion constant $c>0$ of [[def-em-si-conventions]], is the spacetime of the
framework: its points represent idealized physical events, displacements
represent idealized spacetime separations, and the causal classification of the
model is the framework's causal structure. In the concrete coordinate
realization [[def-em-minkowski-affine-space]], $A=V=\mathbb R^4$ and
$\eta=\operatorname{diag}(-1,1,1,1)$. That supplier uses the symbol $C^+$ for
the nonzero future causal cone, including null vectors; here, as in the
special-relativity model, $C^+$ denotes its future timelike subset. The
future null boundary vectors retain their separate causal classification.

(ii) The inertial frames and charts of
[[def-inertial-frame-and-inertial-chart]] are the inertial descriptions of the
framework, and changes of description are the proper orthochronous isometries
adopted in [[post-sr-inertial-covariance]].

(iii) The ideal clock reading rule along future timelike curves and the
identification of ideal vacuum light rays with future null straight lines, both
with the same constant $c$, are those adopted in
[[post-sr-ideal-clocks-and-light]].

(iv) The laboratory description of fields and sources is the restricted
inertial chart of [[def-em-lab-geometry]], with the spatial Euclidean structure
and the SI conventions of [[def-em-lab-geometry]] and
[[def-em-si-conventions]].

Status and scope: the mathematical model defines the geometry and its theorems
prove geometric facts only; that physical events are described by the model,
that ideal clocks read the stated proper time and that ideal vacuum light
follows null straight lines are adopted assumptions, not deductions from
experiment or from the mathematical axioms. The special-relativity postulates
adopted here do not by themselves select the Maxwell equations, a force law or
any matter model: the electromagnetic equations and couplings of this framework
are further postulates of it. The framework is classical, flat and non-quantum;
gravitational curvature, quantum fields and measurement postulates are outside
its scope.
