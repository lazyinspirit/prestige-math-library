# Beta-frontier-10-6 scaffold notes

These notes are the durable step-2 reasoning record for the two batch-6 page pairs. They propose no edits outside the four authorised `research/frontier-10-batch-6.*` artifacts.

## Continuity checkpoint — 2026-08-11, step 2

Disk state verified at this checkpoint: the machine scaffold then contained 21 + 6 Ramsey items and 38 + 7 plane-graph items; both A pages were below the 60-item split threshold. The final hidden-lemma pass subsequently added the graph-theoretic bridge definition and bridge–cycle equivalence, so the final plane A count is 40. The coverage harvest contains two independent Ramsey treatments and four plane-graph treatments, including textbooks on both A pages, and `coverage-checklist.mjs` reports no errors or warnings. The contractible-edge prerequisite is a numbered lemma before the three-connected Kuratowski reduction. The page definition also fixes facial boundary-walk length explicitly, counting a bridge twice.

The audit-facing work after that checkpoint is now complete: every final published dependency was read on disk, the exact-schema proof-contract ledger covers every proof-bearing item, and the proposed pages pass an in-memory splice validation against the live plan. The sole execution blocker is recorded in the gate section below: this sandbox denies the aggregate gate wrapper permission to spawn its child Node processes, although the same three child gates pass when invoked directly.

## 1. Page shape, reading order, and split decision

| order | page | kind | item count | decision |
|---:|---|:---:|---:|---|
| 217 | `ramsey-theory` | A | 21 | no split |
| 218 | `ramsey-theory-examples` | B | 6 | companion |
| 357 | `plane-graphs-euler-and-the-five-colour-theorem` | A | 40 | no split |
| 358 | `plane-graphs-euler-and-the-five-colour-theorem-examples` | B | 7 | companion |

Neither A page approaches 60 items, so no split is proposed. The exact cut question is therefore inapplicable. If later adjudication adds at least 40 Ramsey items or 21 plane-graph items, the page must be split before authoring rather than shortened; nothing harvested here should be dropped merely to stay under the cap.

The Ramsey spine is: notation and the two-colour recursion; explicit finite bounds and `R(3,3)`; uniform finite Ramsey; a choice-free ordered-tree König lemma; infinite Ramsey on `N` and its exact Dedekind-infinite corollary; the compactness proof of the finite theorem; canonical pairs; van der Waerden; and Schur. The B page supplies exact small values, two infinite-sequence applications, and sharp failures of the tempting infinite-progression and unrestricted-branching claims.

The plane-graph spine is: polygonal topology; faces and facial boundary walks; Euler and its extremal corollaries; Kuratowski–Wagner with the contractible-edge and separation machinery exposed; duality; and the six- then five-colour induction. The B page tests Euler, planarity, dual embedding dependence, Kempe swapping, insufficiency of the edge bound, and the polygonal convention.

## 2. Proposed two-paragraph A-page summaries

### `ramsey-theory`

Ramsey theory turns a finite colouring into unavoidable homogeneous structure. This page develops the arrow notation, proves the finite graph theorem with the explicit binomial bound, computes `R(3,3)=6`, proves the finite uniform-hypergraph theorem, and records the elementary counting lower bound. It then builds König's infinity lemma for ordered finitely branching trees and proves infinite Ramsey on the natural numbers before using that theorem as a second, compactness-style route back to the finite result.

The later results illustrate the reach and the limits of the method: canonical Ramsey theory for pairs, van der Waerden's theorem with a monochromatic common difference, and Schur's theorem. All infinite constructions are stated over `N` in ZF; transfer is claimed only for a set supplied with an injection from `N`. Van der Waerden guarantees arbitrarily long finite progressions, not an infinite monochromatic progression, and the examples page makes that boundary explicit.

### `plane-graphs-euler-and-the-five-colour-theorem`

A plane graph is treated here as a finite graph drawn with polygonal edges, so its faces can be constructed without assuming the general Jordan curve theorem. The page proves the polygonal separation lemmas, establishes finite face structure and facial boundary walks, and derives Euler's formula, the standard planar edge and girth bounds, low-degree vertices, and the nonplanarity of `K_5` and `K_{3,3}`.

The page then proves the finite Kuratowski–Wagner characterisation with its three-connected contraction machinery exposed, constructs plane duals, and culminates in the five colour theorem by Kempe-chain swapping. The four colour theorem is true but is not proved or used here: its known proof needs computer-verified reducible configurations and discharging beyond this page. Likewise, every geometric argument is polygonal; no equivalence with arbitrary Jordan-arc or straight-line embeddings is asserted.

## 3. Applyable amendments to the prose scaffold

These are proposals for step-3 adjudication; this Beta did not edit the normative prose.

