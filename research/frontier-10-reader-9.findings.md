# Frontier-10 independent step-6 reader — batch 9

Reader role: independent step 6a, adversarial refuter.  Scope: all 69 items on
the four dispatched pages, their page prose, every numbered proof/refutation /
verification step, every direct dependency citation, every component-provenance
tag, the standard boundary cases, and the six batch-5 interfaces.

## Result

**Fatal findings: none.**  I found no false title or Statement, no
counterexample to a claimed result, no missing hypothesis that changes a
result's truth, and no direction/domain/quantifier inflation in a dependency
citation.

I found six nonfatal proof-licensing or definition-explanation gaps, three
nonfatal provenance misclassifications, and one nonfatal scaffold-to-disk
dependency-record mismatch.  I repaired all of them.  Each mathematical gap is
standard and closeable by a competent reader within Alpha's 30-second rule; no
Statement was weakened.  Alpha must adjudicate the repairs from disk.

No item was added, deleted, renamed, rehomed, or reordered.  I authored no new
result.

## Concrete findings and fixes

### N1 — finite-basis explanation skipped an induction branch (nonfatal)

- **Item:** `def-row-space-column-space-nullspace-and-matrix-ranks`
- **Location:** Definition, final paragraph.
- **Defect:** the old justification that a finite spanning list has a finite
  basis said that “a dependent last vector may be deleted.”  A dependent list
  need not have its last vector in the span of the preceding vectors; the
  dependence may lie entirely in the prefix.  The missing prefix-dependent
  branch is standard but was not stated.
- **Fix:** replaced that sentence by the greedy scan: retain a vector exactly
  when it is outside the span of the retained prefix.  Induction gives both
  independence and equality of spans, including the empty list.

### N2 — RREF-only pivot-column theorem applied to an arbitrary echelon form (nonfatal)

- **Item:** `thm-row-rank-equals-column-rank`
- **Location:** Facts [L2], proof step 2.1.
- **Evidence:** the actual Statement of
  `thm-pivot-columns-form-a-basis-of-the-column-space` begins “Let $R$ be the
  reduced row echelon form of $A$.”  The old proof's Given instead chose an
  arbitrary echelon form and used [L2] without changing matrices.
- **Fix:** step 1.1 now uses the arbitrary echelon form only for row rank and
  its pivot count.  Step 2.1 separately lets $Q$ be the RREF, applies [L2] to
  $Q$, and compares both counts through step 1.1.  This also explicitly covers
  pivot count zero.

### N3 — the cited coordinate theorem presupposed linearity (nonfatal)

- **Item:** `cor-matrix-rank-equals-the-rank-of-its-linear-map`
- **Location:** old Fact [L4], proof step 1.1.
- **Evidence:** `thm-coordinate-action-of-a-linear-map` assumes an already
  linear map $T$; it does not prove that an arbitrary matrix formula
  $x\mapsto Ax$ is linear.  The old proof called this formula a linear map
  without licensing that assertion.
- **Fix:** replaced the citation by the entry formula in
  `def-matrix-product-and-identity-matrix` and the distributive/scalar laws in
  `thm-matrix-multiplication-laws`.  Step 1.1 now proves linearity before
  identifying the image with the column space.

### N4 — set equality did not license “affine subspace” (nonfatal)

- **Item:** `thm-solution-set-is-an-affine-nullspace`
- **Location:** Statement's final sentence and proof after old step 2.1.
- **Defect:** the proof established $S(A,b)=x_p+N(A)$ but never established
  that $N(A)$ is a linear subspace, a hypothesis in the cited affine-subspace
  definition.
- **Fix:** added the repaired multiplication-map corollary and
  `thm-linear-kernel-image-and-injectivity`.  New step 3.1 identifies
  $N(A)=\ker L_A$, proves it is a subspace, and only then invokes the translate
  definition.

### N5 — invertible-matrix equivalence cycle was not actually closed (nonfatal)

