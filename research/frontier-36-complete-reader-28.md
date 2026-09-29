# Step 5a reader report — batch 28

Run: `frontier-36-complete`  
Role: reader  
Verdict: reviewed; no uneditable defects remain.

## Opened inventory

Assigned pages opened:

- `library/complex-analysis/riemann-surfaces-branched-maps-and-differentials.md`
- `library/complex-analysis/riemann-surfaces-branched-maps-and-differentials-examples.md`

All 23 assigned item files were opened and read in current form:

- `lem-planar-piecewise-analytic-region-triangulation`
- `def-riemann-surface-and-holomorphic-atlas`
- `lem-index-of-graph-bounded-region-boundary`
- `lem-nonsingular-complex-algebraic-curve-holomorphic-charts`
- `def-holomorphic-and-meromorphic-map-of-riemann-surfaces`
- `lem-finite-analytic-chart-triangulation-compact-riemann-surface`
- `ex-basic-riemann-surface-atlases`
- `ex-complex-torus-holomorphic-atlas`
- `def-meromorphic-differential-on-a-riemann-surface`
- `thm-local-normal-form-holomorphic-map-riemann-surfaces`
- `ex-smooth-affine-conic-as-punctured-plane`
- `ex-nonsingular-algebraic-curve-charts`
- `def-ramification-index-and-branch-value`
- `thm-residue-theorem-compact-riemann-surface`
- `lem-pullback-order-of-meromorphic-differentials-under-branched-maps`
- `thm-proper-holomorphic-map-riemann-surfaces-has-degree`
- `ex-coordinate-change-for-meromorphic-differential`
- `cex-exponential-local-biholomorphism-is-not-proper`
- `thm-topological-classification-compact-riemann-surfaces`
- `def-genus-and-euler-characteristic-compact-riemann-surface`
- `thm-riemann-hurwitz-formula`
- `ex-hyperelliptic-double-cover-ramification`
- `ex-power-map-riemann-hurwitz`

The dependency statements needed to assess claims were checked from current targets and the rendered evidence bundle. Additional dependency files opened directly included `def-riemann-sphere-holomorphic-charts`, `def-meromorphic-function-complex-domain`, and the in-run `thm-classification-of-compact-connected-surfaces`.

## Source passages checked

