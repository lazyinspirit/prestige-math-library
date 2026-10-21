# Step 3a reader report — batch 62

Run: inverse-problems-knot-theory-all-109-2026-10-19  
Role: reader  
Batch: 62

## Opened inventory

- Batch manifest: research/inverse-problems-knot-theory-all-109-2026-10-19-batch-62.pages.json.
- Pages: library/knot-theory/alexander-polynomial-from-seifert-matrices.md; library/knot-theory/alexander-polynomial-from-seifert-matrices-examples.md.
- Assigned items, reviewed in dependency order: lem-square-seifert-presentation-and-alexander-normalization; thm-seifert-determinant-is-the-knot-alexander-polynomial; cor-knot-alexander-normalization-symmetry-and-genus-bound; cor-alexander-polynomial-multiplies-under-connected-sum; ex-knot-kt-07-worked-cases; cex-knot-kt-07-boundary-case.
- All 24 manifest-listed suppliers were opened: def-knot-seifert-pairing-and-matrix; def-oriented-seifert-surface; def-one-variable-alexander-module-of-an-oriented-link; thm-seifert-matrix-presents-knot-alexander-module; lem-seifert-matrix-s-equivalence-under-isotopy; def-alexander-polynomial-from-the-first-elementary-ideal; thm-the-alexander-polynomial-is-an-oriented-link-invariant; def-axiom-of-choice; def-countable-choice; thm-choice-implies-dependent-implies-countable-choice; lem-seifert-matrix-skew-part-is-surface-intersection; def-elementary-ideals-of-a-finitely-presented-module; lem-elementary-ideals-are-independent-of-the-presentation; def-the-laurent-polynomial-ring; lem-units-and-powers-of-the-laurent-polynomial-ring; def-oriented-seifert-surface-and-knot-genus; def-knot-connected-sum-and-prime-knot; thm-collar-neighborhood-theorem; def-smooth-collar-of-a-manifold-boundary; lem-knot-connected-sum-well-defined; thm-every-oriented-knot-bounds-a-seifert-surface; lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups; prop-the-first-hurewicz-map-in-degree-one-is-abelianization; cor-contractible-nonempty-spaces-have-the-homology-of-a-point.
- Additional suppliers opened to check the knot-surface and connected-sum arguments: lem-knot-normal-circle-bundle-trivialization; def-seifert-matrix-s-equivalence; def-tubular-neighbourhood-of-an-embedded-submanifold; thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold; lem-knot-tubular-exterior-and-boundary; thm-knot-exterior-homology-and-longitude; thm-linking-number-equals-signed-intersection; lem-seifert-pairing-well-defined; def-oriented-intersection-number; def-local-oriented-intersection-sign; lem-knot-infinite-cyclic-cover-cut-and-paste-presentation; lem-seifert-cut-open-cover-alexander-module-presentation; lem-seifert-bands-embedded-orientable-boundary-correct; lem-every-oriented-link-admits-a-regular-projection; def-oriented-link-in-s-three-and-ambient-isotopy; thm-isotopy-extension.
- Contract evidence: research/inverse-problems-knot-theory-all-109-2026-10-19-batch-62.proof-contracts.json. I reviewed all six contract entries' citation mappings, derivations, boundary cases, finite checks, and axiom records against the current items; the contracts and earlier Step 1 readiness records were treated as evidence, not verdicts.

## Mathematical review and evidence

The square-presentation lemma correctly identifies the zeroth elementary ideal of the square presentation with the determinant ideal, including the empty determinant, and uses the skew-part lemma for evaluation at one. The determinant theorem correctly passes from equality of principal ideals to associate generators using that the Laurent ring is a domain and the determinant is nonzero.

The normalization corollary's reciprocal calculation follows from M(t)^T = -t M(t^{-1}) and the even matrix size. The exponent-width estimate, centered support, uniqueness of the symmetric representative normalized at one, and the simple pole of D_K at one are correctly derived from the determinant and unit conventions.

The connected-sum proof constructs the boundary sum of the two spanning surfaces, obtains the union basis, and makes the cross-linking entries zero using cycles supported in opposite 3-balls. The block determinant then gives multiplicativity. The worked example's matrices and determinant arithmetic are correct in its stated core orientation. The counterexample correctly uses the unknot: ev_1(1-t)=0 rules out a Laurent-polynomial inverse, so 1/(1-t) is not in the Laurent ring.

For external checks, I read Cattabriga and Francaviglia, Knot Theory and Applications, §6.2.3, Theorem 6.2.9 and Remark 6.2.10, Example 6.2.11, and Proposition 6.2.12(1), (2), (6), and (7), printed pp. 44–47. These give the Seifert-matrix presentation, determinant generator, trefoil example, reciprocal symmetry, knot evaluation, connected-sum product, and degree bound. Their negative-push form tA-A^T differs from the item's positive-push form V-tV^T by transpose and a unit sign. I also read Saeki, Knot Theory Lecture Notes, Chapter 7, Examples 7.3–7.5, printed pp. 77–79: Example 7.3 gives self-pairing -1 for the positive Hopf band, and Examples 7.4–7.5 give positive-push matrices for the right-handed trefoil and figure-eight surfaces. Reversing the second core orientation changes the source matrices' off-diagonal signs to the item's stated convention. The identification of the pictured genus-one surfaces with the stated square plumbings is the geometric reading of those diagrams.

The Rolfsen PDF cited by the items timed out on direct fetch; the checks above use the readable Cattabriga and Saeki sources instead. No batch-62 rendered evidence bundle was present in research or the run state directory.

## Edits and defects

No assigned item or page was edited. No assigned mathematical defect remains. No proof-layout, reflow, or precheck command was run because no item changed.

One confirmed defect is outside this batch's write scope. In batch-60 dependency def-knot-connected-sum-and-prime-knot, the TikZ diagram under “Diagram” draws each knot circle centered at x = ±3 with radius 1. The white gap strokes and joining-arc endpoints at x = ±2.15, y = ±0.35 have distance sqrt(0.85^2 + 0.35^2) < 1 from the relevant center, so they lie inside the circles rather than cutting or meeting the knot curves. The joining arcs float inside the disks; the construction sketch therefore contradicts its caption that the short knot arcs are removed and joined. This is reported as a nonfatal ill-formed diagram for consumer cor-alexander-polynomial-multiplies-under-connected-sum. The source remains current at the split check with SHA-256 3395a1e78947cb8818130a3d80737713ad167ef986b065df01f49580f1d3af9f.

## Page verdicts

- alexander-polynomial-from-seifert-matrices: clean. YAML frontmatter only; inventory, dependencies, draft status, and compact-v1 layout are consistent. No page body or summary is present.
- alexander-polynomial-from-seifert-matrices-examples: clean. YAML frontmatter only; example inventory, dependency on the A page, draft status, and compact-v1 layout are consistent. No page body or summary is present.

## Blockers and coverage limits

There is no blocker to the batch review. I checked every assigned item, both pages, all manifest-listed suppliers, the six batch proof-contract entries, and the specific additional suppliers used to verify the arguments. I did not recursively re-audit every foundational proof cited inside those supplier items. The only unresolved repair obligation is the out-of-scope batch-60 diagram reported above.
