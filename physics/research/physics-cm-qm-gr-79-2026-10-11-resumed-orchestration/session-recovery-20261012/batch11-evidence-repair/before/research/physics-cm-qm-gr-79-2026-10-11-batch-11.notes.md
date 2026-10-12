# Batch 11 notes — `cm-math-evidence` / `cm-math-evidence-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-11, cover `cm-math-evidence`.
Category `non-relativistic-classical-mechanics-mathematics`, library `mathematics`.
Step-1 complete initial authoring; this file records checkpoint evidence, conflicts and
unresolved findings. It is not an approval, and no readiness record is independent
mathematical approval — Step-2/3 review follows.

## Inventory and levels

- A page `cm-math-evidence` (order 101, plan-spec `requires`: `measures-and-their-basic-properties`,
  `the-lebesgue-integral-and-the-convergence-theorems`), eleven items, all `domain: mathematics`,
  all `deps` annotated `mathematical-premise`:
  `def-cm-measurement-model` (0), `def-cm-calibration-rule` (1, through `def-cm-measurement-model`),
  `def-cm-iid-sampling-model` (0), `def-cm-covariance-matrix-of-a-random-vector` (0),
  `lem-cm-linearized-propagation-of-covariance` (1), `lem-cm-uniform-second-order-remainder-bound` (0),
  `cor-cm-linearization-error-bounds` (1), `def-cm-statistical-test-and-size` (0),
  `def-cm-confidence-set-and-coverage` (0), `def-cm-likelihood-function` (0),
  `rem-cm-inference-and-uncertainty-scope` (2).
- B page `cm-math-evidence-examples` (order 102, `requires: [cm-math-evidence]`), six leaf items:
  `ex-cm-math-evidence-pendulum-propagation` (2), `ex-cm-math-evidence-exact-versus-linear-variance` (2),
  `ex-cm-math-evidence-chebyshev-sample-mean-check` (1), `ex-cm-math-evidence-remainder-bound-check` (1),
  `cex-cm-math-evidence-confidence-coverage-is-not-posterior` (1),
  `cex-cm-math-evidence-propagation-is-not-exact-for-nonlinear-maps` (2). Nothing consumes the B page.
- Levels are one plus the maximum level of an in-run `deps` target; published root suppliers do not
  raise levels. Verified mechanically: a direct call to `dependencyLevels()` over the two batch pages
  returns `errors: []` and computed levels equal to the labels; the run-level
  `item-dependency-levels.mjs check --run` reports no finding naming any batch-11 page or item
  (its 148 `empty scaffold inventory` errors all belong to other batches that are still unauthored).
  Engine batch graph: batch 11 has `dependency_level: 0` and `requires: []` — every supplier is external
  and published.
- 17 + 6 items are far below the 100-item cap; no page split was needed. No item depends on a physical
  item, no item uses `def-axiom-of-choice`, and no item carries `physical_scope`: the whole pair is
  measurement/sampling/inference **mathematics**, excluded from physical conclusions by itself.

## Files written by this batch

- `items/` carriers for the seventeen ids above; page carriers
  `library/non-relativistic-classical-mechanics-mathematics/cm-math-evidence.md` and
  `...-examples.md`.
- `research/physics-cm-qm-gr-79-2026-10-11-batch-11.pages.json` (manifest: per-item statements,
  deps, `dependency_roles`, `dependency_level`, provenance, sources; page metadata copied verbatim
  from the plan record).
- `research/physics-cm-qm-gr-79-2026-10-11-batch-11.coverage.json` (9 sources, 63 harvested results,
  all disposed: 29 included / 16 inline / 13 out-of-scope / 5 already-published; all 9 sources carry
  `fetch_verified` stamps; 0 documented drops).
- `research/physics-cm-qm-gr-79-2026-10-11-batch-11.proof-contracts.json` (9 proof-bearing items,
  strict contract green; boundary worksheets eight standard cases per item).
- `research/physics-cm-qm-gr-79-2026-10-11-batch-11.cross-batch-dependencies.json` = `[]` (reasoning below).
- `research/physics-cm-qm-gr-79-2026-10-11-step1-<id>.json` readiness records for the seventeen ids,
  recorded last so their input hashes are current.

## Design vs plan-spec, and how E17 was delivered

