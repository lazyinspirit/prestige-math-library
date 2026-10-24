# Step 3a reader report — batch 58

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader  
Scope: batch `58`

## Opened inventory

Pages:

- `qftx-gauge-group-sphere-homotopy` — `library/quantum-field-theory-mathematics/qftx-gauge-group-sphere-homotopy.md`
- `qftx-gauge-group-sphere-homotopy-examples` — `library/quantum-field-theory-mathematics/qftx-gauge-group-sphere-homotopy-examples.md`

Both page carriers are YAML frontmatter only, retain their listed item inventories and draft status, and contain no page summary.

Assigned items, reviewed by dependency level:

- Level 0: `lem-qftx-parametric-vector-bundle-section-smoothing`, `def-qftx-mapping-cone-hopf-invariant`, `def-qftx-suspension-pinch-map`, `lem-qftx-special-unitary-column-fibration`, `lem-qftx-section-retract-obstruction`.
- Level 1: `lem-qftx-hopf-generator-and-cone`.
- Level 2: `lem-qftx-folded-product-attachment-suspends-to-zero`, `lem-qftx-suspended-hopf-composite-adem-obstruction`.
- Level 3: `lem-qftx-low-unitary-homotopy-inputs`, `lem-qftx-parametric-gauge-smoothing`, `lem-qftx-sphere-gauge-evaluation-fibration`.
- Level 4: `lem-qftx-pi5-special-unitary-nonzero`, `lem-qftx-based-gauge-sphere-homotopy`.
- Level 5: `thm-qftx-reduced-gauge-group-sphere-nontriviality`.
- Level 6: `ex-qftx-sphere-gauge-s3-components`.

I opened the exact Statement/Definition interfaces for the direct mathematical suppliers in the assigned item dependencies: `cor-euclidean-spheres-are-path-connected`, `cor-higher-homotopy-groups-are-iterated-loop-components`, `cor-real-line-is-universal-cover-of-circle`, `cor-suspension-isomorphism-in-reduced-singular-homology`, `def-axiom-of-choice`, `def-locally-trivial-fiber-bundle`, `def-mapping-cylinder-and-mapping-cone`, `def-qftx-nonabelian-gauge-data`, `def-qftx-principal-connection-form`, `def-qftx-smooth-sobolev-gauge-configuration`, `def-reduced-cone-suspension-and-cofiber-sequence`, `def-singular-cohomology-ring`, `def-smooth-manifold`, `def-smooth-partition-of-unity-subordinate-to-an-open-cover`, `def-vector-bundle-chart-and-transition-function`, `lem-cw-quotients-and-collapse-of-a-contractible-subcomplex`, `lem-freudenthal-identifies-the-eventual-suspension-system-for-spheres`, `lem-integral-cohomology-ring-of-complex-projective-space-by-splitting`, `lem-mod-two-cohomology-rings-of-complex-projective-spaces`, `prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant`, `prop-loop-suspension-adjunction-on-based-homotopy-classes`, `prop-nearest-point-projection-is-the-tubular-retraction-after-shrinking`, `prop-steenrod-square-normalization-instability-and-top-square`, `thm-adem-relations-for-steenrod-squares`, `thm-based-sphere-maps-are-classified-by-geometric-degree`, `thm-cellular-cochains-compute-cohomology-with-local-coefficients`, `thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism`, `thm-covering-maps-inject-fundamental-groups`, `thm-covering-space-lifting-criterion`, `thm-freudenthal-suspension-theorem`, `thm-homotopy-lifting-for-covering-maps`, `thm-long-exact-sequence-of-homotopy-groups-of-a-fibration`, `thm-lower-dimensional-sphere-maps-are-based-nullhomotopic`, `thm-numerable-fiber-bundles-are-hurewicz-fibrations`, `thm-path-lifting-for-covering-maps`, `thm-quotient-universal-property`, `thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle`, `thm-smooth-dependence-of-ode-solutions-on-parameters`, `thm-smooth-partitions-of-unity-exist-on-manifolds`, `thm-steenrod-squares-are-well-defined-and-natural`, and `thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold`.

