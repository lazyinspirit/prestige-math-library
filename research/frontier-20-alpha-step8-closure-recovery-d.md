# Frontier 20 — Step-8 closure recovery, group d

## Scope reconciled

I read `frontier-20-judge-closure.json`, the judge and adjudication JSONL
ledgers, and the `by_item` map in `frontier-20-step8-scope.json`. Exactly 20
current rejection tuples were owned by group d and lacked an exact
adjudication. Every pre-edit item hash matched the corresponding judge row.

## Outcomes and repairs

| item | context_sha256 | outcome | disposition |
|---|---|---|---|
| `def-additive-category` | `1a77b8c5447b2961ed1d13df4d55d2cf849937f7a418b1a6eeb132a5aaaf6337` | `confirmed_fatal` | The reverse implication misattributed zero-object-to-empty-biproduct to a one-way proposition. It now derives the empty product and coproduct from terminality and initiality using exact dependencies. Ledger `frontier-20-S8R1-d-001`; rejudge target. |
| `def-comb-in-a-graph` | `70ab5e5036ac5b5998928cdd49360649778afbdd02c5adcbe82f7f328cb8e100` | `confirmed_fatal` | Defined vertex-to-set complete and anticomplete through the exact published set-pair definition. Ledger `frontier-20-S8R1-d-002`; rejudge target. |
| `def-sparse-orientation-of-a-blockade` | `7726b75d4d24659d14abd187149f4dedd03d77dbc619d82b958f54d6cfd4b1c7` | `confirmed_fatal` | Added the omitted dependency and link for the ordered definition of an `x`-sparse blockade. Ledger `frontier-20-S8R1-d-003`; rejudge target. |
| `def-continued-fraction-complete-quotients` | `2cd87031771c93d501d27be6c3bd250e4cdc6c855dfc25ee9d99698378772731` | `false_positive` | Distinct integers differing by at least one is the elementary discreteness argument explicitly invoked in the uniqueness paragraph; no content change. |
| `def-the-additive-category-of-matrices-over-a-ring` | `968ea5678681a7ae23e515dc5f07581cd631b59fb2698077a042509e7f8fe9ec` | `confirmed_fatal` | Narrowed the title to “The matrix category over a ring”; the following theorem, not this definition, proves additivity. Ledger `frontier-20-S8R1-d-004`; rejudge target. |
| `def-convergents-of-regular-continued-fraction` | `dfd26c1727e672dc66d1c165ec7cbc251cbaab8ac09c8ca56be8176a9d8c42ea` | `confirmed_fatal` | Restricted the recurrence to indices for which the digit exists and named the terminal index in the finite case. Ledger `frontier-20-S8R1-d-005`; rejudge target. |
| `ex-the-idempotent-completion-of-a-ring-is-the-finitely-generated-projective-modules` | `a10b3196dc7d197a84340b4cdbe1263bc2ed80512dd6c7177e8ee3c71a300bd9` | `confirmed_fatal` | Replaced the false appeal to the Karoubi universal property by the explicit splitting `P=im(e)`, inclusion `i`, and corestriction `p`, with `ip=e` and `pi=1_P`. Ledger `frontier-20-S8R1-d-006`; rejudge target. |
| `lem-p-four-free-pattern-graphs-have-square-root-homogeneous-sets` | `37b5b0a8911a19f63a19207c7820b3d65a04236c32dce13c55eff949a12d018d` | `confirmed_nonfatal` | An induced subgraph of a `P_4`-free graph is immediately `P_4`-free; the omitted one-line heredity observation is nonfatal and no content changed. |
| `thm-lah-numbers-count-ordered-set-partitions-and-expand-rising-factorials` | `f5ea9793010fb5114d2eae8eb265047f6020f02640fd1d539f504f930fa037c1` | `confirmed_nonfatal` | Counting permutations by `n!` and subsets of `k-1` gaps by the binomial coefficient are elementary parts of the displayed bijection; the local citation polish is nonfatal and no content changed. |
| `thm-large-sparse-pair-hypotheses-yield-x-sparse-blockades` | `819cf1ae781ea4800ede98a9bf9dbf76105835ed8e7b0524d77a670c9667070b` | `confirmed_fatal` | Step 4 now selects the target number of blocks from whichever of `Q` or `R` is large instead of asserting that both are large. Ledger `frontier-20-S8R1-d-007`; rejudge target. |
| `ex-best-rational-approximations-to-pi` | `40e44a9a3d1b5a1ee5a210acd8581af11ade9b75ea7811eeaf0b87196e389435` | `confirmed_fatal` | Restored Legendre’s irrationality hypothesis in F1; L1 supplies it for `pi`. Ledger `frontier-20-S8R1-d-008`; rejudge target. |
| `thm-biproduct-data-characterisation-without-addition` | `fc96775583a844f8924542af3998dbb56775d9805e6ebf08978e467fa9dd41ad` | `confirmed_fatal` | Removed the narrower, misapplied preadditive-category citation; the theorem now uses the zero morphisms supplied in its Given. Ledger `frontier-20-S8R1-d-009`; rejudge target. |
| `ex-continued-fraction-of-square-root-two` | `8fb0d9b758fa5351f311650bd323405ae798109c607cd4e2f275291809ec1c28` | `confirmed_fatal` | Added the exact reconstruction theorem and applied it after proving that the computed quotient cycle never terminates. Ledger `frontier-20-S8R1-d-010`; rejudge target. |
| `ex-golden-ratio-as-a-periodic-continued-fraction` | `ad297090153eb46c46acddf93abafb4c49dc84ac987e6cb474dd63abcd734cd3` | `confirmed_fatal` | Derived the fixed-point equation from finite truncation recursion and an explicit reciprocal limit estimate, rather than assuming an infinite tail identity. Ledger `frontier-20-S8R1-d-011`; rejudge target. |
| `lem-continued-fraction-error-bound` | `e6392c18d996955ec9f9de6d00fd9057814f713e35b298defc57f35e7440a185` | `confirmed_fatal` | Added exact facts for the denominator recurrence and strict complete-quotient inequality used in the proof. Ledger `frontier-20-S8R1-d-012`; rejudge target. |
| `thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules` | `f00da2e8c4293dfb7dd20b5ff8fa94d5c90dd7c350a5d50ca47cf780e33b4f5e` | `confirmed_fatal` | Separated the choice-free full-faithful/essential-image claim from the equivalence claim, explicitly supplied basis witnesses for split essential surjectivity, and cited the exact split criterion. Ledger `frontier-20-S8R1-d-013`; rejudge target. |
| `lem-periodic-continued-fraction-is-quadratic` | `232afc0a79810c2fb4ab491255e3e15926b4beb64ab905edfc2d5283adb3d891` | `confirmed_fatal` | Replaced both unsupported infinite-tail substitutions by finite repeated-period truncations and positive-denominator limit passages. Ledger `frontier-20-S8R1-d-014`; rejudge target. |
| `thm-convergence-of-infinite-regular-continued-fractions` | `13aad33a1945e5f279986abe3908285ca86b31b07d7ea4b896d3c07f4fc95f2d` | `confirmed_nonfatal` | The recurrence and initial denominators are the immediate unpacking of the cited convergent definition already in `deps`; the missing fact label is nonfatal and no content changed. |
| `thm-lagrange-periodic-continued-fraction-theorem` | `31ea444d37a49f5ec17d670f843f70e2c987f68aa7f88cc4783121c51d41ed39` | `confirmed_nonfatal` | A quadratic irrational is irrational, so its algorithm cannot terminate in a finite rational continued fraction; this one-line bridge is immediately supplied by the existing algorithm context and is nonfatal. No content changed. |
| `thm-legendre-continued-fraction-criterion` | `47b8637f8165ac4eff5a2fb455719c3f57583de2f4ac0574771d64fb66cec744` | `confirmed_fatal` | Replaced the false inference `s<q_1 => s=1` by the integer-separation estimate using `q_1>=s+1`. Ledger `frontier-20-S8R1-d-015`; rejudge target. |

