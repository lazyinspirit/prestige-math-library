# Batch 30 authoring notes — adaptive stochastic paths

Run: `numerical-optimization-dynamics-2026-10-16`  
Batch: `30`  
Pair: `adaptive-stochastic-paths-and-brownian-bridge-coupling`

## Controlling plan and conflict check

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the generated
  batch task, the complete T15 plan section, the owner authoring direction,
  the current `plan-spec.json` entry, the batch-30 manifest, and the
  dependency-level artifact.
- The task's plan pointer `research/plan-numerical-dynamics-track.md` L356
  resolves to T15 in the current plan. Its scope, examples and proof route
  agree with the current `plan-spec.json` T15 A/B descriptions. No scope
  conflict was found. The current proposal's T15 item arrays were empty before
  authoring; this batch manifest now records the authored inventory below.
- The scheduling artifact records batch 30 at dependency level 1, requiring
  batch 9, with input digest
  `ca41fcdd6d4a40fbd61e4921a8bfdd410bd704a05c937a5f709843ed28d2e97d`.
  Its current batch-level edge is unchanged. The owner/engine owns refreshing
  shared scheduling artifacts after authoring.

## Inventory, logical dependencies, and levels

The A page has 12 items and the B page has 3 examples, below the 100-item page
cap. `item-dependency-levels.mjs` computes the labels from logical `deps`;
external published suppliers do not raise a level.

| Level | Items |
|---:|---|
| 0 | `alg-dyadic-brownian-bridge-increment-tree`; `def-predictable-stopping-time-grid`; `lem-continuous-adapted-process-at-bounded-stopping-time`; `def-scalar-brownian-bridge-from-x-to-y` |
| 1 | `thm-dyadic-brownian-bridge-tree-increment-laws`; `lem-stopping-time-ito-step-interval-sum`; `lem-scalar-brownian-bridge-restriction-density` |
| 2 | `alg-adaptive-euler-maruyama-on-predictable-grid`; `thm-scalar-brownian-bridge-barrier-crossing-probability`; `ex-redrawing-rejected-increment-biases-path`; `ex-coarse-fine-em-bridge-coupling` |
| 3 | `lem-finite-budget-adaptive-em-status`; `lem-adaptive-em-predictable-grid-second-moment`; `ex-brownian-bridge-barrier-missed-by-endpoints` |
| 4 | `thm-adaptive-em-predictable-grid-strong-error` |

The exact `deps` arrays and labels are recorded in
`research/numerical-optimization-dynamics-2026-10-16-batch-30.pages.json`.
Definitions and suppliers were authored before their in-pair consumers.

## Supplier audit and unresolved cross-pair interface

Read the exact published body `alg-euler-maruyama`. It defines the fixed
uniform-grid update for finite dimensions, Borel coefficients, global state
Lipschitz and squared linear-growth bounds, a half-Hölder time modulus,
Brownian increments independent of the current filtration, and an
independent square-integrable initial value. It makes no convergence claim.
Read `def-euler-maruyama-step-process-and-continuous-interpolation` and its
justified-by uniform-moment supplier. Those definitions and proofs concern
deterministic uniform grids. Read
`thm-euler-maruyama-strong-rate-under-higham-mao-stuart-hypotheses`; its
autonomous, one-sided-Lipschitz/all-moments contract is not a theorem for
predictable random meshes. No fixed-grid rate was imported into the adaptive
proof.

The controlling pair requirement also names the planned T13 page
`milstein-stochastic-taylor-and-iterated-integrals` (batch 9). Its current
plan-spec and batch-9 manifest have an empty item inventory, and no actual
Milstein item body or item ID is available to quote or verify. The T15
contract does not use a Milstein or iterated-integral claim: its EM update,
Gaussian tree split, and scalar reflection argument are proved locally. The
declared page-level T13 requirement remains unresolved and affects pair
readiness; if it is intended as a logical prerequisite, the owner must supply
the exact T13 item and matching hypotheses. No item ID or excerpt has been
invented.

