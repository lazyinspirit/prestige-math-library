---
id: lem-ni-holomorphic-disk-and-jsj-analytic-inputs
kind: lemma
title: "Analytic inputs for Ni's sutured knot Floer decompositions"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - thm-jsj-decomposition-of-knot-exteriors
  - def-satellite-pattern-companion-and-winding-number
  - def-top-alexander-grading-of-knot-floer-homology
  - def-balanced-taut-sutured-manifold-and-product-region
  - def-sutured-floer-chain-complex
  - def-knot-relative-spinc-structure
  - def-axiom-of-choice
  - lem-fiber-outer-grading-and-integral-cut-euler-matrix
  - lem-signed-relative-surface-cut-and-horizontal-decomposition
  - lem-signed-essential-product-annulus-decomposition
dependency_level: 5
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yi Ni, Knot Floer homology detects fibred knots, arXiv:math/0607156v4, §§2.2–5"
      url: "https://arxiv.org/pdf/math/0607156v4"
      locator: "Printed pp.5–15; sutured Floer setup, surface-adapted diagrams, horizontal decomposition, and separating product-annulus decomposition"
    - title: "Andras Juhasz, Floer homology and surface decompositions, arXiv:math/0609779v3, §§1–7"
      url: "https://arxiv.org/pdf/math/0609779v3"
      locator: "Printed pp.1–31; balanced sutured diagrams, surface-decomposition chain maps, admissibility, and analytic construction"
    - title: "Peter Ozsvath and Zoltan Szabo, Holomorphic disks and topological invariants for closed three-manifolds, arXiv:math/0101206"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Printed pp.19–35; Fredholm regularity, energy bounds, compactness, and index-two boundary and gluing arguments"
---

## Statement

Let $K$ be a null-homologous knot in a closed connected oriented $3$-manifold $Y$, let $F$ be a genus-$g$ Seifert surface, and let $(M,\gamma)$ be the balanced sutured manifold obtained by cutting the compact exterior of $K$ along $F$. For a surface-adapted admissible sutured Heegaard diagram, the generator correspondence between the top Alexander summand of the knot Floer complex and the sutured Floer disk-count module identifies their disk-count differentials. Under the hypotheses of a horizontal decomposition, the induced chain map realizes Ni's horizontal decomposition formula. Under the hypotheses of a separating product annulus with connected $R_+$ and $R_-$, the induced chain map realizes Ni's product-annulus tensor formula. These assertions use the specified basepoint domains, periodic-domain admissibility, and exact characteristic-product-region hypotheses; they make no claim that generic Heegaard disk existence alone supplies the decomposition maps.

## Statement references

[[def-top-alexander-grading-of-knot-floer-homology|The absolute Alexander grading and coefficient convention]]

[[def-balanced-taut-sutured-manifold-and-product-region|Horizontal surfaces, product annuli, and characteristic product regions]]

[[def-sutured-floer-chain-complex|The diagram-level sutured Floer disk-count module]]

[[thm-grid-homology-independent-of-grid-and-equals-knot-floer|The current mod-two grid comparison interface]]

[Ni, *Knot Floer homology detects fibred knots*, §§2.2–5](https://arxiv.org/pdf/math/0607156v4)

[Juhasz, *Floer homology and surface decompositions*, §§1–7](https://arxiv.org/pdf/math/0609779v3)

[Ozsvath and Szabo, *Holomorphic disks and topological invariants for closed three-manifolds*, §§3–4](https://arxiv.org/pdf/math/0101206)

## Facts & Assumptions

[F1] [[lem-signed-relative-surface-cut-and-horizontal-decomposition]] gives actual adapted admissible nice diagrams, complete signed differential lifting with the specified character, and the horizontal graded tensor chain operation.

[F2] [[lem-signed-essential-product-annulus-decomposition]] constructs the actual closure marking, product one-handle and disk identifications, and the full essential separating-annulus tensor operation.

[F3] [[def-top-alexander-grading-of-knot-floer-homology]] fixes the integral coefficient convention and Seifert-class normalization; [[lem-fiber-outer-grading-and-integral-cut-euler-matrix]] computes the absolute outer Chern anchor on an actually marked adapted diagram.

## Proof

**Given:** The stated null-homologous knot in an arbitrary closed connected oriented three-manifold, the specified genus-g Seifert surface, the meridional basepoint convention, and the stated decomposition hypotheses.

1.1 Construct the actual marked closure/adapted surface diagram from the relative Morse handles, carrying the page longitude and meridional boundary frame. Positive boundary fingers, the uniform relative windings, and permissible niceification give the admitted diagram. The Chern obstruction formula evaluates on minus F as minus 2g plus twice the number of interior polygon coordinates. Consequently its degree-g generators are exactly its outer generators. Each index-one disk is an exhausted embedded bigon or rectangle and lifts uniquely in the cut/double surface. The literal Fredholm conjugacies and the pullback of the specified periodic-domain orientation character align every coefficient after generator signs. Thus this generator correspondence identifies the full disk-count differentials over the integers. Signed relative moves transport the identification to the defining complexes, with their markings and coherent orientation classes. [F1, F2, F3]

1.2 For a horizontal decomposition, the cut components are balanced. In its adapted diagram there is no reverse cross-family intersection from side two to side one; the equal row and column counts force every perfect-matching generator to avoid the polygon. Thus the whole complex is the outer complex. The cut surface is a disjoint union, so each index-one disk has exactly one nonconstant factor. Ordering determinant factors gives the Koszul differential ∂(x1⊗x2)=∂x1⊗x2+(−1)^|x1|x1⊗∂x2. This is the horizontal chain map and the complete integral chain formula. Taking homology over any field gives Ni's horizontal formula. Taking homology over the integers instead gives the Künneth exact sequence including Tor; no unqualified integral homology tensor formula is asserted. [F1, step 1.1]

1.3 For an essential separating product annulus with connected R+ and R−, form the two rounded horizontal surfaces from opposite boundary faces and the annulus. Their actual cobordism regions give the required relative class and their Euler sums give the horizontal equality. This reduces the operation to attachment of a product region. A rooted cut-arc forest removes a product region meeting the sutures by literal product-disk identifications. For an interior essential product region, the explicit once-punctured-torus block forces its two fixed coordinates and isolates the only possible extra genus-one two-corner domain, whose Maslov index is minus one; it cannot contribute. Both comparison diagrams therefore have precisely the same supported disks and conjugate oriented operators in the unchanged complement. The resulting integral chain identification, followed by the remaining product-disk cuts, gives the full separating-annulus graded tensor operation. It gives Ni's field formula and the integral Künneth/Tor formulation as above. All constructions keep the stated basepoint zero regions, actual periodic lattices and essential-annulus hypotheses. They apply when the specified characteristic product region supplies those actual surfaces; they do not infer its geometry from generic disk existence. [F2, step 1.2] ∎
