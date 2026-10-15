# Statistical Models and Experimental Methods — batch 51 notes

Run: `statistical-models-experiments-62`  
Pair: `temporal-point-process-intensity-and-likelihood` / `temporal-point-process-intensity-and-likelihood-examples`  
Role: beta  
Assigned batch dependency level: 2; prerequisite batches: 30, 48  
Scheduling input: `154742198c8edf599c86faa1cd9b420d50d94edcdefe07538e0a1672d56a7c21`

## Plan, design, and conflict

The assigned SME-51 design is at
`research/plan-statistical-models-experiments-track.md:295`. It calls for a
simple, locally finite event model; supplied conditional waiting-time laws and
predictable hazards; the separate compensator-martingale contract; the
inter-event survivor/density; finite-window likelihood with the terminal
no-event factor; a marked-law factor only when a mark law is supplied; and
Poisson, Hawkes, and terminating-process examples. It explicitly warns that an
intensity formula alone proves no process existence, stationarity, or Hawkes
stability. These claims and caveats are retained.

The assigned task and `research/plan-spec.json` both require five pages:
`counting-process-compensators-and-integrals`,
`poisson-and-cox-point-process-models`,
`dominated-experiments-likelihood-and-sufficiency`,
`brownian-motion-construction-and-continuity`, and
`the-ito-integral-with-respect-to-brownian-motion`. The SME-51 design names
the first three and continuous-time filtration/predictability, but omits the
Ito page. Following the plan, the A-page manifest retains all five edges. The
Ito page supplies the exact published adapted-process and predictable-process
interfaces used by the draft; no Brownian stochastic integral, isometry, or
Ito formula is used. This is a page-scope discrepancy, not a missing item-level
mathematical premise.

## Inventory, dependencies, and levels

The exact direct dependency arrays are in
`research/statistical-models-experiments-62-batch-51.pages.json` and in each
item frontmatter. The levels below were recomputed with the inventories of
batches 30, 48, and 51 together; there are no cycles or label mismatches.

| Item | Page | Level | Role and main dependencies |
|---|---|---:|---|
| `def-temporal-point-process-and-conditional-intensity` | A | 1 | Defines the finite-window simple process, measurable history/update and conditional kernels, hazard convention, and separate SME-30 compensator contract. |
| `lem-conditional-intensity-interevent-survival-and-density` | A | 2 | Proves survival/density by an integrating factor; declares AC, Countable Choice, and Dependent Choice at the exact calculus inputs. |
| `lem-homogeneous-poisson-ordered-event-time-density` | A | 3 | Locally constructs the finite-window Poisson law from a countable Poisson mixture of product-uniform configurations, then proves count factorization, simplicity, and ordered density. Uses SME-48 Poisson definitions/count law, not its general finite-intensity existence theorem. |
| `thm-conditional-intensity-interevent-law-and-point-pattern-likelihood` | A | 4 | Factors supplied conditional kernels, proves domination on the disjoint-union finite-pattern space, then takes the RN density ratio; handles marked factors only under a supplied common mark law. |
| `ex-terminating-temporal-point-process-with-terminal-mass` | B | 4 | Verifies the rate-one Poisson compensator contract through independent increments and computes the terminal no-event mass. |
| `ex-poisson-and-history-dependent-temporal-intensities` | B | 5 | Checks the homogeneous Poisson model and MLE boundary cases; integrates the finite-pattern Hawkes specification under a supplied compatible law. |

The finite-window Poisson construction names its Borel and locally compact
topology checks, Lebesgue-measure/Countable-Choice interface, finite product
measure, countable measure mixture, Dirac masses, and Tonelli use explicitly.
The likelihood theorem states its almost-everywhere density convention and
proves $P_\theta\ll P_0$ before invoking the full likelihood-ratio
definition. No event-at-an-exact-endpoint density value is treated as
canonical.

## Supplier checks and handoff

