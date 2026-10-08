# Native polyhedral gluing repairs — bounded audit

2026-10-07. Scope: the three batch-6 B items assigned by root after the native writer drained. Read CLAUDE.md, README.md, SCHEMA.md, the native pair report and the three Step-3b review receipts. The previously reported subscripted cell maps, induction tags and level 5→3 corrections already existed; the receipts' acceptance did not establish correctness of the remaining proof details.

One independent targeted audit read the three full items, their contracts and manifest rows, and their common definition, chain-metric theorem and star lemma as supplier context. The model calculations and chain arguments are explicit and were checked locally; no new external full-text reading is claimed. No broad source/proof review or iterative repair campaign was performed.

## Confirmed findings and focused repair

- `ex-cg-interval-realized-tree-versus-vertex-graph-metric`: the induction assumed that the smaller tree's own metric was the ambient restriction before proving it, and used same-cell distance equalities to prove those same equalities. Replaced the lower-bound passage by deletion of leaf excursions at the attaching vertex, then proved the same-cell and cross formulas in order. Supplied the leaf argument, symmetric cross recursion, the zero-length geodesic case, and explicit distance ranges needed for injectivity across the two parts of the metric interval. Recursive unit-speed concatenation proves existence without Choice. Point cells are counted in local finiteness and finite shapes; completeness is attributed to the theorem and geodesicity to this proof. All four comparison claims are retained.
- `cex-cg-shrinking-edge-ray-is-locally-finite-but-not-complete`: corrected vertex-edge meet indexing, the vertex map's domain, the description of endpoint copies, and the omission of point cells from local finiteness (at most three cells, not two). The finite coordinate chain uses inverse-coordinate points and explicitly has finitely many terms. Since the far endpoint `p_0` has coordinate 1, corrected the closed-ball calculation to `d(p_0,x)=|1−φ(x)|≤1<2`. The shrinking ray remains isometric to `[0,2)`, incomplete and improper; (H3) still fails.
- `ex-cg-hexagonal-a2-cell-and-graph-distance`: the shape `{empty,H}` did not satisfy the face-poset axiom. It now includes all thirteen nonempty faces, identity inclusions, and three shapes. Corrected the geodesic to unit speed on `[0,R]`, including `R=0`. Replaced the false assertion that path length is congruent to ±k modulo 6 by the signed sum of index increments, whose absolute value is bounded by path length. All twelve-triangle, slope, star-radius and metric comparisons are retained. Adopted the normative precheck's phase order and synchronized references.

Synchronized only the corresponding three batch-6 manifest rows and their batch/aggregate contract entries. Manifest levels remain 3. A repository search for direct `deps:` consumers of the three examples returned no matches, so the small Example/model corrections have no downstream item impact.

## Root-adjudicated supplier correction

The targeted supplier read flagged star-lemma Proof 7.1: “simplices containing v” alone is not a subcomplex, and an open star need not contain every boundary point of the closed star. Root personally adjudicated the exact objection and authorized one local correction in `lem-cg-polyhedral-face-coherence-and-uniform-star-radius`.

Proof 7.1 now closes the finite collection of simplices containing v under faces, counts their faces, defines the open star using relative interiors of simplices actually containing v, and proves its openness from the positive hat coordinate and coordinate continuity. It is a neighbourhood of each of its own points. Statement (iii) is unchanged. Only its exact derivation and inputs were synchronized in the two contracts; no consumer hop was required.

## Focused verification

After final edits:

- `node tools/tsx-run.mjs tools/precheck.mts` with the three explicit B item paths: 3 checked, 0 failing. The same command with the explicit star-lemma path: 1 checked, 0 failing.
- `node tools/rendercheck.mjs` with the three explicit B paths: OK, 3 files; with the star-lemma path: OK, 1 file.
- `node tools/proof-layout.mjs items/ex-cg-interval-realized-tree-versus-vertex-graph-metric.md items/cex-cg-shrinking-edge-ray-is-locally-finite-but-not-complete.md items/ex-cg-hexagonal-a2-cell-and-graph-distance.md`: 3 items, 21 steps, 0 defects.
- `node tools/proof-layout.mjs items/lem-cg-polyhedral-face-coherence-and-uniform-star-radius.md`: 1 item, 11 steps, 0 defects.
- `node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-6.proof-contracts.json --strict`: 0 errors, 0 warnings, 8/8 checked.
- `node tools/finite-smoke.mjs research/frontier-42-coxeter-32-batch-6.proof-contracts.json`: exact Q(√3) hexagon arithmetic passed; 0 errors, 1 check over 1/8 items. This occurred after the hexagon's final mathematical edit; later edits only affected tree/ray/star prose and contract synchronization.

These are local checks, not independent mathematical acceptance. No receipts, runtime state, controls or gates were changed. The bounded audit and focused repair are complete; no unresolved mathematical gap in the assigned item proofs remains.
