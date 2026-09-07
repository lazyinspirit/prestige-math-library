# frontier-33 — Alpha group `e` — Step 3 scaffold recheck

Group `e` rechecked batches `9` and `10` on the current frozen manifest,
coverage, fix-pass, and plan bytes. The owner-authorized adjacent-block order
repair closes both prior batch-9 prerequisite findings. Both pairs are
sufficient.

| Finding | Disposition | Current evidence |
|---|---|---|
| `alpha-e-step3:batch-9:def-projective-morphism-classical-source-link` | closed | `def-projective-morphism-classical` now cites `Vakil Class 38 §3, proof of Theorem 3.1` at `https://math.stanford.edu/~vakil/0708-216/216class38.pdf`. Its statement and two dependencies are unchanged. The paired dimension definition now points to the Milne PDF, so the former transposition is absent. |
| `frontier-33-scaffold-closure:dimension-constructible-images-and-dimensions-of-fibres:lem-dimension-finite-union-components-source-reference` | closed | The manifest cites Milne §2m 2.49 p.54; the current included coverage row is `Remark 2.49: maximum over irreducible components` and records the finite-closed-cover chain argument. The current statement, sole dependency, and proof route agree with that support. |
| `alpha-e-step3:batch-10:lem-base-change-open-closed-immersions` | closed | The manifest and canonical coverage row agree that arbitrary base change preserves open and closed immersions and immersions (equivalently locally closed immersions), while the closed ideal is the image of the pulled-back ideal. The unchanged four-dependency route explicitly avoids treating tensor extension as injective; coverage maps Stacks Lemmas 26.17.6 and 26.18.2 to the item. |
| Current plan closure for `dimension-constructible-images-and-dimensions-of-fibres` | closed | The frozen plan places `schemes-subschemes-and-morphisms-locally-of-finite-type` at 366.055 and its examples page at 366.056, both before this A page at 366.057; the A page requires that examples page. Its other direct prerequisite, `zariski-topology-on-prime-spectra`, is at 256.001. Thus the declared closure contains the exact suppliers `def-classical-algebraic-prevariety-regular-maps-and-varieties`, `def-noetherian-topological-space`, and `def-irreducible-topological-space-and-subset` used by the two batch-9 records. |

## Scope decisions

All 60 current pending decline rows were rechecked against their exact frozen
coverage row and plan context and recorded as `stands`: 25 rows for batch 9
(10 deferred, 15 out-of-scope) and 35 for batch 10 (19 deferred, 16
out-of-scope). Each row's evidence names its retained plan destination when
deferred, or the absence of a destination and the selected-scope rationale when
out-of-scope. No owner decision is required.

## Pair verdicts

- `dimension-constructible-images-and-dimensions-of-fibres`: **sufficient**.
  Its two formerly missing supplier pages are backward and in its declared
  prerequisite closure.
- `fibre-products-base-change-and-scheme-theoretic-fibres`: **sufficient**.

## Checks on the current bytes

- `validate-plan research/plan-spec.json --repo . --max-items 60`: passed;
  the declared page order is acyclic and consistent, with no item-level cycle,
  forward-reference, B-page-dependency, or unresolved-id error.
- `manifest-deps research/frontier-33-batch-9.pages.json`: 56 items, 0
  normalizations, 0 errors.
- `content-policy --manifest-only research/frontier-33-batch-9.pages.json`:
  56 scoped items, 0 errors, 0 warnings.
- `splice-plan --run frontier-33 --batch 9 --dry-run`: 0 pages spliced, 0
  reused, 2 already correct, 0 new items, 0 reused items.
- `scope-decisions check --run frontier-33 --group e`: 60 current declines,
  0 errors.
- Aggregate `scaffold-verdicts --run frontier-33 --require-sufficient`: 24/24
  A pages reviewed, 0 insufficient, 0 unreviewed.

This recheck changed only group-`e` scope decisions, this report, and the
group-`e` verdict record. It made no content, plan, page, reading-order, or
other-group change.
