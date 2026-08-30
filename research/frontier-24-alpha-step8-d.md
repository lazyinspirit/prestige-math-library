# Step 8 adjudication — group d

## Scope and outcome

Batch 10 contains 21 exact rejection tuples over 21 items. All 21 were
adjudicated against the current pre-edit item text and cited dependencies:
8 are `confirmed_fatal`, 12 are `confirmed_nonfatal`, and 1 is
`false_positive`. Only the eight fatal items were edited.

## Adjudications

| item | context_sha256 | outcome | basis |
|---|---|---|---|
| `cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language` | `6e5ba9d898c0b709b8aa3a5f454960c216bbb2fd739dad9d1b6fb92ec77b2b7b` | `confirmed_fatal` | Checking one word did not establish that the precedence grammar is globally unambiguous or generates the same language, so the counterexample witness was incomplete. Repaired. |
| `cor-regular-languages-are-closed-under-boolean-operations` | `179a09a952025f0f180764275f6324e05afaec70169ec3ae74118c715fc58db5` | `confirmed_nonfatal` | The same complement theorem applied to the chosen DFA for `K` immediately gives the omitted DFA for `Sigma-star` minus `K`; the claim and construction remain correct. |
| `def-ambiguity-and-inherent-ambiguity` | `83d27a693592d709e89637bd5522c21f4039b5c7665f7f88b152abe06197c799` | `confirmed_nonfatal` | The cited correspondence proof constructs a parse tree from every derivation, and a leftmost derivation fixes the production at each tree node; the omitted reverse uniqueness sentence is local. |
| `def-dfa-acceptance-and-recognized-language` | `de36d31d77a45ed84d004f8691133bac1e113abd59a75515d34646e6ef4ddda0` | `confirmed_fatal` | The definition used “its” extended transition function without depending on the theorem that makes this object unique. Repaired. |
| `def-extended-dfa-transition-function` | `fdcf95b7f9d06cb48eb1c3360c4111b7ab2f88544e89c58e151adc2a7d2b9196` | `confirmed_fatal` | The definition used `Sigma-star`, the empty word, and concatenation outside its declared dependency cone. This independently matches the Step-7 concern. Repaired. |
| `fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language` | `6b3d9b6e533eb9c75f851a7dd5c11f1812bed6451eacbdafa363d3416225795f` | `confirmed_fatal` | Checking one word did not prove the global language equality and unambiguity needed by the refutation. Repaired. |
| `fs-complementing-a-dfa-complements-its-transition-graph` | `d13c77b9130d40f1a0061140ff9c66f2e777d5587ce3fc02d5a90f398f2ef595` | `confirmed_nonfatal` | For the given one-state total-loop DFA with its sole state accepting, every run ends in that accepting state; `L(D)=Sigma-star` is immediate from the displayed data. |
| `lem-extended-dfa-transition-respects-concatenation` | `94560040f53b315ba756d9797215bc4fd08fd797bbffe1f665c5e5f4d94317ef` | `confirmed_nonfatal` | The base case additionally uses the elementary empty-word identity `u epsilon = u`; this is an immediate proof-step closure and does not alter the claim. |
| `lem-gnf-left-recursion-elimination-preserves-language` | `ffb8c67cf1e503ccfb1f53cf9e9eba794b616487df26a482616b66e10235aac6` | `confirmed_nonfatal` | Any finite CFG derivation can be reordered to rewrite its leftmost remaining variable first because rewrites at distinct occurrences commute. The omitted normalization is local. |
| `lem-gnf-substitution-step-preserves-language` | `35ba064aaf8aaa1f5777eef2ef5d30518859be78d46d943b4b37c208a5b46e46` | `confirmed_fatal` | Step 1.1 falsely kept `u` and `v` unchanged while their variables could be rewritten before the distinguished `B`. Repaired. |
| `lem-removing-unreachable-states-preserves-language` | `3988451d9fd6bbd7a161806f2bd1a27545312229a806c8e310d654c825126202` | `confirmed_nonfatal` | Step 1.1 already shows that the start state and every transition successor encountered from a reachable state are reachable; the restricted transition closure is immediate. |
| `prop-every-finite-language-is-regular` | `9549184a7a93154d03e47145809a0051621cef7f82620714dec4969050d11d8a` | `confirmed_nonfatal` | A length-`n` word has exactly `n+1` prefixes, and a finite union of finite sets is finite. This elementary finite-set step closes the stated fact. |
| `prop-published-prefix-automata-extend-to-factor-avoidance-dfas` | `3d150dfa53a2ab9a5309cd7283278d14dfc9517919505fce7eaa5cd3c7319a41` | `confirmed_nonfatal` | If an appended letter first completes a forbidden word, that word’s proper prefix is a suffix of the old input and hence a suffix of the longest prefix-state; this supplies the omitted induction invariant locally. |
| `thm-chomsky-normal-form` | `2c684d83bf447b2b618a80a659d5f84396bd43bd10c84b532b51f1c25a51b40e` | `confirmed_fatal` | The displayed binarization referenced `C_2` when `k=3`, so the construction was undefined at a material boundary case. Repaired. |
| `thm-complementing-accept-states-complements-the-language` | `23cbf35b6f8265c5cc35ce20b825b71227bb678f80d455c3b64f9f6480bedd0b` | `confirmed_nonfatal` | Machines with the same transition function have the same recursively determined extended transition; the omitted uniqueness invocation is immediate. |
| `thm-dfa-for-language-difference` | `2b0c6ad1a1cbace3a794dfc294c9a1e4e6c48bb07e88c54f29264df85876e84f` | `confirmed_nonfatal` | The cited product theorem’s construction and proof explicitly define the product transition and establish componentwise tracking; the fact label compresses that nearby result but does not inflate it. |
| `thm-elimination-of-unit-productions` | `f6757654badb34df686a0d4c587f9b2a50936adca0e32efcf4b1102a16acccb5` | `confirmed_fatal` | “Unit production” was the central predicate of the statement and construction but was nowhere defined or cited. Repaired. |
| `thm-elimination-of-useless-symbols` | `75f57f9cdf8a9b0f3e98ab7ba2cfe08ea2aaa87fdeb6515efd9ff1750b3d35c6` | `confirmed_fatal` | Deleting productions without restricting the variable carrier left useless variables in the resulting grammar, contradicting clause 2. Repaired. |
| `thm-existence-and-uniqueness-of-extended-dfa-transition` | `00c6865cd592fcd9537a0f77ed74cea4bacf2584ac8c45f72ef4d72bd5549a12` | `confirmed_nonfatal` | The Step-7 digest independently identified this citation gap, but finite-word decomposition and induction on word length are elementary and the construction is correct as written. |
| `thm-greibach-normal-form` | `a7b231bc21b3ad09bbd10986b3f8d7db5d484ecf190bb70ea38aeb9e2fa572f2` | `false_positive` | The rejection says step 1.1 concludes that every variable is useful, but the current item makes no such claim; it only replaces the grammar by an equivalent CNF grammar and orders its variables. |
| `thm-product-dfa-for-union-and-intersection` | `31ab7035a1be96313ea45d0883cb8c569089c183821abc455f65790ea2a6fdbf` | `confirmed_nonfatal` | The Cartesian product of two finite state sets is finite by the elementary pairing of finite enumerations; this local omission does not affect the product construction. |

