# Batch 69 authoring notes

Run: machine-learning-all-101-2026-10-19 · role: beta · pair: conditional-flow-matching-and-transport-paths.

## Controlling plan and scope

The owner authoring direction is present and controls stale task/design wording. The assigned task points to line 447, but the current plan's ML-61 heading is at line 459; the complete current section at lines 459–461 was read. The plan-spec A/B IDs, titles, category, order, companion, and page requires match the current plan/task. The plan-spec description reproduces the ML-61 scope and proof route.

There is one interface tension to preserve in the record: the task and plan-spec list compact-metric-kantorovich-rubinstein-duality as an A-page requirement, while the ML-61 scope and owner direction say P-KR-02 is required only if adding a W1 claim. This pair makes no W1 claim, so the compact KR theorem is not an item-level logical supplier; the declared page requirement is retained unchanged. Neural ODE flow existence is a logical supplier for the exact-flow sampling algorithm. No numerical solver-error theorem is used because no solver-error claim is made.

The four plan-proposed items remain present. Four local suppliers were added on A before consumers: normalization of the conditional mixture, conditional-to-marginal continuity, the affine conditional flow velocity, and a choice-free affine-dilation optimality lemma. The A page contains eight items, below the 100-item cap; the B page contains two examples.

## Inventory and dependency levels

The batch manifest inventory was filled before item carriers. Levels count only in-run logical suppliers; external published suppliers and batch/page requirements do not raise an item level.

| Item | Page | In-run suppliers | Level |
|---|---|---|---:|
| def-probability-path-and-velocity-field | A | none | 0 |
| lem-conditional-mixture-is-a-probability-path | A | def-probability-path-and-velocity-field | 1 |
| lem-conditional-to-marginal-continuity-equation | A | def-probability-path-and-velocity-field | 1 |
| lem-affine-conditional-path-velocity | A | none | 0 |
| lem-affine-dilation-is-quadratic-cost-optimal | A | none | 0 |
| thm-conditional-flow-matching-gradient-identity | A | def-probability-path-and-velocity-field; lem-conditional-mixture-is-a-probability-path; lem-conditional-to-marginal-continuity-equation | 2 |
| thm-gaussian-conditional-optimal-transport-map | A | def-probability-path-and-velocity-field; lem-affine-conditional-path-velocity | 1 |
| alg-flow-matching-training-and-sampling | A | def-probability-path-and-velocity-field; thm-conditional-flow-matching-gradient-identity | 3 |
| ex-gaussian-prior-to-data-conditional-interpolation | B | thm-gaussian-conditional-optimal-transport-map | 2 |
| ex-mixture-of-straight-paths-has-nonlinear-marginal-velocity | B | def-probability-path-and-velocity-field; lem-conditional-mixture-is-a-probability-path; lem-conditional-to-marginal-continuity-equation; thm-gaussian-conditional-optimal-transport-map | 2 |

No cycle is present in this inventory.

## Axiom branches and claim limits

The probability-path mixture, continuity-equation, objective-gradient, exact-flow algorithm, and generic affine-cost argument are choice-free relative to their supplied measures. The Gaussian path theorem and the two Gaussian examples explicitly assume AC because the library's standard and multivariate normal-law definitions do. The generic affine-cost lemma remains a separate choice-free result and supplies the Gaussian optimality proof without a general OT theorem. No marginal optimal-transport claim, compact KR/W1 claim, empirical comparison, or numerical solver-error guarantee is made.

## Supplier inspection

