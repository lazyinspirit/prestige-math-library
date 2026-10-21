# Step 3a reader report — batch 95

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Date: 2026-10-21

## Scope and opened inventory

Opened both assigned pages:

- `library/knot-theory/epsilon-and-upsilon-concordance-invariants.md`
- `library/knot-theory/epsilon-and-upsilon-concordance-invariants-examples.md`

Opened all 13 assigned items and checked the relevant supplier statements and proof facts:

1. `def-epsilon-from-filtered-knot-floer-complex`
2. `def-upsilon-function-from-filtered-complex`
3. `lem-slice-knot-floer-complex-stably-equivalent-to-unknot`
4. `lem-upsilon-filtered-tower-splitting`
5. `def-grid-upsilon-from-grid-complex`
6. `lem-upsilon-nu-minus-four-ball-bound`
7. `thm-smooth-concordance-implies-stable-filtered-knot-floer-equivalence`
8. `lem-epsilon-stable-equivalence-and-not-a-homomorphism`
9. `thm-grid-upsilon-equals-oss-upsilon`
10. `thm-upsilon-additivity-mirror-and-genus-bound`
11. `thm-epsilon-upsilon-are-concordance-homomorphism-data`
12. `cex-knot-kt-42-boundary-case`
13. `ex-knot-kt-42-worked-cases`

The principal suppliers opened for these checks included the pointed and grid definitions; the finite two-hook, rectangle, marking-variable, series-ring, and tower-splitting arguments; the current grid-to-knot-Floer comparison and its grid-move, admissibility, relative-index, and integrable-count suppliers; the tau tensor, duality, diagram-independence, and smooth-genus items; the epsilon stable-core argument; and the stated cobordism inputs. The current batch-95 manifest, source evidence, source coverage, cross-batch dependency map, task brief, run status, and author notes were used as navigation/evidence only, not as verdicts.

## Review results

- The epsilon definition gives the same (F_s,G_s) subquotient maps and sign convention as Hom, *The knot Floer complex and the smooth concordance group*, §3, especially the map definitions and Definition 3.1 (PDF pp. 5–6). The finite hook argument establishes the three algebraic cases for the stated rank-one vertical homology input; it does not claim model or concordance invariance.
- The Upsilon definition uses the Maslov-zero cycle set, finite support maximum, and the stated (F_t) convention consistently. Its finite minimum and piecewise-linearity arguments are valid for the supplied normalized complex. The real-series ring and finite homogeneous splitting support the later non-torsion maximum and regrading claims.
- The local tower-splitting proof, grid-Upsilon definition, and grid-to-original comparison retain the (V^{\otimes(n-1)}) factors from ordinary variable collapse and distinguish collapse from restriction to one variable action. The value shifts from the two (V) generators are (0) and (t-1\le0) for (0\le t\le1), so they do not change the maximal non-torsion grading on that interval.
- The ν-minus item proves existence/nonnegativity of its finite threshold locally and labels the smooth-genus upper bound as the imported OSS/Hom–Wu result. The Upsilon four-ball bound uses that exact threshold and the stated smooth genus branch; no τ inequality is substituted for it.
- The stable-equivalence, epsilon tensor, and concordance deductions preserve the distinction between total acyclicity and filtered/associated-graded acyclicity. The slice and concordance inputs are identified as imported Hom results, rather than presented as local movie-map proofs.
- I checked the finite staircase arithmetic for the trefoil and the stated hook representative for the τ-zero epsilon witness. I also inspected the grid-rank implementation, inputs, and result summaries used to recover the torus/cable hat profiles; the reported dimensions match the retained (V)-factor profiles. I did not independently rerun the large finite enumeration.
- The assigned trefoil TikZ diagram matches the stated generator coordinates and arrows; the dotted (U^{-1}x_2) vertex is the Maslov-zero translate used in the minimax calculation. The assigned statements/definitions are uninterrupted by hyperlinks, and their references occur in the required following sections.

The two pages contain YAML frontmatter only and preserve their inventories and `page_layout: compact-v1` metadata. The A page lists its 11 assigned items; the B page leaves `items: []` and lists the two assigned examples. **Page verdicts: both pages pass.**

## Defects, edits, and blockers

No confirmed defect requiring an uneditable finding was identified. No item or page was edited. Consequently, no proof contract or judge record was changed, and no item reflow, precheck, or proof-layout command was needed.

No batch-95 blocker was identified. The final live run status showed the run still in `3a-read`, with no worker running and no active blocker listed; this review did not change engine state.

## Coverage note

All assigned page and item files were opened. I opened the first assigned epsilon definition before all of its suppliers, then inspected those suppliers before reviewing the remaining consuming items; this departs from the prescribed supplier-first order for that first item. I checked the principal suppliers used in the local arguments and consulted the cited primary source passages for epsilon and connected-sum conventions. The analytic Heegaard Floer transversality, compactness, and continuation chain is extensive; I assessed its stated local supplier interfaces and the exact claims used here but did not independently reconstruct every lower-level analytic estimate from first principles. The large grid-rank calculation was statically inspected rather than rerun. No specific defect was confirmed from these limits.
