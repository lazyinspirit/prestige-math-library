# Batch 10 authoring notes — Stationary Ergodic Sources and Universal Coding

Run: `non-ml-math-remaining-81-2026-10-18` · role beta · batch 10 · assigned pages 2512–2513.

## Controlling material and scope

- Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the beta brief, the assigned task, the owner-authoring direction, the current plan files, the batch dependency-level input, and the active autopilot status.
- The task/design lookup found **no pair-specific design section**. IT05 in `plan-spec.json` and `plan-information-theory-track.md` controls. It requires general-process entropy limsup, stationary entropy-rate convergence, componentwise and ergodic SMB, AMS source coding, separate stationary expected LZ78 universality, individual-sequence finite-state optimality, and the stationary-ergodic LZ77 recurrence-time statement with explicit dictionary/termination overhead. The current item inventory covers those claims plus the requested B examples. No shared plan was changed.
- The initial finite-state wording was narrowed to the literature-supported theorem: for each sequence, `limsup L_LZ(n)/n <= rho_FS`. Neither convergence to nor equality with finite-state compressibility is asserted. Stanford EE376C §1.4.1 states this one-sided bound; the local entropy argument proves that direction.
- Entropies in the published finite-distribution interface are in nats. This page defines bit self-information and entropy by division by `ln 2`, and all coding rates and SMB limits are in bits per symbol. Conditional probabilities use finite-partition atoms; zero-probability conditioning atoms are omitted.

## Inventory and dependency levels

The final manifest contains 32 A items and 3 B examples. Item dependency levels were recomputed from the explicit in-batch item graph: zero with no in-run item supplier, otherwise one plus the maximum in-run supplier level. Both item arrays are sorted supplier-first. The cross-batch page prerequisites are recorded separately below; they were not invented as item IDs.

## Supplier-interface inspection

- `stationary-markov-chains-and-ergodic-limits` is published and its 22 item bodies are present. The relevant `cor-stationary-irreducible-markov-shift-is-ergodic` statement and proof were read in full. It assumes AC. The Markov example declares that exact axiom use.
- `iid-lossless-source-coding-and-the-aep` is a draft page with all seven listed item bodies present and read. Its page-level `weak-laws-and-series-of-independent-random-variables` supplier is published; `finite-alphabet-entropy-and-divergence` is a draft page. The source page uses nats, so this batch converts explicitly. No item here cites an unverified IID-page theorem as a proof substitute.
- `prefix-codes-and-finite-lossless-coding` is a draft page with all 18 item bodies present and read. It assumes full-support source laws and nonempty codewords and records entropy in nats. This batch restricts entropy sums to positive support, states its singleton empty-word convention locally, and converts to bits explicitly. Kraft is proved locally where needed and the exact published `thm-kraft-inequality` supplier was inspected. No draft prefix-page result is treated as accepted.
- `measure-theoretic-information-and-conditioning` has no page body in the workspace. Its absent interface is recorded as open. The stationary finite-past argument is written from explicit finite partitions; only the separate conditional-expectation identification uses its existing published suppliers and AC.

## Source reading and disposition

Full text was inspected from Gray's *Entropy and Information Theory* §§8.2–8.4, Gray's *Probability, Random Processes, and Ergodic Properties* §6.3, Cover–Thomas §§13.4–13.5, MIT OCW Chapter 8, Stanford EE376C §§1.3–1.5, the IIT Kanpur LZ78 transcription, Northeastern LZ77 lecture notes, and Algoet–Cover's 1988 AMS sandwich paper. Gray §11.4 Theorem 11.4.1 was checked for an AMS coding statement, not treated as a full-section reading. The locators, supported items, and item-by-item dispositions are in the coverage file. The AMS tail-domination route is proved locally from the complete Gray §6.3 argument: invariant-set agreement, limsup/Fatou asymptotic domination, Lebesgue decomposition, and the uniform singular-mass bound. A second local lemma proves finite KL nonnegativity against subprobability references directly, avoiding the published general KL supplier’s AC hypothesis in choice-free finite proofs.

