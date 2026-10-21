# Step 3a reader report — batch 98

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Scope: batch `98`

## Assigned inventory opened

Pages:

- `library/knot-theory/knot-exterior-rigidity-and-the-complement-theorem.md`
- `library/knot-theory/knot-exterior-rigidity-and-the-complement-theorem-examples.md`

Items, read in dependency order:

- `def-instanton-surgery-triangle-data`
- `lem-trefoil-knot-group-is-nonabelian-with-abelianization-z`
- `lem-property-p-instanton-surgery-triangle-and-rank-input`
- `thm-property-p-for-nontrivial-knots`
- `lem-s-three-filling-detects-the-meridian-slope`
- `thm-gordon-luecke-knot-complement-determines-knot`
- `ex-knot-kt-15-worked-cases`
- `cex-knot-kt-15-boundary-case`

The eight current item carriers and both page carriers match the dispatch. The batch-98 proof contracts were opened and checked against the current Facts and proof steps. No carrier was edited.

## Dependency inventory and verification

Opened the page prerequisites `wirtinger-presentations-and-knot-groups`, `knot-exteriors-and-peripheral-systems`, `dehn-surgery-on-knots-and-homology`, `khovanov-homology-detects-the-unknot`, and `hyperbolic-dehn-filling-and-exceptional-slopes` at their YAML frontmatter. Read the item-level interfaces and relevant arguments needed from:

