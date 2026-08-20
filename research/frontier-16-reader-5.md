# frontier-16 independent reader report — batch 5

Run: `frontier-16`
Role: independent reader, step 6a
Batch: 5
Pages: `measures-and-their-basic-properties`, `measures-and-their-basic-properties-examples`

## Findings

Findings are recorded below with stable identifiers and are never renumbered.

### Fatal

#### R5-1 — `thm-finite-inclusion-exclusion-for-measures`

- **Exact location:** Proof step 3.1.
- **Defect:** With $J$ denoting a nonempty subset of the old index set, the proof says that negating the induction-hypothesis term indexed by $J$ gives the new set $J\cup\{r+1\}$ the sign $(-1)^{|J|+1}$. That is false: the negated coefficient is $(-1)^{|J|+2}=(-1)^{|J\cup\{r+1\}|+1}$.
- **Why it matters:** The displayed proof step states the wrong coefficient in the induction argument. The theorem is true, but this written step does not establish the claimed formula as stated.
- **Severity:** fatal.
- **Disposition:** repaired. Step 3.1 now gives $(-1)^{|J|+2}=(-1)^{|J\cup\{r+1\}|+1}$, the induction steps cite the given finite-measure hypotheses explicitly, the final discharge cites step 2.1, and the contract is synchronized.

#### R5-2 — `def-completion-of-a-measure-space`

- **Exact location:** Frontmatter title.
- **Defect:** The title calls the object “the completion sigma-algebra” unconditionally, while the Definition calls it only the completion domain/proposed set function and says the sigma-algebra conclusion is available only after the countable-choice lemma is in force.
- **Why it matters:** The title asserts the choice-dependent closure conclusion before the item or its proof supplies it.
- **Severity:** fatal.
- **Disposition:** repaired. The title is now “The completion domain and proposed completed set function of a measure space” in the item and batch manifest.

#### R5-3 — `lem-completion-domain-is-a-sigma-algebra`

- **Exact location:** Frontmatter title; also Proof step 1.2 contains `$mu(Z)=0$` rather than `$\mu(Z)=0$`.
- **Defect:** The title asserts that the completion domain is a sigma-algebra without the Axiom of Countable Choice, but the Statement and proof explicitly assume that axiom to select a representation for every member of a countable sequence.
- **Why it matters:** The title is stronger than the Statement and proof. The missing backslash additionally turns the measure symbol into unrelated variables in a load-bearing complement step.
- **Severity:** fatal.
- **Disposition:** repaired. The title now begins “Assuming countable choice”, the manifest matches it, and Proof step 1.2 uses $\mu(Z)$ correctly.

#### R5-4 — `thm-completion-of-a-measure-space`

- **Exact location:** Frontmatter title.
- **Defect:** The title says every measure space has the asserted complete extension, whereas the Statement and construction theorem assume the Axiom of Countable Choice.
- **Why it matters:** The title drops a hypothesis used in Proof step 1.2 to choose countably many completed representations.
- **Severity:** fatal.
- **Disposition:** repaired. The title now carries the countable-choice hypothesis in the item and manifest.

#### R5-5 — `ex-completion-of-borel-dirac-measure`

- **Exact location:** Frontmatter title.
- **Defect:** The title asserts the full-power-set completion without the Axiom of Choice, while the Example and verification expressly assume Choice and use it through the completion theorem and the cardinality argument producing a non-Borel subset.
- **Why it matters:** The title asserts more than the supplied verification establishes.
- **Severity:** fatal.
- **Disposition:** repaired. The item and manifest titles now begin “Assuming choice”.

#### R5-14 — batch-5 proof contracts (multiple item ids)

- **Exact location:** `research/frontier-16-batch-5.proof-contracts.json`, citation `quote` rows, including `thm-continuity-from-below-for-measures:L2`, `thm-continuity-from-above-for-measures:L1/L2`, `thm-finite-inclusion-exclusion-for-measures:L1/L2`, `prop-null-symmetric-difference-preserves-measure:L2`, `thm-first-borel-cantelli:L1/L3/L4/L5`, `cor-dominated-convergence-for-sets:L3`, and the repeated `def-measure` rows.
- **Defect:** Many rows contained only a cited clause's opening words—for example “For measurable sets $A$ and $B$ in a measure space,” or “Let $(E_n)$ ... Then”—while other rows quoted an unrelated trailing sentence, such as the numerical-limsup convention instead of the limsup inequality. These strings occurred on disk, so the substring gate passed, but they did not state the proposition for which the fact was used.
- **Why it matters:** The durable contract did not license the associated proof uses and exemplified the exact “opening words are not a citation” failure named in the dispatch. The Facts & Assumptions restatements themselves were checked against the dependency items and were mathematically faithful; the defect was in the required source-clause record.
- **Severity:** fatal (inaccurate/inadequate dependency citation record).
- **Disposition:** repaired. The 149 pre-existing short rows were replaced by their complete on-disk Definition or Statement sections; two later finite-choice citations were added in the same exact form. `proof-contract --strict` and `citation-fidelity` pass, and a direct audit confirms all 194 final rows equal the cited source section exactly.

