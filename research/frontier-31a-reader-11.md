# Frontier-31a — reader report, batch 11

## Scope opened

- A page: `library/commutative-algebra/koszul-complexes-and-regular-sequences.md`.
  Its summary, title, frontmatter, and all 51 listed items were read:
  `def-exterior-algebra-of-a-finite-free-module`,
  `lem-exterior-algebra-basis-monomials`,
  `lem-exterior-multiplication-koszul-sign-rule`,
  `def-koszul-complex-of-a-sequence-with-coefficients`,
  `lem-koszul-differential-coordinate-formula`,
  `lem-koszul-differential-square-pairwise-cancellation`,
  `lem-koszul-differential-is-well-defined-and-squares-to-zero`,
  `cor-empty-koszul-complex-is-the-coefficient-module`,
  `lem-one-element-koszul-complex`, `cor-one-element-koszul-homology`,
  `thm-basic-koszul-homology`,
  `lem-koszul-complex-concatenation-tensor-isomorphism`,
  `lem-koszul-append-one-element-mapping-cone-identification`,
  `lem-koszul-mapping-cone-homology-exact-sequence`,
  `thm-koszul-concatenation-and-mapping-cone`,
  `lem-koszul-generator-contraction-homotopy`,
  `cor-sequence-ideal-annihilates-koszul-homology`,
  `lem-koszul-generators-act-null-homotopically`,
  `cor-koszul-homology-supported-on-sequence-vanishing-set`,
  `lem-koszul-complex-localises-termwise`,
  `cor-koszul-homology-localises`,
  `lem-koszul-complex-flat-base-change`,
  `cor-koszul-homology-flat-base-change`,
  `lem-koszul-generator-matrix-chain-map`,
  `cor-koszul-complex-invariant-under-invertible-generator-change`,
  `thm-functoriality-base-change-and-generator-change-for-koszul-complexes`,
  `def-regular-sequence-on-a-module`,
  `lem-regular-sequence-first-element-boundary`,
  `lem-regular-sequence-tail-on-quotient`,
  `cor-initial-subsequences-of-a-regular-sequence-are-regular`,
  `thm-localisation-and-flat-base-change-of-regular-sequences`,
  `lem-regular-one-element-koszul-acyclicity`,
  `lem-regular-sequence-koszul-acyclicity-induction`,
  `thm-regular-sequences-give-acyclic-koszul-complexes`,
  `cor-koszul-complex-resolves-a-regular-quotient`,
  `lem-local-koszul-h-one-detects-first-regularity-failure`,
  `lem-local-koszul-acyclicity-inductive-converse`,
  `thm-koszul-acyclicity-characterises-local-regular-sequences`,
  `cor-local-koszul-acyclicity-iff-regular-sequence`,
  `def-koszul-regular-and-h-one-regular-sequences`,
  `lem-koszul-regular-implies-h-one-regular`,
  `lem-h-one-regular-local-implies-koszul-regular`,
  `lem-regular-sequence-permutation-adjacent-swap`,
  `cor-regular-sequences-permutable-local`,
  `lem-positive-powers-of-a-regular-sequence-remain-regular`,
  `cor-regularity-notions-coincide-local-finite`,
  `thm-regularity-notions-and-permutation-invariance-local`,
  `def-minimal-free-resolution-over-a-local-ring`,
  `def-koszul-betti-numbers-over-a-local-ring`,
  `lem-koszul-resolution-minimality-maximal-ideal-sequence`, and
  `cor-complete-intersection-betti-numbers-binomial`.

- B page: `library/commutative-algebra/koszul-complexes-and-regular-sequences-examples.md`.
  Its summary, title, frontmatter, and all 12 examples were read:
  `ex-koszul-complex-one-and-two-elements`,
  `ex-koszul-complex-polynomial-variables`,
  `ex-koszul-resolution-complete-intersection`,
  `ex-koszul-homology-zero-divisor`, `ex-nonpermutable-regular-sequence`,
  `ex-koszul-homology-after-localisation`,
  `ex-empty-and-unit-koszul-boundaries`,
  `ex-koszul-d-square-sign-check-three-elements`,
  `ex-koszul-homology-of-a-zero-divisor`,
  `ex-generator-change-koszul-isomorphism`,
  `ex-regular-sequence-powers-and-permutation`, and
  `ex-koszul-resolution-betti-table-complete-intersection`.

