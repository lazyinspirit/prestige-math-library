# Cross-batch dependency review — consumer batch 13

Run: `phase-2-remaining-27`. Consumer batch: 13
(`real-forms-and-real-semisimple-lie-algebras` pair, plus the
`moment-maps-and-symplectic-reduction` pair that shares the batch).
File rewritten: `research/phase-2-remaining-27-batch-13.cross-batch-dependencies.json`.

## Counts

- Declared cross-batch edges with `consumer_batch` 13 (after
  `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27`):
  **146** = 141 item edges + 5 page edges, over **36 consumers**
  (34 item consumers + 2 page consumers), suppliers from batch 11 (125)
  and batch 12 (21).
- Rows written: **146**, one per declared edge, in the established format.
- **verified: 146. defect: 0.**
- Stale rows dropped: **4** (edges no longer declared, see below).
- After the rewrite, `refresh --run phase-2-remaining-27 --require-reviewed`
  passes; the batch-13 file contributes no unreviewed edge and no orphaned
  review.

## Method

For every declared edge both endpoints were read. For each consumer item the
statement, the facts and assumptions list and the proof (or refutation)
step that consumes the supplier were read, and each supplier item's statement
was read in full before the disposition was recorded. The five page edges were
checked against the page `requires` declarations and the supplier pages'
scope. Evidence rows name the supplier's claim, the consumer's use (fact tag
and step number where one exists) and why the interface is sufficient.

## Defects

None. No declared edge was found where the supplier's statement fails to
supply what the consumer's proof uses. In particular the following
potentially risky interfaces were checked and are sound:

- `prop-uniqueness-and-change-of-positive-system-in-iwasawa-decomposition`
  applies `thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers` to
  the reduced part `Sigma_s` of the (possibly nonreduced) restricted system
  `Sigma`: `[L3]` states that `Sigma_s` is reduced crystallographic with
  `W(Sigma_s)=W(Sigma)` and the same hyperplanes, so all hypotheses of the
  supplier are met.
- `thm-existence-of-a-compact-real-form` and `lem-chevalley-...` use
  `thm-root-sl-two-triple`, `thm-serre-presentation-theorem` and the
  root-space suppliers with matching hypotheses (AC propagated in `[A1]`).
- The batch-12 compact-group suppliers
  (`thm-conjugacy-of-maximal-tori`,
  `thm-every-element-of-a-compact-connected-lie-group-lies-in-a-maximal-torus`,
  `thm-structure-of-a-compact-connected-abelian-lie-group`,
  `thm-analytic-and-root-system-weyl-groups-agree`,
  `thm-compact-group-weyl-group-is-finite`,
  `cor-normalized-haar-measure-on-a-compact-lie-group`,
  `prop-integration-against-haar-is-invariant-under-translations-and-conjugation`)
  supply exactly the statements the consumers' steps invoke, with the Axiom
  of Choice declared and propagated by the consumers.

## Non-blocking interface notes (recorded, not defects)

These are recorded in the evidence fields; the orchestrator may route them to
serial reconciliation, but no consumer relies on content its supplier lacks.

1. `prop-classical-real-forms-of-the-classical-complex-lie-algebras` cites
   `def-classical-complex-matrix-lie-algebras` in `[L2]` for the definitions
   of `su(p,q)`, `so(p,q)`, `sp(p,q)`, `sp_2n(R)`, `so*(2n)`, `sl_n(R)`,
   `sl_n(H)`, but the supplier defines only the **complex** classical matrix
   algebras (`gl_n(C)`, `sl_n(C)`, `sp_2n(C)`, `so_m(C)`). The named real
   matrix algebras are constructed inside the consumer itself in steps 1.1-1.4
   as fixed loci of explicit conjugate-linear involutions, so the proof's use
   of the supplier (the complex matrix model) is fully supplied; the `[L2]`
   attribution is imprecise and is a candidate for a wording fix.
2. Redundant supplier citations (over-declarations, no unsupplied content):
   `thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k` cites
   `thm-conjugacy-of-maximal-tori` in `[L4]` but proves conjugacy by its own
   displacement argument; `thm-vogan-diagram-...-is-well-defined-up-to-equivalence`
   cites `thm-conjugacy-of-maximal-tori` and
   `def-torus-and-maximal-torus-in-a-compact-lie-group` in `[L2]`, where the
   used commutativity `Ad_k theta = theta Ad_k` is immediate from `K = G^Theta`.
   No false or stronger claim is imported by these citations.
3. `thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification`
   uses `[L6]` "a maximal abelian subspace of `k_0` is the Lie algebra of a
   maximal torus of `K`": this identification follows elementarily from
   `def-torus-and-maximal-torus-in-a-compact-lie-group` together with `K`
   compact with Lie algebra `k_0` (in-batch global Cartan decomposition), and
   is recorded as such in the evidence.

## Stale rows dropped

Four rows of the previous version referred to edges with no current
declaration (neither the batch-13 manifest, the items' `deps`, nor a page
`requires` contains them). Per the dispatch they were removed:

- `def-cayley-transform-of-a-theta-stable-cartan-subalgebra <-
  thm-root-sl-two-triple` (verified row; the definition now derives the
  `sl_2`-triple normalization from the Killing-form identities itself).
- `thm-restricted-weyl-group-is-the-reflection-group-of-the-restricted-root-system
  <- thm-root-sl-two-triple` (verified row; the item derives the reflection
  action from the restricted-root theory itself).
- `thm-existence-and-uniqueness-up-to-isomorphism-of-the-split-real-form <-
  thm-isomorphism-theorem-for-complex-semisimple-lie-algebras`
  (`removed` row; the Step-3b repair A dropped this dependency and the item
  no longer cites it).
- `thm-existence-and-uniqueness-up-to-isomorphism-of-the-split-real-form <-
  thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates`
  (verified row; the repaired item no longer cites this supplier).

No other batch's file was edited and no item, manifest, coverage, proof
contract or notes file was touched.

## Checks run

- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27`
  then `... --require-reviewed`: passes; 0 unreviewed edges, 0 unreviewed
  batches for batch 13.
- Batch-13 file re-parsed: 146 rows, statuses `verified`, no duplicate
  consumer/supplier pair, no orphaned review.