- **SME-30:** The actual A page and
  `items/def-counting-process-intensity-and-compensator-contract.md` were
  inspected, together with its current hash-bound Step-1 `ready` record. The
  supplier assumes simple unit jumps, adaptedness, predictable at-risk and
  intensity processes, finite continuous predictable
  $A_t=\int_0^tY_s\lambda_s\,ds$, $\mathbb E[A_T]<\infty$, and separately
  assumes that $N-A$ is a square-integrable martingale. SME-51 repeats that
  contract and does not infer it from a hazard display.
- **SME-48:** The actual bodies and hash-bound `ready` Step-1 records for
  `def-random-measure-and-locally-finite-point-process`,
  `def-poisson-and-cox-point-process`, `def-scalar-poisson-count-law`, and
  `lem-poisson-count-law-normalization-and-moments` were inspected. The
  first supplies measurable locally finite counting-measure point processes;
  the Poisson definition requires independent Poisson counts on disjoint
  Borel sets; the scalar law includes rate zero; the normalization lemma
  supplies the exponential-series normalization used in the mixture. The
  broader SME-48 finite-intensity existence theorem was also inspected but is
  not used by the local finite-window construction. SME-48 readiness records
  show authorship readiness, not publication or independent approval.
- **MSF-04:** The published page and
  `def-likelihood-ratio-as-rn-derivative` were inspected. The derivative is an
  almost-everywhere class for the absolutely continuous component and is the
  full density only after absolute continuity is established. The theorem
  supplies that argument on the finite-pattern space.
- **Continuous-time vocabulary:** The published Brownian page's
  `def-continuous-time-filtration-and-all-pairs-martingale` and the published
  Ito page's `def-continuous-time-adapted-process-and-martingale` and
  `def-progressively-measurable-and-predictable-process` were inspected. The
  draft uses their exact filtration, martingale, and predictability
  conventions.

The actual SME-30, SME-48, MSF-04, Brownian, and Ito supplier bodies were
inspected. During the final scoped checks, an intermediate read of the live
SME-48 manifest failed JSON parsing at line 244 while its writer was active.
The current manifest now parses as a two-page inventory, the relevant
SME-48 supplier Step-1 records return hash-bound `ready` (owner=false), and
the scoped 30/48/51 item graph recomputes without cycles or level-label
errors. The cross-batch ledger now records those current checks as verified.
I did not edit the batch-48 manifest or any other pair's files.

The assigned A-page manifest now follows the task and canonical plan's five
page requirements, including the Ito page omitted by the pair design. That
manifest change makes the shared
`research/statistical-models-experiments-62-batch-dependency-levels.json`
input hash stale. The batch-level checker reports that it must be recomputed;
the current pure recomputation still gives batch level 2 with prerequisites
30 and 48, and new input hash
`59d76ccc7ecefb82058878ea3f73ead942992a4e84a32ab642ace068cd21fd3f`. The
checker writes shared scheduling evidence, which is outside this pair's
ownership, so the stored hash remains for owner reconciliation.

## Sources and retrieval

Two independent full-text treatments were read for the A page; their locators,
supported items, and per-result dispositions are recorded in
`research/statistical-models-experiments-62-batch-51.coverage.json`.

