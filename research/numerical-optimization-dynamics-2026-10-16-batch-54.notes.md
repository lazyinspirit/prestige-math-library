# Batch 54 — Geometric numerical integration

## Controlling plan and conflicts

The controlling instructions are the run owner direction and the repaired NA-22 section in `research/plan-numerical-dynamics-track.md`, including its final mathematical-contract appendix and E4/E7 clauses. The task points to `research/plan-numerical-analysis-track.md` L312, but that older design gives a broader Runge–Kutta symplectic-coefficient identity and quadratic-first-integral claim. The controlling dynamics plan instead reuses the published kick/drift/leapfrog maps, adds the local-domain restriction, direct discrete pullback and controlled finite-time errors, and retains symplectic Euler, implicit midpoint, and finite-order modified energy. E7 assigns generic splitting to T04 and constrained RATTLE to T07; neither is a proof premise here. The RK coefficient and quadratic-invariant claim is therefore not authored in this batch. It is recorded as an explicit old-design conflict, not treated as a completed supplier or silently quoted.

`plan-spec.json` and the batch-54 scaffold retain the four page requirements: `hamiltonian-mechanics-and-completely-integrable-systems`, `symplectic-manifolds-moser-stability-and-darboux-weinstein-theory`, `runge-kutta-methods-and-order`, and `hamiltonian-monte-carlo-and-leapfrog`. The RK page is batch 35. Its current draft page and all manifest item carriers were present on inspection; the page summary and its actual manifest contain no symplectic-RK coefficient criterion. No authored NA-22 claim uses a batch-35 item, so no result below relies on a planned RK body. The page-level `requires` edge is retained and appears as an open cross-batch review input until that pair's normal review closes. No RK premise blocks the local claims authored here.

## Supplier audit and exact limits

- `def-leapfrog-step-map` is reused for the exact global kick/drift formulas. It assumes $U\in C^1(\mathbb R^d)$, SPD $M$, and positive step. `def-local-leapfrog-domain-on-an-open-configuration-set` adds partial-domain admissibility for $V\in C^1(Q)$; every intermediate configuration must remain in $Q$.
- `thm-leapfrog-is-reversible-and-volume-preserving` proves full phase-volume preservation and momentum-flip reversibility under Countable Choice; a classical kick Jacobian requires $U\in C^2$. The local items do not assert local volume preservation or import the measure conclusion.
- `def-hamiltonian-vector-field-and-hamiltonian-function` fixes $\iota_{X_H}\omega=dH$. The local autonomous flow arguments use `lem-c1-euclidean-maximal-flow-with-c2-upgrade`; no completeness hypothesis is inferred. `thm-exact-hamiltonian-flow-preserves-energy-and-volume` is not used because its global energy/volume branch requires a complete $C^2$ Hamiltonian field and Countable Choice.
- `def-symplectic-form-and-symplectic-manifold` supplies the symplectic-form convention. The proofs use the finite-regularity canonical matrix identity directly, rather than applying the smooth-map definition to a lower-regularity map.
- `prop-a-hamiltonian-is-conserved-along-its-own-flow` is used only for the finite modified Hamiltonian's own local flow. It requires no completeness or choice principle. `prop-time-dependent-hamiltonian-evolution-is-symplectic` is not used; its AC$_\omega$ premise is unnecessary for the choice-free variational proof authored here.
- `thm-banach-fixed-point`, `thm-euclidean-implicit-function-theorem`, `thm-parametrized-implicit-function-theorem-with-higher-regularity`, the total-derivative chain rule, Taylor remainder theorem, and mixed-partial symmetry were read at their actual item bodies and used only with their stated hypotheses.

No Axiom of Choice, Countable Choice, or AC$_\omega$ is used by the new proof chain. The finite-order energy claim fixes one $N$, uses a star-shaped phase domain to construct global primitives explicitly, and assumes the complete numerical/comparison tube lies in a compact subset of that domain. It makes no infinite-series convergence, exact-discrete-energy, unconstrained-to-constrained, or exponential-time claim.

