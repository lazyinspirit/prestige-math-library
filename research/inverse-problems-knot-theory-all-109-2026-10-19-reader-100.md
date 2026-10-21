# Step 3a reader report — batch 100

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader (`reader-100`)

## Opened inventory

### Pages

- `library/knot-theory/khovanov-to-floer-spectral-sequence.md` (A). The frontmatter inventory matches the manifest, `status: draft` and `page_layout: compact-v1` are present, and the Markdown body is empty. Page verdict: appropriate; no summary or page-prose repair is needed.
- `library/knot-theory/khovanov-to-floer-spectral-sequence-examples.md` (B). The frontmatter inventory matches the manifest, `status: draft` and `page_layout: compact-v1` are present, and the Markdown body is empty. Page verdict: appropriate; no summary or page-prose repair is needed.

### Assigned items

Opened all 20 manifest items; the list below is ordered by the manifest dependency levels. Some consumer files were opened before all external dependencies were gathered, as noted under Coverage limit:

1. `def-double-branched-cover-of-an-oriented-link`
2. `lem-os-filtered-convergence-and-invariance-scope`
3. `lem-double-branched-cover-of-an-oriented-link-well-defined`
4. `lem-double-cover-of-two-arc-rational-tangle-is-solid-torus`
5. `def-link-surgery-filtered-complex-for-double-branched-cover`
6. `lem-lift-of-two-strand-half-twist-is-annular-dehn-twist`
7. `lem-hat-CF-genus-one-lens-space-order-three-rank-three`
8. `lem-os-link-surgery-filtered-complex-and-triangle`
9. `lem-os-unlink-resolution-covers-and-floer-tqft`
10. `lem-trefoil-double-branched-cover-is-lens-space-order-three`
11. `def-reduced-khovanov-cohomology-of-a-based-link-over-f2`
12. `lem-os-first-differential-is-reduced-khovanov`
13. `lem-reduced-khovanov-over-f2-basepoint-independence`
14. `lem-trefoil-reduced-khovanov-rank-three`
15. `lem-link-surgery-e-one-differential-is-reduced-khovanov`
16. `thm-reduced-khovanov-over-f2-link-invariance`
17. `thm-os-spectral-sequence-for-a-fixed-link-diagram`
18. `thm-os-khovanov-spectral-sequence-to-branched-cover-floer`
19. `cex-knot-kt-45-boundary-case`
20. `ex-knot-kt-45-worked-cases`

### Direct dependency items opened

- Link and covering-space foundations: `def-oriented-link-in-s-three-and-ambient-isotopy`, `lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold`, `def-covering-map-and-evenly-covered-neighbourhoods`, `thm-classification-of-connected-covering-spaces`, `def-regular-covering`, `thm-regular-covering-characterizations`, `def-axiom-of-choice`, `thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere`, `prop-the-first-hurewicz-map-in-degree-one-is-abelianization`, `cor-based-connected-coverings-isomorphic-iff-equal-subgroups`, `def-euler-characteristic-of-a-finite-cw-complex`, `thm-classification-of-compact-connected-surfaces`, and `lem-two-disjoint-circles-in-s-two-cobound-an-annulus`.
- Filtrations and Heegaard Floer: `def-filtered-chain-complex`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`, `def-hat-heegaard-floer-complex-of-a-closed-three-manifold`, `def-dehn-twist-on-oriented-surface`, `thm-path-lifting-for-covering-maps`, `thm-homotopy-lifting-for-covering-maps`, `lem-os-disk-and-polygon-analytic-foundations`, `def-lens-space-surgery-orientation-convention`, `lem-straight-three-intersection-torus-diagram-has-no-nonconstant-disks`, `thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant`, `lem-nearly-symmetric-polygons-have-positive-domains-and-degree-energy-bounds`, and `thm-seifert-van-kampen`.
- Khovanov and spectral sequences: `alg-khovanov-chain-complex-from-diagram`, `def-khovanov-frobenius-algebra-and-cube-of-resolutions`, `def-cochain-complex-in-an-abelian-category`, `lem-khovanov-cube-differential-squares-to-zero`, `thm-khovanov-chain-complex-from-diagram-procedure-properties`, `thm-oriented-reidemeister-equivalence-theorem`, `def-countable-choice`, `lem-khovanov-reidemeister-chain-homotopies`, `lem-based-link-reduced-khovanov-reidemeister-equivalences`, `def-homological-spectral-sequence`, and `thm-the-next-page-is-the-homology-of-the-current-page`.
- Additional supporting items opened where cited: `def-kauffman-bracket-smoothing-and-loop-value`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-oriented-slope-and-knot-dehn-filling`, `def-reduced-khovanov-cohomology-of-a-knot`, `lem-khovanov-signed-local-cancellation-models`, `def-chain-homotopy`, `def-chain-homotopy-equivalence`, `def-mapping-cone-of-a-chain-map`, `lem-every-oriented-link-admits-a-regular-projection`, and `lem-transverse-linear-strip-cauchy-riemann-isomorphism`.

The classifying-surface item’s closed-surface statement and the annulus lemma’s statement and relevant proof were used for the two-arc tangle calculation. The cited passage supports capping its two boundary circles and identifying the resulting closed surface as the sphere; I did not audit every transitive proof dependency of those published items.

## Edits and evidence

