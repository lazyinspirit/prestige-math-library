# Step 3a reader report — batch 73

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Batch: `73`

## Scope and opened inventory

Read the current batch manifest `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-73.pages.json`, both assigned pages, and all 19 assigned items. Read the item proofs in supplier-before-consumer order and checked the dependencies needed for their uses.

Pages:

- `library/knot-theory/hyperbolic-dehn-filling-and-exceptional-slopes.md` (A)
- `library/knot-theory/hyperbolic-dehn-filling-and-exceptional-slopes-examples.md` (B)

Assigned items:

- A: `lem-primitive-pair-defines-torus-slope`; `lem-meridian-preserving-torus-homeomorphism-extends-over-solid-torus`; `lem-commuting-affine-peripheral-holonomy-logarithm-factorization`; `lem-adjoint-hyperbolic-ltwo-one-forms-are-exact`; `lem-simultaneous-peripheral-full-turn-equations-have-small-solutions`; `def-multicusped-dehn-filling`; `lem-figure-eight-complement-punctured-torus-bundle`; `thm-augmented-finite-volume-hyperbolic-holonomy-coordinates`; `thm-small-augmented-holonomy-deformations-have-smooth-geometric-fillings`; `lem-zero-filling-of-fibered-knot-is-a-torus-bundle`; `lem-closed-hyperbolic-three-manifold-has-no-z2-subgroup`; `lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy`; `def-cusp-slope-length`; `lem-smooth-hyperbolic-dehn-filling-from-trivial-peripheral-holonomy`; `lem-dehn-filling-deformation-and-completeness`; `lem-one-cusped-deformation-parameters-and-holonomy`; `thm-thurston-hyperbolic-dehn-filling`.
- B: `cex-knot-kt-19-boundary-case`; `ex-knot-kt-19-worked-cases`.

Dependencies opened for claim verification: `lem-a-sphere-homeomorphism-extends-over-the-disk-by-the-alexander-trick`; `def-axiom-of-choice`; `def-countable-choice`; `def-choice-function`; `thm-choice-implies-dependent-implies-countable-choice`; `thm-riesz-representation-for-hilbert-space`; `thm-orthogonal-decomposition-by-a-closed-subspace`; `thm-banach-fixed-point`; `def-dual-space-of-a-normed-space`; `def-operator-norm`; `def-bounded-linear-operator`; `thm-poincare-lefschetz-duality-with-local-coefficients`; `thm-pair-long-exact-sequences-with-local-coefficients`; `lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice`; `thm-holomorphic-implicit-function-theorem`; `thm-smooth-partitions-of-unity-exist-on-manifolds`; `lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`; `thm-smooth-inverse-function-theorem-on-manifolds`; `lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients`; `thm-existence-of-geodesically-convex-neighborhoods`; `lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it`; `lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking`; `def-knot-exterior`; `def-oriented-link-in-s-three-and-ambient-isotopy`; `def-knot-meridian-and-preferred-longitude`; `def-oriented-slope-and-knot-dehn-filling`; `thm-knot-exterior-homology-and-longitude`; `lem-knot-exterior-has-peripheral-torus`; `lem-knot-tubular-exterior-and-boundary`; `thm-mayer-vietoris-sequence-in-singular-homology`; `cor-homology-of-spheres`; `cor-homotopic-maps-induce-the-same-map-on-singular-homology`; `def-normal-and-conormal-bundles-of-an-embedded-submanifold`; `def-tubular-neighbourhood-of-an-embedded-submanifold`; `def-finite-volume-hyperbolic-knot-exterior`; `def-pared-hyperbolic-structures-and-volume`; `thm-cartan-hadamard`; `ex-jacobi-fields-in-constant-sectional-curvature`; `def-universal-covering-space`; `def-deck-transformation-and-deck-group`; `thm-deck-group-of-a-universal-cover-is-the-fundamental-group`; `def-riemannian-isometry-and-local-isometry`; `lem-local-isometries-send-geodesics-to-geodesics`; `thm-path-lifting-for-covering-maps`; `def-covering-map-and-evenly-covered-neighbourhoods`; `thm-covering-maps-inject-fundamental-groups`; `thm-hopf-rinow`; `def-ideal-tetrahedron-shape-and-cusp-holonomy`; `lem-ideal-tetrahedron-shape-parameter-relations`; `lem-ideal-torus-cusp-holonomy-criterion`; `lem-horocusp-truncation-has-finite-volume`; `thm-regular-ideal-tetrahedron-volume`; `lem-finite-volume-hyperbolic-three-manifolds-have-finite-standard-cusp-decompositions`; `lem-rank-two-kleinian-subgroups-give-proper-embedded-horocusps`; `lem-figure-eight-ideal-gluing-and-cusp-completeness`; `def-elementary-geometric-half-twist`; `thm-geometric-braids-form-a-group`; `def-closure-of-a-geometric-braid`; `def-oriented-slope-and-knot-dehn-filling` (current in-run supplier, reviewed separately below).

