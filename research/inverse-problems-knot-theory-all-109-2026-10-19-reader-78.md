# Step 3a reader report — batch 78

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader (`reader-78`)

## Current run state

The recomputed autopilot status at 2026-10-21 09:06 UTC reports the run as active, 69/109 reader batches covered, and nothing in flight. It reports a separate `3a-collect` blocker for batch 49; that blocker is outside this assignment. There is no batch-78 blocker.

## Opened inventory

Pages read:

- `library/knot-theory/freedman-theorem-and-topological-sliceness.md` (A)
- `library/knot-theory/freedman-theorem-and-topological-sliceness-examples.md` (B)

Assigned items read in supplier order:

- A: `def-disk-like-capped-grope-height-one-and-one-half`; `def-freedman-good-group-and-disk-embedding-data`; `def-good-fundamental-group-for-disk-embedding`; `lem-freedman-casson-handle-skyscraper-and-surgery-modules`; `thm-freedman-disk-embedding-theorem-proof-modules`; `thm-infinite-cyclic-group-is-good-for-disk-embedding`; `thm-freedman-disk-embedding-for-good-groups`; `lem-seifert-matrix-of-reverse-mirror-is-negative-original`; `def-seifert-form-s-equivalence`; `lem-alexander-one-seifert-form-is-s-equivalent-to-empty`; `lem-alexander-one-knot-has-trivial-alexander-basis`; `lem-alexander-one-knot-produces-a-good-group-disk-obstruction`; `thm-alexander-polynomial-one-implies-topologically-slice`.
- B: `cex-knot-kt-25-boundary-case`; `ex-knot-kt-25-worked-cases`.

Direct declared suppliers opened for the assigned items: `def-locally-flat-proper-surface-and-concordance-collars`; `def-countable-choice`; `thm-whitney-approximation-for-manifold-valued-maps`; `thm-parametric-transversality`; `lem-finite-framed-locally-flat-links-in-smooth-three-manifolds-have-smooth-image-models`; `thm-collar-neighborhood-theorem`; `thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold`; `def-reverse-mirror-of-oriented-knot`; `def-knot-seifert-pairing-and-matrix`; `def-axiom-of-choice`; `thm-seifert-determinant-is-the-knot-alexander-polynomial`; `thm-choice-implies-dependent-implies-countable-choice`; `lem-seifert-matrix-skew-part-is-surface-intersection`; `def-oriented-seifert-surface`; `thm-every-oriented-knot-bounds-a-seifert-surface`; `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`; `lem-seifert-pairing-well-defined`; `lem-general-knot-reverse-mirror-sum-is-ribbon`; `lem-positive-hopf-plumbing-has-trefoil-seifert-matrix`; `def-knot-connected-sum-and-prime-knot`; `def-satellite-pattern-companion-and-winding-number`.

Additional suppliers opened where needed: `def-oriented-link-in-s-three-and-ambient-isotopy`; `lem-knot-connected-sum-well-defined`; `lem-canonical-positive-three-crossing-braid-has-negative-trefoil-form`; `def-knot-exterior`; `def-knot-meridian-and-preferred-longitude`; `thm-linking-number-equals-signed-intersection`; `thm-seifert-matrix-presents-knot-alexander-module`; `lem-square-seifert-presentation-and-alexander-normalization`; `lem-knot-infinite-cyclic-cover-cut-and-paste-presentation`.

The finite-framed-link supplier is one of the exact root-accepted local lemmas in `SCHEMA.md`. Its current body digest matched its root-supplied acceptance digest, and its independent-review file exists; I used that bounded exception and did not independently reread its full proof body.

## Source checks

- Freedman–Quinn, *Topology of 4-Manifolds*, §4.7, Proposition 4.7.1 (printed pp. 78–80), states the relative ball approximation used at item step 1.25: null point-inverses, nowhere-dense nontrivial-fiber image, closed protected set containing the boundary, and a homeomorphism over that set. The item's prior `FQ4.6` locator was incorrect; §4.6 is the approximation of the other map, Proposition 4.6.1.
- Powell, Ray, and Teichner, “The 4-dimensional disc embedding theorem and dual spheres,” Theorem A and the proof in §5, state and prove the good-group disk-embedding result with geometrically dual output spheres and their homotopy classes. The paper also identifies the missing geometric-dual-sphere step in the older Freedman–Quinn proof. [Article](https://link.springer.com/article/10.1007/s00029-025-01069-y).
- Garoufalidis and Teichner, “On Knots with Trivial Alexander Polynomial,” Lemma A.1 and Appendix A (printed pp. 12–13), give the triangular dual-sphere correction and the Alexander-one disk-embedding application. [Article](https://people.math.gatech.edu/~stavros/publications/teichner1.pdf).

## Repairs and validation

- In `lem-freedman-casson-handle-skyscraper-and-surgery-modules`, corrected the two §4.6 references to the actual §4.7 Proposition 4.7.1 locator and specified printed pp. 78–80 in the source locator. This is a citation correction; no mathematical assertion or proof argument changed.
- Corrected final-step proof-tag order in `thm-infinite-cyclic-group-is-good-for-disk-embedding`, `lem-alexander-one-seifert-form-is-s-equivalent-to-empty`, `lem-alexander-one-knot-has-trivial-alexander-basis`, `lem-alexander-one-knot-produces-a-good-group-disk-obstruction`, and `ex-knot-kt-25-worked-cases`.
- Reflow and precheck passed for all six changed items. The combined `node tools/proof-layout.mjs` command covered all six changed paths: 196 steps checked, zero layout defects. No stale `verification.judge` record was present in the edited items; the mathematical proof contracts were not changed.

## Uneditable findings

- Published dependency `def-oriented-link-in-s-three-and-ambient-isotopy`: its Definition embeds wikilinks in the defining prose, including `[[def-smooth-manifold]]`, `[[def-euclidean-spheres-and-closed-balls]]`, `[[def-smooth-embedding]]`, `[[def-oriented-smooth-manifold-and-oriented-chart]]`, and `[[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]`. These links must follow the complete Definition in an immediately following `Definition references` section. Assigned consumer: `lem-seifert-matrix-of-reverse-mirror-is-negative-original`.
- Published dependency `thm-parametric-transversality`: its Statement includes `([[def-countable-choice]])` in the hypothesis sentence. Move that link after the complete Statement into `Statement references`. Assigned consumer: `lem-freedman-casson-handle-skyscraper-and-surgery-modules`.

## Page verdicts

- A page `freedman-theorem-and-topological-sliceness`: pass. It is YAML frontmatter only, has `page_layout: compact-v1`, and its item inventory matches the 13 A items in the batch manifest.
- B page `freedman-theorem-and-topological-sliceness-examples`: pass on current bytes. It is YAML frontmatter only, has `page_layout: compact-v1`, and its two-example inventory and `requires` edge match the manifest. At the initial read the layout flag was absent; a current-disk recheck before handoff found it present, so no page finding remains.

## Coverage limitation

I read every assigned item and both assigned pages, plus the direct suppliers and additional context listed above. The recursively declared dependency graph expands to 1,170 item IDs; I did not audit that entire transitive foundational closure or every bibliography entry. The source checks above cover the technical uncertainties I resolved; they do not certify uninspected transitive proofs.
