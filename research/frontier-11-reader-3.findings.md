# frontier-11 Step-6 independent-reader findings — reader 3, batch 4

Date: 2026-08-12  
Role: independent reader 3  
Scope: `the-determinant-of-a-linear-operator` (84) and companion; `the-integral-logarithm-and-its-characterisations` (178.1) and companion

## Outcome

I read all four assigned page files, all 52 assigned item files, every numbered proof or verification step in the 45 proof-bearing items, and every direct dependency cited in their `[F#]`, `[A#]`, and `[L#]` facts. I found and repaired fatal defects in 12 items and nonfatal defects in 5 places (two of those places were in items that also had fatal defects). Fifteen item files changed in total. There is no remaining mathematical blocker in the assigned pages.

Two repairs change literal claim text and therefore require prominent Alpha review:

1. `thm-operator-determinant-is-basis-independent` no longer asserts a determinant of a representing `0 x 0` matrix, because the published matrix determinant is defined only for `n >= 1`. Its matrix-equality claim is now explicitly positive-dimensional, while the zero-dimensional operator determinant remains the separately defined value `1`. This narrows an ill-formed literal clause without weakening the intended operator-level well-definedness claim.
2. `ex-doubling-integers-has-nonunit-determinant` no longer says in its title that the inverse exists "only over Q", which is false (for example, `[2]` is also invertible over `R` and over `Z/3Z`). The title now says that the inverse exists *after extending scalars to Q*, matching the Example and proof.

No page file needed a content edit. I did not edit `research/frontier-11-batch-4.*`, `plan-spec.json`, any normative document, or `library/real-analysis/the-complex-exponential-and-eulers-formula.md`.

## Named checks

### RA-27b — all three obligations pass

1. **Independent integral development:** the proof regions from `def-integral-logarithm` through `thm-integral-exponential-solves-the-normalised-ivp` contain no `exp`, `log`, or dependency on a published exponential/logarithm item. A proof-region scan returned no matches. The first bridge is `thm-integral-exponential-agrees-with-exponential`; it has one dependency/fact citation to `thm-exponential-ivp-uniqueness` (`items/thm-integral-exponential-agrees-with-exponential.md:42`) and applies only that uniqueness theorem after proving `E'=E` and `E(0)=1`. There is no earlier exponential use.
2. **Functional-equation characterisation:** `thm-logarithm-continuous-functional-equation-characterisation` assumes continuity, the product-to-sum equation, and `f(e)=1`; this is sufficient. The differentiable-at-one version is also present. I repaired the existence half so that `log(e)=1` is derived from the already completed `E/L` bridge instead of being misattributed to `thm-natural-logarithm-laws` (`items/thm-logarithm-continuous-functional-equation-characterisation.md:76`).
3. **Equivalence and roadmap:** `thm-logarithm-definition-equivalence` gives the five-way equivalence, and `rem-logarithm-roadmap-and-circularity` states the non-circular implication order. Both are present on the A page.

RA-27b is therefore fully discharged; none of its three clauses is merely inferred from the other two.

### D7 — adjugate route passes

`thm-adjugate-is-equivariant-under-similarity` uses

`C + uv^T = P^{-1}(A + (Pu)(v^T P^{-1}))P`,

similarity invariance, and the rank-one update identity on both sides. After additive cancellation it tests the resulting bilinear identity on explicitly defined coordinate columns (`items/thm-adjugate-is-equivariant-under-similarity.md:65`). This identifies every matrix entry and closes over an arbitrary commutative ring, including singular `A`. No fraction field, rational-function field, density argument, or localization appears. I added the direct matrix-product definition because the former `[L3]` attributed coordinate-column entry selection to `thm-ring-matrix-arithmetic-laws`, whose Statement does not say that; the mathematical D7 route itself was retained.

### D6 — order 82 really lacks the local machinery