1. CB-11 `requires` block.

   Exact old text:

   ```text
   `requires`: `graph-colouring` (197),
   `inclusion-exclusion-and-the-pigeonhole-principle` (22),
   `countability-and-uncountability` (18)
   ```

   Exact new text:

   ```text
   `requires`: `graph-colouring` (197),
   `inclusion-exclusion-and-the-pigeonhole-principle` (22),
   `countability-and-uncountability` (18), `sequences-and-limits` (112)
   ```

   The B-page monotone and convex/concave subsequence applications cite the published sequence definition; the existing three requirements remain.

2. CB-11 infinite theorem sentence.

   Exact old text:

   ```text
   **the infinite Ramsey theorem**
   (landmark), with **DC named in the Statement** (§7) and a choice-ledger remark;
   ```

   Exact new text:

   ```text
   **the infinite Ramsey theorem on $\mathbb N$** (landmark), proved in ZF by
   choosing least colours and least natural witnesses; the transfer corollary is
   stated only for a set equipped with an injection from $\mathbb N$;
   ```

   This avoids the false ZF assertion that every infinite set contains a countably infinite subset.

3. CB-11 compactness sentence.

   Exact old text:

   ```text
   **the finite theorem derived from the infinite one by compactness** (König's
   lemma, DC), as a *second* proof with an agreement remark — the first proof is
   choice-free and that contrast is the item's whole point;
   ```

   Exact new text:

   ```text
   **the finite theorem derived from the infinite one by compactness** (König's
   lemma for ordered trees of finite sequences, in ZF), as a *second* proof with
   an agreement remark — both proofs are choice-free, and the compactness proof
   chooses the least successor with arbitrarily high descendants;
   ```

4. CB-11 Schur/Fermat sentence.

   Exact old text:

   ```text
   **Schur's theorem** and the corollary
   that $x^n + y^n \equiv z^n \pmod p$ has a nontrivial solution for large $p$
   (cites the number theory pages at 26–30);
   ```

   Exact new text:

   ```text
   **Schur's theorem**; its modular Fermat corollary is deferred to the finite-
   fields material, because the standard proof also needs cyclicity of
   $\mathbb F_p^\times$ and a polynomial root bound, neither of which is available
   from the number-theory pages at 26–30;
   ```

5. GT-8 Kuratowski sentence.

   Exact old text:

   ```text
   **Kuratowski's theorem** (landmark: planar iff no subdivision of $K_5$ or
   $K_{3,3}$), via 3-connectivity, citing GT-4's Menger/Whitney form and building
   the drawing by induction on edge contraction;
   ```

   Exact new text:

   ```text
   **Kuratowski–Wagner's theorem** (landmark: planar iff no subdivision of
   $K_5$ or $K_{3,3}$, equivalently neither minor), via separately numbered
   contractible-edge, three-connected drawing, separation-augmentation, and
   edge-maximal three-connectivity lemmas, citing GT-4's Menger/Whitney form;
   ```

   The existing general-Jordan and four-colour trap text remains: the former is not a dependency and the latter is true, unproved here, and never cited.

## 4. Canonical source harvest and licensing ledger

The machine-readable heading-by-heading harvest is in `frontier-10-batch-6.coverage.json`. The source pair for each A page was read over the exact ranges recorded there; the extra sources below resolve exact constants, examples, and proof seams.

| source and locator | use | licence / handling |
|---|---|---|
| Reinhard Diestel, *Graph Theory*, 6th ed. preview, Ch. 9 §9.1, <https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch9.pdf> | finite and infinite Ramsey, uniform form | official copyrighted preview; facts and result structure only |
| I. B. Leader, *Ramsey Theory*, §§1.1–1.2, pp. 1–7, <https://www.dpmms.cam.ac.uk/~par31/notes/ramsey.pdf> | infinite and canonical Ramsey, van der Waerden, Schur, sequence applications | official lecture notes; no explicit reuse licence found, so reference only |
| Jacob Fox et al., *Graph Ramsey Theory*, §2.1, <https://math.mit.edu/~fox/paper-graphramsey.pdf> | recursion and binomial bound cross-check | author-hosted survey; reference only |
| MIT OCW 18.310, Ch. 3, <https://ocw.mit.edu/courses/18-310-principles-of-discrete-applied-mathematics-fall-2013/resources/mit18_310f13_ch3/> | exact `W(3,2)=9` | CC BY-NC-SA course material; adapted mathematics, independently worded |
| Douglas West / Whitman College combinatorial game-theory text, Ramsey example, <https://www.whitman.edu/mathematics/cgt_online/cgt.pdf> | explicit `R(3,3)` extremal colouring cross-check | reference only |
| Diestel, Ch. 3 §3.2 Lemma 3.2.4, <https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch3.pdf> | contractible-edge lemma | official copyrighted preview; reference only |
| Diestel, Ch. 4 §§4.1, 4.2, 4.4, 4.6, <https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf> | polygonal topology, faces, Euler, Kuratowski, duality | official copyrighted preview; reference only |
| Diestel, Ch. 5 §5.1 through Proposition 5.1.2, <https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch5.pdf> | five-colour theorem and four-colour boundary | official copyrighted preview; reference only |
| Richard Grassl and Oscar Levin, *Exploring Combinatorial Mathematics*, §§3.3, 3.4.1, 3.5, <https://openmathbooks.org/ecm/ecm.html> | independent Euler, nonplanarity, edge bounds, six/five colours | GNU FDL; reference and independently worded derivations |
| J. A. Bondy and U. S. R. Murty, *Graph Theory with Applications*, plane dual examples, <https://math.arizona.edu/~kglasner/math443/BondyMurtyGTWA.pdf> | nonisomorphic duals from distinct embeddings | reference only |
| Jeff Erickson, *Planar Graphs*, §9, <https://jeffe.cs.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.pdf> | plane-embedding/dual and nonpolygonal seam cross-check | author-hosted course notes; reference only |