- `items/thm-reduced-khovanov-over-f2-link-invariance.md`: added the regular-projection existence dependency and an explicit fact establishing that every nonempty smooth link has a finite regular diagram and a usable basepoint. The statement ranges over links, while the proof compared supplied diagrams; the new fact closes the existence step using the link definition’s move-off-infinity convention and `lem-every-oriented-link-admits-a-regular-projection`.
- `items/thm-os-khovanov-spectral-sequence-to-branched-cover-floer.md`: added the same projection dependency and made the proof choose a regular diagram after moving to an isotopic representative. It now identifies the resulting abutment with the original branched cover using `lem-double-branched-cover-of-an-oriented-link-well-defined`.
- `items/ex-knot-kt-45-worked-cases.md`: corrected the overstrong conclusion that no spectral-sequence differential is nonzero. Equal dimensions of the E2 page and abutment force all dr with r >= 2 to vanish; they do not control the earlier d1 used to form E2. The endpoint ranks are supplied by `lem-trefoil-reduced-khovanov-rank-three`, `lem-trefoil-double-branched-cover-is-lens-space-order-three`, and `lem-hat-CF-genus-one-lens-space-order-three-rank-three`.
- Updated the corresponding derivation entries and source bindings in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-100.proof-contracts.json`. None of the three repaired item files had a `verification.judge` record to remove.

No inline hyperlinks were found inside the assigned items’ complete statement, definition, false-statement, or example sections. Their references were already in the required following level-two sections. No A- or B-page body contained a summary.

## Diagram review

Reviewed all TikZ/TikZ-CD diagrams in the assigned items and supporting definition items: the Kauffman crossing and two smoothings, the positive crossing-sign chart, the Frobenius merge-split square, the type-II resolution-state indexing square, the primitive slope segment in the torus cover, and the closed three-crossing braid diagram. The smoothing pairs, map objects and directions, slope displacement, over/under convention, and closure arcs agree with their accompanying text. The braid drawing includes the two exterior closure arcs and does depict the closure. No diagram repair or additional diagram was needed.

## Source checks

- Ozsváth–Szabó, *On the Heegaard Floer Homology of Branched Double-Covers*, `https://arxiv.org/pdf/math/0309170v1`: checked Proposition 2.1 (pp. 6–7), the surgery polygon construction and equations (9)–(10), Lemma 4.5 and Proposition 4.6 (pp. 21–23), Theorem 4.7 (pp. 24–27), Propositions 6.1–6.2 (pp. 32–34), and Theorem 6.3 (p. 34). These support the stated branch-cover triad, link-surgery cube and actual top-input maps, unlink Floer maps, and fixed-diagram spectral-sequence interface. The complete paper was not read.
- Ozsváth–Szabó, *Holomorphic Disks and Topological Invariants for Closed Three-Manifolds*, `https://arxiv.org/pdf/math/0101206`: checked the nearly-symmetric divisor positivity discussion and Theorem 3.4 (§3.3, pp. 20–22), and Theorem 3.18 (§3.8, pp. 31–32). These passages support the standard fixed-diagram disk transversality and compactness interfaces cited by the current analytic supplier. The complete paper was not read.
- Hatcher, *Algebraic Topology*, `https://pi.math.cornell.edu/~hatcher/AT/AT.pdf`: Proposition 1.30 (p. 60) states homotopy lifting for coverings; its proof is the local-neighborhood/finite-time-strip argument in Theorem 1.7(c) (pp. 30–31). This confirms the general homotopy-lifting interface used by the half-twist lift.

## Unedited defects and page verdicts

No uneditable defect was confirmed in the assigned pages, items, or the direct dependency interfaces examined. The only confirmed authored defects were repaired in the assigned items above. There is no reader-specific blocker. The refreshed native run status at 2026-10-21 09:59 UTC still lists batch 100 as missing from 3a-read pending this dispatch, and reports unrelated blockers `collect-71` and `split-83`, each failed three times.

- A page `khovanov-to-floer-spectral-sequence`: appropriate frontmatter-only presentation; inventory and metadata match the manifest.
- B page `khovanov-to-floer-spectral-sequence-examples`: appropriate frontmatter-only presentation; inventory and metadata match the manifest.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-reduced-khovanov-over-f2-link-invariance.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-reduced-khovanov-over-f2-link-invariance.md` — PASS.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-os-khovanov-spectral-sequence-to-branched-cover-floer.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-os-khovanov-spectral-sequence-to-branched-cover-floer.md` — PASS.
- `node tools/tsx-run.mjs tools/reflow.mts items/ex-knot-kt-45-worked-cases.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-knot-kt-45-worked-cases.md` — PASS.
- One final batch command, `node tools/proof-layout.mjs items/thm-reduced-khovanov-over-f2-link-invariance.md items/thm-os-khovanov-spectral-sequence-to-branched-cover-floer.md items/ex-knot-kt-45-worked-cases.md` — 3 items, 8 steps, 0 defects.

## Coverage limit

All assigned pages and items and their direct claim suppliers were opened. I did not recursively audit every proof beneath the broad Heegaard–Floer transversality, compactness, and gluing package; those interfaces were checked against their current direct supplier statements and the cited source passages above. Some consumer files were opened before all external suppliers had been collected; final claim assessments followed the supplier and source checks, without rereading files already opened.