- The current compact KR page is draft. Its actual theorem body proves the arbitrary compact-metric Borel-probability interface without a choice premise and expressly makes no compact primal or dual attainment claim. The ordinary full-run Step-1 snapshot has no unresolved work row for thm-kantorovich-rubinstein-duality-on-compact-metric-spaces. It is retained as scheduled page context only.
- The current Neural ODE page is draft. The actual def-neural-ode and thm-neural-ode-global-smooth-flow bodies were read. The flow theorem requires a jointly smooth field, uniform state-Lipschitz and origin bounds on each compact parameter neighborhood, and a finite interval; it supplies a unique exact global flow. Its proof uses explicit endpoint sequences and a finite chart cover, so no choice axiom is used. The ordinary full-run Step-1 snapshot has no unresolved work row for def-neural-ode or thm-neural-ode-global-smooth-flow.
- The current run scope ledger declares allow_in_run_dependencies: true. The final Step-1 snapshot reports 900 ready of 1072 items and closed: false; all ten assigned items are ready and the examined KR/Neural-ODE suppliers have no unresolved work rows. This confirms only current authoring-readiness inputs, not independent proof approval.
- Batch dependency artifact row: level 2, requires batches 62 and 65. The dispatch task names input SHA-256 `9316da3a7260b3e150511d2d9bd02e14622424c0c88a2f61cacc837b663a0f85`. The artifact changed while the run was live: pre-authoring input/file hashes were `a2f1ae59041f4d86ac9c65681fcab400938ebf5cb73d037e3a86f9660db51863` / `202bf70cd4d46e097b0d36450ecca5b44bb8ff3a0b534073b2fdf3608843360a`; subsequent observations were `9870bc55db01dc085eb641dfbb127d4f2f6ff671d766166b3de5a1beca24042f` / `f2adf7d0fc1fcd0059ec4d2774fac6355a1f397593d364025d9258a99fb6d543` and `ae5958f3538e11bf0c79b52ca607ed705f1fd575eae21b6d734fffbe1c15ae0c` / `076acaf2707013be98ad8ce34d50bdeefa2a5b548dd60353fd1705555d8ecdf0`; the final pre-handoff observation is `f68f1f3bab78ece4cac4fdfec1dfdf450a3f163bfc54dbe81ba8c99d71bab13f` / `f67de7c77457c5c85f03476ca95886c82544413f7329861e3f62aedb9724d436`. The exact sequence is preserved in dependency-inputs; the shared scheduling artifact was not edited.

## Source reading

- Lipman et al., Flow Matching for Generative Modeling, full-text arXiv HTML https://arxiv.org/html/2210.02747: read §2, §3.1 Theorem 1 and Appendix A proof, §3.2 Theorem 2 and Appendix A proof, §4 Theorem 3, §4.1 conditional OT path, and the corresponding Appendix A affine-flow derivation. The proof route requires explicit Leibniz regularity; the objective proof assumes integrability/Fubini and bounded fields/parameter derivatives. Its experiments are not imported.
- Holderrieth and Erives, Introduction to Flow Matching and Diffusion Models, complete MIT 6.S184 lecture notes at https://arxiv.org/html/2506.02070: read §§3.1–3.3, Gaussian-path Example 8, marginalization Theorem 9 and proof, Gaussian-field Example 10 and proof, flow-matching Theorem 12 and complete proof, Algorithm 3, and the summary. The notes' training/quality claims are not imported.
- Fjelde, Mathieu, and Dutordoir, An Introduction to Flow Matching, Cambridge MLG full text https://mlg.eng.cam.ac.uk/blog/2024/01/20/flow-matching.html: read the Gaussian conditional path velocity derivation and linear interpolation section, including the inversion and substitution steps.
- Peyré and Cuturi, Computational Optimal Transport, full-text arXiv HTML https://arxiv.org/html/1803.00567: read §2.6, Remark 2.31 and equations (2.40)–(2.42). The source derives the general Gaussian map using change of variables and Brenier; this batch instead proves the isotropic affine case directly by a coupling lower bound.
- The browser PDF extractor rejected the Lipman and MIT PDF endpoints because their bodies exceeded its extraction limit; the matching full-text arXiv HTML versions were opened and the full relevant reasoning inspected. An optional 2025 OT4ML PDF candidate returned 404; its arXiv HTML endpoint was also unavailable. It was not harvested or used: the successful full-text Computational Optimal Transport book and the local complete affine-cost proof cover the relevant OT context. No source used by an item remains unresolved.
- Exact locators, per-result dispositions, and fetch stamps are recorded in the batch coverage/source-coverage files. Empirical sections are out of scope.

## Item progress

