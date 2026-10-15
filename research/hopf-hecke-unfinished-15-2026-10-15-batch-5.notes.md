# Batch 5 authoring notes — Hopf Module Tensor Products and Rigid Duality

Run: `hopf-hecke-unfinished-15-2026-10-15`  
Role: beta · Batch: 5 · Assigned page level: 4  
Output manifest: `hopf-hecke-unfinished-15-2026-10-15-batch-5.pages.json`

## Scope and controlling plan

Authored only the assigned draft A/B pair and its batch evidence. The A page contains five items and the B page contains three examples; both are below the 100-item page cap. The controlling owner direction was followed.

The design section and `plan-spec.json` agree on the mathematical scope. The plan spec makes two item-level prerequisites explicit that the design's short prose list does not enumerate: `lem-hh-tensor-coherence-on-elementary-tensors` and `lem-hh-regular-module-detects-linear-and-tensor-identities`. Both remain dependencies of `thm-hh-bialgebra-module-tensor-coherence`. The four page-level `requires` entries are also retained. No claim was weakened to reconcile this difference.

The source treatments use “right dual” for the orientations `V* ⊗ V → k` and `k → V ⊗ V*` that the local plan calls “left dual.” The local definition fixes the map orientations explicitly and records the naming variation; formulas and hypotheses follow the orientations, not a silent renaming.

## Inventory and dependency levels

Levels below were recomputed against all 30 pages in this run. Each batch-5 manifest label matches the computed level; dependencies outside this run do not raise run-local levels.

| Item | Level |
|---|---:|
| `def-hh-module-category-and-tensor-action` | 2 |
| `thm-hh-bialgebra-module-tensor-coherence` | 3 |
| `def-hh-left-dual-of-a-finite-hopf-module` | 4 |
| `thm-hh-left-dual-evaluation-coevaluation-and-triangle-identities` | 5 |
| `lem-hh-right-dual-and-bidual-conditions` | 6 |
| `ex-hh-bialgebra-tensor-products-without-antipode` | 4 |
| `ex-hh-finite-group-contragredient-and-tensor-dual` | 6 |
| `ex-hh-taft-module-dual` | 6 |

The local argument proves bialgebra tensor coherence in both directions using regular modules. The left-dual action uses `S` and does not assume it is bijective. The right-dual action uses `S⁻¹`, assumes bijectivity, and derives the reversed cancellation identities. The bidual action is twisted by `S²`; the converse to `S² = id` is restricted to finite-dimensional `H`, where the regular module is an allowed test. A group-like pivot is handled under the stated conjugation condition. These proofs use finite bases only and do not invoke the axiom of choice.

The no-antipode example proves that `k[t]` with `Δ(t)=t⊗t`, `ε(t)=1` has no antipode, while the `t=0` one-dimensional modules still have a tensor module. It also verifies that the underlying one-dimensional dual admits a `t=0` module action, but evaluation is not `H`-linear, so this is not a dual object in the module category. The C₂ and Taft examples compute the stated contragredient actions and triangle maps.

## Sources read and harvest disposition

Both sources were retrieved as full text, inspected at the locators below, and stamped in the coverage ledger. `source-fetch-check --stamp` verified 2/2 sources, with zero new stamps on the final check. There were no retrieval failures and no source-resolution drops.