Reviewed all five assigned TikZ diagrams: the primitive slope lattice segment, the meridian-disk cut of a solid torus, the Hopf-band plumbing square, the ideal tetrahedron shape labels, and the capped-torus bundle schematic. Their labels and conventions agree with the accompanying text; no diagram edit was needed.

Source checks included Farb–Margalit, *A Primer on Mapping Class Groups*, §§1.2.4–1.2.6 (Proposition 1.7, Lemma 1.8, Proposition 1.10); the complete relevant argument in Menal-Ferrer–Porti, *Twisted cohomology for hyperbolic three-manifolds*; Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4, §§4.1–4.5; Petronio–Porti, *Negatively Oriented Ideal Triangulations and a Proof of Thurston’s Hyperbolic Dehn Filling Theorem*, §§1–3; and Calegari, *Foliations and the Geometry of 3-Manifolds*, §5.8.1, Construction 5.37, Theorem 5.38 and Example 5.39, printed pp.206–207. For the last source, the stated Murasugi-sum theorem and example were read; its proof is recorded as an external input rather than claimed as reconstructed.

## Repairs made

- `lem-adjoint-hyperbolic-ltwo-one-forms-are-exact`: added the partition-of-unity theorem and compactly supported smooth-function density lemma as direct dependencies, stated them in Fact [F2], and cited [F2] in steps 3.1 and 6.1. This supplies the subordinate partitions and the smooth-density step used to extend the commutator estimate to all of (L^2).
- `thm-augmented-finite-volume-hyperbolic-holonomy-coordinates`: the current item already contained Fact [F5] and its four direct cover/partition dependencies; added the missing [F5] tag to step 1.2, where the locally finite good cover and subordinate partition are used.
- `lem-ideal-triangulation-gluing-equations-and-peripheral-holonomy`: rewrote step 4.1. It now separates cusp ends using the positive distance between their compact boundary tori, proves a Cauchy tail cannot switch ends, bounds its cusp depth, and places it in a compact truncated cusp before taking a convergent subsequence. The previous appeal to step 2.1 did not prove convergence for bounded-depth sequences.
- `lem-smooth-hyperbolic-dehn-filling-from-trivial-peripheral-holonomy`: added `lem-meridian-preserving-torus-homeomorphism-extends-over-solid-torus` as a direct dependency and stated it as Fact [F4]. Step 3.1 now compares the specified filling map with the model map, applies the extension result, and transports the smooth structure and metric while fixing the unfilled complement. This closes the gap between the local tube model and the arbitrary attaching map in the Dehn-filling definition.
- `lem-zero-filling-of-fibered-knot-is-a-torus-bundle`: added the same extension lemma as a direct dependency and Fact [F7]. Replaced the unsupported assertion that every gluing difference is a meridional twist with an explicit comparison to the model mapping-torus filling and the meridian-preserving extension.
- `lem-figure-eight-complement-punctured-torus-bundle`: recorded the exact external input in Fact [F3] and rewrote step 2.1 to invoke Gabai’s Murasugi-sum theorem for fibered surfaces and its monodromy composition, then Example 5.39 for the opposite-handed Hopf-band figure-eight. The previous product-collar gluing argument did not establish that the plumbing is fibered or identify its first-return map.

Regenerated the batch-73 proof-contract entries for these six items. No stale `verification.judge` record was present on the changed carriers. Reflow reported all six unchanged; precheck passed all six. The required single layout command reported `proof-layout: 6 items, 39 steps, 0 defects`.

## Uneditable findings

The following are published dependencies, so they were not edited. Each violates the uninterrupted-statement/definition rule by embedding links or citation-title residue in the complete formulation. They remain in the findings JSON as nonfatal `ill-formed` findings.

