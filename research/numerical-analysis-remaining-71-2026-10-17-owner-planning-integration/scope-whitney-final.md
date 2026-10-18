# Graded Whitney geometry final repair

Run: `numerical-analysis-remaining-71-2026-10-17`. Root granted sole ownership of the draft `lem-na-graded-whitney-mesh-size-and-boundary-shifts` after other writers drained. Read CLAUDE.md, the complete actual carrier, its matching affine mesh definition, its sole direct mathematical consumer and the focused downstream projection/compactness/Maxwell uses. No external source retrieval was needed or claimed.

## Confirmed defect and exact repair

Step 1.1 contained an unsupported spherical Jacobian formula and invoked positive reference solid angles without a local proof. Its continuation was also separated from the numbered proof row by a blank line, producing the proof-layout defect. The original Statement has no choice assumption, so the Countable Choice Lebesgue change-of-variables supplier used in the separate CR repair would not be an admissible substitute here.

Archived the exact current pre-edit carrier to `scope-whitney-before/lem-na-graded-whitney-mesh-size-and-boundary-shifts.md`. Replaced only the angular part of step 1.1 by an elementary finite packing argument. At each tetrahedron vertex, the edge matrix E=A_K R_i uses one of four fixed invertible reference matrices. Its least singular value is bounded below by c_sigma*h_K. Dividing by the edge lengths gives a unit-column matrix B with least singular value at least a>0, uniformly, and norm at most sqrt(3); take a<=1. With u0=(1/6,1/6,1/6), the ball centered at B*u0 of radius a/12 lies inside the open physical vertex cone and the unit ball: B inverse maps its points to vectors whose coordinates exceed 1/12. Distinct incident cones are disjoint because a common cone direction gives a short ray inside both tetrahedron interiors. Their balls are thus disjoint and the centers are separated by at least a/6. Partition [-1,1]^3 into M^3 boxes with M>12*sqrt(3)/a. Box diameters are below a/6, so at most one center lies in each box. The star cardinality is at most M^3. This uses only finite linear algebra, a fixed finite grid and pigeonhole; it imports no surface-area formula, integration theorem or choice axiom.

Joined the entire continuation into the single numbered step 1.1 paragraph. The previous initial singular-value estimate, subsequent face-link argument, local diameter comparability and nodal mesh-size construction are retained. The Statement, Facts, all dependencies and metadata, and the entire remaining five proof rows are byte-identical to their archived current counterparts. In particular the graded inward/outward shifts, distance bounds, bi-Lipschitz estimates, patch locality/overlap and absence of a global mesh-size ratio remain unchanged. No helper or published write is required.

## Focused actual consumer dispositions

Repository searches show one direct item consumer, `lem-na-whitney-averaged-pullback-moment-bounds`, and the discrete de Rham page placement. Read that entire consumer: its F1 and steps 2.1, 3.2 and 4.1 use the unchanged bounded displacement, patch size comparability and uniform overlap; the newly proved finite star bound supplies exactly these constants through the original geometry proof. Its smoothing, moment, full/relative commutation and boundary arguments do not use a spherical Jacobian. No change is needed.

Read the full correction/strong-convergence lemma and bounded commuting projection theorem. Their finite inverse correction, uniform bounds, projection identities, compact-uniform convergence and graph commutation consume precisely the unchanged averaged-pullback estimates. Read the discrete-gradient lift gap lemma, discrete compactness/Poincare theorem, compatible magnetic initial projection and smooth Maxwell error theorem: their projection/relative-space uses retain the same interfaces and constants. The discrete de Rham page's mathematical description and placement remain accurate. Searches also identify the downstream spectral theorem and cube examples as conditional consumers of these same unchanged projection/compactness interfaces; no Statement or Definition changes here require a new whole-frontier audit or edits to those carriers.

## Final explicit layout and release

After the final source edit:

```text
node tools/proof-layout.mjs items/lem-na-graded-whitney-mesh-size-and-boundary-shifts.md
proof-layout: 1 items, 6 steps, 0 defects
```

Only `items/lem-na-graded-whitney-mesh-size-and-boundary-shifts.md` changed. No pages, verification metadata, manifests, contracts, levels, gates, tests or native controls/history were changed. Source writing is drained and released to root.
