# Step 7 adjudication — group a

Run: `phase-2-nine-step-25`  
Batches: 1, 3, 4

This is the final group-a Step-7 report. It records completed item adjudications in processing order; the shared adjudication and defect ledgers are authoritative for exact structured tuples. Historical `Next action` lines below preserve the item-by-item checkpoint order and are superseded by the group closure at the end.

## Completed adjudications

### `cex-bounded-continuous-cannot-be-replaced-by-all-bounded-measurable-functions`

- Rejection: the natural-number-indexed witness used `1/n` at `n=0`.
- Outcome: `confirmed_fatal` (`other`, ill-typed construction).
- Pre-edit guard: `61a830a51cfec2e37caebf9ae131caf1acb0724edd3869916151b281953c4c26`.
- Repair: explicitly restricted the witness sequence and its two universal proof claims to `n >= 1`; the mathematical counterexample is otherwise unchanged.
- Dependencies checked: `def-weak-convergence-of-borel-probability-measures` as quoted in F1; the repair does not change its use.
- Sources consulted: none; the defect and correction are elementary and completely determined by the repository's indexing convention.
- Post-edit guard: `a883ada57d58035fe3f0eeefd00cfc27822f90f20986c75980ac1af1671c4a20`.
- Validation: focused precheck passed (1 checked, 0 failing); after the paid rejudge rejected, the final adjudicator repeated focused precheck and render checks and accepted the repaired positive-index formulation without changing content.
- Rejudge target: completed; final adjudication recorded terminal disposition `accepted-after-review` at context `8a055a92e78526e45bd069a63102e5f716a606802a27689fa4488c7f416e10e3`.
- Unresolved obligations: none for this item.
- Next action: run focused validation, record the repair, then adjudicate `cex-boundedness-of-first-moments-alone-does-not-give-uniform-integrability`.

### `cex-boundedness-of-first-moments-alone-does-not-give-uniform-integrability`

- Rejection: the displayed law uses `1/n` for a sequence whose unrestricted natural-number indexing includes `n=0`.
- Outcome: `confirmed_fatal` (`other`, ill-typed construction).
- Pre-edit guard: `1c0d02b02b915518acf01b68dccae03c18d4c1793daa5f2f117e05c7fd3cc709`.
- Repair: restricted the sequence in the statement to `n >= 1`; the proof already constructs it on the positive integers and explicitly handles `n=1`.
- Dependencies checked: `def-uniformly-integrable-family`, `def-weak-convergence-of-borel-probability-measures`, `cor-markov-inequality-for-random-variables`, and `thm-heine-borel-rn` as quoted; none supplies or needs the repaired index restriction.
- Sources consulted: none; the defect and correction are elementary and fixed by the repository convention.
- Post-edit guard: `028a56c20540a09f6c6e5c092e8ea9c036026e3cfc860c461cb8e1a2194a910d`.
- Validation: focused precheck passed (1 checked, 0 failing); the engine-managed paid rejudge accepted the repaired item on 2026-09-10.
- Rejudge target: completed; current rejudge verdict is `keep:true` at context `697ad7e3a8127294f290ede0b3bc4f44b679bed6daecbeeea2fbad836468c0ae`.
- Unresolved obligations: none for this item.
- Next action: adjudicate the next current-scope rejection, `thm-converging-together-lemma`.

### `thm-converging-together-lemma`

- Rejection: step 2.1 applied the natural-number-indexed continuity-from-above theorem to `F^[1/m]`, whose `m=0` member is undefined.
- Outcome: `confirmed_fatal` (`other`, ill-typed construction).
- Pre-edit guard: `7d30cf9e1cf3b36806a4da5de166aab78ab47d3e2b87ddfb685e4a70764b993d`.
- Repair: defined `E_m=F^[1/(m+1)]` for `m in N`; these closed neighborhoods decrease to `F`, so the cited continuity-from-above theorem now applies exactly.
- Dependencies checked: the full statements and relevant arguments of `thm-portmanteau-theorem`, `thm-continuity-from-above-for-measures`, and `lem-distance-to-set-is-lipschitz`.
- Sources consulted: none; the defect and repair follow directly from the local natural-number convention and the cited theorem's exact index domain.
- Post-edit guard: `feeef8f680eba2a77fbbc052230946142c4d04025f5cd83726357598d3f44408` before handoff; current guard `863c3baef27e70c32ce3957c5fe4b363f0869cd928122033fa968b5db1f6b511` after final adjudication.
- Validation: focused precheck passed; the batch-3 contract entry was regenerated and its focused strict check passed with 0 errors and 0 warnings. The final adjudicator repeated focused precheck and both owning/aggregate contract checks successfully.
- Rejudge target: completed. The paid rejudge found a separate missing-measurability hypothesis; the independent final adjudicator repaired the statement to require Borel-measurable random elements and recorded terminal disposition `repaired` at context `6c7ce6739881779a03b22107a279eba320b5387fa9cddc25bfb3ff17d32c014c`.
- Unresolved obligations: none for this item.
- Next action: adjudicate `thm-etemadi-strong-law-for-pairwise-independent-iid-variables`.

