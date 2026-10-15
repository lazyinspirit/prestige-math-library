# Step 3a reader report — batch 3

Run: hopf-hecke-unfinished-15-2026-10-15  
Batch: 3  
Role: reader

## Opened inventory

Assigned pages:

- bialgebras-convolution-and-antipode-identities (A), including its complete page summary.
- bialgebras-convolution-and-antipode-identities-examples (B), including its complete page summary.

Assigned items, reviewed in manifest dependency order:

- A page: lem-hh-tensor-product-coalgebra, def-hh-bialgebra-and-bialgebra-map, lem-hh-convolution-algebra-associativity-and-unit, lem-hh-bialgebra-compatibility-equivalence, def-hh-hopf-algebra-and-antipode, thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication, lem-hh-group-and-polynomial-hopf-algebras-exist, and lem-hh-commutative-or-cocommutative-antipode-is-involutive.
- B page: ex-hh-group-and-function-algebras-for-s3, ex-hh-convolution-is-not-composition, and ex-hh-polynomial-primitives-characteristic.

Page prerequisites opened:

- tensor-coherence-and-algebraic-descent
- coalgebras-counits-and-the-fundamental-coalgebra-theorem
- comodules-matrix-coefficients-and-coalgebra-duality

Direct item suppliers opened:

- Current-run batch 1 drafts: def-hh-coalgebra-and-coalgebra-map and def-hh-group-like-and-primitive-elements.
- Published suppliers: def-hh-scalar-and-tensor-conventions, lem-hh-tensor-coherence-on-elementary-tensors, prop-functoriality-of-module-tensor-products, thm-unit-isomorphisms-for-module-tensor-products, def-algebra-over-a-commutative-ring, thm-tensor-product-of-algebras-over-a-commutative-ring, def-free-module-on-a-set-and-standard-basis, lem-hh-free-associative-ring-and-relations-descent, lem-hh-finite-polynomial-and-localization-constructions, thm-tensor-product-basis-from-bases, thm-universal-property-of-free-modules, and thm-universal-property-of-module-tensor-products.

I also opened the batch manifest, current batch 3 proof contracts, batch notes, and current cross-batch dependency record. The live run status was recomputed from .autopilot/; Step 3a read was in progress. Author notes and contract decisions were treated as evidence, not as mathematical verdicts.

## Repairs

- thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication, proof step 1.2: define the reverse-product map as m ∘ (S ⊗ S) ∘ τ. This makes its well-definedness explicit from the already-declared tensor-map and flip supplier and gives the stated value on elementary tensors. Updated its derivation contract and fact-use mapping. No statement changed.
- lem-hh-group-and-polynomial-hopf-algebras-exist, proof step 2.3: prove the binomial expansion for commuting tensor factors by induction and Pascal's identity before using it in the antipode calculation. Proof step 3.1 now establishes that positive field characteristic is prime and derives divisibility of the intermediate binomial coefficients from the factorial identity and invertibility modulo the prime. Updated both derivation contract claims. No statement changed.
- ex-hh-polynomial-primitives-characteristic, Facts [F3]–[F4] and proof step 1.2: point to the now-local binomial expansion and characteristic-prime calculation in the assigned supplier, so the example's characteristic-dependent calculation has explicit support. Updated the exact supplier quotes and step inputs in its proof contract.
- ex-hh-convolution-is-not-composition, proof step 3.1: replace its nonexistent reference to step 1.3 with the actual steps 1.1, 1.2, and 2.1. Updated its derivation contract.

None of the changed items had a verification.judge record to remove. Reflow reported all four changed items unchanged. Their prechecks all passed. The one final proof-layout invocation reported 4 items, 26 steps, and 0 defects.

## Uneditable defect

The proof contract for ex-hh-group-and-function-algebras-for-s3 has an inaccurate final derivation claim at research/hopf-hecke-unfinished-15-2026-10-15-batch-3.proof-contracts.json, contracts.ex-hh-group-and-function-algebras-for-s3.derivations[3].claim: it says “steps 2.1–1.3,” while the item's final proof step 3.1 summarizes steps 2.1–2.2 and there is no step 1.3. The example proof itself is correct. This is a contract-only defect outside the dispatch's item/A-page-prose repair scope, so it remains for the owner to correct.

## Page verdicts

- A page bialgebras-convolution-and-antipode-identities: the page summary accurately describes the current item content and caveats. No page-prose defect found. The two proof repairs above are recorded against their items.
- B page bialgebras-convolution-and-antipode-identities-examples: the page summary accurately describes the examples and their scope. No page-prose defect found. The assigned examples are mathematically sound after the item repair; the S3 example has the separate contract-only defect above.

## Blocker

None.

## Coverage limit

I reviewed every assigned page and item, the three required pages, and every direct item supplier needed for these arguments. I did not audit the entire transitive dependency closure of those published suppliers. Their relevant statements and proofs were opened; no unresolved mathematical uncertainty remained in the reviewed arguments.
