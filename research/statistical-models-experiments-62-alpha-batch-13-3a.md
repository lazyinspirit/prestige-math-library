# Step 3a adjudication — batch 13

Run: `statistical-models-experiments-62`; group: `batch-13`.

Scope owes exactly `touched:13:lem-randomly-selected-unit-effect-moments`; no page, reader or refuter finding obligations. The generated order prescribes six risk reviews. Reader report and findings and refuter artifact were read independently.

## Completed reviews

### `def-randomized-latin-square-design`

Checked the full Definition and all four supplier definitions. The allocation set is a subset of the finite function set R_t^(R_t×R_t); L0(r,c)=r+c mod t explicitly witnesses nonemptiness for every integer t≥1. At t=1 the sole allocation has mass one. For t≥2, identical treatment permutations in all rows have positive product-RCBD mass but violate column uniqueness, so the laws differ. Row/column bijectivity is equivalent to each treatment occurring once. No quotient or AC is used. Oehlert Ch.13 §13.3 pp.325–327 supports the balance definition; uniformity over all squares is the expressly chosen local law, not an attribution to his randomization procedure. Reader/refuter findings are empty; no defect found.

### `lem-rcbd-nested-contrast-model-and-projection`

Read all five proof steps and the eight direct suppliers. C1=0 makes C restricted to H have image of dimension q, giving kernel dimension t−1−q. Constant, treatment and block spaces are pairwise orthogonal and their replication maps injective. Row/column zero sums characterize the orthogonal complement; double centering gives the explicit projection. Full row rank makes CC^T positive definite: a^TCC^Ta=||C^Ta||²>0 for a≠0. P_C projects onto row(C); replication scales squared norm by b. Orthogonality gives the stated RSS difference with no distributional hypothesis. Checked t=b=2, q=1 and q=t−1 (zero reduced treatment space), zero arrays and C ybar=0. Oehlert §13.2.2 pp.319–321 gives the additive context; the local linear algebra proves the formulas. No AC is required. Empty reader/refuter findings; no defect found.

### `lem-randomly-selected-unit-effect-moments`

Read all three steps and six direct definitions. Two assignments have weights 1/2, giving mean (δ1+δ2)/2 and variance (δ1−δ2)²/4; all moments exist on this finite space. Equal effects give zero variance, including both zero. With assignment (1,0), hold Y1(1),Y2(0) fixed and vary Y1(0): data (assignment,responses) agree while S differs on a positive-probability outcome. Thus no one parameter-independent statistic works across the unrestricted no-interference model. This does not deny a constant statistic on a restricted known-effect submodel. The reader supplied the exact statistic definition, F7 and dependency/contract/manifest links; the argument and claim are sound. Oehlert §13.2 gives pairing context, while the moment/nonfunctionality results follow locally. No choice is used; no further defect found.

### `prop-rcbd-treatment-block-interaction-confounded-with-residual`

Read the Statement, all three proof steps and both suppliers. P_E annihilates the additive mean and fixes γ∈E, so residual equals γ+P_Eε. Every h∈E preserves this sum and both new components remain in E; a nonzero h exists because t,b≥2 gives positive dimension. W_U⊕E fills all tb directions, leaving zero pure-error residual degrees of freedom with unrestricted interaction. At t=b=2, E has dimension one; zero residual still admits canceling nonzero components. The statement explicitly limits the inference to realized residual decomposition and does not claim nonidentifiability under every stochastic model. Oehlert Ch.13 §13.2.2 pp.320–321 describes the same zero-pure-error layout. No choice/distributional assumption is used; no defect found; reader/refuter findings empty.

### `thm-paired-randomization-contrast-moments`

Read all five steps and eight suppliers, including the complete covariance proof. The zero-weight extension embeds the paired law in the full binary schedule model, with no-interference explicit. D is the response-difference function of assignment plus observed responses, measurable on the full power set. D1+D2=δ1+δ2, D1−D2=δ1−δ2+2(Y1(0)−Y2(0)); finite two-point moments give τ and (D1−D2)²/4. The representation in step 2.3 holds on the positive-mass support (almost surely): its failure at the two zero-weight extension points has no effect on moments. This is immediately closable proof polish, not a false moment or statistic claim. Covariance bilinearity applies to the bounded finite-space variables. Equal D values give variance zero; equal δ alone need not. Zero-weight assignments are retained legitimately; t=2,b=1 is permitted by the RCBD supplier even though the projection lemma requires b≥2 and is not used here. Holmes–Huber §13.4.4 supports pairing/randomized position; the formulas are proved locally. No AC required; no substantive defect found; findings empty.

