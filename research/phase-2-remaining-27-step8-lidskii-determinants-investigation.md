# Step 8 investigation: general Lidskii and Fredholm determinants

Date: 2026-09-22. Investigator owns only this report. No mathematical items,
shared scope/ledger files, engine state, or Step-7 evidence were edited.

## Recommendation

Retain both deferrals to `fredholm-determinants-and-the-lidskii-trace-formula`
as **substantial unmet prerequisites**, not as already discharged results.
The missing theory is source-available but unauthored. Neither escalation has
an existing closure or a genuinely small local remedy on FA-16. The destination
is an existing planned pair, not a proposal for another pair; do not build it
in this Step-8 investigation or reopen Step 7. The authorized scope lead can
record the owner's substantial-prerequisite disposition with this evidence.

Exact rows in `research/phase-2-remaining-27-step8-scope-delta.json`:

- General Lidskii trace formula: decline ID
  `34643b71c890bde3af0719b67e2fb283d4045a6e26e8b44a29396e37c6424772`.
- Fredholm determinant theory: decline ID
  `c48e0c40b0ff7dd29ce48124619f856fc36d12362603bd960251e6588bfb4a45`.

Both are group e, batch 3, source Teschl,
`https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf`,
on `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`.
The source coverage's two deferred rows occur at lines 250–260 of the batch-3
coverage file. They distinguish the nonnormal endpoint from included positive
trace, nuclear-series trace, and cyclicity results.

## Binding scope and verified state

Read `CLAUDE.md` and `README.md` fully, the relevant Step-8 workflow section,
the run owner-authoring direction, FA plan §14.5, batch-3 coverage/notes, the
two escalation rows, and the current supplier statements/proofs below.
`autopilot status` against `.autopilot/phase-2-remaining-27` reports PAUSED at
8-scope, with Step 7 frozen and nothing in flight; Git HEAD observed was
`449fd8efc`. Historical Step-1 status in the batch notes is not current state.

The run owner direction explicitly leaves Lidskii to the later determinant
pair. Binding FA §14.5 (lines 3285–3324) prescribes ten A items and four B
examples, with Kostenko's determinant proof route. The plan at order 288.0801
has `items: []`; its B companion at 288.0802 is also empty. The A prerequisites
are Banach-algebra holomorphic calculus, FA-16, finite-dimensional operator
determinants, and triangularisation/Jordan form. Those page declarations are
not item-level proofs of determinant theory.

## Available suppliers and their limits

The current FA-16 suppliers are authored **draft** items in this run:

- `thm-singular-value-decomposition-for-compact-operators` and
  `lem-nuclear-series-characterizes-trace-norm` supply singular expansions and
  the nuclear infimum formula. Nuclear tails give finite-rank trace-norm
  approximation by a short argument.
- `thm-trace-class-is-a-two-sided-banach-operator-ideal` supplies completeness
  and `||ATB||_1 <= ||A|| ||T||_1 ||B||`.
- `thm-trace-is-absolutely-convergent-and-basis-independent` constructs trace
  from nuclear representations, agrees with every supplied Hilbert basis,
  and proves linearity and `|tr(T)| <= ||T||_1`. Its proof explicitly constructs
  separable support. This is a diagonal/nuclear trace, not the sum of general
  nonnormal eigenvalues.
- `thm-cyclicity-of-the-trace` supplies bounded/trace-class cyclicity.
- `thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues` assumes
  self-adjoint positivity and explicitly states it is **not** general Lidskii.
  Self-adjoint signed eigenvalue sums can similarly be reached by the existing
  orthogonal spectral expansion, but do not settle the nonnormal case.
- `lem-riesz-schauder-ascent-and-descent-stabilize` supplies stabilized finite
  generalized kernels and closed invariant complements at nonzero eigenvalues.
  `thm-riesz-spectral-projection-properties` supplies invariant spectral
  splitting for bounded projections, not orthogonal reduction. These are
  substantial foundations already present, but do not give determinant zeros
  or a trace identity on a quasinilpotent remainder.

`thm-trace-is-sum-of-eigenvalues` is the finite-dimensional theorem, not a
hidden Lidskii supplier. Searches of current `items/` and `library/` found no
Fredholm determinant construction, Weyl product-to-summability interface, or
quasinilpotent trace-zero endpoint. The existing exterior-power items are
finite-dimensional/algebraic; no Hilbert-completed exterior-power supplier was
located. `thm-hadamard-factorization-for-finite-order-entire-functions` exists
and is published; it is a potential analytic supplier, not a substitute for
proving the precise minimal-exponential-type specialization and determinant
growth hypotheses. This investigation does not certify its entire closure.

## Exact missing interfaces

All ten IDs below are the binding future A inventory, not new proposed scope.
A direct filesystem check confirmed all ten A IDs and all four B IDs absent
from `items/` on this inspection.

1. `def-algebraic-multiplicity-for-compact-operators`: define multiplicity by
   the stabilized generalized eigenspace and identify it with the isolated
   Riesz spectral subspace dimension. Earlier Riesz theory makes this bridge
   relatively short.
2. `lem-finite-rank-compressions-converge-in-trace-norm`: on separable support,
   `||T-P_nTP_n||_1 -> 0` for increasing orthogonal finite-rank projections
   strongly approaching the identity. Nuclear tails and convergence on each
   finite set of nuclear vectors give a short proof. This lemma alone closes
   neither escalation.
