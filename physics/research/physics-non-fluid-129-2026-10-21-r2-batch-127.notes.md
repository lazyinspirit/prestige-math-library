# Batch 127 authoring notes — tgrx-topological-entropy-models

## Plan and design reconciliation

- The run-specific override `research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md` was absent. The current plan and task therefore control placement and dependencies.
- The current `research/plan-spec.json` assigns A page order 951 and requires `tgrx-finite-code-holography`, `temperley-lieb-diagram-algebra-and-catalan-basis`, `temperley-lieb-jones-wenzl-traces-and-quotients`, and `temperley-lieb-root-of-unity-and-modular-representation-theory`. The design at `research/plan-thermodynamics-and-general-relativity-frontier-expansion-track.md` line 341 and its detailed module `research/frontier-expansion-2026-10-19/thermodynamics-and-general-relativity/prose-scaffold.md` section `tgrx-topological-entropy-models` name only the first three. I retained all four plan requirements. The additional root-of-unity prerequisite is context; these items assert no root-of-unity quotient or modular classification.
- The plan's empty item arrays were preauthoring placeholders. The detailed module supplies four A items and one B example, all authored below. The page holds 4 items; its B companion holds 1, within the 100-item cap.

## Inventory, interfaces, and dependency levels

| Item | Page | Level | Direct dependencies |
|---|---|---:|---|
| `def-tgrx-finite-fusion-count-model` | A | 2 | `def-tgrx-sector-code` |
| `prop-tgrx-fusion-count-entropy` | A | 3 | `def-tgrx-finite-fusion-count-model`; `prop-tgrx-code-area-entropy`; `def-tgrx-sector-code`; `def-trace-of-an-endomorphism`; `thm-natural-logarithm-laws` |
| `def-tgrx-tl-boundary-representation` | A | 0 | `def-temperley-lieb-generator-presentation`; `def-temperley-lieb-diagram-category`; `thm-temperley-lieb-presentation-isomorphism`; `def-temperley-lieb-quantum-integers-and-quantum-characteristic`; `def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators`; `lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness`; `def-kernel-and-image-of-a-linear-map` |
| `prop-tgrx-tl-projector-entropy` | A | 3 | `def-tgrx-tl-boundary-representation`; `lem-temperley-lieb-jones-wenzl-partial-trace-and-uniqueness`; `def-temperley-lieb-jones-wenzl-recursion-over-unit-denominators`; `def-tgrx-sector-code`; `prop-tgrx-code-area-entropy`; `def-trace-of-an-endomorphism`; `thm-natural-logarithm-laws`; `def-kernel-and-image-of-a-linear-map`; `def-temperley-lieb-closure-trace-and-partial-trace` |
| `ex-tgrx-count-is-not-area-law` | B | 4 | `prop-tgrx-fusion-count-entropy`; `thm-natural-logarithm-laws` |

The assigned levels were recalculated on the current in-run dependency closure: stored/computed levels agree for all five items (`2, 3, 0, 3, 4`) and the scoped calculation has no cycles or errors. The run batch graph recomputes batch 127 at level 3 with `requires: [125]`; the stored scheduling row matches. Batch 125 is level 2 and requires batch 122. That transitive observation is recorded here, not as a batch-127 cross-edge.

The A-page inputs use current batch-125 carriers `def-tgrx-sector-code` and `prop-tgrx-code-area-entropy`; both current Step 1 records were checked with `loadStep1Record` and `step1Decision` and are ready/hash-current. Their exact density-matrix and natural-log entropy interfaces were matched to the local arguments. The full current proof of `prop-tgrx-code-area-entropy` and definition of `def-tgrx-sector-code` were inspected; this is authoring readiness, not independent proof approval. The remaining algebraic suppliers are pinned imported mathematical items; their relevant statements and complete proofs were inspected read-only.

The in-run cross-edge file records exactly six edges, each `verified`: A page to `tgrx-finite-code-holography`; `def-tgrx-finite-fusion-count-model` to `def-tgrx-sector-code`; `prop-tgrx-fusion-count-entropy` to `def-tgrx-sector-code` and `prop-tgrx-code-area-entropy`; and `prop-tgrx-tl-projector-entropy` to those same two batch-125 items. A manifest-derived comparison found 6 expected and 6 recorded edges, with no missing or extra rows. Root mathematics pages required by the plan are outside this run and are not represented as in-run cross-batch reviews. `depcheck` reports the broader transitive page closure, including `matrices-and-the-matrix-of-a-linear-map`, `the-logarithm-and-general-powers`, `temperley-lieb-semisimplicity-and-generic-structure`, and `linear-maps-rank-nullity-and-quotient-spaces`; these are transitive observations, not additional direct cross-edge rows.

The local Temperley-Lieb definition uses the imported diagram generator `d_i` and explicitly identifies the recursion shorthand `U_i := d_i`. It defines the commuting presentation and diagram tower maps, so the imported recursion transfers to the representation used in the proof. The loop parameter `delta` is real; `[2]_delta,...,[n]_delta` must be nonzero, while `[n+1]_delta` need not be. The proof obtains self-adjointness from the real recursion and self-adjoint generator images before using idempotence. The unnormalized diagram closure trace `[n+1]_delta` is kept distinct from the ordinary Hilbert-space trace `rank(P)`; trace preservation is stated only as a sufficient extra hypothesis for identifying their values on the projector.

