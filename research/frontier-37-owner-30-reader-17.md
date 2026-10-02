# Step 5a reader report — batch 17

Run: `frontier-37-owner-30`  
Date: 2026-10-01  
Verdict: reviewed both assigned pages and all 27 assigned items; repaired four assigned items; two published dependency findings remain for the 5b lead. No blocker.

## Opened inventory

Pages:

- A: `library/computability-theory/approximation-algorithms-and-gap-reductions.md`
- B: `library/computability-theory/approximation-algorithms-and-gap-reductions-examples.md`

Assigned A items:

- `def-optimization-problem-and-approximation-ratio`
- `def-ptas-fptas-and-apx`
- `thm-maximal-matching-is-a-two-approximation-for-vertex-cover`
- `def-greedy-set-cover`
- `def-harmonic-number-for-set-cover-analysis`
- `lem-greedy-set-cover-charging-bound`
- `thm-greedy-set-cover-is-an-h-n-approximation`
- `thm-random-cut-has-expected-half-the-edges`
- `thm-conditional-expectation-derandomizes-max-cut-half-approximation`
- `def-metric-tsp`
- `lem-minimum-spanning-tree-cost-lower-bounds-metric-tsp`
- `lem-euler-double-tree-shortcutting-does-not-increase-cost`
- `thm-doubled-spanning-tree-is-a-two-approximation-for-metric-tsp`
- `def-gap-problem-and-gap-preserving-reduction`
- `lem-pcp-verifier-reduces-to-gap-max-three-sat`
- `thm-max-three-sat-has-no-ptas-unless-p-equals-np`
- `lem-gap-three-sat-reduces-to-gap-independent-set`
- `thm-independent-set-has-no-ptas-unless-p-equals-np`
- `def-l-reduction`
- `def-apx-hardness-and-apx-completeness`
- `lem-l-reductions-transfer-apx-hardness`
- `fs-exact-np-hardness-implies-no-constant-approximation`

Assigned B items:

- `ex-greedy-set-cover-charging-bound`
- `ex-l-reductions-transfer-apx-hardness`
- `cex-exact-np-hardness-implies-no-constant-approximation`
- `ex-conditional-expectation-for-a-small-max-cut-instance`
- `ex-double-tree-shortcutting-for-a-metric-tsp-instance`

Direct external dependencies opened at their relevant definitions or statements:

`cor-independent-set-and-vertex-cover-are-np-complete`, `cor-tree-edge-count`, `def-axiom-of-choice`, `def-clique-independent-set-and-vertex-cover-problems`, `def-connected-graph-and-connected-component`, `def-euler-trail-and-circuit`, `def-finite-simple-graph`, `def-matching-maximum-perfect-and-matching-number`, `def-multigraph-and-digraph-degrees-and-connectivity`, `def-np-by-verifiers`, `def-np-hard-and-np-complete`, `def-p`, `def-pcp-class-with-completeness-and-soundness`, `def-pcp-verifier-randomness-query-and-proof-length`, `def-polynomial-time-many-one-reduction`, `def-set-cover`, `def-spanning-tree`, `def-weighted-graph-and-minimum-spanning-tree`, `lem-indicator-expectation-and-products`, `thm-connected-iff-has-spanning-tree`, `thm-eulers-euler-circuit-characterisation`, `thm-kruskals-minimum-spanning-tree-algorithm`, `thm-linearity-of-expectation`, `thm-pcp-theorem-np-equals-pcp-log-n-o-one`, `thm-product-probability-has-independent-coordinate-events`, `thm-three-sat-is-np-complete`, and `thm-three-sat-reduces-to-clique`.

