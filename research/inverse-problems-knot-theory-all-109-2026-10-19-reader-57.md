# Step 3a reader report — batch 57

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Batch: `57`

## Inventory opened

Assigned pages:

- `library/knot-theory/knot-exteriors-and-peripheral-systems.md` (A page)
- `library/knot-theory/knot-exteriors-and-peripheral-systems-examples.md` (B page)

Assigned items, read in dependency order:

1. `def-knot-exterior`
2. `lem-knot-normal-circle-bundle-trivialization`
3. `def-knot-meridian-and-preferred-longitude`
4. `lem-knot-tubular-exterior-and-boundary`
5. `lem-knot-exterior-has-peripheral-torus`
6. `thm-knot-exterior-homology-and-longitude`
7. `ex-knot-kt-02-worked-cases`
8. `cex-knot-kt-02-boundary-case`

Also opened the two page prerequisites named by the assigned A page: the published `pontryagin-thom-and-framed-cobordism` page and `oriented-links-braid-closures-and-markov-equivalence` page. Both assigned pages currently contain YAML frontmatter only, have `page_layout: compact-v1`, and have inventories matching the batch manifest.

Published item suppliers read for their applicable interfaces: `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-normal-and-conormal-bundles-of-an-embedded-submanifold`, `def-tubular-neighbourhood-of-an-embedded-submanifold`, `def-countable-choice`, `prop-normal-and-conormal-bundles-are-smooth-vector-bundles`, `thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold`, `def-cellular-homology`, `def-cellular-boundary-from-three-consecutive-skeleta`, `thm-cellular-boundary-is-the-incidence-degree-matrix`, `thm-cellular-homology-computes-singular-homology`, `thm-mayer-vietoris-sequence-in-singular-homology`, `cor-homology-of-spheres`, and `cor-homotopic-maps-induce-the-same-map-on-singular-homology`. The batch cross-batch dependency index is empty.

I also opened the assigned proof-contract, source-coverage, notes, and cross-batch-dependency artifacts. They were treated as evidence and checked against current item text. The authoring notes contain historical validation claims; they did not determine this review.

## Item review

- `def-knot-exterior`: The definition is conditional on supplied tubular data and clearly makes the tube choice part of the input. It does not silently assert tube existence. The exterior, retained boundary and induced orientations are consistent. Its references follow the complete Definition.
- `lem-knot-normal-circle-bundle-trivialization`: The orthogonal-plane model identifies the quotient fibres, and the finite clutching argument closes the endpoint frame by a path in `GL+(2,R)`. I added a direct reference for the standard supporting fact that an oriented vector bundle over `S^1` is trivial: Hatcher, *Vector Bundles and K-Theory*, §1.2, Proposition 1.14 and the discussion of `S^1`, printed pp. 25–26. The source states the oriented-bundle classification and concludes that an orientable bundle over `S^1` is trivial. The item’s proof remains a local proof, not an imported argument.
- `def-knot-meridian-and-preferred-longitude`: The meridian orientation, degree-one condition, homological zero condition and conjugacy convention are stated without claiming existence or uniqueness. The theorem later supplies the claimed existence and unique homology class. References follow the complete Definition.
- `lem-knot-tubular-exterior-and-boundary`: The use of `AC_omega` matches the tubular-neighbourhood supplier. Compactness of `S^1` provides a uniform radius; the image tube is compact with torus boundary; and the explicit radial homotopy fixes the exterior and avoids the knot. No missing premise was found.
- `lem-knot-exterior-has-peripheral-torus`: The one-vertex torus CW structure has zero first differential and zero commutator incidence boundary, giving the stated meridian/section basis. The diagram’s horizontal section, vertical meridian and diagonal sum class agree with its product coordinates and edge identifications; the proof is independent of the diagram.
- `thm-knot-exterior-homology-and-longitude`: The open cover is valid, the three radial deformation retractions stay in their domains, and the overlap maps reduce to the two boundary inclusions. Mayer–Vietoris gives the direct-sum decomposition; the section and fibre-disk images then show the meridian generates exterior homology. The kernel calculation gives the unique degree-one homology class and an embedded representative. The item proof uses `AC_omega` and the Mayer–Vietoris route; it does not use Alexander duality or full AC.
- `ex-knot-kt-02-worked-cases`: The explicit tube map and complementary solid-torus coordinates are correct. The orientation check makes increasing phase in `z_2` the positive meridian, and the displayed section bounds the stated disk in the exterior. The diagram matches the `(t, theta)` product marking and its horizontal/vertical classes.
- `cex-knot-kt-02-boundary-case`: The slope `[lambda]+[mu]` has degree one, is primitive, and maps to the nonzero meridian generator. The parametrized curve is embedded because its first coordinate is the identity on `S^1`. The counterexample refutes the stated universal claim.

