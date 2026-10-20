# Batch 57 — authoring and evidence record

Run: machine-learning-all-101-2026-10-19  
Pair: reconstruction-and-masked-autoencoders  
A page: reconstruction-and-masked-autoencoders  
B page: reconstruction-and-masked-autoencoders-examples  
A carrier: library/machine-learning/reconstruction-and-masked-autoencoders.md  
B carrier: library/machine-learning/reconstruction-and-masked-autoencoders-examples.md  
Batch dependency level: 1; prerequisite batches: 31  
Dependency-level evidence input: 0f51d82992717979b2440d603a702752236be21895618c13d16254270e62b035

## Scope, instructions, and plan reconciliation

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, briefs/beta-scaffold.md, the assigned batch task, the complete ML-52 design in research/plan-machine-learning-track.md, research/plan-spec.json, research/machine-learning-all-101-2026-10-19-batch-57.pages.json, the dependency-level artifact, the generated dependency-order task, and the current owner-authoring direction.

The ML-52 plan section is now at line 420; the generated beta task still points to line 407. This is a stale locator only. The current plan prose and the matching plan-spec page pair agree on the three proposed items, mask law, visible-only encoder, decoder mask tokens, masked-patch MSE, original-pixel default target, separately defined normalized-pixel variant, warning against a mask-independent full-image unbiased-estimator claim, and empirical-only representation/transfer scope. No substantive plan/spec conflict was found. The active owner direction adds no ML-52-specific exception and requires actual supplier inspection without treating drafting as acceptance.

The current plan-spec entries have empty items arrays, so this batch-owned scaffold manifest records the controlling proposed inventory and computes item dependency levels before carrier authoring:

| Item | Home | Direct dependencies | In-run level |
|---|---|---|---:|
| def-reconstruction-autoencoder | A | def-feedforward-neural-network, def-random-element-and-real-random-variable, def-measurable-function-between-measurable-spaces, def-measurable-space, def-sigma-algebra, def-probability-measure, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-expectation-on-a-finite-probability-space | 1 |
| alg-masked-autoencoder-pretraining | A | def-reconstruction-autoencoder, def-feedforward-neural-network | 2 |
| ex-reconstruction-objective-shortcut | B | def-reconstruction-autoencoder, alg-masked-autoencoder-pretraining, def-feedforward-neural-network, def-expectation-on-a-finite-probability-space | 3 |

The computed levels follow the actual in-run edges: batch 31's def-feedforward-neural-network is level 0; the definition is therefore level 1, the algorithm level 2, and its example consumer level 3. All other direct suppliers are published and do not add an in-run level. The graph is acyclic.

## Source reading and disposition

- Kaiming He et al., *Masked Autoencoders Are Scalable Vision Learners*, full-text PDF https://arxiv.org/pdf/2111.06377; §§3.1–3.3 (uniform mask sampling, visible-only encoder, mask-token decoder, masked-pixel MSE, normalized-pixel target), §4/Table 1 (ImageNet-1K setting and benchmark context), Appendix A.1/Table 8 (pretraining configuration), and §6 (authors describe semantic interpretation as a hypothesis). Supports the definition, algorithm, and example; included.
- Ian Goodfellow, Yoshua Bengio, and Aaron Courville, *Deep Learning*, full book chapter https://www.deeplearningbook.org/contents/autoencoders.html; §14.5, printed pp. 507–508 (conditional corruption law, clean reconstruction target, and expected denoising objective). Supports the definition, algorithm, and the example's autoencoder context; included.
- Pascal Vincent et al., *Extracting and Composing Robust Features with Denoising Autoencoders*, full-text PDF https://www.cs.toronto.edu/~larocheh/publications/icml-2008-denoising-autoencoders.pdf; §§2.2–2.3, equations (1), (3), and (5) (reconstruction objective, corruption distribution, and clean target). Supports the definition, algorithm, and the example's autoencoder context; included.
- The three full-text bodies were inspected in the web reader. After the B-page coverage was completed, `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-57.coverage.json --stamp --timeout-sec 20` recorded 6/6 fetch-verified sources, 2 newly stamped, 6/6 resolved, and zero documented drops. Final rerun after all edits: 6/6 fetch-verified, 0 newly stamped, 6/6 resolved. No retrieval failure or source-drop decision occurred.
- All source retrievals succeeded. No source has a `source_resolution` entry because there was no retrieval failure to resolve; no source was marked dropped.

