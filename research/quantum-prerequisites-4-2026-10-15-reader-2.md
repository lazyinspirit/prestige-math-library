# Step 3a reader report — batch 2

Run: `quantum-prerequisites-4-2026-10-15`  
Batch: `2`  
Role: reader

## Opened inventory

- Assigned pages: `library/functional-analysis/complex-norms-and-realification.md` and `library/functional-analysis/complex-norms-and-realification-examples.md`.
- Assigned items, read in dependency order: `def-complex-norm-and-complex-normed-space`, `lem-complex-modulus-of-real-embedding-equals-real-absolute-value`, `lem-complex-norm-realification-is-a-real-norm`, `lem-complex-coordinate-l1-is-a-norm`, `def-complex-normed-subspace`, `def-equivalent-complex-norms`, and `ex-anisotropic-real-norm-on-c`.
- Required dependency pages and the relevant realification/normed-space summaries: `library/linear-algebra/complexification-realification-and-real-structures.md` and `library/real-analysis/rn-as-a-normed-space.md`.
- Supplier items opened for the assigned claims: `def-vector-space`, `def-complex-numbers-and-arithmetic`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `def-norm-and-normed-space`, `def-realification-of-a-complex-vector-space`, `def-abs-value`, `lem-of-abs-value`, `lem-of-square-positive`, `lem-of-zero-mult`, `thm-of-square-roots`, `lem-complex-conjugation-and-modulus-laws`, `def-finite-sum`, `lem-finite-sum-laws`, `def-function-space`, `def-linear-subspace`, `def-complete-ordered-field`, `def-ordered-field`, `thm-complex-numbers-form-a-field`, `lem-of-triangle-inequality`, `lem-of-sign-rules`, `lem-of-add-order`, `cor-of-one-positive`, `lem-of-square-monotone`, `cor-cauchy-reals-lub-complete`, `def-field`, `lem-of-mult-neg`, `lem-x-squared-plus-one-is-irreducible-over-the-reals`, `thm-irreducible-quotient-adjoins-a-root`, `thm-reals-ordered-field`, and `thm-quadratic-and-cubic-irreducibility-test`.
- The batch-2 coverage, cross-batch dependency list, and all seven proof-contract entries were checked against the current item text. The cross-batch dependency list is empty.

## Source checks

