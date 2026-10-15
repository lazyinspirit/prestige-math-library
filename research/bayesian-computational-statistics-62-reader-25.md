# Step 3a reader report — batch 25

Run: bayesian-computational-statistics-62  
Batch: 25  
Role: reader

## Opened inventory

The assigned pages and all ten assigned items were read from their current source files. Items were reviewed in dependency order.

| Page | Verdict | Items opened |
|---|---|---|
| variational-inference-and-evidence-lower-bound (A) | Keep; see page verdict below. | def-variational-family-and-elbo; thm-elbo-kl-decomposition; alg-coordinate-ascent-variational-inference; cex-mean-field-variational-inference-underestimates-correlated-gaussian-variance; lem-admissible-product-coordinate-normalizer-is-finite; thm-exact-coordinate-ascent-does-not-decrease-elbo; rem-high-elbo-alone-does-not-certify-posterior-calibration |
| variational-inference-and-evidence-lower-bound-examples (B) | Keep; see page verdict below. | ex-discrete-elbo-equality-at-exact-posterior; ex-variational-candidate-outside-posterior-support; ex-coordinate-update-normalizer-diverges-outside-admissibility |

The direct suppliers needed to check those claims were opened, including the measure, density, product-measure, Tonelli, Fubini, KL, Lebesgue, normal-density, normal-moment, Jensen, monotone-convergence, dominated-convergence, exponential-convexity, and logarithm items cited in the assigned items. In particular, the current in-run supplier thm-kullback-leibler-is-nonnegative from batch 23 was read in full, along with the 28 item statements/definitions cited by its proof contract. Its current raw source hash at split was 6371b45cf21a9e8c72239c683bbcdc19e5bbb3ae042b9188e0574d8d2c8f2fe2, unchanged from the bytes reviewed.

Relevant source passages were checked at Blei, Kucukelbir & McAuliffe, *Variational Inference: A Review for Statisticians*, https://www.cs.columbia.edu/~blei/papers/BleiKucukelbirMcAuliffe2017.pdf: §2.2, equations (11)–(14), gives the ELBO/KL identity; §2.3, Figure 1 and discussion, describes correlated-Gaussian marginal-variance underestimation; §2.4, equations (17)–(18) and Algorithm 1, gives the expected-log coordinate update; §5.4 discusses the limits of mean-field independence. Jordan et al., *An Introduction to Variational Methods for Graphical Models*, https://people.eecs.berkeley.edu/~jordan/papers/variational-intro.pdf, §6.3.1, equations (55)–(57), gives a discrete fully factorized Boltzmann mean-field example. Zheng, Hu & Deng, *Variational Inference II*, https://www.cs.cmu.edu/~epxing/Class/10708-15/notes/10708_scribe_lecture13.pdf, §§2.3.2 and 3.2, derives the Jensen ELBO and expected-log coordinate update. These sources supply context; the exact measure-theoretic conditions and Gaussian calculations are proved locally in the assigned items.

## Edit and evidence

Edited items/def-variational-family-and-elbo.md to make its logarithmic integrands well-defined:

- stated explicitly that a probability density satisfies ∫q dμ = 1;
- extended the logarithm by log 0 = −∞, agreeing with the library natural logarithm on positive inputs;
- recorded that finite evidence and unit density mass make the infinite-value sets null, and allowed arbitrary values on that null complement;
- explicitly set all four weighted terms in the admissibility and ELBO expressions to zero where q = 0, including the absolute-log terms used in admissibility.

The original definition allowed γ = 0 and applied the natural logarithm, whose library definition has domain (0,∞). The assigned example ex-variational-candidate-outside-posterior-support evaluates |log γ| at a point with γ = 0 and q = 1. The previous 0 log 0 = 0 sentence covered the entropy terms but did not define log 0. The added conventions preserve the intended extended-real ELBO and support behavior.

Updated all 13 batch-25 proof-contract citation excerpts whose source is this Definition so they match its current text. No verification.judge record was present on the edited definition. I did not change any item statement, proof, page prose, other batch, or published content.

## Item review

