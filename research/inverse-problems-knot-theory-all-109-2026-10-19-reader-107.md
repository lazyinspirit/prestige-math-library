# Step 3a reader report — batch 107

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: `reader-107`

## Opened inventory

### Assigned pages

- `library/knot-theory/bridge-presentations-and-unknotting-number.md` (A page)
- `library/knot-theory/bridge-presentations-and-unknotting-number-examples.md` (B page)

### Assigned items, read supplier-first

1. `alg-descending-diagram-unknotting-sequence`
2. `lem-knot-admits-morse-height-representative`
3. `lem-one-extremum-arc-is-boundary-parallel`
4. `lem-rank-one-hermitian-signature-perturbation`
5. `lem-regular-projection-admits-finite-planar-code`
6. `lem-seifert-matrices-differ-rank-one-under-crossing-change`
7. `thm-descending-diagram-is-unknot`
8. `thm-descending-diagram-unknotting-sequence-procedure-properties`
9. `thm-every-knot-has-unknotting-sequence`
10. `def-knot-bridge-position-and-unknotting-number`
11. `cex-diagram-crossing-count-is-not-unknotting-number`
12. `lem-bridge-sphere-normalization`
13. `thm-bridge-one-is-unknot`
14. `thm-descending-diagram-is-unknot-and-finite-bounds`
15. `thm-unknotting-number-at-least-half-levine-tristram-signature`
16. `ex-trefoil-bridge-and-unknotting-numbers`
17. `thm-bridge-one-is-unknot-and-signature-crossing-change-bound`
18. `thm-schubert-bridge-connected-sum`

### Direct item dependencies opened

`alg-knot-wirtinger-presentation-from-code`, `alg-seifert-surface-from-diagram`, `def-axiom-of-choice`, `def-based-loops-and-fundamental-group`, `def-countable-choice`, `def-diffeomorphism-and-local-diffeomorphism-of-manifolds`, `def-euclidean-spheres-and-closed-balls`, `def-group-isomorphism-and-automorphism`, `def-group-presentation`, `def-induced-homomorphism-on-fundamental-groups`, `def-knot-connected-sum-and-prime-knot`, `def-knot-planar-code`, `def-knot-seifert-pairing-and-matrix`, `def-levine-tristram-hermitian-form-and-signature`, `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-oriented-reidemeister-moves`, `def-regular-oriented-link-diagram`, `lem-boundary-compressible-annulus-is-boundary-parallel`, `lem-choice-free-smooth-parametrized-ball-windows-and-disk-absorption`, `lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy`, `lem-every-oriented-link-admits-a-regular-projection`, `lem-knot-connected-sum-well-defined`, `lem-knot-decomposing-sphere-realizes-connected-sum`, `lem-knot-exterior-h1-is-generated-by-meridian`, `lem-knot-exterior-is-irreducible`, `lem-knot-genus-zero-iff-unknot`, `lem-levine-tristram-hermitian-form-singular-set`, `lem-seifert-bands-embedded-orientable-boundary-correct`, `lem-seifert-matrix-skew-part-is-surface-intersection`, `lem-seifert-stabilization-preserves-levine-tristram-signature`, `lem-wirtinger-local-meridian-conjugacy`, `thm-choice-implies-dependent-implies-countable-choice`, `thm-extreme-value-metric`, `thm-fundamental-group-laws`, `thm-generic-height-functions-on-an-embedded-compact-manifold-are-morse`, `thm-heine-borel-rn`, `thm-induced-fundamental-group-map-functoriality`, `thm-isotopy-extension`, `thm-knot-wirtinger-presentation-correctness`, `thm-oriented-knot-connected-sum-is-a-commutative-monoid`, `thm-seifert-surface-from-diagram-procedure-properties`, and `thm-smooth-schoenflies-for-embedded-two-sphere-in-s-three`.

Additional transitive supplier context opened for the signature interface: `lem-seifert-matrices-of-a-knot-are-s-equivalent`, `lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries`, and `lem-levine-tristram-one-sided-averages-exist`.

The current batch proof-contract file and the batch manifest were inspected as evidence. Their statuses and owner decisions were not treated as mathematical verdicts.

## Review findings

### `thm-schubert-bridge-connected-sum` — lower-bound proof is invalid at the parity count

Location: Proof 4.1–5.1, especially the assertion that each `r_i` is odd and the definition `n_i=(r_i+1)/2`.

The proof uses `lem-bridge-sphere-normalization`'s final Proof 8.1 configuration, which places one puncture in each of the upper and lower bridge balls. In each bridge ball, the bridge arc carrying that puncture crosses the decomposing disk once, so its endpoints lie on opposite sides of `C`. For either disk `S_i`, the upper and lower crossing arcs therefore contribute two endpoints in total. Every other bridge arc lies on one side and contributes endpoints in pairs. Thus `r_i=|L∩S_i|` is even, contrary to Proof 4.1's claim that it is odd. Proof 5.1 then asserts that each factor bridge sphere has `r_i+1` intersections and sets `n_i=(r_i+1)/2`; with the proved parity this is not an integer, and it cannot count bridge arcs. The lower-bound inequality needed for the equality is not established.

The cited source, Negami and Okita, “The Splittability and Triviality of 3-Bridge Links,” Lemma 3-3 and its `m=2` conclusion (printed pp. 259–262), contains the relevant normal-form argument. The current proof needs a normal form that actually gives the parity required by its factor count, together with a matching bridge-sphere construction, or another complete lower-bound proof. This is an assigned in-flight item, but the correction is not a local wording repair; the theorem statement is retained for the owner.

No other confirmed mathematical, statement, contract, witness, computation, or diagram defect was found in the assigned items or page metadata. The TikZ schematics in the assigned kink counterexample, trefoil example, bridge-one theorem, and Schubert theorem were checked against their text. The external connected-sum, Seifert-intersection, and Wirtinger-crossing schematics opened as suppliers were also checked; no diagram defect was found.

## Edits and validation

No item or page was edited. No proof contract or `verification.judge` record was changed. Since no item was changed, reflow, precheck, and `node tools/proof-layout.mjs` were not run.

## Page verdicts

- **A page `bridge-presentations-and-unknotting-number`:** draft page metadata is complete, `page_layout: compact-v1` is preserved, the body is empty, and its 16-item inventory matches the batch. The page inventory is sound; its Schubert theorem item retains the proof defect above.
- **B page `bridge-presentations-and-unknotting-number-examples`:** draft page metadata is complete, `page_layout: compact-v1` is preserved, the body is empty, and the two example IDs are present in its `examples` inventory. The counterexample and trefoil example descriptions and diagrams are sound on this review.

## Blockers and coverage limits

- **Batch blocker:** the Schubert additivity lower bound still needs a corrected normalization/count argument. The proposed theorem remains present for the owner.
- The live run status at handoff still shows `3a-split` blocked because `split-89` failed three times; that blocker is outside batch 107.
- Review covered the 18 assigned items, both assigned pages, all 42 direct item dependencies, and the three additional signature suppliers listed above. It did not independently audit the complete recursive prerequisite closure of every supplier or every bibliography entry. The relevant full-text passage of Negami–Okita Lemma 3-3 was read. Large Lickorish and Jaco PDFs could not be fetched by the browser due their file sizes; no verdict here relies on those fetch attempts.
