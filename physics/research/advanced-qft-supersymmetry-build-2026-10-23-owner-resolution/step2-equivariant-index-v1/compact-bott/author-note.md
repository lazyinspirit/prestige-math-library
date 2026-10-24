# Compact Bott normalization and Hardy example

Authored only the two assigned new carriers:

- `items/lem-equivariant-compact-bott-index-normalization.md`
- `items/ex-equivariant-fourier-hardy-symbol-index.md`

Both remain drafts. This note records authoring and mechanical checks; it asserts no scientific acceptance. No manifests, levels, contracts, gates, workflow state, stamps, hashes, backups or commits were created or changed.

## Actual mathematical route

The normalization is representation-valued for the entire orthogonal group in every real dimension. It does not infer that representation from its dimension or from two-sphere rotation tests alone.

The proof first computes the circle Hardy operator by its complete Fourier basis. A localized Fourier-series calculation establishes the actual two-ray classical symbol. A degree-one loop homotopy confines its class to a proper coordinate interval. Rectangle winding and an explicit two-by-two contraction show that the class is the negative of the root plane symbol x+iξ. Since the Hardy index is minus one, this fixes the nonequivariant line normalization to plus one. The example repeats this argument independently and allows arbitrary coefficient representations with trivial geometric action. It is a nonlogical B-page leaf, not a prerequisite of the normalization.

The sphere comparison uses a globally smooth deformation of the de Rham Koszul symbol by ξ+i s df, where f is the round-sphere height. Its square is |ξ|²+s²|df|². This proves the common compact noninvertibility support throughout the full-symbol homotopy. At its endpoint the support is exactly the two poles. Explicit stereographic derivatives of the height fix the pole signs to the Bott class and its cotangent conjugate; no seam-smoothing or sphere symbol-comparison premise is hidden here.

For O(1), the conjugate Bott class is minus the sign-representation twist, proved by an explicit equivariant invertible matrix homotopy. The reflected-circle de Rham index and the independently fixed forgetful index determine both O(1) multiplicities. For SO(2), cotangent conjugation is equivariantly homotopic to the identity, so the sphere de Rham index and torsion-freeness determine the full circle representation. Each arbitrary orthogonal matrix lies in a block subgroup of line reflections and plane rotations. The external-product identity therefore determines the character at that matrix. Averaging on finite-dimensional Hom spaces proves character detection, completing O(n), including its disconnected component.

The generic Koszul convention is exterior multiplication on Λ(V complexified), whose one-plane even-to-odd map is z. The metric's complex-bilinear extension identifies a complexified real bundle with its dual; no such identification is claimed for arbitrary complex bundles. Both carriers state θ=ξ dx (or its dimension-n sum), so dθ has the opposite orientation to the complex plane in odd real dimension. Their Hardy winding statements use the complex orientation explicitly and explain the dθ reversal.

## Sources actually inspected

Read `analytic-comparison/source-guided-construction-chain.md`. Used the already retrieved searchable Atiyah–Singer compilation in the adjacent `analytic-comparison` directory. Inspected paper I's lemma 3.2 and its proof, printed pp. 499–500; the normalization reduction, proposition 4.4 and lemma 4.7, printed pp. 505–508; and the actual de Rham/Hardy calculations in section 8, printed pp. 524–526. Also inspected the sections 4–9 route, including the controlled-excision construction and the associated-bundle operator/kernel reduction in section 9, printed pp. 527–529. OCR matrix and sign conventions were checked independently in the authored matrices and norm squares. This is a bounded source-reading record, not a claim that the entire compilation or cited sources were read.

Read the imported sphere de Rham statement/proof and the root Hopf-line convention. Read the authored finite-chart calculus and associated-product statements/proofs at their current draft scope. The latter supplies the external-product and compact-support excision product interfaces needed here. The controlled-realization carrier had not yet appeared on disk at the last inspection; its exact statement must be reconciled before downstream acceptance. The normalization's F2 and the example's F2 explicitly identify the needed interface rather than claiming it is supplied by a definition.

## Focused mechanical verification

After the final proof edit, ran the explicit two-carrier selection:

- `node tools/tsx-run.mjs tools/physics-support/precheck.mts --json items/lem-equivariant-compact-bott-index-normalization.md items/ex-equivariant-fourier-hardy-symbol-index.md`: exit 0; two checked, zero failed.
- `node tools/physics-support/rendercheck.mjs items/lem-equivariant-compact-bott-index-normalization.md items/ex-equivariant-fourier-hardy-symbol-index.md --json`: exit 0; two checked, zero errors and warnings.
- `node tools/physics-support/proof-layout.mjs items/lem-equivariant-compact-bott-index-normalization.md items/ex-equivariant-fourier-hardy-symbol-index.md`: exit 0; two items, fourteen steps, zero defects.

The initial precheck requested phase renumbering; its diagnostic is retained as `precheck-initial.json`. A temporary local formatting mistake duplicated the first proof row while adopting that output. It was corrected before the successful checks above. That transient failure is not represented as a passing check. Neither these checks nor the new-supplier write clearance confers mathematical acceptance.
