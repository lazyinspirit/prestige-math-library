# Batch 59 authoring notes

Run: `machine-learning-all-101-2026-10-19` · role: beta · batch: 59.

## Controlling plan and reconciliation

- No `research/machine-learning-all-101-2026-10-19-owner-authoring-direction.md` was present.
- The controlling prose section is ML-54 in `research/plan-machine-learning-track.md` (heading at line 416; scope at line 418). It specifies the Lebesgue score identity with compact cutoffs, the finite-chain CD derivative omission, and no general consistency claim from the source's pointwise LLN sketch.
- `research/plan-spec.json` gives the A page's page-level `requires: [conditional-expectation]`, and the B page requires its A companion. The prose design additionally names probability-density, expectation, Markov-kernel, and measure-integration interfaces. Reconciliation: retain the plan-spec page edges and put the concrete published item interfaces in the authored items' `deps`; no shared plan or page-requirement edit is made.
- The plan proposes three substantive carriers and the finite bias example. Two local items were added for mathematical completeness: `lem-energy-based-density-is-a-probability-measure` supplies the definition's well-definedness; `thm-contrastive-divergence-k-gradient-omits-chain-derivative` derives the finite-chain correction explicitly required by the plan's proof route.

## Scaffold inventory and dependency levels

The scaffold manifest was updated before item carriers. The dispatch scheduling input hash was `2775ee7b7522a8bc07497ecc17f4260d336375989323c6e6a673e070ba573ea4`; batch 59 remains level 0 with no prerequisite batches. After adding exact published dependencies for the finite derivative proofs, the batch-59 in-run item levels remain those below because every new edge points to a published supplier outside this run. The final full-run batch check is stale: the shared file records `5a282ed15a45dba95975f3aaf98c675c7d732fceb1981c9d55bd2db76a371856`, while recomputation from current manifests gives `fef98c298cc5a6dc996b0ab875eba3d636bde408000e27c36cd73d19d1465669`. The recomputed batch-59 row is still level 0 with `requires: []`; the owner must refresh the shared fingerprint. Item levels, from actual in-batch `deps` only:

| Level | Item | In-batch suppliers |
|---:|---|---|
| 0 | `def-energy-based-density-and-partition-function` | none |
| 1 | `lem-energy-based-density-is-a-probability-measure` | energy definition |
| 1 | `thm-score-matching-integration-by-parts-identity` | energy definition |
| 1 | `alg-contrastive-divergence-k` | energy definition |
| 2 | `thm-contrastive-divergence-k-gradient-omits-chain-derivative` | energy definition, CD-k algorithm |
| 3 | `ex-short-run-contrastive-divergence-bias` | energy definition, CD-k algorithm, chain-derivative theorem |

No cross-batch item supplier is required; published suppliers are external context, so `batch-59.cross-batch-dependencies.json` is empty. The A page stays well below the 100-item cap.

## Item 1: `def-energy-based-density-and-partition-function`

- Claim and convention: for a measurable real energy on a measure space, define `Z_theta = integral exp(-E_theta) d mu`; normalize only on the exact admissible set `0 < Z_theta < infinity`. The normalized measure is relative to the declared reference measure.
- Planned direct dependencies: `def-measure-space`, `def-measurable-function-between-measurable-spaces`, `def-nonnegative-lebesgue-integral`, `def-measure-with-density`, `def-probability-measure`. `justified_by` is the new `lem-energy-based-density-is-a-probability-measure`; that well-definedness edge is not a `deps` scheduling edge.
- Sources read: Hyvärinen, *Estimation of Non-Normalized Statistical Models by Score Matching*, full 15-page paper, §§1–2, PDF pp. 1–3; Murphy, *Probabilistic Machine Learning: Advanced Topics*, complete Chapter 24, printed pp. 849–865 / PDF pp. 883–899. URLs are in the item metadata and will be fetch-stamped in the batch source coverage.
- Supplier checks: read the current statements of the measure-space, measurable-function, nonnegative-integral, density-measure and probability-measure interfaces. `def-measure-with-density` explicitly obtains countable additivity from `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`; its proof was read. Under the supplied finite-positive normalizer, a local lemma still needs to verify scaling and total mass.
- Status: definition and local well-definedness lemma are complete and placed. The definition contract and source evidence are present; scoped content checks passed; Step 1 records are `ready` for both items.
- Next action: owner refresh of the shared run-level dependency fingerprint remains external to this batch.

