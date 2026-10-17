# Batch 10 authoring notes — Stochastic reaction jump simulation and coupling

## Authority, design and conflict record

- This batch follows the controlling `research/numerical-optimization-dynamics-2026-10-16-owner-authoring-direction.md` and T16 in `research/plan-numerical-dynamics-track.md`, including its mathematical-contract appendix. The assigned scope is the finite-state marked reaction CTMC, direct and next-reaction methods, bounded-envelope thinning, countable-state Lyapunov non-explosion, minimum-intensity coupling, and reaction-count martingale interfaces.
- `research/plan-spec.json` retains the T16 page IDs/order and five page-level prerequisites but has an empty `items` array. That is an intake placeholder; this assigned manifest supplies the local inventory. No page prerequisite was removed.
- The older generated task/intake dependency set mentions `conjugate-families-and-posterior-prediction` / `def-poisson-law`. The owner direction and plan contract remove that route: it is an exposure-conditioned likelihood, not the CTMC reaction law. It is omitted from item dependencies.
- The plan appendix writes the state generator in column-matrix convention `Q_(y,x)`. The local items use the equivalent row operator `Qf(x)=sum_j a_j(x)(f(x+nu_j)-f(x))`; these conventions are transposes. The appendix's diagonal `-lambda(x)` assumes no active zero-increment channel. The local network permits such channels: they remain marked reaction events, while the state-matrix diagonal is minus the sum of state-changing rates and the operator formula cancels zero-increment terms. The event hazard still includes every active channel.
- The plan permits either certified integrated-hazard inversion or certified-envelope thinning for time-varying rates. This batch authors the envelope-thinning branch and makes no certified numerical-root claim.

## Item inventory, dependencies and levels

The 11 A items and 5 B items are listed in `research/numerical-optimization-dynamics-2026-10-16-batch-10.pages.json`. `dependency_level` counts only in-batch suppliers; all out-of-batch item interfaces are explicit item dependencies but do not raise an in-run level.

- A level 0: `def-reaction-network-propensity-system-and-generator`; `lem-competing-exponential-race-for-reaction-channels`.
- A level 1: `alg-gillespie-direct-method-for-reaction-networks`; `alg-next-reaction-random-time-change-method`; `alg-dominating-thinning-for-time-varying-reaction-rates`; `thm-countable-state-reaction-networks-lyapunov-nonexplosion`.
- A level 2: `thm-dominating-thinning-exactly-simulates-reaction-rates`; `alg-minimum-intensity-coupling-for-reaction-networks`.
- A level 3: `thm-finite-state-gillespie-and-next-reaction-exactness`; `thm-minimum-intensity-coupling-preserves-exact-marginals`.
- A level 4: `thm-reaction-counts-have-compensators-brackets-and-isometry`.
- B level 2: `cex-quadratic-pure-birth-reaction-network-explodes`.
- B level 4: `cex-understated-thinning-envelope-is-invalid`; `ex-zero-total-hazard-state-is-absorbing`; `ex-finite-state-birth-death-reaction-simulation`; `ex-two-chain-minimum-intensity-birth-death-coupling`.

All local suppliers are authored before their consumers within the batch. No dependency cycle was identified. Batch 10 has no prerequisite batches; the five named page prerequisites are published pages and were checked through exact item bodies.

The countable-state stream and Lyapunov arguments require Countable Choice and Dependent Choice only. The reaction-count martingale theorem separately carries full AC because the published counting-process compensator, conditional-expectation and stochastic-integral interfaces declare it; it does not export AC to the simulation or Lyapunov theorems. The local reaction-count proof derives the martingale clause before applying the published bracket/isometry items.

## Supplier inspection and mathematical checks

The complete relevant supplier bodies were inspected, including `def-countable`, `def-borel-sigma-algebra`, `thm-exponential-and-weibull-survival-laws`, `lem-homogeneous-poisson-ordered-event-time-density`, `def-scalar-poisson-count-law`, `lem-poisson-count-law-normalization-and-moments`, `thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law`, the Poisson-process definition, probability/law/expectation definitions, and the exact counting-process contract, bracket, cross-bracket, predictable-step-density and L2-isometry items. The reaction definition states the library's at-most-countable convention and requires each time-dependent propensity section to be Borel on `[0,T]`. In particular, the counting-process intensity definition is only a model contract; the local theorem proves `N_j - integral a_j(X_{s-}) ds` is a square-integrable martingale before invoking its bracket and integral consequences.

The finite-state event law allows zero increments: marked events are counted even when the state stays fixed. The next-reaction algorithm advances the fired channel's internal threshold and every channel's accumulated internal time. The time-varying thinning proof was checked at arbitrary start time `t`; its ordered candidate density on `(t,T]` is `exp(-Lambda(T-t)) Lambda^m`, which yields the stated cause-specific first-event density without a spurious start-time factor. The minimum-intensity coupling uses a single rate-`M` marked Poisson stream with fixed channel blocks and nested marginal acceptance intervals; each projection's disjoint mark sets depend only on its own state, so the exact marginal proof applies directly.

