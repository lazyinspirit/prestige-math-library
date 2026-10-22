# Step 3a reader report — batch 61

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `61`

## Opened inventory

Pages opened:

- `library/quantum-field-theory-mathematics/qftx-renormalization-hopf.md` (assigned A page).
- `library/quantum-field-theory-mathematics/qftx-renormalization-hopf-examples.md` (assigned B page).
- `library/quantum-field-theory-mathematics/qftx-causal-renormalization.md` (required-page context).

Assigned items opened in dependency order:

1. `items/def-qftx-rooted-forest-hopf.md`.
2. `items/def-qftx-laurent-subtraction-target.md`.
3. `items/lem-qftx-laurent-negative-projection-rota-baxter.md`.
4. `items/thm-qftx-cut-hopf-antipode.md`.
5. `items/thm-qftx-subtraction-character-factorization.md`.
6. `items/ex-qftx-nested-two-loop-subtraction.md`.

The item dependency chains, page inventories, assigned batch manifest, proof contracts, cross-batch dependency record, and coverage record were consulted. For the contextual reference to the causal-renormalization page, I also opened `def-qftx-local-time-ordered-system` and `thm-qftx-scalar-eg-induction`; I did not audit their full dependency closures because they are outside batch 61 and are not item-level prerequisites of the assigned proofs.

## Mathematics and source review

- `def-qftx-rooted-forest-hopf`: the finite rooted-tree and forest objects, admissible cuts, root component, child-side forest, multiplicities, counit, and separate virtual full-cut term are explicit. The coproduct convention agrees with Connes–Kreimer, §2.2, equations (65)–(71), and Manchon, §II.9.3, pp. 42–44. The definition correctly limits itself to the specified rooted-tree model.
- `def-qftx-laurent-subtraction-target`: the formal coefficient algebra, Laurent series, strict negative and nonnegative summands, and projection are specified. Manchon, §II.5, p. 35, gives the same splitting.
- `lem-qftx-laurent-negative-projection-rota-baxter`: the component expansion reduces the Rota–Baxter expression to (x_-y_- - x_+y_+); applying the negative projection yields the stated identity. The hypotheses and edge case at power zero are correct. This matches the decomposition argument in Manchon, §II.5, Theorem II.5.1 proof, pp. 36–37.
- `thm-qftx-cut-hopf-antipode`: the proof checks well-definedness, grading, counit, coassociativity by a multiplicity-preserving two-level cut correspondence, connectedness, the finite convolution inverse, the tree recursion, and multiplicativity of the antipode. I found no missing hypothesis or unjustified inference. The cited cut and antipode conventions agree with Connes–Kreimer, §2.2, and Manchon, §II.9.3; the local proof supplies the needed argument.
- `thm-qftx-subtraction-character-factorization`: the degree recursion is well-founded; the induction establishes that φ₋ is a character using the Laurent projection identity; the convolution factor φ₊ is a character with values in (A_+); and the antipode gives the stated inverse and factorization. Manchon, §II.5, Theorem II.5.1 and its proof, pp. 35–37, states the recursive factors and character-preservation result under a commutative target. The local proof is complete for the stated commutative ℚ-algebra coefficient ring.
- `ex-qftx-nested-two-loop-subtraction`: the one-edge cut gives the reduced coproduct τ⊗τ, and direct substitution yields φ₋(τ) and φ₋(t) with the displayed coefficients. The chosen (a=1,b=0) case witnesses a nonzero correction. The TikZ diagram has the root above its child, points the edge away from the root, and marks the selected admissible cut; it agrees with the prose. The example remains an abstract Laurent-character calculation, consistent with the preceding theorem’s explicit graph-to-forest limitation. Connes–Kreimer, §2, “A Toy Model,” pp. 10–13, and §2.2, equations (51)–(53), pp. 18–19, support the combinatorial context; the local calculation does not claim to reproduce a physical integral.

Sources reviewed:

- Dominique Manchon, *Hopf algebras, from basics to applications to renormalization*, arXiv:math/0408405v2, complete relevant passages in §§II.3, II.5 and II.9.3: <https://arxiv.org/pdf/math/0408405>.
- Alain Connes and Dirk Kreimer, *Hopf Algebras, Renormalization and Noncommutative Geometry*, arXiv:hep-th/9808042, relevant rooted-tree and toy-model passages: <https://arxiv.org/pdf/hep-th/9808042>.

## Edits and unresolved defects

In `items/ex-qftx-nested-two-loop-subtraction.md`, I removed the direct `deps` edge and matching `dependency_roles` entry for `lem-qftx-laurent-negative-projection-rota-baxter`. The example cites the subtraction-factorization theorem for the recursion it uses; that theorem already depends on the Rota–Baxter lemma, so the example's separate edge was redundant. The argument, statement and proof contract were unchanged; no `verification.judge` record was present. The batch manifest remains an unchanged assignment snapshot. The required proof-layout check passed: 1 item, 3 steps, 0 defects.

No other confirmed or suspected mathematical, citation, computation, or diagram defect remains unedited in the assigned items or pages.

## Page verdicts

- `qftx-renormalization-hopf` (A): content/inventory pass. It lists the five assigned items and the existing causal-renormalization page prerequisite. Its frontmatter-only form matches the current page policy.
- `qftx-renormalization-hopf-examples` (B): content/inventory pass. It lists the assigned example and requires its A-page companion. Its frontmatter-only form matches the current page policy.
- `qftx-causal-renormalization` (required-page context): identity and inventory opened; no page-level content defect is reported from this limited context review. Its full page content and dependency closure were not adjudicated in this batch.

## Blocker

`research/physics-non-fluid-129-2026-10-21-r2-batch-61.cross-batch-dependencies.json` still records the A-page edge to `qftx-causal-renormalization` as `open`, with evidence that `def-qftx-local-time-ordered-system` is stale and that the current Step-1 record for `lem-qftx-balanced-local-functional-representatives` is missing. The current Step-1 records are present on disk, and the former lists the latter as a dependency. This suggests the cross-batch evidence is stale, but I did not authenticate those records against current carrier hashes or modify the owner-controlled edge record. The edge therefore still needs its native owner re-evaluation before it can be treated as closed.

## Coverage note

All six assigned items, both assigned pages, their item-level dependency chain, the relevant cited source passages, and the cut diagram were reviewed. The required causal-renormalization page was checked only as prerequisite/context; its full dependency closure was not reviewed. The page-level readiness edge remains open as recorded above.
