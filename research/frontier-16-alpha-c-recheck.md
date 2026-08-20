# Frontier 16 — Alpha group c step-3 re-check

**Dispatch:** `recheck-c`  
**Owned batches:** 3, 4, 7

- `B3-1` — **confirmed** — `research/frontier-16-batch-3.pages.json` now places `cor-indefinite-henstock-kurzweil-integral-is-a-primitive` immediately after the derivative theorem with a closing strategy and contract. `research/frontier-16-batch-3.coverage.json` corrects Proposition 1.14 and disposes every omitted Fonda result named in the finding. During re-check I corrected Proposition 1.16 from a purported inline use absent from the integration-by-parts strategy to `already-published` via the exact sum and scalar-multiple clauses of `thm-algebra-of-derivatives`.
- `B3-2` — **confirmed** — the HK Cauchy criterion explicitly uses `def-countable-choice` to select the sequence of gauges, then finite pointwise minima, nonempty nested fine-sum hulls, and the nested-interval theorem. The contract assigns the choice use to step 2.1. `def-countable-choice` is published and its home page is already in the transitive prerequisite closure of `the-fundamental-theorems-of-calculus`, so no new page-level prerequisite is needed.
- `B4-1` — **pushback accepted** — the Beta correctly reported that no further batch edit was required. Both `research/frontier-16-batch-4.pages.json` and the current `research/plan-spec.json` declare `further-trigonometric-identities-and-inverses`, and the tangent example lists `def-principal-inverse-tangent`. Plan validation is clean.
- `B7-1` — **confirmed** — `research/frontier-16-batch-7.pages.json` now contains the distinct proof-bearing `thm-fundamental-theorem-of-algebra-liouville-proof`, whose route makes the zero-free reciprocal entire, bounds it outside a disc by polynomial growth and inside by compactness, and applies Liouville. It does not depend on the published minimum-modulus FTA theorem. The immediately following agreement remark depends on both independent theorem ids, all four harvested FTA headings point to the new theorem, and the owning proof contract contains the complete nine-step route. The reciprocal published backlink remains explicitly queued for a later authorised stage.

## Per-pair verdicts

| A page | verdict | evidence |
|---|---|---|
| `picard-lindelof-and-first-order-odes` | **ready for splice** | It was sufficient at review and no fix finding was opened against it. |
| `the-gauge-integral-and-cousins-lemma` | **ready for splice** | B3-1 and B3-2 are closed on disk; the harvest, route, dependencies, and contracts agree. |
| `trigonometric-and-oscillatory-examples-in-one-variable` | **ready for splice** | The manifest and plan carry the required backward prerequisite. |
| `analyticity-liouville-and-morera` | **ready for splice** | B7-1 is closed by a distinct source-backed theorem and agreement remark. |

Re-check gates passed for all three owned batches: coverage checklist, manifest-only content policy, and full-text fetch-stamp validation. The current unspliced `research/plan-spec.json` also passes `validate-plan`; the engine remains responsible for the Step-4 splice and its post-splice gates.
