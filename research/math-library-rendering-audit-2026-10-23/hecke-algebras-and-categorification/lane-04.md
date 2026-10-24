# Lane 04 visual review

## Scope and coverage

Reviewed the 23 frozen snapshots and their local rendered HTML listed in `assignment-04.json`. Opened each of the 61 manifest-assigned screenshot tiles individually at original resolution. Snapshot, HTML, and tile SHA-256 values match the assignment/manifests; exact per-item and per-tile evidence is in `lane-04.json`. This is a review of the frozen local preview only.

## Rendering findings

- Titles and complete ItemBodies are present across the tiles. Where adjacent tiles overlap, the continuation agrees; the ending tiles show the item ending. I found no clipping that obscures content, broken KaTeX, raw TeX/math delimiters, ASCII caret/underscore formula leakage, or raw TikZ code in the rendered material.
- All visible formulae, including the displayed matrix in `ex-degenerate-ariki-decomposition-numbers-in-small-rank` and the matched-count table in `prop-shifted-degrees-and-garnir-exchanges-for-standard-tableaux`, render as math/table content. They are not TikZ diagrams.
- No `Scratch:` section is present in the assigned snapshots. No assigned ItemBody contains TikZ mathematics; there is therefore no existing TikZ diagram in this lane to assess for correctness.
- The long constructive proof technique in `lem-cyclotomic-polynomial-flag-comparison-has-the-prescribed-second-mate-inverse` wraps across two banner lines and remains legible. Other visible technique banners are also intact.
- **Source-authored identifier exposure, not a renderer leak:** the nondegenerate-regime snapshot deliberately places several item IDs in inline code (for example lines 53, 58–60, 65, 73, 93–105), which consequently appear as raw hyphenated IDs in the frozen preview. The reduction-modulo-$p$ item does the same at line 83. Linked references elsewhere display readable titles. Consider readable names/title links as optional editorial cleanup; the preview faithfully renders the source markup.

## Potential missing diagrams

These are optional presentation candidates supported by the cited source, not confirmed rendering defects. There are no existing TikZ diagrams in the assigned lane, and diagrams should illustrate rather than replace the stated algebraic arguments.

1. `def-cyclotomic-klr-diagram-duality-and-graded-module-duals`, lines 46–58. A duality comparison diagram could show finite-module vector duality `M ↦ DψM` separately from projective Hom duality `P ↦ P#`, with the ψ-twisted actions, shift reversal, `Dψ²M ≅ M`, and `(P#)# ≅ P` for projectives. The separation is warranted because the definition explicitly says these are different constructions; keep their domains distinct.
2. `def-graded-module-and-projective-grothendieck-groups-for-klr-towers`, lines 45–61 and 63–80; proof line 146. A commuting diagram could track the blockwise Hecke-to-KLR transports on `K₀ᵍʳ` and `G₀ᵍʳ`, the Cartan map `c: K₀ᵍʳ→G₀ᵍʳ`, and the forgetful maps `ζ` to ungraded groups. Show q-shifts preserved, and keep `K₀` and `G₀` distinct as the item requires.
3. `lem-cyclotomic-hecke-polynomial-spectra-and-central-content-sectors`, statement lines 42–43 and proof line 95. A projector refinement diagram could group joint generalized-residue projectors `e(ν)` by content into `eα = Σ e(ν)`, then show `H = ⊕α eαH`; label the `eα` central, orthogonal, and summing to 1, with some sectors possibly zero and no primitivity assertion.
4. `thm-ariki-canonical-basis-theorem-in-characteristic-zero`, statement lines 52–64 and proof lines 125–127. A two-branch correspondence diagram could map projective classes `[Y(λ)]` in `K₀ᵍʳ(HΛ)` to lower global vectors `G(λ)`, and simple classes `[D(λ)]` in `G₀ᵍʳ(HΛ)` to upper vectors `G*(λ)`, joined by the form-duality pairing `B(G(λ),G*(μ))=δλμ`. Label the characteristic-zero branch and the restricted crystal label λ.

## Defect queue

No confirmed rendering defects from this lane. The raw identifiers described above are confirmed visible source-authored markup and are classified as optional editorial typography, not a broken-reference/rendering defect.
