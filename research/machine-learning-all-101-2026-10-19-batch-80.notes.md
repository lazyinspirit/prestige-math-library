# Batch 80 notes — finite MDPs and Bellman operators

## Assignment and controlling design

Run: `machine-learning-all-101-2026-10-19`; role: beta; assigned pair: `finite-mdps-and-bellman-operators` and its examples page. Scope is limited to this pair and its batch evidence.

The complete ML-72 design in `research/plan-machine-learning-track.md` lines 492–495 matches the corresponding `research/plan-spec.json` description. No design conflict was found. The plan-spec page item arrays were empty before transcription; the assigned batch manifest elaborates the interfaces into 13 A-page items and 4 B-page examples. This is elaboration, not a conflict. No shared plan was changed.

The authored A/B page files remain frontmatter-only with empty Markdown bodies. A has 13 items and B has 4 examples; both are below the 100-item cap. The B inventory is recorded in its `examples` field. The final pair/manifest consistency check passed.

## Inventory, claims, dependency levels, and decisions

The scaffold claim strings below are copied from the authorized batch manifest. Each linked carrier contains the final uninterrupted Definition, Statement, or Example. Direct dependency IDs are the final carrier and manifest `deps` after the repairs. Local item levels use only in-run dependencies; published suppliers do not raise an item level.

### A-page: finite-mdps-and-bellman-operators

- **[def-finite-markov-decision-process](../items/def-finite-markov-decision-process.md)** — definition, level 0; Finite Markov decision process with joint reward-transition law.
  - Direct dependencies: `def-measure-kernel-and-probability-kernel`, `def-countable`, `def-cartesian-product`, `def-sum-over-a-finite-index-set`, `def-max-min`, `lem-finite-set-has-max`, `lem-of-abs-value`, `lem-triangle-inequality-finite`, `lem-finite-sum-laws`, `thm-sum-rule`, `thm-the-characterising-property-of-ordered-pairs`.
  - Scaffold claim: A finite MDP has a finite state set S (possibly empty), a finite reward alphabet R contained in the real numbers, a finite nonempty action set A(s) for each s in S, and a joint probability mass p(s′,ρ|s,a) on S×R for each admissible pair (s,a). Put r(s,a)=Σ_{s′,ρ}ρp(s′,ρ|s,a) and P(s′|s,a)=Σ_ρp(s′,ρ|s,a). A stationary Markov policy is a family π(a|s) of probability distributions on A(s); a deterministic policy selects one action in each A(s).
- **[lem-bounded-discounted-return-converges](../items/lem-bounded-discounted-return-converges.md)** — lemma, level 0; Absolute convergence and tail bound for bounded discounted rewards.
  - Direct dependencies: `thm-geometric-series`, `thm-direct-comparison-test`, `def-series`, `lem-series-tail-invariance`, `lem-series-linearity`, `thm-nonnegative-series-bounded-partial-sums`, `lem-finite-sum-laws`, `lem-of-abs-value`, `lem-limit-preserves-order`, `lem-geometric-sequence-null`.
  - Scaffold claim: Let M≥0, 0≤γ<1, and let (ρj)j≥1 be any real sequence with |ρj|≤M. The series G=Σj≥0 γjρj+1 converges absolutely. Every partial sum and its limit have absolute value at most M/(1−γ), and for every N≥0, |G−Σj<N γjρj+1|≤MγN/(1−γ), with the empty partial sum at N=0.
- **[lem-finite-state-sup-norm-space-is-complete](../items/lem-finite-state-sup-norm-space-is-complete.md)** — lemma, level 0; Completeness of the sup metric on finite-state value functions.
  - Direct dependencies: `def-countable`, `def-metric-space`, `def-complete-metric-space`, `lem-metrics-on-rn`, `thm-euclidean-space-complete`.
  - Scaffold claim: For any finite set S, let B(S)=R^S. If S is empty, set d∞(u,v)=0; otherwise set d∞(u,v)=maxs∈S|u(s)−v(s)|. Then d∞ is a metric on B(S), and (B(S),d∞) is complete.
