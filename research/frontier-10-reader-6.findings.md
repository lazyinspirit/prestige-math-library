# Frontier-10 independent step-6 reader — batch 6

Date: 2026-08-11  
Role: independent step-6a reader  
Scope: all 76 items on `ramsey-theory`, `ramsey-theory-examples`, `plane-graphs-euler-and-the-five-colour-theorem`, and `plane-graphs-euler-and-the-five-colour-theorem-examples`

This is a reader report, not a judgment or certification. Alpha must confirm, refute, or extend every finding and every repair from disk.

## Scope and method

I read all four page files, every title and Statement/Definition/Example, all 63 proof-bearing items step by step, every displayed Fact, and the on-disk Statement or Definition of every cited dependency. I checked boundary cases and both directions of each biconditional. I separately tried to refute the three items whose Statements are marked `ai-generated`: `cor-infinite-ramsey-for-dedekind-infinite-sets`, `cex-infinite-branching-is-not-enough-for-konig`, and `cex-a-wild-arc-drawing-is-not-a-plane-graph`. I found no counterexample to those three claims.

The source URLs could not be fetched in this runtime: the web fetch returned no content and sandboxed DNS resolution failed. I therefore checked source provenance only against the durable harvest and batch notes. Mathematical dependency checking was not limited by this: every cited library item was opened locally and its actual Statement or Definition was read.

In the per-item ledger below, `P` means title, Statement, every numbered proof step, direct dependency Statements, boundary cases, and provenance were read; `D` means the same checks for a definition without a proof; `E` means title, Example/Statement-refuted, every verification/refutation step, dependencies, boundaries, and provenance were read.

## Findings and reader repairs

### F1 — fatal proposed — false “first exact Ramsey number” title

- Item: `thm-r-three-three-equals-six`; echoed by `ex-r-three-three-both-bounds`.
- Evidence: the title said “The first exact Ramsey number is \(R(3,3)=6\).” Exact Ramsey values with a target of \(1\), and the elementary \(R(2,t)=t\) boundary family, precede \(R(3,3)\). The proof establishes only \(R(3,3)=6\).
- Reader repair: changed the theorem title to “The Ramsey number \(R(3,3)=6\)” and removed the inflated wording from the example's [L1]. Synchronized the batch manifest and plan.

### F2 — fatal proposed — binomial theorem applied outside its hypothesis

- Item: `thm-diagonal-ramsey-counting-lower-bound`, step 3.1.
- Evidence: cited [L2] is `thm-binomial-closed-formula`, whose Statement assumes \(k\le n\). The proof applied it with \(n=N=\lfloor2^{k/2}\rfloor\) for every \(k\ge3\); at the endpoint \(k=3\), \(N=2<3\).
- Reader repair: restored the exact \(k\le n\) hypothesis in [L2] and split step 3.1. If \(N<k\), \(\binom Nk=0\) by definition; only if \(k\le N\) is [L2] used to obtain \(\binom Nk k!=N^{\underline k}\le N^k\). The direct `lem-integer-part` dependency and the required `limits-of-real-functions` page prerequisite were synchronized into the durable manifests.

### F3 — nonfatal proposed — function-count and pigeonhole Facts dropped source hypotheses

- Items: `thm-r-three-three-equals-six`, `thm-diagonal-ramsey-counting-lower-bound`, `thm-finite-ramsey-for-uniform-subsets`, and `lem-colour-focussing-for-arithmetic-progressions`.
- Evidence: the displayed Facts restated `thm-the-strong-pigeonhole-principle` or `thm-cardinality-of-a-set-of-functions` without their finite-set/function/positive-parameter hypotheses. The local Givens supply the needed finite objects, so each use is valid, but the citations as displayed said more than their sources.
- Reader repair: restored the omitted hypotheses in each Fact. No mathematical conclusion changed.

### F4 — nonfatal proposed — ZF branch construction did not cite recursion

- Item: `thm-konig-infinity-lemma-for-ordered-trees`, step 3.1.
- Evidence: the proof claimed to construct the infinite sequence “recursively” while citing only the preceding least-successor step. The Statement emphasizes a ZF construction, so the existence of the \(\mathbb N\)-indexed iterate is part of what must be licensed.
- Reader repair: added `thm-recursion` as [L2], defined the successor function on viable nodes, and applied [L2] from the root. Updated dependent contract quotations.

### F5 — nonfatal proposed — “not finite” was not yet “countably infinite”

