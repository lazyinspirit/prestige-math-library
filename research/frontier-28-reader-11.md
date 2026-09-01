# frontier-28 reader-11

Date: 2026-09-01
Run: `frontier-28`
Batch: `11`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `AGENTS.md`, `CLAUDE.md`, `README.md`, `research/frontier-28-reader.task.md`, `research/frontier-28-beta-11.task.md`, `research/frontier-28-batch-11.pages.json`, `research/frontier-28-batch-11.coverage.json`, `research/frontier-28-batch-11.proof-contracts.json`, `research/frontier-28-batch-11.notes.md`, `research/plan-computability-theory-track.md` (TC-12 and TC-20 design blocks), and `research/plan-spec.json` (entries for orders `603/604/619/620`).
- Assigned pages: `library/computability-theory/diagonalization-and-the-halting-problem.md`, `library/computability-theory/diagonalization-and-the-halting-problem-examples.md`, `library/computability-theory/p-np-conp-and-polynomial-reductions.md`, `library/computability-theory/p-np-conp-and-polynomial-reductions-examples.md`.
- Assigned A-page items: `def-turing-machine-acceptance-problem`, `thm-machine-acceptance-is-recognizable`, `lem-diagonal-self-application-machine`, `thm-machine-acceptance-is-undecidable`, `def-halting-problem`, `thm-halting-is-recognizable-and-undecidable`, `cor-nonhalting-is-not-recognizable`, `thm-an-unrecognizable-language-exists`, `def-busy-beaver-function`, `thm-busy-beaver-dominates-every-total-computable-function`, `cor-busy-beaver-is-not-computable`, `thm-totality-is-not-recognizable`, `thm-machine-equivalence-is-undecidable`, `fs-undecidable-means-no-instance-can-be-answered`, `fs-diagonalization-needs-literal-source-self-reading`, `def-p`, `def-polynomially-balanced-verifier`, `def-np-by-verifiers`, `thm-verifier-and-nondeterministic-definitions-of-np-agree`, `def-conp`, `prop-p-is-contained-in-np-intersection-conp`, `def-polynomial-time-many-one-reduction`, `lem-polynomial-reductions-compose`, `thm-polynomial-reductions-transfer-p-np-and-conp-membership`, `def-np-hard-and-np-complete`, `prop-an-np-complete-language-in-p-implies-p-equals-np`, `def-search-version-of-an-np-relation`, `thm-sat-search-reduces-to-sat-decision`, `def-exp-and-nexp`, `prop-np-is-contained-in-pspace-and-pspace-in-exp`, `fs-np-means-not-polynomial`, `fs-np-complete-means-known-not-in-p`.
- Assigned B-page items: `ex-diagonal-self-application-machine`, `ex-machine-equivalence-is-undecidable`, `cex-undecidable-means-no-instance-can-be-answered`, `ex-p-is-contained-in-np-intersection-conp`, `ex-np-is-contained-in-pspace-and-pspace-in-exp`, `cex-np-means-not-polynomial`.
- Dependency items opened for verification: `def-effective-encoding-of-turing-machines`, `def-computation-alphabet-and-word-convention`, `def-decidable-and-recognizable-language`, `def-language-recognized-and-decided`, `def-halting-computation-and-divergence`, `def-computable-and-partial-computable-function`, `def-natural-numbers`, `def-dtime-ntime-dspace-and-nspace`, `def-worst-case-time-and-space-complexity`, `def-tape-finite-support-convention`, `def-turing-machine-configuration`, `lem-finite-tuples-admit-effective-prefix-free-encodings`, `lem-time-at-least-input-length-permits-complete-input-reading`, `lem-machine-encoding-is-injective-and-decodable`, `lem-step-by-step-interpreter-for-machine-codes`, `prop-machine-descriptions-form-a-decidable-language`, and `thm-existence-of-a-universal-turing-machine`.

## Design/spec check

- The TC-12 and TC-20 design blocks agree with the current `research/plan-spec.json` entries on page ids, companion ids, orders `603/604/619/620`, titles, and prerequisites. I found no design-vs-spec drift in this batch.

## Confirmed defects and edits

