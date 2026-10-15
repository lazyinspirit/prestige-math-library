# Batch 29 — Parametric survival and reliability

Run `statistical-models-experiments-62`; assigned pair
`parametric-survival-and-reliability` / `parametric-survival-and-reliability-examples`.
All authored content remains draft.

Current scheduling input SHA256: `bcdedf8bcc4d82afdddd64345f9b033837a909fc62277a30cdbc8e25c62952c7`.

## Plan reconciliation

- The beta assignment, complete SME-29 design at
  `research/plan-statistical-models-experiments-track.md` L221, and current
  `research/plan-spec.json` row agree on the A/B IDs, titles, category, order
  1974/1975, companion, and four A-page requirements. Those requirements are
  carried unchanged in the page manifest.
- The pair audit under `research/statistics-ml-scaffold-audit-2026-10-12/models/`
  records MSF interfaces as “planned, not in active items.” That inventory is
  stale: the current published bodies `def-statistical-experiment`,
  `def-parametric-statistical-model`, `def-dominated-statistical-experiment`,
  and `def-likelihood-density` are present and were read. The owner direction
  requires current stable item IDs and bodies to control.
- The SME-29 design says that when $d=0$ the exponential likelihood supremum
  is at $\lambda\downarrow0$, without stating positive total exposure. The
  claim is false when $E=0$: two subjects censored at time $0$ have $d=E=0$
  and a likelihood constant in $\lambda$. The theorem therefore distinguishes
  $E>0$ from $E=0$, and the B page works both cases. For $E>0$, the planned
  boundary-supremum claim is proved as written. The design’s “attained if the
  boundary is included” is clarified: $\lambda=0$ is a formal likelihood
  extension, not a proper law on finite event times unless the model is
  enlarged to admit $T=\infty$.

## Inventory and dependency levels

The inventory and logical dependencies were written into
`statistical-models-experiments-62-batch-29.pages.json` before item carriers.
External published suppliers do not raise in-run levels. The only batch-level
prerequisite is batch 28, so this batch remains at dependency level 2.

| Item | Home | In-run suppliers | Level |
|---|---|---|---:|
| `def-parametric-survival-and-reliability` | A | `def-event-time-observation-schemes` (batch 28, level 0) | 1 |
| `thm-exponential-and-weibull-survival-laws` | A | definition above (1) | 2 |
| `thm-survival-cumulative-hazard-identity` | A | definition above (1) | 2 |
| `thm-jump-hazard-survival-product` | A | definition above (1) | 2 |
| `thm-censored-exponential-likelihood-and-mle` | A | family theorem above (2) | 3 |
| `ex-exponential-weibull-hazards-and-censored-likelihood` | B | A-page results, maximum 3 | 4 |
| `ex-zero-exposure-censored-mle-boundary` | B | likelihood theorem (3) | 4 |

There are five A items and two B examples, below the 100-item page cap. The
item graph is supplier-first and acyclic. The exponential/Weibull family
theorem supplies definition well-definedness through `justified_by`; the
continuous and atomic hazard relations are proved as separate A-page results.

## Supplier checks and cross-batch status

- The actual draft body of `def-event-time-observation-schemes` was inspected.
  Its stated event-time domain and exact right-censoring map $U=\min(T,C)$,
  $\delta=1\{T\le C\}$ match the uses in the definition, likelihood, and
  zero-exposure example. The exact consumed excerpt and the no-approval caveat
  are recorded in `statistical-models-experiments-62-batch-29.cross-batch-dependencies.json`.
- Batch 28’s older notes and readiness record say its general theorem
  `thm-likelihood-contributions-under-censoring-and-delayed-entry` was
  escalated because `def-scientific-statistical-model-contract` was absent.
  That body is now present and its batch-1 Step-1 decision is `ready`; its
  actual definition was inspected. The earlier batch-28 escalation record was
  not changed. Batch 29 does not depend on that general theorem: its narrower
  exponential result states the observation law, independent subject model,
  product parameter space, common censor-law dominator, and likelihood
  versions locally, then derives both censoring branches and the MLE cases.
- The actual published MSF-01/04 bodies were inspected: the parameter-to-law
  experiment interface, common sigma-finite domination, and a.e.-version
  likelihood convention are carried. The CDF/measure correspondence and
  atom formula proofs were also inspected; the atom theorem retains its exact
  Countable Choice assumption.

## Axiom ledger

- `thm-exponential-and-weibull-survival-laws` states Countable Choice.
  Countable Choice is used for the Riemann/Lebesgue integral comparison,
  CDF-law uniqueness, and the countable endpoint approximation.
