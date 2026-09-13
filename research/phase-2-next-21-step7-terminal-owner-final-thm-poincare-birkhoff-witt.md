# Step 7 terminal owner review — thm-poincare-birkhoff-witt

Disposition: accepted-after-review. Frozen Terra rejection: Step 2.1 misstates L1: its supplied interface only says ordered monomials span U(g), not that F_n is spanned by those of length ≤n. This filtered claim is essential to identify bases of F_n/F_{n-1} and prove σ bijective.

Current raw item SHA-256: 2f8b4d05d34c1da315b84727e8e2b6892c488983024d4e712826a09d611e8058. The current item, its batch manifest and strict proof contract have been reconciled. This is owner mathematical evidence for the single paid-cycle closure, not a new judge verdict.

## Mathematical basis

The following completed specialist review and repair note is adopted as the item-specific owner mathematical basis; its earlier DRAFT label refers only to the prior absence of an owner terminal record.

# Step-7 terminal owner-review draft: `thm-poincare-birkhoff-witt`

**Status:** DRAFT — mathematical owner review only; no judge verdict or terminal disposition recorded.

**Current Terra context SHA-256:** `54a14ae245e01c49f3665ed9f5cd3e0ecd29f317588bb29c1387e20ca140df68`  
**Current item SHA-256:** `2f8b4d05d34c1da315b84727e8e2b6892c488983024d4e712826a09d611e8058`  
**Proposed disposition:** `accepted-after-review`

## Mathematical review

L1's Statement says only unfiltered spanning, but its cited *proof* gives a stronger, explicit straightening algorithm. Each adjacent inversion swap preserves tensor-word length and decreases inversions, while each bracket branch shortens word length by one; strong induction therefore rewrites any word of length ≤n into ordered words of length ≤n. Since F_n is the image of tensor words of length ≤n by def-pbw-filtration (also a dependency of L1), the filtered spanning claim in Step 2.1 follows directly from that proof, and L2 supplies independence. Consequently the degree-n quotient and symbol-map argument are mathematically sound; the theorem does not need an extra PBW premise.

## Repair disposition

No substantive repair required after reading L1's actual proof. For interface clarity, add filtered spanning to L1's Statement in a later supplier edit if permitted.


## Owner conclusion

The exact rejected defect is either repaired in the current item or, for an unchanged item, rejected after a concrete source-level review documented above. The current item remains subject to the run's structural gates; any later mathematical change invalidates this hash-bound owner resolution.
