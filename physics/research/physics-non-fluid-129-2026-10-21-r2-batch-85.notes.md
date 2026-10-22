# Batch 85 — Local topology, entropy compactness and path-space estimates

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: beta  
Page pair: `csm-frontier-probability-interfaces` / `csm-frontier-probability-interfaces-examples`

## Scope and plan reconciliation

The pair has eight A-page items and one B-page example, below the 100-item page cap. The original four reservations were retained: `def-csm-frontier-local-topologies`, `lem-csm-frontier-finite-chain-martingale`, `lem-csm-frontier-finite-doob-bound`, and `lem-csm-frontier-finite-entropy-chain`. Four supporting carriers were added on A before their consumers: `def-csm-frontier-vague-topology`, `def-csm-frontier-finite-generator-chain`, `lem-csm-frontier-cylinder-weak-equivalence`, and `lem-csm-frontier-finite-generator-chain-existence`.

The detailed prose design at `research/frontier-expansion-2026-10-19/classical-statistical-mechanics/prose-scaffold.md` lists only `csm-gibbs-lattice` as the A-page requirement. The current controlling `plan-spec.json` row and the dispatched batch manifest also require `csm-stochastic-response`. The manifest preserves the controlling plan's two required pages. This batch has no in-run supplier batches, so its dependency level remains zero. Both required page interfaces were inspected in their current published carriers.

The stochastic-response page's finite-rate construction assumes a connected reversible model and carries Choice. That interface is narrower than the assigned chain claim for arbitrary finite rate matrices, including reducible chains and absorbing states. The batch therefore defines the row-generator convention locally and proves a general uniformization construction from Ionescu–Tulcea under its stated Choice assumption. The finite-chain martingale result depends on that local construction. The universal Doob bound has no chain prerequisite and is proved on dyadic finite grids. The finite entropy item states the zero-mass convention and proves the chain rule and event grouping; it uses the pinned finite-KL lemma for nonnegativity. The published Gibbs variational identity is not a logical premise of this broader finite conditional chain rule, so it is not added as an item dependency.

## Inventory and dependency levels

| Item | Page | Level | Logical suppliers |
|---|---|---:|---|
| `def-csm-frontier-local-topologies` | A | 0 | `def-csm-finite-range-lattice-interaction` (published external) |
| `def-csm-frontier-vague-topology` | A | 0 | none |
| `def-csm-frontier-finite-generator-chain` | A | 0 | none |
| `lem-csm-frontier-finite-doob-bound` | A | 0 | imported mathematical probability interfaces only |
| `lem-csm-frontier-finite-entropy-chain` | A | 0 | `lem-it-finite-classical-kl-nonnegative-equality` |
| `lem-csm-frontier-cylinder-weak-equivalence` | A | 1 | `def-csm-frontier-local-topologies` |
| `lem-csm-frontier-finite-generator-chain-existence` | A | 1 | local generator definition and Choice/Ionescu–Tulcea interfaces |
| `lem-csm-frontier-finite-chain-martingale` | A | 2 | local generator definition, local existence result, continuous-time martingale and probability interfaces |
| `ex-csm-frontier-singular-local-limit` | B | 1 | local topology and vague topology definitions |

There are no logical cross-batch edges within `r2`; the batch cross-batch dependency input is therefore the required empty JSON array. The exact array shape and batch-85 ownership were checked. External published mathematical and page suppliers remain direct prerequisites in the items or manifest, not rows in this run's cross-batch review file. The final read-only run-wide frontier collection passes structurally and reports 34 reviewed batches, 95 unreviewed batches, 140 declared edges, and 197 orphaned review rows elsewhere; batch 85 has zero edges. Those other-batch dispositions remain with their owners.

## External page readiness audit

The current-run `loadStep1Record`/`step1Decision` snapshot has no item records for the two required pages because they are external to `r2`. Their originating run is `physics-remaining-80-2026-10-17`. In that run, `step1Decision` reports the existing records for `def-csm-finite-range-lattice-interaction`, `lem-csm-lattice-product-and-measure-compactness`, `def-csm-dk-finite-reversible-rate-model`, and `thm-csm-dk-nonexplosive-ctmc-and-gap` as `decision: ready` but not closed: `Item or dependency changed; record current readiness`.

The live required page files are published and the complete current interfaces/proofs were inspected. The finite-spin item proves its own topology equivalence without the old countable-choice compactness theorem; no assigned theorem uses the connected reversible stochastic theorem as a premise, and its narrower actual hypotheses were not broadened. The plan-required page edges remain present. The stale upstream authoring hashes are escalated to the owner for page-level readiness refresh; they do not change the assigned items' exact mathematical dependency DAG. No current-run cross-batch row is added for those prior-run pages.

## Proof and scope decisions

