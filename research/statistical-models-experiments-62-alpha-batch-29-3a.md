# Batch 29 Step 3a adjudication

Run: statistical-models-experiments-62. Group: batch-29. Scope: batch 29 only.

All five routed obligations are decided. The reader repairs are sound; the exponential/Weibull repair is amended to correct the refuter’s nonfatal sign wording. No unresolved mathematical prerequisite, published defect, or outside consumer repair was found. No judge, stamp, dispatch, or engine gate cycle was initiated.

## Evidence and historical comparison

Read the scope/order task, reader report/findings (empty findings), refuter report, pre/post snapshots, both current pages, all seven current items and the exact Statement/Definition sections of every direct cited dependency. The local sources, not the previous reviewers’ verdicts, controlled this review. The inspected supplier passages are identified by the current items’ Facts & Assumptions and the contract’s citation source/section/quote entries.

The three touched item preimages in `research/statistical-models-experiments-62-owner-boundary-12-28-31-33-before/items/` exactly match their frozen pre-reader item hashes. Their complete diffs show only the reader’s recorded changes plus my one proof sentence. The cumulative-hazard and likelihood current sources exactly match their frozen post-reader hashes. Reversing only my exponential sign-sentence correction reproduces the frozen post-reader source hash. The original A-page text was recovered from the native reader’s recorded diff in `research/statistical-models-experiments-62-dispatch/reader-reader-29.attempt-1.log`, around lines 13101–13132; its reconstructed full source exactly matches the frozen pre-page hash. The current A-page matches its frozen post-page hash. No historical delta is left unknown.

## Decisions in dependency order

- `touched:29:thm-exponential-and-weibull-survival-laws` — **amended_repair**. Retained the reader F10/F12 and proof 3.1 repairs: under Countable Choice Lebesgue measure is a measure and Borel sets lie in its sigma-algebra, permitting the density-law restriction. Exact archived pre source hash matches the frozen pre snapshot; reversing only my sign-sentence correction reproduces the frozen post source. Independently checked all five steps and 23 direct suppliers. Amended proof 1.1 to use exp(-a)<exp(0)=1 for positive a. Statement unchanged; derivation contract and manifest synchronized. Closed ledger row: `sme62-3a-batch29-law-measure-prerequisites`. Repair confidence: 1.

- `refuter:29:1` — **confirmed_nonfatal**. Proof 1.1 incorrectly calls the exponential arguments positive, although they are negative. The CDF positivity conclusion is correct and immediately follows from exp(-a)<exp(0)=1 for a>0. Corrected exactly that comparison, retained mathematics and references, and mirrored the derivation. This is nonfatal wording/inference polish, not a counterexample to the theorem. Recovered post-reader source exactly by reversing this one edit; it matches bcb37b22cda69f073af0648f0567de77459fcb5017b1005b73724193436a7f28. Closed ledger row: `sme62-3a-batch29-refuter1-exponent-sign`. Repair confidence: 1.

- `touched:29:thm-survival-cumulative-hazard-identity` — **accepted_repair**. Accepted reader proof 1.1 local L1 bound, 1.2 interval/reciprocal/product measurability and zero-case separation, and 3.1 log/exp normalisation citations. Exact archived pre source matches 6c7b9f972be001ce97921cbe5d7eff3932842381a277b364d3c21c4cd2fd05d6; current source matches frozen post cf2fe288c0516a15f4853e4e5375f5129f7290304daee15b3be6f165b94f486b. Reviewed every step and direct supplier: positive compact survival bound, Lipschitz log composition, AC FTC under CC+DC, finite first zero and divergence all hold. Statement unchanged; manifest synchronized. Closed ledger row: `sme62-3a-batch29-hazard-prerequisite-justifications`. Repair confidence: 1.

- `touched:29:thm-censored-exponential-likelihood-and-mle` — **accepted_repair**. Accepted reader explicit Borel censor law/density/dominator and observation sigma-algebra, product measurability, and zero-singleton density-version justification. Exact archived pre source matches 3e05c0e197e0be6a742cfa40a34bf3abc0b86a404261add608790bd673c0356b; current source matches frozen post b5d75986ffc734f0c0cc57d2d62d4673ff1e6238c5fdbf0fb07ccf49c5b99080. Independently checked all ten steps and exact suppliers, ties, sigma-finiteness, explicit versions, parameter distinction and all d/E/C boundaries. Direct consumers are exactly the two batch-29 examples and A-page summary; both examples specify point-mass Borel censor laws with fixed finite dominators and remain sound. Contract excerpts/mappings and manifest synchronized. Closed ledger row: `sme62-3a-batch29-censor-space-and-density-justifications`. Repair confidence: 1.