### `thm-etemadi-strong-law-for-pairwise-independent-iid-variables`

- Rejection: F5 replaced the canonical integer embedding `iota(n)` by the ill-typed expressions `n` and `-n`, including the negative-case identities.
- Outcome: `confirmed_fatal` (`dependency_citation`, inaccurate restatement).
- Pre-edit guard: `1482be651b25293b5db328fd3227eb248e2ac8ad277938406d26d8f85aa5ee12`.
- Repair: restored `iota(n)` and `-iota(n)` throughout F5's integer-exponent paragraph, including the negative and zero identities, exactly matching `def-integer-power`.
- Dependencies checked: the complete current `def-integer-power` definition and its natural/integer typing; the Etemadi proof itself uses only the valid natural powers `alpha^j`.
- Sources consulted: none; the exact local supplier resolves the citation objection.
- Post-edit guard: `7575cddd1f0ad97146e412dc5a0a149c8c4b4af8c4e9cb9cdf90fb3a10c41db1`.
- Validation: focused precheck passed; the focused batch-3 proof-contract check passed with 0 errors and 0 warnings; the paid rejudge accepted the repaired theorem.
- Rejudge target: completed; current rejudge verdict is `keep:true` at context `32a0f3b24d7c4343fa54b7b1c535a1c4b11f23b51bc7723fd7e266d9f0727266`.
- Unresolved obligations: none for this item.
- Next action: adjudicate `thm-prokhorov-tightness-theorem-on-polish-spaces`.

### `thm-prokhorov-tightness-theorem-on-polish-spaces`

- Rejection: step 1.2 used `1-1/m` and `1/m` for compact sets and a union indexed over unrestricted naturals, leaving the `m=0` term undefined.
- Outcome: `confirmed_fatal` (`other`, ill-typed construction).
- Pre-edit guard: `a1618850447cc2a62f92d8173eb440931165daa282d8935b414c29921bf19f69`.
- Repair: restricted the compact-set construction and union to integers `m>=1`; because the union contains every such image and their lower mass bounds tend to one, its limit mass is still one.
- Dependencies checked: `def-tight-family-of-probability-measures`, `lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences`, `thm-portmanteau-theorem`, `thm-hilbert-cube-universal-for-separable-metrizable-spaces`, and `lem-standard-complete-metric-on-a-countable-product` at the affected proof interface.
- Sources consulted: none; the assigned defect and repair are elementary and the local dependencies suffice.
- Post-edit guard: `f052df816ca40f6704e7ff8eaef71a760069c1d3f0bb616b24c248450f8b49ea` before handoff; current guard `440f21a4898c7bd91d0dae1aed8455002389aed6c170ed385d474af1c7f6deb6` after final adjudication.
- Validation: focused precheck passed; the batch-3 contract entry was regenerated and its focused strict check passed with 0 errors and 0 warnings. The final adjudicator repeated focused precheck, contract, and render checks successfully.
- Rejudge target: completed. The paid rejudge's Portmanteau-direction objection was a false positive; the independent final adjudicator retained the valid inequality, expanded it for clarity, and repaired the separately recorded coordinate-zero defect in the Hilbert-cube metric. Terminal disposition is `repaired` at context `5856c6bf15bf213215a50f823599aeeaa63236bdbbaca5995d73dee6fb914fac`.
- Unresolved obligations: none for this item; the final adjudicator corrected the previously unlicensed `j>=1` pseudometric to the exact `j>=0` weighted product metric and synchronized the owning contract.
- Next action: adjudicate `thm-skorokhod-representation-on-polish-spaces`.

