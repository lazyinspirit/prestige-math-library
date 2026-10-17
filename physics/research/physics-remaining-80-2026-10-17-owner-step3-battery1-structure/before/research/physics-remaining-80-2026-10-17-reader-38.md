# Step 3a reader report — batch 38

Run: `physics-remaining-80-2026-10-17`  
Role: reader (`reader-38`)  
Scope: batch `38`

## Reviewed inventory

Pages opened:

- `qsm-quasilocal-states` (A), `library/quantum-statistical-mechanics/qsm-quasilocal-states.md`
- `qsm-quasilocal-states-examples` (B), `library/quantum-statistical-mechanics/qsm-quasilocal-states-examples.md`

All twelve assigned items were opened and reviewed in the A-page dependency order, followed by the B examples:

- `lem-qsm-integer-lattice-countable`
- `def-qsm-local-spin-algebras`
- `lem-qsm-local-spin-inclusions-isometric`
- `def-qsm-quasilocal-spin-algebra`
- `lem-qsm-quasilocal-completion`
- `def-qsm-infinite-algebraic-state`
- `lem-qsm-consistent-local-states`
- `lem-qsm-spin-state-compactness`
- `lem-qsm-state-gns-construction`
- `ex-qsm-quasilocal-two-site-locality`
- `ex-qsm-quasilocal-infinite-tail-observable`
- `ex-qsm-maximally-mixed-consistent-product-state`

The opened direct prerequisite statements include the countability definitions and results (`def-countable`, `lem-countable-iff-surjection-from-n`, `lem-finite-powers-of-countable-sets-are-countable`, `thm-countable-union-of-countable`, `thm-rationals-countable`); integer/natural definitions and order results (`def-integers`, `def-int-order`, `def-int-operations`, `thm-int-ordered-ring`, `def-natural-numbers`, `lem-nat-order-is-membership`); norm, completion and C*-algebra suppliers (`def-c-star-algebra`, `def-completion-of-a-normed-space`, `def-countable-choice`, `thm-metric-completion-carries-a-unique-banach-space-structure`, `lem-completion-operations-are-well-defined`, `def-state-on-a-c-star-algebra`); and the state-space, compactness and representation interfaces (`thm-nested-interval-property`, `thm-recursion`, `thm-completion-of-an-inner-product-space-is-hilbert`, `def-space-of-bounded-linear-operators`, `def-operator-norm`, `thm-hilbert-adjoint-properties`). I also opened the current draft dependencies `lem-qsm-matrix-state-calculus` (batch 36) and `lem-qsm-finite-matrix-cstar-and-state-duality`, the added published natural/cardinality suppliers (`def-finite-cardinality`, `def-nat-power`, `def-nat-order`), and the relevant published trace, density-operator, and convex-extreme-point definitions.

I read the batch-38 proof-contract inventory and consulted the batch notes, coverage record, and cross-batch dependency rows as navigation evidence. I checked the cited source locations relevant to the claims: Naaijkens, §§2.4–2.5 and 3.2.2–3.2.3 ([author-hosted PDF](https://arxiv.org/pdf/1311.2717)); Ruelle, Chapter 1 §4 and Chapter 3 §1 ([author-hosted PDF](https://arxiv.org/pdf/math-ph/0107009)); Watrous, *The Theory of Quantum Information*, Chapter 2 ([author-hosted PDF](https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf)); and Kardar, MIT OCW Lecture 21 ([official PDF](https://www.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/4f8defd6fcba707a0c691dd8957a43e3_MIT8_333F13_Lec21.pdf)). The local arguments were assessed from the current item text; the external citations were checked as provenance and scope references.

## Repairs made

1. In `items/lem-qsm-integer-lattice-countable.md`, replaced the signed-integer parity enumeration, which used the natural-to-integer embedding and integer operations without supplying those definitions, with a surjection obtained by composing a surjection onto `N × N` with the quotient map `N × N → Z`. Added `def-integers` as a dependency and [F4] stating its exact quotient interface. Updated the proof contract to match the new facts, derivations, and boundary checks.

2. In `items/def-qsm-local-spin-algebras.md`, made the positive natural-number domain for `q`, finite cardinality notation, and natural exponentiation explicit in the dependencies and exposition. The current definition also specifies integer absolute value and the ordered-ring argument used for the max-coordinate metric. Refreshed the batch-38 proof-contract excerpts that cite this Definition.

3. In `items/def-qsm-infinite-algebraic-state.md`, defined `Tr_Δ(T)` as the finite configuration-basis matrix sum, stated its domain and codomain, and derived the equivalent pairing identity with local traces. Added `def-qsm-local-spin-algebras` as a direct prerequisite. This repairs the previously unspecified partial-trace operation while preserving the existing consistency condition.

4. In `items/ex-qsm-maximally-mixed-consistent-product-state.md`, replaced [F2]'s vague reference to a partial-trace pairing with the exact pairing identity from the repaired definition. Refreshed the affected batch-38 contract quotes for the state and local-algebra definitions.

No changed item had a stale `verification.judge` record. Reflow reported no file changes. Precheck passed on all four changed items. Final proof-layout result: `4 items, 7 steps, 0 defects`.

## Uneditable finding

`lem-qsm-matrix-state-calculus` is a draft supplier assigned to current-run batch 36, outside this reader's edit scope. Its current source hash is `e06262234d6c79a5e82d3c5858a14f4a6537fdd0b5aea6996dcd98b6d93bfc68`. The Statement uses `Tr` for density normalization and weighted pairings, but neither defines it nor lists the published `def-trace-of-an-endomorphism` supplier in `deps`; Proof 3.1 then uses trace cyclicity and basis independence. The same item also uses “logarithms on positive supports” without defining the support/domain convention, and claims that rank-one density matrices are exactly the “extreme points” without the exact convex-definition prerequisite (or a local definition). These defects and their precise locations are in the findings JSON. The assigned item `def-qsm-local-spin-algebras` directly depends on this supplier; the state and GNS consumers reach it through the assigned dependency closure. This remains an open batch-36 supplier obligation.

## Page verdicts and blocker

- **`qsm-quasilocal-states` (A): hold.** The page summary and its diagram description match the definitions and proofs. The page depends on the batch-36 finite-matrix supplier through `def-qsm-local-spin-algebras`; the undefined trace interface remains open there.
- **`qsm-quasilocal-states-examples` (B): hold.** The three example summaries match the checked calculations. The maximally mixed example now states the partial-trace pairing it uses. Its prerequisite closure still reaches the same unresolved batch-36 supplier.

Blocker: acceptance of both pages remains conditional on repair and independent review of `lem-qsm-matrix-state-calculus` in batch 36. This reader made no edits outside batch 38, to published material, or to page B prose.

## Coverage limits

I reviewed the relevant statements of the published mathematical prerequisites and the complete proofs of the current draft matrix-state suppliers. I first opened the assigned items in manifest order, then opened the upstream batch-36 draft suppliers and rechecked the dependent arguments before making final dispositions; I did not preserve literal supplier-first file-opening order. I did not re-audit the full proofs of every published mathematical prerequisite or perform a corpus-wide QSM audit. I made no empirical claims; this batch is mathematical and contains no observations or statistical inference.
