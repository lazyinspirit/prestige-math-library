# U-P review, shard 10

All 163 assigned items were reviewed in `agent-10.jsonl` order. Each item's
receipt was completed before the next item was started. The 163 JSONL receipts
have unique IDs and exactly match the assignment order.

| Disposition | Count |
| --- | ---: |
| Accept, bounded clear | 128 |
| Repair, A-R | 17 |
| Defer, U-P | 18 |

## Contract changes and impact

- `cor-dimension-birational-invariant`: restricted the false open-isomorphism
  clause to irreducible ambient varieties. The counterexample is an affine
  line disjoint from a point, with the point as the open subvariety. The
  published item-reference consumer closure is empty. The first birational
  clause still awaits a sound general classical-variety birational interface,
  so the item remains U-P. Evidence:
  `agent-10-impact-cor-dimension-birational-invariant.json`; event
  `agent-10-impact-cor-dimension-143`.
- `thm-universal-coefficient-theorem-for-homology-over-a-pid`: added the Axiom
  of Choice required by its free cycle/boundary supplier, aligned the proof
  premises and removed stale verification. The source proof is now A-R after
  root's independent review. All ten published direct/indirect consumers were
  inspected: seven uses remain sound, and three owner-specific corrections
  were routed. Evidence: `agent-10-impact-uct-homology-ac.json`; event
  `agent-10-impact-uct-homology-ac-160`.

The three routed UCT consumer tasks are
`fs-uct-for-homology-has-an-ext-term-and-uct-for-cohomology-a-tor-term`
(unqualified general UCT use), `thm-serre-class-fibration-transfer` (stale
description of the UCT premise), and
`thm-the-homology-universal-coefficient-sequence-splits-nonnaturally`
(unqualified arbitrary-complex splitting). They remain with shards 03, 04 and
06 respectively. Other cross-shard events routed stale historical statements
in `rem-dominated-convergence-theorem` and
`rem-lebesgue-measure-and-integral`; root repaired the latter.

## Other local repairs

Proof, calculation, and scope repairs were made to 16 additional assigned
items. They include the Hawaiian-earring CW topology witness, open-mapping
successive approximation and theorem, plane-forest face count, free-group
subgroup separability, a finite Dehn presentation proof, character-value
boundary case, and two stale integration/measure remarks. Item receipts give
the exact before/after snippets, invalidated use and focused check for every
repair. The integration-scope receipt was amended after root replaced its
Heine–Cantor choice-bearing supplier with a finite-subcover proof.

## Deferred items

- Zeta/prime-number-theorem dependency or choice issues:
  `cor-prime-number-theorem`,
  `cor-dirichlet-l-root-number-unit-modulus`,
  `fs-the-functional-equation-alone-characterizes-zeta`,
  `rem-dirichlet-series-continuation-and-regularized-sums`, and
  `lem-zeta-logarithmic-derivative-zero-bound`.
- Smooth or analytic prerequisites not closed by the published route:
  `thm-morse-sard-for-euclidean-maps`,
  `cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction`,
  `def-reflexive-banach-space`, and
  `ex-surface-groups-as-hyperbolic-groups`.
- Unpropagated choice/resolution hypotheses in the depth, homological, or
  functional-analysis path: `lem-completion-reflects-depth`,
  `lem-normal-domain-implies-s-two`,
  `lem-regular-quotient-preserves-depth-dimension-gap`,
  `thm-auslander-buchsbaum-formula`,
  `thm-depth-bounded-by-support-dimension`,
  `thm-eilenberg-steenrod-uniqueness-on-all-cw-pairs`,
  `thm-hahn-banach-norm-preserving-extension`, and
  `thm-regular-quotients-and-cohen-macaulayness`.
- `cor-dimension-birational-invariant`: the false subsidiary clause was
  corrected, but the main clause's general birational interface remains
  unpublished, as described above.

Each defer receipt states its exact unresolved prerequisite. A defer is not a
claim that the mathematical assertion is false.

## Checks and workspace

Focused precheck and rendercheck passed for each edited theorem/proposition;
remark prechecks reported zero applicable proof items and rendercheck passed.
Diffs were inspected and `git diff --check` was clean for the edited files.
The final receipt validation found 163 unique receipts in assignment order.
No new lemma, canonical-ledger edit, global configuration edit, commit, build
transition or delegated agent work was performed. Concurrent workspace edits
outside this shard were preserved.
