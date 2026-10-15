# Step 3a reader report — batch 4

Run: `quantum-prerequisites-4-2026-10-15`

## Opened inventory

- Assigned pages: `library/functional-analysis/complex-subspace-realification.md` and `library/functional-analysis/complex-subspace-realification-examples.md`.
- Required page context: `library/functional-analysis/complex-norms-and-realification.md` and `library/functional-analysis/normed-and-banach-spaces.md`.
- Assigned items: `lem-complex-normed-subspace-realifies-to-real-normed-subspace` and `ex-complex-line-realification-basis-in-c2`.
- Direct item suppliers opened: `def-complex-norm-and-complex-normed-space`, `def-complex-normed-subspace`, `def-linear-subspace`, `def-realification-of-a-complex-vector-space`, `lem-complex-norm-realification-is-a-real-norm`, `def-normed-subspace`, `def-linear-basis`, `def-linear-combination-and-span`, `lem-span-is-the-set-of-linear-combinations`, `def-linear-independence`, `def-vector-space`, `lem-independent-list-is-injective`, `thm-complex-numbers-are-the-real-coordinate-plane`, `lem-complex-coordinate-l1-is-a-norm`, and `lem-vector-space-elementary-consequences`.
- Relevant nested supplier clauses opened: `lem-complex-modulus-of-real-embedding-equals-real-absolute-value`, `def-norm-and-normed-space`, `lem-complex-conjugation-and-modulus-laws`, `def-finite-sum`, `lem-finite-sum-laws`, `def-function-space`, `def-complex-numbers-and-arithmetic`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `def-abs-value`, `lem-of-abs-value`, `lem-of-square-positive`, `lem-of-zero-mult`, `thm-of-square-roots`, and `thm-complex-numbers-form-a-field`. For these transitive suppliers I inspected the clauses used by the assigned proofs rather than unrelated sections.

## Mathematical review and page verdicts

### `complex-subspace-realification` — pass

The page summary matches the assigned lemma. In `lem-complex-normed-subspace-realifies-to-real-normed-subspace`, proof steps 1.1 and 2.1 establish that `W` remains a real linear subspace after scalar restriction and that the restricted norm remains a real norm. The cited realification lemma, `lem-complex-norm-realification-is-a-real-norm` steps 1.1–3.1, preserves the underlying set, norm values, and induced metric; `def-normed-subspace` fixes the restricted metric convention.

For the finite-basis clause, step 1.2 groups a vanishing real relation into complex coefficients `a_j+ic_j`; uniqueness of complex coordinates forces both real coefficients to vanish. Step 2.2 uses the ordered basis spanning property and `lem-span-is-the-set-of-linear-combinations` to obtain real spanning. Step 3.1 handles the empty basis separately using the zero-space clause of `def-linear-basis`. I found no mathematical or citation defect in the item or page prose.

### `complex-subspace-realification-examples` — pass after repair

The page summary accurately identifies the real basis `(1,i),(i,-1)`. The norm claim is supplied by `lem-complex-coordinate-l1-is-a-norm`; the subspace and restricted norm follow from `def-complex-normed-subspace` and the assigned realification lemma. The coordinate calculation in example step 2.2 is correct:

```
lambda(1,i) = (a+ic, i(a+ic)) = (a+ic, -c+ia)
            = a(1,i) + c(i,-1).
```

Before repair, step 2.2 established that every point of `W_R` is a real linear combination of the displayed vectors but did not establish the reverse inclusion. That left the spanning conclusion incomplete. I added that `b=1b` and `ib` lie in `W`, and used the complex-subspace closure already established in step 1.1 together with the realification definition to show every real combination lies in `W_R`. This is the missing reverse inclusion; it uses no new hypothesis.

## Edits and evidence

- Edited `items/ex-complex-line-realification-basis-in-c2.md` proof step 2.2 to prove both span inclusions. The supporting premises are the definition of `W` in the example, step 1.1's complex-subspace closure, and `def-realification-of-a-complex-vector-space` Definition. I also applied the required blank-line proof layout and put punctuation before each terminal tag.
- Updated the `real-spanning` derivation claim for this item in `research/quantum-prerequisites-4-2026-10-15-batch-4.proof-contracts.json` to record both inclusions.
- The example had no `verification.judge` record to remove.
- Validation: reflow reported the item unchanged; precheck passed (`1 checked, 0 failing`); the final proof-layout command reported `1 items, 5 steps, 0 defects`.
- No item or page prose in the A-page was changed. No other-batch or published content was edited.

## Unedited defects

None. The one span omission was in the assigned in-flight example and has been repaired.

## Blockers

None.

## Coverage note

Both assigned pages and items, their direct item dependencies, both required page summaries, and the nested clauses used for real norm conversion, complex modulus on the embedded reals, the coordinate norm, and finite-sum inequalities were reviewed. I did not audit unrelated branches of the published suppliers' dependency closures or consult the external references listed in their metadata; those branches were not needed to resolve either assigned claim, and no mathematical uncertainty remained.
