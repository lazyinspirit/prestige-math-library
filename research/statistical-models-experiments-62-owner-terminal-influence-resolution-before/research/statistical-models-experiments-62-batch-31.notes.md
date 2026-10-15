# Batch 31 — Independent-subject terminal influence limits

Run: statistical-models-experiments-62  
Assigned pair: independent-subject-terminal-influence-limits and its examples companion  
Current scheduling input in the dispatch: be0b7aca66787065a1de6e365a80730a6752b56b03a5c15b6c6abcb95603d30d

## Plan/design reconciliation

The assigned pair identity, order 1978/1979, category, titles, companion, and direct page requirements match the current plan-spec.json and the controlling design section in plan-statistical-models-experiments-track.md L227. The page-level plan requires counting-process-compensators-and-integrals; the design says SME-30 is an item-level supplier only when martingale integrals are used. I retained the page requirement and authored no integral claim or item dependency on SME-30.

The design's grouped formula has fixed finite G and rho_g in (0,1); the theorem states G>=2 and sum_g rho_g=1, consistent with deterministic group sizes summing to n. The statement that each consumer must prove its own estimator expansion is retained. The A page is terminal and finite-dimensional; it asserts neither a process CLT nor a functional martingale CLT. The B page contains the IID influence sum, grouped variance calculation, and uncontrolled-denominator example.

## Item inventory and dependency levels

The authored manifest contains two A theorems and three B examples (five items, below the 100-item page cap). The scoped item-DAG check found no cycles and these levels:

| Item | Page | Level | Argument and direct dependency basis |
|---|---|---:|---|
| thm-iid-terminal-influence-limit | A | 0 | Map IID subjects through the measurable influence function, apply the published multivariate IID CLT, and add the supplied o_P(n^-1/2) remainder by vector Slutsky. |
| thm-independent-groups-terminal-influence-limit | A | 0 | Apply the multivariate IID CLT within each group, scale by deterministic allocation factors, combine independent scalar projections by characteristic functions, then use Levy's criterion, Cramer–Wold, and vector Slutsky. Group laws may differ. |
| ex-bernoulli-terminal-influence-limit | B | 1 | The Bernoulli sample mean has the exact influence expansion phi(b)=b-p and variance p(1-p); depends on the IID theorem. |
| ex-independent-groups-weighted-mean-limit | B | 1 | The fixed-weight estimator has exact contributions rho(X-p_1) and (1-rho)(X-p_2), giving variance rho p_1(1-p_1)+(1-rho)p_2(1-p_2); depends on the group theorem. |
| ex-uncontrolled-risk-set-denominator | B | 1 | A moving risk threshold gives an empty denominator with probability exactly 1/2 and a root-n error that is not tight; depends on the IID theorem and the published weak-convergence/tightness implication. |

The batch manifest retains the page edge from batch 31 to batch 30. In-run item dependencies are only from the B examples to the A theorem items; external prerequisite items do not raise item levels.

## Supplier checks and page prerequisite status

I inspected the actual published definitions and proofs used by the item dependencies: the asymptotically linear estimator definition (which does not assert normality), IID and independent-event definitions, covariance definition, multivariate IID CLT, vector Slutsky theorem, continuous mapping theorem, characteristic-function product/normal/continuity results, Cramer–Wold theorem, vector stochastic-order calculus, and Axiom of Choice definition. The theorem's choice assumptions and uses are explicit in its statement, dependency array, [A1], and proof tags.

At the time the five Step-1 decisions were recorded, the batch-30 A/B manifests had empty item arrays and the required A-page body was absent. The exact unresolved declared supplier was the page counting-process-compensators-and-integrals (batch 30), whose planned interface requires a finite horizon, simple unit-jump counting process, predictable Y and nonnegative predictable intensity lambda, A_t=integral Y_s lambda_s ds with E[A_T]<infinity, the model contract that M=N-A is square-integrable, bracket and predictable-integral isometry results, an L2 extension only for E integral H^2 dA < infinity, and no-simultaneous-jump conditions for cross-brackets. Accordingly, all five Step-1 decisions were recorded as escalated, not ready.

During the final handoff audit, batch 30's A-page body and all 14 listed A-item bodies had appeared; its current manifest also lists three B examples. I inspected the actual contract, bracket definitions, bounded-step integral definition, L2 domain, density/isometry/extension arguments, and cross-bracket argument, including their full local proofs. The interface items include [[def-counting-process-intensity-and-compensator-contract]], [[def-optional-and-predictable-brackets-for-counting-processes]], [[thm-compensated-counting-process-brackets]], [[def-elementary-predictable-counting-process-integral]], [[lem-elementary-counting-process-integral-isometry]], [[thm-l2-counting-process-integral-isometry]], and [[thm-cross-brackets-vanish-under-no-simultaneous-jumps]]. The supplied contract explicitly assumes M=N-A is square-integrable and does not infer compensator existence from the intensity display; the integral extension is restricted to finite compensator energy. These bodies are still draft and do not constitute independent approval. None of our five item proofs uses a stochastic integral or cites a batch-30 item, so there is no item-level dependency on SME-30; the plan-declared A-page edge affects the handoff status of all five records. The already-recorded escalations must remain unchanged; owner reconciliation is required to determine whether the now-present draft supplier body satisfies that page-level gate. No SME-30 excerpt, acceptance, or readiness was inferred.