Outcome totals: 15 `confirmed_fatal`, 4 `confirmed_nonfatal`, and 1
`false_positive`.

## Rejudge targets

- `def-additive-category`
- `def-comb-in-a-graph`
- `def-sparse-orientation-of-a-blockade`
- `def-the-additive-category-of-matrices-over-a-ring`
- `def-convergents-of-regular-continued-fraction`
- `ex-the-idempotent-completion-of-a-ring-is-the-finitely-generated-projective-modules`
- `thm-large-sparse-pair-hypotheses-yield-x-sparse-blockades`
- `ex-best-rational-approximations-to-pi`
- `thm-biproduct-data-characterisation-without-addition`
- `ex-continued-fraction-of-square-root-two`
- `ex-golden-ratio-as-a-periodic-continued-fraction`
- `lem-continued-fraction-error-bound`
- `thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules`
- `lem-periodic-continued-fraction-is-quadratic`
- `thm-legendre-continued-fraction-criterion`

## Records refreshed

- Batch 5, 8, and 10 proof-contract entries affected by changed facts, steps,
  or cited statements, plus the merged frontier-20 proof contract.
- Seven high/critical-risk reviews, plus the newly high-risk golden-ratio
  example review.
- Boundary dispositions for the golden-ratio reciprocal denominator and the
  matrix-equivalence choice witnesses.
- Fifteen append-only defect-ledger rows and the generated defect-ledger view.

## Focused checks

- Focused precheck: 10/10 repaired proof-bearing items passed.
- Focused render check: 15/15 repaired items passed after correcting two
  multiline display-format errors found on the first pass.
- Strict proof contracts: batch 5 passed 22/22, batch 8 passed 28/28, and batch
  10 passed 56/56.
- Finite smoke: all three selected matrix checks passed, 720 products each.
- Reviewed risk gate: batches 5, 8, and 10 passed after the refreshed reviews.
- Boundary audit: 848 rows, zero template clusters, zero contradicted
  dispositions.
- Citation fidelity: 228 citations, zero missing quotes, zero widening
  candidates.
- Dependency check: passed with repository-wide pre-existing warnings only.
- Step-8 scope check: 522 items partitioned, zero open rejections routed, zero
  cross-group alerts.
- Step-8 guard: all 121 current changes licensed.
- Defect-ledger validation: 348 frontier-20 rows, zero errors.

## Cross-group alerts and blockers

No cross-group alert was required. No blocker remains. The engine owns the
targeted rejudge and all subsequent stage transitions.
