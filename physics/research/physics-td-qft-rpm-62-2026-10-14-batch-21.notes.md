# Batch 21 notes — Interacting Equilibrium Preparations

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: beta · batch: 21  
Assigned pair: `td-interacting-equilibrium-preparations` / `td-interacting-equilibrium-preparations-examples`

## Scope and plan reconciliation

The current task, owner authoring direction, assigned design, and current `plan-spec.json` agree on the A/B page IDs, titles, order 303/304, thermodynamics category, and page prerequisites `td-finite-statistical-bridge` and `td-math-interacting-ensemble-geometry`. The plan-spec page records were still `items: []` scaffold rows; the controlling thermodynamics design reserves 11 A items and four B topics.

An older prose-scaffold TD12 row lists only 10 A items and omits `pthm-td-stable-tempered-free-cube-grand-pressure`. The current plan includes that item, so it was retained. One additional local A definition, `def-td-retained-hard-core-zero-beta-preparation`, was necessary to define the declared hard-admissibility continuation without using the undefined product `0·(+∞)`. The A page has 12 items against its reserved cap of 32; the B page has four examples against its cap of 12. Both pages remain below the hard 100-item cap. No page-capacity or placement conflict remains.

The fixed-N positional shell is defined locally because batch 15’s continuous microcanonical postulate concerns a regular Hamiltonian shell in full phase space, including momenta. It does not supply a configuration-energy shell for the positional pair energy. The canonical positional law specializes batch 15’s measurable-model canonical rule; the grand weights and positional shell conditional law remain explicit local adoptions.

## Dependency and interface audit

The run dependency-level plan gave batch 21 level 5 with batches 15 and 18 at level 4. Their carriers appeared during this authoring pass, so the actual statements were inspected and dependency levels were recomputed over the 56-item, eight-page current-run dependency closure. There are no cycles or level-label errors. The current item levels are:

| Item | Level |
|---|---:|
| `def-td-stable-tempered-continuum-preparation` | 0 |
| `def-td-admissible-van-hove-and-tempered-exterior` | 1 |
| `post-td-classical-indistinguishable-particle-measure` | 1 |
| `def-td-controlled-fixed-n-energy-shell` | 2 |
| `def-td-retained-hard-core-zero-beta-preparation` | 2 |
| `post-td-equilibrium-ensemble-sampling` | 5 |
| `post-td-grand-variational-phase-uniqueness` | 6 |
| `pthm-td-stable-tempered-free-cube-grand-pressure` | 6 |
| `pthm-td-controlled-thermodynamic-ensemble-duality` | 6 |
| `pthm-td-qualified-van-hove-and-exterior-limit` | 7 |
| `pthm-td-controlled-continuum-thermodynamic-limit` | 9 |
| `pthm-td-interacting-three-ensemble-local-limit` | 10 |
| `ex-td-forbidden-pair-beta-zero` | 3 |
| `ex-td-two-particle-hard-core-preparation` | 6 |
| `ex-td-nonunique-variational-phases` | 7 |
| `ex-td-volume-sized-external-field` | 8 |

The physics statements now match the actual current math interfaces: Borel pair potentials, the stable/superstable regularity hypotheses, the supplier’s `ℓ∞` positive-core convention, explicit numerical-energy conversion with `E0 = 1 J`, and all imported set-theoretic assumptions. The exterior result retains the genuine divergent positive core and fixed `Ω(t)` class; superstability alone is not substituted. The van Hove boundary convention transfer is justified by finite-dimensional norm equivalence. The zero-beta interval-conditioned result uses the interval-event supplier for event rates and conditional accumulation points; the retained-hard-zero-beta supplier is used only for the matching grand law and minimizer set. The shrinking-shell claim remains positive-temperature, positional, and conditional on a constructed width sequence; no arbitrary widths, exact-energy surface, kinetic energy, or dynamical thermalization is claimed.

