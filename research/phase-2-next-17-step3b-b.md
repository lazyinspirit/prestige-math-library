# Step 3b group b — phase-2-next-17

Batch 2 is authored: all 84 original items, one necessary local A lemma, and all four A/B pages. The preserved inventories are 19 A / 9 B weak-topology items and 49 A / 8 B distribution items. No original ID or promised result was removed. No published content, independent review, owner decision, or judge/audit stamp was edited.

All 84 baseline item decisions are current accepts with confidence 1 and examined dependency IDs. Both current scope decisions are sufficient. The new lemma intentionally has no Step-3 self-review receipt: it is fully written, registered and checked, and awaits the engine's post-author addition certification under this dispatch's explicit exception. The direct item-decision check therefore reports 84 closed baseline items and only that addition pending. This is not an unresolved mathematical proof.

## Local supplier and repairs

- Added `lem-riemann-lebesgue-comparison-for-distribution-test-integrands` on the distribution A page immediately before `thm-distributional-differentiation-is-continuous-and-commutes`. Its complete Darboux/simple-function proof supplies the Countable-Choice Lebesgue interface using earlier A items. Registered in manifest, coverage, page and strict contracts. It replaces the later-page `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals` dependency in classical derivative compatibility, mollifier approximation, the Newtonian example and the moving-spike example. No dependency on the later measurable-density page remains.
- The right-shift example proves square-sum coefficient bounds with finite real Cauchy–Schwarz on moduli and a limit of nonnegative partial sums. It no longer adds an unnecessary complex-L2 page prerequisite. The sphere-closure proof explicitly declares intermediate value.
- Fixed-support completeness uses unique uniform derivative limits. The LF universal property, bounded-support theorem and test sequence criterion are fully derived. Bounded sets use locally bounded shell weights from aggregate suprema, without a selected escaping sequence.
- Sheaf locality, support, compact-support extension and point-supported structure are written before consumers. Smooth parameter differentiation is proved directly in a fixed-support space; its integral clause uses deterministic cell-measure sums. Product-test density uses Riemann smoothing and finite product sums before tensor uniqueness. Tensor support equality, order interchange, associativity and derivative formulas are fully proved.
- Compact-factor convolution has a common cutoff per compact test support, explicit continuity and support bounds. Associativity assumes at least two compact factors; the third is localized using the compact set K minus the other two supports. Pairwise existence alone is not used.
- Continuous primitive structure includes the actual Zorn extension argument, complexification, bounded density, repeated primitive calculation and signs. Support-controlled coefficients are grouped locally finitely in the global theorem. Full AC is explicit for extension/representation and the countable family of representations.
- The Newtonian example supplies all ball octant data locally from earlier A definitions, then uses the smooth kernel `-(4pi)^-1(|x|^2+epsilon^2)^-1/2`. Its Laplacian, positive flux mass, local integrability and concentration limit are calculated. Both Green functions are C2 on a neighborhood of the closed ball. Neither an unproved punctured-solid presentation nor a B-page supplier is consumed.
- Heaviside, locally finite jumps, principal value, nonregular Dirac, moving spikes and sharp Dirac-derivative order have explicit calculations or witnesses. Principal value uses symmetric proper Riemann integrals and remains choice-free.

## Assumption and prose reconciliation for Step 4

The authored statements distinguish uses precisely. Countable Choice supplies the library's Lebesgue-measure interfaces for parameter integration, classical regular derivative compatibility, mollification, smooth density, the zero-gradient constant theorem and the Lebesgue examples. Smooth parameter differentiation, tensor products, compact-factor convolution, support/locality and fixed-support completeness retain their ZF statements. The regular embedding's estimate is conditional on the given integration structure and is choice-free as an estimate; injectivity uses its stated AC_omega approximate-identity supplier. Continuous primitive structure uses full AC. The pointwise-bounded-family theorem uses DC, and closed bounded test-set compactness retains its stated AC_omega and DC hypotheses.

