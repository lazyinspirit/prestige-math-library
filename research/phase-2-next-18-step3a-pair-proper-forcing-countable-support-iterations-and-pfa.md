# Step 3a scope review — Proper forcing, countable-support iterations, and PFA

Run: `phase-2-next-18`  
A page: `proper-forcing-countable-support-iterations-and-pfa`  
B page: `proper-forcing-countable-support-iterations-and-pfa-examples`

## Decision

**Sufficient.** The planned pair adequately covers its intended subject and
needs no enrichment or merger.

## Evidence

- The 20 A items realize every part of the SET-27 prose design. They define
  countable-support iterations, countable-model genericity, master conditions
  and PFA; prove the master-condition characterizations, ccc/countably-closed
  examples, stationary-set and `omega_1` preservation, the iteration master
  lemma and the countable-support preservation theorem; compare PFA with
  `MA(aleph_1)` and SH; use PID as the planned reflection-style consequence and
  derive the topological no-S-space consequence; and separate Laver preparation
  from the Laver-guided bookkeeping, factorization, semantic PFA model, and
  formal supercompact-relative consistency transfer.
- The five B items give appropriately different tests of that spine: maximal-
  antichain genericity for ccc posets, Baumgartner's proper finite-condition club
  forcing, countable-cofinality fusion, PFA specialization of an Aronszajn tree,
  and a countably closed proper forcing with an `omega_1`-antichain refuting the
  converse ccc implication. This is adequate example coverage for the pair's
  role; a comprehensive survey of OCA, stronger forcing axioms, and all cardinal-
  arithmetic consequences of PFA is not promised by SET-27.
- The pair supplies the exact PFA, master-condition, and formal-consistency
  interfaces consumed by the later SET-29 page. It also covers the PFA/no-S-space
  and supercompact-relative clauses behind `rem-l-spaces-and-s-spaces`. The
  overlap with SET-29 is organized rather than a reason to merge: SET-27 owns
  the general PFA/PID and consistency machinery, while SET-29 owns the
  minimal-walk/L-space construction and a specialized ideal-to-topology route.
- Coverage records four fetch-verified authoritative treatments at exact
  locators: Karagila, Chapter 8, printed pp. 38–42; Cummings, Chapter 24,
  printed pp. 97–101; Moore–Venturi, §§3.2, 4.3 and 5, printed pp. 4–9; and
  Todorcevic, §7, printed pp. 20–22. I reread those complete relevant ranges.
  They support the proposed definitions and examples, the semantic
  supercompact-to-PFA construction, the direct PFA-to-PID forcing, and the
  PID/topology route. Karagila only states the general countable-support
  iteration theorem and Cummings invokes it as an interface; the scaffold
  nevertheless includes both the missing master lemma and the theorem. The
  absence of a printed full iteration proof is a Step-3b proof/source obligation,
  not an omitted definition or result in this scope decision.
- Five former Step-1 escalations now have current owner `ready` records:
  PFA-to-PID, PID plus `p>omega_1` eliminating S-spaces, their PFA corollary,
  the finite-fragment compiler, and the formal consistency corollary. The stale
  escalation summary in the batch note predates those records and the added
  Moore–Venturi coverage. No owner scope record exists for this A page.
- The plan agrees on the page ids, titles, category, order, companion and the
  two declared earlier prerequisites; its empty item arrays are the expected
  pre-splice state. The current SET-17 insufficient decision concerns the
  omitted rational-specialization equivalence, not the Kurepa/MA suppliers used
  by SET-27. Batch 6's note that SET-17 is not named at page level despite those
  exact item dependencies is a later dependency-metadata reconciliation issue,
  not a scope omission in this pair.

## Checks

- `manifest-deps` on batch 6: 52 items, 0 errors.
- `content-policy --manifest-only` on batch 6: 52 items, 0 errors or warnings.
- `coverage-checklist --require-destination` on batch 6: 2 A pages, 54
  harvested results, 0 errors or warnings.
- `source-fetch-check` on batch 6: 6/6 page-source entries fetch-verified and
  resolved; four entries belong to this pair.
- `validate-plan research/plan-spec.json --max-items 60`: success; no item-level
  cycles, forward references, B-page dependencies or unresolved ids among
  pages with item lists.

This is a scope determination only. It does not approve individual proofs or
replace the Step 3b mathematical audit.
