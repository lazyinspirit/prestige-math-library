---
id: thm-pchip-shape-preserving-no-overshoot
kind: theorem
title: PCHIP is C1, monotone on each data segment, and has no interval overshoot
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  [
    alg-pchip-slope-selection,
    lem-pchip-slope-selection-well-defined,
    thm-piecewise-cubic-hermite-interpolant-properties,
    thm-hermite-monotonicity-for-normalized-slopes-in-square,
    thm-pchip-normalized-slopes-in-square
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "F. N. Fritsch and J. Butland, A Method for Constructing Local Monotone
        Piecewise Cubic Interpolants, SIAM Journal on Scientific and Statistical
        Computing 5 (1984), pp. 300–304"
      url: https://anthonylloyd.github.io/public/interp/pchip/A_method_for_constructing_local_monotone_picewise_cubic_interpolants_fritsch1984.pdf
    - title: "SciPy v1.18.0, PchipInterpolator documentation, Notes"
      url: https://docs.scipy.org/doc/scipy/reference/generated/scipy.interpolate.PchipInterpolator.html
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

For every input to [[alg-pchip-slope-selection]], the resulting interpolant is $C^1$ and interpolates all input values. On each cell with nonzero secant $d_i$, the interpolant is monotone from $y_i$ to $y_{i+1}$ and stays between those endpoint values; on a cell with $d_i=0$ it is constant. In particular, if the input values are nondecreasing (respectively nonincreasing), the complete interpolant is nondecreasing (respectively nonincreasing). No $C^2$ matching is asserted.

## Facts & Assumptions

**Given:** Strictly increasing real nodes with arbitrary real data and the PCHIP slopes and pieces selected by [[alg-pchip-slope-selection]].

[F1] [[alg-pchip-slope-selection]]: the procedure returns the Hermite pieces determined by its input values and selected slopes.

[F2] [[lem-pchip-slope-selection-well-defined]]: all selected slopes are finite and the procedure's divisions are defined.

[F3] [[thm-piecewise-cubic-hermite-interpolant-properties]]: shared nodal values and slopes give interpolation and $C^1$ matching.

[F4] [[thm-hermite-monotonicity-for-normalized-slopes-in-square]]: normalized endpoint slopes in $[0,3]^2$ make a nonflat Hermite segment monotone between its endpoint values; zero secant and zero endpoint slopes make it constant.

[F5] [[thm-pchip-normalized-slopes-in-square]]: PCHIP has precisely those normalized-slope bounds on every cell, including the flat-cell case.

## Proof
1.1 By [F2], the algorithm defines one finite slope at each input node. Its output consists of Hermite pieces sharing the same value and selected slope at each common node, so [F3] gives interpolation and $C^1$ matching. [F1, F2, F3, given]

1.2 Fix a cell with $d_i\ne0$. By [F5], both slopes normalized by $d_i$ lie in $[0,3]$; [F4] therefore makes this piece monotone from $y_i$ to $y_{i+1}$ and keeps it between those values. [F4, F5, given]

2.1 If $d_i=0$, [F5] gives zero slopes at both endpoints, and [F4] makes that Hermite piece constant at its common endpoint value. For nondecreasing input, every $d_i\ge0$, so each nonflat cell is nondecreasing by step 1.2, the flat cells are constant by the calculation above, and the pieces agree at nodes by step 1.1; concatenating the cells gives a nondecreasing function. The nonincreasing case is identical with all inequalities reversed. [F4, F5, step 1.1, step 1.2, given] ∎