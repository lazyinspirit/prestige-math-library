# frontier-29 reader-1 report

Current bytes read on Tuesday, September 1, 2026.

## Opened scope

- Control artifacts: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `research/frontier-29-reader.task.md`, `research/frontier-29-covers.json`, `.autopilot/state.json`, `.autopilot/status.md`, `research/frontier-29-batch-1.pages.json`, `research/frontier-29-batch-1.coverage.json`, `research/frontier-29-batch-1.proof-contracts.json`, and `research/frontier-29-batch-1.notes.md`.
- Assigned pages: `group-extensions-complements-and-schur-zassenhaus`, `group-extensions-complements-and-schur-zassenhaus-examples`, `crossed-homomorphisms-complements-and-first-cohomology`, and `crossed-homomorphisms-complements-and-first-cohomology-examples`.
- Assigned items: all 57 current item files listed by `research/frontier-29-batch-1.pages.json`.
- Direct dependency items opened to verify the current proofs and examples: `def-split-extension-of-groups`, `thm-splitting-lemma-for-group-extensions`, `def-outer-automorphism-group`, `thm-conjugation-is-an-automorphism`, `def-centralizer-of-a-subgroup`, `thm-sylow-second-theorem`, `lem-nontrivial-normal-subgroup-of-a-solvable-group-has-an-abelian-normal-subgroup`, `thm-subgroups-and-quotients-of-solvable-groups-are-solvable`, `thm-cauchys-theorem-for-finite-groups`, `cor-prime-order-group-is-cyclic`, `thm-z-mod-p-is-a-field`, `def-external-semidirect-product`, `def-group-homomorphism`, `cor-order-of-a-quotient-group`, and `thm-multiplicative-group-of-a-finite-field-is-cyclic`.
- External-source spot checks opened in the web reader: Craven's finite-group notes at the Schur-Zassenhaus proof, Eilenberg-Mac Lane's nonabelian-extension paper at the introduction and kernel discussion, and Chaoli Li's notes at Definition 20, Remark 34, and Theorem 3.

## Repairs

1. `items/thm-schur-zassenhaus-conjugacy-when-kernel-or-quotient-is-solvable.md`
   Repaired a fatal proof defect in the quotient-solvable branch. The old step 2.3 claimed `M=NA` was normal in `G` from `A \trianglelefteq H`, which is false in general. I rewrote the branch through a proper abelian normal subgroup of `Q=G/N`, took its normal preimage `M`, and then used the normalizer / quotient reduction that actually supports the induction. I also removed the stale unused dependency and refreshed the contract row in `research/frontier-29-batch-1.proof-contracts.json`.

2. `items/cor-first-cohomology-of-a-finite-group-with-uniquely-divisible-coefficients-vanishes.md`
   Corrected the step-2.1 sign computation. The old line expanded `m(z(g)-g\cdot a+a)` with the wrong signs. I rewrote the algebra in the item and in its proof-contract entry.

3. `items/ex-the-affine-group-agl-one-p-has-one-kernel-conjugacy-class-of-complements.md`
   Repaired three linked issues: the old dependency on the uniquely-divisible vanishing corollary was inapplicable to `\mathbb F_p`, the proof silently used the unproved claim that `\mathbb F_p^\times` is cyclic, and the argument missed the boundary case `p=2`. I replaced the dependency chain with the correct finite-field cyclicity and `H^1=Z^1/B^1` items, added the `p=2` branch, and refreshed the contract row.

4. `items/cor-extensions-with-coprime-kernel-and-quotient-split.md`
   Repaired an unsupported citation chain. The old proof cited the Hall-to-coprime lemma in the converse direction and then used the split criterion without declaring it. I rewrote the proof to use the earlier kernel/quotient lemma on this page plus the splitting criterion, and updated the dependency list and contract row accordingly.

- No changed item carried a `verification.judge` record, so there was no stale judge stamp to remove.
- `boundary-audit` reported one candidate on `fs-isomorphic-middle-groups-force-equivalent-group-extensions`, but after opening the item and its current row I did not confirm a defect: the detector matched the phrase "equivalent as extensions" even though the item states only a one-way implication.

## Page verdicts

- `group-extensions-complements-and-schur-zassenhaus`: sufficient after the repaired A-page items and refreshed contracts.
- `group-extensions-complements-and-schur-zassenhaus-examples`: sufficient; no uneditable defect remained.
- `crossed-homomorphisms-complements-and-first-cohomology`: sufficient after the repaired A-page item and refreshed contract.
- `crossed-homomorphisms-complements-and-first-cohomology-examples`: sufficient after the repaired in-flight example and refreshed contract.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts` on the 4 changed items: all 4 reflowed into canonical form.
- `node tools/tsx-run.mjs tools/precheck.mts` on the 4 changed items: `4 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-29-batch-1.proof-contracts.json --strict --items ...`: clean after the contract refresh.
- `node tools/proof-contract.mjs research/frontier-29-batch-1.proof-contracts.json --strict`: `42/42` clean.
- `node tools/citation-fidelity.mjs research/frontier-29-batch-1.proof-contracts.json`: no missing quotes and no widening candidates.
- `node tools/rendercheck.mjs` on the 4 changed items and separately on the 4 assigned page files: clean.
- `node tools/content-policy.mjs research/frontier-29-batch-1.pages.json`: `57 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/boundary-audit.mjs research/frontier-29-batch-1.proof-contracts.json`: only the inspected false-positive candidate noted above.
- `git diff --check` on the changed files: clean.

## Blockers

- None.

No uneditable in-flight-item, page, or published-dependency defect remained on the current bytes after the permitted repairs.