The primary Wyner–Ziv 1989 LZ77 paper remained unavailable after the five initial publisher/mirror/archive routes recorded in coverage. A final alternative-source search successfully retrieved Ioannis Kontoyiannis’s full-text Stanford dissertation, Chapter 5 §§5.1–5.2 (PDF pp.49–56), including Theorem 6, Corollary 6(a), and the complete proof of Theorem 6. The theorem is now proved locally: Kac return-time integrals and the ergodic SMB typical set bound the upper tail; the new choice-free infinite-past conditional block-information lemma and one-candidate-per-offset count bound the lower tail; monotonic inversion proves the positive-entropy phrase-length limit. The unavailable primary article is marked dropped only as a required proof source; mathematical coverage remains complete. The exact attempt/search history is preserved in `source_resolution` in the coverage record.

## Cross-batch checks still open

- `iid-lossless-source-coding-and-the-aep` (batch 9): current body is a draft; reconcile its exact bit/nat and typical-set interfaces before treating the page-level prerequisite as accepted.
- `prefix-codes-and-finite-lossless-coding` (batch 8): current body is a draft; reconcile full-support/nonempty-codeword conventions with this page's positive-support and singleton convention.
- `measure-theoretic-information-and-conditioning` (batch 5): no current library page body; reconcile its planned conditional-information interface against the local finite-partition definition and AC-only conditional-expectation branch.
- `stationary-markov-chains-and-ergodic-limits` is published and the required Markov interface was checked; no open body-level claim is made for it.

The exact open page edges, supplier item IDs, required hypotheses and affected local claims are in `batch-10.cross-batch-dependencies.json`. These interface checks do not replace the complete local proofs, but they remain unreviewed cross-batch edges.

## Scoped checks

The LZ77 theorem is fully proved locally and recorded ready; the unavailable primary article is dropped only as a proof source, with the full dissertation treatment and local proof preserved. Proof-layout, source-fetch, dependency, coverage, proof-contract, and Step 1 records are not independent mathematical approval.

## Final scoped checks and run-level blockers

- `node tools/manifest-deps.mjs research/non-ml-math-remaining-81-2026-10-18-batch-10.pages.json`: **35 items, 0 normalized, 0 errors**.
- Scoped `dependencyLevels()` over the batch 10 manifest: **35 items, maximum level 8, 0 errors**. The batch-10 rows remain supplier-first and all within-batch levels match the computed graph.
- `node tools/proof-contract.mjs ...batch-10.proof-contracts.json --strict`: **35/35, 0 errors, 0 warnings**.
- `node tools/proof-layout.mjs` on all explicitly assigned item files: **35 items, 104 steps, 0 defects**. The final changes to the conditional-block and LZ77 proofs also passed their scoped rerun (**2 items, 9 steps, 0 defects**).
- `node tools/coverage-checklist.mjs ...batch-10.coverage.json`: **2 pages, 62 harvested results, 0 errors, 0 warnings**. `source-fetch-check --stamp` verified the new Kontoyiannis dissertation; the final non-stamping check reports **12/13 fetched and 13/13 resolved**, with the one documented drop being the unavailable Wyner–Ziv primary article.
- Scoped Step 1 record audit: **35/35 ready**, all current item/dependency hashes. The three page-level cross-batch edges remain open in the separate dependency input and must be reconciled before page publication.
- The run-wide `item-dependency-levels.mjs check` is still blocked by **102 empty scaffold inventories in other batches**; batch 10 is clean. The run-wide Step 1 audit currently has **548 items, 417 ready, 131 open item records and 102 empty pages**; these are outside this assignment.
- Scheduling-input drift: the generated beta-10 task names hash `7096b1bbc6f2d70796b6d63080bb4b0fc6e781f6a5e4da539963fbb746842903`. At the final audit the shared batch-level file records `9e5da692ac3c41617669af96f41fe518782efb718bff78e3697d85b60d825863`, while recomputing over the final manifests gives `c198d168bc0e726e5ebad625064ab805a49bf97a5d959f16c4d0e30acf206888`; `batch-dependency-levels check` therefore reports stale shared input. The computed batch-10 row remains `dependency_level: 2`, `requires: [5, 8, 9]`. I left the shared level file untouched for its owner to refresh.