The untouched jump-product theorem owes no decision. Its risk review checks all four steps: event partition yields the jump identity at zero or positive times; every finite-support denominator is positive; the first pre-survival is one, subsequent pre-survival equals prior post-survival, and final hazard one correctly gives zero. The mixed-law qualification prevents misuse as a formula for continuous decrease.

All six HIGH/CRITICAL items have specific complete risk reviews in the batch contract. Exponential/Weibull review includes positive parameters, CDF endpoint limits, Borel/measure construction under Countable Choice, compact FTC and monotone convergence despite a possible Weibull density singularity at zero, uniqueness and positive-survival hazard division. Cumulative-hazard review includes local L1 bounds, measurable reciprocal/product, Lipschitz log composition, AC FTC under Countable Choice and Dependent Choice, the immediate zero-time identity, a positive finite first zero, and divergent extended hazard without division on the zero-survival region.

Likelihood review checks the event tie convention T<=C versus the censor branch T>C, nonnegative measurable Tonelli integrands, sigma-finite disjoint branch dominator, density version at the null singleton zero, finite product construction/uniqueness, and explicit parameterwise versions without arbitrary simultaneous choice. The positive censor factor and product parameter space are retained. Interior d/E, no-failure positive exposure, zero exposure, model-null positive-failure/zero-exposure and zero censor-factor cases are correct. Lambda=0 is only a formal likelihood boundary for finite event times.

The two level-4 examples owe no decisions. Their six and five verification steps respectively are sound. The first has hazards .2 and 2t/9, survivals exp(-.6) and exp(-1) at 3, atomic hazards .4 and 1, and d=2,E=10 yielding .2. The second has d=0,E=10 giving only a boundary supremum versus d=E=0 giving a constant likelihood. Deterministic censoring is independent and each supplied point-mass law has a Borel density relative to a fixed finite dominator.

## Pages and consumers

`page:29:parametric-survival-and-reliability` — **accepted_repair**. Accepted the summary repair stating finite-valued density, S(0)=1, CC+DC, first-zero interval/divergence and common sigma-finite censor dominator. Reader recorded diff at lines 13101-13132 reconstructs the exact original page matching pre hash ffa6205f9a73969f4c9734c4783c7ca4fe39e49fe76b177c3486683f5bed0678; current page matches post hash 4ef99f9bef56d938e88b22c1946ef2c1a832048273aa70cac8e0fa1f71733a0c. All five listed item statements support the prose, placement and supplier order. The B-page summary is also sound and has no routed decision. Closed ledger row: `sme62-3a-batch29-page-hypothesis-summary`. Repair confidence: 1.

The reader changed the likelihood Statement’s measurable-space qualifications. A current search of item/page references finds exactly the two batch-29 examples and A-page summary as direct consumers. Both examples meet those qualifications through their specified deterministic censor laws; their actual uses and computations remain valid. No consumer Statement/Definition changed and no second hop or outside disposition is needed.

The current batch-28 `def-event-time-observation-schemes` Definition supplies nonnegative finite event/censor times and U=min(T,C), delta=1{T<=C}. Its conditional-law and unrestricted-AC clauses are unused here. Updated the owned cross-batch input with independent current-interface evidence for every consumer and refreshed the unified dependency ledger using its tool. No published content was edited, and no published ledger addition is warranted.

## Repairs and local validation

My only item edit is the proof 1.1 sign comparison in `items/thm-exponential-and-weibull-survival-laws.md`; the Statement and existing references are unchanged. Provenance already records an altered proof and remains accurate. No prior judge stamp was present to invalidate. Mirrored that sentence in its derivation contract. Reconciled current item dependency lists into the batch manifest, closing the reader’s manifest blocker. Synchronized five stale contract citation mappings/excerpts: removed the unsupported F2 use at 5.2 and redundant F8 supplier row, mapped F11’s zero-singleton use at 1.1, and refreshed both example quotes to the actual likelihood Statement. These are mechanical evidence corrections, not additional mathematical defects or routed obligations.

Actual local checks:

- Reflow of the edited item: unchanged.
- Precheck of the edited item: 1 checked, 0 failing.
- Rendercheck of the edited item: passed.
- Final proof-layout of all my changed item paths in one command: 1 item, 5 steps, 0 defects; run after the last item edit and reflow.
- Strict proof-contract check: initially exposed five stale mappings/excerpts; after synchronization, 7/7 items checked, 0 errors and 0 warnings.
- Manifest dependency check: 7 items, 0 errors.
- Risk report before recording reviews, then with `--require-reviewed`: final 0 errors, 7 items routed; all six required reviews complete.
- Frontier dependency-ledger refresh: refreshed and deduplicated.
- Defect-ledger append: five validated closed rows, each referenced by its decision; generated view refreshed.

No web or bibliography PDF was opened: the arguments are elementary applications of the explicit local suppliers read here. No claim of independent re-audit of every transitive published proof or external source is made. No blockers remain; engine-owned hash stamping and gate battery are pending handoff.