1. Repaired `items/def-halting-problem.md`: the definition reuses the pairing and word-code conventions from `def-turing-machine-acceptance-problem`, but the item did not declare that dependency. I added the missing dependency.
2. Repaired `items/thm-verifier-and-nondeterministic-definitions-of-np-agree.md`: the converse NP proof treated the fixed-arity tuple-encoding lemma as though it directly encoded arbitrary finite branch histories. I replaced that step with an explicit unary-header plus fixed-width choice-block encoding, removed the stale cited dependency from the item, and reflowed the file.
3. Repaired `items/lem-polynomial-reductions-compose.md`: the `Given` line typed the witness maps as `f:A\to B` and `g:B\to C`, which is not the reduction notion defined on full word domains. I rewrote the setup to say that `f` witnesses `A\le_p B` and `g` witnesses `B\le_p C`.
4. Repaired `items/prop-an-np-complete-language-in-p-implies-p-equals-np.md`: the second proof step appealed to the reverse inclusion `P\subseteq NP` without citing or declaring the earlier proposition that proves it. I added the missing dependency/citation and made the equality argument explicit.
5. Updated `research/frontier-28-batch-11.proof-contracts.json` to match the repaired NP-definition-equivalence proof and the repaired `P=NP` consequence proof.

## Per-page verdicts

- `diagonalization-and-the-halting-problem`: pass after the repaired halting-definition dependency. The acceptance, halting, busy-beaver, totality, and equivalence claims are coherent against the opened dependency closure.
- `diagonalization-and-the-halting-problem-examples`: pass. The example and counterexample items match the repaired A-page mathematics.
- `p-np-conp-and-polynomial-reductions`: pass after the repaired branch-encoding proof, reduction typing cleanup, and explicit `P\subseteq NP` citation. The remaining class, reduction, SAT, and containment items verify on current disk.
- `p-np-conp-and-polynomial-reductions-examples`: pass. The examples and counterexample remain consistent with the repaired A-page claims.

## Focused checks

- `node tools/tsx-run.mjs tools/reflow.mts items/def-halting-problem.md items/thm-verifier-and-nondeterministic-definitions-of-np-agree.md items/lem-polynomial-reductions-compose.md items/prop-an-np-complete-language-in-p-implies-p-equals-np.md`
  Result: only `items/thm-verifier-and-nondeterministic-definitions-of-np-agree.md` changed under reflow; the others were already stable.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-halting-problem.md items/thm-verifier-and-nondeterministic-definitions-of-np-agree.md items/lem-polynomial-reductions-compose.md items/prop-an-np-complete-language-in-p-implies-p-equals-np.md`
  Result: `3 checked, 0 failing — all clean` (the changed definition remains `precheck: n/a`).
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-machine-acceptance-is-recognizable.md items/lem-diagonal-self-application-machine.md items/thm-machine-acceptance-is-undecidable.md items/thm-halting-is-recognizable-and-undecidable.md items/cor-nonhalting-is-not-recognizable.md items/thm-an-unrecognizable-language-exists.md items/thm-busy-beaver-dominates-every-total-computable-function.md items/cor-busy-beaver-is-not-computable.md items/thm-totality-is-not-recognizable.md items/thm-machine-equivalence-is-undecidable.md items/fs-undecidable-means-no-instance-can-be-answered.md items/fs-diagonalization-needs-literal-source-self-reading.md items/ex-diagonal-self-application-machine.md items/ex-machine-equivalence-is-undecidable.md items/cex-undecidable-means-no-instance-can-be-answered.md items/thm-verifier-and-nondeterministic-definitions-of-np-agree.md items/prop-p-is-contained-in-np-intersection-conp.md items/lem-polynomial-reductions-compose.md items/thm-polynomial-reductions-transfer-p-np-and-conp-membership.md items/prop-an-np-complete-language-in-p-implies-p-equals-np.md items/thm-sat-search-reduces-to-sat-decision.md items/prop-np-is-contained-in-pspace-and-pspace-in-exp.md items/fs-np-means-not-polynomial.md items/fs-np-complete-means-known-not-in-p.md items/ex-p-is-contained-in-np-intersection-conp.md items/ex-np-is-contained-in-pspace-and-pspace-in-exp.md items/cex-np-means-not-polynomial.md`
  Result: `27 checked, 0 failing — all clean`.
- `node tools/content-policy.mjs research/frontier-28-batch-11.pages.json`
  Result: `38 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: exit `0`; the existing repo-wide redundant-prerequisite warnings remain outside this batch.
- `node tools/proof-contract.mjs research/frontier-28-batch-11.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 27/27 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-28-batch-11.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-28-batch-11.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: no contradicted boundary dispositions.
- `git diff --check -- items/def-halting-problem.md items/thm-verifier-and-nondeterministic-definitions-of-np-agree.md items/lem-polynomial-reductions-compose.md items/prop-an-np-complete-language-in-p-implies-p-equals-np.md research/frontier-28-batch-11.proof-contracts.json`
  Result: clean.

## Uneditable defects

- None remaining in the opened scope.

## Blockers

- None.
