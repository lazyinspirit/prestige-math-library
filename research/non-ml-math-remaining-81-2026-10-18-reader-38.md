# Step 3a Reader Report — Batch 38

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader  
Batch: `38`

## Inventory opened

Assigned pages:

- `library/abstract-algebra/heisenberg-and-algebraic-weyl-algebras.md` (A)
- `library/abstract-algebra/heisenberg-and-algebraic-weyl-algebras-examples.md` (B)

Page context opened:

- `research/non-ml-math-remaining-81-2026-10-18-batch-38.pages.json`
- `library/abstract-algebra/algebraic-representation-and-tensor-symmetry-map.md`
- `library/pde/strongly-continuous-semigroups-and-hille-yosida.md`
- `library/representation-theory/regular-weyl-representations-and-stone-von-neumann.md`
- `research/non-ml-math-remaining-81-2026-10-18-batch-32.pages.json`

All ten assigned items were opened: `def-heisenberg-lie-algebra`, `def-polynomial-weyl-algebra`, `lem-trace-of-commutators-of-square-matrices-is-zero`, `lem-heisenberg-bracket-defines-lie-algebra`, `thm-no-nonzero-finite-dimensional-weyl-modules-in-characteristic-zero`, `thm-polynomial-weyl-algebra-normal-ordered-basis`, `lem-common-domain-commutator-integrates-to-weyl-relations`, `rem-algebraic-weyl-modules-do-not-automatically-exponentiate`, `ex-truncated-polynomial-weyl-module-in-characteristic-p`, and `ex-polynomial-differential-representation-of-weyl-algebra`.

Assigned items were initially read in manifest dependency order. Direct supplier items were also opened to check the proof uses: `def-lie-algebra-over-a-field`, `def-tensor-algebra-of-a-vector-space`, `def-generated-and-principal-ideals`, `def-quotient-ring`, `def-left-and-right-modules`, `def-trace-of-a-square-matrix-over-a-commutative-ring`, `def-matrices-over-a-commutative-ring`, `def-ring-matrix-product-identity-and-transpose`, `def-coordinate-column-and-matrix-of-a-linear-map`, `def-universal-enveloping-algebra`, `thm-poincare-birkhoff-witt`, `thm-universal-property-of-the-tensor-algebra`, `thm-quotient-ring-universal-property`, `def-polynomial-ring-on-a-family-of-indeterminates`, `lem-mean-value-inequality-for-a-differentiable-banach-valued-curve`, `def-hilbert-space`, `def-unbounded-linear-operator-domain-and-graph`, `def-axiom-of-choice`, `def-countable-choice`, `def-symmetric-self-adjoint-and-essentially-self-adjoint`, `lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group`, and `thm-stone-one-parameter-unitary-groups`. The two matrix suppliers added during review were opened before repairing their consumers. The current batch-38 proof-contract file was also reviewed.

## Repairs

- `lem-trace-of-commutators-of-square-matrices-is-zero`, Facts and Assumptions and steps 1.1–2.1: the proof used the entry formula for matrix multiplication, but its listed trace supplier only defined trace. Added `def-ring-matrix-product-identity-and-transpose` to `deps`, cited its product formula as `[F2]`, and added the matching citation and step inputs to the proof contract. This supplier defines `(AB)_{ik}=\sum_j a_{ij}b_{jk}` over a commutative ring. The contract also had a stale zero-matrix boundary note referring to nonexistent steps 1.2–1.3; that note now matches the proof.
- `thm-no-nonzero-finite-dimensional-weyl-modules-in-characteristic-zero`, Statement and steps 1.1–2.1: clarified the conclusion as the absence of a finite-dimensional unital `k`-algebra representation. The proof had also used matrix-coordinate composition, matrix multiplication, entrywise scalar multiplication, and the identity matrix without naming their suppliers. Added `def-coordinate-column-and-matrix-of-a-linear-map` and `def-ring-matrix-product-identity-and-transpose` to `deps`, stated the coordinate computation in step 1.1, and cited the scalar and identity operations in step 2.1. Added `[F5]`, `[F6]`, and corresponding contract citations and inputs.
- `ex-truncated-polynomial-weyl-module-in-characteristic-p`, Facts and Assumptions and step 3.1: corrected the one-mode generator notation from `x` to `x_1` to match the assigned algebra definition, and supplied the short verification that `End_k(M)` is a unital associative `k`-algebra under pointwise operations and composition.
- `ex-polynomial-differential-representation-of-weyl-algebra`, step 3.1: supplied the same elementary verification for `End_k(k[t_1,…,t_n])` before applying the tensor-algebra universal property. Updated its proof-contract derivation.
- `lem-common-domain-commutator-integrates-to-weyl-relations`, step 5.1: supplied the same verification for `End_C(D)` before constructing the algebraic module. Updated its proof-contract derivation.
- Assigned A-page scope paragraph: made the bridge’s Axiom of Choice and Countable Choice assumptions, operator and group invariance of the common graph core, and graph-differentiability in every generator explicit. The local lemma imposes each of these conditions.

The changed items had no `verification.judge` records to remove. Reflow reported all five unchanged; precheck passed for each. The final batched `node tools/proof-layout.mjs` call reported **5 items, 19 steps, 0 defects**.

## Source checks

- Teschl, *Mathematical Methods in Quantum Mechanics*, 2nd ed., §5.1: Theorem 5.1, printed pp. 145–146, gives the functional-calculus group, exact derivative domain, and domain invariance/commutation. Its exponent sign is `e^{-itA}`; the batch’s `e^{itA}` convention reverses the derivative sign. Theorem 5.3, printed pp. 147–148, gives Stone’s generator correspondence and uniqueness. The local common-core integration argument is proved in the assigned lemma rather than attributed to Teschl. [Source](https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf)
- Dumas, *Noncommutative Invariants*, §2.1.1, printed p. 11, presents the Weyl relations and ordered monomial basis; §3.2.1 includes the Heisenberg algebra and its central quotient, with the Heisenberg example on printed p. 30. [Source](https://lmbp.uca.fr/~fdumas/fichiers/B-Mat60.pdf)
- Etingof, *Lectures on Calogero-Moser Systems*, Lecture 8, §8.1, printed p. 48, describes the Weyl algebra as the tensor-algebra quotient by `xy-yx=ω(x,y)`. [Source](https://math.mit.edu/~etingof/zlecnew.pdf)
- Axler, *Linear Algebra Done Right*, 4th ed., §8D, Theorem 8.49, printed p. 327, proves `tr(AB)=tr(BA)` for matrices over a field. The assigned trace lemma’s elementary double-sum proof supplies the stated extension to commutative rings and the `d=0` case. [Source](https://linear.axler.net/LADR4e.pdf)

## Page verdicts and remaining defects

- A page `heisenberg-and-algebraic-weyl-algebras`: **pass**. Its algebraic claims are supported by the local proofs and listed dependencies. The analytic summary now records the lemma’s essential hypotheses.
- B page `heisenberg-and-algebraic-weyl-algebras-examples`: **pass**. Both examples’ characteristic, dimension, module, and faithfulness claims agree with their constructions.
- Confirmed defects that could not be edited: **none**.
- Blocker: **none**.

## Coverage limit

All assigned items and pages, their directly used suppliers, the cited later Weyl page, and the referenced source passages above were opened. I did not independently re-audit every transitive proof behind the published foundational suppliers or every secondary bibliography entry; those published supplier statements were checked where the assigned proofs invoke them.
