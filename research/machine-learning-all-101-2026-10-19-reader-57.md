# Step 3a reader report — batch 57

Run: `machine-learning-all-101-2026-10-19`  
Batch: `57`  
Reviewer: `reader-57`

## Opened inventory

Assigned pages:

- `library/machine-learning/reconstruction-and-masked-autoencoders.md` (`reconstruction-and-masked-autoencoders`)
- `library/machine-learning/reconstruction-and-masked-autoencoders-examples.md` (`reconstruction-and-masked-autoencoders-examples`)

Assigned items, reviewed in dependency order:

- `items/def-reconstruction-autoencoder.md` (`def-reconstruction-autoencoder`)
- `items/alg-masked-autoencoder-pretraining.md` (`alg-masked-autoencoder-pretraining`)
- `items/ex-reconstruction-objective-shortcut.md` (`ex-reconstruction-objective-shortcut`)

Direct dependency items opened to check the definitions and example:

- `items/def-feedforward-neural-network.md` (`def-feedforward-neural-network`)
- `items/def-random-element-and-real-random-variable.md` (`def-random-element-and-real-random-variable`)
- `items/def-measurable-function-between-measurable-spaces.md` (`def-measurable-function-between-measurable-spaces`)
- `items/def-measurable-space.md` (`def-measurable-space`)
- `items/def-sigma-algebra.md` (`def-sigma-algebra`)
- `items/def-probability-measure.md` (`def-probability-measure`)
- `items/def-expectation-of-a-nonnegative-or-integrable-random-variable.md` (`def-expectation-of-a-nonnegative-or-integrable-random-variable`)
- `items/def-expectation-on-a-finite-probability-space.md` (`def-expectation-on-a-finite-probability-space`)

The batch manifest and reader brief were read. The run's active status was checked; at `2026-10-19T12:12:41.207Z`, batch 57 was still missing from stage 3a-read and the reported blockers were for batches 51 and 36.

## Edits and evidence

1. In `items/def-reconstruction-autoencoder.md:56`, the normalized-target population risk required `P(X in D_norm)=1` but left the loss undefined on the null complement. The statement now requires the event to be measurable, evaluates the displayed loss on that event, and assigns zero off it. This supplies a genuine integrand; any other measurable extension agrees almost surely and has the same integral. The finite empirical domain remains restricted to training images in `D_norm`.

2. In `items/alg-masked-autoencoder-pretraining.md:29`, the algorithm now explicitly requires `n,M,q>=1`. This makes the training-index draw nonempty and the patch dimensions positive; the condition `1<=k<M` further forces `M>=2`, so each admissible mask has visible and masked patches. The remaining sampling conditions, update schedule, gradient admissibility, and `J=0` return were already specified.

3. Updated `research/machine-learning-all-101-2026-10-19-batch-57.proof-contracts.json` to record the normalized-target measurable-event and null-extension boundary, align the algorithm's empty-update boundary with its explicit `n>=1` condition, and replace the example's F1 source quote with the repaired normalized-target and masked-loss text. The repaired items had no `verification.judge` entries, so no judge record was removed.

4. No edit was needed to `items/ex-reconstruction-objective-shortcut.md`. For each patch, the mean and standard deviation are respectively `(1/4,1/4)` and `(3/4,1/4)`; both normalized targets equal `(-1,1)`. Each of the four image-mask outcomes has one masked patch and squared error zero, so the finite expectation is zero. A constant code yields the same deterministic classifier output on the two different labels. Zero incoming weights and fixed output biases realize the constant maps under the feedforward-network definition.

5. Reviewed both TikZ diagrams. The feedforward graph's arrows follow input-to-hidden-to-output evaluation, with a linear output node. The MAE diagram correctly shows visible-only encoder input, restoration with mask tokens, decoder predictions, and loss/targets only at missing positions. Neither diagram asserts a proof step, and no additional diagram was required.

### Source checks