- Batch 56: `thm-knot-wirtinger-presentation-correctness`, `lem-wirtinger-local-meridian-conjugacy`, `def-knot-planar-code`, `lem-wirtinger-crossing-ball-cover`, `lem-knot-group-infinity-collar`, and `alg-knot-wirtinger-presentation-from-code`.
- Batch 57: `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `thm-knot-exterior-homology-and-longitude`, `lem-knot-tubular-exterior-and-boundary`, and `lem-knot-exterior-has-peripheral-torus`.
- Batch 68: `def-oriented-slope-and-knot-dehn-filling` and `lem-knot-surgery-first-homology-mayer-vietoris`.
- Batch 73: `lem-meridian-preserving-torus-homeomorphism-extends-over-solid-torus`.
- Batch 97: `lem-nontrivial-knot-exterior-boundary-incompressible`.
- Other current-run topology support: `lem-essential-curves-on-torus-with-same-primitive-class-are-isotopic`, `lem-knot-genus-zero-iff-unknot`, `lem-compact-smooth-boundary-preimage-surfaces-admit-neat-embedding-isotopies`, and `thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds`.
- Published support: `def-axiom-of-choice`, `prop-the-first-hurewicz-map-in-degree-one-is-abelianization`, `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-based-loops-and-fundamental-group`, `thm-fundamental-group-laws`, `cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy`, and `lem-a-sphere-homeomorphism-extends-over-the-disk-by-the-alexander-trick`.

The cited published Kronheimer–Mrowka result was checked at the primary paper, *Dehn surgery, the fundamental group and SU(2)*, Theorem 1, printed p. 741 / PDF p. 1: it assumes a nontrivial knot in (S^3), a rational coefficient (r) with (|r|\le2), and concludes that the surgery group admits a homomorphism to (SU(2)) with noncyclic image. The item's slope convention (p\mu+q\lambda) makes (r=p/q); when (|p|=1) and (q\ne0), (|r|=1/|q|\le1). The exact source and result are at <https://people.math.harvard.edu/~kronheim/hrpthree.pdf>. This is an external imported theorem, not a local gauge-theory proof.

## Mathematical review

- `def-instanton-surgery-triangle-data`: the definition distinguishes candidate input data from analytic existence, regularity, compactness, gluing, exactness, and invariance claims. The flow sign and displayed four-dimensional perturbation agree with the stated product orientation.
- `lem-trefoil-knot-group-is-nonabelian-with-abelianization-z`: the diagram has three underpasses and the stated triples agree with the orientation-preserving half-turn charts. The three conjugacy equations reduce to (aba=bab); the abelianization is ℤ and the surjection to (S_3) proves nonabelianness. The diagram is consistent with the text.
- `lem-property-p-instanton-surgery-triangle-and-rank-input`: the rational-coefficient inequality and imported theorem hypotheses match; the statement does not assert a surgery-triangle or rank theorem.
- `thm-property-p-for-nontrivial-knots`: the (p=0), (|p|=1), and (|p|\ge2) cases cover all coprime nonmeridional slopes. The homology cases imply nontrivial π₁ by the stated Hurewicz result; the numerator-one case uses the checked external theorem.
- `lem-s-three-filling-detects-the-meridian-slope`: the homology and Property P exclusions leave only (q=0), and coprimality gives (p=\pm1); the converse is the original meridional gluing.
- `thm-gordon-luecke-knot-complement-determines-knot`: the orientation-compatible filling transport, nontrivial-knot meridian detection, unknot/nontrivial separation, and solid-torus extension steps preserve their stated categories and orientation signs. Its use of the smooth Loop theorem is limited to the theorem's first assertion about a continuous disk map with essential boundary.
- `ex-knot-kt-15-worked-cases`: the matrix columns and the explicit map ((z,w)\mapsto(w^2z,w)) give the stated meridian and longitude images; the map preserves product orientation. The universal-cover rectangle has the stated slope endpoint ((2,1)).
- `cex-knot-kt-15-boundary-case`: the crossing-free unknot group is ℤ, while the trefoil group is nonabelian; the exterior homology result identifies both decorated abelianized peripheral triples with ((\mathbb Z,1,0)). This refutes the stated classification claim.

All assigned item statements/definitions/examples are complete before their references sections and contain no inline hyperlinks. The three assigned TikZ diagrams (trefoil, surgery-gluing schematic, and longitude twist) and the Gordon–Luecke filling square match their labels and text. Both assigned pages have empty Markdown bodies as required.

## Uneditable finding

`thm-smooth-loop-theorem-and-incompressibility-criterion-in-orientable-three-manifolds` is a current-run draft dependency, but it is not an item carrier in any current run batch manifest, so no exact producer batch is available for routing. In its `Proof 5.1`, the incompressibility criterion says to put the disk-map interior “in finite PL general position relative to (S)” and then infers that the preimage is a finite union of circles. The item's listed triangulation and Loop-theorem inputs provide finite compatible triangulations and the first Loop-theorem assertion, but do not state or prove relative approximation/general position for this arbitrary disk map. The criterion needs a finite relative PL/smooth approximation and general-position theorem preserving the boundary class and collar, or a proof of that construction. This gap is in the supplier's separate incompressibility criterion; the assigned Gordon–Luecke argument uses its first assertion, whose PL Loop-theorem input has the same normal-subgroup scope. No edit or withdrawal was made outside batch 98.

## Page verdicts

- `knot-exterior-rigidity-and-the-complement-theorem`: **Pass for this reader review.** The YAML-only page body is empty, the six-item inventory agrees with the manifest, and the required-page links correspond to the knot-group, exterior, surgery, meridian-extension, and boundary-incompressibility context used by the listed items. The Khovanov page is a page-level context edge; no Khovanov rank result is used in the Property P proof.
- `knot-exterior-rigidity-and-the-complement-theorem-examples`: **Pass for this reader review.** The YAML-only page body is empty, its two example IDs match the manifest, and its prerequisite is the A page.

## Changes, checks, and blockers

- Edits: none. No assigned defect requiring an authorized repair was confirmed.
- No item was changed, so reflow, precheck, and `proof-layout` were not run. No gate, judge, or self-certification was attempted.
- The live run status also reports an unrelated `3a-split` blocker for batch 71 (three failed split attempts). There is no batch-98 task-local blocker; the missing manifest batch for the smooth Loop helper limits batch-specific routing only.

## Coverage limits

The assigned carriers, page frontmatter, proof contracts, relevant item-level dependency statements/proofs, and exact Property P theorem statement were reviewed. The gauge-theoretic proof behind the imported Kronheimer–Mrowka theorem was not reconstructed or audited in full. Foundational transitive dependencies outside the arguments listed above were not exhaustively re-proved. The smooth Loop helper's current-run file has no current-manifest item carrier, preventing an exact producer-batch assignment.