## Item 2: `lem-energy-based-density-is-a-probability-measure`

- Claim: the density measure $e^{-E_\theta}\mu$ scaled by the admissible finite positive constant $Z_\theta^{-1}$ has total mass one, hence is a probability measure.
- Conventions: $Z_\theta$ and $P_\theta$ use the preceding energy definition; the nonnegative integral's indefinite measure property is the exact published interface.
- Direct dependencies: `def-energy-based-density-and-partition-function`, `def-measure-with-density`, `def-probability-measure`; in-run level 1.
- Proof route: verify the scaled measure's null mass and countable additivity directly, then compute total mass $Z_\theta^{-1}Z_\theta=1$.
- Sources: Hyvärinen full paper §§1–2, PDF pp. 1–3; Murphy complete Chapter 24, printed pp. 849–865 / PDF pp. 883–899. This helper is a local well-definedness result, not a literature theorem.
- Supplier checks: the three direct supplier statements were read. The measure-with-density supplier's supporting theorem `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure` was also read with its proof; its hypotheses match measurable $e^{-E_\theta}\ge0$.
- Status: carrier and complete proof are placed; the exact-supplier contract is present and scoped checks passed; its Step 1 record is `ready`. No acceptance is inferred from this authoring record.
- Next action: owner refresh of the shared run-level dependency fingerprint remains external to this batch.

## Item 3: `thm-score-matching-integration-by-parts-identity`

- Claim and conventions: for a $C^1$ data density on $\mathbb R^d$ and a locally weakly differentiable energy score with finite $p$-second moments and $p$-integrable divergence, derive $J(\theta)=E_p[\frac12\|\psi_\theta\|^2+\operatorname{div}\psi_\theta]+C_p$. The proof uses compact cutoffs; it does not assume a pointwise boundary limit or state consistency.
- Well-definedness: $p\,d\lambda_d$ is the data probability measure; the energy score field is $-\nabla E_\theta$. Its weak derivatives are specified by the test-function identity and unique almost everywhere, so the divergence integral is representative-independent.
- Direct dependencies: the energy, density/probability, Lebesgue-measure, integral, and dominated-convergence interfaces plus `def-c-one-map-and-local-inverse`, `def-weak-derivative-of-a-locally-integrable-function`, and `lem-weak-derivatives-are-unique-almost-everywhere`; in-run level 1.
- Axiom disposition: exactly $\mathrm{AC}_\omega$ is used through the Lebesgue-measure theorem and the weak-derivative almost-everywhere uniqueness theorem. The cutoff and test-function calculation is choice-free once those interfaces are available; no full AC is used.
- Sources read: Hyvärinen, full 15-page paper including Theorem 1 proof (Appendix A), Theorem 2 proof, §4.2 CD caveat, conclusions and examples; Murphy, complete Chapter 24, printed pp. 849–865 / PDF pp. 883–899. Hyvärinen's original coordinatewise boundary argument uses its stated pointwise boundary condition; this carrier instead proves the multivariate limit with an explicit cutoff estimate.
- Supplier checks: read the actual statements/proofs of `thm-dominated-convergence` and `thm-lebesgue-measure-is-a-complete-measure`, plus the definitions of Lebesgue measure, density measure, integrable functions and energy normalization. The DCT hypotheses match the two cutoff limits; the Lebesgue theorem explicitly uses $\mathrm{AC}_\omega$.
- Status: theorem statement and complete cutoff proof are placed. The proof explicitly constructs the cutoff and mollification extension, states both $\mathrm{AC}_\omega$ uses, and has an exact source contract. Scoped checks passed; its Step 1 record is `ready`.
- Next action: owner refresh of the shared run-level dependency fingerprint remains external to this batch.

## Item 4: `alg-contrastive-divergence-k`