### Nonfatal / polish

#### R5-6 — `thm-tonelli-for-nonnegative-double-series`

- **Exact location:** Original Proof steps 2.1 and 2.2 (the latter is canonically renumbered 3.1 by precheck) and their proof-contract rows.
- **Defect:** The original step 2.2 explicitly repeated step 2.1 after interchanging the indices but omitted `step 2.1` from its tags. Step 2.1 also selected one approximation index for each member of a finite row family without citing the finite-choice theorem that licenses the simultaneous selection.
- **Why it matters:** Both are missing explicit inputs, although a competent reader closes either immediately.
- **Severity:** nonfatal under the 30-second rule.
- **Disposition:** repaired: finite choice is now an explicit dependency/fact/input, the missing step input is present, precheck's phase-3 renumbering was adopted, and every affected contract use was synchronized.

#### R5-7 — `prop-measure-of-a-set-difference`

- **Exact location:** Proof steps 2.1 and 3.1.
- **Defect:** Step 2.1 invokes the decomposition of step 1.1 but does not cite it; step 3.1 uses the given finiteness of $\mu(A)$ but does not include `given` among its inputs. The contract records the first hidden input but mirrors the second omission.
- **Why it matters:** Both are explicit-input defects, but each is visible and repairable in seconds.
- **Severity:** nonfatal under the 30-second rule.
- **Disposition:** repaired. Step 2.1 now cites step 1.1, step 3.1 cites the given finiteness hypothesis, and the contract inputs match the body.

#### R5-8 — `prop-counting-measure-is-a-measure`

- **Exact location:** Proof steps 2.1 and 2.2.
- **Defect:** Both steps invoke the finite-union identity from step 1.1 without citing it in the body. Step 2.2 also chooses only an “upper bound” $n$ for the finitely many membership indices, whereas the subsequent partial sum requires every such index to be strictly below $n$.
- **Why it matters:** Choosing one more than a maximum closes the argument immediately, but the written input and endpoint are imprecise.
- **Severity:** nonfatal under the 30-second rule.
- **Disposition:** repaired. Both steps cite step 1.1, and step 2.2 takes one more than the maximum membership index to obtain a strict upper bound. The contract claim matches.

#### R5-9 — `cor-dominated-convergence-for-sets`

- **Exact location:** Proof steps 1.2 and 3.1.
- **Defect:** Step 3.1 uses $E\subseteq D$ to claim finiteness, but no preceding step establishes that inclusion. It follows at once from eventual membership in $E_n$ and $E_n\subseteq D$.
- **Why it matters:** The conclusion is correct, but the stated inputs omit the bridge that makes $\mu(E)$ finite.
- **Severity:** nonfatal under the 30-second rule.
- **Disposition:** repaired. Step 1.2 now proves $E\subseteq D$, step 3.1 cites it, and the contract is synchronized.

#### R5-10 — `lem-completed-measure-is-well-defined`

- **Exact location:** Proof step 1.2 and Facts & Assumptions.
- **Defect:** Step 1.2 uses finite union closure for null sets and monotonicity to prove $\mu(A\mathbin\triangle B)=0$, but neither fact is stated among its inputs and neither existing cited dependency states that intermediate proposition.
- **Why it matters:** The gap is routine but is an unlicensed inference under the step-input contract.
- **Severity:** nonfatal under the 30-second rule.
- **Disposition:** repaired. The earlier sigma-ideal proposition is now a declared dependency and [L3], step 1.2 cites it, and the manifest/contract record the new edge and exact source clause.

#### R5-11 — `thm-completion-of-a-measure-space`

- **Exact location:** Proof step 1.4.
- **Defect:** The displayed completed representation $E=A\cup N$ need not be disjoint, but the step invokes finite additivity directly to conclude $\lambda(E)=\lambda(A)$. Replacing $N$ by $N\setminus A$ supplies the required disjoint decomposition.
- **Why it matters:** This is a short omitted bridge, not a false conclusion.
- **Severity:** nonfatal under the 30-second rule.
- **Disposition:** repaired. Step 1.4 replaces $N$ by $N\setminus A$ before invoking finite additivity, and the contract claim matches.

#### R5-12 — `thm-semifinite-and-zero-infinity-decomposition`

- **Exact location:** Proof step 1.3.
- **Defect:** The step says the countable/cocountable zero-infinity set function $\eta$ “is a measure by [L4]”, but [L4] states only that countable unions of at most countable sets remain at most countable. The empty-set and countable-additivity case split is not written.
- **Why it matters:** The missing verification is elementary and mirrors step 2.1, so it is a 30-second gap, but [L4] alone does not state the conclusion attributed to it.
- **Severity:** nonfatal under the 30-second rule.
- **Disposition:** repaired. Step 1.3 now verifies the empty-set condition and both countable-additivity cases for $\eta$ inline, and its contract claim matches. [L1] was also narrowed so the countable-choice hypothesis governs its whole restatement.

#### R5-13 — withdrawn after schema recheck (not a finding)

