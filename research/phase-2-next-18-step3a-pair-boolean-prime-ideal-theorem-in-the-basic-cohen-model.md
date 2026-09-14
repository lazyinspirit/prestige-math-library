# Step 3a scope review — Boolean Prime Ideal Theorem in the basic Cohen model

Run: `phase-2-next-18`  
A page: `boolean-prime-ideal-theorem-in-the-basic-cohen-model`  
B page: `boolean-prime-ideal-theorem-in-the-basic-cohen-model-examples`

## Decision

**Sufficient.** The planned pair adequately covers its deliberately narrow
replacement role and needs no enrichment or merger.

## Evidence

- The batch-7 manifest has exactly the binding §7.9 inventory from
  `research/plan-set-theory-completion-track.md`: six A-page items and two
  B-page items in the prescribed order. The A page covers the basic-Cohen
  continuity schema, its finite disjoint-clopen specialization, construction
  of a maximal proper ideal within the supported definability class, the
  finite Boolean argument forcing that ideal to be prime, the semantic
  `ZF+BPI+not AC` model theorem, and the formal
  `Con(ZF) -> Con(ZF+BPI+not AC)` corollary. The B page isolates the decisive
  Boolean expansion as a worked example and corrects the false assertion that
  BPI is equivalent to AC, with the necessary consistency qualification.
- I read the complete four-page primary argument in Miroslav Repický,
  *A proof of the independence of the Axiom of Choice from the Boolean Prime
  Ideal Theorem*, pp. 543--546 ([DML-CZ record and full text](https://dml.cz/handle/10338.dmlcz/144758)).
  Its Lemma 2, Corollary 3, supported maximal-ideal construction, and final
  finite Boolean expansion account for all load-bearing mathematical stages
  in the manifest. It also confirms that the full Halpern--Läuchli theorem is
  unnecessary for this direct route. The inspected PDF has the same
  `e9fa0c8091b657a5...` hash recorded in the current coverage file.
- The coverage entry also records Jech's complete surrounding basic-Cohen and
  Prime Ideal Theorem treatment. Its six harvested Repický results are all
  included. The formal consistency corollary and the B-page false statement
  are derived endpoints rather than missing source topics: their manifests
  cite the same complete theorem and depend on the earlier published
  finite-fragment consistency machinery. There is no unresolved source record
  for this pair.
- The page boundary is intentional. This is the Phase-2 replacement supplier,
  not the full SET-21 Halpern--Läuchli survey. Boolean-algebra/BPI vocabulary,
  the basic Cohen symmetric system, forcing equivariance, failure of AC, and
  formal source-model transfer are already in the earlier prerequisite
  closure. The later `halpern-lauchli-and-bpi-without-choice` page consumes all
  six A items for its model clause and the final consistency corollary for its
  conditional separation results, while proving its tree combinatorics
  locally. Adding that combinatorics here would duplicate later scope and
  reverse the intended dependency cut.
- The current plan agrees on page ids, titles, category, orders, companions,
  and prerequisites; its empty item arrays are staging shells. The scope
  ledger assigns both pages to batch 7. All eight item readiness records are
  current and `ready`, batch 7 declares no incoming current-run dependency,
  and the batch-8 ledger records the expected open outgoing consumer edges.
  No Step-3a owner decision exists for this A page.

## Checks

- `manifest-deps` on batch 7: 42 items, 0 errors.
- `content-policy --manifest-only` on batch 7: 42 items, 0 errors or warnings.
- `coverage-checklist` on batch 7: 2 A pages, 34 harvested results, 0 errors or
  warnings; this pair's entry has two complete sources and six disposed source
  results.
- `validate-plan research/plan-spec.json --repo .`: success; page order and
  declared prerequisites are acyclic and consistent.

This is a scope decision only. It does not approve any item statement, proof,
dependency proof, or owner transition.
