# Step 5a independent reader report — batch 2

Run `phase-2-remaining-27` · role `reader` · label `reader-2` · covers batch `2`
(2 A pages, 2 B pages, 42 items). Read from the current files on disk, not from
the batch manifest or the author notes; the manifest, coverage and proof
contracts were used only as navigation and as evidence to be re-checked.

## Opened inventory

### Pages (4)

| Page | Kind | Items listed | Verdict |
| --- | --- | --- | --- |
| `library/functional-analysis/compact-operators-and-riesz-schauder-theory.md` | A | 26 | Pass, with one repaired item (below) |
| `library/functional-analysis/compact-operators-and-riesz-schauder-theory-examples.md` | B | 7 (`examples:`) | Pass |
| `library/functional-analysis/square-integrable-kernels-and-hilbert-schmidt-compactness.md` | A | 5 | Pass |
| `library/functional-analysis/square-integrable-kernels-and-hilbert-schmidt-compactness-examples.md` | B | 4 (`examples:`) | Pass |

For each page I compared the frontmatter item/example list against the batch
manifest (exact match, same order, including the `items: [] / examples: [...]`
convention of the two examples pages), and I read the page prose against the
items it summarises: every claim in the four page summaries (definition route,
order of results, hypotheses such as "Banach target", "under Dependent Choice",
"Countable Choice", "Axiom of Choice", the exact truncation errors, the Fredholm
alternative's adjoint condition, the Atkinson/parametrix programme, the
rectangle-density and completed-product reductions, the discontinuity witness,
and the closing approximation-property remark) is supported by the item it
describes. No page-level false claim was found.

### Batch items (42, all opened in full, statement + facts + proof)

A page `compact-operators-and-riesz-schauder-theory`:
`def-compact-linear-operator`, `lem-dependent-choice-implies-countable-choice`,
`thm-sequential-characterization-of-compact-operators`,
`lem-finite-rank-operators-are-compact`,
`lem-compositions-with-a-compact-operator-are-compact`,
`lem-linear-combinations-of-compact-operators-are-compact`,
`thm-norm-limit-of-compact-operators-is-compact` **(repaired, edit 1)**,
`def-approximable-operator`, `thm-schauder-compact-adjoint-theorem`,
`thm-compact-operator-sends-weakly-convergent-sequences-to-norm-convergent-sequences`,
`lem-kernel-of-identity-minus-compact-is-finite-dimensional`,
`lem-range-of-identity-minus-compact-is-closed`,
`lem-riesz-schauder-ascent-and-descent-stabilize`,
`thm-fredholm-alternative-for-identity-minus-compact`,
`lem-neumann-series-and-small-perturbations-of-bounded-inverses`,
`def-spectrum-and-resolvent-of-a-bounded-operator`,
`thm-riesz-schauder-spectrum-of-a-compact-operator`,
`cor-spectrum-of-a-compact-operator-is-countable-with-only-zero-as-possible-accumulation`,
`def-fredholm-operator-cokernel-and-index`, `lem-fredholm-splitting-and-parametrix`,
`lem-a-compact-remainder-estimate-forces-closed-range`, `thm-atkinson`
**(repaired, edit 2)**, `thm-fredholm-index-is-additive`,
`thm-fredholm-index-is-locally-constant`,
`thm-fredholm-index-is-stable-under-compact-perturbations`,
`cor-lambda-identity-minus-compact-has-index-zero`.

B page `compact-operators-and-riesz-schauder-theory-examples`:
`ex-diagonal-operator-on-ell-p-is-compact-iff-diagonal-tends-to-zero`,
`ex-continuous-kernel-integral-operator-is-compact-on-c-of-an-interval`,
`cex-identity-is-compact-iff-the-space-is-finite-dimensional`,
`cex-a-compact-operator-can-have-nondense-range`,
`ex-fredholm-alternative-for-an-integral-equation`,
`cex-compactness-is-not-preserved-by-strong-operator-limits`,
`rem-approximation-property-controls-finite-rank-density-in-compact-operators`.

A page `square-integrable-kernels-and-hilbert-schmidt-compactness`:
`def-hilbert-schmidt-operator`, `thm-hilbert-schmidt-norm-is-basis-independent`,
`thm-hilbert-schmidt-operators-are-compact`,
`lem-product-rectangle-kernels-are-dense-in-product-l-two`,
`thm-l-two-kernels-give-hilbert-schmidt-operators`.

