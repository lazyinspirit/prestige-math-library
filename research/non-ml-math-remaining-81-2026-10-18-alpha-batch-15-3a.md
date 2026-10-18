# Batch 15 Step 3a adjudication

Run: non-ml-math-remaining-81-2026-10-18. Group: batch-15.

The scope has no touched items, touched pages, reader findings or refuter findings. Accordingly the decisions file contains an empty decisions array. This dispatch requires five risk reviews, in dependency order. No item edit has been made.

## Completed: finite-IID rate-distortion information bound (level 6)

Reviewed lem-it-finite-iid-rate-distortion-mutual-information-bound, Proof 1.1–2.1, and all seven direct dependencies in full: def-it-information-rate-distortion-function, def-it-single-letter-distortion-and-block-distortion, lem-it-finite-rate-distortion-minimum-attained, def-it-finite-mutual-information, thm-it-finite-entropy-chain-rule, thm-it-finite-conditional-mutual-information-identities-and-equality, thm-it-information-unit-conversion. The finite feasible time-shared test channel has distortion D_k; IID independence, chain rules and conditional-information nonnegativity prove the block bound. Both the supplier definition and the conclusion distinguish bits from nats explicitly. Checked zero-probability rows, k=1, deterministic sources and feasible distortion endpoints. No defect found; risk_review completed in the owning contract.

Evidence: research/non-ml-math-remaining-81-2026-10-18-reader-15.md, reader-findings-15.json and refute-15.json (with the same run prefix) all contain no finding. Initial risk-report succeeds, routing five HIGH/CRITICAL items among seven.

External source checks and final local checks are recorded below.

## Completed: lossless separation (level 9)

Reviewed thm-it-point-to-point-lossless-source-channel-separation, Proof 1.1–4.1, its joint-code definition, source-code lemma, DMC/capacity definitions, operational capacity formula, n-letter bound, Fano, DPI and entropy-chain-rule suppliers. The maximal-error code restriction is valid for the generally nonuniform source index, and the strict margin applies along every prescribed n_k/k→rho>0. The converse uses the deterministic-encoder conditional-entropy identity and gives the claimed weak bound. Zero entropy, zero capacity, singleton alphabets and zero-mass source symbols are covered; no equality-boundary sufficiency is claimed. No defect found; risk_review complete. Pre/post snapshot hashes and page hashes are equal (comparison performed locally); there are no reader repairs to adjudicate.

Source: MIT 6.441 Chapter 20 §20.5, Theorem 20.3 and its separation/Fano argument; finite IID/no-feedback setting agrees with the local result, with reciprocal block ratio and consistent units. The lossy review is recorded below.

## Completed: lossy separation (level 9)

Reviewed thm-it-point-to-point-lossy-source-channel-separation, Proof 1.1–4.1, and all twenty direct dependencies, including the complete additional operational RD definition, attainment/continuity and coding proofs, channel-code/error definitions and KL equality theorem. Attained zero mutual information gives a constant reproduction with mean at most D and vanishing positive-slack tails. The strict positive-rate branch composes source coding with maximal-error channel coding. Bounded distortion controls both the added expectation and the excess-event union; the converse bounds r(D_k) and uses right-continuity from above at every feasible D, including D_min. Checked zero rate/capacity, zero distortion, singleton alphabets and the unasserted equality case. No defect found; risk_review complete.

Read Gray, Entropy and Information Theory, §12.7, printed pp. 269–272 (PDF pp. 290–293), including both complete proofs. Theorem 12.7.1 uses bounded distortion to bound the contribution of channel errors. Caution: Theorem 12.7.2 displays a reversed inequality in its statement relative to its lower-bound proof; the present finite-block converse was independently checked from local suppliers and does not assume that displayed inequality. No repository defect follows from this source typo. The level-10 reviews are recorded below.

## Completed: finite-block zero-error counterexample (level 10)