No source prose or diagram is copied. All references will be cited at the theorem or example that uses them. Generated provenance is reserved for directly checked leaf examples/counterexamples, never for a load-bearing theorem.

## 5. Coverage dispositions likely to be challenged

The harvest records 88 source/result-heading dispositions: 67 `included`, 15 `inline`, one `already-published`, two `deferred`, and three `out-of-scope`. Thus 82 harvested headings feed the scaffold, one is discharged by a published item, and five are declines. The five decline records comprise one Ramsey result and four plane-graph records, of which two independently record the same four-colour boundary.

| result | disposition | defence |
|---|---|---|
| Schur's modular Fermat corollary | deferred | Its usual proof uses the cyclic multiplicative group of a finite field and a polynomial root bound. Those are an unbuilt algebraic subject, not a local lemma that can honestly be added here. Schur itself is included. |
| General Jordan curve theorem | out of scope | The polygonal theorem required by finite plane graphs is built here. Arbitrary topological circles and Schoenflies theory belong to the later embedding/topology subject. |
| Whitney uniqueness of embeddings | deferred | Euler already proves face-count invariance. Full embedding uniqueness requires a separate 3-connected topological-equivalence theory; it is not being invoked by duality or colouring. |
| Four colour theorem (two source records) | out of scope | The dispatch explicitly requires the five-colour theorem and explicitly forbids silently omitting four-colour. The known proof's computer-verified reducible-configuration/discharging machinery is outside the auditable scope; the theorem is neither cited nor labelled false. |

No canonical result was declined merely because it needed an ordinary lemma. In particular, polygonal Jordan separation, face incidence, the contractible-edge lemma, both Kuratowski reduction lemmas, and the Kempe separation lemma are all built.

## 6. Convention disagreements and seams

- **Choice:** textbook statements over an arbitrary “infinite set” commonly hide a countably infinite selection. This scaffold proves the theorem over `N` in ZF and transfers it only along a supplied injection `N -> X`. It does not cite `def-dependent-choice` or `def-countable-choice`.
- **König:** the tree consists of finite sequences and each finite successor set is ordered. Choosing the least viable successor is therefore definable in ZF. “Infinite branching is enough” is separately refuted.
- **Ramsey numbers:** `R(s,t)` is introduced only after a finite witness theorem and leastness uses well-ordering. The same theorem-before-definition discipline is used for `R_k(r;c)`, `W(k,c)`, and `S(c)`.
- **Arithmetic progressions:** natural-number indexing includes zero in the `W(3,2)` example; translating an interval does not change the exact value. The page always requires a positive common difference.
- **Plane graph:** edges are polygonal arcs and meet only at common endpoints. This is deliberately narrower than arbitrary Jordan-arc drawing and makes the topological proof surface auditable.
- **Face length:** a facial boundary is a closed walk, not always a cycle. A bridge is traversed twice, so the face handshake sum is exactly `2|E|`. Cycle boundaries are asserted only under two-connectivity.
- **Dual:** the dual is a multigraph: a bridge creates a loop and parallel primal separations can create parallel dual edges. Duals depend on the embedding; only reciprocal duality for a fixed connected plane embedding is claimed.
- **Planarity obstructions:** the page proves both the subdivision and minor forms and states their equivalence specifically for `K_5` and `K_{3,3}`; it does not conflate an arbitrary minor with an arbitrary topological minor.
- **Colouring:** the page proves six colours first as the induction baseline, then five via a Kempe swap and a polygonal separation lemma. It makes no four-colour inference.

## 7. Item-by-item provenance ledger