- Jost, *Compact Riemann Surfaces*: §2.3.A, Theorem 2.3.A.1 on triangulability; §2.4.A, Definition 2.4.A.1, Corollaries 2.4.A.1–2, and Theorem 2.4.A.1 on orientation and the classification of compact orientable triangulated surfaces. The section and theorem locators were checked in the [chapter PDF](https://www.math.wichita.edu/~ryan/teaching/M829F/syllabus/Jost-book/JJ_ch2.pdf).
- McMullen, *Riemann Surfaces*: Chapter 3, Theorem 3.4, PDF pp. 23–24, gives the Euler-characteristic deficit formula for proper finite-type maps. This fixes the locator in the assigned Riemann–Hurwitz item. The [course notes PDF](https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf) also locates the cited residue theorem at Chapter 6, Theorem 6.6, PDF pp. 56–57; its proof uses Stokes after deleting small disks.
- Looijenga, *Riemann Surfaces*: Chapter 4, Theorem 4.8, printed pp. 45–46, gives the general Riemann–Hurwitz cell-deficit proof. Proposition 6.3, PDF p. 53, proves the residue theorem by removing disks and applying Stokes. [PDF](https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf).
- Hinich, *Riemann Surfaces*, §8.5.1–8.5.3, printed pp. 8–9, gives the sphere-target Riemann–Hurwitz count; §8.4.3, printed p. 6, gives the compact residue theorem by triangulating with poles in face interiors and cancelling paired edges. [Lecture 7 PDF](https://math.haifa.ac.il/hinich/RSlec/lec7.pdf).
- Gallier and Xu, *A Guide to the Classification Theorem for Compact Surfaces*, Chapter 6, Lemma 6.1 and Theorems 6.1–6.2, was checked as an independent statement of the polygonal normal-form and classification results used at the classification seam. [Book PDF](https://www.cis.upenn.edu/~jean/surfclassif-root.pdf).

## Repairs

1. `items/def-holomorphic-and-meromorphic-map-of-riemann-surfaces.md` — Replaced the definition's unsupported assertion that `f⁻¹(dom ψ)` is open before continuity of `f` is known. The local definition now asks for an open source neighborhood mapped into a target chart, and chart-independence shrinks that neighborhood using continuity supplied by the local holomorphic expression. No proof contract or `verification.judge` record existed for this definition. Reflow reported unchanged; precheck: `0 checked, 0 failing`.

2. `items/ex-basic-riemann-surface-atlases.md` — Corrected two false remarks: the standard two-chart sphere atlas is contained in, but is not itself, the maximal compatible atlas; and the annulus's identity coordinate is an injective chart onto the annulus. The identity map supplies the counterexample to the prior claim that no affine coordinate covers the annulus injectively. Reflow completed; precheck passed (`1 checked, 0 failing`).

3. `items/lem-index-of-graph-bounded-region-boundary.md` — Changed the strict exterior rays to include their endpoint `q`, as required by the proof, while keeping them disjoint from the bounded set. Added an explicit square filling between the two graph arcs to witness that the boundary curve is null-homotopic in the region and hence null-homologous. Updated `research/frontier-36-complete-batch-28.proof-contracts.json` for that derivation and corrected the `empty` and `zero` boundary evidence, which had misstated the exterior and pinched-wall cases. The contract JSON parsed successfully; there was no stale judge record. Reflow completed; precheck passed (`1 checked, 0 failing`).

4. `items/thm-residue-theorem-compact-riemann-surface.md` — Corrected the Looijenga and McMullen locators: those cited arguments remove small disks and apply Stokes; they do not use the item's triangulation and edge-cancellation proof. Hinich §8.4.3 does use triangulation with poles in triangle interiors and cancellation of oppositely oriented edges. The item's independent cellulation proof remains its stated argument. No proof-contract change was needed for these bibliography corrections; no stale judge record existed. Reflow completed; precheck passed (`1 checked, 0 failing`).

5. `items/thm-topological-classification-compact-riemann-surfaces.md` — Replaced the Jost printed-page range, which did not cover §2.4.A, with exact theorem and section locators. Replaced the stale reference to a nonexistent “orientability appendix” with the actual orientability argument at step 5.1 of `thm-classification-of-compact-connected-surfaces`. No mathematical statement or proof step changed, so the proof contract was unaffected; no stale judge record existed. Reflow completed; precheck passed (`1 checked, 0 failing`).

6. `items/thm-riemann-hurwitz-formula.md` — Corrected the McMullen source locator from Chapter 6 to Chapter 3, Theorem 3.4, PDF pp. 23–24, which states the branched-cover Euler-characteristic deficit formula. No mathematical statement or proof step changed, so the proof contract was unaffected; no stale judge record existed. Reflow completed; precheck passed (`1 checked, 0 failing`).

## Uneditable defects

None found in the assigned pages, assigned items, or the dependency statements needed for these claims. No proposed withdrawal was made.

## Page verdicts

- `riemann-surfaces-branched-maps-and-differentials` (A page): no page-prose or summary defect found. Its classification, map, differential, residue, and ramification claims are supported by the reviewed item statements and dependencies.
- `riemann-surfaces-branched-maps-and-differentials-examples` (B page): no page-prose or summary defect found. The atlas, conic, coordinate-change, exponential, power-map, and hyperelliptic examples were checked against their current items. No B-page prose was edited.

## Blocker and coverage limitation

No blocker. The assigned pages and all assigned item files were opened. Dependency clauses were inspected where needed to trace the mathematical inferences; the source bibliography was not exhaustively audited beyond passages relevant to those inferences and the locator repairs above.