`research/plan-non-relativistic-classical-mechanics-track.md` L266–L281 controls: page id
`cm-math-evidence`, companion `cm-math-evidence-examples`, category, library `mathematics`, order 101,
local proved section `E17`, no internal local proof dependencies, and the reservation block
`{"A_budget": 80, "B_budget": 30, "provisional_A_sections": ["E17"], "section_count_not_item_count": true}`.
Compared with `research/plan-spec.json`: id, title, kind, order 101/102, category, library, companion
links and the declared `requires` lists agree **exactly**. **No design/plan conflict.** The Step-1
drift verdict for this page (`research/physics-cm-qm-gr-79-2026-10-11-alpha-step1-drift.md`, "cm-math-evidence")
is `no-drift` and states that remaining item-level dependency detail belongs to authoring and its
ordinary readiness/review checks.

Section `E17` ("Measurement and elementary uncertainty suppliers",
`research/first-principles-2026-10-03/non-relativistic-classical-mechanics/scaffold/expansion-proofs.md`) is
delivered sentence by sentence:

- probability space, real observation, expectation, variance/covariance and independence/IID are
  **published root items** (e.g. `def-probability-measure`, `def-random-element-and-real-random-variable`,
  `def-moments-variance-and-covariance`, `def-identically-distributed-and-iid-random-variables`,
  `thm-factorization-of-expectations-for-independent-variables`), reused by reference and never re-authored;
  `def-cm-covariance-matrix-of-a-random-vector` records the mean vector and covariance matrix convention
  and proves entry integrability, symmetry and positive semidefiniteness inline;
- "a sampling model must state both properties if using IID": `def-cm-iid-sampling-model` adopts the IID
  and finite-second-moment hypotheses explicitly and defines the sample mean; the quantitative
  `Var(N^{-1} sum Y_i) = sigma^2/N` and `P(|Ybar - mu| >= a) <= sigma^2/(N a^2)` are the published corollary
  `cor-iid-finite-variance-weak-law`, recorded with hypotheses in `rem-cm-inference-and-uncertainty-scope`;
- the operational map `y = h(theta, z) + epsilon`, calibration rule `c = C(y_ref, theta_ref)` and the
  linearized covariance `Dh(mu) Sigma Dh(mu)^T` are `def-cm-measurement-model`, `def-cm-calibration-rule`
  and `lem-cm-linearized-propagation-of-covariance`;
- the bounded-Hessian remainder `|h(y) - h(mu) - Dh(mu)(y-mu)| <= (B/2)|y-mu|^2` is
  `lem-cm-uniform-second-order-remainder-bound`, integrated into mean/mean-square bounds by
  `cor-cm-linearization-error-bounds`; the B page shows the propagated covariance is an approximation,
  not an exact nonlinear formula (`cex-cm-math-evidence-propagation-is-not-exact-for-nonlinear-maps`,
  `ex-cm-math-evidence-exact-versus-linear-variance`);
- the Gaussian-model warning is preserved as the explicit non-claim in
  `rem-cm-inference-and-uncertainty-scope` (no normalized density and no exact Gaussian interval is
  asserted anywhere);
- test/size, confidence set/coverage and likelihood are the definitions
  `def-cm-statistical-test-and-size`, `def-cm-confidence-set-and-coverage`, `def-cm-likelihood-function`;
- the pendulum protocol is `ex-cm-math-evidence-pendulum-propagation`: purely symbolic propagation for
  `h(T, l) = 4 pi^2 l / T^2`, no measured value, count or precision asserted; no experiment item was created.

## Sources and source-fidelity repairs

The A page's harvest is anchored in nine sources, all fetched as full documents (bodies, not abstracts),
all stamped by `source-fetch-check --stamp` (9/9 fetch-verified, 0 drops; three sources were stamped
in the completion pass described below):

1. JCGM 100:2008 (GUM), monograph — clauses 3.1–3.3, 4.1–4.3, 5.1–5.2, 6.2, Annexes B.2, C.2, C.3.
2. NIST TN 1297 (Taylor–Kuyatt), monograph — Appendix A, equation (A-3).
3. JCGM 200:2012 (VIM), reference-work — definition 2.39 (calibration) with notes.
4. L. Wasserman, *All of Statistics* (Springer 2004), textbook — Definitions 10.1/10.4, §10.1
   (rejection regions), §6.14 (Berger–Wolpert coverage example), and the likelihood definition.
5. NIST/SEMATECH e-Handbook, chapter 7, reference-work — §7.1.4 (confidence intervals and tests for
   product and process comparisons).
6. NIST/SEMATECH e-Handbook, chapter 7, reference-work — §7.1.3 "What are statistical tests?"
   (null hypothesis, test statistic, critical values, rejection; added and stamped in the completion pass).
7. Greenland et al., "Statistical tests, P values, confidence intervals, and power" (2016), paper —
   the misinterpretation list absorbed into the scope remark.