## Item checkpoints

### def-reconstruction-autoencoder — drafted

States population clean reconstruction and arbitrary joint-law denoising risks as nonnegative measurable expectations, together with their finite empirical specializations. Defines the source MAE uniform-mask objective and finite empirical objective, the raw and patchwise normalized targets, and the positive-standard-deviation boundary. The normalized population objective is defined only for image laws supported almost surely on images whose every patch has positive standard deviation; the finite empirical version requires this for each training image. The corruption is represented directly by a joint distribution of clean and corrupted images, so no conditional-distribution existence theorem is used. It records that predictions depend on the sampled mask and that no equality with the separate full-image risk is asserted.

Actual suppliers inspected:

- items/def-feedforward-neural-network.md is a current-run draft definition with deps: []. Its body defines a finite acyclic feedforward graph and layered MLP evaluation. The MAE plan uses this only for encoder/decoder map notation; no universality conclusion is used.
- items/def-expectation-on-a-finite-probability-space.md is published and defines finite expectation as the weighted sum. Its cited definition and finite random-variable/finite-sum interfaces were inspected; the objective here uses only a finite uniform law.
- items/def-random-element-and-real-random-variable.md, items/def-measurable-function-between-measurable-spaces.md, items/def-measurable-space.md, items/def-sigma-algebra.md, and items/def-probability-measure.md were inspected for the population-risk domains and measurability assumptions. The sigma-algebra supplier gives closure under complements and countable unions; the measurable-space supplier gives the underlying set and sigma-algebra. items/def-expectation-of-a-nonnegative-or-integrable-random-variable.md supplies the extended integral for the nonnegative loss; only that clause is used, so the risk may be infinite. These are definitions, with no local theorem or axiom use.

Source path/locators: He et al. §§3.1–3.3; Goodfellow et al. §14.5, pp. 507–508; Vincent et al. §§2.2–2.3, equations (1), (3), (5). Supported items: this definition, the masked-pretraining algorithm, and the example's autoencoder context. All harvested results are retained as included; all six coverage records carry successful full-text fetch stamps.

### alg-masked-autoencoder-pretraining — drafted

Defines one finite stochastic gradient-update procedure: each update samples a training image and a fixed-size visible subset independently, encodes only visible patch tokens, restores mask tokens at missing positions, decodes all positions, computes MSE only on masked patches against the selected raw or normalized target, then applies a supplied total optimizer update map. The normalized target precondition is explicit: every patch of every training image must have positive standard deviation. Plain SGD is an explicit special case; no convergence or semantic guarantee is asserted. The TikZ schematic depicts this data flow and is explanatory only.

Direct dependencies: def-reconstruction-autoencoder (level 1) supplies the objective, target and patch conventions; def-feedforward-neural-network (level 0, batch 31) supplies the finite network notation. This gives item level 2. Source path/locators: He et al. §§3.1–3.3 and Appendix A.1/Table 8; Goodfellow et al. §14.5, pp. 507–508; Vincent et al. §2.3, equation (5). The He et al. pretraining recipe inspected here is AdamW, base learning rate 1.5e-4, weight decay 0.05, momentum (0.9, 0.95), batch size 4096, cosine schedule, 40 warmup epochs, and RandomResizedCrop; these are reported settings, not optimizer guarantees.

### ex-reconstruction-objective-shortcut — drafted

The finite example has two two-pixel patches, uses one visible patch, and chooses each of two images with weight 1/2. The normalized target sends both patch values (0, 1/2) and (1/2, 1) to (-1, 1); a constant encoder and decoder therefore give zero masked objective for every image-mask pair while the code cannot separate the two labels. The verification computes both patch means and standard deviations, uses the finite expectation as a weighted sum, then checks label indistinguishability. The constant maps are realizable by finite feedforward maps with zero incoming weights and fixed output biases.

Direct dependencies: def-reconstruction-autoencoder, alg-masked-autoencoder-pretraining, def-feedforward-neural-network, and def-expectation-on-a-finite-probability-space; maximum in-run supplier level is 2, so this item's level is 3. Source context: He et al. §3.3 for normalized-pixel targets, §4/Table 1 for the ViT-L/16 ImageNet-1K result and default masking/model settings, and Appendix A.1/Tables 8–9 for pretraining and fine-tuning conditions. The 84.9% top-1 validation result is recorded as one paper-reported empirical outcome, not a theorem. The finite verification is computed explicitly; no registered finite-smoke check applies to this objective.