The item list and body of `library/linear-algebra/determinants-of-matrices-over-a-commutative-ring.md` contain no minor, cofactor, Laplace expansion, adjugate, or Cramer-rule item; a case-insensitive disk search for those terms returned no match. Batch 4 builds all five notions/results locally. No assigned proof cites order 82 as if it already contained them; uses of order-82 items are confined to determinant, row-operation, transpose, multiplicativity, invertibility, and similarity facts that are actually present there.

## Defects found and fixes applied

### Fatal

1. **`thm-operator-determinant-is-basis-independent` — ill-formed zero-dimensional Statement.** The original unqualified display used `det([T]_B)` when `dim V=0`, but `def-determinant-of-a-square-matrix` is stated only for `n >= 1`; the empty determinant exists only as a local minor convention later on order 84. I restricted the matrix equality to positive dimension and stated the direct zero-dimensional operator convention separately (`items/thm-operator-determinant-is-basis-independent.md:29`, `:54`). Exact effect: the intended basis independence is unchanged, while the undefined `0 x 0` matrix determinant claim is removed.

2. **`thm-operator-determinant-is-multiplicative` — inaccurate zero-dimensional citation.** `[F1]` attributed both basis independence and the value `1` to `thm-operator-determinant-is-basis-independent`; that source did not state the zero-dimensional definition. I split the facts and cited `def-determinant-of-a-linear-operator` for the value `1` (`items/thm-operator-determinant-is-multiplicative.md:45`). Exact effect: the zero-dimensional case now rests on the definition that actually states it.

3. **`cor-operator-determinant-by-row-reduction` — wrong reverse scaling factor.** The proof said that reversing a forward row scaling by `c` contributes `c`; it contributes `c^{-1}`. I corrected the computation rule and made the forward/reverse direction explicit (`items/cor-operator-determinant-by-row-reduction.md:62`).

4. **`thm-adjugate-identity-over-a-commutative-ring` — product entries lacked their cited premise.** The proof computed entries of `A adj(A)` and `adj(A) A`, but `[L4]` cited only the arithmetic-law theorem, whose Statement does not give the product entry formula. I added the direct dependency/fact from `def-ring-matrix-product-identity-and-transpose` and retagged the two entry computations (`items/thm-adjugate-identity-over-a-commutative-ring.md:50`).

5. **`lem-determinant-rank-one-update-over-a-commutative-ring` — inaccurate entry-formula citation.** Its former `[L3]` assigned product/transpose entry formulas to `thm-ring-matrix-arithmetic-laws`. I added the direct definition as `[F2]` and used it in the column calculation. The rank-one formula is unchanged.

6. **`thm-adjugate-is-equivariant-under-similarity` — inaccurate coordinate-column citation.** The former `[L3]` said that `thm-ring-matrix-arithmetic-laws` states that standard coordinate columns select entries; it does not. I added the direct matrix-product definition and explicitly constructed the two columns and calculated `v^T B u=B_ij` (`items/thm-adjugate-is-equivariant-under-similarity.md:65`).

7. **`thm-cramers-rule-over-a-commutative-ring` — inaccurate entry-formula citation.** Its former `[L4]` likewise claimed that the arithmetic-law theorem states the entry formula. I added and used `def-ring-matrix-product-identity-and-transpose` (`items/thm-cramers-rule-over-a-commutative-ring.md:60`).

8. **`thm-operator-invertible-iff-determinant-nonzero` — cited theorem supplied only one direction for a general operator.** `thm-invertible-matrices-correspond-to-linear-isomorphisms` states that a general linear isomorphism has an invertible representing matrix; its converse is stated only for the coordinate multiplication map `L_A`. The item asserted the general biconditional directly from that source. I retained the licensed forward direction and proved the converse by representing `A^{-1}` as an operator, applying the composite-matrix formula, and using injectivity of matrix representation (`items/thm-operator-invertible-iff-determinant-nonzero.md:66`). The same item also misattributed the zero-dimensional value to basis independence; it now cites the determinant definition directly (`:59`).

9. **`ex-doubling-integers-has-nonunit-determinant` — false title.** "Its inverse exists only over Q" excluded many valid scalar extensions. I changed it to "its inverse exists after extending scalars to Q" (`items/ex-doubling-integers-has-nonunit-determinant.md:4`). This is the second literal claim change flagged above.

