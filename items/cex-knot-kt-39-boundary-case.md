---
id: cex-knot-kt-39-boundary-case
kind: counterexample
title: "Raw tilde grid homology depends on the unknot grid"
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
  - thm-grid-moves-generate-oriented-knot-isotopy
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
      locator: "Printed pp.72 and 80–81; grid-dependent tilde rank and its stable factor"
    - title: "Ciprian Manolescu, Peter Ozsvath, and Sucharit Sarkar, A combinatorial description of knot Floer homology, §4"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Printed pp.14–17; the unknot grid computation and the $V$-factor interpretation"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement refuted

Assume countable choice. The raw tilde grid homology is not a knot invariant by itself. The two specified grid diagrams both represent the oriented unknot, but their tilde homology ranks are $2$ and $4$. For these grids the grid-to-knot-Floer comparison gives $\widetilde{GH}(G_n)\cong\widehat{HFK}(U)\otimes V^{\otimes(n-1)}$, where $n=2,3$, $\operatorname{rank}_{\mathbb F_2}V=2$, and $\operatorname{rank}_{\mathbb F_2}\widehat{HFK}(U)=1$ by the standard genus-zero diagram and pointed-diagram invariance. Removing the factor $V^{\otimes(n-1)}$ would therefore falsely identify different raw ranks with the same rank-one knot invariant.
## Statement references

[[lem-grid-2x2-unknot-tilde-rank-two|The 2-by-2 finite rectangle calculation]]

[[lem-grid-3x3-unknot-tilde-rank-four|The 3-by-3 finite rectangle calculation]]

[[lem-standard-unknot-hat-diagram-rank-one|The standard one-pointed unknot calculation]]

[[thm-grid-homology-independent-of-grid-and-equals-knot-floer|The grid-to-knot-Floer comparison]]

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, Proposition 4.6.15](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

[Manolescu, Ozsvath, and Sarkar, “A combinatorial description of knot Floer homology,” §4](https://arxiv.org/pdf/math/0607691)