## Scoped checks and readiness handoff

- node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-57.coverage.json --stamp --timeout-sec 20: pass, 6/6 records fetch-verified, 2 newly stamped, 0 drops.
- node tools/coverage-checklist.mjs research/machine-learning-all-101-2026-10-19-batch-57.coverage.json --json: pass, 2 pages, 11 harvested results, 0 errors, 0 warnings.
- Scoped precheck via node tools/tsx-run.mjs tools/precheck.mts ... --json: pass, 3 files, 1 proof checked, 0 failed; definitions and algorithm are not applicable.
- Scoped rendercheck over the 3 items and 2 pages: pass, 5 files, 0 errors, 0 warnings.
- Scoped depcheck through an explicit item selection: pass, 3 item checks, both page checks, 286 dependency-closure item checks and 172 dependency-closure page checks, 0 errors and 0 warnings.
- node tools/content-policy.mjs research/machine-learning-all-101-2026-10-19-batch-57.pages.json --json: pass, 3 items, 0 errors, 0 warnings.
- node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-57.proof-contracts.json --strict: pass, 3/3 contracts, 0 errors, 0 warnings.
- node tools/proof-layout.mjs items/def-reconstruction-autoencoder.md items/alg-masked-autoencoder-pretraining.md items/ex-reconstruction-objective-shortcut.md: pass, 3 items, 3 proof steps, 0 defects.
- Earlier check iterations found and repaired the issues before these final passes: precheck requested that the last argument use phase step 2.1, which was adopted; rendercheck misread math delimiters in TikZ node labels, so the labels were changed to plain text; the first proof-contract pass found unanchored boundary evidence and stale excerpts, so boundaries were tied to Statement/step text and quotes were regenerated from current supplier sections; the first coverage checklist rejected unsupported conference-paper kind labels and a one-source B page, so source kinds were corrected and the B-page textbook and paper treatments were recorded and fetched. The final precheck, rendercheck, proof-contract, and coverage-checklist results above are current.
- The required whole-run `node tools/item-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` currently exits 1 while parsing the other-owner manifest `research/machine-learning-all-101-2026-10-19-batch-79.pages.json` (bad escaped character at line 206, column 65). A local recomputation over the 100 parseable manifests (200 pages) including batch 31 computes this batch's levels as 1, 2, and 3, with no dependency-level error for any owned item. The malformed batch-79 manifest was not edited.
- `node tools/batch-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` returns `Duplicate item undefined`. The current batch-37 manifest has a page `neural-operators-and-physics-informed-learning` whose inventory entries are strings (including `def-discretization-invariant-operator-family`, `def-neural-operator`, and `def-neural-operator-activation-classes`), which the readiness/batch snapshot loader expects as item objects. The shared scheduling artifact is not edited; owner/native recomputation is required after manifest reconciliation.

The required Step-1 readiness recorder was attempted for each of the three items with decision `ready` and the exact final direct dependencies. Each attempt returned `Duplicate item undefined` before writing a record. The blocker is the malformed other-owner batch-37 inventory described above; the ordinary readiness loader fails before it can calculate item hashes. No readiness record was written. This is an operational hold; neither batch 37 nor batch 79 was changed, and no temporary run root, scheduling projection, copied receipt, or owner flag was used.

## Unresolved obligations and next action

- The exact current feedforward definition is present and its relevant interface was checked. It remains a draft supplier, so this record claims interface inspection only, not independent review or owner acceptance.
- The owner must reconcile the batch-37 string-inventory blocker and the malformed batch-79 JSON after their writers drain, then rerun the whole-run dependency checks and readiness recorder and refresh the shared batch-dependency artifact. The mathematical authoring, source evidence, contracts, placement, and scoped local checks for batch 57 are complete.
- The final live autopilot status was checked: the run is in 1-scaffold at 39/101 coverage with no worker in flight. It retains the owner repair/recertification hold and reports an invalid-unit-prerequisites hold with ENOENT for `items/def-fourier-neural-operator-layer.md`. These are outside batch 57; no engine state, shared plan, published content, or verdict is edited by this batch.