- **Item:** `thm-invertible-matrix-theorem`
- **Location:** proof steps 1.1, 2.1 and 4.1.
- **Defects:**
  - step 1.1 proved isomorphism $\Rightarrow$ trivial kernel, not the converse,
    while old step 4.1 called all preceding implications equivalences;
  - step 2.1 asserted rank $n\Leftrightarrow n$ pivots without citing the
    pivot-count result;
  - the first repair draft still compressed “bijective, hence a linear
    isomorphism” without showing the inverse function is linear.
- **Fix:** added `thm-row-rank-equals-column-rank` for the pivot count and
  `def-linear-isomorphism-and-invertible-linear-map` for the exact target
  notion.  Step 4.1 now closes the cycle constructively: under condition 7,
  define $S(b)$ as the unique solution of $Ax=b$; uniqueness gives both inverse
  equations, and applying the inverse to
  $L_A(S(\lambda y+z))=L_A(\lambda S(y)+S(z))$ proves $S$ linear.  Thus
  condition 7 returns condition 2 and hence condition 1.  The $n=0$ case
  remains explicit.

### N6 — transpose citation did not state the entry formula used (nonfatal)

- **Item:** `cor-determinant-is-alternating-multilinear-in-the-rows`
- **Location:** old Fact [L3], proof step 1.1.
- **Evidence:** the actual Statement of `thm-ring-matrix-arithmetic-laws`
  states product-transpose and double-transpose laws but not the entrywise fact
  that transposition interchanges rows and columns.
- **Fix:** replaced it with the exact Definition clause
  $(A^{\mathsf T})_{ji}=a_{ij}$ from
  `def-ring-matrix-product-identity-and-transpose`.

### N7 — exact locally constructed witnesses were labelled literature-derived (nonfatal)

- **Items and fixes:**
  - `ex-row-echelon-form-is-not-unique-but-rref-is`: the sources support REF
    nonuniqueness/RREF uniqueness, but not this exact displayed witness;
    `provenance.statement` changed from `literature-derived` to `ai-altered`.
  - `cex-row-equivalent-matrices-can-have-different-column-spaces`: Hefferon
    states the phenomenon and gives a different witness; the local witness is
    an alteration, so the tag changed to `ai-altered`.
  - `cex-antisymmetric-need-not-be-alternating-in-characteristic-two`: New's
    notes support the characteristic-two boundary but do not give the exact
    $f(x,y)=x_0y_0$ construction over $\mathbb Z/2$; the tag changed to
    `ai-generated` and `generation.role: counterexample` was added.
- **Truth check:** the last witness is bilinear, satisfies $f(x,y)=-f(y,x)$
  because $-1=1$ in $\mathbb Z/2$, and has $f((1,0),(1,0))=1$, so it is not
  alternating.

### N8 — batch scaffold and plan spec lagged five already-authored dependency changes (nonfatal bookkeeping)

- **Files:** `research/frontier-10-batch-9.pages.json` and
  `research/plan-spec.json`.
- **Evidence:** actual item frontmatter and the batch notes already recorded
  five Step-5 dependency changes, but both JSON records still named the old
  lists.  The affected items were
  `thm-row-equivalence-characterisations`,
  `cor-rank-criterion-for-consistency`,
  `cor-determinant-is-a-polynomial-in-the-matrix-entries`,
  `cor-invertible-matrix-has-unit-determinant`, and
  `cor-determinant-of-an-inverse`.
- **Fix:** synchronized those five records, then synchronized the dependency
  changes from N3–N6.  A direct comparison of every batch-9 item's on-disk
  `deps` against both JSON records now reports zero mismatches.

## Adversarial checks of generated Statements and special boundaries

After N7, five batch Statements/Constructions carry
`provenance.statement: ai-generated`.  I tried the concrete failure modes rather
than accepting their proofs by inspection:

- `cex-solution-count-trichotomy-fails-over-a-finite-field`: exhaustive
  evaluation of $x+y=0$ on $\mathbb F_2^2$ gives exactly $(0,0)$ and $(1,1)$.
- `ex-integer-determinant-two-is-invertible-over-q-not-z`: the displayed
  diagonal matrix has determinant $2$, inverse
  $\operatorname{diag}(1/2,1)$ over $\mathbb Q$, and no inverse over
  $\mathbb Z$ because $2$ is not a unit.