| Item | Claim/convention and current action |
|---|---|
| def-probability-path-and-velocity-field | Authored; scoped checks pass; Step 1 decision ready. |
| lem-conditional-mixture-is-a-probability-path | Authored; scoped checks pass; Step 1 decision ready. |
| lem-conditional-to-marginal-continuity-equation | Authored; scoped checks pass; Step 1 decision ready. |
| lem-affine-conditional-path-velocity | Authored; scoped checks pass; Step 1 decision ready. |
| lem-affine-dilation-is-quadratic-cost-optimal | Authored; scoped checks pass; Step 1 decision ready. |
| thm-conditional-flow-matching-gradient-identity | Authored; direct in-run suppliers are the probability-path definition and the two mixture/continuity lemmas; level 2. Local integrability and differentiated-loss majorants are explicit; proof-layout, precheck where applicable, rendercheck, proof-contract, and source-fetch checks pass; Step 1 decision ready. |
| thm-gaussian-conditional-optimal-transport-map | Authored; uses the affine field and choice-free affine-cost lemmas; level 1. Density derivatives and PDE cancellation are written explicitly; proof-layout, precheck where applicable, rendercheck, proof-contract, and source-fetch checks pass; Step 1 decision ready. |
| alg-flow-matching-training-and-sampling | Authored; consumes the gradient identity and the neural-ODE definition/global-flow theorem; level 3. Training convergence and solver error are not claimed; proof-layout, precheck where applicable, rendercheck, proof-contract, and source-fetch checks pass; Step 1 decision ready. |
| ex-gaussian-prior-to-data-conditional-interpolation | Authored scalar specialization of the Gaussian theorem; level 2. Includes a justified TikZ trajectory diagram; proof-layout, precheck where applicable, rendercheck, proof-contract, and source-fetch checks pass; Step 1 decision ready. |
| ex-mixture-of-straight-paths-has-nonlinear-marginal-velocity | Authored two-endpoint Gaussian mixture; level 2. Posterior-average formula, local PDE domination, and a strict doubling argument establish nonlinearity; proof-layout, precheck where applicable, rendercheck, proof-contract, and source-fetch checks pass; Step 1 decision ready. |

All ten item carriers, both frontmatter-only pages, coverage/source-coverage, proof contracts, cross-batch dependencies, dependency inputs, source fetch stamps, scoped checks, and Step 1 readiness records are complete. All ten assigned items are recorded ready.

### def-probability-path-and-velocity-field — authored

- Claim and conventions: conditional densities are relative to a supplied sigma-finite Borel measure lambda on R^d; pi is the Borel endpoint probability law; the mixture p_t is defined before asserting normalization; conditional continuity is a classical C1 equation on the open time interval; the marginal quotient is defined only where p_t>0 and its numerator is finite.
- Direct dependencies: def-borel-sigma-algebra, def-measure, def-probability-measure. In-run level 0. No choice axiom is used.
- Sources: Lipman et al., Flow Matching for Generative Modeling, §§2–3, https://arxiv.org/html/2210.02747; Holderrieth and Erives, Introduction to Flow Matching and Diffusion Models, §§3.1–3.2, https://arxiv.org/html/2506.02070. Both complete relevant full-text sections were inspected; source-fetch stamps are verified in the batch coverage files.
- Decision: the definition makes no unsupported normalization claim; lem-conditional-mixture-is-a-probability-path supplies mixture normalization. Precheck is not applicable for a definition. Renderer and final page-layout checks pass.
- Unresolved mathematics: none identified in the statement. Its level-1 normalization supplier has now been authored.

### lem-conditional-mixture-is-a-probability-path — authored

- Claim and conventions: for each time, the endpoint-mixture function is measurable, nonnegative, and integrates to one against the supplied sigma-finite reference measure; no reference measure is constructed inside the proof.
- Direct dependencies: def-probability-path-and-velocity-field; thm-tonelli-theorem-for-sigma-finite-product-spaces. In-run level 1.
- Sources: Lipman et al., §3.1, https://arxiv.org/html/2210.02747; Holderrieth and Erives, §3.1, https://arxiv.org/html/2506.02070. Their mixture construction was inspected; the complete normalization argument is local in steps 1.1 and 2.1. Source-fetch stamps and proof-contract row pass.
- Decision: use Tonelli on the actual product sigma-algebra specified in the definition; this avoids assuming a Borel-product identity or an unstated choice principle.
- Validation: proof-layout and applicable precheck, rendercheck, proof-contract, and source-fetch checks pass; no item-level dependency error was reported. No source excerpt or acceptance is claimed yet.
- Unresolved mathematics: none identified. The continuity lemma below now supplies endpoint-integral differentiation under explicit domination.

### lem-conditional-to-marginal-continuity-equation — authored

