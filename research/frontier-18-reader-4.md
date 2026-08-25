# frontier-18 reader-4 report

Batch: `4`
Pages:
- `library/commutative-algebra/noetherian-rings-and-hilbert-basis.md`
- `library/commutative-algebra/noetherian-rings-and-hilbert-basis-examples.md`

## Findings

### R4-1
- Item: `ex-artin-tate-finite-intermediate-algebra`
- Location: `items/ex-artin-tate-finite-intermediate-algebra.md`, proof step `4.1`
- Severity: fatal
- Defect: The proof says the $k$-span of `1` and of all `t^a` with `a >= 2` is "exactly that union" of `A'·1` and `A'·t^3`. That is false: a sum such as `1 + t^3` lies in `B` but in neither summand individually. The needed conclusion is that `B = A'·1 + A'·t^3`, not that `B` is their union.
- Evidence: `A'·1` is the span of the even powers and `A'·t^3` is the span of the odd powers `t^{2m+3}`. Those are distinct subspaces; their union is not closed under addition. The stated sentence is therefore false as written and does not justify module-finiteness.
- Repair: Rewrote step `4.1` to prove `B = A'·1 + A'·t^3` by showing each basis monomial of `B` lies in one of the two `A'`-submodules, and synced the matching contract derivation row.

### R4-2
- Item: `cor-product-of-two-noetherian-rings-is-noetherian`
- Location: `items/cor-product-of-two-noetherian-rings-is-noetherian.md`, first remark
- Severity: nonfatal
- Defect: The remark says the induction to finite products "starts from the empty product, which is the zero ring". That is incorrect in this setting and is not what the proof on the page establishes.
- Evidence: The displayed induction is on the binary product isomorphism `(R_1×⋯×R_n)×R_{n+1}`. The correct base case is one factor, not an "empty product = zero ring" convention.
- Repair: Rewrote the remark to an induction on the number of factors with the one-factor base case.

### R4-3
- Item: `cor-product-of-two-noetherian-rings-is-noetherian`
- Location: `research/frontier-18-batch-4.proof-contracts.json`, contract row `boundaries.endpoints`
- Severity: nonfatal
- Defect: The boundary-row rationale cites `step 3.2`, but the item has no such proof step.
- Evidence: The contract entry names "the iteration in step 3.2", while the item's proof has only steps `1.1`, `2.1`, `3.1`.
- Repair: Replaced the rationale with an item-specific endpoint disposition that no longer cites a nonexistent step.

## Checks With No Findings

- Opened all 51 in-scope item files on the assigned A/B pair.
- Opened the cited dependencies needed to verify the repaired and potentially weak points.
- Provenance: every in-scope mathematical-content item has `provenance.statement` and `provenance.proof`. The only in-scope `ai-generated` statement is `ex-artin-tate-finite-intermediate-algebra`, and no other in-scope item depends on it.
- Citation/contract tooling: `citation-fidelity` found no missing quotes or widening candidates in the batch contracts. After repair, the changed items passed `proof-contract`, `reflow`, and item-scoped `precheck`.

## Per-Page Verdict

- `noetherian-rings-and-hilbert-basis`: clean read on Statements, proofs, citations, boundary cases, and provenance for the in-scope items I opened. No page-item repairs were needed here; one contract boundary-row repair was applied for `cor-product-of-two-noetherian-rings-is-noetherian`, and one remark was corrected there.
- `noetherian-rings-and-hilbert-basis-examples`: one fatal proof defect in `ex-artin-tate-finite-intermediate-algebra` was confirmed and repaired. I found no further defects on this page after the repair.

Items opened: 51
