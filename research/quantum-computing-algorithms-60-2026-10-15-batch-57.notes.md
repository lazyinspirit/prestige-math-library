# Batch 57 authoring notes

Run: `quantum-computing-algorithms-60-2026-10-15`  
Pair: `qma-verification-and-local-hamiltonian`  
Role: beta  
Assigned scheduling input: `090f86622fc3fd6615af80487294d1cf4d835c1bae0ddc1458834ccaa5bd85af`

## Inventory and placement

The A page has 29 items and the B page has one example. Both pages are below the 100-item cap. Seven carriers are definitions or an algorithm without a proof section; 23 carriers have proof steps and full contracts. The companion example remains on the B page.

The final item dependency levels, computed from current batch carriers and the live supplier manifests, are:

| Level | Items |
|---:|---|
| 0 | `def-qa-33-effective-finite-matrix-encoding`, `lem-qa-33-bernstein-square-root-bound`, `lem-qa-33-near-unitary-polar-correction`, `lem-qa-33-projection-lemma` |
| 7 | `lem-qa-33-normalized-clifford-t-su2-package-dense` |
| 11 | `def-qa-33-k-local-hamiltonian-promise`, `def-qa-33-witness-verifier-interface`, `lem-qa-33-finite-dimensional-unitary-synthesis` |
| 12 | `lem-qa-33-algebraic-term-rationalization`, `lem-qa-33-fixed-arity-local-measurement-synthesis`, `lem-qa-33-uniform-programmed-circuit-interpreter`, `lem-qa-33-witness-acceptance-effect` |
| 13 | `def-qa-33-qma-promise-class` |
| 14 | `alg-qa-33-qma-parallel-majority-amplification`, `def-qa-33-feynman-kitaev-history-hamiltonian`, `def-qa-33-qma-completeness`, `thm-qa-33-pure-witness-suffices` |
| 15 | `lem-qa-33-feynman-propagation-path-gap`, `lem-qa-33-kkr-legal-clock-restriction`, `thm-qa-33-qma-amplification-entangled-witness-soundness`, `lem-qa-33-feynman-input-output-penalties` |
| 16 | `lem-qa-33-kkr-one-qubit-propagation-restriction`, `thm-qa-33-local-hamiltonian-in-qma`, `lem-qa-33-geometric-soundness-bound`, `ex-qa-33-one-qubit-history-energy` (B) |
| 17 | `lem-qa-33-kkr-two-qubit-propagation-restriction`, `lem-qa-33-unary-clock-locality` |
| 18 | `lem-qa-33-kkr-initial-state-restriction`, `thm-qa-33-5-local-hamiltonian-qma-complete` |
| 19 | `thm-qa-33-2-local-hamiltonian-qma-complete` |

The A and B page manifests, item manifest, carrier frontmatter, and A-page item order agree. The A page's assigned page dependency level remains 11 with prerequisite batches 1, 2, 3, 4, 7, 12, and 14.

## Plan and design reconciliation

The beta task says that no design section was found. That line is stale: the current [`qa_r6.md`](quantum-algorithms-planning/sections/qa_r6.md) contains the QA33 design route. I followed the QA33 section and the controlling plan. `plan-spec.json` agrees with the assigned A/B identities and page prerequisites; its empty item list was a pre-authoring placeholder. No other design route was substituted.

The current QC12 Solovay–Kitaev carrier and batch-12 manifest agree on dependency level 9 and dependencies. A prior handoff note claiming a mismatch is stale. The current CNOT/control-target supplier still has no `dependency_level` in its source frontmatter while the batch-8 manifest assigns level 7. The authored levels use the manifest entry, matching the run checker.

The standard Local Hamiltonian encoding is now explicit about input size: it lists all terms and requires the number of qubits to be polynomial in the encoded input length. This makes witness width and the inverse-polynomial verification precision polynomial in input length. The QA33 plan describes the standard explicit encoding but does not separately state this relation. If the owner intended a succinct encoding with binary `n` and no polynomial size bound, the current membership proof does not cover that variant; the owner can reconcile the intended encoding at [`def-qa-33-k-local-hamiltonian-promise`](../items/def-qa-33-k-local-hamiltonian-promise.md).