- **[thm-finite-mdp-policy-induces-reward-state-chain](../items/thm-finite-mdp-policy-induces-reward-state-chain.md)** — theorem, level 1; A finite MDP and stationary policy generate a reward-state Markov chain.
  - Direct dependencies: `def-finite-markov-decision-process`, `def-measure-kernel-and-probability-kernel`, `def-axiom-of-choice`, `thm-ionescu-tulcea-construction-of-a-markov-chain`, `def-time-homogeneous-markov-chain-with-transition-kernel`, `def-sum-over-a-finite-index-set`, `lem-a-double-sum-over-finite-index-sets-may-be-interchanged`, `thm-subset-of-a-finite-set`, `thm-sum-rule`, `thm-product-rule`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `thm-well-ordering-principle`.
  - Scaffold claim: Assume the Axiom of Choice. For a finite MDP with nonempty state set S and a stationary Markov policy π, put E=S×(R∪{0}) and Kπ((s,ρ),B)=Σaπ(a|s)Σ(s′,ρ′)∈S×R 1B(s′,ρ′)p(s′,ρ′|s,a). Then Kπ is a probability kernel on E. For every s∈S there is a probability law on EN whose coordinate process starts at (s,0) and is a time-homogeneous Markov chain with transition kernel Kπ relative to its natural filtration.
- **[def-policy-bellman-operator](../items/def-policy-bellman-operator.md)** — definition, level 1; Policy Bellman operator.
  - Direct dependencies: `def-finite-markov-decision-process`.
  - Scaffold claim: For a finite MDP, discount 0≤γ<1, and stationary Markov policy π, the policy Bellman operator Tπ:R^S→R^S is (TπV)(s)=Σa∈A(s)π(a|s)[r(s,a)+γΣs′∈S P(s′|s,a)V(s′)].
- **[def-bellman-optimality-operator](../items/def-bellman-optimality-operator.md)** — definition, level 1; Bellman optimality operator.
  - Direct dependencies: `def-finite-markov-decision-process`, `def-max-min`, `lem-finite-set-has-max`.
  - Scaffold claim: For a finite MDP and discount 0≤γ<1, the Bellman optimality operator T*:R^S→R^S is (T*V)(s)=maxa∈A(s)[r(s,a)+γΣs′∈S P(s′|s,a)V(s′)].
