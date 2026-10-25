# Lane 07 visual review

## Scope and coverage

Reviewed all 23 frozen snapshots and local rendered HTML listed in `assignment-07.json`. Opened each of the 56 assigned screenshot tiles individually at original resolution. Snapshot, HTML, and tile SHA-256 values match the assignment and screenshot manifests; exact per-item and per-tile evidence is in `lane-07.json`. This review covers only the frozen local preview.

## Rendering findings

- Titles and complete ItemBodies are present across the tiles. I checked tile continuations and standalone original tiles at the overlap/boundaries; no clipping obscures content. Mathematical expressions render throughout, with no broken KaTeX or raw ASCII caret/underscore formula leakage.
- No `Scratch:` section is present in the assigned snapshots. No assigned ItemBody contains TikZ mathematics; there are no existing TikZ diagrams in this lane to assess.
- Two literal source-markup defects are visible in the frozen preview:
  - `thm-cyclotomic-hecke-central-sectors-are-isomorphic-to-type-a-cyclotomic-klr-algebras`, snapshot line 47: `[def-cyclotomic-hecke-central-content-sector-notation]` uses single brackets, so the raw item identifier appears in the Facts & Assumptions text. This is a confirmed reference-title leak.
  - `lem-mixed-relations-and-local-nilpotence-give-an-integrable-quantum-action`, snapshot line 82: the proof-technique banner contains `$F_j$`, and the dollar-delimited math is shown literally there. The rest of that ItemBody's mathematics renders.
- Many other references expand to readable titles. The surrounding parentheses, commas, and link titles sometimes wrap onto separate lines; this is awkward typography but not a literal-markup defect.

## Potential missing diagrams

These are optional presentation candidates supported by the cited snapshots, not confirmed errors. No assigned source contains an existing TikZ diagram.

1. `def-degenerate-cyclotomic-hecke-tower-and-residue-functors`, lines 86–98 and 120–138. A tower and functor diagram could show adjacent content blocks `H^Λ_α` and `H^Λ_(α+α_i)`, the embedding `ι_(α,α_i)` and idempotent `u_(α,i)`, and the functors `e_i(M)=u_(α,i)M` and `f_i(M)=H^Λ_(α+α_i)u_(α,i)⊗_(H^Λ_α)M`. Mark exactness and biadjointness as stated properties, and keep supported content blocks distinct from the full ambient algebra.
2. `thm-cyclotomic-hecke-central-sectors-are-isomorphic-to-type-a-cyclotomic-klr-algebras`, lines 30–40, 46–61, and proof lines 85–103. A sectorwise isomorphism diagram could show `R^Λ_α ⇄ H^Λ_α` with `ρ` and `σ`, both composites equal to the identity, generator images for `e(i)`, `y_r`, `ψ_r`, and the branch-specific dot images. Then show `H^Λ_d ≅ ⊕_α R^Λ_α`, including the stated zero-sector case. Preserve the source's distinction between a central content sector and a primitive block.

## Defect queue

Two confirmed visible markup defects are listed in `lane-07.json`: one raw reference identifier and one unrendered math expression in the technique banner. Optional line-wrap typography is recorded separately and is not in the defect queue.