The diagnostic used during the boundary pass printed `boundary.evidence` for every row. In this contract schema, checked rows use `evidence` while `not_applicable` rows use `reason`; the resulting JavaScript value `undefined` was diagnostic output, not file content. Direct inspection confirmed that all 132 `not_applicable` rows carry specific reasons, and `boundary-audit` found no template cluster or contradicted disposition. No contract edit or defect count is attached to this reserved ID.

#### R5-15 — `thm-semifinite-part-is-a-measure`

- **Exact location:** Proof step 1.3, Facts & Assumptions, and the corresponding contract row.
- **Defect:** The reverse countable-additivity inequality simultaneously selects near-supremum witnesses for a fixed finite initial range, but the step cited neither finite choice nor any earlier selection fact.
- **Why it matters:** Finite choice is provable in ZF and closes the gap immediately, but the written step did not list the fact it used.
- **Severity:** nonfatal under the 30-second rule.
- **Disposition:** repaired by adding `lem-finite-choice` as a dependency, stating it as [L4], tagging the selection, updating the manifest strategy/dependencies, and synchronizing the proof contract and nonempty-choice boundary row.

## Coverage and changes

The mathematical read is complete with no exception: every numbered step in all 44 proof-bearing items, every Fact/Assumption citation, every title and Statement, every boundary axis, every Remark, both page bodies, and all 59 provenance pairs were read. I opened all 76 distinct direct citation targets on disk; 40 lie outside this batch. I also opened the transitive `def-lambda-system` dependency to verify the agreement-class argument. Thus I opened **100 distinct item files**: 59 scoped items and 41 published dependency items.

The three AI-generated Statements/Constructions are `ex-dyadic-probability-measure-on-naturals`, `ex-completion-of-borel-dirac-measure`, and `ex-borel-cantelli-for-shrinking-dyadic-intervals`. None is a `deps` target. I independently recomputed the shifted and unshifted geometric totals, every dyadic interval tail formula and empty limsup, both Dirac-completion membership cases, and the Borel-cardinality separation; no counterexample was found. Every other scoped Statement is `literature-derived` or `ai-altered`, carries a reader-visible source URL, and no cited dependency has an `ai-generated` Statement.

### Files changed

- Proof/citation repairs: `thm-tonelli-for-nonnegative-double-series`, `prop-measure-of-a-set-difference`, `prop-counting-measure-is-a-measure`, `thm-finite-inclusion-exclusion-for-measures`, `cor-dominated-convergence-for-sets`, `lem-completion-domain-is-a-sigma-algebra`, `lem-completed-measure-is-well-defined`, `thm-completion-of-a-measure-space`, `thm-semifinite-part-is-a-measure`, and `thm-semifinite-and-zero-infinity-decomposition`.
- Title repairs: `def-completion-of-a-measure-space`, `lem-completion-domain-is-a-sigma-algebra`, `thm-completion-of-a-measure-space`, and `ex-completion-of-borel-dirac-measure`.
- `research/frontier-16-batch-5.pages.json`: synchronized the four repaired titles, the new sigma-ideal and finite-choice dependencies, and the semifinite-part strategy. `research/plan-spec.json` was not touched.
- `research/frontier-16-batch-5.proof-contracts.json`: synchronized all changed steps, inputs, uses and boundary dispositions; added three new exact citation rows; normalized the defective citation evidence to complete source sections. The final contract has 194 exact citations for 44 items.
- No item was added, deleted, renamed, moved, judged, published, or given a verification stamp. No changed item carried a stale `verification.judge` block.

### Final gates

- Reflow: all 12 changed item files unchanged on the final pass.
- Precheck: all 11 changed proof-bearing items pass; the Definition title-only edit is correctly `precheck: n/a`.
- Proof contract: 44/44, zero errors/warnings; body/contract input comparison has zero mismatches.
- Citation fidelity: 194 citations, no missing quote or widening candidate; independent exact-section comparison 194/194.
- Boundary audit: 352 rows, 132 specifically reasoned `not_applicable`, no template cluster or contradicted disposition.
- Content policy: 59 items, zero errors/warnings. Coverage checklist: one page and 92 harvested results, zero errors/warnings.
- Finite smoke: zero registered applicable checks; no mathematical pass is inferred from that empty check set.
- Citecheck: 59 items clean. Prosecheck and rendercheck: 61 item/page files, zero errors/warnings.
- `risk-report` completed with zero errors; Alpha-owned high/critical `risk_review` dispositions were not fabricated or edited.

No unresolved mathematical concern remains in the assigned batch. Finding R5-13 is explicitly withdrawn and is not included in the totals: **6 fatal findings repaired, 8 nonfatal findings repaired, 0 polish-only findings**.

## Per-page verdicts

- **`measures-and-their-basic-properties` (50 items): repaired and clean.** The fatal inclusion-exclusion sign, three completion title/interface defects, inadequate contract citations, and all short proof-input/choice gaps were repaired. Every item, proof step, citation, boundary row, Remark, and provenance field was read.
- **`measures-and-their-basic-properties-examples` (9 items): repaired and clean.** The Borel-Dirac title now exposes its Choice hypothesis; all nine constructions/refutations and their boundary cases are correct, and all three generated examples survived direct recomputation/counterexample search.
