# frontier-11, batch 3

You are **Beta-frontier-11-3**. Your writable artifacts are the four
`research/frontier-11-batch-3.*` files named in the brief above.

## Your pages

- **A** `extremal-graph-theory` (order 219, combinatorics) — "Extremal Graph Theory"
  - **B** `extremal-graph-theory-examples` (order 220)
  - requires: `ramsey-theory`, `graph-colouring`
- **A** `formal-power-series` (order 193, combinatorics) — "Formal Power Series"
  - **B** `formal-power-series-examples` (order 194)
  - requires: `polynomial-rings-and-roots`, `euclidean-domains-pids-and-unique-factorisation`, `formal-laurent-series-field`

## Prose scaffold sections to read

- `research/plan-combinatorics-and-categories.md`

## Batch note

**Order 219** blocks `finite-probability-and-the-probabilistic-method` (221) and
thence the whole Erdős–Hajnal chain, so its statements must be citable verbatim.
Owed: Mantel's theorem with a proof that is not just "Turán with r=2", Turán's
theorem (state the extremal number exactly and identify the extremal graph as the
complete multipartite Turán graph — a page that proves the bound but never
characterises equality is half a page), the Kővári–Sós–Turán bound for bipartite
excluded subgraphs, the Erdős–Stone–Simonovits theorem and the chromatic-number
formulation of the asymptotic extremal density, and the connection back to
`ramsey-theory` you already cite. `graph-colouring` (215) is published at only
4+2 items — **open it and check what it actually gives you** before making it
load-bearing; if the chromatic number you need is not there, build the
definition locally rather than citing something that is not on the page.

**Order 193** blocks `linear-recurrences-and-rational-generating-functions` (195),
`lattice-paths-and-catalan-numbers` (197) and `integer-partitions-and-the-twelvefold-way`
(201). `formal-laurent-series-field` (order 124, real-analysis) is already
published — **open it first**; it may already own the field of fractions and the
valuation, in which case cite rather than restate, and say so in your notes. Owed
here: `R[[x]]` as a ring, the units characterisation (invertible iff the constant
term is a unit), formal derivative and its algebra, composition and when it is
defined, the formal inverse-function/Lagrange inversion statement, the
order/valuation and completeness in the formal topology, and the extraction of
coefficients as a linear functional. Convergence is **not** the subject: state
explicitly, once, that `x` is an indeterminate and no analytic convergence is
claimed, and keep the analytic power-series page (173) out of the dependency
backbone. Lagrange inversion is the one result most likely to tempt an
overstated citation — either prove it in scope or decline it with a real reason.