8. R. Durrett, *Probability: Theory and Examples*, 5th ed. (2019 draft), textbook — §1.6.3 (variance),
   Theorem 1.6.4 (Chebyshev), §2.1 (independence), §2.2.1 (i.i.d. sequences, variance of sums, L² weak law),
   §3.10 Theorem 3.10.7 (covariance matrix `Gamma_ij = E((X_{n,i}-mu_i)(X_{n,j}-mu_j))`).
9. K. Bryan, *Taylor's Theorem in One and Several Variables* (Rose-Hulman MA 433 lecture notes),
   lecture-notes — second-order case in n dimensions (equation (8)) and its proof (equations (9)–(10)),
   Hessian matrix form.

Source-fidelity repairs made in this completion pass, with the fetched full texts as evidence:

- **Durrett locators corrected.** The extracted text shows the covariance matrix of a random vector is
  introduced at §3.10 (Theorem 3.10.7), not §1.6; the IID abbreviation and the variance-of-sums/Chebyshev
  argument live in §2.2.1 (Theorem 2.2.3) with §2.1 for independence and §1.6.3 for the variance.
  The three item citations (`def-cm-covariance-matrix-of-a-random-vector`, `def-cm-iid-sampling-model`,
  `ex-cm-math-evidence-chebyshev-sample-mean-check`) now name those sections.
- **Lebl reference removed as inaccurate.** The two items that cited "J. Lebl, *Basic Analysis II*,
  Taylor's theorem in several variables" were checked against the fetched 217-page text: §8.6 contains
  the `C^k` definition and equality of mixed second partials, and the only Taylor theorem is 11.3.6 for
  real-analytic power series — there is no multivariable Taylor formula with remainder. The citation was
  therefore not supportable and was replaced by Bryan's lecture notes, which contain exactly the
  second-order multivariable Lagrange form with proof.
- **NIST §7.1.3 retained, now harvested.** The fetched page's title ("7.1.3. What are statistical tests?")
  and content (null hypothesis, test statistic, critical values, rejection, one- and two-sided
  alternatives) match the item's citation; the source is now recorded in the coverage file with a stamp.
- After these edits: coverage `1 page, 63 harvested results, 0 errors, 0 warnings`;
  `source-fetch-check` check mode `9/9 fetch-verified`.
- No claim in any item depends on a dropped source: the remainder lemma's proof is self-contained, and the
  GUM clause 5.1.2 note to equation (10) remains as the metrology-side treatment of higher-order terms.

## Gate findings

**Green (batch-owned, final carriers).**

- `rendercheck.mjs` on all 17 items + 2 pages: OK (KaTeX, YAML, wikilink/math nesting).
- `precheck.mts` on the 9 proof-bearing items: `9 checked, 0 failing — all clean`.
- `proof-layout.mjs` on the 9 items: `9 items, 43 steps, 0 defects`.
- `proof-contract.mjs --strict` on the batch contracts: `0 error(s), 0 warning(s), 9/9 item(s) checked`.
- `finite-smoke.mjs` on the batch contracts: `0 error(s), 0 check(s)` — see the repair note below.
- `citation-fidelity.mjs --fail-on-missing-quote`: no missing quotes; no widening candidates.
- `boundary-audit.mjs` (advisory): 72 rows, 35 `not_applicable`; no template reuse, no contradicted
  dispositions.
- `citecheck.mjs` on the 9 proof-bearing items: every recognised elementary move cites a home that states it.
- `content-policy.mjs` (item mode) on the batch manifest: `17 scoped item(s), 0 error(s), 0 warning(s)`.
- `manifest-deps.mjs` on the batch manifest: `17 item(s), 0 normalized, 0 error(s)`.
- `item-dependency-levels.mjs check --run`: no finding names any batch-11 page or item; batch-11 labels are
  computed-consistent (direct `dependencyLevels()` run over the two pages: `errors: []`).
- `depcheck.mjs` (whole repository, final): **0** errors and **0** warnings attributable to batch-11 content.
  Run-wide it is red on other content only (2767 errors: `published-unaudited` plus the `nrqm-composites-*`
  `kind-prefix` rows; 858 warnings elsewhere) — none names a batch-11 id.
- `extcheck.mjs` (whole library): every recorded-not-proved statement is a cited remark with no proof and
  every consequence is marked; no batch-11 attribution.
- `step1-decisions.mjs check --run`: all 17 batch-11 records present and current; no batch-11 row in `work`.

**Repairs made during the completion pass.**