## Mathematical corrections and prerequisite checks

- The design's geometric overlap estimate cannot be applied to every vector in `ker(H_prop)` by invoking NO soundness directly: that kernel also contains histories with dirty initial ancillas. The local proof decomposes an arbitrary initial state into its clean and dirty parts, uses contraction of the accept map, and proves `p_bad + p_rej >= 1/2` after amplification to soundness `s <= 1/8`. The exact projection loss is `(p_bad+p_rej)/N`, giving the stated legal-clock lower bound `1/(2N^3)`. The necessary penalty spectrum is cited from the history-Hamiltonian definition.
- QC14's base promise-computation model takes a classical basis input and initialized zero ancillas; it does not provide an arbitrary QMA witness. The new witness-aware interface defines the witness embedding and acceptance compression, and its separate lemma proves positivity and the terminal outcome law.
- The input penalty is a sum of dirty-bit projectors. Its expectation is the expected number of dirty bits, not the probability that at least one bit is dirty. The history-energy proof states both quantities and uses the probability only for the lower bound.
- The matrix-to-measurement compiler emits an input-dependent gate list. `lem-qa-33-uniform-programmed-circuit-interpreter` supplies a full-list family generated from unary input length, including the reversible program computation and its finite error bound. Its tolerance is an explicitly polynomial-time computable rational; the zero-template case uses `max(1,P_0)` in the precision denominator.
- Fixed-dimensional synthesis handles `D=1`, zero matrix entries, deterministic pivot ties, `q=1` unconditional gates, `q=1` diagonal phases, controlled Euler blocks, and the whole-circuit global phase. Selector-controlled targets are synthesized as their full block matrices.
- The projection lemma now assumes `S` is nonzero so `lambda_min(H_1|_S)` is defined; it treats `S^perp={0}` separately. The KKR input restriction also handles an empty clean-ancilla set, where the input penalty is zero and causes no projection loss.
- The KKR controlled-phase restriction requires `L>=5`, which puts every clock index `t-3,...,t+3` in range. The 2-local reduction inserts a cancelling controlled-Z pair if needed and pads with exact identity slots.
- Direct and transitive supplier statements were checked for hypotheses, conventions, and exact scope. The cross-batch record lists 22 direct external suppliers and all 12 page prerequisites. Their actual source bodies were inspected; draft status is recorded as draft, with no acceptance inferred. No supplier excerpt remains unresolved.

## Source reading and history

The assigned page has independent full-text treatments, including textbooks and full lecture notes. The exact URLs, locators, supported items, harvest dispositions, retrieval attempts, and fetch stamps are in [`batch-57.coverage.json`](quantum-computing-algorithms-60-2026-10-15-batch-57.coverage.json).

