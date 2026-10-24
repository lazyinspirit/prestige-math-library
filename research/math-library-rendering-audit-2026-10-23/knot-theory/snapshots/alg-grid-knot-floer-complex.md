---
id: alg-grid-knot-floer-complex
kind: algorithm
title: "Finite grid complexes for knot Floer theory"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-grid-diagram-for-an-oriented-knot
  - lem-grid-alexander-grading-integral
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
sources:
  references:
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, §§4.1–4.6 and 13.2"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Printed pp.65–82 and 252–254; grid states, empty rectangles, minus, fully blocked, and filtered differentials"
    - title: "Ciprian Manolescu, Peter Ozsvath, and Sucharit Sarkar, A combinatorial description of knot Floer homology, §§1–3"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Grid-state generator set, empty rectangle differential, multipointed CFK-minus model, and its associated graded"
    - title: "Ciprian Manolescu, An Introduction to Knot Floer Homology, §4.3"
      url: "https://web.stanford.edu/~cm5/hfk.pdf"
      locator: "Printed pp.16–18; empty rectangles and the hat, minus, and filtered grid complexes"
---

## Definition

The **grid-complex algorithm** takes a finite encoded grid and a mode from $\{\mathrm{tilde},\mathrm{minus\text{-}associated\text{-}graded},\mathrm{minus\text{-}filtered}\}$. It requires an integer grid number $n\ge2$, disjoint $O$- and $X$-markings with exactly one of each in every row and column, and an induced component permutation that is one $n$-cycle. If $n<2$ or the marking conditions fail, return `invalid-grid`; if the component permutation has more than one cycle, return `link-input-not-supported`. No chain complex is returned on either branch.

For a valid knot grid, number the horizontal and vertical circles $1,\ldots,n$ and enumerate all permutations of $\{1,\ldots,n\}$ in lexicographic order. The state for a permutation $\sigma$ consists of the $n$ intersections $(i,\sigma(i))$. For each ordered pair of states $\mathbf x,\mathbf y$, if they agree in other than exactly $n-2$ points, add no rectangle terms. Otherwise enumerate the at most two torus rectangles with the four nonshared state points as corners, retain those whose interiors contain no point of $\mathbf x$, and apply the selected mode. In the full filtered mode, each term drops filtration by $n_{\mathbb X}(r)$; the associated-graded mode retains precisely the terms with zero drop, which are the rectangles with no $X$-marking:

1. **Tilde mode.** Work over $\mathbb F_2$. Count a retained rectangle with coefficient $1$ exactly when its interior contains no $O$- or $X$-marking.
2. **Associated-graded minus mode.** Work over $\mathbb F_2[U_1,\ldots,U_n]$, with each $U_i$ of Maslov degree $-2$ and Alexander filtration degree $-1$. Count a retained rectangle exactly when its interior contains no $X$-marking, with coefficient $\prod_{i=1}^n U_i^{O_i(r)}$.
3. **Full filtered minus mode.** Work over $\mathbb F_2[U_1,\ldots,U_n]$, with each $U_i$ of Maslov degree $-2$ and Alexander filtration degree $-1$. Count every retained rectangle, regardless of its $X$-markings, with coefficient $\prod_{i=1}^n U_i^{O_i(r)}$. Use the grid Alexander value for each state and assign filtration drop $n_{\mathbb X}(r)$ to this term.

Return the ordered state list, the mode and coefficient ring, the exact differential matrix obtained by summing coefficients modulo two, the state Maslov and Alexander values, and the filtration data for the full filtered mode. The algorithm returns this finite presentation only; its identification with knot Floer homology and its independence of the chosen grid are separate theorems. The factor $V^{\otimes(n-1)}$ is not multiplied into the output.

## Definition references

[[def-grid-diagram-for-an-oriented-knot|Toroidal knot grids, states, rectangles, and gradings]]

[[lem-grid-alexander-grading-integral|Integrality of the grid Alexander grading and its rectangle change]]

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, §§4.1–4.6 and 13.2](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

[Manolescu, Ozsvath, and Sarkar, “A combinatorial description of knot Floer homology,” §§1–3](https://arxiv.org/pdf/math/0607691)

[Manolescu, *An Introduction to Knot Floer Homology*, §4.3](https://web.stanford.edu/~cm5/hfk.pdf)
