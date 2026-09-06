# frontier-31a · reader 21

## Scope opened

Read `research/frontier-31a-batch-21.pages.json` and its 44 current item
files, together with all four current pages:

- A: `the-arithmetical-hierarchy-and-posts-theorem` —
  `def-bounded-arithmetic-formula`, `def-sigma-n-pi-n-and-delta-n-sets`,
  `lem-bounded-quantifiers-preserve-primitive-recursiveness`,
  `thm-sigma-one-sets-are-exactly-ce-sets`,
  `cor-delta-one-sets-are-exactly-decidable`,
  `lem-prenex-normalization-preserves-level`,
  `def-arithmetical-level-completeness`, `thm-halting-is-sigma-one-complete`,
  `thm-totality-is-pi-two-complete`,
  `def-relative-computability-and-enumerability`,
  `lem-oracle-computation-has-a-finite-query-witness`, `thm-posts-theorem`,
  `lem-diagonal-set-at-each-level`, `thm-arithmetical-hierarchy-is-strict`,
  `def-limit-computable-function`, `thm-shoenfield-limit-lemma`,
  `fs-sigma-n-and-pi-n-are-disjoint`, and
  `fs-limit-computable-has-a-known-stabilization-stage`.
- B: `the-arithmetical-hierarchy-and-posts-theorem-examples` —
  `ex-sigma-one-sets-are-exactly-ce-sets`, `ex-shoenfield-limit-lemma`, and
  `cex-sigma-n-and-pi-n-are-disjoint`.
- A: `time-and-space-hierarchy-theorems` —
  `def-efficient-universal-simulation-with-clock`,
  `lem-effective-enumeration-of-clocked-machines`,
  `lem-time-diagonal-language-respects-its-budget`,
  `thm-deterministic-time-hierarchy`, `cor-p-is-properly-contained-in-exp`,
  `thm-nondeterministic-time-hierarchy`,
  `lem-space-bounded-universal-simulation`,
  `lem-space-diagonal-machine-halts`, `thm-deterministic-space-hierarchy`,
  `def-read-only-input-workspace-classes`,
  `lem-read-only-workspace-universal-simulation`,
  `lem-read-only-workspace-diagonal-machine-halts`,
  `thm-read-only-workspace-space-hierarchy`,
  `lem-read-only-workspace-simulates-in-all-tapes-space`,
  `cor-l-is-properly-contained-in-pspace`, `def-language-padding`,
  `lem-padding-transfers-time-bounds`,
  `thm-gap-and-union-theorems-for-complexity-bounds`,
  `prop-hierarchy-theorems-do-not-separate-p-from-np`, and
  `fs-unrestricted-diagonalization-respects-any-bound`.
- B: `time-and-space-hierarchy-theorems-examples` —
  `ex-time-diagonal-language-respects-its-budget`,
  `ex-hierarchy-theorems-do-not-separate-p-from-np`, and
  `cex-unrestricted-diagonalization-respects-any-bound`.

Opened the direct external dependencies used to verify these claims, including
the arithmetic-hierarchy, coding, reduction, resource-class, constructibility,
configuration-count, P/NP/PSPACE, and halting items named by the manifest. I
also opened the three required published page summaries. Source verification
used the current coverage records and the cited source text: Arora--Barak
Chapter 3 (Theorems 3.2 and 3.3, PDF pp. 81--82), Hartmanis--Hopcroft Theorem
7 (PDF p. 14) and Theorem 16 (PDF pp. 23--24), and Terwijn Theorem 5.6.1
(PDF pp. 46--47).

## Repairs

- `items/thm-posts-theorem.md`: replaced the incorrect reference to a
  `Sigma_{n+1}` predicate with the required `Pi_{n+1}` matrix, explained its
  jump-decidability, and made the finite yes/no oracle transcript and the
  `Delta` clause explicit.
- `items/thm-nondeterministic-time-hierarchy.md`: replaced the impossible
  claim that all candidate branches can be exhaustively simulated within the
  same local slack by the lazy interval diagonalization: exhaustive inspection
  is performed only at a much larger endpoint.
- `items/lem-space-bounded-universal-simulation.md` and
  `items/thm-deterministic-space-hierarchy.md`: charged the variable
  description/input in the repository's all-tapes model, obtaining
  `O(n+s(n))` and adding `n=O(f(n))` to the hierarchy theorem.
- `items/thm-gap-and-union-theorems-for-complexity-bounds.md`: restored the
  source conditions `r(m)>m`, monotonicity of the gap bound, and pointwise
  strict increase of the recursively enumerable union sequence; clarified the
  finite gap and priority schedules.
- `items/fs-unrestricted-diagonalization-respects-any-bound.md`: removed the
  unsupported `Theta(f log f)` assertion and retained only the verified
  `O(f log f)` simulation budget.
- Updated the six corresponding entries in
  `research/frontier-31a-batch-21.proof-contracts.json`. None carried a stale
  `verification.judge` record to remove.

## Uneditable finding

`items/cex-unrestricted-diagonalization-respects-any-bound.md:33` is on a
B-page and therefore was not edited. Its `Theta(n log n)` lower-bound claim
does not follow from the stated fixed-simulator convention, which supplies an
`O(n log n)` upper bound only. It is emitted in the findings artifact.

## Verdicts and checks

| Page | Verdict |
| --- | --- |
| `the-arithmetical-hierarchy-and-posts-theorem` | passes after repair |
| `the-arithmetical-hierarchy-and-posts-theorem-examples` | passes; no editable defect |
| `time-and-space-hierarchy-theorems` | passes after repair |
| `time-and-space-hierarchy-theorems-examples` | one uneditable B-item finding |

Reflow and focused precheck passed for all six changed items. The batch proof
contract passed strictly (`36/36`); `manifest-deps` passed (`44` items);
coverage checklist passed (`2` pages, `65` results); source fetch check passed
(`5/5`); and `git diff --check` passed.

## Blockers

- `node tools/step6-scope.mjs check --run frontier-31a --batch 21` reports
  `scope-batch-missing`: `research/frontier-31a-step6-scope-21.json` is not
  present. It is workflow state outside this reader's authority.
- The repository-wide `depcheck` has eight unrelated existing errors and many
  warnings outside batch 21. No out-of-scope content was changed.
- The live autopilot status identifies `frontier-23`, rather than this
  dispatch's `frontier-31a`; no live state was edited.