### `thm-skorokhod-representation-on-polish-spaces`

- Rejection: step 1.2 allegedly treated every child endpoint as a finite sum even though an arbitrary countable order may have infinitely many predecessors.
- Outcome: `false_positive`.
- Guard: `115c1ba78388acabd7b8701438e426911c335bc5db3951be64ae3a07720a1024`.
- Exact evidence: the complete proof of `lem-interval-realization-from-refining-small-diameter-partitions` enumerates each child family as `(A_i)` and allocates the `j`th child after the indices `i<j`; every fixed `j` therefore has finitely many predecessors. Step 1.1 fixes those same enumeration orders for all laws. Since every partition atom has `mu`-null boundary, Portmanteau makes each of the finitely many mass summands converge, and induction along the atom's finite ancestral address gives both endpoint limits.
- Dependencies checked: the full statements and proofs of `lem-interval-realization-from-refining-small-diameter-partitions`, `lem-countable-boundary-null-partitions-of-a-separable-metric-space`, and `thm-portmanteau-theorem`; the batch-3 risk record independently uses the same countably-enumerated-child convention.
- Sources consulted: none; the complete local realization proof settles the order type and finite-sum claim.
- Repair: none permitted or warranted; no item, contract, manifest, dependency, impact, or judge record changed.
- Validation: direct item/dependency/contract comparison; no bytes changed.
- Rejudge target: no.
- Unresolved obligations: none for this rejection.
- Next action: run the prescribed Step-7 guard and scope checks, then reconcile the group report with exact current outcomes.

### `cex-identical-distribution-without-independence-can-defeat-the-mean-law`

- Rejection: step 2.1 allegedly includes the undefined quotient `S_0/0`.
- Outcome: `false_positive`.
- Guard: `0ffa637870ce9a4575a6bbec2ab1f754fca621353912edf4f9a578787d5640ba`.
- Exact evidence: the declared dependency `def-strong-law-of-large-numbers-for-a-sequence` fixes `(X_n)_{n>=1}` and `S_n=sum_{k=1}^n X_k`. The item never reindexes the sequence by all of `N`; “every n” is within that explicitly inherited positive-index domain. Thus `S_n/n=X` is well-typed and true.
- Repair: none permitted or warranted.
- Sources consulted: none; the exact local dependency resolves the objection.
- Validation: direct item/dependency comparison; no bytes changed.
- Rejudge target: no.
- Unresolved obligations: none.
- Next action: adjudicate `cex-pointwise-cdf-convergence-at-a-jump-is-not-required`.

### `cex-pointwise-cdf-convergence-at-a-jump-is-not-required`

- Rejection: the witness `mu_n=delta_(1/n)` and its universal claims were undefined at `n=0`.
- Outcome: `confirmed_fatal` (`other`, ill-typed construction).
- Pre-edit guard: `ebab5bde5244db851a4d664955dd6bffbf7dd1fae158a929e09614ac8a37b873`.
- Repair: restricted the witness and the proof's universal CDF statement to `n >= 1`. The paid rejudge then identified that the random-variable CDF interface had been applied to bare measures; the final adjudicator constructed the constant variables on a singleton probability space, proved that their laws are the stated Dirac measures, and retained the positive indexing.
- Dependencies checked: `def-weak-convergence-of-borel-probability-measures` and `def-cumulative-distribution-function-of-a-random-variable`; their quoted interfaces remain exactly sufficient.
- Sources consulted: none; the indexing correction is elementary and repository-determined.
- Post-Alpha guard: `cdc1d76881652c99a240b9fac911fc926fe8e4fd3e1ef52e0a93dfd866a03240`; final post-adjudication guard: `7ccc7a43bda290dab14c2ff233f71736e659ccd77d6994b425b319295aed2c36`.
- Validation: focused precheck passed (1 checked, 0 failing). The final adjudicator also passed focused batch and aggregate proof-contract checks with 0 errors and 0 warnings and a focused rendercheck.
- Rejudge target: completed. Terra rejected the Alpha repair at context `df1c68890eb391fb2e1996d1c5680e2455548263513143d4aa5fdadd0ce241bc`; final adjudication repaired the distinct interface gap and recorded terminal context `907f8a0e47072d848de95e81882a01b01a660dabb2d7053199b8c1a9fc312256`.
- Unresolved obligations: none for this item.
- Next action: resolve the inherited conditional-expectation dependency chain, beginning with `thm-conditional-monotone-convergence`.

