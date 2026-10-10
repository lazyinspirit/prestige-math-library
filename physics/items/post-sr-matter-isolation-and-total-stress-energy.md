---
id: post-sr-matter-isolation-and-total-stress-energy
kind: postulate
title: "Isolation and the total stress-energy tensor"
status: draft
origin: pipeline
domain: physics
physical_scope: "Flat affine Minkowski spacetime in one inertial chart; the total stress-energy tensor of a bounded system, including every constituent that carries energy-momentum; the isolation premise concerns a finite closed box and length-coordinate interval with vanishing side flux. The postulate is an idealisation of an isolated bounded system: it makes no apparatus, statistical or empirical claim, adopts no limiting procedure at spatial infinity and asserts nothing about partial tensors or unmodelled matter."
deps: [def-sr-affine-minkowski-model, post-sr-matter-models-and-evolution, def-sr-stress-energy-tensor-and-force-density, thm-sr-stress-balance-and-finite-flux]
dependency_roles:
  def-sr-affine-minkowski-model: formulation-prerequisite
  post-sr-matter-models-and-evolution: formulation-prerequisite
  def-sr-stress-energy-tensor-and-force-density: formulation-prerequisite
  thm-sr-stress-balance-and-finite-flux: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Chapter 9 pp. 179-197: 9.1 pp. 179-182 (current vector, flux, charge conservation), 9.2 pp. 183-191 (stress-energy tensor, conservation and flux, symmetry, dust, rank-2 transformation law, pressure, perfect fluid, worked examples, energy conditions), 9.3 pp. 192-197 (Gauss's theorem, integral conservation laws, the energy-momentum vector, angular momentum); the printed 9.2.8 dominant energy condition p. 191 has the defective |P| > rho and is not used"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "D. Tong, General Relativity, University of Cambridge Part III Mathematical Tripos (Michaelmas Term 2019); c = 1 formulas converted to x^0 = c t; 4.5.1-4.5.5 printed pp. 181-191: scalar-field action (4.42)-(4.43) and equation of motion, Hilbert energy-momentum tensor (4.46), diffeomorphism invariance and conservation (4.50), flat-space Noether form, scalar tensor (4.51), Maxwell tensor (4.52), perfect fluid (4.53) with conservation equations (4.54)-(4.55), and the flat-space conserved-charge box argument of 4.5.5"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
---

## Postulate

Adopt as the boundary and isolation premise of the continuum framework the following.

**(i) Total tensor.** In every conservation or integration statement of this framework the tensor used is the total stress-energy tensor of the system considered, including every constituent that carries energy-momentum — matter, fields and supporting structures present in the region — assembled by the additivity clause of [[post-sr-matter-models-and-evolution]].

**(ii) Localisation.** Fix an inertial chart with $x^0=ct$. Choose real $s_1<s_2$ and a nondegenerate closed spatial rectangle $\bar K=\prod_{i=1}^3[a_i,b_i]$, $a_i<b_i$. The interval $[s_1,s_2]$ parametrizes $x^0$ in metres; the corresponding coordinate-clock interval is $[s_1/c,s_2/c]$ in seconds. Whenever conservation of a slice four-momentum on this slab is asserted, the model assumes that during that interval the total tensor is $C^1$ and symmetric on a neighbourhood of a closed box $[s_1,s_2]\times\bar K$ ([[def-sr-stress-energy-tensor-and-force-density]], [[def-sr-affine-minkowski-model]]), that its components satisfy the zero side-flux condition $T^{ib}=0$ on the spatial faces of the box for $i=1,2,3$, and that the slice integrals converge; equivalently, the system is isolated inside the chosen region for the chosen interval.

**(iii) Failure of isolation.** If the side flux does not vanish, only the exact finite-flux balance of [[thm-sr-stress-balance-and-finite-flux]] is asserted; no conservation of a slice integral is inferred and no limiting procedure at spatial infinity is adopted.

**(iv) Unmodelled matter.** For a matter system not governed by one of the models of [[post-sr-matter-models-and-evolution]], conservation of its stress-energy tensor is not inferred; if used it must be adopted or derived separately.

**(v) Exclusion caution.** Removing a constituent — a support, a field or a container — from the total tensor can make the side-flux condition fail; the premise concerns the total tensor of the system, not an arbitrary partial tensor.

## Scope and status

This premise is an idealisation of an isolated bounded system in flat spacetime; it is not a measurement and makes no apparatus, statistical or empirical claim. The localisation clause is a boundary hypothesis on a finite box in a single inertial chart; it neither supplies an equation of motion for the total tensor nor implies the vanishing of the force density $f^b=\partial_aT^{ab}$, which is a separate hypothesis of the integration statements that use this postulate.
