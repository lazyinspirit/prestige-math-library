---
id: thm-rank-one-top-knot-floer-detects-fiberedness
kind: theorem
title: "Rank-one top knot Floer homology detects fibering"
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
  - lem-ni-fiberedness-sutured-floer-and-gabai-inputs
  - def-axiom-of-choice
dependency_level: 11
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yi Ni, Knot Floer homology detects fibred knots, arXiv:math/0607156v4, Theorem 1.1"
      url: "https://arxiv.org/pdf/math/0607156v4"
      locator: "Printed p.2 for exact hypotheses; §§3–7 for the homology-product, horizontal-decomposition, product-annulus, characteristic-region, and regluing proof"
    - title: "Andras Juhasz, Floer homology and surface decompositions, arXiv:math/0609779v3, Theorem 9.11 and proof"
      url: "https://arxiv.org/pdf/math/0609779v3"
      locator: "Author version Theorem 9.11 pp.38–39; published Geometry & Topology 12 (2008), Theorem 9.11 p.348, with Theorems 1.5 and 9.7"
verification:
  precheck: n/a
---

## Statement

Let $K$ be a null-homologous knot in a closed connected oriented $3$-manifold $Y$, and suppose that the knot complement $Y\setminus K$ is irreducible. Let $F$ be a genus-$g$ Seifert surface for $K$. If the integral top Alexander group satisfies

$$\widehat{\mathrm{HFK}}(Y,K,[F],g;\mathbb Z)\cong\mathbb Z,$$

then $Y\setminus K$ fibers over $S^1$ with fiber $F$.

## Statement references

[[def-top-alexander-grading-of-knot-floer-homology|The integral top Alexander group]]

[[def-balanced-taut-sutured-manifold-and-product-region|The sutured complement cut along F and its product structure]]

[Ni, *Knot Floer homology detects fibred knots*, Theorem 1.1 and §§3–7](https://arxiv.org/pdf/math/0607156v4)

[Juhasz, *Floer homology and surface decompositions*, Theorem 9.11](https://arxiv.org/pdf/math/0609779v3)

## Facts & Assumptions

**Given:** The knot, exterior, actual surface $F$ and integral grading-$g$ group in the Statement.

[F1] Under exactly these hypotheses, [[lem-ni-fiberedness-sutured-floer-and-gabai-inputs]] proves that the compact exterior cut along the actual $F$ is a product sutured manifold. Its proof explicitly imports the general balanced sutured vanishing and nonproduct rank results and records Ni's corrected characteristic-pair formulation; the resolved local signed comparison and hierarchy dependencies are preserved.

## Proof

**Proof technique:** direct.

1.1 Apply F1 to the actual class $[F]$, the actual genus $g$ and the given integral group. The cut exterior is a product $F\times[0,1]$ as a sutured manifold. In particular the two horizontal faces correspond to the two copies of the original $F$, rather than to a surface selected only by a genus or homology calculation. [F1]

2.1 To restore the exterior, identify those two faces using their actual gluing map. In product coordinates this is $(x,1)\sim(h(x),0)$ for a self-homeomorphism $h:F\to F$. Thus the exterior is the mapping torus of $h$. Its projection to $[0,1]/(0\sim1)=S^1$ is a surface bundle, and the seam is precisely the original embedded $F$. [step 1.1]

3.1 The vertical boundary is the mapping torus of $\partial F$. Its boundary collar extends this bundle over the deleted-knot end, giving the fibration of $Y\setminus K$ with fiber the interior of $F$, or equivalently with compact fiber $F$ in the compact exterior. This proves the stated fiberedness with the prescribed surface, for arbitrary $Y$ and also for genus zero. [step 2.1] ∎