- Claim and conventions: on each compact interior time-state neighborhood, integrable endpoint domination of the density, flux, and the exact time/spatial derivatives used is sufficient for differentiating the endpoint integrals. Integrating the conditional PDE then gives the marginal PDE. No spatial integration by parts or unproved boundary-at-infinity step is used.
- Direct dependencies: def-probability-path-and-velocity-field; cor-mean-value-theorem; thm-dominated-convergence; thm-linearity-of-the-lebesgue-integral-on-l-one. In-run level 1; mixture normalization is not a logical premise of this differential identity.
- Sources: Lipman et al., §3.1 and Appendix A, https://arxiv.org/html/2210.02747; Holderrieth and Erives, §3.2, https://arxiv.org/html/2506.02070. Both source derivations were read; this carrier spells out a sufficient dominated Leibniz condition instead of leaving it implicit. Source-fetch stamps and proof-contract row pass.
- Decision: the continuous differentiability and one integrable majorant are stated on every compact subset, enough for the mean-value-theorem difference quotients and dominated-convergence limit. The theorem is restricted to the open time interval, so it makes no endpoint differentiability claim.
- Validation: proof-layout and applicable precheck, rendercheck, proof-contract, and source-fetch checks pass; no item-level dependency error was reported.
- Unresolved mathematics: none identified. Both level-0 affine suppliers below are now authored.

### lem-affine-conditional-path-velocity — authored

- Claim and conventions: for each fixed endpoint label, a C1 affine map with strictly positive scalar scale is a diffeomorphism; differentiating the map and substituting its inverse gives the unique Eulerian velocity field. The argument is deterministic and does not assume a Gaussian law.
- Direct dependencies: def-euclidean-inner-product. In-run level 0.
- Sources: Lipman et al., §4 Theorem 3 and Appendix A, https://arxiv.org/html/2210.02747; Holderrieth and Erives, §3.2 Example 10, https://arxiv.org/html/2506.02070; Fjelde, Mathieu, and Dutordoir, Gaussian conditional path derivation, https://mlg.eng.cam.ac.uk/blog/2024/01/20/flow-matching.html. The affine inverse and derivative arguments were inspected; source-fetch stamps and the proof-contract row pass.
- Decision: keep this as a separate choice-free A-page lemma because the Gaussian optimal-transport theorem and examples use its exact field formula.
- Validation: proof-layout and applicable precheck, rendercheck, proof-contract, and source-fetch checks pass; no item-level dependency error was reported.
- Unresolved mathematics: none identified. The affine-dilation supplier is complete and its scoped checks pass.

### lem-affine-dilation-is-quadratic-cost-optimal — authored

- Claim and conventions: for any centered Borel probability with finite second moment, its translated positive scalar dilation has a squared-Euclidean-cost optimal map; the attained cost is ||a||^2+(1-s)^2 m2. The result is proved for arbitrary couplings by expanding the cost and applying Euclidean and L2 Cauchy–Schwarz.
- Direct dependencies: def-probability-measure; def-law-or-distribution-of-a-random-element; def-expectation-of-a-nonnegative-or-integrable-random-variable; lem-law-of-a-random-element-is-a-probability-measure; thm-change-of-variables-for-expectation; thm-continuous-preimages-of-borel-sets-are-borel; thm-linearity-of-the-lebesgue-integral-on-l-one; def-euclidean-inner-product; thm-cauchy-schwarz-and-the-euclidean-norm; cor-cauchy-schwarz-for-random-variables. In-run level 0.
- Sources: Lipman et al., §4.1, https://arxiv.org/html/2210.02747; Peyré and Cuturi, Computational Optimal Transport, §2.6 Remark 2.31, https://arxiv.org/html/1803.00567. The source treats the Gaussian case; the broader local argument is complete and does not use Brenier's theorem.
- Decision: no choice axiom is used. Boundary cases s=1 and m2=0 are covered by the exact formula; s is restricted to positive values as required by the Gaussian conditional path.
- Validation: proof-layout and applicable precheck, rendercheck, proof-contract, and source-fetch checks pass; no item-level dependency error was reported.
- Unresolved mathematics: none identified. The Gaussian specialization is complete and its scoped checks pass.

### thm-gaussian-conditional-optimal-transport-map — authored

