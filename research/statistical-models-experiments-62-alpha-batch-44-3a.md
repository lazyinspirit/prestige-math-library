# Batch 44 Step 3a adjudication

Run: `statistical-models-experiments-62`; group: `batch-44`.

Reviewed the scope, order task, reader report/findings, refuter report, pre/post snapshots, manifest and cross-batch dependency record. The snapshots agree: no touched or page obligations; exactly `reader:44:1` is owed.

Completed in dependency order: Gaussian stacking lemma (level 0), general kernel definition (level 1), linear-Gaussian definition and finite-horizon existence/uniqueness (level 2). Full risk evidence is recorded per item in the batch contract. No item edits or consumer repairs were needed.

Current claim conventions: finite T>=0, positive finite vector dimensions, pointwise probability kernels, symmetric PSD Gaussian covariances, and explicit inherited AC. Relevant source sections are Meinshausen section 4.1, PDF pages 46–48, and Wang section 9.1, PDF pages 146–147. All direct supplier bodies for these four items were opened; model adequacy and stationarity are contextual and add no assumptions.

Next: finish the level-3 path theorem, repair its inaccurate contract boundary citation, close its routed ledger finding, and review the two level-4 examples. No unresolved mathematical prerequisite so far.

Level 3 complete: `thm-linear-gaussian-state-space-path-law-is-jointly-gaussian`, all four steps and sixteen suppliers reviewed. Product probabilities, translated measurable kernels, Tonelli and finite linear projection establish the exact path law including T=0 and singular covariances. `reader:44:1` is confirmed_nonfatal: the old degenerate boundary cited nonexistent step 4.1 and misdescribed 2.1. Corrected it to 1.2 (characteristic functions), 2.1 (kernel integration), and 3.1 (Gaussian affine closure/PSD). Repair confidence: 1. No item text, statement, definition, manifest or provenance changes; no judge invalidation or consumer repair is needed.

Level 4 first example complete: `ex-linear-gaussian-singular-state-covariance-positive-innovation-covariance`. All three verification steps and seven suppliers checked. X1=0 almost surely gives state variance 0; residual r1 has variance 1, hence positive definite scalar innovation covariance. No edits or unresolved obligations. Next: distinguish the two observation-kernel models.

Level 4 second example complete: `ex-state-space-model-same-dynamics-distinct-observation-kernels`. All three verification steps and eleven suppliers checked. The common state is X1=X0; independent centered observation noise gives Cov(X0,Y1)=c, equal to 1 and 2, distinguishing the actual joint laws. Finite moments justify this test. No repair is needed.

The current contract citation quotations were compared against every named supplier section: all are exact current sections. Both page summaries were opened and agree with the finite-horizon results; there are no routed page decisions. No published supplier defect was found, so the published-consumer ledger requires no entry. No Statement or Definition changed and no consumer repair or withdrawal is proposed. The existing batch cross-dependency records retain their stable IDs and statuses.

The single routed decision is `reader:44:1`, `confirmed_nonfatal`, closed by defect row `statistical-models-experiments-62-3a-batch-44-1` in `research/defect-ledger.jsonl`. The serialized append tool appended one row and refreshed its generated view. The repair is complete with confidence 1. All other changes to the batch contract are the required specific risk reviews, not additional defect closures.

Sources consulted directly: [Meinshausen, section 4.1](https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf), PDF pages 46–48 (the downloaded PDF prints 46–48), describes latent Markov states, conditionally independent state-dependent observations, density factorization and linear equations. The local kernel formulation does not assume the existence of those densities. The web PDF reader failed for this URL; curl retrieved the PDF and PyMuPDF extracted the complete relevant section. [Wang, section 9.1](https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf), PDF pages 146–147 (printed 143–144), equations (9.1)–(9.2) and assumptions (a)–(b), permits degenerate observation covariance and assumes uncorrelated noises. Local mutual Gaussian independence is an explicit stronger hypothesis, not inferred from those assumptions. Local proved suppliers supply the full mathematical construction; no external source is substituted for a proof. Review covered the actual direct supplier interfaces and their arguments, not an audit of their entire transitive published closure.

No item or page source was edited, so proof reflow, precheck and the changed-item final proof-layout command are not applicable. No material proof rewrite occurred; existing verification records were preserved. No judging, stamping, dispatch, certification or engine gate was attempted.

Local validation completed:

- Initial `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-44.proof-contracts.json`: seven CRITICAL items routed, zero errors.
- After all reviews, the same command with `--require-reviewed`: seven items, zero errors.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-44.proof-contracts.json --strict`: 7/7 items checked, zero errors and zero warnings.
- JSON/inventory check: exactly the owed `reader:44:1` decision; its single defect reference resolves to the closed `fixed` row caught at `3a-adjudicate`.
- Pre/post item, contract and page snapshots agree. Current raw bytes of all seven items equal their post-reader `item_sha256` values. Thus the historical item preimages remain known and unchanged; no current-content exception is used.

Blockers: none. Required report, decisions, contract risk reviews, closed defect row and owned-consumer dependency notes are complete. Engine hash stamping and subsequent gates remain engine-owned.
