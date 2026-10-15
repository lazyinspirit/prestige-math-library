# Batch 5 Step 3a adjudication

Run: `bayesian-computational-statistics-62`. Group: `batch-5`.

Scope: three touched examples, no page obligations, no reader or refuter findings. Reviewed the scope, dependency-order task, reader report/findings and `refute-5.json`. No historical-byte uncertainty is reported by these artifacts.

## Completed in dependency order

1. `def-posterior-evidence-normalizer-and-fiberwise-update`: no decision owed. Reviewed the current Definition and all five cited direct dependencies. The fixed-fiber measurable integral is defined for extended nonnegative likelihoods; normalization excludes zero and infinity. Empty, zero and unit cases are consistent. No conditional-law or joint-measurability claim is made. Risk review complete in the owning contract.

2. `prop-fiberwise-posterior-propriety-iff-finite-positive-evidence`: no decision owed. Reviewed both proof steps, the current indefinite-integral theorem (including its proof) and probability definition. Positive finite scaling preserves a measure, and total mass cZ=1 proves both directions with zero and infinity excluded. No sigma-finiteness or choice is needed. Risk review complete.

3. `ex-flat-prior-normal-mean-proper-posterior`: no decision owed. Reviewed all six steps and all 21 direct prerequisite statements/definitions. The product uses the product Lebesgue sigma-algebra, not its completion; coordinate densities are product measurable and Tonelli supplies product normalization and rectangle probabilities. The completed square, positive Gaussian normalizer, affine derivatives and Borel restriction to the normal pushforward are correct. AC supplies the stated countable-choice premises. n=1 works; n=0 gives infinite evidence and zero variance is excluded. Checked BDA3 §§2.5, 2.8, printed pp. 40–42, 51–52, from the downloaded official PDF. Risk review complete; no defect.

4. `ex-improper-beta-zero-zero-endpoint-divergence`: reviewed_no_defect, audit_enrichment. Reviewed all three steps and all 14 direct supplier statements/definitions. Each continuous section on the open interval is measurable by inverse images of opens. The reciprocal Archimedean argument gives the finite-mass exhaustion. The dyadic intervals and reflected intervals have length 2^(-j-1), prior mass at least 1/2, and endpoint likelihood at least 2^(-n); finite disjoint unions have arbitrarily large weighted mass. Both endpoint divergences follow, including n=1. BDA3 §2.8, printed p.53 (PDF p.63), states the matching Beta(0,0) endpoint warning. Reader additions are explicit citations and elementary interface justifications, with no changed mathematical claim or substantial prerequisite gap. The pre/post hash records show the carrier/contract and dependency manifest changed; the current item bytes exactly match post. Retain the enrichment. Risk review complete; no defect row warranted.

5. `ex-prior-predictive-null-fiber`: reviewed_no_defect, audit_enrichment. Read both verification steps and all three direct suppliers, including the full current dominated-kernel Bayes theorem/proof. On the specified finite power-set spaces the displayed density is jointly measurable and normalized at each parameter; counting measure is sigma-finite. The evidence vector is (1/2,1/2,0), all numerators at 2 vanish, and the theorem's filler is the prior on a marginal-null event. No quotient or unique posterior value is asserted at that event. Reader additions spell out the conventional finite structures and directly determined density; retain them. Pre/post item and contract hashes differ, the manifest hash is unchanged, and current item bytes exactly match post. Risk review complete; no defect row warranted.

6. `ex-valid-finite-evidence-and-normalized-update`: reviewed_no_defect, audit_enrichment. Read the Example, both verification steps and both direct suppliers. Prior and sampling probabilities sum to one, the two joint masses at y=1 are each 1/6, evidence is 1/3 and posterior masses are each 1/2. Explicit power-set sigma-algebras clarify the conventional finite setup without correcting a false calculation or changing the mathematical claim. Retain this enrichment. Pre/post item and contract hashes differ, the manifest hash is unchanged, and current item bytes exactly match post. Risk review complete; no defect row warranted.

## Dispositions and historical evidence

All six current item raw SHA256 hashes equal the respective post-reader snapshot entries; the three untouched item hashes are also unchanged from pre. The scope identifies exactly the three enrichments reviewed above. Reader/refuter report no findings to close. The three touched decisions use `reviewed_no_defect` with `change_kind: audit_enrichment`, empty defect IDs and confidence 1 for the completed retained additions. These elementary setup/citation enrichments do not warrant manufactured defects or repair ledger rows. This is not a current-content-only resolution of missing historical evidence: the supplied pre/post fingerprints and contemporaneous reader description are the comparison evidence; no byte-level historical diff is claimed. No item was edited by this adjudicator, and no Statement or Definition was changed during adjudication.

## Sources and prerequisite limits

- [Bayes Rules!, chapter 2](https://www.bayesrulesbook.com/chapter-2.html), §§2.1.3–2.1.4, equations (2.2)–(2.5): nonzero conditioning denominator, finite marginal normalization and prior-times-likelihood formula. Checked the relevant full sections online.
- [BDA3 official electronic edition](https://sites.stat.columbia.edu/gelman/book/BDA3.pdf), §1.3 printed pp.6–7 (PDF pp.16–17), §2.5 pp.40–42 (PDF pp.50–52), §2.8 pp.51–53 (PDF pp.61–63): marginal evidence, normal sample posterior, improper flat-prior normalization with at least one datum, and Beta(0,0) endpoint warning. Browser extraction failed; downloaded the official PDF and read these passages using PyMuPDF. The exact Gaussian and endpoint integrals were independently derived from local suppliers, rather than accepted solely from the source.
- Direct local suppliers: the five dependencies of the fiberwise definition; the proposition's indefinite-integral theorem and probability definition; all 21 dependencies of the normal example; all 14 dependencies of the Beta example; and the null example's dominated-kernel Bayes theorem. Every cited direct dependency statement/definition was read, with the full indefinite-integral and dominated-Bayes proofs also checked. This does not claim an independent audit of the entire transitive measure-theory or set-theory closure.

## Dependency records, published findings and blockers

The owned cross-batch records in `research/bayesian-computational-statistics-62-batch-5.cross-batch-dependencies.json` retain the proper-model interface and page context observations. The current proper-model Definition was independently read and supports the use. No supplier interface changed; no downstream propagation or supplier-first repair is needed. Stable IDs and any existing proposed withdrawals are retained. No defective published supplier was observed, so no published-consumer ledger entry or lock is required. No mathematical blocker or escalation remains.

## Local checks

Initial risk report: six HIGH/CRITICAL items, zero errors. All six complete risk reviews are recorded in the owning contract. Final focused checks all exited 0:

- `node tools/risk-report.mjs research/bayesian-computational-statistics-62-batch-5.proof-contracts.json --require-reviewed`: six routed items, zero errors.
- `node tools/tsx-run.mjs tools/precheck.mts` with all six batch item paths: five proof-bearing items checked, zero failures; the definition has no phase proof.
- `node tools/rendercheck.mjs` with all six paths: six files, valid renderer YAML and KaTeX, no reported defects.
- Final single batched `node tools/proof-layout.mjs` with all six paths: six items, 15 steps, zero defects. This was read-only; no item needed reflow or modification.
- Exact coverage/hash check: three decisions match exactly the three touched obligations; all six raw item hashes and all six manifest-entry hashes still match the post-reader snapshot, and every risk review is complete. The first ad hoc manifest check omitted the engine's private page-ID hash key; after using the documented hash projection it passed.

 No judge, stamping, dispatch, or gate battery was initiated.