## Source checks

- Hatcher, *Vector Bundles and K-Theory*, §1.2, Proposition 1.14 and the `S^1` discussion, printed pp. 25–26: oriented real bundles over `S^k` are classified by homotopy classes into `GL_n^+(R)`; the `S^1` case concludes every orientable bundle is trivial. [Source](https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf)
- Hatcher, *Algebraic Topology*, Theorem 3.44 and Corollary 3.45, printed pp. 254–256: relative duality for compact locally contractible subsets and the sphere-complement Alexander duality formula. The knot image is a compact locally contractible proper subset. The current theorem proves its result by Mayer–Vietoris and does not import Alexander duality. [Chapter 3](https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf)
- Hatcher, *Algebraic Topology*, §2.2, Example 2.36: the genus-one surface CW structure has one 0-cell, two 1-cells and a 2-cell attached by a commutator; both cellular differentials vanish, yielding the torus `H_1` basis calculation. [Chapter 2](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf)
- Cattabriga–Francaviglia, §4.1 and Example 4.1.2: the compact exterior convention, torus boundary, and unknot exterior example; §4.4, printed pp. 24–25, gives meridian, longitude and peripheral-system conventions, including the homological zero-longitude description. [Lecture notes](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)
- Calegari, *Introduction to Knot Theory*, §3.3, printed p. 29: the relevant excerpt defines a meridian as a small oriented circle bounding a disk that intersects the oriented knot transversely once. Only this relevant excerpt was retrieved; the full PDF was not loaded. [Lecture notes](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

## Proof-contract findings not edited

The current `tools/proof-contract.mjs` requires an `evidence` string for each boundary with `status: checked`. Five assigned proof-contract entries instead give only `reason` for checked boundaries: `lem-knot-normal-circle-bundle-trivialization`, `lem-knot-tubular-exterior-and-boundary`, `lem-knot-exterior-has-peripheral-torus`, `ex-knot-kt-02-worked-cases`, and `cex-knot-kt-02-boundary-case`. These entries cannot pass the current contract validator. The normal-bundle contract also describes endpoint matching at steps 1.2 and 1.3, while the current proof closes the endpoint frame at step 2.1.

The `thm-knot-exterior-homology-and-longitude` contract is out of sync with the current proof. Its derivation rows describe circle cohomology and Alexander duality at steps 1.2 and 2.1, but those current steps construct the open cover and its radial deformation retractions. Its checked-boundary evidence also names nonexistent current steps 1.3, 2.4 and 2.5 and states a full-AC obligation absent from the current `AC_omega` statement and proof. The current proof-contract validator will reject the nonexistent step references. These contract-only defects were not edited because the dispatch limits repairs to assigned item prose/A-page prose, except for contracts affected by a material item repair; the bibliography-only citation addition above did not change these proofs or their fact-use contracts. They are included in the findings JSON.

## Page verdicts

- `knot-exteriors-and-peripheral-systems` (A): **Mathematical content passes.** Its six assigned item links match the manifest, its body is empty as required, and its compact layout flag is present. The associated proof-contract findings remain fatal to the current contract gate.
- `knot-exteriors-and-peripheral-systems-examples` (B): **Mathematical content passes.** Its two example/counterexample entries match the manifest, its body is empty, and its compact layout flag is present. Its two proof-contract sidecars have the checked-boundary schema issue described above.

## Edit and validation

- Added the precise Hatcher source reference to `items/lem-knot-normal-circle-bundle-trivialization.md`; no mathematical statement or proof step changed.
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-knot-normal-circle-bundle-trivialization.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-knot-normal-circle-bundle-trivialization.md`: passed, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/lem-knot-normal-circle-bundle-trivialization.md`: 1 item, 3 steps, 0 defects.
- No item statement/definition changed, no page prose was added, and no judge/stamp was created.

## Blockers and coverage limits

The live autopilot status at handoff remains in `3a-read`, with batch 57 still listed among the missing reader outputs and no worker shown in flight. It reports a separate `3a-split` blocker: batch 50 failed three times. The six proof-contract findings above are batch-local gate blockers. No out-of-batch carrier was edited.

The relevant Calegari page-29 meridian passage was available through the search excerpt, but the web reader could not load the full 12.8 MB PDF. This did not limit the mathematical review because the cited item’s proof is self-contained. I reviewed the exact current statements of the published dependencies and their applicable interfaces; I did not recursively re-audit every proof in their transitive dependency closures.