3. `lem-weyl-eigenvalue-singular-value-inequalities`: for eigenvalues counted
   algebraically, prove product inequalities and derive
   `sum |lambda_j(T)| <= sum s_j(T)`. The required exterior-power norm and
   finite/infinite summability passage are absent. Ordinary self-adjoint Weyl
   inequalities do not supply this claim.
4. `def-fredholm-determinant`: prove that finite-rank determinants have an
   approximation-independent trace-norm limit. Merely writing the limit is
   not well-definedness. Establish the Hilbert exterior powers and their
   singular values, or fully prove an equivalent finite-rank determinant
   estimate and limit construction along the prescribed route.
5. `lem-fredholm-determinant-trace-norm-continuity-and-growth`: prove continuity,
   entire dependence on z, and `|det(I+zT)| <= product(1+|z|s_j(T))`, hence
   `<= C_epsilon exp(epsilon |z|)` for every positive epsilon. Multiplicativity
   under trace-class perturbations must also be proved before its later use.
6. `lem-fredholm-determinant-logarithmic-derivative`: prove, where invertible,
   `D_T'(z)/D_T(z) = tr(T(I+zT)^(-1))`, including `D_T'(0)=tr(T)`.
7. `lem-fredholm-determinant-zeros-and-algebraic-multiplicities`: establish
   that zeros are exactly `-1/lambda`, with the algebraic multiplicities,
   using finite spectral blocks and a boundedly invertible complementary
   block; handle zero-dimensional summands under repository conventions.
8. `lem-quasinilpotent-trace-class-operator-has-zero-trace`: combine the
   zero-free determinant, minimal-type factorization, and derivative at zero.
   Compactness or absence of nonzero eigenvalues alone does not prove it.
9. `lem-generalized-eigenspace-trace-decomposition`: prove the invariant
   quotient/compression and limiting trace accounting without assuming an
   invariant generalized-eigenvector span has invariant orthogonal complement.
10. `thm-lidskii-for-trace-class-operators`: combine absolute summability,
    determinant product/factorization and derivative, or the fully supplied
    decomposition route, with explicit separable-support reduction.

The remaining B inventory is finite-rank determinant, diagonal trace-class
determinant, Volterra-square trace zero, and the invariant/nonreducing
counterexample. Simple examples cannot replace the A proof infrastructure.

For example `[[1,1],[0,0]]` preserves span(e1) but sends e2 to e1, so its
orthogonal complement is not invariant. This directly refutes the attempted
orthogonal-reduction shortcut recorded in the binding amendment. Nor does
trace-norm approximation plus finite-dimensional trace=sum(eigenvalues)
justify passage to the infinite eigenvalue sum without additional control of
algebraic multiplicities and spectral tails.

## Source retrieval and independent reading

Fresh successful retrieval on 2026-09-22:
`https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf`.
Local temporary copy: `/tmp/lidskii-investigation.Z5IbAE/IdealsNotes.pdf`.
SHA-256: `4b15703cd83c0f2a308c1e85ae17d1fe01c4f578e971a902e2d27d9219563a16`.
The initial HTTP retrieval succeeded; no network recovery retries were needed.
`pdftotext` was unavailable, so the already-installed PyMuPDF reader extracted
text directly. This is a parsing fallback, not a failed source retrieval.

Read printed pp. 34–45 (PDF pages 43–54), including the completed exterior
power setup, Theorems 3.4.1–3.4.2 (Horn/Weyl), Proposition 3.4.3 (trace-norm
exterior powers), Corollary 3.4.1 (minimal exponential growth), Theorem 3.4.4
(continuity), Corollary 3.4.2 (multiplicativity), Theorem 3.4.5 (minimal-type
Hadamard statement), Theorem 3.4.6 (zero multiplicities), Theorem 3.4.7
(determinant product and Lidskii), and the opening determinant derivative in
§3.5. The source gives the full operator-theoretic route but states the
Hadamard specialization with an external reference to Levin. No claim is
made to have retrieved/read Levin or all of Kostenko §§3.1–3.5 this turn.
The earlier plan's larger source-reading claim is historical evidence only.

The inspected notes also contain obvious typographical slips (for example
`tr(AB)=tr(AB)` in Corollary 3.4.3 and a missing factor A in a complementary
invertibility sentence of Theorem 3.4.6). The needed complementary expression
is `I+z(I-P_lambda)A`; spectral projection orientation must follow the
library's own resolvent convention. These slips do not undermine the route,
but future authoring must prove the interfaces instead of copying formulas.

## Disposition for each escalation

**General Lidskii:** defer; the missing decisive interfaces are algebraic
eigenvalue summability, the determinant factorization/zero-multiplicity bridge,
and the quasinilpotent trace-zero/decomposition step. Existing positive trace
is not a discharge. Confidence is high that this is substantial missing
theory; no unresolved assertion that Lidskii itself is false or source-blocked.

**Fredholm determinant theory:** defer; no determinant is currently defined,
and construction, continuity, entire/minimal-type growth, multiplicativity,
zeros and logarithmic derivative need a coordinated proof development.
The easy compression bridge is insufficient. Confidence is high that this
is not a bounded local FA-16 amendment.

The scope lead should keep both obligations visible at their existing future
destination and describe them as undischarged substantial prerequisites.
No published-item defect was established by this focused investigation, and
no Phase-3 published-defect ledger entry is requested solely for this draft
scope deferral. No mathematical test/judge certification is claimed.