- `thm-survival-cumulative-hazard-identity` states Countable Choice for the
  $L^1$ FTC, the singleton null-set formula, and the countable approximation
  of a finite terminal zero; Dependent Choice supports the absolutely-
  continuous FTC that integrates $(\log S)'$.
- `thm-jump-hazard-survival-product` states Countable Choice for the
  Lebesgue–Stieltjes point-mass formula.
- The censored likelihood states Countable Choice through the exponential-law
  supplier and uses it for the finite-interval Lebesgue measure exhaustion.
  It uses the explicit event and censor density versions supplied in its model
  assumptions; it does not use AC to select an arbitrary uncountable family of
  Radon–Nikodym representatives, and it makes no common-null-set claim over
  the parameter family. The definition of likelihood remains a cited MSF
  interface.

## Source reading and harvest

The three exact source URLs and all supported results/dispositions are in
`statistical-models-experiments-62-batch-29.coverage.json`.

- NIST/SEMATECH Handbook, Chapter 8: complete assigned ranges PDF pp. 4–19 and
  155–163 were inspected. The first range supplies nonrepairable lifetime,
  reliability/survival, hazard, and exponential/Weibull context; the second
  supplies censored likelihood and count/exposure calculations. Its empirical
  bathtub discussion is explicitly not a universal theorem.
- Lu Tian, Stanford STAT331 Unit 2: PDF pp. 1–7 were inspected. The reading
  covers the observed pair, fixed and independent random censoring, the
  parameter-distinct likelihood factorization, and the exponential likelihood
  and score calculation. Later inferential conclusions were not used.
- Qiqing Yu, *Survival Analysis*: PDF pp. 1–11 were inspected. The reading
  covers censoring notation, $S(t)$ versus $S(t^-)$, density and atomic hazards,
  and exponential/Weibull parameterizations and the discrete product relation.
- `source-fetch-check --stamp` fetched and verified all three full PDFs on the
  first attempt. Their stamped byte lengths and SHA-256 prefixes match the
  complete local PDF records in the dossier’s `sources.json`: NIST
  `1323017` / `41b3279c4ece7e49`, Stanford `94930` / `7d26abc85e23102a`, and
  Yu `735193` / `084d12989904f0ac`. The B-page coverage reuses the inspected
  NIST and Stanford PDFs for the worked likelihood calculations; the
  zero-exposure counterexample is derived from the local likelihood theorem,
  not attributed to either source. No recovery retries or source drops were
  needed.

## Scoped checks

Final scoped checks on the authored carriers:

- `manifest-deps`: 7 items, 0 errors.
- `proof-contract --strict`: 7/7 checked, 0 errors, 0 warnings.
- `content-policy`: 7 items, 0 errors, 0 warnings.
- `coverage-checklist`: 2 pages, 16 harvested results, 0 errors, 0 warnings.
- `source-fetch-check`: 5/5 coverage entries fetch-verified and resolved, 0
  documented drops. These entries refer to 3 distinct full PDFs.
- `precheck`: all 6 proof-bearing items pass. Each step is on one physical line
  with canonical dependency-layer labels; proof contracts were regenerated
  against the final labels.
- `proof-layout`: 7 items, 36 steps, 0 defects.
- `rendercheck`: 9 files pass, including KaTeX parsing and renderer frontmatter
  parsing; no delimiter or multiline-display defects.
- `prosecheck`: both A/B pages, 0 errors, 0 warnings.
- Scoped dependency-level calculation, including the actual batch-28
  `def-event-time-observation-schemes` supplier at level 0, recomputed all seven
  batch-29 labels as `1, 2, 2, 2, 3, 4, 4`; no scoped graph errors.
- Readiness records: all seven final items recorded `ready`, `owner: false`,
  with the exact manifest dependencies. These records are authoring handoff
  evidence, not independent approval.
- After A3 gained its explicit singleton-null-set suppliers, the in-repository
  recorder could not reload the full run because batch 42's manifest was
  invalid JSON at line 244, column 9. I used the same
  `node tools/step1-decisions.mjs record` command in a temporary snapshot
  containing the 61 valid run manifests, excluding only batch 42. The same
  snapshot procedure refreshed B2's record after its final axiom tag. Both
  records close with `owner: false`; their live-manifest inputs are batch 28
  and batch 29 only. No foreign batch file was changed.

The whole-run `item-dependency-levels.mjs check --run` also ran and exited 1 on
errors outside batch 29: empty inventories in other page pairs and existing
missing or mismatched dependency labels in other items. The targeted batch-29
calculation above passed. No shared plan, published item, engine state, run
transition, or verdict was changed.