### `cex-weak-law-does-not-imply-strong-law`

- Rejection: the formula for `X_0` would require an undefined `B_{-1}`.
- Outcome: `false_positive`.
- Guard: `07d53b45f9a3729008b8de19e5eb71edb7e18992a2524a4d7d15341fbf928ece`.
- Exact evidence: `def-strong-law-of-large-numbers-for-a-sequence`, which the item declares, indexes `X_n` and `S_n` only for `n>=1`. Step 1.2 defines `B_0=0` so that its displayed formula begins at `X_1`; no `X_0` or `B_{-1}` is used. For positive `n`, telescoping gives `S_n=nB_n` exactly.
- Repair: none permitted or warranted.
- Sources consulted: none; the exact local definition and elementary telescoping resolve the objection.
- Validation: direct item/dependency comparison; no bytes changed.
- Rejudge target: no.
- Unresolved obligations: none.
- Next action: adjudicate `cor-birkhoff-strong-law-for-iid-coordinate-shifts`.

### `cor-birkhoff-strong-law-for-iid-coordinate-shifts`

- Rejection: F5 guarantees an independent family on some probability space, not the canonical product used in the proof.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Pre-edit guard: `958cac662470966e1fa5396459435818cb2eb3ea4d88c8b33fe36027416ff954`.
- Repair: replaced the insufficient independent-copy citation with the exact canonical product-measure and coordinate-independence suppliers; updated the proof to use the repository's canonical coordinates `x_0,x_1,...`, the left shift, tail sigma-algebras, and averages `(x_0+...+x_{n-1})/n` consistently.
- Dependencies checked: complete statements and proofs of `thm-countable-product-of-probability-spaces` and `cor-coordinate-random-elements-on-a-countable-product-are-independent`, plus the existing measure-preservation, zero-one, ergodicity, and Birkhoff interfaces. The former F5 corollary was insufficient as stated even though its proof happened to construct the canonical model.
- Carrier updates: synchronized the owned batch manifest and canonical plan dependency arrays; the proof-contract citation/derivation entry was regenerated.
- Sources consulted: none on the web; the exact current published local suppliers completely resolve the citation issue.
- Post-edit guard: `33f55574428bc7452a83f56bc93d809ec41f2fbbeb90e3b821c6f9f3ea2f4c2f`.
- Validation: contract entry regenerated; focused precheck passed; focused proof-contract check passed with 0 errors and 0 warnings; unified frontier ledger refreshed and deduplicated; the paid rejudge accepted the repair.
- Rejudge target: completed; current rejudge verdict is `keep:true` at context `05ada2cec097701d37ecfaef62a2a1bee0c256dfbaf815901527136dfaeb4059`.
- Unresolved obligations: none for this item.
- Next action: hand off `cor-complex-interpolation-extensions-agree-on-intersections`.

### `cor-complex-interpolation-extensions-agree-on-intersections`

- Rejection: approximation sequences in steps 1.1–1.2 used `1/n` and `1/n^2` without excluding `n=0`.
- Outcome: `confirmed_fatal` (`other`, ill-typed construction).
- Pre-edit guard: `488de2db02f571de1beda8bb1642e1d723bb272965da5f82fc80061495bc5fa9`.
- Repair: explicitly indexed both core approximations and the level/rounding construction by `n>=1`; also made the second approximation's positive-index domain explicit in step 2.1.
- Dependencies checked: the finite-core interpolation bound, complex-Lp completeness/density, and dominated-convergence interfaces used in the affected steps. No dependency changes were needed.
- Sources consulted: none; the correction is a purely local indexing repair.
- Post-edit guard: `a74d650a29dddc3d0d9b2b88febb94fd012b886840c6f032f280e3aacaf46128`.
- Validation: contract entry regenerated; focused precheck passed; focused proof-contract check passed with 0 errors and 0 warnings; the paid rejudge accepted the repair.
- Rejudge target: completed; current rejudge verdict is `keep:true` at context `542aefeda85435ea02eab5e776b53a161882a8fe1552c3aa45b0080dfcddd852`.
- Unresolved obligations: none for this item.
- Next action: hand off the remaining repaired examples, starting with `ex-almost-sure-frequency-of-heads`.

### `def-levy-prokhorov-metric`

