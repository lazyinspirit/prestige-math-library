# Batch 41 Step 3a adjudication

Run: `bayesian-computational-statistics-62`; group: `batch-41`.

Scope: two touched carriers, no reader/refuter findings or page obligations. Review proceeds in generated dependency order. No agents, judges, stamps, or gates invoked.

## Completed review: level 0

`def-state-space-filtering-laws`: read the complete definition and ten direct suppliers. Conditional kernels have the correct state/history domains; finite-product standard-Borel closure and the unique path law support the setup. T=0 uses the singleton empty history and the E_0-valued smoother. Null-history version freedom does not assert a density quotient. AC is explicitly inherited, with no new choice. Risk review complete; no routed decision owed and no defect found.

Sources: the local definitions of kernels, RCDs, conditional laws, standard Borel and finite products; `thm-finite-horizon-state-space-kernel-law-exists-uniquely`, especially steps 1.1–3.1. Reader and refuter artifacts have no outstanding findings. Initial risk-report: seven HIGH/CRITICAL items, zero tool errors.

The remaining reviews are recorded below; no unresolved prerequisite was found.

## Completed review: level-1 algorithm

`alg-recursive-bayesian-filter`: accepted reader repair. The procedure initializes the empty-history probability and returns it even for T=0. The normalized-density and sigma-finite assumptions meet the dominated-Bayes interface; the two exceptional evidence branches retain probability sections. The procedure is a finite time-indexed measure recursion, with correctness delegated to its justified_by theorem. All six suppliers read; risk review complete. Consumer interface review is recorded with the theorem and three examples below. The frozen pre/post hashes differ exactly for the two routed carriers; the manifest's stored algorithm statement retains the old output clause and was synchronized to the accepted definition.

## Completed review: level-1 existence

`thm-state-space-filtering-and-smoothing-laws-exist`: all four proof steps and twelve suppliers read. RCD existence applies to the state/path targets and arbitrary conditioning sigma-algebras; factorization applies to the nonempty standard-Borel history targets. The argument establishes nonemptiness from the initial law and pointwise probability kernels. At T=0 the smoother is the initial law conditioned on the singleton. AC uses are explicit. Risk review complete, no defect found, no routed decision owed.

## Completed review: level-2 recursion

`thm-dominated-state-space-filtering-recursion`: accepted reader repair after reading all six current steps and fifteen suppliers. Step 2.2 follows from the ordered path law, then conditional integration through the previous filter. Step 3.1 applies dominated Bayes to each predictive probability, using joint measurability and sigma-finite domination. Its marginal is a probability, including zero mass on both exceptional evidence sets. Step 4.1 now proves the triple-event identity and, by setting A=E_t, identifies the actual joint observation law before step 5.1 applies change of variables. Equality extends from rectangles using finite-measure pi-lambda; there is no division on exceptional fibers. The missing explicit marginal identification was a nonfatal exposition gap, now closed. The proof works for any supplied preceding filter version, so induction justifies the algorithm. Risk review complete. Current raw hashes of both touched sources equal the frozen post-reader hashes; no item source was changed by Alpha.

External source checked: Doucet–Johansen tutorial, §§2.1–2.3, PDF pages 4–8, especially equations (8)–(12), on the Oxford URL cited in the items. It states the density prediction/update formulas; the local kernel/RCD suppliers provide the more general measure-theoretic formulation and exceptional-fiber clauses. The Aalto PDF exceeded the web reader size limit; downloaded and extracted with PyMuPDF, then read Chapter 6 §§6.1–6.2, printed pp. 91–96 (PDF pp. 121–126), including Definition 6.1, Properties 6.2–6.3, Theorem 6.5 and its complete proof. Its equations (6.11)–(6.16) match prediction, evidence and update under the stated Markov/observation structure. These density formulas do not replace the local probability-kernel and null-fiber arguments.

## Completed review: level-3 examples

`ex-finite-hidden-markov-filtering-and-smoothing`: four steps and seven suppliers checked. Independently computed filter (9/14,5/14) and smoother (5/14,9/14), with evidence 1/2 then 7/16. The backward likelihoods (5/8,3/8) give smoothing masses (5/32,9/32) before normalization. All finite-density hypotheses hold; no defect.