- Claim and conventions: for fixed endpoint $x_1\in\mathbb R^d$, standard Gaussian prior, and $\sigma_{\min}>0$, the linear mean/scale schedule gives a positive Gaussian density, conditional affine velocity, conditional continuity equation, endpoints $N_d(0,I_d)$ and $N_d(x_1,\sigma_{\min}^2I_d)$, and an optimal endpoint map with exact cost $\|x_1\|^2+d(1-\sigma_{\min})^2$.
- Direct dependencies: def-probability-path-and-velocity-field; lem-affine-conditional-path-velocity; lem-affine-dilation-is-quadratic-cost-optimal; def-axiom-of-choice; def-standard-normal-and-normal-laws; def-multivariate-normal-law; thm-nondegenerate-multivariate-normal-law-has-density; thm-algebra-of-derivatives; thm-chain-rule-for-total-derivatives; thm-derivative-of-exponential; def-euclidean-inner-product. In-run level 1.
- Proof check: density differentiation yields $\partial_t\rho=\rho[-d\dot\sigma/\sigma+\langle r,x_1\rangle/\sigma^2+\dot\sigma\|r\|^2/\sigma^3]$ and $\nabla_x\rho=-\rho r/\sigma^2$; the affine field has divergence $d\dot\sigma/\sigma$, so the continuity equation cancels termwise. The endpoint optimality proof uses only the local affine-dilation inequality, not a general OT theorem.
- Axiom branch: AC is explicitly required by the Gaussian definitions and density result; the affine flow and cost argument remain choice-free.
- Sources: Lipman et al., §§4, 4.1, Appendix A, https://arxiv.org/html/2210.02747; Peyré and Cuturi, *Computational Optimal Transport*, §2.6 Remark 2.31, https://arxiv.org/html/1803.00567. Full relevant HTML arguments were read. Scoped layout, precheck/render, contract, and source-fetch validation pass.
- Decision: state “a conditional velocity field” because the continuity equation alone need not determine a unique field; uniqueness here is only for the affine particle flow supplied by the affine-flow lemma.
- Unresolved mathematics: none identified.

### thm-conditional-flow-matching-gradient-identity — authored

- Claim and conventions: the conditional and marginal squared losses differ by $C=\int\rho\|u^c-u^m\|^2$, so their parameter gradients agree. The theorem also proves the marginal continuity equation under the local endpoint-majorant hypothesis.
- Direct dependencies: def-probability-path-and-velocity-field; lem-conditional-mixture-is-a-probability-path; lem-conditional-to-marginal-continuity-equation; def-euclidean-inner-product; thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces; thm-dominated-convergence; cor-mean-value-theorem; thm-linearity-of-the-lebesgue-integral-on-l-one; cor-cauchy-schwarz-for-random-variables; thm-cauchy-schwarz-and-the-euclidean-norm. In-run level 2.
- Hypotheses: $0<p<\infty$, finite marginal flux, conditional continuity equation, explicit local $L^1(\pi)$ domination of all time/flux derivatives exchanged, finite conditional/marginal losses and variance term, and integrable coordinatewise majorants for parameter-loss derivatives. Uniform boundedness is a sufficient special case; finite Gaussian mixtures with bounded model and parameter derivative also meet these integrability requirements. No integration by parts or tail-boundary argument is used.
- Sources: Lipman et al., §3.2 Theorem 2 and Appendix A proof, https://arxiv.org/html/2210.02747 (full proof read at lines 380–398 of the HTML); Holderrieth and Erives, §3.3 Theorem 12 and complete expansion proof, https://arxiv.org/html/2506.02070 (full proof read at lines 514–541). The papers' “sufficient decay” phrase is replaced by explicit integrability; bounded fields remain a sufficient branch. Scoped layout, precheck/render, contract, and source-fetch validation pass.
- Decision: preserve the exact gradient identity and make the hypotheses sufficient and explicit. The source theorem does not imply convergence of stochastic gradient descent.
- Unresolved mathematics: none identified.

### alg-flow-matching-training-and-sampling — authored

- Claim and conventions: sample independent $(t,x_1,x)$ triples from uniform time, endpoint law, and conditional density; form the mean conditional squared-loss gradient batch and take stated step-size updates; after training, return the exact ODE flow of a supplied initial draw.
- Direct dependencies: def-probability-path-and-velocity-field; thm-conditional-flow-matching-gradient-identity; def-neural-ode; thm-neural-ode-global-smooth-flow; def-euclidean-inner-product; thm-linearity-of-the-lebesgue-integral-on-l-one; def-law-or-distribution-of-a-random-element. In-run level 3.
- Hypotheses and limits: the objective theorem's positivity, finite-loss, local PDE domination, and parameter-derivative domination are stated as algorithm inputs. Exact sampling separately requires the neural-ODE theorem's joint smoothness, uniform state-Lipschitz bounds, and origin bounds on the finite interval. No optimizer convergence or solver-error guarantee is claimed.
- Sources: Lipman et al., §§3.2 and 6.2, https://arxiv.org/html/2210.02747; Holderrieth and Erives, §3.3 Algorithm 3 and exact ODE sampling discussion, https://arxiv.org/html/2506.02070. Full relevant sections read. Scoped layout, precheck/render, contract, and source-fetch validation pass.
- Unresolved mathematics: none identified.