- Item: `lem-infinite-pigeonhole-on-the-naturals`, step 2.1.
- Evidence: the contradiction proved that a fibre is not finite, while the Statement asks for an infinite colour class in the library's `def-countable` sense. The proof did not cite the ZF fact that an unbounded subset of \(\mathbb N\) is countably infinite.
- Reader repair: added `lem-subset-of-countable` as [L2] and used its exact sharper Statement to conclude that the nonfinite fibre is countably infinite.

### F6 — nonfatal proposed — density citation omitted the Archimedean hypothesis

- Item: `lem-polygonal-ray-general-position`, [L1] and step 1.1.
- Evidence: `lem-of-q-dense` applies to the canonical copy of \(\mathbb Q\) in an Archimedean ordered field. The original [L1] omitted both that hypothesis and the embedding, then applied the result in \(\mathbb R\).
- Reader repair: restored the exact hypothesis in [L1], added `thm-of-archimedean` as [L2], and used completeness of \(\mathbb R\) to license the density step.

### F7 — nonfatal proposed — Whitney path Facts omitted finite/order hypotheses

- Items: `prop-face-boundaries-in-two-connected-plane-graphs`, `lem-three-connected-graph-has-a-contractible-edge`, and `lem-edge-maximal-kuratowski-free-is-three-connected`.
- Evidence: their Facts stated the Whitney path characterization without the source Statement's finite-graph and minimum-order assumptions. Each local graph satisfies them, so the uses close immediately, but the displayed citations were inflated.
- Reader repair: restored the exact scope in all three Facts. In the edge-maximal lemma I also added direct face-incidence and facial-cycle citations for the boundary edge used in the gluing construction.

### F8 — fatal proposed — invalid inference in the peripheral-cycle characterization

- Item: `prop-face-boundaries-in-three-connected-plane-graphs`, original step 1.1.
- Evidence: the proof said that among three internally disjoint paths between two off-cycle vertices, “at most two can meet the cycle,” so one avoids it. Neither Whitney's theorem nor planarity gives that conclusion; all three paths may meet a cycle. The chord argument was compressed into the same unsupported sentence.
- Reader repair: rewrote the forward direction. Polygonal Jordan separation now rules out a facial chord by producing a two-vertex cut. A separate attachment argument shows that two components of \(G-V(C)\), each with at least three attachments, cannot alternate on the facial cycle and therefore again produce a two-vertex cut. The reverse direction now explicitly treats inducedness, both Jordan regions, connected deletion, and the empty-deletion case. Added the direct Jordan dependency.

### F9 — nonfatal proposed — false bounded-face sentence for nested components

- Item: `cor-euler-formula-for-disconnected-plane-graphs`, original step 1.1.
- Evidence: “all bounded faces remain distinct” is false when one connected component is drawn inside a bounded face of another; exterior and bounded faces can merge or be subdivided in nested configurations.
- Reader repair: replaced that sentence by component insertion. A spanning tree does not split the containing face, while each remaining cycle edge splits one face, giving exactly \(F(G_i)-1\) new faces. Added direct spanning-tree, forest-count, plane-forest, and face-incidence citations.

### F10 — fatal proposed — false attachment-leaf reduction for a \(K_5\) minor model

- Item: `lem-kuratowski-minors-are-topological-minors`, original steps 2.1–3.1.
- Evidence: a minimal branch tree need not have one distinct leaf for every incident model edge; several attachment incidences may meet the same vertex, and attachment vertices may be internal. Thus “each attachment tree has four leaves” is false, and the asserted star/two-degree-three-vertices dichotomy did not follow.
- Reader repair: allowed coincident attachment incidences. The \(K_{3,3}\) case uses a centre for at most three incidences. For four incidences, a finite weighted-tree centre argument gives either a four-arm centre or an edge separating the incidences \(2\)-\(2\). The first alternative yields a \(TK_5\); in the second, the two sides \(a,b\) and the other four branch sets \(u_1,\ldots,u_4\) display the explicit \(K_{3,3}\) minor with bipartition \(\{a,u_3,u_4\}\), \(\{b,u_1,u_2\}\), which the already proved \(K_{3,3}\) case converts to a subdivision.

### F11 — fatal proposed — undefined separation interface and inaccurate Menger citation