Read `thm-global-strong-well-posedness-for-lipschitz-ito-sdes` and verified
that its usual-filtration, global-Lipschitz, linear-growth and L2-initial-data
hypotheses match the exact-solution input used by T15. The square-growth bound
in `alg-euler-maruyama` implies its linear-growth bound by
`|b|+||sigma|| <= sqrt(2) K sqrt(1+|x|^2) <= sqrt(2) K (1+|x|)`.
Read the exact stopped-time, predictable-integrand, Itô-isometry, continuous
integral, Doob-maximal, Gronwall, Brownian-reflection and scalar Gaussian
supplier bodies used by the new proofs. Added and proved the local bounded
stopping-time evaluation lemma after checking that the stopped-sigma-algebra
definition alone does not supply this measurability fact; the adaptive update
and stopped-interval Itô lemma now cite the exact local interface.

## Full-text sources and dispositions

The four accessible sources were retrieved as full text and read at the
locators in `research/numerical-optimization-dynamics-2026-10-16-batch-30.coverage.json`:

- Särkkä–Solin, *Applied Stochastic Differential Equations*, complete book:
  §8.2, printed pp. 130–135 (Euler–Maruyama and strong Itô–Taylor context),
  and §8.8, printed pp. 159–160 (exact simulation algorithm and Brownian
  bridge filling step).
- Higham–Mao–Stuart, “Strong Convergence of Euler-Type Methods for Nonlinear
  Stochastic Differential Equations,” complete 23-page article: §2,
  printed pp. 1043–1046, including Theorem 2.2 and its full localization,
  within-step increment, and Gronwall proof. This theorem is fixed-grid; its
  argument is context only, and the random-grid extension is proved here.
- Lawler, *Stochastic Calculus*, complete book: §2.7, printed pp. 58–67, including the stopping-time and stopped-sigma
  definitions, Theorem 2.7.1, Proposition 2.7.2 and Example 2.7.2. The local bridge proof
  derives the fixed-endpoint ratio from the reflection identity and Gaussian
  endpoint density.
- Joseph C. Watkins, *Stochastic Processes in Continuous Time*, complete 105-page
  notes: §§1.3–1.4, printed pp. 6–8, including the stopped-sigma definition and
  Proposition 1.17 for progressive processes. The new local item proves the
  continuous-adapted case directly by finite dyadic grids and continuity.

The planned Gaines–Lyons paper was not retrieved. The direct SIAM PDF and
EPDF URLs and a query-parameter PDF retry returned HTTP 403; the Oxford record
and OAI retry contained metadata only; the ResearchGate route returned HTTP
403. Five recovery retries were attempted after the initial publisher failure.
The source remains `owner-escalation` in the coverage evidence, with local
alternative arguments and dependencies recorded per affected item. It is not
marked dropped, quoted, or represented as read. Särkkä–Solin and Higham–Mao–Stuart are independent full treatments of the EM
context; Lawler supports the stopping-time and bridge/reflection context, and
Watkins supports the stopped-value interface. The unavailable planned Gaines–Lyons source remains
owner-escalated, so the source-resolution gate is not clean.

## Final scoped checks, readiness, and blockers

- `precheck.mts`: 11 proof-bearing items checked, 0 failing.
- `proof-layout.mjs` on all 15 explicitly changed items: 15 items, 40 proof
  steps, 0 defects.
- `proof-contract.mjs --strict`: 15/15 items checked, 0 errors and 0 warnings.
  Contracts include 64 exact source excerpts, 40 step mappings, all standard
  boundary rows, AC uses, and applicable finite checks.
- `content-policy.mjs` on this batch manifest: 15 scoped items, 0 errors and
  0 warnings.
- `depcheck.mjs --items-file` on the 15 batch IDs: 0 errors, 0 warnings;
  1,710 prerequisite items and 196 prerequisite pages checked.
- `rendercheck.mjs` on the 15 items and 2 pages: 17 files passed; all display
  blocks are single-line source and KaTeX/frontmatter parsing passed.
- Watkins full-text fetch: 1/1 new source fetched and stamped. The batch
  coverage now has 4/5 fetch-verified sources; the remaining failed source is
  Gaines–Lyons after the recorded initial failure plus five recovery retries.
- `coverage-checklist.mjs`: 1 A page and 13 harvested results; 3 errors arise
  from the explicitly recorded Gaines–Lyons owner-escalation and unavailable
  source contents. One low-yield warning remains: 2/13 harvested results are
  dispositioned included; the checker asks Alpha to confirm the declines.
