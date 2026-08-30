# frontier-24 alpha group d step 6b adjudication

Date: 2026-08-29
Run: frontier-24
Group: d
Scope: batch 10

## Batch 10

- Touched obligations: 2 total, both amended.
  `lem-gnf-substitution-step-preserves-language` keeps Reader 10's repaired proof but now also states explicitly that the displayed `B`-productions are exhaustive and has a synced batch-10 strategy row.
  `thm-greibach-normal-form` keeps Reader 10's two-phase repair but now also states the exhaustive substitution hypothesis directly in `[L2]`, carries the synced batch-10 strategy row, and includes the required `risk_review`.

- Refuter obligations: 6 total, all confirmed.
  Confirmed fatal and repaired: `def-parse-tree-and-yield`, `thm-derivation-parse-tree-correspondence`, `def-ambiguity-and-inherent-ambiguity`, `ex-extended-dfa-transition-respects-concatenation`, and `thm-greibach-normal-form`.
  Confirmed nonfatal and repaired: `thm-cfl-closure-under-union-concatenation-star-and-homomorphism`.

- Risk review: ran `risk-report.mjs` on `research/frontier-24-batch-10.proof-contracts.json` without `--require-reviewed`, reread every current HIGH or CRITICAL item against its proof and the reader/refuter evidence, and wrote complete `alpha-6b-d` `risk_review` notes for all 10 required batch-10 items:
  `thm-existence-and-uniqueness-of-extended-dfa-transition`, `thm-product-dfa-for-union-and-intersection`, `prop-published-prefix-automata-extend-to-factor-avoidance-dfas`, `thm-derivation-parse-tree-correspondence`, `thm-elimination-of-useless-symbols`, `thm-elimination-of-epsilon-productions`, `thm-elimination-of-unit-productions`, `thm-chomsky-normal-form`, `lem-gnf-left-recursion-elimination-preserves-language`, and `thm-greibach-normal-form`.

## Repairs

- `def-parse-tree-and-yield`
  The parse-tree definition now requires the tree itself to be finite, so infinite unary variable chains are excluded.

- `thm-derivation-parse-tree-correspondence`
  The proof now records epsilon-productions as variable leaves and uses finiteness to terminate the parse-tree-to-derivation construction.

- `def-ambiguity-and-inherent-ambiguity`
  The equivalence clause now speaks explicitly about finite parse trees.

- `ex-extended-dfa-transition-respects-concatenation`
  The example now specifies the start state and accepting set before using the DFA acceptance definition.

- `thm-cfl-closure-under-union-concatenation-star-and-homomorphism`
  The homomorphism proof now renames the source variables away from the target alphabet before replacing terminals by `h(a)`.

- `lem-gnf-substitution-step-preserves-language`
  The statement now requires the displayed `B`-productions to be exhaustive, and the proof still handles intervening surrounding-context rewrites.

- `thm-greibach-normal-form`
  The theorem now cites the substitution lemma only in that exhaustive form and keeps Reader 10's forward-pass plus downward-sweep repair.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/def-parse-tree-and-yield.md items/thm-derivation-parse-tree-correspondence.md items/def-ambiguity-and-inherent-ambiguity.md items/ex-extended-dfa-transition-respects-concatenation.md items/thm-cfl-closure-under-union-concatenation-star-and-homomorphism.md items/lem-gnf-substitution-step-preserves-language.md items/thm-greibach-normal-form.md`
  Result: pass; four files reflowed and the final bytes are canonical.

- `node tools/regen-contract-entries.mjs research/frontier-24-batch-10.proof-contracts.json def-parse-tree-and-yield thm-derivation-parse-tree-correspondence def-ambiguity-and-inherent-ambiguity ex-extended-dfa-transition-respects-concatenation thm-cfl-closure-under-union-concatenation-star-and-homomorphism lem-gnf-substitution-step-preserves-language thm-greibach-normal-form`
  Result: regenerated the 5 authored-item entries and skipped the 2 definition-only ids with no proof-contract rows.

- `node tools/tsx-run.mjs tools/precheck.mts items/def-parse-tree-and-yield.md items/thm-derivation-parse-tree-correspondence.md items/def-ambiguity-and-inherent-ambiguity.md items/ex-extended-dfa-transition-respects-concatenation.md items/thm-cfl-closure-under-union-concatenation-star-and-homomorphism.md items/lem-gnf-substitution-step-preserves-language.md items/thm-greibach-normal-form.md`
  Result: pass, 5 proof-bearing items checked, 0 failing.

- `node tools/proof-contract.mjs research/frontier-24-batch-10.proof-contracts.json --strict`
  Result: pass, 28/28 items checked, 0 errors, 0 warnings.

- `node tools/citation-fidelity.mjs research/frontier-24-batch-10.proof-contracts.json --fail-on-missing-quote`
  Result: pass; 53 citations, no missing quotes, no widening candidates.

- `node tools/boundary-audit.mjs research/frontier-24-batch-10.proof-contracts.json --fail-on-contradicted`
  Result: pass; no contradicted dispositions, only non-blocking template-reuse clusters.

- `node tools/risk-report.mjs research/frontier-24-batch-10.proof-contracts.json --json`
  Result: pass; the 10 required HIGH/CRITICAL items all carry complete `alpha-6b-d` `risk_review` rows.

- `node tools/risk-report.mjs research/frontier-24-batch-10.proof-contracts.json --require-reviewed --json`
  Result: pass.

- `node tools/rendercheck.mjs items/def-parse-tree-and-yield.md items/thm-derivation-parse-tree-correspondence.md items/def-ambiguity-and-inherent-ambiguity.md items/ex-extended-dfa-transition-respects-concatenation.md items/thm-cfl-closure-under-union-concatenation-star-and-homomorphism.md items/lem-gnf-substitution-step-preserves-language.md items/thm-greibach-normal-form.md`
  Result: pass, `OK — 7 file(s)`.

- `git diff --check -- items/def-parse-tree-and-yield.md items/thm-derivation-parse-tree-correspondence.md items/def-ambiguity-and-inherent-ambiguity.md items/ex-extended-dfa-transition-respects-concatenation.md items/thm-cfl-closure-under-union-concatenation-star-and-homomorphism.md items/lem-gnf-substitution-step-preserves-language.md items/thm-greibach-normal-form.md research/frontier-24-batch-10.proof-contracts.json research/frontier-24-batch-10.pages.json`
  Result: pass.

## Blockers

- None in the live batch-10 scope.
