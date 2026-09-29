# Step 5a reader report — batch 24

Run: `frontier-36-complete`  
Role: reader  
Label: `reader-24`

## Opened inventory

- Batch manifest: `research/frontier-36-complete-batch-24.pages.json`.
- Assigned A page: `library/braid-groups/braids-as-fundamental-groups-of-configuration-spaces.md`.
- Assigned B page: `library/braid-groups/braids-as-fundamental-groups-of-configuration-spaces-examples.md`.
- Assigned items, read from their current Markdown carriers:
  - A page: `def-motion-of-an-unordered-point-configuration`, `lem-a-configuration-loop-traces-a-geometric-braid`, `lem-path-homotopy-traces-braid-isotopy`, `lem-a-geometric-braid-slices-to-a-configuration-loop`, `lem-slicing-and-tracing-are-mutually-inverse-on-classes`, `lem-stacking-corresponds-to-loop-concatenation`, `thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations`, `cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations`, `prop-geometric-endpoint-permutation-equals-covering-monodromy`, and `thm-geometric-and-configuration-braid-models-are-canonically-isomorphic`.
  - B page: `ex-a-half-twist-loop-traces-the-standard-generator`, `ex-a-pure-full-twist-as-an-ordered-configuration-loop`, `cex-forgetting-labels-can-close-a-nonlooping-coordinate-path`, and `cex-a-crossing-diagram-without-height-monotonicity-does-not-define-a-configuration-loop`.
- Required page context: `library/braid-groups/geometric-braids-and-artin-generators.md`, `library/braid-groups/ordered-and-unordered-configuration-spaces.md`, and `library/topology/the-fundamental-group.md`.
- Dependency items opened for the claims under review: `def-ordered-configuration-space`, `def-unordered-configuration-space`, `def-geometric-braid-with-setwise-endpoints`, `def-braid-group-from-unordered-configurations`, `def-pure-braid-group-from-ordered-configurations`, `def-based-loops-and-fundamental-group`, `def-homotopy-relative-and-path-homotopy`, `def-braid-isotopy-relative-top-and-bottom`, `def-product-topology`, `def-subspace-topology-top`, `def-elementary-geometric-half-twist`, `lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent`, `lem-disjoint-coordinate-neighborhoods-evenly-cover-unordered-configurations`, `lem-t0-t1-and-hausdorff-are-hereditary`, `lem-the-closed-disk-is-a-manifold-with-boundary`, `thm-path-lifting-for-covering-maps`, `thm-homotopy-lifting-for-covering-maps`, `prop-stacking-of-geometric-braids-is-well-defined`, `thm-geometric-braids-form-a-group`, `thm-fundamental-group-laws`, `def-endpoint-monodromy-of-a-configuration-loop`, `thm-configuration-braid-pure-braid-short-exact-sequence`, `def-induced-homomorphism-on-fundamental-groups`, `def-group-homomorphism`, `def-injection-surjection-bijection`, `def-group-isomorphism-and-automorphism`, `def-kernel-and-image-of-group-homomorphism`, `thm-image-subgroup-and-kernel-normal`, `def-complex-metric-convergence-and-continuity`, `thm-complex-exponential-is-entire-with-derivative-itself`, `cor-complex-differentiability-implies-continuity`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-complex-exponential-addition-and-real-extension`, `cor-pi-is-the-first-positive-sine-zero`, `thm-sine-cosine-signs-monotonicity-and-ranges`, `thm-quarter-turn-values-and-shift-formulas`, `lem-complex-conjugation-and-modulus-laws`, `lem-vector-operations-are-continuous-in-a-normed-space`, and `lem-continuity-is-local-and-pastes`.
- Read `briefs/reader.md` and opened the batch proof-contract snapshot as navigation/evidence. Its terminal rendering was truncated, so I did not use its unseen clauses to certify claims. Mathematical decisions below come from the current assigned carriers and the dependency statements opened for this review, not prior dispositions.
- External source checks: Juan González-Meneses, *Basic results on braid groups*, arXiv:1010.0321, §1.3 (printed pp. 5–6: unordered configuration model, setwise endpoints for general braids, and stacking), §1.5 (printed pp. 7–8: standard-generator figure), and §2.1, equation (2.1) (printed p. 11: pure subgroup as the kernel of strand permutation); Joan S. Birman and Tara E. Brendle, *Braids: A Survey*, §1.1 (author manuscript pp. 3–5: ordered/unordered quotient and configuration-group model).

## Audit and repairs

All ten A items and all four B items are currently draft carriers. I checked their definitions and hypotheses, lift and slice constructions, product order, endpoint and monodromy conventions, class-level inverse maps, boundary cases, witnesses, calculations, titles, and page summaries.

The open-to-closed inclusion is used at the same explicit base tuple and orbit. The closed-disk loop need not itself be interior; the cited local radial-equivalence result supplies the induced isomorphism. The quotient-covering lift starts at the specified ordered tuple, so a general unordered loop ends at a permutation of that tuple, while only the identity-permutation case is a loop in the ordered configuration space. The displayed geometric endpoint convention gives label record equal to the geometric endpoint permutation and covering monodromy equal to its inverse; applying the inverse-loop map restores the geometric permutation.

The stacking formula runs the lower braid first and permutes the upper labels by the lower endpoint permutation. Quotienting forgets that finite coordinate reordering, giving the stated anti-homomorphism for raw slicing. Inversion then gives the group homomorphism. The pure restriction and its ordered-coordinate formula use the same fixed base tuple, the short exact sequence, and the specified inverse convention. I checked the half-turn and full-twist paths directly: they remain collision-free and interior, have the stated endpoints, and the full-twist isotopies preserve both endpoint tuples. The folded-arc witness is embedded, stays in the open cylinder, and has four distinct points in its height-½ slice.

Birman–Brendle §1.1 supports the quotient and configuration-space setup, but its sentence that a lift of an arbitrary unordered loop ends at the original ordered base tuple is false for a nonpure braid. The assigned proofs do not rely on that sentence: the local covering argument and González-Meneses §1.3 support the setwise-endpoint treatment used here. This is a source qualification, not a remaining defect in the batch.

- **Edits:** none. No material repair was made, so no proof-contract update, judge-record removal, reflow, or precheck was required.
- **Uneditable defects:** none found in the assigned pages or in the dependency claims opened for this audit.
- **Findings:** none.

## Page verdicts

- `braids-as-fundamental-groups-of-configuration-spaces` (A, draft): **sound**. Its fixed-basepoint, open/closed-disk, slicing, product-order, pure-subgroup, and monodromy summaries agree with the assigned items and their dependencies.
- `braids-as-fundamental-groups-of-configuration-spaces-examples` (B, draft): **sound**. The half-twist and full-twist examples and both counterexample summaries match the explicit constructions and calculations.

## Blocker and coverage note

There is no mathematical blocker to this content audit. The requested run has no `.autopilot/frontier-36-complete` state directory and `git log --all --grep='frontier-36-complete'` returned no commit. The current live engine state is a different run, `frontier-36-twelve-categories`; its status is held at Step 1 drift on an unrelated item, with no dispatch in flight. I did not steer that run. No rendered reader evidence bundle for `frontier-36-complete` was present in the available paths, so this is an independent audit of the manifest, current carriers, opened dependencies, and cited source passages, not a run-bound Step 5a receipt.
