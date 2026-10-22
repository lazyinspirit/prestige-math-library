# Step 3a Reader Report — Batch 76

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `76`

## Opened inventory

- A page: `qftx-two-dimensional-sewing`, `library/quantum-field-theory-mathematics/qftx-two-dimensional-sewing.md`.
- B page: `qftx-two-dimensional-sewing-examples`, `library/quantum-field-theory-mathematics/qftx-two-dimensional-sewing-examples.md`.
- Assigned items: `def-qftx-frobenius-semisimple-model`, `prop-qftx-frobenius-genus-amplitude`, `prop-qftx-frobenius-positive-reflection`, and `ex-qftx-dual-number-topological-model`.
- Direct published item supplier: `thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras`. Its full statement and proof were read; its current physics import hash equals the root mathematics hash (`04b09ab9ba7757b618b51e7f2f9ca3d08bbc947be550be6a1c5b2a0ef8cf15fd`).
- The theorem's declared prerequisite interfaces were inspected where they support the closed classification: `def-category`, `def-countable-choice`, `def-equivalence-and-adjoint-equivalence-of-categories`, `def-frobenius-object-and-knowledgeable-sewing-data`, `def-lax-strong-and-strict-monoidal-functor`, `def-braided-monoidal-functor`, `def-monoidal-natural-transformation`, `def-oriented-open-closed-surface-category`, `def-symmetric-monoidal-category`, `lem-boundary-relative-two-dimensional-surface-normal-form`, and `lem-elementary-surface-sewing-relations`. The published prerequisite page `frobenius-algebras-and-two-dimensional-sewing` was also read.
- The authored dependency structure is: the semisimple model and the dual-number example depend on the published classification; both propositions depend on the semisimple model. The B page also requires the A page.

## Mathematical and source review

The root classification theorem states the equivalence between strong symmetric monoidal functors on the no-free-boundary closed oriented cobordism category and finite-dimensional commutative Frobenius algebras. Its connected-surface formula specializes at zero incoming and outgoing circles to the counit after the handle operator and unit. This supports the conditional uses in the assigned definition and example. The theorem proof and its closed Frobenius and normal-form suppliers preserve the empty-boundary conventions and the arity-one cylinder identity used by the assigned claims.

The assigned finite calculations check out. In the idempotent basis the pairing has matrix `diag(w_1,...,w_r)`, so its determinant is nonzero; the displayed comultiplication satisfies the counit, coassociativity, and Frobenius identities on basis elements. The handle acts by `w_i^{-1}` on `e_i`, giving `sum_i w_i^(1-g)` and torus value `r`. The form in the positivity proposition is `sum_i w_i conjugate(a_i) b_i`; Hermitian positive definiteness is equivalent to all weights being positive real. In the example, the dual-number pairing has determinant `-1`, the specified comultiplication satisfies the Frobenius equations, `x` lies in every maximal ideal, and the displayed Hermitian form takes both positive and negative values. No empirical claim is made.

Primary source checks:

- Joachim Kock, [*Frobenius algebras and 2D topological quantum field theories*](https://mat.uab.cat/~kock/TQFT/FS.pdf), §1.3.6 (connected cobordism normal form by genus and boundary counts) and §§3.1.12–3.1.13 (the symmetric-monoidal TQFT/Frobenius-algebra correspondence, including arrows). The source convention sends the cylinder to the identity.
- Aaron D. Lauda and Hendryk Pfeiffer, [*Open-closed strings: Two-dimensional extended TQFTs and Frobenius algebras*, arXiv:math/0510664v3](https://arxiv.org/html/math/0510664), §3.6, Theorem 3.22 (normal-form statement), and §4, Corollary 4.6 (closed TQFTs and commutative Frobenius algebras). The latter is the closed-sector result; the open/closed extension is not inferred for these assigned items.
- The assigned items also cite Kock's Cambridge excerpt. Its PDF endpoint timed out during this review; the indexed official excerpt and book page confirm the broad correspondence, but I did not inspect the full excerpt. I inspected the cited Kock short-note statements and the Lauda–Pfeiffer closed-sector corollary, and the root mathematical item supplies a local proof. I did not independently audit every argument in those source papers beyond the cited sections and the local dependency proof.

## Edits and validation

- `items/def-qftx-frobenius-semisimple-model.md:70`: corrected the TikZ labels from doubled backslashes to the single TeX control sequences `\Delta` and `\mu`. The arrows now match the stated composition `H = mu circ Delta`.
- `items/prop-qftx-frobenius-genus-amplitude.md:64`: corrected the TikZ labels to `\eta` and `\epsilon`. The diagram now represents `epsilon circ H^g circ eta`, as stated and proved.
- `items/prop-qftx-frobenius-positive-reflection.md:4,45,61`: replaced the title's undefined and potentially overstrong “reflection form” label with a title naming the proved Hermitian-form criterion; stated the sesquilinearity convention and definitions of Hermitian and positive definite; renamed the trailing heading to “Form matrix.” The statement and proof conclusion were not broadened to claim a reflection-positive or unitary TQFT.
- No numbered proof or claim was materially changed, so the proof contracts were left intact. No `verification.judge` entry was present in the changed items.
- Reflow and precheck passed for all three changed items. Final `proof-layout` run: 3 items, 10 steps, 0 defects.

## Page verdicts and uneditable defects

- `qftx-two-dimensional-sewing` (A): no page-prose defect found. Its three listed items are in dependency order and the scope remains closed-sector only.
- `qftx-two-dimensional-sewing-examples` (B): no page-prose defect found. It lists the assigned example and requires the A page and published Frobenius-sewing page.
- No confirmed or suspected mathematical defect remained outside this reader's edit scope; the findings JSON is empty.

## Blockers and coverage limits

The batch notes recorded an earlier hash mismatch for the transitive published dependency `thm-invertible-matrix-theorem`. At this review's split, its physics import, root mathematics original, and `research/math-imports.json` pin all have SHA-256 `1286785cdca44b1faf70f2c24d971d1510c06a1ff97c98f2a2849af423a49d51`. Thus the historical mismatch is not a current content finding. I did not rerun the broader physics checker, so this report does not assert current run readiness.

The first assigned-item read preceded inspection of its published supplier, contrary to the prescribed supplier-first order; final claim checks were made after reading the supplier and relevant cited dependencies. The transitive supplier closure was not audited item by item (the batch notes report 1,057 items and 210 pages in the scoped closure). These are coverage limits, not identified mathematical gaps in the assigned claims. Root mathematics and imported mathematics files were not edited.