### `thm-rcbd-treatment-contrast-f-law`

Read all four steps and the seven direct suppliers, including the entire current published Gaussian theorem proof. With n=tb, p=t+b−1 and full-row-rank C, the projection lemma gives nested dimensions p−q,p, RSS reduction b(C Ybar)^T(CC^T)^−1(C Ybar), and n−p=ν=(t−1)(b−1)>0. Under Cτ=0 the mean is in W_R. Conditional independent Gaussian errors with σ²>0 meet the supplier exactly. Its step 4.1 splits the error into reduced, contrast and residual orthogonal coordinate blocks, giving independent σ²χ²_q and σ²χ²_ν contributions. AC and its countable-choice measurability consequence are carried from the supplier. The piecewise ratio is Borel and the zero denominator has probability zero. Checked t=b=2,q=1 (ν=1), q=t−1, zero observed array and non-null exclusion; randomization alone supplies none of these error assumptions. Oehlert §13.2.2 supplies additive context; Chen Lecture 8 §§8.4–8.4.1 PDF pp.9–11 supports Gaussian coordinate/projection properties. Empty findings; no defect found in the current required supplier proof or consumer.

## Routed decision and historical evidence

`accepted_repair` for `touched:13:lem-randomly-selected-unit-effect-moments`, with `repair_confidence: 1`. Closed nonfatal defect: `statistical-models-experiments-62-3a-batch-13-selected-effect-statistic-citation` in `research/defect-ledger.jsonl` (caught at `3a-adjudicate`, disposition `fixed`). The explicit statistic supplier was missing; the previous nonfunctionality argument and moment formulas were already sound.

An exact preimage is available at `research/statistical-models-experiments-62-owner-boundary-3-5-13-22-before/017-lem-randomly-selected-unit-effect-moments.md.before`. Its raw SHA-256 is `1e952784332b41a349ada4a5181d56005ac36f80351b9be5724267f205d11d5b`, equal to the frozen pre-reader item fingerprint. Comparing these bytes with the current item confirms the reader's additions: declared `def-statistic-and-estimator`, Fact F7, its use in step 1.1, clarification from observed outcomes to observed assignment and response data, and terminal newline. The current raw hash is `b25b334f6c078b2150f7680d519ea9532b0fe6f554abf95620a408df3e445687`, exactly the frozen post-reader item fingerprint. No historical delta uncertainty remains for this item source.

The current touched manifest projection equals the frozen post-reader manifest hash `d2854ee5cc6cfa70141a08b1a88bb8f2b1d3288ba89815ecec275cd8b608d453`. Removing only the newly supplied `risk_review` from the touched contract yields its exact frozen post-reader contract hash. All 12 current item files equal their frozen reader-post fingerprints. No item source was edited by this adjudicator and no judge record was added or removed.

## Consumer and metadata maintenance

The reader's clarification in the Statement prompted a direct dependency/reference search across items, pages and current run manifests. The only item consumer is `cex-observed-paired-contrast-variance-is-not-effect-heterogeneity`; its F2 and step 3.1 use the unchanged selected-effect variance formula. The numerical witness remains sound: effects 1 and 0 give selected-effect variance 1/4; observed contrasts −9 and 10 give variance 90.25. No mathematical repair is necessary and no further consumer hop is triggered. The A-page summary only distinguishes latent selected effects from observed contrasts and remains sound.

The counterexample's F2 contract quotation retained the old wording “of the observed outcomes.” This caused one `citation-quote-mismatch` in the initial local strict contract check. Synchronized that quotation to the current supplier Statement; this is metadata maintenance, not an additional mathematical defect or routed decision. Six specific completed risk reviews were added to the owning contract. The owned consumer dependency input `research/statistical-models-experiments-62-batch-13.cross-batch-dependencies.json` preserves its previous evidence and records the current independent interface checks; the canonical dependency ledger was refreshed through its tool. `briefs/tasks/frontier-dependency-ledger.md` specifies this per-batch input workflow; its instructions were followed without changing the brief.

