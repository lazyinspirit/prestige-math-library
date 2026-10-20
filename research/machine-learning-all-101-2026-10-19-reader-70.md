# Reader report — batch 70

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Scope: batch `70`

## Opened inventory

Assigned pages:

- `library/machine-learning/multimodal-contrastive-alignment-and-transfer.md`
- `library/machine-learning/multimodal-contrastive-alignment-and-transfer-examples.md`

Assigned items, reviewed in dependency order:

1. `items/def-symmetric-image-text-contrastive-loss.md`
2. `items/alg-zero-shot-prompt-classification.md`
3. `items/ex-prompt-and-distribution-sensitive-transfer.md`

Direct item dependencies opened before their assigned consumers:

- `items/def-real-exponential-function-and-e.md` (published)
- `items/cor-exponential-is-a-bijection-onto-positive-reals.md` (published)
- `items/def-natural-logarithm.md` (published; depends on the exponential bijection)
- `items/def-feedforward-neural-network.md` (draft in-run supplier)

The two required pages in the assigned A-page frontmatter were also opened:

- `library/machine-learning/distribution-shift-and-domain-adaptation.md`
- `library/machine-learning/feedforward-networks-and-universal-approximation.md`

Workflow and review context opened: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/reader.md`, the batch-70 page manifest, `research/machine-learning-all-101-2026-10-19-batch-70.dependency-inputs.json`, `research/machine-learning-all-101-2026-10-19-batch-70.cross-batch-dependencies.json`, `research/machine-learning-all-101-2026-10-19-batch-70.proof-contracts.json`, and `research/machine-learning-all-101-2026-10-19-batch-70.notes.md`. The manifest, contracts, dependencies, and notes were treated as evidence rather than as verdicts.

## Independent mathematical and source review

The symmetric loss has the stated row and column softmax denominators, uses the matched diagonal labels in both directions, and is defined under its nonzero-embedding hypotheses. The logits, probabilities, loss, and distinction between index matching and semantic compatibility are consistent. Its matrix diagram labels image rows and text columns correctly and marks exactly the diagonal as matched.

The zero-shot procedure specifies finite nonempty class and template lists, encoder inputs, nonzero conditions, normalization, prompt averaging, scoring, softmax probabilities, and deterministic least-index tie breaking. It makes no accuracy or transfer guarantee. The optional feedforward-network interface is used only as one possible encoder realization, not as a universal approximation or architecture claim. The supplier’s network diagram agrees with its edge and evaluation convention.

The finite calculations in the example check out: the first prompt-averaged prototype has score $s/\sqrt 2$, the other class has score $4s/5$, individual-prompt retrieval selects the first prompt, and the alternate wording changes the class-prototype prediction. In the second construction both image embeddings are $e_1$, so the classifier predicts $A$ on both; the stated source and target errors are $1/4$ and $3/4$. The semantic-pair similarities are $1$ and $0$ as stated. The vector diagram matches the coordinates and is expressly schematic.

I checked the primary source [Radford et al., *Learning Transferable Visual Models From Natural Language Supervision*](https://arxiv.org/pdf/2103.00020): §2.3 and Figure 3 for the symmetric batch objective and formula; §2.5 for the 32 training epochs and additional high-resolution epoch; §§3.1.2 and 3.1.4 for zero-shot scoring and prompt ensembling; §3.1.5 for the 16-of-27 comparison; §3.3 for the seven natural shifts, robustness-gap result, dataset-specific zero-shot classifiers, and shared-correlation caveat; §5 for the overlap procedure, reported rates, detector-recall limit, and Overlap/Clean distribution confound; and §6 for the benchmark co-adaptation and task limitations. These sections support the example’s study-specific wording and do not support a general transfer guarantee. I also checked Leshno et al., §2, cited by the feedforward definition; it explicitly defines a univariate activation as $\sigma:\mathbb R\to\mathbb R$, resolving the domain convention used by the supplier.

## Edit and validation

In `ex-prompt-and-distribution-sensitive-transfer`, I added the necessary hypothesis $x_0\ne x_1$ and made the fixed input-to-label assignment explicit. Without distinct inputs, the source and target laws need not have different input marginals, so the claimed input-frequency shift would not follow. Verification step 2.2 now computes the two input marginal masses as well as the risk values. The example’s proof contract was updated for derivation `derive-2-2` and its degenerate-case evidence.

Validation after the edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/ex-prompt-and-distribution-sensitive-transfer.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-prompt-and-distribution-sensitive-transfer.md` — passed, 1 checked and 0 failing.
- `node tools/proof-layout.mjs items/ex-prompt-and-distribution-sensitive-transfer.md` — passed, 7 steps and 0 defects.

No `verification.judge` record was present on the edited item. No other item or page was edited.

## Uneditable defects

1. `def-real-exponential-function-and-e`, `## Definition`, opening paragraph: several wikilinks occur inside the complete definition, including links to the convergence lemma, factorial/natural-number/power/series definitions, and the power-series definition. The schema requires these links after the complete Definition in an immediately following `## Definition references` section. This published dependency was not edited. The assigned consumer route is `def-symmetric-image-text-contrastive-loss`.
2. `def-natural-logarithm`, `## Definition`, opening paragraph: the definition embeds a wikilink to `cor-exponential-is-a-bijection-onto-positive-reals` inside the formulation and has no immediately following `## Definition references` section. The schema requires moving the link after the complete definition while preserving its logical dependency. This published dependency was not edited. The assigned consumer route is `def-symmetric-image-text-contrastive-loss`.

Both defects are editorial `ill-formed` findings; the mathematical content remains readable. No confirmed defect was found in the in-run feedforward dependency.

## Page verdicts

- `multimodal-contrastive-alignment-and-transfer`: passes the frontmatter-only presentation rule. Its item inventory and `requires` entries match the batch manifest; the body is empty.
- `multimodal-contrastive-alignment-and-transfer-examples`: passes the frontmatter-only presentation rule. Its example inventory and A-page prerequisite match the batch manifest; the body is empty.

No page summary or missing diagram was found. The loss, network, and example diagrams were checked against their text and conventions; no diagram repair was needed.

## Blockers and live-run context

No batch-70 mathematical blocker remains after the local repair. The recomputed autopilot status at handoff still showed batch 70 missing from 3a-read and a run-level 3a-collect blocker because `collect-57` had failed three times. The active batch-70 dependency-input artifact also records `post_authoring_recompute_required: true` for the shared scheduling projection before a later native dispatch. These are outside this reader’s authorized repair scope; no run state or shared scheduling artifact was changed.
