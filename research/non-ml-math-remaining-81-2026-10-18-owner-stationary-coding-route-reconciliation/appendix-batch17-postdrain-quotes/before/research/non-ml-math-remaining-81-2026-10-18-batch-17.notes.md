# Batch 17 — Lossy Source Coding with Side Information

Run: `non-ml-math-remaining-81-2026-10-18`  
Assigned pair: `lossy-source-coding-with-side-information` and its examples page  
Scheduling input: `5a33420802d205819fb53313f09249ad06a915b85dc01bc0885836b79eb91012`  
Batch dependency level: 5; prerequisite batches: 11, 13, and 16.

## Plan and scope reconciliation

No pair-specific design section was found. The registered `research/plan-spec.json` IT18 summary governs this scaffold: prove finite-alphabet memoryless Wyner–Ziv with decoder-only side information and the finite auxiliary bound; distinguish that exact single-encoder theorem from the Berger–Tung multiterminal inner bound.

The broader IT18 paragraph in `research/plan-information-theory-track.md` additionally proposes (i) a sufficient no-rate-loss criterion for encoder/decoder side information and (ii) the exact two-scalar Gaussian quadratic two-encoder region. Neither extra claim appears in the registered page summary. I recorded both discrepancies here and in the source harvest; no uncommissioned claim was added or weakened. The cost/Gaussian page named in `requires` is present as a current draft page, but no batch-17 item proof consumes a Gaussian theorem. Owner scope reconciliation remains appropriate if the broader track prose is intended to enlarge IT18.

The A page has 11 items and the B page has 3 examples, below the 100-item page cap. The manifest follows item dependencies in ascending level. Current item levels are: level 0 (1), level 1 (1), level 2 (2), level 3 (1), level 4 (2), level 5 (1), level 6 (1), level 7 (2), and level 8 (3). The only internal suppliers are the local typicality/type-count/covering/Markov/packing chain, the two model definitions, the Wyner–Ziv cardinality and continuity lemmas, and the two coding theorems. The item graph is acyclic.

## Supplier interface checks

The actual rate-distortion, distributed-source-coding, and cost/Gaussian page carriers required by the A page are all present. I read the current relevant item bodies and proofs before recording the interfaces. Batch 11 supplies the finite bounded single-letter distortion and normalized additive block convention. Batch 16 supplies the finite IID vector-source convention, support-restricted joint typicality and its probability bound, the lossless code interface, and the exact finite-IID Slepian–Wolf theorem. Their visible bodies remain drafts; `verified` in the cross-batch file means interface compatibility only, not acceptance.

The actual batch-4 finite-information definitions and identities are also used by several proof items. I inspected their current definitions/proofs, including finite mutual information, conditional entropy, conditional mutual information, the entropy chain rule, conditional-information identities, KL nonnegativity, data processing, and the nats convention. Out-of-run suppliers `def-qa-35-finite-probability-entropy-and-stochastic-matrices`, `thm-heine-borel-rn`, and `thm-extreme-value-metric` are present and were read; they do not raise run-local item levels. The full list of declared cross-batch item edges and page edges is in `batch-17.cross-batch-dependencies.json`.

## Mathematical scope and proof route

All alphabets are finite. The page uses support-restricted relative empirical typicality, natural logarithms and nats, bounded distortion, expected normalized additive distortion, deterministic fixed-length encoders/decoders, and decoder-only noncausal side information for Wyner–Ziv. It proves type-class cardinality, codebook covering and the selected-word law, conditional-type Markov typicality, and a finite random-bin packing bound before the two coding theorems use them.

The Wyner–Ziv converse single-letterizes conditional mutual information and takes an explicit distortion-continuity limit. Achievability uses a finite minimizing auxiliary, independent marginal codebooks, covering, selected-word Markov typicality, independent binning, packing, bounded distortion, and a finite deterministic realization argument. The Berger–Tung result proves only the finite-alphabet achievable subset inequalities for product test channels; it does not claim general multiterminal exactness. Time sharing is established by block concatenation. The examples compare the no-side-information definition, the zero-distortion conditional-entropy endpoint, and the identity-auxiliary Slepian–Wolf special case.

