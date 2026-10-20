# Batch 36 — authoring and evidence record

Run: machine-learning-all-101-2026-10-19  
Pair: attention-and-transformer-expressivity  
A page: library/machine-learning/attention-and-transformer-expressivity.md  
B page: library/machine-learning/attention-and-transformer-expressivity-examples.md  
Batch dependency level: 1; prerequisite batch: 31  
Dispatch scheduling input SHA-256: 982af2c63244b1ec607b5996f210b3b6e0ae327f963e8fe1cdf4689e25c19b03

## Scope and plan reconciliation

The complete ML-35 section in research/plan-machine-learning-track.md and the matching page row in research/plan-spec.json agree on the assigned pair, the eight core design claims, fixed-length Yun approximation, Hahn hard/soft limits, examples, and the ML-30 page prerequisite. The A page has 17 items after adding local prerequisite lemmas and definitions needed for complete proofs; the B page has the three planned examples. No plan-spec versus track-design conflict was found, and no plan file was edited. The authoring-direction file applies generally; it has no separate ML-35 amendment.

The dispatched dependency snapshot says batch 36 is level 1 and requires batch 31. The current shared file research/machine-learning-all-101-2026-10-19-batch-dependency-levels.json still gives that same batch row, but its embedded input_sha256 is c50e15a536f4f5705ece38529e7fce7c1a084944aece5c1f2cf9ac4f468f12d4, not the dispatched 982af2c63244b1ec607b5996f210b3b6e0ae327f963e8fe1cdf4689e25c19b03. The file's own SHA-256 is 9dcdc4b9cca9512e9df67543d20b3e352a4dc3183b9880f90b64a6868154cc19. This is an owner scheduling-hash reconciliation issue; the batch row agrees, but the snapshots do not. The shared dependency-level file was not edited.

## Supplier verification and dependency decisions

- The complete current carrier items/def-feedforward-neural-network.md was inspected. Its current ordinary Step-1 record is ready, owner=false, with a closing current-input hash. This is a logical supplier for def-hahn-hard-soft-attention-sequence-model and def-transformer-encoder-decoder-layer.
- The complete carrier items/thm-single-hidden-layer-universal-approximation.md and its proof were inspected. Its current ordinary record is ready, owner=true; the owner's accepted canonical repair is documented in research/machine-learning-all-101-2026-10-19-owner-universality-acceptance.json. That theorem carries Countable Choice and is not used in the fixed-width Yun proof; only the feedforward-network definition is a logical supplier. The page-level ML-30 requirement remains in the manifest.
- The published asymmetric Lovasz local lemma and its finite-event dependency hypotheses were inspected before use. The hard-restriction proof explicitly builds a coordinate-overlap graph and checks the required independence from conjunctions of non-neighbour complements.
- The fixed-width theorem declares Countable Choice because its integrated error uses the library's countably additive Lebesgue measure. Its finite lookup construction uses only finite choices. No unrelated UAT axiom branch is imported.

## Source reading and dispositions

The authoritative source full text was retrieved and inspected; all current source receipts are in research/machine-learning-all-101-2026-10-19-batch-36.coverage.json.

- Vaswani et al., Attention Is All You Need, https://arxiv.org/pdf/1706.03762: §§3.1–3.5, Table 1, and §4 path-length/operation comparison read. It supports the attention and Transformer conventions, algorithm, causal mask, position encoding, and limited dense-attention comparison.
- Dive into Deep Learning, official Chapter 11 pages listed in the coverage file: §§11.3.3, 11.5.1, 11.6.1–11.6.3, and 11.7.1–11.7.5 read in full. This is the independent textbook treatment for the architecture and examples.
- Yun et al., Are Transformers Universal Approximators of Sequence-to-Sequence Functions?, https://arxiv.org/pdf/1912.10077: §2, §§3.1–3.2, Theorems 2–3, Appendix A, B.1–B.6, C.1–C.3, and Appendix D read. Appendix D is experimental setup only and is marked out-of-scope as theorem evidence. The exact expressivity block has no layer normalization and uses a scalar query bias in the proof; the carrier definition now records that bias explicitly. The authored fixed-width argument uses local grid and finite-lookup constructions instead of the separate UAT theorem.
- Hahn, Theoretical Limitations of Self-Attention in Neural Sequence Models, https://aclanthology.org/2020.tacl-1.11.pdf: complete §§3–6 read, including Theorem 1/Corollary 2, Lemma 5, Theorem 6, the complete hard restriction and soft influence/loss arguments, and footnote 4. The source's soft influence display omits the attention-weight perturbation in an intermediate bound; the local proof includes the row-softmax Jacobian and changed-key weight mass.
- Kajitsuka and Sato, Are Transformers with One Layer Self-Attention Using Low-Rank Weight Matrices Universal Approximators?, official ICLR 2024 PDF linked in coverage: Proposition 1 and Appendix A.5 read as a second, independent universality treatment. Its architecture and width assumptions differ; it supports only the qualitative fixed-length universality comparison and is not used to justify the exact Yun constants.
- No URL retrieval failed, no retries were required, and no source was dropped. The PCFG application remains a mathematical owner escalation, not a source-retrieval failure.

## Mathematical scope and unresolved PCFG premise

The plan states the 2DYCK PCFG expansion parameter for all p in (0,1). Each expansion creates two nonterminal children with total probability p, so the Galton–Watson mean is 2p. For p>1/2 there is positive nontermination probability, so the grammar is not a probability law on finite words; at p=1/2 extinction is certain but expected derivation size is infinite. Hahn's finite-mean premise only applies for 0<p<1/2. This source/plan domain mismatch is recorded; the plan was not edited.

