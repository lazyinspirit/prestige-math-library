# Batch 3 authoring notes — spline evaluation and interpolation algorithms

**Continuation notice.** The sections marked historical record the original native
writer's 11:59 handoff and are retained as evidence. The current state, additions,
checks, and any remaining out-of-scope reconciliation are in **Batch 3 continuation**
below; the original dispatch result and prompt remain unchanged.

## Original plan and design reconciliation at writer handoff (historical)

- The `APP-SPLINE` scope and examples in the repaired design and current
  `plan-spec.json` agree: local de Boor coefficient evaluation, work and
  knot-insertion preservation; a clamped cubic variant; a boundary-qualified
  fourth-order estimate; the natural endpoint caveat; and the three assigned
  B-page examples. No scope item was dropped.
- The earlier linear audit says that `NA-02` and `NA-10` are same-frontier
  suppliers and that no external page token is recorded. The current batch
  manifest instead lists the published pages
  `finite-precision-direct-factorizations` and
  `polynomial-interpolation-and-remainder`; the run's dependency-level input
  gives batch 3 level 0 with no prerequisite batches, and neither page is an
  owner in the current 71 batch manifests. Both actual library pages and the
  exact item bodies used here are published. This pair uses those verified
  published items as external item dependencies and records no in-run edge in
  the cross-batch input. The older same-frontier wording remains an owner
  reconciliation point; no speculative edge or page edit was made.
- The old audit calls the clamped endpoint estimate a hold, while the current
  plan explicitly requires its proof. The local proof is supplied below for
  arbitrary strictly increasing partitions and exact endpoint slopes. The
  natural cubic system and interpolant remain the already-published method.
- At the original writer handoff, the plan's computational natural-spline
  clause referred to an existing tridiagonal factor/solve, but the published
  `finite-precision-direct-factorizations` page had no natural-cubic routine
  or matching successful-call residual theorem. The then-missing hypotheses
  were an explicit tridiagonal factor/solve procedure, pivot/range statuses,
  and a residual certificate applicable to the natural-cubic matrix. The
  original writer correctly left the floating-point forward claim escalated;
  this was a missing established local composition, not an open problem.

- At that same handoff, the cycle1 packet's IDs
  `alg-natural-cubic-tridiagonal-cholesky-with-residual-certificate`,
  `thm-natural-tridiagonal-cholesky-solve-residual-certificate`, and
  `thm-computed-natural-cubic-spline-forward-error-certificate` were proposals
  only. The owner-requested continuation below has now installed and checked
  the three carriers at levels 0, 1 and 2. Their draft proofs remain subject to
  all native review and acceptance gates.

## Original suppliers checked by the native writer (historical)

- `def-b-spline-space-and-basis` and
  `thm-spline-polynomial-reproduction`: checked the actual definition,
  zero-denominator and half-open conventions, active-span support, local
  basis, nonnegativity and partition of unity. The de Boor and insertion
  proofs use the stated 0-based reindexing `t_i = xi_{i+1}`. The new
  `lem-b-spline-basis-refinement-under-single-knot-insertion` gives the
  degree-by-degree refinement identity with the correct inserted-knot map
  `t'_j=t_j` for `j<=k`, `t'_(k+1)=u`, and `t'_j=t_(j-1)` for `j>=k+2`;
  the curve-preservation theorem now consumes that proved local supplier.
- `def-natural-cubic-spline` and
  `thm-natural-cubic-interpolant-exists-uniquely-at-distinct-knots`: checked
  the definition, exact tridiagonal equations, cubic piece formula, endpoint
  slope identities and uniqueness proof. The new natural-spline residual
  transfer uses this exact system.
- `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`:
  checked the normal-or-zero success convention, per-operation relative
  error and first range-failure behavior. The de Boor forward bound is
  conditional on every operation succeeding; it asserts no range guarantee.