- Item: `lem-separation-augmentation-for-kuratowski-free-graphs`.
- Evidence: `def-vertex-and-edge-connectivity` defines vertex/edge cuts and connectivity, not a proper separation \((V_1,V_2)\). The original [L1] also restated Menger without its nonadjacent-terminal hypothesis, and the cited theorem did not license the claimed branch-vertex confinement. The order-zero and order-one replacement argument was only asserted.
- Reader repair: defined proper separation, separator, and order in the Statement; removed the unused/inflated Menger citation. The proof now inspects connectivity of \(K_5\) and \(K_{3,3}\) after deletion of at most two vertices or edges, distinguishes separator orders \(0,1,2\), gives the order-one rerouting through the cut vertex, proves \(xy\in E(G)\), and proves edge maximality of both induced sides.

### F12 — fatal proposed — edge-maximal three-connectivity proof had no licensed obstruction reduction

- Item: `lem-edge-maximal-kuratowski-free-is-three-connected`, original step 2.1.
- Evidence: the proof asserted an “exceptional” branch-vertex analysis across a two-separator and then claimed that replacing or adjoining paths produced a forbidden subdivision in a planar augmentation. No cited result gave that case split or the asserted planar augmentation.
- Reader repair: removed the unsupported obstruction analysis. Induction and F11 make both sides planar; direct minor/subdivision equivalence licenses that use. Put the common separator edge \(xy\) on a facial cycle in each drawing, glue the drawings along \(xy\) in opposite half-planes, and add a missing cross-edge inside the resulting face. The proper supergraph remains planar and hence obstruction-free, directly contradicting edge maximality. Added exact direct dependencies for minor equivalence, planar obstruction exclusion, edge-face incidence, and facial cycles.

### F13 — nonfatal proposed — simple-graph definitions did not define dual multigraph isomorphism or degree

- Item: `ex-one-planar-graph-two-nonisomorphic-duals`, [F1].
- Evidence: `def-graph-isomorphism-and-complement` and `def-graph-adjacency-incidence-neighbourhood-and-degree` concern simple graphs. They do not state isomorphism or loop-counted degree for the endpoint-map multigraphs used by the example.
- Reader repair: defined endpoint-map multigraph isomorphism and degree locally, including the two ends contributed by a loop. The degree-multiset argument is then elementary. Removed the inaccurate simple-graph dependencies and citations.

### F14 — nonfatal proposed — durable manifests disagreed with authored dependency lists

- Scope: batch manifest and `research/plan-spec.json`.
- Evidence: the batch notes recorded ten authoring-time dependency-list changes, but the durable batch manifest and plan still had the baseline lists. Reader repairs added further direct dependencies. The diagonal proof's `lem-integer-part` dependency also required the previously undeclared `limits-of-real-functions` page prerequisite.
- Reader repair: synchronized all 76 item dependency lists between item frontmatter, `research/frontier-10-batch-6.pages.json`, and `research/plan-spec.json`; synchronized the corrected Ramsey title and page prerequisite; reconciled all affected proof contracts. No item was added, deleted, renamed, or rehomed.

## Per-item ledger

### `ramsey-theory` — 21/21

| Item | Read | Result |
|---|---|---|
| `def-ramsey-colouring-and-arrow-notation` | D | Clean. |
| `lem-two-colour-ramsey-arrow-recursion` | P | Clean. |
| `thm-finite-graph-ramsey-binomial-bound` | P | Clean. |
| `def-off-diagonal-ramsey-number` | D | Clean, including positive-target boundary. |
| `cor-ramsey-recursion-and-diagonal-upper-bound` | P | Clean. |
| `thm-r-three-three-equals-six` | P | F1 fatal proposed; F3 nonfatal proposed. Repaired for Alpha review. |
| `thm-diagonal-ramsey-counting-lower-bound` | P | F2 fatal proposed; F3 nonfatal proposed. Repaired for Alpha review. |
| `thm-finite-ramsey-for-uniform-subsets` | P | F3 nonfatal proposed. Citation repaired. |
| `def-uniform-ramsey-number` | D | Clean, including positivity and least-witness existence. |
| `def-finitely-branching-tree-on-finite-sequences` | D | Clean. |
| `thm-konig-infinity-lemma-for-ordered-trees` | P | F4 nonfatal proposed. Repaired for Alpha review. |
| `lem-infinite-pigeonhole-on-the-naturals` | P | F5 nonfatal proposed. Repaired for Alpha review. |
| `thm-infinite-ramsey-on-the-naturals` | P | Clean; least-choice recursion and \(k=0\) boundary checked. |
| `cor-infinite-ramsey-for-dedekind-infinite-sets` | P | Clean after generated-Statement counterexample probe; injection direction checked. |
| `cor-finite-ramsey-by-konig-compactness` | P | Clean; contrapositive tree levels and finite branching checked. |
| `thm-canonical-ramsey-theorem-for-pairs` | P | Clean; all four alternatives and equality-pattern cases checked. |
| `lem-colour-focussing-for-arithmetic-progressions` | P | F3 nonfatal proposed. Citation repaired. |
| `thm-van-der-waerden-with-monochromatic-difference` | P | Clean; both induction parameters and positive-difference boundary checked. |
| `def-van-der-waerden-number` | D | Clean. |
| `thm-schur-monochromatic-sum` | P | Clean; positivity and \(x=y\) allowance checked. |
| `def-schur-number` | D | Clean; maximum-existence argument checked. |