- [de Wolf, *Quantum Computing: Lecture Notes*](https://arxiv.org/pdf/1907.09415), complete 239-page notes, Chapter 14 §§14.1–14.3.2, PDF pp. 115–120. QMA verification, amplification, Local Hamiltonian, histories, and path gap; results are marked included or inline by item in the coverage ledger.
- [Watrous, *Quantum Computational Complexity*](https://arxiv.org/pdf/0804.3401), complete 44-page manuscript, §§V.1–V.3. QMA verifier definitions, error reduction, and Local Hamiltonian; the entangled-witness bound is proved locally.
- [Aharonov–Naveh, *Quantum NP: A Survey*](https://arxiv.org/pdf/quant-ph/0210077), complete 23-page survey, §§2–4. Amplification, history-state soundness, and Local Hamiltonian completeness.
- [Kempe–Kitaev–Regev, *The Complexity of the Local Hamiltonian Problem*](https://arxiv.org/pdf/quant-ph/0406180), complete 30-page paper, §3 Lemma 1 and §5 restrictions 1–4. The KKR terms and constants were checked against the full source text.
- [Childs, *Lecture Notes on Quantum Algorithms*](https://www.cs.umd.edu/~amchilds/qa/qa.pdf), complete 191-page notes, Chapter 2 and Chapter 33, including the unary-clock locality and history route.
- [Watrous, *The Theory of Quantum Information*](https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf), complete 598-page manuscript, §§2.1–2.3 and finite-circuit material for density operators, POVMs, partial trace, and witness effects.
- [Dawson–Nielsen, *The Solovay–Kitaev Algorithm*](https://arxiv.org/pdf/quant-ph/0505030), complete 15-page paper. It is context for the normalized dense gate package, not evidence for the finite-precision bit-cost theorem.
- [Arora–Barak, *Computational Complexity: A Modern Approach*](https://theory.cs.princeton.edu/complexity/book.pdf), complete 489-page author-hosted draft, Chapter 6 §6.1 Theorem 6.7, PDF pp. 120–121 (book pp. 104–105). The Duke course index returned HTTP 403 in web open; an alternative search found the author-hosted Princeton PDF, which was fetched and inspected. The local Boolean tableau supplier provides the complete construction used here.

The added Arora–Barak full-text entry is fetch-verified. The published Boolean-circuit supplier still carries its original Duke URL; it was outside this pair's edit scope. The assigned draft interpreter cites the fetched Princeton author-hosted copy. The final source check reported `10/10` source entries fetch-verified, `0` newly stamped, and `10/10` resolved; there are no dropped or unresolved sources.

## Scoped checks and readiness

- `node tools/proof-layout.mjs items/*qa-33-*.md`: 30 items, 64 steps, 0 defects.
- `node tools/tsx-run.mjs tools/precheck.mts items/*qa-33-*.md`: 23 proof-bearing items, 0 failing.
- `node tools/proof-contract.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-57.proof-contracts.json --strict`: 30/30 items checked, 0 errors, 0 warnings; 116 exact supplier citations and 64 mapped proof steps.
- Scoped `depcheck`: 30 batch items checked; selected item/page and prerequisite-cycle checks pass. The cited-not-in-deps warnings were resolved without introducing a dependency cycle.
- Scoped `rendercheck`: 32 files checked; MathMarkdown, KaTeX, and frontmatter checks pass.
- Batch-local dependency audit: 30/30 frontmatter levels match the assigned manifest graph; A-page order is level-ascending; item/page manifests and library placement match.
- `step1-decisions record`: all 30 items are recorded `ready` with their current direct `deps`, `justified_by`, or `forward_refs` examined. The records are author readiness only and do not imply independent approval.

The full-run `item-dependency-levels check` still reports errors outside batch 57: an empty `quantum-sampling-expectation-and-monte-carlo-examples` scaffold and stale labels on `lem-qa-34-exponential-gram-concentration`, `lem-qa-34-two-sketch-threshold-band-bound`, `thm-qa-34-modfkv-low-rank-approximation`, `thm-qa-34-tang-recommendation-sampler`, `rem-qa-34-dequantization-scope`, and `cex-qa-34-tang-without-sampling-access`. No unrelated files were changed.

`node tools/batch-dependency-levels.mjs check --run quantum-computing-algorithms-60-2026-10-15` reports a stale run-level batch dependency hash after the assigned page manifest was synchronized. That shared scheduling input is owner-controlled and was left unchanged. The owner must refresh it before a full-run dependency-level gate can pass.

The full-run `step1-decisions check` is also blocked while parsing an unrelated draft, [`lem-product-prior-predictive-and-fixed-truth-data-laws-equivalent`](../items/lem-product-prior-predictive-and-fixed-truth-data-laws-equivalent.md): its line 23 reads `verification: {, judge: ...` immediately before a second `verification:` block, which is invalid YAML. The 30 batch-57 records themselves were checked directly and all current hashes are closed; this other item was left untouched.
