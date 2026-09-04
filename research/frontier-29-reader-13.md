# frontier-29 reader-13 report

Date: 2026-09-01.
Run: `frontier-29`
Batch: `13`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `CLAUDE.md`, `README.md`, `research/frontier-29-reader.task.md`, `research/frontier-29-beta-13.task.md`, `research/frontier-29-batch-13.pages.json`, `research/frontier-29-batch-13.coverage.json`, `research/frontier-29-batch-13.proof-contracts.json`, `research/frontier-29-batch-13.notes.md`, `research/frontier-29-step6-hash-13-pre.json`, `research/plan-algebraic-geometry-track.md` (AV-1), `research/plan-spec.json`, and the live controller status from `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`.
- Assigned pages: `library/algebraic-geometry/affine-algebraic-sets-and-coordinate-rings.md` and `library/algebraic-geometry/affine-algebraic-sets-and-coordinate-rings-examples.md`.
- Assigned A-page items: `def-affine-algebraic-set`, `lem-zero-locus-ideal-closure`, `thm-zariski-closed-sets-affine-space`, `def-vanishing-ideal-affine-set`, `lem-variety-ideal-galois-connection`, `thm-affine-nullstellensatz-correspondence`, `def-affine-variety-classical`, `lem-irreducible-space-open-intersections`, `def-coordinate-ring-affine-algebraic-set`, `thm-affine-variety-prime-coordinate-ring`, `thm-regular-functions-on-affine-algebraic-set`, `def-principal-open-classical-variety`, `lem-principal-opens-form-affine-basis`, `thm-coordinate-ring-principal-open`, `def-quasi-affine-algebraic-set`, `lem-algebraic-set-finite-irreducible-components`, `def-reduced-affine-algebra`, `thm-affine-algebraic-sets-coordinate-duality`, `lem-maximal-ideals-are-points-over-algebraically-closed-field`, `cor-zariski-topology-cofinite-on-affine-line`, `lem-density-nonempty-open-affine-variety`, and `rem-classical-affine-register-limit`.
- Assigned B-page items: `ex-affine-line-and-affine-space-coordinate-rings`, `ex-parabola-is-affine-line`, `ex-coordinate-cross-reducible`, `ex-punctured-affine-line-not-affine-closed-subset`, `cex-zariski-topology-not-hausdorff`, `cex-nilpotent-polynomial-data-invisible-to-zero-locus`, and `ex-empty-affine-algebraic-set-unit-ideal`.
- Published dependency page/item files opened for verification: `library/commutative-algebra/noether-normalisation-and-nullstellensatz.md`, `def-quotient-ring`, `cor-strong-nullstellensatz-two-inclusions`, `thm-quotient-is-domain-iff-ideal-prime`, `def-principal-localisation`, `prop-localisation-zero-equality-and-kernel-criteria`, `cor-radical-ideal-has-finitely-many-minimal-primes-noetherian`, `def-finite-type-and-module-finite-algebras`, `cor-weak-nullstellensatz-algebraically-closed-coordinate-form`, `thm-quotient-is-field-iff-ideal-maximal`, `thm-root-bound-for-polynomials-over-a-domain`, `lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring`, `thm-universal-property-of-a-polynomial-ring`, and `def-nilradical-and-reduced-ring`.
- I also attempted to open the live-spec prerequisite `chern-and-pontryagin-classes-by-splitting-and-complexification-examples`; no current library page file with that id exists on disk.

## Design/spec check

- The design block, live spec, and batch manifest agree on the owned pair and order `366.041` / `366.042`.
- The known drift persists: the live spec and batch manifest still carry the unrelated prerequisite `chern-and-pontryagin-classes-by-splitting-and-complexification-examples` in addition to the commutative-algebra prerequisite route described in AV-1.
- No current `library/*/chern-and-pontryagin-classes-by-splitting-and-complexification-examples.md` file exists. None of the batch-13 proofs cites or uses that page, so I treated this as run-level drift rather than a local mathematical blocker.
- The live `.autopilot` controller on disk reports run `frontier-23`, not `frontier-29`. I used the named `frontier-29` research artifacts as the assigned reading scope and did not edit controller state.

## Confirmed defects and edits

1. Repaired `items/thm-coordinate-ring-principal-open.md`.
   The old Nullstellensatz steps formed ill-typed ideals `I(X)+(\overline h_i)` and `I(X)+(\overline f)` inside `k[X]`. I rewrote steps `1.3` and `2.2` through representatives in the ambient polynomial ring `k[x_1,\ldots,x_n]`, then passed the resulting radical containments down to `k[X]` before the gluing argument.
2. Repaired `items/lem-irreducible-space-open-intersections.md`.
   The old statement assumed `X` was already a classical affine variety, so the advertised irreducibility characterization was circular. I restated it for any nonempty subset of affine space with the subspace Zariski topology and kept the proof purely topological.
3. Repaired the batch proof-contract file and normalized proof-bearing `deps` frontmatter.
   `tools/proof-contract.mjs --strict` was failing for the whole proof-bearing scope because the contract entries were stale and the current proof-bearing items used block-list `deps` syntax that the strict checker does not parse. I regenerated 13 contract entries, manually updated the generalized irreducibility contract entry and the remaining boundary anchors, and converted the 13 changed proof-bearing items to inline `deps: [...]` lists. No edited item carried a stale `verification.judge` record, so there was nothing to remove.

## Per-page verdicts

- `affine-algebraic-sets-and-coordinate-rings`: pass after the repairs above. The A-page prose, the repaired principal-open localization proof, and the current proof-contract file now match the opened dependencies.
- `affine-algebraic-sets-and-coordinate-rings-examples`: pass. I rechecked the seven example/counterexample items against the repaired A-page items and the opened dependencies; no B-page-body edit was needed.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-irreducible-space-open-intersections.md items/thm-coordinate-ring-principal-open.md`
  Result: both repaired proof items were reflowed once.
- `node tools/tsx-run.mjs tools/reflow.mts` on the 13 changed proof-bearing items
  Result: all 13 were already in canonical form after the repairs.
- `node tools/tsx-run.mjs tools/precheck.mts` on the 13 changed proof-bearing items
  Result: `13 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-29-batch-13.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 14/14 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-29-batch-13.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: `30 citation(s)` and no missing quotes or widening candidates.
- `node tools/boundary-audit.mjs research/frontier-29-batch-13.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: no contradicted boundary dispositions.
- `node tools/content-policy.mjs research/frontier-29-batch-13.pages.json`
  Result: `29 scoped item(s), 0 error(s), 0 warning(s)`.
- `git diff --check -- items/thm-zariski-closed-sets-affine-space.md items/lem-variety-ideal-galois-connection.md items/thm-affine-nullstellensatz-correspondence.md items/lem-irreducible-space-open-intersections.md items/thm-affine-variety-prime-coordinate-ring.md items/thm-regular-functions-on-affine-algebraic-set.md items/lem-principal-opens-form-affine-basis.md items/thm-coordinate-ring-principal-open.md items/lem-algebraic-set-finite-irreducible-components.md items/thm-affine-algebraic-sets-coordinate-duality.md items/lem-maximal-ideals-are-points-over-algebraically-closed-field.md items/cor-zariski-topology-cofinite-on-affine-line.md items/lem-density-nonempty-open-affine-variety.md research/frontier-29-batch-13.proof-contracts.json`
  Result: clean.

## Uneditable defects

- None remain in the opened scope.

## Blockers

- None.