The Lyapunov proof treats `QV` as the finite local sum even when `V` is unbounded, rather than claiming `V` lies in the bounded-function generator domain. Proper sublevel sets and finite channel count make the one-step exit set finite; the stopped Dynkin expansion, integral Gronwall estimate and exit-probability bound are proved locally.

## Source reading and retrieval history

Three independent full-text treatments were read for the A page, including a complete author-hosted course text:

1. Gillespie, “Exact Stochastic Simulation of Coupled Chemical Reactions” (1977), full 22-page PDF. The joint next-event density and direct method derivation in §§II.B–III.C were read. The PDF was retrieved directly after browser retrieval was unreliable.
2. Anderson, *Introduction to Stochastic Processes with Applications to Biology*, complete 234-page course text. Read Chapter 6 §6.2 on explosion, exponential holding-time sums and the quadratic pure-birth example; Chapter 7 §§7.1.1, 7.1.4–7.1.5, 7.2.1–7.2.2, and 7.3.1 on reaction networks, generators, random time changes, direct/next-reaction simulation, time-varying hazards and the minimum-rate Poisson coupling.
3. Anderson and Kurtz, “Continuous Time Markov Chain Models for Chemical Reaction Networks,” complete 44-page survey. Read §§2.1–2.6 on Poisson processes, CTMC random-time-change equations, the stochastic-equation/martingale-problem relation, thinning, forward equations and direct/next-reaction simulation. The survey explicitly describes some exposition as motivational; no such passage is treated as proof acceptance.

Retrieval history: the initially targeted 2016 Springer chapter URL returned HTML; the course site’s chapter-specific PDF returned 404, after which the complete course text was retrieved. Some browser PDF opens timed out or returned 403, while direct retrieval of the selected complete PDFs succeeded. These failed attempts and searches are retained here and in each source's `retrieval_history`; the selected sources were recovered successfully. No source is marked `dropped` or `owner-escalation`, and no source-resolution exception is being used to waive mathematical coverage.

Exact source URLs, locators, source harvest dispositions, and full-text-read receipts are in `research/numerical-optimization-dynamics-2026-10-16-batch-10.coverage.json`. Fetch-check stamps and recovery attempts are added there by `source-fetch-check --stamp`.

## Final scoped checks and readiness

- Batch-10 manifest dependency calculation: 16 items, zero errors, levels match the manifest. The recorded scheduling row is batch 10 at level 0 with `requires: []`; `batch-10.cross-batch-dependencies.json` is `[]`.
- `proof-layout`: 16 changed item files, 44 proof steps, zero defects.
- `precheck`: 11 proof-bearing items checked, all pass. Definitions and algorithms have no proof-step contract requirement.
- `rendercheck`: all 16 item files and both A/B page files pass; KaTeX and renderer frontmatter parsing succeeded.
- Focused `depcheck`: all 16 items and two pages, zero errors or warnings. Focused `fwdcheck`: zero forward-reference errors or warnings.
- Strict proof-contract validation: all 11 proof-bearing items pass, with exact supplier excerpts, per-step claims and inputs, all eight boundary dispositions, and no registered finite-smoke check applicable.
- Coverage checklist: one A page, 29 harvested results, zero errors and warnings. Source fetch check: 3/3 selected sources fetch-verified. `source-coverage.json` mirrors the stamped source receipts.
- Step 1: `step1-decisions.mjs record` marks all 16 assigned items `ready` with their direct examined dependencies; a local hash-closure check reports 16/16 closed.

## Run-wide checks blocked outside batch 10

- The full-run item dependency check exits nonzero with 165 other-scope errors: 148 pages still have empty scaffold inventories and 17 existing item-level labels differ from their recomputed levels (for example, `def-na-dct-ii-and-dst-i-even-odd-extension` and its dependent DCT/DST items). The batch-10-only dependency calculation is clean; these other items were left untouched.
- The full-run batch dependency checker stops while parsing unrelated frontmatter at `items/def-matching-affine-simplicial-meshes.md:17` (unquoted locator beginning `§§8.1–8.2`; the same issue is present at `items/ex-affine-triangle-and-parallelogram-maps.md:18`). No foreign carrier was edited.
- The run-wide proof-contract coverage check stops at the empty inventory for `direct-transcription-and-numerical-ode-optimal-control`. Batch 10’s strict proof-contract check passes all 11 local proof-bearing items.

All assigned carriers remain drafts. No published content, shared plan, global dependency-level artifact, run state or verdict was changed. No tests were run.
