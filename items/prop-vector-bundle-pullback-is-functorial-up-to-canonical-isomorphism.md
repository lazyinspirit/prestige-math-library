---
id: prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism
kind: proposition
title: Vector-bundle pullback is canonically functorial
status: draft
origin: pipeline
deps: [def-pullback-vector-bundle-and-pullback-section]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §1.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Pullback construction, printed pp.9–10"
    - title: "Milnor and Stasheff, Characteristic Classes, §3"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Induced-bundle functoriality, printed pp.20–22"
---

## Statement

For $E\to Z$ and composable maps $X\xrightarrow fY\xrightarrow gZ$, there
are canonical bundle isomorphisms

$$\operatorname{id}_Z^*E\cong E,\qquad f^*(g^*E)\cong(gf)^*E.$$

They are natural in bundle maps and coherent for three composable base maps.
Under them, pullback of sections respects identities and composition.

## Facts & Assumptions

**Given:** The bundle and composable maps in the statement.

[F1] Pullbacks are the indicated subspaces of products, and their canonical
maps and sections have the displayed coordinate formulas
([[def-pullback-vector-bundle-and-pullback-section]]).

## Proof

**Proof technique:** direct.

1.1 The maps $(z,e)\mapsto e$ and $e\mapsto(q(e),e)$ are mutually inverse fiberwise-linear continuous maps $\operatorname{id}_Z^*E\rightleftarrows E$. They are continuous by the product and subspace formulas in [F1]. [F1]

1.2 The composite comparison is $\alpha(x,(f(x),e))=(x,e)$, with inverse $(x,e)\mapsto(x,(f(x),e))$. Both maps are continuous restrictions of product-coordinate maps, are linear on each fiber, and preserve the defining equations, so [F1] makes them inverse bundle isomorphisms. [F1]

2.1 For a third base map, every route through the associativity comparisons deletes the same redundant base coordinates and ends at the same pair $(w,e)$. For a bundle map, both naturality routes apply that map to the same final $e$-coordinate. Thus the comparisons are coherent and natural. [F1, step 1.1, step 1.2]

3.1 The pullback section formula sends $x$ to $(x,s(g(f(x))))$ whether it is applied once along $gf$ or twice along $g$ and $f$; the identity formula similarly reduces to $s$. Hence sections respect identities and composition under the canonical comparisons. [F1, step 1.1, step 1.2] ∎