| Published dependency | Location and evidence | Assigned consumer |
|---|---|---|
| `thm-banach-fixed-point` | Statement lines 44, 47, 51–52, 56 and 60 contain inline wikilinks. | `lem-simultaneous-peripheral-full-turn-equations-have-small-solutions` |
| `thm-riesz-representation-for-hilbert-space` | Statement lines 32 and 36 interrupt the hypotheses/conclusion with title-like parentheticals naming the dual-space and operator-norm definitions. | `lem-adjoint-hyperbolic-ltwo-one-forms-are-exact` |
| `def-axiom-of-choice` | Definition line 43 leaves the citation-like residue “(Choice function)” inside the quoted formulation. | `lem-adjoint-hyperbolic-ltwo-one-forms-are-exact` |
| `def-oriented-link-in-s-three-and-ambient-isotopy` | Definition lines 31, 41, 43, 59, 73 and 105 contain inline wikilinks. | `lem-figure-eight-complement-punctured-torus-bundle` |
| `def-normal-and-conormal-bundles-of-an-embedded-submanifold` | Definition lines 30 and 32 contain inline wikilinks. | `lem-zero-filling-of-fibered-knot-is-a-torus-bundle` |
| `def-tubular-neighbourhood-of-an-embedded-submanifold` | Definition lines 31 and 34 contain inline wikilinks. | `lem-zero-filling-of-fibered-knot-is-a-torus-bundle` |
| `def-covering-map-and-evenly-covered-neighbourhoods` | Definition line 31 contains inline wikilinks within the definition. | `ex-knot-kt-19-worked-cases` |
| `def-universal-covering-space` | Definition line 35 contains inline wikilinks within the definition. | `lem-closed-hyperbolic-three-manifold-has-no-z2-subgroup` |
| `def-deck-transformation-and-deck-group` | Definition line 35 contains inline wikilinks within the definition. | `lem-closed-hyperbolic-three-manifold-has-no-z2-subgroup` |
| `def-riemannian-isometry-and-local-isometry` | Definition line 27 contains inline wikilinks in its explanatory formulation. | `lem-closed-hyperbolic-three-manifold-has-no-z2-subgroup` |
| `def-dual-space-of-a-normed-space` | Definition lines 26, 32 and 36 contain inline wikilinks. | `lem-adjoint-hyperbolic-ltwo-one-forms-are-exact` |
| `def-operator-norm` | Definition lines 35 and 42 contain inline wikilinks. | `lem-adjoint-hyperbolic-ltwo-one-forms-are-exact` |
| `def-bounded-linear-operator` | Definition lines 29–31 contain inline wikilinks. | `lem-adjoint-hyperbolic-ltwo-one-forms-are-exact` |
| `def-choice-function` | Definition lines 41, 45 and 46 contain inline wikilinks. | `lem-adjoint-hyperbolic-ltwo-one-forms-are-exact` |
| `lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it` | Statement line 36 contains an inline wikilink to `def-countable-choice`. | `thm-augmented-finite-volume-hyperbolic-holonomy-coordinates` |
| `thm-geometric-braids-form-a-group` | Statement lines 40, 45, 47, 49 and 61 contain inline wikilinks. | `ex-knot-kt-19-worked-cases` |
| `def-closure-of-a-geometric-braid` | Definition lines 47, 50, 51, 74, 95 and 97 contain inline wikilinks. | `ex-knot-kt-19-worked-cases` |
| `thm-cartan-hadamard` | Statement line 61 contains an inline wikilink. | `lem-closed-hyperbolic-three-manifold-has-no-z2-subgroup` |

The current `def-oriented-slope-and-knot-dehn-filling` dependency contains a mapping-class argument in step 3.1 and cites Saveliev, Lecture 1 §1.5, Theorem 1.5, pp.23–24. It resolves the earlier suspected meridian-preserving-map gap in its current bytes; no historical bytes were available for a hash-bound in-run finding, so none is routed.

## Page verdicts and blocker

- `hyperbolic-dehn-filling-and-exceptional-slopes` (A): page frontmatter only, body empty, no summary defect. The current page inventory is preserved.
- `hyperbolic-dehn-filling-and-exceptional-slopes-examples` (B): page frontmatter only, body empty, no summary defect. The current page inventory is preserved.

No batch-specific blocker remains. The recomputed autopilot status at `2026-10-21 09:14 UTC` showed the run still running, with no dispatch in flight and 75/109 items covered at 3a-read; batch 73 was still listed as missing at that snapshot. This report does not stamp or certify the run.
