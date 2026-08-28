# frontier-23 · Alpha group `b` · Step 3 recheck

Checks run on Saturday, August 29, 2026, against the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-23 --group b` -> `scope-decisions: b: 3 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-23 --group b` -> `scope-decisions: 3 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-23-batch-2.coverage.json research/frontier-23-batch-5.coverage.json research/frontier-23-batch-9.coverage.json --require-destination` -> `coverage-checklist: 5 page(s), 151 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-2.pages.json research/frontier-23-batch-5.pages.json research/frontier-23-batch-9.pages.json` -> `content-policy: 177 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json` -> pass; the command ends with `OK - declared page order is acyclic and consistent...` and emits only the standing repository-wide `redundant-prereq` advisories
- Local coverage stamp audit from the current JSON: batch 2 has `5/5` source rows with `fetch_verified`, batch 5 has `6/6`, and batch 9 has `4/4`

## Dispositions

1. `complexification-realification-and-real-structures` / `B2-1`: **closed**.
   The batch-2 fix-pass note is accurate on current bytes. `research/frontier-23-batch-2.pages.json` still declares `diagonalisation-and-the-minimal-polynomial` in the A-page `requires`, which is the single repair Alpha identified. The operator-tail items that motivated the finding still cite only results reached through that closure, and the full plan check ends cleanly apart from standing `redundant-prereq` advisories. No further manifest or coverage edit is owed.

2. `exterior-powers-orientation-and-hodge-duality` / `B2-2`: **closed**.
   The batch-2 fix-pass note is also accurate on current bytes. `cor-cross-product-is-hodge-star-of-the-wedge` still depends only on `thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula`, `cor-hodge-star-is-an-isometry-and-squares-to-a-sign`, and `thm-interior-product-is-adjoint-to-exterior-multiplication`; it no longer depends on the later `regular-surfaces-and-surface-integrals` page. The current scaffold therefore matches the local-repair route recorded in the review.

3. `matrix-norms-condition-numbers-and-numerical-stability` / `B5-1`: **closed**.
   The batch-5 fix-pass note matches the manifest as it stands. `def-frobenius-matrix-norm` still defines `||A||_F=(\sum_{i,j}|a_{ij}|^2)^{1/2}` locally and depends only on `def-abs-value` and `def-complex-conjugate-real-imaginary-part-and-modulus`, so the forbidden dependency on the published B-page example is gone. The current coverage file still carries `6/6` fetch-verified source rows, so the note's source-state confirmation is also accurate.

4. Batch `9` Step-3 pushback on `B2-1`, `B2-2`, and `B5-1`: **closed**.
   The pushback is correct on current bytes because none of those findings belongs to batch 9. `research/frontier-23-alpha-b-step3-scaffold-review.md` still names only `B2-1`, `B2-2`, and `B5-1`, assigning them to batches 2 and 5, while its page-review sections for `smooth-manifolds-and-smooth-maps` and `euclidean-ordinary-differential-equations-with-smooth-dependence` both remain `sufficient` with no local repair needed. `research/frontier-23-batch-9.pages.json` remains consistent with that review, and the current coverage file still carries `4/4` fetch-verified source rows.

5. Group `b` scope decisions: **closed**.
   After refresh and check, all three live decline rows remain current and resolved as `stands` in `research/frontier-23-alpha-b-scope-decisions.json`. That still matches the present scaffold: Troshkin's `J^2=-1` paragraph is outside LA-14's current scope, Trefethen-Bau's rank-deficient least-squares branch is deferred to `the-moore-penrose-pseudoinverse-and-regularised-least-squares`, and Hitchin Theorem 2.2 is deferred to `rank-theorems-and-embedded-submanifolds`. No pending row remains for group `b`.

## Outcome

All five owned A pages remain closed on the current bytes:

- `complexification-realification-and-real-structures` -> `sufficient`
- `exterior-powers-orientation-and-hodge-duality` -> `sufficient`
- `matrix-norms-condition-numbers-and-numerical-stability` -> `sufficient`
- `smooth-manifolds-and-smooth-maps` -> `sufficient`
- `euclidean-ordinary-differential-equations-with-smooth-dependence` -> `sufficient`

No Step-3 scaffold blocker remains for Alpha group `b`.
