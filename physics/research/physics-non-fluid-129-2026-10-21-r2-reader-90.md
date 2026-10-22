# Step 3a reader report — batch 90

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `90` only

## Opened inventory

Assigned pages:

- `library/classical-statistical-mechanics/csm-frontier-fk-loop-algebra.md`
- `library/classical-statistical-mechanics/csm-frontier-fk-loop-algebra-examples.md`

All seven assigned items were opened and reviewed: `def-csm-frontier-finite-potts-fk`, `def-csm-frontier-fk-boundary-wiring`, `thm-csm-frontier-edwards-sokal`, `alg-csm-frontier-fk-connectivity-transfer`, `thm-csm-frontier-fk-transfer-correct`, `lem-csm-frontier-medial-loop-normalization`, and `ex-csm-frontier-potts-two-vertices`.

Page dependencies opened:

- `library/classical-statistical-mechanics/csm-frontier-large-deviation-ensembles.md` (draft, batch 88)
- `../library/quantum-algebra-and-representation-theory/temperley-lieb-diagram-algebra-and-catalan-basis.md` (published)
- `../library/combinatorics/graphs-walks-and-connectivity.md` (published)
- `../library/combinatorics/plane-graphs-euler-and-the-five-colour-theorem.md` (published)

The direct suppliers used in the assigned proofs and selected transitive suppliers needed to assess the planar argument were opened. These included finite-graph/cardinality definitions; plane-graph, region, boundary, dual, and graph-isomorphism definitions; plane-edge incidence, polygonal Jordan separation, bridge/cycle and graph-deletion results; connected-component and forest/Euler results; the open-subset polygonal-connectivity result; and the Temperley–Lieb diagram definition and category-laws proof. The current batch-90 proof-contract file, batch notes, and cross-batch dependency record were also inspected as evidence, not treated as verdicts.

## Mathematical review

The finite Potts/FK definition states finite simple graphs, integer `Q >= 2`, finite nonnegative edge activities, isolated-component counting, and positive finite normalizers. The boundary-wiring definition correctly identifies boundary classes before edge occupation and makes the discrete relation recover the free FK model.

The Edwards–Sokal proof's finite joint weight sums to the stated Potts and FK marginals. Its conditional uniform coloring is stated only for edge sets of positive FK probability, correctly handling zero activities. The connectivity/correlation identity follows by conditioning on whether the two vertices lie in one component.

The connectivity-transfer algorithm specifies its finite inputs, edge order, boundary partition, state transitions, edge branching, forgotten-vertex rule, terminal cleanup, and output. Its correctness invariant accounts once for isolated nonboundary vertices, closed blocks, and terminal blocks. The proof establishes termination and handles the free specialization. The two-vertex example correctly enumerates both edge subsets and all spin assignments, including `v = 0`.

The medial-loop identity has the correct free-boundary scope and normalization. The face/dual-component correspondence, disconnected Euler count, regular-neighborhood loop count, and exponent identity give `2 k(A) = |V| - |A| + ell(A)`, which yields the displayed partition-polynomial identity. The one-vertex and bridge cases agree with the stated conventions. The assigned TikZ smoothing diagram matches the labelled pairings and occupied/absent cases. The Temperley–Lieb supplier diagram correctly depicts `d_1` on three strands; neither diagram is used as a proof.

One nonfatal proof omission remains in a published prerequisite, recorded below. No defect was found in an assigned item or page carrier.

## Source review

The cited sections of Grimmett's *The Random-Cluster Model* (2.3, printed pp. 7–9) state the finite Potts/random-cluster coupling, cluster coloring, and correlation/connection identity. The local proof extends the equal-edge-parameter source setup to edge-dependent activities by explicit finite sums.

Duminil-Copin's *Geometric Representations of Lattice Spin Models* was checked at Chapter 3, §§3.1–3.2 and Chapter 4, §4.1. The finite coupling and free-boundary loop formula are relevant, but the latter is stated for finite square-lattice subgraphs with connected complement; the assigned item supplies its broader finite-plane-graph argument locally. Grans-Samuelsson et al., §3.2, supports the frontier-partition and FK/loop conventions in a periodic-cylinder setting and warns of toroidal subtleties. The assigned item does not claim a cylinder or torus formula.

Diestel, *Graph Theory*, Chapter 4, §4.6, states dual existence for connected plane multigraphs and the reciprocal duality; its hypotheses cover the assigned simple-plane-graph case. The disconnected Euler identity is supplied by the local published corollary, whose proof has the short omission below.

The web review covered these cited sections and relevant arguments, not the complete source documents. URLs and exact locators are retained in the assigned items.

## Uneditable finding

- `cor-euler-formula-for-disconnected-plane-graphs`, Proof 1.1: the text says the global fact that a plane forest has one face shows that inserting a spanning tree inside an existing face does not split that face. The global one-face statement alone does not establish this relative nonseparation. The listed bridge-incidence dependency can close the short step by inserting tree edges one at a time and using that each remains a bridge, but this argument is not stated. Severity is nonfatal; adding that relative argument closes the gap. The assigned loop-normalization lemma depends on this corollary.

## Page verdicts

- `csm-frontier-fk-loop-algebra` (A): no direct page or assigned-item defect found. Its mathematics is reviewed as a finite free-boundary planar identity. It retains the nonfatal published-dependency finding above through `lem-csm-frontier-medial-loop-normalization`.
- `csm-frontier-fk-loop-algebra-examples` (B): no page or example defect found; the example's finite enumeration is correct.

## Edits, checks, and blocker

No source edits were made because this is a read-only reader assignment. No item formatter, reflow, precheck, or other validation command was run; there are no changed item paths. No blocker remains for this review.

Coverage is limited to the assigned pages and items, the opened direct suppliers and selected transitive suppliers, the inspected contracts/notes, and the cited source sections. This was not a complete audit of every transitive foundational mathematics dependency or a full-text review of every cited source.
