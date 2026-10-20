# Step 3a reader report — batch 88

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Scope: batch `88`

## Opened inventory

Assigned page carriers:

- `library/machine-learning/pomdps-and-belief-state-planning.md` — draft A page; seven items, no examples; `page_layout: compact-v1`; no Markdown body.
- `library/machine-learning/pomdps-and-belief-state-planning-examples.md` — draft B page; four examples, no items; `page_layout: compact-v1`; no Markdown body.

Assigned items, reviewed with suppliers before consumers:

1. `lem-cardinality-of-finite-natural-initial-segment`
2. `def-finite-pomdp`
3. `def-belief-state-and-bayes-filter`, `alg-pomdp-witness-backup`
4. `lem-finite-pomdp-belief-update-is-probability-kernel`
5. `thm-belief-mdp-sufficient-statistic`, `thm-finite-horizon-pomdp-piecewise-linear-convex-value`
6. `ex-pomdp-two-state-bayes-update`, `ex-pomdp-observation-aliasing-preserves-belief`, `ex-pomdp-zero-likelihood-observation-is-not-updated`, `ex-pomdp-policy-tree-enumeration-grows-exponentially`

Required prerequisite pages opened:

- `library/probability/conditional-distributions-and-regular-conditional-probability.md`
- `library/machine-learning/finite-mdps-and-bellman-operators.md`

Direct supplier items opened: `def-natural-numbers`, `def-nat-order`, `def-nat-addition`, `lem-nat-order-is-membership`, `lem-nat-transitive-irreflexive`, `def-finite-cardinality`, `def-finite-sum`, `def-sum-over-a-finite-index-set`, `def-nat-power`, `def-finite-markov-decision-process`, `def-measure-kernel-and-probability-kernel`, `thm-bayes-formula-for-dominated-kernels`, `thm-measurability-of-integration-against-a-kernel`, `lem-a-double-sum-over-finite-index-sets-may-be-interchanged`, `lem-finite-sum-laws`, `lem-finite-set-has-max`, `thm-product-rule`, `thm-cardinality-of-a-set-of-functions`, and `thm-induction-principle`. The MDP supplier is a current-run draft from another batch. I also opened `lem-finite-subsets-listable`, which supplies the finite-set extension used by `lem-finite-set-has-max`.

## Repairs

- In `items/thm-belief-mdp-sufficient-statistic.md`, §Proof step 3.1 now defines the action-value function used by step 4.1 and identifies its values as the nonempty finite image of the finite action set. This makes the application of `lem-finite-set-has-max` explicit. The POMDP definition supplies a finite nonempty action set; the cited maximum result supplies attainment.
- In `items/thm-finite-horizon-pomdp-piecewise-linear-convex-value.md`, §Proof steps 2.1, 3.1, and 5.4 now state why the generated vector set and each belief's value set are finite images, and bound distinct candidate and witness vectors by enumerating the finite policy-tree set. The backup definition, finite function-set and product results, and the induction hypothesis supply these constructions.
- Updated the corresponding derivation claims in `research/machine-learning-all-101-2026-10-19-batch-88.proof-contracts.json`. Neither changed item had a `verification.judge` record to remove.
- Reflow reported both items unchanged. Precheck passed for both items. The single batched proof-layout check reported 2 items, 18 steps, 0 defects.

No statements, definitions, page carriers, or diagrams were changed. The depth-two policy-tree diagram in `alg-pomdp-witness-backup` matches its text: the root action branches on observations to continuation actions; it does not branch on hidden states or rewards.

## Unrepaired defects

None identified.

## Page verdicts

- `pomdps-and-belief-state-planning`: no page inventory or presentation defect identified. Its seven item IDs match the assignment, and the authored page is frontmatter-only with the required compact layout.
- `pomdps-and-belief-state-planning-examples`: no page inventory or presentation defect identified. Its four examples match the assignment, and the authored page is frontmatter-only with the required compact layout.

## Source checks and coverage limits

The initial-segment claim was checked against the local von Neumann order and cardinality suppliers and Dumas–McCarthy, *Transition to Higher Mathematics*, §1.2, lines 226–232. The POMDP model, Bayes update, belief-MDP reduction, policy-tree representation, and finite-horizon piecewise-linear convex value were checked against Kaelbling, Littman, and Cassandra, “Planning and Acting in Partially Observable Stochastic Domains,” §§3.1, 3.3–3.4, and 4.1 (printed pp. 105–111), and Tedrake's MIT notes, lines 16–24. The local proofs were checked against their stated dependencies.

The browser could not retrieve the exact Brown CS-96-08 PDF URL, and the Waterloo lecture PDF exposed its title/page count but not slide text. I reviewed the Brown-hosted full text of the same authors' 1998 paper and the MIT notes for the relevant POMDP claims. I reviewed the directly declared supplier statements and the portions needed for batch 88; this was not a whole-corpus audit of unrelated transitive supplier proofs.

## Blocker

None.
