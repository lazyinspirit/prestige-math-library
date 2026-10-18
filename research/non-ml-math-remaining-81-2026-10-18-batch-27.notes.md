# Batch 27 authoring notes

## Plan and design

- No pair-specific design section was found or governed this batch. This is recorded as required by the assignment; the pair was scaffolded from full-text sources.
- The assignment and research/plan-spec.json agree on the A/B identities, information-theory category, order 2546/2547, and the A-page prerequisite prefix-codes-and-finite-lossless-coding.
- The plan summary controls scope: finite layered dynamic programming and exact HMM sequence MAP, including unreachable-state and zero-evidence boundaries. The B-page summary requires worked exact computations and counterexamples and names no later A-page prerequisite. No plan/design conflict was found.
- The A page has 8 items and the B page has 4 examples/counterexamples, below the 100-item cap.

## Item inventory and internal dependency order

research/non-ml-math-remaining-81-2026-10-18-batch-27.pages.json records each item's deps, justified_by, and computed dependency_level. Levels count only in-batch logical deps; justified_by remains the definition well-definedness relation and is not reversed into deps.

| Level | Item | In-batch deps |
|---:|---|---|
| 0 | def-finite-layered-trellis | none |
| 0 | def-finite-hidden-markov-model-for-sequence-decoding | none; justified_by lem-finite-hmm-joint-law-normalizes |
| 1 | lem-finite-trellis-prefix-score-recurrence | def-finite-layered-trellis |
| 1 | lem-finite-hmm-joint-law-normalizes | def-finite-hidden-markov-model-for-sequence-decoding |
| 2 | alg-viterbi-max-product-on-finite-trellis | trellis definition; prefix recurrence |
| 3 | thm-viterbi-finite-trellis-is-optimal | trellis definition; prefix recurrence; trellis algorithm |
| 3 | alg-hmm-viterbi-sequence-map | HMM definition; trellis definition; trellis algorithm |
| 4 | thm-hmm-viterbi-is-sequence-map | HMM definition; normalization lemma; trellis optimality theorem; HMM algorithm |
| 1 | cex-hmm-zero-evidence-has-no-posterior-map | HMM definition |
| 1 | cex-hmm-marginal-modes-are-not-sequence-map | HMM definition |
| 4 | ex-finite-trellis-viterbi-tie-and-unreachable-state | trellis definition; trellis algorithm; trellis optimality theorem |
| 5 | ex-hmm-viterbi-exact-sequence-map | HMM definition; HMM algorithm; HMM sequence-MAP theorem |

The scoped item-dependency-levels calculation matches all 12 labels. The proofs and examples use finite sets, finite sums/products, and supplied finite orders only; no choice axiom is used. Zero HMM transitions and emissions are retained as valid boundary cases.

## Cross-batch prerequisites and supplier checks

- The dispatched scheduling input is 8ef5197111cd7fe6e5f51723d594c7e3b569b7e17c45722c4d6fc6142a7e9d07; its supplied graph places batch 27 at level 2 with prerequisite batch 8.
- The current page carrier library/information-theory/prefix-codes-and-finite-lossless-coding.md exists and is draft. The current batch-8 A manifest has 18 draft items. I inspected the page summary and the actual current statements/arguments for def-finite-discrete-source-and-blocks, def-binary-source-code-and-extension, def-binary-prefix-code, lem-prefix-codes-are-uniquely-decodable, thm-mcmillan-inequality-for-finite-binary-codes, and thm-binary-kraft-criterion-for-finite-lengths.
- The prefix-code route assumes a finite binary source with full support, nonempty codewords, and the stated prefix/unique-decodability conventions. None of those results or hypotheses is used by a batch-27 statement, fact, or proof. In particular, full support cannot be silently transferred to the HMM: zero transition and emission probabilities are essential to the zero-evidence boundary.
- The current prefix-code A page also requires finite-alphabet-entropy-and-divergence (batch 4, currently draft) and kolmogorov-complexity-and-algorithmic-randomness (published). Its current item thm-binary-kraft-criterion-for-finite-lengths depends on thm-kraft-inequality from the published Kolmogorov page; this transitive route is not used by batch 27. The planned transitive page route is recorded in batch-27.cross-batch-dependencies.json.
- No batch-8 item ID is added to this batch's logical deps: the plan declares only a page-level reading prerequisite and no item-level hypothesis. The actual batch-8 page is still draft, so the page-level prerequisite remains open for owner reconciliation. The intended disposition for all 12 items is escalated; no dependent claim is omitted or weakened.
- I also read the published ex-finite-hidden-markov-filtering-and-smoothing. It concerns filtering/smoothing, has different dependencies, and inherits AC for conditional-kernel existence; it is not a logical supplier for finite sequence-MAP decoding and is not cited.

## Sources and retrieval history

The A page has two independent, full-text lecture-note treatments:

- Manolis Kellis, MIT 6.096 Lecture 7, Gene Finding and HMMs, complete 69-page PDF. Inspected PDF pp. 6–7 and 20–25, including the HMM parameterization, path factorization, sequence-decoding objective, Viterbi recurrence derivation, traceback, complexity, and the distinction between sequence and posterior decoding.
- Stanford CS262 Lecture 7, Hidden Markov Models, complete 26-page PDF. Inspected PDF pp. 2, 16, and 19–21 for the max-product recurrence, HMM parameters, and single-sequence decoding. Pair-HMM alignment material was recorded as out of scope.

