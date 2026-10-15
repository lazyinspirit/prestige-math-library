# Batch 3 — Euler–Maruyama strong and weak convergence

## Scope and plan comparison

The owner direction controls the run: 59 original BCS pairs plus the three
strong-SDE/Euler prerequisite pairs remain in scope, and all content remains
draft. The complete P-NUM-SDE-02 design in
`research/plan-bayesian-computational-statistics-prerequisites.md` and its
restatement at `research/plan-machine-learning-track.md` lines 525–527 control
the mathematical claims. The assigned plan locations were read in full.

The current `plan-spec.json` row and task require the A page
`euler-maruyama-scheme-and-conditions` and have `items: []` as an unauthored
scaffold. The standalone P-NUM-SDE-02 design additionally says “P-SDE-01 and
its exact moment contracts.” The page manifest retains the plan-spec/task page
edge; item dependencies name the exact P-SDE definition, strong-solution, and
moment suppliers. This records the metadata/design difference without
weakening either theorem or editing the shared plan.

The authoring preserves three distinct claims:

- The finite-L2 strong rate uses global state Lipschitz and linear growth,
  half-Hölder time regularity, and only an independent square-integrable
  initial value. Its stopped interpolation-defect proof is local.
- The autonomous Higham–Mao–Stuart route retains C1 coefficients,
  one-sided-Lipschitz drift, globally Lipschitz diffusion, polynomial
  local-Lipschitz drift, and uniform all-moment bounds for the exact, step,
  and continuous Euler processes. It is separate from the finite-L2 theorem.
- The weak order-one result is conditional on the displayed backward equation,
  mixed derivatives through time order two and space order four, and
  `p >= 2q+8` moments. It does not derive backward regularity from coefficient
  or payoff smoothness.

The existing `alg-euler-maruyama` is globally Lipschitz, so it cannot be the
scheme interface for the H-M-S polynomial-local-Lipschitz drift. The new local
`alg-euler-maruyama-autonomous` supplies that autonomous recursion and
interpolation without changing the existing scheme item. The H-M-S source
proof uses a p=1 BDG estimate; `lem-brownian-ito-integral-l1-maximal-bound`
proves the needed finite-energy L1 bound locally from the published L2 Doob
bound and stopping identity. No unproved BDG result is imported.

## Inventory and item dependency levels

The inventory and logical dependencies are set in the batch manifest before
the carrier proofs. The level calculation includes all in-run suppliers; the
table shows the dependencies that determine each item’s maximum level. Full
direct `deps` arrays remain in `batch-3.pages.json`.

| Item | Page | Level | In-run suppliers determining the level |
|---|---|---:|---|
| `alg-euler-maruyama-autonomous` | A | 0 | none |
| `lem-brownian-ito-integral-l1-maximal-bound` | A | 0 | none |
| `lem-euler-maruyama-autonomous-interpolation-increment-moments` | A | 1 | autonomous algorithm |
| `thm-euler-maruyama-strong-rate-under-higham-mao-stuart-hypotheses` | A | 2 | autonomous algorithm, increment lemma, L1 maximal lemma |
| `thm-euler-maruyama-strong-rate-for-square-integrable-initial-data` | A | 4 | P-NUM-SDE-01 step-process definition (level 1) and uniform moment theorem (level 3); also the exact P-SDE suppliers recorded in the manifest |
| `thm-euler-maruyama-weak-order-one-under-backward-regularity` | A | 4 | P-NUM-SDE-01 algorithm (level 0), step-process definition (level 1), and uniform moment theorem (level 3); also the exact P-SDE suppliers recorded in the manifest |
| `thm-shared-brownian-euler-level-correction-rates` | A | 5 | the finite-L2 and weak-order theorems (level 4) |
| `ex-euler-maruyama-additive-noise-strong-error` | B | 5 | finite-L2 strong theorem (level 4) |
| `ex-euler-maruyama-weak-order-one-for-ornstein-uhlenbeck` | B | 5 | conditional weak theorem (level 4) |
| `ex-learned-drift-bias-is-not-solver-error` | B | 5 | finite-L2 strong theorem (level 4) |
| `ex-shared-brownian-euler-level-coupling-rates` | B | 6 | shared-Brownian rate theorem (level 5) |

The A page has seven items and the B page four, both below the 100-item cap.
The OU weak example verifies its own backward contract; the learned-drift
example computes a nonzero target bias while the Euler solver is exact for the
learned equation; the shared-increment example checks the two-to-one
fine/coarse Brownian construction.

## Source reading and disposition

The complete relevant source reasoning was inspected; the exact harvested
results, locators, URLs, search/navigation history, and per-result
dispositions are in `batch-3.coverage.json`.

