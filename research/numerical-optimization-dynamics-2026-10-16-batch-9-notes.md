# Batch 9 authoring notes

## Plan reconciliation

- The controlling run direction is `research/numerical-optimization-dynamics-2026-10-16-owner-authoring-direction.md`; the controlling pair design is T13 and its mathematical contract in `research/plan-numerical-dynamics-track.md`.
- The T13 row in `research/plan-spec.json` has the same A/B identities, category, order, and three page prerequisites as the track design. The intake record preserves the same scalar Milstein, commutative-noise, additive-Heun, MLMC, example, and cost obligations. No scope, placement, or prerequisite conflict was found.
- T13 has no matching entry in `dependency-overrides.json`. The intake's exact reusable item interfaces are `thm-multidimensional-ito-formula-for-brownian-driven-processes`, `def-mlmc-hierarchy-and-coupled-corrections`, and `thm-mlmc-complexity-under-rate-assumptions`.
- The plan text's “full reads pending” source note was a pre-authoring status. Full relevant texts have now been retrieved and inspected; this is an evidence update, not a design change.

## Supplier inspection and limits

- `thm-multidimensional-ito-formula-for-brownian-driven-processes` is published and its actual statement/proof were inspected. Its use requires AC, the usual filtration, and the stated Ito-process integrability conventions; the local statements declare these assumptions.
- `def-mlmc-hierarchy-and-coupled-corrections`, `lem-mlmc-estimator-moments-and-mse`, and `thm-mlmc-complexity-under-rate-assumptions` are published and their bodies were inspected. The complexity theorem requires bias exponent `alpha >= 1/2`, variance exponent `beta > 0`, independent level sample blocks, and per-correction work `O(h^-1)`. T13 proves the Milstein-specific rates before invoking it.
- `thm-euler-maruyama-strong-rate-under-higham-mao-stuart-hypotheses` is published and its actual statement/proof were inspected. It proves an Euler root-mean-square rate `O(h^(1/2))` under its all-finite-moment hypotheses. It does not establish Milstein order one and is not used as a logical premise.
- Higham's SIAM Review article uses a first-moment strong-error definition in §5. That is weaker than T13's root-mean-square conclusion; the Milstein RMS theorem is proved locally and does not rely on Higham's norm convention.
- No missing cross-pair supplier remains. Batch 9 has no in-run pair suppliers, so its batch dependency level remains zero. The authored item graph and levels are recorded in the batch manifest and `batch-9-dependency-inputs.json`.

## Source retrieval and reading

- Kloeden and Platen, *Numerical Solution of Stochastic Differential Equations*: the first catalog URL returned only a seven-page contents file. A recovery search found the complete 666-page PDF; the relevant strong Taylor/Milstein, weak Taylor, and explicit weak approximation sections were inspected.
- The active evidence preserves the contents-only retrieval attempt and its outcome. Its exact initial catalog URL is not retained in the active batch artifacts; the recovered full-text URL, locators, inspected sections, and fetch stamp are recorded explicitly.
- Higham, “An Algorithmic Introduction to Numerical Simulation of Stochastic Differential Equations”: complete SIAM Review full text inspected, including its strong/weak convergence definitions, scalar Milstein formula, and geometric Brownian motion example.
- Cohen and Tretyakov, *Lecture Notes for a Mini-Course on Numerical Methods for SDEs*: complete 58-page notes retrieved and relevant Milstein and weak-Heun sections inspected, including the stated general weak convergence theorem and the additive-noise Heun scheme.
- Giles, “Multilevel Monte Carlo Path Simulation,” and Lecture 8 on stochastic simulation: complete paper/lecture texts retrieved; the MLMC rate conditions, shared-Brownian coupling, and Milstein correction-rate discussion were inspected.
- Fetch evidence: Kloeden–Platen and Tretyakov are stamped as complete 666-page and 58-page PDFs. The official Higham HTML endpoint returned HTTP 403 on the initial fetch plus five retries; the complete 22-page SIAM Review PDF mirror was then inspected and stamped. The two Oxford-hosted Giles URLs timed out on the initial fetch plus five retries. Their source histories are preserved as dropped fetch endpoints, with complete alternative arguments and exact dependencies for the MLMC and area claims in `batch-9.coverage.json`; the item sources no longer rely on those endpoints.
- Exact URLs, locators, item dispositions, retrieval history, and fetch stamps are in the batch source coverage records. Sources support context; all authored mathematical obligations have local proofs.

## Inventory, axioms, and capacity

- The A page has eleven items, including the event-weighted Ito-isometry lemma that supplies the indicator-weighted stochastic bounds used by the moment and local-defect proofs; the B page has three examples. Both are below the 100-item page cap.
- AC is declared in items using the Brownian, Ito formula, or Ito-isometry interfaces that assume it. The discrete local-to-global recurrence proof is choice-free and adds no axiom.
- The only in-run logical edges are those shown in `batch-9.pages.json`; no cycle or cross-batch edge was found.

## Proof closure and scoped checks

- The event-weighted isometry is proved from elementary predictable approximations and the supplied Ito isometry. It is applied coordinatewise; no vector cross-isometry is assumed.
- The bounded-increment fourth-moment proof verifies the hitting time is a stopping time, uses the supplied stopped-process representation, derives the stopped second-moment bound from the event-weighted isometry, applies Ito's formula to the fourth power, and removes the stopping by Fatou.
- The noncommuting-area example derives the conditional product formula from the joint Gaussian density and uses the published L2 projection property of conditional expectation to prove positive endpoint residual variance.
- The weak-Heun global statement uses deterministic $X_0=x_0$ and $Y_0=x_0$, so the endpoint expectation follows directly from the transition expectation defining $u(0,x_0)$.
- Isolated dependency recomputation found 14 items, no cycles, and no label mismatches; item frontmatter dependencies and the dependency-input level map agree exactly.
- `coverage-checklist --require-destination`: 1 A page, 40 harvested results, 0 errors, 0 warnings. `proof-contract --strict`: 14/14 items, 67 exact citations, 48 mapped steps, 0 errors, 0 warnings. `proof-layout`: 14 items, 48 steps, 0 defects.
- `source-fetch-check` resolved all 10 ledger entries across the two coverage files: three active URLs are stamped in each file, and the two Oxford Giles endpoints are documented drops with local alternatives in each file. Kloeden–Platen, Tretyakov, and the recovered 22-page Higham PDF are the active stamped sources.
- The whole-run `item-dependency-levels check` reports empty inventories in other unassigned batches. Batch 9's isolated graph check passes; no other batch manifest was edited.
- The assigned Step 1 readiness records were checked after final item edits: 14/14 are `ready` with current hashes and examined direct dependency IDs. Readiness is an authoring disposition only and does not constitute independent mathematical approval.