Abbreviations: D9 = Diestel Ch. 9 §9.1; L1 = Leader §§1.1–1.2; F2 = Fox et al. §2.1; M3 = MIT OCW Ch. 3; D3/D4/D5 = Diestel Chapters 3/4/5; ECM = *Exploring Combinatorial Mathematics* §§3.3–3.5; BM = Bondy–Murty; JE = Erickson.

### Ramsey A

| item | provenance route |
|---|---|
| `def-ramsey-colouring-and-arrow-notation` | D9 definitions, cross-checked L1 |
| `lem-two-colour-ramsey-arrow-recursion` | F2 recursion proof, cross-checked from D9's induction |
| `thm-finite-graph-ramsey-binomial-bound` | F2 §2.1 and D9 Theorem 9.1.1 |
| `def-off-diagonal-ramsey-number` | F2/D9 after the witness theorem |
| `cor-ramsey-recursion-and-diagonal-upper-bound` | direct corollary of the preceding sourced recursion and Pascal/binomial theorem |
| `thm-r-three-three-equals-six` | standard six-vertex pigeonhole proof and five-cycle colouring, cross-checked in the Whitman text |
| `thm-diagonal-ramsey-counting-lower-bound` | Erdős finite counting argument as presented in modern Ramsey surveys including F2 |
| `thm-finite-ramsey-for-uniform-subsets` | D9 Theorem 9.1.3, cross-checked L1 Corollary 3 |
| `def-uniform-ramsey-number` | direct least-witness definition after the preceding theorem |
| `def-finitely-branching-tree-on-finite-sequences` | standard ordered finite-sequence model, tailored to the ZF proof obligation |
| `thm-konig-infinity-lemma-for-ordered-trees` | constructive least-successor proof; compactness role cross-checked L1 Corollary 3 |
| `lem-infinite-pigeonhole-on-the-naturals` | direct finite-partition lemma from the published pigeonhole/sum rules |
| `thm-infinite-ramsey-on-the-naturals` | D9 Theorem 9.1.2 and L1 Theorems 1–2, with choice assumptions corrected to the exact `N` form |
| `cor-infinite-ramsey-for-dedekind-infinite-sets` | direct transport along the supplied injection |
| `cor-finite-ramsey-by-konig-compactness` | L1 Corollary 3, written through the numbered ordered-tree lemma |
| `thm-canonical-ramsey-theorem-for-pairs` | L1 Theorem 4 |
| `lem-colour-focussing-for-arithmetic-progressions` | L1 §1.2 preliminary focussing claim |
| `thm-van-der-waerden-with-monochromatic-difference` | L1 Theorems 6 and 8 |
| `def-van-der-waerden-number` | L1 definition after the witness theorem |
| `thm-schur-monochromatic-sum` | L1 remark deriving Schur from finite Ramsey |
| `def-schur-number` | direct bounded-set maximum definition after Schur |

### Ramsey B

| item | provenance route |
|---|---|
| `ex-r-three-three-both-bounds` | sourced theorem specialised with the explicit five-cycle witness |
| `ex-w-three-two-equals-nine` | M3 exact value and extremal colouring; the finite upper case will be independently enumerated |
| `ex-infinite-monotone-subsequence-by-ramsey` | L1 example after Theorem 1 |
| `ex-infinite-convex-or-concave-subsequence-by-ramsey` | L1 example after Theorem 2 |
| `fs-two-colouring-forces-an-infinite-monochromatic-progression` | L1 explicit warning; constructive dyadic-block colouring supplied in the proof |
| `cex-infinite-branching-is-not-enough-for-konig` | standard decreasing-sequence tree, directly verified |

### Plane-graph A