- `lem-taylor-integral-remainder`: checked its hypotheses and absolute
  remainder bound. The clamped proof uses it for the cubic Taylor remainder
  and endpoint derivative estimates. No arbitrary choice principle is used.
- The local spline quasi-interpolant rate is not broadened or used to prove
  cubic interpolation error.

## Original inventory and dependency levels at writer handoff (historical)

The initial 11 A-page items and 3 B-page examples were inventoried before
their carriers. During the final proof audit, the knot-refinement induction
was promoted to a separate A-page lemma; its manifest entry and exact level
were added, and the curve-preservation consumer's dependency and level were
reconciled. The current 12/3 inventories agree across the manifest and page
files. Levels are computed only from in-run item suppliers:

- Level 0: both algorithms, the clamped definition, and the nodal
  second-derivative perturbation lemma.
- Level 1: the B-spline basis-refinement lemma; de Boor equivalence and work;
  clamped existence/uniqueness; and natural-spline residual transfer.
- Level 2: de Boor forward error, knot insertion preservation, clamped
  fourth-order error, and the repeated-knot example.
- Level 3: the natural $x^2$ endpoint example and the knot-insertion example;
  the natural example also cites the clamped rate theorem.

The manifest's external dependencies do not increase these levels. The
required run-level dependency input currently records batch 3 at level 0.

## Original source dispositions and mathematical notes (historical)

Source locators, harvested results, dispositions, source searches and fetch
stamps are in `numerical-analysis-remaining-71-2026-10-17-batch-3.coverage.json`.
The LeMesurier Chapter 3.4 natural-error paragraph is not used as a supplier:
the exact local $x^2$ calculation gives error $H^2/16$ on the first interval
for the three-node natural interpolant on $[0,2H]$, while $f^{(4)}=0$. The
controlling plan's natural endpoint caveat is retained.

The clamped error proof estimates the nodal second-derivative residual row by
row. The clamped tridiagonal matrix has diagonal-dominance margin $h_0$ and
$h_{i-1}+h_i$ in its interior rows, so the bound is independent of the mesh
ratio. The exact endpoint derivative conditions make the endpoint slope
errors zero; the interior slope errors are bounded by $MH^3/2$. Cubic
Hermite remainders then yield $83MH^4/324$.

The final residual-transfer audit corrected the row estimate to use an
off-diagonal absolute row sum **at most** $h_{i-1}+h_i$; endpoint rows omit
the fixed endpoint-curvature coefficient, and for $r=3$ the one-by-one
interior system has no off-diagonal entries. The knot-insertion induction uses
the exact insertion map $t'_j=t_j$ for $j\le k$, $t'_{k+1}=u$, and
$t'_j=t_{j-1}$ for $j\ge k+2$.

## Original author checks at 11:59 handoff (historical)

- `node tools/tsx-run.mjs tools/author-check.mts numerical-analysis-remaining-71-2026-10-17 3` passed. Its recorded precheck passed 12/12 proofs, rendercheck passed all 17 batch files, content policy passed 15/15 items with no warnings, and strict proof contracts passed 12/12 with no errors or warnings. Receipt: `research/numerical-analysis-remaining-71-2026-10-17-author-check-3.json`.
- `node tools/proof-layout.mjs` on the 12 explicitly changed proof-bearing items passed: 36 steps, 0 defects.
- Scoped `item-dependency-levels` recomputation passed for all 15 batch items with no errors and maximum item level 3. The run-level dependency input still places batch 3 at level 0 with no prerequisite batches. The whole-run check currently has 89 unrelated errors: 84 other-page empty inventories and 5 stale item dependency levels; none is in this batch.
- Focused `depcheck` passed for the 15 batch items, their 40-item dependency closure and 289-page cycle closure, with no errors or warnings. Focused `fwdcheck` passed with no forward references, external-axiom check passed for 15 items, and `citecheck` scanned 15 items with no warnings.
- `source-fetch-check --stamp` verified all 3/3 sources and found all 3 resolved (0 new stamps); the coverage checklist passed for 1 page and 16 harvested results with 0 errors or warnings.
- `step1-decisions record` created 15 `ready` records with exact manifest dependency lists and no `--owner` flag; a fresh hash check confirms 15/15 current and closed.

