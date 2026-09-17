# Step 3b — scaffold auditor and item author: `orthonormal-bases-parseval-and-fourier-series`

- Run: `phase-2-remaining-27` · role alpha-high · dispatch
  `step3b-pair-orthonormal-bases-parseval-and-fourier-series-371fe56511e0f0c1`.
- A page: `orthonormal-bases-parseval-and-fourier-series` (batch 1, order 288.073).
  B page: `orthonormal-bases-parseval-and-fourier-series-examples`.
- Artifact: `research/phase-2-remaining-27-batch-1.pages.json` (shared with the
  sibling pair, preserved).

## Completed items (29/29)

Authored in prerequisite order, each with a full local proof and a proof
contract, and each recorded `accept` at confidence 1 with its examined
dependency IDs.

**A page (24).** `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`,
`lem-finite-bessel-inequality`,
`def-square-summable-family-on-an-arbitrary-index-set`,
`thm-bessel-inequality-for-an-arbitrary-orthonormal-family`,
`lem-only-countably-many-fourier-coefficients-are-nonzero`,
`lem-square-summable-orthogonal-families-have-norm-convergent-finite-sums`,
`thm-parseval-equivalences-for-a-complete-orthonormal-family`,
`thm-hilbert-space-fourier-expansion`,
`thm-existence-of-a-maximal-orthonormal-family`,
`thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set`,
`thm-separable-hilbert-space-has-a-countable-orthonormal-basis`,
`cor-separable-infinite-dimensional-hilbert-space-is-ell-two`,
`lem-l-two-with-the-integral-pairing-is-a-hilbert-space`,
`def-the-one-dimensional-torus-and-normalized-haar-integral`,
`lem-finite-tori-are-compact-hausdorff-character-spaces`,
`def-fourier-coefficients-and-trigonometric-polynomials`,
`lem-trigonometric-characters-are-orthonormal`,
`cor-trigonometric-polynomials-are-dense-in-continuous-periodic-functions`,
`lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori`,
`thm-trigonometric-system-is-complete-in-l-two-of-the-torus`,
`thm-l-two-fourier-series-converges-in-mean-square`,
`thm-parseval-identity-for-fourier-series`,
`thm-riesz-fischer-for-fourier-coefficients`,
`thm-fourier-basis-and-parseval-on-the-n-torus`.

**B page (5).** `ex-standard-basis-of-ell-two`,
`ex-legendre-polynomials-from-gram-schmidt`,
`ex-haar-orthonormal-basis-of-l-two-zero-one`,
`ex-fourier-series-of-a-sawtooth`, `ex-fourier-series-of-a-square-wave`.

Both page files were written:
`library/functional-analysis/orthonormal-bases-parseval-and-fourier-series.md`
and `...-examples.md`.

## Scaffold audit and repairs

The 24-item A inventory and 5-item B inventory are exactly the FA-14 design
inventory with the five binding §14.4 insertions, as the Step 3a review recorded.
No promised ID, statement or ordering was changed, so the recorded Step 3a
`sufficient` decision (scope hash over the pair's ids, titles, kinds and
statements) remains current; `step3-decisions.mjs check --phase scope` returns
`closed: true`.

Repairs made while turning the strategies into proofs:

- **Dependency arrays completed for all 29 items** to the published or in-run
  suppliers the written proofs actually cite (tested by `depcheck`: no
  `cited-not-in-deps` finding remains for this pair). The manifest was re-synced
  item by item; the sibling pair's entries were left byte-identical.
- **Spurious or superseded deps removed**: `lem-finite-bessel-inequality` was
  dropped from the ℓ² definition (Bessel is about orthonormal families, not
  about scalar square sums); `thm-of-archimedean` was replaced by the reciprocal
  form `cor-archimedean-reciprocal` actually used in the tail argument;
  `def-counting-measure` and `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`
  were dropped from `ex-standard-basis-of-ell-two`, whose conditional claim is
  proved directly (orthonormality, dense span by tail control, completeness of
  ℓ²(ℕ) by coordinate-wise limits) without the counting-measure identification
  the scaffold strategy proposed.