### ex-gaussian-prior-to-data-conditional-interpolation — authored

- Claim and conventions: scalar specialization of the Gaussian theorem, including straight particle trajectories, the positive-variance Gaussian density and field, and endpoint optimal cost $a^2+(1-\sigma_{\min})^2$.
- Direct dependencies: thm-gaussian-conditional-optimal-transport-map; def-axiom-of-choice. In-run level 2.
- Boundary cases: $a=0$ and $\sigma_{\min}=1$ remain valid; at the latter the flow is pure translation and the cost reduces to $a^2$. TikZ diagram fixes $a=1$, $\sigma_{\min}=1/4$ and plots the exact $z=-1,0,1$ trajectories; verification does not rely on it.
- Sources: Lipman et al., §4.1 Example II, https://arxiv.org/html/2210.02747; Holderrieth and Erives, §3.2 Example 8, https://arxiv.org/html/2506.02070. Scoped layout, precheck/render, contract, and source-fetch validation pass.
- Unresolved mathematics: none identified.

### ex-mixture-of-straight-paths-has-nonlinear-marginal-velocity — authored

- Claim and conventions: a two-point endpoint law on $\{-a,a\}$ and positive-scale straight conditional Gaussian paths have a strictly positive marginal mixture whose conditional-average velocity is $\frac{\dot\sigma}{\sigma}x+\frac{a}{\sigma}\tanh(atx/\sigma^2)$, nonlinear for each interior $t>0$. The local continuity equation is verified with a finite-endpoint majorant.
- Direct dependencies: def-probability-path-and-velocity-field; lem-conditional-mixture-is-a-probability-path; lem-conditional-to-marginal-continuity-equation; thm-gaussian-conditional-optimal-transport-map; def-axiom-of-choice; thm-extreme-value-metric; def-real-exponential-function-and-e; thm-exponential-addition-formula; thm-exponential-is-strictly-increasing; cor-exponential-reciprocal-and-positivity. In-run level 2.
- Nonlinearity proof: use $0<s=\tanh y<1$ and $\tanh(2y)=2s/(1+s^2)<2s$ for $y>0$; oddness rules out an affine offset, and the strict doubling inequality rules out linearity. No global marginal OT claim is made.
- Sources: Lipman et al., §4.1 Example II and its explicit marginal-OT qualification, https://arxiv.org/html/2210.02747; Holderrieth and Erives, §§3.2–3.3, https://arxiv.org/html/2506.02070. Full relevant sections read. Scoped layout, precheck/render, contract, and source-fetch validation pass.
- Unresolved mathematics: none identified.

## Remaining owner-facing reconciliation

- Page requirement KR remains because it is the scheduled page interface; this batch makes no W1 claim and adds no item-level KR dependency. The current actual KR supplier body was inspected; it does not change the authored claims.
- The source papers use informal decay conditions for Fubini; the objective theorem replaces them with exact finite-integrability and derivative-majorant hypotheses and does not integrate by parts in space. This is a documented strengthening of the proof interface, not a weakened claim.
- The dispatch scheduling SHA-256 `9316da3a7260b3e150511d2d9bd02e14622424c0c88a2f61cacc837b663a0f85` conflicts with the final observed dependency artifact input SHA-256 `f68f1f3bab78ece4cac4fdfec1dfdf450a3f163bfc54dbe81ba8c99d71bab13f`; both are preserved with the observed history in dependency-inputs for owner reconciliation.
- Final scoped checks: `proof-layout` passes for 10 items/30 steps; precheck passes on 9 proof-bearing items with the definition not applicable; rendercheck passes on 10 items and 2 pages; strict proof-contract check passes 10/10 with no warnings; coverage checklist passes for 2 pages/24 harvested results; source-fetch check verifies 12/12 page/source occurrences (6 unique URLs). The scoped item levels match the computed graph and contain no cycles. The run-wide dependency-level check reports 38 empty scaffold inventories, none in this batch. The run-wide proof-contract-coverage check remains blocked by the empty/invalid `distribution-shift-and-domain-adaptation` inventory. The final Step 1 check reports all 10 assigned items ready, 900/1072 items ready, and 210 work entries outside this batch. Shared plans and run state were left unchanged.