- Higham, Mao, and Stuart, “Strong Convergence of Euler-Type Methods for
  Nonlinear Stochastic Differential Equations,” author-hosted full 23-page
  PDF: §2 Assumption 2.1 and Theorem 2.2 with proof, printed pp. 1042–1046;
  §4 Assumptions 3.1/4.1/4.2, Lemma 4.3, and Theorem 4.4 with proof, printed
  pp. 1054–1056. The §4 theorem/increment reasoning is included; the §2
  result is recorded as context because its p>2 premise does not establish
  the assigned finite-L2, half-Hölder contract. Its BDG step is replaced by
  the local L1 maximal proof.
- Tiejun Li, Lecture 16, *Numerical SDEs: Basics*, full 11-page lecture PDF:
  §2 Proposition 2.2 and proof, pp. 5–6; §3 Theorem 3.2 and proof, pp. 7–9.
  The weak treatment is scalar additive-noise and refers to an auxiliary
  regularity argument; it does not prove the assigned multivariate conditional
  theorem. The batch supplies its own Taylor, Gaussian-moment, and telescoping
  proof.
- Särkkä and Solin, *Applied Stochastic Differential Equations*, complete
  relevant §§8.1 and 8.3 (printed pp. 132–139). The scheme/order discussion
  and weak-error context are recorded; they are not treated as a complete
  proof of the assigned weak theorem.
- Giles, “Multilevel Monte Carlo Path Simulation,” complete relevant §2 and
  Theorem 3.1 beta=1 reasoning, pp. 2–7. The common-increment coupling and
  rate context are used; the general MLMC complexity theorem is out of scope.

`source-fetch-check --stamp` verifies 4/4 sources. The coverage checklist
reports 17 harvested results with no errors or warnings. No retrieval failed,
so no `source_resolution` recovery row was needed and no source was dropped.

## Cross-batch supplier state

The current batch-2 cross-batch ledger marks both
`euler-maruyama-scheme-and-conditions -> forward-ito-sde-well-posedness` and
the batch-3 A-page prerequisite `euler-maruyama-scheme-and-conditions` as
`verified`. Current Step-1 rows for the P-NUM algorithm, interpolation,
one-step lemma, and uniform-moment theorem now have closed `ready` decisions;
the previously owner-held escalations were resolved by the owner. The P-SDE
definition and all four proof-bearing suppliers also have closed `ready`
records. The scoped P-SDE precheck and strict supplier proof-contract checks
pass. All 19 exact cross-page and cross-item edges used by this batch are
recorded as `verified` in `batch-3.cross-batch-dependencies.json`.

This is authoring readiness only, not independent mathematical acceptance.
The wider ML P-SDE-01 positive-density, forward-KFP, and reversal design
remains a separate obligation; this batch consumes only its strong-solution
and finite-moment interfaces. The local H-M-S theorem still uses its separate
autonomous algorithm and does not import the globally-Lipschitz P-NUM scheme.

## Scoped checks

- Precheck: 10 proof-bearing items passed.
- Proof layout: 10 items, 43 numbered steps, 0 defects.
- Renderer: 13 assigned item/page files, 0 errors and 0 warnings.
- Content policy: all 11 manifest items checked, 0 errors and 0 warnings.
- Focused dependency check: 1,704-item/189-page prerequisite closure, 0 errors
  and 0 warnings.
- Strict proof-contract check: all 11 assigned items passed, including exact
  supplier excerpts, mapped proof steps, boundary dispositions, and four
  finite example checks.
- Manifest/carrier reconciliation: both pages and all 11 item IDs, titles,
  direct deps, and item levels match.
- Step-1 readiness: all 11 assigned items have `ready` records with exact
  direct dependencies; recomputation through the repository's hash function
  matches all 11 current item/dependency snapshots. No `--owner` flag was used.
- Focused item-level recomputation against the full run graph: all 11 labels
  match; the full checker reports 52 empty scaffold inventories in other
  batches and no other item-level errors.
- Source coverage: 17 harvested results; 4/4 full-text sources fetch-verified;
  0 errors and 0 warnings.
- Current cross-batch ledger: 19 direct page/item edges verified from current
  supplier bodies and readiness records.

Run-wide workflow checks encounter issues outside this batch. At its last
successful graph calculation, `batch-dependency-levels.json` was stale by input
hash (stored `bfbde8e5…`, recomputed `1571f2c2…`), although batch 3 remained
level 2 with prerequisites 1 and 2. The current `step1-decisions check` and
`batch-dependency-levels check` cannot load the run because
`research/bayesian-computational-statistics-62-batch-26.coverage.json` has
invalid JSON at line 173: an unescaped `\|` in the source support text. That
out-of-scope file and the shared scheduling artifact are left for their owner.
The 11 batch-3 decision records were already written; a read-only focused
recomputation using the repository's `itemHash` reports all 11 hashes current.

The full `proof-contract-coverage.mjs` run also stops at the unrelated empty
frontier inventory `misspecified-posterior-consistency`; the batch-3 strict
contract check above passes for all 11 items.