B page `square-integrable-kernels-and-hilbert-schmidt-compactness-examples`:
`ex-square-integrable-separable-product-kernel`,
`ex-square-integrable-kernel-without-continuous-representative`,
`ex-square-integrable-kernel-finite-rank-truncations`,
`ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two`.

### Dependency interfaces opened to verify claims

Load-bearing direct dependencies whose `## Statement`/`## Definition` sections
were opened (published items unless marked):

- Choice and metric compactness: `def-countable-choice`, `def-dependent-choice`,
  `def-axiom-of-choice`, `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`,
  `thm-metric-compactness-equivalences`, `thm-complete-and-totally-bounded-implies-compact`,
  `def-metric-compactness`, `def-metric-compactness-variants`, `def-totally-bounded`,
  `def-metric-convergence`, `def-metric-ball`, `def-metric-bounded-diameter`,
  `thm-metric-closure-characterisation`, `lem-metric-limits-unique`,
  `thm-compact-subset-is-closed-and-bounded`, `thm-compactness-under-continuous-maps`,
  `thm-closed-subspace-of-a-compact-space-is-compact`, `thm-finite-products-of-compact-spaces`,
  `thm-heine-borel-rn`, `thm-c-k-complete-in-the-sup-metric`,
  `thm-uniform-limit-continuous-real-functions`, `thm-heine-cantor-metric`,
  `lem-uniform-integral-error-bound`, `thm-continuous-implies-integrable`,
  `thm-continuity-from-below-for-measures`, `thm-finite-and-countable-subadditivity-of-measures`,
  `thm-countable-union-of-countable`, `lem-subset-of-countable`, `cor-archimedean-reciprocal`,
  `thm-connected-subsets-of-r-are-intervals`.
- Normed/Banach and operator machinery: `def-norm-and-normed-space`,
  `def-bounded-linear-operator`, `def-linear-map`, `def-operator-norm`,
  `def-space-of-bounded-linear-operators`, `thm-bounded-linear-operator-equivalences`,
  `lem-vector-operations-are-continuous-in-a-normed-space`, `def-banach-space`,
  `thm-bounded-operator-space-is-banach`, `thm-banach-series-criterion`, `thm-geometric-series`,
  `lem-composition-operator-norm-inequality`, `cor-finite-dimensional-subspaces-are-closed`,
  `cor-finite-dimensional-subspaces-are-complemented`, `cor-finite-codimensional-subspaces-are-complemented`,
  `def-complemented-subspace`, `thm-closed-unit-ball-compact-iff-finite-dimensional`,
  `lem-closed-range-iff-quotient-estimate`, `def-quotient-seminorm`,
  `thm-bounded-inverse-theorem`, `thm-complete-subspace-iff-closed`, `lem-riesz-lemma`,
  `lem-closed-subspace-of-a-banach-space-is-banach`, `thm-rank-nullity`,
  `thm-first-isomorphism-theorem-for-vector-spaces`, `thm-dimension-of-a-linear-subspace`.
- Duality: `def-transpose-of-a-bounded-operator`, `lem-transpose-is-bounded-and-has-the-same-norm`,
  `lem-transpose-reverses-composition`, `thm-schauder-compact-adjoint-theorem` (batch),
  `thm-canonical-bidual-map-is-an-isometry`, `lem-canonical-map-is-natural`,
  `lem-elementary-kernel-range-annihilator-identities`, `thm-dual-of-a-quotient-is-the-annihilator`,
  `thm-dual-norms-every-vector`, `cor-dual-separates-points`,
  `thm-uniform-boundedness-principle`, `def-weak-convergence-of-nets-and-sequences`,
  `def-strong-and-weak-operator-topologies`.
- Hilbert space: `def-hilbert-space`, `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`,
  `def-square-summable-family-on-an-arbitrary-index-set`, `thm-parseval-equivalences-for-a-complete-orthonormal-family`,
  `thm-hilbert-space-fourier-expansion`, `thm-bessel-inequality-for-an-arbitrary-orthonormal-family`,
  `lem-finite-bessel-inequality`, `def-hilbert-space-adjoint`, `thm-hilbert-adjoint-properties`,
  `thm-orthogonal-decomposition-by-a-closed-subspace`, `thm-zorn`.