- The finite-spin product lemma uses the fixed enumeration, explicit weighted cylinder metric, and a finite-branching open-cover compactness proof. It proves cylinder sigma-algebra equals Borel and both directions of weak/local convergence without measure extension or a choice axiom. The existing product-measure compactness result was inspected but not used because its extension/compactness route assumes countable choice.
- Continuum point measures are defined separately by locally finite counting measures and vague tests. Local-count uniform integrability is recorded as a hypothesis interface only; this batch does not claim convergence of unbounded local counts from vague convergence.
- Uniformization treats $q=0$, self-transitions, reducibility, absorbing states, nonexplosion, and matrix-exponential transitions. Choice is explicit through the imported Ionescu–Tulcea theorem. The finite-state martingale proof obtains the predictable bracket by a uniform small-time second-moment estimate and finite partitions; it does not invoke path-space tightness.
- The Doob bound is proved from first-crossing events on finite dyadic grids, tail integration, Cauchy–Schwarz, and monotone convergence. It does not depend on the chain result or use the imported Doob maximal inequality as a black box.
- The entropy chain rule omits zero marginal terms; event grouping covers empty and full events and uses nonnegativity only for finite conditional KL vectors with strictly positive reference.
- The B example puts the uniform permutation for each $n$ on its own finite probability space and states testwise convergence as $\mathbb P_n(|\langle\Xi_n,f\rangle|>\varepsilon)\to0$; no coupling across $n$ is assumed. The fixed-label point mass vanishes against each compactly supported vague test, while the particle selected at site $0$ has exactly a Bernoulli$(1/2)$ mark for every $n$.

All items have `domain: mathematics`, `library: physics`, and mathematical-only dependencies. None has `physical_scope`; no model postulate, experiment, or empirical claim is asserted.

## Source retrieval and coverage

The coverage record `research/physics-non-fluid-129-2026-10-21-r2-batch-85.coverage.json` records seven full-text sources, source locators, per-item dispositions, search history, and both recovered source routes. Friedli–Velenik and Norris are the independent A-page treatments; Durrett, Aldous–Fill, Touchette, Kallenberg and Last–Penrose cover adjacent proof interfaces and the B example. The obsolete Last–Penrose URL returned HTML and the former Kallenberg route returned 404; the coverage record preserves both attempts and records the successfully inspected alternatives. No source was dropped.

The coverage file records source recovery and per-item disposition. A `source-fetch-check` run after those updates reported 7/7 sources fetch-verified, 7/7 resolved, and zero dropped sources. Source reading and fetch verification do not substitute for proof review or independent acceptance.

## Current readiness and scoped checks

`step1Decision` records were written separately for the nine assigned items after their complete proof carriers and contracts were authored. Six items close as `ready`. `def-csm-frontier-local-topologies`, `lem-csm-frontier-cylinder-weak-equivalence`, and `ex-csm-frontier-singular-local-limit` are `escalated` because their direct/transitive local-topology interface traces to the stale originating-run readiness record for `def-csm-finite-range-lattice-interaction`. Each escalation names the exact dependency and stale-record evidence. The external page-readiness observation above remains a page-level owner follow-up; item records do not claim refreshed readiness for those prior-run pages.

After the example's escalation record was written, its finite-space convention was clarified to state the probabilities $\mathbb P_n$ explicitly. Its disposition remains escalated, and that escalation was not overwritten. The owner can refresh the record after resolving the upstream readiness issue.

Scoped results after final item edits:

- `source-fetch-check --coverage ...batch-85.coverage.json`: **7/7 fetch-verified; 7/7 resolved; 0 dropped**.
- Explicit authored-item `precheck.mts`: **6 proof-bearing items checked; 0 failures**. The three definitions have no proof body.
- `proof-layout.mjs` on the nine explicitly changed items: **9 items, 26 steps, 0 defects**.
- `rendercheck.mjs` on the nine items and two pages: **all 11 files passed YAML and math rendering**.
- Scoped statement-first inspection: **9 items, 0 defects**.
- `content-policy.mjs` on the batch manifest: **9 scoped items, 0 errors, 0 warnings**.
- `proof-contract.mjs --strict`: **9/9 items, 0 errors, 0 warnings**.
- `depcheck.mjs --items-file ...`: **all 9 selected items passed**, including prerequisite cycle checks over their loaded closure (655 items and 395 pages).
- Scoped dependency-level computation for batch 85: **9 items, 0 errors**, with levels 0/1/2 as listed above. The whole-run item-level check finds **194 empty scaffold inventories on other, unassigned pages** and no other dependency-level errors; those manifests were left to their owners.
- Scoped dependency-level recomputation gives levels 0, 1 and 2 exactly as in the inventory. The full-run check reports 194 empty inventories on other, unassigned pages and no other level errors.
- `batch-dependency-levels.mjs write` and then `check` recomputed and verified all 129 run batches; maximum level is 5, and batch 85 remains level 0.
- The read-only whole-run frontier collection passes structure but is still open overall (95 unreviewed batches; 197 orphaned rows). Batch 85 has no in-run edges, so its own empty review array is complete; the other batch inputs remain owner work.

These checks verify scope, format, current dependency interfaces and recorded evidence. They do not certify mathematical acceptance or independent review.
