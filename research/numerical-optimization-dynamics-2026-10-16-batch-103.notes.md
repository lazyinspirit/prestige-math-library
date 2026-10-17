# Batch 103 authoring notes

Run: `numerical-optimization-dynamics-2026-10-16`  
Pair: STO3, `simulation-gradient-estimation-and-simultaneous-perturbation`  
Role: beta; assigned batch dependency level 8; prerequisite batches 12, 64, 96.

## Controlling direction and plan comparison

The owner authoring direction and the complete STO3 contract in `research/numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md` control. The dispatch's first plan locator, L1483, is blank; L1497 is the STO1 convergence paragraph, not the STO3 heading. The assigned STO3 section starts at L1489 and its full scope/proof design continues through the preserved design and contract appendix. I read the full section and appendix.

The track-plan and `plan-spec.json` agree on the A/B page IDs, order 2490/2491, category, and requirements DIF1, STO1, and DIF3. `plan-spec.json` has an empty pre-authoring item list; the dispatched batch manifest supplies the actual item inventory recorded below. Its instruction that STO3 owns the derivative-interchange proof is fulfilled by the local pathwise and discrete-adjoint items in this batch.

The dispatch scheduling-input hash is `e12d6fc991fbebf33f8271ceee8e4b6401e6c6666b3d63bb32ffa4ff4e0c3473`; `batch-dependency-levels.json` records `04a57edb982e756b2bdf7b54936383b64b17fbc7a6e2709dddb29d8083b46327`. These hashes differ. The shared batch-103 row still matches the dispatch at level 8 with prerequisite batches `[12, 64, 96]`; the shared schedule was not changed.

## Inventory, dependencies and item levels

The pair has 12 A-page items and 4 B-page examples (16 total, below the 100-item cap). Direct dependencies and item levels are synchronized between every carrier and `batch-103.pages.json`; the graph is acyclic.

- Level 0 (2): `cex-uniform-payoff-convergence-does-not-imply-gradient-convergence`; `def-simulation-gradient-objective-and-payoff-oracle`.
- Level 1 (4): `alg-two-evaluation-spsa-gradient-estimator`; `def-coupled-simulation-finite-difference-estimator`; `def-pathwise-simulation-gradient-estimator`; `thm-likelihood-ratio-gradient-identity-on-fixed-support`.
- Level 2 (6): `prop-coupled-simulation-difference-variance-identity`; `thm-pathwise-simulation-gradient-is-unbiased-under-envelope`; `thm-spsa-gradient-bias-is-second-order`; `thm-spsa-gradient-has-inverse-step-variance-bound`; `ex-moving-support-score-estimator-misses-boundary-term`; `ex-two-call-spsa-biological-simulator`.
- Level 3 (3): `thm-spsa-stochastic-approximation-has-stationary-limit-points`; `ex-coupled-differences-reduce-variance`; `ex-gaussian-reparameterization-and-score-gradient`.
- Level 4 (1): `thm-discrete-sde-adjoint-gradient-interchange`.

The SDE item is level 4 because it directly consumes the now-present batch-96 `thm-discrete-adjoint-gradient-recursion` at level 3. Its samplewise adjoint identity is kept distinct from the derivative-envelope and (L^1) limit interchanges.

## Cross-batch supplier checks

All three page requirements were checked against actual current supplier bodies, with consumer-side hypotheses and exact excerpts in `batch-103.cross-batch-dependencies.json`:

- DIF1: batch 12's central-difference theorem requires a $C^3$ scalar function on a neighborhood of the full segment and a bound on the third derivative. The SPSA bias proof applies it to $g(t)=f(\theta+t\Delta)$, using the stated directional third-derivative bound and reciprocal moments.
- STO1: batch 64's Robbins–Siegmund lemma assumes AC, a nonnegative adapted integrable Lyapunov process, predictable nonnegative integrable decrements, and deterministic summable errors. The SPSA application establishes those hypotheses with $a_k=0$, $b_k=\alpha_k\|\nabla f(x_k)\|^2$, and $r_k=GB\alpha_kc_k^2+LK\alpha_k^2/c_k^2$. Its stochastic-gradient definition supplies the conditional vector second-moment identity.
- DIF3: the batch-96 finite-step objective and adjoint theorem carriers are present. I read their statements and proofs, plus the reverse-mode algorithm/theorem and the finite-program prerequisites used by the proof. For $N\ge1$, freezing the simulation input gives the supplier's deterministic finite $C^1$ graph. The consumer handles $N=0$ directly. Joint measurability, payoff integrability, the common derivative envelope and $L^1$ adjoint-integrand convergence remain explicit consumer hypotheses. No rate or gradient limit is inferred from weak payoff convergence.

These are interface checks only. They do not accept or approve the supplier drafts.

## Sources and retrieval history

The A-page coverage ledger contains 17 harvested results, each disposed against an assigned item or a local proof. It uses three independently retrieved full-text treatments, including the monograph and chapter-length survey treatment:

- Glasserman, *Monte Carlo Methods in Financial Engineering*: full 614-page scanned PDF fetched; read the relevant indexed full-text arguments at §7.2.2, printed pp. 393–396, and §7.3.1, printed pp. 401–405. The PDF has no usable text layer; the record does not claim that its full text was extracted.
- Fu, “Stochastic Gradient Estimation,” complete 30-page handbook chapter preprint: read the relevant pathwise, score/fixed-support, moving-support, SPSA Proposition 3.1 and common-random-number sections.
- Spall, “An Overview of the Simultaneous Perturbation Method,” complete 11-page author-hosted overview: read the two-call procedure, perturbation moment conditions and gain-sequence discussion.

`source-fetch-check --stamp` newly stamped the three active PDFs: Glasserman (13,843,090 bytes; 614 pages), Fu (303,248 bytes; 30 pages), and Spall (319,967 bytes; 11 pages). The original 1992 Spall IEEE article remained inaccessible after its initial failure plus five recovery retries. `coverage.json` preserves the dropped-source record, searches and per-item alternative arguments/dependencies; historical attempt times and exact query strings were not retained, so the record says so rather than inventing them. The claims remain defined or fully proved locally. The 2020 Mohamed survey was not used as proof support; the design's navigation-only treatment was respected.

## Scoped checks and readiness

- `author-check.mts RUN 103`: pass. Precheck: 12 proof-bearing items, 0 failures; rendercheck: all 18 item/page files; content policy: 16 items, 0 errors/warnings; strict proof contracts: 16/16, 0 errors/warnings. Result: `research/numerical-optimization-dynamics-2026-10-16-author-check-103.json`.
- `proof-layout.mjs` on the 16 assigned items: pass, 42 steps, 0 defects.
- Strict proof-contract check: pass, 16/16 items, 68 exact supplier citations and 42 mapped steps.
- Coverage checklist with destination check: pass, 17 harvested results, 0 errors/warnings.
- Source-fetch check: 3/4 sources have full-text stamps; all 4 are resolved, with 1 validated drop.
- Focused `depcheck` using the 16 assigned IDs: pass; 0 errors/warnings over the transitive closure (1,077 items and 356 pages).
- `manifest-deps.mjs`: pass, 16 items, no missing dependency arrays.
- Run-wide `item-dependency-levels.mjs check`: pass, 2,007 items across 214 pages, maximum level 16.
- Cross-batch exact-excerpt audit: all 8 excerpts matched the current supplier bodies; all recorded `used_in` steps exist.
- Step 1 decision records: all 16 assigned items are `ready`, with no `--owner` records. Readiness records are not independent proof approval.

At the latest recomputed autopilot status, the overall run remains in `1-scaffold` at 93/107 covered, with other batches still outstanding and the existing owner repair/recertification hold. Batch 103 is complete; no engine state, verdict, shared plan, published content, or other pair files were edited.