| item | provenance route |
|---|---|
| `def-polygonal-arc-and-polygon` | D4 §4.1 definitions plus the published polygonal-path definition |
| `def-plane-region-and-frontier` | D4 §4.1 and published topology definitions |
| `lem-polygonal-ray-general-position` | D4 §4.1 ray-crossing setup, expanded into its own well-definedness lemma |
| `lem-polygonal-crossing-parity-is-locally-constant` | D4 §4.1 parity proof, expanded |
| `thm-polygonal-jordan-curve` | D4 Lemma 4.1.2 |
| `lem-polygonal-arc-does-not-separate-the-plane` | D4 Lemma 4.1.3 |
| `def-plane-graph-face-and-boundary` | D4 §4.2 and ECM §3.3, with facial boundary walks made explicit |
| `lem-plane-graph-faces-are-finite-with-one-unbounded-face` | D4 §4.2 opening facts, proved from the numbered polygonal lemmas |
| `lem-face-containment-under-plane-subgraphs` | D4 Lemma 4.2.1 |
| `def-bridge-in-a-graph` | standard graph definition used explicitly by D4 §4.2 edge incidence |
| `lem-edge-is-a-bridge-iff-it-lies-on-no-cycle` | direct graph-theoretic equivalence required before D4 Lemma 4.2.2 |
| `lem-plane-edge-face-incidence` | D4 Propositions/Lemmas 4.2.2–4.2.3 |
| `prop-plane-forest-has-one-face` | D4 Proposition 4.2.4 |
| `lem-equal-plane-face-boundaries-force-a-cycle` | D4 Lemma 4.2.5 |
| `prop-face-boundaries-in-two-connected-plane-graphs` | D4 Proposition 4.2.6 |
| `prop-face-boundaries-in-three-connected-plane-graphs` | D4 Proposition 4.2.7 |
| `def-maximal-plane-and-maximally-planar-graph` | D4 §4.2 definitions |
| `prop-maximal-plane-triangulation-characterisation` | D4 Proposition 4.2.8 |
| `thm-euler-formula-for-connected-plane-graphs` | D4 Theorem 4.2.9 and ECM Theorem 3.3.1 |
| `cor-euler-formula-for-disconnected-plane-graphs` | direct component induction from sourced connected Euler |
| `lem-plane-face-handshake-by-girth` | D4 face-incidence derivation, cross-checked ECM Activities 294–296 |
| `cor-planar-simple-graph-edge-bound` | D4 Corollary 4.2.10 and ECM Activity 298 |
| `cor-triangle-free-planar-edge-bound` | D4 derivation and ECM Activity 296 |
| `cor-planar-graph-has-low-degree-vertex` | D4/ECM Activity 299 |
| `cor-k-five-and-k-three-three-are-nonplanar` | D4/ECM Activities 295–296 |
| `cor-planar-graphs-have-no-kuratowski-subdivision` | D4 Corollary 4.2.11 |
| `prop-maximally-planar-edge-characterisation` | D4 Proposition 4.4.1 |
| `lem-kuratowski-minors-are-topological-minors` | D4 Lemma 4.4.2 |
| `lem-three-connected-graph-has-a-contractible-edge` | D3 Lemma 3.2.4 |
| `lem-three-connected-kuratowski-free-is-planar` | D4 Lemma 4.4.3, now explicitly depending on D3 Lemma 3.2.4 |
| `lem-separation-augmentation-for-kuratowski-free-graphs` | D4 Lemma 4.4.4 |
| `lem-edge-maximal-kuratowski-free-is-three-connected` | D4 Lemma 4.4.5 |
| `thm-kuratowski-wagner-planarity-characterisation` | D4 Theorem 4.4.6 |
| `def-plane-dual-multigraph` | D4 §4.6 and JE |
| `thm-plane-dual-exists-and-double-dual-recovers-primal` | D4 §4.6 reciprocal-dual paragraph |
| `thm-six-colour-theorem-for-planar-graphs` | ECM Activity 306 |
| `def-kempe-chain` | D5 §5.1 proof vocabulary |
| `lem-kempe-component-colour-swap` | D5 Proposition 5.1.2 proof, isolated |
| `lem-alternating-kempe-paths-cannot-both-occur` | D5 Proposition 5.1.2 plus the numbered polygonal JCT |
| `thm-five-colour-theorem` | D5 Proposition 5.1.2 and ECM Activity 307 |

### Plane-graph B

| item | provenance route |
|---|---|
| `ex-euler-formula-on-a-tree-cycle-and-k-four` | ECM Activities 287–293; direct finite checks |
| `cex-k-four-is-planar-but-not-three-colourable` | direct leaf counterexample from the complete-graph and colouring definitions |
| `ex-petersen-graph-nonplanar-by-kuratowski` | standard explicit subdivision, checked against D4's criterion |
| `ex-one-planar-graph-two-nonisomorphic-duals` | BM dual-embedding example, cross-checked JE |
| `ex-five-colouring-by-a-kempe-swap` | D5 proof specialised to one degree-five insertion |
| `cex-k-three-three-satisfies-the-planar-edge-bound` | direct arithmetic leaf counterexample from D4/ECM bounds |
| `cex-a-wild-arc-drawing-is-not-a-plane-graph` | direct convention counterexample, motivated by JE's embedding discussion |

## 8. Proof decomposition and authoring obligations