### `ramsey-theory-examples` — 8/8

| Item | Read | Result |
|---|---|---|
| `ex-r-three-three-both-bounds` | E | F1 follow-on wording repaired; both colour bounds checked. |
| `ex-w-three-two-equals-nine` | E | Clean; explicit lower colouring and exhaustive symmetry-reduced upper cases checked. |
| `ex-infinite-monotone-subsequence-by-ramsey` | E | Clean; equality/non-strict monotonicity case checked. |
| `ex-infinite-convex-or-concave-subsequence-by-ramsey` | E | Clean; general-position hypothesis and triple orientation checked. |
| `fs-two-colouring-forces-an-infinite-monochromatic-progression` | E | Clean refutation; the valuation-parity colouring blocks every infinite progression. |
| `cex-infinite-branching-is-not-enough-for-konig` | E | Clean after generated-Statement probe; every level and absence of an infinite descending branch checked. |
| `cex-infinite-ramsey-fails-with-infinitely-many-colours` | E | Clean; every infinite set has pairs with distinct minimum colours. |
| `ex-all-four-canonical-pair-colouring-types` | E | Clean; all four canonical types checked directly. |

### `plane-graphs-euler-and-the-five-colour-theorem` — 40/40

| Item | Read | Result |
|---|---|---|
| `def-polygonal-arc-and-polygon` | D | Clean; non-self-intersection and endpoint conventions checked. |
| `def-plane-region-and-frontier` | D | Clean. |
| `lem-polygonal-ray-general-position` | P | F6 nonfatal proposed. Repaired for Alpha review. |
| `lem-polygonal-crossing-parity-is-locally-constant` | P | Clean; tangency and vertex-passage parity cases checked. |
| `thm-polygonal-jordan-curve` | P | Clean; inside/outside nonemptiness and frontier directions checked. |
| `lem-polygonal-arc-does-not-separate-the-plane` | P | Clean; endpoint and thin-neighbourhood completion cases checked. |
| `def-plane-graph-face-and-boundary` | D | Clean, including null graph and bridge-twice convention. |
| `lem-plane-graph-faces-are-finite-with-one-unbounded-face` | P | Clean. |
| `lem-face-containment-under-plane-subgraphs` | P | Clean. |
| `def-bridge-in-a-graph` | D | Clean. |
| `lem-edge-is-a-bridge-iff-it-lies-on-no-cycle` | P | Clean; both directions checked. |
| `lem-plane-edge-face-incidence` | P | Clean; cycle-edge and bridge cases checked. |
| `prop-plane-forest-has-one-face` | P | Clean, including null forest. |
| `lem-equal-plane-face-boundaries-force-a-cycle` | P | Clean. |
| `prop-face-boundaries-in-two-connected-plane-graphs` | P | F7 nonfatal proposed. Citation repaired. |
| `prop-face-boundaries-in-three-connected-plane-graphs` | P | F8 fatal proposed. Repaired for Alpha review. |
| `def-maximal-plane-and-maximally-planar-graph` | D | Clean. |
| `prop-maximal-plane-triangulation-characterisation` | P | Clean; order-three boundary and both directions checked. |
| `thm-euler-formula-for-connected-plane-graphs` | P | Clean; tree base and non-tree-edge deletion checked. |
| `cor-euler-formula-for-disconnected-plane-graphs` | P | F9 nonfatal proposed. Repaired for Alpha review. |
| `lem-plane-face-handshake-by-girth` | P | Clean; bridge multiplicity and forest exception checked. |
| `cor-planar-simple-graph-edge-bound` | P | Clean; disconnected and equality cases checked. |
| `cor-triangle-free-planar-edge-bound` | P | Clean; forest and component-joining cases checked. |
| `cor-planar-graph-has-low-degree-vertex` | P | Clean; null/small-order boundaries checked. |
| `cor-k-five-and-k-three-three-are-nonplanar` | P | Clean; the distinct \(3n-6\) and \(2n-4\) calculations checked. |
| `cor-planar-graphs-have-no-kuratowski-subdivision` | P | Clean; planarity inheritance and suppression direction checked. |
| `prop-maximally-planar-edge-characterisation` | P | Clean; both directions and \(n\ge3\) boundary checked. |
| `lem-kuratowski-minors-are-topological-minors` | P | F10 fatal proposed. Repaired for Alpha review. |
| `lem-three-connected-graph-has-a-contractible-edge` | P | F7 nonfatal proposed. Citation repaired; maximal-fragment proof checked. |
| `lem-three-connected-kuratowski-free-is-planar` | P | Clean after full contraction/lifting read; common-neighbour and alternating attachment cases checked. |
| `lem-separation-augmentation-for-kuratowski-free-graphs` | P | F11 fatal proposed. Repaired for Alpha review. |
| `lem-edge-maximal-kuratowski-free-is-three-connected` | P | F7 nonfatal proposed and F12 fatal proposed. Repaired for Alpha review. |
| `thm-kuratowski-wagner-planarity-characterisation` | P | Clean once F10–F12 are supplied; both obstruction formulations and both directions checked. |
| `def-plane-dual-multigraph` | D | Clean; loops and parallel edges checked. |
| `thm-plane-dual-exists-and-double-dual-recovers-primal` | P | Clean; bridge-loop and double-dual incidences checked. |
| `thm-six-colour-theorem-for-planar-graphs` | P | Clean; disconnected and isolated-vertex cases checked. |
| `def-kempe-chain` | D | Clean. |
| `lem-kempe-component-colour-swap` | P | Clean; every edge endpoint-colour case checked. |
| `lem-alternating-kempe-paths-cannot-both-occur` | P | Clean; cyclic order and Jordan crossing checked. |
| `thm-five-colour-theorem` | P | Clean; degree \(0\)–\(4\) and degree \(5\) Kempe cases checked. |