- **No new items were added.** The two places where the proofs needed local
  machinery were supplied inside assigned A-page definitions before their
  consumers: the finite-subset-supremum convention, tail-control criterion and
  ZF summability of absolutely summable scalar families in
  `def-square-summable-family-on-an-arbitrary-index-set`, and the quotient
  torus, its normalized Borel measure, its integral representation on `[0,1)`,
  translation invariance and the finite-torus product measure in
  `def-the-one-dimensional-torus-and-normalized-haar-integral`.
- **Terminology clarified, not weakened**: the corollary
  `cor-separable-infinite-dimensional-hilbert-space-is-ell-two` states the
  reading of "infinite-dimensional" it uses (not the span of any finite set of
  vectors); `ex-legendre-polynomials-from-gram-schmidt` records that the
  classical Legendre polynomials are the unnormalised multiples with
  `P_n(1) = 1`; `thm-fourier-basis-and-parseval-on-the-n-torus` records that no
  tensor-product identification is invoked.
- **Exact square-root and net conventions** are stated where they are used
  (finite-subset nets over `Fin(I)`, the supremum convention for nonnegative
  sums, the cofinality of symmetric intervals in ℤ).

## Axiom accounting (exact uses)

| Items | Principle | Exact use |
|---|---|---|
| `def-orthonormal-family-…`, `lem-finite-bessel-inequality`, `thm-bessel-…`, `def-square-summable-…`, `thm-separable-…`, `cor-separable-…`, `ex-standard-basis-of-ell-two` | ZF (with `def-countable-choice` declared only where the statement assumes it) | Suprema of finite subsums, Pythagoras, deterministic Gram–Schmidt, coordinate-wise limits. No selection. |
| `lem-only-countably-many-fourier-coefficients-are-nonzero`, `lem-square-summable-orthogonal-families-…`, `thm-parseval-equivalences-…`, `thm-hilbert-space-fourier-expansion`, `thm-hilbert-space-with-a-given-orthonormal-basis-…` | AC_ω | One finite tail-control set per natural number (and the corresponding arbitrary-index synthesis); no enumeration of the index set and no full AC. |
| `thm-existence-of-a-maximal-orthonormal-family` | AC (Zorn), with the declared `AC ⇒ DC ⇒ AC_ω` bridge | Chains of orthonormal sets are bounded by their unions; the maximal family is then complete, and the Parseval supplier under AC_ω is discharged through the bridge. |
| The L²/torus half (`lem-l-two-…`, `def-the-one-dimensional-torus-…`, `lem-finite-tori-…`, `def-fourier-coefficients-…`, and items 17–24) | AC_ω, inherited | Lebesgue measure and L^p completeness suppliers; the compactness, Hausdorffness, Stone–Weierstrass and Fubini arguments themselves are choice-free. |
| The two Fourier examples | AC_ω, inherited | Only through the Fourier expansion and Parseval suppliers; the elementary computations are ZF. |

Every item that assumes a choice principle states it in its Statement and
declares `def-countable-choice` or `def-axiom-of-choice` in its deps, and every
consumer inside the pair that uses such a supplier re-declares the principle.

## Proof contracts

