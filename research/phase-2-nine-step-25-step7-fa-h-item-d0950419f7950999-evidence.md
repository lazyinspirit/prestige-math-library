# Final adjudication: def-bounded-edge-coarse-triangular-filling

Run phase-2-nine-step-25, group h, queue position 1 of 1. Disposition: repaired. Source status: familiar.

## Independent review and decision

Read CLAUDE.md, README.md, SCHEMA.md and WORKFLOW.md; the exact FA queue and task; the current definition and both complete declared dependencies, `def-metric-space` and `def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation`; the A/B pages `asymptotic-cones-and-the-sublinear-triangle-criterion` and its examples companion; the definition's batch-17 manifest and proof contract, its coverage entry, the group-h reader context and batch-17 refutation/risk record, and the initial adjudication in `research/phase-2-nine-step-25-alpha-step7-h.md` and the adjudication JSONL. The definition has no proof obligation beyond specifying coherent data and its finite minimum; the contract records empty, constant, single-triangle, degenerate, endpoint and finite-choice cases. The group reader has no concerns or alerts and the refutation record has no flagged items. Those records are evidence inspected, not substitutes for this review.

The initial judge rejected the absence of a link between the boundary list and the vertex map (context ee7ca4f6656016d5d689a4d41016f5ecefaf92ab9d30d280b7b438776a51f443). Sol correctly connected them, but required exact agreement and then permitted extra boundary vertices without defining a changed comparison list. The one Terra rejudge rejected precisely this issue (context 9b4c960e0630333a6dc5f48e6b2a998bf2493b7714e1257fda535520d64e02f3). I uphold that defect: for example, inserting another a into (a,b,c) produces a length-four boundary, which cannot agree entry-for-entry with the length-three prescribed list. A natural intended interpretation exists, but the definition must state it.

The repair distinguishes exact filling from filling up to repetitions. For C=(x_0,...,x_{k-1}), the latter matches an expansion with a positive integer block length a_j for every occurrence. Its boundary length is the sum of those lengths. This retains the cyclic order and every occurrence, including separate occurrences with equal values; compatible starts and traversal directions are chosen. The identification includes the block data, so no uniqueness is assumed. The singleton list (x) represents a length-zero walk at x; the empty list is excluded. Marked refinements retain the three corner occurrences and each closed arc's image set. Constant arcs may acquire strings of equal images. The actual disk's triangles are counted, without asserting subdivision invariance of area.

This is familiar elementary finite-list and metric mathematics; no external verification was required or performed. I do not claim to have read the external book cited by the existing item during this FA review. No unfamiliar topological filling-existence theorem is needed to define these data: a finite triangulated disk is supplied, not asserted to exist for every list.

## Consumer and convention checks

Read the complete local consumers `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings`, `lem-relator-disks-give-area-controlled-coarse-fillings`, `lem-polygonal-boundary-crossing-for-affine-disk-maps`, and `lem-coarse-triangle-minsize-is-bounded-by-square-root-area` for their uses of this interface. This is an interface review, not certification of their independent proofs.

- Thickening steps 3.2 and 4.1 label outer shores in original occurrence order with repeated endpoint labels and constant sectors. These are precisely positive repetition blocks. Its isolated-vertex square has four constant boundary vertices and is a refinement of (x).
- Relator-filling steps 2.2 and 5.1 use repetitions and retain marked side image sets. The explicit marked refinement convention preserves those sets, hence its stated Hausdorff comparison is unaffected.
- The crossing lemma needs an actual triangulated disk and marked arcs; neither changes. The minsize lemma uses the finite arc image sets; repetition does not alter their product or its diameter minimum.
- Each image diameter is the maximum of finitely many finite real metric distances; the collection of triples is finite and nonempty since each closed arc contains its corners. Thus its minimum exists. No infinite choice, continuity into X, or identification of coarse area with algebraic relator area is introduced.
- An exact triangular boundary (a,b,c) uses block lengths (1,1,1); (a,a,b,c) uses (2,1,1) for a refinement and is not an exact filling of the original length-three list. A singleton admits a constant triangular disk with three boundary copies. Lists of length two can likewise be expanded to at least three entries; existence of a filling in general remains a separate hypothesis.

## Scope and metadata

Only the queued item was mathematically edited. Its manifest summary and the three exact definition quotations in the owned batch-17 proof contract were synchronized; the definition's affected boundary evidence was updated. The existing page order, coverage scope and dependency lists remain appropriate; no lemma, new dependency or prerequisite repair was needed. No owner-prerequisite-repair licence applies because neither existing dependency was edited.

Under `briefs/tasks/frontier-dependency-ledger.md`, reconciled the owning input `research/phase-2-nine-step-25-batch-17.cross-batch-dependencies.json` atomically. It correctly remains []: the repaired definition's four direct consumers are all in batch 17, and its two suppliers are published prerequisites, not another batch in this run. Adding a same-batch or fictitious cross-batch row would misrepresent that ledger. Ran the prescribed refresh successfully, without editing the unified ledger by hand.

Pre-FA itemHashGuard: bc500a8d1d671acce131e99c93ab23814f6d55dd81473babbe818a718a9c60b6.
Post-FA itemHashGuard: c89acd988229d2ef714e17c3866da464d9a4f69cf1fe0e78d59798a419876bc9.

## Focused validation

- `node tools/tsx-run.mjs tools/precheck.mts items/def-bounded-edge-coarse-triangular-filling.md`: exit 0, zero proof-bearing items checked, as expected for a definition. This is not a proof pass.
- `node tools/rendercheck.mjs items/def-bounded-edge-coarse-triangular-filling.md`: exit 0, one file clean, including YAML and KaTeX.
- `node tools/proof-contract.mjs research/phase-2-nine-step-25-batch-17.proof-contracts.json --strict --items def-bounded-edge-coarse-triangular-filling,lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings,lem-polygonal-boundary-crossing-for-affine-disk-maps,lem-coarse-triangle-minsize-is-bounded-by-square-root-area`: final exit 0, 4/4 checked, zero errors or warnings. The first run required explicit Definition anchors on three new boundary-evidence rows; those anchors were added and the check rerun successfully.
- Manifest and contract JSON parsed during targeted synchronization; all three old exact quotations were asserted equal to the original definition before replacement.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-nine-step-25`: exit 0, refreshed and deduplicated.

No unresolved mathematical obligation for this queued definition. Next action: record this repaired disposition through the prescribed terminal-resolution tool. This evidence is an FA terminal basis, not a judge verdict or pass stamp; no third consumer judgment was requested.
