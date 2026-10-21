# Step 3a reader report — batch 85

Run: `inverse-problems-knot-theory-all-109-2026-10-19`

Role: reader

Verdict: reviewed; three assigned items repaired; no unedited defect identified.

## Opened assigned inventory

Pages:

- `library/knot-theory/root-of-unity-skein-tqft-for-three-manifolds.md` (A page): YAML frontmatter only; `page_layout: compact-v1`; draft status and item inventory agree with the current batch manifest.
- `library/knot-theory/root-of-unity-skein-tqft-for-three-manifolds-examples.md` (B page): YAML frontmatter only; `page_layout: compact-v1`; draft status and companion inventory agree with the current batch manifest.

Assigned items, read in supplier-before-consumer order:

1. `def-sl-two-root-of-unity-skein-parameter`
2. `lem-jones-wenzl-idempotents-exist-below-root-order`
3. `def-semisimplified-temperley-lieb-fusion-category`
4. `lem-root-jones-wenzl-recursion-and-negligible-ideal`
5. `lem-root-fusion-rules-and-simple-object-completeness`
6. `def-extended-skein-cobordism-anomaly-data`
7. `lem-root-skein-surgery-kirby-color-invariance`
8. `def-skein-tqft-state-space-and-handlebody-pairing`
9. `lem-root-handlebody-spine-state-space-finite-generation`
10. `lem-root-handlebody-pairing-nondegeneracy-and-gluing`
11. `thm-root-of-unity-skein-tqft-gluing-and-surgery-invariance`
12. `cex-knot-kt-32-boundary-case`
13. `ex-knot-kt-32-worked-cases`

The manifest/page order used for the A page is the current `3152`; an older author note said `3166`, but current manifest and page metadata agree. Both page bodies are empty as required. Statement and remark sections have no embedded hyperlinks; references remain in their following references sections. No diagrams occur in the assigned items or pages.

## Dependencies and evidence reviewed

I reviewed the relevant direct and indirect dependency statements needed to check the assigned claims, including:

- `def-axiom-of-choice`, `def-kauffman-bracket-skein-module-of-a-three-manifold`, `def-modular-ribbon-category-and-hopf-link-data`, `def-temperley-lieb-diagram-category`, `def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators`, `def-temperley-lieb-negligible-morphisms`, and `def-weighted-lagrangian-ribbon-bordism`;
- `lem-temperley-lieb-closure-trace-component-identities`, `lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness`, `lem-temperley-lieb-negligible-morphisms-form-tensor-ideal`, `thm-temperley-lieb-diagram-category-laws`, `thm-temperley-lieb-rank-one-pivotal-ribbon-conversion`, `thm-temperley-lieb-rank-one-tilting-quotient-fusion-category`, `thm-temperley-lieb-root-negligible-quotient-is-semisimple`, and `thm-su2-root-unity-ribbon-category-is-modular`;
- `thm-kirby-moves-classify-framed-link-presentations` and its relevant surgery-presentation, move, and relative-bordism suppliers: `def-integral-framed-link-surgery-diagram`, `def-kirby-moves-on-integral-framed-links`, `lem-kirby-moves-preserve-surgery-manifold`, `lem-relative-three-bordism-surgery-presentation`, and `lem-zero-meridian-pairs-are-generated-by-kirby-moves-in-s-three`;
- `thm-skein-module-of-solid-torus-has-core-multicurve-basis`.

I also checked the relevant primary-source passages:

- Blanchet, Habegger, Masbaum, and Vogel, [*Topological Quantum Field Theories Derived from the Kauffman Bracket*](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bhmv.pdf): §1.C and pp. 887–891 for the relative skein module, specialized skein relations, and Proposition 1.9's surjection/radical-kernel statement; §2, pp. 897–898 for the normalization and surgery scalars; §§4.5–4.8, pp. 905–909, including Theorem 4.11, for colored boundary cables and the relative spine basis; p. 913 for the Kirby-color expansion and trace data.
- Gilmer and Masbaum, [*Maslov Index, Lagrangians, Mapping Class Groups and TQFT*](https://arxiv.org/pdf/0912.4706): §2, pp. 4–6, and §11, pp. 23–25, for the weight conventions and comparison of the one-weight multiplier with the BHMV normalization. Their §11 Lemma 11.1 states the weighted surgery axiom but refers its proof to the BHMV argument; I treated that as an imported source result and did not claim a local reconstruction of the universal-construction proof.

The dependency closure inventory contained 137 nodes. I read the assigned items and the relevant supporting dependency statements above, rather than every unrelated base definition in that aggregate closure. No claim of exhaustive review of all 137 nodes is made.

## Repairs and validation

1. `items/def-skein-tqft-state-space-and-handlebody-pairing.md` — Replaced the closed-link-only model for arbitrary marked surfaces with the relative Jones–Kauffman skein module carrying the prescribed boundary bands, then defined colored boundary data by parallel cables and Jones–Wenzl projectors. Made the complementary pairing explicitly BHMV sesquilinear and retained its coefficient involution and normalization. This fixes the mismatch between nonempty marked boundary labels and the old `K_A(H)` closed-link model. Evidence: BHMV §1.C, pp. 889–891, Proposition 1.9 p. 891, §§4.5–4.8, and Theorem 4.11 p. 909. The definition now states the local relative skein relations and identifies the empty-boundary specialization.
2. `items/lem-root-handlebody-spine-state-space-finite-generation.md` — Recast the spanning claim for a marked relative spine: boundary half-edges realize the prescribed colors, interior vertices have degree two or three, degree-two labels match, and the empty graph is allowed for the unmarked 3-ball. This makes the statement and finite-count proof match the relative colored module and the source basis theorem. Evidence: BHMV Proposition 1.9 p. 891 and Theorem 4.11 p. 909, together with the root fusion rule already proved by the assigned supplier.
3. `items/lem-root-handlebody-pairing-nondegeneracy-and-gluing.md` — Specified the BHMV sesquilinear pairing on the two relative modules and the coefficient-conjugate opposite-orientation quotient. Rewrote the inverse-pairing step as a bilinear pairing on that conjugate space before forming its coevaluation tensor. This supplies the linear-algebra justification needed for the sewing contraction.

Updated `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-85.proof-contracts.json` to refresh affected definition/statement quotes and derivation claims. No stale `verification.judge` record was present on the edited items; existing hash-bound review records were preserved.

Validation after the final item edits:

- Reflow and precheck were run on all three edited items. The definition precheck reported 0 applicable checks and 0 failures; both lemma prechecks passed direct validation with 0 failures.
- Strict proof-contract validation for the three edited items passed with 0 errors and 0 warnings.
- `node tools/proof-layout.mjs` on all three changed item paths reported `3 items, 5 steps, 0 defects`.

## Remaining defects and page verdicts

- Unedited defects: none identified.
- A page, `root-of-unity-skein-tqft-for-three-manifolds`: pass. Its metadata and assigned inventory are consistent; its body is empty.
- B page, `root-of-unity-skein-tqft-for-three-manifolds-examples`: pass. Its metadata and companion inventory are consistent; its body is empty.
- Blocker: no mathematical or content blocker for batch 85. At the final status refresh, the autopilot still listed batch 85 as missing in `3a-read` although the requested report and findings files were present; no workflow transition or stamp was made. The run also reports an unrelated `3a-collect` blocker: `collect-71` failed three times. These are recorded as status facts, not adjudications of other batches.