## Repairs and rejudge targets

1. `def-extended-dfa-transition-function` now declares the published finite-word convention that defines its notation.
2. `def-dfa-acceptance-and-recognized-language` now depends on and cites existence and uniqueness of the extended transition.
3. `thm-elimination-of-useless-symbols` now restricts the intermediate variable carriers to the generating set `T` and reachable set `R`.
4. `thm-elimination-of-unit-productions` now defines a unit production before using the term.
5. `thm-chomsky-normal-form` now gives a uniformly indexed binarization and states the `k=3` chain explicitly.
6. `lem-gnf-substitution-step-preserves-language` now commutes the distinguished `B` rewrite past disjoint context rewrites before contracting the two-step fragment.
7. `fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language` now proves both language inclusions and global unambiguity by forced top-level operator decomposition.
8. `cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language` now supplies the same global witness verification.

All eight repaired items are rejudge targets. Their prior judge contexts are
stale by construction; the engine owns the configured rejudge cycle.

## Alerts and sources

There were no incoming alerts, no cross-group seam, and no outgoing
cross-group mathematical finding. No published item was changed.

No web source was consulted. Every disposition was resolved from the current
item text, the cited library dependencies opened during the group read, and
elementary finite-word, finite-set, DFA, and CFG derivations.

## Evidence and checks

