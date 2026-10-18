---
id: rem-derived-and-cohomological-hall-are-distinct
kind: remark
title: "Derived and cohomological Hall algebras are distinct constructions"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-motivic-hall-algebra-of-a-finite-quiver
  - def-toen-derived-hall-algebra
  - def-toen-locally-finite-dg-category
  - def-locally-finite-homotopy-type
  - def-untwisted-quiver-cohomological-hall-algebra
  - def-equivariant-borel-moore-homology-and-correspondence-convolution
  - def-quiver-potential-and-monodromic-vanishing-cycle-data
  - def-critical-quiver-coha-from-vanishing-cycle-data
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bertrand Toën, Derived Hall Algebras, arXiv:math/0501343v4, §§3–4"
      url: "https://arxiv.org/pdf/math/0501343v4"
    - title: "Maxim Kontsevich and Yan Soibelman, Cohomological Hall algebra, exponential Hodge structures and motivic Donaldson–Thomas invariants, arXiv:1006.2706v2, §§2 and 8"
      url: "https://arxiv.org/pdf/1006.2706v2"
---

## Remarks

The present page uses the ordinary finite-quiver representation stacks and
relative Grothendieck stack-function classes of
[[def-motivic-hall-algebra-of-a-finite-quiver]]. Toën's derived Hall
construction is defined on the core homotopy type of perfect modules over a
locally finite dg-enhancement over a finite field
([[def-toen-derived-hall-algebra]],
[[def-toen-locally-finite-dg-category]]). Its arrows are weighted by homotopy
cardinality after fixing source and homotopy cofiber; the locally finite
homotopy-type definition specifies the finite higher-homotopy weights
([[def-locally-finite-homotopy-type]]). This is a different coefficient
carrier from Grothendieck classes of ordinary representation stacks.

The current untwisted quiver CoHA draft uses rational equivariant
Borel–Moore homology of representation spaces and the exact-sequence
correspondence ([[def-untwisted-quiver-cohomological-hall-algebra]],
[[def-equivariant-borel-moore-homology-and-correspondence-convolution]]).
Its convention is subrepresentation first and quotient second, with the
homological shift $-2\chi_Q(\mathbf b,\mathbf a)$ for subdimension $\mathbf a$
and quotient dimension $\mathbf b$. That draft explicitly leaves the quotient-stack
Borel–Moore operation interface unresolved; this remark does not assert that
its product is presently well-defined. For a quiver potential, the conditional
critical construction requires explicit monodromic coefficient data and
correspondence operations
([[def-quiver-potential-and-monodromic-vanishing-cycle-data]],
[[def-critical-quiver-coha-from-vanishing-cycle-data]]). Those definitions do
not assert that a canonical vanishing-cycle theory or standard orientation
package supplies the required data.

These constructions have different carriers, coefficient theories, and
conventions; a shared extension pattern does not identify their algebras. No
comparison map between them, orientation-dependent 3-Calabi–Yau integration
theorem, or physical BPS state identification is claimed here.