`thm-uniform-finite-order-bounds-for-pointwise-bounded-distributions` makes “pointwise limit” precise as a sequence limit or a net drawn from an already pointwise-bounded family. Dyatlov Proposition 4.17 pp51–52 and Gelca Theorem 7.4.1 pp107–108 give the sequential source statement. An arbitrary pointwise-convergent net need not have a pointwise-bounded whole range. Reconcile this precise wording in shared prose; no unrestricted-net conclusion was asserted or consumed.

The four corresponding entries in `research/plan-spec.json` still have empty item arrays, versus the manifest's 19/9/49/8 inventories. This is the pre-splice mismatch for Step 4. `validate-plan` passes the current plan but cannot certify absent item lists. A separate exact manifest-to-plan prerequisite-closure check found no remaining undeclared external homes; the local supplier removed the otherwise invalid later-page edge. Preserve B pages requiring only their own A pages. Shared plan/prose were left for serial reconciliation.

## Published concerns for the owner and serial ledger reconciler

These are defect-focused findings, not whole-closure audits. The canonical published-consumer-supplier ledger was not edited by this group.

1. **Confirmed missing HB qualification; high confidence.** `thm-bipolar-closure-for-linear-subspaces`, page `dual-spaces-adjoint-operators-and-annihilators`: proof 3.1 uses `cor-annihilator-detects-closure` with M=0 to infer the reverse density criterion; 4.1 imports the primal double-annihilator formula. The statement and assumptions do not qualify these uses by HB. The first weak-star double-annihilator identity has a finite-coordinate proof and is sound without that assumption. Repair only the affected primal/separation clauses using published `def-hahn-banach-extension-principle-relative`, `thm-relative-hahn-banach-norm-preserving-extension` and `thm-relative-hahn-banach-geometric-separation`, with `cor-relative-hahn-banach-dual-norming` for point separation; propagate the HB assumption. The owned annihilator lemma uses the sound weak-star clause and supplies its own HB-relative primal proof; this debt does not block it.
2. **Confirmed proof-assumption propagation defect; high confidence.** `thm-sigma-finite-duality-for-bounded-functionals-on-l-p`, page `the-duality-of-lp-and-lq`: proof 1.1 obtains local densities through `lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q`; the latter is conditional on a density from `lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities`, whose statement explicitly assumes AC. The sigma-finite theorem does not state AC and also selects/glues a sequence of representatives in 1.1–3.1. Required repair: supply the actual density-existence assumption, choose representatives under that stated assumption, glue on disjoint exhaustion shells and propagate it. The conditional Lq-bound lemma itself need not assume AC merely when a density is already given; do not indiscriminately strengthen that conditional statement.
3. **Confirmed downstream proof gap, with a choice-free repair available; high confidence.** `cor-ell-p-duality-by-counting-measure`, page `the-duality-of-lp-and-lq`: proof 2.1 consumes the preceding unqualified sigma-finite representation theorem. Repair by direct coefficients `b_n=Lambda(e_n)`, finite optimizing vectors, truncations and norm bounds, preserving the choice-free sequence-space result; alternatively propagate the chosen measure-duality assumptions. Owned sequence examples use direct coefficient arguments instead.
4. **HB propagation concern confirmed from the displayed proofs; high confidence.** `thm-dual-norms-every-vector`, page `the-analytic-hahn-banach-theorem`, proof 2.1/2.2 invokes real/complex norm-preserving HB without an explicit principle qualification. `lem-transpose-is-bounded-and-has-the-same-norm`, page `dual-spaces-adjoint-operators-and-annihilators`, proof 2.1 consumes that norming assertion for the reverse norm inequality. Required published suppliers are `def-hahn-banach-extension-principle-relative`, `thm-relative-hahn-banach-norm-preserving-extension` and `cor-relative-hahn-banach-dual-norming` on `norming-and-separation-under-hahn-banach`. Reuse the displayed transpose proof with that qualified norming supplier; retain the choice-free upper bound and boundedness. The underlying old extension statements also need assumption audit; this group did not claim a new full audit of those proofs.
5. **Publication-metadata concerns, not mathematical defects.** `lem-schwartz-cutoffs-from-the-standard-smooth-step`, page `schwartz-space-and-the-plancherel-theorem`, and `lem-complex-integration-by-parts-on-intervals-and-decaying-lines`, page `fourier-transform-convolution-and-approximate-identities`, had judge-only verification blocks without audited/verified fields when read. Their explicit proofs were read and used under their exact hypotheses; no mathematical defect was found in those arguments. Owner should reconcile required publication metadata without treating this as a reason to block a sound supplier.