These are the original authoring and mechanical-check results, not independent
review or mathematical acceptance. The computational claim was escalated at
that time as stated above; the current continuation result follows.


## Batch 3 continuation — owner request dac856a8-a7f5-463e-9868-2be31626f0d7

The continuation preserves the original dispatch result and its source/prompt
hashes. It adds three draft A-page carriers to the already inventoried batch,
leaving 15 A-page items and the original 3 B-page examples (18 items total).
The A page remains below its 100-item cap, and no pair or example was removed.

- `alg-natural-cubic-tridiagonal-cholesky-with-residual-certificate`, level 0,
  specializes the published rounded Cholesky and triangular substitutions to
  the stored natural-cubic tridiagonal matrix. It specifies exact-input data,
  operation order, first-failure statuses, the successful-call residual
  calculation, exact rational certificate arithmetic, and the separate
  piece-evaluation error. Its `justified_by` theorem proves well-definedness.
- `thm-natural-tridiagonal-cholesky-solve-residual-certificate`, level 1,
  proves strict diagonal dominance and positive definiteness of every
  successfully assembled matrix, exact agreement of the sparse factor/solve
  with the dense published recurrences after exact-zero work is omitted, the
  conditional factor/solve perturbation bounds with their separate hypotheses,
  the actual rounded residual bound, termination, and linear arithmetic and
  storage work. The residual certificate itself needs only the algorithm's
  $(n-1)u<1$ condition.
- `thm-computed-natural-cubic-spline-forward-error-certificate`, level 2,
  decomposes the exact-system residual into the rounded solver residual and the
  matrix and right-hand-side assembly discrepancies. The resulting function
  bound is for exact evaluation of the returned piecewise cubic reconstruction;
  it does not assert that the reconstruction is $C^1$ or that rounded piece
  evaluation has zero error. The $r=2$ branch is the exact line with $B=0$.

The basis-refinement lemma now derives the three recurrence coefficient
identities in full. It treats the first and last coefficients, then the middle
coefficient at its lower boundary, strict interior, and upper boundary; it
also records the degree-zero split, $q=1$, repeated-knot zero denominators,
right-cell convention and left limit at $b$. The preservation theorem now
sets $P_{-1}=P_n=0$ only for bookkeeping and displays both finite sums and the
index reindexing. The existing linear example was read and its updated
controls $(0,1/2,1)$ and two refined pieces remain correct.

The residual-transfer proof already contained the required off-diagonal row
sum inequality $R_i\le h_{i-1}+h_i$, including the $r=3$ one-row case. Its
current bytes contain no literal carriage return. That item and its sound
Statement were preserved without a duplicate repair.

### Dependencies and source record

The new item dependencies and levels match the current batch manifest:
algorithm level 0; successful-call theorem level 1; forward theorem level 2.
Other original item levels are unchanged. The run-level batch input still
records batch 3 at level 0 with no prerequisite batches, and
`batch-3.cross-batch-dependencies.json` remains empty because this pair has no
in-run inbound item supplier. The page-level downstream edge from batch 5 to
APP-SPLINE remains open in batch 5's evidence for owner/supplier-reviewer
follow-through. I read its current manifest and notes: the natural-spline
undershoot example depends on the published natural-spline definition and
checks its displayed function directly; no APP-SPLINE knot-insertion proof is
used as a PCHIP or Bernstein premise. No batch-5 files were edited.

The direct rounded suppliers and their proofs were reread: the operationwise
real/complex model, dense rounded Cholesky, Cholesky backward-error theorem,
triangular-substitution backward-error lemma, rounded linear residual lemma,
finite arithmetic schedule lemma, and exact natural-cubic system. Their
relevant transitive statements were checked, including the theta bound,
triangular recurrence, positive-definite Cholesky factor, Euclidean/Frobenius
norm inequalities, and choice requirements. No Choice axiom is used by the
three local results. No change to published content or shared plans was made.