## Sources and review limits

The following relevant source sections were opened and read, in addition to the exact local dependency definitions/statements and proofs described above:

- [Oehlert, A First Course in Design and Analysis of Experiments](https://users.stat.umn.edu/~gary/book/fcdae.pdf), §13.2.2 pp.319–321 (PDF pages 338–340, lines 15086–15178), §13.3 pp.324–326 (lines 15347–15408), and §13.3.2 p.327 (lines 15454–15475). These support the additive model, one-observation layout, Latin balance and cyclic construction. The locally chosen uniform law over all squares is distinguished from his implementation advice.
- [Holmes–Huber, Modern Statistics for Modern Biology](https://www.huber.embl.de/msmb/13-chap.html), §13.4.4, lines 294–300: pairing as blocking and randomized position. The two-point formulas follow from the local enumeration.
- [Chen, UW STAT 512 Lecture 8](https://faculty.washington.edu/yenchic/20A_stat512/Lec8_Linear.pdf), §§8.4–8.4.1, PDF pp.9–11, lines 1021–1256: normal transformations, chi-square projection laws and orthogonal Gaussian components. The exact nested F proof was independently checked in the current local supplier, especially its step 4.1.

This dispatch reviews the six routed risk subjects, the touched delta and its actual consumers. It does not claim a complete audit of unflagged examples, pages, every transitive supplier, or the published library.

## Outside-scope supplier alert for the owner

Open alert: `def-finite-randomized-treatment-assignment-model` (batch 12), Definition, final paragraph, currently lines 92–96, says potential outcomes under unassigned vectors have values “substantively untestable” from the observed-data law. That assertion is too strong if it means nonidentification from the full law: for every z with p(z)>0 the atom (z,Yθ(z)) with weight p(z) reveals Yθ(z) from Pθ. For example, N=1, assignments {0,1}, weights 1/2 each and outcomes a,b give Pθ={(0,a):1/2,(1,b):1/2}; both outcomes are identified by the law, even though a realized assignment reveals only one. Values at zero-weight vectors are unidentifiable in the unrestricted model. A single observed assignment and its responses must therefore be distinguished from the full observed-data law.

Required owner action: route a surgical qualification to batch 12's owner, distinguishing latent values in one realization from identification by the distribution, then check its actual consumers if its Definition changes. No outside file was edited and this alert remains open. It does not block the batch-13 proofs: their uses of fixed schedules, assignment-only randomness, finite data space and latent unobserved responses in a realized pair are correct, and the selected-effect non-statistic argument compares identical realized data rather than identical laws. No published supplier defect was found in the required interfaces; no published-ledger edit was necessary.

## Local checks and handoff

- `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-13.proof-contracts.json` — exit 0, six HIGH/CRITICAL subjects identified, 12 items routed.
- The same command with `--require-reviewed` after review — exit 0, 0 errors, all six required reviews complete.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-13.proof-contracts.json --strict` after quotation synchronization — exit 0, 0 errors, 0 warnings, 12/12 checked. Initial mismatch is recorded above.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-randomly-selected-unit-effect-moments.md` — exit 0, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/lem-randomly-selected-unit-effect-moments.md` — exit 0, 1 item, 3 steps, 0 defects; run once here after the final metadata edits. No item formatter or source edit was performed by this adjudicator.
- `node tools/frontier-dependency-ledger.mjs refresh --run statistical-models-experiments-62` — exit 0, refreshed and deduplicated.
- `node tools/defect-ledger.mjs append --file /tmp/sme62-batch13-defect.json` — exit 0, appended the one closed nonfatal row and regenerated its view under the tool's lock.
- Exact pre/post/current raw and canonical projection comparisons — all 12 item files identical to reader-post; touched manifest identical to reader-post; touched contract differs only by required risk review.

The task-named decisions file has exactly one owed obligation. No local mathematical blocker or unresolved repair remains. The outside-supplier alert remains for its owner. No judging, stamping, certification, agent dispatch, gate battery or stage transition was initiated; engine hash sealing and gates remain outstanding.