10. **`ex-four-by-four-determinant-by-cofactors-and-row-reduction` — wrong row indices.** The item explicitly uses zero-based positions in step 1.1, so its original `row 3 <- row 3 - 4 row 1` modifies the last row by the second row and does not produce the claimed triangular matrix. The correct operation is `row 2 <- row 2 - 4 row 0`, now also glossed as third row minus four times first row (`items/ex-four-by-four-determinant-by-cofactors-and-row-reduction.md:55`).

11. **`thm-logarithm-continuous-functional-equation-characterisation` — inaccurate `log(e)=1` citation.** `[L7]` attributed that normalization to `thm-natural-logarithm-laws`, whose Statement contains continuity, monotonicity, product/quotient/reciprocal laws, and `log 1=0`, but not `log(e)=1`. I narrowed `[L7]` to what the source states and derived `log(e)=L(E(1))=1` from the completed bridge (`items/thm-logarithm-continuous-functional-equation-characterisation.md:66`, `:76`).

12. **`ex-logarithmic-functions-without-normalisation` — the same inaccurate citation.** I split continuity/product law from normalization and cited `thm-logarithm-continuous-functional-equation-characterisation` for `log(e)=1` (`items/ex-logarithmic-functions-without-normalisation.md:49`, `:60`).

### Nonfatal

1. **`lem-determinant-rank-one-update-over-a-commutative-ring` — unchanged-cofactor step omitted.** When the replaced column is deleted, the minors are those of `A`. I made that identity explicit before using `C_ij(A)` (`items/lem-determinant-rank-one-update-over-a-commutative-ring.md:64`).

2. **`thm-cramers-rule-over-a-commutative-ring` — unchanged-cofactor step omitted.** I explicitly stated `C_ij(A_j(b))=C_ij(A)` because deletion removes the replaced column (`items/thm-cramers-rule-over-a-commutative-ring.md:73`).

3. **`thm-operator-adjugate-identity` — equality of matrices to equality of operators was uncited.** I added `thm-matrix-representation-is-a-vector-space-isomorphism` and cited its injectivity in the last step (`items/thm-operator-adjugate-identity.md:54`, `:63`).

4. **`ex-determinant-in-two-ordered-bases` — proof used a matrix before deriving it.** The determinant of `[T]_B` was computed in step 1.2, while `[T]_B` was first obtained in step 2.1. I reordered and canonically rephased the computation: matrix first, determinants second (`items/ex-determinant-in-two-ordered-bases.md:55-57`).

5. **`cor-continuous-logarithmic-functions-form-a-one-parameter-family` — `b != 1` was asserted without the available fact tag.** I made the short argument explicit: `log b=1/c != 0=log 1`, hence `b != 1`, and cited `[L5]` (`items/cor-continuous-logarithmic-functions-form-a-one-parameter-family.md:77`).

## Complete item-by-item read record

### `the-determinant-of-a-linear-operator`