`ex-impossible-observation-zero-evidence-fiber`: two steps and seven suppliers checked. The model has Y=a almost surely and predictive delta_0. At b, evidence is zero and the prescribed filler is delta_0; every other probability rho at b gives exactly the same conditional event identities. No division or uniqueness at impossible b is asserted; no defect.

`ex-scalar-gaussian-state-space-filter`: five steps and all 26 direct supplier statements/definitions checked. Restricted Lebesgue measure has the explicit common finite exhaustion; product-Borel equality and continuity give jointly measurable normal kernels. Translation, nonzero dilation and simple approximation justify the density algebra under Countable Choice supplied by AC. The convolution gives N(0,2). Completing the square at y=2 gives evidence exp(-2/3)/sqrt(6pi) and posterior N(4/3,2/3). The null singleton caveat is essential and correctly proved; no defect. These three examples and the recursion theorem retain their actual uses of the clarified algorithm unchanged. All three risk reviews complete.

## Decisions and supporting maintenance

Exactly two decisions are written in `research/bayesian-computational-statistics-62-alpha-batch-41-3a-decisions.json`, group `batch-41` (the original scope group `m` remains unchanged):

- `touched:41:alg-recursive-bayesian-filter`: `accepted_repair`, confidence 1. Closed polish defect `bcs62-3a-b41-initial-filter-output` records the omitted explicit T=0 return.
- `touched:41:thm-dominated-state-space-filtering-recursion`: `accepted_repair`, confidence 1. Closed nonfatal defect `bcs62-3a-b41-joint-observation-law` records the missing explicit marginal-law justification before change of variables.

No new reader/refuter finding or page obligation was invented. The pre/post snapshots bind distinct source hashes for these two carriers; current raw sources match the frozen post snapshots exactly. All seven batch item sources remain unchanged by Alpha. The reader report documents the changes; this report does not claim a separately recovered full historical preimage. The current argument was independently checked, rather than inferred from a hash or prior verdict.

The initial focused strict contract check found 15 mechanical inconsistencies: stale step-use mappings after the reader's renumbering and stale full algorithm quotations in four consumer contracts. Synchronized only those mappings/quotations, the algorithm's manifest Definition mirror, and the seven specific risk reviews. These bookkeeping discrepancies create no additional mathematical defect rows. Existing derivations, dependencies, provenance and stable IDs remain sound; no material rewrite or judge-record invalidation occurred. Both confirmed reader repairs have closed ledger rows owned at `3a-adjudicate` and referenced by the decisions.

Repository item/reference search found the recursion theorem and exactly three example consumers of the algorithm, all inside this batch. Their actual uses were checked above. The A-page summary remains accurate. The two page-prerequisite records remain valid: BCS-02 distinguishes fiberwise normalization from a joint conditional law; SME-44 supplies the ordered finite path law. Added the owned-consumer disposition to `briefs/tasks/frontier-dependency-ledger.md`. No published item was edited, no defective published supplier was identified, and no published-ledger entry or lock was needed. No outside consumer repair, withdrawal or escalation is proposed.

## Local checks and handoff

- Initial risk report: seven HIGH/CRITICAL items, zero errors. Specific risk reviews completed in dependency order; final `--require-reviewed` check: seven items, zero errors.
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-41.proof-contracts.json --strict`: 7/7 checked, zero errors or warnings after synchronization.
- `node tools/tsx-run.mjs tools/precheck.mts items/alg-recursive-bayesian-filter.md items/thm-dominated-state-space-filtering-recursion.md`: one applicable proof checked, zero failures; the algorithm has no proof section.
- `node tools/rendercheck.mjs items/alg-recursive-bayesian-filter.md items/thm-dominated-state-space-filtering-recursion.md`: two files pass YAML and KaTeX checks.
- `node tools/defect-ledger.mjs append --file /tmp/bcs62-b41-ledger-rows.json`: two closed rows appended with the tool's serialized append/render transaction. Subsequent run-scoped ledger validation: zero errors.
- Final formatting command, after all accepted-source and metadata work: `node tools/proof-layout.mjs items/alg-recursive-bayesian-filter.md items/thm-dominated-state-space-filtering-recursion.md`: two items, six proof steps, zero defects.
- Exact inventory check: 2/2 owed decisions, no extras; all seven raw item hashes still equal frozen post-reader hashes.

No unresolved mathematical uncertainty, substantial missing prerequisite, open local defect or blocker remains. These are local review/check results only. The engine retains decision hashing, the gate battery and all stage transitions.