## Checks actually run

- Explicit manifest-derived item paths through `tools/precheck.mts`: 65 proof-bearing items checked, zero failing; definitions/remark are not proof-precheck targets.
- Explicit paths through `tools/rendercheck.mjs`: all 85 items and four pages, 89 files, passed real KaTeX and frontmatter parsing.
- `node tools/content-policy.mjs research/phase-2-next-17-batch-2.pages.json`: 85 scoped items, zero errors/warnings. Initial inline source-reference YAML was reformatted as block references before this pass.
- `node tools/proof-contract.mjs research/phase-2-next-17-batch-2.proof-contracts.json --strict`: 85/85, zero errors/warnings. Contracts contain actual step claims, inputs, exact cited sections and item-specific boundary evidence.
- `node tools/coverage-checklist.mjs research/phase-2-next-17-batch-2.coverage.json`: two source-harvest pages, 95 results, zero errors/warnings. An initial invocation following the tool's obsolete `--manifests` usage comment was rejected; the documented sibling-manifest implementation was then used correctly.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit zero, with existing redundant-prerequisite warnings and the empty-inventory limitation above.
- `node tools/scope-decisions.mjs check --run phase-2-next-17 --group b`: 18 current declines, zero errors. Each stands decision has specific design/destination/use evidence, without an invented owner ruling.
- `tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-17` refreshed the shared index from the owned input. Batch 2 cross-batch input remains `[]`: all external suppliers used here are published; no same-group cross-batch edge is omitted.
- Current decision inspection: both scopes closed, 84 baseline items closed, new addition left for engine certification. No owner override or judge/audit stamp was created.

## Open handoff obligations

No unresolved mathematics or missing source argument remains in the authored batch. Step 4 must splice the final inventories, carry the assumption/prose qualifications above, and reconcile the published concerns into the canonical ledger. The engine must certify the new fully authored addition from its immutable baseline comparison. The owner-direction file appeared during this dispatch and was read in full: it concerns batches 5 and 11 and adds no batch-2 repair obligation; none of those owner-held escalations was touched.

Exact source passages and per-item checkpoints are in `research/phase-2-next-17-batch-2.notes.md`. Inherited source-harvest reading declarations are preserved as provenance; this report does not claim this author reread every historical source range. The completed arguments use the personally examined passages and dependency proofs recorded there.

## Completed IDs

### weak-and-weak-star-topologies

- `def-weak-topology-on-a-normed-space`
- `lem-basic-weak-neighborhoods`
- `thm-weak-topology-is-hausdorff`
- `def-weak-convergence-of-nets-and-sequences`
- `lem-basic-weak-star-neighborhoods`
- `def-weak-star-convergence`
- `thm-continuous-dual-of-a-weak-topology`
- `thm-continuous-dual-of-a-weak-star-topology`
- `thm-norm-closed-convex-iff-weakly-closed`
- `cor-weak-closure-of-the-unit-sphere-is-the-closed-unit-ball`
- `thm-weakly-convergent-sequences-are-norm-bounded`
- `cor-weak-convergence-implies-lower-semicontinuity-of-the-norm`
- `thm-weak-and-norm-topologies-agree-iff-finite-dimensional`
- `thm-infinite-dimensional-weak-topology-is-not-first-countable`
- `lem-annihilators-are-weak-and-weak-star-closed`
- `thm-transpose-is-weak-to-weak-continuous`
- `thm-transpose-is-weak-star-to-weak-star-continuous`
- `def-strong-and-weak-operator-topologies`
- `lem-norm-implies-strong-implies-weak-operator-convergence`

### weak-and-weak-star-topologies-examples