- Rejection: the definition uses closed enlargements while its source uses open enlargements, allegedly without proving equality.
- Outcome: `false_positive`.
- Guard: `09aeb6a61f5ded1f7372025c72dc0658fb9eba4f7fa18c0da56cfa5d64bcd7b8`.
- Exact evidence: this item only defines the closed-enlargement quantity and says the metric assertion is proved in the following lemma. The page manifest places `lem-levy-prokhorov-distance-is-a-metric` immediately after it. That lemma's Statement asserts equality with the all-Borel open-enlargement infimum, and proof step 2.1 proves both inequalities: open admissibility implies closed admissibility at the same radius, while closed admissibility at `a` implies open admissibility at every `a+delta`, so the infima agree.
- Repair: none permitted or warranted; duplicating the following lemma inside the definition would be inappropriate.
- Dependencies checked: the full definition and the complete following metric lemma, including its open/closed convention proof.
- Sources consulted: none; the exact local proof resolves the source-fidelity objection.
- Validation: direct definition/page-order/lemma comparison; no bytes changed.
- Rejudge target: no.
- Unresolved obligations: none.
- Next action: adjudicate `ex-almost-sure-frequency-of-heads`.

### `ex-almost-sure-frequency-of-heads`

- Rejection: F6 asserts only an IID family on some probability space, not the claimed canonical product and coordinate maps.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Pre-edit guard: `002c01811fd97749aee648f269f610f864ddc2978f145b6d767b977d5150d46a`.
- Repair: cited the exact canonical countable-product theorem and its coordinate-independence corollary, then reindexed the canonical coordinates by `Y_n(x)=x_{n-1}` for the positive-index finite-variance strong law. The statement now specifies the first `n` coordinates `x_0,...,x_{n-1}`.
- Dependencies checked: complete current published statements/proofs of `thm-countable-product-of-probability-spaces` and `cor-coordinate-random-elements-on-a-countable-product-are-independent`, plus the finite-variance strong-law statement.
- Carrier updates: synchronized the owned batch manifest and canonical plan statement, dependencies, and strategy; regenerated the proof-contract entry.
- Sources consulted: none on the web; the exact local suppliers fully resolve the objection.
- Post-edit guard: `588bb11e246b7d8deaf25d14ed19a620c0f5e3d05da2b6039fc55cffb57121b6`.
- Validation: contract entry regenerated; focused precheck passed; focused proof-contract check passed with 0 errors and 0 warnings; unified frontier ledger refreshed and deduplicated; the paid rejudge accepted the repair.
- Rejudge target: completed; current rejudge verdict is `keep:true` at context `ea8ed6e3521a1575e6c5417d9925914ef51cdb2b488fb78b5927785a732db0c0`.
- Unresolved obligations: none for this item.
- Next action: hand off `ex-dirac-laws-converge-weakly-exactly-when-their-points-converge`.

### `ex-dirac-laws-converge-weakly-exactly-when-their-points-converge`

- Rejection: the displayed example `delta_{1/n}` is undefined at `n=0`.
- Outcome: `confirmed_fatal` (`other`, ill-typed construction).
- Pre-edit guard: `d0f91d98938c07589b962f8203790d6698f9c5d87dbf4ec9f9e7ecd25c3da754`.
- Repair: reindexed only the illustrative sequence as `delta_{1/(n+1)}` and updated its final distance calculation. The general iff is unchanged.
- Dependencies checked: the bounded-continuous definition of weak convergence; the converse proof uses its explicit bounded continuous distance test directly.
- Carrier updates: synchronized the owned batch manifest and canonical plan statement; regenerated the proof-contract entry.
- Sources consulted: none; the indexing repair and both directions are elementary.
- Post-edit guard: `2088335ae687b876a7b09a7881cfbd39a5cc6d477e82c8785f5b1d0dd48a042c`.
- Validation: contract entry regenerated; focused precheck passed; focused proof-contract check passed with 0 errors and 0 warnings; the paid rejudge accepted the repair.
- Rejudge target: completed; current rejudge verdict is `keep:true` at context `878b801f6969414bf397184ba722dcd99a4f4ba5677c00b14edce6a78a6a3bcd`.
- Unresolved obligations: none for this item.
- Next action: hand off `ex-uniform-laws-on-expanding-finite-grids-converge-to-uniform-zero-one`.

### `ex-strong-law-for-empirical-indicator-averages`