1. `depcheck` `cited-not-in-deps` on `lem-cm-linearized-propagation-of-covariance`: the closing sentence
   pointed at `cor-cm-linearization-error-bounds`. The pointer is orientation, not a premise (the corollary
   bounds a different quantity), so it was moved under a `## Remarks` heading — the grammar whose links
   `fwdcheck` itself defines as orientation-only and logically weightless. `deps` unchanged; the item and
   its four transitive dependents were re-checked and their readiness records re-recorded.
2. `finite-smoke.mjs` reported six `smoke-check` errors: the contract named finite checks that the registry
   does not define (`cm-evidence-*`). The registry's 19 checks cover other batches' mathematics and none
   applies here, and an undefined reference is a hard error by the tool's own rule (the frontier-13 failure
   mode documented in `gate-liveness.mjs`). The undefined `finite_smoke` references were removed; the finite
   verifications themselves remain inside the items (Rademacher enumeration, three-point weighted-set
   moments, cubic mismatch) and in the boundary worksheets, which `proof-contract --strict` re-validated.
3. Source-fidelity repairs (above) and the item/manifest edits they required; all readiness records were
   re-recorded after the final edits.

**Red, owned elsewhere (not papered over).**

- `content-policy.mjs --manifest-only` reports `batch-item-already-exists` for all 17 ids. That mode asks
  "may these ids be minted here?" before authoring and reads the plan's empty `items` arrays as a future
  minting batch; it is the known transcription state of this run, and item mode is green.
- Run-level `item-dependency-levels` (148 empty scaffold inventories), the merged run-level proof contract,
  and the frontier ledger's `--require-reviewed` mode remain open until the other concurrent batches finish.

## Plan-gate findings, escalated for owner reconciliation