- `ex-coordinate-vectors-converge-weakly-to-zero-in-ell-p`
- `cex-coordinate-vectors-do-not-converge-weakly-to-zero-in-ell-one`
- `ex-coordinate-evaluations-converge-weak-star-to-zero-in-ell-one-star`
- `cex-weak-star-and-weak-topologies-on-a-dual-can-differ`
- `cex-weak-closure-can-exceed-sequential-weak-closure`
- `ex-right-shift-powers-converge-in-wot-not-sot`
- `ex-left-shift-powers-converge-in-sot-not-operator-norm`
- `cex-pointwise-boundedness-without-a-uniform-bound-on-an-incomplete-domain`
- `cex-a-weakly-convergent-net-need-not-be-eventually-norm-bounded`

### distributions-test-functions-and-differentiation

- `def-test-function-space-d-of-an-open-set`
- `def-fixed-support-test-function-frechet-space`
- `def-test-function-topology`
- `def-distribution`
- `def-regular-distribution-from-a-locally-integrable-function`
- `def-convolution-of-a-distribution-with-a-test-function`
- `lem-test-function-cutoffs-and-euclidean-localization`
- `lem-fixed-support-test-function-spaces-are-complete`
- `lem-test-function-lf-topology-universal-property`
- `thm-test-function-operations-are-continuous`
- `thm-local-finite-order-characterization-of-distributions`
- `def-order-of-a-distribution-on-a-compact-set`
- `def-distributional-derivative`
- `def-multiplication-of-a-distribution-by-a-smooth-function`
- `thm-leibniz-rule-for-distributions`
- `def-dirac-delta-and-its-derivatives`
- `thm-distributions-form-a-sheaf`
- `def-support-of-a-distribution`
- `thm-compactly-supported-distributions-have-global-finite-order`
- `thm-distributions-supported-at-one-point`
- `lem-bounded-test-function-sets-have-common-compact-support`
- `thm-sequential-convergence-in-test-function-space`
- `def-weak-and-strong-topologies-on-distributions`
- `thm-locally-integrable-functions-embed-in-distributions`
- `lem-strong-distribution-convergence-implies-weak-convergence`
- `lem-riemann-lebesgue-comparison-for-distribution-test-integrands` — new fully authored addition
- `thm-distributional-differentiation-is-continuous-and-commutes`
- `lem-distribution-pairing-with-smooth-parameter-families`
- `thm-convolution-with-a-test-function-is-smooth`
- `thm-uniform-finite-order-bounds-for-pointwise-bounded-distributions`
- `def-pullback-of-a-distribution-by-a-diffeomorphism`
- `def-tensor-product-of-distributions`
- `lem-compactly-supported-distributions-extend-to-smooth-functions`
- `thm-sequential-convergence-of-smooth-multipliers-and-distributions`
- `thm-extension-by-zero-for-distributions-with-ambient-closed-support`
- `thm-translation-invariant-test-function-operators-are-convolutions`
- `lem-complex-l-one-functionals-on-finite-measure-spaces-have-bounded-densities`
- `thm-local-structure-of-distributions-as-derivatives-of-continuous-functions`
- `lem-compact-support-continuous-primitive-representation`
- `thm-global-locally-finite-structure-of-distributions`
- `lem-finite-sums-of-product-tests-are-dense-on-product-open-sets`
- `thm-tensor-product-distributions-and-iterated-pairings`
- `def-convolution-of-distributions-when-one-has-compact-support`
- `lem-convolution-of-distributions-is-well-defined-under-the-support-hypothesis`
- `thm-mollifier-approximation-in-distributions`
- `thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant`
- `cor-smooth-functions-are-weakly-dense-in-distributions`
- `thm-associativity-of-distribution-convolution-under-compact-support`
- `thm-closed-bounded-test-function-sets-are-compact`

### distributions-test-functions-and-differentiation-examples

- `ex-derivative-of-the-heaviside-function-is-dirac-delta`
- `ex-derivatives-of-piecewise-smooth-functions-include-jump-deltas`
- `ex-distributional-laplacian-of-the-newtonian-kernel`
- `ex-principal-value-distribution-one-over-x`
- `cex-not-every-distribution-is-a-locally-integrable-function`
- `cex-pointwise-convergent-functions-need-not-converge-as-distributions-without-local-control`
- `ex-compactly-supported-distributions-have-global-finite-order`
- `rem-sobolev-weak-derivatives-belong-to-pde`