### `plane-graphs-euler-and-the-five-colour-theorem-examples` — 7/7

| Item | Read | Result |
|---|---|---|
| `ex-euler-formula-on-a-tree-cycle-and-k-four` | E | Clean; one-vertex tree, cycle, and \(K_4\) counts checked. |
| `cex-k-four-is-planar-but-not-three-colourable` | E | Clean; embedding and clique lower bound checked. |
| `ex-petersen-graph-nonplanar-by-kuratowski` | E | Clean; all nine \(K_{3,3}\) subdivision connections checked. |
| `ex-one-planar-graph-two-nonisomorphic-duals` | E | F13 nonfatal proposed. Repaired for Alpha review; both degree multisets recomputed. |
| `ex-five-colouring-by-a-kempe-swap` | E | Clean; component swap and extension colour checked. |
| `cex-k-three-three-satisfies-the-planar-edge-bound` | E | Clean; numerical inequality and independent nonplanarity checked. |
| `cex-a-wild-arc-drawing-is-not-a-plane-graph` | E | Clean after generated-Statement probe; continuity, injectivity, nonpolygonality, and straight-edge redraw checked. |

## Coverage, files, and validation

- Item coverage: 76/76.
- Proof-bearing coverage: 63/63.
- Direct dependency Statements/Definitions opened locally: all cited dependencies in scope.
- Proposed fatal findings: F1, F2, F8, F10, F11, F12.
- Proposed nonfatal findings: F3, F4, F5, F6, F7, F9, F13, F14.
- Items added/deleted/renamed/rehomed: none.
- Page prose changed: none.
- Mathematical item repairs: the 16 batch item files identified in the findings above.
- Durable records reconciled: `research/frontier-10-batch-6.pages.json`, `research/plan-spec.json`, and `research/frontier-10-batch-6.proof-contracts.json`.

Scoped validation after repair:

- strict proof contract: 63/63, zero errors and zero warnings;
- content policy: 76 items, zero errors and zero warnings;
- coverage checklist: 95 harvested headings, zero errors and zero warnings;
- plan validation: acyclic and consistent, with no item-level cycle, forward reference, B-page dependency, or unresolved id;
- renderer: all changed item files clean;
- prose checker: zero errors and zero warnings;
- precheck: all changed proof-bearing item files clean after adopting its canonical step ordering.

I could not independently fetch the external source URLs, as stated above. Nothing else in the assigned batch was left unchecked.