`research/phase-2-remaining-27-batch-1.proof-contracts.json` now carries entries
for all 63 items of the batch (the sibling pair's 34 entries were preserved).
For this pair: citations quote the cited item's Statement/Definition section
verbatim and name the exact steps using each fact; every numbered step has a
derivation entry with its stated inputs; and each item's eight boundary cases
(empty, zero, one, degenerate, endpoints, nonempty-choice, both iff directions)
are dispositioned with item-specific evidence or an item-specific reason.
`node tools/proof-contract.mjs … --strict` reports `0 error(s), 0 warning(s),
63/63 item(s) checked`.

## Checks actually run (all on disk, after the last edit)

- `tools/tsx-run.mjs tools/precheck.mts <25 proof-bearing item paths>` → `25 checked, 0 failing; all clean` (canonical phase numbering adopted; no auto-repair outstanding).
- `tools/rendercheck.mjs <29 items + 2 pages>` → `OK — 31 file(s)`.
- `tools/depcheck.mjs` → no finding for any item of this pair (the only residual `b-leaf-content` error belongs to `cex-zero-euler-class-does-not-in-general-imply-a-nowhere-zero-section`, another pair).
- `tools/manifest-deps.mjs research/phase-2-remaining-27-batch-1.pages.json` → `63 items, 0 normalized, 0 errors`.
- `tools/content-policy.mjs research/phase-2-remaining-27-batch-1.pages.json` → `63 scoped items, 0 errors, 0 warnings`.
- `tools/coverage-checklist.mjs research/phase-2-remaining-27-batch-1.coverage.json` → `2 pages, 66 harvested results, 0 errors, 0 warnings` (the mistaken `--manifests` invocation that reports missing coverage entries was a usage error on my part; the plain invocation, which cross-checks the sibling manifest automatically, is clean).
- `tools/validate-plan.mjs research/plan-spec.json` → exit 0; the pair introduces no item cycle, forward reference, B-page dependency or unresolved id.
- `tools/proof-contract.mjs … --strict` → `0 error(s), 0 warning(s), 63/63`.
- `tools/source-fetch-check.mjs --coverage …` → `9/9 sources fetch-verified and resolved`; `tools/source-backing.mjs … --require-verified` → `28 authored results, every one still backed`.
- `tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27` → refreshed and deduplicated. The batch input `research/phase-2-remaining-27-batch-1.cross-batch-dependencies.json` remains `[]`: every declared prerequisite of this pair is either in the same batch (the FA-13 sibling pair) or published, so there is no cross-batch edge for a consumer-side review row; the unified ledger's incoming edges are consumer-batch obligations.
- `tools/step3-decisions.mjs check --run phase-2-remaining-27 --phase final` → none of the 29 items appears in the open-work list.
- `tools/pathcheck.mjs` → two `draft-unplaced` warnings for the two new pages (pathway placement), expected before Step 9's pathway sync.

## Published concerns (for the owner / serial reconciler)

1. **Naming overlap, high confidence, no confirmed defect.**
   `def-orthogonal-vectors-sets-and-orthonormal-bases` (published; linear
   algebra A page) defines an *orthonormal basis* as an ordered basis that is an
   orthonormal list, i.e. a Hamel-type object. The new
   `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`
   defines a Hilbert basis as one whose closed span is the whole space. In
   infinite dimensions the two notions differ; both items are correct for their
   own scope, and the new definition carries an explicit "not a Hamel basis"
   paragraph. Suggested remedy (owner decision, Phase 3): add a cross-reference
   remark so the two senses cannot be confused; no repair to either proof is
   required.
2. **Structural note, high confidence.** `ex-finite-subset-net-for-unordered-real-summation`
   (published) records the finite-subset-net convention for real families but is
   homed only on the B page `topology/nets-and-filters-examples`, so A-page
   consumers cannot cite it (`depcheck`'s `b-leaf-content` rule). This is why
   the convention is defined locally in
   `def-square-summable-family-on-an-arbitrary-index-set`. Not a defect; a
   re-homing to an A page would be needed if the library ever wants it
   load-bearing.
3. **Batch-level overlaps already recorded by the sibling pair** (published
   `def-orthogonal-projection`, `thm-hilbert-spaces-are-reflexive-by-riesz-representation`,
   `lem-closed-l-two-subspaces-have-orthogonal-projections`) are unaffected by
   this pair; none of them is consumed by the 29 items here.

No confirmed defect was found in a published item consumed by this pair.

## Open obligations

- **Step 4 splice**: `research/plan-spec.json` still carries empty item arrays
  for this pair (pre-splice mismatch to report, not to hide); the manifest is
  the authored inventory.
- **Step 9 pathway sync**: the two new A/B pages are not yet placed in
  `library/functional-analysis/_pathway.md` (the `draft-unplaced` warnings).
- **Style note**: three long items (`lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori`,
  `cor-separable-infinite-dimensional-hilbert-space-is-ell-two`,
  `thm-parseval-equivalences-for-a-complete-orthonormal-family`) have canonical
  phase numbering from the checker's layer rule that goes deeper than the
  sibling pair's; the numbering is the checker's own canonical form.
- No mathematical uncertainty is unresolved for this pair; no escalation is
  pending, and no owner-held decision was overridden.