1. [Etingof, Gelaki, Nikshych, and Ostrik, *Tensor Categories*, MIT 18.769 full lecture notes](https://ocw.mit.edu/courses/18-769-topics-in-lie-theory-tensor-categories-spring-2009/8a51a9d1b57a35a0e6a5804bdea6e146_MIT18_769S09_notes.pdf), complete 128-page PDF; focused §§1.10 (pp. 26–29), 1.21 (pp. 43–45), and 1.35 ordinary Hopf specialization (pp. 71–72). Stamp: 2,564,980 bytes, SHA-256 prefix `9f4dbe31acd451e8`. Harvested results: dual orientations and triangles; finite-dimensional vector-space rigidity and its infinite-dimensional boundary; the finite-group contragredient; the `Rep(H)` tensor action; and the ordinary Hopf specialization were included in the named local items. The finite bialgebra reconstruction theorem was marked `out-of-scope`, with its distinct classification claim recorded in the coverage ledger.

2. [Christoph Schweigert, *Hopf algebras, quantum groups and topological field theory*, full Hamburg lecture notes](https://christophschweigert.github.io/skripten/hskript.pdf), complete 219-page PDF; focused Observation 2.3.2 (p. 22), §§2.6–2.7.16 (pp. 34–60), and §5.1 (pp. 159–160). Stamp: 6,717,824 bytes, SHA-256 prefix `06babd504760e126`. Harvested results: group-algebra tensor and dual actions; bialgebra tensor constraints; inverse-antipode cancellation; `S` and `S⁻¹` dual actions; finite-dimensional dual objects and triangle axioms; Hopf-module evaluation and coevaluation; and group-like pivotal corrections were included in the named local items.

The coverage JSON records all 13 harvested results individually, their destinations, and dispositions (12 included, 1 out-of-scope). It retains the original successful retrieval attempts and stamps.

## Supplier checks and readiness

The prerequisite batches have since populated their manifests: batch 2 has 9 items, batch 3 has 11, and batch 4 has 11. Their A/B pages are drafts. I read the relevant current supplier bodies and checked their interfaces against this pair:

- `def-hh-bialgebra-and-bialgebra-map` and its transitive `def-hh-coalgebra-and-coalgebra-map` state the same coassociative/counital and unital-algebra-map conditions used by the local tensor-action definition. The bialgebra statement fixes the product on `H⊗H` as `(a⊗b)(c⊗d)=ac⊗bd` with unit `1⊗1`.
- `def-hh-hopf-algebra-and-antipode` defines `S` as a linear two-sided convolution inverse and explicitly makes no bijectivity assumption. This matches the left-dual branch; the right-dual branch separately requires bijectivity.
- `thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication` states and proves `S(ab)=S(b)S(a)` and `S(1)=1`. I checked its relevant convolution-inverse argument and the actual convolution and tensor-coalgebra interfaces it uses. The assigned left-dual proof also derives anti-multiplicativity locally.
- `lem-hh-taft-algebra-pbw-and-hopf-structure` was read through its complete proof. Its presentation, PBW basis, structural maps, and hypotheses `N>1`, `char(k)∤N`, and primitive `ζ` match the example.

The exact excerpts, consumer IDs, and required hypotheses are recorded in the proof-contract JSON; the cross-batch JSON marks these item interfaces `verified` as authoring checks. The batch-2 comodule page's matrix-coefficient and rational-dual results are not used by this pair; its page-level requirement is still open for owner reconciliation. The batch-3 and batch-4 page-level rows also remain open because those whole draft pages have not been independently reconciled. No page acceptance or independent approval is claimed.

All eight `step1-decisions` records remain `escalated`. They were written while the relevant suppliers were absent; those bodies appeared later and were inspected, but the authoring instructions forbid overwriting an escalation or using `--owner`. The records therefore need owner reconciliation before any item can be marked ready.

One metadata correction also followed those records: `def-hh-left-dual-of-a-finite-hopf-module` now directly depends on `def-hh-hopf-algebra-and-antipode`, which its stated hypotheses require. Its existing escalation record predates that dependency addition; it was left untouched. The record's dependency list must be reconciled by the owner.

## Scoped checks and run-wide blockers

Final scoped checks:

- Precheck: 6 proof-bearing items, all pass.
- Proof layout: 8 changed items, 38 steps, 0 defects.
- Strict proof contracts: 6 items, 0 errors, 0 warnings.
- Manifest dependencies: 8 items, 0 missing or malformed dependency arrays.
- Coverage checklist: 1 page, 13 harvested results, 0 errors or warnings.
- Source fetch: 2/2 full-text stamps and 2/2 resolved.
- Content policy: 8 scoped items, 0 errors or warnings.
- Focused dependency check: 0 errors or warnings; closure 273 items across 46 prerequisite pages.
- Render check: 8 items and 2 pages, all pass.

Run-wide `item-dependency-levels check` passes: 138 items checked across 30 pages, maximum level 14. All eight batch-5 labels match their computed levels.

Run-wide `batch-dependency-levels check` remains blocked by malformed YAML escapes in three unrelated batch-11 item frontmatters: `items/lem-hh-finite-direct-summands-over-khh-are-free.md:3` has an unescaped `\llbracket` in a double-quoted title; `items/lem-hh-formal-deformation-matrix-unit-lifting.md:19` and `items/lem-hh-idempotents-lift-over-formal-power-series-rings.md:19` have unescaped `\llbracket` in double-quoted provenance text. The check stops at the first error (`\l` at line 3, column 38). These files are outside batch 5 and were left unchanged. No shared run-level dependency artifact was written.
