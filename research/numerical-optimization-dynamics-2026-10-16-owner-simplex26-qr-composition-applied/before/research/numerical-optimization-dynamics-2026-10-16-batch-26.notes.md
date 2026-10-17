# Batch 26 authoring notes — OPT13 revised simplex

## Controlling plan and comparison

The controlling source is `research/plan-numerical-optimization-track.md`, OPT13 at lines 379–413, together with the complete `Contract OPT13` at `research/numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md` lines 328–358. The plan's scope summary at line 387 and preserved design at line 393 agree. I preserved the full-row-rank standard form, explicit Phase I and redundant-row handling, primal and dual rules, exact Bland finiteness, finite-precision caveats, and all five B-page examples. The owner direction adds the exact objective identity $\theta\bar c_j\le0$, strict only when $\theta>0$; the primal pivot proof and carrier retain this degenerate case.

The current `plan-spec.json` OPT13 row agrees with the plan and batch manifest on pair ID, title, companion, category, order 2336, and the three required pages. It contains no conflicting mathematical claim; it does not encode the plan's item-level local prerequisites. The plan therefore controls the proof obligations and scope.

## Inventory and dependency levels

The run dependency JSON gives batch 26 level 1 with prerequisite batches 1, 2, and 6. I parsed the complete JSON before drafting; it records batch scheduling, not item-level edges. The batch-26 manifest began with empty inventories. I initially built and checked 18 local items at levels 0–6. When the prerequisite batches became populated, I inspected their actual item bodies and added the exact verified item edges: the CSR representation definition for sparse pricing, the convex KKT sufficiency theorem and its KKT definition for simplex optimality, and the finite-system Farkas alternative for Phase I. I recalculated the graph over all 75 items in batches 1, 2, 6, and 26: eight pages, levels consistent, no cycles or label errors. Batch-26 levels are now 0–7. The run-wide dependency checker still reports empty inventories in unassigned sibling pairs; those are outside this dispatch and are not treated as batch-26 supplier failures.

## Design conflicts and actual supplier evidence

The controlling source is OPT13 in `research/plan-numerical-optimization-track.md` lines 379–413 and its full `Contract OPT13` in `research/numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md` lines 328–358. The controlling `plan-spec.json` entry agrees on ID, title, category, order, companion, and the three page requirements; it omits local item obligations but has no mathematical conflict. The owner direction adds the exact objective identity $\theta\bar c_j\le0$, strict only when $\theta>0$; the primal pivot proof retains the degenerate case.

The prerequisite page manifests were empty at my first inspection and filled later. I read the actual supplier bodies before updating interfaces. Batch 1 supplies an operationwise no-underflow/range-failure model, a rounded Cholesky algorithm restricted to Hermitian positive-definite input, and conditional Householder QR/least-squares results. The QR stability theorem says its local reflector premise is unresolved; the computed least-squares theorem explicitly leaves the rounded triangular-solve residual estimate unresolved. None is a general solve/update for arbitrary nonsingular evolving simplex bases, so the page-level NA02 backend remains open. Current carriers are exact-arithmetic simplex algorithms and an exact rational audit of already stored finite binary candidates; they do not claim a finite-precision pivot driver or an error guarantee for computed pivots. The precise affected design claims and proposed NA02 supplier placement are in the cross-batch record.

Batch 2 provides a valid CSR definition with row-interval stored-entry semantics, duplicate/zero handling, an exact forward product, and a complete stored-entry operation/storage count. Its forward product theorem does not itself prove transpose pricing. The owned sparse-pricing item now uses the exact CSR definition and proves the transpose update and its count locally; it makes no runtime, bandwidth, or factorization claim. The CSR definition and cost theorem have current Step 1 records marked `ready` (authorship readiness only).

Batch 6 supplies the exact general KKT convention and a convex KKT sufficiency theorem with no Slater or constraint-qualification requirement, plus a finite-system Farkas alternative with exactly the standard-form certificate orientation. I use the KKT theorem through the explicit multipliers $\nu=-y(B)$ and $\lambda=c-A^Ty(B)$; basic reduced costs are zero and nonbasic variables vanish, giving complementarity. The Phase I proof also constructs $q$ and cites the actual finite-system alternative. The KKT definition/theorem and Farkas theorem have current Step 1 `ready` records; no approval is inferred. The previously published equality-only Lagrange-multiplier theorem and HB-dependent locally convex separation theorem do not provide these interfaces and are not used.

## Source reading and retrieval history

I read the relevant full-text reasoning in four independent treatments:

- Bertsimas–Tsitsiklis, *Introduction to Linear Optimization*, Chapter 2 §§2.2–2.6 (printed pp. 46–66), Chapter 3 §§3.1–3.5 (pp. 82–118), and Chapter 4 §§4.3, 4.5–4.6 (pp. 146–168), via the full-text book page in the coverage record. This supplied basis/extreme-point reasoning, primal reduced costs and pivots, Phase I, dual simplex, and Farkas signs.
- Goemans, MIT 18.310 full lecture chapter, §§2.2–2.5 (printed LP-5–LP-16), including the complete Bland contradiction proof and Phase I row-removal argument.
- Bland (1977), Rule I and the full proof of Theorem 1.1, printed pp. 103–105.
- Bindel, Cornell CS 6210, “Sums, Dots, and Error in Linear Systems,” the dot-product discussion and residual/conditioning sections, lines 76–86 and 117–136.

Retrieval history: the assigned Bertsimas publisher URL (`https://athenasc.com/linoptbook.html`) returned an internal retrieval error, and an HBZ PDF alternative contained only the table of contents. One recovery search located the full book text at the URL recorded in coverage; I inspected the cited chapter proofs and stopped after that success. The archived Berkeley floating-point lecture URL in the existing published supplier's references was inaccessible through the web reader; the Cornell full lecture notes supplied and were read as the alternative for the dot-product and residual discussion. These failures were recovered; no source is dropped or left unresolved. `node tools/source-fetch-check.mjs --coverage research/numerical-optimization-dynamics-2026-10-16-batch-26.coverage.json --stamp` returned exit 0: 8/8 source entries verified and newly stamped, 8/8 resolved, zero documented drops. Each active source record retains the successful fetch timestamp, byte count, digest prefix, and one successful retrieval attempt. No active source remains unresolved, so no drop/escalation `source_resolution` record was created.

The exact Beale-style cycle in the B example is independently recomputed over rational numbers. The six Dantzig pivots return basis $(5,6,7)$ with objective $0$; the Bland path differs at the sixth pivot, reaches $(5,1,3)$ at objective $-1$, and all remaining reduced costs are nonnegative. The carrier shows every direction, eligible ratio and leaving choice.

## Scoped checks and Step 1 records

Final scoped results after the last carrier and dependency edits:

- Combined batch-1, batch-2, batch-6, and batch-26 dependency graph: 75 items across 8 pages, maximum item level 7, zero errors/cycles. Batch-26 manifest item labels and carrier frontmatter dependencies/levels agree exactly.
- `node tools/manifest-deps.mjs research/numerical-optimization-dynamics-2026-10-16-batch-26.pages.json`: 18 items, 0 normalized, 0 errors.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-26.proof-contracts.json --strict`: 18/18 checked, 0 errors, 0 warnings.
- Scoped precheck: 18 files, 12 proof-bearing items checked, 0 failures; six definition/algorithm items are not applicable.
- `node tools/proof-layout.mjs` on all 18 changed items: 56 steps, 0 defects.
- `coverage-checklist`: 2 pages, 22 harvested results, 0 errors, 0 warnings. `source-fetch-check` re-verifies 8/8 active sources; the earlier `--stamp` run added all 8 stamps and recorded no drops.
- The batch-26 A page contains 13 items and its B page contains 5 examples, below the 100-item page cap.
- All 18 batch-26 Step 1 records are `ready`, owner=false, and current-hash checked. These are authoring-readiness records only.

The broader `node tools/item-dependency-levels.mjs check --run numerical-optimization-dynamics-2026-10-16` exits 1 because many unassigned sibling pages still have empty scaffold inventories. The whole-run Step 1 check sees 517 items, 159 ready, and 508 open item/page work entries; it reports no open batch-26 item. Those global blockers include current NA02 escalations and other still-empty pair inventories. They remain outside this pair's write scope; the exact NA02 interface gap for OPT13 is recorded above and in the cross-batch dependency input.

## Readiness and handoff

The local definitions, basis/extreme-point proof, exact pivot and termination proofs, dual certificate, Phase I proof, residual/gap result, and examples are authored. The final scoped results are listed in “Scoped checks and Step 1 records” above. The exact NA02 finite-precision basis-update interface remains an owner escalation; it is not represented as a completed claim. Per-item Step 1 records distinguish complete local prerequisites from the open page-level backend. No owner approval or mathematical acceptance is claimed. At the first status inspection the run was paused at `1-scaffold`, with no worker in flight; engine state was not changed.