- Measure/integration: `def-finite-sigma-finite-and-semifinite-measures`,
  `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`,
  `def-completed-product-measure`, `thm-completion-of-a-measure-space`,
  `thm-completion-measurable-functions-have-base-measurable-representatives`,
  `thm-tonelli-and-fubini-for-completed-product-measures`,
  `thm-tonelli-theorem-for-sigma-finite-product-spaces`,
  `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
  `thm-sections-of-product-measurable-sets-are-measurable`,
  `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`,
  `def-nonnegative-lebesgue-integral`, `def-integral-of-a-nonnegative-simple-function`,
  `def-l-p-space-as-a-quotient-by-null-functions`,
  `thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz`,
  `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`,
  `thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p`,
  `lem-finite-measure-sets-are-approximable-by-a-generating-algebra`,
  `lem-finite-rectangle-unions-form-a-generating-algebra`, `def-measurable-rectangle`,
  `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-algebra-of-subsets`,
  `def-measure`, `thm-lebesgue-measure-of-a-box-of-every-kind`,
  `def-multidimensional-rectangle-and-volume`, `def-counting-measure`,
  `prop-counting-measure-is-a-measure`, `rem-ell-p-is-l-p-of-counting-measure`,
  `thm-riesz-fischer-completeness-of-l-p`,
  `lem-complex-lp-completeness-density-and-inner-product`,
  `thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable`,
  `def-metric-continuity`, `thm-metric-continuity-characterisations`,
  `def-continuity-real`, `def-continuous-map-top`, `def-equicontinuity-and-boundedness-in-ck`,
  `thm-arzela-ascoli-for-real-ck`, `cor-equicontinuous-bounded-sequence-has-a-uniformly-convergent-subsequence`,
  `def-approximation-property-and-bounded-approximation-property`.

### External sources consulted

The batch's own citation locators (Bühler–Salamon, Teschl, Roe, Axler) were not
re-fetched; the two defects below were resolved by internal analysis, and the
Atkinson repair was checked against two independent expositions (opened
2026-09-17):

- Ethan Y. Jaffe, *Atkinson's Theorem*,
  `https://r-grande.github.io/Expository/Atkinson's%20Theorem.pdf` — Banach-space
  proof of the parametrix direction: "Observe that im T⊥ = ker T*, and that
  S*T* = (TS)* = I−K₂*. K₂* is compact … Thus we apply the previous argument to
  T* to conclude that im T⊥ is finite-dimensional." This is exactly the
  composition order restored by edit 2 (the second product of the parametrix
  pair, not the first, controls `ker T*`).
- Yuguang (Roger) Bai, *Fredholm Operators and Atkinson's Theorem*,
  `https://www.math.uwo.ca/faculty/khalkhali/files/Fredholm.pdf` — the (⇐)
  direction: from AT − I = K₁ and TA − I = K₂ compact, "dim ker(I + K₁) < ∞ and
  dim coker(I + K₂) < ∞", giving ker T ⊆ ker(AT) and im T ⊇ im(TA). The second
  compact defect is the one that forces finite-dimensionality on the
  cokernel/adjoint-kernel side.

## Mathematical reading

### `compact-operators-and-riesz-schauder-theory`

- The compactness definition, the closed-unit-ball reduction, the "compact
  implies bounded" consequence, sequential compactness under DC (including the
  choice-free forward direction and the AC_ω selection of approximants in the
  converse), finite-rank compactness, the two-sided ideal property, closure
  under linear combinations and polynomials, and the AC_ω norm-closure theorem
  were checked step by step against their cited hypotheses (complete target for
  the norm-closure theorem, `AC ⟹ DC ⟹ AC_ω` bridge for every consumer).
- `def-approximable-operator` records only the direction it proves and
  explicitly withholds the converse; the split matches the page prose.
- Schauder's theorem was checked in both directions, including the faithful
  ingredients the converse needs: `T**J_X = J_Y T` (naturality), the closed
  isometric copy `J_Y(Y)` (completeness of `Y`), and corestriction to a closed
  subspace. Step 2.2's diagonal selection and step 3.1's ε-bookkeeping are
  correct, and the nets used in step 3.1 are the very points of the countable
  dense set `D` built in step 2.1.
- The Riesz–Schauder block (finite-dimensional kernel, closed range with the
  quotient estimate, stabilisation of the two chains, the direct-sum
  decomposition with an invertible restriction, and the Fredholm alternative
  with its adjoint solvability condition and equal finite defect dimensions)
  was reconstructed and verified, including the modular-identity step
  `N ∩ (A(N) + Y) = A(N) + (N ∩ Y)` and the rank-nullity count of the two
  defects.
