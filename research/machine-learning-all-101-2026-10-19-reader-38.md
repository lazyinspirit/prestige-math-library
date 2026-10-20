# Step 3a reader report — batch 38

Run: `machine-learning-all-101-2026-10-19`  
Role: reader (`reader-38`)  
Review date: 2026-10-19

## Opened inventory

Assigned pages:

- `library/machine-learning/automatic-differentiation-and-backpropagation.md`
- `library/machine-learning/automatic-differentiation-and-backpropagation-examples.md`

Assigned items, read in dependency order:

- `items/alg-backpropagation-through-shared-parameter-recurrence.md`
- `items/thm-shared-parameter-backpropagation-gradient-formula.md`
- `items/ex-checkpointed-reverse-sweep-recomputes-intermediate.md`
- `items/ex-relu-kink-does-not-have-classical-ad-gradient.md`
- `items/ex-shared-weight-neural-backpropagation.md`

Required prerequisite pages opened:

- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/automatic-differentiation-and-computational-graphs.md`
- `library/functional-analysis/banach-space-differential-calculus-and-banach-manifolds.md`
- `library/machine-learning/feedforward-networks-and-universal-approximation.md` (draft page in batch 31)
- `library/real-analysis/the-total-derivative.md`

Direct supplier items opened:

- `items/def-finite-straight-line-computational-program.md`
- `items/def-c-one-map-and-local-inverse.md`
- `items/def-total-derivative-in-euclidean-space.md`
- `items/alg-reverse-mode-automatic-differentiation.md`
- `items/alg-forward-mode-automatic-differentiation.md`
- `items/alg-checkpointed-reverse-schedules.md`
- `items/thm-reverse-mode-computes-gradient.md`
- `items/thm-chain-rule-for-total-derivatives.md`
- `items/thm-checkpointed-reverse-schedules-preserve-adjoints-and-cost-bounds.md`
- `items/thm-chain-sum-product-and-composition-rules-for-banach-derivatives.md`
- `items/thm-sine-and-cosine-derivatives.md`
- `items/thm-total-differentiability-gives-a-local-linear-bound-and-continuity.md`
- `items/def-feedforward-neural-network.md` (draft item in batch 31)

Also inspected batch-38 proof contracts, dependency inputs, cross-batch dependency record, and the current autopilot status. These were treated as evidence rather than as mathematical verdicts.

## Page verdicts

- `automatic-differentiation-and-backpropagation`: pass. Draft inventory matches the manifest; the body is empty, and `page_layout: compact-v1` is present.
- `automatic-differentiation-and-backpropagation-examples`: pass. Draft inventory matches the manifest; the body is empty, and `page_layout: compact-v1` is present.

The assigned pages contain no diagrams or authored summary prose.

## Item review

- `alg-backpropagation-through-shared-parameter-recurrence`: pass. Inputs, domains, branch failure behavior, primal pass, reverse loop, shared-parameter accumulator, initial-state pullback, and zero-transition case are specified. The recurrence diagram matches the text: parameter edges enter each transition and the loss, while state cotangents run in reverse. Its links are after the complete Definition in `Definition references`.
- `thm-shared-parameter-backpropagation-gradient-formula`: pass. The proof identifies the finite unrolling, applies reverse mode to the shared parameter node, and accounts for the direct loss term, each transition use, and the initial-state term. For `T=0` the transition sum is empty and the remaining terms are the chain rule for the loss composed with `h_0`. Contract citations, step mappings, and boundary dispositions match the item and supplier statements.
- `ex-checkpointed-reverse-sweep-recomputes-intermediate`: pass. For `T=2,m=1`, `q=2` and the single block restores `x_0`, replays `F_1` to record `F_2`, then restores `x_0` to record `F_1`. The cotangents give `cos(x^2)` and then `2x cos(x^2)`; replay domains are all of `R`. The example makes no schedule-optimality or floating-point claim. Contract citations and computations match the opened suppliers.
- `ex-relu-kink-does-not-have-classical-ad-gradient`: pass. The one-sided slopes of `r(θ)` at zero are `0` and `1`; the graph's strict-branch convention therefore returns `NONDIFFERENTIABLE` in forward, reverse, and recurrence modes without selecting a subgradient. Its proof-contract references match the procedures.
- `ex-shared-weight-neural-backpropagation`: pass. The one-hidden-unit, two-layer network has `h_1=θx`, `y=θ^2x`, and `J=½θ^4x^2`; the reverse sweep adds the two tied-weight contributions, yielding `2θ^3x^2`. The direct derivative agrees, including zero cases. The finite feedforward definition is used only for the graph convention; no approximation claim is imported. The supplier diagram inspected in that definition has the stated edge directions and layout.

No proof, statement, definition, computation, citation, title, diagram, or uninterrupted-statement defect was found in the assigned carriers. No edits were made; therefore no item contract update, judge-record removal, reflow, precheck, or proof-layout run was needed. There are no uneditable mathematical defects to escalate.

## Coverage limitation

The mathematical review covered the assigned claims and their claim-relevant direct suppliers listed above. It was not a full audit of unrelated items elsewhere on the prerequisite pages or their wider transitive dependency closures.

## Blocker

There is no batch-38 mathematical blocker. At inspection, autopilot reported the run as `running` in Step 3a with no worker in flight and a pre-existing `3a-split` blocker: `split-8 failed 3x (covers 8)`. This blocker is outside batch 38; no run state was changed.
