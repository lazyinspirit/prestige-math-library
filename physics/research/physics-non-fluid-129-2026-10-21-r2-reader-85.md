# Step 3a reader report — batch 85

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: read-only reader  
Scope: batch `85`

## Opened inventory

Read the batch manifest and both assigned page carriers:

- `library/classical-statistical-mechanics/csm-frontier-probability-interfaces.md`
- `library/classical-statistical-mechanics/csm-frontier-probability-interfaces-examples.md`

Read all nine assigned items in dependency order:

- `def-csm-frontier-local-topologies`
- `def-csm-frontier-vague-topology`
- `def-csm-frontier-finite-generator-chain`
- `lem-csm-frontier-finite-doob-bound`
- `lem-csm-frontier-finite-entropy-chain`
- `lem-csm-frontier-cylinder-weak-equivalence`
- `lem-csm-frontier-finite-generator-chain-existence`
- `lem-csm-frontier-finite-chain-martingale`
- `ex-csm-frontier-singular-local-limit`

Read the assigned proof-contract inventory and checked its declared step maps, citations, boundary rows, and finite-check dispositions against the current carriers. Read the direct item suppliers needed for the arguments: `def-csm-finite-range-lattice-interaction`, `def-axiom-of-choice`, `def-continuous-time-adapted-process-and-martingale`, `thm-basic-algebra-and-order-properties-of-conditional-expectation`, `cor-cauchy-schwarz-for-random-variables`, `cor-layer-cake-formulas-for-random-variables`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-monotone-convergence-for-the-integral`, `lem-it-finite-classical-kl-nonnegative-equality`, `def-natural-logarithm`, `thm-natural-logarithm-laws`, `thm-ionescu-tulcea-construction-of-a-markov-chain`, `thm-dynkin-pi-lambda`, `def-progressively-measurable-and-predictable-process`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, and `lem-continuous-finite-variation-martingale-is-zero`. Also read the available published suppliers `thm-tower-property-of-conditional-expectation` and `thm-taking-out-what-is-known` to check the conditional-expectation steps.

For page context, opened `csm-gibbs-lattice`, `csm-stochastic-response`, and the published mathematical page `quantum-information-measures`. The planned page `counting-process-compensators-and-integrals` is named in the plan but has no current library carrier; it is not used as a mathematical premise in the assigned item proofs.

## Review and edits

No edits were made. This reader assignment is read-only. I found no TikZ or tikzcd diagrams in the assigned carriers. The local arguments for the Doob bound, entropy chain/grouping identity, cylinder/weak-convergence equivalence, uniformized finite-state chain construction, martingale/bracket formula, and finite-permutation example are otherwise supported by their stated hypotheses and preceding steps.

The following uneditable defects remain and are routed in the findings JSON:

- `def-csm-frontier-local-topologies` — `ill-formed`, fatal. The local weak-convergence clause uses probability measures and pushforward notation without specifying the unit-mass condition or the formula `(pi_F)_*mu(B) = mu(pi_F^{-1}(B))`; no declared dependency supplies these definitions.
- `def-csm-frontier-vague-topology` — `ill-formed`, fatal. The test functional `integral f d xi` is load-bearing but integration against the defined counting measure is not defined or supplied by a dependency. The finite-sum formula would make the topology self-contained.
- `def-csm-frontier-finite-generator-chain` — `ill-formed`, fatal. The initial probability vector/law is not specified entrywise, and the `q=0` branch does not define `N_t` although the stated construction filtration uses it. The assigned existence proof separately sets `N_t=0` in that branch, confirming the missing definition.
- `lem-csm-frontier-finite-entropy-chain` — `ill-formed`, fatal. Probability vectors, first-coordinate marginals, and conditional vectors are named without their coordinate conditions/formulas. The chain-rule statement uses all three objects.
- `lem-csm-frontier-finite-generator-chain-existence` — `unlicensed-inference`, nonfatal. Proof 5.1's final conditioning from `G_s` to `F_s` invokes the tower property. The proof contract and item dependencies do not include it; the available exact supplier is `thm-tower-property-of-conditional-expectation`.
- `lem-csm-frontier-finite-chain-martingale` — `unlicensed-inference`, nonfatal. Proof 3.1's subdivision estimate requires the tower property, and its `2 M_u Delta M` term requires taking the bounded `F_u`-measurable factor outside conditional expectation. The cited `thm-basic-algebra-and-order-properties-of-conditional-expectation` statement supplies neither identity. The available exact suppliers are `thm-tower-property-of-conditional-expectation` and `thm-taking-out-what-is-known`.
- `ex-csm-frontier-singular-local-limit` — `ill-formed`, nonfatal. “Uniform probability” on `Omega_n` is used in the counting argument without specifying the atom mass `P_n({pi}) = 1/(2n)!`.
- Published dependency `lem-it-finite-classical-kl-nonnegative-equality` — `ill-formed`, nonfatal. It uses “probability vectors” without defining their coordinate conditions or declaring `def-finite-probability-vector`; the assigned consumer `lem-csm-frontier-finite-entropy-chain` reaches it through `deps`.

## Page verdicts

- `csm-frontier-probability-interfaces`: page identity, draft status, item inventory, and prerequisite order match the batch manifest. The frontmatter-only page format is expected for this run. Item-level definition/proof findings above remain.
- `csm-frontier-probability-interfaces-examples`: page identity, draft status, example placement, and prerequisite on the A page match the manifest. The frontmatter-only page format is expected. Its example has the setup-definition finding above.

## Evidence limits and blocker

Norris, *Advanced Probability*, Section 5.1 (printed pp. 30–31), directly defines weak convergence by bounded continuous tests; Section 4.3 (printed pp. 26–27) gives the cadlag martingale maximal inequality context. Last and Penrose, *Lectures on the Poisson Process*, Chapter 2 Sections 2.1 and 2.4 (printed pp. 10–11 and 16–18), define counting-measure point processes and local finiteness and discuss identification by continuous bounded-support tests. Touchette, “The large deviation approach to statistical mechanics,” Section II, equations (15)–(18), gives the empirical probability-vector and relative-entropy rate-function context; the assigned entropy chain rule and grouping step are established locally in the item proof.

The cited Friedli–Velenik and Kallenberg PDFs returned service errors, and the cited Durrett and Aldous–Fill PDFs timed out in retrieval. Their source locators were therefore not independently verified in this review. The assigned mathematical deductions above do not rely on those sources in place of their local proofs. I did not re-audit the transitive proofs of the published mathematical suppliers. No blocker prevents completion of this read-only report; the findings remain for owner disposition.