Reviewed cex-it-asymptotic-source-channel-threshold-does-not-give-zero-error-at-finite-blocklength, Counterexample 1.1–3.1, and all ten suppliers (the additional conditional-entropy and finite entropy/KL definitions were read in full). The BSC capacity maximization is exact. At ratio six, 6C−H=(9/2)ln(3)−7ln(2)>0 because 3^9>2^14. Every code nevertheless has an erroneous positive-probability source-word/output-word pair, since k≥1 gives at least two source words and the channel has full support. This directly refutes the written universal finite-block claim; it does not contradict asymptotic reliability. No defect found; risk_review complete. The rate-budget review is recorded below.

## Completed: source-channel rate budget (level 10)

Reviewed ex-it-point-to-point-source-channel-rate-budget, Verification 1.1–3.1, with all nine dependencies already independently read for the preceding items. Direct entropy calculation yields H=2ln(2)−(3/4)ln(3), C=(3/4)ln(3)−ln(2). The ratio-five margin equals the counterexample’s ratio-six margin, (9/2)ln(3)−7ln(2)>0. The maximum is attained by uniform channel input and the source is Bernoulli(1/4). The conclusion invokes only strict asymptotic reliability. No defect found; risk_review complete.

All five risk reviews are complete. Both pages were read as contextual carriers; their strict thresholds, units, positive-slack conventions and asymptotic/finite-block distinction agree with the proved items. Neither page owes a decision. Final checks are recorded below.

## Sources and limits of review

- [MIT 6.441 Chapter 20](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/dfddd4345fee8dd49420be583be2b952_MIT6_441S16_chapter_20.pdf), §20.5, Definition 20.1, Theorem 20.3 and both converse arguments, printed pp. 215–217 / PDF pp. 9–11. Read the complete separation argument, including maximal-error composition.
- [Gray, Entropy and Information Theory](https://ee.stanford.edu/~gray/it.pdf), §12.7, printed pp. 269–272 / PDF pp. 290–293. Read the bounded-distortion composition and information-converse proofs; the statement typo noted above was not used.
- [MIT 6.441 Chapter 23](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/880c39878ba7dc35a5fbb35758d42a69_MIT6_441S16_chapter_23.pdf), §23.2, Definition 23.1 and Theorem 23.2, printed pp. 242–243 / PDF pp. 7–8: separable normalized distortion and fixed-length code conventions.
- [MIT 6.441 Chapter 24](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/aaa8d18ddecde45f97134d3f3dcee4a3_MIT6_441S16_chapter_24.pdf), Theorem 24.1 and §24.2.2, Theorems 24.2–24.4 and complete random-coding/change-of-measure proofs, printed pp. 246–252 / PDF pp. 1–7. The source theorem uses D>D_0; the local finite-alphabet proof independently covers the feasible endpoint using positive distortion slack and a diagonal sequence. No assertion of having read the separate Gray Source Coding Theory PDF is made.

All owned carriers and every direct supplier were read. This is focused Step-3a review, not an audit of every transitive foundation or every external bibliography entry.

## Checks and handoff

Initial and final risk-report runs without --require-reviewed succeeded. The final run with --require-reviewed also succeeded: zero errors, seven items routed, all five HIGH/CRITICAL risk reviews complete.

Pre/post item/contract/manifest hash maps are identical. All seven current raw item hashes match the post-reader item hashes. No item or page was edited, so no proof-layout, formatter or precheck was required for changed items. The only proof-contract changes are five risk_review records; no mathematical acceptance or judge stamp was written.

The existing batch-15 cross-batch input has 53 verified rows and covers every declared outside supplier (local check: zero missing direct supplier edges). Its actual source/channel interfaces agree with the current consumer uses documented above; no dependency or interface changed, so those rows remain valid without rewriting the unified ledger. Stable IDs and all manifest entries remain present; no withdrawal is proposed.

No confirmed defect, defective published item, repair, escalation or owner blocker was found. No defect-ledger row is warranted. Decisions: zero owed, zero written entries. The engine owns hash stamping, the gate battery and advancement.