No choice axiom is used in these arguments. Random ensembles are finite and deterministic good codebooks are selected from finite listings. All zero-probability letters are handled by support restrictions or positive-mass conditional sums. The proofs do not rely on coding diagrams.

## Source retrieval and harvest

Four independent full-text treatments were read: the complete 10-page Wyner–Ziv paper; the relevant full El Gamal–Kim Lecture 12/13 and Appendix B arguments; Barros’s complete Chapter 4 §4.2.1 proof and Chapter 2 §2.2.3 Markov lemma; and the cited Cover–Thomas sections, including the full §15.9 converse and its stated achievability outline. The source coverage records the URL, exact locator, reading extent, supported item IDs, and a disposition for every harvested result. It includes 30 harvested results and has no out-of-scope claim without a reason.

The C&T PDF text opener returned a payload-size failure before a direct full-PDF retrieval succeeded. The TUM browser open timed out before a direct full-PDF retrieval succeeded; the actual 168-page local TUM PDF was extracted and inspected (1,221,546 bytes, SHA-256 prefix `e4b0782f0ade8a58`). In the later `source-fetch-check --stamp` run, the TUM URL returned a 1,556-character HTML body in four retries. The successful earlier direct-PDF retrieval and its exact local-file stamp are preserved in the source coverage; no source was dropped. A subsequent check-mode `source-fetch-check` verifies all four records from their recorded full-text stamps. The original TUM paper is still available locally for the cited proof sections.

## Evidence and readiness

The proof contracts cover all 11 proof-bearing items with exact supplier excerpts, actual numbered steps and inputs, and all standard boundary dispositions. Definition items have `proof: not-applicable`. The A/B page carriers, item carriers, manifest inventory, coverage harvest, source-fetch evidence, proof contracts, and cross-batch inputs are maintained together. Completion and readiness records do not certify acceptance or independent mathematical review.

The active Autopilot run still reports the pre-existing plan parse blocker. Its status and transitions are owned by `tools/autopilot/`; no run state or shared plan was edited here. The repository also contains unrelated batch dependency and duplicate-item defects; only the scoped batch-17 evidence is changed.

## Final scoped checks and global blockers

Batch-17 checks pass: `proof-layout` reports 11 items, 41 steps, and 0 defects; the normative precheck passes 11/11; `rendercheck` passes all 16 changed item/page files with no warnings; strict proof contracts pass 11/11 with no warnings; the source harvest checklist reports 30 results and 0 errors/warnings; and source-fetch check mode reports 4/4 sources verified. The direct batch-17 dependency comparison finds no manifest/frontmatter mismatches, cycles, or level mismatches. The 14 Step 1 item records are `ready`; these are authoring records and not acceptance. The required Step 1 check cannot finish because the run snapshot rejects the unrelated root item `thm-it-dmc-uniform-quadratic-capacity-decay` as a noncanonical root identity.

The run-wide dependency gates remain blocked outside this assignment. `item-dependency-levels.mjs check` reports empty inventories in unrelated pages and a dependency cycle/duplicate ownership involving `lem-3-manifold-boundary-kernel-is-lagrangian`, plus many level mismatches outside batch 17; none of its diagnostics names a batch-17 item. `batch-dependency-levels.mjs check` cannot parse six unrelated batch-19 item frontmatters whose unquoted Polyanskiy–Wu source titles contain a colon: `lem-finite-joint-iid-strong-typicality`, `lem-finite-conditional-codebook-covering`, `lem-finite-conditional-typicality-packing`, `lem-finite-conditional-channel-mutual-information-concave-input-law`, `thm-real-gaussian-multicast-noisy-network-coding-cut-dependent-gap`, and `lem-real-gaussian-multiple-access-random-coding-region`. The run-wide proof-contract coverage gate also stops at the unrelated empty inventory `finite-blocklength-and-reliability`; the batch-17 strict contract gate itself passes.

The active Autopilot status remains in `1-scaffold` (67/81 covered, nothing running). Its current blockers are the existing plan JSON parse error at line 129 and an unrelated supplier record `lem-it-finite-superadditive-sequence-limit` whose `deps` is not an ID array. No shared plans, verdicts, or engine state were edited.
