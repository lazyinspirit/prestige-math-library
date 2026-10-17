# Batch 69 authoring notes — finite gravitational phase and entropy reference

## Scope and plan reconciliation

This batch owns `tgr-mg01` and `tgr-mg01-examples`, with the design scope and conventions in `research/plan-thermodynamics-and-general-relativity-track.md` §566 and the current page inventory in `research/plan-spec.json`. The design section's page reservation records `requires: []`; the current plan spec records `requires: [qsm-bose-fermi-gases]`. Following the task instruction, the current plan spec controls. The A page therefore declares the QSM page prerequisite, and the B page depends on its A page.

The design's 12 A items and 7 B examples/counterexamples are preserved. Three local A-page prerequisites were added to complete the arguments: `lem-tgr-finite-gaussian-moment-envelope`, `lem-tgr-annular-radial-integration`, and `lem-tgr-regulated-kepler-shell-law-normalization`. The first two supply finite Gaussian estimates and a choice-free radial integration proof; the third proves that the explicitly defined shell measure has total mass $\Omega'(E)$ before its normalization is used. The page stays under the 100-item cap at 15 A items and 7 B items.

## Supplier substitutions and item ordering

The inventory's research-only mathematical aliases were not treated as carriers:

- `TGRGS-TD17` (finite Gaussian integration and moments) is supplied by the exact published `thm-gaussian-integral` statement plus the new local Gaussian moment-envelope lemma.
- `TGRGS-TD27` (differentiation under an integrable local majorant) is supplied by `thm-differentiation-under-the-integral-sign`; each consumer proof states its actual majorant.
- `TGRGS-NRE2` (smooth ODE local existence/continuation) is supplied by `thm-picard-lindelof-local-existence-and-uniqueness` and `lem-ode-extension-from-a-compact-interior-region`.

The shell-coordinate integration is proved locally in `lem-tgr-annular-radial-integration`; its finite Jordan charts and explicit finite sphere cover do not invoke arbitrary choice. Every `deps` supplier is at a lower in-run item level than its consumer. The shell-normalization lemma is the `justified_by` discharge for the shell definition and necessarily depends on that definition; this discharge is separate from the `deps` scheduling graph under the schema. Current in-run item levels are recorded in the pages manifest: zero for the three foundation/phase-reference items, one for their first local consumers, two for the finite Gibbs/collapse/shell calculations, three for response/entropy/conditional Fermi/bath results and most examples, and four for the finite-bath example. The recomputed item graph is acyclic. The run-level DAG places batch 69 at level 3 with batch 45 as its prerequisite.

## Cross-batch QSM interface

The QSM page dependency exists as the current draft page. The batch-45 item `lem-qsm-models-diagonal-occupation-trace` is also now present as a draft carrier. Its complete Statement matches the batch-45 planned-manifest Statement exactly. I inspected the full item proof; its finite-mode trace product (step 1.2), finite/countable trace argument (steps 2.2 and 3.1), and normalized occupation marginals (step 3.2) cover the use in `lem-tgr-static-finite-fermi-occupations`. For the assigned finite set, $q_j>0$, summability, and finite negative-gap conditions follow directly; the supplier's $\mathrm{AC}_\omega$ assumption is carried explicitly in the consuming item and contract. The current supplier file has `status: draft`, `verification.precheck: pass`, and a current Step-1 `ready` authoring record. Those are not independent proof approval. The consuming claim remains explicitly conditional on the supplier result. The page edge and item interface check are `verified` in the cross-batch dependency array; `verified` records only this scoped check.

## Sources and source dispositions

The complete active texts and fetch stamps are recorded in `research/physics-remaining-80-2026-10-17-batch-69.coverage.json`; per-source locators, supported items and dispositions are also summarized in `research/physics-remaining-80-2026-10-17-batch-69-sources/source-reading.md`.

- Katz, *Thermodynamics and Self-Gravitating Systems*: full manuscript; pp. 7–10, 16–17, and 22–24 inspected for cutoff, partition, entropy-curvature, negative-capacity and self-gravitating-gas context.
- Tong, *Statistical Physics*: complete lecture notes; §§1.3–1.3.1, §2.1, and §§3.5–3.6 inspected for canonical entropy/response, classical phase integrals and Fermi occupation context.
- Chavanis I: complete paper; pp. 19–25 inspected for relativistic Fermi/Tolman context only.
- Chavanis II: complete paper; §III, pp. 8–11, and pp. 25–33 inspected for classical relativistic gas, Tolman/Klein and ensemble-stability context.
- Tao, *An Introduction to Measure Theory*: complete text; §1.4, Theorem 1.4.49, and surrounding measure/integration definitions inspected for convergence context.

Tong and Tao are independent full-length mathematical treatments, with Katz and Chavanis providing independent gravitational-statistical context. All local theorems and counterexamples include complete arguments; literature is not treated as proof authority. The previously fetched URL attributed to Padmanabhan was title-page checked, found to be a different paper, and remains preserved only in `source_resolution_history`; it was not used. This was an identity mismatch, not a failed retrieval. No active-source recovery retries were needed.

## Scoped check record

The commands and results below were run after final item, page, and evidence edits. They establish authoring format and dependency bookkeeping only; they are not independent proof approval.

### Final scoped check results

- `source-fetch-check --coverage research/physics-remaining-80-2026-10-17-batch-69.coverage.json --stamp`: 5/5 full-text sources are fetch-verified and resolved; 0 newly stamped, 0 drops.
- Scoped precheck: 22 files supplied, 19 proof-bearing items checked, 0 failures; the three definitions had no phase body and were correctly `not-applicable`.
- `proof-layout`: 22 items, 58 steps, 0 defects.
- Scoped `rendercheck`: 24 item/page files, 0 errors and 0 warnings.
- Scoped `depcheck`: 22 items, 0 errors and 0 warnings.
- Scoped `content-policy`: 22 items, 0 errors and 0 warnings.
- Strict proof-contract check: all 22 items covered, 0 errors and 0 warnings.
- The cross-batch dependency file is a two-row JSON array; both the QSM page edge and the actual QSM item interface check are `verified` with scoped evidence.
- Recomputed batch-69 in-run item levels are acyclic and have maximum level 4. The page dependency is `qsm-bose-fermi-gases` (batch 45); the last recorded run-level schedule places batch 69 at level 3, pending owner recomputation of the stale shared snapshot.
- All 22 batch-69 item readiness records are `ready` and their current hashes validate. The full-run readiness checker remains open at 511 of 532 items, with 69 work rows outside this batch.

### Run-wide owner blockers outside batch 69

- `item-dependency-levels.mjs check --run physics-remaining-80-2026-10-17` exits nonzero on empty inventories in other batches and reports `pthm-emg-matter-symmetry-charges` at declared level 5 versus computed 7. It reports no batch-69 level mismatch; those other inventories and levels are outside this assignment.
- `batch-dependency-levels.mjs check --run physics-remaining-80-2026-10-17` reports the shared run-level snapshot stale and requests recomputation. That shared dependency evidence is owner-owned and was not edited.
- `proof-contract-coverage.mjs` cannot load the full run frontier because another batch has an empty `emg-mm03` inventory. The batch-69 strict contract file itself passes all 22 scoped items.