Both full-text URLs are in the source-coverage evidence, with locators, supported item IDs, retrieval/read evidence, and fetch_verified stamps from node tools/source-fetch-check.mjs --coverage research/non-ml-math-remaining-81-2026-10-18-batch-27.source-coverage.json --stamp (2/2 sources fetched and stamped).

Search/retrieval history: I initially fetched the Cornell-hosted Rabiner 1989 HMM tutorial PDF (2.21 MB), but MuPDF extracted only blank page separators from its 30 pages, so I did not cite or claim to read its argument. Search queries and outcomes were:

1. “David MacKay Information Theory Inference Learning Algorithms full text Viterbi algorithm PDF” — located the full online book, but the web reader timed out on its large PDF; it was not needed after the lecture-note alternatives succeeded.
2. “Rabiner 1989 tutorial hidden Markov models Viterbi algorithm full text PDF” — located the Cornell-hosted full PDF; download succeeded, text extraction yielded only blank separators.
3. “site:stanford.edu Viterbi trellis dynamic programming lecture notes HMM MAP sequence decoding pdf” — located Stanford CS262 Lecture 7, a full 26-page PDF; fetched, text-extracted, and read.
4. “Viterbi algorithm trellis finite-state Markov source decoding full lecture notes PDF” — located MIT OpenCourseWare Viterbi lecture material.
5. “site:cs.cornell.edu/courses/cs481 Rabiner 1989 hidden Markov model pdf” — reconfirmed the Cornell full PDF.
6. “site:ece.ucsb.edu/Faculty/Rabiner Tutorial on HMM and applications pdf Viterbi” — found the UCSB Rabiner reprint index as an alternative mirror.
7. “hidden Markov model Viterbi algorithm full lecture notes university PDF zero probability sequence MAP” — located full university lecture notes, including the MIT HMM lecture.
8. “Viterbi algorithm book chapter hidden Markov models full pdf tutorial lecture notes university” — returned additional HMM lecture and book candidates; the MIT and Stanford full lecture notes were sufficient.

I stopped recovery once two independent full-text alternatives had been retrieved and inspected. No source is marked dropped or owner-escalated, and no unsupported source excerpt is quoted.

The generic trellis recurrence, correctness, normalization, and exact examples are proved/calculated locally; citations document source provenance and do not replace those arguments. No registered finite_smoke check applies to this pair; contracts leave finite_smoke empty rather than claiming an automated finite-check pass. The exact finite examples are worked directly in their Verification sections.

## Diagrams

The trellis example draws layers as columns, allowed transitions as arrows, and edge scores as labels; the dashed state has no incoming edge. The HMM example draws the initial weights and transition probabilities, with emission laws stated in the text. The complete proofs use the explicit edge/probability lists and do not rely on the drawings.

## Scoped checks

| Check | Result |
|---|---|
| Source fetch stamp | 2/2 sources fetched and stamped; final no-network check verifies 2/2 with 0 documented drops. |
| Scoped item dependency levels | 12 items, maximum level 5, no cycles or label mismatches. |
| Precheck | 8 proof-bearing items checked, 8 pass. |
| Strict proof contracts | 12/12 items checked, 0 errors and 0 warnings. |
| Content policy | Batch-27 manifest scope: 12 items, 0 errors and 0 warnings. |
| Dependency check | 12 selected items, both assigned pages and their cycle checks, 0 errors and 0 warnings. |
| Render check | 12 item carriers and 2 pages, 0 errors and 0 warnings. |
| Proof layout | 12 items, 18 numbered steps, 0 defects. |

The run-wide proof-contract-coverage command is not batch-scoped and failed on the unrelated missing carrier def-finite-alphabet-stationary-source (listed in batch 10's manifest). The run-wide batch-dependency-levels check and step1-decisions record are blocked by the duplicate item owner recorded below; no workaround or owner override was used. The dispatched batch level 2 remains recorded, but its current full-run input hash could not be reverified; after resolving the duplicate, the owner should recompute the run-level graph and confirm the current batch-27 level.

## Current owner-side blockers

- Run-wide batch-dependency-levels.mjs check cannot currently compute the graph: the same item ID, lem-it-quantum-relative-entropy-support-regularization, appears in both batch 21 (quantum-information-measures) and batch 22 (quantum-relative-entropy-data-processing-and-strong-subadditivity). This is outside batch 27 and is left for the owner.
- Run-wide proof-contract-coverage cannot close its frontier because items/def-finite-alphabet-stationary-source.md is absent, although the ID is present in batch 10's manifest. This is outside batch 27 and is left for the owner; the batch-27 proof contract itself passes strict validation.
- The required step1-decisions record attempt for def-finite-layered-trellis was refused before writing because loadStep3 found the same batch-21/batch-22 duplicate item. Therefore no Step 1 decision record was written for any batch-27 item; the owner must resolve the shared manifest collision before the 12 escalations can be recorded through the required tool.
