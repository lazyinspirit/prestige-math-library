# Functional Analysis visual audit — lane 01

## Scope and coverage

Visually reviewed all 94 assigned items and all 175 revision-pinned screenshot tiles. Every tile was opened individually with `tools.view_image` at original resolution; no tile was downscaled or combined into a collage. The coverage ledger records frozen source, snapshot, HTML, screenshot SHA256s and tile dimensions for every item: [lane-01.json](lane-01.json). Source and frozen snapshot bytes match for every assignment, current source and HTML hashes match the assignment, all tile hashes match their manifests, and capture manifests report no KaTeX or diagram failures. No assigned input drifted and no item or tile was left unreviewed.

## Confirmed rendering findings

- **Raw TeX in a title:** `lem-composition-operator-norm-inequality`, title line 4, displays the norm formula as literal `\|`, `\le`, and `\,` commands. See [original tile](screenshots/lem-composition-operator-norm-inequality--01.png). Put the formula in supported math delimiters or use a prose title. The same raw title is repeated as a linked reference in `lem-canonical-map-is-natural`, `thm-hilbert-schmidt-operators-form-a-two-sided-ideal`, and `thm-measurable-essentially-bounded-operator-fields-act-decomposably`; exact source lines and evidence are listed in the JSON ledger.
- **Raw TeX in a linked reference title:** Four assigned items link to `def-quotient-seminorm`, whose title at line 4 contains TeX delimiters/commands that are printed literally in the preview. The first visible instance is [the quotient-by-kernel tile](screenshots/ex-quotient-by-the-kernel-is-isometric-to-the-range-with-the-induced-quotient-norm--01.png); the other affected items are `lem-riesz-schauder-ascent-and-descent-stabilize`, `thm-quotient-of-banach-by-closed-subspace-is-banach`, and `thm-universal-property-of-the-normed-quotient`.
- **Raw TeX in a linked reference title:** Four assigned items link to `thm-bounded-operator-space-is-banach`, whose title at line 4 prints its `\(Y\)` and `\mathcal B(X,Y)` notation literally. A visible instance appears in [the Schauder compact-adjoint tile](screenshots/thm-schauder-compact-adjoint-theorem--01.png); the other affected items are `def-calkin-algebra`, `def-complexification-and-spectrum-of-a-real-operator`, and `ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection`.

Wikilink targets appear on separate block lines in these previews by design. Those line breaks were not recorded as defects. The raw reference-title notation itself is a confirmed defect.

## Layout observation

In `def-annihilator-and-preannihilator`, Definition line 25, the long display expression wraps mid-expression. Reinspection of the standalone original tile confirms that the next line continues at the left with `X: f(x)=0 for all f∈N}`, so the formula is complete. This is a layout observation, not a clipping defect. See [original tile](screenshots/def-annihilator-and-preannihilator--01.png).

## Diagram review

No assigned item contains an existing TikZ/tikzcd diagram (`tikz_count: 0` across all manifests), so there were no existing map orientations, indices, or signs to audit. One optional diagram opportunity is `lem-canonical-map-is-natural`, lines 27 and 39–41: a naturality square with top map `T:X→Y`, vertical maps `J_X` and `J_Y`, and bottom map `T^{**}:X^{**}→Y^{**}`, displaying `T^{**}∘J_X=J_Y∘T`. The map directions and equality are confirmed directly by the proof; a diagram is helpful but not required.

## Optional typography and limits

Technique banners are uppercase by expected CSS styling. “ell-infinity” and “ell p” in a few prose display titles are optional typography observations; their body formulas render. This was a local preview audit, not a review of production HTTP routes, navigation, dependency graphs, or bibliography widgets. No source, item, application, or tool file was changed; only this lane’s report and coverage files were written.
