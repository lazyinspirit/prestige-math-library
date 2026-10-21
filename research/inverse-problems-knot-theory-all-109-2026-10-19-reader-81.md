# Step 3a reader report — batch 81

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Review date: 2026-10-21  
Role: reader; scope: batch 81 only

## Opened inventory

Assigned pages:

- `library/knot-theory/ribbon-knots-and-slice-ribbon-problem.md`
- `library/knot-theory/ribbon-knots-and-slice-ribbon-problem-examples.md`

Both pages are draft, use `page_layout: compact-v1`, have empty bodies, and retain the assigned inventories. The required page dependencies were also opened: `library/knot-theory/smooth-and-topological-knot-concordance.md` and `library/knot-theory/terminating-computations-for-classical-knot-invariants.md`; both are present and frontmatter-only.

Assigned items opened in dependency order:

1. `def-ribbon-disk-and-ribbon-knot`
2. `lem-ribbon-singularity-local-resolution`
3. `op-slice-ribbon-conjecture`
4. `lem-reverse-mirror-sum-has-a-ribbon-immersion`
5. `lem-ribbon-immersion-and-no-maximum-disk-presentations-are-equivalent`
6. `thm-ribbon-knot-is-smoothly-slice`
7. `ex-knot-kt-28-worked-cases`
8. `cex-knot-kt-28-boundary-case`

Dependency items opened for the assigned arguments include `def-oriented-link-in-s-three-and-ambient-isotopy` (targeted Definition excerpt), `def-locally-flat-proper-surface-and-concordance-collars`, `def-smooth-knot-concordance`, `def-locally-flat-topological-knot-concordance`, `def-oriented-seifert-surface`, `alg-seifert-surface-from-diagram`, `lem-seifert-bands-embedded-orientable-boundary-correct`, `thm-every-oriented-knot-bounds-a-seifert-surface`, `def-oriented-seifert-surface-and-knot-genus`, `lem-smooth-and-topological-slice-genus-minima-exist`, and `def-smooth-and-topological-slice-genus`; the connected-sum and mirror chain (`def-knot-connected-sum-and-prime-knot`, `def-reverse-mirror-of-oriented-knot`, `lem-smooth-and-topological-knot-concordance-is-an-equivalence-relation`, `lem-knot-connected-sum-well-defined`, `lem-general-knot-reverse-mirror-sum-is-ribbon`); and the coloring chain (`def-regular-oriented-link-diagram`, `def-quandle-and-knot-coloring`, `lem-dihedral-operation-is-a-quandle`, `lem-dihedral-fox-coloring-count-is-reidemeister-invariant`). Published supplier statements opened include `def-countable-choice`, `def-axiom-of-choice`, `thm-choice-implies-dependent-implies-countable-choice`, `lem-every-oriented-link-admits-a-regular-projection`, `thm-isotopy-extension`, `thm-parametric-transversality`, `thm-morse-functions-and-handle-decompositions-correspond`, `cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points`, `thm-oriented-reidemeister-equivalence-theorem`, and `lem-the-trefoil-does-not-bound-a-smooth-proper-disk-in-the-four-ball`. The batch source-evidence file was used for navigation; its reading claims and author decisions were not treated as verdicts.

## Review and repairs

All eight assigned items were checked for their complete statements, assumptions, definitions, facts, proof steps, references, diagrams, and available contracts. The slice-genus construction and its nonemptiness/minimum prerequisites support the claimed genus-zero conclusion. The finite height-separation construction in `lem-ribbon-singularity-local-resolution` is valid: finitely many disjoint preimage arcs admit disjoint bump neighborhoods, the selected height separates paired points on each double arc, and the radial collar preserves the boundary. The reverse-mirror immersion and square-knot Fox 3-coloring computations agree with the stated orientations and crossing convention. The trefoil counterexample follows from the stated nonsliceness result and AC implying ACω.

Three authorized item repairs were made:

1. In `def-ribbon-disk-and-ribbon-knot`, the no-maximum movie definition now requires its boundary collar in the disk to be the radial product collar `c_D(y,s)=(1-s)y`. The previous wording allowed any proper disk, while the equivalence proof used a boundary collar on which radial distance has no critical points; the repository’s properness definition alone only says that the preimage of the ambient boundary is the surface boundary. This addition makes the movie convention match the proved hypothesis. The ribbon-singularity diagram was also corrected: the blue interior sheet now extends past both endpoints of the red double arc, while the gray proper sheet ends on the boundary knot there. The caption and `K` labels identify those boundary points. Ray’s *Slice Knots and Knot Concordance*, §1.1, Definition 1.4 and Proposition 1.5 (printed pp.3–4), and Owens’s *Knots and 4-Manifolds*, Lecture 1 (PDF pp.2–3), confirm the radial-movie and ribbon-singularity conventions: <https://aru-ray.github.io/documents/slicenotes.pdf>, <https://www.maths.gla.ac.uk/~bowens/papers/WB.pdf>.

