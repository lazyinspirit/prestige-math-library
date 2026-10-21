# Step 3a reader report — batch 101

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Scope: batch `101` only

## Pages reviewed

- `library/knot-theory/branched-cover-correction-terms-and-sliceness.md` — draft A page; `compact-v1` preserved; body empty; inventory contains the twelve assigned A items. **Verdict: no page defect.**
- `library/knot-theory/branched-cover-correction-terms-and-sliceness-examples.md` — draft B page; `compact-v1` preserved; body empty; inventory contains the two assigned examples. **Verdict: no page defect.**

Neither page contains a summary or narrative body, consistent with the page-presentation rule.

## Assigned items opened

All fourteen assigned items were opened and reviewed, with suppliers read before their consumers:

- `def-heegaard-floer-plus-infinity-absolute-grading`
- `lem-rational-homology-four-ball-admits-spinc`
- `lem-spin-c-structures-form-an-h2-torsor`
- `lem-heegaard-floer-correction-term-heegaard-invariance`
- `def-heegaard-floer-correction-term`
- `lem-rational-ball-spin-c-extension-set-metabolizer`
- `lem-rational-ball-spin-c-cobordism-map-inequality`
- `lem-heegaard-floer-correction-terms-lens-space-lp1`
- `lem-rational-ball-b2-bounds-lens-l4`
- `thm-correction-term-obstruction-from-rational-ball`
- `lem-slice-disk-double-cover-is-rational-homology-ball`
- `cor-double-cover-d-invariant-obstructs-smooth-slice`
- `ex-knot-kt-46-worked-cases`
- `cex-knot-kt-46-boundary-case`

## Additional dependency inventory

I opened the relevant statements, definitions, facts, and proof passages for these suppliers needed to check the assigned claims:

- Spin-c and cohomology: `def-given-spin-and-spinc-structures-and-associated-spinor-bundles`, `def-axiom-of-choice`, `lem-finite-good-covers-of-compact-smooth-boundary-manifolds-compute-integral-cohomology`, `lem-spin-c-lifts-exist-iff-w2-has-an-integral-lift`, `lem-integral-two-classes-in-four-manifolds-have-surface-representatives-and-characteristic-parity`, `def-principal-g-bundle-and-associated-fiber-bundle`, `prop-associated-bundle-is-locally-trivial-and-functorial-under-pullback`, `thm-first-chern-class-classifies-complex-line-bundles`, `lem-boundary-spin-c-restriction-and-line-twists-are-equivariant`, `lem-punctured-rational-homology-balls-are-rational-cobordisms`, and `thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations`.
- Exact-sequence and pairing tools: `thm-poincare-lefschetz-duality`, `thm-long-exact-sequence-of-a-pair-in-singular-cohomology`, `thm-long-exact-sequence-of-a-pair-in-singular-homology`, `thm-universal-coefficient-theorem-for-cohomology-over-a-pid`, `thm-poincare-duality-for-oriented-topological-manifolds`, `def-bockstein-connecting-operation`, `lem-the-bockstein-is-independent-of-lift-and-cocycle-representative`, `prop-cup-product-is-natural-unital-and-associative`, and `lem-cyclic-cover-linking-form-inverse-matrix`.
- Floer and lens-space suppliers: statement-level review of `lem-rational-heegaard-floer-absolute-grading-and-cobordism-maps` and `lem-rational-heegaard-floer-infinity-standardness-and-rational-cobordism-isomorphism`; also `lem-commuting-laurent-and-plus-maps-give-bottom-degree-inequalities`, `lem-graded-laurent-images-with-proper-kernel-are-plus-towers`, `def-lens-space-surgery-orientation-convention`, and `lem-lens-space-q-one-triangles-and-cyclic-handle-maps`.
- Branched-cover and Seifert suppliers: published `lem-double-cover-branched-over-a-slice-disk-is-a-rational-homology-ball`, `def-cyclic-branched-cover-of-a-knot`, `lem-branched-cover-surgery-presentation-from-seifert-surface`, `lem-seifert-pairing-well-defined`, `def-knot-seifert-pairing-and-matrix`, `def-oriented-seifert-surface`, `lem-seifert-matrix-skew-part-is-surface-intersection`, `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`, `thm-every-oriented-knot-bounds-a-seifert-surface`, and `lem-cyclic-branched-cover-seifert-block-matrix`.

The assigned scope contains one TikZ diagram, in `lem-rational-ball-b2-bounds-lens-l4`. It depicts the stated unknot with framing `+4` and matches the one-component surgery description; no diagram repair was needed.

## Repairs and evidence