- He et al., [*Masked Autoencoders Are Scalable Vision Learners*](https://arxiv.org/abs/2111.06377), §3 (masking, visible-only encoder, mask-token decoder, and pixel reconstruction; paper lines 49–71); §4, Baseline and Table 1 (84.9%, 50-epoch fine-tuning, and ablation defaults; lines 77–131); Appendix A.1, Tables 8–9 (pretraining optimizer settings and 50-epoch ViT-L fine-tuning; lines 298–337). These passages support the item’s MAE description and the reported experiment details.
- Goodfellow, Bengio, and Courville, [*Deep Learning*, §14.5, pp. 507–508](https://www.deeplearningbook.org/contents/autoencoders.html), lines 1238–1503: corrupted inputs are mapped to clean reconstruction targets, with the expectation over the training distribution and corruption process. This supports the denoising description.
- Vincent et al., [“Extracting and Composing Robust Features with Denoising Autoencoders,” §2.3, equation (5)](https://www.cs.toronto.edu/~larocheh/publications/icml-2008-denoising-autoencoders.pdf), PDF page 2, lines 195–252: a stochastic corruption is applied to an input and training minimizes reconstruction error against the uncorrupted input. This supports the denoising risk and update description.

The precise empirical claim in the example matches He et al.: Table 1 reports 84.9% fine-tuning accuracy under its default configuration, the main text specifies 50 fine-tuning epochs, and Appendix A.1 reports the listed pretraining settings. No citation in the assigned items was found inaccurate.

## Defects not editable in this assignment

The following published dependency statements contain inline wiki links. The statement/definition rule requires plain mathematical wording in the complete statement and those links in an immediately following `Definition references` section. Each assigned consumer named below reaches the published item through its dependency closure. These are fatal editorial defects; no mathematical insufficiency is asserted about the linked definitions.

- `def-sigma-algebra`, `Definition`, opening sentence (`items/def-sigma-algebra.md:34`): `algebra of subsets ... ([[def-algebra-of-subsets]])`. Move the link to `Definition references` and leave the mathematical term in the definition. Assigned consumer: `def-reconstruction-autoencoder`.
- `def-measurable-space`, `Definition`, opening sentence (`items/def-measurable-space.md:33`): `sigma-algebra ... ([[def-sigma-algebra]])`. Move the link to `Definition references`. Assigned consumer: `def-reconstruction-autoencoder`.
- `def-probability-measure`, `Definition`, opening sentence (`items/def-probability-measure.md:31`): links to `def-measure` and `def-measure-space` interrupt the definition. Move both links to `Definition references`. Assigned consumer: `def-reconstruction-autoencoder`.
- `def-measurable-function-between-measurable-spaces`, `Definition`, opening sentence (`items/def-measurable-function-between-measurable-spaces.md:29`): the parenthetical `[[def-measurable-space]]` interrupts the statement. Move it to `Definition references`. Assigned consumer: `def-reconstruction-autoencoder`.
- `def-random-element-and-real-random-variable`, `Definition`, first paragraph (`items/def-random-element-and-real-random-variable.md:32,35`): links to `def-measurable-function-between-measurable-spaces` and `def-borel-sigma-algebra` interrupt the statement. Move both links to `Definition references`. Assigned consumer: `def-reconstruction-autoencoder`.
- `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `Definition`, integrable-variable bullet (`items/def-expectation-of-a-nonnegative-or-integrable-random-variable.md:34`): the link to `def-integrable-real-and-complex-functions-and-their-integrals` interrupts the definition. Move it to `Definition references`. Assigned consumer: `def-reconstruction-autoencoder`.

These six defects are also recorded in the returned findings JSON. No other confirmed uneditable defect was found in the assigned items, pages, or dependency statements opened.

## Page verdicts

- `reconstruction-and-masked-autoencoders`: pass. The page is YAML frontmatter only, retains its item list, requirements, draft status, and `page_layout: compact-v1`, and has no summary body. Its assigned items were reviewed and the definition and algorithm repairs are recorded above.
- `reconstruction-and-masked-autoencoders-examples`: pass. The page is YAML frontmatter only, retains its example item, requirement on the companion A page, draft status, and `page_layout: compact-v1`, and has no summary body.

## Validation and blocker

- `node tools/tsx-run.mjs tools/reflow.mts items/def-reconstruction-autoencoder.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-reconstruction-autoencoder.md`: 0 checked, 0 failing.
- `node tools/tsx-run.mjs tools/reflow.mts items/alg-masked-autoencoder-pretraining.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/alg-masked-autoencoder-pretraining.md`: 0 checked, 0 failing.
- `node tools/proof-layout.mjs items/def-reconstruction-autoencoder.md items/alg-masked-autoencoder-pretraining.md`: 2 items, 0 steps, 0 defects.
- Batch 57 blocker: none. The active run status observed at review start listed unrelated blockers for batches 51 and 36.

Coverage note: all assigned pages/items, their direct dependencies listed in the batch manifest, and the cited source passages needed for the claims above were reviewed. This review did not independently re-prove the full transitive foundations of the published measure, integration, finite-sum, or finite-probability definitions. The returned findings are limited to the inline-link defects directly observed in opened published dependencies.
