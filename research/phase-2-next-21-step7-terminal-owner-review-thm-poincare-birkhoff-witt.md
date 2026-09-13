# Step-7 terminal owner-review draft: `thm-poincare-birkhoff-witt`

**Status:** DRAFT — mathematical owner review only; no judge verdict or terminal disposition recorded.

**Current Terra context SHA-256:** `54a14ae245e01c49f3665ed9f5cd3e0ecd29f317588bb29c1387e20ca140df68`  
**Current item SHA-256:** `2f8b4d05d34c1da315b84727e8e2b6892c488983024d4e712826a09d611e8058`  
**Proposed disposition:** `accepted-after-review`

## Mathematical review

L1's Statement says only unfiltered spanning, but its cited *proof* gives a stronger, explicit straightening algorithm. Each adjacent inversion swap preserves tensor-word length and decreases inversions, while each bracket branch shortens word length by one; strong induction therefore rewrites any word of length ≤n into ordered words of length ≤n. Since F_n is the image of tensor words of length ≤n by def-pbw-filtration (also a dependency of L1), the filtered spanning claim in Step 2.1 follows directly from that proof, and L2 supplies independence. Consequently the degree-n quotient and symbol-map argument are mathematically sound; the theorem does not need an extra PBW premise.

## Repair disposition

No substantive repair required after reading L1's actual proof. For interface clarity, add filtered spanning to L1's Statement in a later supplier edit if permitted.
