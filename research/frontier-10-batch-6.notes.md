# Beta-frontier-10-6 scaffold notes

These notes are the durable step-2 reasoning record for the two batch-6 page pairs. They propose no edits outside the four authorised `research/frontier-10-batch-6.*` artifacts.

## Continuity checkpoint — 2026-08-11, step 2

Disk state verified at this checkpoint: the machine scaffold contains 21 + 6 Ramsey items and 38 + 7 plane-graph items; both A pages are below the 60-item split threshold. The coverage harvest contains two independent Ramsey treatments and four plane-graph treatments, including textbooks on both A pages, and `coverage-checklist.mjs` reports no errors or warnings. The newly exposed contractible-edge prerequisite is now a numbered lemma before the three-connected Kuratowski reduction. The page definition also fixes facial boundary-walk length explicitly, counting a bridge twice.

The remaining work after this checkpoint is mechanical and audit-facing: read every final published dependency on disk, finish the exact-schema proof-contract ledger for every proof-bearing item, splice-check the proposed pages against the live plan, run all three required gates, and record their output below. Do not revisit the source harvest unless a gate or dependency statement exposes a genuine mismatch.

## 1. Page shape, reading order, and split decision

| order | page | kind | item count | decision |
|---:|---|:---:|---:|---|
| 217 | `ramsey-theory` | A | 21 | no split |
| 218 | `ramsey-theory-examples` | B | 6 | companion |
| 357 | `plane-graphs-euler-and-the-five-colour-theorem` | A | 38 | no split |
| 358 | `plane-graphs-euler-and-the-five-colour-theorem-examples` | B | 7 | companion |

Neither A page approaches 60 items, so no split is proposed. The exact cut question is therefore inapplicable. If later adjudication adds at least 23 Ramsey items or 23 plane-graph items, the page must be split before authoring rather than shortened; nothing harvested here should be dropped merely to stay under the cap.

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

1. In CB-11 `requires`, append `sequences-and-limits`. The B-page monotone and convex/concave subsequence applications cite the published sequence definition; the existing three requirements are otherwise retained exactly.
2. Replace the CB-11 claim that infinite Ramsey “costs DC” with: “Infinite Ramsey is proved on `N` in ZF by choosing least colours and least witnesses; the transfer corollary is stated only for a set equipped with an injection from `N`.” This avoids the false ZF assertion that every infinite set contains a countably infinite subset.
3. Replace the claim that the König compactness derivation costs DC with: “For trees of finite sequences whose finite successor sets carry their natural order, choose the least successor with arbitrarily high descendants; the compactness proof is in ZF.”
4. Replace the modular-Fermat corollary instruction with an explicit deferral to the future finite-fields material. The standard route needs cyclicity of `F_p^×` and polynomial root bounds, not a local Ramsey lemma.
5. In GT-8, keep the general Jordan curve theorem outside the proof graph, retain Kuratowski–Wagner, and state the four colour theorem only through the existing not-proved-here catalogue. Add the contractible-edge lemma to the advertised Kuratowski machinery.

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

The harvest records 87 source/result-heading dispositions. Five are declines: one `deferred` Ramsey result and four plane-graph decline records, of which two independently record the same four-colour boundary.

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
- Euler must treat forest/bridge and cycle-edge cases explicitly and must state what happens to the number of faces on edge deletion. The disconnected formula includes the null graph.
- The Kuratowski chain must prove the contractible-edge lemma, the three-connected induction, the separation augmentation, and the edge-maximal three-connectivity reduction as separate arguments. A citation to the final theorem cannot substitute for these proofs.
- Dual construction must explain loop/parallel-edge cases and why reciprocal crossing arcs can be chosen polygonally without unintended intersections.
- Five-colour must extract the cyclic neighbour order from the plane embedding, prove the two alternating Kempe connections cannot coexist by polygonal separation, and verify that the colour swap frees a colour at the deleted vertex.

The proof-contract JSON is the step-5 checklist. Its cited clauses are obligations to reproduce or cite exactly; its derivation nodes are not permission to collapse multi-step arguments into “standard.”

## 9. Boundary pass

- Ramsey indices: `s,t,k,c,r` positivity is explicit; recursion assumes `s,t>=2`; `R(3,3)` checks both bounds; `W(k,c)` requires a positive difference; Schur permits `x=y` unless the source theorem states otherwise.
- Infinite results: only finite colour sets; `k=1` is a real base case; the homogeneous set is infinite in the sense of an injection/enumeration, not merely not-finite; no arbitrary-set choice is hidden.
- Trees: root and empty sequence included; every level is nonempty; finite branching includes zero successors; an infinite branch has a node at every level.
- Plane graphs: null graph and disconnected graphs handled in the extended Euler formula; loops are excluded in the primal simple graph but allowed in its dual; bridges count twice in facial length.
- Edge bounds: `n>=3` is explicit; simple graphs only; triangle-free gives face length at least four after bridge/tree boundary cases are discharged rather than assumed.
- Connectivity: three-connected statements exclude small graphs as required; `K_4` is the base case for contraction; simple contraction deletes resulting loops and merges parallel edges.
- Colouring: isolated vertices and disconnected components reduce immediately; degree `<5` is separate from degree `5`; a Kempe component swap affects no edge with exactly one endpoint in the component and the other carrying one of the two swapped colours.

## 10. Published dependency audit

The final dependency list and confidence route are filled after the disk-reading pass. The required route is: open the item file in full, match the exact Statement/Definition clause used, confirm its page is earlier in the transitive plan order, and reject any generated load-bearing claim. Page-level titles or the prose scaffold are not treated as evidence.

## 11. Gate record and blockers

Pending the final gate pass. No source-access, licensing, page-size, or mathematical blocker is currently known. The only proposed plan amendment is the direct `sequences-and-limits` requirement and the prose correction to the choice ledger; this Beta did not edit the plan.