- Rejection: F1 preserves independence but does not itself assert identical distribution after applying the indicator.
- Outcome: `confirmed_nonfatal`.
- Guard: `8c2d045a9889e3607775be775c722c4f83cc36e7a5788b01f2c86b0a6d0f058f`.
- Exact evidence: the attribution to F1 is slightly too broad, but the omitted step is immediate. The Given variables have one common law and the same measurable map `1_A` is applied to each, so every transformed variable is Bernoulli with success probability `P(X_1 in A)`; F1 supplies independence. This is precisely the task's “competent reader closes immediately” nonfatal category.
- Repair: none permitted for a nonfatal outcome.
- Dependencies checked: the full measurable-functions-preserve-independence statement, the indicator expectation corollary, and the IID L1 strong law.
- Sources consulted: none; the missing one-line pushforward-law calculation is elementary.
- Validation: direct item/dependency comparison; no bytes changed.
- Rejudge target: no.
- Unresolved obligations: none.
- Next action: adjudicate `ex-uniform-laws-on-expanding-finite-grids-converge-to-uniform-zero-one`.

### `ex-uniform-laws-on-expanding-finite-grids-converge-to-uniform-zero-one`

- Rejection: the formula for `mu_n` uses `1/n` but did not exclude `n=0`.
- Outcome: `confirmed_fatal` (`other`, ill-typed construction).
- Pre-edit guard: `2a962a28733130626f73058de636b15dfd4c5198209e5ffcc398e3196380ded7`.
- Repair: restricted the empirical laws and the finite-grid construction to `n>=1`.
- Dependencies checked: the Lebesgue box-measure, simple-integral, uniform-continuity, integral-linearity/triangle, and weak-convergence interfaces used by the Riemann-sum proof; no dependency change was needed.
- Carrier updates: synchronized the owned batch manifest and canonical plan statement; regenerated the proof-contract entry.
- Sources consulted: none; the correction is purely local indexing.
- Post-edit guard: `553b8e46fcf044cfb1875936af7321ae93360ae8117a867feaefe307168c96d6`.
- Validation: contract entry regenerated; focused precheck passed; focused proof-contract check passed with 0 errors and 0 warnings; the paid rejudge accepted the repair.
- Rejudge target: completed; current rejudge verdict is `keep:true` at context `b59d4017c9debe8b37cc47575c8cea0aec386ebdf0b23fedfecdf0341d6869e1`.
- Unresolved obligations: none for this item.
- Next action: hand off `cex-pointwise-cdf-convergence-at-a-jump-is-not-required`.

### `prop-ergodic-positive-sets-sweep-out-almost-every-point`

- Rejection: step 3 treats strictly invariant sets, while F1 also states a modulo-null criterion.
- Outcome: `false_positive`.
- Guard: `ab2c9f022bc87eb97ad8813e45cac19c02f5d2e6d01d095c5b8ca0a47435d27f`.
- Exact evidence: the current definition `def-ergodic-measure-preserving-system` defines ergodicity by the strict family `I`. F1's cited theorem proves that this is equivalent to the modulo-null condition, but step 3 is allowed to prove the defining condition directly. For each strictly invariant `A`, taking `B=X\A` makes every `B intersect T^{-n}A` empty; the positive-intersection property therefore excludes both `A` and its complement having positive measure, exactly proving strict null/conull ergodicity.
- Repair: none permitted or warranted.
- Dependencies checked: the complete current ergodicity definition and equivalence theorem, plus the strict-representative lemma to verify the two interfaces were not being conflated.
- Sources consulted: none; exact local definitions settle the issue.
- Validation: direct item/dependency comparison; no bytes changed.
- Rejudge target: no.
- Unresolved obligations: none.
- Next action: adjudicate `thm-conditional-fatou-and-dominated-convergence`.

### `thm-birkhoff-ergodic-probability-case-for-strong-laws`