- Spectrum block: the algebraic-multiplicity claim, the finiteness of
  `{λ : |λ| ≥ ε}` (compactness of the truncated spectrum plus local constancy),
  and the infinite-dimensional case `0 ∈ σ(K)` were verified; [A4]'s
  identification of `C` with `R²` and Heine–Borel are used correctly.
- Fredholm index block: splitting with parametrix, the compact-remainder
  estimate, the six-term exact sequence and the telescoping index count,
  local constancy by a finite-dimensional Schur complement, stability along the
  connected path `t ↦ T + tK`, and the index-zero corollary were verified.
- B page: the diagonal `ℓ^p` characterisation (including the exact operator-norm
  truncation error and both scalar fields; `p = ∞` is covered by the real
  Riesz–Fischer and the complex completeness suppliers), the continuous-kernel
  integral operator via Arzelà–Ascoli with the complex case split into real and
  imaginary parts, the two counterexamples, the integral-equation application of
  the alternative, the strong-limit counterexample (`‖I − P_N‖ = 1`), and the
  approximation-property remark (whose hypothesis matches the published
  definition of the approximation property verbatim) were all checked.

### `square-integrable-kernels-and-hilbert-schmidt-compactness`

- The relative Hilbert–Schmidt definition (finite-subset supremum over an
  arbitrary index set, no enumeration, no existence claim) is well formed, and
  the basis-independence theorem's finite-supremum interchange (including the
  finite-selection step and the passage from rectangles to finite subsets of
  `E × F`) is correct; claim 3's membership and norm statements follow from the
  single common extended value.
- Hilbert–Schmidt ⟹ compact: the Fourier net in `F`-subsets is passed through
  the bounded operator `T` (no orthogonality of `(Te)` is asserted), the tail
  estimate is proved by finite Cauchy–Schwarz, the truncations `TP_F` are
  compact through the compact closed unit ball of the finite-dimensional span,
  and the AC_ω tail-control selection with the norm-closure theorem closes the
  argument.
- Rectangle density: the trace algebra on the exhausted rectangle `Z_n`, the
  generation of the trace sigma-algebra, the generating-algebra approximation,
  and the completion step through base-measurable representatives were all
  verified; the symmetric-difference controls and the two density statements
  (product and completed product) are correct.
- Kernel theorem: existence of a base-measurable representative of equal norm
  (the comparison of the `ρ`- and `ρ̄`-integrals of a base-measurable function
  is correct), almost-everywhere square integrability of sections (Tonelli),
  the pointwise Cauchy–Schwarz bound, measurability (Fubini for simple
  integrands, then limsup of the approximants), representative independence,
  the orthonormal product family `f(x)ē(y)`, the density of rectangle kernels in
  its closed span, Bessel plus the finite-Parseval lower bound giving the exact
  value, and the transfer to `Σ_e‖T_ke‖² = Σ_f‖T_k^*f‖² = ‖k‖₂²` were all
  reconstructed and checked. Hilbert bases are built inside the item by Zorn,
  so no later page is consumed.
- B page: the product kernel `a(x)b̄(y)` with the exact norms and the degenerate
  cases, the discontinuous `1_{[0,1/2]}(x)` witness (no ball inside a null set;
  propagation along sequences to the interface `x = 1/2`), the diagonal
  truncation example with the two exact truncation errors, and the compactness
  conclusion for arbitrary square-integrable kernels were all checked.

## Edits (confirmed defects in in-flight items of this batch)

### Edit 1 — `items/thm-norm-limit-of-compact-operators-is-compact.md`, step 2.1

Defect (defective computation inside a proof). The written estimate was
`‖Tx − Tx_i‖ ≤ ‖T − T_n‖ + ‖T_nx − T_nx_i‖ < ε` from `‖T − T_n‖ < ε/2` and
`‖T_nx − T_nx_i‖ < ε/2`. Expanding gives
`Tx − Tx_i = (T_nx − T_nx_i) + (T − T_n)(x − x_i)`, so the true bound carries
the factor `‖x − x_i‖ ≤ 2`, i.e. `< 3ε/2`: the displayed inequality is not
derivable as written.