- `cex-antisymmetric-need-not-be-alternating-in-characteristic-two`: the direct
  calculation is recorded under N7.
- `cex-naive-quaternion-determinant-is-not-row-alternating`: equal rows give
  $ij-ji=k-(-k)=2k\ne0$; the cited quaternion Statement explicitly supplies
  $ij=k$, $ji=-k$, and $k\ne-k$.
- `ex-row-operations-on-a-singular-matrix-over-z-mod-six`: the three displayed
  determinant computations agree with swap/scaling/row-addition, while
  determinant $2$ is nonzero but not a unit, so the matrix is not invertible.

The infinite-field hypothesis in the solution-count trichotomy, positive-size
hypothesis for determinant, zero ring, zero-sized Gaussian shapes, singular
matrices, zero divisors, characteristic two, noncommutativity, empty
reductions, pivot-count zero, and both directions of every top-level iff were
checked.  I found no further defect.

## Batch-5 interface audit

I read the exact Statements and proofs of all six supplied interfaces and the
actual batch-5 consumer steps in
`def-jacobian-determinant-of-a-c-one-map`,
`thm-linear-images-scale-jordan-content-by-absolute-determinant`,
`thm-change-of-variables-for-compact-jordan-sets`, and
`cor-change-of-variables-on-bounded-open-jordan-sets`.

- `def-determinant-of-a-square-matrix`: correctly defines the real determinant
  specialization and $\lvert\det A\rvert$ used by the Jacobian definition.
- `thm-determinant-under-elementary-row-operations`: covers all three row laws
  over a commutative ring, including singular matrices.
- `thm-determinant-multiplicative`: exact ring domain and direction match.
- `thm-invertible-matrices-factor-into-elementary-matrices`: exact finite square
  real specialization used downstream.
- `thm-real-square-matrix-invertible-iff-determinant-nonzero`: exact real-field
  biconditional; it is not inflated to arbitrary rings.
- `cor-determinant-is-a-polynomial-in-the-matrix-entries`: displays the finite
  Leibniz polynomial needed for the downstream continuity argument and asserts
  no stronger analytic result.

No propagated overstatement was found.

## Dependency and source verification

I opened the actual Statement or Definition section of every dependency cited
within the batch.  This included all 52 distinct dependencies outside batch 9;
none is legacy-unclassified and none has an AI-generated Statement.  All
internal batch dependencies were read as items in their own right.  I found no
unchecked dependency and no remaining inaccurate paraphrase after N2, N3 and
N6.

For provenance/source support I also checked the relevant portions of:

- [Margalit–Rabinoff, Interactive Linear Algebra](https://textbooks.math.gatech.edu/ila/ila.pdf);
- [Hefferon, Linear Algebra](https://jheffero.w3.uvm.edu/linearalgebra/book.pdf);
- [New, MATH 146 notes](https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf);
- [Massot, determinant chapter](https://www.imo.universite-paris-saclay.fr/~patrick.massot/enseignement/poly_alg/cha-algebres.html).

These checks confirmed the sourced core claims (RREF uniqueness, pivot/column
space behavior, the invertible-matrix theorem, alternating versus
antisymmetric behavior, Leibniz determinant, transpose and multiplicativity)
and exposed only the exact-witness provenance distinctions in N7.

## Per-item coverage ledger

In this ledger, **clean** means I read the title, Statement/Construction, all
Facts & Assumptions and their actual targets, every numbered proof/refutation /
verification step, boundary behavior, and the statement/proof provenance tags,
and found no concrete defect.  A finding reference means the same full read was
performed and the named issue was repaired.

### `gaussian-elimination-and-row-reduction` — 29/29

| Item | Finding |
|---|---|
| `def-elementary-row-operations-and-row-equivalence` | clean |
| `lem-elementary-row-operations-are-reversible` | clean |
| `def-elementary-matrix` | clean |
| `thm-elementary-row-operations-are-left-multiplication` | clean |
| `cor-elementary-matrices-are-invertible` | clean |
| `cor-a-row-reduction-is-a-product-of-elementary-matrices` | clean |
| `def-matrix-equation-augmented-matrix-and-linear-system` | clean |
| `thm-row-operations-preserve-solution-sets` | clean |
| `def-row-echelon-reduced-row-echelon-and-pivots` | clean |
| `thm-gaussian-elimination-produces-row-echelon-form` | clean |
| `thm-gauss-jordan-elimination-produces-reduced-row-echelon-form` | clean |
| `thm-reduced-row-echelon-form-is-unique` | clean |
| `def-row-space-column-space-nullspace-and-matrix-ranks` | N1, repaired |
| `lem-row-operations-preserve-row-space` | clean |
| `lem-nonzero-echelon-rows-form-a-basis-of-the-row-space` | clean |
| `thm-row-equivalence-characterisations` | mathematics clean; N8 record synced |
| `lem-row-operations-preserve-column-relations` | clean |
| `thm-pivot-columns-form-a-basis-of-the-column-space` | clean |
| `thm-row-rank-equals-column-rank` | N2, repaired |
| `cor-matrix-rank-equals-the-rank-of-its-linear-map` | N3, repaired |
| `cor-matrix-rank-nullity` | clean |
| `def-affine-subspace-of-a-vector-space` | clean |
| `thm-solution-set-is-an-affine-nullspace` | N4, repaired |
| `thm-rref-consistency-and-free-variable-parametrisation` | clean |
| `cor-rank-criterion-for-consistency` | mathematics clean; N8 record synced |
| `cor-solution-count-trichotomy-over-an-infinite-field` | clean |
| `thm-invertible-matrix-theorem` | N5, repaired |
| `thm-invertible-matrices-factor-into-elementary-matrices` | clean; batch-5 interface checked |
| `cor-inverse-by-row-reducing-an-augmented-matrix` | clean |

### `gaussian-elimination-and-row-reduction-examples` — 9/9

| Item | Finding |
|---|---|
| `ex-row-reduction-with-a-unique-solution` | clean |
| `ex-inconsistent-system-detected-by-a-pivot` | clean |
| `ex-infinite-solution-affine-parametrisation` | clean |
| `ex-inverse-by-augmented-row-reduction` | clean |
| `ex-row-echelon-form-is-not-unique-but-rref-is` | N7 provenance, repaired; mathematics clean |
| `ex-parameter-dependent-rank-drop` | clean |
| `ex-elementary-factorisation-of-an-invertible-matrix` | clean |
| `cex-row-equivalent-matrices-can-have-different-column-spaces` | N7 provenance, repaired; refutation clean |
| `cex-solution-count-trichotomy-fails-over-a-finite-field` | generated Statement exhaustively checked; clean |

### `determinants-of-matrices-over-a-commutative-ring` — 24/24

| Item | Finding |
|---|---|
| `def-matrices-over-a-commutative-ring` | clean |
| `def-ring-matrix-product-identity-and-transpose` | clean |
| `thm-ring-matrix-arithmetic-laws` | clean |
| `def-invertible-matrix-and-similarity-over-a-commutative-ring` | clean |
| `prop-field-and-ring-matrix-interfaces-agree` | clean |
| `def-multilinear-alternating-normalized-and-antisymmetric-matrix-functions` | clean |
| `lem-alternating-multilinear-implies-antisymmetric` | clean |
| `lem-rigidity-of-alternating-multilinear-matrix-functions` | clean |
| `def-determinant-of-a-square-matrix` | clean; batch-5 interface checked |
| `cor-determinant-is-a-polynomial-in-the-matrix-entries` | mathematics and batch-5 interface clean; N8 record synced |
| `thm-leibniz-determinant-is-alternating-multilinear-and-normalized` | clean |
| `thm-determinant-is-the-unique-normalized-alternating-multilinear-function` | clean |
| `cor-determinant-vanishes-with-a-zero-or-repeated-column` | clean |
| `thm-determinant-of-transpose` | clean |
| `cor-determinant-is-alternating-multilinear-in-the-rows` | N6, repaired |
| `def-row-transformations-over-a-commutative-ring` | clean |
| `thm-determinant-under-elementary-row-operations` | clean; batch-5 interface checked |
| `def-triangular-and-diagonal-matrices-over-a-commutative-ring` | clean |
| `thm-determinant-of-a-triangular-matrix` | clean |
| `thm-determinant-multiplicative` | clean; batch-5 interface checked |
| `cor-invertible-matrix-has-unit-determinant` | mathematics clean; N8 record synced |
| `thm-real-square-matrix-invertible-iff-determinant-nonzero` | clean; batch-5 interface checked |
| `cor-determinant-of-an-inverse` | mathematics clean; N8 record synced |
| `cor-determinant-is-invariant-under-similarity` | clean |

### `determinants-of-matrices-over-a-commutative-ring-examples` — 7/7

| Item | Finding |
|---|---|
| `ex-two-by-two-determinant-formula` | clean |
| `ex-three-by-three-leibniz-expansion` | clean |
| `ex-integer-determinant-two-is-invertible-over-q-not-z` | generated Statement checked; clean |
| `cex-antisymmetric-need-not-be-alternating-in-characteristic-two` | N7 provenance, repaired; counterexample checked |
| `cex-naive-quaternion-determinant-is-not-row-alternating` | generated Statement checked; refutation clean |
| `ex-row-operations-on-a-singular-matrix-over-z-mod-six` | generated Statement checked; clean |
| `fs-determinant-is-additive-on-matrices` | false statement correctly refuted; clean |

## Files changed

Mathematical/provenance repairs:

- `items/def-row-space-column-space-nullspace-and-matrix-ranks.md`
- `items/thm-row-rank-equals-column-rank.md`
- `items/cor-matrix-rank-equals-the-rank-of-its-linear-map.md`
- `items/thm-solution-set-is-an-affine-nullspace.md`
- `items/thm-invertible-matrix-theorem.md`
- `items/cor-determinant-is-alternating-multilinear-in-the-rows.md`
- `items/ex-row-echelon-form-is-not-unique-but-rref-is.md`
- `items/cex-row-equivalent-matrices-can-have-different-column-spaces.md`
- `items/cex-antisymmetric-need-not-be-alternating-in-characteristic-two.md`

Synchronized records:

- `research/frontier-10-batch-9.pages.json`
- `research/frontier-10-batch-9.proof-contracts.json`
- `research/plan-spec.json`

No `verification.audited` or judge block was added.  No judge was run.

## Mechanical validation

- `reflow.mts`: all six changed mathematical items unchanged.
- Scoped `precheck.mts`: 5 proof-bearing changed items checked, 0 failing (the
  changed definition has no phase proof body).
- Scoped `rendercheck.mjs`: all 9 changed item files plus this report, 0
  errors.
- Scoped `prosecheck.mjs --warnings`: 0 errors.  Its 5 heuristic warnings are
  count phrases required by this audit report; none names an item file.
- Batch content policy: 69 scoped items, 0 errors, 0 warnings.
- Coverage checklist: 2 A-page checklists, 128 harvested results, 0 errors, 0
  warnings.
- Strict proof contracts: 56/56 proof-bearing items, 0 errors, 0 warnings.
- Direct batch item/manifest/plan dependency comparison: 0 mismatches.
- Global `depcheck.mjs`: PASS — no cycles, all references resolve, and no draft
  item is on a published page.  Its displayed legacy `cited-not-in-deps`
  warnings name no batch-9 item.
- Whole-run `validate-plan.mjs --rehomed`: PASS — declared page order is
  acyclic and consistent, with no item-level cycle, forward reference, B-page
  dependency or unresolved id among pages with item lists.  An initial run saw
  a transient unrelated `ramsey-theory` error while another reader's edits were
  in flight; the final retry is green.

## Unchecked or outside role

No dispatched item, proof step, direct dependency citation, provenance tag, or
batch-5 interface was left unchecked.  I did not independently repeat the full
128-heading canonical source harvest; Step 6b.0 owns that re-harvest.  I did
check the source passages needed to adjudicate the mathematical Statements and
the three provenance corrections above.  Paired judging and Alpha adjudication
are later roles and were not performed.

## Fatal-error ledger for step 10

None.
