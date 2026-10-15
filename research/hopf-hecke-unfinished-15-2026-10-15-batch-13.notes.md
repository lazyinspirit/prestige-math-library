# Batch 13 authoring notes — Cyclotomic Hecke Quotients and Ariki–Koike PBW

## Inventory and plan comparison

The current plan-spec entry for HH-16 has `items: []`. The HH-16 section of `research/plan-hopf-hecke-algebras-track.md` and `research/hopf-hecke-scaffold/inventory.json` describe seven proposed A claims. All seven corresponding `items/` files are present and `published`; the owner’s rehomed/context declarations bind exactly those seven carriers as same-page published prerequisite context. Per `research/hopf-hecke-unfinished-15-2026-10-15-owner-authoring-direction.md`, they remain outside this run’s authored manifest and were not edited or reminted. This is the inventory mismatch recorded for reconciliation: the plan-spec has no new A IDs, while the older design inventory names IDs already occupied by published context.

The controlling page requirements in plan-spec and the HH-16 design agree: tensor coherence, generic finite Hecke basis, type-A affine Hecke/Bernstein PBW, and ordinary RSK. The page’s seven published claims were read in full against the design. Their statements retain the multiplicative $Q,u_a$ convention, the initial-only cyclotomic polynomial, integral spanning, generic content models, colored RSK, and base change. The source carriers remain unchanged. A distinct new A lemma supplies the rank-one monic quotient and repeated-root nilpotent used by the examples; this claim is not one of the seven published contracts.

## Authored inventory and levels

| Item | Home | In-run dependencies | Item level |
|---|---|---:|---:|
| `lem-hh-rank-one-cyclotomic-quotient-monic-basis` | A | none | 0 |
| `ex-hh-ariki-koike-level-one-is-finite-type-a` | B | none | 0 |
| `ex-hh-ariki-koike-rank-two-level-two-pbw` | B | none | 0 |
| `ex-hh-ariki-koike-rank-one-level-two-quotient` | B | rank-one A lemma | 1 |
| `ex-hh-ariki-koike-colliding-content-specialization` | B | rank-one A lemma | 1 |

The seven published A context carriers are page entries authorized by the owner context declaration, not items in this run’s manifest inventory. The batch remains dependency level 1 because the A page requires batch 12.

## Cross-batch interface still unavailable

Batch 12 has no authored items in its current page manifest. The following exact files were absent at handoff: `def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences`, `def-hh-type-a-affine-bernstein-presentation`, `lem-hh-demazure-lusztig-operators-satisfy-affine-relations`, `thm-hh-affine-type-a-bernstein-pbw`, and `thm-hh-affine-type-a-center`. The page-level requirement and the first four relevant supplier interfaces remain unresolved for the full HH-16 dependency closure. Required hypotheses and affected claims are itemized in `research/hopf-hecke-unfinished-15-2026-10-15-batch-13.cross-batch-dependencies.json`.

The new rank-one lemma is proved from the rank-one presentation and does not depend on batch 12. The four B examples were written and proved using the actual published context carriers. The page-level Bernstein/PBW interface still requires reconciliation before this batch can claim complete prerequisite closure for the full HH-16 page. No missing supplier excerpts, proof bodies, or acceptance were inferred.

## Source retrieval and reading

`source-fetch-check --stamp` fetched and verified all four full texts; there were no retrieval failures or recovery retries. `research/hopf-hecke-unfinished-15-2026-10-15-batch-13.coverage.json` records the URLs, locators, inspected text, supported items, and included/inline dispositions. The complete Neaime §6 proof route, Hu–Mathas §3.1–3.2 seminormal reasoning, Mathas lecture-note sections §1.1/1.4/1.6, and Craven §1.5 ordinary RSK proof were inspected. Normalization differences are recorded in the coverage file; no additive formula at $v^2=1$ is used.

## Readiness scope

The new item proof contracts quote actual current supplier excerpts. Per-item decisions are recorded only for the five newly authored draft items. The owner-bound seven published context carriers, page-level batch-12 hold, source stamps, and later pair consumers receive no new review or acceptance coverage from this authoring record.

## Check results and remaining run-level blocker

- Strict proof-contract check: 5/5 authored items checked, 0 errors, 0 warnings.
- Precheck: all five authored proofs pass after adopting its one numbering repair on the new lemma.
- Proof layout: 5 items, 12 proof steps, 0 defects.
- Scoped item dependency levels: 5 items checked; computed levels are 0, 0, 0, 1, 1 with no cycle or label error.
- Source fetch check: 4/4 full texts fetch-verified; 0 source drops.
- Per-item Step-1 decisions: the five new items have current `ready` records with their exact item dependencies. This records item-level readiness only; it does not close the separately declared page-level batch-12 requirement.

The run-wide `batch-dependency-levels` recomputation and Step-1 whole-run closure remain open. Other pair manifests changed after the last valid input fingerprint, `5b9b1551a3e5e92a86d1a4749c8ad12e8ba5bb4bc9ece1276257c539250bb988`, so that recorded hash and the coverage file's corresponding scheduling hash are stale. A fresh recomputation failed while parsing another pair's current supplier carrier: `items/lem-hh-commutative-or-cocommutative-antipode-is-involutive.md:19` contains a raw TeX escape in a YAML double-quoted locator. The YAML parser reports the invalid `\m` escape. That file is outside batch 13 and was not edited. Its owner must repair the frontmatter before the run-wide input can be regenerated and the complete frontier recertified.

The actual `node tools/step1-decisions.mjs check --run hopf-hecke-unfinished-15-2026-10-15` result was `closed: false`, with 103 in-run items and the five batch-13 items ready. Other items still lack readiness records; six A/B pages in batches 1, 4, and 12 also have empty scaffold inventories. This is the current parallel-authoring state and does not change the five scoped readiness records above.

I also inspected `research/hopf-hecke-unfinished-15-2026-10-15-step1-blockers.json`. It is stamped `2026-10-15T04:06:06.432Z` at stage `1-drift` and records that stage's earlier `validate-plan` failure. The live autopilot status read at `2026-10-15T04:33Z` showed `1-drift` and `1-drift-apply` complete, so the older blocker receipt was retained as history and not treated as this batch's current authoring verdict.
