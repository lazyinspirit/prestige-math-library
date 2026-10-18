# Step 3a reader report — batch 69

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader  
Dispatch label: `reader-69`

## Outcome

I found no mathematical defect in the assigned items or page summaries. I corrected two source locators in the assigned relative-tensor proposition. The change is bibliographic only; it does not alter a mathematical claim or proof.

## Opened inventory

Assigned pages:

- A page: `library/hopf-hecke-algebras/quasi-hopf-weak-hopf-and-relative-tensor-products.md`
- B page: `library/hopf-hecke-algebras/quasi-hopf-weak-hopf-and-relative-tensor-products-examples.md`

Assigned items, read in dependency order:

- Level 0: `def-quasi-bialgebra-and-quasi-hopf-algebra`; `def-weak-bialgebra-and-weak-hopf-algebra`.
- Level 1: `thm-quasi-bialgebra-modules-form-a-monoidal-category`; `lem-weak-bialgebra-source-and-target-bases`; `rem-quasi-and-weak-hopf-extensions-change-different-axioms`; `cex-a-quasi-bialgebra-need-not-be-quasi-hopf`; `ex-two-object-discrete-groupoid-is-a-weak-hopf-algebra`.
- Level 2: `prop-weak-bialgebra-module-tensor-product-is-delta-one-image`; `ex-quasi-hopf-algebra-from-the-nontrivial-3-cocycle-on-c2`.

Direct published suppliers opened for the assigned claims:

- `def-algebra-over-a-commutative-ring`
- `def-left-and-right-modules`
- `def-module-homomorphism-kernel-image-and-cokernel`
- `thm-universal-property-of-module-tensor-products`
- `thm-symmetry-and-associativity-over-a-commutative-ring`
- `def-hh-scalar-and-tensor-conventions`
- `def-hh-coalgebra-and-coalgebra-map`
- `thm-tensor-product-of-algebras-over-a-commutative-ring`
- `thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication`
- `def-hh-hopf-algebra-and-antipode`
- `def-hh-bialgebra-and-bialgebra-map`
- `def-monoidal-category`
- `thm-hh-bialgebra-module-tensor-coherence`, linked from the A-page summary for the ordinary bialgebra comparison.

I also read the A page's plan-level prerequisite, `library/hopf-hecke-algebras/hopf-hecke-and-quantum-symmetry-interfaces.md`. Its page summary does not supply a premise to any batch-69 proof. The current batch proof contracts and notes were consulted as evidence and checked against the authored carriers.

## Review and edits

The quasi-bialgebra definition matches the EGNO convention: quasi-coassociativity has the stated conjugation direction, the pentagon has the corresponding order, and the module associator acts by `Phi`. The module-category proof checks the diagonal action, associator linearity and naturality, pentagon, and triangle. The `C2` example verifies the cocycle and all quasi-antipode identities directly. The monoid-algebra counterexample correctly conjugates a hypothetical quasi-antipode to an ordinary convolution antipode before deriving the idempotent contradiction.

The weak-bialgebra definition and counital-base lemma match the stated weak-unit, weak-counit, and primed-source conventions. I checked the local derivations of both target-base unit identities in lemma step 5.1: the left identity follows from `Delta(1) Delta(y)=Delta(y)`, coalgebra counitality, and the target-base coproduct formula; the right identity follows by applying the weak counit with middle argument `1`, then `Delta(1) Delta(h)=Delta(h)`, keeping `epsilon_s'` to the left of `h_(1)`. These calculations support the H-linearity of both unit maps in proposition step 3.1. The image/quotient construction, associator, pentagon, triangle, and naturality checks are sound. The two-object groupoid example verifies the weak axioms and diagonal quotient/image directly.

In `items/prop-weak-bialgebra-module-tensor-product-is-delta-one-image.md`:

- Line 26: the Böhm–Szlachányi locator had pointed to arXiv HTML lines 67–99, which are in the introduction. I corrected it to Section 2.1, printed p. 4, and stated the source's finite-dimensional weak-Hopf scope. Section 2.1 gives the `Delta(1)`-image product and unit for that special case.
- Line 29: the Böhm–Caenepeel–Janssen locator placed Section 4 within PDF pages 3–16, although Proposition 4.3, Proposition 4.4, and Corollary 4.5 occur later. I corrected the locator to separate Sections 1–2 (PDF pp. 3–16) from Section 4 (PDF pp. 20–22), and named the relevant propositions and corollary.

No proof contract changed: the repair changes only source locations. The proposition has no `verification.judge` record to remove. Since no proof was materially repaired, I did not run reflow or precheck. After the final edit I ran:

```text
node tools/proof-layout.mjs items/prop-weak-bialgebra-module-tensor-product-is-delta-one-image.md
```

Result: `proof-layout: 1 items, 6 steps, 0 defects`.

## Source checks

- [EGNO, *Tensor Categories*](https://math.mit.edu/~etingof/egnobookfinal.pdf), Proposition 5.12.4 and Definition 5.12.5 (printed pp. 111–112) verify the quasi-bialgebra equations and module associator convention; Definition 5.13.2 (p. 113) requires a bijective quasi-antipode map; Example 5.13.6 (p. 114) gives the normalized 3-cocycle function-algebra construction.
- [Haußer–Nill, *Doubles of Quasi-Quantum Groups*](https://arxiv.org/pdf/q-alg/9708023), Section 2.1 (PDF pp. 5–7) states the same quasi-coassociativity, pentagon, normalization, module associator, and quasi-antipode equations.
- [Schauenburg, *Weak Hopf Algebras and Quantum Groupoids*](https://www.impan.pl/shop/publication/transaction/download/product/86703), Section 4 (printed pp. 176–178, especially equations (4.5)–(4.14) and Proposition 4.2) gives the counital-map identities, the inverse primed source map, and the target-base Frobenius/separability element. Section 5 (printed pp. 179–180) gives the separable-base image/relative-tensor comparison.
- [Böhm–Szlachányi, *Weak Hopf Algebras II*](https://arxiv.org/pdf/math/9906045), Section 2.1 (printed p. 4) confirms the finite-dimensional weak-Hopf image product and unit-object construction; I used it only for that special case.
- [Böhm–Caenepeel–Janssen, *Weak Bialgebras and Monoidal Categories*](https://arxiv.org/pdf/1103.2261), Sections 1–2 and Section 4 (especially Theorems 2.3–2.4, Propositions 4.3–4.4, and Corollary 4.5) confirms the module-category interface, target base, separability, and relative-tensor comparison. Its article omits some calculations, so the local proof of the two unit identities was checked independently.

## Page verdicts

- A page `quasi-hopf-weak-hopf-and-relative-tensor-products`: pass. Its summaries accurately separate the quasi and weak structures, state the module-category conclusions supported by the local items, and keep the ordinary-bialgebra comparison within its hypotheses.
- B page `quasi-hopf-weak-hopf-and-relative-tensor-products-examples`: pass. Its summaries match the three checked carriers and do not add a claim beyond them.

## Unedited defects and blockers

No confirmed or suspected defect remains unedited in this batch. No blocker affects the batch-69 review. The live run status still reports an unrelated `3a-collect` blocker: `collect-18` failed three times for batch 18.

## Coverage limits

I reviewed every assigned carrier, every direct published supplier used by the local proofs, and the cited primary-source sections listed above. I did not independently re-audit all lower transitive prerequisites behind those published suppliers, nor the four upstream pages listed as reading prerequisites by the separate Hopf/Hecke page; no batch-69 proof uses those as a mathematical premise.