- Rejection: the displayed ergodic average divided by `n` without excluding `n=0`.
- Outcome: `confirmed_fatal` (`other`, ill-typed construction).
- Pre-edit guard: `6a42e8d0b8c7ed8fd9a1d379f64b9e33084891abf2e34f9195f7c195da22c571` (the earlier value recorded here was the judge-form hash and was corrected in the append-only adjudication ledger).
- Repair: defined the averages only for `n>=1` in the theorem and carried that domain through the measurability, shift-invariance, and maximal-inequality steps; synchronized the owned manifest statement.
- Dependencies checked: the finite maximal ergodic inequality, which itself uses partial sums only for positive indices, and the sequential limsup measurability theorem. The repair makes their interfaces consistent.
- Sources consulted: none; the defect is an elementary domain error fixed by the repository convention.
- Post-edit guard: `592106adac98a9602b641f0fc84a1bd3e05108744f55d251b1327fa6d4d57abb` (the earlier value recorded here was the judge-form post-edit hash).
- Validation: regenerated this theorem's contract and its direct consumer's quoted statement; focused precheck and proof-contract checks passed with 0 errors and 0 warnings; the paid rejudge accepted the repair.
- Rejudge target: completed; current rejudge verdict is `keep:true` at context `d689f10e9f8cd1a1ffbb7c82d2694d2d8cd5afed605e9910c56d8e66322df9d3`.
- Unresolved obligations: none.
- Next action: hand off the repaired direct consumer `cor-birkhoff-strong-law-for-iid-coordinate-shifts`.

### `rem-conditional-expectation-is-a-class-not-a-canonical-pointwise-function`

- Rejection: the countable-union observation was promoted to the unsupported claim that no representative can satisfy an uncountable family pointwise.
- Outcome: `confirmed_fatal` (`logic`, false-or-overstrong statement).
- Pre-edit guard: `6bef7b205cd1a7b1e9483c001c4e1e3dc3c9772dbc13fed381322e92d9e88c89` (the earlier value recorded here was the judge-form hash and was corrected in the append-only adjudication ledger).
- Exact evidence: countable subadditivity supplies one null exceptional set for a countable family, but says nothing universal about uncountable families. An uncountable family consisting of zero identities is a direct counterexample to the former wording.
- Repair: qualified the remark to say that the argument gives no *general guarantee* for an uncountable family, while particular uncountable families may admit one simultaneous representative; synchronized the owned batch manifest statement.
- Dependencies checked: the exact current class/version terminology in `def-conditional-expectation-as-an-ae-class`; no dependency asserts the removed impossibility claim.
- Sources consulted: none; the counterexample and repaired logical scope are elementary.
- Post-edit guard: `a6f4e0aa4246bc45452dc199f8b34988c857d7e371482061d7a71a8ef645ad29` (the earlier value recorded here was the judge-form post-edit hash).
- Validation: focused precheck completed with 0 failures (the remark has no proof contract); the paid rejudge accepted the repair.
- Rejudge target: completed; current rejudge verdict is `keep:true` at context `0c201aecf01a8e7c24a5604a87410313156fe62bfd0b693434cd833828eed9d4`.
- Unresolved obligations: none.
- Next action: run the group closure checks and finalize this report.

### `thm-conditional-monotone-convergence`

- Rejection: the zero-indexed decreasing sequence was anchored at `V_1`, so `V_1-V_0` has the wrong sign and the assumptions did not even ensure that `E[V_0\mid\mathcal G]` exists.
- Outcome: `confirmed_fatal` (`logic`, ill-typed claim).
- Pre-edit guard: `158c0892cad974e03448a3a39bb5f96e1a3af0b0cec279b430807aaaf1ab323a` (the earlier adjudication row used the judge-form hash; a guard-form correction preserves the exact rejection and decision).
- Repair: replaced `V_1` by the actual initial term `V_0` in the statement, Given, integrable domination, increasing-difference construction, and conditional-expectation calculation. Now `0\le V_0-V_n\uparrow V_0-V` for every natural index and `|V_n|\le |V_0|+|V|`.
- Dependencies checked: the complete local nonnegative conditional-expectation definition, order/linearity theorem, and monotone-convergence interface used in steps 4.1–5.1. No dependency change was needed.
- Sources consulted: none; the defect and repair follow directly from zero-based sequence indexing and the stated local interfaces.
- Post-edit guard: `bb3b3a0b8c10880fe90ad63dd1fdda3f9bf9be82f25b69ed217ace9060c57f3d`.
- Validation: regenerated this theorem's contract and its direct consumer's citation entry in both the batch-4 and aggregate contracts; focused precheck and both focused strict proof-contract checks passed with 0 errors and 0 warnings. The final adjudicator repeated the same checks successfully.
- Rejudge target: completed. Terra rejected at context `dcec00458cc2ce4965fbe1027cc79bec40997fd215d7237b59976bb3227bda58`, alleging that level-set measurability was unsupported; the final adjudicator derived it directly from the measurable-function definition and recorded terminal disposition `accepted-after-review` at the same context, with no further content change.
- Unresolved obligations: none for this item.
- Next action: hand off the repaired consumer `thm-conditional-fatou-and-dominated-convergence`.