Unlike the green gates above, two plan-level checks are red for this pair. Every cited target is a
**published canonical root item** (the owner direction's ordinary external premises), and every one is
actually used in a statement, fact or proof; the findings are about the plan's reading-order closure,
not about met prerequisites. Following the sibling-batch precedent (batch 2 recorded the same class of
finding and kept its items ready), this batch records them here as an owner-level gap and does not edit
the shared plan or the page `requires` (the manifest mirrors the plan verbatim).

### 1. `validate-plan` `undeclared-prereq` (24 rows)

`node tools/physics-support/validate-plan.mjs research/plan-spec.json --run
physics-cm-qm-gr-79-2026-10-11` exits 1; for this pair it reports 24 hard rows — 15 for `cm-math-evidence`,
9 for `cm-math-evidence-examples` — of the form "has an item depending on P, which is NOT in the closure
of its declared requires":

- A page: `sigma-algebras-and-borel-sets`, `the-inverse-function-theorem-completed`,
  `measurable-functions-and-simple-approximation`, `probability-spaces-random-variables-and-expectation`,
  `the-total-derivative`, `weak-laws-and-series-of-independent-random-variables`, `rn-as-a-normed-space`,
  `vector-spaces-and-subspaces`, `matrices-and-the-matrix-of-a-linear-map`,
  `mixed-partials-taylor-and-extrema`, `the-spectral-theorem-and-singular-value-decomposition`,
  `hilbert-space-geometry-and-riesz-representation`, `foundations-of-the-real-numbers`,
  `suprema-and-infima`, `independence-borel-cantelli-and-zero-one-laws`.
- B page: `rn-as-a-normed-space`, `the-total-derivative`, `the-derivative-and-mean-value-theorems`,
  `finite-probability-spaces-and-random-variables`, `probability-spaces-random-variables-and-expectation`,
  `weak-laws-and-series-of-independent-random-variables`, `mixed-partials-taylor-and-extrema`,
  `the-spectral-theorem-and-singular-value-decomposition`, `sigma-algebras-and-borel-sets`.

The condition is run-wide and pre-existing (the same run reports 172 errors overall: 138 `undeclared-prereq`
across sibling pages, e.g. `qm-math-composites` 41, `cm-math-geometry` 21, `cm-math-balances` 17,
`gr-framework-and-geometry` 16, plus 29 `prefix` and 5 `b-leaf` rows naming no batch-11 id), and arises
from plan-seeded `requires` lists that stop short of each page's actual published-root closure.
Resolution is an owner/adjudicator decision, not a hand edit here: either extend the pages' `requires`
(manifest first, then plan, through the documented splice path) or record an owner scope decision
licensing reading-order access to published root pages without `requires` entries. Nothing about the
pair's mathematics is missing: the cited items all exist, are published, and were read at their exact
statements.

### 2. `fwdcheck` `forward-undeclared` (17 rows, six items)

`node tools/physics-support/fwdcheck.mjs` exits 1 (the corpus-wide count is dominated by published
root-library items on planned pages citing unplanned ones). For this pair it reports 17 hard rows, one
per wikilink, on six items:

- `def-cm-iid-sampling-model` — `def-identically-distributed-and-iid-random-variables`
  (home page `weak-laws-and-series-of-independent-random-variables`).
- `ex-cm-math-evidence-chebyshev-sample-mean-check` — `cor-iid-finite-variance-weak-law` (twice),
  `def-expectation-on-a-finite-probability-space`, `def-finite-probability-space-and-event`,
  `def-independence-of-finite-random-variables`, `def-identically-distributed-and-iid-random-variables`.
- `ex-cm-math-evidence-exact-versus-linear-variance` — `def-expectation-on-a-finite-probability-space`
  (twice), `def-finite-probability-space-and-event`.
- `cex-cm-math-evidence-propagation-is-not-exact-for-nonlinear-maps` — `def-expectation-on-a-finite-probability-space`,
  `def-finite-probability-space-and-event`.
- `cex-cm-math-evidence-confidence-coverage-is-not-posterior` — `def-conditional-probability`,
  `def-finite-probability-space-and-event`.
- `rem-cm-inference-and-uncertainty-scope` — `cor-iid-finite-variance-weak-law` (twice),
  `thm-factorization-of-expectations-for-independent-variables`.

All targets are published canonical items used load-bearingly; their home pages
(`finite-probability-spaces-and-random-variables` — combinatorics; `weak-laws-and-series-of-independent-random-variables`;
`independence-borel-cantelli-and-zero-one-laws`) are **absent from `plan-spec.json`**, so `fwdcheck`
assigns them order `#Infinity` and treats every link as forward. Declaring them in `forward_refs` is
structurally impossible: the targets are in `deps` (`forward-in-deps`), and the one link on a definition
is load bearing on a spine kind (`forward-on-spine`). The sound resolutions are plan-level: splice those
pages into the plan's reading order (and into this pair's `requires` closure), or record the owner scope
decision above. Deleting the links would hide a forward reference the renderer must mark, and re-authoring
the targets is forbidden by SCHEMA ("Shared mathematics uses imported canonical IDs; never re-author an
imported item"); both were rejected. No cycle results from any of this: the affected link set contains no
`deps` edge that any gate reports as circular.

The design's E17 text develops these notions from measure/integration suppliers, but the canonical items
exist published, and SCHEMA §"Library" requires importing them — so the gap is the plan's, not the item
graph's. **Smallest set of supplier pages specific to these two findings**: the three absent pages above
plus `probability-spaces-random-variables-and-expectation` (order 45, already planned but outside this
page's `requires` closure); those four cover the six `undeclared-prereq` rows that name them. The
remaining 18 `undeclared-prereq` rows name ordinary published root pages reachable from the items'
published closure (e.g. `sigma-algebras-and-borel-sets`, `the-total-derivative`,
`mixed-partials-taylor-and-extrema`), and any `requires` extension or scope decision must cover those too.

## Cross-batch dependencies

`research/physics-cm-qm-gr-79-2026-10-11-batch-11.cross-batch-dependencies.json` is `[]`. No batch-11 item
depends on an in-run item (all suppliers are published root items), so the batch owns no consumer-side
ledger rows. The frontier ledger does contain one edge **into** this pair: page
`cm18-measurement-uncertainty-and-later-bridges` (batch 34) declares `requires: cm-math-evidence` in
`research/physics-cm-qm-gr-79-2026-10-11-batch-34.pages.json`; that edge is consumer-owned and belongs to
batch 34's own input file, not to this one. Batch 34 is released only after this batch's suppliers are
complete, which the current seventeen `ready` records assert subject to Step-2/3 review.

## Escalations

- No item-level escalation was recorded: every item is completely authored, its prerequisites exist as
  published canonical items with their exact statements read, its page placement exists, and its proof
  contract is green — so each record is `ready`. The two plan-level findings above are the batch's
  owner-facing judgement and are escalated in this file with exact pages, items and the smallest missing
  suppliers. If the owner prefers item-level `escalated` records for the six `fwdcheck`-affected items
  until the plan splice lands, the records can be flipped; the mathematical prerequisites themselves are
  not missing.
- No dropped source, no coverage shortfall (9 sources, 63 disposed results), no page-split request, and no
  AC use to declare. No potentially defective published item was found among the consumed suppliers.
