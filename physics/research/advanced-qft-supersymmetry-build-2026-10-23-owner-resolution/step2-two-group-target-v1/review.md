# Step 2 batch 38 target closure repair

Run: advanced-qft-supersymmetry-build-2026-10-23. Outside resolution cycle 1. This is a source repair and focused consumer review, not native acceptance or a gate receipt. Current native state was inspected at `.physics-autopilot/advanced-qft-supersymmetry-build-2026-10-23/state.json`: unfinished, at `2-scope-review`. Current item history includes commit `36b950746c`. The actual finding is in `research/advanced-qft-supersymmetry-build-2026-10-23-scope-review/batch-38/review-1.json`.

The reported defect is confirmed: with weight vector (1,1,2), J=(12) preserves weight, but the previously admitted S=(23) conjugates it to (13), which does not. Arbitrary configuration bijections therefore did not form the stated target with its weight-preserving 2-morphisms.

Changed source paths (relative to physics):

- `items/def-aqft-two-group-symmetry-realization.md`
- `items/pthm-aqft-two-group-background-coupling.md`

The definition's public interface now requires every target 1-morphism (T,alpha) to satisfy W_y(T phi)=c_F W_x(phi) for some configuration-independent c_F in C×. This retains the entire coherent phase-law setting and also permits nonunit scalar transports. The scalar is an existence condition, not extra morphism data. No false uniqueness is asserted for identically zero or empty fibers. Phase choices and their coherence remain explicit model input, including in that degenerate case. The pthm Statement, physical scope, finite reindexing proof, and anomaly convention are unchanged; its F1 now records the corrected supplier condition and identifies A1 as the coherent phase case.

The supplied closure argument checks identities (scalar 1), composition (product), inverses (reciprocal), vertical 2-composition, and conjugation by S: W_z(SJS^-1 psi)=c_H W_y(J S^-1 psi)=W_z(psi). Q preserves this result. Both horizontal components have the displayed correct endpoints and preserve local subalgebras. For fixed parallel 1-morphisms, the only possible 2-cell has J=T'T^-1 and j=alpha'alpha^-1; thus hom categories are thin. Once closure and typing are proved, uniqueness proves horizontal associativity, units and interchange with their exact endpoints. The existing explicit pseudofunctor naturality, associator and unitor equations are retained. No nontrivial 2-cells were deleted to evade closure.

Supplier context inspected: the current finite background 2-groupoid definition and coherence theorem, including raw labels, directed associator, horizontal cochain law and the coherence proof. The target repair does not alter that source bicategory. Earlier character and 2-arrow repairs already present on disk were preserved.

Consumer inventory was traced using item/page text searches for both changed supplier IDs, then searches for the reached state-sum/gauging IDs. No additional alias declarations occur on these suppliers. All reached source uses were read, including the complete finite-state-sum and gauging proofs. Dispositions:

- `pthm-aqft-two-group-background-coupling`: repaired F1. A1 already assumes a U(1)-valued, configuration-independent weight law, with the Statement requiring identity, composite and 2-isomorphism coherence; hence its transports satisfy the new C× existence condition. Finite-sum reindexing and counterterm algebra remain valid.
- `ex-aqft-two-group-split-background-coupling`: unchanged. A1 assigns singleton fibers, weight 1, constant observable algebra, unique transports and identity 2-cells/comparisons. These satisfy c=1 and locality on every subcomplex. This remains only a background response, with its explicit caveat about non-effective dynamical symmetry.
- `ex-aqft-two-group-nonzero-postnikov-unit-response`: unchanged for the same singleton/c=1 reason. Its nonzero Postnikov cocycle and cochain calculation are independent of the repaired target closure. The tetrahedron diagram has the stated vertices, six ordered edges and four face labels and supplies no proof premise.
- `def-aqft-finite-two-group-state-sum`: unchanged. Actual configuration weights are 2^-V on every spin assignment for every background. T_g adds g at each vertex; it is bijective, preserves these weights with c=1, and its pullback preserves functions depending on each fixed subcomplex. T_h T_g=T_(g+h), with identity unit and comparisons. A={0}, so all admitted 2-arrows are identities. This verifies the corrected interface directly rather than relying solely on the native report's assertion.
- `post-aqft-finite-gauging-model`: unchanged. It adopts exactly that uniform-spin, trivial-A model and boundary convention; its adopted data meet the corrected interface.
- `pthm-aqft-finite-gauging-gluing`: unchanged. Proof step 1.1 uses the actual normalized spin count and weight-preserving translation, giving phase 1. Subsequent steps apply the separate background gauge-volume theorem to the invariant scalar background weight 1; no nontrivial target 2-cell composition is used.
- `ex-aqft-finite-two-group-interval-gluing`: unchanged. It uses the same unit spin response and finite relative background counts (two edge backgrounds, four path backgrounds, seam factor 1/2); these uses do not require arbitrary weight-changing transports. Its diagram correctly depicts the two ordered edges and shared vertex.
- `ex-aqft-finite-two-group-point-normalization`: unchanged. Two spins of weight 1/2 give response 1; its background automorphism count and resulting amplitude 1/2 are independent of target whiskering.
- `qftx-two-group-symmetry-backgrounds` and `qftx-two-group-symmetry-backgrounds-examples`: unchanged frontmatter-only compact pages; the inventories are exactly the four owned carriers and carry no additional target claim.
- `qftx-finite-symmetry-gauging-physics` and `qftx-finite-symmetry-gauging-physics-examples`: unchanged frontmatter-only compact pages. Their required-page/inventory uses reach precisely the state-sum/gauging consumers reviewed above.

No outside source edit is required. No imported pin, mathematical original, manifest, contract, coverage, numeric level, readiness, native state, owner receipt or gate artifact was modified. No new external source reading is claimed; this repair is direct finite algebra.

After the final source edit, from physics cwd, ran:

`node tools/physics-support/proof-layout.mjs items/def-aqft-two-group-symmetry-realization.md items/pthm-aqft-two-group-background-coupling.md`

Exit 0: `proof-layout: 2 items, 3 steps, 0 defects`.

Root retains metadata reconciliation, owner resolution, any further native checks, and commit ownership.