- Claim and conventions: define the CD-$k$ transition-kernel procedure for a general measurable energy-model state space, with $Q_{j+1}=Q_jK_\theta$, model-invariant kernel, and the minibatch stop-gradient update. Define its scalar difference-of-relative-entropies objective on the explicit dominated finite-integrability branch. The algorithm does not assert chain convergence or gradient exactness.
- Conditional expectation convention: the generic transition law uses kernel composition. In the finite-state branch, the conditional mean of $f(X_k)$ given $X_0=x$ is the explicit sum $\sum_yK_\theta^k(x,y)f(y)$; its event-integral identity is given, so no AC/DC branch is invoked.
- Direct dependencies: `def-energy-based-density-and-partition-function`, `def-measure-kernel-and-probability-kernel`, `def-composition-of-probability-kernels`, `lem-kernel-composition-is-well-defined-and-associative`, `thm-measurability-of-integration-against-a-kernel`, `def-measure-with-density`, `def-probability-measure`, `def-nonnegative-lebesgue-integral`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-conditional-expectation-given-a-sigma-algebra`; in-run level 1.
- Sources read: Hinton, *A Practical Guide to Training Restricted Boltzmann Machines*, Version 1, PDF pp. 3–5 only (energy/partition, exact likelihood gradient, finite CD update and warning); Murphy, complete Chapter 24, §24.2.2 and RBM CD-1 algorithm, printed pp. 852–854 / PDF pp. 886–888. Hinton pages 6–19 are not used. The current composition suppliers' statements and full local proofs were inspected; their kernel constructions are choice-free.
- Decision: the algorithm covers general measurable states; the exact derivative theorem and witness use the finite-state branch, where all derivatives reduce to finite sums without an integration-under-the-normalizer assumption. Hinton's RBM update is source context; the local theorem verifies the finite-state gradient formula.
- Status: general measurable-state procedure is defined with explicit kernel composition, density/integrability branch, update inputs/output and finite-state conditional-expectation event identity. Source evidence and definition contract are present; scoped checks passed; its Step 1 record is `ready`.
- Next action: owner refresh of the shared run-level dependency fingerprint remains external to this batch.

## Item 5: `thm-contrastive-divergence-k-gradient-omits-chain-derivative`

- Claim and conventions: on a finite state space with differentiable energy and strictly positive differentiable transition matrix, derive both the exact negative log-likelihood gradient and the exact derivative of $\operatorname{CD}_k=D_{\rm KL}(q_0\|p_\theta)-D_{\rm KL}(q_{k,\theta}\|p_\theta)$. The latter has the correction $-\sum_x(\partial_jq_{k,\theta}(x))\log(q_{k,\theta}(x)/p_\theta(x))$; $\partial_jq_k$ is the finite matrix-product derivative through all $k$ kernels.
- Direct dependencies: `def-energy-based-density-and-partition-function`, `alg-contrastive-divergence-k`, `def-finite-probability-vector`, `def-derivative`, `thm-algebra-of-derivatives`, `thm-chain-rule`, `thm-derivative-of-exponential`, and `thm-logarithm-derivative-and-integral`; in-run level 2. The finite KL expression and row-vector convention are defined in the statement.
- Source reasoning: Hinton's complete relevant pp. 3–5 derives the likelihood gradient and finite CD update and explicitly warns of an ignored objective derivative; Murphy Ch. 24 §24.2.2, printed pp. 852–854, states the difference-of-KL objective and finite reconstruction procedure. The full correction formula is derived locally by differentiating finite sums; no source abbreviation substitutes for the proof.
- Status: theorem includes exact NLL and CD derivatives and an induction proof of the full matrix-product derivative. The calculus and finite-probability prerequisites are declared; its exact-source proof contract and scoped checks pass; its Step 1 record is `ready`.
- Next action: owner refresh of the shared run-level dependency fingerprint remains external to this batch.

## Item 6: `ex-short-run-contrastive-divergence-bias`

- Claim: on $\mathcal X=\{0,1\}$ with $E_\theta(0)=0$, $E_\theta(1)=\theta$, $q_0=\delta_0$, and the invariant refresh kernel $K_\theta(x,y)=\frac12\mathbf1_{y=x}+\frac12p_\theta(y)$, at $\theta=0,k=1$ the reconstruction law has mass $1/4$ at state 1, the exact likelihood gradient is $-1/2$, and the CD population direction is $-1/4$. The exact CD derivative is $-1/4-\frac18\log3$.
- Verification conventions: all laws are finite pmfs; $K_\theta$ is positive and invariant; `log` is natural; the state diagram labels source-to-target transition probabilities and is not used in the proof.
- Direct dependencies: energy and CD definitions, the finite-state gradient theorem, and the derivative/chain/exponential calculus interfaces used in its explicit two-state arithmetic; in-run level 3.
- Sources read: Hinton, full-text retrieval verified, pp. 3–5 read for the exact likelihood gradient and reconstruction update; Murphy, complete Ch.24 and §24.2.2, printed pp. 852–854 / PDF pp. 886–888. The numerical witness is generated locally and proved from the finite formulas.
- Finite-check disposition: no registered CD-specific finite-smoke check is applicable; the complete two-state arithmetic is proved in the item's Verification and will be represented in its proof contract.
- Status: example and Verification are placed on the B page, including the invariant-kernel calculation, derivative correction and explanatory TikZ transition diagram. Its contract and scoped checks pass; no finite-smoke checker is registered for CD, so the two-state arithmetic is checked in the proof itself. Its Step 1 record is `ready`.
- Next action: owner refresh of the shared run-level dependency fingerprint remains external to this batch.

## Open obligations and validation log

- Contract and proof-format checks: `proof-contract --strict` passed 6/6 with 0 errors/warnings; explicit `proof-layout` passed 6 items/14 steps/0 defects; `precheck` passed all 4 proof-bearing items. `citecheck` passed all 6; `citation-fidelity` found 29 exact quotes with no missing quotes or widening candidates; `depcheck --items-file` found 0 errors and 0 warnings across the six items and two pages; `prosecheck` and the canonical statement-first inspection each found 0 defects.
- Source checks: final `source-fetch-check` passed 5/5 sources (0 drops, 0 unresolved). The A page has Hyvärinen, Hinton and Murphy; the B page has Hinton and Murphy. Source locators, reading scope, fetch stamps, retrieval history, and the relevant logical supplier statements/proofs are in `batch-59.coverage.json` and `batch-59.source-evidence.json`.
- Dependency checks: scoped batch-59 calculation is exactly levels 0, 1, 1, 1, 2, 3 with no errors, and `cross-batch-dependencies.json` remains empty. Full-run `item-dependency-levels check` reports 140 unrelated errors: 139 other empty scaffold inventories and `lem-finite-metric-plan-lifts-to-a-borel-coupling` at level 0 instead of computed 1; there are no batch-59 item errors. Full-run `batch-dependency-levels check` is stale because recorded hash `5a282ed15a45dba95975f3aaf98c675c7d732fceb1981c9d55bd2db76a371856` differs from current recomputation `fef98c298cc5a6dc996b0ab875eba3d636bde408000e27c36cd73d19d1465669`; the batch-59 row itself remains level 0, no prerequisites. This shared input is owner-controlled and was not edited.
- Page layout: both assigned page bodies are empty and contain no summaries. The run-wide `page-layout check` stops on the unrelated empty page inventory `distribution-shift-and-domain-adaptation`; the engine has not yet set `page_layout: compact-v1` for this batch because the run remains at `1-scaffold`, so that owner/engine metadata was left untouched.
- Readiness: proof contracts, sources, dependencies, and placement are complete for all six items. The six native `step1-decisions record` files mark these items `ready` with examined dependencies and evidence; a fresh `step1Decision` read verified every record closed against its current item/dependency hash. These authoring records are not proof approval or publication.
- Active run: status recomputed from `.autopilot/machine-learning-all-101-2026-10-19` shows `1-scaffold` held for owner repair and recertification of other items, with 19/101 covered and no in-flight work. This batch did not change shared plans, runtime state, page layout metadata, or owner verdicts.