- `lem-alternating-top-forms-are-determined-by-one-ordered-basis` — clean.
- `def-determinant-of-a-linear-operator` — clean.
- `thm-operator-determinant-scales-every-alternating-top-form` — clean.
- `thm-operator-determinant-is-basis-independent` — fatal Statement defect repaired (fatal 1).
- `thm-operator-determinant-is-multiplicative` — fatal citation defect repaired (fatal 2).
- `cor-operator-determinant-by-row-reduction` — fatal scaling-direction defect repaired (fatal 3).
- `def-matrix-minors-cofactors-and-adjugate` — clean; the `0 x 0` minor convention is explicitly local.
- `thm-laplace-cofactor-expansion` — clean, including `n=1` and both row/column formulas.
- `thm-adjugate-identity-over-a-commutative-ring` — fatal licensing defect repaired (fatal 4).
- `cor-square-matrix-invertible-iff-determinant-is-a-unit` — clean, including the zero-ring convention.
- `cor-inverse-matrix-by-adjugate` — clean.
- `lem-determinant-rank-one-update-over-a-commutative-ring` — fatal citation and nonfatal exposition defects repaired (fatal 5; nonfatal 1).
- `thm-adjugate-is-equivariant-under-similarity` — fatal citation defect repaired; D7 route passes (fatal 6).
- `def-coordinate-endomorphism-over-a-commutative-ring` — clean.
- `thm-cramers-rule-over-a-commutative-ring` — fatal citation and nonfatal exposition defects repaired (fatal 7; nonfatal 2).
- `cor-cramers-rule-over-a-field` — clean; the converse for a fixed right-hand side correctly uses the kernel argument.
- `thm-operator-invertible-iff-determinant-nonzero` — two fatal citation/licensing defects repaired (fatal 8).
- `cor-operator-determinant-on-the-general-linear-group` — clean, including dimension zero.
- `def-adjugate-of-a-linear-operator` — clean; basis independence follows from D7 and the two-sided change-of-basis formula.
- `thm-operator-adjugate-identity` — nonfatal explicit-premise defect repaired (nonfatal 3).

The A-page frontmatter, ordering, declared page prerequisites, title, and two-paragraph summary were also read and are clean.

### `the-determinant-of-a-linear-operator-examples`

- `ex-singular-projection-has-zero-determinant` — clean.
- `ex-determinant-in-two-ordered-bases` — nonfatal proof-order defect repaired (nonfatal 4).
- `ex-doubling-integers-has-nonunit-determinant` — fatal false-title defect repaired (fatal 9).
- `fs-a-square-matrix-over-a-commutative-ring-is-invertible-iff-its-determinant-is-nonzero` — clean; both directions really fail under the library's zero-ring convention.
- `ex-four-by-four-determinant-by-cofactors-and-row-reduction` — fatal row-index defect repaired (fatal 10).
- `ex-three-by-three-inverse-by-adjugate` — clean; direct multiplication gives `3 I_3`.
- `ex-cramers-rule-two-by-two-system` — clean.
- `ex-columnwise-additivity-versus-whole-matrix-nonadditivity` — clean.

The B-page frontmatter and exact example ordering were read; the page correctly has no prose body.

### `the-integral-logarithm-and-its-characterisations`

- `def-integral-logarithm` — clean; well-definedness uses continuity/integrability only.
- `thm-integral-logarithm-derivative-and-normalisation` — clean.
- `cor-integral-logarithm-is-strictly-increasing` — clean.
- `thm-integral-logarithm-product-law` — clean.
- `cor-integral-logarithm-reciprocals-and-integer-powers` — clean.
- `thm-integral-logarithm-is-unbounded` — clean.
- `thm-integral-logarithm-is-a-bijection` — clean.
- `def-integral-exponential` — clean.
- `cor-integral-exponential-addition-law` — clean.
- `thm-integral-exponential-solves-the-normalised-ivp` — clean.
- `thm-integral-exponential-agrees-with-exponential` — clean; it is the single RA-27b bridge.
- `cor-integral-logarithm-agrees-with-natural-logarithm` — clean.
- `cor-e-is-the-unique-unit-hyperbolic-area` — clean.
- `thm-logarithm-continuous-functional-equation-characterisation` — fatal citation defect repaired (fatal 11); its continuity hypothesis is sufficient.
- `thm-logarithm-differentiable-functional-equation-characterisation` — clean.
- `cor-continuous-logarithmic-functions-form-a-one-parameter-family` — nonfatal premise-tag defect repaired (nonfatal 5).
- `lem-log-series-extends-by-the-product-law` — clean; it does not claim global direct convergence of the Mercator substitution.
- `thm-logarithm-definition-equivalence` — clean; all five descriptions are linked to `log`.
- `rem-logarithm-roadmap-and-circularity` — clean and accurately describes the dependency order.

The A-page frontmatter, ordering, declared prerequisite, title, and two-paragraph summary were also read and are clean.

### `the-integral-logarithm-and-its-characterisations-examples`

