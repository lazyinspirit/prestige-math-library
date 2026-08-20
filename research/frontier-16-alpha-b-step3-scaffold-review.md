# Frontier 16 — Alpha group b step-3 scaffold review

Scope: batches 2 and 5, covering `areas-of-elementary-plane-figures`,
`improper-and-parameter-dependent-multiple-integrals`, and
`measures-and-their-basic-properties`. I read each batch manifest, notes, and
coverage file together with RC-4, RC-6, and MT-2 in their governing design
documents. I also opened every published dependency from disk and checked the
stated source ranges against the available full texts.

The group assignment is coherent: all three pairs lie on the integration thread.
The A pages contain 16, 14, and 50 planned items respectively, so none requires a
split at the 60-item ceiling. Both batch manifests pass `content-policy
--manifest-only` (99 scoped items), the coverage gate reports 167 harvested
results with only the expected low-yield warning on the mature area prerequisites,
and all twelve source records carry current full-text fetch stamps. These
mechanical passes do not clear the mathematical and harvest defects below.

## Severity table

| Finding | Pair | Severity | Disposition |
|---|---|---|---|
| B2-1 | `areas-of-elementary-plane-figures` | blocking breadth | The design's bounded-set boundary result is absent; route to Beta 2. |
| B2-2 | `areas-of-elementary-plane-figures` | blocking definition/route | Make “simple polygonal region” set-theoretically explicit and keep the later polygonal Jordan theorem non-load-bearing. |
| B2-3 | `areas-of-elementary-plane-figures` | blocking harvest | Add omitted dispositions from the stated ETH/Erickson ranges. |
| B2-4 | `improper-and-parameter-dependent-multiple-integrals` | blocking proof route | Add a licensed zero-content-modification bridge to the polar Gaussian proof. |
| B2-5 | `improper-and-parameter-dependent-multiple-integrals` | blocking harvest | Add the omitted Taylor Proposition 3.1.24 disposition. |
| B5-1 | `measures-and-their-basic-properties` | blocking definition/route | Repair extended scalar multiplication before the atomic classification can close. |

## Batch 2

### `areas-of-elementary-plane-figures`

The main development is otherwise strong. Translation invariance, graph-area/Jordan
agreement, the disc reconciliation, determinant/base-height formulae, triangle
degeneracy, triangulation, finite additivity, and shoelace cancellation all appear.
The B page is real: its explicit triangle, oblique parallelogram, degenerate
triangle, disc, pentagon, and determinant-scaling counterexample exercise distinct
boundaries. The determinant and triangle proofs have been decomposed at the right
places, and the polygon proof has a separate diagonal lemma.

**B2-1. Missing design boundary.** RC-4 expressly records the false claim that a
bounded plane set must have an area and says to cite the published
`cex-rational-points-in-unit-square-have-no-jordan-content`. No planned item cites
that counterexample or states the boundary. Add the source-backed A-page false
statement `fs-a-bounded-plane-set-has-an-area` (or an equivalently explicit
boundary item) and refute it with that published counterexample. Its references to
Lebl's Jordan-measurability treatment and Treibergs' worked counterexample supply
the source route. The existing oblique-parallelogram example already disposes the
“base times height needs a right angle” boundary, and the linear-bijection
counterexample disposes the bijection-invariance boundary; those need not be
duplicated as separate false statements.

**B2-2. The polygon definition is not yet a closed route.** The Step-5 clause in
the notes says only that a simple polygonal region is a “compact planar region”
whose boundary is a simple polygonal chain. “Region” is not defined by any listed
dependency, while ETH Definition 4.1 and the proofs of ETH Theorem 4.9 and
Erickson Lemma 1.4 use the interior and boundary of the filled set at every
substantive step. Correct the planned Definition so it explicitly gives the
compact filled-set convention using metric interior, closure, boundary, and
connectedness, adding the corresponding published dependencies. If instead it
claims that every simple closed polygonal chain determines such a filled set,
then that existence/separation theorem must be built locally; the published
`thm-polygonal-jordan-curve` is homed later and cannot become a load-bearing
forward reference. The proposed links to the later boundary-curve convention and
polygonal Jordan theorem are acceptable only as orientation after this local
definition is self-contained.

**B2-3. The harvest is not fully faithful to its stated locators.** ETH §4.2
through Exercise 4.17 also contains the named Schönhardt polyhedron obstruction,
the fact that tetrahedralization counts can differ, and the surrounding
three-dimensional contrast; Erickson §1.4 explicitly defines diagonals and
frugal triangulations before Lemma 1.4. Those entries are absent from
`coverage.json`. They may properly be `out-of-scope` or `inline`, but they need
individual dispositions because the ledger claims those continuous ranges.

Verdict: **insufficient** until B2-1 through B2-3 are closed.

### `improper-and-parameter-dependent-multiple-integrals`

The pair contains the standard exhaustion definition, exhaustion independence,
absolute signed convergence, comparison, dominated continuity and differentiation,
and a well-decomposed Gaussian argument. Its companion includes both classical
iterated-integral failures, failure of differentiation without domination, and a
parameterized Gaussian calculation. The amendments replacing a mere constant
derivative bound by an integrable dominator and explaining the distinction between
arbitrary-exhaustion convergence and endpoint-ordered one-variable convergence are
mathematically necessary and approved.