- def-variational-family-and-elbo: normalization, support, induced-measure absolute continuity, admissibility, mean-field definition, and posterior-context caveats are sound after the notation clarification above.
- thm-elbo-kl-decomposition: the density-ratio identity has the correct Q ∥ Π direction; support, normalization, absolute integrability, and nonnegativity are justified. The in-run KL supplier is used only for its probability-measure nonnegativity clause.
- alg-coordinate-ascent-variational-inference: inputs, finite sweep loop, fixed coordinate order, admissibility and normalizer branches, and unavailable-update behavior are specified. No convergence or optimality guarantee is claimed by the procedure.
- cex-mean-field-variational-inference-underestimates-correlated-gaussian-variance: the target has unit marginal variances and correlation ρ; the independent-Gaussian ELBO calculation gives the unique means 0 and variances 1−ρ² < 1 for 0<|ρ|<1.
- lem-admissible-product-coordinate-normalizer-is-finite: the factor-log integrability argument establishes finite entropy of the complementary product; clipped-log Jensen followed by monotone/dominated convergence gives 0<c_j≤e^H Z<∞. The lemma explicitly leaves admissibility of the replacement separate.
- thm-exact-coordinate-ascent-does-not-decrease-elbo: under the algorithm's finite-expectation, normalizer, and admissibility conditions, the coordinate-relative KL comparison proves an attained maximum and nondecrease. The Nm bound counts entered update blocks under the stated return assumption and does not claim an integral-evaluation cost.
- rem-high-elbo-alone-does-not-certify-posterior-calibration: positive rescaling leaves Q and Π unchanged while shifting the ELBO by any real amount; the remark distinguishes this from separately proved calibration.
- ex-discrete-elbo-equality-at-exact-posterior: both finite ELBO calculations and the strict comparison are correct.
- ex-variational-candidate-outside-posterior-support: the candidate fails support at the second point; its absolute log term is infinite under the repaired extended-log convention.
- ex-coordinate-update-normalizer-diverges-outside-admissibility: the target has finite positive evidence, the product density is supported, its expected log target is zero with finite absolute expectation, and its entropy integral diverges. The example correctly attributes failure to inadmissibility.

## Unedited finding and blocker

The proof contract for ex-coordinate-update-normalizer-diverges-outside-admissibility contains a stale hash-bound iff-template review. Its template_review.item_sha256 is adae0a767c215e978a8f7113aca313884b1b831780cfdb73ae45aff75d4b16a0, while the current item hash is ecfb3710caa50c607f43d689992a629604380c8f60e8e2ef48418e2c5224aec8. The review rationale also says steps 4.1 and 5.1 establish inadmissibility and the infinite normalizer; the current proof has those claims in steps 3.2 and 4.1. The contract derivations themselves list the current 3.1, 3.2, and 4.1 steps. I left the old hash-bound review intact; it requires owner refresh or withdrawal before it can cover the current carrier. This is the unedited finding returned in the findings JSON.

The edited definition's prior iff-template review hashes are also no longer bound to its reader-post bytes: they contain 38225f63da3e241400dd877082a8bf4694e743cac66153db9fccb316980dae1d, while the reader-post raw item hash is a85cee3dec042f17ca48a543052663b29d0074d41b99d3affd4eba7fb5f0e91a. I did not reissue those review records because that would be self-certification; this is recorded as a reader-edit handoff for the owner. The repair and changed carrier are in the disk diff, not in the findings array.

## Page verdicts

- **A page — keep.** Its summary preserves the hypotheses on finite positive evidence and admissible q, gives the reverse-KL direction and AC condition, limits coordinate updates to checked cases, and avoids convergence, calibration, or generic downstream-error guarantees. Its finite-call statement matches the theorem's call-count model.
- **B page — keep.** The summary accurately distinguishes the exact finite example, the out-of-support candidate, and the supported but inadmissible divergent-normalizer construction; it makes no generic convergence claim.

## Validation and limits

- node tools/tsx-run.mjs tools/reflow.mts items/def-variational-family-and-elbo.md — unchanged.
- node tools/tsx-run.mjs tools/precheck.mts items/def-variational-family-and-elbo.md — 0 proof sections checked; no failures (definition).
- node tools/proof-layout.mjs items/def-variational-family-and-elbo.md — 1 item, 0 steps, 0 defects.

I reviewed the exact assigned carriers and the supplier statements needed for their claims. The report does not certify the batch, update author/owner review records, or replace the pending owner action on the stale contract review.