2. In `lem-ribbon-immersion-and-no-maximum-disk-presentations-are-equivalent`, the second presentation now states the same radial product collar explicitly. Proof step 1.1 computes `rho(c_D(y,s))=(1-s)^2` before concluding that the critical points lie away from the boundary and are finite. The proof and definition therefore use matching collars.

3. In `op-slice-ribbon-conjecture`, the status review date is updated to 2026-10-21 and now records an official Zenodo metadata/attachment discrepancy. Hom and Park’s version-of-record introduction still calls the general converse open; Springer gives its version-of-record date as 18 June 2026: https://link.springer.com/article/10.1007/s00209-026-04050-3. Ray’s §1.1 records the established 2-bridge and most 3-strand pretzel cases. I downloaded the current PDF attached to Zenodo record 21752847 and inspected the relevant passages. Its title page is *A Reduction of the Slice–Ribbon Conjecture*, and its abstract says only `H_Q ⇒ SRC` and explicitly disclaims an unconditional proof of `H_Q` (PDF p.1). Assumption 10.5 leaves `H_nc` as a package-level hypothesis (p.61); Theorem 10.26 assumes `H_Q` and Corollary 10.27 lists `H_nc`, `H_red`, and `H_app` as remaining conditions (p.67); the conclusion preserves that conditional scope (p.69). The PDF’s SHA-256 is `06bba7a8f202569c6a708ff2478601c9b5fc9ee8132560c2c73e18b87a3d19ad`. The current official Zenodo API metadata instead titles the record *A Conditional Proof of the Slice–Ribbon Conjecture*, credits Jianming Wang, and its description claims an unconditional proof: https://zenodo.org/api/records/21752847. The metadata does not alter the conditional contents of the attached PDF. That attachment does not resolve the conjecture. The item now links to the current record metadata in its references and sources.

The batch proof contract was updated for the collar convention, the revised step 1.1 derivation, and the current Definition quotation in its four assigned consumer contracts. No changed item had a `verification.judge` record, so none was removed. Reflow returned `unchanged` for the three repaired items. Precheck reported `0 checked, 0 failing` for the definition and open problem, and `1 checked, 0 failing` for the equivalence lemma. The final batched layout command reported `proof-layout: 3 items, 6 steps, 0 defects`.

## Uneditable findings

Three published dependency definitions/statements used in assigned dependency paths still contain inline wikilinks inside their complete sections. These are `ill-formed` statement-format findings with fatal severity under the uninterrupted-statement rule. They were not edited because they are published content.

- `def-regular-oriented-link-diagram`, `## Definition`, lines 38, 44, 47, 63, and 65: the definition embeds wikilinks to the oriented-link, immersion, transversality, planar-isotopy, and Reidemeister definitions before the following references. Move those links to a `Definition references` section, one source per paragraph. The assigned consumer is `lem-reverse-mirror-sum-has-a-ribbon-immersion`.
- `thm-parametric-transversality`, `## Statement`, line 31: the first hypothesis includes `[[def-countable-choice]]` inline. Move it to the immediately following `Statement references` section. The assigned consumer is `lem-ribbon-immersion-and-no-maximum-disk-presentations-are-equivalent`.
- `def-oriented-link-in-s-three-and-ambient-isotopy`, `## Definition`, lines 31, 41, 43, 59, 73, and 105: the definition includes inline wikilinks, and the item has no following `Definition references` section. Move the links after the complete definition, each on its own source line and paragraph. The assigned consumer is `lem-reverse-mirror-sum-has-a-ribbon-immersion`, whose dependency closure reaches this definition through the connected-sum and regular-diagram definitions.

## Page verdicts

- `ribbon-knots-and-slice-ribbon-problem`: pass for page-local presentation and inventory. Its body is empty, its compact-layout flag is present, and the listed six items agree with the assigned page inventory.
- `ribbon-knots-and-slice-ribbon-problem-examples`: pass for page-local presentation and inventory. Its body is empty, its compact-layout flag is present, and its two examples agree with the assigned companion inventory.

## Coverage limits and blockers

The assigned items and the dependency arguments actually used by them were reviewed. I did not audit every item in the mechanically reachable 1,815-item transitive dependency closure. In particular, `thm-knot-concordance-is-an-abelian-group` remains in `deps` of two assigned items, but neither current proof cites or uses it; its full proof was not audited for this batch. The Hom–Park paper review covered §1 and its publication metadata, not the full paper. The Zenodo review covered the cited abstract, definitions, assumptions, theorem/corollary, and conclusion passages, not every proof in that manuscript.

There is no blocker to the batch-81 review. The latest live status check at 2026-10-21T09:42:41Z shows batch 81 remains owed in `3a-read` and lists no current blocker.