I also read the relevant configuration-calculus supplier `lem-qftx-gauge-sobolev-calculus`, its `thm-higher-order-sobolev-embedding` input, and `def-gauge-group-of-a-smooth-principal-bundle`. These confirm the smooth section topology used by the batch; Sobolev-only conclusions are not used as substitutes for the local smooth-group arguments.

## Repairs and evidence

- `lem-qftx-section-retract-obstruction`: added a preceding `Terminology` section defining topological group, continuous right action, locally trivial right principal bundle, and weak contractibility. Its `## Statement` remains unchanged. Corrected Fact F1 so the generic locally trivial fiber-bundle supplier is credited only for local product charts; freeness, transitivity and equivariance are the separately stated principal-bundle data. Made the basepoints in the final retraction step explicit. The sole cross-batch consumer, `thm-qftx-singer-global-gauge-section-obstruction` in batch 3, was checked: its own Statement supplies the principal bundle structure and its F6 use has the same weak-contractibility hypotheses. Its claim remains valid.
- `lem-qftx-based-gauge-sphere-homotopy`: the proof used a “supplied” smooth reference connection without constructing or citing one. I repaired this locally, avoiding a new edge to the batch-3 gauge-slice page, which already depends on this batch's sphere-gauge page. The item now uses the exact direct suppliers for equivariant bundle charts, subordinate partitions of unity, and the principal connection form, and constructs $A_0$ by summing the local Maurer–Cartan forms $g^{-1}dg$ with the partition weights. It then uses $A_0$ for radial parallel transport. I also made $m$ and $p_m\in P_m$ explicit in the Statement and proved continuity of $f\mapsto\sigma_f$ using the Hilbert–Schmidt uniform norm. The assigned direct consumers `thm-qftx-reduced-gauge-group-sphere-nontriviality` and `ex-qftx-sphere-gauge-s3-components` were rechecked; their based-group uses remain sound. Their proof-contract source quotations were refreshed.
- The `lem-qftx-based-gauge-sphere-homotopy` contract now records the exact new chart, partition, and connection-form suppliers and the repaired step. The `lem-qftx-section-retract-obstruction` contract narrows its chart citation to the relevant definition. Neither edited item had a stale `verification.judge` record.

For the Hopf and Steenrod arguments, I independently checked Allen Hatcher, *Algebraic Topology*, §4.2, Example 4.51 (printed p. 380), which identifies the Hopf map as the generator of \(\pi_3(S^2)\), and Appendix §4.L, Proposition 4L.11 (printed pp. 498–499), which proves nonvanishing of the stable Hopf square by the cofiber-cell and \(Sq^2\)/Adem argument. The local batch proof supplies the additional finite-level quotient and cellular-cohomology details used for every consecutive suspended Hopf composite. Sources: [Chapter 4](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf), [Appendix 4](https://pi.math.cornell.edu/~Hatcher/AT/ATch4.4.pdf).

## Unedited defects

None identified. The repaired definitions and proofs are sound under their explicitly stated mathematical suppliers; no published or other-batch defect remains to report.

## Page verdicts

- `qftx-gauge-group-sphere-homotopy`: pass after the two in-flight item repairs. The Hopf, Steenrod–Adem, special-unitary, gauge-group, and section-retraction arguments retain their stated scope and are justified by their exact suppliers or local constructions.
- `qftx-gauge-group-sphere-homotopy-examples`: pass. The example remains limited to the trivial $SU(2)$ bundle over $S^3$, and its degree and finite-center component conclusions follow from the assigned suppliers.

## Validation and blocker

- Reflow and precheck passed for `lem-qftx-section-retract-obstruction` and `lem-qftx-based-gauge-sphere-homotopy`.
- Final `proof-layout` run: 2 changed items, 7 proof steps, 0 defects.
- No blocker. The batch manifest remains the frozen inventory; the current based-gauge item records its repaired direct supplier dependencies in its own frontmatter and proof contract.

Coverage limitation: I checked the exact supplier interfaces used by this batch and the cited Hatcher passages, but did not independently reconstruct every transitive published mathematics supplier proof.