The finite fusion model specifies transition orientation (`N_ab` counts transitions `b -> a`) and proves the path recursion by matrix multiplication. Its two-label recurrence is exact. The B example changes a separately assigned positive scalar while keeping the matrix and count fixed; the scalar is formal and is not a measured or geometrical area. No universal gravity claim or empirical inference is made.

## Sources and harvest

`research/physics-non-fluid-129-2026-10-21-r2-batch-127.coverage.json` records exact URLs and locators, supported items, reading extent, limitations, each harvested result's disposition, and search history. The A page has two independent full-text treatments for the finite-state entropy discussion (Harlow and Watrous) and for the Temperley–Lieb projector discussion (Chen and Wang); Watrous uses base-two logarithms, while local items use natural logarithms and nats.

- Daniel Harlow, *The Ryu–Takayanagi Formula from Quantum Error Correction*, complete 62-page paper, Appendix A.7.2–A.7.3, PDF pp. 52–54, Eqs. (A.6)–(A.10), (A.19)–(A.22): https://arxiv.org/pdf/1607.03901. Full-text retrieval and reading evidence are reused from batch 125.
- John Watrous, *The Theory of Quantum Information*, complete 598-page author-hosted manuscript, §§5.2.1–5.2.2, PDF pp. 266–269, Propositions 5.20–5.21 and Eqs. (5.94)–(5.99): https://jhwatrous.github.io/TQI.pdf. Full-text retrieval and reading evidence are reused from batch 125; the base-two convention is recorded explicitly.
- Joshua Chen, *The Temperley–Lieb Categories and Skein Modules*, complete 74-page thesis, §2.3, Theorem 2.3.2 and Proposition 2.3.6, PDF pp. 20–24 (printed pp. 11–15): https://arxiv.org/pdf/1502.06845. The full relevant proof section was read, including the recursive construction, unit-denominator hypotheses, induction, reflection, and closure trace.
- Zhenghan Wang, *Topological Quantum Computation*, complete 129-page book, §1.1.4, Theorem 1.12, PDF pp. 18–20: https://web.math.ucsb.edu/~zhenghwa/data/course/cbms.pdf. The generic Kauffman-loop/Chebyshev convention and theorem were inspected; the book sketches some checks, so those omissions are not treated as supplied proof.
- K. Iohara, G. I. Lehrer, and R. B. Zhang, *The Jones Quotients of the Temperley–Lieb Algebras*, complete 22-page paper, §§1.2 and 2.1, PDF pp. 1–2: https://arxiv.org/pdf/1702.08128. Their generator relation has the opposite displayed loop-parameter sign (`f_i^2=-(q+q^{-1})f_i`); that convention is not silently converted or used as a local premise.
- Robert M. Wald, *The Thermodynamics of Black Holes*, complete 46-page review, §§2 and 5: https://arxiv.org/pdf/gr-qc/9912119. This is contextual only; its area-entropy discussion supplies no premise in the mathematical counterexample.

`source-fetch-check.mjs --coverage ...` reports 7/7 coverage source entries fetch-verified and 7/7 resolved, with zero documented drops. Harlow and Watrous reuse current batch-125 stamps; the Chen, Wang, Iohara–Lehrer–Zhang, and Wald retrievals were newly stamped for this batch. There were no retrieval failures, so `source_resolution` is empty and no source is claimed as dropped.

## Scoped checks and remaining run-wide blocker

- `proof-layout.mjs` on the five changed items: 5 items, 13 steps, 0 defects.
- `precheck.mts` on the three proof-bearing items: 3 checked, 0 failing.
- `rendercheck.mjs` on the five items and two pages: all 7 pass KaTeX, YAML, and link checks.
- Scoped `depcheck.mjs`: all five selected items and prerequisite cycle checks pass; closure covers 1,074 items and 586 pages.
- Strict `proof-contract.mjs`: all 5 manifest items, 0 errors and 0 warnings. The 3 proof-bearing items have actual numbered steps, cited supplier excerpts, boundaries, and finite checks; both definitions have boundary dispositions.
- `coverage-checklist.mjs`: 2 pages, 13 harvested results, 0 errors and 0 warnings.
- `content-policy.mjs` on the authored batch manifest: 5 scoped items, 0 errors and 0 warnings.
- Scoped level and cross-edge comparisons pass as reported above.

The run-wide `proof-contract-coverage.mjs --run physics-non-fluid-129-2026-10-21-r2 ...` cannot complete because the shared plan contains an unrelated empty inventory for `tgrx-research-boundaries` (`Empty or invalid frontier page inventory`). This batch's strict contracts pass; the shared plan was not edited. No other batch, published item, imported mathematics, shared plan, scheduling state, or verdict was changed.

## Step 1 readiness

Current readiness records for all five assigned items are recorded separately under the run's `step1-<item>.json` files. `ready` records close this batch's authoring prerequisites at the inspected hashes; they do not certify independent proof approval.

After writing the five assigned records, `loadStep1Record` and `step1Decision` were rerun. All five assigned items and the two used batch-125 carriers return `closed: true`, `decision: ready`, `owner: false`, with current hashes. These records state authoring readiness only and do not substitute for independent proof review.
