# Homological Algebra visual audit — lane 03

## Scope and coverage

Reviewed all 110 assigned items, including each frozen title and complete ItemBody, and opened all 150 listed screenshot tiles individually at original resolution. The item sources, frozen snapshots, generated HTML, screenshot receipts, and tile hashes were compared with the assignment and capture records. Hash mismatches: 0. No assigned items or tiles remain unreviewed. See [lane-03.json](lane-03.json) for item-by-item hashes, exact tile paths and capture positions.

All assigned capture receipts report 0 TikZ diagrams. There were no existing diagram maps, orientations, indices, or signs to validate. Reference-title wikilinks render as blocks by design. Uppercase technique banners are intended, though raw math inside one banner remains a confirmed defect. A coordinator rechecked all five initially suspected standalone PNGs individually at original resolution and confirmed that each shows the ordinary left content margin and the full item ID/title. Those suspicions are recorded as rejected visual observations in the ledger.

## Confirmed rendering findings

- **[ex-cyclic-tensor-coinvariants-of-matrix-bimodules](snapshots/ex-cyclic-tensor-coinvariants-of-matrix-bimodules.md:4)**, title: `k–Mat_n(k)` prints the matrix algebra with a literal underscore and untypeset math.
- **[ex-projective-dimension-of-a-cyclic-abelian-group](snapshots/ex-projective-dimension-of-a-cyclic-abelian-group.md:30)**, line 30: `0 -> Z --n--> Z -> Z/n -> 0` and `Ext^1` display as ASCII math.
- **[fs-rpg-rqf-is-the-e-one-page-of-the-grothendieck-spectral-sequence](snapshots/fs-rpg-rqf-is-the-e-one-page-of-the-grothendieck-spectral-sequence.md:4)**, title: `R^pG(R^qF)` and `E1` are raw ASCII.
- **[lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition](snapshots/lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition.md:54)**, technique banner: raw `$j$` remains literal in the uppercase label.


Clipping recheck: the coordinator re-opened `cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension--01.png`, `def-ext-via-a-projective-resolution-of-the-first-variable--01.png`, `def-suspension-and-desuspension-of-a-chain-complex--01.png`, `ex-extending-a-degree-zero-natural-transformation--01.png`, and `ex-projective-dimension-of-a-cyclic-abelian-group--01.png` individually at original resolution. Each has the ordinary left content margin and full item ID/title visible, so none is reported as a clipping defect. The `ex-projective-dimension...` raw ASCII math finding remains.

## Potential diagram additions

These candidates are supported by the source and are optional; none is required for mathematical validity.

- **[def-homological-spectral-sequence](snapshots/def-homological-spectral-sequence.md:28)**: a bidegree/page-transition schematic should show one differential `d^r_(p,q): E^r_(p,q) -> E^r_(p-r,q+r-1)`, the quotient to `E^(r+1)_(p,q)`, and preservation of total degree.
- **[def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring](snapshots/def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring.md:35)**: a two-generator example could display `R^e<theta_1 wedge theta_2> -> R^e<theta_1,theta_2> -> R^e -> R`, the alternating differential and augmentation.
- **[ex-neighbouring-differentials-after-a-gaussian-basis-change](snapshots/ex-neighbouring-differentials-after-a-gaussian-basis-change.md:28)**: a basis-change diagram could track the original four-term complex, pivot coordinates and the reduced `k --1--> k --0--> k --1--> k` segment.

This review changed no item source, website application, or publication status. It makes no claim about production routes.