1. **`def-heegaard-floer-plus-infinity-absolute-grading`, Definition.** Added the missing condition that every alpha curve is transverse to every beta curve, then stated that compactness makes their intersection set finite. Compactness alone does not imply finiteness without transversality. This is required for the diagram generators and disk-count complex in the definition. The primary source checked was Ozsváth–Szabó, *Holomorphic disks and topological invariants for rational homology three-spheres*, arXiv:math/0101206v1, Theorem 1.1 and its Heegaard-diagram setup (https://arxiv.org/pdf/math/0101206v1).

2. **`lem-heegaard-floer-correction-term-heegaard-invariance`, deps and Statement.** Removed the dependency and Statement reference to `def-heegaard-floer-correction-term`: that definition was itself justified by this lemma, creating a dependency cycle. Reworded the lemma to establish existence and choice-independence of the least grading without using the symbol (d). The correction-term definition remains justified by the lemma. Corrected the source metadata to the exact title and locator, Ozsváth–Szabó, *Holomorphic disks and topological invariants for rational homology three-spheres*, Theorem 1.1 (printed p. 1) and §§4–6. The same source and the primary correction-term paper were checked against the stated grading conventions: *Absolutely Graded Floer Homologies and Intersection Forms for Four-Manifolds with Boundary*, arXiv:math/0110170v1, Definition 4.1, Proposition 4.8, Theorem 9.6, and Proposition 9.9 (https://arxiv.org/pdf/math/0110170v1). Hom's notes, §§2.1–2.2, were checked for the \(\mathbb F_2\) coefficients, (U)-degree, tower model, and (S^3) normalization (https://arxiv.org/pdf/2008.01836v1).

3. **`lem-rational-ball-spin-c-extension-set-metabolizer`, Statement and Facts & Assumptions.** Removed an unnecessary hypothesis requiring a nonsingular framed-link presentation. The proof already derives the general chain-linking identification from the Bockstein, universal coefficients, Poincaré duality, and the bounding-chain calculation in proof step 2.2. The Statement now records that the cohomological pairing agrees, up to global orientation sign, with the chain torsion linking pairing, so their annihilators agree. Updated the `Given` line and [F5] to match the broader statement and removed the unused inverse-matrix dependency. The extension-coset and square-order argument was checked against Aceto–Golla, *Dehn Surgeries and Rational Homology Balls*, §2, Proposition 2.2, and Cochran–Harvey–Horn, *Filtering Smooth Concordance Classes of Topologically Slice Knots*, §6, Lemma 6.3 (printed pp. 2129–2131): https://arxiv.org/pdf/1509.07559v2 and https://msp.org/gt/2013/17-4/gt-v17-n4-p04-s.pdf.

4. **`lem-rational-ball-spin-c-cobordism-map-inequality` and `thm-correction-term-obstruction-from-rational-ball`, Statements.** Made the ball explicitly compact, connected, and oriented. The map and correction-term arguments use those hypotheses; connectedness is not left implicit in (H_0), and orientation is needed for the cobordism and Spin-c conventions. The correction-term vanishing and rational-homology-cobordism use were checked against Ozsváth–Szabó, arXiv:math/0110170v1, Proposition 9.9.

5. **`lem-slice-disk-double-cover-is-rational-homology-ball`, source metadata.** Corrected the Fox–Milnor reference. The cited paper is *Singularities of 2-spheres in 4-space and cobordism of knots*; its §2, Theorem 2 proves the Alexander-polynomial factorization condition for slice knots, not the branched-cover homology assertion. The locator now identifies it as related context only and attributes the branched-cover homology proof to the local supplier. Source: https://www.i-repository.net/contents/osakacu/sugaku/111F0000002-00302-8.pdf.

6. **`cor-double-cover-d-invariant-obstructs-smooth-slice`, deps, Facts & Assumptions, and Proof.** Added the explicit cyclic-cover boundary dependency and the Poincaré–Lefschetz duality, pair sequence, universal-coefficient, and closed-manifold duality dependencies. The proof now derives that (Y) is a rational homology sphere from the rational-ball cover before applying the extension-set result. Removed the Seifert surgery-matrix argument: the corrected extension-set supplier applies directly to the chain linking pairing and does not require that presentation. The remaining proof proceeds from the smooth slice-cover, to rational homology, to the extension coset and then correction-term vanishing. This also removes the silent reliance on a nonsingular matrix before its hypothesis had been established.

No assigned TikZ diagram required repair. The assigned A and B pages needed no edits. No stale `verification.judge` record was present on the seven changed items. Ten batch proof-contract entries, including affected assigned consumers, were regenerated with `tools/regen-contract-entries.mjs`; existing reviewer metadata was preserved.

## Validation

- `tools/reflow.mts` and `tools/precheck.mts` were run on each of the seven changed items. Every precheck passed after adopting the required phase ordering in the slice corollary.
- Final combined layout check: `node tools/proof-layout.mjs items/def-heegaard-floer-plus-infinity-absolute-grading.md items/lem-heegaard-floer-correction-term-heegaard-invariance.md items/lem-rational-ball-spin-c-extension-set-metabolizer.md items/lem-rational-ball-spin-c-cobordism-map-inequality.md items/thm-correction-term-obstruction-from-rational-ball.md items/lem-slice-disk-double-cover-is-rational-homology-ball.md items/cor-double-cover-d-invariant-obstructs-smooth-slice.md` — **7 items, 18 steps, 0 defects**.

## Remaining defects and blockers

No confirmed or suspected defect remains in the assigned items or pages. The findings array is empty.

There is no blocker specific to batch 101. At the final status check on 2026-10-21 10:27:46 UTC, the run remained active; `3a-collect` was blocked by `collect-98` failing three times, and `3a-split` was blocked by `split-97` and `split-105` each failing three times. The run status also still listed batches 101, 104, and 109 as missing from `3a-read` before this report was routed.

## Coverage limitation

I reviewed the relevant statements and source-facing facts for the lengthy local analytic Heegaard Floer suppliers, but did not independently reconstruct their entire analytic proofs: `lem-rational-heegaard-floer-absolute-grading-and-cobordism-maps` and `lem-rational-heegaard-floer-infinity-standardness-and-rational-cobordism-isomorphism`. Their use in the assigned correction-term claims was checked against the cited Ozsváth–Szabó and Hom source passages. No uncertainty about the repaired claims remains, but this report does not certify those suppliers' full analytic constructions.