- The finite graph Ramsey proof first establishes the asymmetric recursion, including the base cases `s=1` or `t=1`, and only then iterates Pascal's identity. `R(s,t)` is not available before this witness.
- The counting lower bound must count bad colourings of each `K_k`, union-bound those finite sets without probability language, and prove the displayed inequality for every `k>=3`; small `k` cannot be waved away.
- The uniform finite proof must show its induction parameter and explicit finite witness recurrence. The infinite proof must construct a sequence of vertices and nested infinite reservoirs by least choices on `N`, then invoke induction on subset size.
- The canonical pair theorem must define the four behaviours precisely, especially “left-dependent” and “right-dependent,” and prove mutual coverage after thinning.
- The van der Waerden focussing lemma is the engine, not a slogan. The author must record the induction parameters and the colour-vector pigeonhole bound used at each extension.
- Polygonal Jordan must number general position, parity invariance, existence of both parities, connectedness of each parity class, and frontier equality. No arbitrary-Jordan theorem may enter a citation.
- Before geometric edge incidence, prove from paths that an edge is a bridge exactly when it lies on no cycle. Euler must then treat bridge and cycle-edge cases explicitly and state what happens to the number of faces on edge deletion. The disconnected formula includes the null graph.
- The Kuratowski chain must prove the contractible-edge lemma, the three-connected induction, the separation augmentation, and the edge-maximal three-connectivity reduction as separate arguments. A citation to the final theorem cannot substitute for these proofs.
- Dual construction must explain loop/parallel-edge cases and why reciprocal crossing arcs can be chosen polygonally without unintended intersections.
- Five-colour must extract the cyclic neighbour order from the plane embedding, prove the two alternating Kempe connections cannot coexist by polygonal separation, and verify that the colour swap frees a colour at the deleted vertex.

The proof-contract JSON is the step-5 checklist. Its cited clauses are obligations to reproduce or cite exactly; its derivation nodes are not permission to collapse multi-step arguments into “standard.”

## 9. Boundary pass

- Ramsey indices: `s,t,k,c,r` positivity is explicit; recursion assumes `s,t>=2`; `R(3,3)` checks both bounds; `W(k,c)` requires a positive difference; Schur uses the positive interval `{1,...,N}`, excludes the trivial zero solution, and permits `x=y` unless the source theorem states otherwise.
- Infinite results: only finite colour sets; `k=1` is a real base case; the homogeneous set is infinite in the sense of an injection/enumeration, not merely not-finite; no arbitrary-set choice is hidden.
- Trees: root and empty sequence included; every level is nonempty; finite branching includes zero successors; an infinite branch has a node at every level.
- Plane graphs: null graph and disconnected graphs handled in the extended Euler formula; loops are excluded in the primal simple graph but allowed in its dual; bridges count twice in facial length.
- Edge bounds: `n>=3` is explicit; simple graphs only; triangle-free gives face length at least four after bridge/tree boundary cases are discharged rather than assumed.
- Connectivity: three-connected statements exclude small graphs as required; `K_4` is the base case for contraction; simple contraction deletes resulting loops and merges parallel edges.
- Colouring: isolated vertices and disconnected components reduce immediately; degree `<5` is separate from degree `5`; a Kempe component swap affects no edge with exactly one endpoint in the component and the other carrying one of the two swapped colours.

## 10. Published dependency audit

All 60 candidate external dependency files were opened in full from `items/`, not inferred from a page summary. The clause audit rejected two direct dependencies, leaving 58: `def-bipartite-graph` and `thm-bipartite-iff-no-odd-cycle` cannot support the triangle-free edge bound because triangle-free does not imply bipartite. They remain in the table as opened-and-rejected evidence and are not present in the final manifest. For every row the route was: confirm `status: published`; read and match the exact Statement/Definition clause used; confirm the owning page is earlier than order 217 or 357 through the live plan/library frontmatter; inspect `provenance.statement`; then run the spliced validator and manifest content policy. “LD” means `literature-derived` statement provenance and “AA” means `ai-altered`. No dependency has `provenance.statement: ai-generated`; generated legacy proofs are not being treated as statement evidence.