## Dependency inventory

The page manifest contains 13 A-page items and 3 B-page examples. In-run item dependencies are ordered by levels 0 through 6: the local-domain and local-flow foundations; local method definitions and shear calculus; method symplecticity/order; finite modified-Hamiltonian construction; truncation and energy-closeness estimates; one-step energy defect; final finite-order bound. `ex-symplectic-euler-harmonic-oscillator` is level 2 because it consumes the level-1 algorithm and an external symplectic-form definition. The B examples depend only on items their verifications actually use. The recorded batch dependency row places batch 54 at level 3 with batch 35 as its sole prerequisite.

## Source records

`research/numerical-optimization-dynamics-2026-10-16-batch-54.source-coverage.json` records four full-text sources: Hairer's official lectures 1–3 and the independent complete Nordkvist–Hjorth university lecture-note PDF. URLs, exact PDF locators, supported items, and included/inline/out-of-scope dispositions are recorded there. All four URLs were fetched and inspected; `node tools/source-fetch-check.mjs --coverage research/numerical-optimization-dynamics-2026-10-16-batch-54.source-coverage.json --stamp` reported 4/4 fetch-verified. No retrieval failure or source drop occurred; no `source_resolution` record was needed. The formal series' possible divergence and unread exponential refinement are explicitly out of scope.

## Scoped check record

Scoped final checks:

- `node tools/proof-layout.mjs items/<the 16 manifest item IDs>.md`: 16 items, 43 steps, 0 defects.
- `node tools/tsx-run.mjs tools/precheck.mts items/<the 16 manifest item IDs>.md --json`: 16 files, 13 proof-bearing items checked, 0 failures; the three definition/algorithm items are not applicable.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-54.proof-contracts.json --strict`: 16/16 items, 0 errors, 0 warnings. The four citations to the finite modified-Hamiltonian statement use its exact current text.
- `node tools/manifest-deps.mjs research/numerical-optimization-dynamics-2026-10-16-batch-54.pages.json`: 16 items, 0 normalized, 0 errors. Scoped `dependencyLevels` recomputation on this manifest: 16 items, 0 errors; the assigned levels match, with maximum 6.
- `node tools/content-policy.mjs research/numerical-optimization-dynamics-2026-10-16-batch-54.pages.json`: 16 scoped items, 0 errors, 0 warnings.
- `node tools/depcheck.mjs --items-file /tmp/nod-batch54-item-scope.json`: 16 selected item checks passed; the prerequisite closure check covered 653 items and 406 pages with no errors.
- `node tools/coverage-checklist.mjs research/numerical-optimization-dynamics-2026-10-16-batch-54.coverage.json --require-destination`: 1 A-page harvest, 33 harvested results, 0 errors, 0 warnings. The coverage record includes all 16 manifest items and the justified out-of-scope source results.
- `node tools/source-fetch-check.mjs --coverage research/numerical-optimization-dynamics-2026-10-16-batch-54.source-coverage.json`: 4/4 sources fetch-verified and resolved, 0 drops. The required earlier `--stamp` invocation also reported 4/4 fetch-verified and stamped 4 sources.

The read-only run-wide `node tools/batch-dependency-levels.mjs check --run numerical-optimization-dynamics-2026-10-16` is stale after concurrent manifest authoring: the assigned task records scheduling input `7feab71278a6cf5fc9513d25514ffc7397bdc4421f8c0fa99e7485d2c1d3041a`, the shared file currently records `14a24ce2fdb5e77db9422ef1d1def0f33fd9e73d6911be7216d15949c2b95214`, and recomputation from current manifests yields `11598f414954e6d617d4354f001563a209373821df51a3d7724a1da59dfb7c2e`. Its recomputed batch-54 row remains level 3 with sole prerequisite 35. The shared run artifact is owner-managed and was not rewritten; the owner should reconcile it after batch manifests settle. This scheduling-input drift does not change the scoped item-level results or introduce an unresolved logical premise for the 16 items here.

These mechanical checks and readiness records are not independent proof approval.