- **[def-discounted-return-and-value-functions](../items/def-discounted-return-and-value-functions.md)** — definition, level 2; Discounted returns and policy values in a finite MDP.
  - Direct dependencies: `def-finite-markov-decision-process`, `def-axiom-of-choice`, `def-time-homogeneous-markov-chain-with-transition-kernel`, `thm-finite-mdp-policy-induces-reward-state-chain`, `lem-bounded-discounted-return-converges`, `prop-closure-properties-of-measurable-functions-used-by-the-integral`, `def-random-element-and-real-random-variable`, `thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable`, `thm-dominated-convergence`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`.
  - Scaffold claim: Assume the Axiom of Choice. For a finite MDP, stationary Markov policy π, and 0≤γ<1, under the canonical reward-state chain started from X0=(s,0), write Xt=(St,Rt) and define Gt=Σj≥0γjRt+j+1 and Vπ(s)=Eπ,s[G0]. The series is measurable, integrable, and bounded in absolute value by M/(1−γ). If S is empty, Vπ is the unique empty function. This is the start-state meaning of Eπ[Gt|St=s] when that conditional expectation is defined. Average-reward and undiscounted continuing models, and improper episodic tasks, are outside this definition.
- **[thm-bellman-contraction-and-unique-fixed-point](../items/thm-bellman-contraction-and-unique-fixed-point.md)** — theorem, level 2; Finite-MDP Bellman operators are gamma contractions with unique fixed points.
  - Direct dependencies: `def-finite-markov-decision-process`, `def-policy-bellman-operator`, `def-bellman-optimality-operator`, `lem-finite-state-sup-norm-space-is-complete`, `thm-banach-fixed-point`.
  - Scaffold claim: Let a finite MDP and 0≤γ<1 be fixed. For every stationary policy π and all V,W∈R^S, ‖TπV−TπW‖∞≤γ‖V−W‖∞; likewise ‖T*V−T*W‖∞≤γ‖V−W‖∞. Each operator has exactly one fixed point. The contraction constant is the nonnegative number γ.
- **[alg-value-iteration](../items/alg-value-iteration.md)** — algorithm, level 2; Exact value iteration for the Bellman optimality operator.
  - Direct dependencies: `def-finite-markov-decision-process`, `def-bellman-optimality-operator`.
  - Scaffold claim: Input a finite MDP, 0≤γ<1, an initial value V0∈R^S, and an integer m≥0. Set Vj+1=T*Vj for j=0,…,m−1 and return Vm. The procedure returns the exact mth iterate and makes no finite-termination claim for convergence.
- **[lem-policy-value-satisfies-bellman-equation](../items/lem-policy-value-satisfies-bellman-equation.md)** — lemma, level 3; Expected discounted policy value is a fixed point of its Bellman operator.
  - Direct dependencies: `def-finite-markov-decision-process`, `def-discounted-return-and-value-functions`, `def-axiom-of-choice`, `thm-finite-mdp-policy-induces-reward-state-chain`, `def-policy-bellman-operator`, `def-probability-measure`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `lem-bounded-discounted-return-converges`, `thm-dominated-convergence`, `thm-algebra-of-limits`, `lem-limit-of-tail`.
  - Scaffold claim: Assume the Axiom of Choice. For a finite MDP, 0≤γ<1, and stationary Markov policy π, the expected discounted value Vπ defined from each initial state satisfies TπVπ=Vπ.
- **[thm-value-iteration-convergence-error-bound](../items/thm-value-iteration-convergence-error-bound.md)** — theorem, level 3; Value iteration converges at the Bellman contraction rate.
  - Direct dependencies: `def-finite-markov-decision-process`, `alg-value-iteration`, `thm-bellman-contraction-and-unique-fixed-point`, `def-integer-power`, `thm-induction-principle`.
  - Scaffold claim: Let V* be the unique fixed point of T*. For every initial V0∈R^S and every m≥0, the iterates Vm=T*Vm−1 from exact value iteration satisfy ‖Vm−V*‖∞≤γm‖V0−V*‖∞, with γ0=1.
- **[alg-policy-iteration](../items/alg-policy-iteration.md)** — algorithm, level 3; Exact finite policy iteration with retained greedy actions.
  - Direct dependencies: `def-finite-markov-decision-process`, `def-policy-bellman-operator`, `def-bellman-optimality-operator`, `thm-bellman-contraction-and-unique-fixed-point`.
  - Scaffold claim: Input a finite MDP, 0≤γ<1, an initial deterministic policy π0, and for each s an ordered list containing every member of A(s) exactly once. At iteration k, compute the unique exact fixed point Vk=TπkVk. For each s, let Qk(s,a)=r(s,a)+γΣs′P(s′|s,a)Vk(s′); retain πk(s) if it attains maxa Qk(s,a), and otherwise choose the earliest maximizing action in the supplied list. If πk+1=πk, return (πk,Vk); otherwise repeat.
- **[thm-policy-improvement](../items/thm-policy-improvement.md)** — theorem, level 4; Greedy policy improvement and finite policy-iteration termination.
  - Direct dependencies: `def-finite-markov-decision-process`, `def-countable`, `def-discounted-return-and-value-functions`, `def-axiom-of-choice`, `def-policy-bellman-operator`, `def-bellman-optimality-operator`, `lem-policy-value-satisfies-bellman-equation`, `thm-bellman-contraction-and-unique-fixed-point`, `alg-policy-iteration`, `lem-finite-set-has-max`, `lem-finite-state-sup-norm-space-is-complete`, `thm-banach-fixed-point`, `lem-limit-preserves-order`, `thm-induction-principle`, `thm-product-rule`.
  - Scaffold claim: Assume the Axiom of Choice. Let a finite MDP have 0≤γ<1, and let π be any stationary Markov policy with expected discounted value Vπ. Any deterministic policy π′ greedy with respect to Vπ satisfies Vπ′(s)≥Vπ(s) for every s; if Tπ′Vπ(s)>Vπ(s) at some state, the inequality is strict at some state. Exact finite policy iteration with the stated tie-retention rule strictly improves at every changed policy, makes at most Πs∈S|A(s)|−1 changes, and terminates at a deterministic policy with value V* that dominates every stationary policy.

### B-page: finite-mdps-and-bellman-operators-examples

- **[ex-undiscounted-single-state-mdp-diverges](../items/ex-undiscounted-single-state-mdp-diverges.md)** — example, level 1; A unit reward on a self-loop has no finite undiscounted return.
  - Direct dependencies: `def-finite-markov-decision-process`, `thm-geometric-series`.
  - Scaffold claim: Take S={s}, A(s)={a}, R={1}, and p(s,1|s,a)=1. At γ=1 the return partial sum through N−1 is N, so the infinite undiscounted return diverges; the formal one-state Bellman update F(v)=1+v has no fixed point and is not a contraction with any q<1.
- **[ex-finite-mdp-common-reward-shift](../items/ex-finite-mdp-common-reward-shift.md)** — example, level 3; A common reward shift moves every one-state value equally.
  - Direct dependencies: `def-finite-markov-decision-process`, `def-policy-bellman-operator`, `def-bellman-optimality-operator`, `thm-bellman-contraction-and-unique-fixed-point`.
  - Scaffold claim: Let S={s}, A(s)={a,b}, γ=1/2, and let both actions return to s with probability one and have deterministic rewards 1 and 3, respectively. The unique fixed points of their policy Bellman operators are 2 and 6. Adding 2 to both rewards changes the fixed points to 6 and 10, so both move by 2/(1−γ)=4, their difference remains 4, and b remains greedy for the Bellman optimality operator.
- **[ex-value-iteration-attains-error-rate](../items/ex-value-iteration-attains-error-rate.md)** — example, level 4; A one-state value-iteration model attains the contraction error bound.
  - Direct dependencies: `def-finite-markov-decision-process`, `alg-value-iteration`, `thm-value-iteration-convergence-error-bound`, `def-bellman-optimality-operator`, `thm-bellman-contraction-and-unique-fixed-point`, `def-integer-power`, `lem-power-laws`, `thm-induction-principle`.
  - Scaffold claim: Let S={s}, A(s)={a}, γ=1/2, with a deterministic self-loop reward 1, and initialize V0(s)=0. Then V*=2 and Vm(s)=2(1−2^(−m)), so ‖Vm−V*‖∞=2^(1−m)=γ^m‖V0−V*‖∞ for every m≥0.
- **[ex-policy-iteration-tie-retention](../items/ex-policy-iteration-tie-retention.md)** — example, level 4; Changing a tied greedy action can cycle, while retention stops.
  - Direct dependencies: `def-finite-markov-decision-process`, `alg-policy-iteration`, `def-policy-bellman-operator`, `def-bellman-optimality-operator`, `thm-bellman-contraction-and-unique-fixed-point`.
  - Scaffold claim: Let S={s}, A(s)={a,b}, γ=1/2, and let both actions give reward 0 and return deterministically to s. Both actions are greedy for every value. Exact policy iteration retains the current action and stops after one evaluation; a rule that always switches to a different maximizing action alternates forever between a and b.

Formal Step 1 decision files are **not recorded**. I attempted `node tools/step1-decisions.mjs record` on the first item and the required `check` command; both fail before recording because the run loader reaches an out-of-scope malformed manifest. No existing record was overwritten. The 17 mathematical readiness reviews are complete, but the workflow decision remains unrecorded until the shared manifest blocker is repaired.

## Conventions, prerequisites, and mathematical checks

- The finite MDP uses a joint one-step law `p(s′,ρ|s,a)` on the finite state/reward pair, with expected reward and state marginal derived from that same law. Each state/action/reward set and the admissible-pair domain use the discrete sigma-algebra. The definition handles empty state sets and records the resulting probability marginals and reward bound.
- The admissible-pair set `D` is proved finite in `def-finite-markov-decision-process` Verification. The maps `a↦(s,a)` are bijections onto the state-indexed blocks; the published ordered-pair characterization proves pairwise disjointness, and the finite disjoint-union rule gives finiteness. This finite-family argument requires no choice.
- For a nonempty state space, the policy-induced reward/state chain uses the stationary-policy mixture of the joint law and the Ionescu–Tulcea construction; the Axiom of Choice is explicitly stated for that path-space construction. The empty-state case needs no choice. The direct chain proof checks kernel normalization, finite-mixture measurability, product sigma-algebras, and the initial state.
- Discounted returns use `0≤γ<1`, the finite reward bound `M`, an explicit geometric tail estimate including `N=0` and `γ=0`, measurability, integrability, and dominated convergence. The value definition distinguishes the start-state expectation from a conditional-expectation notation and excludes average-reward, continuing undiscounted, and improper episodic models.
- The Bellman policy and optimality maps are self-maps on `R^S`; both are γ-contractions, with the complete sup-metric space also handling `S=∅`. Banach is used with nonempty complete domain and `q=γ∈[0,1)`.
- Policy improvement treats stochastic starting policies and deterministic greedy successors. Exact policy iteration retains a currently greedy action, otherwise uses a supplied finite action ordering, strictly improves after changes, and terminates after at most `N_det−1` changes. The separate tie example demonstrates the switching cycle without claiming every tie rule cycles.
- The value-iteration sharpness example now directly depends on `lem-power-laws`: negative integer exponents are not governed by the natural-exponent recursion alone. The supplier’s integer addition law gives `2^{-(m+1)}=2^{-m}2^{-1}`, and the negative-exponent definition gives `2^{-1}=1/2`; the example then uses explicit base and successor steps.
- No unresolved mathematical prerequisite, well-definedness gap, axiom branch, or source retrieval failure remains within this pair. The empty, zero, singleton, degenerate, endpoint, choice, and applicable direction boundaries are recorded in the contracts. No registered finite-MDP finite-smoke selector applied; this is noted in the contract rather than represented as a finite check.

The new direct edges are `thm-sum-rule` and `thm-the-characterising-property-of-ordered-pairs` for the finite `D` verification, and `lem-power-laws` for the negative-exponent recurrence. All three are published; their actual supplier statements and complete proofs were inspected. The exact edges and excerpts are in the cross-batch dependency evidence.

## Item dependency levels

Batch level: 0. In-run prerequisite batches: none. The item levels are:

- Level 0: `def-finite-markov-decision-process`; `lem-bounded-discounted-return-converges`; `lem-finite-state-sup-norm-space-is-complete`.
- Level 1: `thm-finite-mdp-policy-induces-reward-state-chain`; `def-policy-bellman-operator`; `def-bellman-optimality-operator`; `ex-undiscounted-single-state-mdp-diverges`.
- Level 2: `def-discounted-return-and-value-functions`; `thm-bellman-contraction-and-unique-fixed-point`; `alg-value-iteration`.
- Level 3: `lem-policy-value-satisfies-bellman-equation`; `thm-value-iteration-convergence-error-bound`; `alg-policy-iteration`; `ex-finite-mdp-common-reward-shift`.
- Level 4: `thm-policy-improvement`; `ex-value-iteration-attains-error-rate`; `ex-policy-iteration-tie-retention`.

`dependency-inputs.json` records all 17 computed levels, 44 direct external item roots, a transitive closure of 594 published items on 56 published pages, and zero unresolved carriers. Its in-run pair supplier list is empty. The cross-batch evidence file has 69 verified dependency rows and no open/unpublished supplier rows.

## Plan source reading and source disposition

- Sutton and Barto, *Reinforcement Learning: An Introduction*, 2nd ed., full Stanford PDF: https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf. Read §§3.6–3.8 and equations (3.6)–(3.8), (3.10), (3.12), (3.17); §§4.2–4.4 and equations (4.7)–(4.10); Figure 4.3’s arbitrary-tie cycle warning. This source supports the reward-transition convention, discounted value and Bellman recursions, contraction/value iteration, policy improvement, and tie-retention warning.
- Kaelbling, Littman, and Cassandra, Brown Technical Report CS-96-08, full 29-page PDF: https://cs.brown.edu/research/pubs/techreports/reports/96/cs96-08.pdf. Read §§2.1–2.3, PDF pp. 3–7. This treatment is recorded with its separate reward/transition convention; it is not silently conflated with Sutton and Barto’s joint law.
- Sergey Mozgovoy, *Lecture Notes on Metric Spaces and Functional Analysis*, full PDF: https://www.maths.tcd.ie/~mozgovoy/data/notes_MS_2014.pdf. Read Example 1.65, PDF p. 12, and Theorem 3.19, PDF pp. 33–34, for the finite-dimensional metric comparison/completeness context; the local finite-state proof is complete.
- The plan/design locator says Sutton and Barto PDF pp. 67–110 (printed pp. 47–90). The opened Stanford copy places §3.6 at PDF p. 80 / printed p. 67 and §4.4 at PDF pp. 112–114 / printed pp. 99–101. The actual section/equation locators above were used; the plan scope was not changed.
- Source coverage and retrieval evidence are in `research/machine-learning-all-101-2026-10-19-batch-80.coverage.json` and `...batch-80.source-evidence.json`. There are 20 harvested coverage results. `coverage-checklist` passes with 0 errors/warnings; `source-fetch-check` verifies all 3 full-text PDFs on the first attempt, with 0 documented drops. No retrieval recovery or `source_resolution` entry was required.

## Final scoped checks

- `proof-layout` on the 17 assigned carriers: 17 items, 50 numbered steps, 0 defects.
- Normative `precheck` on all phase-bearing items: 12 checked, 0 failing; direct and induction strategies both pass.
- `rendercheck` on all 17 carriers: pass; all math parses with KaTeX, no unbalanced/nested delimiters, no multiline display blocks, and no wikilinks in math.
- Local statement-first inspection using the same `inspectStatement` implementation: 17 items, 0 defects. Every Definition/Statement/Example claim is link-free; its references are immediately after the complete section, each in its own source line/paragraph.
- Focused `depcheck --items-file` for these 17 carriers: pass. Its selected item/page cycle scope covers 617 items and 161 pages.
- `content-policy` on the batch manifest: 17 scoped items, 0 errors/warnings.
- Strict proof contract: 17/17 items, 0 errors/warnings. Every derivation, cited fact use, supplier excerpt, boundary disposition, and item level is synchronized.
- Pair/manifest check: 13 A-page items, 4 B examples, 17 carrier dependency lists match the manifest; both assigned page bodies are empty.
- Coverage and full-text fetch checks: pass as recorded above.

## Run-wide blockers and owner follow-up

Live native status was recomputed from `.autopilot/machine-learning-all-101-2026-10-19`: the run remains at `1-scaffold`, currently 35/101 covered (missing batches 4, 5, 6, 8, 10, 11, 12, 21 and 58 more), with nothing in flight. The owner repair/recertification blocker remains. A second current blocker is invalid unit prerequisites because `items/def-fourier-neural-operator-layer.md` is missing for another batch. No engine state, shared plan, published content, or verdict was edited.

The dispatch supplied scheduling hash `4652875380fb83fe2b469069a490dc8aeba66b4b740ea67dbde87608a9c8b602`; the current shared batch-dependency artifact records input hash `4c693476eaf104b5816a67b6ddafcf6f499863f314d6b6c8ab7c9cce2209a13a`. Both currently assign batch 80 level 0 with no prerequisite batches, but the hashes differ. The batch-local `dependency-inputs.json` preserves both and sets `scheduling_hash_conflict: true`; the shared artifact was not rewritten.

Global mechanical gates cannot complete from the current out-of-scope frontier:

- `statement-first-check --run ... --domain math` and `proof-contract-coverage` both stop at the empty item inventory for `distribution-shift-and-domain-adaptation` in batch 10.
- `item-dependency-levels check` reports 135 errors outside batch 80, including empty inventories elsewhere and 17 stale ReLU-level labels. It reports 0 errors for these 17 items.
- `batch-dependency-levels check` and the required `step1-decisions record/check` loader fail with `Duplicate item undefined`. The exact source is `research/machine-learning-all-101-2026-10-19-batch-37.pages.json`: page `neural-operators-and-physics-informed-learning` lists 26 bare string IDs, starting with `def-discretization-invariant-operator-family`, where the loader requires item objects with `id` fields. The first attempted batch-80 decision record wrote nothing; no existing escalation was overwritten.

The next action is owner repair of the malformed batch-37 inventory and other native owner blockers, followed by the normal run-wide recertification/gate. Then rerun the required batch-80 `step1-decisions record` commands against the actual run and verify them with `step1-decisions check`. Reconcile the scheduling hash with the owner-controlled dependency artifact. These authoring and validation records do not constitute independent approval, acceptance, or publication.