**B2-4. The polar Gaussian route skips a load-bearing null-set step.** The planned
polar map is injective only on annular sectors with an angular seam. Such sectors,
even as the seam and inner radius shrink, are not themselves a compact Jordan
exhaustion of the whole plane. The strategy then says the seam “closes” and invokes
exhaustion independence, but `def-null-and-content-zero-in-rn` states only the
notion of content zero; it does not state that a bounded Riemann integral is
unchanged after adding or removing a content-zero subset. Add a focused,
source-backed intermediate lemma to that effect (Taylor §3.1 and Trench §7.3 carry
the standard result), or derive it explicitly from the published multidimensional
Lebesgue criterion, indicator-integrability, and monotonicity. Then evaluate full
annuli/discs and use an actual expanding-disc exhaustion. This is a substantive
bridge, not a 30-second proof-step gap.

**B2-5. Taylor's stated range is under-enumerated.** The locator runs through PDF
page 121. Proposition 3.1.24, change of variables for compactly supported
unbounded-integrable functions, begins on that page but has no coverage row. It
belongs naturally as `out-of-scope` because this page deliberately retains local
Riemann integrability and domain exhaustion rather than Taylor's value-truncation
class, but the disposition must be recorded.

The proposed Gaussian amendment is approved: the general compact-Jordan
change-of-variables theorem, not the fixed annular-sector example, must carry the
calculation. The rectangular bad-exhaustion example should use upper endpoints
tending to 1 rather than including the boundary of the open square; that is a
small Step-5 boundary correction and does not change this verdict.

Verdict: **insufficient** until B2-4 and B2-5 are closed.

## Batch 5

### `measures-and-their-basic-properties`

The scaffold otherwise gives a notably complete first chapter: measure and measure
space, finite/sigma-finite/semifinite and probability measures, nullity and
completeness, monotonicity, subadditivity, both monotone-continuity theorems,
inclusion-exclusion, set liminf/limsup inequalities, first Borel-Cantelli,
completion, restriction, atomic measures, semifinite parts, and finite and
sigma-finite pi-system uniqueness. All six design false statements have concrete
in-pair witnesses, and the nine-item B page is substantial. Completion,
sigma-finite uniqueness, semifinite decomposition, and countable weighted sums are
appropriately decomposed. At 50 A-page items, even the required repair does not
force a split.

The Beta's corrections B5-1 through B5-6 and B5-8 are approved. In particular,
the unrestricted three-way continuity equivalence is false, the zero-based dyadic
weights must be $2^{-(k+1)}$, the Borel-Dirac completion replaces an unnecessary
forward pointer, and the zero-infinity decomposition must expose its countable-choice
cost. The earlier drift review correctly found no page-level drift: the single
declared prerequisite has the named design prerequisites in its transitive closure.

**B5-1. Extended scalar multiplication is undefined on an essential case.** Tao
Exercise 1.4.21 states the atomic coefficients in $[0,+\infty]$, and the planned
finite-atom theorem explicitly retains infinite atom weights. But the weighted-sum
strategy handles only the zero coefficient separately and sends every positive
coefficient through “ordinary extended scaling.” In this library
$0\cdot(+\infty)$ is deliberately undefined, so $c=+\infty$ and a null set make
that construction meaningless. Correct
`def-nonnegative-weighted-sum-of-measures` with explicit branches: finite positive
coefficients use ordinary scaling; coefficient zero gives the zero measure; and
coefficient $+\infty$ gives value zero on measure-zero sets and $+\infty$
otherwise. Prove that last branch is a measure before applying nonnegative Tonelli
to countable sums. Synchronize the atomic-classification and countable-discrete
strategies with this convention. Tao Exercise 1.4.21/1.4.22 is the source; the
branching is the required adaptation to the library's stricter extended arithmetic.

The five source harvests are faithful at the named ranges, including Folland's
Exercises 14–15, Tao's extended nonnegative sums and atomic exercises, Pollard's
four-point example, and Galvin's free-ultrafilter correspondence.

Verdict: **insufficient** until B5-1 is closed.

## Design-amendment decisions

- Approve D2-3, D2-4, D2-5, D2-6, and D2-7. D2-6 is justified because the
  proposed right-triangle item would repeat the same construction and route; a
  genuinely different second proof remains welcome under the current owner rule.
- Accept the two polygon dictionary links only as non-load-bearing orientation,
  subject to B2-2.
- Approve B5-1 through B5-6 and B5-8 as written in the batch notes; B5-1 in this
  report is an additional defect in the resulting weighted-sum route, not the
  design amendment bearing the same local label in Beta 5's notes.
- The run's prerequisite-drift review already resolved D2-1, D2-2, and B5-7 as
  no-drift because the omitted design pages are in the declared transitive
  closure. No `plan-spec.json` edit is warranted.

No load-bearing external fallback, new page split, forward proof dependency, or
published-dependency repair is approved.