| published dependency opened | owning published page | route |
|---|---|---|
| `cor-complete-graph-edge-count` | `graphs-walks-and-connectivity` (207) | AA; exact edge-count Statement matched |
| `cor-components-of-open-subsets-of-rn-are-polygonally-connected` | `the-topology-of-euclidean-space` (257) | AA; exact component Statement matched |
| `cor-connected-components-partition-the-vertex-set` | `graphs-walks-and-connectivity` (207) | AA; exact partition/maximality Statement matched |
| `cor-whitney-k-connected-path-characterisation` | `matchings-covers-menger-and-network-flows` (213) | LD; both directions and size hypothesis matched |
| `def-binomial-coefficient` | `finite-counting-and-binomial-coefficients` (20) | LD; definition and boundary clauses matched |
| `def-bipartite-graph` | `graphs-walks-and-connectivity` (207) | AA; opened, then rejected as non-load-bearing for triangle-free graphs |
| `def-bounded-set` | `suprema-and-infima` (14) | LD; boundedness Definition matched |
| `def-connected-component-and-quasicomponent` | `connectedness` (253) | AA; largest-connected-subset clause matched |
| `def-connected-graph-and-connected-component` | `graphs-walks-and-connectivity` (207) | AA; path-connected graph/component Definition matched |
| `def-countable` | `countability-and-uncountability` (18) | AA; finite/countably-infinite convention matched |
| `def-equinumerous` | `countability-and-uncountability` (18) | AA; bijection and domination clauses matched |
| `def-finite-cardinality` | `finite-counting-and-binomial-coefficients` (20) | AA; uniqueness/transport/cardinality clauses matched |
| `def-finite-simple-graph` | `graphs-walks-and-connectivity` (207) | AA; finite simple graph convention matched |
| `def-graph-adjacency-incidence-neighbourhood-and-degree` | `graphs-walks-and-connectivity` (207) | AA; adjacency/degree clauses matched |
| `def-graph-deletion-contraction-minor-and-subdivision` | `graphs-walks-and-connectivity` (207) | AA; simple contraction, minor, subdivision clauses matched |
| `def-graph-distance-and-girth` | `graphs-walks-and-connectivity` (207) | AA; girth and acyclic convention matched |
| `def-graph-isomorphism-and-complement` | `graphs-walks-and-connectivity` (207) | AA; isomorphism/complement Definition matched |
| `def-graph-walk-trail-path-and-cycle` | `graphs-walks-and-connectivity` (207) | AA; walk/path/cycle clauses matched |
| `def-injection-surjection-bijection` | `relations-functions-and-quotients` (5.3) | AA; injective/bijective clauses matched |
| `def-interior-closure-boundary-top` | `topological-spaces-and-continuity` (249) | AA; closure/frontier Definition matched |
| `def-multigraph-loop-and-digraph` | `graphs-walks-and-connectivity` (207) | AA; loop/parallel-edge clauses matched |
| `def-nat-order` | `construction-of-the-natural-numbers` (6) | LD; additive order Definition matched |
| `def-nat-power` | `finite-counting-and-binomial-coefficients` (20) | AA; natural exponentiation recursion matched |
| `def-natural-numbers` | `construction-of-the-natural-numbers` (6) | LD; von Neumann natural convention matched |
| `def-ordered-field` | `foundations-of-the-real-numbers` (9) | AA; positive-cone order Definition matched |
| `def-path-connected` | `connectedness` (253) | AA; path and path-connectedness clauses matched |
| `def-petersen-graph` | `graphs-walks-and-connectivity` (207) | AA; disjoint-two-subset Definition matched |
| `def-polygonal-path-and-polygonal-connectedness` | `the-topology-of-euclidean-space` (257) | AA; finite polygonal path Definition matched |
| `def-proper-vertex-colouring-and-chromatic-number` | `graph-colouring` (215) | LD; proper-colouring/chromatic-number clauses matched |
| `def-rational-power` | `roots-and-rational-powers` (16) | AA; positive-base rational power Definition matched |
| `def-real-order` | `construction-of-r-via-cauchy-sequences` (7) | AA; real-order Definition matched |
| `def-sequence` | `sequences-and-limits` (112) | AA; real sequence/subsequence clauses matched |
| `def-standard-complete-bipartite-path-and-cycle-graphs` | `graphs-walks-and-connectivity` (207) | AA; complete/bipartite/cycle conventions matched |
| `def-subgraph-induced-subgraph-and-spanning-subgraph` | `graphs-walks-and-connectivity` (207) | AA; subgraph/induced/spanning clauses matched |
| `def-subspace-topology-top` | `topological-spaces-and-continuity` (249) | AA; trace and subspace clauses matched |
| `def-sum-over-a-finite-index-set` | `finite-counting-and-binomial-coefficients` (20) | AA; finite reindexing and constant-sum clauses matched |
| `def-tree-forest-and-leaf` | `trees-forests-and-spanning-trees` (209) | LD; forest/tree/leaf conventions matched |
| `def-vertex-and-edge-connectivity` | `graphs-walks-and-connectivity` (207) | AA; cut/connectivity and small-graph conventions matched |
| `lem-alternating-sequence` | `monotone-sequences-and-cauchy-completeness` (114) | AA; recursive parity partition Statement matched |
| `lem-edge-deletion-in-a-tree` | `trees-forests-and-spanning-trees` (209) | AA; exact two-component Statement matched |
| `lem-metrics-on-rn` | `metric-spaces` (116) | AA; `R^2` function-coordinate model and metric clauses matched |
| `lem-nonempty-forest-has-low-degree-vertex` | `trees-forests-and-spanning-trees` (209) | AA; degree-at-most-one Statement matched |
| `lem-of-q-dense` | `foundations-of-the-real-numbers` (9) | LD; Archimedean density Statement matched |
| `lem-rational-power-monotone` | `roots-and-rational-powers` (16) | AA; monotonicity in base/exponent clauses matched |
| `thm-binomial-closed-formula` | `finite-counting-and-binomial-coefficients` (20) | AA; natural identity and symmetry clauses matched |
| `thm-binomial-theorem` | `finite-counting-and-binomial-coefficients` (20) | AA; real binomial identity matched |
| `thm-bipartite-iff-no-odd-cycle` | `graphs-walks-and-connectivity` (207) | LD; opened, then rejected because “no triangle” is weaker than “no odd cycle” |
| `thm-cardinality-of-a-set-of-functions` | `finite-counting-and-binomial-coefficients` (20) | LD; function-set count including empty cases matched |
| `thm-connected-iff-has-spanning-tree` | `trees-forests-and-spanning-trees` (209) | AA; both directions matched |
| `thm-double-counting` | `inclusion-exclusion-and-the-pigeonhole-principle` (22) | AA; row/column fibre identity matched |
| `thm-forest-edge-component-count` | `trees-forests-and-spanning-trees` (209) | AA; null-inclusive edge/component identity matched |
| `thm-handshake-lemma-for-finite-simple-graphs` | `graphs-walks-and-connectivity` (207) | LD; null-inclusive handshake identity matched |
| `thm-induction-principle` | `construction-of-the-natural-numbers` (6) | LD; set and property forms matched |
| `thm-menger-finite-directed-and-undirected-path-forms` | `matchings-covers-menger-and-network-flows` (213) | LD; finite undirected vertex form and nonadjacency hypothesis matched |
| `thm-pascals-rule` | `finite-counting-and-binomial-coefficients` (20) | AA; unrestricted Pascal identity matched |
| `thm-product-rule` | `finite-counting-and-binomial-coefficients` (20) | AA; two-factor and finite-family forms matched |
| `thm-recursion` | `construction-of-the-natural-numbers` (6) | LD; existence-and-uniqueness recursion Statement matched |
| `thm-sum-rule` | `finite-counting-and-binomial-coefficients` (20) | AA; disjoint finite union/partition forms matched |
| `thm-the-strong-pigeonhole-principle` | `inclusion-exclusion-and-the-pigeonhole-principle` (22) | AA; counting and ceiling forms matched |
| `thm-well-ordering-principle` | `construction-of-the-natural-numbers` (6) | LD; least-element Statement matched |

