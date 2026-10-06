---
id: rem-the-theta-seven-calculation-consumes-stable-stems-j-and-kervaire-milnor-arithmetic
kind: remark
title: "Scope of the order-28 calculation"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
external_refs: [rem-kervaire-milnor-theta-seven-calculation-recorded-not-proved]
justified_by: []
aliases: []
landmark: false
dependency_level: 0
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Michel Kervaire and John Milnor, Groups of Homotopy Spheres I, Annals of Mathematics 77 (1963), 504-537"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/kervmiln.pdf"
      locator: "printed p. 504 (statement of the order-28 result in the introduction) and printed p. 512 (the table of Theta_n and bP_{n+1}); the surrounding sections import the stable stem, image-of-J and framed-surgery computations that are not reproduced on this page"
---

## Scope of the recorded classification

The classification $\Theta_7\cong\mathbb Z/28$ with $bP_8=\Theta_7$ is recorded in
[[rem-kervaire-milnor-theta-seven-calculation-recorded-not-proved]] as a sourced
statement whose proof is **not supplied here**. Its complete
proof consumes three inputs beyond the finite Milnor disk-bundle calculation
developed on this page:

1. the stable homotopy stems of the sphere in the relevant degrees, including
   the stable homotopy groups of $SO$ used in the $J$-homomorphism analysis;
2. the image of the stable $J$-homomorphism, with the Adams injectivity input
   in the relevant residue classes; and
3. the framed-surgery and Kervaire-Milnor arithmetic that identifies the
   cyclic order and the subgroup $bP_8$.

None of these inputs is proved in this library, and none is a premise of the
concrete construction of the bundles $\xi_{h,j}$, of the homology and
homotopy seven-sphere recognition, or of the modulo-seven invariant that
distinguishes the two explicit examples. The recorded order-28 statement is
therefore deliberately non-load-bearing: no construction, exoticness claim or
detector on this page depends on its conclusion.

## Locator note

The inspected portion of the Kervaire-Milnor paper contains the order-28
statement and the quotient table at printed p. 512, which are statement and
table locators, not a local derivation. The later sections carrying the stable
stem and framed-surgery computations were not inspected for this page, so the
proof boundary recorded here is deliberately conservative.
