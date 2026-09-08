# Step-6a independent reader report — batch 2

## Scope opened

- A page: `library/abstract-algebra/finite-averaging-and-character-theory-prerequisites.md`.
- B page: `library/abstract-algebra/finite-averaging-and-character-theory-prerequisites-examples.md`.
- A-page items: `lem-characteristic-divisibility-and-invertibility-of-a-natural-scalar-in-a-field`, `lem-finite-dimensional-subspace-admits-a-linear-projection-without-choice`, `lem-trace-of-an-idempotent-is-the-dimension-of-its-image`, `lem-indicator-basis-for-invariant-functions-on-a-finite-orbit-partition`, `lem-standard-hermitian-form-on-functions-on-a-nonempty-finite-set-is-an-inner-product`, `lem-equality-case-for-a-finite-sum-of-unit-complex-numbers`, `lem-conjugates-of-an-average-of-roots-of-unity-are-averages-of-roots-of-unity`, `lem-kernel-of-a-direct-sum-of-representations-is-the-intersection`, and `lem-a-group-is-abelian-iff-every-conjugacy-class-is-a-singleton`.
- B-page items: `ex-coordinate-projection-onto-a-subspace-of-c-three`, `ex-conjugacy-class-indicator-basis-for-s-three`, `ex-standard-hermitian-inner-product-on-functions-on-a-three-point-set`, and `cex-unit-complex-sum-strict-with-distinct-summands`.
- Direct dependency interfaces opened: `def-field`, `lem-characteristic-and-additive-order`, `def-linear-map`, `thm-dimension-of-a-linear-subspace`, `def-trace-of-an-endomorphism`, `cor-idempotent-endomorphisms-are-diagonalisable-projections`, `def-group-action`, `thm-orbits-partition-the-set`, `def-vector-space`, `def-finite-sum-in-a-commutative-monoid`, `def-linear-basis`, `def-conjugacy-class-and-centralizer`, `def-inner-product-space`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `def-sum-over-a-finite-index-set`, `lem-finite-sum-laws`, `lem-complex-conjugation-and-modulus-laws`, `thm-induction-principle`, `lem-finite-sum-reindexing-and-fubini`, `lem-of-square-monotone`, `def-roots-of-unity-in-a-field`, `thm-isomorphisms-extend-to-splitting-fields`, `def-conjugate-elements-over-a-field`, `def-cyclotomic-extension`, `cor-every-complex-polynomial-splits-into-linear-factors`, `thm-finitely-generated-algebraic-extensions-are-finite`, `thm-finite-field-extensions-are-algebraic`, `prop-algebraic-splitting-extensions-are-normal`, `lem-an-isomorphism-extends-across-a-simple-root-adjunction`, `def-normal-algebraic-extension`, `def-finite-dimensional-representation-of-a-group-over-a-field`, `def-kernel-and-image-of-group-homomorphism`, and `def-direct-sum-of-a-family-of-modules`.

I also opened the cited passages in Etingof et al., *Introduction to Representation Theory*, §§4.1–4.5 and Lemma 5.4.5 (printed pp. 61–68, 100–101); Axler, *Linear Algebra Done Right*, 2.33, 6.2–6.3, and 8.50–8.51 (printed pp. 42, 184, 327); Milne, *Fields and Galois Theory*, the characteristic discussion and Proposition 2.12/Corollary 2.13 (printed pp. 9, 29–30); and Judson, Example 14.2.1. Their citations accurately describe the limited motivation/support claimed; the current local proofs carry the asserted generality.

## Mathematical reading

- The scalar-characteristic equivalence retains the $n>0$ and characteristic-zero cases.
- The projection, orbit-indicator, Hermitian-form, unit-sum, direct-sum-kernel, and conjugacy-class arguments preserve their stated empty, singleton, positive-characteristic, and direction-of-implication cases.
- In the cyclotomic argument, normality first puts every $\mathbb Q$-conjugate of the average in the selected splitting field; the splitting-field extension is then applied to the actual isomorphism $\mathbb Q(a)\to\mathbb Q(b)$. This correctly avoids the invalid converse inference from an arbitrary embedding.
- The three examples and counterexample compute the stated maps, class partition, pairings, and witness correctly, including characteristic two in the class-function example.

## Repair made

`lem-trace-of-an-idempotent-is-the-dimension-of-its-image` used an adapted basis of $\operatorname{im}P\oplus\ker P$ without declaring the finite-dimensional subspace basis supplier. I repaired this in the in-flight item:

- Added `thm-dimension-of-a-linear-subspace` to its dependencies and an explicit F3 at [items/lem-trace-of-an-idempotent-is-the-dimension-of-its-image.md](../items/lem-trace-of-an-idempotent-is-the-dimension-of-its-image.md:8).
- Rewrote step 1.1 to obtain bases of image and kernel from F3 before concatenating them at [items/lem-trace-of-an-idempotent-is-the-dimension-of-its-image.md](../items/lem-trace-of-an-idempotent-is-the-dimension-of-its-image.md:44).
- Updated the F3 citation, derivation, and dependency inputs in `research/phase-2-wave-1-batch-2.proof-contracts.json`. There was no `verification.judge` record to remove.

## Verdicts

| Page | Verdict |
| --- | --- |
| `finite-averaging-and-character-theory-prerequisites` (A) | Pass after the repaired trace-basis dependency declaration. |
| `finite-averaging-and-character-theory-prerequisites-examples` (B) | Pass; no edit made to B-page prose. |

No uneditable defect remains in the assigned pages, items, or inspected published dependency interfaces.

## Validation and blockers

- Reflow on the changed item: unchanged.
- Changed-item precheck: pass.
- Full batch precheck: 13 checked, 0 failing.
- `author-check.mts phase-2-wave-1 2`: precheck, rendercheck, content policy, and strict proof-contract checks all pass.
- Repository-wide `node tools/depcheck.mjs --quiet` fails on existing unrelated worktree errors (including unresolved foundations-page items and unrelated YAML escapes); it reports no batch-2-specific error. This is a global baseline blocker only, not a remaining batch-2 mathematical finding.

Next action: hand this report and the empty findings artifact to the Step-6 collector.
