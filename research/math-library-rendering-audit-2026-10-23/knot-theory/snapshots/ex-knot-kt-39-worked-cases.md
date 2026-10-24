---
id: ex-knot-kt-39-worked-cases
kind: example
title: "Worked grid-complex cases for the unknot"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-grid-diagram-for-an-oriented-knot
  - alg-grid-knot-floer-complex
  - lem-grid-rectangle-differential-squares-to-zero
  - lem-grid-2x2-unknot-tilde-rank-two
  - lem-grid-3x3-unknot-tilde-rank-four
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - lem-standard-unknot-hat-diagram-rank-one
  - def-countable-choice
  - thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, Exercise 4.4.3 and Proposition 4.6.15"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Printed pp.72 and 80–81; the 2-by-2 unknot and the stable tilde factor"
    - title: "Ciprian Manolescu, Peter Ozsvath, and Sucharit Sarkar, A combinatorial description of knot Floer homology, §§3–4"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Printed pp.14–17; unknot normalization and the grid-to-HFK comparison"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

Assume countable choice. Let $U$ be the oriented unknot and let $G_2,G_3$ be the specified $2$-by-$2$ and $3$-by-$3$ grids. Their tilde homology ranks are $2$ and $4$. For each of these grids, the grid-to-knot-Floer identification gives $\widetilde{GH}(G_n)\cong\widehat{HFK}(U)\otimes V^{\otimes(n-1)}$, where $n=2$ or $3$, $V$ has one generator in bidegree $(0,0)$ and one in bidegree $(-1,-1)$, and $\widehat{HFK}(U)$ has rank one by the standard genus-zero diagram and pointed-diagram invariance. Thus the respective ranks are exactly the dimensions supplied by the stable factors $V$ and $V^{\otimes2}$.
## Example references

[[lem-grid-2x2-unknot-tilde-rank-two|The 2-by-2 finite rectangle calculation]]

[[lem-grid-3x3-unknot-tilde-rank-four|The 3-by-3 finite rectangle calculation]]

[[lem-standard-unknot-hat-diagram-rank-one|The genus-zero one-pointed unknot calculation]]

[[thm-grid-homology-independent-of-grid-and-equals-knot-floer|The grid-to-HFK identification and stable factor]]

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, Exercise 4.4.3 and Proposition 4.6.15](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

[Manolescu, Ozsvath, and Sarkar, “A combinatorial description of knot Floer homology,” §§3–4](https://arxiv.org/pdf/math/0607691)