- Direct dependency closure opened: `def-free-module-on-a-set-and-standard-basis`,
  `def-tensor-product-of-modules-by-generators-and-relations`,
  `def-chain-complex-in-an-abelian-category`,
  `def-homology-object-of-a-chain-complex`, `def-mapping-cone-of-a-chain-map`,
  `thm-the-cone-long-exact-sequence`, `def-chain-homotopy`,
  `def-support-of-a-module`, `lem-support-membership-by-annihilator`,
  `def-localisation-of-a-module`, `thm-localisation-of-modules-is-exact`,
  `def-flat-and-faithfully-flat-modules-and-ring-maps`, `def-chain-map`,
  `def-annihilator-and-torsion-of-a-module`, `def-quotient-module`,
  `cor-tensor-products-of-finite-free-modules-and-dimension`, `def-local-ring`,
  `def-noetherian-ring`, `def-noetherian-module`,
  `def-generated-cyclic-finitely-generated-and-free-modules`, and
  `thm-nakayama-lemma`.

- Source sections opened independently: [Stacks 15.29 / tag 0621](https://stacks.math.columbia.edu/tag/0621), especially Definitions 15.29.1–2 and Lemmas 15.29.3–12; and [Stacks 15.31 / tag 062D](https://stacks.math.columbia.edu/tag/062D), especially Definition 15.31.1 and Lemmas 15.31.2–7. These confirm the signed differential, cone construction, generator change, and the nonzero finite Noetherian-local regularity equivalence.

## Repairs made

1. `def-exterior-algebra-of-a-finite-free-module`: corrected the malformed TeX list separator `ldots` to `\ldots`.
2. `cor-koszul-complex-resolves-a-regular-quotient`: corrected the proof's false reference to exterior powers of `M`; it now correctly proves finite freeness termwise from `\bigwedge^pR^n\otimes_RM`.
3. `cor-local-koszul-acyclicity-iff-regular-sequence`: restored the missing explicit assumptions that `M` is finite over a Noetherian local ring, `\mathbf x\subseteq\mathfrak m`, and `M/(\mathbf x)M\ne0`. The omitted terminal condition allowed the zero-module counterexample.
4. `lem-local-koszul-acyclicity-inductive-converse`: required the sequence to be nonempty, so “the last element” and the shorter complex are defined.
5. `lem-koszul-resolution-minimality-maximal-ideal-sequence`: restored the local-ring hypothesis required by the adopted minimal-resolution definition.
6. `cor-complete-intersection-betti-numbers-binomial`: restored the local-ring hypothesis needed for its minimal-Koszul-resolution conclusion.

The matching proof contracts in `research/frontier-31a-batch-11.proof-contracts.json` were updated for the changed proof and boundary conditions. None of the repaired items had a stale `verification.judge` record.

## Remaining uneditable finding

`ex-koszul-complex-polynomial-variables` calls the Koszul complex a “minimal free resolution” over the nonlocal ring $k[x_1,\ldots,x_n]$. The current corpus defines minimal free resolutions only over local rings, and neither a graded-minimal convention nor a supporting inference is present. This is B-page prose and is therefore reported in the structured findings artifact rather than edited here.

## Verdicts and checks

| Page | Verdict |
| --- | --- |
| `koszul-complexes-and-regular-sequences` (A) | Pass after the six repairs above. |
| `koszul-complexes-and-regular-sequences-examples` (B) | Blocked on the reported uneditable minimality-convention defect. |

Focused validation passed after the repairs:

- `reflow` on all six changed items;
- `precheck` on the five changed proof-bearing items;
- strict proof-contract validation on those five contracts;
- `manifest-deps` (63 items, 0 errors);
- `content-policy` (63 scoped items, 0 errors, 0 warnings); and
- `rendercheck` on all 63 assigned items plus both pages (65 files, clean).

No external blocker prevented the reading or repairs. The one remaining blocker is the B-item defect outside this reader's edit authority.