For the PCP choice audit, I additionally opened the relevant proof sections in `thm-gap-csp-is-np-hard`, `lem-logarithmically-many-iterations-reach-constant-gap`, `lem-one-transformation-amplifies-gap`, `def-dinur-pcp-transformation`, `thm-gap-amplification-step`, `lem-constraint-expander-overlay`, `lem-expander-size-adjustment-and-laziness`, `thm-margulis-family-has-uniform-spectral-gap`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-real-normal-endomorphism-classification`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `thm-the-complex-numbers-are-algebraically-closed`, `thm-fundamental-theorem-of-finite-galois-theory`, `thm-artin-fixed-field-degree-theorem`, `thm-relative-automorphism-group-and-separable-degree-bound`, `thm-algebraic-embedding-extension`, and `thm-zorn`.

## Repairs made

- `items/lem-gap-three-sat-reduces-to-gap-independent-set.md`, Fact F1 and proof step 4.1: corrected the graph relationship. The published 3-SAT-to-CLIQUE proof uses cross-clause, noncomplementary pairs as edges; the assigned independent-set graph is its complement on the same occurrence vertices. The direct assignment/independent-set translations in steps 2.1–3.1 still prove the exact optimum equality and decoder. This follows from `items/thm-three-sat-reduces-to-clique.md`, proof step 1.2. The corresponding proof-contract citation and derivation were updated.

- `items/thm-doubled-spanning-tree-is-a-two-approximation-for-metric-tsp.md`, Fact F4 and proof steps 2.1 and 4.1: narrowed the citation to the correctness claim actually made by `thm-kruskals-minimum-spanning-tree-algorithm`. Added the polynomial-time argument for this page’s explicitly encoded rational edge lengths: at most $|E|$ additions, edge scans and cycle tests by graph search, and polynomial-bit rational comparisons. Updated the proof contract.

- `items/fs-exact-np-hardness-implies-no-constant-approximation.md` and its assigned direct consumer `items/cex-exact-np-hardness-implies-no-constant-approximation.md`: changed the refuted claim to the unconditional statement that exact NP-hardness rules out every constant-factor approximation. The maximal-matching algorithm for vertex cover refutes that statement. Both items now say explicitly that this example does not refute a separate inapproximability claim conditional on $P\ne NP$. Updated both proof-contract entries.

No `verification.judge` records were present in the four edited items. Reflow and precheck were run after the contract updates for each edited item:

| Item | Reflow | Precheck |
| --- | --- | --- |
| `lem-gap-three-sat-reduces-to-gap-independent-set` | exit 0, unchanged | PASS |
| `thm-doubled-spanning-tree-is-a-two-approximation-for-metric-tsp` | exit 0, unchanged | PASS |
| `fs-exact-np-hardness-implies-no-constant-approximation` | exit 0, unchanged | PASS |
| `cex-exact-np-hardness-implies-no-constant-approximation` | exit 0, unchanged | PASS |

## Uneditable findings

1. `items/thm-gap-csp-is-np-hard.md`, unqualified Statement and final Remarks: its proof uses the logarithmic iteration lemma, which uses the gap-amplification theorem; that route reaches the Margulis spectral-gap proof, the real and complex spectral theorems, the local proof of algebraic closure of $\mathbb C$, and finite Galois theory. The local `thm-relative-automorphism-group-and-separable-degree-bound` proof explicitly assumes AC; `thm-algebraic-embedding-extension`, proof steps 3.1 and 5.1, invokes Zorn; `thm-zorn`, proof step 4.1, applies AC. The unqualified gap theorem and its claim that no choice principle is used omit this proof-route assumption. The assigned consumer is `lem-pcp-verifier-reduces-to-gap-max-three-sat`.

2. `items/thm-pcp-theorem-np-equals-pcp-log-n-o-one.md`, unqualified Statement and final Remarks: proof step 1.2 uses `thm-gap-csp-is-np-hard` to prove the NP-to-PCP inclusion, but the current supplier proof route above uses AC while this published item says neither inclusion uses a choice principle. The assigned consumer is `lem-pcp-verifier-reduces-to-gap-max-three-sat`, which explicitly carries AC for that supplier route; that does not repair the published theorem’s own missing proof assumption.

These are the only remaining findings. They are recorded in `research/frontier-37-owner-30-reader-findings-17.json` for the 5b lead; the published items were not edited.

## Source checked for PCP conversion

Read Arora and Barak, *Computational Complexity: A Modern Approach*, author-hosted draft, §18.2.4 Theorem 18.13 and §18.2.5 Lemma 18.15 proof, printed pp. 358–360 ([PDF](https://theory.cs.princeton.edu/complexity/book.pdf)). Theorem 18.13 states that a constant-gap qCSP promise problem is NP-hard; Lemma 18.15 converts it to a constant-gap 3-SAT instance by a polynomial construction preserving completeness and a fixed fraction of violated constraints. The adjacent Lemma 18.16, printed pp. 360–361, uses seven local satisfying assignments per clause; it is not the same graph as the assigned three-occurrence construction. The latter’s exact edge rule was checked in the current local 3-SAT-to-CLIQUE proof cited above.

## Page verdicts and coverage note

- A page: the summary accurately describes the approximation analyses, the PCP-to-gap reductions, and the explicit AC caveat for the current PCP supplier proof route. The repaired item-level graph description and Kruskal runtime explanation now match their evidence. The two published proof-route findings remain open.
- B page: the calculations for greedy set cover, conditional expectation on $K_3$, the four-vertex square metric, the clause graph, and $P_4$ check out. Its counterexample summary is accurate for the clarified unconditional claim. No B-page prose was edited.
- Blocker: none.
- Limitation: I checked the current statements of the direct dependency inventory and traced the PCP supplier route far enough to verify the explicit Zorn/AC use. I did not independently re-prove every unrelated transitive published theorem or retrieve every bibliography entry attached to all 27 assigned items; the non-PCP arguments were checked from their current self-contained proofs and the relevant dependency statements.
