# Step 8 rejudge closure recovery — group d

Run `frontier-27`, 8-rejudge round 1.

## Outcomes

- Exact live tuples handled: 16.
- `confirmed_fatal`: 12, each repaired and recorded in the defect ledger.
- `confirmed_nonfatal`: 4, with no content or contract change.
- `false_positive`: 0.
- Cross-group alerts: none.

| item | context | pre-edit guard hash | outcome | disposition |
|---|---|---|---|---|
| `cex-model-invariance-means-equal-step-counts` | `84299dfa8cc9e9fa…` | `dbd52bbd07838a14…` | `confirmed_fatal` | Replaced the undefined marked-block witness by an explicit translation that inserts a reversible two-step delay before every original transition, proving a three-for-one step count. |
| `def-asymptotic-resource-comparison` | `d141b521985e9652…` | `f9f2b0b5f910c617…` | `confirmed_fatal` | Declared the resource comparison bounds t and s and their domains. |
| `def-kleene-t-predicate-and-output-function` | `8be96a2a1e481ef1…` | `fe6162551463fa1b…` | `confirmed_fatal` | Added the exact primitive-recursive closure dependency and used it for equality, composition, bounded search, and bounded universal history validation. |
| `def-time-and-space-constructible-function` | `b2011088d49ad986…` | `7bbca9684bb72eae…` | `confirmed_fatal` | Removed the false logarithmic-space claim under the library’s all-tapes visited-cell convention and recorded the unary input-reading obstruction. |
| `ex-lambda-definable-iff-partial-recursive` | `b214116c8218fe5f…` | `1fac92d5503aec13…` | `confirmed_nonfatal` | Primitive-recursive implies partial-recursive immediately from the defining inclusion and matching closure schemes; the omitted citation is a locally closable proof gap. |
| `fs-every-countable-language-is-decidable` | `3611f1d5cfbbd022…` | `29a22e6d88d6c0ec…` | `confirmed_nonfatal` | F1 itself gives the elementary normalization construction by finite relabelling, adding unreachable states, and completing missing transitions; no separate theorem is needed. |
| `fs-model-invariance-means-equal-step-counts` | `342820b58caa4c43…` | `ca5b60a639c28ab9…` | `confirmed_fatal` | Removed the overstated simulation citation and supplied the same explicit delayed-transition counterexample. |
| `fs-time-bounds-never-need-constructibility` | `8c65477e72cdd214…` | `bf73fd16b311f6e8…` | `confirmed_fatal` | Replaced the invalid necessity inference by the diagonal noncomputable bound t(n)=2n+b(n), whose materialization would compute b. |
| `lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold` | `1fe100b49ef9b6eb…` | `42cec23c9fd58fc2…` | `confirmed_fatal` | Restated L1 with the cited definition’s nonempty-set condition. |
| `lem-turing-step-coding-is-primitive-recursive` | `4a1057b8be51157b…` | `fc0773d2523a7763…` | `confirmed_fatal` | Added a bounded backward scan that canonically trims trailing blanks while retaining a blank head position. |
| `prop-ackermann-is-total-computable-but-not-primitive-recursive` | `62b5bcab9d9d56cd…` | `1cfe7054e8e24f48…` | `confirmed_fatal` | Corrected the false every-higher-row domination claim to existence of a sufficiently high row. |
| `prop-polynomial-time-and-space-are-model-invariant` | `cb11d3e4e32f3326…` | `e6672d6a38df91b3…` | `confirmed_nonfatal` | The one-tape model is immediately the k=1 multitape case, so the missing model-definition citation is nonfatal. |
| `thm-kleene-normal-form` | `060a1374672036a0…` | `398490578bcb6ea0…` | `confirmed_fatal` | Expanded the assumed compiler into a structural induction constructing machines for initial functions, composition, primitive recursion, and minimization. |
| `thm-lambda-definable-iff-partial-recursive` | `56906d6fe34b781a…` | `1a24c2842549672b…` | `confirmed_fatal` | Proved fixed-arity tuple encoding primitive recursive using bounded bit arithmetic, repeated doubling, and concatenation. |
| `thm-myhill-nerode-characterization` | `c9d42977ee541a0e…` | `c3e7d94f5840cf94…` | `confirmed_nonfatal` | Representative independence follows immediately by applying Nerode equivalence to the empty continuation, so the omitted sentence is nonfatal. |
| `thm-universal-simulation-with-logarithmic-overhead` | `d23063dfa3c72c08…` | `0729711f395da343…` | `confirmed_fatal` | Corrected the statement and proof to return the encoded output word required by the universal-machine definition. |