- Exact evidence join: 21 group-d rejections, 21 unique exact adjudications,
  8 confirmed fatal, 12 confirmed nonfatal, and 1 false positive.
- Fatal-only guard: the group-d changes are exactly 8 changed items, all 8
  licensed by matching pre-edit guard hashes and confirmed-fatal rows.
- Focused proof precheck: 6 repaired proof-bearing items checked, 0 failures.
- Focused render check: all 8 repaired items passed YAML, delimiter, wikilink,
  and KaTeX checks.
- Focused strict proof-contract check: all 6 repaired proof-bearing items
  checked, 0 errors and 0 warnings.
- Batch citation fidelity: 53 citations checked over 28 proof items, with 0
  missing quotes and 0 widening candidates.
- Dependency, forward-reference, and external-reference checks exited 0; their
  repository-wide warning inventories predate this group repair.
- Step-8 scope check exited 0: 4 groups, 493 partitioned items, 263 rejection
  rows still routed to other groups, and 0 cross-group alerts.
- Defect-ledger check exited 0: 148 frontier-24 rows checked, 0 errors.
- The whole-run guard passed while group d was the only writer. On the final
  rerun it correctly recognized all 8 group-d licenses but exited 1 because 23
  concurrent changes outside this group did not yet have adjudication rows:
  `cex-a-pointwise-finite-smooth-family-whose-sum-is-not-continuous`,
  `cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake`,
  `cor-the-tangent-space-of-an-n-manifold-has-dimension-n`,
  `def-cholesky-factorisation-with-positive-diagonal`,
  `def-contact-equivalence-of-smooth-curves-at-a-point`,
  `def-coordinate-derivations-at-a-point`,
  `def-differential-of-a-smooth-real-valued-function`,
  `def-ldu-factorisation`, `def-normalised-lu-factorisation`,
  `def-permutation-matrix-partial-pivoting-and-pivot-growth`,
  `def-real-and-complex-givens-transformations`,
  `def-the-local-algebra-of-smooth-function-germs`,
  `def-velocity-derivation-of-a-smooth-curve`,
  `ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces`,
  `ex-noether-normalisation-triangular-change`,
  `ex-tangent-basis-change-between-cartesian-and-polar-coordinates`,
  `ex-the-published-module-five-lemma-as-an-instance`,
  `fs-a-partition-of-unity-can-glue-manifold-valued-maps-by-taking-weighted-sums`,
  `fs-an-arbitrary-pointwise-sum-of-smooth-functions-is-smooth`,
  `fs-curve-velocities-in-two-charts-have-the-same-coordinate-tuple`,
  `fs-the-cotangent-bundle-uses-the-same-transition-matrices-as-the-tangent-bundle`,
  `rem-induced-representation-agrees-with-the-tensor-product-model`, and
  `thm-burnsides-p-a-q-b-theorem`. No whole-run guard pass is claimed.

## Changed artifacts

- Appended 21 exact-hash rows to
  `research/frontier-24-judge-adjudications.jsonl`.
- Repaired the 8 rejudge-target items listed above.
- Added `research/frontier-24-alpha-d-step8-defect-rows.json`, appended its 8
  rows through `tools/defect-ledger.mjs`, and regenerated the defect-ledger view.
- Added this group report.

## Blockers

Group d has no mathematical, ownership, or access blocker. Whole-run guard
closure is currently pending the 23 out-of-group in-flight edits named
above; the engine owns their routing, adjudication, and stage transition.
