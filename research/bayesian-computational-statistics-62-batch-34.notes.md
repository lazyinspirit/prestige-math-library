# Batch 34 authoring notes — Gibbs sampling and scan schemes

## Inventory and dependency order

The assigned pair is BCS-31, pages gibbs-sampling-and-scan-schemes (A) and gibbs-sampling-and-scan-schemes-examples (B). The A-page inventory contains 13 items and the B-page inventory contains 3 examples. Their in-run item levels are:

| Level | Items |
|---:|---|
| 0 | def-gibbs-full-conditional-kernel, def-gibbs-reversibility-for-a-markov-kernel, def-finite-markov-chain-reducible |
| 1 | cor-gibbs-density-formula-supplies-full-conditional-kernels, alg-gibbs-block-update |
| 2 | cor-bivariate-normal-full-conditional-kernels, lem-gibbs-block-update-is-a-probability-kernel, alg-gibbs-scan-schemes, ex-single-site-gibbs-reducible-on-disconnected-support |
| 3 | lem-gibbs-block-refresh-is-conditionally-independent, lem-gibbs-block-update-is-reversible-and-invariant, lem-gibbs-scan-schemes-are-probability-kernels, ex-bivariate-normal-gibbs-full-conditionals |
| 4 | thm-random-scan-gibbs-is-reversible-and-invariant, thm-systematic-gibbs-sweep-preserves-target |
| 5 | ex-systematic-gibbs-sweep-is-not-reversible |

The item-level calculation was recomputed from the current manifest using the dependencyLevels function in tools/item-dependency-levels.mjs. The Bivariate-normal example now depends on the local A-page corollary rather than an item housed only on another B examples page, eliminating the repository B-leaf-content violation. The A-page batch manifest retains the assigned page requirement on BCS-30; the BCS-29 prerequisite is transitive through the BCS-30 page.

## Plan/spec comparison

The BCS-31 design says Requires: BCS-29, BCS-30; thm-conditional-density-formula; def-conditional-independence-given-a-sigma-algebra. plan-spec.json lists BCS-30 as the direct A-page requirement. This is an effective-closure representation difference, not a missing graph edge: the BCS-30 page in batch 33 itself requires the BCS-29 page in batch 32. The batch-34 page manifest therefore preserves the current direct BCS-30 requirement. The two named mathematical suppliers are represented as exact item dependencies where used.

The plan's Roberts–Rosenthal locator says section 2.5. In the inspected complete author-hosted 2004 paper, Gibbs sampling is section 2.3 and composition is section 2.2. The locators in batch-34.coverage.json record the actual section headings and PDF pages; no plan file was changed.

## Initial cross-pair supplier observation

The following absence report is historical and is superseded by the current
supplier-body reconciliation at the end of these notes. It records the initial
author handoff, not the state observed after the focused owner intake.

At handoff, neither planned supplier page has an active library body:

- general-state-mcmc-kernels-and-reversibility (batch 32, BCS-29) is required by the design and transitively by the BCS-30 page. Its planned interface is a general probability kernel, invariant probability, and reversibility as symmetry of the two-time transition flow. The actual definition/proof bodies are unavailable for comparison. Affected claims: local general-kernel reversibility definition, block-update detailed balance/invariance, random-scan detailed balance, and systematic composition conventions.
- metropolis-hastings-algorithm-and-invariance (batch 33, BCS-30) is the direct page requirement. Its actual algorithm and invariance/reversibility proofs are unavailable for comparison. BCS-31 does not derive its Gibbs claims from Metropolis–Hastings; the page-level prerequisite remains unresolved as declared navigation/context.

Both page edges are recorded open in bayesian-computational-statistics-62-batch-34.cross-batch-dependencies.json. These are authoring-context blockers, not invented supplier claims. No missing BCS-29/30 statement, proof excerpt, or acceptance is quoted. Before readiness, reconcile the local interface definitions against both actual supplier bodies and confirm the required general-state hypotheses.

