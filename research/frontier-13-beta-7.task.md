## Batch 7 of run `frontier-13` — linear recurrences and the transfer-matrix method (SINGLETON)

One A/B pair, singleton because nothing else in this run shares its sources.

> **Orders in the prose scaffold are STALE.** `research/plan-combinatorics-and-categories.md`
> quotes order 177 for this page; the live order is 195.
> `research/plan-spec.json` is the only live source of `order`. Identify
> everything by **page id**.

| | |
|---|---|
| A page | `linear-recurrences-and-rational-generating-functions` · "Linear Recurrences and Rational Generating Functions" · category `combinatorics` · order **195** |
| B page | `linear-recurrences-and-rational-generating-functions-examples` · order **196** |
| requires | `formal-power-series` (193), `eigenvalues-eigenvectors-and-the-characteristic-polynomial` (86), `splitting-fields` (56) — all published |
| prose scaffold | `research/plan-combinatorics-and-categories.md`, block **CB-5 (ENRICHED)** (design body at line ~4617) |

`determinants-of-matrices-over-a-commutative-ring` (order 82, published) is
**already in your closure** transitively, so it is citable without a spec change.
Verify that from `plan-spec.json` yourself before relying on it.

The design also names a prerequisite by its planning label `CB-15`. Labels are
not page ids. Resolve it to an actual page id in `plan-spec.json`, check whether
it is published and in your closure, and **if it is neither, record it as a
recommendation in your notes** — do not cite it and do not edit the spec.

### What the design block asks for

**Kept from the earlier inventory.** The recurrence ⟺ rational generating
function equivalence; partial fractions over a splitting field; the closed form
with polynomial factors at repeated roots; the companion-matrix dictionary;
Fibonacci and Lucas; the Cayley–Hamilton reading; closure of rational series
under sum and product.

**The largest addition — the transfer-matrix theorem** (landmark). For a finite
digraph with edge weights in a commutative ring and adjacency matrix `A`,
`Σ_{n≥0} (A^n)_{uv} x^n` is the rational function
`(−1)^{u+v} det(I − xA : v,u) / det(I − xA)`, and the trace form
`Σ_n tr(A^n) x^n` likewise.

The proof is **formal**: `I − xA` is invertible in `M_p(R[[x]])` because `xA` has
positive order, so **no spectral radius and no convergence hypothesis appears**.
This is the theorem that makes "count the walks / count the words avoiding a
pattern / count the tilings" a theorem rather than a technique. Also added: the
transfer-matrix count of binary words avoiding a fixed factor; the Fibonacci
tiling model as its smallest instance; and the Hadamard product of rational
series is rational.

**The cofactor/adjugate machinery.** The transfer-matrix theorem needs it, and
the design records that the determinant page does not have it. **You mint it
here.** The design says: *decide once, and record the decision in the batch
notes.* Do that — open `determinants-of-matrices-over-a-commutative-ring` on disk
first and say exactly what is and is not there.

**The equivalence is proved by a dimension count, not by partial fractions.** The
design is explicit: "rational ⟺ linear recurrence" comes from a dimension count
of four vector spaces, with the partial-fraction closed form as a **separate**
consequence. They are different statements and only the first is
convention-free. Do not collapse them into one item.

### Traps the design names

1. **Name the splitting field in the Statement.** Do not assume ℝ or ℂ.
2. **Fix the reciprocal-root convention** `Q(x) = ∏(1 − λ_i x)` in a `rem-` item
   and cite it everywhere. Sources disagree; record the disagreement rather than
   silently choosing.
3. **Nothing here is asymptotic.** No growth-rate claims.
4. The eigenvalue form of the transfer-matrix result *does* touch algebraic
   closure. Keep the **cofactor form primary** and state the eigenvalue form with
   its hypothesis attached.

### Size

The earlier inventory sized this A 18 / B 12, but that predates the transfer-matrix
enrichment and the canonical-coverage harvest. If your harvest pushes the A page
past **60 items**, propose a split in your notes at step 2 with the exact cut —
the natural seam is the recurrence/rational-GF equivalence and its closed forms
on one page, the transfer-matrix method on another. Propose it early; after
authoring it is a rewrite.
