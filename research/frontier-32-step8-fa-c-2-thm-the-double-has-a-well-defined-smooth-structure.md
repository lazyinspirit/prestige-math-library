# FA terminal evidence — queue c, item 2

Decision: repaired. Item: `thm-the-double-has-a-well-defined-smooth-structure`.

Serial checkpoint: the recorder accepted item 1 as repaired at itemHashGuard `bb8f8cd99dc4860ea686affbbe3acc2d99843897c9727cdeb79200a48e0878b8` before this item was substantively opened.

## Independent review and rejection basis

Read the current statement and entire proof, all original direct dependencies, the collar definition, batch-15 A/B pages, manifest, coverage entries and scaffold conventions, reader-15 report and refute-15 findings, group-c conventions and concerns, Sol's step8-c repair report and exact adjudication, both Terra rejection rows, and the batch and aggregate proof-contract entries. The former contracts classified the whole comparison as a routine conclusion and marked the choice and boundary cases inapplicable; neither contained a substantive collar-uniqueness risk justification. Read the local-extension corollary and disk-double example to check that the repair preserves the local-model and global-collar interfaces.

The first Terra rejection correctly required AC_omega for the available global collar theorem. Sol propagated it to the global result and preserved the unconditional one-chart local model. That repair is retained. The final rejection is also correct: arbitrary collar embeddings can have tangential drift and different transverse derivatives. Interpolating their normal parameters alone neither constructs the claimed ambient map nor proves injectivity or smooth invertibility. The existing collar theorem asserts existence, not uniqueness.

The repaired statement explicitly quantifies a smooth Hausdorff second-countable M, distinguishes an individual local seam model from the atlas belonging to a fixed global collar, and retains the full seam-fixing and label-preserving comparison for noncompact manifolds. It does not claim that all charts obtained by reflecting arbitrary boundary charts belong to one common smooth atlas.

## Verified sources and precise limits

1. Ioan Mărcuț, Manifolds (2017), §15.1, especially Lemma 15.1.13 and Theorem 15.1.12, printed p. 141 / PDF index 140:
https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf
Read the complete inward-field and collar proof through its final reparametrization. It supports convexity of inwardness and the flowout differential, identity on boundary tangent directions with inward velocity in the last direction. Its displayed global proof explicitly treats compact boundary only. The repair does not import that compactness-based uniform-time conclusion into the noncompact comparison.

2. Will Merry, Differential Geometry (2021), Lecture 24, Definition 24.26 and Proposition 24.27, PDF indices 201–202, and the boundary-calculus discussion at index 203:
https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf
Read the complete definition, all three parts of the proposition, and the ensuing smooth-atlas and local-extension discussion. They support extension smoothness on half-spaces and the use of ordinary tangent-space components at boundary points. Extending vector-field components and gluing them in a vector bundle is legitimate; averaging collar maps into M would not be.

3. Michael Usher, Vector Bundles (Fall 2012), §8.1, Theorem 8.16 and the entire double-construction paragraph following it, printed p. 87 / PDF index 86:
https://usherugamath.wordpress.com/wp-content/uploads/2018/09/vbnotes.pdf
The signed product collar glued to two interiors supplies the fixed-collar smooth double with its original closed halves. This source establishes that construction, not the noncompact uniqueness argument. The latter is proved explicitly in the repaired item from the locally published ODE, cutoff, partition and exhaustion statements below. No search snippet or aggregator is used as mathematical evidence.

## Mathematical checks of the new argument

Steps 1.1–3.1 give the unconditional local chart, fixed-collar transition formulas, and quotient topology. The folding map separates unequal underlying points; different labels over one point occur only in the disjoint interiors. Symmetric images of a countable base, together with the two interior bases, prove second countability. Empty boundary, empty M and dimension zero reduce to the disjoint union. The argument also works at n=1 with a zero-dimensional boundary coordinate.

Steps 4.1–5.1 interpolate the velocity fields X_i=(c_i)_*partial_t, not the collar embeddings. In one signed c_0 normal coordinate r, dr(X_i)>0 persists in a neighbourhood, hence for every convex combination. The parameter-dependent flowout has invertible boundary differential. If two flowout segments for one parameter met, uniqueness would put them on one trajectory with two r=0 crossings, contradicting strict monotonicity. Consequently it is an actual smooth family of collar germs with smooth joint inverse. Compactness is used only for the parameter interval locally near each boundary point; widths can tend to zero at infinity. Endpoint flowouts are exactly c_0 and c_1 by ODE uniqueness.

Steps 6.1–7.1 construct the generator V_s=partial_s C_s composed with C_s inverse, which vanishes at every seam point. Local half-space extensions and a partition on the already constructed boundaryless D_0 extend it near the seam. This avoids circular use of collar-choice independence. A proper h on D_0 and a cutoff supported where |dh(V_s)|<1 produce a global smooth field Z_s with |dh(Z_s)|<=1, still agreeing with V_s near the full closed set [0,1] times boundary M.

Step 8.1 proves completeness over the required finite time interval: every trajectory remains in one compact h-sublevel, and finitely many local evolution neighbourhoods give uniform continuation time. Reverse evolution proves bijectivity and smooth inverse. Zero velocity on the seam fixes it pointwise; uniqueness forbids any trajectory from crossing it. Thus the time-one map restricts to a diffeomorphism H of M. Step 9.1 uses compactness of the parameter interval locally once more to show H(c_0(p,t))=c_1(p,t) on a neighbourhood of each boundary point. Doubling the same H on both labels therefore has coordinate expression (y,t) in source c_0 and target c_1 seam charts. This checks all derivatives across t=0, not just matching values or first derivatives.

## Dependencies, metadata and validation

All direct dependencies were opened in full:

- `def-double-of-a-smooth-manifold-with-boundary`
- `thm-collar-neighborhood-theorem`
- `thm-smooth-inverse-function-theorem-on-manifolds`
- `thm-smooth-dependence-of-ode-solutions-on-parameters`
- `thm-smooth-partitions-of-unity-exist-on-manifolds`
- `thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set`
- `thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function`
- `thm-time-dependent-vector-fields-have-local-smooth-evolution-operators`

The inverse theorem is applied to open smooth extensions, not directly to a half-space as though it were open. Partitions, cutoff, exhaustion and evolution are applied to D_0 or its product with the real parameter line, both already boundaryless. Countable choice remains an explicit global hypothesis throughout. The added dependencies are published prerequisites of this page, with literature-derived or ai-altered statements. No dependency item was edited, so no prerequisite-repair licence is needed.

Updated only this item, its batch-15 manifest strategy and dependency list, and its exact entries in `research/frontier-32-batch-15.proof-contracts.json` and `research/frontier-32-proof-contracts.json`. Both contracts now map all nine derivations, exact dependency quotations and uses, actual boundary cases, and the noncompact comparison risk. Existing coverage sources remain correct; the double-construction source is now included in the item's references. No other owner's item or independent review was changed, and no judge stamp was created.

Focused checks: precheck passes (one proof); rendercheck passes; both strict proof-contract checks pass with zero errors and warnings; batch manifest dependencies pass (67 items, zero errors); repository dependency check passes with no cycles or unresolved references and no warning naming this item. Batch content policy passes. The initial precheck requested phase renumbering; the stored proof and both contracts were corrected before the passing checks.

No mathematical obligations remain. Next action: record these final item bytes as repaired through the prescribed terminal recorder; do not return the item to Sol or request a third judge.