The required published item interfaces were read in full: thm-conditional-density-formula (including its zero/infinite-density-fibre and AC branches) and def-conditional-independence-given-a-sigma-algebra (including its inherited AC requirement). The published B-page Gaussian conditional example was also inspected in full, then removed as a direct B-page dependency; the local A-page corollary now derives the conditional kernels from the positive-definite multivariate-normal density and the general conditional-density result. The conditional-density corollary uses only the supplier's choice-free event identities; the refresh-independence lemma explicitly assumes AC for the library's conditional-expectation class convention. The BCS-59 supplier-interface resolution was also read; its MSF/SME interfaces do not supply a Gibbs prerequisite for this pair.

## Mathematical scope and source use

The general block-update statements assume a supplied everywhere probability kernel satisfying the conditional event identity; they do not assert existence on arbitrary measurable spaces. The density corollary gives the normalized density kernel only where its marginal density is finite and positive, and uses a supplied probability filler on exceptional fibres. The block reversibility proof is local and works directly with finite-product kernels and the conditional-law identity.

Random scan is treated for arbitrary fixed finite weights w_j >= 0 summing to one; uniform scan is the special case w_j=1/m. The scan result proves invariance/reversibility only. Systematic scan's single-update chain is described by its phase-indexed kernels and is generally time-inhomogeneous; its full-sweep chain is homogeneous and invariant, but need not be reversible. The diagonal-support example proves reducibility from explicit closed singleton classes. No irreducibility, ergodicity, mixing-rate, uniqueness, or CLT claim is made.

The source coverage records the complete relevant reasoning inspected in Owen, Chapter 12, pp. 49–58, and Roberts–Rosenthal, §§2.2–2.3 (PDF pp. 6–8). Owen's §§12.2–12.3 and 12.6–12.10 are outside the approved BCS-31 examples and are not used. The additional high-correlation performance discussion is deferred to the later MCMC mixing material; it is not used as a convergence claim here.

## Current supplier-body reconciliation

The owner-focused intake `research/bayesian-computational-statistics-62-owner-gibbs-intake.md` showed that the earlier BCS-29/30 absent-page report no longer described the disk state. I independently re-read the current BCS-29 A page, `def-general-state-reversibility-by-symmetric-flow-measure`, and the full proof of `thm-general-state-reversibility-implies-invariance`. The joint-flow definition and rectangle detailed-balance convention used here agree: both are probability measures on the product sigma-algebra, and the rectangle form extends by finite-measure uniqueness. The two BCS-29 readiness files currently say `ready`, but their current-input hashes could not be revalidated in this pass.

The current BCS-30 A page, `alg-metropolis-hastings-kernel`, and the full proof of `thm-metropolis-hastings-kernel-is-reversible-and-invariant` are present and were inspected. Their MH result assumes AC and a standard-Borel space and establishes symmetric accepted flow and target invariance. Batch 34 imports no BCS-30 logical supplier: this remains the declared page prerequisite only. The BCS-30 page-level handoff is not recorded ready here, and no MH acceptance or approval is inferred.

A fresh `loadStep3`/`step1Decision` freshness check for the upstream records could not run: parsing `research/bayesian-computational-statistics-62-batch-33.proof-contracts.json` fails at line 31, column 40 on an invalid JSON escape in a theorem-source excerpt. This is outside batch 34 and is left for the owner. All 16 batch-34 Step 1 decision files remain `escalated`; none was overwritten or resolved in this author pass.

The finite-support example is stated on the ambient product `{0,1}^2` and then restricts the component kernels to the invariant diagonal support. The conditional-independence lemma now derives its bounded-function claim from rectangle tests and uniform simple approximation. The Gaussian nonreversibility example now records the needed intermediate means, second moments, and cross-product integrability explicitly.


## Owner final boundary reconciliation

The exact earlier notes and cross-batch rows are archived at research/bayesian-computational-statistics-62-owner-gibbs-readiness-before/. Focused cycle2 evidence research/bayesian-computational-statistics-62-owner-gibbs-final-boundary.json covers all16 current items after the Gibbs author drained. The earlier absent-page reasons are resolved: both required pages and bodies exist, all actual Gibbs suppliers are available, and the current Gibbs proofs contain no logical MH or batch32 premise. The BCS29/30 page requirements remain. MH33 is still draft/in construction; no MH proof acceptance or supplier-completion gate waiver is claimed. Owner readiness below binds actual current Gibbs inputs, not a whole-item audit or publication. Any malformed live MH contract remains its own producer obligation and cannot become accepted through this boundary resolution.