The batch coverage now records five inspected sources and 22 harvested results.
The original three spline-source stamps are preserved. The two numerical
linear-algebra sources are Driscoll–Braun, *Fundamentals of Numerical
Computation*, §2.9, and Stuart–Voss, *Matrix Analysis and Algorithms*, §§2.6,
3.4 and 5.1. Their full relevant text was inspected. Existing successful
fetch attempts/stamps were reused for those same URLs; the final
`source-fetch-check --stamp` verified 5/5 with no new stamps and no drops.
No retrieval failed, so no source-resolution retry or drop record was needed.

### Current scoped checks and readiness

- `author-check` passed for all 18 batch items: precheck passed 14/14
  proof-bearing items; rendercheck passed 20 batch files; content policy passed
  18/18 with no warnings; strict proof contracts passed 14/14 with no warnings.
- `proof-layout` passed on five explicitly changed item files (the four proof-bearing
  carriers plus the algorithm definition): 16 proof steps, zero defects.
- Scoped item dependency recomputation passed for all 18 items, with no cycle
  or mismatch and maximum level 3.
- Focused `depcheck` passed for 18 items; its selected prerequisite/cycle
  closure covered 804 items and 289 pages. Focused `fwdcheck` passed for 18
  items and its closure covered 790 items and 297 pages. `citecheck` scanned
  all 18 batch items with no warnings. Coverage checklist passed for one A page
  and 22 harvested results. Source fetch check passed for 5/5 source entries.
- Current Step-1 decisions are ready for all 18 batch items. The current scoped
  readiness check found no local batch-3 work remaining. The six changed or new
  records were written with `step1-decisions record`, no owner flag, exact
  manifest dependencies, and item-specific evidence.

These are authoring and mechanical-check results only. They do not constitute
independent mathematical review, native gate completion, proof acceptance, or
publication.

### Final proof refresh and Step-1 record blocker

After that readiness snapshot, final review made the first dense Cholesky pivot
case explicit, added the published norm definitions to the residual theorem,
expanded its linear-work and storage count, and made the three-diagonal storage
and streamed discrepancy calculation explicit in the algorithm. The manifest
and exact proof-contract excerpts were updated to match. The final scoped runs
passed again: author-check (14/14 proof-bearing items; 18/18 content-policy
items), proof-layout (five changed carriers, 16 steps, zero defects), strict
proof contracts (14/14), dependency levels (18 items, maximum 3), focused
depcheck (804-item/289-page closure), focused fwdcheck (790-item/297-page
closure), extcheck (18 items), citecheck (18 items, zero warnings), coverage
checklist (22 results), and source-fetch-check (5/5, no new stamps).

The earlier 18/18 Step-1 readiness snapshot is no longer current: the final
changes require refreshed records for `alg-natural-cubic-tridiagonal-cholesky-with-residual-certificate`,
`thm-natural-tridiagonal-cholesky-solve-residual-certificate`, and
`thm-computed-natural-cubic-spline-forward-error-certificate`. I attempted the
required `node tools/step1-decisions.mjs record` command without `--owner` for
the residual theorem; it exited before writing with `Duplicate item undefined`.
The cause is outside this batch: batch 56's
`supg-and-residual-based-stabilized-finite-elements` manifest currently stores
bare string IDs in `items` (for example, its first entry is
`"def-supg-one-dimensional-convection-diffusion-model"`), while the ordinary
Step-1 snapshot loader requires item objects and reads `item.id`. I did not
edit batch 56 or manufacture readiness records outside the required tool. The
15 other batch-3 records remain unchanged; refreshed readiness for these three
items is pending owner reconciliation of the run snapshot input. This is a
tool-input blocker, not a mathematical gap. No native review or acceptance is
claimed.
