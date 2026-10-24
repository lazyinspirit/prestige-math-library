# Step 3a reader report — batch 15

**Run:** `advanced-qft-supersymmetry-build-2026-10-23`  
**Batch:** `15`  
**Role:** independent reader

## Opened inventory

Assigned pages:

- `library/quantum-field-theory-mathematics/qftx-defect-fusion-mathematics.md` — draft A page; its frontmatter lists `def-aqft-noninvertible-defect-fusion` and the two mathematical prerequisite pages. The body is empty.
- `library/quantum-field-theory-mathematics/qftx-defect-fusion-mathematics-examples.md` — draft B page; its frontmatter lists the three assigned examples and the A page plus prerequisite pages. The body is empty.

Assigned items reviewed:

1. `items/def-fusion-and-multifusion-category.md` and `items/def-monoidal-category.md`.
2. `items/def-aqft-noninvertible-defect-fusion.md`.
3. `items/ex-aqft-noninvertible-s3-standard-object.md`, with `items/def-finite-dimensional-representation-of-a-group-over-a-field.md`, `items/def-subrepresentation-and-irreducible-representation.md`, `items/thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order.md`, and `items/lem-qsmx-finite-group-irrep-dimension-square-sum.md`.
4. `items/ex-aqft-noninvertible-z2-sum.md`.
5. `items/ex-aqft-fusion-z2-twisted-associator.md`, with the monoidal-category definition.

For the relevant definitions and arguments, I also opened `items/def-finite-k-linear-abelian-category.md`, `items/def-semisimple-object-and-semisimple-abelian-category.md`, `items/def-tensor-and-multitensor-category.md`, `items/def-product-category.md`, `items/def-functor-and-contravariant-functor.md`, `items/def-natural-isomorphism.md`, and the direct statements used by the finite-group dimension-square lemma: `items/def-algebraically-closed-field.md`, `items/thm-fundamental-theorem-of-algebra-minimum-modulus-proof.md`, and `items/cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue.md`.

Page-prerequisite context opened: `library/category-theory/tensor-and-fusion-categories.md`, `library/category-theory/monoidal-categories-and-monoidal-functors.md`, `library/abstract-algebra/the-group-algebra-and-representations.md`, `library/abstract-algebra/maschkes-theorem-and-complete-reducibility.md`, and `library/quantum-statistical-mechanics/qsmx-quantum-double.md`. The batch's cross-batch dependency file is `[]`.

To check impact of the A-definition clarification, I reviewed its current consumers outside batch 15: `items/def-aqft-ising-fusion-data.md`, `items/ex-aqft-ising-fusion-object-noninvertible.md`, `items/lem-aqft-ising-fusion-data-coherence.md` (batch 39), and `items/op-aqft-fusion-two-category-anomaly-classification.md`, `items/pthm-aqft-noninvertible-defect-realization.md` (batch 43). Their uses remain supported; no outside source or contract edit was needed.

## Findings and repairs

### `def-aqft-noninvertible-defect-fusion`

The ordinary fusion-category definition is explicitly stated over an arbitrary field, while its EGNO locator named only §4.1, whose surrounding section assumes an algebraically closed field. EGNO §4.16 expressly says the (multi)fusion definitions make sense over any field. I added §4.16, printed p. 87, to the visible reference and source locator. The exact source is [Etingof, Gelaki, Nikshych, and Ostrik, *Tensor Categories*](https://math.mit.edu/~etingof/egnobookfinal.pdf).

The equality between the rank of `Hom(i ⊗ j, ℓ)` as a left `End(ℓ)`-module and the multiplicity of `ℓ` was asserted without its short categorical argument. I added a `Remarks` derivation: a nonzero map between simple objects in the abelian category is an isomorphism; therefore the Hom space into `ℓ` is a direct sum of `Nᵢⱼ^ℓ` copies of `End(ℓ)`. I also added the strict 2-category, interchange, and strict k-linear 2-functor conventions before their first use. The existing TikZ pentagon has the five bracketings and both associator paths oriented correctly; its proof independence remains explicit.

### `ex-aqft-noninvertible-s3-standard-object`

The example used `Rep_ℂ(S₃)` without specifying its morphisms and inferred categorical simplicity from representation-theoretic irreducibility without stating the identification. I defined morphisms as intertwining complex-linear maps in the example and added the direct argument that categorical monomorphisms are exactly injective intertwiners, so categorical subobjects correspond to invariant subspaces. The existing `F1` fact now states the simple-object criterion, and its proof-contract mapping includes this use.

The remaining calculations check: the generator relations; the two invariant lines; the three summands of `V ⊗ V`; the sign twists; complete reducibility by Maschke; the dimension-square count; dual evaluation and coevaluation; and absence of a right inverse. The local published dimension-square lemma's full proof and the exact statements it uses were inspected. The cited Etingof–Gelaki–Nikshych–Ostrik §4.1, Example 4.1.2, supports the representation-category fusion context; the specific matrices and decomposition are proved locally.

### Other assigned examples

- `ex-aqft-noninvertible-z2-sum`: checked the graded duals in both orientations, the direct-sum tensor calculation, and the no-right-inverse argument. No edit was needed.
- `ex-aqft-fusion-z2-twisted-associator`: checked the exponent identity on `ℤ₂⁴`, normalization, associator convention, pentagon scalar equation, dual snake scalars, and the stated limit that no monoidal-inequivalence claim is made. No edit was needed.

The [EGNO monoidal-category and cocycle sections](https://math.mit.edu/~etingof/egnobookfinal.pdf) support the stated conventions; [Douglas and Reutter, *Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds*](https://arxiv.org/pdf/1812.11933) supports the finite semisimple 2-category and Gray-monoid definitions. The cited equations and hypotheses were checked in those sections.

## Contract and validation work

- Updated the batch-15 proof contract's A-item review note and the S3 example's `F1` use and step 2.1 record.
- No `verification.judge` record existed on either repaired in-flight item, so none was stale.
- `reflow.mts` on the A definition and S3 example: both returned `unchanged`.
- `precheck.mts` on the A definition: 0 checked, 0 failing. On the S3 example: 1 checked, 0 failing.
- Strict `proof-contract.mjs` for batch 15: 4/4 items checked, 0 errors, 0 warnings.
- Final `proof-layout.mjs` on both changed item paths: 2 items, 8 steps, 0 defects.
- `git diff --check` on the changed items and proof contract returned no diagnostics.

## Page verdicts

- `qftx-defect-fusion-mathematics`: **pass**. Draft status, one-item inventory, prerequisite IDs, and empty body agree with the batch manifest.
- `qftx-defect-fusion-mathematics-examples`: **pass**. Draft status, three-example inventory, prerequisites, and empty body agree with the batch manifest.

## Unedited defects and blockers

No uneditable defect was confirmed in the assigned pages, items, or the reviewed supplier uses. There is no blocker to batch-15 handoff. The Peter Webb PDF URL cited by the published dimension-square lemma returned HTTP 502 during retrieval; the current published local lemma contains a complete proof, and I inspected that proof and its relevant supporting statements. I have not independently re-reviewed the proofs of all published suppliers or the full arguments of the batch-39 and batch-43 consumers; those consumers were checked only for impact from the batch-15 definition clarification.