The required external pages asymptotic-convergence-consistency-and-identification, central-limit-theorems, and modes-of-convergence-for-random-variables exist and their relevant supplier bodies were inspected. No missing supplier item ID was invented.

## Source reading and fetch evidence

| Source | Read passage | Results/disposition |
|---|---|---|
| Sourav Chatterjee, Stats 310A (Math 230A) Lecture Notes, 115-page PDF | Complete source retrieved; §§8.5.3, 8.8, 8.9.1, PDF pp. 105–108 / printed pp. 101–104 inspected, including the Polish-space Slutsky proof, Cramer–Wold proof, and multivariate IID CLT proof. | Inline support for both A items; local proofs use the current published supplier statements and prove the finite-group combination. |
| Rick Durrett, Probability: Theory and Examples, 5th ed., 490-page PDF | Complete source retrieved; §3.10, PDF pp. 204–209 / printed pp. 196–201 read through Theorems 3.10.5–3.10.7 and the multivariate CLT proof. | Inline independent book treatment of characteristic-function convergence, Cramer–Wold, and the multivariate IID CLT. |
| Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 16, 13-page PDF | Complete lecture read; PDF pp. 9–12, including the delta-method remainder argument and its final continuous-mapping/Slutsky step. | Inline support for the finite-dimensional Slutsky uses; no estimator expansion is imported. |

source-fetch-check --stamp succeeded for all 3/3 full-text URLs; check mode also succeeded for 3/3. Each coverage entry records its URL, locator, supported item, harvested-result disposition, fetch stamp, and one successful attempt. There were no retrieval failures, retries, or dropped sources, so no source_resolution failure record was created. The planned Stanford Units 11/13 process-CLT citations were not used as proof sources: the controlling design itself says those units refer proofs to Fleming–Harrington, and no process limit is imported here.

## Scoped checks and blockers

- Item dependency levels, scoped to this batch manifest: passed, 5 items; A level 0, B level 1; no cycles.
- Local batch DAG calculation for batches 30 and 31: passed; batch 30 level 0, batch 31 level 1 with prerequisite 30.
- Proof contracts: passed strict check, 5/5, 0 errors and 0 warnings.
- Precheck via node tools/tsx-run.mjs tools/precheck.mts ... --json: passed, 5/5. A plain node tools/precheck.mts invocation is unsupported by this Node runtime; the repository wrapper is the valid runner.
- Proof layout on the five changed items after final edits: passed, 14 steps, 0 defects.
- Content policy on the assigned batch manifest: passed, 5 scoped items, 0 errors and 0 warnings.
- Depcheck with an explicit five-item selection: passed.
- Rendercheck on the five items and two assigned pages: passed, 7 checked, no errors or warnings.
- Source-fetch check: passed, 3/3.

The dispatch pinned the shared batch-dependency input hash be0b7aca66787065a1de6e365a80730a6752b56b03a5c15b6c6abcb95603d30d. A later shared-workspace refresh produced the recorded hash 5401322ce3a43475d6235fc3f6def6a2baf8d160caf505c09b4352f7dc6d2890; this pair did not edit that shared file. After the final batch-31 manifest edits, the official non-writing recomputation gives current input hash 3ecd0117a9d101092012a6ef52951d7ae10a9e6b0e59d63ff25d96b672984ebc. The graph still has batch 30 at level 0 and batch 31 at level 1 requiring batch 30, with no cycle; the stored shared artifact is stale and was left to the owner to refresh. The graph calculation confirms scheduling only; it does not supply the still-empty batch-30 item bodies.

The full-run item-dependency CLI also reports empty item inventories in other currently authoring batches. This pair's scoped item-DAG result is the applicable result for its five items.

The two A-item bibliography titles currently say “PDF pp. 101–104”; source inspection shows those are printed page labels, corresponding to PDF pp. 105–108. The coverage record above carries the correct paired locator. The Step-1 decisions are escalated and remain untouched; the two frontmatter locator labels need owner reconciliation before readiness.

One attempted node tools/depcheck.mjs --help probe did not display help: this command has no help mode and ran the whole-library check, which exited 1 on unrelated existing published-audit findings. It changed no files and is not used as the scoped result above.