I opened both sources listed on the A-page items. Tomasz Kochanek, [*Functional Analysis*, Lecture 1](https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf), gives the real/complex norm axioms at Definition 1.1 (PDF pp. 1–2), coordinate norms including the complex coordinate sum at Example 1.2(1) (PDF p. 2), and positive-constant equivalence at Definition 1.5 (PDF p. 4). M. Winklmeier, [*Functional Analysis* lecture notes](https://math.uniandes.edu.co/~mwinklme/teaching/FuncAna/FA-lecture_notes.pdf), gives the norm definition at Definition 1.10 (printed p. 11), the finite-coordinate norms at Example 1.15(i) (printed p. 13), and equivalent norms at Definition 1.17 (printed p. 17). These passages support the cited norm interfaces. The assigned proofs locally supply the realification, subspace restriction, and `n=0` cases; the sources are not used in place of those proofs.

I also opened the Lebl URL cited by the published complex-modulus definition: [*Basic Analysis I*, §11.4](https://www.jirka.org/ra/html/sec_complexexp.html). Its proof uses conjugation and modulus for complex exponentials (lines 748–758); it does not supply the missing local argument that `a²+b²` is nonnegative for every pair of real coordinates.

## Review and edit

- `ex-anisotropic-real-norm-on-c`, Verification 1.1: the former text asserted `2|y|≥0` without treating `y=0`; it also stated `N(0)=0` from absolute-value facts alone. I rewrote the calculation using `2=1+1` and distributivity, so `2|y|=|y|+|y|` is zero when `y=0` and positive when `y≠0`. This establishes both uses without relying on an unstated zero-product rule. The example's real norm and complex-homogeneity witness remain unchanged.
- Updated the example's proof contract: the `F8` source excerpt now includes the ordered-field structure needed for distributivity, and the separation derivation no longer lists `F10`, which is not used in that step. No `verification.judge` record was present to remove. No manifest dependency changed.
- Required checks after the final item edit: `node tools/tsx-run.mjs tools/reflow.mts items/ex-anisotropic-real-norm-on-c.md` — unchanged; `node tools/tsx-run.mjs tools/precheck.mts items/ex-anisotropic-real-norm-on-c.md` — pass, 1 checked and 0 failing; `node tools/proof-layout.mjs items/ex-anisotropic-real-norm-on-c.md` — 1 item, 4 steps, 0 defects.
- No page prose or other assigned item was edited.

## Defects outside reader edit scope

1. Published `def-complex-conjugate-real-imaginary-part-and-modulus`, Definition after the displayed `|z|=sqrt(a²+b²)`: the definition says the nonnegative square root exists but does not establish `a²+b²≥0` for arbitrary real coordinates. The cited square-root theorem applies only to nonnegative radicands; the local definition provides no sum-of-squares argument or `justified_by` result. Add and prove a helper that every real square is nonnegative (including zero) and that a sum of such terms is nonnegative, then use it to justify the modulus construction. This is an ill-formed construction defect and blocks assigned `def-complex-norm-and-complex-normed-space` and its consumers.
2. Published `thm-of-square-roots`, Proof 4.1–4.2: both steps choose a positive `h` satisfying several strict upper bounds without giving the choice. The omission is immediate to close in an ordered field: in 4.1, for `δ=(a-s²)/(2s+1)>0`, take `h=δ/(1+δ)`; in 4.2, for `δ=(s²-a)/(2s)>0` and `s>0`, take `h=sδ/(s+δ)`. This is a nonfatal unlicensed inference in the dependency of `lem-complex-modulus-of-real-embedding-equals-real-absolute-value`.
3. Published `lem-of-abs-value`, Proof 1.4: the zero-factor case asserts `xy=0` without citing or deriving zero multiplication. `lem-of-zero-mult` is available in the transitive supplier closure, but is not used in the cited facts for this step. Cite it (and commutativity for a zero second factor) or derive the field identity. This short omission is nonfatal for assigned `ex-anisotropic-real-norm-on-c`.
4. Published `lem-complex-conjugation-and-modulus-laws`, Proof 1.3, 2.1, 3.1–3.2, and 5.1: the proof invokes nonnegativity of squares, products, and sums without establishing the zero cases. In particular, Fact F5 only states positivity for nonzero squares, so it does not by itself support “with zero case included” at 1.3 or the inference from `a²+b²=0` at 2.1; 3.1–3.2 also need `|z||w|≥0`, and 5.1 needs `|z|+|w|≥0`. Add a short zero/positive case derivation or cite a helper covering squares and sums/products of nonnegative reals. These immediate omissions are nonfatal for assigned `lem-complex-coordinate-l1-is-a-norm`.
5. Published `lem-of-square-monotone`, Facts & Assumptions L2, used in Proof 2.1–2.2: `def-ordered-field` supplies trichotomy and closure of the positive cone, but does not state the quoted consequence that two nonnegative elements with at least one positive have positive sum. Add the zero/positive case split or cite a helper. This is a short, nonfatal unlicensed inference in the supplier chain for assigned `lem-complex-coordinate-l1-is-a-norm`.

## Page verdicts and blocker

- `complex-norms-and-realification`: the item inventory and summary match, and the assigned claims/proofs are locally coherent. The published modulus construction and square-root supplier gaps above prevent a clean acceptance of the modulus-dependent claims.
- `complex-norms-and-realification-examples`: the page summary matches the example; `N(1)=1`, `N(i)=2`, and `|i|=1` are computed correctly, and the real norm proof omission in Verification 1.1 has been repaired. The example remains dependent on published modulus and absolute-value suppliers listed above.
- Blocker: the reader cannot edit the published suppliers. In particular, the modulus construction's missing well-definedness justification requires owner repair before the affected page pair can be accepted. No proposed withdrawal was identified.

## Coverage limitation

This review checked the assigned carriers, their page prerequisites, the directly used supplier claims, and the specific supporting facts opened above. It did not independently audit every unrelated item/page in the 280-item/63-page transitive tool closure; no coverage of that whole closure is claimed.