The conditional item lem-soft-2dyck-crossentropy-gap-paired-prefixes proves the positive cross-entropy gap from a specified disjoint equal-mass pairing with D_n(E_n)>=P0. The source does not fully define the length-n prefix conditioning or prove that the PCFG supplies that uniform positive mass. The aggregate thm-transformer-formal-language-limits therefore retains the exact conditional dependent claim and states the unresolved application. Proposed local supplier: lem-2dyck-pcfg-prefix-mass-positive on the A page; required content: exact finite-string/prefix law, definition of E_n, and proof of liminf D_n(E_n)>0 under 0<p<1/2. This supplier is not minted because its proof is unresolved. The aggregate item and only consumers depending on that unconditional source application are escalated; the finite-length example now cites the separately proved hard-language result directly.

Hahn's PARITY wording is stronger than the influence argument supports if read as an upper bound for every predictor. The authored theorem states the sharp lower bound on achievable expected loss and exhibits the constant predictor attaining it; it does not assert every fixed predictor has exactly unigram loss.

## Item inventory and dependency levels

The manifest has 17 A-page items and 3 B-page examples. Dependency levels are computed from direct in-run item edges; dependencies on published items do not increase a level.

| Item | Level | Authoring/readiness state |
|---|---:|---|
| def-scaled-dot-product-attention | 0 | ready |
| def-positional-encoding-and-causal-mask | 0 | ready |
| lem-paired-crossentropy-mixture-bound | 0 | ready |
| def-multihead-self-attention | 1 | ready |
| def-hahn-hard-soft-attention-sequence-model | 1 | ready; current ready feedforward supplier verified |
| def-transformer-encoder-decoder-layer | 2 | ready; Vaswani block and distinct no-LN Yun block |
| lem-hard-attention-depth-reduction | 2 | ready; finite-alphabet proof; LLL event graph checked |
| lem-soft-attention-one-symbol-influence | 2 | ready; proof includes softmax-weight perturbation |
| thm-hard-attention-languages | 3 | ready; exact PARITY and 2DYCK recognition refutation |
| thm-soft-attention-parity-chance-limit | 3 | ready; sharp lower bound and constant-predictor attainment |
| alg-transformer-forward-pass | 3 | ready |
| thm-transformer-permutation-equivariance-without-position | 3 | ready; self-reference removed, mask conjugation proof retained |
| lem-soft-2dyck-crossentropy-gap-paired-prefixes | 3 | ready conditional on uniform positive paired-prefix mass |
| thm-transformer-formal-language-limits | 4 | escalated for missing PCFG prefix-mass proof |
| lem-yun-transformer-grid-lookup | 4 | ready; both equivariant and position-tagged finite tables |
| lem-dense-attention-cost-and-path-length | 4 | ready; O(n²d) interaction separated from projections/FFN |
| thm-fixed-width-transformer-lp-universality | 5 | ready; includes explicit Countable Choice premise and compact-domain position branch |
| ex-position-free-vs-position-encoded-token-order | 6 | ready |
| ex-two-token-causal-next-token-mask | 4 | ready |
| ex-fixed-length-vs-unbounded-sequence-limits | 6 | ready; depends on fixed-length theorem, hard limits, and soft PARITY |

## Final validation and run-wide blockers

Final scoped checks pass:

- `proof-layout` on all 20 assigned items: 67 numbered steps, 0 defects.
- Strict proof contracts: 20/20 items, 0 errors and 0 warnings.
- Coverage checklist: 2 pages, 56 harvested results, 0 errors and 0 warnings.
- `source-fetch-check --stamp`: 13/13 sources fetch-verified and resolved, 0 newly stamped, 0 drops.
- The statement-first author audit reports 20 items and 0 errors. A/B page frontmatter inventories match the manifest; both Markdown bodies are empty; 20 items total and under the 100-item cap.
- Scoped dependency recomputation covers all 20 items with no cycles or errors. Carrier `deps` and `dependency_level` values match the manifest; the levels above are the recomputed values. The dependency-inputs artifact records the dispatch scheduling hash conflict described above.
- The ordinary Step-1 records are current for all 20 scoped items: 19 `ready`, 1 `escalated`, all `owner:false`, with no missing or stale records. The escalated item is `thm-transformer-formal-language-limits`; its exact PCFG prefix-law and uniform positive paired-event mass obligations are recorded above. These records are author readiness evidence, not independent approval.

Run-wide gates remain blocked outside this pair. `item-dependency-levels.mjs check` finds many empty inventories in other ML pages and an unrelated dependency cycle plus a level mismatch at `def-sample-covariance-directional-spectral-measure`. `batch-dependency-levels.mjs check` stops on the unrelated compact-YAML parse error at line 22, column 14, in the Martinsson–Tropp source title. Run-wide proof-contract coverage and page-layout checking stop at the empty `distribution-shift-and-domain-adaptation` inventory; the scoped check above independently verifies this pair's inventories and levels. No other pair's files were edited.

The current `.autopilot/machine-learning-all-101-2026-10-19` status, recomputed from disk at 2026-10-18 21:59:41 UTC, remains `running` at stage `1-scaffold`, with 43/101 covered and the existing owner-repair/recertification blocker in `research/machine-learning-all-101-2026-10-19-step1-blockers.json`; 1-scaffold artifact completion is deferred until authoring coverage is complete and writers drain. `git log -5` was checked; latest commit is `50139bdcb6`. The engine state and shared scheduling artifact remain untouched. A/B page bodies remain empty and `page_layout` remains unset for the engine's post-authoring pass.
