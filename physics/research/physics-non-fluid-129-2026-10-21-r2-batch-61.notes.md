# Batch 61 notes — rooted forests and subtraction recursion

Run: `physics-non-fluid-129-2026-10-21-r2`  
Batch: `61`  
Pair: `qftx-renormalization-hopf` / `qftx-renormalization-hopf-examples`

## Plan and batch evidence

The complete design section “Rooted forests, Hopf antipodes and subtraction recursion” in `research/plan-quantum-field-theory-frontier-expansion-track.md` (lines 1120–1148) agrees with the matching A/B records in `research/plan-spec.json`: category `quantum-field-theory-mathematics`, library `mathematics`, order 819/820, A-page `requires: [qftx-causal-renormalization]`, planned A items `def-qftx-rooted-forest-hopf`, `thm-qftx-cut-hopf-antipode`, and `thm-qftx-subtraction-character-factorization`, plus B item `ex-qftx-nested-two-loop-subtraction`. No conflict was found. The requested `research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md` is absent.

The initial batch-61 manifest contained the two page records with empty item inventories. The run dependency-level file records batch 61 at level 2 with `requires: [60]`. The A-page proof route explicitly needs a Laurent target definition and a proof of the negative-part projection identity, so two local A-page prerequisites were added before their consumers: `def-qftx-laurent-subtraction-target` and `lem-qftx-laurent-negative-projection-rota-baxter`.

After authoring, `computeRunBatchDependencyLevels` recomputed batch 61 as level 2 with `requires: [60]`, unchanged. The current full-run graph differs from the recorded schedule only at off-owner batch 121: current `requires` is `[40, 58, 120]`, recorded `[40, 120]`; both have level 2. This transitive observation is recorded here, not as an unsupported batch-61 dependency row, and the shared run schedule was left to the owner.

Item levels were computed from in-run item `deps`: the two definitions are level 0; the Rota–Baxter lemma and cut-antipode theorem are level 1; character factorization is level 2; the nested-subtraction example is level 3. `justified_by` is not an item scheduling edge. The rooted-forest definition is justified by the cut-antipode theorem, which in turn depends on the definition.

## Prerequisite review

The exact current batch-60 supplier page `qftx-causal-renormalization` and relevant carriers were inspected. The initial Step-1 check found `def-qftx-local-time-ordered-system` ready, but a fresh check after the current batch-60 edits now returns `Item or dependency changed; record current readiness`. Its actual dependency list includes `lem-qftx-balanced-local-functional-representatives`, while the stored readiness row does not. The current balanced-representative lemma exists in batch 60 and its complete Statement and Proof were read, but `step1Decision` returns `Readiness record missing` for it. This is a genuine fresh readiness gap in the required supplier page. `thm-qftx-scalar-eg-induction` and `prop-qftx-finite-renormalization-composition` also have current Step-1 readiness `escalated`: both actually assume the graphwise product-scaling bound (PB), and the scalar-existence proof explicitly records that PB is not derived from its stated free-kernel hypotheses. The composition proposition carries the same PB condition. Their complete current statements, labelled facts, and proof steps were read.

The balanced-representative lemma carrier is present with a complete proof; its `draft` label is not the reason for this hold. The gap is its missing Step-1 readiness row and the stale row for the consuming definition. All six batch-61 item readiness records are therefore `escalated` with `owner: false`, after completing their local arguments, contracts, placements, and checks. No owner escalation was overwritten or marked resolved.

The assigned Hopf-algebra items are purely mathematical and do not use the balanced-representative lemma, time-ordered-system definition, or PB-conditional results as proof premises. The affected page claims are the five A items `def-qftx-rooted-forest-hopf`, `def-qftx-laurent-subtraction-target`, `lem-qftx-laurent-negative-projection-rota-baxter`, `thm-qftx-cut-hopf-antipode`, and `thm-qftx-subtraction-character-factorization`, together with B example `ex-qftx-nested-two-loop-subtraction`; their local arguments are complete, but the pair's required A-page context is not readiness-current. The cross-batch row is therefore `open`, and all six item readiness rows are `escalated`. The batch-60 owner should record current readiness for `lem-qftx-balanced-local-functional-representatives` and refresh `def-qftx-local-time-ordered-system` on the existing `qftx-causal-renormalization` A page; batch 61 does not edit those suppliers. The PB statuses remain separate transitive observations and are not represented as verified logical inputs.

The future graph-to-forest insertion map, including symmetry-factor and regularization compatibility, remains outside this page's theorem claims as required by the design. The abstract rooted-tree character theorem is proved independently and remains applicable to any supplied character into the declared Laurent target.

## New local items and proofs

- `def-qftx-rooted-forest-hopf` fixes the root orientation, forest product, admissible cuts, pruned forest, trunk, coproduct, and counit.
- `thm-qftx-cut-hopf-antipode` supplies the local coassociativity, connected grading, finite convolution-series antipode, recursive cut formula, and multiplicativity proof.
- `def-qftx-laurent-subtraction-target` specifies the formal Laurent algebra and negative/nonnegative splitting.
- `lem-qftx-laurent-negative-projection-rota-baxter` proves the projection identity directly from that splitting.
- `thm-qftx-subtraction-character-factorization` gives the complete degree induction proving both factors are characters and the positive factor is regular.
- `ex-qftx-nested-two-loop-subtraction` computes the nested ladder correction and includes an explained TikZ cut diagram; its algebraic verification does not rely on the diagram.

The source coverage, per-proof contracts, page inventories, and readiness rows are maintained separately and bind these exact carriers. Readiness records indicate completed Step-1 authoring inputs only; they are not independent proof approvals.

## Scoped check results

- `precheck.mts` on the four proof-bearing items: 4 checked, 0 failing. Definitions have no proof-like section.
- `proof-layout.mjs` on those four items: 4 items, 16 steps, 0 defects.
- `rendercheck.mjs` on six items and both pages: 8 files passed YAML, math, delimiter, and wikilink checks.
- Strict proof-contract validation: 4/4 proof-bearing items, 0 errors, 0 warnings.
- Item and manifest `content-policy`: 6 scoped items, 0 errors, 0 warnings for each invocation.
- Scoped `depcheck` and `fwdcheck`: 6 items and 2 pages checked; dependency/forward-reference cycle checks passed.
- `coverage-checklist --require-destination`: 2 pages, 12 harvested results, 0 errors, 0 warnings.
- `source-fetch-check`: 4/4 full-text source records verified; 0 drops.
- Recomputed item levels: `def-qftx-rooted-forest-hopf` 0, `def-qftx-laurent-subtraction-target` 0, `lem-qftx-laurent-negative-projection-rota-baxter` 1, `thm-qftx-cut-hopf-antipode` 1, `thm-qftx-subtraction-character-factorization` 2, `ex-qftx-nested-two-loop-subtraction` 3.
- Recomputed current run batch level for batch 61: level 2, requires batch 60. The pair leaves that required page edge open because of the current readiness gap above.