Repair. The step now chooses `n` with `‖T − T_n‖ < ε/4`, takes the finite
`ε/4`-net of `C_n`, and estimates
`‖Tx − Tx_i‖ ≤ ‖T_nx − T_nx_i‖ + ‖T − T_n‖‖x − x_i‖ < ε/4 + ε/2 < ε`,
using `‖x‖, ‖x_i‖ ≤ 1`. The conclusion (a finite `ε`-net for
`T(¯B_X)` with centres in `T(¯B_X)`, hence total boundedness) is unchanged and
the cited facts and tags are unchanged.

Evidence: the identity `Tx − Tx_i = (T_nx − T_nx_i) + (T − T_n)(x − x_i)` is
algebra; the numeric chain is `ε/4 + 2·(ε/4) = 3ε/4 < ε`. The old
`< 3ε/2` bound would still imply total boundedness after rescaling, so no
downstream claim was at risk — the repair restores the literal correctness of
the step.

### Edit 2 — `items/thm-atkinson.md`, steps 2.2 and 3.2

Defect (false claim inside the proof of the converse). Step 2.2 used the wrong
product of the parametrix pair: from `F = ST − I_X` it formed
`F* = T*S* − I_{X*}` and concluded `T*g = 0 ⟹ T*S*g = 0`, i.e.
`ker T* ⊆ ker(T*S*)`. That implication is false: for the right shift
`T: ℓ² → ℓ²` with `S` the left shift, `F = 0` so `T*S* = I`, while
`ker T* = span{e_1} ≠ 0`. The step therefore did not establish
`ker T*` finite-dimensional, and step 3.2 inherited the error (it also used
`−F*` with the wrong factor space).

Repair. Steps 2.2 and 3.2 now use the second product of the pair, which is the
correct one: `S*T* = (TS)* = I_{Y*} + G* = I_{Y*} − (−G*)`, so for
`T*g = 0` one has `(I_{Y*} − (−G*))g = S*T*g = 0`, giving
`ker T* ⊆ ker(I_{Y*} − (−G*))`; since `G = TS − I_Y` is compact, `G*` is
compact by Schauder, and so is its negative (its image of a bounded set is the
negative of the corresponding image of `G*`, and negating a set preserves
compactness of the closure), whence the kernel lemma makes `ker T*` finite
dimensional. Steps 1.1, 1.2, 2.1, 3.1 and 4.1–6.1 are untouched: the estimate
of step 2.1 and the compact-remainder lemma still come from the `F` product,
while the cokernel side now correctly comes from the `G` product, matching the
standard route (Jaffe; Bai, above).

No dependency or fact-block change was needed: step 2.2 and step 3.2 keep the
same single fact `A3` (transposition calculus, Schauder, and the
identity-minus-compact kernel lemma), and the finite-dimensionality statement
of step 4.1 now rests on a true containment.

### Contract and record updates

- `research/phase-2-remaining-27-batch-2.proof-contracts.json` (run artifact,
  untracked): derivation claims `d-2.1` of
  `thm-norm-limit-of-compact-operators-is-compact` and `d-2.2`, `d-3.2` of
  `thm-atkinson` were rewritten to match the repaired steps; `d-3.2`'s inputs
  now list steps `1.2`, `2.2` and fact `A3`. No citation `uses` entry and no
  quoted source text changed, because the repaired steps cite exactly the same
  facts as before.
- Neither edited item carried a `verification.judge` record (both are
  `status: draft` with no `verification:` block), so there was no stale judge
  record to remove.
- Reflow and precheck were run for both changed items, plus the strict contract
  gate over the whole batch (results below).

## Reviewed and accepted nonfatal omissions (no edit)

These are short proof-step omissions that a competent reader closes at once and
that defect no claim, witness, computation or citation; they are recorded for
the 5b lead rather than repaired.

1. `lem-riesz-schauder-ascent-and-descent-stabilize`, steps 3.1, 3.2, 4.1, 4.2,
   5.1. Riesz's lemma must be read as applied inside the normed spaces
   `ker A^{n+1}` (respectively `ran A^n`), which is legitimate because the
   smaller space is a proper closed subspace of the larger and the distance to
   it is the same computed in `X`; the countable selection of the `x_n` is a
   DC-licensed construction (DC is assumed and DC ⟹ AC_ω is the batch's own
   lemma); and step 5.1 uses, without saying so, the two-line propagation that
   `ker A^n = ker A^{n+1}` (respectively `ran A^n = ran A^{n+1}`) forces the
   chain to be constant from `n` on. All three are immediately closable.