## Licensed repairs and rejudge targets

- `cex-model-invariance-means-equal-step-counts` — Replaced the undefined marked-block witness by an explicit translation that inserts a reversible two-step delay before every original transition, proving a three-for-one step count.
- `def-asymptotic-resource-comparison` — Declared the resource comparison bounds t and s and their domains.
- `def-kleene-t-predicate-and-output-function` — Added the exact primitive-recursive closure dependency and used it for equality, composition, bounded search, and bounded universal history validation.
- `def-time-and-space-constructible-function` — Removed the false logarithmic-space claim under the library’s all-tapes visited-cell convention and recorded the unary input-reading obstruction.
- `fs-model-invariance-means-equal-step-counts` — Removed the overstated simulation citation and supplied the same explicit delayed-transition counterexample.
- `fs-time-bounds-never-need-constructibility` — Replaced the invalid necessity inference by the diagonal noncomputable bound t(n)=2n+b(n), whose materialization would compute b.
- `lem-iterated-sparse-restriction-reaches-the-target-sparsity-threshold` — Restated L1 with the cited definition’s nonempty-set condition.
- `lem-turing-step-coding-is-primitive-recursive` — Added a bounded backward scan that canonically trims trailing blanks while retaining a blank head position.
- `prop-ackermann-is-total-computable-but-not-primitive-recursive` — Corrected the false every-higher-row domination claim to existence of a sufficiently high row.
- `thm-kleene-normal-form` — Expanded the assumed compiler into a structural induction constructing machines for initial functions, composition, primitive recursion, and minimization.
- `thm-lambda-definable-iff-partial-recursive` — Proved fixed-arity tuple encoding primitive recursive using bounded bit arithmetic, repeated doubling, and concatenation.
- `thm-universal-simulation-with-logarithmic-overhead` — Corrected the statement and proof to return the encoded output word required by the universal-machine definition.

The 12 items above are the complete group-d rejudge target set created by this recovery. No additional judge cycle was initiated here.

## Records updated

- Appended 16 exact outcomes to `research/frontier-27-judge-adjudications.jsonl`.
- Appended 12 recurrence-linked defect rows through `tools/defect-ledger.mjs`; regenerated `research/DEFECT-LEDGER.md`.
- Regenerated affected entries in the batch-7 and batch-10 proof contracts and re-merged the 357-item level contract.
- Updated boundary and risk records made stale by the repairs.

## Source checks

No web lookup was needed; the exact local dependencies resolved every issue:

- `def-multitape-and-nondeterministic-machines`: one tape is the k=1 deterministic multitape case and fixes the per-step transition model.
- `def-worst-case-time-and-space-complexity`: input-tape cells count toward visited-cell space, ruling out the logarithmic unary constructor claim.
- `prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive`: supplies equality, arithmetic, bounded search, and bounded quantification closure.
- `def-c-sparse-and-c-restricted-vertex-set`: sparse vertex sets are explicitly nonempty.
- `def-universal-turing-machine`: the simulator must return the encoded output word, not the unencoded machine output.
- `def-natural-number-coding-of-finite-sequences` and the primitive-recursive reader theorem: fix the tuple format used in the coding repairs.

## Checks

- Focused precheck: 9 repaired proof-bearing items, 0 failures.
- Focused rendercheck: 12 repaired items, 0 failures.
- Full proof-contract, reviewed risk-report, boundary-audit, and citation-fidelity gates: passed; citation fidelity checked 957 rows with no missing quote or widening candidate.
- Dependency check: passed with pre-existing warnings only.
- Defect-ledger check: 298 run rows, 0 errors.
- Step-8 guard: 96/96 changed items licensed.
- Step-8 scope check: 449 items partitioned, 0 open rejections, 0 cross-group alerts.

## Blockers

No group-d blocker remains. The engine still owns the targeted rejudge of the 12 repaired items and all subsequent stage transitions.