The 12 direct batch-18 mathematics suppliers were checked against their actual statements and proof contracts. Upstream files changed during this pass: an intermediate run reported nine missing-fact mappings; a later run passed 12/12; another intermediate run reported seven `citation-quote-mismatch` errors across five draft supplier items (`thm-tdmath-van-hove-fixed-n-limit`, `thm-tdmath-fixed-n-local-ensemble-equivalence`, `thm-tdmath-interval-event-ensemble-limit`, `thm-tdmath-periodic-fixed-n-limit`, and `thm-tdmath-controlled-shell-three-ensemble-equivalence`). The latest strict scoped recheck passes 12/12 with zero errors or warnings. Current supplier statements were re-inspected and still match the conditional physics interfaces. This contract check does not constitute mathematical approval: none of the 21 batch-18 items has a Step 1 decision, so those carriers remain draft. Batch 15 has all 23 Step 1 records, but 22 are escalated. In particular, `post-td-canonical-sampling` has a passing scoped proof contract and an escalated Step 1 record because its batch-11 inputs `def-tdmath-countable-canonical-model` and `def-tdmath-measure-integral` are not current. The required batch-15 and batch-18 page edges therefore remain open. Exact interfaces and current open statuses are recorded in the cross-batch dependency file.

The 16 batch-21 escalations were recorded while the latest preceding batch-18 supplier check passed; they remain unchanged with `owner: false`, in accordance with the no-overwrite rule. The latest scoped supplier check again passes, but the required upstream pages/items still lack current Step 1 decisions, so readiness remains escalated. The latest sampled `step1-decisions.mjs check --run` result (2026-10-14 05:52 UTC) reports 680 run items, 274 ready, and an open run; all 16 owned items are escalated with `owner: false`. The workspace state directory `.physics-autopilot/physics-td-qft-rpm-62-2026-10-14` exists. Its read-only status report, updated 05:51:09 UTC, shows batch 21 in flight at `1-scaffold` (54/64 coverage), but the command cannot recompute live status because the workflow revision differs and historical receipts cannot be adopted under the new stage numbering. The last report lists owner repair/recertification and a scheduling-scope mismatch as blockers. No engine state or verdict was changed.

## Source reading and retrieval history

The active A-page coverage uses two independent full-text lecture-note treatments plus primary mathematical sources. Full text inspected: Tong, *Statistical Physics*, author-hosted chapter 1 HTML §§1.2–1.4 and chapter 2 HTML §§2.1–2.2.4, 2.5; Likharev, *Essential Graduate Physics: Statistical Mechanics*, author-authored LibreTexts §§2.02, 2.04, 2.07, 3.01, 3.05; Georgii’s 25-page author-hosted PDF, §§1–2 and Theorems 2–4; and Ruelle’s 33-page IHES PDF, §§1–2, Proposition 2.6, and §§5.2–5.3. The exact locators, supported items, harvested headings, and every result disposition are in the coverage JSON. All nine active source entries were fetch-verified with hashes; `source-fetch-check --stamp` reports 9/9 verified and zero dropped sources.

Earlier retrieval records were reused rather than retried. Batch 8’s `source_resolution` contains the six-attempt histories and item-specific alternatives for Tong’s combined statistical-physics PDF and Likharev’s merged SM PDF; their compressed page counts could not be verified because `mutool` is unavailable, and the Stony Brook Commons download returned HTTP 403. The batch-18 notes record the Springer Georgii endpoint’s sign-in/cookie response. Full-text author-hosted HTML, LibreTexts chapters, and Georgii’s author-hosted PDF were inspected and are active here; Ruelle’s official full PDF also verified successfully. No mathematical result or source content was dropped. The batch-21 coverage warning is `7/27 harvested results scaffolded`; the other dispositions are source-specific `out-of-scope` reasons, retained for independent Alpha confirmation rather than padded with unrelated items.

## Scoped checks

- Source fetch: 9/9 active sources verified; zero drops.
- Coverage checklist with destination required: zero errors, one low-yield warning (7/27 scaffolded).
- Content policy: 16 assigned items, zero errors/warnings.
- Physics-content check: 16 assigned items and two pages, zero errors.
- Dependency check: focused batch-21 scope and prerequisite closure, zero errors/warnings.
- Dependency levels: 56 current-run closure items across eight pages, zero errors.
- Proof contracts: strict check passes for 16 items; 41 exact supplier citations, zero errors/warnings.
- Precheck: 12 proof-bearing items, zero failures after canonical dependency-depth numbering.
- Proof layout: 16 assigned items, 23 numbered proof steps, zero defects. The web checkout’s fallback TS loader did not resolve `@/` aliases by default; a temporary `/private/tmp` alias hook enabled the same renderer check without changing the shared app checkout.
- Rendercheck: all 16 items and both pages parse under the renderer’s YAML parser and KaTeX; zero errors.
- Prosecheck: all 16 items and both pages, zero errors and warnings.
- Manifest/page/item metadata consistency: zero mismatches.

These completion records document authored coverage and mechanical checks; they are not independent approval. The remaining hold is the open batch 15/18 readiness evidence recorded above.