| Source | Read scope | Full-text fetch stamp |
|---|---|---|
| Rasmussen, *Lecture Notes: Temporal Point Processes and the Conditional Intensity Function*, [full 19-page PDF](https://arxiv.org/pdf/1806.00221) | §§2.1–2.4, Propositions 2.1–2.2, Examples 2.2–2.6, Proposition 3.1, Example 3.1. The source's infinite-cumulative-hazard uniqueness/existence condition is recorded out-of-scope; the design's terminal-mass caveat is preserved. | 19 pages; 329,890 bytes; SHA-256 prefix `2d8e43d6b609829a`. |
| Kass, Eden, and Brown, *Analysis of Neural Data*, Chapter 19, [full 41-page PDF](https://web.math.ku.dk/~susanne/BSc/Kass2014_Chapter_PointProcesses.pdf) | §§19.2.2, 19.3.2, and the complete §19.4 likelihood derivation. | 41 pages; 996,324 bytes; SHA-256 prefix `1be59782efdde7b8`. |

Both source-fetch stamps were created by `source-fetch-check --stamp` on this
coverage file. No retrieval failures, recovery retries, source drops, or
source-resolution escalations occurred. The coverage harvest has 2 independent
primary treatments and dispositioned source results; it does not claim that
source reading itself is mathematical approval.

## Axiom and finite-check ledger

- Full AC is named in the temporal model and inherited through the counting
  process and likelihood-ratio interfaces.
- The integrating-factor lemma declares Countable Choice for the $L^1$
  fundamental theorem and Dependent Choice for the absolutely-continuous
  zero-derivative theorem.
- The local finite-window Poisson construction uses Countable Choice through
  the stated Lebesgue-measure interface. Its finite products, finite Boolean
  refinements, finite diagonal union, and countable probability mixture add no
  stronger choice axiom.
- The examples inherit AC through the compensator/conditional-expectation
  interface and Countable Choice through the local Poisson construction.
- `finite_smoke` is empty in all five proof contracts: the repository has no
  registered finite checker for conditional-kernel factorization, the hazard
  integrating-factor argument, or the finite-pattern point-process density.
  No unrelated arithmetic smoke test was attached.

## Scoped checks and readiness

Final scoped results after the last item and evidence edits:

| Check | Result |
|---|---|
| Item dependency levels over batches 30, 48, and 51 | Pass: levels 1, 2, 3, 4, 4, 5; no cycles or label mismatches. |
| Batch dependency-level check | Stale input hash after retaining the canonical Ito page prerequisite. Recompute is owner-owned shared scheduling evidence; it was not rewritten. |
| `validate-plan --run` | No hard errors name batch 51; its five page requirements are resolved. The run-wide check still fails on 33 errors in other pages, including existing missing-prerequisite and B-leaf issues. It reports only redundant-prerequisite warnings for the batch-51 A page. |
| `precheck.mts` on proof-bearing items | Pass: 5/5. |
| `proof-layout.mjs` on explicitly changed proof-bearing items | Pass: 5 items, 20 steps, 0 defects. |
| `proof-contract.mjs --strict` | Pass: 5/5 contracts, 61 exact supplier citations, 20 proof steps, 0 errors/warnings. |
| `source-fetch-check.mjs` | Pass: 2/2 full-text PDF stamps and 2/2 resolved sources. |
| `coverage-checklist.mjs --require-destination` | Pass: 1 A page, 15 harvested results, 0 errors/warnings. |
| `manifest-deps.mjs` | Pass: 6 items, no missing dependency arrays. |
| `content-policy.mjs` | Pass: 6 items, 0 errors/warnings. |
| Scoped `rendercheck.mjs` | Pass: 8 files, all formulas and frontmatter render. |
| Scoped `depcheck.mjs`, `fwdcheck.mjs`, `extcheck.mjs` | Pass: selected item/page dependency, forward-reference, and external-reference checks. |
| `finite-smoke.mjs` | Pass with 0 checks over 0/5 items; no registered point-process finite checker applies. |
| `step1-decisions.mjs record` | The first definition was recorded `escalated` during the transient batch-48 parse failure. The manifest now parses and the item graph recomputes, but an escalation must not be overwritten; that definition and its dependent items remain owner-routed. The independent local Poisson construction is `ready`; the survival lemma, likelihood theorem, and both dependent examples are `escalated`. |

All authored content remains draft. The
`def-temporal-point-process-and-conditional-intensity` Step-1 record captured
the transient manifest parse failure. A later recheck found the manifest valid
and the graph correct, but I preserve the escalation because the owner
direction prohibits overwriting one. Its dependent claims are authored with
exact interfaces and complete proofs, and remain escalated pending owner
reconciliation. The local finite-window Poisson lemma is independent of that
definition and is recorded ready after its actual suppliers and scoped checks
passed. These records are not independent proof verdicts or publication
approval.