- `ex-log-two-from-four-characterisations` — clean.
- `ex-logarithmic-functions-without-normalisation` — fatal citation defect repaired (fatal 12).
- `cex-discontinuous-logarithmic-functional-equation` — clean. I opened `lem-hamel-basis-exists`; it explicitly supplies the additive coefficient map and a nonzero complementary vector, so `[L1]` is faithful.
- `cex-mercator-series-does-not-define-logarithm-globally` — clean.
- `ex-unit-hyperbolic-area-brackets-e` — clean; the interval bounds sum to `7/12 <= L(2) <= 5/6` and give `2<e<4` independently of the cited sharper bound.

The B-page frontmatter and exact example ordering were read; the page correctly has no prose body.

## Findings not changed because of the dispatch boundary

### Batch artifacts require Alpha/orchestrator repair

The dispatch forbids editing every `research/frontier-11-batch-*` artifact. Consequently:

- `research/frontier-11-batch-4.pages.json` is stale for the eight items whose direct dependency lists changed and for the corrected title of `ex-doubling-integers-has-nonunit-determinant`.
- `research/frontier-11-batch-4.proof-contracts.json` is stale for the repaired facts, dependency citations, step inputs, rephased example, and changed zero-dimensional boundary. Running `proof-contract.mjs --strict` now reports 50 errors. This is an expected handoff blocker, not an item failure; Alpha/orchestration must refresh the immutable artifact before Step 7.

The pre-repair contract also contained human-evidence defects that its substring gate did not catch. In particular, the quotation for `lem-alternating-top-forms-are-determined-by-one-ordered-basis/F1` was the irrelevant infinite-dimensional paragraph of `def-dimension`; `thm-integral-logarithm-derivative-and-normalisation/F2` quoted the motivation paragraph rather than the endpoint-reversal/equal-endpoint clause; `cor-integral-logarithm-is-strictly-increasing/L2` quoted a no-converse remark rather than the forward implication; `thm-integral-logarithm-is-a-bijection/L3` quoted the bisection choice remark rather than the intermediate-value Statement; `thm-logarithm-differentiable-functional-equation-characterisation/L4` quoted an order-convexity warning rather than the zero-derivative conclusion; and `cex-mercator-series-does-not-define-logarithm-globally/L1` quoted the ratio test's silent regime rather than its divergence clause. The old entries for the inaccurate item facts repaired above likewise did not support those facts. These excerpts should be replaced, not merely mechanically carried forward.

### Whole-repository gate caveat

`depcheck.mjs --quiet` reports no error in an assigned batch-4 item, but the whole-repository command remains red on the four intentionally unaudited published complex-number rewrites in the approved rehoming split. I did not touch those files or the prohibited complex-exponential page. This does not block the mathematical audit of batch 4, but it remains an external whole-repository gate condition.

No other suspected mathematical defect was left unchanged.

## Verification after repair

- `precheck` on all 52 assigned files: 45 proof-bearing items checked, 0 failing; the 7 definitions/remark are correctly non-proof items.
- Scoped `citecheck` on all 52 assigned files: pass.
- Scoped `rendercheck` on all 52 assigned files: pass.
- `content-policy.mjs research/frontier-11-batch-4.pages.json`: 52 scoped items, 0 errors, 0 warnings.
- Whole-repository `fwdcheck.mjs --quiet`: pass.
- `git diff --check`: pass.
- RA-27b proof-region scan: no pre-bridge `exp`/`log` match.
- D7 search: rank-one route present; no fraction-field or rational-function-field route.
- D6 search of the order-82 page: no minor/cofactor/Laplace/adjugate/Cramer match.
- `proof-contract.mjs research/frontier-11-batch-4.proof-contracts.json --strict`: 50 expected stale-artifact errors, requiring the authorized artifact owner to refresh it.
- `tools/gates.mjs` was not run, as instructed.

## Blockers

There is no remaining scoped mathematical blocker. The sole handoff blocker is the stale batch-4 manifest/proof-contract material described above; I could not update it without violating the explicit file boundary.