### `thm-conditional-fatou-and-dominated-convergence`

- Rejection: the dominated-convergence clause formed conditional expectations of `X_n` and `X` without assuming those functions measurable.
- Outcome: `confirmed_fatal` (`logic`, missing hypothesis).
- Pre-edit guard: `98aec1cfe49519837e78d1fcc70008ef153fec9af53093c431e0d7499fd13cdf` (the earlier value recorded here was the judge-form hash and was corrected in the append-only adjudication ledger).
- Exact evidence: almost-sure convergence and domination do not make an arbitrarily specified `X` measurable on a non-complete probability space; ordinary DCT and `E[X|G]` therefore were not defined from the written hypotheses.
- Repair: explicitly required real-valued measurable `X_n` and `X` in the dominated clause and its Given; synchronized the owned manifest statement.
- Dependencies checked: the full ordinary DCT statement and conditional-expectation class definition, both of which require measurable inputs.
- Sources consulted: none; the type failure follows directly from the local interfaces.
- Post-edit guard: `9406d4eb7ab8ed3c93a0b2a5d40da4c876872f80490c6b24c958fd20c46dd215` (the earlier value recorded here was the judge-form post-edit hash).
- Validation: contract entry and the repaired supplier's quoted statement regenerated in both owning contracts; focused precheck and focused batch/aggregate proof-contract checks passed with 0 errors and 0 warnings. The final adjudicator repeated all three focused checks successfully.
- Rejudge target: completed. Terra rejected at context `9dc1ba7923172b3a3dcbce15e44d1bb8e65e18a120e91630dc360b5e1f243bf0`, alleging that F1 did not support extended order; the final adjudicator derived order directly by applying the current conditional-MCT statement to `A,B,B,...` (and noted the supplier's complete proof already proves it), then recorded terminal disposition `accepted-after-review` with no further content change.
- Unresolved obligations: none.
- Next action: hand off the remaining repaired conditional-expectation remark.

## Group closure

- Decisions recorded: 21 exact rejection tuples — 15 `confirmed_fatal`, 1 `confirmed_nonfatal`, and 5 `false_positive`. The six frozen group-a scope rejections each have exactly one matching adjudication row: five fatal repairs and one false positive.
- Handoffs: all 15 fatal repairs have exactly one completed paid rejudge cycle. Nine rejudges accepted directly; six proceeded to engine-managed terminal review, with no unresolved mathematical obligation. No extra judge cycle was initiated.
- Reader warnings and alerts: none targeted group a. No new cross-group finding arose, and no row was added to the cross-group alert ledger.
- Dependency/frontier accounting: the dependency-changing inherited repairs used the consumer-batch inputs and refreshed the unified frontier ledger as recorded above. The current-dispatch repairs introduced no new dependency edge or lemma. The frontier task file was read and followed; Step 8's lead-only refresh remains engine-owned.
- Sources: no web source was needed. Every decision was resolved from complete current local statements/proofs or elementary boundary/type reasoning; no external source reading is claimed.
- Final checks: Step-7 guard passed with 76 changed items, all 76 licensed, 0 errors, and 0 warnings. `step7-scope --check` passed with 8 groups, 760 partitioned items, 10 routed open rejections, and 3/3 warning/alert dispositions. Target-run status reports Step-7 adjudication coverage 17/17 and correctly says its stage gates have not yet run.
- Blocker: `defect-ledger check` has one bookkeeping error. The original `thm-conditional-monotone-convergence` fatal row used judge-form hash `e1bf36b345d3cc54f6a7e4c65e79db45ab1ec510ebdb9e9a9b451ba6e21fbb9d`; the resumed guard-form correction uses `158c0892cad974e03448a3a39bb5f96e1a3af0b0cec279b430807aaaf1ab323a`. The newly appended single defect row owns the corrected reference, so the checker still asks that the original reference be reconciled into that same row. The defect ledger is append-only and its prescribed interface has no amendment operation; adding a second defect row would violate the one-defect/one-row rule. This requires the engine's append-only hash-reconciliation path. No mathematical content is blocked.
