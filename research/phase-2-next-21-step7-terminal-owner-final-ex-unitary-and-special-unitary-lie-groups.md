# Step 7 terminal owner review — ex-unitary-and-special-unitary-lie-groups

Disposition: repaired. Frozen Terra rejection: F1 inaccurately restates its dependency: the supplied item establishes GL_n(R) and SL_n(R), not GL_n(C) regarded as a real Lie group. It therefore does not license the asserted commutator Lie bracket/manifold structure used for U(n) and SU(n).

Current raw item SHA-256: 63be2991c5afbdc63916bb9e956d430ccb728a205ece6104c5f425176acc1780. The current item, its batch manifest and strict proof contract have been reconciled. This is owner mathematical evidence for the single paid-cycle closure, not a new judge verdict.

## Mathematical basis

The following completed specialist review and repair note is adopted as the item-specific owner mathematical basis; its earlier DRAFT label refers only to the prior absence of an owner terminal record.

# Step-7 terminal owner-review draft: `ex-unitary-and-special-unitary-lie-groups`

**Status:** DRAFT — mathematical owner review only; no judge verdict or terminal disposition recorded.

**Current Terra context SHA-256:** `be56fc488d9c1b871a1d8179d428a7cf2bc802a31b84f7763b64ddfd743b8b26`  
**Rejected-item SHA-256 (historical):** `7dba405569ac6e4da11dc4cace8949df77eb90d25d27f78ba2882a1460eb8ed4`  
**Proposed disposition:** `repair-required`

## Mathematical review

F1 is the real GL_n(R)/SL_n(R) example and says nothing about GL_n(C) as a real manifold. The present item views complex matrices as a real vector space but never establishes that det_C≠0 is an open real-smooth group, nor that its left-invariant tangent bracket is the complex matrix commutator. Those are the precise ambient inputs used in Steps 1.1 and 3.1. The regular-level computations for U(n), SU(n) are otherwise standard; in Step 1.1 the stated right inverse works at unitary A (A^{-*}=A).

## Repair disposition

Add a direct finite-coordinate ambient argument: identify M_n(C) with R^{2n²}; det_C is polynomial in real coordinates, so GL_n(C) is open, inversion is adjugate/determinant and real smooth, and X^L(A)=AX has bracket XY−YX. Replace F1 with that proof or add an exact complex-matrix supplier, then recheck the real regular-level and bracket uses.

## Implemented repair — draft owner evidence

**Repaired item SHA-256:** `63be2991c5afbdc63916bb9e956d430ccb728a205ece6104c5f425176acc1780`  
**State:** local repair implemented; terminal owner decision and judge verdict still pending.

Verification Step 1.1 now builds GL_n(C) as an open real matrix Lie group directly: det_C has polynomial real coordinates, the adjugate formula makes inversion smooth, and A↦AX gives bracket XY−YX. Step 2.1 supplies the unit-circle chart and regular-value argument for SU(n). F1 no longer cites the real-only GL_n(R) example; exact complex determinant/adjugate and Lie-bracket suppliers are declared in the Batch 7 item, manifest and contract.


## Owner conclusion

The exact rejected defect is either repaired in the current item or, for an unchanged item, rejected after a concrete source-level review documented above. The current item remains subject to the run's structural gates; any later mathematical change invalidates this hash-bound owner resolution.