The spliced `validate-plan.mjs` run reports no unresolved ids, item-level forward references, B-page dependencies, or cycles. `content-policy.mjs ... --manifest-only` reports 74 scoped items with zero errors and zero warnings. The validator's redundant-prerequisite notices for the plane page concern the four direct requirements supplied by the dispatch; they are not removed here.

## 11. Gate record and blockers

The direct gate receipts are green:

- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; the live plan is acyclic and has no item-level cycles, forward references, B-page dependencies, or unresolved ids among its 176 pages with item lists.
- Final-manifest in-memory splice through `validate-plan.mjs`: exit 0; the plan with these four pages substituted is acyclic and has no item-level cycles, forward references, B-page dependencies, or unresolved ids among 180 pages with item lists.
- `node tools/depsource.mjs research/plan-spec.json`: exit 0; 16,688 dependencies resolve to published pages and zero are unresolved. Because the orchestrator has not yet performed the step-4 splice, the batch-specific supplement is the 60-file clause audit in section 10: 58 final external dependencies resolve to published earlier pages and two opened candidates were rejected.
- `node tools/coverage-checklist.mjs research/frontier-10-batch-6.coverage.json`: exit 0; two A pages, 88 harvested headings, zero errors, zero warnings.
- `node tools/content-policy.mjs research/frontier-10-batch-6.pages.json --manifest-only`: exit 0; 74 scoped items, zero errors, zero warnings.
- Structural proof-contract check: 61 proof-bearing ids, 61 scope ids, and 61 contracts; no missing or extra ids, and every contract has citations, derivations, routine steps, all eight boundary cases, and a finite-smoke array. Strict item-file checking belongs to step 5, after those files exist.

The required aggregate command `node tools/gates.mjs --step 2 --run frontier-10` exits 1 in this execution environment: each of its three internal `spawnSync /usr/bin/node` calls is denied with `EPERM`. The wrapper therefore prints `STEP 2 BLOCKED` even though `validate-plan.mjs`, `depsource.mjs`, and `coverage-checklist.mjs` each exit 0 when invoked directly above. The owner prohibited permission prompts, so none was made and no normative tool was edited to evade the sandbox. This wrapper-level runtime restriction is the sole blocker; there is no source-access, licensing, page-size, dependency, or mathematical blocker.

The only proposed plan amendment is the direct `sequences-and-limits` requirement and the prose correction to the choice ledger; this Beta did not edit the plan.