- `item-dependency-levels.mjs check --run`: the 15 batch items all have the
  computed labels shown above. The run-wide check exits 1 because 148 other
  pages still have empty scaffold inventories (including
  `computed-schur-decompositions-and-nonnormal-spectra`) and 17 unrelated
  numerical-analysis items have stale labels: `def-na-dct-ii-and-dst-i-even-odd-extension`,
  `thm-na-dct-ii-orthogonality-inverse-and-dft-extension`,
  `thm-na-dst-i-orthogonality-inverse-and-dft-extension`,
  `thm-na-dct-ii-chebyshev-coefficient-extraction`,
  `alg-na-certified-unit-circle-phase`,
  `thm-na-certified-unit-circle-phase-enclosure`,
  `alg-na-computed-unitary-radix-two-fft`,
  `lem-na-computed-unitary-butterfly-error-bound`,
  `alg-na-computed-fft-cyclic-and-linear-convolution`,
  `thm-na-computed-unitary-radix-two-fft-error-bound`,
  `alg-na-computed-fast-transforms-and-convolution`,
  `thm-na-arbitrary-length-fft-correctness-and-cost`,
  `thm-na-computed-fft-convolution-error-bound`,
  `thm-na-bluestein-chirp-phase-error-separate-from-fft-error`,
  `ex-na-three-sample-dct-chebyshev-coefficients`,
  `ex-na-two-point-circular-aliasing`, and
  `ex-na-prime-length-five-bluestein-transform`. No batch-30 item is in the
  error list.
- `proof-contract-coverage.mjs` exits before batch comparison because the
  current run has an empty inventory on
  `direct-transcription-and-numerical-ode-optimal-control`.
- `step1-decisions.mjs check`: all 15 batch records are `escalated`, with
  `owner:false`; no `--owner` flag was used. The run remains open (537 items,
  262 ready) because this page-level T13 interface and the unresolved planned
  source require owner reconciliation, and many other items/pages are still
  open.

The exact T13 gap is recorded in
`research/numerical-optimization-dynamics-2026-10-16-batch-30.dependencies.json`:
`milstein-stochastic-taylor-and-iterated-integrals` has no current item IDs or
body, so actual hypotheses cannot be checked. The local T15 proofs do not use
Milstein claims. The unavailable Gaines–Lyons source is not represented as
read, quoted, or dropped; alternative proof routes are recorded in the
coverage file. No item is marked ready while these pair-level/source gates
remain unresolved.


## Owner resolution after genuine batch-30 drain

This dated addendum supersedes the unresolved supplier/source conclusions above without rewriting the original author account. The engine recorded actual batch-30 drain at 2026-10-15T23:54:51.446Z and a successful genuine attempt-1 result. An earlier owner-agent completion report was unsupported; concurrent owner edits are not native author coverage. Exact preimages, owner proposals, the guard snapshot, genuine author result, and final reconciliation evidence are preserved in `research/numerical-optimization-dynamics-2026-10-16-owner-adaptive-sde-escalation.json`.

Actual T13 batch 9 now has authored inventory and bodies. Its Milstein deterministic-grid Taylor correction is not used by any T15 proof, so the page requirement is satisfied as available navigation/context, without inventing a logical dependency. The unread Gaines–Lyons source alone is owner-dropped under the source-resolution policy; all initial failures, five retries and searches remain intact, and all fifteen T15 claims have explicit alternative local-proof/dependency mappings. No mathematical claim is removed. Available full texts were checked at the exact locators in the owner evidence; Lawler Example 2.7.2 is correctly initial-value conditioning for a subsequent zero hit, rather than terminal bridge disintegration.

Focused proof repairs make trial acceptance Borel measurable and justify the bounded operation count as a random variable; explicitly truncate localized moment coefficients before using the L2 stopping-interval identity; and derive an error path-supremum bound by Doob and Gronwall, which also justifies the original random-grid-endpoint assertion. The stated one-time strong-error contract and both algorithm branches are retained. The only added logical edge is the already published `thm-dominated-convergence` supplier for continuity of the error running-supremum expectation. All actual algorithm consumers (budget, moment and strong error) were checked by the same owner. Root retains hashes, dependency levels, readiness, recertification and native gates.
