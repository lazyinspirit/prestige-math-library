# Batch 1 authoring notes — MSF-01

## Design control and conflicts

The binding owner direction selects research/plan-mathematical-statistics-track.md as the controlling design. Its MSF-01 row in “Pair inventory and dependency-ordered designs” supplies the full seven-item A inventory, the optional parameter-measurable kernel, the quotient-factorization proof route, and the Bernoulli examples. The companion row in research/plan-statistical-models-experiments-track.md is an older Category-1 interface list for downstream model work; it names the core experiment/identifiability items but omits the optional kernel item. The foundations-01 dossier also proposed one combined experiment/identifiability item and a different example. Those are stale proposals; the owner direction and controlling track plan govern.

research/plan-spec.json agrees on the two page IDs, titles, category, orders 1844–1845, and the A-page prerequisites probability-spaces-random-variables-and-expectation and measures-and-their-basic-properties. Its empty item arrays are the pre-authoring scaffold, not a conflicting mathematical inventory. The Step-1 drift review records MSF-01 as no-drift and found no additional page prerequisite.

## Inventory, dependencies, and levels

The scaffold manifest now records seven A-page items and two B-page items, each with its direct deps and dependency_level. The scoped DAG calculation is acyclic and matches the item frontmatter: the A levels are 0, 1, 1, 2, 2, 3, and 4; both B examples are level 5. The A page has no in-run supplier, so batch 1 remains level 0. The B page depends on its A companion in the same batch. There are no cross-batch item or page edges; the batch-1 cross-batch dependency input is therefore empty.

The finite examples use def-sigma-algebra, which is within the prerequisite closure of the required measure-theory page. The random-element/law interface cites def-law-or-distribution-of-a-random-element and its local probability-measure lemma. The supplier definitions and the lemma’s proof were inspected; no choice axiom is used by this batch.

## Sources and source history

The A-page coverage record lists all harvested results and their dispositions. The relevant full texts were read: Martin, §§1.3.5–1.3.6 and 1.4.1, PDF pp. 19–23; Geyer, §6, PDF pp. 6–7; and Hoff, pp. 1–3 (the complete 13-page note was inspected). source-fetch-check --stamp fetched and stamped all three full PDFs on the first attempt: 145, 45, and 13 pages respectively. The subsequent check mode passed 3/3 sources. No retrieval failure, retry, drop, or unresolved source exists.

Martin’s p. 23 calls the sample space Θ in one summary sentence; the surrounding text identifies the observation space X, which is used here. Geyer’s hyperplane/variance-matrix criterion is specific to canonical exponential families and is not asserted for arbitrary models. Hoff’s Theorem 1 on p. 10 repeats the same P2 expectation on both sides; it is marked out-of-scope and is not used. The factorization theorem in this batch is proved locally.

## Scoped checks and readiness

- Scoped item-level DAG: 9 items, levels 0–5, no cycles; manifest dependencies and levels match all nine carriers.
- precheck.mts: 3 proof-bearing items passed; six definitions are not applicable.
- proof-layout.mjs: 9 items, 9 numbered steps, 0 defects.
- rendercheck.mjs: all 11 changed item/page files passed; no errors or warnings.
- Strict proof-contract check: 9/9 entries checked, no errors or warnings. The two finite examples include explicit event/mass checks.
- Focused depcheck: 9 items and both pages checked with their prerequisite closure; no errors or warnings.
- content-policy.mjs: 9 scoped items, no errors or warnings.
- Source fetch check: 3/3 fetched sources verified.
- step1-decisions records all nine items ready; each current readiness hash was rechecked and is closed. These records are construction readiness, not independent approval.

Run-wide integration remains owner-controlled. The scheduling input read before authoring had input_sha256 d8013d8791136ba6b292e20bb6ac3dc8e8b6bd868cce45493b4e1ffa6358a8e1. proof-contract-coverage cannot load the entire run frontier while the current plan projection still has an empty inventory for gaussian-orthogonal-decomposition-and-quadratic-forms. batch-dependency-levels.mjs check reports the pre-authoring scheduling hash as stale after this manifest was filled; the computed batch-1 level is still 0, and the owner/engine must recompute the run-level scheduling artifact before its next transition. The recomputed Autopilot status remains at 1-scaffold, with 0/37 declared scaffold results and artifacts missing for batches 2–37; batch 1's assigned output is present. No local mathematical escalation was identified.