2. `thm-compact-operator-sends-weakly-convergent-sequences-to-norm-convergent-sequences`,
   step 1.1. Uniform boundedness is applied to the family `{J_Xx_n}` on the
   dual `X*`; that `X*` is Banach when `X` is is used but not listed in the
   facts block (it is elementary and is implicit in the declared transpose and
   bidual interfaces).
3. `thm-l-two-kernels-give-hilbert-schmidt-operators`, step 1.2. The comparison
   of the `ρ`- and `ρ̄`-integrals of a base-measurable nonnegative function, and
   the replacement of infinite values of the completion representative by `0`,
   are correct but compressed; the conclusion (equal finite norm) is right.
4. `thm-fredholm-index-is-locally-constant`, step 4.1. Additivity of the index
   for the block-diagonal form `diag(A_11, S)` is cited through the additive
   theorem; the direct computation from the cited kernel/cokernel description
   (index `dim ker S − dim coker S = dim N − dim Y_0`) is immediate and gives the
   same value.

## Uneditable defects

None. Every defect I could confirm lies in an in-flight item of this batch and
was repaired above (edits 1 and 2). I found no defect in another batch, in
`research/plan-spec.json`, in B-page prose, or in published content; in
particular every published dependency I opened matches the use made of it
(exact hypotheses, direction and conclusion), including the choice ledger of
`thm-metric-compactness-equivalences` and the exact statements of
`lem-closed-range-iff-quotient-estimate`,
`thm-closed-unit-ball-compact-iff-finite-dimensional`,
`lem-elementary-kernel-range-annihilator-identities`,
`lem-finite-measure-sets-are-approximable-by-a-generating-algebra`,
`thm-completion-measurable-functions-have-base-measurable-representatives`,
`thm-riesz-fischer-completeness-of-l-p` (covering `p = ∞`) and
`def-approximation-property-and-bounded-approximation-property`.

## Verdicts

| Page | Verdict |
| --- | --- |
| `compact-operators-and-riesz-schauder-theory` (A) | Pass after one repaired item (`thm-norm-limit-of-compact-operators-is-compact`); `thm-atkinson` also repaired. |
| `compact-operators-and-riesz-schauder-theory-examples` (B) | Pass. |
| `square-integrable-kernels-and-hilbert-schmidt-compactness` (A) | Pass. |
| `square-integrable-kernels-and-hilbert-schmidt-compactness-examples` (B) | Pass. |

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-norm-limit-of-compact-operators-is-compact.md items/thm-atkinson.md`
  → `unchanged` for both (repairs are single-physical-line steps).
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-norm-limit-of-compact-operators-is-compact.md items/thm-atkinson.md`
  → PASS, 2 checked, 0 failing.
- `node tools/tsx-run.mjs tools/precheck.mts <all 36 proof-bearing batch items>`
  → PASS, 36 checked, 0 failing (the other six batch items are definitions or a
  remark with no phase-format body).
- `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-2.proof-contracts.json --strict`
  → 0 errors, 0 warnings, 42/42 items checked (after the contract update).
- `node tools/depcheck.mjs --json` → 0 errors, 0 warnings repo-wide; no
  batch-specific dependency, link, cycle or `b-leaf` finding.
- Page/manifest cross-check: all four page frontmatter lists equal the batch
  manifest lists (26/7/5/4, same order), with B-page items under `examples:`.

## Blockers

None. No proposed withdrawal exists for this batch, so nothing is left standing
for the 5b lead except the four accepted nonfatal omissions recorded above.

## Coverage note

All 4 assigned pages and all 42 assigned items were read in full from the
current files, together with the direct dependency statements listed above; the
two repaired items were re-read after editing. Two limitations are recorded
honestly: (i) the external textbook PDFs named by the batch's source locators
were not re-downloaded in this pass — their content was checked through the
items' own fact quotes and the run's fetch-verified coverage receipts, and the
one repair that needed independent confirmation (the Atkinson composition order)
was checked against two independently retrieved expositions; (ii) the batch's
nonfatal omissions listed in "Reviewed and accepted nonfatal omissions" were
closed by me in reading but deliberately not rewritten, since they defect no
claim, witness, computation or citation, and the dispatch restricts repairs to
confirmed defects.
