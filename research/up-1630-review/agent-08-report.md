# U-P review, shard 08

All 163 assigned items were reviewed in `agent-08.jsonl` order, one at a time. Each complete receipt was appended before the next item was started. The final validation found 163 unique, ordered receipts matching the assignment exactly.

| Decision | Count |
| --- | ---: |
| Accept | 119 |
| Repair | 20 |
| Defer, retaining U-P | 24 |

## Changes and impact

Twenty assigned items received a local proof or claim repair. Focused precheck and rendercheck passed for the edited items, and their diffs were inspected. Repairs include the matrix-tree theorem, proper Morse exhaustions and excellent Morse functions, graph-power and MajoritySAT definitions, several explicit examples, the read-only workspace diagonal argument, the faithful-character inertia argument, finite probability-space additivity, totality's malformed-code case, and the Adem double-power comparison's disconnected degree-zero case. The individual receipts record exact changes and checks. Root subsequently simplified one quasi-geodesic proof after its receipt; its direction notes the superseded hash and supplemental verification.

Six original claim interfaces changed, with complete published consumer traces in the corresponding `agent-08-impact-*.json` files and immediate `impact` events:

- `prop-proper-morse-exhaustions-exist-on-smooth-manifolds` and `cor-every-compact-smooth-manifold-admits-an-excellent-morse-function` gained their proof-route AC premise; neither had published consumers.
- `def-graph-power-and-walk-constraint` clarified reversal fixed slots and multigraph pair multiplicity; no published consumers.
- `def-majority-sat` specified declared variables and malformed inputs; its sole consumer uses the refined contract soundly.
- `def-noetherian-ring-and-module` qualified the finite-generation/ACC equivalence by DC. Four consumers use the unchanged finite-generation clause soundly; `lem-noetherian-domains-are-atomic` needs a premise or proof repair and was routed to root. The source definition remains deferred because this consumer interface is unresolved.
- `ex-borel-ball-volume-before-any-comparison-theorem` gained countable choice in the Example claim to match its measure suppliers. Its published consumer closure is empty.

The event log contains 18 `cross_shard_repair` notices, six `impact` notices, two receipt amendments and one interface-change intent. Root's directions were checked through shard completion. Other-shard items and the canonical ledger were not edited.

## Deferred items

The 24 defer receipts state the exact unmet prerequisite. They are grouped here only for navigation; each was assessed individually.

- Zeta and prime-counting chains: `cor-nth-prime-asymptotic`, `cex-dirichlet-density-alone-does-not-give-a-counting-asymptotic`, `thm-zeta-bounds-in-classical-zero-free-region`, `thm-trivial-zeros-and-critical-strip`, `thm-special-values-of-riemann-zeta-at-integers`, and `thm-riemann-von-mangoldt-zero-counting`.
- Measure, CW and homological interfaces: `def-radon-nikodym-derivative`, `cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex`, and `thm-cellular-homology-computes-singular-homology`. Finite-CW uses with separate finite arguments or an explicit choice premise were assessed individually and were not blanket-deferred.
- Noetherian, depth and Cohen–Macaulay chains: `def-noetherian-ring-and-module`, `lem-depth-lemma-lower-bound-middle`, `lem-finite-residue-field-projective-dimension-forces-depth-equals-dimension`, `lem-polynomial-extension-depth-increases-by-one`, `lem-regular-local-regular-quotient-ideal-is-parameter-generated`, `thm-associated-primes-of-cohen-macaulay-modules`, and `thm-regular-local-rings-are-domains-and-cohen-macaulay`.
- Functional-analysis choice interfaces: `lem-transpose-range-membership-by-domination`, `thm-canonical-bidual-map-is-an-isometry`, `thm-complex-hahn-banach-norm-preserving-extension`, `thm-dual-of-a-closed-subspace-is-a-dual-quotient`, and `thm-strong-separation-of-closed-and-compact-convex-sets`.
- Other exact gaps: `thm-slim-triangle-gromov-product-and-four-point-hyperbolicity-are-equivalent-up-to-constants` states its three substantive implications as assumptions; `thm-weyl-lemma-for-the-laplacian` imports the countable-choice-qualified spherical mean route; and `def-riemannian-symmetric-pair-of-noncompact-type` invokes a global Cartan result with AC absent from its Definition.

A defer records an unresolved published proof or premise interface, not a claim that the mathematical assertion is false. No new lemma was authored or proposed. No global configuration, build-driver state, canonical ledger, or other shard assignment was edited; no commit, build/autopilot transition, or delegated agent work was performed. Pre-existing and concurrent workspace edits were preserved. `git diff --check` was clean on the 21 assigned item files changed by this shard, including the one changed definition that remains deferred.
